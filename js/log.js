var logInEmail = document.querySelector('#email');
var logInPass = document.querySelector('#pass');
var logInBtn = document.querySelector('#logIn-btn');
var anchor = document.querySelector('#anchor');
// var form = document.querySelector('form');
var logInAlert1 = document.querySelector('#logInAlert1');
var logInAlert2 = document.querySelector('#logInAlert2');
var welcomeMsg = document.querySelector('#welcome')



var userAccounts =JSON.parse(localStorage.getItem('userAccounts'));

console.log(userAccounts);
console.log(userAccounts.length)







// function logIn(){

//     for(var i = 0 ; i<userAccounts.length ; i++ ){

//         if(userAccounts[i].userEmail === logInEmail.value && userAccounts[i].userPass === logInPass.value && logInEmail.value !== "" &&  logInPass.value !== ""){
            
//                 anchor.setAttribute('href','home.html');
//                 logInAlert1.classList.remove('d-none');

//         }else{

//           logInAlert1.classList.add('d-none');
//         };
//     };

    
// };


function logIn(){

    validateLogInInputs();

    if (validateLogInInputs()){

      // anchor.setAttribute('href','home.html');
      window.open('home.html' , '_self');
    }

    // else if(validateLogInInputs() == 'alert1' ){

    //   logInAlert1.classList.remove('d-none')
    //   logInAlert2.classList.add('d-none')

    // }else if (validateLogInInputs() == 'alert2' ){
     
    //   logInAlert2.classList.remove('d-none')
    //   logInAlert1.classList.add('d-none')
    
    // }
    
};


logInBtn.addEventListener('click' , function(e){
  e.preventDefault();
  logIn();

} );

// logInBtn.addEventListener('click' , logIn );



// function validateLogInInputs(){

// for(var i = 0 ; i<userAccounts.length ; i++){

//   if( logInEmail.value === userAccounts[i].userEmail  &&  logInPass.value === userAccounts[i].userPass  ){

//     // anchor.setAttribute('href','home.html');
//     logInAlert1.classList.add('d-none');
//     logInAlert2.classList.add('d-none');

//       return true ;
    
//   }else if (logInEmail.value !==  userAccounts[i].userEmail  && logInPass.value !== userAccounts[i].userPass  ){

//     logInAlert1.classList.remove('d-none')
//     logInAlert2.classList.add('d-none')
    
//     return false ;
//     // return alert1 ;

//   }else if(logInEmail.value == "" &&  logInPass.value == ""){

//     logInAlert2.classList.remove('d-none')
//     logInAlert1.classList.add('d-none')

//     return false ;
//     // return alert2 ;

//   }

// };


// };






function validateLogInInputs(){

for(var i = 0 ; i < userAccounts.length ; i++){

  // if( logInEmail.value == userAccounts[i].userEmail  &&  logInPass.value == userAccounts[i].userPass  ){
  if( userAccounts[i].userEmail ===  logInEmail.value &&   userAccounts[i].userPass === logInPass.value  ){

    // anchor.setAttribute('href','home.html');
      logInAlert1.classList.add('d-none');
      logInAlert2.classList.add('d-none');
      return true ;
    
  }else if (logInEmail.value !==  userAccounts[i].userEmail  && logInPass.value !== userAccounts[i].userPass  ){


        if(logInEmail.value == "" &&  logInPass.value == ""){

            logInAlert2.classList.remove('d-none')
            logInAlert1.classList.add('d-none')

            return false ;

        }else{
            
            logInAlert1.classList.remove('d-none')
            logInAlert2.classList.add('d-none')
            
            return false ;
          
        }

  };

};

}
