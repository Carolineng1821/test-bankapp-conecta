import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  // llamamos la api mediante la URL
  public apiCrd = 'http://bankapp.endcom.mx/api/bankappTest/tarjetas';

  constructor(private http: HttpClient) { }

  // creamos metodo para consumir api
  getCards(): Observable<any> {
    return this.http.get<any>(this.apiCrd)
  }
}
