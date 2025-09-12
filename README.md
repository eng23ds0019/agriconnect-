# AgriConnect - Digital Agricultural Companion

**AgriConnect** is a comprehensive digital platform designed to empower farmers by providing essential agricultural services, including crop selling, disease detection, labour hiring, crop guidance, and agri shop services. This web application simplifies agricultural tasks using modern web technologies and integrations.

---

## 🌾 Features

- **Sell Crop**: Farmers can list crops for sale with price suggestions and upload images.
- **Hire Labour**: Farmers can find and hire agricultural labourers nearby or register as labourers.
- **Loan Management**: Manage agricultural loans, apply for public or private loans, and track applications.
- **Disease Detection**: Farmers can upload images or use live camera capture to detect crop diseases using AI integration.
- **Crop Guidance**: Provides recommendations and best practices based on the season and crop type.
- **Agri Shop**: Explore tools, seeds, and equipment tailored for farmers.
- **Chatbot Assistant**: Interactive chatbot to assist farmers in multiple languages (Hindi, Kannada, English).
- **Real-time Mandi Prices**: Farmers can fetch live mandi prices to help them set competitive prices.

---

## 🚀 Project Structure

- `index.html`: Homepage of the platform.
- `sell.html`, `labour.html`, `loan.html`, `booking.html`, `page.html`: Various functional pages of the application.
- `server.js`: Node.js server responsible for fertilizer image analysis via API integration.
- `styles.css`: Global styles for the project.
- `images/`: Folder containing project-related images.
- `data/mandi_price.json`: Sample dataset for mandi prices.
- `public/`: Static resources served for the web app.

---

## ⚡ Setup Instructions

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/agriconnect.git
    cd agriconnect
    ```

2. **Install dependencies (for server)**
    ```bash
    npm install express node-fetch cors
    ```

3. **Run the Server**
    ```bash
    node server.js
    ```

4. **Open in Browser**
    Open `index.html` in your browser to start using the app.

---

## 🛠️ Technologies Used

- HTML, CSS, JavaScript
- Tailwind CSS for styling
- Node.js + Express for server-side API
- LocalStorage for front-end data persistence
- Gemini API for AI features
- Firebase for backend services

---

## 📄 Sample Usage

- Farmers can register as labourers using `labour.html` and manage their profiles.
- Loan applications are handled via `loan.html`, with public/private options.
- Farmers can book labourers from `booking.html`.
- Real-time interactions powered by the chatbot in `page.html`.

---

## 📞 Support

If you encounter any issues or have questions, please open an issue on this repository.

---

## 🔗 Live Demo

[Your Live Demo URL here]

---

## 🎉 Contribution

Feel free to fork this project and send pull requests for improvements or additional features.

---

© 2025 AgriConnect. Empowering Farmers with Digital Solutions.
