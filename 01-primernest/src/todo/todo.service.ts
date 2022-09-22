import { Injectable } from '@nestjs/common';
import { throws } from 'assert';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  private todos:Todo[]=[
    {id:1, description:'Piedra del Alma', done:false},
    {id:2, description:'Piedra del Tiempo', done:false},
    {id:3, description:'Piedra del Espacio', done:false},
  ];

  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll():Todo[] {
    return this.todos;
  }

  findOne(ident: number) :Todo {
    let seleccion= this.todos.find(el=> el.id=ident);
    return seleccion;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
