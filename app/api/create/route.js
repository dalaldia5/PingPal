import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
// const user_id = "user_32dkg9JrRcNIKyxVYqxTbwsDGLZ";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);

  const user = await request.json();
  // Create User Token
  const token = serverClient.createToken(user.data.id);
  console.log("A new user has been created:", token);
  const client = await clerkClient();

  await serverClient.upsertUser({
    id: user.data.id,
    name: user.data.firstName,
    image: `https://getstream.io/random_png/?name=${user.data.firstName}`,
  });
  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });
  const slugs = [
    "Python Programming",
    "JavaScript Development",
    "CPP Coding",
    "AI & Machine Learning",
    "Web Development",
    "Cybersecurity",
  ];

  // Use Promise.all to wait for all channels to be created
  await Promise.all(
    slugs.map(async (slug) => {
      const channelId = decodeURIComponent(slug).replace(
        /[^A-Za-z0-9_!\-]/g,
        "-",
      );
      const channelName =
        decodeURIComponent(slug).replace(/[-_]/g, " ").toUpperCase() +
        " DISCUSSION ROOM";
      const channel = serverClient.channel("messaging", channelId, {
        name: channelName,
        image: `https://getstream.io/random_png/?name=${slug}`,
        created_by_id: user.data.id,
      });
      await channel.create();
      await channel.addMembers([user.data.id]);
    }),
  );

  return Response.json({
    message: "Hello from the protected route!",
  });
}
