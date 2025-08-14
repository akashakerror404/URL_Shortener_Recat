import React, { useState } from 'react';
import axios from 'axios';

function Short() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [recentLinks, setRecentLinks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://test.akashak.online/api/api-new', { original_url: url });
      setShortUrl(`https://test.akashak.online/api/${response.data.short_code}`);
      setRecentLinks([response.data, ...recentLinks.slice(0, 4)]);
      setError('');
    } catch (err) {
      setError('Error shortening URL. Please try again.');
      console.error(err);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2">URL Shortener</h1>
          <p className="text-gray-500">Make your long URLs short and manageable</p>
        </div>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-2">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your long URL"
              required
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            />
            <button 
              type="submit" 
              className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            >
              Shorten
            </button>
          </div>
        </form>

        {error && (
          <div className="mb-6 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
            <p>{error}</p>
          </div>
        )}

        {shortUrl && (
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-2">Short URL:</p>
            <div className="flex items-center gap-2">
              <a 
                href={shortUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 break-all"
              >
                {shortUrl}
              </a>
              <button 
                onClick={copyToClipboard} 
                className={`px-3 py-1 text-sm rounded ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}

        {recentLinks.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Links</h2>
            <ul className="space-y-3">
              {recentLinks.map((link) => (
                <li key={link.short_code} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <div className="flex justify-between items-center">
                    <a 
                      href={`https://test.akashak.online/api/${link.short_code}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      {link.short_code}
                    </a>
                    <span className="text-sm text-gray-500">Clicks: {link.clicks}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Short;