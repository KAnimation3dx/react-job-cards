🚀 React Job Openings Cards

A clean, responsive React + Vite project that showcases job openings from top global tech companies such as Google, Meta, Apple, Amazon, Netflix, Microsoft, OpenAI, and more.
Each card displays a company logo, position title, job type, level, pay rate, location, and a sleek “Apply Now” button — designed to look modern and professional.


----------------------------------------------------------------------------------------------------------------------------------

🖼️ Preview

A snapshot of the layout:
Dark-themed background with minimal white cards.
Each card features:
Company logo,
Job title & post date,
Tags for job type and level,
Pay rate per hour,
Location,
Buttons: Save and Apply Now,
The design gives a dashboard-like feel — perfect for portfolio or recruitment UI projects.

----------------------------------------------------------------------------------------------------------------------------------

⚙️ Tech Stack

React 18+

Vite (for fast bundling and live development)

Remix Icons (for lightweight vector icons)

CSS3 (custom responsive styling)

Clearbit Logo API (for fetching company logos dynamically)

----------------------------------------------------------------------------------------------------------------------------------

React-Project-1-Card/
│
├── public/
│   ├── vite.svg
│
├── src/
    ├── components/
        ├── card.jsx

│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

----------------------------------------------------------------------------------------------------------------------------------

🪄 Features

✅ Beautiful card-based layout
✅ Responsive and flexible design
✅ Company logos fetched dynamically
✅ Modern icons with Remix Icon CDN
✅ Easy to extend — just add more job objects
✅ Perfect as a portfolio or beginner React project

---------------------------------------------------------------------------------------------------------------------------------

To run this project locally:

# Clone the repository
git clone https://github.com/your-username/react-job-cards.git

# Navigate into the project folder
cd react-job-cards

# Install dependencies
npm install

# Run the development server
npm run dev

Then open the local URL provided by Vite — typically:
👉 http://localhost:5173

----------------------------------------------------------------------------------------------------------------------------------

🧩 How It Works

The job openings are stored as an array of objects in your React component (each containing brand logo, name, post, pay, etc.).

The array is mapped into JSX to dynamically generate each job card.

The design uses flexbox and wraps cards neatly for all screen sizes.

Logos come from Clearbit’s domain-based logo API, ensuring accuracy and crisp visuals.

----------------------------------------------------------------------------------------------------------------------------------

🌍 Example Job Object
{
  brandLogo: "https://logo.clearbit.com/meta.com",
  name: "Meta",
  datePosted: "5 days ago",
  post: "Frontend Developer",
  tag1: "Full-time",
  tag2: "Junior Level",
  pay: "$58/hour",
  location: "Menlo Park, USA"
}


You can easily add, remove, or modify job listings.

----------------------------------------------------------------------------------------------------------------------------------

🎨 Styling Overview

Base color: #111 (dark background)

Card color: #fff

Font: Helvetica

Buttons styled with minimal shadows and rounded edges

Simple hover and box-shadow effects for interactive feel

__________________________________________________________________________________________________________________________________

🏗️ Future Enhancements (Optional)

Add search or filter (by company, location, or role)

Connect to a live job API (LinkedIn, Indeed, etc.)

Add animations using Framer Motion

Make cards clickable with expanded job details

Implement a “Save” feature using localStorage

__________________________________________________________________________________________________________________________________

✨ Author

Kishan — Student and Full Stack Web Developer
🔗 GitHub

__________________________________________________________________________________________________________________________________

📄 License

This project is licensed under the MIT License — feel free to use and modify it for your personal or professional projects.