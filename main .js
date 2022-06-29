
/*
    * validation Log In page 
*/
let submitBtn = document.getElementById("submitBtn");

// main page 2nd part
let mainPage = document.getElementById('mainPage')
    mainPage.style.display = 'none';

submitBtn.addEventListener('click', ()=> {

    let logInBox = document.getElementById('logInBox');
    let accountNum = document.getElementById('accountNum').value;
    let accountPass = document.getElementById('accountPass').value;

    if(accountNum == '' ){
        alert('account number is required');
    }
    else if(accountPass == ''){
        alert('account password is required');
    }
    else{
        logInBox.style.display = 'none';

        // main page 2nd part
        mainPage.style.display = 'block';

    }
}) 




/*
  * for diposite
*/
let dipoBtn = document.getElementById('dipoBtn');
dipoBtn.addEventListener('click', ()=>{

    let dipoInput = document.getElementById('dipoInput').value;
    let newDipoInput = parseFloat(dipoInput)

    let totalDepo = document.getElementById('totalDepo').innerHTML;
    let newTotalDepo = parseFloat(totalDepo);


    let mainTotalDipo = newDipoInput + newTotalDepo

    // .toFixed(2) মানে দশমিক এর পরে ২ ঘর নিবে ।
    document.getElementById('totalDepo').innerHTML = mainTotalDipo.toFixed(2);



    // change balance for total balance
    let totalBalance = document.getElementById('totalBalance').innerHTML;
    let newtotalBalance = parseFloat(totalBalance);

    let mainTotalBalance = newDipoInput + newtotalBalance
    document.getElementById('totalBalance').innerHTML = mainTotalBalance.toFixed(2);

})




/*
  * with draw 
*/

let drawBtn = document.getElementById('drawBtn');
drawBtn.addEventListener('click', ()=>{

    let withdInput = document.getElementById('withdInput').value;
    let newwithdInput = parseFloat(withdInput);

    let totalDraw = document.getElementById('totalDraw').innerHTML;
    let newtotalDraw = parseFloat(totalDraw);


    let mainTotalDraw = newtotalDraw + newwithdInput;
    document.getElementById('totalDraw').innerHTML = mainTotalDraw.toFixed(2);




    // change balance for with draw balance
      let totalBalance = document.getElementById('totalBalance').innerHTML;
      let newtotalBalance = parseFloat(totalBalance);
  
      let mainTotalBalance = newtotalBalance - newwithdInput;
      document.getElementById('totalBalance').innerHTML = mainTotalBalance.toFixed(2);

})