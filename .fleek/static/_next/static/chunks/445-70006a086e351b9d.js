'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [445],
  {
    55445: function (e, t, r) {
      r.d(t, {
        z$: function () {
          return ea;
        },
        ck: function () {
          return ei;
        },
        fC: function () {
          return eu;
        }
      });
      var n = r(2265),
        o = r.t(n, 2);
      function u(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
        };
      }
      function i(...e) {
        return n.useCallback(
          (function (...e) {
            return (t) =>
              e.forEach((e) => {
                'function' == typeof e ? e(t) : null != e && (e.current = t);
              });
          })(...e),
          e
        );
      }
      var a = r(57437);
      function l(e, t = []) {
        let r = [],
          o = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let o = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let u = n.createContext(o),
                i = r.length;
              function l(t) {
                let { scope: r, children: o, ...l } = t,
                  s = r?.[e][i] || u,
                  c = n.useMemo(() => l, Object.values(l));
                return (0, a.jsx)(s.Provider, { value: c, children: o });
              }
              return (
                (r = [...r, o]),
                (l.displayName = t + 'Provider'),
                [
                  l,
                  function (r, a) {
                    let l = a?.[e][i] || u,
                      s = n.useContext(l);
                    if (s) return s;
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
                  return n.useMemo(
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
      var s = r(54887),
        c = r(63355),
        d = [
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
          let r = n.forwardRef((e, r) => {
            let { asChild: n, ...o } = e,
              u = n ? c.g7 : t;
            return (
              'undefined' != typeof window &&
                (window[Symbol.for('radix-ui')] = !0),
              (0, a.jsx)(u, { ...o, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {}),
        f = globalThis?.document ? n.useLayoutEffect : () => {},
        p = o['useId'.toString()] || (() => void 0),
        v = 0;
      function m(e) {
        let t = n.useRef(e);
        return (
          n.useEffect(() => {
            t.current = e;
          }),
          n.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      function y({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [o, u] = (function ({ defaultProp: e, onChange: t }) {
            let r = n.useState(e),
              [o] = r,
              u = n.useRef(o),
              i = m(t);
            return (
              n.useEffect(() => {
                u.current !== o && (i(o), (u.current = o));
              }, [o, u, i]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          i = void 0 !== e,
          a = i ? e : o,
          l = m(r);
        return [
          a,
          n.useCallback(
            (t) => {
              if (i) {
                let r = 'function' == typeof t ? t(e) : t;
                r !== e && l(r);
              } else u(t);
            },
            [i, e, u, l]
          )
        ];
      }
      var h = n.createContext(void 0);
      function w(e) {
        let t = n.useContext(h);
        return e || t || 'ltr';
      }
      var b = 'rovingFocusGroup.onEntryFocus',
        g = { bubbles: !1, cancelable: !0 },
        R = 'RovingFocusGroup',
        [x, N, E] = (function (e) {
          let t = e + 'CollectionProvider',
            [r, o] = l(t),
            [u, s] = r(t, {
              collectionRef: { current: null },
              itemMap: new Map()
            }),
            d = (e) => {
              let { scope: t, children: r } = e,
                o = n.useRef(null),
                i = n.useRef(new Map()).current;
              return (0, a.jsx)(u, {
                scope: t,
                itemMap: i,
                collectionRef: o,
                children: r
              });
            };
          d.displayName = t;
          let f = e + 'CollectionSlot',
            p = n.forwardRef((e, t) => {
              let { scope: r, children: n } = e,
                o = i(t, s(f, r).collectionRef);
              return (0, a.jsx)(c.g7, { ref: o, children: n });
            });
          p.displayName = f;
          let v = e + 'CollectionItemSlot',
            m = 'data-radix-collection-item',
            y = n.forwardRef((e, t) => {
              let { scope: r, children: o, ...u } = e,
                l = n.useRef(null),
                d = i(t, l),
                f = s(v, r);
              return (
                n.useEffect(
                  () => (
                    f.itemMap.set(l, { ref: l, ...u }),
                    () => void f.itemMap.delete(l)
                  )
                ),
                (0, a.jsx)(c.g7, { [m]: '', ref: d, children: o })
              );
            });
          return (
            (y.displayName = v),
            [
              { Provider: d, Slot: p, ItemSlot: y },
              function (t) {
                let r = s(e + 'CollectionConsumer', t);
                return n.useCallback(() => {
                  let e = r.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll('['.concat(m, ']')));
                  return Array.from(r.itemMap.values()).sort(
                    (e, r) =>
                      t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                  );
                }, [r.collectionRef, r.itemMap]);
              },
              o
            ]
          );
        })(R),
        [k, A] = l(R, [E]),
        [C, S] = k(R),
        I = n.forwardRef((e, t) =>
          (0, a.jsx)(x.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, a.jsx)(x.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, a.jsx)(j, { ...e, ref: t })
            })
          })
        );
      I.displayName = R;
      var j = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: o,
              loop: l = !1,
              dir: s,
              currentTabStopId: c,
              defaultCurrentTabStopId: f,
              onCurrentTabStopIdChange: p,
              onEntryFocus: v,
              preventScrollOnEntryFocus: h = !1,
              ...R
            } = e,
            x = n.useRef(null),
            E = i(t, x),
            k = w(s),
            [A = null, S] = y({ prop: c, defaultProp: f, onChange: p }),
            [I, j] = n.useState(!1),
            M = m(v),
            T = N(r),
            O = n.useRef(!1),
            [D, L] = n.useState(0);
          return (
            n.useEffect(() => {
              let e = x.current;
              if (e)
                return (
                  e.addEventListener(b, M), () => e.removeEventListener(b, M)
                );
            }, [M]),
            (0, a.jsx)(C, {
              scope: r,
              orientation: o,
              dir: k,
              loop: l,
              currentTabStopId: A,
              onItemFocus: n.useCallback((e) => S(e), [S]),
              onItemShiftTab: n.useCallback(() => j(!0), []),
              onFocusableItemAdd: n.useCallback(() => L((e) => e + 1), []),
              onFocusableItemRemove: n.useCallback(() => L((e) => e - 1), []),
              children: (0, a.jsx)(d.div, {
                tabIndex: I || 0 === D ? -1 : 0,
                'data-orientation': o,
                ...R,
                ref: E,
                style: { outline: 'none', ...e.style },
                onMouseDown: u(e.onMouseDown, () => {
                  O.current = !0;
                }),
                onFocus: u(e.onFocus, (e) => {
                  let t = !O.current;
                  if (e.target === e.currentTarget && t && !I) {
                    let t = new CustomEvent(b, g);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = T().filter((e) => e.focusable);
                      P(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === A),
                          ...e
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        h
                      );
                    }
                  }
                  O.current = !1;
                }),
                onBlur: u(e.onBlur, () => j(!1))
              })
            })
          );
        }),
        M = 'RovingFocusGroupItem',
        T = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: o = !0,
              active: i = !1,
              tabStopId: l,
              ...s
            } = e,
            c = (function (e) {
              let [t, r] = n.useState(p());
              return (
                f(() => {
                  r((e) => e ?? String(v++));
                }, [void 0]),
                t ? `radix-${t}` : ''
              );
            })(),
            m = l || c,
            y = S(M, r),
            h = y.currentTabStopId === m,
            w = N(r),
            { onFocusableItemAdd: b, onFocusableItemRemove: g } = y;
          return (
            n.useEffect(() => {
              if (o) return b(), () => g();
            }, [o, b, g]),
            (0, a.jsx)(x.ItemSlot, {
              scope: r,
              id: m,
              focusable: o,
              active: i,
              children: (0, a.jsx)(d.span, {
                tabIndex: h ? 0 : -1,
                'data-orientation': y.orientation,
                ...s,
                ref: t,
                onMouseDown: u(e.onMouseDown, (e) => {
                  o ? y.onItemFocus(m) : e.preventDefault();
                }),
                onFocus: u(e.onFocus, () => y.onItemFocus(m)),
                onKeyDown: u(e.onKeyDown, (e) => {
                  if ('Tab' === e.key && e.shiftKey) {
                    y.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, r) {
                    var n;
                    let o =
                      ((n = e.key),
                      'rtl' !== r
                        ? n
                        : 'ArrowLeft' === n
                        ? 'ArrowRight'
                        : 'ArrowRight' === n
                        ? 'ArrowLeft'
                        : n);
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
                      return O[o];
                  })(e, y.orientation, y.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let o = w()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ('last' === t) o.reverse();
                    else if ('prev' === t || 'next' === t) {
                      var r, n;
                      'prev' === t && o.reverse();
                      let u = o.indexOf(e.currentTarget);
                      o = y.loop
                        ? ((r = o),
                          (n = u + 1),
                          r.map((e, t) => r[(n + t) % r.length]))
                        : o.slice(u + 1);
                    }
                    setTimeout(() => P(o));
                  }
                })
              })
            })
          );
        });
      T.displayName = M;
      var O = {
        ArrowLeft: 'prev',
        ArrowUp: 'prev',
        ArrowRight: 'next',
        ArrowDown: 'next',
        PageUp: 'first',
        Home: 'first',
        PageDown: 'last',
        End: 'last'
      };
      function P(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = document.activeElement;
        for (let n of e)
          if (
            n === r ||
            (n.focus({ preventScroll: t }), document.activeElement !== r)
          )
            return;
      }
      var D = (e) => {
        var t, r;
        let o, u;
        let { present: a, children: l } = e,
          c = (function (e) {
            var t, r;
            let [o, u] = n.useState(),
              i = n.useRef({}),
              a = n.useRef(e),
              l = n.useRef('none'),
              [c, d] =
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
                n.useReducer((e, t) => {
                  let n = r[e][t];
                  return null != n ? n : e;
                }, t));
            return (
              n.useEffect(() => {
                let e = L(i.current);
                l.current = 'mounted' === c ? e : 'none';
              }, [c]),
              f(() => {
                let t = i.current,
                  r = a.current;
                if (r !== e) {
                  let n = l.current,
                    o = L(t);
                  e
                    ? d('MOUNT')
                    : 'none' === o ||
                      (null == t ? void 0 : t.display) === 'none'
                    ? d('UNMOUNT')
                    : r && n !== o
                    ? d('ANIMATION_OUT')
                    : d('UNMOUNT'),
                    (a.current = e);
                }
              }, [e, d]),
              f(() => {
                if (o) {
                  let e = (e) => {
                      let t = L(i.current).includes(e.animationName);
                      e.target === o &&
                        t &&
                        s.flushSync(() => d('ANIMATION_END'));
                    },
                    t = (e) => {
                      e.target === o && (l.current = L(i.current));
                    };
                  return (
                    o.addEventListener('animationstart', t),
                    o.addEventListener('animationcancel', e),
                    o.addEventListener('animationend', e),
                    () => {
                      o.removeEventListener('animationstart', t),
                        o.removeEventListener('animationcancel', e),
                        o.removeEventListener('animationend', e);
                    }
                  );
                }
                d('ANIMATION_END');
              }, [o, d]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(c),
                ref: n.useCallback((e) => {
                  e && (i.current = getComputedStyle(e)), u(e);
                }, [])
              }
            );
          })(a),
          d =
            'function' == typeof l
              ? l({ present: c.isPresent })
              : n.Children.only(l),
          p = i(
            c.ref,
            (o =
              null === (t = Object.getOwnPropertyDescriptor(d.props, 'ref')) ||
              void 0 === t
                ? void 0
                : t.get) &&
              'isReactWarning' in o &&
              o.isReactWarning
              ? d.ref
              : (o =
                  null === (r = Object.getOwnPropertyDescriptor(d, 'ref')) ||
                  void 0 === r
                    ? void 0
                    : r.get) &&
                'isReactWarning' in o &&
                o.isReactWarning
              ? d.props.ref
              : d.props.ref || d.ref
          );
        return 'function' == typeof l || c.isPresent
          ? n.cloneElement(d, { ref: p })
          : null;
      };
      function L(e) {
        return (null == e ? void 0 : e.animationName) || 'none';
      }
      D.displayName = 'Presence';
      var _ = 'Radio',
        [F, U] = l(_),
        [G, K] = F(_),
        $ = n.forwardRef((e, t) => {
          let {
              __scopeRadio: r,
              name: o,
              checked: l = !1,
              required: s,
              disabled: c,
              value: f = 'on',
              onCheck: p,
              ...v
            } = e,
            [m, y] = n.useState(null),
            h = i(t, (e) => y(e)),
            w = n.useRef(!1),
            b = !m || !!m.closest('form');
          return (0, a.jsxs)(G, {
            scope: r,
            checked: l,
            disabled: c,
            children: [
              (0, a.jsx)(d.button, {
                type: 'button',
                role: 'radio',
                'aria-checked': l,
                'data-state': q(l),
                'data-disabled': c ? '' : void 0,
                disabled: c,
                value: f,
                ...v,
                ref: h,
                onClick: u(e.onClick, (e) => {
                  l || null == p || p(),
                    b &&
                      ((w.current = e.isPropagationStopped()),
                      w.current || e.stopPropagation());
                })
              }),
              b &&
                (0, a.jsx)(B, {
                  control: m,
                  bubbles: !w.current,
                  name: o,
                  value: f,
                  checked: l,
                  required: s,
                  disabled: c,
                  style: { transform: 'translateX(-100%)' }
                })
            ]
          });
        });
      $.displayName = _;
      var z = 'RadioIndicator',
        W = n.forwardRef((e, t) => {
          let { __scopeRadio: r, forceMount: n, ...o } = e,
            u = K(z, r);
          return (0, a.jsx)(D, {
            present: n || u.checked,
            children: (0, a.jsx)(d.span, {
              'data-state': q(u.checked),
              'data-disabled': u.disabled ? '' : void 0,
              ...o,
              ref: t
            })
          });
        });
      W.displayName = z;
      var B = (e) => {
        let { control: t, checked: r, bubbles: o = !0, ...u } = e,
          i = n.useRef(null),
          l = (function (e) {
            let t = n.useRef({ value: e, previous: e });
            return n.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e]
            );
          })(r),
          s = (function (e) {
            let [t, r] = n.useState(void 0);
            return (
              f(() => {
                if (e) {
                  r({ width: e.offsetWidth, height: e.offsetHeight });
                  let t = new ResizeObserver((t) => {
                    let n, o;
                    if (!Array.isArray(t) || !t.length) return;
                    let u = t[0];
                    if ('borderBoxSize' in u) {
                      let e = u.borderBoxSize,
                        t = Array.isArray(e) ? e[0] : e;
                      (n = t.inlineSize), (o = t.blockSize);
                    } else (n = e.offsetWidth), (o = e.offsetHeight);
                    r({ width: n, height: o });
                  });
                  return (
                    t.observe(e, { box: 'border-box' }), () => t.unobserve(e)
                  );
                }
                r(void 0);
              }, [e]),
              t
            );
          })(t);
        return (
          n.useEffect(() => {
            let e = i.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                'checked'
              ).set;
            if (l !== r && t) {
              let n = new Event('click', { bubbles: o });
              t.call(e, r), e.dispatchEvent(n);
            }
          }, [l, r, o]),
          (0, a.jsx)('input', {
            type: 'radio',
            'aria-hidden': !0,
            defaultChecked: r,
            ...u,
            tabIndex: -1,
            ref: i,
            style: {
              ...e.style,
              ...s,
              position: 'absolute',
              pointerEvents: 'none',
              opacity: 0,
              margin: 0
            }
          })
        );
      };
      function q(e) {
        return e ? 'checked' : 'unchecked';
      }
      var H = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
        V = 'RadioGroup',
        [X, J] = l(V, [A, U]),
        Q = A(),
        Y = U(),
        [Z, ee] = X(V),
        et = n.forwardRef((e, t) => {
          let {
              __scopeRadioGroup: r,
              name: n,
              defaultValue: o,
              value: u,
              required: i = !1,
              disabled: l = !1,
              orientation: s,
              dir: c,
              loop: f = !0,
              onValueChange: p,
              ...v
            } = e,
            m = Q(r),
            h = w(c),
            [b, g] = y({ prop: u, defaultProp: o, onChange: p });
          return (0, a.jsx)(Z, {
            scope: r,
            name: n,
            required: i,
            disabled: l,
            value: b,
            onValueChange: g,
            children: (0, a.jsx)(I, {
              asChild: !0,
              ...m,
              orientation: s,
              dir: h,
              loop: f,
              children: (0, a.jsx)(d.div, {
                role: 'radiogroup',
                'aria-required': i,
                'aria-orientation': s,
                'data-disabled': l ? '' : void 0,
                dir: h,
                ...v,
                ref: t
              })
            })
          });
        });
      et.displayName = V;
      var er = 'RadioGroupItem',
        en = n.forwardRef((e, t) => {
          let { __scopeRadioGroup: r, disabled: o, ...l } = e,
            s = ee(er, r),
            c = s.disabled || o,
            d = Q(r),
            f = Y(r),
            p = n.useRef(null),
            v = i(t, p),
            m = s.value === l.value,
            y = n.useRef(!1);
          return (
            n.useEffect(() => {
              let e = (e) => {
                  H.includes(e.key) && (y.current = !0);
                },
                t = () => (y.current = !1);
              return (
                document.addEventListener('keydown', e),
                document.addEventListener('keyup', t),
                () => {
                  document.removeEventListener('keydown', e),
                    document.removeEventListener('keyup', t);
                }
              );
            }, []),
            (0, a.jsx)(T, {
              asChild: !0,
              ...d,
              focusable: !c,
              active: m,
              children: (0, a.jsx)($, {
                disabled: c,
                required: s.required,
                checked: m,
                ...f,
                ...l,
                name: s.name,
                ref: v,
                onCheck: () => s.onValueChange(l.value),
                onKeyDown: u((e) => {
                  'Enter' === e.key && e.preventDefault();
                }),
                onFocus: u(l.onFocus, () => {
                  var e;
                  y.current &&
                    (null === (e = p.current) || void 0 === e || e.click());
                })
              })
            })
          );
        });
      en.displayName = er;
      var eo = n.forwardRef((e, t) => {
        let { __scopeRadioGroup: r, ...n } = e,
          o = Y(r);
        return (0, a.jsx)(W, { ...o, ...n, ref: t });
      });
      eo.displayName = 'RadioGroupIndicator';
      var eu = et,
        ei = en,
        ea = eo;
    }
  }
]);
