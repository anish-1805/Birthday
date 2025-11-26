# 💖 Birthday Story Website for Your Girlfriend

A beautiful, interactive story-format birthday website with a pink theme that chronicles your relationship journey from when you met until now.

## ✨ Features

- **Animated Landing Page** - Beautiful entrance with animated text and floating hearts
- **Story Timeline** - Chapter-by-chapter journey through your relationship
- **Photo Gallery** - Interactive gallery with modal view
- **Birthday Cake Animation** - Blow out the candles with a special surprise
- **Video Message** - Your personal video appears after blowing candles! 🎥
- **Orchid Decorations** - Beautiful orchid flowers throughout (her favorite!) 🌸
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Pink Theme** - Romantic pink color scheme throughout
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Music Player** - Optional background music toggle

## 📁 Project Structure

```
girlfriend-birthday/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── images/             # Folder for all photos
│   └── README.txt      # Guide for image placement
├── video/              # Folder for video message
│   └── README.txt      # Video instructions
├── music/              # Optional folder for background music
└── README.md           # This file
```

## 🚀 How to Use

### Step 1: Add Your Content

1. **Open `index.html`** and replace all placeholders:
   - `[Her Name]` - Replace with her name
   - `[Your Name]` - Replace with your name
   - `[Date: DD/MM/YYYY]` - Replace with actual dates
   - `[Write your story here...]` - Replace with your actual stories
   - `[Photo caption]` - Add captions for your photos
   - `[Special Memory Title]` - Add titles for each chapter

2. **Customize the chapters:**
   - You have 5 chapters by default
   - Add more by copying a chapter's HTML structure
   - Each chapter alternates left/right layout automatically

### Step 2: Add Your Photos

1. **Navigate to the `images/` folder**
2. **Add these photos** (see `images/README.txt` for details):
   - `landing-photo.jpg` - Main photo for landing page
   - `chapter1-photo1.jpg` - When you met
   - `chapter2-photo1.jpg` - First date
   - `chapter3-photo1.jpg` - Special memory 1
   - `chapter4-photo1.jpg` - Special memory 2
   - `chapter5-photo1.jpg` - Recent memory
   - `gallery1.jpg` through `gallery6.jpg` - Gallery photos

**Photo Tips:**
- Use JPG or PNG format
- Recommended size: 1200x800 pixels or larger
- Ensure photos are clear and well-lit

### Step 3: Add Your Video Message

1. **Record your video** - A personal message from your heart
2. **Save it as** `birthday-message.mp4`
3. **Place it in** the `video/` folder
4. **When she blows the candles**, your video will appear! 🎥

**Video Tips:**
- Keep it 1-3 minutes long
- Speak from the heart
- Make sure lighting and audio are good
- See `video/README.txt` for detailed instructions

### Step 4: Add Music (Optional)

1. The `music/` folder is already created
2. Add your song as `birthday-song.mp3`
3. The music toggle button will appear in the bottom-right corner

### Step 5: Test Locally

**Method 1: Simple File Opening**
- Double-click `index.html` or right-click → "Open with" → Choose your browser

**Method 2: Local Server (Recommended)**
```bash
# Navigate to the project folder
cd girlfriend-birthday

# Start a simple HTTP server
python -m http.server 3000

# Open browser and go to:
# http://localhost:3000
```

## 🎨 Customization

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-pink: #ff69b4;      /* Main pink color */
    --light-pink: #ffb6d9;        /* Light pink */
    --dark-pink: #ff1493;         /* Dark pink */
    --soft-pink: #ffe4f1;         /* Very light pink */
}
```

### Add More Chapters
Copy this structure in `index.html` and modify:
```html
<div class="story-chapter" data-chapter="6">
    <div class="chapter-number">Chapter 6</div>
    <div class="timeline-line"></div>
    <div class="chapter-content">
        <!-- Add your content here -->
    </div>
</div>
```

### Modify Gallery Size
In `style.css`, change the grid:
```css
.photo-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

## 🌐 Deployment

### Deploy to Netlify (Free)

1. **Create a Netlify account** at [netlify.com](https://netlify.com)
2. **Drag and drop** the entire `girlfriend-birthday` folder to Netlify
3. **Get your URL** - Share it with her!

### Deploy to GitHub Pages

1. **Create a GitHub repository**
2. **Upload all files**
3. **Enable GitHub Pages** in repository settings
4. **Access via**: `https://yourusername.github.io/repository-name`

### Deploy to Vercel

1. **Create a Vercel account** at [vercel.com](https://vercel.com)
2. **Import your project**
3. **Deploy** - Get instant URL

## 💡 Tips for Best Results

1. **Write from the heart** - Be genuine and personal in your stories
2. **Use high-quality photos** - Clear, well-lit images work best
3. **Test on mobile** - Make sure it looks good on her phone
4. **Add specific details** - Mention specific moments, dates, and feelings
5. **Proofread everything** - Check for typos and grammar
6. **Test all interactions** - Click through everything before sharing

## 🎁 Presentation Ideas

- **Send the link** on her birthday morning
- **QR Code** - Generate a QR code she can scan
- **Screen record** - Make a video walkthrough
- **Print** - Print the URL on a card with instructions

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in the `images/` folder
- Try using absolute paths if needed

**Music not playing?**
- Some browsers block autoplay
- User must interact with page first
- Check file format is MP3

**Animations not working?**
- Clear browser cache
- Try a different browser
- Check JavaScript console for errors

## 📱 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 💝 Final Notes

This website is designed to be a heartfelt gift. Take your time filling in the content, choose your best photos together, and make it truly personal. The effort you put into customizing this will show how much you care.

**Happy Birthday to her! 🎂🎉💖**

---

Made with ❤️ for your special someone
