import React, { useState } from 'react';
import sendIcon from '@/assets/sendIcon.svg';
import insertIcon from '@/assets/insertIcon.svg'
import refreshIcon from '@/assets/refreshIcon.svg'

interface ModalProps {
  onClose: () => void;
  open: boolean;
}

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<{ text: string, isUser: boolean }[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  if (!open) return null;

  const defaultReply = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }, { text: defaultReply, isUser: false }]);
      setInputValue('');
      setIsButtonDisabled(true);
    }
  };

  const handleInsert = () => {
    let placeholder = document.querySelector('.msg-form__placeholder')
    if (placeholder) {
      placeholder.remove()
      let textarea = document.querySelector('.msg-form__contenteditable > p');
      if (textarea) {
        textarea.textContent = defaultReply
        const sendButton = document.querySelector('.msg-form__send-button');
        if (sendButton)
          sendButton.removeAttribute('disabled');
        onClose()
      }
    }
  }

  return (
    <div className="z-[9999] fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[32rem] relative">
        <div className="rounded-lg pb-2 w-full">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.isUser ? 'justify-end pb-2' : ''}`}>
              <div className={`${message.isUser ? 'bg-gray-200' : 'bg-blue-200'} text-grey p-2 rounded-lg max-w-xs`}>
                <span className="text-gray-600 font-light">
                  {message.text}
                </span>
              </div>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Your Prompt"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
        <div className="flex justify-end mb-4">
          {isButtonDisabled && (
            <button
              className="border border-gray-500 text-gray-700 py-2 px-4 rounded flex items-center mr-2 hover:bg-gray-100 active:bg-gray-200"
              onClick={handleInsert}
            >
              <img src={insertIcon} alt="Send Icon" className="mr-2" />
              Insert
            </button>
          )}
          <button
            // className={`bg-blue-500 text-white py-2 px-4 rounded flex items-center ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            className={`bg-blue-500 text-white py-2 px-4 rounded flex items-center hover:bg-blue-600`}
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            <img src={isButtonDisabled ? refreshIcon : sendIcon} alt="Send Icon" className="mr-2" />
            {isButtonDisabled ? 'Regenerate' : 'Generate'}
          </button>
        </div>
      </div>
    </div >
  );
};

export default Modal;