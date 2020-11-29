import React from 'react';

const GifGridItem = (gif) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={gif.gif.url} alt={gif.gif.title} />
      {/* <p>{gif.gif.title}</p> */}
    </div>
  );
}

export default GifGridItem;
