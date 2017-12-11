#Arduino as interpreter
開發firmware的演進
在arduino IDE上寫好，然後upload 到uC上面

最終我想要實現一個系統，在uC上面內建了一個interpreter，使用者透過Serial傳遞程式碼，uC可以即時解析並執行。而任何的輸出入都被視為一個物件

程式碼的範例：設定uC的輸出入介面都被虛擬化為一個物件
        
    r.setValue(true);
    r.setValue(false);
    system.sleep(10);
    r.setValue(false);
    g.setValue(true);
    

End product有點像google Blocks 所呈現的概念，目的是要縮短人類日常生活與微控制器之類的距離，讓寫程式這件事的入門門檻再度下降，讓我們的生活更加的容易。

Google Blocks相關的研究相當的有趣，另外進行[整理](../blog/computer_science/GoogleBlocks.html)