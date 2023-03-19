import React, { useState } from "react";
import { SiChatbot } from "react-icons/si";

const ChatbotButton = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setShowDialog(!showDialog);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Send user's input to chatbot API and handle response
    setInputValue("");
  };

  return (
    <>
      <button
        className="fixed bottom-10 right-10 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 z-40"
        onClick={handleButtonClick}
      >
        <SiChatbot size={30} className="m-2" />
      </button>
      {showDialog && (
        <div className="fixed bottom-28 right-4 p-4 bg-white border border-gray-200 rounded-md shadow-md z-50 p-8">
            <h1 className="pb-4 text-xl font-semibold">Chat Bot !</h1>
          <p className="text- text-gray-800 mb-4">
            Hi, how can I help you?
          </p>
          <form onSubmit={handleFormSubmit} className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your query here"
              className="w-full border border-gray-300 rounded-full py-2 px-4 mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
