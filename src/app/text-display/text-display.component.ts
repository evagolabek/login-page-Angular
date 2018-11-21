import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnInit {
  @Input() textDisplay: TextDisplay;

  name: string;
  textLeft: string;
  textRight: string;

  test: TextDisplay = {name: 'plok', text: '45/567'}

  constructor() { }

  ngOnInit() {
    this.name = this.test.name;
    this.textLeft = this.test.text.substring(0, this.test.text.indexOf('/') === -1 ? this.test.text.length : this.test.text.indexOf('/'));

    this.textRight = this.test.text.substring(this.test.text.indexOf('/'));
  }

}
export interface TextDisplay {
  name: string,
  text: string,
}
