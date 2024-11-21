// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_11919'] = (e, a, t) => {
    t.d(a, { X: () => r });
    var s = t(23393);
    let r = ({ title: e2, description: a2 }) =>
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)('h2', {
            className: 'text-3xl font-bold tracking-tight',
            children: e2
          }),
          (0, s.jsx)('p', {
            className: 'text-sm text-muted-foreground',
            children: a2
          })
        ]
      });
  };
  __namedExportsObject['__chunk_87430'] = (e, a, t) => {
    t.d(a, {
      $N: () => x,
      Be: () => h,
      Vq: () => o,
      cN: () => u,
      cZ: () => p,
      fK: () => f,
      hg: () => d
    });
    var s = t(5486),
      r = t(32428),
      l = t(59973),
      n = t(44991),
      i = t(82087);
    let o = l.fC,
      d = l.xz,
      c = l.h_;
    l.x8;
    let m = r.forwardRef(({ className: e2, ...a2 }, t2) =>
      (0, s.jsx)(l.aV, {
        ref: t2,
        className: (0, i.cn)(
          'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          e2
        ),
        ...a2
      })
    );
    m.displayName = l.aV.displayName;
    let p = r.forwardRef(({ className: e2, children: a2, ...t2 }, r2) =>
      (0, s.jsxs)(c, {
        children: [
          (0, s.jsx)(m, {}),
          (0, s.jsxs)(l.VY, {
            ref: r2,
            className: (0, i.cn)(
              'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
              e2
            ),
            ...t2,
            children: [
              a2,
              (0, s.jsxs)(l.x8, {
                className:
                  'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                children: [
                  (0, s.jsx)(n.Pxu, { className: 'h-4 w-4' }),
                  (0, s.jsx)('span', {
                    className: 'sr-only',
                    children: 'Close'
                  })
                ]
              })
            ]
          })
        ]
      })
    );
    p.displayName = l.VY.displayName;
    let f = ({ className: e2, ...a2 }) =>
      (0, s.jsx)('div', {
        className: (0, i.cn)(
          'flex flex-col space-y-1.5 text-center sm:text-left',
          e2
        ),
        ...a2
      });
    f.displayName = 'DialogHeader';
    let u = ({ className: e2, ...a2 }) =>
      (0, s.jsx)('div', {
        className: (0, i.cn)(
          'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
          e2
        ),
        ...a2
      });
    u.displayName = 'DialogFooter';
    let x = r.forwardRef(({ className: e2, ...a2 }, t2) =>
      (0, s.jsx)(l.Dx, {
        ref: t2,
        className: (0, i.cn)(
          'text-lg font-semibold leading-none tracking-tight',
          e2
        ),
        ...a2
      })
    );
    x.displayName = l.Dx.displayName;
    let h = r.forwardRef(({ className: e2, ...a2 }, t2) =>
      (0, s.jsx)(l.dk, {
        ref: t2,
        className: (0, i.cn)('text-sm text-muted-foreground', e2),
        ...a2
      })
    );
    h.displayName = l.dk.displayName;
  };
  __namedExportsObject['__chunk_64002'] = (e, a, t) => {
    t.d(a, { C: () => i });
    var s = t(5486);
    t(32428);
    var r = t(13986),
      l = t(82087);
    let n = (0, r.j)(
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
    function i({ className: e2, variant: a2, ...t2 }) {
      return (0, s.jsx)('div', {
        className: (0, l.cn)(n({ variant: a2 }), e2),
        ...t2
      });
    }
  };
  return __namedExportsObject;
};
export { __getNamedExports };
