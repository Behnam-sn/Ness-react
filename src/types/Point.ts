export class Point {
  public readonly Id: number;
  public readonly WordId: number;
  public readonly TeamId: number;
  public readonly Value: number;

  private constructor(
    id: number,
    wordId: number,
    teamId: number,
    value: number
  ) {
    this.Id = id;
    this.WordId = wordId;
    this.TeamId = teamId;
    this.Value = value;
  }

  public static Create(
    id: number,
    wordId: number,
    teamId: number,
    value: number
  ): Point {
    return new Point(id, wordId, teamId, value);
  }
}
