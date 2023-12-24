
const form = document.getElementById('convert');
const answer = document.getElementById('answer');

const weightType = 'Weight'; // Initial weight type

const b = document.getElementById('b');
const m = document.getElementById('m');
const weight = document.getElementById('weight');

// Event listener for button clicks
document.getElementById('b').addEventListener('click', switchToBMI);
document.getElementById('m').addEventListener('click', switchToWeight);

function switchToBMI() {

    weightType = 'Weight';
    weight.innerHTML = 'Weight';
   let kginput = document.getElementById('kg');
    kginput.setAttribute('placeholder', 'kg');
}
function switchToWeight() {
    weightType = 'BMI';
    weight.innerHTML = 'BMI';
   let kginput = document.getElementById('kg');
    kginput.setAttribute('placeholder', 'BMI');
}


document.addEventListener('keydown', function (event) {
    let key = event.code;
 

    if (key === 'KeyB') {
        switchToBMI();

    } else if (key === 'KeyM') {
        switchToWeight();
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let ft = parseFloat(document.getElementById('ft').value) || 0;
    let inch = parseFloat(document.getElementById('inch').value) || 0;
    let kg = parseFloat(document.getElementById('kg').value) || 0;
    let height = ((ft * 12 + inch) * 2.54) / 100;
    height = height * height;

    if (weightType === 'BMI') {
        let ans = kg * height;
        if (ans) {
            answer.innerHTML = 'The weight is: ' + ans.toFixed(2);
        } else {
            answer.innerHTML = 'Please enter values';
        }
    }
    
    
    else if (weightType === 'Weight') {
       
        let bmi = kg / height;
        if (bmi) {
            answer.innerHTML = 'The BMI is: ' + bmi.toFixed(2);
        } else {
            answer.innerHTML = 'Please enter values';
        }
    }
});
