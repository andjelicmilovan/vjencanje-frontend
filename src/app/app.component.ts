import { HttpClient } from '@angular/common/http';
import { ServisService } from './servis.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private servis:ServisService, private http:HttpClient){ }
  // user:any;
  // ngOnInit()
  // {
  //   this.http.get("http://192.168.100.112:8000/api/user", {withCredentials:true})
  //   .subscribe(res=>
  //     {
  //         this.user = res;
  //         console.log(this.user);
  //         this.servis.user = this.user.role;

  //     })

  // }
  title = 'vjencanjeFront';

}
