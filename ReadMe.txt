Inicio aplicación Nest.js

DOCU
https://docs.nestjs.com/controllers

CURSO/VIDEO TUTORIALES
https://www.youtube.com/watch?v=9I-U8IdxQu8&list=PLCKuOXG0bPi2DJQIRNwOIUJ_vO3l5s1b-&index=3

$nest new nombreproyecto

Abrimos postman para probar el restfullapi

Swagger Editor, es para documentar end points de nuestra aplicacion es parecido a postman.
Actuan como nuestros FRONTENDS
https://editor.swagger.io/

CRUD
$nest g res todo --no-spec
Seleccionamos: 
RESTAPI
Yes

Crea un par de dto, un controlador,servicio.
DTO significa data transfer object, apariencia de como queremos que aparezca la informacion.

Preparamos como queremos que sea la informacion que queremos almacenar, nos situamos en ENTITY
todo.entity.ts, representacion de como esta la informacion en la BD, como queremos que sea nuestro
registro en la BD.

Ahora nos vamos al servicio, tendriamos que tener una conexion a la BD para practicar dentro del servicio
todo.service.ts añadimos:

private todos:Todo[]=[];
Creamos un array de objetos, esta informacion vendria de la BD
En el metodo del servicio lo arreglamos para que nos devuelva la lista de objetos findAll():Todo[]{},
en el controlador tambien es recomendable poner lo que nos devuelve el metodo.

Funciones del servicio en las que hemos trabajado

findAll():Todo[] {
    return this.todos;
}

findOne(ident: number) :Todo {
    let seleccion= this.todos.find(el=> el.id=ident);
    return seleccion;
}

En el controlador tenemos esta funcion:
*Recibimos el parametro id como string y lo convertimos a number porque en el servicio lo tenemos como number
controlador.ts
@Get(':id')
  findOne(@Param('id') id: string):Todo {
                                    //----- al hacer +id convertimos de string a number
    return this.todoService.findOne(+id);
}

servicio.ts

  findOne(ident: number) :Todo {
    let seleccion= this.todos.find(el=> el.id===ident);
    if (!seleccion) throw new NotFoundException(`TODO with ${ident} not found`); //importamos NotFoundException desde from '@nestjs/common';
    return seleccion;
  }


DEFINICION DE PIPES

controlador.ts
//Vamos a pasar el id por un pipe que importamos
 @Get(':id')
  findOne(@Param('id') id: string):Todo {
    return this.todoService.findOne(+id);
    }

@Get(':id')
                      //---hemos añadido ParseIntPipe, si lo añadimos nos aseguramos que nos devuelve un num y no hace falta poner +id
  findOne(@Param('id',ParseIntPipe) id: string):Todo {
                                    //--- podemos quitar +id y poner unicamente id
    return this.todoService.findOne(+id);
  }
