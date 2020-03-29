var hpmika= 100;
var hpdragon = 200;

function rysuj(){
      document.getElementById('dragonHP').innerText = hpdragon;
      document.getElementById('mikaHP').innerText = hpmika;

}

function sit(){
  hpdragon = hpdragon - 45;
  rysuj();
  window.setTimeout(bite, 500);
}

function bite(){
  hpmika = hpmika - 25;
  rysuj();
}
