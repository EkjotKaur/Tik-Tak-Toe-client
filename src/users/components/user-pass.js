import React, { useContext, useEffect } from "react";
// import {BrowserRouter as Router} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import { useForm } from "../../shared/hooks/form-hooks";
import { useInput } from "../../shared/hooks/input-hook";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
// import { makeStyles } from '@material-ui/core/styles';

// let GAME = [
//   {
//     link: "123456",
//     user1: "Person"
//     user2: ""
//   }
// ]


const UserPass = () => {
  const auth = useContext(AuthContext);

  const [inputState, changeHandler, touchHandler] = useInput();

  
  const {error, sendRequest, clearError} = useHttpClient();

  const [formState, inputHandler, changeModeHandler] = useForm(
    {
      player: {
        value: "",
        isValid: true
      },
      link: {
        value: "",
        isValid: true
      },
    },
    true,
    false
  );

  console.log(formState);

  const {id , value, isValid} = inputState;

  // console.log(id);
  // console.log(value);

  useEffect(() => {
    console.log(id);
    console.log(value);
    inputHandler(id, value, isValid);
    // console.log(formState);
  }, [value, id, inputHandler, isValid]);

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(auth);
    if(formState.isNewGame){
      try{
        const responseData = await sendRequest(
          "http://localhost:5000/api/game/enter",
          "POST",
          JSON.stringify({
            player: formState.inputs.player.value
          }),
          {
            "Content-Type": "application/json",
          }
        );
        console.log(responseData);
        auth.enter(responseData.link);
      } catch(err) {
        console.log(err);
        console.log("err");
          throw err;
      }
      

      // const link = Math.floor(Math.random()*1000000);
      // console.log(link);
      
    } else {

      try{
        const responseData = await sendRequest(
          "http://localhost:5000/api/game/enterExisting",
          "POST",
          JSON.stringify({
            player: formState.inputs.player.value,
            link: formState.inputs.link.value
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.enter(responseData.link);
      } catch (err){
        throw err;

      }

      
    }
    
  };
 
  console.log(auth);

  return (
    <form onSubmit={submitHandler}>
      <TextField
        required
        id="player"
        label="Name"
        defaultValue="Hello World"
        onChange={changeHandler}
        onBlur={touchHandler}
      />
      {!formState.isNewGame && (
        <TextField
          required
          id="link"
          label="Enter Code"
          defaultValue="Hello World"
          onChange={changeHandler}
          onBlur={touchHandler}
        />
      )}

      <button type="submit" disabled={!formState.isValid}>
        {/* <a href="/lobby"> */}
          {formState.isNewGame ? "CREATE NEW GAME" : "Join Game"}
        {/* </a> */}
      </button>
      <button onClick={changeModeHandler}>
        {formState.isNewGame ? "Enter and existing game" : "Create New Game"}
      </button>
    </form>
  );
};

export default UserPass;
