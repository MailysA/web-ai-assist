import React from 'react';
import { Bot, User } from 'lucide-react';
import type { Message } from './ChatWidget';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const { content, isUser, timestamp } = message;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      <div className={`flex max-w-[85%] ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-2`}>
        {/* Avatar */}
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full flex-shrink-0 ${
            isUser 
              ? 'bg-primary ml-2' 
              : 'bg-muted mr-2'
          }`}
        >
          {isUser ? (
            <User className="h-4 w-4 text-primary-foreground" />
          ) : (
            <Bot className="h-4 w-4 text-muted-foreground" />
          )}
        </div>

        {/* Message Content */}
        <div className="flex flex-col">
          <div
            className={`rounded-2xl px-4 py-3 ${
              isUser
                ? 'bg-message-user text-primary-foreground rounded-br-md'
                : 'bg-message-ai text-foreground rounded-bl-md'
            }`}
          >
            <p className="text-sm whitespace-pre-wrap break-words">
              {content}
            </p>
          </div>
          
          {/* Timestamp */}
          <p className={`text-xs text-muted-foreground mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
            {timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};