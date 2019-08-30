import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots : [],
			searchfield: ''
		}
		console.log('constructor');
	}

	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value});
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
  			.then(response => response.json())
  			.then(users => this.setState({robots:users}));
  			console.log('didMount');

	}

	render() {
		const filteredList = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			});
		console.log('render');
		if(this.state.robots.length === 0) {return <h1>Loading</h1>}

		else {
			return (
			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<Cardlist robots={filteredList}/>
				</Scroll>
			</div>
			)
		}
	}
}

export default App;
