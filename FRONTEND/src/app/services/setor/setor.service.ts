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

  // Método para criar uma nova setor
  createSetor(setor: Setor): Observable<Setor> {
    return this.http.post<Setor>(this.apiUrl, setor);
  }

  // Deletar setor
  deleteSetor(id: number){
    return this.http.delete<Setor>(`${this.apiUrl}/${id}`)
  }
}
