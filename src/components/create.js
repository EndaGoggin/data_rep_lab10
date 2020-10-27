import { render } from '@testing-library/react';
import React from 'react';
export class Create extends React.Component {

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
                            value='Add Movie'
                            className="btn btn-primary">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}