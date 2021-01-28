import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerrosService {

  constructor(private http: HttpClient) { }

  getPerros() {
    return this.http.get('http://localhost:5000/perros')
  }

  getPerroById(idPerro: String) {
    return this.http.get(`http://localhost:5000/perros/${idPerro}`)
  }
}
