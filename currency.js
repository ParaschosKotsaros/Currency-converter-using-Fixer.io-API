const key = "238adc53e67e09889a64c2c6a7d72a5f";
const API = "http://data.fixer.io/api/latest?access_key=238adc53e67e09889a64c2c6a7d72a5f&format=1";
const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
let html= ``;

async function currency(){
    const res = await fetch(API);
    const data = await res.json();
    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;


    for (i=0; i<arrKeys.length; i++){
      html +=  `<option value=${arrKeys[i]}>${arrKeys[i]}</option>`
      document.getElementById("select1").innerHTML = html;
      document.getElementById("select2").innerHTML = html;
     
    }

    function convert (i,j){
      input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value];
    }
    input[0].addEventListener('keyup', ()=> convert(1,0));
    input[1].addEventListener('keyup', ()=> convert(0,1));
    select[0].addEventListener('change',()=> convert(1,0));
    select[1].addEventListener('change',()=> convert(0,1));
   
}

currency();