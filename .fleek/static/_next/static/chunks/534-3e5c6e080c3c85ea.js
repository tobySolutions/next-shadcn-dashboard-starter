'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [534],
  {
    63550: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let l = (0, n(78030).Z)('Ellipsis', [
        ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
        ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
        ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }]
      ]);
    },
    6649: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let l = (0, n(78030).Z)('SquarePen', [
        [
          'path',
          {
            d: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
            key: '1m0v6g'
          }
        ],
        [
          'path',
          {
            d: 'M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z',
            key: 'ohrbg2'
          }
        ]
      ]);
    },
    70325: function (e, t, n) {
      n.d(t, {
        f: function () {
          return d;
        }
      });
      var l = n(2265);
      n(54887);
      var r = n(63355),
        o = n(57437),
        i = [
          'a',
          'button',
          'div',
          'form',
          'h2',
          'h3',
          'img',
          'input',
          'label',
          'li',
          'nav',
          'ol',
          'p',
          'span',
          'svg',
          'ul'
        ].reduce((e, t) => {
          let n = l.forwardRef((e, n) => {
            let { asChild: l, ...i } = e,
              u = l ? r.g7 : t;
            return (
              'undefined' != typeof window &&
                (window[Symbol.for('radix-ui')] = !0),
              (0, o.jsx)(u, { ...i, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        u = 'horizontal',
        a = ['horizontal', 'vertical'],
        s = l.forwardRef((e, t) => {
          let { decorative: n, orientation: l = u, ...r } = e,
            s = a.includes(l) ? l : u;
          return (0, o.jsx)(i.div, {
            'data-orientation': s,
            ...(n
              ? { role: 'none' }
              : {
                  'aria-orientation': 'vertical' === s ? s : void 0,
                  role: 'separator'
                }),
            ...r,
            ref: t
          });
        });
      s.displayName = 'Separator';
      var d = s;
    },
    33514: function (e, t, n) {
      n.d(t, {
        b7: function () {
          return i;
        },
        ie: function () {
          return o;
        }
      });
      var l = n(2265),
        r = n(54175);
      /**
       * react-table
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */ function o(e, t) {
        return e
          ? ('function' == typeof e &&
              (() => {
                let t = Object.getPrototypeOf(e);
                return t.prototype && t.prototype.isReactComponent;
              })()) ||
            'function' == typeof e ||
            ('object' == typeof e &&
              'symbol' == typeof e.$$typeof &&
              ['react.memo', 'react.forward_ref'].includes(
                e.$$typeof.description
              ))
            ? l.createElement(e, t)
            : e
          : null;
      }
      function i(e) {
        let t = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...e
          },
          [n] = l.useState(() => ({ current: (0, r.W_)(t) })),
          [o, i] = l.useState(() => n.current.initialState);
        return (
          n.current.setOptions((t) => ({
            ...t,
            ...e,
            state: { ...o, ...e.state },
            onStateChange: (t) => {
              i(t), null == e.onStateChange || e.onStateChange(t);
            }
          })),
          n.current
        );
      }
    },
    54175: function (e, t, n) {
      /**
       * table-core
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */ function l(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function r(e, t) {
        return (n) => {
          t.setState((t) => ({ ...t, [e]: l(n, t[e]) }));
        };
      }
      function o(e) {
        return e instanceof Function;
      }
      function i(e, t, n) {
        let l,
          r = [];
        return () => {
          let o, i;
          n.key && n.debug && (o = Date.now());
          let u = e();
          if (!(u.length !== r.length || u.some((e, t) => r[t] !== e)))
            return l;
          if (
            ((r = u),
            n.key && n.debug && (i = Date.now()),
            (l = t(...u)),
            null == n || null == n.onChange || n.onChange(l),
            n.key && n.debug && null != n && n.debug())
          ) {
            let e = Math.round((Date.now() - o) * 100) / 100,
              t = Math.round((Date.now() - i) * 100) / 100,
              l = t / 16,
              r = (e, t) => {
                for (e = String(e); e.length < t; ) e = ' ' + e;
                return e;
              };
            console.info(
              `%c⏱ ${r(t, 5)} /${r(e, 5)} ms`,
              `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
              0,
              Math.min(120 - 120 * l, 120)
            )}deg 100% 31%);`,
              null == n ? void 0 : n.key
            );
          }
          return l;
        };
      }
      function u(e, t, n) {
        var l;
        let r = {
          id: null != (l = n.id) ? l : t.id,
          column: t,
          index: n.index,
          isPlaceholder: !!n.isPlaceholder,
          placeholderId: n.placeholderId,
          depth: n.depth,
          subHeaders: [],
          colSpan: 0,
          rowSpan: 0,
          headerGroup: null,
          getLeafHeaders: () => {
            let e = [],
              t = (n) => {
                n.subHeaders && n.subHeaders.length && n.subHeaders.map(t),
                  e.push(n);
              };
            return t(r), e;
          },
          getContext: () => ({ table: e, header: r, column: t })
        };
        return (
          e._features.forEach((t) => {
            null == t.createHeader || t.createHeader(r, e);
          }),
          r
        );
      }
      function a(e, t, n, l) {
        var r, o;
        let i = 0,
          a = function (e, t) {
            void 0 === t && (t = 1),
              (i = Math.max(i, t)),
              e
                .filter((e) => e.getIsVisible())
                .forEach((e) => {
                  var n;
                  null != (n = e.columns) && n.length && a(e.columns, t + 1);
                }, 0);
          };
        a(e);
        let s = [],
          d = (e, t) => {
            let r = {
                depth: t,
                id: [l, `${t}`].filter(Boolean).join('_'),
                headers: []
              },
              o = [];
            e.forEach((e) => {
              let i;
              let a = [...o].reverse()[0],
                s = e.column.depth === r.depth,
                d = !1;
              if (
                (s && e.column.parent
                  ? (i = e.column.parent)
                  : ((i = e.column), (d = !0)),
                a && (null == a ? void 0 : a.column) === i)
              )
                a.subHeaders.push(e);
              else {
                let r = u(n, i, {
                  id: [l, t, i.id, null == e ? void 0 : e.id]
                    .filter(Boolean)
                    .join('_'),
                  isPlaceholder: d,
                  placeholderId: d
                    ? `${o.filter((e) => e.column === i).length}`
                    : void 0,
                  depth: t,
                  index: o.length
                });
                r.subHeaders.push(e), o.push(r);
              }
              r.headers.push(e), (e.headerGroup = r);
            }),
              s.push(r),
              t > 0 && d(o, t - 1);
          };
        d(
          t.map((e, t) => u(n, e, { depth: i, index: t })),
          i - 1
        ),
          s.reverse();
        let g = (e) =>
          e
            .filter((e) => e.column.getIsVisible())
            .map((e) => {
              let t = 0,
                n = 0,
                l = [0];
              return (
                e.subHeaders && e.subHeaders.length
                  ? ((l = []),
                    g(e.subHeaders).forEach((e) => {
                      let { colSpan: n, rowSpan: r } = e;
                      (t += n), l.push(r);
                    }))
                  : (t = 1),
                (n += Math.min(...l)),
                (e.colSpan = t),
                (e.rowSpan = n),
                { colSpan: t, rowSpan: n }
              );
            });
        return (
          g(null != (r = null == (o = s[0]) ? void 0 : o.headers) ? r : []), s
        );
      }
      n.d(t, {
        G_: function () {
          return N;
        },
        W_: function () {
          return G;
        },
        sC: function () {
          return T;
        }
      });
      let s = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
        d = () => ({
          startOffset: null,
          startSize: null,
          deltaOffset: null,
          deltaPercentage: null,
          isResizingColumn: !1,
          columnSizingStart: []
        }),
        g = null;
      function c(e) {
        return 'touchstart' === e.type;
      }
      let f = (e, t, n) => {
        var l;
        let r = n.toLowerCase();
        return !!(null == (l = e.getValue(t)) ||
        null == (l = l.toString()) ||
        null == (l = l.toLowerCase())
          ? void 0
          : l.includes(r));
      };
      f.autoRemove = (e) => y(e);
      let p = (e, t, n) => {
        var l;
        return !!(null == (l = e.getValue(t)) || null == (l = l.toString())
          ? void 0
          : l.includes(n));
      };
      p.autoRemove = (e) => y(e);
      let m = (e, t, n) => {
        var l;
        return (
          (null == (l = e.getValue(t)) || null == (l = l.toString())
            ? void 0
            : l.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
        );
      };
      m.autoRemove = (e) => y(e);
      let v = (e, t, n) => {
        var l;
        return null == (l = e.getValue(t)) ? void 0 : l.includes(n);
      };
      v.autoRemove = (e) => y(e) || !(null != e && e.length);
      let h = (e, t, n) =>
        !n.some((n) => {
          var l;
          return !(null != (l = e.getValue(t)) && l.includes(n));
        });
      h.autoRemove = (e) => y(e) || !(null != e && e.length);
      let b = (e, t, n) =>
        n.some((n) => {
          var l;
          return null == (l = e.getValue(t)) ? void 0 : l.includes(n);
        });
      b.autoRemove = (e) => y(e) || !(null != e && e.length);
      let w = (e, t, n) => e.getValue(t) === n;
      w.autoRemove = (e) => y(e);
      let S = (e, t, n) => e.getValue(t) == n;
      S.autoRemove = (e) => y(e);
      let C = (e, t, n) => {
        let [l, r] = n,
          o = e.getValue(t);
        return o >= l && o <= r;
      };
      (C.resolveFilterValue = (e) => {
        let [t, n] = e,
          l = 'number' != typeof t ? parseFloat(t) : t,
          r = 'number' != typeof n ? parseFloat(n) : n,
          o = null === t || Number.isNaN(l) ? -1 / 0 : l,
          i = null === n || Number.isNaN(r) ? 1 / 0 : r;
        if (o > i) {
          let e = o;
          (o = i), (i = e);
        }
        return [o, i];
      }),
        (C.autoRemove = (e) => y(e) || (y(e[0]) && y(e[1])));
      let R = {
        includesString: f,
        includesStringSensitive: p,
        equalsString: m,
        arrIncludes: v,
        arrIncludesAll: h,
        arrIncludesSome: b,
        equals: w,
        weakEquals: S,
        inNumberRange: C
      };
      function y(e) {
        return null == e || '' === e;
      }
      function E(e, t, n) {
        return (
          (!!e && !!e.autoRemove && e.autoRemove(t, n)) ||
          void 0 === t ||
          ('string' == typeof t && !t)
        );
      }
      let F = {
          sum: (e, t, n) =>
            n.reduce((t, n) => {
              let l = n.getValue(e);
              return t + ('number' == typeof l ? l : 0);
            }, 0),
          min: (e, t, n) => {
            let l;
            return (
              n.forEach((t) => {
                let n = t.getValue(e);
                null != n && (l > n || (void 0 === l && n >= n)) && (l = n);
              }),
              l
            );
          },
          max: (e, t, n) => {
            let l;
            return (
              n.forEach((t) => {
                let n = t.getValue(e);
                null != n && (l < n || (void 0 === l && n >= n)) && (l = n);
              }),
              l
            );
          },
          extent: (e, t, n) => {
            let l, r;
            return (
              n.forEach((t) => {
                let n = t.getValue(e);
                null != n &&
                  (void 0 === l
                    ? n >= n && (l = r = n)
                    : (l > n && (l = n), r < n && (r = n)));
              }),
              [l, r]
            );
          },
          mean: (e, t) => {
            let n = 0,
              l = 0;
            if (
              (t.forEach((t) => {
                let r = t.getValue(e);
                null != r && (r = +r) >= r && (++n, (l += r));
              }),
              n)
            )
              return l / n;
          },
          median: (e, t) => {
            if (!t.length) return;
            let n = t.map((t) => t.getValue(e));
            if (!(Array.isArray(n) && n.every((e) => 'number' == typeof e)))
              return;
            if (1 === n.length) return n[0];
            let l = Math.floor(n.length / 2),
              r = n.sort((e, t) => e - t);
            return n.length % 2 != 0 ? r[l] : (r[l - 1] + r[l]) / 2;
          },
          unique: (e, t) =>
            Array.from(new Set(t.map((t) => t.getValue(e))).values()),
          uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
          count: (e, t) => t.length
        },
        M = () => ({ pageIndex: 0, pageSize: 10 }),
        P = () => ({ left: [], right: [] }),
        I = () => ({ top: [], bottom: [] }),
        x = (e, t, n, l, r) => {
          var o;
          let i = r.getRow(t);
          n
            ? (i.getCanMultiSelect() ||
                Object.keys(e).forEach((t) => delete e[t]),
              i.getCanSelect() && (e[t] = !0))
            : delete e[t],
            l &&
              null != (o = i.subRows) &&
              o.length &&
              i.getCanSelectSubRows() &&
              i.subRows.forEach((t) => x(e, t.id, n, l, r));
        };
      function A(e, t) {
        let n = e.getState().rowSelection,
          l = [],
          r = {},
          o = function (e, t) {
            return e
              .map((e) => {
                var t;
                let i = V(e, n);
                if (
                  (i && (l.push(e), (r[e.id] = e)),
                  null != (t = e.subRows) &&
                    t.length &&
                    (e = { ...e, subRows: o(e.subRows) }),
                  i)
                )
                  return e;
              })
              .filter(Boolean);
          };
        return { rows: o(t.rows), flatRows: l, rowsById: r };
      }
      function V(e, t) {
        var n;
        return null != (n = t[e.id]) && n;
      }
      function _(e, t, n) {
        var l;
        if (!(null != (l = e.subRows) && l.length)) return !1;
        let r = !0,
          o = !1;
        return (
          e.subRows.forEach((e) => {
            if (
              (!o || r) &&
              (e.getCanSelect() && (V(e, t) ? (o = !0) : (r = !1)),
              e.subRows && e.subRows.length)
            ) {
              let n = _(e, t);
              'all' === n ? (o = !0) : ('some' === n && (o = !0), (r = !1));
            }
          }),
          r ? 'all' : !!o && 'some'
        );
      }
      let O = /([0-9]+)/gm;
      function D(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function k(e) {
        return 'number' == typeof e
          ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ''
            : String(e)
          : 'string' == typeof e
          ? e
          : '';
      }
      function L(e, t) {
        let n = e.split(O).filter(Boolean),
          l = t.split(O).filter(Boolean);
        for (; n.length && l.length; ) {
          let e = n.shift(),
            t = l.shift(),
            r = parseInt(e, 10),
            o = parseInt(t, 10),
            i = [r, o].sort();
          if (isNaN(i[0])) {
            if (e > t) return 1;
            if (t > e) return -1;
            continue;
          }
          if (isNaN(i[1])) return isNaN(r) ? -1 : 1;
          if (r > o) return 1;
          if (o > r) return -1;
        }
        return n.length - l.length;
      }
      let z = {
          alphanumeric: (e, t, n) =>
            L(k(e.getValue(n)).toLowerCase(), k(t.getValue(n)).toLowerCase()),
          alphanumericCaseSensitive: (e, t, n) =>
            L(k(e.getValue(n)), k(t.getValue(n))),
          text: (e, t, n) =>
            D(k(e.getValue(n)).toLowerCase(), k(t.getValue(n)).toLowerCase()),
          textCaseSensitive: (e, t, n) => D(k(e.getValue(n)), k(t.getValue(n))),
          datetime: (e, t, n) => {
            let l = e.getValue(n),
              r = t.getValue(n);
            return l > r ? 1 : l < r ? -1 : 0;
          },
          basic: (e, t, n) => D(e.getValue(n), t.getValue(n))
        },
        H = [
          {
            createTable: (e) => {
              (e.getHeaderGroups = i(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right
                ],
                (t, n, l, r) => {
                  var o, i;
                  let u =
                      null !=
                      (o =
                        null == l
                          ? void 0
                          : l
                              .map((e) => n.find((t) => t.id === e))
                              .filter(Boolean))
                        ? o
                        : [],
                    s =
                      null !=
                      (i =
                        null == r
                          ? void 0
                          : r
                              .map((e) => n.find((t) => t.id === e))
                              .filter(Boolean))
                        ? i
                        : [];
                  return a(
                    t,
                    [
                      ...u,
                      ...n.filter(
                        (e) =>
                          !(null != l && l.includes(e.id)) &&
                          !(null != r && r.includes(e.id))
                      ),
                      ...s
                    ],
                    e
                  );
                },
                {
                  key: !1,
                  debug: () => {
                    var t;
                    return null != (t = e.options.debugAll)
                      ? t
                      : e.options.debugHeaders;
                  }
                }
              )),
                (e.getCenterHeaderGroups = i(
                  () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.left,
                    e.getState().columnPinning.right
                  ],
                  (t, n, l, r) =>
                    a(
                      t,
                      (n = n.filter(
                        (e) =>
                          !(null != l && l.includes(e.id)) &&
                          !(null != r && r.includes(e.id))
                      )),
                      e,
                      'center'
                    ),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getLeftHeaderGroups = i(
                  () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.left
                  ],
                  (t, n, l) => {
                    var r;
                    return a(
                      t,
                      null !=
                        (r =
                          null == l
                            ? void 0
                            : l
                                .map((e) => n.find((t) => t.id === e))
                                .filter(Boolean))
                        ? r
                        : [],
                      e,
                      'left'
                    );
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getRightHeaderGroups = i(
                  () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.right
                  ],
                  (t, n, l) => {
                    var r;
                    return a(
                      t,
                      null !=
                        (r =
                          null == l
                            ? void 0
                            : l
                                .map((e) => n.find((t) => t.id === e))
                                .filter(Boolean))
                        ? r
                        : [],
                      e,
                      'right'
                    );
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getFooterGroups = i(
                  () => [e.getHeaderGroups()],
                  (e) => [...e].reverse(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getLeftFooterGroups = i(
                  () => [e.getLeftHeaderGroups()],
                  (e) => [...e].reverse(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getCenterFooterGroups = i(
                  () => [e.getCenterHeaderGroups()],
                  (e) => [...e].reverse(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getRightFooterGroups = i(
                  () => [e.getRightHeaderGroups()],
                  (e) => [...e].reverse(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getFlatHeaders = i(
                  () => [e.getHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getLeftFlatHeaders = i(
                  () => [e.getLeftHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getCenterFlatHeaders = i(
                  () => [e.getCenterHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getRightFlatHeaders = i(
                  () => [e.getRightHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getCenterLeafHeaders = i(
                  () => [e.getCenterFlatHeaders()],
                  (e) =>
                    e.filter((e) => {
                      var t;
                      return !(null != (t = e.subHeaders) && t.length);
                    }),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getLeftLeafHeaders = i(
                  () => [e.getLeftFlatHeaders()],
                  (e) =>
                    e.filter((e) => {
                      var t;
                      return !(null != (t = e.subHeaders) && t.length);
                    }),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getRightLeafHeaders = i(
                  () => [e.getRightFlatHeaders()],
                  (e) =>
                    e.filter((e) => {
                      var t;
                      return !(null != (t = e.subHeaders) && t.length);
                    }),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                )),
                (e.getLeafHeaders = i(
                  () => [
                    e.getLeftHeaderGroups(),
                    e.getCenterHeaderGroups(),
                    e.getRightHeaderGroups()
                  ],
                  (e, t, n) => {
                    var l, r, o, i, u, a;
                    return [
                      ...(null != (l = null == (r = e[0]) ? void 0 : r.headers)
                        ? l
                        : []),
                      ...(null != (o = null == (i = t[0]) ? void 0 : i.headers)
                        ? o
                        : []),
                      ...(null != (u = null == (a = n[0]) ? void 0 : a.headers)
                        ? u
                        : [])
                    ]
                      .map((e) => e.getLeafHeaders())
                      .flat();
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    }
                  }
                ));
            }
          },
          {
            getInitialState: (e) => ({ columnVisibility: {}, ...e }),
            getDefaultOptions: (e) => ({
              onColumnVisibilityChange: r('columnVisibility', e)
            }),
            createColumn: (e, t) => {
              (e.toggleVisibility = (n) => {
                e.getCanHide() &&
                  t.setColumnVisibility((t) => ({
                    ...t,
                    [e.id]: null != n ? n : !e.getIsVisible()
                  }));
              }),
                (e.getIsVisible = () => {
                  var n, l;
                  return (
                    null ==
                      (n =
                        null == (l = t.getState().columnVisibility)
                          ? void 0
                          : l[e.id]) || n
                  );
                }),
                (e.getCanHide = () => {
                  var n, l;
                  return (
                    (null == (n = e.columnDef.enableHiding) || n) &&
                    (null == (l = t.options.enableHiding) || l)
                  );
                }),
                (e.getToggleVisibilityHandler = () => (t) => {
                  null == e.toggleVisibility ||
                    e.toggleVisibility(t.target.checked);
                });
            },
            createRow: (e, t) => {
              (e._getAllVisibleCells = i(
                () => [e.getAllCells(), t.getState().columnVisibility],
                (e) => e.filter((e) => e.column.getIsVisible()),
                {
                  key: 'row._getAllVisibleCells',
                  debug: () => {
                    var e;
                    return null != (e = t.options.debugAll)
                      ? e
                      : t.options.debugRows;
                  }
                }
              )),
                (e.getVisibleCells = i(
                  () => [
                    e.getLeftVisibleCells(),
                    e.getCenterVisibleCells(),
                    e.getRightVisibleCells()
                  ],
                  (e, t, n) => [...e, ...t, ...n],
                  {
                    key: !1,
                    debug: () => {
                      var e;
                      return null != (e = t.options.debugAll)
                        ? e
                        : t.options.debugRows;
                    }
                  }
                ));
            },
            createTable: (e) => {
              let t = (t, n) =>
                i(
                  () => [
                    n(),
                    n()
                      .filter((e) => e.getIsVisible())
                      .map((e) => e.id)
                      .join('_')
                  ],
                  (e) =>
                    e.filter((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible()
                    ),
                  {
                    key: t,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugColumns;
                    }
                  }
                );
              (e.getVisibleFlatColumns = t('getVisibleFlatColumns', () =>
                e.getAllFlatColumns()
              )),
                (e.getVisibleLeafColumns = t('getVisibleLeafColumns', () =>
                  e.getAllLeafColumns()
                )),
                (e.getLeftVisibleLeafColumns = t(
                  'getLeftVisibleLeafColumns',
                  () => e.getLeftLeafColumns()
                )),
                (e.getRightVisibleLeafColumns = t(
                  'getRightVisibleLeafColumns',
                  () => e.getRightLeafColumns()
                )),
                (e.getCenterVisibleLeafColumns = t(
                  'getCenterVisibleLeafColumns',
                  () => e.getCenterLeafColumns()
                )),
                (e.setColumnVisibility = (t) =>
                  null == e.options.onColumnVisibilityChange
                    ? void 0
                    : e.options.onColumnVisibilityChange(t)),
                (e.resetColumnVisibility = (t) => {
                  var n;
                  e.setColumnVisibility(
                    t
                      ? {}
                      : null != (n = e.initialState.columnVisibility)
                      ? n
                      : {}
                  );
                }),
                (e.toggleAllColumnsVisible = (t) => {
                  var n;
                  (t = null != (n = t) ? n : !e.getIsAllColumnsVisible()),
                    e.setColumnVisibility(
                      e
                        .getAllLeafColumns()
                        .reduce(
                          (e, n) => ({
                            ...e,
                            [n.id]:
                              t || !(null != n.getCanHide && n.getCanHide())
                          }),
                          {}
                        )
                    );
                }),
                (e.getIsAllColumnsVisible = () =>
                  !e
                    .getAllLeafColumns()
                    .some(
                      (e) => !(null != e.getIsVisible && e.getIsVisible())
                    )),
                (e.getIsSomeColumnsVisible = () =>
                  e
                    .getAllLeafColumns()
                    .some((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible()
                    )),
                (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                  var n;
                  e.toggleAllColumnsVisible(
                    null == (n = t.target) ? void 0 : n.checked
                  );
                });
            }
          },
          {
            getInitialState: (e) => ({ columnOrder: [], ...e }),
            getDefaultOptions: (e) => ({
              onColumnOrderChange: r('columnOrder', e)
            }),
            createTable: (e) => {
              (e.setColumnOrder = (t) =>
                null == e.options.onColumnOrderChange
                  ? void 0
                  : e.options.onColumnOrderChange(t)),
                (e.resetColumnOrder = (t) => {
                  var n;
                  e.setColumnOrder(
                    t ? [] : null != (n = e.initialState.columnOrder) ? n : []
                  );
                }),
                (e._getOrderColumnsFn = i(
                  () => [
                    e.getState().columnOrder,
                    e.getState().grouping,
                    e.options.groupedColumnMode
                  ],
                  (e, t, n) => (l) => {
                    let r = [];
                    if (null != e && e.length) {
                      let t = [...e],
                        n = [...l];
                      for (; n.length && t.length; ) {
                        let e = t.shift(),
                          l = n.findIndex((t) => t.id === e);
                        l > -1 && r.push(n.splice(l, 1)[0]);
                      }
                      r = [...r, ...n];
                    } else r = l;
                    return (function (e, t, n) {
                      if (!(null != t && t.length) || !n) return e;
                      let l = e.filter((e) => !t.includes(e.id));
                      return 'remove' === n
                        ? l
                        : [
                            ...t
                              .map((t) => e.find((e) => e.id === t))
                              .filter(Boolean),
                            ...l
                          ];
                    })(r, t, n);
                  },
                  { key: !1 }
                ));
            }
          },
          {
            getInitialState: (e) => ({
              columnPinning: P(),
              rowPinning: I(),
              ...e
            }),
            getDefaultOptions: (e) => ({
              onColumnPinningChange: r('columnPinning', e),
              onRowPinningChange: r('rowPinning', e)
            }),
            createColumn: (e, t) => {
              (e.pin = (n) => {
                let l = e
                  .getLeafColumns()
                  .map((e) => e.id)
                  .filter(Boolean);
                t.setColumnPinning((e) => {
                  var t, r, o, i, u, a;
                  return 'right' === n
                    ? {
                        left: (null != (o = null == e ? void 0 : e.left)
                          ? o
                          : []
                        ).filter((e) => !(null != l && l.includes(e))),
                        right: [
                          ...(null != (i = null == e ? void 0 : e.right)
                            ? i
                            : []
                          ).filter((e) => !(null != l && l.includes(e))),
                          ...l
                        ]
                      }
                    : 'left' === n
                    ? {
                        left: [
                          ...(null != (u = null == e ? void 0 : e.left)
                            ? u
                            : []
                          ).filter((e) => !(null != l && l.includes(e))),
                          ...l
                        ],
                        right: (null != (a = null == e ? void 0 : e.right)
                          ? a
                          : []
                        ).filter((e) => !(null != l && l.includes(e)))
                      }
                    : {
                        left: (null != (t = null == e ? void 0 : e.left)
                          ? t
                          : []
                        ).filter((e) => !(null != l && l.includes(e))),
                        right: (null != (r = null == e ? void 0 : e.right)
                          ? r
                          : []
                        ).filter((e) => !(null != l && l.includes(e)))
                      };
                });
              }),
                (e.getCanPin = () =>
                  e.getLeafColumns().some((e) => {
                    var n, l, r;
                    return (
                      (null == (n = e.columnDef.enablePinning) || n) &&
                      (null ==
                        (l =
                          null != (r = t.options.enableColumnPinning)
                            ? r
                            : t.options.enablePinning) ||
                        l)
                    );
                  })),
                (e.getIsPinned = () => {
                  let n = e.getLeafColumns().map((e) => e.id),
                    { left: l, right: r } = t.getState().columnPinning,
                    o = n.some((e) => (null == l ? void 0 : l.includes(e))),
                    i = n.some((e) => (null == r ? void 0 : r.includes(e)));
                  return o ? 'left' : !!i && 'right';
                }),
                (e.getPinnedIndex = () => {
                  var n, l;
                  let r = e.getIsPinned();
                  return r
                    ? null !=
                      (n =
                        null == (l = t.getState().columnPinning) ||
                        null == (l = l[r])
                          ? void 0
                          : l.indexOf(e.id))
                      ? n
                      : -1
                    : 0;
                });
            },
            createRow: (e, t) => {
              (e.pin = (n, l, r) => {
                let o = l
                    ? e.getLeafRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  i = new Set([
                    ...(r
                      ? e.getParentRows().map((e) => {
                          let { id: t } = e;
                          return t;
                        })
                      : []),
                    e.id,
                    ...o
                  ]);
                t.setRowPinning((e) => {
                  var t, l, r, o, u, a;
                  return 'bottom' === n
                    ? {
                        top: (null != (r = null == e ? void 0 : e.top)
                          ? r
                          : []
                        ).filter((e) => !(null != i && i.has(e))),
                        bottom: [
                          ...(null != (o = null == e ? void 0 : e.bottom)
                            ? o
                            : []
                          ).filter((e) => !(null != i && i.has(e))),
                          ...Array.from(i)
                        ]
                      }
                    : 'top' === n
                    ? {
                        top: [
                          ...(null != (u = null == e ? void 0 : e.top)
                            ? u
                            : []
                          ).filter((e) => !(null != i && i.has(e))),
                          ...Array.from(i)
                        ],
                        bottom: (null != (a = null == e ? void 0 : e.bottom)
                          ? a
                          : []
                        ).filter((e) => !(null != i && i.has(e)))
                      }
                    : {
                        top: (null != (t = null == e ? void 0 : e.top)
                          ? t
                          : []
                        ).filter((e) => !(null != i && i.has(e))),
                        bottom: (null != (l = null == e ? void 0 : e.bottom)
                          ? l
                          : []
                        ).filter((e) => !(null != i && i.has(e)))
                      };
                });
              }),
                (e.getCanPin = () => {
                  var n;
                  let { enableRowPinning: l, enablePinning: r } = t.options;
                  return 'function' == typeof l
                    ? l(e)
                    : null == (n = null != l ? l : r) || n;
                }),
                (e.getIsPinned = () => {
                  let n = [e.id],
                    { top: l, bottom: r } = t.getState().rowPinning,
                    o = n.some((e) => (null == l ? void 0 : l.includes(e))),
                    i = n.some((e) => (null == r ? void 0 : r.includes(e)));
                  return o ? 'top' : !!i && 'bottom';
                }),
                (e.getPinnedIndex = () => {
                  var n, l;
                  let r = e.getIsPinned();
                  if (!r) return -1;
                  let o =
                    null == (n = t._getPinnedRows(r))
                      ? void 0
                      : n.map((e) => {
                          let { id: t } = e;
                          return t;
                        });
                  return null != (l = null == o ? void 0 : o.indexOf(e.id))
                    ? l
                    : -1;
                }),
                (e.getCenterVisibleCells = i(
                  () => [
                    e._getAllVisibleCells(),
                    t.getState().columnPinning.left,
                    t.getState().columnPinning.right
                  ],
                  (e, t, n) => {
                    let l = [...(null != t ? t : []), ...(null != n ? n : [])];
                    return e.filter((e) => !l.includes(e.column.id));
                  },
                  {
                    key: !1,
                    debug: () => {
                      var e;
                      return null != (e = t.options.debugAll)
                        ? e
                        : t.options.debugRows;
                    }
                  }
                )),
                (e.getLeftVisibleCells = i(
                  () => [
                    e._getAllVisibleCells(),
                    t.getState().columnPinning.left,
                    ,
                  ],
                  (e, t) =>
                    (null != t ? t : [])
                      .map((t) => e.find((e) => e.column.id === t))
                      .filter(Boolean)
                      .map((e) => ({ ...e, position: 'left' })),
                  {
                    key: !1,
                    debug: () => {
                      var e;
                      return null != (e = t.options.debugAll)
                        ? e
                        : t.options.debugRows;
                    }
                  }
                )),
                (e.getRightVisibleCells = i(
                  () => [
                    e._getAllVisibleCells(),
                    t.getState().columnPinning.right
                  ],
                  (e, t) =>
                    (null != t ? t : [])
                      .map((t) => e.find((e) => e.column.id === t))
                      .filter(Boolean)
                      .map((e) => ({ ...e, position: 'right' })),
                  {
                    key: !1,
                    debug: () => {
                      var e;
                      return null != (e = t.options.debugAll)
                        ? e
                        : t.options.debugRows;
                    }
                  }
                ));
            },
            createTable: (e) => {
              (e.setColumnPinning = (t) =>
                null == e.options.onColumnPinningChange
                  ? void 0
                  : e.options.onColumnPinningChange(t)),
                (e.resetColumnPinning = (t) => {
                  var n, l;
                  return e.setColumnPinning(
                    t
                      ? P()
                      : null !=
                        (n =
                          null == (l = e.initialState)
                            ? void 0
                            : l.columnPinning)
                      ? n
                      : P()
                  );
                }),
                (e.getIsSomeColumnsPinned = (t) => {
                  var n, l, r;
                  let o = e.getState().columnPinning;
                  return t
                    ? !!(null == (n = o[t]) ? void 0 : n.length)
                    : !!(
                        (null == (l = o.left) ? void 0 : l.length) ||
                        (null == (r = o.right) ? void 0 : r.length)
                      );
                }),
                (e.getLeftLeafColumns = i(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.left
                  ],
                  (e, t) =>
                    (null != t ? t : [])
                      .map((t) => e.find((e) => e.id === t))
                      .filter(Boolean),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugColumns;
                    }
                  }
                )),
                (e.getRightLeafColumns = i(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.right
                  ],
                  (e, t) =>
                    (null != t ? t : [])
                      .map((t) => e.find((e) => e.id === t))
                      .filter(Boolean),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugColumns;
                    }
                  }
                )),
                (e.getCenterLeafColumns = i(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.left,
                    e.getState().columnPinning.right
                  ],
                  (e, t, n) => {
                    let l = [...(null != t ? t : []), ...(null != n ? n : [])];
                    return e.filter((e) => !l.includes(e.id));
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugColumns;
                    }
                  }
                )),
                (e.setRowPinning = (t) =>
                  null == e.options.onRowPinningChange
                    ? void 0
                    : e.options.onRowPinningChange(t)),
                (e.resetRowPinning = (t) => {
                  var n, l;
                  return e.setRowPinning(
                    t
                      ? I()
                      : null !=
                        (n =
                          null == (l = e.initialState) ? void 0 : l.rowPinning)
                      ? n
                      : I()
                  );
                }),
                (e.getIsSomeRowsPinned = (t) => {
                  var n, l, r;
                  let o = e.getState().rowPinning;
                  return t
                    ? !!(null == (n = o[t]) ? void 0 : n.length)
                    : !!(
                        (null == (l = o.top) ? void 0 : l.length) ||
                        (null == (r = o.bottom) ? void 0 : r.length)
                      );
                }),
                (e._getPinnedRows = (t) =>
                  i(
                    () => [e.getRowModel().rows, e.getState().rowPinning[t]],
                    (n, l) => {
                      var r;
                      return (
                        null == (r = e.options.keepPinnedRows) || r
                          ? (null != l ? l : []).map((t) => {
                              let n = e.getRow(t, !0);
                              return n.getIsAllParentsExpanded() ? n : null;
                            })
                          : (null != l ? l : []).map((e) =>
                              n.find((t) => t.id === e)
                            )
                      )
                        .filter(Boolean)
                        .map((e) => ({ ...e, position: t }));
                    },
                    {
                      key: !1,
                      debug: () => {
                        var t;
                        return null != (t = e.options.debugAll)
                          ? t
                          : e.options.debugRows;
                      }
                    }
                  )()),
                (e.getTopRows = () => e._getPinnedRows('top')),
                (e.getBottomRows = () => e._getPinnedRows('bottom')),
                (e.getCenterRows = i(
                  () => [
                    e.getRowModel().rows,
                    e.getState().rowPinning.top,
                    e.getState().rowPinning.bottom
                  ],
                  (e, t, n) => {
                    let l = new Set([
                      ...(null != t ? t : []),
                      ...(null != n ? n : [])
                    ]);
                    return e.filter((e) => !l.has(e.id));
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugRows;
                    }
                  }
                ));
            }
          },
          {
            getDefaultColumnDef: () => ({ filterFn: 'auto' }),
            getInitialState: (e) => ({
              columnFilters: [],
              globalFilter: void 0,
              ...e
            }),
            getDefaultOptions: (e) => ({
              onColumnFiltersChange: r('columnFilters', e),
              onGlobalFilterChange: r('globalFilter', e),
              filterFromLeafRows: !1,
              maxLeafRowFilterDepth: 100,
              globalFilterFn: 'auto',
              getColumnCanGlobalFilter: (t) => {
                var n;
                let l =
                  null == (n = e.getCoreRowModel().flatRows[0]) ||
                  null == (n = n._getAllCellsByColumnId()[t.id])
                    ? void 0
                    : n.getValue();
                return 'string' == typeof l || 'number' == typeof l;
              }
            }),
            createColumn: (e, t) => {
              (e.getAutoFilterFn = () => {
                let n = t.getCoreRowModel().flatRows[0],
                  l = null == n ? void 0 : n.getValue(e.id);
                return 'string' == typeof l
                  ? R.includesString
                  : 'number' == typeof l
                  ? R.inNumberRange
                  : 'boolean' == typeof l ||
                    (null !== l && 'object' == typeof l)
                  ? R.equals
                  : Array.isArray(l)
                  ? R.arrIncludes
                  : R.weakEquals;
              }),
                (e.getFilterFn = () => {
                  var n, l;
                  return o(e.columnDef.filterFn)
                    ? e.columnDef.filterFn
                    : 'auto' === e.columnDef.filterFn
                    ? e.getAutoFilterFn()
                    : null !=
                      (n =
                        null == (l = t.options.filterFns)
                          ? void 0
                          : l[e.columnDef.filterFn])
                    ? n
                    : R[e.columnDef.filterFn];
                }),
                (e.getCanFilter = () => {
                  var n, l, r;
                  return (
                    (null == (n = e.columnDef.enableColumnFilter) || n) &&
                    (null == (l = t.options.enableColumnFilters) || l) &&
                    (null == (r = t.options.enableFilters) || r) &&
                    !!e.accessorFn
                  );
                }),
                (e.getCanGlobalFilter = () => {
                  var n, l, r, o;
                  return (
                    (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                    (null == (l = t.options.enableGlobalFilter) || l) &&
                    (null == (r = t.options.enableFilters) || r) &&
                    (null ==
                      (o =
                        null == t.options.getColumnCanGlobalFilter
                          ? void 0
                          : t.options.getColumnCanGlobalFilter(e)) ||
                      o) &&
                    !!e.accessorFn
                  );
                }),
                (e.getIsFiltered = () => e.getFilterIndex() > -1),
                (e.getFilterValue = () => {
                  var n;
                  return null == (n = t.getState().columnFilters) ||
                    null == (n = n.find((t) => t.id === e.id))
                    ? void 0
                    : n.value;
                }),
                (e.getFilterIndex = () => {
                  var n, l;
                  return null !=
                    (n =
                      null == (l = t.getState().columnFilters)
                        ? void 0
                        : l.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
                }),
                (e.setFilterValue = (n) => {
                  t.setColumnFilters((t) => {
                    var r, o;
                    let i = e.getFilterFn(),
                      u = null == t ? void 0 : t.find((t) => t.id === e.id),
                      a = l(n, u ? u.value : void 0);
                    if (E(i, a, e))
                      return null !=
                        (r =
                          null == t ? void 0 : t.filter((t) => t.id !== e.id))
                        ? r
                        : [];
                    let s = { id: e.id, value: a };
                    return u
                      ? null !=
                        (o =
                          null == t
                            ? void 0
                            : t.map((t) => (t.id === e.id ? s : t)))
                        ? o
                        : []
                      : null != t && t.length
                      ? [...t, s]
                      : [s];
                  });
                }),
                (e._getFacetedRowModel =
                  t.options.getFacetedRowModel &&
                  t.options.getFacetedRowModel(t, e.id)),
                (e.getFacetedRowModel = () =>
                  e._getFacetedRowModel
                    ? e._getFacetedRowModel()
                    : t.getPreFilteredRowModel()),
                (e._getFacetedUniqueValues =
                  t.options.getFacetedUniqueValues &&
                  t.options.getFacetedUniqueValues(t, e.id)),
                (e.getFacetedUniqueValues = () =>
                  e._getFacetedUniqueValues
                    ? e._getFacetedUniqueValues()
                    : new Map()),
                (e._getFacetedMinMaxValues =
                  t.options.getFacetedMinMaxValues &&
                  t.options.getFacetedMinMaxValues(t, e.id)),
                (e.getFacetedMinMaxValues = () => {
                  if (e._getFacetedMinMaxValues)
                    return e._getFacetedMinMaxValues();
                });
            },
            createRow: (e, t) => {
              (e.columnFilters = {}), (e.columnFiltersMeta = {});
            },
            createTable: (e) => {
              (e.getGlobalAutoFilterFn = () => R.includesString),
                (e.getGlobalFilterFn = () => {
                  var t, n;
                  let { globalFilterFn: l } = e.options;
                  return o(l)
                    ? l
                    : 'auto' === l
                    ? e.getGlobalAutoFilterFn()
                    : null !=
                      (t = null == (n = e.options.filterFns) ? void 0 : n[l])
                    ? t
                    : R[l];
                }),
                (e.setColumnFilters = (t) => {
                  let n = e.getAllLeafColumns();
                  null == e.options.onColumnFiltersChange ||
                    e.options.onColumnFiltersChange((e) => {
                      var r;
                      return null == (r = l(t, e))
                        ? void 0
                        : r.filter((e) => {
                            let t = n.find((t) => t.id === e.id);
                            return !(t && E(t.getFilterFn(), e.value, t));
                          });
                    });
                }),
                (e.setGlobalFilter = (t) => {
                  null == e.options.onGlobalFilterChange ||
                    e.options.onGlobalFilterChange(t);
                }),
                (e.resetGlobalFilter = (t) => {
                  e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
                }),
                (e.resetColumnFilters = (t) => {
                  var n, l;
                  e.setColumnFilters(
                    t
                      ? []
                      : null !=
                        (n =
                          null == (l = e.initialState)
                            ? void 0
                            : l.columnFilters)
                      ? n
                      : []
                  );
                }),
                (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
                (e.getFilteredRowModel = () =>
                  (!e._getFilteredRowModel &&
                    e.options.getFilteredRowModel &&
                    (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
                  e.options.manualFiltering || !e._getFilteredRowModel)
                    ? e.getPreFilteredRowModel()
                    : e._getFilteredRowModel()),
                (e._getGlobalFacetedRowModel =
                  e.options.getFacetedRowModel &&
                  e.options.getFacetedRowModel(e, '__global__')),
                (e.getGlobalFacetedRowModel = () =>
                  e.options.manualFiltering || !e._getGlobalFacetedRowModel
                    ? e.getPreFilteredRowModel()
                    : e._getGlobalFacetedRowModel()),
                (e._getGlobalFacetedUniqueValues =
                  e.options.getFacetedUniqueValues &&
                  e.options.getFacetedUniqueValues(e, '__global__')),
                (e.getGlobalFacetedUniqueValues = () =>
                  e._getGlobalFacetedUniqueValues
                    ? e._getGlobalFacetedUniqueValues()
                    : new Map()),
                (e._getGlobalFacetedMinMaxValues =
                  e.options.getFacetedMinMaxValues &&
                  e.options.getFacetedMinMaxValues(e, '__global__')),
                (e.getGlobalFacetedMinMaxValues = () => {
                  if (e._getGlobalFacetedMinMaxValues)
                    return e._getGlobalFacetedMinMaxValues();
                });
            }
          },
          {
            getInitialState: (e) => ({ sorting: [], ...e }),
            getDefaultColumnDef: () => ({
              sortingFn: 'auto',
              sortUndefined: 1
            }),
            getDefaultOptions: (e) => ({
              onSortingChange: r('sorting', e),
              isMultiSortEvent: (e) => e.shiftKey
            }),
            createColumn: (e, t) => {
              (e.getAutoSortingFn = () => {
                let n = t.getFilteredRowModel().flatRows.slice(10),
                  l = !1;
                for (let t of n) {
                  let n = null == t ? void 0 : t.getValue(e.id);
                  if ('[object Date]' === Object.prototype.toString.call(n))
                    return z.datetime;
                  if ('string' == typeof n && ((l = !0), n.split(O).length > 1))
                    return z.alphanumeric;
                }
                return l ? z.text : z.basic;
              }),
                (e.getAutoSortDir = () => {
                  let n = t.getFilteredRowModel().flatRows[0];
                  return 'string' ==
                    typeof (null == n ? void 0 : n.getValue(e.id))
                    ? 'asc'
                    : 'desc';
                }),
                (e.getSortingFn = () => {
                  var n, l;
                  if (!e) throw Error();
                  return o(e.columnDef.sortingFn)
                    ? e.columnDef.sortingFn
                    : 'auto' === e.columnDef.sortingFn
                    ? e.getAutoSortingFn()
                    : null !=
                      (n =
                        null == (l = t.options.sortingFns)
                          ? void 0
                          : l[e.columnDef.sortingFn])
                    ? n
                    : z[e.columnDef.sortingFn];
                }),
                (e.toggleSorting = (n, l) => {
                  let r = e.getNextSortingOrder(),
                    o = null != n;
                  t.setSorting((i) => {
                    let u;
                    let a = null == i ? void 0 : i.find((t) => t.id === e.id),
                      s =
                        null == i ? void 0 : i.findIndex((t) => t.id === e.id),
                      d = [],
                      g = o ? n : 'desc' === r;
                    if (
                      ('toggle' !=
                        (u =
                          null != i && i.length && e.getCanMultiSort() && l
                            ? a
                              ? 'toggle'
                              : 'add'
                            : null != i && i.length && s !== i.length - 1
                            ? 'replace'
                            : a
                            ? 'toggle'
                            : 'replace') ||
                        o ||
                        r ||
                        (u = 'remove'),
                      'add' === u)
                    ) {
                      var c;
                      (d = [...i, { id: e.id, desc: g }]).splice(
                        0,
                        d.length -
                          (null != (c = t.options.maxMultiSortColCount)
                            ? c
                            : Number.MAX_SAFE_INTEGER)
                      );
                    } else
                      d =
                        'toggle' === u
                          ? i.map((t) =>
                              t.id === e.id ? { ...t, desc: g } : t
                            )
                          : 'remove' === u
                          ? i.filter((t) => t.id !== e.id)
                          : [{ id: e.id, desc: g }];
                    return d;
                  });
                }),
                (e.getFirstSortDir = () => {
                  var n, l;
                  return (
                    null !=
                    (n =
                      null != (l = e.columnDef.sortDescFirst)
                        ? l
                        : t.options.sortDescFirst)
                      ? n
                      : 'desc' === e.getAutoSortDir()
                  )
                    ? 'desc'
                    : 'asc';
                }),
                (e.getNextSortingOrder = (n) => {
                  var l, r;
                  let o = e.getFirstSortDir(),
                    i = e.getIsSorted();
                  return i
                    ? (i === o ||
                        (null != (l = t.options.enableSortingRemoval) && !l) ||
                        (!!n &&
                          null != (r = t.options.enableMultiRemove) &&
                          !r)) &&
                        ('desc' === i ? 'asc' : 'desc')
                    : o;
                }),
                (e.getCanSort = () => {
                  var n, l;
                  return (
                    (null == (n = e.columnDef.enableSorting) || n) &&
                    (null == (l = t.options.enableSorting) || l) &&
                    !!e.accessorFn
                  );
                }),
                (e.getCanMultiSort = () => {
                  var n, l;
                  return null !=
                    (n =
                      null != (l = e.columnDef.enableMultiSort)
                        ? l
                        : t.options.enableMultiSort)
                    ? n
                    : !!e.accessorFn;
                }),
                (e.getIsSorted = () => {
                  var n;
                  let l =
                    null == (n = t.getState().sorting)
                      ? void 0
                      : n.find((t) => t.id === e.id);
                  return !!l && (l.desc ? 'desc' : 'asc');
                }),
                (e.getSortIndex = () => {
                  var n, l;
                  return null !=
                    (n =
                      null == (l = t.getState().sorting)
                        ? void 0
                        : l.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
                }),
                (e.clearSorting = () => {
                  t.setSorting((t) =>
                    null != t && t.length ? t.filter((t) => t.id !== e.id) : []
                  );
                }),
                (e.getToggleSortingHandler = () => {
                  let n = e.getCanSort();
                  return (l) => {
                    n &&
                      (null == l.persist || l.persist(),
                      null == e.toggleSorting ||
                        e.toggleSorting(
                          void 0,
                          !!e.getCanMultiSort() &&
                            (null == t.options.isMultiSortEvent
                              ? void 0
                              : t.options.isMultiSortEvent(l))
                        ));
                  };
                });
            },
            createTable: (e) => {
              (e.setSorting = (t) =>
                null == e.options.onSortingChange
                  ? void 0
                  : e.options.onSortingChange(t)),
                (e.resetSorting = (t) => {
                  var n, l;
                  e.setSorting(
                    t
                      ? []
                      : null !=
                        (n = null == (l = e.initialState) ? void 0 : l.sorting)
                      ? n
                      : []
                  );
                }),
                (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                (e.getSortedRowModel = () =>
                  (!e._getSortedRowModel &&
                    e.options.getSortedRowModel &&
                    (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                  e.options.manualSorting || !e._getSortedRowModel)
                    ? e.getPreSortedRowModel()
                    : e._getSortedRowModel());
            }
          },
          {
            getDefaultColumnDef: () => ({
              aggregatedCell: (e) => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getValue()) || null == n.toString
                      ? void 0
                      : n.toString())
                  ? t
                  : null;
              },
              aggregationFn: 'auto'
            }),
            getInitialState: (e) => ({ grouping: [], ...e }),
            getDefaultOptions: (e) => ({
              onGroupingChange: r('grouping', e),
              groupedColumnMode: 'reorder'
            }),
            createColumn: (e, t) => {
              (e.toggleGrouping = () => {
                t.setGrouping((t) =>
                  null != t && t.includes(e.id)
                    ? t.filter((t) => t !== e.id)
                    : [...(null != t ? t : []), e.id]
                );
              }),
                (e.getCanGroup = () => {
                  var n, l, r, o;
                  return null !=
                    (n =
                      null ==
                        (l =
                          null !=
                          (r = null == (o = e.columnDef.enableGrouping) || o)
                            ? r
                            : t.options.enableGrouping) || l)
                    ? n
                    : !!e.accessorFn;
                }),
                (e.getIsGrouped = () => {
                  var n;
                  return null == (n = t.getState().grouping)
                    ? void 0
                    : n.includes(e.id);
                }),
                (e.getGroupedIndex = () => {
                  var n;
                  return null == (n = t.getState().grouping)
                    ? void 0
                    : n.indexOf(e.id);
                }),
                (e.getToggleGroupingHandler = () => {
                  let t = e.getCanGroup();
                  return () => {
                    t && e.toggleGrouping();
                  };
                }),
                (e.getAutoAggregationFn = () => {
                  let n = t.getCoreRowModel().flatRows[0],
                    l = null == n ? void 0 : n.getValue(e.id);
                  return 'number' == typeof l
                    ? F.sum
                    : '[object Date]' === Object.prototype.toString.call(l)
                    ? F.extent
                    : void 0;
                }),
                (e.getAggregationFn = () => {
                  var n, l;
                  if (!e) throw Error();
                  return o(e.columnDef.aggregationFn)
                    ? e.columnDef.aggregationFn
                    : 'auto' === e.columnDef.aggregationFn
                    ? e.getAutoAggregationFn()
                    : null !=
                      (n =
                        null == (l = t.options.aggregationFns)
                          ? void 0
                          : l[e.columnDef.aggregationFn])
                    ? n
                    : F[e.columnDef.aggregationFn];
                });
            },
            createTable: (e) => {
              (e.setGrouping = (t) =>
                null == e.options.onGroupingChange
                  ? void 0
                  : e.options.onGroupingChange(t)),
                (e.resetGrouping = (t) => {
                  var n, l;
                  e.setGrouping(
                    t
                      ? []
                      : null !=
                        (n = null == (l = e.initialState) ? void 0 : l.grouping)
                      ? n
                      : []
                  );
                }),
                (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
                (e.getGroupedRowModel = () =>
                  (!e._getGroupedRowModel &&
                    e.options.getGroupedRowModel &&
                    (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                  e.options.manualGrouping || !e._getGroupedRowModel)
                    ? e.getPreGroupedRowModel()
                    : e._getGroupedRowModel());
            },
            createRow: (e, t) => {
              (e.getIsGrouped = () => !!e.groupingColumnId),
                (e.getGroupingValue = (n) => {
                  if (e._groupingValuesCache.hasOwnProperty(n))
                    return e._groupingValuesCache[n];
                  let l = t.getColumn(n);
                  return null != l && l.columnDef.getGroupingValue
                    ? ((e._groupingValuesCache[n] =
                        l.columnDef.getGroupingValue(e.original)),
                      e._groupingValuesCache[n])
                    : e.getValue(n);
                }),
                (e._groupingValuesCache = {});
            },
            createCell: (e, t, n, l) => {
              (e.getIsGrouped = () =>
                t.getIsGrouped() && t.id === n.groupingColumnId),
                (e.getIsPlaceholder = () =>
                  !e.getIsGrouped() && t.getIsGrouped()),
                (e.getIsAggregated = () => {
                  var t;
                  return (
                    !e.getIsGrouped() &&
                    !e.getIsPlaceholder() &&
                    !!(null != (t = n.subRows) && t.length)
                  );
                });
            }
          },
          {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({
              onExpandedChange: r('expanded', e),
              paginateExpandedRows: !0
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetExpanded = () => {
                var l, r;
                if (!t) {
                  e._queue(() => {
                    t = !0;
                  });
                  return;
                }
                if (
                  null !=
                  (l =
                    null != (r = e.options.autoResetAll)
                      ? r
                      : e.options.autoResetExpanded)
                    ? l
                    : !e.options.manualExpanding
                ) {
                  if (n) return;
                  (n = !0),
                    e._queue(() => {
                      e.resetExpanded(), (n = !1);
                    });
                }
              }),
                (e.setExpanded = (t) =>
                  null == e.options.onExpandedChange
                    ? void 0
                    : e.options.onExpandedChange(t)),
                (e.toggleAllRowsExpanded = (t) => {
                  (null != t ? t : !e.getIsAllRowsExpanded())
                    ? e.setExpanded(!0)
                    : e.setExpanded({});
                }),
                (e.resetExpanded = (t) => {
                  var n, l;
                  e.setExpanded(
                    t
                      ? {}
                      : null !=
                        (n = null == (l = e.initialState) ? void 0 : l.expanded)
                      ? n
                      : {}
                  );
                }),
                (e.getCanSomeRowsExpand = () =>
                  e
                    .getPrePaginationRowModel()
                    .flatRows.some((e) => e.getCanExpand())),
                (e.getToggleAllRowsExpandedHandler = () => (t) => {
                  null == t.persist || t.persist(), e.toggleAllRowsExpanded();
                }),
                (e.getIsSomeRowsExpanded = () => {
                  let t = e.getState().expanded;
                  return !0 === t || Object.values(t).some(Boolean);
                }),
                (e.getIsAllRowsExpanded = () => {
                  let t = e.getState().expanded;
                  return 'boolean' == typeof t
                    ? !0 === t
                    : !(
                        !Object.keys(t).length ||
                        e.getRowModel().flatRows.some((e) => !e.getIsExpanded())
                      );
                }),
                (e.getExpandedDepth = () => {
                  let t = 0;
                  return (
                    (!0 === e.getState().expanded
                      ? Object.keys(e.getRowModel().rowsById)
                      : Object.keys(e.getState().expanded)
                    ).forEach((e) => {
                      let n = e.split('.');
                      t = Math.max(t, n.length);
                    }),
                    t
                  );
                }),
                (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                (e.getExpandedRowModel = () =>
                  (!e._getExpandedRowModel &&
                    e.options.getExpandedRowModel &&
                    (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                  e.options.manualExpanding || !e._getExpandedRowModel)
                    ? e.getPreExpandedRowModel()
                    : e._getExpandedRowModel());
            },
            createRow: (e, t) => {
              (e.toggleExpanded = (n) => {
                t.setExpanded((l) => {
                  var r;
                  let o = !0 === l || !!(null != l && l[e.id]),
                    i = {};
                  if (
                    (!0 === l
                      ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                          i[e] = !0;
                        })
                      : (i = l),
                    (n = null != (r = n) ? r : !o),
                    !o && n)
                  )
                    return { ...i, [e.id]: !0 };
                  if (o && !n) {
                    let { [e.id]: t, ...n } = i;
                    return n;
                  }
                  return l;
                });
              }),
                (e.getIsExpanded = () => {
                  var n;
                  let l = t.getState().expanded;
                  return !!(null !=
                  (n =
                    null == t.options.getIsRowExpanded
                      ? void 0
                      : t.options.getIsRowExpanded(e))
                    ? n
                    : !0 === l || (null == l ? void 0 : l[e.id]));
                }),
                (e.getCanExpand = () => {
                  var n, l, r;
                  return null !=
                    (n =
                      null == t.options.getRowCanExpand
                        ? void 0
                        : t.options.getRowCanExpand(e))
                    ? n
                    : (null == (l = t.options.enableExpanding) || l) &&
                        !!(null != (r = e.subRows) && r.length);
                }),
                (e.getIsAllParentsExpanded = () => {
                  let n = !0,
                    l = e;
                  for (; n && l.parentId; )
                    n = (l = t.getRow(l.parentId, !0)).getIsExpanded();
                  return n;
                }),
                (e.getToggleExpandedHandler = () => {
                  let t = e.getCanExpand();
                  return () => {
                    t && e.toggleExpanded();
                  };
                });
            }
          },
          {
            getInitialState: (e) => ({
              ...e,
              pagination: { ...M(), ...(null == e ? void 0 : e.pagination) }
            }),
            getDefaultOptions: (e) => ({
              onPaginationChange: r('pagination', e)
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetPageIndex = () => {
                var l, r;
                if (!t) {
                  e._queue(() => {
                    t = !0;
                  });
                  return;
                }
                if (
                  null !=
                  (l =
                    null != (r = e.options.autoResetAll)
                      ? r
                      : e.options.autoResetPageIndex)
                    ? l
                    : !e.options.manualPagination
                ) {
                  if (n) return;
                  (n = !0),
                    e._queue(() => {
                      e.resetPageIndex(), (n = !1);
                    });
                }
              }),
                (e.setPagination = (t) =>
                  null == e.options.onPaginationChange
                    ? void 0
                    : e.options.onPaginationChange((e) => l(t, e))),
                (e.resetPagination = (t) => {
                  var n;
                  e.setPagination(
                    t ? M() : null != (n = e.initialState.pagination) ? n : M()
                  );
                }),
                (e.setPageIndex = (t) => {
                  e.setPagination((n) => {
                    let r = l(t, n.pageIndex);
                    return (
                      (r = Math.max(
                        0,
                        Math.min(
                          r,
                          void 0 === e.options.pageCount ||
                            -1 === e.options.pageCount
                            ? Number.MAX_SAFE_INTEGER
                            : e.options.pageCount - 1
                        )
                      )),
                      { ...n, pageIndex: r }
                    );
                  });
                }),
                (e.resetPageIndex = (t) => {
                  var n, l;
                  e.setPageIndex(
                    t
                      ? 0
                      : null !=
                        (n =
                          null == (l = e.initialState) ||
                          null == (l = l.pagination)
                            ? void 0
                            : l.pageIndex)
                      ? n
                      : 0
                  );
                }),
                (e.resetPageSize = (t) => {
                  var n, l;
                  e.setPageSize(
                    t
                      ? 10
                      : null !=
                        (n =
                          null == (l = e.initialState) ||
                          null == (l = l.pagination)
                            ? void 0
                            : l.pageSize)
                      ? n
                      : 10
                  );
                }),
                (e.setPageSize = (t) => {
                  e.setPagination((e) => {
                    let n = Math.max(1, l(t, e.pageSize)),
                      r = e.pageSize * e.pageIndex;
                    return { ...e, pageIndex: Math.floor(r / n), pageSize: n };
                  });
                }),
                (e.setPageCount = (t) =>
                  e.setPagination((n) => {
                    var r;
                    let o = l(t, null != (r = e.options.pageCount) ? r : -1);
                    return (
                      'number' == typeof o && (o = Math.max(-1, o)),
                      { ...n, pageCount: o }
                    );
                  })),
                (e.getPageOptions = i(
                  () => [e.getPageCount()],
                  (e) => {
                    let t = [];
                    return (
                      e &&
                        e > 0 &&
                        (t = [...Array(e)].fill(null).map((e, t) => t)),
                      t
                    );
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugTable;
                    }
                  }
                )),
                (e.getCanPreviousPage = () =>
                  e.getState().pagination.pageIndex > 0),
                (e.getCanNextPage = () => {
                  let { pageIndex: t } = e.getState().pagination,
                    n = e.getPageCount();
                  return -1 === n || (0 !== n && t < n - 1);
                }),
                (e.previousPage = () => e.setPageIndex((e) => e - 1)),
                (e.nextPage = () => e.setPageIndex((e) => e + 1)),
                (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                (e.getPaginationRowModel = () =>
                  (!e._getPaginationRowModel &&
                    e.options.getPaginationRowModel &&
                    (e._getPaginationRowModel =
                      e.options.getPaginationRowModel(e)),
                  e.options.manualPagination || !e._getPaginationRowModel)
                    ? e.getPrePaginationRowModel()
                    : e._getPaginationRowModel()),
                (e.getPageCount = () => {
                  var t;
                  return null != (t = e.options.pageCount)
                    ? t
                    : Math.ceil(
                        e.getPrePaginationRowModel().rows.length /
                          e.getState().pagination.pageSize
                      );
                });
            }
          },
          {
            getInitialState: (e) => ({ rowSelection: {}, ...e }),
            getDefaultOptions: (e) => ({
              onRowSelectionChange: r('rowSelection', e),
              enableRowSelection: !0,
              enableMultiRowSelection: !0,
              enableSubRowSelection: !0
            }),
            createTable: (e) => {
              (e.setRowSelection = (t) =>
                null == e.options.onRowSelectionChange
                  ? void 0
                  : e.options.onRowSelectionChange(t)),
                (e.resetRowSelection = (t) => {
                  var n;
                  return e.setRowSelection(
                    t ? {} : null != (n = e.initialState.rowSelection) ? n : {}
                  );
                }),
                (e.toggleAllRowsSelected = (t) => {
                  e.setRowSelection((n) => {
                    t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                    let l = { ...n },
                      r = e.getPreGroupedRowModel().flatRows;
                    return (
                      t
                        ? r.forEach((e) => {
                            e.getCanSelect() && (l[e.id] = !0);
                          })
                        : r.forEach((e) => {
                            delete l[e.id];
                          }),
                      l
                    );
                  });
                }),
                (e.toggleAllPageRowsSelected = (t) =>
                  e.setRowSelection((n) => {
                    let l = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                      r = { ...n };
                    return (
                      e.getRowModel().rows.forEach((t) => {
                        x(r, t.id, l, !0, e);
                      }),
                      r
                    );
                  })),
                (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
                (e.getSelectedRowModel = i(
                  () => [e.getState().rowSelection, e.getCoreRowModel()],
                  (t, n) =>
                    Object.keys(t).length
                      ? A(e, n)
                      : { rows: [], flatRows: [], rowsById: {} },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugTable;
                    }
                  }
                )),
                (e.getFilteredSelectedRowModel = i(
                  () => [e.getState().rowSelection, e.getFilteredRowModel()],
                  (t, n) =>
                    Object.keys(t).length
                      ? A(e, n)
                      : { rows: [], flatRows: [], rowsById: {} },
                  {
                    key: 'getFilteredSelectedRowModel',
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugTable;
                    }
                  }
                )),
                (e.getGroupedSelectedRowModel = i(
                  () => [e.getState().rowSelection, e.getSortedRowModel()],
                  (t, n) =>
                    Object.keys(t).length
                      ? A(e, n)
                      : { rows: [], flatRows: [], rowsById: {} },
                  {
                    key: 'getGroupedSelectedRowModel',
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugTable;
                    }
                  }
                )),
                (e.getIsAllRowsSelected = () => {
                  let t = e.getFilteredRowModel().flatRows,
                    { rowSelection: n } = e.getState(),
                    l = !!(t.length && Object.keys(n).length);
                  return (
                    l &&
                      t.some((e) => e.getCanSelect() && !n[e.id]) &&
                      (l = !1),
                    l
                  );
                }),
                (e.getIsAllPageRowsSelected = () => {
                  let t = e
                      .getPaginationRowModel()
                      .flatRows.filter((e) => e.getCanSelect()),
                    { rowSelection: n } = e.getState(),
                    l = !!t.length;
                  return l && t.some((e) => !n[e.id]) && (l = !1), l;
                }),
                (e.getIsSomeRowsSelected = () => {
                  var t;
                  let n = Object.keys(
                    null != (t = e.getState().rowSelection) ? t : {}
                  ).length;
                  return n > 0 && n < e.getFilteredRowModel().flatRows.length;
                }),
                (e.getIsSomePageRowsSelected = () => {
                  let t = e.getPaginationRowModel().flatRows;
                  return (
                    !e.getIsAllPageRowsSelected() &&
                    t
                      .filter((e) => e.getCanSelect())
                      .some((e) => e.getIsSelected() || e.getIsSomeSelected())
                  );
                }),
                (e.getToggleAllRowsSelectedHandler = () => (t) => {
                  e.toggleAllRowsSelected(t.target.checked);
                }),
                (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                  e.toggleAllPageRowsSelected(t.target.checked);
                });
            },
            createRow: (e, t) => {
              (e.toggleSelected = (n, l) => {
                let r = e.getIsSelected();
                t.setRowSelection((o) => {
                  var i;
                  if (
                    ((n = void 0 !== n ? n : !r), e.getCanSelect() && r === n)
                  )
                    return o;
                  let u = { ...o };
                  return (
                    x(
                      u,
                      e.id,
                      n,
                      null == (i = null == l ? void 0 : l.selectChildren) || i,
                      t
                    ),
                    u
                  );
                });
              }),
                (e.getIsSelected = () => {
                  let { rowSelection: n } = t.getState();
                  return V(e, n);
                }),
                (e.getIsSomeSelected = () => {
                  let { rowSelection: n } = t.getState();
                  return 'some' === _(e, n);
                }),
                (e.getIsAllSubRowsSelected = () => {
                  let { rowSelection: n } = t.getState();
                  return 'all' === _(e, n);
                }),
                (e.getCanSelect = () => {
                  var n;
                  return 'function' == typeof t.options.enableRowSelection
                    ? t.options.enableRowSelection(e)
                    : null == (n = t.options.enableRowSelection) || n;
                }),
                (e.getCanSelectSubRows = () => {
                  var n;
                  return 'function' == typeof t.options.enableSubRowSelection
                    ? t.options.enableSubRowSelection(e)
                    : null == (n = t.options.enableSubRowSelection) || n;
                }),
                (e.getCanMultiSelect = () => {
                  var n;
                  return 'function' == typeof t.options.enableMultiRowSelection
                    ? t.options.enableMultiRowSelection(e)
                    : null == (n = t.options.enableMultiRowSelection) || n;
                }),
                (e.getToggleSelectedHandler = () => {
                  let t = e.getCanSelect();
                  return (n) => {
                    var l;
                    t &&
                      e.toggleSelected(
                        null == (l = n.target) ? void 0 : l.checked
                      );
                  };
                });
            }
          },
          {
            getDefaultColumnDef: () => s,
            getInitialState: (e) => ({
              columnSizing: {},
              columnSizingInfo: d(),
              ...e
            }),
            getDefaultOptions: (e) => ({
              columnResizeMode: 'onEnd',
              onColumnSizingChange: r('columnSizing', e),
              onColumnSizingInfoChange: r('columnSizingInfo', e)
            }),
            createColumn: (e, t) => {
              (e.getSize = () => {
                var n, l, r;
                let o = t.getState().columnSizing[e.id];
                return Math.min(
                  Math.max(
                    null != (n = e.columnDef.minSize) ? n : s.minSize,
                    null != (l = null != o ? o : e.columnDef.size) ? l : s.size
                  ),
                  null != (r = e.columnDef.maxSize) ? r : s.maxSize
                );
              }),
                (e.getStart = (n) => {
                  let l = n
                      ? 'left' === n
                        ? t.getLeftVisibleLeafColumns()
                        : t.getRightVisibleLeafColumns()
                      : t.getVisibleLeafColumns(),
                    r = l.findIndex((t) => t.id === e.id);
                  if (r > 0) {
                    let e = l[r - 1];
                    return e.getStart(n) + e.getSize();
                  }
                  return 0;
                }),
                (e.resetSize = () => {
                  t.setColumnSizing((t) => {
                    let { [e.id]: n, ...l } = t;
                    return l;
                  });
                }),
                (e.getCanResize = () => {
                  var n, l;
                  return (
                    (null == (n = e.columnDef.enableResizing) || n) &&
                    (null == (l = t.options.enableColumnResizing) || l)
                  );
                }),
                (e.getIsResizing = () =>
                  t.getState().columnSizingInfo.isResizingColumn === e.id);
            },
            createHeader: (e, t) => {
              (e.getSize = () => {
                let t = 0,
                  n = (e) => {
                    if (e.subHeaders.length) e.subHeaders.forEach(n);
                    else {
                      var l;
                      t += null != (l = e.column.getSize()) ? l : 0;
                    }
                  };
                return n(e), t;
              }),
                (e.getStart = () => {
                  if (e.index > 0) {
                    let t = e.headerGroup.headers[e.index - 1];
                    return t.getStart() + t.getSize();
                  }
                  return 0;
                }),
                (e.getResizeHandler = () => {
                  let n = t.getColumn(e.column.id),
                    l = null == n ? void 0 : n.getCanResize();
                  return (r) => {
                    if (
                      !n ||
                      !l ||
                      (null == r.persist || r.persist(),
                      c(r) && r.touches && r.touches.length > 1)
                    )
                      return;
                    let o = e.getSize(),
                      i = e
                        ? e
                            .getLeafHeaders()
                            .map((e) => [e.column.id, e.column.getSize()])
                        : [[n.id, n.getSize()]],
                      u = c(r) ? Math.round(r.touches[0].clientX) : r.clientX,
                      a = {},
                      s = (e, n) => {
                        'number' == typeof n &&
                          (t.setColumnSizingInfo((e) => {
                            var t, l;
                            let r =
                                n -
                                (null !=
                                (t = null == e ? void 0 : e.startOffset)
                                  ? t
                                  : 0),
                              o = Math.max(
                                r /
                                  (null !=
                                  (l = null == e ? void 0 : e.startSize)
                                    ? l
                                    : 0),
                                -0.999999
                              );
                            return (
                              e.columnSizingStart.forEach((e) => {
                                let [t, n] = e;
                                a[t] =
                                  Math.round(100 * Math.max(n + n * o, 0)) /
                                  100;
                              }),
                              { ...e, deltaOffset: r, deltaPercentage: o }
                            );
                          }),
                          ('onChange' === t.options.columnResizeMode ||
                            'end' === e) &&
                            t.setColumnSizing((e) => ({ ...e, ...a })));
                      },
                      d = (e) => s('move', e),
                      f = (e) => {
                        s('end', e),
                          t.setColumnSizingInfo((e) => ({
                            ...e,
                            isResizingColumn: !1,
                            startOffset: null,
                            startSize: null,
                            deltaOffset: null,
                            deltaPercentage: null,
                            columnSizingStart: []
                          }));
                      },
                      p = {
                        moveHandler: (e) => d(e.clientX),
                        upHandler: (e) => {
                          document.removeEventListener(
                            'mousemove',
                            p.moveHandler
                          ),
                            document.removeEventListener(
                              'mouseup',
                              p.upHandler
                            ),
                            f(e.clientX);
                        }
                      },
                      m = {
                        moveHandler: (e) => (
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          d(e.touches[0].clientX),
                          !1
                        ),
                        upHandler: (e) => {
                          var t;
                          document.removeEventListener(
                            'touchmove',
                            m.moveHandler
                          ),
                            document.removeEventListener(
                              'touchend',
                              m.upHandler
                            ),
                            e.cancelable &&
                              (e.preventDefault(), e.stopPropagation()),
                            f(null == (t = e.touches[0]) ? void 0 : t.clientX);
                        }
                      },
                      v = !!(function () {
                        if ('boolean' == typeof g) return g;
                        let e = !1;
                        try {
                          let t = () => {};
                          window.addEventListener('test', t, {
                            get passive() {
                              return (e = !0), !1;
                            }
                          }),
                            window.removeEventListener('test', t);
                        } catch (t) {
                          e = !1;
                        }
                        return (g = e);
                      })() && { passive: !1 };
                    c(r)
                      ? (document.addEventListener(
                          'touchmove',
                          m.moveHandler,
                          v
                        ),
                        document.addEventListener('touchend', m.upHandler, v))
                      : (document.addEventListener(
                          'mousemove',
                          p.moveHandler,
                          v
                        ),
                        document.addEventListener('mouseup', p.upHandler, v)),
                      t.setColumnSizingInfo((e) => ({
                        ...e,
                        startOffset: u,
                        startSize: o,
                        deltaOffset: 0,
                        deltaPercentage: 0,
                        columnSizingStart: i,
                        isResizingColumn: n.id
                      }));
                  };
                });
            },
            createTable: (e) => {
              (e.setColumnSizing = (t) =>
                null == e.options.onColumnSizingChange
                  ? void 0
                  : e.options.onColumnSizingChange(t)),
                (e.setColumnSizingInfo = (t) =>
                  null == e.options.onColumnSizingInfoChange
                    ? void 0
                    : e.options.onColumnSizingInfoChange(t)),
                (e.resetColumnSizing = (t) => {
                  var n;
                  e.setColumnSizing(
                    t ? {} : null != (n = e.initialState.columnSizing) ? n : {}
                  );
                }),
                (e.resetHeaderSizeInfo = (t) => {
                  var n;
                  e.setColumnSizingInfo(
                    t
                      ? d()
                      : null != (n = e.initialState.columnSizingInfo)
                      ? n
                      : d()
                  );
                }),
                (e.getTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                }),
                (e.getLeftTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getLeftHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                }),
                (e.getCenterTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getCenterHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                }),
                (e.getRightTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getRightHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                });
            }
          }
        ];
      function G(e) {
        var t;
        (e.debugAll || e.debugTable) &&
          console.info('Creating Table Instance...');
        let n = { _features: H },
          r = n._features.reduce(
            (e, t) =>
              Object.assign(
                e,
                null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(n)
              ),
            {}
          ),
          o = (e) =>
            n.options.mergeOptions
              ? n.options.mergeOptions(r, e)
              : { ...r, ...e },
          u = { ...(null != (t = e.initialState) ? t : {}) };
        n._features.forEach((e) => {
          var t;
          u =
            null !=
            (t = null == e.getInitialState ? void 0 : e.getInitialState(u))
              ? t
              : u;
        });
        let a = [],
          s = !1,
          d = {
            _features: H,
            options: { ...r, ...e },
            initialState: u,
            _queue: (e) => {
              a.push(e),
                s ||
                  ((s = !0),
                  Promise.resolve()
                    .then(() => {
                      for (; a.length; ) a.shift()();
                      s = !1;
                    })
                    .catch((e) =>
                      setTimeout(() => {
                        throw e;
                      })
                    ));
            },
            reset: () => {
              n.setState(n.initialState);
            },
            setOptions: (e) => {
              let t = l(e, n.options);
              n.options = o(t);
            },
            getState: () => n.options.state,
            setState: (e) => {
              null == n.options.onStateChange || n.options.onStateChange(e);
            },
            _getRowId: (e, t, l) => {
              var r;
              return null !=
                (r =
                  null == n.options.getRowId
                    ? void 0
                    : n.options.getRowId(e, t, l))
                ? r
                : `${l ? [l.id, t].join('.') : t}`;
            },
            getCoreRowModel: () => (
              n._getCoreRowModel ||
                (n._getCoreRowModel = n.options.getCoreRowModel(n)),
              n._getCoreRowModel()
            ),
            getRowModel: () => n.getPaginationRowModel(),
            getRow: (e, t) => {
              let l = (t ? n.getCoreRowModel() : n.getRowModel()).rowsById[e];
              if (!l) throw Error();
              return l;
            },
            _getDefaultColumnDef: i(
              () => [n.options.defaultColumn],
              (e) => {
                var t;
                return (
                  (e = null != (t = e) ? t : {}),
                  {
                    header: (e) => {
                      let t = e.header.column.columnDef;
                      return t.accessorKey
                        ? t.accessorKey
                        : t.accessorFn
                        ? t.id
                        : null;
                    },
                    cell: (e) => {
                      var t, n;
                      return null !=
                        (t =
                          null == (n = e.renderValue()) || null == n.toString
                            ? void 0
                            : n.toString())
                        ? t
                        : null;
                    },
                    ...n._features.reduce(
                      (e, t) =>
                        Object.assign(
                          e,
                          null == t.getDefaultColumnDef
                            ? void 0
                            : t.getDefaultColumnDef()
                        ),
                      {}
                    ),
                    ...e
                  }
                );
              },
              {
                debug: () => {
                  var e;
                  return null != (e = n.options.debugAll)
                    ? e
                    : n.options.debugColumns;
                },
                key: !1
              }
            ),
            _getColumnDefs: () => n.options.columns,
            getAllColumns: i(
              () => [n._getColumnDefs()],
              (e) => {
                let t = function (e, l, r) {
                  return (
                    void 0 === r && (r = 0),
                    e.map((e) => {
                      let o = (function (e, t, n, l) {
                        var r, o;
                        let u;
                        let a = { ...e._getDefaultColumnDef(), ...t },
                          s = a.accessorKey,
                          d =
                            null !=
                            (r =
                              null != (o = a.id)
                                ? o
                                : s
                                ? s.replace('.', '_')
                                : void 0)
                              ? r
                              : 'string' == typeof a.header
                              ? a.header
                              : void 0;
                        if (
                          (a.accessorFn
                            ? (u = a.accessorFn)
                            : s &&
                              (u = s.includes('.')
                                ? (e) => {
                                    let t = e;
                                    for (let e of s.split('.')) {
                                      var n;
                                      t = null == (n = t) ? void 0 : n[e];
                                    }
                                    return t;
                                  }
                                : (e) => e[a.accessorKey]),
                          !d)
                        )
                          throw Error();
                        let g = {
                          id: `${String(d)}`,
                          accessorFn: u,
                          parent: l,
                          depth: n,
                          columnDef: a,
                          columns: [],
                          getFlatColumns: i(
                            () => [!0],
                            () => {
                              var e;
                              return [
                                g,
                                ...(null == (e = g.columns)
                                  ? void 0
                                  : e.flatMap((e) => e.getFlatColumns()))
                              ];
                            },
                            {
                              key: 'column.getFlatColumns',
                              debug: () => {
                                var t;
                                return null != (t = e.options.debugAll)
                                  ? t
                                  : e.options.debugColumns;
                              }
                            }
                          ),
                          getLeafColumns: i(
                            () => [e._getOrderColumnsFn()],
                            (e) => {
                              var t;
                              return null != (t = g.columns) && t.length
                                ? e(
                                    g.columns.flatMap((e) => e.getLeafColumns())
                                  )
                                : [g];
                            },
                            {
                              key: 'column.getLeafColumns',
                              debug: () => {
                                var t;
                                return null != (t = e.options.debugAll)
                                  ? t
                                  : e.options.debugColumns;
                              }
                            }
                          )
                        };
                        for (let t of e._features)
                          null == t.createColumn || t.createColumn(g, e);
                        return g;
                      })(n, e, r, l);
                      return (
                        (o.columns = e.columns ? t(e.columns, o, r + 1) : []), o
                      );
                    })
                  );
                };
                return t(e);
              },
              {
                key: !1,
                debug: () => {
                  var e;
                  return null != (e = n.options.debugAll)
                    ? e
                    : n.options.debugColumns;
                }
              }
            ),
            getAllFlatColumns: i(
              () => [n.getAllColumns()],
              (e) => e.flatMap((e) => e.getFlatColumns()),
              {
                key: !1,
                debug: () => {
                  var e;
                  return null != (e = n.options.debugAll)
                    ? e
                    : n.options.debugColumns;
                }
              }
            ),
            _getAllFlatColumnsById: i(
              () => [n.getAllFlatColumns()],
              (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
              {
                key: !1,
                debug: () => {
                  var e;
                  return null != (e = n.options.debugAll)
                    ? e
                    : n.options.debugColumns;
                }
              }
            ),
            getAllLeafColumns: i(
              () => [n.getAllColumns(), n._getOrderColumnsFn()],
              (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
              {
                key: !1,
                debug: () => {
                  var e;
                  return null != (e = n.options.debugAll)
                    ? e
                    : n.options.debugColumns;
                }
              }
            ),
            getColumn: (e) => n._getAllFlatColumnsById()[e]
          };
        Object.assign(n, d);
        for (let e = 0; e < n._features.length; e++) {
          let t = n._features[e];
          null == t || null == t.createTable || t.createTable(n);
        }
        return n;
      }
      let q = (e, t, n, l, r, o, u) => {
        let a = {
          id: t,
          index: l,
          original: n,
          depth: r,
          parentId: u,
          _valuesCache: {},
          _uniqueValuesCache: {},
          getValue: (t) => {
            if (a._valuesCache.hasOwnProperty(t)) return a._valuesCache[t];
            let n = e.getColumn(t);
            if (null != n && n.accessorFn)
              return (
                (a._valuesCache[t] = n.accessorFn(a.original, l)),
                a._valuesCache[t]
              );
          },
          getUniqueValues: (t) => {
            if (a._uniqueValuesCache.hasOwnProperty(t))
              return a._uniqueValuesCache[t];
            let n = e.getColumn(t);
            return null != n && n.accessorFn
              ? (n.columnDef.getUniqueValues
                  ? (a._uniqueValuesCache[t] = n.columnDef.getUniqueValues(
                      a.original,
                      l
                    ))
                  : (a._uniqueValuesCache[t] = [a.getValue(t)]),
                a._uniqueValuesCache[t])
              : void 0;
          },
          renderValue: (t) => {
            var n;
            return null != (n = a.getValue(t))
              ? n
              : e.options.renderFallbackValue;
          },
          subRows: null != o ? o : [],
          getLeafRows: () =>
            (function (e, t) {
              let n = [],
                l = (e) => {
                  e.forEach((e) => {
                    n.push(e);
                    let r = t(e);
                    null != r && r.length && l(r);
                  });
                };
              return l(e), n;
            })(a.subRows, (e) => e.subRows),
          getParentRow: () => (a.parentId ? e.getRow(a.parentId, !0) : void 0),
          getParentRows: () => {
            let e = [],
              t = a;
            for (;;) {
              let n = t.getParentRow();
              if (!n) break;
              e.push(n), (t = n);
            }
            return e.reverse();
          },
          getAllCells: i(
            () => [e.getAllLeafColumns()],
            (t) =>
              t.map((t) =>
                (function (e, t, n, l) {
                  let r = {
                    id: `${t.id}_${n.id}`,
                    row: t,
                    column: n,
                    getValue: () => t.getValue(l),
                    renderValue: () => {
                      var t;
                      return null != (t = r.getValue())
                        ? t
                        : e.options.renderFallbackValue;
                    },
                    getContext: i(
                      () => [e, n, t, r],
                      (e, t, n, l) => ({
                        table: e,
                        column: t,
                        row: n,
                        cell: l,
                        getValue: l.getValue,
                        renderValue: l.renderValue
                      }),
                      { key: !1, debug: () => e.options.debugAll }
                    )
                  };
                  return (
                    e._features.forEach((l) => {
                      null == l.createCell || l.createCell(r, n, t, e);
                    }, {}),
                    r
                  );
                })(e, a, t, t.id)
              ),
            {
              key: !1,
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugRows;
              }
            }
          ),
          _getAllCellsByColumnId: i(
            () => [a.getAllCells()],
            (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
            {
              key: 'row.getAllCellsByColumnId',
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugRows;
              }
            }
          )
        };
        for (let t = 0; t < e._features.length; t++) {
          let n = e._features[t];
          null == n || null == n.createRow || n.createRow(a, e);
        }
        return a;
      };
      function T() {
        return (e) =>
          i(
            () => [e.options.data],
            (t) => {
              let n = { rows: [], flatRows: [], rowsById: {} },
                l = function (t, r, o) {
                  void 0 === r && (r = 0);
                  let i = [];
                  for (let a = 0; a < t.length; a++) {
                    let s = q(
                      e,
                      e._getRowId(t[a], a, o),
                      t[a],
                      a,
                      r,
                      void 0,
                      null == o ? void 0 : o.id
                    );
                    if (
                      (n.flatRows.push(s),
                      (n.rowsById[s.id] = s),
                      i.push(s),
                      e.options.getSubRows)
                    ) {
                      var u;
                      (s.originalSubRows = e.options.getSubRows(t[a], a)),
                        null != (u = s.originalSubRows) &&
                          u.length &&
                          (s.subRows = l(s.originalSubRows, r + 1, s));
                    }
                  }
                  return i;
                };
              return (n.rows = l(t)), n;
            },
            {
              key: !1,
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugTable;
              },
              onChange: () => {
                e._autoResetPageIndex();
              }
            }
          );
      }
      function N(e) {
        return (e) =>
          i(
            () => [
              e.getState().pagination,
              e.getPrePaginationRowModel(),
              e.options.paginateExpandedRows ? void 0 : e.getState().expanded
            ],
            (t, n) => {
              let l;
              if (!n.rows.length) return n;
              let { pageSize: r, pageIndex: o } = t,
                { rows: i, flatRows: u, rowsById: a } = n,
                s = r * o;
              (i = i.slice(s, s + r)),
                ((l = e.options.paginateExpandedRows
                  ? { rows: i, flatRows: u, rowsById: a }
                  : (function (e) {
                      let t = [],
                        n = (e) => {
                          var l;
                          t.push(e),
                            null != (l = e.subRows) &&
                              l.length &&
                              e.getIsExpanded() &&
                              e.subRows.forEach(n);
                        };
                      return (
                        e.rows.forEach(n),
                        { rows: t, flatRows: e.flatRows, rowsById: e.rowsById }
                      );
                    })({ rows: i, flatRows: u, rowsById: a })).flatRows = []);
              let d = (e) => {
                l.flatRows.push(e), e.subRows.length && e.subRows.forEach(d);
              };
              return l.rows.forEach(d), l;
            },
            {
              key: !1,
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugTable;
              }
            }
          );
      }
    },
    52792: function (e, t, n) {
      let l, r;
      n.d(t, {
        mY: function () {
          return eA;
        }
      });
      var o = /[\\\/_+.#"@\[\(\{&]/,
        i = /[\\\/_+.#"@\[\(\{&]/g,
        u = /[\s-]/,
        a = /[\s-]/g;
      function s(e) {
        return e.toLowerCase().replace(a, ' ');
      }
      var d = n(22988),
        g = n(2265),
        c = n(78149),
        f = n(1584),
        p = n(98324),
        m = n(53201),
        v = n(91715),
        h = n(18676),
        b = n(75137),
        w = n(66486);
      let S = 'dismissableLayer.update',
        C = (0, g.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set()
        }),
        R = (0, g.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: r = !1,
              onEscapeKeyDown: o,
              onPointerDownOutside: i,
              onFocusOutside: u,
              onInteractOutside: a,
              onDismiss: s,
              ...p
            } = e,
            m = (0, g.useContext)(C),
            [v, R] = (0, g.useState)(null),
            F =
              null !== (n = null == v ? void 0 : v.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, M] = (0, g.useState)({}),
            P = (0, f.e)(t, (e) => R(e)),
            I = Array.from(m.layers),
            [x] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
            A = I.indexOf(x),
            V = v ? I.indexOf(v) : -1,
            _ = m.layersWithOutsidePointerEventsDisabled.size > 0,
            O = V >= A,
            D = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, b.W)(e),
                l = (0, g.useRef)(!1),
                r = (0, g.useRef)(() => {});
              return (
                (0, g.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !l.current) {
                        let l = { originalEvent: e };
                        function o() {
                          E('dismissableLayer.pointerDownOutside', n, l, {
                            discrete: !0
                          });
                        }
                        'touch' === e.pointerType
                          ? (t.removeEventListener('click', r.current),
                            (r.current = o),
                            t.addEventListener('click', r.current, {
                              once: !0
                            }))
                          : o();
                      } else t.removeEventListener('click', r.current);
                      l.current = !1;
                    },
                    o = window.setTimeout(() => {
                      t.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      t.removeEventListener('pointerdown', e),
                      t.removeEventListener('click', r.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (l.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...m.branches].some((e) => e.contains(t));
              !O ||
                n ||
                (null == i || i(e),
                null == a || a(e),
                e.defaultPrevented || null == s || s());
            }, F),
            k = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, b.W)(e),
                l = (0, g.useRef)(!1);
              return (
                (0, g.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !l.current &&
                      E(
                        'dismissableLayer.focusOutside',
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener('focusin', e),
                    () => t.removeEventListener('focusin', e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (l.current = !0),
                  onBlurCapture: () => (l.current = !1)
                }
              );
            })((e) => {
              let t = e.target;
              [...m.branches].some((e) => e.contains(t)) ||
                (null == u || u(e),
                null == a || a(e),
                e.defaultPrevented || null == s || s());
            }, F);
          return (
            (0, w.e)((e) => {
              V !== m.layers.size - 1 ||
                (null == o || o(e),
                !e.defaultPrevented && s && (e.preventDefault(), s()));
            }, F),
            (0, g.useEffect)(() => {
              if (v)
                return (
                  r &&
                    (0 === m.layersWithOutsidePointerEventsDisabled.size &&
                      ((l = F.body.style.pointerEvents),
                      (F.body.style.pointerEvents = 'none')),
                    m.layersWithOutsidePointerEventsDisabled.add(v)),
                  m.layers.add(v),
                  y(),
                  () => {
                    r &&
                      1 === m.layersWithOutsidePointerEventsDisabled.size &&
                      (F.body.style.pointerEvents = l);
                  }
                );
            }, [v, F, r, m]),
            (0, g.useEffect)(
              () => () => {
                v &&
                  (m.layers.delete(v),
                  m.layersWithOutsidePointerEventsDisabled.delete(v),
                  y());
              },
              [v, m]
            ),
            (0, g.useEffect)(() => {
              let e = () => M({});
              return (
                document.addEventListener(S, e),
                () => document.removeEventListener(S, e)
              );
            }, []),
            (0, g.createElement)(
              h.WV.div,
              (0, d.Z)({}, p, {
                ref: P,
                style: {
                  pointerEvents: _ ? (O ? 'auto' : 'none') : void 0,
                  ...e.style
                },
                onFocusCapture: (0, c.M)(e.onFocusCapture, k.onFocusCapture),
                onBlurCapture: (0, c.M)(e.onBlurCapture, k.onBlurCapture),
                onPointerDownCapture: (0, c.M)(
                  e.onPointerDownCapture,
                  D.onPointerDownCapture
                )
              })
            )
          );
        });
      function y() {
        let e = new CustomEvent(S);
        document.dispatchEvent(e);
      }
      function E(e, t, n, { discrete: l }) {
        let r = n.originalEvent.target,
          o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && r.addEventListener(e, t, { once: !0 }),
          l ? (0, h.jH)(r, o) : r.dispatchEvent(o);
      }
      let F = 'focusScope.autoFocusOnMount',
        M = 'focusScope.autoFocusOnUnmount',
        P = { bubbles: !1, cancelable: !0 },
        I = (0, g.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: l = !1,
              onMountAutoFocus: r,
              onUnmountAutoFocus: o,
              ...i
            } = e,
            [u, a] = (0, g.useState)(null),
            s = (0, b.W)(r),
            c = (0, b.W)(o),
            p = (0, g.useRef)(null),
            m = (0, f.e)(t, (e) => a(e)),
            v = (0, g.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              }
            }).current;
          (0, g.useEffect)(() => {
            if (l) {
              function e(e) {
                if (v.paused || !u) return;
                let t = e.target;
                u.contains(t) ? (p.current = t) : V(p.current, { select: !0 });
              }
              function t(e) {
                if (v.paused || !u) return;
                let t = e.relatedTarget;
                null === t || u.contains(t) || V(p.current, { select: !0 });
              }
              document.addEventListener('focusin', e),
                document.addEventListener('focusout', t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && V(u);
              });
              return (
                u && n.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    n.disconnect();
                }
              );
            }
          }, [l, u, v.paused]),
            (0, g.useEffect)(() => {
              if (u) {
                _.add(v);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(F, P);
                  u.addEventListener(F, s),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let l of e)
                          if (
                            (V(l, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        x(u).filter((e) => 'A' !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && V(u));
                }
                return () => {
                  u.removeEventListener(F, s),
                    setTimeout(() => {
                      let t = new CustomEvent(M, P);
                      u.addEventListener(M, c),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          V(null != e ? e : document.body, { select: !0 }),
                        u.removeEventListener(M, c),
                        _.remove(v);
                    }, 0);
                };
              }
            }, [u, s, c, v]);
          let w = (0, g.useCallback)(
            (e) => {
              if ((!n && !l) || v.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                let t = e.currentTarget,
                  [l, o] = (function (e) {
                    let t = x(e);
                    return [A(t, e), A(t.reverse(), e)];
                  })(t);
                l && o
                  ? e.shiftKey || r !== o
                    ? e.shiftKey &&
                      r === l &&
                      (e.preventDefault(), n && V(o, { select: !0 }))
                    : (e.preventDefault(), n && V(l, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, l, v.paused]
          );
          return (0, g.createElement)(
            h.WV.div,
            (0, d.Z)({ tabIndex: -1 }, i, { ref: m, onKeyDown: w })
          );
        });
      function x(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = 'INPUT' === e.tagName && 'hidden' === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            }
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function A(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ('hidden' === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ('none' === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function V(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let l = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== l &&
              (n = e) instanceof HTMLInputElement &&
              'select' in n &&
              t &&
              e.select();
        }
      }
      let _ =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = O(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = O(r, e))[0]) || void 0 === t || t.resume();
          }
        });
      function O(e, t) {
        let n = [...e],
          l = n.indexOf(t);
        return -1 !== l && n.splice(l, 1), n;
      }
      var D = n(54887);
      let k = (0, g.forwardRef)((e, t) => {
        var n;
        let {
          container: l = null == globalThis
            ? void 0
            : null === (n = globalThis.document) || void 0 === n
            ? void 0
            : n.body,
          ...r
        } = e;
        return l
          ? D.createPortal(
              (0, g.createElement)(h.WV.div, (0, d.Z)({}, r, { ref: t })),
              l
            )
          : null;
      });
      var L = n(31383),
        z = n(20589),
        H = n(9219),
        G = n(78369);
      let q = (0, g.forwardRef)((e, t) => {
        let { children: n, ...l } = e,
          r = g.Children.toArray(n),
          o = r.find(U);
        if (o) {
          let e = o.props.children,
            n = r.map((t) =>
              t !== o
                ? t
                : g.Children.count(e) > 1
                ? g.Children.only(null)
                : (0, g.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, g.createElement)(
            T,
            (0, d.Z)({}, l, { ref: t }),
            (0, g.isValidElement)(e) ? (0, g.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, g.createElement)(T, (0, d.Z)({}, l, { ref: t }), n);
      });
      q.displayName = 'Slot';
      let T = (0, g.forwardRef)((e, t) => {
        let { children: n, ...l } = e;
        return (0, g.isValidElement)(n)
          ? (0, g.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let l in t) {
                  let r = e[l],
                    o = t[l];
                  /^on[A-Z]/.test(l)
                    ? r && o
                      ? (n[l] = (...e) => {
                          o(...e), r(...e);
                        })
                      : r && (n[l] = r)
                    : 'style' === l
                    ? (n[l] = { ...r, ...o })
                    : 'className' === l &&
                      (n[l] = [r, o].filter(Boolean).join(' '));
                }
                return { ...e, ...n };
              })(l, n.props),
              ref: t ? (0, f.F)(t, n.ref) : n.ref
            })
          : g.Children.count(n) > 1
          ? g.Children.only(null)
          : null;
      });
      T.displayName = 'SlotClone';
      let N = ({ children: e }) => (0, g.createElement)(g.Fragment, null, e);
      function U(e) {
        return (0, g.isValidElement)(e) && e.type === N;
      }
      let j = 'Dialog',
        [B, $] = (0, p.b)(j),
        [W, K] = B(j),
        Z = 'DialogPortal',
        [X, J] = B(Z, { forceMount: void 0 }),
        Q = 'DialogOverlay',
        Y = (0, g.forwardRef)((e, t) => {
          let n = J(Q, e.__scopeDialog),
            { forceMount: l = n.forceMount, ...r } = e,
            o = K(Q, e.__scopeDialog);
          return o.modal
            ? (0, g.createElement)(
                L.z,
                { present: l || o.open },
                (0, g.createElement)(ee, (0, d.Z)({}, r, { ref: t }))
              )
            : null;
        }),
        ee = (0, g.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...l } = e,
            r = K(Q, n);
          return (0, g.createElement)(
            H.Z,
            { as: q, allowPinchZoom: !0, shards: [r.contentRef] },
            (0, g.createElement)(
              h.WV.div,
              (0, d.Z)({ 'data-state': ei(r.open) }, l, {
                ref: t,
                style: { pointerEvents: 'auto', ...l.style }
              })
            )
          );
        }),
        et = 'DialogContent',
        en = (0, g.forwardRef)((e, t) => {
          let n = J(et, e.__scopeDialog),
            { forceMount: l = n.forceMount, ...r } = e,
            o = K(et, e.__scopeDialog);
          return (0, g.createElement)(
            L.z,
            { present: l || o.open },
            o.modal
              ? (0, g.createElement)(el, (0, d.Z)({}, r, { ref: t }))
              : (0, g.createElement)(er, (0, d.Z)({}, r, { ref: t }))
          );
        }),
        el = (0, g.forwardRef)((e, t) => {
          let n = K(et, e.__scopeDialog),
            l = (0, g.useRef)(null),
            r = (0, f.e)(t, n.contentRef, l);
          return (
            (0, g.useEffect)(() => {
              let e = l.current;
              if (e) return (0, G.Ry)(e);
            }, []),
            (0, g.createElement)(
              eo,
              (0, d.Z)({}, e, {
                ref: r,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, c.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: (0, c.M)(e.onPointerDownOutside, (e) => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: (0, c.M)(e.onFocusOutside, (e) =>
                  e.preventDefault()
                )
              })
            )
          );
        }),
        er = (0, g.forwardRef)((e, t) => {
          let n = K(et, e.__scopeDialog),
            l = (0, g.useRef)(!1),
            r = (0, g.useRef)(!1);
          return (0, g.createElement)(
            eo,
            (0, d.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var o, i;
                null === (o = e.onCloseAutoFocus) ||
                  void 0 === o ||
                  o.call(e, t),
                  t.defaultPrevented ||
                    (l.current ||
                      null === (i = n.triggerRef.current) ||
                      void 0 === i ||
                      i.focus(),
                    t.preventDefault()),
                  (l.current = !1),
                  (r.current = !1);
              },
              onInteractOutside: (t) => {
                var o, i;
                null === (o = e.onInteractOutside) ||
                  void 0 === o ||
                  o.call(e, t),
                  t.defaultPrevented ||
                    ((l.current = !0),
                    'pointerdown' !== t.detail.originalEvent.type ||
                      (r.current = !0));
                let u = t.target;
                (null === (i = n.triggerRef.current) || void 0 === i
                  ? void 0
                  : i.contains(u)) && t.preventDefault(),
                  'focusin' === t.detail.originalEvent.type &&
                    r.current &&
                    t.preventDefault();
              }
            })
          );
        }),
        eo = (0, g.forwardRef)((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: l,
              onOpenAutoFocus: r,
              onCloseAutoFocus: o,
              ...i
            } = e,
            u = K(et, n),
            a = (0, g.useRef)(null),
            s = (0, f.e)(t, a);
          return (
            (0, z.EW)(),
            (0, g.createElement)(
              g.Fragment,
              null,
              (0, g.createElement)(
                I,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: l,
                  onMountAutoFocus: r,
                  onUnmountAutoFocus: o
                },
                (0, g.createElement)(
                  R,
                  (0, d.Z)(
                    {
                      role: 'dialog',
                      id: u.contentId,
                      'aria-describedby': u.descriptionId,
                      'aria-labelledby': u.titleId,
                      'data-state': ei(u.open)
                    },
                    i,
                    { ref: s, onDismiss: () => u.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        });
      function ei(e) {
        return e ? 'open' : 'closed';
      }
      let [eu, ea] = (0, p.k)('DialogTitleWarning', {
          contentName: et,
          titleName: 'DialogTitle',
          docsSlug: 'dialog'
        }),
        es = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: l,
              defaultOpen: r,
              onOpenChange: o,
              modal: i = !0
            } = e,
            u = (0, g.useRef)(null),
            a = (0, g.useRef)(null),
            [s = !1, d] = (0, v.T)({ prop: l, defaultProp: r, onChange: o });
          return (0, g.createElement)(
            W,
            {
              scope: t,
              triggerRef: u,
              contentRef: a,
              contentId: (0, m.M)(),
              titleId: (0, m.M)(),
              descriptionId: (0, m.M)(),
              open: s,
              onOpenChange: d,
              onOpenToggle: (0, g.useCallback)(() => d((e) => !e), [d]),
              modal: i
            },
            n
          );
        },
        ed = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: l,
              container: r
            } = e,
            o = K(Z, t);
          return (0, g.createElement)(
            X,
            { scope: t, forceMount: n },
            g.Children.map(l, (e) =>
              (0, g.createElement)(
                L.z,
                { present: n || o.open },
                (0, g.createElement)(k, { asChild: !0, container: r }, e)
              )
            )
          );
        };
      var eg = '[cmdk-group=""]',
        ec = '[cmdk-group-items=""]',
        ef = '[cmdk-item=""]',
        ep = `${ef}:not([aria-disabled="true"])`,
        em = 'cmdk-item-select',
        ev = 'data-value',
        eh = (e, t, n) => {
          var l;
          return (
            (l = e),
            (function e(t, n, l, r, s, d, g) {
              if (d === n.length) return s === t.length ? 1 : 0.99;
              var c = `${s},${d}`;
              if (void 0 !== g[c]) return g[c];
              for (
                var f, p, m, v, h = r.charAt(d), b = l.indexOf(h, s), w = 0;
                b >= 0;

              )
                (f = e(t, n, l, r, b + 1, d + 1, g)) > w &&
                  (b === s
                    ? (f *= 1)
                    : o.test(t.charAt(b - 1))
                    ? ((f *= 0.8),
                      (m = t.slice(s, b - 1).match(i)) &&
                        s > 0 &&
                        (f *= Math.pow(0.999, m.length)))
                    : u.test(t.charAt(b - 1))
                    ? ((f *= 0.9),
                      (v = t.slice(s, b - 1).match(a)) &&
                        s > 0 &&
                        (f *= Math.pow(0.999, v.length)))
                    : ((f *= 0.17), s > 0 && (f *= Math.pow(0.999, b - s))),
                  t.charAt(b) !== n.charAt(d) && (f *= 0.9999)),
                  ((f < 0.1 && l.charAt(b - 1) === r.charAt(d + 1)) ||
                    (r.charAt(d + 1) === r.charAt(d) &&
                      l.charAt(b - 1) !== r.charAt(d))) &&
                    0.1 * (p = e(t, n, l, r, b + 1, d + 2, g)) > f &&
                    (f = 0.1 * p),
                  f > w && (w = f),
                  (b = l.indexOf(h, b + 1));
              return (g[c] = w), w;
            })(
              (l = n && n.length > 0 ? `${l + ' ' + n.join(' ')}` : l),
              t,
              s(l),
              s(t),
              0,
              0,
              {}
            )
          );
        },
        eb = g.createContext(void 0),
        ew = () => g.useContext(eb),
        eS = g.createContext(void 0),
        eC = () => g.useContext(eS),
        eR = g.createContext(void 0),
        ey = g.forwardRef((e, t) => {
          let n = eO(() => {
              var t, n;
              return {
                search: '',
                value:
                  null != (n = null != (t = e.value) ? t : e.defaultValue)
                    ? n
                    : '',
                filtered: { count: 0, items: new Map(), groups: new Set() }
              };
            }),
            l = eO(() => new Set()),
            r = eO(() => new Map()),
            o = eO(() => new Map()),
            i = eO(() => new Set()),
            u = eV(e),
            {
              label: a,
              children: s,
              value: d,
              onValueChange: c,
              filter: f,
              shouldFilter: p,
              loop: m,
              disablePointerSelection: v = !1,
              vimBindings: b = !0,
              ...w
            } = e,
            S = g.useId(),
            C = g.useId(),
            R = g.useId(),
            y = g.useRef(null),
            E = ez();
          e_(() => {
            if (void 0 !== d) {
              let e = d.trim();
              (n.current.value = e), F.emit();
            }
          }, [d]),
            e_(() => {
              E(6, V);
            }, []);
          let F = g.useMemo(
              () => ({
                subscribe: (e) => (i.current.add(e), () => i.current.delete(e)),
                snapshot: () => n.current,
                setState: (e, t, l) => {
                  var r, o, i;
                  if (!Object.is(n.current[e], t)) {
                    if (((n.current[e] = t), 'search' === e)) A(), I(), E(1, x);
                    else if (
                      'value' === e &&
                      (l || E(5, V),
                      (null == (r = u.current) ? void 0 : r.value) !== void 0)
                    ) {
                      null == (i = (o = u.current).onValueChange) ||
                        i.call(o, null != t ? t : '');
                      return;
                    }
                    F.emit();
                  }
                },
                emit: () => {
                  i.current.forEach((e) => e());
                }
              }),
              []
            ),
            M = g.useMemo(
              () => ({
                value: (e, t, l) => {
                  var r;
                  t !== (null == (r = o.current.get(e)) ? void 0 : r.value) &&
                    (o.current.set(e, { value: t, keywords: l }),
                    n.current.filtered.items.set(e, P(t, l)),
                    E(2, () => {
                      I(), F.emit();
                    }));
                },
                item: (e, t) => (
                  l.current.add(e),
                  t &&
                    (r.current.has(t)
                      ? r.current.get(t).add(e)
                      : r.current.set(t, new Set([e]))),
                  E(3, () => {
                    A(), I(), n.current.value || x(), F.emit();
                  }),
                  () => {
                    o.current.delete(e),
                      l.current.delete(e),
                      n.current.filtered.items.delete(e);
                    let t = _();
                    E(4, () => {
                      A(),
                        (null == t ? void 0 : t.getAttribute('id')) === e &&
                          x(),
                        F.emit();
                    });
                  }
                ),
                group: (e) => (
                  r.current.has(e) || r.current.set(e, new Set()),
                  () => {
                    o.current.delete(e), r.current.delete(e);
                  }
                ),
                filter: () => u.current.shouldFilter,
                label: a || e['aria-label'],
                disablePointerSelection: v,
                listId: S,
                inputId: R,
                labelId: C,
                listInnerRef: y
              }),
              []
            );
          function P(e, t) {
            var l, r;
            let o =
              null != (r = null == (l = u.current) ? void 0 : l.filter)
                ? r
                : eh;
            return e ? o(e, n.current.search, t) : 0;
          }
          function I() {
            if (!n.current.search || !1 === u.current.shouldFilter) return;
            let e = n.current.filtered.items,
              t = [];
            n.current.filtered.groups.forEach((n) => {
              let l = r.current.get(n),
                o = 0;
              l.forEach((t) => {
                o = Math.max(e.get(t), o);
              }),
                t.push([n, o]);
            });
            let l = y.current;
            O()
              .sort((t, n) => {
                var l, r;
                let o = t.getAttribute('id'),
                  i = n.getAttribute('id');
                return (
                  (null != (l = e.get(i)) ? l : 0) -
                  (null != (r = e.get(o)) ? r : 0)
                );
              })
              .forEach((e) => {
                let t = e.closest(ec);
                t
                  ? t.appendChild(
                      e.parentElement === t ? e : e.closest(`${ec} > *`)
                    )
                  : l.appendChild(
                      e.parentElement === l ? e : e.closest(`${ec} > *`)
                    );
              }),
              t
                .sort((e, t) => t[1] - e[1])
                .forEach((e) => {
                  let t = y.current.querySelector(
                    `${eg}[${ev}="${encodeURIComponent(e[0])}"]`
                  );
                  null == t || t.parentElement.appendChild(t);
                });
          }
          function x() {
            let e = O().find((e) => 'true' !== e.getAttribute('aria-disabled')),
              t = null == e ? void 0 : e.getAttribute(ev);
            F.setState('value', t || void 0);
          }
          function A() {
            var e, t, i, a;
            if (!n.current.search || !1 === u.current.shouldFilter) {
              n.current.filtered.count = l.current.size;
              return;
            }
            n.current.filtered.groups = new Set();
            let s = 0;
            for (let r of l.current) {
              let l = P(
                null != (t = null == (e = o.current.get(r)) ? void 0 : e.value)
                  ? t
                  : '',
                null !=
                  (a = null == (i = o.current.get(r)) ? void 0 : i.keywords)
                  ? a
                  : []
              );
              n.current.filtered.items.set(r, l), l > 0 && s++;
            }
            for (let [e, t] of r.current)
              for (let l of t)
                if (n.current.filtered.items.get(l) > 0) {
                  n.current.filtered.groups.add(e);
                  break;
                }
            n.current.filtered.count = s;
          }
          function V() {
            var e, t, n;
            let l = _();
            l &&
              ((null == (e = l.parentElement) ? void 0 : e.firstChild) === l &&
                (null ==
                  (n =
                    null == (t = l.closest(eg))
                      ? void 0
                      : t.querySelector('[cmdk-group-heading=""]')) ||
                  n.scrollIntoView({ block: 'nearest' })),
              l.scrollIntoView({ block: 'nearest' }));
          }
          function _() {
            var e;
            return null == (e = y.current)
              ? void 0
              : e.querySelector(`${ef}[aria-selected="true"]`);
          }
          function O() {
            var e;
            return Array.from(
              null == (e = y.current) ? void 0 : e.querySelectorAll(ep)
            );
          }
          function D(e) {
            let t = O()[e];
            t && F.setState('value', t.getAttribute(ev));
          }
          function k(e) {
            var t;
            let n = _(),
              l = O(),
              r = l.findIndex((e) => e === n),
              o = l[r + e];
            null != (t = u.current) &&
              t.loop &&
              (o =
                r + e < 0
                  ? l[l.length - 1]
                  : r + e === l.length
                  ? l[0]
                  : l[r + e]),
              o && F.setState('value', o.getAttribute(ev));
          }
          function L(e) {
            let t = _(),
              n = null == t ? void 0 : t.closest(eg),
              l;
            for (; n && !l; )
              l =
                null ==
                (n =
                  e > 0
                    ? (function (e, t) {
                        let n = e.nextElementSibling;
                        for (; n; ) {
                          if (n.matches(t)) return n;
                          n = n.nextElementSibling;
                        }
                      })(n, eg)
                    : (function (e, t) {
                        let n = e.previousElementSibling;
                        for (; n; ) {
                          if (n.matches(t)) return n;
                          n = n.previousElementSibling;
                        }
                      })(n, eg))
                  ? void 0
                  : n.querySelector(ep);
            l ? F.setState('value', l.getAttribute(ev)) : k(e);
          }
          let z = () => D(O().length - 1),
            H = (e) => {
              e.preventDefault(), e.metaKey ? z() : e.altKey ? L(1) : k(1);
            },
            G = (e) => {
              e.preventDefault(), e.metaKey ? D(0) : e.altKey ? L(-1) : k(-1);
            };
          return g.createElement(
            h.WV.div,
            {
              ref: t,
              tabIndex: -1,
              ...w,
              'cmdk-root': '',
              onKeyDown: (e) => {
                var t;
                if (
                  (null == (t = w.onKeyDown) || t.call(w, e),
                  !e.defaultPrevented)
                )
                  switch (e.key) {
                    case 'n':
                    case 'j':
                      b && e.ctrlKey && H(e);
                      break;
                    case 'ArrowDown':
                      H(e);
                      break;
                    case 'p':
                    case 'k':
                      b && e.ctrlKey && G(e);
                      break;
                    case 'ArrowUp':
                      G(e);
                      break;
                    case 'Home':
                      e.preventDefault(), D(0);
                      break;
                    case 'End':
                      e.preventDefault(), z();
                      break;
                    case 'Enter':
                      if (!e.nativeEvent.isComposing && 229 !== e.keyCode) {
                        e.preventDefault();
                        let t = _();
                        if (t) {
                          let e = new Event(em);
                          t.dispatchEvent(e);
                        }
                      }
                  }
              }
            },
            g.createElement(
              'label',
              {
                'cmdk-label': '',
                htmlFor: M.inputId,
                id: M.labelId,
                style: eG
              },
              a
            ),
            eH(e, (e) =>
              g.createElement(
                eS.Provider,
                { value: F },
                g.createElement(eb.Provider, { value: M }, e)
              )
            )
          );
        }),
        eE = g.forwardRef((e, t) => {
          var n, l;
          let r = g.useId(),
            o = g.useRef(null),
            i = g.useContext(eR),
            u = ew(),
            a = eV(e),
            s =
              null != (l = null == (n = a.current) ? void 0 : n.forceMount)
                ? l
                : null == i
                ? void 0
                : i.forceMount;
          e_(() => {
            if (!s) return u.item(r, null == i ? void 0 : i.id);
          }, [s]);
          let d = eL(r, o, [e.value, e.children, o], e.keywords),
            c = eC(),
            f = ek((e) => e.value && e.value === d.current),
            p = ek(
              (e) =>
                !!s ||
                !1 === u.filter() ||
                !e.search ||
                e.filtered.items.get(r) > 0
            );
          function m() {
            var e, t;
            v(), null == (t = (e = a.current).onSelect) || t.call(e, d.current);
          }
          function v() {
            c.setState('value', d.current, !0);
          }
          if (
            (g.useEffect(() => {
              let t = o.current;
              if (!(!t || e.disabled))
                return (
                  t.addEventListener(em, m), () => t.removeEventListener(em, m)
                );
            }, [p, e.onSelect, e.disabled]),
            !p)
          )
            return null;
          let {
            disabled: b,
            value: w,
            onSelect: S,
            forceMount: C,
            keywords: R,
            ...y
          } = e;
          return g.createElement(
            h.WV.div,
            {
              ref: eD([o, t]),
              ...y,
              id: r,
              'cmdk-item': '',
              role: 'option',
              'aria-disabled': !!b,
              'aria-selected': !!f,
              'data-disabled': !!b,
              'data-selected': !!f,
              onPointerMove: b || u.disablePointerSelection ? void 0 : v,
              onClick: b ? void 0 : m
            },
            e.children
          );
        }),
        eF = g.forwardRef((e, t) => {
          let { heading: n, children: l, forceMount: r, ...o } = e,
            i = g.useId(),
            u = g.useRef(null),
            a = g.useRef(null),
            s = g.useId(),
            d = ew(),
            c = ek(
              (e) =>
                !!r ||
                !1 === d.filter() ||
                !e.search ||
                e.filtered.groups.has(i)
            );
          e_(() => d.group(i), []), eL(i, u, [e.value, e.heading, a]);
          let f = g.useMemo(() => ({ id: i, forceMount: r }), [r]);
          return g.createElement(
            h.WV.div,
            {
              ref: eD([u, t]),
              ...o,
              'cmdk-group': '',
              role: 'presentation',
              hidden: !c || void 0
            },
            n &&
              g.createElement(
                'div',
                { ref: a, 'cmdk-group-heading': '', 'aria-hidden': !0, id: s },
                n
              ),
            eH(e, (e) =>
              g.createElement(
                'div',
                {
                  'cmdk-group-items': '',
                  role: 'group',
                  'aria-labelledby': n ? s : void 0
                },
                g.createElement(eR.Provider, { value: f }, e)
              )
            )
          );
        }),
        eM = g.forwardRef((e, t) => {
          let { alwaysRender: n, ...l } = e,
            r = g.useRef(null),
            o = ek((e) => !e.search);
          return n || o
            ? g.createElement(h.WV.div, {
                ref: eD([r, t]),
                ...l,
                'cmdk-separator': '',
                role: 'separator'
              })
            : null;
        }),
        eP = g.forwardRef((e, t) => {
          let { onValueChange: n, ...l } = e,
            r = null != e.value,
            o = eC(),
            i = ek((e) => e.search),
            u = ek((e) => e.value),
            a = ew(),
            s = g.useMemo(() => {
              var e;
              let t =
                null == (e = a.listInnerRef.current)
                  ? void 0
                  : e.querySelector(`${ef}[${ev}="${encodeURIComponent(u)}"]`);
              return null == t ? void 0 : t.getAttribute('id');
            }, []);
          return (
            g.useEffect(() => {
              null != e.value && o.setState('search', e.value);
            }, [e.value]),
            g.createElement(h.WV.input, {
              ref: t,
              ...l,
              'cmdk-input': '',
              autoComplete: 'off',
              autoCorrect: 'off',
              spellCheck: !1,
              'aria-autocomplete': 'list',
              role: 'combobox',
              'aria-expanded': !0,
              'aria-controls': a.listId,
              'aria-labelledby': a.labelId,
              'aria-activedescendant': s,
              id: a.inputId,
              type: 'text',
              value: r ? e.value : i,
              onChange: (e) => {
                r || o.setState('search', e.target.value),
                  null == n || n(e.target.value);
              }
            })
          );
        }),
        eI = g.forwardRef((e, t) => {
          let { children: n, label: l = 'Suggestions', ...r } = e,
            o = g.useRef(null),
            i = g.useRef(null),
            u = ew();
          return (
            g.useEffect(() => {
              if (i.current && o.current) {
                let e = i.current,
                  t = o.current,
                  n,
                  l = new ResizeObserver(() => {
                    n = requestAnimationFrame(() => {
                      let n = e.offsetHeight;
                      t.style.setProperty(
                        '--cmdk-list-height',
                        n.toFixed(1) + 'px'
                      );
                    });
                  });
                return (
                  l.observe(e),
                  () => {
                    cancelAnimationFrame(n), l.unobserve(e);
                  }
                );
              }
            }, []),
            g.createElement(
              h.WV.div,
              {
                ref: eD([o, t]),
                ...r,
                'cmdk-list': '',
                role: 'listbox',
                'aria-label': l,
                id: u.listId
              },
              eH(e, (e) =>
                g.createElement(
                  'div',
                  { ref: eD([i, u.listInnerRef]), 'cmdk-list-sizer': '' },
                  e
                )
              )
            )
          );
        }),
        ex = g.forwardRef((e, t) => {
          let {
            open: n,
            onOpenChange: l,
            overlayClassName: r,
            contentClassName: o,
            container: i,
            ...u
          } = e;
          return g.createElement(
            es,
            { open: n, onOpenChange: l },
            g.createElement(
              ed,
              { container: i },
              g.createElement(Y, { 'cmdk-overlay': '', className: r }),
              g.createElement(
                en,
                { 'aria-label': e.label, 'cmdk-dialog': '', className: o },
                g.createElement(ey, { ref: t, ...u })
              )
            )
          );
        }),
        eA = Object.assign(ey, {
          List: eI,
          Item: eE,
          Input: eP,
          Group: eF,
          Separator: eM,
          Dialog: ex,
          Empty: g.forwardRef((e, t) =>
            ek((e) => 0 === e.filtered.count)
              ? g.createElement(h.WV.div, {
                  ref: t,
                  ...e,
                  'cmdk-empty': '',
                  role: 'presentation'
                })
              : null
          ),
          Loading: g.forwardRef((e, t) => {
            let { progress: n, children: l, label: r = 'Loading...', ...o } = e;
            return g.createElement(
              h.WV.div,
              {
                ref: t,
                ...o,
                'cmdk-loading': '',
                role: 'progressbar',
                'aria-valuenow': n,
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-label': r
              },
              eH(e, (e) => g.createElement('div', { 'aria-hidden': !0 }, e))
            );
          })
        });
      function eV(e) {
        let t = g.useRef(e);
        return (
          e_(() => {
            t.current = e;
          }),
          t
        );
      }
      var e_ = 'undefined' == typeof window ? g.useEffect : g.useLayoutEffect;
      function eO(e) {
        let t = g.useRef();
        return void 0 === t.current && (t.current = e()), t;
      }
      function eD(e) {
        return (t) => {
          e.forEach((e) => {
            'function' == typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      }
      function ek(e) {
        let t = eC(),
          n = () => e(t.snapshot());
        return g.useSyncExternalStore(t.subscribe, n, n);
      }
      function eL(e, t, n, l = []) {
        let r = g.useRef(),
          o = ew();
        return (
          e_(() => {
            var i;
            let u = (() => {
                var e;
                for (let t of n) {
                  if ('string' == typeof t) return t.trim();
                  if ('object' == typeof t && 'current' in t)
                    return t.current
                      ? null == (e = t.current.textContent)
                        ? void 0
                        : e.trim()
                      : r.current;
                }
              })(),
              a = l.map((e) => e.trim());
            o.value(e, u, a),
              null == (i = t.current) || i.setAttribute(ev, u),
              (r.current = u);
          }),
          r
        );
      }
      var ez = () => {
        let [e, t] = g.useState(),
          n = eO(() => new Map());
        return (
          e_(() => {
            n.current.forEach((e) => e()), (n.current = new Map());
          }, [e]),
          (e, l) => {
            n.current.set(e, l), t({});
          }
        );
      };
      function eH({ asChild: e, children: t }, n) {
        let l;
        return e && g.isValidElement(t)
          ? g.cloneElement(
              'function' == typeof (l = t.type)
                ? l(t.props)
                : 'render' in l
                ? l.render(t.props)
                : t,
              { ref: t.ref },
              n(t.props.children)
            )
          : n(t);
      }
      var eG = {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: '0'
      };
    },
    69649: function (e, t, n) {
      n.d(t, {
        AE: function () {
          return g;
        },
        As: function () {
          return o;
        },
        Lv: function () {
          return d;
        },
        Oi: function () {
          return a;
        },
        Qx: function () {
          return b;
        },
        R: function () {
          return h;
        },
        S$: function () {
          return v;
        },
        U: function () {
          return s;
        },
        Ub: function () {
          return c;
        },
        Uo: function () {
          return i;
        },
        WJ: function () {
          return m;
        },
        fF: function () {
          return r;
        },
        jx: function () {
          return p;
        },
        mF: function () {
          return f;
        },
        vU: function () {
          return C;
        }
      });
      var l = (function () {
        try {
          if ('undefined' == typeof localStorage) return !1;
          let e = 'nuqs-localStorage-test';
          localStorage.setItem(e, e);
          let t = localStorage.getItem(e) === e;
          if ((localStorage.removeItem(e), !t)) return !1;
        } catch (e) {
          return (
            console.error(
              '[nuqs]: debug mode is disabled (localStorage unavailable).',
              e
            ),
            !1
          );
        }
        let e = localStorage.getItem('debug') ?? '';
        return e.includes('nuqs') || e.includes('next-usequerystate');
      })();
      function r(e, ...t) {
        if (!l) return;
        let n = (function (e, ...t) {
          return e.replace(/%[sfdO]/g, (e) => {
            let n = t.shift();
            return '%O' === e && n
              ? JSON.stringify(n).replace(/"([^"]+)":/g, '$1:')
              : String(n);
          });
        })(e, ...t);
        performance.mark(n), console.log(e, ...t);
      }
      function o(e, t, n) {
        try {
          return e(t);
        } catch (e) {
          return (
            !(function (e, ...t) {
              l && console.warn(e, ...t);
            })(
              '[nuqs] Error while parsing value `%s`: %O' +
                (n ? ' (for key `%s`)' : ''),
              t,
              e,
              n
            ),
            null
          );
        }
      }
      function i() {
        if ('undefined' == typeof window || !window.GestureEvent) return 50;
        try {
          let e = navigator.userAgent?.match(/version\/([\d\.]+) safari/i);
          return parseFloat(e[1]) >= 17 ? 120 : 320;
        } catch {
          return 320;
        }
      }
      function u(e) {
        function t(t) {
          if (void 0 === t) return null;
          let n = '';
          if (Array.isArray(t)) {
            if (void 0 === t[0]) return null;
            n = t[0];
          }
          return 'string' == typeof t && (n = t), o(e.parse, n);
        }
        return {
          eq: (e, t) => e === t,
          ...e,
          parseServerSide: t,
          withDefault(e) {
            return {
              ...this,
              defaultValue: e,
              parseServerSide: (n) => t(n) ?? e
            };
          },
          withOptions(e) {
            return { ...this, ...e };
          }
        };
      }
      var a = u({ parse: (e) => e, serialize: (e) => `${e}` }),
        s = u({
          parse: (e) => {
            let t = parseInt(e);
            return Number.isNaN(t) ? null : t;
          },
          serialize: (e) => Math.round(e).toFixed()
        });
      u({
        parse: (e) => {
          let t = parseInt(e, 16);
          return Number.isNaN(t) ? null : t;
        },
        serialize: (e) => {
          let t = Math.round(e).toString(16);
          return t.padStart(t.length + (t.length % 2), '0');
        }
      });
      var d = u({
          parse: (e) => {
            let t = parseFloat(e);
            return Number.isNaN(t) ? null : t;
          },
          serialize: (e) => e.toString()
        }),
        g = u({
          parse: (e) => 'true' === e,
          serialize: (e) => (e ? 'true' : 'false')
        }),
        c = u({
          parse: (e) => {
            let t = parseInt(e);
            return Number.isNaN(t) ? null : new Date(t);
          },
          serialize: (e) => e.valueOf().toString()
        }),
        f = u({
          parse: (e) => {
            let t = new Date(e);
            return Number.isNaN(t.valueOf()) ? null : t;
          },
          serialize: (e) => e.toISOString()
        });
      function p(e) {
        return u({
          parse: (t) => (e.includes(t) ? t : null),
          serialize: (e) => e.toString()
        });
      }
      function m(e) {
        return u({
          parse: (t) => {
            try {
              let n = JSON.parse(t);
              if ('function' == typeof e) return e(n);
              return n;
            } catch {
              return null;
            }
          },
          serialize: (e) => JSON.stringify(e),
          eq: (e, t) => e === t || JSON.stringify(e) === JSON.stringify(t)
        });
      }
      function v(e, t = ',') {
        let n = e.eq ?? ((e, t) => e === t),
          l = encodeURIComponent(t);
        return u({
          parse: (n) =>
            '' === n
              ? []
              : n
                  .split(t)
                  .map((n, r) => o(e.parse, n.replaceAll(l, t), `[${r}]`))
                  .filter((e) => null != e),
          serialize: (n) =>
            n
              .map((n) =>
                (e.serialize ? e.serialize(n) : String(n)).replaceAll(t, l)
              )
              .join(t),
          eq: (e, t) =>
            e === t || (e.length === t.length && e.every((e, l) => n(e, t[l])))
        });
      }
      function h(e) {
        if (0 === e.size) return '';
        let t = [];
        for (let [n, l] of e.entries()) {
          let e = n
            .replace(/#/g, '%23')
            .replace(/&/g, '%26')
            .replace(/\+/g, '%2B')
            .replace(/=/g, '%3D')
            .replace(/\?/g, '%3F');
          t.push(
            `${e}=${l
              .replace(/%/g, '%25')
              .replace(/\+/g, '%2B')
              .replace(/ /g, '+')
              .replace(/#/g, '%23')
              .replace(/&/g, '%26')
              .replace(/"/g, '%22')
              .replace(/'/g, '%27')
              .replace(/`/g, '%60')
              .replace(/</g, '%3C')
              .replace(/>/g, '%3E')}`
          );
        }
        return '?' + t.join('&');
      }
      function b(e) {
        return function (t, n = {}) {
          let [l, r] = w(t)
              ? (function (e) {
                  if ('string' == typeof e) {
                    let [t = '', n] = e.split('?');
                    return [t, new URLSearchParams(n)];
                  }
                  return e instanceof URLSearchParams
                    ? ['', e]
                    : [e.origin + e.pathname, e.searchParams];
                })(t)
              : ['', new URLSearchParams()],
            o = w(t) ? n : t;
          for (let t in e) {
            let n = e[t],
              l = o[t];
            n &&
              void 0 !== l &&
              (null === l ? r.delete(t) : r.set(t, n.serialize(l)));
          }
          return l + h(r);
        };
      }
      function w(e) {
        return (
          'string' == typeof e ||
          e instanceof URLSearchParams ||
          e instanceof URL
        );
      }
      var S = {
        409: 'Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` was about to load on top.',
        429: 'URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O',
        500: "Empty search params cache. Search params can't be accessed in Layouts.",
        501: 'Search params cache already populated. Have you called `parse` twice?'
      };
      function C(e) {
        return `[nuqs] ${S[e]}
  See https://err.47ng.com/NUQS-${e}`;
      }
    },
    11699: function (e, t, n) {
      n.d(t, {
        U: function () {
          return r.U;
        },
        v1: function () {
          return w;
        }
      });
      var l,
        r = n(69649),
        o = n(16463),
        i = n(2265);
      r.Oi, r.U, r.Lv, r.AE, r.Ub, r.mF, r.jx, r.WJ, r.S$;
      var u = (0, r.Uo)(),
        a = new Map(),
        s = { history: 'replace', scroll: !1, shallow: !0, throttleMs: u },
        d = new Set(),
        g = 0,
        c = null;
      function f(e) {
        return a.get(e) ?? null;
      }
      function p(e, t) {
        return (e.split('#')[0] ?? '') + (0, r.R)(t) + location.hash;
      }
      var m = Symbol('__nuqs__SYNC__'),
        v = '__nuqs__NO_SYNC__',
        h = Symbol('__nuqs__NOTIFY__'),
        b = {
          all: (l = l || new Map()),
          on: function (e, t) {
            var n = l.get(e);
            n ? n.push(t) : l.set(e, [t]);
          },
          off: function (e, t) {
            var n = l.get(e);
            n && (t ? n.splice(n.indexOf(t) >>> 0, 1) : l.set(e, []));
          },
          emit: function (e, t) {
            var n = l.get(e);
            n &&
              n.slice().map(function (e) {
                e(t);
              }),
              (n = l.get('*')) &&
                n.slice().map(function (n) {
                  n(e, t);
                });
          }
        };
      function w(
        e,
        {
          history: t = 'replace',
          shallow: n = !0,
          scroll: l = !1,
          throttleMs: h = u,
          parse: w = (e) => e,
          serialize: S = String,
          eq: C = (e, t) => e === t,
          defaultValue: R,
          clearOnDefault: y = !1,
          startTransition: E
        } = {
          history: 'replace',
          scroll: !1,
          shallow: !0,
          throttleMs: u,
          parse: (e) => e,
          serialize: String,
          eq: (e, t) => e === t,
          clearOnDefault: !1,
          defaultValue: void 0
        }
      ) {
        let F = (0, o.useRouter)(),
          M = (0, o.useSearchParams)(),
          P = i.useRef(null),
          [I, x] = i.useState(() => {
            let t = f(e),
              n = M?.get(e) ?? null,
              l = t ?? n;
            return (P.current = l), null === l ? null : (0, r.As)(w, l, e);
          }),
          A = i.useRef(I);
        (0, r.fF)(
          '[nuqs `%s`] render - state: %O, iSP: %s',
          e,
          I,
          M?.get(e) ?? null
        ),
          i.useEffect(() => {
            if (window.next?.version !== '14.0.3') return;
            let t = M.get(e) ?? null;
            if (t === P.current) return;
            let n = null === t ? null : (0, r.As)(w, t, e);
            (0, r.fF)('[nuqs `%s`] syncFromUseSearchParams %O', e, n),
              (A.current = n),
              (P.current = t),
              x(n);
          }, [M?.get(e), e]),
          i.useInsertionEffect(() => {
            function t({ state: t, query: n }) {
              (0, r.fF)('[nuqs `%s`] updateInternalState %O', e, t),
                (A.current = t),
                (P.current = n),
                x(t);
            }
            function n(n) {
              let l = n.get(e);
              if (l === P.current) return;
              let o = null === l ? null : (0, r.As)(w, l, e);
              (0, r.fF)('[nuqs `%s`] syncFromURL %O', e, o),
                t({ state: o, query: l });
            }
            return (
              (0, r.fF)('[nuqs `%s`] subscribing to sync', e),
              b.on(m, n),
              b.on(e, t),
              () => {
                (0, r.fF)('[nuqs `%s`] unsubscribing from sync', e),
                  b.off(m, n),
                  b.off(e, t);
              }
            );
          }, [e]);
        let V = i.useCallback(
          (o, i = {}) => {
            let f = 'function' == typeof o ? o(A.current ?? R ?? null) : o;
            return (
              (i.clearOnDefault ?? y) &&
                null !== f &&
                void 0 !== R &&
                C(f, R) &&
                (f = null),
              (P.current = (function (e, t, n, l) {
                let o = null === t ? null : n(t);
                return (
                  (0, r.fF)('[nuqs queue] Enqueueing %s=%s %O', e, o, l),
                  a.set(e, o),
                  'push' === l.history && (s.history = 'push'),
                  l.scroll && (s.scroll = !0),
                  !1 === l.shallow && (s.shallow = !1),
                  l.startTransition &&
                    (d.add(l.startTransition), (s.shallow = !1)),
                  (s.throttleMs = Math.max(
                    l.throttleMs ?? u,
                    Number.isFinite(s.throttleMs) ? s.throttleMs : 0
                  )),
                  o
                );
              })(e, f, S, {
                history: i.history ?? t,
                shallow: i.shallow ?? n,
                scroll: i.scroll ?? l,
                throttleMs: i.throttleMs ?? h,
                startTransition: i.startTransition ?? E
              })),
              b.emit(e, { state: f, query: P.current }),
              null === c &&
                (c = new Promise((e, t) => {
                  if (!Number.isFinite(s.throttleMs)) {
                    (0, r.fF)(
                      '[nuqs queue] Skipping flush due to throttleMs=Infinity'
                    ),
                      e(new URLSearchParams(location.search)),
                      setTimeout(() => {
                        c = null;
                      }, 0);
                    return;
                  }
                  function n() {
                    g = performance.now();
                    let [n, l] = (function (e) {
                      let t = new URLSearchParams(location.search);
                      if (0 === a.size) return [t, null];
                      let n = Array.from(a.entries()),
                        l = { ...s },
                        o = Array.from(d);
                      for (let [e, o] of (a.clear(),
                      d.clear(),
                      (s.history = 'replace'),
                      (s.scroll = !1),
                      (s.shallow = !0),
                      (s.throttleMs = u),
                      (0, r.fF)(
                        '[nuqs queue] Flushing queue %O with options %O',
                        n,
                        l
                      ),
                      n))
                        null === o ? t.delete(e) : t.set(e, o);
                      try {
                        let n = window.next?.router;
                        if ('string' == typeof n?.state?.asPath) {
                          let e = p(n.state.asPath.split('?')[0] ?? '', t);
                          (0, r.fF)('[nuqs queue (pages)] Updating url: %s', e),
                            ('push' === l.history ? n.push : n.replace).call(
                              n,
                              e,
                              e,
                              { scroll: l.scroll, shallow: l.shallow }
                            );
                        } else {
                          let n = p(location.origin + location.pathname, t);
                          (0, r.fF)('[nuqs queue (app)] Updating url: %s', n);
                          let i =
                              'push' === l.history
                                ? history.pushState
                                : history.replaceState,
                            u =
                              (window.next?.version ?? '') >= '14.1.0'
                                ? null
                                : history.state;
                          i.call(history, u, v, n),
                            l.scroll && window.scrollTo(0, 0),
                            l.shallow ||
                              (function (e, t) {
                                let n = (l) => {
                                  if (l === e.length) return t();
                                  let r = e[l];
                                  if (!r)
                                    throw Error('Invalid transition function');
                                  r(() => n(l + 1));
                                };
                                n(0);
                              })(o, () => {
                                e.replace(n, { scroll: !1 });
                              });
                        }
                        return [t, null];
                      } catch (e) {
                        return (
                          console.error(
                            (0, r.vU)(429),
                            n.map(([e]) => e).join(),
                            e
                          ),
                          [t, e]
                        );
                      }
                    })(F);
                    null === l ? e(n) : t(n), (c = null);
                  }
                  setTimeout(function () {
                    let e = performance.now() - g,
                      t = s.throttleMs,
                      l = Math.max(0, Math.min(t, t - e));
                    (0, r.fF)(
                      '[nuqs queue] Scheduling flush in %f ms. Throttled at %f ms',
                      l,
                      t
                    ),
                      0 === l ? n() : setTimeout(n, l);
                  }, 0);
                })),
              c
            );
          },
          [e, t, n, l, h, E]
        );
        return [I ?? R ?? null, V];
      }
      'object' == typeof history &&
        (function () {
          let e = '1.19.1',
            t = history.__nuqs_patched;
          if (t) {
            t !== e && console.error((0, r.vU)(409), t, e);
            return;
          }
          for (let t of ((0, r.fF)('[nuqs] Patching history with %s', e),
          ['pushState', 'replaceState'])) {
            let e = history[t].bind(history);
            history[t] = function (n, l, o) {
              if (!o)
                return (
                  (0, r.fF)('[nuqs] history.%s(null) (%s) %O', t, l, n),
                  e(n, l, o)
                );
              let i = l === v ? 'internal' : 'external',
                u = new URL(o, location.origin).searchParams;
              if (
                ((0, r.fF)('[nuqs] history.%s(%s) (%s) %O', t, o, i, n),
                'external' === i)
              ) {
                for (let [e, t] of u.entries()) {
                  let n = f(e);
                  null !== n &&
                    n !== t &&
                    ((0, r.fF)(
                      '[nuqs] Overwrite detected for key: %s, Server: %s, queue: %s',
                      e,
                      t,
                      n
                    ),
                    u.set(e, n));
                }
                setTimeout(() => {
                  (0, r.fF)(
                    '[nuqs] External history.%s call: triggering sync with %s',
                    t,
                    u
                  ),
                    b.emit(m, u),
                    b.emit(h, { search: u, source: i });
                }, 0);
              } else
                setTimeout(() => {
                  b.emit(h, { search: u, source: i });
                }, 0);
              return e(n, l === v ? '' : l, o);
            };
          }
          Object.defineProperty(history, '__nuqs_patched', {
            value: e,
            writable: !1,
            enumerable: !1,
            configurable: !1
          });
        })();
    },
    54766: function (e, t, n) {
      n.d(t, {
        Cg: function () {
          return i;
        },
        Qx: function () {
          return l.Qx;
        },
        U: function () {
          return l.U;
        },
        Oi: function () {
          return l.Oi;
        }
      });
      var l = n(69649),
        r = n(2265),
        o = Symbol('Input');
      function i(e) {
        let t = (0, r.cache)(() => ({ searchParams: {} }));
        function n() {
          let { searchParams: e } = t();
          if (0 === Object.keys(e).length) throw Error((0, l.vU)(500));
          return e;
        }
        return {
          parse: function (r) {
            let i = t();
            if (Object.isFrozen(i.searchParams)) {
              if (
                i[o] &&
                (function (e, t) {
                  if (e === t) return !0;
                  if (Object.keys(e).length !== Object.keys(t).length)
                    return !1;
                  for (let n in e) if (e[n] !== t[n]) return !1;
                  return !0;
                })(r, i[o])
              )
                return n();
              throw Error((0, l.vU)(501));
            }
            for (let t in e) {
              let n = e[t];
              i.searchParams[t] = n.parseServerSide(r[t]);
            }
            return (i[o] = r), Object.freeze(i.searchParams);
          },
          get: function (e) {
            let { searchParams: n } = t(),
              r = n[e];
            if (void 0 === r)
              throw Error(
                (0, l.vU)(500) +
                  `
  in get(${String(e)})`
              );
            return r;
          },
          all: n
        };
      }
    }
  }
]);
