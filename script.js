document.addEventListener('DOMContentLoaded', function() {
  // Interactive Timeline Functionality
  const timelineItems = document.querySelectorAll('.timeline li');
  const milestoneTitle = document.getElementById('milestone-title');
  const milestoneDescription = document.getElementById('milestone-description');

  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-milestone');
      const description = item.getAttribute('data-description');
      milestoneTitle.textContent = title;
      milestoneDescription.textContent = description;
    });

    // Keyboard accessibility: trigger on "Enter"
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        item.click();
      }
    });
  });

  // Optional API Fetch Example (JSONPlaceholder)
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
      const apiResult = document.getElementById('api-result');
      if (apiResult) {
        const postTitle = document.createElement('h3');
        postTitle.textContent = data.title;
        const postBody = document.createElement('p');
        postBody.textContent = data.body;
        apiResult.appendChild(postTitle);
        apiResult.appendChild(postBody);
      }
    })
    .catch(error => console.error('Error fetching API:', error));

  // Extra Interactivity: Animate header background based on mouse movement
  document.addEventListener('mousemove', (e) => {
    const header = document.getElementById('page-header');
    if (header) {
      // Calculate a color value based on the mouse X coordinate
      const red = Math.min(255, Math.abs(e.clientX % 255));
      const blue = 200;
      header.style.backgroundColor = `rgb(${red}, 50, ${blue})`;
    }
  });
});
