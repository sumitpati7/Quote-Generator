import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mt-20 mx-auto p-6 md:p-12 space-y-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-800">
        About Quote Generator
      </h1>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Description</h2>
        <p className="text-gray-700 text-base md:text-lg">
          The Quote Generator is a simple and responsive React webpage that
          displays quotes to the user. Built with <strong>React</strong>,{" "}
          <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
          <strong>JavaScript</strong>, it provides a clean interface where users
          can generate quotes based on selected categories. HTML structures the
          site, CSS (and Tailwind) enhance the design and responsiveness, and
          JavaScript adds interactivity by dynamically displaying quotes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
          <li>
            <strong>Quote Generation:</strong> A default quote is displayed
            initially. Users can change the category to generate quotes based on
            their preference.
          </li>
          <li>
            <strong>Font Change:</strong> Users can adjust font sizes (25–55px
            on desktop, 15–35px on mobile) for better readability.
          </li>
          <li>
            <strong>Generate Random:</strong> Generate a random quote from the
            selected category.
          </li>
          <li>
            <strong>Navigate Quotes:</strong> Next and Previous buttons allow
            easy navigation through quotes.
          </li>
          <li>
            <strong>Copy Button:</strong> Copy the quote and author to the
            clipboard for sharing.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Conclusion</h2>
        <p className="text-gray-700 text-base md:text-lg">
          This project combines React, CSS, and JavaScript to provide a
          responsive and interactive user experience. Migrating it to React +
          Vite has helped improve my skills in modern front-end development.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="text-gray-700 text-base md:text-lg">
          <strong>Sumit Pati</strong> -{" "}
          <a
            href="mailto:sumitpati7@gmail.com"
            className="text-purple-600 underline"
          >
            sumitpati7@gmail.com
          </a>
        </p>
        <p className="text-base md:text-lg">
          Check the project live:{" "}
          <a
            href="https://charming-griffin-c0c022.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 underline"
          >
            Quote Generator
          </a>
        </p>
      </section>
    </div>
  );
};

export default About;
