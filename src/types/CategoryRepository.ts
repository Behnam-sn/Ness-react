import type { Category } from "./Category";
import { LocalStorageRepository } from "./LocalStorageRepository";

export class CategoryRepository extends LocalStorageRepository<Category> {
  constructor() {
    super("categories");
  }
}
