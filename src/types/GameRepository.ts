import type { Game } from "./Game";
import { LocalStorageRepository } from "./LocalStorageRepository";

export class GameRepository extends LocalStorageRepository<Game> {
  constructor() {
    super("games");
  }
}
