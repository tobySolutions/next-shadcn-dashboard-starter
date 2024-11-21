'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [243],
  {
    78030: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        }
      });
      var r = n(2265);
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        u = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.filter((e, t, n) => !!e && n.indexOf(e) === t).join(' ');
        };
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var a = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      };
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let i = (0, r.forwardRef)((e, t) => {
          let {
            color: n = 'currentColor',
            size: o = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: l,
            className: s = '',
            children: c,
            iconNode: d,
            ...f
          } = e;
          return (0, r.createElement)(
            'svg',
            {
              ref: t,
              ...a,
              width: o,
              height: o,
              stroke: n,
              strokeWidth: l ? (24 * Number(i)) / Number(o) : i,
              className: u('lucide', s),
              ...f
            },
            [
              ...d.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(c) ? c : [c])
            ]
          );
        }),
        l = (e, t) => {
          let n = (0, r.forwardRef)((n, a) => {
            let { className: l, ...s } = n;
            return (0, r.createElement)(i, {
              ref: a,
              iconNode: t,
              className: u('lucide-'.concat(o(e)), l),
              ...s
            });
          });
          return (n.displayName = ''.concat(e)), n;
        };
    },
    87074: function (e, t, n) {
      let r;
      n.d(t, {
        x8: function () {
          return eH;
        },
        VY: function () {
          return ez;
        },
        dk: function () {
          return eX;
        },
        aV: function () {
          return eB;
        },
        h_: function () {
          return e$;
        },
        fC: function () {
          return eK;
        },
        Dx: function () {
          return eY;
        },
        xz: function () {
          return eU;
        }
      });
      var o,
        u = n(2265),
        a = n.t(u, 2);
      function i(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      function l(...e) {
        return u.useCallback(
          (function (...e) {
            return (t) =>
              e.forEach((e) => {
                'function' == typeof e ? e(t) : null != e && (e.current = t);
              });
          })(...e),
          e
        );
      }
      var s = n(57437),
        c = globalThis?.document ? u.useLayoutEffect : () => {},
        d = a['useId'.toString()] || (() => void 0),
        f = 0;
      function p(e) {
        let [t, n] = u.useState(d());
        return (
          c(() => {
            e || n((e) => e ?? String(f++));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
      function v(e) {
        let t = u.useRef(e);
        return (
          u.useEffect(() => {
            t.current = e;
          }),
          u.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var m = n(54887),
        h = n(63355),
        g = [
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
          let n = u.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              u = r ? h.g7 : t;
            return (
              'undefined' != typeof window &&
                (window[Symbol.for('radix-ui')] = !0),
              (0, s.jsx)(u, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        y = 'dismissableLayer.update',
        w = u.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set()
        }),
        b = u.forwardRef((e, t) => {
          var n, r;
          let {
              disableOutsidePointerEvents: a = !1,
              onEscapeKeyDown: c,
              onPointerDownOutside: d,
              onFocusOutside: f,
              onInteractOutside: p,
              onDismiss: m,
              ...h
            } = e,
            b = u.useContext(w),
            [C, N] = u.useState(null),
            R =
              null !== (r = null == C ? void 0 : C.ownerDocument) &&
              void 0 !== r
                ? r
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, M] = u.useState({}),
            P = l(t, (e) => N(e)),
            S = Array.from(b.layers),
            [D] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1),
            j = S.indexOf(D),
            T = C ? S.indexOf(C) : -1,
            L = b.layersWithOutsidePointerEventsDisabled.size > 0,
            O = T >= j,
            _ = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = v(e),
                o = u.useRef(!1),
                a = u.useRef(() => {});
              return (
                u.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            x('dismissableLayer.pointerDownOutside', r, o, {
                              discrete: !0
                            });
                          },
                          o = { originalEvent: e };
                        'touch' === e.pointerType
                          ? (n.removeEventListener('click', a.current),
                            (a.current = t),
                            n.addEventListener('click', a.current, {
                              once: !0
                            }))
                          : t();
                      } else n.removeEventListener('click', a.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener('pointerdown', e),
                      n.removeEventListener('click', a.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...b.branches].some((e) => e.contains(t));
              !O ||
                n ||
                (null == d || d(e),
                null == p || p(e),
                e.defaultPrevented || null == m || m());
            }, R),
            k = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = v(e),
                o = u.useRef(!1);
              return (
                u.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      x(
                        'dismissableLayer.focusOutside',
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener('focusin', e),
                    () => n.removeEventListener('focusin', e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1)
                }
              );
            })((e) => {
              let t = e.target;
              [...b.branches].some((e) => e.contains(t)) ||
                (null == f || f(e),
                null == p || p(e),
                e.defaultPrevented || null == m || m());
            }, R);
          return (
            !(function (e, t = globalThis?.document) {
              let n = v(e);
              u.useEffect(() => {
                let e = (e) => {
                  'Escape' === e.key && n(e);
                };
                return (
                  t.addEventListener('keydown', e, { capture: !0 }),
                  () => t.removeEventListener('keydown', e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              T !== b.layers.size - 1 ||
                (null == c || c(e),
                !e.defaultPrevented && m && (e.preventDefault(), m()));
            }, R),
            u.useEffect(() => {
              if (C)
                return (
                  a &&
                    (0 === b.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = R.body.style.pointerEvents),
                      (R.body.style.pointerEvents = 'none')),
                    b.layersWithOutsidePointerEventsDisabled.add(C)),
                  b.layers.add(C),
                  E(),
                  () => {
                    a &&
                      1 === b.layersWithOutsidePointerEventsDisabled.size &&
                      (R.body.style.pointerEvents = o);
                  }
                );
            }, [C, R, a, b]),
            u.useEffect(
              () => () => {
                C &&
                  (b.layers.delete(C),
                  b.layersWithOutsidePointerEventsDisabled.delete(C),
                  E());
              },
              [C, b]
            ),
            u.useEffect(() => {
              let e = () => M({});
              return (
                document.addEventListener(y, e),
                () => document.removeEventListener(y, e)
              );
            }, []),
            (0, s.jsx)(g.div, {
              ...h,
              ref: P,
              style: {
                pointerEvents: L ? (O ? 'auto' : 'none') : void 0,
                ...e.style
              },
              onFocusCapture: i(e.onFocusCapture, k.onFocusCapture),
              onBlurCapture: i(e.onBlurCapture, k.onBlurCapture),
              onPointerDownCapture: i(
                e.onPointerDownCapture,
                _.onPointerDownCapture
              )
            })
          );
        });
      function E() {
        let e = new CustomEvent(y);
        document.dispatchEvent(e);
      }
      function x(e, t, n, r) {
        let { discrete: o } = r,
          u = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && u.addEventListener(e, t, { once: !0 }), o)
          ? u && m.flushSync(() => u.dispatchEvent(a))
          : u.dispatchEvent(a);
      }
      (b.displayName = 'DismissableLayer'),
        (u.forwardRef((e, t) => {
          let n = u.useContext(w),
            r = u.useRef(null),
            o = l(t, r);
          return (
            u.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, s.jsx)(g.div, { ...e, ref: o })
          );
        }).displayName = 'DismissableLayerBranch');
      var C = 'focusScope.autoFocusOnMount',
        N = 'focusScope.autoFocusOnUnmount',
        R = { bubbles: !1, cancelable: !0 },
        M = u.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...i
            } = e,
            [c, d] = u.useState(null),
            f = v(o),
            p = v(a),
            m = u.useRef(null),
            h = l(t, (e) => d(e)),
            y = u.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              }
            }).current;
          u.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (y.paused || !c) return;
                  let t = e.target;
                  c.contains(t)
                    ? (m.current = t)
                    : D(m.current, { select: !0 });
                },
                t = function (e) {
                  if (y.paused || !c) return;
                  let t = e.relatedTarget;
                  null === t || c.contains(t) || D(m.current, { select: !0 });
                };
              document.addEventListener('focusin', e),
                document.addEventListener('focusout', t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && D(c);
              });
              return (
                c && n.observe(c, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    n.disconnect();
                }
              );
            }
          }, [r, c, y.paused]),
            u.useEffect(() => {
              if (c) {
                j.add(y);
                let e = document.activeElement;
                if (!c.contains(e)) {
                  let t = new CustomEvent(C, R);
                  c.addEventListener(C, f),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (D(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        P(c).filter((e) => 'A' !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && D(c));
                }
                return () => {
                  c.removeEventListener(C, f),
                    setTimeout(() => {
                      let t = new CustomEvent(N, R);
                      c.addEventListener(N, p),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          D(null != e ? e : document.body, { select: !0 }),
                        c.removeEventListener(N, p),
                        j.remove(y);
                    }, 0);
                };
              }
            }, [c, f, p, y]);
          let w = u.useCallback(
            (e) => {
              if ((!n && !r) || y.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, u] = (function (e) {
                    let t = P(e);
                    return [S(t, e), S(t.reverse(), e)];
                  })(t);
                r && u
                  ? e.shiftKey || o !== u
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && D(u, { select: !0 }))
                    : (e.preventDefault(), n && D(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, y.paused]
          );
          return (0, s.jsx)(g.div, {
            tabIndex: -1,
            ...i,
            ref: h,
            onKeyDown: w
          });
        });
      function P(e) {
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
      function S(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ('hidden' === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ('none' === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function D(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
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
      M.displayName = 'FocusScope';
      var j =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = T(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = T(r, e))[0]) || void 0 === t || t.resume();
          }
        });
      function T(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var L = u.forwardRef((e, t) => {
        var n, r;
        let { container: o, ...a } = e,
          [i, l] = u.useState(!1);
        c(() => l(!0), []);
        let d =
          o ||
          (i &&
            (null === (r = globalThis) || void 0 === r
              ? void 0
              : null === (n = r.document) || void 0 === n
              ? void 0
              : n.body));
        return d
          ? m.createPortal((0, s.jsx)(g.div, { ...a, ref: t }), d)
          : null;
      });
      L.displayName = 'Portal';
      var O = (e) => {
        var t, n;
        let r, o;
        let { present: a, children: i } = e,
          s = (function (e) {
            var t, n;
            let [r, o] = u.useState(),
              a = u.useRef({}),
              i = u.useRef(e),
              l = u.useRef('none'),
              [s, d] =
                ((t = e ? 'mounted' : 'unmounted'),
                (n = {
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
                u.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              u.useEffect(() => {
                let e = _(a.current);
                l.current = 'mounted' === s ? e : 'none';
              }, [s]),
              c(() => {
                let t = a.current,
                  n = i.current;
                if (n !== e) {
                  let r = l.current,
                    o = _(t);
                  e
                    ? d('MOUNT')
                    : 'none' === o ||
                      (null == t ? void 0 : t.display) === 'none'
                    ? d('UNMOUNT')
                    : n && r !== o
                    ? d('ANIMATION_OUT')
                    : d('UNMOUNT'),
                    (i.current = e);
                }
              }, [e, d]),
              c(() => {
                if (r) {
                  var e;
                  let t;
                  let n =
                      null !== (e = r.ownerDocument.defaultView) && void 0 !== e
                        ? e
                        : window,
                    o = (e) => {
                      let o = _(a.current).includes(e.animationName);
                      if (
                        e.target === r &&
                        o &&
                        (d('ANIMATION_END'), !i.current)
                      ) {
                        let e = r.style.animationFillMode;
                        (r.style.animationFillMode = 'forwards'),
                          (t = n.setTimeout(() => {
                            'forwards' === r.style.animationFillMode &&
                              (r.style.animationFillMode = e);
                          }));
                      }
                    },
                    u = (e) => {
                      e.target === r && (l.current = _(a.current));
                    };
                  return (
                    r.addEventListener('animationstart', u),
                    r.addEventListener('animationcancel', o),
                    r.addEventListener('animationend', o),
                    () => {
                      n.clearTimeout(t),
                        r.removeEventListener('animationstart', u),
                        r.removeEventListener('animationcancel', o),
                        r.removeEventListener('animationend', o);
                    }
                  );
                }
                d('ANIMATION_END');
              }, [r, d]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(s),
                ref: u.useCallback((e) => {
                  e && (a.current = getComputedStyle(e)), o(e);
                }, [])
              }
            );
          })(a),
          d =
            'function' == typeof i
              ? i({ present: s.isPresent })
              : u.Children.only(i),
          f = l(
            s.ref,
            (r =
              null === (t = Object.getOwnPropertyDescriptor(d.props, 'ref')) ||
              void 0 === t
                ? void 0
                : t.get) &&
              'isReactWarning' in r &&
              r.isReactWarning
              ? d.ref
              : (r =
                  null === (n = Object.getOwnPropertyDescriptor(d, 'ref')) ||
                  void 0 === n
                    ? void 0
                    : n.get) &&
                'isReactWarning' in r &&
                r.isReactWarning
              ? d.props.ref
              : d.props.ref || d.ref
          );
        return 'function' == typeof i || s.isPresent
          ? u.cloneElement(d, { ref: f })
          : null;
      };
      function _(e) {
        return (null == e ? void 0 : e.animationName) || 'none';
      }
      O.displayName = 'Presence';
      var k = 0;
      function I() {
        let e = document.createElement('span');
        return (
          e.setAttribute('data-radix-focus-guard', ''),
          (e.tabIndex = 0),
          (e.style.outline = 'none'),
          (e.style.opacity = '0'),
          (e.style.position = 'fixed'),
          (e.style.pointerEvents = 'none'),
          e
        );
      }
      var A = n(11735),
        F = n(91584),
        W = n(28215),
        K = (0, n(15411)._)(),
        U = function () {},
        $ = u.forwardRef(function (e, t) {
          var n = u.useRef(null),
            r = u.useState({
              onScrollCapture: U,
              onWheelCapture: U,
              onTouchMoveCapture: U
            }),
            o = r[0],
            a = r[1],
            i = e.forwardProps,
            l = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            v = e.noIsolation,
            m = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            y = e.gapMode,
            w = (0, A._T)(e, [
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
              'as',
              'gapMode'
            ]),
            b = (0, W.q)([n, t]),
            E = (0, A.pi)((0, A.pi)({}, w), o);
          return u.createElement(
            u.Fragment,
            null,
            d &&
              u.createElement(p, {
                sideCar: K,
                removeScrollBar: c,
                shards: f,
                noIsolation: v,
                inert: m,
                setCallbacks: a,
                allowPinchZoom: !!h,
                lockRef: n,
                gapMode: y
              }),
            i
              ? u.cloneElement(
                  u.Children.only(l),
                  (0, A.pi)((0, A.pi)({}, E), { ref: b })
                )
              : u.createElement(
                  void 0 === g ? 'div' : g,
                  (0, A.pi)({}, E, { className: s, ref: b }),
                  l
                )
          );
        });
      ($.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        ($.classNames = { fullWidth: F.zi, zeroRight: F.pF });
      var B = n(48776),
        z = n(65973),
        Y = n(18039),
        X = !1;
      if ('undefined' != typeof window)
        try {
          var H = Object.defineProperty({}, 'passive', {
            get: function () {
              return (X = !0), !0;
            }
          });
          window.addEventListener('test', H, H),
            window.removeEventListener('test', H, H);
        } catch (e) {
          X = !1;
        }
      var G = !!X && { passive: !1 },
        Z = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            'hidden' !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              'TEXTAREA' !== e.tagName &&
              'visible' === n[t]
            )
          );
        },
        V = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              q(e, r))
            ) {
              var o = J(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        q = function (e, t) {
          return 'v' === e ? Z(t, 'overflowY') : Z(t, 'overflowX');
        },
        J = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        Q = function (e, t, n, r, o) {
          var u,
            a =
              ((u = window.getComputedStyle(t).direction),
              'h' === e && 'rtl' === u ? -1 : 1),
            i = a * r,
            l = n.target,
            s = t.contains(l),
            c = !1,
            d = i > 0,
            f = 0,
            p = 0;
          do {
            var v = J(e, l),
              m = v[0],
              h = v[1] - v[2] - a * m;
            (m || h) && q(e, l) && ((f += h), (p += m)),
              l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
          } while (
            (!s && l !== document.body) ||
            (s && (t.contains(l) || t === l))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && i > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -i > p)) && (c = !0),
            c
          );
        },
        ee = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        et = function (e) {
          return [e.deltaX, e.deltaY];
        },
        en = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        er = 0,
        eo = [],
        eu = (0, B.L)(K, function (e) {
          var t = u.useRef([]),
            n = u.useRef([0, 0]),
            r = u.useRef(),
            o = u.useState(er++)[0],
            a = u.useState(Y.Ws)[0],
            i = u.useRef(e);
          u.useEffect(
            function () {
              i.current = e;
            },
            [e]
          ),
            u.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add('block-interactivity-'.concat(o));
                  var t = (0, A.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(en),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add('allow-interactivity-'.concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        'block-interactivity-'.concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            'allow-interactivity-'.concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = u.useCallback(function (e, t) {
              if (
                ('touches' in e && 2 === e.touches.length) ||
                ('wheel' === e.type && e.ctrlKey)
              )
                return !i.current.allowPinchZoom;
              var o,
                u = ee(e),
                a = n.current,
                l = 'deltaX' in e ? e.deltaX : a[0] - u[0],
                s = 'deltaY' in e ? e.deltaY : a[1] - u[1],
                c = e.target,
                d = Math.abs(l) > Math.abs(s) ? 'h' : 'v';
              if ('touches' in e && 'h' === d && 'range' === c.type) return !1;
              var f = V(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = 'v' === d ? 'h' : 'v'), (f = V(d, c))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  'changedTouches' in e &&
                  (l || s) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return Q(p, t, e, 'h' === p ? l : s, !0);
            }, []),
            s = u.useCallback(function (e) {
              if (eo.length && eo[eo.length - 1] === a) {
                var n = 'deltaY' in e ? et(e) : ee(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (i.current.shards || [])
                    .map(en)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? l(e, o[0]) : !i.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = u.useCallback(function (e, n, r, o) {
              var u = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r)
              };
              t.current.push(u),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== u;
                  });
                }, 1);
            }, []),
            d = u.useCallback(function (e) {
              (n.current = ee(e)), (r.current = void 0);
            }, []),
            f = u.useCallback(function (t) {
              c(t.type, et(t), t.target, l(t, e.lockRef.current));
            }, []),
            p = u.useCallback(function (t) {
              c(t.type, ee(t), t.target, l(t, e.lockRef.current));
            }, []);
          u.useEffect(function () {
            return (
              eo.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p
              }),
              document.addEventListener('wheel', s, G),
              document.addEventListener('touchmove', s, G),
              document.addEventListener('touchstart', d, G),
              function () {
                (eo = eo.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener('wheel', s, G),
                  document.removeEventListener('touchmove', s, G),
                  document.removeEventListener('touchstart', d, G);
              }
            );
          }, []);
          var v = e.removeScrollBar,
            m = e.inert;
          return u.createElement(
            u.Fragment,
            null,
            m
              ? u.createElement(a, {
                  styles: '\n  .block-interactivity-'
                    .concat(
                      o,
                      ' {pointer-events: none;}\n  .allow-interactivity-'
                    )
                    .concat(o, ' {pointer-events: all;}\n')
                })
              : null,
            v ? u.createElement(z.jp, { gapMode: e.gapMode }) : null
          );
        }),
        ea = u.forwardRef(function (e, t) {
          return u.createElement($, (0, A.pi)({}, e, { ref: t, sideCar: eu }));
        });
      ea.classNames = $.classNames;
      var ei = n(78369),
        el = 'Dialog',
        [es, ec] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => u.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return u.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = u.createContext(r),
                  a = n.length;
                n = [...n, r];
                let i = (t) => {
                  let { scope: n, children: r, ...i } = t,
                    l = n?.[e]?.[a] || o,
                    c = u.useMemo(() => i, Object.values(i));
                  return (0, s.jsx)(l.Provider, { value: c, children: r });
                };
                return (
                  (i.displayName = t + 'Provider'),
                  [
                    i,
                    function (n, i) {
                      let l = i?.[e]?.[a] || o,
                        s = u.useContext(l);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    }
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return u.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t)
            ]
          );
        })(el),
        [ed, ef] = es(el),
        ep = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: a,
              modal: i = !0
            } = e,
            l = u.useRef(null),
            c = u.useRef(null),
            [d = !1, f] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {}
            }) {
              let [r, o] = (function ({ defaultProp: e, onChange: t }) {
                  let n = u.useState(e),
                    [r] = n,
                    o = u.useRef(r),
                    a = v(t);
                  return (
                    u.useEffect(() => {
                      o.current !== r && (a(r), (o.current = r));
                    }, [r, o, a]),
                    n
                  );
                })({ defaultProp: t, onChange: n }),
                a = void 0 !== e,
                i = a ? e : r,
                l = v(n);
              return [
                i,
                u.useCallback(
                  (t) => {
                    if (a) {
                      let n = 'function' == typeof t ? t(e) : t;
                      n !== e && l(n);
                    } else o(t);
                  },
                  [a, e, o, l]
                )
              ];
            })({ prop: r, defaultProp: o, onChange: a });
          return (0, s.jsx)(ed, {
            scope: t,
            triggerRef: l,
            contentRef: c,
            contentId: p(),
            titleId: p(),
            descriptionId: p(),
            open: d,
            onOpenChange: f,
            onOpenToggle: u.useCallback(() => f((e) => !e), [f]),
            modal: i,
            children: n
          });
        };
      ep.displayName = el;
      var ev = 'DialogTrigger',
        em = u.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ef(ev, n),
            u = l(t, o.triggerRef);
          return (0, s.jsx)(g.button, {
            type: 'button',
            'aria-haspopup': 'dialog',
            'aria-expanded': o.open,
            'aria-controls': o.contentId,
            'data-state': e_(o.open),
            ...r,
            ref: u,
            onClick: i(e.onClick, o.onOpenToggle)
          });
        });
      em.displayName = ev;
      var eh = 'DialogPortal',
        [eg, ey] = es(eh, { forceMount: void 0 }),
        ew = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: o
            } = e,
            a = ef(eh, t);
          return (0, s.jsx)(eg, {
            scope: t,
            forceMount: n,
            children: u.Children.map(r, (e) =>
              (0, s.jsx)(O, {
                present: n || a.open,
                children: (0, s.jsx)(L, {
                  asChild: !0,
                  container: o,
                  children: e
                })
              })
            )
          });
        };
      ew.displayName = eh;
      var eb = 'DialogOverlay',
        eE = u.forwardRef((e, t) => {
          let n = ey(eb, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            u = ef(eb, e.__scopeDialog);
          return u.modal
            ? (0, s.jsx)(O, {
                present: r || u.open,
                children: (0, s.jsx)(ex, { ...o, ref: t })
              })
            : null;
        });
      eE.displayName = eb;
      var ex = u.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ef(eb, n);
          return (0, s.jsx)(ea, {
            as: h.g7,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, s.jsx)(g.div, {
              'data-state': e_(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: 'auto', ...r.style }
            })
          });
        }),
        eC = 'DialogContent',
        eN = u.forwardRef((e, t) => {
          let n = ey(eC, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            u = ef(eC, e.__scopeDialog);
          return (0, s.jsx)(O, {
            present: r || u.open,
            children: u.modal
              ? (0, s.jsx)(eR, { ...o, ref: t })
              : (0, s.jsx)(eM, { ...o, ref: t })
          });
        });
      eN.displayName = eC;
      var eR = u.forwardRef((e, t) => {
          let n = ef(eC, e.__scopeDialog),
            r = u.useRef(null),
            o = l(t, n.contentRef, r);
          return (
            u.useEffect(() => {
              let e = r.current;
              if (e) return (0, ei.Ry)(e);
            }, []),
            (0, s.jsx)(eP, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: i(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = n.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: i(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: i(e.onFocusOutside, (e) => e.preventDefault())
            })
          );
        }),
        eM = u.forwardRef((e, t) => {
          let n = ef(eC, e.__scopeDialog),
            r = u.useRef(!1),
            o = u.useRef(!1);
          return (0, s.jsx)(eP, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var u, a;
              null === (u = e.onCloseAutoFocus) || void 0 === u || u.call(e, t),
                t.defaultPrevented ||
                  (r.current ||
                    null === (a = n.triggerRef.current) ||
                    void 0 === a ||
                    a.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (o.current = !1);
            },
            onInteractOutside: (t) => {
              var u, a;
              null === (u = e.onInteractOutside) ||
                void 0 === u ||
                u.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  'pointerdown' !== t.detail.originalEvent.type ||
                    (o.current = !0));
              let i = t.target;
              (null === (a = n.triggerRef.current) || void 0 === a
                ? void 0
                : a.contains(i)) && t.preventDefault(),
                'focusin' === t.detail.originalEvent.type &&
                  o.current &&
                  t.preventDefault();
            }
          });
        }),
        eP = u.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: a,
              ...i
            } = e,
            c = ef(eC, n),
            d = u.useRef(null),
            f = l(t, d);
          return (
            u.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll('[data-radix-focus-guard]');
              return (
                document.body.insertAdjacentElement(
                  'afterbegin',
                  null !== (e = n[0]) && void 0 !== e ? e : I()
                ),
                document.body.insertAdjacentElement(
                  'beforeend',
                  null !== (t = n[1]) && void 0 !== t ? t : I()
                ),
                k++,
                () => {
                  1 === k &&
                    document
                      .querySelectorAll('[data-radix-focus-guard]')
                      .forEach((e) => e.remove()),
                    k--;
                }
              );
            }, []),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(M, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: o,
                  onUnmountAutoFocus: a,
                  children: (0, s.jsx)(b, {
                    role: 'dialog',
                    id: c.contentId,
                    'aria-describedby': c.descriptionId,
                    'aria-labelledby': c.titleId,
                    'data-state': e_(c.open),
                    ...i,
                    ref: f,
                    onDismiss: () => c.onOpenChange(!1)
                  })
                }),
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(eF, { titleId: c.titleId }),
                    (0, s.jsx)(eW, {
                      contentRef: d,
                      descriptionId: c.descriptionId
                    })
                  ]
                })
              ]
            })
          );
        }),
        eS = 'DialogTitle',
        eD = u.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ef(eS, n);
          return (0, s.jsx)(g.h2, { id: o.titleId, ...r, ref: t });
        });
      eD.displayName = eS;
      var ej = 'DialogDescription',
        eT = u.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ef(ej, n);
          return (0, s.jsx)(g.p, { id: o.descriptionId, ...r, ref: t });
        });
      eT.displayName = ej;
      var eL = 'DialogClose',
        eO = u.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ef(eL, n);
          return (0, s.jsx)(g.button, {
            type: 'button',
            ...r,
            ref: t,
            onClick: i(e.onClick, () => o.onOpenChange(!1))
          });
        });
      function e_(e) {
        return e ? 'open' : 'closed';
      }
      eO.displayName = eL;
      var ek = 'DialogTitleWarning',
        [eI, eA] = (function (e, t) {
          let n = u.createContext(t),
            r = (e) => {
              let { children: t, ...r } = e,
                o = u.useMemo(() => r, Object.values(r));
              return (0, s.jsx)(n.Provider, { value: o, children: t });
            };
          return (
            (r.displayName = e + 'Provider'),
            [
              r,
              function (r) {
                let o = u.useContext(n);
                if (o) return o;
                if (void 0 !== t) return t;
                throw Error(`\`${r}\` must be used within \`${e}\``);
              }
            ]
          );
        })(ek, { contentName: eC, titleName: eS, docsSlug: 'dialog' }),
        eF = (e) => {
          let { titleId: t } = e,
            n = eA(ek),
            r = '`'
              .concat(n.contentName, '` requires a `')
              .concat(
                n.titleName,
                '` for the component to be accessible for screen reader users.\n\nIf you want to hide the `'
              )
              .concat(
                n.titleName,
                '`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/'
              )
              .concat(n.docsSlug);
          return (
            u.useEffect(() => {
              t && !document.getElementById(t) && console.error(r);
            }, [r, t]),
            null
          );
        },
        eW = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = eA('DialogDescriptionWarning'),
            o =
              'Warning: Missing `Description` or `aria-describedby={undefined}` for {'.concat(
                r.contentName,
                '}.'
              );
          return (
            u.useEffect(() => {
              var e;
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute('aria-describedby');
              n && r && !document.getElementById(n) && console.warn(o);
            }, [o, t, n]),
            null
          );
        },
        eK = ep,
        eU = em,
        e$ = ew,
        eB = eE,
        ez = eN,
        eY = eD,
        eX = eT,
        eH = eO;
    },
    43260: function (e, t, n) {
      let r;
      n.d(t, {
        oC: function () {
          return nE;
        },
        VY: function () {
          return ng;
        },
        ZA: function () {
          return ny;
        },
        ck: function () {
          return nb;
        },
        wU: function () {
          return nN;
        },
        __: function () {
          return nw;
        },
        Uv: function () {
          return nh;
        },
        Ee: function () {
          return nx;
        },
        Rk: function () {
          return nC;
        },
        fC: function () {
          return nv;
        },
        Z0: function () {
          return nR;
        },
        Tr: function () {
          return nM;
        },
        tu: function () {
          return nS;
        },
        fF: function () {
          return nP;
        },
        xz: function () {
          return nm;
        }
      });
      var o,
        u = n(2265),
        a = n.t(u, 2);
      function i(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var l = n(57437);
      function s(e) {
        let t = u.useRef(e);
        return (
          u.useEffect(() => {
            t.current = e;
          }),
          u.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      function c({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [r, o] = (function ({ defaultProp: e, onChange: t }) {
            let n = u.useState(e),
              [r] = n,
              o = u.useRef(r),
              a = s(t);
            return (
              u.useEffect(() => {
                o.current !== r && (a(r), (o.current = r));
              }, [r, o, a]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          i = a ? e : r,
          l = s(n);
        return [
          i,
          u.useCallback(
            (t) => {
              if (a) {
                let n = 'function' == typeof t ? t(e) : t;
                n !== e && l(n);
              } else o(t);
            },
            [a, e, o, l]
          )
        ];
      }
      var d = n(54887),
        f = n(63355),
        p = [
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
          let n = u.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              u = r ? f.g7 : t;
            return (
              'undefined' != typeof window &&
                (window[Symbol.for('radix-ui')] = !0),
              (0, l.jsx)(u, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function v(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      function m(...e) {
        return (t) =>
          e.forEach((e) => {
            'function' == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function h(...e) {
        return u.useCallback(m(...e), e);
      }
      function g(e) {
        let t = e + 'CollectionProvider',
          [n, r] = (function (e, t = []) {
            let n = [],
              r = () => {
                let t = n.map((e) => u.createContext(e));
                return function (n) {
                  let r = n?.[e] || t;
                  return u.useMemo(
                    () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                    [n, r]
                  );
                };
              };
            return (
              (r.scopeName = e),
              [
                function (t, r) {
                  let o = u.createContext(r),
                    a = n.length;
                  function i(t) {
                    let { scope: n, children: r, ...i } = t,
                      s = n?.[e][a] || o,
                      c = u.useMemo(() => i, Object.values(i));
                    return (0, l.jsx)(s.Provider, { value: c, children: r });
                  }
                  return (
                    (n = [...n, r]),
                    (i.displayName = t + 'Provider'),
                    [
                      i,
                      function (n, i) {
                        let l = i?.[e][a] || o,
                          s = u.useContext(l);
                        if (s) return s;
                        if (void 0 !== r) return r;
                        throw Error(`\`${n}\` must be used within \`${t}\``);
                      }
                    ]
                  );
                },
                (function (...e) {
                  let t = e[0];
                  if (1 === e.length) return t;
                  let n = () => {
                    let n = e.map((e) => ({
                      useScope: e(),
                      scopeName: e.scopeName
                    }));
                    return function (e) {
                      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                        let o = n(e)[`__scope${r}`];
                        return { ...t, ...o };
                      }, {});
                      return u.useMemo(
                        () => ({ [`__scope${t.scopeName}`]: r }),
                        [r]
                      );
                    };
                  };
                  return (n.scopeName = t.scopeName), n;
                })(r, ...t)
              ]
            );
          })(t),
          [o, a] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map()
          }),
          i = (e) => {
            let { scope: t, children: n } = e,
              r = u.useRef(null),
              a = u.useRef(new Map()).current;
            return (0, l.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: r,
              children: n
            });
          };
        i.displayName = t;
        let s = e + 'CollectionSlot',
          c = u.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = h(t, a(s, n).collectionRef);
            return (0, l.jsx)(f.g7, { ref: o, children: r });
          });
        c.displayName = s;
        let d = e + 'CollectionItemSlot',
          p = 'data-radix-collection-item',
          v = u.forwardRef((e, t) => {
            let { scope: n, children: r, ...o } = e,
              i = u.useRef(null),
              s = h(t, i),
              c = a(d, n);
            return (
              u.useEffect(
                () => (
                  c.itemMap.set(i, { ref: i, ...o }),
                  () => void c.itemMap.delete(i)
                )
              ),
              (0, l.jsx)(f.g7, { [p]: '', ref: s, children: r })
            );
          });
        return (
          (v.displayName = d),
          [
            { Provider: i, Slot: c, ItemSlot: v },
            function (t) {
              let n = a(e + 'CollectionConsumer', t);
              return u.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll('['.concat(p, ']')));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                );
              }, [n.collectionRef, n.itemMap]);
            },
            r
          ]
        );
      }
      var y = u.createContext(void 0);
      function w(e) {
        let t = u.useContext(y);
        return e || t || 'ltr';
      }
      var b = [
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
        let n = u.forwardRef((e, n) => {
          let { asChild: r, ...o } = e,
            u = r ? f.g7 : t;
          return (
            'undefined' != typeof window &&
              (window[Symbol.for('radix-ui')] = !0),
            (0, l.jsx)(u, { ...o, ref: n })
          );
        });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
      }, {});
      function E(e, t) {
        e && d.flushSync(() => e.dispatchEvent(t));
      }
      function x(e) {
        let t = u.useRef(e);
        return (
          u.useEffect(() => {
            t.current = e;
          }),
          u.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var C = 'dismissableLayer.update',
        N = u.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set()
        }),
        R = u.forwardRef((e, t) => {
          var n, r;
          let {
              disableOutsidePointerEvents: a = !1,
              onEscapeKeyDown: i,
              onPointerDownOutside: s,
              onFocusOutside: c,
              onInteractOutside: d,
              onDismiss: f,
              ...p
            } = e,
            m = u.useContext(N),
            [g, y] = u.useState(null),
            w =
              null !== (r = null == g ? void 0 : g.ownerDocument) &&
              void 0 !== r
                ? r
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, E] = u.useState({}),
            R = h(t, (e) => y(e)),
            S = Array.from(m.layers),
            [D] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
            j = S.indexOf(D),
            T = g ? S.indexOf(g) : -1,
            L = m.layersWithOutsidePointerEventsDisabled.size > 0,
            O = T >= j,
            _ = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = x(e),
                o = u.useRef(!1),
                a = u.useRef(() => {});
              return (
                u.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            P('dismissableLayer.pointerDownOutside', r, o, {
                              discrete: !0
                            });
                          },
                          o = { originalEvent: e };
                        'touch' === e.pointerType
                          ? (n.removeEventListener('click', a.current),
                            (a.current = t),
                            n.addEventListener('click', a.current, {
                              once: !0
                            }))
                          : t();
                      } else n.removeEventListener('click', a.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener('pointerdown', e),
                      n.removeEventListener('click', a.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...m.branches].some((e) => e.contains(t));
              !O ||
                n ||
                (null == s || s(e),
                null == d || d(e),
                e.defaultPrevented || null == f || f());
            }, w),
            k = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = x(e),
                o = u.useRef(!1);
              return (
                u.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      P(
                        'dismissableLayer.focusOutside',
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener('focusin', e),
                    () => n.removeEventListener('focusin', e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1)
                }
              );
            })((e) => {
              let t = e.target;
              [...m.branches].some((e) => e.contains(t)) ||
                (null == c || c(e),
                null == d || d(e),
                e.defaultPrevented || null == f || f());
            }, w);
          return (
            !(function (e, t = globalThis?.document) {
              let n = x(e);
              u.useEffect(() => {
                let e = (e) => {
                  'Escape' === e.key && n(e);
                };
                return (
                  t.addEventListener('keydown', e, { capture: !0 }),
                  () => t.removeEventListener('keydown', e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              T !== m.layers.size - 1 ||
                (null == i || i(e),
                !e.defaultPrevented && f && (e.preventDefault(), f()));
            }, w),
            u.useEffect(() => {
              if (g)
                return (
                  a &&
                    (0 === m.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = w.body.style.pointerEvents),
                      (w.body.style.pointerEvents = 'none')),
                    m.layersWithOutsidePointerEventsDisabled.add(g)),
                  m.layers.add(g),
                  M(),
                  () => {
                    a &&
                      1 === m.layersWithOutsidePointerEventsDisabled.size &&
                      (w.body.style.pointerEvents = o);
                  }
                );
            }, [g, w, a, m]),
            u.useEffect(
              () => () => {
                g &&
                  (m.layers.delete(g),
                  m.layersWithOutsidePointerEventsDisabled.delete(g),
                  M());
              },
              [g, m]
            ),
            u.useEffect(() => {
              let e = () => E({});
              return (
                document.addEventListener(C, e),
                () => document.removeEventListener(C, e)
              );
            }, []),
            (0, l.jsx)(b.div, {
              ...p,
              ref: R,
              style: {
                pointerEvents: L ? (O ? 'auto' : 'none') : void 0,
                ...e.style
              },
              onFocusCapture: v(e.onFocusCapture, k.onFocusCapture),
              onBlurCapture: v(e.onBlurCapture, k.onBlurCapture),
              onPointerDownCapture: v(
                e.onPointerDownCapture,
                _.onPointerDownCapture
              )
            })
          );
        });
      function M() {
        let e = new CustomEvent(C);
        document.dispatchEvent(e);
      }
      function P(e, t, n, r) {
        let { discrete: o } = r,
          u = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && u.addEventListener(e, t, { once: !0 }),
          o ? E(u, a) : u.dispatchEvent(a);
      }
      (R.displayName = 'DismissableLayer'),
        (u.forwardRef((e, t) => {
          let n = u.useContext(N),
            r = u.useRef(null),
            o = h(t, r);
          return (
            u.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, l.jsx)(b.div, { ...e, ref: o })
          );
        }).displayName = 'DismissableLayerBranch');
      var S = 0;
      function D() {
        let e = document.createElement('span');
        return (
          e.setAttribute('data-radix-focus-guard', ''),
          (e.tabIndex = 0),
          (e.style.outline = 'none'),
          (e.style.opacity = '0'),
          (e.style.position = 'fixed'),
          (e.style.pointerEvents = 'none'),
          e
        );
      }
      var j = 'focusScope.autoFocusOnMount',
        T = 'focusScope.autoFocusOnUnmount',
        L = { bubbles: !1, cancelable: !0 },
        O = u.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...i
            } = e,
            [s, c] = u.useState(null),
            d = x(o),
            f = x(a),
            p = u.useRef(null),
            v = h(t, (e) => c(e)),
            m = u.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              }
            }).current;
          u.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (m.paused || !s) return;
                  let t = e.target;
                  s.contains(t)
                    ? (p.current = t)
                    : I(p.current, { select: !0 });
                },
                t = function (e) {
                  if (m.paused || !s) return;
                  let t = e.relatedTarget;
                  null === t || s.contains(t) || I(p.current, { select: !0 });
                };
              document.addEventListener('focusin', e),
                document.addEventListener('focusout', t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && I(s);
              });
              return (
                s && n.observe(s, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    n.disconnect();
                }
              );
            }
          }, [r, s, m.paused]),
            u.useEffect(() => {
              if (s) {
                A.add(m);
                let e = document.activeElement;
                if (!s.contains(e)) {
                  let t = new CustomEvent(j, L);
                  s.addEventListener(j, d),
                    s.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (I(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        _(s).filter((e) => 'A' !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && I(s));
                }
                return () => {
                  s.removeEventListener(j, d),
                    setTimeout(() => {
                      let t = new CustomEvent(T, L);
                      s.addEventListener(T, f),
                        s.dispatchEvent(t),
                        t.defaultPrevented ||
                          I(null != e ? e : document.body, { select: !0 }),
                        s.removeEventListener(T, f),
                        A.remove(m);
                    }, 0);
                };
              }
            }, [s, d, f, m]);
          let g = u.useCallback(
            (e) => {
              if ((!n && !r) || m.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, u] = (function (e) {
                    let t = _(e);
                    return [k(t, e), k(t.reverse(), e)];
                  })(t);
                r && u
                  ? e.shiftKey || o !== u
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && I(u, { select: !0 }))
                    : (e.preventDefault(), n && I(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, m.paused]
          );
          return (0, l.jsx)(b.div, {
            tabIndex: -1,
            ...i,
            ref: v,
            onKeyDown: g
          });
        });
      function _(e) {
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
      function k(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ('hidden' === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ('none' === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function I(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
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
      O.displayName = 'FocusScope';
      var A =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = F(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = F(r, e))[0]) || void 0 === t || t.resume();
          }
        });
      function F(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var W = globalThis?.document ? u.useLayoutEffect : () => {},
        K = a['useId'.toString()] || (() => void 0),
        U = 0;
      function $(e) {
        let [t, n] = u.useState(K());
        return (
          W(() => {
            e || n((e) => e ?? String(U++));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
      var B = n(94674),
        z = n(55497),
        Y = n(20151),
        X = u.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...u } = e;
          return (0, l.jsx)(b.svg, {
            ...u,
            ref: t,
            width: r,
            height: o,
            viewBox: '0 0 30 10',
            preserveAspectRatio: 'none',
            children: e.asChild
              ? n
              : (0, l.jsx)('polygon', { points: '0,0 30,0 15,10' })
          });
        });
      X.displayName = 'Arrow';
      var H = 'Popper',
        [G, Z] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => u.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return u.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = u.createContext(r),
                  a = n.length;
                function i(t) {
                  let { scope: n, children: r, ...i } = t,
                    s = n?.[e][a] || o,
                    c = u.useMemo(() => i, Object.values(i));
                  return (0, l.jsx)(s.Provider, { value: c, children: r });
                }
                return (
                  (n = [...n, r]),
                  (i.displayName = t + 'Provider'),
                  [
                    i,
                    function (n, i) {
                      let l = i?.[e][a] || o,
                        s = u.useContext(l);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    }
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return u.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t)
            ]
          );
        })(H),
        [V, q] = G(H),
        J = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = u.useState(null);
          return (0, l.jsx)(V, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          });
        };
      J.displayName = H;
      var Q = 'PopperAnchor',
        ee = u.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            a = q(Q, n),
            i = u.useRef(null),
            s = h(t, i);
          return (
            u.useEffect(() => {
              a.onAnchorChange((null == r ? void 0 : r.current) || i.current);
            }),
            r ? null : (0, l.jsx)(b.div, { ...o, ref: s })
          );
        });
      ee.displayName = Q;
      var et = 'PopperContent',
        [en, er] = G(et),
        eo = u.forwardRef((e, t) => {
          var n, r, o, a, i, s, c, d;
          let {
              __scopePopper: f,
              side: p = 'bottom',
              sideOffset: v = 0,
              align: m = 'center',
              alignOffset: g = 0,
              arrowPadding: y = 0,
              avoidCollisions: w = !0,
              collisionBoundary: E = [],
              collisionPadding: C = 0,
              sticky: N = 'partial',
              hideWhenDetached: R = !1,
              updatePositionStrategy: M = 'optimized',
              onPlaced: P,
              ...S
            } = e,
            D = q(et, f),
            [j, T] = u.useState(null),
            L = h(t, (e) => T(e)),
            [O, _] = u.useState(null),
            k = (function (e) {
              let [t, n] = u.useState(void 0);
              return (
                W(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let u = t[0];
                      if ('borderBoxSize' in u) {
                        let e = u.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: 'border-box' }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(O),
            I =
              null !== (c = null == k ? void 0 : k.width) && void 0 !== c
                ? c
                : 0,
            A =
              null !== (d = null == k ? void 0 : k.height) && void 0 !== d
                ? d
                : 0,
            F =
              'number' == typeof C
                ? C
                : { top: 0, right: 0, bottom: 0, left: 0, ...C },
            K = Array.isArray(E) ? E : [E],
            U = K.length > 0,
            $ = { padding: F, boundary: K.filter(el), altBoundary: U },
            {
              refs: X,
              floatingStyles: H,
              placement: G,
              isPositioned: Z,
              middlewareData: V
            } = (0, B.YF)({
              strategy: 'fixed',
              placement: p + ('center' !== m ? '-' + m : ''),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (0, z.Me)(...t, { animationFrame: 'always' === M });
              },
              elements: { reference: D.anchor },
              middleware: [
                (0, Y.cv)({ mainAxis: v + A, alignmentAxis: g }),
                w &&
                  (0, Y.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === N ? (0, Y.dr)() : void 0,
                    ...$
                  }),
                w && (0, Y.RR)({ ...$ }),
                (0, Y.dp)({
                  ...$,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o
                      } = e,
                      { width: u, height: a } = n.reference,
                      i = t.floating.style;
                    i.setProperty(
                      '--radix-popper-available-width',
                      ''.concat(r, 'px')
                    ),
                      i.setProperty(
                        '--radix-popper-available-height',
                        ''.concat(o, 'px')
                      ),
                      i.setProperty(
                        '--radix-popper-anchor-width',
                        ''.concat(u, 'px')
                      ),
                      i.setProperty(
                        '--radix-popper-anchor-height',
                        ''.concat(a, 'px')
                      );
                  }
                }),
                O && (0, B.x7)({ element: O, padding: y }),
                es({ arrowWidth: I, arrowHeight: A }),
                R && (0, Y.Cp)({ strategy: 'referenceHidden', ...$ })
              ]
            }),
            [J, Q] = ec(G),
            ee = x(P);
          W(() => {
            Z && (null == ee || ee());
          }, [Z, ee]);
          let er = null === (n = V.arrow) || void 0 === n ? void 0 : n.x,
            eo = null === (r = V.arrow) || void 0 === r ? void 0 : r.y,
            eu =
              (null === (o = V.arrow) || void 0 === o
                ? void 0
                : o.centerOffset) !== 0,
            [ea, ei] = u.useState();
          return (
            W(() => {
              j && ei(window.getComputedStyle(j).zIndex);
            }, [j]),
            (0, l.jsx)('div', {
              ref: X.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...H,
                transform: Z ? H.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: ea,
                '--radix-popper-transform-origin': [
                  null === (a = V.transformOrigin) || void 0 === a
                    ? void 0
                    : a.x,
                  null === (i = V.transformOrigin) || void 0 === i
                    ? void 0
                    : i.y
                ].join(' '),
                ...((null === (s = V.hide) || void 0 === s
                  ? void 0
                  : s.referenceHidden) && {
                  visibility: 'hidden',
                  pointerEvents: 'none'
                })
              },
              dir: e.dir,
              children: (0, l.jsx)(en, {
                scope: f,
                placedSide: J,
                onArrowChange: _,
                arrowX: er,
                arrowY: eo,
                shouldHideArrow: eu,
                children: (0, l.jsx)(b.div, {
                  'data-side': J,
                  'data-align': Q,
                  ...S,
                  ref: L,
                  style: { ...S.style, animation: Z ? void 0 : 'none' }
                })
              })
            })
          );
        });
      eo.displayName = et;
      var eu = 'PopperArrow',
        ea = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
        ei = u.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = er(eu, n),
            u = ea[o.placedSide];
          return (0, l.jsx)('span', {
            ref: o.onArrowChange,
            style: {
              position: 'absolute',
              left: o.arrowX,
              top: o.arrowY,
              [u]: 0,
              transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0'
              }[o.placedSide],
              transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: 'rotate(180deg)',
                left: 'translateY(50%) rotate(-90deg) translateX(50%)'
              }[o.placedSide],
              visibility: o.shouldHideArrow ? 'hidden' : void 0
            },
            children: (0, l.jsx)(X, {
              ...r,
              ref: t,
              style: { ...r.style, display: 'block' }
            })
          });
        });
      function el(e) {
        return null !== e;
      }
      ei.displayName = eu;
      var es = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          var n, r, o, u, a;
          let { placement: i, rects: l, middlewareData: s } = t,
            c =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, v] = ec(i),
            m = { start: '0%', center: '50%', end: '100%' }[v],
            h =
              (null !==
                (u = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== u
                ? u
                : 0) +
              d / 2,
            g =
              (null !==
                (a = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== a
                ? a
                : 0) +
              f / 2,
            y = '',
            w = '';
          return (
            'bottom' === p
              ? ((y = c ? m : ''.concat(h, 'px')), (w = ''.concat(-f, 'px')))
              : 'top' === p
              ? ((y = c ? m : ''.concat(h, 'px')),
                (w = ''.concat(l.floating.height + f, 'px')))
              : 'right' === p
              ? ((y = ''.concat(-f, 'px')), (w = c ? m : ''.concat(g, 'px')))
              : 'left' === p &&
                ((y = ''.concat(l.floating.width + f, 'px')),
                (w = c ? m : ''.concat(g, 'px'))),
            { data: { x: y, y: w } }
          );
        }
      });
      function ec(e) {
        let [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      var ed = u.forwardRef((e, t) => {
        var n, r;
        let { container: o, ...a } = e,
          [i, s] = u.useState(!1);
        W(() => s(!0), []);
        let c =
          o ||
          (i &&
            (null === (r = globalThis) || void 0 === r
              ? void 0
              : null === (n = r.document) || void 0 === n
              ? void 0
              : n.body));
        return c
          ? d.createPortal((0, l.jsx)(b.div, { ...a, ref: t }), c)
          : null;
      });
      ed.displayName = 'Portal';
      var ef = (e) => {
        var t, n;
        let r, o;
        let { present: a, children: i } = e,
          l = (function (e) {
            var t, n;
            let [r, o] = u.useState(),
              a = u.useRef({}),
              i = u.useRef(e),
              l = u.useRef('none'),
              [s, c] =
                ((t = e ? 'mounted' : 'unmounted'),
                (n = {
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
                u.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              u.useEffect(() => {
                let e = ep(a.current);
                l.current = 'mounted' === s ? e : 'none';
              }, [s]),
              W(() => {
                let t = a.current,
                  n = i.current;
                if (n !== e) {
                  let r = l.current,
                    o = ep(t);
                  e
                    ? c('MOUNT')
                    : 'none' === o ||
                      (null == t ? void 0 : t.display) === 'none'
                    ? c('UNMOUNT')
                    : n && r !== o
                    ? c('ANIMATION_OUT')
                    : c('UNMOUNT'),
                    (i.current = e);
                }
              }, [e, c]),
              W(() => {
                if (r) {
                  var e;
                  let t;
                  let n =
                      null !== (e = r.ownerDocument.defaultView) && void 0 !== e
                        ? e
                        : window,
                    o = (e) => {
                      let o = ep(a.current).includes(e.animationName);
                      if (
                        e.target === r &&
                        o &&
                        (c('ANIMATION_END'), !i.current)
                      ) {
                        let e = r.style.animationFillMode;
                        (r.style.animationFillMode = 'forwards'),
                          (t = n.setTimeout(() => {
                            'forwards' === r.style.animationFillMode &&
                              (r.style.animationFillMode = e);
                          }));
                      }
                    },
                    u = (e) => {
                      e.target === r && (l.current = ep(a.current));
                    };
                  return (
                    r.addEventListener('animationstart', u),
                    r.addEventListener('animationcancel', o),
                    r.addEventListener('animationend', o),
                    () => {
                      n.clearTimeout(t),
                        r.removeEventListener('animationstart', u),
                        r.removeEventListener('animationcancel', o),
                        r.removeEventListener('animationend', o);
                    }
                  );
                }
                c('ANIMATION_END');
              }, [r, c]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(s),
                ref: u.useCallback((e) => {
                  e && (a.current = getComputedStyle(e)), o(e);
                }, [])
              }
            );
          })(a),
          s =
            'function' == typeof i
              ? i({ present: l.isPresent })
              : u.Children.only(i),
          c = h(
            l.ref,
            (r =
              null === (t = Object.getOwnPropertyDescriptor(s.props, 'ref')) ||
              void 0 === t
                ? void 0
                : t.get) &&
              'isReactWarning' in r &&
              r.isReactWarning
              ? s.ref
              : (r =
                  null === (n = Object.getOwnPropertyDescriptor(s, 'ref')) ||
                  void 0 === n
                    ? void 0
                    : n.get) &&
                'isReactWarning' in r &&
                r.isReactWarning
              ? s.props.ref
              : s.props.ref || s.ref
          );
        return 'function' == typeof i || l.isPresent
          ? u.cloneElement(s, { ref: c })
          : null;
      };
      function ep(e) {
        return (null == e ? void 0 : e.animationName) || 'none';
      }
      ef.displayName = 'Presence';
      var ev = 'rovingFocusGroup.onEntryFocus',
        em = { bubbles: !1, cancelable: !0 },
        eh = 'RovingFocusGroup',
        [eg, ey, ew] = g(eh),
        [eb, eE] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => u.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return u.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = u.createContext(r),
                  a = n.length;
                function i(t) {
                  let { scope: n, children: r, ...i } = t,
                    s = n?.[e][a] || o,
                    c = u.useMemo(() => i, Object.values(i));
                  return (0, l.jsx)(s.Provider, { value: c, children: r });
                }
                return (
                  (n = [...n, r]),
                  (i.displayName = t + 'Provider'),
                  [
                    i,
                    function (n, i) {
                      let l = i?.[e][a] || o,
                        s = u.useContext(l);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    }
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return u.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t)
            ]
          );
        })(eh, [ew]),
        [ex, eC] = eb(eh),
        eN = u.forwardRef((e, t) =>
          (0, l.jsx)(eg.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, l.jsx)(eg.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, l.jsx)(eR, { ...e, ref: t })
            })
          })
        );
      eN.displayName = eh;
      var eR = u.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: r,
              loop: o = !1,
              dir: a,
              currentTabStopId: i,
              defaultCurrentTabStopId: s,
              onCurrentTabStopIdChange: c,
              onEntryFocus: d,
              preventScrollOnEntryFocus: f = !1,
              ...p
            } = e,
            m = u.useRef(null),
            g = h(t, m),
            y = w(a),
            [E = null, C] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {}
            }) {
              let [r, o] = (function ({ defaultProp: e, onChange: t }) {
                  let n = u.useState(e),
                    [r] = n,
                    o = u.useRef(r),
                    a = x(t);
                  return (
                    u.useEffect(() => {
                      o.current !== r && (a(r), (o.current = r));
                    }, [r, o, a]),
                    n
                  );
                })({ defaultProp: t, onChange: n }),
                a = void 0 !== e,
                i = a ? e : r,
                l = x(n);
              return [
                i,
                u.useCallback(
                  (t) => {
                    if (a) {
                      let n = 'function' == typeof t ? t(e) : t;
                      n !== e && l(n);
                    } else o(t);
                  },
                  [a, e, o, l]
                )
              ];
            })({ prop: i, defaultProp: s, onChange: c }),
            [N, R] = u.useState(!1),
            M = x(d),
            P = ey(n),
            S = u.useRef(!1),
            [D, j] = u.useState(0);
          return (
            u.useEffect(() => {
              let e = m.current;
              if (e)
                return (
                  e.addEventListener(ev, M), () => e.removeEventListener(ev, M)
                );
            }, [M]),
            (0, l.jsx)(ex, {
              scope: n,
              orientation: r,
              dir: y,
              loop: o,
              currentTabStopId: E,
              onItemFocus: u.useCallback((e) => C(e), [C]),
              onItemShiftTab: u.useCallback(() => R(!0), []),
              onFocusableItemAdd: u.useCallback(() => j((e) => e + 1), []),
              onFocusableItemRemove: u.useCallback(() => j((e) => e - 1), []),
              children: (0, l.jsx)(b.div, {
                tabIndex: N || 0 === D ? -1 : 0,
                'data-orientation': r,
                ...p,
                ref: g,
                style: { outline: 'none', ...e.style },
                onMouseDown: v(e.onMouseDown, () => {
                  S.current = !0;
                }),
                onFocus: v(e.onFocus, (e) => {
                  let t = !S.current;
                  if (e.target === e.currentTarget && t && !N) {
                    let t = new CustomEvent(ev, em);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = P().filter((e) => e.focusable);
                      eD(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === E),
                          ...e
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        f
                      );
                    }
                  }
                  S.current = !1;
                }),
                onBlur: v(e.onBlur, () => R(!1))
              })
            })
          );
        }),
        eM = 'RovingFocusGroupItem',
        eP = u.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: r = !0,
              active: o = !1,
              tabStopId: a,
              ...i
            } = e,
            s = $(),
            c = a || s,
            d = eC(eM, n),
            f = d.currentTabStopId === c,
            p = ey(n),
            { onFocusableItemAdd: m, onFocusableItemRemove: h } = d;
          return (
            u.useEffect(() => {
              if (r) return m(), () => h();
            }, [r, m, h]),
            (0, l.jsx)(eg.ItemSlot, {
              scope: n,
              id: c,
              focusable: r,
              active: o,
              children: (0, l.jsx)(b.span, {
                tabIndex: f ? 0 : -1,
                'data-orientation': d.orientation,
                ...i,
                ref: t,
                onMouseDown: v(e.onMouseDown, (e) => {
                  r ? d.onItemFocus(c) : e.preventDefault();
                }),
                onFocus: v(e.onFocus, () => d.onItemFocus(c)),
                onKeyDown: v(e.onKeyDown, (e) => {
                  if ('Tab' === e.key && e.shiftKey) {
                    d.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, n) {
                    var r;
                    let o =
                      ((r = e.key),
                      'rtl' !== n
                        ? r
                        : 'ArrowLeft' === r
                        ? 'ArrowRight'
                        : 'ArrowRight' === r
                        ? 'ArrowLeft'
                        : r);
                    if (
                      !(
                        'vertical' === t &&
                        ['ArrowLeft', 'ArrowRight'].includes(o)
                      ) &&
                      !(
                        'horizontal' === t &&
                        ['ArrowUp', 'ArrowDown'].includes(o)
                      )
                    )
                      return eS[o];
                  })(e, d.orientation, d.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let o = p()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ('last' === t) o.reverse();
                    else if ('prev' === t || 'next' === t) {
                      var n, r;
                      'prev' === t && o.reverse();
                      let u = o.indexOf(e.currentTarget);
                      o = d.loop
                        ? ((n = o),
                          (r = u + 1),
                          n.map((e, t) => n[(r + t) % n.length]))
                        : o.slice(u + 1);
                    }
                    setTimeout(() => eD(o));
                  }
                })
              })
            })
          );
        });
      eP.displayName = eM;
      var eS = {
        ArrowLeft: 'prev',
        ArrowUp: 'prev',
        ArrowRight: 'next',
        ArrowDown: 'next',
        PageUp: 'first',
        Home: 'first',
        PageDown: 'last',
        End: 'last'
      };
      function eD(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = document.activeElement;
        for (let r of e)
          if (
            r === n ||
            (r.focus({ preventScroll: t }), document.activeElement !== n)
          )
            return;
      }
      var ej = n(78369),
        eT = n(11735),
        eL = n(91584),
        eO = n(28215),
        e_ = (0, n(15411)._)(),
        ek = function () {},
        eI = u.forwardRef(function (e, t) {
          var n = u.useRef(null),
            r = u.useState({
              onScrollCapture: ek,
              onWheelCapture: ek,
              onTouchMoveCapture: ek
            }),
            o = r[0],
            a = r[1],
            i = e.forwardProps,
            l = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            v = e.noIsolation,
            m = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            y = e.gapMode,
            w = (0, eT._T)(e, [
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
              'as',
              'gapMode'
            ]),
            b = (0, eO.q)([n, t]),
            E = (0, eT.pi)((0, eT.pi)({}, w), o);
          return u.createElement(
            u.Fragment,
            null,
            d &&
              u.createElement(p, {
                sideCar: e_,
                removeScrollBar: c,
                shards: f,
                noIsolation: v,
                inert: m,
                setCallbacks: a,
                allowPinchZoom: !!h,
                lockRef: n,
                gapMode: y
              }),
            i
              ? u.cloneElement(
                  u.Children.only(l),
                  (0, eT.pi)((0, eT.pi)({}, E), { ref: b })
                )
              : u.createElement(
                  void 0 === g ? 'div' : g,
                  (0, eT.pi)({}, E, { className: s, ref: b }),
                  l
                )
          );
        });
      (eI.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (eI.classNames = { fullWidth: eL.zi, zeroRight: eL.pF });
      var eA = n(48776),
        eF = n(65973),
        eW = n(18039),
        eK = !1;
      if ('undefined' != typeof window)
        try {
          var eU = Object.defineProperty({}, 'passive', {
            get: function () {
              return (eK = !0), !0;
            }
          });
          window.addEventListener('test', eU, eU),
            window.removeEventListener('test', eU, eU);
        } catch (e) {
          eK = !1;
        }
      var e$ = !!eK && { passive: !1 },
        eB = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            'hidden' !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              'TEXTAREA' !== e.tagName &&
              'visible' === n[t]
            )
          );
        },
        ez = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              eY(e, r))
            ) {
              var o = eX(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        eY = function (e, t) {
          return 'v' === e ? eB(t, 'overflowY') : eB(t, 'overflowX');
        },
        eX = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        eH = function (e, t, n, r, o) {
          var u,
            a =
              ((u = window.getComputedStyle(t).direction),
              'h' === e && 'rtl' === u ? -1 : 1),
            i = a * r,
            l = n.target,
            s = t.contains(l),
            c = !1,
            d = i > 0,
            f = 0,
            p = 0;
          do {
            var v = eX(e, l),
              m = v[0],
              h = v[1] - v[2] - a * m;
            (m || h) && eY(e, l) && ((f += h), (p += m)),
              l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
          } while (
            (!s && l !== document.body) ||
            (s && (t.contains(l) || t === l))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && i > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -i > p)) && (c = !0),
            c
          );
        },
        eG = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        eZ = function (e) {
          return [e.deltaX, e.deltaY];
        },
        eV = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        eq = 0,
        eJ = [],
        eQ = (0, eA.L)(e_, function (e) {
          var t = u.useRef([]),
            n = u.useRef([0, 0]),
            r = u.useRef(),
            o = u.useState(eq++)[0],
            a = u.useState(eW.Ws)[0],
            i = u.useRef(e);
          u.useEffect(
            function () {
              i.current = e;
            },
            [e]
          ),
            u.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add('block-interactivity-'.concat(o));
                  var t = (0, eT.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(eV),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add('allow-interactivity-'.concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        'block-interactivity-'.concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            'allow-interactivity-'.concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = u.useCallback(function (e, t) {
              if (
                ('touches' in e && 2 === e.touches.length) ||
                ('wheel' === e.type && e.ctrlKey)
              )
                return !i.current.allowPinchZoom;
              var o,
                u = eG(e),
                a = n.current,
                l = 'deltaX' in e ? e.deltaX : a[0] - u[0],
                s = 'deltaY' in e ? e.deltaY : a[1] - u[1],
                c = e.target,
                d = Math.abs(l) > Math.abs(s) ? 'h' : 'v';
              if ('touches' in e && 'h' === d && 'range' === c.type) return !1;
              var f = ez(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = 'v' === d ? 'h' : 'v'), (f = ez(d, c))),
                !f)
              )
                return !1;
              if (
                (!r.current &&
                  'changedTouches' in e &&
                  (l || s) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return eH(p, t, e, 'h' === p ? l : s, !0);
            }, []),
            s = u.useCallback(function (e) {
              if (eJ.length && eJ[eJ.length - 1] === a) {
                var n = 'deltaY' in e ? eZ(e) : eG(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (i.current.shards || [])
                    .map(eV)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? l(e, o[0]) : !i.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = u.useCallback(function (e, n, r, o) {
              var u = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r)
              };
              t.current.push(u),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== u;
                  });
                }, 1);
            }, []),
            d = u.useCallback(function (e) {
              (n.current = eG(e)), (r.current = void 0);
            }, []),
            f = u.useCallback(function (t) {
              c(t.type, eZ(t), t.target, l(t, e.lockRef.current));
            }, []),
            p = u.useCallback(function (t) {
              c(t.type, eG(t), t.target, l(t, e.lockRef.current));
            }, []);
          u.useEffect(function () {
            return (
              eJ.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p
              }),
              document.addEventListener('wheel', s, e$),
              document.addEventListener('touchmove', s, e$),
              document.addEventListener('touchstart', d, e$),
              function () {
                (eJ = eJ.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener('wheel', s, e$),
                  document.removeEventListener('touchmove', s, e$),
                  document.removeEventListener('touchstart', d, e$);
              }
            );
          }, []);
          var v = e.removeScrollBar,
            m = e.inert;
          return u.createElement(
            u.Fragment,
            null,
            m
              ? u.createElement(a, {
                  styles: '\n  .block-interactivity-'
                    .concat(
                      o,
                      ' {pointer-events: none;}\n  .allow-interactivity-'
                    )
                    .concat(o, ' {pointer-events: all;}\n')
                })
              : null,
            v ? u.createElement(eF.jp, { gapMode: e.gapMode }) : null
          );
        }),
        e0 = u.forwardRef(function (e, t) {
          return u.createElement(
            eI,
            (0, eT.pi)({}, e, { ref: t, sideCar: eQ })
          );
        });
      e0.classNames = eI.classNames;
      var e1 = ['Enter', ' '],
        e2 = ['ArrowUp', 'PageDown', 'End'],
        e5 = ['ArrowDown', 'PageUp', 'Home', ...e2],
        e7 = { ltr: [...e1, 'ArrowRight'], rtl: [...e1, 'ArrowLeft'] },
        e3 = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
        e4 = 'Menu',
        [e8, e6, e9] = g(e4),
        [te, tt] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => u.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return u.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = u.createContext(r),
                  a = n.length;
                n = [...n, r];
                let i = (t) => {
                  let { scope: n, children: r, ...i } = t,
                    s = n?.[e]?.[a] || o,
                    c = u.useMemo(() => i, Object.values(i));
                  return (0, l.jsx)(s.Provider, { value: c, children: r });
                };
                return (
                  (i.displayName = t + 'Provider'),
                  [
                    i,
                    function (n, i) {
                      let l = i?.[e]?.[a] || o,
                        s = u.useContext(l);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    }
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return u.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t)
            ]
          );
        })(e4, [e9, Z, eE]),
        tn = Z(),
        tr = eE(),
        [to, tu] = te(e4),
        [ta, ti] = te(e4),
        tl = (e) => {
          let {
              __scopeMenu: t,
              open: n = !1,
              children: r,
              dir: o,
              onOpenChange: a,
              modal: i = !0
            } = e,
            s = tn(t),
            [c, d] = u.useState(null),
            f = u.useRef(!1),
            p = x(a),
            v = w(o);
          return (
            u.useEffect(() => {
              let e = () => {
                  (f.current = !0),
                    document.addEventListener('pointerdown', t, {
                      capture: !0,
                      once: !0
                    }),
                    document.addEventListener('pointermove', t, {
                      capture: !0,
                      once: !0
                    });
                },
                t = () => (f.current = !1);
              return (
                document.addEventListener('keydown', e, { capture: !0 }),
                () => {
                  document.removeEventListener('keydown', e, { capture: !0 }),
                    document.removeEventListener('pointerdown', t, {
                      capture: !0
                    }),
                    document.removeEventListener('pointermove', t, {
                      capture: !0
                    });
                }
              );
            }, []),
            (0, l.jsx)(J, {
              ...s,
              children: (0, l.jsx)(to, {
                scope: t,
                open: n,
                onOpenChange: p,
                content: c,
                onContentChange: d,
                children: (0, l.jsx)(ta, {
                  scope: t,
                  onClose: u.useCallback(() => p(!1), [p]),
                  isUsingKeyboardRef: f,
                  dir: v,
                  modal: i,
                  children: r
                })
              })
            })
          );
        };
      tl.displayName = e4;
      var ts = u.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e,
          o = tn(n);
        return (0, l.jsx)(ee, { ...o, ...r, ref: t });
      });
      ts.displayName = 'MenuAnchor';
      var tc = 'MenuPortal',
        [td, tf] = te(tc, { forceMount: void 0 }),
        tp = (e) => {
          let { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
            u = tu(tc, t);
          return (0, l.jsx)(td, {
            scope: t,
            forceMount: n,
            children: (0, l.jsx)(ef, {
              present: n || u.open,
              children: (0, l.jsx)(ed, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          });
        };
      tp.displayName = tc;
      var tv = 'MenuContent',
        [tm, th] = te(tv),
        tg = u.forwardRef((e, t) => {
          let n = tf(tv, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...o } = e,
            u = tu(tv, e.__scopeMenu),
            a = ti(tv, e.__scopeMenu);
          return (0, l.jsx)(e8.Provider, {
            scope: e.__scopeMenu,
            children: (0, l.jsx)(ef, {
              present: r || u.open,
              children: (0, l.jsx)(e8.Slot, {
                scope: e.__scopeMenu,
                children: a.modal
                  ? (0, l.jsx)(ty, { ...o, ref: t })
                  : (0, l.jsx)(tw, { ...o, ref: t })
              })
            })
          });
        }),
        ty = u.forwardRef((e, t) => {
          let n = tu(tv, e.__scopeMenu),
            r = u.useRef(null),
            o = h(t, r);
          return (
            u.useEffect(() => {
              let e = r.current;
              if (e) return (0, ej.Ry)(e);
            }, []),
            (0, l.jsx)(tb, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: n.open,
              disableOutsideScroll: !0,
              onFocusOutside: v(e.onFocusOutside, (e) => e.preventDefault(), {
                checkForDefaultPrevented: !1
              }),
              onDismiss: () => n.onOpenChange(!1)
            })
          );
        }),
        tw = u.forwardRef((e, t) => {
          let n = tu(tv, e.__scopeMenu);
          return (0, l.jsx)(tb, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1)
          });
        }),
        tb = u.forwardRef((e, t) => {
          let {
              __scopeMenu: n,
              loop: r = !1,
              trapFocus: o,
              onOpenAutoFocus: a,
              onCloseAutoFocus: i,
              disableOutsidePointerEvents: s,
              onEntryFocus: c,
              onEscapeKeyDown: d,
              onPointerDownOutside: p,
              onFocusOutside: m,
              onInteractOutside: g,
              onDismiss: y,
              disableOutsideScroll: w,
              ...b
            } = e,
            E = tu(tv, n),
            x = ti(tv, n),
            C = tn(n),
            N = tr(n),
            M = e6(n),
            [P, j] = u.useState(null),
            T = u.useRef(null),
            L = h(t, T, E.onContentChange),
            _ = u.useRef(0),
            k = u.useRef(''),
            I = u.useRef(0),
            A = u.useRef(null),
            F = u.useRef('right'),
            W = u.useRef(0),
            K = w ? e0 : u.Fragment,
            U = w ? { as: f.g7, allowPinchZoom: !0 } : void 0,
            $ = (e) => {
              var t, n;
              let r = k.current + e,
                o = M().filter((e) => !e.disabled),
                u = document.activeElement,
                a =
                  null === (t = o.find((e) => e.ref.current === u)) ||
                  void 0 === t
                    ? void 0
                    : t.textValue,
                i = (function (e, t, n) {
                  var r;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0])
                        ? t[0]
                        : t,
                    u =
                      ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
                      e.map((t, n) => e[(r + n) % e.length]));
                  1 === o.length && (u = u.filter((e) => e !== n));
                  let a = u.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase())
                  );
                  return a !== n ? a : void 0;
                })(
                  o.map((e) => e.textValue),
                  r,
                  a
                ),
                l =
                  null === (n = o.find((e) => e.textValue === i)) ||
                  void 0 === n
                    ? void 0
                    : n.ref.current;
              !(function e(t) {
                (k.current = t),
                  window.clearTimeout(_.current),
                  '' !== t && (_.current = window.setTimeout(() => e(''), 1e3));
              })(r),
                l && setTimeout(() => l.focus());
            };
          u.useEffect(() => () => window.clearTimeout(_.current), []),
            u.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll('[data-radix-focus-guard]');
              return (
                document.body.insertAdjacentElement(
                  'afterbegin',
                  null !== (e = n[0]) && void 0 !== e ? e : D()
                ),
                document.body.insertAdjacentElement(
                  'beforeend',
                  null !== (t = n[1]) && void 0 !== t ? t : D()
                ),
                S++,
                () => {
                  1 === S &&
                    document
                      .querySelectorAll('[data-radix-focus-guard]')
                      .forEach((e) => e.remove()),
                    S--;
                }
              );
            }, []);
          let B = u.useCallback((e) => {
            var t, n, r;
            return (
              F.current ===
                (null === (t = A.current) || void 0 === t ? void 0 : t.side) &&
              !!(r =
                null === (n = A.current) || void 0 === n ? void 0 : n.area) &&
              (function (e, t) {
                let { x: n, y: r } = e,
                  o = !1;
                for (let e = 0, u = t.length - 1; e < t.length; u = e++) {
                  let a = t[e].x,
                    i = t[e].y,
                    l = t[u].x,
                    s = t[u].y;
                  i > r != s > r &&
                    n < ((l - a) * (r - i)) / (s - i) + a &&
                    (o = !o);
                }
                return o;
              })({ x: e.clientX, y: e.clientY }, r)
            );
          }, []);
          return (0, l.jsx)(tm, {
            scope: n,
            searchRef: k,
            onItemEnter: u.useCallback(
              (e) => {
                B(e) && e.preventDefault();
              },
              [B]
            ),
            onItemLeave: u.useCallback(
              (e) => {
                var t;
                B(e) ||
                  (null === (t = T.current) || void 0 === t || t.focus(),
                  j(null));
              },
              [B]
            ),
            onTriggerLeave: u.useCallback(
              (e) => {
                B(e) && e.preventDefault();
              },
              [B]
            ),
            pointerGraceTimerRef: I,
            onPointerGraceIntentChange: u.useCallback((e) => {
              A.current = e;
            }, []),
            children: (0, l.jsx)(K, {
              ...U,
              children: (0, l.jsx)(O, {
                asChild: !0,
                trapped: o,
                onMountAutoFocus: v(a, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = T.current) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 });
                }),
                onUnmountAutoFocus: i,
                children: (0, l.jsx)(R, {
                  asChild: !0,
                  disableOutsidePointerEvents: s,
                  onEscapeKeyDown: d,
                  onPointerDownOutside: p,
                  onFocusOutside: m,
                  onInteractOutside: g,
                  onDismiss: y,
                  children: (0, l.jsx)(eN, {
                    asChild: !0,
                    ...N,
                    dir: x.dir,
                    orientation: 'vertical',
                    loop: r,
                    currentTabStopId: P,
                    onCurrentTabStopIdChange: j,
                    onEntryFocus: v(c, (e) => {
                      x.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, l.jsx)(eo, {
                      role: 'menu',
                      'aria-orientation': 'vertical',
                      'data-state': tG(E.open),
                      'data-radix-menu-content': '',
                      dir: x.dir,
                      ...C,
                      ...b,
                      ref: L,
                      style: { outline: 'none', ...b.style },
                      onKeyDown: v(b.onKeyDown, (e) => {
                        let t =
                            e.target.closest('[data-radix-menu-content]') ===
                            e.currentTarget,
                          n = e.ctrlKey || e.altKey || e.metaKey,
                          r = 1 === e.key.length;
                        t &&
                          ('Tab' === e.key && e.preventDefault(),
                          !n && r && $(e.key));
                        let o = T.current;
                        if (e.target !== o || !e5.includes(e.key)) return;
                        e.preventDefault();
                        let u = M()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        e2.includes(e.key) && u.reverse(),
                          (function (e) {
                            let t = document.activeElement;
                            for (let n of e)
                              if (
                                n === t ||
                                (n.focus(), document.activeElement !== t)
                              )
                                return;
                          })(u);
                      }),
                      onBlur: v(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(_.current), (k.current = ''));
                      }),
                      onPointerMove: v(
                        e.onPointerMove,
                        tq((e) => {
                          let t = e.target,
                            n = W.current !== e.clientX;
                          if (e.currentTarget.contains(t) && n) {
                            let t = e.clientX > W.current ? 'right' : 'left';
                            (F.current = t), (W.current = e.clientX);
                          }
                        })
                      )
                    })
                  })
                })
              })
            })
          });
        });
      tg.displayName = tv;
      var tE = u.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, l.jsx)(b.div, { role: 'group', ...r, ref: t });
      });
      tE.displayName = 'MenuGroup';
      var tx = u.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, l.jsx)(b.div, { ...r, ref: t });
      });
      tx.displayName = 'MenuLabel';
      var tC = 'MenuItem',
        tN = 'menu.itemSelect',
        tR = u.forwardRef((e, t) => {
          let { disabled: n = !1, onSelect: r, ...o } = e,
            a = u.useRef(null),
            i = ti(tC, e.__scopeMenu),
            s = th(tC, e.__scopeMenu),
            c = h(t, a),
            d = u.useRef(!1);
          return (0, l.jsx)(tM, {
            ...o,
            ref: c,
            disabled: n,
            onClick: v(e.onClick, () => {
              let e = a.current;
              if (!n && e) {
                let t = new CustomEvent(tN, { bubbles: !0, cancelable: !0 });
                e.addEventListener(tN, (e) => (null == r ? void 0 : r(e)), {
                  once: !0
                }),
                  E(e, t),
                  t.defaultPrevented ? (d.current = !1) : i.onClose();
              }
            }),
            onPointerDown: (t) => {
              var n;
              null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                (d.current = !0);
            },
            onPointerUp: v(e.onPointerUp, (e) => {
              var t;
              d.current ||
                null === (t = e.currentTarget) ||
                void 0 === t ||
                t.click();
            }),
            onKeyDown: v(e.onKeyDown, (e) => {
              let t = '' !== s.searchRef.current;
              !n &&
                (!t || ' ' !== e.key) &&
                e1.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault());
            })
          });
        });
      tR.displayName = tC;
      var tM = u.forwardRef((e, t) => {
          let { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e,
            i = th(tC, n),
            s = tr(n),
            c = u.useRef(null),
            d = h(t, c),
            [f, p] = u.useState(!1),
            [m, g] = u.useState('');
          return (
            u.useEffect(() => {
              let e = c.current;
              if (e) {
                var t;
                g(
                  (null !== (t = e.textContent) && void 0 !== t ? t : '').trim()
                );
              }
            }, [a.children]),
            (0, l.jsx)(e8.ItemSlot, {
              scope: n,
              disabled: r,
              textValue: null != o ? o : m,
              children: (0, l.jsx)(eP, {
                asChild: !0,
                ...s,
                focusable: !r,
                children: (0, l.jsx)(b.div, {
                  role: 'menuitem',
                  'data-highlighted': f ? '' : void 0,
                  'aria-disabled': r || void 0,
                  'data-disabled': r ? '' : void 0,
                  ...a,
                  ref: d,
                  onPointerMove: v(
                    e.onPointerMove,
                    tq((e) => {
                      r
                        ? i.onItemLeave(e)
                        : (i.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }));
                    })
                  ),
                  onPointerLeave: v(
                    e.onPointerLeave,
                    tq((e) => i.onItemLeave(e))
                  ),
                  onFocus: v(e.onFocus, () => p(!0)),
                  onBlur: v(e.onBlur, () => p(!1))
                })
              })
            })
          );
        }),
        tP = u.forwardRef((e, t) => {
          let { checked: n = !1, onCheckedChange: r, ...o } = e;
          return (0, l.jsx)(tk, {
            scope: e.__scopeMenu,
            checked: n,
            children: (0, l.jsx)(tR, {
              role: 'menuitemcheckbox',
              'aria-checked': tZ(n) ? 'mixed' : n,
              ...o,
              ref: t,
              'data-state': tV(n),
              onSelect: v(
                o.onSelect,
                () => (null == r ? void 0 : r(!!tZ(n) || !n)),
                { checkForDefaultPrevented: !1 }
              )
            })
          });
        });
      tP.displayName = 'MenuCheckboxItem';
      var tS = 'MenuRadioGroup',
        [tD, tj] = te(tS, { value: void 0, onValueChange: () => {} }),
        tT = u.forwardRef((e, t) => {
          let { value: n, onValueChange: r, ...o } = e,
            u = x(r);
          return (0, l.jsx)(tD, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: u,
            children: (0, l.jsx)(tE, { ...o, ref: t })
          });
        });
      tT.displayName = tS;
      var tL = 'MenuRadioItem',
        tO = u.forwardRef((e, t) => {
          let { value: n, ...r } = e,
            o = tj(tL, e.__scopeMenu),
            u = n === o.value;
          return (0, l.jsx)(tk, {
            scope: e.__scopeMenu,
            checked: u,
            children: (0, l.jsx)(tR, {
              role: 'menuitemradio',
              'aria-checked': u,
              ...r,
              ref: t,
              'data-state': tV(u),
              onSelect: v(
                r.onSelect,
                () => {
                  var e;
                  return null === (e = o.onValueChange) || void 0 === e
                    ? void 0
                    : e.call(o, n);
                },
                { checkForDefaultPrevented: !1 }
              )
            })
          });
        });
      tO.displayName = tL;
      var t_ = 'MenuItemIndicator',
        [tk, tI] = te(t_, { checked: !1 }),
        tA = u.forwardRef((e, t) => {
          let { __scopeMenu: n, forceMount: r, ...o } = e,
            u = tI(t_, n);
          return (0, l.jsx)(ef, {
            present: r || tZ(u.checked) || !0 === u.checked,
            children: (0, l.jsx)(b.span, {
              ...o,
              ref: t,
              'data-state': tV(u.checked)
            })
          });
        });
      tA.displayName = t_;
      var tF = u.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, l.jsx)(b.div, {
          role: 'separator',
          'aria-orientation': 'horizontal',
          ...r,
          ref: t
        });
      });
      tF.displayName = 'MenuSeparator';
      var tW = u.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e,
          o = tn(n);
        return (0, l.jsx)(ei, { ...o, ...r, ref: t });
      });
      tW.displayName = 'MenuArrow';
      var tK = 'MenuSub',
        [tU, t$] = te(tK),
        tB = (e) => {
          let {
              __scopeMenu: t,
              children: n,
              open: r = !1,
              onOpenChange: o
            } = e,
            a = tu(tK, t),
            i = tn(t),
            [s, c] = u.useState(null),
            [d, f] = u.useState(null),
            p = x(o);
          return (
            u.useEffect(
              () => (!1 === a.open && p(!1), () => p(!1)),
              [a.open, p]
            ),
            (0, l.jsx)(J, {
              ...i,
              children: (0, l.jsx)(to, {
                scope: t,
                open: r,
                onOpenChange: p,
                content: d,
                onContentChange: f,
                children: (0, l.jsx)(tU, {
                  scope: t,
                  contentId: $(),
                  triggerId: $(),
                  trigger: s,
                  onTriggerChange: c,
                  children: n
                })
              })
            })
          );
        };
      tB.displayName = tK;
      var tz = 'MenuSubTrigger',
        tY = u.forwardRef((e, t) => {
          let n = tu(tz, e.__scopeMenu),
            r = ti(tz, e.__scopeMenu),
            o = t$(tz, e.__scopeMenu),
            a = th(tz, e.__scopeMenu),
            i = u.useRef(null),
            { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a,
            d = { __scopeMenu: e.__scopeMenu },
            f = u.useCallback(() => {
              i.current && window.clearTimeout(i.current), (i.current = null);
            }, []);
          return (
            u.useEffect(() => f, [f]),
            u.useEffect(() => {
              let e = s.current;
              return () => {
                window.clearTimeout(e), c(null);
              };
            }, [s, c]),
            (0, l.jsx)(ts, {
              asChild: !0,
              ...d,
              children: (0, l.jsx)(tM, {
                id: o.triggerId,
                'aria-haspopup': 'menu',
                'aria-expanded': n.open,
                'aria-controls': o.contentId,
                'data-state': tG(n.open),
                ...e,
                ref: m(t, o.onTriggerChange),
                onClick: (t) => {
                  var r;
                  null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    e.disabled ||
                      t.defaultPrevented ||
                      (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
                },
                onPointerMove: v(
                  e.onPointerMove,
                  tq((t) => {
                    a.onItemEnter(t),
                      t.defaultPrevented ||
                        e.disabled ||
                        n.open ||
                        i.current ||
                        (a.onPointerGraceIntentChange(null),
                        (i.current = window.setTimeout(() => {
                          n.onOpenChange(!0), f();
                        }, 100)));
                  })
                ),
                onPointerLeave: v(
                  e.onPointerLeave,
                  tq((e) => {
                    var t, r;
                    f();
                    let o =
                      null === (t = n.content) || void 0 === t
                        ? void 0
                        : t.getBoundingClientRect();
                    if (o) {
                      let t =
                          null === (r = n.content) || void 0 === r
                            ? void 0
                            : r.dataset.side,
                        u = 'right' === t,
                        i = o[u ? 'left' : 'right'],
                        l = o[u ? 'right' : 'left'];
                      a.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (u ? -5 : 5), y: e.clientY },
                          { x: i, y: o.top },
                          { x: l, y: o.top },
                          { x: l, y: o.bottom },
                          { x: i, y: o.bottom }
                        ],
                        side: t
                      }),
                        window.clearTimeout(s.current),
                        (s.current = window.setTimeout(
                          () => a.onPointerGraceIntentChange(null),
                          300
                        ));
                    } else {
                      if ((a.onTriggerLeave(e), e.defaultPrevented)) return;
                      a.onPointerGraceIntentChange(null);
                    }
                  })
                ),
                onKeyDown: v(e.onKeyDown, (t) => {
                  let o = '' !== a.searchRef.current;
                  if (
                    !e.disabled &&
                    (!o || ' ' !== t.key) &&
                    e7[r.dir].includes(t.key)
                  ) {
                    var u;
                    n.onOpenChange(!0),
                      null === (u = n.content) || void 0 === u || u.focus(),
                      t.preventDefault();
                  }
                })
              })
            })
          );
        });
      tY.displayName = tz;
      var tX = 'MenuSubContent',
        tH = u.forwardRef((e, t) => {
          let n = tf(tv, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...o } = e,
            a = tu(tv, e.__scopeMenu),
            i = ti(tv, e.__scopeMenu),
            s = t$(tX, e.__scopeMenu),
            c = u.useRef(null),
            d = h(t, c);
          return (0, l.jsx)(e8.Provider, {
            scope: e.__scopeMenu,
            children: (0, l.jsx)(ef, {
              present: r || a.open,
              children: (0, l.jsx)(e8.Slot, {
                scope: e.__scopeMenu,
                children: (0, l.jsx)(tb, {
                  id: s.contentId,
                  'aria-labelledby': s.triggerId,
                  ...o,
                  ref: d,
                  align: 'start',
                  side: 'rtl' === i.dir ? 'left' : 'right',
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    var t;
                    i.isUsingKeyboardRef.current &&
                      (null === (t = c.current) || void 0 === t || t.focus()),
                      e.preventDefault();
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: v(e.onFocusOutside, (e) => {
                    e.target !== s.trigger && a.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: v(e.onEscapeKeyDown, (e) => {
                    i.onClose(), e.preventDefault();
                  }),
                  onKeyDown: v(e.onKeyDown, (e) => {
                    let t = e.currentTarget.contains(e.target),
                      n = e3[i.dir].includes(e.key);
                    if (t && n) {
                      var r;
                      a.onOpenChange(!1),
                        null === (r = s.trigger) || void 0 === r || r.focus(),
                        e.preventDefault();
                    }
                  })
                })
              })
            })
          });
        });
      function tG(e) {
        return e ? 'open' : 'closed';
      }
      function tZ(e) {
        return 'indeterminate' === e;
      }
      function tV(e) {
        return tZ(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
      }
      function tq(e) {
        return (t) => ('mouse' === t.pointerType ? e(t) : void 0);
      }
      tH.displayName = tX;
      var tJ = globalThis?.document ? u.useLayoutEffect : () => {},
        tQ = a['useId'.toString()] || (() => void 0),
        t0 = 0;
      function t1(e) {
        let [t, n] = u.useState(tQ());
        return (
          tJ(() => {
            e || n((e) => e ?? String(t0++));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
      var t2 = 'DropdownMenu',
        [t5, t7] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => u.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return u.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = u.createContext(r),
                  a = n.length;
                n = [...n, r];
                let i = (t) => {
                  let { scope: n, children: r, ...i } = t,
                    s = n?.[e]?.[a] || o,
                    c = u.useMemo(() => i, Object.values(i));
                  return (0, l.jsx)(s.Provider, { value: c, children: r });
                };
                return (
                  (i.displayName = t + 'Provider'),
                  [
                    i,
                    function (n, i) {
                      let l = i?.[e]?.[a] || o,
                        s = u.useContext(l);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    }
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return u.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t)
            ]
          );
        })(t2, [tt]),
        t3 = tt(),
        [t4, t8] = t5(t2),
        t6 = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              dir: r,
              open: o,
              defaultOpen: a,
              onOpenChange: i,
              modal: s = !0
            } = e,
            d = t3(t),
            f = u.useRef(null),
            [p = !1, v] = c({ prop: o, defaultProp: a, onChange: i });
          return (0, l.jsx)(t4, {
            scope: t,
            triggerId: t1(),
            triggerRef: f,
            contentId: t1(),
            open: p,
            onOpenChange: v,
            onOpenToggle: u.useCallback(() => v((e) => !e), [v]),
            modal: s,
            children: (0, l.jsx)(tl, {
              ...d,
              open: p,
              onOpenChange: v,
              dir: r,
              modal: s,
              children: n
            })
          });
        };
      t6.displayName = t2;
      var t9 = 'DropdownMenuTrigger',
        ne = u.forwardRef((e, t) => {
          let { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
            u = t8(t9, n),
            a = t3(n);
          return (0, l.jsx)(ts, {
            asChild: !0,
            ...a,
            children: (0, l.jsx)(p.button, {
              type: 'button',
              id: u.triggerId,
              'aria-haspopup': 'menu',
              'aria-expanded': u.open,
              'aria-controls': u.open ? u.contentId : void 0,
              'data-state': u.open ? 'open' : 'closed',
              'data-disabled': r ? '' : void 0,
              disabled: r,
              ...o,
              ref: (function (...e) {
                return (t) =>
                  e.forEach((e) => {
                    'function' == typeof e
                      ? e(t)
                      : null != e && (e.current = t);
                  });
              })(t, u.triggerRef),
              onPointerDown: i(e.onPointerDown, (e) => {
                r ||
                  0 !== e.button ||
                  !1 !== e.ctrlKey ||
                  (u.onOpenToggle(), u.open || e.preventDefault());
              }),
              onKeyDown: i(e.onKeyDown, (e) => {
                !r &&
                  (['Enter', ' '].includes(e.key) && u.onOpenToggle(),
                  'ArrowDown' === e.key && u.onOpenChange(!0),
                  ['Enter', ' ', 'ArrowDown'].includes(e.key) &&
                    e.preventDefault());
              })
            })
          });
        });
      ne.displayName = t9;
      var nt = (e) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          r = t3(t);
        return (0, l.jsx)(tp, { ...r, ...n });
      };
      nt.displayName = 'DropdownMenuPortal';
      var nn = 'DropdownMenuContent',
        nr = u.forwardRef((e, t) => {
          let { __scopeDropdownMenu: n, ...r } = e,
            o = t8(nn, n),
            a = t3(n),
            s = u.useRef(!1);
          return (0, l.jsx)(tg, {
            id: o.contentId,
            'aria-labelledby': o.triggerId,
            ...a,
            ...r,
            ref: t,
            onCloseAutoFocus: i(e.onCloseAutoFocus, (e) => {
              var t;
              s.current ||
                null === (t = o.triggerRef.current) ||
                void 0 === t ||
                t.focus(),
                (s.current = !1),
                e.preventDefault();
            }),
            onInteractOutside: i(e.onInteractOutside, (e) => {
              let t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey,
                r = 2 === t.button || n;
              (!o.modal || r) && (s.current = !0);
            }),
            style: {
              ...e.style,
              '--radix-dropdown-menu-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-dropdown-menu-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-dropdown-menu-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-dropdown-menu-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-dropdown-menu-trigger-height':
                'var(--radix-popper-anchor-height)'
            }
          });
        });
      nr.displayName = nn;
      var no = u.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = t3(n);
        return (0, l.jsx)(tE, { ...o, ...r, ref: t });
      });
      no.displayName = 'DropdownMenuGroup';
      var nu = u.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = t3(n);
        return (0, l.jsx)(tx, { ...o, ...r, ref: t });
      });
      nu.displayName = 'DropdownMenuLabel';
      var na = u.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = t3(n);
        return (0, l.jsx)(tR, { ...o, ...r, ref: t });
      });
      na.displayName = 'DropdownMenuItem';
      var ni = u.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = t3(n);
        return (0, l.jsx)(tP, { ...o, ...r, ref: t });
      });
      ni.displayName = 'DropdownMenuCheckboxItem';
      var nl = u.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = t3(n);
        return (0, l.jsx)(tT, { ...o, ...r, ref: t });
      });
      nl.displayName = 'DropdownMenuRadioGroup';
      var ns = u.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = t3(n);
        return (0, l.jsx)(tO, { ...o, ...r, ref: t });
      });
      ns.displayName = 'DropdownMenuRadioItem';
      var nc = u.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = t3(n);
        return (0, l.jsx)(tA, { ...o, ...r, ref: t });
      });
      nc.displayName = 'DropdownMenuItemIndicator';
      var nd = u.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = t3(n);
        return (0, l.jsx)(tF, { ...o, ...r, ref: t });
      });
      (nd.displayName = 'DropdownMenuSeparator'),
        (u.forwardRef((e, t) => {
          let { __scopeDropdownMenu: n, ...r } = e,
            o = t3(n);
          return (0, l.jsx)(tW, { ...o, ...r, ref: t });
        }).displayName = 'DropdownMenuArrow');
      var nf = u.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = t3(n);
        return (0, l.jsx)(tY, { ...o, ...r, ref: t });
      });
      nf.displayName = 'DropdownMenuSubTrigger';
      var np = u.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = t3(n);
        return (0, l.jsx)(tH, {
          ...o,
          ...r,
          ref: t,
          style: {
            ...e.style,
            '--radix-dropdown-menu-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-dropdown-menu-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-dropdown-menu-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-dropdown-menu-trigger-width':
              'var(--radix-popper-anchor-width)',
            '--radix-dropdown-menu-trigger-height':
              'var(--radix-popper-anchor-height)'
          }
        });
      });
      np.displayName = 'DropdownMenuSubContent';
      var nv = t6,
        nm = ne,
        nh = nt,
        ng = nr,
        ny = no,
        nw = nu,
        nb = na,
        nE = ni,
        nx = nl,
        nC = ns,
        nN = nc,
        nR = nd,
        nM = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              open: r,
              onOpenChange: o,
              defaultOpen: u
            } = e,
            a = t3(t),
            [i = !1, s] = c({ prop: r, defaultProp: u, onChange: o });
          return (0, l.jsx)(tB, {
            ...a,
            open: i,
            onOpenChange: s,
            children: n
          });
        },
        nP = nf,
        nS = np;
    }
  }
]);
