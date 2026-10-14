# nirmaan-site

Source for the custom code on the Nirmaan Wix Studio site. Wix layout, menu and CMS live in the Wix editor; this repo holds what is pasted into it.

| File | Goes into |
|---|---|
| embeds/communities-page-list.html | Communities (dynamic list) page, embed #html18 |
| embeds/home-communities.html | Home, "Our communities" embed (#html11) |
| embeds/home-cta.html | Home, bottom call-to-action embed |
| embeds/home-impact.html, home-services.html | Home impact / services embeds |
| embeds/footer.html | Footer embed |
| velo/backend-http-functions.js | Wix backend -> http-functions.js (feed at /_functions/communities) |
| velo/communities-page.js | Page code of the Communities list page |
| velo/home-page-append.js | Append to the end of the Home page code |
| velo/item-page.js | Page code of "Import 1 (Item)" |
| docs/item-page-brief.md | Spec of the community item page |

To change an embed: edit the file here, open the element in the Wix editor, Edit Code -> Code, select all, paste, Update, then publish (ask the owner first).
See CLAUDE.md for rules and architecture.
