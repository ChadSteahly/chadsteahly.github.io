# chadsteahly.com

Multi-page portfolio: plain HTML/CSS, no build step, free on GitHub Pages
with a custom domain. Mirrors the structure of the Squarespace site
(Work / Reel / About / Contact) in the same cream-and-monospace system as
the resume and cover letter, so all three read as one body of work.

## Structure

```
index.html              Work — home page, client + personal grid
reel.html                Reel — video embed + timecode breakdown
about.html                About — bio, certifications, testimonials
contact.html              Contact — email, phone, socials, resume download
projects/
  ai-study-tool.html       Case study template (worked example)
  universe-unknown.html     Album page — 10-track player
  midnight-sound-exile.html Album page — 4-track player
  academy-museum-brand-animation.html  Case study (placeholders)
  teach-with-the-revel-app.html        Case study (fully built out)
  destination.html                     Case study (fully built out)
  jw-marriott-tourism.html             Case study (fully built out)
  pearson-etextbook.html               Case study (fully built out)
  pearson-educator-account.html        Case study (fully built out)
  illustrations-and-sketches.html      Gallery (fully built out)
  vectors.html                         Gallery (VHS tape still a placeholder)
  photography.html                     Gallery (fully built out)
  autumn-cafe.html                     Case study (fully built out)
audio/
  universe-unknown/          The 10 MP3s for that album
  midnight-sound-exile/      The 4 MP3s for that album
style.css                  Shared styles for every page
script.js                  Dark mode toggle button logic
player.js                  Album track-list player logic
CNAME                      Tells GitHub Pages to serve chadsteahly.com
tagline-animation.gif      Animated tagline, used at the top of About
resume.pdf                  (add this) — linked from the Contact page
headshot.webp                 Your headshot — already in place on About
```

## Dark mode

Every page follows the visitor's system/browser preference automatically,
and the moon/sun button in the header lets them override it manually —
the choice is remembered (via localStorage) on their next visit. The dark
palette is defined in `style.css` right under the main `:root` block if
you want to adjust any of those colors.

## AI Study Tool Promotional Video

`projects/ai-study-tool.html` is fully built out — all nine figures are
real assets now (three Vimeo embeds for the final edit, the "chill
version," and the portrait social loop; six static images for the style
frames, background composite, bot design, character comps, logo
animation, and UI graphics). The images live in `projects/ai-study-tool/`
to keep them separate from other case studies' assets.

One thing worth knowing: that folder is about 85MB on its own (mostly the
two large GIFs), on top of everything else already in this repo. Still
fine for GitHub Pages, but your total repo size is adding up — if upload
time becomes a real annoyance, converting the heaviest GIFs to a short
looping MP4/WebM would cut their size dramatically with no visible
quality loss, since GitHub Pages serves video natively.

## Just for Fun — removed entirely

The old site's "Just for Fun" page is **not** on the new site, by
request. It mixed two Halloween animations and a Dave Matthews Band
piece (both fine) with a Taylor Swift "Tortured Poets Department" promo
animation that used what looks like her official promotional photography,
recreated her TTPD wordmark in Illustrator, and offered a public download
link for the recreated logo's .ai files. That combination — a living
public figure's likeness, a reproduced trademark, and a redistributable
file — is a meaningfully higher-risk category than anything else reviewed
across this project, so rather than cut just that one piece, the decision
was to drop the page entirely. The Work grid tile has been removed; no
`projects/just-for-fun.html` was ever created. If you want a page in this
spirit later, the Dave Matthews Band piece and both Halloween animations
could still be ported over on their own, or paired with new original
content.

## Autumn Cafe

`projects/autumn-cafe.html` — a custom LEGO caf&eacute; you designed in
LEGO Digital Designer and physically built from parts sourced on
BrickLink. Like Vectors, nothing here needed IP curation: the build is
an original design (not a licensed set), and the LEGO community
explicitly welcomes this kind of fan creation through LEGO Ideas, where
you originally posted it.

