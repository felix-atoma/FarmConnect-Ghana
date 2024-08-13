import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosClose, IoIosArrowBack, IoMdSend, IoMdHome, IoMdMail } from 'react-icons/io';

const SupportTeam = () => {
  const [isTopCardOpen, setIsTopCardOpen] = useState(false);
  const [isMainCardOpen, setIsMainCardOpen] = useState(false);
  const navigate = useNavigate();
  const userName = "User"; // Replace with actual user name

  const handleSupportClick = () => {
    setIsTopCardOpen(true);
  };

  const handleCloseTopCard = () => {
    setIsTopCardOpen(false);
    setIsMainCardOpen(false);
  };

  const handleOpenMainCard = () => {
    setIsMainCardOpen(true);
  };

  const handleSendMessage = () => {
    // Handle sending message
  };

  return (
    <div className="fixed bottom-4 right-4 p-4">
      {!isTopCardOpen && (
        <div className="flex items-center cursor-pointer" onClick={handleSupportClick}>
          <IoMdMail size={40} color="#337eff" />
          <span className="ml-2 text-lg font-semibold">Support Team</span>
        </div>
      )}

      {isTopCardOpen && (
        <div className="relative flex flex-col items-center">
          <div className="bg-white shadow-lg rounded-lg w-80 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Support Team</h2>
              <IoIosClose size={24} onClick={handleCloseTopCard} className="cursor-pointer" />
            </div>
            <button
              className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
              onClick={handleOpenMainCard}
            >
              Open Support
            </button>
          </div>

          {isMainCardOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
              <div className="bg-white shadow-lg rounded-lg w-80 p-6 relative">
                <div className="flex items-center mb-4">
                  <IoIosArrowBack size={24} onClick={() => setIsMainCardOpen(false)} className="cursor-pointer mr-2 text-gray-600 hover:text-gray-800 transition" />
                  <img src="/path/to/farmconnectghanalogo.png" alt="FarmConnect Ghana Logo" className="w-20 h-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Hello {userName} 👋</h3>
                <p className="text-gray-600 mb-4">How can we help you?</p>
                <textarea
                  placeholder="Type your message here..."
                  className="w-full border-2 border-gray-300 p-3 rounded-lg mt-2 mb-4 resize-none"
                  rows="5"
                />
                <div className="flex justify-between items-center mt-2">
                  <IoMdHome size={24} onClick={() => navigate('/')} className="cursor-pointer text-gray-600 hover:text-gray-800 transition" />
                  <IoMdSend size={24} onClick={handleSendMessage} className="cursor-pointer text-green-500 hover:text-green-600 transition" />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SupportTeam;
