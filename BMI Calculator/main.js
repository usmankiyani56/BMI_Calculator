function calculateBMI() {
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
  
    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);
  
    const bmi = weight / ((height / 100) ** 2);
  
    let result = '';
  
    if (isNaN(bmi) || height <= 0 || weight <= 0) {
      result = 'Please enter valid height and weight values.';
    } else if (bmi < 18.5) {
      result = `Your BMI is ${bmi.toFixed(2)} and you are underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = `Your BMI is ${bmi.toFixed(2)} and you are normal weight`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = `Your BMI is ${bmi.toFixed(2)} and you are overweight`;
    } else if (bmi >= 30 && bmi <= 34.9) {
      result = `Your BMI is ${bmi.toFixed(2)} and you are obese`;
    } else if (bmi >= 35) {
      result = `Your BMI is ${bmi.toFixed(2)} and you are extremely obese`;
    }
  
    document.getElementById('result').innerText = result;
  }
  