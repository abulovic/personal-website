# Website Audit — 2026-06-27

## Purpose, Scope, And Limits

This audit compares:

- **NEW SITE under construction:** <http://localhost:3001/>
- **OLD LIVE SITE:** <https://www.ana-bulovic.eu/>
- **Related confirmed project site:** <https://unsichtbarshow.com/>

The new site is the primary target. Its HTML, CSS, JavaScript, routes, project
data, local images, and PDF responses were inspected directly. The old public
site was checked through live web search and accessible indexed pages.

This is a public-voice, information-architecture, and observable technical
audit. It is not a full visual QA, screen-reader test, performance benchmark,
or mobile-device test. The new site's source structure and responsive rules
were inspectable, but its animations and every viewport could not be evaluated
in a graphical browser here. Findings that require real-device or production
verification are marked accordingly.

No website code or external site was edited, published, or contacted.

## Key Comparison

The new site is a major strategic improvement. The old site says, in effect,
“Ana does many interesting things.” The new site begins to say, “Ana builds
different kinds of worlds, and the same research intelligence moves through
voice, theatre, spatial sound, living systems, and AI.”

The central gain is the four-world framework:

- Inner Worlds — states of being;
- Shared Worlds — worldviews and cosmologies;
- Felt Worlds — perception and immersion;
- Emergent Worlds — generative self-organisation.

This makes the practice coherent without reducing its range. `World Scores`
and `FrankenstAIn` are now visible, connected to prior work, and placed beside
artistic research rather than isolated as technology projects.

The main new risk is over-conceptualisation. A visitor currently encounters a
full-screen hero, an Ian Cheng quote, a long systems-biology reflection, and a
complex interactive constellation before receiving one plain sentence about
what Ana makes. The constellation introduction still contains `Lorem ipsum`.
The build has found the right architecture of thought; it now needs a clearer
front door, tighter copy, verified credits, and production polish.

## Confirmed Public Surfaces

### Official

1. **Ana Bulovic old personal portfolio:** <https://www.ana-bulovic.eu/>
   - Uses Ana's established public contact address,
     `ana.bulovic.art@gmail.com`.
   - A current Catalyst Berlin profile links directly to it:
     <https://catalyst-berlin.com/student-life/from-all-sides>.

2. **Unsichtbar / Zhiyin:** <https://unsichtbarshow.com/>
   - The team page identifies Ana Bulovic and Mathias Baresel as Zhiyin's
     founders and links back to Ana's old portfolio:
     <https://unsichtbarshow.com/wer-wir-sind/>.

3. **Not One Not Two page on the old portfolio:**
   <https://www.ana-bulovic.eu/not-one-not-two>
   - The collective and Ana's role are corroborated by Katapult and Unithea
     listings:
     <https://katapult.berlin/allgemein/sojourn/> and
     <https://www.reiseland-brandenburg.de/veranstaltung/seenland-oder-spree/unithea-2025-sojourn/>.

### Not Confirmed

- No separate official Not One Not Two domain was found.
- No independent official ASCHE website was confirmed. ASCHE is named as Ana's
  alias on the old `Room of Causality` page and in the Catalyst profile.
- The local site is a build, not yet a verified public domain.

# NEW SITE FINDINGS — PRIMARY

## Routes And Assets Inspected

The following returned HTTP 200 locally:

- `/`
- `/index.html`
- `/projects.html`
- `/project.html?id=world-scores`
- `/project.html?id=frankenstein`
- `/project.html?id=proper-time`
- `/project.html?id=sojourn`
- `/project.html?id=already`
- `/project.html?id=unsichtbar`
- all 11 referenced project images;
- both downloadable PDF paths.

The same detail-page shell contains data for all 11 projects:

1. Still Flow
2. Method Singer
3. Sojourn
4. Arrivals
5. FrankenstAIn
6. Dimensions of an Art Piece
7. Already Not Here
8. Proper Time
9. Unsichtbar
10. On Growth
11. World Scores

## Homepage First Impression

### What Works

- The full-bleed portrait, accented display name `Ana Bulović`, dark palette,
  restrained typography, and geometric system create a more confident and
  authored first impression than the old site's `CONTINUE` gateway.
- Contact is immediately visible in the top navigation.
- The hero is clearly an artist portfolio rather than a general personal site.
- `Artist · Composer · Researcher` is more useful than the old browser title
  `Artist, scientist, life enthusiast`.
- The visual language of rings, nodes, relations, and changing worlds matches
  Ana's systems-oriented practice rather than decorating it arbitrarily.

