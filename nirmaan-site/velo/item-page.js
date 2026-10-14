// Page code: Import 1 (Item) - /communities/<slug>. Dataset id: #dynamicDataset
import wixDataNav from 'wix-data';
const show = (sel, on) => { try { on ? $w(sel).expand() : $w(sel).collapse(); } catch (e) {} };
// Hide optional blocks when the CMS field is empty: pull quote, gallery, website button.
const apply = (item) => {
  if (!item) return;
  show('#box58', !!(item.pullQuote && String(item.pullQuote).trim()));
  show('#gallery1', Array.isArray(item.photoGallery) && item.photoGallery.length > 0);
  show('#button2', !!(item.communityWebsiteLink && String(item.communityWebsiteLink).trim()));
};
// Previous / Next buttons with community names (newest-first order, same as the dataset sort).
const setNav = async (item) => {
  try {
    if (!item || !item._id) return;
    const r = await wixDataNav.query('Import1').descending('_createdDate').limit(100).find();
    const l = r.items;
    const i = l.findIndex((x) => x._id === item._id);
    if (i < 0) return;
    const p = l[i - 1];
    const n = l[i + 1];
    if (p) { $w('#button3').label = 'Previous: ' + p.communityName; $w('#button3').expand(); } else { $w('#button3').collapse(); }
    if (n) { $w('#button1').label = 'Next: ' + n.communityName; $w('#button1').expand(); } else { $w('#button1').collapse(); }
  } catch (e) { console.log('navErr', String(e)); }
};
$w.onReady(() => {
  const ds = $w('#dynamicDataset');
  ds.onReady(() => { apply(ds.getCurrentItem()); setNav(ds.getCurrentItem()); });
  ds.onCurrentIndexChanged(() => { apply(ds.getCurrentItem()); setNav(ds.getCurrentItem()); });
});
