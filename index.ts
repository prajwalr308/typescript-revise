//intersection and union

export interface email{
    name:String,
    email:String
}
export interface phno{
    name:String,
    phno:Number
}
let name:String=""
let intersection:email|phno=
Math.random()>0.5
?{
    name:"mikey",
    phno:323131

}:{
    name:"joe",
    email:"dfasjikra"
}
console.log(intersection.name);// you can access only name because name is common in both( imagine the values in venn diagram)


let union:email & phno={
    name:"mike",
    phno:2312,
    email:"dada" //if one is comment out it gives an error 
}
console.log(union.name)//you can access all due to and property
console.log(union.email)
console.log(union.phno)



//functions                   

             //input type  returntype  
function validate(input:email):email{
    return input
}
validate({name:"mike",email:"dsadsa"});

//function overloading

//type signature

function typeSignatures(method:"email"|"phone",...people:(email|phno)[]):void{
    if(method=="email"){
        console.log("send email")
    }else{
        console.log("send text")
    }
}
typeSignatures("email",{name:"mike",email:"dsadsa"});
typeSignatures("phone",{name:"mike",email:"dsadsa"}); //shouldnt work


//fix

//overload signature
function typeSignaturesFix(method:"email",...people:(email)[]):void;
function typeSignaturesFix(method:"phone",...people:(phno)[]):void;


function typeSignaturesFix(method:"email"|"phone",...people:(email|phno)[]):void{
    if(method=="email"){
        console.log("send email")
    }else{
        console.log("send text")
    }
}
typeSignaturesFix("email",{name:"mike",email:"dsadsa"});
//typeSignaturesFix("phone",{name:"mike",email:"dsadsa"}); //uncomment and check it doesnt work [fixed]




//type alias

type Magic=string|number;
type HasName={name:string}

//self refrencing types dont work ?
const x=[1,2,[1,2,3]]
type NumVal=1|2|NumArr;
type NumArr=NumVal[];


//call signatures 

//with interface
interface contact{
    (contact:email|phno,method:string):void

}

//with type
type Contact2=(contact:email|phno,method:string)=>void;

//no adddition type info while defining function

//hover over parameters to check
const emailer:contact=(_contact,_message)=>{
//interface
}
const emailey:Contact2=(_contact,_message)=>{
//type
}

//dynamic objects
//dictionary objects

interface num{
    [name:string]:undefined|{
        a:number,
        b:number
    }
}
const d:num={}

d.abc={a:1,b:2}
console.log("dynamic",d);


//class
class Contacts implements HasName{
    
    constructor( public name:string, protected age:number){
       this.age=35
    }

}
const y=new Contacts("mike",3);
y.name;//age cant be accessed because it protected

