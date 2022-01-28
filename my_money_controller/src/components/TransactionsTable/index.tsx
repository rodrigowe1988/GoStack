import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../services/api";

export function TransactionsTable() {
	useEffect(() => {
		api.get('transactions')
			.then(data => console.log(data))
	}, []);
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Desenvolvimento de website</td>
						<td className="deposit">R$10.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/01/2022</td>
					</tr>
					<tr>
						<td>Aluguel</td>
						<td className="withdraw">-R$575,00</td>
						<td>Moradia</td>
						<td>29/01/2022</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}
