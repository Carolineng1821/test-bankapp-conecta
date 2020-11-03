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

  tarjeta: TarjetasModule [];

  constructor(private cardService: CardService) { }

  ngOnInit() {

    // aqui consumimos la api
    this.cardService.getCards().subscribe((trj: any) =>{
      this.tarjeta = trj.tarjetas;
      console.log(this.tarjeta)
    })
  }

}
