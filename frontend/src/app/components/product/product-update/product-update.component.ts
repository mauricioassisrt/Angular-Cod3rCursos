import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../produc/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private productSerivce: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productSerivce.readById(id).subscribe(product => {
      this.product = product
    })
    
  }
 
  updateProduct() {
    this.productSerivce.update(this.product).subscribe(() => {
      this.productSerivce.showMessage('Produto atualizado com sucesso !!')
      this.router.navigate(['/products'])
    })
  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }
}
