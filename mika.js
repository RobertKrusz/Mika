var hpmika= 100;
var hpdragon = 200;

function rysuj(){
      document.getElementById('hp').innerText = hp;
  if (hp < 50){
  document.getElementById('komunikat').innerText = 'ssssyk!';
  document.getElementById('obrazek').src = './wkurzona.jpg';
}else{
  document.getElementById('komunikat').innerText = 'mrrrr!';
  document.getElementById('obrazek').src = './najedzona.jpg';
}
}

function sit(){
  hpdragon = hpdragon - 45;
  document.getElementById('jolo').innerText = hpdragon;

}



function nakarm(){
  hp = 100;
  rysuj();

}
function targaj(){
  hp = hp - 50
  rysuj();

}
