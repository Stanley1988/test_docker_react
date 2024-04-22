import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <h1>
        App Version {process.env.REACT_APP_SERVICES_VERSION}
        <Greet isAdmin={true} fname="Peter" surname="Parker" age={34}/>
        <Greet isAdmin={false} fname="Stanley" surname="Mtonyole" age={34}/>
      </h1>
    </div>
  );
}

export default App;
