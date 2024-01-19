"use client";
import axios from "axios";
import * as React from "react";

export default function Sender({
  sendEmail,
}: {
  sendEmail: (formData: FormData) => Promise<void>;
}) {
  const [email, setEmail] = React.useState("");

  async function send() {
    try {
      await axios.post("/api/send", { email }).then((res) => {
        console.log(res);
      });
    } catch (error) {}
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEmail("");
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={send} type="submit">
          Send
        </button>
      </form>
    </main>
  );
}
