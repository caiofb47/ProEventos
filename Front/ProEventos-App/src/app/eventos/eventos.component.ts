import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  public eventos:any=[
    {Nome:"Evento A", Tema:"A"},
    {Nome:"Evento B", Tema:"B"},
    {Nome:"Evento C", Tema:"C"},
  ];

}
