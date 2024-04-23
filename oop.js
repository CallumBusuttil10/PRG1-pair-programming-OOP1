class Person {

    _name;
    _dateOfBirth;
    _placeOfBirth;
  
    constructor(name, dateOfBirth, placeOfBirth){
      this._name = name;
      this._dateOfBirth = dateOfBirth;
      this._placeOfBirth = placeOfBirth;
      
    }
  
    get name(){
      return this._name;
    }
    
    set name(name){
      this._name = name;
    }
  
    get dateOfBirth(){
      return this._dateOfBirth;
    }
  
    talk(){
      return `Hi my name is ${this._name} and I was born in ${this._placeOfBirth}.`;
    }
    
  }
  
  
  class AdaStaff extends Person {
  
    _role;
    _base;
  
    constructor(name, dateOfBirth, placeOfBirth, role, base){
  
      super(name, dateOfBirth, placeOfBirth);
      this._role = role;
      this._base = base;
    }
  
    get base(){
      return this._base;
    }
    
    set base(base){
      this._base = base;
    }
  
    get role(){
      return this._role;
    }
    
    set role(role){
      this._role = role;
    }
  
    talk(){
      return `Hi my name is ${this._name}. I work in ${this._base} and my role is ${this._role}.`;
    }
    
  }
  
  class AdaStudent extends Person {

    _company;
    _pathway;
    _yearStarted;

      constructor(name, dateOfBirth, placeOfBirth, company, pathway, yearStarted){
        super(name,dateOfBirth,placeOfBirth);
        this._company = company;
        this._pathway = pathway;
        this._yearStarted = yearStarted;
      }
    
    get company(){
      return this._company;
    }
    
    set company(company){
      this._company = company;
    }

    get pathway(){
      return this._pathway;
    }

    set pathway(pathway){
      this._pathway = pathway;
    }

    talk(){
      return `Hello, my name is ${this._name}, I work at ${this._company} and I am on the ${this._pathway} pathway. I started studying in ${this._yearStarted}`;
    }

  }


  const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
  const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
  
  const callum = new AdaStudent("Callum Busuttil", "27/08/1997", "Manchester", "Booking.com", "Software Development", 2024);
  const nathan = new Person("Nathan Williams", "07/05/1995", "Tameside");

  const lilly = new AdaStaff("Lilly Padenga", "12/10/1990", "Liverpool", "Lecturer", "London");
  const april = new AdaStaff("April Shipley", "09/02/1998", "Wythenshawe", "Administrator", "Manchester");
  
  
  //console.log(steve);
  console.log(callum.talk());
  //console.log(nathan.talk());
  //console.log(aqil);
  //console.log(steve.talk());
  //console.log(aqil.talk());
  //console.log(steve.name);
  //console.log(april);
  //console.log(lilly.talk());