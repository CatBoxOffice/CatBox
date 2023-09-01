import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchResults.css";



const SearchResults = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("q");

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch(`/api/movies/searchByName?q=${searchQuery}`);
                // console.log(searchQuery)
                const data = await response.json();
                // console.log(data)
                setSearchResults(data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        fetchSearchResults();
    }, [searchQuery]);


    return (
        <div className="search-results-container">
            <h2>Search Results for "{searchQuery}"</h2>
            <ul className="movie-list">
                {searchResults.map((movie) => (
                    <li key={movie.id} className="movie-item">
                        <img src={movie.poster} alt={movie.title} className="movie-image" />
                        <div className="movie-details">
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                            <button className="add-review-button">Add Review</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}



export default SearchResults;