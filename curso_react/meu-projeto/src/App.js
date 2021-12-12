import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const soma = (num1, num2) => num1 + num2;

  return (
    <div className="App">
      <h1>Teste</h1>
      <p>Meu primeiro projeto react</p>
      <h4>Minha primeira soma:</h4>
      <p>Resultado da soma = {soma(1, 2)}</p>
      <HelloWorld />
    </div>
  );
}

export default App;
