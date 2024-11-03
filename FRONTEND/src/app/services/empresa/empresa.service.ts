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

  getAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl);
  }
}
