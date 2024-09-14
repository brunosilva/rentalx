import { Category } from "../../../../modules/cars/model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: ICategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {

    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({name, description}: ICreateCategoryDTO): void {
    // "new Category()" é a chamada do construtor para criar o id.
    const category = new Category();

    // tudo que colocar dentro do obj assign vai ser atribuido automaticamente ao
    // "category" passado no 1° parametro!
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

