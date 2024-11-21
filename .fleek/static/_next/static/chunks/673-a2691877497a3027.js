'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [673],
  {
    46441: function (e, t, n) {
      n.d(t, {
        f: function () {
          return i;
        }
      });
      var r = n(22988),
        l = n(2265),
        o = n(18676);
      let i = (0, l.forwardRef)((e, t) => {
        let { children: n, width: i = 10, height: a = 5, ...u } = e;
        return (0, l.createElement)(
          o.WV.svg,
          (0, r.Z)({}, u, {
            ref: t,
            width: i,
            height: a,
            viewBox: '0 0 30 10',
            preserveAspectRatio: 'none'
          }),
          e.asChild
            ? n
            : (0, l.createElement)('polygon', { points: '0,0 30,0 15,10' })
        );
      });
    },
    921: function (e, t, n) {
      n.d(t, {
        B: function () {
          return c;
        }
      });
      var r = n(2265),
        l = n(98324),
        o = n(1584),
        i = n(22988);
      let a = (0, r.forwardRef)((e, t) => {
        let { children: n, ...l } = e,
          o = r.Children.toArray(n),
          a = o.find(s);
        if (a) {
          let e = a.props.children,
            n = o.map((t) =>
              t !== a
                ? t
                : r.Children.count(e) > 1
                ? r.Children.only(null)
                : (0, r.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, r.createElement)(
            u,
            (0, i.Z)({}, l, { ref: t }),
            (0, r.isValidElement)(e) ? (0, r.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, r.createElement)(u, (0, i.Z)({}, l, { ref: t }), n);
      });
      a.displayName = 'Slot';
      let u = (0, r.forwardRef)((e, t) => {
        let { children: n, ...l } = e;
        return (0, r.isValidElement)(n)
          ? (0, r.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let l = e[r],
                    o = t[r];
                  /^on[A-Z]/.test(r)
                    ? l && o
                      ? (n[r] = (...e) => {
                          o(...e), l(...e);
                        })
                      : l && (n[r] = l)
                    : 'style' === r
                    ? (n[r] = { ...l, ...o })
                    : 'className' === r &&
                      (n[r] = [l, o].filter(Boolean).join(' '));
                }
                return { ...e, ...n };
              })(l, n.props),
              ref: t ? (0, o.F)(t, n.ref) : n.ref
            })
          : r.Children.count(n) > 1
          ? r.Children.only(null)
          : null;
      });
      u.displayName = 'SlotClone';
      let d = ({ children: e }) => (0, r.createElement)(r.Fragment, null, e);
      function s(e) {
        return (0, r.isValidElement)(e) && e.type === d;
      }
      function c(e) {
        let t = e + 'CollectionProvider',
          [n, i] = (0, l.b)(t),
          [u, d] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map()
          }),
          s = e + 'CollectionSlot',
          c = r.forwardRef((e, t) => {
            let { scope: n, children: l } = e,
              i = d(s, n),
              u = (0, o.e)(t, i.collectionRef);
            return r.createElement(a, { ref: u }, l);
          }),
          f = e + 'CollectionItemSlot',
          p = 'data-radix-collection-item';
        return [
          {
            Provider: (e) => {
              let { scope: t, children: n } = e,
                l = r.useRef(null),
                o = r.useRef(new Map()).current;
              return r.createElement(
                u,
                { scope: t, itemMap: o, collectionRef: l },
                n
              );
            },
            Slot: c,
            ItemSlot: r.forwardRef((e, t) => {
              let { scope: n, children: l, ...i } = e,
                u = r.useRef(null),
                s = (0, o.e)(t, u),
                c = d(f, n);
              return (
                r.useEffect(
                  () => (
                    c.itemMap.set(u, { ref: u, ...i }),
                    () => void c.itemMap.delete(u)
                  )
                ),
                r.createElement(a, { [p]: '', ref: s }, l)
              );
            })
          },
          function (t) {
            let n = d(e + 'CollectionConsumer', t);
            return r.useCallback(() => {
              let e = n.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${p}]`));
              return Array.from(n.itemMap.values()).sort(
                (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
              );
            }, [n.collectionRef, n.itemMap]);
          },
          i
        ];
      }
    },
    28673: function (e, t, n) {
      let r, l;
      n.d(t, {
        VY: function () {
          return e5;
        },
        ZA: function () {
          return e8;
        },
        JO: function () {
          return e1;
        },
        ck: function () {
          return e3;
        },
        wU: function () {
          return e9;
        },
        eT: function () {
          return e7;
        },
        __: function () {
          return e4;
        },
        h_: function () {
          return e2;
        },
        fC: function () {
          return eJ;
        },
        Z0: function () {
          return te;
        },
        xz: function () {
          return eQ;
        },
        B4: function () {
          return e0;
        },
        l_: function () {
          return e6;
        }
      });
      var o = n(22988),
        i = n(2265),
        a = n(54887),
        u = n(62361),
        d = n(78149),
        s = n(921),
        c = n(1584),
        f = n(98324),
        p = n(87513),
        v = n(18676),
        m = n(75137),
        h = n(66486);
      let g = 'dismissableLayer.update',
        w = (0, i.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set()
        }),
        y = (0, i.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: l = !1,
              onEscapeKeyDown: a,
              onPointerDownOutside: u,
              onFocusOutside: s,
              onInteractOutside: f,
              onDismiss: p,
              ...y
            } = e,
            x = (0, i.useContext)(w),
            [C, S] = (0, i.useState)(null),
            P =
              null !== (n = null == C ? void 0 : C.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, R] = (0, i.useState)({}),
            T = (0, c.e)(t, (e) => S(e)),
            D = Array.from(x.layers),
            [M] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
            _ = D.indexOf(M),
            k = C ? D.indexOf(C) : -1,
            O = x.layersWithOutsidePointerEventsDisabled.size > 0,
            W = k >= _,
            I = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, m.W)(e),
                r = (0, i.useRef)(!1),
                l = (0, i.useRef)(() => {});
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function o() {
                          b('dismissableLayer.pointerDownOutside', n, r, {
                            discrete: !0
                          });
                        }
                        'touch' === e.pointerType
                          ? (t.removeEventListener('click', l.current),
                            (l.current = o),
                            t.addEventListener('click', l.current, {
                              once: !0
                            }))
                          : o();
                      }
                      r.current = !1;
                    },
                    o = window.setTimeout(() => {
                      t.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      t.removeEventListener('pointerdown', e),
                      t.removeEventListener('click', l.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...x.branches].some((e) => e.contains(t));
              !W ||
                n ||
                (null == u || u(e),
                null == f || f(e),
                e.defaultPrevented || null == p || p());
            }, P),
            L = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, m.W)(e),
                r = (0, i.useRef)(!1);
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      b(
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
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1)
                }
              );
            })((e) => {
              let t = e.target;
              [...x.branches].some((e) => e.contains(t)) ||
                (null == s || s(e),
                null == f || f(e),
                e.defaultPrevented || null == p || p());
            }, P);
          return (
            (0, h.e)((e) => {
              k !== x.layers.size - 1 ||
                (null == a || a(e),
                !e.defaultPrevented && p && (e.preventDefault(), p()));
            }, P),
            (0, i.useEffect)(() => {
              if (C)
                return (
                  l &&
                    (0 === x.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = P.body.style.pointerEvents),
                      (P.body.style.pointerEvents = 'none')),
                    x.layersWithOutsidePointerEventsDisabled.add(C)),
                  x.layers.add(C),
                  E(),
                  () => {
                    l &&
                      1 === x.layersWithOutsidePointerEventsDisabled.size &&
                      (P.body.style.pointerEvents = r);
                  }
                );
            }, [C, P, l, x]),
            (0, i.useEffect)(
              () => () => {
                C &&
                  (x.layers.delete(C),
                  x.layersWithOutsidePointerEventsDisabled.delete(C),
                  E());
              },
              [C, x]
            ),
            (0, i.useEffect)(() => {
              let e = () => R({});
              return (
                document.addEventListener(g, e),
                () => document.removeEventListener(g, e)
              );
            }, []),
            (0, i.createElement)(
              v.WV.div,
              (0, o.Z)({}, y, {
                ref: T,
                style: {
                  pointerEvents: O ? (W ? 'auto' : 'none') : void 0,
                  ...e.style
                },
                onFocusCapture: (0, d.M)(e.onFocusCapture, L.onFocusCapture),
                onBlurCapture: (0, d.M)(e.onBlurCapture, L.onBlurCapture),
                onPointerDownCapture: (0, d.M)(
                  e.onPointerDownCapture,
                  I.onPointerDownCapture
                )
              })
            )
          );
        });
      function E() {
        let e = new CustomEvent(g);
        document.dispatchEvent(e);
      }
      function b(e, t, n, { discrete: r }) {
        let l = n.originalEvent.target,
          o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && l.addEventListener(e, t, { once: !0 }),
          r ? (0, v.jH)(l, o) : l.dispatchEvent(o);
      }
      var x = n(20589);
      let C = 'focusScope.autoFocusOnMount',
        S = 'focusScope.autoFocusOnUnmount',
        P = { bubbles: !1, cancelable: !0 },
        R = (0, i.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: l,
              onUnmountAutoFocus: a,
              ...u
            } = e,
            [d, s] = (0, i.useState)(null),
            f = (0, m.W)(l),
            p = (0, m.W)(a),
            h = (0, i.useRef)(null),
            g = (0, c.e)(t, (e) => s(e)),
            w = (0, i.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              }
            }).current;
          (0, i.useEffect)(() => {
            if (r) {
              function e(e) {
                if (w.paused || !d) return;
                let t = e.target;
                d.contains(t) ? (h.current = t) : M(h.current, { select: !0 });
              }
              function t(e) {
                if (w.paused || !d) return;
                let t = e.relatedTarget;
                null === t || d.contains(t) || M(h.current, { select: !0 });
              }
              document.addEventListener('focusin', e),
                document.addEventListener('focusout', t);
              let n = new MutationObserver(function (e) {
                let t = document.activeElement;
                for (let n of e)
                  n.removedNodes.length > 0 &&
                    !(null != d && d.contains(t)) &&
                    M(d);
              });
              return (
                d && n.observe(d, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    n.disconnect();
                }
              );
            }
          }, [r, d, w.paused]),
            (0, i.useEffect)(() => {
              if (d) {
                _.add(w);
                let e = document.activeElement;
                if (!d.contains(e)) {
                  let t = new CustomEvent(C, P);
                  d.addEventListener(C, f),
                    d.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (M(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        T(d).filter((e) => 'A' !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && M(d));
                }
                return () => {
                  d.removeEventListener(C, f),
                    setTimeout(() => {
                      let t = new CustomEvent(S, P);
                      d.addEventListener(S, p),
                        d.dispatchEvent(t),
                        t.defaultPrevented ||
                          M(null != e ? e : document.body, { select: !0 }),
                        d.removeEventListener(S, p),
                        _.remove(w);
                    }, 0);
                };
              }
            }, [d, f, p, w]);
          let y = (0, i.useCallback)(
            (e) => {
              if ((!n && !r) || w.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                l = document.activeElement;
              if (t && l) {
                let t = e.currentTarget,
                  [r, o] = (function (e) {
                    let t = T(e);
                    return [D(t, e), D(t.reverse(), e)];
                  })(t);
                r && o
                  ? e.shiftKey || l !== o
                    ? e.shiftKey &&
                      l === r &&
                      (e.preventDefault(), n && M(o, { select: !0 }))
                    : (e.preventDefault(), n && M(r, { select: !0 }))
                  : l === t && e.preventDefault();
              }
            },
            [n, r, w.paused]
          );
          return (0, i.createElement)(
            v.WV.div,
            (0, o.Z)({ tabIndex: -1 }, u, { ref: g, onKeyDown: y })
          );
        });
      function T(e) {
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
      function D(e, t) {
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
      function M(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              'select' in n &&
              t &&
              e.select();
        }
      }
      let _ =
        ((l = []),
        {
          add(e) {
            let t = l[0];
            e !== t && (null == t || t.pause()), (l = k(l, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (l = k(l, e))[0]) || void 0 === t || t.resume();
          }
        });
      function k(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var O = n(53201),
        W = n(94674),
        I = n(55497),
        L = n(20151),
        V = n(46441),
        A = n(1336),
        N = n(75238);
      let Z = 'Popper',
        [F, H] = (0, f.b)(Z),
        [B, K] = F(Z),
        z = (0, i.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...l } = e,
            a = K('PopperAnchor', n),
            u = (0, i.useRef)(null),
            d = (0, c.e)(t, u);
          return (
            (0, i.useEffect)(() => {
              a.onAnchorChange((null == r ? void 0 : r.current) || u.current);
            }),
            r
              ? null
              : (0, i.createElement)(v.WV.div, (0, o.Z)({}, l, { ref: d }))
          );
        }),
        $ = 'PopperContent',
        [U, j] = F($),
        q = (0, i.forwardRef)((e, t) => {
          var n, r, l, a, u, d, s, f;
          let {
              __scopePopper: p,
              side: h = 'bottom',
              sideOffset: g = 0,
              align: w = 'center',
              alignOffset: y = 0,
              arrowPadding: E = 0,
              collisionBoundary: b = [],
              collisionPadding: x = 0,
              sticky: C = 'partial',
              hideWhenDetached: S = !1,
              avoidCollisions: P = !0,
              onPlaced: R,
              ...T
            } = e,
            D = K($, p),
            [M, _] = (0, i.useState)(null),
            k = (0, c.e)(t, (e) => _(e)),
            [O, V] = (0, i.useState)(null),
            Z = (0, N.t)(O),
            F =
              null !== (n = null == Z ? void 0 : Z.width) && void 0 !== n
                ? n
                : 0,
            H =
              null !== (r = null == Z ? void 0 : Z.height) && void 0 !== r
                ? r
                : 0,
            B =
              'number' == typeof x
                ? x
                : { top: 0, right: 0, bottom: 0, left: 0, ...x },
            z = Array.isArray(b) ? b : [b],
            j = z.length > 0,
            q = { padding: B, boundary: z.filter(X), altBoundary: j },
            {
              refs: Y,
              floatingStyles: Q,
              placement: ee,
              isPositioned: et,
              middlewareData: en
            } = (0, W.YF)({
              strategy: 'fixed',
              placement: h + ('center' !== w ? '-' + w : ''),
              whileElementsMounted: I.Me,
              elements: { reference: D.anchor },
              middleware: [
                (0, L.cv)({ mainAxis: g + H, alignmentAxis: y }),
                P &&
                  (0, L.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === C ? (0, L.dr)() : void 0,
                    ...q
                  }),
                P && (0, L.RR)({ ...q }),
                (0, L.dp)({
                  ...q,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r
                  }) => {
                    let { width: l, height: o } = t.reference,
                      i = e.floating.style;
                    i.setProperty('--radix-popper-available-width', `${n}px`),
                      i.setProperty(
                        '--radix-popper-available-height',
                        `${r}px`
                      ),
                      i.setProperty('--radix-popper-anchor-width', `${l}px`),
                      i.setProperty('--radix-popper-anchor-height', `${o}px`);
                  }
                }),
                O && (0, W.x7)({ element: O, padding: E }),
                G({ arrowWidth: F, arrowHeight: H }),
                S && (0, L.Cp)({ strategy: 'referenceHidden' })
              ]
            }),
            [er, el] = J(ee),
            eo = (0, m.W)(R);
          (0, A.b)(() => {
            et && (null == eo || eo());
          }, [et, eo]);
          let ei = null === (l = en.arrow) || void 0 === l ? void 0 : l.x,
            ea = null === (a = en.arrow) || void 0 === a ? void 0 : a.y,
            eu =
              (null === (u = en.arrow) || void 0 === u
                ? void 0
                : u.centerOffset) !== 0,
            [ed, es] = (0, i.useState)();
          return (
            (0, A.b)(() => {
              M && es(window.getComputedStyle(M).zIndex);
            }, [M]),
            (0, i.createElement)(
              'div',
              {
                ref: Y.setFloating,
                'data-radix-popper-content-wrapper': '',
                style: {
                  ...Q,
                  transform: et ? Q.transform : 'translate(0, -200%)',
                  minWidth: 'max-content',
                  zIndex: ed,
                  '--radix-popper-transform-origin': [
                    null === (d = en.transformOrigin) || void 0 === d
                      ? void 0
                      : d.x,
                    null === (s = en.transformOrigin) || void 0 === s
                      ? void 0
                      : s.y
                  ].join(' ')
                },
                dir: e.dir
              },
              (0, i.createElement)(
                U,
                {
                  scope: p,
                  placedSide: er,
                  onArrowChange: V,
                  arrowX: ei,
                  arrowY: ea,
                  shouldHideArrow: eu
                },
                (0, i.createElement)(
                  v.WV.div,
                  (0, o.Z)({ 'data-side': er, 'data-align': el }, T, {
                    ref: k,
                    style: {
                      ...T.style,
                      animation: et ? void 0 : 'none',
                      opacity:
                        null !== (f = en.hide) &&
                        void 0 !== f &&
                        f.referenceHidden
                          ? 0
                          : void 0
                    }
                  })
                )
              )
            )
          );
        }),
        Y = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' };
      function X(e) {
        return null !== e;
      }
      let G = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          var n, r, l, o, i;
          let { placement: a, rects: u, middlewareData: d } = t,
            s =
              (null === (n = d.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            c = s ? 0 : e.arrowWidth,
            f = s ? 0 : e.arrowHeight,
            [p, v] = J(a),
            m = { start: '0%', center: '50%', end: '100%' }[v],
            h =
              (null !==
                (r = null === (l = d.arrow) || void 0 === l ? void 0 : l.x) &&
              void 0 !== r
                ? r
                : 0) +
              c / 2,
            g =
              (null !==
                (o = null === (i = d.arrow) || void 0 === i ? void 0 : i.y) &&
              void 0 !== o
                ? o
                : 0) +
              f / 2,
            w = '',
            y = '';
          return (
            'bottom' === p
              ? ((w = s ? m : `${h}px`), (y = `${-f}px`))
              : 'top' === p
              ? ((w = s ? m : `${h}px`), (y = `${u.floating.height + f}px`))
              : 'right' === p
              ? ((w = `${-f}px`), (y = s ? m : `${g}px`))
              : 'left' === p &&
                ((w = `${u.floating.width + f}px`), (y = s ? m : `${g}px`)),
            { data: { x: w, y: y } }
          );
        }
      });
      function J(e) {
        let [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      let Q = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, l] = (0, i.useState)(null);
          return (0, i.createElement)(
            B,
            { scope: t, anchor: r, onAnchorChange: l },
            n
          );
        },
        ee = (0, i.forwardRef)((e, t) => {
          var n;
          let {
            container: r = null == globalThis
              ? void 0
              : null === (n = globalThis.document) || void 0 === n
              ? void 0
              : n.body,
            ...l
          } = e;
          return r
            ? a.createPortal(
                (0, i.createElement)(v.WV.div, (0, o.Z)({}, l, { ref: t })),
                r
              )
            : null;
        }),
        et = (0, i.forwardRef)((e, t) => {
          let { children: n, ...r } = e,
            l = i.Children.toArray(n),
            a = l.find(el);
          if (a) {
            let e = a.props.children,
              n = l.map((t) =>
                t !== a
                  ? t
                  : i.Children.count(e) > 1
                  ? i.Children.only(null)
                  : (0, i.isValidElement)(e)
                  ? e.props.children
                  : null
              );
            return (0, i.createElement)(
              en,
              (0, o.Z)({}, r, { ref: t }),
              (0, i.isValidElement)(e)
                ? (0, i.cloneElement)(e, void 0, n)
                : null
            );
          }
          return (0, i.createElement)(en, (0, o.Z)({}, r, { ref: t }), n);
        });
      et.displayName = 'Slot';
      let en = (0, i.forwardRef)((e, t) => {
        let { children: n, ...r } = e;
        return (0, i.isValidElement)(n)
          ? (0, i.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let l = e[r],
                    o = t[r];
                  /^on[A-Z]/.test(r)
                    ? l && o
                      ? (n[r] = (...e) => {
                          o(...e), l(...e);
                        })
                      : l && (n[r] = l)
                    : 'style' === r
                    ? (n[r] = { ...l, ...o })
                    : 'className' === r &&
                      (n[r] = [l, o].filter(Boolean).join(' '));
                }
                return { ...e, ...n };
              })(r, n.props),
              ref: t ? (0, c.F)(t, n.ref) : n.ref
            })
          : i.Children.count(n) > 1
          ? i.Children.only(null)
          : null;
      });
      en.displayName = 'SlotClone';
      let er = ({ children: e }) => (0, i.createElement)(i.Fragment, null, e);
      function el(e) {
        return (0, i.isValidElement)(e) && e.type === er;
      }
      var eo = n(91715),
        ei = n(47250);
      let ea = (0, i.forwardRef)((e, t) =>
        (0, i.createElement)(
          v.WV.span,
          (0, o.Z)({}, e, {
            ref: t,
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
              ...e.style
            }
          })
        )
      );
      var eu = n(78369),
        ed = n(9219);
      let es = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
        ec = [' ', 'Enter'],
        ef = 'Select',
        [ep, ev, em] = (0, s.B)(ef),
        [eh, eg] = (0, f.b)(ef, [em, H]),
        ew = H(),
        [ey, eE] = eh(ef),
        [eb, ex] = eh(ef),
        eC = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, disabled: r = !1, ...l } = e,
            a = ew(n),
            u = eE('SelectTrigger', n),
            s = u.disabled || r,
            f = (0, c.e)(t, u.onTriggerChange),
            p = ev(n),
            [m, h, g] = eX((e) => {
              let t = p().filter((e) => !e.disabled),
                n = t.find((e) => e.value === u.value),
                r = eG(t, e, n);
              void 0 !== r && u.onValueChange(r.value);
            }),
            w = () => {
              s || (u.onOpenChange(!0), g());
            };
          return (0, i.createElement)(
            z,
            (0, o.Z)({ asChild: !0 }, a),
            (0, i.createElement)(
              v.WV.button,
              (0, o.Z)(
                {
                  type: 'button',
                  role: 'combobox',
                  'aria-controls': u.contentId,
                  'aria-expanded': u.open,
                  'aria-required': u.required,
                  'aria-autocomplete': 'none',
                  dir: u.dir,
                  'data-state': u.open ? 'open' : 'closed',
                  disabled: s,
                  'data-disabled': s ? '' : void 0,
                  'data-placeholder': void 0 === u.value ? '' : void 0
                },
                l,
                {
                  ref: f,
                  onClick: (0, d.M)(l.onClick, (e) => {
                    e.currentTarget.focus();
                  }),
                  onPointerDown: (0, d.M)(l.onPointerDown, (e) => {
                    let t = e.target;
                    t.hasPointerCapture(e.pointerId) &&
                      t.releasePointerCapture(e.pointerId),
                      0 === e.button &&
                        !1 === e.ctrlKey &&
                        (w(),
                        (u.triggerPointerDownPosRef.current = {
                          x: Math.round(e.pageX),
                          y: Math.round(e.pageY)
                        }),
                        e.preventDefault());
                  }),
                  onKeyDown: (0, d.M)(l.onKeyDown, (e) => {
                    let t = '' !== m.current;
                    e.ctrlKey ||
                      e.altKey ||
                      e.metaKey ||
                      1 !== e.key.length ||
                      h(e.key),
                      (!t || ' ' !== e.key) &&
                        es.includes(e.key) &&
                        (w(), e.preventDefault());
                  })
                }
              )
            )
          );
        }),
        eS = (0, i.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: l,
              children: a,
              placeholder: u,
              ...d
            } = e,
            s = eE('SelectValue', n),
            { onValueNodeHasChildrenChange: f } = s,
            p = void 0 !== a,
            m = (0, c.e)(t, s.onValueNodeChange);
          return (
            (0, A.b)(() => {
              f(p);
            }, [f, p]),
            (0, i.createElement)(
              v.WV.span,
              (0, o.Z)({}, d, { ref: m, style: { pointerEvents: 'none' } }),
              void 0 === s.value && void 0 !== u ? u : a
            )
          );
        }),
        eP = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, children: r, ...l } = e;
          return (0, i.createElement)(
            v.WV.span,
            (0, o.Z)({ 'aria-hidden': !0 }, l, { ref: t }),
            r || '▼'
          );
        }),
        eR = 'SelectContent',
        eT = (0, i.forwardRef)((e, t) => {
          let n = eE(eR, e.__scopeSelect),
            [r, l] = (0, i.useState)();
          return ((0, A.b)(() => {
            l(new DocumentFragment());
          }, []),
          n.open)
            ? (0, i.createElement)(e_, (0, o.Z)({}, e, { ref: t }))
            : r
            ? (0, a.createPortal)(
                (0, i.createElement)(
                  eD,
                  { scope: e.__scopeSelect },
                  (0, i.createElement)(
                    ep.Slot,
                    { scope: e.__scopeSelect },
                    (0, i.createElement)('div', null, e.children)
                  )
                ),
                r
              )
            : null;
        }),
        [eD, eM] = eh(eR),
        e_ = (0, i.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              position: r = 'item-aligned',
              onCloseAutoFocus: l,
              onEscapeKeyDown: a,
              onPointerDownOutside: u,
              side: s,
              sideOffset: f,
              align: p,
              alignOffset: v,
              arrowPadding: m,
              collisionBoundary: h,
              collisionPadding: g,
              sticky: w,
              hideWhenDetached: E,
              avoidCollisions: b,
              ...C
            } = e,
            S = eE(eR, n),
            [P, T] = (0, i.useState)(null),
            [D, M] = (0, i.useState)(null),
            _ = (0, c.e)(t, (e) => T(e)),
            [k, O] = (0, i.useState)(null),
            [W, I] = (0, i.useState)(null),
            L = ev(n),
            [V, A] = (0, i.useState)(!1),
            N = (0, i.useRef)(!1);
          (0, i.useEffect)(() => {
            if (P) return (0, eu.Ry)(P);
          }, [P]),
            (0, x.EW)();
          let Z = (0, i.useCallback)(
              (e) => {
                let [t, ...n] = L().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  l = document.activeElement;
                for (let n of e)
                  if (
                    n === l ||
                    (null == n || n.scrollIntoView({ block: 'nearest' }),
                    n === t && D && (D.scrollTop = 0),
                    n === r && D && (D.scrollTop = D.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== l)
                  )
                    return;
              },
              [L, D]
            ),
            F = (0, i.useCallback)(() => Z([k, P]), [Z, k, P]);
          (0, i.useEffect)(() => {
            V && F();
          }, [V, F]);
          let { onOpenChange: H, triggerPointerDownPosRef: B } = S;
          (0, i.useEffect)(() => {
            if (P) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, l, o;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (n =
                            null === (r = B.current) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (l =
                            null === (o = B.current) || void 0 === o
                              ? void 0
                              : o.y) && void 0 !== l
                          ? l
                          : 0)
                    )
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : P.contains(n.target) || H(!1),
                    document.removeEventListener('pointermove', t),
                    (B.current = null);
                };
              return (
                null !== B.current &&
                  (document.addEventListener('pointermove', t),
                  document.addEventListener('pointerup', n, {
                    capture: !0,
                    once: !0
                  })),
                () => {
                  document.removeEventListener('pointermove', t),
                    document.removeEventListener('pointerup', n, {
                      capture: !0
                    });
                }
              );
            }
          }, [P, H, B]),
            (0, i.useEffect)(() => {
              let e = () => H(!1);
              return (
                window.addEventListener('blur', e),
                window.addEventListener('resize', e),
                () => {
                  window.removeEventListener('blur', e),
                    window.removeEventListener('resize', e);
                }
              );
            }, [H]);
          let [K, z] = eX((e) => {
              let t = L().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = eG(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            $ = (0, i.useCallback)(
              (e, t, n) => {
                let r = !N.current && !n;
                ((void 0 !== S.value && S.value === t) || r) &&
                  (O(e), r && (N.current = !0));
              },
              [S.value]
            ),
            U = (0, i.useCallback)(() => (null == P ? void 0 : P.focus()), [P]),
            j = (0, i.useCallback)(
              (e, t, n) => {
                let r = !N.current && !n;
                ((void 0 !== S.value && S.value === t) || r) && I(e);
              },
              [S.value]
            ),
            q = 'popper' === r ? eO : ek;
          return (0, i.createElement)(
            eD,
            {
              scope: n,
              content: P,
              viewport: D,
              onViewportChange: M,
              itemRefCallback: $,
              selectedItem: k,
              onItemLeave: U,
              itemTextRefCallback: j,
              focusSelectedItem: F,
              selectedItemText: W,
              position: r,
              isPositioned: V,
              searchRef: K
            },
            (0, i.createElement)(
              ed.Z,
              { as: et, allowPinchZoom: !0 },
              (0, i.createElement)(
                R,
                {
                  asChild: !0,
                  trapped: S.open,
                  onMountAutoFocus: (e) => {
                    e.preventDefault();
                  },
                  onUnmountAutoFocus: (0, d.M)(l, (e) => {
                    var t;
                    null === (t = S.trigger) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 }),
                      e.preventDefault();
                  })
                },
                (0, i.createElement)(
                  y,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: u,
                    onFocusOutside: (e) => e.preventDefault(),
                    onDismiss: () => S.onOpenChange(!1)
                  },
                  (0, i.createElement)(
                    q,
                    (0, o.Z)(
                      {
                        role: 'listbox',
                        id: S.contentId,
                        'data-state': S.open ? 'open' : 'closed',
                        dir: S.dir,
                        onContextMenu: (e) => e.preventDefault()
                      },
                      C,
                      q === eO
                        ? {
                            side: s,
                            sideOffset: f,
                            align: p,
                            alignOffset: v,
                            arrowPadding: m,
                            collisionBoundary: h,
                            collisionPadding: g,
                            sticky: w,
                            hideWhenDetached: E,
                            avoidCollisions: b
                          }
                        : {},
                      {
                        onPlaced: () => A(!0),
                        ref: _,
                        style: {
                          display: 'flex',
                          flexDirection: 'column',
                          outline: 'none',
                          ...C.style
                        },
                        onKeyDown: (0, d.M)(C.onKeyDown, (e) => {
                          let t = e.ctrlKey || e.altKey || e.metaKey;
                          if (
                            ('Tab' === e.key && e.preventDefault(),
                            t || 1 !== e.key.length || z(e.key),
                            ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(
                              e.key
                            ))
                          ) {
                            let t = L()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            if (
                              (['ArrowUp', 'End'].includes(e.key) &&
                                (t = t.slice().reverse()),
                              ['ArrowUp', 'ArrowDown'].includes(e.key))
                            ) {
                              let n = e.target,
                                r = t.indexOf(n);
                              t = t.slice(r + 1);
                            }
                            setTimeout(() => Z(t)), e.preventDefault();
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
        ek = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, onPlaced: r, ...l } = e,
            a = eE(eR, n),
            d = eM(eR, n),
            [s, f] = (0, i.useState)(null),
            [p, m] = (0, i.useState)(null),
            h = (0, c.e)(t, (e) => m(e)),
            g = ev(n),
            w = (0, i.useRef)(!1),
            y = (0, i.useRef)(!0),
            {
              viewport: E,
              selectedItem: b,
              selectedItemText: x,
              focusSelectedItem: C
            } = d,
            S = (0, i.useCallback)(() => {
              if (a.trigger && a.valueNode && s && p && E && b && x) {
                let e = a.trigger.getBoundingClientRect(),
                  t = p.getBoundingClientRect(),
                  n = a.valueNode.getBoundingClientRect(),
                  l = x.getBoundingClientRect();
                if ('rtl' !== a.dir) {
                  let r = l.left - t.left,
                    o = n.left - r,
                    i = e.left - o,
                    a = e.width + i,
                    d = Math.max(a, t.width),
                    c = window.innerWidth - 10,
                    f = (0, u.u)(o, [10, c - d]);
                  (s.style.minWidth = a + 'px'), (s.style.left = f + 'px');
                } else {
                  let r = t.right - l.right,
                    o = window.innerWidth - n.right - r,
                    i = window.innerWidth - e.right - o,
                    a = e.width + i,
                    d = Math.max(a, t.width),
                    c = window.innerWidth - 10,
                    f = (0, u.u)(o, [10, c - d]);
                  (s.style.minWidth = a + 'px'), (s.style.right = f + 'px');
                }
                let o = g(),
                  i = window.innerHeight - 20,
                  d = E.scrollHeight,
                  c = window.getComputedStyle(p),
                  f = parseInt(c.borderTopWidth, 10),
                  v = parseInt(c.paddingTop, 10),
                  m = parseInt(c.borderBottomWidth, 10),
                  h = f + v + d + parseInt(c.paddingBottom, 10) + m,
                  y = Math.min(5 * b.offsetHeight, h),
                  C = window.getComputedStyle(E),
                  S = parseInt(C.paddingTop, 10),
                  P = parseInt(C.paddingBottom, 10),
                  R = e.top + e.height / 2 - 10,
                  T = b.offsetHeight / 2,
                  D = f + v + (b.offsetTop + T);
                if (D <= R) {
                  let e = b === o[o.length - 1].ref.current;
                  s.style.bottom = '0px';
                  let t = p.clientHeight - E.offsetTop - E.offsetHeight;
                  s.style.height =
                    D + Math.max(i - R, T + (e ? P : 0) + t + m) + 'px';
                } else {
                  let e = b === o[0].ref.current;
                  s.style.top = '0px';
                  let t = Math.max(R, f + E.offsetTop + (e ? S : 0) + T);
                  (s.style.height = t + (h - D) + 'px'),
                    (E.scrollTop = D - R + E.offsetTop);
                }
                (s.style.margin = '10px 0'),
                  (s.style.minHeight = y + 'px'),
                  (s.style.maxHeight = i + 'px'),
                  null == r || r(),
                  requestAnimationFrame(() => (w.current = !0));
              }
            }, [g, a.trigger, a.valueNode, s, p, E, b, x, a.dir, r]);
          (0, A.b)(() => S(), [S]);
          let [P, R] = (0, i.useState)();
          (0, A.b)(() => {
            p && R(window.getComputedStyle(p).zIndex);
          }, [p]);
          let T = (0, i.useCallback)(
            (e) => {
              e &&
                !0 === y.current &&
                (S(), null == C || C(), (y.current = !1));
            },
            [S, C]
          );
          return (0, i.createElement)(
            eW,
            {
              scope: n,
              contentWrapper: s,
              shouldExpandOnScrollRef: w,
              onScrollButtonChange: T
            },
            (0, i.createElement)(
              'div',
              {
                ref: f,
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'fixed',
                  zIndex: P
                }
              },
              (0, i.createElement)(
                v.WV.div,
                (0, o.Z)({}, l, {
                  ref: h,
                  style: {
                    boxSizing: 'border-box',
                    maxHeight: '100%',
                    ...l.style
                  }
                })
              )
            )
          );
        }),
        eO = (0, i.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              align: r = 'start',
              collisionPadding: l = 10,
              ...a
            } = e,
            u = ew(n);
          return (0, i.createElement)(
            q,
            (0, o.Z)({}, u, a, {
              ref: t,
              align: r,
              collisionPadding: l,
              style: {
                boxSizing: 'border-box',
                ...a.style,
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
        [eW, eI] = eh(eR, {}),
        eL = 'SelectViewport',
        eV = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            l = eM(eL, n),
            a = eI(eL, n),
            u = (0, c.e)(t, l.onViewportChange),
            s = (0, i.useRef)(0);
          return (0, i.createElement)(
            i.Fragment,
            null,
            (0, i.createElement)('style', {
              dangerouslySetInnerHTML: {
                __html:
                  '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}'
              }
            }),
            (0, i.createElement)(
              ep.Slot,
              { scope: n },
              (0, i.createElement)(
                v.WV.div,
                (0, o.Z)(
                  { 'data-radix-select-viewport': '', role: 'presentation' },
                  r,
                  {
                    ref: u,
                    style: {
                      position: 'relative',
                      flex: 1,
                      overflow: 'auto',
                      ...r.style
                    },
                    onScroll: (0, d.M)(r.onScroll, (e) => {
                      let t = e.currentTarget,
                        { contentWrapper: n, shouldExpandOnScrollRef: r } = a;
                      if (null != r && r.current && n) {
                        let e = Math.abs(s.current - t.scrollTop);
                        if (e > 0) {
                          let r = window.innerHeight - 20,
                            l = Math.max(
                              parseFloat(n.style.minHeight),
                              parseFloat(n.style.height)
                            );
                          if (l < r) {
                            let o = l + e,
                              i = Math.min(r, o),
                              a = o - i;
                            (n.style.height = i + 'px'),
                              '0px' === n.style.bottom &&
                                ((t.scrollTop = a > 0 ? a : 0),
                                (n.style.justifyContent = 'flex-end'));
                          }
                        }
                      }
                      s.current = t.scrollTop;
                    })
                  }
                )
              )
            )
          );
        }),
        [eA, eN] = eh('SelectGroup'),
        eZ = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            l = (0, O.M)();
          return (0, i.createElement)(
            eA,
            { scope: n, id: l },
            (0, i.createElement)(
              v.WV.div,
              (0, o.Z)({ role: 'group', 'aria-labelledby': l }, r, { ref: t })
            )
          );
        }),
        eF = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            l = eN('SelectLabel', n);
          return (0, i.createElement)(
            v.WV.div,
            (0, o.Z)({ id: l.id }, r, { ref: t })
          );
        }),
        eH = 'SelectItem',
        [eB, eK] = eh(eH),
        ez = (0, i.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              value: r,
              disabled: l = !1,
              textValue: a,
              ...u
            } = e,
            s = eE(eH, n),
            f = eM(eH, n),
            p = s.value === r,
            [m, h] = (0, i.useState)(null != a ? a : ''),
            [g, w] = (0, i.useState)(!1),
            y = (0, c.e)(t, (e) => {
              var t;
              return null === (t = f.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(f, e, r, l);
            }),
            E = (0, O.M)(),
            b = () => {
              l || (s.onValueChange(r), s.onOpenChange(!1));
            };
          return (0, i.createElement)(
            eB,
            {
              scope: n,
              value: r,
              disabled: l,
              textId: E,
              isSelected: p,
              onItemTextChange: (0, i.useCallback)((e) => {
                h((t) => {
                  var n;
                  return (
                    t ||
                    (null !== (n = null == e ? void 0 : e.textContent) &&
                    void 0 !== n
                      ? n
                      : ''
                    ).trim()
                  );
                });
              }, [])
            },
            (0, i.createElement)(
              ep.ItemSlot,
              { scope: n, value: r, disabled: l, textValue: m },
              (0, i.createElement)(
                v.WV.div,
                (0, o.Z)(
                  {
                    role: 'option',
                    'aria-labelledby': E,
                    'data-highlighted': g ? '' : void 0,
                    'aria-selected': p && g,
                    'data-state': p ? 'checked' : 'unchecked',
                    'aria-disabled': l || void 0,
                    'data-disabled': l ? '' : void 0,
                    tabIndex: l ? void 0 : -1
                  },
                  u,
                  {
                    ref: y,
                    onFocus: (0, d.M)(u.onFocus, () => w(!0)),
                    onBlur: (0, d.M)(u.onBlur, () => w(!1)),
                    onPointerUp: (0, d.M)(u.onPointerUp, b),
                    onPointerMove: (0, d.M)(u.onPointerMove, (e) => {
                      if (l) {
                        var t;
                        null === (t = f.onItemLeave) ||
                          void 0 === t ||
                          t.call(f);
                      } else e.currentTarget.focus({ preventScroll: !0 });
                    }),
                    onPointerLeave: (0, d.M)(u.onPointerLeave, (e) => {
                      if (e.currentTarget === document.activeElement) {
                        var t;
                        null === (t = f.onItemLeave) ||
                          void 0 === t ||
                          t.call(f);
                      }
                    }),
                    onKeyDown: (0, d.M)(u.onKeyDown, (e) => {
                      var t;
                      ((null === (t = f.searchRef) || void 0 === t
                        ? void 0
                        : t.current) !== '' &&
                        ' ' === e.key) ||
                        (ec.includes(e.key) && b(),
                        ' ' === e.key && e.preventDefault());
                    })
                  }
                )
              )
            )
          );
        }),
        e$ = 'SelectItemText',
        eU = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, className: r, style: l, ...u } = e,
            d = eE(e$, n),
            s = eM(e$, n),
            f = eK(e$, n),
            p = ex(e$, n),
            [m, h] = (0, i.useState)(null),
            g = (0, c.e)(
              t,
              (e) => h(e),
              f.onItemTextChange,
              (e) => {
                var t;
                return null === (t = s.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(s, e, f.value, f.disabled);
              }
            ),
            w = null == m ? void 0 : m.textContent,
            y = (0, i.useMemo)(
              () =>
                (0, i.createElement)(
                  'option',
                  { key: f.value, value: f.value, disabled: f.disabled },
                  w
                ),
              [f.disabled, f.value, w]
            ),
            { onNativeOptionAdd: E, onNativeOptionRemove: b } = p;
          return (
            (0, A.b)(() => (E(y), () => b(y)), [E, b, y]),
            (0, i.createElement)(
              i.Fragment,
              null,
              (0, i.createElement)(
                v.WV.span,
                (0, o.Z)({ id: f.textId }, u, { ref: g })
              ),
              f.isSelected && d.valueNode && !d.valueNodeHasChildren
                ? (0, a.createPortal)(u.children, d.valueNode)
                : null
            )
          );
        }),
        ej = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return eK('SelectItemIndicator', n).isSelected
            ? (0, i.createElement)(
                v.WV.span,
                (0, o.Z)({ 'aria-hidden': !0 }, r, { ref: t })
              )
            : null;
        }),
        eq =
          ((e, t) => {
            let { __scopeSelect: n, onAutoScroll: r, ...l } = e,
              a = eM('SelectScrollButton', n),
              u = (0, i.useRef)(null),
              s = ev(n),
              c = (0, i.useCallback)(() => {
                null !== u.current &&
                  (window.clearInterval(u.current), (u.current = null));
              }, []);
            return (
              (0, i.useEffect)(() => () => c(), [c]),
              (0, A.b)(() => {
                var e;
                let t = s().find(
                  (e) => e.ref.current === document.activeElement
                );
                null == t ||
                  null === (e = t.ref.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ block: 'nearest' });
              }, [s]),
              (0, i.createElement)(
                v.WV.div,
                (0, o.Z)({ 'aria-hidden': !0 }, l, {
                  ref: t,
                  style: { flexShrink: 0, ...l.style },
                  onPointerDown: (0, d.M)(l.onPointerDown, () => {
                    null === u.current &&
                      (u.current = window.setInterval(r, 50));
                  }),
                  onPointerMove: (0, d.M)(l.onPointerMove, () => {
                    var e;
                    null === (e = a.onItemLeave) || void 0 === e || e.call(a),
                      null === u.current &&
                        (u.current = window.setInterval(r, 50));
                  }),
                  onPointerLeave: (0, d.M)(l.onPointerLeave, () => {
                    c();
                  })
                })
              )
            );
          },
          (0, i.forwardRef)((e, t) => {
            let { __scopeSelect: n, ...r } = e;
            return (0, i.createElement)(
              v.WV.div,
              (0, o.Z)({ 'aria-hidden': !0 }, r, { ref: t })
            );
          })),
        eY = (0, i.forwardRef)((e, t) => {
          let { value: n, ...r } = e,
            l = (0, i.useRef)(null),
            a = (0, c.e)(t, l),
            u = (0, ei.D)(n);
          return (
            (0, i.useEffect)(() => {
              let e = l.current,
                t = Object.getOwnPropertyDescriptor(
                  window.HTMLSelectElement.prototype,
                  'value'
                ).set;
              if (u !== n && t) {
                let r = new Event('change', { bubbles: !0 });
                t.call(e, n), e.dispatchEvent(r);
              }
            }, [u, n]),
            (0, i.createElement)(
              ea,
              { asChild: !0 },
              (0, i.createElement)(
                'select',
                (0, o.Z)({}, r, { ref: a, defaultValue: n })
              )
            )
          );
        });
      function eX(e) {
        let t = (0, m.W)(e),
          n = (0, i.useRef)(''),
          r = (0, i.useRef)(0),
          l = (0, i.useCallback)(
            (e) => {
              let l = n.current + e;
              t(l),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(r.current),
                    '' !== t &&
                      (r.current = window.setTimeout(() => e(''), 1e3));
                })(l);
            },
            [t]
          ),
          o = (0, i.useCallback)(() => {
            (n.current = ''), window.clearTimeout(r.current);
          }, []);
        return (
          (0, i.useEffect)(() => () => window.clearTimeout(r.current), []),
          [n, l, o]
        );
      }
      function eG(e, t, n) {
        var r;
        let l =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          o =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === l.length && (o = o.filter((e) => e !== n));
        let i = o.find((e) =>
          e.textValue.toLowerCase().startsWith(l.toLowerCase())
        );
        return i !== n ? i : void 0;
      }
      eY.displayName = 'BubbleSelect';
      let eJ = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: l,
              onOpenChange: o,
              value: a,
              defaultValue: u,
              onValueChange: d,
              dir: s,
              name: c,
              autoComplete: f,
              disabled: v,
              required: m
            } = e,
            h = ew(t),
            [g, w] = (0, i.useState)(null),
            [y, E] = (0, i.useState)(null),
            [b, x] = (0, i.useState)(!1),
            C = (0, p.gm)(s),
            [S = !1, P] = (0, eo.T)({ prop: r, defaultProp: l, onChange: o }),
            [R, T] = (0, eo.T)({ prop: a, defaultProp: u, onChange: d }),
            D = (0, i.useRef)(null),
            M = !g || !!g.closest('form'),
            [_, k] = (0, i.useState)(new Set()),
            W = Array.from(_)
              .map((e) => e.props.value)
              .join(';');
          return (0, i.createElement)(
            Q,
            h,
            (0, i.createElement)(
              ey,
              {
                required: m,
                scope: t,
                trigger: g,
                onTriggerChange: w,
                valueNode: y,
                onValueNodeChange: E,
                valueNodeHasChildren: b,
                onValueNodeHasChildrenChange: x,
                contentId: (0, O.M)(),
                value: R,
                onValueChange: T,
                open: S,
                onOpenChange: P,
                dir: C,
                triggerPointerDownPosRef: D,
                disabled: v
              },
              (0, i.createElement)(
                ep.Provider,
                { scope: t },
                (0, i.createElement)(
                  eb,
                  {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: (0, i.useCallback)((e) => {
                      k((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: (0, i.useCallback)((e) => {
                      k((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, [])
                  },
                  n
                )
              ),
              M
                ? (0, i.createElement)(
                    eY,
                    {
                      key: W,
                      'aria-hidden': !0,
                      required: m,
                      tabIndex: -1,
                      name: c,
                      autoComplete: f,
                      value: R,
                      onChange: (e) => T(e.target.value),
                      disabled: v
                    },
                    void 0 === R
                      ? (0, i.createElement)('option', { value: '' })
                      : null,
                    Array.from(_)
                  )
                : null
            )
          );
        },
        eQ = eC,
        e0 = eS,
        e1 = eP,
        e2 = (e) => (0, i.createElement)(ee, (0, o.Z)({ asChild: !0 }, e)),
        e5 = eT,
        e6 = eV,
        e8 = eZ,
        e4 = eF,
        e3 = ez,
        e7 = eU,
        e9 = ej,
        te = eq;
    },
    47250: function (e, t, n) {
      n.d(t, {
        D: function () {
          return l;
        }
      });
      var r = n(2265);
      function l(e) {
        let t = (0, r.useRef)({ value: e, previous: e });
        return (0, r.useMemo)(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    75238: function (e, t, n) {
      n.d(t, {
        t: function () {
          return o;
        }
      });
      var r = n(2265),
        l = n(1336);
      function o(e) {
        let [t, n] = (0, r.useState)(void 0);
        return (
          (0, l.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, l;
                if (!Array.isArray(t) || !t.length) return;
                let o = t[0];
                if ('borderBoxSize' in o) {
                  let e = o.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (l = t.blockSize);
                } else (r = e.offsetWidth), (l = e.offsetHeight);
                n({ width: r, height: l });
              });
              return t.observe(e, { box: 'border-box' }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    }
  }
]);
