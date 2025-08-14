import React from 'react';

function Testone() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">Test Components Page</h1>
        <p className="text-lg text-indigo-600">Use this page to test various UI components</p>
      </header>

   


      <footer className="mt-16 text-center text-gray-500">
        <p>Test Page - Use this to develop and test components</p>
      </footer>
    </div>
  );
}

export default Testone;