# Alfa-Tres

A modern, responsive website for selling computers and computer accessories built with vanilla HTML, CSS, and JavaScript.
 Features

Responsive Design: Fully responsive layout that works on desktop, tablet, and mobile devices
Product Catalog: Browse through a comprehensive selection of computers and accessories
Interactive UI: Dynamic user interface with smooth animations and transitions
Shopping Cart: Add products to cart with quantity management
Product Search: Search functionality to find specific products quickly
Product Categories: Organized product categories for easy navigation
Contact Form: Get in touch with customer support
Modern Styling: Clean, professional design with CSS3 animations

 Technologies Used

HTML5: Semantic markup for better accessibility and SEO
CSS3: Modern styling with Flexbox/Grid, animations, and responsive design
JavaScript (ES6+): Interactive functionality and DOM manipulation
No Frameworks: Built with vanilla technologies for optimal performance

📁 Project Structure
Alfa-Tres/
├── index.html              # Main homepage
├── css/
│   ├── style.css           # Main stylesheet
│   ├── responsive.css      # Responsive design rules
│   └── animations.css      # CSS animations
├── js/
│   ├── main.js            # Main JavaScript functionality
│   ├── cart.js            # Shopping cart logic
│   └── products.js        # Product data and management
├── images/
│   ├── products/          # Product images
│   └── assets/            # Site assets (logos, icons, etc.)
└── README.md              # Project documentation


Getting Started
 Prerequisites

A modern web browser (Chrome, Firefox, Safari, Edge)
A local web server (optional, for development)

Installation

Clone the repository
bashgit clone https://github.com/Hussein026/Alfa-Tres.git

Navigate to the project directory
bashcd Alfa-Tres

Open the project

Simply open index.html in your web browser, or
Use a local development server:
bash# Using Python 3
python -m http.server 8000

# Using Node.js (if you have live-server installed)
npx live-server



Visit the site

Direct file: Open index.html in your browser
Local server: Navigate to http://localhost:8000


 Usage
   For Customers

Browse products by category
Use the search function to find specific items
Add products to your shopping cart
View cart contents and modify quantities
Use the contact form for inquiries

For Developers

Modify product data in js/products.js
Customize styling in the CSS files
Add new features by extending the JavaScript functionality
Optimize images in the images/ directory

🔧 Customization
Adding New Products
Edit the js/products.js file to add new products:
javascriptconst products = [
    {
        id: 1,
        name: "Gaming Laptop",
        price: 1299.99,
        category: "laptops",
        image: "images/products/laptop1.jpg",
        description: "High-performance gaming laptop"
    }
    // Add more products...
];
Modifying Styles

Main colors and typography: css/style.css
Responsive breakpoints: css/responsive.css
Animations and transitions: css/animations.css

 Browser Support

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
Internet Explorer 11+ (limited support)

 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

 License
    This project is licensed under the MIT License - see the LICENSE file for details.
 Author
   Hussein026

GitHub: @Hussein026

 Acknowledgments

Thanks to all contributors who helped improve this project
Inspiration from modern e-commerce websites
Icons and assets from various open-source projects

 Support
   If you encounter any issues or have questions:

Open an issue on GitHub
Contact through the website's contact form
Email: [moukhaderh7@gmail.com]
