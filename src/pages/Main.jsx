import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon);

  const navigate = useNavigate();

  return (
    <div className='main_container'>
      <ul>
        {pokemonData.date &&
          pokemonData.date.map((el) => (
            <li key={el.id} onClick={() => navigate(`/detail/${el.id}`)}>
              <img src={el.frontImg} />
              <h3>{el.name}</h3>
              <p>{el.genus}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
