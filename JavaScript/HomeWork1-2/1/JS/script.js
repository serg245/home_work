do {
    var num = +(prompt("Введите целое число",'')); 
}
while(isNaN(num) || Number.isInteger(num) != true);

do {
    var power = +(prompt("Введите целую степень",''));
}
while(isNaN(power) || Number.isInteger(power) != true);

pow(num,power);

function pow(num,power){
    var result=1;
    if(num == 0)
        result = 0;
    for (var i=1;i<=Math.abs(power);i++){
        result*=num;
    }
    if(power < 0)
        result = 1/result;
    return console.log('Число %d в степени %d будет : %f',num,power,result);  
}



