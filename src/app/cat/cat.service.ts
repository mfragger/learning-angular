import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat'

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private catfactURL: string = "https://catfact.ninja";

  constructor(
    private http: HttpClient
  ) { }

  getFact(): Observable<Cat> {
    return this.http.get<Cat>(this.catfactURL + '/fact');
  }
}
