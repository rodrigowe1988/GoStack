import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Saudacao from "./components/Teste";
import './App.css';
import image from './assets/gidon.jpg';
import api from "./services/api";

export default function App() {

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		api.get('projects').then(response => setProjects(response.data))
	}, []);

	async function handleAddProject() {
		//projects.push(`Novo projeto ${Date.now}.`);
		//setProjects([...projects, `Novo projeto ${Date.now()}`])

		const response = await   api.post('projects', {
			title: `Novo projeto ${Date.now()}`,
			owner: `Rodrigo Weber`
		});

		const project = response.data;

		setProjects([...projects, project]);

		console.log(projects);
	}

	return (
		<>
			<Header title="Homepage1">
				<ul>
					<li>Menu 01</li>
					<li>Menu 02</li>
					<li>Menu 03</li>
				</ul>
			</Header>
			<Header title="Homepage2">
				<ul>
					{projects.map(project => <li key={project.id}>{project.title}</li>)}
				</ul>
			</Header>
			<Saudacao />
			<button type="button" onClick={handleAddProject}>Adicionar um projeto</button>
			<br/>
			<img width="300" src={image} />
		</>
	);
}
//perceba que o que está dentro da tag Header é considerado o CHILDREN dela
