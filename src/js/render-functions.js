export const markup = images => {
  return images.map(
    ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}" 
              alt="${tags}" 
            />
          </a>
          <div class="card-body">
              <p class="text-body"><span class="bigger-text">Likes: </span>${likes}</p>
              <p class="text-body"><span class="bigger-text">Views: </span>${views}</p>
              <p class="text-body"><span class="bigger-text">Comments: </span>${comments}</p>
              <p class="text-body"><span class="bigger-text">Downloads: </span>${downloads}</p>
          </div>
      </li>
      `
  )
    .join("")
};





