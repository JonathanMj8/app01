import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //componentes: any[] = [];
  //areglo de componentes
  componentes: Componente[] = [
    {
      icon: 'baseball-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'logo-apple',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple',
      name: 'Card',
      redirectTo: '/card'
    },
  ];
 
  //interfaz de los componentes
  
  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }
  async Sign() {
    const alert = await this.alertController.create({
      header: 'Acceso correcto',
      message: 'Bienvenido',
      buttons: ['OK'],
    });
    await alert.present();
  }

}

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}