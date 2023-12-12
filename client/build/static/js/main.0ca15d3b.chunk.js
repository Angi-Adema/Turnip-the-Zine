(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{102:function(e,t,n){},107:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(19),r=n.n(c),i=(n(98),n(14)),o=n(9),l=n(88),d=n(144),j=n(143),u=n(141),h=n(87);function p(e,t){return 1===t?e:e+"s"}function b(e,t,n){return new Promise(((a,s)=>{const c=window.indexedDB.open("shop-shop",1);let r,i,o;c.onupgradeneeded=function(e){const t=c.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"}),t.createObjectStore("posts",{keyPath:"_id"})},c.onerror=function(e){console.log("There was an error")},c.onsuccess=function(s){switch(r=c.result,i=r.transaction(e,"readwrite"),o=i.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":o.put(n),a(n);break;case"get":const e=o.getAll();e.onsuccess=function(){a(e.result)};break;case"delete":o.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){r.close()}}}))}const m="UPDATE_PRODUCTS",O="ADD_TO_CART",g="ADD_MULTIPLE_TO_CART",x="REMOVE_FROM_CART",f="UPDATE_CART_QUANTITY",y="TOGGLE_CART",v=(e,t)=>{switch(t.type){case"ADD_POST":return console.log("ADD_POST case in reducers",t.posts),{...e,posts:[...e.posts,t.posts]};case"UPDATE_POST":return{...e,posts:[...t.posts]};case"DELETE_POST":let n=e.posts.filter((e=>e._id!==t._id));return{...e,postsList:n.length>0,posts:n};case m:return{...e,products:[...t.products]};case O:return{...e,cartOpen:!0,cart:[...e.cart,t.product]};case g:return{...e,cart:[...e.cart,...t.products]};case f:return{...e,cartOpen:!0,cart:e.cart.map((e=>(t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e)))};case x:let a=e.cart.filter((e=>e._id!==t._id));return{...e,cartOpen:a.length>0,cart:a};case"CLEAR_CART":return{...e,cartOpen:!1,cart:[]};case y:return{...e,cartOpen:!e.cartOpen};case"UPDATE_CATEGORIES":return{...e,categories:[...t.categories]};case"UPDATE_CURRENT_CATEGORY":return{...e,currentCategory:t.currentCategory};default:return e}};var w=n(2);const _=Object(a.createContext)(),{Provider:N}=_,k=e=>{let{value:t=[],...n}=e;const[s,c]=(r={products:[],posts:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(a.useReducer)(v,r));var r;return Object(w.jsx)(N,{value:[s,c],...n})},P=()=>Object(a.useContext)(_);var T,S,C,E,A,D,I=function(e){const[t,n]=P(),{image:a,name:s,_id:c,price:r,quantity:o}=e,{cart:l}=t;return Object(w.jsxs)("div",{className:"card px-1 py-1 border border-0 rounded-0",children:[Object(w.jsxs)(i.b,{to:"/products/".concat(c),children:[Object(w.jsx)("img",{alt:s,src:"/images/".concat(a)}),Object(w.jsx)("p",{children:s})]}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[o," ",p("item",o)," in stock"]}),Object(w.jsxs)("span",{children:["$",r]})]}),Object(w.jsx)("button",{onClick:()=>{const t=l.find((e=>e._id===c));t?(n({type:f,_id:c,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),b("cart","put",{...t,purchaseQuantity:parseInt(t.purchaseQuantity)+1})):(n({type:O,product:{...e,purchaseQuantity:1}}),b("cart","put",{...e,purchaseQuantity:1}))},children:"Add to cart"})]})},R=n(89),$=n(18),Q=n(142);const U=Object(Q.a)(T||(T=Object($.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),B=Object(Q.a)(S||(S=Object($.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),F=(Object(Q.a)(C||(C=Object($.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(Q.a)(E||(E=Object($.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"]))),Object(Q.a)(A||(A=Object($.a)(["\n  {\n    user {\n      firstName\n      lastName\n      username\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n      posts{\n        _id\n      }\n    }\n  }\n"])))),L=Object(Q.a)(D||(D=Object($.a)(["\nquery posts {\n  posts {\n    _id\n    postBody\n    username\n  }\n}\n"])));var q=n.p+"static/media/spinner.7e729fec.gif";var Y=function(){const[e,t]=P(),{currentCategory:n}=e,{loading:s,data:c}=Object(R.b)(B);return Object(a.useEffect)((()=>{c?(t({type:m,products:c.products}),c.products.forEach((e=>{b("products","put",e)}))):s||b("products","get").then((e=>{t({type:m,products:e})}))}),[c,s,t]),Object(w.jsxs)("div",{className:"my-2",children:[e.products.length?Object(w.jsx)("div",{className:"flex-row",children:(n?e.products.filter((e=>e.category._id===n)):e.products).map((e=>Object(w.jsx)(I,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)))}):Object(w.jsx)("h3",{children:"You haven't added any products yet!"}),s?Object(w.jsx)("img",{src:q,alt:"loading"}):null]})},M=n(74),W=n(136);var G=e=>{let{item:t}=e;const[,n]=P();return Object(w.jsxs)("div",{className:"flex-row",children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[t.name,", $",t.price]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{children:"Qty:"}),Object(w.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:e=>{const a=e.target.value;"0"===a?(n({type:x,_id:t._id}),b("cart","delete",{...t})):(n({type:f,_id:t._id,purchaseQuantity:parseInt(a)}),b("cart","put",{...t,purchaseQuantity:parseInt(a)}))}}),Object(w.jsx)("span",{role:"img","aria-label":"trash",onClick:()=>(e=>{n({type:x,_id:e._id}),b("cart","delete",{...e})})(t),children:"\ud83d\uddd1\ufe0f"})]})]})]})},H=n(58),z=n.n(H);var K=new class{getProfile(){return z()(this.getToken())}loggedIn(){const e=this.getToken();return!!e&&!this.isTokenExpired(e)}isTokenExpired(e){try{return z()(e).exp<Date.now()/1e3}catch(t){return!1}}getToken(){return localStorage.getItem("id_token")}login(e){localStorage.setItem("id_token",e),window.location.assign("/")}logout(){localStorage.removeItem("id_token"),window.location.assign("/login")}};n(102);const V=Object(M.a)("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STRIPE_KEY));var Z,J,X=()=>{const[e,t]=P(),[n,{data:s}]=Object(W.a)(U);function c(){t({type:y})}return Object(a.useEffect)((()=>{s&&V.then((e=>{e.redirectToCheckout({sessionId:s.checkout.session})})).catch((e=>{console.log(e)}))}),[s]),Object(a.useEffect)((()=>{e.cart.length||async function(){const e=await b("cart","get");t({type:g,products:[...e]})}()}),[e.cart.length,t]),e.cartOpen?Object(w.jsxs)("div",{className:"cart",children:[Object(w.jsx)("div",{className:"close",onClick:c,children:"[close]"}),Object(w.jsx)("h2",{children:"Shopping Cart"}),e.cart.length?Object(w.jsxs)("div",{children:[e.cart.map((e=>Object(w.jsx)(G,{item:e},e._id))),Object(w.jsxs)("div",{className:"flex-row space-between",children:[Object(w.jsxs)("strong",{children:["Total: $",function(){let t=0;return e.cart.forEach((e=>{t+=e.price*e.purchaseQuantity})),t.toFixed(2)}()]}),K.loggedIn()?Object(w.jsx)("button",{onClick:function(){const t=[];e.cart.forEach((e=>{for(let n=0;n<e.purchaseQuantity;n++)t.push(e._id)})),n({variables:{products:t}})},children:"Checkout"}):Object(w.jsx)("span",{children:"(log in to check out)"})]})]}):Object(w.jsxs)("h3",{children:[Object(w.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(w.jsx)("div",{className:"cart-closed",onClick:c,children:Object(w.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},ee=n(4),te=n.p+"static/media/title.cc14294a.mp4";const ne=ee.c.div(Z||(Z=Object($.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.5);\n  color: #f1f1f1;\n  max-height: 30%;\n  width: 50%;\n  padding: 2%;\n"]))),ae=ee.c.div(J||(J=Object($.a)(["\n  position: relative;\n  text-align: center;\n  background: linear-gradient(to right, rgba(251, 194, 235, 1), rgba(166, 193, 238, 1)) !important;\n"])));function se(){return Object(w.jsxs)(ae,{children:[Object(w.jsx)("video",{className:"video",autoPlay:!0,muted:!0,loop:!0,children:Object(w.jsx)("source",{src:te,type:"video/mp4"})}),Object(w.jsx)(ne,{children:Object(w.jsx)("h1",{style:{fontSize:"2vw"},children:"Checkout this month's featured artists and come out to support local music."})})]})}n(107);var ce=n(43),re=n(50),ie=n(32),oe=n(86);const le=[{imagePath:n.p+"static/media/pinkrangerprofile.a1ec883a.png",alt:"Pink Ranger profile picture",title:"PINK RANGER",titleTwo:"Pink Ranger is a dynamic three piece rock band hailing from Denver, CO. With an eclectic mix of influences ranging from pop to punk to alternative, their sound is both fresh and familiar. This talented trio has been captivating audiences with their high-energy performances and catchy tunes, leaving fans eager for more. And they won't have to wait much longer, as Pink Ranger is set to release their highly anticipated EP in the fall of 2023. Get ready for a wild ride filled with driving beats, soaring guitars, and irresistible hooks, as Pink Ranger proves that rock and roll is alive and well.",text:" POP ROCK",footer:"PLAYING SATURDAY 2/11",facebook:"https://www.facebook.com/pinkrangermusic",insta:"https://instagram.com/pinkranger.x?igshid=MWI4MTIyMDE=",youtube:"https://www.youtube.com/channel/UCa0ZML7l-CVcPRF_SFGt5rA"},{imagePath:n.p+"static/media/chitchatprofile.58eee37b.png",alt:"ChitChat profile picture",title:"CHITCHAT",titleTwo:"hi, we're chitchat; a synth-pop duo from mountainous Denver, Colorado. we first started making music together in January of 2019. we make electronic pop inspired by human interaction, introspection, and synthesizers from past and present.",text:"ELECTRONIC POP",footer:"PLAYING SATURDAY 2/18",facebook:"https://m.facebook.com/100069641636199/",insta:"https://instagram.com/its.chitchat?igshid=YmMyMTA2M2Y=",youtube:"https://youtube.com/@chitchat8969"},{imagePath:n.p+"static/media/amzyprofile.575a8995.png",alt:"Amzy profile picture",title:"AMZY",titleTwo:"AMZY blends rock and modern textures to create a genre all their own. In their music, empathy comes first. Each members inner conflicts \u2014 from struggles with identity, societal pressures, depression and simply being human \u2014 are interlaced between each track. AMZY carved out their place in Denver with detailed and energetic live performances that blend passion, humor and heart.",text:" NEW AGE ROCK",footer:"PLAYING SATURDAY 2/25",facebook:"https://www.facebook.com/AmzyMusic/",insta:"https://www.instagram.com/amzymusic/",youtube:"https://www.youtube.com/channel/UCR7NMEiwkeEaY9Vkb4T8wEQ"}];function de(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(oe.a,{className:"cardGroup",children:le.map(((e,t)=>Object(w.jsxs)(ie.a,{className:"mx-3",border:"dark",style:{width:"18rem"},children:[Object(w.jsx)(ie.a.Img,{className:"cardImg img-fluid",variant:"top",src:e.imagePath}),Object(w.jsxs)(ie.a.Body,{className:"cardBody",children:[Object(w.jsx)(ie.a.Title,{children:e.title}),Object(w.jsx)(ie.a.Text,{children:e.titleTwo}),Object(w.jsx)(ie.a.Title,{children:e.text})]}),Object(w.jsxs)(ie.a.Footer,{children:[Object(w.jsx)("h5",{className:"text-muted",children:e.footer}),Object(w.jsxs)(ce.a,{display:"flex justify-content-center",children:[Object(w.jsx)(ce.b,{href:e.facebook,target:"_blank",flat:!0,color:"dark",outline:!0,className:"p-3",children:Object(w.jsx)("h1",{children:Object(w.jsx)(re.a,{})})}),Object(w.jsx)(ce.b,{href:e.insta,target:"_blank",flat:!0,color:"dark",outline:!0,className:"mx-3 p-3",children:Object(w.jsx)("h1",{children:Object(w.jsx)(re.b,{})})}),Object(w.jsx)(ce.b,{href:e.youtube,target:"_blank",flat:!0,color:"dark",outline:!0,className:"p-3",children:Object(w.jsx)("h1",{children:Object(w.jsx)(re.c,{})})})]})]})]},t)))})})}n(121);var je,ue,he,pe,be,me,Oe=n(137);const ge=Object(Q.a)(je||(je=Object($.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),xe=Object(Q.a)(ue||(ue=Object($.a)(["\nmutation deletePost($id: ID!) {\n  deletePost(_id: $id) {\n    _id\n    email\n    firstName\n    lastName\n    username\n    orders {\n      _id\n      products {\n        _id\n        category {\n          _id\n          name\n        }\n        description\n        image\n        name\n        price\n        quantity\n      }\n      purchaseDate\n    }\n    posts {\n      _id\n    }\n  }\n}\n"]))),fe=Object(Q.a)(he||(he=Object($.a)(["\n  mutation updatePost($id: ID!, $postBody: String!) {\n    updatePost(_id: $id, postBody: $postBody) {\n      _id\n      postBody\n    }\n  }\n"]))),ye=Object(Q.a)(pe||(pe=Object($.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),ve=Object(Q.a)(be||(be=Object($.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n    $username: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n      username: $username\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),we=Object(Q.a)(me||(me=Object($.a)(["\nmutation addPost($postBody: String!, $username: String!) {\n  addPost(postBody: $postBody, username: $username) {\n    _id\n    email\n    firstName\n    lastName\n    username\n    orders {\n      _id\n      products {\n        category {\n          _id\n          name\n        }\n      }\n    }\n    posts {\n      _id\n      postBody\n    }\n  }\n}\n"])));var _e=()=>{const[e,t]=P(),[n,{data:s}]=Object(W.a)(L),c=(null===s||void 0===s?void 0:s.posts)||[],[r]=Object(Oe.a)(we),[i,{data:o}]=Object(Oe.a)(fe),[l,{data:d}]=Object(Oe.a)(xe),[j,u]=Object(a.useState)(""),[h,p]=Object(a.useState)(K.getProfile().data.username),[b,m]=Object(a.useState)(null),[O,g]=Object(a.useState)("");Object(a.useEffect)((()=>{n()}),[]),Object(a.useEffect)((()=>{s&&(console.log(s),t({type:"ADD_POST",posts:s.posts}))}),[s]);return Object(w.jsxs)("div",{className:"posts",children:[Object(w.jsxs)("div",{className:"postContainer",children:[Object(w.jsx)("h1",{children:"Turnip your Thoughts"}),c.map((e=>{const t=K.getProfile().data.username===e.username;return Object(w.jsxs)("div",{className:"postDiv",children:[Object(w.jsxs)("div",{className:"commentText",children:[Object(w.jsx)("h5",{children:e.username}),b&&b.postId===e._id?Object(w.jsxs)("form",{onSubmit:t=>((e,t)=>{e.preventDefault(),console.log("POST ID "+t),i({variables:{id:t,postBody:O},update:(e,n)=>{let{data:{updatePost:a}}=n;const s=e.readQuery({query:L}),c={...a,username:s.posts.find((e=>e._id===t)).username};e.writeQuery({query:L,data:{posts:s.posts.map((e=>e._id===t?c:e))}})}}),g(""),m(null)})(t,e._id),children:[Object(w.jsx)("input",{type:"text",value:O,onChange:e=>g(e.target.value)}),Object(w.jsx)("button",{type:"submit",children:"Save"}),Object(w.jsx)("button",{onClick:e=>{e.preventDefault(),m(null)},children:"Cancel"})]}):e.postBody]}),t&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("button",{onClick:t=>((e,t,n)=>{e.preventDefault(),m({postId:t,postBody:n}),g(n)})(t,e._id,e.postBody,e.username),children:"Update"}),Object(w.jsx)("button",{onClick:t=>((e,t)=>{e.preventDefault(),console.log("POST ID "+t),l({variables:{id:t},update:(e,n)=>{let{data:{deletePost:a}}=n;const s=e.readQuery({query:L});e.writeQuery({query:L,data:{posts:s.posts.filter((e=>e._id!==t))}})}})})(t,e._id),children:"Delete"})]})]},e._id)}))]}),K.loggedIn()?Object(w.jsxs)("form",{className:"newPost",onSubmit:async e=>{console.log(K.getProfile().data.username),e.preventDefault();try{const e={postBody:j,username:K.getProfile().data.username};console.log(e);const{data:t}=await r({variables:e,update:(e,t)=>{let{data:{addPost:n}}=t;const a=e.readQuery({query:L});e.writeQuery({query:L,data:{posts:[...a.posts,n]}})}});u(""),p("")}catch(t){console.error(t)}},children:[Object(w.jsx)("input",{type:"hidden",value:K.getProfile().username}),Object(w.jsx)("input",{type:"text",placeholder:"Post",value:j,onChange:e=>u(e.target.value)}),Object(w.jsx)("button",{className:"postSubmitBtn",type:"submit",children:"Post"})]}):Object(w.jsx)("p",{children:"You need to be logged in to post"})]})};var Ne=()=>{if(localStorage.getItem("id_token"))return Object(w.jsxs)("div",{children:[Object(w.jsx)(se,{}),Object(w.jsx)(de,{}),Object(w.jsx)(Y,{}),Object(w.jsx)(_e,{}),Object(w.jsx)(X,{})]});window.location.replace("/login")};var ke=function(){const[e,t]=P(),{id:n}=Object(o.q)(),[s,c]=Object(a.useState)({}),{loading:r,data:l}=Object(R.b)(B),{products:d,cart:j}=e;return Object(a.useEffect)((()=>{d.length?c(d.find((e=>e._id===n))):l?(t({type:m,products:l.products}),l.products.forEach((e=>{b("products","put",e)}))):r||b("products","get").then((e=>{t({type:m,products:e})}))}),[d,l,r,t,n]),Object(w.jsxs)(w.Fragment,{children:[s&&j?Object(w.jsxs)("div",{className:"container my-1",children:[Object(w.jsx)(i.b,{to:"/",children:"\u2190 Back to Products"}),Object(w.jsx)("h2",{children:s.name}),Object(w.jsx)("p",{children:s.description}),Object(w.jsxs)("p",{children:[Object(w.jsx)("strong",{children:"Price:"}),"$",s.price," ",Object(w.jsx)("button",{onClick:()=>{const e=j.find((e=>e._id===n));e?(t({type:f,_id:n,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),b("cart","put",{...e,purchaseQuantity:parseInt(e.purchaseQuantity)+1})):(t({type:O,product:{...s,purchaseQuantity:1}}),b("cart","put",{...s,purchaseQuantity:1}))},children:"Add to Cart"}),Object(w.jsx)("button",{disabled:!j.find((e=>e._id===s._id)),onClick:()=>{t({type:x,_id:s._id}),b("cart","delete",{...s})},children:"Remove from Cart"})]}),Object(w.jsx)("img",{src:"/images/".concat(s.image),alt:s.name})]}):null,r?Object(w.jsx)("img",{src:q,alt:"loading"}):null,Object(w.jsx)(X,{})]})};var Pe=()=>Object(w.jsxs)("div",{className:"noMatch",children:[Object(w.jsx)("h1",{children:"404 Page Not Found"}),Object(w.jsx)("h1",{children:Object(w.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]});var Te=function(e){const[t,n]=Object(a.useState)({email:"",password:""}),[s,{error:c}]=Object(Oe.a)(ge),r=e=>{const{name:a,value:s}=e.target;n({...t,[a]:s})};return Object(w.jsxs)("div",{className:"login-page",children:[Object(w.jsx)(i.b,{className:"form-link",to:"/signup",children:"\u2190 Go to Signup"}),Object(w.jsxs)("div",{className:"login-container",children:[Object(w.jsx)("h2",{children:"Login"}),Object(w.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{const e=(await s({variables:{email:t.email,password:t.password}})).data.login.token;K.login(e)}catch(n){console.log(n)}},children:[Object(w.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(w.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:r})]}),Object(w.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(w.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(w.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:r})]}),c?Object(w.jsx)("div",{children:Object(w.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(w.jsx)("div",{className:"flex-row flex-end",children:Object(w.jsx)("button",{type:"submit",children:"Submit"})})]})]})]})};var Se=function(e){const[t,n]=Object(a.useState)({email:"",password:""}),[s]=Object(Oe.a)(ve),c=e=>{const{name:a,value:s}=e.target;n({...t,[a]:s})};return Object(w.jsx)("div",{className:"signup-page",children:Object(w.jsxs)("div",{children:[Object(w.jsx)(i.b,{className:"form-link",to:"/login",children:"\u2190 Go to Login"}),Object(w.jsxs)("div",{className:"signup-container",children:[Object(w.jsx)("h2",{children:"Signup"}),Object(w.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const n=(await s({variables:{email:t.email,password:t.password,firstName:t.firstName,lastName:t.lastName,username:t.username}})).data.addUser.token;K.login(n)},children:[Object(w.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(w.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(w.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:c})]}),Object(w.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(w.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(w.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:c})]}),Object(w.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(w.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(w.jsx)("input",{placeholder:"Username",name:"username",type:"username",id:"username",onChange:c})]}),Object(w.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(w.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:c})]}),Object(w.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(w.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(w.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:c})]}),Object(w.jsx)("div",{className:"flex-row flex-end",children:Object(w.jsx)("button",{type:"submit",children:"Submit"})})]})]})]})})};var Ce=function(){return Object(w.jsxs)("header",{className:"header-image",children:[Object(w.jsx)("h1",{className:"flex-row",children:Object(w.jsx)("div",{className:"mx-1",children:Object(w.jsx)(i.b,{to:"/",className:"site-logo"})})}),Object(w.jsx)("nav",{children:K.loggedIn()?Object(w.jsxs)("ul",{className:"flex-row",children:[Object(w.jsx)("li",{className:"nav__links",children:Object(w.jsx)(i.b,{to:"/orderHistory",children:Object(w.jsx)("button",{children:"Order History"})})}),Object(w.jsx)("li",{className:"nav__links",children:Object(w.jsx)("a",{href:"/login",onClick:()=>K.logout(),children:Object(w.jsx)("button",{children:" Logout"})})})]}):Object(w.jsxs)("ul",{className:"flex-row",children:[Object(w.jsx)("li",{className:"nav__links",children:Object(w.jsx)(i.b,{to:"/signup",children:Object(w.jsx)("button",{children:"Sign-up"})})}),Object(w.jsx)("li",{className:"nav__links",children:Object(w.jsx)(i.b,{to:"/login",children:Object(w.jsx)("button",{children:"Login"})})})]})})]})};var Ee=function(){const[e]=Object(Oe.a)(ye);return Object(a.useEffect)((()=>{!async function(){const t=(await b("cart","get")).map((e=>e._id));if(t.length){const{data:n}=await e({variables:{products:t}});n.addOrder.products.forEach((e=>{b("cart","delete",e)}))}setTimeout((()=>{window.location.assign("/")}),3e3)}()}),[e]),Object(w.jsxs)("div",{className:"success",children:[Object(w.jsx)("h1",{children:"Success!"}),Object(w.jsx)("h2",{children:"Thank you for your purchase!"}),Object(w.jsx)("h2",{children:"You will now be redirected to the home page."})]})};var Ae=function(){const{data:e}=Object(R.b)(F);let t;return e&&(t=e.user),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"container my-1",children:[Object(w.jsx)(i.b,{to:"/",children:"\u2190 Back to Products"}),t?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"history",children:Object(w.jsxs)("h2",{children:["Order History for ",t.firstName," ",t.lastName," \ud83c\udfb6"]})}),t.orders.map((e=>Object(w.jsxs)("div",{className:"my-2",children:[Object(w.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(w.jsx)("div",{className:"flex-row",children:e.products.map(((e,t)=>{let{_id:n,image:a,name:s,price:c}=e;return Object(w.jsxs)("div",{className:"card px-1 py-1",children:[Object(w.jsxs)(i.b,{to:"/products/".concat(n),children:[Object(w.jsx)("img",{alt:s,src:"/images/".concat(a)}),Object(w.jsx)("p",{children:s})]}),Object(w.jsx)("div",{children:Object(w.jsxs)("span",{children:["$",c]})})]},t)}))})]},e._id)))]}):null]})})};const De=Object(l.a)({uri:"/graphql"}),Ie=Object(h.a)(((e,t)=>{let{headers:n}=t;const a=localStorage.getItem("id_token");return{headers:{...n,authorization:a?"Bearer ".concat(a):""}}})),Re=new d.a({typePolicies:{Query:{fields:{posts:{merge(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],{merger:n}=arguments.length>2?arguments[2]:void 0;return[...e.filter((e=>e._id!==t._id)),...t]}}}}}}),$e=new j.a({link:Ie.concat(De),cache:Re});var Qe=function(){return Object(w.jsx)(u.a,{client:$e,children:Object(w.jsx)(i.a,{children:Object(w.jsx)("div",{children:Object(w.jsxs)(k,{children:[Object(w.jsx)(Ce,{}),Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{path:"/",element:Object(w.jsx)(Ne,{})}),Object(w.jsx)(o.a,{path:"/login",element:Object(w.jsx)(Te,{})}),Object(w.jsx)(o.a,{path:"/signup",element:Object(w.jsx)(Se,{})}),Object(w.jsx)(o.a,{path:"/success",element:Object(w.jsx)(Ee,{})}),Object(w.jsx)(o.a,{path:"/orderHistory",element:Object(w.jsx)(Ae,{})}),Object(w.jsx)(o.a,{path:"/products/:id",element:Object(w.jsx)(ke,{})}),Object(w.jsx)(o.a,{path:"*",element:Object(w.jsx)(Pe,{})}),Object(w.jsx)(o.a,{path:"/",element:Object(w.jsx)(Ne,{})}),Object(w.jsx)(o.a,{path:"/login",element:Object(w.jsx)(Te,{})}),Object(w.jsx)(o.a,{path:"/signup",element:Object(w.jsx)(Se,{})}),Object(w.jsx)(o.a,{path:"/success",element:Object(w.jsx)(Ee,{})}),Object(w.jsx)(o.a,{path:"/orderHistory",element:Object(w.jsx)(Ae,{})}),Object(w.jsx)(o.a,{path:"/products/:id",element:Object(w.jsx)(ke,{})}),Object(w.jsx)(o.a,{path:"*",element:Object(w.jsx)(Pe,{})})]})]})})})})};const Ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Be(e,t){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}n(68);r.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(Qe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const t="".concat("","/service-worker.js");Ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((n=>{const a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):Be(e,t)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Be(t,e)}))}}()},98:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.0ca15d3b.chunk.js.map