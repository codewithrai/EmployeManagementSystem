import './App.css';
import AddEmployee from './components/AddEmployee';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <AddEmployee />
      <h1 className="text-3xl font-bold underline">
      Aun Syed Shah - Testing
    </h1>
    </>
  );
}
export default App;
