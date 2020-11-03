import { Component, OnInit } from '@angular/core';
import { MotsService } from '../../services/mots.service';
import { MovimientosModule } from '../../models/movimientos.module';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  movimiento: MovimientosModule [];
  
  constructor(private motsService: MotsService) { }

  ngOnInit() {
this.motsService.getMots().subscribe((movi: any) =>{
  this.movimiento = movi.movimientos;
  console.log(this.movimiento);
})
  
  }

}
