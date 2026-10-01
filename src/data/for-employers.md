---
hero:
  title: 'For hiring managers & data teams'
  paragraph1: |
    Every business reaches a point where its growth outpaces its data setup. When teams spend more time moving data by hand, reconciling disconnected tools, or fixing broken reports than acting on what the data says, information becomes a bottleneck instead of an advantage.  
    I help close that gap.
  paragraph2: |
    **Data Engineering** is my focus  
    (***Google Professional Data Engineer certified***):   
     I build the pipelines and automation behind the scenes that carry data from where it  is created to where people use it, cleanly, reliably, and without constant manual attention.
  paragraph3: |
    I came to this through:
    - ten-plus years of research (neurobiology, biochemistry),
    - self-taught backend and data skills,
    - professional web development experience in a fully remote team,
    - and hands-on projects built around real organizational needs.  

    I am looking for a Data Engineering role in a remote-first team.
values:
  title: 'Impacts at a glance'
  items:
    - title: 'Automating the mundane'
      icon: 'trending'
      description: 'If your team spends hours manually exporting data, cleaning spreadsheets, or moving information across disconnected systems, I build automated workflows that handle it reliably. This reduces human error and frees your people to focus on analysis and decisions.'
      proof: 'For a foundation, I replaced fragmented spreadsheet tracking with event-driven n8n workflows connecting Wix, Google Sheets, and Stripe.'
    - title: "Replacing 'fragile' with 'reliable'"
      icon: 'shield'
      description: "If your data processes feel fragile, break without anyone noticing, or depend on one person's knowledge, I design them to fail visibly, handle bad input, and stay documented. Your data moves from a constant headache to a quiet, dependable asset running in the background."
      proof: 'My workflows include error handling, and I write documentation so others can operate and extend what I build.'
    - title: 'Translating vision into execution'
      icon: 'bulb'
      description: "If you know what you need from your data but the requirements are vague, scattered, or stuck in people's heads, I map the process first, ask the questions that matter, and turn it into a clear, buildable plan."
      proof: "I built a Python/Docker pipeline that extracts a foundation's events, blog, and CMS content through the Wix API and prepares it for analysis, starting from an unstructured problem."

industries:
  title: 'Where I step in'
  description: 'The industries differ, but the same few situations keep coming back. Here are some I have worked on, and what I built for each.'
  items:
    - id: 'disconnectedTools'
      label: 'Disconnected Tools'
      problem: 'As a business grows, information ends up scattered across a CRM, marketing platform, payment system, and spreadsheets. Nothing talks to anything else, so people copy data between systems and the numbers never quite match.'
      solution: "I connect the systems and automate the flow of data between them. For a foundation, I built event-driven workflows linking a website platform, Google Sheets, and Stripe. I've worked at small scale so far, but the pattern of mapping sources, defining the flow, and handling failures stays the same in larger stacks."
    - id: 'manualReporting'
      label: 'Manual reporting'
      problem: "Reports get compiled by hand every week or month. It's slow, easy to get wrong, and leadership can't fully trust the result."
      solution: "I automate the path from source data to report, so analysis starts from clean, current data. I built a Python/Docker pipeline that extracts a foundation's content data through an API and prepares it for analysis in Jupyter. In an earlier role, I built a Google Sheets system that gave executives accurate budget overviews from purchasing requests."
    - id: 'dataTrappedInContent'
      label: 'Data Trapped in Content'
      problem: "Valuable information sits inside websites, CMS platforms, documents, and old meeting notes. Teams can't search it, and using it for analysis means copying it out by hand."
      solution: "I extract content through APIs, give it structure, and make it searchable and analyzable. I've built this for a foundation's CMS content, and created tools that let non-technical staff query years of documentation and generate reports."
    - id: 'fragileProcesses'
      label: 'Fragile Processes'
      problem: "A key process depends on one person's memory, a hidden spreadsheet, or a manual step that occasionally breaks and nobody notices."
      solution: "I make the process visible, documented, and fault-tolerant. In research, I replaced a 'gatekeeper' who knew where everything was with a searchable, digitized chemical inventory, and in later projects I build workflows that handle bad input and can be run by others."
  conclusion: |
    Most **data work** comes down to **sources, flow, reliability, and people who need to trust the result**.  
    That's what I do.

reads:
  title: 'See the work'
  description: 'Two projects, both based on a real world needs, with the code available to inspect.'
  items:
    - id: '1'
      title: 'Wix content intelligence pipeline'
      subtitle: 'Turning fragmented CMS exports into strategic data pipelines'
      technologies: 'ETL, Python, Jupyter, Docker'
      p1:
        - '**The Challenge:** Disconnected operational data across events, blogs, and content systems created blind spots that hindered data-driven decisions.'
        - '**The Engineering:** Designed and built an automated ETL architecture that pulls disparate CMS data via REST APIs, standardizes raw payloads, and streams them through pythonic analytical pipelines for real-time visibility.'
      linkKey: 'WIX_CONTENT_PIPELINE'
    - id: '2'
      title: 'Modular event automation'
      subtitle: 'Replacing fragile manual workflows with event-driven infrastructure'
      technologies: 'n8n, Python, Wix API, Docker, Google Workspace, Stripe'
      p1:
        - '**The Challenge:** Manual overhead in event logistics and member outreach led to execution bottlenecks, poor fault tolerance, and communication friction.'
        - '**The Engineering:** Engineered a resilient, event-driven automation framework linking Wix endpoints with Google Workspace and Stripe. By moving from ad-hoc operational tracking to structured, error-tolerant n8n orchestration, the system functions as a self-healing operational backend.'
      linkKey: 'N8N_WIX_WORKFLOW'
  conclusion: |
    Most of my projects start the same way:  
    an organization has data that is scattered, manual, or hard to use. I build the pipeline or workflow that makes it reliable, then add automation or AI on top.  

    Let's discuss how I can contribute to your data team.
---
