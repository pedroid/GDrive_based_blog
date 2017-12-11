#[C++]用function pointer 來取代switch case pattern
##引入設計模式的目的是要將程式中變動的部份抽離，這裡的例子用以說明。

應用情境是當我們對一支程式下指令時，這個程式會依照當下的狀態，去執行該狀態下接收到特定指令之後的行為。比較直觀的寫法是在執行command 的function中(ExecCommandMapFunction member function)，寫一個switch-case 去區別接收到的指令有哪些。而這樣的寫法雖然直觀又快速，但潛在一個問題，就是程式邏輯跟處理事件的程式是混雜在一起的，如果我們希望日後增加/修改事件時，可以專注於處理事件上，而不用再被程式邏輯給分心，就可以採用以下的模式來改寫我們原有的程式。

原有的程式如下

    int ExampleClass::ExecCommandMapFunction(const ControlCommandPack kcmd_pack){ 
     switch (kcmd_pack.command){
         case(KeepInspecting) : // Map Command to Controller Member function
              pcurrent_state_->keep_Inspecting();
              break;
         case(StartScan) :
              pcurrent_state_->start_Scan();
              break;
         case(StopScan) :
              pcurrent_state_->stop_Scan();
              break;
       }
 
    }

我們改寫的摘要如下

1. 用物件的方式將處理事件的程式包裝裡一個member function
2. 用function pointer 的方式去編列一個處理事件程式的array，有了這個array，我們就可以用index的方式去調用這些被編列的member function
3. 我們假設程式的邏輯在日後被修改的機會很少，而這部分也在這次改用中改用function pointer 的方式去實作，ExecCommandMapFunction這個member function是程式邏輯的部份，日後也不太會被變動了。
4. 當我們有新增一個command 時，更新CommandMapMethod array大小以及列表內容，然後新增一個member function，專門處理這個command 對應的member function (i.e. CMD2XXX member function)

改用function pointer 的pattern去改寫後：

    class itriUltherapyController;
        typedef int(ExampleClass::*CommandMapMethod)(ControlCommandPack* control_cmd_pack);
    // 定義一個新的型別，這個型別是ExampleClass裡面的member function指標

        CommandMapMethod ptable_cmd_map_method_[g_kcommand_map_method_num];
    //建立一個CommandMapMethod的array

    int ExampleClass::Initialize(...){
            // 略
        ptable_cmd_map_method_[ControlCommand::KeepInspecting] = &ExampleClass::CMD2Kcting;
        ptable_cmd_map_method_[ControlCommand::StartScan] = &ExampleClass::CMD2StartScan;
        ptable_cmd_map_method_[ControlCommand::StopScan] = &ExampleClass::CMD2StopScan;
    }
    //初始化array 的內容

    int ExampleClass::ExecCommandMapFunction(const ControlCommandPack kcmd_pack){

     /*
     use function pointer to member function to rewrite the switch-case pattern
     */
     fptr = ptable_cmd_map_method_[kcmd_pack.command];  
     (this->*(this->fptr))(&kcmd_pack);

     return 0;
    }

    int ExampleClass::CMD2KeepInspecting(ControlCommandPack* kpabus_control_cmd_pack){
     pcurrent_state_->keep_Inspecting();
     return 0;
    }

    int ExampleClass::CMD2StartScan(ControlCommandPack* kpabus_control_cmd_pack){
     pcurrent_state_->start_Scan();
     return 0;
    }

    int ExampleClass::CMD2StopScan(const ControlCommandPack* pabus_control_cmd_pack){
     pcurrent_state_->stop_Scan();
     return 0;
    }