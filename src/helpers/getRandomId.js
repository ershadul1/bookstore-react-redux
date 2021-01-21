const getRandomId = () => {
  const min = Math.ceil(0);
  const max = Math.floor(99999999);
  return Math.floor(Math.random() * (max - min) + min);
};

export default getRandomId;
