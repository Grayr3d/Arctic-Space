import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, Phone } from 'lucide-react';
import { Newsletter } from '../components/Newsletter';
import { Message } from '../components/chat/Message';
import { CallModal } from '../components/chat/CallModal';

const SARAH_IMAGE = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200";

interface ChatMessage {
  id: string;
  type: "user" | "assistant";
  content: string;
}

export function Assistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: "Thank you for your message. I'll help you with your inquiry about our houses. Would you like to know more about our models, pricing, or production process?"
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-12 gap-12 py-12">
          {/* Left Column - Chat Interface */}
          <div className="col-span-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b bg-white">
                <div className="flex items-center space-x-4">
                  <img
                    src={SARAH_IMAGE}
                    alt="Sarah"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-medium">Sarah</h2>
                    <p className="text-sm text-gray-500">Virtual Sales Assistant</p>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-6">
                    <MessageSquare className="w-12 h-12 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Welcome! How can I help you today?
                    </h3>
                    <p className="text-gray-500 max-w-md">
                      Ask me anything about our houses, pricing, or the buying process.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {messages.map((message) => (
                      <Message
                        key={message.id}
                        type={message.type}
                        content={message.content}
                        assistantImage={SARAH_IMAGE}
                      />
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question here..."
                    className="w-full px-6 py-4 bg-gray-50 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="col-span-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-medium mb-6">Need immediate assistance?</h2>
              <p className="text-gray-600 mb-8">
                Our sales team is available to help you design your perfect home. Get in touch with us directly.
              </p>
              <button
                onClick={() => setIsCallModalOpen(true)}
                className="w-full flex items-center justify-center space-x-2 bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Speak with Sales Team</span>
              </button>
              <div className="mt-8 pt-8 border-t">
                <div className="text-sm text-gray-500">Business Hours</div>
                <div className="mt-2 text-gray-900">Mon - Fri: 9:00 - 18:00</div>
                <div className="text-gray-900">Sat: 10:00 - 15:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isCallModalOpen && <CallModal onClose={() => setIsCallModalOpen(false)} />}

      <Newsletter />
    </div>
  );
}