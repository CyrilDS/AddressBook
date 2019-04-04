import { Injectable } from '@angular/core';
import { Address } from '../address/address';
import { HttpClient } from '@angular/common/http';
import { Locality } from '../address/locality';
import { Observable } from 'rxjs';
import { APIS } from './apis';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(private http: HttpClient) { }

  getCity(zipCode: string): Observable<Locality[]> {
    return this.http.get<Locality[]>(APIS.GET_CITY_BY_ZIPCODE + zipCode)
  }


  create(address: Address) {
    this.http.post<Address>(APIS.GET_CITY_BY_ZIPCODE, address);
  }

}
