import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Enterance = () => {
  const auth = useContext(AuthContext);
  const { error, sendRequest, clearError } = useHttpClient();
  

  useEffect(() => {
    const fetchLobby = async () => {
      try {
        console.log(auth);
        const responseData = await sendRequest(
          `http://localhost:5000/api/game/lobby/${auth.gameLink}`
        );

        console.log(responseData.lobby);
        // setPlayer1((responseData.lobby.players[0]));
        // setPlayer2((responseData.lobby.players[1]));
          auth.getPlayers(responseData.lobby.players[0], responseData.lobby.players[1]);
      } catch (err) {}
    };
    fetchLobby();
  }, [sendRequest, auth]);

  return (
    <div  >
      <h1>{auth.gameLink}</h1>
      HELLO
      <a href="/lobby">  Enter Lobby </a>
    </div>
  );
};

// 962e3e23-dc48-4bfc-980f-1b5a5a8f07e8
export default Enterance;
