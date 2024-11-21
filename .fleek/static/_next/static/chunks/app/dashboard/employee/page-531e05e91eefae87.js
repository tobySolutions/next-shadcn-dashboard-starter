(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [37],
  {
    54905: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 49221)),
        Promise.resolve().then(r.bind(r, 94880)),
        Promise.resolve().then(r.bind(r, 64344)),
        Promise.resolve().then(r.t.bind(r, 231, 23));
    },
    49221: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return G;
        }
      });
      var a = r(57437),
        n = r(83265),
        s = r(31903),
        l = r(37118),
        c = r(77636),
        i = r(2265),
        o = r(22988),
        d = r(1584),
        u = r(98324),
        h = r(78149),
        f = r(91715),
        m = r(47250),
        b = r(75238),
        p = r(31383),
        x = r(18676);
      let g = 'Checkbox',
        [k, v] = (0, u.b)(g),
        [y, w] = k(g),
        j = (0, i.forwardRef)((e, t) => {
          let {
              __scopeCheckbox: r,
              name: a,
              checked: n,
              defaultChecked: s,
              required: l,
              disabled: c,
              value: u = 'on',
              onCheckedChange: m,
              ...b
            } = e,
            [p, g] = (0, i.useState)(null),
            k = (0, d.e)(t, (e) => g(e)),
            v = (0, i.useRef)(!1),
            w = !p || !!p.closest('form'),
            [j = !1, C] = (0, f.T)({ prop: n, defaultProp: s, onChange: m }),
            R = (0, i.useRef)(j);
          return (
            (0, i.useEffect)(() => {
              let e = null == p ? void 0 : p.form;
              if (e) {
                let t = () => C(R.current);
                return (
                  e.addEventListener('reset', t),
                  () => e.removeEventListener('reset', t)
                );
              }
            }, [p, C]),
            (0, i.createElement)(
              y,
              { scope: r, state: j, disabled: c },
              (0, i.createElement)(
                x.WV.button,
                (0, o.Z)(
                  {
                    type: 'button',
                    role: 'checkbox',
                    'aria-checked': N(j) ? 'mixed' : j,
                    'aria-required': l,
                    'data-state': P(j),
                    'data-disabled': c ? '' : void 0,
                    disabled: c,
                    value: u
                  },
                  b,
                  {
                    ref: k,
                    onKeyDown: (0, h.M)(e.onKeyDown, (e) => {
                      'Enter' === e.key && e.preventDefault();
                    }),
                    onClick: (0, h.M)(e.onClick, (e) => {
                      C((e) => !!N(e) || !e),
                        w &&
                          ((v.current = e.isPropagationStopped()),
                          v.current || e.stopPropagation());
                    })
                  }
                )
              ),
              w &&
                (0, i.createElement)(E, {
                  control: p,
                  bubbles: !v.current,
                  name: a,
                  value: u,
                  checked: j,
                  required: l,
                  disabled: c,
                  style: { transform: 'translateX(-100%)' }
                })
            )
          );
        }),
        C = (0, i.forwardRef)((e, t) => {
          let { __scopeCheckbox: r, forceMount: a, ...n } = e,
            s = w('CheckboxIndicator', r);
          return (0, i.createElement)(
            p.z,
            { present: a || N(s.state) || !0 === s.state },
            (0, i.createElement)(
              x.WV.span,
              (0, o.Z)(
                {
                  'data-state': P(s.state),
                  'data-disabled': s.disabled ? '' : void 0
                },
                n,
                { ref: t, style: { pointerEvents: 'none', ...e.style } }
              )
            )
          );
        }),
        E = (e) => {
          let { control: t, checked: r, bubbles: a = !0, ...n } = e,
            s = (0, i.useRef)(null),
            l = (0, m.D)(r),
            c = (0, b.t)(t);
          return (
            (0, i.useEffect)(() => {
              let e = s.current,
                t = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  'checked'
                ).set;
              if (l !== r && t) {
                let n = new Event('click', { bubbles: a });
                (e.indeterminate = N(r)),
                  t.call(e, !N(r) && r),
                  e.dispatchEvent(n);
              }
            }, [l, r, a]),
            (0, i.createElement)(
              'input',
              (0, o.Z)(
                {
                  type: 'checkbox',
                  'aria-hidden': !0,
                  defaultChecked: !N(r) && r
                },
                n,
                {
                  tabIndex: -1,
                  ref: s,
                  style: {
                    ...e.style,
                    ...c,
                    position: 'absolute',
                    pointerEvents: 'none',
                    opacity: 0,
                    margin: 0
                  }
                }
              )
            )
          );
        };
      function N(e) {
        return 'indeterminate' === e;
      }
      function P(e) {
        return N(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
      }
      var R = r(4867),
        S = r(37440);
      let _ = i.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(j, {
          ref: t,
          className: (0, S.cn)(
            'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
            r
          ),
          ...n,
          children: (0, a.jsx)(C, {
            className: (0, S.cn)(
              'flex items-center justify-center text-current'
            ),
            children: (0, a.jsx)(R.nQG, { className: 'h-4 w-4' })
          })
        });
      });
      _.displayName = j.displayName;
      var D = r(68720),
        I = r(50495),
        M = r(46910),
        O = r(63550),
        K = r(6649),
        A = r(90399),
        Z = r(16463);
      let q = (e) => {
          let { data: t } = e,
            [r, n] = (0, i.useState)(!1),
            [s, l] = (0, i.useState)(!1),
            c = (0, Z.useRouter)(),
            o = async () => {};
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(D.V, {
                isOpen: s,
                onClose: () => l(!1),
                onConfirm: o,
                loading: r
              }),
              (0, a.jsxs)(M.h_, {
                modal: !1,
                children: [
                  (0, a.jsx)(M.$F, {
                    asChild: !0,
                    children: (0, a.jsxs)(I.z, {
                      variant: 'ghost',
                      className: 'h-8 w-8 p-0',
                      children: [
                        (0, a.jsx)('span', {
                          className: 'sr-only',
                          children: 'Open menu'
                        }),
                        (0, a.jsx)(O.Z, { className: 'h-4 w-4' })
                      ]
                    })
                  }),
                  (0, a.jsxs)(M.AW, {
                    align: 'end',
                    children: [
                      (0, a.jsx)(M.Ju, { children: 'Actions' }),
                      (0, a.jsxs)(M.Xi, {
                        onClick: () => c.push('/dashboard/user/'.concat(t.id)),
                        children: [
                          (0, a.jsx)(K.Z, { className: 'mr-2 h-4 w-4' }),
                          ' Update'
                        ]
                      }),
                      (0, a.jsxs)(M.Xi, {
                        onClick: () => l(!0),
                        children: [
                          (0, a.jsx)(A.Z, { className: 'mr-2 h-4 w-4' }),
                          ' Delete'
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          });
        },
        F = [
          {
            id: 'select',
            header: (e) => {
              let { table: t } = e;
              return (0, a.jsx)(_, {
                checked: t.getIsAllPageRowsSelected(),
                onCheckedChange: (e) => t.toggleAllPageRowsSelected(!!e),
                'aria-label': 'Select all'
              });
            },
            cell: (e) => {
              let { row: t } = e;
              return (0, a.jsx)(_, {
                checked: t.getIsSelected(),
                onCheckedChange: (e) => t.toggleSelected(!!e),
                'aria-label': 'Select row'
              });
            },
            enableSorting: !1,
            enableHiding: !1
          },
          { accessorKey: 'first_name', header: 'NAME' },
          { accessorKey: 'country', header: 'COUNTRY' },
          { accessorKey: 'email', header: 'EMAIL' },
          { accessorKey: 'job', header: 'COMPANY' },
          { accessorKey: 'gender', header: 'GENDER' },
          {
            id: 'actions',
            cell: (e) => {
              let { row: t } = e;
              return (0, a.jsx)(q, { data: t.original });
            }
          }
        ];
      var V = r(6643),
        L = r(11699);
      let T = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
      ];
      function G(e) {
        let { data: t, totalData: r } = e,
          {
            genderFilter: o,
            setGenderFilter: d,
            isAnyFilterActive: u,
            resetFilters: h,
            searchQuery: f,
            setPage: m,
            setSearchQuery: b
          } = (function () {
            let [e, t] = (0, L.v1)(
                'q',
                V.I4.q
                  .withOptions({ shallow: !1, throttleMs: 1e3 })
                  .withDefault('')
              ),
              [r, a] = (0, L.v1)(
                'gender',
                V.I4.gender.withOptions({ shallow: !1 }).withDefault('')
              ),
              [n, s] = (0, L.v1)('page', V.I4.page.withDefault(1)),
              l = (0, i.useCallback)(() => {
                t(null), a(null), s(1);
              }, [t, a, s]),
              c = (0, i.useMemo)(() => !!e || !!r, [e, r]);
            return {
              searchQuery: e,
              setSearchQuery: t,
              genderFilter: r,
              setGenderFilter: a,
              page: n,
              setPage: s,
              resetFilters: l,
              isAnyFilterActive: c
            };
          })();
        return (0, a.jsxs)('div', {
          className: 'space-y-4',
          children: [
            (0, a.jsxs)('div', {
              className: 'flex flex-wrap items-center gap-4',
              children: [
                (0, a.jsx)(c.h, {
                  searchKey: 'name',
                  searchQuery: f,
                  setSearchQuery: b,
                  setPage: m
                }),
                (0, a.jsx)(s.o, {
                  filterKey: 'gender',
                  title: 'Gender',
                  options: T,
                  setFilterValue: d,
                  filterValue: o
                }),
                (0, a.jsx)(l.Y, { isFilterActive: u, onReset: h })
              ]
            }),
            (0, a.jsx)(n.DataTable, { columns: F, data: t, totalItems: r })
          ]
        });
      }
    }
  },
  function (e) {
    e.O(
      0,
      [310, 795, 366, 208, 673, 243, 134, 236, 534, 714, 971, 526, 744],
      function () {
        return e((e.s = 54905));
      }
    ),
      (_N_E = e.O());
  }
]);
