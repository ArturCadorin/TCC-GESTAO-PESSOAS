import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../../models/empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {

  private apiUrl = 'http://localhost:8080/api/empresa';

  constructor(private http: HttpClient) { }

  // Retornar todas as empresas
  getAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl);
  }

  // Método para criar uma nova empresa
  createEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.apiUrl, empresa);
  }

  // Deletar empresa
  deleteEmpresa(id: number){
    return this.http.delete<Empresa>(`${this.apiUrl}/${id}`)
  }

  // Retornar empresa pelo ID
  getEmpresaById(id: number) {
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`);
  }

  // Atualizar empresa
  updateEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.apiUrl}/${empresa.id}`, empresa);
  }
}
