import { isNull } from "@angular/compiler/src/output/output_ast";
import { Component} from "@angular/core";

@Component({
selector:'mi-componente', 
templateUrl:'./mi-componente.component.html'
} )

export class MiComponente{
public titulo:String="";
public comentario:String="";
public year:number=0;
public mostrarPeliculas:boolean=false;



constructor(){
this.titulo="Hola mundo ,Soy MI COMPONENTE";
this.comentario="Desarrollado por GrantRest Tecnology";
this.year=2022;
this.mostrarPeliculas=true;

    console.log("Componente cargado");
    console.log(this.titulo,this.comentario,this.year);

}

ocultarPeliculas(){
    this.mostrarPeliculas=false;

}
}
