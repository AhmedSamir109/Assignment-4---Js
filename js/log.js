var logInEmail = document.querySelector('#email');
var logInPass = document.querySelector('#pass');
var logInBtn = document.querySelector('#logIn-btn');
var anchor = document.querySelector('#anchor');
var logInAlert1 = document.querySelector('#logInAlert1');
var logInAlert2 = document.querySelector('#logInAlert2');
var welcomeMsg = document.querySelector('#welcome')



var userAccounts =JSON.parse(localStorage.getItem('userAccounts'));


console.log(userAccounts);
console.log(userAccounts.length)





function logIn(){

    // validateLogInInputs();

    if (validateLogInInputs()){

      // anchor.setAttribute('href','home.html');
      window.open('home.html' , '_self');
    }
    
};


logInBtn.addEventListener('click' , function(e){
  e.preventDefault();
  logIn();

} );







function validateLogInInputs(){

for(var i = 0 ; i < userAccounts.length ; i++){

   if( logInEmail.value == userAccounts[i].userEmail  &&  logInPass.value == userAccounts[i].userPass ){

    // anchor.setAttribute('href','home.html');
      logInAlert1.classList.add('d-none');
      logInAlert2.classList.add('d-none');
      return true ;
    
  }else if(logInEmail.value !==  userAccounts[i].userEmail  && logInPass.value !== userAccounts[i].userPass  ){


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