### What Needs Revision

- `Artist · Composer · Researcher` remains generic. It does not tell a curator
  what Ana composes or what is distinctive about the research.
- The hero contains Ana's name twice but no artistic proposition, featured
  project, or direct `View work` link.
- The first substantial text is an Ian Cheng quotation. It is a relevant
  reference, but another artist's sentence should not define Ana before her own
  position appears.
- The following three-paragraph reflection begins with cellular organisation
  and the PhD. This is meaningful background, but it delays the artwork and
  places scientific origin ahead of present artistic action.
- The visitor reaches `Research & Projects` only after two large, concept-heavy
  sections. The page should disclose the work sooner.

**Recommendation:** keep the portrait and system aesthetic, but add one precise
line beneath the tagline and a `Selected work` link. Place a two-sentence
practice statement before or beside the Ian Cheng reference. Move the full
“gooey blob” and systems-biology origin story into About.

Review-ready hero and bridge copy is in `PUBLIC_VOICE_QUEUE.md`.

## Homepage Copy

### Strong Language

- `conditions which sustain generative complexity`
- `what remains untranslatable between body, language, and memory`
- `How minimal conditions let something alive compose itself`
- `How reorganizing the senses or the apparent physics of a space changes
  experience directly`
- `Slow, serious inquiry, without the performance of productivity`

These phrases are specific enough to build a recognisable voice. The best ones
name a condition and a consequence rather than claiming interdisciplinarity.

### Copy Problems

- The constellation introduction is literal placeholder copy:
  `Lorem ipsum dolor sit amet...`. This is the clearest launch blocker.
- The opening reflection repeats `I create frameworks` three times in close
  succession. Repetition makes the method sound abstract when the projects are
  actually concrete.
- `how this complexity lives on the level of our un-, sub- and conscious levels
  of ourselves` needs rewriting for grammar and clarity.
- `through arts` is less idiomatic than `through artistic practice` or
  `through art`.
- `artwork which impacts the ill-charted parts of the human spirit` has charge,
  but `impacts` is generic. Name the actual operations: shifts attention,
  loosens identity, changes listening, or reorganises perception.
- The About line `moves at the intersection of artistic practice and research`
  returns to the generic “intersection” formulation that the new world model
  otherwise escapes.

## Research Constellation

### Strategic Strength

The constellation is the new site's best idea. It gives a public structure to
the fact that Ana's projects do not fit one medium. It lets a visitor see that
`FrankenstAIn` belongs to both Inner and Shared Worlds; `Proper Time` to Felt and
Shared Worlds; and `World Scores` to Emergent and Shared Worlds. It makes
continuity visible rather than merely claiming it.

The separate category layer—Music, Theatre, Research, Writing, Science—also
prevents the poetic world names from obscuring practical formats.

### Usability And Voice Risks

- Four custom world categories plus five discipline categories plus eleven
  project nodes create a large cognitive task before a visitor knows which work
  matters most.
- `A constellation of worlds` is atmospheric but does not explain the map's
  purpose. The missing introduction should say what the worlds reveal.
- `Inner Worlds` can drift toward therapeutic or spiritual language unless its
  descriptions keep naming artistic methods.
- `Felt Worlds` is evocative but less immediately legible than `Perceptual
  Worlds`; if kept, its subtitle must consistently explain perception and
  immersion.
- The world model should be an optional deepening device, not the only route to
  understanding the portfolio. `View all projects` and Selected Work provide
  the needed simpler routes; both should remain prominent.

## Project Selection And Order

### Selected Work On The Homepage

Current order:

1. FrankenstAIn — large/tall feature
2. Proper Time
3. Sojourn
4. World Scores
5. Already Not Here

This is a strong set. It balances current work, established evidence, music
theatre, installation, literary/sound work, and AI research. It is much more
strategic than presenting every old project equally.

However, `World Scores` is the site's declared `Music for artificial societies`
project and the system's current flagship, yet it appears fourth. A curator can
see it, but may not understand that it is the future-facing research priority.

**Recommended order:**

1. `World Scores / Music for Artificial Societies` — current flagship;
2. `FrankenstAIn` — current production and methodological bridge;
3. `Proper Time` — established installation evidence;
4. `Sojourn` — performance/composition evidence;
5. `Already Not Here` — current sound/writing direction.

If the 2026 premiere makes `FrankenstAIn` temporarily more urgent, it can remain
first, but World Scores should be second and should use the full flagship name.

### All Projects

