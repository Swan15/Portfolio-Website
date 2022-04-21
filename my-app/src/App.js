import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [content, setContent] = React.useState({});
  const contentful = require("contentful");
  const client = contentful.createClient( {
    space: '1oyrrmgoeol2',
    accessToken: 'Luk88DGz_SIFd_3aHCsv9wzYDTWAxji0Q81drBqiBBI'
  });

  React.useEffect(() => {
    client.getEntries().then(response => console.log(response));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Well hello
        </p>
      </header>
    </div>
  );
}

export default App;
