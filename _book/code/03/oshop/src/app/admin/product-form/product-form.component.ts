import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product={};

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private categoryService:CategoryService,
    private productService:ProductService) {
    this.categories$=categoryService.getCategories();

    // let id = this.route.snapshot.paramMap.get('id');
    // if (id) this.router.navigate(['/admin/admin-products']);
    //  if (id) this.productService.get(id).take(1).subscribe(p=>this.product=p)
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.get(id).valueChanges().subscribe(p => this.product = p);
    }
   }

   save(product){
    //  console.log(product);
    this.productService.create(product);
    this.router.navigate(['/admin/admin-products']);
    
   }

  ngOnInit() {
  }

}
