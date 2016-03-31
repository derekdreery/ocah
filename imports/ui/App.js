import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Games } from '../api/games.js';

// App component - represents the whole app
class App extends Component {

    constructor() {
        super();
        this.state = {
            newName: ''
        };
    }

    render() {
        const {games} = this.props;
        return (
            <div className="container">
                <header>
                    <h1>OpenCAH</h1>
                </header>
                {games.map((game, idx) => <div key={idx}>
                    <span>{game.name}</span>
                    <span>{game.createdAt.toString()}</span>
                </div>)}
                <form onSubmit={evt => {
                    evt.preventDefault();
                }}>
                <input value={this.state.newName} onChange={evt => {
                    this.setState({newName: evt.target.value});
                }} value="" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

App.propTypes = {
    games: PropTypes.array.isRequired
};


export default createContainer(() => ({
    games: Games.find({}).fetch()
}), App);
