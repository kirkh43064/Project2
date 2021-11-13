async function reviewDataHandler(event) {
    event.preventDefault();
  
    const bookTitle = document.querySelector('#bookTitle').value.trim();
    const review = document.querySelector('#myReview').value.trim();
  
    if (bookTitle && review) {
      const response = await fetch('/review', {
        method: 'POST',
        body: JSON.stringify({
          bookTitle,
          review
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/review');
      } else {
        alert(response.statusText);
      }
    }
  }
  

document.querySelector('#review').addEventListener('submit', loginFormHandler);