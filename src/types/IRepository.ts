export interface IRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | undefined>;
  save(entity: T): Promise<void>;
  delete(id: number): Promise<void>;
}
