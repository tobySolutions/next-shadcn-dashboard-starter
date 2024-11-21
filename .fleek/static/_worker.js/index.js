const sharedGlobalProperties = new Set([
  '_nextOriginalFetch',
  'fetch',
  '__incrementalCache'
]);

function getProxyFor(route) {
  const existingProxy = globalThis.__nextOnPagesRoutesIsolation._map.get(route);
  if (existingProxy) {
    return existingProxy;
  }

  const newProxy = createNewRouteProxy();
  globalThis.__nextOnPagesRoutesIsolation._map.set(route, newProxy);
  return newProxy;
}

function createNewRouteProxy() {
  const overrides = new Map();

  return new Proxy(globalThis, {
    get: (_, property) => {
      if (overrides.has(property)) {
        return overrides.get(property);
      }
      return Reflect.get(globalThis, property);
    },
    set: (_, property, value) => {
      if (sharedGlobalProperties.has(property)) {
        // this property should be shared across all routes
        return Reflect.set(globalThis, property, value);
      }
      overrides.set(property, value);
      return true;
    }
  });
}

globalThis.__nextOnPagesRoutesIsolation ??= {
  _map: new Map(),
  getProxyFor
};

const originalFetch = globalThis.fetch;

function setRequestUserAgentIfNeeded(request) {
  if (!request.headers.has('user-agent')) {
    request.headers.set(`user-agent`, `Next.js Middleware`);
  }
}

const patchFlagSymbol = Symbol.for('next-on-pages fetch patch');

