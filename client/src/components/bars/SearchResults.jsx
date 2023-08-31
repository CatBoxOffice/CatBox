import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("q");

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch(`/api/movies/searchByName?q=${searchQuery}`);
                console.log(searchQuery)
                const data = await response.json();
                console.log(data)
                setSearchResults(data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        fetchSearchResults();
    }, [searchQuery]);

    return (
        <div>
            <h2>Search Results for "{searchQuery}"</h2>
            <ul>
                {searchResults.map((movie) => (
                    <li key={movie.id}>
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                        {/* Add more details about the movie */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;