# Example: growing weekday foot traffic for an independent bookstore

A real run of the procedure in a Claude Code session. The converged report is below, and the raw output of all 5 lens agents is at the bottom, unedited, so you can check how the convergence was done.

**Run notes:** the context for step [0] was given up front, and the step [1] How-Might-We question was used as written without a separate confirmation turn. The procedure was followed in the author's session; it was not invoked through a fresh install of the skill. Lens 5 output is a **Synthetic persona response**, not user research.

| | |
|---|---|
| Input | `/brainstorm how can my neighborhood bookstore get more people in on weekdays?` |
| Context given at step [0] | single-location independent bookstore · 2 staff (owner + 1 part-timer) · $500/month marketing budget · goal: +20% weekday visitors within 3 months · weekends already busy |
| Model | Claude Opus 5.5 in Claude Code, 5 general-purpose subagents dispatched in one message |
| Run date | 2026-10-11 |

> **How to read repeated ideas:** the "remote-worker day pass" came up in **all 5 lenses**, and the 30 raw ideas merged into about 12 distinct directions. You can read the repetition two ways. It's a sign the idea holds up from every angle, and it's also a cost, because those slots could have gone to new ideas. Convergence merges repeats into one idea and does not add points for repetition (this one ranked 9th), so agreement between lenses isn't mistaken for quality. The "Source lens" column keeps the agreement visible.

---

## HMW: How might an independent neighborhood bookstore get more people through the door on weekdays?

**Context:** independent bookstore · 2 staff · $500/month · +20% weekday visitors in 3 months. The store's current weekday visitor count was **not given** (assumed unknown).

> Score legend: **Desirability** · **Viability** · **Feasibility** · **Novelty** — 1–5 each. These are the assistant's judgments, not measurements.

### Top ideas at a glance

| Rank | Idea | Desirability | Viability | Feasibility | Novelty | Total | Confidence | Source lens |
|---|---|---|---|---|---|---|---|---|
| 1 | Be the venue, not the host: customer-led weekday groups | 4 | 4 | 5 | 3 | **16** | Medium | Strategist · Devil's advocate · Simulated user |
| 2 | Weekday-only drops (signed stock, blind-date books, secret shelf) | 3 | 4 | 4 | 4 | **15** | Low | Strategist · Designer · Devil's advocate · Simulated user |
| 3 | Weekday-morning toddler story time | 4 | 3 | 5 | 2 | **14** | Medium | Strategist · Designer · Devil's advocate · Simulated user · PM |
| 4 | Weekday loyalty multiplier (3× stamps Mon–Thu) | 3 | 4 | 5 | 2 | **14** | Medium | PM · Strategist |
| 5 | Text-ahead holds with weekday-only pickup | 3 | 4 | 4 | 3 | **14** | Medium | PM · Designer · Simulated user |
| 6 | Lunch-break escape + next-door deli partnership | 4 | 3 | 4 | 3 | 14 | Low | PM · Designer · Devil's advocate · Simulated user |
| 7 | Expiring same-day Instagram codes | 3 | 3 | 5 | 3 | 14 | Medium | Devil's advocate |
| 8 | Corporate lunchtime book club contracts | 3 | 5 | 3 | 3 | 14 | Low | Strategist |
| 9 | Remote-worker day pass / desk membership | 4 | 3 | 4 | 2 | 13 | Medium | **All 5** |
| 10 | Partner referral cards with per-partner codes | 3 | 3 | 4 | 3 | 13 | Medium | PM |

Ties at 14 are ordered by confidence, then by how directly the idea moves the weekday visitor count.

### Top ideas in detail

