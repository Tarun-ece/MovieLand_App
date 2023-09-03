import {useState, useEffect} from "react";
import MovieCard from "./MovieCard.jsx";
import SearchIcon from './search.svg';
import './App.css';
const API_URL="http://www.omdbapi.com?apikey=8896bf3a";

const movie1= 
    {
        "Title": "UFC 18: Road to the Heavyweight Title",
        "Year": "1999",
        "imdbID": "tt0483513",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjI2N2UyMDctOTYwZi00ZjYwLWFjOTItZjIwN2Q5ZWYwYzY0XkEyXkFqcGdeQXVyMDE4MzA0NQ@@._V1_SX300.jpg"
    }



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState(" ");
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${'title'}`);
        const data = await response.json();
        setMovies(data.Search);
    }       
    useEffect(()=>{
        searchMovies('Spiderman');
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
            <input type="text" placeholder="Search for a movie..." value={searchValue} onChange={(e) => { setSearchValue(e.target.value); 
                searchMovies(e.target.value); }} />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchValue)}
                />
            </div>
            {movies?.length > 0
                ? (
                <div className="container">
                    {movies.map((movie) => (
                    <MovieCard movie={movie}
                /> 
                    ))}
                </div>
                ) : (
                    <div className="empty">
                    <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
        ); 
};

export default App;