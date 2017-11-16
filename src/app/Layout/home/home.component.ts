import { OfertasService } from '../../services/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Ofertas } from "../../Entidades/Ofertas";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

   public ofertas :Ofertas[];


  constructor(private ofertasService: OfertasService) { }
  ngOnInit() {

   this.ofertas = this.ofertasService.GetOfertas();
   console.log(this.ofertas.concat());
  }

}