- **1. Be the venue, not the host** — *Summary*: give the back corner free on weekday evenings to groups that customers already run.
  - *Detail*: Two people cannot host weekly events without burning out, so the store lends space instead: a language exchange, a knitting-and-audiobook circle, a retirees' discussion club, writing groups. The only ask is that the organizer posts the meetup, and attendees get 10% off that night. Five recurring groups of about 8 people would add roughly 40 weekday visits a week, and each group brings people who would never have searched for a bookstore.
  - *Score rationale*: Desirability 4, because groups constantly need free, quiet space / Viability 4, because new faces come with almost no cost / Feasibility 5, because the store already has the space and staff only unlock it / Novelty 3, because venue lending is known but rare for bookstores.
  - *Key assumption*: there are at least 3–5 local groups who would meet here regularly.
  - *Next validation experiment*: post one "free weekday meeting space" listing on Nextdoor and Meetup and ask 5 existing customers who run clubs. **Pass = 3 groups book a recurring slot within 2 weeks.**

- **2. Weekday-only drops** — *Summary*: release scarce, desirable stock only on set weekdays, announced only to a weekday list.
  - *Detail*: Signed copies, a refreshed used bin, and 10 hand-wrapped "blind date" books go out at fixed times, such as Tuesday 11am or Thursday 4pm. They're announced by text to a list built at weekend checkout, and they're gone when they're gone. This works the way sneaker-shop drops do, and it gives a reason to come on a specific day that Amazon can't copy. Weekend regulars get an insider reason to come back midweek.
  - *Score rationale*: Desirability 3, because it appeals mostly to collectors and regulars / Viability 4, because it moves full-price stock / Feasibility 4, because it needs about one hour of prep plus a ~$50/month text tool / Novelty 4, because it's unusual for a bookstore.
  - *Key assumption*: enough customers care about scarce stock to change the day they visit.
  - *Next validation experiment*: run one Thursday blind-date drop announced only to the existing email or Instagram list. **Pass = 10 books gone by close, and at least half the buyers say the drop is why they came.**

- **3. Weekday-morning toddler story time** — *Summary*: Tuesday and Thursday 10:30am story time with stroller parking and a stamp card.
  - *Detail*: Parents of toddlers are freer on weekday mornings than on weekends and are looking for a warm place to go. A recurring session with a marked stroller corner and a floor mat, plus a free board book every 10 stamps, makes the store a default outing. Parent group chats spread the word without paid ads.
  - *Score rationale*: Desirability 4, because the need is real and recurring / Viability 3, because spending per visit is modest but children's books sell well / Feasibility 5, because the part-timer can run it from stock on the shelf / Novelty 2, because libraries already do this.
  - *Key assumption*: the local library's story time doesn't already meet the demand.
  - *Next validation experiment*: check the library schedule, then run 2 sessions in a time slot the library doesn't cover. **Pass = 8+ adults per session, with half coming back the next week.**

- **4. Weekday loyalty multiplier** — *Summary*: triple stamps Mon–Thu, single on weekends, with a bonus stamp for bringing a friend.
  - *Detail*: This moves the busy weekend crowd onto weekdays rather than finding new customers, and that still counts toward the weekday goal. It costs almost nothing, is promoted with a sign at the register and a bag stuffer, and shows results inside the first week. The friend bonus adds a small referral loop.
  - *Score rationale*: Desirability 3, because points are a familiar mild incentive / Viability 4, because it's nearly free and the effect shows in redemption data / Feasibility 5, because it only changes the existing card / Novelty 2, because it's common in retail.
  - *Key assumption*: some weekend customers have enough flexibility to switch days.
  - *Next validation experiment*: run it for 3 weeks while counting visitors with a door clicker. **Pass = the weekday share of stamps rises by 10 percentage points or more.**

- **5. Text-ahead holds with weekday-only pickup** — *Summary*: customers text a genre or mood, staff set aside two picks by the door, and pickup is on weekdays only.
  - *Detail*: Commuters who walk past tired at 6pm currently buy on their phone instead. A 90-second pickup at a "Reserved for you" shelf, plus Tuesday-only release-day preorders, turns a weekend browse into a guaranteed weekday visit. It can launch with a Google Form and a labeled shelf.
  - *Score rationale*: Desirability 3, because it's convenient for a specific group / Viability 4, because each pickup is a near-certain sale / Feasibility 4, because it adds staff picking time / Novelty 3, because it's a reasonable twist on click-and-collect.
  - *Key assumption*: enough nearby commuters would rather pick up in person than tap "buy" on their phone.
  - *Next validation experiment*: put a text number on the counter and bags for 3 weeks. **Pass = 15+ holds, with 80% or more collected.**

