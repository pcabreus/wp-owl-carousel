(window.webpackJsonp_pcabreus_owl_carousel=window.webpackJsonp_pcabreus_owl_carousel||[]).push([[1],{3:function(e,r,t){}}]),function(e){function r(r){for(var n,u,l=r[0],a=r[1],s=r[2],i=0,f=[];i<l.length;i++)u=l[i],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(p&&p(r);f.length;)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,l=1;l<t.length;l++){var a=t[l];0!==o[a]&&(n=!1)}n&&(c.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},o={0:0},c=[];function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="";var l=window.webpackJsonp_pcabreus_owl_carousel=window.webpackJsonp_pcabreus_owl_carousel||[],a=l.push.bind(l);l.push=r,l=l.slice();for(var s=0;s<l.length;s++)r(l[s]);var p=a;c.push([4,1]),t()}([function(e,r){e.exports=window.wp.element},function(e,r){e.exports=window.wp.blockEditor},function(e,r){e.exports=window.wp.blocks},,function(e,r,t){"use strict";t.r(r);var n=t(2),o=(t(3),t(0)),c=t(1);Object(n.registerBlockType)("pcabreus/owl-carousel",{edit:function(){const e=Object(c.useBlockProps)({className:"pcabreus-owl-carousel"});return Object(o.createElement)("div",e,Object(o.createElement)(c.InnerBlocks,{template:[["core/group"]]}))},save:function(){const e=c.useBlockProps.save({className:"pcabreus-owl-carousel"});return Object(o.createElement)("div",e,Object(o.createElement)(c.InnerBlocks.Content,null))}})}]);