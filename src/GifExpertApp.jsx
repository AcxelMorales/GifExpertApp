import React, { Fragment, useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One piece']);

  return (
    <Fragment>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(c => <GifGrid key={c} category={c} />)}
      </ol>
    </Fragment>
  );
}

export default GifExpertApp;
