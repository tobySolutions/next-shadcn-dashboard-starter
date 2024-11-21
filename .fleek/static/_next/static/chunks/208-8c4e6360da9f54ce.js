'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [208],
  {
    9219: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        }
      });
      var n = r(11735),
        o = r(2265),
        l = r(91584),
        i = r(28215),
        a = (0, r(15411)._)(),
        u = function () {},
        c = o.forwardRef(function (e, t) {
          var r = o.useRef(null),
            l = o.useState({
              onScrollCapture: u,
              onWheelCapture: u,
              onTouchMoveCapture: u
            }),
            c = l[0],
            s = l[1],
            d = e.forwardProps,
            f = e.children,
            v = e.className,
            p = e.removeScrollBar,
            h = e.enabled,
            m = e.shards,
            w = e.sideCar,
            b = e.noIsolation,
            E = e.inert,
            g = e.allowPinchZoom,
            S = e.as,
            y = (0, n._T)(e, [
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
            C = (0, i.q)([r, t]),
            T = (0, n.pi)((0, n.pi)({}, y), c);
          return o.createElement(
            o.Fragment,
            null,
            h &&
              o.createElement(w, {
                sideCar: a,
                removeScrollBar: p,
                shards: m,
                noIsolation: b,
                inert: E,
                setCallbacks: s,
                allowPinchZoom: !!g,
                lockRef: r
              }),
            d
              ? o.cloneElement(
                  o.Children.only(f),
                  (0, n.pi)((0, n.pi)({}, T), { ref: C })
                )
              : o.createElement(
                  void 0 === S ? 'div' : S,
                  (0, n.pi)({}, T, { className: v, ref: C }),
                  f
                )
          );
        });
      (c.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (c.classNames = { fullWidth: l.zi, zeroRight: l.pF });
      var s = r(48776),
        d = r(65973),
        f = r(18039),
        v = !1;
      if ('undefined' != typeof window)
        try {
          var p = Object.defineProperty({}, 'passive', {
            get: function () {
              return (v = !0), !0;
            }
          });
          window.addEventListener('test', p, p),
            window.removeEventListener('test', p, p);
        } catch (e) {
          v = !1;
        }
      var h = !!v && { passive: !1 },
        m = function (e, t) {
          var r = window.getComputedStyle(e);
          return (
            'hidden' !== r[t] &&
            !(
              r.overflowY === r.overflowX &&
              'TEXTAREA' !== e.tagName &&
              'visible' === r[t]
            )
          );
        },
        w = function (e, t) {
          var r = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              b(e, r))
            ) {
              var n = E(e, r);
              if (n[1] > n[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== document.body);
          return !1;
        },
        b = function (e, t) {
          return 'v' === e ? m(t, 'overflowY') : m(t, 'overflowX');
        },
        E = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        g = function (e, t, r, n, o) {
          var l,
            i =
              ((l = window.getComputedStyle(t).direction),
              'h' === e && 'rtl' === l ? -1 : 1),
            a = i * n,
            u = r.target,
            c = t.contains(u),
            s = !1,
            d = a > 0,
            f = 0,
            v = 0;
          do {
            var p = E(e, u),
              h = p[0],
              m = p[1] - p[2] - i * h;
            (h || m) && b(e, u) && ((f += m), (v += h)), (u = u.parentNode);
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 0 === f) || (!o && a > f))
              ? (s = !0)
              : !d && ((o && 0 === v) || (!o && -a > v)) && (s = !0),
            s
          );
        },
        S = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        y = function (e) {
          return [e.deltaX, e.deltaY];
        },
        C = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        T = 0,
        R = [],
        N = (0, s.L)(a, function (e) {
          var t = o.useRef([]),
            r = o.useRef([0, 0]),
            l = o.useRef(),
            i = o.useState(T++)[0],
            a = o.useState(function () {
              return (0, f.Ws)();
            })[0],
            u = o.useRef(e);
          o.useEffect(
            function () {
              u.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add('block-interactivity-'.concat(i));
                  var t = (0, n.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(C),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add('allow-interactivity-'.concat(i));
                    }),
                    function () {
                      document.body.classList.remove(
                        'block-interactivity-'.concat(i)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            'allow-interactivity-'.concat(i)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var c = o.useCallback(function (e, t) {
              if ('touches' in e && 2 === e.touches.length)
                return !u.current.allowPinchZoom;
              var n,
                o = S(e),
                i = r.current,
                a = 'deltaX' in e ? e.deltaX : i[0] - o[0],
                c = 'deltaY' in e ? e.deltaY : i[1] - o[1],
                s = e.target,
                d = Math.abs(a) > Math.abs(c) ? 'h' : 'v';
              if ('touches' in e && 'h' === d && 'range' === s.type) return !1;
              var f = w(d, s);
              if (!f) return !0;
              if (
                (f ? (n = d) : ((n = 'v' === d ? 'h' : 'v'), (f = w(d, s))), !f)
              )
                return !1;
              if (
                (!l.current &&
                  'changedTouches' in e &&
                  (a || c) &&
                  (l.current = n),
                !n)
              )
                return !0;
              var v = l.current || n;
              return g(v, t, e, 'h' === v ? a : c, !0);
            }, []),
            s = o.useCallback(function (e) {
              if (R.length && R[R.length - 1] === a) {
                var r = 'deltaY' in e ? y(e) : S(e),
                  n = t.current.filter(function (t) {
                    var n;
                    return (
                      t.name === e.type &&
                      t.target === e.target &&
                      (n = t.delta)[0] === r[0] &&
                      n[1] === r[1]
                    );
                  })[0];
                if (n && n.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!n) {
                  var o = (u.current.shards || [])
                    .map(C)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? c(e, o[0]) : !u.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            v = o.useCallback(function (e, r, n, o) {
              var l = { name: e, delta: r, target: n, should: o };
              t.current.push(l),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== l;
                  });
                }, 1);
            }, []),
            p = o.useCallback(function (e) {
              (r.current = S(e)), (l.current = void 0);
            }, []),
            m = o.useCallback(function (t) {
              v(t.type, y(t), t.target, c(t, e.lockRef.current));
            }, []),
            b = o.useCallback(function (t) {
              v(t.type, S(t), t.target, c(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              R.push(a),
              e.setCallbacks({
                onScrollCapture: m,
                onWheelCapture: m,
                onTouchMoveCapture: b
              }),
              document.addEventListener('wheel', s, h),
              document.addEventListener('touchmove', s, h),
              document.addEventListener('touchstart', p, h),
              function () {
                (R = R.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener('wheel', s, h),
                  document.removeEventListener('touchmove', s, h),
                  document.removeEventListener('touchstart', p, h);
              }
            );
          }, []);
          var E = e.removeScrollBar,
            N = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            N
              ? o.createElement(a, {
                  styles: '\n  .block-interactivity-'
                    .concat(
                      i,
                      ' {pointer-events: none;}\n  .allow-interactivity-'
                    )
                    .concat(i, ' {pointer-events: all;}\n')
                })
              : null,
            E ? o.createElement(d.jp, { gapMode: 'margin' }) : null
          );
        }),
        P = o.forwardRef(function (e, t) {
          return o.createElement(c, (0, n.pi)({}, e, { ref: t, sideCar: N }));
        });
      P.classNames = c.classNames;
      var L = P;
    },
    22988: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
    },
    62361: function (e, t, r) {
      r.d(t, {
        u: function () {
          return n;
        }
      });
      function n(e, [t, r]) {
        return Math.min(r, Math.max(t, e));
      }
    },
    78149: function (e, t, r) {
      r.d(t, {
        M: function () {
          return n;
        }
      });
      function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((null == e || e(n), !1 === r || !n.defaultPrevented))
            return null == t ? void 0 : t(n);
        };
      }
    },
    1584: function (e, t, r) {
      r.d(t, {
        F: function () {
          return o;
        },
        e: function () {
          return l;
        }
      });
      var n = r(2265);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            'function' == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function l(...e) {
        return (0, n.useCallback)(o(...e), e);
      }
    },
    98324: function (e, t, r) {
      r.d(t, {
        b: function () {
          return l;
        },
        k: function () {
          return o;
        }
      });
      var n = r(2265);
      function o(e, t) {
        let r = (0, n.createContext)(t);
        function o(e) {
          let { children: t, ...o } = e,
            l = (0, n.useMemo)(() => o, Object.values(o));
          return (0, n.createElement)(r.Provider, { value: l }, t);
        }
        return (
          (o.displayName = e + 'Provider'),
          [
            o,
            function (o) {
              let l = (0, n.useContext)(r);
              if (l) return l;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            }
          ]
        );
      }
      function l(e, t = []) {
        let r = [],
          o = () => {
            let t = r.map((e) => (0, n.createContext)(e));
            return function (r) {
              let o = (null == r ? void 0 : r[e]) || t;
              return (0, n.useMemo)(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let l = (0, n.createContext)(o),
                i = r.length;
              function a(t) {
                let { scope: r, children: o, ...a } = t,
                  u = (null == r ? void 0 : r[e][i]) || l,
                  c = (0, n.useMemo)(() => a, Object.values(a));
                return (0, n.createElement)(u.Provider, { value: c }, o);
              }
              return (
                (r = [...r, o]),
                (a.displayName = t + 'Provider'),
                [
                  a,
                  function (r, a) {
                    let u = (null == a ? void 0 : a[e][i]) || l,
                      c = (0, n.useContext)(u);
                    if (c) return c;
                    if (void 0 !== o) return o;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  }
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName
                }));
                return function (e) {
                  let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return (0, n.useMemo)(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(o, ...t)
          ]
        );
      }
    },
    87513: function (e, t, r) {
      r.d(t, {
        gm: function () {
          return l;
        }
      });
      var n = r(2265);
      let o = (0, n.createContext)(void 0);
      function l(e) {
        let t = (0, n.useContext)(o);
        return e || t || 'ltr';
      }
    },
    20589: function (e, t, r) {
      r.d(t, {
        EW: function () {
          return l;
        }
      });
      var n = r(2265);
      let o = 0;
      function l() {
        (0, n.useEffect)(() => {
          var e, t;
          let r = document.querySelectorAll('[data-radix-focus-guard]');
          return (
            document.body.insertAdjacentElement(
              'afterbegin',
              null !== (e = r[0]) && void 0 !== e ? e : i()
            ),
            document.body.insertAdjacentElement(
              'beforeend',
              null !== (t = r[1]) && void 0 !== t ? t : i()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll('[data-radix-focus-guard]')
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
        let e = document.createElement('span');
        return (
          e.setAttribute('data-radix-focus-guard', ''),
          (e.tabIndex = 0),
          (e.style.cssText =
            'outline: none; opacity: 0; position: fixed; pointer-events: none'),
          e
        );
      }
    },
    53201: function (e, t, r) {
      r.d(t, {
        M: function () {
          return u;
        }
      });
      var n,
        o = r(2265),
        l = r(1336);
      let i = (n || (n = r.t(o, 2)))['useId'.toString()] || (() => void 0),
        a = 0;
      function u(e) {
        let [t, r] = o.useState(i());
        return (
          (0, l.b)(() => {
            e || r((e) => (null != e ? e : String(a++)));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
    },
    31383: function (e, t, r) {
      r.d(t, {
        z: function () {
          return a;
        }
      });
      var n = r(2265),
        o = r(54887),
        l = r(1584),
        i = r(1336);
      let a = (e) => {
        let { present: t, children: r } = e,
          a = (function (e) {
            var t, r;
            let [l, a] = (0, n.useState)(),
              c = (0, n.useRef)({}),
              s = (0, n.useRef)(e),
              d = (0, n.useRef)('none'),
              [f, v] =
                ((t = e ? 'mounted' : 'unmounted'),
                (r = {
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
                (0, n.useReducer)((e, t) => {
                  let n = r[e][t];
                  return null != n ? n : e;
                }, t));
            return (
              (0, n.useEffect)(() => {
                let e = u(c.current);
                d.current = 'mounted' === f ? e : 'none';
              }, [f]),
              (0, i.b)(() => {
                let t = c.current,
                  r = s.current;
                if (r !== e) {
                  let n = d.current,
                    o = u(t);
                  e
                    ? v('MOUNT')
                    : 'none' === o ||
                      (null == t ? void 0 : t.display) === 'none'
                    ? v('UNMOUNT')
                    : r && n !== o
                    ? v('ANIMATION_OUT')
                    : v('UNMOUNT'),
                    (s.current = e);
                }
              }, [e, v]),
              (0, i.b)(() => {
                if (l) {
                  let e = (e) => {
                      let t = u(c.current).includes(e.animationName);
                      e.target === l &&
                        t &&
                        (0, o.flushSync)(() => v('ANIMATION_END'));
                    },
                    t = (e) => {
                      e.target === l && (d.current = u(c.current));
                    };
                  return (
                    l.addEventListener('animationstart', t),
                    l.addEventListener('animationcancel', e),
                    l.addEventListener('animationend', e),
                    () => {
                      l.removeEventListener('animationstart', t),
                        l.removeEventListener('animationcancel', e),
                        l.removeEventListener('animationend', e);
                    }
                  );
                }
                v('ANIMATION_END');
              }, [l, v]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(f),
                ref: (0, n.useCallback)((e) => {
                  e && (c.current = getComputedStyle(e)), a(e);
                }, [])
              }
            );
          })(t),
          c =
            'function' == typeof r
              ? r({ present: a.isPresent })
              : n.Children.only(r),
          s = (0, l.e)(a.ref, c.ref);
        return 'function' == typeof r || a.isPresent
          ? (0, n.cloneElement)(c, { ref: s })
          : null;
      };
      function u(e) {
        return (null == e ? void 0 : e.animationName) || 'none';
      }
      a.displayName = 'Presence';
    },
    18676: function (e, t, r) {
      r.d(t, {
        WV: function () {
          return d;
        },
        jH: function () {
          return f;
        }
      });
      var n = r(22988),
        o = r(2265),
        l = r(54887),
        i = r(1584);
      let a = (0, o.forwardRef)((e, t) => {
        let { children: r, ...l } = e,
          i = o.Children.toArray(r),
          a = i.find(s);
        if (a) {
          let e = a.props.children,
            r = i.map((t) =>
              t !== a
                ? t
                : o.Children.count(e) > 1
                ? o.Children.only(null)
                : (0, o.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, o.createElement)(
            u,
            (0, n.Z)({}, l, { ref: t }),
            (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, r) : null
          );
        }
        return (0, o.createElement)(u, (0, n.Z)({}, l, { ref: t }), r);
      });
      a.displayName = 'Slot';
      let u = (0, o.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        return (0, o.isValidElement)(r)
          ? (0, o.cloneElement)(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let o = e[n],
                    l = t[n];
                  /^on[A-Z]/.test(n)
                    ? o && l
                      ? (r[n] = (...e) => {
                          l(...e), o(...e);
                        })
                      : o && (r[n] = o)
                    : 'style' === n
                    ? (r[n] = { ...o, ...l })
                    : 'className' === n &&
                      (r[n] = [o, l].filter(Boolean).join(' '));
                }
                return { ...e, ...r };
              })(n, r.props),
              ref: t ? (0, i.F)(t, r.ref) : r.ref
            })
          : o.Children.count(r) > 1
          ? o.Children.only(null)
          : null;
      });
      u.displayName = 'SlotClone';
      let c = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
      function s(e) {
        return (0, o.isValidElement)(e) && e.type === c;
      }
      let d = [
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
        let r = (0, o.forwardRef)((e, r) => {
          let { asChild: l, ...i } = e,
            u = l ? a : t;
          return (
            (0, o.useEffect)(() => {
              window[Symbol.for('radix-ui')] = !0;
            }, []),
            (0, o.createElement)(u, (0, n.Z)({}, i, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
      }, {});
      function f(e, t) {
        e && (0, l.flushSync)(() => e.dispatchEvent(t));
      }
    },
    80023: function (e, t, r) {
      r.d(t, {
        Ns: function () {
          return j;
        },
        fC: function () {
          return F;
        },
        gb: function () {
          return y;
        },
        l_: function () {
          return $;
        },
        q4: function () {
          return x;
        }
      });
      var n = r(22988),
        o = r(2265),
        l = r(18676),
        i = r(31383),
        a = r(98324),
        u = r(1584),
        c = r(75137),
        s = r(87513),
        d = r(1336),
        f = r(62361),
        v = r(78149);
      let p = 'ScrollArea',
        [h, m] = (0, a.b)(p),
        [w, b] = h(p),
        E = (0, o.forwardRef)((e, t) => {
          let {
              __scopeScrollArea: r,
              type: i = 'hover',
              dir: a,
              scrollHideDelay: c = 600,
              ...d
            } = e,
            [f, v] = (0, o.useState)(null),
            [p, h] = (0, o.useState)(null),
            [m, b] = (0, o.useState)(null),
            [E, g] = (0, o.useState)(null),
            [S, y] = (0, o.useState)(null),
            [C, T] = (0, o.useState)(0),
            [R, N] = (0, o.useState)(0),
            [P, L] = (0, o.useState)(!1),
            [_, A] = (0, o.useState)(!1),
            M = (0, u.e)(t, (e) => v(e)),
            W = (0, s.gm)(a);
          return (0, o.createElement)(
            w,
            {
              scope: r,
              type: i,
              dir: W,
              scrollHideDelay: c,
              scrollArea: f,
              viewport: p,
              onViewportChange: h,
              content: m,
              onContentChange: b,
              scrollbarX: E,
              onScrollbarXChange: g,
              scrollbarXEnabled: P,
              onScrollbarXEnabledChange: L,
              scrollbarY: S,
              onScrollbarYChange: y,
              scrollbarYEnabled: _,
              onScrollbarYEnabledChange: A,
              onCornerWidthChange: T,
              onCornerHeightChange: N
            },
            (0, o.createElement)(
              l.WV.div,
              (0, n.Z)({ dir: W }, d, {
                ref: M,
                style: {
                  position: 'relative',
                  '--radix-scroll-area-corner-width': C + 'px',
                  '--radix-scroll-area-corner-height': R + 'px',
                  ...e.style
                }
              })
            )
          );
        }),
        g = (0, o.forwardRef)((e, t) => {
          let { __scopeScrollArea: r, children: i, ...a } = e,
            c = b('ScrollAreaViewport', r),
            s = (0, o.useRef)(null),
            d = (0, u.e)(t, s, c.onViewportChange);
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
              (0, n.Z)({ 'data-radix-scroll-area-viewport': '' }, a, {
                ref: d,
                style: {
                  overflowX: c.scrollbarXEnabled ? 'scroll' : 'hidden',
                  overflowY: c.scrollbarYEnabled ? 'scroll' : 'hidden',
                  ...e.style
                }
              }),
              (0, o.createElement)(
                'div',
                {
                  ref: c.onContentChange,
                  style: { minWidth: '100%', display: 'table' }
                },
                i
              )
            )
          );
        }),
        S = 'ScrollAreaScrollbar',
        y = (0, o.forwardRef)((e, t) => {
          let { forceMount: r, ...l } = e,
            i = b(S, e.__scopeScrollArea),
            { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: u } = i,
            c = 'horizontal' === e.orientation;
          return (
            (0, o.useEffect)(
              () => (
                c ? a(!0) : u(!0),
                () => {
                  c ? a(!1) : u(!1);
                }
              ),
              [c, a, u]
            ),
            'hover' === i.type
              ? (0, o.createElement)(
                  C,
                  (0, n.Z)({}, l, { ref: t, forceMount: r })
                )
              : 'scroll' === i.type
              ? (0, o.createElement)(
                  T,
                  (0, n.Z)({}, l, { ref: t, forceMount: r })
                )
              : 'auto' === i.type
              ? (0, o.createElement)(
                  R,
                  (0, n.Z)({}, l, { ref: t, forceMount: r })
                )
              : 'always' === i.type
              ? (0, o.createElement)(N, (0, n.Z)({}, l, { ref: t }))
              : null
          );
        }),
        C = (0, o.forwardRef)((e, t) => {
          let { forceMount: r, ...l } = e,
            a = b(S, e.__scopeScrollArea),
            [u, c] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              let e = a.scrollArea,
                t = 0;
              if (e) {
                let r = () => {
                    window.clearTimeout(t), c(!0);
                  },
                  n = () => {
                    t = window.setTimeout(() => c(!1), a.scrollHideDelay);
                  };
                return (
                  e.addEventListener('pointerenter', r),
                  e.addEventListener('pointerleave', n),
                  () => {
                    window.clearTimeout(t),
                      e.removeEventListener('pointerenter', r),
                      e.removeEventListener('pointerleave', n);
                  }
                );
              }
            }, [a.scrollArea, a.scrollHideDelay]),
            (0, o.createElement)(
              i.z,
              { present: r || u },
              (0, o.createElement)(
                R,
                (0, n.Z)({ 'data-state': u ? 'visible' : 'hidden' }, l, {
                  ref: t
                })
              )
            )
          );
        }),
        T = (0, o.forwardRef)((e, t) => {
          var r, l;
          let { forceMount: a, ...u } = e,
            c = b(S, e.__scopeScrollArea),
            s = 'horizontal' === e.orientation,
            d = V(() => p('SCROLL_END'), 100),
            [f, p] =
              ((r = 'hidden'),
              (l = {
                hidden: { SCROLL: 'scrolling' },
                scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
                interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
                idle: {
                  HIDE: 'hidden',
                  SCROLL: 'scrolling',
                  POINTER_ENTER: 'interacting'
                }
              }),
              (0, o.useReducer)((e, t) => {
                let r = l[e][t];
                return null != r ? r : e;
              }, r));
          return (
            (0, o.useEffect)(() => {
              if ('idle' === f) {
                let e = window.setTimeout(() => p('HIDE'), c.scrollHideDelay);
                return () => window.clearTimeout(e);
              }
            }, [f, c.scrollHideDelay, p]),
            (0, o.useEffect)(() => {
              let e = c.viewport,
                t = s ? 'scrollLeft' : 'scrollTop';
              if (e) {
                let r = e[t],
                  n = () => {
                    let n = e[t];
                    r !== n && (p('SCROLL'), d()), (r = n);
                  };
                return (
                  e.addEventListener('scroll', n),
                  () => e.removeEventListener('scroll', n)
                );
              }
            }, [c.viewport, s, p, d]),
            (0, o.createElement)(
              i.z,
              { present: a || 'hidden' !== f },
              (0, o.createElement)(
                N,
                (0, n.Z)(
                  { 'data-state': 'hidden' === f ? 'hidden' : 'visible' },
                  u,
                  {
                    ref: t,
                    onPointerEnter: (0, v.M)(e.onPointerEnter, () =>
                      p('POINTER_ENTER')
                    ),
                    onPointerLeave: (0, v.M)(e.onPointerLeave, () =>
                      p('POINTER_LEAVE')
                    )
                  }
                )
              )
            )
          );
        }),
        R = (0, o.forwardRef)((e, t) => {
          let r = b(S, e.__scopeScrollArea),
            { forceMount: l, ...a } = e,
            [u, c] = (0, o.useState)(!1),
            s = 'horizontal' === e.orientation,
            d = V(() => {
              if (r.viewport) {
                let e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                c(s ? e : t);
              }
            }, 10);
          return (
            B(r.viewport, d),
            B(r.content, d),
            (0, o.createElement)(
              i.z,
              { present: l || u },
              (0, o.createElement)(
                N,
                (0, n.Z)({ 'data-state': u ? 'visible' : 'hidden' }, a, {
                  ref: t
                })
              )
            )
          );
        }),
        N = (0, o.forwardRef)((e, t) => {
          let { orientation: r = 'vertical', ...l } = e,
            i = b(S, e.__scopeScrollArea),
            a = (0, o.useRef)(null),
            u = (0, o.useRef)(0),
            [c, s] = (0, o.useState)({
              content: 0,
              viewport: 0,
              scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
            }),
            d = Z(c.viewport, c.content),
            f = {
              ...l,
              sizes: c,
              onSizesChange: s,
              hasThumb: !!(d > 0 && d < 1),
              onThumbChange: (e) => (a.current = e),
              onThumbPointerUp: () => (u.current = 0),
              onThumbPointerDown: (e) => (u.current = e)
            };
          function v(e, t) {
            return (function (e, t, r, n = 'ltr') {
              let o = U(r),
                l = t || o / 2,
                i = r.scrollbar.paddingStart + l,
                a = r.scrollbar.size - r.scrollbar.paddingEnd - (o - l),
                u = r.content - r.viewport;
              return Y([i, a], 'ltr' === n ? [0, u] : [-1 * u, 0])(e);
            })(e, u.current, c, t);
          }
          return 'horizontal' === r
            ? (0, o.createElement)(
                P,
                (0, n.Z)({}, f, {
                  ref: t,
                  onThumbPositionChange: () => {
                    if (i.viewport && a.current) {
                      let e = X(i.viewport.scrollLeft, c, i.dir);
                      a.current.style.transform = `translate3d(${e}px, 0, 0)`;
                    }
                  },
                  onWheelScroll: (e) => {
                    i.viewport && (i.viewport.scrollLeft = e);
                  },
                  onDragScroll: (e) => {
                    i.viewport && (i.viewport.scrollLeft = v(e, i.dir));
                  }
                })
              )
            : 'vertical' === r
            ? (0, o.createElement)(
                L,
                (0, n.Z)({}, f, {
                  ref: t,
                  onThumbPositionChange: () => {
                    if (i.viewport && a.current) {
                      let e = X(i.viewport.scrollTop, c);
                      a.current.style.transform = `translate3d(0, ${e}px, 0)`;
                    }
                  },
                  onWheelScroll: (e) => {
                    i.viewport && (i.viewport.scrollTop = e);
                  },
                  onDragScroll: (e) => {
                    i.viewport && (i.viewport.scrollTop = v(e));
                  }
                })
              )
            : null;
        }),
        P = (0, o.forwardRef)((e, t) => {
          let { sizes: r, onSizesChange: l, ...i } = e,
            a = b(S, e.__scopeScrollArea),
            [c, s] = (0, o.useState)(),
            d = (0, o.useRef)(null),
            f = (0, u.e)(t, d, a.onScrollbarXChange);
          return (
            (0, o.useEffect)(() => {
              d.current && s(getComputedStyle(d.current));
            }, [d]),
            (0, o.createElement)(
              M,
              (0, n.Z)({ 'data-orientation': 'horizontal' }, i, {
                ref: f,
                sizes: r,
                style: {
                  bottom: 0,
                  left:
                    'rtl' === a.dir
                      ? 'var(--radix-scroll-area-corner-width)'
                      : 0,
                  right:
                    'ltr' === a.dir
                      ? 'var(--radix-scroll-area-corner-width)'
                      : 0,
                  '--radix-scroll-area-thumb-width': U(r) + 'px',
                  ...e.style
                },
                onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
                onDragScroll: (t) => e.onDragScroll(t.x),
                onWheelScroll: (t, r) => {
                  if (a.viewport) {
                    let n = a.viewport.scrollLeft + t.deltaX;
                    e.onWheelScroll(n), n > 0 && n < r && t.preventDefault();
                  }
                },
                onResize: () => {
                  d.current &&
                    a.viewport &&
                    c &&
                    l({
                      content: a.viewport.scrollWidth,
                      viewport: a.viewport.offsetWidth,
                      scrollbar: {
                        size: d.current.clientWidth,
                        paddingStart: I(c.paddingLeft),
                        paddingEnd: I(c.paddingRight)
                      }
                    });
                }
              })
            )
          );
        }),
        L = (0, o.forwardRef)((e, t) => {
          let { sizes: r, onSizesChange: l, ...i } = e,
            a = b(S, e.__scopeScrollArea),
            [c, s] = (0, o.useState)(),
            d = (0, o.useRef)(null),
            f = (0, u.e)(t, d, a.onScrollbarYChange);
          return (
            (0, o.useEffect)(() => {
              d.current && s(getComputedStyle(d.current));
            }, [d]),
            (0, o.createElement)(
              M,
              (0, n.Z)({ 'data-orientation': 'vertical' }, i, {
                ref: f,
                sizes: r,
                style: {
                  top: 0,
                  right: 'ltr' === a.dir ? 0 : void 0,
                  left: 'rtl' === a.dir ? 0 : void 0,
                  bottom: 'var(--radix-scroll-area-corner-height)',
                  '--radix-scroll-area-thumb-height': U(r) + 'px',
                  ...e.style
                },
                onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
                onDragScroll: (t) => e.onDragScroll(t.y),
                onWheelScroll: (t, r) => {
                  if (a.viewport) {
                    let n = a.viewport.scrollTop + t.deltaY;
                    e.onWheelScroll(n), n > 0 && n < r && t.preventDefault();
                  }
                },
                onResize: () => {
                  d.current &&
                    a.viewport &&
                    c &&
                    l({
                      content: a.viewport.scrollHeight,
                      viewport: a.viewport.offsetHeight,
                      scrollbar: {
                        size: d.current.clientHeight,
                        paddingStart: I(c.paddingTop),
                        paddingEnd: I(c.paddingBottom)
                      }
                    });
                }
              })
            )
          );
        }),
        [_, A] = h(S),
        M = (0, o.forwardRef)((e, t) => {
          let {
              __scopeScrollArea: r,
              sizes: i,
              hasThumb: a,
              onThumbChange: s,
              onThumbPointerUp: d,
              onThumbPointerDown: f,
              onThumbPositionChange: p,
              onDragScroll: h,
              onWheelScroll: m,
              onResize: w,
              ...E
            } = e,
            g = b(S, r),
            [y, C] = (0, o.useState)(null),
            T = (0, u.e)(t, (e) => C(e)),
            R = (0, o.useRef)(null),
            N = (0, o.useRef)(''),
            P = g.viewport,
            L = i.content - i.viewport,
            A = (0, c.W)(m),
            M = (0, c.W)(p),
            W = V(w, 10);
          function x(e) {
            R.current &&
              h({
                x: e.clientX - R.current.left,
                y: e.clientY - R.current.top
              });
          }
          return (
            (0, o.useEffect)(() => {
              let e = (e) => {
                let t = e.target;
                (null == y ? void 0 : y.contains(t)) && A(e, L);
              };
              return (
                document.addEventListener('wheel', e, { passive: !1 }),
                () => document.removeEventListener('wheel', e, { passive: !1 })
              );
            }, [P, y, L, A]),
            (0, o.useEffect)(M, [i, M]),
            B(y, W),
            B(g.content, W),
            (0, o.createElement)(
              _,
              {
                scope: r,
                scrollbar: y,
                hasThumb: a,
                onThumbChange: (0, c.W)(s),
                onThumbPointerUp: (0, c.W)(d),
                onThumbPositionChange: M,
                onThumbPointerDown: (0, c.W)(f)
              },
              (0, o.createElement)(
                l.WV.div,
                (0, n.Z)({}, E, {
                  ref: T,
                  style: { position: 'absolute', ...E.style },
                  onPointerDown: (0, v.M)(e.onPointerDown, (e) => {
                    0 === e.button &&
                      (e.target.setPointerCapture(e.pointerId),
                      (R.current = y.getBoundingClientRect()),
                      (N.current = document.body.style.webkitUserSelect),
                      (document.body.style.webkitUserSelect = 'none'),
                      g.viewport && (g.viewport.style.scrollBehavior = 'auto'),
                      x(e));
                  }),
                  onPointerMove: (0, v.M)(e.onPointerMove, x),
                  onPointerUp: (0, v.M)(e.onPointerUp, (e) => {
                    let t = e.target;
                    t.hasPointerCapture(e.pointerId) &&
                      t.releasePointerCapture(e.pointerId),
                      (document.body.style.webkitUserSelect = N.current),
                      g.viewport && (g.viewport.style.scrollBehavior = ''),
                      (R.current = null);
                  })
                })
              )
            )
          );
        }),
        W = 'ScrollAreaThumb',
        x = (0, o.forwardRef)((e, t) => {
          let { forceMount: r, ...l } = e,
            a = A(W, e.__scopeScrollArea);
          return (0, o.createElement)(
            i.z,
            { present: r || a.hasThumb },
            (0, o.createElement)(D, (0, n.Z)({ ref: t }, l))
          );
        }),
        D = (0, o.forwardRef)((e, t) => {
          let { __scopeScrollArea: r, style: i, ...a } = e,
            c = b(W, r),
            s = A(W, r),
            { onThumbPositionChange: d } = s,
            f = (0, u.e)(t, (e) => s.onThumbChange(e)),
            p = (0, o.useRef)(),
            h = V(() => {
              p.current && (p.current(), (p.current = void 0));
            }, 100);
          return (
            (0, o.useEffect)(() => {
              let e = c.viewport;
              if (e) {
                let t = () => {
                  if ((h(), !p.current)) {
                    let t = H(e, d);
                    (p.current = t), d();
                  }
                };
                return (
                  d(),
                  e.addEventListener('scroll', t),
                  () => e.removeEventListener('scroll', t)
                );
              }
            }, [c.viewport, h, d]),
            (0, o.createElement)(
              l.WV.div,
              (0, n.Z)({ 'data-state': s.hasThumb ? 'visible' : 'hidden' }, a, {
                ref: f,
                style: {
                  width: 'var(--radix-scroll-area-thumb-width)',
                  height: 'var(--radix-scroll-area-thumb-height)',
                  ...i
                },
                onPointerDownCapture: (0, v.M)(e.onPointerDownCapture, (e) => {
                  let t = e.target.getBoundingClientRect(),
                    r = e.clientX - t.left,
                    n = e.clientY - t.top;
                  s.onThumbPointerDown({ x: r, y: n });
                }),
                onPointerUp: (0, v.M)(e.onPointerUp, s.onThumbPointerUp)
              })
            )
          );
        }),
        k = 'ScrollAreaCorner',
        z = (0, o.forwardRef)((e, t) => {
          let r = b(k, e.__scopeScrollArea),
            l = !!(r.scrollbarX && r.scrollbarY);
          return 'scroll' !== r.type && l
            ? (0, o.createElement)(O, (0, n.Z)({}, e, { ref: t }))
            : null;
        }),
        O = (0, o.forwardRef)((e, t) => {
          let { __scopeScrollArea: r, ...i } = e,
            a = b(k, r),
            [u, c] = (0, o.useState)(0),
            [s, d] = (0, o.useState)(0),
            f = !!(u && s);
          return (
            B(a.scrollbarX, () => {
              var e;
              let t =
                (null === (e = a.scrollbarX) || void 0 === e
                  ? void 0
                  : e.offsetHeight) || 0;
              a.onCornerHeightChange(t), d(t);
            }),
            B(a.scrollbarY, () => {
              var e;
              let t =
                (null === (e = a.scrollbarY) || void 0 === e
                  ? void 0
                  : e.offsetWidth) || 0;
              a.onCornerWidthChange(t), c(t);
            }),
            f
              ? (0, o.createElement)(
                  l.WV.div,
                  (0, n.Z)({}, i, {
                    ref: t,
                    style: {
                      width: u,
                      height: s,
                      position: 'absolute',
                      right: 'ltr' === a.dir ? 0 : void 0,
                      left: 'rtl' === a.dir ? 0 : void 0,
                      bottom: 0,
                      ...e.style
                    }
                  })
                )
              : null
          );
        });
      function I(e) {
        return e ? parseInt(e, 10) : 0;
      }
      function Z(e, t) {
        let r = e / t;
        return isNaN(r) ? 0 : r;
      }
      function U(e) {
        let t = Z(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
        return Math.max((e.scrollbar.size - r) * t, 18);
      }
      function X(e, t, r = 'ltr') {
        let n = U(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          l = t.scrollbar.size - o,
          i = t.content - t.viewport,
          a = (0, f.u)(e, 'ltr' === r ? [0, i] : [-1 * i, 0]);
        return Y([0, i], [0, l - n])(a);
      }
      function Y(e, t) {
        return (r) => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          let n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0]);
        };
      }
      let H = (e, t = () => {}) => {
        let r = { left: e.scrollLeft, top: e.scrollTop },
          n = 0;
        return (
          !(function o() {
            let l = { left: e.scrollLeft, top: e.scrollTop },
              i = r.left !== l.left,
              a = r.top !== l.top;
            (i || a) && t(), (r = l), (n = window.requestAnimationFrame(o));
          })(),
          () => window.cancelAnimationFrame(n)
        );
      };
      function V(e, t) {
        let r = (0, c.W)(e),
          n = (0, o.useRef)(0);
        return (
          (0, o.useEffect)(() => () => window.clearTimeout(n.current), []),
          (0, o.useCallback)(() => {
            window.clearTimeout(n.current),
              (n.current = window.setTimeout(r, t));
          }, [r, t])
        );
      }
      function B(e, t) {
        let r = (0, c.W)(t);
        (0, d.b)(() => {
          let t = 0;
          if (e) {
            let n = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(r));
            });
            return (
              n.observe(e),
              () => {
                window.cancelAnimationFrame(t), n.unobserve(e);
              }
            );
          }
        }, [e, r]);
      }
      let F = E,
        $ = g,
        j = z;
    },
    75137: function (e, t, r) {
      r.d(t, {
        W: function () {
          return o;
        }
      });
      var n = r(2265);
      function o(e) {
        let t = (0, n.useRef)(e);
        return (
          (0, n.useEffect)(() => {
            t.current = e;
          }),
          (0, n.useMemo)(
            () =>
              (...e) => {
                var r;
                return null === (r = t.current) || void 0 === r
                  ? void 0
                  : r.call(t, ...e);
              },
            []
          )
        );
      }
    },
    91715: function (e, t, r) {
      r.d(t, {
        T: function () {
          return l;
        }
      });
      var n = r(2265),
        o = r(75137);
      function l({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [l, i] = (function ({ defaultProp: e, onChange: t }) {
            let r = (0, n.useState)(e),
              [l] = r,
              i = (0, n.useRef)(l),
              a = (0, o.W)(t);
            return (
              (0, n.useEffect)(() => {
                i.current !== l && (a(l), (i.current = l));
              }, [l, i, a]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          a = void 0 !== e,
          u = a ? e : l,
          c = (0, o.W)(r);
        return [
          u,
          (0, n.useCallback)(
            (t) => {
              if (a) {
                let r = 'function' == typeof t ? t(e) : t;
                r !== e && c(r);
              } else i(t);
            },
            [a, e, i, c]
          )
        ];
      }
    },
    66486: function (e, t, r) {
      r.d(t, {
        e: function () {
          return l;
        }
      });
      var n = r(2265),
        o = r(75137);
      function l(e, t = null == globalThis ? void 0 : globalThis.document) {
        let r = (0, o.W)(e);
        (0, n.useEffect)(() => {
          let e = (e) => {
            'Escape' === e.key && r(e);
          };
          return (
            t.addEventListener('keydown', e),
            () => t.removeEventListener('keydown', e)
          );
        }, [r, t]);
      }
    },
    1336: function (e, t, r) {
      r.d(t, {
        b: function () {
          return o;
        }
      });
      var n = r(2265);
      let o = (null == globalThis ? void 0 : globalThis.document)
        ? n.useLayoutEffect
        : () => {};
    }
  }
]);
