import { Category } from "../../../../modules/cars/model/Category";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository {

  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({name, description}: ICreateCategoryDTO): void {
    // "new Category()" é a chamada do construtor para criar o id.
    const category = new Category();

    // tudo que colocar dentro do onj assign vai ser atribuido automaticamente ao
    // "catgory" passado no 1° parametro!
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    })

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
}

export { CategoriesRepository };

