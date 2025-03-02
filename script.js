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

  // Fetch GitHub Stats using the GitHub User API
  const githubUsername = 'priyanshiguptaaa'; // Replace with your GitHub username if needed
  const userApiUrl = `https://api.github.com/users/${githubUsername}`;
  
  fetch(userApiUrl)
    .then(response => response.json())
    .then(data => {
      const statsContainer = document.getElementById('github-stats');
      statsContainer.innerHTML = `
        <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching GitHub stats:', error);
      const statsContainer = document.getElementById('github-stats');
      statsContainer.innerHTML = `<p>Error loading GitHub stats.</p>`;
    });

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
