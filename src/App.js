import './App.css';
import Taskbar from './components/taskbar';
import MyNavbar from './components/mynavbar';
import NoteArea from './components/notearea';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <br/>
      <div className="container" style={{ marginTop: "4rem", marginBottom: "5rem" }}>
        <NoteArea/>
      </div>
      <Taskbar/>
    </div>
  );
}

export default App;
