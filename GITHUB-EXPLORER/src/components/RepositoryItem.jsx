export function RepositoryItem(props) {
	return (
		<li>
		<strong>{props.repository.name}</strong>
		<p>{props.repository?.description ?? 'Esse repositório NÃO possui descrição'}</p>

		<a href={props.repository.html_url}>
			Acessar repositórios
		</a>

	</li>

	)
}
