export const getGifs = async (category) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=2GSuLnZ6VG4bQ6DXvKlpCOSuctfJgbPk`);
  const { data }  = await response.json();
  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images.downsized_medium.url
    };
  });

  return gifs;
};
