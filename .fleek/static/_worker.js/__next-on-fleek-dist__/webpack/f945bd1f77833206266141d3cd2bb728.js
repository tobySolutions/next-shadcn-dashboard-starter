// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_41728'] = (e, a, t) => {
    t.d(a, { d: () => o, z: () => d });
    var s = t(23393),
      r = t(68610),
      l = t(16153),
      n = t(44475),
      i = t(79246);
    let o = (0, n.j)(
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
      d = r.forwardRef(
        (
          { className: e2, variant: a2, size: t2, asChild: r2 = false, ...n2 },
          d2
        ) => {
          let c = r2 ? l.g7 : 'button';
          return (0, s.jsx)(c, {
            className: (0, i.cn)(o({ variant: a2, size: t2, className: e2 })),
            ref: d2,
            ...n2
          });
        }
      );
    d.displayName = 'Button';
  };
  __namedExportsObject['__chunk_44475'] = (e, t, n) => {
    n.d(t, { j: () => i });
    var r = n(94705);
    let o = (e2) =>
        'boolean' == typeof e2 ? ''.concat(e2) : 0 === e2 ? '0' : e2,
      l = r.W,
      i = (e2, t2) => (n2) => {
        var r2;
        if ((null == t2 ? void 0 : t2.variants) == null)
          return l(
            e2,
            null == n2 ? void 0 : n2.class,
            null == n2 ? void 0 : n2.className
          );
        let { variants: i2, defaultVariants: a } = t2,
          u = Object.keys(i2).map((e3) => {
            let t3 = null == n2 ? void 0 : n2[e3],
              r3 = null == a ? void 0 : a[e3];
            if (null === t3) return null;
            let l2 = o(t3) || o(r3);
            return i2[e3][l2];
          }),
          s =
            n2 &&
            Object.entries(n2).reduce((e3, t3) => {
              let [n3, r3] = t3;
              return void 0 === r3 || (e3[n3] = r3), e3;
            }, {});
        return l(
          e2,
          u,
          null == t2
            ? void 0
            : null === (r2 = t2.compoundVariants) || void 0 === r2
            ? void 0
            : r2.reduce((e3, t3) => {
                let { class: n3, className: r3, ...o2 } = t3;
                return Object.entries(o2).every((e4) => {
                  let [t4, n4] = e4;
                  return Array.isArray(n4)
                    ? n4.includes({ ...a, ...s }[t4])
                    : { ...a, ...s }[t4] === n4;
                })
                  ? [...e3, n3, r3]
                  : e3;
              }, []),
          null == n2 ? void 0 : n2.class,
          null == n2 ? void 0 : n2.className
        );
      };
  };
  __namedExportsObject['__chunk_16153'] = (e, t, n) => {
    n.d(t, { g7: () => l });
    var r = n(68610),
      o = n(23393),
      l = r.forwardRef((e2, t2) => {
        let { children: n2, ...l2 } = e2,
          a2 = r.Children.toArray(n2),
          s = a2.find(u);
        if (s) {
          let e3 = s.props.children,
            n3 = a2.map((t3) =>
              t3 !== s
                ? t3
                : r.Children.count(e3) > 1
                ? r.Children.only(null)
                : r.isValidElement(e3)
                ? e3.props.children
                : null
            );
          return (0, o.jsx)(i, {
            ...l2,
            ref: t2,
            children: r.isValidElement(e3)
              ? r.cloneElement(e3, void 0, n3)
              : null
          });
        }
        return (0, o.jsx)(i, { ...l2, ref: t2, children: n2 });
      });
    l.displayName = 'Slot';
    var i = r.forwardRef((e2, t2) => {
      let { children: n2, ...o2 } = e2;
      if (r.isValidElement(n2)) {
        let e3 = (function (e4) {
          let t3 = Object.getOwnPropertyDescriptor(e4.props, 'ref')?.get,
            n3 = t3 && 'isReactWarning' in t3 && t3.isReactWarning;
          return n3
            ? e4.ref
            : (n3 =
                (t3 = Object.getOwnPropertyDescriptor(e4, 'ref')?.get) &&
                'isReactWarning' in t3 &&
                t3.isReactWarning)
            ? e4.props.ref
            : e4.props.ref || e4.ref;
        })(n2);
        return r.cloneElement(n2, {
          ...(function (e4, t3) {
            let n3 = { ...t3 };
            for (let r2 in t3) {
              let o3 = e4[r2],
                l2 = t3[r2];
              /^on[A-Z]/.test(r2)
                ? o3 && l2
                  ? (n3[r2] = (...e5) => {
                      l2(...e5), o3(...e5);
                    })
                  : o3 && (n3[r2] = o3)
                : 'style' === r2
                ? (n3[r2] = { ...o3, ...l2 })
                : 'className' === r2 &&
                  (n3[r2] = [o3, l2].filter(Boolean).join(' '));
            }
            return { ...e4, ...n3 };
          })(o2, n2.props),
          ref: t2
            ? (function (...e4) {
                return (t3) =>
                  e4.forEach((e5) => {
                    'function' == typeof e5
                      ? e5(t3)
                      : null != e5 && (e5.current = t3);
                  });
              })(t2, e3)
            : e3
        });
      }
      return r.Children.count(n2) > 1 ? r.Children.only(null) : null;
    });
    i.displayName = 'SlotClone';
    var a = ({ children: e2 }) => (0, o.jsx)(o.Fragment, { children: e2 });
    function u(e2) {
      return r.isValidElement(e2) && e2.type === a;
    }
  };
  return __namedExportsObject;
};
export { __getNamedExports };
