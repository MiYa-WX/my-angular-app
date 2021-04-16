import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  // @Input() 装饰器指出其属性值是从该组件的父组件商品列表组件中传入的
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
