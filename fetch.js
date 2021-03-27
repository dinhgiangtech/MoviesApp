const fetch=require('node-fetch')
fetch('https://api.themoviedb.org/4/list/3?page=1&api_key=ca6757db8048c2ac657560858f4f9495')
  .then(response => response.json())
  .then(data => console.log(data));