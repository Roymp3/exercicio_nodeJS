import './App.css';
import FuncionarioMes from './FuncionarioMes';

function App() {
  return (
    <div className="App">
      <h1>Zoo</h1>
      <FuncionarioMes foto={"https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic_2810728.webp?w=1600&h=900"} codigoFuncionario={"123"} nome={"Tigresa"}/>
      <FuncionarioMes foto={"https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.webp?w=1600&h=900"} codigoFuncionario={"321"} nome={"Leão"}/>
    </div>
  );
}

export default App;
