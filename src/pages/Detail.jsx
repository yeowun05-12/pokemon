import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemonData = useSelector((state) => state.pokemon);
  const [flip, setFlip] = useState(false);

  return (
    <>
      <div className='detail_container'>
        {pokemonData.date &&
          pokemonData.date
            .filter((el) => el.id === parseInt(pokemonId))
            .map((el) => (
              <div key={el.id} className='detail_content'>
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
