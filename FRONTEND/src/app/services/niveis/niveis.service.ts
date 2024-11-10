import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nives } from '../../models/Niveis';

@Injectable({
  providedIn: 'root'
})
export class NiveisService {

  private apiUrl = 'http://localhost:8080/api/plano_carreira';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Nives[]> {
    return this.http.get<Nives[]>(this.apiUrl);
  }

  // Método para criar um novo nivel
  createNivel(niveis: Nives): Observable<Nives> {
    return this.http.post<Nives>(this.apiUrl, niveis);
  }
 
  // Deletar empresa
  deleteNivel(id: number){
    return this.http.delete<Nives>(`${this.apiUrl}/${id}`)
  }  
}
