import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProviders } from './app.routing'


import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.componente';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PreciosComponent } from './components/precios/precios.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { YoutubeComponent } from './components/youtube/youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    NosotrosComponent,
    PreciosComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    YouTubePlayerModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }