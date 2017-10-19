// //here i have already mi profile
// // var name ='carlos';
// // var lastname ='vizcaino' + " " +  name ;
// // console.log(lastname);
// // var age = 22;
// // console.log(age);
// // var years = 22;
// // var time = 2017 - years ;
// // console.log (time);


// //////////////////////
// // var name = 'carlos';
// // var age = 22;
// // var ismarried = 'yes';

// // if (ismarried === 'yes'){
// // 	console.log(name + ' is ' + " " + 'married');
// // } else {
// // 	console.log ('will hopefully marry soon :)' );
// // }
 
// //  ismarried=false;
// //  if (ismarried){
// //  	console.log('yes')
// //  }else {
// //   console.log('no')
// //  }


//  /*var age = 25;
//  if (age < 20 ){
//  	console.log('gabriel is a teenager');
//  } else if(age >= 20 && age < 30){
//  	console.log('gabriel is a young man')
//  }
//   else{
// 	console.log('gabriel is a man')
//  }


// var job = 'driver';
// job = prompt('what does gabriel do?');
//  switch (job) {
//  	case 'driver':
//  	  console.log('gabriel drives a car');
//  	  break;
//  	 case 'teacher':
//          console.log ('gabriel teaches math');
//          break;
//          default:
//          console.log('something else');
//  }
//  */
 
//    var heighgabriel=185;
//    var heighmarcos=145;
//    var heighmartin=180;
//    var agegabriel=22;
//    var agemarcos=27;
//    var agemartin=33;
//    var scoregabriel = heighgabriel + 5 * agegabriel;
//    var scoremarcos = heighmarcos + 5 * agemarcos;
//    var scoremartin= heighmartin+ 5* agemartin;


//    //the comparations//


//    if ( scoremarcos > scoregabriel && scoremarcos > scoremartin){
//    	console.log('marcos wins the game with' + scoremarcos + 'points');
//    } else if ( scoremartin > scoremarcos && scoremartin > scoregabriel){
//    	console.log('martin wins the game with'+scoremartin + 'points');
//    }else if (scoregabriel  > scoremartin && scoregabriel > scoremarcos)
//    console.log('gabriel wins the game with'+scoregabriel+'points')
//    else if(scoremarcos === scoregabriel === scoremartin){
//    	console.log('draw');
//    }

//    function calculateage(yearofbirth){
//    	var age = 2016 - yearofbirth;
//    	return age;
//    }

//     var agegabriel = calculateage(1995);
//     var agemartin = calculateage(1987);
//     var agemarcos = calculateage(1990);
   

// function yearsuntil(name,year) {
// var age = calculateage(year);
// var retirement = 45-age;
// console.log( name + " " + 'played in '+ retirement + 'years');
// }
// yearsuntil('gabriel',1995);








/////////////////
 
 // var years = [2001,1990,2008,1987,1975];
 // var ages = [];

 // for (var i = 0; i < years.length; i++){
 // 	ages[i]= 2017 - years[i];
 // }  

 // for ( i = 0; i < years.length; i++){
 // 	if (ages [i] >= 18 ){
 // 		console.log('person is'  + ages[i] + 'years old, and is full age.');
 // 	} else {
 // 		console.log('person is ' + ages[i] + ' years old, and is not  full age.');
 // 	}
 // }


 var years = [2001,1990,2008,1987,1975];


function printfull(years){
	 var ages = [];
     var fullages = [];
 for (var i = 0; i < years.length; i++){
 	ages[i]= 2017 - years[i];

} 

 for ( i = 0; i < years.length; i++){
 	if (ages [i] >= 18 ){
 		console.log('person is'  + ages[i] + 'years old, and is full age.');
 	 fullages.push(true)
 	} else {
 		console.log('person is ' + ages[i] + ' years old, and is not  full age.');
 	   fullages.push(false)
 	}
 
 }
        return fullages;
  }  
var years = [1994,1990,2009,1980,1970];
var full_1 = printfull(years);
var full_2 = printfull([2013,2000,1990,1989]);



