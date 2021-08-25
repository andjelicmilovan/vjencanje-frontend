import { ServisService } from './../servis.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-rezervacije',
  templateUrl: './rezervacije.component.html',
  styleUrls: ['./rezervacije.component.css']
})
export class RezervacijeComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:HttpClient, private servis:ServisService) { }

  rezervacije:any;
  datum:any;
  sati:any;
  minuti:any;


  ngOnInit(): void {
    this.servis.getReservation()
    .subscribe(res=>
      {
        this.rezervacije= res;

      })
  }



  unos = this.fb.group(
    {
      termin:'',
      mladozenja:'',
      jmbg_mladozenje:'',
      nevjesta:'',
      jmbg_nevjeste:''
    }
  )

  rezervisi()
  {



    this.http.post('http://192.168.100.112:8000/api/dodaj-rezervaciju',this.unos.getRawValue())
    .subscribe(res=>
      {
        if(res==1)
        {
          alert("Zauzet je termin, izaberite drugi termin!");
        }else
        {
          this.rezervacije = res;
          alert("uspjesno rezervisan termin!");
        }
      })

  }
  otkazi(id:any)
  {
    this.http.get('http://192.168.100.112:8000/api/obrisi-rezervaciju/'+id)
    .subscribe(res=>
      {
        this.rezervacije= res;
        alert('otkazano vjencanje!');
      })
  }


}
