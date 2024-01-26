import { Origin } from "./Origin";

export interface Food {
    foodId: number;
    name: string;
    price: number;
    originId: number;
    origin?: Origin;
    cookTime: string;
    imageUrl?: string;
  }
  