import{a as h,i as m,S as b}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const g=t=>t.map(({webformatURL:r,largeImageURL:a,tags:u,likes:e,views:s,comments:n,downloads:L})=>`
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
              <p class="text-body"><span class="bigger-text">Downloads: </span>${L}</p>
          </div>
      </li>
      `).join(""),v="43811002-0821001961ff17859e55caea7",x="https://pixabay.com/";h.defaults.baseURL=x;const p=(t,r=1)=>{const a={q:t,key:v,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return h.get("api/",{params:{...a}})},c=document.querySelector(".gallery-list"),S=document.querySelector(".search-form"),o=document.querySelector(".loader"),i=document.querySelector(".btn-load-more");o.classList.add("is-hidden");i.classList.add("is-hidden");let l="",d=1,f;async function P(t){if(t.preventDefault(),l=t.target.elements.query.value.trim(),d=1,console.log(l),l===""){c.innerHTML="",t.target.reset(),m.error({message:"Input field can't be empty",timeout:3e3});return}c.innerHTML="",o.classList.remove("is-hidden"),i.classList.add("is-hidden");try{const{totalHits:r,data:a}=await p(l,d);if(a.total===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3}),o.classList.add("is-hidden"),t.target.reset();return}c.innerHTML=g(a.hits),f=Math.ceil(a.totalHits/15),a.totalHits<15?(i.classList.add("is-hidden"),m.error({message:"We're sorry, but you've reached the end of search results.",timeout:3e3})):i.classList.remove("is-hidden"),y.refresh()}catch(r){console.log(r)}t.target.reset(),o.classList.add("is-hidden")}i.addEventListener("click",async t=>{o.classList.remove("is-hidden"),d+=1,i.classList.add("is-hidden");const{data:r}=await p(l,d);c.insertAdjacentHTML("beforeend",g(r.hits)),o.classList.add("is-hidden"),i.classList.remove("is-hidden"),q(),y.refresh(),d>=f&&(i.classList.add("is-hidden"),m.error({message:"We're sorry, but you've reached the end of search results.",timeout:3e3}))});function q(){const{height:t}=c.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}S.addEventListener("submit",P);const y=new b(".gallery-link");
//# sourceMappingURL=commonHelpers.js.map
