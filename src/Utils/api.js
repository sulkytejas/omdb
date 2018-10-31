const api_key = process.env.REACT_APP_API_KEY;
const api = `http://www.omdbapi.com/?apikey=${api_key}&s=ninja+turtles`;

//Get First 10 titles
export const getFirstTitle = () =>
  fetch(api)
    .then(res => res.json())
    .then(data => data);

//Get rest of the titles on updating page
export const getRestofTitles = (page) =>
  fetch(`${api}&page=${page}`)
    .then(res => res.json())
    .then(data => data);

//Get titles for based on filters
export const getfilterType = (type,page) =>
  fetch(`${api}&page=${page}&type=${type}`)
    .then(res => res.json())
    .then(data => data);
