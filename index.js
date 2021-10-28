//create a function called printHello to print `Hello, ${name}`
//start you code below



printHello("Andre")//Hello, Andre
//=================================================================================//
//create a function called add and substract to add and substract 2 numbers



console.log(add(5,10))//15
console.log(substract(10,5))//5
//=================================================================================//
/**create a function called calculator where it can add or substract based on a string parameter
 (use the functions you have created earlier). If neither add or substract, you can print 
 "Operation not supported" instead. example: calculator("add", 5, 10) will result 15 
 OR calculator("substract", 5, 10) will result -5
**/



console.log(calculator("add", 5, 10))//15
console.log(calculator("substract", 5, 10))//-5
console.log(calculator("multiply", 5, 10))//Operation not supported
//=================================================================================//
//Write a function named printActivities that will loop through 'days' that will return an array of string 
//with value 'work' if its monday to friday and 'holiday' if its saturday or sunday
let days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];



console.log(printActivities(days));//['work','work','work','work','work','holiday','holiday']
//=================================================================================//
//Create a function named sort that will sort array of numbers



console.log(sort([10,9,8,7,6,5,4,3,2,1]))//[1,2,3,4,5,6,7,8,9,10]
console.log(sort([100,99,20,200,3]))//[3,20,99,100,200]

