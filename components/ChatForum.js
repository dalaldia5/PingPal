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
  // console.log('<<<<clerkUser', clerkUser,slug);

  // Only call the hook at top level, pass tokenOrProvider null if token not ready
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: clerkUser?.token || null,

    userData: clerkUser
      ? {
          id: clerkUser.id,
          name: clerkUser.name,
          image: `https://getstream.io/random_png/?name=${clerkUser.name}`,
        }
      : null,
  });

  const [channel, setChannel] = useState(null);

  // Initialize channel when client and slug are ready
  useEffect(() => {
    if (!client || !clerkUser?.id || !slug) return;

    const channelId = decodeURIComponent(slug).replace(
      /[^A-Za-z0-9_!\-]/g,
      "-"
    );
    const channelName =
      decodeURIComponent(slug).replace(/[-_]/g, " ").toUpperCase() +
      " DISCUSSION ROOM";

    const initChannel = async () => {
      const ch = client.channel("messaging", channelId, {
        name: channelName,
        image: `https://getstream.io/random_png/?name=${slug}`,
        members: [clerkUser.id],
      });
      await ch.watch();
      setChannel(ch);
    };

    initChannel();
  }, [client, slug, clerkUser?.id]);

  if (!clerkUser?.token) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <button className="flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-white shadow-md hover:bg-red-700 transition h-25 w-72">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
          </span>
          Error
        </button>
      </div>
    );
  }
  if (!client) return <div>Setting up chat client...</div>;
  if (!channel) return <div>Loading chat channel...</div>;

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