The all-projects page is clean and useful. It gives year, type, worlds,
categories, filters, project count, and a no-results state. This is a good
curatorial index and a practical alternative to the constellation.

Improvements:

- sort intentionally—current priority first or newest first. The present data
  order begins with 2022 and does not visibly communicate a chronology;
- add `All` / `Clear filters` once a filter is active;
- communicate filter state with `aria-pressed`, not colour alone;
- consider one-sentence summaries or thumbnails on hover only if they do not
  make the index noisy.

## Project Detail Pages

### What Works

- Every project has a title, type, year, image, description, research worlds,
  categories, and contextual metadata.
- Several pages include documentary media or downloadable writing.
- Ana's role is explicit in the strongest long descriptions, especially
  `Sojourn` and `FrankenstAIn`.
- The `FrankenstAIn` copy is particularly strong on voice as body, identity,
  and transformation; technology is framed as a perceptual question, not a
  novelty.
- `Proper Time` is concise and clearly names medium, question, and mechanism.

### Structural Problems

- Description lengths are extremely uneven. `World Scores` is one short
  paragraph while `Sojourn`, `Method Singer`, and `FrankenstAIn` are long
  essays.
- Long descriptions are inserted into one `<p>` element with no paragraph
  markup. Several source strings also lack spaces between sentences, producing
  joins such as `audience.The` and `deliberately.Drawing`.
- Project pages do not consistently answer:
  - Ana's role;
  - current status;
  - artistic mechanism;
  - research question;
  - collaborators;
  - verified presentations;
  - what the visitor can do next.
- `Unsichtbar` is reduced to a short summary despite having a strong dedicated
  project site. Link directly to <https://unsichtbarshow.com/> for touring and
  technical information.
- There is no related-work or `next project` path. A visitor reaches the All
  Projects page, but the continuity between particular works is not narrated.

Use one detail-page sequence:

```text
Title + year + format + status
One-line proposition
Ana's role
2–4 short paragraphs: mechanism, question, development
Media / traces
Collaborators, support, presentations
Related work
Contact / booking / research conversation
```

## Music For Artificial Societies / World Scores

### Improvement Over The Old Site

This direction is no longer absent. `World Scores` appears in:

- the constellation;
- both Emergent and Shared Worlds;
- Music and Research categories;
- Selected Work;
- the All Projects index;
- its own detail route.

That is the single clearest strategic improvement over the old site.

### What Is Still Missing

- The project is titled `World Scores`, with `Music for artificial societies`
  only as its type. Reverse the hierarchy: `Music for Artificial Societies —
  World Scores` or `World Scores: Music for Artificial Societies`.
- The current description is too thin for the flagship:
  `A current research project writing "worlds"...` does not explain listening,
  memory, misreading, conflict, values, process traces, or Ana's compositional
  role.
- The closing question, `What environment must you build for something alive to
  emerge?`, is evocative but risks implying that the AI agents are literally
  alive. `What musical and social form can emerge?` is more precise.
- The page has no evidence or current experiment: no world-score example,
  diagram, audio/process trace, research question, or next step.
- `Advised by Ellie Hein and Joe Edelman` must be verified before publication.
  Internal source material says advisory conversations were proposed and spells
  the first name `Ellie Hain`. A proposed conversation is not the same as an
  advisory relationship.

Review-ready replacement copy is in `PUBLIC_VOICE_QUEUE.md`.

## Continuity Of Artistic Practice

The new site embeds continuity in its map but does not yet state it directly.
The narrative is:

- `Still Flow` and `Method Singer` explore how inner state changes what can be
  perceived and expressed;
- `Unsichtbar` and `Proper Time` change sensory conditions and the apparent
  physics of a space;
- `Sojourn` composes transformation through music, movement, archetype, and
  surrender;
- `FrankenstAIn` treats individual voices and difference as the source of a
  spatial musical language;
- `World Scores` extends the same method into artificial societies, composing
  the conditions under which agents listen, remember, disagree, and transform
  material.

The bridge sentence remains: **Ana composes conditions under which relations
become perceptible.** The four-world framework can unfold from that sentence.
Without it, the map looks intelligent but asks the visitor to do the synthesis.

## Bio And Credentials

### Strong

- `Born in Yugoslavia in 1989, based in Berlin` is specific and grounded.
- The bio is much shorter and more usable than the old About essay.
- Theoretical biophysics is connected to organising principles and meaning,
  rather than presented as decorative prestige.
- Artistic and research credentials are concrete and dated.

### Revise Or Verify

