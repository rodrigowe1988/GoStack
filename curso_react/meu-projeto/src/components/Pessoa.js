export default function Pessoa(props) {

	return <div>
		<p><b>Nome:</b> {props.nome}</p>
		<p><b>Idade:</b> {props.idade} anos.</p>
		<p><b>Profissão:</b> {props.profissao}.</p>
		<img src={props.foto} alt="Meu avatar do Github" width="300px" />
	</div>
}
