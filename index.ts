import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function main() {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of low latency LLMs",
      },
    ],
    model: "llama2-70b-4096", //"mixtral-8x7b-32768",
  });
  console.log(completion.choices[0]?.message?.content || "");
}

main();
