document.addEventListener('DOMContentLoaded', function() {
    // Interactive Career Trajectory
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
      // Allow keyboard navigation using "Enter" key
      item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          item.click();
        }
      });
    });
  
    // Fetch data from a public API example (JSONPlaceholder)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        const apiResult = document.getElementById('api-result');
        const postTitle = document.createElement('h3');
        postTitle.textContent = data.title;
        const postBody = document.createElement('p');
        postBody.textContent = data.body;
        apiResult.appendChild(postTitle);
        apiResult.appendChild(postBody);
      })
      .catch(error => console.error('Error fetching API:', error));
  });
  