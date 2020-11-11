import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    // Movies object
    state = {
        movies: []
    };

    // Promise from server to get movie data from server
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data.movies })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // Passing movies object into movies component
    render() {
        return (
            <div>
                <h1>This is the read component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}