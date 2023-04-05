function hitungLuas() {
  // Ambil nilai alas dan tinggi dari form
  var alas = document.getElementById("alas").value;
  var tinggi = document.getElementById("tinggi").value;

  // Hitung luas segitiga
  var luas = 0.5 * alas * tinggi;

  // Tampilkan hasil perhitungan
  document.getElementById("luas").value = luas;
}

//Keliling Segitiga
function hitungKeliling() {
  // ambil nilai panjang sisi a, b, dan c dari input user
  var a = parseFloat(document.getElementById("sisi_a").value);
  var b = parseFloat(document.getElementById("sisi_b").value);
  var c = parseFloat(document.getElementById("sisi_c").value);

  // hitung keliling segitiga
  var keliling = a + b + c;

  // tampilkan hasil perhitungan pada elemen output
  document.getElementById("keliling").value = keliling;
}

//----------------------------------------------------------------------------------
//JAJAR GENJANG LUAS
function hitungLuasJajarGenjang() {
  // ambil nilai alas dan tinggi dari input user
  var alas_jajargenjang = parseFloat(
    document.getElementById("alas_jajargenjang").value
  );
  var tinggi_jajargenjang = parseFloat(
    document.getElementById("tinggi_jajargenjang").value
  );

  // hitung luas jajar genjang
  var luasjajargenjang = alas_jajargenjang * tinggi_jajargenjang;

  // tampilkan hasil perhitungan pada elemen output
  document.getElementById("luasjajargenjang").value = luasjajargenjang;
}

function hitungKelilingJajarGenjang() {
  var alas_jajargenjang2 = parseFloat(
    document.getElementById("alas_jajargenjang2").value
  );
  var b_jajargenjang = parseFloat(
    document.getElementById("b_jajargenjang").value
  );

  var keliling_jajargenjang = 2 * (alas_jajargenjang2 + b_jajargenjang);

  document.getElementById("keliling_jajargenjang").value =
    keliling_jajargenjang;
}
