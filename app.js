const celciusInput = document.getElementById(`celcius`);
const kelvinInput = document.getElementById(`kelvin`);
const farenheitInput = document.getElementById(`fahrenheit`);


// inputs.forEach((input) => {
//     if (input = ``) {
//         celciusInput = ``;
//         kelvinInput = ``;
//         farenheitInput = ``;
//     } else if (input !== ``){
//         for(let i = 0; i < inputs.length; i++) {
//             let input = inputs[i]
        
//             input.addEventListener(`input`, function (evt) {
//                 let value = parseFloat (evt.target.value);
        
//                 switch(evt.target.name) {
        
//                     case `celcius`:
//                         farenheitInput.value  = (value*1.8)+32
//                         kelvinInput.value = value + 273.15
//                     break;
//                     case `kelvin`: 
//                          farenheitInput.value = ((value-273.15)*1.8)+32
//                          celciusInput.value = value-273.15
//                     break;
//                     case `fahrenheit`:
//                          celciusInput.value = (value-32)/1.8
//                          kelvinInput.value = ((value-32)/1.8)+273.15
//                     break;
//                 }
//             })
//         }
//     }
// })


const allInputs = document.querySelectorAll(`.input`)

allInputs.forEach((input) => {
    input.addEventListener(`input`, (evt) => {
        let value = parseFloat(evt.target.value)

        switch (evt.target.name) {
            case `celcius`:
                farenheitInput.value  = ((value*1.8)+32) || ''
                kelvinInput.value = (value + 273.15) || ''
            break;
            case `kelvin`: 
                 farenheitInput.value = (((value-273.15)*1.8)+32) || ''
                 celciusInput.value = (value-273.15) || ''
            break;
            case `fahrenheit`:
                 celciusInput.value = ((value-32)/1.8) || ''
                 kelvinInput.value = (((value-32)/1.8)+273.15) || ''
            break;
        }
    })
})