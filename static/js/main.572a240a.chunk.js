(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),s=c(21),n=c.n(s),r=(c(27),c(10)),d=c(13),o=c(5),j=c(3),m=c(48),p=c(0),l=function(e){var t=e.total;return Object(p.jsxs)("div",{className:"Navbar",children:[Object(p.jsx)("div",{className:"title",children:"Desiderata"}),Object(p.jsxs)("div",{className:"Links",children:[Object(p.jsx)(o.b,{to:"/shopping-cart/",children:"Home"}),Object(p.jsx)(o.b,{to:"/shopping-cart/shop",children:"Shop"}),Object(p.jsxs)(o.b,{to:"/shopping-cart/cart",className:"navbar-cart",children:[Object(p.jsx)(m.a,{fontSize:"large"}),Object(p.jsx)("div",{className:"cart-quantity",children:t})]})]})]})},b=c.p+"static/media/background1.9f44ee71.jpeg",g=c.p+"static/media/background2.f14c5738.jpeg",u=c.p+"static/media/background3.4a2e7659.jpeg",h=c.p+"static/media/background4.e1a23f71.jpeg",O=function(){var e=[{title:"Ceramics and Fruits",img:b},{title:"Making Ceramics",img:g},{title:"Minimalist Plate",img:u},{title:"Making Ceramics B&w",img:h}],t=Object(a.useState)(0),c=Object(d.a)(t,2),i=c[0],s=c[1];return Object(p.jsxs)("div",{className:"Carousel",children:[Object(p.jsx)("button",{className:"carousel-left",onClick:function(){var t=i-1;s(t<0?e.length-1:t)},children:"<"}),Object(p.jsx)("img",{src:e[i].img,alt:e[i].title}),Object(p.jsx)("button",{className:"carousel-right",onClick:function(){s((i+1)%e.length)},children:">"})]})},x=function(){return Object(p.jsx)("div",{className:"Home",children:Object(p.jsx)(O,{})})},f=function(e){var t=e.name,c=e.price,a=e.img1,i=e.img2;return Object(p.jsxs)("div",{className:"ProductCard",children:[Object(p.jsx)("img",{src:a,alt:t,onMouseOver:function(e){return e.currentTarget.src=i},onMouseOut:function(e){return e.currentTarget.src=a}}),Object(p.jsx)("div",{className:"product-card-name",children:t}),Object(p.jsx)("div",{children:c+" USD"})]})},v=function(e){var t=e.products;return Object(p.jsx)("div",{className:"Shop",children:t.map((function(e,t){var c=e.name,a=e.price,i=e.img1,s=e.img2;return Object(p.jsx)(o.b,{to:"/shopping-cart/shop/".concat(t),children:Object(p.jsx)(f,{name:c,price:a,img1:i,img2:s},t)},t)}))})},N=function(e){var t=e.products,c=e.item,a=e.changeState;return Object(p.jsxs)("div",{className:"CartItem",children:[Object(p.jsx)("img",{src:t[c.index].img1,alt:""}),Object(p.jsx)("div",{className:"item-name",children:t[c.index].name}),Object(p.jsx)("div",{className:"item-price",children:t[c.index].price+" USD"}),Object(p.jsxs)("div",{className:"quantity-adjust",children:[Object(p.jsx)("button",{onClick:function(){return a(c.index,!0)},children:"-"}),Object(p.jsx)("span",{children:c.quantity}),Object(p.jsx)("button",{onClick:function(){return a(c.index)},children:"+"})]}),Object(p.jsx)("button",{onClick:function(){return a(c.index,!1,!0)},children:"Delete"})]})},k=function(e){var t=e.products,c=e.items,a=e.total,i=e.changeState;return Object(p.jsxs)("div",{className:"Cart",children:[Object(p.jsx)("div",{className:"cart-header",children:"MY SHOPPING CART"}),0===c.length&&Object(p.jsx)("div",{className:"empty-cart",children:"Your cart is empty."}),Object(p.jsx)("div",{className:"cartItem-container",children:c.map((function(e,c){return Object(p.jsx)(N,{products:t,item:e,changeState:i},c)}))}),Object(p.jsxs)("div",{className:"checkout-footer",children:[Object(p.jsx)(o.b,{to:"/shopping-cart/shop",children:"< Go Back"}),Object(p.jsx)("div",{children:"TOTAL "+a+" USD"}),Object(p.jsx)(o.b,{to:"/shopping-cart/",children:"Checkout >"})]})]})},S=function(){return Object(p.jsx)("div",{className:"NotFound"})},C=[c.p+"static/media/a1.b7173d55.jpg",c.p+"static/media/b1.94ca13aa.jpg",c.p+"static/media/c1.c419b1cf.jpg",c.p+"static/media/d1.91b1c1ce.jpg",c.p+"static/media/e1.54c243ff.jpg",c.p+"static/media/f1.0b240d34.jpg",c.p+"static/media/g1.86e389f9.jpg",c.p+"static/media/h1.a5e82bd8.jpg",c.p+"static/media/i1.95717970.jpg",c.p+"static/media/j1.a856152b.jpg",c.p+"static/media/k1.1c826186.jpg",c.p+"static/media/l1.0bb04866.jpg",c.p+"static/media/m1.46328370.jpg",c.p+"static/media/n1.aba76cad.jpg",c.p+"static/media/o1.872cecf3.jpg"],M=[c.p+"static/media/a2.b071d947.jpg",c.p+"static/media/b2.3f8b4627.jpg",c.p+"static/media/c2.53af3a5b.jpg",c.p+"static/media/d2.b45a172a.jpg",c.p+"static/media/e2.a615bdc0.jpg",c.p+"static/media/f2.60a54fe7.jpg",c.p+"static/media/g2.887cefb5.jpg",c.p+"static/media/h2.ca21e41f.jpg",c.p+"static/media/i2.2d91c8ea.jpg",c.p+"static/media/j2.2b55f4a2.jpg",c.p+"static/media/k2.733fa13a.jpg",c.p+"static/media/l2.ac90a7ce.jpg",c.p+"static/media/m2.66f61bb2.jpg",c.p+"static/media/n2.e6ccbfb7.jpg",c.p+"static/media/o2.4b9925dc.jpg"],y="1 large handmade ceramic plate for serving food or decorative purpose. Perfect for serving main course and party meals.",I="1 large handmade ceramic bowl for serving food or decorative purpose. The size is perfect for Asian noodles.",T="1 extra-large bowl that can be used for decorative purposes. Looks good in loft or vintage spaces.",P=[{name:"The Sight of Maple",price:25,img1:C[0],img2:M[0],desc:y},{name:"Qualia",price:35,img1:C[1],img2:M[1],desc:I},{name:"Drop of Emerald",price:25,img1:C[2],img2:M[2],desc:T},{name:"Helen's Prayer",price:25,img1:C[3],img2:M[3],desc:T},{name:"Ouroboro",price:35,img1:C[4],img2:M[4],desc:y},{name:"Moon I",price:45,img1:C[5],img2:M[5],desc:I},{name:"Moon II",price:45,img1:C[6],img2:M[6],desc:I},{name:"Three Lakes",price:32,img1:C[7],img2:M[7],desc:I},{name:"Majorca Lines",price:25,img1:C[8],img2:M[8],desc:I},{name:"Luminous Gobi",price:20,img1:C[9],img2:M[9],desc:"1 extra-small handmade ceramic plate that can be used to serve food. Perfect for serving tapas, antipasti, dessert, seasonal fruit."},{name:"Taint",price:25,img1:C[10],img2:M[10],desc:y},{name:"Moon III",price:43,img1:C[11],img2:M[11],desc:y},{name:"Rust in the Air",price:38,img1:C[12],img2:M[12],desc:y},{name:"Glacier",price:25,img1:C[13],img2:M[13],desc:I},{name:"Snufkin's Present",price:30,img1:C[14],img2:M[14],desc:y}],D=function(e){var t=Object(j.f)().id,c=e.products,a=e.changeState;return Object(p.jsxs)("div",{className:"ProductDetails",children:[Object(p.jsx)("img",{src:c[t].img1,alt:c[t].name,onMouseOver:function(e){return e.currentTarget.src=c[t].img2},onMouseOut:function(e){return e.currentTarget.src=c[t].img1}}),Object(p.jsxs)("div",{className:"details",children:[Object(p.jsx)("div",{className:"product-name",children:c[t].name}),Object(p.jsx)("div",{className:"product-price",children:c[t].price+" USD"}),Object(p.jsx)("div",{className:"product-desc",children:c[t].desc}),Object(p.jsx)("button",{className:"add-to-cart",onClick:function(){return a(t)},children:"Add to Cart"}),Object(p.jsx)(o.b,{to:"/shopping-cart/shop",className:"go-back",children:"< Go back"})]})]})};var q=function(){var e=Object(a.useState)(P),t=Object(d.a)(e,1)[0],c=Object(a.useState)([]),i=Object(d.a)(c,2),s=i[0],n=i[1],m=Object(a.useState)(0),b=Object(d.a)(m,2),g=b[0],u=b[1],h=Object(a.useState)(0),O=Object(d.a)(h,2),f=O[0],N=O[1];Object(a.useEffect)((function(){console.log(s),console.log(f)}),[s,f]);var C=function(e){var c=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.log(e);for(var i=parseInt(e),d=t[i].price,o=!0,j=0;j<s.length;j++)if(s[j].index===i){o=!1;var m=s[j].quantity;!0===c?(n(m>1?[].concat(Object(r.a)(s.slice(0,j)),[{index:s[j].index,quantity:m-1}],Object(r.a)(s.slice(j+1))):[].concat(Object(r.a)(s.slice(0,j)),Object(r.a)(s.slice(j+1)))),u(g-1),N(f-d)):!0===a?(n([].concat(Object(r.a)(s.slice(0,j)),Object(r.a)(s.slice(j+1)))),u(g-m),N(f-d*m)):(n([].concat(Object(r.a)(s.slice(0,j)),[{index:s[j].index,quantity:m+1}],Object(r.a)(s.slice(j+1)))),u(g+1),N(f+d))}!0===o&&(n([].concat(Object(r.a)(s),[{index:i,quantity:1}])),u(g+1),N(f+d))};return Object(p.jsx)(o.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(l,{total:g}),Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/shopping-cart/",exact:!0,children:Object(p.jsx)(x,{})}),Object(p.jsx)(j.a,{path:"/shopping-cart/shop",exact:!0,children:Object(p.jsx)(v,{products:t})}),Object(p.jsx)(j.a,{path:"/shopping-cart/shop/:id",children:Object(p.jsx)(D,{products:t,changeState:C})}),Object(p.jsx)(j.a,{path:"/shopping-cart/cart",children:Object(p.jsx)(k,{products:t,items:s,total:f,changeState:C})}),Object(p.jsx)(j.a,{path:"*",children:Object(p.jsx)(S,{})})]})})]})})};n.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.572a240a.chunk.js.map