import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Address } from '../address/Address';
import { APIS } from './apis';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<boolean> {
    return this.http.get<boolean>(APIS.ADRESSES_CSV).pipe(
      map(data => {
        return data;
        console.log(data);
      })
    );
  }
}
