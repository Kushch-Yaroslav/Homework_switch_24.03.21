// const userInputDay = +prompt("Введите число: ", );
// switch(userInputDay){
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:{
//     console.log("Это первая декада.")
//     break;
//   }
//    case 11:
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//   case 18:
//   case 19:
//   case 20:{
//    console.log("Это вторая декада.")
//    break;
//     }
//   case 21:
//   case 22:
//   case 23:
//   case 24:
//   case 25:
//   case 26:
//   case 27:
//   case 28:
//   case 29:
//   case 30:{
//         console.log("Это это третья декада.")
//         break;
//   }
//   default:{
//     console.log("В месяце максимум 31 день!")
//   }
// }


const calculation = +prompt(
  'Выберите математическую операцию ! \n 1 - Сложение(+) \n 2 - Вычитание(-) \n 3 - Умножение(*) \n 4 - Деление(/) \n 5 - Возведение в степень(**) \n 6 - Возвращает квадратный корень числа (Вводите только первое число!)',
);
const Number_1 = +prompt("Введите первое число: ", );
const Number_2 = +prompt("Введите второе число: ", );


const fold = Number_1 + Number_2;
const sub = Number_1 - Number_2;
const div = Number_1 / Number_2;
const mul = Number_1 * Number_2;
const deg = Number_1 ** Number_2;
const sq = Math.sqrt(Number_1);

switch((Number_1, Number_2, calculation)){
  case 1:{
    console.log("Если сложить число", Number_1, "и", Number_2, "получится:",  fold)
    break;
}
case 2:{
  console.log("Если вычесить у", Number_1, "число", Number_2, "получится: ", sub)
  break;
}
case 3:{
  console.log("Если умножить число", Number_1, "на", Number_2, "получится: ", mul)
  break;
}
case 4:{
  console.log("Если разделить число", Number_1, "на", Number_2, "получится: ", div)
  break;
}
case 5: {
  console.log("Если возвести число", Number_1, "в степень", Number_2, "получится:", deg);
  break;
}
case 6: {
  console.log("Квадратный корень из числа", Number_1, "равен", sq);
  break;
}
}