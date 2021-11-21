import './App.css';
import NoteArea from './components/note';
import Taskbar from './components/taskbar';
import MyNavbar from './components/mynavbar';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <br/>
      <div className="container" style={{ marginTop: "4rem", marginBottom: "5rem" }}>
        <div className="row">
            <div className="col-sm-6 wrapper">
              <NoteArea 
                pid="1"
                title="Planning 1"
                content="There will be details of planning..."
                date="2021-10-01T06:17:57.980+00:00"
                priority="high"
              />
            </div>
            <div className="col-sm-6 wrapper">
              <NoteArea 
                pid="2"
                title="Planning 2"
                content="There will be details of planning..."
                date="2021-10-01T06:17:57.980+00:00"
                priority="low"
              />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 wrapper">
              <NoteArea 
                pid="1"
                title="Planning 1"
                content="There will be details of planning..."
                date="2021-10-01T06:17:57.980+00:00"
                priority="high"
              />
            </div>
            <div className="col-sm-6 wrapper">
              <NoteArea 
                pid="2"
                title="Planning 2"
                content="There will be details of planning..."
                date="2021-10-01T06:17:57.980+00:00"
                priority="medium"
              />
            </div>
        </div>
      </div>
        <Taskbar/>
    </div>
  );
}

export default App;
