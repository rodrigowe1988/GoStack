import Button from "./evento/Button";

export default function Evento() {
	function meuEvento() {
		console.log(`Opa, fui ativado! `);
	}

	function segundoEvento() {
		console.log('Olha só o segundo evento....');
	}
	return(
		<>
			<p>Clique aqui para ativar um evento no console</p>
			<Button event={meuEvento} text="Primeiro Evento de muitos..." />
			<Button event={segundoEvento} text="E esse já é o segundo..." />
			<br></br>
      		<button onClick={meuEvento}>Ativar!</button>
		</>
	)
}
