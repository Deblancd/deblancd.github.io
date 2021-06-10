"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),debounce=function t(e,n,i){var s;return function(){var t=this,a=arguments,r=function h(){s=null,i||e.apply(t,a)},o=i&&!s;clearTimeout(s),s=setTimeout(r,n),o&&e.apply(t,a)}},lineEq=function e(t,n,i,s,a){var r=(t-n)/(i-s),o=n-r*s;return r*a+o},getMousePos=function n(t){var e=0,n=0;if(!t)var i=window.event;return t.pageX||t.pageY?(e=t.pageX,n=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:e,y:n}},MorphingBG=function(){function t(e){_classCallCheck(this,t),this.DOM={},this.DOM.el=e,this.DOM.el.style.opacity=0,this.DOM.el.style.transition="transform 2s ease-out",this.DOM.pathEl=this.DOM.el.querySelector("path"),this.paths=this.DOM.pathEl.getAttribute("pathdata:id").split(";"),this.paths.splice(this.paths.length,0,this.DOM.pathEl.getAttribute("d")),this.win={width:window.innerWidth,height:window.innerHeight},this.animate(),this.initEvents()}return _createClass(t,[{key:"animate",value:function e(){anime.remove(this.DOM.pathEl),anime({targets:this.DOM.pathEl,duration:1e4,easing:[.5,0,.5,1],d:this.paths,loop:!0})}},{key:"initEvents",value:function n(){var t=this,e={tx:this.win.width/8,ty:this.win.height/4,rz:45,sx:[.5,1.3],sy:[.5,1.3]},n=function s(n){requestAnimationFrame(function(){if(t.started){var i=getMousePos(n),s=2*e.rz/t.win.height*i.y-e.rz,a=i.x<t.win.width/2?lineEq(e.sx[0],e.sx[1],t.win.width/2,0,i.x):lineEq(e.sx[1],e.sx[0],t.win.width,t.win.width/2,i.x),r=i.y<t.win.height/2?lineEq(e.sy[0],e.sy[1],t.win.height/2,0,i.y):lineEq(e.sy[1],e.sy[0],t.win.height,t.win.height/2,i.y),o=2*e.tx/t.win.width*i.x-e.tx,h=2*e.ty/t.win.height*i.y-e.ty;t.DOM.el.style.transform="translate3d("+o+"px, "+h+"px,0) rotate3d(0,0,1,"+s+"deg) scale3d("+a+","+r+",1)"}else t.started=!0,anime({targets:t.DOM.el,duration:300,easing:"linear",opacity:[0,1]})})},i=debounce(function(){return t.win={width:window.innerWidth,height:window.innerHeight}},20);document.addEventListener("mousemove",n),document.addEventListener("touchstart",n),window.addEventListener("resize",function(t){return i()})}}]),t}();new MorphingBG(document.querySelector("svg.scene"));