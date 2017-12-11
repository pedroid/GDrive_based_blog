#Arrow function
!tag javascript
!publish

[reference](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

##feature
擁有更短的語法以及詞彙上綁定 this 變數，所有的箭頭函數都是無名函數 (anonymous function).

##ES6

##Usasge explaination with example
在Javascript 語法上如果要定義一個function，傳統的方法是


    var adder = function(a,b){ 

        return a+b; 

    }



然後用adder(3,2)就可以得到5。
如果用Arror function的描述方式就可以得到一個較精簡的寫法：


    var adder = (a,b)=>a+b;


只用了一行就完成了。