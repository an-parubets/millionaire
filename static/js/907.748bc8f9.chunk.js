(self.webpackChunkmillionaire=self.webpackChunkmillionaire||[]).push([[907],{5838:function(t,e,n){"use strict";n.d(e,{u:function(){return p},Z:function(){return f}});var r=n(1413),i=n(4925),a=n(2791),l=n(1694),C=n.n(l),c=n(9439),o=n(184);var u=function(t){var e=t.name,r=t.width,i=void 0===r?24:r,l=t.height,C=void 0===l?24:l,u=(0,a.useState)(null),s=(0,c.Z)(u,2),d=s[0],f=s[1];return(0,a.useEffect)((function(){n(2873)("./".concat(e,".svg")).then((function(t){var e=t.default;f(e)})).catch((function(t){console.error('Error loading SVG icon "'.concat(e,'":'),t)}))}),[e]),d?(0,o.jsx)("img",{src:d,alt:e,style:{width:"".concat(i,"px"),height:"".concat(C,"px")}}):null},s="ButtonIcon_component__WDd+m",d=["icon","width","height","className"];var f=function(t){var e=t.icon,n=t.width,a=void 0===n?24:n,l=t.height,c=void 0===l?24:l,f=t.className,p=(0,i.Z)(t,d);return(0,o.jsx)("button",(0,r.Z)((0,r.Z)({type:"button",className:C()(s,f)},p),{},{children:(0,o.jsx)(u,{name:e,width:a,height:c})}))},p=function(t){return t.menu="menu",t.close="close",t}({})},8504:function(t,e,n){"use strict";n.d(e,{v:function(){return u},Z:function(){return b}});var r,i=n(1413),a=n(4925),l=n(4942),C=(n(2791),n(1694)),c=n.n(C),o=n(171),u=function(t){return t.inactive="inactive",t.selected="selected",t.correct="correct",t.wrong="wrong",t}({}),s="ButtonOption_component__ZYMab",d="ButtonOption_inactive__cASsy",f="ButtonOption_selected__UsPjn",p="ButtonOption_correct__Gs0Jj",h="ButtonOption_wrong__NGVCz",m="ButtonOption_button__tN9og",_="ButtonOption_index__icP+k",v=n(184),y=["status","index","className","children"],L=(r={},(0,l.Z)(r,u.inactive,d),(0,l.Z)(r,u.selected,f),(0,l.Z)(r,u.correct,p),(0,l.Z)(r,u.wrong,h),r);var b=function(t){var e=t.status,n=t.index,r=t.className,l=t.children,C=(0,a.Z)(t,y);return(0,v.jsx)("div",{className:c()(s,L[e],r),children:(0,v.jsxs)("button",(0,i.Z)((0,i.Z)({type:"button",className:m},C),{},{children:[n&&(0,v.jsx)(o.Z,{variant:o.$.bodyBold,className:_,children:n}),(0,v.jsx)(o.Z,{variant:o.$.bodyRegular,children:l})]}))})}},7980:function(t,e,n){"use strict";n.d(e,{Ei:function(){return f.Z},Jp:function(){return d.Z},DF:function(){return s}});var r=n(1413),i=n(4925),a=(n(2791),n(1694)),l=n.n(a),C=n(171),c="ButtonPrimary_component__UZjHW",o=n(184),u=["className","children"];var s=function(t){var e=t.className,n=t.children,a=(0,i.Z)(t,u);return(0,o.jsx)("button",(0,r.Z)((0,r.Z)({type:"button",className:l()(c,e)},a),{},{children:(0,o.jsx)(C.Z,{variant:C.$.bodyBold,children:n})}))},d=n(8504),f=n(5838)},171:function(t,e,n){"use strict";n.d(e,{$:function(){return o},Z:function(){return v}});var r,i=n(1413),a=n(4925),l=n(4942),C=(n(2791),n(1694)),c=n.n(C),o=function(t){return t.title="title",t.subtitle="subtitle",t.bodyRegular="body-regular",t.bodyBold="body-bold",t}({}),u="Typography_component__duJEm",s="Typography_title__6SyTN",d="Typography_subtitle__A2-dm",f="Typography_bodyRegular__hTrrL",p="Typography_bodyBold__ChA99",h=n(184),m=["variant","className"],_=(r={},(0,l.Z)(r,o.title,s),(0,l.Z)(r,o.subtitle,d),(0,l.Z)(r,o.bodyRegular,f),(0,l.Z)(r,o.bodyBold,p),r);var v=function(t){var e=t.variant,n=void 0===e?o.bodyRegular:e,r=t.className,l=(0,a.Z)(t,m);return(0,h.jsx)("span",(0,i.Z)({className:c()(u,_[n],r)},l))}},374:function(t,e,n){"use strict";n.d(e,{I:function(){return O},b:function(){return I}});var r=n(2791),i=n(1694),a=n.n(i),l="BaseLayout_component__i57xG",C=n(184);var c,o,u,s,d,f,p,h,m,_,v,y,L,b,Z,E,g,j,x,O=function(t){var e=t.children,n=t.className;return(0,C.jsx)("main",{className:a()(l,n),children:e})},N=["title","titleId"];function w(){return w=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},w.apply(this,arguments)}function S(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function M(t,e){var n=t.title,i=t.titleId,a=S(t,N);return r.createElement("svg",w({width:624,height:367,viewBox:"0 0 624 367",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,c||(c=r.createElement("path",{d:"M433.483 211.523C440.09 187.842 445.375 163.792 449.339 139.523C453.377 130.329 457.928 121.357 462.92 112.679C469.086 102.015 476.354 92.1596 483.107 81.8633C489.127 72.6701 494.559 62.5209 495.22 51.4156C495.734 42.7373 493.825 33.3971 488.026 26.6309C481.639 19.1293 471.802 16.1875 462.186 17.0701C451.762 17.9526 442.292 23.4685 434.217 29.8669C425.481 36.8537 417.333 44.7966 409.625 52.813C394.723 68.331 381.509 85.4669 370.131 103.706C361.762 100.47 353.687 96.5722 345.612 92.7479C333.867 87.1585 321.975 82.231 309.348 78.9214C286.812 73.0378 261.412 70.7579 239.316 79.4362C219.349 87.3056 202.538 105.251 202.245 127.608C202.098 136.434 204.667 144.156 208.925 150.922C199.822 155.923 192.114 163.057 187.343 172.471C182.498 182.032 181.543 193.725 185.507 203.727C186.976 207.405 189.031 210.714 191.527 213.656C184.113 220.422 177.432 229.027 174.349 238.661C171.413 247.781 173.101 256.974 177.946 265.137C179.341 267.417 180.956 269.55 182.718 271.609C174.569 278.743 171.927 290.437 174.349 300.88C177.139 313.162 186.095 322.723 195.711 330.298C203.126 336.108 211.054 341.33 219.276 345.963C223.386 348.537 227.718 350.964 232.049 353.171C236.673 355.451 241.518 357.584 246.437 359.054C249.814 360.084 253.264 360.967 256.714 361.408C259.063 361.702 261.412 361.849 263.761 361.776C264.936 361.776 266.11 361.702 267.212 361.555C270.442 361.261 273.672 360.378 276.828 359.349C279.03 358.613 281.159 357.657 283.215 356.48C284.83 355.598 286.445 354.642 287.913 353.612C297.162 355.818 306.559 357.069 316.102 356.922C336.436 356.554 355.523 348.317 370.939 335.152C387.896 320.737 399.862 301.542 408.964 281.391C419.168 259.033 426.803 235.278 433.483 211.523Z",fill:"#EF9E81"})),o||(o=r.createElement("path",{d:"M183.877 273.978C197.93 283.037 212.498 291.36 227.434 298.8C234.791 302.482 242.296 306.018 249.948 309.112C257.526 312.205 265.325 314.857 273.419 316.477C280.924 317.95 289.09 318.687 296.669 317.214C301.378 316.33 306.454 315.151 310.501 312.5C312.929 310.953 314.989 308.964 316.902 306.828C318.594 304.913 320.36 302.851 321.611 300.641C323.598 297.032 324.701 292.981 325.143 288.93C326.393 278.691 323.083 268.085 314.842 261.603C313.665 260.646 312.34 259.762 311.016 259.025C309.986 258.436 309.103 259.983 310.06 260.646C314.842 263.445 318.668 267.422 321.022 272.504C323.009 276.776 323.745 281.638 323.524 286.352C323.303 290.403 322.494 294.454 320.802 298.137C320.066 299.757 319.109 301.23 318.006 302.63C316.019 305.208 313.812 307.638 311.31 309.701C307.779 312.573 303.438 313.826 299.097 314.857C291.886 316.624 284.308 316.403 277.024 315.299C261.279 312.868 246.49 306.092 232.29 299.168C217.722 292.097 203.522 284.216 189.836 275.598C188.144 274.567 186.526 273.462 184.833 272.431C183.803 271.768 182.847 273.388 183.877 273.978Z",fill:"#C4674E"})),u||(u=r.createElement("path",{d:"M197.562 216.378C213.969 224.112 230.524 231.625 247.079 238.843C262.971 245.841 279.011 252.838 295.786 257.478C303.879 259.762 312.561 261.898 321.022 260.425C327.276 259.32 333.015 256.153 337.43 251.66C341.918 247.093 345.155 241.2 346.48 234.866C347.289 231.183 346.995 227.353 346.333 223.67C344.346 212.99 337.871 203.341 328.454 197.964C327.056 197.154 325.584 196.491 324.039 195.828C322.935 195.386 322.494 197.154 323.524 197.596C333.751 201.868 341.109 210.707 343.905 221.313C344.861 224.996 345.376 228.9 344.935 232.656C344.346 238.107 341.624 243.631 338.239 247.903C334.34 252.691 329.116 256.3 323.156 257.994C315.284 260.13 307.043 258.51 299.318 256.447C283.057 252.249 267.533 245.693 252.155 238.991C236.116 231.993 220.223 224.849 204.331 217.483C202.344 216.525 200.358 215.642 198.371 214.684C197.415 214.316 196.532 215.936 197.562 216.378Z",fill:"#C4674E"})),s||(s=r.createElement("path",{d:"M214.852 153.991C233.467 161.725 251.493 170.785 269.814 178.961C278.863 183.012 288.06 186.842 297.405 190.23C306.896 193.692 316.755 197.08 326.835 198.185C335.59 199.216 344.935 198.038 352.366 192.882C355.75 190.525 358.62 187.431 360.459 183.749C362.372 179.992 363.255 175.72 363.181 171.522C363.181 162.83 359.282 154.802 353.543 148.394C347.289 141.396 339.049 136.535 330.514 132.778C323.23 129.538 315.725 126.886 308.294 124.013C301.01 121.214 293.873 118.268 286.81 115.027C284.529 113.996 282.248 112.965 279.967 111.86C278.937 111.344 277.98 112.965 279.011 113.48C286.662 117.016 294.388 120.404 302.187 123.571C308.735 126.149 315.284 128.654 321.832 131.158C330.587 134.546 339.343 138.45 346.7 144.416C353.175 149.719 358.693 156.79 360.606 165.04C362.519 173.142 360.827 182.275 354.867 188.315C348.908 194.355 340.152 196.712 331.838 196.565C321.832 196.417 311.973 193.177 302.628 190.009C293.284 186.842 284.161 183.159 275.185 179.255C257.232 171.448 239.721 162.609 221.695 154.875C219.561 153.918 217.354 153.034 215.22 152.15C214.264 151.708 213.749 153.549 214.852 153.991Z",fill:"#C4674E"})),d||(d=r.createElement("path",{d:"M289.458 349.991C292.181 344.393 293.284 337.985 292.549 331.797C292.181 328.778 291.445 325.758 290.268 322.885C289.238 320.381 287.913 317.066 285.117 316.182C284.014 315.814 283.499 317.582 284.602 317.95C285.853 318.318 286.589 319.571 287.178 320.675C287.84 321.928 288.428 323.18 288.943 324.505C289.9 327.157 290.562 329.882 290.783 332.681C291.298 338.279 290.268 343.951 287.84 349.033C287.325 350.138 288.943 351.095 289.458 349.991Z",fill:"#C4674E"})),f||(f=r.createElement("path",{d:"M319.477 184.043C319.845 172.7 324.775 161.725 332.942 153.918C333.825 153.107 332.5 151.782 331.617 152.592C323.082 160.768 318.006 172.184 317.564 183.969C317.638 185.222 319.477 185.222 319.477 184.043Z",fill:"#C4674E"})),p||(p=r.createElement("path",{d:"M330.072 156.422C334.193 157.601 338.313 159 342.065 161.136C345.082 162.83 347.878 165.335 348.466 168.944C349.055 172.479 347.436 176.088 344.861 178.445C342.139 181.023 338.313 182.202 334.634 182.496C329.557 182.865 324.554 181.465 319.698 180.066C318.594 179.771 318.079 181.539 319.183 181.834C327.718 184.338 337.945 186.474 345.523 180.287C348.466 177.856 350.453 174.1 350.379 170.196C350.379 166.145 348.025 162.904 344.861 160.694C342.948 159.368 340.814 158.337 338.681 157.453C336.032 156.348 333.31 155.391 330.514 154.581C329.41 154.286 328.969 156.054 330.072 156.422Z",fill:"#C4674E"})),h||(h=r.createElement("path",{d:"M297.037 242.526C297.405 230.373 302.702 218.662 311.458 210.265C312.341 209.455 311.016 208.129 310.133 208.939C301.01 217.63 295.565 229.857 295.124 242.526C295.124 243.705 296.963 243.705 297.037 242.526Z",fill:"#C4674E"})),m||(m=r.createElement("path",{d:"M308.441 212.916C312.782 214.168 317.196 215.715 321.17 217.925C324.48 219.766 327.571 222.491 328.159 226.469C328.674 230.225 326.982 234.056 324.26 236.56C321.243 239.359 317.123 240.611 313.15 240.906C307.705 241.274 302.408 239.801 297.257 238.328C296.154 238.033 295.639 239.801 296.742 240.095C305.719 242.747 316.608 245.03 324.628 238.622C327.865 236.044 329.999 231.993 329.999 227.795C329.999 223.449 327.424 219.987 324.039 217.557C321.979 216.083 319.698 215.052 317.417 214.095C314.621 212.916 311.752 211.885 308.882 211.075C307.779 210.78 307.264 212.548 308.441 212.916Z",fill:"#C4674E"})),_||(_=r.createElement("path",{d:"M277.171 301.82C277.539 289.666 282.837 277.955 291.592 269.558C292.475 268.748 291.151 267.422 290.268 268.232C281.144 276.924 275.7 289.151 275.258 301.82C275.258 302.998 277.098 302.998 277.171 301.82Z",fill:"#C4674E"})),v||(v=r.createElement("path",{d:"M288.576 272.136C292.917 273.388 297.331 274.935 301.304 277.145C304.615 278.986 307.705 281.711 308.294 285.689C308.809 289.445 307.117 293.275 304.394 295.78C301.378 298.579 297.258 299.831 293.284 300.125C287.84 300.494 282.542 299.021 277.392 297.547C276.288 297.253 275.773 299.021 276.877 299.315C285.853 301.967 296.742 304.25 304.762 297.842C308 295.264 310.133 291.213 310.133 287.015C310.133 282.669 307.558 279.207 304.174 276.776C302.114 275.303 299.833 274.272 297.552 273.314C294.756 272.136 291.886 271.105 289.017 270.295C287.913 270 287.398 271.841 288.576 272.136Z",fill:"#C4674E"})),y||(y=r.createElement("path",{d:"M253.553 346.529C253.847 337.395 257.821 328.557 264.442 322.222C265.325 321.412 264.001 320.086 263.118 320.896C256.128 327.525 252.008 336.88 251.714 346.455C251.714 347.707 253.553 347.707 253.553 346.529Z",fill:"#C4674E"})),L||(L=r.createElement("path",{d:"M261.941 324.284C265.178 325.242 268.489 326.347 271.432 328.041C273.86 329.44 276.215 331.429 276.656 334.375C277.098 337.174 275.773 340.121 273.713 341.962C271.432 344.024 268.342 344.908 265.399 345.129C261.352 345.35 257.453 344.319 253.553 343.14C252.45 342.846 251.935 344.614 253.038 344.908C259.954 346.897 268.268 348.665 274.375 343.73C276.877 341.741 278.495 338.647 278.495 335.407C278.495 332.092 276.583 329.367 273.934 327.452C270.549 325.021 266.282 323.622 262.309 322.517C261.279 322.148 260.837 323.916 261.941 324.284Z",fill:"#C4674E"})),b||(b=r.createElement("path",{d:"M485.832 267.864L479.726 246.872L474.06 267.864L453.753 274.566L474.06 281.416L479.726 304.176L486.127 281.564L505.698 274.566L485.832 267.864Z",fill:"#FFD62A"})),Z||(Z=r.createElement("path",{d:"M147.898 106.336L141.938 85.7857L136.347 106.262L116.481 112.891L136.347 119.52L141.938 141.838L148.192 119.668L167.396 112.891L147.898 106.336Z",fill:"#FFD62A"})),E||(E=r.createElement("path",{d:"M525.416 213.874L521.737 201.205L518.279 213.874L506.066 217.851L518.279 221.976L521.737 235.75L525.563 222.123L537.409 217.851L525.416 213.874Z",fill:"#FFD62A"})),g||(g=r.createElement("path",{d:"M104.783 174.467L101.177 162.093L97.7929 174.467L85.8 178.445L97.7929 182.422L101.177 195.901L104.93 182.496L116.481 178.445L104.783 174.467Z",fill:"#FFD62A"})),j||(j=r.createElement("path",{d:"M337.136 15.4439L334.192 5.20567L331.397 15.4439L321.537 18.6848L331.397 21.9993L334.192 33.1214L337.283 22.0729L346.848 18.6848L337.136 15.4439Z",fill:"#FFD62A"})),x||(x=r.createElement("path",{d:"M144.881 331.503L141.938 321.264L139.142 331.503L129.283 334.817L139.142 338.132L141.938 349.18L145.029 338.205L154.593 334.817L144.881 331.503Z",fill:"#FFD62A"})))}var B=r.forwardRef(M),F=(n.p,"SplitScreenLayout_component__eQ4kB"),k="SplitScreenLayout_section__4MlVW",A="SplitScreenLayout_imageWrapper__wSEiw",D="SplitScreenLayout_image__5qvd1",P="SplitScreenLayout_contentWrapper__vWVGy",T="SplitScreenLayout_description__0C0AV",W="SplitScreenLayout_button__wuWn-";var I=function(t){var e=t.description,n=t.button,r=t.className;return(0,C.jsx)(O,{className:a()(F,r),children:(0,C.jsxs)("section",{className:k,children:[(0,C.jsx)("div",{className:A,children:(0,C.jsx)(B,{className:D})}),(0,C.jsxs)("div",{className:P,children:[(0,C.jsx)("div",{className:T,children:e}),(0,C.jsx)("div",{className:W,children:n})]})]})})}},2873:function(t,e,n){var r={"./close.svg":[420,420],"./menu.svg":[5674,674]};function i(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return n.e(e[1]).then((function(){return n.t(i,17)}))}i.keys=function(){return Object.keys(r)},i.id=2873,t.exports=i},4925:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=907.748bc8f9.chunk.js.map