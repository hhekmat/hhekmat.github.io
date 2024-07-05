---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Home
---

# Welcome to My Portfolio

## Contact Info
- [GitHub](https://github.com/your-username)
- [LinkedIn](https://www.linkedin.com/in/your-username/)
- [Resume](path/to/your/resume.pdf)

## Projects
{% for post in site.posts %}
  <div>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
  </div>
{% endfor %}