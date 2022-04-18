//Importar los modulos de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
//Importar los componentes a los cuales quiero hacer una pagina exclusiva
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { ErrorComponent } from "./components/error/error.component";
import { PruebasComponent } from "./components/pruebas/pruebas.component";

//Array de Rutas
const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'blog',component:BlogComponent},
    {path:'formulario',component:FormularioComponent},
    {path:'nosotros',component:NosotrosComponent},
    {path:'servicios-pagina',component:PaginaComponent},
    {path:'prueba/:nombre',component:PruebasComponent},
    {path:'**',component:ErrorComponent}

];


//Exportar modelo de Rutas
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);