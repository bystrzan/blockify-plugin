!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,r=window.wp.blocks,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"blockify/breadcrumbs","title":"Breadcrumbs","icon":"controls-back","category":"blockify","textdomain":"blockify","keywords":["links"],"supports":{"color":{"gradients":true},"typography":{"fontSize":true,"lineHeight":true},"spacing":{"margin":true,"padding":true,"blockGap":true},"__experimentalBorder":{"width":true,"style":true,"color":true,"radius":true,"__experimentalDefaultControls":{"width":true,"color":true}},"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"default":{"type":"flex","justifyContent":"left","orientation":"horizontal"}}},"attributes":{"style":{"type":"object","default":{"blockGap":"0px"}}},"editorScript":"file:index.tsx","script":"file:script.tsx","editorStyle":"file:editor.scss","style":"file:style.scss","viewScript":"file:view.tsx"}'),i=window.wp.serverSideRender,n=e.n(i),l=window.wp.blockEditor,s=window.wp.primitives,c=(0,t.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.Path,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})),a=window.wp.i18n;(0,r.registerBlockType)(o,{icon:c,edit:e=>{let{attributes:r}=e;const o=(0,l.useBlockProps)(),i=(0,t.createElement)("p",null,(0,a.__)("Home / Page","blockify"));return(0,t.createElement)("div",o,(0,t.createElement)(n(),{block:"blockify/breadcrumbs",attributes:r,EmptyResponsePlaceholder:()=>i}))},save:()=>{const e=l.useBlockProps.save();return(0,t.createElement)("div",e,"")}})}();