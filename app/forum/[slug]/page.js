import ChatForum from "@/components/ChatForum";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const slug = (await params).slug;
  let token = user.publicMetadata?.token;

  // If token is missing, generate one
  if (!token) {
    console.log("Token missing for user:", user.id, "- generating new token");

    const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
    const api_secret = process.env.STREAM_API_SECRET;
    const serverClient = StreamChat.getInstance(api_key, api_secret);

    token = serverClient.createToken(user.id);

    // Update the user's metadata with the new token
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      publicMetadata: {
        token: token,
      },
    });

    // Also ensure user exists in Stream Chat
    await serverClient.upsertUser({
      id: user.id,
      name: user.firstName,
      image: `https://getstream.io/random_png/?name=${user.firstName}`,
    });
  }

  return (
    <ChatForum
      slug={slug}
      clerkUser={{
        id: user.id,
        name: user.firstName,
        token: token,
      }}
    />
  );
}
