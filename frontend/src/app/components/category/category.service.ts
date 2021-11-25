import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl:"http://localhost:3001/category"
  constructor() { }
}
