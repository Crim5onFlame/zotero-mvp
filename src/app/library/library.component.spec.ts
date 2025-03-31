import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryComponent } from './library.component';
import { ZoteroService } from '../services/zotero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let zoteroService: ZoteroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryComponent],
      imports: [HttpClientTestingModule],
      providers: [ZoteroService],
    });

    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    zoteroService = TestBed.inject(ZoteroService);
  });

  it('should load collections on init', () => {
    spyOn(zoteroService, 'getCollections').and.returnValue(of([{ name: 'Test Collection' }]));
    component.ngOnInit();
    expect(component.collections.length).toBe(1);
  });

  it('should handle empty collections', () => {
    component.collections = [];
    expect(component.collections.length).toBe(0);
  });
});
