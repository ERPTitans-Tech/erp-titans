import { after } from "next/server";

/**
 * Run an email job after the response has been sent, so the visitor sees "sent" instantly.
 * Retries once if the mail server hiccups; failures are logged for follow-up.
 */
export function sendInBackground(label: string, job: () => Promise<void>) {
  after(async () => {
    try {
      await job();
    } catch (first) {
      console.error(`${label}: first attempt failed, retrying`, first);
      await new Promise((r) => setTimeout(r, 2000));
      try {
        await job();
      } catch (second) {
        console.error(`${label}: retry failed`, second);
      }
    }
  });
}
