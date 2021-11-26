import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    nome: ''
  }


  constructor(private categoryService: CategoryService, private route: Router) { }

  ngOnInit(): void {
  }


  createCategory(): void {
    this.categoryService.create(this.category).subscribe(() => {
      this.categoryService.showMessage('Insert success!!')
      this.route.navigate(['/category'])
    });

  }

  cancelCategory(): void {
    this.route.navigate(['/category'])
  }
}
