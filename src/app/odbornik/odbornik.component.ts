import { FormBuilder } from '@angular/forms';
import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-odbornik',
  templateUrl: './odbornik.component.html',
  styleUrls: ['./odbornik.component.css']
})
export class OdbornikComponent implements OnInit {

  constructor(private servis:ServisService, private http : HttpClient, private fb:FormBuilder) { }
  odbornici:any;

  ngOnInit(): void {
      this.servis.getOdbornici()
      .subscribe(res=>{
          this.odbornici = res;
      })
  }

  unos= this.fb.group({
    ime:'',
    prezime:''
  })

  dodaj()
  {
    this.http.post("http://http://192.168.100.112/:8000/api/odbornik-dodaj", this.unos.getRawValue())
    .subscribe(res=>
      {
        alert("uspjesno dodat odbornik");
        this.odbornici = res;

      })
  }

  deaktiviraj(id:any)
  {
    this.http.post("http://192.168.100.112:8000/api/odbornik-deaktiviraj/"+ id, null)
    .subscribe(res=>
      {
        alert("obrisan");
        this.odbornici = res;
      })
  }

}
