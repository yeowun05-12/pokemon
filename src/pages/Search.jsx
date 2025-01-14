import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLikePokemon } from './LikeProvider';

const Search = ({ searchTerm, setSearchTerm }) => {
  const pokemonData = useSelector((state) => state.pokemon);
  const { like, setLike } = useLikePokemon();
  const navigate = useNavigate();

  //옵셔널 체이닝을 사용해서 ?. 데이터가 있을 때만 filter가 작동한다!
  // const filterPokemon = pokemonData.data?.filter((el) => {
  //   el.name.includes(searchTerm);
  // });

  return (
    <>
      <div className='search_container'>
        <ul>
          {pokemonData.date
            ?.filter((el) => {
              return el.name.includes(searchTerm);
            })
            .map((el) => (
              <li key={el.id} onClick={() => navigate(`/detail/${el.id}`)}>
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
                <img src={el.frontImg} />
                <h3>{el.name}</h3>
                <p>{el.genus}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
