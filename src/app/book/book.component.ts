import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { Address } from '../address/Address';
import { Locality } from '../address/locality';


export interface Locality {
  id: number;
  zipCode: string;
  city: string;
  district: string;
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
  toto: object;
size: number;
page: number;
url: string;
  content = [];

  constructor(private service: BookService) { }

  getAll() {
    console.log('STARTING');
    this.loading = true;
    this.service.findAll().subscribe(res => {
      this.loading = !res;
      this.result = res;
      
    });
  }
  getList(){
    this.service.listAll().subscribe(res =>{
      this.toto = res;
      console.log(res);
    });
  }
}
