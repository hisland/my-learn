import { serve } from "https://deno.land/std@0.160.0/http/server.ts";
serve(async (req) => {
  console.log("req.url: ", req.url);
  const text = await req.text();
  console.log("text: ", text);

  return new Response(`
req.url: ${req.url}
text: ${text}
  `);
});
