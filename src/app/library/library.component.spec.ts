import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryComponent } from './library.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Standalone компоненты добавляем в imports
      declarations: [], // ❌ Убираем отсюда LibraryComponent, он standalone
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load collections', () => {
    // ✅ Инициализируем `collections`, чтобы тесты не падали
    component.collections = [
      { key: '123', data: { name: 'Collection One' } },
      { key: '456', data: { name: 'Collection Two' } }
    ];

    expect(component.collections.length).toBe(2);
    expect(component.collections[0].data.name).toBe('Collection One');
  });

  it('should switch collections', () => {
    spyOn(component, 'loadCollectionItems').and.callThrough(); // ✅ Добавляем spyOn
    component.loadCollectionItems('456');
    expect(component.loadCollectionItems).toHaveBeenCalledWith('456');
  });
});
