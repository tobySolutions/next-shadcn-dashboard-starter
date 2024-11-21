// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_29298'] = (e, r, t) => {
    'use strict';
    t.d(r, { Bw: () => u, Ph: () => l, Ql: () => m, i4: () => d, ki: () => c });
    var a = t(5486),
      n = t(32428),
      s = t(44991),
      o = t(18733),
      i = t(82087);
    let l = o.fC;
    o.ZA;
    let c = o.B4,
      d = n.forwardRef(({ className: e2, children: r2, ...t2 }, n2) =>
        (0, a.jsxs)(o.xz, {
          ref: n2,
          className: (0, i.cn)(
            'flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            e2
          ),
          ...t2,
          children: [
            r2,
            (0, a.jsx)(o.JO, {
              asChild: true,
              children: (0, a.jsx)(s.jnn, { className: 'h-4 w-4 opacity-50' })
            })
          ]
        })
      );
    d.displayName = o.xz.displayName;
    let u = n.forwardRef(
      ({ className: e2, children: r2, position: t2 = 'popper', ...n2 }, s2) =>
        (0, a.jsx)(o.h_, {
          children: (0, a.jsx)(o.VY, {
            ref: s2,
            className: (0, i.cn)(
              'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              'popper' === t2 &&
                'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
              e2
            ),
            position: t2,
            ...n2,
            children: (0, a.jsx)(o.l_, {
              className: (0, i.cn)(
                'p-1',
                'popper' === t2 &&
                  'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
              ),
              children: r2
            })
          })
        })
    );
    (u.displayName = o.VY.displayName),
      (n.forwardRef(({ className: e2, ...r2 }, t2) =>
        (0, a.jsx)(o.__, {
          ref: t2,
          className: (0, i.cn)('px-2 py-1.5 text-sm font-semibold', e2),
          ...r2
        })
      ).displayName = o.__.displayName);
    let m = n.forwardRef(({ className: e2, children: r2, ...t2 }, n2) =>
      (0, a.jsxs)(o.ck, {
        ref: n2,
        className: (0, i.cn)(
          'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          e2
        ),
        ...t2,
        children: [
          (0, a.jsx)('span', {
            className:
              'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
            children: (0, a.jsx)(o.wU, {
              children: (0, a.jsx)(s.nQG, { className: 'h-4 w-4' })
            })
          }),
          (0, a.jsx)(o.eT, { children: r2 })
        ]
      })
    );
    (m.displayName = o.ck.displayName),
      (n.forwardRef(({ className: e2, ...r2 }, t2) =>
        (0, a.jsx)(o.Z0, {
          ref: t2,
          className: (0, i.cn)('-mx-1 my-1 h-px bg-muted', e2),
          ...r2
        })
      ).displayName = o.Z0.displayName);
  };
  __namedExportsObject['__chunk_2307'] = (e, t, n) => {
    n.d(t, { D: () => l });
    var r = n(32428);
    function l(e2) {
      let t2 = (0, r.useRef)({ value: e2, previous: e2 });
      return (0, r.useMemo)(
        () => (
          t2.current.value !== e2 &&
            ((t2.current.previous = t2.current.value), (t2.current.value = e2)),
          t2.current.previous
        ),
        [e2]
      );
    }
  };
  __namedExportsObject['__chunk_18733'] = (e, t, n) => {
    let r;
    n.d(t, {
      VY: () => e2,
      ZA: () => e5,
      JO: () => e0,
      ck: () => e3,
      wU: () => e9,
      eT: () => e6,
      __: () => e8,
      h_: () => e1,
      fC: () => eG,
      Z0: () => e4,
      xz: () => eJ,
      B4: () => eQ,
      l_: () => e7
    });
    var l = n(97957),
      o = n(32428),
      i = n(58754),
      a = n(37813),
      d = n(10730),
      u = n(66928),
      s = n(62820),
      c = n(15521),
      f = n(86127),
      p = n(79118),
      v = n(19376),
      m = n(56719);
    let h = 'dismissableLayer.update',
      g = (0, o.createContext)({
        layers: /* @__PURE__ */ new Set(),
        layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
        branches: /* @__PURE__ */ new Set()
      }),
      w = (0, o.forwardRef)((e10, t2) => {
        var n2;
        let {
            disableOutsidePointerEvents: i2 = false,
            onEscapeKeyDown: a2,
            onPointerDownOutside: u2,
            onFocusOutside: c2,
            onInteractOutside: f2,
            onDismiss: w2,
            ...b2
          } = e10,
          x2 = (0, o.useContext)(g),
          [C2, S2] = (0, o.useState)(null),
          P2 =
            null !== (n2 = null == C2 ? void 0 : C2.ownerDocument) &&
            void 0 !== n2
              ? n2
              : null == globalThis
              ? void 0
              : globalThis.document,
          [, R2] = (0, o.useState)({}),
          T2 = (0, s.e)(t2, (e11) => S2(e11)),
          D2 = Array.from(x2.layers),
          [M2] = [...x2.layersWithOutsidePointerEventsDisabled].slice(-1),
          _2 = D2.indexOf(M2),
          k2 = C2 ? D2.indexOf(C2) : -1,
          O2 = x2.layersWithOutsidePointerEventsDisabled.size > 0,
          W2 = k2 >= _2,
          I2 = (function (
            e11,
            t3 = null == globalThis ? void 0 : globalThis.document
          ) {
            let n3 = (0, v.W)(e11),
              r2 = (0, o.useRef)(false),
              l2 = (0, o.useRef)(() => {});
            return (
              (0, o.useEffect)(() => {
                let e12 = (e13) => {
                    if (e13.target && !r2.current) {
                      let o3 = function () {
                        E('dismissableLayer.pointerDownOutside', n3, r3, {
                          discrete: true
                        });
                      };
                      let r3 = { originalEvent: e13 };
                      'touch' === e13.pointerType
                        ? (t3.removeEventListener('click', l2.current),
                          (l2.current = o3),
                          t3.addEventListener('click', l2.current, {
                            once: true
                          }))
                        : o3();
                    }
                    r2.current = false;
                  },
                  o2 = window.setTimeout(() => {
                    t3.addEventListener('pointerdown', e12);
                  }, 0);
                return () => {
                  window.clearTimeout(o2),
                    t3.removeEventListener('pointerdown', e12),
                    t3.removeEventListener('click', l2.current);
                };
              }, [t3, n3]),
              { onPointerDownCapture: () => (r2.current = true) }
            );
          })((e11) => {
            let t3 = e11.target,
              n3 = [...x2.branches].some((e12) => e12.contains(t3));
            !W2 ||
              n3 ||
              (null == u2 || u2(e11),
              null == f2 || f2(e11),
              e11.defaultPrevented || null == w2 || w2());
          }, P2),
          L2 = (function (
            e11,
            t3 = null == globalThis ? void 0 : globalThis.document
          ) {
            let n3 = (0, v.W)(e11),
              r2 = (0, o.useRef)(false);
            return (
              (0, o.useEffect)(() => {
                let e12 = (e13) => {
                  e13.target &&
                    !r2.current &&
                    E(
                      'dismissableLayer.focusOutside',
                      n3,
                      { originalEvent: e13 },
                      { discrete: false }
                    );
                };
                return (
                  t3.addEventListener('focusin', e12),
                  () => t3.removeEventListener('focusin', e12)
                );
              }, [t3, n3]),
              {
                onFocusCapture: () => (r2.current = true),
                onBlurCapture: () => (r2.current = false)
              }
            );
          })((e11) => {
            let t3 = e11.target;
            [...x2.branches].some((e12) => e12.contains(t3)) ||
              (null == c2 || c2(e11),
              null == f2 || f2(e11),
              e11.defaultPrevented || null == w2 || w2());
          }, P2);
        return (
          (0, m.e)((e11) => {
            k2 !== x2.layers.size - 1 ||
              (null == a2 || a2(e11),
              !e11.defaultPrevented && w2 && (e11.preventDefault(), w2()));
          }, P2),
          (0, o.useEffect)(() => {
            if (C2)
              return (
                i2 &&
                  (0 === x2.layersWithOutsidePointerEventsDisabled.size &&
                    ((r = P2.body.style.pointerEvents),
                    (P2.body.style.pointerEvents = 'none')),
                  x2.layersWithOutsidePointerEventsDisabled.add(C2)),
                x2.layers.add(C2),
                y(),
                () => {
                  i2 &&
                    1 === x2.layersWithOutsidePointerEventsDisabled.size &&
                    (P2.body.style.pointerEvents = r);
                }
              );
          }, [C2, P2, i2, x2]),
          (0, o.useEffect)(
            () => () => {
              C2 &&
                (x2.layers.delete(C2),
                x2.layersWithOutsidePointerEventsDisabled.delete(C2),
                y());
            },
            [C2, x2]
          ),
          (0, o.useEffect)(() => {
            let e11 = () => R2({});
            return (
              document.addEventListener(h, e11),
              () => document.removeEventListener(h, e11)
            );
          }, []),
          (0, o.createElement)(
            p.WV.div,
            (0, l.Z)({}, b2, {
              ref: T2,
              style: {
                pointerEvents: O2 ? (W2 ? 'auto' : 'none') : void 0,
                ...e10.style
              },
              onFocusCapture: (0, d.M)(e10.onFocusCapture, L2.onFocusCapture),
              onBlurCapture: (0, d.M)(e10.onBlurCapture, L2.onBlurCapture),
              onPointerDownCapture: (0, d.M)(
                e10.onPointerDownCapture,
                I2.onPointerDownCapture
              )
            })
          )
        );
      });
    function y() {
      let e10 = new CustomEvent(h);
      document.dispatchEvent(e10);
    }
    function E(e10, t2, n2, { discrete: r2 }) {
      let l2 = n2.originalEvent.target,
        o2 = new CustomEvent(e10, {
          bubbles: false,
          cancelable: true,
          detail: n2
        });
      t2 && l2.addEventListener(e10, t2, { once: true }),
        r2 ? (0, p.jH)(l2, o2) : l2.dispatchEvent(o2);
    }
    var b = n(64896);
    let x = 'focusScope.autoFocusOnMount',
      C = 'focusScope.autoFocusOnUnmount',
      S = { bubbles: false, cancelable: true },
      P = (0, o.forwardRef)((e10, t2) => {
        let {
            loop: n2 = false,
            trapped: r2 = false,
            onMountAutoFocus: i2,
            onUnmountAutoFocus: a2,
            ...d2
          } = e10,
          [u2, c2] = (0, o.useState)(null),
          f2 = (0, v.W)(i2),
          m2 = (0, v.W)(a2),
          h2 = (0, o.useRef)(null),
          g2 = (0, s.e)(t2, (e11) => c2(e11)),
          w2 = (0, o.useRef)({
            paused: false,
            pause() {
              this.paused = true;
            },
            resume() {
              this.paused = false;
            }
          }).current;
        (0, o.useEffect)(() => {
          if (r2) {
            let e11 = function (e12) {
                if (w2.paused || !u2) return;
                let t4 = e12.target;
                u2.contains(t4)
                  ? (h2.current = t4)
                  : D(h2.current, { select: true });
              },
              t3 = function (e12) {
                if (w2.paused || !u2) return;
                let t4 = e12.relatedTarget;
                null === t4 ||
                  u2.contains(t4) ||
                  D(h2.current, { select: true });
              };
            document.addEventListener('focusin', e11),
              document.addEventListener('focusout', t3);
            let n3 = new MutationObserver(function (e12) {
              let t4 = document.activeElement;
              for (let n4 of e12)
                n4.removedNodes.length > 0 &&
                  !(null != u2 && u2.contains(t4)) &&
                  D(u2);
            });
            return (
              u2 && n3.observe(u2, { childList: true, subtree: true }),
              () => {
                document.removeEventListener('focusin', e11),
                  document.removeEventListener('focusout', t3),
                  n3.disconnect();
              }
            );
          }
        }, [r2, u2, w2.paused]),
          (0, o.useEffect)(() => {
            if (u2) {
              M.add(w2);
              let e11 = document.activeElement;
              if (!u2.contains(e11)) {
                let t3 = new CustomEvent(x, S);
                u2.addEventListener(x, f2),
                  u2.dispatchEvent(t3),
                  t3.defaultPrevented ||
                    ((function (e12, { select: t4 = false } = {}) {
                      let n3 = document.activeElement;
                      for (let r3 of e12)
                        if (
                          (D(r3, { select: t4 }), document.activeElement !== n3)
                        )
                          return;
                    })(
                      R(u2).filter((e12) => 'A' !== e12.tagName),
                      { select: true }
                    ),
                    document.activeElement === e11 && D(u2));
              }
              return () => {
                u2.removeEventListener(x, f2),
                  setTimeout(() => {
                    let t3 = new CustomEvent(C, S);
                    u2.addEventListener(C, m2),
                      u2.dispatchEvent(t3),
                      t3.defaultPrevented ||
                        D(null != e11 ? e11 : document.body, { select: true }),
                      u2.removeEventListener(C, m2),
                      M.remove(w2);
                  }, 0);
              };
            }
          }, [u2, f2, m2, w2]);
        let y2 = (0, o.useCallback)(
          (e11) => {
            if ((!n2 && !r2) || w2.paused) return;
            let t3 =
                'Tab' === e11.key &&
                !e11.altKey &&
                !e11.ctrlKey &&
                !e11.metaKey,
              l2 = document.activeElement;
            if (t3 && l2) {
              let t4 = e11.currentTarget,
                [r3, o2] = (function (e12) {
                  let t5 = R(e12);
                  return [T(t5, e12), T(t5.reverse(), e12)];
                })(t4);
              r3 && o2
                ? e11.shiftKey || l2 !== o2
                  ? e11.shiftKey &&
                    l2 === r3 &&
                    (e11.preventDefault(), n2 && D(o2, { select: true }))
                  : (e11.preventDefault(), n2 && D(r3, { select: true }))
                : l2 === t4 && e11.preventDefault();
            }
          },
          [n2, r2, w2.paused]
        );
        return (0, o.createElement)(
          p.WV.div,
          (0, l.Z)({ tabIndex: -1 }, d2, { ref: g2, onKeyDown: y2 })
        );
      });
    function R(e10) {
      let t2 = [],
        n2 = document.createTreeWalker(e10, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (e11) => {
            let t3 = 'INPUT' === e11.tagName && 'hidden' === e11.type;
            return e11.disabled || e11.hidden || t3
              ? NodeFilter.FILTER_SKIP
              : e11.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
          }
        });
      for (; n2.nextNode(); ) t2.push(n2.currentNode);
      return t2;
    }
    function T(e10, t2) {
      for (let n2 of e10)
        if (
          !(function (e11, { upTo: t3 }) {
            if ('hidden' === getComputedStyle(e11).visibility) return true;
            for (; e11 && (void 0 === t3 || e11 !== t3); ) {
              if ('none' === getComputedStyle(e11).display) return true;
              e11 = e11.parentElement;
            }
            return false;
          })(n2, { upTo: t2 })
        )
          return n2;
    }
    function D(e10, { select: t2 = false } = {}) {
      if (e10 && e10.focus) {
        var n2;
        let r2 = document.activeElement;
        e10.focus({ preventScroll: true }),
          e10 !== r2 &&
            (n2 = e10) instanceof HTMLInputElement &&
            'select' in n2 &&
            t2 &&
            e10.select();
      }
    }
    let M = (function () {
      let e10 = [];
      return {
        add(t2) {
          let n2 = e10[0];
          t2 !== n2 && (null == n2 || n2.pause()),
            (e10 = _(e10, t2)).unshift(t2);
        },
        remove(t2) {
          var n2;
          null === (n2 = (e10 = _(e10, t2))[0]) || void 0 === n2 || n2.resume();
        }
      };
    })();
    function _(e10, t2) {
      let n2 = [...e10],
        r2 = n2.indexOf(t2);
      return -1 !== r2 && n2.splice(r2, 1), n2;
    }
    var k = n(31871),
      O = n(55878),
      W = n(68045),
      I = n(13606),
      L = n(11860),
      V = n(54138),
      A = n(2770);
    let N = 'Popper',
      [Z, F] = (0, c.b)(N),
      [H, B] = Z(N),
      K = (0, o.forwardRef)((e10, t2) => {
        let { __scopePopper: n2, virtualRef: r2, ...i2 } = e10,
          a2 = B('PopperAnchor', n2),
          d2 = (0, o.useRef)(null),
          u2 = (0, s.e)(t2, d2);
        return (
          (0, o.useEffect)(() => {
            a2.onAnchorChange((null == r2 ? void 0 : r2.current) || d2.current);
          }),
          r2
            ? null
            : (0, o.createElement)(p.WV.div, (0, l.Z)({}, i2, { ref: u2 }))
        );
      }),
      z = 'PopperContent',
      [$, U] = Z(z),
      j = (0, o.forwardRef)((e10, t2) => {
        var n2, r2, i2, a2, d2, u2, c2, f2;
        let {
            __scopePopper: m2,
            side: h2 = 'bottom',
            sideOffset: g2 = 0,
            align: w2 = 'center',
            alignOffset: y2 = 0,
            arrowPadding: E2 = 0,
            collisionBoundary: b2 = [],
            collisionPadding: x2 = 0,
            sticky: C2 = 'partial',
            hideWhenDetached: S2 = false,
            avoidCollisions: P2 = true,
            onPlaced: R2,
            ...T2
          } = e10,
          D2 = B(z, m2),
          [M2, _2] = (0, o.useState)(null),
          k2 = (0, s.e)(t2, (e11) => _2(e11)),
          [L2, N2] = (0, o.useState)(null),
          Z2 = (0, A.t)(L2),
          F2 =
            null !== (n2 = null == Z2 ? void 0 : Z2.width) && void 0 !== n2
              ? n2
              : 0,
          H2 =
            null !== (r2 = null == Z2 ? void 0 : Z2.height) && void 0 !== r2
              ? r2
              : 0,
          K2 =
            'number' == typeof x2
              ? x2
              : { top: 0, right: 0, bottom: 0, left: 0, ...x2 },
          U2 = Array.isArray(b2) ? b2 : [b2],
          j2 = U2.length > 0,
          q2 = { padding: K2, boundary: U2.filter(Y), altBoundary: j2 },
          {
            refs: J2,
            floatingStyles: Q2,
            placement: ee2,
            isPositioned: et2,
            middlewareData: en2
          } = (0, O.YF)({
            strategy: 'fixed',
            placement: h2 + ('center' !== w2 ? '-' + w2 : ''),
            whileElementsMounted: W.Me,
            elements: { reference: D2.anchor },
            middleware: [
              (0, I.cv)({ mainAxis: g2 + H2, alignmentAxis: y2 }),
              P2 &&
                (0, I.uY)({
                  mainAxis: true,
                  crossAxis: false,
                  limiter: 'partial' === C2 ? (0, I.dr)() : void 0,
                  ...q2
                }),
              P2 && (0, I.RR)({ ...q2 }),
              (0, I.dp)({
                ...q2,
                apply: ({
                  elements: e11,
                  rects: t3,
                  availableWidth: n3,
                  availableHeight: r3
                }) => {
                  let { width: l2, height: o2 } = t3.reference,
                    i3 = e11.floating.style;
                  i3.setProperty('--radix-popper-available-width', `${n3}px`),
                    i3.setProperty(
                      '--radix-popper-available-height',
                      `${r3}px`
                    ),
                    i3.setProperty('--radix-popper-anchor-width', `${l2}px`),
                    i3.setProperty('--radix-popper-anchor-height', `${o2}px`);
                }
              }),
              L2 && (0, O.x7)({ element: L2, padding: E2 }),
              X({ arrowWidth: F2, arrowHeight: H2 }),
              S2 && (0, I.Cp)({ strategy: 'referenceHidden' })
            ]
          }),
          [er2, el2] = G(ee2),
          eo2 = (0, v.W)(R2);
        (0, V.b)(() => {
          et2 && (null == eo2 || eo2());
        }, [et2, eo2]);
        let ei2 = null === (i2 = en2.arrow) || void 0 === i2 ? void 0 : i2.x,
          ea2 = null === (a2 = en2.arrow) || void 0 === a2 ? void 0 : a2.y,
          ed2 =
            (null === (d2 = en2.arrow) || void 0 === d2
              ? void 0
              : d2.centerOffset) !== 0,
          [eu2, es2] = (0, o.useState)();
        return (
          (0, V.b)(() => {
            M2 && es2(window.getComputedStyle(M2).zIndex);
          }, [M2]),
          (0, o.createElement)(
            'div',
            {
              ref: J2.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...Q2,
                transform: et2 ? Q2.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: eu2,
                '--radix-popper-transform-origin': [
                  null === (u2 = en2.transformOrigin) || void 0 === u2
                    ? void 0
                    : u2.x,
                  null === (c2 = en2.transformOrigin) || void 0 === c2
                    ? void 0
                    : c2.y
                ].join(' ')
              },
              dir: e10.dir
            },
            (0, o.createElement)(
              $,
              {
                scope: m2,
                placedSide: er2,
                onArrowChange: N2,
                arrowX: ei2,
                arrowY: ea2,
                shouldHideArrow: ed2
              },
              (0, o.createElement)(
                p.WV.div,
                (0, l.Z)({ 'data-side': er2, 'data-align': el2 }, T2, {
                  ref: k2,
                  style: {
                    ...T2.style,
                    animation: et2 ? void 0 : 'none',
                    opacity:
                      null !== (f2 = en2.hide) &&
                      void 0 !== f2 &&
                      f2.referenceHidden
                        ? 0
                        : void 0
                  }
                })
              )
            )
          )
        );
      }),
      q = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' };
    function Y(e10) {
      return null !== e10;
    }
    let X = (e10) => ({
      name: 'transformOrigin',
      options: e10,
      fn(t2) {
        var n2, r2, l2, o2, i2;
        let { placement: a2, rects: d2, middlewareData: u2 } = t2,
          s2 =
            (null === (n2 = u2.arrow) || void 0 === n2
              ? void 0
              : n2.centerOffset) !== 0,
          c2 = s2 ? 0 : e10.arrowWidth,
          f2 = s2 ? 0 : e10.arrowHeight,
          [p2, v2] = G(a2),
          m2 = { start: '0%', center: '50%', end: '100%' }[v2],
          h2 =
            (null !==
              (r2 =
                null === (l2 = u2.arrow) || void 0 === l2 ? void 0 : l2.x) &&
            void 0 !== r2
              ? r2
              : 0) +
            c2 / 2,
          g2 =
            (null !==
              (o2 =
                null === (i2 = u2.arrow) || void 0 === i2 ? void 0 : i2.y) &&
            void 0 !== o2
              ? o2
              : 0) +
            f2 / 2,
          w2 = '',
          y2 = '';
        return (
          'bottom' === p2
            ? ((w2 = s2 ? m2 : `${h2}px`), (y2 = `${-f2}px`))
            : 'top' === p2
            ? ((w2 = s2 ? m2 : `${h2}px`),
              (y2 = `${d2.floating.height + f2}px`))
            : 'right' === p2
            ? ((w2 = `${-f2}px`), (y2 = s2 ? m2 : `${g2}px`))
            : 'left' === p2 &&
              ((w2 = `${d2.floating.width + f2}px`),
              (y2 = s2 ? m2 : `${g2}px`)),
          { data: { x: w2, y: y2 } }
        );
      }
    });
    function G(e10) {
      let [t2, n2 = 'center'] = e10.split('-');
      return [t2, n2];
    }
    let J = (e10) => {
        let { __scopePopper: t2, children: n2 } = e10,
          [r2, l2] = (0, o.useState)(null);
        return (0, o.createElement)(
          H,
          { scope: t2, anchor: r2, onAnchorChange: l2 },
          n2
        );
      },
      Q = (0, o.forwardRef)((e10, t2) => {
        var n2;
        let {
          container: r2 = null == globalThis
            ? void 0
            : null === (n2 = globalThis.document) || void 0 === n2
            ? void 0
            : n2.body,
          ...a2
        } = e10;
        return r2
          ? i.createPortal(
              (0, o.createElement)(p.WV.div, (0, l.Z)({}, a2, { ref: t2 })),
              r2
            )
          : null;
      }),
      ee = (0, o.forwardRef)((e10, t2) => {
        let { children: n2, ...r2 } = e10,
          i2 = o.Children.toArray(n2),
          a2 = i2.find(er);
        if (a2) {
          let e11 = a2.props.children,
            n3 = i2.map((t3) =>
              t3 !== a2
                ? t3
                : o.Children.count(e11) > 1
                ? o.Children.only(null)
                : (0, o.isValidElement)(e11)
                ? e11.props.children
                : null
            );
          return (0, o.createElement)(
            et,
            (0, l.Z)({}, r2, { ref: t2 }),
            (0, o.isValidElement)(e11)
              ? (0, o.cloneElement)(e11, void 0, n3)
              : null
          );
        }
        return (0, o.createElement)(et, (0, l.Z)({}, r2, { ref: t2 }), n2);
      });
    ee.displayName = 'Slot';
    let et = (0, o.forwardRef)((e10, t2) => {
      let { children: n2, ...r2 } = e10;
      return (0, o.isValidElement)(n2)
        ? (0, o.cloneElement)(n2, {
            ...(function (e11, t3) {
              let n3 = { ...t3 };
              for (let r3 in t3) {
                let l2 = e11[r3],
                  o2 = t3[r3];
                /^on[A-Z]/.test(r3)
                  ? l2 && o2
                    ? (n3[r3] = (...e12) => {
                        o2(...e12), l2(...e12);
                      })
                    : l2 && (n3[r3] = l2)
                  : 'style' === r3
                  ? (n3[r3] = { ...l2, ...o2 })
                  : 'className' === r3 &&
                    (n3[r3] = [l2, o2].filter(Boolean).join(' '));
              }
              return { ...e11, ...n3 };
            })(r2, n2.props),
            ref: t2 ? (0, s.F)(t2, n2.ref) : n2.ref
          })
        : o.Children.count(n2) > 1
        ? o.Children.only(null)
        : null;
    });
    et.displayName = 'SlotClone';
    let en = ({ children: e10 }) => (0, o.createElement)(o.Fragment, null, e10);
    function er(e10) {
      return (0, o.isValidElement)(e10) && e10.type === en;
    }
    var el = n(54007),
      eo = n(2307);
    let ei = (0, o.forwardRef)((e10, t2) =>
      (0, o.createElement)(
        p.WV.span,
        (0, l.Z)({}, e10, {
          ref: t2,
          style: {
            position: 'absolute',
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
            ...e10.style
          }
        })
      )
    );
    var ea = n(16151),
      ed = n(23516);
    let eu = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
      es = [' ', 'Enter'],
      ec = 'Select',
      [ef, ep, ev] = (0, u.B)(ec),
      [em, eh] = (0, c.b)(ec, [ev, F]),
      eg = F(),
      [ew, ey] = em(ec),
      [eE, eb] = em(ec),
      ex = (0, o.forwardRef)((e10, t2) => {
        let { __scopeSelect: n2, disabled: r2 = false, ...i2 } = e10,
          a2 = eg(n2),
          u2 = ey('SelectTrigger', n2),
          c2 = u2.disabled || r2,
          f2 = (0, s.e)(t2, u2.onTriggerChange),
          v2 = ep(n2),
          [m2, h2, g2] = eY((e11) => {
            let t3 = v2().filter((e12) => !e12.disabled),
              n3 = t3.find((e12) => e12.value === u2.value),
              r3 = eX(t3, e11, n3);
            void 0 !== r3 && u2.onValueChange(r3.value);
          }),
          w2 = () => {
            c2 || (u2.onOpenChange(true), g2());
          };
        return (0, o.createElement)(
          K,
          (0, l.Z)({ asChild: true }, a2),
          (0, o.createElement)(
            p.WV.button,
            (0, l.Z)(
              {
                type: 'button',
                role: 'combobox',
                'aria-controls': u2.contentId,
                'aria-expanded': u2.open,
                'aria-required': u2.required,
                'aria-autocomplete': 'none',
                dir: u2.dir,
                'data-state': u2.open ? 'open' : 'closed',
                disabled: c2,
                'data-disabled': c2 ? '' : void 0,
                'data-placeholder': void 0 === u2.value ? '' : void 0
              },
              i2,
              {
                ref: f2,
                onClick: (0, d.M)(i2.onClick, (e11) => {
                  e11.currentTarget.focus();
                }),
                onPointerDown: (0, d.M)(i2.onPointerDown, (e11) => {
                  let t3 = e11.target;
                  t3.hasPointerCapture(e11.pointerId) &&
                    t3.releasePointerCapture(e11.pointerId),
                    0 === e11.button &&
                      false === e11.ctrlKey &&
                      (w2(),
                      (u2.triggerPointerDownPosRef.current = {
                        x: Math.round(e11.pageX),
                        y: Math.round(e11.pageY)
                      }),
                      e11.preventDefault());
                }),
                onKeyDown: (0, d.M)(i2.onKeyDown, (e11) => {
                  let t3 = '' !== m2.current;
                  e11.ctrlKey ||
                    e11.altKey ||
                    e11.metaKey ||
                    1 !== e11.key.length ||
                    h2(e11.key),
                    (!t3 || ' ' !== e11.key) &&
                      eu.includes(e11.key) &&
                      (w2(), e11.preventDefault());
                })
              }
            )
          )
        );
      }),
      eC = (0, o.forwardRef)((e10, t2) => {
        let {
            __scopeSelect: n2,
            className: r2,
            style: i2,
            children: a2,
            placeholder: d2,
            ...u2
          } = e10,
          c2 = ey('SelectValue', n2),
          { onValueNodeHasChildrenChange: f2 } = c2,
          v2 = void 0 !== a2,
          m2 = (0, s.e)(t2, c2.onValueNodeChange);
        return (
          (0, V.b)(() => {
            f2(v2);
          }, [f2, v2]),
          (0, o.createElement)(
            p.WV.span,
            (0, l.Z)({}, u2, { ref: m2, style: { pointerEvents: 'none' } }),
            void 0 === c2.value && void 0 !== d2 ? d2 : a2
          )
        );
      }),
      eS = (0, o.forwardRef)((e10, t2) => {
        let { __scopeSelect: n2, children: r2, ...i2 } = e10;
        return (0, o.createElement)(
          p.WV.span,
          (0, l.Z)({ 'aria-hidden': true }, i2, { ref: t2 }),
          r2 || '\u25BC'
        );
      }),
      eP = 'SelectContent',
      eR = (0, o.forwardRef)((e10, t2) => {
        let n2 = ey(eP, e10.__scopeSelect),
          [r2, a2] = (0, o.useState)();
        return ((0, V.b)(() => {
          a2(new DocumentFragment());
        }, []),
        n2.open)
          ? (0, o.createElement)(eM, (0, l.Z)({}, e10, { ref: t2 }))
          : r2
          ? (0, i.createPortal)(
              (0, o.createElement)(
                eT,
                { scope: e10.__scopeSelect },
                (0, o.createElement)(
                  ef.Slot,
                  { scope: e10.__scopeSelect },
                  (0, o.createElement)('div', null, e10.children)
                )
              ),
              r2
            )
          : null;
      }),
      [eT, eD] = em(eP),
      eM = (0, o.forwardRef)((e10, t2) => {
        let {
            __scopeSelect: n2,
            position: r2 = 'item-aligned',
            onCloseAutoFocus: i2,
            onEscapeKeyDown: a2,
            onPointerDownOutside: u2,
            side: c2,
            sideOffset: f2,
            align: p2,
            alignOffset: v2,
            arrowPadding: m2,
            collisionBoundary: h2,
            collisionPadding: g2,
            sticky: y2,
            hideWhenDetached: E2,
            avoidCollisions: x2,
            ...C2
          } = e10,
          S2 = ey(eP, n2),
          [R2, T2] = (0, o.useState)(null),
          [D2, M2] = (0, o.useState)(null),
          _2 = (0, s.e)(t2, (e11) => T2(e11)),
          [k2, O2] = (0, o.useState)(null),
          [W2, I2] = (0, o.useState)(null),
          L2 = ep(n2),
          [V2, A2] = (0, o.useState)(false),
          N2 = (0, o.useRef)(false);
        (0, o.useEffect)(() => {
          if (R2) return (0, ea.Ry)(R2);
        }, [R2]),
          (0, b.EW)();
        let Z2 = (0, o.useCallback)(
            (e11) => {
              let [t3, ...n3] = L2().map((e12) => e12.ref.current),
                [r3] = n3.slice(-1),
                l2 = document.activeElement;
              for (let n4 of e11)
                if (
                  n4 === l2 ||
                  (null == n4 || n4.scrollIntoView({ block: 'nearest' }),
                  n4 === t3 && D2 && (D2.scrollTop = 0),
                  n4 === r3 && D2 && (D2.scrollTop = D2.scrollHeight),
                  null == n4 || n4.focus(),
                  document.activeElement !== l2)
                )
                  return;
            },
            [L2, D2]
          ),
          F2 = (0, o.useCallback)(() => Z2([k2, R2]), [Z2, k2, R2]);
        (0, o.useEffect)(() => {
          V2 && F2();
        }, [V2, F2]);
        let { onOpenChange: H2, triggerPointerDownPosRef: B2 } = S2;
        (0, o.useEffect)(() => {
          if (R2) {
            let e11 = { x: 0, y: 0 },
              t3 = (t4) => {
                var n4, r3, l2, o2;
                e11 = {
                  x: Math.abs(
                    Math.round(t4.pageX) -
                      (null !==
                        (n4 =
                          null === (r3 = B2.current) || void 0 === r3
                            ? void 0
                            : r3.x) && void 0 !== n4
                        ? n4
                        : 0)
                  ),
                  y: Math.abs(
                    Math.round(t4.pageY) -
                      (null !==
                        (l2 =
                          null === (o2 = B2.current) || void 0 === o2
                            ? void 0
                            : o2.y) && void 0 !== l2
                        ? l2
                        : 0)
                  )
                };
              },
              n3 = (n4) => {
                e11.x <= 10 && e11.y <= 10
                  ? n4.preventDefault()
                  : R2.contains(n4.target) || H2(false),
                  document.removeEventListener('pointermove', t3),
                  (B2.current = null);
              };
            return (
              null !== B2.current &&
                (document.addEventListener('pointermove', t3),
                document.addEventListener('pointerup', n3, {
                  capture: true,
                  once: true
                })),
              () => {
                document.removeEventListener('pointermove', t3),
                  document.removeEventListener('pointerup', n3, {
                    capture: true
                  });
              }
            );
          }
        }, [R2, H2, B2]),
          (0, o.useEffect)(() => {
            let e11 = () => H2(false);
            return (
              window.addEventListener('blur', e11),
              window.addEventListener('resize', e11),
              () => {
                window.removeEventListener('blur', e11),
                  window.removeEventListener('resize', e11);
              }
            );
          }, [H2]);
        let [K2, z2] = eY((e11) => {
            let t3 = L2().filter((e12) => !e12.disabled),
              n3 = t3.find((e12) => e12.ref.current === document.activeElement),
              r3 = eX(t3, e11, n3);
            r3 && setTimeout(() => r3.ref.current.focus());
          }),
          $2 = (0, o.useCallback)(
            (e11, t3, n3) => {
              let r3 = !N2.current && !n3;
              ((void 0 !== S2.value && S2.value === t3) || r3) &&
                (O2(e11), r3 && (N2.current = true));
            },
            [S2.value]
          ),
          U2 = (0, o.useCallback)(
            () => (null == R2 ? void 0 : R2.focus()),
            [R2]
          ),
          j2 = (0, o.useCallback)(
            (e11, t3, n3) => {
              let r3 = !N2.current && !n3;
              ((void 0 !== S2.value && S2.value === t3) || r3) && I2(e11);
            },
            [S2.value]
          ),
          q2 = 'popper' === r2 ? ek : e_;
        return (0, o.createElement)(
          eT,
          {
            scope: n2,
            content: R2,
            viewport: D2,
            onViewportChange: M2,
            itemRefCallback: $2,
            selectedItem: k2,
            onItemLeave: U2,
            itemTextRefCallback: j2,
            focusSelectedItem: F2,
            selectedItemText: W2,
            position: r2,
            isPositioned: V2,
            searchRef: K2
          },
          (0, o.createElement)(
            ed.Z,
            { as: ee, allowPinchZoom: true },
            (0, o.createElement)(
              P,
              {
                asChild: true,
                trapped: S2.open,
                onMountAutoFocus: (e11) => {
                  e11.preventDefault();
                },
                onUnmountAutoFocus: (0, d.M)(i2, (e11) => {
                  var t3;
                  null === (t3 = S2.trigger) ||
                    void 0 === t3 ||
                    t3.focus({ preventScroll: true }),
                    e11.preventDefault();
                })
              },
              (0, o.createElement)(
                w,
                {
                  asChild: true,
                  disableOutsidePointerEvents: true,
                  onEscapeKeyDown: a2,
                  onPointerDownOutside: u2,
                  onFocusOutside: (e11) => e11.preventDefault(),
                  onDismiss: () => S2.onOpenChange(false)
                },
                (0, o.createElement)(
                  q2,
                  (0, l.Z)(
                    {
                      role: 'listbox',
                      id: S2.contentId,
                      'data-state': S2.open ? 'open' : 'closed',
                      dir: S2.dir,
                      onContextMenu: (e11) => e11.preventDefault()
                    },
                    C2,
                    q2 === ek
                      ? {
                          side: c2,
                          sideOffset: f2,
                          align: p2,
                          alignOffset: v2,
                          arrowPadding: m2,
                          collisionBoundary: h2,
                          collisionPadding: g2,
                          sticky: y2,
                          hideWhenDetached: E2,
                          avoidCollisions: x2
                        }
                      : {},
                    {
                      onPlaced: () => A2(true),
                      ref: _2,
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        outline: 'none',
                        ...C2.style
                      },
                      onKeyDown: (0, d.M)(C2.onKeyDown, (e11) => {
                        let t3 = e11.ctrlKey || e11.altKey || e11.metaKey;
                        if (
                          ('Tab' === e11.key && e11.preventDefault(),
                          t3 || 1 !== e11.key.length || z2(e11.key),
                          ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(
                            e11.key
                          ))
                        ) {
                          let t4 = L2()
                            .filter((e12) => !e12.disabled)
                            .map((e12) => e12.ref.current);
                          if (
                            (['ArrowUp', 'End'].includes(e11.key) &&
                              (t4 = t4.slice().reverse()),
                            ['ArrowUp', 'ArrowDown'].includes(e11.key))
                          ) {
                            let n3 = e11.target,
                              r3 = t4.indexOf(n3);
                            t4 = t4.slice(r3 + 1);
                          }
                          setTimeout(() => Z2(t4)), e11.preventDefault();
                        }
                      })
                    }
                  )
                )
              )
            )
          )
        );
      }),
      e_ = (0, o.forwardRef)((e10, t2) => {
        let { __scopeSelect: n2, onPlaced: r2, ...i2 } = e10,
          d2 = ey(eP, n2),
          u2 = eD(eP, n2),
          [c2, f2] = (0, o.useState)(null),
          [v2, m2] = (0, o.useState)(null),
          h2 = (0, s.e)(t2, (e11) => m2(e11)),
          g2 = ep(n2),
          w2 = (0, o.useRef)(false),
          y2 = (0, o.useRef)(true),
          {
            viewport: E2,
            selectedItem: b2,
            selectedItemText: x2,
            focusSelectedItem: C2
          } = u2,
          S2 = (0, o.useCallback)(() => {
            if (d2.trigger && d2.valueNode && c2 && v2 && E2 && b2 && x2) {
              let e11 = d2.trigger.getBoundingClientRect(),
                t3 = v2.getBoundingClientRect(),
                n3 = d2.valueNode.getBoundingClientRect(),
                l2 = x2.getBoundingClientRect();
              if ('rtl' !== d2.dir) {
                let r3 = l2.left - t3.left,
                  o3 = n3.left - r3,
                  i4 = e11.left - o3,
                  d3 = e11.width + i4,
                  u4 = Math.max(d3, t3.width),
                  s3 = window.innerWidth - 10,
                  f4 = (0, a.u)(o3, [10, s3 - u4]);
                (c2.style.minWidth = d3 + 'px'), (c2.style.left = f4 + 'px');
              } else {
                let r3 = t3.right - l2.right,
                  o3 = window.innerWidth - n3.right - r3,
                  i4 = window.innerWidth - e11.right - o3,
                  d3 = e11.width + i4,
                  u4 = Math.max(d3, t3.width),
                  s3 = window.innerWidth - 10,
                  f4 = (0, a.u)(o3, [10, s3 - u4]);
                (c2.style.minWidth = d3 + 'px'), (c2.style.right = f4 + 'px');
              }
              let o2 = g2(),
                i3 = window.innerHeight - 20,
                u3 = E2.scrollHeight,
                s2 = window.getComputedStyle(v2),
                f3 = parseInt(s2.borderTopWidth, 10),
                p2 = parseInt(s2.paddingTop, 10),
                m3 = parseInt(s2.borderBottomWidth, 10),
                h3 = f3 + p2 + u3 + parseInt(s2.paddingBottom, 10) + m3,
                y3 = Math.min(5 * b2.offsetHeight, h3),
                C3 = window.getComputedStyle(E2),
                S3 = parseInt(C3.paddingTop, 10),
                P3 = parseInt(C3.paddingBottom, 10),
                R3 = e11.top + e11.height / 2 - 10,
                T3 = b2.offsetHeight / 2,
                D2 = f3 + p2 + (b2.offsetTop + T3);
              if (D2 <= R3) {
                let e12 = b2 === o2[o2.length - 1].ref.current;
                c2.style.bottom = '0px';
                let t4 = v2.clientHeight - E2.offsetTop - E2.offsetHeight;
                c2.style.height =
                  D2 + Math.max(i3 - R3, T3 + (e12 ? P3 : 0) + t4 + m3) + 'px';
              } else {
                let e12 = b2 === o2[0].ref.current;
                c2.style.top = '0px';
                let t4 = Math.max(R3, f3 + E2.offsetTop + (e12 ? S3 : 0) + T3);
                (c2.style.height = t4 + (h3 - D2) + 'px'),
                  (E2.scrollTop = D2 - R3 + E2.offsetTop);
              }
              (c2.style.margin = '10px 0'),
                (c2.style.minHeight = y3 + 'px'),
                (c2.style.maxHeight = i3 + 'px'),
                null == r2 || r2(),
                requestAnimationFrame(() => (w2.current = true));
            }
          }, [g2, d2.trigger, d2.valueNode, c2, v2, E2, b2, x2, d2.dir, r2]);
        (0, V.b)(() => S2(), [S2]);
        let [P2, R2] = (0, o.useState)();
        (0, V.b)(() => {
          v2 && R2(window.getComputedStyle(v2).zIndex);
        }, [v2]);
        let T2 = (0, o.useCallback)(
          (e11) => {
            e11 &&
              true === y2.current &&
              (S2(), null == C2 || C2(), (y2.current = false));
          },
          [S2, C2]
        );
        return (0, o.createElement)(
          eO,
          {
            scope: n2,
            contentWrapper: c2,
            shouldExpandOnScrollRef: w2,
            onScrollButtonChange: T2
          },
          (0, o.createElement)(
            'div',
            {
              ref: f2,
              style: {
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                zIndex: P2
              }
            },
            (0, o.createElement)(
              p.WV.div,
              (0, l.Z)({}, i2, {
                ref: h2,
                style: {
                  boxSizing: 'border-box',
                  maxHeight: '100%',
                  ...i2.style
                }
              })
            )
          )
        );
      }),
      ek = (0, o.forwardRef)((e10, t2) => {
        let {
            __scopeSelect: n2,
            align: r2 = 'start',
            collisionPadding: i2 = 10,
            ...a2
          } = e10,
          d2 = eg(n2);
        return (0, o.createElement)(
          j,
          (0, l.Z)({}, d2, a2, {
            ref: t2,
            align: r2,
            collisionPadding: i2,
            style: {
              boxSizing: 'border-box',
              ...a2.style,
              '--radix-select-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-select-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-select-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-select-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-select-trigger-height':
                'var(--radix-popper-anchor-height)'
            }
          })
        );
      }),
      [eO, eW] = em(eP, {}),
      eI = 'SelectViewport',
      eL = (0, o.forwardRef)((e10, t2) => {
        let { __scopeSelect: n2, ...r2 } = e10,
          i2 = eD(eI, n2),
          a2 = eW(eI, n2),
          u2 = (0, s.e)(t2, i2.onViewportChange),
          c2 = (0, o.useRef)(0);
        return (0, o.createElement)(
          o.Fragment,
          null,
          (0, o.createElement)('style', {
            dangerouslySetInnerHTML: {
              __html:
                '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}'
            }
          }),
          (0, o.createElement)(
            ef.Slot,
            { scope: n2 },
            (0, o.createElement)(
              p.WV.div,
              (0, l.Z)(
                { 'data-radix-select-viewport': '', role: 'presentation' },
                r2,
                {
                  ref: u2,
                  style: {
                    position: 'relative',
                    flex: 1,
                    overflow: 'auto',
                    ...r2.style
                  },
                  onScroll: (0, d.M)(r2.onScroll, (e11) => {
                    let t3 = e11.currentTarget,
                      { contentWrapper: n3, shouldExpandOnScrollRef: r3 } = a2;
                    if (null != r3 && r3.current && n3) {
                      let e12 = Math.abs(c2.current - t3.scrollTop);
                      if (e12 > 0) {
                        let r4 = window.innerHeight - 20,
                          l2 = Math.max(
                            parseFloat(n3.style.minHeight),
                            parseFloat(n3.style.height)
                          );
                        if (l2 < r4) {
                          let o2 = l2 + e12,
                            i3 = Math.min(r4, o2),
                            a3 = o2 - i3;
                          (n3.style.height = i3 + 'px'),
                            '0px' === n3.style.bottom &&
                              ((t3.scrollTop = a3 > 0 ? a3 : 0),
                              (n3.style.justifyContent = 'flex-end'));
                        }
                      }
                    }
                    c2.current = t3.scrollTop;
                  })
                }
              )
            )
          )
        );
      }),
      [eV, eA] = em('SelectGroup'),
      eN = (0, o.forwardRef)((e10, t2) => {
        let { __scopeSelect: n2, ...r2 } = e10,
          i2 = (0, k.M)();
        return (0, o.createElement)(
          eV,
          { scope: n2, id: i2 },
          (0, o.createElement)(
            p.WV.div,
            (0, l.Z)({ role: 'group', 'aria-labelledby': i2 }, r2, { ref: t2 })
          )
        );
      }),
      eZ = (0, o.forwardRef)((e10, t2) => {
        let { __scopeSelect: n2, ...r2 } = e10,
          i2 = eA('SelectLabel', n2);
        return (0, o.createElement)(
          p.WV.div,
          (0, l.Z)({ id: i2.id }, r2, { ref: t2 })
        );
      }),
      eF = 'SelectItem',
      [eH, eB] = em(eF),
      eK = (0, o.forwardRef)((e10, t2) => {
        let {
            __scopeSelect: n2,
            value: r2,
            disabled: i2 = false,
            textValue: a2,
            ...u2
          } = e10,
          c2 = ey(eF, n2),
          f2 = eD(eF, n2),
          v2 = c2.value === r2,
          [m2, h2] = (0, o.useState)(null != a2 ? a2 : ''),
          [g2, w2] = (0, o.useState)(false),
          y2 = (0, s.e)(t2, (e11) => {
            var t3;
            return null === (t3 = f2.itemRefCallback) || void 0 === t3
              ? void 0
              : t3.call(f2, e11, r2, i2);
          }),
          E2 = (0, k.M)(),
          b2 = () => {
            i2 || (c2.onValueChange(r2), c2.onOpenChange(false));
          };
        return (0, o.createElement)(
          eH,
          {
            scope: n2,
            value: r2,
            disabled: i2,
            textId: E2,
            isSelected: v2,
            onItemTextChange: (0, o.useCallback)((e11) => {
              h2((t3) => {
                var n3;
                return (
                  t3 ||
                  (null !== (n3 = null == e11 ? void 0 : e11.textContent) &&
                  void 0 !== n3
                    ? n3
                    : ''
                  ).trim()
                );
              });
            }, [])
          },
          (0, o.createElement)(
            ef.ItemSlot,
            { scope: n2, value: r2, disabled: i2, textValue: m2 },
            (0, o.createElement)(
              p.WV.div,
              (0, l.Z)(
                {
                  role: 'option',
                  'aria-labelledby': E2,
                  'data-highlighted': g2 ? '' : void 0,
                  'aria-selected': v2 && g2,
                  'data-state': v2 ? 'checked' : 'unchecked',
                  'aria-disabled': i2 || void 0,
                  'data-disabled': i2 ? '' : void 0,
                  tabIndex: i2 ? void 0 : -1
                },
                u2,
                {
                  ref: y2,
                  onFocus: (0, d.M)(u2.onFocus, () => w2(true)),
                  onBlur: (0, d.M)(u2.onBlur, () => w2(false)),
                  onPointerUp: (0, d.M)(u2.onPointerUp, b2),
                  onPointerMove: (0, d.M)(u2.onPointerMove, (e11) => {
                    if (i2) {
                      var t3;
                      null === (t3 = f2.onItemLeave) ||
                        void 0 === t3 ||
                        t3.call(f2);
                    } else e11.currentTarget.focus({ preventScroll: true });
                  }),
                  onPointerLeave: (0, d.M)(u2.onPointerLeave, (e11) => {
                    if (e11.currentTarget === document.activeElement) {
                      var t3;
                      null === (t3 = f2.onItemLeave) ||
                        void 0 === t3 ||
                        t3.call(f2);
                    }
                  }),
                  onKeyDown: (0, d.M)(u2.onKeyDown, (e11) => {
                    var t3;
                    ((null === (t3 = f2.searchRef) || void 0 === t3
                      ? void 0
                      : t3.current) !== '' &&
                      ' ' === e11.key) ||
                      (es.includes(e11.key) && b2(),
                      ' ' === e11.key && e11.preventDefault());
                  })
                }
              )
            )
          )
        );
      }),
      ez = 'SelectItemText',
      e$ = (0, o.forwardRef)((e10, t2) => {
        let { __scopeSelect: n2, className: r2, style: a2, ...d2 } = e10,
          u2 = ey(ez, n2),
          c2 = eD(ez, n2),
          f2 = eB(ez, n2),
          v2 = eb(ez, n2),
          [m2, h2] = (0, o.useState)(null),
          g2 = (0, s.e)(
            t2,
            (e11) => h2(e11),
            f2.onItemTextChange,
            (e11) => {
              var t3;
              return null === (t3 = c2.itemTextRefCallback) || void 0 === t3
                ? void 0
                : t3.call(c2, e11, f2.value, f2.disabled);
            }
          ),
          w2 = null == m2 ? void 0 : m2.textContent,
          y2 = (0, o.useMemo)(
            () =>
              (0, o.createElement)(
                'option',
                { key: f2.value, value: f2.value, disabled: f2.disabled },
                w2
              ),
            [f2.disabled, f2.value, w2]
          ),
          { onNativeOptionAdd: E2, onNativeOptionRemove: b2 } = v2;
        return (
          (0, V.b)(() => (E2(y2), () => b2(y2)), [E2, b2, y2]),
          (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              p.WV.span,
              (0, l.Z)({ id: f2.textId }, d2, { ref: g2 })
            ),
            f2.isSelected && u2.valueNode && !u2.valueNodeHasChildren
              ? (0, i.createPortal)(d2.children, u2.valueNode)
              : null
          )
        );
      }),
      eU = (0, o.forwardRef)((e10, t2) => {
        let { __scopeSelect: n2, ...r2 } = e10;
        return eB('SelectItemIndicator', n2).isSelected
          ? (0, o.createElement)(
              p.WV.span,
              (0, l.Z)({ 'aria-hidden': true }, r2, { ref: t2 })
            )
          : null;
      }),
      ej =
        ((e10, t2) => {
          let { __scopeSelect: n2, onAutoScroll: r2, ...i2 } = e10,
            a2 = eD('SelectScrollButton', n2),
            u2 = (0, o.useRef)(null),
            s2 = ep(n2),
            c2 = (0, o.useCallback)(() => {
              null !== u2.current &&
                (window.clearInterval(u2.current), (u2.current = null));
            }, []);
          return (
            (0, o.useEffect)(() => () => c2(), [c2]),
            (0, V.b)(() => {
              var e11;
              let t3 = s2().find(
                (e12) => e12.ref.current === document.activeElement
              );
              null == t3 ||
                null === (e11 = t3.ref.current) ||
                void 0 === e11 ||
                e11.scrollIntoView({ block: 'nearest' });
            }, [s2]),
            (0, o.createElement)(
              p.WV.div,
              (0, l.Z)({ 'aria-hidden': true }, i2, {
                ref: t2,
                style: { flexShrink: 0, ...i2.style },
                onPointerDown: (0, d.M)(i2.onPointerDown, () => {
                  null === u2.current &&
                    (u2.current = window.setInterval(r2, 50));
                }),
                onPointerMove: (0, d.M)(i2.onPointerMove, () => {
                  var e11;
                  null === (e11 = a2.onItemLeave) ||
                    void 0 === e11 ||
                    e11.call(a2),
                    null === u2.current &&
                      (u2.current = window.setInterval(r2, 50));
                }),
                onPointerLeave: (0, d.M)(i2.onPointerLeave, () => {
                  c2();
                })
              })
            )
          );
        },
        (0, o.forwardRef)((e10, t2) => {
          let { __scopeSelect: n2, ...r2 } = e10;
          return (0, o.createElement)(
            p.WV.div,
            (0, l.Z)({ 'aria-hidden': true }, r2, { ref: t2 })
          );
        })),
      eq = (0, o.forwardRef)((e10, t2) => {
        let { value: n2, ...r2 } = e10,
          i2 = (0, o.useRef)(null),
          a2 = (0, s.e)(t2, i2),
          d2 = (0, eo.D)(n2);
        return (
          (0, o.useEffect)(() => {
            let e11 = i2.current,
              t3 = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                'value'
              ).set;
            if (d2 !== n2 && t3) {
              let r3 = new Event('change', { bubbles: true });
              t3.call(e11, n2), e11.dispatchEvent(r3);
            }
          }, [d2, n2]),
          (0, o.createElement)(
            ei,
            { asChild: true },
            (0, o.createElement)(
              'select',
              (0, l.Z)({}, r2, { ref: a2, defaultValue: n2 })
            )
          )
        );
      });
    function eY(e10) {
      let t2 = (0, v.W)(e10),
        n2 = (0, o.useRef)(''),
        r2 = (0, o.useRef)(0),
        l2 = (0, o.useCallback)(
          (e11) => {
            let l3 = n2.current + e11;
            t2(l3),
              (function e12(t3) {
                (n2.current = t3),
                  window.clearTimeout(r2.current),
                  '' !== t3 &&
                    (r2.current = window.setTimeout(() => e12(''), 1e3));
              })(l3);
          },
          [t2]
        ),
        i2 = (0, o.useCallback)(() => {
          (n2.current = ''), window.clearTimeout(r2.current);
        }, []);
      return (
        (0, o.useEffect)(() => () => window.clearTimeout(r2.current), []),
        [n2, l2, i2]
      );
    }
    function eX(e10, t2, n2) {
      var r2;
      let l2 =
          t2.length > 1 && Array.from(t2).every((e11) => e11 === t2[0])
            ? t2[0]
            : t2,
        o2 =
          ((r2 = Math.max(n2 ? e10.indexOf(n2) : -1, 0)),
          e10.map((t3, n3) => e10[(r2 + n3) % e10.length]));
      1 === l2.length && (o2 = o2.filter((e11) => e11 !== n2));
      let i2 = o2.find((e11) =>
        e11.textValue.toLowerCase().startsWith(l2.toLowerCase())
      );
      return i2 !== n2 ? i2 : void 0;
    }
    eq.displayName = 'BubbleSelect';
    let eG = (e10) => {
        let {
            __scopeSelect: t2,
            children: n2,
            open: r2,
            defaultOpen: l2,
            onOpenChange: i2,
            value: a2,
            defaultValue: d2,
            onValueChange: u2,
            dir: s2,
            name: c2,
            autoComplete: p2,
            disabled: v2,
            required: m2
          } = e10,
          h2 = eg(t2),
          [g2, w2] = (0, o.useState)(null),
          [y2, E2] = (0, o.useState)(null),
          [b2, x2] = (0, o.useState)(false),
          C2 = (0, f.gm)(s2),
          [S2 = false, P2] = (0, el.T)({
            prop: r2,
            defaultProp: l2,
            onChange: i2
          }),
          [R2, T2] = (0, el.T)({ prop: a2, defaultProp: d2, onChange: u2 }),
          D2 = (0, o.useRef)(null),
          M2 = !g2 || !!g2.closest('form'),
          [_2, O2] = (0, o.useState)(/* @__PURE__ */ new Set()),
          W2 = Array.from(_2)
            .map((e11) => e11.props.value)
            .join(';');
        return (0, o.createElement)(
          J,
          h2,
          (0, o.createElement)(
            ew,
            {
              required: m2,
              scope: t2,
              trigger: g2,
              onTriggerChange: w2,
              valueNode: y2,
              onValueNodeChange: E2,
              valueNodeHasChildren: b2,
              onValueNodeHasChildrenChange: x2,
              contentId: (0, k.M)(),
              value: R2,
              onValueChange: T2,
              open: S2,
              onOpenChange: P2,
              dir: C2,
              triggerPointerDownPosRef: D2,
              disabled: v2
            },
            (0, o.createElement)(
              ef.Provider,
              { scope: t2 },
              (0, o.createElement)(
                eE,
                {
                  scope: e10.__scopeSelect,
                  onNativeOptionAdd: (0, o.useCallback)((e11) => {
                    O2((t3) => new Set(t3).add(e11));
                  }, []),
                  onNativeOptionRemove: (0, o.useCallback)((e11) => {
                    O2((t3) => {
                      let n3 = new Set(t3);
                      return n3.delete(e11), n3;
                    });
                  }, [])
                },
                n2
              )
            ),
            M2
              ? (0, o.createElement)(
                  eq,
                  {
                    key: W2,
                    'aria-hidden': true,
                    required: m2,
                    tabIndex: -1,
                    name: c2,
                    autoComplete: p2,
                    value: R2,
                    onChange: (e11) => T2(e11.target.value),
                    disabled: v2
                  },
                  void 0 === R2
                    ? (0, o.createElement)('option', { value: '' })
                    : null,
                  Array.from(_2)
                )
              : null
          )
        );
      },
      eJ = ex,
      eQ = eC,
      e0 = eS,
      e1 = (e10) => (0, o.createElement)(Q, (0, l.Z)({ asChild: true }, e10)),
      e2 = eR,
      e7 = eL,
      e5 = eN,
      e8 = eZ,
      e3 = eK,
      e6 = e$,
      e9 = eU,
      e4 = ej;
  };
  return __namedExportsObject;
};
export { __getNamedExports };
