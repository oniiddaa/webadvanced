function showMessage(){
    alert("this is a message");
}

showMessage();

function sum(number1,number2){
    return number1+number2;
}

console.log(sum(25,4));

var arrowFunction = () => alert("hello");

arrowFunction();

var arrowFunction = name => alert('hello ${name}');

arrowFunction("enes");

function dsFunction(){
    var localVar = "Digital School";

    alert(localVar);
}

dsFunction();


var car={
    name:"Mercedes",
    color:"black",
    year:2026,
    kilometers:20,

    startEngine : function(){
        alert("vroom")
    }
}

car.startEngine();


car computer= new Object();

computer.name="Lenovo";
computer.CPU= "intel core i7";
computer.RAM= "16gb";
computer.GPU= "geforce";
computer.type= function(){
    return this.name+' , '+this.CPU+','+this.RAM+","+this.GPU;
};

alert(computer.GPU);
console.log(computer.type());

delete computer.GPU;

function Computer(name,CPU,RAM,GPU){
    this.name =name;
    this.CPU=CPU;
    this.RAM=RAM;
    this.GPU=GPU;
}

var computer1=new Computer("macbook","m1","8gb","5600");
var computer2=new Computer("acer","intel","4gv","integrated"); 



