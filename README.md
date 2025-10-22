Profile Card - Stage 0 Task
A fully accessible, responsive, and testable profile card component built with semantic HTML, modern CSS, and vanilla JavaScript.

🎯 Project Overview
This project is a submission for the Frontend Wizards Stage 0 Task. It implements a profile card that meets all accessibility, semantic HTML, and testing requirements.

✨ Features
✅ Semantic HTML - Uses proper HTML5 semantic elements
✅ Fully Accessible - WCAG 2.1 compliant with ARIA labels
✅ Responsive Design - Works on mobile, tablet, and desktop
✅ Keyboard Navigation - All interactive elements are keyboard accessible
✅ Real-time Updates - Timestamp updates every second
✅ Test-Ready - All elements have data-testid attributes for automated testing
📋 Requirements Met
Required Elements (with data-testids)
Element	data-testid	Status
Profile Card Container	test-profile-card	✅
User Name	test-user-name	✅
User Biography	test-user-bio	✅
Current Timestamp	test-user-time	✅
Avatar Image	test-user-avatar	✅
Social Links Container	test-user-social-links	✅
Twitter Link	test-user-social-twitter	✅
GitHub Link	test-user-social-github	✅
LinkedIn Link	test-user-social-linkedin	✅
Hobbies List	test-user-hobbies	✅
Dislikes List	test-user-dislikes	✅
HTML Semantics
<article> - Main profile card wrapper
<header> - User name section
<figure> - Avatar container
<nav> - Social links navigation
<section> - Hobbies and dislikes sections
<ul> and <li> - List structures
Proper heading hierarchy (h2, h3)
Accessibility Features
All images have descriptive alt attributes
Keyboard-focusable interactive elements
Visible focus indicators
ARIA labels for navigation
Semantic landmarks for screen readers
Reduced motion support for users with motion sensitivity
Responsive Breakpoints
Mobile (< 640px): Stacked vertical layout
Tablet (640px - 768px): Avatar on left, content on right
Desktop (> 768px): Multi-column lists for better space usage
🚀 Quick Start
Option 1: Local Development
Clone the repository:
git clone https://github.com/yourusername/profile-card-stage0.git
cd profile-card-stage0
Open index.html in your browser:
# On Mac
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
Or use a local server (recommended):
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
Then visit http://localhost:8000 in your browser.

Option 2: Deploy to Netlify
Via Netlify Drop (Easiest):

Go to Netlify Drop
Drag and drop your index.html file
Get instant live URL!
Via GitHub (Recommended):

Push your code to GitHub
Go to Netlify
Click "New site from Git"
Connect your repository
Deploy!
Via Netlify CLI:

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
Option 3: Deploy to GitHub Pages
Push your code to GitHub
Go to repository Settings → Pages
Select branch (main) and root folder
Save and get your URL: https://yourusername.github.io/profile-card-stage0
Option 4: Deploy to Vercel
Install Vercel CLI:
npm i -g vercel
Deploy:
vercel --prod
Or use Vercel's web interface.

🧪 Testing
Manual Testing Checklist
 All data-testids are present and correct
 Timestamp shows current time in milliseconds
 Timestamp updates every second
 Avatar image loads correctly
 All social links open in new tab
 Social links have rel="noopener noreferrer"
 Keyboard navigation works (Tab through elements)
 Focus indicators are visible
 Responsive on mobile (< 640px)
 Responsive on tablet (640px - 768px)
 Responsive on desktop (> 768px)
 Screen reader announces all content properly
Automated Testing
You can test the data-testids using browser console:

// Check all required elements exist
const elements = {
  card: document.querySelector('[data-testid="test-profile-card"]'),
  name: document.querySelector('[data-testid="test-user-name"]'),
  bio: document.querySelector('[data-testid="test-user-bio"]'),
  time: document.querySelector('[data-testid="test-user-time"]'),
  avatar: document.querySelector('[data-testid="test-user-avatar"]'),
  social: document.querySelector('[data-testid="test-user-social-links"]'),
  hobbies: document.querySelector('[data-testid="test-user-hobbies"]'),
  dislikes: document.querySelector('[data-testid="test-user-dislikes"]')
};

// Verify all elements exist
Object.entries(elements).forEach(([key, element]) => {
  console.log(`${key}:`, element ? '✅' : '❌');
});

// Check timestamp is valid
const timestamp = parseInt(elements.time.textContent);
console.log('Timestamp valid:', timestamp > 0 && timestamp <= Date.now());
📁 Project Structure
profile-card-stage0/
│
├── index.html          # Main HTML file with embedded CSS and JS
├── README.md          # This file
└── screenshot.png     # (Optional) Screenshot of the card
🎨 Customization
Change Profile Information
Edit the content in index.html:

<!-- Name -->
<h2 class="user-name" data-testid="test-user-name">Your Name</h2>

<!-- Bio -->
<p class="user-bio" data-testid="test-user-bio">Your bio here...</p>

<!-- Avatar -->
<img src="your-image-url.jpg" alt="Your name" ...>
Change Colors
Modify CSS variables at the top of the <style> section:

/* Background gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Primary color */
background: #667eea;  /* Change this color */
🔧 Browser Support
✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)
