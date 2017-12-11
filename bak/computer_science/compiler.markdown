#Compiler
##Syntax(Syntatic) Analysis (Parsing)

parsing 是是由一連串已知的tokens解析得其中使用的結構。結構可以用parse tree來代表。
###Top-down
problem is what to use.

###Bottom-up
problem if what to reduce.

###Context-Free Grammer (CFG)
用以說明一個語言的工具。

##Lexical Analysis (or Scanning)

[Flex 工具的使用說明](http://xiaoxia.org/2011/10/24/writing-a-compiler-learning-gnu-flex-write-a-lexical-analyzer/) LEX, FLEX, YACC, and bison [reference to CS143 lecture03 handout](http://web.stanford.edu/class/cs143/lectures/lecture03.pdf). [reference to CS143 lecture04 handout](http://web.stanford.edu/class/cs143/lectures/lecture04.pdf).

How to build a Lexical Analyzer?
1. Specify the valid tokens of a given language in terms of "REGULAR EXPRESSION"
2. Create a NDFA from the regular expression
3. convert the NFA to DFA

Implementation

[an explanation to coding Leximal Analyzer on Youtube](https://www.youtube.com/watch?v=KnCrHIjP3jM)

將字串解離出不同種類的字串。使用Regular Language是一個最廣為使用的工具。Lexical Analyzer 的工作可以說是作pattern matching 以產生有效的Token.
###DFA and NFA

####DFA: Deterministic Finite Automata

* 每個state收到一個input 只會有一次轉態,
* 沒有epison move (epison move: machine can move from state A to state B without any input),
* faster to execute

####NFA: Nondeterministic Finite Automata

* DFA can be exponentially larger than NFA

##學習Compiler的初衷

Compiler這一個課題如同這個世界上絕大多數成熟的領域一樣，是一個結構嚴謹的課程。但是其中可能只有某一個小部份符合讀者在一個特定的時期，具有特定的知識背景，讓這個學問的其中一個子集是符合他想要追求的知識。筆者在寫下這些文字的時期，是最想要了解我們要如何一個電腦，可以更聰明的辨別他所得到的指令，而不只是查指令表，而是能用什麼方式來解析使用者的輸入。筆者的目的就是這樣的簡單。

##Why so many languages

因為各種不同的應用，所以產生了許多有不同特色的語言存在。這世上並不存在一個適用於各種不同狀況的語言，從另一個角度來說，只要有人使用的語言，就是一個好的語言。

##Leximal Analysis

[reference to CS143 lecture01 handout](http://web.stanford.edu/class/cs143/lectures/lecture01.pdf).

ist his ase nte nce ===should be===> This is a sentence.

###Tokens

classify substrings according to role

1. Identifier: strings of letters or digits, starting with a letter.
2. Integer: a non-empty string of digits.
3. Keyword: "else", "if", "begin", ...etc
4. Whitespace: non-empty sequence of blanks

##Parsing = Diagramming Sentences

The diagram is a tree
for example: 將一個句子結構化，分析出主詞、受詞等等的元件。
[note]任何東西都可以被結構化分析，比如一篇文章可以結構出起、承、轉，合，Compiler課程可以被結構出Leximal Analysis, Semantic Analysis,...等。

###Parser Compare with Lexer

String of characters ===Lexer===> String of tokens	 
example: if x=y then 1 else 2 fi ===Lexer===> IF ID = ID THEN INT ELSE INT FI
String of tokens ===Parser===>Parse Tree 
[note]有建立Parse TREE的差別是電腦是否能"理解"使用者的輸入。在沒有建立Parse Tree之前，電腦只能夠用"查表"的方式來檢視使用者的輸入是否存在於記憶體中，而可以理解輸入產生的很大一個差別是，電腦從此知道怎麼用"變數"，去套用在一個相同的規則下的任何情形。