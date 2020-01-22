import React, { useState } from 'react';

//Componente: Bloco isolado de HTML, CSS e JS o qual não interfere no resto da aplicação. Nesse código está representado por uma função que renderiza algum HTML. (Regra de apenas 1 por arquivo)
//Propriedade: Informações que um componente PAI passa para o componente Filho. Ao utilizar propriedade função da propriedade utiliza (props) para passar propriedade
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade). Utilizar useState [variavel, funcaoParaAtualizarVariavel]

function App() {
  const [counter, setCounter] = useState(0);
  function incrementCounter(){    
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador {counter}
      </h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
