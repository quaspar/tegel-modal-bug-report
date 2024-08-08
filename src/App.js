import logo from './logo.svg';
import './App.css';
import { defineCustomElements, TdsModal } from '@scania/tegel-react';

defineCustomElements(); // Needs to be run in the browser once, before any elements are used.


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TdsModal 
          header="Modal header"
          show
          size='md'
          onTdsClose={
            e => e.preventDefault();
            console.log("event prevented: ", e);
          }
        >
            <span slot="body">
    “I beg your pardon, Dr. Lanyon,” he replied civilly enough. “What you say is very well founded;
    and my impatience has shown its heels to my politeness. I come here at the instance of your
    colleague, Dr. Henry Jekyll, on a piece of business of some moment; and I understood...”
  </span>
  </TdsModal>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
