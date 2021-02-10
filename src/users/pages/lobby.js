import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AuthContext } from "../../shared/context/auth-context";
// import { useHttpClient } from "../../shared/hooks/http-hook";

const Lobby = () => {
  // const auth = useContext(AuthContext);
  // const { error, sendRequest, clearError } = useHttpClient();
  

  // useEffect(() => {
  //   const fetchLobby = async () => {
  //     try {
  //       console.log(auth);
  //       const responseData = await sendRequest(
  //         `http://localhost:5000/api/game/lobby/${auth.gameLink}`
  //       );

  //       console.log(responseData.lobby);
  //       // setPlayer1((responseData.lobby.players[0]));
  //       // setPlayer2((responseData.lobby.players[1]));
  //         auth.getPlayers(responseData.lobby.players[0], responseData.lobby.players[1]);
  //     } catch (err) {}
  //   };
  //   fetchLobby();
  // }, [sendRequest, auth]);


  return (
    <div>
      <h1>LOBBY</h1>

      {/* <h4>Link: {auth.gameLink}</h4>
      {/* {console.log(linkData[0])} */}
      {/* <h4>player1: {auth.players1}</h4>
    {/* {auth.player2 && <h4>player2: {auth.player2}</h4>} */} */} */}
    </div>
  );
};

export default Lobby;
