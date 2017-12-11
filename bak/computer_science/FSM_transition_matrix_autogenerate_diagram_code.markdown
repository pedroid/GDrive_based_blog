#Auto Generate FSM object with Transition Matrix Input

##Overview
這個專案是一個自動產生程式語言實作、描述的平台。狀態機(FSM)對程式設計師而言是非常常用的一種設計模式，筆者在撰寫軟體、韌體時，已經非常習慣使用狀態機來控制程式的流程，因為這種設計模式讓程式非常的容易除錯，程式的邏輯因為狀態機控制變得比較單純。但是對筆者而言，要在不同的語言下去實作狀態機，記憶不同程式語言的語法就是一件大量重覆的工作，因為工作需要常常在不同的語言下切換(Javascript, Verilog, C++等)，常常要回去翻過去專案的原始碼，才會記起相關的實作細節。因此使用自動化產生程式碼的目的，就是要減少程式設計師的工作量，系統化一些重覆的工作，藉此減低撰寫程式上的負擔。這篇文章介紹如何建構一個自動產生FSM物件的工具，有了這個工具，程式設計師可以專心在程式的架構上，而實作細節不再需要粍掉程式設計師大量的時間以及心力。我希望能將這部份的工作標準化，同樣且重要的工作認真的作一次，往後就可以安心的在框架下作業，如此增加工作完成的效率以及準確度，是這個專案的核心目的。

##output language
因為筆者工作主要的語言是C++, Verilog次之，所以會先產生C++的版本，再來是Verilog

##transition matrix described by FSM Markup Language
作為使用者輸入的方式，我選用了Transition Matrix，讓使用者描述狀態機，而格式則是採用Markdown。用Markdown的優點是有利於筆者文件化，以及文件的可讀性。用Markdown可以讓使用者(人類)容易理解，也可以透過相關的library解析後為電腦所處理。

以紅緣燈為例 
| STATE/event()        | 30seconds()         |5seconds()|  60seconds()  |
|: -------------------: |:------------------- :| :------------:|  :---------------:|
| GREEN                  | YELLOW             | X               |    X
| YELLOW                | X                         |  RED         |    X
|RED                        | X                         |   X             |     GREEN
  

##轉換流程
介紹轉換流程的同時，也是介紹技術上的細節。筆者希望程式設計師能夠將時間節省在設計這一個步驟。所以在這個平台使用者的輸入介面就是狀態轉換的列表，除此之外沒有了！而平台的輸出呢就是自動化產生的C++ object class。

我們已經知道最終我們要的輸出是什麼，以及使用者輸入，剩下的就是我們應該自動化的部份了。條列一下逐步需要做的事情。

1. 使用者輸入Transition Matrix，用Markdown的格式
2. Markdown 格式的表格經由特定的[函式庫]轉換成HTML(參考[showdown](https://github.com/showdownjs/showdown))
3. 自定一個函式庫，將HTML格式的table 解析出有多少state, event等資訊
4. 有了state, event這些資料就足以產一一個FSM的框架了。

##C++ class architecture
###state abstract class
1. 命名：[project name]StateAbstract.[cpp|h]
2. 定義各個event()的行為，預設在各state不作工作

###state class
1. 命名：[project name]State[state name].[cpp|h]
example: f
2. 繼承自state abstract class，有幾個state就有幾個class
3. 若event()在該state有觸發行為，則該event()在該state要實作。 

###controller abstract class
###controller class
####"event" member function 


##references
1. [State Transition Table Wiki](https://en.wikipedia.org/wiki/State_transition_table)
2. [GoJS](http://gojs.net/latest/index.html)
3. [Markdown to HTML javascript library](https://github.com/showdownjs/showdown)
