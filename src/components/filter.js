import React from 'react';



const UserList = ({ users }) => {
	if (users.length > 0) {
		return(
			<ul>
				{users.map((user, userKey) => <li key={user + userKey}>{user}</li>)}
			</ul>
		)}
	return(
		<p>No results</p>
	)
}

export default class FilterUsers extends React.Component {
	constructor(props) {
		super(props);
		this.state = { filteredUsers: this.props.allUsers };
		this.handelOnInput = this.handelOnInput.bind(this);
	}

	getFilteredUsersForText(text) {
		return new Promise(resolve => {
			const time = (Math.random() + 1) * 1250;
			setTimeout(() => {
				const allUsers = this.props.allUsers;
				const filteredUsers = allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
				resolve({filteredUsers});
			}, time);
		})
	}

	handelOnInput(event) {
		const text = event.currentTarget.value;
		this.getFilteredUsersForText(text).then(requestResult => {
			this.setState({
				filteredUsers: requestResult.filteredUsers
			})
		});
	}
	render() {
		return(
			<div>
				<input onInput={this.handelOnInput} />
				<UserList users={this.state.filteredUsers} />
			</div>
		)
	}
}
