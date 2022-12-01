import axios;
let url = `https://moviebackend.onrender.com/movie/`;
await axios.get(url).then(
    (response) => {
        document.title = response.data[0].title;
        console.log(response);
        console.log(movie);
    }
).catch(
    console.log('Error')
)