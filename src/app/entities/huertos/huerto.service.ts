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

  public obtenerHuertosPaginados(page:number, size:number, sort:String ):Observable<any>{
    //page=0&size=3&sort=id,asc
    const params = `?page=${page}&size=${size}&sort=${sort}`;
    const url = "http://localhost:8080/api/huertos-paginados"+params;
    return this.http.get<any>(url);

  }

  public guardarHuerto(Huerto: Huerto): Observable<Huerto>{
    const URL = 'http://localhost:8080/api/huertos';
    return this.http.post<Huerto>(URL, Huerto);
  }

  public obtenerHuertoPorId(huertoID:number): Observable<Huerto>{
    const URL = 'http://localhost:8080/api/huertos/'+ huertoID;
    return this.http.get<Huerto>(URL);
  }

  public editarHuerto(huertoID:number):Observable<Huerto>{
    const URL = 'http://localhost:8080/api/huertos/'+ huertoID;
    return this.http.put<Huerto>(URL, Huerto);
  }

  public eliminarHuerto(huertoID:number): Observable<void>{
    const URL = 'http://localhost:8080/api/huertos/'+ huertoID;
    return this.http.delete<void>(URL);
  }

}

