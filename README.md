# Calculator Pro

![Calculator Preview](https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=300&fit=crop&auto=format)

A professional calculator application with a clean, modern interface featuring all essential arithmetic operations. Built with Next.js 15 and Tailwind CSS for optimal performance and user experience.

## ✨ Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Advanced Controls**: Clear (C), All Clear (AC), and decimal point support  
- **Keyboard Support**: Full keyboard input for enhanced usability
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Error Handling**: Graceful handling of invalid operations and division by zero
- **Modern UI**: Clean interface with glass-morphism effects and smooth animations
- **Touch Friendly**: Large buttons optimized for touch interactions

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68d5c1d7e4b13704227fb64a&clone_repository=68d68013e4b13704227fb80f)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a calculator app with basic arithmetic operations and a clean interface

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready
- **Package Manager**: Bun

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd calculator-pro
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 Usage

### Mouse/Touch Controls
- Click any number or operation button to perform calculations
- Use the display to view current numbers and results
- Press "C" to clear the current entry
- Press "AC" to clear all calculations

### Keyboard Controls
- **Numbers**: 0-9 keys
- **Operations**: +, -, *, / keys
- **Equals**: Enter or = key
- **Clear**: Escape key (All Clear)
- **Delete**: Backspace key (Clear current entry)
- **Decimal**: . (period) key

## 🏗 Project Structure

```
calculator-pro/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Calculator.tsx
│   ├── Display.tsx
│   ├── Button.tsx
│   └── CosmicBadge.tsx
├── lib/
│   └── calculator-logic.ts
├── types/
│   └── calculator.ts
└── public/
    └── dashboard-console-capture.js
```

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Build the project: `bun run build`
2. Deploy the `out` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.
<!-- README_END -->