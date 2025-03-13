import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZoteroService {
  private apiUrl = 'https://api.zotero.org/users/16670277';
  private apiKey: string = 'qvyhjvnRt8spuiveXBn4BAB7';

  constructor(private http: HttpClient) {}

  // Метод для установки API-ключа
  setApiKey(key: string) {
    this.apiKey = key;
  }

  // Получение коллекций из библиотеки пользователя
  getCollections(): Observable<any> {
    const headers = new HttpHeaders({
      'Zotero-API-Key': this.apiKey,
    });
    return this.http.get(`${this.apiUrl}/collections`, { headers });
  }
}
