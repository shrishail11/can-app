import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

import { Vendors } from '../../../../both/collections/vendors.collection';

import template from './vendor-form.component.html';


@Component({
  selector: 'vendor-form',
  template
})

export class VendorFormComponent implements OnInit{
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.addForm = this.formBuilder.group({
      name:['',Validators.required],
      mobile:[]
    });

    /* Alertnate
    this.addForm = new FormGroup({
      name: new FormControl()
    });
    */

  }
  addVendor(): void{
    if(this.addForm.valid){
      Vendors.insert(this.addForm.value);

      this.addForm.reset;
    }
  }
}
