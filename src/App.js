import React ,{Component}from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component {
 
state = {}

  componentDidMount( ){
    this._getMovies();
  }

  
   _getMovies = async () =>{
    const movies = await this._callApi()
    console.log(movies);
    this.setState({
      movies 
    })
  }
  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) =>{
      return <Movie title={movie.title_english}
       poster={movie.medium_cover_image}
        key={movie.id}
        genres = {movie.genres}
        synopsis = {movie.synopsis}/>
    })
    return movies
  }
  render(){
    console.log('render');
    return (
      <div className={this.state.movies ? 'App' : 'Loading--App'}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}



export default App;
