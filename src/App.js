import React from 'react';

const Titulo = (props) => {
  // const Titulo = ({cor, texto}) => { assim seria desestruturado
  //return <h1 style={{color: cor}}>{texto}</h1>
  return <h1 style={{color: props.cor}}>{props.texto}</h1>
}

const App = () => {
  return <div>
    <Titulo cor="red" texto='Meu título 1'/>
    <Titulo cor="blue" texto='Meu título 1'/>
    <Titulo texto='Meu título 1'/>
  </div>;
}

export default App;

// snippets rafce