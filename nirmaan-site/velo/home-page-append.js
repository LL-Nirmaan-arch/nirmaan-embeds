// Appended to the END of the existing Home page code (which also holds the impact counter animation).
import wixLocNav from 'wix-location-frontend';
$w.onReady(() => {
  try {
    $w('HtmlComponent').forEach((h) => {
      h.onMessage((e) => {
        const d = e.data;
        if (d && d.type === 'nav' && d.href) { wixLocNav.to(d.href); }
      });
    });
  } catch (err) { console.log('navErr', String(err)); }
});
