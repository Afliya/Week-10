# Week-10

Ответы на вопросы:

1. Какие есть способы объявления функций?
   Function declaration - код читает специальный интерпретатор. Когда интерпретатор доходит до функции, он объявляет переменную с именем функции и присваивает ей описание функции.
   Function expression - объявляется переменная с именем функции и присваивается ей описание функции.
   Стрелочные функции - ещё более простой и краткий синтаксис для создания функций, например: let func = (arg1, argN) => expression

2. Приведите примеры вызова одной и той же функции всеми известными вам способами.

function sum(a, b) {
return a + b;
}
console.log(sum(1, 2));
// Function Declaration

let sum = function(a, b) {
return a + b;
};
console.log(sum(1, 2));
// Function Expression

let sum = (x, y) => x + y; // Стрелочная функция //
console.log(sum(1, 2));

3. В чём разница между тестированием и отладкой (дебаггингом)? А что такое логирование?
   Отладка — это процесс поиска и исправления ошибок в скрипте. Выполнение кода можно приостановить с помощью команды debugger прямо изнутри самого кода. Способ удобен тем, что можно продолжить работать в редакторе кода без необходимости переключения в браузер для выставления точки останова.
   Логирование. Если нужно что-то вывести в консоль из кода, применяется функция console.log.
   Если правильно выстроить логирование в приложении, то можно и без отладчика разобраться, что происходит в коде.

4. В чём разница между Function Expression и Function Declaration?
   • синтаксис: как определить, что есть что в коде. Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода. Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае функция создаётся в правой части «выражения присваивания» =
   • когда создаётся функция движком JavaScript. Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться. Function Declaration можно использовать во всём скрипте (или блоке кода, если функция объявлена в блоке).

5. Что делает функция console.log()?
   Если нужно что-то вывести в консоль из кода, применяется функция console.log.

6. По какой причине, мы можем использовать до объявления функцию, объявленную через Function Declaration, но не можем ту, которая объявлена через Function Expression ?
   Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
   После того, как поток выполнения достигнет правой части выражения присваивания let sum = function… — с этого момента, функция считается созданной и может быть использована (присвоена переменной, вызвана и т.д.).

С Function Declaration всё иначе. Function Declaration можно использовать во всём скрипте (или блоке кода, если функция объявлена в блоке).
Другими словами, когда движок JavaScript *готовится* выполнять скрипт или блок кода, прежде всего он ищет в нём Function Declaration и создаёт все такие функции. Можно считать этот процесс «стадией инициализации».
И только после того, как все объявления Function Declaration будут обработаны, продолжится выполнение.
В результате, функции, созданные, как Function Declaration, могут быть вызваны раньше своих определений.

7. Что такое глобальная зона видимости функций?
   Область видимости вне любых функций называется глобальной. Переменные, объявленные в ней, видны везде. Переменную называют глобальной, если она объявлена в глобальной области видимости, и локальной — если внутри функции.

8. Что вернёт код? 28
   function showX(x)
   {
   return x;
   }
   console.log(showX(28));

9. Что выведет этот код? 5
   function sum(x, y=0) {
   return x+y;
   }
   console.log(sum(5));

10. Что выведет код? Ничего, потому что conslole.log стоит в начале. Если убрать первую строчку, то в консоли выведется cat.
    console.log(foo);

let foo = "Cat";

console.log(foo);
