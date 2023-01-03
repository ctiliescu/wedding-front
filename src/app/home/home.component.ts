import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdentityService } from '../services/identity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  display: boolean = true;
  cazare: string = '';
  mesaj: string = '';
  q: string = 'q';
  c: string = 'c';
  f: string = 'f';

  cities = ['Doresti cazare?', 'Da, doresc cazare', 'Nu, nu doresc cazare'];

  constructor(private http: HttpClient, public identity: IdentityService) { 
    this.display = !(localStorage.getItem('submited')! === "true");
  }

  ngOnInit() {
  }

  onSelected(value:string): void {
    this.cazare = value;
  }

  resetValue(): void {
    localStorage.removeItem("submited");
    this.display = true;
  }

  sentEmail(vin: boolean): void {
    if((this.identity.number > 0 || vin ==false) && this.identity.nameToString) {
      this.display = false; 
      this.http.post<any>('https://wedding-backend-neon.vercel.app/response', 
        { 
          "name": this.identity.nameToString,
          "number": this.identity.number,
          "raspuns": vin,
          "contact": this.identity.email,
          "cazare": this.cazare,
          "mesaj": this.mesaj}).subscribe(data => { 
            localStorage.setItem('submited', "true");
    })
    } else {
      alert("Te rugam sa completezi numele si numarul de persoane")
    }
  }

}
