import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ZoteroService } from '../services/zotero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiKey: string = '';

  constructor(private router: Router, private zoteroService: ZoteroService) {}

  // Метод для сохранения API-ключа и перехода в библиотеку
  login() {
    if (this.apiKey.trim()) {
      localStorage.setItem('zoteroApiKey', this.apiKey); // Сохранение ключа в локальное хранилище
      this.zoteroService.setApiKey(this.apiKey); // Устанавливаем ключ в сервисе
      this.router.navigate(['/library']); // Перенаправление в библиотеку
    } else {
      return;
    }

    // Сохраняем API-ключ в localStorage
    localStorage.setItem('zoteroApiKey', this.apiKey);

    // Перенаправляем пользователя в библиотеку
    this.router.navigate(['/library']);
  }
}
