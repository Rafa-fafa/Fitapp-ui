import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  get x(): string {
    return this._x;
  }

  set x(value: string) {
    this._x = value;
  }

  constructor() { }

  _x: string = '  akaron wrzucić na wrzątek i gotować zgodnie z instrukcją <br/>  <br/>  <br/>  na opakowaniu, odcedzić, wymieszać z łyżeczką oliwy i wyłożyć do dużego naczynia żaroodpornego posmarowanego 1 łyżką oliwy.\\nNa makaron wyłożyć pokrojone (upieczone wcześniej lub gotowane) mięso kurczaka.\\nPiekarnik nagrzać do 180 stopni C.\\nPrzygotować sos pomidorowy: do garnka wlać 2 łyżeczki oliwy, dodać pokrojoną w małą kosteczkę cebulę i zeszklić ją często mieszając. Dodać starty czosnek oraz pomidory i zagotować. Doprawić solą, pieprzem, szczyptą cukru oraz pozostałymi przyprawami. Gotować przez ok. 5 - 8 minut.\\nJeśli używamy chorizo, należy je obrać z błonki, pokroić w kostkę i smażyć na małym ogniu na patelni przez kilka minut aż się wytopi. Połączyć razem z sosem pomidorowym.\\nNa makaron z mięsem wyłożyć sos pomidorowy i posypać serem  brie pokrojonym w kostkę. Skropić łyżką oliwy i posypać oregano.\\nWstawić do piekarnika i piec przez 25 minut bez przykrycia.\\n\n';

  ngOnInit() {
  }

}
