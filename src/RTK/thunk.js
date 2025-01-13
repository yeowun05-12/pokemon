import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMultiplePokemonById = createAsyncThunk(
  'pokemon/fetchMultiplePokemonById',
  async (maxPokemonId) => {
    const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);

    const fetchAPI = async (pokemonId) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      const data = await response.json();

      const imgResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-form/${pokemonId}/`
      );
      const imgData = await imgResponse.json();

      const pokemonData = {
        id: pokemonId,
        name: data.names.find((el) => el.language.name === 'ko').name,
        genus: data.genera.find((el) => el.language.name === 'ko').genus,
        frontImg: imgData.sprites.front_default,
        backImg: imgData.sprites.back_default,
        flavor: data.flavor_text_entries.find((el) => el.language.name === 'ko')
          .flavor_text,
      };
      return pokemonData;
    };
    return await Promise.all(numberArray.map((el) => fetchAPI(el)));
  }
);
