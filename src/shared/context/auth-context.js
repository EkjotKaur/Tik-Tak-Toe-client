import { createContext } from "react";

export const AuthContext = createContext({
  hasEnteredLobby: false,
  gameLink: null,
  players1: null,
  players2: null,
  enter: () => {},
  exit: () => {},
  getPlayers: () => {}
});