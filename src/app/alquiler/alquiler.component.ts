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

  huertoImg = "assets/images/huerto3.jpg";
  listaHuertos: Huerto[] = [];


  display = "none";

  huertoEliminar = 0;
  error?: boolean;
  mensaje?:String;

  page:number = 0;
  size:number = 6;
  sort:String = "id,asc";
  success:boolean = false;
  message:String ="";

  orden:boolean = false; //false ascendente, true descendente


  first:boolean = false;
  last:boolean = false;
  totalPaginas:number  = 0;
  totalHuertos:number = 0;

  constructor(protected activatedRoute: ActivatedRoute, protected huertoService: HuertoService) {  }

  // ngOnInit(){
  //   console.log("Cargando huertos");
  //   this.huertoService.obtenerHuertos().subscribe(result=>{
  //     this.listaHuertos=result;
  //   });

  // }

 

  ngOnInit() {
    // this.cargarDatosPaginados(this.page,this.size,this.sort);
    this.cargarDatos();
  }
  alquilarHuerto(id:String, nombre:String, alquilado:boolean){
    let huertoId=+id;
    let huertoName = nombre;
    let huertoAlquilado = alquilado;
    this.huertoService.guardarHuerto(new Huerto(huertoId,huertoName,huertoAlquilado)).subscribe(res=>
      {
        this.cargarDatos();
        this.message = `Has alquilado el huerto ${huertoName} correctamente`;
        this.success = true;

      },e=>{
        this.cargarDatos();
        this.message = `Has alquilado el huerto ${huertoName} correctamente`;
        this.success = true;
      });
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
  

}
