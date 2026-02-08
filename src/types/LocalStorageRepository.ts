import type { IRepository } from "./IRepository";

export abstract class LocalStorageRepository<T extends { Id: number }>
  implements IRepository<T>
{
  protected constructor(private readonly storageKey: string) {}

  async getAll(): Promise<T[]> {
    const json = localStorage.getItem(this.storageKey);
    if (!json) return [];
    return JSON.parse(json) as T[];
  }

  async getById(id: number): Promise<T | undefined> {
    const items = await this.getAll();
    return items.find((x) => x.Id === id);
  }

  async save(entity: T): Promise<void> {
    const items = await this.getAll();
    const index = items.findIndex((x) => x.Id === entity.Id);
    if (index >= 0) items[index] = entity;
    else items.push(entity);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  async delete(id: number): Promise<void> {
    const items = await this.getAll();
    const filtered = items.filter((x) => x.Id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(filtered));
  }
}
