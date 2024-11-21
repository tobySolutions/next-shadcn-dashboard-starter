// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_2770'] = (e, t, n) => {
    n.d(t, { t: () => o });
    var r = n(32428),
      l = n(54138);
    function o(e2) {
      let [t2, n2] = (0, r.useState)(void 0);
      return (
        (0, l.b)(() => {
          if (e2) {
            n2({ width: e2.offsetWidth, height: e2.offsetHeight });
            let t3 = new ResizeObserver((t4) => {
              let r2, l2;
              if (!Array.isArray(t4) || !t4.length) return;
              let o2 = t4[0];
              if ('borderBoxSize' in o2) {
                let e3 = o2.borderBoxSize,
                  t5 = Array.isArray(e3) ? e3[0] : e3;
                (r2 = t5.inlineSize), (l2 = t5.blockSize);
              } else (r2 = e2.offsetWidth), (l2 = e2.offsetHeight);
              n2({ width: r2, height: l2 });
            });
            return (
              t3.observe(e2, { box: 'border-box' }), () => t3.unobserve(e2)
            );
          }
          n2(void 0);
        }, [e2]),
        t2
      );
    }
  };
  __namedExportsObject['__chunk_66928'] = (e, t, n) => {
    n.d(t, { B: () => c });
    var r = n(32428),
      l = n(15521),
      o = n(62820),
      i = n(97957);
    let a = (0, r.forwardRef)((e2, t2) => {
      let { children: n2, ...l2 } = e2,
        o2 = r.Children.toArray(n2),
        a2 = o2.find(s);
      if (a2) {
        let e3 = a2.props.children,
          n3 = o2.map((t3) =>
            t3 !== a2
              ? t3
              : r.Children.count(e3) > 1
              ? r.Children.only(null)
              : (0, r.isValidElement)(e3)
              ? e3.props.children
              : null
          );
        return (0, r.createElement)(
          d,
          (0, i.Z)({}, l2, { ref: t2 }),
          (0, r.isValidElement)(e3) ? (0, r.cloneElement)(e3, void 0, n3) : null
        );
      }
      return (0, r.createElement)(d, (0, i.Z)({}, l2, { ref: t2 }), n2);
    });
    a.displayName = 'Slot';
    let d = (0, r.forwardRef)((e2, t2) => {
      let { children: n2, ...l2 } = e2;
      return (0, r.isValidElement)(n2)
        ? (0, r.cloneElement)(n2, {
            ...(function (e3, t3) {
              let n3 = { ...t3 };
              for (let r2 in t3) {
                let l3 = e3[r2],
                  o2 = t3[r2];
                /^on[A-Z]/.test(r2)
                  ? l3 && o2
                    ? (n3[r2] = (...e4) => {
                        o2(...e4), l3(...e4);
                      })
                    : l3 && (n3[r2] = l3)
                  : 'style' === r2
                  ? (n3[r2] = { ...l3, ...o2 })
                  : 'className' === r2 &&
                    (n3[r2] = [l3, o2].filter(Boolean).join(' '));
              }
              return { ...e3, ...n3 };
            })(l2, n2.props),
            ref: t2 ? (0, o.F)(t2, n2.ref) : n2.ref
          })
        : r.Children.count(n2) > 1
        ? r.Children.only(null)
        : null;
    });
    d.displayName = 'SlotClone';
    let u = ({ children: e2 }) => (0, r.createElement)(r.Fragment, null, e2);
    function s(e2) {
      return (0, r.isValidElement)(e2) && e2.type === u;
    }
    function c(e2) {
      let t2 = e2 + 'CollectionProvider',
        [n2, i2] = (0, l.b)(t2),
        [d2, u2] = n2(t2, {
          collectionRef: { current: null },
          itemMap: /* @__PURE__ */ new Map()
        }),
        s2 = e2 + 'CollectionSlot',
        c2 = r.forwardRef((e3, t3) => {
          let { scope: n3, children: l2 } = e3,
            i3 = u2(s2, n3),
            d3 = (0, o.e)(t3, i3.collectionRef);
          return r.createElement(a, { ref: d3 }, l2);
        }),
        f = e2 + 'CollectionItemSlot',
        p = 'data-radix-collection-item';
      return [
        {
          Provider: (e3) => {
            let { scope: t3, children: n3 } = e3,
              l2 = r.useRef(null),
              o2 = r.useRef(/* @__PURE__ */ new Map()).current;
            return r.createElement(
              d2,
              { scope: t3, itemMap: o2, collectionRef: l2 },
              n3
            );
          },
          Slot: c2,
          ItemSlot: r.forwardRef((e3, t3) => {
            let { scope: n3, children: l2, ...i3 } = e3,
              d3 = r.useRef(null),
              s3 = (0, o.e)(t3, d3),
              c3 = u2(f, n3);
            return (
              r.useEffect(
                () => (
                  c3.itemMap.set(d3, { ref: d3, ...i3 }),
                  () => void c3.itemMap.delete(d3)
                )
              ),
              r.createElement(a, { [p]: '', ref: s3 }, l2)
            );
          })
        },
        function (t3) {
          let n3 = u2(e2 + 'CollectionConsumer', t3);
          return r.useCallback(() => {
            let e3 = n3.collectionRef.current;
            if (!e3) return [];
            let t4 = Array.from(e3.querySelectorAll(`[${p}]`));
            return Array.from(n3.itemMap.values()).sort(
              (e4, n4) =>
                t4.indexOf(e4.ref.current) - t4.indexOf(n4.ref.current)
            );
          }, [n3.collectionRef, n3.itemMap]);
        },
        i2
      ];
    }
  };
  __namedExportsObject['__chunk_11860'] = (e, t, n) => {
    n.d(t, { f: () => i });
    var r = n(97957),
      l = n(32428),
      o = n(79118);
    let i = (0, l.forwardRef)((e2, t2) => {
      let { children: n2, width: i2 = 10, height: a = 5, ...d } = e2;
      return (0, l.createElement)(
        o.WV.svg,
        (0, r.Z)({}, d, {
          ref: t2,
          width: i2,
          height: a,
          viewBox: '0 0 30 10',
          preserveAspectRatio: 'none'
        }),
        e2.asChild
          ? n2
          : (0, l.createElement)('polygon', { points: '0,0 30,0 15,10' })
      );
    });
  };
  return __namedExportsObject;
};
export { __getNamedExports };
