import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  constructor(private http: HttpClient){ }
  logovan = 0;
  token:any;
  user:any;

  getMaticarById(id:any)
  {
    return this.http.get("http://192.168.100.112:8000/api/maticar/"+id);
  }
  getAll()
  {
    return this.http.get("http://192.168.100.112:8000/api/svi");
  }
  getMaticare()
  {
    return this.http.get("http://192.168.100.112:8000/api/maticari");
  }
  getOdbornici()
  {
    return this.http.get("http://192.168.100.112:8000/api/odbornici");
  }
  getDokumenta()
  {
    return this.http.get("http://192.168.100.112:8000/api/dokumenta");
  }
  getVjencanjeById(id: any)
  {
    return this.http.get("http://192.168.100.112:8000/api/vjencanje/"+id);
  }
  getReservation()
  {
    return this.http.get("http://192.168.100.112:8000/api/rezervacije");
  }

}
function $id(arg0: string, $id: any) {
  throw new Error('Function not implemented.');
}

