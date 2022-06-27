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

  display = "none";

  huertoEliminar = 0;
  error?: boolean;
  mensaje?:String;

  page:number = 0;
  size:number = 5;
  sort:String = "id,asc";

  orden:boolean = false; //false ascendente, true descendente


  first:boolean = false;
  last:boolean = false;
  totalPaginas:number  = 0;
  totalHuertos:number = 0;

  
  constructor(protected huertoService: HuertoService) { }

  ngOnInit() {
    this.cargarDatosPaginados(this.page,this.size,this.sort);
  }

  cargarDatos(){
    console.log("Cargando huertos");
    this.huertoService.obtenerHuertos().subscribe(result=>{
      this.listaHuertos=result;
    });
  }

  cambiarOrden(cadena:String){
    console.log(this.orden);
    this.orden = !this.orden;
    this.sort = `${cadena},${this.orden ? 'asc' : 'desc'}`
    this.cargarDatosPaginados(this.page, this.size, this.sort);

  }

  cargarDatosPaginados(page:number, size:number, sort:String){
    this.huertoService.obtenerHuertos().subscribe(result=>{
      this.listaHuertos=result;
    });
    this.huertoService.obtenerHuertosPaginados(page,size,sort).subscribe(res=>{
      this.listaHuertos = res.content;
      this.first = res.first;
      this.last = res.last;
      this.totalPaginas = res.totalPages;
      this.totalHuertos = res.totalElements; 
    });
  }

  navegarNext(){
    this.page+=1;
    this.cargarDatosPaginados(this.page, this.size, this.sort);
  }

  navegarPrev(){
    this.page-=1;
    this.cargarDatosPaginados(this.page, this.size, this.sort);
  }

  abrirPopUpEliminar(id:number){
    this.display = 'block'; 
    this.huertoEliminar = id;
  }

  confirmarEliminar(huerto: number){
    this.huertoService.eliminarHuerto(huerto).subscribe(
      res => {
      this.huertoService.obtenerHuertos().subscribe(
        resp =>{
          this.listaHuertos = resp;
        }
      );
      
      this.error = false;
      this.mensaje = '';
      this.cerrarModalEliminar();
      }, err=>{
        this.cerrarModalEliminar();
        this.error = true;
        this.mensaje= 'Se ha producido un error al borrar el huerto '+ err.error;
      }
    );
    this.cerrarModalEliminar();
  }

  cerrarModalEliminar(){
    this.display = 'none';
  }
}

