(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [663],
  {
    45965: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 62148)),
        Promise.resolve().then(a.bind(a, 23573)),
        Promise.resolve().then(a.bind(a, 8660)),
        Promise.resolve().then(a.bind(a, 34157)),
        Promise.resolve().then(a.bind(a, 47823)),
        Promise.resolve().then(a.bind(a, 89229)),
        Promise.resolve().then(a.bind(a, 64344)),
        Promise.resolve().then(a.bind(a, 35949));
    },
    62148: function (e, t, a) {
      'use strict';
      a.d(t, {
        Breadcrumbs: function () {
          return x;
        }
      });
      var r = a(57437),
        n = a(2265),
        i = a(4867),
        s = a(63355),
        d = a(37440);
      let l = n.forwardRef((e, t) => {
        let { ...a } = e;
        return (0, r.jsx)('nav', { ref: t, 'aria-label': 'breadcrumb', ...a });
      });
      l.displayName = 'Breadcrumb';
      let o = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('ol', {
          ref: t,
          className: (0, d.cn)(
            'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
            a
          ),
          ...n
        });
      });
      o.displayName = 'BreadcrumbList';
      let c = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('li', {
          ref: t,
          className: (0, d.cn)('inline-flex items-center gap-1.5', a),
          ...n
        });
      });
      c.displayName = 'BreadcrumbItem';
      let u = n.forwardRef((e, t) => {
        let { asChild: a, className: n, ...i } = e,
          l = a ? s.g7 : 'a';
        return (0, r.jsx)(l, {
          ref: t,
          className: (0, d.cn)('transition-colors hover:text-foreground', n),
          ...i
        });
      });
      u.displayName = 'BreadcrumbLink';
      let f = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('span', {
          ref: t,
          role: 'link',
          'aria-disabled': 'true',
          'aria-current': 'page',
          className: (0, d.cn)('font-normal text-foreground', a),
          ...n
        });
      });
      f.displayName = 'BreadcrumbPage';
      let m = (e) => {
        let { children: t, className: a, ...n } = e;
        return (0, r.jsx)('li', {
          role: 'presentation',
          'aria-hidden': 'true',
          className: (0, d.cn)('[&>svg]:size-3.5', a),
          ...n,
          children: null != t ? t : (0, r.jsx)(i.XCv, {})
        });
      };
      m.displayName = 'BreadcrumbSeparator';
      var p = a(16463);
      let b = {
        '/dashboard': [{ title: 'Dashboard', link: '/dashboard' }],
        '/dashboard/employee': [
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'Employee', link: '/dashboard/employee' }
        ],
        '/dashboard/product': [
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'Product', link: '/dashboard/product' }
        ]
      };
      var h = a(30357);
      function x() {
        let e = (function () {
          let e = (0, p.usePathname)();
          return (0, n.useMemo)(() => {
            if (b[e]) return b[e];
            let t = e.split('/').filter(Boolean);
            return t.map((e, a) => {
              let r = '/'.concat(t.slice(0, a + 1).join('/'));
              return { title: e.charAt(0).toUpperCase() + e.slice(1), link: r };
            });
          }, [e]);
        })();
        return 0 === e.length
          ? null
          : (0, r.jsx)(l, {
              children: (0, r.jsx)(o, {
                children: e.map((t, a) =>
                  (0, r.jsxs)(
                    n.Fragment,
                    {
                      children: [
                        a !== e.length - 1 &&
                          (0, r.jsx)(c, {
                            className: 'hidden md:block',
                            children: (0, r.jsx)(u, {
                              href: t.link,
                              children: t.title
                            })
                          }),
                        a < e.length - 1 &&
                          (0, r.jsx)(m, {
                            className: 'hidden md:block',
                            children: (0, r.jsx)(h.Z, {})
                          }),
                        a === e.length - 1 &&
                          (0, r.jsx)(f, { children: t.title })
                      ]
                    },
                    t.title
                  )
                )
              })
            });
      }
    },
    82695: function (e, t, a) {
      'use strict';
      a.d(t, {
        P: function () {
          return P;
        }
      });
      var r = a(57437),
        n = a(87140),
        i = a(45764),
        s = a(97905),
        d = a(74697),
        l = a(29715),
        o = a(3274),
        c = a(99116),
        u = a(70518),
        f = a(87592),
        m = a(90399),
        p = a(77671),
        b = a(22023),
        h = a(99827),
        x = a(31401),
        g = a(92496),
        v = a(18604),
        j = a(24258),
        w = a(56935),
        N = a(45188),
        y = a(92513),
        k = a(36127),
        S = a(52022),
        z = a(71976),
        R = a(99687),
        M = a(64552),
        C = a(95095),
        B = a(92699),
        Z = a(32271),
        A = a(59799),
        _ = a(22468);
      let P = {
        dashboard: n.Z,
        logo: i.Z,
        login: s.Z,
        close: d.Z,
        product: l.Z,
        spinner: o.Z,
        kanban: c.Z,
        chevronLeft: u.Z,
        chevronRight: f.Z,
        trash: m.Z,
        employee: p.Z,
        post: b.Z,
        page: h.Z,
        userPen: x.Z,
        user2: g.Z,
        media: v.Z,
        settings: j.Z,
        billing: w.Z,
        ellipsis: N.Z,
        add: y.Z,
        warning: k.Z,
        user: S.Z,
        arrowRight: z.Z,
        help: R.Z,
        pizza: M.Z,
        sun: C.Z,
        moon: B.Z,
        laptop: Z.Z,
        gitHub: (e) => {
          let { ...t } = e;
          return (0, r.jsx)('svg', {
            'aria-hidden': 'true',
            focusable: 'false',
            'data-prefix': 'fab',
            'data-icon': 'github',
            role: 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 496 512',
            ...t,
            children: (0, r.jsx)('path', {
              fill: 'currentColor',
              d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
            })
          });
        },
        twitter: A.Z,
        check: _.Z
      };
    },
    23573: function (e, t, a) {
      'use strict';
      a.d(t, {
        default: function () {
          return f;
        }
      });
      var r = a(57437),
        n = a(88563),
        i = a(98665),
        s = a(16463),
        d = a(2265);
      let l = d.forwardRef((e, t) => {
        var a;
        let { action: n, active: i, currentRootActionId: s } = e,
          l = d.useMemo(() => {
            if (!s) return n.ancestors;
            let e = n.ancestors.findIndex((e) => e.id === s);
            return n.ancestors.slice(e + 1);
          }, [n.ancestors, s]);
        return (0, r.jsxs)('div', {
          ref: t,
          className:
            'relative z-10 flex cursor-pointer items-center justify-between px-4 py-3',
          children: [
            i &&
              (0, r.jsx)('div', {
                id: 'kbar-result-item',
                className:
                  'absolute inset-0 !z-[-1] border-l-4 border-sidebar-primary bg-sidebar-accent'
              }),
            (0, r.jsxs)('div', {
              className: 'relative z-10 flex items-center gap-2',
              children: [
                n.icon && n.icon,
                (0, r.jsxs)('div', {
                  className: 'flex flex-col',
                  children: [
                    (0, r.jsxs)('div', {
                      children: [
                        l.length > 0 &&
                          l.map((e) =>
                            (0, r.jsxs)(
                              d.Fragment,
                              {
                                children: [
                                  (0, r.jsx)('span', {
                                    className: 'mr-2 opacity-50',
                                    children: e.name
                                  }),
                                  (0, r.jsx)('span', {
                                    className: 'mr-2',
                                    children: '›'
                                  })
                                ]
                              },
                              e.id
                            )
                          ),
                        (0, r.jsx)('span', { children: n.name })
                      ]
                    }),
                    n.subtitle &&
                      (0, r.jsx)('span', {
                        className: 'text-sm text-muted-foreground',
                        children: n.subtitle
                      })
                  ]
                })
              ]
            }),
            (null === (a = n.shortcut) || void 0 === a ? void 0 : a.length)
              ? (0, r.jsx)('div', {
                  className: 'relative z-10 grid grid-flow-col gap-1',
                  children: n.shortcut.map((e, t) =>
                    (0, r.jsx)(
                      'kbd',
                      {
                        className:
                          'flex items-center gap-1 rounded-md border px-1.5 py-1 text-xs font-medium  shadow',
                        children: e
                      },
                      e + t
                    )
                  )
                })
              : null
          ]
        });
      });
      function o() {
        let { results: e, rootActionId: t } = (0, i.useMatches)();
        return (0, r.jsx)(i.KBarResults, {
          items: e,
          onRender: (e) => {
            let { item: a, active: n } = e;
            return 'string' == typeof a
              ? (0, r.jsx)('div', {
                  className:
                    'px-4 py-2 text-sm uppercase text-primary-foreground opacity-50',
                  children: a
                })
              : (0, r.jsx)(l, {
                  action: a,
                  active: n,
                  currentRootActionId: null != t ? t : ''
                });
          }
        });
      }
      l.displayName = 'KBarResultItem';
      var c = a(85169),
        u = () => {
          let { theme: e, setTheme: t } = (0, c.F)();
          (0, i.useRegisterActions)(
            [
              {
                id: 'toggleTheme',
                name: 'Toggle Theme',
                shortcut: ['t', 't'],
                section: 'Theme',
                perform: () => {
                  t('light' === e ? 'dark' : 'light');
                }
              },
              {
                id: 'setLightTheme',
                name: 'Set Light Theme',
                section: 'Theme',
                perform: () => t('light')
              },
              {
                id: 'setDarkTheme',
                name: 'Set Dark Theme',
                section: 'Theme',
                perform: () => t('dark')
              }
            ],
            [e]
          );
        };
      function f(e) {
        let { children: t } = e,
          a = (0, s.useRouter)(),
          l = (e) => {
            a.push(e);
          },
          o = (0, d.useMemo)(
            () =>
              n.t.flatMap((e) => {
                var t, a;
                let r =
                    '#' !== e.url
                      ? {
                          id: ''.concat(e.title.toLowerCase(), 'Action'),
                          name: e.title,
                          shortcut: e.shortcut,
                          keywords: e.title.toLowerCase(),
                          section: 'Navigation',
                          subtitle: 'Go to '.concat(e.title),
                          perform: () => l(e.url)
                        }
                      : null,
                  n =
                    null !==
                      (a =
                        null === (t = e.items) || void 0 === t
                          ? void 0
                          : t.map((t) => ({
                              id: ''.concat(t.title.toLowerCase(), 'Action'),
                              name: t.title,
                              shortcut: t.shortcut,
                              keywords: t.title.toLowerCase(),
                              section: e.title,
                              subtitle: 'Go to '.concat(t.title),
                              perform: () => l(t.url)
                            }))) && void 0 !== a
                      ? a
                      : [];
                return r ? [r, ...n] : n;
              }),
            []
          );
        return (0, r.jsx)(i.KBarProvider, {
          actions: o,
          children: (0, r.jsx)(m, { children: t })
        });
      }
      let m = (e) => {
        let { children: t } = e;
        return (
          u(),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i.KBarPortal, {
                children: (0, r.jsx)(i.KBarPositioner, {
                  className:
                    'scrollbar-hide fixed inset-0 z-[99999] bg-black/80  !p-0 backdrop-blur-sm',
                  children: (0, r.jsx)(i.KBarAnimator, {
                    className:
                      'relative !mt-64 w-full max-w-[600px] !-translate-y-12 overflow-hidden rounded-lg border bg-background text-foreground shadow-lg',
                    children: (0, r.jsxs)('div', {
                      className: 'bg-background',
                      children: [
                        (0, r.jsx)('div', {
                          className: 'border-x-0 border-b-2',
                          children: (0, r.jsx)(i.KBarSearch, {
                            className:
                              'w-full border-none bg-background px-6 py-4 text-lg outline-none focus:outline-none focus:ring-0 focus:ring-offset-0'
                          })
                        }),
                        (0, r.jsx)(o, {})
                      ]
                    })
                  })
                })
              }),
              t
            ]
          })
        );
      };
    },
    34157: function (e, t, a) {
      'use strict';
      a.d(t, {
        default: function () {
          return l;
        }
      });
      var r = a(57437),
        n = a(4867),
        i = a(85169),
        s = a(50495),
        d = a(46910);
      function l(e) {
        let {} = e,
          { setTheme: t } = (0, i.F)();
        return (0, r.jsxs)(d.h_, {
          children: [
            (0, r.jsx)(d.$F, {
              asChild: !0,
              children: (0, r.jsxs)(s.z, {
                variant: 'outline',
                size: 'icon',
                children: [
                  (0, r.jsx)(n.NWY, {
                    className:
                      'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
                  }),
                  (0, r.jsx)(n.kLh, {
                    className:
                      'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
                  }),
                  (0, r.jsx)('span', {
                    className: 'sr-only',
                    children: 'Toggle theme'
                  })
                ]
              })
            }),
            (0, r.jsxs)(d.AW, {
              align: 'end',
              children: [
                (0, r.jsx)(d.Xi, {
                  onClick: () => t('light'),
                  children: 'Light'
                }),
                (0, r.jsx)(d.Xi, {
                  onClick: () => t('dark'),
                  children: 'Dark'
                }),
                (0, r.jsx)(d.Xi, {
                  onClick: () => t('system'),
                  children: 'System'
                })
              ]
            })
          ]
        });
      }
    },
    8660: function (e, t, a) {
      'use strict';
      a.d(t, {
        default: function () {
          return k;
        }
      });
      var r = a(57437),
        n = a(41647),
        i = a(56336);
      let s = i.fC,
        d = i.wy,
        l = i.Fw;
      var o = a(46910),
        c = a(35949),
        u = a(88563),
        f = a(97023),
        m = a(87592),
        p = a(1282),
        b = a(53541),
        h = a(56935),
        x = a(6600),
        g = a(89896),
        v = a(98174),
        j = a(87138),
        w = a(16463);
      a(2265);
      var N = a(82695);
      let y = { name: 'Acme Inc', logo: f.Z, plan: 'Enterprise' };
      function k() {
        var e, t, a, i, f, k, S, z, R, M, C, B, Z, A;
        let { data: _ } = (0, v.kP)(),
          P = (0, w.usePathname)();
        return (0, r.jsxs)(c.Sidebar, {
          collapsible: 'icon',
          children: [
            (0, r.jsx)(c.SidebarHeader, {
              children: (0, r.jsxs)('div', {
                className: 'flex gap-2 py-2 text-sidebar-accent-foreground ',
                children: [
                  (0, r.jsx)('div', {
                    className:
                      'flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground',
                    children: (0, r.jsx)(y.logo, { className: 'size-4' })
                  }),
                  (0, r.jsxs)('div', {
                    className: 'grid flex-1 text-left text-sm leading-tight',
                    children: [
                      (0, r.jsx)('span', {
                        className: 'truncate font-semibold',
                        children: y.name
                      }),
                      (0, r.jsx)('span', {
                        className: 'truncate text-xs',
                        children: y.plan
                      })
                    ]
                  })
                ]
              })
            }),
            (0, r.jsx)(c.SidebarContent, {
              className: 'overflow-x-hidden',
              children: (0, r.jsxs)(c.SidebarGroup, {
                children: [
                  (0, r.jsx)(c.SidebarGroupLabel, { children: 'Overview' }),
                  (0, r.jsx)(c.SidebarMenu, {
                    children: u.t.map((e) => {
                      var t, a;
                      let n = e.icon ? N.P[e.icon] : N.P.logo;
                      return (null == e ? void 0 : e.items) &&
                        (null == e
                          ? void 0
                          : null === (t = e.items) || void 0 === t
                          ? void 0
                          : t.length) > 0
                        ? (0, r.jsx)(
                            s,
                            {
                              asChild: !0,
                              defaultOpen: e.isActive,
                              className: 'group/collapsible',
                              children: (0, r.jsxs)(c.SidebarMenuItem, {
                                children: [
                                  (0, r.jsx)(d, {
                                    asChild: !0,
                                    children: (0, r.jsxs)(c.SidebarMenuButton, {
                                      tooltip: e.title,
                                      isActive: P === e.url,
                                      children: [
                                        e.icon && (0, r.jsx)(n, {}),
                                        (0, r.jsx)('span', {
                                          children: e.title
                                        }),
                                        (0, r.jsx)(m.Z, {
                                          className:
                                            'ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90'
                                        })
                                      ]
                                    })
                                  }),
                                  (0, r.jsx)(l, {
                                    children: (0, r.jsx)(c.SidebarMenuSub, {
                                      children:
                                        null === (a = e.items) || void 0 === a
                                          ? void 0
                                          : a.map((e) =>
                                              (0, r.jsx)(
                                                c.SidebarMenuSubItem,
                                                {
                                                  children: (0, r.jsx)(
                                                    c.SidebarMenuSubButton,
                                                    {
                                                      asChild: !0,
                                                      isActive: P === e.url,
                                                      children: (0, r.jsx)(
                                                        j.default,
                                                        {
                                                          href: e.url,
                                                          children: (0, r.jsx)(
                                                            'span',
                                                            {
                                                              children: e.title
                                                            }
                                                          )
                                                        }
                                                      )
                                                    }
                                                  )
                                                },
                                                e.title
                                              )
                                            )
                                    })
                                  })
                                ]
                              })
                            },
                            e.title
                          )
                        : (0, r.jsx)(
                            c.SidebarMenuItem,
                            {
                              children: (0, r.jsx)(c.SidebarMenuButton, {
                                asChild: !0,
                                tooltip: e.title,
                                isActive: P === e.url,
                                children: (0, r.jsxs)(j.default, {
                                  href: e.url,
                                  children: [
                                    (0, r.jsx)(n, {}),
                                    (0, r.jsx)('span', { children: e.title })
                                  ]
                                })
                              })
                            },
                            e.title
                          );
                    })
                  })
                ]
              })
            }),
            (0, r.jsx)(c.SidebarFooter, {
              children: (0, r.jsx)(c.SidebarMenu, {
                children: (0, r.jsx)(c.SidebarMenuItem, {
                  children: (0, r.jsxs)(o.h_, {
                    children: [
                      (0, r.jsx)(o.$F, {
                        asChild: !0,
                        children: (0, r.jsxs)(c.SidebarMenuButton, {
                          size: 'lg',
                          className:
                            'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground',
                          children: [
                            (0, r.jsxs)(n.Avatar, {
                              className: 'h-8 w-8 rounded-lg',
                              children: [
                                (0, r.jsx)(n.AvatarImage, {
                                  src:
                                    (null == _
                                      ? void 0
                                      : null === (e = _.user) || void 0 === e
                                      ? void 0
                                      : e.image) || '',
                                  alt:
                                    (null == _
                                      ? void 0
                                      : null === (t = _.user) || void 0 === t
                                      ? void 0
                                      : t.name) || ''
                                }),
                                (0, r.jsx)(n.AvatarFallback, {
                                  className: 'rounded-lg',
                                  children:
                                    (null == _
                                      ? void 0
                                      : null === (f = _.user) || void 0 === f
                                      ? void 0
                                      : null === (i = f.name) || void 0 === i
                                      ? void 0
                                      : null === (a = i.slice(0, 2)) ||
                                        void 0 === a
                                      ? void 0
                                      : a.toUpperCase()) || 'CN'
                                })
                              ]
                            }),
                            (0, r.jsxs)('div', {
                              className:
                                'grid flex-1 text-left text-sm leading-tight',
                              children: [
                                (0, r.jsx)('span', {
                                  className: 'truncate font-semibold',
                                  children:
                                    (null == _
                                      ? void 0
                                      : null === (k = _.user) || void 0 === k
                                      ? void 0
                                      : k.name) || ''
                                }),
                                (0, r.jsx)('span', {
                                  className: 'truncate text-xs',
                                  children:
                                    (null == _
                                      ? void 0
                                      : null === (S = _.user) || void 0 === S
                                      ? void 0
                                      : S.email) || ''
                                })
                              ]
                            }),
                            (0, r.jsx)(p.Z, { className: 'ml-auto size-4' })
                          ]
                        })
                      }),
                      (0, r.jsxs)(o.AW, {
                        className:
                          'w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg',
                        side: 'bottom',
                        align: 'end',
                        sideOffset: 4,
                        children: [
                          (0, r.jsx)(o.Ju, {
                            className: 'p-0 font-normal',
                            children: (0, r.jsxs)('div', {
                              className:
                                'flex items-center gap-2 px-1 py-1.5 text-left text-sm',
                              children: [
                                (0, r.jsxs)(n.Avatar, {
                                  className: 'h-8 w-8 rounded-lg',
                                  children: [
                                    (0, r.jsx)(n.AvatarImage, {
                                      src:
                                        (null == _
                                          ? void 0
                                          : null === (z = _.user) ||
                                            void 0 === z
                                          ? void 0
                                          : z.image) || '',
                                      alt:
                                        (null == _
                                          ? void 0
                                          : null === (R = _.user) ||
                                            void 0 === R
                                          ? void 0
                                          : R.name) || ''
                                    }),
                                    (0, r.jsx)(n.AvatarFallback, {
                                      className: 'rounded-lg',
                                      children:
                                        (null == _
                                          ? void 0
                                          : null === (B = _.user) ||
                                            void 0 === B
                                          ? void 0
                                          : null === (C = B.name) ||
                                            void 0 === C
                                          ? void 0
                                          : null === (M = C.slice(0, 2)) ||
                                            void 0 === M
                                          ? void 0
                                          : M.toUpperCase()) || 'CN'
                                    })
                                  ]
                                }),
                                (0, r.jsxs)('div', {
                                  className:
                                    'grid flex-1 text-left text-sm leading-tight',
                                  children: [
                                    (0, r.jsx)('span', {
                                      className: 'truncate font-semibold',
                                      children:
                                        (null == _
                                          ? void 0
                                          : null === (Z = _.user) ||
                                            void 0 === Z
                                          ? void 0
                                          : Z.name) || ''
                                    }),
                                    (0, r.jsxs)('span', {
                                      className: 'truncate text-xs',
                                      children: [
                                        ' ',
                                        (null == _
                                          ? void 0
                                          : null === (A = _.user) ||
                                            void 0 === A
                                          ? void 0
                                          : A.email) || ''
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          }),
                          (0, r.jsx)(o.VD, {}),
                          (0, r.jsxs)(o.Qk, {
                            children: [
                              (0, r.jsxs)(o.Xi, {
                                children: [(0, r.jsx)(b.Z, {}), 'Account']
                              }),
                              (0, r.jsxs)(o.Xi, {
                                children: [(0, r.jsx)(h.Z, {}), 'Billing']
                              }),
                              (0, r.jsxs)(o.Xi, {
                                children: [(0, r.jsx)(x.Z, {}), 'Notifications']
                              })
                            ]
                          }),
                          (0, r.jsx)(o.VD, {}),
                          (0, r.jsxs)(o.Xi, {
                            children: [(0, r.jsx)(g.Z, {}), 'Log out']
                          })
                        ]
                      })
                    ]
                  })
                })
              })
            }),
            (0, r.jsx)(c.SidebarRail, {})
          ]
        });
      }
    },
    47823: function (e, t, a) {
      'use strict';
      a.d(t, {
        UserNav: function () {
          return l;
        }
      });
      var r = a(57437),
        n = a(41647),
        i = a(50495),
        s = a(46910),
        d = a(98174);
      function l() {
        let { data: e } = (0, d.kP)();
        if (e) {
          var t, a, l, o, c, u, f, m;
          return (0, r.jsxs)(s.h_, {
            children: [
              (0, r.jsx)(s.$F, {
                asChild: !0,
                children: (0, r.jsx)(i.z, {
                  variant: 'ghost',
                  className: 'relative h-8 w-8 rounded-full',
                  children: (0, r.jsxs)(n.Avatar, {
                    className: 'h-8 w-8',
                    children: [
                      (0, r.jsx)(n.AvatarImage, {
                        src:
                          null !==
                            (f =
                              null === (t = e.user) || void 0 === t
                                ? void 0
                                : t.image) && void 0 !== f
                            ? f
                            : '',
                        alt:
                          null !==
                            (m =
                              null === (a = e.user) || void 0 === a
                                ? void 0
                                : a.name) && void 0 !== m
                            ? m
                            : ''
                      }),
                      (0, r.jsx)(n.AvatarFallback, {
                        children:
                          null === (o = e.user) || void 0 === o
                            ? void 0
                            : null === (l = o.name) || void 0 === l
                            ? void 0
                            : l[0]
                      })
                    ]
                  })
                })
              }),
              (0, r.jsxs)(s.AW, {
                className: 'w-56',
                align: 'end',
                forceMount: !0,
                children: [
                  (0, r.jsx)(s.Ju, {
                    className: 'font-normal',
                    children: (0, r.jsxs)('div', {
                      className: 'flex flex-col space-y-1',
                      children: [
                        (0, r.jsx)('p', {
                          className: 'text-sm font-medium leading-none',
                          children:
                            null === (c = e.user) || void 0 === c
                              ? void 0
                              : c.name
                        }),
                        (0, r.jsx)('p', {
                          className:
                            'text-xs leading-none text-muted-foreground',
                          children:
                            null === (u = e.user) || void 0 === u
                              ? void 0
                              : u.email
                        })
                      ]
                    })
                  }),
                  (0, r.jsx)(s.VD, {}),
                  (0, r.jsxs)(s.Qk, {
                    children: [
                      (0, r.jsxs)(s.Xi, {
                        children: [
                          'Profile',
                          (0, r.jsx)(s.KM, { children: '⇧⌘P' })
                        ]
                      }),
                      (0, r.jsxs)(s.Xi, {
                        children: [
                          'Billing',
                          (0, r.jsx)(s.KM, { children: '⌘B' })
                        ]
                      }),
                      (0, r.jsxs)(s.Xi, {
                        children: [
                          'Settings',
                          (0, r.jsx)(s.KM, { children: '⌘S' })
                        ]
                      }),
                      (0, r.jsx)(s.Xi, { children: 'New Team' })
                    ]
                  }),
                  (0, r.jsx)(s.VD, {}),
                  (0, r.jsxs)(s.Xi, {
                    onClick: () => (0, d.w7)(),
                    children: ['Log out', (0, r.jsx)(s.KM, { children: '⇧⌘Q' })]
                  })
                ]
              })
            ]
          });
        }
      }
    },
    89229: function (e, t, a) {
      'use strict';
      a.d(t, {
        default: function () {
          return d;
        }
      });
      var r = a(57437),
        n = a(98665),
        i = a(54817),
        s = a(50495);
      function d() {
        let { query: e } = (0, n.useKBar)();
        return (0, r.jsx)('div', {
          className: 'w-full space-y-2',
          children: (0, r.jsxs)(s.z, {
            variant: 'outline',
            className:
              'relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64',
            onClick: e.toggle,
            children: [
              (0, r.jsx)(i.Z, { className: 'mr-2 h-4 w-4' }),
              'Search...',
              (0, r.jsxs)('kbd', {
                className:
                  'pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex',
                children: [
                  (0, r.jsx)('span', { className: 'text-xs', children: '⌘' }),
                  'K'
                ]
              })
            ]
          })
        });
      }
    },
    41647: function (e, t, a) {
      'use strict';
      a.d(t, {
        Avatar: function () {
          return d;
        },
        AvatarFallback: function () {
          return o;
        },
        AvatarImage: function () {
          return l;
        }
      });
      var r = a(57437),
        n = a(2265),
        i = a(31132),
        s = a(37440);
      let d = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(i.fC, {
          ref: t,
          className: (0, s.cn)(
            'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
            a
          ),
          ...n
        });
      });
      d.displayName = i.fC.displayName;
      let l = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(i.Ee, {
          ref: t,
          className: (0, s.cn)('aspect-square h-full w-full', a),
          ...n
        });
      });
      l.displayName = i.Ee.displayName;
      let o = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(i.NY, {
          ref: t,
          className: (0, s.cn)(
            'flex h-full w-full items-center justify-center rounded-full bg-muted',
            a
          ),
          ...n
        });
      });
      o.displayName = i.NY.displayName;
    },
    50495: function (e, t, a) {
      'use strict';
      a.d(t, {
        d: function () {
          return l;
        },
        z: function () {
          return o;
        }
      });
      var r = a(57437),
        n = a(2265),
        i = a(63355),
        s = a(13027),
        d = a(37440);
      let l = (0, s.j)(
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
        o = n.forwardRef((e, t) => {
          let { className: a, variant: n, size: s, asChild: o = !1, ...c } = e,
            u = o ? i.g7 : 'button';
          return (0, r.jsx)(u, {
            className: (0, d.cn)(l({ variant: n, size: s, className: a })),
            ref: t,
            ...c
          });
        });
      o.displayName = 'Button';
    },
    46910: function (e, t, a) {
      'use strict';
      a.d(t, {
        $F: function () {
          return o;
        },
        AW: function () {
          return u;
        },
        Ju: function () {
          return m;
        },
        KM: function () {
          return b;
        },
        Qk: function () {
          return c;
        },
        VD: function () {
          return p;
        },
        Xi: function () {
          return f;
        },
        h_: function () {
          return l;
        }
      });
      var r = a(57437),
        n = a(2265),
        i = a(43260),
        s = a(4867),
        d = a(37440);
      let l = i.fC,
        o = i.xz,
        c = i.ZA;
      i.Uv,
        i.Tr,
        i.Ee,
        (n.forwardRef((e, t) => {
          let { className: a, inset: n, children: l, ...o } = e;
          return (0, r.jsxs)(i.fF, {
            ref: t,
            className: (0, d.cn)(
              'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
              n && 'pl-8',
              a
            ),
            ...o,
            children: [l, (0, r.jsx)(s.XCv, { className: 'ml-auto h-4 w-4' })]
          });
        }).displayName = i.fF.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)(i.tu, {
            ref: t,
            className: (0, d.cn)(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              a
            ),
            ...n
          });
        }).displayName = i.tu.displayName);
      let u = n.forwardRef((e, t) => {
        let { className: a, sideOffset: n = 4, ...s } = e;
        return (0, r.jsx)(i.Uv, {
          children: (0, r.jsx)(i.VY, {
            ref: t,
            sideOffset: n,
            className: (0, d.cn)(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
              'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              a
            ),
            ...s
          })
        });
      });
      u.displayName = i.VY.displayName;
      let f = n.forwardRef((e, t) => {
        let { className: a, inset: n, ...s } = e;
        return (0, r.jsx)(i.ck, {
          ref: t,
          className: (0, d.cn)(
            'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            n && 'pl-8',
            a
          ),
          ...s
        });
      });
      (f.displayName = i.ck.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, children: n, checked: l, ...o } = e;
          return (0, r.jsxs)(i.oC, {
            ref: t,
            className: (0, d.cn)(
              'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              a
            ),
            checked: l,
            ...o,
            children: [
              (0, r.jsx)('span', {
                className:
                  'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                children: (0, r.jsx)(i.wU, {
                  children: (0, r.jsx)(s.nQG, { className: 'h-4 w-4' })
                })
              }),
              n
            ]
          });
        }).displayName = i.oC.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, children: n, ...l } = e;
          return (0, r.jsxs)(i.Rk, {
            ref: t,
            className: (0, d.cn)(
              'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              a
            ),
            ...l,
            children: [
              (0, r.jsx)('span', {
                className:
                  'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                children: (0, r.jsx)(i.wU, {
                  children: (0, r.jsx)(s.jXb, {
                    className: 'h-4 w-4 fill-current'
                  })
                })
              }),
              n
            ]
          });
        }).displayName = i.Rk.displayName);
      let m = n.forwardRef((e, t) => {
        let { className: a, inset: n, ...s } = e;
        return (0, r.jsx)(i.__, {
          ref: t,
          className: (0, d.cn)(
            'px-2 py-1.5 text-sm font-semibold',
            n && 'pl-8',
            a
          ),
          ...s
        });
      });
      m.displayName = i.__.displayName;
      let p = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(i.Z0, {
          ref: t,
          className: (0, d.cn)('-mx-1 my-1 h-px bg-muted', a),
          ...n
        });
      });
      p.displayName = i.Z0.displayName;
      let b = (e) => {
        let { className: t, ...a } = e;
        return (0, r.jsx)('span', {
          className: (0, d.cn)('ml-auto text-xs tracking-widest opacity-60', t),
          ...a
        });
      };
      b.displayName = 'DropdownMenuShortcut';
    },
    83102: function (e, t, a) {
      'use strict';
      a.d(t, {
        I: function () {
          return s;
        }
      });
      var r = a(57437),
        n = a(2265),
        i = a(37440);
      let s = n.forwardRef((e, t) => {
        let { className: a, type: n, ...s } = e;
        return (0, r.jsx)('input', {
          type: n,
          className: (0, i.cn)(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            a
          ),
          ref: t,
          ...s
        });
      });
      s.displayName = 'Input';
    },
    64344: function (e, t, a) {
      'use strict';
      a.d(t, {
        Separator: function () {
          return d;
        }
      });
      var r = a(57437),
        n = a(2265),
        i = a(70325),
        s = a(37440);
      let d = n.forwardRef((e, t) => {
        let {
          className: a,
          orientation: n = 'horizontal',
          decorative: d = !0,
          ...l
        } = e;
        return (0, r.jsx)(i.f, {
          ref: t,
          decorative: d,
          orientation: n,
          className: (0, s.cn)(
            'shrink-0 bg-border',
            'horizontal' === n ? 'h-[1px] w-full' : 'h-full w-[1px]',
            a
          ),
          ...l
        });
      });
      d.displayName = i.f.displayName;
    },
    35949: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          Sidebar: function () {
            return M;
          },
          SidebarContent: function () {
            return L;
          },
          SidebarFooter: function () {
            return P;
          },
          SidebarGroup: function () {
            return T;
          },
          SidebarGroupAction: function () {
            return K;
          },
          SidebarGroupContent: function () {
            return D;
          },
          SidebarGroupLabel: function () {
            return F;
          },
          SidebarHeader: function () {
            return _;
          },
          SidebarInput: function () {
            return A;
          },
          SidebarInset: function () {
            return Z;
          },
          SidebarMenu: function () {
            return E;
          },
          SidebarMenuAction: function () {
            return O;
          },
          SidebarMenuBadge: function () {
            return Y;
          },
          SidebarMenuButton: function () {
            return G;
          },
          SidebarMenuItem: function () {
            return V;
          },
          SidebarMenuSkeleton: function () {
            return U;
          },
          SidebarMenuSub: function () {
            return W;
          },
          SidebarMenuSubButton: function () {
            return q;
          },
          SidebarMenuSubItem: function () {
            return Q;
          },
          SidebarProvider: function () {
            return R;
          },
          SidebarRail: function () {
            return B;
          },
          SidebarSeparator: function () {
            return I;
          },
          SidebarTrigger: function () {
            return C;
          },
          useSidebar: function () {
            return z;
          }
        });
      var r = a(57437),
        n = a(2265),
        i = a(63355),
        s = a(13027),
        d = a(60143),
        l = a(37440),
        o = a(50495),
        c = a(83102),
        u = a(64344),
        f = a(87074),
        m = a(4867);
      let p = f.fC;
      f.xz, f.x8;
      let b = f.h_,
        h = n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)(f.aV, {
            className: (0, l.cn)(
              'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              a
            ),
            ...n,
            ref: t
          });
        });
      h.displayName = f.aV.displayName;
      let x = (0, s.j)(
          'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          {
            variants: {
              side: {
                top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
                bottom:
                  'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
                left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
                right:
                  'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm'
              }
            },
            defaultVariants: { side: 'right' }
          }
        ),
        g = n.forwardRef((e, t) => {
          let { side: a = 'right', className: n, children: i, ...s } = e;
          return (0, r.jsxs)(b, {
            children: [
              (0, r.jsx)(h, {}),
              (0, r.jsxs)(f.VY, {
                ref: t,
                className: (0, l.cn)(x({ side: a }), n),
                ...s,
                children: [
                  i,
                  (0, r.jsxs)(f.x8, {
                    className:
                      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
                    children: [
                      (0, r.jsx)(m.Pxu, { className: 'h-4 w-4' }),
                      (0, r.jsx)('span', {
                        className: 'sr-only',
                        children: 'Close'
                      })
                    ]
                  })
                ]
              })
            ]
          });
        });
      function v(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)('div', {
          className: (0, l.cn)('animate-pulse rounded-md bg-primary/10', t),
          ...a
        });
      }
      (g.displayName = f.VY.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)(f.Dx, {
            ref: t,
            className: (0, l.cn)('text-lg font-semibold text-foreground', a),
            ...n
          });
        }).displayName = f.Dx.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)(f.dk, {
            ref: t,
            className: (0, l.cn)('text-sm text-muted-foreground', a),
            ...n
          });
        }).displayName = f.dk.displayName);
      var j = a(90325);
      let w = j.zt,
        N = j.fC,
        y = j.xz,
        k = n.forwardRef((e, t) => {
          let { className: a, sideOffset: n = 4, ...i } = e;
          return (0, r.jsx)(j.VY, {
            ref: t,
            sideOffset: n,
            className: (0, l.cn)(
              'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              a
            ),
            ...i
          });
        });
      k.displayName = j.VY.displayName;
      let S = n.createContext(null);
      function z() {
        let e = n.useContext(S);
        if (!e) throw Error('useSidebar must be used within a Sidebar.');
        return e;
      }
      let R = n.forwardRef((e, t) => {
        let {
            defaultOpen: a = !0,
            open: i,
            onOpenChange: s,
            className: d,
            style: o,
            children: c,
            ...u
          } = e,
          f = (function () {
            let [e, t] = n.useState(void 0);
            return (
              n.useEffect(() => {
                let e = window.matchMedia('(max-width: '.concat(767, 'px)')),
                  a = () => {
                    t(window.innerWidth < 768);
                  };
                return (
                  e.addEventListener('change', a),
                  t(window.innerWidth < 768),
                  () => e.removeEventListener('change', a)
                );
              }, []),
              !!e
            );
          })(),
          [m, p] = n.useState(!1),
          [b, h] = n.useState(a),
          x = null != i ? i : b,
          g = n.useCallback(
            (e) => {
              let t = 'function' == typeof e ? e(x) : e;
              s ? s(t) : h(t),
                (document.cookie = ''
                  .concat('sidebar:state', '=')
                  .concat(t, '; path=/; max-age=')
                  .concat(604800));
            },
            [s, x]
          ),
          v = n.useCallback(() => (f ? p((e) => !e) : g((e) => !e)), [f, g, p]);
        n.useEffect(() => {
          let e = (e) => {
            'b' === e.key &&
              (e.metaKey || e.ctrlKey) &&
              (e.preventDefault(), v());
          };
          return (
            window.addEventListener('keydown', e),
            () => window.removeEventListener('keydown', e)
          );
        }, [v]);
        let j = x ? 'expanded' : 'collapsed',
          N = n.useMemo(
            () => ({
              state: j,
              open: x,
              setOpen: g,
              isMobile: f,
              openMobile: m,
              setOpenMobile: p,
              toggleSidebar: v
            }),
            [j, x, g, f, m, p, v]
          );
        return (0, r.jsx)(S.Provider, {
          value: N,
          children: (0, r.jsx)(w, {
            delayDuration: 0,
            children: (0, r.jsx)('div', {
              style: {
                '--sidebar-width': '16rem',
                '--sidebar-width-icon': '3rem',
                ...o
              },
              className: (0, l.cn)(
                'group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar',
                d
              ),
              ref: t,
              ...u,
              children: c
            })
          })
        });
      });
      R.displayName = 'SidebarProvider';
      let M = n.forwardRef((e, t) => {
        let {
            side: a = 'left',
            variant: n = 'sidebar',
            collapsible: i = 'offcanvas',
            className: s,
            children: d,
            ...o
          } = e,
          { isMobile: c, state: u, openMobile: f, setOpenMobile: m } = z();
        return 'none' === i
          ? (0, r.jsx)('div', {
              className: (0, l.cn)(
                'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
                s
              ),
              ref: t,
              ...o,
              children: d
            })
          : c
          ? (0, r.jsx)(p, {
              open: f,
              onOpenChange: m,
              ...o,
              children: (0, r.jsx)(g, {
                'data-sidebar': 'sidebar',
                'data-mobile': 'true',
                className:
                  'w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden',
                style: { '--sidebar-width': '18rem' },
                side: a,
                children: (0, r.jsx)('div', {
                  className: 'flex h-full w-full flex-col',
                  children: d
                })
              })
            })
          : (0, r.jsxs)('div', {
              ref: t,
              className: 'group peer hidden md:block',
              'data-state': u,
              'data-collapsible': 'collapsed' === u ? i : '',
              'data-variant': n,
              'data-side': a,
              children: [
                (0, r.jsx)('div', {
                  className: (0, l.cn)(
                    'relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
                    'group-data-[collapsible=offcanvas]:w-0',
                    'group-data-[side=right]:rotate-180',
                    'floating' === n || 'inset' === n
                      ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
                      : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
                  )
                }),
                (0, r.jsx)('div', {
                  className: (0, l.cn)(
                    'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex',
                    'left' === a
                      ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                      : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
                    'floating' === n || 'inset' === n
                      ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
                      : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
                    s
                  ),
                  ...o,
                  children: (0, r.jsx)('div', {
                    'data-sidebar': 'sidebar',
                    className:
                      'flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow',
                    children: d
                  })
                })
              ]
            });
      });
      M.displayName = 'Sidebar';
      let C = n.forwardRef((e, t) => {
        let { className: a, onClick: n, ...i } = e,
          { toggleSidebar: s } = z();
        return (0, r.jsxs)(o.z, {
          ref: t,
          'data-sidebar': 'trigger',
          variant: 'ghost',
          size: 'icon',
          className: (0, l.cn)('h-7 w-7', a),
          onClick: (e) => {
            null == n || n(e), s();
          },
          ...i,
          children: [
            (0, r.jsx)(d.Z, {}),
            (0, r.jsx)('span', {
              className: 'sr-only',
              children: 'Toggle Sidebar'
            })
          ]
        });
      });
      C.displayName = 'SidebarTrigger';
      let B = n.forwardRef((e, t) => {
        let { className: a, ...n } = e,
          { toggleSidebar: i } = z();
        return (0, r.jsx)('button', {
          ref: t,
          'data-sidebar': 'rail',
          'aria-label': 'Toggle Sidebar',
          tabIndex: -1,
          onClick: i,
          title: 'Toggle Sidebar',
          className: (0, l.cn)(
            'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
            '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
            '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
            'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar',
            '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
            '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
            a
          ),
          ...n
        });
      });
      B.displayName = 'SidebarRail';
      let Z = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('main', {
          ref: t,
          className: (0, l.cn)(
            'relative flex min-h-svh flex-1 flex-col bg-background',
            'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
            a
          ),
          ...n
        });
      });
      Z.displayName = 'SidebarInset';
      let A = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(c.I, {
          ref: t,
          'data-sidebar': 'input',
          className: (0, l.cn)(
            'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
            a
          ),
          ...n
        });
      });
      A.displayName = 'SidebarInput';
      let _ = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('div', {
          ref: t,
          'data-sidebar': 'header',
          className: (0, l.cn)('flex flex-col gap-2 p-2', a),
          ...n
        });
      });
      _.displayName = 'SidebarHeader';
      let P = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('div', {
          ref: t,
          'data-sidebar': 'footer',
          className: (0, l.cn)('flex flex-col gap-2 p-2', a),
          ...n
        });
      });
      P.displayName = 'SidebarFooter';
      let I = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(u.Separator, {
          ref: t,
          'data-sidebar': 'separator',
          className: (0, l.cn)('mx-2 w-auto bg-sidebar-border', a),
          ...n
        });
      });
      I.displayName = 'SidebarSeparator';
      let L = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('div', {
          ref: t,
          'data-sidebar': 'content',
          className: (0, l.cn)(
            'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
            a
          ),
          ...n
        });
      });
      L.displayName = 'SidebarContent';
      let T = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('div', {
          ref: t,
          'data-sidebar': 'group',
          className: (0, l.cn)('relative flex w-full min-w-0 flex-col p-2', a),
          ...n
        });
      });
      T.displayName = 'SidebarGroup';
      let F = n.forwardRef((e, t) => {
        let { className: a, asChild: n = !1, ...s } = e,
          d = n ? i.g7 : 'div';
        return (0, r.jsx)(d, {
          ref: t,
          'data-sidebar': 'group-label',
          className: (0, l.cn)(
            'flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
            'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
            a
          ),
          ...s
        });
      });
      F.displayName = 'SidebarGroupLabel';
      let K = n.forwardRef((e, t) => {
        let { className: a, asChild: n = !1, ...s } = e,
          d = n ? i.g7 : 'button';
        return (0, r.jsx)(d, {
          ref: t,
          'data-sidebar': 'group-action',
          className: (0, l.cn)(
            'absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
            'after:absolute after:-inset-2 after:md:hidden',
            'group-data-[collapsible=icon]:hidden',
            a
          ),
          ...s
        });
      });
      K.displayName = 'SidebarGroupAction';
      let D = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('div', {
          ref: t,
          'data-sidebar': 'group-content',
          className: (0, l.cn)('w-full text-sm', a),
          ...n
        });
      });
      D.displayName = 'SidebarGroupContent';
      let E = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('ul', {
          ref: t,
          'data-sidebar': 'menu',
          className: (0, l.cn)('flex w-full min-w-0 flex-col gap-1', a),
          ...n
        });
      });
      E.displayName = 'SidebarMenu';
      let V = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('li', {
          ref: t,
          'data-sidebar': 'menu-item',
          className: (0, l.cn)('group/menu-item relative', a),
          ...n
        });
      });
      V.displayName = 'SidebarMenuItem';
      let X = (0, s.j)(
          'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
          {
            variants: {
              variant: {
                default:
                  'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                outline:
                  'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]'
              },
              size: {
                default: 'h-8 text-sm',
                sm: 'h-7 text-xs',
                lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0'
              }
            },
            defaultVariants: { variant: 'default', size: 'default' }
          }
        ),
        G = n.forwardRef((e, t) => {
          let {
              asChild: a = !1,
              isActive: n = !1,
              variant: s = 'default',
              size: d = 'default',
              tooltip: o,
              className: c,
              ...u
            } = e,
            f = a ? i.g7 : 'button',
            { isMobile: m, state: p } = z(),
            b = (0, r.jsx)(f, {
              ref: t,
              'data-sidebar': 'menu-button',
              'data-size': d,
              'data-active': n,
              className: (0, l.cn)(X({ variant: s, size: d }), c),
              ...u
            });
          return o
            ? ('string' == typeof o && (o = { children: o }),
              (0, r.jsxs)(N, {
                children: [
                  (0, r.jsx)(y, { asChild: !0, children: b }),
                  (0, r.jsx)(k, {
                    side: 'right',
                    align: 'center',
                    hidden: 'collapsed' !== p || m,
                    ...o
                  })
                ]
              }))
            : b;
        });
      G.displayName = 'SidebarMenuButton';
      let O = n.forwardRef((e, t) => {
        let { className: a, asChild: n = !1, showOnHover: s = !1, ...d } = e,
          o = n ? i.g7 : 'button';
        return (0, r.jsx)(o, {
          ref: t,
          'data-sidebar': 'menu-action',
          className: (0, l.cn)(
            'absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
            'after:absolute after:-inset-2 after:md:hidden',
            'peer-data-[size=sm]/menu-button:top-1',
            'peer-data-[size=default]/menu-button:top-1.5',
            'peer-data-[size=lg]/menu-button:top-2.5',
            'group-data-[collapsible=icon]:hidden',
            s &&
              'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
            a
          ),
          ...d
        });
      });
      O.displayName = 'SidebarMenuAction';
      let Y = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('div', {
          ref: t,
          'data-sidebar': 'menu-badge',
          className: (0, l.cn)(
            'pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground',
            'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
            'peer-data-[size=sm]/menu-button:top-1',
            'peer-data-[size=default]/menu-button:top-1.5',
            'peer-data-[size=lg]/menu-button:top-2.5',
            'group-data-[collapsible=icon]:hidden',
            a
          ),
          ...n
        });
      });
      Y.displayName = 'SidebarMenuBadge';
      let U = n.forwardRef((e, t) => {
        let { className: a, showIcon: i = !1, ...s } = e,
          d = n.useMemo(
            () => ''.concat(Math.floor(40 * Math.random()) + 50, '%'),
            []
          );
        return (0, r.jsxs)('div', {
          ref: t,
          'data-sidebar': 'menu-skeleton',
          className: (0, l.cn)(
            'flex h-8 items-center gap-2 rounded-md px-2',
            a
          ),
          ...s,
          children: [
            i &&
              (0, r.jsx)(v, {
                className: 'size-4 rounded-md',
                'data-sidebar': 'menu-skeleton-icon'
              }),
            (0, r.jsx)(v, {
              className: 'h-4 max-w-[--skeleton-width] flex-1',
              'data-sidebar': 'menu-skeleton-text',
              style: { '--skeleton-width': d }
            })
          ]
        });
      });
      U.displayName = 'SidebarMenuSkeleton';
      let W = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)('ul', {
          ref: t,
          'data-sidebar': 'menu-sub',
          className: (0, l.cn)(
            'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5',
            'group-data-[collapsible=icon]:hidden',
            a
          ),
          ...n
        });
      });
      W.displayName = 'SidebarMenuSub';
      let Q = n.forwardRef((e, t) => {
        let { ...a } = e;
        return (0, r.jsx)('li', { ref: t, ...a });
      });
      Q.displayName = 'SidebarMenuSubItem';
      let q = n.forwardRef((e, t) => {
        let {
            asChild: a = !1,
            size: n = 'md',
            isActive: s,
            className: d,
            ...o
          } = e,
          c = a ? i.g7 : 'a';
        return (0, r.jsx)(c, {
          ref: t,
          'data-sidebar': 'menu-sub-button',
          'data-size': n,
          'data-active': s,
          className: (0, l.cn)(
            'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
            'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
            'sm' === n && 'text-xs',
            'md' === n && 'text-sm',
            'group-data-[collapsible=icon]:hidden',
            d
          ),
          ...o
        });
      });
      q.displayName = 'SidebarMenuSubButton';
    },
    88563: function (e, t, a) {
      'use strict';
      a.d(t, {
        t: function () {
          return r;
        }
      });
      let r = [
        {
          title: 'Dashboard',
          url: '/dashboard/overview',
          icon: 'dashboard',
          isActive: !1,
          shortcut: ['d', 'd'],
          items: []
        },
        {
          title: 'Employee',
          url: '/dashboard/employee',
          icon: 'user',
          shortcut: ['e', 'e'],
          isActive: !1,
          items: []
        },
        {
          title: 'Product',
          url: '/dashboard/product',
          icon: 'product',
          shortcut: ['p', 'p'],
          isActive: !1,
          items: []
        },
        {
          title: 'Account',
          url: '#',
          icon: 'billing',
          isActive: !0,
          items: [
            {
              title: 'Profile',
              url: '/dashboard/profile',
              icon: 'userPen',
              shortcut: ['m', 'm']
            },
            { title: 'Login', shortcut: ['l', 'l'], url: '/', icon: 'login' }
          ]
        },
        {
          title: 'Kanban',
          url: '/dashboard/kanban',
          icon: 'kanban',
          shortcut: ['k', 'k'],
          isActive: !1,
          items: []
        }
      ];
    },
    37440: function (e, t, a) {
      'use strict';
      a.d(t, {
        cn: function () {
          return i;
        },
        t: function () {
          return d;
        },
        u: function () {
          return s;
        }
      });
      var r = a(44839),
        n = a(78077);
      function i() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, n.m)((0, r.W)(t));
      }
      function s(e) {
        if (!e) return !1;
        let t = e.data.current;
        return (
          (null == t ? void 0 : t.type) === 'Column' ||
          (null == t ? void 0 : t.type) === 'Task'
        );
      }
      function d(e) {
        var t, a;
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { decimals: n = 0, sizeType: i = 'normal' } = r;
        if (0 === e) return '0 Byte';
        let s = Math.floor(Math.log(e) / Math.log(1024));
        return ''
          .concat((e / Math.pow(1024, s)).toFixed(n), ' ')
          .concat(
            'accurate' === i
              ? null !== (t = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'][s]) &&
                void 0 !== t
                ? t
                : 'Bytest'
              : null !== (a = ['Bytes', 'KB', 'MB', 'GB', 'TB'][s]) &&
                void 0 !== a
              ? a
              : 'Bytes'
          );
      }
    }
  },
  function (e) {
    e.O(0, [310, 795, 366, 243, 134, 174, 421, 971, 526, 744], function () {
      return e((e.s = 45965));
    }),
      (_N_E = e.O());
  }
]);
