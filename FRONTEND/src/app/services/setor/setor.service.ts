import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Setor } from '../../models/setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  private apiUrl = 'http://localhost:8080/api/setor';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.apiUrl);
  }

  // Método para criar uma nova empresa
  createSetor(setor: Setor): Observable<Setor> {
    return this.http.post<Setor>(this.apiUrl, setor);
  }
}
