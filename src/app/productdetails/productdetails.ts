import { ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api-service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails {
productdetails: any;
  id: number = 0;

  constructor(private apiService: ApiService,private cdr: ChangeDetectorRef,private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.apiService.getproductdetailsId(this.id).subscribe((data: any) => {
      this.productdetails = data;
      this.cdr.detectChanges();
    });
  }
}
