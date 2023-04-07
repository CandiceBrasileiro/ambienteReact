import React from 'react';
import Header from './DesafioC/Header';
import Home from './DesafioC/Home';
import Produtos from './DesafioC/Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)



const App = () => {
  
  const {pathname} = window.location;

  let Pagina;
  if(pathname === '/produtos'){
    Pagina = Produtos
  } else {
    Pagina = Home
  }
  return (
  <section>
    <Header />
    <Pagina />
  </section>
  );
};

export default App;

// snippets rafce