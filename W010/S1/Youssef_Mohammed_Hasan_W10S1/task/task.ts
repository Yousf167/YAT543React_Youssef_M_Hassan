// 1
class Circle{
      private radius : number;
      private color: string = "red";

      public constructor(r: number = 1){
            this.radius = r;
      }

      public get Radius() : number{
            return this.radius
      }

      public getArea(){
            return Math.PI * this.radius * this.radius;
      }
}


// 2
class Circle2{
      private _radius : number = 1;
      constructor(r: number){
            this._radius = r;
      }

      get radius() : number{
            return this._radius;
      }
      set radius(r : number){
            this._radius = r;
      }
      getArea(): number{
            return Math.PI * this._radius * this._radius;
      }
      getCircumference(): number{
            return 2 * Math.PI * this._radius;
      }
      toString() : string{
            return `Circle[radius = ${this._radius}]`;
      }
}


// 3
class Rectangle{
      private _l: number;
      private _w: number;
      constructor(l : number = 0, w : number = 0){
            this._l = l;
            this._w = w;
      }
      get length(){
            return this._l;
      }
      set length(length: number){
            this._l = length;
      }
      get width(): number{
            return this._w;
      }
      set width(width: number){
            this._w = width;
      }
      getArea(): number{
            return this._l * this._w;
      }
      getPerimeter(): number{
            return 2 * (this._l + this._w);
      }
      toString(): string{
            return `Rectangle[length = ${this._l}, width = ${this._w}]`
      }
}


// 4
class Employee{
      private _id: number;
      private _firstName: string;
      private _lastName: string;
      private _salary: number;

      constructor(id: number = 1, fn: string = "", ln: string = "", sal: number = 0){
            if(Math.floor(id) != id) throw new Error("ID must be an integer value;");
            this._id = id;
            this._firstName = fn;
            this._lastName = ln;
            this._salary = sal;
      }
      get id(): number{
            return this._id;
      }
      get firstName(): string{
            return this._firstName;
      }
      get lastName(): string {
            return this._lastName;
      }
      getName(): string{
            return this._firstName + " " + this._lastName;
      }
      get salary(){
            return this._salary;
      }
      set salary(salary: number){
            this._salary = salary;
      }
      getAnnualSalary(){
            return this._salary * 12;
      }
      raiseSalary(percent: number): number{
            this._salary += this._salary * (percent / 100);
            return this._salary;
      }
      toString(): string{
            return `Employee[id = ${this._id}, name = ${this.getName}, salary = ${this._salary}]`;
      }
}


//5
class InvoiceItem{
      private _id : string;
      private _desc : string;
      private _qty : number;
      private _unitPrice : number;

      constructor(id = "", desc = "", qty = 0, unitP = 0){
            if(Math.floor(qty) != qty) throw new Error("The quantity must be an integer value");
            
            this._id = id;
            this._desc = desc;
            this._qty = qty;
            this._unitPrice = unitP;
      }

      get id(): string{
            return this._id;
      }
      get desc(){
            return this._desc;
      }
      get qty(){
            return this._qty;
      }
      set qty(newQ : number){
            if(Math.floor(newQ) != newQ) throw new Error("The quantity must be an integer value");
            this._qty = newQ;
      }
      get unitPrice(){
            return this._unitPrice;
      }
      set unitPrice(unitP: number){
            this._unitPrice = unitP;
      }
      getTotal(){
            return this._unitPrice * this._qty;
      }
      toString(){
            return `InvoiceItem[id = ${this._id}, desc = ${this._desc}, qty = ${this._qty}, unitPrice = ${this._unitPrice}]`;
      }
}


// 6
class Account{
      private _id : string;
      private _name : string;
      private _balance : number = 0;

      constructor(id: string, name: string, balance = 0){
            if(Math.floor(balance) != balance) throw new Error("The balance must be an integer value");
            this._id = id;
            this._name = name;
            this._balance = balance;
      }

      get id(){
            return this._id;
      }
      get name(){
            return this._name;
      }
      get balance(){
            return this._balance;
      }
      credit(amount: number): number{
            this._balance += amount;
            return this._balance;
      }
      debit(amount: number){
            if(amount <= this._balance){
                  this._balance -= amount;
            }
            else{
                  console.log("Amount exceeded balance");
            }
            return this._balance
      }
      transferTo(another: Account, amount: number){
            if(amount <= this._balance){
                  another.credit(amount); 
                  this._balance -= amount;
            }
            else{
                  console.log("Amount exceeded balance");
            }
            return this._balance;
      }
      toString(){
            return `Account[id = ${this._id}, name = ${this._name}, balance = ${this._balance}]`;
      }
}

let c = new Circle(10);
console.log(c.Radius);
console.log(c.getArea());

console.log();

let emp: Employee = new Employee(1, "sdfva", "escs", 1_000_000);
console.log(emp.getName());
console.log(emp.getAnnualSalary());
console.log(emp.raiseSalary(20));


console.log();


let acc1 = new Account("1", "acc1", 1000);
let acc2 = new Account("2", "acc2", 2000);

console.log(acc1.transferTo(acc2, 500));
console.log(acc2.balance);
console.log(acc1.credit(500));
console.log(acc2.debit(500));
console.log(acc2.toString());

