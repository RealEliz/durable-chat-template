export type ChatMessage = {
  id: string;
  content: string;
  user: string;
  role: "user" | "assistant";
};

export type Message =
  | {
      type: "add";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "update";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "all";
      messages: ChatMessage[];
    };

export const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "JustJules",
  "Jeremia",
  "Grace",
  "Eli",
  "Jacob",
  "Judy",
  "Kevin",
  "Linda",
  "Mallory",
  "Nancy",
  "Oscar",
  "Delilah",
  "Quentin",
  "Randy",
  "Steve",
  "Trent27",
  "SkibidiFan27",
  "WalterDeezNuts",
  "Walter",
  "Xavier",
  "GenAlphaKid",
  "ErmKing2000",
];
