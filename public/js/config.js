(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.config = factory());
})(this, (function () { 'use strict';

  const configQueryMap={"navbar-vertical-collapsed":"dpaIsNavbarVerticalCollapsed","color-scheme":"dpaTheme","navigation-type":"dpaNavbarPosition","vertical-navbar-appearance":"dpaNavbarVerticalStyle","horizontal-navbar-shape":"dpaNavbarTopShape","horizontal-navbar-appearance":"dpaNavbarTopStyle"},initialConfig={dpaIsNavbarVerticalCollapsed:!1,dpaTheme:"light",dpaNavbarTopStyle:"default",dpaNavbarVerticalStyle:"default",dpaNavbarPosition:"vertical",dpaNavbarTopShape:"default",dpaIsRTL:!1,dpaSupportChat:!0},CONFIG={...initialConfig},setConfig=(e,a=!0)=>{Object.keys(e).forEach((t=>{CONFIG[t]=e[t],a&&localStorage.setItem(t,e[t]);}));},resetConfig=()=>{Object.keys(initialConfig).forEach((e=>{CONFIG[e]=initialConfig[e],localStorage.setItem(e,initialConfig[e]);}));},urlSearchParams=new URLSearchParams(window.location.search),params=Object.fromEntries(urlSearchParams.entries());Object.keys(params).length>0&&Object.keys(params).includes("theme-control")&&(resetConfig(),Object.keys(params).forEach((e=>{configQueryMap[e]&&localStorage.setItem(configQueryMap[e],params[e]);}))),Object.keys(CONFIG).forEach((e=>{if(null===localStorage.getItem(e))localStorage.setItem(e,CONFIG[e]);else try{setConfig({[e]:JSON.parse(localStorage.getItem(e))});}catch{setConfig({[e]:localStorage.getItem(e)});}})),JSON.parse(localStorage.getItem("dpaIsNavbarVerticalCollapsed"))&&document.documentElement.classList.add("navbar-vertical-collapsed"),"dark"===localStorage.getItem("dpaTheme")&&document.documentElement.classList.add("dark"),"horizontal"===localStorage.getItem("dpaNavbarPosition")&&document.documentElement.classList.add("navbar-horizontal"),"combo"===localStorage.getItem("dpaNavbarPosition")&&document.documentElement.classList.add("navbar-combo");var config = {config:CONFIG,reset:resetConfig,set:setConfig};

  return config;

}));
//# sourceMappingURL=config.js.map
