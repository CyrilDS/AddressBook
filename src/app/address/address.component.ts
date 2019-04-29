import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';
import { MatDialog } from '@angular/material';
import { Address } from './address';
import { Locality } from './locality';
import { StringMap } from '@angular/core/src/render3/jit/compiler_facade_interface';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  constructor(private service: AddressService, public dialog: MatDialog) { }

  localities: Locality[];
  locality = new Locality(0,"", "");
  addressModel = new Address("", "", "", "", "", "", this.locality);

  public types = [
    { value: 'PARTICULAR', display: 'Particular' },
    { value: 'ENTERPRISE', display: 'Enterprise' }
  ];

  getInnerText(id: number, city: string) {
    console.log(id);
    console.log(city);
    this.locality.city = city;
    this.locality.id = id;

  }

  eventHandler(zipCode: string) {
    if (zipCode.length === 5) {
      this.allCityByZipcode(zipCode);
    }
  }

  allCityByZipcode(zipCode: string) {
    this.service.getCity(zipCode).subscribe(
      data => {
        this.locality.zipCode = zipCode;
        this.localities = data;
        console.log(data);
      }
    )
  }

  onSubmit() {
    console.log(this.addressModel)
    this.service.create(this.addressModel).subscribe(
      res => {
        alert("STATUS: " + res);
      }
    );
  }


}