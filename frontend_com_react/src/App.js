import React from "react";

import Header from './components/Header';
import Teste from "./components/teste";

export default function App() {

	return (
		<div className="App">
			<div>
				<Header title="Homepage">
					<ul>
						<li>Homepage</li>
						<li>Projects</li>
						<li>teste</li>
					</ul>
				</Header>
				<Header title="Projects">
					<ul>
						<li>Login</li>
						<li>Homepage</li>
						<li>Projects</li>
					</ul>
				</Header>
			</div>
			
		</div>
	);

}

