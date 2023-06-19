import './App.css';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import List from './components/List';
import Evento from './components/Envento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutaLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
        <h1>Renderização de Listas</h1>
        <OutraLista itens={meusItens} />
        <OutraLista itens={[]} />
    </div>
  );
}

export default App;
