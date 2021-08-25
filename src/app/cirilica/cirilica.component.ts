import { Router, ActivatedRoute } from '@angular/router';
import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cirilica',
  templateUrl: './cirilica.component.html',
  styleUrls: ['./cirilica.component.css']
})
export class CirilicaComponent implements OnInit {

  constructor(private servis:ServisService, private route:ActivatedRoute) { }

  podaci:any;
  id = this.route.snapshot.params['id'];
  ngOnInit(): void {
      this.servis.getVjencanjeById(this.id)
      .subscribe(res=>
        {
          this.podaci = res;
        })    
  }

}
