import React from 'react';
import { MovieItem } from './movieItem';

export class Movies extends React.Component{

    // Pass individual movies into movieItem component
    render(){
        return this.props.movies.map((movie)=>{
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}