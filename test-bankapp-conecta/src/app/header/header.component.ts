import { Component, OnInit } from '@angular/core';
import { CuentaModule } from '../models/cuenta.module';
import { CuentaService } from '../services/cuenta.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cuenta: CuentaModule;

  nom: String;
  uSes: String;

  constructor(private cuentaService: CuentaService) { }

  ngOnInit() {
    
    // metodo que llama al service que contiene infomacion de la cuenta

    this.cuentaService.getCta().subscribe((cta: any) => {
      this.cuenta = cta.cuenta;
      console.log(this.cuenta);
      for(const val of cta.cuenta){
        this.nom = val.nombre;
        this.uSes = val.ultimaSesion;
      }
      console.log('cuenta');
      console.log(this.nom);
      console.log(this.uSes);
    })
  }

}
