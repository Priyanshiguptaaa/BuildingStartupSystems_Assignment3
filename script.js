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

  // Fetch GitHub Projects (Public Repos)
  const githubUsername = 'priyanshiguptaaa'; // replace with your GitHub username if different
  const reposUrl = `https://api.github.com/users/${githubUsername}/repos`;
  fetch(reposUrl)
    .then(response => response.json())
    .then(data => {
      const projectsContainer = document.getElementById('github-projects-list');
      // Clear the loading message
      projectsContainer.innerHTML = '';
      if (Array.isArray(data)) {
        data.forEach(repo => {
          // Create a card for each repository
          const repoCard = document.createElement('div');
          repoCard.classList.add('repo-card');
          repoCard.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description ? repo.description : 'No description provided.'}</p>
          `;
          projectsContainer.appendChild(repoCard);
        });
      } else {
        projectsContainer.innerHTML = `<p>Unable to load projects at this time.</p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching GitHub projects:', error);
      const projectsContainer = document.getElementById('github-projects-list');
      projectsContainer.innerHTML = `<p>Error loading projects.</p>`;
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
