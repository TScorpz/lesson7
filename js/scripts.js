$(document).ready(function(){
  //First assignment. Animal and Cat classes
  var Animal = function() {
  };
  Animal.prototype.walk = function() {
    console.log("I am walking.");
  };
  Animal.prototype.eat = function() {
    console.log("I am eating.");
  };

  function Cat(){
  };
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  Cat.prototype.purr = function(){
    console.log("Purrrrr...");
  };
  Cat.prototype.meow = function(){
    console.log("Meow meow...");
  };

  var cat1 = new Cat();
  cat1.walk();
  cat1.eat();
  cat1.purr();
  cat1.meow();

  //Second assignment. SalaryCalculator module
  var SalaryCalculator = (function() {
    var baseSalary = 800;
    var taxPercent = 30;
    var mechanicBonus = 198;
    var professorBonus = 245;
    var developerBonus = 567;
    var doctorBonus = 418;
    return {
      calculateSalary: function(profession){
        switch(profession){
        case "mechanic":
          return ((baseSalary + mechanicBonus) / 100 * (100 - taxPercent)).toFixed(2);
        case "professor":
          return ((baseSalary + professorBonus) / 100 * (100 - taxPercent)).toFixed(2);
        case "developer":
          return ((baseSalary + developerBonus) / 100 * (100 - taxPercent)).toFixed(2);
        case "doctor":
          return ((baseSalary + doctorBonus) / 100 * (100 - taxPercent)).toFixed(2);
        default:
          return 0;
        }
      }
    }
  }());

  var mySalary = SalaryCalculator.calculateSalary("developer");
  console.log("My salary is " + mySalary + "€ taxes excluded.");
});
