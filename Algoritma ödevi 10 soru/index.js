function soru1() {
  let dizi = [];
  let x = +prompt("Lütfen başlangıç değerini giriniz, negatif tam sayı olmamalı.");
  let N = +prompt("Lütfen bitiş değerini giriniz. Bitiş değeri başlangıç değerinden büyük olmalı");
  if (x > N || x < 0) return soru1();

  while (x <= N) {
    dizi.push(x);
    x++;
  }

  console.log(dizi);
}

function soru2() {
  let girilenSayi = +prompt("Lütfen fibonacci dizisi için sıfırdan büyük bir bitiş değeri girin");
  if (girilenSayi < 0) return soru2();

  let fibonacciDizisi = [1, 1];

  let n = 1;
  let sonraki = 1;

  while (girilenSayi > sonraki) {
    sonraki = fibonacciDizisi[n - 1] + fibonacciDizisi[n];
    fibonacciDizisi.push(sonraki);
    n++;
  }
  console.log(fibonacciDizisi);
}

function soru3() {
  let girilenSayi = +prompt("Lütfen pozitif ve sıfırdan büyük bir sayi girin");
  let tamBolenlerListesi = [];

  let bolen = 1;

  while (girilenSayi >= bolen) {
    if (girilenSayi % bolen === 0) {
      tamBolenlerListesi.push(bolen);
    }
    bolen++;
  }

  console.log(tamBolenlerListesi);
}

function soru4() {
  let sayi1 = +prompt("Büyüklük sıralaması için ilk sayıyı giriniz");
  let sayi2 = +prompt("Büyüklük sıralaması için ikinci sayıyı giriniz");
  let sayi3 = +prompt("Büyüklük sıralaması için üçüncü sayıyı giriniz");

  let sayiDizisi = [];
  sayiDizisi.push(sayi1, sayi2, sayi3);
  sayiDizisi.sort((a, b) => a - b);

  console.log(`Ortanca sayı = ${sayiDizisi[1]}`);
}

function soru5() {
  let sayi1 = +prompt("Bölmek için bir sayı girin");
  let sayi2 = +prompt("Kaça böleceksiniz?");

  var bolum = 0;

  while (sayi1 >= sayi2) {
    sayi1 -= sayi2;
    bolum++;
  }

  console.log(`Bölme işleminin sonucunda bolum = ${bolum}, kalan = ${sayi1} çıkmıştır`);
}

function soru6() {
  let sayi1 = +prompt("Bir sayi girin");
  let sayi2 = +prompt("Bir sayi daha girin");

  if (sayi1 === 0 && sayi2 === 0) return console.log("Çarpma işlemi sonucu = " + 0);

  let sonuc = 0;
  let i = 1;

  while (i <= sayi1) {
    sonuc += sayi2;
    i++;
  }

  return console.log("Çarpma işlemi sonucu = " + sonuc);
}

function soru7() {
  var girilenSayi;
  let length = 0;
  let toplam = 0;
  while (girilenSayi !== 0) {
    girilenSayi = +prompt("Lütfen bir sayı girin. Sıfır girene kadar girilen sayıların ortalaması alınacak");
    if (girilenSayi === 0) break;
    toplam += girilenSayi;
    length++;
  }

  console.log(toplam / length);
}

function soru8() {
  let ciftToplam = 0;
  let tekToplam = 0;
  let n = 1;
  while (n <= 20) {
    let girilenSayi = +prompt("Sayi girin");
    if (girilenSayi % 2 === 0) ciftToplam += girilenSayi;
    else tekToplam += girilenSayi;
    n++;
  }

  console.log(`Ciftlerin toplamı = ${ciftToplam}\nTeklerin toplamı = ${tekToplam}`);
}

function soru9() {
  let sayi1 = +prompt("Lütfen pozitif bir sayi girin");
  let sayi2 = +prompt("Lütfen pozitif bir sayi daha girin");
  if (sayi1 < 1 || sayi2 < 1) return soru9();
  let obeb;

  let i = 1;
  while (i <= sayi1 && i <= sayi2) {
    if (sayi1 % i === 0 && sayi2 % i === 0) {
      obeb = i;
    }
    i++;
  }

  console.log(`Girilen sayıların obeb'i = ` + obeb);
}

function soru10() {
  let girilenSayi = +prompt("Lütfen bir tam sayı giriniz");
  if (girilenSayi % 2 === 0) return console.log("Girdiğiniz sayı çift");
  else return console.log("Girdiğiniz sayı tek");
}
