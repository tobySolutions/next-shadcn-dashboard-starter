(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [34],
  {
    2850: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 35615)),
        Promise.resolve().then(t.bind(t, 94880));
    },
    35615: function (e, r, t) {
      'use strict';
      t.d(r, {
        default: function () {
          return g;
        }
      });
      var n = t(57437),
        a = t(2265),
        l = t(31014),
        s = t(39343),
        i = t(59772),
        o = t(50495),
        d = t(36661),
        c = t(83102),
        u = t(46294),
        m = t(4867),
        f = t(55445),
        x = t(37440);
      let p = a.forwardRef((e, r) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)(f.fC, {
          className: (0, x.cn)('grid gap-2', t),
          ...a,
          ref: r
        });
      });
      p.displayName = f.fC.displayName;
      let h = a.forwardRef((e, r) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)(f.ck, {
          ref: r,
          className: (0, x.cn)(
            'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            t
          ),
          ...a,
          children: (0, n.jsx)(f.z$, {
            className: 'flex items-center justify-center',
            children: (0, n.jsx)(m.nQG, {
              className: 'h-3.5 w-3.5 fill-primary'
            })
          })
        });
      });
      h.displayName = f.ck.displayName;
      var j = t(36013);
      let y = i.Ry({
        name: i.Z_().min(2, { message: 'Name must be at least 2 characters.' }),
        country: i.Z_({ required_error: 'Please select a country.' }),
        email: i.Z_().email({ message: 'Please enter a valid email address.' }),
        company: i.Z_().min(1, { message: 'Company name is required.' }),
        gender: i.Km(['male', 'female', 'other'], {
          required_error: 'Please select a gender.'
        })
      });
      function g() {
        let e = (0, s.cI)({
          resolver: (0, l.F)(y),
          defaultValues: {
            name: '',
            country: '',
            email: '',
            company: '',
            gender: void 0
          }
        });
        return (0, n.jsxs)(j.Zb, {
          className: 'mx-auto w-full',
          children: [
            (0, n.jsx)(j.Ol, {
              children: (0, n.jsx)(j.ll, {
                className: 'text-left text-2xl font-bold',
                children: 'Employee Information'
              })
            }),
            (0, n.jsx)(j.aY, {
              children: (0, n.jsx)(d.l0, {
                ...e,
                children: (0, n.jsxs)('form', {
                  onSubmit: e.handleSubmit(function (e) {
                    console.log(e);
                  }),
                  className: 'space-y-8',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'grid grid-cols-1 gap-6 md:grid-cols-2',
                      children: [
                        (0, n.jsx)(d.Wi, {
                          control: e.control,
                          name: 'name',
                          render: (e) => {
                            let { field: r } = e;
                            return (0, n.jsxs)(d.xJ, {
                              children: [
                                (0, n.jsx)(d.lX, { children: 'Name' }),
                                (0, n.jsx)(d.NI, {
                                  children: (0, n.jsx)(c.I, {
                                    placeholder: 'Enter your name',
                                    ...r
                                  })
                                }),
                                (0, n.jsx)(d.zG, {})
                              ]
                            });
                          }
                        }),
                        (0, n.jsx)(d.Wi, {
                          control: e.control,
                          name: 'country',
                          render: (e) => {
                            let { field: r } = e;
                            return (0, n.jsxs)(d.xJ, {
                              children: [
                                (0, n.jsx)(d.lX, { children: 'Country' }),
                                (0, n.jsxs)(u.Ph, {
                                  onValueChange: r.onChange,
                                  value: r.value,
                                  children: [
                                    (0, n.jsx)(d.NI, {
                                      children: (0, n.jsx)(u.i4, {
                                        children: (0, n.jsx)(u.ki, {
                                          placeholder: 'Select a country'
                                        })
                                      })
                                    }),
                                    (0, n.jsxs)(u.Bw, {
                                      children: [
                                        (0, n.jsx)(u.Ql, {
                                          value: 'usa',
                                          children: 'USA'
                                        }),
                                        (0, n.jsx)(u.Ql, {
                                          value: 'uk',
                                          children: 'UK'
                                        }),
                                        (0, n.jsx)(u.Ql, {
                                          value: 'canada',
                                          children: 'Canada'
                                        }),
                                        (0, n.jsx)(u.Ql, {
                                          value: 'australia',
                                          children: 'Australia'
                                        }),
                                        (0, n.jsx)(u.Ql, {
                                          value: 'germany',
                                          children: 'Germany'
                                        }),
                                        (0, n.jsx)(u.Ql, {
                                          value: 'france',
                                          children: 'France'
                                        }),
                                        (0, n.jsx)(u.Ql, {
                                          value: 'japan',
                                          children: 'Japan'
                                        }),
                                        (0, n.jsx)(u.Ql, {
                                          value: 'brazil',
                                          children: 'Brazil'
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                (0, n.jsx)(d.zG, {})
                              ]
                            });
                          }
                        }),
                        (0, n.jsx)(d.Wi, {
                          control: e.control,
                          name: 'email',
                          render: (e) => {
                            let { field: r } = e;
                            return (0, n.jsxs)(d.xJ, {
                              children: [
                                (0, n.jsx)(d.lX, { children: 'Email' }),
                                (0, n.jsx)(d.NI, {
                                  children: (0, n.jsx)(c.I, {
                                    type: 'email',
                                    placeholder: 'Enter your email',
                                    ...r
                                  })
                                }),
                                (0, n.jsx)(d.zG, {})
                              ]
                            });
                          }
                        }),
                        (0, n.jsx)(d.Wi, {
                          control: e.control,
                          name: 'company',
                          render: (e) => {
                            let { field: r } = e;
                            return (0, n.jsxs)(d.xJ, {
                              children: [
                                (0, n.jsx)(d.lX, { children: 'Company' }),
                                (0, n.jsx)(d.NI, {
                                  children: (0, n.jsx)(c.I, {
                                    placeholder: 'Enter your company',
                                    ...r
                                  })
                                }),
                                (0, n.jsx)(d.zG, {})
                              ]
                            });
                          }
                        })
                      ]
                    }),
                    (0, n.jsx)(d.Wi, {
                      control: e.control,
                      name: 'gender',
                      render: (e) => {
                        let { field: r } = e;
                        return (0, n.jsxs)(d.xJ, {
                          className: 'space-y-3',
                          children: [
                            (0, n.jsx)(d.lX, { children: 'Gender' }),
                            (0, n.jsx)(d.NI, {
                              children: (0, n.jsxs)(p, {
                                onValueChange: r.onChange,
                                value: r.value,
                                className: 'flex space-x-4',
                                children: [
                                  (0, n.jsxs)(d.xJ, {
                                    className: 'flex items-center space-x-2',
                                    children: [
                                      (0, n.jsx)(d.NI, {
                                        children: (0, n.jsx)(h, {
                                          value: 'male'
                                        })
                                      }),
                                      (0, n.jsx)(d.lX, {
                                        className: 'font-normal',
                                        children: 'Male'
                                      })
                                    ]
                                  }),
                                  (0, n.jsxs)(d.xJ, {
                                    className: 'flex items-center space-x-2',
                                    children: [
                                      (0, n.jsx)(d.NI, {
                                        children: (0, n.jsx)(h, {
                                          value: 'female'
                                        })
                                      }),
                                      (0, n.jsx)(d.lX, {
                                        className: 'font-normal',
                                        children: 'Female'
                                      })
                                    ]
                                  }),
                                  (0, n.jsxs)(d.xJ, {
                                    className: 'flex items-center space-x-2',
                                    children: [
                                      (0, n.jsx)(d.NI, {
                                        children: (0, n.jsx)(h, {
                                          value: 'other'
                                        })
                                      }),
                                      (0, n.jsx)(d.lX, {
                                        className: 'font-normal',
                                        children: 'Other'
                                      })
                                    ]
                                  })
                                ]
                              })
                            }),
                            (0, n.jsx)(d.zG, {})
                          ]
                        });
                      }
                    }),
                    (0, n.jsx)(o.z, { type: 'submit', children: 'Submit' })
                  ]
                })
              })
            })
          ]
        });
      }
    },
    50495: function (e, r, t) {
      'use strict';
      t.d(r, {
        d: function () {
          return o;
        },
        z: function () {
          return d;
        }
      });
      var n = t(57437),
        a = t(2265),
        l = t(63355),
        s = t(13027),
        i = t(37440);
      let o = (0, s.j)(
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
        d = a.forwardRef((e, r) => {
          let { className: t, variant: a, size: s, asChild: d = !1, ...c } = e,
            u = d ? l.g7 : 'button';
          return (0, n.jsx)(u, {
            className: (0, i.cn)(o({ variant: a, size: s, className: t })),
            ref: r,
            ...c
          });
        });
      d.displayName = 'Button';
    },
    36013: function (e, r, t) {
      'use strict';
      t.d(r, {
        Ol: function () {
          return i;
        },
        SZ: function () {
          return d;
        },
        Zb: function () {
          return s;
        },
        aY: function () {
          return c;
        },
        eW: function () {
          return u;
        },
        ll: function () {
          return o;
        }
      });
      var n = t(57437),
        a = t(2265),
        l = t(37440);
      let s = a.forwardRef((e, r) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('div', {
          ref: r,
          className: (0, l.cn)(
            'rounded-xl border bg-card text-card-foreground shadow',
            t
          ),
          ...a
        });
      });
      s.displayName = 'Card';
      let i = a.forwardRef((e, r) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('div', {
          ref: r,
          className: (0, l.cn)('flex flex-col space-y-1.5 p-6', t),
          ...a
        });
      });
      i.displayName = 'CardHeader';
      let o = a.forwardRef((e, r) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('h3', {
          ref: r,
          className: (0, l.cn)('font-semibold leading-none tracking-tight', t),
          ...a
        });
      });
      o.displayName = 'CardTitle';
      let d = a.forwardRef((e, r) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('p', {
          ref: r,
          className: (0, l.cn)('text-sm text-muted-foreground', t),
          ...a
        });
      });
      d.displayName = 'CardDescription';
      let c = a.forwardRef((e, r) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('div', {
          ref: r,
          className: (0, l.cn)('p-6 pt-0', t),
          ...a
        });
      });
      c.displayName = 'CardContent';
      let u = a.forwardRef((e, r) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)('div', {
          ref: r,
          className: (0, l.cn)('flex items-center p-6 pt-0', t),
          ...a
        });
      });
      u.displayName = 'CardFooter';
    },
    36661: function (e, r, t) {
      'use strict';
      t.d(r, {
        l0: function () {
          return u;
        },
        NI: function () {
          return y;
        },
        Wi: function () {
          return f;
        },
        xJ: function () {
          return h;
        },
        lX: function () {
          return j;
        },
        zG: function () {
          return g;
        }
      });
      var n = t(57437),
        a = t(2265),
        l = t(63355),
        s = t(39343),
        i = t(37440),
        o = t(38364);
      let d = (0, t(13027).j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        ),
        c = a.forwardRef((e, r) => {
          let { className: t, ...a } = e;
          return (0, n.jsx)(o.f, {
            ref: r,
            className: (0, i.cn)(d(), t),
            ...a
          });
        });
      c.displayName = o.f.displayName;
      let u = s.RV,
        m = a.createContext({}),
        f = (e) => {
          let { ...r } = e;
          return (0, n.jsx)(m.Provider, {
            value: { name: r.name },
            children: (0, n.jsx)(s.Qr, { ...r })
          });
        },
        x = () => {
          let e = a.useContext(m),
            r = a.useContext(p),
            { getFieldState: t, formState: n } = (0, s.Gc)(),
            l = t(e.name, n);
          if (!e) throw Error('useFormField should be used within <FormField>');
          let { id: i } = r;
          return {
            id: i,
            name: e.name,
            formItemId: ''.concat(i, '-form-item'),
            formDescriptionId: ''.concat(i, '-form-item-description'),
            formMessageId: ''.concat(i, '-form-item-message'),
            ...l
          };
        },
        p = a.createContext({}),
        h = a.forwardRef((e, r) => {
          let { className: t, ...l } = e,
            s = a.useId();
          return (0, n.jsx)(p.Provider, {
            value: { id: s },
            children: (0, n.jsx)('div', {
              ref: r,
              className: (0, i.cn)('mb-2 space-y-2 lg:mb-0', t),
              ...l
            })
          });
        });
      h.displayName = 'FormItem';
      let j = a.forwardRef((e, r) => {
        let { className: t, ...a } = e,
          { error: l, formItemId: s } = x();
        return (0, n.jsx)(c, {
          ref: r,
          className: (0, i.cn)(l && 'text-destructive', t),
          htmlFor: s,
          ...a
        });
      });
      j.displayName = 'FormLabel';
      let y = a.forwardRef((e, r) => {
        let { ...t } = e,
          {
            error: a,
            formItemId: s,
            formDescriptionId: i,
            formMessageId: o
          } = x();
        return (0, n.jsx)(l.g7, {
          ref: r,
          id: s,
          'aria-describedby': a ? ''.concat(i, ' ').concat(o) : ''.concat(i),
          'aria-invalid': !!a,
          ...t
        });
      });
      (y.displayName = 'FormControl'),
        (a.forwardRef((e, r) => {
          let { className: t, ...a } = e,
            { formDescriptionId: l } = x();
          return (0, n.jsx)('p', {
            ref: r,
            id: l,
            className: (0, i.cn)('text-[0.8rem] text-muted-foreground', t),
            ...a
          });
        }).displayName = 'FormDescription');
      let g = a.forwardRef((e, r) => {
        let { className: t, children: a, ...l } = e,
          { error: s, formMessageId: o } = x(),
          d = s ? String(null == s ? void 0 : s.message) : a;
        return d
          ? (0, n.jsx)('p', {
              ref: r,
              id: o,
              className: (0, i.cn)(
                'text-[0.8rem] font-medium text-destructive',
                t
              ),
              ...l,
              children: d
            })
          : null;
      });
      g.displayName = 'FormMessage';
    },
    83102: function (e, r, t) {
      'use strict';
      t.d(r, {
        I: function () {
          return s;
        }
      });
      var n = t(57437),
        a = t(2265),
        l = t(37440);
      let s = a.forwardRef((e, r) => {
        let { className: t, type: a, ...s } = e;
        return (0, n.jsx)('input', {
          type: a,
          className: (0, l.cn)(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            t
          ),
          ref: r,
          ...s
        });
      });
      s.displayName = 'Input';
    },
    94880: function (e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, {
          ScrollArea: function () {
            return i;
          },
          ScrollBar: function () {
            return o;
          }
        });
      var n = t(57437),
        a = t(2265),
        l = t(80023),
        s = t(37440);
      let i = a.forwardRef((e, r) => {
        let { className: t, children: a, ...i } = e;
        return (0, n.jsxs)(l.fC, {
          ref: r,
          className: (0, s.cn)('relative', t),
          ...i,
          children: [
            (0, n.jsx)(l.l_, {
              className: 'h-full w-full rounded-[inherit]',
              children: a
            }),
            (0, n.jsx)(o, {}),
            (0, n.jsx)(l.Ns, {})
          ]
        });
      });
      i.displayName = l.fC.displayName;
      let o = a.forwardRef((e, r) => {
        let { className: t, orientation: a = 'vertical', ...i } = e;
        return (0, n.jsx)(l.gb, {
          ref: r,
          orientation: a,
          className: (0, s.cn)(
            'flex touch-none select-none transition-colors',
            'vertical' === a &&
              'h-full w-2.5 border-l border-l-transparent p-[1px]',
            'horizontal' === a &&
              'h-2.5 flex-col border-t border-t-transparent p-[1px]',
            t
          ),
          ...i,
          children: (0, n.jsx)(l.q4, {
            className: 'relative flex-1 rounded-full bg-border'
          })
        });
      });
      o.displayName = l.gb.displayName;
    },
    46294: function (e, r, t) {
      'use strict';
      t.d(r, {
        Bw: function () {
          return u;
        },
        Ph: function () {
          return o;
        },
        Ql: function () {
          return m;
        },
        i4: function () {
          return c;
        },
        ki: function () {
          return d;
        }
      });
      var n = t(57437),
        a = t(2265),
        l = t(4867),
        s = t(28673),
        i = t(37440);
      let o = s.fC;
      s.ZA;
      let d = s.B4,
        c = a.forwardRef((e, r) => {
          let { className: t, children: a, ...o } = e;
          return (0, n.jsxs)(s.xz, {
            ref: r,
            className: (0, i.cn)(
              'flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
              t
            ),
            ...o,
            children: [
              a,
              (0, n.jsx)(s.JO, {
                asChild: !0,
                children: (0, n.jsx)(l.jnn, { className: 'h-4 w-4 opacity-50' })
              })
            ]
          });
        });
      c.displayName = s.xz.displayName;
      let u = a.forwardRef((e, r) => {
        let { className: t, children: a, position: l = 'popper', ...o } = e;
        return (0, n.jsx)(s.h_, {
          children: (0, n.jsx)(s.VY, {
            ref: r,
            className: (0, i.cn)(
              'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              'popper' === l &&
                'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
              t
            ),
            position: l,
            ...o,
            children: (0, n.jsx)(s.l_, {
              className: (0, i.cn)(
                'p-1',
                'popper' === l &&
                  'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
              ),
              children: a
            })
          })
        });
      });
      (u.displayName = s.VY.displayName),
        (a.forwardRef((e, r) => {
          let { className: t, ...a } = e;
          return (0, n.jsx)(s.__, {
            ref: r,
            className: (0, i.cn)('px-2 py-1.5 text-sm font-semibold', t),
            ...a
          });
        }).displayName = s.__.displayName);
      let m = a.forwardRef((e, r) => {
        let { className: t, children: a, ...o } = e;
        return (0, n.jsxs)(s.ck, {
          ref: r,
          className: (0, i.cn)(
            'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            t
          ),
          ...o,
          children: [
            (0, n.jsx)('span', {
              className:
                'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
              children: (0, n.jsx)(s.wU, {
                children: (0, n.jsx)(l.nQG, { className: 'h-4 w-4' })
              })
            }),
            (0, n.jsx)(s.eT, { children: a })
          ]
        });
      });
      (m.displayName = s.ck.displayName),
        (a.forwardRef((e, r) => {
          let { className: t, ...a } = e;
          return (0, n.jsx)(s.Z0, {
            ref: r,
            className: (0, i.cn)('-mx-1 my-1 h-px bg-muted', t),
            ...a
          });
        }).displayName = s.Z0.displayName);
    },
    37440: function (e, r, t) {
      'use strict';
      t.d(r, {
        cn: function () {
          return l;
        },
        t: function () {
          return i;
        },
        u: function () {
          return s;
        }
      });
      var n = t(44839),
        a = t(78077);
      function l() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
          r[t] = arguments[t];
        return (0, a.m)((0, n.W)(r));
      }
      function s(e) {
        if (!e) return !1;
        let r = e.data.current;
        return (
          (null == r ? void 0 : r.type) === 'Column' ||
          (null == r ? void 0 : r.type) === 'Task'
        );
      }
      function i(e) {
        var r, t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { decimals: a = 0, sizeType: l = 'normal' } = n;
        if (0 === e) return '0 Byte';
        let s = Math.floor(Math.log(e) / Math.log(1024));
        return ''
          .concat((e / Math.pow(1024, s)).toFixed(a), ' ')
          .concat(
            'accurate' === l
              ? null !== (r = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'][s]) &&
                void 0 !== r
                ? r
                : 'Bytest'
              : null !== (t = ['Bytes', 'KB', 'MB', 'GB', 'TB'][s]) &&
                void 0 !== t
              ? t
              : 'Bytes'
          );
      }
    }
  },
  function (e) {
    e.O(0, [310, 795, 366, 208, 673, 336, 445, 971, 526, 744], function () {
      return e((e.s = 2850));
    }),
      (_N_E = e.O());
  }
]);
