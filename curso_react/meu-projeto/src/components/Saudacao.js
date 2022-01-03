export default function Saudacao({ nome }) {
	return (
		<>
			{nome.length > 0 ? (
				<p>{`Olá, ${nome}`}</p>
			) : (
				<p><b>Aqui vai o seu nome quando digitá-lo acima...</b></p>
			)
		}
		</>
	)
}
