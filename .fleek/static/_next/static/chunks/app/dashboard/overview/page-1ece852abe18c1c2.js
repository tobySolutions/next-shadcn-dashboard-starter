(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [25],
  {
    54569: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 87621)),
        Promise.resolve().then(r.bind(r, 29877)),
        Promise.resolve().then(r.bind(r, 77487)),
        Promise.resolve().then(r.bind(r, 81189)),
        Promise.resolve().then(r.bind(r, 41647)),
        Promise.resolve().then(r.bind(r, 94880)),
        Promise.resolve().then(r.bind(r, 85273));
    },
    87621: function (e, t, r) {
      'use strict';
      r.d(t, {
        AreaGraph: function () {
          return f;
        }
      });
      var a = r(57437),
        o = r(53225),
        s = r(27561),
        l = r(54142),
        n = r(2842),
        i = r(86991),
        d = r(36013),
        c = r(85822);
      let u = [
          { month: 'January', desktop: 186, mobile: 80 },
          { month: 'February', desktop: 305, mobile: 200 },
          { month: 'March', desktop: 237, mobile: 120 },
          { month: 'April', desktop: 73, mobile: 190 },
          { month: 'May', desktop: 209, mobile: 130 },
          { month: 'June', desktop: 214, mobile: 140 }
        ],
        m = {
          desktop: { label: 'Desktop', color: 'hsl(var(--chart-1))' },
          mobile: { label: 'Mobile', color: 'hsl(var(--chart-2))' }
        };
      function f() {
        return (0, a.jsxs)(d.Zb, {
          children: [
            (0, a.jsxs)(d.Ol, {
              children: [
                (0, a.jsx)(d.ll, { children: 'Area Chart - Stacked' }),
                (0, a.jsx)(d.SZ, {
                  children: 'Showing total visitors for the last 6 months'
                })
              ]
            }),
            (0, a.jsx)(d.aY, {
              children: (0, a.jsx)(c.BO, {
                config: m,
                className: 'aspect-auto h-[310px] w-full',
                children: (0, a.jsxs)(s.T, {
                  accessibilityLayer: !0,
                  data: u,
                  margin: { left: 12, right: 12 },
                  children: [
                    (0, a.jsx)(l.q, { vertical: !1 }),
                    (0, a.jsx)(n.K, {
                      dataKey: 'month',
                      tickLine: !1,
                      axisLine: !1,
                      tickMargin: 8,
                      tickFormatter: (e) => e.slice(0, 3)
                    }),
                    (0, a.jsx)(c.h7, {
                      cursor: !1,
                      content: (0, a.jsx)(c.dg, { indicator: 'dot' })
                    }),
                    (0, a.jsx)(i.u, {
                      dataKey: 'mobile',
                      type: 'natural',
                      fill: 'var(--color-mobile)',
                      fillOpacity: 0.4,
                      stroke: 'var(--color-mobile)',
                      stackId: 'a'
                    }),
                    (0, a.jsx)(i.u, {
                      dataKey: 'desktop',
                      type: 'natural',
                      fill: 'var(--color-desktop)',
                      fillOpacity: 0.4,
                      stroke: 'var(--color-desktop)',
                      stackId: 'a'
                    })
                  ]
                })
              })
            }),
            (0, a.jsx)(d.eW, {
              children: (0, a.jsx)('div', {
                className: 'flex w-full items-start gap-2 text-sm',
                children: (0, a.jsxs)('div', {
                  className: 'grid gap-2',
                  children: [
                    (0, a.jsxs)('div', {
                      className:
                        'flex items-center gap-2 font-medium leading-none',
                      children: [
                        'Trending up by 5.2% this month ',
                        (0, a.jsx)(o.Z, { className: 'h-4 w-4' })
                      ]
                    }),
                    (0, a.jsx)('div', {
                      className:
                        'flex items-center gap-2 leading-none text-muted-foreground',
                      children: 'January - June 2024'
                    })
                  ]
                })
              })
            })
          ]
        });
      }
    },
    29877: function (e, t, r) {
      'use strict';
      r.d(t, {
        BarGraph: function () {
          return f;
        }
      });
      var a = r(57437),
        o = r(2265),
        s = r(25974),
        l = r(54142),
        n = r(2842),
        i = r(45745),
        d = r(36013),
        c = r(85822);
      let u = [
          { date: '2024-04-01', desktop: 222, mobile: 150 },
          { date: '2024-04-02', desktop: 97, mobile: 180 },
          { date: '2024-04-03', desktop: 167, mobile: 120 },
          { date: '2024-04-04', desktop: 242, mobile: 260 },
          { date: '2024-04-05', desktop: 373, mobile: 290 },
          { date: '2024-04-06', desktop: 301, mobile: 340 },
          { date: '2024-04-07', desktop: 245, mobile: 180 },
          { date: '2024-04-08', desktop: 409, mobile: 320 },
          { date: '2024-04-09', desktop: 59, mobile: 110 },
          { date: '2024-04-10', desktop: 261, mobile: 190 },
          { date: '2024-04-11', desktop: 327, mobile: 350 },
          { date: '2024-04-12', desktop: 292, mobile: 210 },
          { date: '2024-04-13', desktop: 342, mobile: 380 },
          { date: '2024-04-14', desktop: 137, mobile: 220 },
          { date: '2024-04-15', desktop: 120, mobile: 170 },
          { date: '2024-04-16', desktop: 138, mobile: 190 },
          { date: '2024-04-17', desktop: 446, mobile: 360 },
          { date: '2024-04-18', desktop: 364, mobile: 410 },
          { date: '2024-04-19', desktop: 243, mobile: 180 },
          { date: '2024-04-20', desktop: 89, mobile: 150 },
          { date: '2024-04-21', desktop: 137, mobile: 200 },
          { date: '2024-04-22', desktop: 224, mobile: 170 },
          { date: '2024-04-23', desktop: 138, mobile: 230 },
          { date: '2024-04-24', desktop: 387, mobile: 290 },
          { date: '2024-04-25', desktop: 215, mobile: 250 },
          { date: '2024-04-26', desktop: 75, mobile: 130 },
          { date: '2024-04-27', desktop: 383, mobile: 420 },
          { date: '2024-04-28', desktop: 122, mobile: 180 },
          { date: '2024-04-29', desktop: 315, mobile: 240 },
          { date: '2024-04-30', desktop: 454, mobile: 380 },
          { date: '2024-05-01', desktop: 165, mobile: 220 },
          { date: '2024-05-02', desktop: 293, mobile: 310 },
          { date: '2024-05-03', desktop: 247, mobile: 190 },
          { date: '2024-05-04', desktop: 385, mobile: 420 },
          { date: '2024-05-05', desktop: 481, mobile: 390 },
          { date: '2024-05-06', desktop: 498, mobile: 520 },
          { date: '2024-05-07', desktop: 388, mobile: 300 },
          { date: '2024-05-08', desktop: 149, mobile: 210 },
          { date: '2024-05-09', desktop: 227, mobile: 180 },
          { date: '2024-05-10', desktop: 293, mobile: 330 },
          { date: '2024-05-11', desktop: 335, mobile: 270 },
          { date: '2024-05-12', desktop: 197, mobile: 240 },
          { date: '2024-05-13', desktop: 197, mobile: 160 },
          { date: '2024-05-14', desktop: 448, mobile: 490 },
          { date: '2024-05-15', desktop: 473, mobile: 380 },
          { date: '2024-05-16', desktop: 338, mobile: 400 },
          { date: '2024-05-17', desktop: 499, mobile: 420 },
          { date: '2024-05-18', desktop: 315, mobile: 350 },
          { date: '2024-05-19', desktop: 235, mobile: 180 },
          { date: '2024-05-20', desktop: 177, mobile: 230 },
          { date: '2024-05-21', desktop: 82, mobile: 140 },
          { date: '2024-05-22', desktop: 81, mobile: 120 },
          { date: '2024-05-23', desktop: 252, mobile: 290 },
          { date: '2024-05-24', desktop: 294, mobile: 220 },
          { date: '2024-05-25', desktop: 201, mobile: 250 },
          { date: '2024-05-26', desktop: 213, mobile: 170 },
          { date: '2024-05-27', desktop: 420, mobile: 460 },
          { date: '2024-05-28', desktop: 233, mobile: 190 },
          { date: '2024-05-29', desktop: 78, mobile: 130 },
          { date: '2024-05-30', desktop: 340, mobile: 280 },
          { date: '2024-05-31', desktop: 178, mobile: 230 },
          { date: '2024-06-01', desktop: 178, mobile: 200 },
          { date: '2024-06-02', desktop: 470, mobile: 410 },
          { date: '2024-06-03', desktop: 103, mobile: 160 },
          { date: '2024-06-04', desktop: 439, mobile: 380 },
          { date: '2024-06-05', desktop: 88, mobile: 140 },
          { date: '2024-06-06', desktop: 294, mobile: 250 },
          { date: '2024-06-07', desktop: 323, mobile: 370 },
          { date: '2024-06-08', desktop: 385, mobile: 320 },
          { date: '2024-06-09', desktop: 438, mobile: 480 },
          { date: '2024-06-10', desktop: 155, mobile: 200 },
          { date: '2024-06-11', desktop: 92, mobile: 150 },
          { date: '2024-06-12', desktop: 492, mobile: 420 },
          { date: '2024-06-13', desktop: 81, mobile: 130 },
          { date: '2024-06-14', desktop: 426, mobile: 380 },
          { date: '2024-06-15', desktop: 307, mobile: 350 },
          { date: '2024-06-16', desktop: 371, mobile: 310 },
          { date: '2024-06-17', desktop: 475, mobile: 520 },
          { date: '2024-06-18', desktop: 107, mobile: 170 },
          { date: '2024-06-19', desktop: 341, mobile: 290 },
          { date: '2024-06-20', desktop: 408, mobile: 450 },
          { date: '2024-06-21', desktop: 169, mobile: 210 },
          { date: '2024-06-22', desktop: 317, mobile: 270 },
          { date: '2024-06-23', desktop: 480, mobile: 530 },
          { date: '2024-06-24', desktop: 132, mobile: 180 },
          { date: '2024-06-25', desktop: 141, mobile: 190 },
          { date: '2024-06-26', desktop: 434, mobile: 380 },
          { date: '2024-06-27', desktop: 448, mobile: 490 },
          { date: '2024-06-28', desktop: 149, mobile: 200 },
          { date: '2024-06-29', desktop: 103, mobile: 160 },
          { date: '2024-06-30', desktop: 446, mobile: 400 }
        ],
        m = {
          views: { label: 'Page Views' },
          desktop: { label: 'Desktop', color: 'hsl(var(--chart-1))' },
          mobile: { label: 'Mobile', color: 'hsl(var(--chart-2))' }
        };
      function f() {
        let [e, t] = o.useState('desktop'),
          r = o.useMemo(
            () => ({
              desktop: u.reduce((e, t) => e + t.desktop, 0),
              mobile: u.reduce((e, t) => e + t.mobile, 0)
            }),
            []
          );
        return (0, a.jsxs)(d.Zb, {
          children: [
            (0, a.jsxs)(d.Ol, {
              className:
                'flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row',
              children: [
                (0, a.jsxs)('div', {
                  className:
                    'flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6',
                  children: [
                    (0, a.jsx)(d.ll, { children: 'Bar Chart - Interactive' }),
                    (0, a.jsx)(d.SZ, {
                      children: 'Showing total visitors for the last 3 months'
                    })
                  ]
                }),
                (0, a.jsx)('div', {
                  className: 'flex',
                  children: ['desktop', 'mobile'].map((o) =>
                    (0, a.jsxs)(
                      'button',
                      {
                        'data-active': e === o,
                        className:
                          'relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6',
                        onClick: () => t(o),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'text-xs text-muted-foreground',
                            children: m[o].label
                          }),
                          (0, a.jsx)('span', {
                            className:
                              'text-lg font-bold leading-none sm:text-3xl',
                            children: r[o].toLocaleString()
                          })
                        ]
                      },
                      o
                    )
                  )
                })
              ]
            }),
            (0, a.jsx)(d.aY, {
              className: 'px-2 sm:p-6',
              children: (0, a.jsx)(c.BO, {
                config: m,
                className: 'aspect-auto h-[280px] w-full',
                children: (0, a.jsxs)(s.v, {
                  accessibilityLayer: !0,
                  data: u,
                  margin: { left: 12, right: 12 },
                  children: [
                    (0, a.jsx)(l.q, { vertical: !1 }),
                    (0, a.jsx)(n.K, {
                      dataKey: 'date',
                      tickLine: !1,
                      axisLine: !1,
                      tickMargin: 8,
                      minTickGap: 32,
                      tickFormatter: (e) =>
                        new Date(e).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })
                    }),
                    (0, a.jsx)(c.h7, {
                      content: (0, a.jsx)(c.dg, {
                        className: 'w-[150px]',
                        nameKey: 'views',
                        labelFormatter: (e) =>
                          new Date(e).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })
                      })
                    }),
                    (0, a.jsx)(i.$, {
                      dataKey: e,
                      fill: 'var(--color-'.concat(e, ')')
                    })
                  ]
                })
              })
            })
          ]
        });
      }
    },
    77487: function (e, t, r) {
      'use strict';
      r.d(t, {
        PieGraph: function () {
          return f;
        }
      });
      var a = r(57437),
        o = r(2265),
        s = r(53225),
        l = r(23909),
        n = r(85369),
        i = r(96581),
        d = r(36013),
        c = r(85822);
      let u = [
          { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
          { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
          { browser: 'firefox', visitors: 287, fill: 'var(--color-firefox)' },
          { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
          { browser: 'other', visitors: 190, fill: 'var(--color-other)' }
        ],
        m = {
          visitors: { label: 'Visitors' },
          chrome: { label: 'Chrome', color: 'hsl(var(--chart-1))' },
          safari: { label: 'Safari', color: 'hsl(var(--chart-2))' },
          firefox: { label: 'Firefox', color: 'hsl(var(--chart-3))' },
          edge: { label: 'Edge', color: 'hsl(var(--chart-4))' },
          other: { label: 'Other', color: 'hsl(var(--chart-5))' }
        };
      function f() {
        let e = o.useMemo(() => u.reduce((e, t) => e + t.visitors, 0), []);
        return (0, a.jsxs)(d.Zb, {
          className: 'flex flex-col',
          children: [
            (0, a.jsxs)(d.Ol, {
              className: 'items-center pb-0',
              children: [
                (0, a.jsx)(d.ll, { children: 'Pie Chart - Donut with Text' }),
                (0, a.jsx)(d.SZ, { children: 'January - June 2024' })
              ]
            }),
            (0, a.jsx)(d.aY, {
              className: 'flex-1 pb-0',
              children: (0, a.jsx)(c.BO, {
                config: m,
                className: 'mx-auto aspect-square max-h-[360px]',
                children: (0, a.jsxs)(l.u, {
                  children: [
                    (0, a.jsx)(c.h7, {
                      cursor: !1,
                      content: (0, a.jsx)(c.dg, { hideLabel: !0 })
                    }),
                    (0, a.jsx)(n.b, {
                      data: u,
                      dataKey: 'visitors',
                      nameKey: 'browser',
                      innerRadius: 60,
                      strokeWidth: 5,
                      children: (0, a.jsx)(i._, {
                        content: (t) => {
                          let { viewBox: r } = t;
                          if (r && 'cx' in r && 'cy' in r)
                            return (0, a.jsxs)('text', {
                              x: r.cx,
                              y: r.cy,
                              textAnchor: 'middle',
                              dominantBaseline: 'middle',
                              children: [
                                (0, a.jsx)('tspan', {
                                  x: r.cx,
                                  y: r.cy,
                                  className:
                                    'fill-foreground text-3xl font-bold',
                                  children: e.toLocaleString()
                                }),
                                (0, a.jsx)('tspan', {
                                  x: r.cx,
                                  y: (r.cy || 0) + 24,
                                  className: 'fill-muted-foreground',
                                  children: 'Visitors'
                                })
                              ]
                            });
                        }
                      })
                    })
                  ]
                })
              })
            }),
            (0, a.jsxs)(d.eW, {
              className: 'flex-col gap-2 text-sm',
              children: [
                (0, a.jsxs)('div', {
                  className: 'flex items-center gap-2 font-medium leading-none',
                  children: [
                    'Trending up by 5.2% this month ',
                    (0, a.jsx)(s.Z, { className: 'h-4 w-4' })
                  ]
                }),
                (0, a.jsx)('div', {
                  className: 'leading-none text-muted-foreground',
                  children: 'Showing total visitors for the last 6 months'
                })
              ]
            })
          ]
        });
      }
    },
    81189: function (e, t, r) {
      'use strict';
      r.d(t, {
        CalendarDateRangePicker: function () {
          return f;
        }
      });
      var a = r(57437),
        o = r(50495),
        s = r(2265),
        l = r(4867),
        n = r(30914),
        i = r(37440);
      function d(e) {
        let { className: t, classNames: r, showOutsideDays: s = !0, ...d } = e;
        return (0, a.jsx)(n._W, {
          showOutsideDays: s,
          className: (0, i.cn)('p-3', t),
          classNames: {
            months:
              'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
            month: 'space-y-4',
            caption: 'flex justify-center pt-1 relative items-center',
            caption_label: 'text-sm font-medium',
            nav: 'space-x-1 flex items-center',
            nav_button: (0, i.cn)(
              (0, o.d)({ variant: 'outline' }),
              'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
            ),
            nav_button_previous: 'absolute left-1',
            nav_button_next: 'absolute right-1',
            table: 'w-full border-collapse space-y-1',
            head_row: 'flex',
            head_cell:
              'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
            row: 'flex w-full mt-2',
            cell: (0, i.cn)(
              'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent',
              'range' === d.mode
                ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
                : '[&:has([aria-selected])]:rounded-md'
            ),
            day: (0, i.cn)(
              (0, o.d)({ variant: 'ghost' }),
              'h-8 w-8 p-0 font-normal aria-selected:opacity-100'
            ),
            day_range_start: 'day-range-start',
            day_range_end: 'day-range-end',
            day_selected:
              'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
            day_today: 'bg-accent text-accent-foreground',
            day_outside: 'text-muted-foreground opacity-50',
            day_disabled: 'text-muted-foreground opacity-50',
            day_range_middle:
              'aria-selected:bg-accent aria-selected:text-accent-foreground',
            day_hidden: 'invisible',
            ...r
          },
          components: {
            IconLeft: (e) => {
              let { ...t } = e;
              return (0, a.jsx)(l.wyc, { className: 'h-4 w-4' });
            },
            IconRight: (e) => {
              let { ...t } = e;
              return (0, a.jsx)(l.XCv, { className: 'h-4 w-4' });
            }
          },
          ...d
        });
      }
      d.displayName = 'Calendar';
      var c = r(19573),
        u = r(50508),
        m = r(82785);
      function f(e) {
        let { className: t } = e,
          [r, n] = s.useState({
            from: new Date(2023, 0, 20),
            to: (0, u.Z)(new Date(2023, 0, 20), 20)
          });
        return (0, a.jsx)('div', {
          className: (0, i.cn)('grid gap-2', t),
          children: (0, a.jsxs)(c.J2, {
            children: [
              (0, a.jsx)(c.xo, {
                asChild: !0,
                children: (0, a.jsxs)(o.z, {
                  id: 'date',
                  variant: 'outline',
                  className: (0, i.cn)(
                    'w-[260px] justify-start text-left font-normal',
                    !r && 'text-muted-foreground'
                  ),
                  children: [
                    (0, a.jsx)(l.Que, { className: 'mr-2 h-4 w-4' }),
                    (null == r ? void 0 : r.from)
                      ? r.to
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, m.Z)(r.from, 'LLL dd, y'),
                              ' -',
                              ' ',
                              (0, m.Z)(r.to, 'LLL dd, y')
                            ]
                          })
                        : (0, m.Z)(r.from, 'LLL dd, y')
                      : (0, a.jsx)('span', { children: 'Pick a date' })
                  ]
                })
              }),
              (0, a.jsx)(c.yk, {
                className: 'w-auto p-0',
                align: 'end',
                children: (0, a.jsx)(d, {
                  initialFocus: !0,
                  mode: 'range',
                  defaultMonth: null == r ? void 0 : r.from,
                  selected: r,
                  onSelect: n,
                  numberOfMonths: 2
                })
              })
            ]
          })
        });
      }
    },
    41647: function (e, t, r) {
      'use strict';
      r.d(t, {
        Avatar: function () {
          return n;
        },
        AvatarFallback: function () {
          return d;
        },
        AvatarImage: function () {
          return i;
        }
      });
      var a = r(57437),
        o = r(2265),
        s = r(31132),
        l = r(37440);
      let n = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)(s.fC, {
          ref: t,
          className: (0, l.cn)(
            'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
            r
          ),
          ...o
        });
      });
      n.displayName = s.fC.displayName;
      let i = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)(s.Ee, {
          ref: t,
          className: (0, l.cn)('aspect-square h-full w-full', r),
          ...o
        });
      });
      i.displayName = s.Ee.displayName;
      let d = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)(s.NY, {
          ref: t,
          className: (0, l.cn)(
            'flex h-full w-full items-center justify-center rounded-full bg-muted',
            r
          ),
          ...o
        });
      });
      d.displayName = s.NY.displayName;
    },
    50495: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return i;
        },
        z: function () {
          return d;
        }
      });
      var a = r(57437),
        o = r(2265),
        s = r(63355),
        l = r(13027),
        n = r(37440);
      let i = (0, l.j)(
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
        d = o.forwardRef((e, t) => {
          let { className: r, variant: o, size: l, asChild: d = !1, ...c } = e,
            u = d ? s.g7 : 'button';
          return (0, a.jsx)(u, {
            className: (0, n.cn)(i({ variant: o, size: l, className: r })),
            ref: t,
            ...c
          });
        });
      d.displayName = 'Button';
    },
    36013: function (e, t, r) {
      'use strict';
      r.d(t, {
        Ol: function () {
          return n;
        },
        SZ: function () {
          return d;
        },
        Zb: function () {
          return l;
        },
        aY: function () {
          return c;
        },
        eW: function () {
          return u;
        },
        ll: function () {
          return i;
        }
      });
      var a = r(57437),
        o = r(2265),
        s = r(37440);
      let l = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, s.cn)(
            'rounded-xl border bg-card text-card-foreground shadow',
            r
          ),
          ...o
        });
      });
      l.displayName = 'Card';
      let n = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, s.cn)('flex flex-col space-y-1.5 p-6', r),
          ...o
        });
      });
      n.displayName = 'CardHeader';
      let i = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)('h3', {
          ref: t,
          className: (0, s.cn)('font-semibold leading-none tracking-tight', r),
          ...o
        });
      });
      i.displayName = 'CardTitle';
      let d = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)('p', {
          ref: t,
          className: (0, s.cn)('text-sm text-muted-foreground', r),
          ...o
        });
      });
      d.displayName = 'CardDescription';
      let c = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, s.cn)('p-6 pt-0', r),
          ...o
        });
      });
      c.displayName = 'CardContent';
      let u = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, s.cn)('flex items-center p-6 pt-0', r),
          ...o
        });
      });
      u.displayName = 'CardFooter';
    },
    85822: function (e, t, r) {
      'use strict';
      r.d(t, {
        BO: function () {
          return m;
        },
        dg: function () {
          return b;
        },
        h7: function () {
          return p;
        }
      });
      var a = r(57437),
        o = r(2265),
        s = r(35231),
        l = r(85475),
        n = r(20153),
        i = r(37440);
      let d = { light: '', dark: '.dark' },
        c = o.createContext(null);
      function u() {
        let e = o.useContext(c);
        if (!e)
          throw Error('useChart must be used within a <ChartContainer />');
        return e;
      }
      let m = o.forwardRef((e, t) => {
        let { id: r, className: l, children: n, config: d, ...u } = e,
          m = o.useId(),
          p = 'chart-'.concat(r || m.replace(/:/g, ''));
        return (0, a.jsx)(c.Provider, {
          value: { config: d },
          children: (0, a.jsxs)('div', {
            'data-chart': p,
            ref: t,
            className: (0, i.cn)(
              "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line-line]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
              l
            ),
            ...u,
            children: [
              (0, a.jsx)(f, { id: p, config: d }),
              (0, a.jsx)(s.h, { debounce: 2e3, children: n })
            ]
          })
        });
      });
      m.displayName = 'Chart';
      let f = (e) => {
          let { id: t, config: r } = e,
            o = Object.entries(r).filter((e) => {
              let [t, r] = e;
              return r.theme || r.color;
            });
          if (!o.length) return null;
          let s = Object.entries(d)
            .map((e) => {
              let [r, a] = e,
                s = o
                  .map((e) => {
                    var t;
                    let [a, o] = e,
                      s =
                        (null === (t = o.theme) || void 0 === t
                          ? void 0
                          : t[r]) || o.color;
                    return s
                      ? '  --color-'.concat(a, ': ').concat(s, ';')
                      : null;
                  })
                  .filter(Boolean)
                  .join('\n');
              return ''
                .concat(a, ' [data-chart=')
                .concat(t, '] {\n')
                .concat(s, '\n}');
            })
            .join('\n');
          return (0, a.jsx)('style', {
            dangerouslySetInnerHTML: { __html: s }
          });
        },
        p = l.u,
        b = o.forwardRef((e, t) => {
          let {
              active: r,
              payload: s,
              className: l,
              indicator: n = 'dot',
              hideLabel: d = !1,
              hideIndicator: c = !1,
              label: m,
              labelFormatter: f,
              labelClassName: p,
              formatter: b,
              color: x,
              nameKey: g,
              labelKey: v
            } = e,
            { config: y } = u(),
            k = o.useMemo(() => {
              var e;
              if (d || !(null == s ? void 0 : s.length)) return null;
              let [t] = s,
                r = ''.concat(v || t.dataKey || t.name || 'value'),
                o = h(y, t, r),
                l =
                  v || 'string' != typeof m
                    ? null == o
                      ? void 0
                      : o.label
                    : (null === (e = y[m]) || void 0 === e
                        ? void 0
                        : e.label) || m;
              return f
                ? (0, a.jsx)('div', {
                    className: (0, i.cn)('font-medium', p),
                    children: f(l, s)
                  })
                : l
                ? (0, a.jsx)('div', {
                    className: (0, i.cn)('font-medium', p),
                    children: l
                  })
                : null;
            }, [m, f, s, d, p, y, v]);
          if (!r || !(null == s ? void 0 : s.length)) return null;
          let j = 1 === s.length && 'dot' !== n;
          return (0, a.jsxs)('div', {
            ref: t,
            className: (0, i.cn)(
              'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
              l
            ),
            children: [
              j ? null : k,
              (0, a.jsx)('div', {
                className: 'grid gap-1.5',
                children: s.map((e, t) => {
                  let r = ''.concat(g || e.name || e.dataKey || 'value'),
                    o = h(y, e, r),
                    s = x || e.payload.fill || e.color;
                  return (0, a.jsx)(
                    'div',
                    {
                      className: (0, i.cn)(
                        'flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground',
                        'dot' === n && 'items-center'
                      ),
                      children:
                        b && e.value && e.name
                          ? b(e.value, e.name, e, t, e.payload)
                          : (0, a.jsxs)(a.Fragment, {
                              children: [
                                (null == o ? void 0 : o.icon)
                                  ? (0, a.jsx)(o.icon, {})
                                  : !c &&
                                    (0, a.jsx)('div', {
                                      className: (0, i.cn)(
                                        'shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]',
                                        {
                                          'h-2.5 w-2.5': 'dot' === n,
                                          'w-1': 'line' === n,
                                          'w-0 border-[1.5px] border-dashed bg-transparent':
                                            'dashed' === n,
                                          'my-0.5': j && 'dashed' === n
                                        }
                                      ),
                                      style: {
                                        '--color-bg': s,
                                        '--color-border': s
                                      }
                                    }),
                                (0, a.jsxs)('div', {
                                  className: (0, i.cn)(
                                    'flex flex-1 justify-between leading-none',
                                    j ? 'items-end' : 'items-center'
                                  ),
                                  children: [
                                    (0, a.jsxs)('div', {
                                      className: 'grid gap-1.5',
                                      children: [
                                        j ? k : null,
                                        (0, a.jsx)('span', {
                                          className: 'text-muted-foreground',
                                          children:
                                            (null == o ? void 0 : o.label) ||
                                            e.name
                                        })
                                      ]
                                    }),
                                    e.value &&
                                      (0, a.jsx)('span', {
                                        className:
                                          'font-mono font-medium tabular-nums text-foreground',
                                        children: e.value.toLocaleString()
                                      })
                                  ]
                                })
                              ]
                            })
                    },
                    e.dataKey
                  );
                })
              })
            ]
          });
        });
      function h(e, t, r) {
        if ('object' != typeof t || null === t) return;
        let a =
            'payload' in t && 'object' == typeof t.payload && null !== t.payload
              ? t.payload
              : void 0,
          o = r;
        return (
          r in t && 'string' == typeof t[r]
            ? (o = t[r])
            : a && r in a && 'string' == typeof a[r] && (o = a[r]),
          o in e ? e[o] : e[r]
        );
      }
      (b.displayName = 'ChartTooltip'),
        n.D,
        (o.forwardRef((e, t) => {
          let {
              className: r,
              hideIcon: o = !1,
              payload: s,
              verticalAlign: l = 'bottom',
              nameKey: n
            } = e,
            { config: d } = u();
          return (null == s ? void 0 : s.length)
            ? (0, a.jsx)('div', {
                ref: t,
                className: (0, i.cn)(
                  'flex items-center justify-center gap-4',
                  'top' === l ? 'pb-3' : 'pt-3',
                  r
                ),
                children: s.map((e) => {
                  let t = ''.concat(n || e.dataKey || 'value'),
                    r = h(d, e, t);
                  return (0, a.jsxs)(
                    'div',
                    {
                      className: (0, i.cn)(
                        'flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground'
                      ),
                      children: [
                        (null == r ? void 0 : r.icon) && !o
                          ? (0, a.jsx)(r.icon, {})
                          : (0, a.jsx)('div', {
                              className: 'h-2 w-2 shrink-0 rounded-[2px]',
                              style: { backgroundColor: e.color }
                            }),
                        null == r ? void 0 : r.label
                      ]
                    },
                    e.value
                  );
                })
              })
            : null;
        }).displayName = 'ChartLegend');
    },
    19573: function (e, t, r) {
      'use strict';
      r.d(t, {
        J2: function () {
          return n;
        },
        xo: function () {
          return i;
        },
        yk: function () {
          return d;
        }
      });
      var a = r(57437),
        o = r(2265),
        s = r(89236),
        l = r(37440);
      let n = s.fC,
        i = s.xz,
        d = o.forwardRef((e, t) => {
          let {
            className: r,
            align: o = 'center',
            sideOffset: n = 4,
            ...i
          } = e;
          return (0, a.jsx)(s.h_, {
            children: (0, a.jsx)(s.VY, {
              ref: t,
              align: o,
              sideOffset: n,
              className: (0, l.cn)(
                'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                r
              ),
              ...i
            })
          });
        });
      d.displayName = s.VY.displayName;
    },
    94880: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          ScrollArea: function () {
            return n;
          },
          ScrollBar: function () {
            return i;
          }
        });
      var a = r(57437),
        o = r(2265),
        s = r(80023),
        l = r(37440);
      let n = o.forwardRef((e, t) => {
        let { className: r, children: o, ...n } = e;
        return (0, a.jsxs)(s.fC, {
          ref: t,
          className: (0, l.cn)('relative', r),
          ...n,
          children: [
            (0, a.jsx)(s.l_, {
              className: 'h-full w-full rounded-[inherit]',
              children: o
            }),
            (0, a.jsx)(i, {}),
            (0, a.jsx)(s.Ns, {})
          ]
        });
      });
      n.displayName = s.fC.displayName;
      let i = o.forwardRef((e, t) => {
        let { className: r, orientation: o = 'vertical', ...n } = e;
        return (0, a.jsx)(s.gb, {
          ref: t,
          orientation: o,
          className: (0, l.cn)(
            'flex touch-none select-none transition-colors',
            'vertical' === o &&
              'h-full w-2.5 border-l border-l-transparent p-[1px]',
            'horizontal' === o &&
              'h-2.5 flex-col border-t border-t-transparent p-[1px]',
            r
          ),
          ...n,
          children: (0, a.jsx)(s.q4, {
            className: 'relative flex-1 rounded-full bg-border'
          })
        });
      });
      i.displayName = s.gb.displayName;
    },
    85273: function (e, t, r) {
      'use strict';
      r.d(t, {
        Tabs: function () {
          return n;
        },
        TabsContent: function () {
          return c;
        },
        TabsList: function () {
          return i;
        },
        TabsTrigger: function () {
          return d;
        }
      });
      var a = r(57437),
        o = r(2265),
        s = r(9385),
        l = r(37440);
      let n = s.fC,
        i = o.forwardRef((e, t) => {
          let { className: r, ...o } = e;
          return (0, a.jsx)(s.aV, {
            ref: t,
            className: (0, l.cn)(
              'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
              r
            ),
            ...o
          });
        });
      i.displayName = s.aV.displayName;
      let d = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)(s.xz, {
          ref: t,
          className: (0, l.cn)(
            'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
            r
          ),
          ...o
        });
      });
      d.displayName = s.xz.displayName;
      let c = o.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, a.jsx)(s.VY, {
          ref: t,
          className: (0, l.cn)(
            'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            r
          ),
          ...o
        });
      });
      c.displayName = s.VY.displayName;
    },
    37440: function (e, t, r) {
      'use strict';
      r.d(t, {
        cn: function () {
          return s;
        },
        t: function () {
          return n;
        },
        u: function () {
          return l;
        }
      });
      var a = r(44839),
        o = r(78077);
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, o.m)((0, a.W)(t));
      }
      function l(e) {
        if (!e) return !1;
        let t = e.data.current;
        return (
          (null == t ? void 0 : t.type) === 'Column' ||
          (null == t ? void 0 : t.type) === 'Task'
        );
      }
      function n(e) {
        var t, r;
        let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { decimals: o = 0, sizeType: s = 'normal' } = a;
        if (0 === e) return '0 Byte';
        let l = Math.floor(Math.log(e) / Math.log(1024));
        return ''
          .concat((e / Math.pow(1024, l)).toFixed(o), ' ')
          .concat(
            'accurate' === s
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
    }
  },
  function (e) {
    e.O(0, [310, 795, 366, 208, 236, 146, 971, 526, 744], function () {
      return e((e.s = 54569));
    }),
      (_N_E = e.O());
  }
]);
