"use strict";(self.webpackChunktegel_modal_bug_report=self.webpackChunktegel_modal_bug_report||[]).push([[8208],{8208:(e,t,s)=>{s.r(t),s.d(t,{tds_side_menu:()=>d});var o=s(3768);const d=class{constructor(e){(0,o.r)(this,e),this.tdsCollapse=(0,o.c)(this,"tdsCollapse",7),this.internalTdsCollapse=(0,o.c)(this,"internalTdsCollapse",6),this.internalTdsSideMenuPropChange=(0,o.c)(this,"internalTdsSideMenuPropChange",6),this.handleMatchesLgBreakpointChange=e=>{const t=!e.matches;this.collapsed=!t&&this.initialCollapsedState},this.open=!1,this.persistent=!1,this.collapsed=!1,this.isUpperSlotEmpty=!1,this.isCollapsed=!1,this.initialCollapsedState=!1}connectedCallback(){this.matchesLgBreakpointMq=window.matchMedia("(min-width: ".concat(992,"px)")),this.matchesLgBreakpointMq.addEventListener("change",this.handleMatchesLgBreakpointChange),this.isCollapsed=this.collapsed,this.initialCollapsedState=this.collapsed}componentDidLoad(){const e=this.host.shadowRoot.querySelector("slot:not([name])").assignedElements();(null===e||void 0===e?void 0:e.length)>0||(this.isUpperSlotEmpty=!0),window.innerWidth<992&&(this.collapsed=!1)}disconnectedCallback(){this.matchesLgBreakpointMq.removeEventListener("change",this.handleMatchesLgBreakpointChange)}onCollapsedChange(e){this.internalTdsSideMenuPropChange.emit({changed:["collapsed"],collapsed:e}),this.isCollapsed=e}collapsedSideMenuEventHandler(e){this.collapsed=e.detail.collapsed}render(){return(0,o.h)(o.H,{key:"ed2a20dcd884744ac411ea9e51903f0fb8120c90",role:"navigation",class:{"menu-opened":this.open,"menu-persistent":this.persistent,"menu-collapsed":this.collapsed}},(0,o.h)("div",{key:"bf4c5f42a4ee78f5e6af782bcf4382a5d5978f3c",class:{wrapper:!0,"state-upper-slot-empty":this.isUpperSlotEmpty,"state-open":this.open,"state-closed":!this.open}},(0,o.h)("slot",{key:"7ba1a82ae21a7c2a22c2a470c67ed5acc0dfcad9",name:"overlay"}),(0,o.h)("aside",{key:"c794132de394376c6b525cee5c1e58939c9159b5",class:"menu"},(0,o.h)("slot",{key:"ebd07545d79267ea3daa8a931eca6e46431a8993",name:"close-button"}),(0,o.h)("div",{key:"4d19ee85e6ae60ad4a745169e3690d022db26871",class:"tds-side-menu-wrapper"},(0,o.h)("ul",{key:"055d5d0004aecbfa6abf5ff83025ce147b941ce0",class:"tds-side-menu-list tds-side-menu-list-upper"},(0,o.h)("slot",{key:"e8e8827959284214c469edd16b8b2ccb7e0f2daa"})),(0,o.h)("ul",{key:"c1b4f82c9446e11c4d454336690c4b71998bdffd",class:"tds-side-menu-list tds-side-menu-list-end"},(0,o.h)("slot",{key:"ee1d129567b8c11b9355dfbfebffa76674f8d281",name:"end"}))),(0,o.h)("slot",{key:"3b320259f8ea48744d3698e7271931671810f1b9",name:"sticky-end"}))))}get host(){return(0,o.g)(this)}static get watchers(){return{collapsed:["onCollapsedChange"]}}};d.style=":host{pointer-events:none;display:block;position:fixed;top:0;width:100%;height:100%;z-index:500}:host .wrapper{height:inherit;}:host .wrapper slot:not([name])::slotted(*){border-bottom:1px solid var(--tds-sidebar-side-menu-bottom-menu-border-top)}:host .wrapper ::slotted([slot=end]){border-top:1px solid var(--tds-sidebar-side-menu-bottom-menu-border-top)}:host .wrapper .tds-side-menu-list-end{margin-top:68px}:host .state-closed{display:none}:host .state-open slot[name=overlay]::slotted(tds-side-menu-overlay){opacity:0.4}:host .state-open slot[name=close-button]::slotted(tds-side-menu-close-button){opacity:1}:host .state-upper-slot-empty .tds-side-menu-list-upper{display:none}:host .state-upper-slot-empty .tds-side-menu-list-end{margin-top:0}:host .state-upper-slot-empty ::slotted([slot=end]){border-top:none;border-bottom:1px solid var(--tds-sidebar-side-menu-bottom-menu-border-top)}@media (max-width: 992px){:host(.menu-opened){pointer-events:auto;z-index:500}}@media (min-width: 992px){:host(.menu-persistent){pointer-events:auto;position:static;width:272px;height:auto;border-right:1px solid var(--tds-sidebar-side-menu-bottom-menu-border-top)}:host(.menu-persistent) .wrapper slot[name=overlay]::slotted(tds-side-menu-overlay){display:none}:host(.menu-persistent) .wrapper slot[name=close-button]::slotted(tds-side-menu-close-button){display:none}:host(.menu-persistent) .menu{width:272px}:host(.menu-persistent) .state-closed{display:block}:host(.menu-persistent):host(.menu-collapsed){width:69px}:host(.menu-persistent):host(.menu-collapsed) .menu{width:68px}:host(.menu-persistent) slot[name=end]::slotted(*){display:none}}.menu{width:80%;height:inherit;position:relative;left:0;display:flex;flex-direction:column;justify-content:space-between}.menu *{padding:0;margin:0;box-sizing:border-box}@media (max-width: 384px){.menu{width:100%}}aside .tds-side-menu-wrapper{display:flex;justify-content:space-between;flex-direction:column;flex-grow:1;background-color:var(--tds-sidebar-side-menu-background-cover);overflow-y:auto}aside .tds-side-menu-wrapper::-webkit-scrollbar{width:4px;background-color:inherit}aside .tds-side-menu-wrapper::-webkit-scrollbar-thumb{background-color:var(--tds-grey-300)}aside .tds-side-menu-wrapper ::-webkit-scrollbar-button{height:0;width:0}"}}]);
//# sourceMappingURL=8208.9c42c0b2.chunk.js.map