//accessing object method
const person = {
    firstName : "john",
    lastName : "deo",
    agge : 25,
    fullName : function() {
        return this.firstName+ " " +this.lastName;
    }
}
console.log(person.fullName());

//adding method
const person1 = {
    firstName : "john",
    lastName : "deo",
    agge : 25,
};
person1.name = function(){
    return this.firstName + " " + this.lastName
};
console.log("My father is " + person1.name());