Real metadata from the PDF (Project, Role, Software, Dimensions, Piece
count, Minifigure count), the full project story (the digital-to-physical
process, the LEGO Ideas post, the All Day Bricks review), the model's
mood description, and the eight custom minifigures' personas are all in.
From the old site's 30+ photos, a shortlist of 12 covers the full arc:
final digital design, front and back exterior, the top-down shot with
the roof removed, interior wide and detail shots, the minifigure head
designs, a barista close-up, the local songwriter outside, the caf&eacute;
signage, and a night shot. Linked from its Work grid tile — and its tile
caption was corrected from "Personal build &amp; stop-motion study" to
"Custom LEGO set design &amp; build," since no stop-motion is involved
in this project. No thumbnail set yet.

## Photography

`projects/photography.html` carries a curated shortlist of 12 from the
old site's ~30 photos, the same approach as JW Marriott: the stone head
sculpture, crescent moon, macro eye, hands forming a heart around an eye,
the black-and-white portrait of two kids in masks, the dinosaur
playground slide at dusk, a vinyl record on a turntable, the Strawberry
Fields "Imagine" mosaic, a golden statue, seagulls on a pier rail, a
woman at a hotel window overlooking the beach, and the full moon. No
Role/Software metadata was shown on the old site for this page, so the
section opens straight into the tagline ("Finding focus.") and the
figures. Unlike the illustrations page, nothing here needed cutting for
IP reasons — the only brand-adjacent shots (a McDonald's Happy Meal box,
a Rolling Stones poster, a LEGO minifigure) are photographs of real
objects, not illustrated characters, so they weren't automatically
excluded; they just didn't make this particular top-12 cut by image
strength. Linked from its Work grid tile; no thumbnail set yet.

## Vectors

`projects/vectors.html` — unlike the illustrations page, everything here
is either a generic object or your own original character design (the
AI chat bot from your Pearson work, and a new mascot called "Blocky"),
so there's no IP curation needed; the full set from the PDF is included.
Each of the 11 items gets two placeholders, matching the old site's
pattern of showing the finished icon next to its Illustrator project
file: Camera, cassette tape, roll of 35mm film, VHS tape,
AI chat bot, clapboard, boombox, synthesizer, typewriter, Building brick, and
Blocky. (The camera and brick were renamed from "Fujifilm X-T4 camera" and
"LEGO brick".) All but the VHS tape are in place; that pair is still a
placeholder. Role and Software/Hardware metadata came from the PDF (Artist,
Designer; Adobe Illustrator). Linked from its Work grid tile; no
thumbnail set yet.

## Illustrations & Sketches — curated, not a full port

`projects/illustrations-and-sketches.html` intentionally does **not**
include everything from the old Squarespace page. That page mixed a
handful of fully original illustrations with a much larger set of fan
art depicting licensed characters (Disney, Lucasfilm, Warner Bros.,
Hasbro, Nintendo, Peanuts, and more). On review, we agreed to leave the
character fan art off the professional site entirely — it carries real
trademark/IP exposure for a site meant to attract paid client work, and
muddies the signal next to your original client work elsewhere on the
site.

This page carries only the nine fully original pieces: A Boy and His
Guitar, The Boy The Girl & The City (plus its sketch/ink/paint process
shot), A Girl and Her Dreams, Pouting Parker, Girl on a Walk, School
Dayz, 1968, The Ballerina, and A Girl and Her Sparkler. Only three of
these have a second "time-lapse drawing" placeholder, by design — A Boy
and His Guitar, The Boy The Girl & The City, and A Girl and Her Sparkler
— chosen to avoid the repetitiveness of nine near-identical time-lapse
clips. The other six are static-image only. Role and Software/Hardware
metadata came from the PDF (Artist; Procreate on an iPad Pro with Apple
Pencil). No thumbnail has been set for this page's Work grid tile yet.

## How to Create a Pearson Educator Account

`projects/pearson-educator-account.html` is fully built out — real
metadata (Project, Client, Role, Software, Turnaround), the project
story (100+ new YouTube subscribers, 98% likes after 30,000 views), a
Vimeo embed for the final edit, the style frames grid, and the three
custom animations (thumbs up, people, logo). Note on the filenames: the
uploaded `outro_animation.gif` and `password_animation.gif` didn't
actually match their names — frame-by-frame inspection showed
`outro_animation.gif` is the thumbs-up icon and `password_animation.gif`
is the people icon, so they're saved here as `thumbs-up-animation.gif`
and `people-animation.gif` to match their real content. Assets live in
`projects/pearson-educator-account/`. Linked from its Work grid tile,
with `thumbnail.gif` (the MyLab &amp; Mastering laptop scene) set as that
tile's image.

