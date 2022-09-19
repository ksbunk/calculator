(function(){"use strict";var t={6832:function(t,e,n){var s=n(6369),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("main",[t._m(0),e("MeasurementAddition")],1)])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-5 text-center"},[e("h2",[t._v("Measurement Additionner")])])}],i=function(){var t=this,e=t._self._c;return t.measurementUnits?e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-md-5 col-lg-4 order-md-last"},[t._m(0),0===t.additionResults.length?e("div",{staticClass:"alert alert-dark",attrs:{role:"alert"}},[t._v(" No results... ")]):e("ul",{staticClass:"list-group mb-3"},t._l(t.additionResults.slice().reverse(),(function(n,s){return e("li",{key:s,staticClass:"list-group-item d-flex justify-content-between lh-sm"},[e("div",t._l(n.measurements,(function(s,a){return e("small",{key:a,staticClass:"text-muted"},[t._v(t._s(s.value)+t._s(s.unit)+" "+t._s(a<n.measurements.length-1?"+ ":""))])})),0),e("b",[t._v("= "+t._s(n.result.value)+t._s(n.result.unit))])])})),0)]),e("div",{staticClass:"col-md-7 col-lg-8"},[e("h4",{staticClass:"mb-3"},[t._v("Measurements")]),0===t.measurements.length?e("div",{staticClass:"alert alert-dark",attrs:{role:"alert"}},[t._v(" No measurements. Please add a measurement to calculate. ")]):e("div",t._l(t.measurements,(function(n,s){return e("measurement-editor",{key:n.idx,attrs:{units:t.measurementUnits},on:{delete:function(e){return t.deleteMeasurement(s)}},model:{value:t.measurements[s],callback:function(e){t.$set(t.measurements,s,e)},expression:"measurements[index]"}})})),1),e("div",{staticClass:"row g-3 mt-2"},[e("div",{staticClass:"col-sm-4"},[e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.addMeasurement()}}},[t._v(" Add Measurement ")])])]),e("hr",{staticClass:"my-4"}),t.calculationError?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" ERROR: "+t._s(t.calculationError)+" ")]):t._e(),e("button",{staticClass:"w-100 btn btn-primary btn-lg",on:{click:function(e){return t.calculateAddition()}}},[t._v(" Calculate Addition ")])])]):t._e()},u=[function(){var t=this,e=t._self._c;return e("h4",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[e("span",[t._v("Last Results")])])}],l=(n(7658),n(6265)),o=n.n(l),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row g-3 mt-1"},[e("div",{staticClass:"col-sm-6"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Value..."},domProps:{value:t.value.value},on:{input:t.updateValue}}),e("div",{staticClass:"invalid-feedback"},[t._v(" Value is required. ")])]),e("div",{staticClass:"col-sm-4"},[e("select",{staticClass:"form-control",on:{input:t.updateUnit}},t._l(t.units,(function(n){return e("option",{key:n.id,domProps:{selected:t.value.units===n.unitName}},[t._v(t._s(n.unitName))])})),0),e("div",{staticClass:"invalid-feedback"},[t._v(" Unit is required. ")])]),e("div",{staticClass:"col-sm-2"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.$emit("delete")}}},[t._v("Delete")])])])},d=[],m={props:{units:{type:Array,required:!0},value:{type:Object,required:!0}},methods:{updateValue(t){let e={...this.value};e.value=t.target.value,this.$emit("input",e)},updateUnit(t){let e={...this.value};e.unit=t.target.value,this.$emit("input",e)}}},f=m,v=n(1001),p=(0,v.Z)(f,c,d,!1,null,null,null),h=p.exports,_={components:{MeasurementEditor:h},data(){return{measurementUnits:null,measurements:[],additionResults:[],calculationError:null}},props:{msg:String},methods:{calculateAddition(){this.calculationError=null,o().post("/api/measurementsum",this.measurements).then((t=>{this.additionResults.push({result:t.data,measurements:[...this.measurements]})}),(t=>{this.calculationError=JSON.stringify(t.response.data)}))},addMeasurement(){const t=this.measurementUnits[0],e=this.measurements.length>0?Math.max(...this.measurements.map((t=>t.idx)))+1:0;this.measurements.push({idx:e,value:0,unit:t.unitName})},deleteMeasurement(t){this.measurements.splice(t,1)},loadMeasurementUnits(){o().get("/api/measurementunits").then((t=>this.measurementUnits=t.data))}},mounted(){this.$nextTick((()=>{this.measurementUnits||this.loadMeasurementUnits()}))}},b=_,g=(0,v.Z)(b,i,u,!1,null,null,null),y=g.exports,C={name:"App",components:{MeasurementAddition:y}},x=C,k=(0,v.Z)(x,a,r,!1,null,null,null),M=k.exports;n(2166);s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(M)}).$mount("#app")}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,a,r){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],a=t[c][1],r=t[c][2];for(var u=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(u=!1,r<i&&(i=r));if(u){t.splice(c--,1);var o=a();void 0!==o&&(e=o)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,a,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,r,i=s[0],u=s[1],l=s[2],o=0;if(i.some((function(e){return 0!==t[e]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(l)var c=l(n)}for(e&&e(s);o<i.length;o++)r=i[o],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},s=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(6832)}));s=n.O(s)})();
//# sourceMappingURL=app.b14bf4a2.js.map