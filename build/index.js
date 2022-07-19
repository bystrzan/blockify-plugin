!function(){var e={4184:function(e,t){var l;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var a=typeof l;if("string"===a||"number"===a)e.push(l);else if(Array.isArray(l)){if(l.length){var r=o.apply(null,l);r&&e.push(r)}}else if("object"===a)if(l.toString===Object.prototype.toString)for(var i in l)n.call(l,i)&&l[i]&&e.push(i);else e.push(l.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,l),a.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},e.apply(this,arguments)}var t,n=window.wp.element,o=window.wp.components,a=window.wp.blockEditor,r=window.wp.compose,i=window.wp.hooks,s=window.wp.i18n;const c=null!==(t=window.blockify.blockSupports)&&void 0!==t?t:{};(0,i.addFilter)("blocks.registerBlockType","blockify/add-box-shadow-attributes",((e,t)=>{var l,n,o;return null!=c&&null!==(l=c[t])&&void 0!==l&&l.boxShadow?(null!=e&&null!==(n=e.attributes)&&void 0!==n&&n.boxShadowColor||null!=e&&null!==(o=e.attributes)&&void 0!==o&&o.boxShadowGradient||(e.attributes=Object.assign(e.attributes,{boxShadowX:{type:"integer"},boxShadowY:{type:"integer"},boxShadowBlur:{type:"integer"},boxShadowSpread:{type:"integer"},boxShadowColor:{type:"string"},boxShadowGradient:{type:"string"}})),e):e}));const u=(0,r.createHigherOrderComponent)((e=>t=>{var l;const{attributes:r,setAttributes:i,name:u}=t;if(null==c||null===(l=c[u])||void 0===l||!l.boxShadow)return(0,n.createElement)(e,t);const{boxShadowX:d,boxShadowY:p,boxShadowBlur:m,boxShadowSpread:b,boxShadowColor:h,boxShadowGradient:g}=r;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,t),(0,n.createElement)(a.InspectorAdvancedControls,null,(0,n.createElement)(o.PanelBody,{title:(0,s.__)("Box Shadow","blockify"),initialOpen:!1,className:"blockify-advanced-controls-shadow"},(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.Flex,null,(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalNumberControl,{label:(0,s.__)("X","blockify"),value:null!=d?d:0,step:1,shiftStep:10,onChange:e=>i({boxShadowX:parseInt(e)})})),(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalNumberControl,{label:(0,s.__)("Y","blockify"),value:null!=p?p:0,step:1,shiftStep:10,onChange:e=>i({boxShadowY:parseInt(e)})})),(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalNumberControl,{label:(0,s.__)("Blur","blockify"),value:null!=m?m:0,step:1,shiftStep:10,min:0,onChange:e=>i({boxShadowBlur:parseInt(e)})})),(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalNumberControl,{label:(0,s.__)("Spread","blockify"),step:1,shiftStep:10,value:null!=b?b:0,onChange:e=>i({boxShadowSpread:parseInt(e)})})))),(0,n.createElement)(a.__experimentalPanelColorGradientSettings,{title:(0,s.__)("Color","blockify"),showTitle:!1,settings:[{colorValue:null!=h?h:"",gradientValue:null!=g?g:"",label:(0,s.__)("Box Shadow Color","blockify"),onColorChange:e=>i({boxShadowColor:e}),onGradientChange:e=>i({boxShadowGradient:e})}]}))))}),"withBoxShadow");(0,i.addFilter)("editor.BlockEdit","blockify/with-box-shadows",u);const d=(0,r.createHigherOrderComponent)((t=>l=>{var o,a;const{attributes:r,name:i}=l;if(null==c||null===(o=c[i])||void 0===o||!o.boxShadow)return(0,n.createElement)(t,l);const{boxShadowX:s,boxShadowY:u,boxShadowBlur:d,boxShadowSpread:p,boxShadowColor:m,boxShadowGradient:b,style:h}=r;let g={...l.wrapperProps};if(!b&&!m)return(0,n.createElement)(t,l);let y="0px";return null!=h&&null!==(a=h.border)&&void 0!==a&&a.radius&&(y=(parseInt(h.border.radius)+parseInt(p)/2).toString()+"px"),g.style={...g.style,"--box-shadow-x":(null!=s?s:0)+"px","--box-shadow-y":(null!=u?u:0)+"px","--box-shadow-blur":(null!=d?d:0)+"px","--box-shadow-spread":(null!=p?p:0)+"px","--box-shadow-radius":y},b&&(g.style["--box-shadow-gradient"]=b),m&&(g.style["--box-shadow-color"]=m),(0,n.createElement)(t,e({},l,{wrapperProps:g}))}),"withBoxShadowCss");(0,i.addFilter)("editor.BlockListBlock","blockify/with-box-shadow",d),(0,i.addFilter)("blocks.getSaveContent.extraProps","blockify/apply-box-shadow-styles",((e,t,l)=>{var n,o,a;if(null==c||null===(n=c[null==t?void 0:t.name])||void 0===n||!n.boxShadow)return e;const{boxShadowX:r,boxShadowY:i,boxShadowBlur:s,boxShadowSpread:u,boxShadowColor:d,boxShadowGradient:p,style:m}=l;if(!p&&!d)return e;let b="0px";return null!=m&&null!==(o=m.border)&&void 0!==o&&o.radius&&(b=(parseInt(m.border.radius)+parseInt(u)/2).toString()+"px"),e.style={...e.style,"--box-shadow-x":(null!=r?r:0)+"px","--box-shadow-y":(null!=i?i:0)+"px","--box-shadow-blur":(null!=s?s:0)+"px","--box-shadow-spread":(null!=u?u:0)+"px","--box-shadow-radius":null!==(a=b)&&void 0!==a?a:"0px"},p&&(e.style["--box-shadow-gradient"]=p),d&&(e.style["--box-shadow-color"]=d),e}));const p=["core/separator","core/paragraph"];(0,i.addFilter)("blocks.registerBlockType","blockify/add-width-attribute",((e,t)=>(p.includes(t)&&(e.attributes.width={type:"string"},e.attributes.height={type:"string"}),e)));const m=(0,r.createHigherOrderComponent)((e=>t=>{var l;const r=(0,n.createElement)(e,t);if(!p.includes(t.name))return r;const{attributes:i,setAttributes:c}=t;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,t),(0,n.createElement)(a.InspectorAdvancedControls,null,(0,n.createElement)(o.PanelBody,{title:(0,s.__)("Dimensions","blockify"),initialOpen:!1,className:"blockify-advanced-controls-dimensions"},(0,n.createElement)(o.__experimentalUnitControl,{label:(0,s.__)("Width","blockify"),value:null!==(l=i.width)&&void 0!==l?l:"auto",onChange:e=>c({width:e})}))))}),"withWidthCss"),b=e=>{let t="";return null!=e&&e.width&&(t+="width:"+e.width),t.trim()};(0,i.addFilter)("editor.BlockEdit","blockify/with-width-css",m);const h=(0,r.createHigherOrderComponent)((e=>t=>{const{attributes:l,name:o,clientId:a}=t,r=(0,n.createElement)(e,t);if(!p.includes(o))return r;let i=b(l);return i?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("style",null,"#block-"+a+"{"+i+"}"),(0,n.createElement)(e,t)):r}),"withWidth");(0,i.addFilter)("editor.BlockListBlock","blockify/with-css-filter",h),(0,i.addFilter)("blocks.getSaveContent.extraProps","blockify/apply-css-filter-styles",(function(e,t,l){if(void 0!==l&&p.includes(t.name)){let t=b(l);t&&(e={...e,style:{...e.style,styles:t}})}return e}));const g=["core/image","core/group"],y={blur:{type:"integer"},brightness:{type:"integer"},contrast:{type:"integer"},grayscale:{type:"integer"},hueRotate:{type:"integer"},invert:{type:"integer"},opacity:{type:"integer"},saturate:{type:"integer"},sepia:{type:"integer"}};(0,i.addFilter)("blocks.registerBlockType","blockify/add-css-filter-attributes",((e,t)=>(g.includes(t)&&Object.keys(y).map((t=>{e.attributes[t]=y[t]})),e)));const v=(0,r.createHigherOrderComponent)((e=>t=>{var l,r,i,c,u,d,p,m,b;const h=(0,n.createElement)(e,t);if(!g.includes(t.name))return h;const{attributes:y,setAttributes:v}=t;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,t),(0,n.createElement)(a.InspectorAdvancedControls,null,(0,n.createElement)(o.PanelBody,{title:(0,s.__)("Filter","blockify"),initialOpen:!1,className:"blockify-advanced-controls-filter"},(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Blur","blockify"),value:null!==(l=null==y?void 0:y.blur)&&void 0!==l?l:0,onChange:e=>v({blur:e}),min:0,max:100,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Brightness","blockify"),value:null!==(r=null==y?void 0:y.brightness)&&void 0!==r?r:100,onChange:e=>v({brightness:e}),min:0,max:1e3,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Contrast","blockify"),value:null!==(i=null==y?void 0:y.contrast)&&void 0!==i?i:100,onChange:e=>v({contrast:e}),min:0,max:1e3,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Grayscale","blockify"),value:null!==(c=null==y?void 0:y.grayscale)&&void 0!==c?c:0,onChange:e=>v({grayscale:e}),min:0,max:100,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Hue Rotate","blockify"),value:null!==(u=null==y?void 0:y.hueRotate)&&void 0!==u?u:0,onChange:e=>v({hueRotate:e}),min:0,max:360,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Invert","blockify"),value:null!==(d=null==y?void 0:y.invert)&&void 0!==d?d:0,onChange:e=>v({invert:e}),min:0,max:100,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Opacity","blockify"),value:null!==(p=null==y?void 0:y.opacity)&&void 0!==p?p:100,onChange:e=>v({opacity:e}),min:0,max:100,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Saturate","blockify"),value:null!==(m=null==y?void 0:y.saturate)&&void 0!==m?m:100,onChange:e=>v({saturate:e}),min:0,max:1e3,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Sepia","blockify"),value:null!==(b=null==y?void 0:y.sepia)&&void 0!==b?b:0,onChange:e=>v({sepia:e}),min:0,max:100,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}))))}),"withCssFilter"),f=e=>{let t="";return null!=e&&e.blur&&(t+=" blur("+e.blur+"px)"),null!=e&&e.brightness&&(t+=" brightness("+e.brightness+"%)"),null!=e&&e.contrast&&(t+=" contrast("+e.contrast+"%)"),null!=e&&e.grayscale&&(t+=" grayscale("+e.grayscale+"%)"),null!=e&&e.hueRotate&&(t+=" hue-rotate("+e.hueRotate+"deg)"),null!=e&&e.invert&&(t+=" invert("+e.invert+"%)"),null!=e&&e.opacity&&(t+=" opacity("+e.opacity+"%)"),null!=e&&e.saturate&&(t+=" saturate("+e.saturate+"%)"),null!=e&&e.sepia&&(t+=" sepia("+e.sepia+"%)"),t.trim()};(0,i.addFilter)("editor.BlockEdit","blockify/with-css-transforms",v);const w=(0,r.createHigherOrderComponent)((e=>t=>{const{attributes:l,name:o,clientId:a}=t,r=(0,n.createElement)(e,t);if(!g.includes(o))return r;let i=f(l);return i?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("style",null,"#block-"+a+"{filter:"+i+"}"),(0,n.createElement)(e,t)):r}),"withCssTransform");(0,i.addFilter)("editor.BlockListBlock","blockify/with-css-filter",w),(0,i.addFilter)("blocks.getSaveContent.extraProps","blockify/apply-css-filter-styles",(function(e,t,l){if(void 0!==l&&g.includes(t.name)){let t=f(l);t&&(e={...e,style:{...e.style,filter:t}})}return e})),(0,i.addFilter)("blocks.registerBlockType","blockify/block-attributes-position",(e=>{var t;return null!=e&&null!==(t=e.attributes)&&void 0!==t&&t.position||(e.attributes=Object.assign(e.attributes,{position:{type:"string"},inset:{type:"object"},zIndex:{type:"integer"}})),e}));const k=(0,r.createHigherOrderComponent)((e=>t=>{const{attributes:l,setAttributes:r,isSelected:i}=t;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,t),i&&(0,n.createElement)(a.InspectorAdvancedControls,null,(0,n.createElement)(o.PanelBody,{title:(0,s.__)("Position","blockify"),initialOpen:!1,className:"blockify-advanced-controls-position"},((e,t)=>{var l,a,r,i;const{position:c,inset:u,zIndex:d}=e,p=[{label:(0,s.__)("Default","blockify"),value:""},{label:(0,s.__)("Relative","blockify"),value:"relative"},{label:(0,s.__)("Absolute","blockify"),value:"absolute"},{label:(0,s.__)("Sticky","blockify"),value:"sticky"},{label:(0,s.__)("Fixed","blockify"),value:"fixed"},{label:(0,s.__)("Static","blockify"),value:"static"}];return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.SelectControl,{label:(0,s.__)("Position","blockify"),value:null!=c?c:"",options:p,onChange:e=>t({position:e})})),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.Flex,null,(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalUnitControl,{label:(0,s.__)("Top","blockify"),value:null!==(l=null==u?void 0:u.top)&&void 0!==l?l:"",onChange:e=>t({inset:{...u,top:e}})})),(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalUnitControl,{label:(0,s.__)("Right","blockify"),value:null!==(a=null==u?void 0:u.right)&&void 0!==a?a:"",onChange:e=>t({inset:{...u,right:e}})})),(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalUnitControl,{label:(0,s.__)("Bottom","blockify"),value:null!==(r=null==u?void 0:u.bottom)&&void 0!==r?r:"",onChange:e=>t({inset:{...u,bottom:e}})})),(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalUnitControl,{label:(0,s.__)("Left","blockify"),value:null!==(i=null==u?void 0:u.left)&&void 0!==i?i:"",onChange:e=>t({inset:{...u,left:e}})})))),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Z Index","blockify"),onChange:e=>t({zIndex:e}),value:d,min:-10,max:10,step:1,shiftStep:!0,allowReset:!0})))})(l,r))))}),"withAdvancedControls");(0,i.addFilter)("editor.BlockEdit","blockify/custom-advanced-control",k);const x=e=>{const{position:t,inset:l,zIndex:n,transform:o,opacity:a}=e;let r={};return t&&(r.position=t),null!=l&&l.top&&(r.top=l.top),null!=l&&l.right&&(r.right=l.right),null!=l&&l.bottom&&(r.bottom=l.bottom),null!=l&&l.left&&(r.left=l.left),n&&(r.zIndex=n),r},E=(0,r.createHigherOrderComponent)((t=>l=>{const{attributes:o}=l,a=x(o);let r={...l.wrapperProps};return a&&(r.style={...r.style,...a}),(0,n.createElement)(t,e({},l,{wrapperProps:r}))}),"withPositionStyle");(0,i.addFilter)("editor.BlockListBlock","blockify/with-position-style",E),(0,i.addFilter)("blocks.getSaveContent.extraProps","blockify/add-position-style",((e,t,l)=>{const n=x(l);return n&&(e.style={...e.style,...n}),e}));const _=["core/group","core/image"],S={translateX:{type:"object"},translateY:{type:"object"},translateZ:{type:"object"},scale:{type:"integer"},scaleX:{type:"integer"},scaleY:{type:"integer"},scaleZ:{type:"integer"},rotate:{type:"integer"},rotateX:{type:"integer"},rotateY:{type:"integer"},rotateZ:{type:"integer"},skewX:{type:"integer"},skewY:{type:"integer"}};(0,i.addFilter)("blocks.registerBlockType","blockify/add-css-transform-attributes",((e,t)=>(_.includes(t)&&Object.keys(S).map((t=>{e.attributes[t]=S[t]})),e)));const C=(0,r.createHigherOrderComponent)((e=>t=>{var l,r,i,c,u,d,p,m,b,h,g,y,v;const f=(0,n.createElement)(e,t);if(!_.includes(t.name))return f;const{attributes:w,setAttributes:k}=t;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,t),(0,n.createElement)(a.InspectorAdvancedControls,null,(0,n.createElement)(o.PanelBody,{title:(0,s.__)("Transform","blockify"),initialOpen:!1,className:"blockify-advanced-controls-transform"},(0,n.createElement)(o.__experimentalText,null,(0,s.__)("Translate","blockify")),(0,n.createElement)("br",null),(0,n.createElement)(o.Flex,null,(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalUnitControl,{label:(0,s.__)("X","blockify"),value:null!==(l=w.translateX)&&void 0!==l?l:"0px",onChange:e=>k({translateX:e})})),(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalUnitControl,{label:(0,s.__)("Y","blockify"),value:null!==(r=null==w?void 0:w.translateY)&&void 0!==r?r:"0px",onChange:e=>k({translateY:e})})),(0,n.createElement)(o.FlexItem,null,(0,n.createElement)(o.__experimentalUnitControl,{label:(0,s.__)("Z","blockify"),value:null!==(i=null==w?void 0:w.translateZ)&&void 0!==i?i:"0px",onChange:e=>k({translateZ:e})}))),(0,n.createElement)("br",null),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Scale","blockify"),value:null!==(c=null==w?void 0:w.scale)&&void 0!==c?c:1,onChange:e=>k({scale:e}),min:-10,max:10,step:.1,shiftStep:1,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Scale X","blockify"),value:null!==(u=null==w?void 0:w.scaleX)&&void 0!==u?u:1,onChange:e=>k({scaleX:e}),min:-10,max:10,step:.1,shiftStep:1,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Scale Y","blockify"),value:null!==(d=null==w?void 0:w.scaleY)&&void 0!==d?d:1,onChange:e=>k({scaleY:e}),min:-10,max:10,step:.1,shiftStep:1,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Scale Z","blockify"),value:null!==(p=null==w?void 0:w.scaleZ)&&void 0!==p?p:1,onChange:e=>k({scaleZ:e}),min:-10,max:10,step:.1,shiftStep:1,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,n.createElement)(o.AnglePickerControl,{label:(0,s.__)("Rotate","blockify"),value:null!==(m=null==w?void 0:w.rotate)&&void 0!==m?m:0,onChange:e=>k({rotate:e})}),(0,n.createElement)(o.AnglePickerControl,{label:(0,s.__)("RotateX","blockify"),value:null!==(b=null==w?void 0:w.rotateX)&&void 0!==b?b:0,onChange:e=>k({rotateX:e})}),(0,n.createElement)(o.AnglePickerControl,{label:(0,s.__)("RotateY","blockify"),value:null!==(h=null==w?void 0:w.rotateY)&&void 0!==h?h:0,onChange:e=>k({rotateY:e})}),(0,n.createElement)(o.AnglePickerControl,{label:(0,s.__)("RotateZ","blockify"),value:null!==(g=null==w?void 0:w.rotateZ)&&void 0!==g?g:0,onChange:e=>k({rotateZ:e})}),(0,n.createElement)("br",null),(0,n.createElement)(o.AnglePickerControl,{label:(0,s.__)("Skew X","blockify"),value:null!==(y=null==w?void 0:w.skewX)&&void 0!==y?y:0,onChange:e=>k({skewX:e})}),(0,n.createElement)(o.AnglePickerControl,{label:(0,s.__)("Skew Y","blockify"),value:null!==(v=null==w?void 0:w.skewY)&&void 0!==v?v:0,onChange:e=>k({skewY:e})}))))}),"withCssTransforms"),F=e=>{let t="";return null!=e&&e.translateX&&"0px"!==e.translateX&&(t+=" translateX("+e.translateX+")"),null!=e&&e.translateY&&"0px"!==e.translateY&&(t+=" translateY("+e.translateY+")"),null!=e&&e.translateZ&&"0px"!==e.translateZ&&(t+=" translateZ("+e.translateZ+")"),null!=e&&e.scale&&(t+=" scale("+e.scale+")"),null!=e&&e.scaleX&&(t+=" scaleX("+e.scaleX+")"),null!=e&&e.scaleY&&(t+=" scaleY("+e.scaleY+")"),null!=e&&e.scaleZ&&(t+=" scaleZ("+e.scaleZ+")"),null!=e&&e.rotate&&(t+=" rotate("+e.rotate+"deg)"),null!=e&&e.rotateX&&(t+=" rotateX("+e.rotateX+"deg)"),null!=e&&e.rotateY&&(t+=" rotateY("+e.rotateY+"deg)"),null!=e&&e.rotateZ&&(t+=" rotateZ("+e.rotateZ+"deg)"),null!=e&&e.skewX&&(t+=" skewX("+e.skewX+"deg)"),null!=e&&e.skewY&&(t+=" skewY("+e.skewY+"deg)"),t.trim()};(0,i.addFilter)("editor.BlockEdit","blockify/with-css-transforms",C);const B=(0,r.createHigherOrderComponent)((e=>t=>{const{attributes:l,name:o,clientId:a}=t,r=(0,n.createElement)(e,t);if(!_.includes(o))return r;const i=F(l);return i?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("style",null,"#block-"+a+"{transform:"+i+"}"),(0,n.createElement)(e,t)):r}),"withCssTransform");(0,i.addFilter)("editor.BlockListBlock","blockify/with-css-transform",B),(0,i.addFilter)("blocks.getSaveContent.extraProps","blockify/apply-css-transform-styles",(function(e,t,l){if(void 0!==l&&_.includes(t.name)){const t=F(l);t&&(e={...e,style:{...e.style,transform:t}})}return e}));var R=window.lodash,I=window.wp.data,T=window.wp.richText;class P extends n.Component{render(){const{value:e,isActive:t,onChange:l,formatTypes:o}=this.props;return(0,n.createElement)(a.RichTextToolbarButton,{icon:"editor-removeformatting",title:(0,s.__)("Clear Formatting","blockify"),onClick:()=>{if(o.length>0){let t=e;(0,R.map)(o,(e=>{t=(0,T.removeFormat)(t,e.name)})),l({...t})}},isActive:t})}}const X=(0,r.compose)((0,I.withSelect)((e=>({formatTypes:e("core/rich-text").getFormatTypes()}))))(P);(0,T.registerFormatType)("blockify/clear-formatting",{title:(0,s.__)("Clear","blockify"),tagName:"span",className:"clear",edit:e=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(X,e))});var Y=window.wp.primitives,O=(0,n.createElement)(Y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(Y.Path,{d:"M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"})),A=(0,n.createElement)(Y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(Y.Path,{d:"M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"}));const N="blockify/small";(0,T.registerFormatType)(N,{title:(0,s.__)("Small","blockify"),tagName:"small",className:null,edit(e){let{isActive:t,value:l,onChange:o}=e;const r=()=>{o((0,T.toggleFormat)(l,{type:N}))};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.RichTextShortcut,{type:"primary",character:"sm",onUse:r}),(0,n.createElement)(a.RichTextToolbarButton,{icon:O,title:(0,s.__)("Small","blockify"),onClick:r,isActive:t,shortcutType:"primary",shortcutCharacter:"sm"}))}});const Z="blockify/big";(0,T.registerFormatType)(Z,{title:(0,s.__)("Big","blockify"),tagName:"big",className:null,edit(e){let{isActive:t,value:l,onChange:o}=e;const r=()=>{o((0,T.toggleFormat)(l,{type:Z}))};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.RichTextShortcut,{type:"primary",character:"+",onUse:r}),(0,n.createElement)(a.RichTextToolbarButton,{icon:A,title:(0,s.__)("Big","blockify"),onClick:r,isActive:t,shortcutType:"primary",shortcutCharacter:"+"}))}});var j=(0,n.createElement)(Y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(Y.Path,{d:"M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"}));const z="blockify/underline";(0,T.registerFormatType)(z,{title:(0,s.__)("Underline","blockify"),tagName:"u",className:null,edit:e=>{let{isActive:t,value:l,onChange:o}=e;const r=()=>{o((0,T.toggleFormat)(l,{type:z}))};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.RichTextShortcut,{type:"primary",character:"u",onUse:r}),(0,n.createElement)(a.RichTextToolbarButton,{icon:j,title:(0,s.__)("Underline","blockify"),onClick:r,isActive:t,shortcutType:"primary",shortcutCharacter:"u"}))}});var H=(0,n.createElement)(Y.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(Y.Path,{d:"M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"}));const G="blockify/gradient",U=[{gradient:"linear-gradient(0deg,var(--wp--preset--color--black) 0%,var(--wp--preset--color--white) 100%)",slug:"black-white",name:"Black White"}];(0,T.registerFormatType)(G,{title:(0,s.__)("Gradient","blockify"),tagName:"span",className:"has-gradient-text",attributes:{style:"style",class:"class"},edit:(0,r.compose)((0,I.withSelect)((e=>{const{gradients:t}=e("core/block-editor").getSettings();return{gradients:t||U}})))((e=>{let{isActive:t,value:l,onChange:r,gradients:i}=e;const[c,u]=(0,n.useState)(""),[d,p]=(0,n.useState)(!1);return(0,n.createElement)(a.BlockControls,null,(0,n.createElement)(a.RichTextShortcut,{type:"primary",character:"g"}),(0,n.createElement)(a.RichTextToolbarButton,{icon:H,title:(0,s.__)("Gradient","blockify"),isActive:t,shortcutType:"primary",shortcutCharacter:"g",onClick:()=>p(!d)}),d&&(0,n.createElement)(o.Toolbar,{className:"blockify-components-toolbar"},(0,n.createElement)(o.Popover,{position:"bottom center",className:"blockify-gradient-text-control",focusOnMount:"container",onFocusOutside:()=>p(!1)},(0,n.createElement)(o.GradientPicker,{value:c,gradients:i,onChange:e=>{u(e),r((0,T.applyFormat)(l,{type:G,attributes:{style:"background:"+e,class:"has-gradient-text"}}))}}))))}))});var V=window.wp.blocks,L=window.wp.domReady,M=l.n(L);M()((()=>{var e,t,l;const n=null!==(e=null===(t=window)||void 0===t||null===(l=t.blockify)||void 0===l?void 0:l.blockStyles)&&void 0!==e?e:{unregister:[],register:[]};[...null==n?void 0:n.unregister].forEach((e=>{(0,V.unregisterBlockStyle)(null==e?void 0:e.type,null==e?void 0:e.name)})),[...null==n?void 0:n.register].forEach((e=>{(0,V.registerBlockStyle)(null==e?void 0:e.type,e)}))}));var W,D,q,Q=l(4184),J=l.n(Q);const K=null!==(W=null===(D=window)||void 0===D||null===(q=D.blockify)||void 0===q?void 0:q.blockSupports)&&void 0!==W?W:{};(0,i.addFilter)("blocks.registerBlockType","blockify/block-supports",((e,t)=>(Object.keys(K).includes(t)&&(e.supports={...e.supports,...K[t]}),e)),0),(0,i.addFilter)("blocks.getSaveContent.extraProps","blockify/alignment-class",((e,t,l)=>(Object.keys(K).includes(t.name)&&null!=l&&l.align&&(e.className=J()(e.className,"align"+l.align)),e))),(0,i.addFilter)("blocks.registerBlockType","blockify/block-attributes-search",((e,t)=>{var l,n,o;return"core/search"===t&&(e.attributes.style={...null===(l=e.attributes)||void 0===l?void 0:l.style,spacing:{...null===(n=e.attributes)||void 0===n||null===(o=n.style)||void 0===o?void 0:o.spacing,padding:{top:"1em",right:"1em",bottom:"1em",left:"2em"}}}),e}),0);const $=(0,r.createHigherOrderComponent)((e=>t=>{var l,o,a;if("core/search"!==t.name)return(0,n.createElement)(e,t);const r=document.getElementsByClassName("wp-block-search__input"),i=null==t||null===(l=t.attributes)||void 0===l||null===(o=l.style)||void 0===o||null===(a=o.spacing)||void 0===a?void 0:a.padding;return r[0]&&i&&(i.top&&(r[0].style.paddingTop=null==i?void 0:i.top),i.right&&(r[0].style.paddingRight=null==i?void 0:i.right),i.bottom&&(r[0].style.paddingBottom=null==i?void 0:i.bottom),i.left&&(r[0].style.paddingLeft=null==i?void 0:i.left)),(0,n.createElement)(e,t)}),"withInspectorControl");(0,i.addFilter)("editor.BlockEdit","blockify/with-search-padding-css",$);var ee=window.jQuery,te=l.n(ee);M()((()=>{var e,t;const l=te()(".post-type-block_pattern .page-title-action")[0];if(!l)return;const n=null!==(e=null===(t=window)||void 0===t?void 0:t.blockify)&&void 0!==e?e:{},o=te()('<button class="export-button page-title-action">Export All</button>').get(0);l.after(o),te()(".export-button").on("click",(()=>{te().ajax({method:"POST",url:null==n?void 0:n.ajaxUrl,data:{action:"blockify_export_patterns",nonce:null==n?void 0:n.nonce},success:e=>{console.log(e)},error:e=>{console.log((0,s.__)("Patterns error","blockify")),console.log(e)}})}))}));var le=window.wp.plugins,ne=window.wp.editor,oe=window.wp.editPost;(0,le.registerPlugin)("blockify-page-title",{render:()=>{const{postTitle:e,template:t}=(0,I.useSelect)((e=>({postTitle:e(ne.store).getEditedPostAttribute("title"),template:e(ne.store).getEditedPostAttribute("template")})),[]);"landing-page"===t?document.body.classList.add("page-template-landing-page"):document.body.classList.remove("page-template-landing-page");const{editPost:l}=(0,I.useDispatch)(ne.store);return(0,n.createElement)("div",null,(0,n.createElement)(oe.PluginPostStatusInfo,null,(0,n.createElement)(o.TextControl,{label:(0,s.__)("Title","blockify"),value:null!=e?e:"",min:1,onChange:e=>l({title:e}),required:!0})))}})}()}();