Left out on purpose: the "Stock Footage vs. Color-Keyed and
Motion-Tracked Composite Edit" comparison mentioned in the PDF, since no
file was provided for it.

## How to Access Your Pearson eTextbook

`projects/pearson-etextbook.html` is fully built out — real metadata
(Project, Client, Role, Software, Turnaround), the project story
(including the 30% drop in help tickets after launch), a Vimeo embed for
the final edit, and five static/animated images in order: style frames,
the chroma-key composite, the 3D product shot, the UI vectors, and the
storyboard. Assets live in `projects/pearson-etextbook/`. Linked from its
Work grid tile, with `thumbnail.gif` set as that tile's image.

## JW Marriott Los Angeles Tourism

`projects/jw-marriott-tourism.html` is fully built out — real metadata
(Project, Client, Role, Cameras, Software, Turnaround), the project
story, and all 12 real photos from the agreed shortlist: Pacific
Palisades, two Griffith Observatory shots (the monument and the James
Dean bust with the Hollywood sign), the Academy Museum exterior and
Oscar statuette, two Hollywood Bowl shots (dusk and night), two Paramount
Studios shots (gate and water tower), the Hollywood &amp; Vine neon sign,
the El Capitan Theatre, and The Bungalow. Images live in
`projects/jw-marriott/`. Linked from its Work grid tile (caption
corrected from "Tourism &amp; destination video" to "tourism
photography," since this project is photography, not video) — that
tile's thumbnail is still the "Add thumbnail" placeholder, since no
image was specified for it.

## Destination

`projects/destination.html` is a brand-new case study for the VCRNOT
album art project, built from your Squarespace export — real metadata
(Project, Client, Role, Software, 2-day turnaround), your pitch for the
concept, and five static images in order: the final album art, the
website banner, the reference-photo-to-illustration pairing, the
concept-sketch-to-draft pairing, and the promotional shots. Assets live
in `projects/destination/`. Linked from its Work grid tile, with
`thumbnail.gif` set as that tile's image.

## Teach with the Revel App

`projects/teach-with-the-revel-app.html` is a brand-new case study, built
from your Squarespace export — real metadata (Project, Client, Role,
Software, Turnaround), the project narrative, a Vimeo embed for the
final edit, and five static images (style frames, the custom bumper
animation, the chroma-key before/after composite, the dark-mode
availability animation, and the phone composite breakdown). Assets live
in `projects/teach-with-the-revel-app/`. Linked from its Work grid tile;
no thumbnail image was provided, so that tile still shows the "Add
thumbnail" placeholder.

## Academy Museum Brand Animation

`projects/academy-museum-brand-animation.html` is fully built out — two
Vimeo embeds (the final long-form animation, landscape; the portrait
social cut), and five static images (style frames, both logo bumpers,
and the After Effects / Illustrator workspace shots). Assets live in
`projects/academy-museum/` to keep them separate from other case
studies'. The Work grid thumbnail uses
`projects/academy-museum/thumbnail.gif`.

## Universe Unknown — full case study

`projects/universe-unknown.html` now carries real metadata (Project,
Role, Software) and a description pulled from your own Squarespace
export, plus a "More from the album" section: final front/back cover
design and the singles art collage. Two PDFs are linked as plain
downloads rather than displayed inline —
`projects/universe-unknown/knowing-the-unknown.pdf` (the behind-the-music
booklet) and `handwritten-lyrics.pdf` — so the lyrics themselves never
appear as page content, only as a file the visitor can choose to open.

Left out on purpose: the Kickstarter funded confirmation, the Kickstarter
ad, and the SoundCloud feature (removed on request — those asset files
are no longer in `projects/universe-unknown/` either), plus the two demo
recordings, the Kickstarter campaign video, the short-film placement
mention, and the fan remixes section, since no files were provided for
those. Easy to add later following the same `.case-figure` / `.resume-cta`
patterns used elsewhere on this page.

## Midnight. Sound. Exile. — full case study

`projects/midnight-sound-exile.html` now carries real metadata (Project,
Role, Software) and a description pulled from your own Squarespace
export, plus a "More from the album" section with the final front/back
cover design and the singles art collage. Assets live in
`projects/midnight-sound-exile/`.

Left out on purpose, since no files were provided: the alternative
album art created for "Love & Cigarettes" and "Walking Down 5th at 2
A.M." that was ultimately not used to promote the album. Easy to add
later as another `.case-figure` if you want it shown.

## Album track players

`projects/universe-unknown.html` and `projects/midnight-sound-exile.html`
each have a custom track list (built to match the Reel page's timecode
look, not the browser's default `<audio>` bar) — click any track's play
button to start it; clicking another track stops the first and starts the
new one. All the logic lives in `player.js`, shared by both pages. Track
durations were read directly from the actual MP3 files, not estimated.

Cover art is in place on both pages (`projects/universe-unknown-cover.gif`
and `projects/midnight-sound-exile-cover.gif`), and reused as the Work
grid thumbnails for each album too.

One thing worth knowing: the `audio/` folder is about 95MB across both
albums, and the two cover GIFs add another ~34MB. That's all fine for
GitHub Pages and well under its limits, but it does make the initial repo
upload noticeably slower than everything else in this project — expect
that upload to take a few minutes, not seconds.

## The tagline animation

`tagline-animation.gif` (on the About page) has a fixed light-gray color
baked into its pixels — good contrast on a dark background, washed out on
the cream one. Since the color can't be edited in a GIF after export, the
CSS instead inverts it in light mode (`filter: invert(1)` on `.tagline-gif`
in `style.css`) and leaves it untouched in dark mode, flipping with the
same system-preference/override logic as the rest of the theme. If you
ever re-export this animation from its source file, it'd be worth baking
in your actual `--ink` color instead and dropping the CSS filter.

One thing worth knowing: this file is ~5MB, which is heavy for a page
load. It's marked `loading="lazy"` so it won't block anything above it,
but if you want a lighter file later, re-exporting as a WebP animation or
trimming the frame count would help.

## Before you publish

1. **Add your resume.** Drop a file named `resume.pdf` in this same folder
   — the Contact page already links to it.
2. **Swap in your reel.** In `reel.html`, the Vimeo embed is already wired
   to your reel (ID 821691392). If you update the reel itself, just swap
   that video ID.
3. **Fill in the Work grid** (`index.html`). Every tile is currently a
   flat-color placeholder labeled "Add thumbnail" — replace each
   `<div class="tile-thumb">Add thumbnail</div>` with an `<img>` tag
   pointing at a real still or GIF once you have one:
   ```html
   <div class="tile-thumb"><img src="thumbs/ai-study-tool.jpg" alt=""></div>
   ```
   You'll likely want a `thumbs/` folder for these images — add
   `object-fit: cover; width:100%; height:100%;` to `.tile-thumb img` in
   `style.css` once you do, so images crop into the frame cleanly.
4. **Build out more case studies.** `projects/ai-study-tool.html` is a full
   worked example with real metadata and real project copy — duplicate it
   for each additional piece, update the metadata rows and body text, and
   swap the placeholder `.placeholder` divs for real images, then link
   each Work tile's `href="#"` to the new file.
5. **Double-check the timecode fix.** The original reel breakdown had an
   overlapping timecode (two entries both starting at 00:35). This version
   adjusts "Happy Halloween animation" to start at 00:41 instead, assuming
   that was a typo — worth a quick sanity-check against the actual edit.

## Publishing

Same process as before: create a GitHub repo, upload these files
(including the `projects/` folder), enable GitHub Pages from Settings,
set the custom domain to chadsteahly.com, and update your domain's DNS
records.

One thing worth fixing on the registrar side while you're in there: the
About/Contact pages list `chadsteahly@icloud.com`. iCloud Mail now
supports custom domains, so `chad@chadsteahly.com` would match your
branding more closely if you want to set that up.
