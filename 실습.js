function f01(){
  c = document.querySelector("#color01").value
  x = document.querySelector("#target01");
  console.log(x)
  x.style.backgroundColor = c;
}

function f02(num){
  x = document.querySelector("#target02");
  x.style.width = `${num}px`;
  x.style.height = `${num}px`;
}

function f03(){
  input31 = document.querySelector("#input31").value
  input32 = document.querySelector("#input32").value
  input33 = document.querySelector("#input33").value
  resultArea = document.querySelector("#result-area");

  resultArea.innerHTML = `${input31}` + " 님 의 구매 상품 " + `${input32}` + " 의 " + 
  `${input33}` + " 원의 결제가 완료 되었습니다."

}