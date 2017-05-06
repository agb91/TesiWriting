(function(e){"use strict";var t="undefined"==typeof window?null:window;"function"==typeof define&&define.amd?define(function(){return e(t)}):"undefined"!=typeof module?module.exports=e(t):t.DOMPurify=e(t)})(function e(t){"use strict";var n=function(t){return e(t)};if(n.version="0.8.6",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var o=t.document,r=o,i=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,s=t.NodeFilter,c=t.NamedNodeMap||t.MozNamedAttrMap,d=t.Text,u=t.Comment;if("function"==typeof a){var m=o.createElement("template");m.content&&m.content.ownerDocument&&(o=m.content.ownerDocument)}var p=o.implementation,f=o.createNodeIterator,h=o.getElementsByTagName,g=o.createDocumentFragment,y=r.importNode,T={};n.isSupported=void 0!==p.createHTMLDocument&&9!==o.documentMode;var v=function(e,t){for(var n=t.length;n--;)"string"==typeof t[n]&&(t[n]=t[n].toLowerCase()),e[t[n]]=!0;return e},b=function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},A=null,x=v({},["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","svg","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","switch","symbol","text","textpath","title","tref","tspan","view","vkern","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","#text"]),k=null,w=v({},["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns","accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mode","min","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","surfacescale","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","y","y1","y2","z","zoomandpan","accent","accentunder","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","display","displaystyle","fence","frame","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),S=null,E=null,N=!0,O=!0,D=!1,L=!1,M=!1,_=!1,C=!1,R=!1,z=!1,F=!1,H=!0,I=!0,B=v({},["audio","head","math","script","style","svg","video"]),j=v({},["audio","video","img","source","image"]),W=v({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),G=null,U=o.createElement("form"),q=function(e){"object"!=typeof e&&(e={}),A="ALLOWED_TAGS"in e?v({},e.ALLOWED_TAGS):x,k="ALLOWED_ATTR"in e?v({},e.ALLOWED_ATTR):w,S="FORBID_TAGS"in e?v({},e.FORBID_TAGS):{},E="FORBID_ATTR"in e?v({},e.FORBID_ATTR):{},N=e.ALLOW_ARIA_ATTR!==!1,O=e.ALLOW_DATA_ATTR!==!1,D=e.ALLOW_UNKNOWN_PROTOCOLS||!1,L=e.SAFE_FOR_JQUERY||!1,M=e.SAFE_FOR_TEMPLATES||!1,_=e.WHOLE_DOCUMENT||!1,R=e.RETURN_DOM||!1,z=e.RETURN_DOM_FRAGMENT||!1,F=e.RETURN_DOM_IMPORT||!1,C=e.FORCE_BODY||!1,H=e.SANITIZE_DOM!==!1,I=e.KEEP_CONTENT!==!1,M&&(O=!1),z&&(R=!0),e.ADD_TAGS&&(A===x&&(A=b(A)),v(A,e.ADD_TAGS)),e.ADD_ATTR&&(k===w&&(k=b(k)),v(k,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&v(W,e.ADD_URI_SAFE_ATTR),I&&(A["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(e),G=e},P=function(e){n.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},V=function(e,t){n.removed.push({attribute:t.getAttributeNode(e),from:t}),t.removeAttribute(e)},Y=function(e){var t,n;return C&&(e="<remove></remove>"+e),t&&t.documentElement||(t=p.createHTMLDocument(""),n=t.body,n.parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=e),"function"==typeof t.getElementsByTagName?t.getElementsByTagName(_?"html":"body")[0]:h.call(t,_?"html":"body")[0]},K=function(e){return f.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,function(){return s.FILTER_ACCEPT},!1)},$=function(e){return!(e instanceof d||e instanceof u)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof c&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},J=function(e){return"object"==typeof l?e instanceof l:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Q=function(e){var t,o;if(ie("beforeSanitizeElements",e,null),$(e))return P(e),!0;if(t=e.nodeName.toLowerCase(),ie("uponSanitizeElement",e,{tagName:t,allowedTags:A}),!A[t]||S[t]){if(I&&!B[t]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return P(e),!0}return!L||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(n.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),M&&3===e.nodeType&&(o=e.textContent,o=o.replace(/\{\{[\s\S]*|[\s\S]*\}\}/gm," "),o=o.replace(/<%[\s\S]*|[\s\S]*%>/gm," "),e.textContent!==o&&(n.removed.push({element:e.cloneNode()}),e.textContent=o)),ie("afterSanitizeElements",e,null),!1},X=/^data-[\-\w.\u00B7-\uFFFF]/,Z=/^aria-[\-\w]+$/,ee=/^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,te=/^(?:\w+script|data):/i,ne=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,oe=function(e){var r,i,a,l,s,c,d,u;if(ie("beforeSanitizeAttributes",e,null),c=e.attributes){for(d={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:k},u=c.length;u--;){if(r=c[u],i=r.name,a=r.value.trim(),l=i.toLowerCase(),d.attrName=l,d.attrValue=a,d.keepAttr=!0,ie("uponSanitizeAttribute",e,d),a=d.attrValue,"name"===l&&"IMG"===e.nodeName&&c.id)s=c.id,c=Array.prototype.slice.apply(c),V("id",e),V(i,e),c.indexOf(s)>u&&e.setAttribute("id",s.value);else{if("INPUT"===e.nodeName&&"type"===l&&"file"===a&&(k[l]||!E[l]))continue;"id"===i&&e.setAttribute(i,""),V(i,e)}if(d.keepAttr&&(!H||"id"!==l&&"name"!==l||!(a in t||a in o||a in U))){if(M&&(a=a.replace(/\{\{[\s\S]*|[\s\S]*\}\}/gm," "),a=a.replace(/<%[\s\S]*|[\s\S]*%>/gm," ")),O&&X.test(l));else if(N&&Z.test(l));else{if(!k[l]||E[l])continue;if(W[l]);else if(ee.test(a.replace(ne,"")));else if("src"!==l&&"xlink:href"!==l||0!==a.indexOf("data:")||!j[e.nodeName.toLowerCase()]){if(D&&!te.test(a.replace(ne,"")));else if(a)continue}else;}try{e.setAttribute(i,a),n.removed.pop()}catch(e){}}}ie("afterSanitizeAttributes",e,null)}},re=function(e){var t,n=K(e);for(ie("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)ie("uponSanitizeShadowNode",t,null),Q(t)||(t.content instanceof i&&re(t.content),oe(t));ie("afterSanitizeShadowDOM",e,null)},ie=function(e,t,o){T[e]&&T[e].forEach(function(e){e.call(n,t,o,G)})};return n.sanitize=function(e,o){var a,s,c,d,u,m;if(e||(e="<!-->"),"string"!=typeof e&&!J(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");e=e.toString()}if(!n.isSupported){if("object"==typeof t.toStaticHTML||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(J(e))return t.toStaticHTML(e.outerHTML)}return e}if(q(o),n.removed=[],e instanceof l)a=Y("<!-->"),s=a.ownerDocument.importNode(e,!0),1===s.nodeType&&"BODY"===s.nodeName?a=s:a.appendChild(s);else{if(!R&&!_&&e.indexOf("<")===-1)return e;if(a=Y(e),!a)return R?null:""}for(C&&P(a.firstChild),u=K(a);c=u.nextNode();)3===c.nodeType&&c===d||Q(c)||(c.content instanceof i&&re(c.content),oe(c),d=c);if(R){if(z)for(m=g.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return F&&(m=y.call(r,m,!0)),m}return _?a.outerHTML:a.innerHTML},n.addHook=function(e,t){"function"==typeof t&&(T[e]=T[e]||[],T[e].push(t))},n.removeHook=function(e){T[e]&&T[e].pop()},n.removeHooks=function(e){T[e]&&(T[e]=[])},n.removeAllHooks=function(){T={}},n});
//# sourceMappingURL=purify.min.js-vfl3UCp3x.map