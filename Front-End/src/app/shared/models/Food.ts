import { Origin } from "./Origin";
import { Tag } from "./Tag";

export interface Food {
    foodId: number;
    name: string;
    price: number;
    originId: number;
    origin?: Origin;
    cookTime: string;
    imageUrl?: string;
    tags?: Tag[];
  }
  