import { Component, OnInit } from '@angular/core';
import { TarjetasModule } from '../../models/tarjetas.module';
import { CardService } from '../../services/card.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
//  declaramos variables
  tarjeta: TarjetasModule [];

  public form: FormGroup = this.fb.group({
    ntar: [ ],
    cta: [ ],
    issu: [ ],
    nom: [ ],
    mar: [ ],
    stat: [ ],
    sld: [ ],
    tcta: [ ],
  });

  constructor(private cardService: CardService, 
     private fb: FormBuilder) { }

  ngOnInit() {

    this.form = new FormGroup({
      firstName: new FormControl()
   });

    // aqui consumimos la api
    this.cardService.getCards().subscribe((trj: any) =>{
      this.tarjeta = trj.tarjetas;
      console.log(this.tarjeta)
    })
  }

  // metodo que construye e imprime JSON en alerta
  onSub(): void{
    const ntar = (<HTMLInputElement>document.getElementsByName('ntar')[0]).value.trim();
    const cta = (<HTMLInputElement>document.getElementsByName('cta')[0]).value.trim();
    const issu = (<HTMLInputElement>document.getElementsByName('issu')[0]).value.trim();
    const nom = (<HTMLInputElement>document.getElementsByName('nom')[0]).value.trim();
    const mar = (<HTMLInputElement>document.getElementsByName('mar')[0]).value.trim();
    const stat = (<HTMLInputElement>document.getElementsByName('stat')[0]).value.trim();
    const sld = (<HTMLInputElement>document.getElementsByName('sld')[0]).value.trim();
    const tcta = (<HTMLInputElement>document.getElementsByName('tcta')[0]).value.trim();
    var tarj = [{
      'NumeroTarjeta': ntar,
      'Cuenta': cta,
      'Issuer': issu,
      'Nombre': nom,
      'Marca': mar,
      'Estatus': stat,
      'Saldo': sld,
      'TipoCuenta': tcta
    }]
    alert(JSON.stringify(tarj));
    console.log(tarj);
  }

}
