// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_45750'] = (e, t, r) => {
    'use strict';
    r.d(t, { O: () => i });
    var n = r(23393),
      a = r(79246);
    function i({ className: e2, ...t2 }) {
      return (0, n.jsx)('div', {
        className: (0, a.cn)('animate-pulse rounded-md bg-primary/10', e2),
        ...t2
      });
    }
  };
  __namedExportsObject['__chunk_26655'] = (e, t, r) => {
    r.d(t, { Z: () => _ });
    var i = r(81054);
    function n(e2) {
      return void 0 !== e2.default;
    }
    function o(e2) {
      return void 0 === e2
        ? e2
        : 'number' == typeof e2
        ? Number.isFinite(e2)
          ? e2
          : NaN
        : 'string' == typeof e2 && /^[0-9]+$/.test(e2)
        ? parseInt(e2, 10)
        : NaN;
    }
    var s = r(5486),
      a = r(32428),
      l = r(58754);
    let d = () => {},
      c = () => {};
    function u(e2) {
      var t2;
      let { headManager: r2, reduceComponentsToState: i2 } = e2;
      function n2() {
        if (r2 && r2.mountedInstances) {
          let t3 = a.Children.toArray(
            Array.from(r2.mountedInstances).filter(Boolean)
          );
          r2.updateHead(i2(t3, e2));
        }
      }
      return (
        null == r2 || null == (t2 = r2.mountedInstances) || t2.add(e2.children),
        n2(),
        d(() => {
          var t3;
          return (
            null == r2 ||
              null == (t3 = r2.mountedInstances) ||
              t3.add(e2.children),
            () => {
              var t4;
              null == r2 ||
                null == (t4 = r2.mountedInstances) ||
                t4.delete(e2.children);
            }
          );
        }),
        d(
          () => (
            r2 && (r2._pendingUpdate = n2),
            () => {
              r2 && (r2._pendingUpdate = n2);
            }
          )
        ),
        c(
          () => (
            r2 &&
              r2._pendingUpdate &&
              (r2._pendingUpdate(), (r2._pendingUpdate = null)),
            () => {
              r2 &&
                r2._pendingUpdate &&
                (r2._pendingUpdate(), (r2._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
    var p = r(10127),
      f = r(54190);
    function h(e2, t2) {
      return 'string' == typeof t2 || 'number' == typeof t2
        ? e2
        : t2.type === a.Fragment
        ? e2.concat(
            a.Children.toArray(t2.props.children).reduce(
              (e3, t3) =>
                'string' == typeof t3 || 'number' == typeof t3
                  ? e3
                  : e3.concat(t3),
              []
            )
          )
        : e2.concat(t2);
    }
    let g = ['name', 'httpEquiv', 'charSet', 'itemProp'];
    function m(e2, t2) {
      let { inAmpMode: r2 } = t2;
      return e2
        .reduce(h, [])
        .reverse()
        .concat(
          (function (e3) {
            void 0 === e3 && (e3 = false);
            let t3 = [(0, s.jsx)('meta', { charSet: 'utf-8' })];
            return (
              e3 ||
                t3.push(
                  (0, s.jsx)('meta', {
                    name: 'viewport',
                    content: 'width=device-width'
                  })
                ),
              t3
            );
          })(r2).reverse()
        )
        .filter(
          (function () {
            let e3 = /* @__PURE__ */ new Set(),
              t3 = /* @__PURE__ */ new Set(),
              r3 = /* @__PURE__ */ new Set(),
              i2 = {};
            return (n2) => {
              let o2 = true,
                s2 = false;
              if (
                n2.key &&
                'number' != typeof n2.key &&
                n2.key.indexOf('$') > 0
              ) {
                s2 = true;
                let t4 = n2.key.slice(n2.key.indexOf('$') + 1);
                e3.has(t4) ? (o2 = false) : e3.add(t4);
              }
              switch (n2.type) {
                case 'title':
                case 'base':
                  t3.has(n2.type) ? (o2 = false) : t3.add(n2.type);
                  break;
                case 'meta':
                  for (let e4 = 0, t4 = g.length; e4 < t4; e4++) {
                    let t5 = g[e4];
                    if (n2.props.hasOwnProperty(t5)) {
                      if ('charSet' === t5)
                        r3.has(t5) ? (o2 = false) : r3.add(t5);
                      else {
                        let e5 = n2.props[t5],
                          r4 = i2[t5] || /* @__PURE__ */ new Set();
                        ('name' !== t5 || !s2) && r4.has(e5)
                          ? (o2 = false)
                          : (r4.add(e5), (i2[t5] = r4));
                      }
                    }
                  }
              }
              return o2;
            };
          })()
        )
        .reverse()
        .map((e3, t3) => {
          let i2 = e3.key || t3;
          if (
            !r2 &&
            'link' === e3.type &&
            e3.props.href &&
            [
              'https://fonts.googleapis.com/css',
              'https://use.typekit.net/'
            ].some((t4) => e3.props.href.startsWith(t4))
          ) {
            let t4 = { ...(e3.props || {}) };
            return (
              (t4['data-href'] = t4.href),
              (t4.href = void 0),
              (t4['data-optimized-fonts'] = true),
              a.cloneElement(e3, t4)
            );
          }
          return a.cloneElement(e3, { key: i2 });
        });
    }
    let v = function (e2) {
      let { children: t2 } = e2,
        r2 = (0, a.useContext)(p.AmpStateContext),
        i2 = (0, a.useContext)(f.HeadManagerContext);
      return (0, s.jsx)(u, {
        reduceComponentsToState: m,
        headManager: i2,
        inAmpMode: (function (e3) {
          let {
            ampFirst: t3 = false,
            hybrid: r3 = false,
            hasQuery: i3 = false
          } = void 0 === e3 ? {} : e3;
          return t3 || (r3 && i3);
        })(r2),
        children: t2
      });
    };
    var w = r(202),
      y = r(89588);
    function b(e2) {
      let { config: t2, src: r2, width: i2, quality: n2 } = e2;
      return (
        t2.path +
        '?url=' +
        encodeURIComponent(r2) +
        '&w=' +
        i2 +
        '&q=' +
        (n2 || 75)
      );
    }
    b.__next_img_default = true;
    let S = {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      path: '/_next/image',
      loader: 'default',
      dangerouslyAllowSVG: false,
      unoptimized: false
    };
    function x(e2, t2, r2, i2, n2, o2, s2) {
      let a2 = null == e2 ? void 0 : e2.src;
      e2 &&
        e2['data-loaded-src'] !== a2 &&
        ((e2['data-loaded-src'] = a2),
        ('decode' in e2 ? e2.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e2.parentElement && e2.isConnected) {
              if (
                ('empty' !== t2 && n2(true), null == r2 ? void 0 : r2.current)
              ) {
                let t3 = new Event('load');
                Object.defineProperty(t3, 'target', {
                  writable: false,
                  value: e2
                });
                let i3 = false,
                  n3 = false;
                r2.current({
                  ...t3,
                  nativeEvent: t3,
                  currentTarget: e2,
                  target: e2,
                  isDefaultPrevented: () => i3,
                  isPropagationStopped: () => n3,
                  persist: () => {},
                  preventDefault: () => {
                    (i3 = true), t3.preventDefault();
                  },
                  stopPropagation: () => {
                    (n3 = true), t3.stopPropagation();
                  }
                });
              }
              (null == i2 ? void 0 : i2.current) && i2.current(e2);
            }
          }));
    }
    function C(e2) {
      let [t2, r2] = a.version.split('.', 2),
        i2 = parseInt(t2, 10),
        n2 = parseInt(r2, 10);
      return i2 > 18 || (18 === i2 && n2 >= 3)
        ? { fetchPriority: e2 }
        : { fetchpriority: e2 };
    }
    globalThis.__NEXT_IMAGE_IMPORTED = true;
    let z = (0, a.forwardRef)((e2, t2) => {
      let {
        src: r2,
        srcSet: i2,
        sizes: n2,
        height: o2,
        width: l2,
        decoding: d2,
        className: c2,
        style: u2,
        fetchPriority: p2,
        placeholder: f2,
        loading: h2,
        unoptimized: g2,
        fill: m2,
        onLoadRef: v2,
        onLoadingCompleteRef: w2,
        setBlurComplete: y2,
        setShowAltText: b2,
        sizesInput: S2,
        onLoad: z2,
        onError: E2,
        ..._2
      } = e2;
      return (0, s.jsx)('img', {
        ..._2,
        ...C(p2),
        loading: h2,
        width: l2,
        height: o2,
        decoding: d2,
        'data-nimg': m2 ? 'fill' : '1',
        className: c2,
        style: u2,
        sizes: n2,
        srcSet: i2,
        src: r2,
        ref: (0, a.useCallback)(
          (e3) => {
            t2 &&
              ('function' == typeof t2
                ? t2(e3)
                : 'object' == typeof t2 && (t2.current = e3)),
              e3 &&
                (E2 && (e3.src = e3.src),
                e3.complete && x(e3, f2, v2, w2, y2, g2, S2));
          },
          [r2, f2, v2, w2, y2, E2, g2, S2, t2]
        ),
        onLoad: (e3) => {
          x(e3.currentTarget, f2, v2, w2, y2, g2, S2);
        },
        onError: (e3) => {
          b2(true), 'empty' !== f2 && y2(true), E2 && E2(e3);
        }
      });
    });
    function E(e2) {
      let { isAppRouter: t2, imgAttributes: r2 } = e2,
        i2 = {
          as: 'image',
          imageSrcSet: r2.srcSet,
          imageSizes: r2.sizes,
          crossOrigin: r2.crossOrigin,
          referrerPolicy: r2.referrerPolicy,
          ...C(r2.fetchPriority)
        };
      return t2 && l.preload
        ? (l.preload(r2.src, i2), null)
        : (0, s.jsx)(v, {
            children: (0, s.jsx)(
              'link',
              { rel: 'preload', href: r2.srcSet ? void 0 : r2.src, ...i2 },
              '__nimg-' + r2.src + r2.srcSet + r2.sizes
            )
          });
    }
    let _ = (0, a.forwardRef)((e2, t2) => {
      let r2 = (0, a.useContext)(y.RouterContext),
        l2 = (0, a.useContext)(w.ImageConfigContext),
        d2 = (0, a.useMemo)(() => {
          let e3 = S || l2 || i.z,
            t3 = [...e3.deviceSizes, ...e3.imageSizes].sort(
              (e4, t4) => e4 - t4
            ),
            r3 = e3.deviceSizes.sort((e4, t4) => e4 - t4);
          return { ...e3, allSizes: t3, deviceSizes: r3 };
        }, [l2]),
        { onLoad: c2, onLoadingComplete: u2 } = e2,
        p2 = (0, a.useRef)(c2);
      (0, a.useEffect)(() => {
        p2.current = c2;
      }, [c2]);
      let f2 = (0, a.useRef)(u2);
      (0, a.useEffect)(() => {
        f2.current = u2;
      }, [u2]);
      let [h2, g2] = (0, a.useState)(false),
        [m2, v2] = (0, a.useState)(false),
        { props: x2, meta: C2 } = (function (e3, t3) {
          var r3;
          let s2,
            a2,
            l3,
            {
              src: d3,
              sizes: c3,
              unoptimized: u3 = false,
              priority: p3 = false,
              loading: f3,
              className: h3,
              quality: g3,
              width: m3,
              height: v3,
              fill: w2 = false,
              style: y2,
              overrideSrc: b2,
              onLoad: S2,
              onLoadingComplete: x3,
              placeholder: C3 = 'empty',
              blurDataURL: z2,
              fetchPriority: E2,
              layout: _2,
              objectFit: j,
              objectPosition: k,
              lazyBoundary: R,
              lazyRoot: I,
              ...A
            } = e3,
            {
              imgConf: M,
              showAltText: P,
              blurComplete: N,
              defaultLoader: U
            } = t3,
            O = M || i.z;
          if ('allSizes' in O) s2 = O;
          else {
            let e4 = [...O.deviceSizes, ...O.imageSizes].sort(
                (e5, t5) => e5 - t5
              ),
              t4 = O.deviceSizes.sort((e5, t5) => e5 - t5);
            s2 = { ...O, allSizes: e4, deviceSizes: t4 };
          }
          if (void 0 === U)
            throw Error(
              'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'
            );
          let D = A.loader || U;
          delete A.loader, delete A.srcSet;
          let F = '__next_img_default' in D;
          if (F) {
            if ('custom' === s2.loader)
              throw Error(
                'Image with src "' +
                  d3 +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              );
          } else {
            let e4 = D;
            D = (t4) => {
              let { config: r4, ...i2 } = t4;
              return e4(i2);
            };
          }
          if (_2) {
            'fill' === _2 && (w2 = true);
            let e4 = {
              intrinsic: { maxWidth: '100%', height: 'auto' },
              responsive: { width: '100%', height: 'auto' }
            }[_2];
            e4 && (y2 = { ...y2, ...e4 });
            let t4 = { responsive: '100vw', fill: '100vw' }[_2];
            t4 && !c3 && (c3 = t4);
          }
          let G = '',
            T = o(m3),
            B = o(v3);
          if ('object' == typeof (r3 = d3) && (n(r3) || void 0 !== r3.src)) {
            let e4 = n(d3) ? d3.default : d3;
            if (!e4.src)
              throw Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                  JSON.stringify(e4)
              );
            if (!e4.height || !e4.width)
              throw Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                  JSON.stringify(e4)
              );
            if (
              ((a2 = e4.blurWidth),
              (l3 = e4.blurHeight),
              (z2 = z2 || e4.blurDataURL),
              (G = e4.src),
              !w2)
            ) {
              if (T || B) {
                if (T && !B) {
                  let t4 = T / e4.width;
                  B = Math.round(e4.height * t4);
                } else if (!T && B) {
                  let t4 = B / e4.height;
                  T = Math.round(e4.width * t4);
                }
              } else (T = e4.width), (B = e4.height);
            }
          }
          let L = !p3 && ('lazy' === f3 || void 0 === f3);
          (!(d3 = 'string' == typeof d3 ? d3 : G) ||
            d3.startsWith('data:') ||
            d3.startsWith('blob:')) &&
            ((u3 = true), (L = false)),
            s2.unoptimized && (u3 = true),
            F && d3.endsWith('.svg') && !s2.dangerouslyAllowSVG && (u3 = true),
            p3 && (E2 = 'high');
          let W = o(g3),
            q = Object.assign(
              w2
                ? {
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: j,
                    objectPosition: k
                  }
                : {},
              P ? {} : { color: 'transparent' },
              y2
            ),
            H =
              N || 'empty' === C3
                ? null
                : 'blur' === C3
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (function (e4) {
                    let {
                        widthInt: t4,
                        heightInt: r4,
                        blurWidth: i2,
                        blurHeight: n2,
                        blurDataURL: o2,
                        objectFit: s3
                      } = e4,
                      a3 = i2 ? 40 * i2 : t4,
                      l4 = n2 ? 40 * n2 : r4,
                      d4 =
                        a3 && l4 ? "viewBox='0 0 " + a3 + ' ' + l4 + "'" : '';
                    return (
                      "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
                      d4 +
                      "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
                      (d4
                        ? 'none'
                        : 'contain' === s3
                        ? 'xMidYMid'
                        : 'cover' === s3
                        ? 'xMidYMid slice'
                        : 'none') +
                      "' style='filter: url(%23b);' href='" +
                      o2 +
                      "'/%3E%3C/svg%3E"
                    );
                  })({
                    widthInt: T,
                    heightInt: B,
                    blurWidth: a2,
                    blurHeight: l3,
                    blurDataURL: z2 || '',
                    objectFit: q.objectFit
                  }) +
                  '")'
                : 'url("' + C3 + '")',
            $ = H
              ? {
                  backgroundSize: q.objectFit || 'cover',
                  backgroundPosition: q.objectPosition || '50% 50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: H
                }
              : {},
            J = (function (e4) {
              let {
                config: t4,
                src: r4,
                unoptimized: i2,
                width: n2,
                quality: o2,
                sizes: s3,
                loader: a3
              } = e4;
              if (i2) return { src: r4, srcSet: void 0, sizes: void 0 };
              let { widths: l4, kind: d4 } = (function (e5, t5, r5) {
                  let { deviceSizes: i3, allSizes: n3 } = e5;
                  if (r5) {
                    let e6 = /(^|\s)(1?\d?\d)vw/g,
                      t6 = [];
                    for (let i4; (i4 = e6.exec(r5)); i4)
                      t6.push(parseInt(i4[2]));
                    if (t6.length) {
                      let e7 = 0.01 * Math.min(...t6);
                      return {
                        widths: n3.filter((t7) => t7 >= i3[0] * e7),
                        kind: 'w'
                      };
                    }
                    return { widths: n3, kind: 'w' };
                  }
                  return 'number' != typeof t5
                    ? { widths: i3, kind: 'w' }
                    : {
                        widths: [
                          ...new Set(
                            [t5, 2 * t5].map(
                              (e6) =>
                                n3.find((t6) => t6 >= e6) || n3[n3.length - 1]
                            )
                          )
                        ],
                        kind: 'x'
                      };
                })(t4, n2, s3),
                c4 = l4.length - 1;
              return {
                sizes: s3 || 'w' !== d4 ? s3 : '100vw',
                srcSet: l4
                  .map(
                    (e5, i3) =>
                      a3({ config: t4, src: r4, quality: o2, width: e5 }) +
                      ' ' +
                      ('w' === d4 ? e5 : i3 + 1) +
                      d4
                  )
                  .join(', '),
                src: a3({ config: t4, src: r4, quality: o2, width: l4[c4] })
              };
            })({
              config: s2,
              src: d3,
              unoptimized: u3,
              width: T,
              quality: W,
              sizes: c3,
              loader: D
            });
          return {
            props: {
              ...A,
              loading: L ? 'lazy' : f3,
              fetchPriority: E2,
              width: T,
              height: B,
              decoding: 'async',
              className: h3,
              style: { ...q, ...$ },
              sizes: J.sizes,
              srcSet: J.srcSet,
              src: b2 || J.src
            },
            meta: { unoptimized: u3, priority: p3, placeholder: C3, fill: w2 }
          };
        })(e2, {
          defaultLoader: b,
          imgConf: d2,
          blurComplete: h2,
          showAltText: m2
        });
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(z, {
            ...x2,
            unoptimized: C2.unoptimized,
            placeholder: C2.placeholder,
            fill: C2.fill,
            onLoadRef: p2,
            onLoadingCompleteRef: f2,
            setBlurComplete: g2,
            setShowAltText: v2,
            sizesInput: e2.sizes,
            ref: t2
          }),
          C2.priority
            ? (0, s.jsx)(E, { isAppRouter: !r2, imgAttributes: x2 })
            : null
        ]
      });
    });
  };
  return __namedExportsObject;
};
export { __getNamedExports };
