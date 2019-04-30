import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Address } from '../address/address';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  private addresses: Address[] = [];
  loading = false;
  result: boolean;

  constructor(private service: BookService) {}

  getAll() {
    console.log('STARTING');
    this.loading = true;
    this.service.findAll().subscribe(res => {
      this.loading = !res;
      this.result = res;
      console.log(res);
    });
  }
}
