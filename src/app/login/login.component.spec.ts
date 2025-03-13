import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1️⃣ Тест: компонент создается
  it('должен создать компонент', () => {
    expect(component).toBeTruthy();
  });

  // 2️⃣ Тест: API-ключ сохраняется в localStorage
  it('должен сохранять API-ключ в localStorage', () => {
    spyOn(localStorage, 'setItem');
    component.apiKey = 'test_key';
    component.login();
    expect(localStorage.setItem).toHaveBeenCalledWith('zoteroApiKey', 'test_key');
  });

  // 3️⃣ Тест: переход на страницу /library после логина
  it('должен перенаправлять пользователя на /library', () => {
    component.apiKey = 'test_key';
    component.login();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/library']);
  });

  // 4️⃣ Тест: если API-ключ пустой, ничего не происходит
  it('не должен ничего делать, если API-ключ пустой', () => {
    spyOn(localStorage, 'setItem');
    component.apiKey = '';
    component.login();
    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  // 5️⃣ Тест: если API-ключ содержит пробелы, они должны учитываться
  it('должен учитывать пробелы в API-ключе', () => {
    component.apiKey = '   ';
    component.login();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});
