export class Word {
  public readonly Id: number;
  public Value: string;
  public CategoryId: number;

  constructor(id: number, value: string, categoryId: number) {
    this.Id = id;
    this.Value = value;
    this.CategoryId = categoryId;
  }

  public static Create(id: number, value: string, categoryId: number): Word {
    return new Word(id, value, categoryId);
  }
}
