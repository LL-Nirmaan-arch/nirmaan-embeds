// Page code: Communities (dynamic list page). Embed id: #html18
// Embeds cannot navigate the parent page, so the embed posts {slug} and we navigate here.
import wixLocationFrontend from 'wix-location-frontend';
$w.onReady(() => {
  $w('#html18').onMessage((e) => {
    const d = e.data;
    if (d && d.slug) { wixLocationFrontend.to('/communities/' + d.slug); }
  });
});
