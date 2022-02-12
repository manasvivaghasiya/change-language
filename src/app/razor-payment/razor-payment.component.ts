import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {ExternalLibraryService} from './util';

declare let Razorpay: any;
declare let getElementById: null | undefined;


@Component({
  selector: 'app-razor-payment',
  templateUrl: './razor-payment.component.html',
  styleUrls: ['./razor-payment.component.css'],
})
export class RazorPaymentComponent implements OnInit {

  constructor(private razorpayService: ExternalLibraryService,
    private cd: ChangeDetectorRef) { }
    name = 'Angular';
    response: any;
    razorpayResponse: any;
    showModal = false;
    
 

    
    

  ngOnInit(): void {
    this.razorpayService
    .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
    .subscribe();
  }

  RAZORPAY_OPTIONS = {
    "key": "rzp_test_WMHWnR6EYJOqTX",
    "amount": "",
    "name": "Novopay",
    "order_id": "",
    "description": "Load Wallet",
    "image": "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
    "prefill": {
        "name": "",
        "email": "test@test.com",
        "contact": "",
        "method": ""
    },
    "modal": {},
    "theme": {
        "color": "#0096C5"
    }
  } as any;

  public proceed() {
    this.RAZORPAY_OPTIONS.amount = 100 + '00';
    
    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    // this.showPopup();

    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response: any) {
    console.log(response);
    this.razorpayResponse = `Razorpay response`;
    this.showModal = true;
    (document.getElementById('razorpay-response') as any).style.display = 'block';
    this.cd.detectChanges();
  }

  public test() {

    (document.getElementById('response-modal') as any).style.display = 'block';
    this.response = `dummy text`;
  }


}

