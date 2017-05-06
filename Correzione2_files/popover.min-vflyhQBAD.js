define(["external/mcl/classnames","external/react","external/mcl/react-aria-menubutton"],function(e,t,r){return(function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)})({0:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),r(33),n(r(64)),n(r(65)),n(r(66)),n(r(67)),n(r(68)),n(r(69)),n(r(70))},3:function(t,r){t.exports=e},4:function(e,r){e.exports=t},22:function(e,t){e.exports=r},33:function(e,t){},64:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4),i=r(22);t.Popover=function(e){var t=e.className,r=e.onSelection,c=e.ref,l=o(e,["className","onSelection","ref"]),p=a(t,"mc-popover");return s.createElement(i.Wrapper,n({className:p,onSelection:r,ref:c},l))},t.Popover.displayName="Popover"},65:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4),i=r(22);t.PopoverContent=function(e){var t=e.arrowOffset,r=void 0===t?"24px":t,c=e.attachment,l=void 0===c?"left":c,p=e.children,f=e.className,u=e.height,v=e.ref,O=e.tagName,y=void 0===O?"nav":O,h=e.width,m=o(e,["arrowOffset","attachment","children","className","height","ref","tagName","width"]),g=a(f,"mc-popover-content"),b={left:"left"===l?0:"auto",right:"right"===l?0:"auto"},P={left:"left"===l?r:"auto",right:"right"===l?r:"auto"},d={width:h,height:u};return s.createElement(i.Menu,n({tag:y,className:g,ref:v,style:b},m),s.createElement("span",{className:"mc-popover-content-arrow",style:P}),s.createElement("div",{className:"mc-popover-content-scroller",style:d},p))},t.PopoverContent.displayName="PopoverContent"},66:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4);t.PopoverContentDescription=function(e){var t=e.className,r=o(e,["className"]),i=a(t,"mc-popover-content-description");return s.createElement("div",n({className:i},r))},t.PopoverContentDescription.displayName="PopoverContentDescription"},67:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4),i=r(22);t.PopoverContentItem=function(e){var t=e.href,r=e.className,c=e.ref,l=o(e,["href","className","ref"]),p=l.tagName,f=void 0===p?"button":p,u=o(l,["tagName"]),v=a(r,"mc-popover-content-item");return t&&(f="a"),s.createElement(i.MenuItem,n({tag:f,className:v,ref:c},u))},t.PopoverContentItem.displayName="PopoverContentItem"},68:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4);t.PopoverContentSeparator=function(e){var t=e.className,r=o(e,["className"]),i=a(t,"mc-popover-content-separator");return s.createElement("hr",n({className:i},r))},t.PopoverContentSeparator.displayName="PopoverContentSeparator"},69:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4);t.PopoverContentTitle=function(e){var t=e.className,r=o(e,["className"]),i=a(t,"mc-popover-content-title");return s.createElement("h2",n({className:i},r))},t.PopoverContentTitle.displayName="PopoverContentTitle"},70:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4),i=r(22);t.PopoverTrigger=function(e){var t=e.className,r=e.ref,c=o(e,["className","ref"]),l=a(t,"mc-popover-trigger");return s.createElement(i.Button,n({tag:"button",className:l,ref:r},c))},t.PopoverTrigger.displayName="PopoverTrigger"}})});
//# sourceMappingURL=popover.min.js-vflNXgWom.map