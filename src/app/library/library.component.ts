import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  collections: any[] = []; // ✅ Добавляем свойство, чтобы избежать ошибки

  constructor() {}

  ngOnInit(): void {
    // Инициализируем коллекции данными
    this.collections = [
      { key: '123', data: { name: 'Collection One' } },
      { key: '456', data: { name: 'Collection Two' } }
    ];
  }

  loadCollectionItems(id: string) {
    console.log(`Loading collection items for ID: ${id}`);
  }
}
