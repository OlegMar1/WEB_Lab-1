'use strict'

class Customer {

  constructor(name, surname, id) {
    this.name = name;
    this.surname=surname;
    this.id = id;
  }

  editName(name){
    this.name=name;
  }

  editSurname(surname){
    this.surname=surname
  }

  editID(id){
    this.id=id
  }
}

class Project{
  constructor(name,customerID, performerID){
    this.name=name;
    this.customerID=customerID;
    this.performerID=performerID;
  }
  editName(name){
    this.name=name;
  }

  editCustomerID(x){
    this.customerID=x;
  }

  editPerformerID(id){
    this.performerID=id
  }
}

class Performer{
  constructor(name,surname,id){
    this.name=name;
    this.surname=surname;
    this.id=id;
  }
  editName(name){
    this.name=name;
  }

  editSurname(surname){
    this.surname=surname
  }

  editID(id){
    this.id=id
  }
}

function deleteByName(array,str){
  for (let i = 0; i < array.length; i++) {
    if(array[i].name===str){
      let removedItem = array.splice(i,1);
    }
  }
  return array;
}

function getProjectByPerformerID(array, id) {

  for (let i = 0; i < array.length; i++) {
    if(array[i].performerID===id)
    console.log(array[i])
  }
}

function getProjectByCustomerID(array, id) {

  for (let i = 0; i < array.length; i++) {
    if(array[i].customerID===id)
    console.log(array[i])
  }
}

function searchById(array,id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id===id) {
      console.log(array[i])
    }
  }
}


let arrayCustomer = [];
let arrayPerformer = [];
let arrayProject = [];

arrayCustomer.push(new Customer('Петро','Петренко',1));

arrayPerformer.push(new Performer('Іван','Іваненко',1));

arrayProject.push(new Project('Проект1',1,1));

arrayCustomer.push(new Customer('Степан','Степаненко',2));

arrayPerformer.push(new Performer('Андрій','Андрієнко',2));

arrayProject.push(new Project('Проект2',2,1));

arrayProject.push(new Project('Проект3',2,2));

console.log(arrayCustomer);
arrayCustomer[0].editName('Максим');
console.log(arrayCustomer);


deleteByName(arrayCustomer,'Максим');
console.log('\n\ndeleteByName');
console.log(arrayCustomer);

console.log('\n\nsearchById');
searchById(arrayCustomer,2);

console.log('\n\ngetProjectByPerformerID');
getProjectByPerformerID(arrayProject, 2);

console.log('\n\ngetProjectByCustomerID');
getProjectByCustomerID(arrayProject, 2);

console.log('\n\n123');
console.log(arrayPerformer);
