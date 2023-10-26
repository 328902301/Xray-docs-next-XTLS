import{c as n,p as t}from"./constant.f07fca73.js";import{aH as a,aI as r,aD as c,aJ as e,aK as o,aL as u,aM as i,aN as y,aO as l,aP as f,aQ as s,aR as p,aS as x}from"./mermaid.core.7d3bfc9d.js";function h(n){return n.innerRadius}function v(n){return n.outerRadius}function d(n){return n.startAngle}function g(n){return n.endAngle}function m(n){return n&&n.padAngle}function T(n,t,a,c,e,o,u,i){var y=a-n,l=c-t,f=u-e,s=i-o,p=s*y-f*l;if(!(p*p<r))return[n+(p=(f*(t-o)-s*(n-e))/p)*y,t+p*l]}function R(n,t,a,r,c,e,o){var u=n-a,i=t-r,y=(o?e:-e)/l(u*u+i*i),f=y*i,p=-y*u,x=n+f,h=t+p,v=a+f,d=r+p,g=(x+v)/2,m=(h+d)/2,T=v-x,R=d-h,A=T*T+R*R,j=c-e,P=x*d-v*h,b=(R<0?-1:1)*l(s(0,j*j*A-P*P)),D=(P*R-T*b)/A,H=(-P*T-R*b)/A,I=(P*R+T*b)/A,J=(-P*T+R*b)/A,K=D-g,L=H-m,M=I-g,N=J-m;return K*K+L*L>M*M+N*N&&(D=I,H=J),{cx:D,cy:H,x01:-f,y01:-p,x11:D*(c/j-1),y11:H*(c/j-1)}}function A(){var s=h,A=v,j=n(0),P=null,b=d,D=g,H=m,I=null;function J(){var n,h,v=+s.apply(this,arguments),d=+A.apply(this,arguments),g=b.apply(this,arguments)-a,m=D.apply(this,arguments)-a,J=i(m-g),K=m>g;if(I||(I=n=t()),d<v&&(h=d,d=v,v=h),d>r)if(J>c-r)I.moveTo(d*e(g),d*o(g)),I.arc(0,0,d,g,m,!K),v>r&&(I.moveTo(v*e(m),v*o(m)),I.arc(0,0,v,m,g,K));else{var L,M,N=g,O=m,Q=g,S=m,k=J,q=J,w=H.apply(this,arguments)/2,z=w>r&&(P?+P.apply(this,arguments):l(v*v+d*d)),B=u(i(d-v)/2,+j.apply(this,arguments)),C=B,E=B;if(z>r){var F=p(z/v*o(w)),G=p(z/d*o(w));(k-=2*F)>r?(Q+=F*=K?1:-1,S-=F):(k=0,Q=S=(g+m)/2),(q-=2*G)>r?(N+=G*=K?1:-1,O-=G):(q=0,N=O=(g+m)/2)}var U=d*e(N),V=d*o(N),W=v*e(S),X=v*o(S);if(B>r){var Y,Z=d*e(O),$=d*o(O),_=v*e(Q),nn=v*o(Q);if(J<y&&(Y=T(U,V,_,nn,Z,$,W,X))){var tn=U-Y[0],an=V-Y[1],rn=Z-Y[0],cn=$-Y[1],en=1/o(x((tn*rn+an*cn)/(l(tn*tn+an*an)*l(rn*rn+cn*cn)))/2),on=l(Y[0]*Y[0]+Y[1]*Y[1]);C=u(B,(v-on)/(en-1)),E=u(B,(d-on)/(en+1))}}q>r?E>r?(L=R(_,nn,U,V,d,E,K),M=R(Z,$,W,X,d,E,K),I.moveTo(L.cx+L.x01,L.cy+L.y01),E<B?I.arc(L.cx,L.cy,E,f(L.y01,L.x01),f(M.y01,M.x01),!K):(I.arc(L.cx,L.cy,E,f(L.y01,L.x01),f(L.y11,L.x11),!K),I.arc(0,0,d,f(L.cy+L.y11,L.cx+L.x11),f(M.cy+M.y11,M.cx+M.x11),!K),I.arc(M.cx,M.cy,E,f(M.y11,M.x11),f(M.y01,M.x01),!K))):(I.moveTo(U,V),I.arc(0,0,d,N,O,!K)):I.moveTo(U,V),v>r&&k>r?C>r?(L=R(W,X,Z,$,v,-C,K),M=R(U,V,_,nn,v,-C,K),I.lineTo(L.cx+L.x01,L.cy+L.y01),C<B?I.arc(L.cx,L.cy,C,f(L.y01,L.x01),f(M.y01,M.x01),!K):(I.arc(L.cx,L.cy,C,f(L.y01,L.x01),f(L.y11,L.x11),!K),I.arc(0,0,v,f(L.cy+L.y11,L.cx+L.x11),f(M.cy+M.y11,M.cx+M.x11),K),I.arc(M.cx,M.cy,C,f(M.y11,M.x11),f(M.y01,M.x01),!K))):I.arc(0,0,v,S,Q,K):I.lineTo(W,X)}else I.moveTo(0,0);if(I.closePath(),n)return I=null,n+""||null}return J.centroid=function(){var n=(+s.apply(this,arguments)+ +A.apply(this,arguments))/2,t=(+b.apply(this,arguments)+ +D.apply(this,arguments))/2-y/2;return[e(t)*n,o(t)*n]},J.innerRadius=function(t){return arguments.length?(s="function"==typeof t?t:n(+t),J):s},J.outerRadius=function(t){return arguments.length?(A="function"==typeof t?t:n(+t),J):A},J.cornerRadius=function(t){return arguments.length?(j="function"==typeof t?t:n(+t),J):j},J.padRadius=function(t){return arguments.length?(P=null==t?null:"function"==typeof t?t:n(+t),J):P},J.startAngle=function(t){return arguments.length?(b="function"==typeof t?t:n(+t),J):b},J.endAngle=function(t){return arguments.length?(D="function"==typeof t?t:n(+t),J):D},J.padAngle=function(t){return arguments.length?(H="function"==typeof t?t:n(+t),J):H},J.context=function(n){return arguments.length?(I=null==n?null:n,J):I},J}export{A as a};
