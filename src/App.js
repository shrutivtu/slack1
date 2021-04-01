import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header.js';
import styled from 'styled-components';
import Sidebar from './components/Sidebar.js';
import Chat from './components/Chat'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';
import Login from './components/Login';
function App() {

  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <AppLoading>
        <AppLoadingContents>
          <img src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" alt=""/>
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )
        }
     
      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div``;

const AppLoadingContents = styled.div``;

const AppBody = styled.div`
  display:flex;
  height:100vh;
`;