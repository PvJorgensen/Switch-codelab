let myAnsverInput = document.getElementById('answerOne');
let myAnsverButton = document.getElementById('answerButtonOne');

let myAnsverFeedbackElement = document.getElementById('answerFeedback');




// opgave 1 og 2
const inputElementOne = document.getElementById("inputOne");
const answerButtonOne = document.getElementById("answerButtonOne");
const answerFeedbackElementOne = document.getElementById("answerFeedbackOne");

answerButtonOne.addEventListener("click", function(e) {
    e.preventDefault();
    const userInput = parseInt(inputElementOne.value);

    switch (userInput) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            answerFeedbackElementOne.textContent = Du har valgt: ${userInput};
            break;
        default:
            answerFeedbackElementOne.textContent = "Ugyldigt valg. Skriv et tal mellem 1 og 5.";
            break;
    }
});

/* skriv evt en view funktion der viser om svaret er korrekt i myAnsverFeedbackElement, brug evt. innerHTML*/



// opgave 3 og 4
 myAnsverInput = document.getElementById('answerTwo');
 myAnsverButton = document.getElementById('answerButtonTwo');

 myAnsverFeedbackElement = document.getElementById('answerFeedbackTwo');

 myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 3 og 4');
    /* din kode her.*/
});

/* din view function her */


// opgave 5
myAnsverInput = document.getElementById('InputFive');
myAnsverButton = document.getElementById('answerButtonFive');

myAnsverFeedbackElement = document.getElementById('answerFeedbackFive');

myAnsverButton.addEventListener('click', (event) => {
   event.preventDefault();

   console.warn('opgave 5');

   workDays(myAnsverInput.value)
  
});


 /* din kode her.*/



/* din view function her */


