import PropTypes from 'prop-types';

export default function Item({ marca, ano_lancamento }) {
	return (
		<>
			<li>
				{marca} - {ano_lancamento}
			</li>
		</>
	);
}

//adicionar tipos às variáveis
Item.propType = {
	marca: PropTypes.string.isRequired,
	ano_lancamento: PropTypes.number,
}

//valores default
Item.defaultProps = {
	marca: "Faltou a marca",
	ano_lancamento: 0,
}
