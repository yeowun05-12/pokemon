import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useLikePokemon } from './LikeProvider';

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemonData = useSelector((state) => state.pokemon);
  const [flip, setFlip] = useState(false);
  const { like, setLike } = useLikePokemon();

  return (
    <>
      <div className='detail_container'>
        {pokemonData.data
          ?.filter((el) => el.id === parseInt(pokemonId))
          .map((el) => (
            <div key={el.id} className='detail_content'>
              <p
                className='detail_like'
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
              <h2>{el.name}</h2>
              <p className='genus'>{el.genus}</p>
              <p className='flavor'>{el.flavor}</p>
              <img src={flip ? el.backImg : el.frontImg} />
              <p className='reverse' onClick={() => setFlip(!flip)}>
                뒤집기
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
