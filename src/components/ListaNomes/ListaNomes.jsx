function ListaNomes(props) {
  const nomesOrdenados = props.nomes.sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {nomesOrdenados.map((nome) => (
        <li
          key={nome.nome}
          style={{
            color: nome.nota >= 50 ? 'green' : 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            fontSize: '30px',
          }}
        >
          {nome.nome}
        </li>
      ))}
    </ul>
  );
}

export default ListaNomes;