import { Injectable } from '@angular/core';
import { Address } from '../address/address';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(private http: HttpClient) { }


  create(address: Address): any {
    this.http.post<Address>('URL', address);
  }

}
