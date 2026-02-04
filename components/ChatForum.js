"use client";

import { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import React from "react";

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

  // Validate clerkUser data
  if (!clerkUser?.id || !clerkUser?.token || !clerkUser?.name) {
    console.error("Invalid clerkUser data:", clerkUser);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <button className="flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-white shadow-md hover:bg-red-700 transition h-25 w-72">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
          </span>
          Authentication Error - Please refresh
        </button>
      </div>
    );
  }

  // Only call the hook at top level, pass tokenOrProvider
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: clerkUser.token,
    userData: {
      id: clerkUser.id,
      name: clerkUser.name,
      image: `https://getstream.io/random_png/?name=${clerkUser.name}`,
    },
  });

  const [channel, setChannel] = useState(null);

  // Initialize channel when client and slug are ready
  useEffect(() => {
    if (!client || !clerkUser?.id || !slug) return;

    const channelId = decodeURIComponent(slug).replace(
      /[^A-Za-z0-9_!\-]/g,
      "-",
    );
    const channelName =
      decodeURIComponent(slug).replace(/[-_]/g, " ").toUpperCase() +
      " DISCUSSION ROOM";

    const initChannel = async () => {
      try {
        // First, ensure user is added to channel on the server
        await fetch("/api/join-channel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        });

        // Now get the channel
        const ch = client.channel("messaging", channelId);
        await ch.watch();
        setChannel(ch);
      } catch (error) {
        console.error("Error initializing channel:", error);
      }
    };

    initChannel();
  }, [client, slug, clerkUser?.id]);

  if (!client) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Setting up chat client...</p>
        </div>
      </div>
    );
  }

  if (!channel) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Loading chat channel...</p>
        </div>
      </div>
    );
  }

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;
