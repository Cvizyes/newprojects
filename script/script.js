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
 *//////////////////////////////////////////
 
   // var heighgabriel=185;
   // var heighmarcos=145;
   // var heighmartin=180;
   // var agegabriel=22;
   // var agemarcos=27;
   // var agemartin=33;
   // var scoregabriel = heighgabriel + 5 * agegabriel;
   // var scoremarcos = heighmarcos + 5 * agemarcos;
   // var scoremartin= heighmartin+ 5* agemartin;


   // //the comparations/




   // if ( scoremarcos > scoregabriel && scoremarcos > scoremartin){
   // 	console.log('marcos wins the game with' + scoremarcos + 'points');
   // } else if ( scoremartin > scoremarcos && scoremartin > scoregabriel){
   // 	console.log('martin wins the game with'+scoremartin + 'points');
   // }else if (scoregabriel  > scoremartin && scoregabriel > scoremarcos)
   // console.log('gabriel wins the game with'+scoregabriel+'points')
   // else if(scoremarcos === scoregabriel === scoremartin){
   // 	console.log('draw');
   // }

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


// function somefun(par){
// 	//code
// }

// var somefun = function(par){
// 	//code
// }
// //expressions
// 3+4;
// var x =3;
// //statements
// if (x === 5){

// }

// å

///////////////////////////////////


// var carlos = {
// 	name:'carlos',
// 	lastname: 'reyes',
// 	yearofbirth:1995,
// 	job:'teacher',
// 	ismarried:false
// };

// console.log(carlos.lastname);
// console.log(carlos['lastname']);

// var xyz = 'job';
// console.log(carlos[xyz]);

// carlos.lastname='vizcaino';
// carlos['job']= 'programmer';

// console.log(carlos)

// var jane = new object();
// jane.name='jane';
// jane.lastname='smith';
// jane['yearofbirth']=1969;
// jane ['job']='retired';
// jane['ismarried']=true;
// console.log(jane);


///////////////////////////////
//VERCION 1
// var carlos = {
// 	name:'carlos',
// 	lastname: 'reyes',
// 	yearofbirth:1995,
// 	job:'teacher',
// 	ismarried:false,
// 	family:['juan','joan'],
// 	calculateage:function(yearofbirth){
// 		//we can use 'this' to refer to the var
// 		return 2016 - this.yearofbirth;
// 	}
// };

// console.log(carlos.calculateage(1990));
// console.log(carlos.calculateage());
// var age = carlos.calculateage();
// carlos.age = age;
// console.log(carlos);
/////////////////////

//VERSION 2

// var carlos = {
// 	name:'carlos',
// 	lastname: 'reyes',
// 	yearofbirth:1995,
// 	job:'teacher',
// 	ismarried:false,
// 	family:['juan','joan'],
// 	calculateage:function(){
// 		this.age = 2016 - this.yearofbirth;
// 	}
// };
// carlos.calculateage();
// console.log(carlos);


//////////////////////////
      // loops is going to be working until that i stop it//

  for ( var i = 0; i <10; i++){
  	console.log(i);

  }
// 0, true, print 0, update i to 10
// 1, true, print 1, update i to 10
// 2, true, print 2, update i to 10
// 3, true, print 3, update i to 10
// .
// .
// 9, true, print 9, update i to 10
// 10, false, end loop
var names = ['juan' , 'pedro' , 'manuel' , 'julio' , 'cesar'];
// for (var i = 0; i < names.length ; i++){
// 	console.log(names [i]);
// }

// for (var i = names.length -1; i >= 0; i--){
// 	console.log(names[i]);
// }

var i = 0;
while(i < names.length){
	console.log(names[i]);
	i++;
}


for (var i = 0; i <= 5; i++) {
	console.log(i);

	if (i=== 3){
		break;
	}
}


for (var i = 0; i <= 5; i++) {
	console.log(i);
	
	if (i=== 3){
		continue;
	}
	console.log(i);
}