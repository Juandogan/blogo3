import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.css']
})
export class FooterCardComponent implements OnInit {
  @Input('data') nota : any ;
  constructor() { }

  ngOnInit(): void {
  }

}
