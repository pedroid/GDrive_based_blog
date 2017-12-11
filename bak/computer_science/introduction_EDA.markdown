#Introduction to Electronic Design Automation

[reference, 2007](http://cc.ee.ntu.edu.tw/~eda/Course/IntroEDA07/)

##專有名詞
"DRC/LVS/HSPICE都要過"

##Logic Synthesis
from behavior domain to structure domain
###Types
1. High-level synthesis: transform algorithm or system behavior to functional blocks (CPU, RAM, BUS)
2. Logic/RTL Synthesis: from boolean expressions or register-transfer level (RTL) description to logic gate network (netlist)
3. circuit synthesis: from functions to transistors.

###advantages of synthesis
1. reduce design efforts
2. reduce debug effort

###Logic synthesis
@html{
<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <g>
  <title>Layer 1</title>
  <rect stroke="#000000" id="svg_1" height="60" width="346.00001" y="31" x="40" stroke-width="5" fill="#ffffff"/>
  <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_2" y="68" x="207" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">RTL to Boolean</text>
  <text stroke="#000000" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_3" y="49" x="467" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000">parse Verilog</text>
  <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_4" y="83" x="516" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">control/data low analysis</text>
  <rect stroke="#000000" id="svg_6" height="1" width="0" y="64" x="287" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" fill="#000000"/>
  <rect id="svg_7" stroke="#000000" height="60" width="346.00001" y="136.66667" x="41.66666" stroke-width="5" fill="#ffffff"/>
  <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_8" y="171.33333" x="208.33333" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Tech. indep. optm.</text>
  <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_9" y="177" x="506" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">basic logic restructing</text>
  <rect id="svg_10" stroke="#000000" height="60" width="346.00001" y="232.66666" x="41.66667" stroke-width="5" fill="#ffffff"/>
  <text id="svg_11" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="269.33334" x="224.67969" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Tech. mapping</text>
  <text stroke="#000000" id="svg_12" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="266.66666" x="474.01302" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000">map logic gates to target cell lib.</text>
  <rect id="svg_13" stroke="#000000" height="60" width="346.00001" y="320.66668" x="43" stroke-width="5" fill="#ffffff"/>
  <text style="cursor: move;" id="svg_14" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="357.33854" x="216.01563" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Tech. dep. optm.</text>
  <text id="svg_15" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="352.0104" x="507.34375" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">timing/power optm.</text>
  <rect id="svg_16" stroke="#000000" height="60" width="346.00001" y="408.66668" x="45.66667" stroke-width="5" fill="#ffffff"/>
  <text style="cursor: move;" stroke="#000000" id="svg_17" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="442.67709" x="218.01302" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000">test logic insertion</text>
  <path transform="rotate(179.2365264892578 203.0874938964844,111.5243377685547) " id="svg_18" d="m183.08749,111.47638l20,-19.93282l20,19.93282l-10,0l0,20.02874l-20,0l0,-20.02874l-10,0z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#000000"/>
  <path stroke="#000000" id="svg_19" transform="rotate(179.2365264892578 202.60607910156253,214.2341003417969) " d="m182.60608,214.19695l20,-15.44402l20,15.44402l-10,0l0,15.51834l-20,0l0,-15.51834l-10,0z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" fill="#000000"/>
  <path stroke="#000000" id="svg_20" transform="rotate(179.2365264892578 202.1398468017578,304.59811401367193) " d="m182.13985,304.56989l20,-11.73327l20,11.73327l-10,0l0,11.78973l-20,0l0,-11.78973l-10,0z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" fill="#000000"/>
  <path stroke="#000000" id="svg_21" transform="rotate(179.2365264892578 205.15948486328128,394.5728454589844) " d="m185.15947,394.54106l20,-13.20461l20,13.20461l-10,0l0,13.26815l-20,0l0,-13.26815l-10,0z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" fill="#000000"/>
 </g>
</svg>
}

###Tech. mapping
從邏輯閘對應到標準函式庫的standard cell

###Tech. dep. optm.
1. tradeoff: minimum area, power, delay
2. Other consideration: Noise, testability, routability

##Verification
demo. the functional correctness of a design
###type
1. simulation-based verification
2. emulation-based verification: based on FPGA-based emulation system or based on massive parallel machine. 2 or 3 magnitude faster than software verification. costly and not very ease to use
3. formal verification

