import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  let isValid = false;
  switch (action.type) {
    case "SET_DATA":
      if((state.isNewGame && action.inputType === "player" && action.isValid) || (!state.isNewGame && action.isValid && ((action.inputType === "player" && state.inputs.link.isValid) || (action.inputType === "link" && state.inputs.player.isValid)))){
        isValid = true;
      }

      console.log(action.inputType);
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputType]: {value: action.value, isValid: action.isValid}
        },
        isValid: isValid,
      };
    case "CHANGE_MODE":
      if((!state.isNewGame && state.inputs.player.isValid) || (state.isNewGame && state.inputs.player.isValid && state.inputs.link.isValid) ){
        isValid = true;
      }

      console.log(state.isNewGame);
      return {
        ...state,
        isNewGame: !state.isNewGame,
        isValid: isValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, intialIsNewGame, initialIsValid) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isNewGame: intialIsNewGame,
    isValid: initialIsValid,
  });

  // const [inputState, dispatch] = useReducer(inputReducer, {
  //   value: "",
  //   isTouched: false
  // });

  const inputHandler = useCallback((inputType, value, isValid) => {
    console.log(inputType);
    dispatch({
      type: "SET_DATA",
      inputType: inputType,
      value: value,
      isValid: isValid
    });
    // console.log(formState);
  }, []);

  const changeModeHandler = useCallback(() => {
    dispatch({
      type: "CHANGE_MODE",
    });
    // console.log(formState);
  }, []);

  return [formState, inputHandler, changeModeHandler];
};
