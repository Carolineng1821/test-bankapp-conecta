import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimientosComponent } from './componentes/movimientos/movimientos.component';
import { SaldosComponent } from './componentes/saldos/saldos.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MovimientosComponent,
    SaldosComponent,
    TarjetasComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
