import { Component, ElementRef, OnInit } from '@angular/core';
import { IdentityService } from '../services/identity.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  constructor(public identity: IdentityService, private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {    
    var s0 = document.createElement("script");
    s0.type = "text/javascript";
    s0.src = "../../assets/vendor/particles/particles.min.js";
    this.elementRef.nativeElement.appendChild(s0);
    
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../assets/vendor/particles/particles.app.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
