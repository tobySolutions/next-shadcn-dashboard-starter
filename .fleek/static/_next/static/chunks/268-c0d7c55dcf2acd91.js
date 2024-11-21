(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [268],
  {
    10172: function (e, t) {
      'use strict';
      t.Z = function (e, t) {
        if (e && t) {
          var n = Array.isArray(t) ? t : t.split(','),
            r = e.name || '',
            o = (e.type || '').toLowerCase(),
            i = o.replace(/\/.*$/, '');
          return n.some(function (e) {
            var t = e.trim().toLowerCase();
            return '.' === t.charAt(0)
              ? r.toLowerCase().endsWith(t)
              : t.endsWith('/*')
              ? i === t.replace(/\/.*$/, '')
              : o === t;
          });
        }
        return !0;
      };
    },
    78030: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return u;
        }
      });
      var r = n(2265);
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        i = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.filter((e, t, n) => !!e && n.indexOf(e) === t).join(' ');
        };
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var a = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      };
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let c = (0, r.forwardRef)((e, t) => {
          let {
            color: n = 'currentColor',
            size: o = 24,
            strokeWidth: c = 2,
            absoluteStrokeWidth: u,
            className: l = '',
            children: s,
            iconNode: f,
            ...p
          } = e;
          return (0, r.createElement)(
            'svg',
            {
              ref: t,
              ...a,
              width: o,
              height: o,
              stroke: n,
              strokeWidth: u ? (24 * Number(c)) / Number(o) : c,
              className: i('lucide', l),
              ...p
            },
            [
              ...f.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(s) ? s : [s])
            ]
          );
        }),
        u = (e, t) => {
          let n = (0, r.forwardRef)((n, a) => {
            let { className: u, ...l } = n;
            return (0, r.createElement)(c, {
              ref: a,
              iconNode: t,
              className: i('lucide-'.concat(o(e)), u),
              ...l
            });
          });
          return (n.displayName = ''.concat(e)), n;
        };
    },
    66469: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(78030).Z)('Cross', [
        [
          'path',
          {
            d: 'M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z',
            key: '1t5g7j'
          }
        ]
      ]);
    },
    58184: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        }
      });
      /**
       * @license lucide-react v0.447.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(78030).Z)('Upload', [
        [
          'path',
          { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }
        ],
        ['polyline', { points: '17 8 12 3 7 8', key: 't8dd8p' }],
        ['line', { x1: '12', x2: '12', y1: '3', y2: '15', key: 'widbto' }]
      ]);
    },
    60291: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'RouterContext', {
          enumerable: !0,
          get: function () {
            return r;
          }
        });
      let r = n(99920)._(n(2265)).default.createContext(null);
    },
    99949: function (e, t, n) {
      'use strict';
      var r = n(88877);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, a) {
            if (a !== r) {
              var c = Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((c.name = 'Invariant Violation'), c);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o
          };
          return (n.PropTypes = n), n;
        });
    },
    41448: function (e, t, n) {
      e.exports = n(99949)();
    },
    88877: function (e) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    38746: function (e, t, n) {
      'use strict';
      n.d(t, {
        ZP: function () {
          return Y;
        }
      });
      var r = n(2265),
        o = n(41448),
        i = n.n(o),
        a = n(11735),
        c = new Map([
          ['aac', 'audio/aac'],
          ['abw', 'application/x-abiword'],
          ['arc', 'application/x-freearc'],
          ['avif', 'image/avif'],
          ['avi', 'video/x-msvideo'],
          ['azw', 'application/vnd.amazon.ebook'],
          ['bin', 'application/octet-stream'],
          ['bmp', 'image/bmp'],
          ['bz', 'application/x-bzip'],
          ['bz2', 'application/x-bzip2'],
          ['cda', 'application/x-cdf'],
          ['csh', 'application/x-csh'],
          ['css', 'text/css'],
          ['csv', 'text/csv'],
          ['doc', 'application/msword'],
          [
            'docx',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          ],
          ['eot', 'application/vnd.ms-fontobject'],
          ['epub', 'application/epub+zip'],
          ['gz', 'application/gzip'],
          ['gif', 'image/gif'],
          ['heic', 'image/heic'],
          ['heif', 'image/heif'],
          ['htm', 'text/html'],
          ['html', 'text/html'],
          ['ico', 'image/vnd.microsoft.icon'],
          ['ics', 'text/calendar'],
          ['jar', 'application/java-archive'],
          ['jpeg', 'image/jpeg'],
          ['jpg', 'image/jpeg'],
          ['js', 'text/javascript'],
          ['json', 'application/json'],
          ['jsonld', 'application/ld+json'],
          ['mid', 'audio/midi'],
          ['midi', 'audio/midi'],
          ['mjs', 'text/javascript'],
          ['mp3', 'audio/mpeg'],
          ['mp4', 'video/mp4'],
          ['mpeg', 'video/mpeg'],
          ['mpkg', 'application/vnd.apple.installer+xml'],
          ['odp', 'application/vnd.oasis.opendocument.presentation'],
          ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],
          ['odt', 'application/vnd.oasis.opendocument.text'],
          ['oga', 'audio/ogg'],
          ['ogv', 'video/ogg'],
          ['ogx', 'application/ogg'],
          ['opus', 'audio/opus'],
          ['otf', 'font/otf'],
          ['png', 'image/png'],
          ['pdf', 'application/pdf'],
          ['php', 'application/x-httpd-php'],
          ['ppt', 'application/vnd.ms-powerpoint'],
          [
            'pptx',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation'
          ],
          ['rar', 'application/vnd.rar'],
          ['rtf', 'application/rtf'],
          ['sh', 'application/x-sh'],
          ['svg', 'image/svg+xml'],
          ['swf', 'application/x-shockwave-flash'],
          ['tar', 'application/x-tar'],
          ['tif', 'image/tiff'],
          ['tiff', 'image/tiff'],
          ['ts', 'video/mp2t'],
          ['ttf', 'font/ttf'],
          ['txt', 'text/plain'],
          ['vsd', 'application/vnd.visio'],
          ['wav', 'audio/wav'],
          ['weba', 'audio/webm'],
          ['webm', 'video/webm'],
          ['webp', 'image/webp'],
          ['woff', 'font/woff'],
          ['woff2', 'font/woff2'],
          ['xhtml', 'application/xhtml+xml'],
          ['xls', 'application/vnd.ms-excel'],
          [
            'xlsx',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          ],
          ['xml', 'application/xml'],
          ['xul', 'application/vnd.mozilla.xul+xml'],
          ['zip', 'application/zip'],
          ['7z', 'application/x-7z-compressed'],
          ['mkv', 'video/x-matroska'],
          ['mov', 'video/quicktime'],
          ['msg', 'application/vnd.ms-outlook']
        ]);
      function u(e, t) {
        var n = (function (e) {
          var t = e.name;
          if (t && -1 !== t.lastIndexOf('.') && !e.type) {
            var n = t.split('.').pop().toLowerCase(),
              r = c.get(n);
            r &&
              Object.defineProperty(e, 'type', {
                value: r,
                writable: !1,
                configurable: !1,
                enumerable: !0
              });
          }
          return e;
        })(e);
        if ('string' != typeof n.path) {
          var r = e.webkitRelativePath;
          Object.defineProperty(n, 'path', {
            value:
              'string' == typeof t
                ? t
                : 'string' == typeof r && r.length > 0
                ? r
                : e.name,
            writable: !1,
            configurable: !1,
            enumerable: !0
          });
        }
        return n;
      }
      var l = ['.DS_Store', 'Thumbs.db'];
      function s(e) {
        return 'object' == typeof e && null !== e;
      }
      function f(e) {
        return e.filter(function (e) {
          return -1 === l.indexOf(e.name);
        });
      }
      function p(e) {
        if (null === e) return [];
        for (var t = [], n = 0; n < e.length; n++) {
          var r = e[n];
          t.push(r);
        }
        return t;
      }
      function d(e) {
        if ('function' != typeof e.webkitGetAsEntry) return m(e);
        var t = e.webkitGetAsEntry();
        return t && t.isDirectory ? g(t) : m(e);
      }
      function m(e) {
        var t = e.getAsFile();
        return t
          ? Promise.resolve(u(t))
          : Promise.reject(''.concat(e, ' is not a File'));
      }
      function v(e) {
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (t) {
            return [
              2,
              e.isDirectory
                ? g(e)
                : (function (e) {
                    return (0, a.mG)(this, void 0, void 0, function () {
                      return (0, a.Jh)(this, function (t) {
                        return [
                          2,
                          new Promise(function (t, n) {
                            e.file(
                              function (n) {
                                t(u(n, e.fullPath));
                              },
                              function (e) {
                                n(e);
                              }
                            );
                          })
                        ];
                      });
                    });
                  })(e)
            ];
          });
        });
      }
      function g(e) {
        var t = e.createReader();
        return new Promise(function (e, n) {
          var r = [];
          !(function o() {
            var i = this;
            t.readEntries(
              function (t) {
                return (0, a.mG)(i, void 0, void 0, function () {
                  var i;
                  return (0, a.Jh)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        if (t.length) return [3, 5];
                        a.label = 1;
                      case 1:
                        return a.trys.push([1, 3, , 4]), [4, Promise.all(r)];
                      case 2:
                        return e(a.sent()), [3, 4];
                      case 3:
                        return n(a.sent()), [3, 4];
                      case 4:
                        return [3, 6];
                      case 5:
                        (i = Promise.all(t.map(v))),
                          r.push(i),
                          o(),
                          (a.label = 6);
                      case 6:
                        return [2];
                    }
                  });
                });
              },
              function (e) {
                n(e);
              }
            );
          })();
        });
      }
      var y = n(10172);
      function b(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return j(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          O(e) ||
          (function () {
            throw TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                x(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function x(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function D(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              o =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
            if (null != o) {
              var i = [],
                a = !0,
                c = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                (c = !0), (r = e);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (c) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          O(e, t) ||
          (function () {
            throw TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function O(e, t) {
        if (e) {
          if ('string' == typeof e) return j(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ('Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n)
          )
            return Array.from(e);
          if (
            'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return j(e, t);
        }
      }
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var A = function (e) {
          var t = Array.isArray(
            (e = Array.isArray(e) && 1 === e.length ? e[0] : e)
          )
            ? 'one of '.concat(e.join(', '))
            : e;
          return {
            code: 'file-invalid-type',
            message: 'File type must be '.concat(t)
          };
        },
        k = function (e) {
          return {
            code: 'file-too-large',
            message: 'File is larger than '
              .concat(e, ' ')
              .concat(1 === e ? 'byte' : 'bytes')
          };
        },
        E = function (e) {
          return {
            code: 'file-too-small',
            message: 'File is smaller than '
              .concat(e, ' ')
              .concat(1 === e ? 'byte' : 'bytes')
          };
        },
        P = { code: 'too-many-files', message: 'Too many files' };
      function C(e, t) {
        var n = 'application/x-moz-file' === e.type || (0, y.Z)(e, t);
        return [n, n ? null : A(t)];
      }
      function F(e, t, n) {
        if (S(e.size)) {
          if (S(t) && S(n)) {
            if (e.size > n) return [!1, k(n)];
            if (e.size < t) return [!1, E(t)];
          } else if (S(t) && e.size < t) return [!1, E(t)];
          else if (S(n) && e.size > n) return [!1, k(n)];
        }
        return [!0, null];
      }
      function S(e) {
        return null != e;
      }
      function R(e) {
        return 'function' == typeof e.isPropagationStopped
          ? e.isPropagationStopped()
          : void 0 !== e.cancelBubble && e.cancelBubble;
      }
      function z(e) {
        return e.dataTransfer
          ? Array.prototype.some.call(e.dataTransfer.types, function (e) {
              return 'Files' === e || 'application/x-moz-file' === e;
            })
          : !!e.target && !!e.target.files;
      }
      function T(e) {
        e.preventDefault();
      }
      function _() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          for (
            var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          return t.some(function (t) {
            return !R(e) && t && t.apply(void 0, [e].concat(r)), R(e);
          });
        };
      }
      function I(e) {
        return (
          'audio/*' === e ||
          'video/*' === e ||
          'image/*' === e ||
          'text/*' === e ||
          /\w+\/[-+.\w]+/g.test(e)
        );
      }
      function M(e) {
        return /^.*\.[\w]+$/.test(e);
      }
      var N = ['children'],
        L = ['open'],
        $ = [
          'refKey',
          'role',
          'onKeyDown',
          'onFocus',
          'onBlur',
          'onClick',
          'onDragEnter',
          'onDragOver',
          'onDragLeave',
          'onDrop'
        ],
        B = ['refKey', 'onChange', 'onClick'];
      function K(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              o =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
            if (null != o) {
              var i = [],
                a = !0,
                c = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                (c = !0), (r = e);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (c) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          W(e, t) ||
          (function () {
            throw TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function W(e, t) {
        if (e) {
          if ('string' == typeof e) return Z(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ('Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n)
          )
            return Array.from(e);
          if (
            'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return Z(e, t);
        }
      }
      function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function G(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                H(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function H(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function J(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]);
        }
        return o;
      }
      var q = (0, r.forwardRef)(function (e, t) {
        var n = e.children,
          o = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = U(U({}, V), e),
              n = t.accept,
              o = t.disabled,
              i = t.getFilesFromEvent,
              a = t.maxSize,
              c = t.minSize,
              u = t.multiple,
              l = t.maxFiles,
              s = t.onDragEnter,
              f = t.onDragLeave,
              p = t.onDragOver,
              d = t.onDrop,
              m = t.onDropAccepted,
              v = t.onDropRejected,
              g = t.onFileDialogCancel,
              y = t.onFileDialogOpen,
              h = t.useFsAccessApi,
              O = t.autoFocus,
              j = t.preventDropOnDocument,
              A = t.noClick,
              k = t.noKeyboard,
              E = t.noDrag,
              N = t.noDragEventsBubbling,
              L = t.onError,
              G = t.validator,
              q = (0, r.useMemo)(
                function () {
                  return (function (e) {
                    if (S(e))
                      return Object.entries(e)
                        .reduce(function (e, t) {
                          var n = D(t, 2),
                            r = n[0],
                            o = n[1];
                          return [].concat(b(e), [r], b(o));
                        }, [])
                        .filter(function (e) {
                          return I(e) || M(e);
                        })
                        .join(',');
                  })(n);
                },
                [n]
              ),
              Y = (0, r.useMemo)(
                function () {
                  return S(n)
                    ? [
                        {
                          description: 'Files',
                          accept: Object.entries(n)
                            .filter(function (e) {
                              var t = D(e, 2),
                                n = t[0],
                                r = t[1],
                                o = !0;
                              return (
                                I(n) ||
                                  (console.warn(
                                    'Skipped "'.concat(
                                      n,
                                      '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'
                                    )
                                  ),
                                  (o = !1)),
                                (Array.isArray(r) && r.every(M)) ||
                                  (console.warn(
                                    'Skipped "'.concat(
                                      n,
                                      '" because an invalid file extension was provided.'
                                    )
                                  ),
                                  (o = !1)),
                                o
                              );
                            })
                            .reduce(function (e, t) {
                              var n = D(t, 2),
                                r = n[0],
                                o = n[1];
                              return w(w({}, e), {}, x({}, r, o));
                            }, {})
                        }
                      ]
                    : n;
                },
                [n]
              ),
              et = (0, r.useMemo)(
                function () {
                  return 'function' == typeof y ? y : ee;
                },
                [y]
              ),
              en = (0, r.useMemo)(
                function () {
                  return 'function' == typeof g ? g : ee;
                },
                [g]
              ),
              er = (0, r.useRef)(null),
              eo = (0, r.useRef)(null),
              ei = K((0, r.useReducer)(X, Q), 2),
              ea = ei[0],
              ec = ei[1],
              eu = ea.isFocused,
              el = ea.isFileDialogActive,
              es = (0, r.useRef)(
                'undefined' != typeof window &&
                  window.isSecureContext &&
                  h &&
                  'showOpenFilePicker' in window
              ),
              ef = function () {
                !es.current &&
                  el &&
                  setTimeout(function () {
                    eo.current &&
                      !eo.current.files.length &&
                      (ec({ type: 'closeDialog' }), en());
                  }, 300);
              };
            (0, r.useEffect)(
              function () {
                return (
                  window.addEventListener('focus', ef, !1),
                  function () {
                    window.removeEventListener('focus', ef, !1);
                  }
                );
              },
              [eo, el, en, es]
            );
            var ep = (0, r.useRef)([]),
              ed = function (e) {
                (er.current && er.current.contains(e.target)) ||
                  (e.preventDefault(), (ep.current = []));
              };
            (0, r.useEffect)(
              function () {
                return (
                  j &&
                    (document.addEventListener('dragover', T, !1),
                    document.addEventListener('drop', ed, !1)),
                  function () {
                    j &&
                      (document.removeEventListener('dragover', T),
                      document.removeEventListener('drop', ed));
                  }
                );
              },
              [er, j]
            ),
              (0, r.useEffect)(
                function () {
                  return (
                    !o && O && er.current && er.current.focus(), function () {}
                  );
                },
                [er, O, o]
              );
            var em = (0, r.useCallback)(
                function (e) {
                  L ? L(e) : console.error(e);
                },
                [L]
              ),
              ev = (0, r.useCallback)(
                function (e) {
                  var t;
                  e.preventDefault(),
                    e.persist(),
                    eP(e),
                    (ep.current = [].concat(
                      (function (e) {
                        if (Array.isArray(e)) return Z(e);
                      })((t = ep.current)) ||
                        (function (e) {
                          if (
                            ('undefined' != typeof Symbol &&
                              null != e[Symbol.iterator]) ||
                            null != e['@@iterator']
                          )
                            return Array.from(e);
                        })(t) ||
                        W(t) ||
                        (function () {
                          throw TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                          );
                        })(),
                      [e.target]
                    )),
                    z(e) &&
                      Promise.resolve(i(e))
                        .then(function (t) {
                          if (!R(e) || N) {
                            var n,
                              r,
                              o,
                              i,
                              f,
                              p,
                              d,
                              m,
                              v = t.length,
                              g =
                                v > 0 &&
                                ((r = (n = {
                                  files: t,
                                  accept: q,
                                  minSize: c,
                                  maxSize: a,
                                  multiple: u,
                                  maxFiles: l,
                                  validator: G
                                }).files),
                                (o = n.accept),
                                (i = n.minSize),
                                (f = n.maxSize),
                                (p = n.multiple),
                                (d = n.maxFiles),
                                (m = n.validator),
                                (!!p || !(r.length > 1)) &&
                                  (!p || !(d >= 1) || !(r.length > d)) &&
                                  r.every(function (e) {
                                    var t = D(C(e, o), 1)[0],
                                      n = D(F(e, i, f), 1)[0],
                                      r = m ? m(e) : null;
                                    return t && n && !r;
                                  }));
                            ec({
                              isDragAccept: g,
                              isDragReject: v > 0 && !g,
                              isDragActive: !0,
                              type: 'setDraggedFiles'
                            }),
                              s && s(e);
                          }
                        })
                        .catch(function (e) {
                          return em(e);
                        });
                },
                [i, s, em, N, q, c, a, u, l, G]
              ),
              eg = (0, r.useCallback)(
                function (e) {
                  e.preventDefault(), e.persist(), eP(e);
                  var t = z(e);
                  if (t && e.dataTransfer)
                    try {
                      e.dataTransfer.dropEffect = 'copy';
                    } catch (e) {}
                  return t && p && p(e), !1;
                },
                [p, N]
              ),
              ey = (0, r.useCallback)(
                function (e) {
                  e.preventDefault(), e.persist(), eP(e);
                  var t = ep.current.filter(function (e) {
                      return er.current && er.current.contains(e);
                    }),
                    n = t.indexOf(e.target);
                  -1 !== n && t.splice(n, 1),
                    (ep.current = t),
                    !(t.length > 0) &&
                      (ec({
                        type: 'setDraggedFiles',
                        isDragActive: !1,
                        isDragAccept: !1,
                        isDragReject: !1
                      }),
                      z(e) && f && f(e));
                },
                [er, f, N]
              ),
              eb = (0, r.useCallback)(
                function (e, t) {
                  var n = [],
                    r = [];
                  e.forEach(function (e) {
                    var t = K(C(e, q), 2),
                      o = t[0],
                      i = t[1],
                      u = K(F(e, c, a), 2),
                      l = u[0],
                      s = u[1],
                      f = G ? G(e) : null;
                    if (o && l && !f) n.push(e);
                    else {
                      var p = [i, s];
                      f && (p = p.concat(f)),
                        r.push({
                          file: e,
                          errors: p.filter(function (e) {
                            return e;
                          })
                        });
                    }
                  }),
                    ((!u && n.length > 1) || (u && l >= 1 && n.length > l)) &&
                      (n.forEach(function (e) {
                        r.push({ file: e, errors: [P] });
                      }),
                      n.splice(0)),
                    ec({
                      acceptedFiles: n,
                      fileRejections: r,
                      type: 'setFiles'
                    }),
                    d && d(n, r, t),
                    r.length > 0 && v && v(r, t),
                    n.length > 0 && m && m(n, t);
                },
                [ec, u, q, c, a, l, d, m, v, G]
              ),
              eh = (0, r.useCallback)(
                function (e) {
                  e.preventDefault(),
                    e.persist(),
                    eP(e),
                    (ep.current = []),
                    z(e) &&
                      Promise.resolve(i(e))
                        .then(function (t) {
                          (!R(e) || N) && eb(t, e);
                        })
                        .catch(function (e) {
                          return em(e);
                        }),
                    ec({ type: 'reset' });
                },
                [i, eb, em, N]
              ),
              ew = (0, r.useCallback)(
                function () {
                  if (es.current) {
                    ec({ type: 'openDialog' }),
                      et(),
                      window
                        .showOpenFilePicker({ multiple: u, types: Y })
                        .then(function (e) {
                          return i(e);
                        })
                        .then(function (e) {
                          eb(e, null), ec({ type: 'closeDialog' });
                        })
                        .catch(function (e) {
                          e instanceof DOMException &&
                          ('AbortError' === e.name || e.code === e.ABORT_ERR)
                            ? (en(e), ec({ type: 'closeDialog' }))
                            : e instanceof DOMException &&
                              ('SecurityError' === e.name ||
                                e.code === e.SECURITY_ERR)
                            ? ((es.current = !1),
                              eo.current
                                ? ((eo.current.value = null),
                                  eo.current.click())
                                : em(
                                    Error(
                                      'Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.'
                                    )
                                  ))
                            : em(e);
                        });
                    return;
                  }
                  eo.current &&
                    (ec({ type: 'openDialog' }),
                    et(),
                    (eo.current.value = null),
                    eo.current.click());
                },
                [ec, et, en, h, eb, em, Y, u]
              ),
              ex = (0, r.useCallback)(
                function (e) {
                  er.current &&
                    er.current.isEqualNode(e.target) &&
                    (' ' === e.key ||
                      'Enter' === e.key ||
                      32 === e.keyCode ||
                      13 === e.keyCode) &&
                    (e.preventDefault(), ew());
                },
                [er, ew]
              ),
              eD = (0, r.useCallback)(function () {
                ec({ type: 'focus' });
              }, []),
              eO = (0, r.useCallback)(function () {
                ec({ type: 'blur' });
              }, []),
              ej = (0, r.useCallback)(
                function () {
                  A ||
                    ((function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : window.navigator.userAgent;
                      return (
                        -1 !== e.indexOf('MSIE') ||
                        -1 !== e.indexOf('Trident/') ||
                        -1 !== e.indexOf('Edge/')
                      );
                    })()
                      ? setTimeout(ew, 0)
                      : ew());
                },
                [A, ew]
              ),
              eA = function (e) {
                return o ? null : e;
              },
              ek = function (e) {
                return k ? null : eA(e);
              },
              eE = function (e) {
                return E ? null : eA(e);
              },
              eP = function (e) {
                N && e.stopPropagation();
              },
              eC = (0, r.useMemo)(
                function () {
                  return function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.refKey,
                      n = e.role,
                      r = e.onKeyDown,
                      i = e.onFocus,
                      a = e.onBlur,
                      c = e.onClick,
                      u = e.onDragEnter,
                      l = e.onDragOver,
                      s = e.onDragLeave,
                      f = e.onDrop,
                      p = J(e, $);
                    return U(
                      U(
                        H(
                          {
                            onKeyDown: ek(_(r, ex)),
                            onFocus: ek(_(i, eD)),
                            onBlur: ek(_(a, eO)),
                            onClick: eA(_(c, ej)),
                            onDragEnter: eE(_(u, ev)),
                            onDragOver: eE(_(l, eg)),
                            onDragLeave: eE(_(s, ey)),
                            onDrop: eE(_(f, eh)),
                            role:
                              'string' == typeof n && '' !== n
                                ? n
                                : 'presentation'
                          },
                          void 0 === t ? 'ref' : t,
                          er
                        ),
                        o || k ? {} : { tabIndex: 0 }
                      ),
                      p
                    );
                  };
                },
                [er, ex, eD, eO, ej, ev, eg, ey, eh, k, E, o]
              ),
              eF = (0, r.useCallback)(function (e) {
                e.stopPropagation();
              }, []),
              eS = (0, r.useMemo)(
                function () {
                  return function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.refKey,
                      n = e.onChange,
                      r = e.onClick,
                      o = J(e, B);
                    return U(
                      U(
                        {},
                        H(
                          {
                            accept: q,
                            multiple: u,
                            type: 'file',
                            style: { display: 'none' },
                            onChange: eA(_(n, eh)),
                            onClick: eA(_(r, eF)),
                            tabIndex: -1
                          },
                          void 0 === t ? 'ref' : t,
                          eo
                        )
                      ),
                      o
                    );
                  };
                },
                [eo, n, u, eh, o]
              );
            return U(
              U({}, ea),
              {},
              {
                isFocused: eu && !o,
                getRootProps: eC,
                getInputProps: eS,
                rootRef: er,
                inputRef: eo,
                open: eA(ew)
              }
            );
          })(J(e, N)),
          i = o.open,
          a = J(o, L);
        return (
          (0, r.useImperativeHandle)(
            t,
            function () {
              return { open: i };
            },
            [i]
          ),
          r.createElement(r.Fragment, null, n(U(U({}, a), {}, { open: i })))
        );
      });
      q.displayName = 'Dropzone';
      var V = {
        disabled: !1,
        getFilesFromEvent: function (e) {
          return (0, a.mG)(this, void 0, void 0, function () {
            return (0, a.Jh)(this, function (t) {
              return s(e) && s(e.dataTransfer)
                ? [
                    2,
                    (function (e, t) {
                      return (0, a.mG)(this, void 0, void 0, function () {
                        var n;
                        return (0, a.Jh)(this, function (r) {
                          switch (r.label) {
                            case 0:
                              if (!e.items) return [3, 2];
                              if (
                                ((n = p(e.items).filter(function (e) {
                                  return 'file' === e.kind;
                                })),
                                'drop' !== t)
                              )
                                return [2, n];
                              return [4, Promise.all(n.map(d))];
                            case 1:
                              return [
                                2,
                                f(
                                  (function e(t) {
                                    return t.reduce(function (t, n) {
                                      return (0, a.ev)(
                                        (0, a.ev)([], (0, a.CR)(t), !1),
                                        (0, a.CR)(
                                          Array.isArray(n) ? e(n) : [n]
                                        ),
                                        !1
                                      );
                                    }, []);
                                  })(r.sent())
                                )
                              ];
                            case 2:
                              return [
                                2,
                                f(
                                  p(e.files).map(function (e) {
                                    return u(e);
                                  })
                                )
                              ];
                          }
                        });
                      });
                    })(e.dataTransfer, e.type)
                  ]
                : s(e) && s(e.target)
                ? [
                    2,
                    p(e.target.files).map(function (e) {
                      return u(e);
                    })
                  ]
                : Array.isArray(e) &&
                  e.every(function (e) {
                    return 'getFile' in e && 'function' == typeof e.getFile;
                  })
                ? [
                    2,
                    (function (e) {
                      return (0, a.mG)(this, void 0, void 0, function () {
                        return (0, a.Jh)(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [
                                4,
                                Promise.all(
                                  e.map(function (e) {
                                    return e.getFile();
                                  })
                                )
                              ];
                            case 1:
                              return [
                                2,
                                t.sent().map(function (e) {
                                  return u(e);
                                })
                              ];
                          }
                        });
                      });
                    })(e)
                  ]
                : [2, []];
            });
          });
        },
        maxSize: 1 / 0,
        minSize: 0,
        multiple: !0,
        maxFiles: 0,
        preventDropOnDocument: !0,
        noClick: !1,
        noKeyboard: !1,
        noDrag: !1,
        noDragEventsBubbling: !1,
        validator: null,
        useFsAccessApi: !0,
        autoFocus: !1
      };
      (q.defaultProps = V),
        (q.propTypes = {
          children: i().func,
          accept: i().objectOf(i().arrayOf(i().string)),
          multiple: i().bool,
          preventDropOnDocument: i().bool,
          noClick: i().bool,
          noKeyboard: i().bool,
          noDrag: i().bool,
          noDragEventsBubbling: i().bool,
          minSize: i().number,
          maxSize: i().number,
          maxFiles: i().number,
          disabled: i().bool,
          getFilesFromEvent: i().func,
          onFileDialogCancel: i().func,
          onFileDialogOpen: i().func,
          useFsAccessApi: i().bool,
          autoFocus: i().bool,
          onDragEnter: i().func,
          onDragLeave: i().func,
          onDragOver: i().func,
          onDrop: i().func,
          onDropAccepted: i().func,
          onDropRejected: i().func,
          onError: i().func,
          validator: i().func
        });
      var Y = q,
        Q = {
          isFocused: !1,
          isFileDialogActive: !1,
          isDragActive: !1,
          isDragAccept: !1,
          isDragReject: !1,
          acceptedFiles: [],
          fileRejections: []
        };
      function X(e, t) {
        switch (t.type) {
          case 'focus':
            return U(U({}, e), {}, { isFocused: !0 });
          case 'blur':
            return U(U({}, e), {}, { isFocused: !1 });
          case 'openDialog':
            return U(U({}, Q), {}, { isFileDialogActive: !0 });
          case 'closeDialog':
            return U(U({}, e), {}, { isFileDialogActive: !1 });
          case 'setDraggedFiles':
            return U(
              U({}, e),
              {},
              {
                isDragActive: t.isDragActive,
                isDragAccept: t.isDragAccept,
                isDragReject: t.isDragReject
              }
            );
          case 'setFiles':
            return U(
              U({}, e),
              {},
              {
                acceptedFiles: t.acceptedFiles,
                fileRejections: t.fileRejections
              }
            );
          case 'reset':
            return U({}, Q);
          default:
            return e;
        }
      }
      function ee() {}
    },
    13993: function (e, t, n) {
      'use strict';
      n.d(t, {
        z$: function () {
          return x;
        },
        fC: function () {
          return w;
        }
      });
      var r = n(2265),
        o = n(57437);
      n(54887);
      var i = n(63355),
        a = [
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
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...a } = e,
              c = r ? i.g7 : t;
            return (
              'undefined' != typeof window &&
                (window[Symbol.for('radix-ui')] = !0),
              (0, o.jsx)(c, { ...a, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        c = 'Progress',
        [u, l] = (function (e, t = []) {
          let n = [],
            i = () => {
              let t = n.map((e) => r.createContext(e));
              return function (n) {
                let o = n?.[e] || t;
                return r.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                  [n, o]
                );
              };
            };
          return (
            (i.scopeName = e),
            [
              function (t, i) {
                let a = r.createContext(i),
                  c = n.length;
                function u(t) {
                  let { scope: n, children: i, ...u } = t,
                    l = n?.[e][c] || a,
                    s = r.useMemo(() => u, Object.values(u));
                  return (0, o.jsx)(l.Provider, { value: s, children: i });
                }
                return (
                  (n = [...n, i]),
                  (u.displayName = t + 'Provider'),
                  [
                    u,
                    function (n, o) {
                      let u = o?.[e][c] || a,
                        l = r.useContext(u);
                      if (l) return l;
                      if (void 0 !== i) return i;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    }
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName
                  }));
                  return function (e) {
                    let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return r.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: o }),
                      [o]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(i, ...t)
            ]
          );
        })(c),
        [s, f] = u(c),
        p = r.forwardRef((e, t) => {
          var n, r, i, c;
          let {
            __scopeProgress: u,
            value: l = null,
            max: f,
            getValueLabel: p = v,
            ...d
          } = e;
          (f || 0 === f) &&
            !b(f) &&
            console.error(
              ((n = ''.concat(f)),
              (r = 'Progress'),
              'Invalid prop `max` of value `'
                .concat(n, '` supplied to `')
                .concat(
                  r,
                  '`. Only numbers greater than 0 are valid max values. Defaulting to `'
                )
                .concat(100, '`.'))
            );
          let m = b(f) ? f : 100;
          null === l ||
            h(l, m) ||
            console.error(
              ((i = ''.concat(l)),
              (c = 'Progress'),
              'Invalid prop `value` of value `'
                .concat(i, '` supplied to `')
                .concat(
                  c,
                  '`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or '
                )
                .concat(
                  100,
                  ' if no `max` prop is set)\n  - `null` or `undefined` if the progress is indeterminate.\n\nDefaulting to `null`.'
                ))
            );
          let w = h(l, m) ? l : null,
            x = y(w) ? p(w, m) : void 0;
          return (0, o.jsx)(s, {
            scope: u,
            value: w,
            max: m,
            children: (0, o.jsx)(a.div, {
              'aria-valuemax': m,
              'aria-valuemin': 0,
              'aria-valuenow': y(w) ? w : void 0,
              'aria-valuetext': x,
              role: 'progressbar',
              'data-state': g(w, m),
              'data-value': null != w ? w : void 0,
              'data-max': m,
              ...d,
              ref: t
            })
          });
        });
      p.displayName = c;
      var d = 'ProgressIndicator',
        m = r.forwardRef((e, t) => {
          var n;
          let { __scopeProgress: r, ...i } = e,
            c = f(d, r);
          return (0, o.jsx)(a.div, {
            'data-state': g(c.value, c.max),
            'data-value': null !== (n = c.value) && void 0 !== n ? n : void 0,
            'data-max': c.max,
            ...i,
            ref: t
          });
        });
      function v(e, t) {
        return ''.concat(Math.round((e / t) * 100), '%');
      }
      function g(e, t) {
        return null == e ? 'indeterminate' : e === t ? 'complete' : 'loading';
      }
      function y(e) {
        return 'number' == typeof e;
      }
      function b(e) {
        return y(e) && !isNaN(e) && e > 0;
      }
      function h(e, t) {
        return y(e) && !isNaN(e) && e <= t && e >= 0;
      }
      m.displayName = d;
      var w = p,
        x = m;
    }
  }
]);
