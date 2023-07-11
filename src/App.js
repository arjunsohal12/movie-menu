import react, {useEffect, useState} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCart from './MovieCart'


const API_URL = "http://www.omdbapi.com?apikey=9002e45f"



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Shrek")
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className='search'>
                <input placeholder="search for movies"
                value={searchTerm}
                onChange = {(e) => {
                    setSearchTerm(e.target.value)
                }}
                />
                <img src={SearchIcon} alt={"Search"} onClick= {() => {
                    searchMovies(searchTerm)
                }} ></img>

            </div>
            {
                movies?.length > 0 ?
                (
                    <>
                    <div className="container">
                        {movies.map( (movie) => 
                            (<> <MovieCart movie1={movie} /></>)
                        )}
                    </div>
                    </>
                ) : (
                    <div className="empty"> <h1>No Movies Found</h1></div>
                )}

        </div>
    
    
    );
}

export default App