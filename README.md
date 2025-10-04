# V Akhila - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Computer Science student and web developer.

## 🚀 Live Demo

Visit the live website: [https://vakhila11.github.io/MyPortfolio/](https://vakhila11.github.io/MyPortfolio/)

## 📋 Features

- **Responsive Design**: Mobile-first approach with Bootstrap
- **Modern UI/UX**: Clean and professional design
- **Interactive Elements**: 
  - Animated typing effect for skills
  - Progress bars for skill levels
  - Portfolio filtering system
  - Lightbox image gallery
  - Smooth scrolling navigation
- **Contact Form**: Working contact form with Formspree integration
- **Skills Showcase**: 
  - Web Technologies (HTML, CSS, JavaScript, React)
  - Programming Languages (Java, Python, C, DSA)
  - Tools (Git & GitHub, SQL)
  - Soft Skills
- **Experience Timeline**: Professional experience and internships
- **Education**: Academic background and achievements
- **Certificates**: AI and cloud computing certifications
- **Portfolio Gallery**: Project showcases and achievements

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 4
- **Libraries**: 
  - jQuery
  - Typed.js (typing animation)
  - Owl Carousel (testimonials)
  - Isotope (portfolio filtering)
  - Lightbox (image gallery)
  - Waypoints (scroll animations)
- **Backend**: Formspree (contact form handling)
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
MyPortfolio/
├── css/
│   ├── style.css          # Main stylesheet
│   └── style.min.css      # Minified CSS
├── js/
│   └── main.js            # Main JavaScript file
├── img/
│   ├── profile-1.jpg      # Profile images
│   ├── certificate-*.png  # Certificates
│   ├── course-*.png       # Course certificates
│   └── project.png        # Project showcase
├── lib/
│   ├── typed/             # Typing animation library
│   ├── owlcarousel/       # Carousel library
│   ├── isotope/           # Portfolio filtering
│   ├── lightbox/          # Image lightbox
│   └── waypoints/         # Scroll animations
├── mail/
│   ├── contact.js         # Contact form JavaScript
│   └── contact.php        # PHP contact handler
├── scss/
│   └── bootstrap/         # Bootstrap SCSS files
└── index.html             # Main HTML file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local web server (optional, for development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VAkhila11/MyPortfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MyPortfolio
   ```

3. Open `index.html` in your web browser or serve it using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

4. Visit `http://localhost:8000` in your browser

## 📧 Contact Form Setup

The contact form uses Formspree for email handling. To set up your own:

1. Go to [Formspree](https://formspree.io/)
2. Create an account and get your form endpoint
3. Update the form action in `index.html`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Update the AJAX URL in `mail/contact.js`:
   ```javascript
   url: "https://formspree.io/f/YOUR_FORM_ID",
   ```

## 🎨 Customization

### Personal Information
Update the following in `index.html`:
- Name and title
- Contact information
- Social media links
- Profile images
- Resume/CV link

### Skills
Modify the skills section to reflect your expertise:
- Update skill names and percentages
- Change progress bar colors
- Add or remove skill categories

### Portfolio
Replace portfolio images and add your projects:
- Update image sources in the portfolio section
- Modify project descriptions
- Add links to live projects

### Styling
Customize the appearance in `css/style.css`:
- Color scheme (primary colors, backgrounds)
- Fonts and typography
- Layout and spacing
- Responsive breakpoints

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE.txt).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/VAkhila11/MyPortfolio/issues).

## 📞 Contact

**V Akhila**
- Email: vadlaakhila122@gmail.com
- LinkedIn: [v-akhila-054aaa25b](https://www.linkedin.com/in/v-akhila-054aaa25b)
- Twitter: [@vadla_akhila](https://x.com/vadla_akhila)
- Instagram: [@vadla9911](https://www.instagram.com/vadla9911)

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- Font Awesome for icons
- Google Fonts for typography
- All the JavaScript library developers
- Formspree for contact form handling

---

⭐ If you found this project helpful, please give it a star!