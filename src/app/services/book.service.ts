import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Address } from '../book/Address';
import { APIS } from './apis';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Address[]> {
    return this.http.get<Address[]>(APIS.ADRESSES_CSV).pipe(
      map(data => {
        console.log('SERVICE.TS' + data);
        return data;
      })
    );
  }
}
