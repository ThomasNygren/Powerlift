import * as React from 'react';
import { render } from 'react-dom';

const movies = ['Star Wars', 'The Matrix', 'Forrest Gump'];

const App = ({movies}: { movies: string[] }) => {
    return (
        <ul>
            {movies.map(movie => <li>{movie}</li>) }
        </ul>
    );
}

render(<App movies={movies} />, document.getElementById('PowerliftApp'));