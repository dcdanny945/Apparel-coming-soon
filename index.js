const input = document.querySelector(`#email`);
const form = document.querySelector(`.flex-form`);
const button = document.querySelector(`.btn`);
const errorText = document.querySelector(`.error-text`);
const errorIcon = document.querySelector(`.error-icon`);



form.addEventListener(`submit`, emailSubmitting);



function emailSubmitting(e){
    
    e.preventDefault();
   const submittedEmail = new FormData(e.target).get(`email`);

   const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  if(validateEmail(submittedEmail)){       //bring submittedEmail into function validateEmail to check if it's a valid email.
    console.log(`email valid`);
    errorText.classList.add('none');
    errorIcon.classList.add('none');
    errorText.classList.remove('collapse');
    errorIcon.classList.remove('collapse');
  }else{
    console.log(`email invalid`);

    errorText.classList.remove(`none`);
    errorText.classList.add(`collapse`);
    
    errorIcon.classList.remove(`none`);
    errorIcon.classList.add(`collapse`);

  }

}

