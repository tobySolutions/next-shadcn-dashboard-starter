// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_84752'] = (e, r, t) => {
    'use strict';
    t.d(r, {
      Ol: () => i,
      SZ: () => c,
      Zb: () => o,
      aY: () => d,
      eW: () => u,
      ll: () => l
    });
    var a = t(5486),
      n = t(32428),
      s = t(82087);
    let o = n.forwardRef(({ className: e2, ...r2 }, t2) =>
      (0, a.jsx)('div', {
        ref: t2,
        className: (0, s.cn)(
          'rounded-xl border bg-card text-card-foreground shadow',
          e2
        ),
        ...r2
      })
    );
    o.displayName = 'Card';
    let i = n.forwardRef(({ className: e2, ...r2 }, t2) =>
      (0, a.jsx)('div', {
        ref: t2,
        className: (0, s.cn)('flex flex-col space-y-1.5 p-6', e2),
        ...r2
      })
    );
    i.displayName = 'CardHeader';
    let l = n.forwardRef(({ className: e2, ...r2 }, t2) =>
      (0, a.jsx)('h3', {
        ref: t2,
        className: (0, s.cn)('font-semibold leading-none tracking-tight', e2),
        ...r2
      })
    );
    l.displayName = 'CardTitle';
    let c = n.forwardRef(({ className: e2, ...r2 }, t2) =>
      (0, a.jsx)('p', {
        ref: t2,
        className: (0, s.cn)('text-sm text-muted-foreground', e2),
        ...r2
      })
    );
    c.displayName = 'CardDescription';
    let d = n.forwardRef(({ className: e2, ...r2 }, t2) =>
      (0, a.jsx)('div', {
        ref: t2,
        className: (0, s.cn)('p-6 pt-0', e2),
        ...r2
      })
    );
    d.displayName = 'CardContent';
    let u = n.forwardRef(({ className: e2, ...r2 }, t2) =>
      (0, a.jsx)('div', {
        ref: t2,
        className: (0, s.cn)('flex items-center p-6 pt-0', e2),
        ...r2
      })
    );
    u.displayName = 'CardFooter';
  };
  return __namedExportsObject;
};
export { __getNamedExports };
