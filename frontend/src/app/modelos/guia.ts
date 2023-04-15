export class GuiaModel {


  // _id:req.body._id,
  // id:req.body.id,
  // titulo: req.body.titulo,
  // subtitulo:req.body.subtitulo,
  // provincia:req.body.provincia,
  // pais:req.body.pais,
  // latitud:req.body.latitud,
  // longitud:req.body.longitud,
  // nota:req.body.nota,
  // imagen:req.body.imagen,
  // imagenes:req.body.imagenes,
  // googleMaps:req.body.googleMaps,
  // relacionados:req.body.relacionados,
  // videos:req.body.videos

    constructor(
      _id = "",
      id = "",
      titulo ='',
      subtitulo ='',
      provincia ='',
      altura ='',
      pais = '',
      latitud  = '',
      longitud  = '',
      nota  = '',
      imagen  = '',
      imagenes  = '',
      googleMaps  = '',
      relacionados  = '',
      videos  = '',
      createdAt = '',
      updatedAt = '',
      comentarios = '',
      contadorComentarios = '',
      correos = '',
      vistas = 0



     )     {


      this._id = _id
      this.id = id
      this.titulo = titulo
      this.subtitulo = subtitulo
      this.altura = altura
      this.provincia = provincia
      this.pais = pais
      this.latitud  = latitud
      this.longitud  = longitud
      this.nota  = nota
      this.imagen  = imagen
      this.imagenes  = imagenes
      this.googleMaps  = googleMaps
      this.relacionados  = relacionados
      this.videos  = videos
      this.updatedAt = updatedAt
      this.createdAt = createdAt
      this.comentarios = comentarios
      this.contadorComentarios = contadorComentarios
      this.correos = correos
      this.vistas = vistas

    }

    _id:string
    id:string
    updatedAt:string
    createdAt:string
    titulo:string
    subtitulo:string
    altura:string
    provincia:string
    pais:string
    latitud :string
    longitud :string
    nota  :string
    imagen :string
    imagenes:string
    googleMaps  :string
    relacionados  :string
    videos  :string
    comentarios:string
    contadorComentarios:string
    correos:string
    vistas:number




}