### Wildcards — cut but interesting

- **"Bad day? Prescription desk"** (Designer) — *Summary*: tell staff about your week and get a handwritten book "prescription," with pickup on weekdays only. *Detail*: it scored low on Viability because it's labor-heavy for 2 staff. But it's the most emotionally distinctive idea in the set and the most likely to be shared, so it could work as a monthly event even if it can't run daily.
- **"5 event formats in 5 weeks"** (PM) — *Summary*: run one cheap weekday-evening format per week and keep the 2 that bring people back within 14 days. *Detail*: this is less an idea than a way to choose between ideas. It's worth borrowing as the testing schedule for ideas 1–3.

### Assistant's recommendation (subjective judgment)

Start by buying a **$20 door clicker and counting weekday visitors for 2 weeks**. The goal is "+20%," but nobody knows the baseline, so no idea can be judged without one. Then run idea 4 (loyalty multiplier, almost free, results in week 1) and idea 1 (venue lending, almost no staff time) together, since neither uses much of the budget, and add idea 3 in a slot the library doesn't cover. Hold idea 2 until the text list exists, because it needs that list to work.

---

<details>
<summary><b>Raw output — all 5 lens agents (unedited)</b></summary>

### Lens 1 — Silicon Valley PM

**1. "Lunch Break Speed Read" 30-Minute Sprint (MVP: one chalkboard + one Instagram post)**
Every weekday from 12:00 to 1:00, the store runs a "30-minute escape": office workers get a reserved armchair, free drip coffee, and a staff-picked "read-in-one-lunch" short story or essay shelf. Run it as a 2-week test with a QR check-in to measure lift. It targets the nearby weekday daytime crowd, who are invisible on weekends, and gives them a repeatable daily reason to stop by.

**2. Weekday-Only Loyalty Multiplier (Growth Loop: Punch Card x3 Mon–Thu)**
A simple stamp card (or free Square/Stamp Me loyalty app) gives triple stamps on Mon–Thu visits and a bonus stamp for bringing a friend who signs up. The reward is a free book at 10 stamps. This shifts existing weekend loyalists to weekdays, which is cheaper than finding new customers, and the friend stamp builds a referral loop. A/B it against the current card and track the share of redemptions that happen on weekdays.

**3. "Hold Shelf Drop" — Weekday Pickup for Online Pre-Orders**
Customers reserve books online or by DM, but holds can only be picked up Mon–Fri. New-release preorders also land only on Tuesdays (industry release day), with a "first 20 pickups get a signed bookplate or tote" hook. This turns weekend browsers into a guaranteed second weekday visit and builds a Tuesday ritual. Ship it in a weekend with a Google Form and a shelf labeled "Your Holds."

**4. Remote Worker "Office Hours" Membership ($15/month)**
Sell a small cap of 15 memberships for remote workers and freelancers: weekday seating at 2–3 tables from 9 to 3, Wi-Fi, bottomless coffee, and 10% off books. Validate demand with a landing page and a $50 Instagram/Nextdoor ad before buying any furniture. Members are daily weekday regulars who make the store feel busy, which draws walk-ins, and they buy books on impulse. Their posts work as free word-of-mouth.

**5. Micro-Event Fast Experiments: 5 Formats in 5 Weeks**
Run one cheap 45-minute weekday-evening event per week, each a different format: silent reading party, blind-date-with-a-book swap, local author Q&A, "bring your worst book" roast night, and toddler story time on Wednesday mornings. Each costs under $50 in snacks and promo. Track attendance and how many people come back within 14 days, then keep the top 2 formats as weekly fixtures. This is a search for product-market fit, and the winning formats become permanent weekday anchors.

**6. Neighborhood Partner Referral Network (Cross-Promo Loop)**
Partner with 5 nearby weekday-traffic businesses: a café, gym, dry cleaner, pediatrician waiting room, and coworking space. Each gets a stack of "Show this card Mon–Fri for a free bookmark + 15% off" coupons with unique codes, so the store can track which partner drives visits. In return, the store displays the partners' flyers and promotes them. It borrows foot traffic that already exists on weekdays for about $100 in printing, and the per-partner codes show where to double down by week 4.

