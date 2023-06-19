import './App.css';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import List from './components/List';
import Evento from './components/Envento';
import Form from './components/Form';

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
        <h1>Testando Evento</h1>
        <Evento />
        <Form />

    </div>
  );
}

export default App;
