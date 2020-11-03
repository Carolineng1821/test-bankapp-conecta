import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  //llamamos api mediante la URL
  public apiSls = 'http://bankapp.endcom.mx/api/bankappTest/saldos';

  constructor(private http: HttpClient) { }

  //metodo que manda a llamar la api
  getSaldos(): Observable<any>{
    return this.http.get<any>(this.apiSls); 
  }

}
