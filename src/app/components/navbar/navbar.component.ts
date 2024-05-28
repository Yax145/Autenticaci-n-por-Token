import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
  
  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.userName = user.name;
      }
    });
  }
  userName: string | undefined;
}

