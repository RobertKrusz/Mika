var hp = 100;

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
function wkurzaj(){
  hp = hp - 10;
  rysuj();
}

function nakarm(){
  hp = 100;
  rysuj();

}
function targaj(){
  hp = hp - 50
  rysuj();

}
