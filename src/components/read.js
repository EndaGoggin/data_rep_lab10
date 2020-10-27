import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    // Movies object
    state = {
        movies: []
    };

    // Promise from server to get movie data
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then((response) => {
                this.setState({ movies: response.data.Search })
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