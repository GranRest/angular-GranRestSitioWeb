import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _router: Router) { 



  }

  ngOnInit(): void {
  }
  redireccionamiento(){

 this._router.navigate(['/servicios-pagina']);
  }

}
