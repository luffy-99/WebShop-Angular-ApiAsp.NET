import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templateclient',
  templateUrl: './templateclient.component.html',
  styleUrls: ['./templateclient.component.css']
})
export class TemplateclientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.startsWith('/admin')) {
      const html = document.getElementById('client');
      html.hidden = true;
      console.log(123);
    } else {
      console.log(456);
    }
  }

}
