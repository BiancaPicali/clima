import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private url = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) { }

  buscarUsuario(page: number){
    return this.http.get(`${this.url}?page=${page}`)
  }
}
