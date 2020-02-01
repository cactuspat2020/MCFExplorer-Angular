import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/']);
  }
}
