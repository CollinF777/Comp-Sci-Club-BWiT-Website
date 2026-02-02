# Brockport CS Club & BWiT Website

A React-based website for the Brockport Computing Sciences Club and Brockport Women in Tech (BWiT) organizations. This site serves as a central hub for club information, events, and community engagement.

## About

This website showcases two student organizations at SUNY Brockport:

- **Computing Sciences Club**: A community for Computer Science students to connect, learn, and have fun through games, workshops, and networking events
- **Brockport Women in Tech (BWiT)**: A supportive space celebrating and uniting women in the Computer Science department

## Features

- Dual-column layout showcasing both organizations
- Event highlights with photo galleries
- Social media integration (Discord & Instagram)
- Location and contact information
- Responsive design for all devices
- Clean, modern UI with school colors (green and gold)

## Tech Stack

- **React** 19.2.0 - Frontend framework
- **Vite** 7.3.1 - Build tool and dev server
- **Lucide React** - Icon library
- **ESLint** - Code linting
- CSS3 - Styling with responsive design

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or v22.12.0+)
- npm (v8.0.0+)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brockport-cs-club
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
brockport-cs-club/
├── public/
│   ├── Images/           # Event photos and building images
│   └── CSClubLogo.jpg    # Club logo/favicon
├── src/
│   ├── pages/
│   │   └── ClubMainPage.jsx   # Main landing page component
│   ├── App.css           # Main application styles
│   ├── App.jsx           # Root component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Project dependencies
└── vite.config.js        # Vite configuration
```

## Key Sections

### Computing Sciences Club
- What is the comp sci club
- What do they do
- Social media links
- Contact information

### Brockport Women in Tech (BWiT)
- Organization overview
- Activities and workshops
- Social media
- Contact info

### Shared Content
- Guest speaker events
- Location information (A.W. Brown Building - Comtec Student Lounge)
- Contact forms for both organizations

## Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: 768px+

## Contributing

This website was created for the Brockport Computing Sciences Club and BWiT. For updates or modifications:

1. Create a feature branch
2. Make your changes
3. Test thoroughly across devices
4. Submit for review

## Credits

- Content based on presentations by Naya and club leadership
- Built by Collin Fair
- Icons by Lucide React

## Contact

For website-related questions or to report issues:
- Email: collinfair777@gmail.com
- GitHub: CollinF777

---

**Join us in building a vibrant Computer Science community at Brockport!**
