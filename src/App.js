import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Authenticator>
          {({ signOut, user }) => (
            <>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Greetings!</h1>
            </>
          )}
        </Authenticator>
      </header>
    </div>
  );
}

export default App;
