
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5038, hash: '7f3d4bae8b7064fdb5a397ee056be1b2ad8aa658767b58d2bc46a720e8e88ef5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '4cc4c84fc50076df4b0fd2e606e2471bd994178f397c94dd47bccf595362023a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14904, hash: 'f00719470cbed2ddca2295131887bde942cf7030add2c20c99aeec783a30913e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DPQ53L3S.css': {size: 230768, hash: 'eeRGZBkJAUs', text: () => import('./assets-chunks/styles-DPQ53L3S_css.mjs').then(m => m.default)}
  },
};
