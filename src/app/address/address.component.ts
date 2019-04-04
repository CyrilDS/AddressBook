import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';
import { MatDialog } from '@angular/material';
import { Address } from './address';
import { Locality } from './locality';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  localityModel = new Locality("", "");
  addressModel = new Address("", "", "", "", "", "", this.localityModel);
  
  localities: Locality[];
  private zipCode: string;
  private city: string;

  ngOnInit() { }

  constructor(private service: AddressService, public dialog: MatDialog) { }

  allCityByZipcode(zipCode: string) {
    this.service.getCity(zipCode).subscribe(
      data => {
        this.localities = data;
        console.log(data);
      }
    )
  }

  onSubmit() {
    this.service.create(this.addressModel);
  }


}