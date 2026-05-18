---
title: 'From Biochemistry to BigQuery: Building a Mental Model of Data Systems'
date: '2026-05-18'
excerpt: "Everything is an analogy: why comparing a Dataflow pipeline bottleneck to a biochemical rate-limiting step helped me finally 'click' with data engineering."
---

![Abstract conceptual illustration bridging biochemical pathway symbols and cloud data architecture](/blog/biochemistry-to-bigquery.webp)

&nbsp;

Have you ever learned something so deeply that you suddenly started noticing it everywhere? 👀

When I learn new technologies or programming concepts, I often start seeing them everywhere — even in simple everyday situations.

&nbsp;

💡 A few years ago, while learning JavaScript array methods like pop() and unshift(), I suddenly realized that my email inbox works in a very similar way. New emails appear at the top — almost like an automatic unshift(). When I delete something, it feels like a pop(), just from somewhere in the middle of the list. Not a perfect analogy, of course — but it helped me build intuition.

&nbsp;

The same thing happened recently while preparing for the Google Cloud Professional Data Engineer certification. ☁️

I was monitoring some automations, and notifications kept arriving with two different subject lines — grouped by day in my inbox. On heavy days, 2–3 messages stacked up for each automation.

&nbsp;

💡 And suddenly it clicked:
“This is exactly like partitioning and clustering in BigQuery.”

Grouped for easier querying — or in this case, easier browsing. A similar moment happened while scrolling through documents on my phone. They were grouped by date as well. In photo apps, this grouping is for human convenience. In databases, partitioning exists for performance and cost optimization. Still, the pattern is the same.

&nbsp;

💡 Another "aha moment" I shared with my brother (DevOps Engineer) during preparation:
Me: "I realized that Dagster is basically Cloud Composer."
Him: "Guten Morgen."
Me: "And Jupyter Notebook is like a low-cost version of Dagster or Dataflow."
Him: "Well, not everyone has the budget for a Ferrari." 🏎️

&nbsp;

💡 I’ve even found an analogy from my biochemistry studies.

In biochemistry, a metabolic pathway is only as fast as its slowest reaction — the rate-limiting step. Imagine a chain like this:

A → B → C → D → E

- A→B: fast
- B→C: slow 🐌
- C→D: fast
- D→E: fast

Even if most reactions are quick, the entire process is constrained by that one slow link. It sets the bottleneck and defines how fast the whole pathway can operate.

I realized the same pattern shows up in data engineering.  
Consider a Dataflow pipeline:  
Click event → Pub/Sub topic → Subscription backlog → Dataflow → Advertising Pub/Sub topic

Suppose the team needs events within 30 seconds, but the actual freshness is closer to 40 seconds. The transformations inside Dataflow may be fast — just like the quick biochemical reactions — but if there’s a growing Pub/Sub subscription backlog, Dataflow receives events late. That backlog becomes the rate-limiting step, adding extra delay before the job even starts processing the messages.

&nbsp;

✨ These are the moments of joy – when I realize I'm not just memorizing, but truly understanding.
