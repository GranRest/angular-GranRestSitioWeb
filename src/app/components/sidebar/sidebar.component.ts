import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router:Router ) {

   }

  ngOnInit(): void {
  }
  //Creacion de redireccionamiento desde el sidebar,con roooouter
  redireccionamiento(){
    this._router.navigate(['/blog']);
  }

}
