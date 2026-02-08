# Mobile Home UI

A beautiful and modern mobile app home screen UI built with React Native and Expo.

## Features

✨ **Modern Design**
- Clean and intuitive interface
- Beautiful color schemes and gradients
- Smooth animations and interactions

📱 **Home Screen Components**
- Personalized greeting header
- Search bar with filter option
- Category cards with icons
- Featured promotional banners
- Product grid with ratings and prices
- Notification badge
- Heart/favorite functionality

🎨 **UI Elements**
- Custom category cards
- Featured cards with image backgrounds
- Product cards with images and details
- Responsive design
- Shadow effects and elevation

## Screenshots

The home screen includes:
- **Header**: Personalized greeting with notification bell
- **Search**: Search bar with filter button
- **Categories**: Horizontal scrollable category cards (Electronics, Fashion, Home, Sports)
- **Featured**: Eye-catching promotional banners
- **Products**: Grid layout of popular products with ratings and prices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/danujaadikari/Mobile-Home-UI.git
cd Mobile-Home-UI
```

2. Install dependencies:
```bash
npm install
```

### Running the App

Start the Expo development server:
```bash
npm start
```

Then you can:
- Press `a` to open on Android emulator
- Press `i` to open on iOS simulator
- Scan the QR code with Expo Go app on your physical device

## Project Structure

```
Mobile-Home-UI/
├── components/          # Reusable UI components
│   ├── CategoryCard.js  # Category display card
│   ├── FeaturedCard.js  # Featured banner card
│   └── ProductCard.js   # Product display card
├── screens/             # App screens
│   └── HomeScreen.js    # Main home screen
├── App.js               # Root component
├── app.json             # Expo configuration
├── package.json         # Dependencies
└── README.md            # Documentation
```

## Customization

### Colors
You can customize the color scheme by modifying the colors in the respective component files:
- Primary blue: `#4A90E2`
- Red accent: `#E94B3C`
- Green: `#50C878`
- Orange: `#F39C12`

### Categories
Edit the `categories` array in [screens/HomeScreen.js](screens/HomeScreen.js) to add or modify categories.

### Products
Edit the `products` array in [screens/HomeScreen.js](screens/HomeScreen.js) to add or modify products.

### Featured Banners
Edit the `featured` array in [screens/HomeScreen.js](screens/HomeScreen.js) to customize promotional banners.

## Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **@expo/vector-icons** - Icon library
- **React Hooks** - State management

## Future Enhancements

- [ ] Add navigation to detail screens
- [ ] Implement search functionality
- [ ] Add filter options
- [ ] Connect to backend API
- [ ] Add shopping cart
- [ ] Implement user authentication
- [ ] Add animations and transitions
- [ ] Dark mode support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Danuja Adikari**
- GitHub: [@danujaadikari](https://github.com/danujaadikari)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

⭐ If you like this project, please give it a star on GitHub!
