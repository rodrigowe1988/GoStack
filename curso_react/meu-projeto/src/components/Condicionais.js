import { useState } from "react";

export default function Condicional() {

	const [ email, setEmail ] = useState();
	const [ userEmail, setUserEmail ] = useState();

	function enviarEmail(e) {
		e.preventDefault();
		setUserEmail(email);
		//console.log('Estou funcionando....');
		console.log(userEmail);
	}

	function limparEmail() {
		setUserEmail('');
		//console.log('Estou funcionando....');
		console.log('E-mail resetado com sucesso...');
	}

	return (
		<div>
			<h2>Cadastre o e-mail:</h2>
			<form>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Digite o seu e-mail..."
					onChange={(e) => setEmail(e.target.value)}
				/>
					<button onClick={enviarEmail}>Enviar-email</button>
					{userEmail && (
						<div>
							<p>O e-mail do usuário é: <b>{userEmail}</b>.</p>
							<button onClick={limparEmail}>Limpar e-mail</button>
						</div>
					)}
			</form>

		</div>
	)
}
