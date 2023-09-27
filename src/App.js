import './App.css';
import Counter from './components/counter/counter';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <>
    <h2 className='text-center'>Counter App</h2>
    <Counter />
    </>
  );
}

export default App;
