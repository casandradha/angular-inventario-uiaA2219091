import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BDenMemoriaService } from './bden-memoria.service';

import { AppComponent } from './app.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { PartidaComponent } from './partida/partida.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatosService } from './datos.service';

@NgModule({
  declarations: [
    AppComponent,
    PartidaComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(
      BDenMemoriaService, {dataEncapsulation: false}
    )
    )
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
