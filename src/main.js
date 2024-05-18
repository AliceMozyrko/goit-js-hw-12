
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { markup } from "./js/render-functions.js";
import { fetchPhotos } from "./js/pixabay-api.js";

const galleryEl = document.querySelector(".gallery-list")
const searchFormEl = document.querySelector(".search-form")
const loaderEl = document.querySelector(".loader")
const loadBtn = document.querySelector(".btn-load-more")

loaderEl.classList.add("is-hidden")
loadBtn.classList.add("is-hidden")

let searchQuery = ""
let currentPage = 1
let totalPages;
 
async function onSearchFormSubmit(event) {
  event.preventDefault()
  searchQuery = event.target.elements.query.value.trim()
  currentPage = 1;
  console.log(searchQuery);
  if (searchQuery === "") {
    galleryEl.innerHTML = ""
    event.target.reset()
    iziToast.error({
      message: "Input field can't be empty",
      timeout: 3000,
    })
    return;
  }

  galleryEl.innerHTML = "";
  loaderEl.classList.remove("is-hidden")
  loadBtn.classList.add("is-hidden");

  try {
    const {totalHits, data} = await fetchPhotos(searchQuery, currentPage) 
    if (data.total === 0) {
        iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        timeout: 3000,
        })
      loaderEl.classList.add("is-hidden");
      event.target.reset()
      return;
    }
    galleryEl.innerHTML = markup(data.hits); 
    totalPages = Math.ceil(data.totalHits / 15)
    loadBtn.classList.remove("is-hidden")
    lightbox.refresh();

  } catch (error) {
    console.log(error)
  }

  event.target.reset()
  loaderEl.classList.add("is-hidden")
}

loadBtn.addEventListener("click", async (event) => {
  loaderEl.classList.remove("is-hidden"); currentPage += 1
  loadBtn.classList.add("is-hidden")
  const {data} = await fetchPhotos(searchQuery, currentPage) 
  galleryEl.insertAdjacentHTML("beforeend", markup(data.hits))
  loaderEl.classList.add("is-hidden")
  loadBtn.classList.remove("is-hidden")
  scrollGallery();
  lightbox.refresh();
  
  if (currentPage >= totalPages ) {
     loadBtn.classList.add("is-hidden");
     iziToast.error({
        message: "We're sorry, but you've reached the end of search results.", 
        timeout: 3000,
     }) 
  }
})


function scrollGallery() {
  const { height } = galleryEl.getBoundingClientRect();
  window.scrollBy({
  top: height * 2,
  behavior: "smooth",
});
}

searchFormEl.addEventListener("submit", onSearchFormSubmit)
const lightbox = new SimpleLightbox('.gallery-link');