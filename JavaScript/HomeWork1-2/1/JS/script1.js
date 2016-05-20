var arrLen = 5;
var arr = [];
var flag = true;

for(var i = 0;i < arrLen;i ++)
    arr[i] = prompt('Введите имя','');

var name = prompt('Введите имя пользователя ');

for(var i = 0;i < arrLen;i ++){
   if(arr[i] == name)
     flag = false; 
}

if(flag)
    alert('Нет такого имени');
else
   alert(name + ', вы успешно вошли');

    