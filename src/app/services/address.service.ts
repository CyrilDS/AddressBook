import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Locality } from '../address/locality';
import { Observable } from 'rxjs';
import { APIS } from './apis';
import { Address } from '../address/Address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  getCity(zipCode: string): Observable<Locality[]> {
    return this.http.get<Locality[]>(APIS.GET_CITY_BY_ZIPCODE + zipCode);
  }

  create(address: Address): Observable<Response> {
    return this.http.post<Response>(APIS.CREATE_ADDRESS, address);
  }
}
