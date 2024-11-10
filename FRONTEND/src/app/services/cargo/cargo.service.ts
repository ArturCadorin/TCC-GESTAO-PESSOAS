import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../../models/cargo';


@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private apiUrl = 'http://localhost:8080/api/cargos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.apiUrl);
  }

  // Método para criar uma nova cargo
  createCargo(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.apiUrl, cargo);
  }

  // Deletar cargo
  deleteCargo(id: number){
    return this.http.delete<Cargo>(`${this.apiUrl}/${id}`)
  }
}
