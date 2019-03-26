import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      openingAnimation()
    }, 4000)
  }

}

function openingAnimation() {
  var welcome = document.getElementById("logo");
  welcome.classList.add("rollOut");
  var newone = welcome.cloneNode(true);
  welcome.parentNode.replaceChild(newone, welcome);
  setTimeout(() => {
    newone.parentNode.removeChild(newone);
    contentAnimation();
  }, 1200);
};

function contentAnimation () {
  var content = document.getElementById("content");
  content.classList.remove("hidden");
  var contentAnimate = content.cloneNode(true);
  content.parentNode.replaceChild(contentAnimate, content);
}