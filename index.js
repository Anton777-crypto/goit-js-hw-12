import{a as f,i as p,S as m}from"./assets/vendor-Rdv7LHNr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const g="46834340-89d4e2966326dbab6749c20a4",h="https://pixabay.com/api/";async function u(r,o=1,a=15){try{const e=await f.get(h,{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:a}});return e.data.hits.length===0&&p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",maxWidth:"250px",color:"rgb(255, 162, 0)"}),e.data}catch(e){console.log("Error fetching images:",e),p.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"center",maxWidth:"250px",color:"rgb(255, 0, 0)"})}}let b=new m(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0});async function y(r){const o=document.querySelector(".gallery"),a=r.map(e=>`
          <div class="gallery-item">
            <ul class='ul-gallery'>
              <li class='li-gallery'>
                <a href='${e.largeImageURL}' data-lightbox='gallery'>
                  <img class="images" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
                </a>
                <div class="info">
                  <p class="info-info"><span class="info-p">Likes:</span> ${e.likes}</p>
                  <p class="info-info"><span class="info-p">Views:</span> ${e.views}</p>
                  <p class="info-info"><span class="info-p">Comments:</span> ${e.comments}</p>
                  <p class="info-info"><span class="info-p">Downloads:</span> ${e.downloads}</p>
                </div>
              </li>
            </ul>
          </div>`).join("");o.innerHTML+=a,b.refresh(),x()}function x(){const r=document.querySelector(".gallery-item");if(r){const o=r.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}function L(){document.querySelector(".gallery").innerHTML=""}const v=document.querySelector("#search-form"),S=document.querySelector("#search-input"),i=document.querySelector(".loader"),q=document.querySelector(".loaderr"),c=document.querySelector("#load-more-btn");let n=1,l="";v.addEventListener("submit",async r=>{if(r.preventDefault(),l=S.value.trim(),!!l){n=1,L(),c.style.display="none",i.style.display="flex",q.style.display="flex";try{const o=await u(l,n);y(o.hits),o.totalHits>15&&(c.style.display="block")}catch(o){console.error("Error during search:",o)}finally{i.style.display="none"}}});c.addEventListener("click",async()=>{n+=1,i.style.display="block";try{const r=await u(l,n);y(r.hits),n*15>=r.totalHits&&(c.style.display="none",iziToast.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"center",maxWidth:"250px",color:"rgb(255, 162, 0)"}))}catch(r){console.error("Error during load more:",r)}finally{i.style.display="none"}});
//# sourceMappingURL=index.js.map
