import { Component, OnInit } from '@angular/core';
import { SaldosModule } from '../../models/saldos.module';
import { SaldoService } from '../../services/saldo.service';


@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.css']
})
export class SaldosComponent implements OnInit {
  
  //declaramos variables
  saldo: SaldosModule;
  saldogral: Number;
  ingr: Number;
  gast: Number;


  constructor(private saldosService: SaldoService) { }

  ngOnInit() {

    // mandamos llamar el servicio para consumir la api
    this.saldosService.getSaldos().subscribe((sls: any) =>{
      this.saldo = sls.saldos;
      console.log(this.saldo);
      for(const val of sls.saldos){
        this.saldogral = val.saldoGeneral;
        this.ingr = val.ingresos;
        this.gast = val.gastos;
      }
      // this.saldogral = this.saldo.saldoGeneral;
      console.log('saldo');
      console.log(this.ingr);
    })
  }
}
