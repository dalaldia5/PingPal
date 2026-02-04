import { StreamChat } from "stream-chat";
import { clerkClient, currentUser } from "@clerk/nextjs/server";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;

export async function GET() {
  try {
    const user = await currentUser();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user already has a token
    if (user.publicMetadata?.token) {
      return Response.json({ token: user.publicMetadata.token });
    }

    // If no token exists, create one
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const token = serverClient.createToken(user.id);

    // Update user metadata with the new token
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      publicMetadata: {
        token: token,
      },
    });

    console.log("Token generated for existing user:", user.id);

    return Response.json({ token });
  } catch (error) {
    console.error("Error in get-token route:", error);
    return Response.json(
      { error: error.message || "Failed to get token" },
      { status: 500 },
    );
  }
}
