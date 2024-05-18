import{a as h,i as m,S as L}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const p=t=>t.map(({webformatURL:r,largeImageURL:a,tags:u,likes:e,views:s,comments:n,downloads:y})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${r}" 
              alt="${u}" 
            />
          </a>
          <div class="card-body">
              <p class="text-body"><span class="bigger-text">Likes: </span>${e}</p>
              <p class="text-body"><span class="bigger-text">Views: </span>${s}</p>
              <p class="text-body"><span class="bigger-text">Comments: </span>${n}</p>
              <p class="text-body"><span class="bigger-text">Downloads: </span>${y}</p>
          </div>
      </li>
      `).join(""),b="43811002-0821001961ff17859e55caea7",x="https://pixabay.com/";h.defaults.baseURL=x;const g=(t,r=1)=>{const a={q:t,key:b,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return h.get("api/",{params:{...a}})},l=document.querySelector(".gallery-list"),v=document.querySelector(".search-form"),o=document.querySelector(".loader"),i=document.querySelector(".btn-load-more");o.classList.add("is-hidden");i.classList.add("is-hidden");let c="",d=1,f;async function S(t){if(t.preventDefault(),c=t.target.elements.query.value.trim(),d=1,console.log(c),c===""){l.innerHTML="",t.target.reset(),m.error({message:"Input field can't be empty",timeout:3e3});return}l.innerHTML="",o.classList.remove("is-hidden"),i.classList.add("is-hidden");try{const{totalHits:r,data:a}=await g(c,d);if(a.total===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3}),o.classList.add("is-hidden"),t.target.reset();return}l.innerHTML=p(a.hits),f=Math.ceil(a.totalHits/15),i.classList.remove("is-hidden"),P.refresh()}catch(r){console.log(r)}t.target.reset(),o.classList.add("is-hidden")}i.addEventListener("click",async t=>{o.classList.remove("is-hidden"),d+=1,i.classList.add("is-hidden");const{data:r}=await g(c,d);l.insertAdjacentHTML("beforeend",p(r.hits)),o.classList.add("is-hidden"),i.classList.remove("is-hidden"),q(),d>f&&(i.classList.add("is-hidden"),m.error({message:"We're sorry, but you've reached the end of search results.",timeout:3e3}))});v.addEventListener("submit",S);const P=new L(".gallery-link");function q(){const{height:t}=l.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
