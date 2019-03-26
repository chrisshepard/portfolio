import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PathLocationStrategy, LocationStrategy, Location } from '@angular/common';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class NavComponent {
  isHomePage: boolean;

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (this.location.path() !== '') {
        this.isHomePage = false;
      } else {
        this.isHomePage = true;
      }
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private location: Location) {}

}
