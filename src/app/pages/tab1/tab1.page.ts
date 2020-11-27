import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonButtons } from '@ionic/angular';
import { TareasService } from '../../services/tareas.service';
import { AgregarPage } from '../agregar/agregar.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public tareasService: TareasService,
                    private router: Router,
                    private alertCtrl: AlertController ) {
    
  }
async agregarLista(){
 // this.router.navigateByUrl('/tabs/tab1/agregar');

 const alert = await this.alertCtrl.create({
  cssClass: 'my-custom-class',
  header: 'Nueva Tarea',
  inputs: [{
    name: 'titulo',
    type: 'text',
    placeholder: 'Titulo de la tarea'
  }], 
  buttons: [
    
    {
    text: 'Cancelar',
    role: 'cancel',
    handler: () =>{
      console.log('Cancelar');
    }
  },
  {
    text: 'Crear',
    handler: (data) =>{
      console.log(data);
      if(data.titulo.length === 0){
        return;
      }

this.tareasService.crearLista(data.titulo)

//crear la lista


    }
  }
 
    ]
});

 alert.present();


}


}



