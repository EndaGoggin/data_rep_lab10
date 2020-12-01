import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
export class Edit extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    // Runs when page opens and fills in data
    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.Title,
                Year:response.data.Year,
                Poster:response.data.Poster
            })
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    // Update state when value changes for Title
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    // Update state when value changes for Year
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    // Update state when value changes for Poster
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    // Stops button calling multiple times
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster)

        // Passing to server
        const newMovie = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster,
            _id: this.state_id
        }
        console.log(this.state._id)
        // Pass up edited movie
        axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
        .then(res =>{
            console.log(res.data)
        })
        .catch((error)=>{
        console.log(error)
        });
        // axios.post('http://localhost:4000/api/movies', newMovie)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    // Output with styling for user 
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Movie Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Edit Movie'
                            className="btn btn-primary">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}