import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-label-maker',
  templateUrl: './shipping-label-maker.component.html',
  styleUrls: ['./shipping-label-maker.component.css']
})
export class ShippingLabelMakerComponent implements OnInit {

  model = {};
  isDataReady = false;
  constructor() { }

  ngOnInit() {
  }

  shippingDetail($event) {
    this.isDataReady = $event.flag;
    this.model = $event.data;
  }

  objectKey(model) {
    return Object.keys(model);
}

getAddress(key: string): boolean {
    if (key === 'sender' || key === 'receiver') {
        return true;
    } else {
        return false;
    }
}

}
