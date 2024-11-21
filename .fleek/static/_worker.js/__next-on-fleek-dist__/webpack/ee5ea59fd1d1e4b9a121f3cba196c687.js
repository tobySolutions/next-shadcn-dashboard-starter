// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_79246'] = (e, a, t) => {
    t.d(a, { cn: () => l });
    var s = t(94705),
      r = t(94203);
    function l(...e2) {
      return (0, r.m)((0, s.W)(e2));
    }
  };
  __namedExportsObject['__chunk_94203'] = (r, e, o) => {
    o.d(e, { m: () => W });
    var t = /^\[(.+)\]$/;
    function n(r2, e2) {
      var o2 = r2;
      return (
        e2.split('-').forEach(function (r3) {
          o2.nextPart.has(r3) ||
            o2.nextPart.set(r3, {
              nextPart: /* @__PURE__ */ new Map(),
              validators: []
            }),
            (o2 = o2.nextPart.get(r3));
        }),
        o2
      );
    }
    var i = /\s+/;
    function l() {
      for (var r2, e2, o2 = 0, t2 = ''; o2 < arguments.length; )
        (r2 = arguments[o2++]) &&
          (e2 = (function r3(e3) {
            if ('string' == typeof e3) return e3;
            for (var o3, t3 = '', n2 = 0; n2 < e3.length; n2++)
              e3[n2] && (o3 = r3(e3[n2])) && (t3 && (t3 += ' '), (t3 += o3));
            return t3;
          })(r2)) &&
          (t2 && (t2 += ' '), (t2 += e2));
      return t2;
    }
    function a(r2) {
      var e2 = function (e3) {
        return e3[r2] || [];
      };
      return (e2.isThemeGetter = true), e2;
    }
    var s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
      c = /^\d+\/\d+$/,
      d = /* @__PURE__ */ new Set(['px', 'full', 'screen']),
      u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      p =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      f = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
    function b(r2) {
      return y(r2) || d.has(r2) || c.test(r2) || m(r2);
    }
    function m(r2) {
      return I(r2, 'length', M);
    }
    function g(r2) {
      return I(r2, 'size', P);
    }
    function h(r2) {
      return I(r2, 'position', P);
    }
    function v(r2) {
      return I(r2, 'url', N);
    }
    function x(r2) {
      return I(r2, 'number', y);
    }
    function y(r2) {
      return !Number.isNaN(Number(r2));
    }
    function w(r2) {
      return r2.endsWith('%') && y(r2.slice(0, -1));
    }
    function k(r2) {
      return S(r2) || I(r2, 'number', S);
    }
    function z(r2) {
      return s.test(r2);
    }
    function C() {
      return true;
    }
    function j(r2) {
      return u.test(r2);
    }
    function G(r2) {
      return I(r2, '', E);
    }
    function I(r2, e2, o2) {
      var t2 = s.exec(r2);
      return !!t2 && (t2[1] ? t2[1] === e2 : o2(t2[2]));
    }
    function M(r2) {
      return p.test(r2);
    }
    function P() {
      return false;
    }
    function N(r2) {
      return r2.startsWith('url(');
    }
    function S(r2) {
      return Number.isInteger(Number(r2));
    }
    function E(r2) {
      return f.test(r2);
    }
    var W = (function () {
      for (
        var r2, e2, o2, a2 = arguments.length, s2 = Array(a2), c2 = 0;
        c2 < a2;
        c2++
      )
        s2[c2] = arguments[c2];
      var d2 = function (i2) {
        var l2 = s2[0];
        return (
          (e2 = (r2 = (function (r3) {
            var e3, o3, i3, l3, a3, s3, c3, d3, u3, p2, f2;
            return {
              cache: (function (r4) {
                if (r4 < 1) return { get: function () {}, set: function () {} };
                var e4 = 0,
                  o4 = /* @__PURE__ */ new Map(),
                  t2 = /* @__PURE__ */ new Map();
                function n2(n3, i4) {
                  o4.set(n3, i4),
                    ++e4 > r4 &&
                      ((e4 = 0), (t2 = o4), (o4 = /* @__PURE__ */ new Map()));
                }
                return {
                  get: function (r5) {
                    var e5 = o4.get(r5);
                    return void 0 !== e5
                      ? e5
                      : void 0 !== (e5 = t2.get(r5))
                      ? (n2(r5, e5), e5)
                      : void 0;
                  },
                  set: function (r5, e5) {
                    o4.has(r5) ? o4.set(r5, e5) : n2(r5, e5);
                  }
                };
              })(r3.cacheSize),
              splitModifiers:
                ((o3 = 1 === (e3 = r3.separator || ':').length),
                (i3 = e3[0]),
                (l3 = e3.length),
                function (r4) {
                  for (
                    var t2, n2 = [], a4 = 0, s4 = 0, c4 = 0;
                    c4 < r4.length;
                    c4++
                  ) {
                    var d4 = r4[c4];
                    if (0 === a4) {
                      if (d4 === i3 && (o3 || r4.slice(c4, c4 + l3) === e3)) {
                        n2.push(r4.slice(s4, c4)), (s4 = c4 + l3);
                        continue;
                      }
                      if ('/' === d4) {
                        t2 = c4;
                        continue;
                      }
                    }
                    '[' === d4 ? a4++ : ']' === d4 && a4--;
                  }
                  var u4 = 0 === n2.length ? r4 : r4.substring(s4),
                    p3 = u4.startsWith('!'),
                    f3 = p3 ? u4.substring(1) : u4;
                  return {
                    modifiers: n2,
                    hasImportantModifier: p3,
                    baseClassName: f3,
                    maybePostfixModifierPosition:
                      t2 && t2 > s4 ? t2 - s4 : void 0
                  };
                }),
              ...((d3 = r3.theme),
              (u3 = r3.prefix),
              (p2 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }),
              ((f2 = Object.entries(r3.classGroups)),
              u3
                ? f2.map(function (r4) {
                    return [
                      r4[0],
                      r4[1].map(function (r5) {
                        return 'string' == typeof r5
                          ? u3 + r5
                          : 'object' == typeof r5
                          ? Object.fromEntries(
                              Object.entries(r5).map(function (r6) {
                                return [u3 + r6[0], r6[1]];
                              })
                            )
                          : r5;
                      })
                    ];
                  })
                : f2).forEach(function (r4) {
                var e4 = r4[0];
                (function r5(e5, o4, t2, i4) {
                  e5.forEach(function (e6) {
                    if ('string' == typeof e6) {
                      ('' === e6 ? o4 : n(o4, e6)).classGroupId = t2;
                      return;
                    }
                    if ('function' == typeof e6) {
                      if (e6.isThemeGetter) {
                        r5(e6(i4), o4, t2, i4);
                        return;
                      }
                      o4.validators.push({ validator: e6, classGroupId: t2 });
                      return;
                    }
                    Object.entries(e6).forEach(function (e7) {
                      var l4 = e7[0];
                      r5(e7[1], n(o4, l4), t2, i4);
                    });
                  });
                })(r4[1], p2, e4, d3);
              }),
              (a3 = r3.conflictingClassGroups),
              (c3 =
                void 0 === (s3 = r3.conflictingClassGroupModifiers) ? {} : s3),
              {
                getClassGroupId: function (r4) {
                  var e4 = r4.split('-');
                  return (
                    '' === e4[0] && 1 !== e4.length && e4.shift(),
                    (function r5(e5, o4) {
                      if (0 === e5.length) return o4.classGroupId;
                      var t2 = e5[0],
                        n2 = o4.nextPart.get(t2),
                        i4 = n2 ? r5(e5.slice(1), n2) : void 0;
                      if (i4) return i4;
                      if (0 !== o4.validators.length) {
                        var l4 = e5.join('-');
                        return o4.validators.find(function (r6) {
                          return (0, r6.validator)(l4);
                        })?.classGroupId;
                      }
                    })(e4, p2) ||
                      (function (r5) {
                        if (t.test(r5)) {
                          var e5 = t.exec(r5)[1],
                            o4 = e5?.substring(0, e5.indexOf(':'));
                          if (o4) return 'arbitrary..' + o4;
                        }
                      })(r4)
                  );
                },
                getConflictingClassGroupIds: function (r4, e4) {
                  var o4 = a3[r4] || [];
                  return e4 && c3[r4] ? [].concat(o4, c3[r4]) : o4;
                }
              })
            };
          })(
            s2.slice(1).reduce(function (r3, e3) {
              return e3(r3);
            }, l2())
          )).cache.get),
          (o2 = r2.cache.set),
          (d2 = u2),
          u2(i2)
        );
      };
      function u2(t2) {
        var n2,
          l2,
          a3,
          s3,
          c3,
          d3 = e2(t2);
        if (d3) return d3;
        var u3 =
          ((l2 = (n2 = r2).splitModifiers),
          (a3 = n2.getClassGroupId),
          (s3 = n2.getConflictingClassGroupIds),
          (c3 = /* @__PURE__ */ new Set()),
          t2
            .trim()
            .split(i)
            .map(function (r3) {
              var e3 = l2(r3),
                o3 = e3.modifiers,
                t3 = e3.hasImportantModifier,
                n3 = e3.baseClassName,
                i2 = e3.maybePostfixModifierPosition,
                s4 = a3(i2 ? n3.substring(0, i2) : n3),
                c4 = !!i2;
              if (!s4) {
                if (!i2 || !(s4 = a3(n3)))
                  return { isTailwindClass: false, originalClassName: r3 };
                c4 = false;
              }
              var d4 = (function (r4) {
                if (r4.length <= 1) return r4;
                var e4 = [],
                  o4 = [];
                return (
                  r4.forEach(function (r5) {
                    '[' === r5[0]
                      ? (e4.push.apply(e4, o4.sort().concat([r5])), (o4 = []))
                      : o4.push(r5);
                  }),
                  e4.push.apply(e4, o4.sort()),
                  e4
                );
              })(o3).join(':');
              return {
                isTailwindClass: true,
                modifierId: t3 ? d4 + '!' : d4,
                classGroupId: s4,
                originalClassName: r3,
                hasPostfixModifier: c4
              };
            })
            .reverse()
            .filter(function (r3) {
              if (!r3.isTailwindClass) return true;
              var e3 = r3.modifierId,
                o3 = r3.classGroupId,
                t3 = r3.hasPostfixModifier,
                n3 = e3 + o3;
              return (
                !c3.has(n3) &&
                (c3.add(n3),
                s3(o3, t3).forEach(function (r4) {
                  return c3.add(e3 + r4);
                }),
                true)
              );
            })
            .reverse()
            .map(function (r3) {
              return r3.originalClassName;
            })
            .join(' '));
        return o2(t2, u3), u3;
      }
      return function () {
        return d2(l.apply(null, arguments));
      };
    })(function () {
      var r2 = a('colors'),
        e2 = a('spacing'),
        o2 = a('blur'),
        t2 = a('brightness'),
        n2 = a('borderColor'),
        i2 = a('borderRadius'),
        l2 = a('borderSpacing'),
        s2 = a('borderWidth'),
        c2 = a('contrast'),
        d2 = a('grayscale'),
        u2 = a('hueRotate'),
        p2 = a('invert'),
        f2 = a('gap'),
        I2 = a('gradientColorStops'),
        M2 = a('gradientColorStopPositions'),
        P2 = a('inset'),
        N2 = a('margin'),
        S2 = a('opacity'),
        E2 = a('padding'),
        W2 = a('saturate'),
        O = a('scale'),
        T = a('sepia'),
        $ = a('skew'),
        _ = a('space'),
        R = a('translate'),
        A = function () {
          return ['auto', 'contain', 'none'];
        },
        q = function () {
          return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
        },
        B = function () {
          return ['auto', z, e2];
        },
        D = function () {
          return [z, e2];
        },
        F = function () {
          return ['', b];
        },
        H = function () {
          return ['auto', y, z];
        },
        J = function () {
          return [
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top'
          ];
        },
        K = function () {
          return ['solid', 'dashed', 'dotted', 'double', 'none'];
        },
        L = function () {
          return [
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity',
            'plus-lighter'
          ];
        },
        Q = function () {
          return [
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch'
          ];
        },
        U = function () {
          return ['', '0', z];
        },
        V = function () {
          return [
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
          ];
        },
        X = function () {
          return [y, x];
        },
        Y = function () {
          return [y, z];
        };
      return {
        cacheSize: 500,
        theme: {
          colors: [C],
          spacing: [b],
          blur: ['none', '', j, z],
          brightness: X(),
          borderColor: [r2],
          borderRadius: ['none', '', 'full', j, z],
          borderSpacing: D(),
          borderWidth: F(),
          contrast: X(),
          grayscale: U(),
          hueRotate: Y(),
          invert: U(),
          gap: D(),
          gradientColorStops: [r2],
          gradientColorStopPositions: [w, m],
          inset: B(),
          margin: B(),
          opacity: X(),
          padding: D(),
          saturate: X(),
          scale: X(),
          sepia: U(),
          skew: Y(),
          space: D(),
          translate: D()
        },
        classGroups: {
          aspect: [{ aspect: ['auto', 'square', 'video', z] }],
          container: ['container'],
          columns: [{ columns: [j] }],
          'break-after': [{ 'break-after': V() }],
          'break-before': [{ 'break-before': V() }],
          'break-inside': [
            { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }
          ],
          'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
          box: [{ box: ['border', 'content'] }],
          display: [
            'block',
            'inline-block',
            'inline',
            'flex',
            'inline-flex',
            'table',
            'inline-table',
            'table-caption',
            'table-cell',
            'table-column',
            'table-column-group',
            'table-footer-group',
            'table-header-group',
            'table-row-group',
            'table-row',
            'flow-root',
            'grid',
            'inline-grid',
            'contents',
            'list-item',
            'hidden'
          ],
          float: [{ float: ['right', 'left', 'none'] }],
          clear: [{ clear: ['left', 'right', 'both', 'none'] }],
          isolation: ['isolate', 'isolation-auto'],
          'object-fit': [
            { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }
          ],
          'object-position': [{ object: [].concat(J(), [z]) }],
          overflow: [{ overflow: q() }],
          'overflow-x': [{ 'overflow-x': q() }],
          'overflow-y': [{ 'overflow-y': q() }],
          overscroll: [{ overscroll: A() }],
          'overscroll-x': [{ 'overscroll-x': A() }],
          'overscroll-y': [{ 'overscroll-y': A() }],
          position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
          inset: [{ inset: [P2] }],
          'inset-x': [{ 'inset-x': [P2] }],
          'inset-y': [{ 'inset-y': [P2] }],
          start: [{ start: [P2] }],
          end: [{ end: [P2] }],
          top: [{ top: [P2] }],
          right: [{ right: [P2] }],
          bottom: [{ bottom: [P2] }],
          left: [{ left: [P2] }],
          visibility: ['visible', 'invisible', 'collapse'],
          z: [{ z: ['auto', k] }],
          basis: [{ basis: B() }],
          'flex-direction': [
            { flex: ['row', 'row-reverse', 'col', 'col-reverse'] }
          ],
          'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
          flex: [{ flex: ['1', 'auto', 'initial', 'none', z] }],
          grow: [{ grow: U() }],
          shrink: [{ shrink: U() }],
          order: [{ order: ['first', 'last', 'none', k] }],
          'grid-cols': [{ 'grid-cols': [C] }],
          'col-start-end': [{ col: ['auto', { span: ['full', k] }, z] }],
          'col-start': [{ 'col-start': H() }],
          'col-end': [{ 'col-end': H() }],
          'grid-rows': [{ 'grid-rows': [C] }],
          'row-start-end': [{ row: ['auto', { span: [k] }, z] }],
          'row-start': [{ 'row-start': H() }],
          'row-end': [{ 'row-end': H() }],
          'grid-flow': [
            { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }
          ],
          'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', z] }],
          'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', z] }],
          gap: [{ gap: [f2] }],
          'gap-x': [{ 'gap-x': [f2] }],
          'gap-y': [{ 'gap-y': [f2] }],
          'justify-content': [{ justify: ['normal'].concat(Q()) }],
          'justify-items': [
            { 'justify-items': ['start', 'end', 'center', 'stretch'] }
          ],
          'justify-self': [
            { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }
          ],
          'align-content': [{ content: ['normal'].concat(Q(), ['baseline']) }],
          'align-items': [
            { items: ['start', 'end', 'center', 'baseline', 'stretch'] }
          ],
          'align-self': [
            { self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }
          ],
          'place-content': [{ 'place-content': [].concat(Q(), ['baseline']) }],
          'place-items': [
            { 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }
          ],
          'place-self': [
            { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }
          ],
          p: [{ p: [E2] }],
          px: [{ px: [E2] }],
          py: [{ py: [E2] }],
          ps: [{ ps: [E2] }],
          pe: [{ pe: [E2] }],
          pt: [{ pt: [E2] }],
          pr: [{ pr: [E2] }],
          pb: [{ pb: [E2] }],
          pl: [{ pl: [E2] }],
          m: [{ m: [N2] }],
          mx: [{ mx: [N2] }],
          my: [{ my: [N2] }],
          ms: [{ ms: [N2] }],
          me: [{ me: [N2] }],
          mt: [{ mt: [N2] }],
          mr: [{ mr: [N2] }],
          mb: [{ mb: [N2] }],
          ml: [{ ml: [N2] }],
          'space-x': [{ 'space-x': [_] }],
          'space-x-reverse': ['space-x-reverse'],
          'space-y': [{ 'space-y': [_] }],
          'space-y-reverse': ['space-y-reverse'],
          w: [{ w: ['auto', 'min', 'max', 'fit', z, e2] }],
          'min-w': [{ 'min-w': ['min', 'max', 'fit', z, b] }],
          'max-w': [
            {
              'max-w': [
                '0',
                'none',
                'full',
                'min',
                'max',
                'fit',
                'prose',
                { screen: [j] },
                j,
                z
              ]
            }
          ],
          h: [{ h: [z, e2, 'auto', 'min', 'max', 'fit'] }],
          'min-h': [{ 'min-h': ['min', 'max', 'fit', z, b] }],
          'max-h': [{ 'max-h': [z, e2, 'min', 'max', 'fit'] }],
          'font-size': [{ text: ['base', j, m] }],
          'font-smoothing': ['antialiased', 'subpixel-antialiased'],
          'font-style': ['italic', 'not-italic'],
          'font-weight': [
            {
              font: [
                'thin',
                'extralight',
                'light',
                'normal',
                'medium',
                'semibold',
                'bold',
                'extrabold',
                'black',
                x
              ]
            }
          ],
          'font-family': [{ font: [C] }],
          'fvn-normal': ['normal-nums'],
          'fvn-ordinal': ['ordinal'],
          'fvn-slashed-zero': ['slashed-zero'],
          'fvn-figure': ['lining-nums', 'oldstyle-nums'],
          'fvn-spacing': ['proportional-nums', 'tabular-nums'],
          'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
          tracking: [
            {
              tracking: [
                'tighter',
                'tight',
                'normal',
                'wide',
                'wider',
                'widest',
                z
              ]
            }
          ],
          'line-clamp': [{ 'line-clamp': ['none', y, x] }],
          leading: [
            {
              leading: [
                'none',
                'tight',
                'snug',
                'normal',
                'relaxed',
                'loose',
                z,
                b
              ]
            }
          ],
          'list-image': [{ 'list-image': ['none', z] }],
          'list-style-type': [{ list: ['none', 'disc', 'decimal', z] }],
          'list-style-position': [{ list: ['inside', 'outside'] }],
          'placeholder-color': [{ placeholder: [r2] }],
          'placeholder-opacity': [{ 'placeholder-opacity': [S2] }],
          'text-alignment': [
            { text: ['left', 'center', 'right', 'justify', 'start', 'end'] }
          ],
          'text-color': [{ text: [r2] }],
          'text-opacity': [{ 'text-opacity': [S2] }],
          'text-decoration': [
            'underline',
            'overline',
            'line-through',
            'no-underline'
          ],
          'text-decoration-style': [{ decoration: [].concat(K(), ['wavy']) }],
          'text-decoration-thickness': [
            { decoration: ['auto', 'from-font', b] }
          ],
          'underline-offset': [{ 'underline-offset': ['auto', z, b] }],
          'text-decoration-color': [{ decoration: [r2] }],
          'text-transform': [
            'uppercase',
            'lowercase',
            'capitalize',
            'normal-case'
          ],
          'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
          indent: [{ indent: D() }],
          'vertical-align': [
            {
              align: [
                'baseline',
                'top',
                'middle',
                'bottom',
                'text-top',
                'text-bottom',
                'sub',
                'super',
                z
              ]
            }
          ],
          whitespace: [
            {
              whitespace: [
                'normal',
                'nowrap',
                'pre',
                'pre-line',
                'pre-wrap',
                'break-spaces'
              ]
            }
          ],
          break: [{ break: ['normal', 'words', 'all', 'keep'] }],
          hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
          content: [{ content: ['none', z] }],
          'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
          'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
          'bg-opacity': [{ 'bg-opacity': [S2] }],
          'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
          'bg-position': [{ bg: [].concat(J(), [h]) }],
          'bg-repeat': [
            { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }
          ],
          'bg-size': [{ bg: ['auto', 'cover', 'contain', g] }],
          'bg-image': [
            {
              bg: [
                'none',
                { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
                v
              ]
            }
          ],
          'bg-color': [{ bg: [r2] }],
          'gradient-from-pos': [{ from: [M2] }],
          'gradient-via-pos': [{ via: [M2] }],
          'gradient-to-pos': [{ to: [M2] }],
          'gradient-from': [{ from: [I2] }],
          'gradient-via': [{ via: [I2] }],
          'gradient-to': [{ to: [I2] }],
          rounded: [{ rounded: [i2] }],
          'rounded-s': [{ 'rounded-s': [i2] }],
          'rounded-e': [{ 'rounded-e': [i2] }],
          'rounded-t': [{ 'rounded-t': [i2] }],
          'rounded-r': [{ 'rounded-r': [i2] }],
          'rounded-b': [{ 'rounded-b': [i2] }],
          'rounded-l': [{ 'rounded-l': [i2] }],
          'rounded-ss': [{ 'rounded-ss': [i2] }],
          'rounded-se': [{ 'rounded-se': [i2] }],
          'rounded-ee': [{ 'rounded-ee': [i2] }],
          'rounded-es': [{ 'rounded-es': [i2] }],
          'rounded-tl': [{ 'rounded-tl': [i2] }],
          'rounded-tr': [{ 'rounded-tr': [i2] }],
          'rounded-br': [{ 'rounded-br': [i2] }],
          'rounded-bl': [{ 'rounded-bl': [i2] }],
          'border-w': [{ border: [s2] }],
          'border-w-x': [{ 'border-x': [s2] }],
          'border-w-y': [{ 'border-y': [s2] }],
          'border-w-s': [{ 'border-s': [s2] }],
          'border-w-e': [{ 'border-e': [s2] }],
          'border-w-t': [{ 'border-t': [s2] }],
          'border-w-r': [{ 'border-r': [s2] }],
          'border-w-b': [{ 'border-b': [s2] }],
          'border-w-l': [{ 'border-l': [s2] }],
          'border-opacity': [{ 'border-opacity': [S2] }],
          'border-style': [{ border: [].concat(K(), ['hidden']) }],
          'divide-x': [{ 'divide-x': [s2] }],
          'divide-x-reverse': ['divide-x-reverse'],
          'divide-y': [{ 'divide-y': [s2] }],
          'divide-y-reverse': ['divide-y-reverse'],
          'divide-opacity': [{ 'divide-opacity': [S2] }],
          'divide-style': [{ divide: K() }],
          'border-color': [{ border: [n2] }],
          'border-color-x': [{ 'border-x': [n2] }],
          'border-color-y': [{ 'border-y': [n2] }],
          'border-color-t': [{ 'border-t': [n2] }],
          'border-color-r': [{ 'border-r': [n2] }],
          'border-color-b': [{ 'border-b': [n2] }],
          'border-color-l': [{ 'border-l': [n2] }],
          'divide-color': [{ divide: [n2] }],
          'outline-style': [{ outline: [''].concat(K()) }],
          'outline-offset': [{ 'outline-offset': [z, b] }],
          'outline-w': [{ outline: [b] }],
          'outline-color': [{ outline: [r2] }],
          'ring-w': [{ ring: F() }],
          'ring-w-inset': ['ring-inset'],
          'ring-color': [{ ring: [r2] }],
          'ring-opacity': [{ 'ring-opacity': [S2] }],
          'ring-offset-w': [{ 'ring-offset': [b] }],
          'ring-offset-color': [{ 'ring-offset': [r2] }],
          shadow: [{ shadow: ['', 'inner', 'none', j, G] }],
          'shadow-color': [{ shadow: [C] }],
          opacity: [{ opacity: [S2] }],
          'mix-blend': [{ 'mix-blend': L() }],
          'bg-blend': [{ 'bg-blend': L() }],
          filter: [{ filter: ['', 'none'] }],
          blur: [{ blur: [o2] }],
          brightness: [{ brightness: [t2] }],
          contrast: [{ contrast: [c2] }],
          'drop-shadow': [{ 'drop-shadow': ['', 'none', j, z] }],
          grayscale: [{ grayscale: [d2] }],
          'hue-rotate': [{ 'hue-rotate': [u2] }],
          invert: [{ invert: [p2] }],
          saturate: [{ saturate: [W2] }],
          sepia: [{ sepia: [T] }],
          'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
          'backdrop-blur': [{ 'backdrop-blur': [o2] }],
          'backdrop-brightness': [{ 'backdrop-brightness': [t2] }],
          'backdrop-contrast': [{ 'backdrop-contrast': [c2] }],
          'backdrop-grayscale': [{ 'backdrop-grayscale': [d2] }],
          'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [u2] }],
          'backdrop-invert': [{ 'backdrop-invert': [p2] }],
          'backdrop-opacity': [{ 'backdrop-opacity': [S2] }],
          'backdrop-saturate': [{ 'backdrop-saturate': [W2] }],
          'backdrop-sepia': [{ 'backdrop-sepia': [T] }],
          'border-collapse': [{ border: ['collapse', 'separate'] }],
          'border-spacing': [{ 'border-spacing': [l2] }],
          'border-spacing-x': [{ 'border-spacing-x': [l2] }],
          'border-spacing-y': [{ 'border-spacing-y': [l2] }],
          'table-layout': [{ table: ['auto', 'fixed'] }],
          caption: [{ caption: ['top', 'bottom'] }],
          transition: [
            {
              transition: [
                'none',
                'all',
                '',
                'colors',
                'opacity',
                'shadow',
                'transform',
                z
              ]
            }
          ],
          duration: [{ duration: Y() }],
          ease: [{ ease: ['linear', 'in', 'out', 'in-out', z] }],
          delay: [{ delay: Y() }],
          animate: [
            { animate: ['none', 'spin', 'ping', 'pulse', 'bounce', z] }
          ],
          transform: [{ transform: ['', 'gpu', 'none'] }],
          scale: [{ scale: [O] }],
          'scale-x': [{ 'scale-x': [O] }],
          'scale-y': [{ 'scale-y': [O] }],
          rotate: [{ rotate: [k, z] }],
          'translate-x': [{ 'translate-x': [R] }],
          'translate-y': [{ 'translate-y': [R] }],
          'skew-x': [{ 'skew-x': [$] }],
          'skew-y': [{ 'skew-y': [$] }],
          'transform-origin': [
            {
              origin: [
                'center',
                'top',
                'top-right',
                'right',
                'bottom-right',
                'bottom',
                'bottom-left',
                'left',
                'top-left',
                z
              ]
            }
          ],
          accent: [{ accent: ['auto', r2] }],
          appearance: ['appearance-none'],
          cursor: [
            {
              cursor: [
                'auto',
                'default',
                'pointer',
                'wait',
                'text',
                'move',
                'help',
                'not-allowed',
                'none',
                'context-menu',
                'progress',
                'cell',
                'crosshair',
                'vertical-text',
                'alias',
                'copy',
                'no-drop',
                'grab',
                'grabbing',
                'all-scroll',
                'col-resize',
                'row-resize',
                'n-resize',
                'e-resize',
                's-resize',
                'w-resize',
                'ne-resize',
                'nw-resize',
                'se-resize',
                'sw-resize',
                'ew-resize',
                'ns-resize',
                'nesw-resize',
                'nwse-resize',
                'zoom-in',
                'zoom-out',
                z
              ]
            }
          ],
          'caret-color': [{ caret: [r2] }],
          'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
          resize: [{ resize: ['none', 'y', 'x', ''] }],
          'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
          'scroll-m': [{ 'scroll-m': D() }],
          'scroll-mx': [{ 'scroll-mx': D() }],
          'scroll-my': [{ 'scroll-my': D() }],
          'scroll-ms': [{ 'scroll-ms': D() }],
          'scroll-me': [{ 'scroll-me': D() }],
          'scroll-mt': [{ 'scroll-mt': D() }],
          'scroll-mr': [{ 'scroll-mr': D() }],
          'scroll-mb': [{ 'scroll-mb': D() }],
          'scroll-ml': [{ 'scroll-ml': D() }],
          'scroll-p': [{ 'scroll-p': D() }],
          'scroll-px': [{ 'scroll-px': D() }],
          'scroll-py': [{ 'scroll-py': D() }],
          'scroll-ps': [{ 'scroll-ps': D() }],
          'scroll-pe': [{ 'scroll-pe': D() }],
          'scroll-pt': [{ 'scroll-pt': D() }],
          'scroll-pr': [{ 'scroll-pr': D() }],
          'scroll-pb': [{ 'scroll-pb': D() }],
          'scroll-pl': [{ 'scroll-pl': D() }],
          'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
          'snap-stop': [{ snap: ['normal', 'always'] }],
          'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
          'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
          touch: [
            {
              touch: [
                'auto',
                'none',
                'pinch-zoom',
                'manipulation',
                { pan: ['x', 'left', 'right', 'y', 'up', 'down'] }
              ]
            }
          ],
          select: [{ select: ['none', 'text', 'all', 'auto'] }],
          'will-change': [
            { 'will-change': ['auto', 'scroll', 'contents', 'transform', z] }
          ],
          fill: [{ fill: [r2, 'none'] }],
          'stroke-w': [{ stroke: [b, x] }],
          stroke: [{ stroke: [r2, 'none'] }],
          sr: ['sr-only', 'not-sr-only']
        },
        conflictingClassGroups: {
          overflow: ['overflow-x', 'overflow-y'],
          overscroll: ['overscroll-x', 'overscroll-y'],
          inset: [
            'inset-x',
            'inset-y',
            'start',
            'end',
            'top',
            'right',
            'bottom',
            'left'
          ],
          'inset-x': ['right', 'left'],
          'inset-y': ['top', 'bottom'],
          flex: ['basis', 'grow', 'shrink'],
          gap: ['gap-x', 'gap-y'],
          p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
          px: ['pr', 'pl'],
          py: ['pt', 'pb'],
          m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
          mx: ['mr', 'ml'],
          my: ['mt', 'mb'],
          'font-size': ['leading'],
          'fvn-normal': [
            'fvn-ordinal',
            'fvn-slashed-zero',
            'fvn-figure',
            'fvn-spacing',
            'fvn-fraction'
          ],
          'fvn-ordinal': ['fvn-normal'],
          'fvn-slashed-zero': ['fvn-normal'],
          'fvn-figure': ['fvn-normal'],
          'fvn-spacing': ['fvn-normal'],
          'fvn-fraction': ['fvn-normal'],
          rounded: [
            'rounded-s',
            'rounded-e',
            'rounded-t',
            'rounded-r',
            'rounded-b',
            'rounded-l',
            'rounded-ss',
            'rounded-se',
            'rounded-ee',
            'rounded-es',
            'rounded-tl',
            'rounded-tr',
            'rounded-br',
            'rounded-bl'
          ],
          'rounded-s': ['rounded-ss', 'rounded-es'],
          'rounded-e': ['rounded-se', 'rounded-ee'],
          'rounded-t': ['rounded-tl', 'rounded-tr'],
          'rounded-r': ['rounded-tr', 'rounded-br'],
          'rounded-b': ['rounded-br', 'rounded-bl'],
          'rounded-l': ['rounded-tl', 'rounded-bl'],
          'border-spacing': ['border-spacing-x', 'border-spacing-y'],
          'border-w': [
            'border-w-s',
            'border-w-e',
            'border-w-t',
            'border-w-r',
            'border-w-b',
            'border-w-l'
          ],
          'border-w-x': ['border-w-r', 'border-w-l'],
          'border-w-y': ['border-w-t', 'border-w-b'],
          'border-color': [
            'border-color-t',
            'border-color-r',
            'border-color-b',
            'border-color-l'
          ],
          'border-color-x': ['border-color-r', 'border-color-l'],
          'border-color-y': ['border-color-t', 'border-color-b'],
          'scroll-m': [
            'scroll-mx',
            'scroll-my',
            'scroll-ms',
            'scroll-me',
            'scroll-mt',
            'scroll-mr',
            'scroll-mb',
            'scroll-ml'
          ],
          'scroll-mx': ['scroll-mr', 'scroll-ml'],
          'scroll-my': ['scroll-mt', 'scroll-mb'],
          'scroll-p': [
            'scroll-px',
            'scroll-py',
            'scroll-ps',
            'scroll-pe',
            'scroll-pt',
            'scroll-pr',
            'scroll-pb',
            'scroll-pl'
          ],
          'scroll-px': ['scroll-pr', 'scroll-pl'],
          'scroll-py': ['scroll-pt', 'scroll-pb']
        },
        conflictingClassGroupModifiers: { 'font-size': ['leading'] }
      };
    });
  };
  __namedExportsObject['__chunk_94705'] = (r, e, o) => {
    o.d(e, { W: () => t });
    function t() {
      for (var r2, e2, o2 = 0, t2 = ''; o2 < arguments.length; )
        (r2 = arguments[o2++]) &&
          (e2 = (function r3(e3) {
            var o3,
              t3,
              n = '';
            if ('string' == typeof e3 || 'number' == typeof e3) n += e3;
            else if ('object' == typeof e3) {
              if (Array.isArray(e3))
                for (o3 = 0; o3 < e3.length; o3++)
                  e3[o3] && (t3 = r3(e3[o3])) && (n && (n += ' '), (n += t3));
              else for (o3 in e3) e3[o3] && (n && (n += ' '), (n += o3));
            }
            return n;
          })(r2)) &&
          (t2 && (t2 += ' '), (t2 += e2));
      return t2;
    }
  };
  return __namedExportsObject;
};
export { __getNamedExports };
