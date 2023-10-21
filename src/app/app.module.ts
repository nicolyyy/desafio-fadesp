import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarefaListaComponentComponent } from './components/tarefa-lista-component/tarefa-lista-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaListaComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
