import React, { useState, useRef, useEffect } from 'react';
import { X, Bot } from 'lucide-react';
import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatWidgetProps {
  onClose: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! I\'m your AI assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Input validation and sanitization
  const validateAndSanitizeInput = (input: string): string | null => {
    // Length validation
    if (!input.trim() || input.length > 1000) {
      return null;
    }
    
    // Basic sanitization - remove dangerous characters
    return input.trim().replace(/[<>]/g, '');
  };

  // Sanitize API response content
  const sanitizeResponse = (response: string): string => {
    // Remove HTML tags and sanitize content
    return response.replace(/<[^>]*>/g, '').trim();
  };

  const handleSendMessage = async (content: string) => {
    // Validate and sanitize input
    const sanitizedContent = validateAndSanitizeInput(content);
    if (!sanitizedContent) {
      // Show error for invalid input
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        content: 'Please enter a valid message (maximum 1000 characters).',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: sanitizedContent,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Call the backend API with sanitized input
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: sanitizedContent,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();
      
      // Sanitize the API response
      const responseContent = sanitizeResponse(
        data.response || data.message || 'I received your message, but I\'m not sure how to respond right now.'
      );
      
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        content: responseContent,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('API Error:', error);
      
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        content: 'Sorry, I\'m temporarily unavailable. Please try again later.',
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[500px] w-[350px] flex-col rounded-2xl border border-widget-border bg-widget-bg shadow-2xl animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-2xl bg-gradient-primary px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <Bot className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground">AI Assistant</h3>
            <p className="text-xs text-primary-foreground/80">Always here to help</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close chat"
        >
          <X className="h-4 w-4 text-primary-foreground" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-2 bg-message-ai rounded-2xl px-4 py-3 max-w-[85%]">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse" />
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-widget-border p-4">
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};