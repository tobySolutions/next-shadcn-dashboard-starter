// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_86356'] = (e, r, t) => {
    'use strict';
    t.d(r, { B: () => l, x: () => i });
    var a = t(56087);
    let n = (0, a.createProxy)(
        String.raw`/Users/mac/Desktop/next-js-test/next-shadcn-dashboard-starter/components/ui/scroll-area.tsx`
      ),
      { __esModule: s, $$typeof: o } = n;
    n.default;
    let i = (0, a.createProxy)(
        String.raw`/Users/mac/Desktop/next-js-test/next-shadcn-dashboard-starter/components/ui/scroll-area.tsx#ScrollArea`
      ),
      l = (0, a.createProxy)(
        String.raw`/Users/mac/Desktop/next-js-test/next-shadcn-dashboard-starter/components/ui/scroll-area.tsx#ScrollBar`
      );
  };
  __namedExportsObject['__chunk_18656'] = (e, r, t) => {
    'use strict';
    t.d(r, { Z: () => s });
    var a = t(23393);
    t(68610);
    var n = t(86356);
    function s({ children: e2, scrollable: r2 = true }) {
      return (0, a.jsx)(a.Fragment, {
        children: r2
          ? (0, a.jsx)(n.x, {
              className: 'h-[calc(100dvh-52px)]',
              children: (0, a.jsx)('div', {
                className: 'h-full p-4 md:px-6',
                children: e2
              })
            })
          : (0, a.jsx)('div', { className: 'h-full p-4 md:px-6', children: e2 })
      });
    }
  };
  __namedExportsObject['__chunk_30878'] = (e, r, t) => {
    'use strict';
    t.r(r), t.d(r, { ScrollArea: () => i, ScrollBar: () => l });
    var a = t(5486),
      n = t(32428),
      s = t(80861),
      o = t(82087);
    let i = n.forwardRef(({ className: e2, children: r2, ...t2 }, n2) =>
      (0, a.jsxs)(s.fC, {
        ref: n2,
        className: (0, o.cn)('relative', e2),
        ...t2,
        children: [
          (0, a.jsx)(s.l_, {
            className: 'h-full w-full rounded-[inherit]',
            children: r2
          }),
          (0, a.jsx)(l, {}),
          (0, a.jsx)(s.Ns, {})
        ]
      })
    );
    i.displayName = s.fC.displayName;
    let l = n.forwardRef(
      ({ className: e2, orientation: r2 = 'vertical', ...t2 }, n2) =>
        (0, a.jsx)(s.gb, {
          ref: n2,
          orientation: r2,
          className: (0, o.cn)(
            'flex touch-none select-none transition-colors',
            'vertical' === r2 &&
              'h-full w-2.5 border-l border-l-transparent p-[1px]',
            'horizontal' === r2 &&
              'h-2.5 flex-col border-t border-t-transparent p-[1px]',
            e2
          ),
          ...t2,
          children: (0, a.jsx)(s.q4, {
            className: 'relative flex-1 rounded-full bg-border'
          })
        })
    );
    l.displayName = s.gb.displayName;
  };
  __namedExportsObject['__chunk_54138'] = (e, t, r) => {
    r.d(t, { b: () => o });
    var n = r(32428);
    let o = (null == globalThis ? void 0 : globalThis.document)
      ? n.useLayoutEffect
      : () => {};
  };
  __namedExportsObject['__chunk_56719'] = (e, t, r) => {
    r.d(t, { e: () => l });
    var n = r(32428),
      o = r(19376);
    function l(e2, t2 = null == globalThis ? void 0 : globalThis.document) {
      let r2 = (0, o.W)(e2);
      (0, n.useEffect)(() => {
        let e3 = (e4) => {
          'Escape' === e4.key && r2(e4);
        };
        return (
          t2.addEventListener('keydown', e3),
          () => t2.removeEventListener('keydown', e3)
        );
      }, [r2, t2]);
    }
  };
  __namedExportsObject['__chunk_54007'] = (e, t, r) => {
    r.d(t, { T: () => l });
    var n = r(32428),
      o = r(19376);
    function l({ prop: e2, defaultProp: t2, onChange: r2 = () => {} }) {
      let [l2, i] = (function ({ defaultProp: e3, onChange: t3 }) {
          let r3 = (0, n.useState)(e3),
            [l3] = r3,
            i2 = (0, n.useRef)(l3),
            a2 = (0, o.W)(t3);
          return (
            (0, n.useEffect)(() => {
              i2.current !== l3 && (a2(l3), (i2.current = l3));
            }, [l3, i2, a2]),
            r3
          );
        })({ defaultProp: t2, onChange: r2 }),
        a = void 0 !== e2,
        c = a ? e2 : l2,
        u = (0, o.W)(r2);
      return [
        c,
        (0, n.useCallback)(
          (t3) => {
            if (a) {
              let r3 = 'function' == typeof t3 ? t3(e2) : t3;
              r3 !== e2 && u(r3);
            } else i(t3);
          },
          [a, e2, i, u]
        )
      ];
    }
  };
  __namedExportsObject['__chunk_19376'] = (e, t, r) => {
    r.d(t, { W: () => o });
    var n = r(32428);
    function o(e2) {
      let t2 = (0, n.useRef)(e2);
      return (
        (0, n.useEffect)(() => {
          t2.current = e2;
        }),
        (0, n.useMemo)(
          () =>
            (...e3) => {
              var r2;
              return null === (r2 = t2.current) || void 0 === r2
                ? void 0
                : r2.call(t2, ...e3);
            },
          []
        )
      );
    }
  };
  __namedExportsObject['__chunk_80861'] = (e, t, r) => {
    r.d(t, { Ns: () => j, fC: () => F, gb: () => y, l_: () => $, q4: () => x });
    var n = r(97957),
      o = r(32428),
      l = r(79118),
      i = r(92347),
      a = r(15521),
      c = r(62820),
      u = r(19376),
      s = r(86127),
      d = r(54138),
      f = r(37813),
      v = r(10730);
    let p = 'ScrollArea',
      [h, m] = (0, a.b)(p),
      [w, b] = h(p),
      E = (0, o.forwardRef)((e2, t2) => {
        let {
            __scopeScrollArea: r2,
            type: i2 = 'hover',
            dir: a2,
            scrollHideDelay: u2 = 600,
            ...d2
          } = e2,
          [f2, v2] = (0, o.useState)(null),
          [p2, h2] = (0, o.useState)(null),
          [m2, b2] = (0, o.useState)(null),
          [E2, g2] = (0, o.useState)(null),
          [S2, y2] = (0, o.useState)(null),
          [C2, T2] = (0, o.useState)(0),
          [R2, N2] = (0, o.useState)(0),
          [P2, L2] = (0, o.useState)(false),
          [_2, A2] = (0, o.useState)(false),
          M2 = (0, c.e)(t2, (e3) => v2(e3)),
          W2 = (0, s.gm)(a2);
        return (0, o.createElement)(
          w,
          {
            scope: r2,
            type: i2,
            dir: W2,
            scrollHideDelay: u2,
            scrollArea: f2,
            viewport: p2,
            onViewportChange: h2,
            content: m2,
            onContentChange: b2,
            scrollbarX: E2,
            onScrollbarXChange: g2,
            scrollbarXEnabled: P2,
            onScrollbarXEnabledChange: L2,
            scrollbarY: S2,
            onScrollbarYChange: y2,
            scrollbarYEnabled: _2,
            onScrollbarYEnabledChange: A2,
            onCornerWidthChange: T2,
            onCornerHeightChange: N2
          },
          (0, o.createElement)(
            l.WV.div,
            (0, n.Z)({ dir: W2 }, d2, {
              ref: M2,
              style: {
                position: 'relative',
                '--radix-scroll-area-corner-width': C2 + 'px',
                '--radix-scroll-area-corner-height': R2 + 'px',
                ...e2.style
              }
            })
          )
        );
      }),
      g = (0, o.forwardRef)((e2, t2) => {
        let { __scopeScrollArea: r2, children: i2, ...a2 } = e2,
          u2 = b('ScrollAreaViewport', r2),
          s2 = (0, o.useRef)(null),
          d2 = (0, c.e)(t2, s2, u2.onViewportChange);
        return (0, o.createElement)(
          o.Fragment,
          null,
          (0, o.createElement)('style', {
            dangerouslySetInnerHTML: {
              __html:
                '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}'
            }
          }),
          (0, o.createElement)(
            l.WV.div,
            (0, n.Z)({ 'data-radix-scroll-area-viewport': '' }, a2, {
              ref: d2,
              style: {
                overflowX: u2.scrollbarXEnabled ? 'scroll' : 'hidden',
                overflowY: u2.scrollbarYEnabled ? 'scroll' : 'hidden',
                ...e2.style
              }
            }),
            (0, o.createElement)(
              'div',
              {
                ref: u2.onContentChange,
                style: { minWidth: '100%', display: 'table' }
              },
              i2
            )
          )
        );
      }),
      S = 'ScrollAreaScrollbar',
      y = (0, o.forwardRef)((e2, t2) => {
        let { forceMount: r2, ...l2 } = e2,
          i2 = b(S, e2.__scopeScrollArea),
          { onScrollbarXEnabledChange: a2, onScrollbarYEnabledChange: c2 } = i2,
          u2 = 'horizontal' === e2.orientation;
        return (
          (0, o.useEffect)(
            () => (
              u2 ? a2(true) : c2(true),
              () => {
                u2 ? a2(false) : c2(false);
              }
            ),
            [u2, a2, c2]
          ),
          'hover' === i2.type
            ? (0, o.createElement)(
                C,
                (0, n.Z)({}, l2, { ref: t2, forceMount: r2 })
              )
            : 'scroll' === i2.type
            ? (0, o.createElement)(
                T,
                (0, n.Z)({}, l2, { ref: t2, forceMount: r2 })
              )
            : 'auto' === i2.type
            ? (0, o.createElement)(
                R,
                (0, n.Z)({}, l2, { ref: t2, forceMount: r2 })
              )
            : 'always' === i2.type
            ? (0, o.createElement)(N, (0, n.Z)({}, l2, { ref: t2 }))
            : null
        );
      }),
      C = (0, o.forwardRef)((e2, t2) => {
        let { forceMount: r2, ...l2 } = e2,
          a2 = b(S, e2.__scopeScrollArea),
          [c2, u2] = (0, o.useState)(false);
        return (
          (0, o.useEffect)(() => {
            let e3 = a2.scrollArea,
              t3 = 0;
            if (e3) {
              let r3 = () => {
                  window.clearTimeout(t3), u2(true);
                },
                n2 = () => {
                  t3 = window.setTimeout(() => u2(false), a2.scrollHideDelay);
                };
              return (
                e3.addEventListener('pointerenter', r3),
                e3.addEventListener('pointerleave', n2),
                () => {
                  window.clearTimeout(t3),
                    e3.removeEventListener('pointerenter', r3),
                    e3.removeEventListener('pointerleave', n2);
                }
              );
            }
          }, [a2.scrollArea, a2.scrollHideDelay]),
          (0, o.createElement)(
            i.z,
            { present: r2 || c2 },
            (0, o.createElement)(
              R,
              (0, n.Z)({ 'data-state': c2 ? 'visible' : 'hidden' }, l2, {
                ref: t2
              })
            )
          )
        );
      }),
      T = (0, o.forwardRef)((e2, t2) => {
        var r2, l2;
        let { forceMount: a2, ...c2 } = e2,
          u2 = b(S, e2.__scopeScrollArea),
          s2 = 'horizontal' === e2.orientation,
          d2 = V(() => p2('SCROLL_END'), 100),
          [f2, p2] =
            ((r2 = 'hidden'),
            (l2 = {
              hidden: { SCROLL: 'scrolling' },
              scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
              interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
              idle: {
                HIDE: 'hidden',
                SCROLL: 'scrolling',
                POINTER_ENTER: 'interacting'
              }
            }),
            (0, o.useReducer)((e3, t3) => {
              let r3 = l2[e3][t3];
              return null != r3 ? r3 : e3;
            }, r2));
        return (
          (0, o.useEffect)(() => {
            if ('idle' === f2) {
              let e3 = window.setTimeout(() => p2('HIDE'), u2.scrollHideDelay);
              return () => window.clearTimeout(e3);
            }
          }, [f2, u2.scrollHideDelay, p2]),
          (0, o.useEffect)(() => {
            let e3 = u2.viewport,
              t3 = s2 ? 'scrollLeft' : 'scrollTop';
            if (e3) {
              let r3 = e3[t3],
                n2 = () => {
                  let n3 = e3[t3];
                  r3 !== n3 && (p2('SCROLL'), d2()), (r3 = n3);
                };
              return (
                e3.addEventListener('scroll', n2),
                () => e3.removeEventListener('scroll', n2)
              );
            }
          }, [u2.viewport, s2, p2, d2]),
          (0, o.createElement)(
            i.z,
            { present: a2 || 'hidden' !== f2 },
            (0, o.createElement)(
              N,
              (0, n.Z)(
                { 'data-state': 'hidden' === f2 ? 'hidden' : 'visible' },
                c2,
                {
                  ref: t2,
                  onPointerEnter: (0, v.M)(e2.onPointerEnter, () =>
                    p2('POINTER_ENTER')
                  ),
                  onPointerLeave: (0, v.M)(e2.onPointerLeave, () =>
                    p2('POINTER_LEAVE')
                  )
                }
              )
            )
          )
        );
      }),
      R = (0, o.forwardRef)((e2, t2) => {
        let r2 = b(S, e2.__scopeScrollArea),
          { forceMount: l2, ...a2 } = e2,
          [c2, u2] = (0, o.useState)(false),
          s2 = 'horizontal' === e2.orientation,
          d2 = V(() => {
            if (r2.viewport) {
              let e3 = r2.viewport.offsetWidth < r2.viewport.scrollWidth,
                t3 = r2.viewport.offsetHeight < r2.viewport.scrollHeight;
              u2(s2 ? e3 : t3);
            }
          }, 10);
        return (
          B(r2.viewport, d2),
          B(r2.content, d2),
          (0, o.createElement)(
            i.z,
            { present: l2 || c2 },
            (0, o.createElement)(
              N,
              (0, n.Z)({ 'data-state': c2 ? 'visible' : 'hidden' }, a2, {
                ref: t2
              })
            )
          )
        );
      }),
      N = (0, o.forwardRef)((e2, t2) => {
        let { orientation: r2 = 'vertical', ...l2 } = e2,
          i2 = b(S, e2.__scopeScrollArea),
          a2 = (0, o.useRef)(null),
          c2 = (0, o.useRef)(0),
          [u2, s2] = (0, o.useState)({
            content: 0,
            viewport: 0,
            scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
          }),
          d2 = Z(u2.viewport, u2.content),
          f2 = {
            ...l2,
            sizes: u2,
            onSizesChange: s2,
            hasThumb: !!(d2 > 0 && d2 < 1),
            onThumbChange: (e3) => (a2.current = e3),
            onThumbPointerUp: () => (c2.current = 0),
            onThumbPointerDown: (e3) => (c2.current = e3)
          };
        function v2(e3, t3) {
          return (function (e4, t4, r3, n2 = 'ltr') {
            let o2 = U(r3),
              l3 = t4 || o2 / 2,
              i3 = r3.scrollbar.paddingStart + l3,
              a3 = r3.scrollbar.size - r3.scrollbar.paddingEnd - (o2 - l3),
              c3 = r3.content - r3.viewport;
            return Y([i3, a3], 'ltr' === n2 ? [0, c3] : [-1 * c3, 0])(e4);
          })(e3, c2.current, u2, t3);
        }
        return 'horizontal' === r2
          ? (0, o.createElement)(
              P,
              (0, n.Z)({}, f2, {
                ref: t2,
                onThumbPositionChange: () => {
                  if (i2.viewport && a2.current) {
                    let e3 = X(i2.viewport.scrollLeft, u2, i2.dir);
                    a2.current.style.transform = `translate3d(${e3}px, 0, 0)`;
                  }
                },
                onWheelScroll: (e3) => {
                  i2.viewport && (i2.viewport.scrollLeft = e3);
                },
                onDragScroll: (e3) => {
                  i2.viewport && (i2.viewport.scrollLeft = v2(e3, i2.dir));
                }
              })
            )
          : 'vertical' === r2
          ? (0, o.createElement)(
              L,
              (0, n.Z)({}, f2, {
                ref: t2,
                onThumbPositionChange: () => {
                  if (i2.viewport && a2.current) {
                    let e3 = X(i2.viewport.scrollTop, u2);
                    a2.current.style.transform = `translate3d(0, ${e3}px, 0)`;
                  }
                },
                onWheelScroll: (e3) => {
                  i2.viewport && (i2.viewport.scrollTop = e3);
                },
                onDragScroll: (e3) => {
                  i2.viewport && (i2.viewport.scrollTop = v2(e3));
                }
              })
            )
          : null;
      }),
      P = (0, o.forwardRef)((e2, t2) => {
        let { sizes: r2, onSizesChange: l2, ...i2 } = e2,
          a2 = b(S, e2.__scopeScrollArea),
          [u2, s2] = (0, o.useState)(),
          d2 = (0, o.useRef)(null),
          f2 = (0, c.e)(t2, d2, a2.onScrollbarXChange);
        return (
          (0, o.useEffect)(() => {
            d2.current && s2(getComputedStyle(d2.current));
          }, [d2]),
          (0, o.createElement)(
            M,
            (0, n.Z)({ 'data-orientation': 'horizontal' }, i2, {
              ref: f2,
              sizes: r2,
              style: {
                bottom: 0,
                left:
                  'rtl' === a2.dir
                    ? 'var(--radix-scroll-area-corner-width)'
                    : 0,
                right:
                  'ltr' === a2.dir
                    ? 'var(--radix-scroll-area-corner-width)'
                    : 0,
                '--radix-scroll-area-thumb-width': U(r2) + 'px',
                ...e2.style
              },
              onThumbPointerDown: (t3) => e2.onThumbPointerDown(t3.x),
              onDragScroll: (t3) => e2.onDragScroll(t3.x),
              onWheelScroll: (t3, r3) => {
                if (a2.viewport) {
                  let n2 = a2.viewport.scrollLeft + t3.deltaX;
                  e2.onWheelScroll(n2),
                    (function (e3, t4) {
                      return e3 > 0 && e3 < t4;
                    })(n2, r3) && t3.preventDefault();
                }
              },
              onResize: () => {
                d2.current &&
                  a2.viewport &&
                  u2 &&
                  l2({
                    content: a2.viewport.scrollWidth,
                    viewport: a2.viewport.offsetWidth,
                    scrollbar: {
                      size: d2.current.clientWidth,
                      paddingStart: I(u2.paddingLeft),
                      paddingEnd: I(u2.paddingRight)
                    }
                  });
              }
            })
          )
        );
      }),
      L = (0, o.forwardRef)((e2, t2) => {
        let { sizes: r2, onSizesChange: l2, ...i2 } = e2,
          a2 = b(S, e2.__scopeScrollArea),
          [u2, s2] = (0, o.useState)(),
          d2 = (0, o.useRef)(null),
          f2 = (0, c.e)(t2, d2, a2.onScrollbarYChange);
        return (
          (0, o.useEffect)(() => {
            d2.current && s2(getComputedStyle(d2.current));
          }, [d2]),
          (0, o.createElement)(
            M,
            (0, n.Z)({ 'data-orientation': 'vertical' }, i2, {
              ref: f2,
              sizes: r2,
              style: {
                top: 0,
                right: 'ltr' === a2.dir ? 0 : void 0,
                left: 'rtl' === a2.dir ? 0 : void 0,
                bottom: 'var(--radix-scroll-area-corner-height)',
                '--radix-scroll-area-thumb-height': U(r2) + 'px',
                ...e2.style
              },
              onThumbPointerDown: (t3) => e2.onThumbPointerDown(t3.y),
              onDragScroll: (t3) => e2.onDragScroll(t3.y),
              onWheelScroll: (t3, r3) => {
                if (a2.viewport) {
                  let n2 = a2.viewport.scrollTop + t3.deltaY;
                  e2.onWheelScroll(n2),
                    (function (e3, t4) {
                      return e3 > 0 && e3 < t4;
                    })(n2, r3) && t3.preventDefault();
                }
              },
              onResize: () => {
                d2.current &&
                  a2.viewport &&
                  u2 &&
                  l2({
                    content: a2.viewport.scrollHeight,
                    viewport: a2.viewport.offsetHeight,
                    scrollbar: {
                      size: d2.current.clientHeight,
                      paddingStart: I(u2.paddingTop),
                      paddingEnd: I(u2.paddingBottom)
                    }
                  });
              }
            })
          )
        );
      }),
      [_, A] = h(S),
      M = (0, o.forwardRef)((e2, t2) => {
        let {
            __scopeScrollArea: r2,
            sizes: i2,
            hasThumb: a2,
            onThumbChange: s2,
            onThumbPointerUp: d2,
            onThumbPointerDown: f2,
            onThumbPositionChange: p2,
            onDragScroll: h2,
            onWheelScroll: m2,
            onResize: w2,
            ...E2
          } = e2,
          g2 = b(S, r2),
          [y2, C2] = (0, o.useState)(null),
          T2 = (0, c.e)(t2, (e3) => C2(e3)),
          R2 = (0, o.useRef)(null),
          N2 = (0, o.useRef)(''),
          P2 = g2.viewport,
          L2 = i2.content - i2.viewport,
          A2 = (0, u.W)(m2),
          M2 = (0, u.W)(p2),
          W2 = V(w2, 10);
        function x2(e3) {
          R2.current &&
            h2({
              x: e3.clientX - R2.current.left,
              y: e3.clientY - R2.current.top
            });
        }
        return (
          (0, o.useEffect)(() => {
            let e3 = (e4) => {
              let t3 = e4.target;
              (null == y2 ? void 0 : y2.contains(t3)) && A2(e4, L2);
            };
            return (
              document.addEventListener('wheel', e3, { passive: false }),
              () =>
                document.removeEventListener('wheel', e3, { passive: false })
            );
          }, [P2, y2, L2, A2]),
          (0, o.useEffect)(M2, [i2, M2]),
          B(y2, W2),
          B(g2.content, W2),
          (0, o.createElement)(
            _,
            {
              scope: r2,
              scrollbar: y2,
              hasThumb: a2,
              onThumbChange: (0, u.W)(s2),
              onThumbPointerUp: (0, u.W)(d2),
              onThumbPositionChange: M2,
              onThumbPointerDown: (0, u.W)(f2)
            },
            (0, o.createElement)(
              l.WV.div,
              (0, n.Z)({}, E2, {
                ref: T2,
                style: { position: 'absolute', ...E2.style },
                onPointerDown: (0, v.M)(e2.onPointerDown, (e3) => {
                  0 === e3.button &&
                    (e3.target.setPointerCapture(e3.pointerId),
                    (R2.current = y2.getBoundingClientRect()),
                    (N2.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = 'none'),
                    g2.viewport && (g2.viewport.style.scrollBehavior = 'auto'),
                    x2(e3));
                }),
                onPointerMove: (0, v.M)(e2.onPointerMove, x2),
                onPointerUp: (0, v.M)(e2.onPointerUp, (e3) => {
                  let t3 = e3.target;
                  t3.hasPointerCapture(e3.pointerId) &&
                    t3.releasePointerCapture(e3.pointerId),
                    (document.body.style.webkitUserSelect = N2.current),
                    g2.viewport && (g2.viewport.style.scrollBehavior = ''),
                    (R2.current = null);
                })
              })
            )
          )
        );
      }),
      W = 'ScrollAreaThumb',
      x = (0, o.forwardRef)((e2, t2) => {
        let { forceMount: r2, ...l2 } = e2,
          a2 = A(W, e2.__scopeScrollArea);
        return (0, o.createElement)(
          i.z,
          { present: r2 || a2.hasThumb },
          (0, o.createElement)(D, (0, n.Z)({ ref: t2 }, l2))
        );
      }),
      D = (0, o.forwardRef)((e2, t2) => {
        let { __scopeScrollArea: r2, style: i2, ...a2 } = e2,
          u2 = b(W, r2),
          s2 = A(W, r2),
          { onThumbPositionChange: d2 } = s2,
          f2 = (0, c.e)(t2, (e3) => s2.onThumbChange(e3)),
          p2 = (0, o.useRef)(),
          h2 = V(() => {
            p2.current && (p2.current(), (p2.current = void 0));
          }, 100);
        return (
          (0, o.useEffect)(() => {
            let e3 = u2.viewport;
            if (e3) {
              let t3 = () => {
                if ((h2(), !p2.current)) {
                  let t4 = H(e3, d2);
                  (p2.current = t4), d2();
                }
              };
              return (
                d2(),
                e3.addEventListener('scroll', t3),
                () => e3.removeEventListener('scroll', t3)
              );
            }
          }, [u2.viewport, h2, d2]),
          (0, o.createElement)(
            l.WV.div,
            (0, n.Z)({ 'data-state': s2.hasThumb ? 'visible' : 'hidden' }, a2, {
              ref: f2,
              style: {
                width: 'var(--radix-scroll-area-thumb-width)',
                height: 'var(--radix-scroll-area-thumb-height)',
                ...i2
              },
              onPointerDownCapture: (0, v.M)(e2.onPointerDownCapture, (e3) => {
                let t3 = e3.target.getBoundingClientRect(),
                  r3 = e3.clientX - t3.left,
                  n2 = e3.clientY - t3.top;
                s2.onThumbPointerDown({ x: r3, y: n2 });
              }),
              onPointerUp: (0, v.M)(e2.onPointerUp, s2.onThumbPointerUp)
            })
          )
        );
      }),
      k = 'ScrollAreaCorner',
      z = (0, o.forwardRef)((e2, t2) => {
        let r2 = b(k, e2.__scopeScrollArea),
          l2 = !!(r2.scrollbarX && r2.scrollbarY);
        return 'scroll' !== r2.type && l2
          ? (0, o.createElement)(O, (0, n.Z)({}, e2, { ref: t2 }))
          : null;
      }),
      O = (0, o.forwardRef)((e2, t2) => {
        let { __scopeScrollArea: r2, ...i2 } = e2,
          a2 = b(k, r2),
          [c2, u2] = (0, o.useState)(0),
          [s2, d2] = (0, o.useState)(0),
          f2 = !!(c2 && s2);
        return (
          B(a2.scrollbarX, () => {
            var e3;
            let t3 =
              (null === (e3 = a2.scrollbarX) || void 0 === e3
                ? void 0
                : e3.offsetHeight) || 0;
            a2.onCornerHeightChange(t3), d2(t3);
          }),
          B(a2.scrollbarY, () => {
            var e3;
            let t3 =
              (null === (e3 = a2.scrollbarY) || void 0 === e3
                ? void 0
                : e3.offsetWidth) || 0;
            a2.onCornerWidthChange(t3), u2(t3);
          }),
          f2
            ? (0, o.createElement)(
                l.WV.div,
                (0, n.Z)({}, i2, {
                  ref: t2,
                  style: {
                    width: c2,
                    height: s2,
                    position: 'absolute',
                    right: 'ltr' === a2.dir ? 0 : void 0,
                    left: 'rtl' === a2.dir ? 0 : void 0,
                    bottom: 0,
                    ...e2.style
                  }
                })
              )
            : null
        );
      });
    function I(e2) {
      return e2 ? parseInt(e2, 10) : 0;
    }
    function Z(e2, t2) {
      let r2 = e2 / t2;
      return isNaN(r2) ? 0 : r2;
    }
    function U(e2) {
      let t2 = Z(e2.viewport, e2.content),
        r2 = e2.scrollbar.paddingStart + e2.scrollbar.paddingEnd;
      return Math.max((e2.scrollbar.size - r2) * t2, 18);
    }
    function X(e2, t2, r2 = 'ltr') {
      let n2 = U(t2),
        o2 = t2.scrollbar.paddingStart + t2.scrollbar.paddingEnd,
        l2 = t2.scrollbar.size - o2,
        i2 = t2.content - t2.viewport,
        a2 = (0, f.u)(e2, 'ltr' === r2 ? [0, i2] : [-1 * i2, 0]);
      return Y([0, i2], [0, l2 - n2])(a2);
    }
    function Y(e2, t2) {
      return (r2) => {
        if (e2[0] === e2[1] || t2[0] === t2[1]) return t2[0];
        let n2 = (t2[1] - t2[0]) / (e2[1] - e2[0]);
        return t2[0] + n2 * (r2 - e2[0]);
      };
    }
    let H = (e2, t2 = () => {}) => {
      let r2 = { left: e2.scrollLeft, top: e2.scrollTop },
        n2 = 0;
      return (
        !(function o2() {
          let l2 = { left: e2.scrollLeft, top: e2.scrollTop },
            i2 = r2.left !== l2.left,
            a2 = r2.top !== l2.top;
          (i2 || a2) && t2(),
            (r2 = l2),
            (n2 = window.requestAnimationFrame(o2));
        })(),
        () => window.cancelAnimationFrame(n2)
      );
    };
    function V(e2, t2) {
      let r2 = (0, u.W)(e2),
        n2 = (0, o.useRef)(0);
      return (
        (0, o.useEffect)(() => () => window.clearTimeout(n2.current), []),
        (0, o.useCallback)(() => {
          window.clearTimeout(n2.current),
            (n2.current = window.setTimeout(r2, t2));
        }, [r2, t2])
      );
    }
    function B(e2, t2) {
      let r2 = (0, u.W)(t2);
      (0, d.b)(() => {
        let t3 = 0;
        if (e2) {
          let n2 = new ResizeObserver(() => {
            cancelAnimationFrame(t3), (t3 = window.requestAnimationFrame(r2));
          });
          return (
            n2.observe(e2),
            () => {
              window.cancelAnimationFrame(t3), n2.unobserve(e2);
            }
          );
        }
      }, [e2, r2]);
    }
    let F = E,
      $ = g,
      j = z;
  };
  __namedExportsObject['__chunk_92347'] = (e, t, r) => {
    r.d(t, { z: () => a });
    var n = r(32428),
      o = r(58754),
      l = r(62820),
      i = r(54138);
    let a = (e2) => {
      let { present: t2, children: r2 } = e2,
        a2 = (function (e3) {
          var t3, r3;
          let [l2, a3] = (0, n.useState)(),
            u2 = (0, n.useRef)({}),
            s2 = (0, n.useRef)(e3),
            d = (0, n.useRef)('none'),
            [f, v] =
              ((t3 = e3 ? 'mounted' : 'unmounted'),
              (r3 = {
                mounted: {
                  UNMOUNT: 'unmounted',
                  ANIMATION_OUT: 'unmountSuspended'
                },
                unmountSuspended: {
                  MOUNT: 'mounted',
                  ANIMATION_END: 'unmounted'
                },
                unmounted: { MOUNT: 'mounted' }
              }),
              (0, n.useReducer)((e4, t4) => {
                let n2 = r3[e4][t4];
                return null != n2 ? n2 : e4;
              }, t3));
          return (
            (0, n.useEffect)(() => {
              let e4 = c(u2.current);
              d.current = 'mounted' === f ? e4 : 'none';
            }, [f]),
            (0, i.b)(() => {
              let t4 = u2.current,
                r4 = s2.current;
              if (r4 !== e3) {
                let n2 = d.current,
                  o2 = c(t4);
                e3
                  ? v('MOUNT')
                  : 'none' === o2 ||
                    (null == t4 ? void 0 : t4.display) === 'none'
                  ? v('UNMOUNT')
                  : r4 && n2 !== o2
                  ? v('ANIMATION_OUT')
                  : v('UNMOUNT'),
                  (s2.current = e3);
              }
            }, [e3, v]),
            (0, i.b)(() => {
              if (l2) {
                let e4 = (e5) => {
                    let t5 = c(u2.current).includes(e5.animationName);
                    e5.target === l2 &&
                      t5 &&
                      (0, o.flushSync)(() => v('ANIMATION_END'));
                  },
                  t4 = (e5) => {
                    e5.target === l2 && (d.current = c(u2.current));
                  };
                return (
                  l2.addEventListener('animationstart', t4),
                  l2.addEventListener('animationcancel', e4),
                  l2.addEventListener('animationend', e4),
                  () => {
                    l2.removeEventListener('animationstart', t4),
                      l2.removeEventListener('animationcancel', e4),
                      l2.removeEventListener('animationend', e4);
                  }
                );
              }
              v('ANIMATION_END');
            }, [l2, v]),
            {
              isPresent: ['mounted', 'unmountSuspended'].includes(f),
              ref: (0, n.useCallback)((e4) => {
                e4 && (u2.current = getComputedStyle(e4)), a3(e4);
              }, [])
            }
          );
        })(t2),
        u =
          'function' == typeof r2
            ? r2({ present: a2.isPresent })
            : n.Children.only(r2),
        s = (0, l.e)(a2.ref, u.ref);
      return 'function' == typeof r2 || a2.isPresent
        ? (0, n.cloneElement)(u, { ref: s })
        : null;
    };
    function c(e2) {
      return (null == e2 ? void 0 : e2.animationName) || 'none';
    }
    a.displayName = 'Presence';
  };
  __namedExportsObject['__chunk_31871'] = (e, t, r) => {
    r.d(t, { M: () => c });
    var n,
      o = r(32428),
      l = r(54138);
    let i = (n || (n = r.t(o, 2)))['useId'.toString()] || (() => void 0),
      a = 0;
    function c(e2) {
      let [t2, r2] = o.useState(i());
      return (
        (0, l.b)(() => {
          e2 || r2((e3) => (null != e3 ? e3 : String(a++)));
        }, [e2]),
        e2 || (t2 ? `radix-${t2}` : '')
      );
    }
  };
  __namedExportsObject['__chunk_64896'] = (e, t, r) => {
    r.d(t, { EW: () => l });
    var n = r(32428);
    let o = 0;
    function l() {
      (0, n.useEffect)(() => {
        var e2, t2;
        let r2 = document.querySelectorAll('[data-radix-focus-guard]');
        return (
          document.body.insertAdjacentElement(
            'afterbegin',
            null !== (e2 = r2[0]) && void 0 !== e2 ? e2 : i()
          ),
          document.body.insertAdjacentElement(
            'beforeend',
            null !== (t2 = r2[1]) && void 0 !== t2 ? t2 : i()
          ),
          o++,
          () => {
            1 === o &&
              document
                .querySelectorAll('[data-radix-focus-guard]')
                .forEach((e3) => e3.remove()),
              o--;
          }
        );
      }, []);
    }
    function i() {
      let e2 = document.createElement('span');
      return (
        e2.setAttribute('data-radix-focus-guard', ''),
        (e2.tabIndex = 0),
        (e2.style.cssText =
          'outline: none; opacity: 0; position: fixed; pointer-events: none'),
        e2
      );
    }
  };
  __namedExportsObject['__chunk_86127'] = (e, t, r) => {
    r.d(t, { gm: () => l });
    var n = r(32428);
    let o = (0, n.createContext)(void 0);
    function l(e2) {
      let t2 = (0, n.useContext)(o);
      return e2 || t2 || 'ltr';
    }
  };
  __namedExportsObject['__chunk_15521'] = (e, t, r) => {
    r.d(t, { b: () => l, k: () => o });
    var n = r(32428);
    function o(e2, t2) {
      let r2 = (0, n.createContext)(t2);
      function o2(e3) {
        let { children: t3, ...o3 } = e3,
          l2 = (0, n.useMemo)(() => o3, Object.values(o3));
        return (0, n.createElement)(r2.Provider, { value: l2 }, t3);
      }
      return (
        (o2.displayName = e2 + 'Provider'),
        [
          o2,
          function (o3) {
            let l2 = (0, n.useContext)(r2);
            if (l2) return l2;
            if (void 0 !== t2) return t2;
            throw Error(`\`${o3}\` must be used within \`${e2}\``);
          }
        ]
      );
    }
    function l(e2, t2 = []) {
      let r2 = [],
        o2 = () => {
          let t3 = r2.map((e3) => (0, n.createContext)(e3));
          return function (r3) {
            let o3 = (null == r3 ? void 0 : r3[e2]) || t3;
            return (0, n.useMemo)(
              () => ({ [`__scope${e2}`]: { ...r3, [e2]: o3 } }),
              [r3, o3]
            );
          };
        };
      return (
        (o2.scopeName = e2),
        [
          function (t3, o3) {
            let l2 = (0, n.createContext)(o3),
              i = r2.length;
            function a(t4) {
              let { scope: r3, children: o4, ...a2 } = t4,
                c = (null == r3 ? void 0 : r3[e2][i]) || l2,
                u = (0, n.useMemo)(() => a2, Object.values(a2));
              return (0, n.createElement)(c.Provider, { value: u }, o4);
            }
            return (
              (r2 = [...r2, o3]),
              (a.displayName = t3 + 'Provider'),
              [
                a,
                function (r3, a2) {
                  let c = (null == a2 ? void 0 : a2[e2][i]) || l2,
                    u = (0, n.useContext)(c);
                  if (u) return u;
                  if (void 0 !== o3) return o3;
                  throw Error(`\`${r3}\` must be used within \`${t3}\``);
                }
              ]
            );
          },
          (function (...e3) {
            let t3 = e3[0];
            if (1 === e3.length) return t3;
            let r3 = () => {
              let r4 = e3.map((e4) => ({
                useScope: e4(),
                scopeName: e4.scopeName
              }));
              return function (e4) {
                let o3 = r4.reduce((t4, { useScope: r5, scopeName: n2 }) => {
                  let o4 = r5(e4)[`__scope${n2}`];
                  return { ...t4, ...o4 };
                }, {});
                return (0, n.useMemo)(
                  () => ({ [`__scope${t3.scopeName}`]: o3 }),
                  [o3]
                );
              };
            };
            return (r3.scopeName = t3.scopeName), r3;
          })(o2, ...t2)
        ]
      );
    }
  };
  __namedExportsObject['__chunk_10730'] = (e, t, r) => {
    r.d(t, { M: () => n });
    function n(e2, t2, { checkForDefaultPrevented: r2 = true } = {}) {
      return function (n2) {
        if ((null == e2 || e2(n2), false === r2 || !n2.defaultPrevented))
          return null == t2 ? void 0 : t2(n2);
      };
    }
  };
  __namedExportsObject['__chunk_37813'] = (e, t, r) => {
    r.d(t, { u: () => n });
    function n(e2, [t2, r2]) {
      return Math.min(r2, Math.max(t2, e2));
    }
  };
  __namedExportsObject['__chunk_23516'] = (e, t, r) => {
    r.d(t, { Z: () => L });
    var n = r(71278),
      o = r(32428),
      l = r(4810),
      i = r(85597),
      a = (0, r(17167)._)(),
      c = function () {},
      u = o.forwardRef(function (e2, t2) {
        var r2 = o.useRef(null),
          l2 = o.useState({
            onScrollCapture: c,
            onWheelCapture: c,
            onTouchMoveCapture: c
          }),
          u2 = l2[0],
          s2 = l2[1],
          d2 = e2.forwardProps,
          f2 = e2.children,
          v2 = e2.className,
          p2 = e2.removeScrollBar,
          h2 = e2.enabled,
          m2 = e2.shards,
          w2 = e2.sideCar,
          b2 = e2.noIsolation,
          E2 = e2.inert,
          g2 = e2.allowPinchZoom,
          S2 = e2.as,
          y2 = (0, n._T)(e2, [
            'forwardProps',
            'children',
            'className',
            'removeScrollBar',
            'enabled',
            'shards',
            'sideCar',
            'noIsolation',
            'inert',
            'allowPinchZoom',
            'as'
          ]),
          C2 = (0, i.q)([r2, t2]),
          T2 = (0, n.pi)((0, n.pi)({}, y2), u2);
        return o.createElement(
          o.Fragment,
          null,
          h2 &&
            o.createElement(w2, {
              sideCar: a,
              removeScrollBar: p2,
              shards: m2,
              noIsolation: b2,
              inert: E2,
              setCallbacks: s2,
              allowPinchZoom: !!g2,
              lockRef: r2
            }),
          d2
            ? o.cloneElement(
                o.Children.only(f2),
                (0, n.pi)((0, n.pi)({}, T2), { ref: C2 })
              )
            : o.createElement(
                void 0 === S2 ? 'div' : S2,
                (0, n.pi)({}, T2, { className: v2, ref: C2 }),
                f2
              )
        );
      });
    (u.defaultProps = { enabled: true, removeScrollBar: true, inert: false }),
      (u.classNames = { fullWidth: l.zi, zeroRight: l.pF });
    var s = r(90104),
      d = r(34436),
      f = r(18408),
      v = false;
    if ('undefined' != typeof window)
      try {
        var p = Object.defineProperty({}, 'passive', {
          get: function () {
            return (v = true), true;
          }
        });
        window.addEventListener('test', p, p),
          window.removeEventListener('test', p, p);
      } catch (e2) {
        v = false;
      }
    var h = !!v && { passive: false },
      m = function (e2, t2) {
        var r2 = window.getComputedStyle(e2);
        return (
          'hidden' !== r2[t2] &&
          !(
            r2.overflowY === r2.overflowX &&
            'TEXTAREA' !== e2.tagName &&
            'visible' === r2[t2]
          )
        );
      },
      w = function (e2, t2) {
        var r2 = t2;
        do {
          if (
            ('undefined' != typeof ShadowRoot &&
              r2 instanceof ShadowRoot &&
              (r2 = r2.host),
            b(e2, r2))
          ) {
            var n2 = E(e2, r2);
            if (n2[1] > n2[2]) return true;
          }
          r2 = r2.parentNode;
        } while (r2 && r2 !== document.body);
        return false;
      },
      b = function (e2, t2) {
        return 'v' === e2 ? m(t2, 'overflowY') : m(t2, 'overflowX');
      },
      E = function (e2, t2) {
        return 'v' === e2
          ? [t2.scrollTop, t2.scrollHeight, t2.clientHeight]
          : [t2.scrollLeft, t2.scrollWidth, t2.clientWidth];
      },
      g = function (e2, t2, r2, n2, o2) {
        var l2,
          i2 =
            ((l2 = window.getComputedStyle(t2).direction),
            'h' === e2 && 'rtl' === l2 ? -1 : 1),
          a2 = i2 * n2,
          c2 = r2.target,
          u2 = t2.contains(c2),
          s2 = false,
          d2 = a2 > 0,
          f2 = 0,
          v2 = 0;
        do {
          var p2 = E(e2, c2),
            h2 = p2[0],
            m2 = p2[1] - p2[2] - i2 * h2;
          (h2 || m2) && b(e2, c2) && ((f2 += m2), (v2 += h2)),
            (c2 = c2.parentNode);
        } while (
          (!u2 && c2 !== document.body) ||
          (u2 && (t2.contains(c2) || t2 === c2))
        );
        return (
          d2 && ((o2 && 0 === f2) || (!o2 && a2 > f2))
            ? (s2 = true)
            : !d2 && ((o2 && 0 === v2) || (!o2 && -a2 > v2)) && (s2 = true),
          s2
        );
      },
      S = function (e2) {
        return 'changedTouches' in e2
          ? [e2.changedTouches[0].clientX, e2.changedTouches[0].clientY]
          : [0, 0];
      },
      y = function (e2) {
        return [e2.deltaX, e2.deltaY];
      },
      C = function (e2) {
        return e2 && 'current' in e2 ? e2.current : e2;
      },
      T = 0,
      R = [];
    let N = (0, s.L)(a, function (e2) {
      var t2 = o.useRef([]),
        r2 = o.useRef([0, 0]),
        l2 = o.useRef(),
        i2 = o.useState(T++)[0],
        a2 = o.useState(function () {
          return (0, f.Ws)();
        })[0],
        c2 = o.useRef(e2);
      o.useEffect(
        function () {
          c2.current = e2;
        },
        [e2]
      ),
        o.useEffect(
          function () {
            if (e2.inert) {
              document.body.classList.add('block-interactivity-'.concat(i2));
              var t3 = (0, n.ev)(
                [e2.lockRef.current],
                (e2.shards || []).map(C),
                true
              ).filter(Boolean);
              return (
                t3.forEach(function (e3) {
                  return e3.classList.add('allow-interactivity-'.concat(i2));
                }),
                function () {
                  document.body.classList.remove(
                    'block-interactivity-'.concat(i2)
                  ),
                    t3.forEach(function (e3) {
                      return e3.classList.remove(
                        'allow-interactivity-'.concat(i2)
                      );
                    });
                }
              );
            }
          },
          [e2.inert, e2.lockRef.current, e2.shards]
        );
      var u2 = o.useCallback(function (e3, t3) {
          if ('touches' in e3 && 2 === e3.touches.length)
            return !c2.current.allowPinchZoom;
          var n2,
            o2 = S(e3),
            i3 = r2.current,
            a3 = 'deltaX' in e3 ? e3.deltaX : i3[0] - o2[0],
            u3 = 'deltaY' in e3 ? e3.deltaY : i3[1] - o2[1],
            s3 = e3.target,
            d2 = Math.abs(a3) > Math.abs(u3) ? 'h' : 'v';
          if ('touches' in e3 && 'h' === d2 && 'range' === s3.type)
            return false;
          var f2 = w(d2, s3);
          if (!f2) return true;
          if (
            (f2 ? (n2 = d2) : ((n2 = 'v' === d2 ? 'h' : 'v'), (f2 = w(d2, s3))),
            !f2)
          )
            return false;
          if (
            (!l2.current &&
              'changedTouches' in e3 &&
              (a3 || u3) &&
              (l2.current = n2),
            !n2)
          )
            return true;
          var v3 = l2.current || n2;
          return g(v3, t3, e3, 'h' === v3 ? a3 : u3, true);
        }, []),
        s2 = o.useCallback(function (e3) {
          if (R.length && R[R.length - 1] === a2) {
            var r3 = 'deltaY' in e3 ? y(e3) : S(e3),
              n2 = t2.current.filter(function (t3) {
                var n3;
                return (
                  t3.name === e3.type &&
                  t3.target === e3.target &&
                  (n3 = t3.delta)[0] === r3[0] &&
                  n3[1] === r3[1]
                );
              })[0];
            if (n2 && n2.should) {
              e3.cancelable && e3.preventDefault();
              return;
            }
            if (!n2) {
              var o2 = (c2.current.shards || [])
                .map(C)
                .filter(Boolean)
                .filter(function (t3) {
                  return t3.contains(e3.target);
                });
              (o2.length > 0 ? u2(e3, o2[0]) : !c2.current.noIsolation) &&
                e3.cancelable &&
                e3.preventDefault();
            }
          }
        }, []),
        v2 = o.useCallback(function (e3, r3, n2, o2) {
          var l3 = { name: e3, delta: r3, target: n2, should: o2 };
          t2.current.push(l3),
            setTimeout(function () {
              t2.current = t2.current.filter(function (e4) {
                return e4 !== l3;
              });
            }, 1);
        }, []),
        p2 = o.useCallback(function (e3) {
          (r2.current = S(e3)), (l2.current = void 0);
        }, []),
        m2 = o.useCallback(function (t3) {
          v2(t3.type, y(t3), t3.target, u2(t3, e2.lockRef.current));
        }, []),
        b2 = o.useCallback(function (t3) {
          v2(t3.type, S(t3), t3.target, u2(t3, e2.lockRef.current));
        }, []);
      o.useEffect(function () {
        return (
          R.push(a2),
          e2.setCallbacks({
            onScrollCapture: m2,
            onWheelCapture: m2,
            onTouchMoveCapture: b2
          }),
          document.addEventListener('wheel', s2, h),
          document.addEventListener('touchmove', s2, h),
          document.addEventListener('touchstart', p2, h),
          function () {
            (R = R.filter(function (e3) {
              return e3 !== a2;
            })),
              document.removeEventListener('wheel', s2, h),
              document.removeEventListener('touchmove', s2, h),
              document.removeEventListener('touchstart', p2, h);
          }
        );
      }, []);
      var E2 = e2.removeScrollBar,
        N2 = e2.inert;
      return o.createElement(
        o.Fragment,
        null,
        N2
          ? o.createElement(a2, {
              styles: '\n  .block-interactivity-'
                .concat(i2, ' {pointer-events: none;}\n  .allow-interactivity-')
                .concat(i2, ' {pointer-events: all;}\n')
            })
          : null,
        E2 ? o.createElement(d.jp, { gapMode: 'margin' }) : null
      );
    });
    var P = o.forwardRef(function (e2, t2) {
      return o.createElement(u, (0, n.pi)({}, e2, { ref: t2, sideCar: N }));
    });
    P.classNames = u.classNames;
    let L = P;
  };
  return __namedExportsObject;
};
export { __getNamedExports };
