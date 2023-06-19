import './App.css';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import List from './components/List';
import Evento from './components/Envento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
        <h1>Renderização Condicional</h1>
        <Condicional / >
    </div>
  );
}

export default App;
