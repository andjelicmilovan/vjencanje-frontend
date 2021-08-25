import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medjunarodni',
  templateUrl: './medjunarodni.component.html',
  styleUrls: ['./medjunarodni.component.css']
})
export class MedjunarodniComponent implements OnInit {

  constructor(private route:ActivatedRoute,private servis:ServisService) { }
  dugme=1;
  rezultat:any;
  maticar:any;
  datum = new Date();
  id = this.route.snapshot.params['id'];
  ngOnInit(): void {
    this.servis.getVjencanjeById(this.id)
    .subscribe(res=>
      {

        this.rezultat = res;

      })

      setTimeout(() => {
        this.servis.getMaticarById(this.rezultat[0].maticar)
    .subscribe(res=>
      {

        
        this.maticar= res;
      })
      }, 1000);
      

  }
  

  medjunarodni()
  {
    this.dugme=0;

    setTimeout(() => {
     window.print()
   }, 1500);

   setTimeout(() => {
    this.dugme=1;
  }, 2000);

  }

}
