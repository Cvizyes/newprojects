//here i have already mi profile
// var name ='carlos';
// var lastname ='vizcaino' + " " +  name ;
// console.log(lastname);
// var age = 22;
// console.log(age);
// var years = 22;
// var time = 2017 - years ;
// console.log (time);


//////////////////////
// var name = 'carlos';
// var age = 22;
// var ismarried = 'yes';

// if (ismarried === 'yes'){
// 	console.log(name + ' is ' + " " + 'married');
// } else {
// 	console.log ('will hopefully marry soon :)' );
// }
 
//  ismarried=false;
//  if (ismarried){
//  	console.log('yes')
//  }else {
//   console.log('no')
//  }


 /*var age = 25;
 if (age < 20 ){
 	console.log('gabriel is a teenager');
 } else if(age >= 20 && age < 30){
 	console.log('gabriel is a young man')
 }
  else{
	console.log('gabriel is a man')
 }


var job = 'driver';
job = prompt('what does gabriel do?');
 switch (job) {
 	case 'driver':
 	  console.log('gabriel drives a car');
 	  break;
 	 case 'teacher':
         console.log ('gabriel teaches math');
         break;
         default:
         console.log('something else');
 }
 */
   var heighgabriel=185;
   var heighmarcos=145;
   var heighmartin=180;
   var agegabriel=22;
   var agemarcos=27;
   var agemartin=33;
   var scoregabriel = heighgabriel + 5 * agegabriel;
   var scoremarcos = heighmarcos + 5 * agemarcos;
   var scoremartin= heighmartin+ 5* agemartin;

   if ( scoremarcos > scoregabriel && scoremarcos > scoremartin){
   	console.log('marcos wins the game with' + scoremarcos + 'points');
   } else if ( scoremartin > scoremarcos && scoremartin > scoregabriel){
   	console.log('martin wins the game with'+scoremartin + 'points');
   }else if (scoregabriel  > scoremartin && scoregabriel > scoremarcos)
   console.log('gabriel wins the game with'+scoregabriel+'points')
   else if(scoremarcos === scoregabriel === scoremartin){
   	console.log('draw');
   }

