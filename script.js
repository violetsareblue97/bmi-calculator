document.getElementById('calculate').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value) / 100; 
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight');
        return;
    }

    const bmi = weight / (height * height);
    const roundedBMI = Math.round(bmi * 10) / 10;

    document.getElementById('bmi-value').textContent = roundedBMI;

    let category, color, message;
    if (bmi < 18.5) {
        category = 'Underweight';
        color = 'text-blue-600';
        message = 'You might want to consult with a nutritionist about gaining weight in a healthy way.';
    } else if (bmi <= 25) {
        category = 'Normal weight';
        color = 'text-green-600';
        message = 'Great job! Your weight is within the healthy range.';
    } else if (bmi <= 30) {
        category = 'Overweight';
        color = 'text-yellow-600';
        message = 'Consider more physical activity and a balanced diet to reach a healthier weight.';
    } else {
        category = 'Obese';
        color = 'text-red-600';
        message = 'Please consult with a healthcare professional for personalized advice.';
    }

    document.getElementById('bmi-category').textContent = category;
    document.getElementById('bmi-category').className = `${color} font-medium`;
    document.getElementById('result').style.display = 'block';

    document.getElementById('bmi-value').classList.add('animate-bounce');
    setTimeout(() => {
        document.getElementById('bmi-value').classList.remove('animate-bounce');
    }, 1000);
});

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('calculate').click();
    }
});