### Lens 2 — Enterprise strategist

**1. "Office Hours" Remote-Worker Day Pass**
Turn the store's slowest weekday hours (Tue–Thu, 10am–3pm) into a quiet co-working zone: a $5 day pass gets a seat, Wi-Fi, outlets, and refillable coffee, and the full $5 counts as credit toward any book purchase. Most neighborhoods now have plenty of remote and hybrid workers who want a "third place" on weekdays. Each pass holder is a 4–6 hour visitor who browses all day, and filling just 8 seats a day already adds about 40 weekday visits a week.

**2. Corporate & Institutional Book Club Contracts**
The owner pitches 10–15 nearby employers, clinics, law firms, and schools on a hosted monthly lunchtime book club held in-store on a weekday. The organization pays for the books in bulk at a 10% discount, and staff pick up copies and meet in the store. This turns relationships the store already has into recurring, scheduled weekday traffic with predictable revenue. Low risk, because each contract sells the books before the event happens.

**3. Weekday-Only Loyalty Multiplier**
Retune the existing (or a new, free) punch-card or app loyalty program so that Mon–Fri purchases earn 3x points and weekend purchases earn 1x. Promote it on the bag stuffer, receipt, and a sign at the register to the weekend crowds you already have. This moves demand rather than creating it: you get a measurable shift of loyal weekend customers into weekdays, with almost no marketing spend and no added staff work.

**4. School & Daycare Pickup-Window Story Hour**
Partner with the 2–3 closest elementary schools and daycares to run a free 3:15–4:00pm weekday story-and-snack session aimed at parents who are killing time around pickup. Distribution costs nothing because schools put it in their parent newsletters. Every child brings 1–2 adults, it repeats every week, and the children's section has strong attach rates. One part-timer can run it from inventory already on the shelf.

**5. Inventory-as-Venue: Weekday Night Rentals to Community Groups**
Rent the space to writing groups, language exchanges, chess clubs, therapists' support circles, and local nonprofits on Mon–Thu evenings. Price it at "minimum $50 in-store purchase per session" instead of a cash fee. The store's biggest unused asset, floor space after 6pm, becomes a pipeline of new faces who would never have searched for a bookstore. Spend $150/month of the budget on Meetup and Nextdoor listings to fill the calendar.

**6. Hyperlocal "Weekday Drop" Release Calendar**
Hold signed copies, staff-pick restocks, used-book bin refreshes, and limited indie-press titles for set weekday slots ("New Used Bin: Tuesdays 11am", "Signed Stock: Thursdays"), and announce them through an SMS/email list built at weekend checkout. Scarcity tied to a fixed weekday trains collectors and regulars to visit at specific times, the way sneaker shops do. It costs almost nothing beyond the owner's existing buying relationships and about $50/month for an SMS tool.

### Lens 3 — Designer (IDEO human-centered)

**1. The Lunch-Hour Escape Pass**
Office workers nearby often have a 45-minute lunch with nowhere quiet to go. The store sets aside a "Quiet Corner" with 6 seats and puts out a free pot of tea from 12:00 to 1:30 Mon–Fri. It's promoted with a $150 flyer and sticker drop at the 10 nearest office lobbies and co-working spaces. A punch card ("5 lunches = a free paperback") turns a one-time escape into a weekday habit.

**2. "Bad Day? Prescription Desk"**
Some people want a bookstore because of how they feel on a rough Tuesday, not because they're looking for a particular title. A small desk sign reads "Tell us your week, we'll prescribe a book." The owner or part-timer writes a handwritten "prescription" slip, and walk-ins and Instagram DMs get the same treatment, with pickup available only Mon–Fri. The emotional hook gives people a reason to come in midweek and makes the visit feel personal enough to share.

