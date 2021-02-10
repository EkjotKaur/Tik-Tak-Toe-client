import React, { useCallback, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import UserPass from "./users/components/user-pass";
import Game from "./game/pages/Game";
import Lobby from "./users/pages/lobby";
import { AuthContext } from "./shared/context/auth-context";
import Enterance from "./users/pages/enterence";

function App() {
  const [hasEnteredLobby, setHasEnteredLobby] = useState(false);
  const [gameLink, setGameLink] = useState();
  // const [player1, setPlayer1] = useState();
  // const [player2, setPlayer2] = useState();
  // const [players, setPlayers] = useState([]);
  // const []

  const enter = useCallback((link) => {
    if(link){
      setHasEnteredLobby(true);
      setGameLink(link);
    } 
    // console.log(gameLink);
  }, []);

  console.log(gameLink);

  const exit = useCallback(() => {
    setGameLink(null);
    setHasEnteredLobby(false);
    
  }, []);


  // const getPlayers = (p1, p2) => {
  //   setPlayer1(p1);
  //   setPlayer2(p2);
  // }

  let routes;

  console.log(gameLink);

  // if(player1 && player2){
  //   routes = (
  //     <Switch>
  //       <Route path="/lobby">
  //         <Lobby />
  //       </Route>
  //     </Switch>
  //   );
  // }

  if (hasEnteredLobby) {
    routes = (
      <Switch>
        <Route path="/enterance" exact>
          <Enterance />
        </Route>
        <Route path="/lobby">
          <Lobby />
        </Route>
        <Route path="/game" exact>
          <Game />
        </Route>
        {console.log(gameLink)}
      <Redirect to="/enterance" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <UserPass />
        </Route>
        {/* <Redirect to="/" /> */}
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        hasEnteredLobby: hasEnteredLobby,
        gameLink: gameLink,
        enter: enter,
        exit: exit,
      }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
}

export default App;
