# Nirmaan website (Wix Studio) - working notes

- Site: "IT_Work_Ver", site ID d51d3c98-3aef-43d7-9d51-6455a1bb2933. Live: https://5297706.wixstudio.com/itnrm
- Editor: https://5297706-itnrm.editor.wix.com/studio/0e7a5408-cc83-49f6-a41a-c96c095dd58f?metaSiteId=d51d3c98-3aef-43d7-9d51-6455a1bb2933
- RULE: never publish and never change the domain without asking the owner first. Ask again for every publish.
- Do not create a new site. Edit this one.
- Canvas design reference: https://claude.ai/artifact/YavGBqw9iqA8X95gb9qxMY

## Design tokens
navy #123B78, navy-dark #0D2A57, green #4AA54E, green-dark #357A39, green-light #E9F5EA, gold #E0A23D, ink #1E2430, paper #FAFAFB, text-soft #5C5F66, border #E6E6EA. Fonts: Plus Jakarta Sans (headings), Inter (body).

## Architecture
- CMS collection "Communities" (id `Import1`). Fields: communityName, slug, region, state, classification, shortWriteup (rich text/HTML), shortTextmaincommunitiespage, Fullwriteup, pullQuote, heroSectionImage, communitiesImage, map, photoGallery, communityWebsiteLink. Only published items are listed; drafts are not.
- Dynamic list page /communities = one HTML embed (#html18) fed by `/_functions/communities` (velo/backend-http-functions.js; cached 120s, max 100 items). State filter chips are built from the data. New CMS items appear automatically.
- Dynamic item page "Import 1 (Item)" /communities/<slug>: native elements bound to the dataset + velo/item-page.js.
- Main menu "Communities" links to the dynamic list page ("Communities (Dynamic)"); its dropdown is a hand-made list of 7 community items (not dynamic).
- Home page sections are HTML embeds (embeds/home-*.html).

## Hard-won rules
- HTML embeds are sandboxed WITHOUT top-navigation: `<a target=_top>` does nothing. Pattern used instead: embed does `parent.postMessage({...},'*')`; the page's Velo code does `$w('#htmlId').onMessage(...)` and `wixLocationFrontend.to(...)`. See embeds + velo/*.js.
- The HTTP function is live only after publish.
- Wix editor is very laggy: pasting big code by typing can freeze it. Paste embeds by hand (Enter/Edit Code -> Code -> paste -> Apply/Update) and confirm the toolbar says "Edit Code". Editor can show an empty embed if the paste did not save.
- Only one editor tab at a time (two editors overwrite each other).
- After a CMS read, strip HTML from rich-text fields before showing them in embeds.

## Open items
- Item page: reduce white space between sections; donate band to canvas style (green #357A39, radius 24, ink-coloured gold button, "Help a community keep its language"); eyebrow/breadcrumb/gallery eyebrow styling; tablet + mobile check; test hide-when-empty on a community with blank fields. (Hero overlay: owner fixes manually.)
- /communities: mobile check. Optional: replace the menu dropdown with one "All Communities" entry.
- footer / impact / services embeds: check any links navigate (need the postMessage pattern + page script if they have links).
- Data: verify the 3 Jharkhand drafts' `state`; Shekhawati map missing; Ravula hero photo oddity; Privacy/Terms pages are generic.
