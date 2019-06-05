import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;

    const password = "asdasd";

    let my_pwd;
    my_pwd = "qwerewt";

    //login({ passwd: "zxvxcv" });

    const url = "https://example.com?password=hl2OAIXXZ60";
  }
}
