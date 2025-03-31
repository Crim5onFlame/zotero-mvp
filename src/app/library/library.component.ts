import { Component, OnInit } from '@angular/core';
import { ZoteroService } from '../services/zotero.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  collections: any[] = [];

  constructor(private zoteroService: ZoteroService) {}

  ngOnInit() {
    this.loadCollections();
  }

  // Загрузка коллекций из Zotero
  loadCollections() {
    const apiKey = localStorage.getItem('zoteroApiKey');
    if (!apiKey) {
      console.error('❌ API-ключ не найден!');
      return;
    }
    this.zoteroService.getCollections().subscribe({
      next: (data) => {
        this.collections = data;
      },
      error: (err) => {
        console.error('Ошибка загрузки коллекций:', err);
      },
    });
  }
}
