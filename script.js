function testeFor(){
for (let contador = 0; contador <= 10; contador ++){
  let p = document.createElement("p");
  let texto = document.createTextNode(contador + " x 2 = " + (contador * 2));
  p.appendChild(texto);
  document.body.appendChild(p);
}
}

let botao = document.getElementsByName("botao");

botao.addEventListener("click", function(){
  let poder = document.getElementsByName("poder"); 
  for( let contador = 0, lista = poder.length; contador < lista; contador ++){
    if ( poder[contador].type == "radio" && poder[contador].checked){
      alert (poder[contador].value);
    }
  }
})