**3. School-Pickup Waiting Room**
Parents waiting for 3pm pickup sit idle in cars or on sidewalks. Every weekday from 2:30 to 4:00, the store runs a 20-minute picture-book read-aloud for little siblings, and parents get a free coffee voucher from a partner café next door (split cost about $100/month). Parents come back daily because their routine already brings them past the door, and kids start asking to stop in.

**4. Commuter "Chapter One" Reservation Shelf**
A commuter's pain is that they finish a book on the train and have nothing for tomorrow. Customers text a short list of genres to a store number, and staff pull 3 options into a named paper bag on a "Reserved for You" shelf by the door, ready for pickup before 9am or after 5pm. Opening early 2 weekdays a week (staffed by the part-timer) catches the morning crowd. Pickups take 30 seconds, so the habit is easy to keep.

**5. Weekday-Only Secret Shelf**
Weekend crowds make browsing stressful, so the store turns quiet weekdays into a perk. A curtained "Secret Shelf" of signed copies, staff blind-date books, and remainder finds is uncovered only Mon–Fri. Its contents are announced only in a weekly Monday text or email list. The scarcity and the feeling of being an insider encourage repeat weekday visits and move some weekend regulars to calmer days.

**6. Remote Worker "Office Hours" Day Pass**
Remote workers are lonely and tired of their kitchen table, and they're free on weekdays. On Tue/Wed/Thu from 9 to 12, the store offers 4 laptop seats with outlets and Wi-Fi for a $5 day pass that can be spent as store credit. A shared "what I'm reading" whiteboard gives regulars a light way to talk to each other. These are new weekday visitors every week who would otherwise never show up before Saturday, and a few hours a day can become a community of regulars.

### Lens 4 — Devil's advocate

**1. "The Empty Store Is the Product": Sell Weekday Quiet as a Paid Focus Room**
Failure mode: weekday events usually flop because people with jobs can't come, and a quiet store looks dead, which keeps walk-ins away. Flip it: sell the quiet. Run a "Silent Hours" focus club, Tue–Thu 10am–3pm, for remote workers. $8 gets a seat, Wi-Fi, bottomless drip coffee, and a $5 book credit. Cap it at 12 seats so it feels exclusive. A full table of laptops in the window also tells passersby the store is alive.

**2. "We Can't Compete With Amazon on Price, So Compete on Time-Sensitivity"**
Failure mode: discounts and loyalty punch cards fail because Amazon is always cheaper and punch cards don't create urgency on a particular day. Flip it: give weekday visits a perk that only exists in person on that day. Every Wednesday, 10 "blind date" books go out wrapped in paper with only a handwritten one-line hook. They're $12 each, it's first come first served, and they're gone by close. It costs almost nothing, staff can make the batch in an hour, and it's shareable on Instagram.

**3. "Two Staff Can't Run Events, So Let Customers Run Them"**
Failure mode: an owner plus one part-timer will burn out hosting weekday programs, and the program gets cancelled by week 6. Flip it: become the venue, not the host. Give the store's back corner free on weekday evenings to customer-led groups (a language exchange, a knitting-and-audiobook circle, a retirees' history club, parents' stroller book club). The only ask is that the organizer posts the meetup and that attendees get 10% off that night. Aim for 5 recurring groups of 8 people each, which adds about 40 weekday visits a week with almost no extra staff time.

**4. "Weekday Customers Don't Exist Near Us, So Import Them"**
Failure mode: neighborhood foot traffic falls off on weekdays because residents commute out, so local flyers reach no one. Flip it: go after the people who are around on weekdays, like retirees, stay-at-home parents, shift workers, students, and nearby office staff on lunch break. Use $300 of the budget on a lunch partnership with the 3 nearest cafés or offices. Anyone who shows a same-day café receipt or work badge between 11:30 and 2 gets a free short story printed on receipt paper and a tote on their third visit.

**5. "Kids' Story Time Only Draws on Weekends, So Make It a Weekday Ritual for Under-5s"**
Failure mode: family events get packed onto Saturdays, but parents of toddlers are actually freer on weekday mornings and have nowhere warm to go. Flip it: hold a "Tuesday & Thursday 10am Toddler Story + Stay" with a reading, a stamp passport (10 stamps gets a free board book), and the store as the free indoor space where parents linger. Parents of toddlers are a tight word-of-mouth group, so a few local parent group chats can fill it without ads.

