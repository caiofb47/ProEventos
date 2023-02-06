import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent {
  constructor(private http: HttpClient) {}

  public eventos: any;
  public eventosFiltrados: any;
  _tableFilter: string = '';

  public get tableFilter() {
    return this._tableFilter;
  }

  public set tableFilter(value: string) {
    this._tableFilter = value;
    this.eventosFiltrados = this.tableFilter
      ? this.FiltrarEventos(this.tableFilter)
      : this.eventos;
  }

  FiltrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string }) =>
        evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('http://localhost:5074/api/evento').subscribe(
      (response) => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      (error) => console.log(error)
    );
  }
}
