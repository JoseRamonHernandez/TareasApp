import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
    providedIn: 'root'
})
export class TareasService{
    

    listas: Lista[] = [];


    constructor() {
        
        this.cargarStorage();

        /*const lista1 = new Lista('Recolectar cosas');
        const lista2 = new Lista('Ya fue hom´s');


        this.listas.push(lista1, lista2);*/

        
     }

crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
}

guardarStorage(){

localStorage.setItem('data', JSON.stringify( this.listas))

}

cargarStorage(){
    
    if(localStorage.getItem('data'))
    {
    this.listas = JSON.parse(localStorage.getItem('data'));
    }
    else
    {
        this.listas = [];
    }
}

}