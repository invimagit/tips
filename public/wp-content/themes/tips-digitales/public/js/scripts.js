
jQuery(document).ready(function($)
{
	if(document.body.classList.contains( 'logged-in' ))
		$('.hideWhenLogged').hide();
});

(function(window,$){'use strict';
    
    function HoldOnAction(){
            if ("undefined"==typeof jQuery){
                throw new Error("HoldOn.js requires jQuery");
            }
            
            var _holdon = {};
            var _core = {};
            var _settings = {
                instanceProtection:null
            };
            
            /**
             * 
             * @param {type} properties
             * @returns {undefined}
             */
            _holdon.open = function(properties){
                var theme = "sk-rect";
                var content = "";
                var message = "";
                
                if (properties){
                    if (properties.hasOwnProperty("theme")){//Choose theme if given
                        theme = properties.theme;
                    }
                    
                    if (properties.hasOwnProperty("message")){//Choose theme if given
                        message = properties.message;
                    }
                }
                
                content = _core.getHtml(theme,properties);
                
                var Holder  = '<div id="holdon-overlay" style="display: none;">\n\
                                    <div id="holdon-content-container">\n\
                                        <div id="holdon-content">'+content+'</div>\n\
                                        <div id="holdon-message">'+message+'</div>\n\
                                    </div>\n\
                                </div>';
                
                // Remove protection and overlay before add the new one
                clearInterval(_settings.instanceProtection);
                $("#holdon-overlay").remove();
                
                $(Holder).appendTo('body').fadeIn(300);
                
                if (properties){
                    if (properties.backgroundColor){
                        $("#holdon-overlay").css("backgroundColor",properties.backgroundColor);
                    }
                    
                    if (properties.backgroundColor){
                        $("#holdon-message").css("color",properties.textColor);
                    }
                    
                    _core.protectInstance(properties);
                }
                
                return true;
            };
            
            /**
             * Closes the active instance of HoldOn
             * 
             * @returns {undefined}
             */
            _holdon.close = function(){
                if (document.getElementById('holdon-overlay')){
                    clearInterval(_settings.instanceProtection);

                    $('#holdon-overlay').fadeOut(300, function(){
                        $(this).remove();
                    });

                    _settings.instanceProtection = null;

                    return true;
                }
                
                return false;
            };
            
            
            /**
             * Activate remove protection for HoldOn.js
             * 
             * @param {type} properties
             * @returns {undefined}
             */
            _core.protectInstance = function(properties){
                var protection = setInterval(function(){
                    if (!document.getElementById('holdon-overlay')){
                        _holdon.open(properties);
                    }
                }, 100);
                
                console.log("hat");
                        
                _settings.instanceProtection = protection;
            };
            
            /**
             * Returns the html content with a given theme
             * 
             * @param {type} theme
             * @param {type} properties
             * @returns {String}
             */
            _core.getHtml = function(theme,properties){
                switch(theme){
                    case "custom":
                    return '<div style="text-align: center;">' + properties.content + "</div>";
                    case "sk-dot":
                    return '<div class="sk-dot"> <div class="sk-dot1"></div> <div class="sk-dot2"></div> </div>';
                    case "sk-rect":
                    return '<div class="sk-rect"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>';
                    case "sk-cube":
                    return '<div class="sk-cube"> <div class="sk-cube1"></div> <div class="sk-cube2"></div> </div>';
                    case "sk-bounce":
                    return '<div class="sk-bounce"> <div class="bounce1"></div> <div class="bounce2"></div> <div class="bounce3"></div> </div>';
                    case "sk-circle":
                    return '<div class="sk-circle"> <div class="sk-circle1 sk-child"></div> <div class="sk-circle2 sk-child"></div> <div class="sk-circle3 sk-child"></div> <div class="sk-circle4 sk-child"></div> <div class="sk-circle5 sk-child"></div> <div class="sk-circle6 sk-child"></div> <div class="sk-circle7 sk-child"></div> <div class="sk-circle8 sk-child"></div> <div class="sk-circle9 sk-child"></div> <div class="sk-circle10 sk-child"></div> <div class="sk-circle11 sk-child"></div> <div class="sk-circle12 sk-child"></div> </div>';
                    case "sk-cube-grid":
                    return '<div class="sk-cube-grid"> <div class="sk-cube-child sk-cube-grid1"></div> <div class="sk-cube-child sk-cube-grid2"></div> <div class="sk-cube-child sk-cube-grid3"></div> <div class="sk-cube-child sk-cube-grid4"></div> <div class="sk-cube-child sk-cube-grid5"></div> <div class="sk-cube-child sk-cube-grid6"></div> <div class="sk-cube-child sk-cube-grid7"></div> <div class="sk-cube-child sk-cube-grid8"></div> <div class="sk-cube-child sk-cube-grid9"></div> </div>';
                    case "sk-folding-cube":
                    return '<div class="sk-folding-cube"> <div class="sk-cubechild1 sk-cube-parent"></div> <div class="sk-cubechild2 sk-cube-parent"></div> <div class="sk-cubechild4 sk-cube-parent"></div> <div class="sk-cubechild3 sk-cube-parent"></div> </div>';
                    case "sk-fading-circle":
                    return '<div class="sk-fading-circle"> <div class="sk-fading-circle1 sk-circle-child"></div> <div class="sk-fading-circle2 sk-circle-child"></div> <div class="sk-fading-circle3 sk-circle-child"></div> <div class="sk-fading-circle4 sk-circle-child"></div> <div class="sk-fading-circle5 sk-circle-child"></div> <div class="sk-fading-circle6 sk-circle-child"></div> <div class="sk-fading-circle7 sk-circle-child"></div> <div class="sk-fading-circle8 sk-circle-child"></div> <div class="sk-fading-circle9 sk-circle-child"></div> <div class="sk-fading-circle10 sk-circle-child"></div> <div class="sk-fading-circle11 sk-circle-child"></div> <div class="sk-fading-circle12 sk-circle-child"></div> </div>';
                    default:
                    console.warn(theme + " doesn't exist for HoldOn.js");
                    return '<div class="sk-rect"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>';
                }
            };
            
            
        return _holdon;
    }
    
    if (typeof(HoldOn) === 'undefined'){
        window.HoldOn = HoldOnAction();
    }
    
})(window,jQuery);
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";var e={title:"",titleText:"",text:"",html:"",type:null,customClass:"",target:"body",animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:"#3085d6",confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:"#aaa",cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:500,padding:20,background:"#fff",input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,progressSteps:[],currentProgressStep:null,progressStepsDistance:"40px",onOpen:null,onClose:null,useRejections:!0},t=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},n=t(["container","shown","iosfix","modal","overlay","fade","show","hide","noanimation","close","title","content","buttonswrapper","confirm","cancel","icon","image","input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled"]),o=t(["success","warning","info","question","error"]),r=function(e,t){(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n="#",o=0;o<3;o++){var r=parseInt(e.substr(2*o,2),16);n+=("00"+(r=Math.round(Math.min(Math.max(0,r+r*t),255)).toString(16))).substr(r.length)}return n},i=function(e){var t=[];for(var n in e)-1===t.indexOf(e[n])&&t.push(e[n]);return t},a={previousWindowKeyDown:null,previousActiveElement:null,previousBodyPadding:null},l=function(e){var t=u();t&&t.parentNode.removeChild(t);{if("undefined"!=typeof document){var o=document.createElement("div");o.className=n.container,o.innerHTML=s,("string"==typeof e.target?document.querySelector(e.target):e.target).appendChild(o);var r=c(),i=E(r,n.input),a=E(r,n.file),l=r.querySelector("."+n.range+" input"),d=r.querySelector("."+n.range+" output"),p=E(r,n.select),f=r.querySelector("."+n.checkbox+" input"),m=E(r,n.textarea);return i.oninput=function(){Y.resetValidationError()},i.onkeydown=function(t){setTimeout(function(){13===t.keyCode&&e.allowEnterKey&&(t.stopPropagation(),Y.clickConfirm())},0)},a.onchange=function(){Y.resetValidationError()},l.oninput=function(){Y.resetValidationError(),d.value=l.value},l.onchange=function(){Y.resetValidationError(),l.previousSibling.value=l.value},p.onchange=function(){Y.resetValidationError()},f.onchange=function(){Y.resetValidationError()},m.oninput=function(){Y.resetValidationError()},r}console.error("SweetAlert2 requires document to initialize")}},s=('\n <div role="dialog" aria-labelledby="'+n.title+'" aria-describedby="'+n.content+'" class="'+n.modal+'" tabindex="-1">\n   <ul class="'+n.progresssteps+'"></ul>\n   <div class="'+n.icon+" "+o.error+'">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="'+n.icon+" "+o.question+'">?</div>\n   <div class="'+n.icon+" "+o.warning+'">!</div>\n   <div class="'+n.icon+" "+o.info+'">i</div>\n   <div class="'+n.icon+" "+o.success+'">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="'+n.image+'" />\n   <h2 class="'+n.title+'" id="'+n.title+'"></h2>\n   <div id="'+n.content+'" class="'+n.content+'"></div>\n   <input class="'+n.input+'" />\n   <input type="file" class="'+n.file+'" />\n   <div class="'+n.range+'">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="'+n.select+'"></select>\n   <div class="'+n.radio+'"></div>\n   <label for="'+n.checkbox+'" class="'+n.checkbox+'">\n     <input type="checkbox" />\n   </label>\n   <textarea class="'+n.textarea+'"></textarea>\n   <div class="'+n.validationerror+'" id="'+n.validationerror+'"></div>\n   <div class="'+n.buttonswrapper+'">\n     <button type="button" class="'+n.confirm+'">OK</button>\n     <button type="button" class="'+n.cancel+'">Cancel</button>\n   </div>\n   <button type="button" class="'+n.close+'">×</button>\n </div>\n').replace(/(^|\n)\s*/g,""),u=function(){return document.body.querySelector("."+n.container)},c=function(){return u()?u().querySelector("."+n.modal):null},d=function(){return c().querySelectorAll("."+n.icon)},p=function(e){return u()?u().querySelector("."+e):null},f=function(){return p(n.title)},m=function(){return p(n.content)},v=function(){return p(n.image)},h=function(){return p(n.buttonswrapper)},b=function(){return p(n.progresssteps)},y=function(){return p(n.validationerror)},g=function(){return p(n.confirm)},w=function(){return p(n.cancel)},C=function(){return p(n.close)},x=function(){var e=Array.from(c().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),t=parseInt(t.getAttribute("tabindex")),e>t?1:e<t?-1:0}),t=Array.prototype.slice.call(c().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));return i(e.concat(t))},k=function(e,t){return!!e.classList&&e.classList.contains(t)},S=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},A=function(e,t){e&&t&&t.split(/\s+/).filter(Boolean).forEach(function(t){e.classList.add(t)})},B=function(e,t){e&&t&&t.split(/\s+/).filter(Boolean).forEach(function(t){e.classList.remove(t)})},E=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(k(e.childNodes[n],t))return e.childNodes[n]},P=function(e,t){t||(t="block"),e.style.opacity="",e.style.display=t},L=function(e){e.style.opacity="",e.style.display="none"},T=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},q=function(e){return e.offsetWidth||e.offsetHeight||e.getClientRects().length},V=function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)},M=function(){var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),O=function(){if(window.onkeydown=a.previousWindowKeyDown,a.previousActiveElement&&a.previousActiveElement.focus){var e=window.scrollX,t=window.scrollY;a.previousActiveElement.focus(),e&&t&&window.scrollTo(e,t)}},H=function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},N=function(e,t){var n=void 0;return function(){clearTimeout(n),n=setTimeout(function(){n=null,e()},t)}},j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I=(function(){function e(e){this.value=e}function t(t){function n(r,i){try{var a=t[r](i),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(e,t){return new Promise(function(o,a){var l={key:e,arg:t,resolve:o,reject:a,next:null};i?i=i.next=l:(r=i=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),R=I({},e),K=[],W=void 0,D=function(e){("string"==typeof e.target&&!document.querySelector(e.target)||"string"!=typeof e.target&&!e.target.appendChild)&&(console.warn('SweetAlert2: Target parameter is not valid, defaulting to "body"'),e.target="body");var t=void 0,r=c(),i="string"==typeof e.target?document.querySelector(e.target):e.target;t=r&&i&&r.parentNode!==i.parentNode?l(e):r||l(e);for(var a in e)Y.isValidParameter(a)||console.warn('SweetAlert2: Unknown parameter "'+a+'"');t.style.width="number"==typeof e.width?e.width+"px":e.width,t.style.padding=e.padding+"px",t.style.background=e.background;for(var s=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),u=0;u<s.length;u++)s[u].style.background=e.background;var p=f(),y=m(),x=h(),k=g(),S=w(),E=C();if(e.titleText?p.innerText=e.titleText:p.innerHTML=e.title.split("\n").join("<br />"),e.text||e.html){if("object"===j(e.html))if(y.innerHTML="",0 in e.html)for(var q=0;q in e.html;q++)y.appendChild(e.html[q].cloneNode(!0));else y.appendChild(e.html.cloneNode(!0));else e.html?y.innerHTML=e.html:e.text&&(y.textContent=e.text);P(y)}else L(y);e.showCloseButton?(E.setAttribute("aria-label",e.closeButtonAriaLabel),P(E)):L(E),t.className=n.modal,e.customClass&&A(t,e.customClass);var M=b(),O=parseInt(null===e.currentProgressStep?Y.getQueueStep():e.currentProgressStep,10);e.progressSteps.length?(P(M),T(M),O>=e.progressSteps.length&&console.warn("SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach(function(t,o){var r=document.createElement("li");if(A(r,n.progresscircle),r.innerHTML=t,o===O&&A(r,n.activeprogressstep),M.appendChild(r),o!==e.progressSteps.length-1){var i=document.createElement("li");A(i,n.progressline),i.style.width=e.progressStepsDistance,M.appendChild(i)}})):L(M);for(var H=d(),N=0;N<H.length;N++)L(H[N]);if(e.type){var I=!1;for(var R in o)if(e.type===R){I=!0;break}if(!I)return console.error("SweetAlert2: Unknown alert type: "+e.type),!1;var K=t.querySelector("."+n.icon+"."+o[e.type]);if(P(K),e.animation)switch(e.type){case"success":A(K,"swal2-animate-success-icon"),A(K.querySelector(".swal2-success-line-tip"),"swal2-animate-success-line-tip"),A(K.querySelector(".swal2-success-line-long"),"swal2-animate-success-line-long");break;case"error":A(K,"swal2-animate-error-icon"),A(K.querySelector(".swal2-x-mark"),"swal2-animate-x-mark")}}var W=v();e.imageUrl?(W.setAttribute("src",e.imageUrl),W.setAttribute("alt",e.imageAlt),P(W),e.imageWidth?W.setAttribute("width",e.imageWidth):W.removeAttribute("width"),e.imageHeight?W.setAttribute("height",e.imageHeight):W.removeAttribute("height"),W.className=n.image,e.imageClass&&A(W,e.imageClass)):L(W),e.showCancelButton?S.style.display="inline-block":L(S),e.showConfirmButton?V(k,"display"):L(k),e.showConfirmButton||e.showCancelButton?P(x):L(x),k.innerHTML=e.confirmButtonText,S.innerHTML=e.cancelButtonText,k.setAttribute("aria-label",e.confirmButtonAriaLabel),S.setAttribute("aria-label",e.cancelButtonAriaLabel),e.buttonsStyling&&(k.style.backgroundColor=e.confirmButtonColor,S.style.backgroundColor=e.cancelButtonColor),k.className=n.confirm,A(k,e.confirmButtonClass),S.className=n.cancel,A(S,e.cancelButtonClass),e.buttonsStyling?(A(k,n.styled),A(S,n.styled)):(B(k,n.styled),B(S,n.styled),k.style.backgroundColor=k.style.borderLeftColor=k.style.borderRightColor="",S.style.backgroundColor=S.style.borderLeftColor=S.style.borderRightColor=""),!0===e.animation?B(t,n.noanimation):A(t,n.noanimation),e.showLoaderOnConfirm&&!e.preConfirm&&console.warn("SweetAlert2: showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://limonte.github.io/sweetalert2/#ajax-request")},U=function(e,t){var o=u(),r=c();e?(A(r,n.show),A(o,n.fade),B(r,n.hide)):B(r,n.fade),P(r),o.style.overflowY="hidden",M&&!k(r,n.noanimation)?r.addEventListener(M,function e(){r.removeEventListener(M,e),o.style.overflowY="auto"}):o.style.overflowY="auto",A(document.documentElement,n.shown),A(document.body,n.shown),A(o,n.shown),z(),Z(),a.previousActiveElement=document.activeElement,null!==t&&"function"==typeof t&&setTimeout(function(){t(r)})},z=function(){null===a.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(a.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=H()+"px")},_=function(){null!==a.previousBodyPadding&&(document.body.style.paddingRight=a.previousBodyPadding,a.previousBodyPadding=null)},Z=function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!k(document.body,n.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",A(document.body,n.iosfix)}},Q=function(){if(k(document.body,n.iosfix)){var e=parseInt(document.body.style.top,10);B(document.body,n.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},Y=function e(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];if(void 0===o[0])return console.error("SweetAlert2 expects at least 1 attribute!"),!1;var l=I({},R);switch(j(o[0])){case"string":l.title=o[0],l.html=o[1],l.type=o[2];break;case"object":I(l,o[0]),l.extraParams=o[0].extraParams,"email"===l.input&&null===l.inputValidator&&(l.inputValidator=function(e){return new Promise(function(t,n){/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(e)?t():n("Invalid email address")})}),"url"===l.input&&null===l.inputValidator&&(l.inputValidator=function(e){return new Promise(function(t,n){/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?t():n("Invalid URL")})});break;default:return console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got '+j(o[0])),!1}D(l);var s=u(),d=c();return new Promise(function(t,o){l.timer&&(d.timeout=setTimeout(function(){e.closeModal(l.onClose),l.useRejections?o("timer"):t({dismiss:"timer"})},l.timer));var i=function(e){if(!(e=e||l.input))return null;switch(e){case"select":case"textarea":case"file":return E(d,n[e]);case"checkbox":return d.querySelector("."+n.checkbox+" input");case"radio":return d.querySelector("."+n.radio+" input:checked")||d.querySelector("."+n.radio+" input:first-child");case"range":return d.querySelector("."+n.range+" input");default:return E(d,n.input)}},p=function(){var e=i();if(!e)return null;switch(l.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return l.inputAutoTrim?e.value.trim():e.value}};l.input&&setTimeout(function(){var e=i();e&&S(e)},0);for(var k=function(n){l.showLoaderOnConfirm&&e.showLoading(),l.preConfirm?l.preConfirm(n,l.extraParams).then(function(o){e.closeModal(l.onClose),t(o||n)},function(t){e.hideLoading(),t&&e.showValidationError(t)}):(e.closeModal(l.onClose),t(l.useRejections?n:{value:n}))},T=function(n){var i=n||window.event,a=i.target||i.srcElement,s=g(),u=w(),c=s&&(s===a||s.contains(a)),d=u&&(u===a||u.contains(a));switch(i.type){case"mouseover":case"mouseup":l.buttonsStyling&&(c?s.style.backgroundColor=r(l.confirmButtonColor,-.1):d&&(u.style.backgroundColor=r(l.cancelButtonColor,-.1)));break;case"mouseout":l.buttonsStyling&&(c?s.style.backgroundColor=l.confirmButtonColor:d&&(u.style.backgroundColor=l.cancelButtonColor));break;case"mousedown":l.buttonsStyling&&(c?s.style.backgroundColor=r(l.confirmButtonColor,-.2):d&&(u.style.backgroundColor=r(l.cancelButtonColor,-.2)));break;case"click":if(c&&e.isVisible())if(e.disableButtons(),l.input){var f=p();l.inputValidator?(e.disableInput(),l.inputValidator(f,l.extraParams).then(function(){e.enableButtons(),e.enableInput(),k(f)},function(t){e.enableButtons(),e.enableInput(),t&&e.showValidationError(t)})):k(f)}else k(!0);else d&&e.isVisible()&&(e.disableButtons(),e.closeModal(l.onClose),l.useRejections?o("cancel"):t({dismiss:"cancel"}))}},V=d.querySelectorAll("button"),M=0;M<V.length;M++)V[M].onclick=T,V[M].onmouseover=T,V[M].onmouseout=T,V[M].onmousedown=T;C().onclick=function(){e.closeModal(l.onClose),l.useRejections?o("close"):t({dismiss:"close"})},s.onclick=function(n){n.target===s&&l.allowOutsideClick&&(e.closeModal(l.onClose),l.useRejections?o("overlay"):t({dismiss:"overlay"}))};var O=h(),H=g(),I=w();l.reverseButtons?H.parentNode.insertBefore(I,H):H.parentNode.insertBefore(H,I);var R=function(e,t){for(var n=x(l.focusCancel),o=0;o<n.length;o++){(e+=t)===n.length?e=0:-1===e&&(e=n.length-1);var r=n[e];if(q(r))return r.focus()}},K=function(n){var r=n||window.event,i=r.keyCode||r.which;if(-1!==[9,13,32,27,37,38,39,40].indexOf(i)){for(var a=r.target||r.srcElement,s=x(l.focusCancel),u=-1,c=0;c<s.length;c++)if(a===s[c]){u=c;break}9===i?(r.shiftKey?R(u,-1):R(u,1),r.stopPropagation(),r.preventDefault()):37===i||38===i||39===i||40===i?document.activeElement===H&&q(I)?I.focus():document.activeElement===I&&q(H)&&H.focus():27===i&&!0===l.allowEscapeKey&&(e.closeModal(l.onClose),l.useRejections?o("esc"):t({dismiss:"esc"}))}};window.onkeydown&&window.onkeydown.toString()===K.toString()||(a.previousWindowKeyDown=window.onkeydown,window.onkeydown=K),l.buttonsStyling&&(H.style.borderLeftColor=l.confirmButtonColor,H.style.borderRightColor=l.confirmButtonColor),e.hideLoading=e.disableLoading=function(){l.showConfirmButton||(L(H),l.showCancelButton||L(h())),B(O,n.loading),B(d,n.loading),d.removeAttribute("aria-busy"),H.disabled=!1,I.disabled=!1},e.getTitle=function(){return f()},e.getContent=function(){return m()},e.getInput=function(){return i()},e.getImage=function(){return v()},e.getButtonsWrapper=function(){return h()},e.getConfirmButton=function(){return g()},e.getCancelButton=function(){return w()},e.enableButtons=function(){H.disabled=!1,I.disabled=!1},e.disableButtons=function(){H.disabled=!0,I.disabled=!0},e.enableConfirmButton=function(){H.disabled=!1},e.disableConfirmButton=function(){H.disabled=!0},e.enableInput=function(){var e=i();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},e.disableInput=function(){var e=i();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},e.recalculateHeight=N(function(){var e=c();if(e){var t=e.style.display;e.style.minHeight="",P(e),e.style.minHeight=e.scrollHeight+1+"px",e.style.display=t}},50),e.showValidationError=function(e){var t=y();t.innerHTML=e,P(t);var o=i();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",n.validationerror),S(o),A(o,n.inputerror))},e.resetValidationError=function(){var t=y();L(t),e.recalculateHeight();var o=i();o&&(o.removeAttribute("aria-invalid"),o.removeAttribute("aria-describedBy"),B(o,n.inputerror))},e.getProgressSteps=function(){return l.progressSteps},e.setProgressSteps=function(e){l.progressSteps=e,D(l)},e.showProgressSteps=function(){P(b())},e.hideProgressSteps=function(){L(b())},e.enableButtons(),e.hideLoading(),e.resetValidationError();for(var z=["input","file","range","select","radio","checkbox","textarea"],_=void 0,Z=0;Z<z.length;Z++){var Q=n[z[Z]],Y=E(d,Q);if(_=i(z[Z])){for(var $ in _.attributes)if(_.attributes.hasOwnProperty($)){var J=_.attributes[$].name;"type"!==J&&"value"!==J&&_.removeAttribute(J)}for(var X in l.inputAttributes)_.setAttribute(X,l.inputAttributes[X])}Y.className=Q,l.inputClass&&A(Y,l.inputClass),L(Y)}var F=void 0;switch(l.input){case"text":case"email":case"password":case"number":case"tel":case"url":(_=E(d,n.input)).value=l.inputValue,_.placeholder=l.inputPlaceholder,_.type=l.input,P(_);break;case"file":(_=E(d,n.file)).placeholder=l.inputPlaceholder,_.type=l.input,P(_);break;case"range":var G=E(d,n.range),ee=G.querySelector("input"),te=G.querySelector("output");ee.value=l.inputValue,ee.type=l.input,te.value=l.inputValue,P(G);break;case"select":var ne=E(d,n.select);if(ne.innerHTML="",l.inputPlaceholder){var oe=document.createElement("option");oe.innerHTML=l.inputPlaceholder,oe.value="",oe.disabled=!0,oe.selected=!0,ne.appendChild(oe)}F=function(e){for(var t in e){var n=document.createElement("option");n.value=t,n.innerHTML=e[t],l.inputValue===t&&(n.selected=!0),ne.appendChild(n)}P(ne),ne.focus()};break;case"radio":var re=E(d,n.radio);re.innerHTML="",F=function(e){for(var t in e){var o=document.createElement("input"),r=document.createElement("label"),i=document.createElement("span");o.type="radio",o.name=n.radio,o.value=t,l.inputValue===t&&(o.checked=!0),i.innerHTML=e[t],r.appendChild(o),r.appendChild(i),r.for=o.id,re.appendChild(r)}P(re);var a=re.querySelectorAll("input");a.length&&a[0].focus()};break;case"checkbox":var ie=E(d,n.checkbox),ae=i("checkbox");ae.type="checkbox",ae.value=1,ae.id=n.checkbox,ae.checked=Boolean(l.inputValue);var le=ie.getElementsByTagName("span");le.length&&ie.removeChild(le[0]),(le=document.createElement("span")).innerHTML=l.inputPlaceholder,ie.appendChild(le),P(ie);break;case"textarea":var se=E(d,n.textarea);se.value=l.inputValue,se.placeholder=l.inputPlaceholder,P(se);break;case null:break;default:console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'+l.input+'"')}"select"!==l.input&&"radio"!==l.input||(l.inputOptions instanceof Promise?(e.showLoading(),l.inputOptions.then(function(t){e.hideLoading(),F(t)})):"object"===j(l.inputOptions)?F(l.inputOptions):console.error("SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got "+j(l.inputOptions))),U(l.animation,l.onOpen),l.allowEnterKey?l.focusCancel&&q(I)?I.focus():l.focusConfirm&&q(H)?H.focus():R(-1,1):document.activeElement&&document.activeElement.blur(),u().scrollTop=0,"undefined"==typeof MutationObserver||W||(W=new MutationObserver(e.recalculateHeight)).observe(d,{childList:!0,characterData:!0,subtree:!0})})};return Y.isVisible=function(){return!!c()},Y.queue=function(e){K=e;var t=function(){K=[],document.body.removeAttribute("data-swal2-queue-step")},n=[];return new Promise(function(e,o){!function r(i,a){i<K.length?(document.body.setAttribute("data-swal2-queue-step",i),Y(K[i]).then(function(e){n.push(e),r(i+1,a)},function(e){t(),o(e)})):(t(),e(n))}(0)})},Y.getQueueStep=function(){return document.body.getAttribute("data-swal2-queue-step")},Y.insertQueueStep=function(e,t){return t&&t<K.length?K.splice(t,0,e):K.push(e)},Y.deleteQueueStep=function(e){void 0!==K[e]&&K.splice(e,1)},Y.close=Y.closeModal=function(e){var t=u(),o=c();if(o){B(o,n.show),A(o,n.hide),clearTimeout(o.timeout),O();var r=function(){t.parentNode&&t.parentNode.removeChild(t),B(document.documentElement,n.shown),B(document.body,n.shown),_(),Q()};M&&!k(o,n.noanimation)?o.addEventListener(M,function e(){o.removeEventListener(M,e),k(o,n.hide)&&r()}):r(),null!==e&&"function"==typeof e&&setTimeout(function(){e(o)})}},Y.clickConfirm=function(){return g().click()},Y.clickCancel=function(){return w().click()},Y.showLoading=Y.enableLoading=function(){var e=c();e||Y(""),e=c();var t=h(),o=g(),r=w();P(t),P(o,"inline-block"),A(t,n.loading),A(e,n.loading),o.disabled=!0,r.disabled=!0,e.setAttribute("aria-busy",!0),e.focus()},Y.isValidParameter=function(t){return e.hasOwnProperty(t)||"extraParams"===t},Y.setDefaults=function(e){if(!e||"object"!==(void 0===e?"undefined":j(e)))return console.error("SweetAlert2: the argument for setDefaults() is required and has to be a object");for(var t in e)Y.isValidParameter(t)||(console.warn('SweetAlert2: Unknown parameter "'+t+'"'),delete e[t]);I(R,e)},Y.resetDefaults=function(){R=I({},e)},Y.noop=function(){},Y.version="6.9.0",Y.default=Y,Y}),window.Sweetalert2&&(window.sweetAlert=window.swal=window.Sweetalert2);
/*!
 * jQuery Validation Plugin v1.19.5
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2022 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			isContentEditable = typeof this.attr( "contenteditable" ) !== "undefined" && this.attr( "contenteditable" ) !== "false",
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// JQuery trim is deprecated, provide a trim method based on String.prototype.trim
var trim = function( str ) {

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
	return str.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "" );
};

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				// Set form expando on contenteditable
				if ( !this.form && isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				// Ignore the element if it belongs to another form. This will happen mainly
				// when setting the `form` attribute of an input to the id of another form.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.trigger( "focus" )

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Ignore elements that belong to other/nested forms
				if ( this.form !== validator.currentForm ) {
					return false;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				isContentEditable = typeof $element.attr( "contenteditable" ) !== "undefined" && $element.attr( "contenteditable" ) !== "false",
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			if ( string === undefined ) {
				return "";
			}

			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() && this.pendingRequest === 0 ) {
				$( this.currentForm ).trigger( "submit" );

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ type === "date" ? "dateISO" : method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

			// Cast empty attributes like `data-rule-required` to `true`
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = typeof parameter === "function" && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( Array.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));
/*!
 * Bootstrap-select v1.14.0-beta3 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2022 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */
!function(e,t){void 0===e&&void 0!==window&&(e=window),"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){!function($){"use strict";var M=["sanitize","whiteList","sanitizeFn"],W=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],P={"*":["class","dir","id","lang","role","tabindex","style",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},B=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,R=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,U=["title","placeholder"];function S(e,t,i){if(i&&"function"==typeof i)return i(e);for(var s=Object.keys(t),n=0,o=e.length;n<o;n++)for(var l=e[n].querySelectorAll("*"),r=0,a=l.length;r<a;r++){var c=l[r],d=c.nodeName.toLowerCase();if(-1===s.indexOf(d))c.parentNode.removeChild(c);else for(var h=[].slice.call(c.attributes),p=[].concat(t["*"]||[],t[d]||[]),u=0,f=h.length;u<f;u++){var m=h[u];!function(e,t){var i=e.nodeName.toLowerCase();if(-1!==$.inArray(i,t))return-1===$.inArray(i,W)||Boolean(e.nodeValue.match(B)||e.nodeValue.match(R));for(var s=$(t).filter(function(e,t){return t instanceof RegExp}),n=0,o=s.length;n<o;n++)if(i.match(s[n]))return 1}(m,p)&&c.removeAttribute(m.nodeName)}}}function d(t){var i,s={};return U.forEach(function(e){(i=t.attr(e))&&(s[e]=i)}),!s.placeholder&&s.title&&(s.placeholder=s.title),s}if(!("classList"in document.createElement("_"))&&"Element"in(i=window)){var t="classList",e="prototype",i=i.Element[e],s=Object,n=function(){var i=$(this);return{add:function(e){return e=Array.prototype.slice.call(arguments).join(" "),i.addClass(e)},remove:function(e){return e=Array.prototype.slice.call(arguments).join(" "),i.removeClass(e)},toggle:function(e,t){return i.toggleClass(e,t)},contains:function(e){return i.hasClass(e)}}};if(s.defineProperty){var o={get:n,enumerable:!0,configurable:!0};try{s.defineProperty(i,t,o)}catch(e){void 0!==e.number&&-2146823252!==e.number||(o.enumerable=!1,s.defineProperty(i,t,o))}}else s[e].__defineGetter__&&i.__defineGetter__(t,n)}var l,r,a,c,o=document.createElement("_");function h(e){if(null==this)throw new TypeError;var t=String(this);if(e&&"[object RegExp]"==c.call(e))throw new TypeError;var i=t.length,s=String(e),n=s.length,e=1<arguments.length?arguments[1]:void 0,e=e?Number(e):0,o=(e!=e&&(e=0),Math.min(Math.max(e,0),i));if(i<n+o)return!1;for(var l=-1;++l<n;)if(t.charCodeAt(o+l)!=s.charCodeAt(l))return!1;return!0}function y(){var e=this.selectpicker.main.data,t=(e=this.options.source.data||this.options.source.search?Object.values(this.selectpicker.optionValuesDataMap):e).filter(function(e){return!!e.selected&&(!this.options.hideDisabled||!e.disabled)},this);if(this.options.source.data&&!this.multiple&&1<t.length){for(var i=0;i<t.length-1;i++)t[i].selected=!1;t=[t[t.length-1]]}return t}function x(e){for(var t,i=[],s=e||y.call(this),n=0,o=s.length;n<o;n++)(t=s[n]).disabled||i.push(void 0===t.value?t.text:t.value);return this.multiple?i:i.length?i[0]:null}o.classList.add("c1","c2"),o.classList.contains("c2")||(l=DOMTokenList.prototype.add,r=DOMTokenList.prototype.remove,DOMTokenList.prototype.add=function(){Array.prototype.forEach.call(arguments,l.bind(this))},DOMTokenList.prototype.remove=function(){Array.prototype.forEach.call(arguments,r.bind(this))}),o.classList.toggle("c3",!1),o.classList.contains("c3")&&(a=DOMTokenList.prototype.toggle,DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:a.call(this,e)}),o=null,Object.values="function"==typeof Object.values?Object.values:function(t){return Object.keys(t).map(function(e){return t[e]})},String.prototype.startsWith||(c={}.toString,Object.defineProperty?Object.defineProperty(String.prototype,"startsWith",{value:h,configurable:!0,writable:!0}):String.prototype.startsWith=h);var p={useDefault:!1,_set:$.valHooks.select.set},E=($.valHooks.select.set=function(e,t){return t&&!p.useDefault&&$(e).data("selected",!0),p._set.apply(this,arguments)},null),V=function(){try{return new Event("change"),!0}catch(e){return!1}}();function b(e,t,i,s){for(var n=["display","subtext","tokens"],o=!1,l=0;l<n.length;l++){var r=n[l],a=e[r];if(a&&(a=a.toString(),"display"===r&&(a=a.replace(/<[^>]+>/g,"")),a=(a=s?u(a):a).toUpperCase(),o="function"==typeof i?i(a,t):"contains"===i?0<=a.indexOf(t):a.startsWith(t)))break}return o}function v(e){return parseInt(e,10)||0}$.fn.triggerNative=function(e){var t,i=this[0];i.dispatchEvent&&(V?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event")).initEvent(e,!0,!1),i.dispatchEvent(t))};var j={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},_=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,F=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]","g");function G(e){return j[e]}function u(e){return(e=e.toString())&&e.replace(_,G).replace(F,"")}f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},s="(?:"+Object.keys(f).join("|")+")",q=RegExp(s),K=RegExp(s,"g");var f,q,K,k=function(e){return q.test(e=null==e?"":""+e)?e.replace(K,Q):e};function Q(e){return f[e]}var Y={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},Z=27,J=13,w=32,I=9,C=38,O=40,m=window.Dropdown||bootstrap.Dropdown;function X(){var t;try{t=$.fn.dropdown.Constructor.VERSION}catch(e){t=m.VERSION}return t}var g={success:!1,major:"3"};try{g.full=(X()||"").split(" ")[0].split("."),g.major=g.full[0],g.success=!0}catch(e){}var ee=0,A=".bs.select",T={DISABLED:"disabled",DIVIDER:"divider",SHOW:"open",DROPUP:"dropup",MENU:"dropdown-menu",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",BUTTONCLASS:"btn-default",POPOVERHEADER:"popover-title",ICONBASE:"glyphicon",TICKICON:"glyphicon-ok"},z={MENU:"."+T.MENU,DATA_TOGGLE:'data-toggle="dropdown"'},D={div:document.createElement("div"),span:document.createElement("span"),i:document.createElement("i"),subtext:document.createElement("small"),a:document.createElement("a"),li:document.createElement("li"),whitespace:document.createTextNode("\xa0"),fragment:document.createDocumentFragment(),option:document.createElement("option")},te=(D.selectedOption=D.option.cloneNode(!1),D.selectedOption.setAttribute("selected",!0),D.noResults=D.li.cloneNode(!1),D.noResults.className="no-results",D.a.setAttribute("role","option"),D.a.className="dropdown-item",D.subtext.className="text-muted",D.text=D.span.cloneNode(!1),D.text.className="text",D.checkMark=D.span.cloneNode(!1),new RegExp(C+"|"+O)),ie=new RegExp("^"+I+"$|"+Z),L={li:function(e,t,i){var s=D.li.cloneNode(!1);return e&&(1===e.nodeType||11===e.nodeType?s.appendChild(e):s.innerHTML=e),void 0!==t&&""!==t&&(s.className=t),null!=i&&s.classList.add("optgroup-"+i),s},a:function(e,t,i){var s=D.a.cloneNode(!0);return e&&(11===e.nodeType?s.appendChild(e):s.insertAdjacentHTML("beforeend",e)),void 0!==t&&""!==t&&s.classList.add.apply(s.classList,t.split(/\s+/)),i&&s.setAttribute("style",i),s},text:function(e,t){var i,s,n=D.text.cloneNode(!1);if(e.content?n.innerHTML=e.content:(n.textContent=e.text,e.icon&&(i=D.whitespace.cloneNode(!1),(s=(!0===t?D.i:D.span).cloneNode(!1)).className=this.options.iconBase+" "+e.icon,D.fragment.appendChild(s),D.fragment.appendChild(i)),e.subtext&&((s=D.subtext.cloneNode(!1)).textContent=e.subtext,n.appendChild(s))),!0===t)for(;0<n.childNodes.length;)D.fragment.appendChild(n.childNodes[0]);else D.fragment.appendChild(n);return D.fragment},label:function(e){var t,i,s=D.text.cloneNode(!1);return s.innerHTML=e.display,e.icon&&(t=D.whitespace.cloneNode(!1),(i=D.span.cloneNode(!1)).className=this.options.iconBase+" "+e.icon,D.fragment.appendChild(i),D.fragment.appendChild(t)),e.subtext&&((i=D.subtext.cloneNode(!1)).textContent=e.subtext,s.appendChild(i)),D.fragment.appendChild(s),D.fragment}},N={fromOption:function(e,t){var i;switch(t){case"divider":i="true"===e.getAttribute("data-divider");break;case"text":i=e.textContent;break;case"label":i=e.label;break;case"style":i=e.style.cssText;break;case"title":i=e.title;break;default:i=e.getAttribute("data-"+t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,function(e,t){return(t?"-":"")+e.toLowerCase()}))}return i},fromDataSource:function(e,t){var i;switch(t){case"text":case"label":i=e.text||e.value||"";break;default:i=e[t]}return i}};function se(e,t){e.length||(D.noResults.innerHTML=this.options.noneResultsText.replace("{0}",'"'+k(t)+'"'),this.$menuInner[0].firstChild.appendChild(D.noResults))}function ne(e){return!(e.hidden||this.options.hideDisabled&&e.disabled)}function H(e,t){var i=this;p.useDefault||($.valHooks.select.set=p._set,p.useDefault=!0),this.$element=$(e),this.$newElement=null,this.$button=null,this.$menu=null,this.options=t,this.selectpicker={main:{data:[],optionQueue:D.fragment.cloneNode(!1),hasMore:!1},search:{data:[],hasMore:!1},current:{},view:{},optionValuesDataMap:{},isSearching:!1,keydown:{keyHistory:"",resetKeyHistory:{start:function(){return setTimeout(function(){i.selectpicker.keydown.keyHistory=""},800)}}}},this.sizeInfo={},"number"==typeof(e=this.options.windowPadding)&&(this.options.windowPadding=[e,e,e,e]),this.val=H.prototype.val,this.render=H.prototype.render,this.refresh=H.prototype.refresh,this.setStyle=H.prototype.setStyle,this.selectAll=H.prototype.selectAll,this.deselectAll=H.prototype.deselectAll,this.destroy=H.prototype.destroy,this.remove=H.prototype.remove,this.show=H.prototype.show,this.hide=H.prototype.hide,this.init()}function oe(e){var r,a=arguments,c=e;if([].shift.apply(a),!g.success){try{g.full=(X()||"").split(" ")[0].split(".")}catch(e){H.BootstrapVersion?g.full=H.BootstrapVersion.split(" ")[0].split("."):(g.full=[g.major,"0","0"],console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",e))}g.major=g.full[0],g.success=!0}if("4"<=g.major){var t=[];H.DEFAULTS.style===T.BUTTONCLASS&&t.push({name:"style",className:"BUTTONCLASS"}),H.DEFAULTS.iconBase===T.ICONBASE&&t.push({name:"iconBase",className:"ICONBASE"}),H.DEFAULTS.tickIcon===T.TICKICON&&t.push({name:"tickIcon",className:"TICKICON"}),T.DIVIDER="dropdown-divider",T.SHOW="show",T.BUTTONCLASS="btn-light",T.POPOVERHEADER="popover-header",T.ICONBASE="",T.TICKICON="bs-ok-default";for(var i=0;i<t.length;i++){e=t[i];H.DEFAULTS[e.name]=T[e.className]}}"4"<g.major&&(z.DATA_TOGGLE='data-bs-toggle="dropdown"');var s=this.each(function(){var e=$(this);if(e.is("select")){var t=e.data("selectpicker"),i="object"==typeof c&&c;if(i.title&&(i.placeholder=i.title),t){if(i)for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t.options[s]=i[s])}else{var n,o=e.data();for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&-1!==$.inArray(n,M)&&delete o[n];var l=$.extend({},H.DEFAULTS,$.fn.selectpicker.defaults||{},d(e),o,i);l.template=$.extend({},H.DEFAULTS.template,$.fn.selectpicker.defaults?$.fn.selectpicker.defaults.template:{},o.template,i.template),l.source=$.extend({},H.DEFAULTS.source,$.fn.selectpicker.defaults?$.fn.selectpicker.defaults.source:{},i.source),e.data("selectpicker",t=new H(this,l))}"string"==typeof c&&(r=t[c]instanceof Function?t[c].apply(t,a):t.options[c])}});return void 0!==r?r:s}H.VERSION="1.14.0-beta3",H.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",source:{pageSize:40},chunkSize:40,doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:T.BUTTONCLASS,size:"auto",title:null,placeholder:null,allowClear:!1,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:T.ICONBASE,tickIcon:T.TICKICON,showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!0,dropdownAlignRight:!1,windowPadding:0,virtualScroll:600,display:!1,sanitize:!0,sanitizeFn:null,whiteList:P},H.prototype={constructor:H,init:function(){var i=this,e=this.$element.attr("id"),t=this.$element[0],s=t.form;ee++,this.selectId="bs-select-"+ee,t.classList.add("bs-select-hidden"),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),t.classList.contains("show-tick")&&(this.options.showTick=!0),this.$newElement=this.createDropdown(),this.$element.after(this.$newElement).prependTo(this.$newElement),s&&null===t.form&&(s.id||(s.id="form-"+this.selectId),t.setAttribute("form",s.id)),this.$button=this.$newElement.children("button"),this.options.allowClear&&(this.$clearButton=this.$button.children(".bs-select-clear-selected")),this.$menu=this.$newElement.children(z.MENU),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),t.classList.remove("bs-select-hidden"),this.fetchData(function(){i.render(!0),i.buildList(),requestAnimationFrame(function(){i.$element.trigger("loaded"+A)})}),!0===this.options.dropdownAlignRight&&this.$menu[0].classList.add(T.MENURIGHT),void 0!==e&&this.$button.attr("data-id",e),this.checkDisabled(),this.clickListener(),4<g.major&&(this.dropdown=new m(this.$button[0])),this.options.liveSearch?(this.liveSearchListener(),this.focusedParent=this.$searchbox[0]):this.focusedParent=this.$menuInner[0],this.setStyle(),this.setWidth(),this.options.container?this.selectPosition():this.$element.on("hide"+A,function(){var e,t;i.isVirtual()&&(t=(e=i.$menuInner[0]).firstChild.cloneNode(!1),e.replaceChild(t,e.firstChild),e.scrollTop=0)}),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){i.$element.trigger("hide"+A,e)},"hidden.bs.dropdown":function(e){i.$element.trigger("hidden"+A,e)},"show.bs.dropdown":function(e){i.$element.trigger("show"+A,e)},"shown.bs.dropdown":function(e){i.$element.trigger("shown"+A,e)}}),t.hasAttribute("required")&&this.$element.on("invalid"+A,function(){i.$button[0].classList.add("bs-invalid"),i.$element.on("shown"+A+".invalid",function(){i.$element.val(i.$element.val()).off("shown"+A+".invalid")}).on("rendered"+A,function(){this.validity.valid&&i.$button[0].classList.remove("bs-invalid"),i.$element.off("rendered"+A)}),i.$button.on("blur"+A,function(){i.$element.trigger("focus").trigger("blur"),i.$button.off("blur"+A)})}),s&&$(s).on("reset"+A,function(){requestAnimationFrame(function(){i.render()})})},createDropdown:function(){var e=this.multiple||this.options.showTick?" show-tick":"",t=this.multiple?' aria-multiselectable="true"':"",i="",s=this.autofocus?" autofocus":"";g.major<4&&this.$element.parent().hasClass("input-group")&&(i=" input-group-btn");var n="",o="",l="",r="",a="";return this.options.header&&(n='<div class="'+T.POPOVERHEADER+'"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>"),this.options.liveSearch&&(o='<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+k(this.options.liveSearchPlaceholder)+'"')+' role="combobox" aria-label="Search" aria-controls="'+this.selectId+'" aria-autocomplete="list"></div>'),this.multiple&&this.options.actionsBox&&(l='<div class="bs-actionsbox"><div class="btn-group btn-group-sm"><button type="button" class="actions-btn bs-select-all btn '+T.BUTTONCLASS+'">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn '+T.BUTTONCLASS+'">'+this.options.deselectAllText+"</button></div></div>"),this.multiple&&this.options.doneButton&&(r='<div class="bs-donebutton"><div class="btn-group"><button type="button" class="btn btn-sm '+T.BUTTONCLASS+'">'+this.options.doneButtonText+"</button></div></div>"),this.options.allowClear&&(a='<span class="close bs-select-clear-selected" title="'+this.options.deselectAllText+'"><span>&times;</span>'),e='<div class="dropdown bootstrap-select'+e+i+'"><button type="button" tabindex="-1" class="'+this.options.styleBase+' dropdown-toggle" '+("static"===this.options.display?'data-display="static"':"")+z.DATA_TOGGLE+s+' role="combobox" aria-owns="'+this.selectId+'" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">&nbsp;</div></div> </div>'+a+"</span>"+("4"<=g.major?"":'<span class="bs-caret">'+this.options.template.caret+"</span>")+'</button><div class="'+T.MENU+" "+("4"<=g.major?"":T.SHOW)+'">'+n+o+l+'<div class="inner '+T.SHOW+'" role="listbox" id="'+this.selectId+'" tabindex="-1" '+t+'><ul class="'+T.MENU+" inner "+("4"<=g.major?T.SHOW:"")+'" role="presentation"></ul></div>'+r+"</div></div>",$(e)},setPositionData:function(){this.selectpicker.view.canHighlight=[],this.selectpicker.view.size=0,this.selectpicker.view.firstHighlightIndex=!1;for(var e=0;e<this.selectpicker.current.data.length;e++){var t=this.selectpicker.current.data[e],i=!0;"divider"===t.type?(i=!1,t.height=this.sizeInfo.dividerHeight):"optgroup-label"===t.type?(i=!1,t.height=this.sizeInfo.dropdownHeaderHeight):t.height=this.sizeInfo.liHeight,t.disabled&&(i=!1),this.selectpicker.view.canHighlight.push(i),i&&(this.selectpicker.view.size++,t.posinset=this.selectpicker.view.size,!1===this.selectpicker.view.firstHighlightIndex&&(this.selectpicker.view.firstHighlightIndex=e)),t.position=(0===e?0:this.selectpicker.current.data[e-1].position)+t.height}},isVirtual:function(){return!1!==this.options.virtualScroll&&this.selectpicker.main.data.length>=this.options.virtualScroll||!0===this.options.virtualScroll},createView:function(y,e,t){var x=this,i=0;function E(e,t){var i,s=x.selectpicker.current.data.length,n=[],o=!0,l=x.isVirtual();x.selectpicker.view.scrollTop=e;for(var r,a=x.options.chunkSize,c=Math.ceil(s/a)||1,d=0;d<c;d++){var h=d===c-1?s:(d+1)*a;if(n[d]=[d*a+(d?1:0),h],!s)break;void 0===i&&e-1<=x.selectpicker.current.data[h-1].position-x.sizeInfo.menuInnerHeight&&(i=d)}if(void 0===i&&(i=0),g=[x.selectpicker.view.position0,x.selectpicker.view.position1],p=Math.max(0,i-1),f=Math.min(c-1,i+1),x.selectpicker.view.position0=!1!==l&&Math.max(0,n[p][0])||0,x.selectpicker.view.position1=!1===l?s:Math.min(s,n[f][1])||0,p=g[0]!==x.selectpicker.view.position0||g[1]!==x.selectpicker.view.position1,void 0!==x.activeElement&&(t&&(x.activeElement!==x.selectedElement&&x.defocusItem(x.activeElement),x.activeElement=void 0),x.activeElement!==x.selectedElement&&x.defocusItem(x.selectedElement)),void 0!==x.prevActiveElement&&x.prevActiveElement!==x.activeElement&&x.prevActiveElement!==x.selectedElement&&x.defocusItem(x.prevActiveElement),t||p||x.selectpicker.current.hasMore){if(f=x.selectpicker.view.visibleElements?x.selectpicker.view.visibleElements.slice():[],x.selectpicker.view.visibleElements=!1===l?x.selectpicker.current.elements:x.selectpicker.current.elements.slice(x.selectpicker.view.position0,x.selectpicker.view.position1),x.setOptionStatus(),(y||!1===l&&t)&&(g=f,r=x.selectpicker.view.visibleElements,o=!(g.length===r.length&&g.every(function(e,t){return e===r[t]}))),(t||!0===l)&&o){var p=x.$menuInner[0],u=document.createDocumentFragment(),f=p.firstChild.cloneNode(!1),m=x.selectpicker.view.visibleElements,v=[];p.replaceChild(f,p.firstChild);for(var g,d=0,b=m.length;d<b;d++){var w,k,I=m[d];x.options.sanitize&&(w=I.lastChild)&&(k=x.selectpicker.current.data[d+x.selectpicker.view.position0])&&k.content&&!k.sanitized&&(v.push(w),k.sanitized=!0),u.appendChild(I)}x.options.sanitize&&v.length&&S(v,x.options.whiteList,x.options.sanitizeFn),!0===l?(g=0===x.selectpicker.view.position0?0:x.selectpicker.current.data[x.selectpicker.view.position0-1].position,o=x.selectpicker.view.position1>s-1?0:x.selectpicker.current.data[s-1].position-x.selectpicker.current.data[x.selectpicker.view.position1-1].position,p.firstChild.style.marginTop=g+"px",p.firstChild.style.marginBottom=o+"px"):(p.firstChild.style.marginTop=0,p.firstChild.style.marginBottom=0),p.firstChild.appendChild(u),!0===l&&x.sizeInfo.hasScrollBar&&(f=p.firstChild.offsetWidth,t&&f<x.sizeInfo.menuInnerInnerWidth&&x.sizeInfo.totalMenuWidth>x.sizeInfo.selectWidth?p.firstChild.style.minWidth=x.sizeInfo.menuInnerInnerWidth+"px":f>x.sizeInfo.menuInnerInnerWidth&&(x.$menu[0].style.minWidth=0,(g=p.firstChild.offsetWidth)>x.sizeInfo.menuInnerInnerWidth&&(x.sizeInfo.menuInnerInnerWidth=g,p.firstChild.style.minWidth=x.sizeInfo.menuInnerInnerWidth+"px"),x.$menu[0].style.minWidth=""))}(!y&&x.options.source.data||y&&x.options.source.search)&&x.selectpicker.current.hasMore&&i===c-1&&0<e&&(o=Math.floor(i*x.options.chunkSize/x.options.source.pageSize)+2,x.fetchData(function(){x.render(),x.buildList(s,y),x.setPositionData(),E(e)},y?"search":"data",o,y?x.selectpicker.search.previousValue:void 0))}x.prevActiveElement=x.activeElement,x.options.liveSearch?y&&t&&(x.selectpicker.view.canHighlight[l=0]||(l=1+x.selectpicker.view.canHighlight.slice(1).indexOf(!0)),f=x.selectpicker.view.visibleElements[l],x.defocusItem(x.selectpicker.view.currentActive),x.activeElement=(x.selectpicker.current.data[l]||{}).element,x.focusItem(f)):x.$menuInner.trigger("focus")}this.selectpicker.isSearching=y,this.selectpicker.current=y?this.selectpicker.search:this.selectpicker.main,this.setPositionData(),e&&(t?i=this.$menuInner[0].scrollTop:x.multiple||"number"==typeof(t=((e=x.$element[0]).options[e.selectedIndex]||{}).liIndex)&&!1!==x.options.size&&(t=(e=x.selectpicker.main.data[t])&&e.position)&&(i=t-(x.sizeInfo.menuInnerHeight+x.sizeInfo.liHeight)/2)),E(i,!0),this.$menuInner.off("scroll.createView").on("scroll.createView",function(e,t){x.noScroll||E(this.scrollTop,t),x.noScroll=!1}),$(window).off("resize"+A+"."+this.selectId+".createView").on("resize"+A+"."+this.selectId+".createView",function(){x.$newElement.hasClass(T.SHOW)&&E(x.$menuInner[0].scrollTop)})},focusItem:function(e,t,i){var s;e&&(t=t||this.selectpicker.current.data[this.selectpicker.current.elements.indexOf(this.activeElement)],(s=e.firstChild)&&(s.setAttribute("aria-setsize",this.selectpicker.view.size),s.setAttribute("aria-posinset",t.posinset),!0!==i&&(this.focusedParent.setAttribute("aria-activedescendant",s.id),e.classList.add("active"),s.classList.add("active"))))},defocusItem:function(e){e&&(e.classList.remove("active"),e.firstChild&&e.firstChild.classList.remove("active"))},setPlaceholder:function(){var e,t,i,s,n,o,l,r=this,a=!1;return!this.options.placeholder&&!this.options.allowClear||this.multiple||(this.selectpicker.view.titleOption||(this.selectpicker.view.titleOption=document.createElement("option")),e=this.$element[0],t=!(a=!0),i=!this.selectpicker.view.titleOption.parentNode,s=e.selectedIndex,n=e.options[s],o=(o=e.querySelector("select > *:not(:disabled)"))?o.index:0,l=(l=window.performance&&window.performance.getEntriesByType("navigation"))&&l.length?"back_forward"!==l[0].type:2!==window.performance.navigation.type,i&&(this.selectpicker.view.titleOption.className="bs-title-option",this.selectpicker.view.titleOption.value="",t=!n||s===o&&!1===n.defaultSelected&&void 0===this.$element.data("selected")),!i&&0===this.selectpicker.view.titleOption.index||e.insertBefore(this.selectpicker.view.titleOption,e.firstChild),t&&l?e.selectedIndex=0:"complete"!==document.readyState&&window.addEventListener("pageshow",function(){r.selectpicker.view.displayedValue!==e.value&&r.render()})),a},fetchData:function(n,o,e,t){e=e||1,o=o||"data";var l,r=this,i=this.options.source[o];i?(this.options.virtualScroll=!0,"function"==typeof i?i.call(this,function(e,t,i){var s=r.selectpicker["search"===o?"search":"main"];s.hasMore=t,s.totalItems=i,l=r.buildData(e,o),n.call(r,l),r.$element.trigger("fetched"+A)},e,t):Array.isArray(i)&&(l=r.buildData(i,o),n.call(r,l))):(l=this.buildData(!1,o),n.call(r,l))},buildData:function(h,e){var o=this,p=!1===h?N.fromOption:N.fromDataSource,u=':not([hidden]):not([data-hidden="true"]):not([style*="display: none"])',f=[],l=this.selectpicker.main.data?this.selectpicker.main.data.length:0,m=0,v=this.setPlaceholder()&&!h?1:0,t=("search"===e&&(l=this.selectpicker.search.data.length),this.options.hideDisabled&&(u+=":not(:disabled)"),h?h.filter(ne,this):this.$element[0].querySelectorAll("select > *"+u));function g(e){var t=f[f.length-1];t&&"divider"===t.type&&(t.optID||e.optID)||((e=e||{}).type="divider",f.push(e))}function b(e,t){var i,s,n;(t=t||{}).divider=p(e,"divider"),!0===t.divider?g({optID:t.optID}):(i=f.length+l,s=(s=p(e,"style"))?k(s):"",n=(e.className||"")+(t.optgroupClass||""),t.optID&&(n="opt "+n),t.optionClass=n.trim(),t.inlineStyle=s,t.text=p(e,"text"),t.title=p(e,"title"),t.content=p(e,"content"),t.tokens=p(e,"tokens"),t.subtext=p(e,"subtext"),t.icon=p(e,"icon"),t.display=t.content||t.text,t.value=void 0===e.value?e.text:e.value,t.type="option",t.index=i,t.option=e.option||e,t.option.liIndex=i,t.selected=!!e.selected,t.disabled=t.disabled||!!e.disabled,!1!==h&&(o.selectpicker.optionValuesDataMap[t.value]?t=$.extend(o.selectpicker.optionValuesDataMap[t.value],t):o.selectpicker.optionValuesDataMap[t.value]=t),f.push(t))}function i(e,t){var i=t[e],s=!(e-1<v)&&t[e-1],t=t[e+1],n=h?i.children.filter(ne,this):i.querySelectorAll("option"+u);if(n.length){var o,l,r={display:k(p(w,"label")),subtext:p(i,"subtext"),icon:p(i,"icon"),type:"optgroup-label",optgroupClass:" "+(i.className||""),optgroup:i};m++,s&&g({optID:m}),r.optID=m,f.push(r);for(var a=0,c=n.length;a<c;a++){var d=n[a];0===a&&(l=(o=f.length-1)+c),b(d,{headerIndex:o,lastIndex:l,optID:r.optID,optgroupClass:r.optgroupClass,disabled:i.disabled})}t&&g({optID:m})}}for(var s=t.length,n=v;n<s;n++){var w=t[n],r=w.children;r&&r.length?i.call(this,n,t):b.call(this,w,{})}switch(e){case"data":this.selectpicker.main.data||(this.selectpicker.main.data=[]),Array.prototype.push.apply(this.selectpicker.main.data,f),this.selectpicker.current.data=this.selectpicker.main.data;break;case"search":Array.prototype.push.apply(this.selectpicker.search.data,f)}return f},buildList:function(e,t){var i=this,s=(t?this.selectpicker.search:this.selectpicker.main).data,n=[],o=0;!i.options.showTick&&!i.multiple||D.checkMark.parentNode||(D.checkMark.className=this.options.iconBase+" "+i.options.tickIcon+" check-mark",D.a.appendChild(D.checkMark));for(var l=s.length,r=e||0;r<l;r++){var a,c=s[r],d=(p=a=h=d=void 0,n),h=c,p=0;switch(h.type){case"divider":a=L.li(!1,T.DIVIDER,h.optID?h.optID+"div":void 0);break;case"option":(a=L.li(L.a(L.text.call(i,h),h.optionClass,h.inlineStyle),"",h.optID)).firstChild&&(a.firstChild.id=i.selectId+"-"+h.index);break;case"optgroup-label":a=L.li(L.label.call(i,h),"dropdown-header"+h.optgroupClass,h.optID)}h.element?h.element.innerHTML=a.innerHTML:h.element=a,d.push(h.element),h.display&&(p+=h.display.length),h.subtext&&(p+=h.subtext.length),h.icon&&(p+=1),o<p&&(o=p,i.selectpicker.view.widestOption=d[d.length-1])}e?t?Array.prototype.push.apply(this.selectpicker.search.elements,n):(Array.prototype.push.apply(this.selectpicker.main.elements,n),this.selectpicker.current.elements=this.selectpicker.main.elements):t?this.selectpicker.search.elements=n:this.selectpicker.main.elements=this.selectpicker.current.elements=n},findLis:function(){return this.$menuInner.find(".inner > li")},render:function(e){var i=this,t=this.$element[0],s=this.setPlaceholder()&&0===t.selectedIndex,n=y.call(this),o=n.length,l=x.call(this,n),r=this.$button[0],a=r.querySelector(".filter-option-inner-inner"),c=document.createTextNode(this.options.multipleSeparator),d=D.fragment.cloneNode(!1),h=!1;if(this.options.source.data&&e&&(n.map(function e(t){t.selected?i.createOption(t,!0):t.children&&t.children.length&&t.children.map(e)}),t.appendChild(this.selectpicker.main.optionQueue),s=s&&0===t.selectedIndex),r.classList.toggle("bs-placeholder",i.multiple?!o:!l&&0!==l),i.multiple||1!==n.length||(i.selectpicker.view.displayedValue=l),"static"===this.options.selectedTextFormat)d=L.text.call(this,{text:this.options.placeholder},!0);else if(!1===(this.multiple&&-1!==this.options.selectedTextFormat.indexOf("count")&&0<o&&(1<(e=this.options.selectedTextFormat.split(">")).length&&o>e[1]||1===e.length&&2<=o))){if(!s){for(var p=0;p<o&&p<50;p++){var u=n[p],f={};u&&(this.multiple&&0<p&&d.appendChild(c.cloneNode(!1)),u.title?f.text=u.title:u.content&&i.options.showContent?(f.content=u.content.toString(),h=!0):(i.options.showIcon&&(f.icon=u.icon),i.options.showSubtext&&!i.multiple&&u.subtext&&(f.subtext=" "+u.subtext),f.text=u.text.trim()),d.appendChild(L.text.call(this,f,!0)))}49<o&&d.appendChild(document.createTextNode("..."))}}else var t=':not([hidden]):not([data-hidden="true"]):not([data-divider="true"]):not([style*="display: none"])',l=(this.options.hideDisabled&&(t+=":not(:disabled)"),this.$element[0].querySelectorAll("select > option"+t+", optgroup"+t+" option"+t).length),e="function"==typeof this.options.countSelectedText?this.options.countSelectedText(o,l):this.options.countSelectedText,d=L.text.call(this,{text:e.replace("{0}",o.toString()).replace("{1}",l.toString())},!0);d.childNodes.length||(d=L.text.call(this,{text:this.options.placeholder||this.options.noneSelectedText},!0)),r.title=d.textContent.replace(/<[^>]*>?/g,"").trim(),this.options.sanitize&&h&&S([d],i.options.whiteList,i.options.sanitizeFn),a.innerHTML="",a.appendChild(d),g.major<4&&this.$newElement[0].classList.contains("bs3-has-addon")&&(s=r.querySelector(".filter-expand"),(t=a.cloneNode(!0)).className="filter-expand",s?r.replaceChild(t,s):r.appendChild(t)),this.$element.trigger("rendered"+A)},setStyle:function(e,t){var i=this.$button[0],s=this.$newElement[0],n=this.options.style.trim();this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,"")),g.major<4&&(s.classList.add("bs3"),s.parentNode.classList&&s.parentNode.classList.contains("input-group")&&(s.previousElementSibling||s.nextElementSibling)&&(s.previousElementSibling||s.nextElementSibling).classList.contains("input-group-addon")&&s.classList.add("bs3-has-addon")),s=e?e.trim():n,"add"==t?s&&i.classList.add.apply(i.classList,s.split(" ")):"remove"==t?s&&i.classList.remove.apply(i.classList,s.split(" ")):(n&&i.classList.remove.apply(i.classList,n.split(" ")),s&&i.classList.add.apply(i.classList,s.split(" ")))},liHeight:function(e){if(e||!1!==this.options.size&&!Object.keys(this.sizeInfo).length){var t,e=D.div.cloneNode(!1),i=D.div.cloneNode(!1),s=D.div.cloneNode(!1),n=document.createElement("ul"),o=D.li.cloneNode(!1),l=D.li.cloneNode(!1),r=D.a.cloneNode(!1),a=D.span.cloneNode(!1),c=this.options.header&&0<this.$menu.find("."+T.POPOVERHEADER).length?this.$menu.find("."+T.POPOVERHEADER)[0].cloneNode(!0):null,d=this.options.liveSearch?D.div.cloneNode(!1):null,h=this.options.actionsBox&&this.multiple&&0<this.$menu.find(".bs-actionsbox").length?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,p=this.options.doneButton&&this.multiple&&0<this.$menu.find(".bs-donebutton").length?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null,u=this.$element[0].options[0];if(this.sizeInfo.selectWidth=this.$newElement[0].offsetWidth,a.className="text",r.className="dropdown-item "+(u?u.className:""),e.className=this.$menu[0].parentNode.className+" "+T.SHOW,e.style.width=0,"auto"===this.options.width&&(i.style.minWidth=0),i.className=T.MENU+" "+T.SHOW,s.className="inner "+T.SHOW,n.className=T.MENU+" inner "+("4"<=g.major?T.SHOW:""),o.className=T.DIVIDER,l.className="dropdown-header",a.appendChild(document.createTextNode("\u200b")),this.selectpicker.current.data.length)for(var f=0;f<this.selectpicker.current.data.length;f++){var m=this.selectpicker.current.data[f];if("option"===m.type&&"none"!==$(m.element.firstChild).css("display")){t=m.element;break}}else t=D.li.cloneNode(!1),r.appendChild(a),t.appendChild(r);l.appendChild(a.cloneNode(!0)),this.selectpicker.view.widestOption&&n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),n.appendChild(t),n.appendChild(o),n.appendChild(l),c&&i.appendChild(c),d&&(u=document.createElement("input"),d.className="bs-searchbox",u.className="form-control",d.appendChild(u),i.appendChild(d)),h&&i.appendChild(h),s.appendChild(n),i.appendChild(s),p&&i.appendChild(p),e.appendChild(i),document.body.appendChild(e);r=t.offsetHeight,a=l?l.offsetHeight:0,u=c?c.offsetHeight:0,n=d?d.offsetHeight:0,l=h?h.offsetHeight:0,c=p?p.offsetHeight:0,d=$(o).outerHeight(!0),h=window.getComputedStyle(i),p=i.offsetWidth,o={vert:v(h.paddingTop)+v(h.paddingBottom)+v(h.borderTopWidth)+v(h.borderBottomWidth),horiz:v(h.paddingLeft)+v(h.paddingRight)+v(h.borderLeftWidth)+v(h.borderRightWidth)},h={vert:o.vert+v(h.marginTop)+v(h.marginBottom)+2,horiz:o.horiz+v(h.marginLeft)+v(h.marginRight)+2};s.style.overflowY="scroll",s=i.offsetWidth-p,document.body.removeChild(e),this.sizeInfo.liHeight=r,this.sizeInfo.dropdownHeaderHeight=a,this.sizeInfo.headerHeight=u,this.sizeInfo.searchHeight=n,this.sizeInfo.actionsHeight=l,this.sizeInfo.doneButtonHeight=c,this.sizeInfo.dividerHeight=d,this.sizeInfo.menuPadding=o,this.sizeInfo.menuExtras=h,this.sizeInfo.menuWidth=p,this.sizeInfo.menuInnerInnerWidth=p-o.horiz,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth,this.sizeInfo.scrollBarWidth=s,this.sizeInfo.selectHeight=this.$newElement[0].offsetHeight,this.setPositionData()}},getSelectPosition:function(){var e,t=$(window),i=this.$newElement.offset(),s=$(this.options.container),s=(this.options.container&&s.length&&!s.is("body")?((e=s.offset()).top+=parseInt(s.css("borderTopWidth")),e.left+=parseInt(s.css("borderLeftWidth"))):e={top:0,left:0},this.options.windowPadding);this.sizeInfo.selectOffsetTop=i.top-e.top-t.scrollTop(),this.sizeInfo.selectOffsetBot=t.height()-this.sizeInfo.selectOffsetTop-this.sizeInfo.selectHeight-e.top-s[2],this.sizeInfo.selectOffsetLeft=i.left-e.left-t.scrollLeft(),this.sizeInfo.selectOffsetRight=t.width()-this.sizeInfo.selectOffsetLeft-this.sizeInfo.selectWidth-e.left-s[1],this.sizeInfo.selectOffsetTop-=s[0],this.sizeInfo.selectOffsetLeft-=s[3]},setMenuSize:function(e){this.getSelectPosition();var t,i,s,n,o,l,r=this.sizeInfo.selectWidth,a=this.sizeInfo.liHeight,c=this.sizeInfo.headerHeight,d=this.sizeInfo.searchHeight,h=this.sizeInfo.actionsHeight,p=this.sizeInfo.doneButtonHeight,u=this.sizeInfo.dividerHeight,f=this.sizeInfo.menuPadding,m=0;if(this.options.dropupAuto&&(l=a*this.selectpicker.current.data.length+f.vert,l=this.sizeInfo.selectOffsetTop-this.sizeInfo.selectOffsetBot>this.sizeInfo.menuExtras.vert&&l+this.sizeInfo.menuExtras.vert+50>this.sizeInfo.selectOffsetBot,!0===this.selectpicker.isSearching&&(l=this.selectpicker.dropup),this.$newElement.toggleClass(T.DROPUP,l),this.selectpicker.dropup=l),"auto"===this.options.size)l=3<this.selectpicker.current.data.length?3*this.sizeInfo.liHeight+this.sizeInfo.menuExtras.vert-2:0,i=this.sizeInfo.selectOffsetBot-this.sizeInfo.menuExtras.vert,s=l+c+d+h+p,o=Math.max(l-f.vert,0),t=(n=i=this.$newElement.hasClass(T.DROPUP)?this.sizeInfo.selectOffsetTop-this.sizeInfo.menuExtras.vert:i)-c-d-h-p-f.vert;else if(this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size){for(var v=0;v<this.options.size;v++)"divider"===this.selectpicker.current.data[v].type&&m++;t=(i=a*this.options.size+m*u+f.vert)-f.vert,n=i+c+d+h+p,s=o=""}this.$menu.css({"max-height":n+"px",overflow:"hidden","min-height":s+"px"}),this.$menuInner.css({"max-height":t+"px",overflow:"hidden auto","min-height":o+"px"}),this.sizeInfo.menuInnerHeight=Math.max(t,1),this.selectpicker.current.data.length&&this.selectpicker.current.data[this.selectpicker.current.data.length-1].position>this.sizeInfo.menuInnerHeight&&(this.sizeInfo.hasScrollBar=!0,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth+this.sizeInfo.scrollBarWidth),"auto"===this.options.dropdownAlignRight&&this.$menu.toggleClass(T.MENURIGHT,this.sizeInfo.selectOffsetLeft>this.sizeInfo.selectOffsetRight&&this.sizeInfo.selectOffsetRight<this.sizeInfo.totalMenuWidth-r),this.dropdown&&this.dropdown._popper&&this.dropdown._popper.update()},setSize:function(e){var t,i;this.liHeight(e),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size&&(t=this,i=$(window),this.setMenuSize(),this.options.liveSearch&&this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize",function(){return t.setMenuSize()}),"auto"===this.options.size?i.off("resize"+A+"."+this.selectId+".setMenuSize scroll"+A+"."+this.selectId+".setMenuSize").on("resize"+A+"."+this.selectId+".setMenuSize scroll"+A+"."+this.selectId+".setMenuSize",function(){return t.setMenuSize()}):this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size&&i.off("resize"+A+"."+this.selectId+".setMenuSize scroll"+A+"."+this.selectId+".setMenuSize")),this.createView(!1,!0,e)},setWidth:function(){var i=this;"auto"===this.options.width?requestAnimationFrame(function(){i.$menu.css("min-width","0"),i.$element.on("loaded"+A,function(){i.liHeight(),i.setMenuSize();var e=i.$newElement.clone().appendTo("body"),t=e.css("width","auto").children("button").outerWidth();e.remove(),i.sizeInfo.selectWidth=Math.max(i.sizeInfo.totalMenuWidth,t),i.$newElement.css("width",i.sizeInfo.selectWidth+"px")})}):"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width","")),this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement[0].classList.remove("fit-width")},selectPosition:function(){this.$bsContainer=$('<div class="bs-container" />');function e(e){var t={},i=l.options.display||!!$.fn.dropdown.Constructor.Default&&$.fn.dropdown.Constructor.Default.display;l.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass(T.DROPUP,e.hasClass(T.DROPUP)),s=e.offset(),r.is("body")?n={top:0,left:0}:((n=r.offset()).top+=parseInt(r.css("borderTopWidth"))-r.scrollTop(),n.left+=parseInt(r.css("borderLeftWidth"))-r.scrollLeft()),o=e.hasClass(T.DROPUP)?0:e[0].offsetHeight,(g.major<4||"static"===i)&&(t.top=s.top-n.top+o,t.left=s.left-n.left),t.width=e[0].offsetWidth,l.$bsContainer.css(t)}var s,n,o,l=this,r=$(this.options.container);this.$button.on("click.bs.dropdown.data-api",function(){l.isDisabled()||(e(l.$newElement),l.$bsContainer.appendTo(l.options.container).toggleClass(T.SHOW,!l.$button.hasClass(T.SHOW)).append(l.$menu))}),$(window).off("resize"+A+"."+this.selectId+" scroll"+A+"."+this.selectId).on("resize"+A+"."+this.selectId+" scroll"+A+"."+this.selectId,function(){l.$newElement.hasClass(T.SHOW)&&e(l.$newElement)}),this.$element.on("hide"+A,function(){l.$menu.data("height",l.$menu.height()),l.$bsContainer.detach()})},createOption:function(e,t){var i,s=e.option||e;s&&1!==s.nodeType&&(i=(t?D.selectedOption:D.option).cloneNode(!0),void 0!==s.value&&(i.value=s.value),i.textContent=s.text,i.selected=!0,void 0!==s.liIndex?i.liIndex=s.liIndex:t||(i.liIndex=e.index),e.option=i,this.selectpicker.main.optionQueue.appendChild(i))},setOptionStatus:function(e){var t=this;if(t.noScroll=!1,t.selectpicker.view.visibleElements&&t.selectpicker.view.visibleElements.length){for(var i=0;i<t.selectpicker.view.visibleElements.length;i++){var s=t.selectpicker.current.data[i+t.selectpicker.view.position0];s.option&&(!0!==e&&t.setDisabled(s),t.setSelected(s))}this.options.source.data&&this.$element[0].appendChild(this.selectpicker.main.optionQueue)}},setSelected:function(e,t){t=void 0===t?e.selected:t;var i,s=e.element,n=void 0!==this.activeElement,o=this.activeElement===s||t&&!this.multiple&&!n;s&&(void 0!==t&&(e.selected=t,e.option&&(e.option.selected=t)),t&&this.options.source.data&&this.createOption(e,!1),i=s.firstChild,t&&(this.selectedElement=s),s.classList.toggle("selected",t),o?(this.focusItem(s,e),this.selectpicker.view.currentActive=s,this.activeElement=s):this.defocusItem(s),i&&(i.classList.toggle("selected",t),t?i.setAttribute("aria-selected",!0):this.multiple?i.setAttribute("aria-selected",!1):i.removeAttribute("aria-selected")),o||n||!t||void 0===this.prevActiveElement||(e=this.prevActiveElement,this.defocusItem(e)))},setDisabled:function(e){var t,i=e.disabled,e=e.element;e&&(t=e.firstChild,e.classList.toggle(T.DISABLED,i),t&&("4"<=g.major&&t.classList.toggle(T.DISABLED,i),i?(t.setAttribute("aria-disabled",i),t.setAttribute("tabindex",-1)):(t.removeAttribute("aria-disabled"),t.setAttribute("tabindex",0))))},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){this.isDisabled()?(this.$newElement[0].classList.add(T.DISABLED),this.$button.addClass(T.DISABLED).attr("aria-disabled",!0)):this.$button[0].classList.contains(T.DISABLED)&&(this.$newElement[0].classList.remove(T.DISABLED),this.$button.removeClass(T.DISABLED).attr("aria-disabled",!1))},clickListener:function(){var I=this,t=$(document);function e(){(I.options.liveSearch?I.$searchbox:I.$menuInner).trigger("focus")}function i(){I.dropdown&&I.dropdown._popper&&I.dropdown._popper.state?e():requestAnimationFrame(i)}t.data("spaceSelect",!1),this.$button.on("keyup",function(e){/(32)/.test(e.keyCode.toString(10))&&t.data("spaceSelect")&&(e.preventDefault(),t.data("spaceSelect",!1))}),this.$newElement.on("show.bs.dropdown",function(){I.dropdown||"4"!==g.major||(I.dropdown=I.$button.data("bs.dropdown"),I.dropdown._menu=I.$menu[0])}),this.$button.on("click.bs.dropdown.data-api",function(e){var t,i,s;I.options.allowClear&&(t=e.target,i=I.$clearButton[0],(t=/MSIE|Trident/.test(window.navigator.userAgent)?document.elementFromPoint(e.clientX,e.clientY):t)!==i&&t.parentElement!==i||(e.stopImmediatePropagation(),I.multiple?I.deselectAll():(i=(t=I.$element[0]).value,e=t.selectedIndex,(s=!!(s=t.options[e])&&I.selectpicker.main.data[s.liIndex])&&I.setSelected(s,!1),t.selectedIndex=0,E=[e,!1,i],I.$element.triggerNative("change")),I.$newElement.hasClass(T.SHOW)&&(I.options.liveSearch&&I.$searchbox.trigger("focus"),I.createView(!1)))),I.$newElement.hasClass(T.SHOW)||I.setSize()}),this.$element.on("shown"+A,function(){I.$menuInner[0].scrollTop!==I.selectpicker.view.scrollTop&&(I.$menuInner[0].scrollTop=I.selectpicker.view.scrollTop),3<g.major?requestAnimationFrame(i):e()}),this.$menuInner.on("mouseenter","li a",function(e){var t=this.parentElement,i=I.isVirtual()?I.selectpicker.view.position0:0,s=Array.prototype.indexOf.call(t.parentElement.children,t),s=I.selectpicker.current.data[s+i];I.focusItem(t,s,!0)}),this.$menuInner.on("click","li a",function(e,t){var i=$(this),s=I.$element[0],n=I.isVirtual()?I.selectpicker.view.position0:0,o=I.selectpicker.current.data[i.parent().index()+n],n=o.element,l=x.call(I),r=s.selectedIndex,a=s.options[r],a=!!a&&I.selectpicker.main.data[a.liIndex],c=!0;if(I.multiple&&1!==I.options.maxOptions&&e.stopPropagation(),e.preventDefault(),!I.isDisabled()&&!i.parent().hasClass(T.DISABLED)){var e=o.option,i=$(e),d=e.selected,h=I.selectpicker.current.data.find(function(e){return e.optID===o.optID&&"optgroup-label"===e.type}),p=h?h.optgroup:void 0,h=p instanceof Element?N.fromOption:N.fromDataSource,u=p&&p.children,f=parseInt(I.options.maxOptions),h=p&&parseInt(h(p,"maxOptions"))||!1;if((t=n===I.activeElement?!0:t)||(I.prevActiveElement=I.activeElement,I.activeElement=void 0),I.multiple&&1!==f){if(I.setSelected(o,!d),I.focusedParent.focus(),!1!==f||!1!==h){var n=f<y.call(I).length,m=0;if(p&&p.children)for(var v=0;v<p.children.length;v++)p.children[v].selected&&m++;t=h<m;if(f&&n||h&&t)if(f&&1===f)s.selectedIndex=-1,I.setOptionStatus(!0);else if(h&&1===h){for(v=0;v<u.length;v++){var g=u[v];I.setSelected(I.selectpicker.current.data[g.liIndex],!1)}I.setSelected(o,!0)}else{var d="string"==typeof I.options.maxOptionsText?[I.options.maxOptionsText,I.options.maxOptionsText]:I.options.maxOptionsText,d="function"==typeof d?d(f,h):d,b=d[0].replace("{n}",f),w=d[1].replace("{n}",h),k=$('<div class="notify"></div>');d[2]&&(b=b.replace("{var}",d[2][1<f?0:1]),w=w.replace("{var}",d[2][1<h?0:1])),I.$menu.append(k),f&&n&&(k.append($("<div>"+b+"</div>")),c=!1,I.$element.trigger("maxReached"+A)),h&&t&&(k.append($("<div>"+w+"</div>")),c=!1,I.$element.trigger("maxReachedGrp"+A)),setTimeout(function(){I.setSelected(o,!1)},10),k[0].classList.add("fadeOut"),setTimeout(function(){k.remove()},1050)}}}else a&&I.setSelected(a,!1),I.setSelected(o,!0);I.options.source.data&&I.$element[0].appendChild(I.selectpicker.main.optionQueue),!I.multiple||I.multiple&&1===I.options.maxOptions?I.$button.trigger("focus"):I.options.liveSearch&&I.$searchbox.trigger("focus"),!c||!I.multiple&&r===s.selectedIndex||(E=[e.index,i.prop("selected"),l],I.$element.triggerNative("change"))}}),this.$menu.on("click","li."+T.DISABLED+" a, ."+T.POPOVERHEADER+", ."+T.POPOVERHEADER+" :not(.close)",function(e){e.currentTarget==this&&(e.preventDefault(),e.stopPropagation(),(I.options.liveSearch&&!$(e.target).hasClass("close")?I.$searchbox:I.$button).trigger("focus"))}),this.$menuInner.on("click",".divider, .dropdown-header",function(e){e.preventDefault(),e.stopPropagation(),(I.options.liveSearch?I.$searchbox:I.$button).trigger("focus")}),this.$menu.on("click","."+T.POPOVERHEADER+" .close",function(){I.$button.trigger("click")}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(e){(I.options.liveSearch?I.$searchbox:I.$button).trigger("focus"),e.preventDefault(),e.stopPropagation(),$(this).hasClass("bs-select-all")?I.selectAll():I.deselectAll()}),this.$button.on("focus"+A,function(e){var t=I.$element[0].getAttribute("tabindex");void 0!==t&&e.originalEvent&&e.originalEvent.isTrusted&&(this.setAttribute("tabindex",t),I.$element[0].setAttribute("tabindex",-1),I.selectpicker.view.tabindex=t)}).on("blur"+A,function(e){void 0!==I.selectpicker.view.tabindex&&e.originalEvent&&e.originalEvent.isTrusted&&(I.$element[0].setAttribute("tabindex",I.selectpicker.view.tabindex),this.setAttribute("tabindex",-1),I.selectpicker.view.tabindex=void 0)}),this.$element.on("change"+A,function(){I.render(),I.$element.trigger("changed"+A,E),E=null}).on("focus"+A,function(){I.options.mobile||I.$button[0].focus()})},liveSearchListener:function(){var p=this;this.$button.on("click.bs.dropdown.data-api",function(){p.$searchbox.val()&&(p.$searchbox.val(""),p.selectpicker.search.previousValue=void 0)}),this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",function(e){e.stopPropagation()}),this.$searchbox.on("input propertychange",function(){var t=p.$searchbox[0].value;if(p.selectpicker.search.elements=[],p.selectpicker.search.data=[],t)if(p.selectpicker.search.previousValue=t,p.options.source.search)p.fetchData(function(e){p.render(),p.buildList(void 0,!0),p.noScroll=!0,p.$menuInner.scrollTop(0),p.createView(!0),se.call(p,e,t)},"search",0,t);else{var e=[],i=t.toUpperCase(),s={},n=[],o=p._searchStyle(),l=p.options.liveSearchNormalize;l&&(i=u(i));for(var r=0;r<p.selectpicker.main.data.length;r++){var a=p.selectpicker.main.data[r];s[r]||(s[r]=b(a,i,o,l)),s[r]&&void 0!==a.headerIndex&&-1===n.indexOf(a.headerIndex)&&(0<a.headerIndex&&(s[a.headerIndex-1]=!0,n.push(a.headerIndex-1)),s[a.headerIndex]=!0,n.push(a.headerIndex),s[a.lastIndex+1]=!0),s[r]&&"optgroup-label"!==a.type&&n.push(r)}for(var r=0,c=n.length;r<c;r++){var d=n[r],h=n[r-1],a=p.selectpicker.main.data[d],h=p.selectpicker.main.data[h];("divider"!==a.type||"divider"===a.type&&h&&"divider"!==h.type&&c-1!==r)&&(p.selectpicker.search.data.push(a),e.push(p.selectpicker.main.elements[d]))}p.activeElement=void 0,p.noScroll=!0,p.$menuInner.scrollTop(0),p.selectpicker.search.elements=e,p.createView(!0),se.call(p,e,t)}else p.selectpicker.search.previousValue&&(p.$menuInner.scrollTop(0),p.createView(!1))})},_searchStyle:function(){return this.options.liveSearchStyle||"contains"},val:function(t){var e=this.$element[0];if(void 0===t)return this.$element.val();var i=y.call(this),s=x.call(this,i);E=[null,null,s],(t=Array.isArray(t)?t:[t]).map(String);for(var n=0;n<i.length;n++){var o=i[n];o&&-1===t.indexOf(String(o.value))&&this.setSelected(o,!1)}return this.selectpicker.main.data.filter(function(e){return-1!==t.indexOf(String(e.value))&&(this.setSelected(e,!0),!0)},this),this.options.source.data&&e.appendChild(this.selectpicker.main.optionQueue),this.$element.trigger("changed"+A,E),this.$newElement.hasClass(T.SHOW)&&(this.multiple?this.setOptionStatus(!0):"number"==typeof(s=(e.options[e.selectedIndex]||{}).liIndex)&&this.setSelected(this.selectpicker.current.data[s],!0)),this.render(),E=null,this.$element},changeAll:function(e){if(this.multiple){void 0===e&&(e=!0);var t=this.$element[0],i=0,s=0,n=x.call(this);t.classList.add("bs-select-hidden");for(var o=0,l=this.selectpicker.current.data,r=l.length;o<r;o++){var a=l[o],c=a.option;c&&!a.disabled&&"divider"!==a.type&&(a.selected&&i++,c.selected=e,!0===(a.selected=e)&&s++)}t.classList.remove("bs-select-hidden"),i!==s&&(this.setOptionStatus(),E=[null,null,n],this.$element.triggerNative("change"))}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e,t){var i=void 0===t;(e=e||window.event)&&e.stopPropagation(),!1===i&&(e=this.$newElement[0].classList.contains(T.SHOW),i=!0===t&&!1===e||!1===t&&!0===e),i&&this.$button.trigger("click.bs.dropdown.data-api")},open:function(e){this.toggle(e,!0)},close:function(e){this.toggle(e,!1)},keydown:function(e){var t,i,s,n,o=$(this),l=o.hasClass("dropdown-toggle"),r=(l?o.closest(".dropdown"):o.closest(z.MENU)).data("this"),a=r.findLis(),c=!1,l=e.which===I&&!l&&!r.options.selectOnTab,d=te.test(e.which)||l,h=r.$menuInner[0].scrollTop,p=!0===r.isVirtual()?r.selectpicker.view.position0:0;if(!(112<=e.which&&e.which<=123))if(!(t=r.$menu.hasClass(T.SHOW))&&(d||48<=e.which&&e.which<=57||96<=e.which&&e.which<=105||65<=e.which&&e.which<=90)&&(r.$button.trigger("click.bs.dropdown.data-api"),r.options.liveSearch))r.$searchbox.trigger("focus");else{if(e.which===Z&&t&&(e.preventDefault(),r.$button.trigger("click.bs.dropdown.data-api").trigger("focus")),d){if(!a.length)return;-1!==(d=(i=r.activeElement)?Array.prototype.indexOf.call(i.parentElement.children,i):-1)&&r.defocusItem(i),e.which===C?(-1!==d&&d--,d+p<0&&(d+=a.length),r.selectpicker.view.canHighlight[d+p]||-1===(d=r.selectpicker.view.canHighlight.slice(0,d+p).lastIndexOf(!0)-p)&&(d=a.length-1)):e.which!==O&&!l||(++d+p>=r.selectpicker.view.canHighlight.length&&(d=r.selectpicker.view.firstHighlightIndex),r.selectpicker.view.canHighlight[d+p]||(d=d+1+r.selectpicker.view.canHighlight.slice(d+p+1).indexOf(!0))),e.preventDefault();var u=p+d;e.which===C?0===p&&d===a.length-1?(r.$menuInner[0].scrollTop=r.$menuInner[0].scrollHeight,u=r.selectpicker.current.elements.length-1):(s=r.selectpicker.current.data[u])&&(c=(n=s.position-s.height)<h):e.which!==O&&!l||(d===r.selectpicker.view.firstHighlightIndex?(r.$menuInner[0].scrollTop=0,u=r.selectpicker.view.firstHighlightIndex):(s=r.selectpicker.current.data[u])&&(c=h<(n=s.position-r.sizeInfo.menuInnerHeight))),i=r.selectpicker.current.elements[u],r.activeElement=(r.selectpicker.current.data[u]||{}).element,r.focusItem(i),r.selectpicker.view.currentActive=i,c&&(r.$menuInner[0].scrollTop=n),(r.options.liveSearch?r.$searchbox:o).trigger("focus")}else if(!o.is("input")&&!ie.test(e.which)||e.which===w&&r.selectpicker.keydown.keyHistory){var f,m=[];e.preventDefault(),r.selectpicker.keydown.keyHistory+=Y[e.which],r.selectpicker.keydown.resetKeyHistory.cancel&&clearTimeout(r.selectpicker.keydown.resetKeyHistory.cancel),r.selectpicker.keydown.resetKeyHistory.cancel=r.selectpicker.keydown.resetKeyHistory.start(),f=r.selectpicker.keydown.keyHistory,/^(.)\1+$/.test(f)&&(f=f.charAt(0));for(var v=0;v<r.selectpicker.current.data.length;v++){var g=r.selectpicker.current.data[v];b(g,f,"startsWith",!0)&&r.selectpicker.view.canHighlight[v]&&m.push(g.element)}m.length&&(p=0,a.removeClass("active").find("a").removeClass("active"),1===f.length&&(-1===(p=m.indexOf(r.activeElement))||p===m.length-1?p=0:p++),l=m[p],c=0<h-(s=r.selectpicker.main.data[l]).position?(n=s.position-s.height,!0):(n=s.position-r.sizeInfo.menuInnerHeight,s.position>h+r.sizeInfo.menuInnerHeight),i=r.selectpicker.main.elements[l],r.activeElement=i,r.focusItem(i),i&&i.firstChild.focus(),c&&(r.$menuInner[0].scrollTop=n),o.trigger("focus"))}t&&(e.which===w&&!r.selectpicker.keydown.keyHistory||e.which===J||e.which===I&&r.options.selectOnTab)&&(e.which!==w&&e.preventDefault(),r.options.liveSearch&&e.which===w||(r.$menuInner.find(".active a").trigger("click",!0),o.trigger("focus"),r.options.liveSearch||(e.preventDefault(),$(document).data("spaceSelect",!0))))}},mobile:function(){this.options.mobile=!0,this.$element[0].classList.add("mobile-device")},refresh:function(){var e=this,t=$.extend({},this.options,d(this.$element),this.$element.data());this.options=t,this.options.source.data?(this.render(),this.buildList()):this.fetchData(function(){e.render(),e.buildList()}),this.checkDisabled(),this.setStyle(),this.setWidth(),this.setSize(!0),this.$element.trigger("refreshed"+A)},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),(this.$bsContainer||this.$menu).remove(),this.selectpicker.view.titleOption&&this.selectpicker.view.titleOption.parentNode&&this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption),this.$element.off(A).removeData("selectpicker").removeClass("bs-select-hidden selectpicker mobile-device"),$(window).off(A+"."+this.selectId)}};var le=$.fn.selectpicker;function re(){return g.major<5?$.fn.dropdown?($.fn.dropdown.Constructor._dataApiKeydownHandler||$.fn.dropdown.Constructor.prototype.keydown).apply(this,arguments):void 0:m.dataApiKeydownHandler}$.fn.selectpicker=oe,$.fn.selectpicker.Constructor=H,$.fn.selectpicker.noConflict=function(){return $.fn.selectpicker=le,this},$(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api",":not(.bootstrap-select) > ["+z.DATA_TOGGLE+"]",re).on("keydown.bs.dropdown.data-api",":not(.bootstrap-select) > .dropdown-menu",re).on("keydown"+A,".bootstrap-select ["+z.DATA_TOGGLE+'], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',H.prototype.keydown).on("focusin.modal",".bootstrap-select ["+z.DATA_TOGGLE+'], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',function(e){e.stopPropagation()}),document.addEventListener("DOMContentLoaded",function(){$(".selectpicker").each(function(){var e=$(this);oe.call(e,e.data())})})}(e)});
//# sourceMappingURL=bootstrap-select.min.js.map
/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

(function(factory){
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){
	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method, deprecationMsg){
		return function(){
			if (deprecationMsg !== undefined) {
				$.fn.datepicker.deprecated(deprecationMsg);
			}

			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
          // Use date arithmetic to allow dates with different times to match
          if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000*60*60*24)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$.data(element, 'datepicker', this);

		this._events = [];
		this._secondaryEvents = [];

		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn') : false;
		if (this.component && this.component.length === 0)
			this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}

		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		if (this.o.calendarWeeks) {
			this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear')
				.attr('colspan', function(i, val){
					return Number(val) + 1;
				});
		}

		this._process_options({
			startDate: this._o.startDate,
			endDate: this._o.endDate,
			daysOfWeekDisabled: this.o.daysOfWeekDisabled,
			daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
			datesDisabled: this.o.datesDisabled
		});

		this._allow_update = false;
		this.setViewMode(this.o.startView);
		this._allow_update = true;

		this.fillDow();
		this.fillMonths();

		this.update();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view){
			$.each(DPGlobal.viewModes, function(i, viewMode){
				if (view === i || $.inArray(view, viewMode.names) !== -1){
					view = i;
					return false;
				}
			});

			return view;
		},

		_resolveDaysOfWeek: function(daysOfWeek){
			if (!$.isArray(daysOfWeek))
				daysOfWeek = daysOfWeek.split(/[,\s]*/);
			return $.map(daysOfWeek, Number);
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView);
			o.minViewMode = this._resolveViewName(o.minViewMode);
			o.maxViewMode = this._resolveViewName(o.maxViewMode);

			// Check view is between min and max
			o.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled||[]);
			o.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted||[]);

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = o.datesDisabled.split(',');
			}
			o.datesDisabled = $.map(o.datesDisabled, function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {
				o.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);
			} else if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            // component: input + button
            else if (this.component && this.inputField.length) {
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[this.picker, '.prev, .next', {
					click: $.proxy(this.navArrowsClick, this)
				}],
				[this.picker, '.day:not(.disabled)', {
					click: $.proxy(this.dayCellClick, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.isInline
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				viewMode: this.viewMode,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					} else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (this.inputField.is(':disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline || !this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.setViewMode(this.o.startView);

			if (this.o.forceParse && this.inputField.val())
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(e){
			var dateString;
			if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types
				&& $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {
				dateString = e.originalEvent.clipboardData.getData('text/plain');
			} else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			} else {
				return;
			}
			this.setDate(dateString);
			this.update();
			e.preventDefault();
		},

		_utc_to_local: function(utc){
			if (!utc) {
				return utc;
			}

			var local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));

			if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {
				local = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));
			}

			return local;
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (selected_date !== undefined) {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			this.inputField.val('');
			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.setDates.apply(this, $.map(args, this._utc_to_local));
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			return this;
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [0];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left;
			var top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					if (this.o.rtl) {
						// Default to right
						this.picker.addClass('datepicker-orient-right');
					} else {
						// Default to left
						this.picker.addClass('datepicker-orient-left');
					}
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			} else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.o.updateViewDate) {
				if (this.dates.length)
					this.viewDate = new Date(this.dates.get(-1));
				else if (this.viewDate < this.o.startDate)
					this.viewDate = new Date(this.o.startDate);
				else if (this.viewDate > this.o.endDate)
					this.viewDate = new Date(this.o.endDate);
				else
					this.viewDate = this.o.defaultViewDate;
			}

			if (fromArgs){
				// setting date by clicking
				this.setValue();
				this.element.change();
			}
			else if (this.dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates) && fromArgs) {
					this._trigger('changeDate');
					this.element.change();
				}
			}
			if (!this.dates.length && oldDates.length) {
				this._trigger('clearDate');
				this.element.change();
			}

			this.fill();
			return this;
		},

		fillDow: function(){
      if (this.o.showWeekDays) {
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
      }
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '';
			var focused;
			for (var i = 0; i < 12; i++){
				focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = UTCToday();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with UTC today, not local today
			if (this.o.todayHighlight && isUTCEquals(date, today)) {
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');
			}
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, year, startYear, endYear, beforeFn){
			var html = '';
			var step = factor / 10;
			var view = this.picker.find(selector);
			var startVal = Math.floor(year / factor) * factor;
			var endVal = startVal + step * 9;
			var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;
			var selected = $.map(this.dates, function(d){
				return Math.floor(d.getUTCFullYear() / step) * step;
			});

			var classes, tooltip, before;
			for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {
				classes = [cssClass];
				tooltip = null;

				if (currVal === startVal - step) {
					classes.push('old');
				} else if (currVal === endVal + step) {
					classes.push('new');
				}
				if ($.inArray(currVal, selected) !== -1) {
					classes.push('active');
				}
				if (currVal < startYear || currVal > endYear) {
					classes.push('disabled');
				}
				if (currVal === focusedVal) {
				  classes.push('focused');
        }

				if (beforeFn !== $.noop) {
					before = beforeFn(new Date(currVal, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof before === 'boolean') {
						before = {enabled: before};
					} else if (typeof before === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
			}

			view.find('.datepicker-switch').text(startVal + '-' + endVal);
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
        titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
        todayDate = UTCToday(),
        titleBtnVisible = (this.o.todayBtn === true || this.o.todayBtn === 'linked') && todayDate >= this.o.startDate && todayDate <= this.o.endDate && !this.weekOfDateIsDisabled(todayDate),
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
            .css('display', titleBtnVisible ? 'table-cell' : 'none');
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.css('display', this.o.clearBtn === true ? 'table-cell' : 'none');
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month, 0),
				day = prevMonth.getUTCDate();
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var weekDay, clsName;
			while (prevMonth.valueOf() < nextMonth){
				weekDay = prevMonth.getUTCDay();
				if (weekDay === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek = (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				var content = prevMonth.getUTCDate();

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
					if (before.content)
						content = before.content;
				}

				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
				//Fallback to unique function for older jquery versions
				if ($.isFunction($.uniqueSort)) {
					clsName = $.uniqueSort(clsName);
				} else {
					clsName = $.unique(clsName);
				}

				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + ' data-date="' + prevMonth.getTime().toString() + '">' + content + '</td>');
				tooltip = null;
				if (weekDay === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
			}
			this.picker.find('.datepicker-days tbody').html(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('tbody span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				var that = this;
				$.each(months, function(i, month){
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				prevIsDisabled,
				nextIsDisabled,
				factor = 1;
			switch (this.viewMode){
				case 4:
					factor *= 10;
					/* falls through */
				case 3:
					factor *= 10;
					/* falls through */
				case 2:
					factor *= 10;
					/* falls through */
				case 1:
					prevIsDisabled = Math.floor(year / factor) * factor <= startYear;
					nextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;
					break;
				case 0:
					prevIsDisabled = year <= startYear && month <= startMonth;
					nextIsDisabled = year >= endYear && month >= endMonth;
					break;
			}

			this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);
			this.picker.find('.next').toggleClass('disabled', nextIsDisabled);
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode){
				this.setViewMode(this.viewMode + 1);
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.setViewMode(0);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a month, year, decade, century
				if (target.hasClass('month')
						|| target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					if (this.viewMode === 1){
						month = target.parent().find('span').index(target);
						year = this.viewDate.getUTCFullYear();
						this.viewDate.setUTCMonth(month);
					} else {
						month = 0;
						year = Number(target.text());
						this.viewDate.setUTCFullYear(year);
					}

					this._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);

					if (this.viewMode === this.o.minViewMode){
						this._setDate(UTCDate(year, month, day));
					} else {
						this.setViewMode(this.viewMode - 1);
						this.fill();
					}
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				this._focused_from.focus();
			}
			delete this._focused_from;
		},

		dayCellClick: function(e){
			var $target = $(e.currentTarget);
			var timestamp = $target.data('date');
			var date = new Date(timestamp);

			if (this.o.updateViewDate) {
				if (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {
					this._trigger('changeYear', this.viewDate);
				}

				if (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {
					this._trigger('changeMonth', this.viewDate);
				}
			}
			this._setDate(date);
		},

		// Clicked on prev or next
		navArrowsClick: function(e){
			var $target = $(e.currentTarget);
			var dir = $target.hasClass('prev') ? -1 : 1;
			if (this.viewMode !== 0){
				dir *= DPGlobal.viewModes[this.viewMode].navStep * 12;
			}
			this.viewDate = this.moveMonth(this.viewDate, dir);
			this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);
			this.fill();
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if ((!which && this.o.updateViewDate) || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			this.inputField.trigger('change');
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					} else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					} else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					} else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				this.inputField.trigger('change');
			}
		},

		setViewMode: function(viewMode){
			this.viewMode = viewMode;
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
      this._trigger('changeViewMode', new Date(this.viewDate));
		}
	};

	var DateRangePicker = function(element, options){
		$.data(element, 'datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		this.keepEmptyValues = options.keepEmptyValues;
		delete options.keepEmptyValues;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $.data(i, 'datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		clearDates: function(){
			$.each(this.pickers, function(i, p){
				p.clearDates();
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $.data(e.target, 'datepicker');

			if (dp === undefined) {
				return;
			}

			var new_date = dp.getUTCDate(),
				keep_empty_values = this.keepEmptyValues,
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate() && (p === dp || !keep_empty_values))
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			} else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		destroy: function(){
			$.map(this.pickers, function(p){ p.destroy(); });
			$(this.inputs).off('changeDate', this.dateUpdated);
			delete this.element.data().datepicker;
		},
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keepEmptyValues: false,
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		updateViewDate: true,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&#x00AB;',
			rightArrow: '&#x00BB;'
		},
    showWeekDays: true
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		viewModes: [
			{
				names: ['days', 'month'],
				clsName: 'days',
				e: 'changeMonth'
			},
			{
				names: ['months', 'year'],
				clsName: 'months',
				e: 'changeYear',
				navStep: 1
			},
			{
				names: ['years', 'decade'],
				clsName: 'years',
				e: 'changeDecade',
				navStep: 10
			},
			{
				names: ['decades', 'century'],
				clsName: 'decades',
				e: 'changeCentury',
				navStep: 100
			},
			{
				names: ['centuries', 'millennium'],
				clsName: 'centuries',
				e: 'changeMillennium',
				navStep: 1000
			}
		],
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
				return format.toValue(date, format, language);
			var fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				parts, part, dir, i, fn;
			if (date in dateAliases){
				date = dateAliases[date];
			}
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(date)){
				parts = date.match(/([\-+]\d+)([dmwy])/gi);
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = parts[i].match(/([\-+]\d+)([dmwy])/i);
					dir = Number(part[1]);
					fn = fn_map[part[2].toLowerCase()];
					date = Datepicker.prototype[fn](date, dir);
				}
				return Datepicker.prototype._zero_utc_time(date);
			}

			parts = date && date.match(this.nonpunctuation) || [];

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['yy'] = setters_map['yyyy'];
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">'+defaults.templates.leftArrow+'</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">'+defaults.templates.rightArrow+'</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.9.0';

	$.fn.datepicker.deprecated = function(msg){
		var console = window.console;
		if (console && console.warn) {
			console.warn('DEPRECATED: ' + msg);
		}
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));

!function(a){a.fn.datepicker.dates.es={days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],daysShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],daysMin:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],today:"Hoy",monthsTitle:"Meses",clear:"Borrar",weekStart:1,format:"dd/mm/yyyy"}}(jQuery);
(function($){
  $.extend({
    uploadPreview : function (options) {

      // Options + Defaults
      var settings = $.extend({
        input_field: ".image-input",
        preview_box: ".image-preview",
        label_field: ".image-label",
        label_default: "Choose File",
        label_selected: "Change File",
        no_label: false,
        success_callback : null,
      }, options);

      // Check if FileReader is available
      if (window.File && window.FileList && window.FileReader) {
        if (typeof($(settings.input_field)) !== 'undefined' && $(settings.input_field) !== null) {
          $(settings.input_field).change(function()
          {
            var files = this.files;

            if (files.length > 0)
            {
              var file = files[0];
              var reader = new FileReader();

              // Load file
              reader.addEventListener("load",function(event)
              {
                var loadedFile = event.target;

                // Check format
                if (file.type.match('image'))
                {
                  // Image
                  if (file.size/1000 <= 1000)
                  {
                    $(settings.input_field).nextAll('.label-danger:first').hide();
                    $(settings.preview_box).css("background-image", "url("+loadedFile.result+")");
                    $(settings.preview_box).css("background-size", "cover");
                    $(settings.preview_box).css("background-position", "center center");
                  }
                  else
                  {
                    $(settings.input_field).nextAll('.label-danger:first').text('El archivo debe pesar menos de 1 MB');
                    $(settings.input_field).nextAll('.label-danger:first').show();
                  }
                }
                else if (file.type.match('audio'))
                {
                  // Audio
                  $(settings.preview_box).html("<audio controls><source src='" + loadedFile.result + "' type='" + file.type + "' />Your browser does not support the audio element.</audio>");
                }
                else
                {
                  $(settings.preview_box).css("background-image", "none");
                  $(settings.input_field).nextAll('.label-danger:first').text('Este campo solo acepta imagenes en formato JPG y PNG');
                  $(settings.input_field).nextAll('.label-danger:first').show();
                }
              });

              if (settings.no_label == false)
              {
                // Change label
                $(settings.label_field).html(settings.label_selected);
              }

              // Read the file
              reader.readAsDataURL(file);

              // Success callback function call
              if(settings.success_callback)
              {
                settings.success_callback();
              }
            }
            else
            {
              if (settings.no_label == false) {
                // Change label
                $(settings.label_field).html(settings.label_default);
              }

              // Clear background
              //$(settings.preview_box).css("background-image", "none");

              // Remove Audio
              $(settings.preview_box + " audio").remove();
            }
          });
        }
      } else {
        alert("You need a browser with file reader support, to use this form properly.");
        return false;
      }
    }
  });
})(jQuery);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
/*!
FullCalendar Standard Bundle v6.0.2
Docs & License: https://fullcalendar.io/docs/initialize-globals
(c) 2022 Adam Shaw
*/
var FullCalendar = (function (exports) {
    'use strict';

    var n,l$1,u$1,i$1,t,o,r$1,f$1={},e$1=[],c$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a$1(n){var l=n.parentNode;l&&l.removeChild(n);}function h(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v$1(l,f,t,o,null)}function v$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function y(){return {current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$1(n)}}function b$1(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g$2.__r++||o!==l$1.debounceRendering)&&((o=l$1.debounceRendering)||setTimeout)(g$2);}function g$2(){for(var n;g$2.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_(t):o,t.__h),z$1(u,t),t.__e!=o&&k$1(t)));});}function w$2(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e$1,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(p,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null;}j$2(n,k,d=d||f$1,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m$1(k,s,n):s=A(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_(d));}for(u.__e=g,h=C;h--;)null!=x[h]&&N(x[h],x[h]);if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h]);}function m$1(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m$1(i,l,u):A(u,i,i,t,i.__e,l));return l}function x$1(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){x$1(n,l);}):l.push(n)),l}function A(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$1:I$1,o):n.removeEventListener(l,o?T$1:I$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u));}}function I$1(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$1(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l$1.__b)&&a(u);try{n:if("function"==typeof T){if(g=u.props,m=(a=T.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in T&&T.prototype.render?u.__c=h=new T(g,x):(u.__c=h=new d(g,x),h.constructor=T,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,T.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==T.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){for(h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),A=0;A<h._sb.length;A++)h.__h.push(h._sb[A]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k);});}if(h.context=x,h.props=g,h.__v=u,h.__P=n,C=l$1.__r,$=0,"prototype"in T&&T.prototype.render){for(h.state=h.__s,h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),I=null!=a&&a.type===p&&null==a.key?a.props.children:a,w$2(n,Array.isArray(I)?I:[I],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(a=l$1.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$1(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),h=(y=i.props||f$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w$2(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a$1(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H$1(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H$1(l,"checked",k,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||a$1(n.__e),n.__=n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function P$1(u,i,t){var o,r,e;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j$2(i,u=(!o&&t||i).__k=h(p,null,[u]),r||f$1,f$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z$1(e,u);}function B$1(n,l){var u={__c:l="__cC"+r$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(b$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=e$1.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,i$1=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),b$1(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b$1(this));},d.prototype.render=p,t=[],g$2.__r=0,r$1=0;

    var r,u,i,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w$1),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n);var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w$1),i.__h=[])),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j$1)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w$1(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g$1="function"==typeof requestAnimationFrame;function j$1(n){var t,r=function(){clearTimeout(u),g$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$1&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w$1(n){var t=r;n.__c=n.__(),r=t;}

    function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function w(n){this.props=n;}(w.prototype=new d).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var x=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),x&&x(n);};var T=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r);};var I=l$1.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)})),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null;}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function V(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n);},(D.prototype=new d).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},D.prototype.componentWillUnmount=function(){this.t=[];},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&h(p,null,n.fallback);return i&&(i.__h=null),[h(p,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function P(n){return this.getChildContext=function(){return n.context},n.children}function $(n){var e=this,r=n.i;e.componentWillUnmount=function(){P$1(null,e.l),e.l=null,e.i=null;},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n);},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n);}}),P$1(h(P,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount();}function j(n,e){var r=h($,{__v:n,i:e});return r.containerInfo=e,r}(V.prototype=new d).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u();};e?e(o):o();}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=x$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t);});};var z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,B=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H="undefined"!=typeof document,Z=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};d.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(d.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var G=l$1.event;function J(){}function K(){return this.cancelBubble}function Q(){return this.defaultPrevented}l$1.event=function(n){return G&&(n=G(n)),n.persist=J,n.isPropagationStopped=K,n.isDefaultPrevented=Q,n.nativeEvent=n};var nn={configurable:!0,get:function(){return this.class}},tn=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,u=e;if("string"==typeof t){var o=-1===t.indexOf("-");for(var i in u={},e){var l=e[i];H&&"children"===i&&"noscript"===t||"value"===i&&"defaultValue"in e&&null==l||("defaultValue"===i&&"value"in e&&null==e.value?i="value":"download"===i&&!0===l?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!Z(e.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&B.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===l&&(l=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),u[i]&&(i="oninputCapture")),u[i]=l);}"select"==t&&u.multiple&&Array.isArray(u.value)&&(u.value=x$1(e.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==t&&null!=u.defaultValue&&(u.value=x$1(e.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),n.props=u,e.class!=e.className&&(nn.enumerable="className"in e,null!=e.className&&(u.class=e.className),Object.defineProperty(u,"className",nn));}n.$$typeof=z,tn&&tn(n);};var en=l$1.__r;l$1.__r=function(n){en&&en(n),n.__c;};

    function injectStyles(css) {
        if (!css || typeof document === 'undefined') {
            return;
        }
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        style.type = 'text/css';
        head.appendChild(style);
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(document.createTextNode(css));
        }
    }

    class DelayedRunner {
        constructor(drainedOption) {
            this.drainedOption = drainedOption;
            this.isRunning = false;
            this.isDirty = false;
            this.pauseDepths = {};
            this.timeoutId = 0;
        }
        request(delay) {
            this.isDirty = true;
            if (!this.isPaused()) {
                this.clearTimeout();
                if (delay == null) {
                    this.tryDrain();
                }
                else {
                    this.timeoutId = setTimeout(// NOT OPTIMAL! TODO: look at debounce
                    this.tryDrain.bind(this), delay);
                }
            }
        }
        pause(scope = '') {
            let { pauseDepths } = this;
            pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
            this.clearTimeout();
        }
        resume(scope = '', force) {
            let { pauseDepths } = this;
            if (scope in pauseDepths) {
                if (force) {
                    delete pauseDepths[scope];
                }
                else {
                    pauseDepths[scope] -= 1;
                    let depth = pauseDepths[scope];
                    if (depth <= 0) {
                        delete pauseDepths[scope];
                    }
                }
                this.tryDrain();
            }
        }
        isPaused() {
            return Object.keys(this.pauseDepths).length;
        }
        tryDrain() {
            if (!this.isRunning && !this.isPaused()) {
                this.isRunning = true;
                while (this.isDirty) {
                    this.isDirty = false;
                    this.drained(); // might set isDirty to true again
                }
                this.isRunning = false;
            }
        }
        clear() {
            this.clearTimeout();
            this.isDirty = false;
            this.pauseDepths = {};
        }
        clearTimeout() {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = 0;
            }
        }
        drained() {
            if (this.drainedOption) {
                this.drainedOption();
            }
        }
    }

    const { hasOwnProperty } = Object.prototype;
    // Merges an array of objects into a single object.
    // The second argument allows for an array of property names who's object values will be merged together.
    function mergeProps(propObjs, complexPropsMap) {
        let dest = {};
        if (complexPropsMap) {
            for (let name in complexPropsMap) {
                let complexObjs = [];
                // collect the trailing object values, stopping when a non-object is discovered
                for (let i = propObjs.length - 1; i >= 0; i -= 1) {
                    let val = propObjs[i][name];
                    if (typeof val === 'object' && val) { // non-null object
                        complexObjs.unshift(val);
                    }
                    else if (val !== undefined) {
                        dest[name] = val; // if there were no objects, this value will be used
                        break;
                    }
                }
                // if the trailing values were objects, use the merged value
                if (complexObjs.length) {
                    dest[name] = mergeProps(complexObjs);
                }
            }
        }
        // copy values into the destination, going from last to first
        for (let i = propObjs.length - 1; i >= 0; i -= 1) {
            let props = propObjs[i];
            for (let name in props) {
                if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
                    dest[name] = props[name];
                }
            }
        }
        return dest;
    }
    function filterHash(hash, func) {
        let filtered = {};
        for (let key in hash) {
            if (func(hash[key], key)) {
                filtered[key] = hash[key];
            }
        }
        return filtered;
    }
    function mapHash(hash, func) {
        let newHash = {};
        for (let key in hash) {
            newHash[key] = func(hash[key], key);
        }
        return newHash;
    }
    function arrayToHash(a) {
        let hash = {};
        for (let item of a) {
            hash[item] = true;
        }
        return hash;
    }
    // TODO: reassess browser support
    // https://caniuse.com/?search=object.values
    function hashValuesToArray(obj) {
        let a = [];
        for (let key in obj) {
            a.push(obj[key]);
        }
        return a;
    }
    function isPropsEqual(obj0, obj1) {
        if (obj0 === obj1) {
            return true;
        }
        for (let key in obj0) {
            if (hasOwnProperty.call(obj0, key)) {
                if (!(key in obj1)) {
                    return false;
                }
            }
        }
        for (let key in obj1) {
            if (hasOwnProperty.call(obj1, key)) {
                if (obj0[key] !== obj1[key]) {
                    return false;
                }
            }
        }
        return true;
    }
    const HANDLER_RE = /^on[A-Z]/;
    function isNonHandlerPropsEqual(obj0, obj1) {
        const keys = getUnequalProps(obj0, obj1);
        for (let key of keys) {
            if (!HANDLER_RE.test(key)) {
                return false;
            }
        }
        return true;
    }
    function getUnequalProps(obj0, obj1) {
        let keys = [];
        for (let key in obj0) {
            if (hasOwnProperty.call(obj0, key)) {
                if (!(key in obj1)) {
                    keys.push(key);
                }
            }
        }
        for (let key in obj1) {
            if (hasOwnProperty.call(obj1, key)) {
                if (obj0[key] !== obj1[key]) {
                    keys.push(key);
                }
            }
        }
        return keys;
    }
    function compareObjs(oldProps, newProps, equalityFuncs = {}) {
        if (oldProps === newProps) {
            return true;
        }
        for (let key in newProps) {
            if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;
            else {
                return false;
            }
        }
        // check for props that were omitted in the new
        for (let key in oldProps) {
            if (!(key in newProps)) {
                return false;
            }
        }
        return true;
    }
    /*
    assumed "true" equality for handler names like "onReceiveSomething"
    */
    function isObjValsEqual(val0, val1, comparator) {
        if (val0 === val1 || comparator === true) {
            return true;
        }
        if (comparator) {
            return comparator(val0, val1);
        }
        return false;
    }
    function collectFromHash(hash, startIndex = 0, endIndex, step = 1) {
        let res = [];
        if (endIndex == null) {
            endIndex = Object.keys(hash).length;
        }
        for (let i = startIndex; i < endIndex; i += step) {
            let val = hash[i];
            if (val !== undefined) { // will disregard undefined for sparse arrays
                res.push(val);
            }
        }
        return res;
    }

    // TODO: new util arrayify?
    function removeExact(array, exactVal) {
        let removeCnt = 0;
        let i = 0;
        while (i < array.length) {
            if (array[i] === exactVal) {
                array.splice(i, 1);
                removeCnt += 1;
            }
            else {
                i += 1;
            }
        }
        return removeCnt;
    }
    function isArraysEqual(a0, a1, equalityFunc) {
        if (a0 === a1) {
            return true;
        }
        let len = a0.length;
        let i;
        if (len !== a1.length) { // not array? or not same length?
            return false;
        }
        for (i = 0; i < len; i += 1) {
            if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
                return false;
            }
        }
        return true;
    }

    function memoize(workerFunc, resEquality, teardownFunc) {
        let currentArgs;
        let currentRes;
        return function (...newArgs) {
            if (!currentArgs) {
                currentRes = workerFunc.apply(this, newArgs);
            }
            else if (!isArraysEqual(currentArgs, newArgs)) {
                if (teardownFunc) {
                    teardownFunc(currentRes);
                }
                let res = workerFunc.apply(this, newArgs);
                if (!resEquality || !resEquality(res, currentRes)) {
                    currentRes = res;
                }
            }
            currentArgs = newArgs;
            return currentRes;
        };
    }
    function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
        let currentArg;
        let currentRes;
        return (newArg) => {
            if (!currentArg) {
                currentRes = workerFunc.call(this, newArg);
            }
            else if (!isPropsEqual(currentArg, newArg)) {
                if (teardownFunc) {
                    teardownFunc(currentRes);
                }
                let res = workerFunc.call(this, newArg);
                if (!resEquality || !resEquality(res, currentRes)) {
                    currentRes = res;
                }
            }
            currentArg = newArg;
            return currentRes;
        };
    }
    function memoizeArraylike(// used at all?
    workerFunc, resEquality, teardownFunc) {
        let currentArgSets = [];
        let currentResults = [];
        return (newArgSets) => {
            let currentLen = currentArgSets.length;
            let newLen = newArgSets.length;
            let i = 0;
            for (; i < currentLen; i += 1) {
                if (!newArgSets[i]) { // one of the old sets no longer exists
                    if (teardownFunc) {
                        teardownFunc(currentResults[i]);
                    }
                }
                else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
                    if (teardownFunc) {
                        teardownFunc(currentResults[i]);
                    }
                    let res = workerFunc.apply(this, newArgSets[i]);
                    if (!resEquality || !resEquality(res, currentResults[i])) {
                        currentResults[i] = res;
                    }
                }
            }
            for (; i < newLen; i += 1) {
                currentResults[i] = workerFunc.apply(this, newArgSets[i]);
            }
            currentArgSets = newArgSets;
            currentResults.splice(newLen); // remove excess
            return currentResults;
        };
    }
    function memoizeHashlike(workerFunc, resEquality, teardownFunc) {
        let currentArgHash = {};
        let currentResHash = {};
        return (newArgHash) => {
            let newResHash = {};
            for (let key in newArgHash) {
                if (!currentResHash[key]) {
                    newResHash[key] = workerFunc.apply(this, newArgHash[key]);
                }
                else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
                    if (teardownFunc) {
                        teardownFunc(currentResHash[key]);
                    }
                    let res = workerFunc.apply(this, newArgHash[key]);
                    newResHash[key] = (resEquality && resEquality(res, currentResHash[key]))
                        ? currentResHash[key]
                        : res;
                }
                else {
                    newResHash[key] = currentResHash[key];
                }
            }
            currentArgHash = newArgHash;
            currentResHash = newResHash;
            return newResHash;
        };
    }

    function removeElement(el) {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
    // Querying
    // ----------------------------------------------------------------------------------------------------------------
    function elementClosest(el, selector) {
        if (el.closest) {
            return el.closest(selector);
            // really bad fallback for IE
            // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
        }
        if (!document.documentElement.contains(el)) {
            return null;
        }
        do {
            if (elementMatches(el, selector)) {
                return el;
            }
            el = (el.parentElement || el.parentNode);
        } while (el !== null && el.nodeType === 1);
        return null;
    }
    function elementMatches(el, selector) {
        let method = el.matches || el.matchesSelector || el.msMatchesSelector;
        return method.call(el, selector);
    }
    // accepts multiple subject els
    // returns a real array. good for methods like forEach
    // TODO: accept the document
    function findElements(container, selector) {
        let containers = container instanceof HTMLElement ? [container] : container;
        let allMatches = [];
        for (let i = 0; i < containers.length; i += 1) {
            let matches = containers[i].querySelectorAll(selector);
            for (let j = 0; j < matches.length; j += 1) {
                allMatches.push(matches[j]);
            }
        }
        return allMatches;
    }
    // accepts multiple subject els
    // only queries direct child elements // TODO: rename to findDirectChildren!
    function findDirectChildren(parent, selector) {
        let parents = parent instanceof HTMLElement ? [parent] : parent;
        let allMatches = [];
        for (let i = 0; i < parents.length; i += 1) {
            let childNodes = parents[i].children; // only ever elements
            for (let j = 0; j < childNodes.length; j += 1) {
                let childNode = childNodes[j];
                if (!selector || elementMatches(childNode, selector)) {
                    allMatches.push(childNode);
                }
            }
        }
        return allMatches;
    }
    // Style
    // ----------------------------------------------------------------------------------------------------------------
    const PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
    function applyStyle(el, props) {
        for (let propName in props) {
            applyStyleProp(el, propName, props[propName]);
        }
    }
    function applyStyleProp(el, name, val) {
        if (val == null) {
            el.style[name] = '';
        }
        else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
            el.style[name] = `${val}px`;
        }
        else {
            el.style[name] = val;
        }
    }
    // Event Handling
    // ----------------------------------------------------------------------------------------------------------------
    // if intercepting bubbled events at the document/window/body level,
    // and want to see originating element (the 'target'), use this util instead
    // of `ev.target` because it goes within web-component boundaries.
    function getEventTargetViaRoot(ev) {
        var _a, _b;
        return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
    }
    // Shadow DOM consuderations
    // ----------------------------------------------------------------------------------------------------------------
    function getElRoot(el) {
        return el.getRootNode ? el.getRootNode() : document;
    }
    // Unique ID for DOM attribute
    let guid$1 = 0;
    function getUniqueDomId() {
        guid$1 += 1;
        return 'fc-dom-' + guid$1;
    }

    // Stops a mouse/touch event from doing it's native browser action
    function preventDefault(ev) {
        ev.preventDefault();
    }
    // Event Delegation
    // ----------------------------------------------------------------------------------------------------------------
    function buildDelegationHandler(selector, handler) {
        return (ev) => {
            let matchedChild = elementClosest(ev.target, selector);
            if (matchedChild) {
                handler.call(matchedChild, ev, matchedChild);
            }
        };
    }
    function listenBySelector(container, eventType, selector, handler) {
        let attachedHandler = buildDelegationHandler(selector, handler);
        container.addEventListener(eventType, attachedHandler);
        return () => {
            container.removeEventListener(eventType, attachedHandler);
        };
    }
    function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
        let currentMatchedChild;
        return listenBySelector(container, 'mouseover', selector, (mouseOverEv, matchedChild) => {
            if (matchedChild !== currentMatchedChild) {
                currentMatchedChild = matchedChild;
                onMouseEnter(mouseOverEv, matchedChild);
                let realOnMouseLeave = (mouseLeaveEv) => {
                    currentMatchedChild = null;
                    onMouseLeave(mouseLeaveEv, matchedChild);
                    matchedChild.removeEventListener('mouseleave', realOnMouseLeave);
                };
                // listen to the next mouseleave, and then unattach
                matchedChild.addEventListener('mouseleave', realOnMouseLeave);
            }
        });
    }
    // Animation
    // ----------------------------------------------------------------------------------------------------------------
    const transitionEventNames = [
        'webkitTransitionEnd',
        'otransitionend',
        'oTransitionEnd',
        'msTransitionEnd',
        'transitionend',
    ];
    // triggered only when the next single subsequent transition finishes
    function whenTransitionDone(el, callback) {
        let realCallback = (ev) => {
            callback(ev);
            transitionEventNames.forEach((eventName) => {
                el.removeEventListener(eventName, realCallback);
            });
        };
        transitionEventNames.forEach((eventName) => {
            el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
        });
    }
    // ARIA workarounds
    // ----------------------------------------------------------------------------------------------------------------
    function createAriaClickAttrs(handler) {
        return Object.assign({ onClick: handler }, createAriaKeyboardAttrs(handler));
    }
    function createAriaKeyboardAttrs(handler) {
        return {
            tabIndex: 0,
            onKeyDown(ev) {
                if (ev.key === 'Enter' || ev.key === ' ') {
                    handler(ev);
                    ev.preventDefault(); // if space, don't scroll down page
                }
            },
        };
    }

    let guidNumber = 0;
    function guid() {
        guidNumber += 1;
        return String(guidNumber);
    }
    /* FullCalendar-specific DOM Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    // Make the mouse cursor express that an event is not allowed in the current area
    function disableCursor() {
        document.body.classList.add('fc-not-allowed');
    }
    // Returns the mouse cursor to its original look
    function enableCursor() {
        document.body.classList.remove('fc-not-allowed');
    }
    /* Selection
    ----------------------------------------------------------------------------------------------------------------------*/
    function preventSelection(el) {
        el.classList.add('fc-unselectable');
        el.addEventListener('selectstart', preventDefault);
    }
    function allowSelection(el) {
        el.classList.remove('fc-unselectable');
        el.removeEventListener('selectstart', preventDefault);
    }
    /* Context Menu
    ----------------------------------------------------------------------------------------------------------------------*/
    function preventContextMenu(el) {
        el.addEventListener('contextmenu', preventDefault);
    }
    function allowContextMenu(el) {
        el.removeEventListener('contextmenu', preventDefault);
    }
    function parseFieldSpecs(input) {
        let specs = [];
        let tokens = [];
        let i;
        let token;
        if (typeof input === 'string') {
            tokens = input.split(/\s*,\s*/);
        }
        else if (typeof input === 'function') {
            tokens = [input];
        }
        else if (Array.isArray(input)) {
            tokens = input;
        }
        for (i = 0; i < tokens.length; i += 1) {
            token = tokens[i];
            if (typeof token === 'string') {
                specs.push(token.charAt(0) === '-' ?
                    { field: token.substring(1), order: -1 } :
                    { field: token, order: 1 });
            }
            else if (typeof token === 'function') {
                specs.push({ func: token });
            }
        }
        return specs;
    }
    function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
        let i;
        let cmp;
        for (i = 0; i < fieldSpecs.length; i += 1) {
            cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
            if (cmp) {
                return cmp;
            }
        }
        return 0;
    }
    function compareByFieldSpec(obj0, obj1, fieldSpec) {
        if (fieldSpec.func) {
            return fieldSpec.func(obj0, obj1);
        }
        return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field])
            * (fieldSpec.order || 1);
    }
    function flexibleCompare(a, b) {
        if (!a && !b) {
            return 0;
        }
        if (b == null) {
            return -1;
        }
        if (a == null) {
            return 1;
        }
        if (typeof a === 'string' || typeof b === 'string') {
            return String(a).localeCompare(String(b));
        }
        return a - b;
    }
    /* String Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function padStart(val, len) {
        let s = String(val);
        return '000'.substr(0, len - s.length) + s;
    }
    function formatWithOrdinals(formatter, args, fallbackText) {
        if (typeof formatter === 'function') {
            return formatter(...args);
        }
        if (typeof formatter === 'string') { // non-blank string
            return args.reduce((str, arg, index) => (str.replace('$' + index, arg || '')), formatter);
        }
        return fallbackText;
    }
    /* Number Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function compareNumbers(a, b) {
        return a - b;
    }
    function isInt(n) {
        return n % 1 === 0;
    }
    /* FC-specific DOM dimension stuff
    ----------------------------------------------------------------------------------------------------------------------*/
    function computeSmallestCellWidth(cellEl) {
        let allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
        let contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');
        if (!allWidthEl) {
            throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
        }
        if (!contentWidthEl) {
            throw new Error('needs fc-scrollgrid-shrink-cushion className');
        }
        return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + // the cell padding+border
            contentWidthEl.getBoundingClientRect().width;
    }

    const DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    // Adding
    function addWeeks(m, n) {
        let a = dateToUtcArray(m);
        a[2] += n * 7;
        return arrayToUtcDate(a);
    }
    function addDays(m, n) {
        let a = dateToUtcArray(m);
        a[2] += n;
        return arrayToUtcDate(a);
    }
    function addMs(m, n) {
        let a = dateToUtcArray(m);
        a[6] += n;
        return arrayToUtcDate(a);
    }
    // Diffing (all return floats)
    // TODO: why not use ranges?
    function diffWeeks(m0, m1) {
        return diffDays(m0, m1) / 7;
    }
    function diffDays(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
    }
    function diffHours(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
    }
    function diffMinutes(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
    }
    function diffSeconds(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / 1000;
    }
    function diffDayAndTime(m0, m1) {
        let m0day = startOfDay(m0);
        let m1day = startOfDay(m1);
        return {
            years: 0,
            months: 0,
            days: Math.round(diffDays(m0day, m1day)),
            milliseconds: (m1.valueOf() - m1day.valueOf()) - (m0.valueOf() - m0day.valueOf()),
        };
    }
    // Diffing Whole Units
    function diffWholeWeeks(m0, m1) {
        let d = diffWholeDays(m0, m1);
        if (d !== null && d % 7 === 0) {
            return d / 7;
        }
        return null;
    }
    function diffWholeDays(m0, m1) {
        if (timeAsMs(m0) === timeAsMs(m1)) {
            return Math.round(diffDays(m0, m1));
        }
        return null;
    }
    // Start-Of
    function startOfDay(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
        ]);
    }
    function startOfHour(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours(),
        ]);
    }
    function startOfMinute(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours(),
            m.getUTCMinutes(),
        ]);
    }
    function startOfSecond(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours(),
            m.getUTCMinutes(),
            m.getUTCSeconds(),
        ]);
    }
    // Week Computation
    function weekOfYear(marker, dow, doy) {
        let y = marker.getUTCFullYear();
        let w = weekOfGivenYear(marker, y, dow, doy);
        if (w < 1) {
            return weekOfGivenYear(marker, y - 1, dow, doy);
        }
        let nextW = weekOfGivenYear(marker, y + 1, dow, doy);
        if (nextW >= 1) {
            return Math.min(w, nextW);
        }
        return w;
    }
    function weekOfGivenYear(marker, year, dow, doy) {
        let firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
        let dayStart = startOfDay(marker);
        let days = Math.round(diffDays(firstWeekStart, dayStart));
        return Math.floor(days / 7) + 1; // zero-indexed
    }
    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        let fwd = 7 + dow - doy;
        // first-week day local weekday -- which local weekday is fwd
        let fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    // Array Conversion
    function dateToLocalArray(date) {
        return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds(),
        ];
    }
    function arrayToLocalDate(a) {
        return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
        a[3] || 0, a[4] || 0, a[5] || 0);
    }
    function dateToUtcArray(date) {
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            date.getUTCMilliseconds(),
        ];
    }
    function arrayToUtcDate(a) {
        // according to web standards (and Safari), a month index is required.
        // massage if only given a year.
        if (a.length === 1) {
            a = a.concat([0]);
        }
        return new Date(Date.UTC(...a));
    }
    // Other Utils
    function isValidDate(m) {
        return !isNaN(m.valueOf());
    }
    function timeAsMs(m) {
        return m.getUTCHours() * 1000 * 60 * 60 +
            m.getUTCMinutes() * 1000 * 60 +
            m.getUTCSeconds() * 1000 +
            m.getUTCMilliseconds();
    }

    let calendarSystemClassMap = {};
    function registerCalendarSystem(name, theClass) {
        calendarSystemClassMap[name] = theClass;
    }
    function createCalendarSystem(name) {
        return new calendarSystemClassMap[name]();
    }
    class GregorianCalendarSystem {
        getMarkerYear(d) {
            return d.getUTCFullYear();
        }
        getMarkerMonth(d) {
            return d.getUTCMonth();
        }
        getMarkerDay(d) {
            return d.getUTCDate();
        }
        arrayToMarker(arr) {
            return arrayToUtcDate(arr);
        }
        markerToArray(marker) {
            return dateToUtcArray(marker);
        }
    }
    registerCalendarSystem('gregory', GregorianCalendarSystem);

    const INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
    const PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    // Parsing and Creation
    function createDuration(input, unit) {
        if (typeof input === 'string') {
            return parseString(input);
        }
        if (typeof input === 'object' && input) { // non-null object
            return parseObject(input);
        }
        if (typeof input === 'number') {
            return parseObject({ [unit || 'milliseconds']: input });
        }
        return null;
    }
    function parseString(s) {
        let m = PARSE_RE.exec(s);
        if (m) {
            let sign = m[1] ? -1 : 1;
            return {
                years: 0,
                months: 0,
                days: sign * (m[2] ? parseInt(m[2], 10) : 0),
                milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
                    (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
                    (m[5] ? parseInt(m[5], 10) : 0) * 1000 + // seconds
                    (m[6] ? parseInt(m[6], 10) : 0) // ms
                ),
            };
        }
        return null;
    }
    function parseObject(obj) {
        let duration = {
            years: obj.years || obj.year || 0,
            months: obj.months || obj.month || 0,
            days: obj.days || obj.day || 0,
            milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
                (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
                (obj.seconds || obj.second || 0) * 1000 + // seconds
                (obj.milliseconds || obj.millisecond || obj.ms || 0), // ms
        };
        let weeks = obj.weeks || obj.week;
        if (weeks) {
            duration.days += weeks * 7;
            duration.specifiedWeeks = true;
        }
        return duration;
    }
    // Equality
    function durationsEqual(d0, d1) {
        return d0.years === d1.years &&
            d0.months === d1.months &&
            d0.days === d1.days &&
            d0.milliseconds === d1.milliseconds;
    }
    function asCleanDays(dur) {
        if (!dur.years && !dur.months && !dur.milliseconds) {
            return dur.days;
        }
        return 0;
    }
    // Simple Math
    function addDurations(d0, d1) {
        return {
            years: d0.years + d1.years,
            months: d0.months + d1.months,
            days: d0.days + d1.days,
            milliseconds: d0.milliseconds + d1.milliseconds,
        };
    }
    function subtractDurations(d1, d0) {
        return {
            years: d1.years - d0.years,
            months: d1.months - d0.months,
            days: d1.days - d0.days,
            milliseconds: d1.milliseconds - d0.milliseconds,
        };
    }
    function multiplyDuration(d, n) {
        return {
            years: d.years * n,
            months: d.months * n,
            days: d.days * n,
            milliseconds: d.milliseconds * n,
        };
    }
    // Conversions
    // "Rough" because they are based on average-case Gregorian months/years
    function asRoughYears(dur) {
        return asRoughDays(dur) / 365;
    }
    function asRoughMonths(dur) {
        return asRoughDays(dur) / 30;
    }
    function asRoughDays(dur) {
        return asRoughMs(dur) / 864e5;
    }
    function asRoughMinutes(dur) {
        return asRoughMs(dur) / (1000 * 60);
    }
    function asRoughSeconds(dur) {
        return asRoughMs(dur) / 1000;
    }
    function asRoughMs(dur) {
        return dur.years * (365 * 864e5) +
            dur.months * (30 * 864e5) +
            dur.days * 864e5 +
            dur.milliseconds;
    }
    // Advanced Math
    function wholeDivideDurations(numerator, denominator) {
        let res = null;
        for (let i = 0; i < INTERNAL_UNITS.length; i += 1) {
            let unit = INTERNAL_UNITS[i];
            if (denominator[unit]) {
                let localRes = numerator[unit] / denominator[unit];
                if (!isInt(localRes) || (res !== null && res !== localRes)) {
                    return null;
                }
                res = localRes;
            }
            else if (numerator[unit]) {
                // needs to divide by something but can't!
                return null;
            }
        }
        return res;
    }
    function greatestDurationDenominator(dur) {
        let ms = dur.milliseconds;
        if (ms) {
            if (ms % 1000 !== 0) {
                return { unit: 'millisecond', value: ms };
            }
            if (ms % (1000 * 60) !== 0) {
                return { unit: 'second', value: ms / 1000 };
            }
            if (ms % (1000 * 60 * 60) !== 0) {
                return { unit: 'minute', value: ms / (1000 * 60) };
            }
            if (ms) {
                return { unit: 'hour', value: ms / (1000 * 60 * 60) };
            }
        }
        if (dur.days) {
            if (dur.specifiedWeeks && dur.days % 7 === 0) {
                return { unit: 'week', value: dur.days / 7 };
            }
            return { unit: 'day', value: dur.days };
        }
        if (dur.months) {
            return { unit: 'month', value: dur.months };
        }
        if (dur.years) {
            return { unit: 'year', value: dur.years };
        }
        return { unit: 'millisecond', value: 0 };
    }

    // timeZoneOffset is in minutes
    function buildIsoString(marker, timeZoneOffset, stripZeroTime = false) {
        let s = marker.toISOString();
        s = s.replace('.000', '');
        if (stripZeroTime) {
            s = s.replace('T00:00:00Z', '');
        }
        if (s.length > 10) { // time part wasn't stripped, can add timezone info
            if (timeZoneOffset == null) {
                s = s.replace('Z', '');
            }
            else if (timeZoneOffset !== 0) {
                s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
            }
            // otherwise, its UTC-0 and we want to keep the Z
        }
        return s;
    }
    // formats the date, but with no time part
    // TODO: somehow merge with buildIsoString and stripZeroTime
    // TODO: rename. omit "string"
    function formatDayString(marker) {
        return marker.toISOString().replace(/T.*$/, '');
    }
    // TODO: use Date::toISOString and use everything after the T?
    function formatIsoTimeString(marker) {
        return padStart(marker.getUTCHours(), 2) + ':' +
            padStart(marker.getUTCMinutes(), 2) + ':' +
            padStart(marker.getUTCSeconds(), 2);
    }
    function formatTimeZoneOffset(minutes, doIso = false) {
        let sign = minutes < 0 ? '-' : '+';
        let abs = Math.abs(minutes);
        let hours = Math.floor(abs / 60);
        let mins = Math.round(abs % 60);
        if (doIso) {
            return `${sign + padStart(hours, 2)}:${padStart(mins, 2)}`;
        }
        return `GMT${sign}${hours}${mins ? `:${padStart(mins, 2)}` : ''}`;
    }

    const ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
    function parse(str) {
        let m = ISO_RE.exec(str);
        if (m) {
            let marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number(`0.${m[12]}`) * 1000 : 0));
            if (isValidDate(marker)) {
                let timeZoneOffset = null;
                if (m[13]) {
                    timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 +
                        Number(m[18] || 0));
                }
                return {
                    marker,
                    isTimeUnspecified: !m[6],
                    timeZoneOffset,
                };
            }
        }
        return null;
    }

    class DateEnv {
        constructor(settings) {
            let timeZone = this.timeZone = settings.timeZone;
            let isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
            if (settings.namedTimeZoneImpl && isNamedTimeZone) {
                this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
            }
            this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
            this.calendarSystem = createCalendarSystem(settings.calendarSystem);
            this.locale = settings.locale;
            this.weekDow = settings.locale.week.dow;
            this.weekDoy = settings.locale.week.doy;
            if (settings.weekNumberCalculation === 'ISO') {
                this.weekDow = 1;
                this.weekDoy = 4;
            }
            if (typeof settings.firstDay === 'number') {
                this.weekDow = settings.firstDay;
            }
            if (typeof settings.weekNumberCalculation === 'function') {
                this.weekNumberFunc = settings.weekNumberCalculation;
            }
            this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
            this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
            this.cmdFormatter = settings.cmdFormatter;
            this.defaultSeparator = settings.defaultSeparator;
        }
        // Creating / Parsing
        createMarker(input) {
            let meta = this.createMarkerMeta(input);
            if (meta === null) {
                return null;
            }
            return meta.marker;
        }
        createNowMarker() {
            if (this.canComputeOffset) {
                return this.timestampToMarker(new Date().valueOf());
            }
            // if we can't compute the current date val for a timezone,
            // better to give the current local date vals than UTC
            return arrayToUtcDate(dateToLocalArray(new Date()));
        }
        createMarkerMeta(input) {
            if (typeof input === 'string') {
                return this.parse(input);
            }
            let marker = null;
            if (typeof input === 'number') {
                marker = this.timestampToMarker(input);
            }
            else if (input instanceof Date) {
                input = input.valueOf();
                if (!isNaN(input)) {
                    marker = this.timestampToMarker(input);
                }
            }
            else if (Array.isArray(input)) {
                marker = arrayToUtcDate(input);
            }
            if (marker === null || !isValidDate(marker)) {
                return null;
            }
            return { marker, isTimeUnspecified: false, forcedTzo: null };
        }
        parse(s) {
            let parts = parse(s);
            if (parts === null) {
                return null;
            }
            let { marker } = parts;
            let forcedTzo = null;
            if (parts.timeZoneOffset !== null) {
                if (this.canComputeOffset) {
                    marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
                }
                else {
                    forcedTzo = parts.timeZoneOffset;
                }
            }
            return { marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo };
        }
        // Accessors
        getYear(marker) {
            return this.calendarSystem.getMarkerYear(marker);
        }
        getMonth(marker) {
            return this.calendarSystem.getMarkerMonth(marker);
        }
        // Adding / Subtracting
        add(marker, dur) {
            let a = this.calendarSystem.markerToArray(marker);
            a[0] += dur.years;
            a[1] += dur.months;
            a[2] += dur.days;
            a[6] += dur.milliseconds;
            return this.calendarSystem.arrayToMarker(a);
        }
        subtract(marker, dur) {
            let a = this.calendarSystem.markerToArray(marker);
            a[0] -= dur.years;
            a[1] -= dur.months;
            a[2] -= dur.days;
            a[6] -= dur.milliseconds;
            return this.calendarSystem.arrayToMarker(a);
        }
        addYears(marker, n) {
            let a = this.calendarSystem.markerToArray(marker);
            a[0] += n;
            return this.calendarSystem.arrayToMarker(a);
        }
        addMonths(marker, n) {
            let a = this.calendarSystem.markerToArray(marker);
            a[1] += n;
            return this.calendarSystem.arrayToMarker(a);
        }
        // Diffing Whole Units
        diffWholeYears(m0, m1) {
            let { calendarSystem } = this;
            if (timeAsMs(m0) === timeAsMs(m1) &&
                calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) &&
                calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
                return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
            }
            return null;
        }
        diffWholeMonths(m0, m1) {
            let { calendarSystem } = this;
            if (timeAsMs(m0) === timeAsMs(m1) &&
                calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
                return (calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0)) +
                    (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
            }
            return null;
        }
        // Range / Duration
        greatestWholeUnit(m0, m1) {
            let n = this.diffWholeYears(m0, m1);
            if (n !== null) {
                return { unit: 'year', value: n };
            }
            n = this.diffWholeMonths(m0, m1);
            if (n !== null) {
                return { unit: 'month', value: n };
            }
            n = diffWholeWeeks(m0, m1);
            if (n !== null) {
                return { unit: 'week', value: n };
            }
            n = diffWholeDays(m0, m1);
            if (n !== null) {
                return { unit: 'day', value: n };
            }
            n = diffHours(m0, m1);
            if (isInt(n)) {
                return { unit: 'hour', value: n };
            }
            n = diffMinutes(m0, m1);
            if (isInt(n)) {
                return { unit: 'minute', value: n };
            }
            n = diffSeconds(m0, m1);
            if (isInt(n)) {
                return { unit: 'second', value: n };
            }
            return { unit: 'millisecond', value: m1.valueOf() - m0.valueOf() };
        }
        countDurationsBetween(m0, m1, d) {
            // TODO: can use greatestWholeUnit
            let diff;
            if (d.years) {
                diff = this.diffWholeYears(m0, m1);
                if (diff !== null) {
                    return diff / asRoughYears(d);
                }
            }
            if (d.months) {
                diff = this.diffWholeMonths(m0, m1);
                if (diff !== null) {
                    return diff / asRoughMonths(d);
                }
            }
            if (d.days) {
                diff = diffWholeDays(m0, m1);
                if (diff !== null) {
                    return diff / asRoughDays(d);
                }
            }
            return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
        }
        // Start-Of
        // these DON'T return zoned-dates. only UTC start-of dates
        startOf(m, unit) {
            if (unit === 'year') {
                return this.startOfYear(m);
            }
            if (unit === 'month') {
                return this.startOfMonth(m);
            }
            if (unit === 'week') {
                return this.startOfWeek(m);
            }
            if (unit === 'day') {
                return startOfDay(m);
            }
            if (unit === 'hour') {
                return startOfHour(m);
            }
            if (unit === 'minute') {
                return startOfMinute(m);
            }
            if (unit === 'second') {
                return startOfSecond(m);
            }
            return null;
        }
        startOfYear(m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m),
            ]);
        }
        startOfMonth(m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m),
                this.calendarSystem.getMarkerMonth(m),
            ]);
        }
        startOfWeek(m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m),
                this.calendarSystem.getMarkerMonth(m),
                m.getUTCDate() - ((m.getUTCDay() - this.weekDow + 7) % 7),
            ]);
        }
        // Week Number
        computeWeekNumber(marker) {
            if (this.weekNumberFunc) {
                return this.weekNumberFunc(this.toDate(marker));
            }
            return weekOfYear(marker, this.weekDow, this.weekDoy);
        }
        // TODO: choke on timeZoneName: long
        format(marker, formatter, dateOptions = {}) {
            return formatter.format({
                marker,
                timeZoneOffset: dateOptions.forcedTzo != null ?
                    dateOptions.forcedTzo :
                    this.offsetForMarker(marker),
            }, this);
        }
        formatRange(start, end, formatter, dateOptions = {}) {
            if (dateOptions.isEndExclusive) {
                end = addMs(end, -1);
            }
            return formatter.formatRange({
                marker: start,
                timeZoneOffset: dateOptions.forcedStartTzo != null ?
                    dateOptions.forcedStartTzo :
                    this.offsetForMarker(start),
            }, {
                marker: end,
                timeZoneOffset: dateOptions.forcedEndTzo != null ?
                    dateOptions.forcedEndTzo :
                    this.offsetForMarker(end),
            }, this, dateOptions.defaultSeparator);
        }
        /*
        DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
        might as well use buildIsoString or some other util directly
        */
        formatIso(marker, extraOptions = {}) {
            let timeZoneOffset = null;
            if (!extraOptions.omitTimeZoneOffset) {
                if (extraOptions.forcedTzo != null) {
                    timeZoneOffset = extraOptions.forcedTzo;
                }
                else {
                    timeZoneOffset = this.offsetForMarker(marker);
                }
            }
            return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
        }
        // TimeZone
        timestampToMarker(ms) {
            if (this.timeZone === 'local') {
                return arrayToUtcDate(dateToLocalArray(new Date(ms)));
            }
            if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
                return new Date(ms);
            }
            return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
        }
        offsetForMarker(m) {
            if (this.timeZone === 'local') {
                return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
            }
            if (this.timeZone === 'UTC') {
                return 0;
            }
            if (this.namedTimeZoneImpl) {
                return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
            }
            return null;
        }
        // Conversion
        toDate(m, forcedTzo) {
            if (this.timeZone === 'local') {
                return arrayToLocalDate(dateToUtcArray(m));
            }
            if (this.timeZone === 'UTC') {
                return new Date(m.valueOf()); // make sure it's a copy
            }
            if (!this.namedTimeZoneImpl) {
                return new Date(m.valueOf() - (forcedTzo || 0));
            }
            return new Date(m.valueOf() -
                this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60);
        }
    }

    class Theme {
        constructor(calendarOptions) {
            if (this.iconOverrideOption) {
                this.setIconOverride(calendarOptions[this.iconOverrideOption]);
            }
        }
        setIconOverride(iconOverrideHash) {
            let iconClassesCopy;
            let buttonName;
            if (typeof iconOverrideHash === 'object' && iconOverrideHash) { // non-null object
                iconClassesCopy = Object.assign({}, this.iconClasses);
                for (buttonName in iconOverrideHash) {
                    iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
                }
                this.iconClasses = iconClassesCopy;
            }
            else if (iconOverrideHash === false) {
                this.iconClasses = {};
            }
        }
        applyIconOverridePrefix(className) {
            let prefix = this.iconOverridePrefix;
            if (prefix && className.indexOf(prefix) !== 0) { // if not already present
                className = prefix + className;
            }
            return className;
        }
        getClass(key) {
            return this.classes[key] || '';
        }
        getIconClass(buttonName, isRtl) {
            let className;
            if (isRtl && this.rtlIconClasses) {
                className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
            }
            else {
                className = this.iconClasses[buttonName];
            }
            if (className) {
                return `${this.baseIconClass} ${className}`;
            }
            return '';
        }
        getCustomButtonIconClass(customButtonProps) {
            let className;
            if (this.iconOverrideCustomButtonOption) {
                className = customButtonProps[this.iconOverrideCustomButtonOption];
                if (className) {
                    return `${this.baseIconClass} ${this.applyIconOverridePrefix(className)}`;
                }
            }
            return '';
        }
    }
    Theme.prototype.classes = {};
    Theme.prototype.iconClasses = {};
    Theme.prototype.baseIconClass = '';
    Theme.prototype.iconOverridePrefix = '';

    const EXTENDED_SETTINGS_AND_SEVERITIES = {
        week: 3,
        separator: 0,
        omitZeroMinute: 0,
        meridiem: 0,
        omitCommas: 0,
    };
    const STANDARD_DATE_PROP_SEVERITIES = {
        timeZoneName: 7,
        era: 6,
        year: 5,
        month: 4,
        day: 2,
        weekday: 2,
        hour: 1,
        minute: 1,
        second: 1,
    };
    const MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
    const COMMA_RE = /,/g; // we need re for globalness
    const MULTI_SPACE_RE = /\s+/g;
    const LTR_RE = /\u200e/g; // control character
    const UTC_RE = /UTC|GMT/;
    class NativeFormatter {
        constructor(formatSettings) {
            let standardDateProps = {};
            let extendedSettings = {};
            let severity = 0;
            for (let name in formatSettings) {
                if (name in EXTENDED_SETTINGS_AND_SEVERITIES) {
                    extendedSettings[name] = formatSettings[name];
                    severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name], severity);
                }
                else {
                    standardDateProps[name] = formatSettings[name];
                    if (name in STANDARD_DATE_PROP_SEVERITIES) { // TODO: what about hour12? no severity
                        severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name], severity);
                    }
                }
            }
            this.standardDateProps = standardDateProps;
            this.extendedSettings = extendedSettings;
            this.severity = severity;
            this.buildFormattingFunc = memoize(buildFormattingFunc);
        }
        format(date, context) {
            return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
        }
        formatRange(start, end, context, betterDefaultSeparator) {
            let { standardDateProps, extendedSettings } = this;
            let diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
            if (!diffSeverity) {
                return this.format(start, context);
            }
            let biggestUnitForPartial = diffSeverity;
            if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
                (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') &&
                (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') &&
                (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
                biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
            }
            let full0 = this.format(start, context);
            let full1 = this.format(end, context);
            if (full0 === full1) {
                return full0;
            }
            let partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
            let partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
            let partial0 = partialFormattingFunc(start);
            let partial1 = partialFormattingFunc(end);
            let insertion = findCommonInsertion(full0, partial0, full1, partial1);
            let separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';
            if (insertion) {
                return insertion.before + partial0 + separator + partial1 + insertion.after;
            }
            return full0 + separator + full1;
        }
        getLargestUnit() {
            switch (this.severity) {
                case 7:
                case 6:
                case 5:
                    return 'year';
                case 4:
                    return 'month';
                case 3:
                    return 'week';
                case 2:
                    return 'day';
                default:
                    return 'time'; // really?
            }
        }
    }
    function buildFormattingFunc(standardDateProps, extendedSettings, context) {
        let standardDatePropCnt = Object.keys(standardDateProps).length;
        if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
            return (date) => (formatTimeZoneOffset(date.timeZoneOffset));
        }
        if (standardDatePropCnt === 0 && extendedSettings.week) {
            return (date) => (formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week));
        }
        return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
    }
    function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
        standardDateProps = Object.assign({}, standardDateProps); // copy
        extendedSettings = Object.assign({}, extendedSettings); // copy
        sanitizeSettings(standardDateProps, extendedSettings);
        standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
        let normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
        let zeroFormat; // needed?
        if (extendedSettings.omitZeroMinute) {
            let zeroProps = Object.assign({}, standardDateProps);
            delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
            zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
        }
        return (date) => {
            let { marker } = date;
            let format;
            if (zeroFormat && !marker.getUTCMinutes()) {
                format = zeroFormat;
            }
            else {
                format = normalFormat;
            }
            let s = format.format(marker);
            return postProcess(s, date, standardDateProps, extendedSettings, context);
        };
    }
    function sanitizeSettings(standardDateProps, extendedSettings) {
        // deal with a browser inconsistency where formatting the timezone
        // requires that the hour/minute be present.
        if (standardDateProps.timeZoneName) {
            if (!standardDateProps.hour) {
                standardDateProps.hour = '2-digit';
            }
            if (!standardDateProps.minute) {
                standardDateProps.minute = '2-digit';
            }
        }
        // only support short timezone names
        if (standardDateProps.timeZoneName === 'long') {
            standardDateProps.timeZoneName = 'short';
        }
        // if requesting to display seconds, MUST display minutes
        if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
            delete extendedSettings.omitZeroMinute;
        }
    }
    function postProcess(s, date, standardDateProps, extendedSettings, context) {
        s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
        if (standardDateProps.timeZoneName === 'short') {
            s = injectTzoStr(s, (context.timeZone === 'UTC' || date.timeZoneOffset == null) ?
                'UTC' : // important to normalize for IE, which does "GMT"
                formatTimeZoneOffset(date.timeZoneOffset));
        }
        if (extendedSettings.omitCommas) {
            s = s.replace(COMMA_RE, '').trim();
        }
        if (extendedSettings.omitZeroMinute) {
            s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
        }
        // ^ do anything that might create adjacent spaces before this point,
        // because MERIDIEM_RE likes to eat up loading spaces
        if (extendedSettings.meridiem === false) {
            s = s.replace(MERIDIEM_RE, '').trim();
        }
        else if (extendedSettings.meridiem === 'narrow') { // a/p
            s = s.replace(MERIDIEM_RE, (m0, m1) => m1.toLocaleLowerCase());
        }
        else if (extendedSettings.meridiem === 'short') { // am/pm
            s = s.replace(MERIDIEM_RE, (m0, m1) => `${m1.toLocaleLowerCase()}m`);
        }
        else if (extendedSettings.meridiem === 'lowercase') { // other meridiem transformers already converted to lowercase
            s = s.replace(MERIDIEM_RE, (m0) => m0.toLocaleLowerCase());
        }
        s = s.replace(MULTI_SPACE_RE, ' ');
        s = s.trim();
        return s;
    }
    function injectTzoStr(s, tzoStr) {
        let replaced = false;
        s = s.replace(UTC_RE, () => {
            replaced = true;
            return tzoStr;
        });
        // IE11 doesn't include UTC/GMT in the original string, so append to end
        if (!replaced) {
            s += ` ${tzoStr}`;
        }
        return s;
    }
    function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
        let parts = [];
        if (display === 'long') {
            parts.push(weekTextLong);
        }
        else if (display === 'short' || display === 'narrow') {
            parts.push(weekText);
        }
        if (display === 'long' || display === 'short') {
            parts.push(' ');
        }
        parts.push(locale.simpleNumberFormat.format(num));
        if (locale.options.direction === 'rtl') { // TODO: use control characters instead?
            parts.reverse();
        }
        return parts.join('');
    }
    // Range Formatting Utils
    // 0 = exactly the same
    // 1 = different by time
    // and bigger
    function computeMarkerDiffSeverity(d0, d1, ca) {
        if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
            return 5;
        }
        if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
            return 4;
        }
        if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
            return 2;
        }
        if (timeAsMs(d0) !== timeAsMs(d1)) {
            return 1;
        }
        return 0;
    }
    function computePartialFormattingOptions(options, biggestUnit) {
        let partialOptions = {};
        for (let name in options) {
            if (!(name in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
                STANDARD_DATE_PROP_SEVERITIES[name] <= biggestUnit) {
                partialOptions[name] = options[name];
            }
        }
        return partialOptions;
    }
    function findCommonInsertion(full0, partial0, full1, partial1) {
        let i0 = 0;
        while (i0 < full0.length) {
            let found0 = full0.indexOf(partial0, i0);
            if (found0 === -1) {
                break;
            }
            let before0 = full0.substr(0, found0);
            i0 = found0 + partial0.length;
            let after0 = full0.substr(i0);
            let i1 = 0;
            while (i1 < full1.length) {
                let found1 = full1.indexOf(partial1, i1);
                if (found1 === -1) {
                    break;
                }
                let before1 = full1.substr(0, found1);
                i1 = found1 + partial1.length;
                let after1 = full1.substr(i1);
                if (before0 === before1 && after0 === after1) {
                    return {
                        before: before0,
                        after: after0,
                    };
                }
            }
        }
        return null;
    }

    function expandZonedMarker(dateInfo, calendarSystem) {
        let a = calendarSystem.markerToArray(dateInfo.marker);
        return {
            marker: dateInfo.marker,
            timeZoneOffset: dateInfo.timeZoneOffset,
            array: a,
            year: a[0],
            month: a[1],
            day: a[2],
            hour: a[3],
            minute: a[4],
            second: a[5],
            millisecond: a[6],
        };
    }

    function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
        let startInfo = expandZonedMarker(start, context.calendarSystem);
        let endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
        return {
            date: startInfo,
            start: startInfo,
            end: endInfo,
            timeZone: context.timeZone,
            localeCodes: context.locale.codes,
            defaultSeparator: betterDefaultSeparator || context.defaultSeparator,
        };
    }

    /*
    TODO: fix the terminology of "formatter" vs "formatting func"
    */
    /*
    At the time of instantiation, this object does not know which cmd-formatting system it will use.
    It receives this at the time of formatting, as a setting.
    */
    class CmdFormatter {
        constructor(cmdStr) {
            this.cmdStr = cmdStr;
        }
        format(date, context, betterDefaultSeparator) {
            return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
        }
        formatRange(start, end, context, betterDefaultSeparator) {
            return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
        }
    }

    class FuncFormatter {
        constructor(func) {
            this.func = func;
        }
        format(date, context, betterDefaultSeparator) {
            return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
        }
        formatRange(start, end, context, betterDefaultSeparator) {
            return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
        }
    }

    function createFormatter(input) {
        if (typeof input === 'object' && input) { // non-null object
            return new NativeFormatter(input);
        }
        if (typeof input === 'string') {
            return new CmdFormatter(input);
        }
        if (typeof input === 'function') {
            return new FuncFormatter(input);
        }
        return null;
    }

    // base options
    // ------------
    const BASE_OPTION_REFINERS = {
        navLinkDayClick: identity,
        navLinkWeekClick: identity,
        duration: createDuration,
        bootstrapFontAwesome: identity,
        buttonIcons: identity,
        customButtons: identity,
        defaultAllDayEventDuration: createDuration,
        defaultTimedEventDuration: createDuration,
        nextDayThreshold: createDuration,
        scrollTime: createDuration,
        scrollTimeReset: Boolean,
        slotMinTime: createDuration,
        slotMaxTime: createDuration,
        dayPopoverFormat: createFormatter,
        slotDuration: createDuration,
        snapDuration: createDuration,
        headerToolbar: identity,
        footerToolbar: identity,
        defaultRangeSeparator: String,
        titleRangeSeparator: String,
        forceEventDuration: Boolean,
        dayHeaders: Boolean,
        dayHeaderFormat: createFormatter,
        dayHeaderClassNames: identity,
        dayHeaderContent: identity,
        dayHeaderDidMount: identity,
        dayHeaderWillUnmount: identity,
        dayCellClassNames: identity,
        dayCellContent: identity,
        dayCellDidMount: identity,
        dayCellWillUnmount: identity,
        initialView: String,
        aspectRatio: Number,
        weekends: Boolean,
        weekNumberCalculation: identity,
        weekNumbers: Boolean,
        weekNumberClassNames: identity,
        weekNumberContent: identity,
        weekNumberDidMount: identity,
        weekNumberWillUnmount: identity,
        editable: Boolean,
        viewClassNames: identity,
        viewDidMount: identity,
        viewWillUnmount: identity,
        nowIndicator: Boolean,
        nowIndicatorClassNames: identity,
        nowIndicatorContent: identity,
        nowIndicatorDidMount: identity,
        nowIndicatorWillUnmount: identity,
        showNonCurrentDates: Boolean,
        lazyFetching: Boolean,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
        timeZone: String,
        locales: identity,
        locale: identity,
        themeSystem: String,
        dragRevertDuration: Number,
        dragScroll: Boolean,
        allDayMaintainDuration: Boolean,
        unselectAuto: Boolean,
        dropAccept: identity,
        eventOrder: parseFieldSpecs,
        eventOrderStrict: Boolean,
        handleWindowResize: Boolean,
        windowResizeDelay: Number,
        longPressDelay: Number,
        eventDragMinDistance: Number,
        expandRows: Boolean,
        height: identity,
        contentHeight: identity,
        direction: String,
        weekNumberFormat: createFormatter,
        eventResizableFromStart: Boolean,
        displayEventTime: Boolean,
        displayEventEnd: Boolean,
        weekText: String,
        weekTextLong: String,
        progressiveEventRendering: Boolean,
        businessHours: identity,
        initialDate: identity,
        now: identity,
        eventDataTransform: identity,
        stickyHeaderDates: identity,
        stickyFooterScrollbar: identity,
        viewHeight: identity,
        defaultAllDay: Boolean,
        eventSourceFailure: identity,
        eventSourceSuccess: identity,
        eventDisplay: String,
        eventStartEditable: Boolean,
        eventDurationEditable: Boolean,
        eventOverlap: identity,
        eventConstraint: identity,
        eventAllow: identity,
        eventBackgroundColor: String,
        eventBorderColor: String,
        eventTextColor: String,
        eventColor: String,
        eventClassNames: identity,
        eventContent: identity,
        eventDidMount: identity,
        eventWillUnmount: identity,
        selectConstraint: identity,
        selectOverlap: identity,
        selectAllow: identity,
        droppable: Boolean,
        unselectCancel: String,
        slotLabelFormat: identity,
        slotLaneClassNames: identity,
        slotLaneContent: identity,
        slotLaneDidMount: identity,
        slotLaneWillUnmount: identity,
        slotLabelClassNames: identity,
        slotLabelContent: identity,
        slotLabelDidMount: identity,
        slotLabelWillUnmount: identity,
        dayMaxEvents: identity,
        dayMaxEventRows: identity,
        dayMinWidth: Number,
        slotLabelInterval: createDuration,
        allDayText: String,
        allDayClassNames: identity,
        allDayContent: identity,
        allDayDidMount: identity,
        allDayWillUnmount: identity,
        slotMinWidth: Number,
        navLinks: Boolean,
        eventTimeFormat: createFormatter,
        rerenderDelay: Number,
        moreLinkText: identity,
        moreLinkHint: identity,
        selectMinDistance: Number,
        selectable: Boolean,
        selectLongPressDelay: Number,
        eventLongPressDelay: Number,
        selectMirror: Boolean,
        eventMaxStack: Number,
        eventMinHeight: Number,
        eventMinWidth: Number,
        eventShortHeight: Number,
        slotEventOverlap: Boolean,
        plugins: identity,
        firstDay: Number,
        dayCount: Number,
        dateAlignment: String,
        dateIncrement: createDuration,
        hiddenDays: identity,
        monthMode: Boolean,
        fixedWeekCount: Boolean,
        validRange: identity,
        visibleRange: identity,
        titleFormat: identity,
        eventInteractive: Boolean,
        // only used by list-view, but languages define the value, so we need it in base options
        noEventsText: String,
        viewHint: identity,
        navLinkHint: identity,
        closeHint: String,
        timeHint: String,
        eventHint: String,
        moreLinkClick: identity,
        moreLinkClassNames: identity,
        moreLinkContent: identity,
        moreLinkDidMount: identity,
        moreLinkWillUnmount: identity,
        // for connectors
        // (can't be part of plugin system b/c must be provided at runtime)
        handleCustomRendering: identity,
        customRenderingMetaMap: identity,
        customRenderingReplacesEl: Boolean,
    };
    // do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
    // raw values.
    const BASE_OPTION_DEFAULTS = {
        eventDisplay: 'auto',
        defaultRangeSeparator: ' - ',
        titleRangeSeparator: ' \u2013 ',
        defaultTimedEventDuration: '01:00:00',
        defaultAllDayEventDuration: { day: 1 },
        forceEventDuration: false,
        nextDayThreshold: '00:00:00',
        dayHeaders: true,
        initialView: '',
        aspectRatio: 1.35,
        headerToolbar: {
            start: 'title',
            center: '',
            end: 'today prev,next',
        },
        weekends: true,
        weekNumbers: false,
        weekNumberCalculation: 'local',
        editable: false,
        nowIndicator: false,
        scrollTime: '06:00:00',
        scrollTimeReset: true,
        slotMinTime: '00:00:00',
        slotMaxTime: '24:00:00',
        showNonCurrentDates: true,
        lazyFetching: true,
        startParam: 'start',
        endParam: 'end',
        timeZoneParam: 'timeZone',
        timeZone: 'local',
        locales: [],
        locale: '',
        themeSystem: 'standard',
        dragRevertDuration: 500,
        dragScroll: true,
        allDayMaintainDuration: false,
        unselectAuto: true,
        dropAccept: '*',
        eventOrder: 'start,-duration,allDay,title',
        dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        handleWindowResize: true,
        windowResizeDelay: 100,
        longPressDelay: 1000,
        eventDragMinDistance: 5,
        expandRows: false,
        navLinks: false,
        selectable: false,
        eventMinHeight: 15,
        eventMinWidth: 30,
        eventShortHeight: 30,
    };
    // calendar listeners
    // ------------------
    const CALENDAR_LISTENER_REFINERS = {
        datesSet: identity,
        eventsSet: identity,
        eventAdd: identity,
        eventChange: identity,
        eventRemove: identity,
        windowResize: identity,
        eventClick: identity,
        eventMouseEnter: identity,
        eventMouseLeave: identity,
        select: identity,
        unselect: identity,
        loading: identity,
        // internal
        _unmount: identity,
        _beforeprint: identity,
        _afterprint: identity,
        _noEventDrop: identity,
        _noEventResize: identity,
        _resize: identity,
        _scrollRequest: identity,
    };
    // calendar-specific options
    // -------------------------
    const CALENDAR_OPTION_REFINERS = {
        buttonText: identity,
        buttonHints: identity,
        views: identity,
        plugins: identity,
        initialEvents: identity,
        events: identity,
        eventSources: identity,
    };
    const COMPLEX_OPTION_COMPARATORS = {
        headerToolbar: isMaybeObjectsEqual,
        footerToolbar: isMaybeObjectsEqual,
        buttonText: isMaybeObjectsEqual,
        buttonHints: isMaybeObjectsEqual,
        buttonIcons: isMaybeObjectsEqual,
        dateIncrement: isMaybeObjectsEqual,
    };
    function isMaybeObjectsEqual(a, b) {
        if (typeof a === 'object' && typeof b === 'object' && a && b) { // both non-null objects
            return isPropsEqual(a, b);
        }
        return a === b;
    }
    // view-specific options
    // ---------------------
    const VIEW_OPTION_REFINERS = {
        type: String,
        component: identity,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: identity,
        usesMinMaxTime: Boolean,
        classNames: identity,
        content: identity,
        didMount: identity,
        willUnmount: identity,
    };
    // util funcs
    // ----------------------------------------------------------------------------------------------------
    function mergeRawOptions(optionSets) {
        return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
    }
    function refineProps(input, refiners) {
        let refined = {};
        let extra = {};
        for (let propName in refiners) {
            if (propName in input) {
                refined[propName] = refiners[propName](input[propName]);
            }
        }
        for (let propName in input) {
            if (!(propName in refiners)) {
                extra[propName] = input[propName];
            }
        }
        return { refined, extra };
    }
    function identity(raw) {
        return raw;
    }

    /*
    NOTE: this can be a public API, especially createElement for hooks.
    See examples/typescript-scheduler/src/index.ts
    */
    function flushSync(runBeforeFlush) {
        runBeforeFlush();
        let oldDebounceRendering = l$1.debounceRendering; // orig
        let callbackQ = [];
        function execCallbackSync(callback) {
            callbackQ.push(callback);
        }
        l$1.debounceRendering = execCallbackSync;
        P$1(h(FakeComponent, {}), document.createElement('div'));
        while (callbackQ.length) {
            callbackQ.shift()();
        }
        l$1.debounceRendering = oldDebounceRendering;
    }
    class FakeComponent extends d {
        render() { return h('div', {}); }
        componentDidMount() { this.setState({}); }
    }
    // TODO: use preact/compat instead?
    function createContext(defaultValue) {
        let ContextType = B$1(defaultValue);
        let origProvider = ContextType.Provider;
        ContextType.Provider = function () {
            let isNew = !this.getChildContext;
            let children = origProvider.apply(this, arguments); // eslint-disable-line prefer-rest-params
            if (isNew) {
                let subs = [];
                this.shouldComponentUpdate = (_props) => {
                    if (this.props.value !== _props.value) {
                        subs.forEach((c) => {
                            c.context = _props.value;
                            c.forceUpdate();
                        });
                    }
                };
                this.sub = (c) => {
                    subs.push(c);
                    let old = c.componentWillUnmount;
                    c.componentWillUnmount = () => {
                        subs.splice(subs.indexOf(c), 1);
                        old && old.call(c);
                    };
                };
            }
            return children;
        };
        return ContextType;
    }

    class ScrollResponder {
        constructor(execFunc, emitter, scrollTime, scrollTimeReset) {
            this.execFunc = execFunc;
            this.emitter = emitter;
            this.scrollTime = scrollTime;
            this.scrollTimeReset = scrollTimeReset;
            this.handleScrollRequest = (request) => {
                this.queuedRequest = Object.assign({}, this.queuedRequest || {}, request);
                this.drain();
            };
            emitter.on('_scrollRequest', this.handleScrollRequest);
            this.fireInitialScroll();
        }
        detach() {
            this.emitter.off('_scrollRequest', this.handleScrollRequest);
        }
        update(isDatesNew) {
            if (isDatesNew && this.scrollTimeReset) {
                this.fireInitialScroll(); // will drain
            }
            else {
                this.drain();
            }
        }
        fireInitialScroll() {
            this.handleScrollRequest({
                time: this.scrollTime,
            });
        }
        drain() {
            if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
                this.queuedRequest = null;
            }
        }
    }

    const ViewContextType = createContext({}); // for Components
    function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
        return {
            dateEnv,
            options: viewOptions,
            pluginHooks,
            emitter,
            dispatch,
            getCurrentData,
            calendarApi,
            viewSpec,
            viewApi,
            dateProfileGenerator,
            theme,
            isRtl: viewOptions.direction === 'rtl',
            addResizeHandler(handler) {
                emitter.on('_resize', handler);
            },
            removeResizeHandler(handler) {
                emitter.off('_resize', handler);
            },
            createScrollResponder(execFunc) {
                return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
            },
            registerInteractiveComponent,
            unregisterInteractiveComponent,
        };
    }

    /* eslint max-classes-per-file: off */
    class PureComponent extends d {
        shouldComponentUpdate(nextProps, nextState) {
            if (this.debug) {
                // eslint-disable-next-line no-console
                console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
            }
            return !compareObjs(this.props, nextProps, this.propEquality) ||
                !compareObjs(this.state, nextState, this.stateEquality);
        }
        // HACK for freakin' React StrictMode
        safeSetState(newState) {
            if (!compareObjs(this.state, Object.assign(Object.assign({}, this.state), newState), this.stateEquality)) {
                this.setState(newState);
            }
        }
    }
    PureComponent.addPropsEquality = addPropsEquality;
    PureComponent.addStateEquality = addStateEquality;
    PureComponent.contextType = ViewContextType;
    PureComponent.prototype.propEquality = {};
    PureComponent.prototype.stateEquality = {};
    class BaseComponent extends PureComponent {
    }
    BaseComponent.contextType = ViewContextType;
    function addPropsEquality(propEquality) {
        let hash = Object.create(this.prototype.propEquality);
        Object.assign(hash, propEquality);
        this.prototype.propEquality = hash;
    }
    function addStateEquality(stateEquality) {
        let hash = Object.create(this.prototype.stateEquality);
        Object.assign(hash, stateEquality);
        this.prototype.stateEquality = hash;
    }
    // use other one
    function setRef(ref, current) {
        if (typeof ref === 'function') {
            ref(current);
        }
        else if (ref) {
            // see https://github.com/facebook/react/issues/13029
            ref.current = current;
        }
    }

    class ContentInjector extends BaseComponent {
        constructor() {
            super(...arguments);
            this.id = guid();
            this.currentDomNodes = [];
            this.queuedDomNodes = [];
            this.handleEl = (el) => {
                if (this.props.elRef) {
                    setRef(this.props.elRef, el);
                }
            };
        }
        render() {
            const { props, context } = this;
            const { options } = context;
            const { generator, renderProps } = props;
            const attrs = buildElAttrs(props);
            let innerContent;
            let queuedDomNodes = [];
            if (hasCustomRenderingHandler(props.generatorName, options)) {
                if (options.customRenderingReplacesEl) {
                    delete attrs.elRef; // because handleEl will be used
                }
            }
            else {
                const customContent = typeof generator === 'function' ?
                    generator(renderProps, h) :
                    generator;
                if (typeof customContent === 'string' ||
                    i$1(customContent) ||
                    Array.isArray(customContent)) {
                    innerContent = customContent;
                }
                else if (typeof customContent === 'object') {
                    if ('html' in customContent) {
                        attrs.dangerouslySetInnerHTML = { __html: customContent.html };
                    }
                    else if ('domNodes' in customContent) {
                        queuedDomNodes = Array.prototype.slice.call(customContent.domNodes);
                    }
                }
            }
            this.queuedDomNodes = queuedDomNodes;
            return h(props.elTag, attrs, innerContent);
        }
        componentDidMount() {
            this.applyQueueudDomNodes();
            this.triggerCustomRendering(true);
        }
        componentDidUpdate() {
            this.applyQueueudDomNodes();
            this.triggerCustomRendering(true);
        }
        componentWillUnmount() {
            this.triggerCustomRendering(false); // TODO: different API for removal?
        }
        triggerCustomRendering(isActive) {
            const { props, context } = this;
            const { handleCustomRendering, customRenderingMetaMap } = context.options;
            if (handleCustomRendering) {
                const customRenderingMeta = customRenderingMetaMap === null || customRenderingMetaMap === void 0 ? void 0 : customRenderingMetaMap[props.generatorName];
                if (customRenderingMeta) {
                    handleCustomRendering(Object.assign({ id: this.id, isActive, containerEl: this.base, reportNewContainerEl: this.handleEl, generatorMeta: customRenderingMeta }, props));
                }
            }
        }
        applyQueueudDomNodes() {
            const { queuedDomNodes, currentDomNodes } = this;
            const el = this.base;
            if (!isArraysEqual(queuedDomNodes, currentDomNodes)) {
                currentDomNodes.forEach(removeElement);
                for (let newNode of queuedDomNodes) {
                    el.appendChild(newNode);
                }
                this.currentDomNodes = queuedDomNodes;
            }
        }
    }
    ContentInjector.addPropsEquality({
        elClasses: isArraysEqual,
        elStyle: isPropsEqual,
        elAttrs: isNonHandlerPropsEqual,
        renderProps: isPropsEqual,
    });
    // Util
    function hasCustomRenderingHandler(generatorName, options) {
        var _a;
        return Boolean(options.handleCustomRendering &&
            generatorName &&
            ((_a = options.customRenderingMetaMap) === null || _a === void 0 ? void 0 : _a[generatorName]));
    }
    function buildElAttrs(props, extraClassNames) {
        const attrs = Object.assign(Object.assign({}, props.elAttrs), { ref: props.elRef });
        if (props.elClasses || extraClassNames) {
            attrs.className = (props.elClasses || [])
                .concat(extraClassNames || [])
                .concat(attrs.className || [])
                .filter(Boolean)
                .join(' ');
        }
        if (props.elStyle) {
            attrs.style = props.elStyle;
        }
        return attrs;
    }

    const RenderId = createContext(0);

    class ContentContainer extends d {
        constructor() {
            super(...arguments);
            this.InnerContent = InnerContentInjector.bind(undefined, this);
        }
        render() {
            const { props } = this;
            const generatedClassNames = generateClassNames(props.classNameGenerator, props.renderProps);
            if (props.children) {
                const elAttrs = buildElAttrs(props, generatedClassNames);
                const children = props.children(this.InnerContent, props.renderProps, elAttrs);
                if (props.elTag) {
                    return h(props.elTag, elAttrs, children);
                }
                else {
                    return children;
                }
            }
            else {
                return h((ContentInjector), Object.assign(Object.assign({}, props), { elTag: props.elTag || 'div', elClasses: (props.elClasses || []).concat(generatedClassNames), renderId: this.context }));
            }
        }
        componentDidMount() {
            var _a, _b;
            (_b = (_a = this.props).didMount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), { el: this.base }));
        }
        componentWillUnmount() {
            var _a, _b;
            (_b = (_a = this.props).willUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), { el: this.base }));
        }
    }
    ContentContainer.contextType = RenderId;
    function InnerContentInjector(containerComponent, props) {
        const parentProps = containerComponent.props;
        return h((ContentInjector), Object.assign({ renderProps: parentProps.renderProps, generatorName: parentProps.generatorName, generator: parentProps.generator, renderId: containerComponent.context }, props));
    }
    // Utils
    function generateClassNames(classNameGenerator, renderProps) {
        const classNames = typeof classNameGenerator === 'function' ?
            classNameGenerator(renderProps) :
            classNameGenerator || [];
        return typeof classNames === 'string' ? [classNames] : classNames;
    }

    class ViewContainer$1 extends BaseComponent {
        render() {
            let { props, context } = this;
            let { options } = context;
            let renderProps = { view: context.viewApi };
            return (h(ContentContainer, Object.assign({}, props, { elTag: props.elTag || 'div', elClasses: [
                    ...buildViewClassNames(props.viewSpec),
                    ...(props.elClasses || []),
                ], renderProps: renderProps, classNameGenerator: options.viewClassNames, generatorName: undefined, generator: undefined, didMount: options.viewDidMount, willUnmount: options.viewWillUnmount }), () => props.children));
        }
    }
    function buildViewClassNames(viewSpec) {
        return [
            `fc-${viewSpec.type}-view`,
            'fc-view',
        ];
    }

    function parseRange(input, dateEnv) {
        let start = null;
        let end = null;
        if (input.start) {
            start = dateEnv.createMarker(input.start);
        }
        if (input.end) {
            end = dateEnv.createMarker(input.end);
        }
        if (!start && !end) {
            return null;
        }
        if (start && end && end < start) {
            return null;
        }
        return { start, end };
    }
    // SIDE-EFFECT: will mutate ranges.
    // Will return a new array result.
    function invertRanges(ranges, constraintRange) {
        let invertedRanges = [];
        let { start } = constraintRange; // the end of the previous range. the start of the new range
        let i;
        let dateRange;
        // ranges need to be in order. required for our date-walking algorithm
        ranges.sort(compareRanges);
        for (i = 0; i < ranges.length; i += 1) {
            dateRange = ranges[i];
            // add the span of time before the event (if there is any)
            if (dateRange.start > start) { // compare millisecond time (skip any ambig logic)
                invertedRanges.push({ start, end: dateRange.start });
            }
            if (dateRange.end > start) {
                start = dateRange.end;
            }
        }
        // add the span of time after the last event (if there is any)
        if (start < constraintRange.end) { // compare millisecond time (skip any ambig logic)
            invertedRanges.push({ start, end: constraintRange.end });
        }
        return invertedRanges;
    }
    function compareRanges(range0, range1) {
        return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
    }
    function intersectRanges(range0, range1) {
        let { start, end } = range0;
        let newRange = null;
        if (range1.start !== null) {
            if (start === null) {
                start = range1.start;
            }
            else {
                start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
            }
        }
        if (range1.end != null) {
            if (end === null) {
                end = range1.end;
            }
            else {
                end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
            }
        }
        if (start === null || end === null || start < end) {
            newRange = { start, end };
        }
        return newRange;
    }
    function rangesEqual(range0, range1) {
        return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) &&
            (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
    }
    function rangesIntersect(range0, range1) {
        return (range0.end === null || range1.start === null || range0.end > range1.start) &&
            (range0.start === null || range1.end === null || range0.start < range1.end);
    }
    function rangeContainsRange(outerRange, innerRange) {
        return (outerRange.start === null || (innerRange.start !== null && innerRange.start >= outerRange.start)) &&
            (outerRange.end === null || (innerRange.end !== null && innerRange.end <= outerRange.end));
    }
    function rangeContainsMarker(range, date) {
        return (range.start === null || date >= range.start) &&
            (range.end === null || date < range.end);
    }
    // If the given date is not within the given range, move it inside.
    // (If it's past the end, make it one millisecond before the end).
    function constrainMarkerToRange(date, range) {
        if (range.start != null && date < range.start) {
            return range.start;
        }
        if (range.end != null && date >= range.end) {
            return new Date(range.end.valueOf() - 1);
        }
        return date;
    }

    /* Date stuff that doesn't belong in datelib core
    ----------------------------------------------------------------------------------------------------------------------*/
    // given a timed range, computes an all-day range that has the same exact duration,
    // but whose start time is aligned with the start of the day.
    function computeAlignedDayRange(timedRange) {
        let dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
        let start = startOfDay(timedRange.start);
        let end = addDays(start, dayCnt);
        return { start, end };
    }
    // given a timed range, computes an all-day range based on how for the end date bleeds into the next day
    // TODO: give nextDayThreshold a default arg
    function computeVisibleDayRange(timedRange, nextDayThreshold = createDuration(0)) {
        let startDay = null;
        let endDay = null;
        if (timedRange.end) {
            endDay = startOfDay(timedRange.end);
            let endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
            // If the end time is actually inclusively part of the next day and is equal to or
            // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
            // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
            if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
                endDay = addDays(endDay, 1);
            }
        }
        if (timedRange.start) {
            startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
            // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
            if (endDay && endDay <= startDay) {
                endDay = addDays(startDay, 1);
            }
        }
        return { start: startDay, end: endDay };
    }
    // spans from one day into another?
    function isMultiDayRange(range) {
        let visibleRange = computeVisibleDayRange(range);
        return diffDays(visibleRange.start, visibleRange.end) > 1;
    }
    function diffDates(date0, date1, dateEnv, largeUnit) {
        if (largeUnit === 'year') {
            return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
        }
        if (largeUnit === 'month') {
            return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
        }
        return diffDayAndTime(date0, date1); // returns a duration
    }

    function reduceCurrentDate(currentDate, action) {
        switch (action.type) {
            case 'CHANGE_DATE':
                return action.dateMarker;
            default:
                return currentDate;
        }
    }
    function getInitialDate(options, dateEnv) {
        let initialDateInput = options.initialDate;
        // compute the initial ambig-timezone date
        if (initialDateInput != null) {
            return dateEnv.createMarker(initialDateInput);
        }
        return getNow(options.now, dateEnv); // getNow already returns unzoned
    }
    function getNow(nowInput, dateEnv) {
        if (typeof nowInput === 'function') {
            nowInput = nowInput();
        }
        if (nowInput == null) {
            return dateEnv.createNowMarker();
        }
        return dateEnv.createMarker(nowInput);
    }

    class DateProfileGenerator {
        constructor(props) {
            this.props = props;
            this.nowDate = getNow(props.nowInput, props.dateEnv);
            this.initHiddenDays();
        }
        /* Date Range Computation
        ------------------------------------------------------------------------------------------------------------------*/
        // Builds a structure with info about what the dates/ranges will be for the "prev" view.
        buildPrev(currentDateProfile, currentDate, forceToValid) {
            let { dateEnv } = this.props;
            let prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
            currentDateProfile.dateIncrement);
            return this.build(prevDate, -1, forceToValid);
        }
        // Builds a structure with info about what the dates/ranges will be for the "next" view.
        buildNext(currentDateProfile, currentDate, forceToValid) {
            let { dateEnv } = this.props;
            let nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
            currentDateProfile.dateIncrement);
            return this.build(nextDate, 1, forceToValid);
        }
        // Builds a structure holding dates/ranges for rendering around the given date.
        // Optional direction param indicates whether the date is being incremented/decremented
        // from its previous value. decremented = -1, incremented = 1 (default).
        build(currentDate, direction, forceToValid = true) {
            let { props } = this;
            let validRange;
            let currentInfo;
            let isRangeAllDay;
            let renderRange;
            let activeRange;
            let isValid;
            validRange = this.buildValidRange();
            validRange = this.trimHiddenDays(validRange);
            if (forceToValid) {
                currentDate = constrainMarkerToRange(currentDate, validRange);
            }
            currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
            isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
            renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
            renderRange = this.trimHiddenDays(renderRange);
            activeRange = renderRange;
            if (!props.showNonCurrentDates) {
                activeRange = intersectRanges(activeRange, currentInfo.range);
            }
            activeRange = this.adjustActiveRange(activeRange);
            activeRange = intersectRanges(activeRange, validRange); // might return null
            // it's invalid if the originally requested date is not contained,
            // or if the range is completely outside of the valid range.
            isValid = rangesIntersect(currentInfo.range, validRange);
            return {
                // constraint for where prev/next operations can go and where events can be dragged/resized to.
                // an object with optional start and end properties.
                validRange,
                // range the view is formally responsible for.
                // for example, a month view might have 1st-31st, excluding padded dates
                currentRange: currentInfo.range,
                // name of largest unit being displayed, like "month" or "week"
                currentRangeUnit: currentInfo.unit,
                isRangeAllDay,
                // dates that display events and accept drag-n-drop
                // will be `null` if no dates accept events
                activeRange,
                // date range with a rendered skeleton
                // includes not-active days that need some sort of DOM
                renderRange,
                // Duration object that denotes the first visible time of any given day
                slotMinTime: props.slotMinTime,
                // Duration object that denotes the exclusive visible end time of any given day
                slotMaxTime: props.slotMaxTime,
                isValid,
                // how far the current date will move for a prev/next operation
                dateIncrement: this.buildDateIncrement(currentInfo.duration),
                // pass a fallback (might be null) ^
            };
        }
        // Builds an object with optional start/end properties.
        // Indicates the minimum/maximum dates to display.
        // not responsible for trimming hidden days.
        buildValidRange() {
            let input = this.props.validRangeInput;
            let simpleInput = typeof input === 'function'
                ? input.call(this.props.calendarApi, this.nowDate)
                : input;
            return this.refineRange(simpleInput) ||
                { start: null, end: null }; // completely open-ended
        }
        // Builds a structure with info about the "current" range, the range that is
        // highlighted as being the current month for example.
        // See build() for a description of `direction`.
        // Guaranteed to have `range` and `unit` properties. `duration` is optional.
        buildCurrentRangeInfo(date, direction) {
            let { props } = this;
            let duration = null;
            let unit = null;
            let range = null;
            let dayCount;
            if (props.duration) {
                duration = props.duration;
                unit = props.durationUnit;
                range = this.buildRangeFromDuration(date, direction, duration, unit);
            }
            else if ((dayCount = this.props.dayCount)) {
                unit = 'day';
                range = this.buildRangeFromDayCount(date, direction, dayCount);
            }
            else if ((range = this.buildCustomVisibleRange(date))) {
                unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
            }
            else {
                duration = this.getFallbackDuration();
                unit = greatestDurationDenominator(duration).unit;
                range = this.buildRangeFromDuration(date, direction, duration, unit);
            }
            return { duration, unit, range };
        }
        getFallbackDuration() {
            return createDuration({ day: 1 });
        }
        // Returns a new activeRange to have time values (un-ambiguate)
        // slotMinTime or slotMaxTime causes the range to expand.
        adjustActiveRange(range) {
            let { dateEnv, usesMinMaxTime, slotMinTime, slotMaxTime } = this.props;
            let { start, end } = range;
            if (usesMinMaxTime) {
                // expand active range if slotMinTime is negative (why not when positive?)
                if (asRoughDays(slotMinTime) < 0) {
                    start = startOfDay(start); // necessary?
                    start = dateEnv.add(start, slotMinTime);
                }
                // expand active range if slotMaxTime is beyond one day (why not when negative?)
                if (asRoughDays(slotMaxTime) > 1) {
                    end = startOfDay(end); // necessary?
                    end = addDays(end, -1);
                    end = dateEnv.add(end, slotMaxTime);
                }
            }
            return { start, end };
        }
        // Builds the "current" range when it is specified as an explicit duration.
        // `unit` is the already-computed greatestDurationDenominator unit of duration.
        buildRangeFromDuration(date, direction, duration, unit) {
            let { dateEnv, dateAlignment } = this.props;
            let start;
            let end;
            let res;
            // compute what the alignment should be
            if (!dateAlignment) {
                let { dateIncrement } = this.props;
                if (dateIncrement) {
                    // use the smaller of the two units
                    if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
                        dateAlignment = greatestDurationDenominator(dateIncrement).unit;
                    }
                    else {
                        dateAlignment = unit;
                    }
                }
                else {
                    dateAlignment = unit;
                }
            }
            // if the view displays a single day or smaller
            if (asRoughDays(duration) <= 1) {
                if (this.isHiddenDay(start)) {
                    start = this.skipHiddenDays(start, direction);
                    start = startOfDay(start);
                }
            }
            function computeRes() {
                start = dateEnv.startOf(date, dateAlignment);
                end = dateEnv.add(start, duration);
                res = { start, end };
            }
            computeRes();
            // if range is completely enveloped by hidden days, go past the hidden days
            if (!this.trimHiddenDays(res)) {
                date = this.skipHiddenDays(date, direction);
                computeRes();
            }
            return res;
        }
        // Builds the "current" range when a dayCount is specified.
        buildRangeFromDayCount(date, direction, dayCount) {
            let { dateEnv, dateAlignment } = this.props;
            let runningCount = 0;
            let start = date;
            let end;
            if (dateAlignment) {
                start = dateEnv.startOf(start, dateAlignment);
            }
            start = startOfDay(start);
            start = this.skipHiddenDays(start, direction);
            end = start;
            do {
                end = addDays(end, 1);
                if (!this.isHiddenDay(end)) {
                    runningCount += 1;
                }
            } while (runningCount < dayCount);
            return { start, end };
        }
        // Builds a normalized range object for the "visible" range,
        // which is a way to define the currentRange and activeRange at the same time.
        buildCustomVisibleRange(date) {
            let { props } = this;
            let input = props.visibleRangeInput;
            let simpleInput = typeof input === 'function'
                ? input.call(props.calendarApi, props.dateEnv.toDate(date))
                : input;
            let range = this.refineRange(simpleInput);
            if (range && (range.start == null || range.end == null)) {
                return null;
            }
            return range;
        }
        // Computes the range that will represent the element/cells for *rendering*,
        // but which may have voided days/times.
        // not responsible for trimming hidden days.
        buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
            return currentRange;
        }
        // Compute the duration value that should be added/substracted to the current date
        // when a prev/next operation happens.
        buildDateIncrement(fallback) {
            let { dateIncrement } = this.props;
            let customAlignment;
            if (dateIncrement) {
                return dateIncrement;
            }
            if ((customAlignment = this.props.dateAlignment)) {
                return createDuration(1, customAlignment);
            }
            if (fallback) {
                return fallback;
            }
            return createDuration({ days: 1 });
        }
        refineRange(rangeInput) {
            if (rangeInput) {
                let range = parseRange(rangeInput, this.props.dateEnv);
                if (range) {
                    range = computeVisibleDayRange(range);
                }
                return range;
            }
            return null;
        }
        /* Hidden Days
        ------------------------------------------------------------------------------------------------------------------*/
        // Initializes internal variables related to calculating hidden days-of-week
        initHiddenDays() {
            let hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden
            let isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
            let dayCnt = 0;
            let i;
            if (this.props.weekends === false) {
                hiddenDays.push(0, 6); // 0=sunday, 6=saturday
            }
            for (i = 0; i < 7; i += 1) {
                if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
                    dayCnt += 1;
                }
            }
            if (!dayCnt) {
                throw new Error('invalid hiddenDays'); // all days were hidden? bad.
            }
            this.isHiddenDayHash = isHiddenDayHash;
        }
        // Remove days from the beginning and end of the range that are computed as hidden.
        // If the whole range is trimmed off, returns null
        trimHiddenDays(range) {
            let { start, end } = range;
            if (start) {
                start = this.skipHiddenDays(start);
            }
            if (end) {
                end = this.skipHiddenDays(end, -1, true);
            }
            if (start == null || end == null || start < end) {
                return { start, end };
            }
            return null;
        }
        // Is the current day hidden?
        // `day` is a day-of-week index (0-6), or a Date (used for UTC)
        isHiddenDay(day) {
            if (day instanceof Date) {
                day = day.getUTCDay();
            }
            return this.isHiddenDayHash[day];
        }
        // Incrementing the current day until it is no longer a hidden day, returning a copy.
        // DOES NOT CONSIDER validRange!
        // If the initial value of `date` is not a hidden day, don't do anything.
        // Pass `isExclusive` as `true` if you are dealing with an end date.
        // `inc` defaults to `1` (increment one day forward each time)
        skipHiddenDays(date, inc = 1, isExclusive = false) {
            while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
                date = addDays(date, inc);
            }
            return date;
        }
    }

    function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
        return {
            instanceId: guid(),
            defId,
            range,
            forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
            forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo,
        };
    }

    function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
        for (let i = 0; i < recurringTypes.length; i += 1) {
            let parsed = recurringTypes[i].parse(refined, dateEnv);
            if (parsed) {
                let { allDay } = refined;
                if (allDay == null) {
                    allDay = defaultAllDay;
                    if (allDay == null) {
                        allDay = parsed.allDayGuess;
                        if (allDay == null) {
                            allDay = false;
                        }
                    }
                }
                return {
                    allDay,
                    duration: parsed.duration,
                    typeData: parsed.typeData,
                    typeId: i,
                };
            }
        }
        return null;
    }
    function expandRecurring(eventStore, framingRange, context) {
        let { dateEnv, pluginHooks, options } = context;
        let { defs, instances } = eventStore;
        // remove existing recurring instances
        // TODO: bad. always expand events as a second step
        instances = filterHash(instances, (instance) => !defs[instance.defId].recurringDef);
        for (let defId in defs) {
            let def = defs[defId];
            if (def.recurringDef) {
                let { duration } = def.recurringDef;
                if (!duration) {
                    duration = def.allDay ?
                        options.defaultAllDayEventDuration :
                        options.defaultTimedEventDuration;
                }
                let starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
                for (let start of starts) {
                    let instance = createEventInstance(defId, {
                        start,
                        end: dateEnv.add(start, duration),
                    });
                    instances[instance.instanceId] = instance;
                }
            }
        }
        return { defs, instances };
    }
    /*
    Event MUST have a recurringDef
    */
    function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
        let typeDef = recurringTypes[eventDef.recurringDef.typeId];
        let markers = typeDef.expand(eventDef.recurringDef.typeData, {
            start: dateEnv.subtract(framingRange.start, duration),
            end: framingRange.end,
        }, dateEnv);
        // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
        if (eventDef.allDay) {
            markers = markers.map(startOfDay);
        }
        return markers;
    }

    const EVENT_NON_DATE_REFINERS = {
        id: String,
        groupId: String,
        title: String,
        url: String,
        interactive: Boolean,
    };
    const EVENT_DATE_REFINERS = {
        start: identity,
        end: identity,
        date: identity,
        allDay: Boolean,
    };
    const EVENT_REFINERS = Object.assign(Object.assign(Object.assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), { extendedProps: identity });
    function parseEvent(raw, eventSource, context, allowOpenRange, refiners = buildEventRefiners(context)) {
        let { refined, extra } = refineEventDef(raw, context, refiners);
        let defaultAllDay = computeIsDefaultAllDay(eventSource, context);
        let recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
        if (recurringRes) {
            let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context);
            def.recurringDef = {
                typeId: recurringRes.typeId,
                typeData: recurringRes.typeData,
                duration: recurringRes.duration,
            };
            return { def, instance: null };
        }
        let singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
        if (singleRes) {
            let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context);
            let instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
            return { def, instance };
        }
        return null;
    }
    function refineEventDef(raw, context, refiners = buildEventRefiners(context)) {
        return refineProps(raw, refiners);
    }
    function buildEventRefiners(context) {
        return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
    }
    /*
    Will NOT populate extendedProps with the leftover properties.
    Will NOT populate date-related props.
    */
    function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
        let def = {
            title: refined.title || '',
            groupId: refined.groupId || '',
            publicId: refined.id || '',
            url: refined.url || '',
            recurringDef: null,
            defId: guid(),
            sourceId,
            allDay,
            hasEnd,
            interactive: refined.interactive,
            ui: createEventUi(refined, context),
            extendedProps: Object.assign(Object.assign({}, (refined.extendedProps || {})), extra),
        };
        for (let memberAdder of context.pluginHooks.eventDefMemberAdders) {
            Object.assign(def, memberAdder(refined));
        }
        // help out EventImpl from having user modify props
        Object.freeze(def.ui.classNames);
        Object.freeze(def.extendedProps);
        return def;
    }
    function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
        let { allDay } = refined;
        let startMeta;
        let startMarker = null;
        let hasEnd = false;
        let endMeta;
        let endMarker = null;
        let startInput = refined.start != null ? refined.start : refined.date;
        startMeta = context.dateEnv.createMarkerMeta(startInput);
        if (startMeta) {
            startMarker = startMeta.marker;
        }
        else if (!allowOpenRange) {
            return null;
        }
        if (refined.end != null) {
            endMeta = context.dateEnv.createMarkerMeta(refined.end);
        }
        if (allDay == null) {
            if (defaultAllDay != null) {
                allDay = defaultAllDay;
            }
            else {
                // fall back to the date props LAST
                allDay = (!startMeta || startMeta.isTimeUnspecified) &&
                    (!endMeta || endMeta.isTimeUnspecified);
            }
        }
        if (allDay && startMarker) {
            startMarker = startOfDay(startMarker);
        }
        if (endMeta) {
            endMarker = endMeta.marker;
            if (allDay) {
                endMarker = startOfDay(endMarker);
            }
            if (startMarker && endMarker <= startMarker) {
                endMarker = null;
            }
        }
        if (endMarker) {
            hasEnd = true;
        }
        else if (!allowOpenRange) {
            hasEnd = context.options.forceEventDuration || false;
            endMarker = context.dateEnv.add(startMarker, allDay ?
                context.options.defaultAllDayEventDuration :
                context.options.defaultTimedEventDuration);
        }
        return {
            allDay,
            hasEnd,
            range: { start: startMarker, end: endMarker },
            forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
            forcedEndTzo: endMeta ? endMeta.forcedTzo : null,
        };
    }
    function computeIsDefaultAllDay(eventSource, context) {
        let res = null;
        if (eventSource) {
            res = eventSource.defaultAllDay;
        }
        if (res == null) {
            res = context.options.defaultAllDay;
        }
        return res;
    }

    function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
        let eventStore = createEmptyEventStore();
        let eventRefiners = buildEventRefiners(context);
        for (let rawEvent of rawEvents) {
            let tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);
            if (tuple) {
                eventTupleToStore(tuple, eventStore);
            }
        }
        return eventStore;
    }
    function eventTupleToStore(tuple, eventStore = createEmptyEventStore()) {
        eventStore.defs[tuple.def.defId] = tuple.def;
        if (tuple.instance) {
            eventStore.instances[tuple.instance.instanceId] = tuple.instance;
        }
        return eventStore;
    }
    // retrieves events that have the same groupId as the instance specified by `instanceId`
    // or they are the same as the instance.
    // why might instanceId not be in the store? an event from another calendar?
    function getRelevantEvents(eventStore, instanceId) {
        let instance = eventStore.instances[instanceId];
        if (instance) {
            let def = eventStore.defs[instance.defId];
            // get events/instances with same group
            let newStore = filterEventStoreDefs(eventStore, (lookDef) => isEventDefsGrouped(def, lookDef));
            // add the original
            // TODO: wish we could use eventTupleToStore or something like it
            newStore.defs[def.defId] = def;
            newStore.instances[instance.instanceId] = instance;
            return newStore;
        }
        return createEmptyEventStore();
    }
    function isEventDefsGrouped(def0, def1) {
        return Boolean(def0.groupId && def0.groupId === def1.groupId);
    }
    function createEmptyEventStore() {
        return { defs: {}, instances: {} };
    }
    function mergeEventStores(store0, store1) {
        return {
            defs: Object.assign(Object.assign({}, store0.defs), store1.defs),
            instances: Object.assign(Object.assign({}, store0.instances), store1.instances),
        };
    }
    function filterEventStoreDefs(eventStore, filterFunc) {
        let defs = filterHash(eventStore.defs, filterFunc);
        let instances = filterHash(eventStore.instances, (instance) => (defs[instance.defId] // still exists?
        ));
        return { defs, instances };
    }
    function excludeSubEventStore(master, sub) {
        let { defs, instances } = master;
        let filteredDefs = {};
        let filteredInstances = {};
        for (let defId in defs) {
            if (!sub.defs[defId]) { // not explicitly excluded
                filteredDefs[defId] = defs[defId];
            }
        }
        for (let instanceId in instances) {
            if (!sub.instances[instanceId] && // not explicitly excluded
                filteredDefs[instances[instanceId].defId] // def wasn't filtered away
            ) {
                filteredInstances[instanceId] = instances[instanceId];
            }
        }
        return {
            defs: filteredDefs,
            instances: filteredInstances,
        };
    }

    function normalizeConstraint(input, context) {
        if (Array.isArray(input)) {
            return parseEvents(input, null, context, true); // allowOpenRange=true
        }
        if (typeof input === 'object' && input) { // non-null object
            return parseEvents([input], null, context, true); // allowOpenRange=true
        }
        if (input != null) {
            return String(input);
        }
        return null;
    }

    function parseClassNames(raw) {
        if (Array.isArray(raw)) {
            return raw;
        }
        if (typeof raw === 'string') {
            return raw.split(/\s+/);
        }
        return [];
    }

    // TODO: better called "EventSettings" or "EventConfig"
    // TODO: move this file into structs
    // TODO: separate constraint/overlap/allow, because selection uses only that, not other props
    const EVENT_UI_REFINERS = {
        display: String,
        editable: Boolean,
        startEditable: Boolean,
        durationEditable: Boolean,
        constraint: identity,
        overlap: identity,
        allow: identity,
        className: parseClassNames,
        classNames: parseClassNames,
        color: String,
        backgroundColor: String,
        borderColor: String,
        textColor: String,
    };
    const EMPTY_EVENT_UI = {
        display: null,
        startEditable: null,
        durationEditable: null,
        constraints: [],
        overlap: null,
        allows: [],
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        classNames: [],
    };
    function createEventUi(refined, context) {
        let constraint = normalizeConstraint(refined.constraint, context);
        return {
            display: refined.display || null,
            startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
            durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
            constraints: constraint != null ? [constraint] : [],
            overlap: refined.overlap != null ? refined.overlap : null,
            allows: refined.allow != null ? [refined.allow] : [],
            backgroundColor: refined.backgroundColor || refined.color || '',
            borderColor: refined.borderColor || refined.color || '',
            textColor: refined.textColor || '',
            classNames: (refined.className || []).concat(refined.classNames || []), // join singular and plural
        };
    }
    // TODO: prevent against problems with <2 args!
    function combineEventUis(uis) {
        return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
    }
    function combineTwoEventUis(item0, item1) {
        return {
            display: item1.display != null ? item1.display : item0.display,
            startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
            durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
            constraints: item0.constraints.concat(item1.constraints),
            overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
            allows: item0.allows.concat(item1.allows),
            backgroundColor: item1.backgroundColor || item0.backgroundColor,
            borderColor: item1.borderColor || item0.borderColor,
            textColor: item1.textColor || item0.textColor,
            classNames: item0.classNames.concat(item1.classNames),
        };
    }

    const EVENT_SOURCE_REFINERS = {
        id: String,
        defaultAllDay: Boolean,
        url: String,
        format: String,
        events: identity,
        eventDataTransform: identity,
        // for any network-related sources
        success: identity,
        failure: identity,
    };
    function parseEventSource(raw, context, refiners = buildEventSourceRefiners(context)) {
        let rawObj;
        if (typeof raw === 'string') {
            rawObj = { url: raw };
        }
        else if (typeof raw === 'function' || Array.isArray(raw)) {
            rawObj = { events: raw };
        }
        else if (typeof raw === 'object' && raw) { // not null
            rawObj = raw;
        }
        if (rawObj) {
            let { refined, extra } = refineProps(rawObj, refiners);
            let metaRes = buildEventSourceMeta(refined, context);
            if (metaRes) {
                return {
                    _raw: raw,
                    isFetching: false,
                    latestFetchId: '',
                    fetchRange: null,
                    defaultAllDay: refined.defaultAllDay,
                    eventDataTransform: refined.eventDataTransform,
                    success: refined.success,
                    failure: refined.failure,
                    publicId: refined.id || '',
                    sourceId: guid(),
                    sourceDefId: metaRes.sourceDefId,
                    meta: metaRes.meta,
                    ui: createEventUi(refined, context),
                    extendedProps: extra,
                };
            }
        }
        return null;
    }
    function buildEventSourceRefiners(context) {
        return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
    }
    function buildEventSourceMeta(raw, context) {
        let defs = context.pluginHooks.eventSourceDefs;
        for (let i = defs.length - 1; i >= 0; i -= 1) { // later-added plugins take precedence
            let def = defs[i];
            let meta = def.parseMeta(raw);
            if (meta) {
                return { sourceDefId: i, meta };
            }
        }
        return null;
    }

    function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
        switch (action.type) {
            case 'RECEIVE_EVENTS': // raw
                return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
            case 'ADD_EVENTS': // already parsed, but not expanded
                return addEvent(eventStore, action.eventStore, // new ones
                dateProfile ? dateProfile.activeRange : null, context);
            case 'RESET_EVENTS':
                return action.eventStore;
            case 'MERGE_EVENTS': // already parsed and expanded
                return mergeEventStores(eventStore, action.eventStore);
            case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
            case 'NEXT':
            case 'CHANGE_DATE':
            case 'CHANGE_VIEW_TYPE':
                if (dateProfile) {
                    return expandRecurring(eventStore, dateProfile.activeRange, context);
                }
                return eventStore;
            case 'REMOVE_EVENTS':
                return excludeSubEventStore(eventStore, action.eventStore);
            case 'REMOVE_EVENT_SOURCE':
                return excludeEventsBySourceId(eventStore, action.sourceId);
            case 'REMOVE_ALL_EVENT_SOURCES':
                return filterEventStoreDefs(eventStore, (eventDef) => (!eventDef.sourceId // only keep events with no source id
                ));
            case 'REMOVE_ALL_EVENTS':
                return createEmptyEventStore();
            default:
                return eventStore;
        }
    }
    function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
        if (eventSource && // not already removed
            fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
        ) {
            let subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
            if (fetchRange) {
                subset = expandRecurring(subset, fetchRange, context);
            }
            return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
        }
        return eventStore;
    }
    function transformRawEvents(rawEvents, eventSource, context) {
        let calEachTransform = context.options.eventDataTransform;
        let sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
        if (sourceEachTransform) {
            rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
        }
        if (calEachTransform) {
            rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
        }
        return rawEvents;
    }
    function transformEachRawEvent(rawEvents, func) {
        let refinedEvents;
        if (!func) {
            refinedEvents = rawEvents;
        }
        else {
            refinedEvents = [];
            for (let rawEvent of rawEvents) {
                let refinedEvent = func(rawEvent);
                if (refinedEvent) {
                    refinedEvents.push(refinedEvent);
                }
                else if (refinedEvent == null) {
                    refinedEvents.push(rawEvent);
                } // if a different falsy value, do nothing
            }
        }
        return refinedEvents;
    }
    function addEvent(eventStore, subset, expandRange, context) {
        if (expandRange) {
            subset = expandRecurring(subset, expandRange, context);
        }
        return mergeEventStores(eventStore, subset);
    }
    function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
        let { defs } = eventStore;
        let instances = mapHash(eventStore.instances, (instance) => {
            let def = defs[instance.defId];
            if (def.allDay || def.recurringDef) {
                return instance; // isn't dependent on timezone
            }
            return Object.assign(Object.assign({}, instance), { range: {
                    start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
                    end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo)),
                }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
        });
        return { defs, instances };
    }
    function excludeEventsBySourceId(eventStore, sourceId) {
        return filterEventStoreDefs(eventStore, (eventDef) => eventDef.sourceId !== sourceId);
    }
    // QUESTION: why not just return instances? do a general object-property-exclusion util
    function excludeInstances(eventStore, removals) {
        return {
            defs: eventStore.defs,
            instances: filterHash(eventStore.instances, (instance) => !removals[instance.instanceId]),
        };
    }

    class Emitter {
        constructor() {
            this.handlers = {};
            this.thisContext = null;
        }
        setThisContext(thisContext) {
            this.thisContext = thisContext;
        }
        setOptions(options) {
            this.options = options;
        }
        on(type, handler) {
            addToHash(this.handlers, type, handler);
        }
        off(type, handler) {
            removeFromHash(this.handlers, type, handler);
        }
        trigger(type, ...args) {
            let attachedHandlers = this.handlers[type] || [];
            let optionHandler = this.options && this.options[type];
            let handlers = [].concat(optionHandler || [], attachedHandlers);
            for (let handler of handlers) {
                handler.apply(this.thisContext, args);
            }
        }
        hasHandlers(type) {
            return Boolean((this.handlers[type] && this.handlers[type].length) ||
                (this.options && this.options[type]));
        }
    }
    function addToHash(hash, type, handler) {
        (hash[type] || (hash[type] = []))
            .push(handler);
    }
    function removeFromHash(hash, type, handler) {
        if (handler) {
            if (hash[type]) {
                hash[type] = hash[type].filter((func) => func !== handler);
            }
        }
        else {
            delete hash[type]; // remove all handler funcs for this type
        }
    }

    const DEF_DEFAULTS = {
        startTime: '09:00',
        endTime: '17:00',
        daysOfWeek: [1, 2, 3, 4, 5],
        display: 'inverse-background',
        classNames: 'fc-non-business',
        groupId: '_businessHours', // so multiple defs get grouped
    };
    /*
    TODO: pass around as EventDefHash!!!
    */
    function parseBusinessHours(input, context) {
        return parseEvents(refineInputs(input), null, context);
    }
    function refineInputs(input) {
        let rawDefs;
        if (input === true) {
            rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
        }
        else if (Array.isArray(input)) {
            // if specifying an array, every sub-definition NEEDS a day-of-week
            rawDefs = input.filter((rawDef) => rawDef.daysOfWeek);
        }
        else if (typeof input === 'object' && input) { // non-null object
            rawDefs = [input];
        }
        else { // is probably false
            rawDefs = [];
        }
        rawDefs = rawDefs.map((rawDef) => (Object.assign(Object.assign({}, DEF_DEFAULTS), rawDef)));
        return rawDefs;
    }

    function triggerDateSelect(selection, pev, context) {
        context.emitter.trigger('select', Object.assign(Object.assign({}, buildDateSpanApiWithContext(selection, context)), { jsEvent: pev ? pev.origEvent : null, view: context.viewApi || context.calendarApi.view }));
    }
    function triggerDateUnselect(pev, context) {
        context.emitter.trigger('unselect', {
            jsEvent: pev ? pev.origEvent : null,
            view: context.viewApi || context.calendarApi.view,
        });
    }
    function buildDateSpanApiWithContext(dateSpan, context) {
        let props = {};
        for (let transform of context.pluginHooks.dateSpanTransforms) {
            Object.assign(props, transform(dateSpan, context));
        }
        Object.assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
        return props;
    }
    // Given an event's allDay status and start date, return what its fallback end date should be.
    // TODO: rename to computeDefaultEventEnd
    function getDefaultEventEnd(allDay, marker, context) {
        let { dateEnv, options } = context;
        let end = marker;
        if (allDay) {
            end = startOfDay(end);
            end = dateEnv.add(end, options.defaultAllDayEventDuration);
        }
        else {
            end = dateEnv.add(end, options.defaultTimedEventDuration);
        }
        return end;
    }

    // applies the mutation to ALL defs/instances within the event store
    function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
        let eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
        let dest = createEmptyEventStore();
        for (let defId in eventStore.defs) {
            let def = eventStore.defs[defId];
            dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
        }
        for (let instanceId in eventStore.instances) {
            let instance = eventStore.instances[instanceId];
            let def = dest.defs[instance.defId]; // important to grab the newly modified def
            dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
        }
        return dest;
    }
    function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
        let standardProps = mutation.standardProps || {};
        // if hasEnd has not been specified, guess a good value based on deltas.
        // if duration will change, there's no way the default duration will persist,
        // and thus, we need to mark the event as having a real end
        if (standardProps.hasEnd == null &&
            eventConfig.durationEditable &&
            (mutation.startDelta || mutation.endDelta)) {
            standardProps.hasEnd = true; // TODO: is this mutation okay?
        }
        let copy = Object.assign(Object.assign(Object.assign({}, eventDef), standardProps), { ui: Object.assign(Object.assign({}, eventDef.ui), standardProps.ui) });
        if (mutation.extendedProps) {
            copy.extendedProps = Object.assign(Object.assign({}, copy.extendedProps), mutation.extendedProps);
        }
        for (let applier of context.pluginHooks.eventDefMutationAppliers) {
            applier(copy, mutation, context);
        }
        if (!copy.hasEnd && context.options.forceEventDuration) {
            copy.hasEnd = true;
        }
        return copy;
    }
    function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
    eventConfig, mutation, context) {
        let { dateEnv } = context;
        let forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
        let clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
        let copy = Object.assign({}, eventInstance);
        if (forceAllDay) {
            copy.range = computeAlignedDayRange(copy.range);
        }
        if (mutation.datesDelta && eventConfig.startEditable) {
            copy.range = {
                start: dateEnv.add(copy.range.start, mutation.datesDelta),
                end: dateEnv.add(copy.range.end, mutation.datesDelta),
            };
        }
        if (mutation.startDelta && eventConfig.durationEditable) {
            copy.range = {
                start: dateEnv.add(copy.range.start, mutation.startDelta),
                end: copy.range.end,
            };
        }
        if (mutation.endDelta && eventConfig.durationEditable) {
            copy.range = {
                start: copy.range.start,
                end: dateEnv.add(copy.range.end, mutation.endDelta),
            };
        }
        if (clearEnd) {
            copy.range = {
                start: copy.range.start,
                end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context),
            };
        }
        // in case event was all-day but the supplied deltas were not
        // better util for this?
        if (eventDef.allDay) {
            copy.range = {
                start: startOfDay(copy.range.start),
                end: startOfDay(copy.range.end),
            };
        }
        // handle invalid durations
        if (copy.range.end < copy.range.start) {
            copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
        }
        return copy;
    }

    class EventSourceImpl {
        constructor(context, internalEventSource) {
            this.context = context;
            this.internalEventSource = internalEventSource;
        }
        remove() {
            this.context.dispatch({
                type: 'REMOVE_EVENT_SOURCE',
                sourceId: this.internalEventSource.sourceId,
            });
        }
        refetch() {
            this.context.dispatch({
                type: 'FETCH_EVENT_SOURCES',
                sourceIds: [this.internalEventSource.sourceId],
                isRefetch: true,
            });
        }
        get id() {
            return this.internalEventSource.publicId;
        }
        get url() {
            return this.internalEventSource.meta.url;
        }
        get format() {
            return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
        }
    }

    class EventImpl {
        // instance will be null if expressing a recurring event that has no current instances,
        // OR if trying to validate an incoming external event that has no dates assigned
        constructor(context, def, instance) {
            this._context = context;
            this._def = def;
            this._instance = instance || null;
        }
        /*
        TODO: make event struct more responsible for this
        */
        setProp(name, val) {
            if (name in EVENT_DATE_REFINERS) {
                console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.');
                // TODO: make proper aliasing system?
            }
            else if (name === 'id') {
                val = EVENT_NON_DATE_REFINERS[name](val);
                this.mutate({
                    standardProps: { publicId: val }, // hardcoded internal name
                });
            }
            else if (name in EVENT_NON_DATE_REFINERS) {
                val = EVENT_NON_DATE_REFINERS[name](val);
                this.mutate({
                    standardProps: { [name]: val },
                });
            }
            else if (name in EVENT_UI_REFINERS) {
                let ui = EVENT_UI_REFINERS[name](val);
                if (name === 'color') {
                    ui = { backgroundColor: val, borderColor: val };
                }
                else if (name === 'editable') {
                    ui = { startEditable: val, durationEditable: val };
                }
                else {
                    ui = { [name]: val };
                }
                this.mutate({
                    standardProps: { ui },
                });
            }
            else {
                console.warn(`Could not set prop '${name}'. Use setExtendedProp instead.`);
            }
        }
        setExtendedProp(name, val) {
            this.mutate({
                extendedProps: { [name]: val },
            });
        }
        setStart(startInput, options = {}) {
            let { dateEnv } = this._context;
            let start = dateEnv.createMarker(startInput);
            if (start && this._instance) { // TODO: warning if parsed bad
                let instanceRange = this._instance.range;
                let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
                if (options.maintainDuration) {
                    this.mutate({ datesDelta: startDelta });
                }
                else {
                    this.mutate({ startDelta });
                }
            }
        }
        setEnd(endInput, options = {}) {
            let { dateEnv } = this._context;
            let end;
            if (endInput != null) {
                end = dateEnv.createMarker(endInput);
                if (!end) {
                    return; // TODO: warning if parsed bad
                }
            }
            if (this._instance) {
                if (end) {
                    let endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
                    this.mutate({ endDelta });
                }
                else {
                    this.mutate({ standardProps: { hasEnd: false } });
                }
            }
        }
        setDates(startInput, endInput, options = {}) {
            let { dateEnv } = this._context;
            let standardProps = { allDay: options.allDay };
            let start = dateEnv.createMarker(startInput);
            let end;
            if (!start) {
                return; // TODO: warning if parsed bad
            }
            if (endInput != null) {
                end = dateEnv.createMarker(endInput);
                if (!end) { // TODO: warning if parsed bad
                    return;
                }
            }
            if (this._instance) {
                let instanceRange = this._instance.range;
                // when computing the diff for an event being converted to all-day,
                // compute diff off of the all-day values the way event-mutation does.
                if (options.allDay === true) {
                    instanceRange = computeAlignedDayRange(instanceRange);
                }
                let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
                if (end) {
                    let endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
                    if (durationsEqual(startDelta, endDelta)) {
                        this.mutate({ datesDelta: startDelta, standardProps });
                    }
                    else {
                        this.mutate({ startDelta, endDelta, standardProps });
                    }
                }
                else { // means "clear the end"
                    standardProps.hasEnd = false;
                    this.mutate({ datesDelta: startDelta, standardProps });
                }
            }
        }
        moveStart(deltaInput) {
            let delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ startDelta: delta });
            }
        }
        moveEnd(deltaInput) {
            let delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ endDelta: delta });
            }
        }
        moveDates(deltaInput) {
            let delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ datesDelta: delta });
            }
        }
        setAllDay(allDay, options = {}) {
            let standardProps = { allDay };
            let { maintainDuration } = options;
            if (maintainDuration == null) {
                maintainDuration = this._context.options.allDayMaintainDuration;
            }
            if (this._def.allDay !== allDay) {
                standardProps.hasEnd = maintainDuration;
            }
            this.mutate({ standardProps });
        }
        formatRange(formatInput) {
            let { dateEnv } = this._context;
            let instance = this._instance;
            let formatter = createFormatter(formatInput);
            if (this._def.hasEnd) {
                return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
                    forcedStartTzo: instance.forcedStartTzo,
                    forcedEndTzo: instance.forcedEndTzo,
                });
            }
            return dateEnv.format(instance.range.start, formatter, {
                forcedTzo: instance.forcedStartTzo,
            });
        }
        mutate(mutation) {
            let instance = this._instance;
            if (instance) {
                let def = this._def;
                let context = this._context;
                let { eventStore } = context.getCurrentData();
                let relevantEvents = getRelevantEvents(eventStore, instance.instanceId);
                let eventConfigBase = {
                    '': {
                        display: '',
                        startEditable: true,
                        durationEditable: true,
                        constraints: [],
                        overlap: null,
                        allows: [],
                        backgroundColor: '',
                        borderColor: '',
                        textColor: '',
                        classNames: [],
                    },
                };
                relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context);
                let oldEvent = new EventImpl(context, def, instance); // snapshot
                this._def = relevantEvents.defs[def.defId];
                this._instance = relevantEvents.instances[instance.instanceId];
                context.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: relevantEvents,
                });
                context.emitter.trigger('eventChange', {
                    oldEvent,
                    event: this,
                    relatedEvents: buildEventApis(relevantEvents, context, instance),
                    revert() {
                        context.dispatch({
                            type: 'RESET_EVENTS',
                            eventStore, // the ORIGINAL store
                        });
                    },
                });
            }
        }
        remove() {
            let context = this._context;
            let asStore = eventApiToStore(this);
            context.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: asStore,
            });
            context.emitter.trigger('eventRemove', {
                event: this,
                relatedEvents: [],
                revert() {
                    context.dispatch({
                        type: 'MERGE_EVENTS',
                        eventStore: asStore,
                    });
                },
            });
        }
        get source() {
            let { sourceId } = this._def;
            if (sourceId) {
                return new EventSourceImpl(this._context, this._context.getCurrentData().eventSources[sourceId]);
            }
            return null;
        }
        get start() {
            return this._instance ?
                this._context.dateEnv.toDate(this._instance.range.start) :
                null;
        }
        get end() {
            return (this._instance && this._def.hasEnd) ?
                this._context.dateEnv.toDate(this._instance.range.end) :
                null;
        }
        get startStr() {
            let instance = this._instance;
            if (instance) {
                return this._context.dateEnv.formatIso(instance.range.start, {
                    omitTime: this._def.allDay,
                    forcedTzo: instance.forcedStartTzo,
                });
            }
            return '';
        }
        get endStr() {
            let instance = this._instance;
            if (instance && this._def.hasEnd) {
                return this._context.dateEnv.formatIso(instance.range.end, {
                    omitTime: this._def.allDay,
                    forcedTzo: instance.forcedEndTzo,
                });
            }
            return '';
        }
        // computable props that all access the def
        // TODO: find a TypeScript-compatible way to do this at scale
        get id() { return this._def.publicId; }
        get groupId() { return this._def.groupId; }
        get allDay() { return this._def.allDay; }
        get title() { return this._def.title; }
        get url() { return this._def.url; }
        get display() { return this._def.ui.display || 'auto'; } // bad. just normalize the type earlier
        get startEditable() { return this._def.ui.startEditable; }
        get durationEditable() { return this._def.ui.durationEditable; }
        get constraint() { return this._def.ui.constraints[0] || null; }
        get overlap() { return this._def.ui.overlap; }
        get allow() { return this._def.ui.allows[0] || null; }
        get backgroundColor() { return this._def.ui.backgroundColor; }
        get borderColor() { return this._def.ui.borderColor; }
        get textColor() { return this._def.ui.textColor; }
        // NOTE: user can't modify these because Object.freeze was called in event-def parsing
        get classNames() { return this._def.ui.classNames; }
        get extendedProps() { return this._def.extendedProps; }
        toPlainObject(settings = {}) {
            let def = this._def;
            let { ui } = def;
            let { startStr, endStr } = this;
            let res = {};
            if (def.title) {
                res.title = def.title;
            }
            if (startStr) {
                res.start = startStr;
            }
            if (endStr) {
                res.end = endStr;
            }
            if (def.publicId) {
                res.id = def.publicId;
            }
            if (def.groupId) {
                res.groupId = def.groupId;
            }
            if (def.url) {
                res.url = def.url;
            }
            if (ui.display && ui.display !== 'auto') {
                res.display = ui.display;
            }
            // TODO: what about recurring-event properties???
            // TODO: include startEditable/durationEditable/constraint/overlap/allow
            if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
                res.color = ui.backgroundColor;
            }
            else {
                if (ui.backgroundColor) {
                    res.backgroundColor = ui.backgroundColor;
                }
                if (ui.borderColor) {
                    res.borderColor = ui.borderColor;
                }
            }
            if (ui.textColor) {
                res.textColor = ui.textColor;
            }
            if (ui.classNames.length) {
                res.classNames = ui.classNames;
            }
            if (Object.keys(def.extendedProps).length) {
                if (settings.collapseExtendedProps) {
                    Object.assign(res, def.extendedProps);
                }
                else {
                    res.extendedProps = def.extendedProps;
                }
            }
            return res;
        }
        toJSON() {
            return this.toPlainObject();
        }
    }
    function eventApiToStore(eventApi) {
        let def = eventApi._def;
        let instance = eventApi._instance;
        return {
            defs: { [def.defId]: def },
            instances: instance
                ? { [instance.instanceId]: instance }
                : {},
        };
    }
    function buildEventApis(eventStore, context, excludeInstance) {
        let { defs, instances } = eventStore;
        let eventApis = [];
        let excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';
        for (let id in instances) {
            let instance = instances[id];
            let def = defs[instance.defId];
            if (instance.instanceId !== excludeInstanceId) {
                eventApis.push(new EventImpl(context, def, instance));
            }
        }
        return eventApis;
    }

    /*
    Specifying nextDayThreshold signals that all-day ranges should be sliced.
    */
    function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
        let inverseBgByGroupId = {};
        let inverseBgByDefId = {};
        let defByGroupId = {};
        let bgRanges = [];
        let fgRanges = [];
        let eventUis = compileEventUis(eventStore.defs, eventUiBases);
        for (let defId in eventStore.defs) {
            let def = eventStore.defs[defId];
            let ui = eventUis[def.defId];
            if (ui.display === 'inverse-background') {
                if (def.groupId) {
                    inverseBgByGroupId[def.groupId] = [];
                    if (!defByGroupId[def.groupId]) {
                        defByGroupId[def.groupId] = def;
                    }
                }
                else {
                    inverseBgByDefId[defId] = [];
                }
            }
        }
        for (let instanceId in eventStore.instances) {
            let instance = eventStore.instances[instanceId];
            let def = eventStore.defs[instance.defId];
            let ui = eventUis[def.defId];
            let origRange = instance.range;
            let normalRange = (!def.allDay && nextDayThreshold) ?
                computeVisibleDayRange(origRange, nextDayThreshold) :
                origRange;
            let slicedRange = intersectRanges(normalRange, framingRange);
            if (slicedRange) {
                if (ui.display === 'inverse-background') {
                    if (def.groupId) {
                        inverseBgByGroupId[def.groupId].push(slicedRange);
                    }
                    else {
                        inverseBgByDefId[instance.defId].push(slicedRange);
                    }
                }
                else if (ui.display !== 'none') {
                    (ui.display === 'background' ? bgRanges : fgRanges).push({
                        def,
                        ui,
                        instance,
                        range: slicedRange,
                        isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
                        isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf(),
                    });
                }
            }
        }
        for (let groupId in inverseBgByGroupId) { // BY GROUP
            let ranges = inverseBgByGroupId[groupId];
            let invertedRanges = invertRanges(ranges, framingRange);
            for (let invertedRange of invertedRanges) {
                let def = defByGroupId[groupId];
                let ui = eventUis[def.defId];
                bgRanges.push({
                    def,
                    ui,
                    instance: null,
                    range: invertedRange,
                    isStart: false,
                    isEnd: false,
                });
            }
        }
        for (let defId in inverseBgByDefId) {
            let ranges = inverseBgByDefId[defId];
            let invertedRanges = invertRanges(ranges, framingRange);
            for (let invertedRange of invertedRanges) {
                bgRanges.push({
                    def: eventStore.defs[defId],
                    ui: eventUis[defId],
                    instance: null,
                    range: invertedRange,
                    isStart: false,
                    isEnd: false,
                });
            }
        }
        return { bg: bgRanges, fg: fgRanges };
    }
    function hasBgRendering(def) {
        return def.ui.display === 'background' || def.ui.display === 'inverse-background';
    }
    function setElSeg(el, seg) {
        el.fcSeg = seg;
    }
    function getElSeg(el) {
        return el.fcSeg ||
            el.parentNode.fcSeg || // for the harness
            null;
    }
    // event ui computation
    function compileEventUis(eventDefs, eventUiBases) {
        return mapHash(eventDefs, (eventDef) => compileEventUi(eventDef, eventUiBases));
    }
    function compileEventUi(eventDef, eventUiBases) {
        let uis = [];
        if (eventUiBases['']) {
            uis.push(eventUiBases['']);
        }
        if (eventUiBases[eventDef.defId]) {
            uis.push(eventUiBases[eventDef.defId]);
        }
        uis.push(eventDef.ui);
        return combineEventUis(uis);
    }
    function sortEventSegs(segs, eventOrderSpecs) {
        let objs = segs.map(buildSegCompareObj);
        objs.sort((obj0, obj1) => compareByFieldSpecs(obj0, obj1, eventOrderSpecs));
        return objs.map((c) => c._seg);
    }
    // returns a object with all primitive props that can be compared
    function buildSegCompareObj(seg) {
        let { eventRange } = seg;
        let eventDef = eventRange.def;
        let range = eventRange.instance ? eventRange.instance.range : eventRange.range;
        let start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
        let end = range.end ? range.end.valueOf() : 0; // "
        return Object.assign(Object.assign(Object.assign({}, eventDef.extendedProps), eventDef), { id: eventDef.publicId, start,
            end, duration: end - start, allDay: Number(eventDef.allDay), _seg: seg });
    }
    function computeSegDraggable(seg, context) {
        let { pluginHooks } = context;
        let transformers = pluginHooks.isDraggableTransformers;
        let { def, ui } = seg.eventRange;
        let val = ui.startEditable;
        for (let transformer of transformers) {
            val = transformer(val, def, ui, context);
        }
        return val;
    }
    function computeSegStartResizable(seg, context) {
        return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
    }
    function computeSegEndResizable(seg, context) {
        return seg.isEnd && seg.eventRange.ui.durationEditable;
    }
    function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, // defaults to true
    defaultDisplayEventEnd, // defaults to true
    startOverride, endOverride) {
        let { dateEnv, options } = context;
        let { displayEventTime, displayEventEnd } = options;
        let eventDef = seg.eventRange.def;
        let eventInstance = seg.eventRange.instance;
        if (displayEventTime == null) {
            displayEventTime = defaultDisplayEventTime !== false;
        }
        if (displayEventEnd == null) {
            displayEventEnd = defaultDisplayEventEnd !== false;
        }
        let wholeEventStart = eventInstance.range.start;
        let wholeEventEnd = eventInstance.range.end;
        let segStart = startOverride || seg.start || seg.eventRange.range.start;
        let segEnd = endOverride || seg.end || seg.eventRange.range.end;
        let isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
        let isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
        if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
            segStart = isStartDay ? wholeEventStart : segStart;
            segEnd = isEndDay ? wholeEventEnd : segEnd;
            if (displayEventEnd && eventDef.hasEnd) {
                return dateEnv.formatRange(segStart, segEnd, timeFormat, {
                    forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
                    forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo,
                });
            }
            return dateEnv.format(segStart, timeFormat, {
                forcedTzo: startOverride ? null : eventInstance.forcedStartTzo, // nooooo, same
            });
        }
        return '';
    }
    function getSegMeta(seg, todayRange, nowDate) {
        let segRange = seg.eventRange.range;
        return {
            isPast: segRange.end < (nowDate || todayRange.start),
            isFuture: segRange.start >= (nowDate || todayRange.end),
            isToday: todayRange && rangeContainsMarker(todayRange, segRange.start),
        };
    }
    function getEventClassNames(props) {
        let classNames = ['fc-event'];
        if (props.isMirror) {
            classNames.push('fc-event-mirror');
        }
        if (props.isDraggable) {
            classNames.push('fc-event-draggable');
        }
        if (props.isStartResizable || props.isEndResizable) {
            classNames.push('fc-event-resizable');
        }
        if (props.isDragging) {
            classNames.push('fc-event-dragging');
        }
        if (props.isResizing) {
            classNames.push('fc-event-resizing');
        }
        if (props.isSelected) {
            classNames.push('fc-event-selected');
        }
        if (props.isStart) {
            classNames.push('fc-event-start');
        }
        if (props.isEnd) {
            classNames.push('fc-event-end');
        }
        if (props.isPast) {
            classNames.push('fc-event-past');
        }
        if (props.isToday) {
            classNames.push('fc-event-today');
        }
        if (props.isFuture) {
            classNames.push('fc-event-future');
        }
        return classNames;
    }
    function buildEventRangeKey(eventRange) {
        return eventRange.instance
            ? eventRange.instance.instanceId
            : `${eventRange.def.defId}:${eventRange.range.start.toISOString()}`;
        // inverse-background events don't have specific instances. TODO: better solution
    }
    function getSegAnchorAttrs(seg, context) {
        let { def, instance } = seg.eventRange;
        let { url } = def;
        if (url) {
            return { href: url };
        }
        let { emitter, options } = context;
        let { eventInteractive } = options;
        if (eventInteractive == null) {
            eventInteractive = def.interactive;
            if (eventInteractive == null) {
                eventInteractive = Boolean(emitter.hasHandlers('eventClick'));
            }
        }
        // mock what happens in EventClicking
        if (eventInteractive) {
            // only attach keyboard-related handlers because click handler is already done in EventClicking
            return createAriaKeyboardAttrs((ev) => {
                emitter.trigger('eventClick', {
                    el: ev.target,
                    event: new EventImpl(context, def, instance),
                    jsEvent: ev,
                    view: context.viewApi,
                });
            });
        }
        return {};
    }

    const STANDARD_PROPS = {
        start: identity,
        end: identity,
        allDay: Boolean,
    };
    function parseDateSpan(raw, dateEnv, defaultDuration) {
        let span = parseOpenDateSpan(raw, dateEnv);
        let { range } = span;
        if (!range.start) {
            return null;
        }
        if (!range.end) {
            if (defaultDuration == null) {
                return null;
            }
            range.end = dateEnv.add(range.start, defaultDuration);
        }
        return span;
    }
    /*
    TODO: somehow combine with parseRange?
    Will return null if the start/end props were present but parsed invalidly.
    */
    function parseOpenDateSpan(raw, dateEnv) {
        let { refined: standardProps, extra } = refineProps(raw, STANDARD_PROPS);
        let startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
        let endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
        let { allDay } = standardProps;
        if (allDay == null) {
            allDay = (startMeta && startMeta.isTimeUnspecified) &&
                (!endMeta || endMeta.isTimeUnspecified);
        }
        return Object.assign({ range: {
                start: startMeta ? startMeta.marker : null,
                end: endMeta ? endMeta.marker : null,
            }, allDay }, extra);
    }
    function isDateSpansEqual(span0, span1) {
        return rangesEqual(span0.range, span1.range) &&
            span0.allDay === span1.allDay &&
            isSpanPropsEqual(span0, span1);
    }
    // the NON-DATE-RELATED props
    function isSpanPropsEqual(span0, span1) {
        for (let propName in span1) {
            if (propName !== 'range' && propName !== 'allDay') {
                if (span0[propName] !== span1[propName]) {
                    return false;
                }
            }
        }
        // are there any props that span0 has that span1 DOESN'T have?
        // both have range/allDay, so no need to special-case.
        for (let propName in span0) {
            if (!(propName in span1)) {
                return false;
            }
        }
        return true;
    }
    function buildDateSpanApi(span, dateEnv) {
        return Object.assign(Object.assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), { allDay: span.allDay });
    }
    function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
        return Object.assign(Object.assign({}, buildRangeApi(range, dateEnv, omitTime)), { timeZone: dateEnv.timeZone });
    }
    function buildRangeApi(range, dateEnv, omitTime) {
        return {
            start: dateEnv.toDate(range.start),
            end: dateEnv.toDate(range.end),
            startStr: dateEnv.formatIso(range.start, { omitTime }),
            endStr: dateEnv.formatIso(range.end, { omitTime }),
        };
    }
    function fabricateEventRange(dateSpan, eventUiBases, context) {
        let res = refineEventDef({ editable: false }, context);
        let def = parseEventDef(res.refined, res.extra, '', // sourceId
        dateSpan.allDay, true, // hasEnd
        context);
        return {
            def,
            ui: compileEventUi(def, eventUiBases),
            instance: createEventInstance(def.defId, dateSpan.range),
            range: dateSpan.range,
            isStart: true,
            isEnd: true,
        };
    }

    /*
    given a function that resolves a result asynchronously.
    the function can either call passed-in success and failure callbacks,
    or it can return a promise.
    if you need to pass additional params to func, bind them first.
    */
    function unpromisify(func, normalizedSuccessCallback, normalizedFailureCallback) {
        // guard against success/failure callbacks being called more than once
        // and guard against a promise AND callback being used together.
        let isResolved = false;
        let wrappedSuccess = function (res) {
            if (!isResolved) {
                isResolved = true;
                normalizedSuccessCallback(res);
            }
        };
        let wrappedFailure = function (error) {
            if (!isResolved) {
                isResolved = true;
                normalizedFailureCallback(error);
            }
        };
        let res = func(wrappedSuccess, wrappedFailure);
        if (res && typeof res.then === 'function') {
            res.then(wrappedSuccess, wrappedFailure);
        }
    }

    class JsonRequestError extends Error {
        constructor(message, response) {
            super(message);
            this.response = response;
        }
    }
    function requestJson(method, url, params) {
        method = method.toUpperCase();
        const fetchOptions = {
            method,
        };
        if (method === 'GET') {
            url += (url.indexOf('?') === -1 ? '?' : '&') +
                new URLSearchParams(params);
        }
        else {
            fetchOptions.body = new URLSearchParams(params);
            fetchOptions.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            };
        }
        return fetch(url, fetchOptions).then((fetchRes) => {
            if (fetchRes.ok) {
                return fetchRes.json().then((parsedResponse) => {
                    return [parsedResponse, fetchRes];
                }, () => {
                    throw new JsonRequestError('Failure parsing JSON', fetchRes);
                });
            }
            else {
                throw new JsonRequestError('Request failed', fetchRes);
            }
        });
    }

    let canVGrowWithinCell;
    function getCanVGrowWithinCell() {
        if (canVGrowWithinCell == null) {
            canVGrowWithinCell = computeCanVGrowWithinCell();
        }
        return canVGrowWithinCell;
    }
    function computeCanVGrowWithinCell() {
        // for SSR, because this function is call immediately at top-level
        // TODO: just make this logic execute top-level, immediately, instead of doing lazily
        if (typeof document === 'undefined') {
            return true;
        }
        let el = document.createElement('div');
        el.style.position = 'absolute';
        el.style.top = '0px';
        el.style.left = '0px';
        el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
        el.querySelector('table').style.height = '100px';
        el.querySelector('div').style.height = '100%';
        document.body.appendChild(el);
        let div = el.querySelector('div');
        let possible = div.offsetHeight > 0;
        document.body.removeChild(el);
        return possible;
    }

    class CalendarRoot extends BaseComponent {
        constructor() {
            super(...arguments);
            this.state = {
                forPrint: false,
            };
            this.handleBeforePrint = () => {
                this.setState({ forPrint: true });
            };
            this.handleAfterPrint = () => {
                this.setState({ forPrint: false });
            };
        }
        render() {
            let { props } = this;
            let { options } = props;
            let { forPrint } = this.state;
            let isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
            let height = (!isHeightAuto && options.height != null) ? options.height : '';
            let classNames = [
                'fc',
                forPrint ? 'fc-media-print' : 'fc-media-screen',
                `fc-direction-${options.direction}`,
                props.theme.getClass('root'),
            ];
            if (!getCanVGrowWithinCell()) {
                classNames.push('fc-liquid-hack');
            }
            return props.children(classNames, height, isHeightAuto, forPrint);
        }
        componentDidMount() {
            let { emitter } = this.props;
            emitter.on('_beforeprint', this.handleBeforePrint);
            emitter.on('_afterprint', this.handleAfterPrint);
        }
        componentWillUnmount() {
            let { emitter } = this.props;
            emitter.off('_beforeprint', this.handleBeforePrint);
            emitter.off('_afterprint', this.handleAfterPrint);
        }
    }

    class Interaction {
        constructor(settings) {
            this.component = settings.component;
            this.isHitComboAllowed = settings.isHitComboAllowed || null;
        }
        destroy() {
        }
    }
    function parseInteractionSettings(component, input) {
        return {
            component,
            el: input.el,
            useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
            isHitComboAllowed: input.isHitComboAllowed || null,
        };
    }
    function interactionSettingsToStore(settings) {
        return {
            [settings.component.uid]: settings,
        };
    }
    // global state
    const interactionSettingsStore = {};

    class CalendarImpl {
        getCurrentData() {
            return this.currentDataManager.getCurrentData();
        }
        dispatch(action) {
            this.currentDataManager.dispatch(action);
        }
        get view() { return this.getCurrentData().viewApi; }
        batchRendering(callback) {
            callback();
        }
        updateSize() {
            this.trigger('_resize', true);
        }
        // Options
        // -----------------------------------------------------------------------------------------------------------------
        setOption(name, val) {
            this.dispatch({
                type: 'SET_OPTION',
                optionName: name,
                rawOptionValue: val,
            });
        }
        getOption(name) {
            return this.currentDataManager.currentCalendarOptionsInput[name];
        }
        getAvailableLocaleCodes() {
            return Object.keys(this.getCurrentData().availableRawLocales);
        }
        // Trigger
        // -----------------------------------------------------------------------------------------------------------------
        on(handlerName, handler) {
            let { currentDataManager } = this;
            if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
                currentDataManager.emitter.on(handlerName, handler);
            }
            else {
                console.warn(`Unknown listener name '${handlerName}'`);
            }
        }
        off(handlerName, handler) {
            this.currentDataManager.emitter.off(handlerName, handler);
        }
        // not meant for public use
        trigger(handlerName, ...args) {
            this.currentDataManager.emitter.trigger(handlerName, ...args);
        }
        // View
        // -----------------------------------------------------------------------------------------------------------------
        changeView(viewType, dateOrRange) {
            this.batchRendering(() => {
                this.unselect();
                if (dateOrRange) {
                    if (dateOrRange.start && dateOrRange.end) { // a range
                        this.dispatch({
                            type: 'CHANGE_VIEW_TYPE',
                            viewType,
                        });
                        this.dispatch({
                            type: 'SET_OPTION',
                            optionName: 'visibleRange',
                            rawOptionValue: dateOrRange,
                        });
                    }
                    else {
                        let { dateEnv } = this.getCurrentData();
                        this.dispatch({
                            type: 'CHANGE_VIEW_TYPE',
                            viewType,
                            dateMarker: dateEnv.createMarker(dateOrRange),
                        });
                    }
                }
                else {
                    this.dispatch({
                        type: 'CHANGE_VIEW_TYPE',
                        viewType,
                    });
                }
            });
        }
        // Forces navigation to a view for the given date.
        // `viewType` can be a specific view name or a generic one like "week" or "day".
        // needs to change
        zoomTo(dateMarker, viewType) {
            let state = this.getCurrentData();
            let spec;
            viewType = viewType || 'day'; // day is default zoom
            spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
            this.unselect();
            if (spec) {
                this.dispatch({
                    type: 'CHANGE_VIEW_TYPE',
                    viewType: spec.type,
                    dateMarker,
                });
            }
            else {
                this.dispatch({
                    type: 'CHANGE_DATE',
                    dateMarker,
                });
            }
        }
        // Given a duration singular unit, like "week" or "day", finds a matching view spec.
        // Preference is given to views that have corresponding buttons.
        getUnitViewSpec(unit) {
            let { viewSpecs, toolbarConfig } = this.getCurrentData();
            let viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
            let i;
            let spec;
            for (let viewType in viewSpecs) {
                viewTypes.push(viewType);
            }
            for (i = 0; i < viewTypes.length; i += 1) {
                spec = viewSpecs[viewTypes[i]];
                if (spec) {
                    if (spec.singleUnit === unit) {
                        return spec;
                    }
                }
            }
            return null;
        }
        // Current Date
        // -----------------------------------------------------------------------------------------------------------------
        prev() {
            this.unselect();
            this.dispatch({ type: 'PREV' });
        }
        next() {
            this.unselect();
            this.dispatch({ type: 'NEXT' });
        }
        prevYear() {
            let state = this.getCurrentData();
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: state.dateEnv.addYears(state.currentDate, -1),
            });
        }
        nextYear() {
            let state = this.getCurrentData();
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: state.dateEnv.addYears(state.currentDate, 1),
            });
        }
        today() {
            let state = this.getCurrentData();
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: getNow(state.calendarOptions.now, state.dateEnv),
            });
        }
        gotoDate(zonedDateInput) {
            let state = this.getCurrentData();
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: state.dateEnv.createMarker(zonedDateInput),
            });
        }
        incrementDate(deltaInput) {
            let state = this.getCurrentData();
            let delta = createDuration(deltaInput);
            if (delta) { // else, warn about invalid input?
                this.unselect();
                this.dispatch({
                    type: 'CHANGE_DATE',
                    dateMarker: state.dateEnv.add(state.currentDate, delta),
                });
            }
        }
        getDate() {
            let state = this.getCurrentData();
            return state.dateEnv.toDate(state.currentDate);
        }
        // Date Formatting Utils
        // -----------------------------------------------------------------------------------------------------------------
        formatDate(d, formatter) {
            let { dateEnv } = this.getCurrentData();
            return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
        }
        // `settings` is for formatter AND isEndExclusive
        formatRange(d0, d1, settings) {
            let { dateEnv } = this.getCurrentData();
            return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
        }
        formatIso(d, omitTime) {
            let { dateEnv } = this.getCurrentData();
            return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime });
        }
        // Date Selection / Event Selection / DayClick
        // -----------------------------------------------------------------------------------------------------------------
        select(dateOrObj, endDate) {
            let selectionInput;
            if (endDate == null) {
                if (dateOrObj.start != null) {
                    selectionInput = dateOrObj;
                }
                else {
                    selectionInput = {
                        start: dateOrObj,
                        end: null,
                    };
                }
            }
            else {
                selectionInput = {
                    start: dateOrObj,
                    end: endDate,
                };
            }
            let state = this.getCurrentData();
            let selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({ days: 1 }));
            if (selection) { // throw parse error otherwise?
                this.dispatch({ type: 'SELECT_DATES', selection });
                triggerDateSelect(selection, null, state);
            }
        }
        unselect(pev) {
            let state = this.getCurrentData();
            if (state.dateSelection) {
                this.dispatch({ type: 'UNSELECT_DATES' });
                triggerDateUnselect(pev, state);
            }
        }
        // Public Events API
        // -----------------------------------------------------------------------------------------------------------------
        addEvent(eventInput, sourceInput) {
            if (eventInput instanceof EventImpl) {
                let def = eventInput._def;
                let instance = eventInput._instance;
                let currentData = this.getCurrentData();
                // not already present? don't want to add an old snapshot
                if (!currentData.eventStore.defs[def.defId]) {
                    this.dispatch({
                        type: 'ADD_EVENTS',
                        eventStore: eventTupleToStore({ def, instance }), // TODO: better util for two args?
                    });
                    this.triggerEventAdd(eventInput);
                }
                return eventInput;
            }
            let state = this.getCurrentData();
            let eventSource;
            if (sourceInput instanceof EventSourceImpl) {
                eventSource = sourceInput.internalEventSource;
            }
            else if (typeof sourceInput === 'boolean') {
                if (sourceInput) { // true. part of the first event source
                    [eventSource] = hashValuesToArray(state.eventSources);
                }
            }
            else if (sourceInput != null) { // an ID. accepts a number too
                let sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
                if (!sourceApi) {
                    console.warn(`Could not find an event source with ID "${sourceInput}"`); // TODO: test
                    return null;
                }
                eventSource = sourceApi.internalEventSource;
            }
            let tuple = parseEvent(eventInput, eventSource, state, false);
            if (tuple) {
                let newEventApi = new EventImpl(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
                this.dispatch({
                    type: 'ADD_EVENTS',
                    eventStore: eventTupleToStore(tuple),
                });
                this.triggerEventAdd(newEventApi);
                return newEventApi;
            }
            return null;
        }
        triggerEventAdd(eventApi) {
            let { emitter } = this.getCurrentData();
            emitter.trigger('eventAdd', {
                event: eventApi,
                relatedEvents: [],
                revert: () => {
                    this.dispatch({
                        type: 'REMOVE_EVENTS',
                        eventStore: eventApiToStore(eventApi),
                    });
                },
            });
        }
        // TODO: optimize
        getEventById(id) {
            let state = this.getCurrentData();
            let { defs, instances } = state.eventStore;
            id = String(id);
            for (let defId in defs) {
                let def = defs[defId];
                if (def.publicId === id) {
                    if (def.recurringDef) {
                        return new EventImpl(state, def, null);
                    }
                    for (let instanceId in instances) {
                        let instance = instances[instanceId];
                        if (instance.defId === def.defId) {
                            return new EventImpl(state, def, instance);
                        }
                    }
                }
            }
            return null;
        }
        getEvents() {
            let currentData = this.getCurrentData();
            return buildEventApis(currentData.eventStore, currentData);
        }
        removeAllEvents() {
            this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
        }
        // Public Event Sources API
        // -----------------------------------------------------------------------------------------------------------------
        getEventSources() {
            let state = this.getCurrentData();
            let sourceHash = state.eventSources;
            let sourceApis = [];
            for (let internalId in sourceHash) {
                sourceApis.push(new EventSourceImpl(state, sourceHash[internalId]));
            }
            return sourceApis;
        }
        getEventSourceById(id) {
            let state = this.getCurrentData();
            let sourceHash = state.eventSources;
            id = String(id);
            for (let sourceId in sourceHash) {
                if (sourceHash[sourceId].publicId === id) {
                    return new EventSourceImpl(state, sourceHash[sourceId]);
                }
            }
            return null;
        }
        addEventSource(sourceInput) {
            let state = this.getCurrentData();
            if (sourceInput instanceof EventSourceImpl) {
                // not already present? don't want to add an old snapshot
                if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
                    this.dispatch({
                        type: 'ADD_EVENT_SOURCES',
                        sources: [sourceInput.internalEventSource],
                    });
                }
                return sourceInput;
            }
            let eventSource = parseEventSource(sourceInput, state);
            if (eventSource) { // TODO: error otherwise?
                this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [eventSource] });
                return new EventSourceImpl(state, eventSource);
            }
            return null;
        }
        removeAllEventSources() {
            this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
        }
        refetchEvents() {
            this.dispatch({ type: 'FETCH_EVENT_SOURCES', isRefetch: true });
        }
        // Scroll
        // -----------------------------------------------------------------------------------------------------------------
        scrollToTime(timeInput) {
            let time = createDuration(timeInput);
            if (time) {
                this.trigger('_scrollRequest', { time });
            }
        }
    }

    function pointInsideRect(point, rect) {
        return point.left >= rect.left &&
            point.left < rect.right &&
            point.top >= rect.top &&
            point.top < rect.bottom;
    }
    // Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
    function intersectRects(rect1, rect2) {
        let res = {
            left: Math.max(rect1.left, rect2.left),
            right: Math.min(rect1.right, rect2.right),
            top: Math.max(rect1.top, rect2.top),
            bottom: Math.min(rect1.bottom, rect2.bottom),
        };
        if (res.left < res.right && res.top < res.bottom) {
            return res;
        }
        return false;
    }
    function translateRect(rect, deltaX, deltaY) {
        return {
            left: rect.left + deltaX,
            right: rect.right + deltaX,
            top: rect.top + deltaY,
            bottom: rect.bottom + deltaY,
        };
    }
    // Returns a new point that will have been moved to reside within the given rectangle
    function constrainPoint(point, rect) {
        return {
            left: Math.min(Math.max(point.left, rect.left), rect.right),
            top: Math.min(Math.max(point.top, rect.top), rect.bottom),
        };
    }
    // Returns a point that is the center of the given rectangle
    function getRectCenter(rect) {
        return {
            left: (rect.left + rect.right) / 2,
            top: (rect.top + rect.bottom) / 2,
        };
    }
    // Subtracts point2's coordinates from point1's coordinates, returning a delta
    function diffPoints(point1, point2) {
        return {
            left: point1.left - point2.left,
            top: point1.top - point2.top,
        };
    }

    const EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
    class Splitter {
        constructor() {
            this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
            this.splitDateSelection = memoize(this._splitDateSpan);
            this.splitEventStore = memoize(this._splitEventStore);
            this.splitIndividualUi = memoize(this._splitIndividualUi);
            this.splitEventDrag = memoize(this._splitInteraction);
            this.splitEventResize = memoize(this._splitInteraction);
            this.eventUiBuilders = {}; // TODO: typescript protection
        }
        splitProps(props) {
            let keyInfos = this.getKeyInfo(props);
            let defKeys = this.getKeysForEventDefs(props.eventStore);
            let dateSelections = this.splitDateSelection(props.dateSelection);
            let individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
            let eventStores = this.splitEventStore(props.eventStore, defKeys);
            let eventDrags = this.splitEventDrag(props.eventDrag);
            let eventResizes = this.splitEventResize(props.eventResize);
            let splitProps = {};
            this.eventUiBuilders = mapHash(keyInfos, (info, key) => this.eventUiBuilders[key] || memoize(buildEventUiForKey));
            for (let key in keyInfos) {
                let keyInfo = keyInfos[key];
                let eventStore = eventStores[key] || EMPTY_EVENT_STORE;
                let buildEventUi = this.eventUiBuilders[key];
                splitProps[key] = {
                    businessHours: keyInfo.businessHours || props.businessHours,
                    dateSelection: dateSelections[key] || null,
                    eventStore,
                    eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
                    eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
                    eventDrag: eventDrags[key] || null,
                    eventResize: eventResizes[key] || null,
                };
            }
            return splitProps;
        }
        _splitDateSpan(dateSpan) {
            let dateSpans = {};
            if (dateSpan) {
                let keys = this.getKeysForDateSpan(dateSpan);
                for (let key of keys) {
                    dateSpans[key] = dateSpan;
                }
            }
            return dateSpans;
        }
        _getKeysForEventDefs(eventStore) {
            return mapHash(eventStore.defs, (eventDef) => this.getKeysForEventDef(eventDef));
        }
        _splitEventStore(eventStore, defKeys) {
            let { defs, instances } = eventStore;
            let splitStores = {};
            for (let defId in defs) {
                for (let key of defKeys[defId]) {
                    if (!splitStores[key]) {
                        splitStores[key] = createEmptyEventStore();
                    }
                    splitStores[key].defs[defId] = defs[defId];
                }
            }
            for (let instanceId in instances) {
                let instance = instances[instanceId];
                for (let key of defKeys[instance.defId]) {
                    if (splitStores[key]) { // must have already been created
                        splitStores[key].instances[instanceId] = instance;
                    }
                }
            }
            return splitStores;
        }
        _splitIndividualUi(eventUiBases, defKeys) {
            let splitHashes = {};
            for (let defId in eventUiBases) {
                if (defId) { // not the '' key
                    for (let key of defKeys[defId]) {
                        if (!splitHashes[key]) {
                            splitHashes[key] = {};
                        }
                        splitHashes[key][defId] = eventUiBases[defId];
                    }
                }
            }
            return splitHashes;
        }
        _splitInteraction(interaction) {
            let splitStates = {};
            if (interaction) {
                let affectedStores = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents));
                // can't rely on defKeys because event data is mutated
                let mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
                let mutatedStores = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
                let populate = (key) => {
                    if (!splitStates[key]) {
                        splitStates[key] = {
                            affectedEvents: affectedStores[key] || EMPTY_EVENT_STORE,
                            mutatedEvents: mutatedStores[key] || EMPTY_EVENT_STORE,
                            isEvent: interaction.isEvent,
                        };
                    }
                };
                for (let key in affectedStores) {
                    populate(key);
                }
                for (let key in mutatedStores) {
                    populate(key);
                }
            }
            return splitStates;
        }
    }
    function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
        let baseParts = [];
        if (allUi) {
            baseParts.push(allUi);
        }
        if (eventUiForKey) {
            baseParts.push(eventUiForKey);
        }
        let stuff = {
            '': combineEventUis(baseParts),
        };
        if (individualUi) {
            Object.assign(stuff, individualUi);
        }
        return stuff;
    }

    function getDateMeta(date, todayRange, nowDate, dateProfile) {
        return {
            dow: date.getUTCDay(),
            isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
            isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
            isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
            isPast: Boolean(nowDate ? (date < nowDate) : todayRange ? (date < todayRange.start) : false),
            isFuture: Boolean(nowDate ? (date > nowDate) : todayRange ? (date >= todayRange.end) : false),
        };
    }
    function getDayClassNames(meta, theme) {
        let classNames = [
            'fc-day',
            `fc-day-${DAY_IDS[meta.dow]}`,
        ];
        if (meta.isDisabled) {
            classNames.push('fc-day-disabled');
        }
        else {
            if (meta.isToday) {
                classNames.push('fc-day-today');
                classNames.push(theme.getClass('today'));
            }
            if (meta.isPast) {
                classNames.push('fc-day-past');
            }
            if (meta.isFuture) {
                classNames.push('fc-day-future');
            }
            if (meta.isOther) {
                classNames.push('fc-day-other');
            }
        }
        return classNames;
    }
    function getSlotClassNames(meta, theme) {
        let classNames = [
            'fc-slot',
            `fc-slot-${DAY_IDS[meta.dow]}`,
        ];
        if (meta.isDisabled) {
            classNames.push('fc-slot-disabled');
        }
        else {
            if (meta.isToday) {
                classNames.push('fc-slot-today');
                classNames.push(theme.getClass('today'));
            }
            if (meta.isPast) {
                classNames.push('fc-slot-past');
            }
            if (meta.isFuture) {
                classNames.push('fc-slot-future');
            }
        }
        return classNames;
    }

    const DAY_FORMAT = createFormatter({ year: 'numeric', month: 'long', day: 'numeric' });
    const WEEK_FORMAT = createFormatter({ week: 'long' });
    function buildNavLinkAttrs(context, dateMarker, viewType = 'day', isTabbable = true) {
        const { dateEnv, options, calendarApi } = context;
        let dateStr = dateEnv.format(dateMarker, viewType === 'week' ? WEEK_FORMAT : DAY_FORMAT);
        if (options.navLinks) {
            let zonedDate = dateEnv.toDate(dateMarker);
            const handleInteraction = (ev) => {
                let customAction = viewType === 'day' ? options.navLinkDayClick :
                    viewType === 'week' ? options.navLinkWeekClick : null;
                if (typeof customAction === 'function') {
                    customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
                }
                else {
                    if (typeof customAction === 'string') {
                        viewType = customAction;
                    }
                    calendarApi.zoomTo(dateMarker, viewType);
                }
            };
            return Object.assign({ title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr), 'data-navlink': '' }, (isTabbable
                ? createAriaClickAttrs(handleInteraction)
                : { onClick: handleInteraction }));
        }
        return { 'aria-label': dateStr };
    }

    let _isRtlScrollbarOnLeft = null;
    function getIsRtlScrollbarOnLeft() {
        if (_isRtlScrollbarOnLeft === null) {
            _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
        }
        return _isRtlScrollbarOnLeft;
    }
    function computeIsRtlScrollbarOnLeft() {
        let outerEl = document.createElement('div');
        applyStyle(outerEl, {
            position: 'absolute',
            top: -1000,
            left: 0,
            border: 0,
            padding: 0,
            overflow: 'scroll',
            direction: 'rtl',
        });
        outerEl.innerHTML = '<div></div>';
        document.body.appendChild(outerEl);
        let innerEl = outerEl.firstChild;
        let res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
        removeElement(outerEl);
        return res;
    }

    let _scrollbarWidths;
    function getScrollbarWidths() {
        if (!_scrollbarWidths) {
            _scrollbarWidths = computeScrollbarWidths();
        }
        return _scrollbarWidths;
    }
    function computeScrollbarWidths() {
        let el = document.createElement('div');
        el.style.overflow = 'scroll';
        el.style.position = 'absolute';
        el.style.top = '-9999px';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        let res = computeScrollbarWidthsForEl(el);
        document.body.removeChild(el);
        return res;
    }
    // WARNING: will include border
    function computeScrollbarWidthsForEl(el) {
        return {
            x: el.offsetHeight - el.clientHeight,
            y: el.offsetWidth - el.clientWidth,
        };
    }

    function computeEdges(el, getPadding = false) {
        let computedStyle = window.getComputedStyle(el);
        let borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
        let borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
        let borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
        let borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
        let badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!
        let scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
        let scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
        let res = {
            borderLeft,
            borderRight,
            borderTop,
            borderBottom,
            scrollbarBottom,
            scrollbarLeft: 0,
            scrollbarRight: 0,
        };
        if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') { // is the scrollbar on the left side?
            res.scrollbarLeft = scrollbarLeftRight;
        }
        else {
            res.scrollbarRight = scrollbarLeftRight;
        }
        if (getPadding) {
            res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
            res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
            res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
            res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
        }
        return res;
    }
    function computeInnerRect(el, goWithinPadding = false, doFromWindowViewport) {
        let outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
        let edges = computeEdges(el, goWithinPadding);
        let res = {
            left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
            right: outerRect.right - edges.borderRight - edges.scrollbarRight,
            top: outerRect.top + edges.borderTop,
            bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom,
        };
        if (goWithinPadding) {
            res.left += edges.paddingLeft;
            res.right -= edges.paddingRight;
            res.top += edges.paddingTop;
            res.bottom -= edges.paddingBottom;
        }
        return res;
    }
    function computeRect(el) {
        let rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
            right: rect.right + window.pageXOffset,
            bottom: rect.bottom + window.pageYOffset,
        };
    }
    function computeClippedClientRect(el) {
        let clippingParents = getClippingParents(el);
        let rect = el.getBoundingClientRect();
        for (let clippingParent of clippingParents) {
            let intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
            if (intersection) {
                rect = intersection;
            }
            else {
                return null;
            }
        }
        return rect;
    }
    // does not return window
    function getClippingParents(el) {
        let parents = [];
        while (el instanceof HTMLElement) { // will stop when gets to document or null
            let computedStyle = window.getComputedStyle(el);
            if (computedStyle.position === 'fixed') {
                break;
            }
            if ((/(auto|scroll)/).test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
                parents.push(el);
            }
            el = el.parentNode;
        }
        return parents;
    }

    /*
    Records offset information for a set of elements, relative to an origin element.
    Can record the left/right OR the top/bottom OR both.
    Provides methods for querying the cache by position.
    */
    class PositionCache {
        constructor(originEl, els, isHorizontal, isVertical) {
            this.els = els;
            let originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left
            if (isHorizontal) {
                this.buildElHorizontals(originClientRect.left);
            }
            if (isVertical) {
                this.buildElVerticals(originClientRect.top);
            }
        }
        // Populates the left/right internal coordinate arrays
        buildElHorizontals(originClientLeft) {
            let lefts = [];
            let rights = [];
            for (let el of this.els) {
                let rect = el.getBoundingClientRect();
                lefts.push(rect.left - originClientLeft);
                rights.push(rect.right - originClientLeft);
            }
            this.lefts = lefts;
            this.rights = rights;
        }
        // Populates the top/bottom internal coordinate arrays
        buildElVerticals(originClientTop) {
            let tops = [];
            let bottoms = [];
            for (let el of this.els) {
                let rect = el.getBoundingClientRect();
                tops.push(rect.top - originClientTop);
                bottoms.push(rect.bottom - originClientTop);
            }
            this.tops = tops;
            this.bottoms = bottoms;
        }
        // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
        // If no intersection is made, returns undefined.
        leftToIndex(leftPosition) {
            let { lefts, rights } = this;
            let len = lefts.length;
            let i;
            for (i = 0; i < len; i += 1) {
                if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
                    return i;
                }
            }
            return undefined; // TODO: better
        }
        // Given a top offset (from document top), returns the index of the el that it vertically intersects.
        // If no intersection is made, returns undefined.
        topToIndex(topPosition) {
            let { tops, bottoms } = this;
            let len = tops.length;
            let i;
            for (i = 0; i < len; i += 1) {
                if (topPosition >= tops[i] && topPosition < bottoms[i]) {
                    return i;
                }
            }
            return undefined; // TODO: better
        }
        // Gets the width of the element at the given index
        getWidth(leftIndex) {
            return this.rights[leftIndex] - this.lefts[leftIndex];
        }
        // Gets the height of the element at the given index
        getHeight(topIndex) {
            return this.bottoms[topIndex] - this.tops[topIndex];
        }
    }

    /* eslint max-classes-per-file: "off" */
    /*
    An object for getting/setting scroll-related information for an element.
    Internally, this is done very differently for window versus DOM element,
    so this object serves as a common interface.
    */
    class ScrollController {
        getMaxScrollTop() {
            return this.getScrollHeight() - this.getClientHeight();
        }
        getMaxScrollLeft() {
            return this.getScrollWidth() - this.getClientWidth();
        }
        canScrollVertically() {
            return this.getMaxScrollTop() > 0;
        }
        canScrollHorizontally() {
            return this.getMaxScrollLeft() > 0;
        }
        canScrollUp() {
            return this.getScrollTop() > 0;
        }
        canScrollDown() {
            return this.getScrollTop() < this.getMaxScrollTop();
        }
        canScrollLeft() {
            return this.getScrollLeft() > 0;
        }
        canScrollRight() {
            return this.getScrollLeft() < this.getMaxScrollLeft();
        }
    }
    class ElementScrollController extends ScrollController {
        constructor(el) {
            super();
            this.el = el;
        }
        getScrollTop() {
            return this.el.scrollTop;
        }
        getScrollLeft() {
            return this.el.scrollLeft;
        }
        setScrollTop(top) {
            this.el.scrollTop = top;
        }
        setScrollLeft(left) {
            this.el.scrollLeft = left;
        }
        getScrollWidth() {
            return this.el.scrollWidth;
        }
        getScrollHeight() {
            return this.el.scrollHeight;
        }
        getClientHeight() {
            return this.el.clientHeight;
        }
        getClientWidth() {
            return this.el.clientWidth;
        }
    }
    class WindowScrollController extends ScrollController {
        getScrollTop() {
            return window.pageYOffset;
        }
        getScrollLeft() {
            return window.pageXOffset;
        }
        setScrollTop(n) {
            window.scroll(window.pageXOffset, n);
        }
        setScrollLeft(n) {
            window.scroll(n, window.pageYOffset);
        }
        getScrollWidth() {
            return document.documentElement.scrollWidth;
        }
        getScrollHeight() {
            return document.documentElement.scrollHeight;
        }
        getClientHeight() {
            return document.documentElement.clientHeight;
        }
        getClientWidth() {
            return document.documentElement.clientWidth;
        }
    }

    /*
    an INTERACTABLE date component

    PURPOSES:
    - hook up to fg, fill, and mirror renderers
    - interface for dragging and hits
    */
    class DateComponent extends BaseComponent {
        constructor() {
            super(...arguments);
            this.uid = guid();
        }
        // Hit System
        // -----------------------------------------------------------------------------------------------------------------
        prepareHits() {
        }
        queryHit(positionLeft, positionTop, elWidth, elHeight) {
            return null; // this should be abstract
        }
        // Pointer Interaction Utils
        // -----------------------------------------------------------------------------------------------------------------
        isValidSegDownEl(el) {
            return !this.props.eventDrag && // HACK
                !this.props.eventResize && // HACK
                !elementClosest(el, '.fc-event-mirror');
        }
        isValidDateDownEl(el) {
            return !elementClosest(el, '.fc-event:not(.fc-bg-event)') &&
                !elementClosest(el, '.fc-more-link') && // a "more.." link
                !elementClosest(el, 'a[data-navlink]') && // a clickable nav link
                !elementClosest(el, '.fc-popover'); // hack
        }
    }

    class NamedTimeZoneImpl {
        constructor(timeZoneName) {
            this.timeZoneName = timeZoneName;
        }
    }

    class SegHierarchy {
        constructor() {
            // settings
            this.strictOrder = false;
            this.allowReslicing = false;
            this.maxCoord = -1; // -1 means no max
            this.maxStackCnt = -1; // -1 means no max
            this.levelCoords = []; // ordered
            this.entriesByLevel = []; // parallel with levelCoords
            this.stackCnts = {}; // TODO: use better technique!?
        }
        addSegs(inputs) {
            let hiddenEntries = [];
            for (let input of inputs) {
                this.insertEntry(input, hiddenEntries);
            }
            return hiddenEntries;
        }
        insertEntry(entry, hiddenEntries) {
            let insertion = this.findInsertion(entry);
            if (this.isInsertionValid(insertion, entry)) {
                this.insertEntryAt(entry, insertion);
                return 1;
            }
            return this.handleInvalidInsertion(insertion, entry, hiddenEntries);
        }
        isInsertionValid(insertion, entry) {
            return (this.maxCoord === -1 || insertion.levelCoord + entry.thickness <= this.maxCoord) &&
                (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
        }
        // returns number of new entries inserted
        handleInvalidInsertion(insertion, entry, hiddenEntries) {
            if (this.allowReslicing && insertion.touchingEntry) {
                return this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
            }
            hiddenEntries.push(entry);
            return 0;
        }
        splitEntry(entry, barrier, hiddenEntries) {
            let partCnt = 0;
            let splitHiddenEntries = [];
            let entrySpan = entry.span;
            let barrierSpan = barrier.span;
            if (entrySpan.start < barrierSpan.start) {
                partCnt += this.insertEntry({
                    index: entry.index,
                    thickness: entry.thickness,
                    span: { start: entrySpan.start, end: barrierSpan.start },
                }, splitHiddenEntries);
            }
            if (entrySpan.end > barrierSpan.end) {
                partCnt += this.insertEntry({
                    index: entry.index,
                    thickness: entry.thickness,
                    span: { start: barrierSpan.end, end: entrySpan.end },
                }, splitHiddenEntries);
            }
            if (partCnt) {
                hiddenEntries.push({
                    index: entry.index,
                    thickness: entry.thickness,
                    span: intersectSpans(barrierSpan, entrySpan), // guaranteed to intersect
                }, ...splitHiddenEntries);
                return partCnt;
            }
            hiddenEntries.push(entry);
            return 0;
        }
        insertEntryAt(entry, insertion) {
            let { entriesByLevel, levelCoords } = this;
            if (insertion.lateral === -1) {
                // create a new level
                insertAt(levelCoords, insertion.level, insertion.levelCoord);
                insertAt(entriesByLevel, insertion.level, [entry]);
            }
            else {
                // insert into existing level
                insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
            }
            this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
        }
        findInsertion(newEntry) {
            let { levelCoords, entriesByLevel, strictOrder, stackCnts } = this;
            let levelCnt = levelCoords.length;
            let candidateCoord = 0;
            let touchingLevel = -1;
            let touchingLateral = -1;
            let touchingEntry = null;
            let stackCnt = 0;
            for (let trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
                let trackingCoord = levelCoords[trackingLevel];
                // if the current level is past the placed entry, we have found a good empty space and can stop.
                // if strictOrder, keep finding more lateral intersections.
                if (!strictOrder && trackingCoord >= candidateCoord + newEntry.thickness) {
                    break;
                }
                let trackingEntries = entriesByLevel[trackingLevel];
                let trackingEntry;
                let searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd); // find first entry after newEntry's end
                let lateralIndex = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one
                while ( // loop through entries that horizontally intersect
                (trackingEntry = trackingEntries[lateralIndex]) && // but not past the whole entry list
                    trackingEntry.span.start < newEntry.span.end // and not entirely past newEntry
                ) {
                    let trackingEntryBottom = trackingCoord + trackingEntry.thickness;
                    // intersects into the top of the candidate?
                    if (trackingEntryBottom > candidateCoord) {
                        candidateCoord = trackingEntryBottom;
                        touchingEntry = trackingEntry;
                        touchingLevel = trackingLevel;
                        touchingLateral = lateralIndex;
                    }
                    // butts up against top of candidate? (will happen if just intersected as well)
                    if (trackingEntryBottom === candidateCoord) {
                        // accumulate the highest possible stackCnt of the trackingEntries that butt up
                        stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
                    }
                    lateralIndex += 1;
                }
            }
            // the destination level will be after touchingEntry's level. find it
            let destLevel = 0;
            if (touchingEntry) {
                destLevel = touchingLevel + 1;
                while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
                    destLevel += 1;
                }
            }
            // if adding to an existing level, find where to insert
            let destLateral = -1;
            if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
                destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
            }
            return {
                touchingLevel,
                touchingLateral,
                touchingEntry,
                stackCnt,
                levelCoord: candidateCoord,
                level: destLevel,
                lateral: destLateral,
            };
        }
        // sorted by levelCoord (lowest to highest)
        toRects() {
            let { entriesByLevel, levelCoords } = this;
            let levelCnt = entriesByLevel.length;
            let rects = [];
            for (let level = 0; level < levelCnt; level += 1) {
                let entries = entriesByLevel[level];
                let levelCoord = levelCoords[level];
                for (let entry of entries) {
                    rects.push(Object.assign(Object.assign({}, entry), { levelCoord }));
                }
            }
            return rects;
        }
    }
    function getEntrySpanEnd(entry) {
        return entry.span.end;
    }
    function buildEntryKey(entry) {
        return entry.index + ':' + entry.span.start;
    }
    // returns groups with entries sorted by input order
    function groupIntersectingEntries(entries) {
        let merges = [];
        for (let entry of entries) {
            let filteredMerges = [];
            let hungryMerge = {
                span: entry.span,
                entries: [entry],
            };
            for (let merge of merges) {
                if (intersectSpans(merge.span, hungryMerge.span)) {
                    hungryMerge = {
                        entries: merge.entries.concat(hungryMerge.entries),
                        span: joinSpans(merge.span, hungryMerge.span),
                    };
                }
                else {
                    filteredMerges.push(merge);
                }
            }
            filteredMerges.push(hungryMerge);
            merges = filteredMerges;
        }
        return merges;
    }
    function joinSpans(span0, span1) {
        return {
            start: Math.min(span0.start, span1.start),
            end: Math.max(span0.end, span1.end),
        };
    }
    function intersectSpans(span0, span1) {
        let start = Math.max(span0.start, span1.start);
        let end = Math.min(span0.end, span1.end);
        if (start < end) {
            return { start, end };
        }
        return null;
    }
    // general util
    // ---------------------------------------------------------------------------------------------------------------------
    function insertAt(arr, index, item) {
        arr.splice(index, 0, item);
    }
    function binarySearch(a, searchVal, getItemVal) {
        let startIndex = 0;
        let endIndex = a.length; // exclusive
        if (!endIndex || searchVal < getItemVal(a[startIndex])) { // no items OR before first item
            return [0, 0];
        }
        if (searchVal > getItemVal(a[endIndex - 1])) { // after last item
            return [endIndex, 0];
        }
        while (startIndex < endIndex) {
            let middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
            let middleVal = getItemVal(a[middleIndex]);
            if (searchVal < middleVal) {
                endIndex = middleIndex;
            }
            else if (searchVal > middleVal) {
                startIndex = middleIndex + 1;
            }
            else { // equal!
                return [middleIndex, 1];
            }
        }
        return [startIndex, 0];
    }

    /*
    An abstraction for a dragging interaction originating on an event.
    Does higher-level things than PointerDragger, such as possibly:
    - a "mirror" that moves with the pointer
    - a minimum number of pixels or other criteria for a true drag to begin

    subclasses must emit:
    - pointerdown
    - dragstart
    - dragmove
    - pointerup
    - dragend
    */
    class ElementDragging {
        constructor(el, selector) {
            this.emitter = new Emitter();
        }
        destroy() {
        }
        setMirrorIsVisible(bool) {
            // optional if subclass doesn't want to support a mirror
        }
        setMirrorNeedsRevert(bool) {
            // optional if subclass doesn't want to support a mirror
        }
        setAutoScrollEnabled(bool) {
            // optional
        }
    }

    // TODO: get rid of this in favor of options system,
    // tho it's really easy to access this globally rather than pass thru options.
    const config = {};

    /*
    Information about what will happen when an external element is dragged-and-dropped
    onto a calendar. Contains information for creating an event.
    */
    const DRAG_META_REFINERS = {
        startTime: createDuration,
        duration: createDuration,
        create: Boolean,
        sourceId: String,
    };
    function parseDragMeta(raw) {
        let { refined, extra } = refineProps(raw, DRAG_META_REFINERS);
        return {
            startTime: refined.startTime || null,
            duration: refined.duration || null,
            create: refined.create != null ? refined.create : true,
            sourceId: refined.sourceId,
            leftoverProps: extra,
        };
    }

    // Computes a default column header formatting string if `colFormat` is not explicitly defined
    function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
        // if more than one week row, or if there are a lot of columns with not much space,
        // put just the day numbers will be in each cell
        if (!datesRepDistinctDays || dayCnt > 10) {
            return createFormatter({ weekday: 'short' }); // "Sat"
        }
        if (dayCnt > 1) {
            return createFormatter({ weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }); // "Sat 11/12"
        }
        return createFormatter({ weekday: 'long' }); // "Saturday"
    }

    const CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no
    function renderInner$1(renderProps) {
        return renderProps.text;
    }

    // BAD name for this class now. used in the Header
    class TableDateCell extends BaseComponent {
        render() {
            let { dateEnv, options, theme, viewApi } = this.context;
            let { props } = this;
            let { date, dateProfile } = props;
            let dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
            let classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
            let text = dateEnv.format(date, props.dayHeaderFormat);
            // if colCnt is 1, we are already in a day-view and don't need a navlink
            let navLinkAttrs = (!dayMeta.isDisabled && props.colCnt > 1)
                ? buildNavLinkAttrs(this.context, date)
                : {};
            let renderProps = Object.assign(Object.assign(Object.assign({ date: dateEnv.toDate(date), view: viewApi }, props.extraRenderProps), { text }), dayMeta);
            return (h(ContentContainer, { elTag: "th", elClasses: classNames, elAttrs: Object.assign({ role: 'columnheader', colSpan: props.colSpan, 'data-date': !dayMeta.isDisabled ? formatDayString(date) : undefined }, props.extraDataAttrs), renderProps: renderProps, generatorName: "dayHeaderContent", generator: options.dayHeaderContent || renderInner$1, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContainer) => (h("div", { className: "fc-scrollgrid-sync-inner" }, !dayMeta.isDisabled && (h(InnerContainer, { elTag: "a", elAttrs: navLinkAttrs, elClasses: [
                    'fc-col-header-cell-cushion',
                    props.isSticky && 'fc-sticky',
                ] }))))));
        }
    }

    const WEEKDAY_FORMAT = createFormatter({ weekday: 'long' });
    class TableDowCell extends BaseComponent {
        render() {
            let { props } = this;
            let { dateEnv, theme, viewApi, options } = this.context;
            let date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT
            let dateMeta = {
                dow: props.dow,
                isDisabled: false,
                isFuture: false,
                isPast: false,
                isToday: false,
                isOther: false,
            };
            let text = dateEnv.format(date, props.dayHeaderFormat);
            let renderProps = Object.assign(Object.assign(Object.assign(Object.assign({ // TODO: make this public?
                date }, dateMeta), { view: viewApi }), props.extraRenderProps), { text });
            return (h(ContentContainer, { elTag: "th", elClasses: [
                    CLASS_NAME,
                    ...getDayClassNames(dateMeta, theme),
                    ...(props.extraClassNames || []),
                ], elAttrs: Object.assign({ role: 'columnheader', colSpan: props.colSpan }, props.extraDataAttrs), renderProps: renderProps, generatorName: "dayHeaderContent", generator: options.dayHeaderContent || renderInner$1, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContent) => (h("div", { className: "fc-scrollgrid-sync-inner" },
                h(InnerContent, { elTag: "a", elClasses: [
                        'fc-col-header-cell-cushion',
                        props.isSticky && 'fc-sticky',
                    ], elAttrs: {
                        'aria-label': dateEnv.format(date, WEEKDAY_FORMAT),
                    } })))));
        }
    }

    class NowTimer extends d {
        constructor(props, context) {
            super(props, context);
            this.initialNowDate = getNow(context.options.now, context.dateEnv);
            this.initialNowQueriedMs = new Date().valueOf();
            this.state = this.computeTiming().currentState;
        }
        render() {
            let { props, state } = this;
            return props.children(state.nowDate, state.todayRange);
        }
        componentDidMount() {
            this.setTimeout();
        }
        componentDidUpdate(prevProps) {
            if (prevProps.unit !== this.props.unit) {
                this.clearTimeout();
                this.setTimeout();
            }
        }
        componentWillUnmount() {
            this.clearTimeout();
        }
        computeTiming() {
            let { props, context } = this;
            let unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
            let currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
            let nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
            let waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
            // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
            // ensure no longer than a day
            waitMs = Math.min(1000 * 60 * 60 * 24, waitMs);
            return {
                currentState: { nowDate: currentUnitStart, todayRange: buildDayRange(currentUnitStart) },
                nextState: { nowDate: nextUnitStart, todayRange: buildDayRange(nextUnitStart) },
                waitMs,
            };
        }
        setTimeout() {
            let { nextState, waitMs } = this.computeTiming();
            this.timeoutId = setTimeout(() => {
                this.setState(nextState, () => {
                    this.setTimeout();
                });
            }, waitMs);
        }
        clearTimeout() {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
        }
    }
    NowTimer.contextType = ViewContextType;
    function buildDayRange(date) {
        let start = startOfDay(date);
        let end = addDays(start, 1);
        return { start, end };
    }

    class DayHeader extends BaseComponent {
        constructor() {
            super(...arguments);
            this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
        }
        render() {
            let { context } = this;
            let { dates, dateProfile, datesRepDistinctDays, renderIntro } = this.props;
            let dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
            return (h(NowTimer, { unit: "day" }, (nowDate, todayRange) => (h("tr", { role: "row" },
                renderIntro && renderIntro('day'),
                dates.map((date) => (datesRepDistinctDays ? (h(TableDateCell, { key: date.toISOString(), date: date, dateProfile: dateProfile, todayRange: todayRange, colCnt: dates.length, dayHeaderFormat: dayHeaderFormat })) : (h(TableDowCell, { key: date.getUTCDay(), dow: date.getUTCDay(), dayHeaderFormat: dayHeaderFormat }))))))));
        }
    }
    function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
        return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
    }

    class DaySeriesModel {
        constructor(range, dateProfileGenerator) {
            let date = range.start;
            let { end } = range;
            let indices = [];
            let dates = [];
            let dayIndex = -1;
            while (date < end) { // loop each day from start to end
                if (dateProfileGenerator.isHiddenDay(date)) {
                    indices.push(dayIndex + 0.5); // mark that it's between indices
                }
                else {
                    dayIndex += 1;
                    indices.push(dayIndex);
                    dates.push(date);
                }
                date = addDays(date, 1);
            }
            this.dates = dates;
            this.indices = indices;
            this.cnt = dates.length;
        }
        sliceRange(range) {
            let firstIndex = this.getDateDayIndex(range.start); // inclusive first index
            let lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
            let clippedFirstIndex = Math.max(0, firstIndex);
            let clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
            // deal with in-between indices
            clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
            clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
            if (clippedFirstIndex <= clippedLastIndex) {
                return {
                    firstIndex: clippedFirstIndex,
                    lastIndex: clippedLastIndex,
                    isStart: firstIndex === clippedFirstIndex,
                    isEnd: lastIndex === clippedLastIndex,
                };
            }
            return null;
        }
        // Given a date, returns its chronolocial cell-index from the first cell of the grid.
        // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
        // If before the first offset, returns a negative number.
        // If after the last offset, returns an offset past the last cell offset.
        // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
        getDateDayIndex(date) {
            let { indices } = this;
            let dayOffset = Math.floor(diffDays(this.dates[0], date));
            if (dayOffset < 0) {
                return indices[0] - 1;
            }
            if (dayOffset >= indices.length) {
                return indices[indices.length - 1] + 1;
            }
            return indices[dayOffset];
        }
    }

    class DayTableModel {
        constructor(daySeries, breakOnWeeks) {
            let { dates } = daySeries;
            let daysPerRow;
            let firstDay;
            let rowCnt;
            if (breakOnWeeks) {
                // count columns until the day-of-week repeats
                firstDay = dates[0].getUTCDay();
                for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
                    if (dates[daysPerRow].getUTCDay() === firstDay) {
                        break;
                    }
                }
                rowCnt = Math.ceil(dates.length / daysPerRow);
            }
            else {
                rowCnt = 1;
                daysPerRow = dates.length;
            }
            this.rowCnt = rowCnt;
            this.colCnt = daysPerRow;
            this.daySeries = daySeries;
            this.cells = this.buildCells();
            this.headerDates = this.buildHeaderDates();
        }
        buildCells() {
            let rows = [];
            for (let row = 0; row < this.rowCnt; row += 1) {
                let cells = [];
                for (let col = 0; col < this.colCnt; col += 1) {
                    cells.push(this.buildCell(row, col));
                }
                rows.push(cells);
            }
            return rows;
        }
        buildCell(row, col) {
            let date = this.daySeries.dates[row * this.colCnt + col];
            return {
                key: date.toISOString(),
                date,
            };
        }
        buildHeaderDates() {
            let dates = [];
            for (let col = 0; col < this.colCnt; col += 1) {
                dates.push(this.cells[0][col].date);
            }
            return dates;
        }
        sliceRange(range) {
            let { colCnt } = this;
            let seriesSeg = this.daySeries.sliceRange(range);
            let segs = [];
            if (seriesSeg) {
                let { firstIndex, lastIndex } = seriesSeg;
                let index = firstIndex;
                while (index <= lastIndex) {
                    let row = Math.floor(index / colCnt);
                    let nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
                    segs.push({
                        row,
                        firstCol: index % colCnt,
                        lastCol: (nextIndex - 1) % colCnt,
                        isStart: seriesSeg.isStart && index === firstIndex,
                        isEnd: seriesSeg.isEnd && (nextIndex - 1) === lastIndex,
                    });
                    index = nextIndex;
                }
            }
            return segs;
        }
    }

    class Slicer {
        constructor() {
            this.sliceBusinessHours = memoize(this._sliceBusinessHours);
            this.sliceDateSelection = memoize(this._sliceDateSpan);
            this.sliceEventStore = memoize(this._sliceEventStore);
            this.sliceEventDrag = memoize(this._sliceInteraction);
            this.sliceEventResize = memoize(this._sliceInteraction);
            this.forceDayIfListItem = false; // hack
        }
        sliceProps(props, dateProfile, nextDayThreshold, context, ...extraArgs) {
            let { eventUiBases } = props;
            let eventSegs = this.sliceEventStore(props.eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs);
            return {
                dateSelectionSegs: this.sliceDateSelection(props.dateSelection, eventUiBases, context, ...extraArgs),
                businessHourSegs: this.sliceBusinessHours(props.businessHours, dateProfile, nextDayThreshold, context, ...extraArgs),
                fgEventSegs: eventSegs.fg,
                bgEventSegs: eventSegs.bg,
                eventDrag: this.sliceEventDrag(props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
                eventResize: this.sliceEventResize(props.eventResize, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
                eventSelection: props.eventSelection,
            }; // TODO: give interactionSegs?
        }
        sliceNowDate(// does not memoize
        date, context, ...extraArgs) {
            return this._sliceDateSpan({ range: { start: date, end: addMs(date, 1) }, allDay: false }, // add 1 ms, protect against null range
            {}, context, ...extraArgs);
        }
        _sliceBusinessHours(businessHours, dateProfile, nextDayThreshold, context, ...extraArgs) {
            if (!businessHours) {
                return [];
            }
            return this._sliceEventStore(expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold, ...extraArgs).bg;
        }
        _sliceEventStore(eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
            if (eventStore) {
                let rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
                return {
                    bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
                    fg: this.sliceEventRanges(rangeRes.fg, extraArgs),
                };
            }
            return { bg: [], fg: [] };
        }
        _sliceInteraction(interaction, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
            if (!interaction) {
                return null;
            }
            let rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
            return {
                segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
                affectedInstances: interaction.affectedEvents.instances,
                isEvent: interaction.isEvent,
            };
        }
        _sliceDateSpan(dateSpan, eventUiBases, context, ...extraArgs) {
            if (!dateSpan) {
                return [];
            }
            let eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
            let segs = this.sliceRange(dateSpan.range, ...extraArgs);
            for (let seg of segs) {
                seg.eventRange = eventRange;
            }
            return segs;
        }
        /*
        "complete" seg means it has component and eventRange
        */
        sliceEventRanges(eventRanges, extraArgs) {
            let segs = [];
            for (let eventRange of eventRanges) {
                segs.push(...this.sliceEventRange(eventRange, extraArgs));
            }
            return segs;
        }
        /*
        "complete" seg means it has component and eventRange
        */
        sliceEventRange(eventRange, extraArgs) {
            let dateRange = eventRange.range;
            // hack to make multi-day events that are being force-displayed as list-items to take up only one day
            if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
                dateRange = {
                    start: dateRange.start,
                    end: addDays(dateRange.start, 1),
                };
            }
            let segs = this.sliceRange(dateRange, ...extraArgs);
            for (let seg of segs) {
                seg.eventRange = eventRange;
                seg.isStart = eventRange.isStart && seg.isStart;
                seg.isEnd = eventRange.isEnd && seg.isEnd;
            }
            return segs;
        }
    }
    /*
    for incorporating slotMinTime/slotMaxTime if appropriate
    TODO: should be part of DateProfile!
    TimelineDateProfile already does this btw
    */
    function computeActiveRange(dateProfile, isComponentAllDay) {
        let range = dateProfile.activeRange;
        if (isComponentAllDay) {
            return range;
        }
        return {
            start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
            end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5), // 864e5 = ms in a day
        };
    }

    // high-level segmenting-aware tester functions
    // ------------------------------------------------------------------------------------------------------------------------
    function isInteractionValid(interaction, dateProfile, context) {
        let { instances } = interaction.mutatedEvents;
        for (let instanceId in instances) {
            if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
                return false;
            }
        }
        return isNewPropsValid({ eventDrag: interaction }, context); // HACK: the eventDrag props is used for ALL interactions
    }
    function isDateSelectionValid(dateSelection, dateProfile, context) {
        if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
            return false;
        }
        return isNewPropsValid({ dateSelection }, context);
    }
    function isNewPropsValid(newProps, context) {
        let calendarState = context.getCurrentData();
        let props = Object.assign({ businessHours: calendarState.businessHours, dateSelection: '', eventStore: calendarState.eventStore, eventUiBases: calendarState.eventUiBases, eventSelection: '', eventDrag: null, eventResize: null }, newProps);
        return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
    }
    function isPropsValid(state, context, dateSpanMeta = {}, filterConfig) {
        if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
            return false;
        }
        if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
            return false;
        }
        return true;
    }
    // Moving Event Validation
    // ------------------------------------------------------------------------------------------------------------------------
    function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
        let currentState = context.getCurrentData();
        let interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
        let subjectEventStore = interaction.mutatedEvents;
        let subjectDefs = subjectEventStore.defs;
        let subjectInstances = subjectEventStore.instances;
        let subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ?
            state.eventUiBases :
            { '': currentState.selectionConfig });
        if (filterConfig) {
            subjectConfigs = mapHash(subjectConfigs, filterConfig);
        }
        // exclude the subject events. TODO: exclude defs too?
        let otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
        let otherDefs = otherEventStore.defs;
        let otherInstances = otherEventStore.instances;
        let otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
        for (let subjectInstanceId in subjectInstances) {
            let subjectInstance = subjectInstances[subjectInstanceId];
            let subjectRange = subjectInstance.range;
            let subjectConfig = subjectConfigs[subjectInstance.defId];
            let subjectDef = subjectDefs[subjectInstance.defId];
            // constraint
            if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
                return false;
            }
            // overlap
            let { eventOverlap } = context.options;
            let eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;
            for (let otherInstanceId in otherInstances) {
                let otherInstance = otherInstances[otherInstanceId];
                // intersect! evaluate
                if (rangesIntersect(subjectRange, otherInstance.range)) {
                    let otherOverlap = otherConfigs[otherInstance.defId].overlap;
                    // consider the other event's overlap. only do this if the subject event is a "real" event
                    if (otherOverlap === false && interaction.isEvent) {
                        return false;
                    }
                    if (subjectConfig.overlap === false) {
                        return false;
                    }
                    if (eventOverlapFunc && !eventOverlapFunc(new EventImpl(context, otherDefs[otherInstance.defId], otherInstance), // still event
                    new EventImpl(context, subjectDef, subjectInstance))) {
                        return false;
                    }
                }
            }
            // allow (a function)
            let calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state
            for (let subjectAllow of subjectConfig.allows) {
                let subjectDateSpan = Object.assign(Object.assign({}, dateSpanMeta), { range: subjectInstance.range, allDay: subjectDef.allDay });
                let origDef = calendarEventStore.defs[subjectDef.defId];
                let origInstance = calendarEventStore.instances[subjectInstanceId];
                let eventApi;
                if (origDef) { // was previously in the calendar
                    eventApi = new EventImpl(context, origDef, origInstance);
                }
                else { // was an external event
                    eventApi = new EventImpl(context, subjectDef); // no instance, because had no dates
                }
                if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
                    return false;
                }
            }
        }
        return true;
    }
    // Date Selection Validation
    // ------------------------------------------------------------------------------------------------------------------------
    function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
        let relevantEventStore = state.eventStore;
        let relevantDefs = relevantEventStore.defs;
        let relevantInstances = relevantEventStore.instances;
        let selection = state.dateSelection;
        let selectionRange = selection.range;
        let { selectionConfig } = context.getCurrentData();
        if (filterConfig) {
            selectionConfig = filterConfig(selectionConfig);
        }
        // constraint
        if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
            return false;
        }
        // overlap
        let { selectOverlap } = context.options;
        let selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;
        for (let relevantInstanceId in relevantInstances) {
            let relevantInstance = relevantInstances[relevantInstanceId];
            // intersect! evaluate
            if (rangesIntersect(selectionRange, relevantInstance.range)) {
                if (selectionConfig.overlap === false) {
                    return false;
                }
                if (selectOverlapFunc && !selectOverlapFunc(new EventImpl(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
                    return false;
                }
            }
        }
        // allow (a function)
        for (let selectionAllow of selectionConfig.allows) {
            let fullDateSpan = Object.assign(Object.assign({}, dateSpanMeta), selection);
            if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
                return false;
            }
        }
        return true;
    }
    // Constraint Utils
    // ------------------------------------------------------------------------------------------------------------------------
    function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
        for (let constraint of constraints) {
            if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
                return false;
            }
        }
        return true;
    }
    function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
    otherEventStore, // for if constraint is an even group ID
    businessHoursUnexpanded, // for if constraint is 'businessHours'
    context) {
        if (constraint === 'businessHours') {
            return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
        }
        if (typeof constraint === 'string') { // an group ID
            return eventStoreToRanges(filterEventStoreDefs(otherEventStore, (eventDef) => eventDef.groupId === constraint));
        }
        if (typeof constraint === 'object' && constraint) { // non-null object
            return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
        }
        return []; // if it's false
    }
    // TODO: move to event-store file?
    function eventStoreToRanges(eventStore) {
        let { instances } = eventStore;
        let ranges = [];
        for (let instanceId in instances) {
            ranges.push(instances[instanceId].range);
        }
        return ranges;
    }
    // TODO: move to geom file?
    function anyRangesContainRange(outerRanges, innerRange) {
        for (let outerRange of outerRanges) {
            if (rangeContainsRange(outerRange, innerRange)) {
                return true;
            }
        }
        return false;
    }

    const VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
    class Scroller extends BaseComponent {
        constructor() {
            super(...arguments);
            this.handleEl = (el) => {
                this.el = el;
                setRef(this.props.elRef, el);
            };
        }
        render() {
            let { props } = this;
            let { liquid, liquidIsAbsolute } = props;
            let isAbsolute = liquid && liquidIsAbsolute;
            let className = ['fc-scroller'];
            if (liquid) {
                if (liquidIsAbsolute) {
                    className.push('fc-scroller-liquid-absolute');
                }
                else {
                    className.push('fc-scroller-liquid');
                }
            }
            return (h("div", { ref: this.handleEl, className: className.join(' '), style: {
                    overflowX: props.overflowX,
                    overflowY: props.overflowY,
                    left: (isAbsolute && -(props.overcomeLeft || 0)) || '',
                    right: (isAbsolute && -(props.overcomeRight || 0)) || '',
                    bottom: (isAbsolute && -(props.overcomeBottom || 0)) || '',
                    marginLeft: (!isAbsolute && -(props.overcomeLeft || 0)) || '',
                    marginRight: (!isAbsolute && -(props.overcomeRight || 0)) || '',
                    marginBottom: (!isAbsolute && -(props.overcomeBottom || 0)) || '',
                    maxHeight: props.maxHeight || '',
                } }, props.children));
        }
        needsXScrolling() {
            if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
                return false;
            }
            // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
            // much more reliable to see if children are taller than the scroller, even tho doesn't account for
            // inner-child margins and absolute positioning
            let { el } = this;
            let realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
            let { children } = el;
            for (let i = 0; i < children.length; i += 1) {
                let childEl = children[i];
                if (childEl.getBoundingClientRect().width > realClientWidth) {
                    return true;
                }
            }
            return false;
        }
        needsYScrolling() {
            if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
                return false;
            }
            // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
            // much more reliable to see if children are taller than the scroller, even tho doesn't account for
            // inner-child margins and absolute positioning
            let { el } = this;
            let realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
            let { children } = el;
            for (let i = 0; i < children.length; i += 1) {
                let childEl = children[i];
                if (childEl.getBoundingClientRect().height > realClientHeight) {
                    return true;
                }
            }
            return false;
        }
        getXScrollbarWidth() {
            if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
                return 0;
            }
            return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
        }
        getYScrollbarWidth() {
            if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
                return 0;
            }
            return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
        }
    }

    /*
    TODO: somehow infer OtherArgs from masterCallback?
    TODO: infer RefType from masterCallback if provided
    */
    class RefMap {
        constructor(masterCallback) {
            this.masterCallback = masterCallback;
            this.currentMap = {};
            this.depths = {};
            this.callbackMap = {};
            this.handleValue = (val, key) => {
                let { depths, currentMap } = this;
                let removed = false;
                let added = false;
                if (val !== null) {
                    // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
                    removed = (key in currentMap);
                    currentMap[key] = val;
                    depths[key] = (depths[key] || 0) + 1;
                    added = true;
                }
                else {
                    depths[key] -= 1;
                    if (!depths[key]) {
                        delete currentMap[key];
                        delete this.callbackMap[key];
                        removed = true;
                    }
                }
                if (this.masterCallback) {
                    if (removed) {
                        this.masterCallback(null, String(key));
                    }
                    if (added) {
                        this.masterCallback(val, String(key));
                    }
                }
            };
        }
        createRef(key) {
            let refCallback = this.callbackMap[key];
            if (!refCallback) {
                refCallback = this.callbackMap[key] = (val) => {
                    this.handleValue(val, String(key));
                };
            }
            return refCallback;
        }
        // TODO: check callers that don't care about order. should use getAll instead
        // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
        // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
        collect(startIndex, endIndex, step) {
            return collectFromHash(this.currentMap, startIndex, endIndex, step);
        }
        getAll() {
            return hashValuesToArray(this.currentMap);
        }
    }

    function computeShrinkWidth(chunkEls) {
        let shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
        let largestWidth = 0;
        for (let shrinkCell of shrinkCells) {
            largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
        }
        return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
    }
    function getSectionHasLiquidHeight(props, sectionConfig) {
        return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
    }
    function getAllowYScrolling(props, sectionConfig) {
        return sectionConfig.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
            getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
    }
    // TODO: ONLY use `arg`. force out internal function to use same API
    function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
        let { expandRows } = arg;
        let content = typeof chunkConfig.content === 'function' ?
            chunkConfig.content(arg) :
            h('table', {
                role: 'presentation',
                className: [
                    chunkConfig.tableClassName,
                    sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : '',
                ].join(' '),
                style: {
                    minWidth: arg.tableMinWidth,
                    width: arg.clientWidth,
                    height: expandRows ? arg.clientHeight : '', // css `height` on a <table> serves as a min-height
                },
            }, arg.tableColGroupNode, h(isHeader ? 'thead' : 'tbody', {
                role: 'presentation',
            }, typeof chunkConfig.rowContent === 'function'
                ? chunkConfig.rowContent(arg)
                : chunkConfig.rowContent));
        return content;
    }
    function isColPropsEqual(cols0, cols1) {
        return isArraysEqual(cols0, cols1, isPropsEqual);
    }
    function renderMicroColGroup(cols, shrinkWidth) {
        let colNodes = [];
        /*
        for ColProps with spans, it would have been great to make a single <col span="">
        HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
        SOLUTION: making individual <col> elements makes Chrome behave.
        */
        for (let colProps of cols) {
            let span = colProps.span || 1;
            for (let i = 0; i < span; i += 1) {
                colNodes.push(h("col", { style: {
                        width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : (colProps.width || ''),
                        minWidth: colProps.minWidth || '',
                    } }));
            }
        }
        return h('colgroup', {}, ...colNodes);
    }
    function sanitizeShrinkWidth(shrinkWidth) {
        /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
        4 accounts for 2 2-pixel borders. TODO: better solution? */
        return shrinkWidth == null ? 4 : shrinkWidth;
    }
    function hasShrinkWidth(cols) {
        for (let col of cols) {
            if (col.width === 'shrink') {
                return true;
            }
        }
        return false;
    }
    function getScrollGridClassNames(liquid, context) {
        let classNames = [
            'fc-scrollgrid',
            context.theme.getClass('table'),
        ];
        if (liquid) {
            classNames.push('fc-scrollgrid-liquid');
        }
        return classNames;
    }
    function getSectionClassNames(sectionConfig, wholeTableVGrow) {
        let classNames = [
            'fc-scrollgrid-section',
            `fc-scrollgrid-section-${sectionConfig.type}`,
            sectionConfig.className, // used?
        ];
        if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
            classNames.push('fc-scrollgrid-section-liquid');
        }
        if (sectionConfig.isSticky) {
            classNames.push('fc-scrollgrid-section-sticky');
        }
        return classNames;
    }
    function renderScrollShim(arg) {
        return (h("div", { className: "fc-scrollgrid-sticky-shim", style: {
                width: arg.clientWidth,
                minWidth: arg.tableMinWidth,
            } }));
    }
    function getStickyHeaderDates(options) {
        let { stickyHeaderDates } = options;
        if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
            stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
        }
        return stickyHeaderDates;
    }
    function getStickyFooterScrollbar(options) {
        let { stickyFooterScrollbar } = options;
        if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
            stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
        }
        return stickyFooterScrollbar;
    }

    class SimpleScrollGrid extends BaseComponent {
        constructor() {
            super(...arguments);
            this.processCols = memoize((a) => a, isColPropsEqual); // so we get same `cols` props every time
            // yucky to memoize VNodes, but much more efficient for consumers
            this.renderMicroColGroup = memoize(renderMicroColGroup);
            this.scrollerRefs = new RefMap();
            this.scrollerElRefs = new RefMap(this._handleScrollerEl.bind(this));
            this.state = {
                shrinkWidth: null,
                forceYScrollbars: false,
                scrollerClientWidths: {},
                scrollerClientHeights: {},
            };
            // TODO: can do a really simple print-view. dont need to join rows
            this.handleSizing = () => {
                this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
            };
        }
        render() {
            let { props, state, context } = this;
            let sectionConfigs = props.sections || [];
            let cols = this.processCols(props.cols);
            let microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
            let classNames = getScrollGridClassNames(props.liquid, context);
            if (props.collapsibleWidth) {
                classNames.push('fc-scrollgrid-collapsible');
            }
            // TODO: make DRY
            let configCnt = sectionConfigs.length;
            let configI = 0;
            let currentConfig;
            let headSectionNodes = [];
            let bodySectionNodes = [];
            let footSectionNodes = [];
            while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
                headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
                configI += 1;
            }
            while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
                bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
                configI += 1;
            }
            while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
                footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
                configI += 1;
            }
            // firefox bug: when setting height on table and there is a thead or tfoot,
            // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
            // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
            // if so, use a simpler dom structure, jam everything into a lone tbody.
            let isBuggy = !getCanVGrowWithinCell();
            const roleAttrs = { role: 'rowgroup' };
            return h('table', {
                role: 'grid',
                className: classNames.join(' '),
                style: { height: props.height },
            }, Boolean(!isBuggy && headSectionNodes.length) && h('thead', roleAttrs, ...headSectionNodes), Boolean(!isBuggy && bodySectionNodes.length) && h('tbody', roleAttrs, ...bodySectionNodes), Boolean(!isBuggy && footSectionNodes.length) && h('tfoot', roleAttrs, ...footSectionNodes), isBuggy && h('tbody', roleAttrs, ...headSectionNodes, ...bodySectionNodes, ...footSectionNodes));
        }
        renderSection(sectionConfig, microColGroupNode, isHeader) {
            if ('outerContent' in sectionConfig) {
                return (h(p, { key: sectionConfig.key }, sectionConfig.outerContent));
            }
            return (h("tr", { key: sectionConfig.key, role: "presentation", className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ') }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader)));
        }
        renderChunkTd(sectionConfig, microColGroupNode, chunkConfig, isHeader) {
            if ('outerContent' in chunkConfig) {
                return chunkConfig.outerContent;
            }
            let { props } = this;
            let { forceYScrollbars, scrollerClientWidths, scrollerClientHeights } = this.state;
            let needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?
            let isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
            // for `!props.liquid` - is WHOLE scrollgrid natural height?
            // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars
            let overflowY = !props.liquid ? 'visible' :
                forceYScrollbars ? 'scroll' :
                    !needsYScrolling ? 'hidden' :
                        'auto';
            let sectionKey = sectionConfig.key;
            let content = renderChunkContent(sectionConfig, chunkConfig, {
                tableColGroupNode: microColGroupNode,
                tableMinWidth: '',
                clientWidth: (!props.collapsibleWidth && scrollerClientWidths[sectionKey] !== undefined) ? scrollerClientWidths[sectionKey] : null,
                clientHeight: scrollerClientHeights[sectionKey] !== undefined ? scrollerClientHeights[sectionKey] : null,
                expandRows: sectionConfig.expandRows,
                syncRowHeights: false,
                rowSyncHeights: [],
                reportRowHeightChange: () => { },
            }, isHeader);
            return h(isHeader ? 'th' : 'td', {
                ref: chunkConfig.elRef,
                role: 'presentation',
            }, h("div", { className: `fc-scroller-harness${isLiquid ? ' fc-scroller-harness-liquid' : ''}` },
                h(Scroller, { ref: this.scrollerRefs.createRef(sectionKey), elRef: this.scrollerElRefs.createRef(sectionKey), overflowY: overflowY, overflowX: !props.liquid ? 'visible' : 'hidden' /* natural height? */, maxHeight: sectionConfig.maxHeight, liquid: isLiquid, liquidIsAbsolute // because its within a harness
                    : true }, content)));
        }
        _handleScrollerEl(scrollerEl, key) {
            let section = getSectionByKey(this.props.sections, key);
            if (section) {
                setRef(section.chunk.scrollerElRef, scrollerEl);
            }
        }
        componentDidMount() {
            this.handleSizing();
            this.context.addResizeHandler(this.handleSizing);
        }
        componentDidUpdate() {
            // TODO: need better solution when state contains non-sizing things
            this.handleSizing();
        }
        componentWillUnmount() {
            this.context.removeResizeHandler(this.handleSizing);
        }
        computeShrinkWidth() {
            return hasShrinkWidth(this.props.cols)
                ? computeShrinkWidth(this.scrollerElRefs.getAll())
                : 0;
        }
        computeScrollerDims() {
            let scrollbarWidth = getScrollbarWidths();
            let { scrollerRefs, scrollerElRefs } = this;
            let forceYScrollbars = false;
            let scrollerClientWidths = {};
            let scrollerClientHeights = {};
            for (let sectionKey in scrollerRefs.currentMap) {
                let scroller = scrollerRefs.currentMap[sectionKey];
                if (scroller && scroller.needsYScrolling()) {
                    forceYScrollbars = true;
                    break;
                }
            }
            for (let section of this.props.sections) {
                let sectionKey = section.key;
                let scrollerEl = scrollerElRefs.currentMap[sectionKey];
                if (scrollerEl) {
                    let harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders
                    scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars
                        ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
                        : 0));
                    scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
                }
            }
            return { forceYScrollbars, scrollerClientWidths, scrollerClientHeights };
        }
    }
    SimpleScrollGrid.addStateEquality({
        scrollerClientWidths: isPropsEqual,
        scrollerClientHeights: isPropsEqual,
    });
    function getSectionByKey(sections, key) {
        for (let section of sections) {
            if (section.key === key) {
                return section;
            }
        }
        return null;
    }

    class EventContainer extends BaseComponent {
        constructor() {
            super(...arguments);
            this.handleEl = (el) => {
                this.el = el;
                if (el) {
                    setElSeg(el, this.props.seg);
                }
            };
        }
        render() {
            const { props, context } = this;
            const { options } = context;
            const { seg } = props;
            const { eventRange } = seg;
            const { ui } = eventRange;
            const renderProps = {
                event: new EventImpl(context, eventRange.def, eventRange.instance),
                view: context.viewApi,
                timeText: props.timeText,
                textColor: ui.textColor,
                backgroundColor: ui.backgroundColor,
                borderColor: ui.borderColor,
                isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
                isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
                isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
                isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
                isStart: Boolean(seg.isStart),
                isEnd: Boolean(seg.isEnd),
                isPast: Boolean(props.isPast),
                isFuture: Boolean(props.isFuture),
                isToday: Boolean(props.isToday),
                isSelected: Boolean(props.isSelected),
                isDragging: Boolean(props.isDragging),
                isResizing: Boolean(props.isResizing),
            };
            return (h(ContentContainer, Object.assign({}, props /* contains children */, { elRef: this.handleEl, elClasses: [
                    ...getEventClassNames(renderProps),
                    ...seg.eventRange.ui.classNames,
                    ...(props.elClasses || []),
                ], renderProps: renderProps, generatorName: "eventContent", generator: options.eventContent || props.defaultGenerator, classNameGenerator: options.eventClassNames, didMount: options.eventDidMount, willUnmount: options.eventWillUnmount })));
        }
        componentDidUpdate(prevProps) {
            if (this.el && this.props.seg !== prevProps.seg) {
                setElSeg(this.el, this.props.seg);
            }
        }
    }

    // should not be a purecomponent
    class StandardEvent extends BaseComponent {
        render() {
            let { props, context } = this;
            let { options } = context;
            let { seg } = props;
            let { ui } = seg.eventRange;
            let timeFormat = options.eventTimeFormat || props.defaultTimeFormat;
            let timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
            return (h(EventContainer, Object.assign({}, props /* includes elRef */, { elTag: "a", elStyle: {
                    borderColor: ui.borderColor,
                    backgroundColor: ui.backgroundColor,
                }, elAttrs: getSegAnchorAttrs(seg, context), defaultGenerator: renderInnerContent$1$1, timeText: timeText }), (InnerContent, eventContentArg) => (h(p, null,
                h(InnerContent, { elTag: "div", elClasses: ['fc-event-main'], elStyle: { color: eventContentArg.textColor } }),
                Boolean(eventContentArg.isStartResizable) && (h("div", { className: "fc-event-resizer fc-event-resizer-start" })),
                Boolean(eventContentArg.isEndResizable) && (h("div", { className: "fc-event-resizer fc-event-resizer-end" }))))));
        }
    }
    function renderInnerContent$1$1(innerProps) {
        return (h("div", { className: "fc-event-main-frame" },
            innerProps.timeText && (h("div", { className: "fc-event-time" }, innerProps.timeText)),
            h("div", { className: "fc-event-title-container" },
                h("div", { className: "fc-event-title fc-sticky" }, innerProps.event.title || h(p, null, "\u00A0")))));
    }

    const NowIndicatorContainer = (props) => (h(ViewContextType.Consumer, null, (context) => {
        let { options } = context;
        let renderProps = {
            isAxis: props.isAxis,
            date: context.dateEnv.toDate(props.date),
            view: context.viewApi,
        };
        return (h(ContentContainer, Object.assign({}, props /* includes children */, { elTag: props.elTag || 'div', renderProps: renderProps, generatorName: "nowIndicatorContent", generator: options.nowIndicatorContent, classNameGenerator: options.nowIndicatorClassNames, didMount: options.nowIndicatorDidMount, willUnmount: options.nowIndicatorWillUnmount })));
    }));

    const DAY_NUM_FORMAT = createFormatter({ day: 'numeric' });
    class DayCellContainer extends BaseComponent {
        constructor() {
            super(...arguments);
            this.refineRenderProps = memoizeObjArg(refineRenderProps);
        }
        render() {
            let { props, context } = this;
            let { options } = context;
            let renderProps = this.refineRenderProps({
                date: props.date,
                dateProfile: props.dateProfile,
                todayRange: props.todayRange,
                showDayNumber: props.showDayNumber,
                extraRenderProps: props.extraRenderProps,
                viewApi: context.viewApi,
                dateEnv: context.dateEnv,
            });
            return (h(ContentContainer, Object.assign({}, props /* includes children */, { elClasses: [
                    ...getDayClassNames(renderProps, context.theme),
                    ...(props.elClasses || []),
                ], elAttrs: Object.assign(Object.assign({}, props.elAttrs), (renderProps.isDisabled ? {} : { 'data-date': formatDayString(props.date) })), renderProps: renderProps, generatorName: "dayCellContent", generator: options.dayCellContent || props.defaultGenerator, classNameGenerator: 
                // don't use custom classNames if disabled
                renderProps.isDisabled ? undefined : options.dayCellClassNames, didMount: options.dayCellDidMount, willUnmount: options.dayCellWillUnmount })));
        }
    }
    function hasCustomDayCellContent(options) {
        return Boolean(options.dayCellContent || hasCustomRenderingHandler('dayCellContent', options));
    }
    function refineRenderProps(raw) {
        let { date, dateEnv } = raw;
        let dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
        return Object.assign(Object.assign(Object.assign({ date: dateEnv.toDate(date), view: raw.viewApi }, dayMeta), { dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : '' }), raw.extraRenderProps);
    }

    class BgEvent extends BaseComponent {
        render() {
            let { props } = this;
            let { seg } = props;
            return (h(EventContainer, { elTag: "div", elClasses: ['fc-bg-event'], elStyle: { backgroundColor: seg.eventRange.ui.backgroundColor }, defaultGenerator: renderInnerContent$3, seg: seg, timeText: "", isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday, disableDragging: true, disableResizing: true }));
        }
    }
    function renderInnerContent$3(props) {
        let { title } = props.event;
        return title && (h("div", { className: "fc-event-title" }, props.event.title));
    }
    function renderFill(fillType) {
        return (h("div", { className: `fc-${fillType}` }));
    }

    const WeekNumberContainer = (props) => (h(ViewContextType.Consumer, null, (context) => {
        let { dateEnv, options } = context;
        let { date } = props;
        let format = options.weekNumberFormat || props.defaultFormat;
        let num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?
        let text = dateEnv.format(date, format);
        let renderProps = { num, text, date };
        return (h(ContentContainer // why isn't WeekNumberContentArg being auto-detected?
        , Object.assign({}, props /* includes children */, { renderProps: renderProps, generatorName: "weekNumberContent", generator: options.weekNumberContent || renderInner, classNameGenerator: options.weekNumberClassNames, didMount: options.weekNumberDidMount, willUnmount: options.weekNumberWillUnmount })));
    }));
    function renderInner(innerProps) {
        return innerProps.text;
    }

    const PADDING_FROM_VIEWPORT = 10;
    class Popover extends BaseComponent {
        constructor() {
            super(...arguments);
            this.state = {
                titleId: getUniqueDomId(),
            };
            this.handleRootEl = (el) => {
                this.rootEl = el;
                if (this.props.elRef) {
                    setRef(this.props.elRef, el);
                }
            };
            // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
            this.handleDocumentMouseDown = (ev) => {
                // only hide the popover if the click happened outside the popover
                const target = getEventTargetViaRoot(ev);
                if (!this.rootEl.contains(target)) {
                    this.handleCloseClick();
                }
            };
            this.handleDocumentKeyDown = (ev) => {
                if (ev.key === 'Escape') {
                    this.handleCloseClick();
                }
            };
            this.handleCloseClick = () => {
                let { onClose } = this.props;
                if (onClose) {
                    onClose();
                }
            };
        }
        render() {
            let { theme, options } = this.context;
            let { props, state } = this;
            let classNames = [
                'fc-popover',
                theme.getClass('popover'),
            ].concat(props.extraClassNames || []);
            return j(h("div", Object.assign({}, props.extraAttrs, { id: props.id, className: classNames.join(' '), "aria-labelledby": state.titleId, ref: this.handleRootEl }),
                h("div", { className: 'fc-popover-header ' + theme.getClass('popoverHeader') },
                    h("span", { className: "fc-popover-title", id: state.titleId }, props.title),
                    h("span", { className: 'fc-popover-close ' + theme.getIconClass('close'), title: options.closeHint, onClick: this.handleCloseClick })),
                h("div", { className: 'fc-popover-body ' + theme.getClass('popoverContent') }, props.children)), props.parentEl);
        }
        componentDidMount() {
            document.addEventListener('mousedown', this.handleDocumentMouseDown);
            document.addEventListener('keydown', this.handleDocumentKeyDown);
            this.updateSize();
        }
        componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleDocumentMouseDown);
            document.removeEventListener('keydown', this.handleDocumentKeyDown);
        }
        updateSize() {
            let { isRtl } = this.context;
            let { alignmentEl, alignGridTop } = this.props;
            let { rootEl } = this;
            let alignmentRect = computeClippedClientRect(alignmentEl);
            if (alignmentRect) {
                let popoverDims = rootEl.getBoundingClientRect();
                // position relative to viewport
                let popoverTop = alignGridTop
                    ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top
                    : alignmentRect.top;
                let popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
                // constrain
                popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
                popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
                popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
                let origin = rootEl.offsetParent.getBoundingClientRect();
                applyStyle(rootEl, {
                    top: popoverTop - origin.top,
                    left: popoverLeft - origin.left,
                });
            }
        }
    }

    class MorePopover extends DateComponent {
        constructor() {
            super(...arguments);
            this.handleRootEl = (rootEl) => {
                this.rootEl = rootEl;
                if (rootEl) {
                    this.context.registerInteractiveComponent(this, {
                        el: rootEl,
                        useEventCenter: false,
                    });
                }
                else {
                    this.context.unregisterInteractiveComponent(this);
                }
            };
        }
        render() {
            let { options, dateEnv } = this.context;
            let { props } = this;
            let { startDate, todayRange, dateProfile } = props;
            let title = dateEnv.format(startDate, options.dayPopoverFormat);
            return (h(DayCellContainer, { elRef: this.handleRootEl, date: startDate, dateProfile: dateProfile, todayRange: todayRange }, (InnerContent, renderProps, elAttrs) => (h(Popover, { elRef: elAttrs.ref, id: props.id, title: title, extraClassNames: ['fc-more-popover'].concat(elAttrs.className || []), extraAttrs: elAttrs /* TODO: make these time-based when not whole-day? */, parentEl: props.parentEl, alignmentEl: props.alignmentEl, alignGridTop: props.alignGridTop, onClose: props.onClose },
                hasCustomDayCellContent(options) && (h(InnerContent, { elTag: "div", elClasses: ['fc-more-popover-misc'] })),
                props.children))));
        }
        queryHit(positionLeft, positionTop, elWidth, elHeight) {
            let { rootEl, props } = this;
            if (positionLeft >= 0 && positionLeft < elWidth &&
                positionTop >= 0 && positionTop < elHeight) {
                return {
                    dateProfile: props.dateProfile,
                    dateSpan: Object.assign({ allDay: true, range: {
                            start: props.startDate,
                            end: props.endDate,
                        } }, props.extraDateSpan),
                    dayEl: rootEl,
                    rect: {
                        left: 0,
                        top: 0,
                        right: elWidth,
                        bottom: elHeight,
                    },
                    layer: 1, // important when comparing with hits from other components
                };
            }
            return null;
        }
    }

    class MoreLinkContainer extends BaseComponent {
        constructor() {
            super(...arguments);
            this.linkElRef = y();
            this.state = {
                isPopoverOpen: false,
                popoverId: getUniqueDomId(),
            };
            this.handleClick = (ev) => {
                let { props, context } = this;
                let { moreLinkClick } = context.options;
                let date = computeRange(props).start;
                function buildPublicSeg(seg) {
                    let { def, instance, range } = seg.eventRange;
                    return {
                        event: new EventImpl(context, def, instance),
                        start: context.dateEnv.toDate(range.start),
                        end: context.dateEnv.toDate(range.end),
                        isStart: seg.isStart,
                        isEnd: seg.isEnd,
                    };
                }
                if (typeof moreLinkClick === 'function') {
                    moreLinkClick = moreLinkClick({
                        date,
                        allDay: Boolean(props.allDayDate),
                        allSegs: props.allSegs.map(buildPublicSeg),
                        hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
                        jsEvent: ev,
                        view: context.viewApi,
                    });
                }
                if (!moreLinkClick || moreLinkClick === 'popover') {
                    this.setState({ isPopoverOpen: true });
                }
                else if (typeof moreLinkClick === 'string') { // a view name
                    context.calendarApi.zoomTo(date, moreLinkClick);
                }
            };
            this.handlePopoverClose = () => {
                this.setState({ isPopoverOpen: false });
            };
        }
        render() {
            let { props, state } = this;
            return (h(ViewContextType.Consumer, null, (context) => {
                let { viewApi, options, calendarApi } = context;
                let { moreLinkText } = options;
                let { moreCnt } = props;
                let range = computeRange(props);
                let text = typeof moreLinkText === 'function' // TODO: eventually use formatWithOrdinals
                    ? moreLinkText.call(calendarApi, moreCnt)
                    : `+${moreCnt} ${moreLinkText}`;
                let hint = formatWithOrdinals(options.moreLinkHint, [moreCnt], text);
                let renderProps = {
                    num: moreCnt,
                    shortText: `+${moreCnt}`,
                    text,
                    view: viewApi,
                };
                return (h(p, null,
                    Boolean(props.moreCnt) && (h(ContentContainer, { elTag: props.elTag || 'a', elRef: this.linkElRef, elClasses: [
                            ...(props.elClasses || []),
                            'fc-more-link',
                        ], elAttrs: Object.assign(Object.assign(Object.assign({}, props.elAttrs), createAriaClickAttrs(this.handleClick)), { title: hint, 'aria-expanded': state.isPopoverOpen, 'aria-controls': state.isPopoverOpen ? state.popoverId : '' }), renderProps: renderProps, generatorName: "moreLinkContent", generator: options.moreLinkContent || props.defaultGenerator || renderMoreLinkInner$1, classNameGenerator: options.moreLinkClassNames, didMount: options.moreLinkDidMount, willUnmount: options.moreLinkWillUnmount }, props.children)),
                    state.isPopoverOpen && (h(MorePopover, { id: state.popoverId, startDate: range.start, endDate: range.end, dateProfile: props.dateProfile, todayRange: props.todayRange, extraDateSpan: props.extraDateSpan, parentEl: this.parentEl, alignmentEl: props.alignmentElRef ?
                            props.alignmentElRef.current :
                            this.linkElRef.current, alignGridTop: props.alignGridTop, onClose: this.handlePopoverClose }, props.popoverContent()))));
            }));
        }
        componentDidMount() {
            this.updateParentEl();
        }
        componentDidUpdate() {
            this.updateParentEl();
        }
        updateParentEl() {
            if (this.linkElRef.current) {
                this.parentEl = elementClosest(this.linkElRef.current, '.fc-view-harness');
            }
        }
    }
    function renderMoreLinkInner$1(props) {
        return props.text;
    }
    function computeRange(props) {
        if (props.allDayDate) {
            return {
                start: props.allDayDate,
                end: addDays(props.allDayDate, 1),
            };
        }
        let { hiddenSegs } = props;
        return {
            start: computeEarliestSegStart(hiddenSegs),
            end: computeLatestSegEnd(hiddenSegs),
        };
    }
    function computeEarliestSegStart(segs) {
        return segs.reduce(pickEarliestStart).eventRange.range.start;
    }
    function pickEarliestStart(seg0, seg1) {
        return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
    }
    function computeLatestSegEnd(segs) {
        return segs.reduce(pickLatestEnd).eventRange.range.end;
    }
    function pickLatestEnd(seg0, seg1) {
        return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
    }

    class Store {
        constructor() {
            this.handlers = [];
        }
        set(value) {
            this.currentValue = value;
            for (let handler of this.handlers) {
                handler(value);
            }
        }
        subscribe(handler) {
            this.handlers.push(handler);
            if (this.currentValue !== undefined) {
                handler(this.currentValue);
            }
        }
    }

    /*
    Subscribers will get a LIST of CustomRenderings
    */
    class CustomRenderingStore extends Store {
        constructor() {
            super(...arguments);
            this.map = new Map();
        }
        // for consistent order
        handle(customRendering) {
            const { map } = this;
            let updated = false;
            if (customRendering.isActive) {
                map.set(customRendering.id, customRendering);
                updated = true;
            }
            else if (map.has(customRendering.id)) {
                map.delete(customRendering.id);
                updated = true;
            }
            if (updated) {
                this.set(map);
            }
        }
    }

    var internal = {
        __proto__: null,
        BASE_OPTION_DEFAULTS: BASE_OPTION_DEFAULTS,
        BaseComponent: BaseComponent,
        BgEvent: BgEvent,
        CalendarImpl: CalendarImpl,
        CalendarRoot: CalendarRoot,
        ContentContainer: ContentContainer,
        CustomRenderingStore: CustomRenderingStore,
        DateComponent: DateComponent,
        DateEnv: DateEnv,
        DateProfileGenerator: DateProfileGenerator,
        DayCellContainer: DayCellContainer,
        DayHeader: DayHeader,
        DaySeriesModel: DaySeriesModel,
        DayTableModel: DayTableModel,
        DelayedRunner: DelayedRunner,
        ElementDragging: ElementDragging,
        ElementScrollController: ElementScrollController,
        Emitter: Emitter,
        EventContainer: EventContainer,
        EventImpl: EventImpl,
        Interaction: Interaction,
        MoreLinkContainer: MoreLinkContainer,
        NamedTimeZoneImpl: NamedTimeZoneImpl,
        NowIndicatorContainer: NowIndicatorContainer,
        NowTimer: NowTimer,
        PositionCache: PositionCache,
        RefMap: RefMap,
        ScrollController: ScrollController,
        ScrollResponder: ScrollResponder,
        Scroller: Scroller,
        SegHierarchy: SegHierarchy,
        SimpleScrollGrid: SimpleScrollGrid,
        Slicer: Slicer,
        Splitter: Splitter,
        StandardEvent: StandardEvent,
        TableDateCell: TableDateCell,
        TableDowCell: TableDowCell,
        Theme: Theme,
        ViewContainer: ViewContainer$1,
        ViewContextType: ViewContextType,
        WeekNumberContainer: WeekNumberContainer,
        WindowScrollController: WindowScrollController,
        addDays: addDays,
        addDurations: addDurations,
        addMs: addMs,
        addWeeks: addWeeks,
        allowContextMenu: allowContextMenu,
        allowSelection: allowSelection,
        applyMutationToEventStore: applyMutationToEventStore,
        applyStyle: applyStyle,
        asCleanDays: asCleanDays,
        asRoughMinutes: asRoughMinutes,
        asRoughMs: asRoughMs,
        asRoughSeconds: asRoughSeconds,
        binarySearch: binarySearch,
        buildElAttrs: buildElAttrs,
        buildEntryKey: buildEntryKey,
        buildEventApis: buildEventApis,
        buildEventRangeKey: buildEventRangeKey,
        buildIsoString: buildIsoString,
        buildNavLinkAttrs: buildNavLinkAttrs,
        buildSegTimeText: buildSegTimeText,
        collectFromHash: collectFromHash,
        combineEventUis: combineEventUis,
        compareByFieldSpecs: compareByFieldSpecs,
        compareNumbers: compareNumbers,
        compareObjs: compareObjs,
        computeEarliestSegStart: computeEarliestSegStart,
        computeEdges: computeEdges,
        computeFallbackHeaderFormat: computeFallbackHeaderFormat,
        computeInnerRect: computeInnerRect,
        computeRect: computeRect,
        computeShrinkWidth: computeShrinkWidth,
        computeVisibleDayRange: computeVisibleDayRange,
        config: config,
        constrainPoint: constrainPoint,
        createDuration: createDuration,
        createEmptyEventStore: createEmptyEventStore,
        createEventInstance: createEventInstance,
        createEventUi: createEventUi,
        createFormatter: createFormatter,
        diffDates: diffDates,
        diffDayAndTime: diffDayAndTime,
        diffDays: diffDays,
        diffPoints: diffPoints,
        diffWeeks: diffWeeks,
        diffWholeDays: diffWholeDays,
        diffWholeWeeks: diffWholeWeeks,
        disableCursor: disableCursor,
        elementClosest: elementClosest,
        elementMatches: elementMatches,
        enableCursor: enableCursor,
        eventTupleToStore: eventTupleToStore,
        filterHash: filterHash,
        findDirectChildren: findDirectChildren,
        findElements: findElements,
        flexibleCompare: flexibleCompare,
        formatDayString: formatDayString,
        formatIsoTimeString: formatIsoTimeString,
        getAllowYScrolling: getAllowYScrolling,
        getCanVGrowWithinCell: getCanVGrowWithinCell,
        getClippingParents: getClippingParents,
        getDateMeta: getDateMeta,
        getDayClassNames: getDayClassNames,
        getDefaultEventEnd: getDefaultEventEnd,
        getElRoot: getElRoot,
        getElSeg: getElSeg,
        getEntrySpanEnd: getEntrySpanEnd,
        getEventTargetViaRoot: getEventTargetViaRoot,
        getIsRtlScrollbarOnLeft: getIsRtlScrollbarOnLeft,
        getRectCenter: getRectCenter,
        getRelevantEvents: getRelevantEvents,
        getScrollGridClassNames: getScrollGridClassNames,
        getScrollbarWidths: getScrollbarWidths,
        getSectionClassNames: getSectionClassNames,
        getSectionHasLiquidHeight: getSectionHasLiquidHeight,
        getSegAnchorAttrs: getSegAnchorAttrs,
        getSegMeta: getSegMeta,
        getSlotClassNames: getSlotClassNames,
        getStickyFooterScrollbar: getStickyFooterScrollbar,
        getStickyHeaderDates: getStickyHeaderDates,
        getUniqueDomId: getUniqueDomId,
        greatestDurationDenominator: greatestDurationDenominator,
        groupIntersectingEntries: groupIntersectingEntries,
        guid: guid,
        hasBgRendering: hasBgRendering,
        hasCustomDayCellContent: hasCustomDayCellContent,
        hasShrinkWidth: hasShrinkWidth,
        identity: identity,
        injectStyles: injectStyles,
        interactionSettingsStore: interactionSettingsStore,
        interactionSettingsToStore: interactionSettingsToStore,
        intersectRanges: intersectRanges,
        intersectRects: intersectRects,
        intersectSpans: intersectSpans,
        isArraysEqual: isArraysEqual,
        isColPropsEqual: isColPropsEqual,
        isDateSelectionValid: isDateSelectionValid,
        isDateSpansEqual: isDateSpansEqual,
        isInt: isInt,
        isInteractionValid: isInteractionValid,
        isMultiDayRange: isMultiDayRange,
        isPropsEqual: isPropsEqual,
        isPropsValid: isPropsValid,
        isValidDate: isValidDate,
        mapHash: mapHash,
        memoize: memoize,
        memoizeArraylike: memoizeArraylike,
        memoizeHashlike: memoizeHashlike,
        memoizeObjArg: memoizeObjArg,
        mergeEventStores: mergeEventStores,
        multiplyDuration: multiplyDuration,
        padStart: padStart,
        parseBusinessHours: parseBusinessHours,
        parseClassNames: parseClassNames,
        parseDragMeta: parseDragMeta,
        parseEventDef: parseEventDef,
        parseFieldSpecs: parseFieldSpecs,
        parseMarker: parse,
        pointInsideRect: pointInsideRect,
        preventContextMenu: preventContextMenu,
        preventDefault: preventDefault,
        preventSelection: preventSelection,
        rangeContainsMarker: rangeContainsMarker,
        rangeContainsRange: rangeContainsRange,
        rangesEqual: rangesEqual,
        rangesIntersect: rangesIntersect,
        refineEventDef: refineEventDef,
        refineProps: refineProps,
        removeElement: removeElement,
        removeExact: removeExact,
        renderChunkContent: renderChunkContent,
        renderFill: renderFill,
        renderMicroColGroup: renderMicroColGroup,
        renderScrollShim: renderScrollShim,
        requestJson: requestJson,
        sanitizeShrinkWidth: sanitizeShrinkWidth,
        setRef: setRef,
        sliceEventStore: sliceEventStore,
        sortEventSegs: sortEventSegs,
        startOfDay: startOfDay,
        translateRect: translateRect,
        triggerDateSelect: triggerDateSelect,
        unpromisify: unpromisify,
        whenTransitionDone: whenTransitionDone,
        wholeDivideDurations: wholeDivideDurations
    };

    var css_248z$3 = ":root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc-unselectable{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;user-select:none}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:\"\\e900\"}.fc-icon-chevron-right:before{content:\"\\e901\"}.fc-icon-chevrons-left:before{content:\"\\e902\"}.fc-icon-chevrons-right:before{content:\"\\e903\"}.fc-icon-minus-square:before{content:\"\\e904\"}.fc-icon-plus-square:before{content:\"\\e905\"}.fc-icon-x:before{content:\"\\e906\"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button::-moz-focus-inner{border-style:none;padding:0}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:\"\";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:\"\";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}";
    injectStyles(css_248z$3);

    const globalLocales = [];

    const MINIMAL_RAW_EN_LOCALE = {
        code: 'en',
        week: {
            dow: 0,
            doy: 4, // 4 days need to be within the year to be considered the first week
        },
        direction: 'ltr',
        buttonText: {
            prev: 'prev',
            next: 'next',
            prevYear: 'prev year',
            nextYear: 'next year',
            year: 'year',
            today: 'today',
            month: 'month',
            week: 'week',
            day: 'day',
            list: 'list',
        },
        weekText: 'W',
        weekTextLong: 'Week',
        closeHint: 'Close',
        timeHint: 'Time',
        eventHint: 'Event',
        allDayText: 'all-day',
        moreLinkText: 'more',
        noEventsText: 'No events to display',
    };
    const RAW_EN_LOCALE = Object.assign(Object.assign({}, MINIMAL_RAW_EN_LOCALE), { 
        // Includes things we don't want other locales to inherit,
        // things that derive from other translatable strings.
        buttonHints: {
            prev: 'Previous $0',
            next: 'Next $0',
            today(buttonText, unit) {
                return (unit === 'day')
                    ? 'Today'
                    : `This ${buttonText}`;
            },
        }, viewHint: '$0 view', navLinkHint: 'Go to $0', moreLinkHint(eventCnt) {
            return `Show ${eventCnt} more event${eventCnt === 1 ? '' : 's'}`;
        } });
    function organizeRawLocales(explicitRawLocales) {
        let defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
        let allRawLocales = globalLocales.concat(explicitRawLocales);
        let rawLocaleMap = {
            en: RAW_EN_LOCALE,
        };
        for (let rawLocale of allRawLocales) {
            rawLocaleMap[rawLocale.code] = rawLocale;
        }
        return {
            map: rawLocaleMap,
            defaultCode,
        };
    }
    function buildLocale(inputSingular, available) {
        if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
            return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
        }
        return queryLocale(inputSingular, available);
    }
    function queryLocale(codeArg, available) {
        let codes = [].concat(codeArg || []); // will convert to array
        let raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
        return parseLocale(codeArg, codes, raw);
    }
    function queryRawLocale(codes, available) {
        for (let i = 0; i < codes.length; i += 1) {
            let parts = codes[i].toLocaleLowerCase().split('-');
            for (let j = parts.length; j > 0; j -= 1) {
                let simpleId = parts.slice(0, j).join('-');
                if (available[simpleId]) {
                    return available[simpleId];
                }
            }
        }
        return null;
    }
    function parseLocale(codeArg, codes, raw) {
        let merged = mergeProps([MINIMAL_RAW_EN_LOCALE, raw], ['buttonText']);
        delete merged.code; // don't want this part of the options
        let { week } = merged;
        delete merged.week;
        return {
            codeArg,
            codes,
            week,
            simpleNumberFormat: new Intl.NumberFormat(codeArg),
            options: merged,
        };
    }

    // TODO: easier way to add new hooks? need to update a million things
    function createPlugin(input) {
        return {
            id: guid(),
            name: input.name,
            premiumReleaseDate: input.premiumReleaseDate ? new Date(input.premiumReleaseDate) : undefined,
            deps: input.deps || [],
            reducers: input.reducers || [],
            isLoadingFuncs: input.isLoadingFuncs || [],
            contextInit: [].concat(input.contextInit || []),
            eventRefiners: input.eventRefiners || {},
            eventDefMemberAdders: input.eventDefMemberAdders || [],
            eventSourceRefiners: input.eventSourceRefiners || {},
            isDraggableTransformers: input.isDraggableTransformers || [],
            eventDragMutationMassagers: input.eventDragMutationMassagers || [],
            eventDefMutationAppliers: input.eventDefMutationAppliers || [],
            dateSelectionTransformers: input.dateSelectionTransformers || [],
            datePointTransforms: input.datePointTransforms || [],
            dateSpanTransforms: input.dateSpanTransforms || [],
            views: input.views || {},
            viewPropsTransformers: input.viewPropsTransformers || [],
            isPropsValid: input.isPropsValid || null,
            externalDefTransforms: input.externalDefTransforms || [],
            viewContainerAppends: input.viewContainerAppends || [],
            eventDropTransformers: input.eventDropTransformers || [],
            componentInteractions: input.componentInteractions || [],
            calendarInteractions: input.calendarInteractions || [],
            themeClasses: input.themeClasses || {},
            eventSourceDefs: input.eventSourceDefs || [],
            cmdFormatter: input.cmdFormatter,
            recurringTypes: input.recurringTypes || [],
            namedTimeZonedImpl: input.namedTimeZonedImpl,
            initialView: input.initialView || '',
            elementDraggingImpl: input.elementDraggingImpl,
            optionChangeHandlers: input.optionChangeHandlers || {},
            scrollGridImpl: input.scrollGridImpl || null,
            listenerRefiners: input.listenerRefiners || {},
            optionRefiners: input.optionRefiners || {},
            propSetHandlers: input.propSetHandlers || {},
        };
    }
    function buildPluginHooks(pluginDefs, globalDefs) {
        let currentPluginIds = {};
        let hooks = {
            premiumReleaseDate: undefined,
            reducers: [],
            isLoadingFuncs: [],
            contextInit: [],
            eventRefiners: {},
            eventDefMemberAdders: [],
            eventSourceRefiners: {},
            isDraggableTransformers: [],
            eventDragMutationMassagers: [],
            eventDefMutationAppliers: [],
            dateSelectionTransformers: [],
            datePointTransforms: [],
            dateSpanTransforms: [],
            views: {},
            viewPropsTransformers: [],
            isPropsValid: null,
            externalDefTransforms: [],
            viewContainerAppends: [],
            eventDropTransformers: [],
            componentInteractions: [],
            calendarInteractions: [],
            themeClasses: {},
            eventSourceDefs: [],
            cmdFormatter: null,
            recurringTypes: [],
            namedTimeZonedImpl: null,
            initialView: '',
            elementDraggingImpl: null,
            optionChangeHandlers: {},
            scrollGridImpl: null,
            listenerRefiners: {},
            optionRefiners: {},
            propSetHandlers: {},
        };
        function addDefs(defs) {
            for (let def of defs) {
                const pluginName = def.name;
                const currentId = currentPluginIds[pluginName];
                if (currentId === undefined) {
                    currentPluginIds[pluginName] = def.id;
                    addDefs(def.deps);
                    hooks = combineHooks(hooks, def);
                }
                else if (currentId !== def.id) {
                    // different ID than the one already added
                    console.warn(`Duplicate plugin '${pluginName}'`);
                }
            }
        }
        if (pluginDefs) {
            addDefs(pluginDefs);
        }
        addDefs(globalDefs);
        return hooks;
    }
    function buildBuildPluginHooks() {
        let currentOverrideDefs = [];
        let currentGlobalDefs = [];
        let currentHooks;
        return (overrideDefs, globalDefs) => {
            if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
                currentHooks = buildPluginHooks(overrideDefs, globalDefs);
            }
            currentOverrideDefs = overrideDefs;
            currentGlobalDefs = globalDefs;
            return currentHooks;
        };
    }
    function combineHooks(hooks0, hooks1) {
        return {
            premiumReleaseDate: compareOptionalDates(hooks0.premiumReleaseDate, hooks1.premiumReleaseDate),
            reducers: hooks0.reducers.concat(hooks1.reducers),
            isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
            contextInit: hooks0.contextInit.concat(hooks1.contextInit),
            eventRefiners: Object.assign(Object.assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
            eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
            eventSourceRefiners: Object.assign(Object.assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
            isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
            eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
            eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
            dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
            datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
            dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
            views: Object.assign(Object.assign({}, hooks0.views), hooks1.views),
            viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
            isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
            externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
            viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
            eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
            calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
            componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
            themeClasses: Object.assign(Object.assign({}, hooks0.themeClasses), hooks1.themeClasses),
            eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
            cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
            recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
            namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
            initialView: hooks0.initialView || hooks1.initialView,
            elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
            optionChangeHandlers: Object.assign(Object.assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
            scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
            listenerRefiners: Object.assign(Object.assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
            optionRefiners: Object.assign(Object.assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
            propSetHandlers: Object.assign(Object.assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers),
        };
    }
    function compareOptionalDates(date0, date1) {
        if (date0 === undefined) {
            return date1;
        }
        if (date1 === undefined) {
            return date0;
        }
        return new Date(Math.max(date0.valueOf(), date1.valueOf()));
    }

    class StandardTheme extends Theme {
    }
    StandardTheme.prototype.classes = {
        root: 'fc-theme-standard',
        tableCellShaded: 'fc-cell-shaded',
        buttonGroup: 'fc-button-group',
        button: 'fc-button fc-button-primary',
        buttonActive: 'fc-button-active',
    };
    StandardTheme.prototype.baseIconClass = 'fc-icon';
    StandardTheme.prototype.iconClasses = {
        close: 'fc-icon-x',
        prev: 'fc-icon-chevron-left',
        next: 'fc-icon-chevron-right',
        prevYear: 'fc-icon-chevrons-left',
        nextYear: 'fc-icon-chevrons-right',
    };
    StandardTheme.prototype.rtlIconClasses = {
        prev: 'fc-icon-chevron-right',
        next: 'fc-icon-chevron-left',
        prevYear: 'fc-icon-chevrons-right',
        nextYear: 'fc-icon-chevrons-left',
    };
    StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly
    StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
    StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

    function compileViewDefs(defaultConfigs, overrideConfigs) {
        let hash = {};
        let viewType;
        for (viewType in defaultConfigs) {
            ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        }
        for (viewType in overrideConfigs) {
            ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        }
        return hash;
    }
    function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
        if (hash[viewType]) {
            return hash[viewType];
        }
        let viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        if (viewDef) {
            hash[viewType] = viewDef;
        }
        return viewDef;
    }
    function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
        let defaultConfig = defaultConfigs[viewType];
        let overrideConfig = overrideConfigs[viewType];
        let queryProp = (name) => ((defaultConfig && defaultConfig[name] !== null) ? defaultConfig[name] :
            ((overrideConfig && overrideConfig[name] !== null) ? overrideConfig[name] : null));
        let theComponent = queryProp('component');
        let superType = queryProp('superType');
        let superDef = null;
        if (superType) {
            if (superType === viewType) {
                throw new Error('Can\'t have a custom view type that references itself');
            }
            superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
        }
        if (!theComponent && superDef) {
            theComponent = superDef.component;
        }
        if (!theComponent) {
            return null; // don't throw a warning, might be settings for a single-unit view
        }
        return {
            type: viewType,
            component: theComponent,
            defaults: Object.assign(Object.assign({}, (superDef ? superDef.defaults : {})), (defaultConfig ? defaultConfig.rawOptions : {})),
            overrides: Object.assign(Object.assign({}, (superDef ? superDef.overrides : {})), (overrideConfig ? overrideConfig.rawOptions : {})),
        };
    }

    function parseViewConfigs(inputs) {
        return mapHash(inputs, parseViewConfig);
    }
    function parseViewConfig(input) {
        let rawOptions = typeof input === 'function' ?
            { component: input } :
            input;
        let { component } = rawOptions;
        if (rawOptions.content) {
            component = createViewHookComponent(rawOptions);
            // TODO: remove content/classNames/didMount/etc from options?
        }
        return {
            superType: rawOptions.type,
            component: component,
            rawOptions, // includes type and component too :(
        };
    }
    function createViewHookComponent(options) {
        return (viewProps) => (h(ViewContextType.Consumer, null, (context) => (h(ContentContainer, { elTag: "div", elClasses: buildViewClassNames(context.viewSpec), renderProps: Object.assign(Object.assign({}, viewProps), { nextDayThreshold: context.options.nextDayThreshold }), generatorName: undefined, generator: options.content, classNameGenerator: options.classNames, didMount: options.didMount, willUnmount: options.willUnmount }))));
    }

    function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
        let defaultConfigs = parseViewConfigs(defaultInputs);
        let overrideConfigs = parseViewConfigs(optionOverrides.views);
        let viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
        return mapHash(viewDefs, (viewDef) => buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults));
    }
    function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
        let durationInput = viewDef.overrides.duration ||
            viewDef.defaults.duration ||
            dynamicOptionOverrides.duration ||
            optionOverrides.duration;
        let duration = null;
        let durationUnit = '';
        let singleUnit = '';
        let singleUnitOverrides = {};
        if (durationInput) {
            duration = createDurationCached(durationInput);
            if (duration) { // valid?
                let denom = greatestDurationDenominator(duration);
                durationUnit = denom.unit;
                if (denom.value === 1) {
                    singleUnit = durationUnit;
                    singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
                }
            }
        }
        let queryButtonText = (optionsSubset) => {
            let buttonTextMap = optionsSubset.buttonText || {};
            let buttonTextKey = viewDef.defaults.buttonTextKey;
            if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
                return buttonTextMap[buttonTextKey];
            }
            if (buttonTextMap[viewDef.type] != null) {
                return buttonTextMap[viewDef.type];
            }
            if (buttonTextMap[singleUnit] != null) {
                return buttonTextMap[singleUnit];
            }
            return null;
        };
        let queryButtonTitle = (optionsSubset) => {
            let buttonHints = optionsSubset.buttonHints || {};
            let buttonKey = viewDef.defaults.buttonTextKey; // use same key as text
            if (buttonKey != null && buttonHints[buttonKey] != null) {
                return buttonHints[buttonKey];
            }
            if (buttonHints[viewDef.type] != null) {
                return buttonHints[viewDef.type];
            }
            if (buttonHints[singleUnit] != null) {
                return buttonHints[singleUnit];
            }
            return null;
        };
        return {
            type: viewDef.type,
            component: viewDef.component,
            duration,
            durationUnit,
            singleUnit,
            optionDefaults: viewDef.defaults,
            optionOverrides: Object.assign(Object.assign({}, singleUnitOverrides), viewDef.overrides),
            buttonTextOverride: queryButtonText(dynamicOptionOverrides) ||
                queryButtonText(optionOverrides) || // constructor-specified buttonText lookup hash takes precedence
                viewDef.overrides.buttonText,
            buttonTextDefault: queryButtonText(localeDefaults) ||
                viewDef.defaults.buttonText ||
                queryButtonText(BASE_OPTION_DEFAULTS) ||
                viewDef.type,
            // not DRY
            buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) ||
                queryButtonTitle(optionOverrides) ||
                viewDef.overrides.buttonHint,
            buttonTitleDefault: queryButtonTitle(localeDefaults) ||
                viewDef.defaults.buttonHint ||
                queryButtonTitle(BASE_OPTION_DEFAULTS),
            // will eventually fall back to buttonText
        };
    }
    // hack to get memoization working
    let durationInputMap = {};
    function createDurationCached(durationInput) {
        let json = JSON.stringify(durationInput);
        let res = durationInputMap[json];
        if (res === undefined) {
            res = createDuration(durationInput);
            durationInputMap[json] = res;
        }
        return res;
    }

    function reduceViewType(viewType, action) {
        switch (action.type) {
            case 'CHANGE_VIEW_TYPE':
                viewType = action.viewType;
        }
        return viewType;
    }

    function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
        switch (action.type) {
            case 'SET_OPTION':
                return Object.assign(Object.assign({}, dynamicOptionOverrides), { [action.optionName]: action.rawOptionValue });
            default:
                return dynamicOptionOverrides;
        }
    }

    function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
        let dp;
        switch (action.type) {
            case 'CHANGE_VIEW_TYPE':
                return dateProfileGenerator.build(action.dateMarker || currentDate);
            case 'CHANGE_DATE':
                return dateProfileGenerator.build(action.dateMarker);
            case 'PREV':
                dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
                if (dp.isValid) {
                    return dp;
                }
                break;
            case 'NEXT':
                dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
                if (dp.isValid) {
                    return dp;
                }
                break;
        }
        return currentDateProfile;
    }

    function initEventSources(calendarOptions, dateProfile, context) {
        let activeRange = dateProfile ? dateProfile.activeRange : null;
        return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
    }
    function reduceEventSources(eventSources, action, dateProfile, context) {
        let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
        switch (action.type) {
            case 'ADD_EVENT_SOURCES': // already parsed
                return addSources(eventSources, action.sources, activeRange, context);
            case 'REMOVE_EVENT_SOURCE':
                return removeSource(eventSources, action.sourceId);
            case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
            case 'NEXT':
            case 'CHANGE_DATE':
            case 'CHANGE_VIEW_TYPE':
                if (dateProfile) {
                    return fetchDirtySources(eventSources, activeRange, context);
                }
                return eventSources;
            case 'FETCH_EVENT_SOURCES':
                return fetchSourcesByIds(eventSources, action.sourceIds ? // why no type?
                    arrayToHash(action.sourceIds) :
                    excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
            case 'RECEIVE_EVENTS':
            case 'RECEIVE_EVENT_ERROR':
                return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
            case 'REMOVE_ALL_EVENT_SOURCES':
                return {};
            default:
                return eventSources;
        }
    }
    function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
        let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
        return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
    }
    function computeEventSourcesLoading(eventSources) {
        for (let sourceId in eventSources) {
            if (eventSources[sourceId].isFetching) {
                return true;
            }
        }
        return false;
    }
    function addSources(eventSourceHash, sources, fetchRange, context) {
        let hash = {};
        for (let source of sources) {
            hash[source.sourceId] = source;
        }
        if (fetchRange) {
            hash = fetchDirtySources(hash, fetchRange, context);
        }
        return Object.assign(Object.assign({}, eventSourceHash), hash);
    }
    function removeSource(eventSourceHash, sourceId) {
        return filterHash(eventSourceHash, (eventSource) => eventSource.sourceId !== sourceId);
    }
    function fetchDirtySources(sourceHash, fetchRange, context) {
        return fetchSourcesByIds(sourceHash, filterHash(sourceHash, (eventSource) => isSourceDirty(eventSource, fetchRange, context)), fetchRange, false, context);
    }
    function isSourceDirty(eventSource, fetchRange, context) {
        if (!doesSourceNeedRange(eventSource, context)) {
            return !eventSource.latestFetchId;
        }
        return !context.options.lazyFetching ||
            !eventSource.fetchRange ||
            eventSource.isFetching || // always cancel outdated in-progress fetches
            fetchRange.start < eventSource.fetchRange.start ||
            fetchRange.end > eventSource.fetchRange.end;
    }
    function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
        let nextSources = {};
        for (let sourceId in prevSources) {
            let source = prevSources[sourceId];
            if (sourceIdHash[sourceId]) {
                nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
            }
            else {
                nextSources[sourceId] = source;
            }
        }
        return nextSources;
    }
    function fetchSource(eventSource, fetchRange, isRefetch, context) {
        let { options, calendarApi } = context;
        let sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
        let fetchId = guid();
        sourceDef.fetch({
            eventSource,
            range: fetchRange,
            isRefetch,
            context,
        }, (res) => {
            let { rawEvents } = res;
            if (options.eventSourceSuccess) {
                rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.response) || rawEvents;
            }
            if (eventSource.success) {
                rawEvents = eventSource.success.call(calendarApi, rawEvents, res.response) || rawEvents;
            }
            context.dispatch({
                type: 'RECEIVE_EVENTS',
                sourceId: eventSource.sourceId,
                fetchId,
                fetchRange,
                rawEvents,
            });
        }, (error) => {
            let errorHandled = false;
            if (options.eventSourceFailure) {
                options.eventSourceFailure.call(calendarApi, error);
                errorHandled = true;
            }
            if (eventSource.failure) {
                eventSource.failure(error);
                errorHandled = true;
            }
            if (!errorHandled) {
                console.warn(error.message, error);
            }
            context.dispatch({
                type: 'RECEIVE_EVENT_ERROR',
                sourceId: eventSource.sourceId,
                fetchId,
                fetchRange,
                error,
            });
        });
        return Object.assign(Object.assign({}, eventSource), { isFetching: true, latestFetchId: fetchId });
    }
    function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
        let eventSource = sourceHash[sourceId];
        if (eventSource && // not already removed
            fetchId === eventSource.latestFetchId) {
            return Object.assign(Object.assign({}, sourceHash), { [sourceId]: Object.assign(Object.assign({}, eventSource), { isFetching: false, fetchRange }) });
        }
        return sourceHash;
    }
    function excludeStaticSources(eventSources, context) {
        return filterHash(eventSources, (eventSource) => doesSourceNeedRange(eventSource, context));
    }
    function parseInitialSources(rawOptions, context) {
        let refiners = buildEventSourceRefiners(context);
        let rawSources = [].concat(rawOptions.eventSources || []);
        let sources = []; // parsed
        if (rawOptions.initialEvents) {
            rawSources.unshift(rawOptions.initialEvents);
        }
        if (rawOptions.events) {
            rawSources.unshift(rawOptions.events);
        }
        for (let rawSource of rawSources) {
            let source = parseEventSource(rawSource, context, refiners);
            if (source) {
                sources.push(source);
            }
        }
        return sources;
    }
    function doesSourceNeedRange(eventSource, context) {
        let defs = context.pluginHooks.eventSourceDefs;
        return !defs[eventSource.sourceDefId].ignoreRange;
    }

    function reduceDateSelection(currentSelection, action) {
        switch (action.type) {
            case 'UNSELECT_DATES':
                return null;
            case 'SELECT_DATES':
                return action.selection;
            default:
                return currentSelection;
        }
    }

    function reduceSelectedEvent(currentInstanceId, action) {
        switch (action.type) {
            case 'UNSELECT_EVENT':
                return '';
            case 'SELECT_EVENT':
                return action.eventInstanceId;
            default:
                return currentInstanceId;
        }
    }

    function reduceEventDrag(currentDrag, action) {
        let newDrag;
        switch (action.type) {
            case 'UNSET_EVENT_DRAG':
                return null;
            case 'SET_EVENT_DRAG':
                newDrag = action.state;
                return {
                    affectedEvents: newDrag.affectedEvents,
                    mutatedEvents: newDrag.mutatedEvents,
                    isEvent: newDrag.isEvent,
                };
            default:
                return currentDrag;
        }
    }

    function reduceEventResize(currentResize, action) {
        let newResize;
        switch (action.type) {
            case 'UNSET_EVENT_RESIZE':
                return null;
            case 'SET_EVENT_RESIZE':
                newResize = action.state;
                return {
                    affectedEvents: newResize.affectedEvents,
                    mutatedEvents: newResize.mutatedEvents,
                    isEvent: newResize.isEvent,
                };
            default:
                return currentResize;
        }
    }

    function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
        let header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
        let footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
        return { header, footer };
    }
    function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
        let sectionWidgets = {};
        let viewsWithButtons = [];
        let hasTitle = false;
        for (let sectionName in sectionStrHash) {
            let sectionStr = sectionStrHash[sectionName];
            let sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
            sectionWidgets[sectionName] = sectionRes.widgets;
            viewsWithButtons.push(...sectionRes.viewsWithButtons);
            hasTitle = hasTitle || sectionRes.hasTitle;
        }
        return { sectionWidgets, viewsWithButtons, hasTitle };
    }
    /*
    BAD: querying icons and text here. should be done at render time
    */
    function parseSection(sectionStr, calendarOptions, // defaults+overrides, then refined
    calendarOptionOverrides, // overrides only!, unrefined :(
    theme, viewSpecs, calendarApi) {
        let isRtl = calendarOptions.direction === 'rtl';
        let calendarCustomButtons = calendarOptions.customButtons || {};
        let calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
        let calendarButtonText = calendarOptions.buttonText || {};
        let calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
        let calendarButtonHints = calendarOptions.buttonHints || {};
        let sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
        let viewsWithButtons = [];
        let hasTitle = false;
        let widgets = sectionSubstrs.map((buttonGroupStr) => (buttonGroupStr.split(',').map((buttonName) => {
            if (buttonName === 'title') {
                hasTitle = true;
                return { buttonName };
            }
            let customButtonProps;
            let viewSpec;
            let buttonClick;
            let buttonIcon; // only one of these will be set
            let buttonText; // "
            let buttonHint;
            // ^ for the title="" attribute, for accessibility
            if ((customButtonProps = calendarCustomButtons[buttonName])) {
                buttonClick = (ev) => {
                    if (customButtonProps.click) {
                        customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
                    }
                };
                (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                    (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                    (buttonText = customButtonProps.text);
                buttonHint = customButtonProps.hint || customButtonProps.text;
            }
            else if ((viewSpec = viewSpecs[buttonName])) {
                viewsWithButtons.push(buttonName);
                buttonClick = () => {
                    calendarApi.changeView(buttonName);
                };
                (buttonText = viewSpec.buttonTextOverride) ||
                    (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                    (buttonText = viewSpec.buttonTextDefault);
                let textFallback = viewSpec.buttonTextOverride ||
                    viewSpec.buttonTextDefault;
                buttonHint = formatWithOrdinals(viewSpec.buttonTitleOverride ||
                    viewSpec.buttonTitleDefault ||
                    calendarOptions.viewHint, [textFallback, buttonName], // view-name = buttonName
                textFallback);
            }
            else if (calendarApi[buttonName]) { // a calendarApi method
                buttonClick = () => {
                    calendarApi[buttonName]();
                };
                (buttonText = calendarButtonTextOverrides[buttonName]) ||
                    (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                    (buttonText = calendarButtonText[buttonName]); // everything else is considered default
                if (buttonName === 'prevYear' || buttonName === 'nextYear') {
                    let prevOrNext = buttonName === 'prevYear' ? 'prev' : 'next';
                    buttonHint = formatWithOrdinals(calendarButtonHintOverrides[prevOrNext] ||
                        calendarButtonHints[prevOrNext], [
                        calendarButtonText.year || 'year',
                        'year',
                    ], calendarButtonText[buttonName]);
                }
                else {
                    buttonHint = (navUnit) => formatWithOrdinals(calendarButtonHintOverrides[buttonName] ||
                        calendarButtonHints[buttonName], [
                        calendarButtonText[navUnit] || navUnit,
                        navUnit,
                    ], calendarButtonText[buttonName]);
                }
            }
            return { buttonName, buttonClick, buttonIcon, buttonText, buttonHint };
        })));
        return { widgets, viewsWithButtons, hasTitle };
    }

    // always represents the current view. otherwise, it'd need to change value every time date changes
    class ViewImpl {
        constructor(type, getCurrentData, dateEnv) {
            this.type = type;
            this.getCurrentData = getCurrentData;
            this.dateEnv = dateEnv;
        }
        get calendar() {
            return this.getCurrentData().calendarApi;
        }
        get title() {
            return this.getCurrentData().viewTitle;
        }
        get activeStart() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
        }
        get activeEnd() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
        }
        get currentStart() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
        }
        get currentEnd() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
        }
        getOption(name) {
            return this.getCurrentData().options[name]; // are the view-specific options
        }
    }

    let eventSourceDef$2 = {
        ignoreRange: true,
        parseMeta(refined) {
            if (Array.isArray(refined.events)) {
                return refined.events;
            }
            return null;
        },
        fetch(arg, successCallback) {
            successCallback({
                rawEvents: arg.eventSource.meta,
            });
        },
    };
    const arrayEventSourcePlugin = createPlugin({
        name: 'array-event-source',
        eventSourceDefs: [eventSourceDef$2],
    });

    let eventSourceDef$1 = {
        parseMeta(refined) {
            if (typeof refined.events === 'function') {
                return refined.events;
            }
            return null;
        },
        fetch(arg, successCallback, errorCallback) {
            const { dateEnv } = arg.context;
            const func = arg.eventSource.meta;
            unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), (rawEvents) => successCallback({ rawEvents }), errorCallback);
        },
    };
    const funcEventSourcePlugin = createPlugin({
        name: 'func-event-source',
        eventSourceDefs: [eventSourceDef$1],
    });

    const JSON_FEED_EVENT_SOURCE_REFINERS = {
        method: String,
        extraParams: identity,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
    };

    let eventSourceDef = {
        parseMeta(refined) {
            if (refined.url && (refined.format === 'json' || !refined.format)) {
                return {
                    url: refined.url,
                    format: 'json',
                    method: (refined.method || 'GET').toUpperCase(),
                    extraParams: refined.extraParams,
                    startParam: refined.startParam,
                    endParam: refined.endParam,
                    timeZoneParam: refined.timeZoneParam,
                };
            }
            return null;
        },
        fetch(arg, successCallback, errorCallback) {
            const { meta } = arg.eventSource;
            const requestParams = buildRequestParams(meta, arg.range, arg.context);
            requestJson(meta.method, meta.url, requestParams).then(([rawEvents, response]) => {
                successCallback({ rawEvents, response });
            }, errorCallback);
        },
    };
    const jsonFeedEventSourcePlugin = createPlugin({
        name: 'json-event-source',
        eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
        eventSourceDefs: [eventSourceDef],
    });
    function buildRequestParams(meta, range, context) {
        let { dateEnv, options } = context;
        let startParam;
        let endParam;
        let timeZoneParam;
        let customRequestParams;
        let params = {};
        startParam = meta.startParam;
        if (startParam == null) {
            startParam = options.startParam;
        }
        endParam = meta.endParam;
        if (endParam == null) {
            endParam = options.endParam;
        }
        timeZoneParam = meta.timeZoneParam;
        if (timeZoneParam == null) {
            timeZoneParam = options.timeZoneParam;
        }
        // retrieve any outbound GET/POST data from the options
        if (typeof meta.extraParams === 'function') {
            // supplied as a function that returns a key/value object
            customRequestParams = meta.extraParams();
        }
        else {
            // probably supplied as a straight key/value object
            customRequestParams = meta.extraParams || {};
        }
        Object.assign(params, customRequestParams);
        params[startParam] = dateEnv.formatIso(range.start);
        params[endParam] = dateEnv.formatIso(range.end);
        if (dateEnv.timeZone !== 'local') {
            params[timeZoneParam] = dateEnv.timeZone;
        }
        return params;
    }

    const SIMPLE_RECURRING_REFINERS = {
        daysOfWeek: identity,
        startTime: createDuration,
        endTime: createDuration,
        duration: createDuration,
        startRecur: identity,
        endRecur: identity,
    };

    let recurring = {
        parse(refined, dateEnv) {
            if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
                let recurringData = {
                    daysOfWeek: refined.daysOfWeek || null,
                    startTime: refined.startTime || null,
                    endTime: refined.endTime || null,
                    startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
                    endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null,
                };
                let duration;
                if (refined.duration) {
                    duration = refined.duration;
                }
                if (!duration && refined.startTime && refined.endTime) {
                    duration = subtractDurations(refined.endTime, refined.startTime);
                }
                return {
                    allDayGuess: Boolean(!refined.startTime && !refined.endTime),
                    duration,
                    typeData: recurringData, // doesn't need endTime anymore but oh well
                };
            }
            return null;
        },
        expand(typeData, framingRange, dateEnv) {
            let clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
            if (clippedFramingRange) {
                return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
            }
            return [];
        },
    };
    const simpleRecurringEventsPlugin = createPlugin({
        name: 'simple-recurring-event',
        recurringTypes: [recurring],
        eventRefiners: SIMPLE_RECURRING_REFINERS,
    });
    function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
        let dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
        let dayMarker = startOfDay(framingRange.start);
        let endMarker = framingRange.end;
        let instanceStarts = [];
        while (dayMarker < endMarker) {
            let instanceStart;
            // if everyday, or this particular day-of-week
            if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
                if (startTime) {
                    instanceStart = dateEnv.add(dayMarker, startTime);
                }
                else {
                    instanceStart = dayMarker;
                }
                instanceStarts.push(instanceStart);
            }
            dayMarker = addDays(dayMarker, 1);
        }
        return instanceStarts;
    }

    const changeHandlerPlugin = createPlugin({
        name: 'change-handler',
        optionChangeHandlers: {
            events(events, context) {
                handleEventSources([events], context);
            },
            eventSources: handleEventSources,
        },
    });
    /*
    BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
    */
    function handleEventSources(inputs, context) {
        let unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
        let newInputs = [];
        for (let input of inputs) {
            let inputFound = false;
            for (let i = 0; i < unfoundSources.length; i += 1) {
                if (unfoundSources[i]._raw === input) {
                    unfoundSources.splice(i, 1); // delete
                    inputFound = true;
                    break;
                }
            }
            if (!inputFound) {
                newInputs.push(input);
            }
        }
        for (let unfoundSource of unfoundSources) {
            context.dispatch({
                type: 'REMOVE_EVENT_SOURCE',
                sourceId: unfoundSource.sourceId,
            });
        }
        for (let newInput of newInputs) {
            context.calendarApi.addEventSource(newInput);
        }
    }

    function handleDateProfile(dateProfile, context) {
        context.emitter.trigger('datesSet', Object.assign(Object.assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), { view: context.viewApi }));
    }

    function handleEventStore(eventStore, context) {
        let { emitter } = context;
        if (emitter.hasHandlers('eventsSet')) {
            emitter.trigger('eventsSet', buildEventApis(eventStore, context));
        }
    }

    /*
    this array is exposed on the root namespace so that UMD plugins can add to it.
    see the rollup-bundles script.
    */
    const globalPlugins = [
        arrayEventSourcePlugin,
        funcEventSourcePlugin,
        jsonFeedEventSourcePlugin,
        simpleRecurringEventsPlugin,
        changeHandlerPlugin,
        createPlugin({
            name: 'misc',
            isLoadingFuncs: [
                (state) => computeEventSourcesLoading(state.eventSources),
            ],
            propSetHandlers: {
                dateProfile: handleDateProfile,
                eventStore: handleEventStore,
            },
        }),
    ];

    class TaskRunner {
        constructor(runTaskOption, drainedOption) {
            this.runTaskOption = runTaskOption;
            this.drainedOption = drainedOption;
            this.queue = [];
            this.delayedRunner = new DelayedRunner(this.drain.bind(this));
        }
        request(task, delay) {
            this.queue.push(task);
            this.delayedRunner.request(delay);
        }
        pause(scope) {
            this.delayedRunner.pause(scope);
        }
        resume(scope, force) {
            this.delayedRunner.resume(scope, force);
        }
        drain() {
            let { queue } = this;
            while (queue.length) {
                let completedTasks = [];
                let task;
                while ((task = queue.shift())) {
                    this.runTask(task);
                    completedTasks.push(task);
                }
                this.drained(completedTasks);
            } // keep going, in case new tasks were added in the drained handler
        }
        runTask(task) {
            if (this.runTaskOption) {
                this.runTaskOption(task);
            }
        }
        drained(completedTasks) {
            if (this.drainedOption) {
                this.drainedOption(completedTasks);
            }
        }
    }

    // Computes what the title at the top of the calendarApi should be for this view
    function buildTitle(dateProfile, viewOptions, dateEnv) {
        let range;
        // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
        if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
            range = dateProfile.currentRange;
        }
        else { // for day units or smaller, use the actual day range
            range = dateProfile.activeRange;
        }
        return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
            isEndExclusive: dateProfile.isRangeAllDay,
            defaultSeparator: viewOptions.titleRangeSeparator,
        });
    }
    // Generates the format string that should be used to generate the title for the current date range.
    // Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
    function buildTitleFormat(dateProfile) {
        let { currentRangeUnit } = dateProfile;
        if (currentRangeUnit === 'year') {
            return { year: 'numeric' };
        }
        if (currentRangeUnit === 'month') {
            return { year: 'numeric', month: 'long' }; // like "September 2014"
        }
        let days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
        if (days !== null && days > 1) {
            // multi-day range. shorter, like "Sep 9 - 10 2014"
            return { year: 'numeric', month: 'short', day: 'numeric' };
        }
        // one day. longer, like "September 9 2014"
        return { year: 'numeric', month: 'long', day: 'numeric' };
    }

    // in future refactor, do the redux-style function(state=initial) for initial-state
    // also, whatever is happening in constructor, have it happen in action queue too
    class CalendarDataManager {
        constructor(props) {
            this.computeOptionsData = memoize(this._computeOptionsData);
            this.computeCurrentViewData = memoize(this._computeCurrentViewData);
            this.organizeRawLocales = memoize(organizeRawLocales);
            this.buildLocale = memoize(buildLocale);
            this.buildPluginHooks = buildBuildPluginHooks();
            this.buildDateEnv = memoize(buildDateEnv$1);
            this.buildTheme = memoize(buildTheme);
            this.parseToolbars = memoize(parseToolbars);
            this.buildViewSpecs = memoize(buildViewSpecs);
            this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
            this.buildViewApi = memoize(buildViewApi);
            this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
            this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
            this.buildEventUiBases = memoize(buildEventUiBases);
            this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
            this.buildTitle = memoize(buildTitle);
            this.emitter = new Emitter();
            this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
            this.currentCalendarOptionsInput = {};
            this.currentCalendarOptionsRefined = {};
            this.currentViewOptionsInput = {};
            this.currentViewOptionsRefined = {};
            this.currentCalendarOptionsRefiners = {};
            this.getCurrentData = () => this.data;
            this.dispatch = (action) => {
                this.actionRunner.request(action); // protects against recursive calls to _handleAction
            };
            this.props = props;
            this.actionRunner.pause();
            let dynamicOptionOverrides = {};
            let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
            let currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
            let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
            // wire things up
            // TODO: not DRY
            props.calendarApi.currentDataManager = this;
            this.emitter.setThisContext(props.calendarApi);
            this.emitter.setOptions(currentViewData.options);
            let currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
            let dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
            if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
                currentDate = dateProfile.currentRange.start;
            }
            let calendarContext = {
                dateEnv: optionsData.dateEnv,
                options: optionsData.calendarOptions,
                pluginHooks: optionsData.pluginHooks,
                calendarApi: props.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData,
            };
            // needs to be after setThisContext
            for (let callback of optionsData.pluginHooks.contextInit) {
                callback(calendarContext);
            }
            // NOT DRY
            let eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
            let initialState = {
                dynamicOptionOverrides,
                currentViewType,
                currentDate,
                dateProfile,
                businessHours: this.parseContextBusinessHours(calendarContext),
                eventSources,
                eventUiBases: {},
                eventStore: createEmptyEventStore(),
                renderableEventStore: createEmptyEventStore(),
                dateSelection: null,
                eventSelection: '',
                eventDrag: null,
                eventResize: null,
                selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig,
            };
            let contextAndState = Object.assign(Object.assign({}, calendarContext), initialState);
            for (let reducer of optionsData.pluginHooks.reducers) {
                Object.assign(initialState, reducer(null, null, contextAndState));
            }
            if (computeIsLoading(initialState, calendarContext)) {
                this.emitter.trigger('loading', true); // NOT DRY
            }
            this.state = initialState;
            this.updateData();
            this.actionRunner.resume();
        }
        resetOptions(optionOverrides, append) {
            let { props } = this;
            props.optionOverrides = append
                ? Object.assign(Object.assign({}, props.optionOverrides), optionOverrides) : optionOverrides;
            this.actionRunner.request({
                type: 'NOTHING',
            });
        }
        _handleAction(action) {
            let { props, state, emitter } = this;
            let dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
            let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
            let currentViewType = reduceViewType(state.currentViewType, action);
            let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
            // wire things up
            // TODO: not DRY
            props.calendarApi.currentDataManager = this;
            emitter.setThisContext(props.calendarApi);
            emitter.setOptions(currentViewData.options);
            let calendarContext = {
                dateEnv: optionsData.dateEnv,
                options: optionsData.calendarOptions,
                pluginHooks: optionsData.pluginHooks,
                calendarApi: props.calendarApi,
                dispatch: this.dispatch,
                emitter,
                getCurrentData: this.getCurrentData,
            };
            let { currentDate, dateProfile } = state;
            if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) { // hack
                dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
            }
            currentDate = reduceCurrentDate(currentDate, action);
            dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
            if (action.type === 'PREV' || // TODO: move this logic into DateProfileGenerator
                action.type === 'NEXT' || // "
                !rangeContainsMarker(dateProfile.currentRange, currentDate)) {
                currentDate = dateProfile.currentRange.start;
            }
            let eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
            let eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
            let isEventsLoading = computeEventSourcesLoading(eventSources); // BAD. also called in this func in computeIsLoading
            let renderableEventStore = (isEventsLoading && !currentViewData.options.progressiveEventRendering) ?
                (state.renderableEventStore || eventStore) : // try from previous state
                eventStore;
            let { eventUiSingleBase, selectionConfig } = this.buildViewUiProps(calendarContext); // will memoize obj
            let eventUiBySource = this.buildEventUiBySource(eventSources);
            let eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
            let newState = {
                dynamicOptionOverrides,
                currentViewType,
                currentDate,
                dateProfile,
                eventSources,
                eventStore,
                renderableEventStore,
                selectionConfig,
                eventUiBases,
                businessHours: this.parseContextBusinessHours(calendarContext),
                dateSelection: reduceDateSelection(state.dateSelection, action),
                eventSelection: reduceSelectedEvent(state.eventSelection, action),
                eventDrag: reduceEventDrag(state.eventDrag, action),
                eventResize: reduceEventResize(state.eventResize, action),
            };
            let contextAndState = Object.assign(Object.assign({}, calendarContext), newState);
            for (let reducer of optionsData.pluginHooks.reducers) {
                Object.assign(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value
            }
            let wasLoading = computeIsLoading(state, calendarContext);
            let isLoading = computeIsLoading(newState, calendarContext);
            // TODO: use propSetHandlers in plugin system
            if (!wasLoading && isLoading) {
                emitter.trigger('loading', true);
            }
            else if (wasLoading && !isLoading) {
                emitter.trigger('loading', false);
            }
            this.state = newState;
            if (props.onAction) {
                props.onAction(action);
            }
        }
        updateData() {
            let { props, state } = this;
            let oldData = this.data;
            let optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
            let currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
            let data = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv), calendarApi: props.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, optionsData), currentViewData), state);
            let changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
            let oldCalendarOptions = oldData && oldData.calendarOptions;
            let newCalendarOptions = optionsData.calendarOptions;
            if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
                if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
                    // hack
                    state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
                    state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
                }
                for (let optionName in changeHandlers) {
                    if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
                        changeHandlers[optionName](newCalendarOptions[optionName], data);
                    }
                }
            }
            if (props.onData) {
                props.onData(data);
            }
        }
        _computeOptionsData(optionOverrides, dynamicOptionOverrides, calendarApi) {
            // TODO: blacklist options that are handled by optionChangeHandlers
            let { refinedOptions, pluginHooks, localeDefaults, availableLocaleData, extra, } = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides);
            warnUnknownOptions(extra);
            let dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
            let viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
            let theme = this.buildTheme(refinedOptions, pluginHooks);
            let toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
            return {
                calendarOptions: refinedOptions,
                pluginHooks,
                dateEnv,
                viewSpecs,
                theme,
                toolbarConfig,
                localeDefaults,
                availableRawLocales: availableLocaleData.map,
            };
        }
        // always called from behind a memoizer
        processRawCalendarOptions(optionOverrides, dynamicOptionOverrides) {
            let { locales, locale } = mergeRawOptions([
                BASE_OPTION_DEFAULTS,
                optionOverrides,
                dynamicOptionOverrides,
            ]);
            let availableLocaleData = this.organizeRawLocales(locales);
            let availableRawLocales = availableLocaleData.map;
            let localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
            let pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
            let refiners = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
            let extra = {};
            let raw = mergeRawOptions([
                BASE_OPTION_DEFAULTS,
                localeDefaults,
                optionOverrides,
                dynamicOptionOverrides,
            ]);
            let refined = {};
            let currentRaw = this.currentCalendarOptionsInput;
            let currentRefined = this.currentCalendarOptionsRefined;
            let anyChanges = false;
            for (let optionName in raw) {
                if (optionName !== 'plugins') { // because plugins is special-cased
                    if (raw[optionName] === currentRaw[optionName] ||
                        (COMPLEX_OPTION_COMPARATORS[optionName] &&
                            (optionName in currentRaw) &&
                            COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName]))) {
                        refined[optionName] = currentRefined[optionName];
                    }
                    else if (refiners[optionName]) {
                        refined[optionName] = refiners[optionName](raw[optionName]);
                        anyChanges = true;
                    }
                    else {
                        extra[optionName] = currentRaw[optionName];
                    }
                }
            }
            if (anyChanges) {
                this.currentCalendarOptionsInput = raw;
                this.currentCalendarOptionsRefined = refined;
            }
            return {
                rawOptions: this.currentCalendarOptionsInput,
                refinedOptions: this.currentCalendarOptionsRefined,
                pluginHooks,
                availableLocaleData,
                localeDefaults,
                extra,
            };
        }
        _computeCurrentViewData(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
            let viewSpec = optionsData.viewSpecs[viewType];
            if (!viewSpec) {
                throw new Error(`viewType "${viewType}" is not available. Please make sure you've loaded all neccessary plugins`);
            }
            let { refinedOptions, extra } = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides);
            warnUnknownOptions(extra);
            let dateProfileGenerator = this.buildDateProfileGenerator({
                dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
                duration: viewSpec.duration,
                durationUnit: viewSpec.durationUnit,
                usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
                dateEnv: optionsData.dateEnv,
                calendarApi: this.props.calendarApi,
                slotMinTime: refinedOptions.slotMinTime,
                slotMaxTime: refinedOptions.slotMaxTime,
                showNonCurrentDates: refinedOptions.showNonCurrentDates,
                dayCount: refinedOptions.dayCount,
                dateAlignment: refinedOptions.dateAlignment,
                dateIncrement: refinedOptions.dateIncrement,
                hiddenDays: refinedOptions.hiddenDays,
                weekends: refinedOptions.weekends,
                nowInput: refinedOptions.now,
                validRangeInput: refinedOptions.validRange,
                visibleRangeInput: refinedOptions.visibleRange,
                monthMode: refinedOptions.monthMode,
                fixedWeekCount: refinedOptions.fixedWeekCount,
            });
            let viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
            return { viewSpec, options: refinedOptions, dateProfileGenerator, viewApi };
        }
        processRawViewOptions(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
            let raw = mergeRawOptions([
                BASE_OPTION_DEFAULTS,
                viewSpec.optionDefaults,
                localeDefaults,
                optionOverrides,
                viewSpec.optionOverrides,
                dynamicOptionOverrides,
            ]);
            let refiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
            let refined = {};
            let currentRaw = this.currentViewOptionsInput;
            let currentRefined = this.currentViewOptionsRefined;
            let anyChanges = false;
            let extra = {};
            for (let optionName in raw) {
                if (raw[optionName] === currentRaw[optionName] ||
                    (COMPLEX_OPTION_COMPARATORS[optionName] &&
                        COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], currentRaw[optionName]))) {
                    refined[optionName] = currentRefined[optionName];
                }
                else {
                    if (raw[optionName] === this.currentCalendarOptionsInput[optionName] ||
                        (COMPLEX_OPTION_COMPARATORS[optionName] &&
                            COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], this.currentCalendarOptionsInput[optionName]))) {
                        if (optionName in this.currentCalendarOptionsRefined) { // might be an "extra" prop
                            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
                        }
                    }
                    else if (refiners[optionName]) {
                        refined[optionName] = refiners[optionName](raw[optionName]);
                    }
                    else {
                        extra[optionName] = raw[optionName];
                    }
                    anyChanges = true;
                }
            }
            if (anyChanges) {
                this.currentViewOptionsInput = raw;
                this.currentViewOptionsRefined = refined;
            }
            return {
                rawOptions: this.currentViewOptionsInput,
                refinedOptions: this.currentViewOptionsRefined,
                extra,
            };
        }
    }
    function buildDateEnv$1(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
        let locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
        return new DateEnv({
            calendarSystem: 'gregory',
            timeZone,
            namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
            locale,
            weekNumberCalculation,
            firstDay,
            weekText,
            cmdFormatter: pluginHooks.cmdFormatter,
            defaultSeparator,
        });
    }
    function buildTheme(options, pluginHooks) {
        let ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
        return new ThemeClass(options);
    }
    function buildDateProfileGenerator(props) {
        let DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
        return new DateProfileGeneratorClass(props);
    }
    function buildViewApi(type, getCurrentData, dateEnv) {
        return new ViewImpl(type, getCurrentData, dateEnv);
    }
    function buildEventUiBySource(eventSources) {
        return mapHash(eventSources, (eventSource) => eventSource.ui);
    }
    function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
        let eventUiBases = { '': eventUiSingleBase };
        for (let defId in eventDefs) {
            let def = eventDefs[defId];
            if (def.sourceId && eventUiBySource[def.sourceId]) {
                eventUiBases[defId] = eventUiBySource[def.sourceId];
            }
        }
        return eventUiBases;
    }
    function buildViewUiProps(calendarContext) {
        let { options } = calendarContext;
        return {
            eventUiSingleBase: createEventUi({
                display: options.eventDisplay,
                editable: options.editable,
                startEditable: options.eventStartEditable,
                durationEditable: options.eventDurationEditable,
                constraint: options.eventConstraint,
                overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
                allow: options.eventAllow,
                backgroundColor: options.eventBackgroundColor,
                borderColor: options.eventBorderColor,
                textColor: options.eventTextColor,
                color: options.eventColor,
                // classNames: options.eventClassNames // render hook will handle this
            }, calendarContext),
            selectionConfig: createEventUi({
                constraint: options.selectConstraint,
                overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
                allow: options.selectAllow,
            }, calendarContext),
        };
    }
    function computeIsLoading(state, context) {
        for (let isLoadingFunc of context.pluginHooks.isLoadingFuncs) {
            if (isLoadingFunc(state)) {
                return true;
            }
        }
        return false;
    }
    function parseContextBusinessHours(calendarContext) {
        return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
    }
    function warnUnknownOptions(options, viewName) {
        for (let optionName in options) {
            console.warn(`Unknown option '${optionName}'` +
                (viewName ? ` for view '${viewName}'` : ''));
        }
    }

    class ToolbarSection extends BaseComponent {
        render() {
            let children = this.props.widgetGroups.map((widgetGroup) => this.renderWidgetGroup(widgetGroup));
            return h('div', { className: 'fc-toolbar-chunk' }, ...children);
        }
        renderWidgetGroup(widgetGroup) {
            let { props } = this;
            let { theme } = this.context;
            let children = [];
            let isOnlyButtons = true;
            for (let widget of widgetGroup) {
                let { buttonName, buttonClick, buttonText, buttonIcon, buttonHint } = widget;
                if (buttonName === 'title') {
                    isOnlyButtons = false;
                    children.push(h("h2", { className: "fc-toolbar-title", id: props.titleId }, props.title));
                }
                else {
                    let isPressed = buttonName === props.activeButton;
                    let isDisabled = (!props.isTodayEnabled && buttonName === 'today') ||
                        (!props.isPrevEnabled && buttonName === 'prev') ||
                        (!props.isNextEnabled && buttonName === 'next');
                    let buttonClasses = [`fc-${buttonName}-button`, theme.getClass('button')];
                    if (isPressed) {
                        buttonClasses.push(theme.getClass('buttonActive'));
                    }
                    children.push(h("button", { type: "button", title: typeof buttonHint === 'function' ? buttonHint(props.navUnit) : buttonHint, disabled: isDisabled, "aria-pressed": isPressed, className: buttonClasses.join(' '), onClick: buttonClick }, buttonText || (buttonIcon ? h("span", { className: buttonIcon }) : '')));
                }
            }
            if (children.length > 1) {
                let groupClassName = (isOnlyButtons && theme.getClass('buttonGroup')) || '';
                return h('div', { className: groupClassName }, ...children);
            }
            return children[0];
        }
    }

    class Toolbar extends BaseComponent {
        render() {
            let { model, extraClassName } = this.props;
            let forceLtr = false;
            let startContent;
            let endContent;
            let sectionWidgets = model.sectionWidgets;
            let centerContent = sectionWidgets.center;
            if (sectionWidgets.left) {
                forceLtr = true;
                startContent = sectionWidgets.left;
            }
            else {
                startContent = sectionWidgets.start;
            }
            if (sectionWidgets.right) {
                forceLtr = true;
                endContent = sectionWidgets.right;
            }
            else {
                endContent = sectionWidgets.end;
            }
            let classNames = [
                extraClassName || '',
                'fc-toolbar',
                forceLtr ? 'fc-toolbar-ltr' : '',
            ];
            return (h("div", { className: classNames.join(' ') },
                this.renderSection('start', startContent || []),
                this.renderSection('center', centerContent || []),
                this.renderSection('end', endContent || [])));
        }
        renderSection(key, widgetGroups) {
            let { props } = this;
            return (h(ToolbarSection, { key: key, widgetGroups: widgetGroups, title: props.title, navUnit: props.navUnit, activeButton: props.activeButton, isTodayEnabled: props.isTodayEnabled, isPrevEnabled: props.isPrevEnabled, isNextEnabled: props.isNextEnabled, titleId: props.titleId }));
        }
    }

    // TODO: do function component?
    class ViewContainer extends BaseComponent {
        constructor() {
            super(...arguments);
            this.state = {
                availableWidth: null,
            };
            this.handleEl = (el) => {
                this.el = el;
                setRef(this.props.elRef, el);
                this.updateAvailableWidth();
            };
            this.handleResize = () => {
                this.updateAvailableWidth();
            };
        }
        render() {
            let { props, state } = this;
            let { aspectRatio } = props;
            let classNames = [
                'fc-view-harness',
                (aspectRatio || props.liquid || props.height)
                    ? 'fc-view-harness-active' // harness controls the height
                    : 'fc-view-harness-passive', // let the view do the height
            ];
            let height = '';
            let paddingBottom = '';
            if (aspectRatio) {
                if (state.availableWidth !== null) {
                    height = state.availableWidth / aspectRatio;
                }
                else {
                    // while waiting to know availableWidth, we can't set height to *zero*
                    // because will cause lots of unnecessary scrollbars within scrollgrid.
                    // BETTER: don't start rendering ANYTHING yet until we know container width
                    // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
                    paddingBottom = `${(1 / aspectRatio) * 100}%`;
                }
            }
            else {
                height = props.height || '';
            }
            return (h("div", { "aria-labelledby": props.labeledById, ref: this.handleEl, className: classNames.join(' '), style: { height, paddingBottom } }, props.children));
        }
        componentDidMount() {
            this.context.addResizeHandler(this.handleResize);
        }
        componentWillUnmount() {
            this.context.removeResizeHandler(this.handleResize);
        }
        updateAvailableWidth() {
            if (this.el && // needed. but why?
                this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
            ) {
                this.setState({ availableWidth: this.el.offsetWidth });
            }
        }
    }

    /*
    Detects when the user clicks on an event within a DateComponent
    */
    class EventClicking extends Interaction {
        constructor(settings) {
            super(settings);
            this.handleSegClick = (ev, segEl) => {
                let { component } = this;
                let { context } = component;
                let seg = getElSeg(segEl);
                if (seg && // might be the <div> surrounding the more link
                    component.isValidSegDownEl(ev.target)) {
                    // our way to simulate a link click for elements that can't be <a> tags
                    // grab before trigger fired in case trigger trashes DOM thru rerendering
                    let hasUrlContainer = elementClosest(ev.target, '.fc-event-forced-url');
                    let url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
                    context.emitter.trigger('eventClick', {
                        el: segEl,
                        event: new EventImpl(component.context, seg.eventRange.def, seg.eventRange.instance),
                        jsEvent: ev,
                        view: context.viewApi,
                    });
                    if (url && !ev.defaultPrevented) {
                        window.location.href = url;
                    }
                }
            };
            this.destroy = listenBySelector(settings.el, 'click', '.fc-event', // on both fg and bg events
            this.handleSegClick);
        }
    }

    /*
    Triggers events and adds/removes core classNames when the user's pointer
    enters/leaves event-elements of a component.
    */
    class EventHovering extends Interaction {
        constructor(settings) {
            super(settings);
            // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
            this.handleEventElRemove = (el) => {
                if (el === this.currentSegEl) {
                    this.handleSegLeave(null, this.currentSegEl);
                }
            };
            this.handleSegEnter = (ev, segEl) => {
                if (getElSeg(segEl)) { // TODO: better way to make sure not hovering over more+ link or its wrapper
                    this.currentSegEl = segEl;
                    this.triggerEvent('eventMouseEnter', ev, segEl);
                }
            };
            this.handleSegLeave = (ev, segEl) => {
                if (this.currentSegEl) {
                    this.currentSegEl = null;
                    this.triggerEvent('eventMouseLeave', ev, segEl);
                }
            };
            this.removeHoverListeners = listenToHoverBySelector(settings.el, '.fc-event', // on both fg and bg events
            this.handleSegEnter, this.handleSegLeave);
        }
        destroy() {
            this.removeHoverListeners();
        }
        triggerEvent(publicEvName, ev, segEl) {
            let { component } = this;
            let { context } = component;
            let seg = getElSeg(segEl);
            if (!ev || component.isValidSegDownEl(ev.target)) {
                context.emitter.trigger(publicEvName, {
                    el: segEl,
                    event: new EventImpl(context, seg.eventRange.def, seg.eventRange.instance),
                    jsEvent: ev,
                    view: context.viewApi,
                });
            }
        }
    }

    class CalendarContent extends PureComponent {
        constructor() {
            super(...arguments);
            this.buildViewContext = memoize(buildViewContext);
            this.buildViewPropTransformers = memoize(buildViewPropTransformers);
            this.buildToolbarProps = memoize(buildToolbarProps);
            this.headerRef = y();
            this.footerRef = y();
            this.interactionsStore = {};
            // eslint-disable-next-line
            this.state = {
                viewLabelId: getUniqueDomId(),
            };
            // Component Registration
            // -----------------------------------------------------------------------------------------------------------------
            this.registerInteractiveComponent = (component, settingsInput) => {
                let settings = parseInteractionSettings(component, settingsInput);
                let DEFAULT_INTERACTIONS = [
                    EventClicking,
                    EventHovering,
                ];
                let interactionClasses = DEFAULT_INTERACTIONS.concat(this.props.pluginHooks.componentInteractions);
                let interactions = interactionClasses.map((TheInteractionClass) => new TheInteractionClass(settings));
                this.interactionsStore[component.uid] = interactions;
                interactionSettingsStore[component.uid] = settings;
            };
            this.unregisterInteractiveComponent = (component) => {
                let listeners = this.interactionsStore[component.uid];
                if (listeners) {
                    for (let listener of listeners) {
                        listener.destroy();
                    }
                    delete this.interactionsStore[component.uid];
                }
                delete interactionSettingsStore[component.uid];
            };
            // Resizing
            // -----------------------------------------------------------------------------------------------------------------
            this.resizeRunner = new DelayedRunner(() => {
                this.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?
                this.props.emitter.trigger('windowResize', { view: this.props.viewApi });
            });
            this.handleWindowResize = (ev) => {
                let { options } = this.props;
                if (options.handleWindowResize &&
                    ev.target === window // avoid jqui events
                ) {
                    this.resizeRunner.request(options.windowResizeDelay);
                }
            };
        }
        /*
        renders INSIDE of an outer div
        */
        render() {
            let { props } = this;
            let { toolbarConfig, options } = props;
            let toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, getNow(props.options.now, props.dateEnv), // TODO: use NowTimer????
            props.viewTitle);
            let viewVGrow = false;
            let viewHeight = '';
            let viewAspectRatio;
            if (props.isHeightAuto || props.forPrint) {
                viewHeight = '';
            }
            else if (options.height != null) {
                viewVGrow = true;
            }
            else if (options.contentHeight != null) {
                viewHeight = options.contentHeight;
            }
            else {
                viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
            }
            let viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
            let viewLabelId = (toolbarConfig.header && toolbarConfig.header.hasTitle)
                ? this.state.viewLabelId
                : '';
            return (h(ViewContextType.Provider, { value: viewContext },
                toolbarConfig.header && (h(Toolbar, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: toolbarConfig.header, titleId: viewLabelId }, toolbarProps))),
                h(ViewContainer, { liquid: viewVGrow, height: viewHeight, aspectRatio: viewAspectRatio, labeledById: viewLabelId },
                    this.renderView(props),
                    this.buildAppendContent()),
                toolbarConfig.footer && (h(Toolbar, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: toolbarConfig.footer, titleId: "" }, toolbarProps)))));
        }
        componentDidMount() {
            let { props } = this;
            this.calendarInteractions = props.pluginHooks.calendarInteractions
                .map((CalendarInteractionClass) => new CalendarInteractionClass(props));
            window.addEventListener('resize', this.handleWindowResize);
            let { propSetHandlers } = props.pluginHooks;
            for (let propName in propSetHandlers) {
                propSetHandlers[propName](props[propName], props);
            }
        }
        componentDidUpdate(prevProps) {
            let { props } = this;
            let { propSetHandlers } = props.pluginHooks;
            for (let propName in propSetHandlers) {
                if (props[propName] !== prevProps[propName]) {
                    propSetHandlers[propName](props[propName], props);
                }
            }
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.handleWindowResize);
            this.resizeRunner.clear();
            for (let interaction of this.calendarInteractions) {
                interaction.destroy();
            }
            this.props.emitter.trigger('_unmount');
        }
        buildAppendContent() {
            let { props } = this;
            let children = props.pluginHooks.viewContainerAppends.map((buildAppendContent) => buildAppendContent(props));
            return h(p, {}, ...children);
        }
        renderView(props) {
            let { pluginHooks } = props;
            let { viewSpec } = props;
            let viewProps = {
                dateProfile: props.dateProfile,
                businessHours: props.businessHours,
                eventStore: props.renderableEventStore,
                eventUiBases: props.eventUiBases,
                dateSelection: props.dateSelection,
                eventSelection: props.eventSelection,
                eventDrag: props.eventDrag,
                eventResize: props.eventResize,
                isHeightAuto: props.isHeightAuto,
                forPrint: props.forPrint,
            };
            let transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
            for (let transformer of transformers) {
                Object.assign(viewProps, transformer.transform(viewProps, props));
            }
            let ViewComponent = viewSpec.component;
            return (h(ViewComponent, Object.assign({}, viewProps)));
        }
    }
    function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
        // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
        let todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason
        let prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
        let nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
        return {
            title,
            activeButton: viewSpec.type,
            navUnit: viewSpec.singleUnit,
            isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
            isPrevEnabled: prevInfo.isValid,
            isNextEnabled: nextInfo.isValid,
        };
    }
    // Plugin
    // -----------------------------------------------------------------------------------------------------------------
    function buildViewPropTransformers(theClasses) {
        return theClasses.map((TheClass) => new TheClass());
    }

    class Calendar extends CalendarImpl {
        constructor(el, optionOverrides = {}) {
            super();
            this.isRendering = false;
            this.isRendered = false;
            this.currentClassNames = [];
            this.customContentRenderId = 0;
            this.handleAction = (action) => {
                // actions we know we want to render immediately
                switch (action.type) {
                    case 'SET_EVENT_DRAG':
                    case 'SET_EVENT_RESIZE':
                        this.renderRunner.tryDrain();
                }
            };
            this.handleData = (data) => {
                this.currentData = data;
                this.renderRunner.request(data.calendarOptions.rerenderDelay);
            };
            this.handleRenderRequest = () => {
                if (this.isRendering) {
                    this.isRendered = true;
                    let { currentData } = this;
                    flushSync(() => {
                        P$1(h(CalendarRoot, { options: currentData.calendarOptions, theme: currentData.theme, emitter: currentData.emitter }, (classNames, height, isHeightAuto, forPrint) => {
                            this.setClassNames(classNames);
                            this.setHeight(height);
                            return (h(RenderId.Provider, { value: this.customContentRenderId },
                                h(CalendarContent, Object.assign({ isHeightAuto: isHeightAuto, forPrint: forPrint }, currentData))));
                        }), this.el);
                    });
                }
                else if (this.isRendered) {
                    this.isRendered = false;
                    P$1(null, this.el);
                    this.setClassNames([]);
                    this.setHeight('');
                }
            };
            this.el = el;
            this.renderRunner = new DelayedRunner(this.handleRenderRequest);
            new CalendarDataManager({
                optionOverrides,
                calendarApi: this,
                onAction: this.handleAction,
                onData: this.handleData,
            });
        }
        render() {
            let wasRendering = this.isRendering;
            if (!wasRendering) {
                this.isRendering = true;
            }
            else {
                this.customContentRenderId += 1;
            }
            this.renderRunner.request();
            if (wasRendering) {
                this.updateSize();
            }
        }
        destroy() {
            if (this.isRendering) {
                this.isRendering = false;
                this.renderRunner.request();
            }
        }
        updateSize() {
            flushSync(() => {
                super.updateSize();
            });
        }
        batchRendering(func) {
            this.renderRunner.pause('batchRendering');
            func();
            this.renderRunner.resume('batchRendering');
        }
        pauseRendering() {
            this.renderRunner.pause('pauseRendering');
        }
        resumeRendering() {
            this.renderRunner.resume('pauseRendering', true);
        }
        resetOptions(optionOverrides, append) {
            this.currentDataManager.resetOptions(optionOverrides, append);
        }
        setClassNames(classNames) {
            if (!isArraysEqual(classNames, this.currentClassNames)) {
                let { classList } = this.el;
                for (let className of this.currentClassNames) {
                    classList.remove(className);
                }
                for (let className of classNames) {
                    classList.add(className);
                }
                this.currentClassNames = classNames;
            }
        }
        setHeight(height) {
            applyStyleProp(this.el, 'height', height);
        }
    }

    function formatDate(dateInput, options = {}) {
        let dateEnv = buildDateEnv(options);
        let formatter = createFormatter(options);
        let dateMeta = dateEnv.createMarkerMeta(dateInput);
        if (!dateMeta) { // TODO: warning?
            return '';
        }
        return dateEnv.format(dateMeta.marker, formatter, {
            forcedTzo: dateMeta.forcedTzo,
        });
    }
    function formatRange(startInput, endInput, options) {
        let dateEnv = buildDateEnv(typeof options === 'object' && options ? options : {}); // pass in if non-null object
        let formatter = createFormatter(options);
        let startMeta = dateEnv.createMarkerMeta(startInput);
        let endMeta = dateEnv.createMarkerMeta(endInput);
        if (!startMeta || !endMeta) { // TODO: warning?
            return '';
        }
        return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
            forcedStartTzo: startMeta.forcedTzo,
            forcedEndTzo: endMeta.forcedTzo,
            isEndExclusive: options.isEndExclusive,
            defaultSeparator: BASE_OPTION_DEFAULTS.defaultRangeSeparator,
        });
    }
    // TODO: more DRY and optimized
    function buildDateEnv(settings) {
        let locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
        return new DateEnv(Object.assign(Object.assign({ timeZone: BASE_OPTION_DEFAULTS.timeZone, calendarSystem: 'gregory' }, settings), { locale }));
    }

    // HELPERS
    /*
    if nextDayThreshold is specified, slicing is done in an all-day fashion.
    you can get nextDayThreshold from context.nextDayThreshold
    */
    function sliceEvents(props, allDay) {
        return sliceEventStore(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
    }

    const version = '6.0.2';

    config.touchMouseIgnoreWait = 500;
    let ignoreMouseDepth = 0;
    let listenerCnt = 0;
    let isWindowTouchMoveCancelled = false;
    /*
    Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
    Tracks when the pointer "drags" on a certain element, meaning down+move+up.

    Also, tracks if there was touch-scrolling.
    Also, can prevent touch-scrolling from happening.
    Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

    emits:
    - pointerdown
    - pointermove
    - pointerup
    */
    class PointerDragging {
        constructor(containerEl) {
            this.subjectEl = null;
            // options that can be directly assigned by caller
            this.selector = ''; // will cause subjectEl in all emitted events to be this element
            this.handleSelector = '';
            this.shouldIgnoreMove = false;
            this.shouldWatchScroll = true; // for simulating pointermove on scroll
            // internal states
            this.isDragging = false;
            this.isTouchDragging = false;
            this.wasTouchScroll = false;
            // Mouse
            // ----------------------------------------------------------------------------------------------------
            this.handleMouseDown = (ev) => {
                if (!this.shouldIgnoreMouse() &&
                    isPrimaryMouseButton(ev) &&
                    this.tryStart(ev)) {
                    let pev = this.createEventFromMouse(ev, true);
                    this.emitter.trigger('pointerdown', pev);
                    this.initScrollWatch(pev);
                    if (!this.shouldIgnoreMove) {
                        document.addEventListener('mousemove', this.handleMouseMove);
                    }
                    document.addEventListener('mouseup', this.handleMouseUp);
                }
            };
            this.handleMouseMove = (ev) => {
                let pev = this.createEventFromMouse(ev);
                this.recordCoords(pev);
                this.emitter.trigger('pointermove', pev);
            };
            this.handleMouseUp = (ev) => {
                document.removeEventListener('mousemove', this.handleMouseMove);
                document.removeEventListener('mouseup', this.handleMouseUp);
                this.emitter.trigger('pointerup', this.createEventFromMouse(ev));
                this.cleanup(); // call last so that pointerup has access to props
            };
            // Touch
            // ----------------------------------------------------------------------------------------------------
            this.handleTouchStart = (ev) => {
                if (this.tryStart(ev)) {
                    this.isTouchDragging = true;
                    let pev = this.createEventFromTouch(ev, true);
                    this.emitter.trigger('pointerdown', pev);
                    this.initScrollWatch(pev);
                    // unlike mouse, need to attach to target, not document
                    // https://stackoverflow.com/a/45760014
                    let targetEl = ev.target;
                    if (!this.shouldIgnoreMove) {
                        targetEl.addEventListener('touchmove', this.handleTouchMove);
                    }
                    targetEl.addEventListener('touchend', this.handleTouchEnd);
                    targetEl.addEventListener('touchcancel', this.handleTouchEnd); // treat it as a touch end
                    // attach a handler to get called when ANY scroll action happens on the page.
                    // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
                    // http://stackoverflow.com/a/32954565/96342
                    window.addEventListener('scroll', this.handleTouchScroll, true);
                }
            };
            this.handleTouchMove = (ev) => {
                let pev = this.createEventFromTouch(ev);
                this.recordCoords(pev);
                this.emitter.trigger('pointermove', pev);
            };
            this.handleTouchEnd = (ev) => {
                if (this.isDragging) { // done to guard against touchend followed by touchcancel
                    let targetEl = ev.target;
                    targetEl.removeEventListener('touchmove', this.handleTouchMove);
                    targetEl.removeEventListener('touchend', this.handleTouchEnd);
                    targetEl.removeEventListener('touchcancel', this.handleTouchEnd);
                    window.removeEventListener('scroll', this.handleTouchScroll, true); // useCaptured=true
                    this.emitter.trigger('pointerup', this.createEventFromTouch(ev));
                    this.cleanup(); // call last so that pointerup has access to props
                    this.isTouchDragging = false;
                    startIgnoringMouse();
                }
            };
            this.handleTouchScroll = () => {
                this.wasTouchScroll = true;
            };
            this.handleScroll = (ev) => {
                if (!this.shouldIgnoreMove) {
                    let pageX = (window.pageXOffset - this.prevScrollX) + this.prevPageX;
                    let pageY = (window.pageYOffset - this.prevScrollY) + this.prevPageY;
                    this.emitter.trigger('pointermove', {
                        origEvent: ev,
                        isTouch: this.isTouchDragging,
                        subjectEl: this.subjectEl,
                        pageX,
                        pageY,
                        deltaX: pageX - this.origPageX,
                        deltaY: pageY - this.origPageY,
                    });
                }
            };
            this.containerEl = containerEl;
            this.emitter = new Emitter();
            containerEl.addEventListener('mousedown', this.handleMouseDown);
            containerEl.addEventListener('touchstart', this.handleTouchStart, { passive: true });
            listenerCreated();
        }
        destroy() {
            this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
            this.containerEl.removeEventListener('touchstart', this.handleTouchStart, { passive: true });
            listenerDestroyed();
        }
        tryStart(ev) {
            let subjectEl = this.querySubjectEl(ev);
            let downEl = ev.target;
            if (subjectEl &&
                (!this.handleSelector || elementClosest(downEl, this.handleSelector))) {
                this.subjectEl = subjectEl;
                this.isDragging = true; // do this first so cancelTouchScroll will work
                this.wasTouchScroll = false;
                return true;
            }
            return false;
        }
        cleanup() {
            isWindowTouchMoveCancelled = false;
            this.isDragging = false;
            this.subjectEl = null;
            // keep wasTouchScroll around for later access
            this.destroyScrollWatch();
        }
        querySubjectEl(ev) {
            if (this.selector) {
                return elementClosest(ev.target, this.selector);
            }
            return this.containerEl;
        }
        shouldIgnoreMouse() {
            return ignoreMouseDepth || this.isTouchDragging;
        }
        // can be called by user of this class, to cancel touch-based scrolling for the current drag
        cancelTouchScroll() {
            if (this.isDragging) {
                isWindowTouchMoveCancelled = true;
            }
        }
        // Scrolling that simulates pointermoves
        // ----------------------------------------------------------------------------------------------------
        initScrollWatch(ev) {
            if (this.shouldWatchScroll) {
                this.recordCoords(ev);
                window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
            }
        }
        recordCoords(ev) {
            if (this.shouldWatchScroll) {
                this.prevPageX = ev.pageX;
                this.prevPageY = ev.pageY;
                this.prevScrollX = window.pageXOffset;
                this.prevScrollY = window.pageYOffset;
            }
        }
        destroyScrollWatch() {
            if (this.shouldWatchScroll) {
                window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
            }
        }
        // Event Normalization
        // ----------------------------------------------------------------------------------------------------
        createEventFromMouse(ev, isFirst) {
            let deltaX = 0;
            let deltaY = 0;
            // TODO: repeat code
            if (isFirst) {
                this.origPageX = ev.pageX;
                this.origPageY = ev.pageY;
            }
            else {
                deltaX = ev.pageX - this.origPageX;
                deltaY = ev.pageY - this.origPageY;
            }
            return {
                origEvent: ev,
                isTouch: false,
                subjectEl: this.subjectEl,
                pageX: ev.pageX,
                pageY: ev.pageY,
                deltaX,
                deltaY,
            };
        }
        createEventFromTouch(ev, isFirst) {
            let touches = ev.touches;
            let pageX;
            let pageY;
            let deltaX = 0;
            let deltaY = 0;
            // if touch coords available, prefer,
            // because FF would give bad ev.pageX ev.pageY
            if (touches && touches.length) {
                pageX = touches[0].pageX;
                pageY = touches[0].pageY;
            }
            else {
                pageX = ev.pageX;
                pageY = ev.pageY;
            }
            // TODO: repeat code
            if (isFirst) {
                this.origPageX = pageX;
                this.origPageY = pageY;
            }
            else {
                deltaX = pageX - this.origPageX;
                deltaY = pageY - this.origPageY;
            }
            return {
                origEvent: ev,
                isTouch: true,
                subjectEl: this.subjectEl,
                pageX,
                pageY,
                deltaX,
                deltaY,
            };
        }
    }
    // Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
    function isPrimaryMouseButton(ev) {
        return ev.button === 0 && !ev.ctrlKey;
    }
    // Ignoring fake mouse events generated by touch
    // ----------------------------------------------------------------------------------------------------
    function startIgnoringMouse() {
        ignoreMouseDepth += 1;
        setTimeout(() => {
            ignoreMouseDepth -= 1;
        }, config.touchMouseIgnoreWait);
    }
    // We want to attach touchmove as early as possible for Safari
    // ----------------------------------------------------------------------------------------------------
    function listenerCreated() {
        listenerCnt += 1;
        if (listenerCnt === 1) {
            window.addEventListener('touchmove', onWindowTouchMove, { passive: false });
        }
    }
    function listenerDestroyed() {
        listenerCnt -= 1;
        if (!listenerCnt) {
            window.removeEventListener('touchmove', onWindowTouchMove, { passive: false });
        }
    }
    function onWindowTouchMove(ev) {
        if (isWindowTouchMoveCancelled) {
            ev.preventDefault();
        }
    }

    /*
    An effect in which an element follows the movement of a pointer across the screen.
    The moving element is a clone of some other element.
    Must call start + handleMove + stop.
    */
    class ElementMirror {
        constructor() {
            this.isVisible = false; // must be explicitly enabled
            this.sourceEl = null;
            this.mirrorEl = null;
            this.sourceElRect = null; // screen coords relative to viewport
            // options that can be set directly by caller
            this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues
            this.zIndex = 9999;
            this.revertDuration = 0;
        }
        start(sourceEl, pageX, pageY) {
            this.sourceEl = sourceEl;
            this.sourceElRect = this.sourceEl.getBoundingClientRect();
            this.origScreenX = pageX - window.pageXOffset;
            this.origScreenY = pageY - window.pageYOffset;
            this.deltaX = 0;
            this.deltaY = 0;
            this.updateElPosition();
        }
        handleMove(pageX, pageY) {
            this.deltaX = (pageX - window.pageXOffset) - this.origScreenX;
            this.deltaY = (pageY - window.pageYOffset) - this.origScreenY;
            this.updateElPosition();
        }
        // can be called before start
        setIsVisible(bool) {
            if (bool) {
                if (!this.isVisible) {
                    if (this.mirrorEl) {
                        this.mirrorEl.style.display = '';
                    }
                    this.isVisible = bool; // needs to happen before updateElPosition
                    this.updateElPosition(); // because was not updating the position while invisible
                }
            }
            else if (this.isVisible) {
                if (this.mirrorEl) {
                    this.mirrorEl.style.display = 'none';
                }
                this.isVisible = bool;
            }
        }
        // always async
        stop(needsRevertAnimation, callback) {
            let done = () => {
                this.cleanup();
                callback();
            };
            if (needsRevertAnimation &&
                this.mirrorEl &&
                this.isVisible &&
                this.revertDuration && // if 0, transition won't work
                (this.deltaX || this.deltaY) // if same coords, transition won't work
            ) {
                this.doRevertAnimation(done, this.revertDuration);
            }
            else {
                setTimeout(done, 0);
            }
        }
        doRevertAnimation(callback, revertDuration) {
            let mirrorEl = this.mirrorEl;
            let finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
            mirrorEl.style.transition =
                'top ' + revertDuration + 'ms,' +
                    'left ' + revertDuration + 'ms';
            applyStyle(mirrorEl, {
                left: finalSourceElRect.left,
                top: finalSourceElRect.top,
            });
            whenTransitionDone(mirrorEl, () => {
                mirrorEl.style.transition = '';
                callback();
            });
        }
        cleanup() {
            if (this.mirrorEl) {
                removeElement(this.mirrorEl);
                this.mirrorEl = null;
            }
            this.sourceEl = null;
        }
        updateElPosition() {
            if (this.sourceEl && this.isVisible) {
                applyStyle(this.getMirrorEl(), {
                    left: this.sourceElRect.left + this.deltaX,
                    top: this.sourceElRect.top + this.deltaY,
                });
            }
        }
        getMirrorEl() {
            let sourceElRect = this.sourceElRect;
            let mirrorEl = this.mirrorEl;
            if (!mirrorEl) {
                mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
                // we don't want long taps or any mouse interaction causing selection/menus.
                // would use preventSelection(), but that prevents selectstart, causing problems.
                mirrorEl.classList.add('fc-unselectable');
                mirrorEl.classList.add('fc-event-dragging');
                applyStyle(mirrorEl, {
                    position: 'fixed',
                    zIndex: this.zIndex,
                    visibility: '',
                    boxSizing: 'border-box',
                    width: sourceElRect.right - sourceElRect.left,
                    height: sourceElRect.bottom - sourceElRect.top,
                    right: 'auto',
                    bottom: 'auto',
                    margin: 0,
                });
                this.parentNode.appendChild(mirrorEl);
            }
            return mirrorEl;
        }
    }

    /*
    Is a cache for a given element's scroll information (all the info that ScrollController stores)
    in addition the "client rectangle" of the element.. the area within the scrollbars.

    The cache can be in one of two modes:
    - doesListening:false - ignores when the container is scrolled by someone else
    - doesListening:true - watch for scrolling and update the cache
    */
    class ScrollGeomCache extends ScrollController {
        constructor(scrollController, doesListening) {
            super();
            this.handleScroll = () => {
                this.scrollTop = this.scrollController.getScrollTop();
                this.scrollLeft = this.scrollController.getScrollLeft();
                this.handleScrollChange();
            };
            this.scrollController = scrollController;
            this.doesListening = doesListening;
            this.scrollTop = this.origScrollTop = scrollController.getScrollTop();
            this.scrollLeft = this.origScrollLeft = scrollController.getScrollLeft();
            this.scrollWidth = scrollController.getScrollWidth();
            this.scrollHeight = scrollController.getScrollHeight();
            this.clientWidth = scrollController.getClientWidth();
            this.clientHeight = scrollController.getClientHeight();
            this.clientRect = this.computeClientRect(); // do last in case it needs cached values
            if (this.doesListening) {
                this.getEventTarget().addEventListener('scroll', this.handleScroll);
            }
        }
        destroy() {
            if (this.doesListening) {
                this.getEventTarget().removeEventListener('scroll', this.handleScroll);
            }
        }
        getScrollTop() {
            return this.scrollTop;
        }
        getScrollLeft() {
            return this.scrollLeft;
        }
        setScrollTop(top) {
            this.scrollController.setScrollTop(top);
            if (!this.doesListening) {
                // we are not relying on the element to normalize out-of-bounds scroll values
                // so we need to sanitize ourselves
                this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
                this.handleScrollChange();
            }
        }
        setScrollLeft(top) {
            this.scrollController.setScrollLeft(top);
            if (!this.doesListening) {
                // we are not relying on the element to normalize out-of-bounds scroll values
                // so we need to sanitize ourselves
                this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
                this.handleScrollChange();
            }
        }
        getClientWidth() {
            return this.clientWidth;
        }
        getClientHeight() {
            return this.clientHeight;
        }
        getScrollWidth() {
            return this.scrollWidth;
        }
        getScrollHeight() {
            return this.scrollHeight;
        }
        handleScrollChange() {
        }
    }

    class ElementScrollGeomCache extends ScrollGeomCache {
        constructor(el, doesListening) {
            super(new ElementScrollController(el), doesListening);
        }
        getEventTarget() {
            return this.scrollController.el;
        }
        computeClientRect() {
            return computeInnerRect(this.scrollController.el);
        }
    }

    class WindowScrollGeomCache extends ScrollGeomCache {
        constructor(doesListening) {
            super(new WindowScrollController(), doesListening);
        }
        getEventTarget() {
            return window;
        }
        computeClientRect() {
            return {
                left: this.scrollLeft,
                right: this.scrollLeft + this.clientWidth,
                top: this.scrollTop,
                bottom: this.scrollTop + this.clientHeight,
            };
        }
        // the window is the only scroll object that changes it's rectangle relative
        // to the document's topleft as it scrolls
        handleScrollChange() {
            this.clientRect = this.computeClientRect();
        }
    }

    // If available we are using native "performance" API instead of "Date"
    // Read more about it on MDN:
    // https://developer.mozilla.org/en-US/docs/Web/API/Performance
    const getTime = typeof performance === 'function' ? performance.now : Date.now;
    /*
    For a pointer interaction, automatically scrolls certain scroll containers when the pointer
    approaches the edge.

    The caller must call start + handleMove + stop.
    */
    class AutoScroller {
        constructor() {
            // options that can be set by caller
            this.isEnabled = true;
            this.scrollQuery = [window, '.fc-scroller'];
            this.edgeThreshold = 50; // pixels
            this.maxVelocity = 300; // pixels per second
            // internal state
            this.pointerScreenX = null;
            this.pointerScreenY = null;
            this.isAnimating = false;
            this.scrollCaches = null;
            // protect against the initial pointerdown being too close to an edge and starting the scroll
            this.everMovedUp = false;
            this.everMovedDown = false;
            this.everMovedLeft = false;
            this.everMovedRight = false;
            this.animate = () => {
                if (this.isAnimating) { // wasn't cancelled between animation calls
                    let edge = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
                    if (edge) {
                        let now = getTime();
                        this.handleSide(edge, (now - this.msSinceRequest) / 1000);
                        this.requestAnimation(now);
                    }
                    else {
                        this.isAnimating = false; // will stop animation
                    }
                }
            };
        }
        start(pageX, pageY, scrollStartEl) {
            if (this.isEnabled) {
                this.scrollCaches = this.buildCaches(scrollStartEl);
                this.pointerScreenX = null;
                this.pointerScreenY = null;
                this.everMovedUp = false;
                this.everMovedDown = false;
                this.everMovedLeft = false;
                this.everMovedRight = false;
                this.handleMove(pageX, pageY);
            }
        }
        handleMove(pageX, pageY) {
            if (this.isEnabled) {
                let pointerScreenX = pageX - window.pageXOffset;
                let pointerScreenY = pageY - window.pageYOffset;
                let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
                let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
                if (yDelta < 0) {
                    this.everMovedUp = true;
                }
                else if (yDelta > 0) {
                    this.everMovedDown = true;
                }
                if (xDelta < 0) {
                    this.everMovedLeft = true;
                }
                else if (xDelta > 0) {
                    this.everMovedRight = true;
                }
                this.pointerScreenX = pointerScreenX;
                this.pointerScreenY = pointerScreenY;
                if (!this.isAnimating) {
                    this.isAnimating = true;
                    this.requestAnimation(getTime());
                }
            }
        }
        stop() {
            if (this.isEnabled) {
                this.isAnimating = false; // will stop animation
                for (let scrollCache of this.scrollCaches) {
                    scrollCache.destroy();
                }
                this.scrollCaches = null;
            }
        }
        requestAnimation(now) {
            this.msSinceRequest = now;
            requestAnimationFrame(this.animate);
        }
        handleSide(edge, seconds) {
            let { scrollCache } = edge;
            let { edgeThreshold } = this;
            let invDistance = edgeThreshold - edge.distance;
            let velocity = // the closer to the edge, the faster we scroll
             ((invDistance * invDistance) / (edgeThreshold * edgeThreshold)) * // quadratic
                this.maxVelocity * seconds;
            let sign = 1;
            switch (edge.name) {
                case 'left':
                    sign = -1;
                // falls through
                case 'right':
                    scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
                    break;
                case 'top':
                    sign = -1;
                // falls through
                case 'bottom':
                    scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
                    break;
            }
        }
        // left/top are relative to document topleft
        computeBestEdge(left, top) {
            let { edgeThreshold } = this;
            let bestSide = null;
            let scrollCaches = this.scrollCaches || [];
            for (let scrollCache of scrollCaches) {
                let rect = scrollCache.clientRect;
                let leftDist = left - rect.left;
                let rightDist = rect.right - left;
                let topDist = top - rect.top;
                let bottomDist = rect.bottom - top;
                // completely within the rect?
                if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
                    if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() &&
                        (!bestSide || bestSide.distance > topDist)) {
                        bestSide = { scrollCache, name: 'top', distance: topDist };
                    }
                    if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() &&
                        (!bestSide || bestSide.distance > bottomDist)) {
                        bestSide = { scrollCache, name: 'bottom', distance: bottomDist };
                    }
                    if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() &&
                        (!bestSide || bestSide.distance > leftDist)) {
                        bestSide = { scrollCache, name: 'left', distance: leftDist };
                    }
                    if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() &&
                        (!bestSide || bestSide.distance > rightDist)) {
                        bestSide = { scrollCache, name: 'right', distance: rightDist };
                    }
                }
            }
            return bestSide;
        }
        buildCaches(scrollStartEl) {
            return this.queryScrollEls(scrollStartEl).map((el) => {
                if (el === window) {
                    return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
                }
                return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
            });
        }
        queryScrollEls(scrollStartEl) {
            let els = [];
            for (let query of this.scrollQuery) {
                if (typeof query === 'object') {
                    els.push(query);
                }
                else {
                    els.push(...Array.prototype.slice.call(getElRoot(scrollStartEl).querySelectorAll(query)));
                }
            }
            return els;
        }
    }

    /*
    Monitors dragging on an element. Has a number of high-level features:
    - minimum distance required before dragging
    - minimum wait time ("delay") before dragging
    - a mirror element that follows the pointer
    */
    class FeaturefulElementDragging extends ElementDragging {
        constructor(containerEl, selector) {
            super(containerEl);
            this.containerEl = containerEl;
            // options that can be directly set by caller
            // the caller can also set the PointerDragging's options as well
            this.delay = null;
            this.minDistance = 0;
            this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
            this.mirrorNeedsRevert = false;
            this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
            this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
            this.isDelayEnded = false;
            this.isDistanceSurpassed = false;
            this.delayTimeoutId = null;
            this.onPointerDown = (ev) => {
                if (!this.isDragging) { // so new drag doesn't happen while revert animation is going
                    this.isInteracting = true;
                    this.isDelayEnded = false;
                    this.isDistanceSurpassed = false;
                    preventSelection(document.body);
                    preventContextMenu(document.body);
                    // prevent links from being visited if there's an eventual drag.
                    // also prevents selection in older browsers (maybe?).
                    // not necessary for touch, besides, browser would complain about passiveness.
                    if (!ev.isTouch) {
                        ev.origEvent.preventDefault();
                    }
                    this.emitter.trigger('pointerdown', ev);
                    if (this.isInteracting && // not destroyed via pointerdown handler
                        !this.pointer.shouldIgnoreMove) {
                        // actions related to initiating dragstart+dragmove+dragend...
                        this.mirror.setIsVisible(false); // reset. caller must set-visible
                        this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
                        this.startDelay(ev);
                        if (!this.minDistance) {
                            this.handleDistanceSurpassed(ev);
                        }
                    }
                }
            };
            this.onPointerMove = (ev) => {
                if (this.isInteracting) {
                    this.emitter.trigger('pointermove', ev);
                    if (!this.isDistanceSurpassed) {
                        let minDistance = this.minDistance;
                        let distanceSq; // current distance from the origin, squared
                        let { deltaX, deltaY } = ev;
                        distanceSq = deltaX * deltaX + deltaY * deltaY;
                        if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
                            this.handleDistanceSurpassed(ev);
                        }
                    }
                    if (this.isDragging) {
                        // a real pointer move? (not one simulated by scrolling)
                        if (ev.origEvent.type !== 'scroll') {
                            this.mirror.handleMove(ev.pageX, ev.pageY);
                            this.autoScroller.handleMove(ev.pageX, ev.pageY);
                        }
                        this.emitter.trigger('dragmove', ev);
                    }
                }
            };
            this.onPointerUp = (ev) => {
                if (this.isInteracting) {
                    this.isInteracting = false;
                    allowSelection(document.body);
                    allowContextMenu(document.body);
                    this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
                    if (this.isDragging) {
                        this.autoScroller.stop();
                        this.tryStopDrag(ev); // which will stop the mirror
                    }
                    if (this.delayTimeoutId) {
                        clearTimeout(this.delayTimeoutId);
                        this.delayTimeoutId = null;
                    }
                }
            };
            let pointer = this.pointer = new PointerDragging(containerEl);
            pointer.emitter.on('pointerdown', this.onPointerDown);
            pointer.emitter.on('pointermove', this.onPointerMove);
            pointer.emitter.on('pointerup', this.onPointerUp);
            if (selector) {
                pointer.selector = selector;
            }
            this.mirror = new ElementMirror();
            this.autoScroller = new AutoScroller();
        }
        destroy() {
            this.pointer.destroy();
            // HACK: simulate a pointer-up to end the current drag
            // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)
            this.onPointerUp({});
        }
        startDelay(ev) {
            if (typeof this.delay === 'number') {
                this.delayTimeoutId = setTimeout(() => {
                    this.delayTimeoutId = null;
                    this.handleDelayEnd(ev);
                }, this.delay); // not assignable to number!
            }
            else {
                this.handleDelayEnd(ev);
            }
        }
        handleDelayEnd(ev) {
            this.isDelayEnded = true;
            this.tryStartDrag(ev);
        }
        handleDistanceSurpassed(ev) {
            this.isDistanceSurpassed = true;
            this.tryStartDrag(ev);
        }
        tryStartDrag(ev) {
            if (this.isDelayEnded && this.isDistanceSurpassed) {
                if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
                    this.isDragging = true;
                    this.mirrorNeedsRevert = false;
                    this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
                    this.emitter.trigger('dragstart', ev);
                    if (this.touchScrollAllowed === false) {
                        this.pointer.cancelTouchScroll();
                    }
                }
            }
        }
        tryStopDrag(ev) {
            // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
            // that come from the document to fire beforehand. much more convenient this way.
            this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
        }
        stopDrag(ev) {
            this.isDragging = false;
            this.emitter.trigger('dragend', ev);
        }
        // fill in the implementations...
        setIgnoreMove(bool) {
            this.pointer.shouldIgnoreMove = bool;
        }
        setMirrorIsVisible(bool) {
            this.mirror.setIsVisible(bool);
        }
        setMirrorNeedsRevert(bool) {
            this.mirrorNeedsRevert = bool;
        }
        setAutoScrollEnabled(bool) {
            this.autoScroller.isEnabled = bool;
        }
    }

    /*
    When this class is instantiated, it records the offset of an element (relative to the document topleft),
    and continues to monitor scrolling, updating the cached coordinates if it needs to.
    Does not access the DOM after instantiation, so highly performant.

    Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
    and an determine if a given point is inside the combined clipping rectangle.
    */
    class OffsetTracker {
        constructor(el) {
            this.origRect = computeRect(el);
            // will work fine for divs that have overflow:hidden
            this.scrollCaches = getClippingParents(el).map((scrollEl) => new ElementScrollGeomCache(scrollEl, true));
        }
        destroy() {
            for (let scrollCache of this.scrollCaches) {
                scrollCache.destroy();
            }
        }
        computeLeft() {
            let left = this.origRect.left;
            for (let scrollCache of this.scrollCaches) {
                left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
            }
            return left;
        }
        computeTop() {
            let top = this.origRect.top;
            for (let scrollCache of this.scrollCaches) {
                top += scrollCache.origScrollTop - scrollCache.getScrollTop();
            }
            return top;
        }
        isWithinClipping(pageX, pageY) {
            let point = { left: pageX, top: pageY };
            for (let scrollCache of this.scrollCaches) {
                if (!isIgnoredClipping(scrollCache.getEventTarget()) &&
                    !pointInsideRect(point, scrollCache.clientRect)) {
                    return false;
                }
            }
            return true;
        }
    }
    // certain clipping containers should never constrain interactions, like <html> and <body>
    // https://github.com/fullcalendar/fullcalendar/issues/3615
    function isIgnoredClipping(node) {
        let tagName = node.tagName;
        return tagName === 'HTML' || tagName === 'BODY';
    }

    /*
    Tracks movement over multiple droppable areas (aka "hits")
    that exist in one or more DateComponents.
    Relies on an existing draggable.

    emits:
    - pointerdown
    - dragstart
    - hitchange - fires initially, even if not over a hit
    - pointerup
    - (hitchange - again, to null, if ended over a hit)
    - dragend
    */
    class HitDragging {
        constructor(dragging, droppableStore) {
            // options that can be set by caller
            this.useSubjectCenter = false;
            this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
            this.initialHit = null;
            this.movingHit = null;
            this.finalHit = null; // won't ever be populated if shouldIgnoreMove
            this.handlePointerDown = (ev) => {
                let { dragging } = this;
                this.initialHit = null;
                this.movingHit = null;
                this.finalHit = null;
                this.prepareHits();
                this.processFirstCoord(ev);
                if (this.initialHit || !this.requireInitial) {
                    dragging.setIgnoreMove(false);
                    // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
                    this.emitter.trigger('pointerdown', ev);
                }
                else {
                    dragging.setIgnoreMove(true);
                }
            };
            this.handleDragStart = (ev) => {
                this.emitter.trigger('dragstart', ev);
                this.handleMove(ev, true); // force = fire even if initially null
            };
            this.handleDragMove = (ev) => {
                this.emitter.trigger('dragmove', ev);
                this.handleMove(ev);
            };
            this.handlePointerUp = (ev) => {
                this.releaseHits();
                this.emitter.trigger('pointerup', ev);
            };
            this.handleDragEnd = (ev) => {
                if (this.movingHit) {
                    this.emitter.trigger('hitupdate', null, true, ev);
                }
                this.finalHit = this.movingHit;
                this.movingHit = null;
                this.emitter.trigger('dragend', ev);
            };
            this.droppableStore = droppableStore;
            dragging.emitter.on('pointerdown', this.handlePointerDown);
            dragging.emitter.on('dragstart', this.handleDragStart);
            dragging.emitter.on('dragmove', this.handleDragMove);
            dragging.emitter.on('pointerup', this.handlePointerUp);
            dragging.emitter.on('dragend', this.handleDragEnd);
            this.dragging = dragging;
            this.emitter = new Emitter();
        }
        // sets initialHit
        // sets coordAdjust
        processFirstCoord(ev) {
            let origPoint = { left: ev.pageX, top: ev.pageY };
            let adjustedPoint = origPoint;
            let subjectEl = ev.subjectEl;
            let subjectRect;
            if (subjectEl instanceof HTMLElement) { // i.e. not a Document/ShadowRoot
                subjectRect = computeRect(subjectEl);
                adjustedPoint = constrainPoint(adjustedPoint, subjectRect);
            }
            let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
            if (initialHit) {
                if (this.useSubjectCenter && subjectRect) {
                    let slicedSubjectRect = intersectRects(subjectRect, initialHit.rect);
                    if (slicedSubjectRect) {
                        adjustedPoint = getRectCenter(slicedSubjectRect);
                    }
                }
                this.coordAdjust = diffPoints(adjustedPoint, origPoint);
            }
            else {
                this.coordAdjust = { left: 0, top: 0 };
            }
        }
        handleMove(ev, forceHandle) {
            let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
            if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
                this.movingHit = hit;
                this.emitter.trigger('hitupdate', hit, false, ev);
            }
        }
        prepareHits() {
            this.offsetTrackers = mapHash(this.droppableStore, (interactionSettings) => {
                interactionSettings.component.prepareHits();
                return new OffsetTracker(interactionSettings.el);
            });
        }
        releaseHits() {
            let { offsetTrackers } = this;
            for (let id in offsetTrackers) {
                offsetTrackers[id].destroy();
            }
            this.offsetTrackers = {};
        }
        queryHitForOffset(offsetLeft, offsetTop) {
            let { droppableStore, offsetTrackers } = this;
            let bestHit = null;
            for (let id in droppableStore) {
                let component = droppableStore[id].component;
                let offsetTracker = offsetTrackers[id];
                if (offsetTracker && // wasn't destroyed mid-drag
                    offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
                    let originLeft = offsetTracker.computeLeft();
                    let originTop = offsetTracker.computeTop();
                    let positionLeft = offsetLeft - originLeft;
                    let positionTop = offsetTop - originTop;
                    let { origRect } = offsetTracker;
                    let width = origRect.right - origRect.left;
                    let height = origRect.bottom - origRect.top;
                    if (
                    // must be within the element's bounds
                    positionLeft >= 0 && positionLeft < width &&
                        positionTop >= 0 && positionTop < height) {
                        let hit = component.queryHit(positionLeft, positionTop, width, height);
                        if (hit && (
                        // make sure the hit is within activeRange, meaning it's not a dead cell
                        rangeContainsRange(hit.dateProfile.activeRange, hit.dateSpan.range)) &&
                            (!bestHit || hit.layer > bestHit.layer)) {
                            hit.componentId = id;
                            hit.context = component.context;
                            // TODO: better way to re-orient rectangle
                            hit.rect.left += originLeft;
                            hit.rect.right += originLeft;
                            hit.rect.top += originTop;
                            hit.rect.bottom += originTop;
                            bestHit = hit;
                        }
                    }
                }
            }
            return bestHit;
        }
    }
    function isHitsEqual(hit0, hit1) {
        if (!hit0 && !hit1) {
            return true;
        }
        if (Boolean(hit0) !== Boolean(hit1)) {
            return false;
        }
        return isDateSpansEqual(hit0.dateSpan, hit1.dateSpan);
    }

    function buildDatePointApiWithContext(dateSpan, context) {
        let props = {};
        for (let transform of context.pluginHooks.datePointTransforms) {
            Object.assign(props, transform(dateSpan, context));
        }
        Object.assign(props, buildDatePointApi(dateSpan, context.dateEnv));
        return props;
    }
    function buildDatePointApi(span, dateEnv) {
        return {
            date: dateEnv.toDate(span.range.start),
            dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
            allDay: span.allDay,
        };
    }

    /*
    Monitors when the user clicks on a specific date/time of a component.
    A pointerdown+pointerup on the same "hit" constitutes a click.
    */
    class DateClicking extends Interaction {
        constructor(settings) {
            super(settings);
            this.handlePointerDown = (pev) => {
                let { dragging } = this;
                let downEl = pev.origEvent.target;
                // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
                dragging.setIgnoreMove(!this.component.isValidDateDownEl(downEl));
            };
            // won't even fire if moving was ignored
            this.handleDragEnd = (ev) => {
                let { component } = this;
                let { pointer } = this.dragging;
                if (!pointer.wasTouchScroll) {
                    let { initialHit, finalHit } = this.hitDragging;
                    if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
                        let { context } = component;
                        let arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), { dayEl: initialHit.dayEl, jsEvent: ev.origEvent, view: context.viewApi || context.calendarApi.view });
                        context.emitter.trigger('dateClick', arg);
                    }
                }
            };
            // we DO want to watch pointer moves because otherwise finalHit won't get populated
            this.dragging = new FeaturefulElementDragging(settings.el);
            this.dragging.autoScroller.isEnabled = false;
            let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
            hitDragging.emitter.on('pointerdown', this.handlePointerDown);
            hitDragging.emitter.on('dragend', this.handleDragEnd);
        }
        destroy() {
            this.dragging.destroy();
        }
    }

    /*
    Tracks when the user selects a portion of time of a component,
    constituted by a drag over date cells, with a possible delay at the beginning of the drag.
    */
    class DateSelecting extends Interaction {
        constructor(settings) {
            super(settings);
            this.dragSelection = null;
            this.handlePointerDown = (ev) => {
                let { component, dragging } = this;
                let { options } = component.context;
                let canSelect = options.selectable &&
                    component.isValidDateDownEl(ev.origEvent.target);
                // don't bother to watch expensive moves if component won't do selection
                dragging.setIgnoreMove(!canSelect);
                // if touch, require user to hold down
                dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
            };
            this.handleDragStart = (ev) => {
                this.component.context.calendarApi.unselect(ev); // unselect previous selections
            };
            this.handleHitUpdate = (hit, isFinal) => {
                let { context } = this.component;
                let dragSelection = null;
                let isInvalid = false;
                if (hit) {
                    let initialHit = this.hitDragging.initialHit;
                    let disallowed = hit.componentId === initialHit.componentId
                        && this.isHitComboAllowed
                        && !this.isHitComboAllowed(initialHit, hit);
                    if (!disallowed) {
                        dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
                    }
                    if (!dragSelection || !isDateSelectionValid(dragSelection, hit.dateProfile, context)) {
                        isInvalid = true;
                        dragSelection = null;
                    }
                }
                if (dragSelection) {
                    context.dispatch({ type: 'SELECT_DATES', selection: dragSelection });
                }
                else if (!isFinal) { // only unselect if moved away while dragging
                    context.dispatch({ type: 'UNSELECT_DATES' });
                }
                if (!isInvalid) {
                    enableCursor();
                }
                else {
                    disableCursor();
                }
                if (!isFinal) {
                    this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
                }
            };
            this.handlePointerUp = (pev) => {
                if (this.dragSelection) {
                    // selection is already rendered, so just need to report selection
                    triggerDateSelect(this.dragSelection, pev, this.component.context);
                    this.dragSelection = null;
                }
            };
            let { component } = settings;
            let { options } = component.context;
            let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
            dragging.touchScrollAllowed = false;
            dragging.minDistance = options.selectMinDistance || 0;
            dragging.autoScroller.isEnabled = options.dragScroll;
            let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
            hitDragging.emitter.on('pointerdown', this.handlePointerDown);
            hitDragging.emitter.on('dragstart', this.handleDragStart);
            hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
            hitDragging.emitter.on('pointerup', this.handlePointerUp);
        }
        destroy() {
            this.dragging.destroy();
        }
    }
    function getComponentTouchDelay$1(component) {
        let { options } = component.context;
        let delay = options.selectLongPressDelay;
        if (delay == null) {
            delay = options.longPressDelay;
        }
        return delay;
    }
    function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
        let dateSpan0 = hit0.dateSpan;
        let dateSpan1 = hit1.dateSpan;
        let ms = [
            dateSpan0.range.start,
            dateSpan0.range.end,
            dateSpan1.range.start,
            dateSpan1.range.end,
        ];
        ms.sort(compareNumbers);
        let props = {};
        for (let transformer of dateSelectionTransformers) {
            let res = transformer(hit0, hit1);
            if (res === false) {
                return null;
            }
            if (res) {
                Object.assign(props, res);
            }
        }
        props.range = { start: ms[0], end: ms[3] };
        props.allDay = dateSpan0.allDay;
        return props;
    }

    class EventDragging extends Interaction {
        constructor(settings) {
            super(settings);
            // internal state
            this.subjectEl = null;
            this.subjectSeg = null; // the seg being selected/dragged
            this.isDragging = false;
            this.eventRange = null;
            this.relevantEvents = null; // the events being dragged
            this.receivingContext = null;
            this.validMutation = null;
            this.mutatedRelevantEvents = null;
            this.handlePointerDown = (ev) => {
                let origTarget = ev.origEvent.target;
                let { component, dragging } = this;
                let { mirror } = dragging;
                let { options } = component.context;
                let initialContext = component.context;
                this.subjectEl = ev.subjectEl;
                let subjectSeg = this.subjectSeg = getElSeg(ev.subjectEl);
                let eventRange = this.eventRange = subjectSeg.eventRange;
                let eventInstanceId = eventRange.instance.instanceId;
                this.relevantEvents = getRelevantEvents(initialContext.getCurrentData().eventStore, eventInstanceId);
                dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
                dragging.delay =
                    // only do a touch delay if touch and this event hasn't been selected yet
                    (ev.isTouch && eventInstanceId !== component.props.eventSelection) ?
                        getComponentTouchDelay(component) :
                        null;
                if (options.fixedMirrorParent) {
                    mirror.parentNode = options.fixedMirrorParent;
                }
                else {
                    mirror.parentNode = elementClosest(origTarget, '.fc');
                }
                mirror.revertDuration = options.dragRevertDuration;
                let isValid = component.isValidSegDownEl(origTarget) &&
                    !elementClosest(origTarget, '.fc-event-resizer'); // NOT on a resizer
                dragging.setIgnoreMove(!isValid);
                // disable dragging for elements that are resizable (ie, selectable)
                // but are not draggable
                this.isDragging = isValid &&
                    ev.subjectEl.classList.contains('fc-event-draggable');
            };
            this.handleDragStart = (ev) => {
                let initialContext = this.component.context;
                let eventRange = this.eventRange;
                let eventInstanceId = eventRange.instance.instanceId;
                if (ev.isTouch) {
                    // need to select a different event?
                    if (eventInstanceId !== this.component.props.eventSelection) {
                        initialContext.dispatch({ type: 'SELECT_EVENT', eventInstanceId });
                    }
                }
                else {
                    // if now using mouse, but was previous touch interaction, clear selected event
                    initialContext.dispatch({ type: 'UNSELECT_EVENT' });
                }
                if (this.isDragging) {
                    initialContext.calendarApi.unselect(ev); // unselect *date* selection
                    initialContext.emitter.trigger('eventDragStart', {
                        el: this.subjectEl,
                        event: new EventImpl(initialContext, eventRange.def, eventRange.instance),
                        jsEvent: ev.origEvent,
                        view: initialContext.viewApi,
                    });
                }
            };
            this.handleHitUpdate = (hit, isFinal) => {
                if (!this.isDragging) {
                    return;
                }
                let relevantEvents = this.relevantEvents;
                let initialHit = this.hitDragging.initialHit;
                let initialContext = this.component.context;
                // states based on new hit
                let receivingContext = null;
                let mutation = null;
                let mutatedRelevantEvents = null;
                let isInvalid = false;
                let interaction = {
                    affectedEvents: relevantEvents,
                    mutatedEvents: createEmptyEventStore(),
                    isEvent: true,
                };
                if (hit) {
                    receivingContext = hit.context;
                    let receivingOptions = receivingContext.options;
                    if (initialContext === receivingContext ||
                        (receivingOptions.editable && receivingOptions.droppable)) {
                        mutation = computeEventMutation(initialHit, hit, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
                        if (mutation) {
                            mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
                            interaction.mutatedEvents = mutatedRelevantEvents;
                            if (!isInteractionValid(interaction, hit.dateProfile, receivingContext)) {
                                isInvalid = true;
                                mutation = null;
                                mutatedRelevantEvents = null;
                                interaction.mutatedEvents = createEmptyEventStore();
                            }
                        }
                    }
                    else {
                        receivingContext = null;
                    }
                }
                this.displayDrag(receivingContext, interaction);
                if (!isInvalid) {
                    enableCursor();
                }
                else {
                    disableCursor();
                }
                if (!isFinal) {
                    if (initialContext === receivingContext && // TODO: write test for this
                        isHitsEqual(initialHit, hit)) {
                        mutation = null;
                    }
                    this.dragging.setMirrorNeedsRevert(!mutation);
                    // render the mirror if no already-rendered mirror
                    // TODO: wish we could somehow wait for dispatch to guarantee render
                    this.dragging.setMirrorIsVisible(!hit || !getElRoot(this.subjectEl).querySelector('.fc-event-mirror'));
                    // assign states based on new hit
                    this.receivingContext = receivingContext;
                    this.validMutation = mutation;
                    this.mutatedRelevantEvents = mutatedRelevantEvents;
                }
            };
            this.handlePointerUp = () => {
                if (!this.isDragging) {
                    this.cleanup(); // because handleDragEnd won't fire
                }
            };
            this.handleDragEnd = (ev) => {
                if (this.isDragging) {
                    let initialContext = this.component.context;
                    let initialView = initialContext.viewApi;
                    let { receivingContext, validMutation } = this;
                    let eventDef = this.eventRange.def;
                    let eventInstance = this.eventRange.instance;
                    let eventApi = new EventImpl(initialContext, eventDef, eventInstance);
                    let relevantEvents = this.relevantEvents;
                    let mutatedRelevantEvents = this.mutatedRelevantEvents;
                    let { finalHit } = this.hitDragging;
                    this.clearDrag(); // must happen after revert animation
                    initialContext.emitter.trigger('eventDragStop', {
                        el: this.subjectEl,
                        event: eventApi,
                        jsEvent: ev.origEvent,
                        view: initialView,
                    });
                    if (validMutation) {
                        // dropped within same calendar
                        if (receivingContext === initialContext) {
                            let updatedEventApi = new EventImpl(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
                            initialContext.dispatch({
                                type: 'MERGE_EVENTS',
                                eventStore: mutatedRelevantEvents,
                            });
                            let eventChangeArg = {
                                oldEvent: eventApi,
                                event: updatedEventApi,
                                relatedEvents: buildEventApis(mutatedRelevantEvents, initialContext, eventInstance),
                                revert() {
                                    initialContext.dispatch({
                                        type: 'MERGE_EVENTS',
                                        eventStore: relevantEvents, // the pre-change data
                                    });
                                },
                            };
                            let transformed = {};
                            for (let transformer of initialContext.getCurrentData().pluginHooks.eventDropTransformers) {
                                Object.assign(transformed, transformer(validMutation, initialContext));
                            }
                            initialContext.emitter.trigger('eventDrop', Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), { el: ev.subjectEl, delta: validMutation.datesDelta, jsEvent: ev.origEvent, view: initialView }));
                            initialContext.emitter.trigger('eventChange', eventChangeArg);
                            // dropped in different calendar
                        }
                        else if (receivingContext) {
                            let eventRemoveArg = {
                                event: eventApi,
                                relatedEvents: buildEventApis(relevantEvents, initialContext, eventInstance),
                                revert() {
                                    initialContext.dispatch({
                                        type: 'MERGE_EVENTS',
                                        eventStore: relevantEvents,
                                    });
                                },
                            };
                            initialContext.emitter.trigger('eventLeave', Object.assign(Object.assign({}, eventRemoveArg), { draggedEl: ev.subjectEl, view: initialView }));
                            initialContext.dispatch({
                                type: 'REMOVE_EVENTS',
                                eventStore: relevantEvents,
                            });
                            initialContext.emitter.trigger('eventRemove', eventRemoveArg);
                            let addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
                            let addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
                            let addedEventApi = new EventImpl(receivingContext, addedEventDef, addedEventInstance);
                            receivingContext.dispatch({
                                type: 'MERGE_EVENTS',
                                eventStore: mutatedRelevantEvents,
                            });
                            let eventAddArg = {
                                event: addedEventApi,
                                relatedEvents: buildEventApis(mutatedRelevantEvents, receivingContext, addedEventInstance),
                                revert() {
                                    receivingContext.dispatch({
                                        type: 'REMOVE_EVENTS',
                                        eventStore: mutatedRelevantEvents,
                                    });
                                },
                            };
                            receivingContext.emitter.trigger('eventAdd', eventAddArg);
                            if (ev.isTouch) {
                                receivingContext.dispatch({
                                    type: 'SELECT_EVENT',
                                    eventInstanceId: eventInstance.instanceId,
                                });
                            }
                            receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: ev.subjectEl, jsEvent: ev.origEvent, view: finalHit.context.viewApi }));
                            receivingContext.emitter.trigger('eventReceive', Object.assign(Object.assign({}, eventAddArg), { draggedEl: ev.subjectEl, view: finalHit.context.viewApi }));
                        }
                    }
                    else {
                        initialContext.emitter.trigger('_noEventDrop');
                    }
                }
                this.cleanup();
            };
            let { component } = this;
            let { options } = component.context;
            let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
            dragging.pointer.selector = EventDragging.SELECTOR;
            dragging.touchScrollAllowed = false;
            dragging.autoScroller.isEnabled = options.dragScroll;
            let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsStore);
            hitDragging.useSubjectCenter = settings.useEventCenter;
            hitDragging.emitter.on('pointerdown', this.handlePointerDown);
            hitDragging.emitter.on('dragstart', this.handleDragStart);
            hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
            hitDragging.emitter.on('pointerup', this.handlePointerUp);
            hitDragging.emitter.on('dragend', this.handleDragEnd);
        }
        destroy() {
            this.dragging.destroy();
        }
        // render a drag state on the next receivingCalendar
        displayDrag(nextContext, state) {
            let initialContext = this.component.context;
            let prevContext = this.receivingContext;
            // does the previous calendar need to be cleared?
            if (prevContext && prevContext !== nextContext) {
                // does the initial calendar need to be cleared?
                // if so, don't clear all the way. we still need to to hide the affectedEvents
                if (prevContext === initialContext) {
                    prevContext.dispatch({
                        type: 'SET_EVENT_DRAG',
                        state: {
                            affectedEvents: state.affectedEvents,
                            mutatedEvents: createEmptyEventStore(),
                            isEvent: true,
                        },
                    });
                    // completely clear the old calendar if it wasn't the initial
                }
                else {
                    prevContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
                }
            }
            if (nextContext) {
                nextContext.dispatch({ type: 'SET_EVENT_DRAG', state });
            }
        }
        clearDrag() {
            let initialCalendar = this.component.context;
            let { receivingContext } = this;
            if (receivingContext) {
                receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
            // the initial calendar might have an dummy drag state from displayDrag
            if (initialCalendar !== receivingContext) {
                initialCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
        }
        cleanup() {
            this.subjectSeg = null;
            this.isDragging = false;
            this.eventRange = null;
            this.relevantEvents = null;
            this.receivingContext = null;
            this.validMutation = null;
            this.mutatedRelevantEvents = null;
        }
    }
    // TODO: test this in IE11
    // QUESTION: why do we need it on the resizable???
    EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
    function computeEventMutation(hit0, hit1, massagers) {
        let dateSpan0 = hit0.dateSpan;
        let dateSpan1 = hit1.dateSpan;
        let date0 = dateSpan0.range.start;
        let date1 = dateSpan1.range.start;
        let standardProps = {};
        if (dateSpan0.allDay !== dateSpan1.allDay) {
            standardProps.allDay = dateSpan1.allDay;
            standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
            if (dateSpan1.allDay) {
                // means date1 is already start-of-day,
                // but date0 needs to be converted
                date0 = startOfDay(date0);
            }
        }
        let delta = diffDates(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ?
            hit0.largeUnit :
            null);
        if (delta.milliseconds) { // has hours/minutes/seconds
            standardProps.allDay = false;
        }
        let mutation = {
            datesDelta: delta,
            standardProps,
        };
        for (let massager of massagers) {
            massager(mutation, hit0, hit1);
        }
        return mutation;
    }
    function getComponentTouchDelay(component) {
        let { options } = component.context;
        let delay = options.eventLongPressDelay;
        if (delay == null) {
            delay = options.longPressDelay;
        }
        return delay;
    }

    class EventResizing extends Interaction {
        constructor(settings) {
            super(settings);
            // internal state
            this.draggingSegEl = null;
            this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?
            this.eventRange = null;
            this.relevantEvents = null;
            this.validMutation = null;
            this.mutatedRelevantEvents = null;
            this.handlePointerDown = (ev) => {
                let { component } = this;
                let segEl = this.querySegEl(ev);
                let seg = getElSeg(segEl);
                let eventRange = this.eventRange = seg.eventRange;
                this.dragging.minDistance = component.context.options.eventDragMinDistance;
                // if touch, need to be working with a selected event
                this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(ev.origEvent.target) ||
                    (ev.isTouch && this.component.props.eventSelection !== eventRange.instance.instanceId));
            };
            this.handleDragStart = (ev) => {
                let { context } = this.component;
                let eventRange = this.eventRange;
                this.relevantEvents = getRelevantEvents(context.getCurrentData().eventStore, this.eventRange.instance.instanceId);
                let segEl = this.querySegEl(ev);
                this.draggingSegEl = segEl;
                this.draggingSeg = getElSeg(segEl);
                context.calendarApi.unselect();
                context.emitter.trigger('eventResizeStart', {
                    el: segEl,
                    event: new EventImpl(context, eventRange.def, eventRange.instance),
                    jsEvent: ev.origEvent,
                    view: context.viewApi,
                });
            };
            this.handleHitUpdate = (hit, isFinal, ev) => {
                let { context } = this.component;
                let relevantEvents = this.relevantEvents;
                let initialHit = this.hitDragging.initialHit;
                let eventInstance = this.eventRange.instance;
                let mutation = null;
                let mutatedRelevantEvents = null;
                let isInvalid = false;
                let interaction = {
                    affectedEvents: relevantEvents,
                    mutatedEvents: createEmptyEventStore(),
                    isEvent: true,
                };
                if (hit) {
                    let disallowed = hit.componentId === initialHit.componentId
                        && this.isHitComboAllowed
                        && !this.isHitComboAllowed(initialHit, hit);
                    if (!disallowed) {
                        mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
                    }
                }
                if (mutation) {
                    mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
                    interaction.mutatedEvents = mutatedRelevantEvents;
                    if (!isInteractionValid(interaction, hit.dateProfile, context)) {
                        isInvalid = true;
                        mutation = null;
                        mutatedRelevantEvents = null;
                        interaction.mutatedEvents = null;
                    }
                }
                if (mutatedRelevantEvents) {
                    context.dispatch({
                        type: 'SET_EVENT_RESIZE',
                        state: interaction,
                    });
                }
                else {
                    context.dispatch({ type: 'UNSET_EVENT_RESIZE' });
                }
                if (!isInvalid) {
                    enableCursor();
                }
                else {
                    disableCursor();
                }
                if (!isFinal) {
                    if (mutation && isHitsEqual(initialHit, hit)) {
                        mutation = null;
                    }
                    this.validMutation = mutation;
                    this.mutatedRelevantEvents = mutatedRelevantEvents;
                }
            };
            this.handleDragEnd = (ev) => {
                let { context } = this.component;
                let eventDef = this.eventRange.def;
                let eventInstance = this.eventRange.instance;
                let eventApi = new EventImpl(context, eventDef, eventInstance);
                let relevantEvents = this.relevantEvents;
                let mutatedRelevantEvents = this.mutatedRelevantEvents;
                context.emitter.trigger('eventResizeStop', {
                    el: this.draggingSegEl,
                    event: eventApi,
                    jsEvent: ev.origEvent,
                    view: context.viewApi,
                });
                if (this.validMutation) {
                    let updatedEventApi = new EventImpl(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
                    context.dispatch({
                        type: 'MERGE_EVENTS',
                        eventStore: mutatedRelevantEvents,
                    });
                    let eventChangeArg = {
                        oldEvent: eventApi,
                        event: updatedEventApi,
                        relatedEvents: buildEventApis(mutatedRelevantEvents, context, eventInstance),
                        revert() {
                            context.dispatch({
                                type: 'MERGE_EVENTS',
                                eventStore: relevantEvents, // the pre-change events
                            });
                        },
                    };
                    context.emitter.trigger('eventResize', Object.assign(Object.assign({}, eventChangeArg), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || createDuration(0), endDelta: this.validMutation.endDelta || createDuration(0), jsEvent: ev.origEvent, view: context.viewApi }));
                    context.emitter.trigger('eventChange', eventChangeArg);
                }
                else {
                    context.emitter.trigger('_noEventResize');
                }
                // reset all internal state
                this.draggingSeg = null;
                this.relevantEvents = null;
                this.validMutation = null;
                // okay to keep eventInstance around. useful to set it in handlePointerDown
            };
            let { component } = settings;
            let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
            dragging.pointer.selector = '.fc-event-resizer';
            dragging.touchScrollAllowed = false;
            dragging.autoScroller.isEnabled = component.context.options.dragScroll;
            let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
            hitDragging.emitter.on('pointerdown', this.handlePointerDown);
            hitDragging.emitter.on('dragstart', this.handleDragStart);
            hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
            hitDragging.emitter.on('dragend', this.handleDragEnd);
        }
        destroy() {
            this.dragging.destroy();
        }
        querySegEl(ev) {
            return elementClosest(ev.subjectEl, '.fc-event');
        }
    }
    function computeMutation(hit0, hit1, isFromStart, instanceRange) {
        let dateEnv = hit0.context.dateEnv;
        let date0 = hit0.dateSpan.range.start;
        let date1 = hit1.dateSpan.range.start;
        let delta = diffDates(date0, date1, dateEnv, hit0.largeUnit);
        if (isFromStart) {
            if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
                return { startDelta: delta };
            }
        }
        else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
            return { endDelta: delta };
        }
        return null;
    }

    class UnselectAuto {
        constructor(context) {
            this.context = context;
            this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
            this.matchesCancel = false;
            this.matchesEvent = false;
            this.onSelect = (selectInfo) => {
                if (selectInfo.jsEvent) {
                    this.isRecentPointerDateSelect = true;
                }
            };
            this.onDocumentPointerDown = (pev) => {
                let unselectCancel = this.context.options.unselectCancel;
                let downEl = getEventTargetViaRoot(pev.origEvent);
                this.matchesCancel = !!elementClosest(downEl, unselectCancel);
                this.matchesEvent = !!elementClosest(downEl, EventDragging.SELECTOR); // interaction started on an event?
            };
            this.onDocumentPointerUp = (pev) => {
                let { context } = this;
                let { documentPointer } = this;
                let calendarState = context.getCurrentData();
                // touch-scrolling should never unfocus any type of selection
                if (!documentPointer.wasTouchScroll) {
                    if (calendarState.dateSelection && // an existing date selection?
                        !this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
                    ) {
                        let unselectAuto = context.options.unselectAuto;
                        if (unselectAuto && (!unselectAuto || !this.matchesCancel)) {
                            context.calendarApi.unselect(pev);
                        }
                    }
                    if (calendarState.eventSelection && // an existing event selected?
                        !this.matchesEvent // interaction DIDN'T start on an event
                    ) {
                        context.dispatch({ type: 'UNSELECT_EVENT' });
                    }
                }
                this.isRecentPointerDateSelect = false;
            };
            let documentPointer = this.documentPointer = new PointerDragging(document);
            documentPointer.shouldIgnoreMove = true;
            documentPointer.shouldWatchScroll = false;
            documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
            documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
            /*
            TODO: better way to know about whether there was a selection with the pointer
            */
            context.emitter.on('select', this.onSelect);
        }
        destroy() {
            this.context.emitter.off('select', this.onSelect);
            this.documentPointer.destroy();
        }
    }

    const OPTION_REFINERS$2 = {
        fixedMirrorParent: identity,
    };
    const LISTENER_REFINERS = {
        dateClick: identity,
        eventDragStart: identity,
        eventDragStop: identity,
        eventDrop: identity,
        eventResizeStart: identity,
        eventResizeStop: identity,
        eventResize: identity,
        drop: identity,
        eventReceive: identity,
        eventLeave: identity,
    };

    /*
    Given an already instantiated draggable object for one-or-more elements,
    Interprets any dragging as an attempt to drag an events that lives outside
    of a calendar onto a calendar.
    */
    class ExternalElementDragging {
        constructor(dragging, suppliedDragMeta) {
            this.receivingContext = null;
            this.droppableEvent = null; // will exist for all drags, even if create:false
            this.suppliedDragMeta = null;
            this.dragMeta = null;
            this.handleDragStart = (ev) => {
                this.dragMeta = this.buildDragMeta(ev.subjectEl);
            };
            this.handleHitUpdate = (hit, isFinal, ev) => {
                let { dragging } = this.hitDragging;
                let receivingContext = null;
                let droppableEvent = null;
                let isInvalid = false;
                let interaction = {
                    affectedEvents: createEmptyEventStore(),
                    mutatedEvents: createEmptyEventStore(),
                    isEvent: this.dragMeta.create,
                };
                if (hit) {
                    receivingContext = hit.context;
                    if (this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
                        droppableEvent = computeEventForDateSpan(hit.dateSpan, this.dragMeta, receivingContext);
                        interaction.mutatedEvents = eventTupleToStore(droppableEvent);
                        isInvalid = !isInteractionValid(interaction, hit.dateProfile, receivingContext);
                        if (isInvalid) {
                            interaction.mutatedEvents = createEmptyEventStore();
                            droppableEvent = null;
                        }
                    }
                }
                this.displayDrag(receivingContext, interaction);
                // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
                // TODO: wish we could somehow wait for dispatch to guarantee render
                dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));
                if (!isInvalid) {
                    enableCursor();
                }
                else {
                    disableCursor();
                }
                if (!isFinal) {
                    dragging.setMirrorNeedsRevert(!droppableEvent);
                    this.receivingContext = receivingContext;
                    this.droppableEvent = droppableEvent;
                }
            };
            this.handleDragEnd = (pev) => {
                let { receivingContext, droppableEvent } = this;
                this.clearDrag();
                if (receivingContext && droppableEvent) {
                    let finalHit = this.hitDragging.finalHit;
                    let finalView = finalHit.context.viewApi;
                    let dragMeta = this.dragMeta;
                    receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: pev.subjectEl, jsEvent: pev.origEvent, view: finalView }));
                    if (dragMeta.create) {
                        let addingEvents = eventTupleToStore(droppableEvent);
                        receivingContext.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: addingEvents,
                        });
                        if (pev.isTouch) {
                            receivingContext.dispatch({
                                type: 'SELECT_EVENT',
                                eventInstanceId: droppableEvent.instance.instanceId,
                            });
                        }
                        // signal that an external event landed
                        receivingContext.emitter.trigger('eventReceive', {
                            event: new EventImpl(receivingContext, droppableEvent.def, droppableEvent.instance),
                            relatedEvents: [],
                            revert() {
                                receivingContext.dispatch({
                                    type: 'REMOVE_EVENTS',
                                    eventStore: addingEvents,
                                });
                            },
                            draggedEl: pev.subjectEl,
                            view: finalView,
                        });
                    }
                }
                this.receivingContext = null;
                this.droppableEvent = null;
            };
            let hitDragging = this.hitDragging = new HitDragging(dragging, interactionSettingsStore);
            hitDragging.requireInitial = false; // will start outside of a component
            hitDragging.emitter.on('dragstart', this.handleDragStart);
            hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
            hitDragging.emitter.on('dragend', this.handleDragEnd);
            this.suppliedDragMeta = suppliedDragMeta;
        }
        buildDragMeta(subjectEl) {
            if (typeof this.suppliedDragMeta === 'object') {
                return parseDragMeta(this.suppliedDragMeta);
            }
            if (typeof this.suppliedDragMeta === 'function') {
                return parseDragMeta(this.suppliedDragMeta(subjectEl));
            }
            return getDragMetaFromEl(subjectEl);
        }
        displayDrag(nextContext, state) {
            let prevContext = this.receivingContext;
            if (prevContext && prevContext !== nextContext) {
                prevContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
            if (nextContext) {
                nextContext.dispatch({ type: 'SET_EVENT_DRAG', state });
            }
        }
        clearDrag() {
            if (this.receivingContext) {
                this.receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
        }
        canDropElOnCalendar(el, receivingContext) {
            let dropAccept = receivingContext.options.dropAccept;
            if (typeof dropAccept === 'function') {
                return dropAccept.call(receivingContext.calendarApi, el);
            }
            if (typeof dropAccept === 'string' && dropAccept) {
                return Boolean(elementMatches(el, dropAccept));
            }
            return true;
        }
    }
    // Utils for computing event store from the DragMeta
    // ----------------------------------------------------------------------------------------------------
    function computeEventForDateSpan(dateSpan, dragMeta, context) {
        let defProps = Object.assign({}, dragMeta.leftoverProps);
        for (let transform of context.pluginHooks.externalDefTransforms) {
            Object.assign(defProps, transform(dateSpan, dragMeta));
        }
        let { refined, extra } = refineEventDef(defProps, context);
        let def = parseEventDef(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration), // hasEnd
        context);
        let start = dateSpan.range.start;
        // only rely on time info if drop zone is all-day,
        // otherwise, we already know the time
        if (dateSpan.allDay && dragMeta.startTime) {
            start = context.dateEnv.add(start, dragMeta.startTime);
        }
        let end = dragMeta.duration ?
            context.dateEnv.add(start, dragMeta.duration) :
            getDefaultEventEnd(dateSpan.allDay, start, context);
        let instance = createEventInstance(def.defId, { start, end });
        return { def, instance };
    }
    // Utils for extracting data from element
    // ----------------------------------------------------------------------------------------------------
    function getDragMetaFromEl(el) {
        let str = getEmbeddedElData(el, 'event');
        let obj = str ?
            JSON.parse(str) :
            { create: false }; // if no embedded data, assume no event creation
        return parseDragMeta(obj);
    }
    config.dataAttrPrefix = '';
    function getEmbeddedElData(el, name) {
        let prefix = config.dataAttrPrefix;
        let prefixedName = (prefix ? prefix + '-' : '') + name;
        return el.getAttribute('data-' + prefixedName) || '';
    }

    /*
    Makes an element (that is *external* to any calendar) draggable.
    Can pass in data that determines how an event will be created when dropped onto a calendar.
    Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
    */
    class ExternalDraggable {
        constructor(el, settings = {}) {
            this.handlePointerDown = (ev) => {
                let { dragging } = this;
                let { minDistance, longPressDelay } = this.settings;
                dragging.minDistance =
                    minDistance != null ?
                        minDistance :
                        (ev.isTouch ? 0 : BASE_OPTION_DEFAULTS.eventDragMinDistance);
                dragging.delay =
                    ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
                        (longPressDelay != null ? longPressDelay : BASE_OPTION_DEFAULTS.longPressDelay) :
                        0;
            };
            this.handleDragStart = (ev) => {
                if (ev.isTouch &&
                    this.dragging.delay &&
                    ev.subjectEl.classList.contains('fc-event')) {
                    this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
                }
            };
            this.settings = settings;
            let dragging = this.dragging = new FeaturefulElementDragging(el);
            dragging.touchScrollAllowed = false;
            if (settings.itemSelector != null) {
                dragging.pointer.selector = settings.itemSelector;
            }
            if (settings.appendTo != null) {
                dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
            }
            dragging.emitter.on('pointerdown', this.handlePointerDown);
            dragging.emitter.on('dragstart', this.handleDragStart);
            new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
        }
        destroy() {
            this.dragging.destroy();
        }
    }

    /*
    Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
    The third-party system is responsible for drawing the visuals effects of the drag.
    This class simply monitors for pointer movements and fires events.
    It also has the ability to hide the moving element (the "mirror") during the drag.
    */
    class InferredElementDragging extends ElementDragging {
        constructor(containerEl) {
            super(containerEl);
            this.shouldIgnoreMove = false;
            this.mirrorSelector = '';
            this.currentMirrorEl = null;
            this.handlePointerDown = (ev) => {
                this.emitter.trigger('pointerdown', ev);
                if (!this.shouldIgnoreMove) {
                    // fire dragstart right away. does not support delay or min-distance
                    this.emitter.trigger('dragstart', ev);
                }
            };
            this.handlePointerMove = (ev) => {
                if (!this.shouldIgnoreMove) {
                    this.emitter.trigger('dragmove', ev);
                }
            };
            this.handlePointerUp = (ev) => {
                this.emitter.trigger('pointerup', ev);
                if (!this.shouldIgnoreMove) {
                    // fire dragend right away. does not support a revert animation
                    this.emitter.trigger('dragend', ev);
                }
            };
            let pointer = this.pointer = new PointerDragging(containerEl);
            pointer.emitter.on('pointerdown', this.handlePointerDown);
            pointer.emitter.on('pointermove', this.handlePointerMove);
            pointer.emitter.on('pointerup', this.handlePointerUp);
        }
        destroy() {
            this.pointer.destroy();
        }
        setIgnoreMove(bool) {
            this.shouldIgnoreMove = bool;
        }
        setMirrorIsVisible(bool) {
            if (bool) {
                // restore a previously hidden element.
                // use the reference in case the selector class has already been removed.
                if (this.currentMirrorEl) {
                    this.currentMirrorEl.style.visibility = '';
                    this.currentMirrorEl = null;
                }
            }
            else {
                let mirrorEl = this.mirrorSelector
                    // TODO: somehow query FullCalendars WITHIN shadow-roots
                    ? document.querySelector(this.mirrorSelector)
                    : null;
                if (mirrorEl) {
                    this.currentMirrorEl = mirrorEl;
                    mirrorEl.style.visibility = 'hidden';
                }
            }
        }
    }

    /*
    Bridges third-party drag-n-drop systems with FullCalendar.
    Must be instantiated and destroyed by caller.
    */
    class ThirdPartyDraggable {
        constructor(containerOrSettings, settings) {
            let containerEl = document;
            if (
            // wish we could just test instanceof EventTarget, but doesn't work in IE11
            containerOrSettings === document ||
                containerOrSettings instanceof Element) {
                containerEl = containerOrSettings;
                settings = settings || {};
            }
            else {
                settings = (containerOrSettings || {});
            }
            let dragging = this.dragging = new InferredElementDragging(containerEl);
            if (typeof settings.itemSelector === 'string') {
                dragging.pointer.selector = settings.itemSelector;
            }
            else if (containerEl === document) {
                dragging.pointer.selector = '[data-event]';
            }
            if (typeof settings.mirrorSelector === 'string') {
                dragging.mirrorSelector = settings.mirrorSelector;
            }
            new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
        }
        destroy() {
            this.dragging.destroy();
        }
    }

    var index$3 = createPlugin({
        name: '@fullcalendar/interaction',
        componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
        calendarInteractions: [UnselectAuto],
        elementDraggingImpl: FeaturefulElementDragging,
        optionRefiners: OPTION_REFINERS$2,
        listenerRefiners: LISTENER_REFINERS,
    });

    /* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
    ----------------------------------------------------------------------------------------------------------------------*/
    // It is a manager for a Table subcomponent, which does most of the heavy lifting.
    // It is responsible for managing width/height.
    class TableView extends DateComponent {
        constructor() {
            super(...arguments);
            this.headerElRef = y();
        }
        renderSimpleLayout(headerRowContent, bodyContent) {
            let { props, context } = this;
            let sections = [];
            let stickyHeaderDates = getStickyHeaderDates(context.options);
            if (headerRowContent) {
                sections.push({
                    type: 'header',
                    key: 'header',
                    isSticky: stickyHeaderDates,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    },
                });
            }
            sections.push({
                type: 'body',
                key: 'body',
                liquid: true,
                chunk: { content: bodyContent },
            });
            return (h(ViewContainer$1, { elClasses: ['fc-daygrid'], viewSpec: context.viewSpec },
                h(SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [] /* TODO: make optional? */, sections: sections })));
        }
        renderHScrollLayout(headerRowContent, bodyContent, colCnt, dayMinWidth) {
            let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
            if (!ScrollGrid) {
                throw new Error('No ScrollGrid implementation');
            }
            let { props, context } = this;
            let stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
            let stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
            let sections = [];
            if (headerRowContent) {
                sections.push({
                    type: 'header',
                    key: 'header',
                    isSticky: stickyHeaderDates,
                    chunks: [{
                            key: 'main',
                            elRef: this.headerElRef,
                            tableClassName: 'fc-col-header',
                            rowContent: headerRowContent,
                        }],
                });
            }
            sections.push({
                type: 'body',
                key: 'body',
                liquid: true,
                chunks: [{
                        key: 'main',
                        content: bodyContent,
                    }],
            });
            if (stickyFooterScrollbar) {
                sections.push({
                    type: 'footer',
                    key: 'footer',
                    isSticky: true,
                    chunks: [{
                            key: 'main',
                            content: renderScrollShim,
                        }],
                });
            }
            return (h(ViewContainer$1, { elClasses: ['fc-daygrid'], viewSpec: context.viewSpec },
                h(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, colGroups: [{ cols: [{ span: colCnt, minWidth: dayMinWidth }] }], sections: sections })));
        }
    }

    function splitSegsByRow(segs, rowCnt) {
        let byRow = [];
        for (let i = 0; i < rowCnt; i += 1) {
            byRow[i] = [];
        }
        for (let seg of segs) {
            byRow[seg.row].push(seg);
        }
        return byRow;
    }
    function splitSegsByFirstCol(segs, colCnt) {
        let byCol = [];
        for (let i = 0; i < colCnt; i += 1) {
            byCol[i] = [];
        }
        for (let seg of segs) {
            byCol[seg.firstCol].push(seg);
        }
        return byCol;
    }
    function splitInteractionByRow(ui, rowCnt) {
        let byRow = [];
        if (!ui) {
            for (let i = 0; i < rowCnt; i += 1) {
                byRow[i] = null;
            }
        }
        else {
            for (let i = 0; i < rowCnt; i += 1) {
                byRow[i] = {
                    affectedInstances: ui.affectedInstances,
                    isEvent: ui.isEvent,
                    segs: [],
                };
            }
            for (let seg of ui.segs) {
                byRow[seg.row].segs.push(seg);
            }
        }
        return byRow;
    }

    const DEFAULT_TABLE_EVENT_TIME_FORMAT = createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: 'narrow',
    });
    function hasListItemDisplay(seg) {
        let { display } = seg.eventRange.ui;
        return display === 'list-item' || (display === 'auto' &&
            !seg.eventRange.def.allDay &&
            seg.firstCol === seg.lastCol && // can't be multi-day
            seg.isStart && // "
            seg.isEnd // "
        );
    }

    class TableBlockEvent extends BaseComponent {
        render() {
            let { props } = this;
            return (h(StandardEvent, Object.assign({}, props, { elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.seg.eventRange.def.allDay })));
        }
    }

    class TableListItemEvent extends BaseComponent {
        render() {
            let { props, context } = this;
            let { options } = context;
            let { seg } = props;
            let timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
            let timeText = buildSegTimeText(seg, timeFormat, context, true, props.defaultDisplayEventEnd);
            return (h(EventContainer, Object.assign({}, props, { elTag: "a", elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'], elAttrs: getSegAnchorAttrs(props.seg, context), defaultGenerator: renderInnerContent$2, timeText: timeText, isResizing: false, isDateSelecting: false })));
        }
    }
    function renderInnerContent$2(renderProps) {
        return (h(p, null,
            h("div", { className: "fc-daygrid-event-dot", style: { borderColor: renderProps.borderColor || renderProps.backgroundColor } }),
            renderProps.timeText && (h("div", { className: "fc-event-time" }, renderProps.timeText)),
            h("div", { className: "fc-event-title" }, renderProps.event.title || h(p, null, "\u00A0"))));
    }

    class TableCellMoreLink extends BaseComponent {
        constructor() {
            super(...arguments);
            this.compileSegs = memoize(compileSegs);
        }
        render() {
            let { props } = this;
            let { allSegs, invisibleSegs } = this.compileSegs(props.singlePlacements);
            return (h(MoreLinkContainer, { elClasses: ['fc-daygrid-more-link'], dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, moreCnt: props.moreCnt, allSegs: allSegs, hiddenSegs: invisibleSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: () => {
                    let isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) ||
                        (props.eventResize ? props.eventResize.affectedInstances : null) ||
                        {};
                    return (h(p, null, allSegs.map((seg) => {
                        let instanceId = seg.eventRange.instance.instanceId;
                        return (h("div", { className: "fc-daygrid-event-harness", key: instanceId, style: {
                                visibility: isForcedInvisible[instanceId] ? 'hidden' : '',
                            } }, hasListItemDisplay(seg) ? (h(TableListItemEvent, Object.assign({ seg: seg, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange)))) : (h(TableBlockEvent, Object.assign({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange))))));
                    })));
                } }));
        }
    }
    function compileSegs(singlePlacements) {
        let allSegs = [];
        let invisibleSegs = [];
        for (let placement of singlePlacements) {
            allSegs.push(placement.seg);
            if (!placement.isVisible) {
                invisibleSegs.push(placement.seg);
            }
        }
        return { allSegs, invisibleSegs };
    }

    const DEFAULT_WEEK_NUM_FORMAT$1 = createFormatter({ week: 'narrow' });
    class TableCell extends DateComponent {
        constructor() {
            super(...arguments);
            this.rootElRef = y();
            this.state = {
                dayNumberId: getUniqueDomId(),
            };
            this.handleRootEl = (el) => {
                setRef(this.rootElRef, el);
                setRef(this.props.elRef, el);
            };
        }
        render() {
            let { context, props, state, rootElRef } = this;
            let { options } = context;
            let { date, dateProfile } = props;
            return (h(DayCellContainer, { elTag: "td", elRef: this.handleRootEl, elClasses: [
                    'fc-daygrid-day',
                    ...(props.extraClassNames || []),
                ], elAttrs: Object.assign(Object.assign(Object.assign({}, props.extraDataAttrs), (props.showDayNumber ? { 'aria-labelledby': state.dayNumberId } : {})), { role: 'gridcell' }), defaultGenerator: renderTopInner, date: date, dateProfile: dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraRenderProps: props.extraRenderProps }, (InnerContent, renderProps) => (h("div", { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: props.innerElRef },
                props.showWeekNumber && (h(WeekNumberContainer, { elTag: "a", elClasses: ['fc-daygrid-week-number'], elAttrs: buildNavLinkAttrs(context, date, 'week'), date: date, defaultFormat: DEFAULT_WEEK_NUM_FORMAT$1 })),
                Boolean(!renderProps.isDisabled &&
                    (props.showDayNumber || hasCustomDayCellContent(options) || props.forceDayTop)) && (h("div", { className: "fc-daygrid-day-top" },
                    h(InnerContent, { elTag: "a", elClasses: ['fc-daygrid-day-number'], elAttrs: Object.assign(Object.assign({}, buildNavLinkAttrs(context, date)), { id: state.dayNumberId }) }))),
                h("div", { className: "fc-daygrid-day-events", ref: props.fgContentElRef },
                    props.fgContent,
                    h("div", { className: "fc-daygrid-day-bottom", style: { marginTop: props.moreMarginTop } },
                        h(TableCellMoreLink, { allDayDate: date, singlePlacements: props.singlePlacements, moreCnt: props.moreCnt, alignmentElRef: rootElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange }))),
                h("div", { className: "fc-daygrid-day-bg" }, props.bgContent)))));
        }
    }
    function renderTopInner(props) {
        return props.dayNumberText || h(p, null, "\u00A0");
    }

    function computeFgSegPlacement(segs, // assumed already sorted
    dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
        let hierarchy = new DayGridSegHierarchy();
        hierarchy.allowReslicing = true;
        hierarchy.strictOrder = strictOrder;
        if (dayMaxEvents === true || dayMaxEventRows === true) {
            hierarchy.maxCoord = maxContentHeight;
            hierarchy.hiddenConsumes = true;
        }
        else if (typeof dayMaxEvents === 'number') {
            hierarchy.maxStackCnt = dayMaxEvents;
        }
        else if (typeof dayMaxEventRows === 'number') {
            hierarchy.maxStackCnt = dayMaxEventRows;
            hierarchy.hiddenConsumes = true;
        }
        // create segInputs only for segs with known heights
        let segInputs = [];
        let unknownHeightSegs = [];
        for (let i = 0; i < segs.length; i += 1) {
            let seg = segs[i];
            let { instanceId } = seg.eventRange.instance;
            let eventHeight = eventInstanceHeights[instanceId];
            if (eventHeight != null) {
                segInputs.push({
                    index: i,
                    thickness: eventHeight,
                    span: {
                        start: seg.firstCol,
                        end: seg.lastCol + 1,
                    },
                });
            }
            else {
                unknownHeightSegs.push(seg);
            }
        }
        let hiddenEntries = hierarchy.addSegs(segInputs);
        let segRects = hierarchy.toRects();
        let { singleColPlacements, multiColPlacements, leftoverMargins } = placeRects(segRects, segs, cells);
        let moreCnts = [];
        let moreMarginTops = [];
        // add segs with unknown heights
        for (let seg of unknownHeightSegs) {
            multiColPlacements[seg.firstCol].push({
                seg,
                isVisible: false,
                isAbsolute: true,
                absoluteTop: 0,
                marginTop: 0,
            });
            for (let col = seg.firstCol; col <= seg.lastCol; col += 1) {
                singleColPlacements[col].push({
                    seg: resliceSeg(seg, col, col + 1, cells),
                    isVisible: false,
                    isAbsolute: false,
                    absoluteTop: 0,
                    marginTop: 0,
                });
            }
        }
        // add the hidden entries
        for (let col = 0; col < cells.length; col += 1) {
            moreCnts.push(0);
        }
        for (let hiddenEntry of hiddenEntries) {
            let seg = segs[hiddenEntry.index];
            let hiddenSpan = hiddenEntry.span;
            multiColPlacements[hiddenSpan.start].push({
                seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
                isVisible: false,
                isAbsolute: true,
                absoluteTop: 0,
                marginTop: 0,
            });
            for (let col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
                moreCnts[col] += 1;
                singleColPlacements[col].push({
                    seg: resliceSeg(seg, col, col + 1, cells),
                    isVisible: false,
                    isAbsolute: false,
                    absoluteTop: 0,
                    marginTop: 0,
                });
            }
        }
        // deal with leftover margins
        for (let col = 0; col < cells.length; col += 1) {
            moreMarginTops.push(leftoverMargins[col]);
        }
        return { singleColPlacements, multiColPlacements, moreCnts, moreMarginTops };
    }
    // rects ordered by top coord, then left
    function placeRects(allRects, segs, cells) {
        let rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
        let singleColPlacements = [];
        let multiColPlacements = [];
        let leftoverMargins = [];
        for (let col = 0; col < cells.length; col += 1) {
            let rects = rectsByEachCol[col];
            // compute all static segs in singlePlacements
            let singlePlacements = [];
            let currentHeight = 0;
            let currentMarginTop = 0;
            for (let rect of rects) {
                let seg = segs[rect.index];
                singlePlacements.push({
                    seg: resliceSeg(seg, col, col + 1, cells),
                    isVisible: true,
                    isAbsolute: false,
                    absoluteTop: rect.levelCoord,
                    marginTop: rect.levelCoord - currentHeight,
                });
                currentHeight = rect.levelCoord + rect.thickness;
            }
            // compute mixed static/absolute segs in multiPlacements
            let multiPlacements = [];
            currentHeight = 0;
            currentMarginTop = 0;
            for (let rect of rects) {
                let seg = segs[rect.index];
                let isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?
                let isFirstCol = rect.span.start === col;
                currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
                currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
                if (isAbsolute) {
                    currentMarginTop += rect.thickness;
                    if (isFirstCol) {
                        multiPlacements.push({
                            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                            isVisible: true,
                            isAbsolute: true,
                            absoluteTop: rect.levelCoord,
                            marginTop: 0,
                        });
                    }
                }
                else if (isFirstCol) {
                    multiPlacements.push({
                        seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                        isVisible: true,
                        isAbsolute: false,
                        absoluteTop: rect.levelCoord,
                        marginTop: currentMarginTop, // claim the margin
                    });
                    currentMarginTop = 0;
                }
            }
            singleColPlacements.push(singlePlacements);
            multiColPlacements.push(multiPlacements);
            leftoverMargins.push(currentMarginTop);
        }
        return { singleColPlacements, multiColPlacements, leftoverMargins };
    }
    function groupRectsByEachCol(rects, colCnt) {
        let rectsByEachCol = [];
        for (let col = 0; col < colCnt; col += 1) {
            rectsByEachCol.push([]);
        }
        for (let rect of rects) {
            for (let col = rect.span.start; col < rect.span.end; col += 1) {
                rectsByEachCol[col].push(rect);
            }
        }
        return rectsByEachCol;
    }
    function resliceSeg(seg, spanStart, spanEnd, cells) {
        if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
            return seg;
        }
        let eventRange = seg.eventRange;
        let origRange = eventRange.range;
        let slicedRange = intersectRanges(origRange, {
            start: cells[spanStart].date,
            end: addDays(cells[spanEnd - 1].date, 1),
        });
        return Object.assign(Object.assign({}, seg), { firstCol: spanStart, lastCol: spanEnd - 1, eventRange: {
                def: eventRange.def,
                ui: Object.assign(Object.assign({}, eventRange.ui), { durationEditable: false }),
                instance: eventRange.instance,
                range: slicedRange,
            }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() });
    }
    class DayGridSegHierarchy extends SegHierarchy {
        constructor() {
            super(...arguments);
            // config
            this.hiddenConsumes = false;
            // allows us to keep hidden entries in the hierarchy so they take up space
            this.forceHidden = {};
        }
        addSegs(segInputs) {
            const hiddenSegs = super.addSegs(segInputs);
            const { entriesByLevel } = this;
            const excludeHidden = (entry) => !this.forceHidden[buildEntryKey(entry)];
            // remove the forced-hidden segs
            for (let level = 0; level < entriesByLevel.length; level += 1) {
                entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
            }
            return hiddenSegs;
        }
        handleInvalidInsertion(insertion, entry, hiddenEntries) {
            const { entriesByLevel, forceHidden } = this;
            const { touchingEntry, touchingLevel, touchingLateral } = insertion;
            if (this.hiddenConsumes && touchingEntry) {
                const touchingEntryId = buildEntryKey(touchingEntry);
                // if not already hidden
                if (!forceHidden[touchingEntryId]) {
                    if (this.allowReslicing) {
                        const placeholderEntry = Object.assign(Object.assign({}, touchingEntry), { span: intersectSpans(touchingEntry.span, entry.span) });
                        const placeholderEntryId = buildEntryKey(placeholderEntry);
                        forceHidden[placeholderEntryId] = true;
                        entriesByLevel[touchingLevel][touchingLateral] = placeholderEntry; // replace touchingEntry with our placeholder
                        this.splitEntry(touchingEntry, entry, hiddenEntries); // split up the touchingEntry, reinsert it
                    }
                    else {
                        forceHidden[touchingEntryId] = true;
                        hiddenEntries.push(touchingEntry);
                    }
                }
            }
            return super.handleInvalidInsertion(insertion, entry, hiddenEntries);
        }
    }

    class TableRow extends DateComponent {
        constructor() {
            super(...arguments);
            this.cellElRefs = new RefMap(); // the <td>
            this.frameElRefs = new RefMap(); // the fc-daygrid-day-frame
            this.fgElRefs = new RefMap(); // the fc-daygrid-day-events
            this.segHarnessRefs = new RefMap(); // indexed by "instanceId:firstCol"
            this.rootElRef = y();
            this.state = {
                framePositions: null,
                maxContentHeight: null,
                eventInstanceHeights: {},
            };
            this.handleResize = (isForced) => {
                if (isForced) {
                    this.updateSizing(true); // isExternal=true
                }
            };
        }
        render() {
            let { props, state, context } = this;
            let { options } = context;
            let colCnt = props.cells.length;
            let businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
            let bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
            let highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
            let mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
            let { singleColPlacements, multiColPlacements, moreCnts, moreMarginTops } = computeFgSegPlacement(sortEventSegs(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells);
            let isForcedInvisible = // TODO: messy way to compute this
             (props.eventDrag && props.eventDrag.affectedInstances) ||
                (props.eventResize && props.eventResize.affectedInstances) ||
                {};
            return (h("tr", { ref: this.rootElRef, role: "row" },
                props.renderIntro && props.renderIntro(),
                props.cells.map((cell, col) => {
                    let normalFgNodes = this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
                    let mirrorFgNodes = this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
                    return (h(TableCell, { key: cell.key, elRef: this.cellElRefs.createRef(cell.key), innerElRef: this.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */, dateProfile: props.dateProfile, date: cell.date, showDayNumber: props.showDayNumbers, showWeekNumber: props.showWeekNumbers && col === 0, forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */, todayRange: props.todayRange, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, extraRenderProps: cell.extraRenderProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, moreCnt: moreCnts[col], moreMarginTop: moreMarginTops[col], singlePlacements: singleColPlacements[col], fgContentElRef: this.fgElRefs.createRef(cell.key), fgContent: ( // Fragment scopes the keys
                        h(p, null,
                            h(p, null, normalFgNodes),
                            h(p, null, mirrorFgNodes))), bgContent: ( // Fragment scopes the keys
                        h(p, null,
                            this.renderFillSegs(highlightSegsByCol[col], 'highlight'),
                            this.renderFillSegs(businessHoursByCol[col], 'non-business'),
                            this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))) }));
                })));
        }
        componentDidMount() {
            this.updateSizing(true);
            this.context.addResizeHandler(this.handleResize);
        }
        componentDidUpdate(prevProps, prevState) {
            let currentProps = this.props;
            this.updateSizing(!isPropsEqual(prevProps, currentProps));
        }
        componentWillUnmount() {
            this.context.removeResizeHandler(this.handleResize);
        }
        getHighlightSegs() {
            let { props } = this;
            if (props.eventDrag && props.eventDrag.segs.length) { // messy check
                return props.eventDrag.segs;
            }
            if (props.eventResize && props.eventResize.segs.length) { // messy check
                return props.eventResize.segs;
            }
            return props.dateSelectionSegs;
        }
        getMirrorSegs() {
            let { props } = this;
            if (props.eventResize && props.eventResize.segs.length) { // messy check
                return props.eventResize.segs;
            }
            return [];
        }
        renderFgSegs(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
            let { context } = this;
            let { eventSelection } = this.props;
            let { framePositions } = this.state;
            let defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
            let isMirror = isDragging || isResizing || isDateSelecting;
            let nodes = [];
            if (framePositions) {
                for (let placement of segPlacements) {
                    let { seg } = placement;
                    let { instanceId } = seg.eventRange.instance;
                    let key = instanceId + ':' + col;
                    let isVisible = placement.isVisible && !isForcedInvisible[instanceId];
                    let isAbsolute = placement.isAbsolute;
                    let left = '';
                    let right = '';
                    if (isAbsolute) {
                        if (context.isRtl) {
                            right = 0;
                            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
                        }
                        else {
                            left = 0;
                            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
                        }
                    }
                    /*
                    known bug: events that are force to be list-item but span multiple days still take up space in later columns
                    todo: in print view, for multi-day events, don't display title within non-start/end segs
                    */
                    nodes.push(h("div", { className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''), key: key, ref: isMirror ? null : this.segHarnessRefs.createRef(key), style: {
                            visibility: isVisible ? '' : 'hidden',
                            marginTop: isAbsolute ? '' : placement.marginTop,
                            top: isAbsolute ? placement.absoluteTop : '',
                            left,
                            right,
                        } }, hasListItemDisplay(seg) ? (h(TableListItemEvent, Object.assign({ seg: seg, isDragging: isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, getSegMeta(seg, todayRange)))) : (h(TableBlockEvent, Object.assign({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, getSegMeta(seg, todayRange))))));
                }
            }
            return nodes;
        }
        renderFillSegs(segs, fillType) {
            let { isRtl } = this.context;
            let { todayRange } = this.props;
            let { framePositions } = this.state;
            let nodes = [];
            if (framePositions) {
                for (let seg of segs) {
                    let leftRightCss = isRtl ? {
                        right: 0,
                        left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol],
                    } : {
                        left: 0,
                        right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol],
                    };
                    nodes.push(h("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-daygrid-bg-harness", style: leftRightCss }, fillType === 'bg-event' ?
                        h(BgEvent, Object.assign({ seg: seg }, getSegMeta(seg, todayRange))) :
                        renderFill(fillType)));
                }
            }
            return h(p, {}, ...nodes);
        }
        updateSizing(isExternalSizingChange) {
            let { props, frameElRefs } = this;
            if (!props.forPrint &&
                props.clientWidth !== null // positioning ready?
            ) {
                if (isExternalSizingChange) {
                    let frameEls = props.cells.map((cell) => frameElRefs.currentMap[cell.key]);
                    if (frameEls.length) {
                        let originEl = this.rootElRef.current;
                        this.setState({
                            framePositions: new PositionCache(originEl, frameEls, true, // isHorizontal
                            false),
                        });
                    }
                }
                const oldInstanceHeights = this.state.eventInstanceHeights;
                const newInstanceHeights = this.queryEventInstanceHeights();
                const limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
                this.safeSetState({
                    // HACK to prevent oscillations of events being shown/hidden from max-event-rows
                    // Essentially, once you compute an element's height, never null-out.
                    // TODO: always display all events, as visibility:hidden?
                    eventInstanceHeights: Object.assign(Object.assign({}, oldInstanceHeights), newInstanceHeights),
                    maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null,
                });
            }
        }
        queryEventInstanceHeights() {
            let segElMap = this.segHarnessRefs.currentMap;
            let eventInstanceHeights = {};
            // get the max height amongst instance segs
            for (let key in segElMap) {
                let height = Math.round(segElMap[key].getBoundingClientRect().height);
                let instanceId = key.split(':')[0]; // deconstruct how renderFgSegs makes the key
                eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
            }
            return eventInstanceHeights;
        }
        computeMaxContentHeight() {
            let firstKey = this.props.cells[0].key;
            let cellEl = this.cellElRefs.currentMap[firstKey];
            let fcContainerEl = this.fgElRefs.currentMap[firstKey];
            return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
        }
        getCellEls() {
            let elMap = this.cellElRefs.currentMap;
            return this.props.cells.map((cell) => elMap[cell.key]);
        }
    }
    TableRow.addStateEquality({
        eventInstanceHeights: isPropsEqual,
    });
    function buildMirrorPlacements(mirrorSegs, colPlacements) {
        if (!mirrorSegs.length) {
            return [];
        }
        let topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
        return mirrorSegs.map((seg) => ({
            seg,
            isVisible: true,
            isAbsolute: true,
            absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
            marginTop: 0,
        }));
    }
    function buildAbsoluteTopHash(colPlacements) {
        let topsByInstanceId = {};
        for (let placements of colPlacements) {
            for (let placement of placements) {
                topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
            }
        }
        return topsByInstanceId;
    }

    class Table extends DateComponent {
        constructor() {
            super(...arguments);
            this.splitBusinessHourSegs = memoize(splitSegsByRow);
            this.splitBgEventSegs = memoize(splitSegsByRow);
            this.splitFgEventSegs = memoize(splitSegsByRow);
            this.splitDateSelectionSegs = memoize(splitSegsByRow);
            this.splitEventDrag = memoize(splitInteractionByRow);
            this.splitEventResize = memoize(splitInteractionByRow);
            this.rowRefs = new RefMap();
            this.handleRootEl = (rootEl) => {
                this.rootEl = rootEl;
                if (rootEl) {
                    this.context.registerInteractiveComponent(this, {
                        el: rootEl,
                        isHitComboAllowed: this.props.isHitComboAllowed,
                    });
                }
                else {
                    this.context.unregisterInteractiveComponent(this);
                }
            };
        }
        render() {
            let { props } = this;
            let { dateProfile, dayMaxEventRows, dayMaxEvents, expandRows } = props;
            let rowCnt = props.cells.length;
            let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
            let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
            let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
            let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
            let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
            let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
            let limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
            // if rows can't expand to fill fixed height, can't do balanced-height event limit
            // TODO: best place to normalize these options?
            if (limitViaBalanced && !expandRows) {
                limitViaBalanced = false;
                dayMaxEventRows = null;
                dayMaxEvents = null;
            }
            let classNames = [
                'fc-daygrid-body',
                limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced',
                expandRows ? '' : 'fc-daygrid-body-natural', // will height of one row depend on the others?
            ];
            return (h("div", { className: classNames.join(' '), ref: this.handleRootEl, style: {
                    // these props are important to give this wrapper correct dimensions for interactions
                    // TODO: if we set it here, can we avoid giving to inner tables?
                    width: props.clientWidth,
                    minWidth: props.tableMinWidth,
                } },
                h(NowTimer, { unit: "day" }, (nowDate, todayRange) => (h(p, null,
                    h("table", { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
                            width: props.clientWidth,
                            minWidth: props.tableMinWidth,
                            height: expandRows ? props.clientHeight : '',
                        } },
                        props.colGroupNode,
                        h("tbody", { role: "presentation" }, props.cells.map((cells, row) => (h(TableRow, { ref: this.rowRefs.createRef(row), key: cells.length
                                ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */
                                : row // in case there are no cells (like when resource view is loading)
                            , showDayNumbers: rowCnt > 1, showWeekNumbers: props.showWeekNumbers, todayRange: todayRange, dateProfile: dateProfile, cells: cells, renderIntro: props.renderRowIntro, businessHourSegs: businessHourSegsByRow[row], eventSelection: props.eventSelection, bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* hack */, fgEventSegs: fgEventSegsByRow[row], dateSelectionSegs: dateSelectionSegsByRow[row], eventDrag: eventDragByRow[row], eventResize: eventResizeByRow[row], dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint }))))))))));
        }
        // Hit System
        // ----------------------------------------------------------------------------------------------------
        prepareHits() {
            this.rowPositions = new PositionCache(this.rootEl, this.rowRefs.collect().map((rowObj) => rowObj.getCellEls()[0]), // first cell el in each row. TODO: not optimal
            false, true);
            this.colPositions = new PositionCache(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
            true, // horizontal
            false);
        }
        queryHit(positionLeft, positionTop) {
            let { colPositions, rowPositions } = this;
            let col = colPositions.leftToIndex(positionLeft);
            let row = rowPositions.topToIndex(positionTop);
            if (row != null && col != null) {
                let cell = this.props.cells[row][col];
                return {
                    dateProfile: this.props.dateProfile,
                    dateSpan: Object.assign({ range: this.getCellRange(row, col), allDay: true }, cell.extraDateSpan),
                    dayEl: this.getCellEl(row, col),
                    rect: {
                        left: colPositions.lefts[col],
                        right: colPositions.rights[col],
                        top: rowPositions.tops[row],
                        bottom: rowPositions.bottoms[row],
                    },
                    layer: 0,
                };
            }
            return null;
        }
        getCellEl(row, col) {
            return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
        }
        getCellRange(row, col) {
            let start = this.props.cells[row][col].date;
            let end = addDays(start, 1);
            return { start, end };
        }
    }
    function isSegAllDay(seg) {
        return seg.eventRange.def.allDay;
    }

    class DayTableSlicer extends Slicer {
        constructor() {
            super(...arguments);
            this.forceDayIfListItem = true;
        }
        sliceRange(dateRange, dayTableModel) {
            return dayTableModel.sliceRange(dateRange);
        }
    }

    class DayTable extends DateComponent {
        constructor() {
            super(...arguments);
            this.slicer = new DayTableSlicer();
            this.tableRef = y();
        }
        render() {
            let { props, context } = this;
            return (h(Table, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), { dateProfile: props.dateProfile, cells: props.dayTableModel.cells, colGroupNode: props.colGroupNode, tableMinWidth: props.tableMinWidth, renderRowIntro: props.renderRowIntro, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, showWeekNumbers: props.showWeekNumbers, expandRows: props.expandRows, headerAlignElRef: props.headerAlignElRef, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })));
        }
    }

    class DayTableView extends TableView {
        constructor() {
            super(...arguments);
            this.buildDayTableModel = memoize(buildDayTableModel);
            this.headerRef = y();
            this.tableRef = y();
        }
        render() {
            let { options, dateProfileGenerator } = this.context;
            let { props } = this;
            let dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
            let headerContent = options.dayHeaders && (h(DayHeader, { ref: this.headerRef, dateProfile: props.dateProfile, dates: dayTableModel.headerDates, datesRepDistinctDays: dayTableModel.rowCnt === 1 }));
            let bodyContent = (contentArg) => (h(DayTable, { ref: this.tableRef, dateProfile: props.dateProfile, dayTableModel: dayTableModel, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, nextDayThreshold: options.nextDayThreshold, colGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, showWeekNumbers: options.weekNumbers, expandRows: !props.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }));
            return options.dayMinWidth
                ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth)
                : this.renderSimpleLayout(headerContent, bodyContent);
        }
    }
    function buildDayTableModel(dateProfile, dateProfileGenerator) {
        let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
        return new DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
    }

    class TableDateProfileGenerator extends DateProfileGenerator {
        // Computes the date range that will be rendered.
        buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
            let { dateEnv } = this.props;
            let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
            let start = renderRange.start;
            let end = renderRange.end;
            let endOfWeek;
            // year and month views should be aligned with weeks. this is already done for week
            if (/^(year|month)$/.test(currentRangeUnit)) {
                start = dateEnv.startOfWeek(start);
                // make end-of-week if not already
                endOfWeek = dateEnv.startOfWeek(end);
                if (endOfWeek.valueOf() !== end.valueOf()) {
                    end = addWeeks(endOfWeek, 1);
                }
            }
            // ensure 6 weeks
            if (this.props.monthMode &&
                this.props.fixedWeekCount) {
                let rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
                diffWeeks(start, end));
                end = addWeeks(end, 6 - rowCnt);
            }
            return { start, end };
        }
    }

    var css_248z$2 = ":root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;padding:2px 3px 0}.fc .fc-daygrid-day-bottom:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-more-link{cursor:pointer;position:relative;z-index:4}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}";
    injectStyles(css_248z$2);

    var index$2 = createPlugin({
        name: '@fullcalendar/daygrid',
        initialView: 'dayGridMonth',
        views: {
            dayGrid: {
                component: DayTableView,
                dateProfileGeneratorClass: TableDateProfileGenerator,
            },
            dayGridDay: {
                type: 'dayGrid',
                duration: { days: 1 },
            },
            dayGridWeek: {
                type: 'dayGrid',
                duration: { weeks: 1 },
            },
            dayGridMonth: {
                type: 'dayGrid',
                duration: { months: 1 },
                monthMode: true,
                fixedWeekCount: true,
            },
        },
    });

    class AllDaySplitter extends Splitter {
        getKeyInfo() {
            return {
                allDay: {},
                timed: {},
            };
        }
        getKeysForDateSpan(dateSpan) {
            if (dateSpan.allDay) {
                return ['allDay'];
            }
            return ['timed'];
        }
        getKeysForEventDef(eventDef) {
            if (!eventDef.allDay) {
                return ['timed'];
            }
            if (hasBgRendering(eventDef)) {
                return ['timed', 'allDay'];
            }
            return ['allDay'];
        }
    }

    const DEFAULT_SLAT_LABEL_FORMAT = createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: 'short',
    });
    function TimeColsAxisCell(props) {
        let classNames = [
            'fc-timegrid-slot',
            'fc-timegrid-slot-label',
            props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor',
        ];
        return (h(ViewContextType.Consumer, null, (context) => {
            if (!props.isLabeled) {
                return (h("td", { className: classNames.join(' '), "data-time": props.isoTimeStr }));
            }
            let { dateEnv, options, viewApi } = context;
            let labelFormat = // TODO: fully pre-parse
             options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT :
                Array.isArray(options.slotLabelFormat) ? createFormatter(options.slotLabelFormat[0]) :
                    createFormatter(options.slotLabelFormat);
            let renderProps = {
                level: 0,
                time: props.time,
                date: dateEnv.toDate(props.date),
                view: viewApi,
                text: dateEnv.format(props.date, labelFormat),
            };
            return (h(ContentContainer, { elTag: "td", elClasses: classNames, elAttrs: {
                    'data-time': props.isoTimeStr,
                }, renderProps: renderProps, generatorName: "slotLabelContent", generator: options.slotLabelContent || renderInnerContent$1, classNameGenerator: options.slotLabelClassNames, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, (InnerContent) => (h("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
                h(InnerContent, { elTag: "div", elClasses: [
                        'fc-timegrid-slot-label-cushion',
                        'fc-scrollgrid-shrink-cushion',
                    ] })))));
        }));
    }
    function renderInnerContent$1(props) {
        return props.text;
    }

    class TimeBodyAxis extends BaseComponent {
        render() {
            return this.props.slatMetas.map((slatMeta) => (h("tr", { key: slatMeta.key },
                h(TimeColsAxisCell, Object.assign({}, slatMeta)))));
        }
    }

    const DEFAULT_WEEK_NUM_FORMAT = createFormatter({ week: 'short' });
    const AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
    class TimeColsView extends DateComponent {
        constructor() {
            super(...arguments);
            this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
            this.headerElRef = y();
            this.rootElRef = y();
            this.scrollerElRef = y();
            this.state = {
                slatCoords: null,
            };
            this.handleScrollTopRequest = (scrollTop) => {
                let scrollerEl = this.scrollerElRef.current;
                if (scrollerEl) { // TODO: not sure how this could ever be null. weirdness with the reducer
                    scrollerEl.scrollTop = scrollTop;
                }
            };
            /* Header Render Methods
            ------------------------------------------------------------------------------------------------------------------*/
            this.renderHeadAxis = (rowKey, frameHeight = '') => {
                let { options } = this.context;
                let { dateProfile } = this.props;
                let range = dateProfile.renderRange;
                let dayCnt = diffDays(range.start, range.end);
                // only do in day views (to avoid doing in week views that dont need it)
                let navLinkAttrs = (dayCnt === 1)
                    ? buildNavLinkAttrs(this.context, range.start, 'week')
                    : {};
                if (options.weekNumbers && rowKey === 'day') {
                    return (h(WeekNumberContainer, { elTag: "th", elClasses: [
                            'fc-timegrid-axis',
                            'fc-scrollgrid-shrink',
                        ], elAttrs: {
                            'aria-hidden': true,
                        }, date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, (InnerContent) => (h("div", { className: [
                            'fc-timegrid-axis-frame',
                            'fc-scrollgrid-shrink-frame',
                            'fc-timegrid-axis-frame-liquid',
                        ].join(' '), style: { height: frameHeight } },
                        h(InnerContent, { elTag: "a", elClasses: [
                                'fc-timegrid-axis-cushion',
                                'fc-scrollgrid-shrink-cushion',
                                'fc-scrollgrid-sync-inner',
                            ], elAttrs: navLinkAttrs })))));
                }
                return (h("th", { "aria-hidden": true, className: "fc-timegrid-axis" },
                    h("div", { className: "fc-timegrid-axis-frame", style: { height: frameHeight } })));
            };
            /* Table Component Render Methods
            ------------------------------------------------------------------------------------------------------------------*/
            // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
            // but DayGrid still needs to have classNames on inner elements in order to measure.
            this.renderTableRowAxis = (rowHeight) => {
                let { options, viewApi } = this.context;
                let renderProps = {
                    text: options.allDayText,
                    view: viewApi,
                };
                return (
                // TODO: make reusable hook. used in list view too
                h(ContentContainer, { elTag: "td", elClasses: [
                        'fc-timegrid-axis',
                        'fc-scrollgrid-shrink',
                    ], elAttrs: {
                        'aria-hidden': true,
                    }, renderProps: renderProps, generatorName: "allDayContent", generator: options.allDayContent || renderAllDayInner$1, classNameGenerator: options.allDayClassNames, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, (InnerContent) => (h("div", { className: [
                        'fc-timegrid-axis-frame',
                        'fc-scrollgrid-shrink-frame',
                        rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : '',
                    ].join(' '), style: { height: rowHeight } },
                    h(InnerContent, { elTag: "span", elClasses: [
                            'fc-timegrid-axis-cushion',
                            'fc-scrollgrid-shrink-cushion',
                            'fc-scrollgrid-sync-inner',
                        ] })))));
            };
            this.handleSlatCoords = (slatCoords) => {
                this.setState({ slatCoords });
            };
        }
        // rendering
        // ----------------------------------------------------------------------------------------------------
        renderSimpleLayout(headerRowContent, allDayContent, timeContent) {
            let { context, props } = this;
            let sections = [];
            let stickyHeaderDates = getStickyHeaderDates(context.options);
            if (headerRowContent) {
                sections.push({
                    type: 'header',
                    key: 'header',
                    isSticky: stickyHeaderDates,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    },
                });
            }
            if (allDayContent) {
                sections.push({
                    type: 'body',
                    key: 'all-day',
                    chunk: { content: allDayContent },
                });
                sections.push({
                    type: 'body',
                    key: 'all-day-divider',
                    outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                    h("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                        h("td", { className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
                });
            }
            sections.push({
                type: 'body',
                key: 'body',
                liquid: true,
                expandRows: Boolean(context.options.expandRows),
                chunk: {
                    scrollerElRef: this.scrollerElRef,
                    content: timeContent,
                },
            });
            return (h(ViewContainer$1, { elRef: this.rootElRef, elClasses: ['fc-timegrid'], viewSpec: context.viewSpec },
                h(SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [{ width: 'shrink' }], sections: sections })));
        }
        renderHScrollLayout(headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
            let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
            if (!ScrollGrid) {
                throw new Error('No ScrollGrid implementation');
            }
            let { context, props } = this;
            let stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
            let stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
            let sections = [];
            if (headerRowContent) {
                sections.push({
                    type: 'header',
                    key: 'header',
                    isSticky: stickyHeaderDates,
                    syncRowHeights: true,
                    chunks: [
                        {
                            key: 'axis',
                            rowContent: (arg) => (h("tr", { role: "presentation" }, this.renderHeadAxis('day', arg.rowSyncHeights[0]))),
                        },
                        {
                            key: 'cols',
                            elRef: this.headerElRef,
                            tableClassName: 'fc-col-header',
                            rowContent: headerRowContent,
                        },
                    ],
                });
            }
            if (allDayContent) {
                sections.push({
                    type: 'body',
                    key: 'all-day',
                    syncRowHeights: true,
                    chunks: [
                        {
                            key: 'axis',
                            rowContent: (contentArg) => (h("tr", { role: "presentation" }, this.renderTableRowAxis(contentArg.rowSyncHeights[0]))),
                        },
                        {
                            key: 'cols',
                            content: allDayContent,
                        },
                    ],
                });
                sections.push({
                    key: 'all-day-divider',
                    type: 'body',
                    outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                    h("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                        h("td", { colSpan: 2, className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
                });
            }
            let isNowIndicator = context.options.nowIndicator;
            sections.push({
                type: 'body',
                key: 'body',
                liquid: true,
                expandRows: Boolean(context.options.expandRows),
                chunks: [
                    {
                        key: 'axis',
                        content: (arg) => (
                        // TODO: make this now-indicator arrow more DRY with TimeColsContent
                        h("div", { className: "fc-timegrid-axis-chunk" },
                            h("table", { "aria-hidden": true, style: { height: arg.expandRows ? arg.clientHeight : '' } },
                                arg.tableColGroupNode,
                                h("tbody", null,
                                    h(TimeBodyAxis, { slatMetas: slatMetas }))),
                            h("div", { className: "fc-timegrid-now-indicator-container" },
                                h(NowTimer, { unit: isNowIndicator ? 'minute' : 'day' /* hacky */ }, (nowDate) => {
                                    let nowIndicatorTop = isNowIndicator &&
                                        slatCoords &&
                                        slatCoords.safeComputeTop(nowDate); // might return void
                                    if (typeof nowIndicatorTop === 'number') {
                                        return (h(NowIndicatorContainer, { elClasses: ['fc-timegrid-now-indicator-arrow'], elStyle: { top: nowIndicatorTop }, isAxis: true, date: nowDate }));
                                    }
                                    return null;
                                })))),
                    },
                    {
                        key: 'cols',
                        scrollerElRef: this.scrollerElRef,
                        content: timeContent,
                    },
                ],
            });
            if (stickyFooterScrollbar) {
                sections.push({
                    key: 'footer',
                    type: 'footer',
                    isSticky: true,
                    chunks: [
                        {
                            key: 'axis',
                            content: renderScrollShim,
                        },
                        {
                            key: 'cols',
                            content: renderScrollShim,
                        },
                    ],
                });
            }
            return (h(ViewContainer$1, { elRef: this.rootElRef, elClasses: ['fc-timegrid'], viewSpec: context.viewSpec },
                h(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: false, colGroups: [
                        { width: 'shrink', cols: [{ width: 'shrink' }] },
                        { cols: [{ span: colCnt, minWidth: dayMinWidth }] },
                    ], sections: sections })));
        }
        /* Dimensions
        ------------------------------------------------------------------------------------------------------------------*/
        getAllDayMaxEventProps() {
            let { dayMaxEvents, dayMaxEventRows } = this.context.options;
            if (dayMaxEvents === true || dayMaxEventRows === true) { // is auto?
                dayMaxEvents = undefined;
                dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
            }
            return { dayMaxEvents, dayMaxEventRows };
        }
    }
    function renderAllDayInner$1(renderProps) {
        return renderProps.text;
    }

    class TimeColsSlatsCoords {
        constructor(positions, dateProfile, slotDuration) {
            this.positions = positions;
            this.dateProfile = dateProfile;
            this.slotDuration = slotDuration;
        }
        safeComputeTop(date) {
            let { dateProfile } = this;
            if (rangeContainsMarker(dateProfile.currentRange, date)) {
                let startOfDayDate = startOfDay(date);
                let timeMs = date.valueOf() - startOfDayDate.valueOf();
                if (timeMs >= asRoughMs(dateProfile.slotMinTime) &&
                    timeMs < asRoughMs(dateProfile.slotMaxTime)) {
                    return this.computeTimeTop(createDuration(timeMs));
                }
            }
            return null;
        }
        // Computes the top coordinate, relative to the bounds of the grid, of the given date.
        // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
        computeDateTop(when, startOfDayDate) {
            if (!startOfDayDate) {
                startOfDayDate = startOfDay(when);
            }
            return this.computeTimeTop(createDuration(when.valueOf() - startOfDayDate.valueOf()));
        }
        // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
        // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
        // Eventually allow computation with arbirary slat dates.
        computeTimeTop(duration) {
            let { positions, dateProfile } = this;
            let len = positions.els.length;
            // floating-point value of # of slots covered
            let slatCoverage = (duration.milliseconds - asRoughMs(dateProfile.slotMinTime)) / asRoughMs(this.slotDuration);
            let slatIndex;
            let slatRemainder;
            // compute a floating-point number for how many slats should be progressed through.
            // from 0 to number of slats (inclusive)
            // constrained because slotMinTime/slotMaxTime might be customized.
            slatCoverage = Math.max(0, slatCoverage);
            slatCoverage = Math.min(len, slatCoverage);
            // an integer index of the furthest whole slat
            // from 0 to number slats (*exclusive*, so len-1)
            slatIndex = Math.floor(slatCoverage);
            slatIndex = Math.min(slatIndex, len - 1);
            // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
            // could be 1.0 if slatCoverage is covering *all* the slots
            slatRemainder = slatCoverage - slatIndex;
            return positions.tops[slatIndex] +
                positions.getHeight(slatIndex) * slatRemainder;
        }
    }

    class TimeColsSlatsBody extends BaseComponent {
        render() {
            let { props, context } = this;
            let { options } = context;
            let { slatElRefs } = props;
            return (h("tbody", null, props.slatMetas.map((slatMeta, i) => {
                let renderProps = {
                    time: slatMeta.time,
                    date: context.dateEnv.toDate(slatMeta.date),
                    view: context.viewApi,
                };
                return (h("tr", { key: slatMeta.key, ref: slatElRefs.createRef(slatMeta.key) },
                    props.axis && (h(TimeColsAxisCell, Object.assign({}, slatMeta))),
                    h(ContentContainer, { elTag: "td", elClasses: [
                            'fc-timegrid-slot',
                            'fc-timegrid-slot-lane',
                            !slatMeta.isLabeled && 'fc-timegrid-slot-minor',
                        ], elAttrs: {
                            'data-time': slatMeta.isoTimeStr,
                        }, renderProps: renderProps, generatorName: "slotLaneContent", generator: options.slotLaneContent, classNameGenerator: options.slotLaneClassNames, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount })));
            })));
        }
    }

    /*
    for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
    */
    class TimeColsSlats extends BaseComponent {
        constructor() {
            super(...arguments);
            this.rootElRef = y();
            this.slatElRefs = new RefMap();
        }
        render() {
            let { props, context } = this;
            return (h("div", { ref: this.rootElRef, className: "fc-timegrid-slots" },
                h("table", { "aria-hidden": true, className: context.theme.getClass('table'), style: {
                        minWidth: props.tableMinWidth,
                        width: props.clientWidth,
                        height: props.minHeight,
                    } },
                    props.tableColGroupNode /* relies on there only being a single <col> for the axis */,
                    h(TimeColsSlatsBody, { slatElRefs: this.slatElRefs, axis: props.axis, slatMetas: props.slatMetas }))));
        }
        componentDidMount() {
            this.updateSizing();
        }
        componentDidUpdate() {
            this.updateSizing();
        }
        componentWillUnmount() {
            if (this.props.onCoords) {
                this.props.onCoords(null);
            }
        }
        updateSizing() {
            let { context, props } = this;
            if (props.onCoords &&
                props.clientWidth !== null // means sizing has stabilized
            ) {
                let rootEl = this.rootElRef.current;
                if (rootEl.offsetHeight) { // not hidden by css
                    props.onCoords(new TimeColsSlatsCoords(new PositionCache(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
                }
            }
        }
    }
    function collectSlatEls(elMap, slatMetas) {
        return slatMetas.map((slatMeta) => elMap[slatMeta.key]);
    }

    function splitSegsByCol(segs, colCnt) {
        let segsByCol = [];
        let i;
        for (i = 0; i < colCnt; i += 1) {
            segsByCol.push([]);
        }
        if (segs) {
            for (i = 0; i < segs.length; i += 1) {
                segsByCol[segs[i].col].push(segs[i]);
            }
        }
        return segsByCol;
    }
    function splitInteractionByCol(ui, colCnt) {
        let byRow = [];
        if (!ui) {
            for (let i = 0; i < colCnt; i += 1) {
                byRow[i] = null;
            }
        }
        else {
            for (let i = 0; i < colCnt; i += 1) {
                byRow[i] = {
                    affectedInstances: ui.affectedInstances,
                    isEvent: ui.isEvent,
                    segs: [],
                };
            }
            for (let seg of ui.segs) {
                byRow[seg.col].segs.push(seg);
            }
        }
        return byRow;
    }

    class TimeColMoreLink extends BaseComponent {
        render() {
            let { props } = this;
            return (h(MoreLinkContainer, { elClasses: ['fc-timegrid-more-link'], elStyle: {
                    top: props.top,
                    bottom: props.bottom,
                }, allDayDate: null, moreCnt: props.hiddenSegs.length, allSegs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: () => renderPlainFgSegs(props.hiddenSegs, props), defaultGenerator: renderMoreLinkInner }, (InnerContent) => (h(InnerContent, { elTag: "div", elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky'] }))));
        }
    }
    function renderMoreLinkInner(props) {
        return props.shortText;
    }

    // segInputs assumed sorted
    function buildPositioning(segInputs, strictOrder, maxStackCnt) {
        let hierarchy = new SegHierarchy();
        if (strictOrder != null) {
            hierarchy.strictOrder = strictOrder;
        }
        if (maxStackCnt != null) {
            hierarchy.maxStackCnt = maxStackCnt;
        }
        let hiddenEntries = hierarchy.addSegs(segInputs);
        let hiddenGroups = groupIntersectingEntries(hiddenEntries);
        let web = buildWeb(hierarchy);
        web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
        let segRects = webToRects(web);
        return { segRects, hiddenGroups };
    }
    function buildWeb(hierarchy) {
        const { entriesByLevel } = hierarchy;
        const buildNode = cacheable((level, lateral) => level + ':' + lateral, (level, lateral) => {
            let siblingRange = findNextLevelSegs(hierarchy, level, lateral);
            let nextLevelRes = buildNodes(siblingRange, buildNode);
            let entry = entriesByLevel[level][lateral];
            return [
                Object.assign(Object.assign({}, entry), { nextLevelNodes: nextLevelRes[0] }),
                entry.thickness + nextLevelRes[1], // the pressure builds
            ];
        });
        return buildNodes(entriesByLevel.length
            ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length }
            : null, buildNode)[0];
    }
    function buildNodes(siblingRange, buildNode) {
        if (!siblingRange) {
            return [[], 0];
        }
        let { level, lateralStart, lateralEnd } = siblingRange;
        let lateral = lateralStart;
        let pairs = [];
        while (lateral < lateralEnd) {
            pairs.push(buildNode(level, lateral));
            lateral += 1;
        }
        pairs.sort(cmpDescPressures);
        return [
            pairs.map(extractNode),
            pairs[0][1], // first item's pressure
        ];
    }
    function cmpDescPressures(a, b) {
        return b[1] - a[1];
    }
    function extractNode(a) {
        return a[0];
    }
    function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
        let { levelCoords, entriesByLevel } = hierarchy;
        let subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
        let afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
        let levelCnt = levelCoords.length;
        let level = subjectLevel;
        // skip past levels that are too high up
        for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
            ; // do nothing
        for (; level < levelCnt; level += 1) {
            let entries = entriesByLevel[level];
            let entry;
            let searchIndex = binarySearch(entries, subjectEntry.span.start, getEntrySpanEnd);
            let lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
            let lateralEnd = lateralStart;
            while ( // loop through entries that horizontally intersect
            (entry = entries[lateralEnd]) && // but not past the whole seg list
                entry.span.start < subjectEntry.span.end) {
                lateralEnd += 1;
            }
            if (lateralStart < lateralEnd) {
                return { level, lateralStart, lateralEnd };
            }
        }
        return null;
    }
    function stretchWeb(topLevelNodes, totalThickness) {
        const stretchNode = cacheable((node, startCoord, prevThickness) => buildEntryKey(node), (node, startCoord, prevThickness) => {
            let { nextLevelNodes, thickness } = node;
            let allThickness = thickness + prevThickness;
            let thicknessFraction = thickness / allThickness;
            let endCoord;
            let newChildren = [];
            if (!nextLevelNodes.length) {
                endCoord = totalThickness;
            }
            else {
                for (let childNode of nextLevelNodes) {
                    if (endCoord === undefined) {
                        let res = stretchNode(childNode, startCoord, allThickness);
                        endCoord = res[0];
                        newChildren.push(res[1]);
                    }
                    else {
                        let res = stretchNode(childNode, endCoord, 0);
                        newChildren.push(res[1]);
                    }
                }
            }
            let newThickness = (endCoord - startCoord) * thicknessFraction;
            return [endCoord - newThickness, Object.assign(Object.assign({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
        });
        return topLevelNodes.map((node) => stretchNode(node, 0, 0)[1]);
    }
    // not sorted in any particular order
    function webToRects(topLevelNodes) {
        let rects = [];
        const processNode = cacheable((node, levelCoord, stackDepth) => buildEntryKey(node), (node, levelCoord, stackDepth) => {
            let rect = Object.assign(Object.assign({}, node), { levelCoord,
                stackDepth, stackForward: 0 });
            rects.push(rect);
            return (rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1);
        });
        function processNodes(nodes, levelCoord, stackDepth) {
            let stackForward = 0;
            for (let node of nodes) {
                stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
            }
            return stackForward;
        }
        processNodes(topLevelNodes, 0, 0);
        return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
    }
    // TODO: move to general util
    function cacheable(keyFunc, workFunc) {
        const cache = {};
        return (...args) => {
            let key = keyFunc(...args);
            return (key in cache)
                ? cache[key]
                : (cache[key] = workFunc(...args));
        };
    }

    function computeSegVCoords(segs, colDate, slatCoords = null, eventMinHeight = 0) {
        let vcoords = [];
        if (slatCoords) {
            for (let i = 0; i < segs.length; i += 1) {
                let seg = segs[i];
                let spanStart = slatCoords.computeDateTop(seg.start, colDate);
                let spanEnd = Math.max(spanStart + (eventMinHeight || 0), // :(
                slatCoords.computeDateTop(seg.end, colDate));
                vcoords.push({
                    start: Math.round(spanStart),
                    end: Math.round(spanEnd), //
                });
            }
        }
        return vcoords;
    }
    function computeFgSegPlacements(segs, segVCoords, // might not have for every seg
    eventOrderStrict, eventMaxStack) {
        let segInputs = [];
        let dumbSegs = []; // segs without coords
        for (let i = 0; i < segs.length; i += 1) {
            let vcoords = segVCoords[i];
            if (vcoords) {
                segInputs.push({
                    index: i,
                    thickness: 1,
                    span: vcoords,
                });
            }
            else {
                dumbSegs.push(segs[i]);
            }
        }
        let { segRects, hiddenGroups } = buildPositioning(segInputs, eventOrderStrict, eventMaxStack);
        let segPlacements = [];
        for (let segRect of segRects) {
            segPlacements.push({
                seg: segs[segRect.index],
                rect: segRect,
            });
        }
        for (let dumbSeg of dumbSegs) {
            segPlacements.push({ seg: dumbSeg, rect: null });
        }
        return { segPlacements, hiddenGroups };
    }

    const DEFAULT_TIME_FORMAT$1 = createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        meridiem: false,
    });
    class TimeColEvent extends BaseComponent {
        render() {
            return (h(StandardEvent, Object.assign({}, this.props, { elClasses: [
                    'fc-timegrid-event',
                    'fc-v-event',
                    this.props.isShort && 'fc-timegrid-event-short',
                ], defaultTimeFormat: DEFAULT_TIME_FORMAT$1 })));
        }
    }

    class TimeCol extends BaseComponent {
        constructor() {
            super(...arguments);
            this.sortEventSegs = memoize(sortEventSegs);
        }
        // TODO: memoize event-placement?
        render() {
            let { props, context } = this;
            let { options } = context;
            let isSelectMirror = options.selectMirror;
            let mirrorSegs = // yuck
             (props.eventDrag && props.eventDrag.segs) ||
                (props.eventResize && props.eventResize.segs) ||
                (isSelectMirror && props.dateSelectionSegs) ||
                [];
            let interactionAffectedInstances = // TODO: messy way to compute this
             (props.eventDrag && props.eventDrag.affectedInstances) ||
                (props.eventResize && props.eventResize.affectedInstances) ||
                {};
            let sortedFgSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
            return (h(DayCellContainer, { elTag: "td", elRef: props.elRef, elClasses: [
                    'fc-timegrid-col',
                    ...(props.extraClassNames || []),
                ], elAttrs: Object.assign({ role: 'gridcell' }, props.extraDataAttrs), date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraRenderProps: props.extraRenderProps }, (InnerContent) => (h("div", { className: "fc-timegrid-col-frame" },
                h("div", { className: "fc-timegrid-col-bg" },
                    this.renderFillSegs(props.businessHourSegs, 'non-business'),
                    this.renderFillSegs(props.bgEventSegs, 'bg-event'),
                    this.renderFillSegs(props.dateSelectionSegs, 'highlight')),
                h("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)),
                h("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror))),
                h("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(props.nowIndicatorSegs)),
                hasCustomDayCellContent(options) && (h(InnerContent, { elTag: "div", elClasses: ['fc-timegrid-col-misc'] }))))));
        }
        renderFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
            let { props } = this;
            if (props.forPrint) {
                return renderPlainFgSegs(sortedFgSegs, props);
            }
            return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting);
        }
        renderPositionedFgSegs(segs, // if not mirror, needs to be sorted
        segIsInvisible, isDragging, isResizing, isDateSelecting) {
            let { eventMaxStack, eventShortHeight, eventOrderStrict, eventMinHeight } = this.context.options;
            let { date, slatCoords, eventSelection, todayRange, nowDate } = this.props;
            let isMirror = isDragging || isResizing || isDateSelecting;
            let segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
            let { segPlacements, hiddenGroups } = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack);
            return (h(p, null,
                this.renderHiddenGroups(hiddenGroups, segs),
                segPlacements.map((segPlacement) => {
                    let { seg, rect } = segPlacement;
                    let instanceId = seg.eventRange.instance.instanceId;
                    let isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
                    let vStyle = computeSegVStyle(rect && rect.span);
                    let hStyle = (!isMirror && rect) ? this.computeSegHStyle(rect) : { left: 0, right: 0 };
                    let isInset = Boolean(rect) && rect.stackForward > 0;
                    let isShort = Boolean(rect) && (rect.span.end - rect.span.start) < eventShortHeight; // look at other places for this problem
                    return (h("div", { className: 'fc-timegrid-event-harness' +
                            (isInset ? ' fc-timegrid-event-harness-inset' : ''), key: instanceId, style: Object.assign(Object.assign({ visibility: isVisible ? '' : 'hidden' }, vStyle), hStyle) },
                        h(TimeColEvent, Object.assign({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, isShort: isShort }, getSegMeta(seg, todayRange, nowDate)))));
                })));
        }
        // will already have eventMinHeight applied because segInputs already had it
        renderHiddenGroups(hiddenGroups, segs) {
            let { extraDateSpan, dateProfile, todayRange, nowDate, eventSelection, eventDrag, eventResize } = this.props;
            return (h(p, null, hiddenGroups.map((hiddenGroup) => {
                let positionCss = computeSegVStyle(hiddenGroup.span);
                let hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
                return (h(TimeColMoreLink, { key: buildIsoString(computeEarliestSegStart(hiddenSegs)), hiddenSegs: hiddenSegs, top: positionCss.top, bottom: positionCss.bottom, extraDateSpan: extraDateSpan, dateProfile: dateProfile, todayRange: todayRange, nowDate: nowDate, eventSelection: eventSelection, eventDrag: eventDrag, eventResize: eventResize }));
            })));
        }
        renderFillSegs(segs, fillType) {
            let { props, context } = this;
            let segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
            let children = segVCoords.map((vcoords, i) => {
                let seg = segs[i];
                return (h("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-timegrid-bg-harness", style: computeSegVStyle(vcoords) }, fillType === 'bg-event' ?
                    h(BgEvent, Object.assign({ seg: seg }, getSegMeta(seg, props.todayRange, props.nowDate))) :
                    renderFill(fillType)));
            });
            return h(p, null, children);
        }
        renderNowIndicator(segs) {
            let { slatCoords, date } = this.props;
            if (!slatCoords) {
                return null;
            }
            return segs.map((seg, i) => (h(NowIndicatorContainer
            // key doesn't matter. will only ever be one
            , { 
                // key doesn't matter. will only ever be one
                key: i, elClasses: ['fc-timegrid-now-indicator-line'], elStyle: {
                    top: slatCoords.computeDateTop(seg.start, date),
                }, isAxis: false, date: date })));
        }
        computeSegHStyle(segHCoords) {
            let { isRtl, options } = this.context;
            let shouldOverlap = options.slotEventOverlap;
            let nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
            let farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
            let left; // amount of space from left edge, a fraction of the total width
            let right; // amount of space from right edge, a fraction of the total width
            if (shouldOverlap) {
                // double the width, but don't go beyond the maximum forward coordinate (1.0)
                farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
            }
            if (isRtl) {
                left = 1 - farCoord;
                right = nearCoord;
            }
            else {
                left = nearCoord;
                right = 1 - farCoord;
            }
            let props = {
                zIndex: segHCoords.stackDepth + 1,
                left: left * 100 + '%',
                right: right * 100 + '%',
            };
            if (shouldOverlap && !segHCoords.stackForward) {
                // add padding to the edge so that forward stacked events don't cover the resizer's icon
                props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
            }
            return props;
        }
    }
    function renderPlainFgSegs(sortedFgSegs, { todayRange, nowDate, eventSelection, eventDrag, eventResize }) {
        let hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) ||
            (eventResize ? eventResize.affectedInstances : null) ||
            {};
        return (h(p, null, sortedFgSegs.map((seg) => {
            let instanceId = seg.eventRange.instance.instanceId;
            return (h("div", { key: instanceId, style: { visibility: hiddenInstances[instanceId] ? 'hidden' : '' } },
                h(TimeColEvent, Object.assign({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false }, getSegMeta(seg, todayRange, nowDate)))));
        })));
    }
    function computeSegVStyle(segVCoords) {
        if (!segVCoords) {
            return { top: '', bottom: '' };
        }
        return {
            top: segVCoords.start,
            bottom: -segVCoords.end,
        };
    }
    function compileSegsFromEntries(segEntries, allSegs) {
        return segEntries.map((segEntry) => allSegs[segEntry.index]);
    }

    class TimeColsContent extends BaseComponent {
        constructor() {
            super(...arguments);
            this.splitFgEventSegs = memoize(splitSegsByCol);
            this.splitBgEventSegs = memoize(splitSegsByCol);
            this.splitBusinessHourSegs = memoize(splitSegsByCol);
            this.splitNowIndicatorSegs = memoize(splitSegsByCol);
            this.splitDateSelectionSegs = memoize(splitSegsByCol);
            this.splitEventDrag = memoize(splitInteractionByCol);
            this.splitEventResize = memoize(splitInteractionByCol);
            this.rootElRef = y();
            this.cellElRefs = new RefMap();
        }
        render() {
            let { props, context } = this;
            let nowIndicatorTop = context.options.nowIndicator &&
                props.slatCoords &&
                props.slatCoords.safeComputeTop(props.nowDate); // might return void
            let colCnt = props.cells.length;
            let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
            let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
            let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
            let nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
            let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
            let eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
            let eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
            return (h("div", { className: "fc-timegrid-cols", ref: this.rootElRef },
                h("table", { role: "presentation", style: {
                        minWidth: props.tableMinWidth,
                        width: props.clientWidth,
                    } },
                    props.tableColGroupNode,
                    h("tbody", { role: "presentation" },
                        h("tr", { role: "row" },
                            props.axis && (h("td", { "aria-hidden": true, className: "fc-timegrid-col fc-timegrid-axis" },
                                h("div", { className: "fc-timegrid-col-frame" },
                                    h("div", { className: "fc-timegrid-now-indicator-container" }, typeof nowIndicatorTop === 'number' && (h(NowIndicatorContainer, { elClasses: ['fc-timegrid-now-indicator-arrow'], elStyle: { top: nowIndicatorTop }, isAxis: true, date: props.nowDate })))))),
                            props.cells.map((cell, i) => (h(TimeCol, { key: cell.key, elRef: this.cellElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, nowDate: props.nowDate, todayRange: props.todayRange, extraRenderProps: cell.extraRenderProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, fgEventSegs: fgEventSegsByRow[i], bgEventSegs: bgEventSegsByRow[i], businessHourSegs: businessHourSegsByRow[i], nowIndicatorSegs: nowIndicatorSegsByRow[i], dateSelectionSegs: dateSelectionSegsByRow[i], eventDrag: eventDragByRow[i], eventResize: eventResizeByRow[i], slatCoords: props.slatCoords, eventSelection: props.eventSelection, forPrint: props.forPrint }))))))));
        }
        componentDidMount() {
            this.updateCoords();
        }
        componentDidUpdate() {
            this.updateCoords();
        }
        updateCoords() {
            let { props } = this;
            if (props.onColCoords &&
                props.clientWidth !== null // means sizing has stabilized
            ) {
                props.onColCoords(new PositionCache(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true, // horizontal
                false));
            }
        }
    }
    function collectCellEls(elMap, cells) {
        return cells.map((cell) => elMap[cell.key]);
    }

    /* A component that renders one or more columns of vertical time slots
    ----------------------------------------------------------------------------------------------------------------------*/
    class TimeCols extends DateComponent {
        constructor() {
            super(...arguments);
            this.processSlotOptions = memoize(processSlotOptions);
            this.state = {
                slatCoords: null,
            };
            this.handleRootEl = (el) => {
                if (el) {
                    this.context.registerInteractiveComponent(this, {
                        el,
                        isHitComboAllowed: this.props.isHitComboAllowed,
                    });
                }
                else {
                    this.context.unregisterInteractiveComponent(this);
                }
            };
            this.handleScrollRequest = (request) => {
                let { onScrollTopRequest } = this.props;
                let { slatCoords } = this.state;
                if (onScrollTopRequest && slatCoords) {
                    if (request.time) {
                        let top = slatCoords.computeTimeTop(request.time);
                        top = Math.ceil(top); // zoom can give weird floating-point values. rather scroll a little bit further
                        if (top) {
                            top += 1; // to overcome top border that slots beyond the first have. looks better
                        }
                        onScrollTopRequest(top);
                    }
                    return true;
                }
                return false;
            };
            this.handleColCoords = (colCoords) => {
                this.colCoords = colCoords;
            };
            this.handleSlatCoords = (slatCoords) => {
                this.setState({ slatCoords });
                if (this.props.onSlatCoords) {
                    this.props.onSlatCoords(slatCoords);
                }
            };
        }
        render() {
            let { props, state } = this;
            return (h("div", { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
                    // these props are important to give this wrapper correct dimensions for interactions
                    // TODO: if we set it here, can we avoid giving to inner tables?
                    width: props.clientWidth,
                    minWidth: props.tableMinWidth,
                } },
                h(TimeColsSlats, { axis: props.axis, dateProfile: props.dateProfile, slatMetas: props.slatMetas, clientWidth: props.clientWidth, minHeight: props.expandRows ? props.clientHeight : '', tableMinWidth: props.tableMinWidth, tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */, onCoords: this.handleSlatCoords }),
                h(TimeColsContent, { cells: props.cells, axis: props.axis, dateProfile: props.dateProfile, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange, nowDate: props.nowDate, nowIndicatorSegs: props.nowIndicatorSegs, clientWidth: props.clientWidth, tableMinWidth: props.tableMinWidth, tableColGroupNode: props.tableColGroupNode, slatCoords: state.slatCoords, onColCoords: this.handleColCoords, forPrint: props.forPrint })));
        }
        componentDidMount() {
            this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
        }
        componentDidUpdate(prevProps) {
            this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
        }
        componentWillUnmount() {
            this.scrollResponder.detach();
        }
        queryHit(positionLeft, positionTop) {
            let { dateEnv, options } = this.context;
            let { colCoords } = this;
            let { dateProfile } = this.props;
            let { slatCoords } = this.state;
            let { snapDuration, snapsPerSlot } = this.processSlotOptions(this.props.slotDuration, options.snapDuration);
            let colIndex = colCoords.leftToIndex(positionLeft);
            let slatIndex = slatCoords.positions.topToIndex(positionTop);
            if (colIndex != null && slatIndex != null) {
                let cell = this.props.cells[colIndex];
                let slatTop = slatCoords.positions.tops[slatIndex];
                let slatHeight = slatCoords.positions.getHeight(slatIndex);
                let partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
                let localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
                let snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
                let dayDate = this.props.cells[colIndex].date;
                let time = addDurations(dateProfile.slotMinTime, multiplyDuration(snapDuration, snapIndex));
                let start = dateEnv.add(dayDate, time);
                let end = dateEnv.add(start, snapDuration);
                return {
                    dateProfile,
                    dateSpan: Object.assign({ range: { start, end }, allDay: false }, cell.extraDateSpan),
                    dayEl: colCoords.els[colIndex],
                    rect: {
                        left: colCoords.lefts[colIndex],
                        right: colCoords.rights[colIndex],
                        top: slatTop,
                        bottom: slatTop + slatHeight,
                    },
                    layer: 0,
                };
            }
            return null;
        }
    }
    function processSlotOptions(slotDuration, snapDurationOverride) {
        let snapDuration = snapDurationOverride || slotDuration;
        let snapsPerSlot = wholeDivideDurations(slotDuration, snapDuration);
        if (snapsPerSlot === null) {
            snapDuration = slotDuration;
            snapsPerSlot = 1;
            // TODO: say warning?
        }
        return { snapDuration, snapsPerSlot };
    }

    class DayTimeColsSlicer extends Slicer {
        sliceRange(range, dayRanges) {
            let segs = [];
            for (let col = 0; col < dayRanges.length; col += 1) {
                let segRange = intersectRanges(range, dayRanges[col]);
                if (segRange) {
                    segs.push({
                        start: segRange.start,
                        end: segRange.end,
                        isStart: segRange.start.valueOf() === range.start.valueOf(),
                        isEnd: segRange.end.valueOf() === range.end.valueOf(),
                        col,
                    });
                }
            }
            return segs;
        }
    }

    class DayTimeCols extends DateComponent {
        constructor() {
            super(...arguments);
            this.buildDayRanges = memoize(buildDayRanges);
            this.slicer = new DayTimeColsSlicer();
            this.timeColsRef = y();
        }
        render() {
            let { props, context } = this;
            let { dateProfile, dayTableModel } = props;
            let isNowIndicator = context.options.nowIndicator;
            let dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
            // give it the first row of cells
            // TODO: would move this further down hierarchy, but sliceNowDate needs it
            return (h(NowTimer, { unit: isNowIndicator ? 'minute' : 'day' }, (nowDate, todayRange) => (h(TimeCols, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), { forPrint: props.forPrint, axis: props.axis, dateProfile: dateProfile, slatMetas: props.slatMetas, slotDuration: props.slotDuration, cells: dayTableModel.cells[0], tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, clientWidth: props.clientWidth, clientHeight: props.clientHeight, expandRows: props.expandRows, nowDate: nowDate, nowIndicatorSegs: isNowIndicator && this.slicer.sliceNowDate(nowDate, context, dayRanges), todayRange: todayRange, onScrollTopRequest: props.onScrollTopRequest, onSlatCoords: props.onSlatCoords })))));
        }
    }
    function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
        let ranges = [];
        for (let date of dayTableModel.headerDates) {
            ranges.push({
                start: dateEnv.add(date, dateProfile.slotMinTime),
                end: dateEnv.add(date, dateProfile.slotMaxTime),
            });
        }
        return ranges;
    }

    // potential nice values for the slot-duration and interval-duration
    // from largest to smallest
    const STOCK_SUB_DURATIONS = [
        { hours: 1 },
        { minutes: 30 },
        { minutes: 15 },
        { seconds: 30 },
        { seconds: 15 },
    ];
    function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
        let dayStart = new Date(0);
        let slatTime = slotMinTime;
        let slatIterator = createDuration(0);
        let labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
        let metas = [];
        while (asRoughMs(slatTime) < asRoughMs(slotMaxTime)) {
            let date = dateEnv.add(dayStart, slatTime);
            let isLabeled = wholeDivideDurations(slatIterator, labelInterval) !== null;
            metas.push({
                date,
                time: slatTime,
                key: date.toISOString(),
                isoTimeStr: formatIsoTimeString(date),
                isLabeled,
            });
            slatTime = addDurations(slatTime, slotDuration);
            slatIterator = addDurations(slatIterator, slotDuration);
        }
        return metas;
    }
    // Computes an automatic value for slotLabelInterval
    function computeLabelInterval(slotDuration) {
        let i;
        let labelInterval;
        let slotsPerLabel;
        // find the smallest stock label interval that results in more than one slots-per-label
        for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
            labelInterval = createDuration(STOCK_SUB_DURATIONS[i]);
            slotsPerLabel = wholeDivideDurations(labelInterval, slotDuration);
            if (slotsPerLabel !== null && slotsPerLabel > 1) {
                return labelInterval;
            }
        }
        return slotDuration; // fall back
    }

    class DayTimeColsView extends TimeColsView {
        constructor() {
            super(...arguments);
            this.buildTimeColsModel = memoize(buildTimeColsModel);
            this.buildSlatMetas = memoize(buildSlatMetas);
        }
        render() {
            let { options, dateEnv, dateProfileGenerator } = this.context;
            let { props } = this;
            let { dateProfile } = props;
            let dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
            let splitProps = this.allDaySplitter.splitProps(props);
            let slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
            let { dayMinWidth } = options;
            let hasAttachedAxis = !dayMinWidth;
            let hasDetachedAxis = dayMinWidth;
            let headerContent = options.dayHeaders && (h(DayHeader, { dates: dayTableModel.headerDates, dateProfile: dateProfile, datesRepDistinctDays: true, renderIntro: hasAttachedAxis ? this.renderHeadAxis : null }));
            let allDayContent = (options.allDaySlot !== false) && ((contentArg) => (h(DayTable, Object.assign({}, splitProps.allDay, { dateProfile: dateProfile, dayTableModel: dayTableModel, nextDayThreshold: options.nextDayThreshold, tableMinWidth: contentArg.tableMinWidth, colGroupNode: contentArg.tableColGroupNode, renderRowIntro: hasAttachedAxis ? this.renderTableRowAxis : null, showWeekNumbers: false, expandRows: false, headerAlignElRef: this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }, this.getAllDayMaxEventProps()))));
            let timeGridContent = (contentArg) => (h(DayTimeCols, Object.assign({}, splitProps.timed, { dayTableModel: dayTableModel, dateProfile: dateProfile, axis: hasAttachedAxis, slotDuration: options.slotDuration, slatMetas: slatMetas, forPrint: props.forPrint, tableColGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: contentArg.expandRows, onScrollTopRequest: this.handleScrollTopRequest })));
            return hasDetachedAxis
                ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords)
                : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
        }
    }
    function buildTimeColsModel(dateProfile, dateProfileGenerator) {
        let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
        return new DayTableModel(daySeries, false);
    }

    const OPTION_REFINERS$1 = {
        allDaySlot: Boolean,
    };

    var css_248z$1 = ".fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:\"\\00a0\"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:\"\\00a0-\\00a0\"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}";
    injectStyles(css_248z$1);

    var index$1 = createPlugin({
        name: '@fullcalendar/timegrid',
        initialView: 'timeGridWeek',
        optionRefiners: OPTION_REFINERS$1,
        views: {
            timeGrid: {
                component: DayTimeColsView,
                usesMinMaxTime: true,
                allDaySlot: true,
                slotDuration: '00:30:00',
                slotEventOverlap: true, // a bad name. confused with overlap/constraint system
            },
            timeGridDay: {
                type: 'timeGrid',
                duration: { days: 1 },
            },
            timeGridWeek: {
                type: 'timeGrid',
                duration: { weeks: 1 },
            },
        },
    });

    class ListViewHeaderRow extends BaseComponent {
        constructor() {
            super(...arguments);
            this.state = {
                textId: getUniqueDomId(),
            };
        }
        render() {
            let { theme, dateEnv, options, viewApi } = this.context;
            let { cellId, dayDate, todayRange } = this.props;
            let { textId } = this.state;
            let dayMeta = getDateMeta(dayDate, todayRange);
            // will ever be falsy?
            let text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
            // will ever be falsy? also, BAD NAME "alt"
            let sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
            let renderProps = Object.assign({ date: dateEnv.toDate(dayDate), view: viewApi, textId,
                text,
                sideText, navLinkAttrs: buildNavLinkAttrs(this.context, dayDate), sideNavLinkAttrs: buildNavLinkAttrs(this.context, dayDate, 'day', false) }, dayMeta);
            // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
            return (h(ContentContainer, { elTag: "tr", elClasses: [
                    'fc-list-day',
                    ...getDayClassNames(dayMeta, theme),
                ], elAttrs: {
                    'data-date': formatDayString(dayDate),
                }, renderProps: renderProps, generatorName: "dayHeaderContent", generator: options.dayHeaderContent || renderInnerContent, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContent) => ( // TODO: force-hide top border based on :first-child
            h("th", { scope: "colgroup", colSpan: 3, id: cellId, "aria-labelledby": textId },
                h(InnerContent, { elTag: "div", elClasses: [
                        'fc-list-day-cushion',
                        theme.getClass('tableCellShaded'),
                    ] })))));
        }
    }
    function renderInnerContent(props) {
        return (h(p, null,
            props.text && (h("a", Object.assign({ id: props.textId, className: "fc-list-day-text" }, props.navLinkAttrs), props.text)),
            props.sideText && ( /* not keyboard tabbable */h("a", Object.assign({ "aria-hidden": true, className: "fc-list-day-side-text" }, props.sideNavLinkAttrs), props.sideText))));
    }

    const DEFAULT_TIME_FORMAT = createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        meridiem: 'short',
    });
    class ListViewEventRow extends BaseComponent {
        render() {
            let { props, context } = this;
            let { options } = context;
            let { seg, timeHeaderId, eventHeaderId, dateHeaderId } = props;
            let timeFormat = options.eventTimeFormat || DEFAULT_TIME_FORMAT;
            return (h(EventContainer, Object.assign({}, props, { elTag: "tr", elClasses: [
                    'fc-list-event',
                    seg.eventRange.def.url && 'fc-event-forced-url',
                ], defaultGenerator: () => renderEventInnerContent(seg, context) /* weird */, seg: seg, timeText: "", disableDragging: true, disableResizing: true }), (InnerContent, eventContentArg) => (h(p, null,
                buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId),
                h("td", { "aria-hidden": true, className: "fc-list-event-graphic" },
                    h("span", { className: "fc-list-event-dot", style: {
                            borderColor: eventContentArg.borderColor || eventContentArg.backgroundColor,
                        } })),
                h(InnerContent, { elTag: "td", elClasses: ['fc-list-event-title'], elAttrs: { headers: `${eventHeaderId} ${dateHeaderId}` } })))));
        }
    }
    function renderEventInnerContent(seg, context) {
        let interactiveAttrs = getSegAnchorAttrs(seg, context);
        return (h("a", Object.assign({}, interactiveAttrs), seg.eventRange.def.title));
    }
    function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
        let { options } = context;
        if (options.displayEventTime !== false) {
            let eventDef = seg.eventRange.def;
            let eventInstance = seg.eventRange.instance;
            let doAllDay = false;
            let timeText;
            if (eventDef.allDay) {
                doAllDay = true;
            }
            else if (isMultiDayRange(seg.eventRange.range)) { // TODO: use (!isStart || !isEnd) instead?
                if (seg.isStart) {
                    timeText = buildSegTimeText(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
                }
                else if (seg.isEnd) {
                    timeText = buildSegTimeText(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
                }
                else {
                    doAllDay = true;
                }
            }
            else {
                timeText = buildSegTimeText(seg, timeFormat, context);
            }
            if (doAllDay) {
                let renderProps = {
                    text: context.options.allDayText,
                    view: context.viewApi,
                };
                return (h(ContentContainer, { elTag: "td", elClasses: ['fc-list-event-time'], elAttrs: {
                        headers: `${timeHeaderId} ${dateHeaderId}`,
                    }, renderProps: renderProps, generatorName: "allDayContent", generator: options.allDayContent || renderAllDayInner, classNameGenerator: options.allDayClassNames, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }));
            }
            return (h("td", { className: "fc-list-event-time" }, timeText));
        }
        return null;
    }
    function renderAllDayInner(renderProps) {
        return renderProps.text;
    }

    /*
    Responsible for the scroller, and forwarding event-related actions into the "grid".
    */
    class ListView extends DateComponent {
        constructor() {
            super(...arguments);
            this.computeDateVars = memoize(computeDateVars);
            this.eventStoreToSegs = memoize(this._eventStoreToSegs);
            this.state = {
                timeHeaderId: getUniqueDomId(),
                eventHeaderId: getUniqueDomId(),
                dateHeaderIdRoot: getUniqueDomId(),
            };
            this.setRootEl = (rootEl) => {
                if (rootEl) {
                    this.context.registerInteractiveComponent(this, {
                        el: rootEl,
                    });
                }
                else {
                    this.context.unregisterInteractiveComponent(this);
                }
            };
        }
        render() {
            let { props, context } = this;
            let { dayDates, dayRanges } = this.computeDateVars(props.dateProfile);
            let eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
            return (h(ViewContainer$1, { elRef: this.setRootEl, elClasses: [
                    'fc-list',
                    context.theme.getClass('table'),
                    context.options.stickyHeaderDates !== false ?
                        'fc-list-sticky' :
                        '',
                ], viewSpec: context.viewSpec },
                h(Scroller, { liquid: !props.isHeightAuto, overflowX: props.isHeightAuto ? 'visible' : 'hidden', overflowY: props.isHeightAuto ? 'visible' : 'auto' }, eventSegs.length > 0 ?
                    this.renderSegList(eventSegs, dayDates) :
                    this.renderEmptyMessage())));
        }
        renderEmptyMessage() {
            let { options, viewApi } = this.context;
            let renderProps = {
                text: options.noEventsText,
                view: viewApi,
            };
            return (h(ContentContainer, { elTag: "div", elClasses: ['fc-list-empty'], renderProps: renderProps, generatorName: "noEventsContent", generator: options.noEventsContent || renderNoEventsInner, classNameGenerator: options.noEventsClassNames, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, (InnerContent) => (h(InnerContent, { elTag: "div", elClasses: ['fc-list-empty-cushion'] }))));
        }
        renderSegList(allSegs, dayDates) {
            let { theme, options } = this.context;
            let { timeHeaderId, eventHeaderId, dateHeaderIdRoot } = this.state;
            let segsByDay = groupSegsByDay(allSegs); // sparse array
            return (h(NowTimer, { unit: "day" }, (nowDate, todayRange) => {
                let innerNodes = [];
                for (let dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
                    let daySegs = segsByDay[dayIndex];
                    if (daySegs) { // sparse array, so might be undefined
                        let dayStr = formatDayString(dayDates[dayIndex]);
                        let dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
                        // append a day header
                        innerNodes.push(h(ListViewHeaderRow, { key: dayStr, cellId: dateHeaderId, dayDate: dayDates[dayIndex], todayRange: todayRange }));
                        daySegs = sortEventSegs(daySegs, options.eventOrder);
                        for (let seg of daySegs) {
                            innerNodes.push(h(ListViewEventRow, Object.assign({ key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */, seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, timeHeaderId: timeHeaderId, eventHeaderId: eventHeaderId, dateHeaderId: dateHeaderId }, getSegMeta(seg, todayRange, nowDate))));
                        }
                    }
                }
                return (h("table", { className: 'fc-list-table ' + theme.getClass('table') },
                    h("thead", null,
                        h("tr", null,
                            h("th", { scope: "col", id: timeHeaderId }, options.timeHint),
                            h("th", { scope: "col", "aria-hidden": true }),
                            h("th", { scope: "col", id: eventHeaderId }, options.eventHint))),
                    h("tbody", null, innerNodes)));
            }));
        }
        _eventStoreToSegs(eventStore, eventUiBases, dayRanges) {
            return this.eventRangesToSegs(sliceEventStore(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
        }
        eventRangesToSegs(eventRanges, dayRanges) {
            let segs = [];
            for (let eventRange of eventRanges) {
                segs.push(...this.eventRangeToSegs(eventRange, dayRanges));
            }
            return segs;
        }
        eventRangeToSegs(eventRange, dayRanges) {
            let { dateEnv } = this.context;
            let { nextDayThreshold } = this.context.options;
            let range = eventRange.range;
            let allDay = eventRange.def.allDay;
            let dayIndex;
            let segRange;
            let seg;
            let segs = [];
            for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
                segRange = intersectRanges(range, dayRanges[dayIndex]);
                if (segRange) {
                    seg = {
                        component: this,
                        eventRange,
                        start: segRange.start,
                        end: segRange.end,
                        isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                        isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                        dayIndex,
                    };
                    segs.push(seg);
                    // detect when range won't go fully into the next day,
                    // and mutate the latest seg to the be the end.
                    if (!seg.isEnd && !allDay &&
                        dayIndex + 1 < dayRanges.length &&
                        range.end <
                            dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                        seg.end = range.end;
                        seg.isEnd = true;
                        break;
                    }
                }
            }
            return segs;
        }
    }
    function renderNoEventsInner(renderProps) {
        return renderProps.text;
    }
    function computeDateVars(dateProfile) {
        let dayStart = startOfDay(dateProfile.renderRange.start);
        let viewEnd = dateProfile.renderRange.end;
        let dayDates = [];
        let dayRanges = [];
        while (dayStart < viewEnd) {
            dayDates.push(dayStart);
            dayRanges.push({
                start: dayStart,
                end: addDays(dayStart, 1),
            });
            dayStart = addDays(dayStart, 1);
        }
        return { dayDates, dayRanges };
    }
    // Returns a sparse array of arrays, segs grouped by their dayIndex
    function groupSegsByDay(segs) {
        let segsByDay = []; // sparse array
        let i;
        let seg;
        for (i = 0; i < segs.length; i += 1) {
            seg = segs[i];
            (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
                .push(seg);
        }
        return segsByDay;
    }

    const OPTION_REFINERS = {
        listDayFormat: createFalsableFormatter,
        listDaySideFormat: createFalsableFormatter,
        noEventsClassNames: identity,
        noEventsContent: identity,
        noEventsDidMount: identity,
        noEventsWillUnmount: identity,
        // noEventsText is defined in base options
    };
    function createFalsableFormatter(input) {
        return input === false ? null : createFormatter(input);
    }

    var css_248z = ":root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:\"\";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}";
    injectStyles(css_248z);

    var index = createPlugin({
        name: '@fullcalendar/list',
        optionRefiners: OPTION_REFINERS,
        views: {
            list: {
                component: ListView,
                buttonTextKey: 'list',
                listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' }, // like "January 1, 2016"
            },
            listDay: {
                type: 'list',
                duration: { days: 1 },
                listDayFormat: { weekday: 'long' }, // day-of-week is all we need. full date is probably in headerToolbar
            },
            listWeek: {
                type: 'list',
                duration: { weeks: 1 },
                listDayFormat: { weekday: 'long' },
                listDaySideFormat: { month: 'long', day: 'numeric', year: 'numeric' },
            },
            listMonth: {
                type: 'list',
                duration: { month: 1 },
                listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
            },
            listYear: {
                type: 'list',
                duration: { year: 1 },
                listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
            },
        },
    });

    globalPlugins.push(index$3, index$2, index$1, index);

    exports.Calendar = Calendar;
    exports.Draggable = ExternalDraggable;
    exports.Internal = internal;
    exports.JsonRequestError = JsonRequestError;
    exports.ThirdPartyDraggable = ThirdPartyDraggable;
    exports.createPlugin = createPlugin;
    exports.formatDate = formatDate;
    exports.formatRange = formatRange;
    exports.globalLocales = globalLocales;
    exports.globalPlugins = globalPlugins;
    exports.sliceEvents = sliceEvents;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
//# sourceMappingURL=index.global.js.map

jQuery(document).ready(function($)
{
	if (typeof wpcf7 !== 'undefined')
	{
		wpcf7.cached = 0;

		let successTitleMSG = $('#successTitleMSG').val();
		let successTextMSG = $('#successTextMSG').val();

		let errorMSG = $('#errorTextMSG').val();

		document.addEventListener( 'wpcf7invalid', function( event )
		{
			$('.wpcf7-response-output').attr('class', 'wpcf7-response-output alert alert-danger');
		    
		    if(errorMSG == '')
		    	errorMSG = 'Por favor diligencia los campos requeridos';

		    swal({
		  		title: '<div class="textSuccessFormulario">' + errorMSG + '</div>',
		  		type: 'error',
		  		showCloseButton: true,
		  		showConfirmButton: false,
			});

		}, false );

		document.addEventListener( 'wpcf7spam', function( event )
		{
			$('.wpcf7-response-output').attr('class', 'wpcf7-response-output alert alert-warning');
		}, false );

		document.addEventListener( 'wpcf7mailfailed', function( event )
		{
			$('.wpcf7-response-output').attr('class', 'wpcf7-response-output alert alert-warning');
		}, false );

		document.addEventListener( 'wpcf7mailsent', function( event )
		{
			$('.wpcf7-response-output').attr('class', 'wpcf7-response-output alert alert-success');

		    swal({
		  		title: '<div class="textSuccessFormulario">' + successTitleMSG + '</div>',
		  		text: successTextMSG,
		  		type: 'success',
		  		showCloseButton: true,
		  		showConfirmButton: false,
			});

		}, false );

		document.addEventListener( 'wpcf7submit', function( event )
		{
			HoldOn.close();
		}, false );

		$('form.wpcf7-form').on('submit',function()
		{
			var options = {
			     theme:"sk-rect",
			     message:'Enviando, Espere un momento',
			     textColor:"white"
			};

			HoldOn.open(options);
		});

		let formulario = document.getElementById('modalFormulario');

		if(formulario)
		{
			let modalFormulario = new bootstrap.Modal(formulario,
			{
				backdrop: true,
				keyboard: false
			});
		}
	}
});
jQuery(document).ready(function($)
{
	if (typeof showModalMultimedia !== 'undefined')
	{
		if (showModalMultimedia == 'si')
		{
			var modalMultimedia = new bootstrap.Modal(document.getElementById('modalMultimedia'),
			{
				backdrop: true,
				keyboard: false
			})

			modalMultimedia.show();

		    $('#modalMultimedia').on('hidden.bs.modal', function ()
		    {
				var memory = $(this).html();
			    $(this).html(memory);
		    });

			let player = document.getElementById("modalMultimediaVideo"),
			play = document.getElementById("btn-multimedia-si");

			play.addEventListener("click",function()
			{
				player.play();
			});

		}
	}
});
jQuery(document).ready(function ($)
{
  let options =
  {
    theme: "sk-rect",
    message: 'Cargando, espere un momento',
    textColor: "white"
  };

  $('#registerDate').datepicker({
      language: "es",
      endDate: '+1d',
      datesDisabled: '+1d',
      autoclose: true,
      enableOnReadonly: false,
  });

  $('.selectpicker').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue)
  {
    let elementName = jQuery(this).attr('name');

    if(isSelected == true)
    {
      jQuery(this).nextAll('.dropdown-toggle:first').removeClass('is-invalid');
      jQuery('#' + elementName + '-error').hide();

      if(elementName == 'registerOrganiacionCiudadana')
      {
        if(clickedIndex == 6)
        {
          jQuery('#otraOrganizacion').show();
        }
      }
    }
    else
    {
      if(previousValue.length == 1)
      {
        jQuery(this).nextAll('.dropdown-toggle:first').addClass('is-invalid');
        jQuery('#' + elementName + '-error').text('El campo es obligatorio').show();
      }

      if(elementName == 'registerOrganiacionCiudadana')
      {
        if(clickedIndex == 6)
        {
          jQuery('#otraOrganizacion').hide();
        }
      }
    }
  });

  let recoverPassEl = document.getElementById('modalRecoverPass');

  if(recoverPassEl)
  {
    let modalRecoverPass = new bootstrap.Modal(recoverPassEl,
    {
      backdrop: true,
      keyboard: false
    });
  }

  let registerEl = document.getElementById('modalRegister');

  if(registerEl)
  {
    let modalRegister = new bootstrap.Modal(registerEl,
    {
      backdrop: true,
      keyboard: false
    });
  }

  $( "#loginForm" ).validate(
  {
    rules:
    {
      'email':
      {
        required: true,
        custom_email: true
      },
      'password':
      {
        required: true,
        strong_password: true
      }
    },
    messages:
    {
      'email':
      {
        required: "El campo es obligatorio",
        email: "El campo debe tener formato de email correcto"
      },
      'password':
      {
        required: "El campo es obligatorio",
      }
    },
    submitHandler: function(form)
    {
      HoldOn.open(options);

      jQuery.ajax(
      {
        type: 'POST',
        url: ajaxURL,
        data:
        {
          action: 'ajax_login',
          email: $("#loginEmail").val(),
          pass: $("#loginPass").val()
        },
        success: function (response)
        {
          let data = null;

          try
          {
            data = JSON.parse(response);
          } catch (e) {}

          if (data != null)
          {
            if(data.type == 'success')
            {
              jQuery(location).attr('href', data.redirectURL);
            }
            else
            {
              HoldOn.close();
              swal('<div class="textSuccessFormulario">' + data.title + '</div>', data.message, data.type);
            }
          }
          else
          {
            HoldOn.close();
            swal('<div class="textSuccessFormulario">Error</div>', "Ocurrio un error", "error");
          }
        },
        error: function (response)
        {
          HoldOn.close();
        },
        fail: function (response)
        {
          HoldOn.close();
        }
      });
    }
  });

  $( "#recoverPassForm" ).validate(
  {
    rules:
    {
      'email':
      {
        required: true,
        custom_email: true
      },
    },
    messages:
    {
      'email':
      {
        required: "El campo es obligatorio",
        email: "El campo debe tener formato de email correcto"
      },
    },
    submitHandler: function(form)
    {
      HoldOn.open(options);

      jQuery.ajax(
      {
        type: 'POST',
        url: ajaxURL,
        data:
        {
          action: 'ajax_recover_pass',
          email: $("#recoverPassEmail").val(),
        },
        success: function (response)
        {
          HoldOn.close();
          let data = null;

          try
          {
            data = JSON.parse(response);
          } catch (e) {}

          if (data != null)
          {
            swal(data.title, data.message, data.type);
          }
          else
          {
            swal("Error", "Ocurrio un error", "error");
          }
        },
        error: function (response)
        {
          HoldOn.close();
        },
        fail: function (response)
        {
          HoldOn.close();
        }
      });
    }
  });

  $( "#registerForm" ).validate(
  {
    rules:
    {
      'registerName':
      {
        required: true,
      },
      'registerTipoDocumento':
      {
        required: true,
        valueNotEquals: "default"
      },
      'registerDocumento':
      {
        required: true,
      },
      'registerTelefono':
      {
        required: true,
        maxlength: 10,
        minlength: 10,
        digits: true
      },
      'registerDate':
      {
        required: true,
      },
      'registerEmail':
      {
        required: true,
        custom_email: true
      },
      'registerIdentidadGenero':
      {
        required: true,
        valueNotEquals: "default"
      },
      'registerLocalidad':
      {
        required: true,
        valueNotEquals: "default"
      },
      'registerOrganiacionCiudadana':
      {
        required: true,
        valueNotEquals: "default"
      },
      'registerPoblacionDiferencial':
      {
        required: true,
        valueNotEquals: "default"
      },
      'registerOtraOrganizacion':
      {
        required: true,
      },
      'registerAceptarRegistro':
      {
        required: true,
      },
    },
    messages:
    {
      'registerName':
      {
        required: "El campo es obligatorio",
      },
      'registerTipoDocumento':
      {
        required: "El campo es obligatorio",
        valueNotEquals: "El campo es obligatorio"
      },
      'registerDocumento':
      {
        required: "El campo es obligatorio",
      },
      'registerTelefono':
      {
        required: "El campo es obligatorio",
        maxlength: "El teléfono debe contener 10 digitos",
        minlength: "El teléfono debe contener 10 digitos",
        digits: "El campo solo acepta números"
      },
      'registerDate':
      {
        required: "El campo es obligatorio",
      },
      'registerEmail':
      {
        required: "El campo es obligatorio",
        email: "El campo debe tener formato de email correcto"
      },
      'registerIdentidadGenero':
      {
        required: "El campo es obligatorio",
        valueNotEquals: "El campo es obligatorio"
      },
      'registerLocalidad':
      {
        required: "El campo es obligatorio",
        valueNotEquals: "El campo es obligatorio"
      },
      'registerOrganiacionCiudadana':
      {
        required: "El campo es obligatorio",
        valueNotEquals: "El campo es obligatorio"
      },
      'registerPoblacionDiferencial':
      {
        required: "El campo es obligatorio",
        valueNotEquals: "El campo es obligatorio"
      },
      'registerOtraOrganizacion':
      {
        required: "El campo es obligatorio",
      },
      'registerAceptarRegistro':
      {
        required: "El campo es obligatorio",
      },
    },
    submitHandler: function(form)
    {
      HoldOn.open(options);

      var formData = new FormData(document.getElementById("registerForm"));

      jQuery.ajax(
      {
        type: 'POST',
        url: ajaxURL,
        processData: false,
        contentType: false,
        data: formData,
        success: function (response)
        {
          let data = null;

          try
          {
            data = JSON.parse(response);
          } catch (e) {}

          if (data != null)
          {
              HoldOn.close();
              swal('<div class="textSuccessFormulario">' + data.title + '</div>', data.message, data.type);
          }
          else
          {
            HoldOn.close();
            swal('<div class="textSuccessFormulario">Error</div>', "Ocurrio un error", "error");
          }
        },
        error: function (response)
        {
          console.log("Error");
          console.log(response);
          HoldOn.close();
        },
        fail: function (response)
        {
          console.log("Fail");
          console.log(response);
          HoldOn.close();
        }
      });
    }
  });

  $.uploadPreview(
  {
    input_field: "#registerFoto",   // Default: .image-upload
    preview_box: "#image-preview",  // Default: .image-preview
    label_field: "#image-label",    // Default: .image-label
    label_default: "Subir foto",   // Default: Choose File
    label_selected: "Cambiar foto",  // Default: Change File
    no_label: false                 // Default: false
  });

});

jQuery.validator.setDefaults(
{
  highlight: function(element)
  {
    jQuery(element).closest('.form-control').addClass('is-invalid');

    if(jQuery(element).hasClass('selectpicker'))
    {
      jQuery(element).nextAll('.dropdown-toggle:first').addClass('is-invalid');
    }
  },
  unhighlight: function(element)
  {
    jQuery(element).closest('.form-control').removeClass('is-invalid');

    if(jQuery(element).hasClass('selectpicker'))
    {
      jQuery(element).nextAll('.dropdown-toggle:first').removeClass('is-invalid');
    }
  },
  errorElement: 'span',
  errorClass: 'text-danger label-danger',
  errorPlacement: function(error, element)
  {
      if(element.parent('.input-group').length)
      {
          error.insertAfter(element.parent());
      }
      else
      {
          error.insertAfter(element);
      }
  }
});

jQuery.validator.addMethod("custom_email", function(value, element)
{
  return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
}, "El campo debe tener formato de email correcto");

jQuery.validator.addMethod("strong_password", function (value, element)
{
    let password = value;

    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(.{8,20}$)/.test(password)))
    {
        return false;
    }
    return true;
}, function (value, element)
{
    let password = jQuery(element).val();

    if (!(/^(.{8,20}$)/.test(password))) {
        return 'La contraseña debe tener entre 8 y 20 caracteres.';
    }
    else if (!(/^(?=.*[A-Z])/.test(password))) {
        return 'La contraseña debe contener al menos una mayúscula.';
    }
    else if (!(/^(?=.*[a-z])/.test(password))) {
        return 'La contraseña debe contener al menos una minúscula.';
    }
    else if (!(/^(?=.*[0-9])/.test(password))) {
        return 'La contraseña debe contener al menos un dígito.';
    }
   
/*
    else if (!(/^(?=.*[@#$%&])/.test(password))) {
        return "Password must contain special characters from @#$%&.";
    }
*/
    return false;
});

jQuery.validator.addMethod("valueNotEquals", function(value, element, arg)
{
  return arg !== value;
});

function showPassword()
{
  var x = document.getElementById("loginPass");
  
  if (x.type === "password")
  {
    x.type = "text";
  }
  else
  {
    x.type = "password";
  }
}
jQuery(document).ready(function($)
{
	$('.modalDependencias').modal(
	{
	    backdrop: true,
	    keyboard: false
	});

  $('.multi-item-carousel').slick(
  {
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive:
    [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

	$('.modalDependencias').on('shown.bs.modal', function()
	{
 		$(this).find('.multi-item-carousel').css('opacity', 1);
 		$(this).find('.multi-item-carousel').slick('setPosition');
    $(this).find('.multi-item-carousel').slick('slickGoTo', 1);
  });

	$('.modalDependencias').on('hiden.bs.modal', function()
	{
		$(this).find('.multi-item-carousel').css('opacity', 0);
  });

  $(document).click(function(e)
  {
    if (!$(e.target).is('.panel-body'))
    {
        $('.collapseSelect').collapse('hide');      
    }
  });

});
jQuery(document).ready(function($)
{
  $(".timeline").slick(
  {
    centerMode: false,
    centerPadding: '30px',
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive:
    [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
jQuery(document).ready(function($)
{
  var calendarEl = document.getElementById('calendar');
  var all_events = [];
  var charged_events_month = [];

  if(calendarEl)
  {  
    let containerClone = $('.events-container').clone().addClass('eventClone');

    var calendar = new FullCalendar.Calendar(calendarEl,
    {
        initialView: 'dayGridMonth',
        locales: 'es',
        fixedWeekCount: false,
        headerToolbar:
        {
            left: 'prev',
            center: 'title',
            right: 'next',
        },
        titleFormat:
        {
            year: 'numeric',
            month: 'short',
        },
        datesSet: function(view,element)
        {
            var now = new Date();
            var endNext = new Date();
            var endPrev = new Date();

            endNext.setMonth(now.getMonth() + 3);
            endPrev.setMonth(now.getMonth() - 3);

            if ( endNext < view.end)
            {
                $("#calendar .fc-next-button").css('opacity', '0.25');
                $("#calendar .fc-next-button").prop("disabled", true);

                return false;
            }
            else
            {
                $("#calendar .fc-next-button").css('opacity', '1');
                $("#calendar .fc-next-button").prop("disabled", false);

            }

            if ( view.start < endPrev)
            {
                $("#calendar .fc-prev-button").css('opacity', '0.25');
                $("#calendar .fc-prev-button").prop("disabled", true);

                return false;
            }
            else
            {
                $("#calendar .fc-prev-button").css('opacity', '1');
                $("#calendar .fc-prev-button").prop("disabled", false);

            }
        },
        events: function(date, timezone, callback)
        {
          if(charged_events_month[date.startStr] != true)
          {
            jQuery.ajax(
            {
              url: ajaxURL,
              type: 'POST',
              dataType: 'json',
              data: 
              {
                action: 'ajax_calendar_events',
                start: date.startStr,
                end: date.endStr,
                taxonomies: JSON.stringify($('#calendar').data("filters"))
              },
              success: function(data) 
              {
                var events = [];
                if (data != null)
                {
                  if(data.type == 'success')
                  {
                    data.result.forEach(function(evento, index)
                    {
                      all_events[evento.ID] = evento;
                      charged_events_month[date.startStr] = true;

                      calendar.addEvent(
                      {
                        id: evento.ID,
                        start: evento.fechaCalendario,
                        end: evento.fechaCalendario,
                        display: 'background',
                        className: "selected-event",
                      });
                    });
                  }
                }

                $('.modal-body-calendario').find(".eventClone").remove();
                callback(events);
              },
              error: function (response)
              {
                console.log(response);
              },
              fail: function (response)
              {
                console.log(response);
              }
            });
          }
        },
        loading: function( isLoading )
        {
          if (isLoading == true)
          {
          }
          else
          {
          }
        },
        dateClick: function (info)
        {
          let hasEvent = false;
          let contEventsSameDay = 0;
          let clone;
          
          $('.modal-body-calendario').find(".eventClone").remove();

          all_events.forEach(function(evento, i)
          {
            if(info.dateStr == all_events[i].fechaCalendario)
            {
              if(contEventsSameDay >= 1)
              {
                let containerEvents = containerClone;

                containerEvents.find('.modal-title-calendario').last().html(all_events[i].titulo);
                containerEvents.find('.modal-descripcion-calendario').last().html(all_events[i].descripcion);
                containerEvents.find('.modal-direccion-calendario').last().html(all_events[i].direccion);
                containerEvents.find('.modal-fecha-calendario').last().html(all_events[i].fechaMostrar);
                containerEvents.find('.modal-button-asistir').last().attr("data-event", all_events[i].ID);

                $('.modal-body-calendario').append(containerEvents);
              }
              else
              {
                $('.modal-title-calendario').html(all_events[i].titulo);
                $('.modal-descripcion-calendario').html(all_events[i].descripcion);
                $('.modal-direccion-calendario').html(all_events[i].direccion);
                $('.modal-fecha-calendario').html(all_events[i].fechaMostrar);
                $('.modal-button-asistir').attr("data-event", all_events[i].ID);
              }

              hasEvent = true;
              contEventsSameDay++;
            }

          });

          if(hasEvent)
            $('#modalEvents').modal('show');
        }
    });

    calendar.render();

    document.addEventListener("click", function(e)
    {
      const target = e.target.closest(".modal-button-asistir");

      if(target)
      {
        var options = {
             theme:"sk-rect",
             message:'Enviando, Espere un momento',
             textColor:"white"
        };

        HoldOn.open(options);

        jQuery.ajax(
        {
          url: ajaxURL,
          type: 'POST',
          dataType: 'json',
          data: 
          {
            action: 'ajax_calendar_asistir',
            eventID: e.target.getAttribute("data-event"),
            userID: e.target.getAttribute("data-user")
          },
          success: function(data) 
          {
            if (data != null)
            {
              HoldOn.close();
              swal('<div class="textSuccessFormulario">' + data.title + '</div>', '', data.type);
            }
          },
          error: function (response)
          {
            console.log(response);
            HoldOn.close();
          },
          fail: function (response)
          {
            console.log(response);
            HoldOn.close();
          }
        });
      }
    });
  }

});
jQuery(document).ready(function($)
{
	let disabledElement = document.getElementById("disabledElement");

	if(disabledElement)
	{
		disabledElement.addEventListener("click",function()
		{
		    swal({
		  		title: '<div class="textSuccessFormulario">Debes autenticarte para enviar una iniciativa</div>',
		  		type: 'error',
		  		showCloseButton: true,
		  		showConfirmButton: false,
				html:
				'<a href="/iniciar-sesion/" class="wpcf7-form-control button-tips btn btn-primary p-1 m-1 col-12 col-sm-12 col-md-12">Iniciar Sesión</a>',
			});
		});

		$('#disabledElement').find('input[type=text], textarea').attr('readonly','readonly');

		$('#disabledElement').find('input[type=file], input[type=checkbox],checkbox').attr('disabled','disabled');
	}
});
jQuery(document).ready(function($)
{
  let rows = $('.yoparticipoensalud-carousel').attr("data-row");
  let cols = $('.yoparticipoensalud-carousel').attr("data-col");

  $('.modal-yoparticipo').modal(
  {
      backdrop: true,
      keyboard: false
  });

  $('.modal-yoparticipo').on('hidden.bs.modal', function (e)
  {
    $('#' + e.target.id).find('.container-vista-inmersiva-multimedia').each(function(i, obj)
    {
      var memory = $(this).html();
      $(this).html(memory);      
    });
  });

  $('.modal-yoparticipo').on('shown.bs.modal', function (e)
  {
    $('#' + e.target.id).find('.yoparticipoensalud-carousel-inmersivo').slick(
    {
      rows: 1,
      autoplay: false,
      dots: false,
      lazyLoad: 'ondemand',
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });

  $('.yoparticipoensalud-carousel-inmersivo').on('beforeChange', function(event, slick, currentSlide, nextSlide)
  {    
    $('.container-vista-inmersiva-multimedia').each(function()
    {
      var memory = $(this).html();
      $(this).html(memory);      
    });
  });

  $('.yoparticipoensalud-carousel').slick(
  {
    rows: parseInt(rows),
    autoplay: false,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: parseInt(cols),
    slidesToScroll: parseInt(cols),
    responsive:
    [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
jQuery(document).ready(function($)
{
  let isSearch = $("#herramientasContainer").attr('data-search');

  if(isSearch == 'true')
  {
    $("html").animate
    (
      {
        scrollTop: $("#herramientasContainer").offset().top
      },
      800 //speed
    );
  }

  $('.modal-herramientas').modal(
  {
      backdrop: true,
      keyboard: false
  });

  $('.modal-herramientas').on('hidden.bs.modal', function (e)
  {
    $('#' + e.target.id).find('.container-vista-inmersiva-multimedia').each(function(i, obj)
    {
      var memory = $(this).html();
      $(this).html(memory);      
    });
  });

    document.getElementById('searchFormHerramientas').addEventListener( 'submit', function( e )
    {
        let msg =  $('#searchHerramientas').val();

        if(msg.length < 3)
        {
            e.preventDefault();

            if($('.alert-search').data("visible") != true)
            {
                $('.alert-search').show();
                $('.alert-search').data("visible", true);

                setTimeout(hide_alert_search, 3000);
            }
        }
    }, false );

    $('#searchHerramientas').on('input',function(e)
    {
        let msg = $(this).val();

        if(msg.length >= 3)
        {
            $('.alert-search').data("visible", false);
            $('.alert-search').hide();
        }
    });

    function hide_alert_search()
    {
        $('.alert-search').hide();

        $('.alert-search').data("visible", false);
    }

});