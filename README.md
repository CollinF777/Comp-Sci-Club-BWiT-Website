# Brockport CS Club & BWiT Website

A React-based website for the Brockport Computing Sciences Club and Brockport Women in Tech (BWiT) organizations. This site serves as a central hub for club information, events, and community engagement at SUNY Brockport.

## About

This website showcases two student organizations at SUNY Brockport:

- **Computing Sciences Club**: A student-run organization building a community for those interested in computing sciences to work with peers, have fun, and develop professional skills through tutoring, guest speakers, competitions, and various activities.

- **Brockport Women in Tech (BWiT)**: A community creating support and networking opportunities for women and others in computing-related disciplines, providing a safe and welcoming space in a field where it can be difficult to feel seen or heard.

## Features

- **Multi-page Navigation**: Home, CS Club, BWiT, and Contact pages
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Event Highlights**: Photo galleries showcasing club activities and events
- **Social Media Integration**: Direct links to Discord and Instagram for both organizations
- **Location Information**: Details about meeting location with visual guides
- **Contact Information**: Dedicated contact page for inquiries
- **Brockport Branding**: Official school colors (green and gold) throughout the design

## Tech Stack

- **React** 19.2.4 - Frontend UI library
- **React Router DOM** 7.13.0 - Client-side routing
- **Vite** 7.3.1 - Build tool and development server
- **Lucide React** 0.563.0 - Icon library
- **ESLint** 9.39.1 - Code linting and quality
- **CSS3** - Custom styling with CSS variables

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

- `npm run dev` - Start the Vite development server with hot reload
- `npm run build` - Build the production-ready application
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Project Structure

```
brockport-cs-club/
├── public/
│   ├── Images/              # Event photos and building images
│   │   ├── CSClubFall25.jpg
│   │   ├── CSClubGames.jpg
│   │   ├── BWiTMembers.jpg
│   │   ├── BWiTColoring.jpg
│   │   ├── BWiTSpeaker.png
│   │   ├── CSClubSpeaker.png
│   │   ├── ASC.jpg
│   │   └── Comtec.jpg
│   └── CSClubLogo.jpg       # Club logo/favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation header
│   │   └── Footer.jsx       # Site footer
│   ├── pages/
│   │   ├── Homepage.jsx     # Main landing page
│   │   ├── CSClubPage.jsx   # CS Club dedicated page
│   │   ├── BWiTPage.jsx     # BWiT dedicated page
│   │   └── ContactPage.jsx  # Contact and location page
│   ├── App.css              # Main application styles
│   ├── App.jsx              # Root component with routing
│   ├── index.css            # Global base styles
│   └── main.jsx             # Application entry point
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Pages & Features

### Home Page
- Overview of both organizations
- Mission statements
- Activity lists
- Event photo galleries
- Guest speaker highlights
- Location information
- Social media links for both clubs

### CS Club Page
- Detailed information about the Computing Sciences Club
- Full activity list
- Event photos
- Social media links (Discord & Instagram)

### BWiT Page
- Detailed information about Brockport Women in Tech
- Activities and workshops
- Event photos
- Social media links (Discord & Instagram)

### Contact Page
- Contact information for both organizations
- Meeting location details (A.W. Brown Building - Comtec Student Lounge)
- Building photo for easy identification

## Styling

The website uses a custom CSS design system with:
- **CSS Variables**: Consistent color scheme using Brockport's official colors
- **Responsive Grid**: Two-column layout on desktop, single column on mobile
- **Custom Cards**: Styled card components with organization-specific accents
- **Smooth Transitions**: Hover effects and animations throughout

### Color Scheme
- Green Primary: `#36B77A`
- Green Dark: `#00533E`
- Gold Primary: `#FFC726`
- Gold Medium: `#eab308`

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: 1024px+

## Development Notes

- The `.gitignore` file excludes `ClubMainPage.jsx` (legacy component)
- Images are served from the `/public/Images` directory
- All routes are client-side using React Router
- Icons are provided by Lucide React library

## Contributing

This website was created for the Brockport Computing Sciences Club and BWiT. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly across different devices
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

## Credits

- **Content**: Based on presentations by Naya and club leadership
- **Development**: Collin Fair
- **Icons**: Lucide React
- **Organizations**: SUNY Brockport Computing Sciences Club & BWiT

## Contact

For website-related questions or to report issues:
- **Email**: collinfair777@gmail.com
- **GitHub**: [@CollinF777](https://github.com/CollinF777)

For club-related inquiries:
- **CS Club Discord**: [Join Here](https://discord.com/invite/6hUCrXdXvd)
- **CS Club Instagram**: [@bport.csc](https://instagram.com/bport.csc)
- **BWiT Discord**: [Join Here](https://discord.gg/9tjUeAS5X)
- **BWiT Instagram**: [@brockportwomenintechnology](https://instagram.com/brockportwomenintechnology)

## License

This project is created for the SUNY Brockport Computing Sciences Club and BWiT organizations.
