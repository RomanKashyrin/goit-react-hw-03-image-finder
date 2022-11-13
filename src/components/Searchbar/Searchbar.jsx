import { Component } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {

    state = {
        query: '',
    }

    handleInputChange = e => {
        this.setState({ query: e.target.value.toLowerCase() });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.query === '') {
            toast.error('Sorry, there are no images matching your search query. Please try again.');
            return;
        }

        this.props.onSubmit(this.state.query);
    }

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>

                    <input
                        onInput={this.handleInputChange}
                        value={this.state.query}
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />

                    <button type="submit" className="SearchForm-button">
                        <span>Search</span>
                    </button>
                </form>
            </header>
        );
    }
}

Searchbar.protoType = {
    onSubmit: PropTypes.func,
}