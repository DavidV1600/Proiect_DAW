import { Food } from "./Food";
import { Tag } from "./Tag";

export interface FoodTag {
    foodId: number;
    food?: Food;
    tagId: number;
    tag?: Tag;
  }