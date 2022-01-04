//percorrer uma lista com .map e usando condicional para
//quando a lista estiver vazia, imprimir um aviso

export default function List({ itens }) {
	return (
		<>
			<h3>Lista qualquer:</h3>
			{itens.length > 0 ? (
				itens.map((item) => <p>{item}</p>)
				) : (
					<p>A lista está vazia!</p>
			)}
		</>
	)
}
