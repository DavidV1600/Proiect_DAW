import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  // changeFoodPriceById(id: number, newPrice:number): void{
  //   ChangedFood : Food[] = this.getAll().find(food => food.id == id)
  //   ChangedFood.price = newPrice

  // }
  constructor(private http: HttpClient){}
private apiUrl = 'https://localhost:7258/api/Food';

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllFoodsByTag(tag: string): Food[] {
    if(tag=="All")
      return this.getAll();
    else return this.getAll().filter(food => food.tags?.includes(tag))
  }

  public login(user: any):Observable<any>
  {
    return this.http.post<any>('http://localhost:4000/users/authenticate', user);
  }

  public getAuthUsers(): Observable<any>
  {
    return this.http.get<any>('http://localhost:4000/users', {
      headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    });
  }
//cre ca modific sa fie de Observable<any> sa prinda el orice
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 6 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }
  getAll():Food[]
  {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        origins: ['italy'],
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        origins: ['persia', 'middle east', 'china'],
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        origins: ['germany', 'us'],
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        origins: ['belgium', 'france'],
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        origins: ['india', 'asia'],
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        origins: ['italy'],
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
}
