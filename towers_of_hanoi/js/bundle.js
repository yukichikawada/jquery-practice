!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=class{constructor(t,e){this.game=t,this.el=e,this.setupBoard()}bindEvents(){}makeMove(){}setupBoard(){const t=$("<ul>");t.addClass("base");for(let e=0;e<3;e++){const n=$("<li>");n.data("place",e),t.append(n)}this.el.append(t)}}},function(t,e){t.exports=class{constructor(){this.towers=[[3,2,1],[],[]]}isValidMove(t,e){const n=this.towers[t],o=this.towers[e];return 0!==n.length&&(0==o.length||n[n.length-1]<o[o.length-1])}isWon(){return 3==this.towers[2].length||3==this.towers[1].length}move(t,e){return!!this.isValidMove(t,e)&&(this.towers[e].push(this.towers[t].pop()),!0)}print(){console.log(JSON.stringify(this.towers))}promptMove(t,e){this.print(),t.question("Enter a starting tower: ",n=>{const o=parseInt(n);t.question("Enter an ending tower: ",t=>{const n=parseInt(t);e(o,n)})})}run(t,e){this.promptMove(t,(n,o)=>{this.move(n,o)||console.log("Invalid move!"),this.isWon()?(this.print(),console.log("You win!"),e()):this.run(t,e)})}}},function(t,e,n){const o=n(1),s=n(0);$(()=>{const t=$(".hanoi"),e=new o;new s(e,t)})}]);