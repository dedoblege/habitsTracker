import "./App.css";
import Activities from "./components/Activities/Activities";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>We'll be a calendar here</div>
      </header>
      <div className="App-body">
        <Activities />
      </div>
      <footer className="App-footer">
        <div>We'll have some buttons here</div>
      </footer>
    </div>
  );
}

export default App;
