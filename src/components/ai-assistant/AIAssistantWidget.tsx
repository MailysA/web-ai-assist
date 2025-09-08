import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ChatWidget } from './ChatWidget';

export const AIAssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className="mb-4 animate-slide-up">
          <ChatWidget onClose={() => setIsOpen(false)} />
        </div>
      )}
      
      {/* Toggle Button */}
      <button
        onClick={toggleWidget}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={isOpen ? 'Close AI Assistant' : 'Open AI Assistant'}
      >
        <div className="relative">
          {isOpen ? (
            <X className="h-6 w-6 text-primary-foreground transition-transform duration-200" />
          ) : (
            <MessageCircle className="h-6 w-6 text-primary-foreground transition-transform duration-200" />
          )}
        </div>
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-75" />
        )}
      </button>
    </div>
  );
};