import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";


export const allLinks = [
  'https://google.com',
  'https://facebook.com',
  'https://twitter.com',
  'https://instagram.com',
  'https://linkedin.com'
]

export async function GET() {
  for (let i = 0; i < 1000; i++) {
    const id = Math.floor(Math.random() * allLinks.length)
    await redis.hincrby(`impr:${allLinks[id]}`, `shop${Math.ceil(Math.random() * 1000)}`, 1)
  }
  return NextResponse.json({ data: "done" });
}