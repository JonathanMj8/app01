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
      name: 'Login',
      redirectTo: '/login'
    },
    {
      icon: 'logo-apple',
      name: 'Menu',
      redirectTo: '/menu'
    },
    {
      icon: 'logo-apple',
      name: 'Registro',
      redirectTo: '/registrar'
    },
    {
      icon: 'logo-apple',
      name: 'Periodo Probable',
      redirectTo: '/periodo'
    },
    {
      icon: 'logo-apple',
      name: 'slider',
      redirectTo: '/slider'
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