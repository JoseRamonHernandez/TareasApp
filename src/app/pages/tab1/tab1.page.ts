import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from '../../services/tareas.service';
import { AgregarPage } from '../agregar/agregar.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public tareasService: TareasService,
                    private router: Router ) {
    
  }
agregarLista(){
  this.router.navigateByUrl('/tabs/tab1/agregar');
}


}
