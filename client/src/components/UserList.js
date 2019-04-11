import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const User = props => (
	<tr>
		<td> { props.user.firstName } </td>
		<td> { props.user.lastName } </td>
		<td> { props.user.age } </td>
		
		<td> 
			<Link to={"/edit/"+props.user._id}>Edit</Link>
		</td>
	</tr>
	)


export default class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}



	componentDidMount() {
	    axios.get('http://localhost:7778/person/', /*{withCredentials: true}*/ )
	    .then(res => {
	    	const users = res.data.users;
	    	this.setState({ users })
	    		console.log(res.data);
			})
			// .then( response => {
			// 	this.setState({users: response.data});
			// 	console.log(response.data);
			// })

	  //   	.catch(function (error) {console.log(error);})
    }
   
 	userList() {
 		return this.state.users.map((currentUser, i) => {
 			return <User user={currentUser} key={i} />;
 		})
 	}

    render() {
     	return(
	      	<div>
	      		<h3> User List </h3>
	      		<table className="table table-striped" style={{ marginTop: 20}}>
	      		<thead>	
	      			<tr>
	      				<th>First Name </th>
	      				<th>Last Name</th>
	      				<th>Age</th>
	      			</tr>
	      		</thead>
	      			<tbody>
	      				{ this.userList() }
	      			</tbody>
	      		</table>
	      	</div>
      	)
    }  
}



