class Author
{
    constructor(name,email,gender)
    {
        this.name=name;
        this.email=email;
        this.gender=gender;
    }
   get name()
   {
    return this._name;
   }
    set name(value) {
       
        this._name = value;
         }
         get email()
         {
          return this._name;
         }
          set email(value) {
             
              this._email = value;
               }
               get gender()
               {
                return this._name;
               }
                set gender(value) {
                   
                    this._gender = value;
                     }
}
class Book
{
constructor(title,Author,price,quantity)
{
    this.title=title;
    this.Author=Author;
    this.price=price;
    this.quantity=quantity;
}

get title(){return this._title;}
set title(value){this._title=value;}
get Author(){return this._Author;}
set Author(value){this._Author=value;}
get price(){return this._price;}
set price(value){this._price=value;}
get quantity(){return this._quantity;}
set quantity(value){this._quantity=value;}

getProfit()  {   return this._price*this._quantity; }
toString(){}

}
class Account{
    constructor(id,name,balance)
    {
        this.id=id;
        this.name=name;
        this.balance=balance;
    }
    get id()
    {
        return this._id;
    }
    set id(value)
    {
        this._id=value;
    }
    get name()
    {
        return this._name;
    }
    set name(value)
    {
        this._name=value;
    }
    get balance()
    {
        return this._balance;
    }
    set balance(value)
    {
        this._balance=value;
    }
    credit(amount)
    {
        this._balance+=amount;
        return this._balance;
    }
    debit(amount)
    {    if(amount<=this._balance)
        this._balance-=amount;
        else
        console.log("Amount exceeded balance")

    }
    transferTo(anotherAccount,amount)
    {
        if(amount<=this._balance)
        {
            this._balance-=amount;
            anotherAccount.balance+=amount;
        }
        else console.log("Amount exceeded balance")
    }
    static identifyAccounts(accountFirst,accountSecond)
    {
        if(accountFirst.id==accountSecond.id && accountFirst.name==accountSecond.name && accountFirst.balance==accountSecond.balance)
        return true
        else return false;

    }
    toString(){
        return "";
    }
}

class Person
{
    constructor(firstName,lastName,gender,age)
    {
      this.firstName=firstName;
      this.lastName=lastName;
      this.gender=gender;
      this.age=age;

    }
    get firstName()
    {
        return this._firstName;
    }
    set firstName(value)
    {
        this._firstName=value;
    }
    get lastName()
    {
        return this._lastName;
    }
    set lastName(value)
    {
        this._lastName=value;
    }
    get gender()
    {
        return this._gender;
    }
    set gender(value)
    {
        this._gender=value;
    }
    get age()
    {
        return this._age;
    }
    set age(value)
    {
        this._age=value;
    }
    toString()
    {
        return "";

    }

}
class Student extends Person{
    constructor(firstName,lastName,gender,age,program,year,fee)
    {  super(firstName,lastName,gender,age);
        this.program=program;
        this.year=year;
        this.fee=fee;
    }
    get program()
    {
        return this._program;
    }
    set program(value)
    {
        this._program=value;
    }
    get year()
    {
        return this._year;
    }
    set year(value)
    {
        this._year=value;
    }
    get fee()
    {
        return this._fee;
    }
    set fee(value)
    {
        this._fee=value;
    }
    passExam(program,grade)
    {
      if(this.program.includes(program))
      this._grade+=grade;
      if(this._grade>=50)
      this._year++;
    }
    toString()
    {
        return "";
    }
}
class Teacher extends Person
{
    constructor(firstName,lastName,gender,age,Program,pay)
    {   super(firstName,lastName,gender,age);
        this.Program=Program;
        this.pay=pay;
    }
    get Program(){ return this._Program}
    set Program(value){
     this._Program=value;
    }
    get pay(){return this._pay}
    set pay(value){this._pay=value}
    toString(){return "";}
}   
