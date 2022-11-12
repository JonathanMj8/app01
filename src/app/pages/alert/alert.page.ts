import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';
import { environment } from 'src/environments/environment';
const apiKey = environment.apiKey

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})

export class AlertPage implements OnInit {

  //interfaz de los componentes

  constructor( private newService: NewsService, private alertController : AlertController) { }
  ngOnInit() {
    this.newService.getTopHeadLines()
    .subscribe(articles => {
      console.log(articles);
    });
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
 
