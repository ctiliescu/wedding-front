import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  jwt: string;
  names: string[] = [];
  nameToString: string = "";

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      const param = params['jwt'];
      if(param) {
        this.jwt= param
        localStorage.setItem('jwt', param);
        this.loadDataFromJWT(param);
      }
    });
    this.jwt = localStorage.getItem('jwt')!; 
    this.loadDataFromJWT(this.jwt);
  }

  loadDataFromJWT(jwt: String) {
    this.http.post<any>('https://wedding-backend-neon.vercel.app/decode-jwt', { "token": jwt}).subscribe(data => { 
      if(data) {
        this.names = data.names;
        this.getNames(data.names);
      } 
    })
  }

  getNames(names: string[]) {
    if(names.length < 2) {
      this.nameToString = names[0];
    } else {
      let result = "";
      let i = 1;

      for (const x of names) {
          if(i == 1) result = x;
          else if(i == names.length) result = result + " si " + x;
          else  result = result + " , " + x;
          i++;
      }
      this.nameToString = result
    }
  }
}
