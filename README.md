# Birthday Website Documentation

## Overview

The Birthday Website is an interactive celebration project featuring a gallery, quiz, and prize selection for a birthday surprise. Built with HTML, CSS, and JavaScript.

## Project Structure

```
birthday-website/
├── image/                     # Image assets directory
├── music/                     # Audio files directory
├── index.html                 # Main HTML file
├── style.css                  # Stylesheet
├── script.js                  # JavaScript logic
└── README.md                  # Documentation
```

## Core Files and Their Functions

### 

index.html



Main HTML file containing the website structure:
- `main-page`: Welcome section with birthday message
- `gallery-page`: Photo timeline with memories
- `quiz-page`: Interactive quiz section
- `prizes-page`: Prize selection interface
- `final-page`: Closing message and wishes
- Music widget integration

### 

style.css



Stylesheet containing:
- Base styles and layouts
- Animations (glow, border-glow, text-glow)
- Timeline styling
- Quiz interface design
- Prize selection layout
- Music widget styling
- Responsive design for mobile devices

### 

script.js



JavaScript functionality:

```javascript
// Quiz Management
selectAnswer(questionIndex, answer)    // Handle answer selection
submitQuiz()                          // Process quiz results
showModal(message, redirectUrl)       // Display result modals

// Prize Selection
selectPrize(prize)                    // Handle prize choices
closeModal()                          // Close modal windows

// Music Player
toggleMusicWidget()                   // Show/hide music player
togglePlayPause()                     // Control music playback
previousMusic()                       // Play previous track
nextMusic()                          // Play next track
changeMusic()                        // Change selected track

// Navigation
navigateTo(pageId)                   // Handle page transitions
```

## Features in Detail

### Main Page
- Animated background
- Glowing title effect
- Navigation button

### Gallery Page
- Interactive timeline
- Photo memories with dates
- Location details
- Smooth transitions

### Quiz Section
- 5 multiple-choice questions
- Score tracking
- Conditional prize access
- Modal feedback system

### Prize Selection
- 4 prize options
- Interactive selection
- Confirmation modal
- Prize tracking

### Music Widget
- Playlist of 4 songs
- Playback controls
- Persistent state
- Mobile-responsive design

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/username/birthday-website.git
```

2. Ensure proper file structure:
   - Place images in 

image

 directory
   - Add music files to 

music

 directory
   - Keep all HTML, CSS, and JS files in root

3. Open 

index.html

 in a web browser to view the website

## Technologies Used

- HTML5: Page structure and content
- CSS3: Styling and animations
- JavaScript: Interactive functionality
- Audio API: Music player implementation

## **Authors**
**Developed by :**
**Muhamad Nur Arif**
**(41523010147)**

### **🔗 Link**
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ariftsx.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/arifsuz)
[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marif8/)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ariftsx/)
