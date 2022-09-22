import { Injectable, NotFoundException } from '@nestjs/common';
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

  create(createTodoDto: CreateTodoDto) :Todo {
    const todo2 = new Todo();
    //Codigo para crear id automaticamente 1,2,3,4...
    todo2.id=Math.max(...this.todos.map(todo => todo.id),0)+1;
    //console.log(...this.todos.map(todo => todo.id),'...this.todos.map(todo => todo.id)'); //Console Output: 123
    todo2.description=createTodoDto.description;
    this.todos.push(todo2);
    return todo2;
  }

  findAll():Todo[] {
    return this.todos;
  }

  findOne(ident: number) :Todo {
    let seleccion= this.todos.find(el=> el.id===ident);
    if (!seleccion) throw new NotFoundException(`TODO with ${ident} not found`);
    return seleccion;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
