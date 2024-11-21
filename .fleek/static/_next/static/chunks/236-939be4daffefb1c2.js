'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [236],
  {
    89236: function (e, t, n) {
      let r, o;
      n.d(t, {
        VY: function () {
          return eO;
        },
        h_: function () {
          return ex;
        },
        fC: function () {
          return eP;
        },
        xz: function () {
          return eC;
        }
      });
      var l = n(22988),
        i = n(2265),
        a = n(78149),
        u = n(1584),
        s = n(98324),
        d = n(18676),
        c = n(75137),
        p = n(66486);
      let f = 'dismissableLayer.update',
        v = (0, i.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set()
        }),
        m = (0, i.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: o = !1,
              onEscapeKeyDown: s,
              onPointerDownOutside: m,
              onFocusOutside: g,
              onInteractOutside: y,
              onDismiss: b,
              ...w
            } = e,
            P = (0, i.useContext)(v),
            [C, x] = (0, i.useState)(null),
            O =
              null !== (n = null == C ? void 0 : C.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, D] = (0, i.useState)({}),
            F = (0, u.e)(t, (e) => x(e)),
            R = Array.from(P.layers),
            [A] = [...P.layersWithOutsidePointerEventsDisabled].slice(-1),
            _ = R.indexOf(A),
            T = C ? R.indexOf(C) : -1,
            L = P.layersWithOutsidePointerEventsDisabled.size > 0,
            W = T >= _,
            S = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, c.W)(e),
                r = (0, i.useRef)(!1),
                o = (0, i.useRef)(() => {});
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function l() {
                          E('dismissableLayer.pointerDownOutside', n, r, {
                            discrete: !0
                          });
                        }
                        'touch' === e.pointerType
                          ? (t.removeEventListener('click', o.current),
                            (o.current = l),
                            t.addEventListener('click', o.current, {
                              once: !0
                            }))
                          : l();
                      } else t.removeEventListener('click', o.current);
                      r.current = !1;
                    },
                    l = window.setTimeout(() => {
                      t.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(l),
                      t.removeEventListener('pointerdown', e),
                      t.removeEventListener('click', o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...P.branches].some((e) => e.contains(t));
              !W ||
                n ||
                (null == m || m(e),
                null == y || y(e),
                e.defaultPrevented || null == b || b());
            }, O),
            M = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, c.W)(e),
                r = (0, i.useRef)(!1);
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
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
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1)
                }
              );
            })((e) => {
              let t = e.target;
              [...P.branches].some((e) => e.contains(t)) ||
                (null == g || g(e),
                null == y || y(e),
                e.defaultPrevented || null == b || b());
            }, O);
          return (
            (0, p.e)((e) => {
              T !== P.layers.size - 1 ||
                (null == s || s(e),
                !e.defaultPrevented && b && (e.preventDefault(), b()));
            }, O),
            (0, i.useEffect)(() => {
              if (C)
                return (
                  o &&
                    (0 === P.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = O.body.style.pointerEvents),
                      (O.body.style.pointerEvents = 'none')),
                    P.layersWithOutsidePointerEventsDisabled.add(C)),
                  P.layers.add(C),
                  h(),
                  () => {
                    o &&
                      1 === P.layersWithOutsidePointerEventsDisabled.size &&
                      (O.body.style.pointerEvents = r);
                  }
                );
            }, [C, O, o, P]),
            (0, i.useEffect)(
              () => () => {
                C &&
                  (P.layers.delete(C),
                  P.layersWithOutsidePointerEventsDisabled.delete(C),
                  h());
              },
              [C, P]
            ),
            (0, i.useEffect)(() => {
              let e = () => D({});
              return (
                document.addEventListener(f, e),
                () => document.removeEventListener(f, e)
              );
            }, []),
            (0, i.createElement)(
              d.WV.div,
              (0, l.Z)({}, w, {
                ref: F,
                style: {
                  pointerEvents: L ? (W ? 'auto' : 'none') : void 0,
                  ...e.style
                },
                onFocusCapture: (0, a.M)(e.onFocusCapture, M.onFocusCapture),
                onBlurCapture: (0, a.M)(e.onBlurCapture, M.onBlurCapture),
                onPointerDownCapture: (0, a.M)(
                  e.onPointerDownCapture,
                  S.onPointerDownCapture
                )
              })
            )
          );
        });
      function h() {
        let e = new CustomEvent(f);
        document.dispatchEvent(e);
      }
      function E(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, d.jH)(o, l) : o.dispatchEvent(l);
      }
      var g = n(20589);
      let y = 'focusScope.autoFocusOnMount',
        b = 'focusScope.autoFocusOnUnmount',
        w = { bubbles: !1, cancelable: !0 },
        P = (0, i.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...s
            } = e,
            [p, f] = (0, i.useState)(null),
            v = (0, c.W)(o),
            m = (0, c.W)(a),
            h = (0, i.useRef)(null),
            E = (0, u.e)(t, (e) => f(e)),
            g = (0, i.useRef)({
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
                if (g.paused || !p) return;
                let t = e.target;
                p.contains(t) ? (h.current = t) : O(h.current, { select: !0 });
              }
              function t(e) {
                if (g.paused || !p) return;
                let t = e.relatedTarget;
                null === t || p.contains(t) || O(h.current, { select: !0 });
              }
              document.addEventListener('focusin', e),
                document.addEventListener('focusout', t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && O(p);
              });
              return (
                p && n.observe(p, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    n.disconnect();
                }
              );
            }
          }, [r, p, g.paused]),
            (0, i.useEffect)(() => {
              if (p) {
                D.add(g);
                let e = document.activeElement;
                if (!p.contains(e)) {
                  let t = new CustomEvent(y, w);
                  p.addEventListener(y, v),
                    p.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (O(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        C(p).filter((e) => 'A' !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && O(p));
                }
                return () => {
                  p.removeEventListener(y, v),
                    setTimeout(() => {
                      let t = new CustomEvent(b, w);
                      p.addEventListener(b, m),
                        p.dispatchEvent(t),
                        t.defaultPrevented ||
                          O(null != e ? e : document.body, { select: !0 }),
                        p.removeEventListener(b, m),
                        D.remove(g);
                    }, 0);
                };
              }
            }, [p, v, m, g]);
          let P = (0, i.useCallback)(
            (e) => {
              if ((!n && !r) || g.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, l] = (function (e) {
                    let t = C(e);
                    return [x(t, e), x(t.reverse(), e)];
                  })(t);
                r && l
                  ? e.shiftKey || o !== l
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && O(l, { select: !0 }))
                    : (e.preventDefault(), n && O(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, g.paused]
          );
          return (0, i.createElement)(
            d.WV.div,
            (0, l.Z)({ tabIndex: -1 }, s, { ref: E, onKeyDown: P })
          );
        });
      function C(e) {
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
      function x(e, t) {
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
      function O(e, { select: t = !1 } = {}) {
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
      let D =
        ((o = []),
        {
          add(e) {
            let t = o[0];
            e !== t && (null == t || t.pause()), (o = F(o, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (o = F(o, e))[0]) || void 0 === t || t.resume();
          }
        });
      function F(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var R = n(53201),
        A = n(94674),
        _ = n(55497),
        T = n(20151),
        L = n(46441),
        W = n(1336),
        S = n(75238);
      let M = 'Popper',
        [k, I] = (0, s.b)(M),
        [N, Z] = k(M),
        K = (0, i.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            a = Z('PopperAnchor', n),
            s = (0, i.useRef)(null),
            c = (0, u.e)(t, s);
          return (
            (0, i.useEffect)(() => {
              a.onAnchorChange((null == r ? void 0 : r.current) || s.current);
            }),
            r
              ? null
              : (0, i.createElement)(d.WV.div, (0, l.Z)({}, o, { ref: c }))
          );
        }),
        $ = 'PopperContent',
        [V, z] = k($),
        H = (0, i.forwardRef)((e, t) => {
          var n, r, o, a, s, p, f, v;
          let {
              __scopePopper: m,
              side: h = 'bottom',
              sideOffset: E = 0,
              align: g = 'center',
              alignOffset: y = 0,
              arrowPadding: b = 0,
              avoidCollisions: w = !0,
              collisionBoundary: P = [],
              collisionPadding: C = 0,
              sticky: x = 'partial',
              hideWhenDetached: O = !1,
              updatePositionStrategy: D = 'optimized',
              onPlaced: F,
              ...R
            } = e,
            L = Z($, m),
            [M, k] = (0, i.useState)(null),
            I = (0, u.e)(t, (e) => k(e)),
            [N, K] = (0, i.useState)(null),
            z = (0, S.t)(N),
            H =
              null !== (n = null == z ? void 0 : z.width) && void 0 !== n
                ? n
                : 0,
            B =
              null !== (r = null == z ? void 0 : z.height) && void 0 !== r
                ? r
                : 0,
            X =
              'number' == typeof C
                ? C
                : { top: 0, right: 0, bottom: 0, left: 0, ...C },
            q = Array.isArray(P) ? P : [P],
            G = q.length > 0,
            J = { padding: X, boundary: q.filter(U), altBoundary: G },
            {
              refs: Q,
              floatingStyles: ee,
              placement: et,
              isPositioned: en,
              middlewareData: er
            } = (0, A.YF)({
              strategy: 'fixed',
              placement: h + ('center' !== g ? '-' + g : ''),
              whileElementsMounted: (...e) =>
                (0, _.Me)(...e, { animationFrame: 'always' === D }),
              elements: { reference: L.anchor },
              middleware: [
                (0, T.cv)({ mainAxis: E + B, alignmentAxis: y }),
                w &&
                  (0, T.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === x ? (0, T.dr)() : void 0,
                    ...J
                  }),
                w && (0, T.RR)({ ...J }),
                (0, T.dp)({
                  ...J,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r
                  }) => {
                    let { width: o, height: l } = t.reference,
                      i = e.floating.style;
                    i.setProperty('--radix-popper-available-width', `${n}px`),
                      i.setProperty(
                        '--radix-popper-available-height',
                        `${r}px`
                      ),
                      i.setProperty('--radix-popper-anchor-width', `${o}px`),
                      i.setProperty('--radix-popper-anchor-height', `${l}px`);
                  }
                }),
                N && (0, A.x7)({ element: N, padding: b }),
                Y({ arrowWidth: H, arrowHeight: B }),
                O && (0, T.Cp)({ strategy: 'referenceHidden', ...J })
              ]
            }),
            [eo, el] = j(et),
            ei = (0, c.W)(F);
          (0, W.b)(() => {
            en && (null == ei || ei());
          }, [en, ei]);
          let ea = null === (o = er.arrow) || void 0 === o ? void 0 : o.x,
            eu = null === (a = er.arrow) || void 0 === a ? void 0 : a.y,
            es =
              (null === (s = er.arrow) || void 0 === s
                ? void 0
                : s.centerOffset) !== 0,
            [ed, ec] = (0, i.useState)();
          return (
            (0, W.b)(() => {
              M && ec(window.getComputedStyle(M).zIndex);
            }, [M]),
            (0, i.createElement)(
              'div',
              {
                ref: Q.setFloating,
                'data-radix-popper-content-wrapper': '',
                style: {
                  ...ee,
                  transform: en ? ee.transform : 'translate(0, -200%)',
                  minWidth: 'max-content',
                  zIndex: ed,
                  '--radix-popper-transform-origin': [
                    null === (p = er.transformOrigin) || void 0 === p
                      ? void 0
                      : p.x,
                    null === (f = er.transformOrigin) || void 0 === f
                      ? void 0
                      : f.y
                  ].join(' ')
                },
                dir: e.dir
              },
              (0, i.createElement)(
                V,
                {
                  scope: m,
                  placedSide: eo,
                  onArrowChange: K,
                  arrowX: ea,
                  arrowY: eu,
                  shouldHideArrow: es
                },
                (0, i.createElement)(
                  d.WV.div,
                  (0, l.Z)({ 'data-side': eo, 'data-align': el }, R, {
                    ref: I,
                    style: {
                      ...R.style,
                      animation: en ? void 0 : 'none',
                      opacity:
                        null !== (v = er.hide) &&
                        void 0 !== v &&
                        v.referenceHidden
                          ? 0
                          : void 0
                    }
                  })
                )
              )
            )
          );
        }),
        B = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' };
      function U(e) {
        return null !== e;
      }
      let Y = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          var n, r, o, l, i;
          let { placement: a, rects: u, middlewareData: s } = t,
            d =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            c = d ? 0 : e.arrowWidth,
            p = d ? 0 : e.arrowHeight,
            [f, v] = j(a),
            m = { start: '0%', center: '50%', end: '100%' }[v],
            h =
              (null !==
                (r = null === (o = s.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== r
                ? r
                : 0) +
              c / 2,
            E =
              (null !==
                (l = null === (i = s.arrow) || void 0 === i ? void 0 : i.y) &&
              void 0 !== l
                ? l
                : 0) +
              p / 2,
            g = '',
            y = '';
          return (
            'bottom' === f
              ? ((g = d ? m : `${h}px`), (y = `${-p}px`))
              : 'top' === f
              ? ((g = d ? m : `${h}px`), (y = `${u.floating.height + p}px`))
              : 'right' === f
              ? ((g = `${-p}px`), (y = d ? m : `${E}px`))
              : 'left' === f &&
                ((g = `${u.floating.width + p}px`), (y = d ? m : `${E}px`)),
            { data: { x: g, y: y } }
          );
        }
      });
      function j(e) {
        let [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      let X = (e) => {
        let { __scopePopper: t, children: n } = e,
          [r, o] = (0, i.useState)(null);
        return (0, i.createElement)(
          N,
          { scope: t, anchor: r, onAnchorChange: o },
          n
        );
      };
      var q = n(54887);
      let G = (0, i.forwardRef)((e, t) => {
        var n;
        let {
          container: r = null == globalThis
            ? void 0
            : null === (n = globalThis.document) || void 0 === n
            ? void 0
            : n.body,
          ...o
        } = e;
        return r
          ? q.createPortal(
              (0, i.createElement)(d.WV.div, (0, l.Z)({}, o, { ref: t })),
              r
            )
          : null;
      });
      var J = n(31383);
      let Q = (0, i.forwardRef)((e, t) => {
        let { children: n, ...r } = e,
          o = i.Children.toArray(n),
          a = o.find(en);
        if (a) {
          let e = a.props.children,
            n = o.map((t) =>
              t !== a
                ? t
                : i.Children.count(e) > 1
                ? i.Children.only(null)
                : (0, i.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, i.createElement)(
            ee,
            (0, l.Z)({}, r, { ref: t }),
            (0, i.isValidElement)(e) ? (0, i.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, i.createElement)(ee, (0, l.Z)({}, r, { ref: t }), n);
      });
      Q.displayName = 'Slot';
      let ee = (0, i.forwardRef)((e, t) => {
        let { children: n, ...r } = e;
        return (0, i.isValidElement)(n)
          ? (0, i.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let o = e[r],
                    l = t[r];
                  /^on[A-Z]/.test(r)
                    ? o && l
                      ? (n[r] = (...e) => {
                          l(...e), o(...e);
                        })
                      : o && (n[r] = o)
                    : 'style' === r
                    ? (n[r] = { ...o, ...l })
                    : 'className' === r &&
                      (n[r] = [o, l].filter(Boolean).join(' '));
                }
                return { ...e, ...n };
              })(r, n.props),
              ref: t ? (0, u.F)(t, n.ref) : n.ref
            })
          : i.Children.count(n) > 1
          ? i.Children.only(null)
          : null;
      });
      ee.displayName = 'SlotClone';
      let et = ({ children: e }) => (0, i.createElement)(i.Fragment, null, e);
      function en(e) {
        return (0, i.isValidElement)(e) && e.type === et;
      }
      var er = n(91715),
        eo = n(78369),
        el = n(9219);
      let ei = 'Popover',
        [ea, eu] = (0, s.b)(ei, [I]),
        es = I(),
        [ed, ec] = ea(ei),
        ep = (0, i.forwardRef)((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = ec('PopoverTrigger', n),
            s = es(n),
            c = (0, u.e)(t, o.triggerRef),
            p = (0, i.createElement)(
              d.WV.button,
              (0, l.Z)(
                {
                  type: 'button',
                  'aria-haspopup': 'dialog',
                  'aria-expanded': o.open,
                  'aria-controls': o.contentId,
                  'data-state': ew(o.open)
                },
                r,
                { ref: c, onClick: (0, a.M)(e.onClick, o.onOpenToggle) }
              )
            );
          return o.hasCustomAnchor
            ? p
            : (0, i.createElement)(K, (0, l.Z)({ asChild: !0 }, s), p);
        }),
        ef = 'PopoverPortal',
        [ev, em] = ea(ef, { forceMount: void 0 }),
        eh = 'PopoverContent',
        eE = (0, i.forwardRef)((e, t) => {
          let n = em(eh, e.__scopePopover),
            { forceMount: r = n.forceMount, ...o } = e,
            a = ec(eh, e.__scopePopover);
          return (0, i.createElement)(
            J.z,
            { present: r || a.open },
            a.modal
              ? (0, i.createElement)(eg, (0, l.Z)({}, o, { ref: t }))
              : (0, i.createElement)(ey, (0, l.Z)({}, o, { ref: t }))
          );
        }),
        eg = (0, i.forwardRef)((e, t) => {
          let n = ec(eh, e.__scopePopover),
            r = (0, i.useRef)(null),
            o = (0, u.e)(t, r),
            s = (0, i.useRef)(!1);
          return (
            (0, i.useEffect)(() => {
              let e = r.current;
              if (e) return (0, eo.Ry)(e);
            }, []),
            (0, i.createElement)(
              el.Z,
              { as: Q, allowPinchZoom: !0 },
              (0, i.createElement)(
                eb,
                (0, l.Z)({}, e, {
                  ref: o,
                  trapFocus: n.open,
                  disableOutsidePointerEvents: !0,
                  onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                    var t;
                    e.preventDefault(),
                      s.current ||
                        null === (t = n.triggerRef.current) ||
                        void 0 === t ||
                        t.focus();
                  }),
                  onPointerDownOutside: (0, a.M)(
                    e.onPointerDownOutside,
                    (e) => {
                      let t = e.detail.originalEvent,
                        n = 0 === t.button && !0 === t.ctrlKey,
                        r = 2 === t.button || n;
                      s.current = r;
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                  onFocusOutside: (0, a.M)(
                    e.onFocusOutside,
                    (e) => e.preventDefault(),
                    { checkForDefaultPrevented: !1 }
                  )
                })
              )
            )
          );
        }),
        ey = (0, i.forwardRef)((e, t) => {
          let n = ec(eh, e.__scopePopover),
            r = (0, i.useRef)(!1),
            o = (0, i.useRef)(!1);
          return (0, i.createElement)(
            eb,
            (0, l.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var l, i;
                null === (l = e.onCloseAutoFocus) ||
                  void 0 === l ||
                  l.call(e, t),
                  t.defaultPrevented ||
                    (r.current ||
                      null === (i = n.triggerRef.current) ||
                      void 0 === i ||
                      i.focus(),
                    t.preventDefault()),
                  (r.current = !1),
                  (o.current = !1);
              },
              onInteractOutside: (t) => {
                var l, i;
                null === (l = e.onInteractOutside) ||
                  void 0 === l ||
                  l.call(e, t),
                  t.defaultPrevented ||
                    ((r.current = !0),
                    'pointerdown' !== t.detail.originalEvent.type ||
                      (o.current = !0));
                let a = t.target;
                (null === (i = n.triggerRef.current) || void 0 === i
                  ? void 0
                  : i.contains(a)) && t.preventDefault(),
                  'focusin' === t.detail.originalEvent.type &&
                    o.current &&
                    t.preventDefault();
              }
            })
          );
        }),
        eb = (0, i.forwardRef)((e, t) => {
          let {
              __scopePopover: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: a,
              disableOutsidePointerEvents: u,
              onEscapeKeyDown: s,
              onPointerDownOutside: d,
              onFocusOutside: c,
              onInteractOutside: p,
              ...f
            } = e,
            v = ec(eh, n),
            h = es(n);
          return (
            (0, g.EW)(),
            (0, i.createElement)(
              P,
              {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: o,
                onUnmountAutoFocus: a
              },
              (0, i.createElement)(
                m,
                {
                  asChild: !0,
                  disableOutsidePointerEvents: u,
                  onInteractOutside: p,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: d,
                  onFocusOutside: c,
                  onDismiss: () => v.onOpenChange(!1)
                },
                (0, i.createElement)(
                  H,
                  (0, l.Z)(
                    {
                      'data-state': ew(v.open),
                      role: 'dialog',
                      id: v.contentId
                    },
                    h,
                    f,
                    {
                      ref: t,
                      style: {
                        ...f.style,
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
      function ew(e) {
        return e ? 'open' : 'closed';
      }
      let eP = (e) => {
          let {
              __scopePopover: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: l,
              modal: a = !1
            } = e,
            u = es(t),
            s = (0, i.useRef)(null),
            [d, c] = (0, i.useState)(!1),
            [p = !1, f] = (0, er.T)({ prop: r, defaultProp: o, onChange: l });
          return (0, i.createElement)(
            X,
            u,
            (0, i.createElement)(
              ed,
              {
                scope: t,
                contentId: (0, R.M)(),
                triggerRef: s,
                open: p,
                onOpenChange: f,
                onOpenToggle: (0, i.useCallback)(() => f((e) => !e), [f]),
                hasCustomAnchor: d,
                onCustomAnchorAdd: (0, i.useCallback)(() => c(!0), []),
                onCustomAnchorRemove: (0, i.useCallback)(() => c(!1), []),
                modal: a
              },
              n
            )
          );
        },
        eC = ep,
        ex = (e) => {
          let {
              __scopePopover: t,
              forceMount: n,
              children: r,
              container: o
            } = e,
            l = ec(ef, t);
          return (0, i.createElement)(
            ev,
            { scope: t, forceMount: n },
            (0, i.createElement)(
              J.z,
              { present: n || l.open },
              (0, i.createElement)(G, { asChild: !0, container: o }, r)
            )
          );
        },
        eO = eE;
    }
  }
]);
