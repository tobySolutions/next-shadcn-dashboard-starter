(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    40412: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 67938)),
        Promise.resolve().then(r.t.bind(r, 231, 23));
    },
    67938: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return x;
        }
      });
      var n = r(57437),
        i = r(50495),
        a = r(36661),
        l = r(83102),
        c = r(31014),
        u = r(98174),
        o = r(16463),
        s = r(2265),
        d = r(39343),
        f = r(27776),
        h = r(59772),
        m = r(82695);
      function y() {
        let e = (0, o.useSearchParams)().get('callbackUrl');
        return (0, n.jsxs)(i.z, {
          className: 'w-full',
          variant: 'outline',
          type: 'button',
          onClick: () =>
            (0, u.zB)('github', { callbackUrl: null != e ? e : '/dashboard' }),
          children: [
            (0, n.jsx)(m.P.gitHub, { className: 'mr-2 h-4 w-4' }),
            'Continue with Github'
          ]
        });
      }
      let p = h.Ry({
        email: h.Z_().email({ message: 'Enter a valid email address' })
      });
      function x() {
        let e = (0, o.useSearchParams)().get('callbackUrl'),
          [t, r] = (0, s.useTransition)(),
          h = (0, d.cI)({
            resolver: (0, c.F)(p),
            defaultValues: { email: 'demo@gmail.com' }
          }),
          m = async (t) => {
            console.log('submitting'),
              r(() => {
                (0, u.zB)('credentials', {
                  email: t.email,
                  callbackUrl: null != e ? e : '/dashboard'
                }),
                  f.Am.success('Signed In Successfully!');
              });
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(a.l0, {
              ...h,
              children: (0, n.jsxs)('form', {
                onSubmit: h.handleSubmit(m),
                className: 'w-full space-y-2',
                children: [
                  (0, n.jsx)(a.Wi, {
                    control: h.control,
                    name: 'email',
                    render: (e) => {
                      let { field: r } = e;
                      return (0, n.jsxs)(a.xJ, {
                        children: [
                          (0, n.jsx)(a.lX, { children: 'Email' }),
                          (0, n.jsx)(a.NI, {
                            children: (0, n.jsx)(l.I, {
                              type: 'email',
                              placeholder: 'Enter your email...',
                              disabled: t,
                              ...r
                            })
                          }),
                          (0, n.jsx)(a.zG, {})
                        ]
                      });
                    }
                  }),
                  (0, n.jsx)(i.z, {
                    disabled: t,
                    className: 'ml-auto w-full',
                    type: 'submit',
                    children: 'Continue With Email'
                  })
                ]
              })
            }),
            (0, n.jsxs)('div', {
              className: 'relative',
              children: [
                (0, n.jsx)('div', {
                  className: 'absolute inset-0 flex items-center',
                  children: (0, n.jsx)('span', { className: 'w-full border-t' })
                }),
                (0, n.jsx)('div', {
                  className: 'relative flex justify-center text-xs uppercase',
                  children: (0, n.jsx)('span', {
                    className: 'bg-background px-2 text-muted-foreground',
                    children: 'Or continue with'
                  })
                })
              ]
            }),
            (0, n.jsx)(y, {})
          ]
        });
      }
    },
    82695: function (e, t, r) {
      'use strict';
      r.d(t, {
        P: function () {
          return H;
        }
      });
      var n = r(57437),
        i = r(87140),
        a = r(45764),
        l = r(97905),
        c = r(74697),
        u = r(29715),
        o = r(3274),
        s = r(99116),
        d = r(70518),
        f = r(87592),
        h = r(90399),
        m = r(77671),
        y = r(22023),
        p = r(99827),
        x = r(31401),
        v = r(92496),
        k = r(18604),
        g = r(24258),
        Z = r(56935),
        b = r(45188),
        w = r(92513),
        M = r(36127),
        j = r(52022),
        N = r(71976),
        z = r(99687),
        C = r(64552),
        E = r(95095),
        B = r(92699),
        R = r(32271),
        F = r(59799),
        V = r(22468);
      let H = {
        dashboard: i.Z,
        logo: a.Z,
        login: l.Z,
        close: c.Z,
        product: u.Z,
        spinner: o.Z,
        kanban: s.Z,
        chevronLeft: d.Z,
        chevronRight: f.Z,
        trash: h.Z,
        employee: m.Z,
        post: y.Z,
        page: p.Z,
        userPen: x.Z,
        user2: v.Z,
        media: k.Z,
        settings: g.Z,
        billing: Z.Z,
        ellipsis: b.Z,
        add: w.Z,
        warning: M.Z,
        user: j.Z,
        arrowRight: N.Z,
        help: z.Z,
        pizza: C.Z,
        sun: E.Z,
        moon: B.Z,
        laptop: R.Z,
        gitHub: (e) => {
          let { ...t } = e;
          return (0, n.jsx)('svg', {
            'aria-hidden': 'true',
            focusable: 'false',
            'data-prefix': 'fab',
            'data-icon': 'github',
            role: 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 496 512',
            ...t,
            children: (0, n.jsx)('path', {
              fill: 'currentColor',
              d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
            })
          });
        },
        twitter: F.Z,
        check: V.Z
      };
    },
    50495: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return u;
        },
        z: function () {
          return o;
        }
      });
      var n = r(57437),
        i = r(2265),
        a = r(63355),
        l = r(13027),
        c = r(37440);
      let u = (0, l.j)(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          {
            variants: {
              variant: {
                default:
                  'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                destructive:
                  'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline:
                  'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
                secondary:
                  'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline'
              },
              size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                lg: 'h-10 rounded-md px-8',
                icon: 'h-9 w-9'
              }
            },
            defaultVariants: { variant: 'default', size: 'default' }
          }
        ),
        o = i.forwardRef((e, t) => {
          let { className: r, variant: i, size: l, asChild: o = !1, ...s } = e,
            d = o ? a.g7 : 'button';
          return (0, n.jsx)(d, {
            className: (0, c.cn)(u({ variant: i, size: l, className: r })),
            ref: t,
            ...s
          });
        });
      o.displayName = 'Button';
    },
    36661: function (e, t, r) {
      'use strict';
      r.d(t, {
        l0: function () {
          return d;
        },
        NI: function () {
          return v;
        },
        Wi: function () {
          return h;
        },
        xJ: function () {
          return p;
        },
        lX: function () {
          return x;
        },
        zG: function () {
          return k;
        }
      });
      var n = r(57437),
        i = r(2265),
        a = r(63355),
        l = r(39343),
        c = r(37440),
        u = r(38364);
      let o = (0, r(13027).j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        ),
        s = i.forwardRef((e, t) => {
          let { className: r, ...i } = e;
          return (0, n.jsx)(u.f, {
            ref: t,
            className: (0, c.cn)(o(), r),
            ...i
          });
        });
      s.displayName = u.f.displayName;
      let d = l.RV,
        f = i.createContext({}),
        h = (e) => {
          let { ...t } = e;
          return (0, n.jsx)(f.Provider, {
            value: { name: t.name },
            children: (0, n.jsx)(l.Qr, { ...t })
          });
        },
        m = () => {
          let e = i.useContext(f),
            t = i.useContext(y),
            { getFieldState: r, formState: n } = (0, l.Gc)(),
            a = r(e.name, n);
          if (!e) throw Error('useFormField should be used within <FormField>');
          let { id: c } = t;
          return {
            id: c,
            name: e.name,
            formItemId: ''.concat(c, '-form-item'),
            formDescriptionId: ''.concat(c, '-form-item-description'),
            formMessageId: ''.concat(c, '-form-item-message'),
            ...a
          };
        },
        y = i.createContext({}),
        p = i.forwardRef((e, t) => {
          let { className: r, ...a } = e,
            l = i.useId();
          return (0, n.jsx)(y.Provider, {
            value: { id: l },
            children: (0, n.jsx)('div', {
              ref: t,
              className: (0, c.cn)('mb-2 space-y-2 lg:mb-0', r),
              ...a
            })
          });
        });
      p.displayName = 'FormItem';
      let x = i.forwardRef((e, t) => {
        let { className: r, ...i } = e,
          { error: a, formItemId: l } = m();
        return (0, n.jsx)(s, {
          ref: t,
          className: (0, c.cn)(a && 'text-destructive', r),
          htmlFor: l,
          ...i
        });
      });
      x.displayName = 'FormLabel';
      let v = i.forwardRef((e, t) => {
        let { ...r } = e,
          {
            error: i,
            formItemId: l,
            formDescriptionId: c,
            formMessageId: u
          } = m();
        return (0, n.jsx)(a.g7, {
          ref: t,
          id: l,
          'aria-describedby': i ? ''.concat(c, ' ').concat(u) : ''.concat(c),
          'aria-invalid': !!i,
          ...r
        });
      });
      (v.displayName = 'FormControl'),
        (i.forwardRef((e, t) => {
          let { className: r, ...i } = e,
            { formDescriptionId: a } = m();
          return (0, n.jsx)('p', {
            ref: t,
            id: a,
            className: (0, c.cn)('text-[0.8rem] text-muted-foreground', r),
            ...i
          });
        }).displayName = 'FormDescription');
      let k = i.forwardRef((e, t) => {
        let { className: r, children: i, ...a } = e,
          { error: l, formMessageId: u } = m(),
          o = l ? String(null == l ? void 0 : l.message) : i;
        return o
          ? (0, n.jsx)('p', {
              ref: t,
              id: u,
              className: (0, c.cn)(
                'text-[0.8rem] font-medium text-destructive',
                r
              ),
              ...a,
              children: o
            })
          : null;
      });
      k.displayName = 'FormMessage';
    },
    83102: function (e, t, r) {
      'use strict';
      r.d(t, {
        I: function () {
          return l;
        }
      });
      var n = r(57437),
        i = r(2265),
        a = r(37440);
      let l = i.forwardRef((e, t) => {
        let { className: r, type: i, ...l } = e;
        return (0, n.jsx)('input', {
          type: i,
          className: (0, a.cn)(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            r
          ),
          ref: t,
          ...l
        });
      });
      l.displayName = 'Input';
    },
    37440: function (e, t, r) {
      'use strict';
      r.d(t, {
        cn: function () {
          return a;
        },
        t: function () {
          return c;
        },
        u: function () {
          return l;
        }
      });
      var n = r(44839),
        i = r(78077);
      function a() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, i.m)((0, n.W)(t));
      }
      function l(e) {
        if (!e) return !1;
        let t = e.data.current;
        return (
          (null == t ? void 0 : t.type) === 'Column' ||
          (null == t ? void 0 : t.type) === 'Task'
        );
      }
      function c(e) {
        var t, r;
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { decimals: i = 0, sizeType: a = 'normal' } = n;
        if (0 === e) return '0 Byte';
        let l = Math.floor(Math.log(e) / Math.log(1024));
        return ''
          .concat((e / Math.pow(1024, l)).toFixed(i), ' ')
          .concat(
            'accurate' === a
              ? null !== (t = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'][l]) &&
                void 0 !== t
                ? t
                : 'Bytest'
              : null !== (r = ['Bytes', 'KB', 'MB', 'GB', 'TB'][l]) &&
                void 0 !== r
              ? r
              : 'Bytes'
          );
      }
    },
    78030: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return u;
        }
      });
      var n = r(2265);
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let i = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        a = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(' ');
        };
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var l = {
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
       */ let c = (0, n.forwardRef)((e, t) => {
          let {
            color: r = 'currentColor',
            size: i = 24,
            strokeWidth: c = 2,
            absoluteStrokeWidth: u,
            className: o = '',
            children: s,
            iconNode: d,
            ...f
          } = e;
          return (0, n.createElement)(
            'svg',
            {
              ref: t,
              ...l,
              width: i,
              height: i,
              stroke: r,
              strokeWidth: u ? (24 * Number(c)) / Number(i) : c,
              className: a('lucide', o),
              ...f
            },
            [
              ...d.map((e) => {
                let [t, r] = e;
                return (0, n.createElement)(t, r);
              }),
              ...(Array.isArray(s) ? s : [s])
            ]
          );
        }),
        u = (e, t) => {
          let r = (0, n.forwardRef)((r, l) => {
            let { className: u, ...o } = r;
            return (0, n.createElement)(c, {
              ref: l,
              iconNode: t,
              className: a('lucide-'.concat(i(e)), u),
              ...o
            });
          });
          return (r.displayName = ''.concat(e)), r;
        };
    },
    71976: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('ArrowRight', [
        ['path', { d: 'M5 12h14', key: '1ays0h' }],
        ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }]
      ]);
    },
    99687: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('CircleHelp', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
        ['path', { d: 'M12 17h.01', key: 'p32p05' }]
      ]);
    },
    92496: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('CircleUserRound', [
        ['path', { d: 'M18 20a6 6 0 0 0-12 0', key: '1qehca' }],
        ['circle', { cx: '12', cy: '10', r: '4', key: '1h16sb' }],
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }]
      ]);
    },
    99116: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('CircuitBoard', [
        [
          'rect',
          { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }
        ],
        ['path', { d: 'M11 9h4a2 2 0 0 0 2-2V3', key: '1ve2rv' }],
        ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
        ['path', { d: 'M7 21v-4a2 2 0 0 1 2-2h4', key: '1fwkro' }],
        ['circle', { cx: '15', cy: '15', r: '2', key: '3i40o0' }]
      ]);
    },
    45764: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('Command', [
        [
          'path',
          {
            d: 'M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3',
            key: '11bfej'
          }
        ]
      ]);
    },
    56935: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('CreditCard', [
        [
          'rect',
          { width: '20', height: '14', x: '2', y: '5', rx: '2', key: 'ynyp8z' }
        ],
        ['line', { x1: '2', x2: '22', y1: '10', y2: '10', key: '1b3vmo' }]
      ]);
    },
    45188: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('EllipsisVertical', [
        ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
        ['circle', { cx: '12', cy: '5', r: '1', key: 'gxeob9' }],
        ['circle', { cx: '12', cy: '19', r: '1', key: 'lyex9k' }]
      ]);
    },
    22023: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('FileText', [
        [
          'path',
          {
            d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
            key: '1rqfz7'
          }
        ],
        ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
        ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
        ['path', { d: 'M16 13H8', key: 't4e002' }],
        ['path', { d: 'M16 17H8', key: 'z1uh3a' }]
      ]);
    },
    99827: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('File', [
        [
          'path',
          {
            d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
            key: '1rqfz7'
          }
        ],
        ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }]
      ]);
    },
    18604: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('Image', [
        [
          'rect',
          {
            width: '18',
            height: '18',
            x: '3',
            y: '3',
            rx: '2',
            ry: '2',
            key: '1m3agn'
          }
        ],
        ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
        [
          'path',
          { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21', key: '1xmnt7' }
        ]
      ]);
    },
    32271: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('Laptop', [
        [
          'path',
          {
            d: 'M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16',
            key: 'tarvll'
          }
        ]
      ]);
    },
    87140: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('LayoutDashboard', [
        [
          'rect',
          { width: '7', height: '9', x: '3', y: '3', rx: '1', key: '10lvy0' }
        ],
        [
          'rect',
          { width: '7', height: '5', x: '14', y: '3', rx: '1', key: '16une8' }
        ],
        [
          'rect',
          { width: '7', height: '9', x: '14', y: '12', rx: '1', key: '1hutg5' }
        ],
        [
          'rect',
          { width: '7', height: '5', x: '3', y: '16', rx: '1', key: 'ldoo1y' }
        ]
      ]);
    },
    3274: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('LoaderCircle', [
        ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]
      ]);
    },
    97905: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('LogIn', [
        [
          'path',
          { d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4', key: 'u53s6r' }
        ],
        ['polyline', { points: '10 17 15 12 10 7', key: '1ail0h' }],
        ['line', { x1: '15', x2: '3', y1: '12', y2: '12', key: 'v6grx8' }]
      ]);
    },
    92699: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('Moon', [
        ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }]
      ]);
    },
    64552: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('Pizza', [
        ['path', { d: 'M15 11h.01', key: 'rns66s' }],
        ['path', { d: 'M11 15h.01', key: 'k85uqc' }],
        ['path', { d: 'M16 16h.01', key: '1f9h7w' }],
        ['path', { d: 'm2 16 20 6-6-20A20 20 0 0 0 2 16', key: 'e4slt2' }],
        [
          'path',
          { d: 'M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4', key: 'rerf8f' }
        ]
      ]);
    },
    92513: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('Plus', [
        ['path', { d: 'M5 12h14', key: '1ays0h' }],
        ['path', { d: 'M12 5v14', key: 's699le' }]
      ]);
    },
    24258: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('Settings', [
        [
          'path',
          {
            d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
            key: '1qme2f'
          }
        ],
        ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }]
      ]);
    },
    29715: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('ShoppingBag', [
        [
          'path',
          {
            d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z',
            key: 'hou9p0'
          }
        ],
        ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
        ['path', { d: 'M16 10a4 4 0 0 1-8 0', key: '1ltviw' }]
      ]);
    },
    95095: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('SunMedium', [
        ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
        ['path', { d: 'M12 3v1', key: '1asbbs' }],
        ['path', { d: 'M12 20v1', key: '1wcdkc' }],
        ['path', { d: 'M3 12h1', key: 'lp3yf2' }],
        ['path', { d: 'M20 12h1', key: '1vloll' }],
        ['path', { d: 'm18.364 5.636-.707.707', key: '1hakh0' }],
        ['path', { d: 'm6.343 17.657-.707.707', key: '18m9nf' }],
        ['path', { d: 'm5.636 5.636.707.707', key: '1xv1c5' }],
        ['path', { d: 'm17.657 17.657.707.707', key: 'vl76zb' }]
      ]);
    },
    36127: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('TriangleAlert', [
        [
          'path',
          {
            d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
            key: 'wmoenq'
          }
        ],
        ['path', { d: 'M12 9v4', key: 'juzpu7' }],
        ['path', { d: 'M12 17h.01', key: 'p32p05' }]
      ]);
    },
    59799: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('Twitter', [
        [
          'path',
          {
            d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
            key: 'pff0z6'
          }
        ]
      ]);
    },
    31401: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('UserPen', [
        ['path', { d: 'M11.5 15H7a4 4 0 0 0-4 4v2', key: '15lzij' }],
        [
          'path',
          {
            d: 'M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z',
            key: '1817ys'
          }
        ],
        ['circle', { cx: '10', cy: '7', r: '4', key: 'e45bow' }]
      ]);
    },
    77671: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('UserRoundX', [
        ['path', { d: 'M2 21a8 8 0 0 1 11.873-7', key: '74fkxq' }],
        ['circle', { cx: '10', cy: '8', r: '5', key: 'o932ke' }],
        ['path', { d: 'm17 17 5 5', key: 'p7ous7' }],
        ['path', { d: 'm22 17-5 5', key: 'gqnmv0' }]
      ]);
    },
    52022: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('User', [
        [
          'path',
          { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }
        ],
        ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }]
      ]);
    },
    74697: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return n;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(78030).Z)('X', [
        ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
        ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }]
      ]);
    },
    22988: function (e, t, r) {
      'use strict';
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
      r.d(t, {
        Z: function () {
          return n;
        }
      });
    },
    1584: function (e, t, r) {
      'use strict';
      r.d(t, {
        F: function () {
          return i;
        },
        e: function () {
          return a;
        }
      });
      var n = r(2265);
      function i(...e) {
        return (t) =>
          e.forEach((e) => {
            'function' == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function a(...e) {
        return (0, n.useCallback)(i(...e), e);
      }
    },
    18676: function (e, t, r) {
      'use strict';
      r.d(t, {
        WV: function () {
          return d;
        },
        jH: function () {
          return f;
        }
      });
      var n = r(22988),
        i = r(2265),
        a = r(54887),
        l = r(1584);
      let c = (0, i.forwardRef)((e, t) => {
        let { children: r, ...a } = e,
          l = i.Children.toArray(r),
          c = l.find(s);
        if (c) {
          let e = c.props.children,
            r = l.map((t) =>
              t !== c
                ? t
                : i.Children.count(e) > 1
                ? i.Children.only(null)
                : (0, i.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, i.createElement)(
            u,
            (0, n.Z)({}, a, { ref: t }),
            (0, i.isValidElement)(e) ? (0, i.cloneElement)(e, void 0, r) : null
          );
        }
        return (0, i.createElement)(u, (0, n.Z)({}, a, { ref: t }), r);
      });
      c.displayName = 'Slot';
      let u = (0, i.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        return (0, i.isValidElement)(r)
          ? (0, i.cloneElement)(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let i = e[n],
                    a = t[n];
                  /^on[A-Z]/.test(n)
                    ? i && a
                      ? (r[n] = (...e) => {
                          a(...e), i(...e);
                        })
                      : i && (r[n] = i)
                    : 'style' === n
                    ? (r[n] = { ...i, ...a })
                    : 'className' === n &&
                      (r[n] = [i, a].filter(Boolean).join(' '));
                }
                return { ...e, ...r };
              })(n, r.props),
              ref: t ? (0, l.F)(t, r.ref) : r.ref
            })
          : i.Children.count(r) > 1
          ? i.Children.only(null)
          : null;
      });
      u.displayName = 'SlotClone';
      let o = ({ children: e }) => (0, i.createElement)(i.Fragment, null, e);
      function s(e) {
        return (0, i.isValidElement)(e) && e.type === o;
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
        let r = (0, i.forwardRef)((e, r) => {
          let { asChild: a, ...l } = e,
            u = a ? c : t;
          return (
            (0, i.useEffect)(() => {
              window[Symbol.for('radix-ui')] = !0;
            }, []),
            (0, i.createElement)(u, (0, n.Z)({}, l, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
      }, {});
      function f(e, t) {
        e && (0, a.flushSync)(() => e.dispatchEvent(t));
      }
    }
  },
  function (e) {
    e.O(0, [795, 336, 134, 776, 174, 971, 526, 744], function () {
      return e((e.s = 40412));
    }),
      (_N_E = e.O());
  }
]);
