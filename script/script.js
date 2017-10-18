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


 var age = 25;
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