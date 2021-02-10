import { useReducer } from "react";

const inputReducer = (state, action) => {
  let isValid = false;
  switch (action.type) {
    case "CHANGE":
      if (action.value.length > 0) {
        isValid = true;
      }
      return {
        ...state,
        value: action.value,
        id: action.id,
        isValid: isValid,
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

export const useInput = () => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    id: "",
    value: "",
    isValid: true,
    isTouched: false,
  });

  const changeHandler = (event) => {
    console.log(inputState);
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      id: event.target.id
    });
    console.log(inputState);
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
    console.log(inputState);
  };

  return [inputState , changeHandler, touchHandler];
}