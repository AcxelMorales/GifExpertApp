import React, { Fragment } from 'react';

import GifGridItem from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h2>{category}</h2>

      {loading && <p className="animate__animated animate__flash">'Cargando...'</p>}
      {(images.length === 0 && !loading) && <p className="animate__animated animate__fadeIn">'No se encontraron resultados'</p>}

      <div className="card-grid animate__animated animate__fadeIn">
        {
          images.map(gif => (
            <GifGridItem
              key={gif.id}
              gif={gif}
            />
          ))
        }
      </div>
    </Fragment>
  );
}

export default GifGrid;
