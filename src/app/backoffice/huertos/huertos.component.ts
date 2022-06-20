import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HuertoService } from 'src/app/entities/huertos/huerto.service';
import { Huerto } from 'src/app/models/Huerto';
@Component({
  selector: 'app-huertos',
  templateUrl: './huertos.component.html',
  styleUrls: ['./huertos.component.css']
})
export class HuertosComponent implements OnInit {

  listaHuertos: Huerto[] = [];
  
  constructor(protected huertoService: HuertoService) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(){
    console.log("Cargando huertos");
    this.huertoService.obtenerHuertos().subscribe(result=>{
      this.listaHuertos=result;
    });
  }
}

