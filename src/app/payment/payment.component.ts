import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CheckoutService } from '../checkout.service';
import { Card } from '../types/card.type';
import '../web-components/payment-method/payment-method';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  tax = 0;

  tips = 9.84;

  subTotal = 0;

  total = 0;

  constructor(private router: Router, private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    
    this.checkoutService.calculateTotals();
    
    this.tax = this.checkoutService.tax;

    this.subTotal = this.checkoutService.subTotal;

    this.total = this.checkoutService.total + this.tips;

  }

  goToCheckout() {
    this.router.navigateByUrl('checkout');
  }

  handleCardInfo(event: Event) {
    const card = (event as CustomEvent<Card>).detail;
    console.log('Payment method', card);
  }
}
