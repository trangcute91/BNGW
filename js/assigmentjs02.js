var randomNumber = [];
while (randomNumber.length <5){
    var n = parseInt(Math.random()*100);
    if(!randomNumber.includes(n)){
        randomNumber.push(n);
    }
}
console.log(randomNumber);

var luckyNumber = [];
function inputNumber() {

    var input = document.getElementById("luckynumber");
    var n = parseInt(input.value);
    if(!luckyNumber.includes(n) && luckyNumber.length<5 && n>=0 && n<=99){
        luckyNumber.push(n);
        alert("Ban da lua chon so: "+n);
    }

    if(luckyNumber.length == 5){
        var count = 0;// so luong cap so giong nhau
        for(var i=0;i<randomNumber.length;i++){
            if(luckyNumber.includes(randomNumber[i])){
                count++;
            }
            // kiemtra(luckyNumber,randomNumber[i]);
        }
        switch (count) {
            case 1: alert("Congratulation you can get 500.000VND");break;
            case 2: alert("Congratulation you can get 20.000.000VND");break;
            case 3: alert("Congratulation you can get 10.000.000.000VND");break;
            default: alert("Sorry, hope you can get lucky next time.");
        }
    }
}

function kiemtra(arr,n) {
    for(var i=0;i<arr.length;i++){
        if(arr[i] == n)
            return true;
    }
    return false;
}