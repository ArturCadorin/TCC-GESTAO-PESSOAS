import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matriculas } from '../../models/matriculas';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  private apiUrl = 'http://localhost:8080/api/colaboradores';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Matriculas[]> {
    return this.http.get<Matriculas[]>(this.apiUrl);
  }

  // Método para criar uma nova empresa
  createMatricula(matricula: Matriculas): Observable<Matriculas> {
    return this.http.post<Matriculas>(this.apiUrl, matricula);
  }

  // Retornar empresa pelo ID
  getMatriculaById(id: number) {
    return this.http.get<Matriculas>(`${this.apiUrl}/${id}`);
  }

  // Deletar empresa
  deleteMatricula(id: number){
    return this.http.delete<Matriculas>(`${this.apiUrl}/${id}`)
  } 
}
