import { StreamChat } from "stream-chat";
import { currentUser } from "@clerk/nextjs/server";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;

export async function POST(request) {
  try {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await currentUser();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = await request.json();

    const channelId = decodeURIComponent(slug).replace(
      /[^A-Za-z0-9_!\-]/g,
      "-",
    );
    const channelName =
      decodeURIComponent(slug).replace(/[-_]/g, " ").toUpperCase() +
      " DISCUSSION ROOM";

    // Get or create the channel with the user as a member
    const channel = serverClient.channel("messaging", channelId, {
      name: channelName,
      image: `https://getstream.io/random_png/?name=${slug}`,
      created_by_id: user.id,
    });

    // Create channel if it doesn't exist
    await channel.create();

    // Add user as member
    await channel.addMembers([user.id]);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error in join-channel:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
