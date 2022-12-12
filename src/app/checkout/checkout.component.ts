import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from '../checkout.service';
import { Item } from '../types/item.type';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit {  
  items: Item[] = [];
  
  tax = 0;

  subTotal = 0;

  total = 0;

  constructor(private router: Router, private checkoutService: CheckoutService) {

  }

  ngOnInit(): void {
    this.checkoutService.calculateTotals();

    this.items = this.checkoutService.items;

    this.tax = this.checkoutService.tax;

    this.subTotal = this.checkoutService.subTotal;

    this.total = this.checkoutService.total;
  }


  openPayment() {
    this.router.navigateByUrl('payment');
  }
}
