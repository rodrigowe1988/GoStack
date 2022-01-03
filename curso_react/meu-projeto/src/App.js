import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Item from './components/Item';
import Evento from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicionais';
import List from './components/List';
import SeuNome from './components/SeuNome';
import { useState } from 'react';
import Saudacao from './components/Saudacao';

export default function App() {

  const name = "Rogério";
  const picture = "https://github.com/rodrigowe1988.png";

  //para renderizar listas
  const meusItens = ['React', 'Vue', 'Angular'];

  //State Lift
  const [nome, setNome] = useState();

  return (
    <div className="App">

      <HelloWorld />
      <SayMyName nome="Rodrigo" />
      <SayMyName nome={name} />
      <Pessoa
        nome="Rodrigo"
        idade="33"
        profissao="Programador"
        foto={picture}
      />
      <h3>Manipulando listas: </h3>
      <Item marca={"Ferrari"} ano_lancamento={1980}/>
      <Item marca={"Lambourghini"} ano_lancamento={1980}/>
      <Item />
      <Evento />
      <Form />
      <h1>Renderização Condicional</h1>
      <Condicional />
      <h1>Renderização de Listas</h1>
      <List itens={meusItens}/>
      <List itens={[]}/>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
    </div>
  );
}

