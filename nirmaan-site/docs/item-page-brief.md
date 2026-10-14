# Wix AI brief: Community item page (dynamic "Import 1 (Item)")

RULES (paste first)
Edit the EXISTING dynamic item page "Import 1 (Item)" in place. Do NOT create a new page and do NOT detach or replace its dataset (collection "Communities", id Import1). Every text, image and button must stay connected to the dataset fields below. Do not add static copy about any one community. Do not publish.

STYLE
Colours: navy #123B78, dark navy #0D2A57, green #4AA54E, dark green #357A39, light green #E9F5EA, gold #E0A23D, ink #1E2430, page #FAFAFB, soft text #5C5F66, border #E6E6EA.
Fonts: Plus Jakarta Sans bold/extra-bold for headings, Inter for body. Radius 18-24px on cards, 10px on buttons. Generous spacing, 1160px content width.

SECTIONS, top to bottom (desktop 1280, then tablet 768 and mobile 390)

1. HERO (full width, about 440px tall)
 - Background: heroSectionImage (dynamic) with a navy #0D2A57 overlay at about 60%.
 - Breadcrumb: "Communities / {communityName}" (first part links to /communities).
 - Eyebrow: "{classification} · {state}" in small green #4AA54E uppercase text with a short green line before it.
 - Heading: heroSectionTagline, white, 800 weight, about 48px (32px on mobile).

2. ARTICLE + SIDE COLUMN (two columns on desktop: article 680px, side column 380px; stacked on mobile)
 Article column:
 - Lead paragraph: shortWriteup (rich text), first paragraph larger (about 20px), ink colour.
 - PULL QUOTE: a text element bound to pullQuote. Large Plus Jakarta Sans 24-28px, navy, with a 4px green #4AA54E left border and light green #E9F5EA background. Hide this element when pullQuote is empty.
 - Sub-heading "What Nirmaan is doing" (static label) then the rest of the write-up: shortTextmaincommunitiespage. Line height 1.7.
 Side column (sticky on desktop, top offset 100px; on mobile the "At a glance" card comes first, map after):
 - Map card: white card, border #E6E6EA, radius 20px. Image bound to map (hide the whole card when map is empty). Caption "Where {communityName} is spoken".
 - "At a glance" card: rows Region = region, State = state, Classification = classification, Community website = communityWebsiteLink as a green link button "Visit website" (hide row when empty).

3. GALLERY: photoGallery as a mosaic (one large tile plus four small) on desktop, swipe slideshow on mobile. Rounded 16px, gentle zoom on hover.

4. PREVIOUS / NEXT: two cards ("Previous community", "Next community") using the dataset's previous/next item links, each with communitiesImage, communityName and an arrow. Replaces any hard-wired "Know more about Ravula" link.

5. DONATE BAND: green #357A39 rounded band, heading "Help a community keep its language", text "Your support funds literacy, livelihoods and safe homes.", gold #E0A23D "Donate" button (links to the Donation page) and white-outlined "Get involved" button.

Keep the site header and footer unchanged.
