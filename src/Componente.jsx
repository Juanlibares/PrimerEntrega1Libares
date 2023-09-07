const Componente = (props) => {
    const { numeros } = props;
    return (<>
        <h1>Hola desde mi componente</h1>
        <p>{numeros.find((item) => item === 2)}</p>
        <button></button>
    </>)
}

export default Componente