// <stdin>
import { __getNamedExports as __getNamedExports_0 } from '../../__next-on-fleek-dist__/webpack/e09656928cc9d8a53a8167eff7de69b6.js';
var proxy = globalThis.__nextOnPagesRoutesIsolation.getProxyFor('/middleware');
var __exportsOf__getNamedExports_0 = __getNamedExports_0(proxy, proxy, proxy);
var __chunk_649 = __exportsOf__getNamedExports_0['__chunk_649'];
var __chunk_4704 = __exportsOf__getNamedExports_0['__chunk_4704'];
var __chunk_55612 = __exportsOf__getNamedExports_0['__chunk_55612'];
var __chunk_87792 = __exportsOf__getNamedExports_0['__chunk_87792'];
var __chunk_26195 = __exportsOf__getNamedExports_0['__chunk_26195'];
var __chunk_2067 = __exportsOf__getNamedExports_0['__chunk_2067'];
var stdin_default = ((self, globalThis2, global) => {
  globalThis2._ENTRIES = {};
  self.__PRERENDER_MANIFEST =
    '{"version":4,"routes":{"/favicon.ico":{"initialHeaders":{"cache-control":"public, max-age=0, must-revalidate","content-type":"image/x-icon","x-next-cache-tags":"_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico"},"experimentalBypassFor":[{"type":"header","key":"Next-Action"},{"type":"header","key":"content-type","value":"multipart/form-data;.*"}],"initialRevalidateSeconds":false,"srcRoute":"/favicon.ico","dataRoute":null}},"dynamicRoutes":{},"notFoundRoutes":[],"preview":{"previewModeId":"process.env.__NEXT_PREVIEW_MODE_ID","previewModeSigningKey":"process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY","previewModeEncryptionKey":"process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY"}}';
  (() => {
    'use strict';
    var e = {},
      r = {};
    function t(o) {
      var n = r[o];
      if (void 0 !== n) return n.exports;
      var l = (r[o] = { id: o, loaded: false, exports: {} }),
        a = true;
      try {
        e[o].call(l.exports, l, l.exports, t), (a = false);
      } finally {
        a && delete r[o];
      }
      return (l.loaded = true), l.exports;
    }
    (t.m = e),
      (t.amdO = {}),
      (() => {
        var e2 = [];
        t.O = (r2, o, n, l) => {
          if (o) {
            l = l || 0;
            for (var a = e2.length; a > 0 && e2[a - 1][2] > l; a--)
              e2[a] = e2[a - 1];
            e2[a] = [o, n, l];
            return;
          }
          for (var i = 1 / 0, a = 0; a < e2.length; a++) {
            for (var [o, n, l] = e2[a], f = true, u = 0; u < o.length; u++)
              i >= l && Object.keys(t.O).every((e3) => t.O[e3](o[u]))
                ? o.splice(u--, 1)
                : ((f = false), l < i && (i = l));
            if (f) {
              e2.splice(a--, 1);
              var c = n();
              void 0 !== c && (r2 = c);
            }
          }
          return r2;
        };
      })(),
      (t.n = (e2) => {
        var r2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return t.d(r2, { a: r2 }), r2;
      }),
      (() => {
        var e2,
          r2 = Object.getPrototypeOf
            ? (e3) => Object.getPrototypeOf(e3)
            : (e3) => e3.__proto__;
        t.t = function (o, n) {
          if (
            (1 & n && (o = this(o)),
            8 & n ||
              ('object' == typeof o &&
                o &&
                ((4 & n && o.__esModule) ||
                  (16 & n && 'function' == typeof o.then))))
          )
            return o;
          var l = /* @__PURE__ */ Object.create(null);
          t.r(l);
          var a = {};
          e2 = e2 || [null, r2({}), r2([]), r2(r2)];
          for (
            var i = 2 & n && o;
            'object' == typeof i && !~e2.indexOf(i);
            i = r2(i)
          )
            Object.getOwnPropertyNames(i).forEach(
              (e3) => (a[e3] = () => o[e3])
            );
          return (a.default = () => o), t.d(l, a), l;
        };
      })(),
      (t.d = (e2, r2) => {
        for (var o in r2)
          t.o(r2, o) &&
            !t.o(e2, o) &&
            Object.defineProperty(e2, o, { enumerable: true, get: r2[o] });
      }),
      (t.e = () => Promise.resolve()),
      (t.g = (function () {
        if ('object' == typeof globalThis2) return globalThis2;
        try {
          return this || Function('return this')();
        } catch (e2) {
          if ('object' == typeof window) return window;
        }
      })()),
      (t.o = (e2, r2) => Object.prototype.hasOwnProperty.call(e2, r2)),
      (t.r = (e2) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e2, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e2, '__esModule', { value: true });
      }),
      (t.nmd = (e2) => (
        (e2.paths = []), e2.children || (e2.children = []), e2
      )),
      (() => {
        var e2 = { 993: 0 };
        t.O.j = (r3) => 0 === e2[r3];
        var r2 = (r3, o2) => {
            var n,
              l,
              [a, i, f] = o2,
              u = 0;
            if (a.some((r4) => 0 !== e2[r4])) {
              for (n in i) t.o(i, n) && (t.m[n] = i[n]);
              if (f) var c = f(t);
            }
            for (r3 && r3(o2); u < a.length; u++)
              (l = a[u]), t.o(e2, l) && e2[l] && e2[l][0](), (e2[l] = 0);
            return t.O(c);
          },
          o = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
        o.forEach(r2.bind(null, 0)), (o.push = r2.bind(null, o.push.bind(o)));
      })(),
      (t.nc = void 0);
  })();
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [826],
    {
      2067: __chunk_2067,
      26195: __chunk_26195,
      51284: (e, t, r) => {
        'use strict';
        let n, i, o;
        r.r(t), r.d(t, { default: () => aS });
        var a,
          s,
          l = {};
        async function c() {
          let e10 =
            'globalThis._ENTRIES' in globalThis2 &&
            globalThis2._ENTRIES.middleware_instrumentation &&
            (await globalThis2._ENTRIES.middleware_instrumentation).register;
          if (e10)
            try {
              await e10();
            } catch (e11) {
              throw (
                ((e11.message = `An error occurred while loading instrumentation hook: ${e11.message}`),
                e11)
              );
            }
        }
        r.r(l), r.d(l, { config: () => aw, default: () => ay });
        let u = null;
        function d() {
          return u || (u = c()), u;
        }
        function p(e10) {
          return `The edge runtime does not support Node.js '${e10}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
        }
        process !== r.g.process &&
          ((process.env = r.g.process.env), (r.g.process = process)),
          Object.defineProperty(globalThis2, '__import_unsupported', {
            value: function (e10) {
              let t10 = new Proxy(function () {}, {
                get(t11, r10) {
                  if ('then' === r10) return {};
                  throw Error(p(e10));
                },
                construct() {
                  throw Error(p(e10));
                },
                apply(r10, n10, i10) {
                  if ('function' == typeof i10[0]) return i10[0](t10);
                  throw Error(p(e10));
                }
              });
              return new Proxy({}, { get: () => t10 });
            },
            enumerable: false,
            configurable: true
          }),
          d();
        class h extends Error {
          constructor({ page: e10 }) {
            super(`The middleware "${e10}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
          }
        }
        class f extends Error {
          constructor() {
            super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
          }
        }
        class g extends Error {
          constructor() {
            super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
          }
        }
        function m(e10) {
          let t10 = {},
            r10 = [];
          if (e10)
            for (let [n10, i10] of e10.entries())
              'set-cookie' === n10.toLowerCase()
                ? (r10.push(
                    ...(function (e11) {
                      var t11,
                        r11,
                        n11,
                        i11,
                        o10,
                        a2 = [],
                        s2 = 0;
                      function l2() {
                        for (; s2 < e11.length && /\s/.test(e11.charAt(s2)); )
                          s2 += 1;
                        return s2 < e11.length;
                      }
                      for (; s2 < e11.length; ) {
                        for (t11 = s2, o10 = false; l2(); )
                          if (',' === (r11 = e11.charAt(s2))) {
                            for (
                              n11 = s2, s2 += 1, l2(), i11 = s2;
                              s2 < e11.length &&
                              '=' !== (r11 = e11.charAt(s2)) &&
                              ';' !== r11 &&
                              ',' !== r11;

                            )
                              s2 += 1;
                            s2 < e11.length && '=' === e11.charAt(s2)
                              ? ((o10 = true),
                                (s2 = i11),
                                a2.push(e11.substring(t11, n11)),
                                (t11 = s2))
                              : (s2 = n11 + 1);
                          } else s2 += 1;
                        (!o10 || s2 >= e11.length) &&
                          a2.push(e11.substring(t11, e11.length));
                      }
                      return a2;
                    })(i10)
                  ),
                  (t10[n10] = 1 === r10.length ? r10[0] : r10))
                : (t10[n10] = i10);
          return t10;
        }
        function y(e10) {
          try {
            return String(new URL(String(e10)));
          } catch (t10) {
            throw Error(
              `URL is malformed "${String(
                e10
              )}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,
              { cause: t10 }
            );
          }
        }
        let w = Symbol('response'),
          b = Symbol('passThrough'),
          v = Symbol('waitUntil');
        class _ {
          constructor(e10) {
            (this[v] = []), (this[b] = false);
          }
          respondWith(e10) {
            this[w] || (this[w] = Promise.resolve(e10));
          }
          passThroughOnException() {
            this[b] = true;
          }
          waitUntil(e10) {
            this[v].push(e10);
          }
        }
        class S extends _ {
          constructor(e10) {
            super(e10.request), (this.sourcePage = e10.page);
          }
          get request() {
            throw new h({ page: this.sourcePage });
          }
          respondWith() {
            throw new h({ page: this.sourcePage });
          }
        }
        function k(e10) {
          return e10.replace(/\/$/, '') || '/';
        }
        function x(e10) {
          let t10 = e10.indexOf('#'),
            r10 = e10.indexOf('?'),
            n10 = r10 > -1 && (t10 < 0 || r10 < t10);
          return n10 || t10 > -1
            ? {
                pathname: e10.substring(0, n10 ? r10 : t10),
                query: n10 ? e10.substring(r10, t10 > -1 ? t10 : void 0) : '',
                hash: t10 > -1 ? e10.slice(t10) : ''
              }
            : { pathname: e10, query: '', hash: '' };
        }
        function E(e10, t10) {
          if (!e10.startsWith('/') || !t10) return e10;
          let { pathname: r10, query: n10, hash: i10 } = x(e10);
          return '' + t10 + r10 + n10 + i10;
        }
        function A(e10, t10) {
          if (!e10.startsWith('/') || !t10) return e10;
          let { pathname: r10, query: n10, hash: i10 } = x(e10);
          return '' + r10 + t10 + n10 + i10;
        }
        function T(e10, t10) {
          if ('string' != typeof e10) return false;
          let { pathname: r10 } = x(e10);
          return r10 === t10 || r10.startsWith(t10 + '/');
        }
        function P(e10, t10) {
          let r10;
          let n10 = e10.split('/');
          return (
            (t10 || []).some(
              (t11) =>
                !!n10[1] &&
                n10[1].toLowerCase() === t11.toLowerCase() &&
                ((r10 = t11),
                n10.splice(1, 1),
                (e10 = n10.join('/') || '/'),
                true)
            ),
            { pathname: e10, detectedLocale: r10 }
          );
        }
        let C =
          /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
        function R(e10, t10) {
          return new URL(
            String(e10).replace(C, 'localhost'),
            t10 && String(t10).replace(C, 'localhost')
          );
        }
        let O = Symbol('NextURLInternal');
        class I {
          constructor(e10, t10, r10) {
            let n10, i10;
            ('object' == typeof t10 && 'pathname' in t10) ||
            'string' == typeof t10
              ? ((n10 = t10), (i10 = r10 || {}))
              : (i10 = r10 || t10 || {}),
              (this[O] = {
                url: R(e10, n10 ?? i10.base),
                options: i10,
                basePath: ''
              }),
              this.analyze();
          }
          analyze() {
            var e10, t10, r10, n10, i10;
            let o10 = (function (e11, t11) {
                var r11, n11;
                let {
                    basePath: i11,
                    i18n: o11,
                    trailingSlash: a3
                  } = null != (r11 = t11.nextConfig) ? r11 : {},
                  s3 = {
                    pathname: e11,
                    trailingSlash: '/' !== e11 ? e11.endsWith('/') : a3
                  };
                i11 &&
                  T(s3.pathname, i11) &&
                  ((s3.pathname = (function (e12, t12) {
                    if (!T(e12, t12)) return e12;
                    let r12 = e12.slice(t12.length);
                    return r12.startsWith('/') ? r12 : '/' + r12;
                  })(s3.pathname, i11)),
                  (s3.basePath = i11));
                let l2 = s3.pathname;
                if (
                  s3.pathname.startsWith('/_next/data/') &&
                  s3.pathname.endsWith('.json')
                ) {
                  let e12 = s3.pathname
                      .replace(/^\/_next\/data\//, '')
                      .replace(/\.json$/, '')
                      .split('/'),
                    r12 = e12[0];
                  (s3.buildId = r12),
                    (l2 =
                      'index' !== e12[1] ? '/' + e12.slice(1).join('/') : '/'),
                    true === t11.parseData && (s3.pathname = l2);
                }
                if (o11) {
                  let e12 = t11.i18nProvider
                    ? t11.i18nProvider.analyze(s3.pathname)
                    : P(s3.pathname, o11.locales);
                  (s3.locale = e12.detectedLocale),
                    (s3.pathname =
                      null != (n11 = e12.pathname) ? n11 : s3.pathname),
                    !e12.detectedLocale &&
                      s3.buildId &&
                      (e12 = t11.i18nProvider
                        ? t11.i18nProvider.analyze(l2)
                        : P(l2, o11.locales)).detectedLocale &&
                      (s3.locale = e12.detectedLocale);
                }
                return s3;
              })(this[O].url.pathname, {
                nextConfig: this[O].options.nextConfig,
                parseData: true,
                i18nProvider: this[O].options.i18nProvider
              }),
              a2 = (function (e11, t11) {
                let r11;
                if (
                  (null == t11 ? void 0 : t11.host) &&
                  !Array.isArray(t11.host)
                )
                  r11 = t11.host.toString().split(':', 1)[0];
                else {
                  if (!e11.hostname) return;
                  r11 = e11.hostname;
                }
                return r11.toLowerCase();
              })(this[O].url, this[O].options.headers);
            this[O].domainLocale = this[O].options.i18nProvider
              ? this[O].options.i18nProvider.detectDomainLocale(a2)
              : (function (e11, t11, r11) {
                  if (e11)
                    for (let o11 of (r11 && (r11 = r11.toLowerCase()), e11)) {
                      var n11, i11;
                      if (
                        t11 ===
                          (null == (n11 = o11.domain)
                            ? void 0
                            : n11.split(':', 1)[0].toLowerCase()) ||
                        r11 === o11.defaultLocale.toLowerCase() ||
                        (null == (i11 = o11.locales)
                          ? void 0
                          : i11.some((e12) => e12.toLowerCase() === r11))
                      )
                        return o11;
                    }
                })(
                  null == (t10 = this[O].options.nextConfig)
                    ? void 0
                    : null == (e10 = t10.i18n)
                    ? void 0
                    : e10.domains,
                  a2
                );
            let s2 =
              (null == (r10 = this[O].domainLocale)
                ? void 0
                : r10.defaultLocale) ||
              (null == (i10 = this[O].options.nextConfig)
                ? void 0
                : null == (n10 = i10.i18n)
                ? void 0
                : n10.defaultLocale);
            (this[O].url.pathname = o10.pathname),
              (this[O].defaultLocale = s2),
              (this[O].basePath = o10.basePath ?? ''),
              (this[O].buildId = o10.buildId),
              (this[O].locale = o10.locale ?? s2),
              (this[O].trailingSlash = o10.trailingSlash);
          }
          formatPathname() {
            var e10;
            let t10;
            return (
              (t10 = (function (e11, t11, r10, n10) {
                if (!t11 || t11 === r10) return e11;
                let i10 = e11.toLowerCase();
                return !n10 &&
                  (T(i10, '/api') || T(i10, '/' + t11.toLowerCase()))
                  ? e11
                  : E(e11, '/' + t11);
              })(
                (e10 = {
                  basePath: this[O].basePath,
                  buildId: this[O].buildId,
                  defaultLocale: this[O].options.forceLocale
                    ? void 0
                    : this[O].defaultLocale,
                  locale: this[O].locale,
                  pathname: this[O].url.pathname,
                  trailingSlash: this[O].trailingSlash
                }).pathname,
                e10.locale,
                e10.buildId ? void 0 : e10.defaultLocale,
                e10.ignorePrefix
              )),
              (e10.buildId || !e10.trailingSlash) && (t10 = k(t10)),
              e10.buildId &&
                (t10 = A(
                  E(t10, '/_next/data/' + e10.buildId),
                  '/' === e10.pathname ? 'index.json' : '.json'
                )),
              (t10 = E(t10, e10.basePath)),
              !e10.buildId && e10.trailingSlash
                ? t10.endsWith('/')
                  ? t10
                  : A(t10, '/')
                : k(t10)
            );
          }
          formatSearch() {
            return this[O].url.search;
          }
          get buildId() {
            return this[O].buildId;
          }
          set buildId(e10) {
            this[O].buildId = e10;
          }
          get locale() {
            return this[O].locale ?? '';
          }
          set locale(e10) {
            var t10, r10;
            if (
              !this[O].locale ||
              !(null == (r10 = this[O].options.nextConfig)
                ? void 0
                : null == (t10 = r10.i18n)
                ? void 0
                : t10.locales.includes(e10))
            )
              throw TypeError(
                `The NextURL configuration includes no locale "${e10}"`
              );
            this[O].locale = e10;
          }
          get defaultLocale() {
            return this[O].defaultLocale;
          }
          get domainLocale() {
            return this[O].domainLocale;
          }
          get searchParams() {
            return this[O].url.searchParams;
          }
          get host() {
            return this[O].url.host;
          }
          set host(e10) {
            this[O].url.host = e10;
          }
          get hostname() {
            return this[O].url.hostname;
          }
          set hostname(e10) {
            this[O].url.hostname = e10;
          }
          get port() {
            return this[O].url.port;
          }
          set port(e10) {
            this[O].url.port = e10;
          }
          get protocol() {
            return this[O].url.protocol;
          }
          set protocol(e10) {
            this[O].url.protocol = e10;
          }
          get href() {
            let e10 = this.formatPathname(),
              t10 = this.formatSearch();
            return `${this.protocol}//${this.host}${e10}${t10}${this.hash}`;
          }
          set href(e10) {
            (this[O].url = R(e10)), this.analyze();
          }
          get origin() {
            return this[O].url.origin;
          }
          get pathname() {
            return this[O].url.pathname;
          }
          set pathname(e10) {
            this[O].url.pathname = e10;
          }
          get hash() {
            return this[O].url.hash;
          }
          set hash(e10) {
            this[O].url.hash = e10;
          }
          get search() {
            return this[O].url.search;
          }
          set search(e10) {
            this[O].url.search = e10;
          }
          get password() {
            return this[O].url.password;
          }
          set password(e10) {
            this[O].url.password = e10;
          }
          get username() {
            return this[O].url.username;
          }
          set username(e10) {
            this[O].url.username = e10;
          }
          get basePath() {
            return this[O].basePath;
          }
          set basePath(e10) {
            this[O].basePath = e10.startsWith('/') ? e10 : `/${e10}`;
          }
          toString() {
            return this.href;
          }
          toJSON() {
            return this.href;
          }
          [Symbol.for('edge-runtime.inspect.custom')]() {
            return {
              href: this.href,
              origin: this.origin,
              protocol: this.protocol,
              username: this.username,
              password: this.password,
              host: this.host,
              hostname: this.hostname,
              port: this.port,
              pathname: this.pathname,
              search: this.search,
              searchParams: this.searchParams,
              hash: this.hash
            };
          }
          clone() {
            return new I(String(this), this[O].options);
          }
        }
        var U = r(75447);
        let N = Symbol('internal request');
        class M extends Request {
          constructor(e10, t10 = {}) {
            let r10 =
              'string' != typeof e10 && 'url' in e10 ? e10.url : String(e10);
            y(r10), e10 instanceof Request ? super(e10, t10) : super(r10, t10);
            let n10 = new I(r10, {
              headers: m(this.headers),
              nextConfig: t10.nextConfig
            });
            this[N] = {
              cookies: new U.RequestCookies(this.headers),
              geo: t10.geo || {},
              ip: t10.ip,
              nextUrl: n10,
              url: n10.toString()
            };
          }
          [Symbol.for('edge-runtime.inspect.custom')]() {
            return {
              cookies: this.cookies,
              geo: this.geo,
              ip: this.ip,
              nextUrl: this.nextUrl,
              url: this.url,
              bodyUsed: this.bodyUsed,
              cache: this.cache,
              credentials: this.credentials,
              destination: this.destination,
              headers: Object.fromEntries(this.headers),
              integrity: this.integrity,
              keepalive: this.keepalive,
              method: this.method,
              mode: this.mode,
              redirect: this.redirect,
              referrer: this.referrer,
              referrerPolicy: this.referrerPolicy,
              signal: this.signal
            };
          }
          get cookies() {
            return this[N].cookies;
          }
          get geo() {
            return this[N].geo;
          }
          get ip() {
            return this[N].ip;
          }
          get nextUrl() {
            return this[N].nextUrl;
          }
          get page() {
            throw new f();
          }
          get ua() {
            throw new g();
          }
          get url() {
            return this[N].url;
          }
        }
        let L = Symbol('internal response'),
          j = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
        function $(e10, t10) {
          var r10;
          if (
            null == e10
              ? void 0
              : null == (r10 = e10.request)
              ? void 0
              : r10.headers
          ) {
            if (!(e10.request.headers instanceof Headers))
              throw Error('request.headers must be an instance of Headers');
            let r11 = [];
            for (let [n10, i10] of e10.request.headers)
              t10.set('x-middleware-request-' + n10, i10), r11.push(n10);
            t10.set('x-middleware-override-headers', r11.join(','));
          }
        }
        class D extends Response {
          constructor(e10, t10 = {}) {
            super(e10, t10),
              (this[L] = {
                cookies: new U.ResponseCookies(this.headers),
                url: t10.url
                  ? new I(t10.url, {
                      headers: m(this.headers),
                      nextConfig: t10.nextConfig
                    })
                  : void 0
              });
          }
          [Symbol.for('edge-runtime.inspect.custom')]() {
            return {
              cookies: this.cookies,
              url: this.url,
              body: this.body,
              bodyUsed: this.bodyUsed,
              headers: Object.fromEntries(this.headers),
              ok: this.ok,
              redirected: this.redirected,
              status: this.status,
              statusText: this.statusText,
              type: this.type
            };
          }
          get cookies() {
            return this[L].cookies;
          }
          static json(e10, t10) {
            let r10 = Response.json(e10, t10);
            return new D(r10.body, r10);
          }
          static redirect(e10, t10) {
            let r10 =
              'number' == typeof t10
                ? t10
                : (null == t10 ? void 0 : t10.status) ?? 307;
            if (!j.has(r10))
              throw RangeError(
                'Failed to execute "redirect" on "response": Invalid status code'
              );
            let n10 = 'object' == typeof t10 ? t10 : {},
              i10 = new Headers(null == n10 ? void 0 : n10.headers);
            return (
              i10.set('Location', y(e10)),
              new D(null, { ...n10, headers: i10, status: r10 })
            );
          }
          static rewrite(e10, t10) {
            let r10 = new Headers(null == t10 ? void 0 : t10.headers);
            return (
              r10.set('x-middleware-rewrite', y(e10)),
              $(t10, r10),
              new D(null, { ...t10, headers: r10 })
            );
          }
          static next(e10) {
            let t10 = new Headers(null == e10 ? void 0 : e10.headers);
            return (
              t10.set('x-middleware-next', '1'),
              $(e10, t10),
              new D(null, { ...e10, headers: t10 })
            );
          }
        }
        function H(e10, t10) {
          let r10 = 'string' == typeof t10 ? new URL(t10) : t10,
            n10 = new URL(e10, t10),
            i10 = r10.protocol + '//' + r10.host;
          return n10.protocol + '//' + n10.host === i10
            ? n10.toString().replace(i10, '')
            : n10.toString();
        }
        let W = [['RSC'], ['Next-Router-State-Tree'], ['Next-Router-Prefetch']];
        r(63387);
        let K = {
          client: 'client',
          server: 'server',
          edgeServer: 'edge-server'
        };
        K.client, K.server, K.edgeServer, Symbol('polyfills');
        let B = [
            '__nextFallback',
            '__nextLocale',
            '__nextInferredLocaleFromDefault',
            '__nextDefaultLocale',
            '__nextIsNotFound',
            '_rsc'
          ],
          V = ['__nextDataReq'],
          q = 'nxtP',
          J = {
            shared: 'shared',
            reactServerComponents: 'rsc',
            serverSideRendering: 'ssr',
            actionBrowser: 'action-browser',
            api: 'api',
            middleware: 'middleware',
            instrument: 'instrument',
            edgeAsset: 'edge-asset',
            appPagesBrowser: 'app-pages-browser',
            appMetadataRoute: 'app-metadata-route',
            appRouteHandler: 'app-route-handler'
          };
        ({
          ...J,
          GROUP: {
            serverOnly: [
              J.reactServerComponents,
              J.actionBrowser,
              J.appMetadataRoute,
              J.appRouteHandler,
              J.instrument
            ],
            clientOnly: [J.serverSideRendering, J.appPagesBrowser],
            nonClientServerTarget: [J.middleware, J.api],
            app: [
              J.reactServerComponents,
              J.actionBrowser,
              J.appMetadataRoute,
              J.appRouteHandler,
              J.serverSideRendering,
              J.appPagesBrowser,
              J.shared,
              J.instrument
            ]
          }
        });
        class F {
          static get(e10, t10, r10) {
            let n10 = Reflect.get(e10, t10, r10);
            return 'function' == typeof n10 ? n10.bind(e10) : n10;
          }
          static set(e10, t10, r10, n10) {
            return Reflect.set(e10, t10, r10, n10);
          }
          static has(e10, t10) {
            return Reflect.has(e10, t10);
          }
          static deleteProperty(e10, t10) {
            return Reflect.deleteProperty(e10, t10);
          }
        }
        class z extends Error {
          constructor() {
            super(
              'Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers'
            );
          }
          static callable() {
            throw new z();
          }
        }
        class G extends Headers {
          constructor(e10) {
            super(),
              (this.headers = new Proxy(e10, {
                get(t10, r10, n10) {
                  if ('symbol' == typeof r10) return F.get(t10, r10, n10);
                  let i10 = r10.toLowerCase(),
                    o10 = Object.keys(e10).find(
                      (e11) => e11.toLowerCase() === i10
                    );
                  if (void 0 !== o10) return F.get(t10, o10, n10);
                },
                set(t10, r10, n10, i10) {
                  if ('symbol' == typeof r10) return F.set(t10, r10, n10, i10);
                  let o10 = r10.toLowerCase(),
                    a2 = Object.keys(e10).find(
                      (e11) => e11.toLowerCase() === o10
                    );
                  return F.set(t10, a2 ?? r10, n10, i10);
                },
                has(t10, r10) {
                  if ('symbol' == typeof r10) return F.has(t10, r10);
                  let n10 = r10.toLowerCase(),
                    i10 = Object.keys(e10).find(
                      (e11) => e11.toLowerCase() === n10
                    );
                  return void 0 !== i10 && F.has(t10, i10);
                },
                deleteProperty(t10, r10) {
                  if ('symbol' == typeof r10) return F.deleteProperty(t10, r10);
                  let n10 = r10.toLowerCase(),
                    i10 = Object.keys(e10).find(
                      (e11) => e11.toLowerCase() === n10
                    );
                  return void 0 === i10 || F.deleteProperty(t10, i10);
                }
              }));
          }
          static seal(e10) {
            return new Proxy(e10, {
              get(e11, t10, r10) {
                switch (t10) {
                  case 'append':
                  case 'delete':
                  case 'set':
                    return z.callable;
                  default:
                    return F.get(e11, t10, r10);
                }
              }
            });
          }
          merge(e10) {
            return Array.isArray(e10) ? e10.join(', ') : e10;
          }
          static from(e10) {
            return e10 instanceof Headers ? e10 : new G(e10);
          }
          append(e10, t10) {
            let r10 = this.headers[e10];
            'string' == typeof r10
              ? (this.headers[e10] = [r10, t10])
              : Array.isArray(r10)
              ? r10.push(t10)
              : (this.headers[e10] = t10);
          }
          delete(e10) {
            delete this.headers[e10];
          }
          get(e10) {
            let t10 = this.headers[e10];
            return void 0 !== t10 ? this.merge(t10) : null;
          }
          has(e10) {
            return void 0 !== this.headers[e10];
          }
          set(e10, t10) {
            this.headers[e10] = t10;
          }
          forEach(e10, t10) {
            for (let [r10, n10] of this.entries())
              e10.call(t10, n10, r10, this);
          }
          *entries() {
            for (let e10 of Object.keys(this.headers)) {
              let t10 = e10.toLowerCase(),
                r10 = this.get(t10);
              yield [t10, r10];
            }
          }
          *keys() {
            for (let e10 of Object.keys(this.headers)) {
              let t10 = e10.toLowerCase();
              yield t10;
            }
          }
          *values() {
            for (let e10 of Object.keys(this.headers)) {
              let t10 = this.get(e10);
              yield t10;
            }
          }
          [Symbol.iterator]() {
            return this.entries();
          }
        }
        var X = r(77008);
        class Y extends Error {
          constructor() {
            super(
              'Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options'
            );
          }
          static callable() {
            throw new Y();
          }
        }
        class Z {
          static seal(e10) {
            return new Proxy(e10, {
              get(e11, t10, r10) {
                switch (t10) {
                  case 'clear':
                  case 'delete':
                  case 'set':
                    return Y.callable;
                  default:
                    return F.get(e11, t10, r10);
                }
              }
            });
          }
        }
        let Q = Symbol.for('next.mutated.cookies');
        class ee {
          static wrap(e10, t10) {
            let r10 = new U.ResponseCookies(new Headers());
            for (let t11 of e10.getAll()) r10.set(t11);
            let n10 = [],
              i10 = /* @__PURE__ */ new Set(),
              o10 = () => {
                let e11 = X.A.getStore();
                if (
                  (e11 && (e11.pathWasRevalidated = true),
                  (n10 = r10.getAll().filter((e12) => i10.has(e12.name))),
                  t10)
                ) {
                  let e12 = [];
                  for (let t11 of n10) {
                    let r11 = new U.ResponseCookies(new Headers());
                    r11.set(t11), e12.push(r11.toString());
                  }
                  t10(e12);
                }
              };
            return new Proxy(r10, {
              get(e11, t11, r11) {
                switch (t11) {
                  case Q:
                    return n10;
                  case 'delete':
                    return function (...t12) {
                      i10.add('string' == typeof t12[0] ? t12[0] : t12[0].name);
                      try {
                        e11.delete(...t12);
                      } finally {
                        o10();
                      }
                    };
                  case 'set':
                    return function (...t12) {
                      i10.add('string' == typeof t12[0] ? t12[0] : t12[0].name);
                      try {
                        return e11.set(...t12);
                      } finally {
                        o10();
                      }
                    };
                  default:
                    return F.get(e11, t11, r11);
                }
              }
            });
          }
        }
        !(function (e10) {
          (e10.handleRequest = 'BaseServer.handleRequest'),
            (e10.run = 'BaseServer.run'),
            (e10.pipe = 'BaseServer.pipe'),
            (e10.getStaticHTML = 'BaseServer.getStaticHTML'),
            (e10.render = 'BaseServer.render'),
            (e10.renderToResponseWithComponents =
              'BaseServer.renderToResponseWithComponents'),
            (e10.renderToResponse = 'BaseServer.renderToResponse'),
            (e10.renderToHTML = 'BaseServer.renderToHTML'),
            (e10.renderError = 'BaseServer.renderError'),
            (e10.renderErrorToResponse = 'BaseServer.renderErrorToResponse'),
            (e10.renderErrorToHTML = 'BaseServer.renderErrorToHTML'),
            (e10.render404 = 'BaseServer.render404');
        })(no || (no = {})),
          (function (e10) {
            (e10.loadDefaultErrorComponents =
              'LoadComponents.loadDefaultErrorComponents'),
              (e10.loadComponents = 'LoadComponents.loadComponents');
          })(na || (na = {})),
          (function (e10) {
            (e10.getRequestHandler = 'NextServer.getRequestHandler'),
              (e10.getServer = 'NextServer.getServer'),
              (e10.getServerRequestHandler =
                'NextServer.getServerRequestHandler'),
              (e10.createServer = 'createServer.createServer');
          })(ns || (ns = {})),
          (function (e10) {
            (e10.compression = 'NextNodeServer.compression'),
              (e10.getBuildId = 'NextNodeServer.getBuildId'),
              (e10.createComponentTree = 'NextNodeServer.createComponentTree'),
              (e10.clientComponentLoading =
                'NextNodeServer.clientComponentLoading'),
              (e10.getLayoutOrPageModule =
                'NextNodeServer.getLayoutOrPageModule'),
              (e10.generateStaticRoutes =
                'NextNodeServer.generateStaticRoutes'),
              (e10.generateFsStaticRoutes =
                'NextNodeServer.generateFsStaticRoutes'),
              (e10.generatePublicRoutes =
                'NextNodeServer.generatePublicRoutes'),
              (e10.generateImageRoutes =
                'NextNodeServer.generateImageRoutes.route'),
              (e10.sendRenderResult = 'NextNodeServer.sendRenderResult'),
              (e10.proxyRequest = 'NextNodeServer.proxyRequest'),
              (e10.runApi = 'NextNodeServer.runApi'),
              (e10.render = 'NextNodeServer.render'),
              (e10.renderHTML = 'NextNodeServer.renderHTML'),
              (e10.imageOptimizer = 'NextNodeServer.imageOptimizer'),
              (e10.getPagePath = 'NextNodeServer.getPagePath'),
              (e10.getRoutesManifest = 'NextNodeServer.getRoutesManifest'),
              (e10.findPageComponents = 'NextNodeServer.findPageComponents'),
              (e10.getFontManifest = 'NextNodeServer.getFontManifest'),
              (e10.getServerComponentManifest =
                'NextNodeServer.getServerComponentManifest'),
              (e10.getRequestHandler = 'NextNodeServer.getRequestHandler'),
              (e10.renderToHTML = 'NextNodeServer.renderToHTML'),
              (e10.renderError = 'NextNodeServer.renderError'),
              (e10.renderErrorToHTML = 'NextNodeServer.renderErrorToHTML'),
              (e10.render404 = 'NextNodeServer.render404'),
              (e10.startResponse = 'NextNodeServer.startResponse'),
              (e10.route = 'route'),
              (e10.onProxyReq = 'onProxyReq'),
              (e10.apiResolver = 'apiResolver'),
              (e10.internalFetch = 'internalFetch');
          })(nl || (nl = {})),
          ((nc || (nc = {})).startServer = 'startServer.startServer'),
          (function (e10) {
            (e10.getServerSideProps = 'Render.getServerSideProps'),
              (e10.getStaticProps = 'Render.getStaticProps'),
              (e10.renderToString = 'Render.renderToString'),
              (e10.renderDocument = 'Render.renderDocument'),
              (e10.createBodyResult = 'Render.createBodyResult');
          })(nu || (nu = {})),
          (function (e10) {
            (e10.renderToString = 'AppRender.renderToString'),
              (e10.renderToReadableStream = 'AppRender.renderToReadableStream'),
              (e10.getBodyResult = 'AppRender.getBodyResult'),
              (e10.fetch = 'AppRender.fetch');
          })(nd || (nd = {})),
          ((np || (np = {})).executeRoute = 'Router.executeRoute'),
          ((nh || (nh = {})).runHandler = 'Node.runHandler'),
          ((nf || (nf = {})).runHandler = 'AppRouteRouteHandlers.runHandler'),
          (function (e10) {
            (e10.generateMetadata = 'ResolveMetadata.generateMetadata'),
              (e10.generateViewport = 'ResolveMetadata.generateViewport');
          })(ng || (ng = {})),
          ((nm || (nm = {})).execute = 'Middleware.execute');
        let et = [
            'Middleware.execute',
            'BaseServer.handleRequest',
            'Render.getServerSideProps',
            'Render.getStaticProps',
            'AppRender.fetch',
            'AppRender.getBodyResult',
            'Render.renderDocument',
            'Node.runHandler',
            'AppRouteRouteHandlers.runHandler',
            'ResolveMetadata.generateMetadata',
            'ResolveMetadata.generateViewport',
            'NextNodeServer.createComponentTree',
            'NextNodeServer.findPageComponents',
            'NextNodeServer.getLayoutOrPageModule',
            'NextNodeServer.startResponse',
            'NextNodeServer.clientComponentLoading'
          ],
          er = [
            'NextNodeServer.findPageComponents',
            'NextNodeServer.createComponentTree',
            'NextNodeServer.clientComponentLoading'
          ],
          {
            context: en,
            propagation: ei,
            trace: eo,
            SpanStatusCode: ea,
            SpanKind: es,
            ROOT_CONTEXT: el
          } = (n = r(13692)),
          ec = (e10) =>
            null !== e10 &&
            'object' == typeof e10 &&
            'function' == typeof e10.then,
          eu = (e10, t10) => {
            (null == t10 ? void 0 : t10.bubble) === true
              ? e10.setAttribute('next.bubble', true)
              : (t10 && e10.recordException(t10),
                e10.setStatus({
                  code: ea.ERROR,
                  message: null == t10 ? void 0 : t10.message
                })),
              e10.end();
          },
          ed = /* @__PURE__ */ new Map(),
          ep = n.createContextKey('next.rootSpanId'),
          eh = 0,
          ef = () => eh++;
        class eg {
          getTracerInstance() {
            return eo.getTracer('next.js', '0.0.1');
          }
          getContext() {
            return en;
          }
          getActiveScopeSpan() {
            return eo.getSpan(null == en ? void 0 : en.active());
          }
          withPropagatedContext(e10, t10, r10) {
            let n10 = en.active();
            if (eo.getSpanContext(n10)) return t10();
            let i10 = ei.extract(n10, e10, r10);
            return en.with(i10, t10);
          }
          trace(...e10) {
            var t10;
            let [r10, n10, i10] = e10,
              { fn: o10, options: a2 } =
                'function' == typeof n10
                  ? { fn: n10, options: {} }
                  : { fn: i10, options: { ...n10 } },
              s2 = a2.spanName ?? r10;
            if (
              (!et.includes(r10) && '1' !== process.env.NEXT_OTEL_VERBOSE) ||
              a2.hideSpan
            )
              return o10();
            let l2 = this.getSpanContext(
                (null == a2 ? void 0 : a2.parentSpan) ??
                  this.getActiveScopeSpan()
              ),
              c2 = false;
            l2
              ? (null == (t10 = eo.getSpanContext(l2))
                  ? void 0
                  : t10.isRemote) && (c2 = true)
              : ((l2 = (null == en ? void 0 : en.active()) ?? el), (c2 = true));
            let u2 = ef();
            return (
              (a2.attributes = {
                'next.span_name': s2,
                'next.span_type': r10,
                ...a2.attributes
              }),
              en.with(l2.setValue(ep, u2), () =>
                this.getTracerInstance().startActiveSpan(s2, a2, (e11) => {
                  let t11 =
                      'performance' in globalThis2
                        ? globalThis2.performance.now()
                        : void 0,
                    n11 = () => {
                      ed.delete(u2),
                        t11 &&
                          process.env.NEXT_OTEL_PERFORMANCE_PREFIX &&
                          er.includes(r10 || '') &&
                          performance.measure(
                            `${
                              process.env.NEXT_OTEL_PERFORMANCE_PREFIX
                            }:next-${(r10.split('.').pop() || '').replace(
                              /[A-Z]/g,
                              (e12) => '-' + e12.toLowerCase()
                            )}`,
                            { start: t11, end: performance.now() }
                          );
                    };
                  c2 &&
                    ed.set(u2, new Map(Object.entries(a2.attributes ?? {})));
                  try {
                    if (o10.length > 1) return o10(e11, (t13) => eu(e11, t13));
                    let t12 = o10(e11);
                    if (ec(t12))
                      return t12
                        .then((t13) => (e11.end(), t13))
                        .catch((t13) => {
                          throw (eu(e11, t13), t13);
                        })
                        .finally(n11);
                    return e11.end(), n11(), t12;
                  } catch (t12) {
                    throw (eu(e11, t12), n11(), t12);
                  }
                })
              )
            );
          }
          wrap(...e10) {
            let t10 = this,
              [r10, n10, i10] = 3 === e10.length ? e10 : [e10[0], {}, e10[1]];
            return et.includes(r10) || '1' === process.env.NEXT_OTEL_VERBOSE
              ? function () {
                  let e11 = n10;
                  'function' == typeof e11 &&
                    'function' == typeof i10 &&
                    (e11 = e11.apply(this, arguments));
                  let o10 = arguments.length - 1,
                    a2 = arguments[o10];
                  if ('function' != typeof a2)
                    return t10.trace(r10, e11, () =>
                      i10.apply(this, arguments)
                    );
                  {
                    let n11 = t10.getContext().bind(en.active(), a2);
                    return t10.trace(
                      r10,
                      e11,
                      (e12, t11) => (
                        (arguments[o10] = function (e13) {
                          return (
                            null == t11 || t11(e13), n11.apply(this, arguments)
                          );
                        }),
                        i10.apply(this, arguments)
                      )
                    );
                  }
                }
              : i10;
          }
          startSpan(...e10) {
            let [t10, r10] = e10,
              n10 = this.getSpanContext(
                (null == r10 ? void 0 : r10.parentSpan) ??
                  this.getActiveScopeSpan()
              );
            return this.getTracerInstance().startSpan(t10, r10, n10);
          }
          getSpanContext(e10) {
            return e10 ? eo.setSpan(en.active(), e10) : void 0;
          }
          getRootSpanAttributes() {
            let e10 = en.active().getValue(ep);
            return ed.get(e10);
          }
        }
        let em = (() => {
            let e10 = new eg();
            return () => e10;
          })(),
          ey = '__prerender_bypass';
        Symbol('__next_preview_data'), Symbol(ey);
        class ew {
          constructor(e10, t10, r10, n10) {
            var i10;
            let o10 =
                e10 &&
                (function (e11, t11) {
                  let r11 = G.from(e11.headers);
                  return {
                    isOnDemandRevalidate:
                      r11.get('x-prerender-revalidate') === t11.previewModeId,
                    revalidateOnlyGenerated: r11.has(
                      'x-prerender-revalidate-if-generated'
                    )
                  };
                })(t10, e10).isOnDemandRevalidate,
              a2 = null == (i10 = r10.get(ey)) ? void 0 : i10.value;
            (this.isEnabled = !!(
              !o10 &&
              a2 &&
              e10 &&
              a2 === e10.previewModeId
            )),
              (this._previewModeId = null == e10 ? void 0 : e10.previewModeId),
              (this._mutableCookies = n10);
          }
          enable() {
            if (!this._previewModeId)
              throw Error(
                'Invariant: previewProps missing previewModeId this should never happen'
              );
            this._mutableCookies.set({
              name: ey,
              value: this._previewModeId,
              httpOnly: true,
              sameSite: 'none',
              secure: true,
              path: '/'
            });
          }
          disable() {
            this._mutableCookies.set({
              name: ey,
              value: '',
              httpOnly: true,
              sameSite: 'none',
              secure: true,
              path: '/',
              expires: new Date(0)
            });
          }
        }
        let eb = {
          wrap(e10, { req: t10, res: r10, renderOpts: n10 }, i10) {
            let o10;
            function a2(e11) {
              r10 && r10.setHeader('Set-Cookie', e11);
            }
            n10 && 'previewProps' in n10 && (o10 = n10.previewProps);
            let s2 = {},
              l2 = {
                get headers() {
                  return (
                    s2.headers ||
                      (s2.headers = (function (e11) {
                        let t11 = G.from(e11);
                        for (let e12 of W)
                          t11.delete(e12.toString().toLowerCase());
                        return G.seal(t11);
                      })(t10.headers)),
                    s2.headers
                  );
                },
                get cookies() {
                  return (
                    s2.cookies ||
                      (s2.cookies = (function (e11) {
                        let t11 = new U.RequestCookies(G.from(e11));
                        return Z.seal(t11);
                      })(t10.headers)),
                    s2.cookies
                  );
                },
                get mutableCookies() {
                  return (
                    s2.mutableCookies ||
                      (s2.mutableCookies = (function (e11, t11) {
                        let r11 = new U.RequestCookies(G.from(e11));
                        return ee.wrap(r11, t11);
                      })(
                        t10.headers,
                        (null == n10 ? void 0 : n10.onUpdateCookies) ||
                          (r10 ? a2 : void 0)
                      )),
                    s2.mutableCookies
                  );
                },
                get draftMode() {
                  return (
                    s2.draftMode ||
                      (s2.draftMode = new ew(
                        o10,
                        t10,
                        this.cookies,
                        this.mutableCookies
                      )),
                    s2.draftMode
                  );
                },
                reactLoadableManifest:
                  (null == n10 ? void 0 : n10.reactLoadableManifest) || {},
                assetPrefix: (null == n10 ? void 0 : n10.assetPrefix) || ''
              };
            return e10.run(l2, i10, l2);
          }
        };
        var ev = r(4704);
        function e_(e10) {
          let t10 = ev.F.getStore();
          if (t10) return t10;
          throw Error(
            '`' +
              e10 +
              '` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context'
          );
        }
        class eS extends M {
          constructor(e10) {
            super(e10.input, e10.init), (this.sourcePage = e10.page);
          }
          get request() {
            throw new h({ page: this.sourcePage });
          }
          respondWith() {
            throw new h({ page: this.sourcePage });
          }
          waitUntil() {
            throw new h({ page: this.sourcePage });
          }
        }
        let ek = {
            keys: (e10) => Array.from(e10.keys()),
            get: (e10, t10) => e10.get(t10) ?? void 0
          },
          ex = (e10, t10) => em().withPropagatedContext(e10.headers, t10, ek),
          eE = false;
        async function eA(e10) {
          let t10, n10;
          !(function () {
            if (
              !eE &&
              ((eE = true), 'true' === process.env.NEXT_PRIVATE_TEST_PROXY)
            ) {
              let { interceptTestApis: e11, wrapRequestHandler: t11 } =
                r(29311);
              e11(), (ex = t11(ex));
            }
          })(),
            await d();
          let i10 = void 0 !== self.__BUILD_MANIFEST,
            o10 =
              'string' == typeof self.__PRERENDER_MANIFEST
                ? JSON.parse(self.__PRERENDER_MANIFEST)
                : void 0;
          e10.request.url = e10.request.url.replace(/\.rsc($|\?)/, '$1');
          let a2 = new I(e10.request.url, {
            headers: e10.request.headers,
            nextConfig: e10.request.nextConfig
          });
          for (let e11 of [...a2.searchParams.keys()]) {
            let t11 = a2.searchParams.getAll(e11);
            if (e11 !== q && e11.startsWith(q)) {
              let r10 = e11.substring(q.length);
              for (let e12 of (a2.searchParams.delete(r10), t11))
                a2.searchParams.append(r10, e12);
              a2.searchParams.delete(e11);
            }
          }
          let s2 = a2.buildId;
          a2.buildId = '';
          let l2 = e10.request.headers['x-nextjs-data'];
          l2 && '/index' === a2.pathname && (a2.pathname = '/');
          let c2 = (function (e11) {
              let t11 = new Headers();
              for (let [r10, n11] of Object.entries(e11))
                for (let e12 of Array.isArray(n11) ? n11 : [n11])
                  void 0 !== e12 &&
                    ('number' == typeof e12 && (e12 = e12.toString()),
                    t11.append(r10, e12));
              return t11;
            })(e10.request.headers),
            u2 = /* @__PURE__ */ new Map();
          if (!i10)
            for (let e11 of W) {
              let t11 = e11.toString().toLowerCase();
              c2.get(t11) && (u2.set(t11, c2.get(t11)), c2.delete(t11));
            }
          let p2 = new eS({
            page: e10.page,
            input: (function (e11, t11) {
              let r10 = 'string' == typeof e11,
                n11 = r10 ? new URL(e11) : e11;
              for (let e12 of B) n11.searchParams.delete(e12);
              if (t11) for (let e12 of V) n11.searchParams.delete(e12);
              return r10 ? n11.toString() : n11;
            })(a2, true).toString(),
            init: {
              body: e10.request.body,
              geo: e10.request.geo,
              headers: c2,
              ip: e10.request.ip,
              method: e10.request.method,
              nextConfig: e10.request.nextConfig,
              signal: e10.request.signal
            }
          });
          l2 &&
            Object.defineProperty(p2, '__isData', {
              enumerable: false,
              value: true
            }),
            !globalThis2.__incrementalCache &&
              e10.IncrementalCache &&
              (globalThis2.__incrementalCache = new e10.IncrementalCache({
                appDir: true,
                fetchCache: true,
                minimalMode: true,
                fetchCacheKeyPrefix: '',
                dev: false,
                requestHeaders: e10.request.headers,
                requestProtocol: 'https',
                getPrerenderManifest: () => ({
                  version: -1,
                  routes: {},
                  dynamicRoutes: {},
                  notFoundRoutes: [],
                  preview: { previewModeId: 'development-id' }
                })
              }));
          let h2 = new S({ request: p2, page: e10.page });
          if (
            (t10 = await ex(p2, () =>
              '/middleware' === e10.page || '/src/middleware' === e10.page
                ? em().trace(
                    nm.execute,
                    {
                      spanName: `middleware ${p2.method} ${p2.nextUrl.pathname}`,
                      attributes: {
                        'http.target': p2.nextUrl.pathname,
                        'http.method': p2.method
                      }
                    },
                    () =>
                      eb.wrap(
                        ev.F,
                        {
                          req: p2,
                          renderOpts: {
                            onUpdateCookies: (e11) => {
                              n10 = e11;
                            },
                            previewProps: (null == o10
                              ? void 0
                              : o10.preview) || {
                              previewModeId: 'development-id',
                              previewModeEncryptionKey: '',
                              previewModeSigningKey: ''
                            }
                          }
                        },
                        () => e10.handler(p2, h2)
                      )
                  )
                : e10.handler(p2, h2)
            )) &&
            !(t10 instanceof Response)
          )
            throw TypeError('Expected an instance of Response to be returned');
          t10 && n10 && t10.headers.set('set-cookie', n10);
          let f2 =
            null == t10 ? void 0 : t10.headers.get('x-middleware-rewrite');
          if (t10 && f2) {
            let r10 = new I(f2, {
              forceLocale: true,
              headers: e10.request.headers,
              nextConfig: e10.request.nextConfig
            });
            r10.host === p2.nextUrl.host &&
              ((r10.buildId = s2 || r10.buildId),
              t10.headers.set('x-middleware-rewrite', String(r10)));
            let n11 = H(String(r10), String(a2));
            l2 && t10.headers.set('x-nextjs-rewrite', n11);
          }
          let g2 = null == t10 ? void 0 : t10.headers.get('Location');
          if (t10 && g2 && !i10) {
            let r10 = new I(g2, {
              forceLocale: false,
              headers: e10.request.headers,
              nextConfig: e10.request.nextConfig
            });
            (t10 = new Response(t10.body, t10)),
              r10.host === p2.nextUrl.host &&
                ((r10.buildId = s2 || r10.buildId),
                t10.headers.set('Location', String(r10))),
              l2 &&
                (t10.headers.delete('Location'),
                t10.headers.set(
                  'x-nextjs-redirect',
                  H(String(r10), String(a2))
                ));
          }
          let m2 = t10 || D.next(),
            y2 = m2.headers.get('x-middleware-override-headers'),
            w2 = [];
          if (y2) {
            for (let [e11, t11] of u2)
              m2.headers.set(`x-middleware-request-${e11}`, t11), w2.push(e11);
            w2.length > 0 &&
              m2.headers.set(
                'x-middleware-override-headers',
                y2 + ',' + w2.join(',')
              );
          }
          return {
            response: m2,
            waitUntil: Promise.all(h2[v]),
            fetchMetrics: p2.fetchMetrics
          };
        }
        var eT = function (e10, t10, r10, n10, i10) {
            if ('m' === n10) throw TypeError('Private method is not writable');
            if ('a' === n10 && !i10)
              throw TypeError('Private accessor was defined without a setter');
            if ('function' == typeof t10 ? e10 !== t10 || !i10 : !t10.has(e10))
              throw TypeError(
                'Cannot write private member to an object whose class did not declare it'
              );
            return (
              'a' === n10
                ? i10.call(e10, r10)
                : i10
                ? (i10.value = r10)
                : t10.set(e10, r10),
              r10
            );
          },
          eP = function (e10, t10, r10, n10) {
            if ('a' === r10 && !n10)
              throw TypeError('Private accessor was defined without a getter');
            if ('function' == typeof t10 ? e10 !== t10 || !n10 : !t10.has(e10))
              throw TypeError(
                'Cannot read private member from an object whose class did not declare it'
              );
            return 'm' === r10
              ? n10
              : 'a' === r10
              ? n10.call(e10)
              : n10
              ? n10.value
              : t10.get(e10);
          };
        function eC(e10) {
          let t10 = e10 ? '__Secure-' : '';
          return {
            sessionToken: {
              name: `${t10}authjs.session-token`,
              options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: e10
              }
            },
            callbackUrl: {
              name: `${t10}authjs.callback-url`,
              options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: e10
              }
            },
            csrfToken: {
              name: `${e10 ? '__Host-' : ''}authjs.csrf-token`,
              options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: e10
              }
            },
            pkceCodeVerifier: {
              name: `${t10}authjs.pkce.code_verifier`,
              options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: e10,
                maxAge: 900
              }
            },
            state: {
              name: `${t10}authjs.state`,
              options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: e10,
                maxAge: 900
              }
            },
            nonce: {
              name: `${t10}authjs.nonce`,
              options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: e10
              }
            },
            webauthnChallenge: {
              name: `${t10}authjs.challenge`,
              options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: e10,
                maxAge: 900
              }
            }
          };
        }
        class eR {
          constructor(e10, t10, r10) {
            if (
              (ny.add(this),
              nw.set(this, {}),
              nb.set(this, void 0),
              nv.set(this, void 0),
              eT(this, nv, r10, 'f'),
              eT(this, nb, e10, 'f'),
              !t10)
            )
              return;
            let { name: n10 } = e10;
            for (let [e11, r11] of Object.entries(t10))
              e11.startsWith(n10) && r11 && (eP(this, nw, 'f')[e11] = r11);
          }
          get value() {
            return Object.keys(eP(this, nw, 'f'))
              .sort(
                (e10, t10) =>
                  parseInt(e10.split('.').pop() || '0') -
                  parseInt(t10.split('.').pop() || '0')
              )
              .map((e10) => eP(this, nw, 'f')[e10])
              .join('');
          }
          chunk(e10, t10) {
            let r10 = eP(this, ny, 'm', nS).call(this);
            for (let n10 of eP(this, ny, 'm', n_).call(this, {
              name: eP(this, nb, 'f').name,
              value: e10,
              options: { ...eP(this, nb, 'f').options, ...t10 }
            }))
              r10[n10.name] = n10;
            return Object.values(r10);
          }
          clean() {
            return Object.values(eP(this, ny, 'm', nS).call(this));
          }
        }
        (nw = /* @__PURE__ */ new WeakMap()),
          (nb = /* @__PURE__ */ new WeakMap()),
          (nv = /* @__PURE__ */ new WeakMap()),
          (ny = /* @__PURE__ */ new WeakSet()),
          (n_ = function (e10) {
            let t10 = Math.ceil(e10.value.length / 3936);
            if (1 === t10)
              return (eP(this, nw, 'f')[e10.name] = e10.value), [e10];
            let r10 = [];
            for (let n10 = 0; n10 < t10; n10++) {
              let t11 = `${e10.name}.${n10}`,
                i10 = e10.value.substr(3936 * n10, 3936);
              r10.push({ ...e10, name: t11, value: i10 }),
                (eP(this, nw, 'f')[t11] = i10);
            }
            return (
              eP(this, nv, 'f').debug('CHUNKING_SESSION_COOKIE', {
                message: 'Session cookie exceeds allowed 4096 bytes.',
                emptyCookieSize: 160,
                valueSize: e10.value.length,
                chunks: r10.map((e11) => e11.value.length + 160)
              }),
              r10
            );
          }),
          (nS = function () {
            let e10 = {};
            for (let t10 in eP(this, nw, 'f'))
              delete eP(this, nw, 'f')?.[t10],
                (e10[t10] = {
                  name: t10,
                  value: '',
                  options: { ...eP(this, nb, 'f').options, maxAge: 0 }
                });
            return e10;
          });
        class eO extends Error {
          constructor(e10, t10) {
            e10 instanceof Error
              ? super(void 0, { cause: { err: e10, ...e10.cause, ...t10 } })
              : 'string' == typeof e10
              ? (t10 instanceof Error && (t10 = { err: t10, ...t10.cause }),
                super(e10, t10))
              : super(void 0, e10),
              (this.name = this.constructor.name),
              (this.type = this.constructor.type ?? 'AuthError'),
              (this.kind = this.constructor.kind ?? 'error'),
              Error.captureStackTrace?.(this, this.constructor);
            let r10 = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
            this.message += `${this.message ? '. ' : ''}Read more at ${r10}`;
          }
        }
        class eI extends eO {}
        eI.kind = 'signIn';
        class eU extends eO {}
        eU.type = 'AdapterError';
        class eN extends eO {}
        eN.type = 'AccessDenied';
        class eM extends eO {}
        eM.type = 'CallbackRouteError';
        class eL extends eO {}
        eL.type = 'ErrorPageLoop';
        class ej extends eO {}
        ej.type = 'EventError';
        class e$ extends eO {}
        e$.type = 'InvalidCallbackUrl';
        class eD extends eI {
          constructor() {
            super(...arguments), (this.code = 'credentials');
          }
        }
        eD.type = 'CredentialsSignin';
        class eH extends eO {}
        eH.type = 'InvalidEndpoints';
        class eW extends eO {}
        eW.type = 'InvalidCheck';
        class eK extends eO {}
        eK.type = 'JWTSessionError';
        class eB extends eO {}
        eB.type = 'MissingAdapter';
        class eV extends eO {}
        eV.type = 'MissingAdapterMethods';
        class eq extends eO {}
        eq.type = 'MissingAuthorize';
        class eJ extends eO {}
        eJ.type = 'MissingSecret';
        class eF extends eI {}
        eF.type = 'OAuthAccountNotLinked';
        class ez extends eI {}
        ez.type = 'OAuthCallbackError';
        class eG extends eO {}
        eG.type = 'OAuthProfileParseError';
        class eX extends eO {}
        eX.type = 'SessionTokenError';
        class eY extends eI {}
        eY.type = 'OAuthSignInError';
        class eZ extends eI {}
        eZ.type = 'EmailSignInError';
        class eQ extends eO {}
        eQ.type = 'SignOutError';
        class e0 extends eO {}
        e0.type = 'UnknownAction';
        class e1 extends eO {}
        e1.type = 'UnsupportedStrategy';
        class e2 extends eO {}
        e2.type = 'InvalidProvider';
        class e3 extends eO {}
        e3.type = 'UntrustedHost';
        class e5 extends eO {}
        e5.type = 'Verification';
        class e6 extends eI {}
        e6.type = 'MissingCSRF';
        let e4 = /* @__PURE__ */ new Set([
          'CredentialsSignin',
          'OAuthAccountNotLinked',
          'OAuthCallbackError',
          'AccessDenied',
          'Verification',
          'MissingCSRF',
          'AccountNotLinked',
          'WebAuthnVerificationError'
        ]);
        class e8 extends eO {}
        e8.type = 'DuplicateConditionalUI';
        class e9 extends eO {}
        e9.type = 'MissingWebAuthnAutocomplete';
        class e7 extends eO {}
        e7.type = 'WebAuthnVerificationError';
        class te extends eI {}
        te.type = 'AccountNotLinked';
        class tt extends eO {}
        tt.type = 'ExperimentalFeatureNotEnabled';
        let tr = false;
        function tn(e10, t10) {
          try {
            return /^https?:/.test(
              new URL(e10, e10.startsWith('/') ? t10 : void 0).protocol
            );
          } catch {
            return false;
          }
        }
        let ti = false,
          to = false,
          ta = false,
          ts = [
            'createVerificationToken',
            'useVerificationToken',
            'getUserByEmail'
          ],
          tl = [
            'createUser',
            'getUser',
            'getUserByEmail',
            'getUserByAccount',
            'updateUser',
            'linkAccount',
            'createSession',
            'getSessionAndUser',
            'updateSession',
            'deleteSession'
          ],
          tc = [
            'createUser',
            'getUser',
            'linkAccount',
            'getAccount',
            'getAuthenticator',
            'createAuthenticator',
            'listAuthenticatorsByUserId',
            'updateAuthenticatorCounter'
          ],
          tu = () => {
            if ('undefined' != typeof globalThis2) return globalThis2;
            if ('undefined' != typeof self) return self;
            if ('undefined' != typeof window) return window;
            throw Error('unable to locate global object');
          },
          td = async (e10, t10, r10, n10, i10) => {
            let {
              crypto: { subtle: o10 }
            } = tu();
            return new Uint8Array(
              await o10.deriveBits(
                {
                  name: 'HKDF',
                  hash: `SHA-${e10.substr(3)}`,
                  salt: r10,
                  info: n10
                },
                await o10.importKey('raw', t10, 'HKDF', false, ['deriveBits']),
                i10 << 3
              )
            );
          };
        function tp(e10, t10) {
          if ('string' == typeof e10) return new TextEncoder().encode(e10);
          if (!(e10 instanceof Uint8Array))
            throw TypeError(
              `"${t10}"" must be an instance of Uint8Array or a string`
            );
          return e10;
        }
        async function th(e10, t10, r10, n10, i10) {
          return td(
            (function (e11) {
              switch (e11) {
                case 'sha256':
                case 'sha384':
                case 'sha512':
                case 'sha1':
                  return e11;
                default:
                  throw TypeError('unsupported "digest" value');
              }
            })(e10),
            (function (e11) {
              let t11 = tp(e11, 'ikm');
              if (!t11.byteLength)
                throw TypeError('"ikm" must be at least one byte in length');
              return t11;
            })(t10),
            tp(r10, 'salt'),
            (function (e11) {
              let t11 = tp(e11, 'info');
              if (t11.byteLength > 1024)
                throw TypeError('"info" must not contain more than 1024 bytes');
              return t11;
            })(n10),
            (function (e11, t11) {
              if ('number' != typeof e11 || !Number.isInteger(e11) || e11 < 1)
                throw TypeError('"keylen" must be a positive integer');
              if (e11 > 255 * (parseInt(t11.substr(3), 10) >> 3 || 20))
                throw TypeError('"keylen" too large');
              return e11;
            })(i10, e10)
          );
        }
        let tf = crypto,
          tg = (e10) => e10 instanceof CryptoKey,
          tm = async (e10, t10) => {
            let r10 = `SHA-${e10.slice(-3)}`;
            return new Uint8Array(await tf.subtle.digest(r10, t10));
          },
          ty = new TextEncoder(),
          tw = new TextDecoder();
        function tb(...e10) {
          let t10 = new Uint8Array(
              e10.reduce((e11, { length: t11 }) => e11 + t11, 0)
            ),
            r10 = 0;
          for (let n10 of e10) t10.set(n10, r10), (r10 += n10.length);
          return t10;
        }
        function tv(e10, t10, r10) {
          if (t10 < 0 || t10 >= 4294967296)
            throw RangeError(
              `value must be >= 0 and <= ${4294967296 - 1}. Received ${t10}`
            );
          e10.set([t10 >>> 24, t10 >>> 16, t10 >>> 8, 255 & t10], r10);
        }
        function t_(e10) {
          let t10 = new Uint8Array(8);
          return (
            tv(t10, Math.floor(e10 / 4294967296), 0),
            tv(t10, e10 % 4294967296, 4),
            t10
          );
        }
        function tS(e10) {
          let t10 = new Uint8Array(4);
          return tv(t10, e10), t10;
        }
        function tk(e10) {
          return tb(tS(e10.length), e10);
        }
        async function tx(e10, t10, r10) {
          let n10 = Math.ceil((t10 >> 3) / 32),
            i10 = new Uint8Array(32 * n10);
          for (let t11 = 0; t11 < n10; t11++) {
            let n11 = new Uint8Array(4 + e10.length + r10.length);
            n11.set(tS(t11 + 1)),
              n11.set(e10, 4),
              n11.set(r10, 4 + e10.length),
              i10.set(await tm('sha256', n11), 32 * t11);
          }
          return i10.slice(0, t10 >> 3);
        }
        let tE = (e10) => {
            let t10 = e10;
            'string' == typeof t10 && (t10 = ty.encode(t10));
            let r10 = [];
            for (let e11 = 0; e11 < t10.length; e11 += 32768)
              r10.push(
                String.fromCharCode.apply(null, t10.subarray(e11, e11 + 32768))
              );
            return btoa(r10.join(''));
          },
          tA = (e10) =>
            tE(e10).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
          tT = (e10) => {
            let t10 = atob(e10),
              r10 = new Uint8Array(t10.length);
            for (let e11 = 0; e11 < t10.length; e11++)
              r10[e11] = t10.charCodeAt(e11);
            return r10;
          },
          tP = (e10) => {
            let t10 = e10;
            t10 instanceof Uint8Array && (t10 = tw.decode(t10)),
              (t10 = t10
                .replace(/-/g, '+')
                .replace(/_/g, '/')
                .replace(/\s/g, ''));
            try {
              return tT(t10);
            } catch {
              throw TypeError(
                'The input to be decoded is not correctly encoded.'
              );
            }
          };
        class tC extends Error {
          static get code() {
            return 'ERR_JOSE_GENERIC';
          }
          constructor(e10) {
            super(e10),
              (this.code = 'ERR_JOSE_GENERIC'),
              (this.name = this.constructor.name),
              Error.captureStackTrace?.(this, this.constructor);
          }
        }
        class tR extends tC {
          static get code() {
            return 'ERR_JWT_CLAIM_VALIDATION_FAILED';
          }
          constructor(e10, t10 = 'unspecified', r10 = 'unspecified') {
            super(e10),
              (this.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED'),
              (this.claim = t10),
              (this.reason = r10);
          }
        }
        class tO extends tC {
          static get code() {
            return 'ERR_JWT_EXPIRED';
          }
          constructor(e10, t10 = 'unspecified', r10 = 'unspecified') {
            super(e10),
              (this.code = 'ERR_JWT_EXPIRED'),
              (this.claim = t10),
              (this.reason = r10);
          }
        }
        class tI extends tC {
          constructor() {
            super(...arguments), (this.code = 'ERR_JOSE_ALG_NOT_ALLOWED');
          }
          static get code() {
            return 'ERR_JOSE_ALG_NOT_ALLOWED';
          }
        }
        class tU extends tC {
          constructor() {
            super(...arguments), (this.code = 'ERR_JOSE_NOT_SUPPORTED');
          }
          static get code() {
            return 'ERR_JOSE_NOT_SUPPORTED';
          }
        }
        class tN extends tC {
          constructor() {
            super(...arguments),
              (this.code = 'ERR_JWE_DECRYPTION_FAILED'),
              (this.message = 'decryption operation failed');
          }
          static get code() {
            return 'ERR_JWE_DECRYPTION_FAILED';
          }
        }
        class tM extends tC {
          constructor() {
            super(...arguments), (this.code = 'ERR_JWE_INVALID');
          }
          static get code() {
            return 'ERR_JWE_INVALID';
          }
        }
        class tL extends tC {
          constructor() {
            super(...arguments), (this.code = 'ERR_JWT_INVALID');
          }
          static get code() {
            return 'ERR_JWT_INVALID';
          }
        }
        class tj extends tC {
          constructor() {
            super(...arguments), (this.code = 'ERR_JWK_INVALID');
          }
          static get code() {
            return 'ERR_JWK_INVALID';
          }
        }
        Symbol.asyncIterator;
        let t$ = tf.getRandomValues.bind(tf);
        function tD(e10) {
          switch (e10) {
            case 'A128GCM':
            case 'A128GCMKW':
            case 'A192GCM':
            case 'A192GCMKW':
            case 'A256GCM':
            case 'A256GCMKW':
              return 96;
            case 'A128CBC-HS256':
            case 'A192CBC-HS384':
            case 'A256CBC-HS512':
              return 128;
            default:
              throw new tU(`Unsupported JWE Algorithm: ${e10}`);
          }
        }
        let tH = (e10) => t$(new Uint8Array(tD(e10) >> 3)),
          tW = (e10, t10) => {
            if (t10.length << 3 !== tD(e10))
              throw new tM('Invalid Initialization Vector length');
          },
          tK = (e10, t10) => {
            let r10 = e10.byteLength << 3;
            if (r10 !== t10)
              throw new tM(
                `Invalid Content Encryption Key length. Expected ${t10} bits, got ${r10} bits`
              );
          },
          tB = (e10, t10) => {
            if (!(e10 instanceof Uint8Array))
              throw TypeError('First argument must be a buffer');
            if (!(t10 instanceof Uint8Array))
              throw TypeError('Second argument must be a buffer');
            if (e10.length !== t10.length)
              throw TypeError('Input buffers must have the same length');
            let r10 = e10.length,
              n10 = 0,
              i10 = -1;
            for (; ++i10 < r10; ) n10 |= e10[i10] ^ t10[i10];
            return 0 === n10;
          };
        function tV(e10, t10 = 'algorithm.name') {
          return TypeError(
            `CryptoKey does not support this operation, its ${t10} must be ${e10}`
          );
        }
        function tq(e10, t10) {
          return e10.name === t10;
        }
        function tJ(e10, t10, ...r10) {
          switch (t10) {
            case 'A128GCM':
            case 'A192GCM':
            case 'A256GCM': {
              if (!tq(e10.algorithm, 'AES-GCM')) throw tV('AES-GCM');
              let r11 = parseInt(t10.slice(1, 4), 10);
              if (e10.algorithm.length !== r11)
                throw tV(r11, 'algorithm.length');
              break;
            }
            case 'A128KW':
            case 'A192KW':
            case 'A256KW': {
              if (!tq(e10.algorithm, 'AES-KW')) throw tV('AES-KW');
              let r11 = parseInt(t10.slice(1, 4), 10);
              if (e10.algorithm.length !== r11)
                throw tV(r11, 'algorithm.length');
              break;
            }
            case 'ECDH':
              switch (e10.algorithm.name) {
                case 'ECDH':
                case 'X25519':
                case 'X448':
                  break;
                default:
                  throw tV('ECDH, X25519, or X448');
              }
              break;
            case 'PBES2-HS256+A128KW':
            case 'PBES2-HS384+A192KW':
            case 'PBES2-HS512+A256KW':
              if (!tq(e10.algorithm, 'PBKDF2')) throw tV('PBKDF2');
              break;
            case 'RSA-OAEP':
            case 'RSA-OAEP-256':
            case 'RSA-OAEP-384':
            case 'RSA-OAEP-512': {
              if (!tq(e10.algorithm, 'RSA-OAEP')) throw tV('RSA-OAEP');
              let r11 = parseInt(t10.slice(9), 10) || 1;
              if (parseInt(e10.algorithm.hash.name.slice(4), 10) !== r11)
                throw tV(`SHA-${r11}`, 'algorithm.hash');
              break;
            }
            default:
              throw TypeError('CryptoKey does not support this operation');
          }
          !(function (e11, t11) {
            if (t11.length && !t11.some((t12) => e11.usages.includes(t12))) {
              let e12 =
                'CryptoKey does not support this operation, its usages must include ';
              if (t11.length > 2) {
                let r11 = t11.pop();
                e12 += `one of ${t11.join(', ')}, or ${r11}.`;
              } else
                2 === t11.length
                  ? (e12 += `one of ${t11[0]} or ${t11[1]}.`)
                  : (e12 += `${t11[0]}.`);
              throw TypeError(e12);
            }
          })(e10, r10);
        }
        function tF(e10, t10, ...r10) {
          if (r10.length > 2) {
            let t11 = r10.pop();
            e10 += `one of type ${r10.join(', ')}, or ${t11}.`;
          } else
            2 === r10.length
              ? (e10 += `one of type ${r10[0]} or ${r10[1]}.`)
              : (e10 += `of type ${r10[0]}.`);
          return (
            null == t10
              ? (e10 += ` Received ${t10}`)
              : 'function' == typeof t10 && t10.name
              ? (e10 += ` Received function ${t10.name}`)
              : 'object' == typeof t10 &&
                null != t10 &&
                t10.constructor?.name &&
                (e10 += ` Received an instance of ${t10.constructor.name}`),
            e10
          );
        }
        let tz = (e10, ...t10) => tF('Key must be ', e10, ...t10);
        function tG(e10, t10, ...r10) {
          return tF(`Key for the ${e10} algorithm must be `, t10, ...r10);
        }
        let tX = (e10) => tg(e10),
          tY = ['CryptoKey'];
        async function tZ(e10, t10, r10, n10, i10, o10) {
          let a2, s2;
          if (!(t10 instanceof Uint8Array))
            throw TypeError(tz(t10, 'Uint8Array'));
          let l2 = parseInt(e10.slice(1, 4), 10),
            c2 = await tf.subtle.importKey(
              'raw',
              t10.subarray(l2 >> 3),
              'AES-CBC',
              false,
              ['decrypt']
            ),
            u2 = await tf.subtle.importKey(
              'raw',
              t10.subarray(0, l2 >> 3),
              { hash: `SHA-${l2 << 1}`, name: 'HMAC' },
              false,
              ['sign']
            ),
            d2 = tb(o10, n10, r10, t_(o10.length << 3)),
            p2 = new Uint8Array(
              (await tf.subtle.sign('HMAC', u2, d2)).slice(0, l2 >> 3)
            );
          try {
            a2 = tB(i10, p2);
          } catch {}
          if (!a2) throw new tN();
          try {
            s2 = new Uint8Array(
              await tf.subtle.decrypt({ iv: n10, name: 'AES-CBC' }, c2, r10)
            );
          } catch {}
          if (!s2) throw new tN();
          return s2;
        }
        async function tQ(e10, t10, r10, n10, i10, o10) {
          let a2;
          t10 instanceof Uint8Array
            ? (a2 = await tf.subtle.importKey('raw', t10, 'AES-GCM', false, [
                'decrypt'
              ]))
            : (tJ(t10, e10, 'decrypt'), (a2 = t10));
          try {
            return new Uint8Array(
              await tf.subtle.decrypt(
                {
                  additionalData: o10,
                  iv: n10,
                  name: 'AES-GCM',
                  tagLength: 128
                },
                a2,
                tb(r10, i10)
              )
            );
          } catch {
            throw new tN();
          }
        }
        let t0 = async (e10, t10, r10, n10, i10, o10) => {
            if (!tg(t10) && !(t10 instanceof Uint8Array))
              throw TypeError(tz(t10, ...tY, 'Uint8Array'));
            if (!n10) throw new tM('JWE Initialization Vector missing');
            if (!i10) throw new tM('JWE Authentication Tag missing');
            switch ((tW(e10, n10), e10)) {
              case 'A128CBC-HS256':
              case 'A192CBC-HS384':
              case 'A256CBC-HS512':
                return (
                  t10 instanceof Uint8Array &&
                    tK(t10, parseInt(e10.slice(-3), 10)),
                  tZ(e10, t10, r10, n10, i10, o10)
                );
              case 'A128GCM':
              case 'A192GCM':
              case 'A256GCM':
                return (
                  t10 instanceof Uint8Array &&
                    tK(t10, parseInt(e10.slice(1, 4), 10)),
                  tQ(e10, t10, r10, n10, i10, o10)
                );
              default:
                throw new tU('Unsupported JWE Content Encryption Algorithm');
            }
          },
          t1 = (...e10) => {
            let t10;
            let r10 = e10.filter(Boolean);
            if (0 === r10.length || 1 === r10.length) return true;
            for (let e11 of r10) {
              let r11 = Object.keys(e11);
              if (!t10 || 0 === t10.size) {
                t10 = new Set(r11);
                continue;
              }
              for (let e12 of r11) {
                if (t10.has(e12)) return false;
                t10.add(e12);
              }
            }
            return true;
          };
        function t2(e10) {
          if (
            !('object' == typeof e10 && null !== e10) ||
            '[object Object]' !== Object.prototype.toString.call(e10)
          )
            return false;
          if (null === Object.getPrototypeOf(e10)) return true;
          let t10 = e10;
          for (; null !== Object.getPrototypeOf(t10); )
            t10 = Object.getPrototypeOf(t10);
          return Object.getPrototypeOf(e10) === t10;
        }
        let t3 = [{ hash: 'SHA-256', name: 'HMAC' }, true, ['sign']];
        function t5(e10, t10) {
          if (e10.algorithm.length !== parseInt(t10.slice(1, 4), 10))
            throw TypeError(`Invalid key size for alg: ${t10}`);
        }
        function t6(e10, t10, r10) {
          if (tg(e10)) return tJ(e10, t10, r10), e10;
          if (e10 instanceof Uint8Array)
            return tf.subtle.importKey('raw', e10, 'AES-KW', true, [r10]);
          throw TypeError(tz(e10, ...tY, 'Uint8Array'));
        }
        let t4 = async (e10, t10, r10) => {
            let n10 = await t6(t10, e10, 'wrapKey');
            t5(n10, e10);
            let i10 = await tf.subtle.importKey('raw', r10, ...t3);
            return new Uint8Array(
              await tf.subtle.wrapKey('raw', i10, n10, 'AES-KW')
            );
          },
          t8 = async (e10, t10, r10) => {
            let n10 = await t6(t10, e10, 'unwrapKey');
            t5(n10, e10);
            let i10 = await tf.subtle.unwrapKey(
              'raw',
              r10,
              n10,
              'AES-KW',
              ...t3
            );
            return new Uint8Array(await tf.subtle.exportKey('raw', i10));
          };
        async function t9(
          e10,
          t10,
          r10,
          n10,
          i10 = new Uint8Array(0),
          o10 = new Uint8Array(0)
        ) {
          let a2;
          if (!tg(e10)) throw TypeError(tz(e10, ...tY));
          if ((tJ(e10, 'ECDH'), !tg(t10))) throw TypeError(tz(t10, ...tY));
          tJ(t10, 'ECDH', 'deriveBits');
          let s2 = tb(tk(ty.encode(r10)), tk(i10), tk(o10), tS(n10));
          return (
            (a2 =
              'X25519' === e10.algorithm.name
                ? 256
                : 'X448' === e10.algorithm.name
                ? 448
                : Math.ceil(
                    parseInt(e10.algorithm.namedCurve.substr(-3), 10) / 8
                  ) << 3),
            tx(
              new Uint8Array(
                await tf.subtle.deriveBits(
                  { name: e10.algorithm.name, public: e10 },
                  t10,
                  a2
                )
              ),
              n10,
              s2
            )
          );
        }
        async function t7(e10) {
          if (!tg(e10)) throw TypeError(tz(e10, ...tY));
          return tf.subtle.generateKey(e10.algorithm, true, ['deriveBits']);
        }
        function re(e10) {
          if (!tg(e10)) throw TypeError(tz(e10, ...tY));
          return (
            ['P-256', 'P-384', 'P-521'].includes(e10.algorithm.namedCurve) ||
            'X25519' === e10.algorithm.name ||
            'X448' === e10.algorithm.name
          );
        }
        async function rt(e10, t10, r10, n10) {
          !(function (e11) {
            if (!(e11 instanceof Uint8Array) || e11.length < 8)
              throw new tM('PBES2 Salt Input must be 8 or more octets');
          })(e10);
          let i10 = tb(ty.encode(t10), new Uint8Array([0]), e10),
            o10 = parseInt(t10.slice(13, 16), 10),
            a2 = {
              hash: `SHA-${t10.slice(8, 11)}`,
              iterations: r10,
              name: 'PBKDF2',
              salt: i10
            },
            s2 = await (function (e11, t11) {
              if (e11 instanceof Uint8Array)
                return tf.subtle.importKey('raw', e11, 'PBKDF2', false, [
                  'deriveBits'
                ]);
              if (tg(e11)) return tJ(e11, t11, 'deriveBits', 'deriveKey'), e11;
              throw TypeError(tz(e11, ...tY, 'Uint8Array'));
            })(n10, t10);
          if (s2.usages.includes('deriveBits'))
            return new Uint8Array(await tf.subtle.deriveBits(a2, s2, o10));
          if (s2.usages.includes('deriveKey'))
            return tf.subtle.deriveKey(
              a2,
              s2,
              { length: o10, name: 'AES-KW' },
              false,
              ['wrapKey', 'unwrapKey']
            );
          throw TypeError(
            'PBKDF2 key "usages" must include "deriveBits" or "deriveKey"'
          );
        }
        let rr = async (
            e10,
            t10,
            r10,
            n10 = 2048,
            i10 = t$(new Uint8Array(16))
          ) => {
            let o10 = await rt(i10, e10, n10, t10);
            return {
              encryptedKey: await t4(e10.slice(-6), o10, r10),
              p2c: n10,
              p2s: tA(i10)
            };
          },
          rn = async (e10, t10, r10, n10, i10) => {
            let o10 = await rt(i10, e10, n10, t10);
            return t8(e10.slice(-6), o10, r10);
          };
        function ri(e10) {
          switch (e10) {
            case 'RSA-OAEP':
            case 'RSA-OAEP-256':
            case 'RSA-OAEP-384':
            case 'RSA-OAEP-512':
              return 'RSA-OAEP';
            default:
              throw new tU(
                `alg ${e10} is not supported either by JOSE or your javascript runtime`
              );
          }
        }
        let ro = (e10, t10) => {
            if (e10.startsWith('RS') || e10.startsWith('PS')) {
              let { modulusLength: r10 } = t10.algorithm;
              if ('number' != typeof r10 || r10 < 2048)
                throw TypeError(
                  `${e10} requires key modulusLength to be 2048 bits or larger`
                );
            }
          },
          ra = async (e10, t10, r10) => {
            if (!tg(t10)) throw TypeError(tz(t10, ...tY));
            if (
              (tJ(t10, e10, 'encrypt', 'wrapKey'),
              ro(e10, t10),
              t10.usages.includes('encrypt'))
            )
              return new Uint8Array(await tf.subtle.encrypt(ri(e10), t10, r10));
            if (t10.usages.includes('wrapKey')) {
              let n10 = await tf.subtle.importKey('raw', r10, ...t3);
              return new Uint8Array(
                await tf.subtle.wrapKey('raw', n10, t10, ri(e10))
              );
            }
            throw TypeError(
              'RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation'
            );
          },
          rs = async (e10, t10, r10) => {
            if (!tg(t10)) throw TypeError(tz(t10, ...tY));
            if (
              (tJ(t10, e10, 'decrypt', 'unwrapKey'),
              ro(e10, t10),
              t10.usages.includes('decrypt'))
            )
              return new Uint8Array(await tf.subtle.decrypt(ri(e10), t10, r10));
            if (t10.usages.includes('unwrapKey')) {
              let n10 = await tf.subtle.unwrapKey(
                'raw',
                r10,
                t10,
                ri(e10),
                ...t3
              );
              return new Uint8Array(await tf.subtle.exportKey('raw', n10));
            }
            throw TypeError(
              'RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation'
            );
          };
        function rl(e10) {
          switch (e10) {
            case 'A128GCM':
              return 128;
            case 'A192GCM':
              return 192;
            case 'A256GCM':
            case 'A128CBC-HS256':
              return 256;
            case 'A192CBC-HS384':
              return 384;
            case 'A256CBC-HS512':
              return 512;
            default:
              throw new tU(`Unsupported JWE Algorithm: ${e10}`);
          }
        }
        let rc = (e10) => t$(new Uint8Array(rl(e10) >> 3)),
          ru = async (e10) => {
            if (!e10.alg)
              throw TypeError(
                '"alg" argument is required when "jwk.alg" is not present'
              );
            let { algorithm: t10, keyUsages: r10 } = (function (e11) {
                let t11, r11;
                switch (e11.kty) {
                  case 'RSA':
                    switch (e11.alg) {
                      case 'PS256':
                      case 'PS384':
                      case 'PS512':
                        (t11 = {
                          name: 'RSA-PSS',
                          hash: `SHA-${e11.alg.slice(-3)}`
                        }),
                          (r11 = e11.d ? ['sign'] : ['verify']);
                        break;
                      case 'RS256':
                      case 'RS384':
                      case 'RS512':
                        (t11 = {
                          name: 'RSASSA-PKCS1-v1_5',
                          hash: `SHA-${e11.alg.slice(-3)}`
                        }),
                          (r11 = e11.d ? ['sign'] : ['verify']);
                        break;
                      case 'RSA-OAEP':
                      case 'RSA-OAEP-256':
                      case 'RSA-OAEP-384':
                      case 'RSA-OAEP-512':
                        (t11 = {
                          name: 'RSA-OAEP',
                          hash: `SHA-${parseInt(e11.alg.slice(-3), 10) || 1}`
                        }),
                          (r11 = e11.d
                            ? ['decrypt', 'unwrapKey']
                            : ['encrypt', 'wrapKey']);
                        break;
                      default:
                        throw new tU(
                          'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
                        );
                    }
                    break;
                  case 'EC':
                    switch (e11.alg) {
                      case 'ES256':
                        (t11 = { name: 'ECDSA', namedCurve: 'P-256' }),
                          (r11 = e11.d ? ['sign'] : ['verify']);
                        break;
                      case 'ES384':
                        (t11 = { name: 'ECDSA', namedCurve: 'P-384' }),
                          (r11 = e11.d ? ['sign'] : ['verify']);
                        break;
                      case 'ES512':
                        (t11 = { name: 'ECDSA', namedCurve: 'P-521' }),
                          (r11 = e11.d ? ['sign'] : ['verify']);
                        break;
                      case 'ECDH-ES':
                      case 'ECDH-ES+A128KW':
                      case 'ECDH-ES+A192KW':
                      case 'ECDH-ES+A256KW':
                        (t11 = { name: 'ECDH', namedCurve: e11.crv }),
                          (r11 = e11.d ? ['deriveBits'] : []);
                        break;
                      default:
                        throw new tU(
                          'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
                        );
                    }
                    break;
                  case 'OKP':
                    switch (e11.alg) {
                      case 'EdDSA':
                        (t11 = { name: e11.crv }),
                          (r11 = e11.d ? ['sign'] : ['verify']);
                        break;
                      case 'ECDH-ES':
                      case 'ECDH-ES+A128KW':
                      case 'ECDH-ES+A192KW':
                      case 'ECDH-ES+A256KW':
                        (t11 = { name: e11.crv }),
                          (r11 = e11.d ? ['deriveBits'] : []);
                        break;
                      default:
                        throw new tU(
                          'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
                        );
                    }
                    break;
                  default:
                    throw new tU(
                      'Invalid or unsupported JWK "kty" (Key Type) Parameter value'
                    );
                }
                return { algorithm: t11, keyUsages: r11 };
              })(e10),
              n10 = [t10, e10.ext ?? false, e10.key_ops ?? r10],
              i10 = { ...e10 };
            return (
              delete i10.alg,
              delete i10.use,
              tf.subtle.importKey('jwk', i10, ...n10)
            );
          };
        async function rd(e10, t10) {
          if (!t2(e10)) throw TypeError('JWK must be an object');
          switch ((t10 || (t10 = e10.alg), e10.kty)) {
            case 'oct':
              if ('string' != typeof e10.k || !e10.k)
                throw TypeError('missing "k" (Key Value) Parameter value');
              return tP(e10.k);
            case 'RSA':
              if (void 0 !== e10.oth)
                throw new tU(
                  'RSA JWK "oth" (Other Primes Info) Parameter value is not supported'
                );
            case 'EC':
            case 'OKP':
              return ru({ ...e10, alg: t10 });
            default:
              throw new tU('Unsupported "kty" (Key Type) Parameter value');
          }
        }
        let rp = (e10, t10) => {
            if (!(t10 instanceof Uint8Array)) {
              if (!tX(t10)) throw TypeError(tG(e10, t10, ...tY, 'Uint8Array'));
              if ('secret' !== t10.type)
                throw TypeError(
                  `${tY.join(
                    ' or '
                  )} instances for symmetric algorithms must be of type "secret"`
                );
            }
          },
          rh = (e10, t10, r10) => {
            if (!tX(t10)) throw TypeError(tG(e10, t10, ...tY));
            if ('secret' === t10.type)
              throw TypeError(
                `${tY.join(
                  ' or '
                )} instances for asymmetric algorithms must not be of type "secret"`
              );
            if ('sign' === r10 && 'public' === t10.type)
              throw TypeError(
                `${tY.join(
                  ' or '
                )} instances for asymmetric algorithm signing must be of type "private"`
              );
            if ('decrypt' === r10 && 'public' === t10.type)
              throw TypeError(
                `${tY.join(
                  ' or '
                )} instances for asymmetric algorithm decryption must be of type "private"`
              );
            if (t10.algorithm && 'verify' === r10 && 'private' === t10.type)
              throw TypeError(
                `${tY.join(
                  ' or '
                )} instances for asymmetric algorithm verifying must be of type "public"`
              );
            if (t10.algorithm && 'encrypt' === r10 && 'private' === t10.type)
              throw TypeError(
                `${tY.join(
                  ' or '
                )} instances for asymmetric algorithm encryption must be of type "public"`
              );
          },
          rf = (e10, t10, r10) => {
            e10.startsWith('HS') ||
            'dir' === e10 ||
            e10.startsWith('PBES2') ||
            /^A\d{3}(?:GCM)?KW$/.test(e10)
              ? rp(e10, t10)
              : rh(e10, t10, r10);
          };
        async function rg(e10, t10, r10, n10, i10) {
          if (!(r10 instanceof Uint8Array))
            throw TypeError(tz(r10, 'Uint8Array'));
          let o10 = parseInt(e10.slice(1, 4), 10),
            a2 = await tf.subtle.importKey(
              'raw',
              r10.subarray(o10 >> 3),
              'AES-CBC',
              false,
              ['encrypt']
            ),
            s2 = await tf.subtle.importKey(
              'raw',
              r10.subarray(0, o10 >> 3),
              { hash: `SHA-${o10 << 1}`, name: 'HMAC' },
              false,
              ['sign']
            ),
            l2 = new Uint8Array(
              await tf.subtle.encrypt({ iv: n10, name: 'AES-CBC' }, a2, t10)
            ),
            c2 = tb(i10, n10, l2, t_(i10.length << 3));
          return {
            ciphertext: l2,
            tag: new Uint8Array(
              (await tf.subtle.sign('HMAC', s2, c2)).slice(0, o10 >> 3)
            ),
            iv: n10
          };
        }
        async function rm(e10, t10, r10, n10, i10) {
          let o10;
          r10 instanceof Uint8Array
            ? (o10 = await tf.subtle.importKey('raw', r10, 'AES-GCM', false, [
                'encrypt'
              ]))
            : (tJ(r10, e10, 'encrypt'), (o10 = r10));
          let a2 = new Uint8Array(
              await tf.subtle.encrypt(
                {
                  additionalData: i10,
                  iv: n10,
                  name: 'AES-GCM',
                  tagLength: 128
                },
                o10,
                t10
              )
            ),
            s2 = a2.slice(-16);
          return { ciphertext: a2.slice(0, -16), tag: s2, iv: n10 };
        }
        let ry = async (e10, t10, r10, n10, i10) => {
          if (!tg(r10) && !(r10 instanceof Uint8Array))
            throw TypeError(tz(r10, ...tY, 'Uint8Array'));
          switch ((n10 ? tW(e10, n10) : (n10 = tH(e10)), e10)) {
            case 'A128CBC-HS256':
            case 'A192CBC-HS384':
            case 'A256CBC-HS512':
              return (
                r10 instanceof Uint8Array &&
                  tK(r10, parseInt(e10.slice(-3), 10)),
                rg(e10, t10, r10, n10, i10)
              );
            case 'A128GCM':
            case 'A192GCM':
            case 'A256GCM':
              return (
                r10 instanceof Uint8Array &&
                  tK(r10, parseInt(e10.slice(1, 4), 10)),
                rm(e10, t10, r10, n10, i10)
              );
            default:
              throw new tU('Unsupported JWE Content Encryption Algorithm');
          }
        };
        async function rw(e10, t10, r10, n10) {
          let i10 = e10.slice(0, 7),
            o10 = await ry(i10, r10, t10, n10, new Uint8Array(0));
          return {
            encryptedKey: o10.ciphertext,
            iv: tA(o10.iv),
            tag: tA(o10.tag)
          };
        }
        async function rb(e10, t10, r10, n10, i10) {
          return t0(e10.slice(0, 7), t10, r10, n10, i10, new Uint8Array(0));
        }
        async function rv(e10, t10, r10, n10, i10) {
          switch ((rf(e10, t10, 'decrypt'), e10)) {
            case 'dir':
              if (void 0 !== r10)
                throw new tM('Encountered unexpected JWE Encrypted Key');
              return t10;
            case 'ECDH-ES':
              if (void 0 !== r10)
                throw new tM('Encountered unexpected JWE Encrypted Key');
            case 'ECDH-ES+A128KW':
            case 'ECDH-ES+A192KW':
            case 'ECDH-ES+A256KW': {
              let i11, o10;
              if (!t2(n10.epk))
                throw new tM(
                  'JOSE Header "epk" (Ephemeral Public Key) missing or invalid'
                );
              if (!re(t10))
                throw new tU(
                  'ECDH with the provided key is not allowed or not supported by your javascript runtime'
                );
              let a2 = await rd(n10.epk, e10);
              if (void 0 !== n10.apu) {
                if ('string' != typeof n10.apu)
                  throw new tM(
                    'JOSE Header "apu" (Agreement PartyUInfo) invalid'
                  );
                try {
                  i11 = tP(n10.apu);
                } catch {
                  throw new tM('Failed to base64url decode the apu');
                }
              }
              if (void 0 !== n10.apv) {
                if ('string' != typeof n10.apv)
                  throw new tM(
                    'JOSE Header "apv" (Agreement PartyVInfo) invalid'
                  );
                try {
                  o10 = tP(n10.apv);
                } catch {
                  throw new tM('Failed to base64url decode the apv');
                }
              }
              let s2 = await t9(
                a2,
                t10,
                'ECDH-ES' === e10 ? n10.enc : e10,
                'ECDH-ES' === e10
                  ? rl(n10.enc)
                  : parseInt(e10.slice(-5, -2), 10),
                i11,
                o10
              );
              if ('ECDH-ES' === e10) return s2;
              if (void 0 === r10) throw new tM('JWE Encrypted Key missing');
              return t8(e10.slice(-6), s2, r10);
            }
            case 'RSA1_5':
            case 'RSA-OAEP':
            case 'RSA-OAEP-256':
            case 'RSA-OAEP-384':
            case 'RSA-OAEP-512':
              if (void 0 === r10) throw new tM('JWE Encrypted Key missing');
              return rs(e10, t10, r10);
            case 'PBES2-HS256+A128KW':
            case 'PBES2-HS384+A192KW':
            case 'PBES2-HS512+A256KW': {
              let o10;
              if (void 0 === r10) throw new tM('JWE Encrypted Key missing');
              if ('number' != typeof n10.p2c)
                throw new tM(
                  'JOSE Header "p2c" (PBES2 Count) missing or invalid'
                );
              let a2 = i10?.maxPBES2Count || 1e4;
              if (n10.p2c > a2)
                throw new tM(
                  'JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds'
                );
              if ('string' != typeof n10.p2s)
                throw new tM(
                  'JOSE Header "p2s" (PBES2 Salt) missing or invalid'
                );
              try {
                o10 = tP(n10.p2s);
              } catch {
                throw new tM('Failed to base64url decode the p2s');
              }
              return rn(e10, t10, r10, n10.p2c, o10);
            }
            case 'A128KW':
            case 'A192KW':
            case 'A256KW':
              if (void 0 === r10) throw new tM('JWE Encrypted Key missing');
              return t8(e10, t10, r10);
            case 'A128GCMKW':
            case 'A192GCMKW':
            case 'A256GCMKW': {
              let i11, o10;
              if (void 0 === r10) throw new tM('JWE Encrypted Key missing');
              if ('string' != typeof n10.iv)
                throw new tM(
                  'JOSE Header "iv" (Initialization Vector) missing or invalid'
                );
              if ('string' != typeof n10.tag)
                throw new tM(
                  'JOSE Header "tag" (Authentication Tag) missing or invalid'
                );
              try {
                i11 = tP(n10.iv);
              } catch {
                throw new tM('Failed to base64url decode the iv');
              }
              try {
                o10 = tP(n10.tag);
              } catch {
                throw new tM('Failed to base64url decode the tag');
              }
              return rb(e10, t10, r10, i11, o10);
            }
            default:
              throw new tU(
                'Invalid or unsupported "alg" (JWE Algorithm) header value'
              );
          }
        }
        let r_ = function (e10, t10, r10, n10, i10) {
            let o10;
            if (void 0 !== i10.crit && n10?.crit === void 0)
              throw new e10(
                '"crit" (Critical) Header Parameter MUST be integrity protected'
              );
            if (!n10 || void 0 === n10.crit) return /* @__PURE__ */ new Set();
            if (
              !Array.isArray(n10.crit) ||
              0 === n10.crit.length ||
              n10.crit.some((e11) => 'string' != typeof e11 || 0 === e11.length)
            )
              throw new e10(
                '"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present'
              );
            for (let a2 of ((o10 =
              void 0 !== r10
                ? new Map([...Object.entries(r10), ...t10.entries()])
                : t10),
            n10.crit)) {
              if (!o10.has(a2))
                throw new tU(
                  `Extension Header Parameter "${a2}" is not recognized`
                );
              if (void 0 === i10[a2])
                throw new e10(`Extension Header Parameter "${a2}" is missing`);
              if (o10.get(a2) && void 0 === n10[a2])
                throw new e10(
                  `Extension Header Parameter "${a2}" MUST be integrity protected`
                );
            }
            return new Set(n10.crit);
          },
          rS = (e10, t10) => {
            if (
              void 0 !== t10 &&
              (!Array.isArray(t10) || t10.some((e11) => 'string' != typeof e11))
            )
              throw TypeError(`"${e10}" option must be an array of strings`);
            if (t10) return new Set(t10);
          };
        async function rk(e10, t10, r10) {
          let n10, i10, o10, a2, s2, l2, c2;
          if (!t2(e10)) throw new tM('Flattened JWE must be an object');
          if (
            void 0 === e10.protected &&
            void 0 === e10.header &&
            void 0 === e10.unprotected
          )
            throw new tM('JOSE Header missing');
          if (void 0 !== e10.iv && 'string' != typeof e10.iv)
            throw new tM('JWE Initialization Vector incorrect type');
          if ('string' != typeof e10.ciphertext)
            throw new tM('JWE Ciphertext missing or incorrect type');
          if (void 0 !== e10.tag && 'string' != typeof e10.tag)
            throw new tM('JWE Authentication Tag incorrect type');
          if (void 0 !== e10.protected && 'string' != typeof e10.protected)
            throw new tM('JWE Protected Header incorrect type');
          if (
            void 0 !== e10.encrypted_key &&
            'string' != typeof e10.encrypted_key
          )
            throw new tM('JWE Encrypted Key incorrect type');
          if (void 0 !== e10.aad && 'string' != typeof e10.aad)
            throw new tM('JWE AAD incorrect type');
          if (void 0 !== e10.header && !t2(e10.header))
            throw new tM('JWE Shared Unprotected Header incorrect type');
          if (void 0 !== e10.unprotected && !t2(e10.unprotected))
            throw new tM('JWE Per-Recipient Unprotected Header incorrect type');
          if (e10.protected)
            try {
              let t11 = tP(e10.protected);
              n10 = JSON.parse(tw.decode(t11));
            } catch {
              throw new tM('JWE Protected Header is invalid');
            }
          if (!t1(n10, e10.header, e10.unprotected))
            throw new tM(
              'JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint'
            );
          let u2 = { ...n10, ...e10.header, ...e10.unprotected };
          if (
            (r_(tM, /* @__PURE__ */ new Map(), r10?.crit, n10, u2),
            void 0 !== u2.zip)
          )
            throw new tU(
              'JWE "zip" (Compression Algorithm) Header Parameter is not supported.'
            );
          let { alg: d2, enc: p2 } = u2;
          if ('string' != typeof d2 || !d2)
            throw new tM('missing JWE Algorithm (alg) in JWE Header');
          if ('string' != typeof p2 || !p2)
            throw new tM(
              'missing JWE Encryption Algorithm (enc) in JWE Header'
            );
          let h2 =
              r10 && rS('keyManagementAlgorithms', r10.keyManagementAlgorithms),
            f2 =
              r10 &&
              rS(
                'contentEncryptionAlgorithms',
                r10.contentEncryptionAlgorithms
              );
          if ((h2 && !h2.has(d2)) || (!h2 && d2.startsWith('PBES2')))
            throw new tI(
              '"alg" (Algorithm) Header Parameter value not allowed'
            );
          if (f2 && !f2.has(p2))
            throw new tI(
              '"enc" (Encryption Algorithm) Header Parameter value not allowed'
            );
          if (void 0 !== e10.encrypted_key)
            try {
              i10 = tP(e10.encrypted_key);
            } catch {
              throw new tM('Failed to base64url decode the encrypted_key');
            }
          let g2 = false;
          'function' == typeof t10 &&
            ((t10 = await t10(n10, e10)), (g2 = true));
          try {
            o10 = await rv(d2, t10, i10, u2, r10);
          } catch (e11) {
            if (
              e11 instanceof TypeError ||
              e11 instanceof tM ||
              e11 instanceof tU
            )
              throw e11;
            o10 = rc(p2);
          }
          if (void 0 !== e10.iv)
            try {
              a2 = tP(e10.iv);
            } catch {
              throw new tM('Failed to base64url decode the iv');
            }
          if (void 0 !== e10.tag)
            try {
              s2 = tP(e10.tag);
            } catch {
              throw new tM('Failed to base64url decode the tag');
            }
          let m2 = ty.encode(e10.protected ?? '');
          l2 =
            void 0 !== e10.aad
              ? tb(m2, ty.encode('.'), ty.encode(e10.aad))
              : m2;
          try {
            c2 = tP(e10.ciphertext);
          } catch {
            throw new tM('Failed to base64url decode the ciphertext');
          }
          let y2 = { plaintext: await t0(p2, o10, c2, a2, s2, l2) };
          if (
            (void 0 !== e10.protected && (y2.protectedHeader = n10),
            void 0 !== e10.aad)
          )
            try {
              y2.additionalAuthenticatedData = tP(e10.aad);
            } catch {
              throw new tM('Failed to base64url decode the aad');
            }
          return (void 0 !== e10.unprotected &&
            (y2.sharedUnprotectedHeader = e10.unprotected),
          void 0 !== e10.header && (y2.unprotectedHeader = e10.header),
          g2)
            ? { ...y2, key: t10 }
            : y2;
        }
        async function rx(e10, t10, r10) {
          if (
            (e10 instanceof Uint8Array && (e10 = tw.decode(e10)),
            'string' != typeof e10)
          )
            throw new tM('Compact JWE must be a string or Uint8Array');
          let {
            0: n10,
            1: i10,
            2: o10,
            3: a2,
            4: s2,
            length: l2
          } = e10.split('.');
          if (5 !== l2) throw new tM('Invalid Compact JWE');
          let c2 = await rk(
              {
                ciphertext: a2,
                iv: o10 || void 0,
                protected: n10,
                tag: s2 || void 0,
                encrypted_key: i10 || void 0
              },
              t10,
              r10
            ),
            u2 = {
              plaintext: c2.plaintext,
              protectedHeader: c2.protectedHeader
            };
          return 'function' == typeof t10 ? { ...u2, key: c2.key } : u2;
        }
        let rE = async (e10) => {
          if (e10 instanceof Uint8Array) return { kty: 'oct', k: tA(e10) };
          if (!tg(e10)) throw TypeError(tz(e10, ...tY, 'Uint8Array'));
          if (!e10.extractable)
            throw TypeError(
              'non-extractable CryptoKey cannot be exported as a JWK'
            );
          let {
            ext: t10,
            key_ops: r10,
            alg: n10,
            use: i10,
            ...o10
          } = await tf.subtle.exportKey('jwk', e10);
          return o10;
        };
        async function rA(e10) {
          return rE(e10);
        }
        async function rT(e10, t10, r10, n10, i10 = {}) {
          let o10, a2, s2;
          switch ((rf(e10, r10, 'encrypt'), e10)) {
            case 'dir':
              s2 = r10;
              break;
            case 'ECDH-ES':
            case 'ECDH-ES+A128KW':
            case 'ECDH-ES+A192KW':
            case 'ECDH-ES+A256KW': {
              if (!re(r10))
                throw new tU(
                  'ECDH with the provided key is not allowed or not supported by your javascript runtime'
                );
              let { apu: l2, apv: c2 } = i10,
                { epk: u2 } = i10;
              u2 || (u2 = (await t7(r10)).privateKey);
              let { x: d2, y: p2, crv: h2, kty: f2 } = await rA(u2),
                g2 = await t9(
                  r10,
                  u2,
                  'ECDH-ES' === e10 ? t10 : e10,
                  'ECDH-ES' === e10 ? rl(t10) : parseInt(e10.slice(-5, -2), 10),
                  l2,
                  c2
                );
              if (
                ((a2 = { epk: { x: d2, crv: h2, kty: f2 } }),
                'EC' === f2 && (a2.epk.y = p2),
                l2 && (a2.apu = tA(l2)),
                c2 && (a2.apv = tA(c2)),
                'ECDH-ES' === e10)
              ) {
                s2 = g2;
                break;
              }
              s2 = n10 || rc(t10);
              let m2 = e10.slice(-6);
              o10 = await t4(m2, g2, s2);
              break;
            }
            case 'RSA1_5':
            case 'RSA-OAEP':
            case 'RSA-OAEP-256':
            case 'RSA-OAEP-384':
            case 'RSA-OAEP-512':
              (s2 = n10 || rc(t10)), (o10 = await ra(e10, r10, s2));
              break;
            case 'PBES2-HS256+A128KW':
            case 'PBES2-HS384+A192KW':
            case 'PBES2-HS512+A256KW': {
              s2 = n10 || rc(t10);
              let { p2c: l2, p2s: c2 } = i10;
              ({ encryptedKey: o10, ...a2 } = await rr(e10, r10, s2, l2, c2));
              break;
            }
            case 'A128KW':
            case 'A192KW':
            case 'A256KW':
              (s2 = n10 || rc(t10)), (o10 = await t4(e10, r10, s2));
              break;
            case 'A128GCMKW':
            case 'A192GCMKW':
            case 'A256GCMKW': {
              s2 = n10 || rc(t10);
              let { iv: l2 } = i10;
              ({ encryptedKey: o10, ...a2 } = await rw(e10, r10, s2, l2));
              break;
            }
            default:
              throw new tU(
                'Invalid or unsupported "alg" (JWE Algorithm) header value'
              );
          }
          return { cek: s2, encryptedKey: o10, parameters: a2 };
        }
        let rP = Symbol();
        class rC {
          constructor(e10) {
            if (!(e10 instanceof Uint8Array))
              throw TypeError('plaintext must be an instance of Uint8Array');
            this._plaintext = e10;
          }
          setKeyManagementParameters(e10) {
            if (this._keyManagementParameters)
              throw TypeError(
                'setKeyManagementParameters can only be called once'
              );
            return (this._keyManagementParameters = e10), this;
          }
          setProtectedHeader(e10) {
            if (this._protectedHeader)
              throw TypeError('setProtectedHeader can only be called once');
            return (this._protectedHeader = e10), this;
          }
          setSharedUnprotectedHeader(e10) {
            if (this._sharedUnprotectedHeader)
              throw TypeError(
                'setSharedUnprotectedHeader can only be called once'
              );
            return (this._sharedUnprotectedHeader = e10), this;
          }
          setUnprotectedHeader(e10) {
            if (this._unprotectedHeader)
              throw TypeError('setUnprotectedHeader can only be called once');
            return (this._unprotectedHeader = e10), this;
          }
          setAdditionalAuthenticatedData(e10) {
            return (this._aad = e10), this;
          }
          setContentEncryptionKey(e10) {
            if (this._cek)
              throw TypeError(
                'setContentEncryptionKey can only be called once'
              );
            return (this._cek = e10), this;
          }
          setInitializationVector(e10) {
            if (this._iv)
              throw TypeError(
                'setInitializationVector can only be called once'
              );
            return (this._iv = e10), this;
          }
          async encrypt(e10, t10) {
            let r10, n10, i10, o10, a2;
            if (
              !this._protectedHeader &&
              !this._unprotectedHeader &&
              !this._sharedUnprotectedHeader
            )
              throw new tM(
                'either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()'
              );
            if (
              !t1(
                this._protectedHeader,
                this._unprotectedHeader,
                this._sharedUnprotectedHeader
              )
            )
              throw new tM(
                'JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint'
              );
            let s2 = {
              ...this._protectedHeader,
              ...this._unprotectedHeader,
              ...this._sharedUnprotectedHeader
            };
            if (
              (r_(
                tM,
                /* @__PURE__ */ new Map(),
                t10?.crit,
                this._protectedHeader,
                s2
              ),
              void 0 !== s2.zip)
            )
              throw new tU(
                'JWE "zip" (Compression Algorithm) Header Parameter is not supported.'
              );
            let { alg: l2, enc: c2 } = s2;
            if ('string' != typeof l2 || !l2)
              throw new tM(
                'JWE "alg" (Algorithm) Header Parameter missing or invalid'
              );
            if ('string' != typeof c2 || !c2)
              throw new tM(
                'JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid'
              );
            if (this._cek && ('dir' === l2 || 'ECDH-ES' === l2))
              throw TypeError(
                `setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${l2}`
              );
            {
              let i11;
              ({
                cek: n10,
                encryptedKey: r10,
                parameters: i11
              } = await rT(
                l2,
                c2,
                e10,
                this._cek,
                this._keyManagementParameters
              )),
                i11 &&
                  (t10 && rP in t10
                    ? this._unprotectedHeader
                      ? (this._unprotectedHeader = {
                          ...this._unprotectedHeader,
                          ...i11
                        })
                      : this.setUnprotectedHeader(i11)
                    : this._protectedHeader
                    ? (this._protectedHeader = {
                        ...this._protectedHeader,
                        ...i11
                      })
                    : this.setProtectedHeader(i11));
            }
            (o10 = this._protectedHeader
              ? ty.encode(tA(JSON.stringify(this._protectedHeader)))
              : ty.encode('')),
              this._aad
                ? ((a2 = tA(this._aad)),
                  (i10 = tb(o10, ty.encode('.'), ty.encode(a2))))
                : (i10 = o10);
            let {
                ciphertext: u2,
                tag: d2,
                iv: p2
              } = await ry(c2, this._plaintext, n10, this._iv, i10),
              h2 = { ciphertext: tA(u2) };
            return (
              p2 && (h2.iv = tA(p2)),
              d2 && (h2.tag = tA(d2)),
              r10 && (h2.encrypted_key = tA(r10)),
              a2 && (h2.aad = a2),
              this._protectedHeader && (h2.protected = tw.decode(o10)),
              this._sharedUnprotectedHeader &&
                (h2.unprotected = this._sharedUnprotectedHeader),
              this._unprotectedHeader && (h2.header = this._unprotectedHeader),
              h2
            );
          }
        }
        let rR = (e10) => Math.floor(e10.getTime() / 1e3),
          rO =
            /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i,
          rI = (e10) => {
            let t10;
            let r10 = rO.exec(e10);
            if (!r10 || (r10[4] && r10[1]))
              throw TypeError('Invalid time period format');
            let n10 = parseFloat(r10[2]);
            switch (r10[3].toLowerCase()) {
              case 'sec':
              case 'secs':
              case 'second':
              case 'seconds':
              case 's':
                t10 = Math.round(n10);
                break;
              case 'minute':
              case 'minutes':
              case 'min':
              case 'mins':
              case 'm':
                t10 = Math.round(60 * n10);
                break;
              case 'hour':
              case 'hours':
              case 'hr':
              case 'hrs':
              case 'h':
                t10 = Math.round(3600 * n10);
                break;
              case 'day':
              case 'days':
              case 'd':
                t10 = Math.round(86400 * n10);
                break;
              case 'week':
              case 'weeks':
              case 'w':
                t10 = Math.round(604800 * n10);
                break;
              default:
                t10 = Math.round(31557600 * n10);
            }
            return '-' === r10[1] || 'ago' === r10[4] ? -t10 : t10;
          },
          rU = (e10) => e10.toLowerCase().replace(/^application\//, ''),
          rN = (e10, t10) =>
            'string' == typeof e10
              ? t10.includes(e10)
              : !!Array.isArray(e10) &&
                t10.some(Set.prototype.has.bind(new Set(e10))),
          rM = (e10, t10, r10 = {}) => {
            let n10, i10;
            let { typ: o10 } = r10;
            if (o10 && ('string' != typeof e10.typ || rU(e10.typ) !== rU(o10)))
              throw new tR(
                'unexpected "typ" JWT header value',
                'typ',
                'check_failed'
              );
            try {
              n10 = JSON.parse(tw.decode(t10));
            } catch {}
            if (!t2(n10))
              throw new tL('JWT Claims Set must be a top-level JSON object');
            let {
                requiredClaims: a2 = [],
                issuer: s2,
                subject: l2,
                audience: c2,
                maxTokenAge: u2
              } = r10,
              d2 = [...a2];
            for (let e11 of (void 0 !== u2 && d2.push('iat'),
            void 0 !== c2 && d2.push('aud'),
            void 0 !== l2 && d2.push('sub'),
            void 0 !== s2 && d2.push('iss'),
            new Set(d2.reverse())))
              if (!(e11 in n10))
                throw new tR(`missing required "${e11}" claim`, e11, 'missing');
            if (s2 && !(Array.isArray(s2) ? s2 : [s2]).includes(n10.iss))
              throw new tR(
                'unexpected "iss" claim value',
                'iss',
                'check_failed'
              );
            if (l2 && n10.sub !== l2)
              throw new tR(
                'unexpected "sub" claim value',
                'sub',
                'check_failed'
              );
            if (c2 && !rN(n10.aud, 'string' == typeof c2 ? [c2] : c2))
              throw new tR(
                'unexpected "aud" claim value',
                'aud',
                'check_failed'
              );
            switch (typeof r10.clockTolerance) {
              case 'string':
                i10 = rI(r10.clockTolerance);
                break;
              case 'number':
                i10 = r10.clockTolerance;
                break;
              case 'undefined':
                i10 = 0;
                break;
              default:
                throw TypeError('Invalid clockTolerance option type');
            }
            let { currentDate: p2 } = r10,
              h2 = rR(p2 || new Date());
            if ((void 0 !== n10.iat || u2) && 'number' != typeof n10.iat)
              throw new tR('"iat" claim must be a number', 'iat', 'invalid');
            if (void 0 !== n10.nbf) {
              if ('number' != typeof n10.nbf)
                throw new tR('"nbf" claim must be a number', 'nbf', 'invalid');
              if (n10.nbf > h2 + i10)
                throw new tR(
                  '"nbf" claim timestamp check failed',
                  'nbf',
                  'check_failed'
                );
            }
            if (void 0 !== n10.exp) {
              if ('number' != typeof n10.exp)
                throw new tR('"exp" claim must be a number', 'exp', 'invalid');
              if (n10.exp <= h2 - i10)
                throw new tO(
                  '"exp" claim timestamp check failed',
                  'exp',
                  'check_failed'
                );
            }
            if (u2) {
              let e11 = h2 - n10.iat;
              if (e11 - i10 > ('number' == typeof u2 ? u2 : rI(u2)))
                throw new tO(
                  '"iat" claim timestamp check failed (too far in the past)',
                  'iat',
                  'check_failed'
                );
              if (e11 < 0 - i10)
                throw new tR(
                  '"iat" claim timestamp check failed (it should be in the past)',
                  'iat',
                  'check_failed'
                );
            }
            return n10;
          };
        async function rL(e10, t10, r10) {
          let n10 = await rx(e10, t10, r10),
            i10 = rM(n10.protectedHeader, n10.plaintext, r10),
            { protectedHeader: o10 } = n10;
          if (void 0 !== o10.iss && o10.iss !== i10.iss)
            throw new tR(
              'replicated "iss" claim header parameter mismatch',
              'iss',
              'mismatch'
            );
          if (void 0 !== o10.sub && o10.sub !== i10.sub)
            throw new tR(
              'replicated "sub" claim header parameter mismatch',
              'sub',
              'mismatch'
            );
          if (
            void 0 !== o10.aud &&
            JSON.stringify(o10.aud) !== JSON.stringify(i10.aud)
          )
            throw new tR(
              'replicated "aud" claim header parameter mismatch',
              'aud',
              'mismatch'
            );
          let a2 = { payload: i10, protectedHeader: o10 };
          return 'function' == typeof t10 ? { ...a2, key: n10.key } : a2;
        }
        class rj {
          constructor(e10) {
            this._flattened = new rC(e10);
          }
          setContentEncryptionKey(e10) {
            return this._flattened.setContentEncryptionKey(e10), this;
          }
          setInitializationVector(e10) {
            return this._flattened.setInitializationVector(e10), this;
          }
          setProtectedHeader(e10) {
            return this._flattened.setProtectedHeader(e10), this;
          }
          setKeyManagementParameters(e10) {
            return this._flattened.setKeyManagementParameters(e10), this;
          }
          async encrypt(e10, t10) {
            let r10 = await this._flattened.encrypt(e10, t10);
            return [
              r10.protected,
              r10.encrypted_key,
              r10.iv,
              r10.ciphertext,
              r10.tag
            ].join('.');
          }
        }
        function r$(e10, t10) {
          if (!Number.isFinite(t10)) throw TypeError(`Invalid ${e10} input`);
          return t10;
        }
        class rD {
          constructor(e10 = {}) {
            if (!t2(e10)) throw TypeError('JWT Claims Set MUST be an object');
            this._payload = e10;
          }
          setIssuer(e10) {
            return (this._payload = { ...this._payload, iss: e10 }), this;
          }
          setSubject(e10) {
            return (this._payload = { ...this._payload, sub: e10 }), this;
          }
          setAudience(e10) {
            return (this._payload = { ...this._payload, aud: e10 }), this;
          }
          setJti(e10) {
            return (this._payload = { ...this._payload, jti: e10 }), this;
          }
          setNotBefore(e10) {
            return (
              'number' == typeof e10
                ? (this._payload = {
                    ...this._payload,
                    nbf: r$('setNotBefore', e10)
                  })
                : e10 instanceof Date
                ? (this._payload = {
                    ...this._payload,
                    nbf: r$('setNotBefore', rR(e10))
                  })
                : (this._payload = {
                    ...this._payload,
                    nbf: rR(new Date()) + rI(e10)
                  }),
              this
            );
          }
          setExpirationTime(e10) {
            return (
              'number' == typeof e10
                ? (this._payload = {
                    ...this._payload,
                    exp: r$('setExpirationTime', e10)
                  })
                : e10 instanceof Date
                ? (this._payload = {
                    ...this._payload,
                    exp: r$('setExpirationTime', rR(e10))
                  })
                : (this._payload = {
                    ...this._payload,
                    exp: rR(new Date()) + rI(e10)
                  }),
              this
            );
          }
          setIssuedAt(e10) {
            return (
              void 0 === e10
                ? (this._payload = { ...this._payload, iat: rR(new Date()) })
                : e10 instanceof Date
                ? (this._payload = {
                    ...this._payload,
                    iat: r$('setIssuedAt', rR(e10))
                  })
                : 'string' == typeof e10
                ? (this._payload = {
                    ...this._payload,
                    iat: r$('setIssuedAt', rR(new Date()) + rI(e10))
                  })
                : (this._payload = {
                    ...this._payload,
                    iat: r$('setIssuedAt', e10)
                  }),
              this
            );
          }
        }
        class rH extends rD {
          setProtectedHeader(e10) {
            if (this._protectedHeader)
              throw TypeError('setProtectedHeader can only be called once');
            return (this._protectedHeader = e10), this;
          }
          setKeyManagementParameters(e10) {
            if (this._keyManagementParameters)
              throw TypeError(
                'setKeyManagementParameters can only be called once'
              );
            return (this._keyManagementParameters = e10), this;
          }
          setContentEncryptionKey(e10) {
            if (this._cek)
              throw TypeError(
                'setContentEncryptionKey can only be called once'
              );
            return (this._cek = e10), this;
          }
          setInitializationVector(e10) {
            if (this._iv)
              throw TypeError(
                'setInitializationVector can only be called once'
              );
            return (this._iv = e10), this;
          }
          replicateIssuerAsHeader() {
            return (this._replicateIssuerAsHeader = true), this;
          }
          replicateSubjectAsHeader() {
            return (this._replicateSubjectAsHeader = true), this;
          }
          replicateAudienceAsHeader() {
            return (this._replicateAudienceAsHeader = true), this;
          }
          async encrypt(e10, t10) {
            let r10 = new rj(ty.encode(JSON.stringify(this._payload)));
            return (
              this._replicateIssuerAsHeader &&
                (this._protectedHeader = {
                  ...this._protectedHeader,
                  iss: this._payload.iss
                }),
              this._replicateSubjectAsHeader &&
                (this._protectedHeader = {
                  ...this._protectedHeader,
                  sub: this._payload.sub
                }),
              this._replicateAudienceAsHeader &&
                (this._protectedHeader = {
                  ...this._protectedHeader,
                  aud: this._payload.aud
                }),
              r10.setProtectedHeader(this._protectedHeader),
              this._iv && r10.setInitializationVector(this._iv),
              this._cek && r10.setContentEncryptionKey(this._cek),
              this._keyManagementParameters &&
                r10.setKeyManagementParameters(this._keyManagementParameters),
              r10.encrypt(e10, t10)
            );
          }
        }
        let rW = (e10, t10) => {
          if ('string' != typeof e10 || !e10)
            throw new tj(`${t10} missing or invalid`);
        };
        async function rK(e10, t10) {
          let r10;
          if (!t2(e10)) throw TypeError('JWK must be an object');
          if (
            (t10 ?? (t10 = 'sha256'),
            'sha256' !== t10 && 'sha384' !== t10 && 'sha512' !== t10)
          )
            throw TypeError(
              'digestAlgorithm must one of "sha256", "sha384", or "sha512"'
            );
          switch (e10.kty) {
            case 'EC':
              rW(e10.crv, '"crv" (Curve) Parameter'),
                rW(e10.x, '"x" (X Coordinate) Parameter'),
                rW(e10.y, '"y" (Y Coordinate) Parameter'),
                (r10 = { crv: e10.crv, kty: e10.kty, x: e10.x, y: e10.y });
              break;
            case 'OKP':
              rW(e10.crv, '"crv" (Subtype of Key Pair) Parameter'),
                rW(e10.x, '"x" (Public Key) Parameter'),
                (r10 = { crv: e10.crv, kty: e10.kty, x: e10.x });
              break;
            case 'RSA':
              rW(e10.e, '"e" (Exponent) Parameter'),
                rW(e10.n, '"n" (Modulus) Parameter'),
                (r10 = { e: e10.e, kty: e10.kty, n: e10.n });
              break;
            case 'oct':
              rW(e10.k, '"k" (Key Value) Parameter'),
                (r10 = { k: e10.k, kty: e10.kty });
              break;
            default:
              throw new tU('"kty" (Key Type) Parameter missing or unsupported');
          }
          let n10 = ty.encode(JSON.stringify(r10));
          return tA(await tm(t10, n10));
        }
        'undefined' != typeof navigator &&
          navigator.userAgent?.startsWith?.('Mozilla/5.0 ');
        var rB = r(21471);
        let rV = () => (Date.now() / 1e3) | 0,
          rq = 'A256CBC-HS512';
        async function rJ(e10) {
          let {
              token: t10 = {},
              secret: r10,
              maxAge: n10 = 2592e3,
              salt: i10
            } = e10,
            o10 = Array.isArray(r10) ? r10 : [r10],
            a2 = await rz(rq, o10[0], i10),
            s2 = await rK(
              { kty: 'oct', k: tA(a2) },
              `sha${a2.byteLength << 3}`
            );
          return await new rH(t10)
            .setProtectedHeader({ alg: 'dir', enc: rq, kid: s2 })
            .setIssuedAt()
            .setExpirationTime(rV() + n10)
            .setJti(crypto.randomUUID())
            .encrypt(a2);
        }
        async function rF(e10) {
          let { token: t10, secret: r10, salt: n10 } = e10,
            i10 = Array.isArray(r10) ? r10 : [r10];
          if (!t10) return null;
          let { payload: o10 } = await rL(
            t10,
            async ({ kid: e11, enc: t11 }) => {
              for (let r11 of i10) {
                let i11 = await rz(t11, r11, n10);
                if (
                  void 0 === e11 ||
                  e11 ===
                    (await rK(
                      { kty: 'oct', k: tA(i11) },
                      `sha${i11.byteLength << 3}`
                    ))
                )
                  return i11;
              }
              throw Error('no matching decryption secret');
            },
            {
              clockTolerance: 15,
              keyManagementAlgorithms: ['dir'],
              contentEncryptionAlgorithms: [rq, 'A256GCM']
            }
          );
          return o10;
        }
        async function rz(e10, t10, r10) {
          let n10;
          switch (e10) {
            case 'A256CBC-HS512':
              n10 = 64;
              break;
            case 'A256GCM':
              n10 = 32;
              break;
            default:
              throw Error('Unsupported JWT Content Encryption Algorithm');
          }
          return await th(
            'sha256',
            t10,
            r10,
            `Auth.js Generated Encryption Key (${r10})`,
            n10
          );
        }
        async function rG({ options: e10, paramValue: t10, cookieValue: r10 }) {
          let { url: n10, callbacks: i10 } = e10,
            o10 = n10.origin;
          return (
            t10
              ? (o10 = await i10.redirect({ url: t10, baseUrl: n10.origin }))
              : r10 &&
                (o10 = await i10.redirect({ url: r10, baseUrl: n10.origin })),
            { callbackUrl: o10, callbackUrlCookie: o10 !== r10 ? o10 : void 0 }
          );
        }
        let rX = '\x1B[31m',
          rY = '\x1B[0m',
          rZ = {
            error(e10) {
              let t10 = e10 instanceof eO ? e10.type : e10.name;
              if (
                (console.error(
                  `${rX}[auth][error]${rY} ${t10}: ${e10.message}`
                ),
                e10.cause &&
                  'object' == typeof e10.cause &&
                  'err' in e10.cause &&
                  e10.cause.err instanceof Error)
              ) {
                let { err: t11, ...r10 } = e10.cause;
                console.error(`${rX}[auth][cause]${rY}:`, t11.stack),
                  r10 &&
                    console.error(
                      `${rX}[auth][details]${rY}:`,
                      JSON.stringify(r10, null, 2)
                    );
              } else
                e10.stack &&
                  console.error(e10.stack.replace(/.*/, '').substring(1));
            },
            warn(e10) {
              let t10 = `https://warnings.authjs.dev#${e10}`;
              console.warn(
                `\x1B[33m[auth][warn][${e10}]${rY}`,
                `Read more: ${t10}`
              );
            },
            debug(e10, t10) {
              console.log(
                `\x1B[90m[auth][debug]:${rY} ${e10}`,
                JSON.stringify(t10, null, 2)
              );
            }
          },
          rQ = [
            'providers',
            'session',
            'csrf',
            'signin',
            'signout',
            'callback',
            'verify-request',
            'error',
            'webauthn-options'
          ];
        async function r0(e10) {
          if (!('body' in e10) || !e10.body || 'POST' !== e10.method) return;
          let t10 = e10.headers.get('content-type');
          return t10?.includes('application/json')
            ? await e10.json()
            : t10?.includes('application/x-www-form-urlencoded')
            ? Object.fromEntries(new URLSearchParams(await e10.text()))
            : void 0;
        }
        async function r1(e10, t10) {
          try {
            if ('GET' !== e10.method && 'POST' !== e10.method)
              throw new e0('Only GET and POST requests are supported.');
            t10.basePath ?? (t10.basePath = '/auth');
            let r10 = new URL(e10.url),
              { action: n10, providerId: i10 } = (function (e11, t11) {
                let r11 = e11.match(RegExp(`^${t11}(.+)`));
                if (null === r11) throw new e0(`Cannot parse action at ${e11}`);
                let n11 = r11
                  .at(-1)
                  .replace(/^\//, '')
                  .split('/')
                  .filter(Boolean);
                if (1 !== n11.length && 2 !== n11.length)
                  throw new e0(`Cannot parse action at ${e11}`);
                let [i11, o10] = n11;
                if (
                  !rQ.includes(i11) ||
                  (o10 &&
                    !['signin', 'callback', 'webauthn-options'].includes(i11))
                )
                  throw new e0(`Cannot parse action at ${e11}`);
                return { action: i11, providerId: o10 };
              })(r10.pathname, t10.basePath);
            return {
              url: r10,
              action: n10,
              providerId: i10,
              method: e10.method,
              headers: Object.fromEntries(e10.headers),
              body: e10.body ? await r0(e10) : void 0,
              cookies: (0, rB.Q)(e10.headers.get('cookie') ?? '') ?? {},
              error: r10.searchParams.get('error') ?? void 0,
              query: Object.fromEntries(r10.searchParams)
            };
          } catch (t11) {
            rZ.error(t11), rZ.debug('request', e10);
          }
        }
        function r2(e10) {
          let t10 = new Headers(e10.headers);
          e10.cookies?.forEach((e11) => {
            let { name: r11, value: n11, options: i10 } = e11,
              o10 = rB.q(r11, n11, i10);
            t10.has('Set-Cookie')
              ? t10.append('Set-Cookie', o10)
              : t10.set('Set-Cookie', o10);
          });
          let r10 = e10.body;
          'application/json' === t10.get('content-type')
            ? (r10 = JSON.stringify(e10.body))
            : 'application/x-www-form-urlencoded' === t10.get('content-type') &&
              (r10 = new URLSearchParams(e10.body).toString());
          let n10 = new Response(r10, {
            headers: t10,
            status: e10.redirect ? 302 : e10.status ?? 200
          });
          return e10.redirect && n10.headers.set('Location', e10.redirect), n10;
        }
        async function r3(e10) {
          let t10 = new TextEncoder().encode(e10);
          return Array.from(
            new Uint8Array(await crypto.subtle.digest('SHA-256', t10))
          )
            .map((e11) => e11.toString(16).padStart(2, '0'))
            .join('')
            .toString();
        }
        function r5(e10) {
          let t10 = (e11) => ('0' + e11.toString(16)).slice(-2);
          return Array.from(crypto.getRandomValues(new Uint8Array(e10))).reduce(
            (e11, r10) => e11 + t10(r10),
            ''
          );
        }
        async function r6({
          options: e10,
          cookieValue: t10,
          isPost: r10,
          bodyValue: n10
        }) {
          if (t10) {
            let [i11, o11] = t10.split('|');
            if (o11 === (await r3(`${i11}${e10.secret}`)))
              return { csrfTokenVerified: r10 && i11 === n10, csrfToken: i11 };
          }
          let i10 = r5(32),
            o10 = await r3(`${i10}${e10.secret}`);
          return { cookie: `${i10}|${o10}`, csrfToken: i10 };
        }
        function r4(e10, t10) {
          if (!t10)
            throw new e6(`CSRF token was missing during an action ${e10}`);
        }
        function r8(e10) {
          return e10 && 'object' == typeof e10 && !Array.isArray(e10);
        }
        function r9(e10, ...t10) {
          if (!t10.length) return e10;
          let r10 = t10.shift();
          if (r8(e10) && r8(r10))
            for (let t11 in r10)
              r8(r10[t11])
                ? (e10[t11] || Object.assign(e10, { [t11]: {} }),
                  r9(e10[t11], r10[t11]))
                : Object.assign(e10, { [t11]: r10[t11] });
          return r9(e10, ...t10);
        }
        let r7 = (e10) =>
            nt({
              id: e10.sub ?? e10.id ?? crypto.randomUUID(),
              name: e10.name ?? e10.nickname ?? e10.preferred_username,
              email: e10.email,
              image: e10.picture
            }),
          ne = (e10) =>
            nt({
              access_token: e10.access_token,
              id_token: e10.id_token,
              refresh_token: e10.refresh_token,
              expires_at: e10.expires_at,
              scope: e10.scope,
              token_type: e10.token_type,
              session_state: e10.session_state
            });
        function nt(e10) {
          let t10 = {};
          for (let [r10, n10] of Object.entries(e10))
            void 0 !== n10 && (t10[r10] = n10);
          return t10;
        }
        function nr(e10, t10) {
          if (!e10 && t10) return;
          if ('string' == typeof e10) return { url: new URL(e10) };
          let r10 = new URL(e10?.url ?? 'https://authjs.dev');
          if (e10?.params != null)
            for (let [t11, n10] of Object.entries(e10.params))
              'claims' === t11 && (n10 = JSON.stringify(n10)),
                r10.searchParams.set(t11, String(n10));
          return { url: r10, request: e10?.request, conform: e10?.conform };
        }
        let nn = {
          signIn: () => true,
          redirect: ({ url: e10, baseUrl: t10 }) =>
            e10.startsWith('/')
              ? `${t10}${e10}`
              : new URL(e10).origin === t10
              ? e10
              : t10,
          session: ({ session: e10 }) => ({
            user: {
              name: e10.user?.name,
              email: e10.user?.email,
              image: e10.user?.image
            },
            expires: e10.expires?.toISOString?.() ?? e10.expires
          }),
          jwt: ({ token: e10 }) => e10
        };
        async function ni({
          authOptions: e10,
          providerId: t10,
          action: r10,
          url: n10,
          cookies: i10,
          callbackUrl: o10,
          csrfToken: a2,
          csrfDisabled: s2,
          isPost: l2
        }) {
          var c2;
          let { providers: u2, provider: d2 } = (function (e11) {
              let { providerId: t11, options: r11 } = e11,
                n11 = new URL(r11.basePath ?? '/auth', e11.url.origin),
                i11 = e11.providers.map((e12) => {
                  let t12 = 'function' == typeof e12 ? e12() : e12,
                    { options: i12, ...o11 } = t12,
                    a3 = i12?.id ?? o11.id,
                    s3 = r9(o11, i12, {
                      signinUrl: `${n11}/signin/${a3}`,
                      callbackUrl: `${n11}/callback/${a3}`
                    });
                  return 'oauth' === t12.type || 'oidc' === t12.type
                    ? (s3.redirectProxyUrl ??
                        (s3.redirectProxyUrl = r11.redirectProxyUrl),
                      (function (e13) {
                        e13.issuer &&
                          (e13.wellKnown ??
                            (e13.wellKnown = `${e13.issuer}/.well-known/openid-configuration`));
                        let t13 = nr(e13.authorization, e13.issuer);
                        t13 &&
                          !t13.url?.searchParams.has('scope') &&
                          t13.url.searchParams.set(
                            'scope',
                            'openid profile email'
                          );
                        let r12 = nr(e13.token, e13.issuer),
                          n12 = nr(e13.userinfo, e13.issuer),
                          i13 = e13.checks ?? ['pkce'];
                        return (
                          e13.redirectProxyUrl &&
                            (i13.includes('state') || i13.push('state'),
                            (e13.redirectProxyUrl = `${e13.redirectProxyUrl}/callback/${e13.id}`)),
                          {
                            ...e13,
                            authorization: t13,
                            token: r12,
                            checks: i13,
                            userinfo: n12,
                            profile: e13.profile ?? r7,
                            account: e13.account ?? ne
                          }
                        );
                      })(s3))
                    : s3;
                });
              return {
                providers: i11,
                provider: i11.find(({ id: e12 }) => e12 === t11)
              };
            })({
              providers: e10.providers,
              url: n10,
              providerId: t10,
              options: e10
            }),
            p2 = false;
          if (
            (d2?.type === 'oauth' || d2?.type === 'oidc') &&
            d2.redirectProxyUrl
          )
            try {
              p2 = new URL(d2.redirectProxyUrl).origin === n10.origin;
            } catch {
              throw TypeError(
                `redirectProxyUrl must be a valid URL. Received: ${d2.redirectProxyUrl}`
              );
            }
          let h2 = {
              debug: false,
              pages: {},
              theme: {
                colorScheme: 'auto',
                logo: '',
                brandColor: '',
                buttonText: ''
              },
              ...e10,
              url: n10,
              action: r10,
              provider: d2,
              cookies: r9(
                eC(e10.useSecureCookies ?? 'https:' === n10.protocol),
                e10.cookies
              ),
              providers: u2,
              session: {
                strategy: e10.adapter ? 'database' : 'jwt',
                maxAge: 2592e3,
                updateAge: 86400,
                generateSessionToken: () => crypto.randomUUID(),
                ...e10.session
              },
              jwt: {
                secret: e10.secret,
                maxAge: e10.session?.maxAge ?? 2592e3,
                encode: rJ,
                decode: rF,
                ...e10.jwt
              },
              events: Object.keys((c2 = e10.events ?? {})).reduce(
                (e11, t11) => (
                  (e11[t11] = async (...e12) => {
                    try {
                      let r11 = c2[t11];
                      return await r11(...e12);
                    } catch (e13) {
                      rZ.error(new ej(e13));
                    }
                  }),
                  e11
                ),
                {}
              ),
              adapter: (function (e11, t11) {
                if (e11)
                  return Object.keys(e11).reduce(
                    (r11, n11) => (
                      (r11[n11] = async (...r12) => {
                        try {
                          t11.debug(`adapter_${n11}`, { args: r12 });
                          let i11 = e11[n11];
                          return await i11(...r12);
                        } catch (r13) {
                          let e12 = new eU(r13);
                          throw (t11.error(e12), e12);
                        }
                      }),
                      r11
                    ),
                    {}
                  );
              })(e10.adapter, rZ),
              callbacks: { ...nn, ...e10.callbacks },
              logger: rZ,
              callbackUrl: n10.origin,
              isOnRedirectProxy: p2,
              experimental: { ...e10.experimental }
            },
            f2 = [];
          if (s2) h2.csrfTokenVerified = true;
          else {
            let {
              csrfToken: e11,
              cookie: t11,
              csrfTokenVerified: r11
            } = await r6({
              options: h2,
              cookieValue: i10?.[h2.cookies.csrfToken.name],
              isPost: l2,
              bodyValue: a2
            });
            (h2.csrfToken = e11),
              (h2.csrfTokenVerified = r11),
              t11 &&
                f2.push({
                  name: h2.cookies.csrfToken.name,
                  value: t11,
                  options: h2.cookies.csrfToken.options
                });
          }
          let { callbackUrl: g2, callbackUrlCookie: m2 } = await rG({
            options: h2,
            cookieValue: i10?.[h2.cookies.callbackUrl.name],
            paramValue: o10
          });
          return (
            (h2.callbackUrl = g2),
            m2 &&
              f2.push({
                name: h2.cookies.callbackUrl.name,
                value: m2,
                options: h2.cookies.callbackUrl.options
              }),
            { options: h2, cookies: f2 }
          );
        }
        var no,
          na,
          ns,
          nl,
          nc,
          nu,
          nd,
          np,
          nh,
          nf,
          ng,
          nm,
          ny,
          nw,
          nb,
          nv,
          n_,
          nS,
          nk,
          nx,
          nE,
          nA,
          nT,
          nP = {},
          nC = [],
          nR =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
        function nO(e10, t10) {
          for (var r10 in t10) e10[r10] = t10[r10];
          return e10;
        }
        function nI(e10) {
          var t10 = e10.parentNode;
          t10 && t10.removeChild(e10);
        }
        function nU(e10, t10, r10, n10, i10) {
          var o10 = {
            type: e10,
            props: t10,
            key: r10,
            ref: n10,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == i10 ? ++nE : i10
          };
          return null == i10 && null != nx.vnode && nx.vnode(o10), o10;
        }
        function nN(e10) {
          return e10.children;
        }
        function nM(e10, t10) {
          (this.props = e10), (this.context = t10);
        }
        function nL(e10, t10) {
          if (null == t10)
            return e10.__ ? nL(e10.__, e10.__.__k.indexOf(e10) + 1) : null;
          for (var r10; t10 < e10.__k.length; t10++)
            if (null != (r10 = e10.__k[t10]) && null != r10.__e) return r10.__e;
          return 'function' == typeof e10.type ? nL(e10) : null;
        }
        function nj(e10) {
          ((!e10.__d && (e10.__d = true) && nA.push(e10) && !n$.__r++) ||
            nT !== nx.debounceRendering) &&
            ((nT = nx.debounceRendering) || setTimeout)(n$);
        }
        function n$() {
          for (var e10; (n$.__r = nA.length); )
            (e10 = nA.sort(function (e11, t10) {
              return e11.__v.__b - t10.__v.__b;
            })),
              (nA = []),
              e10.some(function (e11) {
                var t10, r10, n10, i10, o10;
                e11.__d &&
                  ((i10 = (n10 = e11.__v).__e),
                  (o10 = e11.__P) &&
                    ((t10 = []),
                    ((r10 = nO({}, n10)).__v = n10.__v + 1),
                    nq(
                      o10,
                      n10,
                      r10,
                      e11.__n,
                      void 0 !== o10.ownerSVGElement,
                      null != n10.__h ? [i10] : null,
                      t10,
                      null == i10 ? nL(n10) : i10,
                      n10.__h
                    ),
                    nJ(t10, n10),
                    n10.__e != i10 &&
                      (function e12(t11) {
                        var r11, n11;
                        if (null != (t11 = t11.__) && null != t11.__c) {
                          for (
                            t11.__e = t11.__c.base = null, r11 = 0;
                            r11 < t11.__k.length;
                            r11++
                          )
                            if (
                              null != (n11 = t11.__k[r11]) &&
                              null != n11.__e
                            ) {
                              t11.__e = t11.__c.base = n11.__e;
                              break;
                            }
                          return e12(t11);
                        }
                      })(n10)));
              });
        }
        function nD(e10, t10, r10, n10, i10, o10, a2, s2, l2, c2) {
          var u2,
            d2,
            p2,
            h2,
            f2,
            g2,
            m2,
            y2 = (n10 && n10.__k) || nC,
            w2 = y2.length;
          for (r10.__k = [], u2 = 0; u2 < t10.length; u2++)
            if (
              null !=
              (h2 = r10.__k[u2] =
                null == (h2 = t10[u2]) || 'boolean' == typeof h2
                  ? null
                  : 'string' == typeof h2 ||
                    'number' == typeof h2 ||
                    'bigint' == typeof h2
                  ? nU(null, h2, null, null, h2)
                  : Array.isArray(h2)
                  ? nU(nN, { children: h2 }, null, null, null)
                  : h2.__b > 0
                  ? nU(
                      h2.type,
                      h2.props,
                      h2.key,
                      h2.ref ? h2.ref : null,
                      h2.__v
                    )
                  : h2)
            ) {
              if (
                ((h2.__ = r10),
                (h2.__b = r10.__b + 1),
                null === (p2 = y2[u2]) ||
                  (p2 && h2.key == p2.key && h2.type === p2.type))
              )
                y2[u2] = void 0;
              else
                for (d2 = 0; d2 < w2; d2++) {
                  if (
                    (p2 = y2[d2]) &&
                    h2.key == p2.key &&
                    h2.type === p2.type
                  ) {
                    y2[d2] = void 0;
                    break;
                  }
                  p2 = null;
                }
              nq(e10, h2, (p2 = p2 || nP), i10, o10, a2, s2, l2, c2),
                (f2 = h2.__e),
                (d2 = h2.ref) &&
                  p2.ref != d2 &&
                  (m2 || (m2 = []),
                  p2.ref && m2.push(p2.ref, null, h2),
                  m2.push(d2, h2.__c || f2, h2)),
                null != f2
                  ? (null == g2 && (g2 = f2),
                    'function' == typeof h2.type && h2.__k === p2.__k
                      ? (h2.__d = l2 =
                          (function e11(t11, r11, n11) {
                            for (
                              var i11, o11 = t11.__k, a3 = 0;
                              o11 && a3 < o11.length;
                              a3++
                            )
                              (i11 = o11[a3]) &&
                                ((i11.__ = t11),
                                (r11 =
                                  'function' == typeof i11.type
                                    ? e11(i11, r11, n11)
                                    : nH(n11, i11, i11, o11, i11.__e, r11)));
                            return r11;
                          })(h2, l2, e10))
                      : (l2 = nH(e10, h2, p2, y2, f2, l2)),
                    'function' == typeof r10.type && (r10.__d = l2))
                  : l2 && p2.__e == l2 && l2.parentNode != e10 && (l2 = nL(p2));
            }
          for (r10.__e = g2, u2 = w2; u2--; )
            null != y2[u2] &&
              (function e11(t11, r11, n11) {
                var i11, o11;
                if (
                  (nx.unmount && nx.unmount(t11),
                  (i11 = t11.ref) &&
                    ((i11.current && i11.current !== t11.__e) ||
                      nF(i11, null, r11)),
                  null != (i11 = t11.__c))
                ) {
                  if (i11.componentWillUnmount)
                    try {
                      i11.componentWillUnmount();
                    } catch (e12) {
                      nx.__e(e12, r11);
                    }
                  (i11.base = i11.__P = null), (t11.__c = void 0);
                }
                if ((i11 = t11.__k))
                  for (o11 = 0; o11 < i11.length; o11++)
                    i11[o11] &&
                      e11(i11[o11], r11, n11 || 'function' != typeof t11.type);
                n11 || null == t11.__e || nI(t11.__e),
                  (t11.__ = t11.__e = t11.__d = void 0);
              })(y2[u2], y2[u2]);
          if (m2)
            for (u2 = 0; u2 < m2.length; u2++) nF(m2[u2], m2[++u2], m2[++u2]);
        }
        function nH(e10, t10, r10, n10, i10, o10) {
          var a2, s2, l2;
          if (void 0 !== t10.__d) (a2 = t10.__d), (t10.__d = void 0);
          else if (null == r10 || i10 != o10 || null == i10.parentNode)
            e: if (null == o10 || o10.parentNode !== e10)
              e10.appendChild(i10), (a2 = null);
            else {
              for (
                s2 = o10, l2 = 0;
                (s2 = s2.nextSibling) && l2 < n10.length;
                l2 += 1
              )
                if (s2 == i10) break e;
              e10.insertBefore(i10, o10), (a2 = o10);
            }
          return void 0 !== a2 ? a2 : i10.nextSibling;
        }
        function nW(e10, t10, r10) {
          '-' === t10[0]
            ? e10.setProperty(t10, r10)
            : (e10[t10] =
                null == r10
                  ? ''
                  : 'number' != typeof r10 || nR.test(t10)
                  ? r10
                  : r10 + 'px');
        }
        function nK(e10, t10, r10, n10, i10) {
          var o10;
          e: if ('style' === t10) {
            if ('string' == typeof r10) e10.style.cssText = r10;
            else {
              if (
                ('string' == typeof n10 && (e10.style.cssText = n10 = ''), n10)
              )
                for (t10 in n10) (r10 && t10 in r10) || nW(e10.style, t10, '');
              if (r10)
                for (t10 in r10)
                  (n10 && r10[t10] === n10[t10]) ||
                    nW(e10.style, t10, r10[t10]);
            }
          } else if ('o' === t10[0] && 'n' === t10[1])
            (o10 = t10 !== (t10 = t10.replace(/Capture$/, ''))),
              (t10 =
                t10.toLowerCase() in e10
                  ? t10.toLowerCase().slice(2)
                  : t10.slice(2)),
              e10.l || (e10.l = {}),
              (e10.l[t10 + o10] = r10),
              r10
                ? n10 || e10.addEventListener(t10, o10 ? nV : nB, o10)
                : e10.removeEventListener(t10, o10 ? nV : nB, o10);
          else if ('dangerouslySetInnerHTML' !== t10) {
            if (i10)
              t10 = t10.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
            else if (
              'href' !== t10 &&
              'list' !== t10 &&
              'form' !== t10 &&
              'tabIndex' !== t10 &&
              'download' !== t10 &&
              t10 in e10
            )
              try {
                e10[t10] = null == r10 ? '' : r10;
                break e;
              } catch (e11) {}
            'function' == typeof r10 ||
              (null == r10 || (false === r10 && -1 == t10.indexOf('-'))
                ? e10.removeAttribute(t10)
                : e10.setAttribute(t10, r10));
          }
        }
        function nB(e10) {
          this.l[e10.type + false](nx.event ? nx.event(e10) : e10);
        }
        function nV(e10) {
          this.l[e10.type + true](nx.event ? nx.event(e10) : e10);
        }
        function nq(e10, t10, r10, n10, i10, o10, a2, s2, l2) {
          var c2,
            u2,
            d2,
            p2,
            h2,
            f2,
            g2,
            m2,
            y2,
            w2,
            b2,
            v2,
            _2,
            S2,
            k2,
            x2 = t10.type;
          if (void 0 !== t10.constructor) return null;
          null != r10.__h &&
            ((l2 = r10.__h),
            (s2 = t10.__e = r10.__e),
            (t10.__h = null),
            (o10 = [s2])),
            (c2 = nx.__b) && c2(t10);
          try {
            e: if ('function' == typeof x2) {
              if (
                ((m2 = t10.props),
                (y2 = (c2 = x2.contextType) && n10[c2.__c]),
                (w2 = c2 ? (y2 ? y2.props.value : c2.__) : n10),
                r10.__c
                  ? (g2 = (u2 = t10.__c = r10.__c).__ = u2.__E)
                  : ('prototype' in x2 && x2.prototype.render
                      ? (t10.__c = u2 = new x2(m2, w2))
                      : ((t10.__c = u2 = new nM(m2, w2)),
                        (u2.constructor = x2),
                        (u2.render = nz)),
                    y2 && y2.sub(u2),
                    (u2.props = m2),
                    u2.state || (u2.state = {}),
                    (u2.context = w2),
                    (u2.__n = n10),
                    (d2 = u2.__d = true),
                    (u2.__h = []),
                    (u2._sb = [])),
                null == u2.__s && (u2.__s = u2.state),
                null != x2.getDerivedStateFromProps &&
                  (u2.__s == u2.state && (u2.__s = nO({}, u2.__s)),
                  nO(u2.__s, x2.getDerivedStateFromProps(m2, u2.__s))),
                (p2 = u2.props),
                (h2 = u2.state),
                d2)
              )
                null == x2.getDerivedStateFromProps &&
                  null != u2.componentWillMount &&
                  u2.componentWillMount(),
                  null != u2.componentDidMount &&
                    u2.__h.push(u2.componentDidMount);
              else {
                if (
                  (null == x2.getDerivedStateFromProps &&
                    m2 !== p2 &&
                    null != u2.componentWillReceiveProps &&
                    u2.componentWillReceiveProps(m2, w2),
                  (!u2.__e &&
                    null != u2.shouldComponentUpdate &&
                    false === u2.shouldComponentUpdate(m2, u2.__s, w2)) ||
                    t10.__v === r10.__v)
                ) {
                  for (
                    u2.props = m2,
                      u2.state = u2.__s,
                      t10.__v !== r10.__v && (u2.__d = false),
                      u2.__v = t10,
                      t10.__e = r10.__e,
                      t10.__k = r10.__k,
                      t10.__k.forEach(function (e11) {
                        e11 && (e11.__ = t10);
                      }),
                      b2 = 0;
                    b2 < u2._sb.length;
                    b2++
                  )
                    u2.__h.push(u2._sb[b2]);
                  (u2._sb = []), u2.__h.length && a2.push(u2);
                  break e;
                }
                null != u2.componentWillUpdate &&
                  u2.componentWillUpdate(m2, u2.__s, w2),
                  null != u2.componentDidUpdate &&
                    u2.__h.push(function () {
                      u2.componentDidUpdate(p2, h2, f2);
                    });
              }
              if (
                ((u2.context = w2),
                (u2.props = m2),
                (u2.__v = t10),
                (u2.__P = e10),
                (v2 = nx.__r),
                (_2 = 0),
                'prototype' in x2 && x2.prototype.render)
              ) {
                for (
                  u2.state = u2.__s,
                    u2.__d = false,
                    v2 && v2(t10),
                    c2 = u2.render(u2.props, u2.state, u2.context),
                    S2 = 0;
                  S2 < u2._sb.length;
                  S2++
                )
                  u2.__h.push(u2._sb[S2]);
                u2._sb = [];
              } else
                do
                  (u2.__d = false),
                    v2 && v2(t10),
                    (c2 = u2.render(u2.props, u2.state, u2.context)),
                    (u2.state = u2.__s);
                while (u2.__d && ++_2 < 25);
              (u2.state = u2.__s),
                null != u2.getChildContext &&
                  (n10 = nO(nO({}, n10), u2.getChildContext())),
                d2 ||
                  null == u2.getSnapshotBeforeUpdate ||
                  (f2 = u2.getSnapshotBeforeUpdate(p2, h2)),
                (k2 =
                  null != c2 && c2.type === nN && null == c2.key
                    ? c2.props.children
                    : c2),
                nD(
                  e10,
                  Array.isArray(k2) ? k2 : [k2],
                  t10,
                  r10,
                  n10,
                  i10,
                  o10,
                  a2,
                  s2,
                  l2
                ),
                (u2.base = t10.__e),
                (t10.__h = null),
                u2.__h.length && a2.push(u2),
                g2 && (u2.__E = u2.__ = null),
                (u2.__e = false);
            } else
              null == o10 && t10.__v === r10.__v
                ? ((t10.__k = r10.__k), (t10.__e = r10.__e))
                : (t10.__e = (function (e11, t11, r11, n11, i11, o11, a3, s3) {
                    var l3,
                      c3,
                      u3,
                      d3 = r11.props,
                      p3 = t11.props,
                      h3 = t11.type,
                      f3 = 0;
                    if (('svg' === h3 && (i11 = true), null != o11)) {
                      for (; f3 < o11.length; f3++)
                        if (
                          (l3 = o11[f3]) &&
                          'setAttribute' in l3 == !!h3 &&
                          (h3 ? l3.localName === h3 : 3 === l3.nodeType)
                        ) {
                          (e11 = l3), (o11[f3] = null);
                          break;
                        }
                    }
                    if (null == e11) {
                      if (null === h3) return document.createTextNode(p3);
                      (e11 = i11
                        ? document.createElementNS(
                            'http://www.w3.org/2000/svg',
                            h3
                          )
                        : document.createElement(h3, p3.is && p3)),
                        (o11 = null),
                        (s3 = false);
                    }
                    if (null === h3)
                      d3 === p3 || (s3 && e11.data === p3) || (e11.data = p3);
                    else {
                      if (
                        ((o11 = o11 && nk.call(e11.childNodes)),
                        (c3 = (d3 = r11.props || nP).dangerouslySetInnerHTML),
                        (u3 = p3.dangerouslySetInnerHTML),
                        !s3)
                      ) {
                        if (null != o11)
                          for (
                            d3 = {}, f3 = 0;
                            f3 < e11.attributes.length;
                            f3++
                          )
                            d3[e11.attributes[f3].name] =
                              e11.attributes[f3].value;
                        (u3 || c3) &&
                          ((u3 &&
                            ((c3 && u3.__html == c3.__html) ||
                              u3.__html === e11.innerHTML)) ||
                            (e11.innerHTML = (u3 && u3.__html) || ''));
                      }
                      if (
                        ((function (e12, t12, r12, n12, i12) {
                          var o12;
                          for (o12 in r12)
                            'children' === o12 ||
                              'key' === o12 ||
                              o12 in t12 ||
                              nK(e12, o12, null, r12[o12], n12);
                          for (o12 in t12)
                            (i12 && 'function' != typeof t12[o12]) ||
                              'children' === o12 ||
                              'key' === o12 ||
                              'value' === o12 ||
                              'checked' === o12 ||
                              r12[o12] === t12[o12] ||
                              nK(e12, o12, t12[o12], r12[o12], n12);
                        })(e11, p3, d3, i11, s3),
                        u3)
                      )
                        t11.__k = [];
                      else if (
                        (nD(
                          e11,
                          Array.isArray((f3 = t11.props.children)) ? f3 : [f3],
                          t11,
                          r11,
                          n11,
                          i11 && 'foreignObject' !== h3,
                          o11,
                          a3,
                          o11 ? o11[0] : r11.__k && nL(r11, 0),
                          s3
                        ),
                        null != o11)
                      )
                        for (f3 = o11.length; f3--; )
                          null != o11[f3] && nI(o11[f3]);
                      s3 ||
                        ('value' in p3 &&
                          void 0 !== (f3 = p3.value) &&
                          (f3 !== e11.value ||
                            ('progress' === h3 && !f3) ||
                            ('option' === h3 && f3 !== d3.value)) &&
                          nK(e11, 'value', f3, d3.value, false),
                        'checked' in p3 &&
                          void 0 !== (f3 = p3.checked) &&
                          f3 !== e11.checked &&
                          nK(e11, 'checked', f3, d3.checked, false));
                    }
                    return e11;
                  })(r10.__e, t10, r10, n10, i10, o10, a2, l2));
            (c2 = nx.diffed) && c2(t10);
          } catch (e11) {
            (t10.__v = null),
              (l2 || null != o10) &&
                ((t10.__e = s2),
                (t10.__h = !!l2),
                (o10[o10.indexOf(s2)] = null)),
              nx.__e(e11, t10, r10);
          }
        }
        function nJ(e10, t10) {
          nx.__c && nx.__c(t10, e10),
            e10.some(function (t11) {
              try {
                (e10 = t11.__h),
                  (t11.__h = []),
                  e10.some(function (e11) {
                    e11.call(t11);
                  });
              } catch (e11) {
                nx.__e(e11, t11.__v);
              }
            });
        }
        function nF(e10, t10, r10) {
          try {
            'function' == typeof e10 ? e10(t10) : (e10.current = t10);
          } catch (e11) {
            nx.__e(e11, r10);
          }
        }
        function nz(e10, t10, r10) {
          return this.constructor(e10, r10);
        }
        function nG(e10, t10) {
          var r10, n10, i10, o10;
          (r10 = e10),
            nx.__ && nx.__(r10, t10),
            (i10 = (n10 = 'function' == typeof nG)
              ? null
              : (nG && nG.__k) || t10.__k),
            (o10 = []),
            nq(
              t10,
              (r10 = ((!n10 && nG) || t10).__k =
                (function (e11, t11, r11) {
                  var n11,
                    i11,
                    o11,
                    a2 = {};
                  for (o11 in t11)
                    'key' == o11
                      ? (n11 = t11[o11])
                      : 'ref' == o11
                      ? (i11 = t11[o11])
                      : (a2[o11] = t11[o11]);
                  if (
                    (arguments.length > 2 &&
                      (a2.children =
                        arguments.length > 3 ? nk.call(arguments, 2) : r11),
                    'function' == typeof e11 && null != e11.defaultProps)
                  )
                    for (o11 in e11.defaultProps)
                      void 0 === a2[o11] && (a2[o11] = e11.defaultProps[o11]);
                  return nU(e11, a2, n11, i11, null);
                })(nN, null, [r10])),
              i10 || nP,
              nP,
              void 0 !== t10.ownerSVGElement,
              !n10 && nG
                ? [nG]
                : i10
                ? null
                : t10.firstChild
                ? nk.call(t10.childNodes)
                : null,
              o10,
              !n10 && nG ? nG : i10 ? i10.__e : t10.firstChild,
              n10
            ),
            nJ(o10, r10);
        }
        (nk = nC.slice),
          (nx = {
            __e: function (e10, t10, r10, n10) {
              for (var i10, o10, a2; (t10 = t10.__); )
                if ((i10 = t10.__c) && !i10.__)
                  try {
                    if (
                      ((o10 = i10.constructor) &&
                        null != o10.getDerivedStateFromError &&
                        (i10.setState(o10.getDerivedStateFromError(e10)),
                        (a2 = i10.__d)),
                      null != i10.componentDidCatch &&
                        (i10.componentDidCatch(e10, n10 || {}), (a2 = i10.__d)),
                      a2)
                    )
                      return (i10.__E = i10);
                  } catch (t11) {
                    e10 = t11;
                  }
              throw e10;
            }
          }),
          (nE = 0),
          (nM.prototype.setState = function (e10, t10) {
            var r10;
            (r10 =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = nO({}, this.state))),
              'function' == typeof e10 && (e10 = e10(nO({}, r10), this.props)),
              e10 && nO(r10, e10),
              null != e10 && this.__v && (t10 && this._sb.push(t10), nj(this));
          }),
          (nM.prototype.forceUpdate = function (e10) {
            this.__v &&
              ((this.__e = true), e10 && this.__h.push(e10), nj(this));
          }),
          (nM.prototype.render = nN),
          (nA = []),
          (n$.__r = 0);
        var nX =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
          nY =
            /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
          nZ = /[\s\n\\/='"\0<>]/,
          nQ = /^xlink:?./,
          n0 = /["&<]/;
        function n1(e10) {
          if (false === n0.test((e10 += ''))) return e10;
          for (
            var t10 = 0, r10 = 0, n10 = '', i10 = '';
            r10 < e10.length;
            r10++
          ) {
            switch (e10.charCodeAt(r10)) {
              case 34:
                i10 = '&quot;';
                break;
              case 38:
                i10 = '&amp;';
                break;
              case 60:
                i10 = '&lt;';
                break;
              default:
                continue;
            }
            r10 !== t10 && (n10 += e10.slice(t10, r10)),
              (n10 += i10),
              (t10 = r10 + 1);
          }
          return r10 !== t10 && (n10 += e10.slice(t10, r10)), n10;
        }
        var n2 = function (e10, t10) {
            return String(e10).replace(/(\n+)/g, '$1' + (t10 || '	'));
          },
          n3 = function (e10, t10, r10) {
            return (
              String(e10).length > (t10 || 40) ||
              (!r10 && -1 !== String(e10).indexOf('\n')) ||
              -1 !== String(e10).indexOf('<')
            );
          },
          n5 = {},
          n6 = /([A-Z])/g;
        function n4(e10) {
          var t10 = '';
          for (var r10 in e10) {
            var n10 = e10[r10];
            null != n10 &&
              '' !== n10 &&
              (t10 && (t10 += ' '),
              (t10 +=
                '-' == r10[0]
                  ? r10
                  : n5[r10] ||
                    (n5[r10] = r10.replace(n6, '-$1').toLowerCase())),
              (t10 =
                'number' == typeof n10 && false === nX.test(r10)
                  ? t10 + ': ' + n10 + 'px;'
                  : t10 + ': ' + n10 + ';'));
          }
          return t10 || void 0;
        }
        function n8(e10, t10) {
          return (
            Array.isArray(t10)
              ? t10.reduce(n8, e10)
              : null != t10 && false !== t10 && e10.push(t10),
            e10
          );
        }
        function n9() {
          this.__d = true;
        }
        function n7(e10, t10) {
          return {
            __v: e10,
            context: t10,
            props: e10.props,
            setState: n9,
            forceUpdate: n9,
            __d: true,
            __h: []
          };
        }
        function ie(e10, t10) {
          var r10 = e10.contextType,
            n10 = r10 && t10[r10.__c];
          return null != r10 ? (n10 ? n10.props.value : r10.__) : t10;
        }
        var it = [],
          ir = { shallow: true };
        io.render = io;
        var ii = [];
        function io(e10, t10, r10) {
          t10 = t10 || {};
          var n10,
            i10 = nx.__s;
          return (
            (nx.__s = true),
            (n10 =
              r10 &&
              (r10.pretty ||
                r10.voidElements ||
                r10.sortAttributes ||
                r10.shallow ||
                r10.allAttributes ||
                r10.xml ||
                r10.attributeHook)
                ? (function e11(t11, r11, n11, i11, o10, a2) {
                    if (null == t11 || 'boolean' == typeof t11) return '';
                    if ('object' != typeof t11) return n1(t11);
                    var s2 = n11.pretty,
                      l2 = s2 && 'string' == typeof s2 ? s2 : '	';
                    if (Array.isArray(t11)) {
                      for (var c2 = '', u2 = 0; u2 < t11.length; u2++)
                        s2 && u2 > 0 && (c2 += '\n'),
                          (c2 += e11(t11[u2], r11, n11, i11, o10, a2));
                      return c2;
                    }
                    var d2,
                      p2 = t11.type,
                      h2 = t11.props,
                      f2 = false;
                    if ('function' == typeof p2) {
                      if (
                        ((f2 = true),
                        !n11.shallow ||
                          (!i11 && false !== n11.renderRootComponent))
                      ) {
                        if (p2 === nN) {
                          var g2 = [];
                          return (
                            n8(g2, t11.props.children),
                            e11(
                              g2,
                              r11,
                              n11,
                              false !== n11.shallowHighOrder,
                              o10,
                              a2
                            )
                          );
                        }
                        var m2,
                          y2 = (t11.__c = n7(t11, r11));
                        nx.__b && nx.__b(t11);
                        var w2 = nx.__r;
                        if (
                          p2.prototype &&
                          'function' == typeof p2.prototype.render
                        ) {
                          var b2 = ie(p2, r11);
                          ((y2 = t11.__c = new p2(h2, b2)).__v = t11),
                            (y2._dirty = y2.__d = true),
                            (y2.props = h2),
                            null == y2.state && (y2.state = {}),
                            null == y2._nextState &&
                              null == y2.__s &&
                              (y2._nextState = y2.__s = y2.state),
                            (y2.context = b2),
                            p2.getDerivedStateFromProps
                              ? (y2.state = Object.assign(
                                  {},
                                  y2.state,
                                  p2.getDerivedStateFromProps(
                                    y2.props,
                                    y2.state
                                  )
                                ))
                              : y2.componentWillMount &&
                                (y2.componentWillMount(),
                                (y2.state =
                                  y2._nextState !== y2.state
                                    ? y2._nextState
                                    : y2.__s !== y2.state
                                    ? y2.__s
                                    : y2.state)),
                            w2 && w2(t11),
                            (m2 = y2.render(y2.props, y2.state, y2.context));
                        } else
                          for (
                            var v2 = ie(p2, r11), _2 = 0;
                            y2.__d && _2++ < 25;

                          )
                            (y2.__d = false),
                              w2 && w2(t11),
                              (m2 = p2.call(t11.__c, h2, v2));
                        return (
                          y2.getChildContext &&
                            (r11 = Object.assign(
                              {},
                              r11,
                              y2.getChildContext()
                            )),
                          nx.diffed && nx.diffed(t11),
                          e11(
                            m2,
                            r11,
                            n11,
                            false !== n11.shallowHighOrder,
                            o10,
                            a2
                          )
                        );
                      }
                      p2 =
                        (d2 = p2).displayName ||
                        (d2 !== Function && d2.name) ||
                        (function (e12) {
                          var t12 = (Function.prototype.toString
                            .call(e12)
                            .match(/^\s*function\s+([^( ]+)/) || '')[1];
                          if (!t12) {
                            for (var r12 = -1, n12 = it.length; n12--; )
                              if (it[n12] === e12) {
                                r12 = n12;
                                break;
                              }
                            r12 < 0 && (r12 = it.push(e12) - 1),
                              (t12 = 'UnnamedComponent' + r12);
                          }
                          return t12;
                        })(d2);
                    }
                    var S2,
                      k2,
                      x2 = '<' + p2;
                    if (h2) {
                      var E2 = Object.keys(h2);
                      n11 && true === n11.sortAttributes && E2.sort();
                      for (var A2 = 0; A2 < E2.length; A2++) {
                        var T2 = E2[A2],
                          P2 = h2[T2];
                        if ('children' !== T2) {
                          if (
                            !nZ.test(T2) &&
                            ((n11 && n11.allAttributes) ||
                              ('key' !== T2 &&
                                'ref' !== T2 &&
                                '__self' !== T2 &&
                                '__source' !== T2))
                          ) {
                            if ('defaultValue' === T2) T2 = 'value';
                            else if ('defaultChecked' === T2) T2 = 'checked';
                            else if ('defaultSelected' === T2) T2 = 'selected';
                            else if ('className' === T2) {
                              if (void 0 !== h2.class) continue;
                              T2 = 'class';
                            } else
                              o10 &&
                                nQ.test(T2) &&
                                (T2 = T2.toLowerCase().replace(
                                  /^xlink:?/,
                                  'xlink:'
                                ));
                            if ('htmlFor' === T2) {
                              if (h2.for) continue;
                              T2 = 'for';
                            }
                            'style' === T2 &&
                              P2 &&
                              'object' == typeof P2 &&
                              (P2 = n4(P2)),
                              'a' === T2[0] &&
                                'r' === T2[1] &&
                                'boolean' == typeof P2 &&
                                (P2 = String(P2));
                            var C2 =
                              n11.attributeHook &&
                              n11.attributeHook(T2, P2, r11, n11, f2);
                            if (C2 || '' === C2) x2 += C2;
                            else if ('dangerouslySetInnerHTML' === T2)
                              k2 = P2 && P2.__html;
                            else if ('textarea' === p2 && 'value' === T2)
                              S2 = P2;
                            else if (
                              (P2 || 0 === P2 || '' === P2) &&
                              'function' != typeof P2
                            ) {
                              if (
                                !(
                                  (true !== P2 && '' !== P2) ||
                                  ((P2 = T2), n11 && n11.xml)
                                )
                              ) {
                                x2 = x2 + ' ' + T2;
                                continue;
                              }
                              if ('value' === T2) {
                                if ('select' === p2) {
                                  a2 = P2;
                                  continue;
                                }
                                'option' === p2 &&
                                  a2 == P2 &&
                                  void 0 === h2.selected &&
                                  (x2 += ' selected');
                              }
                              x2 = x2 + ' ' + T2 + '="' + n1(P2) + '"';
                            }
                          }
                        } else S2 = P2;
                      }
                    }
                    if (s2) {
                      var R2 = x2.replace(/\n\s*/, ' ');
                      R2 === x2 || ~R2.indexOf('\n')
                        ? s2 && ~x2.indexOf('\n') && (x2 += '\n')
                        : (x2 = R2);
                    }
                    if (((x2 += '>'), nZ.test(p2)))
                      throw Error(
                        p2 + ' is not a valid HTML tag name in ' + x2
                      );
                    var O2,
                      I2 =
                        nY.test(p2) ||
                        (n11.voidElements && n11.voidElements.test(p2)),
                      U2 = [];
                    if (k2)
                      s2 && n3(k2) && (k2 = '\n' + l2 + n2(k2, l2)), (x2 += k2);
                    else if (null != S2 && n8((O2 = []), S2).length) {
                      for (
                        var N2 = s2 && ~x2.indexOf('\n'), M2 = false, L2 = 0;
                        L2 < O2.length;
                        L2++
                      ) {
                        var j2 = O2[L2];
                        if (null != j2 && false !== j2) {
                          var $2 = e11(
                            j2,
                            r11,
                            n11,
                            true,
                            'svg' === p2 || ('foreignObject' !== p2 && o10),
                            a2
                          );
                          if ((s2 && !N2 && n3($2) && (N2 = true), $2)) {
                            if (s2) {
                              var D2 = $2.length > 0 && '<' != $2[0];
                              M2 && D2
                                ? (U2[U2.length - 1] += $2)
                                : U2.push($2),
                                (M2 = D2);
                            } else U2.push($2);
                          }
                        }
                      }
                      if (s2 && N2)
                        for (var H2 = U2.length; H2--; )
                          U2[H2] = '\n' + l2 + n2(U2[H2], l2);
                    }
                    if (U2.length || k2) x2 += U2.join('');
                    else if (n11 && n11.xml)
                      return x2.substring(0, x2.length - 1) + ' />';
                    return (
                      !I2 || O2 || k2
                        ? (s2 && ~x2.indexOf('\n') && (x2 += '\n'),
                          (x2 = x2 + '</' + p2 + '>'))
                        : (x2 = x2.replace(/>$/, ' />')),
                      x2
                    );
                  })(e10, t10, r10)
                : (function e11(t11, r11, n11, i11) {
                    if (
                      null == t11 ||
                      true === t11 ||
                      false === t11 ||
                      '' === t11
                    )
                      return '';
                    if ('object' != typeof t11) return n1(t11);
                    if (ia(t11)) {
                      for (var o10 = '', a2 = 0; a2 < t11.length; a2++)
                        o10 += e11(t11[a2], r11, n11, i11);
                      return o10;
                    }
                    nx.__b && nx.__b(t11);
                    var s2 = t11.type,
                      l2 = t11.props;
                    if ('function' == typeof s2) {
                      if (s2 === nN)
                        return e11(t11.props.children, r11, n11, i11);
                      f2 =
                        s2.prototype && 'function' == typeof s2.prototype.render
                          ? ((c2 = r11),
                            (d2 = ie((u2 = t11.type), c2)),
                            (p2 = new u2(t11.props, d2)),
                            (t11.__c = p2),
                            (p2.__v = t11),
                            (p2.__d = true),
                            (p2.props = t11.props),
                            null == p2.state && (p2.state = {}),
                            null == p2.__s && (p2.__s = p2.state),
                            (p2.context = d2),
                            u2.getDerivedStateFromProps
                              ? (p2.state = is(
                                  {},
                                  p2.state,
                                  u2.getDerivedStateFromProps(
                                    p2.props,
                                    p2.state
                                  )
                                ))
                              : p2.componentWillMount &&
                                (p2.componentWillMount(),
                                (p2.state =
                                  p2.__s !== p2.state ? p2.__s : p2.state)),
                            (h2 = nx.__r) && h2(t11),
                            p2.render(p2.props, p2.state, p2.context))
                          : (function (e12, t12) {
                              var r12,
                                n12 = n7(e12, t12),
                                i12 = ie(e12.type, t12);
                              e12.__c = n12;
                              for (
                                var o11 = nx.__r, a3 = 0;
                                n12.__d && a3++ < 25;

                              )
                                (n12.__d = false),
                                  o11 && o11(e12),
                                  (r12 = e12.type.call(n12, e12.props, i12));
                              return r12;
                            })(t11, r11);
                      var c2,
                        u2,
                        d2,
                        p2,
                        h2,
                        f2,
                        g2 = t11.__c;
                      g2.getChildContext &&
                        (r11 = is({}, r11, g2.getChildContext()));
                      var m2 = e11(f2, r11, n11, i11);
                      return nx.diffed && nx.diffed(t11), m2;
                    }
                    var y2,
                      w2,
                      b2 = '<';
                    if (((b2 += s2), l2))
                      for (var v2 in ((y2 = l2.children), l2)) {
                        var _2,
                          S2,
                          k2,
                          x2 = l2[v2];
                        if (
                          !(
                            'key' === v2 ||
                            'ref' === v2 ||
                            '__self' === v2 ||
                            '__source' === v2 ||
                            'children' === v2 ||
                            ('className' === v2 && 'class' in l2) ||
                            ('htmlFor' === v2 && 'for' in l2) ||
                            nZ.test(v2)
                          )
                        ) {
                          if (
                            ((S2 = v2 =
                              'className' === (_2 = v2)
                                ? 'class'
                                : 'htmlFor' === _2
                                ? 'for'
                                : 'defaultValue' === _2
                                ? 'value'
                                : 'defaultChecked' === _2
                                ? 'checked'
                                : 'defaultSelected' === _2
                                ? 'selected'
                                : n11 && nQ.test(_2)
                                ? _2.toLowerCase().replace(/^xlink:?/, 'xlink:')
                                : _2),
                            (k2 = x2),
                            (x2 =
                              'style' === S2 &&
                              null != k2 &&
                              'object' == typeof k2
                                ? n4(k2)
                                : 'a' === S2[0] &&
                                  'r' === S2[1] &&
                                  'boolean' == typeof k2
                                ? String(k2)
                                : k2),
                            'dangerouslySetInnerHTML' === v2)
                          )
                            w2 = x2 && x2.__html;
                          else if ('textarea' === s2 && 'value' === v2) y2 = x2;
                          else if (
                            (x2 || 0 === x2 || '' === x2) &&
                            'function' != typeof x2
                          ) {
                            if (true === x2 || '' === x2) {
                              (x2 = v2), (b2 = b2 + ' ' + v2);
                              continue;
                            }
                            if ('value' === v2) {
                              if ('select' === s2) {
                                i11 = x2;
                                continue;
                              }
                              'option' !== s2 ||
                                i11 != x2 ||
                                'selected' in l2 ||
                                (b2 += ' selected');
                            }
                            b2 = b2 + ' ' + v2 + '="' + n1(x2) + '"';
                          }
                        }
                      }
                    var E2 = b2;
                    if (((b2 += '>'), nZ.test(s2)))
                      throw Error(
                        s2 + ' is not a valid HTML tag name in ' + b2
                      );
                    var A2 = '',
                      T2 = false;
                    if (w2) (A2 += w2), (T2 = true);
                    else if ('string' == typeof y2) (A2 += n1(y2)), (T2 = true);
                    else if (ia(y2))
                      for (var P2 = 0; P2 < y2.length; P2++) {
                        var C2 = y2[P2];
                        if (null != C2 && false !== C2) {
                          var R2 = e11(
                            C2,
                            r11,
                            'svg' === s2 || ('foreignObject' !== s2 && n11),
                            i11
                          );
                          R2 && ((A2 += R2), (T2 = true));
                        }
                      }
                    else if (null != y2 && false !== y2 && true !== y2) {
                      var O2 = e11(
                        y2,
                        r11,
                        'svg' === s2 || ('foreignObject' !== s2 && n11),
                        i11
                      );
                      O2 && ((A2 += O2), (T2 = true));
                    }
                    if ((nx.diffed && nx.diffed(t11), T2)) b2 += A2;
                    else if (nY.test(s2)) return E2 + ' />';
                    return b2 + '</' + s2 + '>';
                  })(e10, t10, false, void 0)),
            nx.__c && nx.__c(e10, ii),
            (nx.__s = i10),
            (ii.length = 0),
            n10
          );
        }
        var ia = Array.isArray,
          is = Object.assign;
        io.shallowRender = function (e10, t10) {
          return io(e10, t10, ir);
        };
        var il = 0;
        function ic(e10, t10, r10, n10, i10) {
          var o10,
            a2,
            s2 = {};
          for (a2 in t10) 'ref' == a2 ? (o10 = t10[a2]) : (s2[a2] = t10[a2]);
          var l2 = {
            type: e10,
            props: s2,
            key: r10,
            ref: o10,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: --il,
            __source: i10,
            __self: n10
          };
          if ('function' == typeof e10 && (o10 = e10.defaultProps))
            for (a2 in o10) void 0 === s2[a2] && (s2[a2] = o10[a2]);
          return nx.vnode && nx.vnode(l2), l2;
        }
        async function iu(e10, t10) {
          let r10 = window.SimpleWebAuthnBrowser;
          async function n10(r11) {
            let n11 = new URL(`${e10}/webauthn-options/${t10}`);
            r11 && n11.searchParams.append('action', r11),
              o10().forEach((e11) => {
                n11.searchParams.append(e11.name, e11.value);
              });
            let i11 = await fetch(n11);
            if (!i11.ok) {
              console.error('Failed to fetch options', i11);
              return;
            }
            return i11.json();
          }
          function i10() {
            let e11 = `#${t10}-form`,
              r11 = document.querySelector(e11);
            if (!r11) throw Error(`Form '${e11}' not found`);
            return r11;
          }
          function o10() {
            return Array.from(i10().querySelectorAll('input[data-form-field]'));
          }
          async function a2(e11, t11) {
            let r11 = i10();
            if (e11) {
              let t12 = document.createElement('input');
              (t12.type = 'hidden'),
                (t12.name = 'action'),
                (t12.value = e11),
                r11.appendChild(t12);
            }
            if (t11) {
              let e12 = document.createElement('input');
              (e12.type = 'hidden'),
                (e12.name = 'data'),
                (e12.value = JSON.stringify(t11)),
                r11.appendChild(e12);
            }
            return r11.submit();
          }
          async function s2(e11, t11) {
            let n11 = await r10.startAuthentication(e11, t11);
            return await a2('authenticate', n11);
          }
          async function l2(e11) {
            o10().forEach((e12) => {
              if (e12.required && !e12.value)
                throw Error(`Missing required field: ${e12.name}`);
            });
            let t11 = await r10.startRegistration(e11);
            return await a2('register', t11);
          }
          async function c2() {
            if (!r10.browserSupportsWebAuthnAutofill()) return;
            let e11 = await n10('authenticate');
            if (!e11) {
              console.error(
                'Failed to fetch option for autofill authentication'
              );
              return;
            }
            try {
              await s2(e11.options, true);
            } catch (e12) {
              console.error(e12);
            }
          }
          (async function () {
            let e11 = i10();
            if (!r10.browserSupportsWebAuthn()) {
              e11.style.display = 'none';
              return;
            }
            e11 &&
              e11.addEventListener('submit', async (e12) => {
                e12.preventDefault();
                let t11 = await n10(void 0);
                if (!t11) {
                  console.error('Failed to fetch options for form submission');
                  return;
                }
                if ('authenticate' === t11.action)
                  try {
                    await s2(t11.options, false);
                  } catch (e13) {
                    console.error(e13);
                  }
                else if ('register' === t11.action)
                  try {
                    await l2(t11.options);
                  } catch (e13) {
                    console.error(e13);
                  }
              });
          })(),
            c2();
        }
        let id = {
            default: 'Unable to sign in.',
            Signin: 'Try signing in with a different account.',
            OAuthSignin: 'Try signing in with a different account.',
            OAuthCallbackError: 'Try signing in with a different account.',
            OAuthCreateAccount: 'Try signing in with a different account.',
            EmailCreateAccount: 'Try signing in with a different account.',
            Callback: 'Try signing in with a different account.',
            OAuthAccountNotLinked:
              'To confirm your identity, sign in with the same account you used originally.',
            EmailSignin: 'The e-mail could not be sent.',
            CredentialsSignin:
              'Sign in failed. Check the details you provided are correct.',
            SessionRequired: 'Please sign in to access this page.'
          },
          ip = `:root {
  --border-width: 1px;
  --border-radius: 0.5rem;
  --color-error: #c94b4b;
  --color-info: #157efb;
  --color-info-hover: #0f6ddb;
  --color-info-text: #fff;
}

.__next-auth-theme-auto,
.__next-auth-theme-light {
  --color-background: #ececec;
  --color-background-hover: rgba(236, 236, 236, 0.8);
  --color-background-card: #fff;
  --color-text: #000;
  --color-primary: #444;
  --color-control-border: #bbb;
  --color-button-active-background: #f9f9f9;
  --color-button-active-border: #aaa;
  --color-separator: #ccc;
}

.__next-auth-theme-dark {
  --color-background: #161b22;
  --color-background-hover: rgba(22, 27, 34, 0.8);
  --color-background-card: #0d1117;
  --color-text: #fff;
  --color-primary: #ccc;
  --color-control-border: #555;
  --color-button-active-background: #060606;
  --color-button-active-border: #666;
  --color-separator: #444;
}

@media (prefers-color-scheme: dark) {
  .__next-auth-theme-auto {
    --color-background: #161b22;
    --color-background-hover: rgba(22, 27, 34, 0.8);
    --color-background-card: #0d1117;
    --color-text: #fff;
    --color-primary: #ccc;
    --color-control-border: #555;
    --color-button-active-background: #060606;
    --color-button-active-border: #666;
    --color-separator: #444;
  }

  button,
  a.button {
    color: var(--provider-dark-color, var(--color-primary)) !important;
    background-color: var(
      --provider-dark-bg,
      var(--color-background)
    ) !important;
  }

    :is(button,a.button):hover {
      background-color: var(
        --provider-dark-bg-hover,
        var(--color-background-hover)
      ) !important;
    }

    :is(button,a.button) span {
      color: var(--provider-dark-bg) !important;
    }
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
}

h1 {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  font-weight: 400;
  color: var(--color-text);
}

p {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  color: var(--color-text);
}

form {
  margin: 0;
  padding: 0;
}

label {
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.25rem;
  display: block;
  color: var(--color-text);
}

input[type] {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: var(--border-width) solid var(--color-control-border);
  background: var(--color-background-card);
  font-size: 1rem;
  border-radius: var(--border-radius);
  color: var(--color-text);
}

p {
  font-size: 1.1rem;
  line-height: 2rem;
}

a.button {
  text-decoration: none;
  line-height: 1rem;
}

a.button:link,
  a.button:visited {
    background-color: var(--color-background);
    color: var(--color-primary);
  }

button span {
  flex-grow: 1;
}

button,
a.button {
  padding: 0.75rem 1rem;
  color: var(--provider-color, var(--color-primary));
  background-color: var(--provider-bg, var(--color-background));
  border: 1px solid #00000031;
  font-size: 0.9rem;
  height: 50px;
  border-radius: var(--border-radius);
  transition: background-color 250ms ease-in-out;
  font-weight: 300;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

:is(button,a.button):hover {
    background-color: var(--provider-bg-hover, var(--color-background-hover));
    cursor: pointer;
  }

:is(button,a.button):active {
    cursor: pointer;
  }

:is(button,a.button) span {
    color: #fff;
  }

:is(button,a.button) #provider-logo {
    width: 25px;
    display: block;
  }

#submitButton {
  color: var(--button-text-color, var(--color-info-text));
  background-color: var(--brand-color, var(--color-info));
  width: 100%;
}

#submitButton:hover {
    background-color: var(
      --button-hover-bg,
      var(--color-info-hover)
    ) !important;
  }

a.site {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1rem;
  line-height: 2rem;
}

a.site:hover {
    text-decoration: underline;
  }

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page > div {
    text-align: center;
  }

.error a.button {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 0.5rem;
  }

.error .message {
    margin-bottom: 1.5rem;
  }

.signin input[type="text"] {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

.signin hr {
    display: block;
    border: 0;
    border-top: 1px solid var(--color-separator);
    margin: 2rem auto 1rem auto;
    overflow: visible;
  }

.signin hr::before {
      content: "or";
      background: var(--color-background-card);
      color: #888;
      padding: 0 0.4rem;
      position: relative;
      top: -0.7rem;
    }

.signin .error {
    background: #f5f5f5;
    font-weight: 500;
    border-radius: 0.3rem;
    background: var(--color-error);
  }

.signin .error p {
      text-align: left;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      line-height: 1.2rem;
      color: var(--color-info-text);
    }

.signin > div,
  .signin form {
    display: block;
  }

.signin > div input[type], .signin form input[type] {
      margin-bottom: 0.5rem;
    }

.signin > div button, .signin form button {
      width: 100%;
    }

.signin .provider + .provider {
    margin-top: 1rem;
  }

.logo {
  display: inline-block;
  max-width: 150px;
  margin: 1.25rem 0;
  max-height: 70px;
}

.card {
  background-color: var(--color-background-card);
  border-radius: 1rem;
  padding: 1.25rem 2rem;
}

.card .header {
    color: var(--color-primary);
  }

.card input[type]::-moz-placeholder {
    color: color-mix(
      in srgb,
      var(--color-text) 20%,
      var(--color-button-active-background)
    );
  }

.card input[type]::placeholder {
    color: color-mix(
      in srgb,
      var(--color-text) 20%,
      var(--color-button-active-background)
    );
  }

.card input[type] {
    background: color-mix(in srgb, var(--color-background-card) 95%, black);
  }

.section-header {
  color: var(--color-text);
}

@media screen and (min-width: 450px) {
  .card {
    margin: 2rem 0;
    width: 368px;
  }
}

@media screen and (max-width: 450px) {
  .card {
    margin: 1rem 0;
    width: 343px;
  }
}
`;
        function ih({
          html: e10,
          title: t10,
          status: r10,
          cookies: n10,
          theme: i10,
          headTags: o10
        }) {
          return {
            cookies: n10,
            status: r10,
            headers: { 'Content-Type': 'text/html' },
            body: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${ip}</style><title>${t10}</title>${
              o10 ?? ''
            }</head><body class="__next-auth-theme-${
              i10?.colorScheme ?? 'auto'
            }"><div class="page">${io(e10)}</div></body></html>`
          };
        }
        function ig(e10) {
          let {
            url: t10,
            theme: r10,
            query: n10,
            cookies: i10,
            pages: o10,
            providers: a2
          } = e10;
          return {
            csrf: (e11, t11, r11) =>
              e11
                ? (t11.logger.warn('csrf-disabled'),
                  r11.push({
                    name: t11.cookies.csrfToken.name,
                    value: '',
                    options: { ...t11.cookies.csrfToken.options, maxAge: 0 }
                  }),
                  { status: 404, cookies: r11 })
                : {
                    headers: { 'Content-Type': 'application/json' },
                    body: { csrfToken: t11.csrfToken },
                    cookies: r11
                  },
            providers: (e11) => ({
              headers: { 'Content-Type': 'application/json' },
              body: e11.reduce(
                (
                  e12,
                  {
                    id: t11,
                    name: r11,
                    type: n11,
                    signinUrl: i11,
                    callbackUrl: o11
                  }
                ) => (
                  (e12[t11] = {
                    id: t11,
                    name: r11,
                    type: n11,
                    signinUrl: i11,
                    callbackUrl: o11
                  }),
                  e12
                ),
                {}
              )
            }),
            signin(t11, s2) {
              if (t11) throw new e0('Unsupported action');
              if (o10?.signIn) {
                let t12 = `${o10.signIn}${
                  o10.signIn.includes('?') ? '&' : '?'
                }${new URLSearchParams({
                  callbackUrl: e10.callbackUrl ?? '/'
                })}`;
                return (
                  s2 && (t12 = `${t12}&${new URLSearchParams({ error: s2 })}`),
                  { redirect: t12, cookies: i10 }
                );
              }
              let l2 = a2?.find(
                  (e11) =>
                    'webauthn' === e11.type &&
                    e11.enableConditionalUI &&
                    !!e11.simpleWebAuthnBrowserVersion
                ),
                c2 = '';
              if (l2) {
                let { simpleWebAuthnBrowserVersion: e11 } = l2;
                c2 = `<script src="https://unpkg.com/@simplewebauthn/browser@${e11}/dist/bundle/index.umd.min.js" crossorigin="anonymous"><\/script>`;
              }
              return ih({
                cookies: i10,
                theme: r10,
                html: (function (e11) {
                  let {
                    csrfToken: t12,
                    providers: r11 = [],
                    callbackUrl: n11,
                    theme: i11,
                    email: o11,
                    error: a3
                  } = e11;
                  'undefined' != typeof document &&
                    i11?.brandColor &&
                    document.documentElement.style.setProperty(
                      '--brand-color',
                      i11.brandColor
                    ),
                    'undefined' != typeof document &&
                      i11?.buttonText &&
                      document.documentElement.style.setProperty(
                        '--button-text-color',
                        i11.buttonText
                      );
                  let s3 = a3 && (id[a3] ?? id.default),
                    l3 = r11.find(
                      (e12) =>
                        'webauthn' === e12.type && e12.enableConditionalUI
                    )?.id;
                  return ic('div', {
                    className: 'signin',
                    children: [
                      i11?.brandColor &&
                        ic('style', {
                          dangerouslySetInnerHTML: {
                            __html: `:root {--brand-color: ${i11.brandColor}}`
                          }
                        }),
                      i11?.buttonText &&
                        ic('style', {
                          dangerouslySetInnerHTML: {
                            __html: `
        :root {
          --button-text-color: ${i11.buttonText}
        }
      `
                          }
                        }),
                      ic('div', {
                        className: 'card',
                        children: [
                          s3 &&
                            ic('div', {
                              className: 'error',
                              children: ic('p', { children: s3 })
                            }),
                          i11?.logo &&
                            ic('img', {
                              src: i11.logo,
                              alt: 'Logo',
                              className: 'logo'
                            }),
                          r11.map((e12, i12) => {
                            let a4, s4, l4;
                            ('oauth' === e12.type || 'oidc' === e12.type) &&
                              ({
                                bg: a4 = '#fff',
                                brandColor: s4,
                                logo: l4 = `https://authjs.dev/img/providers/${e12.id}.svg`
                              } = e12.style ?? {});
                            let c3 = s4 ?? a4 ?? '#fff';
                            return ic(
                              'div',
                              {
                                className: 'provider',
                                children: [
                                  'oauth' === e12.type || 'oidc' === e12.type
                                    ? ic('form', {
                                        action: e12.signinUrl,
                                        method: 'POST',
                                        children: [
                                          ic('input', {
                                            type: 'hidden',
                                            name: 'csrfToken',
                                            value: t12
                                          }),
                                          n11 &&
                                            ic('input', {
                                              type: 'hidden',
                                              name: 'callbackUrl',
                                              value: n11
                                            }),
                                          ic('button', {
                                            type: 'submit',
                                            className: 'button',
                                            style: {
                                              '--provider-bg': '#fff',
                                              '--provider-bg-hover': `color-mix(in srgb, ${c3} 30%, #fff)`,
                                              '--provider-dark-bg': '#161b22',
                                              '--provider-dark-bg-hover': `color-mix(in srgb, ${c3} 30%, #000)`
                                            },
                                            tabIndex: 0,
                                            children: [
                                              l4 &&
                                                ic('img', {
                                                  loading: 'lazy',
                                                  height: 24,
                                                  width: 24,
                                                  id: 'provider-logo',
                                                  src: l4
                                                }),
                                              ic('span', {
                                                style: {
                                                  filter:
                                                    'invert(1) grayscale(1) brightness(1.3) contrast(9000)',
                                                  'mix-blend-mode':
                                                    'luminosity',
                                                  opacity: 0.95
                                                },
                                                children: [
                                                  'Sign in with ',
                                                  e12.name
                                                ]
                                              })
                                            ]
                                          })
                                        ]
                                      })
                                    : null,
                                  ('email' === e12.type ||
                                    'credentials' === e12.type ||
                                    'webauthn' === e12.type) &&
                                    i12 > 0 &&
                                    'email' !== r11[i12 - 1].type &&
                                    'credentials' !== r11[i12 - 1].type &&
                                    'webauthn' !== r11[i12 - 1].type &&
                                    ic('hr', {}),
                                  'email' === e12.type &&
                                    ic('form', {
                                      action: e12.signinUrl,
                                      method: 'POST',
                                      children: [
                                        ic('input', {
                                          type: 'hidden',
                                          name: 'csrfToken',
                                          value: t12
                                        }),
                                        ic('label', {
                                          className: 'section-header',
                                          htmlFor: `input-email-for-${e12.id}-provider`,
                                          children: 'Email'
                                        }),
                                        ic('input', {
                                          id: `input-email-for-${e12.id}-provider`,
                                          autoFocus: true,
                                          type: 'email',
                                          name: 'email',
                                          value: o11,
                                          placeholder: 'email@example.com',
                                          required: true
                                        }),
                                        ic('button', {
                                          id: 'submitButton',
                                          type: 'submit',
                                          tabIndex: 0,
                                          children: ['Sign in with ', e12.name]
                                        })
                                      ]
                                    }),
                                  'credentials' === e12.type &&
                                    ic('form', {
                                      action: e12.callbackUrl,
                                      method: 'POST',
                                      children: [
                                        ic('input', {
                                          type: 'hidden',
                                          name: 'csrfToken',
                                          value: t12
                                        }),
                                        Object.keys(e12.credentials).map(
                                          (t13) =>
                                            ic(
                                              'div',
                                              {
                                                children: [
                                                  ic('label', {
                                                    className: 'section-header',
                                                    htmlFor: `input-${t13}-for-${e12.id}-provider`,
                                                    children:
                                                      e12.credentials[t13]
                                                        .label ?? t13
                                                  }),
                                                  ic('input', {
                                                    name: t13,
                                                    id: `input-${t13}-for-${e12.id}-provider`,
                                                    type:
                                                      e12.credentials[t13]
                                                        .type ?? 'text',
                                                    placeholder:
                                                      e12.credentials[t13]
                                                        .placeholder ?? '',
                                                    ...e12.credentials[t13]
                                                  })
                                                ]
                                              },
                                              `input-group-${e12.id}`
                                            )
                                        ),
                                        ic('button', {
                                          id: 'submitButton',
                                          type: 'submit',
                                          tabIndex: 0,
                                          children: ['Sign in with ', e12.name]
                                        })
                                      ]
                                    }),
                                  'webauthn' === e12.type &&
                                    ic('form', {
                                      action: e12.callbackUrl,
                                      method: 'POST',
                                      id: `${e12.id}-form`,
                                      children: [
                                        ic('input', {
                                          type: 'hidden',
                                          name: 'csrfToken',
                                          value: t12
                                        }),
                                        Object.keys(e12.formFields).map((t13) =>
                                          ic(
                                            'div',
                                            {
                                              children: [
                                                ic('label', {
                                                  className: 'section-header',
                                                  htmlFor: `input-${t13}-for-${e12.id}-provider`,
                                                  children:
                                                    e12.formFields[t13].label ??
                                                    t13
                                                }),
                                                ic('input', {
                                                  name: t13,
                                                  'data-form-field': true,
                                                  id: `input-${t13}-for-${e12.id}-provider`,
                                                  type:
                                                    e12.formFields[t13].type ??
                                                    'text',
                                                  placeholder:
                                                    e12.formFields[t13]
                                                      .placeholder ?? '',
                                                  ...e12.formFields[t13]
                                                })
                                              ]
                                            },
                                            `input-group-${e12.id}`
                                          )
                                        ),
                                        ic('button', {
                                          id: `submitButton-${e12.id}`,
                                          type: 'submit',
                                          tabIndex: 0,
                                          children: ['Sign in with ', e12.name]
                                        })
                                      ]
                                    }),
                                  ('email' === e12.type ||
                                    'credentials' === e12.type ||
                                    'webauthn' === e12.type) &&
                                    i12 + 1 < r11.length &&
                                    ic('hr', {})
                                ]
                              },
                              e12.id
                            );
                          })
                        ]
                      }),
                      l3 &&
                        ic(nN, {
                          children: ic('script', {
                            dangerouslySetInnerHTML: {
                              __html: `
const currentURL = window.location.href;
const authURL = currentURL.substring(0, currentURL.lastIndexOf('/'));
(${iu})(authURL, "${l3}");
`
                            }
                          })
                        })
                    ]
                  });
                })({
                  csrfToken: e10.csrfToken,
                  providers: e10.providers?.filter(
                    (e11) =>
                      ['email', 'oauth', 'oidc'].includes(e11.type) ||
                      ('credentials' === e11.type && e11.credentials) ||
                      ('webauthn' === e11.type && e11.formFields) ||
                      false
                  ),
                  callbackUrl: e10.callbackUrl,
                  theme: e10.theme,
                  error: s2,
                  ...n10
                }),
                title: 'Sign In',
                headTags: c2
              });
            },
            signout: () =>
              o10?.signOut
                ? { redirect: o10.signOut, cookies: i10 }
                : ih({
                    cookies: i10,
                    theme: r10,
                    html: (function (e11) {
                      let { url: t11, csrfToken: r11, theme: n11 } = e11;
                      return ic('div', {
                        className: 'signout',
                        children: [
                          n11?.brandColor &&
                            ic('style', {
                              dangerouslySetInnerHTML: {
                                __html: `
        :root {
          --brand-color: ${n11.brandColor}
        }
      `
                              }
                            }),
                          n11?.buttonText &&
                            ic('style', {
                              dangerouslySetInnerHTML: {
                                __html: `
        :root {
          --button-text-color: ${n11.buttonText}
        }
      `
                              }
                            }),
                          ic('div', {
                            className: 'card',
                            children: [
                              n11?.logo &&
                                ic('img', {
                                  src: n11.logo,
                                  alt: 'Logo',
                                  className: 'logo'
                                }),
                              ic('h1', { children: 'Signout' }),
                              ic('p', {
                                children: 'Are you sure you want to sign out?'
                              }),
                              ic('form', {
                                action: t11?.toString(),
                                method: 'POST',
                                children: [
                                  ic('input', {
                                    type: 'hidden',
                                    name: 'csrfToken',
                                    value: r11
                                  }),
                                  ic('button', {
                                    id: 'submitButton',
                                    type: 'submit',
                                    children: 'Sign out'
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      });
                    })({ csrfToken: e10.csrfToken, url: t10, theme: r10 }),
                    title: 'Sign Out'
                  }),
            verifyRequest: (e11) =>
              o10?.verifyRequest
                ? { redirect: o10.verifyRequest, cookies: i10 }
                : ih({
                    cookies: i10,
                    theme: r10,
                    html: (function (e12) {
                      let { url: t11, theme: r11 } = e12;
                      return ic('div', {
                        className: 'verify-request',
                        children: [
                          r11.brandColor &&
                            ic('style', {
                              dangerouslySetInnerHTML: {
                                __html: `
        :root {
          --brand-color: ${r11.brandColor}
        }
      `
                              }
                            }),
                          ic('div', {
                            className: 'card',
                            children: [
                              r11.logo &&
                                ic('img', {
                                  src: r11.logo,
                                  alt: 'Logo',
                                  className: 'logo'
                                }),
                              ic('h1', { children: 'Check your email' }),
                              ic('p', {
                                children:
                                  'A sign in link has been sent to your email address.'
                              }),
                              ic('p', {
                                children: ic('a', {
                                  className: 'site',
                                  href: t11.origin,
                                  children: t11.host
                                })
                              })
                            ]
                          })
                        ]
                      });
                    })({ url: t10, theme: r10, ...e11 }),
                    title: 'Verify Request'
                  }),
            error: (e11) =>
              o10?.error
                ? {
                    redirect: `${o10.error}${
                      o10.error.includes('?') ? '&' : '?'
                    }error=${e11}`,
                    cookies: i10
                  }
                : ih({
                    cookies: i10,
                    theme: r10,
                    ...(function (e12) {
                      let {
                          url: t11,
                          error: r11 = 'default',
                          theme: n11
                        } = e12,
                        i11 = `${t11}/signin`,
                        o11 = {
                          default: {
                            status: 200,
                            heading: 'Error',
                            message: ic('p', {
                              children: ic('a', {
                                className: 'site',
                                href: t11?.origin,
                                children: t11?.host
                              })
                            })
                          },
                          Configuration: {
                            status: 500,
                            heading: 'Server error',
                            message: ic('div', {
                              children: [
                                ic('p', {
                                  children:
                                    'There is a problem with the server configuration.'
                                }),
                                ic('p', {
                                  children:
                                    'Check the server logs for more information.'
                                })
                              ]
                            })
                          },
                          AccessDenied: {
                            status: 403,
                            heading: 'Access Denied',
                            message: ic('div', {
                              children: [
                                ic('p', {
                                  children:
                                    'You do not have permission to sign in.'
                                }),
                                ic('p', {
                                  children: ic('a', {
                                    className: 'button',
                                    href: i11,
                                    children: 'Sign in'
                                  })
                                })
                              ]
                            })
                          },
                          Verification: {
                            status: 403,
                            heading: 'Unable to sign in',
                            message: ic('div', {
                              children: [
                                ic('p', {
                                  children:
                                    'The sign in link is no longer valid.'
                                }),
                                ic('p', {
                                  children:
                                    'It may have been used already or it may have expired.'
                                })
                              ]
                            }),
                            signin: ic('a', {
                              className: 'button',
                              href: i11,
                              children: 'Sign in'
                            })
                          }
                        },
                        {
                          status: a3,
                          heading: s2,
                          message: l2,
                          signin: c2
                        } = o11[r11] ?? o11.default;
                      return {
                        status: a3,
                        html: ic('div', {
                          className: 'error',
                          children: [
                            n11?.brandColor &&
                              ic('style', {
                                dangerouslySetInnerHTML: {
                                  __html: `
        :root {
          --brand-color: ${n11?.brandColor}
        }
      `
                                }
                              }),
                            ic('div', {
                              className: 'card',
                              children: [
                                n11?.logo &&
                                  ic('img', {
                                    src: n11?.logo,
                                    alt: 'Logo',
                                    className: 'logo'
                                  }),
                                ic('h1', { children: s2 }),
                                ic('div', {
                                  className: 'message',
                                  children: l2
                                }),
                                c2
                              ]
                            })
                          ]
                        })
                      };
                    })({ url: t10, theme: r10, error: e11 }),
                    title: 'Error'
                  })
          };
        }
        function im(e10, t10 = Date.now()) {
          return new Date(t10 + 1e3 * e10);
        }
        async function iy(e10, t10, r10, n10) {
          if (!r10?.providerAccountId || !r10.type)
            throw Error('Missing or invalid provider account');
          if (!['email', 'oauth', 'oidc', 'webauthn'].includes(r10.type))
            throw Error('Provider not supported');
          let {
            adapter: i10,
            jwt: o10,
            events: a2,
            session: { strategy: s2, generateSessionToken: l2 }
          } = n10;
          if (!i10) return { user: t10, account: r10 };
          let c2 = r10,
            {
              createUser: u2,
              updateUser: d2,
              getUser: p2,
              getUserByAccount: h2,
              getUserByEmail: f2,
              linkAccount: g2,
              createSession: m2,
              getSessionAndUser: y2,
              deleteSession: w2
            } = i10,
            b2 = null,
            v2 = null,
            _2 = false,
            S2 = 'jwt' === s2;
          if (e10) {
            if (S2)
              try {
                let t11 = n10.cookies.sessionToken.name;
                (b2 = await o10.decode({ ...o10, token: e10, salt: t11 })) &&
                  'sub' in b2 &&
                  b2.sub &&
                  (v2 = await p2(b2.sub));
              } catch {}
            else {
              let t11 = await y2(e10);
              t11 && ((b2 = t11.session), (v2 = t11.user));
            }
          }
          if ('email' === c2.type) {
            let r11 = await f2(t10.email);
            return (
              r11
                ? (v2?.id !== r11.id && !S2 && e10 && (await w2(e10)),
                  (v2 = await d2({ id: r11.id, emailVerified: new Date() })),
                  await a2.updateUser?.({ user: v2 }))
                : ((v2 = await u2({ ...t10, emailVerified: new Date() })),
                  await a2.createUser?.({ user: v2 }),
                  (_2 = true)),
              {
                session: (b2 = S2
                  ? {}
                  : await m2({
                      sessionToken: l2(),
                      userId: v2.id,
                      expires: im(n10.session.maxAge)
                    })),
                user: v2,
                isNewUser: _2
              }
            );
          }
          if ('webauthn' === c2.type) {
            let e11 = await h2({
              providerAccountId: c2.providerAccountId,
              provider: c2.provider
            });
            if (e11) {
              if (v2) {
                if (e11.id === v2.id) {
                  let e12 = { ...c2, userId: v2.id };
                  return { session: b2, user: v2, isNewUser: _2, account: e12 };
                }
                throw new te(
                  'The account is already associated with another user',
                  { provider: c2.provider }
                );
              }
              b2 = S2
                ? {}
                : await m2({
                    sessionToken: l2(),
                    userId: e11.id,
                    expires: im(n10.session.maxAge)
                  });
              let t11 = { ...c2, userId: e11.id };
              return { session: b2, user: e11, isNewUser: _2, account: t11 };
            }
            {
              if (v2) {
                await g2({ ...c2, userId: v2.id }),
                  await a2.linkAccount?.({
                    user: v2,
                    account: c2,
                    profile: t10
                  });
                let e13 = { ...c2, userId: v2.id };
                return { session: b2, user: v2, isNewUser: _2, account: e13 };
              }
              if (t10.email ? await f2(t10.email) : null)
                throw new te(
                  'Another account already exists with the same e-mail address',
                  { provider: c2.provider }
                );
              (v2 = await u2({ ...t10 })),
                await a2.createUser?.({ user: v2 }),
                await g2({ ...c2, userId: v2.id }),
                await a2.linkAccount?.({ user: v2, account: c2, profile: t10 }),
                (b2 = S2
                  ? {}
                  : await m2({
                      sessionToken: l2(),
                      userId: v2.id,
                      expires: im(n10.session.maxAge)
                    }));
              let e12 = { ...c2, userId: v2.id };
              return { session: b2, user: v2, isNewUser: true, account: e12 };
            }
          }
          let k2 = await h2({
            providerAccountId: c2.providerAccountId,
            provider: c2.provider
          });
          if (k2) {
            if (v2) {
              if (k2.id === v2.id)
                return { session: b2, user: v2, isNewUser: _2 };
              throw new eF(
                'The account is already associated with another user',
                { provider: c2.provider }
              );
            }
            return {
              session: (b2 = S2
                ? {}
                : await m2({
                    sessionToken: l2(),
                    userId: k2.id,
                    expires: im(n10.session.maxAge)
                  })),
              user: k2,
              isNewUser: _2
            };
          }
          {
            let { provider: e11 } = n10,
              {
                type: r11,
                provider: i11,
                providerAccountId: o11,
                userId: s3,
                ...d3
              } = c2;
            if (
              ((c2 = Object.assign(e11.account(d3) ?? {}, {
                providerAccountId: o11,
                provider: i11,
                type: r11,
                userId: s3
              })),
              v2)
            )
              return (
                await g2({ ...c2, userId: v2.id }),
                await a2.linkAccount?.({ user: v2, account: c2, profile: t10 }),
                { session: b2, user: v2, isNewUser: _2 }
              );
            let p3 = t10.email ? await f2(t10.email) : null;
            if (p3) {
              let e12 = n10.provider;
              if (e12?.allowDangerousEmailAccountLinking) v2 = p3;
              else
                throw new eF(
                  'Another account already exists with the same e-mail address',
                  { provider: c2.provider }
                );
            } else v2 = await u2({ ...t10, emailVerified: null });
            return (
              await a2.createUser?.({ user: v2 }),
              await g2({ ...c2, userId: v2.id }),
              await a2.linkAccount?.({ user: v2, account: c2, profile: t10 }),
              {
                session: (b2 = S2
                  ? {}
                  : await m2({
                      sessionToken: l2(),
                      userId: v2.id,
                      expires: im(n10.session.maxAge)
                    })),
                user: v2,
                isNewUser: true
              }
            );
          }
        }
        function iw(e10, t10) {
          if (null == e10) return false;
          try {
            return (
              e10 instanceof t10 ||
              Object.getPrototypeOf(e10)[Symbol.toStringTag] ===
                t10.prototype[Symbol.toStringTag]
            );
          } catch {
            return false;
          }
        }
        ('undefined' != typeof navigator &&
          navigator.userAgent?.startsWith?.('Mozilla/5.0 ')) ||
          (i = 'oauth4webapi/v2.10.4');
        let ib = Symbol(),
          iv = Symbol(),
          i_ = Symbol(),
          iS = Symbol(),
          ik = new TextEncoder(),
          ix = new TextDecoder();
        function iE(e10) {
          return 'string' == typeof e10 ? ik.encode(e10) : ix.decode(e10);
        }
        function iA(e10) {
          return 'string' == typeof e10
            ? (function (e11) {
                try {
                  let t10 = atob(
                      e11
                        .replace(/-/g, '+')
                        .replace(/_/g, '/')
                        .replace(/\s/g, '')
                    ),
                    r10 = new Uint8Array(t10.length);
                  for (let e12 = 0; e12 < t10.length; e12++)
                    r10[e12] = t10.charCodeAt(e12);
                  return r10;
                } catch (e12) {
                  throw new iR(
                    'The input to be decoded is not correctly encoded.',
                    { cause: e12 }
                  );
                }
              })(e10)
            : (function (e11) {
                e11 instanceof ArrayBuffer && (e11 = new Uint8Array(e11));
                let t10 = [];
                for (let r10 = 0; r10 < e11.byteLength; r10 += 32768)
                  t10.push(
                    String.fromCharCode.apply(
                      null,
                      e11.subarray(r10, r10 + 32768)
                    )
                  );
                return btoa(t10.join(''))
                  .replace(/=/g, '')
                  .replace(/\+/g, '-')
                  .replace(/\//g, '_');
              })(e10);
        }
        class iT {
          constructor(e10) {
            (this.cache = /* @__PURE__ */ new Map()),
              (this._cache = /* @__PURE__ */ new Map()),
              (this.maxSize = e10);
          }
          get(e10) {
            let t10 = this.cache.get(e10);
            return (
              t10 ||
              ((t10 = this._cache.get(e10))
                ? (this.update(e10, t10), t10)
                : void 0)
            );
          }
          has(e10) {
            return this.cache.has(e10) || this._cache.has(e10);
          }
          set(e10, t10) {
            return (
              this.cache.has(e10)
                ? this.cache.set(e10, t10)
                : this.update(e10, t10),
              this
            );
          }
          delete(e10) {
            return this.cache.has(e10)
              ? this.cache.delete(e10)
              : !!this._cache.has(e10) && this._cache.delete(e10);
          }
          update(e10, t10) {
            this.cache.set(e10, t10),
              this.cache.size >= this.maxSize &&
                ((this._cache = this.cache),
                (this.cache = /* @__PURE__ */ new Map()));
          }
        }
        class iP extends Error {
          constructor(e10) {
            super(e10 ?? 'operation not supported'),
              (this.name = this.constructor.name),
              Error.captureStackTrace?.(this, this.constructor);
          }
        }
        class iC extends Error {
          constructor(e10, t10) {
            super(e10, t10),
              (this.name = this.constructor.name),
              Error.captureStackTrace?.(this, this.constructor);
          }
        }
        let iR = iC,
          iO = new iT(100);
        function iI(e10) {
          return e10 instanceof CryptoKey;
        }
        function iU(e10) {
          return iI(e10) && 'private' === e10.type;
        }
        function iN(e10) {
          try {
            let t10 = e10.headers.get('dpop-nonce');
            t10 && iO.set(new URL(e10.url).origin, t10);
          } catch {}
          return e10;
        }
        function iM(e10) {
          return !(
            null === e10 ||
            'object' != typeof e10 ||
            Array.isArray(e10)
          );
        }
        function iL(e10) {
          iw(e10, Headers) && (e10 = Object.fromEntries(e10.entries()));
          let t10 = new Headers(e10);
          if (
            (i && !t10.has('user-agent') && t10.set('user-agent', i),
            t10.has('authorization'))
          )
            throw TypeError(
              '"options.headers" must not include the "authorization" header name'
            );
          if (t10.has('dpop'))
            throw TypeError(
              '"options.headers" must not include the "dpop" header name'
            );
          return t10;
        }
        function ij(e10) {
          if (
            ('function' == typeof e10 && (e10 = e10()),
            !(e10 instanceof AbortSignal))
          )
            throw TypeError(
              '"options.signal" must return or be an instance of AbortSignal'
            );
          return e10;
        }
        async function i$(e10, t10) {
          if (!(e10 instanceof URL))
            throw TypeError('"issuerIdentifier" must be an instance of URL');
          if ('https:' !== e10.protocol && 'http:' !== e10.protocol)
            throw TypeError('"issuer.protocol" must be "https:" or "http:"');
          let r10 = new URL(e10.href);
          switch (t10?.algorithm) {
            case void 0:
            case 'oidc':
              r10.pathname =
                `${r10.pathname}/.well-known/openid-configuration`.replace(
                  '//',
                  '/'
                );
              break;
            case 'oauth2':
              '/' === r10.pathname
                ? (r10.pathname = '.well-known/oauth-authorization-server')
                : (r10.pathname =
                    `.well-known/oauth-authorization-server/${r10.pathname}`.replace(
                      '//',
                      '/'
                    ));
              break;
            default:
              throw TypeError(
                '"options.algorithm" must be "oidc" (default), or "oauth2"'
              );
          }
          let n10 = iL(t10?.headers);
          return (
            n10.set('accept', 'application/json'),
            (t10?.[i_] || fetch)(r10.href, {
              headers: Object.fromEntries(n10.entries()),
              method: 'GET',
              redirect: 'manual',
              signal: t10?.signal ? ij(t10.signal) : null
            }).then(iN)
          );
        }
        function iD(e10) {
          return 'string' == typeof e10 && 0 !== e10.length;
        }
        async function iH(e10, t10) {
          let r10;
          if (!(e10 instanceof URL))
            throw TypeError('"expectedIssuer" must be an instance of URL');
          if (!iw(t10, Response))
            throw TypeError('"response" must be an instance of Response');
          if (200 !== t10.status)
            throw new iR(
              '"response" is not a conform Authorization Server Metadata response'
            );
          oy(t10);
          try {
            r10 = await t10.json();
          } catch (e11) {
            throw new iR('failed to parse "response" body as JSON', {
              cause: e11
            });
          }
          if (!iM(r10))
            throw new iR('"response" body must be a top level object');
          if (!iD(r10.issuer))
            throw new iR(
              '"response" body "issuer" property must be a non-empty string'
            );
          if (new URL(r10.issuer).href !== e10.href)
            throw new iR(
              '"response" body "issuer" does not match "expectedIssuer"'
            );
          return r10;
        }
        function iW() {
          return iA(crypto.getRandomValues(new Uint8Array(32)));
        }
        async function iK(e10) {
          if (!iD(e10))
            throw TypeError('"codeVerifier" must be a non-empty string');
          return iA(await crypto.subtle.digest('SHA-256', iE(e10)));
        }
        function iB(e10) {
          return encodeURIComponent(e10).replace(/%20/g, '+');
        }
        function iV(e10) {
          switch (e10.algorithm.name) {
            case 'RSA-PSS':
              return (function (e11) {
                switch (e11.algorithm.hash.name) {
                  case 'SHA-256':
                    return 'PS256';
                  case 'SHA-384':
                    return 'PS384';
                  case 'SHA-512':
                    return 'PS512';
                  default:
                    throw new iP('unsupported RsaHashedKeyAlgorithm hash name');
                }
              })(e10);
            case 'RSASSA-PKCS1-v1_5':
              return (function (e11) {
                switch (e11.algorithm.hash.name) {
                  case 'SHA-256':
                    return 'RS256';
                  case 'SHA-384':
                    return 'RS384';
                  case 'SHA-512':
                    return 'RS512';
                  default:
                    throw new iP('unsupported RsaHashedKeyAlgorithm hash name');
                }
              })(e10);
            case 'ECDSA':
              return (function (e11) {
                switch (e11.algorithm.namedCurve) {
                  case 'P-256':
                    return 'ES256';
                  case 'P-384':
                    return 'ES384';
                  case 'P-521':
                    return 'ES512';
                  default:
                    throw new iP('unsupported EcKeyAlgorithm namedCurve');
                }
              })(e10);
            case 'Ed25519':
            case 'Ed448':
              return 'EdDSA';
            default:
              throw new iP('unsupported CryptoKey algorithm name');
          }
        }
        function iq(e10) {
          let t10 = e10?.[ib];
          return 'number' == typeof t10 && Number.isFinite(t10) ? t10 : 0;
        }
        function iJ(e10) {
          let t10 = e10?.[iv];
          return 'number' == typeof t10 &&
            Number.isFinite(t10) &&
            -1 !== Math.sign(t10)
            ? t10
            : 30;
        }
        function iF() {
          return Math.floor(Date.now() / 1e3);
        }
        async function iz(e10, t10, r10, n10) {
          return i1(
            { alg: iV(r10), kid: n10 },
            (function (e11, t11) {
              let r11 = iF() + iq(t11);
              return {
                jti: iW(),
                aud: [e11.issuer, e11.token_endpoint],
                exp: r11 + 60,
                iat: r11,
                nbf: r11,
                iss: t11.client_id,
                sub: t11.client_id
              };
            })(e10, t10),
            r10
          );
        }
        function iG(e10) {
          if ('object' != typeof e10 || null === e10)
            throw TypeError('"as" must be an object');
          if (!iD(e10.issuer))
            throw TypeError('"as.issuer" property must be a non-empty string');
          return true;
        }
        function iX(e10) {
          if ('object' != typeof e10 || null === e10)
            throw TypeError('"client" must be an object');
          if (!iD(e10.client_id))
            throw TypeError(
              '"client.client_id" property must be a non-empty string'
            );
          return true;
        }
        function iY(e10) {
          if (!iD(e10))
            throw TypeError(
              '"client.client_secret" property must be a non-empty string'
            );
          return e10;
        }
        function iZ(e10, t10) {
          if (void 0 !== t10)
            throw TypeError(
              `"options.clientPrivateKey" property must not be provided when ${e10} client authentication method is used.`
            );
        }
        function iQ(e10, t10) {
          if (void 0 !== t10)
            throw TypeError(
              `"client.client_secret" property must not be provided when ${e10} client authentication method is used.`
            );
        }
        async function i0(e10, t10, r10, n10, i10) {
          switch (
            (r10.delete('client_secret'),
            r10.delete('client_assertion_type'),
            r10.delete('client_assertion'),
            t10.token_endpoint_auth_method)
          ) {
            case void 0:
            case 'client_secret_basic':
              iZ('client_secret_basic', i10),
                n10.set(
                  'authorization',
                  (function (e11, t11) {
                    let r11 = iB(e11),
                      n11 = iB(t11),
                      i11 = btoa(`${r11}:${n11}`);
                    return `Basic ${i11}`;
                  })(t10.client_id, iY(t10.client_secret))
                );
              break;
            case 'client_secret_post':
              iZ('client_secret_post', i10),
                r10.set('client_id', t10.client_id),
                r10.set('client_secret', iY(t10.client_secret));
              break;
            case 'private_key_jwt': {
              if ((iQ('private_key_jwt', t10.client_secret), void 0 === i10))
                throw TypeError(
                  '"options.clientPrivateKey" must be provided when "client.token_endpoint_auth_method" is "private_key_jwt"'
                );
              let { key: n11, kid: o10 } = (function (e11) {
                if (e11 instanceof CryptoKey) return { key: e11 };
                if (!(e11?.key instanceof CryptoKey)) return {};
                if (void 0 !== e11.kid && !iD(e11.kid))
                  throw TypeError('"kid" must be a non-empty string');
                return { key: e11.key, kid: e11.kid };
              })(i10);
              if (!iU(n11))
                throw TypeError(
                  '"options.clientPrivateKey.key" must be a private CryptoKey'
                );
              r10.set('client_id', t10.client_id),
                r10.set(
                  'client_assertion_type',
                  'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'
                ),
                r10.set('client_assertion', await iz(e10, t10, n11, o10));
              break;
            }
            case 'tls_client_auth':
            case 'self_signed_tls_client_auth':
            case 'none':
              iQ(t10.token_endpoint_auth_method, t10.client_secret),
                iZ(t10.token_endpoint_auth_method, i10),
                r10.set('client_id', t10.client_id);
              break;
            default:
              throw new iP('unsupported client token_endpoint_auth_method');
          }
        }
        async function i1(e10, t10, r10) {
          if (!r10.usages.includes('sign'))
            throw TypeError(
              'CryptoKey instances used for signing assertions must include "sign" in their "usages"'
            );
          let n10 = `${iA(iE(JSON.stringify(e10)))}.${iA(
              iE(JSON.stringify(t10))
            )}`,
            i10 = iA(await crypto.subtle.sign(ov(r10), r10, iE(n10)));
          return `${n10}.${i10}`;
        }
        async function i2(e10, t10, r10, n10, i10, o10) {
          let {
            privateKey: a2,
            publicKey: s2,
            nonce: l2 = iO.get(r10.origin)
          } = t10;
          if (!iU(a2))
            throw TypeError('"DPoP.privateKey" must be a private CryptoKey');
          if (!(iI(s2) && 'public' === s2.type))
            throw TypeError('"DPoP.publicKey" must be a public CryptoKey');
          if (void 0 !== l2 && !iD(l2))
            throw TypeError(
              '"DPoP.nonce" must be a non-empty string or undefined'
            );
          if (!s2.extractable)
            throw TypeError('"DPoP.publicKey.extractable" must be true');
          let c2 = iF() + i10,
            u2 = await i1(
              { alg: iV(a2), typ: 'dpop+jwt', jwk: await i5(s2) },
              {
                iat: c2,
                jti: iW(),
                htm: n10,
                nonce: l2,
                htu: `${r10.origin}${r10.pathname}`,
                ath: o10
                  ? iA(await crypto.subtle.digest('SHA-256', iE(o10)))
                  : void 0
              },
              a2
            );
          e10.set('dpop', u2);
        }
        async function i3(e10) {
          let {
              kty: t10,
              e: r10,
              n: n10,
              x: i10,
              y: a2,
              crv: s2
            } = await crypto.subtle.exportKey('jwk', e10),
            l2 = { kty: t10, e: r10, n: n10, x: i10, y: a2, crv: s2 };
          return o.set(e10, l2), l2;
        }
        async function i5(e10) {
          return (
            o || (o = /* @__PURE__ */ new WeakMap()), o.get(e10) || i3(e10)
          );
        }
        function i6(e10, t10, r10) {
          if ('string' != typeof e10) {
            if (r10?.[iS])
              throw TypeError(
                `"as.mtls_endpoint_aliases.${t10}" must be a string`
              );
            throw TypeError(`"as.${t10}" must be a string`);
          }
          return new URL(e10);
        }
        function i4(e10, t10, r10) {
          return r10?.[iS] &&
            e10.mtls_endpoint_aliases &&
            t10 in e10.mtls_endpoint_aliases
            ? i6(e10.mtls_endpoint_aliases[t10], t10, r10)
            : i6(e10[t10], t10);
        }
        function i8(e10) {
          return (
            !('object' != typeof e10 || Array.isArray(e10)) &&
            null !== e10 &&
            void 0 !== e10.error
          );
        }
        let i9 = /((?:,|, )?[0-9a-zA-Z!#$%&'*+-.^_`|~]+=)/,
          i7 = /(?:^|, ?)([0-9a-zA-Z!#$%&'*+\-.^_`|~]+)(?=$|[ ,])/g;
        async function oe(e10, t10, r10, n10, i10, o10) {
          if (!iD(e10))
            throw TypeError('"accessToken" must be a non-empty string');
          if (!(r10 instanceof URL))
            throw TypeError('"url" must be an instance of URL');
          return (
            (n10 = iL(n10)),
            o10?.DPoP === void 0
              ? n10.set('authorization', `Bearer ${e10}`)
              : (await i2(
                  n10,
                  o10.DPoP,
                  r10,
                  'GET',
                  iq({ [ib]: o10?.[ib] }),
                  e10
                ),
                n10.set('authorization', `DPoP ${e10}`)),
            (o10?.[i_] || fetch)(r10.href, {
              body: i10,
              headers: Object.fromEntries(n10.entries()),
              method: t10,
              redirect: 'manual',
              signal: o10?.signal ? ij(o10.signal) : null
            }).then(iN)
          );
        }
        async function ot(e10, t10, r10, n10) {
          iG(e10), iX(t10);
          let i10 = i4(e10, 'userinfo_endpoint', n10),
            o10 = iL(n10?.headers);
          return (
            t10.userinfo_signed_response_alg
              ? o10.set('accept', 'application/jwt')
              : (o10.set('accept', 'application/json'),
                o10.append('accept', 'application/jwt')),
            oe(r10, 'GET', i10, o10, null, { ...n10, [ib]: iq(t10) })
          );
        }
        async function or(e10, t10, r10, n10, i10, o10, a2) {
          return (
            await i0(e10, t10, i10, o10, a2?.clientPrivateKey),
            o10.set(
              'content-type',
              'application/x-www-form-urlencoded;charset=UTF-8'
            ),
            (a2?.[i_] || fetch)(n10.href, {
              body: i10,
              headers: Object.fromEntries(o10.entries()),
              method: r10,
              redirect: 'manual',
              signal: a2?.signal ? ij(a2.signal) : null
            }).then(iN)
          );
        }
        async function on(e10, t10, r10, n10, i10) {
          let o10 = i4(e10, 'token_endpoint', i10);
          n10.set('grant_type', r10);
          let a2 = iL(i10?.headers);
          return (
            a2.set('accept', 'application/json'),
            i10?.DPoP !== void 0 &&
              (await i2(a2, i10.DPoP, o10, 'POST', iq(t10))),
            or(e10, t10, 'POST', o10, n10, a2, i10)
          );
        }
        Symbol();
        let oi = /* @__PURE__ */ new WeakMap();
        function oo(e10) {
          if (!e10.id_token) return;
          let t10 = oi.get(e10);
          if (!t10)
            throw TypeError(
              '"ref" was already garbage collected or did not resolve from the proper sources'
            );
          return t10;
        }
        async function oa(e10, t10, r10, n10 = false, i10 = false) {
          let o10;
          if ((iG(e10), iX(t10), !iw(r10, Response)))
            throw TypeError('"response" must be an instance of Response');
          if (200 !== r10.status) {
            let e11;
            if ((e11 = await ow(r10))) return e11;
            throw new iR('"response" is not a conform Token Endpoint response');
          }
          oy(r10);
          try {
            o10 = await r10.json();
          } catch (e11) {
            throw new iR('failed to parse "response" body as JSON', {
              cause: e11
            });
          }
          if (!iM(o10))
            throw new iR('"response" body must be a top level object');
          if (!iD(o10.access_token))
            throw new iR(
              '"response" body "access_token" property must be a non-empty string'
            );
          if (!iD(o10.token_type))
            throw new iR(
              '"response" body "token_type" property must be a non-empty string'
            );
          if (
            ((o10.token_type = o10.token_type.toLowerCase()),
            'dpop' !== o10.token_type && 'bearer' !== o10.token_type)
          )
            throw new iP('unsupported `token_type` value');
          if (
            void 0 !== o10.expires_in &&
            ('number' != typeof o10.expires_in || o10.expires_in <= 0)
          )
            throw new iR(
              '"response" body "expires_in" property must be a positive number'
            );
          if (!i10 && void 0 !== o10.refresh_token && !iD(o10.refresh_token))
            throw new iR(
              '"response" body "refresh_token" property must be a non-empty string'
            );
          if (void 0 !== o10.scope && 'string' != typeof o10.scope)
            throw new iR('"response" body "scope" property must be a string');
          if (!n10) {
            if (void 0 !== o10.id_token && !iD(o10.id_token))
              throw new iR(
                '"response" body "id_token" property must be a non-empty string'
              );
            if (o10.id_token) {
              let { claims: r11 } = await oS(
                o10.id_token,
                ok.bind(
                  void 0,
                  t10.id_token_signed_response_alg,
                  e10.id_token_signing_alg_values_supported
                ),
                o_,
                iq(t10),
                iJ(t10)
              )
                .then(op.bind(void 0, ['aud', 'exp', 'iat', 'iss', 'sub']))
                .then(ol.bind(void 0, e10.issuer))
                .then(os.bind(void 0, t10.client_id));
              if (
                Array.isArray(r11.aud) &&
                1 !== r11.aud.length &&
                r11.azp !== t10.client_id
              )
                throw new iR(
                  'unexpected ID Token "azp" (authorized party) claim value'
                );
              if (t10.require_auth_time && 'number' != typeof r11.auth_time)
                throw new iR(
                  'unexpected ID Token "auth_time" (authentication time) claim value'
                );
              oi.set(o10, r11);
            }
          }
          return o10;
        }
        function os(e10, t10) {
          if (Array.isArray(t10.claims.aud)) {
            if (!t10.claims.aud.includes(e10))
              throw new iR('unexpected JWT "aud" (audience) claim value');
          } else if (t10.claims.aud !== e10)
            throw new iR('unexpected JWT "aud" (audience) claim value');
          return t10;
        }
        function ol(e10, t10) {
          if (t10.claims.iss !== e10)
            throw new iR('unexpected JWT "iss" (issuer) claim value');
          return t10;
        }
        let oc = /* @__PURE__ */ new WeakSet();
        async function ou(e10, t10, r10, n10, i10, o10) {
          if ((iG(e10), iX(t10), !oc.has(r10)))
            throw TypeError(
              '"callbackParameters" must be an instance of URLSearchParams obtained from "validateAuthResponse()", or "validateJwtAuthResponse()'
            );
          if (!iD(n10))
            throw TypeError('"redirectUri" must be a non-empty string');
          if (!iD(i10))
            throw TypeError('"codeVerifier" must be a non-empty string');
          let a2 = ox(r10, 'code');
          if (!a2)
            throw new iR('no authorization code in "callbackParameters"');
          let s2 = new URLSearchParams(o10?.additionalParameters);
          return (
            s2.set('redirect_uri', n10),
            s2.set('code_verifier', i10),
            s2.set('code', a2),
            on(e10, t10, 'authorization_code', s2, o10)
          );
        }
        let od = {
          aud: 'audience',
          c_hash: 'code hash',
          client_id: 'client id',
          exp: 'expiration time',
          iat: 'issued at',
          iss: 'issuer',
          jti: 'jwt id',
          nonce: 'nonce',
          s_hash: 'state hash',
          sub: 'subject',
          ath: 'access token hash',
          htm: 'http method',
          htu: 'http uri',
          cnf: 'confirmation'
        };
        function op(e10, t10) {
          for (let r10 of e10)
            if (void 0 === t10.claims[r10])
              throw new iR(`JWT "${r10}" (${od[r10]}) claim missing`);
          return t10;
        }
        let oh = Symbol(),
          of = Symbol();
        async function og(e10, t10, r10, n10, i10) {
          let o10 = await oa(e10, t10, r10);
          if (i8(o10)) return o10;
          if (!iD(o10.id_token))
            throw new iR(
              '"response" body "id_token" property must be a non-empty string'
            );
          i10 ?? (i10 = t10.default_max_age ?? of);
          let a2 = oo(o10);
          if ((t10.require_auth_time || i10 !== of) && void 0 === a2.auth_time)
            throw new iR(
              'ID Token "auth_time" (authentication time) claim missing'
            );
          if (i10 !== of) {
            if ('number' != typeof i10 || i10 < 0)
              throw TypeError(
                '"options.max_age" must be a non-negative number'
              );
            let e11 = iF() + iq(t10),
              r11 = iJ(t10);
            if (a2.auth_time + i10 < e11 - r11)
              throw new iR(
                'too much time has elapsed since the last End-User authentication'
              );
          }
          switch (n10) {
            case void 0:
            case oh:
              if (void 0 !== a2.nonce)
                throw new iR('unexpected ID Token "nonce" claim value');
              break;
            default:
              if (!iD(n10))
                throw TypeError('"expectedNonce" must be a non-empty string');
              if (void 0 === a2.nonce)
                throw new iR('ID Token "nonce" claim missing');
              if (a2.nonce !== n10)
                throw new iR('unexpected ID Token "nonce" claim value');
          }
          return o10;
        }
        async function om(e10, t10, r10) {
          let n10 = await oa(e10, t10, r10, true);
          if (i8(n10)) return n10;
          if (void 0 !== n10.id_token) {
            if ('string' == typeof n10.id_token && n10.id_token.length)
              throw new iR(
                'Unexpected ID Token returned, use processAuthorizationCodeOpenIDResponse() for OpenID Connect callback processing'
              );
            delete n10.id_token;
          }
          return n10;
        }
        function oy(e10) {
          if (e10.bodyUsed)
            throw TypeError('"response" body has been used already');
        }
        async function ow(e10) {
          if (e10.status > 399 && e10.status < 500) {
            oy(e10);
            try {
              let t10 = await e10.json();
              if (iM(t10) && 'string' == typeof t10.error && t10.error.length)
                return (
                  void 0 !== t10.error_description &&
                    'string' != typeof t10.error_description &&
                    delete t10.error_description,
                  void 0 !== t10.error_uri &&
                    'string' != typeof t10.error_uri &&
                    delete t10.error_uri,
                  void 0 !== t10.algs &&
                    'string' != typeof t10.algs &&
                    delete t10.algs,
                  void 0 !== t10.scope &&
                    'string' != typeof t10.scope &&
                    delete t10.scope,
                  t10
                );
            } catch {}
          }
        }
        function ob(e10) {
          if ('number' != typeof e10.modulusLength || e10.modulusLength < 2048)
            throw new iR(
              `${e10.name} modulusLength must be at least 2048 bits`
            );
        }
        function ov(e10) {
          switch (e10.algorithm.name) {
            case 'ECDSA':
              return {
                name: e10.algorithm.name,
                hash: (function (e11) {
                  switch (e11) {
                    case 'P-256':
                      return 'SHA-256';
                    case 'P-384':
                      return 'SHA-384';
                    case 'P-521':
                      return 'SHA-512';
                    default:
                      throw new iP();
                  }
                })(e10.algorithm.namedCurve)
              };
            case 'RSA-PSS':
              switch ((ob(e10.algorithm), e10.algorithm.hash.name)) {
                case 'SHA-256':
                case 'SHA-384':
                case 'SHA-512':
                  return {
                    name: e10.algorithm.name,
                    saltLength:
                      parseInt(e10.algorithm.hash.name.slice(-3), 10) >> 3
                  };
                default:
                  throw new iP();
              }
            case 'RSASSA-PKCS1-v1_5':
              return ob(e10.algorithm), e10.algorithm.name;
            case 'Ed448':
            case 'Ed25519':
              return e10.algorithm.name;
          }
          throw new iP();
        }
        let o_ = Symbol();
        async function oS(e10, t10, r10, n10, i10) {
          let o10, a2, s2;
          let { 0: l2, 1: c2, 2: u2, length: d2 } = e10.split('.');
          if (5 === d2) throw new iP('JWE structure JWTs are not supported');
          if (3 !== d2) throw new iR('Invalid JWT');
          try {
            o10 = JSON.parse(iE(iA(l2)));
          } catch (e11) {
            throw new iR(
              'failed to parse JWT Header body as base64url encoded JSON',
              { cause: e11 }
            );
          }
          if (!iM(o10)) throw new iR('JWT Header must be a top level object');
          if ((t10(o10), void 0 !== o10.crit))
            throw new iR('unexpected JWT "crit" header parameter');
          let p2 = iA(u2);
          if (r10 !== o_) {
            a2 = await r10(o10);
            let e11 = `${l2}.${c2}`;
            if (!(await crypto.subtle.verify(ov(a2), a2, p2, iE(e11))))
              throw new iR('JWT signature verification failed');
          }
          try {
            s2 = JSON.parse(iE(iA(c2)));
          } catch (e11) {
            throw new iR(
              'failed to parse JWT Payload body as base64url encoded JSON',
              { cause: e11 }
            );
          }
          if (!iM(s2)) throw new iR('JWT Payload must be a top level object');
          let h2 = iF() + n10;
          if (void 0 !== s2.exp) {
            if ('number' != typeof s2.exp)
              throw new iR('unexpected JWT "exp" (expiration time) claim type');
            if (s2.exp <= h2 - i10)
              throw new iR(
                'unexpected JWT "exp" (expiration time) claim value, timestamp is <= now()'
              );
          }
          if (void 0 !== s2.iat && 'number' != typeof s2.iat)
            throw new iR('unexpected JWT "iat" (issued at) claim type');
          if (void 0 !== s2.iss && 'string' != typeof s2.iss)
            throw new iR('unexpected JWT "iss" (issuer) claim type');
          if (void 0 !== s2.nbf) {
            if ('number' != typeof s2.nbf)
              throw new iR('unexpected JWT "nbf" (not before) claim type');
            if (s2.nbf > h2 + i10)
              throw new iR(
                'unexpected JWT "nbf" (not before) claim value, timestamp is > now()'
              );
          }
          if (
            void 0 !== s2.aud &&
            'string' != typeof s2.aud &&
            !Array.isArray(s2.aud)
          )
            throw new iR('unexpected JWT "aud" (audience) claim type');
          return { header: o10, claims: s2, signature: p2, key: a2 };
        }
        function ok(e10, t10, r10) {
          if (void 0 !== e10) {
            if (r10.alg !== e10)
              throw new iR('unexpected JWT "alg" header parameter');
            return;
          }
          if (Array.isArray(t10)) {
            if (!t10.includes(r10.alg))
              throw new iR('unexpected JWT "alg" header parameter');
            return;
          }
          if ('RS256' !== r10.alg)
            throw new iR('unexpected JWT "alg" header parameter');
        }
        function ox(e10, t10) {
          let { 0: r10, length: n10 } = e10.getAll(t10);
          if (n10 > 1)
            throw new iR(`"${t10}" parameter must be provided only once`);
          return r10;
        }
        let oE = Symbol(),
          oA = Symbol();
        async function oT(e10, t10, r10, n10, i10) {
          let { cookies: o10, logger: a2 } = n10;
          a2.debug(`CREATE_${e10.toUpperCase()}`, { value: t10, maxAge: r10 });
          let s2 = new Date();
          s2.setTime(s2.getTime() + 1e3 * r10);
          let l2 = { value: t10 };
          'state' === e10 && i10 && (l2.data = i10);
          let c2 = o10[e10].name;
          return {
            name: c2,
            value: await rJ({ ...n10.jwt, maxAge: r10, token: l2, salt: c2 }),
            options: { ...o10[e10].options, expires: s2 }
          };
        }
        let oP = {
          async create(e10) {
            let t10 = iW(),
              r10 = await iK(t10);
            return {
              cookie: await oT('pkceCodeVerifier', t10, 900, e10),
              value: r10
            };
          },
          async use(e10, t10, r10) {
            let { provider: n10 } = r10;
            if (!n10?.checks?.includes('pkce')) return;
            let i10 = e10?.[r10.cookies.pkceCodeVerifier.name];
            if (!i10) throw new eW('PKCE code_verifier cookie was missing.');
            let o10 = await rF({
              ...r10.jwt,
              token: i10,
              salt: r10.cookies.pkceCodeVerifier.name
            });
            if (!o10?.value)
              throw new eW('PKCE code_verifier value could not be parsed.');
            return (
              t10.push({
                name: r10.cookies.pkceCodeVerifier.name,
                value: '',
                options: { ...r10.cookies.pkceCodeVerifier.options, maxAge: 0 }
              }),
              o10.value
            );
          }
        };
        function oC(e10) {
          try {
            let t10 = new TextDecoder();
            return JSON.parse(t10.decode(tP(e10)));
          } catch {}
        }
        let oR = {
            async create(e10, t10) {
              let { provider: r10 } = e10;
              if (!r10.checks.includes('state')) {
                if (t10)
                  throw new eW(
                    'State data was provided but the provider is not configured to use state.'
                  );
                return;
              }
              let n10 = tA(JSON.stringify({ ...t10, random: iW() }));
              return {
                cookie: await oT('state', n10, 900, e10, t10),
                value: n10
              };
            },
            async use(e10, t10, r10, n10) {
              let { provider: i10 } = r10;
              if (!i10.checks.includes('state')) return;
              let o10 = e10?.[r10.cookies.state.name];
              if (!o10) throw new eW('State cookie was missing.');
              let a2 = await rF({
                ...r10.jwt,
                token: o10,
                salt: r10.cookies.state.name
              });
              if (!a2?.value)
                throw new eW('State (cookie) value could not be parsed.');
              let s2 = oC(a2.value);
              if (!s2)
                throw new eW('State (encoded) value could not be parsed.');
              if (s2.random !== n10)
                throw new eW(
                  `Random state values did not match. Expected: ${s2.random}. Got: ${n10}`
                );
              return (
                t10.push({
                  name: r10.cookies.state.name,
                  value: '',
                  options: { ...r10.cookies.state.options, maxAge: 0 }
                }),
                a2.value
              );
            }
          },
          oO = {
            async create(e10) {
              if (!e10.provider.checks.includes('nonce')) return;
              let t10 = iW();
              return { cookie: await oT('nonce', t10, 900, e10), value: t10 };
            },
            async use(e10, t10, r10) {
              let { provider: n10 } = r10;
              if (!n10?.checks?.includes('nonce')) return;
              let i10 = e10?.[r10.cookies.nonce.name];
              if (!i10) throw new eW('Nonce cookie was missing.');
              let o10 = await rF({
                ...r10.jwt,
                token: i10,
                salt: r10.cookies.nonce.name
              });
              if (!o10?.value) throw new eW('Nonce value could not be parsed.');
              return (
                t10.push({
                  name: r10.cookies.nonce.name,
                  value: '',
                  options: { ...r10.cookies.nonce.options, maxAge: 0 }
                }),
                o10.value
              );
            }
          },
          oI = {
            create: async (e10, t10, r10) => ({
              cookie: await oT(
                'webauthnChallenge',
                JSON.stringify({ challenge: t10, registerData: r10 }),
                900,
                e10
              )
            }),
            async use(e10, t10, r10) {
              let n10 = t10?.[e10.cookies.webauthnChallenge.name];
              if (!n10) throw new eW('Challenge cookie missing.');
              let i10 = await rF({
                ...e10.jwt,
                token: n10,
                salt: e10.cookies.webauthnChallenge.name
              });
              if (!i10?.value)
                throw new eW('Challenge value could not be parsed.');
              let o10 = {
                name: e10.cookies.webauthnChallenge.name,
                value: '',
                options: { ...e10.cookies.webauthnChallenge.options, maxAge: 0 }
              };
              return r10.push(o10), JSON.parse(i10.value);
            }
          };
        async function oU(e10, t10, r10, n10) {
          let i10, o10, a2;
          let { logger: s2, provider: l2 } = r10,
            { token: c2, userinfo: u2 } = l2;
          if (
            (c2?.url && 'authjs.dev' !== c2.url.host) ||
            (u2?.url && 'authjs.dev' !== u2.url.host)
          )
            i10 = {
              issuer: l2.issuer ?? 'https://authjs.dev',
              token_endpoint: c2?.url.toString(),
              userinfo_endpoint: u2?.url.toString()
            };
          else {
            let e11 = new URL(l2.issuer),
              t11 = await i$(e11),
              r11 = await iH(e11, t11);
            if (!r11.token_endpoint)
              throw TypeError(
                'TODO: Authorization server did not provide a token endpoint.'
              );
            if (!r11.userinfo_endpoint)
              throw TypeError(
                'TODO: Authorization server did not provide a userinfo endpoint.'
              );
            i10 = r11;
          }
          let d2 = {
              client_id: l2.clientId,
              client_secret: l2.clientSecret,
              ...l2.client
            },
            p2 = [],
            h2 = await oR.use(t10, p2, r10, n10),
            f2 = (function (e11, t11, r11, n11) {
              var i11;
              if (
                (iG(e11),
                iX(t11),
                r11 instanceof URL && (r11 = r11.searchParams),
                !(r11 instanceof URLSearchParams))
              )
                throw TypeError(
                  '"parameters" must be an instance of URLSearchParams, or URL'
                );
              if (ox(r11, 'response'))
                throw new iR(
                  '"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()'
                );
              let o11 = ox(r11, 'iss'),
                a3 = ox(r11, 'state');
              if (!o11 && e11.authorization_response_iss_parameter_supported)
                throw new iR('response parameter "iss" (issuer) missing');
              if (o11 && o11 !== e11.issuer)
                throw new iR(
                  'unexpected "iss" (issuer) response parameter value'
                );
              switch (n11) {
                case void 0:
                case oA:
                  if (void 0 !== a3)
                    throw new iR(
                      'unexpected "state" response parameter encountered'
                    );
                  break;
                case oE:
                  break;
                default:
                  if (!iD(n11))
                    throw new iR('"expectedState" must be a non-empty string');
                  if (void 0 === a3)
                    throw new iR('response parameter "state" missing');
                  if (a3 !== n11)
                    throw new iR('unexpected "state" response parameter value');
              }
              let s3 = ox(r11, 'error');
              if (s3)
                return {
                  error: s3,
                  error_description: ox(r11, 'error_description'),
                  error_uri: ox(r11, 'error_uri')
                };
              let l3 = ox(r11, 'id_token'),
                c3 = ox(r11, 'token');
              if (void 0 !== l3 || void 0 !== c3)
                throw new iP('implicit and hybrid flows are not supported');
              return (i11 = new URLSearchParams(r11)), oc.add(i11), i11;
            })(
              i10,
              d2,
              new URLSearchParams(e10),
              l2.checks.includes('state') ? h2 : oE
            );
          if (i8(f2)) {
            let e11 = { providerId: l2.id, ...f2 };
            throw (
              (s2.debug('OAuthCallbackError', e11),
              new ez('OAuth Provider returned an error', e11))
            );
          }
          let g2 = await oP.use(t10, p2, r10),
            m2 = l2.callbackUrl;
          !r10.isOnRedirectProxy &&
            l2.redirectProxyUrl &&
            (m2 = l2.redirectProxyUrl);
          let y2 = await ou(i10, d2, f2, m2, g2 ?? 'auth', {
            [i_]: (...e11) => (
              !l2.checks.includes('pkce') &&
                e11[1]?.body instanceof URLSearchParams &&
                e11[1].body.delete('code_verifier'),
              fetch(...e11)
            )
          });
          if (
            (l2.token?.conform &&
              (y2 = (await l2.token.conform(y2.clone())) ?? y2),
            (o10 = (function (e11) {
              if (!iw(e11, Response))
                throw TypeError('"response" must be an instance of Response');
              let t11 = e11.headers.get('www-authenticate');
              if (null === t11) return;
              let r11 = [];
              for (let { 1: e12, index: n11 } of t11.matchAll(i7))
                r11.push([e12, n11]);
              if (r11.length)
                return r11.map(([e12, r12], n11, i11) => {
                  let o11 = i11[n11 + 1];
                  return (function (e13, t12) {
                    let r13 = t12.split(i9).slice(1);
                    if (!r13.length)
                      return { scheme: e13.toLowerCase(), parameters: {} };
                    r13[r13.length - 1] = r13[r13.length - 1].replace(/,$/, '');
                    let n12 = {};
                    for (let e14 = 1; e14 < r13.length; e14 += 2) {
                      var i12;
                      let t13 = e14;
                      if ('"' === r13[t13][0])
                        for (
                          ;
                          '"' !== r13[t13].slice(-1) && ++e14 < r13.length;

                        )
                          r13[t13] += r13[e14];
                      n12[
                        r13[t13 - 1].replace(/^(?:, ?)|=$/g, '').toLowerCase()
                      ] =
                        (i12 = r13[t13]).length >= 2 &&
                        '"' === i12[0] &&
                        '"' === i12[i12.length - 1]
                          ? i12.slice(1, -1)
                          : i12;
                    }
                    return { scheme: e13.toLowerCase(), parameters: n12 };
                  })(e12, o11 ? t11.slice(r12, o11[1]) : t11.slice(r12));
                });
            })(y2)))
          ) {
            for (let e11 of o10) console.log('challenge', e11);
            throw Error('TODO: Handle www-authenticate challenges as needed');
          }
          let w2 = {};
          if ('oidc' === l2.type) {
            let e11 = await oO.use(t10, p2, r10),
              n11 = await og(i10, d2, y2, e11 ?? oh);
            if (i8(n11))
              throw (
                (console.log('error', n11),
                Error('TODO: Handle OIDC response body error'))
              );
            (w2 = oo(n11)), (a2 = n11);
          } else {
            if (i8((a2 = await om(i10, d2, y2))))
              throw (
                (console.log('error', a2),
                Error('TODO: Handle OAuth 2.0 response body error'))
              );
            if (u2?.request) {
              let e11 = await u2.request({ tokens: a2, provider: l2 });
              e11 instanceof Object && (w2 = e11);
            } else if (u2?.url) {
              let e11 = await ot(i10, d2, a2.access_token);
              w2 = await e11.json();
            } else throw TypeError('No userinfo endpoint configured');
          }
          return (
            a2.expires_in &&
              (a2.expires_at =
                Math.floor(Date.now() / 1e3) + Number(a2.expires_in)),
            { ...(await oN(w2, l2, a2, s2)), profile: w2, cookies: p2 }
          );
        }
        async function oN(e10, t10, r10, n10) {
          try {
            let n11 = await t10.profile(e10, r10);
            return {
              user: {
                ...n11,
                id: crypto.randomUUID(),
                email: n11.email?.toLowerCase()
              },
              account: {
                ...r10,
                provider: t10.id,
                type: t10.type,
                providerAccountId: n11.id ?? crypto.randomUUID()
              }
            };
          } catch (r11) {
            n10.debug('getProfile error details', e10),
              n10.error(new eG(r11, { provider: t10.id }));
          }
        }
        var oM = r(26195).Buffer;
        async function oL(e10, t10, r10, n10) {
          let i10 = await oW(e10, t10, r10),
            { cookie: o10 } = await oI.create(e10, i10.challenge, r10);
          return {
            status: 200,
            cookies: [...(n10 ?? []), o10],
            body: { action: 'register', options: i10 },
            headers: { 'Content-Type': 'application/json' }
          };
        }
        async function oj(e10, t10, r10, n10) {
          let i10 = await oH(e10, t10, r10),
            { cookie: o10 } = await oI.create(e10, i10.challenge);
          return {
            status: 200,
            cookies: [...(n10 ?? []), o10],
            body: { action: 'authenticate', options: i10 },
            headers: { 'Content-Type': 'application/json' }
          };
        }
        async function o$(e10, t10, r10) {
          let n10;
          let { adapter: i10, provider: o10 } = e10,
            a2 =
              t10.body && 'string' == typeof t10.body.data
                ? JSON.parse(t10.body.data)
                : void 0;
          if (
            !a2 ||
            'object' != typeof a2 ||
            !('id' in a2) ||
            'string' != typeof a2.id
          )
            throw new eO('Invalid WebAuthn Authentication response');
          let s2 = oV(oB(a2.id)),
            l2 = await i10.getAuthenticator(s2);
          if (!l2)
            throw new eO(
              `WebAuthn authenticator not found in database: ${JSON.stringify({
                credentialID: s2
              })}`
            );
          let { challenge: c2 } = await oI.use(e10, t10.cookies, r10);
          try {
            let r11 = o10.getRelayingParty(e10, t10);
            n10 = await o10.simpleWebAuthn.verifyAuthenticationResponse({
              ...o10.verifyAuthenticationOptions,
              expectedChallenge: c2,
              response: a2,
              authenticator: {
                ...l2,
                credentialDeviceType: l2.credentialDeviceType,
                transports: oq(l2.transports),
                credentialID: oB(l2.credentialID),
                credentialPublicKey: oB(l2.credentialPublicKey)
              },
              expectedOrigin: r11.origin,
              expectedRPID: r11.id
            });
          } catch (e11) {
            throw new e7(e11);
          }
          let { verified: u2, authenticationInfo: d2 } = n10;
          if (!u2)
            throw new e7(
              'WebAuthn authentication response could not be verified.'
            );
          try {
            let { newCounter: e11 } = d2;
            await i10.updateAuthenticatorCounter(l2.credentialID, e11);
          } catch (e11) {
            throw new eU(
              `Failed to update authenticator counter. This may cause future authentication attempts to fail. ${JSON.stringify(
                {
                  credentialID: s2,
                  oldCounter: l2.counter,
                  newCounter: d2.newCounter
                }
              )}`,
              e11
            );
          }
          let p2 = await i10.getAccount(l2.providerAccountId, o10.id);
          if (!p2)
            throw new eO(
              `WebAuthn account not found in database: ${JSON.stringify({
                credentialID: s2,
                providerAccountId: l2.providerAccountId
              })}`
            );
          let h2 = await i10.getUser(p2.userId);
          if (!h2)
            throw new eO(
              `WebAuthn user not found in database: ${JSON.stringify({
                credentialID: s2,
                providerAccountId: l2.providerAccountId,
                userID: p2.userId
              })}`
            );
          return { account: p2, user: h2 };
        }
        async function oD(e10, t10, r10) {
          var n10;
          let i10;
          let { provider: o10 } = e10,
            a2 =
              t10.body && 'string' == typeof t10.body.data
                ? JSON.parse(t10.body.data)
                : void 0;
          if (
            !a2 ||
            'object' != typeof a2 ||
            !('id' in a2) ||
            'string' != typeof a2.id
          )
            throw new eO('Invalid WebAuthn Registration response');
          let { challenge: s2, registerData: l2 } = await oI.use(
            e10,
            t10.cookies,
            r10
          );
          if (!l2)
            throw new eO(
              'Missing user registration data in WebAuthn challenge cookie'
            );
          try {
            let r11 = o10.getRelayingParty(e10, t10);
            i10 = await o10.simpleWebAuthn.verifyRegistrationResponse({
              ...o10.verifyRegistrationOptions,
              expectedChallenge: s2,
              response: a2,
              expectedOrigin: r11.origin,
              expectedRPID: r11.id
            });
          } catch (e11) {
            throw new e7(e11);
          }
          if (!i10.verified || !i10.registrationInfo)
            throw new e7(
              'WebAuthn registration response could not be verified'
            );
          let c2 = {
              providerAccountId: oV(i10.registrationInfo.credentialID),
              provider: e10.provider.id,
              type: o10.type
            },
            u2 = {
              providerAccountId: c2.providerAccountId,
              counter: i10.registrationInfo.counter,
              credentialID: oV(i10.registrationInfo.credentialID),
              credentialPublicKey: oV(i10.registrationInfo.credentialPublicKey),
              credentialBackedUp: i10.registrationInfo.credentialBackedUp,
              credentialDeviceType: i10.registrationInfo.credentialDeviceType,
              transports: ((n10 = a2.response.transports), n10?.join(','))
            };
          return { user: l2, account: c2, authenticator: u2 };
        }
        async function oH(e10, t10, r10) {
          let { provider: n10, adapter: i10 } = e10,
            o10 =
              r10 && r10.id
                ? await i10.listAuthenticatorsByUserId(r10.id)
                : null,
            a2 = n10.getRelayingParty(e10, t10);
          return await n10.simpleWebAuthn.generateAuthenticationOptions({
            ...n10.authenticationOptions,
            rpID: a2.id,
            allowCredentials: o10?.map((e11) => ({
              id: oB(e11.credentialID),
              type: 'public-key',
              transports: oq(e11.transports)
            }))
          });
        }
        async function oW(e10, t10, r10) {
          let { provider: n10, adapter: i10 } = e10,
            o10 = r10.id ? await i10.listAuthenticatorsByUserId(r10.id) : null,
            a2 = r5(32),
            s2 = n10.getRelayingParty(e10, t10);
          return await n10.simpleWebAuthn.generateRegistrationOptions({
            ...n10.registrationOptions,
            userID: a2,
            userName: r10.email,
            userDisplayName: r10.name ?? void 0,
            rpID: s2.id,
            rpName: s2.name,
            excludeCredentials: o10?.map((e11) => ({
              id: oB(e11.credentialID),
              type: 'public-key',
              transports: oq(e11.transports)
            }))
          });
        }
        function oK(e10) {
          let { provider: t10, adapter: r10 } = e10;
          if (!r10)
            throw new eB('An adapter is required for the WebAuthn provider');
          if (!t10 || 'webauthn' !== t10.type)
            throw new e2('Provider must be WebAuthn');
          return { ...e10, provider: t10, adapter: r10 };
        }
        function oB(e10) {
          return new Uint8Array(oM.from(e10, 'base64'));
        }
        function oV(e10) {
          return oM.from(e10).toString('base64');
        }
        function oq(e10) {
          return e10 ? e10.split(',') : void 0;
        }
        async function oJ(e10, t10, r10, n10) {
          if (!t10.provider)
            throw new e2('Callback route called without provider');
          let { query: i10, body: o10, method: a2, headers: s2 } = e10,
            {
              provider: l2,
              adapter: c2,
              url: u2,
              callbackUrl: d2,
              pages: p2,
              jwt: h2,
              events: f2,
              callbacks: g2,
              session: { strategy: m2, maxAge: y2 },
              logger: w2
            } = t10,
            b2 = 'jwt' === m2;
          try {
            if ('oauth' === l2.type || 'oidc' === l2.type) {
              let o11;
              let { proxyRedirect: a3, randomState: s3 } = (function (
                e11,
                t11,
                r11
              ) {
                let n11, i11;
                if (t11.redirectProxyUrl && !e11?.state)
                  throw new eW(
                    'Missing state in query, but required for redirect proxy'
                  );
                let o12 = oC(e11?.state);
                if (((n11 = o12?.random), r11)) {
                  if (!o12?.origin) return { randomState: n11 };
                  i11 = `${o12.origin}?${new URLSearchParams(e11)}`;
                }
                return { randomState: n11, proxyRedirect: i11 };
              })(i10, l2, t10.isOnRedirectProxy);
              if (a3)
                return (
                  w2.debug('proxy redirect', {
                    proxyRedirect: a3,
                    randomState: s3
                  }),
                  { redirect: a3 }
                );
              let m3 = await oU(i10, e10.cookies, t10, s3);
              m3.cookies.length && n10.push(...m3.cookies),
                w2.debug('authorization result', m3);
              let { user: v2, account: _2, profile: S2 } = m3;
              if (!v2 || !_2 || !S2)
                return { redirect: `${u2}/signin`, cookies: n10 };
              if (c2) {
                let { getUserByAccount: e11 } = c2;
                o11 = await e11({
                  providerAccountId: _2.providerAccountId,
                  provider: l2.id
                });
              }
              let k2 = await oF(
                { user: o11 ?? v2, account: _2, profile: S2 },
                t10
              );
              if (k2) return { redirect: k2, cookies: n10 };
              let {
                user: x2,
                session: E2,
                isNewUser: A2
              } = await iy(r10.value, v2, _2, t10);
              if (b2) {
                let e11 = {
                    name: x2.name,
                    email: x2.email,
                    picture: x2.image,
                    sub: x2.id?.toString()
                  },
                  i11 = await g2.jwt({
                    token: e11,
                    user: x2,
                    account: _2,
                    profile: S2,
                    isNewUser: A2,
                    trigger: A2 ? 'signUp' : 'signIn'
                  });
                if (null === i11) n10.push(...r10.clean());
                else {
                  let e12 = t10.cookies.sessionToken.name,
                    o12 = await h2.encode({ ...h2, token: i11, salt: e12 }),
                    a4 = new Date();
                  a4.setTime(a4.getTime() + 1e3 * y2);
                  let s4 = r10.chunk(o12, { expires: a4 });
                  n10.push(...s4);
                }
              } else
                n10.push({
                  name: t10.cookies.sessionToken.name,
                  value: E2.sessionToken,
                  options: {
                    ...t10.cookies.sessionToken.options,
                    expires: E2.expires
                  }
                });
              if (
                (await f2.signIn?.({
                  user: x2,
                  account: _2,
                  profile: S2,
                  isNewUser: A2
                }),
                A2 && p2.newUser)
              )
                return {
                  redirect: `${p2.newUser}${
                    p2.newUser.includes('?') ? '&' : '?'
                  }${new URLSearchParams({ callbackUrl: d2 })}`,
                  cookies: n10
                };
              return { redirect: d2, cookies: n10 };
            }
            if ('email' === l2.type) {
              let e11 = i10?.token,
                o11 = i10?.email;
              if (!e11 || !o11) {
                let t11 = TypeError(
                  'Missing token or email. The sign-in URL was manually opened without token/identifier or the link was not sent correctly in the email.',
                  { cause: { hasToken: !!e11, hasEmail: !!o11 } }
                );
                throw ((t11.name = 'Configuration'), t11);
              }
              let a3 = l2.secret ?? t10.secret,
                s3 = await c2.useVerificationToken({
                  identifier: o11,
                  token: await r3(`${e11}${a3}`)
                }),
                u3 = !!s3,
                m3 = s3 ? s3.expires.valueOf() < Date.now() : void 0;
              if (!u3 || m3) throw new e5({ hasInvite: u3, expired: m3 });
              let w3 = (await c2.getUserByEmail(o11)) ?? {
                  id: crypto.randomUUID(),
                  email: o11,
                  emailVerified: null
                },
                v2 = {
                  providerAccountId: w3.email,
                  userId: w3.id,
                  type: 'email',
                  provider: l2.id
                },
                _2 = await oF({ user: w3, account: v2 }, t10);
              if (_2) return { redirect: _2, cookies: n10 };
              let {
                user: S2,
                session: k2,
                isNewUser: x2
              } = await iy(r10.value, w3, v2, t10);
              if (b2) {
                let e12 = {
                    name: S2.name,
                    email: S2.email,
                    picture: S2.image,
                    sub: S2.id?.toString()
                  },
                  i11 = await g2.jwt({
                    token: e12,
                    user: S2,
                    account: v2,
                    isNewUser: x2,
                    trigger: x2 ? 'signUp' : 'signIn'
                  });
                if (null === i11) n10.push(...r10.clean());
                else {
                  let e13 = t10.cookies.sessionToken.name,
                    o12 = await h2.encode({ ...h2, token: i11, salt: e13 }),
                    a4 = new Date();
                  a4.setTime(a4.getTime() + 1e3 * y2);
                  let s4 = r10.chunk(o12, { expires: a4 });
                  n10.push(...s4);
                }
              } else
                n10.push({
                  name: t10.cookies.sessionToken.name,
                  value: k2.sessionToken,
                  options: {
                    ...t10.cookies.sessionToken.options,
                    expires: k2.expires
                  }
                });
              if (
                (await f2.signIn?.({ user: S2, account: v2, isNewUser: x2 }),
                x2 && p2.newUser)
              )
                return {
                  redirect: `${p2.newUser}${
                    p2.newUser.includes('?') ? '&' : '?'
                  }${new URLSearchParams({ callbackUrl: d2 })}`,
                  cookies: n10
                };
              return { redirect: d2, cookies: n10 };
            }
            if ('credentials' === l2.type && 'POST' === a2) {
              let e11 = o10 ?? {};
              Object.entries(i10 ?? {}).forEach(([e12, t11]) =>
                u2.searchParams.set(e12, t11)
              );
              let c3 = await l2.authorize(
                e11,
                new Request(u2, {
                  headers: s2,
                  method: a2,
                  body: JSON.stringify(o10)
                })
              );
              if (c3) c3.id = c3.id?.toString() ?? crypto.randomUUID();
              else throw new eD();
              let p3 = {
                  providerAccountId: c3.id,
                  type: 'credentials',
                  provider: l2.id
                },
                m3 = await oF({ user: c3, account: p3, credentials: e11 }, t10);
              if (m3) return { redirect: m3, cookies: n10 };
              let w3 = {
                  name: c3.name,
                  email: c3.email,
                  picture: c3.image,
                  sub: c3.id
                },
                b3 = await g2.jwt({
                  token: w3,
                  user: c3,
                  account: p3,
                  isNewUser: false,
                  trigger: 'signIn'
                });
              if (null === b3) n10.push(...r10.clean());
              else {
                let e12 = t10.cookies.sessionToken.name,
                  i11 = await h2.encode({ ...h2, token: b3, salt: e12 }),
                  o11 = new Date();
                o11.setTime(o11.getTime() + 1e3 * y2);
                let a3 = r10.chunk(i11, { expires: o11 });
                n10.push(...a3);
              }
              return (
                await f2.signIn?.({ user: c3, account: p3 }),
                { redirect: d2, cookies: n10 }
              );
            }
            if ('webauthn' === l2.type && 'POST' === a2) {
              let i11, o11, a3;
              let s3 = e10.body?.action;
              if (
                'string' != typeof s3 ||
                ('authenticate' !== s3 && 'register' !== s3)
              )
                throw new eO('Invalid action parameter');
              let l3 = oK(t10);
              switch (s3) {
                case 'authenticate': {
                  let t11 = await o$(l3, e10, n10);
                  (i11 = t11.user), (o11 = t11.account);
                  break;
                }
                case 'register': {
                  let r11 = await oD(t10, e10, n10);
                  (i11 = r11.user),
                    (o11 = r11.account),
                    (a3 = r11.authenticator);
                }
              }
              await oF({ user: i11, account: o11 }, t10);
              let {
                user: c3,
                isNewUser: u3,
                session: m3,
                account: w3
              } = await iy(r10.value, i11, o11, t10);
              if (!w3) throw new eO('Error creating or finding account');
              if (
                (a3 &&
                  c3.id &&
                  (await l3.adapter.createAuthenticator({
                    ...a3,
                    userId: c3.id
                  })),
                b2)
              ) {
                let e11 = {
                    name: c3.name,
                    email: c3.email,
                    picture: c3.image,
                    sub: c3.id?.toString()
                  },
                  i12 = await g2.jwt({
                    token: e11,
                    user: c3,
                    account: w3,
                    isNewUser: u3,
                    trigger: u3 ? 'signUp' : 'signIn'
                  });
                if (null === i12) n10.push(...r10.clean());
                else {
                  let e12 = t10.cookies.sessionToken.name,
                    o12 = await h2.encode({ ...h2, token: i12, salt: e12 }),
                    a4 = new Date();
                  a4.setTime(a4.getTime() + 1e3 * y2);
                  let s4 = r10.chunk(o12, { expires: a4 });
                  n10.push(...s4);
                }
              } else
                n10.push({
                  name: t10.cookies.sessionToken.name,
                  value: m3.sessionToken,
                  options: {
                    ...t10.cookies.sessionToken.options,
                    expires: m3.expires
                  }
                });
              if (
                (await f2.signIn?.({ user: c3, account: w3, isNewUser: u3 }),
                u3 && p2.newUser)
              )
                return {
                  redirect: `${p2.newUser}${
                    p2.newUser.includes('?') ? '&' : '?'
                  }${new URLSearchParams({ callbackUrl: d2 })}`,
                  cookies: n10
                };
              return { redirect: d2, cookies: n10 };
            }
            throw new e2(
              `Callback for provider type (${l2.type}) is not supported`
            );
          } catch (t11) {
            if (t11 instanceof eO) throw t11;
            let e11 = new eM(t11, { provider: l2.id });
            throw (
              (w2.debug('callback route error details', {
                method: a2,
                query: i10,
                body: o10
              }),
              e11)
            );
          }
        }
        async function oF(e10, t10) {
          let r10;
          let { signIn: n10, redirect: i10 } = t10.callbacks;
          try {
            r10 = await n10(e10);
          } catch (e11) {
            if (e11 instanceof eO) throw e11;
            throw new eN(e11);
          }
          if (!r10) throw new eN('AccessDenied');
          if ('string' == typeof r10)
            return await i10({ url: r10, baseUrl: t10.url.origin });
        }
        async function oz(e10, t10, r10, n10, i10) {
          let {
              adapter: o10,
              jwt: a2,
              events: s2,
              callbacks: l2,
              logger: c2,
              session: { strategy: u2, maxAge: d2 }
            } = e10,
            p2 = {
              body: null,
              headers: { 'Content-Type': 'application/json' },
              cookies: r10
            },
            h2 = t10.value;
          if (!h2) return p2;
          if ('jwt' === u2) {
            try {
              let r11 = e10.cookies.sessionToken.name,
                o11 = await a2.decode({ ...a2, token: h2, salt: r11 });
              if (!o11) throw Error('Invalid JWT');
              let c3 = await l2.jwt({
                  token: o11,
                  ...(n10 && { trigger: 'update' }),
                  session: i10
                }),
                u3 = im(d2);
              if (null !== c3) {
                let e11 = {
                    user: { name: c3.name, email: c3.email, image: c3.picture },
                    expires: u3.toISOString()
                  },
                  n11 = await l2.session({ session: e11, token: c3 });
                p2.body = n11;
                let i11 = await a2.encode({ ...a2, token: c3, salt: r11 }),
                  o12 = t10.chunk(i11, { expires: u3 });
                p2.cookies?.push(...o12),
                  await s2.session?.({ session: n11, token: c3 });
              } else p2.cookies?.push(...t10.clean());
            } catch (e11) {
              c2.error(new eK(e11)), p2.cookies?.push(...t10.clean());
            }
            return p2;
          }
          try {
            let {
                getSessionAndUser: r11,
                deleteSession: a3,
                updateSession: c3
              } = o10,
              u3 = await r11(h2);
            if (
              (u3 &&
                u3.session.expires.valueOf() < Date.now() &&
                (await a3(h2), (u3 = null)),
              u3)
            ) {
              let { user: t11, session: r12 } = u3,
                o11 = e10.session.updateAge,
                a4 = r12.expires.valueOf() - 1e3 * d2 + 1e3 * o11,
                f2 = im(d2);
              a4 <= Date.now() && (await c3({ sessionToken: h2, expires: f2 }));
              let g2 = await l2.session({
                session: { ...r12, user: t11 },
                user: t11,
                newSession: i10,
                ...(n10 ? { trigger: 'update' } : {})
              });
              (p2.body = g2),
                p2.cookies?.push({
                  name: e10.cookies.sessionToken.name,
                  value: h2,
                  options: { ...e10.cookies.sessionToken.options, expires: f2 }
                }),
                await s2.session?.({ session: g2 });
            } else h2 && p2.cookies?.push(...t10.clean());
          } catch (e11) {
            c2.error(new eX(e11));
          }
          return p2;
        }
        async function oG(e10, t10) {
          let r10, n10;
          let { logger: i10, provider: o10 } = t10,
            a2 = o10.authorization?.url;
          if (!a2 || 'authjs.dev' === a2.host) {
            let e11 = new URL(o10.issuer),
              t11 = await i$(e11),
              r11 = await iH(e11, t11);
            if (!r11.authorization_endpoint)
              throw TypeError(
                'Authorization server did not provide an authorization endpoint.'
              );
            a2 = new URL(r11.authorization_endpoint);
          }
          let s2 = a2.searchParams,
            l2 = o10.callbackUrl;
          !t10.isOnRedirectProxy &&
            o10.redirectProxyUrl &&
            ((l2 = o10.redirectProxyUrl),
            (n10 = { origin: o10.callbackUrl }),
            i10.debug('using redirect proxy', { redirect_uri: l2, data: n10 }));
          let c2 = Object.assign(
            {
              response_type: 'code',
              client_id: o10.clientId,
              redirect_uri: l2,
              ...o10.authorization?.params
            },
            Object.fromEntries(o10.authorization?.url.searchParams ?? []),
            e10
          );
          for (let e11 in c2) s2.set(e11, c2[e11]);
          let u2 = [],
            d2 = await oR.create(t10, n10);
          if (
            (d2 && (s2.set('state', d2.value), u2.push(d2.cookie)),
            o10.checks?.includes('pkce'))
          ) {
            if (r10 && !r10.code_challenge_methods_supported?.includes('S256'))
              'oidc' === o10.type && (o10.checks = ['nonce']);
            else {
              let { value: e11, cookie: r11 } = await oP.create(t10);
              s2.set('code_challenge', e11),
                s2.set('code_challenge_method', 'S256'),
                u2.push(r11);
            }
          }
          let p2 = await oO.create(t10);
          return (
            p2 && (s2.set('nonce', p2.value), u2.push(p2.cookie)),
            'oidc' !== o10.type ||
              a2.searchParams.has('scope') ||
              a2.searchParams.set('scope', 'openid profile email'),
            i10.debug('authorization url is ready', {
              url: a2,
              cookies: u2,
              provider: o10
            }),
            { redirect: a2.toString(), cookies: u2 }
          );
        }
        async function oX(e10, t10) {
          let r10;
          let { body: n10 } = e10,
            { provider: i10, callbacks: o10, adapter: a2 } = t10,
            s2 = (
              i10.normalizeIdentifier ??
              function (e11) {
                if (!e11) throw Error('Missing email from request body.');
                let [t11, r11] = e11.toLowerCase().trim().split('@');
                return (r11 = r11.split(',')[0]), `${t11}@${r11}`;
              }
            )(n10?.email),
            l2 = { id: crypto.randomUUID(), email: s2, emailVerified: null },
            c2 = (await a2.getUserByEmail(s2)) ?? l2,
            u2 = {
              providerAccountId: s2,
              userId: c2.id,
              type: 'email',
              provider: i10.id
            };
          try {
            r10 = await o10.signIn({
              user: c2,
              account: u2,
              email: { verificationRequest: true }
            });
          } catch (e11) {
            throw new eN(e11);
          }
          if (!r10) throw new eN('AccessDenied');
          if ('string' == typeof r10)
            return {
              redirect: await o10.redirect({
                url: r10,
                baseUrl: t10.url.origin
              })
            };
          let { callbackUrl: d2, theme: p2 } = t10,
            h2 = (await i10.generateVerificationToken?.()) ?? r5(32),
            f2 = new Date(Date.now() + (i10.maxAge ?? 86400) * 1e3),
            g2 = i10.secret ?? t10.secret,
            m2 = new URL(t10.basePath, t10.url.origin),
            y2 = i10.sendVerificationRequest({
              identifier: s2,
              token: h2,
              expires: f2,
              url: `${m2}/callback/${i10.id}?${new URLSearchParams({
                callbackUrl: d2,
                token: h2,
                email: s2
              })}`,
              provider: i10,
              theme: p2,
              request: new Request(e10.url, {
                headers: e10.headers,
                method: e10.method,
                body:
                  'POST' === e10.method
                    ? JSON.stringify(e10.body ?? {})
                    : void 0
              })
            }),
            w2 = a2.createVerificationToken?.({
              identifier: s2,
              token: await r3(`${h2}${g2}`),
              expires: f2
            });
          return (
            await Promise.all([y2, w2]),
            {
              redirect: `${m2}/verify-request?${new URLSearchParams({
                provider: i10.id,
                type: i10.type
              })}`
            }
          );
        }
        async function oY(e10, t10, r10) {
          let n10 = `${r10.url.origin}${r10.basePath}/signin`;
          if (!r10.provider) return { redirect: n10, cookies: t10 };
          switch (r10.provider.type) {
            case 'oauth':
            case 'oidc': {
              let { redirect: n11, cookies: i10 } = await oG(e10.query, r10);
              return i10 && t10.push(...i10), { redirect: n11, cookies: t10 };
            }
            case 'email':
              return { ...(await oX(e10, r10)), cookies: t10 };
            default:
              return { redirect: n10, cookies: t10 };
          }
        }
        async function oZ(e10, t10, r10) {
          let {
              jwt: n10,
              events: i10,
              callbackUrl: o10,
              logger: a2,
              session: s2
            } = r10,
            l2 = t10.value;
          if (!l2) return { redirect: o10, cookies: e10 };
          try {
            if ('jwt' === s2.strategy) {
              let e11 = r10.cookies.sessionToken.name,
                t11 = await n10.decode({ ...n10, token: l2, salt: e11 });
              await i10.signOut?.({ token: t11 });
            } else {
              let e11 = await r10.adapter?.deleteSession(l2);
              await i10.signOut?.({ session: e11 });
            }
          } catch (e11) {
            a2.error(new eQ(e11));
          }
          return e10.push(...t10.clean()), { redirect: o10, cookies: e10 };
        }
        async function oQ(e10, t10) {
          let {
              adapter: r10,
              jwt: n10,
              session: { strategy: i10 }
            } = e10,
            o10 = t10.value;
          if (!o10) return null;
          if ('jwt' === i10) {
            let t11 = e10.cookies.sessionToken.name,
              r11 = await n10.decode({ ...n10, token: o10, salt: t11 });
            if (r11 && r11.sub)
              return {
                id: r11.sub,
                name: r11.name,
                email: r11.email,
                image: r11.picture
              };
          } else {
            let e11 = await r10?.getSessionAndUser(o10);
            if (e11) return e11.user;
          }
          return null;
        }
        async function o0(e10, t10, r10, n10) {
          let i10 = oK(t10),
            { provider: o10 } = i10,
            { action: a2 } = e10.query ?? {};
          if ('register' !== a2 && 'authenticate' !== a2 && void 0 !== a2)
            return {
              status: 400,
              body: { error: 'Invalid action' },
              cookies: n10,
              headers: { 'Content-Type': 'application/json' }
            };
          let s2 = await oQ(t10, r10),
            l2 = s2
              ? { user: s2, exists: true }
              : await o10.getUserInfo(t10, e10),
            c2 = l2?.user;
          switch (
            (function (e11, t11, r11) {
              let { user: n11, exists: i11 = false } = r11 ?? {};
              switch (e11) {
                case 'authenticate':
                  return 'authenticate';
                case 'register':
                  if (n11 && t11 === i11) return 'register';
                  break;
                case void 0:
                  if (!t11) {
                    if (!n11 || i11) return 'authenticate';
                    return 'register';
                  }
              }
              return null;
            })(a2, !!s2, l2)
          ) {
            case 'authenticate':
              return oj(i10, e10, c2, n10);
            case 'register':
              if ('string' == typeof c2?.email) return oL(i10, e10, c2, n10);
            default:
              return {
                status: 400,
                body: { error: 'Invalid request' },
                cookies: n10,
                headers: { 'Content-Type': 'application/json' }
              };
          }
        }
        async function o1(e10, t10) {
          let { action: r10, providerId: n10, error: i10, method: o10 } = e10,
            a2 = t10.skipCSRFCheck === o2,
            { options: s2, cookies: l2 } = await ni({
              authOptions: t10,
              action: r10,
              providerId: n10,
              url: e10.url,
              callbackUrl: e10.body?.callbackUrl ?? e10.query?.callbackUrl,
              csrfToken: e10.body?.csrfToken,
              cookies: e10.cookies,
              isPost: 'POST' === o10,
              csrfDisabled: a2
            }),
            c2 = new eR(s2.cookies.sessionToken, e10.cookies, s2.logger);
          if ('GET' === o10) {
            let t11 = ig({ ...s2, query: e10.query, cookies: l2 });
            switch (r10) {
              case 'callback':
                return await oJ(e10, s2, c2, l2);
              case 'csrf':
                return t11.csrf(a2, s2, l2);
              case 'error':
                return t11.error(i10);
              case 'providers':
                return t11.providers(s2.providers);
              case 'session':
                return await oz(s2, c2, l2);
              case 'signin':
                return t11.signin(n10, i10);
              case 'signout':
                return t11.signout();
              case 'verify-request':
                return t11.verifyRequest();
              case 'webauthn-options':
                return await o0(e10, s2, c2, l2);
            }
          } else {
            let { csrfTokenVerified: t11 } = s2;
            switch (r10) {
              case 'callback':
                return (
                  'credentials' === s2.provider.type && r4(r10, t11),
                  await oJ(e10, s2, c2, l2)
                );
              case 'session':
                return r4(r10, t11), await oz(s2, c2, l2, true, e10.body?.data);
              case 'signin':
                return r4(r10, t11), await oY(e10, l2, s2);
              case 'signout':
                return r4(r10, t11), await oZ(l2, c2, s2);
            }
          }
          throw new e0(`Cannot handle action: ${r10}`);
        }
        let o2 = Symbol('skip-csrf-check'),
          o3 = Symbol('return-type-raw');
        function o5(e10, t10, r10, n10, i10) {
          let o10,
            a2 = n10.AUTH_URL ?? n10.NEXTAUTH_URL;
          if (a2)
            (o10 = new URL(a2)),
              i10 &&
                '/' !== i10 &&
                '/' !== o10.pathname &&
                (rZ.warn(
                  o10.pathname === i10
                    ? 'env-url-basepath-redundant'
                    : 'env-url-basepath-mismatch'
                ),
                (o10.pathname = '/'));
          else {
            let e11 = r10.get('x-forwarded-host') ?? r10.get('host'),
              n11 = r10.get('x-forwarded-proto') ?? t10 ?? 'https',
              i11 = n11.endsWith(':') ? n11 : n11 + ':';
            o10 = new URL(`${i11}//${e11}`);
          }
          let s2 = o10.toString().replace(/\/$/, '');
          if (i10) {
            let t11 = i10?.replace(/(^\/|\/$)/g, '') ?? '';
            return new URL(`${s2}/${t11}/${e10}`);
          }
          return new URL(`${s2}/${e10}`);
        }
        async function o6(e10, t10) {
          !(function (e11 = {}, t11) {
            t11 || (rZ.debug = () => {}),
              e11.error && (rZ.error = e11.error),
              e11.warn && (rZ.warn = e11.warn),
              e11.debug && (rZ.debug = e11.debug);
          })(t10.logger, t10.debug);
          let r10 = await r1(e10, t10);
          if (!r10) return Response.json('Bad request.', { status: 400 });
          let n10 = (function (e11, t11) {
            let { url: r11 } = e11,
              n11 = [];
            if ((!tr && t11.debug && n11.push('debug-enabled'), !t11.trustHost))
              return new e3(`Host must be trusted. URL was: ${e11.url}`);
            if (!t11.secret?.length) return new eJ('Please define a `secret`.');
            let i11 = e11.query?.callbackUrl;
            if (i11 && !tn(i11, r11.origin))
              return new e$(`Invalid callback URL. Received: ${i11}`);
            let { callbackUrl: o11 } = eC(
                t11.useSecureCookies ?? 'https:' === r11.protocol
              ),
              a2 = e11.cookies?.[t11.cookies?.callbackUrl?.name ?? o11.name];
            if (a2 && !tn(a2, r11.origin))
              return new e$(`Invalid callback URL. Received: ${a2}`);
            let s2 = false;
            for (let e12 of t11.providers) {
              let t12 = 'function' == typeof e12 ? e12() : e12;
              if (
                ('oauth' === t12.type || 'oidc' === t12.type) &&
                !(t12.issuer ?? t12.options?.issuer)
              ) {
                let e13;
                let { authorization: r12, token: n12, userinfo: i12 } = t12;
                if (
                  ('string' == typeof r12 || r12?.url
                    ? 'string' == typeof n12 || n12?.url
                      ? 'string' == typeof i12 || i12?.url || (e13 = 'userinfo')
                      : (e13 = 'token')
                    : (e13 = 'authorization'),
                  e13)
                )
                  return new eH(
                    `Provider "${t12.id}" is missing both \`issuer\` and \`${e13}\` endpoint config. At least one of them is required.`
                  );
              }
              if ('credentials' === t12.type) ti = true;
              else if ('email' === t12.type) to = true;
              else if ('webauthn' === t12.type) {
                var l2;
                if (
                  ((ta = true),
                  t12.simpleWebAuthnBrowserVersion &&
                    ((l2 = t12.simpleWebAuthnBrowserVersion),
                    !/^v\d+(?:\.\d+){0,2}$/.test(l2)))
                )
                  return new eO(
                    `Invalid provider config for "${t12.id}": simpleWebAuthnBrowserVersion "${t12.simpleWebAuthnBrowserVersion}" must be a valid semver string.`
                  );
                if (t12.enableConditionalUI) {
                  if (s2)
                    return new e8(
                      "Multiple webauthn providers have 'enableConditionalUI' set to True. Only one provider can have this option enabled at a time."
                    );
                  if (
                    ((s2 = true),
                    !Object.values(t12.formFields).some(
                      (e13) =>
                        e13.autocomplete &&
                        e13.autocomplete.toString().indexOf('webauthn') > -1
                    ))
                  )
                    return new e9(
                      `Provider "${t12.id}" has 'enableConditionalUI' set to True, but none of its formFields have 'webauthn' in their autocomplete param.`
                    );
                }
              }
            }
            if (ti) {
              let e12 = t11.session?.strategy === 'database',
                r12 = !t11.providers.some(
                  (e13) =>
                    'credentials' !==
                    ('function' == typeof e13 ? e13() : e13).type
                );
              if (e12 && r12)
                return new e1(
                  'Signing in with credentials only supported if JWT strategy is enabled'
                );
              if (
                t11.providers.some((e13) => {
                  let t12 = 'function' == typeof e13 ? e13() : e13;
                  return 'credentials' === t12.type && !t12.authorize;
                })
              )
                return new eq(
                  'Must define an authorize() handler to use credentials authentication provider'
                );
            }
            let { adapter: c2, session: u2 } = t11,
              d2 = [];
            if (to || u2?.strategy === 'database' || (!u2?.strategy && c2)) {
              if (to) {
                if (!c2) return new eB('Email login requires an adapter.');
                d2.push(...ts);
              } else {
                if (!c2) return new eB('Database session requires an adapter.');
                d2.push(...tl);
              }
            }
            if (ta) {
              if (!t11.experimental?.enableWebAuthn)
                return new tt(
                  'WebAuthn is an experimental feature. To enable it, set `experimental.enableWebAuthn` to `true` in your config.'
                );
              if ((n11.push('experimental-webauthn'), !c2))
                return new eB('WebAuthn requires an adapter.');
              d2.push(...tc);
            }
            if (c2) {
              let e12 = d2.filter((e13) => !(e13 in c2));
              if (e12.length)
                return new eV(
                  `Required adapter methods were missing: ${e12.join(', ')}`
                );
            }
            return tr || (tr = true), n11;
          })(r10, t10);
          if (Array.isArray(n10)) n10.forEach(rZ.warn);
          else if (n10) {
            if (
              (rZ.error(n10),
              !/* @__PURE__ */ new Set([
                'signin',
                'signout',
                'error',
                'verify-request'
              ]).has(r10.action) || 'GET' !== r10.method)
            )
              return Response.json(
                {
                  message:
                    'There was a problem with the server configuration. Check the server logs for more information.'
                },
                { status: 500 }
              );
            let { pages: e11, theme: i11 } = t10,
              o11 =
                e11?.error &&
                r10.url.searchParams.get('callbackUrl')?.startsWith(e11.error);
            return !e11?.error || o11
              ? (o11 &&
                  rZ.error(
                    new eL(
                      `The error page ${e11?.error} should not require authentication`
                    )
                  ),
                r2(ig({ theme: i11 }).error('Configuration')))
              : Response.redirect(`${e11.error}?error=Configuration`);
          }
          let i10 = e10.headers?.has('X-Auth-Return-Redirect'),
            o10 = t10.raw === o3;
          try {
            let e11 = await o1(r10, t10);
            if (o10) return e11;
            let n11 = r2(e11),
              a2 = n11.headers.get('Location');
            if (!i10 || !a2) return n11;
            return Response.json({ url: a2 }, { headers: n11.headers });
          } catch (u2) {
            rZ.error(u2);
            let n11 = u2 instanceof eO;
            if (n11 && o10 && !i10) throw u2;
            if ('POST' === e10.method && 'session' === r10.action)
              return Response.json(null, { status: 400 });
            let a2 = new URLSearchParams({
              error:
                u2 instanceof eO && e4.has(u2.type) ? u2.type : 'Configuration'
            });
            u2 instanceof eD && a2.set('code', u2.code);
            let s2 = (n11 && u2.kind) || 'error',
              l2 = t10.pages?.[s2] ?? `${t10.basePath}/${s2.toLowerCase()}`,
              c2 = `${r10.url.origin}${l2}?${a2}`;
            if (i10) return Response.json({ url: c2 });
            return Response.redirect(c2);
          }
        }
        function o4(e10) {
          let t10 = process.env.AUTH_URL ?? process.env.NEXTAUTH_URL;
          if (!t10) return e10;
          let { origin: r10 } = new URL(t10),
            { href: n10, origin: i10 } = e10.nextUrl;
          return new M(n10.replace(i10, r10), e10);
        }
        function o8(e10) {
          try {
            e10.secret ??
              (e10.secret =
                process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET);
            let t10 = process.env.AUTH_URL ?? process.env.NEXTAUTH_URL;
            if (!t10) return;
            let { pathname: r10 } = new URL(t10);
            if ('/' === r10) return;
            e10.basePath || (e10.basePath = r10);
          } catch {
          } finally {
            e10.basePath || (e10.basePath = '/api/auth'),
              (function (e11, t10) {
                try {
                  let r10 = e11.AUTH_URL;
                  r10 &&
                    !t10.basePath &&
                    (t10.basePath = new URL(r10).pathname);
                } catch {
                } finally {
                  t10.basePath ?? (t10.basePath = '/auth');
                }
                if (!t10.secret?.length) {
                  t10.secret = [];
                  let r10 = e11.AUTH_SECRET;
                  for (let n10 of (r10 && t10.secret.push(r10), [1, 2, 3])) {
                    let r11 = e11[`AUTH_SECRET_${n10}`];
                    r11 && t10.secret.unshift(r11);
                  }
                }
                t10.redirectProxyUrl ??
                  (t10.redirectProxyUrl = e11.AUTH_REDIRECT_PROXY_URL),
                  t10.trustHost ??
                    (t10.trustHost = !!(
                      e11.AUTH_URL ??
                      e11.AUTH_TRUST_HOST ??
                      e11.VERCEL ??
                      e11.CF_PAGES ??
                      'production' !== e11.NODE_ENV
                    )),
                  (t10.providers = t10.providers.map((t11) => {
                    let r10 = 'function' == typeof t11 ? t11({}) : t11,
                      n10 = r10.id.toUpperCase().replace(/-/g, '_');
                    return (
                      'oauth' === r10.type || 'oidc' === r10.type
                        ? (r10.clientId ??
                            (r10.clientId = e11[`AUTH_${n10}_ID`]),
                          r10.clientSecret ??
                            (r10.clientSecret = e11[`AUTH_${n10}_SECRET`]),
                          'oidc' === r10.type &&
                            (r10.issuer ??
                              (r10.issuer = e11[`AUTH_${n10}_ISSUER`])))
                        : 'email' === r10.type &&
                          (r10.apiKey ?? (r10.apiKey = e11[`AUTH_${n10}_KEY`])),
                      r10
                    );
                  }));
              })(process.env, e10);
          }
        }
        r(1568), 'undefined' == typeof URLPattern || URLPattern;
        var o9 = r(87792),
          o7 = r(82942);
        class ae extends Error {
          constructor(e10) {
            super('Dynamic server usage: ' + e10),
              (this.description = e10),
              (this.digest = 'DYNAMIC_SERVER_USAGE');
          }
        }
        class at extends Error {
          constructor(...e10) {
            super(...e10), (this.code = 'NEXT_STATIC_GEN_BAILOUT');
          }
        }
        let ar = 'function' == typeof o7.unstable_postpone;
        function an(e10, t10) {
          let r10 = new URL(e10.urlPathname, 'http://n').pathname;
          if (e10.isUnstableCacheCallback)
            throw Error(
              `Route ${r10} used "${t10}" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${t10}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`
            );
          if (e10.dynamicShouldError)
            throw new at(
              `Route ${r10} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${t10}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
            );
          if (e10.prerenderState)
            !(function (e11, t11, r11) {
              !(function () {
                if (!ar)
                  throw Error(
                    'Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js'
                  );
              })();
              let n10 = `Route ${r11} needs to bail out of prerendering at this point because it used ${t11}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
              e11.dynamicAccesses.push({
                stack: e11.isDebugSkeleton ? Error().stack : void 0,
                expression: t11
              }),
                o7.unstable_postpone(n10);
            })(e10.prerenderState, t10, r10);
          else if (((e10.revalidate = 0), e10.isStaticGeneration)) {
            let n10 = new ae(
              `Route ${r10} couldn't be rendered statically because it used ${t10}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`
            );
            throw (
              ((e10.dynamicUsageDescription = t10),
              (e10.dynamicUsageStack = n10.stack),
              n10)
            );
          }
        }
        function ai() {
          let e10 = 'headers',
            t10 = X.A.getStore();
          if (t10) {
            if (t10.forceStatic) return G.seal(new Headers({}));
            an(t10, e10);
          }
          return e_(e10).headers;
        }
        function ao() {
          let e10 = 'cookies',
            t10 = X.A.getStore();
          if (t10) {
            if (t10.forceStatic)
              return Z.seal(new U.RequestCookies(new Headers({})));
            an(t10, e10);
          }
          let r10 = e_(e10),
            n10 = o9.W.getStore();
          return (null == n10 ? void 0 : n10.isAction) ||
            (null == n10 ? void 0 : n10.isAppRoute)
            ? r10.mutableCookies
            : r10.cookies;
        }
        async function aa(e10, t10) {
          return o6(
            new Request(
              o5(
                'session',
                e10.get('x-forwarded-proto'),
                e10,
                process.env,
                t10.basePath
              ),
              { headers: { cookie: e10.get('cookie') ?? '' } }
            ),
            {
              ...t10,
              callbacks: {
                ...t10.callbacks,
                async session(...e11) {
                  let r10 = (await t10.callbacks?.session?.(...e11)) ?? {
                    ...e11[0].session,
                    expires:
                      e11[0].session.expires?.toISOString?.() ??
                      e11[0].session.expires
                  };
                  return { user: e11[0].user ?? e11[0].token, ...r10 };
                }
              }
            }
          );
        }
        function as(e10) {
          return 'function' == typeof e10;
        }
        function al(e10, t10) {
          return 'function' == typeof e10
            ? (...r10) => {
                if (!r10.length) {
                  let r11 = ai(),
                    n11 = e10(void 0);
                  return t10?.(n11), aa(r11, n11).then((e11) => e11.json());
                }
                if (r10[0] instanceof Request) {
                  let n11 = r10[0],
                    i11 = r10[1],
                    o11 = e10(n11);
                  return t10?.(o11), ac([n11, i11], o11);
                }
                if (as(r10[0])) {
                  let t11 = r10[0];
                  return async (...r11) => ac(r11, e10(r11[0]), t11);
                }
                let n10 = 'req' in r10[0] ? r10[0].req : r10[0],
                  i10 = 'res' in r10[0] ? r10[0].res : r10[1],
                  o10 = e10(n10);
                return (
                  t10?.(o10),
                  aa(new Headers(n10.headers), o10).then(async (e11) => {
                    let t11 = await e11.json();
                    for (let t12 of e11.headers.getSetCookie())
                      'headers' in i10
                        ? i10.headers.append('set-cookie', t12)
                        : i10.appendHeader('set-cookie', t12);
                    return t11;
                  })
                );
              }
            : (...t11) => {
                if (!t11.length) return aa(ai(), e10).then((e11) => e11.json());
                if (t11[0] instanceof Request) return ac([t11[0], t11[1]], e10);
                if (as(t11[0])) {
                  let r11 = t11[0];
                  return async (...t12) => ac(t12, e10, r11).then((e11) => e11);
                }
                let r10 = 'req' in t11[0] ? t11[0].req : t11[0],
                  n10 = 'res' in t11[0] ? t11[0].res : t11[1];
                return aa(new Headers(r10.headers), e10).then(async (e11) => {
                  let t12 = await e11.json();
                  for (let t13 of e11.headers.getSetCookie())
                    'headers' in n10
                      ? n10.headers.append('set-cookie', t13)
                      : n10.appendHeader('set-cookie', t13);
                  return t12;
                });
              };
        }
        async function ac(e10, t10, r10) {
          let n10 = o4(e10[0]),
            i10 = await aa(n10.headers, t10),
            o10 = await i10.json(),
            a2 = true;
          t10.callbacks?.authorized &&
            (a2 = await t10.callbacks.authorized({ request: n10, auth: o10 }));
          let s2 = D.next?.();
          if (a2 instanceof Response) {
            s2 = a2;
            let e11 = a2.headers.get('Location'),
              { pathname: r11 } = n10.nextUrl;
            e11 &&
              (function (e12, t11, r12) {
                let n11 = t11.replace(`${e12}/`, ''),
                  i11 = Object.values(r12.pages ?? {});
                return (au.has(n11) || i11.includes(t11)) && t11 === e12;
              })(r11, new URL(e11).pathname, t10) &&
              (a2 = true);
          } else if (r10)
            (n10.auth = o10), (s2 = (await r10(n10, e10[1])) ?? D.next());
          else if (!a2) {
            let e11 = t10.pages?.signIn ?? `${t10.basePath}/signin`;
            if (n10.nextUrl.pathname !== e11) {
              let t11 = n10.nextUrl.clone();
              (t11.pathname = e11),
                t11.searchParams.set('callbackUrl', n10.nextUrl.href),
                (s2 = D.redirect(t11));
            }
          }
          let l2 = new Response(s2?.body, s2);
          for (let e11 of i10.headers.getSetCookie())
            l2.headers.append('set-cookie', e11);
          return l2;
        }
        let au = /* @__PURE__ */ new Set([
          'providers',
          'session',
          'csrf',
          'signin',
          'signout',
          'callback',
          'verify-request',
          'error'
        ]);
        !(function (e10) {
          (e10[(e10.SeeOther = 303)] = 'SeeOther'),
            (e10[(e10.TemporaryRedirect = 307)] = 'TemporaryRedirect'),
            (e10[(e10.PermanentRedirect = 308)] = 'PermanentRedirect');
        })(a || (a = {}));
        let ad = 'NEXT_REDIRECT';
        function ap(e10, t10) {
          void 0 === t10 && (t10 = 'replace');
          let r10 = o9.W.getStore();
          throw (function (e11, t11, r11) {
            void 0 === r11 && (r11 = a.TemporaryRedirect);
            let n10 = Error(ad);
            n10.digest = ad + ';' + t11 + ';' + e11 + ';' + r11 + ';';
            let i10 = ev.F.getStore();
            return i10 && (n10.mutableCookies = i10.mutableCookies), n10;
          })(
            e10,
            t10,
            (null == r10 ? void 0 : r10.isAction)
              ? a.SeeOther
              : a.TemporaryRedirect
          );
        }
        async function ah(e10, t10 = {}, r10, n10) {
          let i10 = new Headers(ai()),
            {
              redirect: o10 = true,
              redirectTo: a2,
              ...s2
            } = t10 instanceof FormData ? Object.fromEntries(t10) : t10,
            l2 = a2?.toString() ?? i10.get('Referer') ?? '/',
            c2 = o5(
              'signin',
              i10.get('x-forwarded-proto'),
              i10,
              process.env,
              n10.basePath
            );
          if (!e10)
            return (
              c2.searchParams.append('callbackUrl', l2),
              o10 && ap(c2.toString()),
              c2.toString()
            );
          let u2 = `${c2}/${e10}?${new URLSearchParams(r10)}`,
            d2 = {};
          for (let t11 of n10.providers) {
            let { options: r11, ...n11 } =
                'function' == typeof t11 ? t11() : t11,
              i11 = r11?.id ?? n11.id;
            if (i11 === e10) {
              d2 = { id: i11, type: r11?.type ?? n11.type };
              break;
            }
          }
          if (!d2.id) {
            let e11 = `${c2}?${new URLSearchParams({ callbackUrl: l2 })}`;
            return o10 && ap(e11), e11;
          }
          'credentials' === d2.type && (u2 = u2.replace('signin', 'callback')),
            i10.set('Content-Type', 'application/x-www-form-urlencoded');
          let p2 = new Request(u2, {
              method: 'POST',
              headers: i10,
              body: new URLSearchParams({ ...s2, callbackUrl: l2 })
            }),
            h2 = await o6(p2, { ...n10, raw: o3, skipCSRFCheck: o2 });
          for (let e11 of h2?.cookies ?? [])
            ao().set(e11.name, e11.value, e11.options);
          return o10 ? ap(h2.redirect) : h2.redirect;
        }
        async function af(e10, t10) {
          let r10 = new Headers(ai());
          r10.set('Content-Type', 'application/x-www-form-urlencoded');
          let n10 = o5(
              'signout',
              r10.get('x-forwarded-proto'),
              r10,
              process.env,
              t10.basePath
            ),
            i10 = new URLSearchParams({
              callbackUrl: e10?.redirectTo ?? r10.get('Referer') ?? '/'
            }),
            o10 = new Request(n10, { method: 'POST', headers: r10, body: i10 }),
            a2 = await o6(o10, { ...t10, raw: o3, skipCSRFCheck: o2 });
          for (let e11 of a2?.cookies ?? [])
            ao().set(e11.name, e11.value, e11.options);
          return e10?.redirect ?? true ? ap(a2.redirect) : a2;
        }
        async function ag(e10, t10) {
          let r10 = new Headers(ai());
          r10.set('Content-Type', 'application/json');
          let n10 = new Request(
              o5(
                'session',
                r10.get('x-forwarded-proto'),
                r10,
                process.env,
                t10.basePath
              ),
              {
                method: 'POST',
                headers: r10,
                body: JSON.stringify({ data: e10 })
              }
            ),
            i10 = await o6(n10, { ...t10, raw: o3, skipCSRFCheck: o2 });
          for (let e11 of i10?.cookies ?? [])
            ao().set(e11.name, e11.value, e11.options);
          return i10.body;
        }
        !(function (e10) {
          (e10.push = 'push'), (e10.replace = 'replace');
        })(s || (s = {}));
        let { auth: am } = (function (e10) {
            if ('function' == typeof e10) {
              let t11 = (t12) => {
                let r10 = e10(t12);
                return o8(r10), o6(o4(t12), r10);
              };
              return {
                handlers: { GET: t11, POST: t11 },
                auth: al(e10, (e11) => o8(e11)),
                signIn: (t12, r10, n10) => {
                  let i10 = e10(void 0);
                  return o8(i10), ah(t12, r10, n10, i10);
                },
                signOut: (t12) => {
                  let r10 = e10(void 0);
                  return o8(r10), af(t12, r10);
                },
                unstable_update: (t12) => {
                  let r10 = e10(void 0);
                  return o8(r10), ag(t12, r10);
                }
              };
            }
            o8(e10);
            let t10 = (t11) => o6(o4(t11), e10);
            return {
              handlers: { GET: t10, POST: t10 },
              auth: al(e10),
              signIn: (t11, r10, n10) => ah(t11, r10, n10, e10),
              signOut: (t11) => af(t11, e10),
              unstable_update: (t11) => ag(t11, e10)
            };
          })({
            providers: [
              (function (e10) {
                let t10 = e10?.enterprise?.baseUrl ?? 'https://github.com',
                  r10 = e10?.enterprise?.baseUrl
                    ? `${e10?.enterprise?.baseUrl}/api/v3`
                    : 'https://api.github.com';
                return {
                  id: 'github',
                  name: 'GitHub',
                  type: 'oauth',
                  authorization: {
                    url: `${t10}/login/oauth/authorize`,
                    params: { scope: 'read:user user:email' }
                  },
                  token: `${t10}/login/oauth/access_token`,
                  userinfo: {
                    url: `${r10}/user`,
                    async request({ tokens: e11, provider: t11 }) {
                      let n10 = await fetch(t11.userinfo?.url, {
                        headers: {
                          Authorization: `Bearer ${e11.access_token}`,
                          'User-Agent': 'authjs'
                        }
                      }).then(async (e12) => await e12.json());
                      if (!n10.email) {
                        let t12 = await fetch(`${r10}/user/emails`, {
                          headers: {
                            Authorization: `Bearer ${e11.access_token}`,
                            'User-Agent': 'authjs'
                          }
                        });
                        if (t12.ok) {
                          let e12 = await t12.json();
                          n10.email = (
                            e12.find((e13) => e13.primary) ?? e12[0]
                          ).email;
                        }
                      }
                      return n10;
                    }
                  },
                  profile: (e11) => ({
                    id: e11.id.toString(),
                    name: e11.name ?? e11.login,
                    email: e11.email,
                    image: e11.avatar_url
                  }),
                  style: { bg: '#24292f', text: '#fff' },
                  options: e10
                };
              })({
                clientId: 'Ov23li8g1CaGdKL4pnhQ',
                clientSecret: '4748f490e249eb315b8d8dff5ebebdaeb35efe8c'
              }),
              {
                id: 'credentials',
                name: 'Credentials',
                type: 'credentials',
                credentials: {},
                authorize: () => null,
                options: {
                  credentials: {
                    email: { type: 'email' },
                    password: { type: 'password' }
                  },
                  authorize: async (e10, t10) => ({
                    id: '1',
                    name: 'John',
                    email: e10?.email
                  })
                }
              }
            ],
            pages: { signIn: '/' }
          }),
          ay = am((e10) => {
            if (!e10.auth) {
              let t10 = e10.url.replace(e10.nextUrl.pathname, '/');
              return Response.redirect(t10);
            }
          }),
          aw = { matcher: ['/dashboard/:path*'] },
          ab = { ...l },
          av = ab.middleware || ab.default,
          a_ = '/middleware';
        if ('function' != typeof av)
          throw Error(
            `The Middleware "${a_}" must export a \`middleware\` or a \`default\` function`
          );
        function aS(e10) {
          return eA({ ...e10, page: a_, handler: av });
        }
      },
      21471: (e, t) => {
        'use strict';
        (t.Q = function (e2, t2) {
          if ('string' != typeof e2)
            throw TypeError('argument str must be a string');
          for (
            var r2 = {}, n2 = (t2 || {}).decode || i, o2 = 0;
            o2 < e2.length;

          ) {
            var a = e2.indexOf('=', o2);
            if (-1 === a) break;
            var s = e2.indexOf(';', o2);
            if (-1 === s) s = e2.length;
            else if (s < a) {
              o2 = e2.lastIndexOf(';', a - 1) + 1;
              continue;
            }
            var l = e2.slice(o2, a).trim();
            if (void 0 === r2[l]) {
              var c = e2.slice(a + 1, s).trim();
              34 === c.charCodeAt(0) && (c = c.slice(1, -1)),
                (r2[l] = (function (e3, t3) {
                  try {
                    return t3(e3);
                  } catch (t4) {
                    return e3;
                  }
                })(c, n2));
            }
            o2 = s + 1;
          }
          return r2;
        }),
          (t.q = function (e2, t2, i2) {
            var a = i2 || {},
              s = a.encode || o;
            if ('function' != typeof s)
              throw TypeError('option encode is invalid');
            if (!n.test(e2)) throw TypeError('argument name is invalid');
            var l = s(t2);
            if (l && !n.test(l)) throw TypeError('argument val is invalid');
            var c = e2 + '=' + l;
            if (null != a.maxAge) {
              var u = a.maxAge - 0;
              if (isNaN(u) || !isFinite(u))
                throw TypeError('option maxAge is invalid');
              c += '; Max-Age=' + Math.floor(u);
            }
            if (a.domain) {
              if (!n.test(a.domain))
                throw TypeError('option domain is invalid');
              c += '; Domain=' + a.domain;
            }
            if (a.path) {
              if (!n.test(a.path)) throw TypeError('option path is invalid');
              c += '; Path=' + a.path;
            }
            if (a.expires) {
              var d = a.expires;
              if (
                ('[object Date]' !== r.call(d) && !(d instanceof Date)) ||
                isNaN(d.valueOf())
              )
                throw TypeError('option expires is invalid');
              c += '; Expires=' + d.toUTCString();
            }
            if (
              (a.httpOnly && (c += '; HttpOnly'),
              a.secure && (c += '; Secure'),
              a.partitioned && (c += '; Partitioned'),
              a.priority)
            )
              switch (
                'string' == typeof a.priority
                  ? a.priority.toLowerCase()
                  : a.priority
              ) {
                case 'low':
                  c += '; Priority=Low';
                  break;
                case 'medium':
                  c += '; Priority=Medium';
                  break;
                case 'high':
                  c += '; Priority=High';
                  break;
                default:
                  throw TypeError('option priority is invalid');
              }
            if (a.sameSite)
              switch (
                'string' == typeof a.sameSite
                  ? a.sameSite.toLowerCase()
                  : a.sameSite
              ) {
                case true:
                case 'strict':
                  c += '; SameSite=Strict';
                  break;
                case 'lax':
                  c += '; SameSite=Lax';
                  break;
                case 'none':
                  c += '; SameSite=None';
                  break;
                default:
                  throw TypeError('option sameSite is invalid');
              }
            return c;
          });
        var r = Object.prototype.toString,
          n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function i(e2) {
          return -1 !== e2.indexOf('%') ? decodeURIComponent(e2) : e2;
        }
        function o(e2) {
          return encodeURIComponent(e2);
        }
      },
      75447: (e) => {
        'use strict';
        var t = Object.defineProperty,
          r = Object.getOwnPropertyDescriptor,
          n = Object.getOwnPropertyNames,
          i = Object.prototype.hasOwnProperty,
          o = {};
        function a(e2) {
          var t2;
          let r2 = [
              'path' in e2 && e2.path && `Path=${e2.path}`,
              'expires' in e2 &&
                (e2.expires || 0 === e2.expires) &&
                `Expires=${('number' == typeof e2.expires
                  ? new Date(e2.expires)
                  : e2.expires
                ).toUTCString()}`,
              'maxAge' in e2 &&
                'number' == typeof e2.maxAge &&
                `Max-Age=${e2.maxAge}`,
              'domain' in e2 && e2.domain && `Domain=${e2.domain}`,
              'secure' in e2 && e2.secure && 'Secure',
              'httpOnly' in e2 && e2.httpOnly && 'HttpOnly',
              'sameSite' in e2 && e2.sameSite && `SameSite=${e2.sameSite}`,
              'partitioned' in e2 && e2.partitioned && 'Partitioned',
              'priority' in e2 && e2.priority && `Priority=${e2.priority}`
            ].filter(Boolean),
            n2 = `${e2.name}=${encodeURIComponent(
              null != (t2 = e2.value) ? t2 : ''
            )}`;
          return 0 === r2.length ? n2 : `${n2}; ${r2.join('; ')}`;
        }
        function s(e2) {
          let t2 = /* @__PURE__ */ new Map();
          for (let r2 of e2.split(/; */)) {
            if (!r2) continue;
            let e3 = r2.indexOf('=');
            if (-1 === e3) {
              t2.set(r2, 'true');
              continue;
            }
            let [n2, i2] = [r2.slice(0, e3), r2.slice(e3 + 1)];
            try {
              t2.set(n2, decodeURIComponent(null != i2 ? i2 : 'true'));
            } catch {}
          }
          return t2;
        }
        function l(e2) {
          var t2, r2;
          if (!e2) return;
          let [[n2, i2], ...o2] = s(e2),
            {
              domain: a2,
              expires: l2,
              httponly: d2,
              maxage: p2,
              path: h,
              samesite: f,
              secure: g,
              partitioned: m,
              priority: y
            } = Object.fromEntries(
              o2.map(([e3, t3]) => [e3.toLowerCase(), t3])
            );
          return (function (e3) {
            let t3 = {};
            for (let r3 in e3) e3[r3] && (t3[r3] = e3[r3]);
            return t3;
          })({
            name: n2,
            value: decodeURIComponent(i2),
            domain: a2,
            ...(l2 && { expires: new Date(l2) }),
            ...(d2 && { httpOnly: true }),
            ...('string' == typeof p2 && { maxAge: Number(p2) }),
            path: h,
            ...(f && {
              sameSite: c.includes((t2 = (t2 = f).toLowerCase())) ? t2 : void 0
            }),
            ...(g && { secure: true }),
            ...(y && {
              priority: u.includes((r2 = (r2 = y).toLowerCase())) ? r2 : void 0
            }),
            ...(m && { partitioned: true })
          });
        }
        ((e2, r2) => {
          for (var n2 in r2) t(e2, n2, { get: r2[n2], enumerable: true });
        })(o, {
          RequestCookies: () => d,
          ResponseCookies: () => p,
          parseCookie: () => s,
          parseSetCookie: () => l,
          stringifyCookie: () => a
        }),
          (e.exports = ((e2, o2, a2, s2) => {
            if ((o2 && 'object' == typeof o2) || 'function' == typeof o2)
              for (let l2 of n(o2))
                i.call(e2, l2) ||
                  l2 === a2 ||
                  t(e2, l2, {
                    get: () => o2[l2],
                    enumerable: !(s2 = r(o2, l2)) || s2.enumerable
                  });
            return e2;
          })(t({}, '__esModule', { value: true }), o));
        var c = ['strict', 'lax', 'none'],
          u = ['low', 'medium', 'high'],
          d = class {
            constructor(e2) {
              (this._parsed = /* @__PURE__ */ new Map()), (this._headers = e2);
              let t2 = e2.get('cookie');
              if (t2)
                for (let [e3, r2] of s(t2))
                  this._parsed.set(e3, { name: e3, value: r2 });
            }
            [Symbol.iterator]() {
              return this._parsed[Symbol.iterator]();
            }
            get size() {
              return this._parsed.size;
            }
            get(...e2) {
              let t2 = 'string' == typeof e2[0] ? e2[0] : e2[0].name;
              return this._parsed.get(t2);
            }
            getAll(...e2) {
              var t2;
              let r2 = Array.from(this._parsed);
              if (!e2.length) return r2.map(([e3, t3]) => t3);
              let n2 =
                'string' == typeof e2[0]
                  ? e2[0]
                  : null == (t2 = e2[0])
                  ? void 0
                  : t2.name;
              return r2.filter(([e3]) => e3 === n2).map(([e3, t3]) => t3);
            }
            has(e2) {
              return this._parsed.has(e2);
            }
            set(...e2) {
              let [t2, r2] = 1 === e2.length ? [e2[0].name, e2[0].value] : e2,
                n2 = this._parsed;
              return (
                n2.set(t2, { name: t2, value: r2 }),
                this._headers.set(
                  'cookie',
                  Array.from(n2)
                    .map(([e3, t3]) => a(t3))
                    .join('; ')
                ),
                this
              );
            }
            delete(e2) {
              let t2 = this._parsed,
                r2 = Array.isArray(e2)
                  ? e2.map((e3) => t2.delete(e3))
                  : t2.delete(e2);
              return (
                this._headers.set(
                  'cookie',
                  Array.from(t2)
                    .map(([e3, t3]) => a(t3))
                    .join('; ')
                ),
                r2
              );
            }
            clear() {
              return this.delete(Array.from(this._parsed.keys())), this;
            }
            [Symbol.for('edge-runtime.inspect.custom')]() {
              return `RequestCookies ${JSON.stringify(
                Object.fromEntries(this._parsed)
              )}`;
            }
            toString() {
              return [...this._parsed.values()]
                .map((e2) => `${e2.name}=${encodeURIComponent(e2.value)}`)
                .join('; ');
            }
          },
          p = class {
            constructor(e2) {
              var t2, r2, n2;
              (this._parsed = /* @__PURE__ */ new Map()), (this._headers = e2);
              let i2 =
                null !=
                (n2 =
                  null !=
                  (r2 = null == (t2 = e2.getSetCookie) ? void 0 : t2.call(e2))
                    ? r2
                    : e2.get('set-cookie'))
                  ? n2
                  : [];
              for (let e3 of Array.isArray(i2)
                ? i2
                : (function (e4) {
                    if (!e4) return [];
                    var t3,
                      r3,
                      n3,
                      i3,
                      o2,
                      a2 = [],
                      s2 = 0;
                    function l2() {
                      for (; s2 < e4.length && /\s/.test(e4.charAt(s2)); )
                        s2 += 1;
                      return s2 < e4.length;
                    }
                    for (; s2 < e4.length; ) {
                      for (t3 = s2, o2 = false; l2(); )
                        if (',' === (r3 = e4.charAt(s2))) {
                          for (
                            n3 = s2, s2 += 1, l2(), i3 = s2;
                            s2 < e4.length &&
                            '=' !== (r3 = e4.charAt(s2)) &&
                            ';' !== r3 &&
                            ',' !== r3;

                          )
                            s2 += 1;
                          s2 < e4.length && '=' === e4.charAt(s2)
                            ? ((o2 = true),
                              (s2 = i3),
                              a2.push(e4.substring(t3, n3)),
                              (t3 = s2))
                            : (s2 = n3 + 1);
                        } else s2 += 1;
                      (!o2 || s2 >= e4.length) &&
                        a2.push(e4.substring(t3, e4.length));
                    }
                    return a2;
                  })(i2)) {
                let t3 = l(e3);
                t3 && this._parsed.set(t3.name, t3);
              }
            }
            get(...e2) {
              let t2 = 'string' == typeof e2[0] ? e2[0] : e2[0].name;
              return this._parsed.get(t2);
            }
            getAll(...e2) {
              var t2;
              let r2 = Array.from(this._parsed.values());
              if (!e2.length) return r2;
              let n2 =
                'string' == typeof e2[0]
                  ? e2[0]
                  : null == (t2 = e2[0])
                  ? void 0
                  : t2.name;
              return r2.filter((e3) => e3.name === n2);
            }
            has(e2) {
              return this._parsed.has(e2);
            }
            set(...e2) {
              let [t2, r2, n2] =
                  1 === e2.length ? [e2[0].name, e2[0].value, e2[0]] : e2,
                i2 = this._parsed;
              return (
                i2.set(
                  t2,
                  (function (e3 = { name: '', value: '' }) {
                    return (
                      'number' == typeof e3.expires &&
                        (e3.expires = new Date(e3.expires)),
                      e3.maxAge &&
                        (e3.expires = new Date(Date.now() + 1e3 * e3.maxAge)),
                      (null === e3.path || void 0 === e3.path) &&
                        (e3.path = '/'),
                      e3
                    );
                  })({ name: t2, value: r2, ...n2 })
                ),
                (function (e3, t3) {
                  for (let [, r3] of (t3.delete('set-cookie'), e3)) {
                    let e4 = a(r3);
                    t3.append('set-cookie', e4);
                  }
                })(i2, this._headers),
                this
              );
            }
            delete(...e2) {
              let [t2, r2, n2] =
                'string' == typeof e2[0]
                  ? [e2[0]]
                  : [e2[0].name, e2[0].path, e2[0].domain];
              return this.set({
                name: t2,
                path: r2,
                domain: n2,
                value: '',
                expires: new Date(0)
              });
            }
            [Symbol.for('edge-runtime.inspect.custom')]() {
              return `ResponseCookies ${JSON.stringify(
                Object.fromEntries(this._parsed)
              )}`;
            }
            toString() {
              return [...this._parsed.values()].map(a).join('; ');
            }
          };
      },
      13692: (e, t, r) => {
        (() => {
          'use strict';
          var t2 = {
              491: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.ContextAPI = void 0);
                let n2 = r2(223),
                  i2 = r2(172),
                  o2 = r2(930),
                  a = 'context',
                  s = new n2.NoopContextManager();
                class l {
                  constructor() {}
                  static getInstance() {
                    return (
                      this._instance || (this._instance = new l()),
                      this._instance
                    );
                  }
                  setGlobalContextManager(e3) {
                    return (0, i2.registerGlobal)(a, e3, o2.DiagAPI.instance());
                  }
                  active() {
                    return this._getContextManager().active();
                  }
                  with(e3, t4, r3, ...n3) {
                    return this._getContextManager().with(e3, t4, r3, ...n3);
                  }
                  bind(e3, t4) {
                    return this._getContextManager().bind(e3, t4);
                  }
                  _getContextManager() {
                    return (0, i2.getGlobal)(a) || s;
                  }
                  disable() {
                    this._getContextManager().disable(),
                      (0, i2.unregisterGlobal)(a, o2.DiagAPI.instance());
                  }
                }
                t3.ContextAPI = l;
              },
              930: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.DiagAPI = void 0);
                let n2 = r2(56),
                  i2 = r2(912),
                  o2 = r2(957),
                  a = r2(172);
                class s {
                  constructor() {
                    function e3(e4) {
                      return function (...t5) {
                        let r3 = (0, a.getGlobal)('diag');
                        if (r3) return r3[e4](...t5);
                      };
                    }
                    let t4 = this;
                    (t4.setLogger = (
                      e4,
                      r3 = { logLevel: o2.DiagLogLevel.INFO }
                    ) => {
                      var n3, s2, l;
                      if (e4 === t4) {
                        let e5 = Error(
                          'Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation'
                        );
                        return (
                          t4.error(
                            null !== (n3 = e5.stack) && void 0 !== n3
                              ? n3
                              : e5.message
                          ),
                          false
                        );
                      }
                      'number' == typeof r3 && (r3 = { logLevel: r3 });
                      let c = (0, a.getGlobal)('diag'),
                        u = (0, i2.createLogLevelDiagLogger)(
                          null !== (s2 = r3.logLevel) && void 0 !== s2
                            ? s2
                            : o2.DiagLogLevel.INFO,
                          e4
                        );
                      if (c && !r3.suppressOverrideMessage) {
                        let e5 =
                          null !== (l = Error().stack) && void 0 !== l
                            ? l
                            : '<failed to generate stacktrace>';
                        c.warn(`Current logger will be overwritten from ${e5}`),
                          u.warn(
                            `Current logger will overwrite one already registered from ${e5}`
                          );
                      }
                      return (0, a.registerGlobal)('diag', u, t4, true);
                    }),
                      (t4.disable = () => {
                        (0, a.unregisterGlobal)('diag', t4);
                      }),
                      (t4.createComponentLogger = (e4) =>
                        new n2.DiagComponentLogger(e4)),
                      (t4.verbose = e3('verbose')),
                      (t4.debug = e3('debug')),
                      (t4.info = e3('info')),
                      (t4.warn = e3('warn')),
                      (t4.error = e3('error'));
                  }
                  static instance() {
                    return (
                      this._instance || (this._instance = new s()),
                      this._instance
                    );
                  }
                }
                t3.DiagAPI = s;
              },
              653: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.MetricsAPI = void 0);
                let n2 = r2(660),
                  i2 = r2(172),
                  o2 = r2(930),
                  a = 'metrics';
                class s {
                  constructor() {}
                  static getInstance() {
                    return (
                      this._instance || (this._instance = new s()),
                      this._instance
                    );
                  }
                  setGlobalMeterProvider(e3) {
                    return (0, i2.registerGlobal)(a, e3, o2.DiagAPI.instance());
                  }
                  getMeterProvider() {
                    return (0, i2.getGlobal)(a) || n2.NOOP_METER_PROVIDER;
                  }
                  getMeter(e3, t4, r3) {
                    return this.getMeterProvider().getMeter(e3, t4, r3);
                  }
                  disable() {
                    (0, i2.unregisterGlobal)(a, o2.DiagAPI.instance());
                  }
                }
                t3.MetricsAPI = s;
              },
              181: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.PropagationAPI = void 0);
                let n2 = r2(172),
                  i2 = r2(874),
                  o2 = r2(194),
                  a = r2(277),
                  s = r2(369),
                  l = r2(930),
                  c = 'propagation',
                  u = new i2.NoopTextMapPropagator();
                class d {
                  constructor() {
                    (this.createBaggage = s.createBaggage),
                      (this.getBaggage = a.getBaggage),
                      (this.getActiveBaggage = a.getActiveBaggage),
                      (this.setBaggage = a.setBaggage),
                      (this.deleteBaggage = a.deleteBaggage);
                  }
                  static getInstance() {
                    return (
                      this._instance || (this._instance = new d()),
                      this._instance
                    );
                  }
                  setGlobalPropagator(e3) {
                    return (0, n2.registerGlobal)(c, e3, l.DiagAPI.instance());
                  }
                  inject(e3, t4, r3 = o2.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e3, t4, r3);
                  }
                  extract(e3, t4, r3 = o2.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e3, t4, r3);
                  }
                  fields() {
                    return this._getGlobalPropagator().fields();
                  }
                  disable() {
                    (0, n2.unregisterGlobal)(c, l.DiagAPI.instance());
                  }
                  _getGlobalPropagator() {
                    return (0, n2.getGlobal)(c) || u;
                  }
                }
                t3.PropagationAPI = d;
              },
              997: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.TraceAPI = void 0);
                let n2 = r2(172),
                  i2 = r2(846),
                  o2 = r2(139),
                  a = r2(607),
                  s = r2(930),
                  l = 'trace';
                class c {
                  constructor() {
                    (this._proxyTracerProvider = new i2.ProxyTracerProvider()),
                      (this.wrapSpanContext = o2.wrapSpanContext),
                      (this.isSpanContextValid = o2.isSpanContextValid),
                      (this.deleteSpan = a.deleteSpan),
                      (this.getSpan = a.getSpan),
                      (this.getActiveSpan = a.getActiveSpan),
                      (this.getSpanContext = a.getSpanContext),
                      (this.setSpan = a.setSpan),
                      (this.setSpanContext = a.setSpanContext);
                  }
                  static getInstance() {
                    return (
                      this._instance || (this._instance = new c()),
                      this._instance
                    );
                  }
                  setGlobalTracerProvider(e3) {
                    let t4 = (0, n2.registerGlobal)(
                      l,
                      this._proxyTracerProvider,
                      s.DiagAPI.instance()
                    );
                    return t4 && this._proxyTracerProvider.setDelegate(e3), t4;
                  }
                  getTracerProvider() {
                    return (0, n2.getGlobal)(l) || this._proxyTracerProvider;
                  }
                  getTracer(e3, t4) {
                    return this.getTracerProvider().getTracer(e3, t4);
                  }
                  disable() {
                    (0, n2.unregisterGlobal)(l, s.DiagAPI.instance()),
                      (this._proxyTracerProvider =
                        new i2.ProxyTracerProvider());
                  }
                }
                t3.TraceAPI = c;
              },
              277: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.deleteBaggage =
                    t3.setBaggage =
                    t3.getActiveBaggage =
                    t3.getBaggage =
                      void 0);
                let n2 = r2(491),
                  i2 = (0, r2(780).createContextKey)(
                    'OpenTelemetry Baggage Key'
                  );
                function o2(e3) {
                  return e3.getValue(i2) || void 0;
                }
                (t3.getBaggage = o2),
                  (t3.getActiveBaggage = function () {
                    return o2(n2.ContextAPI.getInstance().active());
                  }),
                  (t3.setBaggage = function (e3, t4) {
                    return e3.setValue(i2, t4);
                  }),
                  (t3.deleteBaggage = function (e3) {
                    return e3.deleteValue(i2);
                  });
              },
              993: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.BaggageImpl = void 0);
                class r2 {
                  constructor(e3) {
                    this._entries = e3
                      ? new Map(e3)
                      : /* @__PURE__ */ new Map();
                  }
                  getEntry(e3) {
                    let t4 = this._entries.get(e3);
                    if (t4) return Object.assign({}, t4);
                  }
                  getAllEntries() {
                    return Array.from(this._entries.entries()).map(
                      ([e3, t4]) => [e3, t4]
                    );
                  }
                  setEntry(e3, t4) {
                    let n2 = new r2(this._entries);
                    return n2._entries.set(e3, t4), n2;
                  }
                  removeEntry(e3) {
                    let t4 = new r2(this._entries);
                    return t4._entries.delete(e3), t4;
                  }
                  removeEntries(...e3) {
                    let t4 = new r2(this._entries);
                    for (let r3 of e3) t4._entries.delete(r3);
                    return t4;
                  }
                  clear() {
                    return new r2();
                  }
                }
                t3.BaggageImpl = r2;
              },
              830: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.baggageEntryMetadataSymbol = void 0),
                  (t3.baggageEntryMetadataSymbol = Symbol(
                    'BaggageEntryMetadata'
                  ));
              },
              369: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.baggageEntryMetadataFromString = t3.createBaggage =
                    void 0);
                let n2 = r2(930),
                  i2 = r2(993),
                  o2 = r2(830),
                  a = n2.DiagAPI.instance();
                (t3.createBaggage = function (e3 = {}) {
                  return new i2.BaggageImpl(new Map(Object.entries(e3)));
                }),
                  (t3.baggageEntryMetadataFromString = function (e3) {
                    return (
                      'string' != typeof e3 &&
                        (a.error(
                          `Cannot create baggage metadata from unknown type: ${typeof e3}`
                        ),
                        (e3 = '')),
                      {
                        __TYPE__: o2.baggageEntryMetadataSymbol,
                        toString: () => e3
                      }
                    );
                  });
              },
              67: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.context = void 0);
                let n2 = r2(491);
                t3.context = n2.ContextAPI.getInstance();
              },
              223: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.NoopContextManager = void 0);
                let n2 = r2(780);
                class i2 {
                  active() {
                    return n2.ROOT_CONTEXT;
                  }
                  with(e3, t4, r3, ...n3) {
                    return t4.call(r3, ...n3);
                  }
                  bind(e3, t4) {
                    return t4;
                  }
                  enable() {
                    return this;
                  }
                  disable() {
                    return this;
                  }
                }
                t3.NoopContextManager = i2;
              },
              780: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.ROOT_CONTEXT = t3.createContextKey = void 0),
                  (t3.createContextKey = function (e3) {
                    return Symbol.for(e3);
                  });
                class r2 {
                  constructor(e3) {
                    let t4 = this;
                    (t4._currentContext = e3
                      ? new Map(e3)
                      : /* @__PURE__ */ new Map()),
                      (t4.getValue = (e4) => t4._currentContext.get(e4)),
                      (t4.setValue = (e4, n2) => {
                        let i2 = new r2(t4._currentContext);
                        return i2._currentContext.set(e4, n2), i2;
                      }),
                      (t4.deleteValue = (e4) => {
                        let n2 = new r2(t4._currentContext);
                        return n2._currentContext.delete(e4), n2;
                      });
                  }
                }
                t3.ROOT_CONTEXT = new r2();
              },
              506: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.diag = void 0);
                let n2 = r2(930);
                t3.diag = n2.DiagAPI.instance();
              },
              56: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.DiagComponentLogger = void 0);
                let n2 = r2(172);
                class i2 {
                  constructor(e3) {
                    this._namespace = e3.namespace || 'DiagComponentLogger';
                  }
                  debug(...e3) {
                    return o2('debug', this._namespace, e3);
                  }
                  error(...e3) {
                    return o2('error', this._namespace, e3);
                  }
                  info(...e3) {
                    return o2('info', this._namespace, e3);
                  }
                  warn(...e3) {
                    return o2('warn', this._namespace, e3);
                  }
                  verbose(...e3) {
                    return o2('verbose', this._namespace, e3);
                  }
                }
                function o2(e3, t4, r3) {
                  let i3 = (0, n2.getGlobal)('diag');
                  if (i3) return r3.unshift(t4), i3[e3](...r3);
                }
                t3.DiagComponentLogger = i2;
              },
              972: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.DiagConsoleLogger = void 0);
                let r2 = [
                  { n: 'error', c: 'error' },
                  { n: 'warn', c: 'warn' },
                  { n: 'info', c: 'info' },
                  { n: 'debug', c: 'debug' },
                  { n: 'verbose', c: 'trace' }
                ];
                class n2 {
                  constructor() {
                    for (let e3 = 0; e3 < r2.length; e3++)
                      this[r2[e3].n] = (function (e4) {
                        return function (...t4) {
                          if (console) {
                            let r3 = console[e4];
                            if (
                              ('function' != typeof r3 && (r3 = console.log),
                              'function' == typeof r3)
                            )
                              return r3.apply(console, t4);
                          }
                        };
                      })(r2[e3].c);
                  }
                }
                t3.DiagConsoleLogger = n2;
              },
              912: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.createLogLevelDiagLogger = void 0);
                let n2 = r2(957);
                t3.createLogLevelDiagLogger = function (e3, t4) {
                  function r3(r4, n3) {
                    let i2 = t4[r4];
                    return 'function' == typeof i2 && e3 >= n3
                      ? i2.bind(t4)
                      : function () {};
                  }
                  return (
                    e3 < n2.DiagLogLevel.NONE
                      ? (e3 = n2.DiagLogLevel.NONE)
                      : e3 > n2.DiagLogLevel.ALL && (e3 = n2.DiagLogLevel.ALL),
                    (t4 = t4 || {}),
                    {
                      error: r3('error', n2.DiagLogLevel.ERROR),
                      warn: r3('warn', n2.DiagLogLevel.WARN),
                      info: r3('info', n2.DiagLogLevel.INFO),
                      debug: r3('debug', n2.DiagLogLevel.DEBUG),
                      verbose: r3('verbose', n2.DiagLogLevel.VERBOSE)
                    }
                  );
                };
              },
              957: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.DiagLogLevel = void 0),
                  (function (e3) {
                    (e3[(e3.NONE = 0)] = 'NONE'),
                      (e3[(e3.ERROR = 30)] = 'ERROR'),
                      (e3[(e3.WARN = 50)] = 'WARN'),
                      (e3[(e3.INFO = 60)] = 'INFO'),
                      (e3[(e3.DEBUG = 70)] = 'DEBUG'),
                      (e3[(e3.VERBOSE = 80)] = 'VERBOSE'),
                      (e3[(e3.ALL = 9999)] = 'ALL');
                  })(t3.DiagLogLevel || (t3.DiagLogLevel = {}));
              },
              172: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.unregisterGlobal =
                    t3.getGlobal =
                    t3.registerGlobal =
                      void 0);
                let n2 = r2(200),
                  i2 = r2(521),
                  o2 = r2(130),
                  a = i2.VERSION.split('.')[0],
                  s = Symbol.for(`opentelemetry.js.api.${a}`),
                  l = n2._globalThis;
                (t3.registerGlobal = function (e3, t4, r3, n3 = false) {
                  var o3;
                  let a2 = (l[s] =
                    null !== (o3 = l[s]) && void 0 !== o3
                      ? o3
                      : { version: i2.VERSION });
                  if (!n3 && a2[e3]) {
                    let t5 = Error(
                      `@opentelemetry/api: Attempted duplicate registration of API: ${e3}`
                    );
                    return r3.error(t5.stack || t5.message), false;
                  }
                  if (a2.version !== i2.VERSION) {
                    let t5 = Error(
                      `@opentelemetry/api: Registration of version v${a2.version} for ${e3} does not match previously registered API v${i2.VERSION}`
                    );
                    return r3.error(t5.stack || t5.message), false;
                  }
                  return (
                    (a2[e3] = t4),
                    r3.debug(
                      `@opentelemetry/api: Registered a global for ${e3} v${i2.VERSION}.`
                    ),
                    true
                  );
                }),
                  (t3.getGlobal = function (e3) {
                    var t4, r3;
                    let n3 =
                      null === (t4 = l[s]) || void 0 === t4
                        ? void 0
                        : t4.version;
                    if (n3 && (0, o2.isCompatible)(n3))
                      return null === (r3 = l[s]) || void 0 === r3
                        ? void 0
                        : r3[e3];
                  }),
                  (t3.unregisterGlobal = function (e3, t4) {
                    t4.debug(
                      `@opentelemetry/api: Unregistering a global for ${e3} v${i2.VERSION}.`
                    );
                    let r3 = l[s];
                    r3 && delete r3[e3];
                  });
              },
              130: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.isCompatible = t3._makeCompatibilityCheck = void 0);
                let n2 = r2(521),
                  i2 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
                function o2(e3) {
                  let t4 = /* @__PURE__ */ new Set([e3]),
                    r3 = /* @__PURE__ */ new Set(),
                    n3 = e3.match(i2);
                  if (!n3) return () => false;
                  let o3 = {
                    major: +n3[1],
                    minor: +n3[2],
                    patch: +n3[3],
                    prerelease: n3[4]
                  };
                  if (null != o3.prerelease)
                    return function (t5) {
                      return t5 === e3;
                    };
                  function a(e4) {
                    return r3.add(e4), false;
                  }
                  return function (e4) {
                    if (t4.has(e4)) return true;
                    if (r3.has(e4)) return false;
                    let n4 = e4.match(i2);
                    if (!n4) return a(e4);
                    let s = {
                      major: +n4[1],
                      minor: +n4[2],
                      patch: +n4[3],
                      prerelease: n4[4]
                    };
                    return null != s.prerelease || o3.major !== s.major
                      ? a(e4)
                      : 0 === o3.major
                      ? o3.minor === s.minor && o3.patch <= s.patch
                        ? (t4.add(e4), true)
                        : a(e4)
                      : o3.minor <= s.minor
                      ? (t4.add(e4), true)
                      : a(e4);
                  };
                }
                (t3._makeCompatibilityCheck = o2),
                  (t3.isCompatible = o2(n2.VERSION));
              },
              886: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.metrics = void 0);
                let n2 = r2(653);
                t3.metrics = n2.MetricsAPI.getInstance();
              },
              901: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.ValueType = void 0),
                  (function (e3) {
                    (e3[(e3.INT = 0)] = 'INT'),
                      (e3[(e3.DOUBLE = 1)] = 'DOUBLE');
                  })(t3.ValueType || (t3.ValueType = {}));
              },
              102: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.createNoopMeter =
                    t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
                    t3.NOOP_OBSERVABLE_GAUGE_METRIC =
                    t3.NOOP_OBSERVABLE_COUNTER_METRIC =
                    t3.NOOP_UP_DOWN_COUNTER_METRIC =
                    t3.NOOP_HISTOGRAM_METRIC =
                    t3.NOOP_COUNTER_METRIC =
                    t3.NOOP_METER =
                    t3.NoopObservableUpDownCounterMetric =
                    t3.NoopObservableGaugeMetric =
                    t3.NoopObservableCounterMetric =
                    t3.NoopObservableMetric =
                    t3.NoopHistogramMetric =
                    t3.NoopUpDownCounterMetric =
                    t3.NoopCounterMetric =
                    t3.NoopMetric =
                    t3.NoopMeter =
                      void 0);
                class r2 {
                  constructor() {}
                  createHistogram(e3, r3) {
                    return t3.NOOP_HISTOGRAM_METRIC;
                  }
                  createCounter(e3, r3) {
                    return t3.NOOP_COUNTER_METRIC;
                  }
                  createUpDownCounter(e3, r3) {
                    return t3.NOOP_UP_DOWN_COUNTER_METRIC;
                  }
                  createObservableGauge(e3, r3) {
                    return t3.NOOP_OBSERVABLE_GAUGE_METRIC;
                  }
                  createObservableCounter(e3, r3) {
                    return t3.NOOP_OBSERVABLE_COUNTER_METRIC;
                  }
                  createObservableUpDownCounter(e3, r3) {
                    return t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                  }
                  addBatchObservableCallback(e3, t4) {}
                  removeBatchObservableCallback(e3) {}
                }
                t3.NoopMeter = r2;
                class n2 {}
                t3.NoopMetric = n2;
                class i2 extends n2 {
                  add(e3, t4) {}
                }
                t3.NoopCounterMetric = i2;
                class o2 extends n2 {
                  add(e3, t4) {}
                }
                t3.NoopUpDownCounterMetric = o2;
                class a extends n2 {
                  record(e3, t4) {}
                }
                t3.NoopHistogramMetric = a;
                class s {
                  addCallback(e3) {}
                  removeCallback(e3) {}
                }
                t3.NoopObservableMetric = s;
                class l extends s {}
                t3.NoopObservableCounterMetric = l;
                class c extends s {}
                t3.NoopObservableGaugeMetric = c;
                class u extends s {}
                (t3.NoopObservableUpDownCounterMetric = u),
                  (t3.NOOP_METER = new r2()),
                  (t3.NOOP_COUNTER_METRIC = new i2()),
                  (t3.NOOP_HISTOGRAM_METRIC = new a()),
                  (t3.NOOP_UP_DOWN_COUNTER_METRIC = new o2()),
                  (t3.NOOP_OBSERVABLE_COUNTER_METRIC = new l()),
                  (t3.NOOP_OBSERVABLE_GAUGE_METRIC = new c()),
                  (t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new u()),
                  (t3.createNoopMeter = function () {
                    return t3.NOOP_METER;
                  });
              },
              660: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.NOOP_METER_PROVIDER = t3.NoopMeterProvider = void 0);
                let n2 = r2(102);
                class i2 {
                  getMeter(e3, t4, r3) {
                    return n2.NOOP_METER;
                  }
                }
                (t3.NoopMeterProvider = i2),
                  (t3.NOOP_METER_PROVIDER = new i2());
              },
              200: function (e2, t3, r2) {
                var n2 =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e3, t4, r3, n3) {
                          void 0 === n3 && (n3 = r3),
                            Object.defineProperty(e3, n3, {
                              enumerable: true,
                              get: function () {
                                return t4[r3];
                              }
                            });
                        }
                      : function (e3, t4, r3, n3) {
                          void 0 === n3 && (n3 = r3), (e3[n3] = t4[r3]);
                        }),
                  i2 =
                    (this && this.__exportStar) ||
                    function (e3, t4) {
                      for (var r3 in e3)
                        'default' === r3 ||
                          Object.prototype.hasOwnProperty.call(t4, r3) ||
                          n2(t4, e3, r3);
                    };
                Object.defineProperty(t3, '__esModule', { value: true }),
                  i2(r2(46), t3);
              },
              651: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3._globalThis = void 0),
                  (t3._globalThis =
                    'object' == typeof globalThis2 ? globalThis2 : r.g);
              },
              46: function (e2, t3, r2) {
                var n2 =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e3, t4, r3, n3) {
                          void 0 === n3 && (n3 = r3),
                            Object.defineProperty(e3, n3, {
                              enumerable: true,
                              get: function () {
                                return t4[r3];
                              }
                            });
                        }
                      : function (e3, t4, r3, n3) {
                          void 0 === n3 && (n3 = r3), (e3[n3] = t4[r3]);
                        }),
                  i2 =
                    (this && this.__exportStar) ||
                    function (e3, t4) {
                      for (var r3 in e3)
                        'default' === r3 ||
                          Object.prototype.hasOwnProperty.call(t4, r3) ||
                          n2(t4, e3, r3);
                    };
                Object.defineProperty(t3, '__esModule', { value: true }),
                  i2(r2(651), t3);
              },
              939: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.propagation = void 0);
                let n2 = r2(181);
                t3.propagation = n2.PropagationAPI.getInstance();
              },
              874: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.NoopTextMapPropagator = void 0);
                class r2 {
                  inject(e3, t4) {}
                  extract(e3, t4) {
                    return e3;
                  }
                  fields() {
                    return [];
                  }
                }
                t3.NoopTextMapPropagator = r2;
              },
              194: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.defaultTextMapSetter = t3.defaultTextMapGetter = void 0),
                  (t3.defaultTextMapGetter = {
                    get(e3, t4) {
                      if (null != e3) return e3[t4];
                    },
                    keys: (e3) => (null == e3 ? [] : Object.keys(e3))
                  }),
                  (t3.defaultTextMapSetter = {
                    set(e3, t4, r2) {
                      null != e3 && (e3[t4] = r2);
                    }
                  });
              },
              845: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.trace = void 0);
                let n2 = r2(997);
                t3.trace = n2.TraceAPI.getInstance();
              },
              403: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.NonRecordingSpan = void 0);
                let n2 = r2(476);
                class i2 {
                  constructor(e3 = n2.INVALID_SPAN_CONTEXT) {
                    this._spanContext = e3;
                  }
                  spanContext() {
                    return this._spanContext;
                  }
                  setAttribute(e3, t4) {
                    return this;
                  }
                  setAttributes(e3) {
                    return this;
                  }
                  addEvent(e3, t4) {
                    return this;
                  }
                  setStatus(e3) {
                    return this;
                  }
                  updateName(e3) {
                    return this;
                  }
                  end(e3) {}
                  isRecording() {
                    return false;
                  }
                  recordException(e3, t4) {}
                }
                t3.NonRecordingSpan = i2;
              },
              614: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.NoopTracer = void 0);
                let n2 = r2(491),
                  i2 = r2(607),
                  o2 = r2(403),
                  a = r2(139),
                  s = n2.ContextAPI.getInstance();
                class l {
                  startSpan(e3, t4, r3 = s.active()) {
                    if (null == t4 ? void 0 : t4.root)
                      return new o2.NonRecordingSpan();
                    let n3 = r3 && (0, i2.getSpanContext)(r3);
                    return 'object' == typeof n3 &&
                      'string' == typeof n3.spanId &&
                      'string' == typeof n3.traceId &&
                      'number' == typeof n3.traceFlags &&
                      (0, a.isSpanContextValid)(n3)
                      ? new o2.NonRecordingSpan(n3)
                      : new o2.NonRecordingSpan();
                  }
                  startActiveSpan(e3, t4, r3, n3) {
                    let o3, a2, l2;
                    if (arguments.length < 2) return;
                    2 == arguments.length
                      ? (l2 = t4)
                      : 3 == arguments.length
                      ? ((o3 = t4), (l2 = r3))
                      : ((o3 = t4), (a2 = r3), (l2 = n3));
                    let c = null != a2 ? a2 : s.active(),
                      u = this.startSpan(e3, o3, c),
                      d = (0, i2.setSpan)(c, u);
                    return s.with(d, l2, void 0, u);
                  }
                }
                t3.NoopTracer = l;
              },
              124: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.NoopTracerProvider = void 0);
                let n2 = r2(614);
                class i2 {
                  getTracer(e3, t4, r3) {
                    return new n2.NoopTracer();
                  }
                }
                t3.NoopTracerProvider = i2;
              },
              125: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.ProxyTracer = void 0);
                let n2 = new (r2(614).NoopTracer)();
                class i2 {
                  constructor(e3, t4, r3, n3) {
                    (this._provider = e3),
                      (this.name = t4),
                      (this.version = r3),
                      (this.options = n3);
                  }
                  startSpan(e3, t4, r3) {
                    return this._getTracer().startSpan(e3, t4, r3);
                  }
                  startActiveSpan(e3, t4, r3, n3) {
                    let i3 = this._getTracer();
                    return Reflect.apply(i3.startActiveSpan, i3, arguments);
                  }
                  _getTracer() {
                    if (this._delegate) return this._delegate;
                    let e3 = this._provider.getDelegateTracer(
                      this.name,
                      this.version,
                      this.options
                    );
                    return e3 ? ((this._delegate = e3), this._delegate) : n2;
                  }
                }
                t3.ProxyTracer = i2;
              },
              846: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.ProxyTracerProvider = void 0);
                let n2 = r2(125),
                  i2 = new (r2(124).NoopTracerProvider)();
                class o2 {
                  getTracer(e3, t4, r3) {
                    var i3;
                    return null !== (i3 = this.getDelegateTracer(e3, t4, r3)) &&
                      void 0 !== i3
                      ? i3
                      : new n2.ProxyTracer(this, e3, t4, r3);
                  }
                  getDelegate() {
                    var e3;
                    return null !== (e3 = this._delegate) && void 0 !== e3
                      ? e3
                      : i2;
                  }
                  setDelegate(e3) {
                    this._delegate = e3;
                  }
                  getDelegateTracer(e3, t4, r3) {
                    var n3;
                    return null === (n3 = this._delegate) || void 0 === n3
                      ? void 0
                      : n3.getTracer(e3, t4, r3);
                  }
                }
                t3.ProxyTracerProvider = o2;
              },
              996: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.SamplingDecision = void 0),
                  (function (e3) {
                    (e3[(e3.NOT_RECORD = 0)] = 'NOT_RECORD'),
                      (e3[(e3.RECORD = 1)] = 'RECORD'),
                      (e3[(e3.RECORD_AND_SAMPLED = 2)] = 'RECORD_AND_SAMPLED');
                  })(t3.SamplingDecision || (t3.SamplingDecision = {}));
              },
              607: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.getSpanContext =
                    t3.setSpanContext =
                    t3.deleteSpan =
                    t3.setSpan =
                    t3.getActiveSpan =
                    t3.getSpan =
                      void 0);
                let n2 = r2(780),
                  i2 = r2(403),
                  o2 = r2(491),
                  a = (0, n2.createContextKey)(
                    'OpenTelemetry Context Key SPAN'
                  );
                function s(e3) {
                  return e3.getValue(a) || void 0;
                }
                function l(e3, t4) {
                  return e3.setValue(a, t4);
                }
                (t3.getSpan = s),
                  (t3.getActiveSpan = function () {
                    return s(o2.ContextAPI.getInstance().active());
                  }),
                  (t3.setSpan = l),
                  (t3.deleteSpan = function (e3) {
                    return e3.deleteValue(a);
                  }),
                  (t3.setSpanContext = function (e3, t4) {
                    return l(e3, new i2.NonRecordingSpan(t4));
                  }),
                  (t3.getSpanContext = function (e3) {
                    var t4;
                    return null === (t4 = s(e3)) || void 0 === t4
                      ? void 0
                      : t4.spanContext();
                  });
              },
              325: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.TraceStateImpl = void 0);
                let n2 = r2(564);
                class i2 {
                  constructor(e3) {
                    (this._internalState = /* @__PURE__ */ new Map()),
                      e3 && this._parse(e3);
                  }
                  set(e3, t4) {
                    let r3 = this._clone();
                    return (
                      r3._internalState.has(e3) && r3._internalState.delete(e3),
                      r3._internalState.set(e3, t4),
                      r3
                    );
                  }
                  unset(e3) {
                    let t4 = this._clone();
                    return t4._internalState.delete(e3), t4;
                  }
                  get(e3) {
                    return this._internalState.get(e3);
                  }
                  serialize() {
                    return this._keys()
                      .reduce(
                        (e3, t4) => (e3.push(t4 + '=' + this.get(t4)), e3),
                        []
                      )
                      .join(',');
                  }
                  _parse(e3) {
                    !(e3.length > 512) &&
                      ((this._internalState = e3
                        .split(',')
                        .reverse()
                        .reduce((e4, t4) => {
                          let r3 = t4.trim(),
                            i3 = r3.indexOf('=');
                          if (-1 !== i3) {
                            let o2 = r3.slice(0, i3),
                              a = r3.slice(i3 + 1, t4.length);
                            (0, n2.validateKey)(o2) &&
                              (0, n2.validateValue)(a) &&
                              e4.set(o2, a);
                          }
                          return e4;
                        }, /* @__PURE__ */ new Map())),
                      this._internalState.size > 32 &&
                        (this._internalState = new Map(
                          Array.from(this._internalState.entries())
                            .reverse()
                            .slice(0, 32)
                        )));
                  }
                  _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                  }
                  _clone() {
                    let e3 = new i2();
                    return (
                      (e3._internalState = new Map(this._internalState)), e3
                    );
                  }
                }
                t3.TraceStateImpl = i2;
              },
              564: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.validateValue = t3.validateKey = void 0);
                let r2 = '[_0-9a-z-*/]',
                  n2 = `[a-z]${r2}{0,255}`,
                  i2 = `[a-z0-9]${r2}{0,240}@[a-z]${r2}{0,13}`,
                  o2 = RegExp(`^(?:${n2}|${i2})$`),
                  a = /^[ -~]{0,255}[!-~]$/,
                  s = /,|=/;
                (t3.validateKey = function (e3) {
                  return o2.test(e3);
                }),
                  (t3.validateValue = function (e3) {
                    return a.test(e3) && !s.test(e3);
                  });
              },
              98: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.createTraceState = void 0);
                let n2 = r2(325);
                t3.createTraceState = function (e3) {
                  return new n2.TraceStateImpl(e3);
                };
              },
              476: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.INVALID_SPAN_CONTEXT =
                    t3.INVALID_TRACEID =
                    t3.INVALID_SPANID =
                      void 0);
                let n2 = r2(475);
                (t3.INVALID_SPANID = '0000000000000000'),
                  (t3.INVALID_TRACEID = '00000000000000000000000000000000'),
                  (t3.INVALID_SPAN_CONTEXT = {
                    traceId: t3.INVALID_TRACEID,
                    spanId: t3.INVALID_SPANID,
                    traceFlags: n2.TraceFlags.NONE
                  });
              },
              357: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.SpanKind = void 0),
                  (function (e3) {
                    (e3[(e3.INTERNAL = 0)] = 'INTERNAL'),
                      (e3[(e3.SERVER = 1)] = 'SERVER'),
                      (e3[(e3.CLIENT = 2)] = 'CLIENT'),
                      (e3[(e3.PRODUCER = 3)] = 'PRODUCER'),
                      (e3[(e3.CONSUMER = 4)] = 'CONSUMER');
                  })(t3.SpanKind || (t3.SpanKind = {}));
              },
              139: (e2, t3, r2) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.wrapSpanContext =
                    t3.isSpanContextValid =
                    t3.isValidSpanId =
                    t3.isValidTraceId =
                      void 0);
                let n2 = r2(476),
                  i2 = r2(403),
                  o2 = /^([0-9a-f]{32})$/i,
                  a = /^[0-9a-f]{16}$/i;
                function s(e3) {
                  return o2.test(e3) && e3 !== n2.INVALID_TRACEID;
                }
                function l(e3) {
                  return a.test(e3) && e3 !== n2.INVALID_SPANID;
                }
                (t3.isValidTraceId = s),
                  (t3.isValidSpanId = l),
                  (t3.isSpanContextValid = function (e3) {
                    return s(e3.traceId) && l(e3.spanId);
                  }),
                  (t3.wrapSpanContext = function (e3) {
                    return new i2.NonRecordingSpan(e3);
                  });
              },
              847: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.SpanStatusCode = void 0),
                  (function (e3) {
                    (e3[(e3.UNSET = 0)] = 'UNSET'),
                      (e3[(e3.OK = 1)] = 'OK'),
                      (e3[(e3.ERROR = 2)] = 'ERROR');
                  })(t3.SpanStatusCode || (t3.SpanStatusCode = {}));
              },
              475: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.TraceFlags = void 0),
                  (function (e3) {
                    (e3[(e3.NONE = 0)] = 'NONE'),
                      (e3[(e3.SAMPLED = 1)] = 'SAMPLED');
                  })(t3.TraceFlags || (t3.TraceFlags = {}));
              },
              521: (e2, t3) => {
                Object.defineProperty(t3, '__esModule', { value: true }),
                  (t3.VERSION = void 0),
                  (t3.VERSION = '1.6.0');
              }
            },
            n = {};
          function i(e2) {
            var r2 = n[e2];
            if (void 0 !== r2) return r2.exports;
            var o2 = (n[e2] = { exports: {} }),
              a = true;
            try {
              t2[e2].call(o2.exports, o2, o2.exports, i), (a = false);
            } finally {
              a && delete n[e2];
            }
            return o2.exports;
          }
          i.ab = '//';
          var o = {};
          (() => {
            Object.defineProperty(o, '__esModule', { value: true }),
              (o.trace =
                o.propagation =
                o.metrics =
                o.diag =
                o.context =
                o.INVALID_SPAN_CONTEXT =
                o.INVALID_TRACEID =
                o.INVALID_SPANID =
                o.isValidSpanId =
                o.isValidTraceId =
                o.isSpanContextValid =
                o.createTraceState =
                o.TraceFlags =
                o.SpanStatusCode =
                o.SpanKind =
                o.SamplingDecision =
                o.ProxyTracerProvider =
                o.ProxyTracer =
                o.defaultTextMapSetter =
                o.defaultTextMapGetter =
                o.ValueType =
                o.createNoopMeter =
                o.DiagLogLevel =
                o.DiagConsoleLogger =
                o.ROOT_CONTEXT =
                o.createContextKey =
                o.baggageEntryMetadataFromString =
                  void 0);
            var e2 = i(369);
            Object.defineProperty(o, 'baggageEntryMetadataFromString', {
              enumerable: true,
              get: function () {
                return e2.baggageEntryMetadataFromString;
              }
            });
            var t3 = i(780);
            Object.defineProperty(o, 'createContextKey', {
              enumerable: true,
              get: function () {
                return t3.createContextKey;
              }
            }),
              Object.defineProperty(o, 'ROOT_CONTEXT', {
                enumerable: true,
                get: function () {
                  return t3.ROOT_CONTEXT;
                }
              });
            var r2 = i(972);
            Object.defineProperty(o, 'DiagConsoleLogger', {
              enumerable: true,
              get: function () {
                return r2.DiagConsoleLogger;
              }
            });
            var n2 = i(957);
            Object.defineProperty(o, 'DiagLogLevel', {
              enumerable: true,
              get: function () {
                return n2.DiagLogLevel;
              }
            });
            var a = i(102);
            Object.defineProperty(o, 'createNoopMeter', {
              enumerable: true,
              get: function () {
                return a.createNoopMeter;
              }
            });
            var s = i(901);
            Object.defineProperty(o, 'ValueType', {
              enumerable: true,
              get: function () {
                return s.ValueType;
              }
            });
            var l = i(194);
            Object.defineProperty(o, 'defaultTextMapGetter', {
              enumerable: true,
              get: function () {
                return l.defaultTextMapGetter;
              }
            }),
              Object.defineProperty(o, 'defaultTextMapSetter', {
                enumerable: true,
                get: function () {
                  return l.defaultTextMapSetter;
                }
              });
            var c = i(125);
            Object.defineProperty(o, 'ProxyTracer', {
              enumerable: true,
              get: function () {
                return c.ProxyTracer;
              }
            });
            var u = i(846);
            Object.defineProperty(o, 'ProxyTracerProvider', {
              enumerable: true,
              get: function () {
                return u.ProxyTracerProvider;
              }
            });
            var d = i(996);
            Object.defineProperty(o, 'SamplingDecision', {
              enumerable: true,
              get: function () {
                return d.SamplingDecision;
              }
            });
            var p = i(357);
            Object.defineProperty(o, 'SpanKind', {
              enumerable: true,
              get: function () {
                return p.SpanKind;
              }
            });
            var h = i(847);
            Object.defineProperty(o, 'SpanStatusCode', {
              enumerable: true,
              get: function () {
                return h.SpanStatusCode;
              }
            });
            var f = i(475);
            Object.defineProperty(o, 'TraceFlags', {
              enumerable: true,
              get: function () {
                return f.TraceFlags;
              }
            });
            var g = i(98);
            Object.defineProperty(o, 'createTraceState', {
              enumerable: true,
              get: function () {
                return g.createTraceState;
              }
            });
            var m = i(139);
            Object.defineProperty(o, 'isSpanContextValid', {
              enumerable: true,
              get: function () {
                return m.isSpanContextValid;
              }
            }),
              Object.defineProperty(o, 'isValidTraceId', {
                enumerable: true,
                get: function () {
                  return m.isValidTraceId;
                }
              }),
              Object.defineProperty(o, 'isValidSpanId', {
                enumerable: true,
                get: function () {
                  return m.isValidSpanId;
                }
              });
            var y = i(476);
            Object.defineProperty(o, 'INVALID_SPANID', {
              enumerable: true,
              get: function () {
                return y.INVALID_SPANID;
              }
            }),
              Object.defineProperty(o, 'INVALID_TRACEID', {
                enumerable: true,
                get: function () {
                  return y.INVALID_TRACEID;
                }
              }),
              Object.defineProperty(o, 'INVALID_SPAN_CONTEXT', {
                enumerable: true,
                get: function () {
                  return y.INVALID_SPAN_CONTEXT;
                }
              });
            let w = i(67);
            Object.defineProperty(o, 'context', {
              enumerable: true,
              get: function () {
                return w.context;
              }
            });
            let b = i(506);
            Object.defineProperty(o, 'diag', {
              enumerable: true,
              get: function () {
                return b.diag;
              }
            });
            let v = i(886);
            Object.defineProperty(o, 'metrics', {
              enumerable: true,
              get: function () {
                return v.metrics;
              }
            });
            let _ = i(939);
            Object.defineProperty(o, 'propagation', {
              enumerable: true,
              get: function () {
                return _.propagation;
              }
            });
            let S = i(845);
            Object.defineProperty(o, 'trace', {
              enumerable: true,
              get: function () {
                return S.trace;
              }
            }),
              (o.default = {
                context: w.context,
                diag: b.diag,
                metrics: v.metrics,
                propagation: _.propagation,
                trace: S.trace
              });
          })(),
            (e.exports = o);
        })();
      },
      17373: (e) => {
        (() => {
          'use strict';
          'undefined' != typeof __nccwpck_require__ &&
            (__nccwpck_require__.ab = '//');
          var t = {};
          (() => {
            (t.parse = function (t2, r2) {
              if ('string' != typeof t2)
                throw TypeError('argument str must be a string');
              for (
                var i2 = {},
                  o = t2.split(n),
                  a = (r2 || {}).decode || e2,
                  s = 0;
                s < o.length;
                s++
              ) {
                var l = o[s],
                  c = l.indexOf('=');
                if (!(c < 0)) {
                  var u = l.substr(0, c).trim(),
                    d = l.substr(++c, l.length).trim();
                  '"' == d[0] && (d = d.slice(1, -1)),
                    void 0 == i2[u] &&
                      (i2[u] = (function (e3, t3) {
                        try {
                          return t3(e3);
                        } catch (t4) {
                          return e3;
                        }
                      })(d, a));
                }
              }
              return i2;
            }),
              (t.serialize = function (e3, t2, n2) {
                var o = n2 || {},
                  a = o.encode || r;
                if ('function' != typeof a)
                  throw TypeError('option encode is invalid');
                if (!i.test(e3)) throw TypeError('argument name is invalid');
                var s = a(t2);
                if (s && !i.test(s)) throw TypeError('argument val is invalid');
                var l = e3 + '=' + s;
                if (null != o.maxAge) {
                  var c = o.maxAge - 0;
                  if (isNaN(c) || !isFinite(c))
                    throw TypeError('option maxAge is invalid');
                  l += '; Max-Age=' + Math.floor(c);
                }
                if (o.domain) {
                  if (!i.test(o.domain))
                    throw TypeError('option domain is invalid');
                  l += '; Domain=' + o.domain;
                }
                if (o.path) {
                  if (!i.test(o.path))
                    throw TypeError('option path is invalid');
                  l += '; Path=' + o.path;
                }
                if (o.expires) {
                  if ('function' != typeof o.expires.toUTCString)
                    throw TypeError('option expires is invalid');
                  l += '; Expires=' + o.expires.toUTCString();
                }
                if (
                  (o.httpOnly && (l += '; HttpOnly'),
                  o.secure && (l += '; Secure'),
                  o.sameSite)
                )
                  switch (
                    'string' == typeof o.sameSite
                      ? o.sameSite.toLowerCase()
                      : o.sameSite
                  ) {
                    case true:
                    case 'strict':
                      l += '; SameSite=Strict';
                      break;
                    case 'lax':
                      l += '; SameSite=Lax';
                      break;
                    case 'none':
                      l += '; SameSite=None';
                      break;
                    default:
                      throw TypeError('option sameSite is invalid');
                  }
                return l;
              });
            var e2 = decodeURIComponent,
              r = encodeURIComponent,
              n = /; */,
              i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
          })(),
            (e.exports = t);
        })();
      },
      1568: (e, t, r) => {
        var n;
        (() => {
          var i = {
              226: function (i2, o2) {
                !(function (a2, s2) {
                  'use strict';
                  var l = 'function',
                    c = 'undefined',
                    u = 'object',
                    d = 'string',
                    p = 'major',
                    h = 'model',
                    f = 'name',
                    g = 'type',
                    m = 'vendor',
                    y = 'version',
                    w = 'architecture',
                    b = 'console',
                    v = 'mobile',
                    _ = 'tablet',
                    S = 'smarttv',
                    k = 'wearable',
                    x = 'embedded',
                    E = 'Amazon',
                    A = 'Apple',
                    T = 'ASUS',
                    P = 'BlackBerry',
                    C = 'Browser',
                    R = 'Chrome',
                    O = 'Firefox',
                    I = 'Google',
                    U = 'Huawei',
                    N = 'Microsoft',
                    M = 'Motorola',
                    L = 'Opera',
                    j = 'Samsung',
                    $ = 'Sharp',
                    D = 'Sony',
                    H = 'Xiaomi',
                    W = 'Zebra',
                    K = 'Facebook',
                    B = 'Chromium OS',
                    V = 'Mac OS',
                    q = function (e2, t2) {
                      var r2 = {};
                      for (var n2 in e2)
                        t2[n2] && t2[n2].length % 2 == 0
                          ? (r2[n2] = t2[n2].concat(e2[n2]))
                          : (r2[n2] = e2[n2]);
                      return r2;
                    },
                    J = function (e2) {
                      for (var t2 = {}, r2 = 0; r2 < e2.length; r2++)
                        t2[e2[r2].toUpperCase()] = e2[r2];
                      return t2;
                    },
                    F = function (e2, t2) {
                      return typeof e2 === d && -1 !== z(t2).indexOf(z(e2));
                    },
                    z = function (e2) {
                      return e2.toLowerCase();
                    },
                    G = function (e2, t2) {
                      if (typeof e2 === d)
                        return (
                          (e2 = e2.replace(/^\s\s*/, '')),
                          typeof t2 === c ? e2 : e2.substring(0, 350)
                        );
                    },
                    X = function (e2, t2) {
                      for (
                        var r2, n2, i3, o3, a3, c2, d2 = 0;
                        d2 < t2.length && !a3;

                      ) {
                        var p2 = t2[d2],
                          h2 = t2[d2 + 1];
                        for (r2 = n2 = 0; r2 < p2.length && !a3 && p2[r2]; )
                          if ((a3 = p2[r2++].exec(e2)))
                            for (i3 = 0; i3 < h2.length; i3++)
                              (c2 = a3[++n2]),
                                typeof (o3 = h2[i3]) === u && o3.length > 0
                                  ? 2 === o3.length
                                    ? typeof o3[1] == l
                                      ? (this[o3[0]] = o3[1].call(this, c2))
                                      : (this[o3[0]] = o3[1])
                                    : 3 === o3.length
                                    ? typeof o3[1] !== l ||
                                      (o3[1].exec && o3[1].test)
                                      ? (this[o3[0]] = c2
                                          ? c2.replace(o3[1], o3[2])
                                          : void 0)
                                      : (this[o3[0]] = c2
                                          ? o3[1].call(this, c2, o3[2])
                                          : void 0)
                                    : 4 === o3.length &&
                                      (this[o3[0]] = c2
                                        ? o3[3].call(
                                            this,
                                            c2.replace(o3[1], o3[2])
                                          )
                                        : void 0)
                                  : (this[o3] = c2 || s2);
                        d2 += 2;
                      }
                    },
                    Y = function (e2, t2) {
                      for (var r2 in t2)
                        if (typeof t2[r2] === u && t2[r2].length > 0) {
                          for (var n2 = 0; n2 < t2[r2].length; n2++)
                            if (F(t2[r2][n2], e2)) return '?' === r2 ? s2 : r2;
                        } else if (F(t2[r2], e2)) return '?' === r2 ? s2 : r2;
                      return e2;
                    },
                    Z = {
                      ME: '4.90',
                      'NT 3.11': 'NT3.51',
                      'NT 4.0': 'NT4.0',
                      2e3: 'NT 5.0',
                      XP: ['NT 5.1', 'NT 5.2'],
                      Vista: 'NT 6.0',
                      7: 'NT 6.1',
                      8: 'NT 6.2',
                      8.1: 'NT 6.3',
                      10: ['NT 6.4', 'NT 10.0'],
                      RT: 'ARM'
                    },
                    Q = {
                      browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [y, [f, 'Chrome']],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [y, [f, 'Edge']],
                        [
                          /(opera mini)\/([-\w\.]+)/i,
                          /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                          /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                        ],
                        [f, y],
                        [/opios[\/ ]+([\w\.]+)/i],
                        [y, [f, L + ' Mini']],
                        [/\bopr\/([\w\.]+)/i],
                        [y, [f, L]],
                        [
                          /(kindle)\/([\w\.]+)/i,
                          /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                          /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                          /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                          /(?:ms|\()(ie) ([\w\.]+)/i,
                          /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                          /(heytap|ovi)browser\/([\d\.]+)/i,
                          /(weibo)__([\d\.]+)/i
                        ],
                        [f, y],
                        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                        [y, [f, 'UC' + C]],
                        [
                          /microm.+\bqbcore\/([\w\.]+)/i,
                          /\bqbcore\/([\w\.]+).+microm/i
                        ],
                        [y, [f, 'WeChat(Win) Desktop']],
                        [/micromessenger\/([\w\.]+)/i],
                        [y, [f, 'WeChat']],
                        [/konqueror\/([\w\.]+)/i],
                        [y, [f, 'Konqueror']],
                        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                        [y, [f, 'IE']],
                        [/ya(?:search)?browser\/([\w\.]+)/i],
                        [y, [f, 'Yandex']],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [[f, /(.+)/, '$1 Secure ' + C], y],
                        [/\bfocus\/([\w\.]+)/i],
                        [y, [f, O + ' Focus']],
                        [/\bopt\/([\w\.]+)/i],
                        [y, [f, L + ' Touch']],
                        [/coc_coc\w+\/([\w\.]+)/i],
                        [y, [f, 'Coc Coc']],
                        [/dolfin\/([\w\.]+)/i],
                        [y, [f, 'Dolphin']],
                        [/coast\/([\w\.]+)/i],
                        [y, [f, L + ' Coast']],
                        [/miuibrowser\/([\w\.]+)/i],
                        [y, [f, 'MIUI ' + C]],
                        [/fxios\/([-\w\.]+)/i],
                        [y, [f, O]],
                        [/\bqihu|(qi?ho?o?|360)browser/i],
                        [[f, '360 ' + C]],
                        [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                        [[f, /(.+)/, '$1 ' + C], y],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [[f, /_/g, ' '], y],
                        [
                          /(electron)\/([\w\.]+) safari/i,
                          /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                          /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                        ],
                        [f, y],
                        [
                          /(metasr)[\/ ]?([\w\.]+)/i,
                          /(lbbrowser)/i,
                          /\[(linkedin)app\]/i
                        ],
                        [f],
                        [
                          /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
                        ],
                        [[f, K], y],
                        [
                          /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                          /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                          /safari (line)\/([\w\.]+)/i,
                          /\b(line)\/([\w\.]+)\/iab/i,
                          /(chromium|instagram)[\/ ]([-\w\.]+)/i
                        ],
                        [f, y],
                        [/\bgsa\/([\w\.]+) .*safari\//i],
                        [y, [f, 'GSA']],
                        [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                        [y, [f, 'TikTok']],
                        [/headlesschrome(?:\/([\w\.]+)| )/i],
                        [y, [f, R + ' Headless']],
                        [/ wv\).+(chrome)\/([\w\.]+)/i],
                        [[f, R + ' WebView'], y],
                        [
                          /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
                        ],
                        [y, [f, 'Android ' + C]],
                        [
                          /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
                        ],
                        [f, y],
                        [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                        [y, [f, 'Mobile Safari']],
                        [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                        [y, f],
                        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                        [
                          f,
                          [
                            y,
                            Y,
                            {
                              '1.0': '/8',
                              1.2: '/1',
                              1.3: '/3',
                              '2.0': '/412',
                              '2.0.2': '/416',
                              '2.0.3': '/417',
                              '2.0.4': '/419',
                              '?': '/'
                            }
                          ]
                        ],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [f, y],
                        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                        [[f, 'Netscape'], y],
                        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                        [y, [f, O + ' Reality']],
                        [
                          /ekiohf.+(flow)\/([\w\.]+)/i,
                          /(swiftfox)/i,
                          /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                          /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                          /(firefox)\/([\w\.]+)/i,
                          /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                          /(links) \(([\w\.]+)/i,
                          /panasonic;(viera)/i
                        ],
                        [f, y],
                        [/(cobalt)\/([\w\.]+)/i],
                        [f, [y, /master.|lts./, '']]
                      ],
                      cpu: [
                        [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                        [[w, 'amd64']],
                        [/(ia32(?=;))/i],
                        [[w, z]],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [[w, 'ia32']],
                        [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                        [[w, 'arm64']],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [[w, 'armhf']],
                        [/windows (ce|mobile); ppc;/i],
                        [[w, 'arm']],
                        [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                        [[w, /ower/, '', z]],
                        [/(sun4\w)[;\)]/i],
                        [[w, 'sparc']],
                        [
                          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                        ],
                        [[w, z]]
                      ],
                      device: [
                        [
                          /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
                        ],
                        [h, [m, j], [g, _]],
                        [
                          /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                          /samsung[- ]([-\w]+)/i,
                          /sec-(sgh\w+)/i
                        ],
                        [h, [m, j], [g, v]],
                        [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                        [h, [m, A], [g, v]],
                        [
                          /\((ipad);[-\w\),; ]+apple/i,
                          /applecoremedia\/[\w\.]+ \((ipad)/i,
                          /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
                        ],
                        [h, [m, A], [g, _]],
                        [/(macintosh);/i],
                        [h, [m, A]],
                        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                        [h, [m, $], [g, v]],
                        [
                          /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
                        ],
                        [h, [m, U], [g, _]],
                        [
                          /(?:huawei|honor)([-\w ]+)[;\)]/i,
                          /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
                        ],
                        [h, [m, U], [g, v]],
                        [
                          /\b(poco[\w ]+)(?: bui|\))/i,
                          /\b; (\w+) build\/hm\1/i,
                          /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                          /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                          /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                        ],
                        [
                          [h, /_/g, ' '],
                          [m, H],
                          [g, v]
                        ],
                        [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                        [
                          [h, /_/g, ' '],
                          [m, H],
                          [g, _]
                        ],
                        [
                          /; (\w+) bui.+ oppo/i,
                          /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                        ],
                        [h, [m, 'OPPO'], [g, v]],
                        [
                          /vivo (\w+)(?: bui|\))/i,
                          /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
                        ],
                        [h, [m, 'Vivo'], [g, v]],
                        [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                        [h, [m, 'Realme'], [g, v]],
                        [
                          /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                          /\bmot(?:orola)?[- ](\w*)/i,
                          /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                        ],
                        [h, [m, M], [g, v]],
                        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                        [h, [m, M], [g, _]],
                        [
                          /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
                        ],
                        [h, [m, 'LG'], [g, _]],
                        [
                          /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                          /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                          /\blg-?([\d\w]+) bui/i
                        ],
                        [h, [m, 'LG'], [g, v]],
                        [
                          /(ideatab[-\w ]+)/i,
                          /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
                        ],
                        [h, [m, 'Lenovo'], [g, _]],
                        [
                          /(?:maemo|nokia).*(n900|lumia \d+)/i,
                          /nokia[-_ ]?([-\w\.]*)/i
                        ],
                        [
                          [h, /_/g, ' '],
                          [m, 'Nokia'],
                          [g, v]
                        ],
                        [/(pixel c)\b/i],
                        [h, [m, I], [g, _]],
                        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                        [h, [m, I], [g, v]],
                        [
                          /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                        ],
                        [h, [m, D], [g, v]],
                        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                        [
                          [h, 'Xperia Tablet'],
                          [m, D],
                          [g, _]
                        ],
                        [
                          / (kb2005|in20[12]5|be20[12][59])\b/i,
                          /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
                        ],
                        [h, [m, 'OnePlus'], [g, v]],
                        [
                          /(alexa)webm/i,
                          /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                          /(kf[a-z]+)( bui|\)).+silk\//i
                        ],
                        [h, [m, E], [g, _]],
                        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                        [
                          [h, /(.+)/g, 'Fire Phone $1'],
                          [m, E],
                          [g, v]
                        ],
                        [/(playbook);[-\w\),; ]+(rim)/i],
                        [h, m, [g, _]],
                        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                        [h, [m, P], [g, v]],
                        [
                          /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
                        ],
                        [h, [m, T], [g, _]],
                        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                        [h, [m, T], [g, v]],
                        [/(nexus 9)/i],
                        [h, [m, 'HTC'], [g, _]],
                        [
                          /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                          /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                          /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                        ],
                        [m, [h, /_/g, ' '], [g, v]],
                        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                        [h, [m, 'Acer'], [g, _]],
                        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                        [h, [m, 'Meizu'], [g, v]],
                        [
                          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                          /(hp) ([\w ]+\w)/i,
                          /(asus)-?(\w+)/i,
                          /(microsoft); (lumia[\w ]+)/i,
                          /(lenovo)[-_ ]?([-\w]+)/i,
                          /(jolla)/i,
                          /(oppo) ?([\w ]+) bui/i
                        ],
                        [m, h, [g, v]],
                        [
                          /(kobo)\s(ereader|touch)/i,
                          /(archos) (gamepad2?)/i,
                          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                          /(kindle)\/([\w\.]+)/i,
                          /(nook)[\w ]+build\/(\w+)/i,
                          /(dell) (strea[kpr\d ]*[\dko])/i,
                          /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                          /(trinity)[- ]*(t\d{3}) bui/i,
                          /(gigaset)[- ]+(q\w{1,9}) bui/i,
                          /(vodafone) ([\w ]+)(?:\)| bui)/i
                        ],
                        [m, h, [g, _]],
                        [/(surface duo)/i],
                        [h, [m, N], [g, _]],
                        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                        [h, [m, 'Fairphone'], [g, v]],
                        [/(u304aa)/i],
                        [h, [m, 'AT&T'], [g, v]],
                        [/\bsie-(\w*)/i],
                        [h, [m, 'Siemens'], [g, v]],
                        [/\b(rct\w+) b/i],
                        [h, [m, 'RCA'], [g, _]],
                        [/\b(venue[\d ]{2,7}) b/i],
                        [h, [m, 'Dell'], [g, _]],
                        [/\b(q(?:mv|ta)\w+) b/i],
                        [h, [m, 'Verizon'], [g, _]],
                        [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                        [h, [m, 'Barnes & Noble'], [g, _]],
                        [/\b(tm\d{3}\w+) b/i],
                        [h, [m, 'NuVision'], [g, _]],
                        [/\b(k88) b/i],
                        [h, [m, 'ZTE'], [g, _]],
                        [/\b(nx\d{3}j) b/i],
                        [h, [m, 'ZTE'], [g, v]],
                        [/\b(gen\d{3}) b.+49h/i],
                        [h, [m, 'Swiss'], [g, v]],
                        [/\b(zur\d{3}) b/i],
                        [h, [m, 'Swiss'], [g, _]],
                        [/\b((zeki)?tb.*\b) b/i],
                        [h, [m, 'Zeki'], [g, _]],
                        [
                          /\b([yr]\d{2}) b/i,
                          /\b(dragon[- ]+touch |dt)(\w{5}) b/i
                        ],
                        [[m, 'Dragon Touch'], h, [g, _]],
                        [/\b(ns-?\w{0,9}) b/i],
                        [h, [m, 'Insignia'], [g, _]],
                        [/\b((nxa|next)-?\w{0,9}) b/i],
                        [h, [m, 'NextBook'], [g, _]],
                        [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                        [[m, 'Voice'], h, [g, v]],
                        [/\b(lvtel\-)?(v1[12]) b/i],
                        [[m, 'LvTel'], h, [g, v]],
                        [/\b(ph-1) /i],
                        [h, [m, 'Essential'], [g, v]],
                        [/\b(v(100md|700na|7011|917g).*\b) b/i],
                        [h, [m, 'Envizen'], [g, _]],
                        [/\b(trio[-\w\. ]+) b/i],
                        [h, [m, 'MachSpeed'], [g, _]],
                        [/\btu_(1491) b/i],
                        [h, [m, 'Rotor'], [g, _]],
                        [/(shield[\w ]+) b/i],
                        [h, [m, 'Nvidia'], [g, _]],
                        [/(sprint) (\w+)/i],
                        [m, h, [g, v]],
                        [/(kin\.[onetw]{3})/i],
                        [
                          [h, /\./g, ' '],
                          [m, N],
                          [g, v]
                        ],
                        [
                          /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
                        ],
                        [h, [m, W], [g, _]],
                        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [h, [m, W], [g, v]],
                        [/smart-tv.+(samsung)/i],
                        [m, [g, S]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                          [h, /^/, 'SmartTV'],
                          [m, j],
                          [g, S]
                        ],
                        [
                          /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
                        ],
                        [
                          [m, 'LG'],
                          [g, S]
                        ],
                        [/(apple) ?tv/i],
                        [m, [h, A + ' TV'], [g, S]],
                        [/crkey/i],
                        [
                          [h, R + 'cast'],
                          [m, I],
                          [g, S]
                        ],
                        [/droid.+aft(\w)( bui|\))/i],
                        [h, [m, E], [g, S]],
                        [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                        [h, [m, $], [g, S]],
                        [/(bravia[\w ]+)( bui|\))/i],
                        [h, [m, D], [g, S]],
                        [/(mitv-\w{5}) bui/i],
                        [h, [m, H], [g, S]],
                        [/Hbbtv.*(technisat) (.*);/i],
                        [m, h, [g, S]],
                        [
                          /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                          /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
                        ],
                        [
                          [m, G],
                          [h, G],
                          [g, S]
                        ],
                        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                        [[g, S]],
                        [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                        [m, h, [g, b]],
                        [/droid.+; (shield) bui/i],
                        [h, [m, 'Nvidia'], [g, b]],
                        [/(playstation [345portablevi]+)/i],
                        [h, [m, D], [g, b]],
                        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                        [h, [m, N], [g, b]],
                        [/((pebble))app/i],
                        [m, h, [g, k]],
                        [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                        [h, [m, A], [g, k]],
                        [/droid.+; (glass) \d/i],
                        [h, [m, I], [g, k]],
                        [/droid.+; (wt63?0{2,3})\)/i],
                        [h, [m, W], [g, k]],
                        [/(quest( 2| pro)?)/i],
                        [h, [m, K], [g, k]],
                        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                        [m, [g, x]],
                        [/(aeobc)\b/i],
                        [h, [m, E], [g, x]],
                        [
                          /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
                        ],
                        [h, [g, v]],
                        [
                          /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
                        ],
                        [h, [g, _]],
                        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                        [[g, _]],
                        [
                          /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
                        ],
                        [[g, v]],
                        [/(android[-\w\. ]{0,9});.+buil/i],
                        [h, [m, 'Generic']]
                      ],
                      engine: [
                        [/windows.+ edge\/([\w\.]+)/i],
                        [y, [f, 'EdgeHTML']],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [y, [f, 'Blink']],
                        [
                          /(presto)\/([\w\.]+)/i,
                          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                          /ekioh(flow)\/([\w\.]+)/i,
                          /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                          /(icab)[\/ ]([23]\.[\d\.]+)/i,
                          /\b(libweb)/i
                        ],
                        [f, y],
                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        [y, f]
                      ],
                      os: [
                        [/microsoft (windows) (vista|xp)/i],
                        [f, y],
                        [
                          /(windows) nt 6\.2; (arm)/i,
                          /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                          /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                        ],
                        [f, [y, Y, Z]],
                        [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                        [
                          [f, 'Windows'],
                          [y, Y, Z]
                        ],
                        [
                          /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                          /ios;fbsv\/([\d\.]+)/i,
                          /cfnetwork\/.+darwin/i
                        ],
                        [
                          [y, /_/g, '.'],
                          [f, 'iOS']
                        ],
                        [
                          /(mac os x) ?([\w\. ]*)/i,
                          /(macintosh|mac_powerpc\b)(?!.+haiku)/i
                        ],
                        [
                          [f, V],
                          [y, /_/g, '.']
                        ],
                        [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                        [y, f],
                        [
                          /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                          /(blackberry)\w*\/([\w\.]*)/i,
                          /(tizen|kaios)[\/ ]([\w\.]+)/i,
                          /\((series40);/i
                        ],
                        [f, y],
                        [/\(bb(10);/i],
                        [y, [f, P]],
                        [
                          /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
                        ],
                        [y, [f, 'Symbian']],
                        [
                          /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
                        ],
                        [y, [f, O + ' OS']],
                        [
                          /web0s;.+rt(tv)/i,
                          /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
                        ],
                        [y, [f, 'webOS']],
                        [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                        [y, [f, 'watchOS']],
                        [/crkey\/([\d\.]+)/i],
                        [y, [f, R + 'cast']],
                        [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                        [[f, B], y],
                        [
                          /panasonic;(viera)/i,
                          /(netrange)mmh/i,
                          /(nettv)\/(\d+\.[\w\.]+)/i,
                          /(nintendo|playstation) ([wids345portablevuch]+)/i,
                          /(xbox); +xbox ([^\);]+)/i,
                          /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                          /(mint)[\/\(\) ]?(\w*)/i,
                          /(mageia|vectorlinux)[; ]/i,
                          /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                          /(hurd|linux) ?([\w\.]*)/i,
                          /(gnu) ?([\w\.]*)/i,
                          /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                          /(haiku) (\w+)/i
                        ],
                        [f, y],
                        [/(sunos) ?([\w\.\d]*)/i],
                        [[f, 'Solaris'], y],
                        [
                          /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                          /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                          /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                          /(unix) ?([\w\.]*)/i
                        ],
                        [f, y]
                      ]
                    },
                    ee = function (e2, t2) {
                      if (
                        (typeof e2 === u && ((t2 = e2), (e2 = s2)),
                        !(this instanceof ee))
                      )
                        return new ee(e2, t2).getResult();
                      var r2 =
                          typeof a2 !== c && a2.navigator ? a2.navigator : s2,
                        n2 = e2 || (r2 && r2.userAgent ? r2.userAgent : ''),
                        i3 = r2 && r2.userAgentData ? r2.userAgentData : s2,
                        o3 = t2 ? q(Q, t2) : Q,
                        b2 = r2 && r2.userAgent == n2;
                      return (
                        (this.getBrowser = function () {
                          var e3,
                            t3 = {};
                          return (
                            (t3[f] = s2),
                            (t3[y] = s2),
                            X.call(t3, n2, o3.browser),
                            (t3[p] =
                              typeof (e3 = t3[y]) === d
                                ? e3.replace(/[^\d\.]/g, '').split('.')[0]
                                : s2),
                            b2 &&
                              r2 &&
                              r2.brave &&
                              typeof r2.brave.isBrave == l &&
                              (t3[f] = 'Brave'),
                            t3
                          );
                        }),
                        (this.getCPU = function () {
                          var e3 = {};
                          return (e3[w] = s2), X.call(e3, n2, o3.cpu), e3;
                        }),
                        (this.getDevice = function () {
                          var e3 = {};
                          return (
                            (e3[m] = s2),
                            (e3[h] = s2),
                            (e3[g] = s2),
                            X.call(e3, n2, o3.device),
                            b2 && !e3[g] && i3 && i3.mobile && (e3[g] = v),
                            b2 &&
                              'Macintosh' == e3[h] &&
                              r2 &&
                              typeof r2.standalone !== c &&
                              r2.maxTouchPoints &&
                              r2.maxTouchPoints > 2 &&
                              ((e3[h] = 'iPad'), (e3[g] = _)),
                            e3
                          );
                        }),
                        (this.getEngine = function () {
                          var e3 = {};
                          return (
                            (e3[f] = s2),
                            (e3[y] = s2),
                            X.call(e3, n2, o3.engine),
                            e3
                          );
                        }),
                        (this.getOS = function () {
                          var e3 = {};
                          return (
                            (e3[f] = s2),
                            (e3[y] = s2),
                            X.call(e3, n2, o3.os),
                            b2 &&
                              !e3[f] &&
                              i3 &&
                              'Unknown' != i3.platform &&
                              (e3[f] = i3.platform
                                .replace(/chrome os/i, B)
                                .replace(/macos/i, V)),
                            e3
                          );
                        }),
                        (this.getResult = function () {
                          return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                          };
                        }),
                        (this.getUA = function () {
                          return n2;
                        }),
                        (this.setUA = function (e3) {
                          return (
                            (n2 =
                              typeof e3 === d && e3.length > 350
                                ? G(e3, 350)
                                : e3),
                            this
                          );
                        }),
                        this.setUA(n2),
                        this
                      );
                    };
                  (ee.VERSION = '1.0.35'),
                    (ee.BROWSER = J([f, y, p])),
                    (ee.CPU = J([w])),
                    (ee.DEVICE = J([h, m, g, b, v, S, _, k, x])),
                    (ee.ENGINE = ee.OS = J([f, y])),
                    typeof o2 !== c
                      ? (i2.exports && (o2 = i2.exports = ee),
                        (o2.UAParser = ee))
                      : r.amdO
                      ? void 0 !==
                          (n = function () {
                            return ee;
                          }.call(t, r, t, e)) && (e.exports = n)
                      : typeof a2 !== c && (a2.UAParser = ee);
                  var et = typeof a2 !== c && (a2.jQuery || a2.Zepto);
                  if (et && !et.ua) {
                    var er = new ee();
                    (et.ua = er.getResult()),
                      (et.ua.get = function () {
                        return er.getUA();
                      }),
                      (et.ua.set = function (e2) {
                        er.setUA(e2);
                        var t2 = er.getResult();
                        for (var r2 in t2) et.ua[r2] = t2[r2];
                      });
                  }
                })('object' == typeof window ? window : this);
              }
            },
            o = {};
          function a(e2) {
            var t2 = o[e2];
            if (void 0 !== t2) return t2.exports;
            var r2 = (o[e2] = { exports: {} }),
              n2 = true;
            try {
              i[e2].call(r2.exports, r2, r2.exports, a), (n2 = false);
            } finally {
              n2 && delete o[e2];
            }
            return r2.exports;
          }
          a.ab = '//';
          var s = a(226);
          e.exports = s;
        })();
      },
      55566: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { bailoutToClientRendering: () => o });
        class n extends Error {
          constructor(e2) {
            super('Bail out to client-side rendering: ' + e2),
              (this.reason = e2),
              (this.digest = 'BAILOUT_TO_CLIENT_SIDE_RENDERING');
          }
        }
        var i = r(77008);
        function o(e2) {
          let t2 = i.A.getStore();
          if (
            (null == t2 || !t2.forceStatic) &&
            (null == t2 ? void 0 : t2.isStaticGeneration)
          )
            throw new n(e2);
        }
      },
      77008: (e, t, r) => {
        'use strict';
        r.d(t, { A: () => n.A });
        var n = r(649);
      },
      63387: (e) => {
        'use strict';
        e.exports = [
          'chrome 64',
          'edge 79',
          'firefox 67',
          'opera 51',
          'safari 12'
        ];
      },
      28703: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: true }),
          (function (e2, t2) {
            for (var r2 in t2)
              Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
          })(t, {
            getTestReqInfo: function () {
              return a;
            },
            withRequest: function () {
              return o;
            }
          });
        let n = new (r(2067).AsyncLocalStorage)();
        function i(e2, t2) {
          let r2 = t2.header(e2, 'next-test-proxy-port');
          if (r2)
            return {
              url: t2.url(e2),
              proxyPort: Number(r2),
              testData: t2.header(e2, 'next-test-data') || ''
            };
        }
        function o(e2, t2, r2) {
          let o2 = i(e2, t2);
          return o2 ? n.run(o2, r2) : r2();
        }
        function a(e2, t2) {
          return n.getStore() || (e2 && t2 ? i(e2, t2) : void 0);
        }
      },
      20407: (e, t, r) => {
        'use strict';
        var n = r(26195).Buffer;
        Object.defineProperty(t, '__esModule', { value: true }),
          (function (e2, t2) {
            for (var r2 in t2)
              Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
          })(t, {
            handleFetch: function () {
              return s;
            },
            interceptFetch: function () {
              return l;
            },
            reader: function () {
              return o;
            }
          });
        let i = r(28703),
          o = { url: (e2) => e2.url, header: (e2, t2) => e2.headers.get(t2) };
        async function a(e2, t2) {
          let {
            url: r2,
            method: i2,
            headers: o2,
            body: a2,
            cache: s2,
            credentials: l2,
            integrity: c,
            mode: u,
            redirect: d,
            referrer: p,
            referrerPolicy: h
          } = t2;
          return {
            testData: e2,
            api: 'fetch',
            request: {
              url: r2,
              method: i2,
              headers: [
                ...Array.from(o2),
                [
                  'next-test-stack',
                  (function () {
                    let e3 = (Error().stack ?? '').split('\n');
                    for (let t3 = 1; t3 < e3.length; t3++)
                      if (e3[t3].length > 0) {
                        e3 = e3.slice(t3);
                        break;
                      }
                    return (e3 = (e3 = (e3 = e3.filter(
                      (e4) => !e4.includes('/next/dist/')
                    )).slice(0, 5)).map((e4) =>
                      e4.replace('webpack-internal:///(rsc)/', '').trim()
                    )).join('    ');
                  })()
                ]
              ],
              body: a2
                ? n.from(await t2.arrayBuffer()).toString('base64')
                : null,
              cache: s2,
              credentials: l2,
              integrity: c,
              mode: u,
              redirect: d,
              referrer: p,
              referrerPolicy: h
            }
          };
        }
        async function s(e2, t2) {
          let r2 = (0, i.getTestReqInfo)(t2, o);
          if (!r2) return e2(t2);
          let { testData: s2, proxyPort: l2 } = r2,
            c = await a(s2, t2),
            u = await e2(`http://localhost:${l2}`, {
              method: 'POST',
              body: JSON.stringify(c),
              next: { internal: true }
            });
          if (!u.ok) throw Error(`Proxy request failed: ${u.status}`);
          let d = await u.json(),
            { api: p } = d;
          switch (p) {
            case 'continue':
              return e2(t2);
            case 'abort':
            case 'unhandled':
              throw Error(`Proxy request aborted [${t2.method} ${t2.url}]`);
          }
          return (function (e3) {
            let { status: t3, headers: r3, body: i2 } = e3.response;
            return new Response(i2 ? n.from(i2, 'base64') : null, {
              status: t3,
              headers: new Headers(r3)
            });
          })(d);
        }
        function l(e2) {
          return (
            (r.g.fetch = function (t2, r2) {
              var n2;
              return (
                null == r2
                  ? void 0
                  : null == (n2 = r2.next)
                  ? void 0
                  : n2.internal
              )
                ? e2(t2, r2)
                : s(e2, new Request(t2, r2));
            }),
            () => {
              r.g.fetch = e2;
            }
          );
        }
      },
      29311: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: true }),
          (function (e2, t2) {
            for (var r2 in t2)
              Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
          })(t, {
            interceptTestApis: function () {
              return o;
            },
            wrapRequestHandler: function () {
              return a;
            }
          });
        let n = r(28703),
          i = r(20407);
        function o() {
          return (0, i.interceptFetch)(r.g.fetch);
        }
        function a(e2) {
          return (t2, r2) => (0, n.withRequest)(t2, i.reader, () => e2(t2, r2));
        }
      },
      29222: (e, t) => {
        'use strict';
        var r = Symbol.for('react.element'),
          n = Symbol.for('react.portal'),
          i = Symbol.for('react.fragment'),
          o = Symbol.for('react.strict_mode'),
          a = Symbol.for('react.profiler'),
          s = Symbol.for('react.provider'),
          l = Symbol.for('react.context'),
          c = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          p = Symbol.for('react.lazy'),
          h = Symbol.iterator,
          f = {
            isMounted: function () {
              return false;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {}
          },
          g = Object.assign,
          m = {};
        function y(e2, t2, r2) {
          (this.props = e2),
            (this.context = t2),
            (this.refs = m),
            (this.updater = r2 || f);
        }
        function w() {}
        function b(e2, t2, r2) {
          (this.props = e2),
            (this.context = t2),
            (this.refs = m),
            (this.updater = r2 || f);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e2, t2) {
            if ('object' != typeof e2 && 'function' != typeof e2 && null != e2)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, e2, t2, 'setState');
          }),
          (y.prototype.forceUpdate = function (e2) {
            this.updater.enqueueForceUpdate(this, e2, 'forceUpdate');
          }),
          (w.prototype = y.prototype);
        var v = (b.prototype = new w());
        (v.constructor = b), g(v, y.prototype), (v.isPureReactComponent = true);
        var _ = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          x = { key: true, ref: true, __self: true, __source: true };
        function E(e2, t2, n2) {
          var i2,
            o2 = {},
            a2 = null,
            s2 = null;
          if (null != t2)
            for (i2 in (void 0 !== t2.ref && (s2 = t2.ref),
            void 0 !== t2.key && (a2 = '' + t2.key),
            t2))
              S.call(t2, i2) && !x.hasOwnProperty(i2) && (o2[i2] = t2[i2]);
          var l2 = arguments.length - 2;
          if (1 === l2) o2.children = n2;
          else if (1 < l2) {
            for (var c2 = Array(l2), u2 = 0; u2 < l2; u2++)
              c2[u2] = arguments[u2 + 2];
            o2.children = c2;
          }
          if (e2 && e2.defaultProps)
            for (i2 in (l2 = e2.defaultProps))
              void 0 === o2[i2] && (o2[i2] = l2[i2]);
          return {
            $$typeof: r,
            type: e2,
            key: a2,
            ref: s2,
            props: o2,
            _owner: k.current
          };
        }
        function A(e2) {
          return 'object' == typeof e2 && null !== e2 && e2.$$typeof === r;
        }
        var T = /\/+/g;
        function P(e2, t2) {
          var r2, n2;
          return 'object' == typeof e2 && null !== e2 && null != e2.key
            ? ((r2 = '' + e2.key),
              (n2 = { '=': '=0', ':': '=2' }),
              '$' +
                r2.replace(/[=:]/g, function (e3) {
                  return n2[e3];
                }))
            : t2.toString(36);
        }
        function C(e2, t2, i2) {
          if (null == e2) return e2;
          var o2 = [],
            a2 = 0;
          return (
            !(function e3(t3, i3, o3, a3, s2) {
              var l2,
                c2,
                u2,
                d2 = typeof t3;
              ('undefined' === d2 || 'boolean' === d2) && (t3 = null);
              var p2 = false;
              if (null === t3) p2 = true;
              else
                switch (d2) {
                  case 'string':
                  case 'number':
                    p2 = true;
                    break;
                  case 'object':
                    switch (t3.$$typeof) {
                      case r:
                      case n:
                        p2 = true;
                    }
                }
              if (p2)
                return (
                  (s2 = s2((p2 = t3))),
                  (t3 = '' === a3 ? '.' + P(p2, 0) : a3),
                  _(s2)
                    ? ((o3 = ''),
                      null != t3 && (o3 = t3.replace(T, '$&/') + '/'),
                      e3(s2, i3, o3, '', function (e4) {
                        return e4;
                      }))
                    : null != s2 &&
                      (A(s2) &&
                        ((l2 = s2),
                        (c2 =
                          o3 +
                          (!s2.key || (p2 && p2.key === s2.key)
                            ? ''
                            : ('' + s2.key).replace(T, '$&/') + '/') +
                          t3),
                        (s2 = {
                          $$typeof: r,
                          type: l2.type,
                          key: c2,
                          ref: l2.ref,
                          props: l2.props,
                          _owner: l2._owner
                        })),
                      i3.push(s2)),
                  1
                );
              if (((p2 = 0), (a3 = '' === a3 ? '.' : a3 + ':'), _(t3)))
                for (var f2 = 0; f2 < t3.length; f2++) {
                  var g2 = a3 + P((d2 = t3[f2]), f2);
                  p2 += e3(d2, i3, o3, g2, s2);
                }
              else if (
                'function' ==
                typeof (g2 =
                  null === (u2 = t3) || 'object' != typeof u2
                    ? null
                    : 'function' ==
                      typeof (u2 = (h && u2[h]) || u2['@@iterator'])
                    ? u2
                    : null)
              )
                for (t3 = g2.call(t3), f2 = 0; !(d2 = t3.next()).done; )
                  (g2 = a3 + P((d2 = d2.value), f2++)),
                    (p2 += e3(d2, i3, o3, g2, s2));
              else if ('object' === d2)
                throw Error(
                  'Objects are not valid as a React child (found: ' +
                    ('[object Object]' === (i3 = String(t3))
                      ? 'object with keys {' + Object.keys(t3).join(', ') + '}'
                      : i3) +
                    '). If you meant to render a collection of children, use an array instead.'
                );
              return p2;
            })(e2, o2, '', '', function (e3) {
              return t2.call(i2, e3, a2++);
            }),
            o2
          );
        }
        function R(e2) {
          if (-1 === e2._status) {
            var t2 = e2._result;
            (t2 = t2()).then(
              function (t3) {
                (0 === e2._status || -1 === e2._status) &&
                  ((e2._status = 1), (e2._result = t3));
              },
              function (t3) {
                (0 === e2._status || -1 === e2._status) &&
                  ((e2._status = 2), (e2._result = t3));
              }
            ),
              -1 === e2._status && ((e2._status = 0), (e2._result = t2));
          }
          if (1 === e2._status) return e2._result.default;
          throw e2._result;
        }
        var O = { current: null },
          I = { transition: null };
        (t.Children = {
          map: C,
          forEach: function (e2, t2, r2) {
            C(
              e2,
              function () {
                t2.apply(this, arguments);
              },
              r2
            );
          },
          count: function (e2) {
            var t2 = 0;
            return (
              C(e2, function () {
                t2++;
              }),
              t2
            );
          },
          toArray: function (e2) {
            return (
              C(e2, function (e3) {
                return e3;
              }) || []
            );
          },
          only: function (e2) {
            if (!A(e2))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            return e2;
          }
        }),
          (t.Component = y),
          (t.Fragment = i),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: I,
            ReactCurrentOwner: k
          }),
          (t.cloneElement = function (e2, t2, n2) {
            if (null == e2)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e2 +
                  '.'
              );
            var i2 = g({}, e2.props),
              o2 = e2.key,
              a2 = e2.ref,
              s2 = e2._owner;
            if (null != t2) {
              if (
                (void 0 !== t2.ref && ((a2 = t2.ref), (s2 = k.current)),
                void 0 !== t2.key && (o2 = '' + t2.key),
                e2.type && e2.type.defaultProps)
              )
                var l2 = e2.type.defaultProps;
              for (c2 in t2)
                S.call(t2, c2) &&
                  !x.hasOwnProperty(c2) &&
                  (i2[c2] =
                    void 0 === t2[c2] && void 0 !== l2 ? l2[c2] : t2[c2]);
            }
            var c2 = arguments.length - 2;
            if (1 === c2) i2.children = n2;
            else if (1 < c2) {
              l2 = Array(c2);
              for (var u2 = 0; u2 < c2; u2++) l2[u2] = arguments[u2 + 2];
              i2.children = l2;
            }
            return {
              $$typeof: r,
              type: e2.type,
              key: o2,
              ref: a2,
              props: i2,
              _owner: s2
            };
          }),
          (t.createContext = function (e2) {
            return (
              ((e2 = {
                $$typeof: l,
                _currentValue: e2,
                _currentValue2: e2,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
              }).Provider = { $$typeof: s, _context: e2 }),
              (e2.Consumer = e2)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e2) {
            var t2 = E.bind(null, e2);
            return (t2.type = e2), t2;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e2) {
            return { $$typeof: c, render: e2 };
          }),
          (t.isValidElement = A),
          (t.lazy = function (e2) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e2 },
              _init: R
            };
          }),
          (t.memo = function (e2, t2) {
            return {
              $$typeof: d,
              type: e2,
              compare: void 0 === t2 ? null : t2
            };
          }),
          (t.startTransition = function (e2) {
            var t2 = I.transition;
            I.transition = {};
            try {
              e2();
            } finally {
              I.transition = t2;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.'
            );
          }),
          (t.useCallback = function (e2, t2) {
            return O.current.useCallback(e2, t2);
          }),
          (t.useContext = function (e2) {
            return O.current.useContext(e2);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e2) {
            return O.current.useDeferredValue(e2);
          }),
          (t.useEffect = function (e2, t2) {
            return O.current.useEffect(e2, t2);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e2, t2, r2) {
            return O.current.useImperativeHandle(e2, t2, r2);
          }),
          (t.useInsertionEffect = function (e2, t2) {
            return O.current.useInsertionEffect(e2, t2);
          }),
          (t.useLayoutEffect = function (e2, t2) {
            return O.current.useLayoutEffect(e2, t2);
          }),
          (t.useMemo = function (e2, t2) {
            return O.current.useMemo(e2, t2);
          }),
          (t.useReducer = function (e2, t2, r2) {
            return O.current.useReducer(e2, t2, r2);
          }),
          (t.useRef = function (e2) {
            return O.current.useRef(e2);
          }),
          (t.useState = function (e2) {
            return O.current.useState(e2);
          }),
          (t.useSyncExternalStore = function (e2, t2, r2) {
            return O.current.useSyncExternalStore(e2, t2, r2);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      82942: (e, t, r) => {
        'use strict';
        e.exports = r(29222);
      },
      87792: __chunk_87792,
      55612: __chunk_55612,
      4704: __chunk_4704,
      649: __chunk_649
    },
    (e) => {
      var t = e((e.s = 51284));
      (globalThis2._ENTRIES =
        'undefined' == typeof globalThis2._ENTRIES
          ? {}
          : globalThis2._ENTRIES).middleware_middleware = t;
    }
  ]);
  return function () {
    const module = { exports: {}, loaded: false };
    const fn = function (module2, exports) {
      var d = Object.defineProperty;
      var m = (e) => d(e, '__esModule', { value: true });
      var y = (e, r) => {
        m(e);
        for (var t in r) d(e, t, { get: r[t], enumerable: true });
      };
      y(exports, { default: () => x });
      function h(e) {
        let r = {};
        return (
          e &&
            e.forEach((t, i) => {
              (r[i] = t), i.toLowerCase() === 'set-cookie' && (r[i] = C(t));
            }),
          r
        );
      }
      function C(e) {
        let r = [],
          t = 0,
          i,
          a,
          p,
          n,
          s;
        function c() {
          for (; t < e.length && /\s/.test(e.charAt(t)); ) t += 1;
          return t < e.length;
        }
        function o() {
          return (a = e.charAt(t)), a !== '=' && a !== ';' && a !== ',';
        }
        for (; t < e.length; ) {
          for (i = t, s = false; c(); )
            if (((a = e.charAt(t)), a === ',')) {
              for (p = t, t += 1, c(), n = t; t < e.length && o(); ) t += 1;
              t < e.length && e.charAt(t) === '='
                ? ((s = true), (t = n), r.push(e.substring(i, p)), (i = t))
                : (t = p + 1);
            } else t += 1;
          (!s || t >= e.length) && r.push(e.substring(i, e.length));
        }
        return r;
      }
      function x(e) {
        let r = e.staticRoutes.map((i) => ({
            regexp: new RegExp(i.namedRegex),
            page: i.page
          })),
          t =
            e.dynamicRoutes?.map((i) => ({
              regexp: new RegExp(i.namedRegex),
              page: i.page
            })) || [];
        return async function (a, p) {
          let n = new URL(a.url).pathname,
            s = {};
          if (
            (e.nextConfig?.basePath &&
              n.startsWith(e.nextConfig.basePath) &&
              (n = n.replace(e.nextConfig.basePath, '') || '/'),
            e.nextConfig?.i18n)
          )
            for (let o of e.nextConfig.i18n.locales) {
              let g = new RegExp(`^/${o}($|/)`, 'i');
              if (n.match(g)) {
                n = n.replace(g, '/') || '/';
                break;
              }
            }
          for (let o of r)
            if (o.regexp.exec(n)) {
              s.name = o.page;
              break;
            }
          if (!s.name) {
            let o = R(n);
            for (let g of t || []) {
              if (o && !R(g.page)) continue;
              let f = g.regexp.exec(n);
              if (f) {
                s = { name: g.page, params: f.groups };
                break;
              }
            }
          }
          let c = await globalThis2._ENTRIES[
            `middleware_${e.name}`
          ].default.call(
            {},
            {
              request: {
                url: a.url,
                method: a.method,
                headers: h(a.headers),
                ip: u(a.headers, l.Ip),
                geo: {
                  city: u(a.headers, l.City, true),
                  country: u(a.headers, l.Country, true),
                  latitude: u(a.headers, l.Latitude),
                  longitude: u(a.headers, l.Longitude),
                  region: u(a.headers, l.Region, true)
                },
                nextConfig: e.nextConfig,
                page: s,
                body: a.body
              }
            }
          );
          return p.waitUntil(c.waitUntil), c.response;
        };
      }
      function u(e, r, t = false) {
        let i = e.get(r) || void 0;
        return t && i ? decodeURIComponent(i) : i;
      }
      function R(e) {
        return e === '/api' || e.startsWith('/api/');
      }
      var l;
      (function (n) {
        (n.City = 'x-vercel-ip-city'),
          (n.Country = 'x-vercel-ip-country'),
          (n.Ip = 'x-real-ip'),
          (n.Latitude = 'x-vercel-ip-latitude'),
          (n.Longitude = 'x-vercel-ip-longitude'),
          (n.Region = 'x-vercel-ip-country-region');
      })(l || (l = {}));
    };
    fn(module, module.exports);
    return module.exports;
  }
    .call({})
    .default({
      name: 'middleware',
      staticRoutes: [
        {
          page: '/',
          regex: '^/(?:/)?$',
          routeKeys: {},
          namedRegex: '^/(?:/)?$'
        },
        {
          page: '/_not-found',
          regex: '^/_not\\-found(?:/)?$',
          routeKeys: {},
          namedRegex: '^/_not\\-found(?:/)?$'
        },
        {
          page: '/dashboard',
          regex: '^/dashboard(?:/)?$',
          routeKeys: {},
          namedRegex: '^/dashboard(?:/)?$'
        },
        {
          page: '/dashboard/employee',
          regex: '^/dashboard/employee(?:/)?$',
          routeKeys: {},
          namedRegex: '^/dashboard/employee(?:/)?$'
        },
        {
          page: '/dashboard/kanban',
          regex: '^/dashboard/kanban(?:/)?$',
          routeKeys: {},
          namedRegex: '^/dashboard/kanban(?:/)?$'
        },
        {
          page: '/dashboard/overview',
          regex: '^/dashboard/overview(?:/)?$',
          routeKeys: {},
          namedRegex: '^/dashboard/overview(?:/)?$'
        },
        {
          page: '/dashboard/product',
          regex: '^/dashboard/product(?:/)?$',
          routeKeys: {},
          namedRegex: '^/dashboard/product(?:/)?$'
        },
        {
          page: '/dashboard/profile',
          regex: '^/dashboard/profile(?:/)?$',
          routeKeys: {},
          namedRegex: '^/dashboard/profile(?:/)?$'
        },
        {
          page: '/favicon.ico',
          regex: '^/favicon\\.ico(?:/)?$',
          routeKeys: {},
          namedRegex: '^/favicon\\.ico(?:/)?$'
        }
      ],
      dynamicRoutes: [
        {
          page: '/api/auth/[...nextauth]',
          regex: '^/api/auth/(.+?)(?:/)?$',
          routeKeys: { nxtPnextauth: 'nxtPnextauth' },
          namedRegex: '^/api/auth/(?<nxtPnextauth>.+?)(?:/)?$'
        },
        {
          page: '/dashboard/employee/[employeeId]',
          regex: '^/dashboard/employee/([^/]+?)(?:/)?$',
          routeKeys: { nxtPemployeeId: 'nxtPemployeeId' },
          namedRegex: '^/dashboard/employee/(?<nxtPemployeeId>[^/]+?)(?:/)?$'
        },
        {
          page: '/dashboard/product/[productId]',
          regex: '^/dashboard/product/([^/]+?)(?:/)?$',
          routeKeys: { nxtPproductId: 'nxtPproductId' },
          namedRegex: '^/dashboard/product/(?<nxtPproductId>[^/]+?)(?:/)?$'
        }
      ],
      nextConfig: { basePath: '' }
    });
})(proxy, proxy, proxy);
export { stdin_default as default };
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
