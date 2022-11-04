const inputPhone = document.querySelector("input#inphone");
const response = document.querySelector("div#response");

console.log("Sheila")

function somar(a,b){
    return a+b;
}

function formatPhoneNumber(phoneNumber) {
    if(phoneNumber.length > 10){
      return phoneNumber.replace(/(.{2})(.{5})(.{4})/, '($1) $2-$3');J
    }else if(phoneNumber.length <= 10){
      return phoneNumber.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    }
  }
  

console.log(somar(5,4))

function inputPhoneValue(){
    if(inputPhone.value.length < 9){
      alert("Insira um numero de telefone válido no input")
      return
    }
    const html = `
    <h1>Telefone formatado: ${formatPhoneNumber(inputPhone.value)}</h1>
    `;
    response.innerHTML = html;
  }