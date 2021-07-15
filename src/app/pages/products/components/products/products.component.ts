import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../catalog/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.get().then(console.log);
  }

}
