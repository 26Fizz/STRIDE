// ─── TOKENS ───────────────────────────────────────────────────────────────────
export const C = {
  ink:"#0d0d0b", ink2:"#1a1a16", ink3:"#0f1a0e",
  mist:"#f2efe8", mist2:"rgba(242,239,232,0.55)", mist3:"rgba(242,239,232,0.35)",
  grove:"#1a5c32", grove2:"#236b3a", grove3:"#2c8048",
  grovelt:"rgba(26,92,50,0.12)", live:"#22c55e",
  amber:"#c9920e",
};
export const F = { display:"'Cormorant Garamond',serif", body:"'DM Sans',sans-serif", mono:"'JetBrains Mono',monospace" };

// ─── DATA ─────────────────────────────────────────────────────────────────────
export const DEPLOYMENTS=[
  {id:1,month:"February 2025",cat:"Education",ngo:"Pratham Foundation",amt:18400,members:460,status:"complete",days:6,reach:"38 children",loc:"Rajasthan",desc:"Funded learning materials and remedial classes for 38 rural children across 3 villages in Barmer district."},
  {id:2,month:"January 2025",cat:"Health",ngo:"Jan Swasthya Sahyog",amt:15200,members:380,status:"complete",days:5,reach:"124 patients",loc:"Bilaspur, CG",desc:"Supported a mobile health camp serving 124 patients with diagnostics and essential medicines."},
  {id:3,month:"December 2024",cat:"Water",ngo:"Gram Vikas",amt:12800,members:320,status:"complete",days:7,reach:"2 villages",loc:"Odisha",desc:"Installed water purification units serving 2 villages with 340 households in Ganjam district."},
  {id:4,month:"November 2024",cat:"Nutrition",ngo:"Akshaya Patra",amt:11600,members:290,status:"complete",days:4,reach:"580 meals",loc:"Karnataka",desc:"Funded nutritious mid-day meals for 580 schoolchildren over one week in Hubli."},
  {id:5,month:"October 2024",cat:"Education",ngo:"Teach For India",amt:10400,members:260,status:"complete",days:6,reach:"52 students",loc:"Mumbai",desc:"Provided supplementary STEM education kits and tutoring for 52 underserved students."},
  {id:6,month:"March 2025",cat:"Education",ngo:"TBD",amt:14280,members:357,status:"collecting",days:null,reach:null,loc:null,desc:"Currently collecting. Deploys April 1st to a verified education NGO."},
];
export const CAUSES=[
  {id:"education",icon:"📚",name:"Education",color:"#1a5c32",desc:"Learning materials, teachers, and school infrastructure for children in rural India.",impact:"Every ₹500 funds one child's learning materials for a full month.",ngos:["Pratham Foundation","Teach For India","Room to Read"],months:8,human:"A child in a village with no library is in school today because 300 strangers showed up last month."},
  {id:"health",icon:"🏥",name:"Health",color:"#9b2c2c",desc:"Primary healthcare, medicines, and health camps where no hospital exists.",impact:"Every ₹1,000 funds diagnostics and medicine for 8 patients at a camp.",ngos:["Jan Swasthya Sahyog","Doctors For You","Smile Foundation"],months:5,human:"A family who couldn't afford a doctor got medicine from a camp funded by people like you."},
  {id:"water",icon:"💧",name:"Water",color:"#1a4f7a",desc:"Clean water infrastructure and sanitation systems in drought-prone regions.",impact:"Every ₹2,000 funds one purification unit serving 20 families.",ngos:["Gram Vikas","Safe Water Network","WaterAid India"],months:3,human:"Someone's daughter no longer walks 4 km for water. That's what a Stride month looks like."},
  {id:"nutrition",icon:"🌾",name:"Nutrition",color:"#7c4a0e",desc:"Meals, supplements, and nutrition programs for children under 5 and mothers.",impact:"Every ₹100 funds 10 nutritious meals for schoolchildren.",ngos:["Akshaya Patra","No Hungry Child","Annamrita"],months:2,human:"A child who arrived at school hungry left fed. Your ₹10 was part of that meal."},
];
export const FAQ_DATA=[
  {q:"Can I cancel anytime?",a:"Yes. Cancel from your dashboard, no questions asked. Your history and streak remain visible. No fees, no friction."},
  {q:"Where exactly does my ₹10 go?",a:"₹9 goes to the monthly impact pool. ₹1 (10%) covers the platform — servers, NGO verification, proof documentation. Always visible on your dashboard."},
  {q:"How is the NGO verified?",a:"We check registration certificate, 12A tax status, a minimum 12-month track record, and require a named individual at the NGO directly accountable for proof submission."},
  {q:"What if the NGO misses the proof deadline?",a:"We notify all members publicly within 24 hours. Two missed deadlines ends the partnership permanently."},
  {q:"Can I choose my cause?",a:"Causes rotate monthly. Category preference voting is a planned upcoming feature."},
  {q:"Is this a donation? Does it qualify for 80G?",a:"Your ₹10 is a weekly membership fee paid to Stride India, a registered MSME. It is not a charitable donation and does not qualify for tax deduction under Section 80G of the Income Tax Act, 1961."},
  {q:"What is lifestyle philanthropy?",a:"It's the idea that giving isn't an event — it's a trait. Like working out. A consistent, automatic, small act that compounds into real change. ₹10 every Monday. That's the whole philosophy."},
];
export const WEEKLY_RHYTHM=[
  {day:"Sunday",icon:"◈",color:"#1a5c32",title:"You find out first",copy:"The cause for the month lands before anyone else's Monday starts. No action required. Just awareness."},
  {day:"Monday",icon:"◉",color:"#1a4f7a",title:"₹10 moves quietly",copy:"Automatic. No reminder needed. Your streak increments. The pool grows by exactly one more voice."},
  {day:"Wednesday",icon:"◎",color:"#7c4a0e",title:"You see the pool grow",copy:"Three numbers arrive: total collected, your streak, deployment timeline. That's it. That's enough."},
  {day:"Month end",icon:"●",color:"#9b2c2c",title:"Proof lands in your hands",copy:"Not a newsletter. A receipt. Bank transfer screenshot, photos, field report. All public. Always."},
];
export const DEPLOY_STEPS=[
  {n:"01",day:"Day 31",title:"Pool closes",detail:"Last day of month. All membership fees tallied. Final amount locked. No exceptions."},
  {n:"02",day:"Day 1",title:"Transfer",detail:"Funds reach verified NGO. Bank transfer screenshot published the same day on public ledger."},
  {n:"03",day:"Days 1–7",title:"Proof window",detail:"NGO submits photos, activity report, and receipt within 7 days. Non-negotiable."},
  {n:"04",day:"Day 7–8",title:"Published",detail:"All proof on public ledger. Dashboards update. Every member gets notified."},
];
export const VERIFY_STEPS=[
  {n:"01",title:"Documentation",detail:"Registration certificate, 12A status, FCRA if applicable. All verified independently."},
  {n:"02",title:"Track record",detail:"Minimum 12 months of documented work, annual reports, verifiable on-ground impact."},
  {n:"03",title:"Human contact",detail:"A named individual at the NGO is personally accountable for every proof submission."},
  {n:"04",title:"Ongoing review",detail:"All partners reviewed every 6 months. Two missed proof deadlines ends the partnership. Permanently."},
];