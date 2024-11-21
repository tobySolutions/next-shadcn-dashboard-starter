// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_34228'] = (e, a, t) => {
    t.d(a, { J2: () => i, xo: () => o, yk: () => d });
    var s = t(5486),
      r = t(32428),
      l = t(22326),
      n = t(82087);
    let i = l.fC,
      o = l.xz,
      d = r.forwardRef(
        (
          { className: e2, align: a2 = 'center', sideOffset: t2 = 4, ...r2 },
          i2
        ) =>
          (0, s.jsx)(l.h_, {
            children: (0, s.jsx)(l.VY, {
              ref: i2,
              align: a2,
              sideOffset: t2,
              className: (0, n.cn)(
                'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                e2
              ),
              ...r2
            })
          })
      );
    d.displayName = l.VY.displayName;
  };
  __namedExportsObject['__chunk_22326'] = (e, t, n) => {
    let r;
    n.d(t, { VY: () => eO, h_: () => eP, fC: () => ew, xz: () => eC });
    var o = n(97957),
      l = n(32428),
      i = n(10730),
      a = n(62820),
      u = n(15521),
      s = n(79118),
      d = n(19376),
      c = n(56719);
    let p = 'dismissableLayer.update',
      f = (0, l.createContext)({
        layers: /* @__PURE__ */ new Set(),
        layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
        branches: /* @__PURE__ */ new Set()
      }),
      v = (0, l.forwardRef)((e2, t2) => {
        var n2;
        let {
            disableOutsidePointerEvents: u2 = false,
            onEscapeKeyDown: v2,
            onPointerDownOutside: E2,
            onFocusOutside: g2,
            onInteractOutside: y2,
            onDismiss: b2,
            ...w2
          } = e2,
          C2 = (0, l.useContext)(f),
          [P2, O2] = (0, l.useState)(null),
          x2 =
            null !== (n2 = null == P2 ? void 0 : P2.ownerDocument) &&
            void 0 !== n2
              ? n2
              : null == globalThis
              ? void 0
              : globalThis.document,
          [, R2] = (0, l.useState)({}),
          D2 = (0, a.e)(t2, (e3) => O2(e3)),
          F2 = Array.from(C2.layers),
          [A2] = [...C2.layersWithOutsidePointerEventsDisabled].slice(-1),
          W2 = F2.indexOf(A2),
          _2 = P2 ? F2.indexOf(P2) : -1,
          T2 = C2.layersWithOutsidePointerEventsDisabled.size > 0,
          L2 = _2 >= W2,
          S2 = (function (
            e3,
            t3 = null == globalThis ? void 0 : globalThis.document
          ) {
            let n3 = (0, d.W)(e3),
              r2 = (0, l.useRef)(false),
              o2 = (0, l.useRef)(() => {});
            return (
              (0, l.useEffect)(() => {
                let e4 = (e5) => {
                    if (e5.target && !r2.current) {
                      let l3 = function () {
                        h('dismissableLayer.pointerDownOutside', n3, r3, {
                          discrete: true
                        });
                      };
                      let r3 = { originalEvent: e5 };
                      'touch' === e5.pointerType
                        ? (t3.removeEventListener('click', o2.current),
                          (o2.current = l3),
                          t3.addEventListener('click', o2.current, {
                            once: true
                          }))
                        : l3();
                    } else t3.removeEventListener('click', o2.current);
                    r2.current = false;
                  },
                  l2 = window.setTimeout(() => {
                    t3.addEventListener('pointerdown', e4);
                  }, 0);
                return () => {
                  window.clearTimeout(l2),
                    t3.removeEventListener('pointerdown', e4),
                    t3.removeEventListener('click', o2.current);
                };
              }, [t3, n3]),
              { onPointerDownCapture: () => (r2.current = true) }
            );
          })((e3) => {
            let t3 = e3.target,
              n3 = [...C2.branches].some((e4) => e4.contains(t3));
            !L2 ||
              n3 ||
              (null == E2 || E2(e3),
              null == y2 || y2(e3),
              e3.defaultPrevented || null == b2 || b2());
          }, x2),
          N2 = (function (
            e3,
            t3 = null == globalThis ? void 0 : globalThis.document
          ) {
            let n3 = (0, d.W)(e3),
              r2 = (0, l.useRef)(false);
            return (
              (0, l.useEffect)(() => {
                let e4 = (e5) => {
                  e5.target &&
                    !r2.current &&
                    h(
                      'dismissableLayer.focusOutside',
                      n3,
                      { originalEvent: e5 },
                      { discrete: false }
                    );
                };
                return (
                  t3.addEventListener('focusin', e4),
                  () => t3.removeEventListener('focusin', e4)
                );
              }, [t3, n3]),
              {
                onFocusCapture: () => (r2.current = true),
                onBlurCapture: () => (r2.current = false)
              }
            );
          })((e3) => {
            let t3 = e3.target;
            [...C2.branches].some((e4) => e4.contains(t3)) ||
              (null == g2 || g2(e3),
              null == y2 || y2(e3),
              e3.defaultPrevented || null == b2 || b2());
          }, x2);
        return (
          (0, c.e)((e3) => {
            _2 !== C2.layers.size - 1 ||
              (null == v2 || v2(e3),
              !e3.defaultPrevented && b2 && (e3.preventDefault(), b2()));
          }, x2),
          (0, l.useEffect)(() => {
            if (P2)
              return (
                u2 &&
                  (0 === C2.layersWithOutsidePointerEventsDisabled.size &&
                    ((r = x2.body.style.pointerEvents),
                    (x2.body.style.pointerEvents = 'none')),
                  C2.layersWithOutsidePointerEventsDisabled.add(P2)),
                C2.layers.add(P2),
                m(),
                () => {
                  u2 &&
                    1 === C2.layersWithOutsidePointerEventsDisabled.size &&
                    (x2.body.style.pointerEvents = r);
                }
              );
          }, [P2, x2, u2, C2]),
          (0, l.useEffect)(
            () => () => {
              P2 &&
                (C2.layers.delete(P2),
                C2.layersWithOutsidePointerEventsDisabled.delete(P2),
                m());
            },
            [P2, C2]
          ),
          (0, l.useEffect)(() => {
            let e3 = () => R2({});
            return (
              document.addEventListener(p, e3),
              () => document.removeEventListener(p, e3)
            );
          }, []),
          (0, l.createElement)(
            s.WV.div,
            (0, o.Z)({}, w2, {
              ref: D2,
              style: {
                pointerEvents: T2 ? (L2 ? 'auto' : 'none') : void 0,
                ...e2.style
              },
              onFocusCapture: (0, i.M)(e2.onFocusCapture, N2.onFocusCapture),
              onBlurCapture: (0, i.M)(e2.onBlurCapture, N2.onBlurCapture),
              onPointerDownCapture: (0, i.M)(
                e2.onPointerDownCapture,
                S2.onPointerDownCapture
              )
            })
          )
        );
      });
    function m() {
      let e2 = new CustomEvent(p);
      document.dispatchEvent(e2);
    }
    function h(e2, t2, n2, { discrete: r2 }) {
      let o2 = n2.originalEvent.target,
        l2 = new CustomEvent(e2, {
          bubbles: false,
          cancelable: true,
          detail: n2
        });
      t2 && o2.addEventListener(e2, t2, { once: true }),
        r2 ? (0, s.jH)(o2, l2) : o2.dispatchEvent(l2);
    }
    var E = n(64896);
    let g = 'focusScope.autoFocusOnMount',
      y = 'focusScope.autoFocusOnUnmount',
      b = { bubbles: false, cancelable: true },
      w = (0, l.forwardRef)((e2, t2) => {
        let {
            loop: n2 = false,
            trapped: r2 = false,
            onMountAutoFocus: i2,
            onUnmountAutoFocus: u2,
            ...c2
          } = e2,
          [p2, f2] = (0, l.useState)(null),
          v2 = (0, d.W)(i2),
          m2 = (0, d.W)(u2),
          h2 = (0, l.useRef)(null),
          E2 = (0, a.e)(t2, (e3) => f2(e3)),
          w2 = (0, l.useRef)({
            paused: false,
            pause() {
              this.paused = true;
            },
            resume() {
              this.paused = false;
            }
          }).current;
        (0, l.useEffect)(() => {
          if (r2) {
            let e3 = function (e4) {
                if (w2.paused || !p2) return;
                let t4 = e4.target;
                p2.contains(t4)
                  ? (h2.current = t4)
                  : O(h2.current, { select: true });
              },
              t3 = function (e4) {
                if (w2.paused || !p2) return;
                let t4 = e4.relatedTarget;
                null === t4 ||
                  p2.contains(t4) ||
                  O(h2.current, { select: true });
              };
            document.addEventListener('focusin', e3),
              document.addEventListener('focusout', t3);
            let n3 = new MutationObserver(function (e4) {
              if (document.activeElement === document.body)
                for (let t4 of e4) t4.removedNodes.length > 0 && O(p2);
            });
            return (
              p2 && n3.observe(p2, { childList: true, subtree: true }),
              () => {
                document.removeEventListener('focusin', e3),
                  document.removeEventListener('focusout', t3),
                  n3.disconnect();
              }
            );
          }
        }, [r2, p2, w2.paused]),
          (0, l.useEffect)(() => {
            if (p2) {
              x.add(w2);
              let e3 = document.activeElement;
              if (!p2.contains(e3)) {
                let t3 = new CustomEvent(g, b);
                p2.addEventListener(g, v2),
                  p2.dispatchEvent(t3),
                  t3.defaultPrevented ||
                    ((function (e4, { select: t4 = false } = {}) {
                      let n3 = document.activeElement;
                      for (let r3 of e4)
                        if (
                          (O(r3, { select: t4 }), document.activeElement !== n3)
                        )
                          return;
                    })(
                      C(p2).filter((e4) => 'A' !== e4.tagName),
                      { select: true }
                    ),
                    document.activeElement === e3 && O(p2));
              }
              return () => {
                p2.removeEventListener(g, v2),
                  setTimeout(() => {
                    let t3 = new CustomEvent(y, b);
                    p2.addEventListener(y, m2),
                      p2.dispatchEvent(t3),
                      t3.defaultPrevented ||
                        O(null != e3 ? e3 : document.body, { select: true }),
                      p2.removeEventListener(y, m2),
                      x.remove(w2);
                  }, 0);
              };
            }
          }, [p2, v2, m2, w2]);
        let R2 = (0, l.useCallback)(
          (e3) => {
            if ((!n2 && !r2) || w2.paused) return;
            let t3 =
                'Tab' === e3.key && !e3.altKey && !e3.ctrlKey && !e3.metaKey,
              o2 = document.activeElement;
            if (t3 && o2) {
              let t4 = e3.currentTarget,
                [r3, l2] = (function (e4) {
                  let t5 = C(e4);
                  return [P(t5, e4), P(t5.reverse(), e4)];
                })(t4);
              r3 && l2
                ? e3.shiftKey || o2 !== l2
                  ? e3.shiftKey &&
                    o2 === r3 &&
                    (e3.preventDefault(), n2 && O(l2, { select: true }))
                  : (e3.preventDefault(), n2 && O(r3, { select: true }))
                : o2 === t4 && e3.preventDefault();
            }
          },
          [n2, r2, w2.paused]
        );
        return (0, l.createElement)(
          s.WV.div,
          (0, o.Z)({ tabIndex: -1 }, c2, { ref: E2, onKeyDown: R2 })
        );
      });
    function C(e2) {
      let t2 = [],
        n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (e3) => {
            let t3 = 'INPUT' === e3.tagName && 'hidden' === e3.type;
            return e3.disabled || e3.hidden || t3
              ? NodeFilter.FILTER_SKIP
              : e3.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
          }
        });
      for (; n2.nextNode(); ) t2.push(n2.currentNode);
      return t2;
    }
    function P(e2, t2) {
      for (let n2 of e2)
        if (
          !(function (e3, { upTo: t3 }) {
            if ('hidden' === getComputedStyle(e3).visibility) return true;
            for (; e3 && (void 0 === t3 || e3 !== t3); ) {
              if ('none' === getComputedStyle(e3).display) return true;
              e3 = e3.parentElement;
            }
            return false;
          })(n2, { upTo: t2 })
        )
          return n2;
    }
    function O(e2, { select: t2 = false } = {}) {
      if (e2 && e2.focus) {
        var n2;
        let r2 = document.activeElement;
        e2.focus({ preventScroll: true }),
          e2 !== r2 &&
            (n2 = e2) instanceof HTMLInputElement &&
            'select' in n2 &&
            t2 &&
            e2.select();
      }
    }
    let x = (function () {
      let e2 = [];
      return {
        add(t2) {
          let n2 = e2[0];
          t2 !== n2 && (null == n2 || n2.pause()), (e2 = R(e2, t2)).unshift(t2);
        },
        remove(t2) {
          var n2;
          null === (n2 = (e2 = R(e2, t2))[0]) || void 0 === n2 || n2.resume();
        }
      };
    })();
    function R(e2, t2) {
      let n2 = [...e2],
        r2 = n2.indexOf(t2);
      return -1 !== r2 && n2.splice(r2, 1), n2;
    }
    var D = n(31871),
      F = n(55878),
      A = n(68045),
      W = n(13606),
      _ = n(11860),
      T = n(54138),
      L = n(2770);
    let S = 'Popper',
      [N, M] = (0, u.b)(S),
      [k, I] = N(S),
      Z = (0, l.forwardRef)((e2, t2) => {
        let { __scopePopper: n2, virtualRef: r2, ...i2 } = e2,
          u2 = I('PopperAnchor', n2),
          d2 = (0, l.useRef)(null),
          c2 = (0, a.e)(t2, d2);
        return (
          (0, l.useEffect)(() => {
            u2.onAnchorChange((null == r2 ? void 0 : r2.current) || d2.current);
          }),
          r2
            ? null
            : (0, l.createElement)(s.WV.div, (0, o.Z)({}, i2, { ref: c2 }))
        );
      }),
      V = 'PopperContent',
      [j, K] = N(V),
      $ = (0, l.forwardRef)((e2, t2) => {
        var n2, r2, i2, u2, c2, p2, f2, v2;
        let {
            __scopePopper: m2,
            side: h2 = 'bottom',
            sideOffset: E2 = 0,
            align: g2 = 'center',
            alignOffset: y2 = 0,
            arrowPadding: b2 = 0,
            avoidCollisions: w2 = true,
            collisionBoundary: C2 = [],
            collisionPadding: P2 = 0,
            sticky: O2 = 'partial',
            hideWhenDetached: x2 = false,
            updatePositionStrategy: R2 = 'optimized',
            onPlaced: D2,
            ..._2
          } = e2,
          S2 = I(V, m2),
          [N2, M2] = (0, l.useState)(null),
          k2 = (0, a.e)(t2, (e3) => M2(e3)),
          [Z2, K2] = (0, l.useState)(null),
          $2 = (0, L.t)(Z2),
          z2 =
            null !== (n2 = null == $2 ? void 0 : $2.width) && void 0 !== n2
              ? n2
              : 0,
          Y2 =
            null !== (r2 = null == $2 ? void 0 : $2.height) && void 0 !== r2
              ? r2
              : 0,
          X2 =
            'number' == typeof P2
              ? P2
              : { top: 0, right: 0, bottom: 0, left: 0, ...P2 },
          q2 = Array.isArray(C2) ? C2 : [C2],
          G2 = q2.length > 0,
          J2 = { padding: X2, boundary: q2.filter(H), altBoundary: G2 },
          {
            refs: Q2,
            floatingStyles: ee2,
            placement: et2,
            isPositioned: en2,
            middlewareData: er2
          } = (0, F.YF)({
            strategy: 'fixed',
            placement: h2 + ('center' !== g2 ? '-' + g2 : ''),
            whileElementsMounted: (...e3) =>
              (0, A.Me)(...e3, { animationFrame: 'always' === R2 }),
            elements: { reference: S2.anchor },
            middleware: [
              (0, W.cv)({ mainAxis: E2 + Y2, alignmentAxis: y2 }),
              w2 &&
                (0, W.uY)({
                  mainAxis: true,
                  crossAxis: false,
                  limiter: 'partial' === O2 ? (0, W.dr)() : void 0,
                  ...J2
                }),
              w2 && (0, W.RR)({ ...J2 }),
              (0, W.dp)({
                ...J2,
                apply: ({
                  elements: e3,
                  rects: t3,
                  availableWidth: n3,
                  availableHeight: r3
                }) => {
                  let { width: o2, height: l2 } = t3.reference,
                    i3 = e3.floating.style;
                  i3.setProperty('--radix-popper-available-width', `${n3}px`),
                    i3.setProperty(
                      '--radix-popper-available-height',
                      `${r3}px`
                    ),
                    i3.setProperty('--radix-popper-anchor-width', `${o2}px`),
                    i3.setProperty('--radix-popper-anchor-height', `${l2}px`);
                }
              }),
              Z2 && (0, F.x7)({ element: Z2, padding: b2 }),
              B({ arrowWidth: z2, arrowHeight: Y2 }),
              x2 && (0, W.Cp)({ strategy: 'referenceHidden', ...J2 })
            ]
          }),
          [eo2, el2] = U(et2),
          ei2 = (0, d.W)(D2);
        (0, T.b)(() => {
          en2 && (null == ei2 || ei2());
        }, [en2, ei2]);
        let ea2 = null === (i2 = er2.arrow) || void 0 === i2 ? void 0 : i2.x,
          eu2 = null === (u2 = er2.arrow) || void 0 === u2 ? void 0 : u2.y,
          es2 =
            (null === (c2 = er2.arrow) || void 0 === c2
              ? void 0
              : c2.centerOffset) !== 0,
          [ed2, ec2] = (0, l.useState)();
        return (
          (0, T.b)(() => {
            N2 && ec2(window.getComputedStyle(N2).zIndex);
          }, [N2]),
          (0, l.createElement)(
            'div',
            {
              ref: Q2.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...ee2,
                transform: en2 ? ee2.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: ed2,
                '--radix-popper-transform-origin': [
                  null === (p2 = er2.transformOrigin) || void 0 === p2
                    ? void 0
                    : p2.x,
                  null === (f2 = er2.transformOrigin) || void 0 === f2
                    ? void 0
                    : f2.y
                ].join(' ')
              },
              dir: e2.dir
            },
            (0, l.createElement)(
              j,
              {
                scope: m2,
                placedSide: eo2,
                onArrowChange: K2,
                arrowX: ea2,
                arrowY: eu2,
                shouldHideArrow: es2
              },
              (0, l.createElement)(
                s.WV.div,
                (0, o.Z)({ 'data-side': eo2, 'data-align': el2 }, _2, {
                  ref: k2,
                  style: {
                    ..._2.style,
                    animation: en2 ? void 0 : 'none',
                    opacity:
                      null !== (v2 = er2.hide) &&
                      void 0 !== v2 &&
                      v2.referenceHidden
                        ? 0
                        : void 0
                  }
                })
              )
            )
          )
        );
      }),
      z = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' };
    function H(e2) {
      return null !== e2;
    }
    let B = (e2) => ({
      name: 'transformOrigin',
      options: e2,
      fn(t2) {
        var n2, r2, o2, l2, i2;
        let { placement: a2, rects: u2, middlewareData: s2 } = t2,
          d2 =
            (null === (n2 = s2.arrow) || void 0 === n2
              ? void 0
              : n2.centerOffset) !== 0,
          c2 = d2 ? 0 : e2.arrowWidth,
          p2 = d2 ? 0 : e2.arrowHeight,
          [f2, v2] = U(a2),
          m2 = { start: '0%', center: '50%', end: '100%' }[v2],
          h2 =
            (null !==
              (r2 =
                null === (o2 = s2.arrow) || void 0 === o2 ? void 0 : o2.x) &&
            void 0 !== r2
              ? r2
              : 0) +
            c2 / 2,
          E2 =
            (null !==
              (l2 =
                null === (i2 = s2.arrow) || void 0 === i2 ? void 0 : i2.y) &&
            void 0 !== l2
              ? l2
              : 0) +
            p2 / 2,
          g2 = '',
          y2 = '';
        return (
          'bottom' === f2
            ? ((g2 = d2 ? m2 : `${h2}px`), (y2 = `${-p2}px`))
            : 'top' === f2
            ? ((g2 = d2 ? m2 : `${h2}px`),
              (y2 = `${u2.floating.height + p2}px`))
            : 'right' === f2
            ? ((g2 = `${-p2}px`), (y2 = d2 ? m2 : `${E2}px`))
            : 'left' === f2 &&
              ((g2 = `${u2.floating.width + p2}px`),
              (y2 = d2 ? m2 : `${E2}px`)),
          { data: { x: g2, y: y2 } }
        );
      }
    });
    function U(e2) {
      let [t2, n2 = 'center'] = e2.split('-');
      return [t2, n2];
    }
    let Y = (e2) => {
      let { __scopePopper: t2, children: n2 } = e2,
        [r2, o2] = (0, l.useState)(null);
      return (0, l.createElement)(
        k,
        { scope: t2, anchor: r2, onAnchorChange: o2 },
        n2
      );
    };
    var X = n(58754);
    let q = (0, l.forwardRef)((e2, t2) => {
      var n2;
      let {
        container: r2 = null == globalThis
          ? void 0
          : null === (n2 = globalThis.document) || void 0 === n2
          ? void 0
          : n2.body,
        ...i2
      } = e2;
      return r2
        ? X.createPortal(
            (0, l.createElement)(s.WV.div, (0, o.Z)({}, i2, { ref: t2 })),
            r2
          )
        : null;
    });
    var G = n(92347);
    let J = (0, l.forwardRef)((e2, t2) => {
      let { children: n2, ...r2 } = e2,
        i2 = l.Children.toArray(n2),
        a2 = i2.find(et);
      if (a2) {
        let e3 = a2.props.children,
          n3 = i2.map((t3) =>
            t3 !== a2
              ? t3
              : l.Children.count(e3) > 1
              ? l.Children.only(null)
              : (0, l.isValidElement)(e3)
              ? e3.props.children
              : null
          );
        return (0, l.createElement)(
          Q,
          (0, o.Z)({}, r2, { ref: t2 }),
          (0, l.isValidElement)(e3) ? (0, l.cloneElement)(e3, void 0, n3) : null
        );
      }
      return (0, l.createElement)(Q, (0, o.Z)({}, r2, { ref: t2 }), n2);
    });
    J.displayName = 'Slot';
    let Q = (0, l.forwardRef)((e2, t2) => {
      let { children: n2, ...r2 } = e2;
      return (0, l.isValidElement)(n2)
        ? (0, l.cloneElement)(n2, {
            ...(function (e3, t3) {
              let n3 = { ...t3 };
              for (let r3 in t3) {
                let o2 = e3[r3],
                  l2 = t3[r3];
                /^on[A-Z]/.test(r3)
                  ? o2 && l2
                    ? (n3[r3] = (...e4) => {
                        l2(...e4), o2(...e4);
                      })
                    : o2 && (n3[r3] = o2)
                  : 'style' === r3
                  ? (n3[r3] = { ...o2, ...l2 })
                  : 'className' === r3 &&
                    (n3[r3] = [o2, l2].filter(Boolean).join(' '));
              }
              return { ...e3, ...n3 };
            })(r2, n2.props),
            ref: t2 ? (0, a.F)(t2, n2.ref) : n2.ref
          })
        : l.Children.count(n2) > 1
        ? l.Children.only(null)
        : null;
    });
    Q.displayName = 'SlotClone';
    let ee = ({ children: e2 }) => (0, l.createElement)(l.Fragment, null, e2);
    function et(e2) {
      return (0, l.isValidElement)(e2) && e2.type === ee;
    }
    var en = n(54007),
      er = n(16151),
      eo = n(23516);
    let el = 'Popover',
      [ei, ea] = (0, u.b)(el, [M]),
      eu = M(),
      [es, ed] = ei(el),
      ec = (0, l.forwardRef)((e2, t2) => {
        let { __scopePopover: n2, ...r2 } = e2,
          u2 = ed('PopoverTrigger', n2),
          d2 = eu(n2),
          c2 = (0, a.e)(t2, u2.triggerRef),
          p2 = (0, l.createElement)(
            s.WV.button,
            (0, o.Z)(
              {
                type: 'button',
                'aria-haspopup': 'dialog',
                'aria-expanded': u2.open,
                'aria-controls': u2.contentId,
                'data-state': eb(u2.open)
              },
              r2,
              { ref: c2, onClick: (0, i.M)(e2.onClick, u2.onOpenToggle) }
            )
          );
        return u2.hasCustomAnchor
          ? p2
          : (0, l.createElement)(Z, (0, o.Z)({ asChild: true }, d2), p2);
      }),
      ep = 'PopoverPortal',
      [ef, ev] = ei(ep, { forceMount: void 0 }),
      em = 'PopoverContent',
      eh = (0, l.forwardRef)((e2, t2) => {
        let n2 = ev(em, e2.__scopePopover),
          { forceMount: r2 = n2.forceMount, ...i2 } = e2,
          a2 = ed(em, e2.__scopePopover);
        return (0, l.createElement)(
          G.z,
          { present: r2 || a2.open },
          a2.modal
            ? (0, l.createElement)(eE, (0, o.Z)({}, i2, { ref: t2 }))
            : (0, l.createElement)(eg, (0, o.Z)({}, i2, { ref: t2 }))
        );
      }),
      eE = (0, l.forwardRef)((e2, t2) => {
        let n2 = ed(em, e2.__scopePopover),
          r2 = (0, l.useRef)(null),
          u2 = (0, a.e)(t2, r2),
          s2 = (0, l.useRef)(false);
        return (
          (0, l.useEffect)(() => {
            let e3 = r2.current;
            if (e3) return (0, er.Ry)(e3);
          }, []),
          (0, l.createElement)(
            eo.Z,
            { as: J, allowPinchZoom: true },
            (0, l.createElement)(
              ey,
              (0, o.Z)({}, e2, {
                ref: u2,
                trapFocus: n2.open,
                disableOutsidePointerEvents: true,
                onCloseAutoFocus: (0, i.M)(e2.onCloseAutoFocus, (e3) => {
                  var t3;
                  e3.preventDefault(),
                    s2.current ||
                      null === (t3 = n2.triggerRef.current) ||
                      void 0 === t3 ||
                      t3.focus();
                }),
                onPointerDownOutside: (0, i.M)(
                  e2.onPointerDownOutside,
                  (e3) => {
                    let t3 = e3.detail.originalEvent,
                      n3 = 0 === t3.button && true === t3.ctrlKey,
                      r3 = 2 === t3.button || n3;
                    s2.current = r3;
                  },
                  { checkForDefaultPrevented: false }
                ),
                onFocusOutside: (0, i.M)(
                  e2.onFocusOutside,
                  (e3) => e3.preventDefault(),
                  { checkForDefaultPrevented: false }
                )
              })
            )
          )
        );
      }),
      eg = (0, l.forwardRef)((e2, t2) => {
        let n2 = ed(em, e2.__scopePopover),
          r2 = (0, l.useRef)(false),
          i2 = (0, l.useRef)(false);
        return (0, l.createElement)(
          ey,
          (0, o.Z)({}, e2, {
            ref: t2,
            trapFocus: false,
            disableOutsidePointerEvents: false,
            onCloseAutoFocus: (t3) => {
              var o2, l2;
              null === (o2 = e2.onCloseAutoFocus) ||
                void 0 === o2 ||
                o2.call(e2, t3),
                t3.defaultPrevented ||
                  (r2.current ||
                    null === (l2 = n2.triggerRef.current) ||
                    void 0 === l2 ||
                    l2.focus(),
                  t3.preventDefault()),
                (r2.current = false),
                (i2.current = false);
            },
            onInteractOutside: (t3) => {
              var o2, l2;
              null === (o2 = e2.onInteractOutside) ||
                void 0 === o2 ||
                o2.call(e2, t3),
                t3.defaultPrevented ||
                  ((r2.current = true),
                  'pointerdown' !== t3.detail.originalEvent.type ||
                    (i2.current = true));
              let a2 = t3.target;
              (null === (l2 = n2.triggerRef.current) || void 0 === l2
                ? void 0
                : l2.contains(a2)) && t3.preventDefault(),
                'focusin' === t3.detail.originalEvent.type &&
                  i2.current &&
                  t3.preventDefault();
            }
          })
        );
      }),
      ey = (0, l.forwardRef)((e2, t2) => {
        let {
            __scopePopover: n2,
            trapFocus: r2,
            onOpenAutoFocus: i2,
            onCloseAutoFocus: a2,
            disableOutsidePointerEvents: u2,
            onEscapeKeyDown: s2,
            onPointerDownOutside: d2,
            onFocusOutside: c2,
            onInteractOutside: p2,
            ...f2
          } = e2,
          m2 = ed(em, n2),
          h2 = eu(n2);
        return (
          (0, E.EW)(),
          (0, l.createElement)(
            w,
            {
              asChild: true,
              loop: true,
              trapped: r2,
              onMountAutoFocus: i2,
              onUnmountAutoFocus: a2
            },
            (0, l.createElement)(
              v,
              {
                asChild: true,
                disableOutsidePointerEvents: u2,
                onInteractOutside: p2,
                onEscapeKeyDown: s2,
                onPointerDownOutside: d2,
                onFocusOutside: c2,
                onDismiss: () => m2.onOpenChange(false)
              },
              (0, l.createElement)(
                $,
                (0, o.Z)(
                  {
                    'data-state': eb(m2.open),
                    role: 'dialog',
                    id: m2.contentId
                  },
                  h2,
                  f2,
                  {
                    ref: t2,
                    style: {
                      ...f2.style,
                      '--radix-popover-content-transform-origin':
                        'var(--radix-popper-transform-origin)',
                      '--radix-popover-content-available-width':
                        'var(--radix-popper-available-width)',
                      '--radix-popover-content-available-height':
                        'var(--radix-popper-available-height)',
                      '--radix-popover-trigger-width':
                        'var(--radix-popper-anchor-width)',
                      '--radix-popover-trigger-height':
                        'var(--radix-popper-anchor-height)'
                    }
                  }
                )
              )
            )
          )
        );
      });
    function eb(e2) {
      return e2 ? 'open' : 'closed';
    }
    let ew = (e2) => {
        let {
            __scopePopover: t2,
            children: n2,
            open: r2,
            defaultOpen: o2,
            onOpenChange: i2,
            modal: a2 = false
          } = e2,
          u2 = eu(t2),
          s2 = (0, l.useRef)(null),
          [d2, c2] = (0, l.useState)(false),
          [p2 = false, f2] = (0, en.T)({
            prop: r2,
            defaultProp: o2,
            onChange: i2
          });
        return (0, l.createElement)(
          Y,
          u2,
          (0, l.createElement)(
            es,
            {
              scope: t2,
              contentId: (0, D.M)(),
              triggerRef: s2,
              open: p2,
              onOpenChange: f2,
              onOpenToggle: (0, l.useCallback)(() => f2((e3) => !e3), [f2]),
              hasCustomAnchor: d2,
              onCustomAnchorAdd: (0, l.useCallback)(() => c2(true), []),
              onCustomAnchorRemove: (0, l.useCallback)(() => c2(false), []),
              modal: a2
            },
            n2
          )
        );
      },
      eC = ec,
      eP = (e2) => {
        let {
            __scopePopover: t2,
            forceMount: n2,
            children: r2,
            container: o2
          } = e2,
          i2 = ed(ep, t2);
        return (0, l.createElement)(
          ef,
          { scope: t2, forceMount: n2 },
          (0, l.createElement)(
            G.z,
            { present: n2 || i2.open },
            (0, l.createElement)(q, { asChild: true, container: o2 }, r2)
          )
        );
      },
      eO = eh;
  };
  return __namedExportsObject;
};
export { __getNamedExports };
