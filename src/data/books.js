// src/data/books.js

export const FIVE_BOOKS_DATA = [
  { id: 'subtle_art', title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", hook: "Focus on what truly matters to live a good life. It's about accepting struggle.", color: 'bg-yellow-500', summary: [ { type: 'heading', content: "The Backwards Law" }, { type: 'quote', content: "The acceptance of your negative experience is itself a positive experience." }, { type: 'text', content: "Manson argues that happiness comes from solving problems and accepting the inevitability of suffering, not avoiding it." } ] },
  { id: 'atomic_habits', title: "Atomic Habits", author: "James Clear", hook: "Tiny changes, remarkable results. Build better systems for a better life.", color: 'bg-green-500', summary: [ { type: 'heading', content: "The 4 Laws of Behavior Change" }, { type: 'quote', content: "Every action you take is a vote for the type of person you wish to become." }, { type: 'text', content: "Focus on the system, not the goals. Small improvements (1% better every day) compound dramatically over time." } ] },
  { id: 'deep_work', title: "Deep Work", author: "Cal Newport", hook: "Focus rules for success in a distracted world by prioritizing concentration.", color: 'bg-blue-500', summary: [ { type: 'heading', content: "The Deep Work Hypothesis" }, { type: 'quote', content: "Clarity about what matters provides clarity about what does not." }, { type: 'text', content: "To master Deep Work, you must embrace boredom, schedule every minute of your day, and quit social media." } ] },
  { id: 'ikigai', title: "Ikigai: The Japanese Secret to a Long and Happy Life", author: "García & Miralles", hook: "Finding your reason for being and achieving flow in life.", color: 'bg-red-500', summary: [ { type: 'heading', content: "The Ikigai Venn Diagram" }, { type: 'quote', content: "The secret to a long life is not to worry, to have good habits, and to nurture your friendships every day." }, { type: 'text', content: "The book emphasizes staying active, having a purpose, eating in moderation, and living in the present moment." } ] },
  { id: 'seven_habits', title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", hook: "Timeless lessons in personal change for private and public victory.", color: 'bg-purple-500', summary: [ { type: 'heading', content: "Habit 1: Be Proactive" }, { type: 'quote', content: "Sow a thought, reap an action; sow an action, reap a habit; sow a habit; reap a character; sow a character, reap a destiny." }, { type: 'text', content: "Covey introduces the concept of the Circle of Concern versus the Circle of Influence. Focus your energy on what you can control." } ] },
  {
  id: 'three_min_rule',
  title: 'The 3-Minute Rule',
  author: 'Unknown',
  hook: 'Beat procrastination with tiny 3-minute actions.',
  color: 'bg-teal-500',
  summary: [
    { type: 'heading', content: 'Start Small' },
    { type: 'text', content: 'If a task takes less than 3 minutes, do it immediately.' },
    { type: 'text', content: 'This builds momentum and reduces procrastination.' },
    { type: 'quote', content: '"Small steps lead to big results."' }
  ]
}
  


];

export const DEFAULT_BOOK_ID = FIVE_BOOKS_DATA[0].id;

export const BOOK_MAP = FIVE_BOOKS_DATA.reduce((acc, book) => {
    acc[book.id] = book;
    return acc;
}, {});