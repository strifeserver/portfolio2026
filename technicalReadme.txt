2. Technical Explanation of the Portfolio & Design
If you were explaining this to a peer or client, here is the architectural breakdown:

The Engine: A high-performance Vite + React single-page application.
Data-Driven Architecture: The entire portfolio is "headless." All content—from your bio to your project grid and even the navigation menu—is separated into clean JSON modules. This makes the site extremely easy to maintain or port to a CMS later.
Configurable Design System: I implemented a Customization Layer in 
settings.json
. You can change the sidebar's pulsing indicator color, project description character limits, and even the Project Modal's vertical offset and size without writing a single line of CSS.
Aesthetic Philosophy: The design uses a "Necromancer / Terminal" aesthetic—a blend of deep void blacks, glassmorphism, and vibrant "necro-glow" highlights (Arcane Violet/Scourge Purple). It balances a professional developer vibe with a distinct, premium personality.
Responsive UX: It features a desktop fixed sidebar that intelligently transitions into a compact bottom navigation bar on mobile to maximize thumb-reach and screen real estate.
