import{S as f,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(r){const o="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"44406929-b6512fae58ed0703418d850ba",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${s}?${i}`;return fetch(e).then(t=>t.json()).catch(t=>console.log(t))}function p(r){return`<li class="gallery-item">
	<a class="gallery-link" href="${r.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${r.previewURL}" 
			alt="${r.tags}" 
			/>
	</a>
    <div class="item-footer">
          <div class="item-footer-pair">
            <p>Likes</p>
            <p>${r.likes}</p>
          </div>
          <div class="item-footer-pair">
            <p>Views</p>
            <p>${r.views}</p>
          </div>
          <div class="item-footer-pair">
            <p>Comments</p>
            <p>${r.comments}</p>
          </div>
          <div class="item-footer-pair">
            <p>Downloads</p>
            <p>${r.downloads}</p>
          </div>
        </div>
</li>
`}function u(r){return r.map(p).join("")}const a={formElem:document.querySelector(".form"),ulElem:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")};a.formElem.addEventListener("submit",m);function m(r){r.preventDefault();const o=r.target.elements.searchField.value;h(),d(o).then(s=>{s.total===0&&y();const i=u(s.hits);a.ulElem.innerHTML=i,c.refresh()}).catch(()=>{v()}).finally(()=>{g()}),a.formElem.reset()}const c=new f(".gallery a",{captionsData:"alt",captionDelay:250});c.refresh();function h(){a.loader.classList.remove("hidden")}function g(){a.loader.classList.add("hidden")}function y(){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",maxWidth:"472px",icon:!1})}function v(){l.warning({title:"",message:"Sorry! There was a problem with the server!",messageLineHeight:"1.5",messageSize:"16",messageColor:"#fff",position:"topRight",backgroundColor:"#ef4040",icon:!1})}
//# sourceMappingURL=commonHelpers.js.map
