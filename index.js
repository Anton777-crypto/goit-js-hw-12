import{a as g,i as d,S as h}from"./assets/vendor-Rdv7LHNr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const x="46834340-89d4e2966326dbab6749c20a4",b="https://pixabay.com/api/";async function f(r,o=1,l=15){try{const e=await g.get(b,{params:{key:x,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:l}});return e.data.hits.length===0&&d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",maxWidth:"250px",color:"rgb(255, 162, 0)"}),e.data}catch(e){console.log("Error fetching images:",e),d.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"center",maxWidth:"250px",color:"rgb(255, 0, 0)"})}}let w=new h(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0});async function m(r){const o=document.querySelector(".gallery"),l=r.map(e=>`
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
          </div>`).join("");o.innerHTML+=l,w.refresh(),S()}function S(){const r=document.querySelector(".gallery-item");if(r){const o=r.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}function q(){document.querySelector(".gallery").innerHTML=""}const L=document.querySelector("#search-form"),v=document.querySelector("#search-input"),p=document.querySelector(".loader"),E=document.querySelector(".loaderr"),y=document.querySelector(".down_loader"),u=document.querySelector(".loaderr_two");document.querySelector(".loaderr_point_two");const a=document.querySelector("#load-more-btn");let n=1,i="";L.addEventListener("submit",async r=>{if(r.preventDefault(),i=v.value.trim(),!i){iziToast.info({title:"End of results",message:"Введите значения!!!!!",position:"center",maxWidth:"250px",color:"rgb(255, 162, 0)"});return}n=1,q(),a.style.display="none",p.style.display="flex",E.style.display="flex";try{const o=await f(i,n);m(o.hits),o.totalHits>15&&(a.style.display="flex")}catch(o){console.error("Error during search:",o)}finally{p.style.display="none"}});a.addEventListener("click",async()=>{n+=1,a.style.display="none",y.style.display="flex",u.style.display="flex";try{const r=await f(i,n);m(r.hits),n*15>=r.totalHits?(a.style.display="none",iziToast.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"center",maxWidth:"250px",color:"rgb(255, 162, 0)"})):a.style.display="flex"}catch(r){console.error("Error during load more:",r)}finally{y.style.display="none",u.style.display="none"}});
//# sourceMappingURL=index.js.map
