(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [166],
  {
    49792: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 23494)),
        Promise.resolve().then(a.bind(a, 10854)),
        Promise.resolve().then(a.bind(a, 94880));
    },
    23494: function (e, t, a) {
      'use strict';
      a.d(t, {
        KanbanBoard: function () {
          return I;
        }
      });
      var n = a(57437),
        r = a(2265),
        s = a(54887),
        o = a(16936),
        l = a(37440),
        i = a(75149),
        d = a(85392),
        c = a(15554),
        u = a(13027),
        f = a(71322),
        m = a(50495),
        p = a(36013),
        x = a(4867),
        g = a(24758);
      let h = g.fC;
      g.xz;
      let v = g.h_,
        y = r.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, n.jsx)(g.aV, {
            className: (0, l.cn)(
              'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              a
            ),
            ...r,
            ref: t
          });
        });
      y.displayName = g.aV.displayName;
      let j = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsxs)(v, {
          children: [
            (0, n.jsx)(y, {}),
            (0, n.jsx)(g.VY, {
              ref: t,
              className: (0, l.cn)(
                'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                a
              ),
              ...r
            })
          ]
        });
      });
      j.displayName = g.VY.displayName;
      let N = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('div', {
          className: (0, l.cn)(
            'flex flex-col space-y-2 text-center sm:text-left',
            t
          ),
          ...a
        });
      };
      N.displayName = 'AlertDialogHeader';
      let b = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('div', {
          className: (0, l.cn)(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            t
          ),
          ...a
        });
      };
      b.displayName = 'AlertDialogFooter';
      let w = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)(g.Dx, {
          ref: t,
          className: (0, l.cn)('text-lg font-semibold', a),
          ...r
        });
      });
      w.displayName = g.Dx.displayName;
      let k = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)(g.dk, {
          ref: t,
          className: (0, l.cn)('text-sm text-muted-foreground', a),
          ...r
        });
      });
      (k.displayName = g.dk.displayName),
        (r.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, n.jsx)(g.aU, {
            ref: t,
            className: (0, l.cn)((0, m.d)(), a),
            ...r
          });
        }).displayName = g.aU.displayName);
      let C = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)(g.$j, {
          ref: t,
          className: (0, l.cn)(
            (0, m.d)({ variant: 'outline' }),
            'mt-2 sm:mt-0',
            a
          ),
          onClick: () =>
            setTimeout(() => (document.body.style.pointerEvents = ''), 100),
          ...r
        });
      });
      C.displayName = g.$j.displayName;
      var T = a(46910),
        D = a(83102),
        R = a(27776);
      function z(e) {
        let { title: t, id: a } = e,
          [s, l] = r.useState(!1),
          [i, d] = r.useState(t),
          c = (0, o.D)((e) => e.updateCol),
          u = (0, o.D)((e) => e.removeCol),
          [f, p] = r.useState(!0),
          [g, v] = r.useState(!1),
          y = r.useRef(null);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)('form', {
              onSubmit: (e) => {
                e.preventDefault(),
                  p(!f),
                  c(a, i),
                  (0, R.Am)(''.concat(t, ' updated to ').concat(i));
              },
              children: (0, n.jsx)(D.I, {
                value: i,
                onChange: (e) => d(e.target.value),
                className:
                  '!mt-0 mr-auto text-base disabled:cursor-pointer disabled:border-none disabled:opacity-100',
                disabled: f,
                ref: y
              })
            }),
            (0, n.jsxs)(T.h_, {
              modal: !1,
              children: [
                (0, n.jsx)(T.$F, {
                  asChild: !0,
                  children: (0, n.jsxs)(m.z, {
                    variant: 'secondary',
                    className: 'ml-1',
                    children: [
                      (0, n.jsx)('span', {
                        className: 'sr-only',
                        children: 'Actions'
                      }),
                      (0, n.jsx)(x.nWS, { className: 'h-4 w-4' })
                    ]
                  })
                }),
                (0, n.jsxs)(T.AW, {
                  align: 'end',
                  children: [
                    (0, n.jsx)(T.Xi, {
                      onSelect: () => {
                        p(!f),
                          setTimeout(() => {
                            var e;
                            y.current &&
                              (null === (e = y.current) ||
                                void 0 === e ||
                                e.focus());
                          }, 500);
                      },
                      children: 'Rename'
                    }),
                    (0, n.jsx)(T.VD, {}),
                    (0, n.jsx)(T.Xi, {
                      onSelect: () => v(!0),
                      className: 'text-red-600',
                      children: 'Delete Section'
                    })
                  ]
                })
              ]
            }),
            (0, n.jsx)(h, {
              open: g,
              onOpenChange: v,
              children: (0, n.jsxs)(j, {
                children: [
                  (0, n.jsxs)(N, {
                    children: [
                      (0, n.jsx)(w, {
                        children: 'Are you sure want to delete column?'
                      }),
                      (0, n.jsx)(k, {
                        children:
                          'NOTE: All tasks related to this category will also be deleted.'
                      })
                    ]
                  }),
                  (0, n.jsxs)(b, {
                    children: [
                      (0, n.jsx)(C, { children: 'Cancel' }),
                      (0, n.jsx)(m.z, {
                        variant: 'destructive',
                        onClick: () => {
                          setTimeout(
                            () => (document.body.style.pointerEvents = ''),
                            100
                          ),
                            v(!1),
                            u(a),
                            (0, R.Am)('This column has been deleted.');
                        },
                        children: 'Delete'
                      })
                    ]
                  })
                ]
              })
            })
          ]
        });
      }
      var O = a(94693);
      function S(e) {
        let { task: t, isOverlay: a } = e,
          {
            setNodeRef: r,
            attributes: s,
            listeners: o,
            transform: l,
            transition: i,
            isDragging: x
          } = (0, d.nB)({
            id: t.id,
            data: { type: 'Task', task: t },
            attributes: { roleDescription: 'Task' }
          }),
          g = { transition: i, transform: c.ux.Translate.toString(l) },
          h = (0, u.j)('', {
            variants: {
              dragging: {
                over: 'ring-2 opacity-30',
                overlay: 'ring-2 ring-primary'
              }
            }
          });
        return (0, n.jsxs)(p.Zb, {
          ref: r,
          style: g,
          className: h({ dragging: a ? 'overlay' : x ? 'over' : void 0 }),
          children: [
            (0, n.jsxs)(p.Ol, {
              className:
                'space-between relative flex flex-row border-b-2 border-secondary px-3 py-3',
              children: [
                (0, n.jsxs)(m.z, {
                  variant: 'ghost',
                  ...s,
                  ...o,
                  className:
                    '-ml-2 h-auto cursor-grab p-1 text-secondary-foreground/50',
                  children: [
                    (0, n.jsx)('span', {
                      className: 'sr-only',
                      children: 'Move task'
                    }),
                    (0, n.jsx)(f.Z, {})
                  ]
                }),
                (0, n.jsx)(O.C, {
                  variant: 'outline',
                  className: 'ml-auto font-semibold',
                  children: 'Task'
                })
              ]
            }),
            (0, n.jsx)(p.aY, {
              className: 'whitespace-pre-wrap px-3 pb-6 pt-3 text-left',
              children: t.title
            })
          ]
        });
      }
      var B = a(94880);
      function A(e) {
        let { column: t, tasks: a, isOverlay: s } = e,
          o = (0, r.useMemo)(() => a.map((e) => e.id), [a]),
          {
            setNodeRef: l,
            attributes: i,
            listeners: x,
            transform: g,
            transition: h,
            isDragging: v
          } = (0, d.nB)({
            id: t.id,
            data: { type: 'Column', column: t },
            attributes: { roleDescription: 'Column: '.concat(t.title) }
          }),
          y = { transition: h, transform: c.ux.Translate.toString(g) },
          j = (0, u.j)(
            'h-[75vh] max-h-[75vh] w-[350px] max-w-full bg-secondary flex flex-col flex-shrink-0 snap-center',
            {
              variants: {
                dragging: {
                  default: 'border-2 border-transparent',
                  over: 'ring-2 opacity-30',
                  overlay: 'ring-2 ring-primary'
                }
              }
            }
          );
        return (0, n.jsxs)(p.Zb, {
          ref: l,
          style: y,
          className: j({ dragging: s ? 'overlay' : v ? 'over' : void 0 }),
          children: [
            (0, n.jsxs)(p.Ol, {
              className:
                'space-between flex flex-row items-center border-b-2 p-4 text-left font-semibold',
              children: [
                (0, n.jsxs)(m.z, {
                  variant: 'ghost',
                  ...i,
                  ...x,
                  className:
                    ' relative -ml-2 h-auto cursor-grab p-1 text-primary/50',
                  children: [
                    (0, n.jsx)('span', {
                      className: 'sr-only',
                      children: 'Move column: '.concat(t.title)
                    }),
                    (0, n.jsx)(f.Z, {})
                  ]
                }),
                (0, n.jsx)(z, { id: t.id, title: t.title })
              ]
            }),
            (0, n.jsx)(p.aY, {
              className: 'flex flex-grow flex-col gap-4 overflow-x-hidden p-2',
              children: (0, n.jsx)(B.ScrollArea, {
                className: 'h-full',
                children: (0, n.jsx)(d.Fo, {
                  items: o,
                  children: a.map((e) => (0, n.jsx)(S, { task: e }, e.id))
                })
              })
            })
          ]
        });
      }
      function V(e) {
        let { children: t } = e,
          a = (0, i.Cj)(),
          r = (0, u.j)('px-2  pb-4 md:px-0 flex lg:justify-start', {
            variants: { dragging: { default: '', active: 'snap-none' } }
          });
        return (0, n.jsxs)(B.ScrollArea, {
          className: 'w-full whitespace-nowrap rounded-md',
          children: [
            (0, n.jsx)('div', {
              className: r({ dragging: a.active ? 'active' : 'default' }),
              children: (0, n.jsx)('div', {
                className: 'flex flex-row items-start justify-center gap-4',
                children: t
              })
            }),
            (0, n.jsx)(B.ScrollBar, { orientation: 'horizontal' })
          ]
        });
      }
      var _ = a(90837);
      function F() {
        let e = (0, o.D)((e) => e.addCol);
        return (0, n.jsxs)(_.Vq, {
          children: [
            (0, n.jsx)(_.hg, {
              asChild: !0,
              children: (0, n.jsx)(m.z, {
                variant: 'secondary',
                size: 'lg',
                className: 'w-full',
                children: '＋ Add New Section'
              })
            }),
            (0, n.jsxs)(_.cZ, {
              className: 'sm:max-w-[425px]',
              children: [
                (0, n.jsxs)(_.fK, {
                  children: [
                    (0, n.jsx)(_.$N, { children: 'Add New Section' }),
                    (0, n.jsx)(_.Be, {
                      children: 'What section you want to add today?'
                    })
                  ]
                }),
                (0, n.jsx)('form', {
                  id: 'todo-form',
                  className: 'grid gap-4 py-4',
                  onSubmit: (t) => {
                    t.preventDefault();
                    let { title: a } = Object.fromEntries(
                      new FormData(t.currentTarget)
                    );
                    'string' == typeof a && e(a);
                  },
                  children: (0, n.jsx)('div', {
                    className: 'grid grid-cols-4 items-center gap-4',
                    children: (0, n.jsx)(D.I, {
                      id: 'title',
                      name: 'title',
                      placeholder: 'Section title...',
                      className: 'col-span-4'
                    })
                  })
                }),
                (0, n.jsx)(_.cN, {
                  children: (0, n.jsx)(_.hg, {
                    asChild: !0,
                    children: (0, n.jsx)(m.z, {
                      type: 'submit',
                      size: 'sm',
                      form: 'todo-form',
                      children: 'Add Section'
                    })
                  })
                })
              ]
            })
          ]
        });
      }
      function I() {
        let e = (0, o.D)((e) => e.columns),
          t = (0, o.D)((e) => e.setCols),
          a = (0, r.useRef)('TODO'),
          c = (0, r.useMemo)(() => e.map((e) => e.id), [e]),
          u = (0, o.D)((e) => e.tasks),
          f = (0, o.D)((e) => e.setTasks),
          [m, p] = (0, r.useState)(null),
          [x, g] = (0, r.useState)(!1),
          [h, v] = (0, r.useState)(null),
          y = (0, i.Dy)((0, i.VT)(i.MA), (0, i.VT)(i.LO));
        if (
          ((0, r.useEffect)(() => {
            g(!0);
          }, [x]),
          (0, r.useEffect)(() => {
            o.D.persist.rehydrate();
          }, []),
          x)
        )
          return (0, n.jsxs)(i.LB, {
            accessibility: {
              announcements: {
                onDragStart(t) {
                  var n, r;
                  let { active: s } = t;
                  if ((0, l.u)(s)) {
                    if (
                      (null === (n = s.data.current) || void 0 === n
                        ? void 0
                        : n.type) === 'Column'
                    ) {
                      let t = c.findIndex((e) => e === s.id),
                        a = e[t];
                      return 'Picked up Column '
                        .concat(null == a ? void 0 : a.title, ' at position: ')
                        .concat(t + 1, ' of ')
                        .concat(c.length);
                    }
                    if (
                      (null === (r = s.data.current) || void 0 === r
                        ? void 0
                        : r.type) === 'Task'
                    ) {
                      a.current = s.data.current.task.status;
                      let {
                        tasksInColumn: e,
                        taskPosition: t,
                        column: n
                      } = j(s.id, a.current);
                      return 'Picked up Task '
                        .concat(s.data.current.task.title, ' at position: ')
                        .concat(t + 1, ' of ')
                        .concat(e.length, ' in column ')
                        .concat(null == n ? void 0 : n.title);
                    }
                  }
                },
                onDragOver(e) {
                  var t, n, r, s;
                  let { active: o, over: i } = e;
                  if ((0, l.u)(o) && (0, l.u)(i)) {
                    if (
                      (null === (t = o.data.current) || void 0 === t
                        ? void 0
                        : t.type) === 'Column' &&
                      (null === (n = i.data.current) || void 0 === n
                        ? void 0
                        : n.type) === 'Column'
                    ) {
                      let e = c.findIndex((e) => e === i.id);
                      return 'Column '
                        .concat(o.data.current.column.title, ' was moved over ')
                        .concat(i.data.current.column.title, ' at position ')
                        .concat(e + 1, ' of ')
                        .concat(c.length);
                    }
                    if (
                      (null === (r = o.data.current) || void 0 === r
                        ? void 0
                        : r.type) === 'Task' &&
                      (null === (s = i.data.current) || void 0 === s
                        ? void 0
                        : s.type) === 'Task'
                    ) {
                      let {
                        tasksInColumn: e,
                        taskPosition: t,
                        column: n
                      } = j(i.id, i.data.current.task.status);
                      return i.data.current.task.status !== a.current
                        ? 'Task '
                            .concat(
                              o.data.current.task.title,
                              ' was moved over column '
                            )
                            .concat(
                              null == n ? void 0 : n.title,
                              ' in position '
                            )
                            .concat(t + 1, ' of ')
                            .concat(e.length)
                        : 'Task was moved over position '
                            .concat(t + 1, ' of ')
                            .concat(e.length, ' in column ')
                            .concat(null == n ? void 0 : n.title);
                    }
                  }
                },
                onDragEnd(e) {
                  var t, n, r, s;
                  let { active: o, over: i } = e;
                  if (!(0, l.u)(o) || !(0, l.u)(i)) {
                    a.current = 'TODO';
                    return;
                  }
                  if (
                    (null === (t = o.data.current) || void 0 === t
                      ? void 0
                      : t.type) === 'Column' &&
                    (null === (n = i.data.current) || void 0 === n
                      ? void 0
                      : n.type) === 'Column'
                  ) {
                    let e = c.findIndex((e) => e === i.id);
                    return 'Column '
                      .concat(
                        o.data.current.column.title,
                        ' was dropped into position '
                      )
                      .concat(e + 1, ' of ')
                      .concat(c.length);
                  }
                  if (
                    (null === (r = o.data.current) || void 0 === r
                      ? void 0
                      : r.type) === 'Task' &&
                    (null === (s = i.data.current) || void 0 === s
                      ? void 0
                      : s.type) === 'Task'
                  ) {
                    let {
                      tasksInColumn: e,
                      taskPosition: t,
                      column: n
                    } = j(i.id, i.data.current.task.status);
                    return i.data.current.task.status !== a.current
                      ? 'Task was dropped into column '
                          .concat(null == n ? void 0 : n.title, ' in position ')
                          .concat(t + 1, ' of ')
                          .concat(e.length)
                      : 'Task was dropped into position '
                          .concat(t + 1, ' of ')
                          .concat(e.length, ' in column ')
                          .concat(null == n ? void 0 : n.title);
                  }
                  a.current = 'TODO';
                },
                onDragCancel(e) {
                  var t;
                  let { active: n } = e;
                  if (((a.current = 'TODO'), (0, l.u)(n)))
                    return 'Dragging '.concat(
                      null === (t = n.data.current) || void 0 === t
                        ? void 0
                        : t.type,
                      ' cancelled.'
                    );
                }
              }
            },
            sensors: y,
            onDragStart: function (e) {
              if (!(0, l.u)(e.active)) return;
              let t = e.active.data.current;
              if ((null == t ? void 0 : t.type) === 'Column') {
                p(t.column);
                return;
              }
              if ((null == t ? void 0 : t.type) === 'Task') {
                v(t.task);
                return;
              }
            },
            onDragEnd: function (a) {
              p(null), v(null);
              let { active: n, over: r } = a;
              if (!r) return;
              let s = n.id,
                o = r.id;
              if (!(0, l.u)(n)) return;
              let i = n.data.current;
              if (s === o || (null == i ? void 0 : i.type) !== 'Column') return;
              let c = e.findIndex((e) => e.id === s),
                u = e.findIndex((e) => e.id === o);
              t((0, d.Rp)(e, c, u));
            },
            onDragOver: function (e) {
              let { active: t, over: a } = e;
              if (!a) return;
              let n = t.id,
                r = a.id;
              if (n === r || !(0, l.u)(t) || !(0, l.u)(a)) return;
              let s = t.data.current,
                o = a.data.current,
                i = (null == s ? void 0 : s.type) === 'Task',
                c = (null == s ? void 0 : s.type) === 'Task';
              if (!i) return;
              if (i && c) {
                let e = u.findIndex((e) => e.id === n),
                  t = u.findIndex((e) => e.id === r),
                  a = u[e],
                  s = u[t];
                a &&
                  s &&
                  a.status !== s.status &&
                  ((a.status = s.status), f((0, d.Rp)(u, e, t - 1))),
                  f((0, d.Rp)(u, e, t));
              }
              let m = (null == o ? void 0 : o.type) === 'Column';
              if (i && m) {
                let e = u.findIndex((e) => e.id === n),
                  t = u[e];
                t && ((t.status = r), f((0, d.Rp)(u, e, e)));
              }
            },
            children: [
              (0, n.jsx)(V, {
                children: (0, n.jsxs)(d.Fo, {
                  items: c,
                  children: [
                    null == e
                      ? void 0
                      : e.map((t, a) =>
                          (0, n.jsxs)(
                            r.Fragment,
                            {
                              children: [
                                (0, n.jsx)(A, {
                                  column: t,
                                  tasks: u.filter((e) => e.status === t.id)
                                }),
                                a === (null == e ? void 0 : e.length) - 1 &&
                                  (0, n.jsx)('div', {
                                    className: 'w-[300px]',
                                    children: (0, n.jsx)(F, {})
                                  })
                              ]
                            },
                            t.id
                          )
                        ),
                    !e.length && (0, n.jsx)(F, {})
                  ]
                })
              }),
              'document' in window &&
                (0, s.createPortal)(
                  (0, n.jsxs)(i.y9, {
                    children: [
                      m &&
                        (0, n.jsx)(A, {
                          isOverlay: !0,
                          column: m,
                          tasks: u.filter((e) => e.status === m.id)
                        }),
                      h && (0, n.jsx)(S, { task: h, isOverlay: !0 })
                    ]
                  }),
                  document.body
                )
            ]
          });
        function j(t, a) {
          let n = u.filter((e) => e.status === a),
            r = n.findIndex((e) => e.id === t);
          return {
            tasksInColumn: n,
            taskPosition: r,
            column: e.find((e) => e.id === a)
          };
        }
      }
    },
    10854: function (e, t, a) {
      'use strict';
      a.d(t, {
        default: function () {
          return d;
        }
      });
      var n = a(57437),
        r = a(50495),
        s = a(90837),
        o = a(83102),
        l = a(93146),
        i = a(16936);
      function d() {
        let e = (0, i.D)((e) => e.addTask);
        return (0, n.jsxs)(s.Vq, {
          children: [
            (0, n.jsx)(s.hg, {
              asChild: !0,
              children: (0, n.jsx)(r.z, {
                variant: 'secondary',
                size: 'sm',
                children: '＋ Add New Todo'
              })
            }),
            (0, n.jsxs)(s.cZ, {
              className: 'sm:max-w-[425px]',
              children: [
                (0, n.jsxs)(s.fK, {
                  children: [
                    (0, n.jsx)(s.$N, { children: 'Add New Todo' }),
                    (0, n.jsx)(s.Be, {
                      children: 'What do you want to get done today?'
                    })
                  ]
                }),
                (0, n.jsxs)('form', {
                  id: 'todo-form',
                  className: 'grid gap-4 py-4',
                  onSubmit: (t) => {
                    t.preventDefault();
                    let { title: a, description: n } = Object.fromEntries(
                      new FormData(t.currentTarget)
                    );
                    'string' == typeof a && 'string' == typeof n && e(a, n);
                  },
                  children: [
                    (0, n.jsx)('div', {
                      className: 'grid grid-cols-4 items-center gap-4',
                      children: (0, n.jsx)(o.I, {
                        id: 'title',
                        name: 'title',
                        placeholder: 'Todo title...',
                        className: 'col-span-4'
                      })
                    }),
                    (0, n.jsx)('div', {
                      className: 'grid grid-cols-4 items-center gap-4',
                      children: (0, n.jsx)(l.g, {
                        id: 'description',
                        name: 'description',
                        placeholder: 'Description...',
                        className: 'col-span-4'
                      })
                    })
                  ]
                }),
                (0, n.jsx)(s.cN, {
                  children: (0, n.jsx)(s.hg, {
                    asChild: !0,
                    children: (0, n.jsx)(r.z, {
                      type: 'submit',
                      size: 'sm',
                      form: 'todo-form',
                      children: 'Add Todo'
                    })
                  })
                })
              ]
            })
          ]
        });
      }
    },
    94693: function (e, t, a) {
      'use strict';
      a.d(t, {
        C: function () {
          return l;
        }
      });
      var n = a(57437);
      a(2265);
      var r = a(13027),
        s = a(37440);
      let o = (0, r.j)(
        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        {
          variants: {
            variant: {
              default:
                'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
              secondary:
                'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
              destructive:
                'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
              outline: 'text-foreground'
            }
          },
          defaultVariants: { variant: 'default' }
        }
      );
      function l(e) {
        let { className: t, variant: a, ...r } = e;
        return (0, n.jsx)('div', {
          className: (0, s.cn)(o({ variant: a }), t),
          ...r
        });
      }
    },
    50495: function (e, t, a) {
      'use strict';
      a.d(t, {
        d: function () {
          return i;
        },
        z: function () {
          return d;
        }
      });
      var n = a(57437),
        r = a(2265),
        s = a(63355),
        o = a(13027),
        l = a(37440);
      let i = (0, o.j)(
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
        d = r.forwardRef((e, t) => {
          let { className: a, variant: r, size: o, asChild: d = !1, ...c } = e,
            u = d ? s.g7 : 'button';
          return (0, n.jsx)(u, {
            className: (0, l.cn)(i({ variant: r, size: o, className: a })),
            ref: t,
            ...c
          });
        });
      d.displayName = 'Button';
    },
    36013: function (e, t, a) {
      'use strict';
      a.d(t, {
        Ol: function () {
          return l;
        },
        SZ: function () {
          return d;
        },
        Zb: function () {
          return o;
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
      var n = a(57437),
        r = a(2265),
        s = a(37440);
      let o = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)('div', {
          ref: t,
          className: (0, s.cn)(
            'rounded-xl border bg-card text-card-foreground shadow',
            a
          ),
          ...r
        });
      });
      o.displayName = 'Card';
      let l = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)('div', {
          ref: t,
          className: (0, s.cn)('flex flex-col space-y-1.5 p-6', a),
          ...r
        });
      });
      l.displayName = 'CardHeader';
      let i = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)('h3', {
          ref: t,
          className: (0, s.cn)('font-semibold leading-none tracking-tight', a),
          ...r
        });
      });
      i.displayName = 'CardTitle';
      let d = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)('p', {
          ref: t,
          className: (0, s.cn)('text-sm text-muted-foreground', a),
          ...r
        });
      });
      d.displayName = 'CardDescription';
      let c = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)('div', {
          ref: t,
          className: (0, s.cn)('p-6 pt-0', a),
          ...r
        });
      });
      c.displayName = 'CardContent';
      let u = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)('div', {
          ref: t,
          className: (0, s.cn)('flex items-center p-6 pt-0', a),
          ...r
        });
      });
      u.displayName = 'CardFooter';
    },
    90837: function (e, t, a) {
      'use strict';
      a.d(t, {
        $N: function () {
          return x;
        },
        Be: function () {
          return g;
        },
        Vq: function () {
          return i;
        },
        cN: function () {
          return p;
        },
        cZ: function () {
          return f;
        },
        fK: function () {
          return m;
        },
        hg: function () {
          return d;
        }
      });
      var n = a(57437),
        r = a(2265),
        s = a(87074),
        o = a(4867),
        l = a(37440);
      let i = s.fC,
        d = s.xz,
        c = s.h_;
      s.x8;
      let u = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)(s.aV, {
          ref: t,
          className: (0, l.cn)(
            'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            a
          ),
          ...r
        });
      });
      u.displayName = s.aV.displayName;
      let f = r.forwardRef((e, t) => {
        let { className: a, children: r, ...i } = e;
        return (0, n.jsxs)(c, {
          children: [
            (0, n.jsx)(u, {}),
            (0, n.jsxs)(s.VY, {
              ref: t,
              className: (0, l.cn)(
                'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                a
              ),
              ...i,
              children: [
                r,
                (0, n.jsxs)(s.x8, {
                  className:
                    'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                  children: [
                    (0, n.jsx)(o.Pxu, { className: 'h-4 w-4' }),
                    (0, n.jsx)('span', {
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
      f.displayName = s.VY.displayName;
      let m = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('div', {
          className: (0, l.cn)(
            'flex flex-col space-y-1.5 text-center sm:text-left',
            t
          ),
          ...a
        });
      };
      m.displayName = 'DialogHeader';
      let p = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('div', {
          className: (0, l.cn)(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            t
          ),
          ...a
        });
      };
      p.displayName = 'DialogFooter';
      let x = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)(s.Dx, {
          ref: t,
          className: (0, l.cn)(
            'text-lg font-semibold leading-none tracking-tight',
            a
          ),
          ...r
        });
      });
      x.displayName = s.Dx.displayName;
      let g = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)(s.dk, {
          ref: t,
          className: (0, l.cn)('text-sm text-muted-foreground', a),
          ...r
        });
      });
      g.displayName = s.dk.displayName;
    },
    46910: function (e, t, a) {
      'use strict';
      a.d(t, {
        $F: function () {
          return d;
        },
        AW: function () {
          return u;
        },
        Ju: function () {
          return m;
        },
        KM: function () {
          return x;
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
          return i;
        }
      });
      var n = a(57437),
        r = a(2265),
        s = a(43260),
        o = a(4867),
        l = a(37440);
      let i = s.fC,
        d = s.xz,
        c = s.ZA;
      s.Uv,
        s.Tr,
        s.Ee,
        (r.forwardRef((e, t) => {
          let { className: a, inset: r, children: i, ...d } = e;
          return (0, n.jsxs)(s.fF, {
            ref: t,
            className: (0, l.cn)(
              'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
              r && 'pl-8',
              a
            ),
            ...d,
            children: [i, (0, n.jsx)(o.XCv, { className: 'ml-auto h-4 w-4' })]
          });
        }).displayName = s.fF.displayName),
        (r.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, n.jsx)(s.tu, {
            ref: t,
            className: (0, l.cn)(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              a
            ),
            ...r
          });
        }).displayName = s.tu.displayName);
      let u = r.forwardRef((e, t) => {
        let { className: a, sideOffset: r = 4, ...o } = e;
        return (0, n.jsx)(s.Uv, {
          children: (0, n.jsx)(s.VY, {
            ref: t,
            sideOffset: r,
            className: (0, l.cn)(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
              'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              a
            ),
            ...o
          })
        });
      });
      u.displayName = s.VY.displayName;
      let f = r.forwardRef((e, t) => {
        let { className: a, inset: r, ...o } = e;
        return (0, n.jsx)(s.ck, {
          ref: t,
          className: (0, l.cn)(
            'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            r && 'pl-8',
            a
          ),
          ...o
        });
      });
      (f.displayName = s.ck.displayName),
        (r.forwardRef((e, t) => {
          let { className: a, children: r, checked: i, ...d } = e;
          return (0, n.jsxs)(s.oC, {
            ref: t,
            className: (0, l.cn)(
              'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              a
            ),
            checked: i,
            ...d,
            children: [
              (0, n.jsx)('span', {
                className:
                  'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                children: (0, n.jsx)(s.wU, {
                  children: (0, n.jsx)(o.nQG, { className: 'h-4 w-4' })
                })
              }),
              r
            ]
          });
        }).displayName = s.oC.displayName),
        (r.forwardRef((e, t) => {
          let { className: a, children: r, ...i } = e;
          return (0, n.jsxs)(s.Rk, {
            ref: t,
            className: (0, l.cn)(
              'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              a
            ),
            ...i,
            children: [
              (0, n.jsx)('span', {
                className:
                  'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                children: (0, n.jsx)(s.wU, {
                  children: (0, n.jsx)(o.jXb, {
                    className: 'h-4 w-4 fill-current'
                  })
                })
              }),
              r
            ]
          });
        }).displayName = s.Rk.displayName);
      let m = r.forwardRef((e, t) => {
        let { className: a, inset: r, ...o } = e;
        return (0, n.jsx)(s.__, {
          ref: t,
          className: (0, l.cn)(
            'px-2 py-1.5 text-sm font-semibold',
            r && 'pl-8',
            a
          ),
          ...o
        });
      });
      m.displayName = s.__.displayName;
      let p = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)(s.Z0, {
          ref: t,
          className: (0, l.cn)('-mx-1 my-1 h-px bg-muted', a),
          ...r
        });
      });
      p.displayName = s.Z0.displayName;
      let x = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('span', {
          className: (0, l.cn)('ml-auto text-xs tracking-widest opacity-60', t),
          ...a
        });
      };
      x.displayName = 'DropdownMenuShortcut';
    },
    83102: function (e, t, a) {
      'use strict';
      a.d(t, {
        I: function () {
          return o;
        }
      });
      var n = a(57437),
        r = a(2265),
        s = a(37440);
      let o = r.forwardRef((e, t) => {
        let { className: a, type: r, ...o } = e;
        return (0, n.jsx)('input', {
          type: r,
          className: (0, s.cn)(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            a
          ),
          ref: t,
          ...o
        });
      });
      o.displayName = 'Input';
    },
    94880: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          ScrollArea: function () {
            return l;
          },
          ScrollBar: function () {
            return i;
          }
        });
      var n = a(57437),
        r = a(2265),
        s = a(80023),
        o = a(37440);
      let l = r.forwardRef((e, t) => {
        let { className: a, children: r, ...l } = e;
        return (0, n.jsxs)(s.fC, {
          ref: t,
          className: (0, o.cn)('relative', a),
          ...l,
          children: [
            (0, n.jsx)(s.l_, {
              className: 'h-full w-full rounded-[inherit]',
              children: r
            }),
            (0, n.jsx)(i, {}),
            (0, n.jsx)(s.Ns, {})
          ]
        });
      });
      l.displayName = s.fC.displayName;
      let i = r.forwardRef((e, t) => {
        let { className: a, orientation: r = 'vertical', ...l } = e;
        return (0, n.jsx)(s.gb, {
          ref: t,
          orientation: r,
          className: (0, o.cn)(
            'flex touch-none select-none transition-colors',
            'vertical' === r &&
              'h-full w-2.5 border-l border-l-transparent p-[1px]',
            'horizontal' === r &&
              'h-2.5 flex-col border-t border-t-transparent p-[1px]',
            a
          ),
          ...l,
          children: (0, n.jsx)(s.q4, {
            className: 'relative flex-1 rounded-full bg-border'
          })
        });
      });
      i.displayName = s.gb.displayName;
    },
    93146: function (e, t, a) {
      'use strict';
      a.d(t, {
        g: function () {
          return o;
        }
      });
      var n = a(57437),
        r = a(2265),
        s = a(37440);
      let o = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)('textarea', {
          className: (0, s.cn)(
            'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            a
          ),
          ref: t,
          ...r
        });
      });
      o.displayName = 'Textarea';
    },
    16936: function (e, t, a) {
      'use strict';
      a.d(t, {
        D: function () {
          return i;
        }
      });
      var n = a(39099),
        r = a(20920),
        s = a(89291);
      let o = [{ id: 'TODO', title: 'Todo' }],
        l = [
          {
            id: 'task1',
            status: 'TODO',
            title: 'Project initiation and planning'
          },
          {
            id: 'task2',
            status: 'TODO',
            title: 'Gather requirements from stakeholders'
          }
        ],
        i = (0, n.Ue)()(
          (0, s.tJ)(
            (e) => ({
              tasks: l,
              columns: o,
              draggedTask: null,
              addTask: (t, a) =>
                e((e) => ({
                  tasks: [
                    ...e.tasks,
                    { id: (0, r.Z)(), title: t, description: a, status: 'TODO' }
                  ]
                })),
              updateCol: (t, a) =>
                e((e) => ({
                  columns: e.columns.map((e) =>
                    e.id === t ? { ...e, title: a } : e
                  )
                })),
              addCol: (t) =>
                e((e) => ({
                  columns: [
                    ...e.columns,
                    {
                      title: t,
                      id: e.columns.length ? t.toUpperCase() : 'TODO'
                    }
                  ]
                })),
              dragTask: (t) => e({ draggedTask: t }),
              removeTask: (t) =>
                e((e) => ({ tasks: e.tasks.filter((e) => e.id !== t) })),
              removeCol: (t) =>
                e((e) => ({ columns: e.columns.filter((e) => e.id !== t) })),
              setTasks: (t) => e({ tasks: t }),
              setCols: (t) => e({ columns: t })
            }),
            { name: 'task-store', skipHydration: !0 }
          )
        );
    },
    37440: function (e, t, a) {
      'use strict';
      a.d(t, {
        cn: function () {
          return s;
        },
        t: function () {
          return l;
        },
        u: function () {
          return o;
        }
      });
      var n = a(44839),
        r = a(78077);
      function s() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, r.m)((0, n.W)(t));
      }
      function o(e) {
        if (!e) return !1;
        let t = e.data.current;
        return (
          (null == t ? void 0 : t.type) === 'Column' ||
          (null == t ? void 0 : t.type) === 'Task'
        );
      }
      function l(e) {
        var t, a;
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { decimals: r = 0, sizeType: s = 'normal' } = n;
        if (0 === e) return '0 Byte';
        let o = Math.floor(Math.log(e) / Math.log(1024));
        return ''
          .concat((e / Math.pow(1024, o)).toFixed(r), ' ')
          .concat(
            'accurate' === s
              ? null !== (t = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'][o]) &&
                void 0 !== t
                ? t
                : 'Bytest'
              : null !== (a = ['Bytes', 'KB', 'MB', 'GB', 'TB'][o]) &&
                void 0 !== a
              ? a
              : 'Bytes'
          );
      }
    }
  },
  function (e) {
    e.O(0, [310, 795, 366, 208, 243, 776, 953, 971, 526, 744], function () {
      return e((e.s = 49792));
    }),
      (_N_E = e.O());
  }
]);
