export class Category {
  public readonly Id: number;
  public readonly Name: string;

  private constructor(id: number, name: string) {
    this.Id = id;
    this.Name = name;
  }

  public static Create(id: number, name: string): Category {
    return new Category(id, name);
  }
}
