import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  shouldRun = true;

  constructor() { }

  ngOnInit() {
  }

  closeSlider() {
    this.opened = false;
    document.getElementById("overlay").style.display = "none";
  }

  openSlider() {
    this.opened = true;
    document.getElementById("overlay").style.display = "block";
  }

}
