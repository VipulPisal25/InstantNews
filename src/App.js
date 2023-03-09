import './App.css';
import NavBar from './components/NavBar.js';
import News from './components/News.js';
function App() {
  return (
    <div>
      <NavBar/>
      <News pageSize={6}/> 
    </div>
    
  );
}

export default App;
