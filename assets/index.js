let messageEl = document.getElementById("message");
messageEl.innerHTML = "Floyd's BMI Calculator &copy 2024";

let counterEl = document.getElementById("bmi");


function bmiCalcMetric(weight, height) {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var metricCalc = Math.floor(weight / height / height);
    counterEl.innerText = metricCalc;
};

function bmiCalcStandard(weight, height) {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var usCalc = Math.floor((weight / height / height) * 703);
    counterEl.innerText = usCalc;
    // alert("Thanks for using Floyd's BMI Calulator, now hit the gym 💪");
};

// function calculateBMI() {
//     // var count = document.getElementById('toggle').value;
//     var count = 3;
//     if (count < 2) {
//         bmiCalcStandard();
//     } else {
//         bmiCalcMetric();
//     };
// };

/* Improvements to Make */
// Make a toggle switch to choose between us or metric
// Change h1 text based on toggle switch
// Update inches to feet + inches 
// Convert feet+inches into inches for BMI formula



// If using Metric, weight of 65Kg and height of 1.8m will output 20 for bmi
// If using Standard, weight of 180lbs and height of 66inches will output 29 for bmi
