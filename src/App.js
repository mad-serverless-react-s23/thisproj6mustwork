import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Authenticator>
          {({ signOut, user }) => (
            <main>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Greetings!</h1>
            </main>
          )}
        </Authenticator>
      </header>
    </div>
  );
}

export default App;
