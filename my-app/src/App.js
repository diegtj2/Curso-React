import './App.css';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
        <h1>Testando CSS</h1>
        <Frase />
        <Frase />
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
