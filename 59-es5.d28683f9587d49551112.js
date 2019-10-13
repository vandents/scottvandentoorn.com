function asyncGeneratorStep(e,t,o,r,n,i,s){try{var a=e[i](s),p=a.value}catch(l){return void o(l)}a.done?t(p):Promise.resolve(p).then(r,n)}function _asyncToGenerator(e){return function(){var t=this,o=arguments;return new Promise(function(r,n){var i=e.apply(t,o);function s(e){asyncGeneratorStep(i,r,n,s,a,"next",e)}function a(e){asyncGeneratorStep(i,r,n,s,a,"throw",e)}s(void 0)})}}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{VgKV:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",function(){return v});var r=o("mLBW"),n=(o("TJLY"),o("9Z7W"),o("vTwt")),i=o("Jbqe"),s=o("1hGh"),a=o("7rGv"),p=function(e,t,o){var r="top",n="left",i=t.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,p=s.height,c=t.ownerDocument.defaultView.innerWidth,d=t.ownerDocument.defaultView.innerHeight,u=o&&o.target&&o.target.getBoundingClientRect(),h=null!=u&&"top"in u?u.top:d/2-p/2,v=null!=u&&"left"in u?u.left:c/2,f=u&&u.width||0,m=u&&u.height||0,b=t.querySelector(".popover-arrow"),w=b.getBoundingClientRect(),g=w.width,y=w.height;null==u&&(b.style.display="none");var x={top:h+m,left:v+f/2-g/2},k={top:h+m+(y-1),left:v+f/2-a/2},P=!1,D=!1;k.left<l+25?(P=!0,k.left=l):a+l+k.left+25>c&&(D=!0,k.left=c-a-l,n="right"),h+m+p>d&&h-p>0?(x.top=h-(y+1),k.top=h-p-(y-1),t.className=t.className+" popover-bottom",r="bottom"):h+m+p>d&&(i.style.bottom=l+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",i.style.top=k.top+"px",i.style.left=k.left+"px",P&&(i.style.left="calc("+k.left+"px + var(--ion-safe-area-left, 0px))"),D&&(i.style.left="calc("+k.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=r+" "+n;var O=new e,j=new e;j.addElement(t.querySelector("ion-backdrop")),j.fromTo("opacity",.01,.08);var E=new e;return E.addElement(t.querySelector(".popover-wrapper")),E.fromTo("opacity",.01,1),Promise.resolve(O.addElement(t).easing("ease").duration(100).add(j).add(E))},l=5,c=function(e,t){var o=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var n=new e;return n.addElement(t.querySelector(".popover-wrapper")),n.fromTo("opacity",.99,0),r.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(r).add(n))},d=function(e,t,o){var r=t.ownerDocument,n="rtl"===r.dir,i="top",s=n?"right":"left",a=t.querySelector(".popover-content"),p=a.getBoundingClientRect(),l=p.width,c=p.height,d=r.defaultView.innerWidth,h=r.defaultView.innerHeight,v=o&&o.target&&o.target.getBoundingClientRect(),f=null!=v&&"bottom"in v?v.bottom:h/2-c/2,m=v&&v.height||0,b={top:f,left:null!=v&&"left"in v?n?v.left-l+v.width:v.left:d/2-l/2};b.left<u?(b.left=u,s="left"):l+u+b.left>d&&(b.left=d-l-u,s="right"),f+m+c>h&&f-c>0?(b.top=f-c-m,t.className=t.className+" popover-bottom",i="bottom"):f+m+c>h&&(a.style.bottom=u+"px"),a.style.top=b.top+"px",a.style.left=b.left+"px",a.style.transformOrigin=i+" "+s;var w=new e,g=new e;g.addElement(t.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.32);var y=new e;y.addElement(t.querySelector(".popover-wrapper")),y.fromTo("opacity",.01,1);var x=new e;x.addElement(t.querySelector(".popover-content")),x.fromTo("scale",.001,1);var k=new e;return k.addElement(t.querySelector(".popover-viewport")),k.fromTo("opacity",.01,1),Promise.resolve(w.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(y).add(x).add(k))},u=12,h=function(e,t){var o=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var n=new e;return n.addElement(t.querySelector(".popover-wrapper")),n.fromTo("opacity",.99,0),r.fromTo("opacity",.32,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(r).add(n))},v=function(){function e(e){Object(r.m)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.didPresent=Object(r.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionPopoverDidDismiss",7)}var t=e.prototype;return t.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},t.onBackdropTap=function(){this.dismiss(void 0,n.a)},t.lifecycle=function(e){var t=this.usersElement,o=f[e.type];if(t&&o){var r=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(r)}},t.present=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(t=this.el.querySelector(".popover-content")){e.next=5;break}throw new Error("container is undefined");case 5:return o=Object.assign({},this.componentProps,{popover:this.el}),e.next=8,Object(s.a)(this.delegate,t,this.component,["popover-viewport",this.el["s-sc"]],o);case 8:return this.usersElement=e.sent,e.next=11,Object(a.a)(this.usersElement);case 11:return e.abrupt("return",Object(n.e)(this,"popoverEnter",p,d,this.event));case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.dismiss=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(t,o){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.f)(this,t,o,"popoverLeave",c,h,this.event);case 2:if(r=e.sent,e.t0=r,!e.t0){e.next=7;break}return e.next=7,Object(s.b)(this.delegate,this.usersElement);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)}));return function(t,o){return e.apply(this,arguments)}}(),t.onDidDismiss=function(){return Object(n.g)(this.el,"ionPopoverDidDismiss")},t.onWillDismiss=function(){return Object(n.g)(this.el,"ionPopoverWillDismiss")},t.hostData=function(){var e,t=Object(r.e)(this);return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(i.b)(this.cssClass),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e))}},t.__stencil_render=function(){return[Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"}))]},t.render=function(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())},_createClass(e,[{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"}}]),e}(),f={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);