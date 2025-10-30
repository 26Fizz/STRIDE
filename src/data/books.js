// src/data/books.js
// 📚 Centralized Book Data for MondayReads
// ➤ Just copy any book block below to add a new book!
// ➤ No code changes needed anywhere else — everything auto-updates.

export const FIVE_BOOKS_DATA = [
  {
    id: "subtle_art",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    color: "bg-yellow-500",
    hook: "Focus on what truly matters to live a good life. It's about accepting struggle.",
    summary: [
      { type: "heading", content: "The Backwards Law" },
      { type: "quote", content: "The acceptance of your negative experience is itself a positive experience." },
      {
        type: "text",
        content:
          "Manson argues that happiness comes from solving problems and accepting the inevitability of suffering, not avoiding it.",
      },
    ],
  },

  {
    id: "atomic_habits",
    title: "Atomic Habits",
    author: "James Clear",
    color: "bg-green-500",
    hook: "Tiny changes, remarkable results. Build better systems for a better life.",
    summary: [
      { type: "heading", content: "The 4 Laws of Behavior Change" },
      { type: "quote", content: "Every action you take is a vote for the type of person you wish to become." },
      {
        type: "text",
        content:
          "Focus on the system, not the goals. Small improvements (1% better every day) compound dramatically over time.",
      },
    ],
  },

  {
    id: "deep_work",
    title: "Deep Work",
    author: "Cal Newport",
    color: "bg-blue-500",
    hook: "Focus rules for success in a distracted world by prioritizing concentration.",
    summary: [
      { type: "heading", content: "The Deep Work Hypothesis" },
      { type: "quote", content: "Clarity about what matters provides clarity about what does not." },
      {
        type: "text",
        content:
          "To master Deep Work, you must embrace boredom, schedule every minute of your day, and quit social media.",
      },
    ],
  },

  {
    id: "ikigai",
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    author: "García & Miralles",
    color: "bg-red-500",
    hook: "Finding your reason for being and achieving flow in life.",
    summary: [
      { type: "heading", content: "The Ikigai Venn Diagram" },
      {
        type: "quote",
        content:
          "The secret to a long life is not to worry, to have good habits, and to nurture your friendships every day.",
      },
      {
        type: "text",
        content:
          "The book emphasizes staying active, having a purpose, eating in moderation, and living in the present moment.",
      },
    ],
  },

  {
    id: "seven_habits",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    color: "bg-purple-500",
    hook: "Timeless lessons in personal change for private and public victory.",
    summary: [
      { type: "heading", content: "Habit 1: Be Proactive" },
      {
        type: "quote",
        content:
          "Sow a thought, reap an action; sow an action, reap a habit; sow a habit; reap a character; sow a character, reap a destiny.",
      },
      {
        type: "text",
        content:
          "Covey introduces the concept of the Circle of Concern versus the Circle of Influence. Focus your energy on what you can control.",
      },
    ],
  },

  {
  id: "cant_hurt_me",
  title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
  author: "David Goggins",
  color: "bg-amber-600",
  hook: "Unleash your inner potential by mastering pain, discipline, and mental toughness.",
  summary: [
    { type: "heading", content: "The 40% Rule" },
    { type: "quote", content: "When your mind tells you you're done, you're only 40% done." },
    { type: "text", content: "Goggins introduces the 40% rule — most people quit when they’ve only used 40% of their capability. The mind is the real barrier, not the body." },
    { type: "heading", content: "Callous the Mind" },
    { type: "text", content: "Just like your hands toughen with work, your mind can toughen through adversity. Lean into discomfort to build resilience." },
    { type: "quote", content: "You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential." },
    { type: "heading", content: "Accountability Mirror" },
    { type: "text", content: "Goggins used a mirror to confront himself daily with his flaws and goals — a brutal, honest self-check that built discipline." }
  ]
},

  {
    id: "three_min_rule",
    title: "The 3-Minute Rule",
    author: "Unknown",
    color: "bg-teal-500",
    hook: "Beat procrastination with tiny 3-minute actions.",
    summary: [
      { type: "heading", content: "Start Small" },
      { type: "text", content: "If a task takes less than 3 minutes, do it immediately." },
      { type: "text", content: "This builds momentum and reduces procrastination." },
      { type: "quote", content: '"Small steps lead to big results."' },
    ],
  },
];

// 🪄 Easy defaults and mappings — don’t touch below
export const DEFAULT_BOOK_ID = FIVE_BOOKS_DATA[0].id;

export const BOOK_MAP = Object.fromEntries(FIVE_BOOKS_DATA.map((book) => [book.id, book]));
