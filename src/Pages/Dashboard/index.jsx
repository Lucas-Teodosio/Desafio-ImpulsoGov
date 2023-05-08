import React, { useState } from "react";
import ListaNomes from "../../components/ListaNomes/ListaNomes";
import { Container } from "./style";

function App() {
	const [nomes, setNomes] = useState([]);
	const [nome, setNome] = useState("");
	const [nota, setNota] = useState("");

	const handleNomeChange = (event) => {
		setNome(event.target.value);
	};

	const handleNotaChange = (event) => {
		setNota(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// Verificar se nome e nota estão preenchidos antes de adicionar à lista
		if (nome && nota) {
			setNomes([...nomes, { nome, nota }]);
			setNome("");
			setNota("");
		}
	};

	return (
		<Container>
			<div className='left'>
				<h1>Coloque aqui o nome e nota</h1>
				<form onSubmit={handleSubmit}>
					<label>
						Nome:
						<input type='text' value={nome} onChange={handleNomeChange} />
					</label>
					<br />
					<label>
						Nota:
						<input type='number' value={nota} onChange={handleNotaChange} />
					</label>
					<br />
					<button type='submit'>Adicionar</button>
				</form>
			</div>
			<div className='right'>
				<h1>Lista de Nomes</h1>
				<ListaNomes nomes={nomes} />
			</div>
		</Container>
	);
}

export default App;
