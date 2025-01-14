import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLikePokemon } from './LikeProvider';

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon);

  const navigate = useNavigate();
  const { like, setLike } = useLikePokemon();

  return (
    <div className='main_container'>
      <ul>
        {pokemonData.data?.map((el) => (
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
  );
}
