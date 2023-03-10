import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valendo = 1;
  numerost1 = 0;
  numerost2 = 0;
  pontost1 = 0;
  pontost2 = 0;
  presentToast: any;

  numeroValendo(valor: number) {
    this.valendo = valor;

    if(this.valendo === 3){
      this.presentToast('Truco');
    }
  }


}
