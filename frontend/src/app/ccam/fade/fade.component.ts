import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-fade',
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.css'],
  animations: [
    trigger('state', [
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      state(
        'hidden',
        style({
          opacity: '0'
        })
      ),
      transition('* => visible', [animate('500ms ease-out')]),
      transition('visible => hidden', [animate('500ms ease-out')])
    ])
  ],

})
export class FadeComponent implements OnInit {

  state: any;
  // tslint:disable-next-line: variable-name
  private _show: boolean;
  get show() {
    return this._show;
  }

  @Input()
      set show(value: boolean) {
        if (value) {
          // show the content and set it's state to trigger fade in animation
          this._show = value;
          this.state = 'visible';
        } else {
          // just trigger the fade out animation
          this.state = 'hidden';
        }
      }


  constructor() { }

  ngOnInit(): void {
  }
  animationDone(event: AnimationEvent) {
    // now remove the

  }
}
