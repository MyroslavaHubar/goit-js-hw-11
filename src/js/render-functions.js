function imgTemplate(img) {
  return `<li class="gallery-item">
	<a class="gallery-link" href="${img.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${img.previewURL}" 
			alt="${img.tags}" 
			/>
	</a>
    <div class="item-footer">
          <div>
            <p>Likes</p>
            <p>${img.likes}</p>
          </div>
          <div>
            <p>Views</p>
            <p>${img.views}</p>
          </div>
          <div>
            <p>Comments</p>
            <p>${img.comments}</p>
          </div>
          <div>
            <p>Downloads</p>
            <p>${img.downloads}</p>
          </div>
        </div>
</li>
`;
}

export function galleryTemplate(images) {
  return images.map(imgTemplate).join('');
}
