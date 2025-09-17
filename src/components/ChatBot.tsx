import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "🙏 Namaste! I'm your monastery guide. Ask me about Sikkim's sacred monasteries, visiting hours, cultural practices, or travel packages!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Template responses for demo
  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("rumtek") || lowerInput.includes("monastery")) {
      return "🏛️ Rumtek Monastery is one of Sikkim's most significant monasteries! Built in 1966, it serves as the seat of the Karmapa Lama. Best visiting hours are 6 AM - 12 PM and 2 PM - 6 PM. The monastery houses precious relics and beautiful traditional architecture.";
    }
    
    if (lowerInput.includes("package") || lowerInput.includes("tour") || lowerInput.includes("booking")) {
      return "📦 We offer 3 amazing packages: Spiritual Journey (3 days, ₹15,000), Cultural Heritage (5 days, ₹28,000), and Photography Expedition (7 days, ₹45,000). Each includes accommodation, meals, transport, and guided tours. Would you like details about any specific package?";
    }
    
    if (lowerInput.includes("prayer") || lowerInput.includes("meditation") || lowerInput.includes("buddhist")) {
      return "🧘‍♂️ Buddhist monasteries welcome visitors for prayer and meditation. Morning prayers typically start at 6 AM. Please maintain silence, remove shoes before entering prayer halls, and dress modestly. Photography may be restricted in certain areas.";
    }
    
    if (lowerInput.includes("location") || lowerInput.includes("how to reach") || lowerInput.includes("direction")) {
      return "📍 Most monasteries are accessible by road from Gangtok. Rumtek is 24km from Gangtok, Pemayangtse is in Pelling (West Sikkim), and Enchey is just 3km from Gangtok city center. We can arrange transport in our packages!";
    }
    
    if (lowerInput.includes("time") || lowerInput.includes("hours") || lowerInput.includes("open")) {
      return "⏰ Most monasteries are open from 6 AM to 6 PM. Morning hours (6-9 AM) are best for experiencing prayer ceremonies. Afternoon visits (2-5 PM) offer great lighting for photography. Some monasteries close during lunch (12-2 PM).";
    }
    
    return "🙏 Thank you for your question! I can help you with information about monastery visiting hours, cultural practices, tour packages, locations, and Buddhist traditions. Feel free to ask about specific monasteries like Rumtek, Pemayangtse, or Enchey!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <CardTitle className="text-lg">Monastery Guide</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-sm opacity-90">Ask me about Sikkim monasteries!</div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.isBot
                          ? "bg-muted text-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot && <Bot className="h-4 w-4 mt-0.5 text-monastery-burgundy" />}
                        {!message.isBot && <User className="h-4 w-4 mt-0.5" />}
                        <div className="text-sm leading-relaxed">{message.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-monastery-burgundy" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-monastery-burgundy rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-monastery-burgundy rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-monastery-burgundy rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about monasteries..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-xs text-muted-foreground mt-2 text-center">
                Demo bot with template responses
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;