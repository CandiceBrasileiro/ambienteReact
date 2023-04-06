import React from 'react';
import Footer from './Footer';
import Form from './form/Form';
import Header from './Header';

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Ativo</p>;
  } else {
    return null;
  }
};


const App = () => {
  return (
<React.Fragment>
  <Teste />
  <Header />
  <Form />
  <Footer />
</React.Fragment>
  );
};

export default App;

// snippets rafce