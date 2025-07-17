function calculateBMI() {
    // Ambil nilai berat dan tinggi dari input
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    // Validasi input: pastikan nilai tidak kosong dan angka
    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height!");
        return;
    }

    // Hitung BMI: Rumus BMI = berat / (tinggi * tinggi)
    const bmi = weight / (height * height);

    // Menampilkan hasil BMI dengan dua angka desimal
    document.getElementById("result").textContent = bmi.toFixed(2);

    // Tentukan kategori BMI dan tampilkan
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    alert("Your BMI is " + bmi.toFixed(2) + " - " + category);
}
