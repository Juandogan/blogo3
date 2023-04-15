import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-card2',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.css']
})

export class FooterCard2Component implements OnInit {

  @Input('data') data : any ;

  constructor() { }

  ngOnInit(): void {
  }




}
