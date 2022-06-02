let trim = function(){
    let a="                                             functionup"


    console.log('The result after trimming the string is :' + a.trim() + '.')
   }
   
   let changetoLowerCase = function() {
       console.log('The result after using toLowerCase function is :', 'SAbIHa'.toLowerCase())
   }
   
   let changeToUpperCase = function() {
       console.log('The result after using toUpperCase function is ', 'radon'.toUpperCase())    
   }
   
   module.exports.trimString = trim
   module.exports.changeCaseToLower = changetoLowerCase
   module.exports.changeCaseToUpper = changeToUpperCase