export class Carousel {

  constructor(
    _id="",
    id: 0,
    fecha="",
    titulo="",
    subtitulo="",
    link="",
    image="",
    order="",
    marginLeft=0,



  ){

this._id = _id
this.id = id
this.fecha = fecha
this.titulo =titulo
this.subtitulo =subtitulo
this.link = link
this.image = image
this.order = order
this.marginLeft = marginLeft



  }

    _id: string;
    id: number;
    fecha:string;
    titulo:string;
    subtitulo:string;
    link:string;
    image:string;
    order:string;
    marginLeft?:number;


}



