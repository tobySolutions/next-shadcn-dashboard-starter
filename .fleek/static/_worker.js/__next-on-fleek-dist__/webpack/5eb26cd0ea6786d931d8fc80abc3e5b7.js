// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_79118'] = (e, t, r) => {
    r.d(t, { WV: () => d, jH: () => f });
    var n = r(97957),
      o = r(32428),
      l = r(58754),
      i = r(62820);
    let a = (0, o.forwardRef)((e2, t2) => {
      let { children: r2, ...l2 } = e2,
        i2 = o.Children.toArray(r2),
        a2 = i2.find(s);
      if (a2) {
        let e3 = a2.props.children,
          r3 = i2.map((t3) =>
            t3 !== a2
              ? t3
              : o.Children.count(e3) > 1
              ? o.Children.only(null)
              : (0, o.isValidElement)(e3)
              ? e3.props.children
              : null
          );
        return (0, o.createElement)(
          c,
          (0, n.Z)({}, l2, { ref: t2 }),
          (0, o.isValidElement)(e3) ? (0, o.cloneElement)(e3, void 0, r3) : null
        );
      }
      return (0, o.createElement)(c, (0, n.Z)({}, l2, { ref: t2 }), r2);
    });
    a.displayName = 'Slot';
    let c = (0, o.forwardRef)((e2, t2) => {
      let { children: r2, ...n2 } = e2;
      return (0, o.isValidElement)(r2)
        ? (0, o.cloneElement)(r2, {
            ...(function (e3, t3) {
              let r3 = { ...t3 };
              for (let n3 in t3) {
                let o2 = e3[n3],
                  l2 = t3[n3];
                /^on[A-Z]/.test(n3)
                  ? o2 && l2
                    ? (r3[n3] = (...e4) => {
                        l2(...e4), o2(...e4);
                      })
                    : o2 && (r3[n3] = o2)
                  : 'style' === n3
                  ? (r3[n3] = { ...o2, ...l2 })
                  : 'className' === n3 &&
                    (r3[n3] = [o2, l2].filter(Boolean).join(' '));
              }
              return { ...e3, ...r3 };
            })(n2, r2.props),
            ref: t2 ? (0, i.F)(t2, r2.ref) : r2.ref
          })
        : o.Children.count(r2) > 1
        ? o.Children.only(null)
        : null;
    });
    c.displayName = 'SlotClone';
    let u = ({ children: e2 }) => (0, o.createElement)(o.Fragment, null, e2);
    function s(e2) {
      return (0, o.isValidElement)(e2) && e2.type === u;
    }
    let d = [
      'a',
      'button',
      'div',
      'form',
      'h2',
      'h3',
      'img',
      'input',
      'label',
      'li',
      'nav',
      'ol',
      'p',
      'span',
      'svg',
      'ul'
    ].reduce((e2, t2) => {
      let r2 = (0, o.forwardRef)((e3, r3) => {
        let { asChild: l2, ...i2 } = e3,
          c2 = l2 ? a : t2;
        return (
          (0, o.useEffect)(() => {
            window[Symbol.for('radix-ui')] = true;
          }, []),
          (0, o.createElement)(c2, (0, n.Z)({}, i2, { ref: r3 }))
        );
      });
      return (r2.displayName = `Primitive.${t2}`), { ...e2, [t2]: r2 };
    }, {});
    function f(e2, t2) {
      e2 && (0, l.flushSync)(() => e2.dispatchEvent(t2));
    }
  };
  __namedExportsObject['__chunk_62820'] = (e, t, r) => {
    r.d(t, { F: () => o, e: () => l });
    var n = r(32428);
    function o(...e2) {
      return (t2) =>
        e2.forEach((e3) => {
          'function' == typeof e3 ? e3(t2) : null != e3 && (e3.current = t2);
        });
    }
    function l(...e2) {
      return (0, n.useCallback)(o(...e2), e2);
    }
  };
  __namedExportsObject['__chunk_97957'] = (e, t, r) => {
    r.d(t, { Z: () => n });
    function n() {
      return (n = Object.assign
        ? Object.assign.bind()
        : function (e2) {
            for (var t2 = 1; t2 < arguments.length; t2++) {
              var r2 = arguments[t2];
              for (var n2 in r2)
                ({}).hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
            }
            return e2;
          }).apply(null, arguments);
    }
  };
  return __namedExportsObject;
};
export { __getNamedExports };
