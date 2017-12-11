##範例一 : 將 last 當中, 有出現 root 那一行取出來

    last | grep 'root'

 
    root pts/1 192.168.0.154 Mon Oct 4 11:03 still logged in
    root pts/1 192.168.0.154 Mon Oct 4 10:40 - 10:57 (00:17)
    root pts/1 192.168.0.103 Sun Oct 3 21:21 - 22:36 (01:15)
    root pts/1 192.168.0.154 Sun Oct 3 12:35 - 13:07 (00:31)
    ...(以下省略)...

##範例二 : 跟範例一相反, 只要沒有 'root' 字串 就取出

    last | grep -v 'root'

    john pts/2 :0.0 Thu Sep 9 10:27 still logged in
    john tty7 :0 Thu Sep 9 10:28 still logged in
    reboot system boot 2.6.31.12-0.2-de Thu Sep 9 10:27 (25+00:36)
    ...(以下省略)...

###有用引號的差別
如果沒有用引號，則* 字元也當成是字串的一部份

##範例三 : 在 last 輸出訊息中, 只要有 'root' 就取出, 並且只取第一欄

    last | grep 'root' | cut -d ' ' -f1

##範例四 : 取出 /etc/passwd 內容含 'ma' 的那幾行

    grep --color=auto 'ma' /etc/passwd

    dnsmasq:x:102:65534:dnsmasq:/var/lib/empty:/bin/false
    mail:x:8:12:Mailer daemon:/var/spool/clientmqueue:/bin/false
    man:x:13:62:Manual pages viewer:/var/cache/man:/bin/bash
    max:x:1001:100::/home/max:/bin/bash

###將結果輸出到指定的file
將index.cpp 中有'include'字眼的行輸出到include.h檔案

    grep 'include' index.cpp > include.h

累加到檔案的最後面

    grep 'include' index.cpp >> include.h

###計算有幾行

    grep "include" index.cpp | wc -l

###在資料夾中，找出內文中有包含指定字的檔案
    
    grep -nr 'AutoHeight' 

###在資料夾中，找出檔名中有包含指定字的檔案
    
    find . | grep 'AutoHeight' 

###把指定檔案中的１０到１２行print出來
    awk 'FNR>=10 && FNR<20' float_analyze.c


##進階範例 :
##範例一 : 用 dmesg 列印出核心訊息, 再以 grep 找出內含 eth 那行

    linux-tl0r:~ # dmesg | grep 'eth'
    [ 10.292367] eth0: registered as PCnet/PCI II 79C970A
    [ 11.070040] eth0 renamed to eth1 by udevd [353]
    [ 11.076056] udev: renamed network interface eth0 to eth1
    [ 36.600080] eth1: link up
    ...(以下省略)...

##範例二 : 承上題, 要將抓到的關鍵字顯色, 且加上行號來表示

    linux-tl0r:~ # dmesg | grep -n --color=auto 'eth'

    1040:[ 10.292367] eth0: registered as PCnet/PCI II 79C970A
    1050:[ 11.070040] eth0 renamed to eth1 by udevd [353]
    ...(以下省略)...

##範例三 : 承上題, 在關鍵字所在行的前兩行與後三行也一起抓出來顯示

    linux-tl0r:~ # dmesg | grep -n -A3 -B2 --color=auto 'eth'

    1038-[ 10.275502] pcnet32 0000:02:01.0: PCI INT A -> GSI 19 (level, low) -> IRQ 19
    1039-[ 10.276265] pcnet32: PCnet/PCI II 79C970A at 0x2000, 00:0c:29:d2:d2:84 assigned IRQ 19.
    1040:[ 10.292367] eth0: registered as PCnet/PCI II 79C970A
    1041-[ 10.292745] pcnet32: 1 cards_found.
    1042-[ 10.296216] agpgart-intel 0000:00:00.0: Intel 440BX Chipset
    1043-[ 10.302317] agpgart-intel 0000:00:00.0: AGP aperture is 256M @ 0x0
    --