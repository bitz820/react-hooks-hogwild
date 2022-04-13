import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogs from "../porkers_data";

function App() {

	const [greasedFilter, setGreasedFilter] = useState(false)

	const toggleGreased = () => {
		setGreasedFilter(greasedFilter => !greasedFilter)
	}

	const text = greasedFilter ? "All" : "Greased"

	const filteredHogs = hogs.filter(hog => greasedFilter === true ? hog.greased : hog)

	return (
		<div className="App">
			<Nav handleGreased={toggleGreased} text={text} />
			<HogContainer hogs={filteredHogs} />
		</div>
	);
}

export default App;
