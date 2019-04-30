import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Address } from '../address/address';
import { APIS } from './apis';
import { map, catchError } from 'rxjs/operators';
import { Locality } from '../address/locality';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<boolean> {
    return this.http.get<boolean>(APIS.ADRESSES_CSV).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
  listAll(): Observable<string> {
    return this.http.get<string>(APIS.GET_ALL_CITIES).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
}
