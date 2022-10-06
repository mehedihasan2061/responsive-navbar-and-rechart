
import './App.css';
import Assignment from './component/Assignment/Assignment';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-4xl font-bold underline p-2">This is  big heading</h1>
      <h3 className='text-3xl'>this is h3 heading</h3>
      <Pricing></Pricing>
      <Assignment></Assignment>
    </div>
  );
}

export default App;
