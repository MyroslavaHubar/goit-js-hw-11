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
            <p></p>
            <p></p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
</li>
`;
}

export function galleryTemplate(images) {
  return images.map(imgTemplate).join('');
}
