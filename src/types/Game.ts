import type { Point } from "./Point";
import type { Team } from "./Team";

export class Game {
  private readonly _teams: Team[];

  public readonly Id: number;
  public Name: string;
  public Rounds: number;

  private constructor(id: number, name: string, rounds: number, teams: Team[]) {
    this.Id = id;
    this.Name = name;
    this.Rounds = rounds;
    this._teams = teams;
  }

  public get Teams(): readonly Team[] {
    return this._teams;
  }

  public AddTeam(team: Team): void {
    this._teams.push(team);
  }

  public AddPoint(teamId: number, point: Point): void {
    const team = this._teams.find((t) => t.Id === teamId);
    if (!team) throw new Error("Team not found");
    team.AddPoint(point);
  }

  public static Create(
    id: number,
    name: string,
    rounds: number,
    teams: Team[]
  ): Game {
    return new Game(id, name, rounds, teams);
  }
}
