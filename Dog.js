var chalk = require("chalk");

function Dog(name)
{
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat = function(Cat) 
{
	this.stomach.push(Cat);
};

Dog.prototype.say = function() 
{
	console.log("Hi! I am " + chalk.blue(this.name));
};