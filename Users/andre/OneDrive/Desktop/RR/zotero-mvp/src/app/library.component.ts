import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-library',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Моя библиотека Zotero</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item *ngFor="let item of libraryItems">
          <ion-label>{{ item.data.title }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class LibraryComponent {
  libraryItems: any[] = [];

  constructor(private http: HttpClient) {
    this.loadLibrary();
  }

  loadLibrary() {
    const apiKey = localStorage.getItem('zoteroApiKey');
    const url = `https://api.zotero.org/users/123456/items?key=${apiKey}`;
    this.http.get<any[]>(url).subscribe(response => {
      this.libraryItems = response;
    });
  }
}
