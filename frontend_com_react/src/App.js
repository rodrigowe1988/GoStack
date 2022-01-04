import React from "react";
import Header from './components/Header';
import Saudacao from "./components/Teste";

export default function App() {
	return (
		<>
			<Header title="Homepage">
				<ul>
					<li>Homepage</li>
					<li>Projects</li>
				</ul>
			</Header>
			<Header title="Projects">
				<ul>
					<li>Login</li>
					<li>Homepage</li>
					<li>Projects</li>
				</ul>
			</Header>
			<Saudacao />
		</>
	);
}

