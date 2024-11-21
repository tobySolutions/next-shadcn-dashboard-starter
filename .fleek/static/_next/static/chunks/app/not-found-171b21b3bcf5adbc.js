(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [160],
  {
    73587: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 70618));
    },
    70618: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
          runtime: function () {
            return s;
          }
        });
      var r = n(57437),
        o = n(16463),
        a = n(50495);
      let s = 'edge';
      function u() {
        let e = (0, o.useRouter)();
        return (0, r.jsxs)('div', {
          className:
            'absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center',
          children: [
            (0, r.jsx)('span', {
              className:
                'bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent',
              children: '404'
            }),
            (0, r.jsx)('h2', {
              className: 'font-heading my-2 text-2xl font-bold',
              children: "Something's missing"
            }),
            (0, r.jsx)('p', {
              children:
                "Sorry, the page you are looking for doesn't exist or has been moved."
            }),
            (0, r.jsxs)('div', {
              className: 'mt-8 flex justify-center gap-2',
              children: [
                (0, r.jsx)(a.z, {
                  onClick: () => e.back(),
                  variant: 'default',
                  size: 'lg',
                  children: 'Go back'
                }),
                (0, r.jsx)(a.z, {
                  onClick: () => e.push('/dashboard'),
                  variant: 'ghost',
                  size: 'lg',
                  children: 'Back to Home'
                })
              ]
            })
          ]
        });
      }
    },
    50495: function (e, t, n) {
      'use strict';
      n.d(t, {
        d: function () {
          return i;
        },
        z: function () {
          return c;
        }
      });
      var r = n(57437),
        o = n(2265),
        a = n(63355),
        s = n(13027),
        u = n(37440);
      let i = (0, s.j)(
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
        c = o.forwardRef((e, t) => {
          let { className: n, variant: o, size: s, asChild: c = !1, ...d } = e,
            l = c ? a.g7 : 'button';
          return (0, r.jsx)(l, {
            className: (0, u.cn)(i({ variant: o, size: s, className: n })),
            ref: t,
            ...d
          });
        });
      c.displayName = 'Button';
    },
    37440: function (e, t, n) {
      'use strict';
      n.d(t, {
        cn: function () {
          return a;
        },
        t: function () {
          return u;
        },
        u: function () {
          return s;
        }
      });
      var r = n(44839),
        o = n(78077);
      function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, o.m)((0, r.W)(t));
      }
      function s(e) {
        if (!e) return !1;
        let t = e.data.current;
        return (
          (null == t ? void 0 : t.type) === 'Column' ||
          (null == t ? void 0 : t.type) === 'Task'
        );
      }
      function u(e) {
        var t, n;
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { decimals: o = 0, sizeType: a = 'normal' } = r;
        if (0 === e) return '0 Byte';
        let s = Math.floor(Math.log(e) / Math.log(1024));
        return ''
          .concat((e / Math.pow(1024, s)).toFixed(o), ' ')
          .concat(
            'accurate' === a
              ? null !== (t = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'][s]) &&
                void 0 !== t
                ? t
                : 'Bytest'
              : null !== (n = ['Bytes', 'KB', 'MB', 'GB', 'TB'][s]) &&
                void 0 !== n
              ? n
              : 'Bytes'
          );
      }
    },
    16463: function (e, t, n) {
      'use strict';
      var r = n(71169);
      n.o(r, 'useParams') &&
        n.d(t, {
          useParams: function () {
            return r.useParams;
          }
        }),
        n.o(r, 'usePathname') &&
          n.d(t, {
            usePathname: function () {
              return r.usePathname;
            }
          }),
        n.o(r, 'useRouter') &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            }
          }),
        n.o(r, 'useSearchParams') &&
          n.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            }
          });
    }
  },
  function (e) {
    e.O(0, [795, 971, 526, 744], function () {
      return e((e.s = 73587));
    }),
      (_N_E = e.O());
  }
]);
