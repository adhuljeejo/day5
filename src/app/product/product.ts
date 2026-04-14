import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../api-service';
import { Cards } from "../cards/cards";

@Component({
  selector: 'app-product',
  imports: [Cards],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products:any[]=[];

constructor(private ApiService:ApiService,private cdr:ChangeDetectorRef){}

ngOnInit() {
  this.ApiService.getproduct().subscribe((data:any) =>{
    this.products=data;
    this.cdr.markForCheck();
  });
  
}

}
