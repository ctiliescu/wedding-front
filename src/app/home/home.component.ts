import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  name: string = '';
  email: string = '';
  message: string = '';

  ngOnInit(): void {
  }

  test(): void {
    this.http.post<any>('https://weddinglab-go-backend-cristian-iliescu.vercel.app/api/index.go', JSON.stringify({ name: this.name, message: this.message, email: this.email})).subscribe(data => {    
    })
  }

}
