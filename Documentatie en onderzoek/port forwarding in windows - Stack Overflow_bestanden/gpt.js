(function(){var window=this;var d=this,aa=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var ca=function(a,b){for(var c=a.length,e="string"==typeof a?a.split(""):a,h=0;h<c;h++)h in e&&b.call(void 0,e[h],h,a)};var f=function(){this.a="";this.b=da};f.prototype.s=!0;f.prototype.j=function(){return this.a};var ea=function(a){return a instanceof f&&a.constructor===f&&a.b===da?a.a:"type_error:TrustedResourceUrl"},da={},fa=function(a){var b=new f;b.a=a;return b};var g=function(){this.l="";this.A=ha};g.prototype.s=!0;g.prototype.j=function(){return this.l};var ia=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ha={},ja=function(a){var b=new g;b.l=a;return b};ja("about:blank");var k;a:{var ka=d.navigator;if(ka){var la=ka.userAgent;if(la){k=la;break a}}k=""};var m=function(a){m[" "](a);return a};m[" "]=aa;var q=function(){return d.googletag||(d.googletag={})};var r={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,10:0,13:1500,16:0,17:0,20:0,23:.001,24:200,27:.01,28:0,29:.01,33:"pagead2.googlesyndication.com",34:1,37:.01,38:.001,47:1E-4,53:"",54:0,57:0,58:1,159:1,60:0,63:0,65:.01,66:1E-5,67:0,68:0,69:.99,71:0,73:.001,74:0,75:"",162:0,163:"",76:"",77:.001,78:0,88:1,79:1,81:.001,83:1E-4,84:0,85:0,87:.2,89:1,90:0,91:0,96:1,97:0,99:.01,101:.001,103:.01,104:"/pagead/js/rum.js",105:0,106:"1-0-14",107:"1-0-14",110:0,113:1,114:0,115:.01,116:.001,117:.01,118:.95,123:0,120:.95,124:.95,121:.01,169:.01,122:.01,125:.01,126:0,127:.001,129:0,131:"",132:0,156:.05,133:0,134:.01,135:0,137:.001,167:1,138:"",143:.001,168:1E-4,144:.001,141:1,151:.01,157:.05,158:.001,164:.05,150:"",153:.001,179:.01,170:!1,160:"",176:0,177:0,183:0,152:[],171:.01,172:null,175:"21061385,21061386,21061387,21061388,21061389,21061350,21061351,21061352,210613503,21061397,21061398,21061399,21061400",178:.001,182:1E3,180:null,181:null};r[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(e){}return!0}(window);r[49]=(new Date).getTime();r[36]=/^true$/.test(!1);r[46]=/^true$/.test(!1);r[148]=/^true$/.test(!1);var t=function(){var a={},b;for(b in r)a[b]=r[b];this.a=a};t.prototype.get=function(a){return this.a[a]};t.prototype.set=function(a,b){this.a[a]=b};t.b=void 0;t.a=function(){return t.b?t.b:t.b=new t};var ma=["21060621","21060622","21060833","21060713"],na=["21061212","21061213","21061214","21061277"],oa=t.a().a,pa=q(),qa=pa._vars_,u;for(u in qa)oa[u]=qa[u];pa._vars_=oa;var ra=function(){return"168"},sa=q();sa.hasOwnProperty("getVersion")||(sa.getVersion=ra);var w=function(a){this.a=a||d.document||document};w.prototype.createElement=function(a){return this.a.createElement(String(a))};w.prototype.appendChild=function(a,b){a.appendChild(b)};var ta=function(){var a=aa;return function(){if(a){var b=a;a=null;b()}}};var ua=function(a,b){a.addEventListener?a.addEventListener("message",b,void 0):a.attachEvent&&a.attachEvent("onmessage",b)};var wa=function(){var a=d;this.b=a=void 0===a?d:a;this.B="https://securepubads.g.doubleclick.net/static/3p_cookie.html";this.a=2;this.f=[];this.o=!1;a:{var b=[d.top];a=[];for(var c=0,e;e=b[c++];){a.push(e);try{if(e.frames)for(var h=e.frames.length,n=0;n<h&&50>b.length;++n)b.push(e.frames[n])}catch(G){}}b:{try{var v=d.parent;if(v&&v!=d){var l=v;break b}}catch(G){}l=null}(h=l)&&a.unshift(h);a.unshift(d);var p;for(h=0;h<a.length;++h)try{var A=a[h],ya=x(A);if(ya){this.a=va(ya);if(2!=this.a)break a;var I;if(I=!p){l=void 0;try{if(l=!!A&&null!=A.location.href)c:{try{m(A.foo);l=!0;break c}catch(G){}l=!1}I=l}catch(G){I=!1}}I&&(p=A)}}catch(G){}this.b=p||this.b}},y=function(a){if(2!=xa(a)){for(var b=1==xa(a),c=0;c<a.f.length;c++)try{a.f[c](b)}catch(e){}a.f=[]}},za=function(a){var b=x(a.b);b&&2==a.a&&(a.a=va(b))},xa=function(a){za(a);return a.a},Aa=function(a){var b=z;b.f.push(a);if(2!=b.a)y(b);else if(b.o||(ua(b.b,function(a){var c=x(b.b);if(c&&a.source==c&&2==b.a){switch(a.data){case "3p_cookie_yes":b.a=1;break;case "3p_cookie_no":b.a=0}y(b)}}),b.o=!0),x(b.b))y(b);else{a=(new w(b.b.document)).createElement("IFRAME");a.src=b.B;a.name="detect_3p_cookie";a.style.visibility="hidden";a.style.display="none";a.onload=function(){za(b);y(b)};try{b.b.document.body.appendChild(a)}catch(c){}}},Ba=function(a,b){try{return!!a.frames[b]}catch(c){return!1}},x=function(a){return a.frames[m("detect_3p_cookie")]||null},va=function(a){return Ba(a,"3p_cookie_yes")?1:Ba(a,"3p_cookie_no")?0:2};var B=null;var Ca=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=d.navigator&&d.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),C=function(a,b){var c="script";c=void 0===c?"":c;var e=a.createElement("link");e.rel="preload";b instanceof f?b=ea(b):b instanceof g?b=b instanceof g&&b.constructor===g&&b.A===ha?b.l:"type_error:SafeUrl":(b instanceof g||(b=b.s?b.j():String(b),ia.test(b)||(b="about:invalid#zClosurez"),b=ja(b)),b=b.j());e.href=b;c&&(e.as=c);(a=a.getElementsByTagName("head")[0])&&a.appendChild(e)};var Da=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ea=/\.(cn|com\.bi|do|sl)$/,D=function(a){return Da.test(a)&&!Ea.test(a)},E=d,z,Fa=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(d.location.hostname)];F[3]>=+new Date&&b.push("adsid="+encodeURIComponent(F[1]));return a+"?"+b.join("&")},F,H,J=function(){E=d;F=E.googleToken=E.googleToken||{};var a=+new Date;F[1]&&F[3]>a&&0<F[2]||(F[1]="",F[2]=-1,F[3]=-1,F[4]="",F[6]="");H=E.googleIMState=E.googleIMState||{};D(H[1])||(H[1]=".google.com");"array"==ba(H[5])||(H[5]=[]);"boolean"==typeof H[6]||(H[6]=!1);"array"==ba(H[7])||(H[7]=[]);"number"==typeof H[8]||(H[8]=0)},Ga=function(a){try{a()}catch(b){d.setTimeout(function(){throw b;},0)}},Ia=function(a){"complete"==d.document.readyState||"loaded"==d.document.readyState||d.currentScript&&d.currentScript.async?Ha(3):a()},Ja=0,K={g:function(){return 0<H[8]},m:function(){H[8]++},u:function(){0<H[8]&&H[8]--},v:function(){H[8]=0},c:function(){},w:function(){return!1},i:function(){return H[5]},h:Ga},L={g:function(){return H[6]},m:function(){H[6]=!0},u:function(){H[6]=!1},v:function(){H[6]=!1},c:function(){},w:function(){return".google.com"!=H[1]&&2<++Ja},i:function(){return H[7]},h:function(a){Ia(function(){Ga(a)})}},Ha=function(a){if(1E-5>Math.random()){d.google_image_requests||(d.google_image_requests=[]);var b=d.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;d.google_image_requests.push(b)}};K.c=function(){if(!K.g()){var a=d.document,b=function(b){var c=Fa("js",b);C(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return d.processGoogleToken({},2)};c=fa(c);b.src=ea(c);try{(a.head||a.body||a.documentElement).appendChild(b),K.m()}catch(v){}},c=H[1];b(c);".google.com"!=c&&b(".google.com");b={};var e=(b.newToken="FBT",b);d.setTimeout(function(){return d.processGoogleToken(e,1)},1E3)}};L.c=function(){if(!L.g()){var a=d.document,b=Fa("sync.js",H[1]);C(a,b);b=b.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"});var c=m("script"),e="<"+c+' src="'+b+'"></'+c+">"+("<"+c+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Ia(function(){a.write(e);L.m()})}};var Ka=function(a,b){J();var c=E.googleToken[5]||0;a&&(0!=c||F[3]>=+new Date?b.h(a):(b.i().push(a),b.c()));F[3]>=+new Date&&F[2]>=+new Date||b.c()},Ma=function(a){d.processGoogleToken=d.processGoogleToken||function(a,c){return La(K,a,c)};Ka(a,K)},Na=function(a){d.processGoogleTokenSync=d.processGoogleTokenSync||function(a,c){return La(L,a,c)};Ka(a,L)},Oa=function(a){z=z||new wa;Aa(function(b){b&&a()})},La=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var e=b.newToken||"",h=parseInt(b.freshLifetimeSecs||"",10)||3600,n=parseInt(b.validLifetimeSecs||"",10)||86400,v=b["1p_jar"]||"";b=b.pucrd||"";J();1==c?a.v():a.u();if(!e&&a.w())D(".google.com")&&(H[1]=".google.com"),a.c();else{var l=E.googleToken=E.googleToken||{},p=!(F[3]>=+new Date)&&0!=c;if(0==c&&e&&"string"==typeof e&&0<h&&0<n&&"string"==typeof v||p)p=+new Date,h=p+1E3*h,n=p+1E3*n,Ha(c),l[5]=c,l[1]=e,l[2]=h,l[3]=n,l[4]=v,l[6]=b,J();if(e||!a.g()){c=a.i();for(e=0;e<c.length;e++)a.h(c[e]);c.length=0}}};m("partner.googleadservices.com");var Pa=m("www.googletagservices.com"),M=!1,N=!1,O="",P="",Q={},Qa=(Q["21061282"]="/gpt/pubads_impl_nr_c_",Q["21061283"]="/gpt/pubads_impl_nr_",Q["21061289"]="/gpt/pubads_impl_moa_c_",Q["21061290"]="/gpt/pubads_impl_moa_e_",Q),Ra=t.a().get(46)&&!t.a().get(6);O=Ra?"http:":"https:";P=t.a().get(Ra?2:3);var R=function(a,b){if(null===B){B="";try{var c="";try{c=d.top.location.hash}catch(n){c=d.location.hash}if(c){var e=c.match(/\bdeid=([\d,]+)/);B=e?e[1]:""}}catch(n){}}if(c=(c=B)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))a=c[0];else if(b)a:{if(!(1E-4>Math.random())&&(c=Math.random(),c<a.length*b)){try{var h=new Uint32Array(1);d.crypto.getRandomValues(h);c=h[0]/65536/65536}catch(n){c=Math.random()}a=a[Math.floor(c*a.length)];break a}a=null}else a=null;return a},Sa=function(){var a=S,b=a.PerformanceObserver&&a.PerformanceLongTaskTiming&&R(["21061354","21061355"],.001);b&&t.a().get(152).push(b);if("21061355"==b){var c=t.a();c.set(181,[]);(new a.PerformanceObserver(function(a,b){var e=c.get(181);e?ca(a.getEntries(),function(a){return e.push(a)}):b.disconnect()})).observe({entryTypes:["longtask"]})}};var T=q(),S=T.fifWin||window,U=S.document,Ta=[],Ua=q();Ua.hasOwnProperty("cmd")||(Ua.cmd=Ta);if(T.evalScripts)T.evalScripts();else{switch(R(na,t.a().get(178))){case "21061213":N=!0;break;case "21061214":M=!0;break;case "21061277":M=N=!0}var V=t.a().get(138)||R(ma,t.a().get(137))||R(["21061149"],t.a().get(167)),W=R(["21061316","21061317"],0);W&&("21061317"==W?(t.a().set(173,Pa),t.a().set(174,Pa)):t.a().set(163,W),t.a().get(152).push(W));-1!=k.indexOf("iPhone")&&t.a().set(79,0);var Va=t.a().get(160);Va&&t.a().get(152).push(Va);if(V)try{var Wa=t.a().get(150);Wa&&(J(),D(Wa)&&(H[1]=Wa));t.a().set(138,V)}catch(a){}t.a().set(172,U.currentScript);Sa();var Xa=S,Ya=Xa.performance;if(Ya&&Ya.now){var Za=Ya.now();(Xa.google_js_reporting_queue=Xa.google_js_reporting_queue||[]).push({label:"1",type:9,value:Za,uniqueId:"rt."+Math.random()})}var $a;var X=t.a(),Y=X.get(76);if(Y)$a=Y;else{var Z,ab="/gpt/pubads_impl_",bb=!1;X.get(131)?Z="168":bb=!0;Z=Z||"168";if(bb){var cb=R(["21061282","21061283"],0),db=R(["21061289","21061290"],.01);cb?(X.get(152).push(cb),Z=20171025,ab=Qa[cb]):db&&(X.get(152).push(db),Z=20171107,ab=Qa[db])}Y=O+"//"+P+ab+Z+".js";t.a().set(76,Y);$a=Y}var eb=$a,fb=U.currentScript;if(!("complete"==U.readyState||"loaded"==U.readyState||fb&&fb.async)){var gb="gpt-impl-"+Math.random();try{var hb='<script id="'+gb+'" src="'+eb+'">\x3c/script>';M&&Ca()&&(hb+='<link rel="preconnect" href="'+O+"//"+P+'">');U.write(hb);T._syncTagged_=!0}catch(a){}if(U.getElementById(gb))switch(T._loadStarted_=!0,V){case "21060833":var ib=ta();Oa(ib);Na(ib);break;case "21060622":case "21060713":case "21061149":Na(null)}}if(!T._loadStarted_){switch(V){case "21060833":var jb=ta();Oa(jb);Ma(jb);break;case "21060622":case "21060713":case "21061149":Ma(null)}N&&C(U,eb);var kb=U.createElement("script");kb.src=eb;kb.async=!0;var lb=U.head||U.body||U.documentElement;lb.appendChild(kb);if(M&&Ca()){var mb=U.createElement("link");mb.rel="preconnect";mb.href=O+"//"+P;lb.appendChild(mb)}T._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
