import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../../services/data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.get().then(console.log);
  }

}
