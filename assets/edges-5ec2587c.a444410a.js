import{q as t,c as e,d as a,an as r,h as n,l as i,y as s,ao as l}from"./mermaid.core.8d993421.js";import{c as o}from"./createText-a48a4c90.8289b00c.js";import{l as d}from"./line.0a1299df.js";const c={extension:(t,e,a)=>{i.trace("Making markers for ",a),t.append("defs").append("marker").attr("id",a+"_"+e+"-extensionStart").attr("class","marker extension "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-compositionStart").attr("class","marker composition "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),t.append("defs").append("marker").attr("id",a+"_"+e+"-lollipopEnd").attr("class","marker lollipop "+e).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},point:(t,e,a)=>{t.append("marker").attr("id",a+"_"+e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",a+"_"+e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(t,e,a)=>{t.append("marker").attr("id",a+"_"+e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",a+"_"+e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(t,e,a)=>{t.append("marker").attr("id",a+"_"+e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",a+"_"+e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},h=(t,e,a,r)=>{e.forEach((e=>{c[e](t,a,r)}))};const p=(a,s,l,o)=>{let d=a||"";if("object"==typeof d&&(d=d[0]),t(e().flowchart.htmlLabels)){d=d.replace(/\\n|\n/g,"<br />"),i.info("vertexText"+d);return function(t){const e=n(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=e.append("xhtml:div"),r=t.label,i=t.isNode?"nodeLabel":"edgeLabel";var s,l;return a.html('<span class="'+i+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+r+"</span>"),s=a,(l=t.labelStyle)&&s.attr("style",l),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),e.node()}({isNode:o,label:r(d).replace(/fa[blrs]?:fa-[\w-]+/g,(t=>`<i class='${t.replace(":"," ")}'></i>`)),labelStyle:s.replace("fill:","color:")})}{const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",s.replace("color:","fill:"));let e=[];e="string"==typeof d?d.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(d)?d:[];for(const a of e){const e=document.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),e.setAttribute("dy","1em"),e.setAttribute("x","0"),l?e.setAttribute("class","title-row"):e.setAttribute("class","row"),e.textContent=a.trim(),t.appendChild(e)}return t}},g=async(i,s,l,d)=>{let c;const h=s.useHtmlLabels||t(e().flowchart.htmlLabels);c=l||"node default";const g=i.insert("g").attr("class",c).attr("id",s.domId||s.id),y=g.insert("g").attr("class","label").attr("style",s.labelStyle);let f;f=void 0===s.labelText?"":"string"==typeof s.labelText?s.labelText:s.labelText[0];const w=y.node();let x;x="markdown"===s.labelType?o(y,a(r(f),e()),{useHtmlLabels:h,width:s.width||e().flowchart.wrappingWidth,classes:"markdown-node-label"}):w.appendChild(p(a(r(f),e()),s.labelStyle,!1,d));let b=x.getBBox();const u=s.padding/2;if(t(e().flowchart.htmlLabels)){const t=x.children[0],a=n(x),r=t.getElementsByTagName("img");if(r){const t=""===f.replace(/<img[^>]*>/g,"").trim();await Promise.all([...r].map((a=>new Promise((r=>{function n(){if(a.style.display="flex",a.style.flexDirection="column",t){const t=e().fontSize?e().fontSize:window.getComputedStyle(document.body).fontSize,r=5,n=parseInt(t,10)*r+"px";a.style.minWidth=n,a.style.maxWidth=n}else a.style.width="100%";r(a)}setTimeout((()=>{a.complete&&n()})),a.addEventListener("error",n),a.addEventListener("load",n)})))))}b=t.getBoundingClientRect(),a.attr("width",b.width),a.attr("height",b.height)}return h?y.attr("transform","translate("+-b.width/2+", "+-b.height/2+")"):y.attr("transform","translate(0, "+-b.height/2+")"),s.centerLabel&&y.attr("transform","translate("+-b.width/2+", "+-b.height/2+")"),y.insert("rect",":first-child"),{shapeSvg:g,bbox:b,halfPadding:u,label:y}},y=(t,e)=>{const a=e.node().getBBox();t.width=a.width,t.height=a.height};function f(t,e,a,r){return t.insert("polygon",":first-child").attr("points",r.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+a/2+")")}function w(t,e,a,r){var n=t.x,i=t.y,s=n-r.x,l=i-r.y,o=Math.sqrt(e*e*l*l+a*a*s*s),d=Math.abs(e*a*s/o);r.x<n&&(d=-d);var c=Math.abs(e*a*l/o);return r.y<i&&(c=-c),{x:n+d,y:i+c}}function x(t,e,a,r){var n,i,s,l,o,d,c,h,p,g,y,f,w;if(n=e.y-t.y,s=t.x-e.x,o=e.x*t.y-t.x*e.y,p=n*a.x+s*a.y+o,g=n*r.x+s*r.y+o,!(0!==p&&0!==g&&b(p,g)||(i=r.y-a.y,l=a.x-r.x,d=r.x*a.y-a.x*r.y,c=i*t.x+l*t.y+d,h=i*e.x+l*e.y+d,0!==c&&0!==h&&b(c,h)||0==(y=n*l-i*s))))return f=Math.abs(y/2),{x:(w=s*d-l*o)<0?(w-f)/y:(w+f)/y,y:(w=i*o-n*d)<0?(w-f)/y:(w+f)/y}}function b(t,e){return t*e>0}const u=(t,e)=>{var a,r,n=t.x,i=t.y,s=e.x-n,l=e.y-i,o=t.width/2,d=t.height/2;return Math.abs(l)*o>Math.abs(s)*d?(l<0&&(d=-d),a=0===l?0:d*s/l,r=d):(s<0&&(o=-o),a=o,r=0===s?0:o*l/s),{x:n+a,y:i+r}},m={node:function(t,e){return t.intersect(e)},circle:function(t,e,a){return w(t,e,e,a)},ellipse:w,polygon:function(t,e,a){var r=t.x,n=t.y,i=[],s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach((function(t){s=Math.min(s,t.x),l=Math.min(l,t.y)})):(s=Math.min(s,e.x),l=Math.min(l,e.y));for(var o=r-t.width/2-s,d=n-t.height/2-l,c=0;c<e.length;c++){var h=e[c],p=e[c<e.length-1?c+1:0],g=x(t,a,{x:o+h.x,y:d+h.y},{x:o+p.x,y:d+p.y});g&&i.push(g)}return i.length?(i.length>1&&i.sort((function(t,e){var r=t.x-a.x,n=t.y-a.y,i=Math.sqrt(r*r+n*n),s=e.x-a.x,l=e.y-a.y,o=Math.sqrt(s*s+l*l);return i<o?-1:i===o?0:1})),i[0]):t},rect:u},k=t=>t?" "+t:"",L=(t,e)=>`${e||"node default"}${k(t.classes)} ${k(t.class)}`,v=async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e,void 0),!0),n=r.width+e.padding+(r.height+e.padding),s=[{x:n/2,y:0},{x:n,y:-n/2},{x:n/2,y:-n},{x:0,y:-n/2}];i.info("Question main (Circle)");const l=f(a,n,n,s);return l.attr("style",e.style),y(e,l),e.intersect=function(t){return i.warn("Intersect called"),m.polygon(e,s,t)},a};function S(t,e,a,r){const n=[],s=t=>{n.push(t,0)},l=t=>{n.push(0,t)};e.includes("t")?(i.debug("add top border"),s(a)):l(a),e.includes("r")?(i.debug("add right border"),s(r)):l(r),e.includes("b")?(i.debug("add bottom border"),s(a)):l(a),e.includes("l")?(i.debug("add left border"),s(r)):l(r),t.attr("stroke-dasharray",n.join(" "))}const M=(t,e,a)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id);let n=70,i=10;"LR"===a&&(n=10,i=70);const s=r.append("rect").attr("x",-1*n/2).attr("y",-1*i/2).attr("width",n).attr("height",i).attr("class","fork-join");return y(e,s),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return m.rect(e,t)},r},T={rhombus:v,question:v,rect:async(t,e)=>{const{shapeSvg:a,bbox:r,halfPadding:n}=await g(t,e,"node "+e.classes+" "+e.class,!0),s=a.insert("rect",":first-child"),l=r.width+e.padding,o=r.height+e.padding;if(s.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",-r.width/2-n).attr("y",-r.height/2-n).attr("width",l).attr("height",o),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(S(s,e.props.borders,l,o),t.delete("borders")),t.forEach((t=>{i.warn(`Unknown node property ${t}`)}))}return y(e,s),e.intersect=function(t){return m.rect(e,t)},a},labelRect:async(t,e)=>{const{shapeSvg:a}=await g(t,e,"label",!0);i.trace("Classes = ",e.class);const r=a.insert("rect",":first-child");if(r.attr("width",0).attr("height",0),a.attr("class","label edgeLabel"),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(S(r,e.props.borders,0,0),t.delete("borders")),t.forEach((t=>{i.warn(`Unknown node property ${t}`)}))}return y(e,r),e.intersect=function(t){return m.rect(e,t)},a},rectWithTitle:(a,r)=>{let s;s=r.classes?"node "+r.classes:"node default";const l=a.insert("g").attr("class",s).attr("id",r.domId||r.id),o=l.insert("rect",":first-child"),d=l.insert("line"),c=l.insert("g").attr("class","label"),h=r.labelText.flat?r.labelText.flat():r.labelText;let g="";g="object"==typeof h?h[0]:h,i.info("Label text abc79",g,h,"object"==typeof h);const f=c.node().appendChild(p(g,r.labelStyle,!0,!0));let w={width:0,height:0};if(t(e().flowchart.htmlLabels)){const t=f.children[0],e=n(f);w=t.getBoundingClientRect(),e.attr("width",w.width),e.attr("height",w.height)}i.info("Text 2",h);const x=h.slice(1,h.length);let b=f.getBBox();const u=c.node().appendChild(p(x.join?x.join("<br/>"):x,r.labelStyle,!0,!0));if(t(e().flowchart.htmlLabels)){const t=u.children[0],e=n(u);w=t.getBoundingClientRect(),e.attr("width",w.width),e.attr("height",w.height)}const k=r.padding/2;return n(u).attr("transform","translate( "+(w.width>b.width?0:(b.width-w.width)/2)+", "+(b.height+k+5)+")"),n(f).attr("transform","translate( "+(w.width<b.width?0:-(b.width-w.width)/2)+", 0)"),w=c.node().getBBox(),c.attr("transform","translate("+-w.width/2+", "+(-w.height/2-k+3)+")"),o.attr("class","outer title-state").attr("x",-w.width/2-k).attr("y",-w.height/2-k).attr("width",w.width+r.padding).attr("height",w.height+r.padding),d.attr("class","divider").attr("x1",-w.width/2-k).attr("x2",w.width/2+k).attr("y1",-w.height/2-k+b.height+k).attr("y2",-w.height/2-k+b.height+k),y(r,o),r.intersect=function(t){return m.rect(r,t)},l},choice:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}];return a.insert("polygon",":first-child").attr("points",r.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return m.circle(e,14,t)},a},circle:async(t,e)=>{const{shapeSvg:a,bbox:r,halfPadding:n}=await g(t,e,L(e,void 0),!0),s=a.insert("circle",":first-child");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",r.width/2+n).attr("width",r.width+e.padding).attr("height",r.height+e.padding),i.info("Circle main"),y(e,s),e.intersect=function(t){return i.info("Circle intersect",e,r.width/2+n,t),m.circle(e,r.width/2+n,t)},a},doublecircle:async(t,e)=>{const{shapeSvg:a,bbox:r,halfPadding:n}=await g(t,e,L(e,void 0),!0),s=a.insert("g",":first-child"),l=s.insert("circle"),o=s.insert("circle");return s.attr("class",e.class),l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",r.width/2+n+5).attr("width",r.width+e.padding+10).attr("height",r.height+e.padding+10),o.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",r.width/2+n).attr("width",r.width+e.padding).attr("height",r.height+e.padding),i.info("DoubleCircle main"),y(e,l),e.intersect=function(t){return i.info("DoubleCircle intersect",e,r.width/2+n+5,t),m.circle(e,r.width/2+n+5,t)},a},stadium:async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e,void 0),!0),n=r.height+e.padding,i=r.width+n/4+e.padding,s=a.insert("rect",":first-child").attr("style",e.style).attr("rx",n/2).attr("ry",n/2).attr("x",-i/2).attr("y",-n/2).attr("width",i).attr("height",n);return y(e,s),e.intersect=function(t){return m.rect(e,t)},a},hexagon:async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e,void 0),!0),n=r.height+e.padding,i=n/4,s=r.width+2*i+e.padding,l=[{x:i,y:0},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}],o=f(a,s,n,l);return o.attr("style",e.style),y(e,o),e.intersect=function(t){return m.polygon(e,l,t)},a},rect_left_inv_arrow:async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-i/2,y:0},{x:n,y:0},{x:n,y:-i},{x:-i/2,y:-i},{x:0,y:-i/2}];return f(a,n,i,s).attr("style",e.style),e.width=n+i,e.height=i,e.intersect=function(t){return m.polygon(e,s,t)},a},lean_right:async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-2*i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:i/6,y:-i}],l=f(a,n,i,s);return l.attr("style",e.style),y(e,l),e.intersect=function(t){return m.polygon(e,s,t)},a},lean_left:async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:2*i/6,y:0},{x:n+i/6,y:0},{x:n-2*i/6,y:-i},{x:-i/6,y:-i}],l=f(a,n,i,s);return l.attr("style",e.style),y(e,l),e.intersect=function(t){return m.polygon(e,s,t)},a},trapezoid:async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-2*i/6,y:0},{x:n+2*i/6,y:0},{x:n-i/6,y:-i},{x:i/6,y:-i}],l=f(a,n,i,s);return l.attr("style",e.style),y(e,l),e.intersect=function(t){return m.polygon(e,s,t)},a},inv_trapezoid:async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:-2*i/6,y:-i}],l=f(a,n,i,s);return l.attr("style",e.style),y(e,l),e.intersect=function(t){return m.polygon(e,s,t)},a},rect_right_inv_arrow:async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:0,y:0},{x:n+i/2,y:0},{x:n,y:-i/2},{x:n+i/2,y:-i},{x:0,y:-i}],l=f(a,n,i,s);return l.attr("style",e.style),y(e,l),e.intersect=function(t){return m.polygon(e,s,t)},a},cylinder:async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e,void 0),!0),n=r.width+e.padding,i=n/2,s=i/(2.5+n/50),l=r.height+s+e.padding,o="M 0,"+s+" a "+i+","+s+" 0,0,0 "+n+" 0 a "+i+","+s+" 0,0,0 "+-n+" 0 l 0,"+l+" a "+i+","+s+" 0,0,0 "+n+" 0 l 0,"+-l,d=a.attr("label-offset-y",s).insert("path",":first-child").attr("style",e.style).attr("d",o).attr("transform","translate("+-n/2+","+-(l/2+s)+")");return y(e,d),e.intersect=function(t){const a=m.rect(e,t),r=a.x-e.x;if(0!=i&&(Math.abs(r)<e.width/2||Math.abs(r)==e.width/2&&Math.abs(a.y-e.y)>e.height/2-s)){let n=s*s*(1-r*r/(i*i));0!=n&&(n=Math.sqrt(n)),n=s-n,t.y-e.y>0&&(n=-n),a.y+=n}return a},a},start:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=a.insert("circle",":first-child");return r.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),y(e,r),e.intersect=function(t){return m.circle(e,7,t)},a},end:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=a.insert("circle",":first-child"),n=a.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),r.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),y(e,n),e.intersect=function(t){return m.circle(e,7,t)},a},note:async(t,a)=>{a.useHtmlLabels||e().flowchart.htmlLabels||(a.centerLabel=!0);const{shapeSvg:r,bbox:n,halfPadding:s}=await g(t,a,"node "+a.classes,!0);i.info("Classes = ",a.classes);const l=r.insert("rect",":first-child");return l.attr("rx",a.rx).attr("ry",a.ry).attr("x",-n.width/2-s).attr("y",-n.height/2-s).attr("width",n.width+a.padding).attr("height",n.height+a.padding),y(a,l),a.intersect=function(t){return m.rect(a,t)},r},subroutine:async(t,e)=>{const{shapeSvg:a,bbox:r}=await g(t,e,L(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-i},{x:0,y:-i},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-i},{x:-8,y:-i},{x:-8,y:0}],l=f(a,n,i,s);return l.attr("style",e.style),y(e,l),e.intersect=function(t){return m.polygon(e,s,t)},a},fork:M,join:M,class_box:(a,r)=>{const i=r.padding/2;let s;s=r.classes?"node "+r.classes:"node default";const l=a.insert("g").attr("class",s).attr("id",r.domId||r.id),o=l.insert("rect",":first-child"),d=l.insert("line"),c=l.insert("line");let h=0,g=4;const f=l.insert("g").attr("class","label");let w=0;const x=r.classData.annotations&&r.classData.annotations[0],b=r.classData.annotations[0]?"«"+r.classData.annotations[0]+"»":"",u=f.node().appendChild(p(b,r.labelStyle,!0,!0));let k=u.getBBox();if(t(e().flowchart.htmlLabels)){const t=u.children[0],e=n(u);k=t.getBoundingClientRect(),e.attr("width",k.width),e.attr("height",k.height)}r.classData.annotations[0]&&(g+=k.height+4,h+=k.width);let L=r.classData.label;void 0!==r.classData.type&&""!==r.classData.type&&(e().flowchart.htmlLabels?L+="&lt;"+r.classData.type+"&gt;":L+="<"+r.classData.type+">");const v=f.node().appendChild(p(L,r.labelStyle,!0,!0));n(v).attr("class","classTitle");let S=v.getBBox();if(t(e().flowchart.htmlLabels)){const t=v.children[0],e=n(v);S=t.getBoundingClientRect(),e.attr("width",S.width),e.attr("height",S.height)}g+=S.height+4,S.width>h&&(h=S.width);const M=[];r.classData.members.forEach((a=>{const i=a.getDisplayDetails();let s=i.displayText;e().flowchart.htmlLabels&&(s=s.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const l=f.node().appendChild(p(s,i.cssStyle?i.cssStyle:r.labelStyle,!0,!0));let o=l.getBBox();if(t(e().flowchart.htmlLabels)){const t=l.children[0],e=n(l);o=t.getBoundingClientRect(),e.attr("width",o.width),e.attr("height",o.height)}o.width>h&&(h=o.width),g+=o.height+4,M.push(l)})),g+=8;const T=[];if(r.classData.methods.forEach((a=>{const i=a.getDisplayDetails();let s=i.displayText;e().flowchart.htmlLabels&&(s=s.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const l=f.node().appendChild(p(s,i.cssStyle?i.cssStyle:r.labelStyle,!0,!0));let o=l.getBBox();if(t(e().flowchart.htmlLabels)){const t=l.children[0],e=n(l);o=t.getBoundingClientRect(),e.attr("width",o.width),e.attr("height",o.height)}o.width>h&&(h=o.width),g+=o.height+4,T.push(l)})),g+=8,x){let t=(h-k.width)/2;n(u).attr("transform","translate( "+(-1*h/2+t)+", "+-1*g/2+")"),w=k.height+4}let B=(h-S.width)/2;return n(v).attr("transform","translate( "+(-1*h/2+B)+", "+(-1*g/2+w)+")"),w+=S.height+4,d.attr("class","divider").attr("x1",-h/2-i).attr("x2",h/2+i).attr("y1",-g/2-i+8+w).attr("y2",-g/2-i+8+w),w+=8,M.forEach((t=>{var e;n(t).attr("transform","translate( "+-h/2+", "+(-1*g/2+w+4)+")");const a=null==t?void 0:t.getBBox();w+=(null!=(e=null==a?void 0:a.height)?e:0)+4})),w+=8,c.attr("class","divider").attr("x1",-h/2-i).attr("x2",h/2+i).attr("y1",-g/2-i+8+w).attr("y2",-g/2-i+8+w),w+=8,T.forEach((t=>{var e;n(t).attr("transform","translate( "+-h/2+", "+(-1*g/2+w)+")");const a=null==t?void 0:t.getBBox();w+=(null!=(e=null==a?void 0:a.height)?e:0)+4})),o.attr("style",r.style).attr("class","outer title-state").attr("x",-h/2-i).attr("y",-g/2-i).attr("width",h+r.padding).attr("height",g+r.padding),y(r,o),r.intersect=function(t){return m.rect(r,t)},l}};let B={};const _=async(t,a,r)=>{let n,i;if(a.link){let s;"sandbox"===e().securityLevel?s="_top":a.linkTarget&&(s=a.linkTarget||"_blank"),n=t.insert("svg:a").attr("xlink:href",a.link).attr("target",s),i=await T[a.shape](n,a,r)}else i=await T[a.shape](t,a,r),n=i;return a.tooltip&&i.attr("title",a.tooltip),a.class&&i.attr("class","node default "+a.class),B[a.id]=n,a.haveCallback&&B[a.id].attr("class",B[a.id].attr("class")+" clickable"),n},C=(t,e)=>{B[e.id]=t},E=()=>{B={}},P=t=>{const e=B[t.id];i.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");const a=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+a-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),a},$={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function R(t,e){if(void 0===t||void 0===e)return{angle:0,deltaX:0,deltaY:0};t=Y(t),e=Y(e);const[a,r]=[t.x,t.y],[n,i]=[e.x,e.y],s=n-a,l=i-r;return{angle:Math.atan(l/s),deltaX:s,deltaY:l}}const Y=t=>Array.isArray(t)?{x:t[0],y:t[1]}:t,W=t=>({x:function(e,a,r){let n=0;if(0===a&&Object.hasOwn($,t.arrowTypeStart)){const{angle:e,deltaX:a}=R(r[0],r[1]);n=$[t.arrowTypeStart]*Math.cos(e)*(a>=0?1:-1)}else if(a===r.length-1&&Object.hasOwn($,t.arrowTypeEnd)){const{angle:e,deltaX:a}=R(r[r.length-1],r[r.length-2]);n=$[t.arrowTypeEnd]*Math.cos(e)*(a>=0?1:-1)}return Y(e).x+n},y:function(e,a,r){let n=0;if(0===a&&Object.hasOwn($,t.arrowTypeStart)){const{angle:e,deltaY:a}=R(r[0],r[1]);n=$[t.arrowTypeStart]*Math.abs(Math.sin(e))*(a>=0?1:-1)}else if(a===r.length-1&&Object.hasOwn($,t.arrowTypeEnd)){const{angle:e,deltaY:a}=R(r[r.length-1],r[r.length-2]);n=$[t.arrowTypeEnd]*Math.abs(Math.sin(e))*(a>=0?1:-1)}return Y(e).y+n}}),X=(t,e,a,r,n)=>{e.arrowTypeStart&&H(t,"start",e.arrowTypeStart,a,r,n),e.arrowTypeEnd&&H(t,"end",e.arrowTypeEnd,a,r,n)},j={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},H=(t,e,a,r,n,s)=>{const l=j[a];if(!l)return void i.warn(`Unknown arrow type: ${a}`);const o="start"===e?"Start":"End";t.attr(`marker-${e}`,`url(${r}#${n}_${s}-${l}${o})`)};let I={},O={};const D=()=>{I={},O={}},N=(a,r)=>{const s=t(e().flowchart.htmlLabels),l="markdown"===r.labelType?o(a,r.label,{style:r.labelStyle,useHtmlLabels:s,addSvgBackground:!0}):p(r.label,r.labelStyle);i.info("abc82",r,r.labelType);const d=a.insert("g").attr("class","edgeLabel"),c=d.insert("g").attr("class","label");c.node().appendChild(l);let h,g=l.getBBox();if(s){const t=l.children[0],e=n(l);g=t.getBoundingClientRect(),e.attr("width",g.width),e.attr("height",g.height)}if(c.attr("transform","translate("+-g.width/2+", "+-g.height/2+")"),I[r.id]=d,r.width=g.width,r.height=g.height,r.startLabelLeft){const t=p(r.startLabelLeft,r.labelStyle),e=a.insert("g").attr("class","edgeTerminals"),n=e.insert("g").attr("class","inner");h=n.node().appendChild(t);const i=t.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),O[r.id]||(O[r.id]={}),O[r.id].startLeft=e,U(h,r.startLabelLeft)}if(r.startLabelRight){const t=p(r.startLabelRight,r.labelStyle),e=a.insert("g").attr("class","edgeTerminals"),n=e.insert("g").attr("class","inner");h=e.node().appendChild(t),n.node().appendChild(t);const i=t.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),O[r.id]||(O[r.id]={}),O[r.id].startRight=e,U(h,r.startLabelRight)}if(r.endLabelLeft){const t=p(r.endLabelLeft,r.labelStyle),e=a.insert("g").attr("class","edgeTerminals"),n=e.insert("g").attr("class","inner");h=n.node().appendChild(t);const i=t.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),e.node().appendChild(t),O[r.id]||(O[r.id]={}),O[r.id].endLeft=e,U(h,r.endLabelLeft)}if(r.endLabelRight){const t=p(r.endLabelRight,r.labelStyle),e=a.insert("g").attr("class","edgeTerminals"),n=e.insert("g").attr("class","inner");h=n.node().appendChild(t);const i=t.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),e.node().appendChild(t),O[r.id]||(O[r.id]={}),O[r.id].endRight=e,U(h,r.endLabelRight)}return l};function U(t,a){e().flowchart.htmlLabels&&t&&(t.style.width=9*a.length+"px",t.style.height="12px")}const A=(t,e)=>{i.info("Moving label abc78 ",t.id,t.label,I[t.id]);let a=e.updatedPath?e.updatedPath:e.originalPath;if(t.label){const r=I[t.id];let n=t.x,l=t.y;if(a){const r=s.calcLabelPosition(a);i.info("Moving label "+t.label+" from (",n,",",l,") to (",r.x,",",r.y,") abc78"),e.updatedPath&&(n=r.x,l=r.y)}r.attr("transform","translate("+n+", "+l+")")}if(t.startLabelLeft){const e=O[t.id].startLeft;let r=t.x,n=t.y;if(a){const e=s.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",a);r=e.x,n=e.y}e.attr("transform","translate("+r+", "+n+")")}if(t.startLabelRight){const e=O[t.id].startRight;let r=t.x,n=t.y;if(a){const e=s.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",a);r=e.x,n=e.y}e.attr("transform","translate("+r+", "+n+")")}if(t.endLabelLeft){const e=O[t.id].endLeft;let r=t.x,n=t.y;if(a){const e=s.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",a);r=e.x,n=e.y}e.attr("transform","translate("+r+", "+n+")")}if(t.endLabelRight){const e=O[t.id].endRight;let r=t.x,n=t.y;if(a){const e=s.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",a);r=e.x,n=e.y}e.attr("transform","translate("+r+", "+n+")")}},Z=(t,e)=>{i.warn("abc88 cutPathAtIntersect",t,e);let a=[],r=t[0],n=!1;return t.forEach((t=>{if(i.info("abc88 checking point",t,e),((t,e)=>{const a=t.x,r=t.y,n=Math.abs(e.x-a),i=Math.abs(e.y-r),s=t.width/2,l=t.height/2;return n>=s||i>=l})(e,t)||n)i.warn("abc88 outside",t,r),r=t,n||a.push(t);else{const s=((t,e,a)=>{i.warn(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(e)}\n  insidePoint : ${JSON.stringify(a)}\n  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);const r=t.x,n=t.y,s=Math.abs(r-a.x),l=t.width/2;let o=a.x<e.x?l-s:l+s;const d=t.height/2,c=Math.abs(e.y-a.y),h=Math.abs(e.x-a.x);if(Math.abs(n-e.y)*l>Math.abs(r-e.x)*d){let t=a.y<e.y?e.y-d-n:n-d-e.y;o=h*t/c;const r={x:a.x<e.x?a.x+o:a.x-h+o,y:a.y<e.y?a.y+c-t:a.y-c+t};return 0===o&&(r.x=e.x,r.y=e.y),0===h&&(r.x=e.x),0===c&&(r.y=e.y),i.warn(`abc89 topp/bott calc, Q ${c}, q ${t}, R ${h}, r ${o}`,r),r}{o=a.x<e.x?e.x-l-r:r-l-e.x;let t=c*o/h,n=a.x<e.x?a.x+h-o:a.x-h+o,s=a.y<e.y?a.y+t:a.y-t;return i.warn(`sides calc abc89, Q ${c}, q ${t}, R ${h}, r ${o}`,{_x:n,_y:s}),0===o&&(n=e.x,s=e.y),0===h&&(n=e.x),0===c&&(s=e.y),{x:n,y:s}}})(e,r,t);i.warn("abc88 inside",t,r,s),i.warn("abc88 intersection",s);let l=!1;a.forEach((t=>{l=l||t.x===s.x&&t.y===s.y})),a.some((t=>t.x===s.x&&t.y===s.y))?i.warn("abc88 no intersect",s,a):a.push(s),n=!0}})),i.warn("abc88 returning points",a),a},q=function(t,a,r,n,s,o,c){let h=r.points,p=!1;const g=o.node(a.v);var y=o.node(a.w);i.info("abc88 InsertEdge: ",r),y.intersect&&g.intersect&&(h=h.slice(1,r.points.length-1),h.unshift(g.intersect(h[0])),i.info("Last point",h[h.length-1],y,y.intersect(h[h.length-1])),h.push(y.intersect(h[h.length-1]))),r.toCluster&&(i.info("to cluster abc88",n[r.toCluster]),h=Z(r.points,n[r.toCluster].node),p=!0),r.fromCluster&&(i.info("from cluster abc88",n[r.fromCluster]),h=Z(h.reverse(),n[r.fromCluster].node).reverse(),p=!0);const f=h.filter((t=>!Number.isNaN(t.y)));let w=l;!r.curve||"graph"!==s&&"flowchart"!==s||(w=r.curve);const{x:x,y:b}=W(r),u=d().x(x).y(b).curve(w);let m;switch(r.thickness){case"normal":m="edge-thickness-normal";break;case"thick":case"invisible":m="edge-thickness-thick";break;default:m=""}switch(r.pattern){case"solid":m+=" edge-pattern-solid";break;case"dotted":m+=" edge-pattern-dotted";break;case"dashed":m+=" edge-pattern-dashed"}const k=t.append("path").attr("d",u(f)).attr("id",r.id).attr("class"," "+m+(r.classes?" "+r.classes:"")).attr("style",r.style);let L="";(e().flowchart.arrowMarkerAbsolute||e().state.arrowMarkerAbsolute)&&(L=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,L=L.replace(/\(/g,"\\("),L=L.replace(/\)/g,"\\)")),i.info("arrowTypeStart",r.arrowTypeStart),i.info("arrowTypeEnd",r.arrowTypeEnd),X(k,r,L,c,s);let v={};return p&&(v.updatedPath=h),v.originalPath=r.points,v};export{_ as a,N as b,q as c,A as d,E as e,D as f,p as g,u as h,h as i,W as j,X as k,g as l,P as p,C as s,y as u};
