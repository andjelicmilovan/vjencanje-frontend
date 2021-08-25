import { HttpClient } from '@angular/common/http';
import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-maticar',
  templateUrl: './maticar.component.html',
  styleUrls: ['./maticar.component.css']
})
export class MaticarComponent implements OnInit {

  constructor(private servis:ServisService, private http:HttpClient, private fb:FormBuilder) { }
  maticari : any
  ngOnInit(): void {
    this.servis.getMaticare()
    .subscribe(res=>
      {
        this.maticari = res;
      })

  }

  unos= this.fb.group({
    ime:'',
    prezime:''
  })

  dodaj()
  {
    this.http.post("http://192.168.100.112:8000/api/maticar-dodaj", this.unos.getRawValue())
    .subscribe(res=>
      {
        alert("uspjesno dodat maticar");
        this.maticari = res;
      })
  }

  deaktiviraj(id:any)
  {
    this.http.post("http://192.168.100.112:8000/api/maticar-deaktiviraj/"+ id,{})
    .subscribe(res=>
      {
        alert("obrisan");
        this.maticari = res;
      })
  }

}
