function asyncGeneratorStep(t,r,o,i,n,e,a){try{var s=t[e](a),c=s.value}catch(l){return void o(l)}s.done?r(c):Promise.resolve(c).then(i,n)}function _asyncToGenerator(t){return function(){var r=this,o=arguments;return new Promise(function(i,n){var e=t.apply(r,o);function a(t){asyncGeneratorStep(e,i,n,a,s,"next",t)}function s(t){asyncGeneratorStep(e,i,n,a,s,"throw",t)}a(void 0)})}}function _defineProperties(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,r,o){return r&&_defineProperties(t.prototype,r),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{wvyA:function(t,r,o){"use strict";o.r(r),o.d(r,"ion_fab",function(){return e}),o.d(r,"ion_fab_button",function(){return a}),o.d(r,"ion_fab_list",function(){return s});var i=o("mLBW"),n=(o("TJLY"),o("Jbqe")),e=function(){function t(t){var r=this;Object(i.m)(this,t),this.edge=!1,this.activated=!1,this.onClick=function(){var t=!!r.el.querySelector("ion-fab-list"),o=r.getFab();t&&(!o||!o.disabled)&&(r.activated=!r.activated)}}var r=t.prototype;return r.activatedChanged=function(){var t=this.activated,r=this.getFab();r&&(r.activated=t),Array.from(this.el.querySelectorAll("ion-fab-list")).forEach(function(r){r.activated=t})},r.componentDidLoad=function(){this.activated&&this.activatedChanged()},r.close=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.activated=!1;case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),r.getFab=function(){return this.el.querySelector("ion-fab-button")},r.render=function(){var t,r=this.horizontal,o=this.vertical,n=this.edge,e=Object(i.e)(this);return Object(i.i)(i.a,{onClick:this.onClick,class:(t={},t[e]=!0,t["fab-horizontal-"+r]=void 0!==r,t["fab-vertical-"+o]=void 0!==o,t["fab-edge"]=n,t)},Object(i.i)("slot",null))},_createClass(t,[{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"watchers",get:function(){return{activated:["activatedChanged"]}}},{key:"style",get:function(){return":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]).fab-horizontal-center,:host-context([dir=rtl]):host(.fab-horizontal-center){left:unset;right:unset;right:50%}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]).fab-horizontal-start,:host-context([dir=rtl]):host(.fab-horizontal-start){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]).fab-horizontal-end,:host-context([dir=rtl]):host(.fab-horizontal-end){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}"}}]),t}(),a=function(){function t(t){var r=this;Object(i.m)(this,t),this.activated=!1,this.disabled=!1,this.routerDirection="forward",this.show=!1,this.translucent=!1,this.type="button",this.onFocus=function(){r.ionFocus.emit()},this.onBlur=function(){r.ionBlur.emit()},this.ionFocus=Object(i.d)(this,"ionFocus",7),this.ionBlur=Object(i.d)(this,"ionBlur",7)}var r=t.prototype;return r.hostData=function(){var t,r=this.el,o=this.disabled,e=this.color,a=this.activated,s=this.show,c=this.translucent,l=this.size,b=Object(n.c)("ion-fab-list",r),d=Object(i.e)(this);return{"aria-disabled":o?"true":null,class:Object.assign({},Object(n.a)(e),(t={},t[d]=!0,t["fab-button-in-list"]=b,t["fab-button-translucent-in-list"]=b&&c,t["fab-button-close-active"]=a,t["fab-button-show"]=s,t["fab-button-disabled"]=o,t["fab-button-translucent"]=c,t["ion-activatable"]=!0,t["ion-focusable"]=!0,t["fab-button-"+l]=void 0!==l,t))}},r.__stencil_render=function(){var t=this,r=Object(i.e)(this),o=void 0===this.href?"button":"a",e="button"===o?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target};return Object(i.i)(o,Object.assign({},e,{class:"button-native",disabled:this.disabled,onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(r){return Object(n.d)(t.href,r,t.routerDirection)}}),Object(i.i)("span",{class:"close-icon"},Object(i.i)("ion-icon",{name:"close",lazy:!1})),Object(i.i)("span",{class:"button-inner"},Object(i.i)("slot",null)),"md"===r&&Object(i.i)("ion-ripple-effect",null))},r.render=function(){return Object(i.i)(i.a,this.hostData(),this.__stencil_render())},_createClass(t,[{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"style",get:function(){return":host{--color-hover:var(--color);--background-hover:var(--ion-color-primary-tint,#4c8dff);--transition:background-color,opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.fab-button-disabled){opacity:.5;pointer-events:none}:host(.fab-button-disabled) .button-native{cursor:default;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color:hover) .button-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}:host(.ion-color.activated) .button-native,:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--background-activated);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--color-activated);--transition:0.2s transform cubic-bezier(0.25,1.11,0.78,1.59)}:host,:host(.activated){--box-shadow:0 4px 16px rgba(0,0,0,0.12)}:host(.activated){--transform:scale(1.1);--transition:0.2s transform ease-out}.close-icon,::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light,#f4f5f8);--background-activated:var(--ion-color-light-shade,#d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint,#f5f6f9);--color:var(--ion-color-light-contrast,#000);--color-activated:var(--ion-color-light-contrast,#000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms,opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.9);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.8);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb,244,245,248),0.9);--background-hover:rgba(var(--ion-color-light-rgb,244,245,248),0.8);--background-focused:rgba(var(--ion-color-light-rgb,244,245,248),0.82)}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){@media (any-hover:hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb),.9)}:host(.ion-color.activated.fab-button-translucent) .button-native,:host(.ion-color.ion-focused.fab-button-translucent) .button-native{background:var(--ion-color-base)}}"}}]),t}(),s=function(){function t(t){Object(i.m)(this,t),this.activated=!1,this.side="bottom"}var r=t.prototype;return r.activatedChanged=function(t){var r=Array.from(this.el.querySelectorAll("ion-fab-button")),o=t?30:0;r.forEach(function(r,i){setTimeout(function(){return r.show=t},i*o)})},r.hostData=function(){var t;return{class:(t={},t[Object(i.e)(this)]=!0,t["fab-list-active"]=this.activated,t["fab-list-side-"+this.side]=!0,t)}},r.__stencil_render=function(){return Object(i.i)("slot",null)},r.render=function(){return Object(i.i)(i.a,this.hostData(),this.__stencil_render())},_createClass(t,[{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"watchers",get:function(){return{activated:["activatedChanged"]}}},{key:"style",get:function(){return":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list),:host(.fab-list-side-top) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:5px;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;right:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-start){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-start,:host-context([dir=rtl]):host(.fab-list-side-start){left:unset;right:unset;left:0}:host(.fab-list-side-end){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;left:0;-ms-flex-direction:row;flex-direction:row}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-end,:host-context([dir=rtl]):host(.fab-list-side-end){left:unset;right:unset;right:0}"}}]),t}()}}]);