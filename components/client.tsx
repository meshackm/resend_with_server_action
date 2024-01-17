"use client";
import * as React from "react";


export default function Sender({sendEmail}: {sendEmail: (formData: FormData) => Promise<void>}) {
  const [name, setName] = React.useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
        />
        <button
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}
