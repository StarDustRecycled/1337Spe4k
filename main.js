
// init. important variables

let inputTextBox= document.querySelector("#txt-input");
let outputTextBox= document.querySelector("#txt-output");
let translateBtn= document.querySelector("#translate-btn");
const url="https://api.funtranslations.com/translate/leetspeak.json"

// event handling

translateBtn.addEventListener("click",()=>{
let txtValueToBeTranslated = inputTextBox.value;
let encodedURL = `${url}?text=${txtValueToBeTranslated}`;
fetch(encodedURL)
    .then(response=>response.json())
    .then(json=>outputTextBox.value=json.contents.translated)
    // .catch(()=>alert("WHOOPSY DAISY! ERROR OCCURED"));
});

