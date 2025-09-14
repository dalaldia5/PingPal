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
  const apiKey = "eeqfxbfs4hvb";

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

  if (!clerkUser?.token) return <div>Loading user token...</div>;
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
