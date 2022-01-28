import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppdataService } from './_service/appdata.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carForm';
  pattern = "^[a-zA-Z]+$";
  CarOptions: any;
  AutoPartOptions: any;

  constructor(public appService : AppdataService) { }

  ngOnInit(): void {
    this.CarOptions = this.appService.getCarsOptions();
    this.AutoPartOptions = this.appService.getAutoPartsOptions();
  }

  CarForm = new FormGroup({
    fullName : new FormControl('', [Validators.required, Validators.maxLength(75), Validators.pattern(this.pattern)]),
    cars : new FormControl('',Validators.required),
    autoParts : new FormControl([]),
    color : new FormControl('')
  });

  get fullName(){
     return this.CarForm.get('fullName');
  }

  register(){
    this.appService.submitUser(this.CarForm.value);
    var file = JSON.stringify(this.CarForm.value);
    var blob = new Blob([file], {type: "application/json"});
    FileSaver.saveAs(blob,"Response.json");
    this.CarForm.reset();
  }
}
