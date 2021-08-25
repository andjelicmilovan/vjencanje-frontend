import { HttpClient } from '@angular/common/http';
import { ServisService } from './../servis.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pretrazi',
  templateUrl: './pretrazi.component.html',
  styleUrls: ['./pretrazi.component.css']
})
export class PretraziComponent implements OnInit {

  constructor(private fb:FormBuilder, private servis:ServisService, private http:HttpClient) { }
  pretragaPoPolu = 0;
  pretragaSuprugRes:any;
 // pretragaSuprugaRes:any;
  pretrazen:any

  ngOnInit(): void {
  }


  pretragaSuprug = this.fb.group(
  {
      ime_mladozenje:'',
      prezime_mladozenje:'',
      // ime_oca_mladozenje:'',
      jmbg_mladozenje:''

  })
  pretragaSupruga = this.fb.group({
      ime_nevjeste:'',
      prezime_nevjeste:'',
      // ime_oca_nevjeste:'',
      jmbg_nevjeste:''
  })

  pretragaSuprugKlik()
  {


     this.http.post("http://192.168.100.112:8000/api/uzmi-suprug",this.pretragaSuprug.getRawValue() )
     .subscribe(res=>
     {
       this.pretrazen = 1;

       this.pretragaSuprugRes= res;
     })
  }


  pretragaSuprugaKlik()
  {
    return this.http.post("http://192.168.100.112:8000/api/uzmi-supruga", this.pretragaSupruga.getRawValue())
     .subscribe(res=>
     {
       this.pretrazen = 1;
       this.pretragaSuprugRes= res;

     })
  }



}
