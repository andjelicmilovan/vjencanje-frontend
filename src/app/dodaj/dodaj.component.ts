import { HttpClient } from '@angular/common/http';
import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  constructor(private servis:ServisService, public fb:FormBuilder, private http : HttpClient) { }

  maticar:any;
  maticari:any;
  odbornici:any;
  dokumenta:any;
  dodatDokument = 0;
  dokument1:any=[];
  user:any;


  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
this.user = JSON.parse(this.user);
    this.servis.user = this.user.role;


    this.servis.getDokumenta().subscribe(res=>
      {
        this.dokumenta = res;
      })

    this.servis.getMaticare().subscribe(res=>
      {
        console.log(res);

        this.maticari= res;
      })

    this.servis.getOdbornici().subscribe(res=>
      {
        this.odbornici = res;
      })
  }

  svi()
  {
    this.servis.getAll().subscribe(res=>
      {
        console.log(res);

      })
  }


  unos = this.fb.group(
    {
        maticni_registar_vjencanih:'',
        tekuci_broj:'',
        redni_broj_strane:'',
        user:'',
        datum_vjencanja:'',
        mjesto_vjencanja:'',
        interni_broj:'',
        ime_mladozenje:'',
        prezime_mladozenje:'',
        novo_prezime_mladozenje:'',
        jmbg_mladozenje:'',
        pol_mladozenje:'',
        datum_rodjenja_mladozenje:'',
        nepotpuni_datum_rodjenja_mladozenje_dan:'',
        nepotpuni_datum_rodjenja_mladozenje_mjesec:'',
        nepotpuni_datum_rodjenja_mladozenje_godina:'',
        mjesto_rodjenja_mladozenje:'',
        opstina_rodjenja_mladozenje:'',
        drzava_rodjenja_mladozenje:'',
        drzavljanstvo_mladozenje:'',
        mjesto_prebivalista_mladozenje:'',
        ulica_prebivalista_mladozenje:'',
        broj_ulice_prebivalista_mladozenje:'',
        ime_oca_mladozenje:'',
        // prezime_oca_mladozenje:'',
        ime_majke_mladozenje:'',
        // prezime_majke_mladozenje:'',
        prezime_rodjeno_majke_mladozenje:'',
        ime_nevjeste:'',
        prezime_nevjeste:'',
        novo_prezime_nevjeste:'',
        jmbg_nevjeste:'',
        pol_nevjeste:'',
        datum_rodjenja_nevjeste:'',
        nepotpuni_datum_rodjenja_nevjeste_dan:'',
        nepotpuni_datum_rodjenja_nevjeste_mjesec:'',
        nepotpuni_datum_rodjenja_nevjeste_godina:'',
        mjesto_rodjenja_nevjeste:'',

        opstina_rodjenja_nevjeste:'',
        drzava_rodjenja_nevjeste:'',
        drzavljanstvo_nevjeste:'',
        mjesto_prebivalista_nevjeste:'',
        ulica_prebivalista_nevjeste:'',
        broj_ulice_prebivalista_nevjeste:'',
        ime_oca_nevjeste:'',
        // prezime_oca_nevjeste:'',
        ime_majke_nevjeste:'',
        // prezime_majke_nevjeste:'',
        prezime_rodjeno_majke_nevjeste:'',
        ime_prvog_svjedoka:'',
        prezime_prvog_svjedoka:'',
        mjesto_prebivalista_prvog_svjedoka:'',
        ulica_prebivalista_prvog_svjedoka:'',
        broj_ulice_prvog_svjedoka:'',
        ime_drugog_svjedoka:'',
        prezime_drugog_svjedoka:'',
        mjesto_prebivalista_drugog_svjedoka:'',
        ulica_prebivalista_drugog_svjedoka:'',
        broj_ulice_drugog_svjedoka:'',
        odbornik:'',
        maticar:'',
        dokumenta:[],
        izjava_prezimena:'',
        naknadni_upisi:''
    }
  )




  dodajDokument(e:any)
  {

    // const dokumenta: FormArray = this.unos.get('dokumenta') as FormArray;

    if (e.target.checked) {
      this.dokument1.push(e.target.value);
    } else {
       // const index = this.dokumenta.controls.findIndex(x => x.value === e.target.value);
       this.dokument1.removeAt(e.target.value);
    }
  }
  submit()
  {


    this.unos.controls["dokumenta"].setValue(this.dokument1);
    this.unos.controls["user"].setValue(this.user.id);
    console.log(this.user.id);
      this.http.post("http://192.168.100.112:8000/api/dodaj-novi", this.unos.getRawValue()).subscribe(res=>
      {
          alert('mladenci uspjesno dodati!');

      });
  }





}
