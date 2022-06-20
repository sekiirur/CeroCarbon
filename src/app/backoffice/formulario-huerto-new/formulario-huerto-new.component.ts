import { Component, OnInit } from '@angular/core';
import { Huerto } from 'src/app/models/Huerto';
import { HuertoService } from 'src/app/entities/huertos/huerto.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formulario-huerto-new',
  templateUrl: './formulario-huerto-new.component.html',
  styleUrls: ['./formulario-huerto-new.component.css']
})
export class FormularioHuertoNewComponent implements OnInit {

  huerto: Huerto ;
  modoAlta: boolean ;
  huertoID: number ;

  error: boolean = false;
  mensaje: String = "";
  success: Boolean = false;

  modoCreacion: boolean | undefined;

  constructor(
    private huertoService: HuertoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('huertoID')) {
      this.modoAlta = false;
      let id = this.route.snapshot.paramMap.get('huertoID');
      if(id!=null){
        this.huertoID = +id;
      }
      console.log(this.modoAlta);
      //cargar huerto
    } else {
      this.modoAlta = true;
      console.log(this.modoAlta);
      this.huerto = new Huerto();
    }
  }

  guardar(){
    this.error = false;
    this.success = false;
    this.mensaje = "";

    this.huertoService.guardarHuerto(this.huerto);
    this.huertoService.guardarHuerto(this.huerto).subscribe(
      (body: Huerto)=>{
        this.success = true;
        this.mensaje = "se ha guardado la pocion con nombre: "+ body.nombre;
        },(e)=>{
        console.log(e);
        this.error= true;
        this.mensaje = "se produjo un error al guardar la pocion: "+e
      }
    );
  }

}
