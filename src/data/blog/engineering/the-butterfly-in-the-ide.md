---
title: 'The Butterfly in the IDE: Building a Digital Home in the Agent Ecosystem'
date: '2026-05-25'
excerpt: 'Reflecting on the journey from a LinkedIn post to a statically generated home, and the "magic wand" of AI-assisted development.'
---

![Abstract illustration of a butterfly fluttering over a laptop screen, blending modern technology with philosophical elements](/blog/the-butterfly-in-the-ide.webp)

&nbsp;

It’s interesting how revisiting your own work can spark a completely new direction. 💡

In early May, I found myself re-reading a LinkedIn article I’d written back in March this year. At the same time, I was exploring **GitHub Pages** for a separate project. Then, something clicked.

My article wasn’t just a post — it was a reflection of my growth and thinking. It deserved a dedicated space. I decided to get my hands dirty and transform those ideas into a living, statically generated site using **Next.js** and **GitHub Pages**.

The result? A digital home for my projects and thoughts.

&nbsp;

## The Creative Spark

My primary strength has always been in **systems thinking**. It’s where I truly flourish. While I enjoy backend tasks, I’ve always had a soft spot for frontend work — not as a pure designer, but as a builder who uses code as a creative outlet.

Over the years, I’ve occasionally stepped into the world of frontend development, building web apps and sites with frameworks like _WordPress_, _Wix_, and _HubSpot_. Usually, I was creating for others, guiding them through the labyrinth of arranging information, or even colour palettes and layout choices.

I never forced myself to create a personal website. Why? Because I hadn’t found the right content yet. I didn't want a site filled with AI-generated filler or hollow thoughts. I wanted it to be _me_.

When I re-read that article, the vision for the site appeared almost instantly:

- **Simplicity first**: Clean, functional, and fast.
- **Design Inspiration**: The React documentation, with alternating coloured sections, served as a perfect starting point.
- **A Colour Palette**: Deep blues, harmonised with violet and green accents.
- **Typography**: Take two of my long-standing favourites for readability and character.

&nbsp;

## Refreshing the Toolkit

The challenge was refreshing my knowledge of **Next.js**. It had been a while since my last deep dive, and the ecosystem moves fast. _Tailwind CSS_ v4 and _HeroUI_ v3 had arrived, bringing new configuration paradigms that differed from earlier versions.

I treated the **setup** as a "warm-up". I manually initialised the project and configured the coding guidelines (_ESLint_, _Prettier_, _Husky_) to shift my mindset from _Python_ and _Data Engineering_ back into the world of frontend development.

Once the foundation was laid, I decided to lean into the future of development. I integrated **Gemini CLI** into my workflow.

&nbsp;

## Coding with a Magic Wand

The experience was a "**positive shock**". I’ve always loved coding, but assisted development feels like wielding a magic wand. You have a thought, a swish of the "wand" (the prompt), and the implementation is fulfilled.

In frontend development, the sheer volume of `div` tags and CSS classes can often feel overwhelming. I’ve frequently found myself in a position where the entire layout is crystal clear in my head, yet the friction of translating those thoughts into boilerplate code takes hours. **AI** effectively removes that barrier.

There were several **"aha" moments** with **Gemini CLI**:

1.  **Markdown Integration**: I wanted to use _Markdown_ files for content — a first for me. The **AI** explained the pros and cons of `react-markdown` versus `remark-html`, then handled the heavy lifting of the implementation.
2.  **Custom Components**: When _HeroUI_ lacked a ready-made timeline component, I instructed the **AI** to build one using existing primitives. Within seconds, I had a responsive, readable component that I only needed to polish for my specific styles.
3.  **Responsive Refactoring**: After I finished the desktop navigation, I simply asked the **AI** to handle the mobile version. It reorganised the code and implemented the responsive logic in a second, maintaining the clean structure I’d established.
4.  **The Blog Functionality**: Perhaps the most memorable experience was adding the blog at the very end of the project. The site was already functional and responsive, but out of curiosity, I prompted the **AI** to scaffold the blog listing and item pages using three sample posts. I blinked, and the components were there — fully functional. The design was surprisingly "cool" right out of the box, though it required some manual polish to align with my specific colours and fonts, as I hadn't included those in the initial prompt.

It wasn’t just about speed; it was about the **flow**. Even when the **AI** suggested more traditional logic like a `switch()` statement, I could quickly steer it towards a more idiomatic React `map()`. We were partners in the process, with the **AI handling the repetitive scaffolding** while **I focused on the architectural intent**.

&nbsp;

## The Art of the Instruction

A final note: my goal isn’t to provide a template for agent `.md` files or a "how-to" guide. You can find plenty of those online. My experience taught me something more fundamental about the process:

- **RTFM (Read the Fine Manual)**: Follow the specific documentation for your tools (_Antigravity_, _Claude_, etc.).
- **No Silver Bullets**: There is no universal, ready-to-use template. You must craft your own instructions.
- **Creativity & Clarity**: You need both creativity and writing skills to define your intent.
- **Feedback Loops**: Observe how the **AI** responds to your initial instructions and refine them.

It is remarkably similar to human communication: your message facilitates a response, and based on that feedback—both the output and the behaviour—you formulate your next move.

&nbsp;

## The Butterfly and the IDE

As the project neared completion, I transitioned to **Antigravity 2.0**. It was a shift that brought a new level of recognition to my workflow. It made me think of the ancient story of _Zhuangzi_:

> Zhuangzi dreamed he was a butterfly, happy and unaware he was a human. He awoke and found himself unmistakably a man. But then he wondered: was he a man who had dreamed he was a butterfly, or was he a butterfly currently dreaming he was a man?

With modern agents, I find myself asking a similar question:

> **Is the agent inside my IDE, or is the IDE now inside the agent’s ecosystem?** 🦋💻

&nbsp;

I’ve been using AI-assisted coding for a while, but returning to the frontend after a longer break served as a clear _proof-of-concept_ for how much these tools have evolved.

> The 'magic' isn’t in the AI doing the work for us, but in the way it amplifies our ability to turn an imaginary vision into a digital reality. 🦋✨

&nbsp;

&#8212;  
The mentioned LinkedIn article: 🔗 [From Writing Code to Designing Systems](https://www.linkedin.com/pulse/from-writing-code-designing-systems-beata-nemeth-d9l3f/)
