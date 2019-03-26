import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-view',
  templateUrl: './about-me-view.component.html',
  styleUrls: ['./about-me-view.component.sass']
})
export class AboutMeViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mouseEnter(bubble: string) {
    var placeholder = document.getElementById("placeholder-details");
    var id = bubble + '-details';
    var details = document.getElementById(id);
    details.classList.remove("hidden");
    placeholder.classList.add("hidden");

  }

  mouseLeave(bubble: string) {
    var placeholder = document.getElementById("placeholder-details");
    var id = bubble + '-details';
    var details = document.getElementById(id);
    details.classList.add("hidden");
    placeholder.classList.remove("hidden");
  }

}
