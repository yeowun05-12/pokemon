import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLikePokemon } from './LikeProvider';

const Search = ({ searchTerm, setSearchTerm }) => {
  const pokemonData = useSelector((state) => state.pokemon);
  const { like, setLike } = useLikePokemon();
  const navigate = useNavigate();

  // 검색 결과 필터링
  const filterPokemons = pokemonData.data?.filter((el) =>
    el.name.includes(searchTerm)
  );

  return (
    <div className='search_container'>
      {filterPokemons && filterPokemons.length === 0 ? (
        <p>일치하는 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {filterPokemons.map((el) => (
            <li
              key={el.id}
              onClick={() => navigate(`/detail/${el.id}`)} // 클릭 시 navigate 사용
            >
              <p
                className='like'
                onClick={(e) => {
                  e.stopPropagation(); // 부모로 버블링 막기
                  setLike((prev) => ({
                    ...prev,
                    [el.id]: !prev[el.id],
                  }));
                }}
                style={{ color: like[el.id] ? 'red' : 'black' }}
              >
                {like[el.id] ? '♥︎' : '♡'}
              </p>
              <img src={el.frontImg} alt={el.name} />
              <h3>{el.name}</h3>
              <p>{el.genus}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
