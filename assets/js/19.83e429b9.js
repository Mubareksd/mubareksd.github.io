(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{593:function(t,e,a){},655:function(t,e,a){"use strict";var n=a(593);a.n(n).a},677:function(t,e,a){"use strict";a.r(e);a(115);var n=a(41),s={props:{stable:{type:Boolean,default:!1},preview:{type:Boolean,default:!1}},data:function(){return{stablePublishRelative:"at an unknown time",stablePublishExact:"Can't connect to GitHub.",previewPublishRelative:"at an unknown time",previewPublishExact:"Can't connect to GitHub."}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a,n,s,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("getStableReleaseData");case 3:a=e.sent,n=a.data,t.$data.stablePublishRelative=t.$moment(n.published_at).fromNow(),t.$data.stablePublishExact=t.$moment(n.published_at).format("dddd, MMMM Do YYYY [at] HH:mm"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:return e.prev=12,e.next=15,t.$store.dispatch("getPreviewReleaseData");case 15:s=e.sent,o=s.data,t.$data.previewPublishRelative=t.$moment(o.published_at).fromNow(),t.$data.previewPublishExact=t.$moment(o.published_at).format("dddd, MMMM Do YYYY [at] HH:mm"),e.next=24;break;case 21:e.prev=21,e.t1=e.catch(12),console.error(e.t1);case 24:case"end":return e.stop()}}),e,null,[[0,9],[12,21]])})))()}},o=(a(655),a(28)),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.stable?a("div",{staticClass:"buildTime"},[a("ElTooltip",{attrs:{placement:"top","open-delay":"250"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("strong",[t._v(t._s(t.stablePublishExact))])]),t._v(" "),a("span",[t._v(t._s(t.stablePublishRelative))])])],1):t.preview?a("div",{staticClass:"buildTime"},[a("ElTooltip",{attrs:{placement:"bottom-end","open-delay":"250"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("strong",[t._v(t._s(t.previewPublishExact))])]),t._v(" "),a("span",[t._v(t._s(t.previewPublishRelative))])])],1):a("span",[t._v("You need to specify props.")])}),[],!1,null,"96fc8fea",null);e.default=r.exports}}]);