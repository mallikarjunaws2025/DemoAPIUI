
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5038, hash: '4fd8267f783f7fc04457ec1821b7ec1439fd059aab97af9b265878834fd0d081', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '25a2358e8f68eb95b4165c5445a0c428b3872f203f64d87b8d37098ba956461b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 11752, hash: 'c4482774b636ee2b7245b38d7c3a6ba5232163847bd610abf8360d759f718e49', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 20533, hash: '8d1926c1da32fc1f78cf64f08ba762e741fcf117be352b6c7c704babe93086dc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DPQ53L3S.css': {size: 230768, hash: 'eeRGZBkJAUs', text: () => import('./assets-chunks/styles-DPQ53L3S_css.mjs').then(m => m.default)}
  },
};
