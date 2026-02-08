import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { loadGames, saveGame } from "./slices/gamesSlice";
import type { Game } from "../types/Game";
// import { loadGames, saveGame } from "../store/slices/gamesSlice";
// import { AppDispatch, RootState } from "../store/store";

export const useGames = () => {
  const dispatch = useDispatch<AppDispatch>();
  const games = useSelector((state: RootState) => state.games.items);

  const refresh = () => dispatch(loadGames());
  const save = (game: Game) => dispatch(saveGame(game));

  return { games, refresh, save };
};
