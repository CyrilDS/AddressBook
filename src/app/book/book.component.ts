import { Component, OnInit, ViewChild  } from '@angular/core';
import { BookService } from '../services/book.service';
import { Address } from '../address/Address';
import { Locality } from '../address/locality';
import {MatPaginator, MatTableDataSource} from '@angular/material';
export interface Locality {
  id: number,
  zipCode: string,
  city: string
}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  private addresses: Address[] = [];
  loading: boolean = false;
  result: boolean;
  result1: string;
  
  displayedColumns: string[] = ['id', 'nomCommune', 'codePostal']
  dataSource: MatTableDataSource<Locality>;
  data: Locality[] = [];
  constructor(private service: BookService) { }

  getAll() {
    console.log('STARTING');
    this.loading = true;
    this.service.findAll().subscribe(res => {
      this.loading = !res;
      this.result = res;
      console.log(res)
    });  
  }
  getList(){
    this.service.listAll().subscribe(res =>{
      this.result1 = res;
      console.log(res)
    });
  }
}
