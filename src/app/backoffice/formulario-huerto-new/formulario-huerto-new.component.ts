import { Component, OnInit } from '@angular/core';
import { Huerto } from 'src/app/models/Huerto';
import { HuertoService } from 'src/app/entities/huertos/huerto.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-formulario-huerto-new',
  templateUrl: './formulario-huerto-new.component.html',
  styleUrls: ['./formulario-huerto-new.component.css']
})
export class FormularioHuertoNewComponent implements OnInit {

  huerto: Huerto = new Huerto();
  modoAlta?: boolean;
  huertoID?: number;

  error: boolean = false;
  mensaje: String = "";
  success: Boolean = false;



  constructor(
    private huertoService: HuertoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('huertoID')) {
      this.modoAlta = false;
      let id = this.route.snapshot.paramMap.get('huertoID');
      if (id != null) {
        this.huertoID = +id;
        //Cargar huerto
        this.huertoService.obtenerHuertoPorId(this.huertoID).subscribe(
          (data: Huerto) => {
            this.huerto = data;
          }, (err) => {
            this.error = true;
            this.mensaje = "No se ha podido recuperar la poción o esta poción no existe";
          }
        );
      }

    } else {
      this.modoAlta = true;
      console.log(this.modoAlta);
      this.huerto = new Huerto();
    }
  }

  guardar() {
    this.error = false;
    this.success = false;
    this.mensaje = "";

    // if (this.modoAlta) {
      if (this.huerto) {
        this.huertoService.guardarHuerto(this.huerto).subscribe(
          (body: Huerto) => {
            this.success = true;
            this.mensaje = "se ha guardado el huerto con ID: " + body.id;
            this.huerto = new Huerto();
          }, (e) => {
            this.error = true;
            this.mensaje = "se produjo un error al guardar el huerto: " + e.message;
            this.huerto = new Huerto();
            ;
          }
        );
      }
      //No funciona el modificar Huerto de esta forma, revisar por qué
    // } else {
      // if (this.huerto) {
      //   if(this.huertoID != null){
      //     this.huertoService.editarHuerto(this.huertoID).subscribe(
      //       (data: Huerto) => {
      //         this.router.navigate(['/gestionHuertos']);
      //       }, (err) => {
      //         this.error = true;
      //         this.mensaje = "Se ha producido un error al editar el huerto";
      //       }
      //     );
      //   }
        
      // }
    // }
  }

}
