import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { Game } from "../../types/Game";
import { GameRepository } from "../../types/GameRepository";

const repo = new GameRepository();

// Thunks (async actions)
export const loadGames = createAsyncThunk("games/load", async () => {
  return await repo.getAll();
});

export const saveGame = createAsyncThunk("games/save", async (game: Game) => {
  await repo.save(game);
  return game;
});

// Slice
interface GamesState {
  items: Game[];
  status: "idle" | "loading" | "error";
}

const initialState: GamesState = { items: [], status: "idle" };

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    addGame(state, action: PayloadAction<Game>) {
      state.items.push(action.payload);
    },
    removeGame(state, action: PayloadAction<number>) {
      state.items = state.items.filter((g) => g.Id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadGames.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadGames.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(saveGame.fulfilled, (state, action) => {
        const index = state.items.findIndex((g) => g.Id === action.payload.Id);
        if (index >= 0) state.items[index] = action.payload;
        else state.items.push(action.payload);
      });
  },
});

export const { addGame, removeGame } = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
