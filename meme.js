document.getElementById('meme-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    const topText = document.getElementById('top-text').value.trim();
    const bottomText = document.getElementById('bottom-text').value.trim();
    const imageUrl = document.getElementById('image-url').value.trim();
  
    // Get error elements
    const topTextError = document.getElementById('topTextError');
    const bottomTextError = document.getElementById('bottomTextError');
    const imageUrlError = document.getElementById('imageUrlError');
  
    // Hide previous errors
    topTextError.style.display = 'none';
    bottomTextError.style.display = 'none';
    imageUrlError.style.display = 'none';
  
    // Validate
    let isValid = true;
    if (!topText) {
      topTextError.style.display = 'block';
      isValid = false;
    }
    if (!bottomText) {
      bottomTextError.style.display = 'block';
      isValid = false;
    }
    if (!imageUrl) {
      imageUrlError.style.display = 'block';
      isValid = false;
    }
    if (!isValid) return;
  
    // Create meme container
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');
  
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Meme Image';
  
    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('meme-text', 'top-text');
    topTextDiv.textContent = topText;
  
    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('meme-text', 'bottom-text');
    bottomTextDiv.textContent = bottomText;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      memeDiv.remove();
    });
  
    // Add to DOM
    memeDiv.appendChild(img);
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(bottomTextDiv);
    memeDiv.appendChild(deleteBtn);
  
    document.getElementById('meme-container').appendChild(memeDiv);
  
    // Reset form
    this.reset();
  });
  