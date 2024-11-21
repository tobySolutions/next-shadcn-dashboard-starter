(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [87],
  {
    82569: function (e, s, l) {
      Promise.resolve().then(l.bind(l, 3846)),
        Promise.resolve().then(l.bind(l, 29119)),
        Promise.resolve().then(l.bind(l, 94880)),
        Promise.resolve().then(l.bind(l, 64344)),
        Promise.resolve().then(l.bind(l, 83265)),
        Promise.resolve().then(l.t.bind(l, 231, 23));
    },
    3846: function (e, s, l) {
      'use strict';
      l.d(s, {
        columns: function () {
          return v;
        }
      });
      var r = l(57437),
        t = l(66648),
        a = l(68720),
        n = l(50495),
        i = l(46910),
        o = l(63550),
        c = l(6649),
        u = l(90399),
        h = l(16463),
        d = l(2265);
      let m = (e) => {
          let { data: s } = e,
            [l, t] = (0, d.useState)(!1),
            [m, v] = (0, d.useState)(!1),
            f = (0, h.useRouter)(),
            p = async () => {};
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(a.V, {
                isOpen: m,
                onClose: () => v(!1),
                onConfirm: p,
                loading: l
              }),
              (0, r.jsxs)(i.h_, {
                modal: !1,
                children: [
                  (0, r.jsx)(i.$F, {
                    asChild: !0,
                    children: (0, r.jsxs)(n.z, {
                      variant: 'ghost',
                      className: 'h-8 w-8 p-0',
                      children: [
                        (0, r.jsx)('span', {
                          className: 'sr-only',
                          children: 'Open menu'
                        }),
                        (0, r.jsx)(o.Z, { className: 'h-4 w-4' })
                      ]
                    })
                  }),
                  (0, r.jsxs)(i.AW, {
                    align: 'end',
                    children: [
                      (0, r.jsx)(i.Ju, { children: 'Actions' }),
                      (0, r.jsxs)(i.Xi, {
                        onClick: () =>
                          f.push('/dashboard/product/'.concat(s.id)),
                        children: [
                          (0, r.jsx)(c.Z, { className: 'mr-2 h-4 w-4' }),
                          ' Update'
                        ]
                      }),
                      (0, r.jsxs)(i.Xi, {
                        onClick: () => v(!0),
                        children: [
                          (0, r.jsx)(u.Z, { className: 'mr-2 h-4 w-4' }),
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
        v = [
          {
            accessorKey: 'photo_url',
            header: 'IMAGE',
            cell: (e) => {
              let { row: s } = e;
              return (0, r.jsx)('div', {
                className: 'relative aspect-square',
                children: (0, r.jsx)(t.default, {
                  src: s.getValue('photo_url'),
                  alt: s.getValue('name'),
                  fill: !0,
                  className: 'rounded-lg'
                })
              });
            }
          },
          { accessorKey: 'name', header: 'NAME' },
          { accessorKey: 'category', header: 'CATEGORY' },
          { accessorKey: 'price', header: 'PRICE' },
          { accessorKey: 'description', header: 'DESCRIPTION' },
          {
            id: 'actions',
            cell: (e) => {
              let { row: s } = e;
              return (0, r.jsx)(m, { data: s.original });
            }
          }
        ];
    },
    29119: function (e, s, l) {
      'use strict';
      l.d(s, {
        default: function () {
          return h;
        }
      });
      var r = l(57437),
        t = l(31903),
        a = l(37118),
        n = l(77636),
        i = l(6643),
        o = l(11699),
        c = l(2265);
      let u = [
        { value: 'Electronics', label: 'Electronics' },
        { value: 'Furniture', label: 'Furniture' },
        { value: 'Clothing', label: 'Clothing' },
        { value: 'Toys', label: 'Toys' },
        { value: 'Groceries', label: 'Groceries' },
        { value: 'Books', label: 'Books' },
        { value: 'Jewelry', label: 'Jewelry' },
        { value: 'Beauty Products', label: 'Beauty Products' }
      ];
      function h() {
        let {
          categoriesFilter: e,
          setCategoriesFilter: s,
          isAnyFilterActive: l,
          resetFilters: h,
          searchQuery: d,
          setPage: m,
          setSearchQuery: v
        } = (function () {
          let [e, s] = (0, o.v1)(
              'q',
              i.I4.q
                .withOptions({ shallow: !1, throttleMs: 1e3 })
                .withDefault('')
            ),
            [l, r] = (0, o.v1)(
              'categories',
              i.I4.categories.withOptions({ shallow: !1 }).withDefault('')
            ),
            [t, a] = (0, o.v1)('page', i.I4.page.withDefault(1)),
            n = (0, c.useCallback)(() => {
              s(null), r(null), a(1);
            }, [s, r, a]),
            u = (0, c.useMemo)(() => !!e || !!l, [e, l]);
          return {
            searchQuery: e,
            setSearchQuery: s,
            page: t,
            setPage: a,
            resetFilters: n,
            isAnyFilterActive: u,
            categoriesFilter: l,
            setCategoriesFilter: r
          };
        })();
        return (0, r.jsxs)('div', {
          className: 'flex flex-wrap items-center gap-4',
          children: [
            (0, r.jsx)(n.h, {
              searchKey: 'name',
              searchQuery: d,
              setSearchQuery: v,
              setPage: m
            }),
            (0, r.jsx)(t.o, {
              filterKey: 'categories',
              title: 'Categories',
              options: u,
              setFilterValue: s,
              filterValue: e
            }),
            (0, r.jsx)(a.Y, { isFilterActive: l, onReset: h })
          ]
        });
      }
    }
  },
  function (e) {
    e.O(
      0,
      [310, 795, 366, 208, 673, 243, 134, 236, 534, 648, 714, 971, 526, 744],
      function () {
        return e((e.s = 82569));
      }
    ),
      (_N_E = e.O());
  }
]);
