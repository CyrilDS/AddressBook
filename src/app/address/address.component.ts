import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';
import { MatDialog } from '@angular/material';
import { Address } from './address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  ngOnInit() { }

  public addresses = [];

  constructor(private addressService: AddressService, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(FormDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

@Component({
  selector: 'form-dialog'
})
export class FormDialog {
  addressModel = new Address("", "", "", "", "", "", "", "");

  constructor(private addressService: AddressService) { }

  onSubmit() {
    this.addressService.create(this.addressModel);
  }
}