document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubProjects();
});

function fetchGitHubProjects() {
    fetch('https://api.github.com/users/foguinhoperuca/repos')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('github-projects');
            data.forEach(repo => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description}</p>
                    <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error fetching GitHub projects:', error));
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
  // Aqui você pode adicionar código para enviar os dados do formulário para um servidor ou email.
});
