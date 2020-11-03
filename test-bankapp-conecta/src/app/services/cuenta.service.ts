import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  //aqui declaramos la api que contienen la informacion necesario que consumiremos
  public apiCta = 'http://bankapp.endcom.mx/api/bankappTest/cuenta';

  constructor(private http: HttpClient ) { }

  // metodo que manda a llamar la api
  
  getCta(): Observable<any>{
    return this.http.get<any>(this.apiCta);
  }
}
