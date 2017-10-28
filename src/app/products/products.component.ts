import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {DataServiceService} from '../services/data-service.service';
import {PagerService} from '../services/pager.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  displayedProducts: any = [];
  categories = [];
  pager: any = {};
  pagedItems: any[];

  constructor(private productService: DataServiceService,
              private cdr: ChangeDetectorRef,
              private pagerService: PagerService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      data.map(pdt => {
        if (this.categories.indexOf(pdt.category) == -1)
          this.categories.push(pdt.category);
      });
      this.products = (data);
      this.displayedProducts = this.products;
      this.cdr.detectChanges();
      this.setPage(1);
    });

  }

  setPage(page: number) {
    console.log("displayed pdt " + this.displayedProducts.length);
    this.pager = this.pagerService.getPager(this.displayedProducts.length, page, 20);
    console.log(this.pager);
    this.pagedItems = this.displayedProducts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log(this.pagedItems);
  }

  productsBycategory(category) {
    if (category == "all") {
      this.displayedProducts = this.products;
      this.setPage(1);
    } else {
      console.log(category);
      this.displayedProducts = this.products.filter(pdt => pdt.category == category);
      console.log(this.displayedProducts);
      this.setPage(1);
    }
  }
}
