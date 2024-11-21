'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [366],
  {
    78369: function (t, e, n) {
      n.d(e, {
        Ry: function () {
          return a;
        }
      });
      var r = new WeakMap(),
        i = new WeakMap(),
        o = {},
        u = 0,
        c = function (t) {
          return t && (t.host || c(t.parentNode));
        },
        l = function (t, e, n, l) {
          var a = (Array.isArray(t) ? t : [t])
            .map(function (t) {
              if (e.contains(t)) return t;
              var n = c(t);
              return n && e.contains(n)
                ? n
                : (console.error(
                    'aria-hidden',
                    t,
                    'in not contained inside',
                    e,
                    '. Doing nothing'
                  ),
                  null);
            })
            .filter(function (t) {
              return !!t;
            });
          o[n] || (o[n] = new WeakMap());
          var f = o[n],
            s = [],
            d = new Set(),
            p = new Set(a),
            h = function (t) {
              !t || d.has(t) || (d.add(t), h(t.parentNode));
            };
          a.forEach(h);
          var m = function (t) {
            !t ||
              p.has(t) ||
              Array.prototype.forEach.call(t.children, function (t) {
                if (d.has(t)) m(t);
                else {
                  var e = t.getAttribute(l),
                    o = null !== e && 'false' !== e,
                    u = (r.get(t) || 0) + 1,
                    c = (f.get(t) || 0) + 1;
                  r.set(t, u),
                    f.set(t, c),
                    s.push(t),
                    1 === u && o && i.set(t, !0),
                    1 === c && t.setAttribute(n, 'true'),
                    o || t.setAttribute(l, 'true');
                }
              });
          };
          return (
            m(e),
            d.clear(),
            u++,
            function () {
              s.forEach(function (t) {
                var e = r.get(t) - 1,
                  o = f.get(t) - 1;
                r.set(t, e),
                  f.set(t, o),
                  e || (i.has(t) || t.removeAttribute(l), i.delete(t)),
                  o || t.removeAttribute(n);
              }),
                --u ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (i = new WeakMap()),
                  (o = {}));
            }
          );
        },
        a = function (t, e, n) {
          void 0 === n && (n = 'data-aria-hidden');
          var r = Array.from(Array.isArray(t) ? t : [t]),
            i =
              e ||
              ('undefined' == typeof document
                ? null
                : (Array.isArray(t) ? t[0] : t).ownerDocument.body);
          return i
            ? (r.push.apply(r, Array.from(i.querySelectorAll('[aria-live]'))),
              l(r, i, n, 'aria-hidden'))
            : function () {
                return null;
              };
        };
    },
    91584: function (t, e, n) {
      n.d(e, {
        Av: function () {
          return u;
        },
        pF: function () {
          return r;
        },
        xv: function () {
          return o;
        },
        zi: function () {
          return i;
        }
      });
      var r = 'right-scroll-bar-position',
        i = 'width-before-scroll-bar',
        o = 'with-scroll-bars-hidden',
        u = '--removed-body-scroll-bar-size';
    },
    65973: function (t, e, n) {
      n.d(e, {
        jp: function () {
          return m;
        }
      });
      var r = n(2265),
        i = n(18039),
        o = n(91584),
        u = { left: 0, top: 0, right: 0, gap: 0 },
        c = function (t) {
          return parseInt(t || '', 10) || 0;
        },
        l = function (t) {
          var e = window.getComputedStyle(document.body),
            n = e['padding' === t ? 'paddingLeft' : 'marginLeft'],
            r = e['padding' === t ? 'paddingTop' : 'marginTop'],
            i = e['padding' === t ? 'paddingRight' : 'marginRight'];
          return [c(n), c(r), c(i)];
        },
        a = function (t) {
          if ((void 0 === t && (t = 'margin'), 'undefined' == typeof window))
            return u;
          var e = l(t),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: e[0],
            top: e[1],
            right: e[2],
            gap: Math.max(0, r - n + e[2] - e[0])
          };
        },
        f = (0, i.Ws)(),
        s = 'data-scroll-locked',
        d = function (t, e, n, r) {
          var i = t.left,
            u = t.top,
            c = t.right,
            l = t.gap;
          return (
            void 0 === n && (n = 'margin'),
            '\n  .'
              .concat(o.xv, ' {\n   overflow: hidden ')
              .concat(r, ';\n   padding-right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  body[')
              .concat(s, '] {\n    overflow: hidden ')
              .concat(r, ';\n    overscroll-behavior: contain;\n    ')
              .concat(
                [
                  e && 'position: relative '.concat(r, ';'),
                  'margin' === n &&
                    '\n    padding-left: '
                      .concat(i, 'px;\n    padding-top: ')
                      .concat(u, 'px;\n    padding-right: ')
                      .concat(
                        c,
                        'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: '
                      )
                      .concat(l, 'px ')
                      .concat(r, ';\n    '),
                  'padding' === n &&
                    'padding-right: '.concat(l, 'px ').concat(r, ';')
                ]
                  .filter(Boolean)
                  .join(''),
                '\n  }\n  \n  .'
              )
              .concat(o.pF, ' {\n    right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(o.zi, ' {\n    margin-right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(o.pF, ' .')
              .concat(o.pF, ' {\n    right: 0 ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(o.zi, ' .')
              .concat(o.zi, ' {\n    margin-right: 0 ')
              .concat(r, ';\n  }\n  \n  body[')
              .concat(s, '] {\n    ')
              .concat(o.Av, ': ')
              .concat(l, 'px;\n  }\n')
          );
        },
        p = function () {
          var t = parseInt(document.body.getAttribute(s) || '0', 10);
          return isFinite(t) ? t : 0;
        },
        h = function () {
          r.useEffect(function () {
            return (
              document.body.setAttribute(s, (p() + 1).toString()),
              function () {
                var t = p() - 1;
                t <= 0
                  ? document.body.removeAttribute(s)
                  : document.body.setAttribute(s, t.toString());
              }
            );
          }, []);
        },
        m = function (t) {
          var e = t.noRelative,
            n = t.noImportant,
            i = t.gapMode,
            o = void 0 === i ? 'margin' : i;
          h();
          var u = r.useMemo(
            function () {
              return a(o);
            },
            [o]
          );
          return r.createElement(f, {
            styles: d(u, !e, o, n ? '' : '!important')
          });
        };
    },
    18039: function (t, e, n) {
      n.d(e, {
        Ws: function () {
          return c;
        }
      });
      var r,
        i = n(2265),
        o = function () {
          var t = 0,
            e = null;
          return {
            add: function (i) {
              if (
                0 == t &&
                (e = (function () {
                  if (!document) return null;
                  var t = document.createElement('style');
                  t.type = 'text/css';
                  var e = r || n.nc;
                  return e && t.setAttribute('nonce', e), t;
                })())
              ) {
                var o, u;
                (o = e).styleSheet
                  ? (o.styleSheet.cssText = i)
                  : o.appendChild(document.createTextNode(i)),
                  (u = e),
                  (
                    document.head || document.getElementsByTagName('head')[0]
                  ).appendChild(u);
              }
              t++;
            },
            remove: function () {
              --t ||
                !e ||
                (e.parentNode && e.parentNode.removeChild(e), (e = null));
            }
          };
        },
        u = function () {
          var t = o();
          return function (e, n) {
            i.useEffect(
              function () {
                return (
                  t.add(e),
                  function () {
                    t.remove();
                  }
                );
              },
              [e && n]
            );
          };
        },
        c = function () {
          var t = u();
          return function (e) {
            return t(e.styles, e.dynamic), null;
          };
        };
    },
    28215: function (t, e, n) {
      n.d(e, {
        q: function () {
          return i;
        }
      });
      var r = n(2265);
      function i(t, e) {
        var n, i, o;
        return (
          (n = e || null),
          (i = function (e) {
            return t.forEach(function (t) {
              return 'function' == typeof t ? t(e) : t && (t.current = e), t;
            });
          }),
          ((o = (0, r.useState)(function () {
            return {
              value: n,
              callback: i,
              facade: {
                get current() {
                  return o.value;
                },
                set current(value) {
                  var t = o.value;
                  t !== value && ((o.value = value), o.callback(value, t));
                }
              }
            };
          })[0]).callback = i),
          o.facade
        );
      }
    },
    48776: function (t, e, n) {
      n.d(e, {
        L: function () {
          return u;
        }
      });
      var r = n(11735),
        i = n(2265),
        o = function (t) {
          var e = t.sideCar,
            n = (0, r._T)(t, ['sideCar']);
          if (!e)
            throw Error(
              'Sidecar: please provide `sideCar` property to import the right car'
            );
          var o = e.read();
          if (!o) throw Error('Sidecar medium not found');
          return i.createElement(o, (0, r.pi)({}, n));
        };
      function u(t, e) {
        return t.useMedium(e), o;
      }
      o.isSideCarExport = !0;
    },
    15411: function (t, e, n) {
      n.d(e, {
        _: function () {
          return o;
        }
      });
      var r = n(11735);
      function i(t) {
        return t;
      }
      function o(t) {
        void 0 === t && (t = {});
        var e,
          n,
          o,
          u =
            (void 0 === e && (e = i),
            (n = []),
            (o = !1),
            {
              read: function () {
                if (o)
                  throw Error(
                    'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                  );
                return n.length ? n[n.length - 1] : null;
              },
              useMedium: function (t) {
                var r = e(t, o);
                return (
                  n.push(r),
                  function () {
                    n = n.filter(function (t) {
                      return t !== r;
                    });
                  }
                );
              },
              assignSyncMedium: function (t) {
                for (o = !0; n.length; ) {
                  var e = n;
                  (n = []), e.forEach(t);
                }
                n = {
                  push: function (e) {
                    return t(e);
                  },
                  filter: function () {
                    return n;
                  }
                };
              },
              assignMedium: function (t) {
                o = !0;
                var e = [];
                if (n.length) {
                  var r = n;
                  (n = []), r.forEach(t), (e = n);
                }
                var i = function () {
                    var n = e;
                    (e = []), n.forEach(t);
                  },
                  u = function () {
                    return Promise.resolve().then(i);
                  };
                u(),
                  (n = {
                    push: function (t) {
                      e.push(t), u();
                    },
                    filter: function (t) {
                      return (e = e.filter(t)), n;
                    }
                  });
              }
            });
        return (u.options = (0, r.pi)({ async: !0, ssr: !1 }, t)), u;
      }
    },
    20151: function (t, e, n) {
      n.d(e, {
        Cp: function () {
          return s;
        },
        RR: function () {
          return l;
        },
        cv: function () {
          return p;
        },
        dp: function () {
          return g;
        },
        dr: function () {
          return m;
        },
        oo: function () {
          return o;
        },
        uY: function () {
          return h;
        },
        x7: function () {
          return c;
        }
      });
      var r = n(47848);
      function i(t, e, n) {
        let i,
          { reference: o, floating: u } = t,
          c = (0, r.Qq)(e),
          l = (0, r.Wh)(e),
          a = (0, r.I4)(l),
          f = (0, r.k3)(e),
          s = 'y' === c,
          d = o.x + o.width / 2 - u.width / 2,
          p = o.y + o.height / 2 - u.height / 2,
          h = o[a] / 2 - u[a] / 2;
        switch (f) {
          case 'top':
            i = { x: d, y: o.y - u.height };
            break;
          case 'bottom':
            i = { x: d, y: o.y + o.height };
            break;
          case 'right':
            i = { x: o.x + o.width, y: p };
            break;
          case 'left':
            i = { x: o.x - u.width, y: p };
            break;
          default:
            i = { x: o.x, y: o.y };
        }
        switch ((0, r.hp)(e)) {
          case 'start':
            i[l] -= h * (n && s ? -1 : 1);
            break;
          case 'end':
            i[l] += h * (n && s ? -1 : 1);
        }
        return i;
      }
      let o = async (t, e, n) => {
        let {
            placement: r = 'bottom',
            strategy: o = 'absolute',
            middleware: u = [],
            platform: c
          } = n,
          l = u.filter(Boolean),
          a = await (null == c.isRTL ? void 0 : c.isRTL(e)),
          f = await c.getElementRects({
            reference: t,
            floating: e,
            strategy: o
          }),
          { x: s, y: d } = i(f, r, a),
          p = r,
          h = {},
          m = 0;
        for (let n = 0; n < l.length; n++) {
          let { name: u, fn: g } = l[n],
            {
              x: y,
              y: v,
              data: w,
              reset: b
            } = await g({
              x: s,
              y: d,
              initialPlacement: r,
              placement: p,
              strategy: o,
              middlewareData: h,
              rects: f,
              platform: c,
              elements: { reference: t, floating: e }
            });
          if (
            ((s = null != y ? y : s),
            (d = null != v ? v : d),
            (h = { ...h, [u]: { ...h[u], ...w } }),
            b && m <= 50)
          ) {
            m++,
              'object' == typeof b &&
                (b.placement && (p = b.placement),
                b.rects &&
                  (f =
                    !0 === b.rects
                      ? await c.getElementRects({
                          reference: t,
                          floating: e,
                          strategy: o
                        })
                      : b.rects),
                ({ x: s, y: d } = i(f, p, a))),
              (n = -1);
            continue;
          }
        }
        return { x: s, y: d, placement: p, strategy: o, middlewareData: h };
      };
      async function u(t, e) {
        var n;
        void 0 === e && (e = {});
        let { x: i, y: o, platform: u, rects: c, elements: l, strategy: a } = t,
          {
            boundary: f = 'clippingAncestors',
            rootBoundary: s = 'viewport',
            elementContext: d = 'floating',
            altBoundary: p = !1,
            padding: h = 0
          } = (0, r.ku)(e, t),
          m = (0, r.yd)(h),
          g = l[p ? ('floating' === d ? 'reference' : 'floating') : d],
          y = (0, r.JB)(
            await u.getClippingRect({
              element:
                null ==
                  (n = await (null == u.isElement ? void 0 : u.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == u.getDocumentElement
                      ? void 0
                      : u.getDocumentElement(l.floating))),
              boundary: f,
              rootBoundary: s,
              strategy: a
            })
          ),
          v = 'floating' === d ? { ...c.floating, x: i, y: o } : c.reference,
          w = await (null == u.getOffsetParent
            ? void 0
            : u.getOffsetParent(l.floating)),
          b = ((await (null == u.isElement ? void 0 : u.isElement(w))) &&
            (await (null == u.getScale ? void 0 : u.getScale(w)))) || {
            x: 1,
            y: 1
          },
          x = (0, r.JB)(
            u.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: v,
                  offsetParent: w,
                  strategy: a
                })
              : v
          );
        return {
          top: (y.top - x.top + m.top) / b.y,
          bottom: (x.bottom - y.bottom + m.bottom) / b.y,
          left: (y.left - x.left + m.left) / b.x,
          right: (x.right - y.right + m.right) / b.x
        };
      }
      let c = (t) => ({
          name: 'arrow',
          options: t,
          async fn(e) {
            let {
                x: n,
                y: i,
                placement: o,
                rects: u,
                platform: c,
                elements: l
              } = e,
              { element: a, padding: f = 0 } = (0, r.ku)(t, e) || {};
            if (null == a) return {};
            let s = (0, r.yd)(f),
              d = { x: n, y: i },
              p = (0, r.Wh)(o),
              h = (0, r.I4)(p),
              m = await c.getDimensions(a),
              g = 'y' === p,
              y = g ? 'clientHeight' : 'clientWidth',
              v = u.reference[h] + u.reference[p] - d[p] - u.floating[h],
              w = d[p] - u.reference[p],
              b = await (null == c.getOffsetParent
                ? void 0
                : c.getOffsetParent(a)),
              x = b ? b[y] : 0;
            (x && (await (null == c.isElement ? void 0 : c.isElement(b)))) ||
              (x = l.floating[y] || u.floating[h]);
            let A = x / 2 - m[h] / 2 - 1,
              E = (0, r.VV)(s[g ? 'top' : 'left'], A),
              R = (0, r.VV)(s[g ? 'bottom' : 'right'], A),
              k = x - m[h] - R,
              S = x / 2 - m[h] / 2 + (v / 2 - w / 2),
              T = (0, r.uZ)(E, S, k),
              L =
                null != (0, r.hp)(o) &&
                S != T &&
                u.reference[h] / 2 - (S < E ? E : R) - m[h] / 2 < 0
                  ? S < E
                    ? E - S
                    : k - S
                  : 0;
            return { [p]: d[p] - L, data: { [p]: T, centerOffset: S - T + L } };
          }
        }),
        l = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: 'flip',
              options: t,
              async fn(e) {
                var n, i, o, c;
                let {
                    placement: l,
                    middlewareData: a,
                    rects: f,
                    initialPlacement: s,
                    platform: d,
                    elements: p
                  } = e,
                  {
                    mainAxis: h = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: g,
                    fallbackStrategy: y = 'bestFit',
                    fallbackAxisSideDirection: v = 'none',
                    flipAlignment: w = !0,
                    ...b
                  } = (0, r.ku)(t, e),
                  x = (0, r.k3)(l),
                  A = (0, r.k3)(s) === s,
                  E = await (null == d.isRTL ? void 0 : d.isRTL(p.floating)),
                  R = g || (A || !w ? [(0, r.pw)(s)] : (0, r.gy)(s));
                g || 'none' === v || R.push(...(0, r.KX)(s, w, v, E));
                let k = [s, ...R],
                  S = await u(e, b),
                  T = [],
                  L = (null == (n = a.flip) ? void 0 : n.overflows) || [];
                if ((h && T.push(S[x]), m)) {
                  let t = (0, r.i8)(l, f, E);
                  T.push(S[t[0]], S[t[1]]);
                }
                if (
                  ((L = [...L, { placement: l, overflows: T }]),
                  !T.every((t) => t <= 0))
                ) {
                  let t = ((null == (i = a.flip) ? void 0 : i.index) || 0) + 1,
                    e = k[t];
                  if (e)
                    return {
                      data: { index: t, overflows: L },
                      reset: { placement: e }
                    };
                  let n =
                    null ==
                    (o = L.filter((t) => t.overflows[0] <= 0).sort(
                      (t, e) => t.overflows[1] - e.overflows[1]
                    )[0])
                      ? void 0
                      : o.placement;
                  if (!n)
                    switch (y) {
                      case 'bestFit': {
                        let t =
                          null ==
                          (c = L.map((t) => [
                            t.placement,
                            t.overflows
                              .filter((t) => t > 0)
                              .reduce((t, e) => t + e, 0)
                          ]).sort((t, e) => t[1] - e[1])[0])
                            ? void 0
                            : c[0];
                        t && (n = t);
                        break;
                      }
                      case 'initialPlacement':
                        n = s;
                    }
                  if (l !== n) return { reset: { placement: n } };
                }
                return {};
              }
            }
          );
        };
      function a(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        };
      }
      function f(t) {
        return r.mA.some((e) => t[e] >= 0);
      }
      let s = function (t) {
        return (
          void 0 === t && (t = {}),
          {
            name: 'hide',
            options: t,
            async fn(e) {
              let { rects: n } = e,
                { strategy: i = 'referenceHidden', ...o } = (0, r.ku)(t, e);
              switch (i) {
                case 'referenceHidden': {
                  let t = a(
                    await u(e, { ...o, elementContext: 'reference' }),
                    n.reference
                  );
                  return {
                    data: { referenceHiddenOffsets: t, referenceHidden: f(t) }
                  };
                }
                case 'escaped': {
                  let t = a(await u(e, { ...o, altBoundary: !0 }), n.floating);
                  return { data: { escapedOffsets: t, escaped: f(t) } };
                }
                default:
                  return {};
              }
            }
          }
        );
      };
      async function d(t, e) {
        let { placement: n, platform: i, elements: o } = t,
          u = await (null == i.isRTL ? void 0 : i.isRTL(o.floating)),
          c = (0, r.k3)(n),
          l = (0, r.hp)(n),
          a = 'y' === (0, r.Qq)(n),
          f = ['left', 'top'].includes(c) ? -1 : 1,
          s = u && a ? -1 : 1,
          d = (0, r.ku)(e, t),
          {
            mainAxis: p,
            crossAxis: h,
            alignmentAxis: m
          } = 'number' == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
        return (
          l && 'number' == typeof m && (h = 'end' === l ? -1 * m : m),
          a ? { x: h * s, y: p * f } : { x: p * f, y: h * s }
        );
      }
      let p = function (t) {
          return (
            void 0 === t && (t = 0),
            {
              name: 'offset',
              options: t,
              async fn(e) {
                let { x: n, y: r } = e,
                  i = await d(e, t);
                return { x: n + i.x, y: r + i.y, data: i };
              }
            }
          );
        },
        h = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: 'shift',
              options: t,
              async fn(e) {
                let { x: n, y: i, placement: o } = e,
                  {
                    mainAxis: c = !0,
                    crossAxis: l = !1,
                    limiter: a = {
                      fn: (t) => {
                        let { x: e, y: n } = t;
                        return { x: e, y: n };
                      }
                    },
                    ...f
                  } = (0, r.ku)(t, e),
                  s = { x: n, y: i },
                  d = await u(e, f),
                  p = (0, r.Qq)((0, r.k3)(o)),
                  h = (0, r.Rn)(p),
                  m = s[h],
                  g = s[p];
                if (c) {
                  let t = 'y' === h ? 'top' : 'left',
                    e = 'y' === h ? 'bottom' : 'right',
                    n = m + d[t],
                    i = m - d[e];
                  m = (0, r.uZ)(n, m, i);
                }
                if (l) {
                  let t = 'y' === p ? 'top' : 'left',
                    e = 'y' === p ? 'bottom' : 'right',
                    n = g + d[t],
                    i = g - d[e];
                  g = (0, r.uZ)(n, g, i);
                }
                let y = a.fn({ ...e, [h]: m, [p]: g });
                return { ...y, data: { x: y.x - n, y: y.y - i } };
              }
            }
          );
        },
        m = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              options: t,
              fn(e) {
                let {
                    x: n,
                    y: i,
                    placement: o,
                    rects: u,
                    middlewareData: c
                  } = e,
                  {
                    offset: l = 0,
                    mainAxis: a = !0,
                    crossAxis: f = !0
                  } = (0, r.ku)(t, e),
                  s = { x: n, y: i },
                  d = (0, r.Qq)(o),
                  p = (0, r.Rn)(d),
                  h = s[p],
                  m = s[d],
                  g = (0, r.ku)(l, e),
                  y =
                    'number' == typeof g
                      ? { mainAxis: g, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...g };
                if (a) {
                  let t = 'y' === p ? 'height' : 'width',
                    e = u.reference[p] - u.floating[t] + y.mainAxis,
                    n = u.reference[p] + u.reference[t] - y.mainAxis;
                  h < e ? (h = e) : h > n && (h = n);
                }
                if (f) {
                  var v, w;
                  let t = 'y' === p ? 'width' : 'height',
                    e = ['top', 'left'].includes((0, r.k3)(o)),
                    n =
                      u.reference[d] -
                      u.floating[t] +
                      ((e && (null == (v = c.offset) ? void 0 : v[d])) || 0) +
                      (e ? 0 : y.crossAxis),
                    i =
                      u.reference[d] +
                      u.reference[t] +
                      (e ? 0 : (null == (w = c.offset) ? void 0 : w[d]) || 0) -
                      (e ? y.crossAxis : 0);
                  m < n ? (m = n) : m > i && (m = i);
                }
                return { [p]: h, [d]: m };
              }
            }
          );
        },
        g = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: 'size',
              options: t,
              async fn(e) {
                let n, i;
                let { placement: o, rects: c, platform: l, elements: a } = e,
                  { apply: f = () => {}, ...s } = (0, r.ku)(t, e),
                  d = await u(e, s),
                  p = (0, r.k3)(o),
                  h = (0, r.hp)(o),
                  m = 'y' === (0, r.Qq)(o),
                  { width: g, height: y } = c.floating;
                'top' === p || 'bottom' === p
                  ? ((n = p),
                    (i =
                      h ===
                      ((await (null == l.isRTL ? void 0 : l.isRTL(a.floating)))
                        ? 'start'
                        : 'end')
                        ? 'left'
                        : 'right'))
                  : ((i = p), (n = 'end' === h ? 'top' : 'bottom'));
                let v = y - d[n],
                  w = g - d[i],
                  b = !e.middlewareData.shift,
                  x = v,
                  A = w;
                if (m) {
                  let t = g - d.left - d.right;
                  A = h || b ? (0, r.VV)(w, t) : t;
                } else {
                  let t = y - d.top - d.bottom;
                  x = h || b ? (0, r.VV)(v, t) : t;
                }
                if (b && !h) {
                  let t = (0, r.Fp)(d.left, 0),
                    e = (0, r.Fp)(d.right, 0),
                    n = (0, r.Fp)(d.top, 0),
                    i = (0, r.Fp)(d.bottom, 0);
                  m
                    ? (A =
                        g -
                        2 *
                          (0 !== t || 0 !== e
                            ? t + e
                            : (0, r.Fp)(d.left, d.right)))
                    : (x =
                        y -
                        2 *
                          (0 !== n || 0 !== i
                            ? n + i
                            : (0, r.Fp)(d.top, d.bottom)));
                }
                await f({ ...e, availableWidth: A, availableHeight: x });
                let E = await l.getDimensions(a.floating);
                return g !== E.width || y !== E.height
                  ? { reset: { rects: !0 } }
                  : {};
              }
            }
          );
        };
    },
    55497: function (t, e, n) {
      n.d(e, {
        Me: function () {
          return C;
        },
        oo: function () {
          return W;
        }
      });
      var r = n(47848),
        i = n(20151);
      function o(t) {
        return l(t) ? (t.nodeName || '').toLowerCase() : '#document';
      }
      function u(t) {
        var e;
        return (
          (null == t
            ? void 0
            : null == (e = t.ownerDocument)
            ? void 0
            : e.defaultView) || window
        );
      }
      function c(t) {
        var e;
        return null ==
          (e = (l(t) ? t.ownerDocument : t.document) || window.document)
          ? void 0
          : e.documentElement;
      }
      function l(t) {
        return t instanceof Node || t instanceof u(t).Node;
      }
      function a(t) {
        return t instanceof Element || t instanceof u(t).Element;
      }
      function f(t) {
        return t instanceof HTMLElement || t instanceof u(t).HTMLElement;
      }
      function s(t) {
        return (
          'undefined' != typeof ShadowRoot &&
          (t instanceof ShadowRoot || t instanceof u(t).ShadowRoot)
        );
      }
      function d(t) {
        let { overflow: e, overflowX: n, overflowY: r, display: i } = g(t);
        return (
          /auto|scroll|overlay|hidden|clip/.test(e + r + n) &&
          !['inline', 'contents'].includes(i)
        );
      }
      function p(t) {
        let e = h(),
          n = g(t);
        return (
          'none' !== n.transform ||
          'none' !== n.perspective ||
          (!!n.containerType && 'normal' !== n.containerType) ||
          (!e && !!n.backdropFilter && 'none' !== n.backdropFilter) ||
          (!e && !!n.filter && 'none' !== n.filter) ||
          ['transform', 'perspective', 'filter'].some((t) =>
            (n.willChange || '').includes(t)
          ) ||
          ['paint', 'layout', 'strict', 'content'].some((t) =>
            (n.contain || '').includes(t)
          )
        );
      }
      function h() {
        return (
          'undefined' != typeof CSS &&
          !!CSS.supports &&
          CSS.supports('-webkit-backdrop-filter', 'none')
        );
      }
      function m(t) {
        return ['html', 'body', '#document'].includes(o(t));
      }
      function g(t) {
        return u(t).getComputedStyle(t);
      }
      function y(t) {
        return a(t)
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function v(t) {
        if ('html' === o(t)) return t;
        let e = t.assignedSlot || t.parentNode || (s(t) && t.host) || c(t);
        return s(e) ? e.host : e;
      }
      function w(t, e) {
        var n;
        void 0 === e && (e = []);
        let r = (function t(e) {
            let n = v(e);
            return m(n)
              ? e.ownerDocument
                ? e.ownerDocument.body
                : e.body
              : f(n) && d(n)
              ? n
              : t(n);
          })(t),
          i = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
          o = u(r);
        return i
          ? e.concat(o, o.visualViewport || [], d(r) ? r : [])
          : e.concat(r, w(r));
      }
      function b(t) {
        let e = g(t),
          n = parseFloat(e.width) || 0,
          i = parseFloat(e.height) || 0,
          o = f(t),
          u = o ? t.offsetWidth : n,
          c = o ? t.offsetHeight : i,
          l = (0, r.NM)(n) !== u || (0, r.NM)(i) !== c;
        return l && ((n = u), (i = c)), { width: n, height: i, $: l };
      }
      function x(t) {
        return a(t) ? t : t.contextElement;
      }
      function A(t) {
        let e = x(t);
        if (!f(e)) return (0, r.ze)(1);
        let n = e.getBoundingClientRect(),
          { width: i, height: o, $: u } = b(e),
          c = (u ? (0, r.NM)(n.width) : n.width) / i,
          l = (u ? (0, r.NM)(n.height) : n.height) / o;
        return (
          (c && Number.isFinite(c)) || (c = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: c, y: l }
        );
      }
      let E = (0, r.ze)(0);
      function R(t) {
        let e = u(t);
        return h() && e.visualViewport
          ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
          : E;
      }
      function k(t, e, n, i) {
        var o;
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        let c = t.getBoundingClientRect(),
          l = x(t),
          f = (0, r.ze)(1);
        e && (i ? a(i) && (f = A(i)) : (f = A(t)));
        let s = (void 0 === (o = n) && (o = !1), i && (!o || i === u(l)) && o)
            ? R(l)
            : (0, r.ze)(0),
          d = (c.left + s.x) / f.x,
          p = (c.top + s.y) / f.y,
          h = c.width / f.x,
          m = c.height / f.y;
        if (l) {
          let t = u(l),
            e = i && a(i) ? u(i) : i,
            n = t.frameElement;
          for (; n && i && e !== t; ) {
            let t = A(n),
              e = n.getBoundingClientRect(),
              r = g(n),
              i = e.left + (n.clientLeft + parseFloat(r.paddingLeft)) * t.x,
              o = e.top + (n.clientTop + parseFloat(r.paddingTop)) * t.y;
            (d *= t.x),
              (p *= t.y),
              (h *= t.x),
              (m *= t.y),
              (d += i),
              (p += o),
              (n = u(n).frameElement);
          }
        }
        return (0, r.JB)({ width: h, height: m, x: d, y: p });
      }
      function S(t) {
        return k(c(t)).left + y(t).scrollLeft;
      }
      function T(t, e, n) {
        let i;
        if ('viewport' === e)
          i = (function (t, e) {
            let n = u(t),
              r = c(t),
              i = n.visualViewport,
              o = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              f = 0;
            if (i) {
              (o = i.width), (l = i.height);
              let t = h();
              (!t || (t && 'fixed' === e)) &&
                ((a = i.offsetLeft), (f = i.offsetTop));
            }
            return { width: o, height: l, x: a, y: f };
          })(t, n);
        else if ('document' === e)
          i = (function (t) {
            let e = c(t),
              n = y(t),
              i = t.ownerDocument.body,
              o = (0, r.Fp)(
                e.scrollWidth,
                e.clientWidth,
                i.scrollWidth,
                i.clientWidth
              ),
              u = (0, r.Fp)(
                e.scrollHeight,
                e.clientHeight,
                i.scrollHeight,
                i.clientHeight
              ),
              l = -n.scrollLeft + S(t),
              a = -n.scrollTop;
            return (
              'rtl' === g(i).direction &&
                (l += (0, r.Fp)(e.clientWidth, i.clientWidth) - o),
              { width: o, height: u, x: l, y: a }
            );
          })(c(t));
        else if (a(e))
          i = (function (t, e) {
            let n = k(t, !0, 'fixed' === e),
              i = n.top + t.clientTop,
              o = n.left + t.clientLeft,
              u = f(t) ? A(t) : (0, r.ze)(1),
              c = t.clientWidth * u.x;
            return {
              width: c,
              height: t.clientHeight * u.y,
              x: o * u.x,
              y: i * u.y
            };
          })(e, n);
        else {
          let n = R(t);
          i = { ...e, x: e.x - n.x, y: e.y - n.y };
        }
        return (0, r.JB)(i);
      }
      function L(t, e) {
        return f(t) && 'fixed' !== g(t).position
          ? e
            ? e(t)
            : t.offsetParent
          : null;
      }
      function O(t, e) {
        let n = u(t);
        if (!f(t)) return n;
        let r = L(t, e);
        for (
          ;
          r &&
          ['table', 'td', 'th'].includes(o(r)) &&
          'static' === g(r).position;

        )
          r = L(r, e);
        return r &&
          ('html' === o(r) ||
            ('body' === o(r) && 'static' === g(r).position && !p(r)))
          ? n
          : r ||
              (function (t) {
                let e = v(t);
                for (; f(e) && !m(e); ) {
                  if (p(e)) return e;
                  e = v(e);
                }
                return null;
              })(t) ||
              n;
      }
      let F = async function (t) {
          let { reference: e, floating: n, strategy: i } = t,
            u = this.getOffsetParent || O,
            l = this.getDimensions;
          return {
            reference: (function (t, e, n) {
              let i = f(e),
                u = c(e),
                l = 'fixed' === n,
                a = k(t, !0, l, e),
                s = { scrollLeft: 0, scrollTop: 0 },
                p = (0, r.ze)(0);
              if (i || (!i && !l)) {
                if ((('body' !== o(e) || d(u)) && (s = y(e)), i)) {
                  let t = k(e, !0, l, e);
                  (p.x = t.x + e.clientLeft), (p.y = t.y + e.clientTop);
                } else u && (p.x = S(u));
              }
              return {
                x: a.left + s.scrollLeft - p.x,
                y: a.top + s.scrollTop - p.y,
                width: a.width,
                height: a.height
              };
            })(e, await u(n), i),
            floating: { x: 0, y: 0, ...(await l(n)) }
          };
        },
        M = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
            let { rect: e, offsetParent: n, strategy: i } = t,
              u = f(n),
              l = c(n);
            if (n === l) return e;
            let a = { scrollLeft: 0, scrollTop: 0 },
              s = (0, r.ze)(1),
              p = (0, r.ze)(0);
            if (
              (u || (!u && 'fixed' !== i)) &&
              (('body' !== o(n) || d(l)) && (a = y(n)), f(n))
            ) {
              let t = k(n);
              (s = A(n)), (p.x = t.x + n.clientLeft), (p.y = t.y + n.clientTop);
            }
            return {
              width: e.width * s.x,
              height: e.height * s.y,
              x: e.x * s.x - a.scrollLeft * s.x + p.x,
              y: e.y * s.y - a.scrollTop * s.y + p.y
            };
          },
          getDocumentElement: c,
          getClippingRect: function (t) {
            let { element: e, boundary: n, rootBoundary: i, strategy: u } = t,
              c = [
                ...('clippingAncestors' === n
                  ? (function (t, e) {
                      let n = e.get(t);
                      if (n) return n;
                      let r = w(t).filter((t) => a(t) && 'body' !== o(t)),
                        i = null,
                        u = 'fixed' === g(t).position,
                        c = u ? v(t) : t;
                      for (; a(c) && !m(c); ) {
                        let e = g(c),
                          n = p(c);
                        n || 'fixed' !== e.position || (i = null),
                          (
                            u
                              ? !n && !i
                              : (!n &&
                                  'static' === e.position &&
                                  !!i &&
                                  ['absolute', 'fixed'].includes(i.position)) ||
                                (d(c) &&
                                  !n &&
                                  (function t(e, n) {
                                    let r = v(e);
                                    return (
                                      !(r === n || !a(r) || m(r)) &&
                                      ('fixed' === g(r).position || t(r, n))
                                    );
                                  })(t, c))
                          )
                            ? (r = r.filter((t) => t !== c))
                            : (i = e),
                          (c = v(c));
                      }
                      return e.set(t, r), r;
                    })(e, this._c)
                  : [].concat(n)),
                i
              ],
              l = c[0],
              f = c.reduce(
                (t, n) => {
                  let i = T(e, n, u);
                  return (
                    (t.top = (0, r.Fp)(i.top, t.top)),
                    (t.right = (0, r.VV)(i.right, t.right)),
                    (t.bottom = (0, r.VV)(i.bottom, t.bottom)),
                    (t.left = (0, r.Fp)(i.left, t.left)),
                    t
                  );
                },
                T(e, l, u)
              );
            return {
              width: f.right - f.left,
              height: f.bottom - f.top,
              x: f.left,
              y: f.top
            };
          },
          getOffsetParent: O,
          getElementRects: F,
          getClientRects: function (t) {
            return Array.from(t.getClientRects());
          },
          getDimensions: function (t) {
            return b(t);
          },
          getScale: A,
          isElement: a,
          isRTL: function (t) {
            return 'rtl' === g(t).direction;
          }
        };
      function C(t, e, n, i) {
        let o;
        void 0 === i && (i = {});
        let {
            ancestorScroll: u = !0,
            ancestorResize: l = !0,
            elementResize: a = 'function' == typeof ResizeObserver,
            layoutShift: f = 'function' == typeof IntersectionObserver,
            animationFrame: s = !1
          } = i,
          d = x(t),
          p = u || l ? [...(d ? w(d) : []), ...w(e)] : [];
        p.forEach((t) => {
          u && t.addEventListener('scroll', n, { passive: !0 }),
            l && t.addEventListener('resize', n);
        });
        let h =
            d && f
              ? (function (t, e) {
                  let n,
                    i = null,
                    o = c(t);
                  function u() {
                    clearTimeout(n), i && i.disconnect(), (i = null);
                  }
                  return (
                    !(function c(l, a) {
                      void 0 === l && (l = !1), void 0 === a && (a = 1), u();
                      let {
                        left: f,
                        top: s,
                        width: d,
                        height: p
                      } = t.getBoundingClientRect();
                      if ((l || e(), !d || !p)) return;
                      let h = (0, r.GW)(s),
                        m = (0, r.GW)(o.clientWidth - (f + d)),
                        g = {
                          rootMargin:
                            -h +
                            'px ' +
                            -m +
                            'px ' +
                            -(0, r.GW)(o.clientHeight - (s + p)) +
                            'px ' +
                            -(0, r.GW)(f) +
                            'px',
                          threshold: (0, r.Fp)(0, (0, r.VV)(1, a)) || 1
                        },
                        y = !0;
                      function v(t) {
                        let e = t[0].intersectionRatio;
                        if (e !== a) {
                          if (!y) return c();
                          e
                            ? c(!1, e)
                            : (n = setTimeout(() => {
                                c(!1, 1e-7);
                              }, 100));
                        }
                        y = !1;
                      }
                      try {
                        i = new IntersectionObserver(v, {
                          ...g,
                          root: o.ownerDocument
                        });
                      } catch (t) {
                        i = new IntersectionObserver(v, g);
                      }
                      i.observe(t);
                    })(!0),
                    u
                  );
                })(d, n)
              : null,
          m = -1,
          g = null;
        a &&
          ((g = new ResizeObserver((t) => {
            let [r] = t;
            r &&
              r.target === d &&
              g &&
              (g.unobserve(e),
              cancelAnimationFrame(m),
              (m = requestAnimationFrame(() => {
                g && g.observe(e);
              }))),
              n();
          })),
          d && !s && g.observe(d),
          g.observe(e));
        let y = s ? k(t) : null;
        return (
          s &&
            (function e() {
              let r = k(t);
              y &&
                (r.x !== y.x ||
                  r.y !== y.y ||
                  r.width !== y.width ||
                  r.height !== y.height) &&
                n(),
                (y = r),
                (o = requestAnimationFrame(e));
            })(),
          n(),
          () => {
            p.forEach((t) => {
              u && t.removeEventListener('scroll', n),
                l && t.removeEventListener('resize', n);
            }),
              h && h(),
              g && g.disconnect(),
              (g = null),
              s && cancelAnimationFrame(o);
          }
        );
      }
      let W = (t, e, n) => {
        let r = new Map(),
          o = { platform: M, ...n },
          u = { ...o.platform, _c: r };
        return (0, i.oo)(t, e, { ...o, platform: u });
      };
    },
    94674: function (t, e, n) {
      n.d(e, {
        YF: function () {
          return p;
        },
        x7: function () {
          return c;
        }
      });
      var r = n(20151),
        i = n(55497),
        o = n(2265),
        u = n(54887);
      let c = (t) => ({
        name: 'arrow',
        options: t,
        fn(e) {
          let { element: n, padding: i } = 'function' == typeof t ? t(e) : t;
          if (n && {}.hasOwnProperty.call(n, 'current')) {
            if (null != n.current)
              return (0, r.x7)({ element: n.current, padding: i }).fn(e);
          } else if (n) return (0, r.x7)({ element: n, padding: i }).fn(e);
          return {};
        }
      });
      var l = 'undefined' != typeof document ? o.useLayoutEffect : o.useEffect;
      function a(t, e) {
        let n, r, i;
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ('function' == typeof t && t.toString() === e.toString()) return !0;
        if (t && e && 'object' == typeof t) {
          if (Array.isArray(t)) {
            if ((n = t.length) != e.length) return !1;
            for (r = n; 0 != r--; ) if (!a(t[r], e[r])) return !1;
            return !0;
          }
          if ((n = (i = Object.keys(t)).length) !== Object.keys(e).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(e, i[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = i[r];
            if (('_owner' !== n || !t.$$typeof) && !a(t[n], e[n])) return !1;
          }
          return !0;
        }
        return t != t && e != e;
      }
      function f(t) {
        return 'undefined' == typeof window
          ? 1
          : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function s(t, e) {
        let n = f(t);
        return Math.round(e * n) / n;
      }
      function d(t) {
        let e = o.useRef(t);
        return (
          l(() => {
            e.current = t;
          }),
          e
        );
      }
      function p(t) {
        void 0 === t && (t = {});
        let {
            placement: e = 'bottom',
            strategy: n = 'absolute',
            middleware: r = [],
            platform: c,
            elements: { reference: p, floating: h } = {},
            transform: m = !0,
            whileElementsMounted: g,
            open: y
          } = t,
          [v, w] = o.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: e,
            middlewareData: {},
            isPositioned: !1
          }),
          [b, x] = o.useState(r);
        a(b, r) || x(r);
        let [A, E] = o.useState(null),
          [R, k] = o.useState(null),
          S = o.useCallback(
            (t) => {
              t != F.current && ((F.current = t), E(t));
            },
            [E]
          ),
          T = o.useCallback(
            (t) => {
              t !== M.current && ((M.current = t), k(t));
            },
            [k]
          ),
          L = p || A,
          O = h || R,
          F = o.useRef(null),
          M = o.useRef(null),
          C = o.useRef(v),
          W = d(g),
          P = d(c),
          V = o.useCallback(() => {
            if (!F.current || !M.current) return;
            let t = { placement: e, strategy: n, middleware: b };
            P.current && (t.platform = P.current),
              (0, i.oo)(F.current, M.current, t).then((t) => {
                let e = { ...t, isPositioned: !0 };
                z.current &&
                  !a(C.current, e) &&
                  ((C.current = e),
                  u.flushSync(() => {
                    w(e);
                  }));
              });
          }, [b, e, n, P]);
        l(() => {
          !1 === y &&
            C.current.isPositioned &&
            ((C.current.isPositioned = !1),
            w((t) => ({ ...t, isPositioned: !1 })));
        }, [y]);
        let z = o.useRef(!1);
        l(
          () => (
            (z.current = !0),
            () => {
              z.current = !1;
            }
          ),
          []
        ),
          l(() => {
            if ((L && (F.current = L), O && (M.current = O), L && O)) {
              if (W.current) return W.current(L, O, V);
              V();
            }
          }, [L, O, V, W]);
        let D = o.useMemo(
            () => ({
              reference: F,
              floating: M,
              setReference: S,
              setFloating: T
            }),
            [S, T]
          ),
          N = o.useMemo(() => ({ reference: L, floating: O }), [L, O]),
          H = o.useMemo(() => {
            let t = { position: n, left: 0, top: 0 };
            if (!N.floating) return t;
            let e = s(N.floating, v.x),
              r = s(N.floating, v.y);
            return m
              ? {
                  ...t,
                  transform: 'translate(' + e + 'px, ' + r + 'px)',
                  ...(f(N.floating) >= 1.5 && { willChange: 'transform' })
                }
              : { position: n, left: e, top: r };
          }, [n, m, N.floating, v.x, v.y]);
        return o.useMemo(
          () => ({ ...v, update: V, refs: D, elements: N, floatingStyles: H }),
          [v, V, D, N, H]
        );
      }
    },
    47848: function (t, e, n) {
      n.d(e, {
        Fp: function () {
          return o;
        },
        GW: function () {
          return c;
        },
        I4: function () {
          return g;
        },
        JB: function () {
          return k;
        },
        KX: function () {
          return A;
        },
        NM: function () {
          return u;
        },
        Qq: function () {
          return y;
        },
        Rn: function () {
          return m;
        },
        VV: function () {
          return i;
        },
        Wh: function () {
          return v;
        },
        gy: function () {
          return b;
        },
        hp: function () {
          return h;
        },
        i8: function () {
          return w;
        },
        k3: function () {
          return p;
        },
        ku: function () {
          return d;
        },
        mA: function () {
          return r;
        },
        pw: function () {
          return E;
        },
        uZ: function () {
          return s;
        },
        yd: function () {
          return R;
        },
        ze: function () {
          return l;
        }
      });
      let r = ['top', 'right', 'bottom', 'left'],
        i = Math.min,
        o = Math.max,
        u = Math.round,
        c = Math.floor,
        l = (t) => ({ x: t, y: t }),
        a = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
        f = { start: 'end', end: 'start' };
      function s(t, e, n) {
        return o(t, i(e, n));
      }
      function d(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function p(t) {
        return t.split('-')[0];
      }
      function h(t) {
        return t.split('-')[1];
      }
      function m(t) {
        return 'x' === t ? 'y' : 'x';
      }
      function g(t) {
        return 'y' === t ? 'height' : 'width';
      }
      function y(t) {
        return ['top', 'bottom'].includes(p(t)) ? 'y' : 'x';
      }
      function v(t) {
        return m(y(t));
      }
      function w(t, e, n) {
        void 0 === n && (n = !1);
        let r = h(t),
          i = v(t),
          o = g(i),
          u =
            'x' === i
              ? r === (n ? 'end' : 'start')
                ? 'right'
                : 'left'
              : 'start' === r
              ? 'bottom'
              : 'top';
        return e.reference[o] > e.floating[o] && (u = E(u)), [u, E(u)];
      }
      function b(t) {
        let e = E(t);
        return [x(t), e, x(e)];
      }
      function x(t) {
        return t.replace(/start|end/g, (t) => f[t]);
      }
      function A(t, e, n, r) {
        let i = h(t),
          o = (function (t, e, n) {
            let r = ['left', 'right'],
              i = ['right', 'left'];
            switch (t) {
              case 'top':
              case 'bottom':
                if (n) return e ? i : r;
                return e ? r : i;
              case 'left':
              case 'right':
                return e ? ['top', 'bottom'] : ['bottom', 'top'];
              default:
                return [];
            }
          })(p(t), 'start' === n, r);
        return (
          i && ((o = o.map((t) => t + '-' + i)), e && (o = o.concat(o.map(x)))),
          o
        );
      }
      function E(t) {
        return t.replace(/left|right|bottom|top/g, (t) => a[t]);
      }
      function R(t) {
        return 'number' != typeof t
          ? { top: 0, right: 0, bottom: 0, left: 0, ...t }
          : { top: t, right: t, bottom: t, left: t };
      }
      function k(t) {
        return {
          ...t,
          top: t.y,
          left: t.x,
          right: t.x + t.width,
          bottom: t.y + t.height
        };
      }
    },
    11735: function (t, e, n) {
      n.d(e, {
        CR: function () {
          return c;
        },
        Jh: function () {
          return u;
        },
        _T: function () {
          return i;
        },
        ev: function () {
          return l;
        },
        mG: function () {
          return o;
        },
        pi: function () {
          return r;
        }
      });
      var r = function () {
        return (r =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function i(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            0 > e.indexOf(r) &&
            (n[r] = t[r]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(t);
            i < r.length;
            i++
          )
            0 > e.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        return n;
      }
      function o(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function u(t) {
            try {
              l(r.next(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            try {
              l(r.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function l(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })
                ).then(u, c);
          }
          l((r = r.apply(t, e || [])).next());
        });
      }
      function u(t, e) {
        var n,
          r,
          i,
          o,
          u = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: []
          };
        return (
          (o = { next: c(0), throw: c(1), return: c(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function c(c) {
          return function (l) {
            return (function (c) {
              if (n) throw TypeError('Generator is already executing.');
              for (; o && ((o = 0), c[0] && (u = 0)), u; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & c[0]
                          ? r.return
                          : c[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, c[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                    case 0:
                    case 1:
                      i = c;
                      break;
                    case 4:
                      return u.label++, { value: c[1], done: !1 };
                    case 5:
                      u.label++, (r = c[1]), (c = [0]);
                      continue;
                    case 7:
                      (c = u.ops.pop()), u.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = u.trys).length > 0 && i[i.length - 1]) &&
                        (6 === c[0] || 2 === c[0])
                      ) {
                        u = 0;
                        continue;
                      }
                      if (3 === c[0] && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                        u.label = c[1];
                        break;
                      }
                      if (6 === c[0] && u.label < i[1]) {
                        (u.label = i[1]), (i = c);
                        break;
                      }
                      if (i && u.label < i[2]) {
                        (u.label = i[2]), u.ops.push(c);
                        break;
                      }
                      i[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  c = e.call(t, u);
                } catch (t) {
                  (c = [6, t]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            })([c, l]);
          };
        }
      }
      function c(t, e) {
        var n = 'function' == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          u = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            u.push(r.value);
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return u;
      }
      function l(t, e, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      'function' == typeof SuppressedError && SuppressedError;
    }
  }
]);
