import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Address } from './Address';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  private addresses: Address[] = [];

  constructor(private service: BookService) {}

  getAll() {
    console.log('STARTING');
    this.service.findAll().subscribe((data: Address[]) => {
      this.addresses = data;
    });
  }
}
