import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valendo = 1;
  numeroT1 = 0;
  numeroT2 = 0;
  pontost1 = 0;
  pontost2 = 0;
  resultado: any;

  numeroValendo(valor: number) {
    this.valendo = valor;

    if(this.valendo === 3){
      this.presentToast('Truco!');
    }

    if(this.valendo === 6){
      this.presentToast('Dobrou!');
    }

    if(this.valendo === 9){
      this.presentToast('Triplicou!');
    }

    if(this.valendo === 12){
      this.presentToast('QUADRIPLICOU! FIM DE JOGO!');
    }
  }

  somarAposta(time : number) {
    if(time === 1){
      this.numeroT1 += this.valendo;
    }
    else if(time === 2){
      this.numeroT2 += this.valendo;
    }
    this.valendo = 1;
    this.calcResultado();

  }

  subtrairAposta(time : number){
    if(time === 1){
      this.numeroT1 -= this.valendo;
    }
    else if(time === 2){
      this.numeroT2 -= this.valendo;
    }

    this.valendo = 1;

    if(this.numeroT1 < 0){
      this.numeroT1 = 0;
    }
    if(this.numeroT2 < 0){
      this.numeroT2 = 0;
    }

    this.calcResultado();
  }

  calcResultado(){
    if(this.numeroT1 >= 12){
      this.presentAlert('O Time 1 ganhou?',1);
    }
    else if(this.numeroT2 >= 12){
      this.presentAlert('O Time 2 ganhou?',2);
  }
}
jogarNovamente(){
  this.valendo = 1;
  this.numeroT1 = 0;
  this.numeroT2 =0;
}
constructor(private AlertController: AlertController, private ToastController : ToastController) {}

async presentAlert(message : string, time : number){
  const alert = await this.AlertController.create({
    backdropDismiss: false,
    message: message,
    buttons: [
      {
        text: 'Não',
        role: 'cancel',
        handler: () => {

        },
      },
      {
        text: 'Ganhou!',
          role: 'OK',
          handler: () => {
            if(time === 1){
              this.pontost1++;
            }else if(time === 2){
              this.pontost2++;
            }
            this.jogarNovamente();
      },
    },
    ],
  });
  await alert.present();
}

async presentToast(message : string) {
  const toast = await this.ToastController.create(
    {
      message: message,
      duration: 1500,
      position: 'middle'
    }
  );

  await toast.present();
}

resetar()
{
  this.valendo = 1;
  this.numeroT1 = 0;
  this.numeroT2 = 0;
  this.pontost1 = 0;
  this.pontost2 = 0;
}

}
