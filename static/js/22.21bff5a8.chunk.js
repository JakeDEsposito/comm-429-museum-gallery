"use strict";(self.webpackChunkcomm_429_museum_gallery=self.webpackChunkcomm_429_museum_gallery||[]).push([[22],{22:function(t,i,e){e.r(i);var r=e(439),s=e(791),a=e(689),n=e(341),c=e(184);i.default=function(){var t=(0,a.UO)().artist,i=(0,s.useState)(),e=(0,r.Z)(i,2),u=e[0],l=e[1];return(0,s.useEffect)((function(){fetch("https://api.artic.edu/api/v1/artworks/search?fields=id,title,artist_title,artist_id,image_id&query[term][artist_id]="+t).then((function(t){return t.json()})).then((function(t){return l(t)}))}),[t]),u?(0,c.jsx)("section",{className:"works",children:u.data.map((function(t){var i=t.artist_title,e=t.image_id,r=t.title,s=t.id;t.artist_id;return(0,c.jsxs)("article",{children:[(0,c.jsx)("img",{src:u.config.iiif_url+"/"+e+n.x,alt:"Broken. Sorry."}),(0,c.jsxs)("h2",{children:[r," - ",i]})]},s)}))}):(0,c.jsx)("div",{children:"loading..."})}}}]);
//# sourceMappingURL=22.21bff5a8.chunk.js.map