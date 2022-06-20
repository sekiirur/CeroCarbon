export class Huerto{
    id?:number;
    nombre:String;
    alquilado:Boolean;

    constructor(id?:number, nombre?: String, alquilado?: Boolean){
        this.id = id;
        this.nombre = nombre || "";
        this.alquilado = alquilado|| false;
    }
}