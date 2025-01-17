"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useRef, useState } from "react";
import Message from "@/components/Message";
import { User } from "@supabase/supabase-js";
import SelfMessage from "./SelfMessage";

// Define the types for message data
interface Message {
  id: string;
  text: string;
  created_at: string;
  send_by: string;
}

const supabase = createClient();

const LiveChat = ({ user }: { user: User }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    const getMessagesRefresh = async () => {
      const { error, data } = await supabase.from("messages").select("*");
      if (!error) {
        setMessages(data);
      }
    };

    getMessagesRefresh();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const channel = supabase
      .channel("chat-room")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            payload.new as Message,
          ]);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []); //supabase listener

  const handleSendMessage = async (e: any) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setLoading(true);

    const { error } = await supabase
      .from("messages")
      .insert({ text: newMessage });

    setLoading(false);

    if (error) {
      console.error("Error sending message:", error);
    } else {
      setNewMessage("");
      console.log("message sent");
    }
  };

  return (
    <div className="w-full">
      <p className="text-xl mb-3 font-bold">Live Chat: </p>
      <div className="flex flex-col h-[47rem] min-w-[15rem] max-w-[75rem] bg-slate-900 shadow-lg border border-black rounded-md">
        <div className="flex-1 overflow-y-auto p-4 space-y-2 px-10">
          {messages.map((message: any) =>
            message.send_by == user.id ? (
              <SelfMessage text={message.text} user={user} key={message.id} />
            ) : (
              <Message
                user_id={message.send_by}
                text={message.text}
                key={message.id}
              />
            )
          )}
          <div ref={endOfMessagesRef}></div>
        </div>
        <div className="border-t border-black p-4 bg-black">
          <form
            className="flex items-center space-x-2"
            onSubmit={handleSendMessage}
          >
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-40 sm:w-full"
            />
            <button
              className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800 focus:outline-none disabled:opacity-50"
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
