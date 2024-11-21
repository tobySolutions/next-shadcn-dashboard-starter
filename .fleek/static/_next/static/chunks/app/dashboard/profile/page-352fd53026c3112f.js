(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [544],
  {
    84379: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 39589)),
        Promise.resolve().then(r.bind(r, 94880));
    },
    39589: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return I;
        }
      });
      var s = r(57437),
        n = r(2265),
        a = r(9703),
        l = r(4867),
        o = r(37440);
      let i = a.fC,
        d = n.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, s.jsx)(a.ck, {
            ref: t,
            className: (0, o.cn)('border-b', r),
            ...n
          });
        });
      d.displayName = 'AccordionItem';
      let c = n.forwardRef((e, t) => {
        let { className: r, children: n, ...i } = e;
        return (0, s.jsx)(a.h4, {
          className: 'flex',
          children: (0, s.jsxs)(a.xz, {
            ref: t,
            className: (0, o.cn)(
              'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
              r
            ),
            ...i,
            children: [
              n,
              (0, s.jsx)(l.v4q, {
                className:
                  'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200'
              })
            ]
          })
        });
      });
      c.displayName = a.xz.displayName;
      let u = n.forwardRef((e, t) => {
        let { className: r, children: n, ...l } = e;
        return (0, s.jsx)(a.VY, {
          ref: t,
          className:
            'overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
          ...l,
          children: (0, s.jsx)('div', {
            className: (0, o.cn)('pb-4 pt-0', r),
            children: n
          })
        });
      });
      u.displayName = a.VY.displayName;
      var m = r(50495),
        x = r(36661);
      let f = (e) => {
        let { title: t, description: r } = e;
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)('h2', {
              className: 'text-3xl font-bold tracking-tight',
              children: t
            }),
            (0, s.jsx)('p', {
              className: 'text-sm text-muted-foreground',
              children: r
            })
          ]
        });
      };
      var h = r(83102),
        j = r(46294),
        p = r(64344),
        b = r(59772);
      let y = b.Ry({
        firstname: b
          .Z_()
          .min(3, { message: 'Product Name must be at least 3 characters' }),
        lastname: b
          .Z_()
          .min(3, { message: 'Product Name must be at least 3 characters' }),
        email: b
          .Z_()
          .email({ message: 'Product Name must be at least 3 characters' }),
        contactno: b.oQ.number(),
        country: b.Z_().min(1, { message: 'Please select a category' }),
        city: b.Z_().min(1, { message: 'Please select a category' }),
        jobs: b.IX(
          b.Ry({
            jobcountry: b.Z_().min(1, { message: 'Please select a category' }),
            jobcity: b.Z_().min(1, { message: 'Please select a category' }),
            jobtitle: b
              .Z_()
              .min(3, {
                message: 'Product Name must be at least 3 characters'
              }),
            employer: b
              .Z_()
              .min(3, {
                message: 'Product Name must be at least 3 characters'
              }),
            startdate: b
              .Z_()
              .refine((e) => /^\d{4}-\d{2}-\d{2}$/.test(e), {
                message: 'Start date should be in the format YYYY-MM-DD'
              }),
            enddate: b
              .Z_()
              .refine((e) => /^\d{4}-\d{2}-\d{2}$/.test(e), {
                message: 'End date should be in the format YYYY-MM-DD'
              })
          })
        )
      });
      var g = r(31014),
        v = r(90399),
        N = r(10883),
        w = r(36127),
        k = r(16463),
        C = r(39343),
        I = (e) => {
          let { initialData: t, categories: r } = e;
          (0, k.useParams)(), (0, k.useRouter)();
          let [a, l] = (0, n.useState)(!1),
            [b, I] = (0, n.useState)(!1),
            [z, S] = (0, n.useState)(!1),
            [_, B] = (0, n.useState)(0),
            [R, P] = (0, n.useState)(0),
            [V, J] = (0, n.useState)({}),
            F = (0, C.cI)({
              resolver: (0, g.F)(y),
              defaultValues: {
                jobs: [
                  {
                    jobtitle: '',
                    employer: '',
                    startdate: '',
                    enddate: '',
                    jobcountry: '',
                    jobcity: ''
                  }
                ]
              },
              mode: 'onChange'
            }),
            {
              control: G,
              formState: { errors: W }
            } = F,
            {
              append: Z,
              remove: M,
              fields: X
            } = (0, C.Dq)({ control: G, name: 'jobs' }),
            Y = (e) => {
              console.log('data ==>', e), J(e);
            },
            E = [
              {
                id: 'Step 1',
                name: 'Personal Information',
                fields: [
                  'firstname',
                  'lastname',
                  'email',
                  'contactno',
                  'country',
                  'city'
                ]
              },
              {
                id: 'Step 2',
                name: 'Professional Informations',
                fields:
                  null == X
                    ? void 0
                    : X.map((e, t) => [
                        'jobs.'.concat(t, '.jobtitle'),
                        'jobs.'.concat(t, '.employer'),
                        'jobs.'.concat(t, '.startdate'),
                        'jobs.'.concat(t, '.enddate'),
                        'jobs.'.concat(t, '.jobcountry'),
                        'jobs.'.concat(t, '.jobcity')
                      ]).flat()
              },
              { id: 'Step 3', name: 'Complete' }
            ],
            D = async () => {
              let e = E[R].fields;
              (await F.trigger(e, { shouldFocus: !0 })) &&
                R < E.length - 1 &&
                (R === E.length - 2 && (await F.handleSubmit(Y)()),
                B(R),
                P((e) => e + 1));
            },
            Q = [{ id: 'wow', name: 'india' }],
            L = [{ id: '2', name: 'kerala' }];
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)('div', {
                className: 'flex items-center justify-between',
                children: [
                  (0, s.jsx)(f, {
                    title: t ? 'Edit product' : 'Create Your Profile',
                    description: t
                      ? 'Edit a product.'
                      : 'To create your resume, we first need some basic information about you.'
                  }),
                  t &&
                    (0, s.jsx)(m.z, {
                      disabled: b,
                      variant: 'destructive',
                      size: 'sm',
                      onClick: () => l(!0),
                      children: (0, s.jsx)(v.Z, { className: 'h-4 w-4' })
                    })
                ]
              }),
              (0, s.jsx)(p.Separator, {}),
              (0, s.jsx)('div', {
                children: (0, s.jsx)('ul', {
                  className: 'flex gap-4',
                  children: E.map((e, t) =>
                    (0, s.jsx)(
                      'li',
                      {
                        className: 'md:flex-1',
                        children:
                          R > t
                            ? (0, s.jsxs)('div', {
                                className:
                                  'group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4',
                                children: [
                                  (0, s.jsx)('span', {
                                    className:
                                      'text-sm font-medium text-sky-600 transition-colors ',
                                    children: e.id
                                  }),
                                  (0, s.jsx)('span', {
                                    className: 'text-sm font-medium',
                                    children: e.name
                                  })
                                ]
                              })
                            : R === t
                            ? (0, s.jsxs)('div', {
                                className:
                                  'flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4',
                                'aria-current': 'step',
                                children: [
                                  (0, s.jsx)('span', {
                                    className:
                                      'text-sm font-medium text-sky-600',
                                    children: e.id
                                  }),
                                  (0, s.jsx)('span', {
                                    className: 'text-sm font-medium',
                                    children: e.name
                                  })
                                ]
                              })
                            : (0, s.jsxs)('div', {
                                className:
                                  'group flex h-full w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4',
                                children: [
                                  (0, s.jsx)('span', {
                                    className:
                                      'text-sm font-medium text-gray-500 transition-colors',
                                    children: e.id
                                  }),
                                  (0, s.jsx)('span', {
                                    className: 'text-sm font-medium',
                                    children: e.name
                                  })
                                ]
                              })
                      },
                      e.name
                    )
                  )
                })
              }),
              (0, s.jsx)(p.Separator, {}),
              (0, s.jsx)(x.l0, {
                ...F,
                children: (0, s.jsx)('form', {
                  onSubmit: F.handleSubmit(Y),
                  className: 'w-full space-y-8',
                  children: (0, s.jsxs)('div', {
                    className: (0, o.cn)(
                      1 === R
                        ? 'w-full md:inline-block'
                        : 'gap-8 md:grid md:grid-cols-3'
                    ),
                    children: [
                      0 === R &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(x.Wi, {
                              control: F.control,
                              name: 'firstname',
                              render: (e) => {
                                let { field: t } = e;
                                return (0, s.jsxs)(x.xJ, {
                                  children: [
                                    (0, s.jsx)(x.lX, {
                                      children: 'First Name'
                                    }),
                                    (0, s.jsx)(x.NI, {
                                      children: (0, s.jsx)(h.I, {
                                        disabled: b,
                                        placeholder: 'John',
                                        ...t
                                      })
                                    }),
                                    (0, s.jsx)(x.zG, {})
                                  ]
                                });
                              }
                            }),
                            (0, s.jsx)(x.Wi, {
                              control: F.control,
                              name: 'lastname',
                              render: (e) => {
                                let { field: t } = e;
                                return (0, s.jsxs)(x.xJ, {
                                  children: [
                                    (0, s.jsx)(x.lX, { children: 'Last Name' }),
                                    (0, s.jsx)(x.NI, {
                                      children: (0, s.jsx)(h.I, {
                                        disabled: b,
                                        placeholder: 'Doe',
                                        ...t
                                      })
                                    }),
                                    (0, s.jsx)(x.zG, {})
                                  ]
                                });
                              }
                            }),
                            (0, s.jsx)(x.Wi, {
                              control: F.control,
                              name: 'email',
                              render: (e) => {
                                let { field: t } = e;
                                return (0, s.jsxs)(x.xJ, {
                                  children: [
                                    (0, s.jsx)(x.lX, { children: 'Email' }),
                                    (0, s.jsx)(x.NI, {
                                      children: (0, s.jsx)(h.I, {
                                        disabled: b,
                                        placeholder: 'johndoe@gmail.com',
                                        ...t
                                      })
                                    }),
                                    (0, s.jsx)(x.zG, {})
                                  ]
                                });
                              }
                            }),
                            (0, s.jsx)(x.Wi, {
                              control: F.control,
                              name: 'contactno',
                              render: (e) => {
                                let { field: t } = e;
                                return (0, s.jsxs)(x.xJ, {
                                  children: [
                                    (0, s.jsx)(x.lX, {
                                      children: 'Contact Number'
                                    }),
                                    (0, s.jsx)(x.NI, {
                                      children: (0, s.jsx)(h.I, {
                                        type: 'number',
                                        placeholder: 'Enter you contact number',
                                        disabled: b,
                                        ...t
                                      })
                                    }),
                                    (0, s.jsx)(x.zG, {})
                                  ]
                                });
                              }
                            }),
                            (0, s.jsx)(x.Wi, {
                              control: F.control,
                              name: 'country',
                              render: (e) => {
                                let { field: t } = e;
                                return (0, s.jsxs)(x.xJ, {
                                  children: [
                                    (0, s.jsx)(x.lX, { children: 'Country' }),
                                    (0, s.jsxs)(j.Ph, {
                                      disabled: b,
                                      onValueChange: t.onChange,
                                      value: t.value,
                                      defaultValue: t.value,
                                      children: [
                                        (0, s.jsx)(x.NI, {
                                          children: (0, s.jsx)(j.i4, {
                                            children: (0, s.jsx)(j.ki, {
                                              defaultValue: t.value,
                                              placeholder: 'Select a country'
                                            })
                                          })
                                        }),
                                        (0, s.jsx)(j.Bw, {
                                          children: Q.map((e) =>
                                            (0, s.jsx)(
                                              j.Ql,
                                              { value: e.id, children: e.name },
                                              e.id
                                            )
                                          )
                                        })
                                      ]
                                    }),
                                    (0, s.jsx)(x.zG, {})
                                  ]
                                });
                              }
                            }),
                            (0, s.jsx)(x.Wi, {
                              control: F.control,
                              name: 'city',
                              render: (e) => {
                                let { field: t } = e;
                                return (0, s.jsxs)(x.xJ, {
                                  children: [
                                    (0, s.jsx)(x.lX, { children: 'City' }),
                                    (0, s.jsxs)(j.Ph, {
                                      disabled: b,
                                      onValueChange: t.onChange,
                                      value: t.value,
                                      defaultValue: t.value,
                                      children: [
                                        (0, s.jsx)(x.NI, {
                                          children: (0, s.jsx)(j.i4, {
                                            children: (0, s.jsx)(j.ki, {
                                              defaultValue: t.value,
                                              placeholder: 'Select a city'
                                            })
                                          })
                                        }),
                                        (0, s.jsx)(j.Bw, {
                                          children: L.map((e) =>
                                            (0, s.jsx)(
                                              j.Ql,
                                              { value: e.id, children: e.name },
                                              e.id
                                            )
                                          )
                                        })
                                      ]
                                    }),
                                    (0, s.jsx)(x.zG, {})
                                  ]
                                });
                              }
                            })
                          ]
                        }),
                      1 === R &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            null == X
                              ? void 0
                              : X.map((e, t) => {
                                  var r, n;
                                  return (0, s.jsx)(
                                    i,
                                    {
                                      type: 'single',
                                      collapsible: !0,
                                      defaultValue: 'item-1',
                                      children: (0, s.jsxs)(d, {
                                        value: 'item-1',
                                        children: [
                                          (0, s.jsxs)(c, {
                                            className: (0, o.cn)(
                                              'relative !no-underline [&[data-state=closed]>button]:hidden [&[data-state=open]>.alert]:hidden',
                                              (null == W
                                                ? void 0
                                                : null === (r = W.jobs) ||
                                                  void 0 === r
                                                ? void 0
                                                : r[t]) && 'text-red-700'
                                            ),
                                            children: [
                                              'Work Experience '.concat(t + 1),
                                              (0, s.jsx)(m.z, {
                                                variant: 'outline',
                                                size: 'icon',
                                                className: 'absolute right-8',
                                                onClick: () => M(t),
                                                children: (0, s.jsx)(N.Z, {
                                                  className: 'h-4 w-4 '
                                                })
                                              }),
                                              (null == W
                                                ? void 0
                                                : null === (n = W.jobs) ||
                                                  void 0 === n
                                                ? void 0
                                                : n[t]) &&
                                                (0, s.jsx)('span', {
                                                  className:
                                                    'alert absolute right-8',
                                                  children: (0, s.jsx)(w.Z, {
                                                    className:
                                                      'h-4 w-4   text-red-700'
                                                  })
                                                })
                                            ]
                                          }),
                                          (0, s.jsx)(u, {
                                            children: (0, s.jsxs)('div', {
                                              className: (0, o.cn)(
                                                'relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-3'
                                              ),
                                              children: [
                                                (0, s.jsx)(x.Wi, {
                                                  control: F.control,
                                                  name: 'jobs.'.concat(
                                                    t,
                                                    '.jobtitle'
                                                  ),
                                                  render: (e) => {
                                                    let { field: t } = e;
                                                    return (0, s.jsxs)(x.xJ, {
                                                      children: [
                                                        (0, s.jsx)(x.lX, {
                                                          children: 'Job title'
                                                        }),
                                                        (0, s.jsx)(x.NI, {
                                                          children: (0, s.jsx)(
                                                            h.I,
                                                            {
                                                              type: 'text',
                                                              disabled: b,
                                                              ...t
                                                            }
                                                          )
                                                        }),
                                                        (0, s.jsx)(x.zG, {})
                                                      ]
                                                    });
                                                  }
                                                }),
                                                (0, s.jsx)(x.Wi, {
                                                  control: F.control,
                                                  name: 'jobs.'.concat(
                                                    t,
                                                    '.employer'
                                                  ),
                                                  render: (e) => {
                                                    let { field: t } = e;
                                                    return (0, s.jsxs)(x.xJ, {
                                                      children: [
                                                        (0, s.jsx)(x.lX, {
                                                          children: 'Employer'
                                                        }),
                                                        (0, s.jsx)(x.NI, {
                                                          children: (0, s.jsx)(
                                                            h.I,
                                                            {
                                                              type: 'text',
                                                              disabled: b,
                                                              ...t
                                                            }
                                                          )
                                                        }),
                                                        (0, s.jsx)(x.zG, {})
                                                      ]
                                                    });
                                                  }
                                                }),
                                                (0, s.jsx)(x.Wi, {
                                                  control: F.control,
                                                  name: 'jobs.'.concat(
                                                    t,
                                                    '.startdate'
                                                  ),
                                                  render: (e) => {
                                                    let { field: t } = e;
                                                    return (0, s.jsxs)(x.xJ, {
                                                      children: [
                                                        (0, s.jsx)(x.lX, {
                                                          children: 'Start date'
                                                        }),
                                                        (0, s.jsx)(x.NI, {
                                                          children: (0, s.jsx)(
                                                            h.I,
                                                            {
                                                              type: 'date',
                                                              disabled: b,
                                                              ...t
                                                            }
                                                          )
                                                        }),
                                                        (0, s.jsx)(x.zG, {})
                                                      ]
                                                    });
                                                  }
                                                }),
                                                (0, s.jsx)(x.Wi, {
                                                  control: F.control,
                                                  name: 'jobs.'.concat(
                                                    t,
                                                    '.enddate'
                                                  ),
                                                  render: (e) => {
                                                    let { field: t } = e;
                                                    return (0, s.jsxs)(x.xJ, {
                                                      children: [
                                                        (0, s.jsx)(x.lX, {
                                                          children: 'End date'
                                                        }),
                                                        (0, s.jsx)(x.NI, {
                                                          children: (0, s.jsx)(
                                                            h.I,
                                                            {
                                                              type: 'date',
                                                              disabled: b,
                                                              ...t
                                                            }
                                                          )
                                                        }),
                                                        (0, s.jsx)(x.zG, {})
                                                      ]
                                                    });
                                                  }
                                                }),
                                                (0, s.jsx)(x.Wi, {
                                                  control: F.control,
                                                  name: 'jobs.'.concat(
                                                    t,
                                                    '.jobcountry'
                                                  ),
                                                  render: (e) => {
                                                    let { field: t } = e;
                                                    return (0, s.jsxs)(x.xJ, {
                                                      children: [
                                                        (0, s.jsx)(x.lX, {
                                                          children:
                                                            'Job country'
                                                        }),
                                                        (0, s.jsxs)(j.Ph, {
                                                          disabled: b,
                                                          onValueChange:
                                                            t.onChange,
                                                          value: t.value,
                                                          defaultValue: t.value,
                                                          children: [
                                                            (0, s.jsx)(x.NI, {
                                                              children: (0,
                                                              s.jsx)(j.i4, {
                                                                children: (0,
                                                                s.jsx)(j.ki, {
                                                                  defaultValue:
                                                                    t.value,
                                                                  placeholder:
                                                                    'Select your job country'
                                                                })
                                                              })
                                                            }),
                                                            (0, s.jsx)(j.Bw, {
                                                              children: Q.map(
                                                                (e) =>
                                                                  (0, s.jsx)(
                                                                    j.Ql,
                                                                    {
                                                                      value:
                                                                        e.id,
                                                                      children:
                                                                        e.name
                                                                    },
                                                                    e.id
                                                                  )
                                                              )
                                                            })
                                                          ]
                                                        }),
                                                        (0, s.jsx)(x.zG, {})
                                                      ]
                                                    });
                                                  }
                                                }),
                                                (0, s.jsx)(x.Wi, {
                                                  control: F.control,
                                                  name: 'jobs.'.concat(
                                                    t,
                                                    '.jobcity'
                                                  ),
                                                  render: (e) => {
                                                    let { field: t } = e;
                                                    return (0, s.jsxs)(x.xJ, {
                                                      children: [
                                                        (0, s.jsx)(x.lX, {
                                                          children: 'Job city'
                                                        }),
                                                        (0, s.jsxs)(j.Ph, {
                                                          disabled: b,
                                                          onValueChange:
                                                            t.onChange,
                                                          value: t.value,
                                                          defaultValue: t.value,
                                                          children: [
                                                            (0, s.jsx)(x.NI, {
                                                              children: (0,
                                                              s.jsx)(j.i4, {
                                                                children: (0,
                                                                s.jsx)(j.ki, {
                                                                  defaultValue:
                                                                    t.value,
                                                                  placeholder:
                                                                    'Select your job city'
                                                                })
                                                              })
                                                            }),
                                                            (0, s.jsx)(j.Bw, {
                                                              children: L.map(
                                                                (e) =>
                                                                  (0, s.jsx)(
                                                                    j.Ql,
                                                                    {
                                                                      value:
                                                                        e.id,
                                                                      children:
                                                                        e.name
                                                                    },
                                                                    e.id
                                                                  )
                                                              )
                                                            })
                                                          ]
                                                        }),
                                                        (0, s.jsx)(x.zG, {})
                                                      ]
                                                    });
                                                  }
                                                })
                                              ]
                                            })
                                          })
                                        ]
                                      })
                                    },
                                    e.id
                                  );
                                }),
                            (0, s.jsx)('div', {
                              className: 'mt-4 flex justify-center',
                              children: (0, s.jsx)(m.z, {
                                type: 'button',
                                className: 'flex justify-center',
                                size: 'lg',
                                onClick: () =>
                                  Z({
                                    jobtitle: '',
                                    employer: '',
                                    startdate: '',
                                    enddate: '',
                                    jobcountry: '',
                                    jobcity: ''
                                  }),
                                children: 'Add More'
                              })
                            })
                          ]
                        }),
                      2 === R &&
                        (0, s.jsxs)('div', {
                          children: [
                            (0, s.jsx)('h1', { children: 'Completed' }),
                            (0, s.jsx)('pre', {
                              className: 'whitespace-pre-wrap',
                              children: JSON.stringify(V)
                            })
                          ]
                        })
                    ]
                  })
                })
              }),
              (0, s.jsx)('div', {
                className: 'mt-8 pt-5',
                children: (0, s.jsxs)('div', {
                  className: 'flex justify-between',
                  children: [
                    (0, s.jsx)('button', {
                      type: 'button',
                      onClick: () => {
                        R > 0 && (B(R), P((e) => e - 1));
                      },
                      disabled: 0 === R,
                      className:
                        'rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50',
                      children: (0, s.jsx)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        strokeWidth: '1.5',
                        stroke: 'currentColor',
                        className: 'h-6 w-6',
                        children: (0, s.jsx)('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          d: 'M15.75 19.5L8.25 12l7.5-7.5'
                        })
                      })
                    }),
                    (0, s.jsx)('button', {
                      type: 'button',
                      onClick: D,
                      disabled: R === E.length - 1,
                      className:
                        'rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50',
                      children: (0, s.jsx)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        strokeWidth: '1.5',
                        stroke: 'currentColor',
                        className: 'h-6 w-6',
                        children: (0, s.jsx)('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          d: 'M8.25 4.5l7.5 7.5-7.5 7.5'
                        })
                      })
                    })
                  ]
                })
              })
            ]
          });
        };
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
      var s = r(57437),
        n = r(2265),
        a = r(63355),
        l = r(13027),
        o = r(37440);
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
        d = n.forwardRef((e, t) => {
          let { className: r, variant: n, size: l, asChild: d = !1, ...c } = e,
            u = d ? a.g7 : 'button';
          return (0, s.jsx)(u, {
            className: (0, o.cn)(i({ variant: n, size: l, className: r })),
            ref: t,
            ...c
          });
        });
      d.displayName = 'Button';
    },
    36661: function (e, t, r) {
      'use strict';
      r.d(t, {
        l0: function () {
          return u;
        },
        NI: function () {
          return b;
        },
        Wi: function () {
          return x;
        },
        xJ: function () {
          return j;
        },
        lX: function () {
          return p;
        },
        zG: function () {
          return y;
        }
      });
      var s = r(57437),
        n = r(2265),
        a = r(63355),
        l = r(39343),
        o = r(37440),
        i = r(38364);
      let d = (0, r(13027).j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        ),
        c = n.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, s.jsx)(i.f, {
            ref: t,
            className: (0, o.cn)(d(), r),
            ...n
          });
        });
      c.displayName = i.f.displayName;
      let u = l.RV,
        m = n.createContext({}),
        x = (e) => {
          let { ...t } = e;
          return (0, s.jsx)(m.Provider, {
            value: { name: t.name },
            children: (0, s.jsx)(l.Qr, { ...t })
          });
        },
        f = () => {
          let e = n.useContext(m),
            t = n.useContext(h),
            { getFieldState: r, formState: s } = (0, l.Gc)(),
            a = r(e.name, s);
          if (!e) throw Error('useFormField should be used within <FormField>');
          let { id: o } = t;
          return {
            id: o,
            name: e.name,
            formItemId: ''.concat(o, '-form-item'),
            formDescriptionId: ''.concat(o, '-form-item-description'),
            formMessageId: ''.concat(o, '-form-item-message'),
            ...a
          };
        },
        h = n.createContext({}),
        j = n.forwardRef((e, t) => {
          let { className: r, ...a } = e,
            l = n.useId();
          return (0, s.jsx)(h.Provider, {
            value: { id: l },
            children: (0, s.jsx)('div', {
              ref: t,
              className: (0, o.cn)('mb-2 space-y-2 lg:mb-0', r),
              ...a
            })
          });
        });
      j.displayName = 'FormItem';
      let p = n.forwardRef((e, t) => {
        let { className: r, ...n } = e,
          { error: a, formItemId: l } = f();
        return (0, s.jsx)(c, {
          ref: t,
          className: (0, o.cn)(a && 'text-destructive', r),
          htmlFor: l,
          ...n
        });
      });
      p.displayName = 'FormLabel';
      let b = n.forwardRef((e, t) => {
        let { ...r } = e,
          {
            error: n,
            formItemId: l,
            formDescriptionId: o,
            formMessageId: i
          } = f();
        return (0, s.jsx)(a.g7, {
          ref: t,
          id: l,
          'aria-describedby': n ? ''.concat(o, ' ').concat(i) : ''.concat(o),
          'aria-invalid': !!n,
          ...r
        });
      });
      (b.displayName = 'FormControl'),
        (n.forwardRef((e, t) => {
          let { className: r, ...n } = e,
            { formDescriptionId: a } = f();
          return (0, s.jsx)('p', {
            ref: t,
            id: a,
            className: (0, o.cn)('text-[0.8rem] text-muted-foreground', r),
            ...n
          });
        }).displayName = 'FormDescription');
      let y = n.forwardRef((e, t) => {
        let { className: r, children: n, ...a } = e,
          { error: l, formMessageId: i } = f(),
          d = l ? String(null == l ? void 0 : l.message) : n;
        return d
          ? (0, s.jsx)('p', {
              ref: t,
              id: i,
              className: (0, o.cn)(
                'text-[0.8rem] font-medium text-destructive',
                r
              ),
              ...a,
              children: d
            })
          : null;
      });
      y.displayName = 'FormMessage';
    },
    83102: function (e, t, r) {
      'use strict';
      r.d(t, {
        I: function () {
          return l;
        }
      });
      var s = r(57437),
        n = r(2265),
        a = r(37440);
      let l = n.forwardRef((e, t) => {
        let { className: r, type: n, ...l } = e;
        return (0, s.jsx)('input', {
          type: n,
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
    94880: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          ScrollArea: function () {
            return o;
          },
          ScrollBar: function () {
            return i;
          }
        });
      var s = r(57437),
        n = r(2265),
        a = r(80023),
        l = r(37440);
      let o = n.forwardRef((e, t) => {
        let { className: r, children: n, ...o } = e;
        return (0, s.jsxs)(a.fC, {
          ref: t,
          className: (0, l.cn)('relative', r),
          ...o,
          children: [
            (0, s.jsx)(a.l_, {
              className: 'h-full w-full rounded-[inherit]',
              children: n
            }),
            (0, s.jsx)(i, {}),
            (0, s.jsx)(a.Ns, {})
          ]
        });
      });
      o.displayName = a.fC.displayName;
      let i = n.forwardRef((e, t) => {
        let { className: r, orientation: n = 'vertical', ...o } = e;
        return (0, s.jsx)(a.gb, {
          ref: t,
          orientation: n,
          className: (0, l.cn)(
            'flex touch-none select-none transition-colors',
            'vertical' === n &&
              'h-full w-2.5 border-l border-l-transparent p-[1px]',
            'horizontal' === n &&
              'h-2.5 flex-col border-t border-t-transparent p-[1px]',
            r
          ),
          ...o,
          children: (0, s.jsx)(a.q4, {
            className: 'relative flex-1 rounded-full bg-border'
          })
        });
      });
      i.displayName = a.gb.displayName;
    },
    46294: function (e, t, r) {
      'use strict';
      r.d(t, {
        Bw: function () {
          return u;
        },
        Ph: function () {
          return i;
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
      var s = r(57437),
        n = r(2265),
        a = r(4867),
        l = r(28673),
        o = r(37440);
      let i = l.fC;
      l.ZA;
      let d = l.B4,
        c = n.forwardRef((e, t) => {
          let { className: r, children: n, ...i } = e;
          return (0, s.jsxs)(l.xz, {
            ref: t,
            className: (0, o.cn)(
              'flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
              r
            ),
            ...i,
            children: [
              n,
              (0, s.jsx)(l.JO, {
                asChild: !0,
                children: (0, s.jsx)(a.jnn, { className: 'h-4 w-4 opacity-50' })
              })
            ]
          });
        });
      c.displayName = l.xz.displayName;
      let u = n.forwardRef((e, t) => {
        let { className: r, children: n, position: a = 'popper', ...i } = e;
        return (0, s.jsx)(l.h_, {
          children: (0, s.jsx)(l.VY, {
            ref: t,
            className: (0, o.cn)(
              'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              'popper' === a &&
                'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
              r
            ),
            position: a,
            ...i,
            children: (0, s.jsx)(l.l_, {
              className: (0, o.cn)(
                'p-1',
                'popper' === a &&
                  'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
              ),
              children: n
            })
          })
        });
      });
      (u.displayName = l.VY.displayName),
        (n.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, s.jsx)(l.__, {
            ref: t,
            className: (0, o.cn)('px-2 py-1.5 text-sm font-semibold', r),
            ...n
          });
        }).displayName = l.__.displayName);
      let m = n.forwardRef((e, t) => {
        let { className: r, children: n, ...i } = e;
        return (0, s.jsxs)(l.ck, {
          ref: t,
          className: (0, o.cn)(
            'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            r
          ),
          ...i,
          children: [
            (0, s.jsx)('span', {
              className:
                'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
              children: (0, s.jsx)(l.wU, {
                children: (0, s.jsx)(a.nQG, { className: 'h-4 w-4' })
              })
            }),
            (0, s.jsx)(l.eT, { children: n })
          ]
        });
      });
      (m.displayName = l.ck.displayName),
        (n.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, s.jsx)(l.Z0, {
            ref: t,
            className: (0, o.cn)('-mx-1 my-1 h-px bg-muted', r),
            ...n
          });
        }).displayName = l.Z0.displayName);
    },
    64344: function (e, t, r) {
      'use strict';
      r.d(t, {
        Separator: function () {
          return o;
        }
      });
      var s = r(57437),
        n = r(2265),
        a = r(70325),
        l = r(37440);
      let o = n.forwardRef((e, t) => {
        let {
          className: r,
          orientation: n = 'horizontal',
          decorative: o = !0,
          ...i
        } = e;
        return (0, s.jsx)(a.f, {
          ref: t,
          decorative: o,
          orientation: n,
          className: (0, l.cn)(
            'shrink-0 bg-border',
            'horizontal' === n ? 'h-[1px] w-full' : 'h-full w-[1px]',
            r
          ),
          ...i
        });
      });
      o.displayName = a.f.displayName;
    },
    37440: function (e, t, r) {
      'use strict';
      r.d(t, {
        cn: function () {
          return a;
        },
        t: function () {
          return o;
        },
        u: function () {
          return l;
        }
      });
      var s = r(44839),
        n = r(78077);
      function a() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, n.m)((0, s.W)(t));
      }
      function l(e) {
        if (!e) return !1;
        let t = e.data.current;
        return (
          (null == t ? void 0 : t.type) === 'Column' ||
          (null == t ? void 0 : t.type) === 'Task'
        );
      }
      function o(e) {
        var t, r;
        let s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { decimals: n = 0, sizeType: a = 'normal' } = s;
        if (0 === e) return '0 Byte';
        let l = Math.floor(Math.log(e) / Math.log(1024));
        return ''
          .concat((e / Math.pow(1024, l)).toFixed(n), ' ')
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
    }
  },
  function (e) {
    e.O(0, [310, 795, 366, 208, 673, 336, 136, 971, 526, 744], function () {
      return e((e.s = 84379));
    }),
      (_N_E = e.O());
  }
]);
