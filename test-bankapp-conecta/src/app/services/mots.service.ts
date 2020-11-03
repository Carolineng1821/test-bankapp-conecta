import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotsService {

   
  public apiMots = 'http://bankapp.endcom.mx/api/bankappTest/movimientos';

  constructor(private http: HttpClient) { }

  getMots(): Observable<any> {
    return this.http.get<any>(this.apiMots);
  }
}
