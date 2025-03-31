import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Авторизация</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Введите API-ключ Zotero</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">API Key</ion-label>
            <ion-input [(ngModel)]="apiKey" type="text"></ion-input>
          </ion-item>
          <ion-button expand="full" (click)="login()">Войти</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
})
export class LoginComponent {
  apiKey: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.apiKey.trim()) {
      localStorage.setItem('zoteroApiKey', this.apiKey);
      this.router.navigate(['/library']);
    }
  }
}
