import { useState } from 'react';
import { Shuffle, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';

// Sample quotes database
const quotesData = {
  motivation: [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
  ],
  wisdom: [
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" }
  ],
  inspiration: [
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" }
  ],
  life: [
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" }
  ],
  success: [
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }
  ]
};

export default function QuoteDisplay() {
  const [genre, setGenre] = useState('motivation');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuotes = quotesData[genre];
  const currentQuote = currentQuotes[currentIndex];

  const handleGenreChange = (newGenre) => {
    setIsAnimating(true);
    setTimeout(() => {
      setGenre(newGenre);
      setCurrentIndex(0);
      setIsAnimating(false);
    }, 300);
  };

  const handleRandom = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * currentQuotes.length);
      setCurrentIndex(randomIndex);
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % currentQuotes.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + currentQuotes.length) % currentQuotes.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleCopy = () => {
    const textToCopy = `"${currentQuote.text}" - ${currentQuote.author}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="mt-20">
      <section id="generate" className="min-h-[calc(100vh-80px)] flex justify-center items-center p-4">
        <div className="bg-gradient-to-br from-purple-50 to-indigo-100 h-auto w-full max-w-4xl rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Genre Selector */}
          <div className="mb-8 flex justify-center">
            <select
              value={genre}
              onChange={(e) => handleGenreChange(e.target.value)}
              className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer outline-none border-2 border-purple-200 focus:border-purple-500"
            >
              <option value="motivation">Motivation</option>
              <option value="wisdom">Wisdom</option>
              <option value="inspiration">Inspiration</option>
              <option value="life">Life</option>
              <option value="success">Success</option>
            </select>
          </div>

          {/* Quote Display */}
          <div className={`min-h-[300px] flex flex-col justify-center items-center transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-center mb-8">
              <div className="text-6xl text-purple-300 mb-4">&quot;</div>
              <p className="text-2xl md:text-3xl text-gray-800 font-serif italic mb-6 px-4">
                {currentQuote.text}
              </p>
              <p className="text-xl text-purple-600 font-semibold">
                — {currentQuote.author}
              </p>
            </div>

            {/* Quote Counter */}
            <div className="text-sm text-gray-500 mb-6">
              {currentIndex + 1} / {currentQuotes.length}
            </div>

            {/* Control Buttons */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="bg-white hover:bg-purple-100 text-purple-600 p-4 rounded-full shadow-md hover:shadow-lg transition-all"
                title="Previous Quote"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Random Button */}
              <button
                onClick={handleRandom}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 font-semibold"
              >
                <Shuffle size={20} />
                Random Quote
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="bg-white hover:bg-purple-100 text-purple-600 p-4 rounded-full shadow-md hover:shadow-lg transition-all"
                title="Next Quote"
              >
                <ChevronRight size={24} />
              </button>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="bg-white hover:bg-green-100 text-gray-600 hover:text-green-600 p-4 rounded-full shadow-md hover:shadow-lg transition-all"
                title="Copy Quote"
              >
                {copied ? <Check size={24} className="text-green-600" /> : <Copy size={24} />}
              </button>
            </div>
          </div>

          {/* Genre Badge */}
          <div className="mt-8 flex justify-center">
            <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold shadow-md">
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
