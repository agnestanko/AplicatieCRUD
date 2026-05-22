import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Angajat } from '../models/angajat.model';
import { AddAngajatRequest } from '../models/add-angajat-request.model';

@Injectable({
  providedIn: 'root'
})
export class Angajati {
  // API-ul ruleaza in Visual Studio pe portul 5256
  baseApiUrl: string = 'http://localhost:5256';

  constructor(private http: HttpClient) { }

  getAllAngajati(): Observable<Angajat[]> {
    return this.http.get<Angajat[]>(this.baseApiUrl + '/api/Angajati');
  }

  getAngajat(id: string): Observable<Angajat> {
    return this.http.get<Angajat>(this.baseApiUrl + '/api/Angajati/' + id);
  }

  addAngajat(addAngajatRequest: AddAngajatRequest): Observable<Angajat> {
    return this.http.post<Angajat>(this.baseApiUrl + '/api/Angajati', addAngajatRequest);
  }

  updateAngajat(id: string, updateAngajatRequest: Angajat): Observable<Angajat> {
    return this.http.put<Angajat>(this.baseApiUrl + '/api/Angajati/' + id, updateAngajatRequest);
  }

  deleteAngajat(id: string): Observable<Angajat> {
    return this.http.delete<Angajat>(this.baseApiUrl + '/api/Angajati/' + id);
  }
}