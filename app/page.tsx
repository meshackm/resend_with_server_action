import Sender from "@/components/client";
import { send } from "./actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sender sendEmail={send} />
    </main>
  );
}