- Replace `moves at the intersection of artistic practice and research` with a
  sentence about designing perceptual and social worlds.
- Add `spatial sound` and the current artificial-society research so the bio
  reflects the selected work.
- The credentials list gives a `2022` PhD and `summa cum laude`; internal profile
  evidence and the publicly indexed thesis point to 2023. Verify the formal
  award year and distinction against the certificate or current CV.
- `Session Chair` is legitimate but less useful to an arts visitor than current
  artistic presentations, commissions, or funded projects. Consider moving it
  into an extended CV.
- Verify the exact grant year, funder styling, premiere city/venue, and support
  line for `FrankenstAIn` before launch.
- The site now settles the title as `FrankenstAIn`; use that spelling
  consistently in future pages and redirects if it is Ana's confirmed choice.

## Contact And Reachability

### Strong

- A mail link appears in the hero and footer, and on project/list pages.
- No unnecessary street address is exposed.
- The address is written in plain text as well as linked, so it can be copied.

### Resolve Before Migration

The new site uses `bulovic.ana@gmail.com`. The old public site uses
`ana.bulovic.art@gmail.com`, which is also the confirmed digest address in this
workspace. Confirm which is the canonical public contact and either:

- use one everywhere; or
- state separate purposes clearly and forward one to the other.

Also add one purposeful line near the footer:

> For presentations, commissions, research conversations, and collaborations,
> write to ...

A current CV and a small press/technical folder would make the site more
actionable for curators and presenters.

## Observable Mobile, Accessibility, And Technical Issues

### Positive Implementation

- Responsive rules exist for the hero, quote, constellation, selected-work
  grid, About, project index, and detail pages.
- The constellation has a separate mobile layout and modal rather than merely
  shrinking the desktop graph.
- `prefers-reduced-motion` is explicitly respected in CSS and JavaScript.
- Project images have alt text; embedded media receive titles; the close and
  audio controls have accessible labels.
- Main list rows are real links, and project filter controls are real buttons.
- All 11 inspected local project images resolve.

### Launch Blockers Or High-Priority Checks

1. **Placeholder copy:** `Lorem ipsum` is public in the homepage HTML.
2. **Long unformatted descriptions:** detail text is one paragraph, with missing
   spaces between several sentences.
3. **Keyboard access:** mobile world and category nodes are SVG `<g>` elements
   with click handlers but no keyboard semantics. The project nodes are links,
   but the explanatory filtering interaction is not fully keyboard-operable.
4. **Modal semantics:** the mobile modal has `role="dialog"` and an accessible
   close button, but no observed labelled-by relationship, focus transfer,
   focus trap, or focus restoration.
5. **Filter state:** filter buttons visually toggle but do not expose
   `aria-pressed`.
6. **Very small/low-contrast text:** several labels are 8.5–11px. The
   `--text3` colour (`#363636`) on a `#090909` background is used for meaningful
   metadata and appears too low-contrast; verify with an automated contrast
   check in the production build.
7. **Focus styling:** some links explicitly remove outlines and replace them
   mainly with colour changes. Confirm a visible focus indicator throughout.
8. **Image weight:** several project PNGs are approximately 2–5.3 MB
   (`Sojourn` 4.4 MB, `Proper Time` 5.2 MB, `Unsichtbar` 5.3 MB). Use responsive
   WebP/AVIF images, dimensions, and lazy loading outside the hero.
9. **PDF delivery:** both PDF URLs resolve, but the local server returns
   `text/plain`; one is approximately 16.5 MB. Verify `application/pdf`, optimise
   the large file, and test download behaviour in production.
10. **Metadata:** homepage and detail pages have no observed meta description,
    Open Graph/Twitter data, canonical URL, or structured project metadata.
11. **JavaScript dependence:** project detail titles, images, copy, and metadata
    are populated client-side from query parameters. If JavaScript fails, the
    page shows an empty shell and external placeholder image; social previews
    and some crawlers may not receive project-specific content.
12. **URL durability:** `project.html?id=world-scores` works for a prototype,
    but clean routes such as `/work/world-scores/` are better for sharing,
    analytics, metadata, and redirects.
13. **External runtime dependency:** homepage reveals import animation code from
    `esm.sh`. Confirm that core content stays visible if that CDN is blocked.
14. **Responsive selection:** below 860px, CSS hides the last Selected Work card
    (`Already Not Here`). This may be intentional, but the mobile editorial
    selection should be decided explicitly rather than being a side effect of
    card order.

