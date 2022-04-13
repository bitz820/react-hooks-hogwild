import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({handleGreased, text}) => {

	const handleClick = () => {
		handleGreased()
	}

	const sortName = (e) => {
		console.log(e.target.value)
	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
			<button onClick={handleClick}>Click to show {text} Hogs</button>
			<select onChange={sortName}>
				<option value="name">Name</option>
			</select>
			</div>
		</div>
	);
};

export default Nav;
