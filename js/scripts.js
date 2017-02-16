$(document).ready(function(){
  //First assignment. Animal and Cat classes
  var Animal = function() {
  };
  Animal.prototype.walk = function() {
    return "I am walking.";
  };
  Animal.prototype.eat = function() {
    return "I am eating.";
  };

  function Cat(){
  };
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  Cat.prototype.purr = function(){
    return "Purrrrr...";
  };
  Cat.prototype.meow = function(){
    return "Meow meow...";
  };

  var cat1 = new Cat();
  console.log(cat1.walk());
  console.log(cat1.eat());
  console.log(cat1.purr());
  console.log(cat1.meow());

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
