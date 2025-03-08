const form = document.querySelector('form')
// console.log(form);


// const height = parseInt(document.querySelector("#height").value)   
//declare at top give you empty value becz page is load after submit page

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log(e);
    console.log(e.target);
    
    const height = parseInt(document.querySelector("#height").value)   //without parseint store value in string
    const weight = parseInt(document.querySelector("#weight").value)  
    
    const result = document.querySelector("#results")
    const guide = document.querySelector("#weight-guide")
        console.log(guide);

    if( height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please enter valid value height ${height}`
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid value weight ${weight}`  
    } 
    else{
        const bmi = (weight / ((height * height) /10000 )).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`

        
        if (bmi > 24.9) {
            guide.innerHTML = `
                <h3>BMI Weight Guide</h3>
                <p>You are overweight. BMI is greater than 24.9</p>`;
        } else if(bmi < 18.6){
            // Clear the guide if the person is not overweight
            guide.innerHTML = '<h3>BMI Weight Guide</h3><p>Under Weight = Less than 18.6</p>';
        }

        else if(bmi > 18.6 && bmi < 24.9){
            // Clear the guide if the person is not overweight
            guide.innerHTML = '<h3>BMI Weight Guide</h3><p>Normal Range = 18.6 and 24.9</p>';
        }
    }
    

})
