import{S as c,i as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(t){const o="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"44406929-b6512fae58ed0703418d850ba",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${s}?${i}`;return fetch(e).then(r=>r.json()).catch(r=>console.log(r))}function u(t){return`<li class="gallery-item">
	<a class="gallery-link" href="${t.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${t.previewURL}" 
			alt="${t.tags}" 
			/>
	</a>
    <div class="item-footer">
          <div class="item-footer-pair">
            <p>Likes</p>
            <p>${t.likes}</p>
          </div>
          <div class="item-footer-pair">
            <p>Views</p>
            <p>${t.views}</p>
          </div>
          <div class="item-footer-pair">
            <p>Comments</p>
            <p>${t.comments}</p>
          </div>
          <div class="item-footer-pair">
            <p>Downloads</p>
            <p>${t.downloads}</p>
          </div>
        </div>
</li>
`}function p(t){return t.map(u).join("")}const a={formElem:document.querySelector(".form"),ulElem:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")};a.formElem.addEventListener("submit",m);function m(t){t.preventDefault();const o=t.target.elements.searchField.value;h(),d(o).then(s=>{s.total===0&&g();const i=p(s.hits);a.ulElem.innerHTML=i,n.refresh()}).catch(s=>{}).finally(()=>{y()}),a.formElem.reset()}const n=new c(".gallery a",{captionsData:"alt",captionDelay:250});n.refresh();function h(){a.loader.classList.remove("hidden")}function y(){a.loader.classList.add("hidden")}function g(){f.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageLineHeight:"1.5",messageSize:"16",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",icon:!1})}
//# sourceMappingURL=commonHelpers.js.map