Items 3–7 should be tested with keyboard-only use and a screen reader in a
graphical browser. The code observations are direct; the actual assistive-tech
experience was not tested here.

# OLD SITE FINDINGS — MIGRATION CONTEXT

## What The Old Site Does Well

- It contains a deep archive: writing, science, music, drawings, collaborators,
  funder acknowledgements, and many project pages.
- Contact is visible throughout.
- Several pages contain valuable practical detail:
  - `Unsichtbar` gives age, duration, room, darkness, and contact information;
  - `More is more` has a direct booking invitation;
  - `Brrr & Skrrr` credits Ana for sound dramaturgy and composition;
  - `Room of Causality` begins with a clear question and medium.
- The old About page contains vivid autobiographical source material that can be
  retained as a longer story or archive text.
- Strong language worth preserving includes:
  - `what remains untranslatable between body, language, and memory`;
  - sensory specificity around darkness, smell, touch, and spatial voice;
  - Ana's critique of models and assumptions in science;
  - the bodily and mythic sources of her practice.

## What The New Site Corrects

- The old root is a near-empty `CONTINUE` gateway; the new site immediately
  presents Ana and her work visually.
- `Artist, scientist, life enthusiast` is diffuse; the new site is more serious
  and intentionally art-facing.
- The old flat Projects menu gives every work equal weight; the new site has
  Selected Work, a research constellation, and a filterable index.
- The old site separates Art, Writing, and Science; the new site shows how the
  same questions move through them.
- `Music for Artificial Societies` and world scoring are absent from the
  indexed old portfolio; the new site makes World Scores visible in multiple
  places.
- The old About copy is long and partly outdated, including `current` projects
  and planned work no longer aligned with the active direction; the new bio is
  concise and dated.

## Old-Site Material Not Yet Carried Forward

The new project index does not include every old public project, including
`Brrr & Skrrr`, `White Flower Red`, and `More is more`. This is not inherently a
loss: selection improves legibility. Before retiring the old site, decide
whether each omitted page should be:

- migrated into an archive;
- represented in the CV only;
- redirected to a collaborator/project site;
- intentionally retired.

The old `Writing` page also holds substantial original texts. Do not delete it
by accident during a portfolio simplification. Either migrate selected writing,
create an archive, or preserve the old URLs with a deliberate plan.

## Related Unsichtbar Site

The dedicated Unsichtbar site remains useful because it answers presenter and
family questions better than a portfolio entry:

- immediate form and audience;
- sensory mechanism;
- group size, duration, room, equipment, set-up, and strike;
- team, contact, and shows.

Before launch:

- link it from the new Unsichtbar detail page;
- update or archive the `Vorstellungstermine 2025` page;
- verify the duplicated 09.10.2025 time shown for Klingendes Museum and LAKE
  Studios;
- replace Ana's generic German team bio with the review-ready version in
  `PUBLIC_VOICE_QUEUE.md`;
- remove WordPress comments/login/Reader controls if they are not intentional.

# MIGRATION RECOMMENDATIONS

## 1. Resolve Facts And Names Before Copy Polish

Create one verified migration sheet for:

- canonical display name: `Ana Bulović`;
- search/metadata spelling: `Ana Bulovic` as needed;
- canonical email;
- `FrankenstAIn` title spelling;
- `Proper Time` versus `Room of Causality`;
- `Already Not Here`, `Room for Truth`, and `Radius of Truth` relationship;
- `Method Singer` versus `Befindlichkeit und Gestimmtheit`;
- PhD year and distinction;
- exact funder names, grant years, venue/city, and premiere details;
- whether named advisers have actually agreed to be publicly credited.

Do not use public copy to settle uncertain facts implicitly.

## 2. Fix The New Homepage's Front Door

Before more visual work:

1. replace `Lorem ipsum`;
2. add one artistic proposition in the hero;
3. bring Selected Work or a current-project link earlier;
4. shorten the scientific origin reflection and move its long form to About;
5. make Ana's own sentence primary and Ian Cheng a supporting reference;
6. elevate `Music for Artificial Societies — World Scores` to first or second
   selected work.

## 3. Standardise Project Pages

Apply a shared project template, split long copy into real paragraphs, and give
the flagship the richest page. Link related work so the research trajectory is
explicit:

```text
Still Flow / Method Singer
    → Sojourn
    → FrankenstAIn
    → World Scores / Music for Artificial Societies

Unsichtbar
    → Proper Time
    → FrankenstAIn
    → World Scores / Music for Artificial Societies
```

