import Container from './components/container';
import Navbar from './components/navbar';
import Form from './components/form/form';
import './App.css';

function App() {
  return (
    <div className='App'> 
      <Navbar/> <Container/> <Form/>
    </div>
  );
}

export default App;
