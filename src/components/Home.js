import React from 'react';
import EmailValidator from "../email-validator";
import md5 from "md5";
import RodzicComponent from "./ex10";
import FilterUsers from "./filter";

const AppHeader = () => (
	<header className="ui fixed menu">
		<nav className="ui container">
			<a href="#" className="header item">
				<img className="logo" alt="Logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
				Lista kontaktów
			</a>
			<div className="header item">
				<button className="ui button">Dodaj</button>
			</div>
		</nav>
	</header>
)

// const Avatar = function({login}) {
// 	var imgUrl = `http://api.adorable.io/avatars/55/${login}.png`;
//
// 	if (new EmailValidator().validateEmail(login)) {
// 		const loginMd5 = md5(login);
// 		imgUrl = `http://api.adorable.io/avatars/55/${loginMd5}.png`;
// 		console.log(imgUrl);
// 	}
// 	return (
// 		<img src={imgUrl} alt="Avatar" className="ui mini rounded image" />
// 	)
// }

class Avatar extends React.Component {
	render() {
		const { login } = this.props;
		const isEmail = new EmailValidator().validateEmail(login);
		const newLogin = isEmail ? md5(login) : login;
		const imgUrl = `http://api.adorable.io/avatars/55/${login}.png`;

		return (
			<img src={imgUrl} alt="Avatar" className="ui mini rounded image" />
		)

	}
}

// const ContactItem = function({ login, name, department }) {
// 	const imgUrl = `http://api.adorable.io/avatars/55/${login}.png`;
// 	return (
// 		<li className="item">
// 			<Avatar login={login} />
// 			<div className="content">
// 				<h4 className="header">{name}</h4>
// 				<div className="description">{department}</div>
// 			</div>
// 		</li>
// 	)
// }
const Monitor = function ({monitorName, monitorValue}) {
	return (
		<div>
			<h3>{monitorName}</h3>
		  <output> {monitorValue}</output>
		</div>
	)
}


class CounterComp extends React.Component {
	constructor() {
		super();
		this.state = {counter: 0, gCounter: 0, doubleClicks: 0};
	}
	render() {
		return (
			<div className="counter" onDoubleClick={this.countDoubleCliks.bind(this)}>
				<button onClick={this.increment.bind(this)}>+</button>
				<output> {this.state.counter} </output>
				<button onClick={this.decrease.bind(this)}>-</button>
				<hr />
			  <Monitor monitorName="Suma" monitorValue={this.state.gCounter}/>
				<br />
				<Monitor monitorName="Podwojne" monitorValue={this.state.doubleClicks}/>

			</div>
		)
	}
	countDoubleCliks() {
		this.setState({
			doubleClicks: this.state.doubleClicks + 1
		})
	}

	increment() {
		this.setState({
			counter: this.state.counter + 1,
			gCounter: this.state.gCounter +1
		})
	}

	decrease() {
		this.setState({
			counter: this.state.counter - 1,
			gCounter: this.state.gCounter +1
		})
	}
}

class ContactItem extends React.Component {
	render() {
		const { login, name, department } = this.props;
		const imgUrl = `http://api.adorable.io/avatars/55/${login}.png`;
		return (
			<li className="item">
				<Avatar login={login} />
				<div className="content">
					<h4 className="header">{name}</h4>
					<div className="description">{department}</div>
					<CounterComp />
				</div>
			</li>
		);

	}
}


const ContactList = () => (
	<ul className="ui relaxed divided list selection">
		<ContactItem login="typeofweb1" name="Lena" department="JavaScript Developer" />
		<ContactItem login="typeofweb2" name="Brian" department="Human Resources" />
		<ContactItem login="typeofweb3" name="Rick" department="QA" />
		<ContactItem login="typeofweb@gmail.com" name="Dick" department="QA" />
	</ul>
)

class DateComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date()}
	};

	componentDidMount() {
		this.timerId = window.setInterval(this.updateDate.bind(this), 1000);
	}
	componentWillUnmount() {
		window.clearInterval(this.timerId);
	}
	updateDate() {
		this.setState({
			date: new Date()
		})
	}
	render() {
		const dateStr = this.state.date.toTimeString();
		return <time>{dateStr}</time>;
	}
}


class DateOnOffComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dateVisible: true };
	}

	onButtonClick() {
		this.setState(state => ({ dateVisible: !state.dateVisible }));
	}
	render() {
		return (
			<div>
				<button onClick={this.onButtonClick.bind(this)}>Pokaż czas</button>
				<br />
				{this.state.dateVisible && <DateComponent />}
		  </div>
		)
	}
}


class UserNames extends React.Component {
	constructor() {
		super();
		this.state = {forname: " Name", secondname: " Surename"}
	}
	render() {
		return (
			<div>
				<input onInput={this.changeName.bind(this)}/>
				<output>{this.state.forname}</output><br />
				<input onInput={this.changSecondname.bind(this)}/>
				<output>{this.state.secondname}</output>
			</div>
		)
	}
	changSecondname(event) {
		// console.log("was", this.state.secondname);
		this.setState({
			secondname: event.target.value
		}, () => {
			console.log("secondname", this.state.secondname)
		})
	}
	changeName(event) {
	  this.setState({
			forname: event.target.value
		}, () => {
			console.log("forname", this.state.forname)
		})
	}
}
const allUsers = ["Michal", 'Kasia', "Sofia", 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];
const Home = () => (
  <div>
    <AppHeader />
		<main className="ui main text container">
			<FilterUsers allUsers={allUsers}/>
{
			// 	<RodzicComponent /><br />
			// <DateOnOffComponent /><br />
			// <UserNames />
		  // <ContactList />
		}
		</main>


  </div>
);

export default Home;