async function handleInlineAssetRequest(request) {
  if (request.url.startsWith('blob:')) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;
      const noExt = pathname.replace(/.html$/, '');
      const withExt = `${noExt.replace(/^\/$/, '/index')}.html`;

      const builtUrl = `https://${process.env.ASSETS_CID}.ipfs.flk-ipfs.xyz/_worker.js/__next-on-fleek-dist__/assets/${pathname}`;

      const response = await fetch(builtUrl);
      return Promise.resolve(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Failed to fetch from IPFS');
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
  return null;
}

globalThis.fetch = async (...args) => {
  const request = new Request(...args);

  const response = await handleInlineAssetRequest(request);
  if (response) return response;

  setRequestUserAgentIfNeeded(request);

  return originalFetch(request);
};

globalThis.ASSETS = {
  fetch: async (req) => {
    try {
      let pathname;
      if (req instanceof URL) {
        pathname = new URL(req).pathname;
      } else {
        pathname = new URL(req.url).pathname;
      }

      let assetPath = pathname;
      if (!/\.[^.]+$/.test(assetPath)) {
        const noExt = pathname.replace(/.html$/, '');
        assetPath = `${noExt.replace(/\/$/, '/index')}.html`;
      }

      const response = await fetch(
        `https://${process.env.ASSETS_CID}.ipfs.flk-ipfs.xyz${assetPath}`
      );
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

import('node:buffer')
  .then(({ Buffer }) => {
    globalThis.Buffer = Buffer;
  })
  .catch(() => null);

// <define:__BUILD_METADATA__>
var define_BUILD_METADATA_default = { collectedLocales: [] };

// <define:__CONFIG__>
var define_CONFIG_default = {
  version: 3,
  routes: {
    none: [
      {
        src: '^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$',
        headers: { Location: '/$1' },
        status: 308,
        continue: true
      },
      {
        src: '^/_next/__private/trace$',
        dest: '/404',
        status: 404,
        continue: true
      },
      {
        src: '^/404/?$',
        status: 404,
        continue: true,
        missing: [{ type: 'header', key: 'x-prerender-revalidate' }]
      },
      { src: '^/500$', status: 500, continue: true },
      {
        src: '^/_next/data/zJyc5dDhlSh4bJz3AM9bB/(.*).json$',
        dest: '/$1',
        override: true,
        continue: true,
        has: [{ type: 'header', key: 'x-nextjs-data' }]
      },
      {
        src: '^/index(?:/)?$',
        has: [{ type: 'header', key: 'x-nextjs-data' }],
        dest: '/',
        override: true,
        continue: true
      },
      {
        continue: true,
        src: '^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/dashboard(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(.json)?[\\/#\\?]?$',
        missing: [
          {
            type: 'header',
            key: 'x-prerender-revalidate',
            value: '7e8137e0e49114c4aa0156182c928400'
          }
        ],
        middlewarePath: 'middleware',
        middlewareRawSrc: ['/dashboard/:path*'],
        override: true
      },
      {
        src: '^/$',
        has: [{ type: 'header', key: 'x-nextjs-data' }],
        dest: '/_next/data/zJyc5dDhlSh4bJz3AM9bB/index.json',
        continue: true,
        override: true
      },
      {
        src: '^/((?!_next/)(?:.*[^/]|.*))/?$',
        has: [{ type: 'header', key: 'x-nextjs-data' }],
        dest: '/_next/data/zJyc5dDhlSh4bJz3AM9bB/$1.json',
        continue: true,
        override: true
      },
      {
        src: '^/?$',
        has: [{ type: 'header', key: 'rsc' }],
        dest: '/index.rsc',
        headers: { vary: 'RSC, Next-Router-State-Tree, Next-Router-Prefetch' },
        continue: true,
        override: true
      },
      {
        src: '^/((?!.+\\.rsc).+?)(?:/)?$',
        has: [{ type: 'header', key: 'rsc' }],
        dest: '/$1.rsc',
        headers: { vary: 'RSC, Next-Router-State-Tree, Next-Router-Prefetch' },
        continue: true,
        override: true
      }
    ],
    filesystem: [
      {
        src: '^/_next/data/zJyc5dDhlSh4bJz3AM9bB/(.*).json$',
        dest: '/$1',
        continue: true,
        has: [{ type: 'header', key: 'x-nextjs-data' }]
      },
      {
        src: '^/index(?:/)?$',
        has: [{ type: 'header', key: 'x-nextjs-data' }],
        dest: '/',
        continue: true
      },
      { src: '^/index(\\.action|\\.rsc)$', dest: '/', continue: true },
      {
        src: '^/\\.prefetch\\.rsc$',
        dest: '/__index.prefetch.rsc',
        check: true
      },
      {
        src: '^/(.+)/\\.prefetch\\.rsc$',
        dest: '/$1.prefetch.rsc',
        check: true
      },
      { src: '^/\\.rsc$', dest: '/index.rsc', check: true },
      { src: '^/(.+)/\\.rsc$', dest: '/$1.rsc', check: true }
    ],
    miss: [
      {
        src: '^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$',
        status: 404,
        check: true,
        dest: '$0'
      }
    ],
    rewrite: [
      {
        src: '^/$',
        has: [{ type: 'header', key: 'x-nextjs-data' }],
        dest: '/_next/data/zJyc5dDhlSh4bJz3AM9bB/index.json',
        continue: true
      },
      {
        src: '^/((?!_next/)(?:.*[^/]|.*))/?$',
        has: [{ type: 'header', key: 'x-nextjs-data' }],
        dest: '/_next/data/zJyc5dDhlSh4bJz3AM9bB/$1.json',
        continue: true
      },
      {
        src: '^/_next/data/zJyc5dDhlSh4bJz3AM9bB/api/auth/(?<nxtPnextauth>.+?)(?:/)?.json$',
        dest: '/api/auth/[...nextauth]?nxtPnextauth=$nxtPnextauth'
      },
      {
        src: '^/_next/data/zJyc5dDhlSh4bJz3AM9bB/dashboard/employee/(?<nxtPemployeeId>[^/]+?)(?:/)?.json$',
        dest: '/dashboard/employee/[employeeId]?nxtPemployeeId=$nxtPemployeeId'
      },
      {
        src: '^/_next/data/zJyc5dDhlSh4bJz3AM9bB/dashboard/product/(?<nxtPproductId>[^/]+?)(?:/)?.json$',
        dest: '/dashboard/product/[productId]?nxtPproductId=$nxtPproductId'
      },
      {
        src: '^/api/auth/(?<nxtPnextauth>.+?)(?:\\.rsc)(?:/)?$',
        dest: '/api/auth/[...nextauth].rsc?nxtPnextauth=$nxtPnextauth'
      },
      {
        src: '^/api/auth/(?<nxtPnextauth>.+?)(?:/)?$',
        dest: '/api/auth/[...nextauth]?nxtPnextauth=$nxtPnextauth'
      },
      {
        src: '^/dashboard/employee/(?<nxtPemployeeId>[^/]+?)(?:\\.rsc)(?:/)?$',
        dest: '/dashboard/employee/[employeeId].rsc?nxtPemployeeId=$nxtPemployeeId'
      },
      {
        src: '^/dashboard/employee/(?<nxtPemployeeId>[^/]+?)(?:/)?$',
        dest: '/dashboard/employee/[employeeId]?nxtPemployeeId=$nxtPemployeeId'
      },
      {
        src: '^/dashboard/product/(?<nxtPproductId>[^/]+?)(?:\\.rsc)(?:/)?$',
        dest: '/dashboard/product/[productId].rsc?nxtPproductId=$nxtPproductId'
      },
      {
        src: '^/dashboard/product/(?<nxtPproductId>[^/]+?)(?:/)?$',
        dest: '/dashboard/product/[productId]?nxtPproductId=$nxtPproductId'
      },
      {
        src: '^/_next/data/zJyc5dDhlSh4bJz3AM9bB/(.*).json$',
        headers: { 'x-nextjs-matched-path': '/$1' },
        continue: true,
        override: true
      },
      {
        src: '^/_next/data/zJyc5dDhlSh4bJz3AM9bB/(.*).json$',
        dest: '__next_data_catchall'
      }
    ],
    resource: [{ src: '^/.*$', status: 404 }],
    hit: [
      {
        src: '^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|zJyc5dDhlSh4bJz3AM9bB)/.+$',
        headers: { 'cache-control': 'public,max-age=31536000,immutable' },
        continue: true,
        important: true
      },
      {
        src: '^/index(?:/)?$',
        headers: { 'x-matched-path': '/' },
        continue: true,
        important: true
      },
      {
        src: '^/((?!index$).*?)(?:/)?$',
        headers: { 'x-matched-path': '/$1' },
        continue: true,
        important: true
      }
    ],
    error: [
      { src: '^/.*$', dest: '/_not-found', status: 404 },
      { src: '^/.*$', dest: '/500', status: 500 }
    ]
  },
  images: {
    domains: [],
    sizes: [
      640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256,
      384
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '^(?:^(?:utfs\\.io)$)$',
        port: '',
        pathname:
          '^(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?)\\/?)$'
      },
      {
        protocol: 'https',
        hostname: '^(?:^(?:api\\.slingacademy\\.com)$)$',
        port: '',
        pathname:
          '^(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?)\\/?)$'
      }
    ],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: 'inline'
  },
  overrides: {
    '500.html': { path: '500', contentType: 'text/html; charset=utf-8' },
    '_error.rsc.json': { path: '_error.rsc', contentType: 'application/json' },
    '_app.rsc.json': { path: '_app.rsc', contentType: 'application/json' },
    '_document.rsc.json': {
      path: '_document.rsc',
      contentType: 'application/json'
    },
    '__next_data_catchall.json': {
      path: '__next_data_catchall',
      contentType: 'application/json'
    }
  },
  framework: { version: '14.2.3' },
  crons: []
};

// ../../../../../var/folders/63/9hflp8dj309_6g63wsnhg44w0000gn/T/functions-ly8rh9x1ar.js
var __BUILD_OUTPUT__ = {
  '/500.html': {
    type: 'override',
    path: '/500.html',
    headers: { 'content-type': 'text/html; charset=utf-8' }
  },
  '/__next_data_catchall.json': {
    type: 'override',
    path: '/__next_data_catchall.json',
    headers: { 'content-type': 'application/json' }
  },
  '/_app.rsc.json': {
    type: 'override',
    path: '/_app.rsc.json',
    headers: { 'content-type': 'application/json' }
  },
  '/_document.rsc.json': {
    type: 'override',
    path: '/_document.rsc.json',
    headers: { 'content-type': 'application/json' }
  },
  '/_error.rsc.json': {
    type: 'override',
    path: '/_error.rsc.json',
    headers: { 'content-type': 'application/json' }
  },
  '/_next/static/chunks/0e5ce63c-1d5167ad4725b442.js': { type: 'static' },
  '/_next/static/chunks/134-98c6aad652e9077c.js': { type: 'static' },
  '/_next/static/chunks/136-7577c164ba323b06.js': { type: 'static' },
  '/_next/static/chunks/146-4fe4675e7631d141.js': { type: 'static' },
  '/_next/static/chunks/174-a9cc57459f0c4a6c.js': { type: 'static' },
  '/_next/static/chunks/208-8c4e6360da9f54ce.js': { type: 'static' },
  '/_next/static/chunks/236-939be4daffefb1c2.js': { type: 'static' },
  '/_next/static/chunks/243-726c9e9c5a3e181a.js': { type: 'static' },
  '/_next/static/chunks/268-c0d7c55dcf2acd91.js': { type: 'static' },
  '/_next/static/chunks/336-4ed56bf7b9d975f1.js': { type: 'static' },
  '/_next/static/chunks/366-6ea39c91cba4b8a5.js': { type: 'static' },
  '/_next/static/chunks/421-e8db43a5aa172a2e.js': { type: 'static' },
  '/_next/static/chunks/445-70006a086e351b9d.js': { type: 'static' },
  '/_next/static/chunks/526-5587da0d1f38366a.js': { type: 'static' },
  '/_next/static/chunks/534-3e5c6e080c3c85ea.js': { type: 'static' },
  '/_next/static/chunks/648-b26bc4ddb48592d8.js': { type: 'static' },
  '/_next/static/chunks/673-a2691877497a3027.js': { type: 'static' },
  '/_next/static/chunks/714-5a356d2981162622.js': { type: 'static' },
  '/_next/static/chunks/776-732dc6a04dfe4626.js': { type: 'static' },
  '/_next/static/chunks/795-32b0829921a59dc6.js': { type: 'static' },
  '/_next/static/chunks/953-949abbd4d5446f3d.js': { type: 'static' },
  '/_next/static/chunks/app/(auth)/(signin)/page-b84ddde1602c7053.js': {
    type: 'static'
  },
  '/_next/static/chunks/app/_not-found/page-e6b56191a017055f.js': {
    type: 'static'
  },
  '/_next/static/chunks/app/dashboard/employee/[employeeId]/page-d827dab6297cff62.js':
    { type: 'static' },
  '/_next/static/chunks/app/dashboard/employee/page-531e05e91eefae87.js': {
    type: 'static'
  },
  '/_next/static/chunks/app/dashboard/kanban/page-4eff76f11999de21.js': {
    type: 'static'
  },
  '/_next/static/chunks/app/dashboard/layout-131032455e2532f4.js': {
    type: 'static'
  },
  '/_next/static/chunks/app/dashboard/overview/page-1ece852abe18c1c2.js': {
    type: 'static'
  },
  '/_next/static/chunks/app/dashboard/page-7233f257006b49d9.js': {
    type: 'static'
  },
  '/_next/static/chunks/app/dashboard/product/[productId]/page-5ccc7137433c517b.js':
    { type: 'static' },
  '/_next/static/chunks/app/dashboard/product/page-f73d87e1c9d8c539.js': {
    type: 'static'
  },
  '/_next/static/chunks/app/dashboard/profile/page-352fd53026c3112f.js': {
    type: 'static'
  },
  '/_next/static/chunks/app/layout-88b2049aa9321c84.js': { type: 'static' },
  '/_next/static/chunks/app/not-found-171b21b3bcf5adbc.js': { type: 'static' },
  '/_next/static/chunks/fd9d1056-8af32bcc91b58be1.js': { type: 'static' },
  '/_next/static/chunks/framework-b370f160bb96059c.js': { type: 'static' },
  '/_next/static/chunks/main-5eb205853f3ff8ec.js': { type: 'static' },
  '/_next/static/chunks/main-app-010e644bca1d6d1a.js': { type: 'static' },
  '/_next/static/chunks/pages/_app-037b5d058bd9a820.js': { type: 'static' },
  '/_next/static/chunks/pages/_error-6ae619510b1539d6.js': { type: 'static' },
  '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js': { type: 'static' },
  '/_next/static/chunks/webpack-48cd821a99d1bfca.js': { type: 'static' },
  '/_next/static/css/4e2bc4e5b6a262aa.css': { type: 'static' },
  '/_next/static/media/162938472036e0a8-s.woff2': { type: 'static' },
  '/_next/static/media/4de1fea1a954a5b6-s.p.woff2': { type: 'static' },
  '/_next/static/media/6d664cce900333ee-s.p.woff2': { type: 'static' },
  '/_next/static/media/7ff6869a1704182a-s.p.woff2': { type: 'static' },
  '/_next/static/media/af4d27004aa34222-s.woff2': { type: 'static' },
  '/_next/static/media/f1df658da56627d0-s.woff2': { type: 'static' },
  '/_next/static/zJyc5dDhlSh4bJz3AM9bB/_buildManifest.js': { type: 'static' },
  '/_next/static/zJyc5dDhlSh4bJz3AM9bB/_ssgManifest.js': { type: 'static' },
  '/next.svg': { type: 'static' },
  '/vercel.svg': { type: 'static' },
  '/_not-found': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/_not-found.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/_not-found.func.js'
    )
  },
  '/_not-found.rsc': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/_not-found.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/_not-found.func.js'
    )
  },
  '/api/auth/[...nextauth]': {
    type: 'function',
    entrypoint:
      '__next-on-fleek-dist__/functions/api/auth/[...nextauth].func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/api/auth/[...nextauth].func.js'
    )
  },
  '/api/auth/[...nextauth].rsc': {
    type: 'function',
    entrypoint:
      '__next-on-fleek-dist__/functions/api/auth/[...nextauth].func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/api/auth/[...nextauth].func.js'
    )
  },
  '/dashboard/employee/[employeeId]': {
    type: 'function',
    entrypoint:
      '__next-on-fleek-dist__/functions/dashboard/employee/[employeeId].func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/employee/[employeeId].func.js'
    )
  },
  '/dashboard/employee/[employeeId].rsc': {
    type: 'function',
    entrypoint:
      '__next-on-fleek-dist__/functions/dashboard/employee/[employeeId].func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/employee/[employeeId].func.js'
    )
  },
  '/dashboard/employee': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard/employee.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/employee.func.js'
    )
  },
  '/dashboard/employee.rsc': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard/employee.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/employee.func.js'
    )
  },
  '/dashboard/kanban': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard/kanban.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/kanban.func.js'
    )
  },
  '/dashboard/kanban.rsc': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard/kanban.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/kanban.func.js'
    )
  },
  '/dashboard/overview': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard/overview.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/overview.func.js'
    )
  },
  '/dashboard/overview.rsc': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard/overview.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/overview.func.js'
    )
  },
  '/dashboard/product/[productId]': {
    type: 'function',
    entrypoint:
      '__next-on-fleek-dist__/functions/dashboard/product/[productId].func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/product/[productId].func.js'
    )
  },
  '/dashboard/product/[productId].rsc': {
    type: 'function',
    entrypoint:
      '__next-on-fleek-dist__/functions/dashboard/product/[productId].func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/product/[productId].func.js'
    )
  },
  '/dashboard/product': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard/product.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/product.func.js'
    )
  },
  '/dashboard/product.rsc': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard/product.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/product.func.js'
    )
  },
  '/dashboard/profile': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard/profile.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/profile.func.js'
    )
  },
  '/dashboard/profile.rsc': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard/profile.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard/profile.func.js'
    )
  },
  '/dashboard': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard.func.js'
    )
  },
  '/dashboard.rsc': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/dashboard.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/dashboard.func.js'
    )
  },
  '/index': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/index.func.js',
    handler: await import('./__next-on-fleek-dist__/functions/index.func.js')
  },
  '/': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/index.func.js',
    handler: await import('./__next-on-fleek-dist__/functions/index.func.js')
  },
  '/index.rsc': {
    type: 'function',
    entrypoint: '__next-on-fleek-dist__/functions/index.func.js',
    handler: await import('./__next-on-fleek-dist__/functions/index.func.js')
  },
  '/500': {
    type: 'override',
    path: '/500.html',
    headers: { 'content-type': 'text/html; charset=utf-8' }
  },
  '/_error.rsc': {
    type: 'override',
    path: '/_error.rsc.json',
    headers: { 'content-type': 'application/json' }
  },
  '/_app.rsc': {
    type: 'override',
    path: '/_app.rsc.json',
    headers: { 'content-type': 'application/json' }
  },
  '/_document.rsc': {
    type: 'override',
    path: '/_document.rsc.json',
    headers: { 'content-type': 'application/json' }
  },
  '/__next_data_catchall': {
    type: 'override',
    path: '/__next_data_catchall.json',
    headers: { 'content-type': 'application/json' }
  },
  '/favicon.ico': {
    type: 'override',
    path: '/favicon.ico',
    headers: {
      'cache-control': 'public, max-age=0, must-revalidate',
      'content-type': 'image/x-icon',
      'x-next-cache-tags':
        '_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico',
      vary: 'RSC, Next-Router-State-Tree, Next-Router-Prefetch'
    }
  },
  middleware: {
    type: 'middleware',
    entrypoint: '__next-on-fleek-dist__/functions/middleware.func.js',
    handler: await import(
      './__next-on-fleek-dist__/functions/middleware.func.js'
    )
  }
};

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/index.ts
import { AsyncLocalStorage } from 'node:async_hooks';

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/utils/pcre-to-regexp.ts
function createPCRE(pattern, namedCaptures = []) {
  pattern = String(pattern || '').trim();
  const originalPattern = pattern;
  let delim;
  let flags = '';
  const hasDelim = /^[^a-zA-Z\\\s]/.test(pattern);
  if (hasDelim) {
    delim = pattern[0];
    const lastDelimIndex = pattern.lastIndexOf(delim);
    flags += pattern.substring(lastDelimIndex + 1);
    pattern = pattern.substring(1, lastDelimIndex);
  }
  let numGroups = 0;
  pattern = replaceCaptureGroups(pattern, (group) => {
    if (/^\(\?[P<']/.test(group)) {
      const match = /^\(\?P?[<']([^>']+)[>']/.exec(group);
      if (!match) {
        throw new Error(
          `Failed to extract named captures from ${JSON.stringify(group)}`
        );
      }
      const capture = group.substring(match[0].length, group.length - 1);
      if (namedCaptures) {
        namedCaptures[numGroups] = match[1];
      }
      numGroups++;
      return `(${capture})`;
    }
    if (group.substring(0, 3) === '(?:') {
      return group;
    }
    numGroups++;
    return group;
  });
  pattern = pattern.replace(/\[:([^:]+):\]/g, (characterClass, name) => {
    return characterClasses[name] || characterClass;
  });
  return new PCRE(pattern, flags, namedCaptures, originalPattern, flags, delim);
}
function replaceCaptureGroups(pattern, fn) {
  let start = 0;
  let depth = 0;
  let escaped = false;
  for (let i = 0; i < pattern.length; i++) {
    const cur = pattern[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    switch (cur) {
      case '(':
        if (depth === 0) {
          start = i;
        }
        depth++;
        break;
      case ')':
        if (depth > 0) {
          depth--;
          if (depth === 0) {
            const end = i + 1;
            const l = start === 0 ? '' : pattern.substring(0, start);
            const r = pattern.substring(end);
            const v = String(fn(pattern.substring(start, end)));
            pattern = l + v + r;
            i = start;
          }
        }
        break;
      case '\\':
        escaped = true;
        break;
      default:
        break;
    }
  }
  return pattern;
}
var PCRE = class extends RegExp {
  namedCaptures;
  pcrePattern;
  pcreFlags;
  delimiter;
  constructor(
    pattern,
    flags,
    namedCaptures,
    pcrePattern,
    pcreFlags,
    delimiter
  ) {
    super(pattern, flags);
    this.namedCaptures = namedCaptures;
    this.pcrePattern = pcrePattern;
    this.pcreFlags = pcreFlags;
    this.delimiter = delimiter;
  }
};
var characterClasses = {
  alnum: '[A-Za-z0-9]',
  word: '[A-Za-z0-9_]',
  alpha: '[A-Za-z]',
  blank: '[ \\t]',
  cntrl: '[\\x00-\\x1F\\x7F]',
  digit: '\\d',
  graph: '[\\x21-\\x7E]',
  lower: '[a-z]',
  print: '[\\x20-\\x7E]',
  punct: '[\\]\\[!"#$%&\'()*+,./:;<=>?@\\\\^_`{|}~-]',
  space: '\\s',
  upper: '[A-Z]',
  xdigit: '[A-Fa-f0-9]'
};

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/utils/pcre.ts
function matchPCRE(expr, val, caseSensitive) {
  if (val === null || val === void 0) {
    return { match: null, captureGroupKeys: [] };
  }
  const flag = caseSensitive ? '' : 'i';
  const captureGroupKeys = [];
  const matcher = createPCRE(`%${expr}%${flag}`, captureGroupKeys);
  const match = matcher.exec(val);
  return { match, captureGroupKeys };
}
function applyPCREMatches(rawStr, match, captureGroupKeys, { namedOnly } = {}) {
  return rawStr.replace(/\$([a-zA-Z0-9_]+)/g, (originalValue, key) => {
    const index = captureGroupKeys.indexOf(key);
    if (namedOnly && index === -1) {
      return originalValue;
    }
    return (index === -1 ? match[parseInt(key, 10)] : match[index + 1]) || '';
  });
}

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/utils/matcher.ts
function checkhasField(has, { url, cookies, headers, routeDest }) {
  switch (has.type) {
    case 'host': {
      return { valid: url.hostname === has.value };
    }
    case 'header': {
      if (has.value !== void 0) {
        return getHasFieldPCREMatchResult(
          has.value,
          headers.get(has.key),
          routeDest
        );
      }
      return { valid: headers.has(has.key) };
    }
    case 'cookie': {
      const cookie = cookies[has.key];
      if (cookie && has.value !== void 0) {
        return getHasFieldPCREMatchResult(has.value, cookie, routeDest);
      }
      return { valid: cookie !== void 0 };
    }
    case 'query': {
      if (has.value !== void 0) {
        return getHasFieldPCREMatchResult(
          has.value,
          url.searchParams.get(has.key),
          routeDest
        );
      }
      return { valid: url.searchParams.has(has.key) };
    }
  }
}
function getHasFieldPCREMatchResult(hasValue, foundValue, routeDest) {
  const { match, captureGroupKeys } = matchPCRE(hasValue, foundValue);
  if (routeDest && match && captureGroupKeys.length) {
    return {
      valid: !!match,
      newRouteDest: applyPCREMatches(routeDest, match, captureGroupKeys, {
        namedOnly: true
      })
    };
  }
  return { valid: !!match };
}

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/utils/request.ts
function adjustRequestForVercel(request) {
  const adjustedHeaders = new Headers(request.headers);
  if (request.cf) {
    adjustedHeaders.set(
      'x-vercel-ip-city',
      encodeURIComponent(request.cf.city)
    );
    adjustedHeaders.set('x-vercel-ip-country', request.cf.country);
    adjustedHeaders.set('x-vercel-ip-country-region', request.cf.regionCode);
    adjustedHeaders.set('x-vercel-ip-latitude', request.cf.latitude);
    adjustedHeaders.set('x-vercel-ip-longitude', request.cf.longitude);
  }
  return new Request(request, { headers: adjustedHeaders });
}

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/utils/http.ts
function applyHeaders(target, source, pcreMatch) {
  const entries =
    source instanceof Headers ? source.entries() : Object.entries(source);
  for (const [key, value] of entries) {
    const lowerKey = key.toLowerCase();
    const newValue = pcreMatch?.match
      ? applyPCREMatches(value, pcreMatch.match, pcreMatch.captureGroupKeys)
      : value;
    if (lowerKey === 'set-cookie') {
      target.append(lowerKey, newValue);
    } else {
      target.set(lowerKey, newValue);
    }
  }
}
function isUrl(url) {
  return /^https?:\/\//.test(url);
}
function applySearchParams(target, source) {
  for (const [key, value] of source.entries()) {
    const nxtParamMatch = /^nxtP(.+)$/.exec(key);
    const nxtInterceptMatch = /^nxtI(.+)$/.exec(key);
    if (nxtParamMatch?.[1]) {
      target.set(key, value);
      target.set(nxtParamMatch[1], value);
    } else if (nxtInterceptMatch?.[1]) {
      target.set(nxtInterceptMatch[1], value.replace(/(\(\.+\))+/, ''));
    } else if (
      !target.has(key) ||
      (!!value && !target.getAll(key).includes(value))
    ) {
      target.append(key, value);
    }
  }
}
function createRouteRequest(req, path) {
  const newUrl = new URL(path, req.url);
  applySearchParams(newUrl.searchParams, new URL(req.url).searchParams);
  newUrl.pathname = newUrl.pathname
    .replace(/\/index.html$/, '/')
    .replace(/\.html$/, '');
  return new Request(newUrl, req);
}
function createMutableResponse(resp) {
  return new Response(resp.body, resp);
}
function parseAcceptLanguage(headerValue) {
  return headerValue
    .split(',')
    .map((val) => {
      const [lang, qual] = val.split(';');
      const quality = parseFloat((qual ?? 'q=1').replace(/q *= */gi, ''));
      return [lang.trim(), isNaN(quality) ? 1 : quality];
    })
    .sort((a, b) => b[1] - a[1])
    .map(([locale]) => (locale === '*' || locale === '' ? [] : locale))
    .flat();
}

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/utils/routing.ts
function getNextPhase(phase) {
  switch (phase) {
    case 'none': {
      return 'filesystem';
    }
    case 'filesystem': {
      return 'rewrite';
    }
    case 'rewrite': {
      return 'resource';
    }
    case 'resource': {
      return 'miss';
    }
    default: {
      return 'miss';
    }
  }
}
async function runOrFetchBuildOutputItem(
  item,
  { request, assetsFetcher, ctx },
  { path, searchParams }
) {
  let resp = void 0;
  const url = new URL(request.url);
  applySearchParams(url.searchParams, searchParams);
  const req = new Request(url, request);
  try {
    switch (item?.type) {
      case 'function':
      case 'middleware': {
        const edgeFunction = item.handler;
        try {
          resp = await edgeFunction.default(req, ctx);
        } catch (e) {
          const err = e;
          if (
            err.name === 'TypeError' &&
            err.message.endsWith('default is not a function')
          ) {
            throw new Error(
              `An error occurred while evaluating the target edge function (${item.entrypoint})`
            );
          }
          throw e;
        }
        break;
      }
      case 'override': {
        resp = createMutableResponse(
          await assetsFetcher.fetch(createRouteRequest(req, item.path ?? path))
        );
        if (item.headers) {
          applyHeaders(resp.headers, item.headers);
        }
        break;
      }
      case 'static': {
        resp = await assetsFetcher.fetch(createRouteRequest(req, path));
        break;
      }
      default: {
        resp = new Response('Not Found', { status: 404 });
      }
    }
  } catch (e) {
    console.error(e);
    return new Response('Internal Server Error', { status: 500 });
  }
  return createMutableResponse(resp);
}
function isLocaleTrailingSlashRegex(src, locales) {
  const prefix = '^//?(?:';
  const suffix = ')/(.*)$';
  if (!src.startsWith(prefix) || !src.endsWith(suffix)) {
    return false;
  }
  const foundLocales = src.slice(prefix.length, -suffix.length).split('|');
  return foundLocales.every((locale) => locales.has(locale));
}

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/utils/images.ts
function isRemotePatternMatch(url, { protocol, hostname, port, pathname }) {
  if (protocol && url.protocol.replace(/:$/, '') !== protocol) return false;
  if (!new RegExp(hostname).test(url.hostname)) return false;
  if (port && !new RegExp(port).test(url.port)) return false;
  if (pathname && !new RegExp(pathname).test(url.pathname)) return false;
  return true;
}
function getResizingProperties(request, config) {
  if (request.method !== 'GET') return void 0;
  const { origin, searchParams } = new URL(request.url);
  const rawUrl = searchParams.get('url');
  const width = Number.parseInt(searchParams.get('w') ?? '', 10);
  const quality = Number.parseInt(searchParams.get('q') ?? '75', 10);
  if (!rawUrl || Number.isNaN(width) || Number.isNaN(quality)) return void 0;
  if (!config?.sizes?.includes(width)) return void 0;
  if (quality < 0 || quality > 100) return void 0;
  const url = new URL(rawUrl, origin);
  if (url.pathname.endsWith('.svg') && !config?.dangerouslyAllowSVG) {
    return void 0;
  }
  const isProtocolRelative = rawUrl.startsWith('//');
  const isRelative = rawUrl.startsWith('/') && !isProtocolRelative;
  if (
    !isRelative &&
    !config?.domains?.includes(url.hostname) &&
    !config?.remotePatterns?.find((pattern) =>
      isRemotePatternMatch(url, pattern)
    )
  ) {
    return void 0;
  }
  const acceptHeader = request.headers.get('Accept') ?? '';
  const format = config?.formats
    ?.find((format2) => acceptHeader.includes(format2))
    ?.replace('image/', '');
  return {
    isRelative,
    imageUrl: url,
    options: { width, quality, format }
  };
}
function formatResp(resp, imageUrl, config) {
  const newHeaders = new Headers();
  if (config?.contentSecurityPolicy) {
    newHeaders.set('Content-Security-Policy', config.contentSecurityPolicy);
  }
  if (config?.contentDispositionType) {
    const fileName = imageUrl.pathname.split('/').pop();
    const contentDisposition = fileName
      ? `${config.contentDispositionType}; filename="${fileName}"`
      : config.contentDispositionType;
    newHeaders.set('Content-Disposition', contentDisposition);
  }
  if (!resp.headers.has('Cache-Control')) {
    newHeaders.set(
      'Cache-Control',
      `public, max-age=${config?.minimumCacheTTL ?? 60}`
    );
  }
  const mutableResponse = createMutableResponse(resp);
  applyHeaders(mutableResponse.headers, newHeaders);
  return mutableResponse;
}
async function handleImageResizingRequest(
  request,
  { buildOutput, assetsFetcher, imagesConfig }
) {
  const opts = getResizingProperties(request, imagesConfig);
  if (!opts) {
    return new Response('Invalid image resizing request', { status: 400 });
  }
  const { isRelative, imageUrl } = opts;
  const imgFetch =
    isRelative && imageUrl.pathname in buildOutput
      ? assetsFetcher.fetch.bind(assetsFetcher)
      : fetch;
  const imageResp = await imgFetch(imageUrl);
  return formatResp(imageResp, imageUrl, imagesConfig);
}

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/routes-matcher.ts
function decode(str) {
  return str.indexOf('%') !== -1 ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf('=', index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(';', index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(';', eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
var RoutesMatcher = class {
  constructor(routes, output, reqCtx, buildMetadata, wildcardConfig) {
    this.routes = routes;
    this.output = output;
    this.reqCtx = reqCtx;
    this.url = new URL(reqCtx.request.url);
    this.cookies = parse(reqCtx.request.headers.get('cookie') || '');
    this.path = this.url.pathname || '/';
    this.headers = { normal: new Headers(), important: new Headers() };
    this.searchParams = new URLSearchParams();
    applySearchParams(this.searchParams, this.url.searchParams);
    this.checkPhaseCounter = 0;
    this.middlewareInvoked = [];
    this.wildcardMatch = wildcardConfig?.find(
      (w) => w.domain === this.url.hostname
    );
    this.locales = new Set(buildMetadata.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(route, { checkStatus, checkIntercept }) {
    const srcMatch = matchPCRE(route.src, this.path, route.caseSensitive);
    if (!srcMatch.match) return;
    if (
      route.methods &&
      !route.methods
        .map((m) => m.toUpperCase())
        .includes(this.reqCtx.request.method.toUpperCase())
    ) {
      return;
    }
    const hasFieldProps = {
      url: this.url,
      cookies: this.cookies,
      headers: this.reqCtx.request.headers,
      routeDest: route.dest
    };
    if (
      route.has?.find((has) => {
        const result = checkhasField(has, hasFieldProps);
        if (result.newRouteDest) {
          hasFieldProps.routeDest = result.newRouteDest;
        }
        return !result.valid;
      })
    ) {
      return;
    }
    if (route.missing?.find((has) => checkhasField(has, hasFieldProps).valid)) {
      return;
    }
    if (checkStatus && route.status !== this.status) {
      return;
    }
    if (checkIntercept && route.dest) {
      const interceptRouteRegex = /\/(\(\.+\))+/;
      const destIsIntercept = interceptRouteRegex.test(route.dest);
      const pathIsIntercept = interceptRouteRegex.test(this.path);
      if (destIsIntercept && !pathIsIntercept) {
        return;
      }
    }
    return { routeMatch: srcMatch, routeDest: hasFieldProps.routeDest };
  }
  processMiddlewareResp(resp) {
    const overrideKey = 'x-middleware-override-headers';
    const overrideHeader = resp.headers.get(overrideKey);
    if (overrideHeader) {
      const overridenHeaderKeys = new Set(
        overrideHeader.split(',').map((h) => h.trim())
      );
      for (const key of overridenHeaderKeys.keys()) {
        const valueKey = `x-middleware-request-${key}`;
        const value = resp.headers.get(valueKey);
        if (this.reqCtx.request.headers.get(key) !== value) {
          if (value) {
            this.reqCtx.request.headers.set(key, value);
          } else {
            this.reqCtx.request.headers.delete(key);
          }
        }
        resp.headers.delete(valueKey);
      }
      resp.headers.delete(overrideKey);
    }
    const rewriteKey = 'x-middleware-rewrite';
    const rewriteHeader = resp.headers.get(rewriteKey);
    if (rewriteHeader) {
      const newUrl = new URL(rewriteHeader, this.url);
      const rewriteIsExternal = this.url.hostname !== newUrl.hostname;
      this.path = rewriteIsExternal ? `${newUrl}` : newUrl.pathname;
      applySearchParams(this.searchParams, newUrl.searchParams);
      resp.headers.delete(rewriteKey);
    }
    const middlewareNextKey = 'x-middleware-next';
    const middlewareNextHeader = resp.headers.get(middlewareNextKey);
    if (middlewareNextHeader) {
      resp.headers.delete(middlewareNextKey);
    } else if (!rewriteHeader && !resp.headers.has('location')) {
      this.body = resp.body;
      this.status = resp.status;
    } else if (
      resp.headers.has('location') &&
      resp.status >= 300 &&
      resp.status < 400
    ) {
      this.status = resp.status;
    }
    applyHeaders(this.reqCtx.request.headers, resp.headers);
    applyHeaders(this.headers.normal, resp.headers);
    this.headers.middlewareLocation = resp.headers.get('location');
  }
  async runRouteMiddleware(path) {
    if (!path) return true;
    const item = path && this.output[path];
    if (!item || item.type !== 'middleware') {
      this.status = 500;
      return false;
    }
    const resp = await runOrFetchBuildOutputItem(item, this.reqCtx, {
      path: this.path,
      searchParams: this.searchParams,
      headers: this.headers,
      status: this.status
    });
    this.middlewareInvoked.push(path);
    if (resp.status === 500) {
      this.status = resp.status;
      return false;
    }
    this.processMiddlewareResp(resp);
    return true;
  }
  applyRouteOverrides(route) {
    if (!route.override) return;
    this.status = void 0;
    this.headers.normal = new Headers();
    this.headers.important = new Headers();
  }
  applyRouteHeaders(route, srcMatch, captureGroupKeys) {
    if (!route.headers) return;
    applyHeaders(this.headers.normal, route.headers, {
      match: srcMatch,
      captureGroupKeys
    });
    if (route.important) {
      applyHeaders(this.headers.important, route.headers, {
        match: srcMatch,
        captureGroupKeys
      });
    }
  }
  applyRouteStatus(route) {
    if (!route.status) return;
    this.status = route.status;
  }
  applyRouteDest(route, srcMatch, captureGroupKeys) {
    if (!route.dest) return this.path;
    const prevPath = this.path;
    let processedDest = route.dest;
    if (this.wildcardMatch && /\$wildcard/.test(processedDest)) {
      processedDest = processedDest.replace(
        /\$wildcard/g,
        this.wildcardMatch.value
      );
    }
    this.path = applyPCREMatches(processedDest, srcMatch, captureGroupKeys);
    const isRscIndex = /\/index\.rsc$/i.test(this.path);
    const isPrevAbsoluteIndex = /^\/(?:index)?$/i.test(prevPath);
    const isPrevPrefetchRscIndex = /^\/__index\.prefetch\.rsc$/i.test(prevPath);
    if (isRscIndex && !isPrevAbsoluteIndex && !isPrevPrefetchRscIndex) {
      this.path = prevPath;
    }
    const isRsc = /\.rsc$/i.test(this.path);
    const isPrefetchRsc = /\.prefetch\.rsc$/i.test(this.path);
    const pathExistsInOutput = this.path in this.output;
    if (isRsc && !isPrefetchRsc && !pathExistsInOutput) {
      this.path = this.path.replace(/\.rsc/i, '');
    }
    const destUrl = new URL(this.path, this.url);
    applySearchParams(this.searchParams, destUrl.searchParams);
    if (!isUrl(this.path)) this.path = destUrl.pathname;
    return prevPath;
  }
  applyLocaleRedirects(route) {
    if (!route.locale?.redirect) return;
    const srcIsRegex = /^\^(.)*$/.test(route.src);
    if (!srcIsRegex && route.src !== this.path) return;
    if (this.headers.normal.has('location')) return;
    const {
      locale: { redirect: redirects, cookie: cookieName }
    } = route;
    const cookieValue = cookieName && this.cookies[cookieName];
    const cookieLocales = parseAcceptLanguage(cookieValue ?? '');
    const headerLocales = parseAcceptLanguage(
      this.reqCtx.request.headers.get('accept-language') ?? ''
    );
    const locales = [...cookieLocales, ...headerLocales];
    const redirectLocales = locales
      .map((locale) => redirects[locale])
      .filter(Boolean);
    const redirectValue = redirectLocales[0];
    if (redirectValue) {
      const needsRedirecting = !this.path.startsWith(redirectValue);
      if (needsRedirecting) {
        this.headers.normal.set('location', redirectValue);
        this.status = 307;
      }
      return;
    }
  }
  getLocaleFriendlyRoute(route, phase) {
    if (!this.locales || phase !== 'miss') {
      return route;
    }
    if (isLocaleTrailingSlashRegex(route.src, this.locales)) {
      return {
        ...route,
        src: route.src.replace(/\/\(\.\*\)\$$/, '(?:/(.*))?$')
      };
    }
    return route;
  }
  async checkRoute(phase, rawRoute) {
    const localeFriendlyRoute = this.getLocaleFriendlyRoute(rawRoute, phase);
    const { routeMatch, routeDest } =
      this.checkRouteMatch(localeFriendlyRoute, {
        checkStatus: phase === 'error',
        checkIntercept: phase === 'rewrite'
      }) ?? {};
    const route = { ...localeFriendlyRoute, dest: routeDest };
    if (!routeMatch?.match) return 'skip';
    if (
      route.middlewarePath &&
      this.middlewareInvoked.includes(route.middlewarePath)
    ) {
      return 'skip';
    }
    const { match: srcMatch, captureGroupKeys } = routeMatch;
    this.applyRouteOverrides(route);
    this.applyLocaleRedirects(route);
    const success = await this.runRouteMiddleware(route.middlewarePath);
    if (!success) return 'error';
    if (this.body !== void 0 || this.headers.middlewareLocation) {
      return 'done';
    }
    this.applyRouteHeaders(route, srcMatch, captureGroupKeys);
    this.applyRouteStatus(route);
    const prevPath = this.applyRouteDest(route, srcMatch, captureGroupKeys);
    if (route.check && !isUrl(this.path)) {
      if (prevPath === this.path) {
        if (phase !== 'miss') {
          return this.checkPhase(getNextPhase(phase));
        }
        this.status = 404;
      } else if (phase === 'miss') {
        if (
          !(this.path in this.output) &&
          !(this.path.replace(/\/$/, '') in this.output)
        ) {
          return this.checkPhase('filesystem');
        }
        if (this.status === 404) {
          this.status = void 0;
        }
      } else {
        return this.checkPhase('none');
      }
    }
    if (!route.continue) {
      return 'done';
    }
    const isRedirect =
      route.status && route.status >= 300 && route.status <= 399;
    if (isRedirect) {
      return 'done';
    }
    return 'next';
  }
  async checkPhase(phase) {
    if (this.checkPhaseCounter++ >= 50) {
      console.error(
        `Routing encountered an infinite loop while checking ${this.url.pathname}`
      );
      this.status = 500;
      return 'error';
    }
    this.middlewareInvoked = [];
    let shouldContinue = true;
    for (const route of this.routes[phase]) {
      const result = await this.checkRoute(phase, route);
      if (result === 'error') {
        return 'error';
      }
      if (result === 'done') {
        shouldContinue = false;
        break;
      }
    }
    if (
      phase === 'hit' ||
      isUrl(this.path) ||
      this.headers.normal.has('location') ||
      !!this.body
    ) {
      return 'done';
    }
    if (phase === 'none') {
      for (const locale of this.locales) {
        const localeRegExp = new RegExp(`/${locale}(/.*)`);
        const match = this.path.match(localeRegExp);
        const pathWithoutLocale = match?.[1];
        if (pathWithoutLocale && pathWithoutLocale in this.output) {
          this.path = pathWithoutLocale;
          break;
        }
      }
    }
    let pathExistsInOutput = this.path in this.output;
    if (!pathExistsInOutput && this.path.endsWith('/')) {
      const newPath = this.path.replace(/\/$/, '');
      pathExistsInOutput = newPath in this.output;
      if (pathExistsInOutput) {
        this.path = newPath;
      }
    }
    if (phase === 'miss' && !pathExistsInOutput) {
      const should404 = !this.status || this.status < 400;
      this.status = should404 ? 404 : this.status;
    }
    let nextPhase = 'miss';
    if (pathExistsInOutput || phase === 'miss' || phase === 'error') {
      nextPhase = 'hit';
    } else if (shouldContinue) {
      nextPhase = getNextPhase(phase);
    }
    return this.checkPhase(nextPhase);
  }
  async run(phase = 'none') {
    this.checkPhaseCounter = 0;
    const result = await this.checkPhase(phase);
    if (
      this.headers.normal.has('location') &&
      (!this.status || this.status < 300 || this.status >= 400)
    ) {
      this.status = 307;
    }
    return result;
  }
};

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/handleRequest.ts
async function handleRequest(reqCtx, config, output, buildMetadata) {
  const matcher = new RoutesMatcher(
    config.routes,
    output,
    reqCtx,
    buildMetadata,
    config.wildcard
  );
  const match = await findMatch(matcher);
  return generateResponse(reqCtx, match, output);
}
async function findMatch(matcher, phase = 'none', skipErrorMatch = false) {
  const result = await matcher.run(phase);
  if (
    result === 'error' ||
    (!skipErrorMatch && matcher.status && matcher.status >= 400)
  ) {
    return findMatch(matcher, 'error', true);
  }
  return {
    path: matcher.path,
    status: matcher.status,
    headers: matcher.headers,
    searchParams: matcher.searchParams,
    body: matcher.body
  };
}
async function generateResponse(
  reqCtx,
  { path = '/404', status, headers, searchParams, body },
  output
) {
  const locationHeader = headers.normal.get('location');
  if (locationHeader) {
    if (locationHeader !== headers.middlewareLocation) {
      const paramsStr = [...searchParams.keys()].length
        ? `?${searchParams.toString()}`
        : '';
      headers.normal.set('location', `${locationHeader ?? '/'}${paramsStr}`);
    }
    return new Response(null, { status, headers: headers.normal });
  }
  let resp;
  if (body !== void 0) {
    resp = new Response(body, { status });
  } else if (isUrl(path)) {
    const url = new URL(path);
    applySearchParams(url.searchParams, searchParams);
    resp = await fetch(url, reqCtx.request);
  } else {
    resp = await runOrFetchBuildOutputItem(output[path], reqCtx, {
      path,
      status,
      headers,
      searchParams
    });
  }
  const newHeaders = headers.normal;
  applyHeaders(newHeaders, resp.headers);
  applyHeaders(newHeaders, headers.important);
  resp = new Response(resp.body, {
    ...resp,
    status: status || resp.status,
    headers: newHeaders
  });
  return resp;
}

// ../../../.nvm/versions/node/v18.20.4/lib/node_modules/@fleek-platform/next/node_modules/@fleek-platform/next-on-fleek/templates/_worker.js/index.ts
async function main(fleekRequest) {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_, ...args) =>
          Reflect.getOwnPropertyDescriptor(
            envAsyncLocalStorage.getStore(),
            ...args
          ),
        get: (_, property) =>
          Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_, property, value) =>
          Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for('__fleek-request-context__')] = new Proxy(
    {},
    {
      ownKeys: () =>
        Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_, ...args) =>
        Reflect.getOwnPropertyDescriptor(
          requestContextAsyncLocalStorage.getStore(),
          ...args
        ),
      get: (_, property) =>
        Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_, property, value) =>
        Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  const request = await adaptFleekRequestToFetch(fleekRequest);
  return envAsyncLocalStorage.run({}, async () => {
    return requestContextAsyncLocalStorage.run({ request }, async () => {
      const url = new URL(request.url);
      if (url.pathname.startsWith('/_next/image')) {
        const res2 = await handleImageResizingRequest(request, {
          buildOutput: __BUILD_OUTPUT__,
          assetsFetcher: globalThis.ASSETS,
          imagesConfig: define_CONFIG_default.images
        });
        return adaptFetchResponseToFleekResponse(res2);
      }
      const adjustedRequest = adjustRequestForVercel(request);
      const res = await handleRequest(
        {
          request: adjustedRequest,
          ctx: globalThis.CONTEXT,
          assetsFetcher: globalThis.ASSETS
        },
        define_CONFIG_default,
        __BUILD_OUTPUT__,
        define_BUILD_METADATA_default
      );
      const response = await adaptFetchResponseToFleekResponse(res);
      return response;
    });
  });
}
async function adaptFleekRequestToFetch(fleekRequest) {
  let url;
  if (fleekRequest.headers?.['origin']) {
    url = new URL(`${fleekRequest.headers['origin']}${fleekRequest.path}`);
  } else {
    url = new URL(`http://0.0.0.0${fleekRequest.path}`);
  }
  for (const [key, value] of Object.entries(fleekRequest.query ?? {})) {
    url.searchParams.append(key, value);
  }
  return new Request(url, {
    method: fleekRequest.method,
    headers: fleekRequest.headers,
    body: !fleekRequest.body
      ? null
      : typeof fleekRequest.body === 'object'
      ? JSON.stringify(fleekRequest.body)
      : fleekRequest.body
  });
}
async function adaptFetchResponseToFleekResponse(response) {
  const headers = {};
  response.headers.forEach((value, key) => {
    headers[key] = value;
  });
  return {
    status: response.status,
    headers,
    body: await response.bytes()
  };
}
export { main };
