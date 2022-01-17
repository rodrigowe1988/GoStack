interface RepositoryItemProps {
	repository: {
		name: string;
		description: string;
		html_url: string;
	}
}

export function RepositoryItem(props: RepositoryItemProps) {
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
