import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  tamanho = 6;
  valorAtual = 0;
  imgsDado = ['assets/dice-red.png', 'assets/dice.gif'];

  imagemDado = this.imgsDado[0];

  constructor() {}

  jogarDado() {
    this.imagemDado = this.imgsDado[1];
    this.valorAtual = 0;
    setTimeout(() => {
      let valorTemp = Math.floor(Math.random() * this.tamanho) + 1;
      this.valorAtual = valorTemp < this.tamanho ? valorTemp : this.tamanho;
    }, 2500);
  }
}