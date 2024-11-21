// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_64515'] = (e, t, r) => {
    'use strict';
    r.d(t, { Ol: () => c, SZ: () => l, Zb: () => a, aY: () => u, ll: () => s });
    var n = r(23393),
      o = r(68610),
      i = r(79246);
    let a = o.forwardRef(({ className: e2, ...t2 }, r2) =>
      (0, n.jsx)('div', {
        ref: r2,
        className: (0, i.cn)(
          'rounded-xl border bg-card text-card-foreground shadow',
          e2
        ),
        ...t2
      })
    );
    a.displayName = 'Card';
    let c = o.forwardRef(({ className: e2, ...t2 }, r2) =>
      (0, n.jsx)('div', {
        ref: r2,
        className: (0, i.cn)('flex flex-col space-y-1.5 p-6', e2),
        ...t2
      })
    );
    c.displayName = 'CardHeader';
    let s = o.forwardRef(({ className: e2, ...t2 }, r2) =>
      (0, n.jsx)('h3', {
        ref: r2,
        className: (0, i.cn)('font-semibold leading-none tracking-tight', e2),
        ...t2
      })
    );
    s.displayName = 'CardTitle';
    let l = o.forwardRef(({ className: e2, ...t2 }, r2) =>
      (0, n.jsx)('p', {
        ref: r2,
        className: (0, i.cn)('text-sm text-muted-foreground', e2),
        ...t2
      })
    );
    l.displayName = 'CardDescription';
    let u = o.forwardRef(({ className: e2, ...t2 }, r2) =>
      (0, n.jsx)('div', {
        ref: r2,
        className: (0, i.cn)('p-6 pt-0', e2),
        ...t2
      })
    );
    (u.displayName = 'CardContent'),
      (o.forwardRef(({ className: e2, ...t2 }, r2) =>
        (0, n.jsx)('div', {
          ref: r2,
          className: (0, i.cn)('flex items-center p-6 pt-0', e2),
          ...t2
        })
      ).displayName = 'CardFooter');
  };
  return __namedExportsObject;
};
export { __getNamedExports };
