document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#tags button');
    const projects = document.querySelectorAll('.project');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tag = button.getAttribute('data-tag');
        
        projects.forEach(project => {
          if (tag === 'all') {
            project.style.display = 'block';
          } else {
            const tags = project.getAttribute('data-tags').split(' ');
            project.style.display = tags.includes(tag) ? 'block' : 'none';
          }
        });
      });
    });
  });
  