This is a relationship model, not a strict chronology.

## 4. Preserve Useful Old Evidence

- Export old page copy, images, audio, PDFs, credits, and URLs before switching
  domains.
- Keep a migration map from every old URL to a new page, archive page, or
  intentional `410 Gone` decision.
- Use permanent redirects for renamed work.
- Preserve valuable third-party links and funder evidence.
- Do not duplicate the dedicated Unsichtbar booking material; link to it.

## 5. Run A Production Readiness Pass

Test the deployed candidate, not only localhost:

- desktop and mobile visual hierarchy;
- keyboard, focus, modal, filters, and screen reader;
- contrast and type size;
- responsive images and loading performance;
- PDF MIME/downloads;
- links, embeds, email, and external assets;
- metadata and social previews for every shared project URL;
- canonical URLs, sitemap, redirects, analytics, and a custom 404;
- behaviour with reduced motion and blocked third-party scripts.

## Recommended Launch Sequence

### First — content blockers

1. Remove placeholder text.
2. Confirm public facts, adviser relationships, titles, and email.
3. Add the hero proposition and constellation introduction.
4. Expand and elevate World Scores.
5. Format and copy-edit all project descriptions.

### Second — migration and reachability

1. Create clean project URLs.
2. Map old pages and install redirects.
3. Add CV, contact invitation, and relevant project-site links.
4. Decide what becomes archive versus CV-only.

### Third — technical QA

1. Optimise images and the large PDF.
2. Add metadata and non-JavaScript project content where possible.
3. Complete keyboard, modal, contrast, and mobile testing.
4. Test the actual production host before changing the old domain.

## Review Questions For Ana

1. Which email should be public: `bulovic.ana@gmail.com` or
   `ana.bulovic.art@gmail.com`?
2. Should `Music for Artificial Societies` be the public project title, with
   `World Scores` as its method/subtitle, or vice versa?
3. Is `FrankenstAIn` now the confirmed canonical title?
4. Are `Proper Time` and `Room of Causality` the same work under a new title?
5. How do `Already Not Here`, `Room for Truth`, and `Radius of Truth` relate?
6. Have Ellie Hain/Hein and Joe Edelman agreed to be credited publicly as
   advisers?
7. Which omitted old projects still need an archive page?
8. Is the Ian Cheng quotation meant as a central lineage statement or a
   temporary design element?

## Sources Checked

### New Local Build

- <http://localhost:3001/>
- <http://localhost:3001/projects.html>
- <http://localhost:3001/project.html?id=world-scores>
- <http://localhost:3001/project.html?id=frankenstein>
- <http://localhost:3001/project.html?id=proper-time>
- <http://localhost:3001/project.html?id=sojourn>
- <http://localhost:3001/project.html?id=already>
- <http://localhost:3001/project.html?id=unsichtbar>

### Old And Related Public Sites

- <https://www.ana-bulovic.eu/>
- <https://www.ana-bulovic.eu/home>
- <https://www.ana-bulovic.eu/about>
- <https://www.ana-bulovic.eu/science>
- <https://www.ana-bulovic.eu/writing>
- <https://www.ana-bulovic.eu/room-of-causality>
- <https://www.ana-bulovic.eu/unsichtbar>
- <https://www.ana-bulovic.eu/brrr-skrrr>
- <https://www.ana-bulovic.eu/white-flower-red>
- <https://www.ana-bulovic.eu/more-is-more>
- <https://www.ana-bulovic.eu/not-one-not-two>
- <https://unsichtbarshow.com/>
- <https://unsichtbarshow.com/wer-wir-sind/>
- <https://unsichtbarshow.com/events/>
- <https://catalyst-berlin.com/student-life/from-all-sides>
- <https://katapult.berlin/allgemein/sojourn/>
- <https://www.reiseland-brandenburg.de/veranstaltung/seenland-oder-spree/unithea-2025-sojourn/>

### Internal Strategy/Profile Grounding

- `agents2/shared/public_voice/CORE_PUBLIC_POSITION.md`
- `agents2/shared/strategy/ARTIST_POSITIONING.md`
- `agents2/shared/strategy/PUBLIC_FIGURE_GUIDELINES.md`
- `agents2/shared/strategy/ACTIVE_PRIORITIES.md`
- `shared/profile/ARTISTIC_RESEARCH_PROFILE.md`
- `shared/profile/PROJECT_INDEX.md`
- `shared/profile/THEMES_AND_METHODS.md`
- `shared/profile/GRANT_MATERIAL_BANK.md`
