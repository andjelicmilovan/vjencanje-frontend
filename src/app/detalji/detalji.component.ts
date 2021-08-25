import { ServisService } from './../servis.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {


  constructor(private route:ActivatedRoute, private servis:ServisService) { }

  dugme = 1;
  id = this.route.snapshot.params['id'];
  rezultat:any;
  maticar:any;

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

  openPDF()
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
