function asyncGeneratorStep(i,n,e,t,o,r,a){try{var s=i[r](a),d=s.value}catch(c){return void e(c)}s.done?n(d):Promise.resolve(d).then(t,o)}function _asyncToGenerator(i){return function(){var n=this,e=arguments;return new Promise(function(t,o){var r=i.apply(n,e);function a(i){asyncGeneratorStep(r,t,o,a,s,"next",i)}function s(i){asyncGeneratorStep(r,t,o,a,s,"throw",i)}a(void 0)})}}function _defineProperties(i,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function _createClass(i,n,e){return n&&_defineProperties(i.prototype,n),e&&_defineProperties(i,e),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{J3Yu:function(i,n,e){"use strict";e.r(n),e.d(n,"ion_loading",function(){return u});var t=e("mLBW"),o=e("TJLY"),r=e("vTwt"),a=e("Jbqe"),s=e("IvgT"),d=function(i,n){var e=new i,t=new i;t.addElement(n.querySelector("ion-backdrop"));var o=new i;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.01,.3),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))},c=function(i,n){var e=new i,t=new i;t.addElement(n.querySelector("ion-backdrop"));var o=new i;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.3,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))},l=function(i,n){var e=new i,t=new i;t.addElement(n.querySelector("ion-backdrop"));var o=new i;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.01,.32),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))},p=function(i,n){var e=new i,t=new i;t.addElement(n.querySelector("ion-backdrop"));var o=new i;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.32,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))},u=function(){function i(i){var n=this;Object(t.m)(this,i),this.presented=!1,this.mode=Object(t.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){n.dismiss(void 0,r.a)},this.didPresent=Object(t.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(t.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(t.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(t.d)(this,"ionLoadingDidDismiss",7)}var n=i.prototype;return n.componentWillLoad=function(){if(void 0===this.spinner){var i=Object(t.e)(this);this.spinner=o.b.get("loadingSpinner",o.b.get("spinner","ios"===i?"lines":"crescent"))}},n.present=function(){var i=_asyncToGenerator(regeneratorRuntime.mark(function i(){var n=this;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(r.e)(this,"loadingEnter",d,l,void 0);case 2:this.duration>0&&(this.durationTimeout=setTimeout(function(){return n.dismiss()},this.duration+10));case 3:case"end":return i.stop()}},i,this)}));return function(){return i.apply(this,arguments)}}(),n.dismiss=function(i,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(r.f)(this,i,n,"loadingLeave",c,p)},n.onDidDismiss=function(){return Object(r.g)(this.el,"ionLoadingDidDismiss")},n.onWillDismiss=function(){return Object(r.g)(this.el,"ionLoadingWillDismiss")},n.render=function(){var i,n=this.message,e=this.spinner,o=Object(t.e)(this);return Object(t.i)(t.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign({},Object(a.b)(this.cssClass),(i={},i[o]=!0,i["loading-translucent"]=this.translucent,i))},Object(t.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(t.i)("div",{class:"loading-wrapper",role:"dialog"},e&&Object(t.i)("div",{class:"loading-spinner"},Object(t.i)("ion-spinner",{name:e})),n&&Object(t.i)("div",{class:"loading-content",innerHTML:Object(s.a)(n)})))},_createClass(i,[{key:"el",get:function(){return Object(t.f)(this)}}],[{key:"style",get:function(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}]),i}()}}]);