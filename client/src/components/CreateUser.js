import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

	constructor(props) {
		super(props);

		this.onChangeCreateFirstName = this.onChangeCreateFirstName.bind(this);
        this.onChangeCreateLastName = this.onChangeCreateLastName.bind(this);
        this.onChangeCreateAge = this.onChangeCreateAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			firstName: '',
			lastName: '',
			age: '',
			form_completed: false

		}

	}

	onChangeCreateFirstName(e) {
		this.setState({
			firstName: e.target.value
		});
	}

	onChangeCreateLastName(e) {
		this.setState({
			lastName: e.target.value
		});
	}

	onChangeCreateAge(e) {
		this.setState({
			age: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(`Form submitted:`);
		console.log(`CreateFirstname: ${this.state.firstName}`);
		console.log(`CreateLastname: ${this.state.lastName}`);
		console.log(`CreateAge: ${this.state.age}`);

		const newUser = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			age: this.state.age,
		
		}
		
		axios.post('http://localhost:7778/person/', newUser)
			  .then(function (response) {
			    console.log(response);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });	

		



		this.setState({
			firstName: '',
			lastName: '',
			age: [],
			
		})
	}


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChangeCreateFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.onChangeCreateLastName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Age: </label>
                        <input 
                                type="number" 
                                className="form-control"
                                value={this.state.age}
                                onChange={this.onChangeCreateAge}
                                />
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