**6. "Social Media Posts Get Likes, Not Visits, So Make the Post Expire"**
Failure mode: the bookstore's Instagram gets engagement from people who never come in, especially on weekdays, and a $500 budget can't buy reach. Flip it: post weekday-only codes that disappear, like "Today Only Shelf" Stories at 9am. The first 5 people who say the secret word at the counter before 6pm get a staff-pick book at half price. Track redemptions per day so it doubles as a free way to measure weekday traffic. If a day falls flat, swap the hook the next week instead of spending more money.

### Lens 5 — Simulated target user (a simulation, not user research)

**1. "Office Hours" Desk Pass for Remote Workers**
For Dana, a 34-year-old remote worker who says, "I'd love to get out of my apartment, but cafés are loud, they kick you out after one latte, and a bookstore has nowhere to sit." The idea is a $15/month weekday "Quiet Desk" pass: 4 to 6 seats by the window, Wi-Fi, an outlet strip and bottomless drip coffee from 10am to 3pm, Mon to Fri, plus 10% off books. Dana stops working from her couch and shows up three days a week, and her coworker usually tags along.

**2. Tuesday Toddler Story & Stroller Parking**
For Mia, a parent with a 2-year-old, who says, "Weekends are a zoo and my kid melts down in crowds. Weekday mornings are when we actually need somewhere to go, but stores aren't built for strollers." The idea is a recurring 10:30am weekday storytime with a marked stroller-parking corner and a floor mat. Parents get a punch card, and every 5th visit earns a free board book. Mia currently goes to the library or the mall play area. This makes the bookstore her default weekday outing and brings 8 to 12 parents in a cluster.

**3. Retiree "Book Elders" Morning Club with Rotating Picks**
For Harold, a 71-year-old retiree, who says, "I have all the time in the world on weekdays, but I don't want to be the only old guy browsing alone. I'd rather sit with people." The idea is a free Wednesday 10am discussion circle where retirees take turns choosing the book and leading it, with a standing 10% off the pick. Harold now spends his mornings watching cable news. The club gives him a reason to dress up and leave the house, and he brings his wife's friends.

**4. Commuter "Grab-and-Go Shelf" with Text-Ahead Holds**
For Raj, a commuter, who says, "I pass the store at 6:15pm, but I'm tired, I don't know what I want, and browsing takes too long, so I just buy on my phone on the train." The idea is a 7:30–8:30am and 5:30–7pm window: Raj texts a genre or mood ("thriller, short"), and staff set aside two picks at the counter by the door. A "15-minute reads" shelf of novellas and essays also sits there. He swaps the Amazon tap for a 90-second stop, and it becomes part of his weekly routine.

**5. Lunch-Break "Blind Date with a Book" + Sandwich Partner Deal**
For Priya, an office worker at a nearby clinic, who says, "My lunch is 40 minutes. I eat at my desk because there's nothing worth walking to." The idea is to team up with the deli next door: show the deli receipt between 12 and 2 on a weekday, and the wrapped "blind date" paperback is $8 instead of $15. Each one is wrapped in brown paper with three handwritten clue words. It costs almost no ad money and becomes a social-media moment ("unwrapped my lunch book"). The clinic staff start a group-chat ritual of comparing their blind dates.

**6. Neighborhood "Weekday Regulars" Wall & Secret Mid-Week Drop**
For the mix of all of them (Dana, Harold, Mia), who share one feeling: "Weekends feel like the store is for tourists. Weekdays could feel like it's ours." The idea is a polaroid wall of weekday regulars. Each visit earns a stamp on a weekday-only card, and a full card adds your photo to the wall and gets you a staff "blind recommendation." Signed editions, a small batch of new arrivals or a mystery tote drop only on Thursdays at 4pm, and the owner announces them by text to the weekday list only. That gives the weekday crowd insider status and a reason to come back on a set day, with no help needed from the weekend crowd.

</details>
