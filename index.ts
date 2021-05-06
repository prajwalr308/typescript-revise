//intersection and union

export interface email{
    name:String,
    email:String
}
export interface phno{
    name:String,
    phno:Number
}

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

