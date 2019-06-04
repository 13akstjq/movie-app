import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title , poster,genres,synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster class="Movie__Poster" poster={poster} alt={title}></MoviePoster>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenre class="Movie__Genres" genre={genre} key={index}></MovieGenre>)}
                </div>
                <div className="Movie__synopsis">
                    {synopsis}
                </div>
            </div>
        </div>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

function MoviePoster({poster,alt}){
    return (
        <img src={poster} alt ={alt} title={alt} className="Movie__Poster"></img>
    )
}


MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}
export default Movie;
