import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HuertoService } from '../entities/huertos/huerto.service';
import { Huerto } from '../models/Huerto';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {

  // id?: number;
  huertoImg = "assets/images/huerto2.jpg";
  listaHuertos: Huerto[] = [];

  constructor(protected activatedRoute: ActivatedRoute, protected huertoService: HuertoService) {  }

  ngOnInit(){
    console.log("Cargando huertos");
    this.huertoService.obtenerHuertos().subscribe(result=>{
      this.listaHuertos=result;
    });

  }

}
