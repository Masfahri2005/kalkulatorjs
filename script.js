// Menampilkan nilai Value kedalam layar browser
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Menghapus semua isi nilai dan operator yang ada di dalam layar inputan
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Menghapus nilai atau operator yang ada di dalam layar inputan
function deleteDisplay() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Menghitung hasil kalkulator
function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}


// TUGAS !!
// Buatkan alert yang menampilkan jika operator yang dimasukan salah 
// maka munculkan "operator yang anda masukan salah !"