import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
        <SayMyName nome="Diego" />
        <SayMyName nome="João" />
        <SayMyName nome={nome} />
        <Pessoa 
          nome="Rodrigo" 
          idade="28" 
          profissao="Programador" 
          foto="https://via.placeholder.com/150" 
        />
    </div>
  );
}

export default App;
