"use strict";(self.webpackChunktegel_modal_bug_report=self.webpackChunktegel_modal_bug_report||[]).push([[558],{558:(t,e,s)=>{s.r(e),s.d(e,{tds_folder_tabs:()=>o});var l=s(3768);const o=class{constructor(t){(0,l.r)(this,t),this.tdsChange=(0,l.c)(this,"tdsChange",7),this.navWrapperElement=null,this.componentWidth=0,this.buttonsWidth=0,this.scrollWidth=0,this.addResizeObserver=()=>{new ResizeObserver((t=>{t.forEach((t=>{const e=t.contentRect.width;let s=0;Array.from(this.host.children).forEach((t=>{const e=window.getComputedStyle(t);s+=t.clientWidth+parseFloat(e.marginLeft)+parseFloat(e.marginRight)})),this.componentWidth=e,this.buttonsWidth=s,this.scrollWidth=s-e,this.buttonsWidth>this.componentWidth?this.evaluateScrollButtons():(this.showLeftScroll=!1,this.showRightScroll=!1)}))})).observe(this.navWrapperElement)},this.addEventListenerToTabs=()=>{this.children=Array.from(this.host.children),this.children=this.children.map(((t,e)=>(t.addEventListener("click",(()=>{if(!t.disabled){this.tdsChange.emit({selectedTabIndex:this.children.indexOf(t)}).defaultPrevented||(this.children.forEach((t=>t.setSelected(!1))),t.setSelected(!0),this.selectedIndex=e)}})),t)))},this.modeVariant=null,this.defaultSelectedIndex=0,this.selectedIndex=void 0,this.buttonWidth=0,this.showLeftScroll=!1,this.showRightScroll=!1}async selectTab(t){return this.children[t].disabled||(this.children.forEach((t=>t.setSelected(!1))),this.children=this.children.map(((e,s)=>(s===t&&(e.setSelected(!0),this.selectedIndex=t),e)))),{selectedTabIndex:this.selectedIndex}}handleSelectedIndexUpdate(){this.children=Array.from(this.host.children).map((t=>(t.setSelected(!1),t))),this.children[this.selectedIndex].setSelected(!0)}calculateButtonWidth(){this.children=this.children.map((t=>(t.offsetWidth>this.buttonWidth&&(this.buttonWidth=t.offsetWidth),t))),this.children.forEach((t=>{t.setTabWidth(this.buttonWidth)}))}scrollRight(){const t=this.navWrapperElement.scrollLeft;this.navWrapperElement.scrollLeft=t+this.buttonWidth,this.evaluateScrollButtons()}scrollLeft(){const t=this.navWrapperElement.scrollLeft;this.navWrapperElement.scrollLeft=t-this.buttonWidth,this.evaluateScrollButtons()}evaluateScrollButtons(){const t=this.navWrapperElement.scrollLeft;t>=this.scrollWidth?this.showRightScroll=!1:this.showRightScroll=!0,this.showLeftScroll=!(t<=0)}connectedCallback(){this.children=Array.from(this.host.children),this.children[0].classList.add("first"),this.children[this.children.length-1].classList.add("last")}componentDidLoad(){void 0===this.selectedIndex?(this.addEventListenerToTabs(),this.children[this.defaultSelectedIndex].setSelected(!0),this.selectedIndex=this.defaultSelectedIndex,this.tdsChange.emit({selectedTabIndex:this.selectedIndex})):(this.children[this.selectedIndex].setSelected(!0),this.tdsChange.emit({selectedTabIndex:this.selectedIndex})),this.calculateButtonWidth()}componentDidUpdate(){this.calculateButtonWidth()}componentDidRender(){this.buttonsWidth>this.componentWidth?this.evaluateScrollButtons():(this.showLeftScroll=!1,this.showRightScroll=!1),this.addResizeObserver()}render(){return(0,l.h)(l.H,{key:"eb1635179f54af77e7438282c76e3eaa11d53bd8",role:"list",class:"".concat(this.modeVariant?"tds-mode-variant-".concat(this.modeVariant):"")},(0,l.h)("div",{key:"615a36341f659d538ee48742cb565357d4bc4f89",class:"wrapper",ref:t=>{this.navWrapperElement=t}},(0,l.h)("button",{key:"e2c7ac86a3fd268d9f81c9429df110e01007297a",class:"scroll-left-button ".concat(this.showLeftScroll?"show":""),disabled:!this.showLeftScroll,onClick:()=>this.scrollLeft()},(0,l.h)("tds-icon",{key:"c3f4cfdadfdc0e727405741a0255573bfac48e77",name:"chevron_left",size:"20px"})),(0,l.h)("slot",{key:"c8a92e5d6ceabf50f4a8275282c4f49b8b21e232"}),(0,l.h)("button",{key:"af855609041ab58deb465d35e2f03fe5c49e68ed",class:"scroll-right-button ".concat(this.showRightScroll?"show":""),disabled:!this.showRightScroll,onClick:()=>this.scrollRight()},(0,l.h)("tds-icon",{key:"d212ddb172369557a9cb06cf26533c4eba8e7108",name:"chevron_right",size:"20px"}))))}get host(){return(0,l.g)(this)}static get watchers(){return{selectedIndex:["handleSelectedIndexUpdate"]}}};o.style=":host{box-sizing:border-box;overflow:hidden;outline:0}:host *{box-sizing:border-box}:host .wrapper{display:flex;overflow-x:scroll;scrollbar-width:none;position:relative}:host .wrapper::-webkit-scrollbar{display:none}:host .scroll-right-button{z-index:1;right:0}:host .scroll-left-button{z-index:1;left:0}:host .scroll-right-button,:host .scroll-left-button{height:50px;color:var(--tds-folder-tabs-scroll-btn-color);cursor:pointer;border:0;width:0;background-color:var(--tds-folder-tabs-scroll-btn-background);display:none;justify-content:center;align-items:center;opacity:0;pointer-events:none;position:sticky}:host .scroll-right-button.show,:host .scroll-left-button.show{min-width:48px;display:block;opacity:1;pointer-events:all}:host .scroll-right-button:hover,:host .scroll-left-button:hover{background-color:var(--tds-folder-tabs-scroll-btn-background-hover)}:host .scroll-right-button:active,:host .scroll-left-button:active{background-color:var(--tds-folder-tabs-scroll-btn-background-active)}:host .scroll-right-button:focus,:host .scroll-left-button:focus{outline:2px solid var(--tds-blue-400);outline-offset:-2px}:host .scroll-right-button svg,:host .scroll-left-button svg{fill:var(--tds-folder-tabs-scroll-btn-color)}"}}]);
//# sourceMappingURL=558.e62a2b41.chunk.js.map