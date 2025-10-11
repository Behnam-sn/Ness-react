import type { Point } from "./Point";

export class Team {
  private readonly _points: Point[] = [];

  public readonly Id: number;
  public readonly Name: string;

  private constructor(id: number, name: string) {
    this.Id = id;
    this.Name = name;
  }

  public get Points(): readonly Point[] {
    return this._points;
  }

  public AddPoint(point: Point): void {
    this._points.push(point);
  }

  public static Create(id: number, name: string): Team {
    return new Team(id, name);
  }
}
