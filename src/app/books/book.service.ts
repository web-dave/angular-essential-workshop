import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './IBook.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private restRoot = 'http://localhost:4730/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    const url = this.restRoot;
    return this.http.get<IBook[]>(url);
  }
}
