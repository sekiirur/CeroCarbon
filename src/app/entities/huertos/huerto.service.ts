import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Huerto } from 'src/app/models/Huerto';
@Injectable({
  providedIn: 'root'
})
export class HuertoService {

  constructor(private http: HttpClient) {}

  public obtenerHuertos(): Observable<Huerto[]> {
    const url = "http://localhost:8080/api/huertos";
    return this.http.get<Huerto[]>(url);
  }

  public guardarHuerto(Huerto: Huerto): Observable<Huerto>{
    const URL = 'http://localhost:8080/api/huertos';
    return this.http.post<Huerto>(URL, Huerto);
  }
}
