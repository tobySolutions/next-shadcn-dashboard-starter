// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_25673'] = (e, t, r) => {
    'use strict';
    r.d(t, { I8: () => o, handlers: () => i });
    var s = r(15446),
      a = r(53488);
    let n = {
        providers: [
          (0, r(64883).Z)({
            clientId: 'Ov23li8g1CaGdKL4pnhQ',
            clientSecret: '4748f490e249eb315b8d8dff5ebebdaeb35efe8c'
          }),
          (0, a.Z)({
            credentials: {
              email: { type: 'email' },
              password: { type: 'password' }
            },
            authorize: async (e2, t2) => ({
              id: '1',
              name: 'John',
              email: e2?.email
            })
          })
        ],
        pages: { signIn: '/' }
      },
      { auth: o, handlers: i, signOut: c, signIn: d } = (0, s.ZP)(n);
  };
  __namedExportsObject['__chunk_15446'] = (e, t, r) => {
    'use strict';
    let n, i;
    r.d(t, { ZP: () => iX });
    var o = function (e10, t10, r10, n10, i2) {
        if ('m' === n10) throw TypeError('Private method is not writable');
        if ('a' === n10 && !i2)
          throw TypeError('Private accessor was defined without a setter');
        if ('function' == typeof t10 ? e10 !== t10 || !i2 : !t10.has(e10))
          throw TypeError(
            'Cannot write private member to an object whose class did not declare it'
          );
        return (
          'a' === n10
            ? i2.call(e10, r10)
            : i2
            ? (i2.value = r10)
            : t10.set(e10, r10),
          r10
        );
      },
      a = function (e10, t10, r10, n10) {
        if ('a' === r10 && !n10)
          throw TypeError('Private accessor was defined without a getter');
        if ('function' == typeof t10 ? e10 !== t10 || !n10 : !t10.has(e10))
          throw TypeError(
            'Cannot read private member from an object whose class did not declare it'
          );
        return 'm' === r10
          ? n10
          : 'a' === r10
          ? n10.call(e10)
          : n10
          ? n10.value
          : t10.get(e10);
      };
    function s(e10) {
      let t10 = e10 ? '__Secure-' : '';
      return {
        sessionToken: {
          name: `${t10}authjs.session-token`,
          options: { httpOnly: true, sameSite: 'lax', path: '/', secure: e10 }
        },
        callbackUrl: {
          name: `${t10}authjs.callback-url`,
          options: { httpOnly: true, sameSite: 'lax', path: '/', secure: e10 }
        },
        csrfToken: {
          name: `${e10 ? '__Host-' : ''}authjs.csrf-token`,
          options: { httpOnly: true, sameSite: 'lax', path: '/', secure: e10 }
        },
        pkceCodeVerifier: {
          name: `${t10}authjs.pkce.code_verifier`,
          options: {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            secure: e10,
            maxAge: 900
          }
        },
        state: {
          name: `${t10}authjs.state`,
          options: {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            secure: e10,
            maxAge: 900
          }
        },
        nonce: {
          name: `${t10}authjs.nonce`,
          options: { httpOnly: true, sameSite: 'lax', path: '/', secure: e10 }
        },
        webauthnChallenge: {
          name: `${t10}authjs.challenge`,
          options: {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            secure: e10,
            maxAge: 900
          }
        }
      };
    }
    class l {
      constructor(e10, t10, r10) {
        if (
          (t4.add(this),
          t3.set(this, {}),
          t6.set(this, void 0),
          t5.set(this, void 0),
          o(this, t5, r10, 'f'),
          o(this, t6, e10, 'f'),
          !t10)
        )
          return;
        let { name: n10 } = e10;
        for (let [e11, r11] of Object.entries(t10))
          e11.startsWith(n10) && r11 && (a(this, t3, 'f')[e11] = r11);
      }
      get value() {
        return Object.keys(a(this, t3, 'f'))
          .sort(
            (e10, t10) =>
              parseInt(e10.split('.').pop() || '0') -
              parseInt(t10.split('.').pop() || '0')
          )
          .map((e10) => a(this, t3, 'f')[e10])
          .join('');
      }
      chunk(e10, t10) {
        let r10 = a(this, t4, 'm', t9).call(this);
        for (let n10 of a(this, t4, 'm', t8).call(this, {
          name: a(this, t6, 'f').name,
          value: e10,
          options: { ...a(this, t6, 'f').options, ...t10 }
        }))
          r10[n10.name] = n10;
        return Object.values(r10);
      }
      clean() {
        return Object.values(a(this, t4, 'm', t9).call(this));
      }
    }
    (t3 = /* @__PURE__ */ new WeakMap()),
      (t6 = /* @__PURE__ */ new WeakMap()),
      (t5 = /* @__PURE__ */ new WeakMap()),
      (t4 = /* @__PURE__ */ new WeakSet()),
      (t8 = function (e10) {
        let t10 = Math.ceil(e10.value.length / 3936);
        if (1 === t10) return (a(this, t3, 'f')[e10.name] = e10.value), [e10];
        let r10 = [];
        for (let n10 = 0; n10 < t10; n10++) {
          let t11 = `${e10.name}.${n10}`,
            i2 = e10.value.substr(3936 * n10, 3936);
          r10.push({ ...e10, name: t11, value: i2 }),
            (a(this, t3, 'f')[t11] = i2);
        }
        return (
          a(this, t5, 'f').debug('CHUNKING_SESSION_COOKIE', {
            message: 'Session cookie exceeds allowed 4096 bytes.',
            emptyCookieSize: 160,
            valueSize: e10.value.length,
            chunks: r10.map((e11) => e11.value.length + 160)
          }),
          r10
        );
      }),
      (t9 = function () {
        let e10 = {};
        for (let t10 in a(this, t3, 'f'))
          delete a(this, t3, 'f')?.[t10],
            (e10[t10] = {
              name: t10,
              value: '',
              options: { ...a(this, t6, 'f').options, maxAge: 0 }
            });
        return e10;
      });
    class c extends Error {
      constructor(e10, t10) {
        e10 instanceof Error
          ? super(void 0, { cause: { err: e10, ...e10.cause, ...t10 } })
          : 'string' == typeof e10
          ? (t10 instanceof Error && (t10 = { err: t10, ...t10.cause }),
            super(e10, t10))
          : super(void 0, e10),
          (this.name = this.constructor.name),
          (this.type = this.constructor.type ?? 'AuthError'),
          (this.kind = this.constructor.kind ?? 'error'),
          Error.captureStackTrace?.(this, this.constructor);
        let r10 = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
        this.message += `${this.message ? '. ' : ''}Read more at ${r10}`;
      }
    }
    class u extends c {}
    u.kind = 'signIn';
    class d extends c {}
    d.type = 'AdapterError';
    class p extends c {}
    p.type = 'AccessDenied';
    class f extends c {}
    f.type = 'CallbackRouteError';
    class h extends c {}
    h.type = 'ErrorPageLoop';
    class g extends c {}
    g.type = 'EventError';
    class y extends c {}
    y.type = 'InvalidCallbackUrl';
    class m extends u {
      constructor() {
        super(...arguments), (this.code = 'credentials');
      }
    }
    m.type = 'CredentialsSignin';
    class v extends c {}
    v.type = 'InvalidEndpoints';
    class b extends c {}
    b.type = 'InvalidCheck';
    class w extends c {}
    w.type = 'JWTSessionError';
    class _ extends c {}
    _.type = 'MissingAdapter';
    class S extends c {}
    S.type = 'MissingAdapterMethods';
    class k extends c {}
    k.type = 'MissingAuthorize';
    class x extends c {}
    x.type = 'MissingSecret';
    class E extends u {}
    E.type = 'OAuthAccountNotLinked';
    class A extends u {}
    A.type = 'OAuthCallbackError';
    class C extends c {}
    C.type = 'OAuthProfileParseError';
    class T extends c {}
    T.type = 'SessionTokenError';
    class P extends u {}
    P.type = 'OAuthSignInError';
    class O extends u {}
    O.type = 'EmailSignInError';
    class R extends c {}
    R.type = 'SignOutError';
    class I extends c {}
    I.type = 'UnknownAction';
    class $ extends c {}
    $.type = 'UnsupportedStrategy';
    class N extends c {}
    N.type = 'InvalidProvider';
    class U extends c {}
    U.type = 'UntrustedHost';
    class j extends c {}
    j.type = 'Verification';
    class L extends u {}
    L.type = 'MissingCSRF';
    let M = /* @__PURE__ */ new Set([
      'CredentialsSignin',
      'OAuthAccountNotLinked',
      'OAuthCallbackError',
      'AccessDenied',
      'Verification',
      'MissingCSRF',
      'AccountNotLinked',
      'WebAuthnVerificationError'
    ]);
    class D extends c {}
    D.type = 'DuplicateConditionalUI';
    class H extends c {}
    H.type = 'MissingWebAuthnAutocomplete';
    class W extends c {}
    W.type = 'WebAuthnVerificationError';
    class K extends u {}
    K.type = 'AccountNotLinked';
    class B extends c {}
    B.type = 'ExperimentalFeatureNotEnabled';
    let V = false;
    function J(e10, t10) {
      try {
        return /^https?:/.test(
          new URL(e10, e10.startsWith('/') ? t10 : void 0).protocol
        );
      } catch {
        return false;
      }
    }
    let q = false,
      F = false,
      z = false,
      G = ['createVerificationToken', 'useVerificationToken', 'getUserByEmail'],
      X = [
        'createUser',
        'getUser',
        'getUserByEmail',
        'getUserByAccount',
        'updateUser',
        'linkAccount',
        'createSession',
        'getSessionAndUser',
        'updateSession',
        'deleteSession'
      ],
      Y = [
        'createUser',
        'getUser',
        'linkAccount',
        'getAccount',
        'getAuthenticator',
        'createAuthenticator',
        'listAuthenticatorsByUserId',
        'updateAuthenticatorCounter'
      ],
      Q = () => {
        if ('undefined' != typeof globalThis) return globalThis;
        if ('undefined' != typeof self) return self;
        if ('undefined' != typeof window) return window;
        throw Error('unable to locate global object');
      },
      Z = async (e10, t10, r10, n10, i2) => {
        let {
          crypto: { subtle: o2 }
        } = Q();
        return new Uint8Array(
          await o2.deriveBits(
            {
              name: 'HKDF',
              hash: `SHA-${e10.substr(3)}`,
              salt: r10,
              info: n10
            },
            await o2.importKey('raw', t10, 'HKDF', false, ['deriveBits']),
            i2 << 3
          )
        );
      };
    function ee(e10, t10) {
      if ('string' == typeof e10) return new TextEncoder().encode(e10);
      if (!(e10 instanceof Uint8Array))
        throw TypeError(
          `"${t10}"" must be an instance of Uint8Array or a string`
        );
      return e10;
    }
    async function et(e10, t10, r10, n10, i2) {
      return Z(
        (function (e11) {
          switch (e11) {
            case 'sha256':
            case 'sha384':
            case 'sha512':
            case 'sha1':
              return e11;
            default:
              throw TypeError('unsupported "digest" value');
          }
        })(e10),
        (function (e11) {
          let t11 = ee(e11, 'ikm');
          if (!t11.byteLength)
            throw TypeError('"ikm" must be at least one byte in length');
          return t11;
        })(t10),
        ee(r10, 'salt'),
        (function (e11) {
          let t11 = ee(e11, 'info');
          if (t11.byteLength > 1024)
            throw TypeError('"info" must not contain more than 1024 bytes');
          return t11;
        })(n10),
        (function (e11, t11) {
          if ('number' != typeof e11 || !Number.isInteger(e11) || e11 < 1)
            throw TypeError('"keylen" must be a positive integer');
          if (e11 > 255 * (parseInt(t11.substr(3), 10) >> 3 || 20))
            throw TypeError('"keylen" too large');
          return e11;
        })(i2, e10)
      );
    }
    let er = crypto,
      en = (e10) => e10 instanceof CryptoKey,
      ei = async (e10, t10) => {
        let r10 = `SHA-${e10.slice(-3)}`;
        return new Uint8Array(await er.subtle.digest(r10, t10));
      },
      eo = new TextEncoder(),
      ea = new TextDecoder();
    function es(...e10) {
      let t10 = new Uint8Array(
          e10.reduce((e11, { length: t11 }) => e11 + t11, 0)
        ),
        r10 = 0;
      for (let n10 of e10) t10.set(n10, r10), (r10 += n10.length);
      return t10;
    }
    function el(e10, t10, r10) {
      if (t10 < 0 || t10 >= 4294967296)
        throw RangeError(
          `value must be >= 0 and <= ${4294967296 - 1}. Received ${t10}`
        );
      e10.set([t10 >>> 24, t10 >>> 16, t10 >>> 8, 255 & t10], r10);
    }
    function ec(e10) {
      let t10 = new Uint8Array(8);
      return (
        el(t10, Math.floor(e10 / 4294967296), 0),
        el(t10, e10 % 4294967296, 4),
        t10
      );
    }
    function eu(e10) {
      let t10 = new Uint8Array(4);
      return el(t10, e10), t10;
    }
    function ed(e10) {
      return es(eu(e10.length), e10);
    }
    async function ep(e10, t10, r10) {
      let n10 = Math.ceil((t10 >> 3) / 32),
        i2 = new Uint8Array(32 * n10);
      for (let t11 = 0; t11 < n10; t11++) {
        let n11 = new Uint8Array(4 + e10.length + r10.length);
        n11.set(eu(t11 + 1)),
          n11.set(e10, 4),
          n11.set(r10, 4 + e10.length),
          i2.set(await ei('sha256', n11), 32 * t11);
      }
      return i2.slice(0, t10 >> 3);
    }
    let ef = (e10) => {
        let t10 = e10;
        'string' == typeof t10 && (t10 = eo.encode(t10));
        let r10 = [];
        for (let e11 = 0; e11 < t10.length; e11 += 32768)
          r10.push(
            String.fromCharCode.apply(null, t10.subarray(e11, e11 + 32768))
          );
        return btoa(r10.join(''));
      },
      eh = (e10) =>
        ef(e10).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
      eg = (e10) => {
        let t10 = atob(e10),
          r10 = new Uint8Array(t10.length);
        for (let e11 = 0; e11 < t10.length; e11++)
          r10[e11] = t10.charCodeAt(e11);
        return r10;
      },
      ey = (e10) => {
        let t10 = e10;
        t10 instanceof Uint8Array && (t10 = ea.decode(t10)),
          (t10 = t10.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, ''));
        try {
          return eg(t10);
        } catch {
          throw TypeError('The input to be decoded is not correctly encoded.');
        }
      };
    class em extends Error {
      static get code() {
        return 'ERR_JOSE_GENERIC';
      }
      constructor(e10) {
        super(e10),
          (this.code = 'ERR_JOSE_GENERIC'),
          (this.name = this.constructor.name),
          Error.captureStackTrace?.(this, this.constructor);
      }
    }
    class ev extends em {
      static get code() {
        return 'ERR_JWT_CLAIM_VALIDATION_FAILED';
      }
      constructor(e10, t10 = 'unspecified', r10 = 'unspecified') {
        super(e10),
          (this.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED'),
          (this.claim = t10),
          (this.reason = r10);
      }
    }
    class eb extends em {
      static get code() {
        return 'ERR_JWT_EXPIRED';
      }
      constructor(e10, t10 = 'unspecified', r10 = 'unspecified') {
        super(e10),
          (this.code = 'ERR_JWT_EXPIRED'),
          (this.claim = t10),
          (this.reason = r10);
      }
    }
    class ew extends em {
      constructor() {
        super(...arguments), (this.code = 'ERR_JOSE_ALG_NOT_ALLOWED');
      }
      static get code() {
        return 'ERR_JOSE_ALG_NOT_ALLOWED';
      }
    }
    class e_ extends em {
      constructor() {
        super(...arguments), (this.code = 'ERR_JOSE_NOT_SUPPORTED');
      }
      static get code() {
        return 'ERR_JOSE_NOT_SUPPORTED';
      }
    }
    class eS extends em {
      constructor() {
        super(...arguments),
          (this.code = 'ERR_JWE_DECRYPTION_FAILED'),
          (this.message = 'decryption operation failed');
      }
      static get code() {
        return 'ERR_JWE_DECRYPTION_FAILED';
      }
    }
    class ek extends em {
      constructor() {
        super(...arguments), (this.code = 'ERR_JWE_INVALID');
      }
      static get code() {
        return 'ERR_JWE_INVALID';
      }
    }
    class ex extends em {
      constructor() {
        super(...arguments), (this.code = 'ERR_JWT_INVALID');
      }
      static get code() {
        return 'ERR_JWT_INVALID';
      }
    }
    class eE extends em {
      constructor() {
        super(...arguments), (this.code = 'ERR_JWK_INVALID');
      }
      static get code() {
        return 'ERR_JWK_INVALID';
      }
    }
    Symbol.asyncIterator;
    let eA = er.getRandomValues.bind(er);
    function eC(e10) {
      switch (e10) {
        case 'A128GCM':
        case 'A128GCMKW':
        case 'A192GCM':
        case 'A192GCMKW':
        case 'A256GCM':
        case 'A256GCMKW':
          return 96;
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
          return 128;
        default:
          throw new e_(`Unsupported JWE Algorithm: ${e10}`);
      }
    }
    let eT = (e10) => eA(new Uint8Array(eC(e10) >> 3)),
      eP = (e10, t10) => {
        if (t10.length << 3 !== eC(e10))
          throw new ek('Invalid Initialization Vector length');
      },
      eO = (e10, t10) => {
        let r10 = e10.byteLength << 3;
        if (r10 !== t10)
          throw new ek(
            `Invalid Content Encryption Key length. Expected ${t10} bits, got ${r10} bits`
          );
      },
      eR = (e10, t10) => {
        if (!(e10 instanceof Uint8Array))
          throw TypeError('First argument must be a buffer');
        if (!(t10 instanceof Uint8Array))
          throw TypeError('Second argument must be a buffer');
        if (e10.length !== t10.length)
          throw TypeError('Input buffers must have the same length');
        let r10 = e10.length,
          n10 = 0,
          i2 = -1;
        for (; ++i2 < r10; ) n10 |= e10[i2] ^ t10[i2];
        return 0 === n10;
      };
    function eI(e10, t10 = 'algorithm.name') {
      return TypeError(
        `CryptoKey does not support this operation, its ${t10} must be ${e10}`
      );
    }
    function e$(e10, t10) {
      return e10.name === t10;
    }
    function eN(e10, t10, ...r10) {
      switch (t10) {
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM': {
          if (!e$(e10.algorithm, 'AES-GCM')) throw eI('AES-GCM');
          let r11 = parseInt(t10.slice(1, 4), 10);
          if (e10.algorithm.length !== r11) throw eI(r11, 'algorithm.length');
          break;
        }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW': {
          if (!e$(e10.algorithm, 'AES-KW')) throw eI('AES-KW');
          let r11 = parseInt(t10.slice(1, 4), 10);
          if (e10.algorithm.length !== r11) throw eI(r11, 'algorithm.length');
          break;
        }
        case 'ECDH':
          switch (e10.algorithm.name) {
            case 'ECDH':
            case 'X25519':
            case 'X448':
              break;
            default:
              throw eI('ECDH, X25519, or X448');
          }
          break;
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
          if (!e$(e10.algorithm, 'PBKDF2')) throw eI('PBKDF2');
          break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512': {
          if (!e$(e10.algorithm, 'RSA-OAEP')) throw eI('RSA-OAEP');
          let r11 = parseInt(t10.slice(9), 10) || 1;
          if (parseInt(e10.algorithm.hash.name.slice(4), 10) !== r11)
            throw eI(`SHA-${r11}`, 'algorithm.hash');
          break;
        }
        default:
          throw TypeError('CryptoKey does not support this operation');
      }
      !(function (e11, t11) {
        if (t11.length && !t11.some((t12) => e11.usages.includes(t12))) {
          let e12 =
            'CryptoKey does not support this operation, its usages must include ';
          if (t11.length > 2) {
            let r11 = t11.pop();
            e12 += `one of ${t11.join(', ')}, or ${r11}.`;
          } else
            2 === t11.length
              ? (e12 += `one of ${t11[0]} or ${t11[1]}.`)
              : (e12 += `${t11[0]}.`);
          throw TypeError(e12);
        }
      })(e10, r10);
    }
    function eU(e10, t10, ...r10) {
      if (r10.length > 2) {
        let t11 = r10.pop();
        e10 += `one of type ${r10.join(', ')}, or ${t11}.`;
      } else
        2 === r10.length
          ? (e10 += `one of type ${r10[0]} or ${r10[1]}.`)
          : (e10 += `of type ${r10[0]}.`);
      return (
        null == t10
          ? (e10 += ` Received ${t10}`)
          : 'function' == typeof t10 && t10.name
          ? (e10 += ` Received function ${t10.name}`)
          : 'object' == typeof t10 &&
            null != t10 &&
            t10.constructor?.name &&
            (e10 += ` Received an instance of ${t10.constructor.name}`),
        e10
      );
    }
    let ej = (e10, ...t10) => eU('Key must be ', e10, ...t10);
    function eL(e10, t10, ...r10) {
      return eU(`Key for the ${e10} algorithm must be `, t10, ...r10);
    }
    let eM = (e10) => en(e10),
      eD = ['CryptoKey'];
    async function eH(e10, t10, r10, n10, i2, o2) {
      let a2, s2;
      if (!(t10 instanceof Uint8Array)) throw TypeError(ej(t10, 'Uint8Array'));
      let l2 = parseInt(e10.slice(1, 4), 10),
        c2 = await er.subtle.importKey(
          'raw',
          t10.subarray(l2 >> 3),
          'AES-CBC',
          false,
          ['decrypt']
        ),
        u2 = await er.subtle.importKey(
          'raw',
          t10.subarray(0, l2 >> 3),
          { hash: `SHA-${l2 << 1}`, name: 'HMAC' },
          false,
          ['sign']
        ),
        d2 = es(o2, n10, r10, ec(o2.length << 3)),
        p2 = new Uint8Array(
          (await er.subtle.sign('HMAC', u2, d2)).slice(0, l2 >> 3)
        );
      try {
        a2 = eR(i2, p2);
      } catch {}
      if (!a2) throw new eS();
      try {
        s2 = new Uint8Array(
          await er.subtle.decrypt({ iv: n10, name: 'AES-CBC' }, c2, r10)
        );
      } catch {}
      if (!s2) throw new eS();
      return s2;
    }
    async function eW(e10, t10, r10, n10, i2, o2) {
      let a2;
      t10 instanceof Uint8Array
        ? (a2 = await er.subtle.importKey('raw', t10, 'AES-GCM', false, [
            'decrypt'
          ]))
        : (eN(t10, e10, 'decrypt'), (a2 = t10));
      try {
        return new Uint8Array(
          await er.subtle.decrypt(
            { additionalData: o2, iv: n10, name: 'AES-GCM', tagLength: 128 },
            a2,
            es(r10, i2)
          )
        );
      } catch {
        throw new eS();
      }
    }
    let eK = async (e10, t10, r10, n10, i2, o2) => {
        if (!en(t10) && !(t10 instanceof Uint8Array))
          throw TypeError(ej(t10, ...eD, 'Uint8Array'));
        if (!n10) throw new ek('JWE Initialization Vector missing');
        if (!i2) throw new ek('JWE Authentication Tag missing');
        switch ((eP(e10, n10), e10)) {
          case 'A128CBC-HS256':
          case 'A192CBC-HS384':
          case 'A256CBC-HS512':
            return (
              t10 instanceof Uint8Array && eO(t10, parseInt(e10.slice(-3), 10)),
              eH(e10, t10, r10, n10, i2, o2)
            );
          case 'A128GCM':
          case 'A192GCM':
          case 'A256GCM':
            return (
              t10 instanceof Uint8Array &&
                eO(t10, parseInt(e10.slice(1, 4), 10)),
              eW(e10, t10, r10, n10, i2, o2)
            );
          default:
            throw new e_('Unsupported JWE Content Encryption Algorithm');
        }
      },
      eB = (...e10) => {
        let t10;
        let r10 = e10.filter(Boolean);
        if (0 === r10.length || 1 === r10.length) return true;
        for (let e11 of r10) {
          let r11 = Object.keys(e11);
          if (!t10 || 0 === t10.size) {
            t10 = new Set(r11);
            continue;
          }
          for (let e12 of r11) {
            if (t10.has(e12)) return false;
            t10.add(e12);
          }
        }
        return true;
      };
    function eV(e10) {
      if (
        !('object' == typeof e10 && null !== e10) ||
        '[object Object]' !== Object.prototype.toString.call(e10)
      )
        return false;
      if (null === Object.getPrototypeOf(e10)) return true;
      let t10 = e10;
      for (; null !== Object.getPrototypeOf(t10); )
        t10 = Object.getPrototypeOf(t10);
      return Object.getPrototypeOf(e10) === t10;
    }
    let eJ = [{ hash: 'SHA-256', name: 'HMAC' }, true, ['sign']];
    function eq(e10, t10) {
      if (e10.algorithm.length !== parseInt(t10.slice(1, 4), 10))
        throw TypeError(`Invalid key size for alg: ${t10}`);
    }
    function eF(e10, t10, r10) {
      if (en(e10)) return eN(e10, t10, r10), e10;
      if (e10 instanceof Uint8Array)
        return er.subtle.importKey('raw', e10, 'AES-KW', true, [r10]);
      throw TypeError(ej(e10, ...eD, 'Uint8Array'));
    }
    let ez = async (e10, t10, r10) => {
        let n10 = await eF(t10, e10, 'wrapKey');
        eq(n10, e10);
        let i2 = await er.subtle.importKey('raw', r10, ...eJ);
        return new Uint8Array(
          await er.subtle.wrapKey('raw', i2, n10, 'AES-KW')
        );
      },
      eG = async (e10, t10, r10) => {
        let n10 = await eF(t10, e10, 'unwrapKey');
        eq(n10, e10);
        let i2 = await er.subtle.unwrapKey('raw', r10, n10, 'AES-KW', ...eJ);
        return new Uint8Array(await er.subtle.exportKey('raw', i2));
      };
    async function eX(
      e10,
      t10,
      r10,
      n10,
      i2 = new Uint8Array(0),
      o2 = new Uint8Array(0)
    ) {
      let a2;
      if (!en(e10)) throw TypeError(ej(e10, ...eD));
      if ((eN(e10, 'ECDH'), !en(t10))) throw TypeError(ej(t10, ...eD));
      eN(t10, 'ECDH', 'deriveBits');
      let s2 = es(ed(eo.encode(r10)), ed(i2), ed(o2), eu(n10));
      return (
        (a2 =
          'X25519' === e10.algorithm.name
            ? 256
            : 'X448' === e10.algorithm.name
            ? 448
            : Math.ceil(
                parseInt(e10.algorithm.namedCurve.substr(-3), 10) / 8
              ) << 3),
        ep(
          new Uint8Array(
            await er.subtle.deriveBits(
              { name: e10.algorithm.name, public: e10 },
              t10,
              a2
            )
          ),
          n10,
          s2
        )
      );
    }
    async function eY(e10) {
      if (!en(e10)) throw TypeError(ej(e10, ...eD));
      return er.subtle.generateKey(e10.algorithm, true, ['deriveBits']);
    }
    function eQ(e10) {
      if (!en(e10)) throw TypeError(ej(e10, ...eD));
      return (
        ['P-256', 'P-384', 'P-521'].includes(e10.algorithm.namedCurve) ||
        'X25519' === e10.algorithm.name ||
        'X448' === e10.algorithm.name
      );
    }
    async function eZ(e10, t10, r10, n10) {
      !(function (e11) {
        if (!(e11 instanceof Uint8Array) || e11.length < 8)
          throw new ek('PBES2 Salt Input must be 8 or more octets');
      })(e10);
      let i2 = es(eo.encode(t10), new Uint8Array([0]), e10),
        o2 = parseInt(t10.slice(13, 16), 10),
        a2 = {
          hash: `SHA-${t10.slice(8, 11)}`,
          iterations: r10,
          name: 'PBKDF2',
          salt: i2
        },
        s2 = await (function (e11, t11) {
          if (e11 instanceof Uint8Array)
            return er.subtle.importKey('raw', e11, 'PBKDF2', false, [
              'deriveBits'
            ]);
          if (en(e11)) return eN(e11, t11, 'deriveBits', 'deriveKey'), e11;
          throw TypeError(ej(e11, ...eD, 'Uint8Array'));
        })(n10, t10);
      if (s2.usages.includes('deriveBits'))
        return new Uint8Array(await er.subtle.deriveBits(a2, s2, o2));
      if (s2.usages.includes('deriveKey'))
        return er.subtle.deriveKey(
          a2,
          s2,
          { length: o2, name: 'AES-KW' },
          false,
          ['wrapKey', 'unwrapKey']
        );
      throw TypeError(
        'PBKDF2 key "usages" must include "deriveBits" or "deriveKey"'
      );
    }
    let e0 = async (e10, t10, r10, n10 = 2048, i2 = eA(new Uint8Array(16))) => {
        let o2 = await eZ(i2, e10, n10, t10);
        return {
          encryptedKey: await ez(e10.slice(-6), o2, r10),
          p2c: n10,
          p2s: eh(i2)
        };
      },
      e1 = async (e10, t10, r10, n10, i2) => {
        let o2 = await eZ(i2, e10, n10, t10);
        return eG(e10.slice(-6), o2, r10);
      };
    function e2(e10) {
      switch (e10) {
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
          return 'RSA-OAEP';
        default:
          throw new e_(
            `alg ${e10} is not supported either by JOSE or your javascript runtime`
          );
      }
    }
    let e4 = (e10, t10) => {
        if (e10.startsWith('RS') || e10.startsWith('PS')) {
          let { modulusLength: r10 } = t10.algorithm;
          if ('number' != typeof r10 || r10 < 2048)
            throw TypeError(
              `${e10} requires key modulusLength to be 2048 bits or larger`
            );
        }
      },
      e3 = async (e10, t10, r10) => {
        if (!en(t10)) throw TypeError(ej(t10, ...eD));
        if (
          (eN(t10, e10, 'encrypt', 'wrapKey'),
          e4(e10, t10),
          t10.usages.includes('encrypt'))
        )
          return new Uint8Array(await er.subtle.encrypt(e2(e10), t10, r10));
        if (t10.usages.includes('wrapKey')) {
          let n10 = await er.subtle.importKey('raw', r10, ...eJ);
          return new Uint8Array(
            await er.subtle.wrapKey('raw', n10, t10, e2(e10))
          );
        }
        throw TypeError(
          'RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation'
        );
      },
      e6 = async (e10, t10, r10) => {
        if (!en(t10)) throw TypeError(ej(t10, ...eD));
        if (
          (eN(t10, e10, 'decrypt', 'unwrapKey'),
          e4(e10, t10),
          t10.usages.includes('decrypt'))
        )
          return new Uint8Array(await er.subtle.decrypt(e2(e10), t10, r10));
        if (t10.usages.includes('unwrapKey')) {
          let n10 = await er.subtle.unwrapKey('raw', r10, t10, e2(e10), ...eJ);
          return new Uint8Array(await er.subtle.exportKey('raw', n10));
        }
        throw TypeError(
          'RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation'
        );
      };
    function e5(e10) {
      switch (e10) {
        case 'A128GCM':
          return 128;
        case 'A192GCM':
          return 192;
        case 'A256GCM':
        case 'A128CBC-HS256':
          return 256;
        case 'A192CBC-HS384':
          return 384;
        case 'A256CBC-HS512':
          return 512;
        default:
          throw new e_(`Unsupported JWE Algorithm: ${e10}`);
      }
    }
    let e8 = (e10) => eA(new Uint8Array(e5(e10) >> 3)),
      e9 = async (e10) => {
        if (!e10.alg)
          throw TypeError(
            '"alg" argument is required when "jwk.alg" is not present'
          );
        let { algorithm: t10, keyUsages: r10 } = (function (e11) {
            let t11, r11;
            switch (e11.kty) {
              case 'RSA':
                switch (e11.alg) {
                  case 'PS256':
                  case 'PS384':
                  case 'PS512':
                    (t11 = {
                      name: 'RSA-PSS',
                      hash: `SHA-${e11.alg.slice(-3)}`
                    }),
                      (r11 = e11.d ? ['sign'] : ['verify']);
                    break;
                  case 'RS256':
                  case 'RS384':
                  case 'RS512':
                    (t11 = {
                      name: 'RSASSA-PKCS1-v1_5',
                      hash: `SHA-${e11.alg.slice(-3)}`
                    }),
                      (r11 = e11.d ? ['sign'] : ['verify']);
                    break;
                  case 'RSA-OAEP':
                  case 'RSA-OAEP-256':
                  case 'RSA-OAEP-384':
                  case 'RSA-OAEP-512':
                    (t11 = {
                      name: 'RSA-OAEP',
                      hash: `SHA-${parseInt(e11.alg.slice(-3), 10) || 1}`
                    }),
                      (r11 = e11.d
                        ? ['decrypt', 'unwrapKey']
                        : ['encrypt', 'wrapKey']);
                    break;
                  default:
                    throw new e_(
                      'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
                    );
                }
                break;
              case 'EC':
                switch (e11.alg) {
                  case 'ES256':
                    (t11 = { name: 'ECDSA', namedCurve: 'P-256' }),
                      (r11 = e11.d ? ['sign'] : ['verify']);
                    break;
                  case 'ES384':
                    (t11 = { name: 'ECDSA', namedCurve: 'P-384' }),
                      (r11 = e11.d ? ['sign'] : ['verify']);
                    break;
                  case 'ES512':
                    (t11 = { name: 'ECDSA', namedCurve: 'P-521' }),
                      (r11 = e11.d ? ['sign'] : ['verify']);
                    break;
                  case 'ECDH-ES':
                  case 'ECDH-ES+A128KW':
                  case 'ECDH-ES+A192KW':
                  case 'ECDH-ES+A256KW':
                    (t11 = { name: 'ECDH', namedCurve: e11.crv }),
                      (r11 = e11.d ? ['deriveBits'] : []);
                    break;
                  default:
                    throw new e_(
                      'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
                    );
                }
                break;
              case 'OKP':
                switch (e11.alg) {
                  case 'EdDSA':
                    (t11 = { name: e11.crv }),
                      (r11 = e11.d ? ['sign'] : ['verify']);
                    break;
                  case 'ECDH-ES':
                  case 'ECDH-ES+A128KW':
                  case 'ECDH-ES+A192KW':
                  case 'ECDH-ES+A256KW':
                    (t11 = { name: e11.crv }),
                      (r11 = e11.d ? ['deriveBits'] : []);
                    break;
                  default:
                    throw new e_(
                      'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
                    );
                }
                break;
              default:
                throw new e_(
                  'Invalid or unsupported JWK "kty" (Key Type) Parameter value'
                );
            }
            return { algorithm: t11, keyUsages: r11 };
          })(e10),
          n10 = [t10, e10.ext ?? false, e10.key_ops ?? r10],
          i2 = { ...e10 };
        return (
          delete i2.alg, delete i2.use, er.subtle.importKey('jwk', i2, ...n10)
        );
      };
    async function e7(e10, t10) {
      if (!eV(e10)) throw TypeError('JWK must be an object');
      switch ((t10 || (t10 = e10.alg), e10.kty)) {
        case 'oct':
          if ('string' != typeof e10.k || !e10.k)
            throw TypeError('missing "k" (Key Value) Parameter value');
          return ey(e10.k);
        case 'RSA':
          if (void 0 !== e10.oth)
            throw new e_(
              'RSA JWK "oth" (Other Primes Info) Parameter value is not supported'
            );
        case 'EC':
        case 'OKP':
          return e9({ ...e10, alg: t10 });
        default:
          throw new e_('Unsupported "kty" (Key Type) Parameter value');
      }
    }
    let te = (e10, t10) => {
        if (!(t10 instanceof Uint8Array)) {
          if (!eM(t10)) throw TypeError(eL(e10, t10, ...eD, 'Uint8Array'));
          if ('secret' !== t10.type)
            throw TypeError(
              `${eD.join(
                ' or '
              )} instances for symmetric algorithms must be of type "secret"`
            );
        }
      },
      tt = (e10, t10, r10) => {
        if (!eM(t10)) throw TypeError(eL(e10, t10, ...eD));
        if ('secret' === t10.type)
          throw TypeError(
            `${eD.join(
              ' or '
            )} instances for asymmetric algorithms must not be of type "secret"`
          );
        if ('sign' === r10 && 'public' === t10.type)
          throw TypeError(
            `${eD.join(
              ' or '
            )} instances for asymmetric algorithm signing must be of type "private"`
          );
        if ('decrypt' === r10 && 'public' === t10.type)
          throw TypeError(
            `${eD.join(
              ' or '
            )} instances for asymmetric algorithm decryption must be of type "private"`
          );
        if (t10.algorithm && 'verify' === r10 && 'private' === t10.type)
          throw TypeError(
            `${eD.join(
              ' or '
            )} instances for asymmetric algorithm verifying must be of type "public"`
          );
        if (t10.algorithm && 'encrypt' === r10 && 'private' === t10.type)
          throw TypeError(
            `${eD.join(
              ' or '
            )} instances for asymmetric algorithm encryption must be of type "public"`
          );
      },
      tr = (e10, t10, r10) => {
        e10.startsWith('HS') ||
        'dir' === e10 ||
        e10.startsWith('PBES2') ||
        /^A\d{3}(?:GCM)?KW$/.test(e10)
          ? te(e10, t10)
          : tt(e10, t10, r10);
      };
    async function tn(e10, t10, r10, n10, i2) {
      if (!(r10 instanceof Uint8Array)) throw TypeError(ej(r10, 'Uint8Array'));
      let o2 = parseInt(e10.slice(1, 4), 10),
        a2 = await er.subtle.importKey(
          'raw',
          r10.subarray(o2 >> 3),
          'AES-CBC',
          false,
          ['encrypt']
        ),
        s2 = await er.subtle.importKey(
          'raw',
          r10.subarray(0, o2 >> 3),
          { hash: `SHA-${o2 << 1}`, name: 'HMAC' },
          false,
          ['sign']
        ),
        l2 = new Uint8Array(
          await er.subtle.encrypt({ iv: n10, name: 'AES-CBC' }, a2, t10)
        ),
        c2 = es(i2, n10, l2, ec(i2.length << 3));
      return {
        ciphertext: l2,
        tag: new Uint8Array(
          (await er.subtle.sign('HMAC', s2, c2)).slice(0, o2 >> 3)
        ),
        iv: n10
      };
    }
    async function ti(e10, t10, r10, n10, i2) {
      let o2;
      r10 instanceof Uint8Array
        ? (o2 = await er.subtle.importKey('raw', r10, 'AES-GCM', false, [
            'encrypt'
          ]))
        : (eN(r10, e10, 'encrypt'), (o2 = r10));
      let a2 = new Uint8Array(
          await er.subtle.encrypt(
            { additionalData: i2, iv: n10, name: 'AES-GCM', tagLength: 128 },
            o2,
            t10
          )
        ),
        s2 = a2.slice(-16);
      return { ciphertext: a2.slice(0, -16), tag: s2, iv: n10 };
    }
    let to = async (e10, t10, r10, n10, i2) => {
      if (!en(r10) && !(r10 instanceof Uint8Array))
        throw TypeError(ej(r10, ...eD, 'Uint8Array'));
      switch ((n10 ? eP(e10, n10) : (n10 = eT(e10)), e10)) {
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
          return (
            r10 instanceof Uint8Array && eO(r10, parseInt(e10.slice(-3), 10)),
            tn(e10, t10, r10, n10, i2)
          );
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
          return (
            r10 instanceof Uint8Array && eO(r10, parseInt(e10.slice(1, 4), 10)),
            ti(e10, t10, r10, n10, i2)
          );
        default:
          throw new e_('Unsupported JWE Content Encryption Algorithm');
      }
    };
    async function ta(e10, t10, r10, n10) {
      let i2 = e10.slice(0, 7),
        o2 = await to(i2, r10, t10, n10, new Uint8Array(0));
      return { encryptedKey: o2.ciphertext, iv: eh(o2.iv), tag: eh(o2.tag) };
    }
    async function ts(e10, t10, r10, n10, i2) {
      return eK(e10.slice(0, 7), t10, r10, n10, i2, new Uint8Array(0));
    }
    async function tl(e10, t10, r10, n10, i2) {
      switch ((tr(e10, t10, 'decrypt'), e10)) {
        case 'dir':
          if (void 0 !== r10)
            throw new ek('Encountered unexpected JWE Encrypted Key');
          return t10;
        case 'ECDH-ES':
          if (void 0 !== r10)
            throw new ek('Encountered unexpected JWE Encrypted Key');
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW': {
          let i3, o2;
          if (!eV(n10.epk))
            throw new ek(
              'JOSE Header "epk" (Ephemeral Public Key) missing or invalid'
            );
          if (!eQ(t10))
            throw new e_(
              'ECDH with the provided key is not allowed or not supported by your javascript runtime'
            );
          let a2 = await e7(n10.epk, e10);
          if (void 0 !== n10.apu) {
            if ('string' != typeof n10.apu)
              throw new ek('JOSE Header "apu" (Agreement PartyUInfo) invalid');
            try {
              i3 = ey(n10.apu);
            } catch {
              throw new ek('Failed to base64url decode the apu');
            }
          }
          if (void 0 !== n10.apv) {
            if ('string' != typeof n10.apv)
              throw new ek('JOSE Header "apv" (Agreement PartyVInfo) invalid');
            try {
              o2 = ey(n10.apv);
            } catch {
              throw new ek('Failed to base64url decode the apv');
            }
          }
          let s2 = await eX(
            a2,
            t10,
            'ECDH-ES' === e10 ? n10.enc : e10,
            'ECDH-ES' === e10 ? e5(n10.enc) : parseInt(e10.slice(-5, -2), 10),
            i3,
            o2
          );
          if ('ECDH-ES' === e10) return s2;
          if (void 0 === r10) throw new ek('JWE Encrypted Key missing');
          return eG(e10.slice(-6), s2, r10);
        }
        case 'RSA1_5':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
          if (void 0 === r10) throw new ek('JWE Encrypted Key missing');
          return e6(e10, t10, r10);
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW': {
          let o2;
          if (void 0 === r10) throw new ek('JWE Encrypted Key missing');
          if ('number' != typeof n10.p2c)
            throw new ek('JOSE Header "p2c" (PBES2 Count) missing or invalid');
          let a2 = i2?.maxPBES2Count || 1e4;
          if (n10.p2c > a2)
            throw new ek(
              'JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds'
            );
          if ('string' != typeof n10.p2s)
            throw new ek('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
          try {
            o2 = ey(n10.p2s);
          } catch {
            throw new ek('Failed to base64url decode the p2s');
          }
          return e1(e10, t10, r10, n10.p2c, o2);
        }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
          if (void 0 === r10) throw new ek('JWE Encrypted Key missing');
          return eG(e10, t10, r10);
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW': {
          let i3, o2;
          if (void 0 === r10) throw new ek('JWE Encrypted Key missing');
          if ('string' != typeof n10.iv)
            throw new ek(
              'JOSE Header "iv" (Initialization Vector) missing or invalid'
            );
          if ('string' != typeof n10.tag)
            throw new ek(
              'JOSE Header "tag" (Authentication Tag) missing or invalid'
            );
          try {
            i3 = ey(n10.iv);
          } catch {
            throw new ek('Failed to base64url decode the iv');
          }
          try {
            o2 = ey(n10.tag);
          } catch {
            throw new ek('Failed to base64url decode the tag');
          }
          return ts(e10, t10, r10, i3, o2);
        }
        default:
          throw new e_(
            'Invalid or unsupported "alg" (JWE Algorithm) header value'
          );
      }
    }
    let tc = function (e10, t10, r10, n10, i2) {
        let o2;
        if (void 0 !== i2.crit && n10?.crit === void 0)
          throw new e10(
            '"crit" (Critical) Header Parameter MUST be integrity protected'
          );
        if (!n10 || void 0 === n10.crit) return /* @__PURE__ */ new Set();
        if (
          !Array.isArray(n10.crit) ||
          0 === n10.crit.length ||
          n10.crit.some((e11) => 'string' != typeof e11 || 0 === e11.length)
        )
          throw new e10(
            '"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present'
          );
        for (let a2 of ((o2 =
          void 0 !== r10
            ? new Map([...Object.entries(r10), ...t10.entries()])
            : t10),
        n10.crit)) {
          if (!o2.has(a2))
            throw new e_(
              `Extension Header Parameter "${a2}" is not recognized`
            );
          if (void 0 === i2[a2])
            throw new e10(`Extension Header Parameter "${a2}" is missing`);
          if (o2.get(a2) && void 0 === n10[a2])
            throw new e10(
              `Extension Header Parameter "${a2}" MUST be integrity protected`
            );
        }
        return new Set(n10.crit);
      },
      tu = (e10, t10) => {
        if (
          void 0 !== t10 &&
          (!Array.isArray(t10) || t10.some((e11) => 'string' != typeof e11))
        )
          throw TypeError(`"${e10}" option must be an array of strings`);
        if (t10) return new Set(t10);
      };
    async function td(e10, t10, r10) {
      let n10, i2, o2, a2, s2, l2, c2;
      if (!eV(e10)) throw new ek('Flattened JWE must be an object');
      if (
        void 0 === e10.protected &&
        void 0 === e10.header &&
        void 0 === e10.unprotected
      )
        throw new ek('JOSE Header missing');
      if (void 0 !== e10.iv && 'string' != typeof e10.iv)
        throw new ek('JWE Initialization Vector incorrect type');
      if ('string' != typeof e10.ciphertext)
        throw new ek('JWE Ciphertext missing or incorrect type');
      if (void 0 !== e10.tag && 'string' != typeof e10.tag)
        throw new ek('JWE Authentication Tag incorrect type');
      if (void 0 !== e10.protected && 'string' != typeof e10.protected)
        throw new ek('JWE Protected Header incorrect type');
      if (void 0 !== e10.encrypted_key && 'string' != typeof e10.encrypted_key)
        throw new ek('JWE Encrypted Key incorrect type');
      if (void 0 !== e10.aad && 'string' != typeof e10.aad)
        throw new ek('JWE AAD incorrect type');
      if (void 0 !== e10.header && !eV(e10.header))
        throw new ek('JWE Shared Unprotected Header incorrect type');
      if (void 0 !== e10.unprotected && !eV(e10.unprotected))
        throw new ek('JWE Per-Recipient Unprotected Header incorrect type');
      if (e10.protected)
        try {
          let t11 = ey(e10.protected);
          n10 = JSON.parse(ea.decode(t11));
        } catch {
          throw new ek('JWE Protected Header is invalid');
        }
      if (!eB(n10, e10.header, e10.unprotected))
        throw new ek(
          'JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint'
        );
      let u2 = { ...n10, ...e10.header, ...e10.unprotected };
      if (
        (tc(ek, /* @__PURE__ */ new Map(), r10?.crit, n10, u2),
        void 0 !== u2.zip)
      )
        throw new e_(
          'JWE "zip" (Compression Algorithm) Header Parameter is not supported.'
        );
      let { alg: d2, enc: p2 } = u2;
      if ('string' != typeof d2 || !d2)
        throw new ek('missing JWE Algorithm (alg) in JWE Header');
      if ('string' != typeof p2 || !p2)
        throw new ek('missing JWE Encryption Algorithm (enc) in JWE Header');
      let f2 =
          r10 && tu('keyManagementAlgorithms', r10.keyManagementAlgorithms),
        h2 =
          r10 &&
          tu('contentEncryptionAlgorithms', r10.contentEncryptionAlgorithms);
      if ((f2 && !f2.has(d2)) || (!f2 && d2.startsWith('PBES2')))
        throw new ew('"alg" (Algorithm) Header Parameter value not allowed');
      if (h2 && !h2.has(p2))
        throw new ew(
          '"enc" (Encryption Algorithm) Header Parameter value not allowed'
        );
      if (void 0 !== e10.encrypted_key)
        try {
          i2 = ey(e10.encrypted_key);
        } catch {
          throw new ek('Failed to base64url decode the encrypted_key');
        }
      let g2 = false;
      'function' == typeof t10 && ((t10 = await t10(n10, e10)), (g2 = true));
      try {
        o2 = await tl(d2, t10, i2, u2, r10);
      } catch (e11) {
        if (e11 instanceof TypeError || e11 instanceof ek || e11 instanceof e_)
          throw e11;
        o2 = e8(p2);
      }
      if (void 0 !== e10.iv)
        try {
          a2 = ey(e10.iv);
        } catch {
          throw new ek('Failed to base64url decode the iv');
        }
      if (void 0 !== e10.tag)
        try {
          s2 = ey(e10.tag);
        } catch {
          throw new ek('Failed to base64url decode the tag');
        }
      let y2 = eo.encode(e10.protected ?? '');
      l2 = void 0 !== e10.aad ? es(y2, eo.encode('.'), eo.encode(e10.aad)) : y2;
      try {
        c2 = ey(e10.ciphertext);
      } catch {
        throw new ek('Failed to base64url decode the ciphertext');
      }
      let m2 = { plaintext: await eK(p2, o2, c2, a2, s2, l2) };
      if (
        (void 0 !== e10.protected && (m2.protectedHeader = n10),
        void 0 !== e10.aad)
      )
        try {
          m2.additionalAuthenticatedData = ey(e10.aad);
        } catch {
          throw new ek('Failed to base64url decode the aad');
        }
      return (void 0 !== e10.unprotected &&
        (m2.sharedUnprotectedHeader = e10.unprotected),
      void 0 !== e10.header && (m2.unprotectedHeader = e10.header),
      g2)
        ? { ...m2, key: t10 }
        : m2;
    }
    async function tp(e10, t10, r10) {
      if (
        (e10 instanceof Uint8Array && (e10 = ea.decode(e10)),
        'string' != typeof e10)
      )
        throw new ek('Compact JWE must be a string or Uint8Array');
      let { 0: n10, 1: i2, 2: o2, 3: a2, 4: s2, length: l2 } = e10.split('.');
      if (5 !== l2) throw new ek('Invalid Compact JWE');
      let c2 = await td(
          {
            ciphertext: a2,
            iv: o2 || void 0,
            protected: n10,
            tag: s2 || void 0,
            encrypted_key: i2 || void 0
          },
          t10,
          r10
        ),
        u2 = { plaintext: c2.plaintext, protectedHeader: c2.protectedHeader };
      return 'function' == typeof t10 ? { ...u2, key: c2.key } : u2;
    }
    let tf = async (e10) => {
      if (e10 instanceof Uint8Array) return { kty: 'oct', k: eh(e10) };
      if (!en(e10)) throw TypeError(ej(e10, ...eD, 'Uint8Array'));
      if (!e10.extractable)
        throw TypeError(
          'non-extractable CryptoKey cannot be exported as a JWK'
        );
      let {
        ext: t10,
        key_ops: r10,
        alg: n10,
        use: i2,
        ...o2
      } = await er.subtle.exportKey('jwk', e10);
      return o2;
    };
    async function th(e10) {
      return tf(e10);
    }
    async function tg(e10, t10, r10, n10, i2 = {}) {
      let o2, a2, s2;
      switch ((tr(e10, r10, 'encrypt'), e10)) {
        case 'dir':
          s2 = r10;
          break;
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW': {
          if (!eQ(r10))
            throw new e_(
              'ECDH with the provided key is not allowed or not supported by your javascript runtime'
            );
          let { apu: l2, apv: c2 } = i2,
            { epk: u2 } = i2;
          u2 || (u2 = (await eY(r10)).privateKey);
          let { x: d2, y: p2, crv: f2, kty: h2 } = await th(u2),
            g2 = await eX(
              r10,
              u2,
              'ECDH-ES' === e10 ? t10 : e10,
              'ECDH-ES' === e10 ? e5(t10) : parseInt(e10.slice(-5, -2), 10),
              l2,
              c2
            );
          if (
            ((a2 = { epk: { x: d2, crv: f2, kty: h2 } }),
            'EC' === h2 && (a2.epk.y = p2),
            l2 && (a2.apu = eh(l2)),
            c2 && (a2.apv = eh(c2)),
            'ECDH-ES' === e10)
          ) {
            s2 = g2;
            break;
          }
          s2 = n10 || e8(t10);
          let y2 = e10.slice(-6);
          o2 = await ez(y2, g2, s2);
          break;
        }
        case 'RSA1_5':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
          (s2 = n10 || e8(t10)), (o2 = await e3(e10, r10, s2));
          break;
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW': {
          s2 = n10 || e8(t10);
          let { p2c: l2, p2s: c2 } = i2;
          ({ encryptedKey: o2, ...a2 } = await e0(e10, r10, s2, l2, c2));
          break;
        }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
          (s2 = n10 || e8(t10)), (o2 = await ez(e10, r10, s2));
          break;
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW': {
          s2 = n10 || e8(t10);
          let { iv: l2 } = i2;
          ({ encryptedKey: o2, ...a2 } = await ta(e10, r10, s2, l2));
          break;
        }
        default:
          throw new e_(
            'Invalid or unsupported "alg" (JWE Algorithm) header value'
          );
      }
      return { cek: s2, encryptedKey: o2, parameters: a2 };
    }
    let ty = Symbol();
    class tm {
      constructor(e10) {
        if (!(e10 instanceof Uint8Array))
          throw TypeError('plaintext must be an instance of Uint8Array');
        this._plaintext = e10;
      }
      setKeyManagementParameters(e10) {
        if (this._keyManagementParameters)
          throw TypeError('setKeyManagementParameters can only be called once');
        return (this._keyManagementParameters = e10), this;
      }
      setProtectedHeader(e10) {
        if (this._protectedHeader)
          throw TypeError('setProtectedHeader can only be called once');
        return (this._protectedHeader = e10), this;
      }
      setSharedUnprotectedHeader(e10) {
        if (this._sharedUnprotectedHeader)
          throw TypeError('setSharedUnprotectedHeader can only be called once');
        return (this._sharedUnprotectedHeader = e10), this;
      }
      setUnprotectedHeader(e10) {
        if (this._unprotectedHeader)
          throw TypeError('setUnprotectedHeader can only be called once');
        return (this._unprotectedHeader = e10), this;
      }
      setAdditionalAuthenticatedData(e10) {
        return (this._aad = e10), this;
      }
      setContentEncryptionKey(e10) {
        if (this._cek)
          throw TypeError('setContentEncryptionKey can only be called once');
        return (this._cek = e10), this;
      }
      setInitializationVector(e10) {
        if (this._iv)
          throw TypeError('setInitializationVector can only be called once');
        return (this._iv = e10), this;
      }
      async encrypt(e10, t10) {
        let r10, n10, i2, o2, a2;
        if (
          !this._protectedHeader &&
          !this._unprotectedHeader &&
          !this._sharedUnprotectedHeader
        )
          throw new ek(
            'either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()'
          );
        if (
          !eB(
            this._protectedHeader,
            this._unprotectedHeader,
            this._sharedUnprotectedHeader
          )
        )
          throw new ek(
            'JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint'
          );
        let s2 = {
          ...this._protectedHeader,
          ...this._unprotectedHeader,
          ...this._sharedUnprotectedHeader
        };
        if (
          (tc(
            ek,
            /* @__PURE__ */ new Map(),
            t10?.crit,
            this._protectedHeader,
            s2
          ),
          void 0 !== s2.zip)
        )
          throw new e_(
            'JWE "zip" (Compression Algorithm) Header Parameter is not supported.'
          );
        let { alg: l2, enc: c2 } = s2;
        if ('string' != typeof l2 || !l2)
          throw new ek(
            'JWE "alg" (Algorithm) Header Parameter missing or invalid'
          );
        if ('string' != typeof c2 || !c2)
          throw new ek(
            'JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid'
          );
        if (this._cek && ('dir' === l2 || 'ECDH-ES' === l2))
          throw TypeError(
            `setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${l2}`
          );
        {
          let i3;
          ({
            cek: n10,
            encryptedKey: r10,
            parameters: i3
          } = await tg(l2, c2, e10, this._cek, this._keyManagementParameters)),
            i3 &&
              (t10 && ty in t10
                ? this._unprotectedHeader
                  ? (this._unprotectedHeader = {
                      ...this._unprotectedHeader,
                      ...i3
                    })
                  : this.setUnprotectedHeader(i3)
                : this._protectedHeader
                ? (this._protectedHeader = { ...this._protectedHeader, ...i3 })
                : this.setProtectedHeader(i3));
        }
        (o2 = this._protectedHeader
          ? eo.encode(eh(JSON.stringify(this._protectedHeader)))
          : eo.encode('')),
          this._aad
            ? ((a2 = eh(this._aad)),
              (i2 = es(o2, eo.encode('.'), eo.encode(a2))))
            : (i2 = o2);
        let {
            ciphertext: u2,
            tag: d2,
            iv: p2
          } = await to(c2, this._plaintext, n10, this._iv, i2),
          f2 = { ciphertext: eh(u2) };
        return (
          p2 && (f2.iv = eh(p2)),
          d2 && (f2.tag = eh(d2)),
          r10 && (f2.encrypted_key = eh(r10)),
          a2 && (f2.aad = a2),
          this._protectedHeader && (f2.protected = ea.decode(o2)),
          this._sharedUnprotectedHeader &&
            (f2.unprotected = this._sharedUnprotectedHeader),
          this._unprotectedHeader && (f2.header = this._unprotectedHeader),
          f2
        );
      }
    }
    let tv = (e10) => Math.floor(e10.getTime() / 1e3),
      tb =
        /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i,
      tw = (e10) => {
        let t10;
        let r10 = tb.exec(e10);
        if (!r10 || (r10[4] && r10[1]))
          throw TypeError('Invalid time period format');
        let n10 = parseFloat(r10[2]);
        switch (r10[3].toLowerCase()) {
          case 'sec':
          case 'secs':
          case 'second':
          case 'seconds':
          case 's':
            t10 = Math.round(n10);
            break;
          case 'minute':
          case 'minutes':
          case 'min':
          case 'mins':
          case 'm':
            t10 = Math.round(60 * n10);
            break;
          case 'hour':
          case 'hours':
          case 'hr':
          case 'hrs':
          case 'h':
            t10 = Math.round(3600 * n10);
            break;
          case 'day':
          case 'days':
          case 'd':
            t10 = Math.round(86400 * n10);
            break;
          case 'week':
          case 'weeks':
          case 'w':
            t10 = Math.round(604800 * n10);
            break;
          default:
            t10 = Math.round(31557600 * n10);
        }
        return '-' === r10[1] || 'ago' === r10[4] ? -t10 : t10;
      },
      t_ = (e10) => e10.toLowerCase().replace(/^application\//, ''),
      tS = (e10, t10) =>
        'string' == typeof e10
          ? t10.includes(e10)
          : !!Array.isArray(e10) &&
            t10.some(Set.prototype.has.bind(new Set(e10))),
      tk = (e10, t10, r10 = {}) => {
        let n10, i2;
        let { typ: o2 } = r10;
        if (o2 && ('string' != typeof e10.typ || t_(e10.typ) !== t_(o2)))
          throw new ev(
            'unexpected "typ" JWT header value',
            'typ',
            'check_failed'
          );
        try {
          n10 = JSON.parse(ea.decode(t10));
        } catch {}
        if (!eV(n10))
          throw new ex('JWT Claims Set must be a top-level JSON object');
        let {
            requiredClaims: a2 = [],
            issuer: s2,
            subject: l2,
            audience: c2,
            maxTokenAge: u2
          } = r10,
          d2 = [...a2];
        for (let e11 of (void 0 !== u2 && d2.push('iat'),
        void 0 !== c2 && d2.push('aud'),
        void 0 !== l2 && d2.push('sub'),
        void 0 !== s2 && d2.push('iss'),
        new Set(d2.reverse())))
          if (!(e11 in n10))
            throw new ev(`missing required "${e11}" claim`, e11, 'missing');
        if (s2 && !(Array.isArray(s2) ? s2 : [s2]).includes(n10.iss))
          throw new ev('unexpected "iss" claim value', 'iss', 'check_failed');
        if (l2 && n10.sub !== l2)
          throw new ev('unexpected "sub" claim value', 'sub', 'check_failed');
        if (c2 && !tS(n10.aud, 'string' == typeof c2 ? [c2] : c2))
          throw new ev('unexpected "aud" claim value', 'aud', 'check_failed');
        switch (typeof r10.clockTolerance) {
          case 'string':
            i2 = tw(r10.clockTolerance);
            break;
          case 'number':
            i2 = r10.clockTolerance;
            break;
          case 'undefined':
            i2 = 0;
            break;
          default:
            throw TypeError('Invalid clockTolerance option type');
        }
        let { currentDate: p2 } = r10,
          f2 = tv(p2 || new Date());
        if ((void 0 !== n10.iat || u2) && 'number' != typeof n10.iat)
          throw new ev('"iat" claim must be a number', 'iat', 'invalid');
        if (void 0 !== n10.nbf) {
          if ('number' != typeof n10.nbf)
            throw new ev('"nbf" claim must be a number', 'nbf', 'invalid');
          if (n10.nbf > f2 + i2)
            throw new ev(
              '"nbf" claim timestamp check failed',
              'nbf',
              'check_failed'
            );
        }
        if (void 0 !== n10.exp) {
          if ('number' != typeof n10.exp)
            throw new ev('"exp" claim must be a number', 'exp', 'invalid');
          if (n10.exp <= f2 - i2)
            throw new eb(
              '"exp" claim timestamp check failed',
              'exp',
              'check_failed'
            );
        }
        if (u2) {
          let e11 = f2 - n10.iat;
          if (e11 - i2 > ('number' == typeof u2 ? u2 : tw(u2)))
            throw new eb(
              '"iat" claim timestamp check failed (too far in the past)',
              'iat',
              'check_failed'
            );
          if (e11 < 0 - i2)
            throw new ev(
              '"iat" claim timestamp check failed (it should be in the past)',
              'iat',
              'check_failed'
            );
        }
        return n10;
      };
    async function tx(e10, t10, r10) {
      let n10 = await tp(e10, t10, r10),
        i2 = tk(n10.protectedHeader, n10.plaintext, r10),
        { protectedHeader: o2 } = n10;
      if (void 0 !== o2.iss && o2.iss !== i2.iss)
        throw new ev(
          'replicated "iss" claim header parameter mismatch',
          'iss',
          'mismatch'
        );
      if (void 0 !== o2.sub && o2.sub !== i2.sub)
        throw new ev(
          'replicated "sub" claim header parameter mismatch',
          'sub',
          'mismatch'
        );
      if (
        void 0 !== o2.aud &&
        JSON.stringify(o2.aud) !== JSON.stringify(i2.aud)
      )
        throw new ev(
          'replicated "aud" claim header parameter mismatch',
          'aud',
          'mismatch'
        );
      let a2 = { payload: i2, protectedHeader: o2 };
      return 'function' == typeof t10 ? { ...a2, key: n10.key } : a2;
    }
    class tE {
      constructor(e10) {
        this._flattened = new tm(e10);
      }
      setContentEncryptionKey(e10) {
        return this._flattened.setContentEncryptionKey(e10), this;
      }
      setInitializationVector(e10) {
        return this._flattened.setInitializationVector(e10), this;
      }
      setProtectedHeader(e10) {
        return this._flattened.setProtectedHeader(e10), this;
      }
      setKeyManagementParameters(e10) {
        return this._flattened.setKeyManagementParameters(e10), this;
      }
      async encrypt(e10, t10) {
        let r10 = await this._flattened.encrypt(e10, t10);
        return [
          r10.protected,
          r10.encrypted_key,
          r10.iv,
          r10.ciphertext,
          r10.tag
        ].join('.');
      }
    }
    function tA(e10, t10) {
      if (!Number.isFinite(t10)) throw TypeError(`Invalid ${e10} input`);
      return t10;
    }
    class tC {
      constructor(e10 = {}) {
        if (!eV(e10)) throw TypeError('JWT Claims Set MUST be an object');
        this._payload = e10;
      }
      setIssuer(e10) {
        return (this._payload = { ...this._payload, iss: e10 }), this;
      }
      setSubject(e10) {
        return (this._payload = { ...this._payload, sub: e10 }), this;
      }
      setAudience(e10) {
        return (this._payload = { ...this._payload, aud: e10 }), this;
      }
      setJti(e10) {
        return (this._payload = { ...this._payload, jti: e10 }), this;
      }
      setNotBefore(e10) {
        return (
          'number' == typeof e10
            ? (this._payload = {
                ...this._payload,
                nbf: tA('setNotBefore', e10)
              })
            : e10 instanceof Date
            ? (this._payload = {
                ...this._payload,
                nbf: tA('setNotBefore', tv(e10))
              })
            : (this._payload = {
                ...this._payload,
                nbf: tv(new Date()) + tw(e10)
              }),
          this
        );
      }
      setExpirationTime(e10) {
        return (
          'number' == typeof e10
            ? (this._payload = {
                ...this._payload,
                exp: tA('setExpirationTime', e10)
              })
            : e10 instanceof Date
            ? (this._payload = {
                ...this._payload,
                exp: tA('setExpirationTime', tv(e10))
              })
            : (this._payload = {
                ...this._payload,
                exp: tv(new Date()) + tw(e10)
              }),
          this
        );
      }
      setIssuedAt(e10) {
        return (
          void 0 === e10
            ? (this._payload = { ...this._payload, iat: tv(new Date()) })
            : e10 instanceof Date
            ? (this._payload = {
                ...this._payload,
                iat: tA('setIssuedAt', tv(e10))
              })
            : 'string' == typeof e10
            ? (this._payload = {
                ...this._payload,
                iat: tA('setIssuedAt', tv(new Date()) + tw(e10))
              })
            : (this._payload = {
                ...this._payload,
                iat: tA('setIssuedAt', e10)
              }),
          this
        );
      }
    }
    class tT extends tC {
      setProtectedHeader(e10) {
        if (this._protectedHeader)
          throw TypeError('setProtectedHeader can only be called once');
        return (this._protectedHeader = e10), this;
      }
      setKeyManagementParameters(e10) {
        if (this._keyManagementParameters)
          throw TypeError('setKeyManagementParameters can only be called once');
        return (this._keyManagementParameters = e10), this;
      }
      setContentEncryptionKey(e10) {
        if (this._cek)
          throw TypeError('setContentEncryptionKey can only be called once');
        return (this._cek = e10), this;
      }
      setInitializationVector(e10) {
        if (this._iv)
          throw TypeError('setInitializationVector can only be called once');
        return (this._iv = e10), this;
      }
      replicateIssuerAsHeader() {
        return (this._replicateIssuerAsHeader = true), this;
      }
      replicateSubjectAsHeader() {
        return (this._replicateSubjectAsHeader = true), this;
      }
      replicateAudienceAsHeader() {
        return (this._replicateAudienceAsHeader = true), this;
      }
      async encrypt(e10, t10) {
        let r10 = new tE(eo.encode(JSON.stringify(this._payload)));
        return (
          this._replicateIssuerAsHeader &&
            (this._protectedHeader = {
              ...this._protectedHeader,
              iss: this._payload.iss
            }),
          this._replicateSubjectAsHeader &&
            (this._protectedHeader = {
              ...this._protectedHeader,
              sub: this._payload.sub
            }),
          this._replicateAudienceAsHeader &&
            (this._protectedHeader = {
              ...this._protectedHeader,
              aud: this._payload.aud
            }),
          r10.setProtectedHeader(this._protectedHeader),
          this._iv && r10.setInitializationVector(this._iv),
          this._cek && r10.setContentEncryptionKey(this._cek),
          this._keyManagementParameters &&
            r10.setKeyManagementParameters(this._keyManagementParameters),
          r10.encrypt(e10, t10)
        );
      }
    }
    let tP = (e10, t10) => {
      if ('string' != typeof e10 || !e10)
        throw new eE(`${t10} missing or invalid`);
    };
    async function tO(e10, t10) {
      let r10;
      if (!eV(e10)) throw TypeError('JWK must be an object');
      if (
        (t10 ?? (t10 = 'sha256'),
        'sha256' !== t10 && 'sha384' !== t10 && 'sha512' !== t10)
      )
        throw TypeError(
          'digestAlgorithm must one of "sha256", "sha384", or "sha512"'
        );
      switch (e10.kty) {
        case 'EC':
          tP(e10.crv, '"crv" (Curve) Parameter'),
            tP(e10.x, '"x" (X Coordinate) Parameter'),
            tP(e10.y, '"y" (Y Coordinate) Parameter'),
            (r10 = { crv: e10.crv, kty: e10.kty, x: e10.x, y: e10.y });
          break;
        case 'OKP':
          tP(e10.crv, '"crv" (Subtype of Key Pair) Parameter'),
            tP(e10.x, '"x" (Public Key) Parameter'),
            (r10 = { crv: e10.crv, kty: e10.kty, x: e10.x });
          break;
        case 'RSA':
          tP(e10.e, '"e" (Exponent) Parameter'),
            tP(e10.n, '"n" (Modulus) Parameter'),
            (r10 = { e: e10.e, kty: e10.kty, n: e10.n });
          break;
        case 'oct':
          tP(e10.k, '"k" (Key Value) Parameter'),
            (r10 = { k: e10.k, kty: e10.kty });
          break;
        default:
          throw new e_('"kty" (Key Type) Parameter missing or unsupported');
      }
      let n10 = eo.encode(JSON.stringify(r10));
      return eh(await ei(t10, n10));
    }
    'undefined' != typeof navigator &&
      navigator.userAgent?.startsWith?.('Mozilla/5.0 ');
    var tR = r(52504);
    let tI = () => (Date.now() / 1e3) | 0,
      t$ = 'A256CBC-HS512';
    async function tN(e10) {
      let {
          token: t10 = {},
          secret: r10,
          maxAge: n10 = 2592e3,
          salt: i2
        } = e10,
        o2 = Array.isArray(r10) ? r10 : [r10],
        a2 = await tj(t$, o2[0], i2),
        s2 = await tO({ kty: 'oct', k: eh(a2) }, `sha${a2.byteLength << 3}`);
      return await new tT(t10)
        .setProtectedHeader({ alg: 'dir', enc: t$, kid: s2 })
        .setIssuedAt()
        .setExpirationTime(tI() + n10)
        .setJti(crypto.randomUUID())
        .encrypt(a2);
    }
    async function tU(e10) {
      let { token: t10, secret: r10, salt: n10 } = e10,
        i2 = Array.isArray(r10) ? r10 : [r10];
      if (!t10) return null;
      let { payload: o2 } = await tx(
        t10,
        async ({ kid: e11, enc: t11 }) => {
          for (let r11 of i2) {
            let i3 = await tj(t11, r11, n10);
            if (
              void 0 === e11 ||
              e11 ===
                (await tO(
                  { kty: 'oct', k: eh(i3) },
                  `sha${i3.byteLength << 3}`
                ))
            )
              return i3;
          }
          throw Error('no matching decryption secret');
        },
        {
          clockTolerance: 15,
          keyManagementAlgorithms: ['dir'],
          contentEncryptionAlgorithms: [t$, 'A256GCM']
        }
      );
      return o2;
    }
    async function tj(e10, t10, r10) {
      let n10;
      switch (e10) {
        case 'A256CBC-HS512':
          n10 = 64;
          break;
        case 'A256GCM':
          n10 = 32;
          break;
        default:
          throw Error('Unsupported JWT Content Encryption Algorithm');
      }
      return await et(
        'sha256',
        t10,
        r10,
        `Auth.js Generated Encryption Key (${r10})`,
        n10
      );
    }
    async function tL({ options: e10, paramValue: t10, cookieValue: r10 }) {
      let { url: n10, callbacks: i2 } = e10,
        o2 = n10.origin;
      return (
        t10
          ? (o2 = await i2.redirect({ url: t10, baseUrl: n10.origin }))
          : r10 && (o2 = await i2.redirect({ url: r10, baseUrl: n10.origin })),
        { callbackUrl: o2, callbackUrlCookie: o2 !== r10 ? o2 : void 0 }
      );
    }
    let tM = '\x1B[31m',
      tD = '\x1B[0m',
      tH = {
        error(e10) {
          let t10 = e10 instanceof c ? e10.type : e10.name;
          if (
            (console.error(`${tM}[auth][error]${tD} ${t10}: ${e10.message}`),
            e10.cause &&
              'object' == typeof e10.cause &&
              'err' in e10.cause &&
              e10.cause.err instanceof Error)
          ) {
            let { err: t11, ...r10 } = e10.cause;
            console.error(`${tM}[auth][cause]${tD}:`, t11.stack),
              r10 &&
                console.error(
                  `${tM}[auth][details]${tD}:`,
                  JSON.stringify(r10, null, 2)
                );
          } else
            e10.stack &&
              console.error(e10.stack.replace(/.*/, '').substring(1));
        },
        warn(e10) {
          let t10 = `https://warnings.authjs.dev#${e10}`;
          console.warn(
            `\x1B[33m[auth][warn][${e10}]${tD}`,
            `Read more: ${t10}`
          );
        },
        debug(e10, t10) {
          console.log(
            `\x1B[90m[auth][debug]:${tD} ${e10}`,
            JSON.stringify(t10, null, 2)
          );
        }
      },
      tW = [
        'providers',
        'session',
        'csrf',
        'signin',
        'signout',
        'callback',
        'verify-request',
        'error',
        'webauthn-options'
      ];
    async function tK(e10) {
      if (!('body' in e10) || !e10.body || 'POST' !== e10.method) return;
      let t10 = e10.headers.get('content-type');
      return t10?.includes('application/json')
        ? await e10.json()
        : t10?.includes('application/x-www-form-urlencoded')
        ? Object.fromEntries(new URLSearchParams(await e10.text()))
        : void 0;
    }
    async function tB(e10, t10) {
      try {
        if ('GET' !== e10.method && 'POST' !== e10.method)
          throw new I('Only GET and POST requests are supported.');
        t10.basePath ?? (t10.basePath = '/auth');
        let r10 = new URL(e10.url),
          { action: n10, providerId: i2 } = (function (e11, t11) {
            let r11 = e11.match(RegExp(`^${t11}(.+)`));
            if (null === r11) throw new I(`Cannot parse action at ${e11}`);
            let n11 = r11.at(-1).replace(/^\//, '').split('/').filter(Boolean);
            if (1 !== n11.length && 2 !== n11.length)
              throw new I(`Cannot parse action at ${e11}`);
            let [i3, o2] = n11;
            if (
              !tW.includes(i3) ||
              (o2 && !['signin', 'callback', 'webauthn-options'].includes(i3))
            )
              throw new I(`Cannot parse action at ${e11}`);
            return { action: i3, providerId: o2 };
          })(r10.pathname, t10.basePath);
        return {
          url: r10,
          action: n10,
          providerId: i2,
          method: e10.method,
          headers: Object.fromEntries(e10.headers),
          body: e10.body ? await tK(e10) : void 0,
          cookies: (0, tR.Q)(e10.headers.get('cookie') ?? '') ?? {},
          error: r10.searchParams.get('error') ?? void 0,
          query: Object.fromEntries(r10.searchParams)
        };
      } catch (t11) {
        tH.error(t11), tH.debug('request', e10);
      }
    }
    function tV(e10) {
      let t10 = new Headers(e10.headers);
      e10.cookies?.forEach((e11) => {
        let { name: r11, value: n11, options: i2 } = e11,
          o2 = tR.q(r11, n11, i2);
        t10.has('Set-Cookie')
          ? t10.append('Set-Cookie', o2)
          : t10.set('Set-Cookie', o2);
      });
      let r10 = e10.body;
      'application/json' === t10.get('content-type')
        ? (r10 = JSON.stringify(e10.body))
        : 'application/x-www-form-urlencoded' === t10.get('content-type') &&
          (r10 = new URLSearchParams(e10.body).toString());
      let n10 = new Response(r10, {
        headers: t10,
        status: e10.redirect ? 302 : e10.status ?? 200
      });
      return e10.redirect && n10.headers.set('Location', e10.redirect), n10;
    }
    async function tJ(e10) {
      let t10 = new TextEncoder().encode(e10);
      return Array.from(
        new Uint8Array(await crypto.subtle.digest('SHA-256', t10))
      )
        .map((e11) => e11.toString(16).padStart(2, '0'))
        .join('')
        .toString();
    }
    function tq(e10) {
      let t10 = (e11) => ('0' + e11.toString(16)).slice(-2);
      return Array.from(crypto.getRandomValues(new Uint8Array(e10))).reduce(
        (e11, r10) => e11 + t10(r10),
        ''
      );
    }
    async function tF({
      options: e10,
      cookieValue: t10,
      isPost: r10,
      bodyValue: n10
    }) {
      if (t10) {
        let [i3, o3] = t10.split('|');
        if (o3 === (await tJ(`${i3}${e10.secret}`)))
          return { csrfTokenVerified: r10 && i3 === n10, csrfToken: i3 };
      }
      let i2 = tq(32),
        o2 = await tJ(`${i2}${e10.secret}`);
      return { cookie: `${i2}|${o2}`, csrfToken: i2 };
    }
    function tz(e10, t10) {
      if (!t10) throw new L(`CSRF token was missing during an action ${e10}`);
    }
    function tG(e10) {
      return e10 && 'object' == typeof e10 && !Array.isArray(e10);
    }
    function tX(e10, ...t10) {
      if (!t10.length) return e10;
      let r10 = t10.shift();
      if (tG(e10) && tG(r10))
        for (let t11 in r10)
          tG(r10[t11])
            ? (e10[t11] || Object.assign(e10, { [t11]: {} }),
              tX(e10[t11], r10[t11]))
            : Object.assign(e10, { [t11]: r10[t11] });
      return tX(e10, ...t10);
    }
    let tY = (e10) =>
        tZ({
          id: e10.sub ?? e10.id ?? crypto.randomUUID(),
          name: e10.name ?? e10.nickname ?? e10.preferred_username,
          email: e10.email,
          image: e10.picture
        }),
      tQ = (e10) =>
        tZ({
          access_token: e10.access_token,
          id_token: e10.id_token,
          refresh_token: e10.refresh_token,
          expires_at: e10.expires_at,
          scope: e10.scope,
          token_type: e10.token_type,
          session_state: e10.session_state
        });
    function tZ(e10) {
      let t10 = {};
      for (let [r10, n10] of Object.entries(e10))
        void 0 !== n10 && (t10[r10] = n10);
      return t10;
    }
    function t0(e10, t10) {
      if (!e10 && t10) return;
      if ('string' == typeof e10) return { url: new URL(e10) };
      let r10 = new URL(e10?.url ?? 'https://authjs.dev');
      if (e10?.params != null)
        for (let [t11, n10] of Object.entries(e10.params))
          'claims' === t11 && (n10 = JSON.stringify(n10)),
            r10.searchParams.set(t11, String(n10));
      return { url: r10, request: e10?.request, conform: e10?.conform };
    }
    let t1 = {
      signIn: () => true,
      redirect: ({ url: e10, baseUrl: t10 }) =>
        e10.startsWith('/')
          ? `${t10}${e10}`
          : new URL(e10).origin === t10
          ? e10
          : t10,
      session: ({ session: e10 }) => ({
        user: {
          name: e10.user?.name,
          email: e10.user?.email,
          image: e10.user?.image
        },
        expires: e10.expires?.toISOString?.() ?? e10.expires
      }),
      jwt: ({ token: e10 }) => e10
    };
    async function t2({
      authOptions: e10,
      providerId: t10,
      action: r10,
      url: n10,
      cookies: i2,
      callbackUrl: o2,
      csrfToken: a2,
      csrfDisabled: l2,
      isPost: c2
    }) {
      var u2;
      let { providers: p2, provider: f2 } = (function (e11) {
          let { providerId: t11, options: r11 } = e11,
            n11 = new URL(r11.basePath ?? '/auth', e11.url.origin),
            i3 = e11.providers.map((e12) => {
              let t12 = 'function' == typeof e12 ? e12() : e12,
                { options: i4, ...o3 } = t12,
                a3 = i4?.id ?? o3.id,
                s2 = tX(o3, i4, {
                  signinUrl: `${n11}/signin/${a3}`,
                  callbackUrl: `${n11}/callback/${a3}`
                });
              return 'oauth' === t12.type || 'oidc' === t12.type
                ? (s2.redirectProxyUrl ??
                    (s2.redirectProxyUrl = r11.redirectProxyUrl),
                  (function (e13) {
                    e13.issuer &&
                      (e13.wellKnown ??
                        (e13.wellKnown = `${e13.issuer}/.well-known/openid-configuration`));
                    let t13 = t0(e13.authorization, e13.issuer);
                    t13 &&
                      !t13.url?.searchParams.has('scope') &&
                      t13.url.searchParams.set('scope', 'openid profile email');
                    let r12 = t0(e13.token, e13.issuer),
                      n12 = t0(e13.userinfo, e13.issuer),
                      i5 = e13.checks ?? ['pkce'];
                    return (
                      e13.redirectProxyUrl &&
                        (i5.includes('state') || i5.push('state'),
                        (e13.redirectProxyUrl = `${e13.redirectProxyUrl}/callback/${e13.id}`)),
                      {
                        ...e13,
                        authorization: t13,
                        token: r12,
                        checks: i5,
                        userinfo: n12,
                        profile: e13.profile ?? tY,
                        account: e13.account ?? tQ
                      }
                    );
                  })(s2))
                : s2;
            });
          return {
            providers: i3,
            provider: i3.find(({ id: e12 }) => e12 === t11)
          };
        })({
          providers: e10.providers,
          url: n10,
          providerId: t10,
          options: e10
        }),
        h2 = false;
      if ((f2?.type === 'oauth' || f2?.type === 'oidc') && f2.redirectProxyUrl)
        try {
          h2 = new URL(f2.redirectProxyUrl).origin === n10.origin;
        } catch {
          throw TypeError(
            `redirectProxyUrl must be a valid URL. Received: ${f2.redirectProxyUrl}`
          );
        }
      let y2 = {
          debug: false,
          pages: {},
          theme: {
            colorScheme: 'auto',
            logo: '',
            brandColor: '',
            buttonText: ''
          },
          ...e10,
          url: n10,
          action: r10,
          provider: f2,
          cookies: tX(
            s(e10.useSecureCookies ?? 'https:' === n10.protocol),
            e10.cookies
          ),
          providers: p2,
          session: {
            strategy: e10.adapter ? 'database' : 'jwt',
            maxAge: 2592e3,
            updateAge: 86400,
            generateSessionToken: () => crypto.randomUUID(),
            ...e10.session
          },
          jwt: {
            secret: e10.secret,
            maxAge: e10.session?.maxAge ?? 2592e3,
            encode: tN,
            decode: tU,
            ...e10.jwt
          },
          events: Object.keys((u2 = e10.events ?? {})).reduce(
            (e11, t11) => (
              (e11[t11] = async (...e12) => {
                try {
                  let r11 = u2[t11];
                  return await r11(...e12);
                } catch (e13) {
                  tH.error(new g(e13));
                }
              }),
              e11
            ),
            {}
          ),
          adapter: (function (e11, t11) {
            if (e11)
              return Object.keys(e11).reduce(
                (r11, n11) => (
                  (r11[n11] = async (...r12) => {
                    try {
                      t11.debug(`adapter_${n11}`, { args: r12 });
                      let i3 = e11[n11];
                      return await i3(...r12);
                    } catch (r13) {
                      let e12 = new d(r13);
                      throw (t11.error(e12), e12);
                    }
                  }),
                  r11
                ),
                {}
              );
          })(e10.adapter, tH),
          callbacks: { ...t1, ...e10.callbacks },
          logger: tH,
          callbackUrl: n10.origin,
          isOnRedirectProxy: h2,
          experimental: { ...e10.experimental }
        },
        m2 = [];
      if (l2) y2.csrfTokenVerified = true;
      else {
        let {
          csrfToken: e11,
          cookie: t11,
          csrfTokenVerified: r11
        } = await tF({
          options: y2,
          cookieValue: i2?.[y2.cookies.csrfToken.name],
          isPost: c2,
          bodyValue: a2
        });
        (y2.csrfToken = e11),
          (y2.csrfTokenVerified = r11),
          t11 &&
            m2.push({
              name: y2.cookies.csrfToken.name,
              value: t11,
              options: y2.cookies.csrfToken.options
            });
      }
      let { callbackUrl: v2, callbackUrlCookie: b2 } = await tL({
        options: y2,
        cookieValue: i2?.[y2.cookies.callbackUrl.name],
        paramValue: o2
      });
      return (
        (y2.callbackUrl = v2),
        b2 &&
          m2.push({
            name: y2.cookies.callbackUrl.name,
            value: b2,
            options: y2.cookies.callbackUrl.options
          }),
        { options: y2, cookies: m2 }
      );
    }
    var t4,
      t3,
      t6,
      t5,
      t8,
      t9,
      t7,
      re,
      rt,
      rr,
      rn,
      ri = {},
      ro = [],
      ra = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function rs(e10, t10) {
      for (var r10 in t10) e10[r10] = t10[r10];
      return e10;
    }
    function rl(e10) {
      var t10 = e10.parentNode;
      t10 && t10.removeChild(e10);
    }
    function rc(e10, t10, r10, n10, i2) {
      var o2 = {
        type: e10,
        props: t10,
        key: r10,
        ref: n10,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == i2 ? ++rt : i2
      };
      return null == i2 && null != re.vnode && re.vnode(o2), o2;
    }
    function ru(e10) {
      return e10.children;
    }
    function rd(e10, t10) {
      (this.props = e10), (this.context = t10);
    }
    function rp(e10, t10) {
      if (null == t10)
        return e10.__ ? rp(e10.__, e10.__.__k.indexOf(e10) + 1) : null;
      for (var r10; t10 < e10.__k.length; t10++)
        if (null != (r10 = e10.__k[t10]) && null != r10.__e) return r10.__e;
      return 'function' == typeof e10.type ? rp(e10) : null;
    }
    function rf(e10) {
      ((!e10.__d && (e10.__d = true) && rr.push(e10) && !rh.__r++) ||
        rn !== re.debounceRendering) &&
        ((rn = re.debounceRendering) || setTimeout)(rh);
    }
    function rh() {
      for (var e10; (rh.__r = rr.length); )
        (e10 = rr.sort(function (e11, t10) {
          return e11.__v.__b - t10.__v.__b;
        })),
          (rr = []),
          e10.some(function (e11) {
            var t10, r10, n10, i2, o2;
            e11.__d &&
              ((i2 = (n10 = e11.__v).__e),
              (o2 = e11.__P) &&
                ((t10 = []),
                ((r10 = rs({}, n10)).__v = n10.__v + 1),
                r_(
                  o2,
                  n10,
                  r10,
                  e11.__n,
                  void 0 !== o2.ownerSVGElement,
                  null != n10.__h ? [i2] : null,
                  t10,
                  null == i2 ? rp(n10) : i2,
                  n10.__h
                ),
                rS(t10, n10),
                n10.__e != i2 &&
                  (function e12(t11) {
                    var r11, n11;
                    if (null != (t11 = t11.__) && null != t11.__c) {
                      for (
                        t11.__e = t11.__c.base = null, r11 = 0;
                        r11 < t11.__k.length;
                        r11++
                      )
                        if (null != (n11 = t11.__k[r11]) && null != n11.__e) {
                          t11.__e = t11.__c.base = n11.__e;
                          break;
                        }
                      return e12(t11);
                    }
                  })(n10)));
          });
    }
    function rg(e10, t10, r10, n10, i2, o2, a2, s2, l2, c2) {
      var u2,
        d2,
        p2,
        f2,
        h2,
        g2,
        y2,
        m2 = (n10 && n10.__k) || ro,
        v2 = m2.length;
      for (r10.__k = [], u2 = 0; u2 < t10.length; u2++)
        if (
          null !=
          (f2 = r10.__k[u2] =
            null == (f2 = t10[u2]) || 'boolean' == typeof f2
              ? null
              : 'string' == typeof f2 ||
                'number' == typeof f2 ||
                'bigint' == typeof f2
              ? rc(null, f2, null, null, f2)
              : Array.isArray(f2)
              ? rc(ru, { children: f2 }, null, null, null)
              : f2.__b > 0
              ? rc(f2.type, f2.props, f2.key, f2.ref ? f2.ref : null, f2.__v)
              : f2)
        ) {
          if (
            ((f2.__ = r10),
            (f2.__b = r10.__b + 1),
            null === (p2 = m2[u2]) ||
              (p2 && f2.key == p2.key && f2.type === p2.type))
          )
            m2[u2] = void 0;
          else
            for (d2 = 0; d2 < v2; d2++) {
              if ((p2 = m2[d2]) && f2.key == p2.key && f2.type === p2.type) {
                m2[d2] = void 0;
                break;
              }
              p2 = null;
            }
          r_(e10, f2, (p2 = p2 || ri), i2, o2, a2, s2, l2, c2),
            (h2 = f2.__e),
            (d2 = f2.ref) &&
              p2.ref != d2 &&
              (y2 || (y2 = []),
              p2.ref && y2.push(p2.ref, null, f2),
              y2.push(d2, f2.__c || h2, f2)),
            null != h2
              ? (null == g2 && (g2 = h2),
                'function' == typeof f2.type && f2.__k === p2.__k
                  ? (f2.__d = l2 =
                      (function e11(t11, r11, n11) {
                        for (
                          var i3, o3 = t11.__k, a3 = 0;
                          o3 && a3 < o3.length;
                          a3++
                        )
                          (i3 = o3[a3]) &&
                            ((i3.__ = t11),
                            (r11 =
                              'function' == typeof i3.type
                                ? e11(i3, r11, n11)
                                : ry(n11, i3, i3, o3, i3.__e, r11)));
                        return r11;
                      })(f2, l2, e10))
                  : (l2 = ry(e10, f2, p2, m2, h2, l2)),
                'function' == typeof r10.type && (r10.__d = l2))
              : l2 && p2.__e == l2 && l2.parentNode != e10 && (l2 = rp(p2));
        }
      for (r10.__e = g2, u2 = v2; u2--; )
        null != m2[u2] &&
          (function e11(t11, r11, n11) {
            var i3, o3;
            if (
              (re.unmount && re.unmount(t11),
              (i3 = t11.ref) &&
                ((i3.current && i3.current !== t11.__e) || rk(i3, null, r11)),
              null != (i3 = t11.__c))
            ) {
              if (i3.componentWillUnmount)
                try {
                  i3.componentWillUnmount();
                } catch (e12) {
                  re.__e(e12, r11);
                }
              (i3.base = i3.__P = null), (t11.__c = void 0);
            }
            if ((i3 = t11.__k))
              for (o3 = 0; o3 < i3.length; o3++)
                i3[o3] &&
                  e11(i3[o3], r11, n11 || 'function' != typeof t11.type);
            n11 || null == t11.__e || rl(t11.__e),
              (t11.__ = t11.__e = t11.__d = void 0);
          })(m2[u2], m2[u2]);
      if (y2) for (u2 = 0; u2 < y2.length; u2++) rk(y2[u2], y2[++u2], y2[++u2]);
    }
    function ry(e10, t10, r10, n10, i2, o2) {
      var a2, s2, l2;
      if (void 0 !== t10.__d) (a2 = t10.__d), (t10.__d = void 0);
      else if (null == r10 || i2 != o2 || null == i2.parentNode)
        e: if (null == o2 || o2.parentNode !== e10)
          e10.appendChild(i2), (a2 = null);
        else {
          for (
            s2 = o2, l2 = 0;
            (s2 = s2.nextSibling) && l2 < n10.length;
            l2 += 1
          )
            if (s2 == i2) break e;
          e10.insertBefore(i2, o2), (a2 = o2);
        }
      return void 0 !== a2 ? a2 : i2.nextSibling;
    }
    function rm(e10, t10, r10) {
      '-' === t10[0]
        ? e10.setProperty(t10, r10)
        : (e10[t10] =
            null == r10
              ? ''
              : 'number' != typeof r10 || ra.test(t10)
              ? r10
              : r10 + 'px');
    }
    function rv(e10, t10, r10, n10, i2) {
      var o2;
      e: if ('style' === t10) {
        if ('string' == typeof r10) e10.style.cssText = r10;
        else {
          if (('string' == typeof n10 && (e10.style.cssText = n10 = ''), n10))
            for (t10 in n10) (r10 && t10 in r10) || rm(e10.style, t10, '');
          if (r10)
            for (t10 in r10)
              (n10 && r10[t10] === n10[t10]) || rm(e10.style, t10, r10[t10]);
        }
      } else if ('o' === t10[0] && 'n' === t10[1])
        (o2 = t10 !== (t10 = t10.replace(/Capture$/, ''))),
          (t10 =
            t10.toLowerCase() in e10
              ? t10.toLowerCase().slice(2)
              : t10.slice(2)),
          e10.l || (e10.l = {}),
          (e10.l[t10 + o2] = r10),
          r10
            ? n10 || e10.addEventListener(t10, o2 ? rw : rb, o2)
            : e10.removeEventListener(t10, o2 ? rw : rb, o2);
      else if ('dangerouslySetInnerHTML' !== t10) {
        if (i2) t10 = t10.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
        else if (
          'href' !== t10 &&
          'list' !== t10 &&
          'form' !== t10 &&
          'tabIndex' !== t10 &&
          'download' !== t10 &&
          t10 in e10
        )
          try {
            e10[t10] = null == r10 ? '' : r10;
            break e;
          } catch (e11) {}
        'function' == typeof r10 ||
          (null == r10 || (false === r10 && -1 == t10.indexOf('-'))
            ? e10.removeAttribute(t10)
            : e10.setAttribute(t10, r10));
      }
    }
    function rb(e10) {
      this.l[e10.type + false](re.event ? re.event(e10) : e10);
    }
    function rw(e10) {
      this.l[e10.type + true](re.event ? re.event(e10) : e10);
    }
    function r_(e10, t10, r10, n10, i2, o2, a2, s2, l2) {
      var c2,
        u2,
        d2,
        p2,
        f2,
        h2,
        g2,
        y2,
        m2,
        v2,
        b2,
        w2,
        _2,
        S2,
        k2,
        x2 = t10.type;
      if (void 0 !== t10.constructor) return null;
      null != r10.__h &&
        ((l2 = r10.__h),
        (s2 = t10.__e = r10.__e),
        (t10.__h = null),
        (o2 = [s2])),
        (c2 = re.__b) && c2(t10);
      try {
        e: if ('function' == typeof x2) {
          if (
            ((y2 = t10.props),
            (m2 = (c2 = x2.contextType) && n10[c2.__c]),
            (v2 = c2 ? (m2 ? m2.props.value : c2.__) : n10),
            r10.__c
              ? (g2 = (u2 = t10.__c = r10.__c).__ = u2.__E)
              : ('prototype' in x2 && x2.prototype.render
                  ? (t10.__c = u2 = new x2(y2, v2))
                  : ((t10.__c = u2 = new rd(y2, v2)),
                    (u2.constructor = x2),
                    (u2.render = rx)),
                m2 && m2.sub(u2),
                (u2.props = y2),
                u2.state || (u2.state = {}),
                (u2.context = v2),
                (u2.__n = n10),
                (d2 = u2.__d = true),
                (u2.__h = []),
                (u2._sb = [])),
            null == u2.__s && (u2.__s = u2.state),
            null != x2.getDerivedStateFromProps &&
              (u2.__s == u2.state && (u2.__s = rs({}, u2.__s)),
              rs(u2.__s, x2.getDerivedStateFromProps(y2, u2.__s))),
            (p2 = u2.props),
            (f2 = u2.state),
            d2)
          )
            null == x2.getDerivedStateFromProps &&
              null != u2.componentWillMount &&
              u2.componentWillMount(),
              null != u2.componentDidMount && u2.__h.push(u2.componentDidMount);
          else {
            if (
              (null == x2.getDerivedStateFromProps &&
                y2 !== p2 &&
                null != u2.componentWillReceiveProps &&
                u2.componentWillReceiveProps(y2, v2),
              (!u2.__e &&
                null != u2.shouldComponentUpdate &&
                false === u2.shouldComponentUpdate(y2, u2.__s, v2)) ||
                t10.__v === r10.__v)
            ) {
              for (
                u2.props = y2,
                  u2.state = u2.__s,
                  t10.__v !== r10.__v && (u2.__d = false),
                  u2.__v = t10,
                  t10.__e = r10.__e,
                  t10.__k = r10.__k,
                  t10.__k.forEach(function (e11) {
                    e11 && (e11.__ = t10);
                  }),
                  b2 = 0;
                b2 < u2._sb.length;
                b2++
              )
                u2.__h.push(u2._sb[b2]);
              (u2._sb = []), u2.__h.length && a2.push(u2);
              break e;
            }
            null != u2.componentWillUpdate &&
              u2.componentWillUpdate(y2, u2.__s, v2),
              null != u2.componentDidUpdate &&
                u2.__h.push(function () {
                  u2.componentDidUpdate(p2, f2, h2);
                });
          }
          if (
            ((u2.context = v2),
            (u2.props = y2),
            (u2.__v = t10),
            (u2.__P = e10),
            (w2 = re.__r),
            (_2 = 0),
            'prototype' in x2 && x2.prototype.render)
          ) {
            for (
              u2.state = u2.__s,
                u2.__d = false,
                w2 && w2(t10),
                c2 = u2.render(u2.props, u2.state, u2.context),
                S2 = 0;
              S2 < u2._sb.length;
              S2++
            )
              u2.__h.push(u2._sb[S2]);
            u2._sb = [];
          } else
            do
              (u2.__d = false),
                w2 && w2(t10),
                (c2 = u2.render(u2.props, u2.state, u2.context)),
                (u2.state = u2.__s);
            while (u2.__d && ++_2 < 25);
          (u2.state = u2.__s),
            null != u2.getChildContext &&
              (n10 = rs(rs({}, n10), u2.getChildContext())),
            d2 ||
              null == u2.getSnapshotBeforeUpdate ||
              (h2 = u2.getSnapshotBeforeUpdate(p2, f2)),
            (k2 =
              null != c2 && c2.type === ru && null == c2.key
                ? c2.props.children
                : c2),
            rg(
              e10,
              Array.isArray(k2) ? k2 : [k2],
              t10,
              r10,
              n10,
              i2,
              o2,
              a2,
              s2,
              l2
            ),
            (u2.base = t10.__e),
            (t10.__h = null),
            u2.__h.length && a2.push(u2),
            g2 && (u2.__E = u2.__ = null),
            (u2.__e = false);
        } else
          null == o2 && t10.__v === r10.__v
            ? ((t10.__k = r10.__k), (t10.__e = r10.__e))
            : (t10.__e = (function (e11, t11, r11, n11, i3, o3, a3, s3) {
                var l3,
                  c3,
                  u3,
                  d3 = r11.props,
                  p3 = t11.props,
                  f3 = t11.type,
                  h3 = 0;
                if (('svg' === f3 && (i3 = true), null != o3)) {
                  for (; h3 < o3.length; h3++)
                    if (
                      (l3 = o3[h3]) &&
                      'setAttribute' in l3 == !!f3 &&
                      (f3 ? l3.localName === f3 : 3 === l3.nodeType)
                    ) {
                      (e11 = l3), (o3[h3] = null);
                      break;
                    }
                }
                if (null == e11) {
                  if (null === f3) return document.createTextNode(p3);
                  (e11 = i3
                    ? document.createElementNS('http://www.w3.org/2000/svg', f3)
                    : document.createElement(f3, p3.is && p3)),
                    (o3 = null),
                    (s3 = false);
                }
                if (null === f3)
                  d3 === p3 || (s3 && e11.data === p3) || (e11.data = p3);
                else {
                  if (
                    ((o3 = o3 && t7.call(e11.childNodes)),
                    (c3 = (d3 = r11.props || ri).dangerouslySetInnerHTML),
                    (u3 = p3.dangerouslySetInnerHTML),
                    !s3)
                  ) {
                    if (null != o3)
                      for (d3 = {}, h3 = 0; h3 < e11.attributes.length; h3++)
                        d3[e11.attributes[h3].name] = e11.attributes[h3].value;
                    (u3 || c3) &&
                      ((u3 &&
                        ((c3 && u3.__html == c3.__html) ||
                          u3.__html === e11.innerHTML)) ||
                        (e11.innerHTML = (u3 && u3.__html) || ''));
                  }
                  if (
                    ((function (e12, t12, r12, n12, i4) {
                      var o4;
                      for (o4 in r12)
                        'children' === o4 ||
                          'key' === o4 ||
                          o4 in t12 ||
                          rv(e12, o4, null, r12[o4], n12);
                      for (o4 in t12)
                        (i4 && 'function' != typeof t12[o4]) ||
                          'children' === o4 ||
                          'key' === o4 ||
                          'value' === o4 ||
                          'checked' === o4 ||
                          r12[o4] === t12[o4] ||
                          rv(e12, o4, t12[o4], r12[o4], n12);
                    })(e11, p3, d3, i3, s3),
                    u3)
                  )
                    t11.__k = [];
                  else if (
                    (rg(
                      e11,
                      Array.isArray((h3 = t11.props.children)) ? h3 : [h3],
                      t11,
                      r11,
                      n11,
                      i3 && 'foreignObject' !== f3,
                      o3,
                      a3,
                      o3 ? o3[0] : r11.__k && rp(r11, 0),
                      s3
                    ),
                    null != o3)
                  )
                    for (h3 = o3.length; h3--; ) null != o3[h3] && rl(o3[h3]);
                  s3 ||
                    ('value' in p3 &&
                      void 0 !== (h3 = p3.value) &&
                      (h3 !== e11.value ||
                        ('progress' === f3 && !h3) ||
                        ('option' === f3 && h3 !== d3.value)) &&
                      rv(e11, 'value', h3, d3.value, false),
                    'checked' in p3 &&
                      void 0 !== (h3 = p3.checked) &&
                      h3 !== e11.checked &&
                      rv(e11, 'checked', h3, d3.checked, false));
                }
                return e11;
              })(r10.__e, t10, r10, n10, i2, o2, a2, l2));
        (c2 = re.diffed) && c2(t10);
      } catch (e11) {
        (t10.__v = null),
          (l2 || null != o2) &&
            ((t10.__e = s2), (t10.__h = !!l2), (o2[o2.indexOf(s2)] = null)),
          re.__e(e11, t10, r10);
      }
    }
    function rS(e10, t10) {
      re.__c && re.__c(t10, e10),
        e10.some(function (t11) {
          try {
            (e10 = t11.__h),
              (t11.__h = []),
              e10.some(function (e11) {
                e11.call(t11);
              });
          } catch (e11) {
            re.__e(e11, t11.__v);
          }
        });
    }
    function rk(e10, t10, r10) {
      try {
        'function' == typeof e10 ? e10(t10) : (e10.current = t10);
      } catch (e11) {
        re.__e(e11, r10);
      }
    }
    function rx(e10, t10, r10) {
      return this.constructor(e10, r10);
    }
    function rE(e10, t10) {
      var r10, n10, i2, o2;
      (r10 = e10),
        re.__ && re.__(r10, t10),
        (i2 = (n10 = 'function' == typeof rE)
          ? null
          : (rE && rE.__k) || t10.__k),
        (o2 = []),
        r_(
          t10,
          (r10 = ((!n10 && rE) || t10).__k =
            (function (e11, t11, r11) {
              var n11,
                i3,
                o3,
                a2 = {};
              for (o3 in t11)
                'key' == o3
                  ? (n11 = t11[o3])
                  : 'ref' == o3
                  ? (i3 = t11[o3])
                  : (a2[o3] = t11[o3]);
              if (
                (arguments.length > 2 &&
                  (a2.children =
                    arguments.length > 3 ? t7.call(arguments, 2) : r11),
                'function' == typeof e11 && null != e11.defaultProps)
              )
                for (o3 in e11.defaultProps)
                  void 0 === a2[o3] && (a2[o3] = e11.defaultProps[o3]);
              return rc(e11, a2, n11, i3, null);
            })(ru, null, [r10])),
          i2 || ri,
          ri,
          void 0 !== t10.ownerSVGElement,
          !n10 && rE
            ? [rE]
            : i2
            ? null
            : t10.firstChild
            ? t7.call(t10.childNodes)
            : null,
          o2,
          !n10 && rE ? rE : i2 ? i2.__e : t10.firstChild,
          n10
        ),
        rS(o2, r10);
    }
    (t7 = ro.slice),
      (re = {
        __e: function (e10, t10, r10, n10) {
          for (var i2, o2, a2; (t10 = t10.__); )
            if ((i2 = t10.__c) && !i2.__)
              try {
                if (
                  ((o2 = i2.constructor) &&
                    null != o2.getDerivedStateFromError &&
                    (i2.setState(o2.getDerivedStateFromError(e10)),
                    (a2 = i2.__d)),
                  null != i2.componentDidCatch &&
                    (i2.componentDidCatch(e10, n10 || {}), (a2 = i2.__d)),
                  a2)
                )
                  return (i2.__E = i2);
              } catch (t11) {
                e10 = t11;
              }
          throw e10;
        }
      }),
      (rt = 0),
      (rd.prototype.setState = function (e10, t10) {
        var r10;
        (r10 =
          null != this.__s && this.__s !== this.state
            ? this.__s
            : (this.__s = rs({}, this.state))),
          'function' == typeof e10 && (e10 = e10(rs({}, r10), this.props)),
          e10 && rs(r10, e10),
          null != e10 && this.__v && (t10 && this._sb.push(t10), rf(this));
      }),
      (rd.prototype.forceUpdate = function (e10) {
        this.__v && ((this.__e = true), e10 && this.__h.push(e10), rf(this));
      }),
      (rd.prototype.render = ru),
      (rr = []),
      (rh.__r = 0);
    var rA = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
      rC =
        /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
      rT = /[\s\n\\/='"\0<>]/,
      rP = /^xlink:?./,
      rO = /["&<]/;
    function rR(e10) {
      if (false === rO.test((e10 += ''))) return e10;
      for (var t10 = 0, r10 = 0, n10 = '', i2 = ''; r10 < e10.length; r10++) {
        switch (e10.charCodeAt(r10)) {
          case 34:
            i2 = '&quot;';
            break;
          case 38:
            i2 = '&amp;';
            break;
          case 60:
            i2 = '&lt;';
            break;
          default:
            continue;
        }
        r10 !== t10 && (n10 += e10.slice(t10, r10)),
          (n10 += i2),
          (t10 = r10 + 1);
      }
      return r10 !== t10 && (n10 += e10.slice(t10, r10)), n10;
    }
    var rI = function (e10, t10) {
        return String(e10).replace(/(\n+)/g, '$1' + (t10 || '	'));
      },
      r$ = function (e10, t10, r10) {
        return (
          String(e10).length > (t10 || 40) ||
          (!r10 && -1 !== String(e10).indexOf('\n')) ||
          -1 !== String(e10).indexOf('<')
        );
      },
      rN = {},
      rU = /([A-Z])/g;
    function rj(e10) {
      var t10 = '';
      for (var r10 in e10) {
        var n10 = e10[r10];
        null != n10 &&
          '' !== n10 &&
          (t10 && (t10 += ' '),
          (t10 +=
            '-' == r10[0]
              ? r10
              : rN[r10] || (rN[r10] = r10.replace(rU, '-$1').toLowerCase())),
          (t10 =
            'number' == typeof n10 && false === rA.test(r10)
              ? t10 + ': ' + n10 + 'px;'
              : t10 + ': ' + n10 + ';'));
      }
      return t10 || void 0;
    }
    function rL(e10, t10) {
      return (
        Array.isArray(t10)
          ? t10.reduce(rL, e10)
          : null != t10 && false !== t10 && e10.push(t10),
        e10
      );
    }
    function rM() {
      this.__d = true;
    }
    function rD(e10, t10) {
      return {
        __v: e10,
        context: t10,
        props: e10.props,
        setState: rM,
        forceUpdate: rM,
        __d: true,
        __h: []
      };
    }
    function rH(e10, t10) {
      var r10 = e10.contextType,
        n10 = r10 && t10[r10.__c];
      return null != r10 ? (n10 ? n10.props.value : r10.__) : t10;
    }
    var rW = [],
      rK = { shallow: true };
    rV.render = rV;
    var rB = [];
    function rV(e10, t10, r10) {
      t10 = t10 || {};
      var n10,
        i2 = re.__s;
      return (
        (re.__s = true),
        (n10 =
          r10 &&
          (r10.pretty ||
            r10.voidElements ||
            r10.sortAttributes ||
            r10.shallow ||
            r10.allAttributes ||
            r10.xml ||
            r10.attributeHook)
            ? (function e11(t11, r11, n11, i3, o2, a2) {
                if (null == t11 || 'boolean' == typeof t11) return '';
                if ('object' != typeof t11) return rR(t11);
                var s2 = n11.pretty,
                  l2 = s2 && 'string' == typeof s2 ? s2 : '	';
                if (Array.isArray(t11)) {
                  for (var c2 = '', u2 = 0; u2 < t11.length; u2++)
                    s2 && u2 > 0 && (c2 += '\n'),
                      (c2 += e11(t11[u2], r11, n11, i3, o2, a2));
                  return c2;
                }
                var d2,
                  p2 = t11.type,
                  f2 = t11.props,
                  h2 = false;
                if ('function' == typeof p2) {
                  if (
                    ((h2 = true),
                    !n11.shallow || (!i3 && false !== n11.renderRootComponent))
                  ) {
                    if (p2 === ru) {
                      var g2 = [];
                      return (
                        rL(g2, t11.props.children),
                        e11(
                          g2,
                          r11,
                          n11,
                          false !== n11.shallowHighOrder,
                          o2,
                          a2
                        )
                      );
                    }
                    var y2,
                      m2 = (t11.__c = rD(t11, r11));
                    re.__b && re.__b(t11);
                    var v2 = re.__r;
                    if (
                      p2.prototype &&
                      'function' == typeof p2.prototype.render
                    ) {
                      var b2 = rH(p2, r11);
                      ((m2 = t11.__c = new p2(f2, b2)).__v = t11),
                        (m2._dirty = m2.__d = true),
                        (m2.props = f2),
                        null == m2.state && (m2.state = {}),
                        null == m2._nextState &&
                          null == m2.__s &&
                          (m2._nextState = m2.__s = m2.state),
                        (m2.context = b2),
                        p2.getDerivedStateFromProps
                          ? (m2.state = Object.assign(
                              {},
                              m2.state,
                              p2.getDerivedStateFromProps(m2.props, m2.state)
                            ))
                          : m2.componentWillMount &&
                            (m2.componentWillMount(),
                            (m2.state =
                              m2._nextState !== m2.state
                                ? m2._nextState
                                : m2.__s !== m2.state
                                ? m2.__s
                                : m2.state)),
                        v2 && v2(t11),
                        (y2 = m2.render(m2.props, m2.state, m2.context));
                    } else
                      for (var w2 = rH(p2, r11), _2 = 0; m2.__d && _2++ < 25; )
                        (m2.__d = false),
                          v2 && v2(t11),
                          (y2 = p2.call(t11.__c, f2, w2));
                    return (
                      m2.getChildContext &&
                        (r11 = Object.assign({}, r11, m2.getChildContext())),
                      re.diffed && re.diffed(t11),
                      e11(y2, r11, n11, false !== n11.shallowHighOrder, o2, a2)
                    );
                  }
                  p2 =
                    (d2 = p2).displayName ||
                    (d2 !== Function && d2.name) ||
                    (function (e12) {
                      var t12 = (Function.prototype.toString
                        .call(e12)
                        .match(/^\s*function\s+([^( ]+)/) || '')[1];
                      if (!t12) {
                        for (var r12 = -1, n12 = rW.length; n12--; )
                          if (rW[n12] === e12) {
                            r12 = n12;
                            break;
                          }
                        r12 < 0 && (r12 = rW.push(e12) - 1),
                          (t12 = 'UnnamedComponent' + r12);
                      }
                      return t12;
                    })(d2);
                }
                var S2,
                  k2,
                  x2 = '<' + p2;
                if (f2) {
                  var E2 = Object.keys(f2);
                  n11 && true === n11.sortAttributes && E2.sort();
                  for (var A2 = 0; A2 < E2.length; A2++) {
                    var C2 = E2[A2],
                      T2 = f2[C2];
                    if ('children' !== C2) {
                      if (
                        !rT.test(C2) &&
                        ((n11 && n11.allAttributes) ||
                          ('key' !== C2 &&
                            'ref' !== C2 &&
                            '__self' !== C2 &&
                            '__source' !== C2))
                      ) {
                        if ('defaultValue' === C2) C2 = 'value';
                        else if ('defaultChecked' === C2) C2 = 'checked';
                        else if ('defaultSelected' === C2) C2 = 'selected';
                        else if ('className' === C2) {
                          if (void 0 !== f2.class) continue;
                          C2 = 'class';
                        } else
                          o2 &&
                            rP.test(C2) &&
                            (C2 = C2.toLowerCase().replace(
                              /^xlink:?/,
                              'xlink:'
                            ));
                        if ('htmlFor' === C2) {
                          if (f2.for) continue;
                          C2 = 'for';
                        }
                        'style' === C2 &&
                          T2 &&
                          'object' == typeof T2 &&
                          (T2 = rj(T2)),
                          'a' === C2[0] &&
                            'r' === C2[1] &&
                            'boolean' == typeof T2 &&
                            (T2 = String(T2));
                        var P2 =
                          n11.attributeHook &&
                          n11.attributeHook(C2, T2, r11, n11, h2);
                        if (P2 || '' === P2) x2 += P2;
                        else if ('dangerouslySetInnerHTML' === C2)
                          k2 = T2 && T2.__html;
                        else if ('textarea' === p2 && 'value' === C2) S2 = T2;
                        else if (
                          (T2 || 0 === T2 || '' === T2) &&
                          'function' != typeof T2
                        ) {
                          if (
                            !(
                              (true !== T2 && '' !== T2) ||
                              ((T2 = C2), n11 && n11.xml)
                            )
                          ) {
                            x2 = x2 + ' ' + C2;
                            continue;
                          }
                          if ('value' === C2) {
                            if ('select' === p2) {
                              a2 = T2;
                              continue;
                            }
                            'option' === p2 &&
                              a2 == T2 &&
                              void 0 === f2.selected &&
                              (x2 += ' selected');
                          }
                          x2 = x2 + ' ' + C2 + '="' + rR(T2) + '"';
                        }
                      }
                    } else S2 = T2;
                  }
                }
                if (s2) {
                  var O2 = x2.replace(/\n\s*/, ' ');
                  O2 === x2 || ~O2.indexOf('\n')
                    ? s2 && ~x2.indexOf('\n') && (x2 += '\n')
                    : (x2 = O2);
                }
                if (((x2 += '>'), rT.test(p2)))
                  throw Error(p2 + ' is not a valid HTML tag name in ' + x2);
                var R2,
                  I2 =
                    rC.test(p2) ||
                    (n11.voidElements && n11.voidElements.test(p2)),
                  $2 = [];
                if (k2)
                  s2 && r$(k2) && (k2 = '\n' + l2 + rI(k2, l2)), (x2 += k2);
                else if (null != S2 && rL((R2 = []), S2).length) {
                  for (
                    var N2 = s2 && ~x2.indexOf('\n'), U2 = false, j2 = 0;
                    j2 < R2.length;
                    j2++
                  ) {
                    var L2 = R2[j2];
                    if (null != L2 && false !== L2) {
                      var M2 = e11(
                        L2,
                        r11,
                        n11,
                        true,
                        'svg' === p2 || ('foreignObject' !== p2 && o2),
                        a2
                      );
                      if ((s2 && !N2 && r$(M2) && (N2 = true), M2)) {
                        if (s2) {
                          var D2 = M2.length > 0 && '<' != M2[0];
                          U2 && D2 ? ($2[$2.length - 1] += M2) : $2.push(M2),
                            (U2 = D2);
                        } else $2.push(M2);
                      }
                    }
                  }
                  if (s2 && N2)
                    for (var H2 = $2.length; H2--; )
                      $2[H2] = '\n' + l2 + rI($2[H2], l2);
                }
                if ($2.length || k2) x2 += $2.join('');
                else if (n11 && n11.xml)
                  return x2.substring(0, x2.length - 1) + ' />';
                return (
                  !I2 || R2 || k2
                    ? (s2 && ~x2.indexOf('\n') && (x2 += '\n'),
                      (x2 = x2 + '</' + p2 + '>'))
                    : (x2 = x2.replace(/>$/, ' />')),
                  x2
                );
              })(e10, t10, r10)
            : (function e11(t11, r11, n11, i3) {
                if (null == t11 || true === t11 || false === t11 || '' === t11)
                  return '';
                if ('object' != typeof t11) return rR(t11);
                if (rJ(t11)) {
                  for (var o2 = '', a2 = 0; a2 < t11.length; a2++)
                    o2 += e11(t11[a2], r11, n11, i3);
                  return o2;
                }
                re.__b && re.__b(t11);
                var s2 = t11.type,
                  l2 = t11.props;
                if ('function' == typeof s2) {
                  if (s2 === ru) return e11(t11.props.children, r11, n11, i3);
                  h2 =
                    s2.prototype && 'function' == typeof s2.prototype.render
                      ? ((c2 = r11),
                        (d2 = rH((u2 = t11.type), c2)),
                        (p2 = new u2(t11.props, d2)),
                        (t11.__c = p2),
                        (p2.__v = t11),
                        (p2.__d = true),
                        (p2.props = t11.props),
                        null == p2.state && (p2.state = {}),
                        null == p2.__s && (p2.__s = p2.state),
                        (p2.context = d2),
                        u2.getDerivedStateFromProps
                          ? (p2.state = rq(
                              {},
                              p2.state,
                              u2.getDerivedStateFromProps(p2.props, p2.state)
                            ))
                          : p2.componentWillMount &&
                            (p2.componentWillMount(),
                            (p2.state =
                              p2.__s !== p2.state ? p2.__s : p2.state)),
                        (f2 = re.__r) && f2(t11),
                        p2.render(p2.props, p2.state, p2.context))
                      : (function (e12, t12) {
                          var r12,
                            n12 = rD(e12, t12),
                            i4 = rH(e12.type, t12);
                          e12.__c = n12;
                          for (var o3 = re.__r, a3 = 0; n12.__d && a3++ < 25; )
                            (n12.__d = false),
                              o3 && o3(e12),
                              (r12 = e12.type.call(n12, e12.props, i4));
                          return r12;
                        })(t11, r11);
                  var c2,
                    u2,
                    d2,
                    p2,
                    f2,
                    h2,
                    g2 = t11.__c;
                  g2.getChildContext &&
                    (r11 = rq({}, r11, g2.getChildContext()));
                  var y2 = e11(h2, r11, n11, i3);
                  return re.diffed && re.diffed(t11), y2;
                }
                var m2,
                  v2,
                  b2 = '<';
                if (((b2 += s2), l2))
                  for (var w2 in ((m2 = l2.children), l2)) {
                    var _2,
                      S2,
                      k2,
                      x2 = l2[w2];
                    if (
                      !(
                        'key' === w2 ||
                        'ref' === w2 ||
                        '__self' === w2 ||
                        '__source' === w2 ||
                        'children' === w2 ||
                        ('className' === w2 && 'class' in l2) ||
                        ('htmlFor' === w2 && 'for' in l2) ||
                        rT.test(w2)
                      )
                    ) {
                      if (
                        ((S2 = w2 =
                          'className' === (_2 = w2)
                            ? 'class'
                            : 'htmlFor' === _2
                            ? 'for'
                            : 'defaultValue' === _2
                            ? 'value'
                            : 'defaultChecked' === _2
                            ? 'checked'
                            : 'defaultSelected' === _2
                            ? 'selected'
                            : n11 && rP.test(_2)
                            ? _2.toLowerCase().replace(/^xlink:?/, 'xlink:')
                            : _2),
                        (k2 = x2),
                        (x2 =
                          'style' === S2 && null != k2 && 'object' == typeof k2
                            ? rj(k2)
                            : 'a' === S2[0] &&
                              'r' === S2[1] &&
                              'boolean' == typeof k2
                            ? String(k2)
                            : k2),
                        'dangerouslySetInnerHTML' === w2)
                      )
                        v2 = x2 && x2.__html;
                      else if ('textarea' === s2 && 'value' === w2) m2 = x2;
                      else if (
                        (x2 || 0 === x2 || '' === x2) &&
                        'function' != typeof x2
                      ) {
                        if (true === x2 || '' === x2) {
                          (x2 = w2), (b2 = b2 + ' ' + w2);
                          continue;
                        }
                        if ('value' === w2) {
                          if ('select' === s2) {
                            i3 = x2;
                            continue;
                          }
                          'option' !== s2 ||
                            i3 != x2 ||
                            'selected' in l2 ||
                            (b2 += ' selected');
                        }
                        b2 = b2 + ' ' + w2 + '="' + rR(x2) + '"';
                      }
                    }
                  }
                var E2 = b2;
                if (((b2 += '>'), rT.test(s2)))
                  throw Error(s2 + ' is not a valid HTML tag name in ' + b2);
                var A2 = '',
                  C2 = false;
                if (v2) (A2 += v2), (C2 = true);
                else if ('string' == typeof m2) (A2 += rR(m2)), (C2 = true);
                else if (rJ(m2))
                  for (var T2 = 0; T2 < m2.length; T2++) {
                    var P2 = m2[T2];
                    if (null != P2 && false !== P2) {
                      var O2 = e11(
                        P2,
                        r11,
                        'svg' === s2 || ('foreignObject' !== s2 && n11),
                        i3
                      );
                      O2 && ((A2 += O2), (C2 = true));
                    }
                  }
                else if (null != m2 && false !== m2 && true !== m2) {
                  var R2 = e11(
                    m2,
                    r11,
                    'svg' === s2 || ('foreignObject' !== s2 && n11),
                    i3
                  );
                  R2 && ((A2 += R2), (C2 = true));
                }
                if ((re.diffed && re.diffed(t11), C2)) b2 += A2;
                else if (rC.test(s2)) return E2 + ' />';
                return b2 + '</' + s2 + '>';
              })(e10, t10, false, void 0)),
        re.__c && re.__c(e10, rB),
        (re.__s = i2),
        (rB.length = 0),
        n10
      );
    }
    var rJ = Array.isArray,
      rq = Object.assign;
    rV.shallowRender = function (e10, t10) {
      return rV(e10, t10, rK);
    };
    var rF = 0;
    function rz(e10, t10, r10, n10, i2) {
      var o2,
        a2,
        s2 = {};
      for (a2 in t10) 'ref' == a2 ? (o2 = t10[a2]) : (s2[a2] = t10[a2]);
      var l2 = {
        type: e10,
        props: s2,
        key: r10,
        ref: o2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --rF,
        __source: i2,
        __self: n10
      };
      if ('function' == typeof e10 && (o2 = e10.defaultProps))
        for (a2 in o2) void 0 === s2[a2] && (s2[a2] = o2[a2]);
      return re.vnode && re.vnode(l2), l2;
    }
    async function rG(e10, t10) {
      let r10 = window.SimpleWebAuthnBrowser;
      async function n10(r11) {
        let n11 = new URL(`${e10}/webauthn-options/${t10}`);
        r11 && n11.searchParams.append('action', r11),
          o2().forEach((e11) => {
            n11.searchParams.append(e11.name, e11.value);
          });
        let i3 = await fetch(n11);
        if (!i3.ok) {
          console.error('Failed to fetch options', i3);
          return;
        }
        return i3.json();
      }
      function i2() {
        let e11 = `#${t10}-form`,
          r11 = document.querySelector(e11);
        if (!r11) throw Error(`Form '${e11}' not found`);
        return r11;
      }
      function o2() {
        return Array.from(i2().querySelectorAll('input[data-form-field]'));
      }
      async function a2(e11, t11) {
        let r11 = i2();
        if (e11) {
          let t12 = document.createElement('input');
          (t12.type = 'hidden'),
            (t12.name = 'action'),
            (t12.value = e11),
            r11.appendChild(t12);
        }
        if (t11) {
          let e12 = document.createElement('input');
          (e12.type = 'hidden'),
            (e12.name = 'data'),
            (e12.value = JSON.stringify(t11)),
            r11.appendChild(e12);
        }
        return r11.submit();
      }
      async function s2(e11, t11) {
        let n11 = await r10.startAuthentication(e11, t11);
        return await a2('authenticate', n11);
      }
      async function l2(e11) {
        o2().forEach((e12) => {
          if (e12.required && !e12.value)
            throw Error(`Missing required field: ${e12.name}`);
        });
        let t11 = await r10.startRegistration(e11);
        return await a2('register', t11);
      }
      async function c2() {
        if (!r10.browserSupportsWebAuthnAutofill()) return;
        let e11 = await n10('authenticate');
        if (!e11) {
          console.error('Failed to fetch option for autofill authentication');
          return;
        }
        try {
          await s2(e11.options, true);
        } catch (e12) {
          console.error(e12);
        }
      }
      (async function () {
        let e11 = i2();
        if (!r10.browserSupportsWebAuthn()) {
          e11.style.display = 'none';
          return;
        }
        e11 &&
          e11.addEventListener('submit', async (e12) => {
            e12.preventDefault();
            let t11 = await n10(void 0);
            if (!t11) {
              console.error('Failed to fetch options for form submission');
              return;
            }
            if ('authenticate' === t11.action)
              try {
                await s2(t11.options, false);
              } catch (e13) {
                console.error(e13);
              }
            else if ('register' === t11.action)
              try {
                await l2(t11.options);
              } catch (e13) {
                console.error(e13);
              }
          });
      })(),
        c2();
    }
    let rX = {
        default: 'Unable to sign in.',
        Signin: 'Try signing in with a different account.',
        OAuthSignin: 'Try signing in with a different account.',
        OAuthCallbackError: 'Try signing in with a different account.',
        OAuthCreateAccount: 'Try signing in with a different account.',
        EmailCreateAccount: 'Try signing in with a different account.',
        Callback: 'Try signing in with a different account.',
        OAuthAccountNotLinked:
          'To confirm your identity, sign in with the same account you used originally.',
        EmailSignin: 'The e-mail could not be sent.',
        CredentialsSignin:
          'Sign in failed. Check the details you provided are correct.',
        SessionRequired: 'Please sign in to access this page.'
      },
      rY = `:root {
  --border-width: 1px;
  --border-radius: 0.5rem;
  --color-error: #c94b4b;
  --color-info: #157efb;
  --color-info-hover: #0f6ddb;
  --color-info-text: #fff;
}

.__next-auth-theme-auto,
.__next-auth-theme-light {
  --color-background: #ececec;
  --color-background-hover: rgba(236, 236, 236, 0.8);
  --color-background-card: #fff;
  --color-text: #000;
  --color-primary: #444;
  --color-control-border: #bbb;
  --color-button-active-background: #f9f9f9;
  --color-button-active-border: #aaa;
  --color-separator: #ccc;
}

.__next-auth-theme-dark {
  --color-background: #161b22;
  --color-background-hover: rgba(22, 27, 34, 0.8);
  --color-background-card: #0d1117;
  --color-text: #fff;
  --color-primary: #ccc;
  --color-control-border: #555;
  --color-button-active-background: #060606;
  --color-button-active-border: #666;
  --color-separator: #444;
}

@media (prefers-color-scheme: dark) {
  .__next-auth-theme-auto {
    --color-background: #161b22;
    --color-background-hover: rgba(22, 27, 34, 0.8);
    --color-background-card: #0d1117;
    --color-text: #fff;
    --color-primary: #ccc;
    --color-control-border: #555;
    --color-button-active-background: #060606;
    --color-button-active-border: #666;
    --color-separator: #444;
  }

  button,
  a.button {
    color: var(--provider-dark-color, var(--color-primary)) !important;
    background-color: var(
      --provider-dark-bg,
      var(--color-background)
    ) !important;
  }

    :is(button,a.button):hover {
      background-color: var(
        --provider-dark-bg-hover,
        var(--color-background-hover)
      ) !important;
    }

    :is(button,a.button) span {
      color: var(--provider-dark-bg) !important;
    }
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
}

h1 {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  font-weight: 400;
  color: var(--color-text);
}

p {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  color: var(--color-text);
}

form {
  margin: 0;
  padding: 0;
}

label {
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.25rem;
  display: block;
  color: var(--color-text);
}

input[type] {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: var(--border-width) solid var(--color-control-border);
  background: var(--color-background-card);
  font-size: 1rem;
  border-radius: var(--border-radius);
  color: var(--color-text);
}

p {
  font-size: 1.1rem;
  line-height: 2rem;
}

a.button {
  text-decoration: none;
  line-height: 1rem;
}

a.button:link,
  a.button:visited {
    background-color: var(--color-background);
    color: var(--color-primary);
  }

button span {
  flex-grow: 1;
}

button,
a.button {
  padding: 0.75rem 1rem;
  color: var(--provider-color, var(--color-primary));
  background-color: var(--provider-bg, var(--color-background));
  border: 1px solid #00000031;
  font-size: 0.9rem;
  height: 50px;
  border-radius: var(--border-radius);
  transition: background-color 250ms ease-in-out;
  font-weight: 300;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

:is(button,a.button):hover {
    background-color: var(--provider-bg-hover, var(--color-background-hover));
    cursor: pointer;
  }

:is(button,a.button):active {
    cursor: pointer;
  }

:is(button,a.button) span {
    color: #fff;
  }

:is(button,a.button) #provider-logo {
    width: 25px;
    display: block;
  }

#submitButton {
  color: var(--button-text-color, var(--color-info-text));
  background-color: var(--brand-color, var(--color-info));
  width: 100%;
}

#submitButton:hover {
    background-color: var(
      --button-hover-bg,
      var(--color-info-hover)
    ) !important;
  }

a.site {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1rem;
  line-height: 2rem;
}

a.site:hover {
    text-decoration: underline;
  }

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page > div {
    text-align: center;
  }

.error a.button {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 0.5rem;
  }

.error .message {
    margin-bottom: 1.5rem;
  }

.signin input[type="text"] {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

.signin hr {
    display: block;
    border: 0;
    border-top: 1px solid var(--color-separator);
    margin: 2rem auto 1rem auto;
    overflow: visible;
  }

.signin hr::before {
      content: "or";
      background: var(--color-background-card);
      color: #888;
      padding: 0 0.4rem;
      position: relative;
      top: -0.7rem;
    }

.signin .error {
    background: #f5f5f5;
    font-weight: 500;
    border-radius: 0.3rem;
    background: var(--color-error);
  }

.signin .error p {
      text-align: left;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      line-height: 1.2rem;
      color: var(--color-info-text);
    }

.signin > div,
  .signin form {
    display: block;
  }

.signin > div input[type], .signin form input[type] {
      margin-bottom: 0.5rem;
    }

.signin > div button, .signin form button {
      width: 100%;
    }

.signin .provider + .provider {
    margin-top: 1rem;
  }

.logo {
  display: inline-block;
  max-width: 150px;
  margin: 1.25rem 0;
  max-height: 70px;
}

.card {
  background-color: var(--color-background-card);
  border-radius: 1rem;
  padding: 1.25rem 2rem;
}

.card .header {
    color: var(--color-primary);
  }

.card input[type]::-moz-placeholder {
    color: color-mix(
      in srgb,
      var(--color-text) 20%,
      var(--color-button-active-background)
    );
  }

.card input[type]::placeholder {
    color: color-mix(
      in srgb,
      var(--color-text) 20%,
      var(--color-button-active-background)
    );
  }

.card input[type] {
    background: color-mix(in srgb, var(--color-background-card) 95%, black);
  }

.section-header {
  color: var(--color-text);
}

@media screen and (min-width: 450px) {
  .card {
    margin: 2rem 0;
    width: 368px;
  }
}

@media screen and (max-width: 450px) {
  .card {
    margin: 1rem 0;
    width: 343px;
  }
}
`;
    function rQ({
      html: e10,
      title: t10,
      status: r10,
      cookies: n10,
      theme: i2,
      headTags: o2
    }) {
      return {
        cookies: n10,
        status: r10,
        headers: { 'Content-Type': 'text/html' },
        body: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${rY}</style><title>${t10}</title>${
          o2 ?? ''
        }</head><body class="__next-auth-theme-${
          i2?.colorScheme ?? 'auto'
        }"><div class="page">${rV(e10)}</div></body></html>`
      };
    }
    function rZ(e10) {
      let {
        url: t10,
        theme: r10,
        query: n10,
        cookies: i2,
        pages: o2,
        providers: a2
      } = e10;
      return {
        csrf: (e11, t11, r11) =>
          e11
            ? (t11.logger.warn('csrf-disabled'),
              r11.push({
                name: t11.cookies.csrfToken.name,
                value: '',
                options: { ...t11.cookies.csrfToken.options, maxAge: 0 }
              }),
              { status: 404, cookies: r11 })
            : {
                headers: { 'Content-Type': 'application/json' },
                body: { csrfToken: t11.csrfToken },
                cookies: r11
              },
        providers: (e11) => ({
          headers: { 'Content-Type': 'application/json' },
          body: e11.reduce(
            (
              e12,
              { id: t11, name: r11, type: n11, signinUrl: i3, callbackUrl: o3 }
            ) => (
              (e12[t11] = {
                id: t11,
                name: r11,
                type: n11,
                signinUrl: i3,
                callbackUrl: o3
              }),
              e12
            ),
            {}
          )
        }),
        signin(t11, s2) {
          if (t11) throw new I('Unsupported action');
          if (o2?.signIn) {
            let t12 = `${o2.signIn}${
              o2.signIn.includes('?') ? '&' : '?'
            }${new URLSearchParams({ callbackUrl: e10.callbackUrl ?? '/' })}`;
            return (
              s2 && (t12 = `${t12}&${new URLSearchParams({ error: s2 })}`),
              { redirect: t12, cookies: i2 }
            );
          }
          let l2 = a2?.find(
              (e11) =>
                'webauthn' === e11.type &&
                e11.enableConditionalUI &&
                !!e11.simpleWebAuthnBrowserVersion
            ),
            c2 = '';
          if (l2) {
            let { simpleWebAuthnBrowserVersion: e11 } = l2;
            c2 = `<script src="https://unpkg.com/@simplewebauthn/browser@${e11}/dist/bundle/index.umd.min.js" crossorigin="anonymous"><\/script>`;
          }
          return rQ({
            cookies: i2,
            theme: r10,
            html: (function (e11) {
              let {
                csrfToken: t12,
                providers: r11 = [],
                callbackUrl: n11,
                theme: i3,
                email: o3,
                error: a3
              } = e11;
              'undefined' != typeof document &&
                i3?.brandColor &&
                document.documentElement.style.setProperty(
                  '--brand-color',
                  i3.brandColor
                ),
                'undefined' != typeof document &&
                  i3?.buttonText &&
                  document.documentElement.style.setProperty(
                    '--button-text-color',
                    i3.buttonText
                  );
              let s3 = a3 && (rX[a3] ?? rX.default),
                l3 = r11.find(
                  (e12) => 'webauthn' === e12.type && e12.enableConditionalUI
                )?.id;
              return rz('div', {
                className: 'signin',
                children: [
                  i3?.brandColor &&
                    rz('style', {
                      dangerouslySetInnerHTML: {
                        __html: `:root {--brand-color: ${i3.brandColor}}`
                      }
                    }),
                  i3?.buttonText &&
                    rz('style', {
                      dangerouslySetInnerHTML: {
                        __html: `
        :root {
          --button-text-color: ${i3.buttonText}
        }
      `
                      }
                    }),
                  rz('div', {
                    className: 'card',
                    children: [
                      s3 &&
                        rz('div', {
                          className: 'error',
                          children: rz('p', { children: s3 })
                        }),
                      i3?.logo &&
                        rz('img', {
                          src: i3.logo,
                          alt: 'Logo',
                          className: 'logo'
                        }),
                      r11.map((e12, i4) => {
                        let a4, s4, l4;
                        ('oauth' === e12.type || 'oidc' === e12.type) &&
                          ({
                            bg: a4 = '#fff',
                            brandColor: s4,
                            logo: l4 = `https://authjs.dev/img/providers/${e12.id}.svg`
                          } = e12.style ?? {});
                        let c3 = s4 ?? a4 ?? '#fff';
                        return rz(
                          'div',
                          {
                            className: 'provider',
                            children: [
                              'oauth' === e12.type || 'oidc' === e12.type
                                ? rz('form', {
                                    action: e12.signinUrl,
                                    method: 'POST',
                                    children: [
                                      rz('input', {
                                        type: 'hidden',
                                        name: 'csrfToken',
                                        value: t12
                                      }),
                                      n11 &&
                                        rz('input', {
                                          type: 'hidden',
                                          name: 'callbackUrl',
                                          value: n11
                                        }),
                                      rz('button', {
                                        type: 'submit',
                                        className: 'button',
                                        style: {
                                          '--provider-bg': '#fff',
                                          '--provider-bg-hover': `color-mix(in srgb, ${c3} 30%, #fff)`,
                                          '--provider-dark-bg': '#161b22',
                                          '--provider-dark-bg-hover': `color-mix(in srgb, ${c3} 30%, #000)`
                                        },
                                        tabIndex: 0,
                                        children: [
                                          l4 &&
                                            rz('img', {
                                              loading: 'lazy',
                                              height: 24,
                                              width: 24,
                                              id: 'provider-logo',
                                              src: l4
                                            }),
                                          rz('span', {
                                            style: {
                                              filter:
                                                'invert(1) grayscale(1) brightness(1.3) contrast(9000)',
                                              'mix-blend-mode': 'luminosity',
                                              opacity: 0.95
                                            },
                                            children: [
                                              'Sign in with ',
                                              e12.name
                                            ]
                                          })
                                        ]
                                      })
                                    ]
                                  })
                                : null,
                              ('email' === e12.type ||
                                'credentials' === e12.type ||
                                'webauthn' === e12.type) &&
                                i4 > 0 &&
                                'email' !== r11[i4 - 1].type &&
                                'credentials' !== r11[i4 - 1].type &&
                                'webauthn' !== r11[i4 - 1].type &&
                                rz('hr', {}),
                              'email' === e12.type &&
                                rz('form', {
                                  action: e12.signinUrl,
                                  method: 'POST',
                                  children: [
                                    rz('input', {
                                      type: 'hidden',
                                      name: 'csrfToken',
                                      value: t12
                                    }),
                                    rz('label', {
                                      className: 'section-header',
                                      htmlFor: `input-email-for-${e12.id}-provider`,
                                      children: 'Email'
                                    }),
                                    rz('input', {
                                      id: `input-email-for-${e12.id}-provider`,
                                      autoFocus: true,
                                      type: 'email',
                                      name: 'email',
                                      value: o3,
                                      placeholder: 'email@example.com',
                                      required: true
                                    }),
                                    rz('button', {
                                      id: 'submitButton',
                                      type: 'submit',
                                      tabIndex: 0,
                                      children: ['Sign in with ', e12.name]
                                    })
                                  ]
                                }),
                              'credentials' === e12.type &&
                                rz('form', {
                                  action: e12.callbackUrl,
                                  method: 'POST',
                                  children: [
                                    rz('input', {
                                      type: 'hidden',
                                      name: 'csrfToken',
                                      value: t12
                                    }),
                                    Object.keys(e12.credentials).map((t13) =>
                                      rz(
                                        'div',
                                        {
                                          children: [
                                            rz('label', {
                                              className: 'section-header',
                                              htmlFor: `input-${t13}-for-${e12.id}-provider`,
                                              children:
                                                e12.credentials[t13].label ??
                                                t13
                                            }),
                                            rz('input', {
                                              name: t13,
                                              id: `input-${t13}-for-${e12.id}-provider`,
                                              type:
                                                e12.credentials[t13].type ??
                                                'text',
                                              placeholder:
                                                e12.credentials[t13]
                                                  .placeholder ?? '',
                                              ...e12.credentials[t13]
                                            })
                                          ]
                                        },
                                        `input-group-${e12.id}`
                                      )
                                    ),
                                    rz('button', {
                                      id: 'submitButton',
                                      type: 'submit',
                                      tabIndex: 0,
                                      children: ['Sign in with ', e12.name]
                                    })
                                  ]
                                }),
                              'webauthn' === e12.type &&
                                rz('form', {
                                  action: e12.callbackUrl,
                                  method: 'POST',
                                  id: `${e12.id}-form`,
                                  children: [
                                    rz('input', {
                                      type: 'hidden',
                                      name: 'csrfToken',
                                      value: t12
                                    }),
                                    Object.keys(e12.formFields).map((t13) =>
                                      rz(
                                        'div',
                                        {
                                          children: [
                                            rz('label', {
                                              className: 'section-header',
                                              htmlFor: `input-${t13}-for-${e12.id}-provider`,
                                              children:
                                                e12.formFields[t13].label ?? t13
                                            }),
                                            rz('input', {
                                              name: t13,
                                              'data-form-field': true,
                                              id: `input-${t13}-for-${e12.id}-provider`,
                                              type:
                                                e12.formFields[t13].type ??
                                                'text',
                                              placeholder:
                                                e12.formFields[t13]
                                                  .placeholder ?? '',
                                              ...e12.formFields[t13]
                                            })
                                          ]
                                        },
                                        `input-group-${e12.id}`
                                      )
                                    ),
                                    rz('button', {
                                      id: `submitButton-${e12.id}`,
                                      type: 'submit',
                                      tabIndex: 0,
                                      children: ['Sign in with ', e12.name]
                                    })
                                  ]
                                }),
                              ('email' === e12.type ||
                                'credentials' === e12.type ||
                                'webauthn' === e12.type) &&
                                i4 + 1 < r11.length &&
                                rz('hr', {})
                            ]
                          },
                          e12.id
                        );
                      })
                    ]
                  }),
                  l3 &&
                    rz(ru, {
                      children: rz('script', {
                        dangerouslySetInnerHTML: {
                          __html: `
const currentURL = window.location.href;
const authURL = currentURL.substring(0, currentURL.lastIndexOf('/'));
(${rG})(authURL, "${l3}");
`
                        }
                      })
                    })
                ]
              });
            })({
              csrfToken: e10.csrfToken,
              providers: e10.providers?.filter(
                (e11) =>
                  ['email', 'oauth', 'oidc'].includes(e11.type) ||
                  ('credentials' === e11.type && e11.credentials) ||
                  ('webauthn' === e11.type && e11.formFields) ||
                  false
              ),
              callbackUrl: e10.callbackUrl,
              theme: e10.theme,
              error: s2,
              ...n10
            }),
            title: 'Sign In',
            headTags: c2
          });
        },
        signout: () =>
          o2?.signOut
            ? { redirect: o2.signOut, cookies: i2 }
            : rQ({
                cookies: i2,
                theme: r10,
                html: (function (e11) {
                  let { url: t11, csrfToken: r11, theme: n11 } = e11;
                  return rz('div', {
                    className: 'signout',
                    children: [
                      n11?.brandColor &&
                        rz('style', {
                          dangerouslySetInnerHTML: {
                            __html: `
        :root {
          --brand-color: ${n11.brandColor}
        }
      `
                          }
                        }),
                      n11?.buttonText &&
                        rz('style', {
                          dangerouslySetInnerHTML: {
                            __html: `
        :root {
          --button-text-color: ${n11.buttonText}
        }
      `
                          }
                        }),
                      rz('div', {
                        className: 'card',
                        children: [
                          n11?.logo &&
                            rz('img', {
                              src: n11.logo,
                              alt: 'Logo',
                              className: 'logo'
                            }),
                          rz('h1', { children: 'Signout' }),
                          rz('p', {
                            children: 'Are you sure you want to sign out?'
                          }),
                          rz('form', {
                            action: t11?.toString(),
                            method: 'POST',
                            children: [
                              rz('input', {
                                type: 'hidden',
                                name: 'csrfToken',
                                value: r11
                              }),
                              rz('button', {
                                id: 'submitButton',
                                type: 'submit',
                                children: 'Sign out'
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  });
                })({ csrfToken: e10.csrfToken, url: t10, theme: r10 }),
                title: 'Sign Out'
              }),
        verifyRequest: (e11) =>
          o2?.verifyRequest
            ? { redirect: o2.verifyRequest, cookies: i2 }
            : rQ({
                cookies: i2,
                theme: r10,
                html: (function (e12) {
                  let { url: t11, theme: r11 } = e12;
                  return rz('div', {
                    className: 'verify-request',
                    children: [
                      r11.brandColor &&
                        rz('style', {
                          dangerouslySetInnerHTML: {
                            __html: `
        :root {
          --brand-color: ${r11.brandColor}
        }
      `
                          }
                        }),
                      rz('div', {
                        className: 'card',
                        children: [
                          r11.logo &&
                            rz('img', {
                              src: r11.logo,
                              alt: 'Logo',
                              className: 'logo'
                            }),
                          rz('h1', { children: 'Check your email' }),
                          rz('p', {
                            children:
                              'A sign in link has been sent to your email address.'
                          }),
                          rz('p', {
                            children: rz('a', {
                              className: 'site',
                              href: t11.origin,
                              children: t11.host
                            })
                          })
                        ]
                      })
                    ]
                  });
                })({ url: t10, theme: r10, ...e11 }),
                title: 'Verify Request'
              }),
        error: (e11) =>
          o2?.error
            ? {
                redirect: `${o2.error}${
                  o2.error.includes('?') ? '&' : '?'
                }error=${e11}`,
                cookies: i2
              }
            : rQ({
                cookies: i2,
                theme: r10,
                ...(function (e12) {
                  let { url: t11, error: r11 = 'default', theme: n11 } = e12,
                    i3 = `${t11}/signin`,
                    o3 = {
                      default: {
                        status: 200,
                        heading: 'Error',
                        message: rz('p', {
                          children: rz('a', {
                            className: 'site',
                            href: t11?.origin,
                            children: t11?.host
                          })
                        })
                      },
                      Configuration: {
                        status: 500,
                        heading: 'Server error',
                        message: rz('div', {
                          children: [
                            rz('p', {
                              children:
                                'There is a problem with the server configuration.'
                            }),
                            rz('p', {
                              children:
                                'Check the server logs for more information.'
                            })
                          ]
                        })
                      },
                      AccessDenied: {
                        status: 403,
                        heading: 'Access Denied',
                        message: rz('div', {
                          children: [
                            rz('p', {
                              children: 'You do not have permission to sign in.'
                            }),
                            rz('p', {
                              children: rz('a', {
                                className: 'button',
                                href: i3,
                                children: 'Sign in'
                              })
                            })
                          ]
                        })
                      },
                      Verification: {
                        status: 403,
                        heading: 'Unable to sign in',
                        message: rz('div', {
                          children: [
                            rz('p', {
                              children: 'The sign in link is no longer valid.'
                            }),
                            rz('p', {
                              children:
                                'It may have been used already or it may have expired.'
                            })
                          ]
                        }),
                        signin: rz('a', {
                          className: 'button',
                          href: i3,
                          children: 'Sign in'
                        })
                      }
                    },
                    {
                      status: a3,
                      heading: s2,
                      message: l2,
                      signin: c2
                    } = o3[r11] ?? o3.default;
                  return {
                    status: a3,
                    html: rz('div', {
                      className: 'error',
                      children: [
                        n11?.brandColor &&
                          rz('style', {
                            dangerouslySetInnerHTML: {
                              __html: `
        :root {
          --brand-color: ${n11?.brandColor}
        }
      `
                            }
                          }),
                        rz('div', {
                          className: 'card',
                          children: [
                            n11?.logo &&
                              rz('img', {
                                src: n11?.logo,
                                alt: 'Logo',
                                className: 'logo'
                              }),
                            rz('h1', { children: s2 }),
                            rz('div', { className: 'message', children: l2 }),
                            c2
                          ]
                        })
                      ]
                    })
                  };
                })({ url: t10, theme: r10, error: e11 }),
                title: 'Error'
              })
      };
    }
    function r0(e10, t10 = Date.now()) {
      return new Date(t10 + 1e3 * e10);
    }
    async function r1(e10, t10, r10, n10) {
      if (!r10?.providerAccountId || !r10.type)
        throw Error('Missing or invalid provider account');
      if (!['email', 'oauth', 'oidc', 'webauthn'].includes(r10.type))
        throw Error('Provider not supported');
      let {
        adapter: i2,
        jwt: o2,
        events: a2,
        session: { strategy: s2, generateSessionToken: l2 }
      } = n10;
      if (!i2) return { user: t10, account: r10 };
      let c2 = r10,
        {
          createUser: u2,
          updateUser: d2,
          getUser: p2,
          getUserByAccount: f2,
          getUserByEmail: h2,
          linkAccount: g2,
          createSession: y2,
          getSessionAndUser: m2,
          deleteSession: v2
        } = i2,
        b2 = null,
        w2 = null,
        _2 = false,
        S2 = 'jwt' === s2;
      if (e10) {
        if (S2)
          try {
            let t11 = n10.cookies.sessionToken.name;
            (b2 = await o2.decode({ ...o2, token: e10, salt: t11 })) &&
              'sub' in b2 &&
              b2.sub &&
              (w2 = await p2(b2.sub));
          } catch {}
        else {
          let t11 = await m2(e10);
          t11 && ((b2 = t11.session), (w2 = t11.user));
        }
      }
      if ('email' === c2.type) {
        let r11 = await h2(t10.email);
        return (
          r11
            ? (w2?.id !== r11.id && !S2 && e10 && (await v2(e10)),
              (w2 = await d2({ id: r11.id, emailVerified: new Date() })),
              await a2.updateUser?.({ user: w2 }))
            : ((w2 = await u2({ ...t10, emailVerified: new Date() })),
              await a2.createUser?.({ user: w2 }),
              (_2 = true)),
          {
            session: (b2 = S2
              ? {}
              : await y2({
                  sessionToken: l2(),
                  userId: w2.id,
                  expires: r0(n10.session.maxAge)
                })),
            user: w2,
            isNewUser: _2
          }
        );
      }
      if ('webauthn' === c2.type) {
        let e11 = await f2({
          providerAccountId: c2.providerAccountId,
          provider: c2.provider
        });
        if (e11) {
          if (w2) {
            if (e11.id === w2.id) {
              let e12 = { ...c2, userId: w2.id };
              return { session: b2, user: w2, isNewUser: _2, account: e12 };
            }
            throw new K('The account is already associated with another user', {
              provider: c2.provider
            });
          }
          b2 = S2
            ? {}
            : await y2({
                sessionToken: l2(),
                userId: e11.id,
                expires: r0(n10.session.maxAge)
              });
          let t11 = { ...c2, userId: e11.id };
          return { session: b2, user: e11, isNewUser: _2, account: t11 };
        }
        {
          if (w2) {
            await g2({ ...c2, userId: w2.id }),
              await a2.linkAccount?.({ user: w2, account: c2, profile: t10 });
            let e13 = { ...c2, userId: w2.id };
            return { session: b2, user: w2, isNewUser: _2, account: e13 };
          }
          if (t10.email ? await h2(t10.email) : null)
            throw new K(
              'Another account already exists with the same e-mail address',
              { provider: c2.provider }
            );
          (w2 = await u2({ ...t10 })),
            await a2.createUser?.({ user: w2 }),
            await g2({ ...c2, userId: w2.id }),
            await a2.linkAccount?.({ user: w2, account: c2, profile: t10 }),
            (b2 = S2
              ? {}
              : await y2({
                  sessionToken: l2(),
                  userId: w2.id,
                  expires: r0(n10.session.maxAge)
                }));
          let e12 = { ...c2, userId: w2.id };
          return { session: b2, user: w2, isNewUser: true, account: e12 };
        }
      }
      let k2 = await f2({
        providerAccountId: c2.providerAccountId,
        provider: c2.provider
      });
      if (k2) {
        if (w2) {
          if (k2.id === w2.id) return { session: b2, user: w2, isNewUser: _2 };
          throw new E('The account is already associated with another user', {
            provider: c2.provider
          });
        }
        return {
          session: (b2 = S2
            ? {}
            : await y2({
                sessionToken: l2(),
                userId: k2.id,
                expires: r0(n10.session.maxAge)
              })),
          user: k2,
          isNewUser: _2
        };
      }
      {
        let { provider: e11 } = n10,
          {
            type: r11,
            provider: i3,
            providerAccountId: o3,
            userId: s3,
            ...d3
          } = c2;
        if (
          ((c2 = Object.assign(e11.account(d3) ?? {}, {
            providerAccountId: o3,
            provider: i3,
            type: r11,
            userId: s3
          })),
          w2)
        )
          return (
            await g2({ ...c2, userId: w2.id }),
            await a2.linkAccount?.({ user: w2, account: c2, profile: t10 }),
            { session: b2, user: w2, isNewUser: _2 }
          );
        let p3 = t10.email ? await h2(t10.email) : null;
        if (p3) {
          let e12 = n10.provider;
          if (e12?.allowDangerousEmailAccountLinking) w2 = p3;
          else
            throw new E(
              'Another account already exists with the same e-mail address',
              { provider: c2.provider }
            );
        } else w2 = await u2({ ...t10, emailVerified: null });
        return (
          await a2.createUser?.({ user: w2 }),
          await g2({ ...c2, userId: w2.id }),
          await a2.linkAccount?.({ user: w2, account: c2, profile: t10 }),
          {
            session: (b2 = S2
              ? {}
              : await y2({
                  sessionToken: l2(),
                  userId: w2.id,
                  expires: r0(n10.session.maxAge)
                })),
            user: w2,
            isNewUser: true
          }
        );
      }
    }
    function r2(e10, t10) {
      if (null == e10) return false;
      try {
        return (
          e10 instanceof t10 ||
          Object.getPrototypeOf(e10)[Symbol.toStringTag] ===
            t10.prototype[Symbol.toStringTag]
        );
      } catch {
        return false;
      }
    }
    ('undefined' != typeof navigator &&
      navigator.userAgent?.startsWith?.('Mozilla/5.0 ')) ||
      (n = 'oauth4webapi/v2.10.4');
    let r4 = Symbol(),
      r3 = Symbol(),
      r6 = Symbol(),
      r5 = Symbol(),
      r8 = new TextEncoder(),
      r9 = new TextDecoder();
    function r7(e10) {
      return 'string' == typeof e10 ? r8.encode(e10) : r9.decode(e10);
    }
    function ne(e10) {
      return 'string' == typeof e10
        ? (function (e11) {
            try {
              let t10 = atob(
                  e11.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '')
                ),
                r10 = new Uint8Array(t10.length);
              for (let e12 = 0; e12 < t10.length; e12++)
                r10[e12] = t10.charCodeAt(e12);
              return r10;
            } catch (e12) {
              throw new ni(
                'The input to be decoded is not correctly encoded.',
                { cause: e12 }
              );
            }
          })(e10)
        : (function (e11) {
            e11 instanceof ArrayBuffer && (e11 = new Uint8Array(e11));
            let t10 = [];
            for (let r10 = 0; r10 < e11.byteLength; r10 += 32768)
              t10.push(
                String.fromCharCode.apply(null, e11.subarray(r10, r10 + 32768))
              );
            return btoa(t10.join(''))
              .replace(/=/g, '')
              .replace(/\+/g, '-')
              .replace(/\//g, '_');
          })(e10);
    }
    class nt {
      constructor(e10) {
        (this.cache = /* @__PURE__ */ new Map()),
          (this._cache = /* @__PURE__ */ new Map()),
          (this.maxSize = e10);
      }
      get(e10) {
        let t10 = this.cache.get(e10);
        return (
          t10 ||
          ((t10 = this._cache.get(e10)) ? (this.update(e10, t10), t10) : void 0)
        );
      }
      has(e10) {
        return this.cache.has(e10) || this._cache.has(e10);
      }
      set(e10, t10) {
        return (
          this.cache.has(e10)
            ? this.cache.set(e10, t10)
            : this.update(e10, t10),
          this
        );
      }
      delete(e10) {
        return this.cache.has(e10)
          ? this.cache.delete(e10)
          : !!this._cache.has(e10) && this._cache.delete(e10);
      }
      update(e10, t10) {
        this.cache.set(e10, t10),
          this.cache.size >= this.maxSize &&
            ((this._cache = this.cache),
            (this.cache = /* @__PURE__ */ new Map()));
      }
    }
    class nr extends Error {
      constructor(e10) {
        super(e10 ?? 'operation not supported'),
          (this.name = this.constructor.name),
          Error.captureStackTrace?.(this, this.constructor);
      }
    }
    class nn extends Error {
      constructor(e10, t10) {
        super(e10, t10),
          (this.name = this.constructor.name),
          Error.captureStackTrace?.(this, this.constructor);
      }
    }
    let ni = nn,
      no = new nt(100);
    function na(e10) {
      return e10 instanceof CryptoKey;
    }
    function ns(e10) {
      return na(e10) && 'private' === e10.type;
    }
    function nl(e10) {
      try {
        let t10 = e10.headers.get('dpop-nonce');
        t10 && no.set(new URL(e10.url).origin, t10);
      } catch {}
      return e10;
    }
    function nc(e10) {
      return !(null === e10 || 'object' != typeof e10 || Array.isArray(e10));
    }
    function nu(e10) {
      r2(e10, Headers) && (e10 = Object.fromEntries(e10.entries()));
      let t10 = new Headers(e10);
      if (
        (n && !t10.has('user-agent') && t10.set('user-agent', n),
        t10.has('authorization'))
      )
        throw TypeError(
          '"options.headers" must not include the "authorization" header name'
        );
      if (t10.has('dpop'))
        throw TypeError(
          '"options.headers" must not include the "dpop" header name'
        );
      return t10;
    }
    function nd(e10) {
      if (
        ('function' == typeof e10 && (e10 = e10()),
        !(e10 instanceof AbortSignal))
      )
        throw TypeError(
          '"options.signal" must return or be an instance of AbortSignal'
        );
      return e10;
    }
    async function np(e10, t10) {
      if (!(e10 instanceof URL))
        throw TypeError('"issuerIdentifier" must be an instance of URL');
      if ('https:' !== e10.protocol && 'http:' !== e10.protocol)
        throw TypeError('"issuer.protocol" must be "https:" or "http:"');
      let r10 = new URL(e10.href);
      switch (t10?.algorithm) {
        case void 0:
        case 'oidc':
          r10.pathname =
            `${r10.pathname}/.well-known/openid-configuration`.replace(
              '//',
              '/'
            );
          break;
        case 'oauth2':
          '/' === r10.pathname
            ? (r10.pathname = '.well-known/oauth-authorization-server')
            : (r10.pathname =
                `.well-known/oauth-authorization-server/${r10.pathname}`.replace(
                  '//',
                  '/'
                ));
          break;
        default:
          throw TypeError(
            '"options.algorithm" must be "oidc" (default), or "oauth2"'
          );
      }
      let n10 = nu(t10?.headers);
      return (
        n10.set('accept', 'application/json'),
        (t10?.[r6] || fetch)(r10.href, {
          headers: Object.fromEntries(n10.entries()),
          method: 'GET',
          redirect: 'manual',
          signal: t10?.signal ? nd(t10.signal) : null
        }).then(nl)
      );
    }
    function nf(e10) {
      return 'string' == typeof e10 && 0 !== e10.length;
    }
    async function nh(e10, t10) {
      let r10;
      if (!(e10 instanceof URL))
        throw TypeError('"expectedIssuer" must be an instance of URL');
      if (!r2(t10, Response))
        throw TypeError('"response" must be an instance of Response');
      if (200 !== t10.status)
        throw new ni(
          '"response" is not a conform Authorization Server Metadata response'
        );
      n1(t10);
      try {
        r10 = await t10.json();
      } catch (e11) {
        throw new ni('failed to parse "response" body as JSON', { cause: e11 });
      }
      if (!nc(r10)) throw new ni('"response" body must be a top level object');
      if (!nf(r10.issuer))
        throw new ni(
          '"response" body "issuer" property must be a non-empty string'
        );
      if (new URL(r10.issuer).href !== e10.href)
        throw new ni(
          '"response" body "issuer" does not match "expectedIssuer"'
        );
      return r10;
    }
    function ng() {
      return ne(crypto.getRandomValues(new Uint8Array(32)));
    }
    async function ny(e10) {
      if (!nf(e10))
        throw TypeError('"codeVerifier" must be a non-empty string');
      return ne(await crypto.subtle.digest('SHA-256', r7(e10)));
    }
    function nm(e10) {
      return encodeURIComponent(e10).replace(/%20/g, '+');
    }
    function nv(e10) {
      switch (e10.algorithm.name) {
        case 'RSA-PSS':
          return (function (e11) {
            switch (e11.algorithm.hash.name) {
              case 'SHA-256':
                return 'PS256';
              case 'SHA-384':
                return 'PS384';
              case 'SHA-512':
                return 'PS512';
              default:
                throw new nr('unsupported RsaHashedKeyAlgorithm hash name');
            }
          })(e10);
        case 'RSASSA-PKCS1-v1_5':
          return (function (e11) {
            switch (e11.algorithm.hash.name) {
              case 'SHA-256':
                return 'RS256';
              case 'SHA-384':
                return 'RS384';
              case 'SHA-512':
                return 'RS512';
              default:
                throw new nr('unsupported RsaHashedKeyAlgorithm hash name');
            }
          })(e10);
        case 'ECDSA':
          return (function (e11) {
            switch (e11.algorithm.namedCurve) {
              case 'P-256':
                return 'ES256';
              case 'P-384':
                return 'ES384';
              case 'P-521':
                return 'ES512';
              default:
                throw new nr('unsupported EcKeyAlgorithm namedCurve');
            }
          })(e10);
        case 'Ed25519':
        case 'Ed448':
          return 'EdDSA';
        default:
          throw new nr('unsupported CryptoKey algorithm name');
      }
    }
    function nb(e10) {
      let t10 = e10?.[r4];
      return 'number' == typeof t10 && Number.isFinite(t10) ? t10 : 0;
    }
    function nw(e10) {
      let t10 = e10?.[r3];
      return 'number' == typeof t10 &&
        Number.isFinite(t10) &&
        -1 !== Math.sign(t10)
        ? t10
        : 30;
    }
    function n_() {
      return Math.floor(Date.now() / 1e3);
    }
    async function nS(e10, t10, r10, n10) {
      return nP(
        { alg: nv(r10), kid: n10 },
        (function (e11, t11) {
          let r11 = n_() + nb(t11);
          return {
            jti: ng(),
            aud: [e11.issuer, e11.token_endpoint],
            exp: r11 + 60,
            iat: r11,
            nbf: r11,
            iss: t11.client_id,
            sub: t11.client_id
          };
        })(e10, t10),
        r10
      );
    }
    function nk(e10) {
      if ('object' != typeof e10 || null === e10)
        throw TypeError('"as" must be an object');
      if (!nf(e10.issuer))
        throw TypeError('"as.issuer" property must be a non-empty string');
      return true;
    }
    function nx(e10) {
      if ('object' != typeof e10 || null === e10)
        throw TypeError('"client" must be an object');
      if (!nf(e10.client_id))
        throw TypeError(
          '"client.client_id" property must be a non-empty string'
        );
      return true;
    }
    function nE(e10) {
      if (!nf(e10))
        throw TypeError(
          '"client.client_secret" property must be a non-empty string'
        );
      return e10;
    }
    function nA(e10, t10) {
      if (void 0 !== t10)
        throw TypeError(
          `"options.clientPrivateKey" property must not be provided when ${e10} client authentication method is used.`
        );
    }
    function nC(e10, t10) {
      if (void 0 !== t10)
        throw TypeError(
          `"client.client_secret" property must not be provided when ${e10} client authentication method is used.`
        );
    }
    async function nT(e10, t10, r10, n10, i2) {
      switch (
        (r10.delete('client_secret'),
        r10.delete('client_assertion_type'),
        r10.delete('client_assertion'),
        t10.token_endpoint_auth_method)
      ) {
        case void 0:
        case 'client_secret_basic':
          nA('client_secret_basic', i2),
            n10.set(
              'authorization',
              (function (e11, t11) {
                let r11 = nm(e11),
                  n11 = nm(t11),
                  i3 = btoa(`${r11}:${n11}`);
                return `Basic ${i3}`;
              })(t10.client_id, nE(t10.client_secret))
            );
          break;
        case 'client_secret_post':
          nA('client_secret_post', i2),
            r10.set('client_id', t10.client_id),
            r10.set('client_secret', nE(t10.client_secret));
          break;
        case 'private_key_jwt': {
          if ((nC('private_key_jwt', t10.client_secret), void 0 === i2))
            throw TypeError(
              '"options.clientPrivateKey" must be provided when "client.token_endpoint_auth_method" is "private_key_jwt"'
            );
          let { key: n11, kid: o2 } = (function (e11) {
            if (e11 instanceof CryptoKey) return { key: e11 };
            if (!(e11?.key instanceof CryptoKey)) return {};
            if (void 0 !== e11.kid && !nf(e11.kid))
              throw TypeError('"kid" must be a non-empty string');
            return { key: e11.key, kid: e11.kid };
          })(i2);
          if (!ns(n11))
            throw TypeError(
              '"options.clientPrivateKey.key" must be a private CryptoKey'
            );
          r10.set('client_id', t10.client_id),
            r10.set(
              'client_assertion_type',
              'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'
            ),
            r10.set('client_assertion', await nS(e10, t10, n11, o2));
          break;
        }
        case 'tls_client_auth':
        case 'self_signed_tls_client_auth':
        case 'none':
          nC(t10.token_endpoint_auth_method, t10.client_secret),
            nA(t10.token_endpoint_auth_method, i2),
            r10.set('client_id', t10.client_id);
          break;
        default:
          throw new nr('unsupported client token_endpoint_auth_method');
      }
    }
    async function nP(e10, t10, r10) {
      if (!r10.usages.includes('sign'))
        throw TypeError(
          'CryptoKey instances used for signing assertions must include "sign" in their "usages"'
        );
      let n10 = `${ne(r7(JSON.stringify(e10)))}.${ne(r7(JSON.stringify(t10)))}`,
        i2 = ne(await crypto.subtle.sign(n3(r10), r10, r7(n10)));
      return `${n10}.${i2}`;
    }
    async function nO(e10, t10, r10, n10, i2, o2) {
      let {
        privateKey: a2,
        publicKey: s2,
        nonce: l2 = no.get(r10.origin)
      } = t10;
      if (!ns(a2))
        throw TypeError('"DPoP.privateKey" must be a private CryptoKey');
      if (!(na(s2) && 'public' === s2.type))
        throw TypeError('"DPoP.publicKey" must be a public CryptoKey');
      if (void 0 !== l2 && !nf(l2))
        throw TypeError('"DPoP.nonce" must be a non-empty string or undefined');
      if (!s2.extractable)
        throw TypeError('"DPoP.publicKey.extractable" must be true');
      let c2 = n_() + i2,
        u2 = await nP(
          { alg: nv(a2), typ: 'dpop+jwt', jwk: await nI(s2) },
          {
            iat: c2,
            jti: ng(),
            htm: n10,
            nonce: l2,
            htu: `${r10.origin}${r10.pathname}`,
            ath: o2 ? ne(await crypto.subtle.digest('SHA-256', r7(o2))) : void 0
          },
          a2
        );
      e10.set('dpop', u2);
    }
    async function nR(e10) {
      let {
          kty: t10,
          e: r10,
          n: n10,
          x: o2,
          y: a2,
          crv: s2
        } = await crypto.subtle.exportKey('jwk', e10),
        l2 = { kty: t10, e: r10, n: n10, x: o2, y: a2, crv: s2 };
      return i.set(e10, l2), l2;
    }
    async function nI(e10) {
      return i || (i = /* @__PURE__ */ new WeakMap()), i.get(e10) || nR(e10);
    }
    function n$(e10, t10, r10) {
      if ('string' != typeof e10) {
        if (r10?.[r5])
          throw TypeError(`"as.mtls_endpoint_aliases.${t10}" must be a string`);
        throw TypeError(`"as.${t10}" must be a string`);
      }
      return new URL(e10);
    }
    function nN(e10, t10, r10) {
      return r10?.[r5] &&
        e10.mtls_endpoint_aliases &&
        t10 in e10.mtls_endpoint_aliases
        ? n$(e10.mtls_endpoint_aliases[t10], t10, r10)
        : n$(e10[t10], t10);
    }
    function nU(e10) {
      return (
        !('object' != typeof e10 || Array.isArray(e10)) &&
        null !== e10 &&
        void 0 !== e10.error
      );
    }
    let nj = /((?:,|, )?[0-9a-zA-Z!#$%&'*+-.^_`|~]+=)/,
      nL = /(?:^|, ?)([0-9a-zA-Z!#$%&'*+\-.^_`|~]+)(?=$|[ ,])/g;
    async function nM(e10, t10, r10, n10, i2, o2) {
      if (!nf(e10)) throw TypeError('"accessToken" must be a non-empty string');
      if (!(r10 instanceof URL))
        throw TypeError('"url" must be an instance of URL');
      return (
        (n10 = nu(n10)),
        o2?.DPoP === void 0
          ? n10.set('authorization', `Bearer ${e10}`)
          : (await nO(n10, o2.DPoP, r10, 'GET', nb({ [r4]: o2?.[r4] }), e10),
            n10.set('authorization', `DPoP ${e10}`)),
        (o2?.[r6] || fetch)(r10.href, {
          body: i2,
          headers: Object.fromEntries(n10.entries()),
          method: t10,
          redirect: 'manual',
          signal: o2?.signal ? nd(o2.signal) : null
        }).then(nl)
      );
    }
    async function nD(e10, t10, r10, n10) {
      nk(e10), nx(t10);
      let i2 = nN(e10, 'userinfo_endpoint', n10),
        o2 = nu(n10?.headers);
      return (
        t10.userinfo_signed_response_alg
          ? o2.set('accept', 'application/jwt')
          : (o2.set('accept', 'application/json'),
            o2.append('accept', 'application/jwt')),
        nM(r10, 'GET', i2, o2, null, { ...n10, [r4]: nb(t10) })
      );
    }
    async function nH(e10, t10, r10, n10, i2, o2, a2) {
      return (
        await nT(e10, t10, i2, o2, a2?.clientPrivateKey),
        o2.set(
          'content-type',
          'application/x-www-form-urlencoded;charset=UTF-8'
        ),
        (a2?.[r6] || fetch)(n10.href, {
          body: i2,
          headers: Object.fromEntries(o2.entries()),
          method: r10,
          redirect: 'manual',
          signal: a2?.signal ? nd(a2.signal) : null
        }).then(nl)
      );
    }
    async function nW(e10, t10, r10, n10, i2) {
      let o2 = nN(e10, 'token_endpoint', i2);
      n10.set('grant_type', r10);
      let a2 = nu(i2?.headers);
      return (
        a2.set('accept', 'application/json'),
        i2?.DPoP !== void 0 && (await nO(a2, i2.DPoP, o2, 'POST', nb(t10))),
        nH(e10, t10, 'POST', o2, n10, a2, i2)
      );
    }
    Symbol();
    let nK = /* @__PURE__ */ new WeakMap();
    function nB(e10) {
      if (!e10.id_token) return;
      let t10 = nK.get(e10);
      if (!t10)
        throw TypeError(
          '"ref" was already garbage collected or did not resolve from the proper sources'
        );
      return t10;
    }
    async function nV(e10, t10, r10, n10 = false, i2 = false) {
      let o2;
      if ((nk(e10), nx(t10), !r2(r10, Response)))
        throw TypeError('"response" must be an instance of Response');
      if (200 !== r10.status) {
        let e11;
        if ((e11 = await n2(r10))) return e11;
        throw new ni('"response" is not a conform Token Endpoint response');
      }
      n1(r10);
      try {
        o2 = await r10.json();
      } catch (e11) {
        throw new ni('failed to parse "response" body as JSON', { cause: e11 });
      }
      if (!nc(o2)) throw new ni('"response" body must be a top level object');
      if (!nf(o2.access_token))
        throw new ni(
          '"response" body "access_token" property must be a non-empty string'
        );
      if (!nf(o2.token_type))
        throw new ni(
          '"response" body "token_type" property must be a non-empty string'
        );
      if (
        ((o2.token_type = o2.token_type.toLowerCase()),
        'dpop' !== o2.token_type && 'bearer' !== o2.token_type)
      )
        throw new nr('unsupported `token_type` value');
      if (
        void 0 !== o2.expires_in &&
        ('number' != typeof o2.expires_in || o2.expires_in <= 0)
      )
        throw new ni(
          '"response" body "expires_in" property must be a positive number'
        );
      if (!i2 && void 0 !== o2.refresh_token && !nf(o2.refresh_token))
        throw new ni(
          '"response" body "refresh_token" property must be a non-empty string'
        );
      if (void 0 !== o2.scope && 'string' != typeof o2.scope)
        throw new ni('"response" body "scope" property must be a string');
      if (!n10) {
        if (void 0 !== o2.id_token && !nf(o2.id_token))
          throw new ni(
            '"response" body "id_token" property must be a non-empty string'
          );
        if (o2.id_token) {
          let { claims: r11 } = await n5(
            o2.id_token,
            n8.bind(
              void 0,
              t10.id_token_signed_response_alg,
              e10.id_token_signing_alg_values_supported
            ),
            n6,
            nb(t10),
            nw(t10)
          )
            .then(nX.bind(void 0, ['aud', 'exp', 'iat', 'iss', 'sub']))
            .then(nq.bind(void 0, e10.issuer))
            .then(nJ.bind(void 0, t10.client_id));
          if (
            Array.isArray(r11.aud) &&
            1 !== r11.aud.length &&
            r11.azp !== t10.client_id
          )
            throw new ni(
              'unexpected ID Token "azp" (authorized party) claim value'
            );
          if (t10.require_auth_time && 'number' != typeof r11.auth_time)
            throw new ni(
              'unexpected ID Token "auth_time" (authentication time) claim value'
            );
          nK.set(o2, r11);
        }
      }
      return o2;
    }
    function nJ(e10, t10) {
      if (Array.isArray(t10.claims.aud)) {
        if (!t10.claims.aud.includes(e10))
          throw new ni('unexpected JWT "aud" (audience) claim value');
      } else if (t10.claims.aud !== e10)
        throw new ni('unexpected JWT "aud" (audience) claim value');
      return t10;
    }
    function nq(e10, t10) {
      if (t10.claims.iss !== e10)
        throw new ni('unexpected JWT "iss" (issuer) claim value');
      return t10;
    }
    let nF = /* @__PURE__ */ new WeakSet();
    async function nz(e10, t10, r10, n10, i2, o2) {
      if ((nk(e10), nx(t10), !nF.has(r10)))
        throw TypeError(
          '"callbackParameters" must be an instance of URLSearchParams obtained from "validateAuthResponse()", or "validateJwtAuthResponse()'
        );
      if (!nf(n10)) throw TypeError('"redirectUri" must be a non-empty string');
      if (!nf(i2)) throw TypeError('"codeVerifier" must be a non-empty string');
      let a2 = n9(r10, 'code');
      if (!a2) throw new ni('no authorization code in "callbackParameters"');
      let s2 = new URLSearchParams(o2?.additionalParameters);
      return (
        s2.set('redirect_uri', n10),
        s2.set('code_verifier', i2),
        s2.set('code', a2),
        nW(e10, t10, 'authorization_code', s2, o2)
      );
    }
    let nG = {
      aud: 'audience',
      c_hash: 'code hash',
      client_id: 'client id',
      exp: 'expiration time',
      iat: 'issued at',
      iss: 'issuer',
      jti: 'jwt id',
      nonce: 'nonce',
      s_hash: 'state hash',
      sub: 'subject',
      ath: 'access token hash',
      htm: 'http method',
      htu: 'http uri',
      cnf: 'confirmation'
    };
    function nX(e10, t10) {
      for (let r10 of e10)
        if (void 0 === t10.claims[r10])
          throw new ni(`JWT "${r10}" (${nG[r10]}) claim missing`);
      return t10;
    }
    let nY = Symbol(),
      nQ = Symbol();
    async function nZ(e10, t10, r10, n10, i2) {
      let o2 = await nV(e10, t10, r10);
      if (nU(o2)) return o2;
      if (!nf(o2.id_token))
        throw new ni(
          '"response" body "id_token" property must be a non-empty string'
        );
      i2 ?? (i2 = t10.default_max_age ?? nQ);
      let a2 = nB(o2);
      if ((t10.require_auth_time || i2 !== nQ) && void 0 === a2.auth_time)
        throw new ni(
          'ID Token "auth_time" (authentication time) claim missing'
        );
      if (i2 !== nQ) {
        if ('number' != typeof i2 || i2 < 0)
          throw TypeError('"options.max_age" must be a non-negative number');
        let e11 = n_() + nb(t10),
          r11 = nw(t10);
        if (a2.auth_time + i2 < e11 - r11)
          throw new ni(
            'too much time has elapsed since the last End-User authentication'
          );
      }
      switch (n10) {
        case void 0:
        case nY:
          if (void 0 !== a2.nonce)
            throw new ni('unexpected ID Token "nonce" claim value');
          break;
        default:
          if (!nf(n10))
            throw TypeError('"expectedNonce" must be a non-empty string');
          if (void 0 === a2.nonce)
            throw new ni('ID Token "nonce" claim missing');
          if (a2.nonce !== n10)
            throw new ni('unexpected ID Token "nonce" claim value');
      }
      return o2;
    }
    async function n0(e10, t10, r10) {
      let n10 = await nV(e10, t10, r10, true);
      if (nU(n10)) return n10;
      if (void 0 !== n10.id_token) {
        if ('string' == typeof n10.id_token && n10.id_token.length)
          throw new ni(
            'Unexpected ID Token returned, use processAuthorizationCodeOpenIDResponse() for OpenID Connect callback processing'
          );
        delete n10.id_token;
      }
      return n10;
    }
    function n1(e10) {
      if (e10.bodyUsed)
        throw TypeError('"response" body has been used already');
    }
    async function n2(e10) {
      if (e10.status > 399 && e10.status < 500) {
        n1(e10);
        try {
          let t10 = await e10.json();
          if (nc(t10) && 'string' == typeof t10.error && t10.error.length)
            return (
              void 0 !== t10.error_description &&
                'string' != typeof t10.error_description &&
                delete t10.error_description,
              void 0 !== t10.error_uri &&
                'string' != typeof t10.error_uri &&
                delete t10.error_uri,
              void 0 !== t10.algs &&
                'string' != typeof t10.algs &&
                delete t10.algs,
              void 0 !== t10.scope &&
                'string' != typeof t10.scope &&
                delete t10.scope,
              t10
            );
        } catch {}
      }
    }
    function n4(e10) {
      if ('number' != typeof e10.modulusLength || e10.modulusLength < 2048)
        throw new ni(`${e10.name} modulusLength must be at least 2048 bits`);
    }
    function n3(e10) {
      switch (e10.algorithm.name) {
        case 'ECDSA':
          return {
            name: e10.algorithm.name,
            hash: (function (e11) {
              switch (e11) {
                case 'P-256':
                  return 'SHA-256';
                case 'P-384':
                  return 'SHA-384';
                case 'P-521':
                  return 'SHA-512';
                default:
                  throw new nr();
              }
            })(e10.algorithm.namedCurve)
          };
        case 'RSA-PSS':
          switch ((n4(e10.algorithm), e10.algorithm.hash.name)) {
            case 'SHA-256':
            case 'SHA-384':
            case 'SHA-512':
              return {
                name: e10.algorithm.name,
                saltLength: parseInt(e10.algorithm.hash.name.slice(-3), 10) >> 3
              };
            default:
              throw new nr();
          }
        case 'RSASSA-PKCS1-v1_5':
          return n4(e10.algorithm), e10.algorithm.name;
        case 'Ed448':
        case 'Ed25519':
          return e10.algorithm.name;
      }
      throw new nr();
    }
    let n6 = Symbol();
    async function n5(e10, t10, r10, n10, i2) {
      let o2, a2, s2;
      let { 0: l2, 1: c2, 2: u2, length: d2 } = e10.split('.');
      if (5 === d2) throw new nr('JWE structure JWTs are not supported');
      if (3 !== d2) throw new ni('Invalid JWT');
      try {
        o2 = JSON.parse(r7(ne(l2)));
      } catch (e11) {
        throw new ni(
          'failed to parse JWT Header body as base64url encoded JSON',
          { cause: e11 }
        );
      }
      if (!nc(o2)) throw new ni('JWT Header must be a top level object');
      if ((t10(o2), void 0 !== o2.crit))
        throw new ni('unexpected JWT "crit" header parameter');
      let p2 = ne(u2);
      if (r10 !== n6) {
        a2 = await r10(o2);
        let e11 = `${l2}.${c2}`;
        if (!(await crypto.subtle.verify(n3(a2), a2, p2, r7(e11))))
          throw new ni('JWT signature verification failed');
      }
      try {
        s2 = JSON.parse(r7(ne(c2)));
      } catch (e11) {
        throw new ni(
          'failed to parse JWT Payload body as base64url encoded JSON',
          { cause: e11 }
        );
      }
      if (!nc(s2)) throw new ni('JWT Payload must be a top level object');
      let f2 = n_() + n10;
      if (void 0 !== s2.exp) {
        if ('number' != typeof s2.exp)
          throw new ni('unexpected JWT "exp" (expiration time) claim type');
        if (s2.exp <= f2 - i2)
          throw new ni(
            'unexpected JWT "exp" (expiration time) claim value, timestamp is <= now()'
          );
      }
      if (void 0 !== s2.iat && 'number' != typeof s2.iat)
        throw new ni('unexpected JWT "iat" (issued at) claim type');
      if (void 0 !== s2.iss && 'string' != typeof s2.iss)
        throw new ni('unexpected JWT "iss" (issuer) claim type');
      if (void 0 !== s2.nbf) {
        if ('number' != typeof s2.nbf)
          throw new ni('unexpected JWT "nbf" (not before) claim type');
        if (s2.nbf > f2 + i2)
          throw new ni(
            'unexpected JWT "nbf" (not before) claim value, timestamp is > now()'
          );
      }
      if (
        void 0 !== s2.aud &&
        'string' != typeof s2.aud &&
        !Array.isArray(s2.aud)
      )
        throw new ni('unexpected JWT "aud" (audience) claim type');
      return { header: o2, claims: s2, signature: p2, key: a2 };
    }
    function n8(e10, t10, r10) {
      if (void 0 !== e10) {
        if (r10.alg !== e10)
          throw new ni('unexpected JWT "alg" header parameter');
        return;
      }
      if (Array.isArray(t10)) {
        if (!t10.includes(r10.alg))
          throw new ni('unexpected JWT "alg" header parameter');
        return;
      }
      if ('RS256' !== r10.alg)
        throw new ni('unexpected JWT "alg" header parameter');
    }
    function n9(e10, t10) {
      let { 0: r10, length: n10 } = e10.getAll(t10);
      if (n10 > 1)
        throw new ni(`"${t10}" parameter must be provided only once`);
      return r10;
    }
    let n7 = Symbol(),
      ie = Symbol();
    async function it(e10, t10, r10, n10, i2) {
      let { cookies: o2, logger: a2 } = n10;
      a2.debug(`CREATE_${e10.toUpperCase()}`, { value: t10, maxAge: r10 });
      let s2 = new Date();
      s2.setTime(s2.getTime() + 1e3 * r10);
      let l2 = { value: t10 };
      'state' === e10 && i2 && (l2.data = i2);
      let c2 = o2[e10].name;
      return {
        name: c2,
        value: await tN({ ...n10.jwt, maxAge: r10, token: l2, salt: c2 }),
        options: { ...o2[e10].options, expires: s2 }
      };
    }
    let ir = {
      async create(e10) {
        let t10 = ng(),
          r10 = await ny(t10);
        return {
          cookie: await it('pkceCodeVerifier', t10, 900, e10),
          value: r10
        };
      },
      async use(e10, t10, r10) {
        let { provider: n10 } = r10;
        if (!n10?.checks?.includes('pkce')) return;
        let i2 = e10?.[r10.cookies.pkceCodeVerifier.name];
        if (!i2) throw new b('PKCE code_verifier cookie was missing.');
        let o2 = await tU({
          ...r10.jwt,
          token: i2,
          salt: r10.cookies.pkceCodeVerifier.name
        });
        if (!o2?.value)
          throw new b('PKCE code_verifier value could not be parsed.');
        return (
          t10.push({
            name: r10.cookies.pkceCodeVerifier.name,
            value: '',
            options: { ...r10.cookies.pkceCodeVerifier.options, maxAge: 0 }
          }),
          o2.value
        );
      }
    };
    function ii(e10) {
      try {
        let t10 = new TextDecoder();
        return JSON.parse(t10.decode(ey(e10)));
      } catch {}
    }
    let io = {
        async create(e10, t10) {
          let { provider: r10 } = e10;
          if (!r10.checks.includes('state')) {
            if (t10)
              throw new b(
                'State data was provided but the provider is not configured to use state.'
              );
            return;
          }
          let n10 = eh(JSON.stringify({ ...t10, random: ng() }));
          return { cookie: await it('state', n10, 900, e10, t10), value: n10 };
        },
        async use(e10, t10, r10, n10) {
          let { provider: i2 } = r10;
          if (!i2.checks.includes('state')) return;
          let o2 = e10?.[r10.cookies.state.name];
          if (!o2) throw new b('State cookie was missing.');
          let a2 = await tU({
            ...r10.jwt,
            token: o2,
            salt: r10.cookies.state.name
          });
          if (!a2?.value)
            throw new b('State (cookie) value could not be parsed.');
          let s2 = ii(a2.value);
          if (!s2) throw new b('State (encoded) value could not be parsed.');
          if (s2.random !== n10)
            throw new b(
              `Random state values did not match. Expected: ${s2.random}. Got: ${n10}`
            );
          return (
            t10.push({
              name: r10.cookies.state.name,
              value: '',
              options: { ...r10.cookies.state.options, maxAge: 0 }
            }),
            a2.value
          );
        }
      },
      ia = {
        async create(e10) {
          if (!e10.provider.checks.includes('nonce')) return;
          let t10 = ng();
          return { cookie: await it('nonce', t10, 900, e10), value: t10 };
        },
        async use(e10, t10, r10) {
          let { provider: n10 } = r10;
          if (!n10?.checks?.includes('nonce')) return;
          let i2 = e10?.[r10.cookies.nonce.name];
          if (!i2) throw new b('Nonce cookie was missing.');
          let o2 = await tU({
            ...r10.jwt,
            token: i2,
            salt: r10.cookies.nonce.name
          });
          if (!o2?.value) throw new b('Nonce value could not be parsed.');
          return (
            t10.push({
              name: r10.cookies.nonce.name,
              value: '',
              options: { ...r10.cookies.nonce.options, maxAge: 0 }
            }),
            o2.value
          );
        }
      },
      is = {
        create: async (e10, t10, r10) => ({
          cookie: await it(
            'webauthnChallenge',
            JSON.stringify({ challenge: t10, registerData: r10 }),
            900,
            e10
          )
        }),
        async use(e10, t10, r10) {
          let n10 = t10?.[e10.cookies.webauthnChallenge.name];
          if (!n10) throw new b('Challenge cookie missing.');
          let i2 = await tU({
            ...e10.jwt,
            token: n10,
            salt: e10.cookies.webauthnChallenge.name
          });
          if (!i2?.value) throw new b('Challenge value could not be parsed.');
          let o2 = {
            name: e10.cookies.webauthnChallenge.name,
            value: '',
            options: { ...e10.cookies.webauthnChallenge.options, maxAge: 0 }
          };
          return r10.push(o2), JSON.parse(i2.value);
        }
      };
    async function il(e10, t10, r10, n10) {
      let i2, o2, a2;
      let { logger: s2, provider: l2 } = r10,
        { token: c2, userinfo: u2 } = l2;
      if (
        (c2?.url && 'authjs.dev' !== c2.url.host) ||
        (u2?.url && 'authjs.dev' !== u2.url.host)
      )
        i2 = {
          issuer: l2.issuer ?? 'https://authjs.dev',
          token_endpoint: c2?.url.toString(),
          userinfo_endpoint: u2?.url.toString()
        };
      else {
        let e11 = new URL(l2.issuer),
          t11 = await np(e11),
          r11 = await nh(e11, t11);
        if (!r11.token_endpoint)
          throw TypeError(
            'TODO: Authorization server did not provide a token endpoint.'
          );
        if (!r11.userinfo_endpoint)
          throw TypeError(
            'TODO: Authorization server did not provide a userinfo endpoint.'
          );
        i2 = r11;
      }
      let d2 = {
          client_id: l2.clientId,
          client_secret: l2.clientSecret,
          ...l2.client
        },
        p2 = [],
        f2 = await io.use(t10, p2, r10, n10),
        h2 = (function (e11, t11, r11, n11) {
          var i3;
          if (
            (nk(e11),
            nx(t11),
            r11 instanceof URL && (r11 = r11.searchParams),
            !(r11 instanceof URLSearchParams))
          )
            throw TypeError(
              '"parameters" must be an instance of URLSearchParams, or URL'
            );
          if (n9(r11, 'response'))
            throw new ni(
              '"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()'
            );
          let o3 = n9(r11, 'iss'),
            a3 = n9(r11, 'state');
          if (!o3 && e11.authorization_response_iss_parameter_supported)
            throw new ni('response parameter "iss" (issuer) missing');
          if (o3 && o3 !== e11.issuer)
            throw new ni('unexpected "iss" (issuer) response parameter value');
          switch (n11) {
            case void 0:
            case ie:
              if (void 0 !== a3)
                throw new ni(
                  'unexpected "state" response parameter encountered'
                );
              break;
            case n7:
              break;
            default:
              if (!nf(n11))
                throw new ni('"expectedState" must be a non-empty string');
              if (void 0 === a3)
                throw new ni('response parameter "state" missing');
              if (a3 !== n11)
                throw new ni('unexpected "state" response parameter value');
          }
          let s3 = n9(r11, 'error');
          if (s3)
            return {
              error: s3,
              error_description: n9(r11, 'error_description'),
              error_uri: n9(r11, 'error_uri')
            };
          let l3 = n9(r11, 'id_token'),
            c3 = n9(r11, 'token');
          if (void 0 !== l3 || void 0 !== c3)
            throw new nr('implicit and hybrid flows are not supported');
          return (i3 = new URLSearchParams(r11)), nF.add(i3), i3;
        })(
          i2,
          d2,
          new URLSearchParams(e10),
          l2.checks.includes('state') ? f2 : n7
        );
      if (nU(h2)) {
        let e11 = { providerId: l2.id, ...h2 };
        throw (
          (s2.debug('OAuthCallbackError', e11),
          new A('OAuth Provider returned an error', e11))
        );
      }
      let g2 = await ir.use(t10, p2, r10),
        y2 = l2.callbackUrl;
      !r10.isOnRedirectProxy &&
        l2.redirectProxyUrl &&
        (y2 = l2.redirectProxyUrl);
      let m2 = await nz(i2, d2, h2, y2, g2 ?? 'auth', {
        [r6]: (...e11) => (
          !l2.checks.includes('pkce') &&
            e11[1]?.body instanceof URLSearchParams &&
            e11[1].body.delete('code_verifier'),
          fetch(...e11)
        )
      });
      if (
        (l2.token?.conform && (m2 = (await l2.token.conform(m2.clone())) ?? m2),
        (o2 = (function (e11) {
          if (!r2(e11, Response))
            throw TypeError('"response" must be an instance of Response');
          let t11 = e11.headers.get('www-authenticate');
          if (null === t11) return;
          let r11 = [];
          for (let { 1: e12, index: n11 } of t11.matchAll(nL))
            r11.push([e12, n11]);
          if (r11.length)
            return r11.map(([e12, r12], n11, i3) => {
              let o3 = i3[n11 + 1];
              return (function (e13, t12) {
                let r13 = t12.split(nj).slice(1);
                if (!r13.length)
                  return { scheme: e13.toLowerCase(), parameters: {} };
                r13[r13.length - 1] = r13[r13.length - 1].replace(/,$/, '');
                let n12 = {};
                for (let e14 = 1; e14 < r13.length; e14 += 2) {
                  var i4;
                  let t13 = e14;
                  if ('"' === r13[t13][0])
                    for (; '"' !== r13[t13].slice(-1) && ++e14 < r13.length; )
                      r13[t13] += r13[e14];
                  n12[r13[t13 - 1].replace(/^(?:, ?)|=$/g, '').toLowerCase()] =
                    (i4 = r13[t13]).length >= 2 &&
                    '"' === i4[0] &&
                    '"' === i4[i4.length - 1]
                      ? i4.slice(1, -1)
                      : i4;
                }
                return { scheme: e13.toLowerCase(), parameters: n12 };
              })(e12, o3 ? t11.slice(r12, o3[1]) : t11.slice(r12));
            });
        })(m2)))
      ) {
        for (let e11 of o2) console.log('challenge', e11);
        throw Error('TODO: Handle www-authenticate challenges as needed');
      }
      let v2 = {};
      if ('oidc' === l2.type) {
        let e11 = await ia.use(t10, p2, r10),
          n11 = await nZ(i2, d2, m2, e11 ?? nY);
        if (nU(n11))
          throw (
            (console.log('error', n11),
            Error('TODO: Handle OIDC response body error'))
          );
        (v2 = nB(n11)), (a2 = n11);
      } else {
        if (nU((a2 = await n0(i2, d2, m2))))
          throw (
            (console.log('error', a2),
            Error('TODO: Handle OAuth 2.0 response body error'))
          );
        if (u2?.request) {
          let e11 = await u2.request({ tokens: a2, provider: l2 });
          e11 instanceof Object && (v2 = e11);
        } else if (u2?.url) {
          let e11 = await nD(i2, d2, a2.access_token);
          v2 = await e11.json();
        } else throw TypeError('No userinfo endpoint configured');
      }
      return (
        a2.expires_in &&
          (a2.expires_at =
            Math.floor(Date.now() / 1e3) + Number(a2.expires_in)),
        { ...(await ic(v2, l2, a2, s2)), profile: v2, cookies: p2 }
      );
    }
    async function ic(e10, t10, r10, n10) {
      try {
        let n11 = await t10.profile(e10, r10);
        return {
          user: {
            ...n11,
            id: crypto.randomUUID(),
            email: n11.email?.toLowerCase()
          },
          account: {
            ...r10,
            provider: t10.id,
            type: t10.type,
            providerAccountId: n11.id ?? crypto.randomUUID()
          }
        };
      } catch (r11) {
        n10.debug('getProfile error details', e10),
          n10.error(new C(r11, { provider: t10.id }));
      }
    }
    var iu = r(26195).Buffer;
    async function id(e10, t10, r10, n10) {
      let i2 = await im(e10, t10, r10),
        { cookie: o2 } = await is.create(e10, i2.challenge, r10);
      return {
        status: 200,
        cookies: [...(n10 ?? []), o2],
        body: { action: 'register', options: i2 },
        headers: { 'Content-Type': 'application/json' }
      };
    }
    async function ip(e10, t10, r10, n10) {
      let i2 = await iy(e10, t10, r10),
        { cookie: o2 } = await is.create(e10, i2.challenge);
      return {
        status: 200,
        cookies: [...(n10 ?? []), o2],
        body: { action: 'authenticate', options: i2 },
        headers: { 'Content-Type': 'application/json' }
      };
    }
    async function ih(e10, t10, r10) {
      let n10;
      let { adapter: i2, provider: o2 } = e10,
        a2 =
          t10.body && 'string' == typeof t10.body.data
            ? JSON.parse(t10.body.data)
            : void 0;
      if (
        !a2 ||
        'object' != typeof a2 ||
        !('id' in a2) ||
        'string' != typeof a2.id
      )
        throw new c('Invalid WebAuthn Authentication response');
      let s2 = iw(ib(a2.id)),
        l2 = await i2.getAuthenticator(s2);
      if (!l2)
        throw new c(
          `WebAuthn authenticator not found in database: ${JSON.stringify({
            credentialID: s2
          })}`
        );
      let { challenge: u2 } = await is.use(e10, t10.cookies, r10);
      try {
        let r11 = o2.getRelayingParty(e10, t10);
        n10 = await o2.simpleWebAuthn.verifyAuthenticationResponse({
          ...o2.verifyAuthenticationOptions,
          expectedChallenge: u2,
          response: a2,
          authenticator: {
            ...l2,
            credentialDeviceType: l2.credentialDeviceType,
            transports: i_(l2.transports),
            credentialID: ib(l2.credentialID),
            credentialPublicKey: ib(l2.credentialPublicKey)
          },
          expectedOrigin: r11.origin,
          expectedRPID: r11.id
        });
      } catch (e11) {
        throw new W(e11);
      }
      let { verified: p2, authenticationInfo: f2 } = n10;
      if (!p2)
        throw new W('WebAuthn authentication response could not be verified.');
      try {
        let { newCounter: e11 } = f2;
        await i2.updateAuthenticatorCounter(l2.credentialID, e11);
      } catch (e11) {
        throw new d(
          `Failed to update authenticator counter. This may cause future authentication attempts to fail. ${JSON.stringify(
            {
              credentialID: s2,
              oldCounter: l2.counter,
              newCounter: f2.newCounter
            }
          )}`,
          e11
        );
      }
      let h2 = await i2.getAccount(l2.providerAccountId, o2.id);
      if (!h2)
        throw new c(
          `WebAuthn account not found in database: ${JSON.stringify({
            credentialID: s2,
            providerAccountId: l2.providerAccountId
          })}`
        );
      let g2 = await i2.getUser(h2.userId);
      if (!g2)
        throw new c(
          `WebAuthn user not found in database: ${JSON.stringify({
            credentialID: s2,
            providerAccountId: l2.providerAccountId,
            userID: h2.userId
          })}`
        );
      return { account: h2, user: g2 };
    }
    async function ig(e10, t10, r10) {
      var n10;
      let i2;
      let { provider: o2 } = e10,
        a2 =
          t10.body && 'string' == typeof t10.body.data
            ? JSON.parse(t10.body.data)
            : void 0;
      if (
        !a2 ||
        'object' != typeof a2 ||
        !('id' in a2) ||
        'string' != typeof a2.id
      )
        throw new c('Invalid WebAuthn Registration response');
      let { challenge: s2, registerData: l2 } = await is.use(
        e10,
        t10.cookies,
        r10
      );
      if (!l2)
        throw new c(
          'Missing user registration data in WebAuthn challenge cookie'
        );
      try {
        let r11 = o2.getRelayingParty(e10, t10);
        i2 = await o2.simpleWebAuthn.verifyRegistrationResponse({
          ...o2.verifyRegistrationOptions,
          expectedChallenge: s2,
          response: a2,
          expectedOrigin: r11.origin,
          expectedRPID: r11.id
        });
      } catch (e11) {
        throw new W(e11);
      }
      if (!i2.verified || !i2.registrationInfo)
        throw new W('WebAuthn registration response could not be verified');
      let u2 = {
          providerAccountId: iw(i2.registrationInfo.credentialID),
          provider: e10.provider.id,
          type: o2.type
        },
        d2 = {
          providerAccountId: u2.providerAccountId,
          counter: i2.registrationInfo.counter,
          credentialID: iw(i2.registrationInfo.credentialID),
          credentialPublicKey: iw(i2.registrationInfo.credentialPublicKey),
          credentialBackedUp: i2.registrationInfo.credentialBackedUp,
          credentialDeviceType: i2.registrationInfo.credentialDeviceType,
          transports: ((n10 = a2.response.transports), n10?.join(','))
        };
      return { user: l2, account: u2, authenticator: d2 };
    }
    async function iy(e10, t10, r10) {
      let { provider: n10, adapter: i2 } = e10,
        o2 = r10 && r10.id ? await i2.listAuthenticatorsByUserId(r10.id) : null,
        a2 = n10.getRelayingParty(e10, t10);
      return await n10.simpleWebAuthn.generateAuthenticationOptions({
        ...n10.authenticationOptions,
        rpID: a2.id,
        allowCredentials: o2?.map((e11) => ({
          id: ib(e11.credentialID),
          type: 'public-key',
          transports: i_(e11.transports)
        }))
      });
    }
    async function im(e10, t10, r10) {
      let { provider: n10, adapter: i2 } = e10,
        o2 = r10.id ? await i2.listAuthenticatorsByUserId(r10.id) : null,
        a2 = tq(32),
        s2 = n10.getRelayingParty(e10, t10);
      return await n10.simpleWebAuthn.generateRegistrationOptions({
        ...n10.registrationOptions,
        userID: a2,
        userName: r10.email,
        userDisplayName: r10.name ?? void 0,
        rpID: s2.id,
        rpName: s2.name,
        excludeCredentials: o2?.map((e11) => ({
          id: ib(e11.credentialID),
          type: 'public-key',
          transports: i_(e11.transports)
        }))
      });
    }
    function iv(e10) {
      let { provider: t10, adapter: r10 } = e10;
      if (!r10) throw new _('An adapter is required for the WebAuthn provider');
      if (!t10 || 'webauthn' !== t10.type)
        throw new N('Provider must be WebAuthn');
      return { ...e10, provider: t10, adapter: r10 };
    }
    function ib(e10) {
      return new Uint8Array(iu.from(e10, 'base64'));
    }
    function iw(e10) {
      return iu.from(e10).toString('base64');
    }
    function i_(e10) {
      return e10 ? e10.split(',') : void 0;
    }
    async function iS(e10, t10, r10, n10) {
      if (!t10.provider) throw new N('Callback route called without provider');
      let { query: i2, body: o2, method: a2, headers: s2 } = e10,
        {
          provider: l2,
          adapter: u2,
          url: d2,
          callbackUrl: p2,
          pages: h2,
          jwt: g2,
          events: y2,
          callbacks: v2,
          session: { strategy: w2, maxAge: _2 },
          logger: S2
        } = t10,
        k2 = 'jwt' === w2;
      try {
        if ('oauth' === l2.type || 'oidc' === l2.type) {
          let o3;
          let { proxyRedirect: a3, randomState: s3 } = (function (
            e11,
            t11,
            r11
          ) {
            let n11, i3;
            if (t11.redirectProxyUrl && !e11?.state)
              throw new b(
                'Missing state in query, but required for redirect proxy'
              );
            let o4 = ii(e11?.state);
            if (((n11 = o4?.random), r11)) {
              if (!o4?.origin) return { randomState: n11 };
              i3 = `${o4.origin}?${new URLSearchParams(e11)}`;
            }
            return { randomState: n11, proxyRedirect: i3 };
          })(i2, l2, t10.isOnRedirectProxy);
          if (a3)
            return (
              S2.debug('proxy redirect', {
                proxyRedirect: a3,
                randomState: s3
              }),
              { redirect: a3 }
            );
          let c2 = await il(i2, e10.cookies, t10, s3);
          c2.cookies.length && n10.push(...c2.cookies),
            S2.debug('authorization result', c2);
          let { user: f2, account: m2, profile: w3 } = c2;
          if (!f2 || !m2 || !w3)
            return { redirect: `${d2}/signin`, cookies: n10 };
          if (u2) {
            let { getUserByAccount: e11 } = u2;
            o3 = await e11({
              providerAccountId: m2.providerAccountId,
              provider: l2.id
            });
          }
          let x2 = await ik({ user: o3 ?? f2, account: m2, profile: w3 }, t10);
          if (x2) return { redirect: x2, cookies: n10 };
          let {
            user: E2,
            session: A2,
            isNewUser: C2
          } = await r1(r10.value, f2, m2, t10);
          if (k2) {
            let e11 = {
                name: E2.name,
                email: E2.email,
                picture: E2.image,
                sub: E2.id?.toString()
              },
              i3 = await v2.jwt({
                token: e11,
                user: E2,
                account: m2,
                profile: w3,
                isNewUser: C2,
                trigger: C2 ? 'signUp' : 'signIn'
              });
            if (null === i3) n10.push(...r10.clean());
            else {
              let e12 = t10.cookies.sessionToken.name,
                o4 = await g2.encode({ ...g2, token: i3, salt: e12 }),
                a4 = new Date();
              a4.setTime(a4.getTime() + 1e3 * _2);
              let s4 = r10.chunk(o4, { expires: a4 });
              n10.push(...s4);
            }
          } else
            n10.push({
              name: t10.cookies.sessionToken.name,
              value: A2.sessionToken,
              options: {
                ...t10.cookies.sessionToken.options,
                expires: A2.expires
              }
            });
          if (
            (await y2.signIn?.({
              user: E2,
              account: m2,
              profile: w3,
              isNewUser: C2
            }),
            C2 && h2.newUser)
          )
            return {
              redirect: `${h2.newUser}${
                h2.newUser.includes('?') ? '&' : '?'
              }${new URLSearchParams({ callbackUrl: p2 })}`,
              cookies: n10
            };
          return { redirect: p2, cookies: n10 };
        }
        if ('email' === l2.type) {
          let e11 = i2?.token,
            o3 = i2?.email;
          if (!e11 || !o3) {
            let t11 = TypeError(
              'Missing token or email. The sign-in URL was manually opened without token/identifier or the link was not sent correctly in the email.',
              { cause: { hasToken: !!e11, hasEmail: !!o3 } }
            );
            throw ((t11.name = 'Configuration'), t11);
          }
          let a3 = l2.secret ?? t10.secret,
            s3 = await u2.useVerificationToken({
              identifier: o3,
              token: await tJ(`${e11}${a3}`)
            }),
            c2 = !!s3,
            d3 = s3 ? s3.expires.valueOf() < Date.now() : void 0;
          if (!c2 || d3) throw new j({ hasInvite: c2, expired: d3 });
          let f2 = (await u2.getUserByEmail(o3)) ?? {
              id: crypto.randomUUID(),
              email: o3,
              emailVerified: null
            },
            m2 = {
              providerAccountId: f2.email,
              userId: f2.id,
              type: 'email',
              provider: l2.id
            },
            b2 = await ik({ user: f2, account: m2 }, t10);
          if (b2) return { redirect: b2, cookies: n10 };
          let {
            user: w3,
            session: S3,
            isNewUser: x2
          } = await r1(r10.value, f2, m2, t10);
          if (k2) {
            let e12 = {
                name: w3.name,
                email: w3.email,
                picture: w3.image,
                sub: w3.id?.toString()
              },
              i3 = await v2.jwt({
                token: e12,
                user: w3,
                account: m2,
                isNewUser: x2,
                trigger: x2 ? 'signUp' : 'signIn'
              });
            if (null === i3) n10.push(...r10.clean());
            else {
              let e13 = t10.cookies.sessionToken.name,
                o4 = await g2.encode({ ...g2, token: i3, salt: e13 }),
                a4 = new Date();
              a4.setTime(a4.getTime() + 1e3 * _2);
              let s4 = r10.chunk(o4, { expires: a4 });
              n10.push(...s4);
            }
          } else
            n10.push({
              name: t10.cookies.sessionToken.name,
              value: S3.sessionToken,
              options: {
                ...t10.cookies.sessionToken.options,
                expires: S3.expires
              }
            });
          if (
            (await y2.signIn?.({ user: w3, account: m2, isNewUser: x2 }),
            x2 && h2.newUser)
          )
            return {
              redirect: `${h2.newUser}${
                h2.newUser.includes('?') ? '&' : '?'
              }${new URLSearchParams({ callbackUrl: p2 })}`,
              cookies: n10
            };
          return { redirect: p2, cookies: n10 };
        }
        if ('credentials' === l2.type && 'POST' === a2) {
          let e11 = o2 ?? {};
          Object.entries(i2 ?? {}).forEach(([e12, t11]) =>
            d2.searchParams.set(e12, t11)
          );
          let c2 = await l2.authorize(
            e11,
            new Request(d2, {
              headers: s2,
              method: a2,
              body: JSON.stringify(o2)
            })
          );
          if (c2) c2.id = c2.id?.toString() ?? crypto.randomUUID();
          else throw new m();
          let u3 = {
              providerAccountId: c2.id,
              type: 'credentials',
              provider: l2.id
            },
            f2 = await ik({ user: c2, account: u3, credentials: e11 }, t10);
          if (f2) return { redirect: f2, cookies: n10 };
          let h3 = {
              name: c2.name,
              email: c2.email,
              picture: c2.image,
              sub: c2.id
            },
            b2 = await v2.jwt({
              token: h3,
              user: c2,
              account: u3,
              isNewUser: false,
              trigger: 'signIn'
            });
          if (null === b2) n10.push(...r10.clean());
          else {
            let e12 = t10.cookies.sessionToken.name,
              i3 = await g2.encode({ ...g2, token: b2, salt: e12 }),
              o3 = new Date();
            o3.setTime(o3.getTime() + 1e3 * _2);
            let a3 = r10.chunk(i3, { expires: o3 });
            n10.push(...a3);
          }
          return (
            await y2.signIn?.({ user: c2, account: u3 }),
            { redirect: p2, cookies: n10 }
          );
        }
        if ('webauthn' === l2.type && 'POST' === a2) {
          let i3, o3, a3;
          let s3 = e10.body?.action;
          if (
            'string' != typeof s3 ||
            ('authenticate' !== s3 && 'register' !== s3)
          )
            throw new c('Invalid action parameter');
          let l3 = iv(t10);
          switch (s3) {
            case 'authenticate': {
              let t11 = await ih(l3, e10, n10);
              (i3 = t11.user), (o3 = t11.account);
              break;
            }
            case 'register': {
              let r11 = await ig(t10, e10, n10);
              (i3 = r11.user), (o3 = r11.account), (a3 = r11.authenticator);
            }
          }
          await ik({ user: i3, account: o3 }, t10);
          let {
            user: u3,
            isNewUser: d3,
            session: f2,
            account: m2
          } = await r1(r10.value, i3, o3, t10);
          if (!m2) throw new c('Error creating or finding account');
          if (
            (a3 &&
              u3.id &&
              (await l3.adapter.createAuthenticator({ ...a3, userId: u3.id })),
            k2)
          ) {
            let e11 = {
                name: u3.name,
                email: u3.email,
                picture: u3.image,
                sub: u3.id?.toString()
              },
              i4 = await v2.jwt({
                token: e11,
                user: u3,
                account: m2,
                isNewUser: d3,
                trigger: d3 ? 'signUp' : 'signIn'
              });
            if (null === i4) n10.push(...r10.clean());
            else {
              let e12 = t10.cookies.sessionToken.name,
                o4 = await g2.encode({ ...g2, token: i4, salt: e12 }),
                a4 = new Date();
              a4.setTime(a4.getTime() + 1e3 * _2);
              let s4 = r10.chunk(o4, { expires: a4 });
              n10.push(...s4);
            }
          } else
            n10.push({
              name: t10.cookies.sessionToken.name,
              value: f2.sessionToken,
              options: {
                ...t10.cookies.sessionToken.options,
                expires: f2.expires
              }
            });
          if (
            (await y2.signIn?.({ user: u3, account: m2, isNewUser: d3 }),
            d3 && h2.newUser)
          )
            return {
              redirect: `${h2.newUser}${
                h2.newUser.includes('?') ? '&' : '?'
              }${new URLSearchParams({ callbackUrl: p2 })}`,
              cookies: n10
            };
          return { redirect: p2, cookies: n10 };
        }
        throw new N(`Callback for provider type (${l2.type}) is not supported`);
      } catch (t11) {
        if (t11 instanceof c) throw t11;
        let e11 = new f(t11, { provider: l2.id });
        throw (
          (S2.debug('callback route error details', {
            method: a2,
            query: i2,
            body: o2
          }),
          e11)
        );
      }
    }
    async function ik(e10, t10) {
      let r10;
      let { signIn: n10, redirect: i2 } = t10.callbacks;
      try {
        r10 = await n10(e10);
      } catch (e11) {
        if (e11 instanceof c) throw e11;
        throw new p(e11);
      }
      if (!r10) throw new p('AccessDenied');
      if ('string' == typeof r10)
        return await i2({ url: r10, baseUrl: t10.url.origin });
    }
    async function ix(e10, t10, r10, n10, i2) {
      let {
          adapter: o2,
          jwt: a2,
          events: s2,
          callbacks: l2,
          logger: c2,
          session: { strategy: u2, maxAge: d2 }
        } = e10,
        p2 = {
          body: null,
          headers: { 'Content-Type': 'application/json' },
          cookies: r10
        },
        f2 = t10.value;
      if (!f2) return p2;
      if ('jwt' === u2) {
        try {
          let r11 = e10.cookies.sessionToken.name,
            o3 = await a2.decode({ ...a2, token: f2, salt: r11 });
          if (!o3) throw Error('Invalid JWT');
          let c3 = await l2.jwt({
              token: o3,
              ...(n10 && { trigger: 'update' }),
              session: i2
            }),
            u3 = r0(d2);
          if (null !== c3) {
            let e11 = {
                user: { name: c3.name, email: c3.email, image: c3.picture },
                expires: u3.toISOString()
              },
              n11 = await l2.session({ session: e11, token: c3 });
            p2.body = n11;
            let i3 = await a2.encode({ ...a2, token: c3, salt: r11 }),
              o4 = t10.chunk(i3, { expires: u3 });
            p2.cookies?.push(...o4),
              await s2.session?.({ session: n11, token: c3 });
          } else p2.cookies?.push(...t10.clean());
        } catch (e11) {
          c2.error(new w(e11)), p2.cookies?.push(...t10.clean());
        }
        return p2;
      }
      try {
        let {
            getSessionAndUser: r11,
            deleteSession: a3,
            updateSession: c3
          } = o2,
          u3 = await r11(f2);
        if (
          (u3 &&
            u3.session.expires.valueOf() < Date.now() &&
            (await a3(f2), (u3 = null)),
          u3)
        ) {
          let { user: t11, session: r12 } = u3,
            o3 = e10.session.updateAge,
            a4 = r12.expires.valueOf() - 1e3 * d2 + 1e3 * o3,
            h2 = r0(d2);
          a4 <= Date.now() && (await c3({ sessionToken: f2, expires: h2 }));
          let g2 = await l2.session({
            session: { ...r12, user: t11 },
            user: t11,
            newSession: i2,
            ...(n10 ? { trigger: 'update' } : {})
          });
          (p2.body = g2),
            p2.cookies?.push({
              name: e10.cookies.sessionToken.name,
              value: f2,
              options: { ...e10.cookies.sessionToken.options, expires: h2 }
            }),
            await s2.session?.({ session: g2 });
        } else f2 && p2.cookies?.push(...t10.clean());
      } catch (e11) {
        c2.error(new T(e11));
      }
      return p2;
    }
    async function iE(e10, t10) {
      let r10, n10;
      let { logger: i2, provider: o2 } = t10,
        a2 = o2.authorization?.url;
      if (!a2 || 'authjs.dev' === a2.host) {
        let e11 = new URL(o2.issuer),
          t11 = await np(e11),
          r11 = await nh(e11, t11);
        if (!r11.authorization_endpoint)
          throw TypeError(
            'Authorization server did not provide an authorization endpoint.'
          );
        a2 = new URL(r11.authorization_endpoint);
      }
      let s2 = a2.searchParams,
        l2 = o2.callbackUrl;
      !t10.isOnRedirectProxy &&
        o2.redirectProxyUrl &&
        ((l2 = o2.redirectProxyUrl),
        (n10 = { origin: o2.callbackUrl }),
        i2.debug('using redirect proxy', { redirect_uri: l2, data: n10 }));
      let c2 = Object.assign(
        {
          response_type: 'code',
          client_id: o2.clientId,
          redirect_uri: l2,
          ...o2.authorization?.params
        },
        Object.fromEntries(o2.authorization?.url.searchParams ?? []),
        e10
      );
      for (let e11 in c2) s2.set(e11, c2[e11]);
      let u2 = [],
        d2 = await io.create(t10, n10);
      if (
        (d2 && (s2.set('state', d2.value), u2.push(d2.cookie)),
        o2.checks?.includes('pkce'))
      ) {
        if (r10 && !r10.code_challenge_methods_supported?.includes('S256'))
          'oidc' === o2.type && (o2.checks = ['nonce']);
        else {
          let { value: e11, cookie: r11 } = await ir.create(t10);
          s2.set('code_challenge', e11),
            s2.set('code_challenge_method', 'S256'),
            u2.push(r11);
        }
      }
      let p2 = await ia.create(t10);
      return (
        p2 && (s2.set('nonce', p2.value), u2.push(p2.cookie)),
        'oidc' !== o2.type ||
          a2.searchParams.has('scope') ||
          a2.searchParams.set('scope', 'openid profile email'),
        i2.debug('authorization url is ready', {
          url: a2,
          cookies: u2,
          provider: o2
        }),
        { redirect: a2.toString(), cookies: u2 }
      );
    }
    async function iA(e10, t10) {
      let r10;
      let { body: n10 } = e10,
        { provider: i2, callbacks: o2, adapter: a2 } = t10,
        s2 = (
          i2.normalizeIdentifier ??
          function (e11) {
            if (!e11) throw Error('Missing email from request body.');
            let [t11, r11] = e11.toLowerCase().trim().split('@');
            return (r11 = r11.split(',')[0]), `${t11}@${r11}`;
          }
        )(n10?.email),
        l2 = { id: crypto.randomUUID(), email: s2, emailVerified: null },
        c2 = (await a2.getUserByEmail(s2)) ?? l2,
        u2 = {
          providerAccountId: s2,
          userId: c2.id,
          type: 'email',
          provider: i2.id
        };
      try {
        r10 = await o2.signIn({
          user: c2,
          account: u2,
          email: { verificationRequest: true }
        });
      } catch (e11) {
        throw new p(e11);
      }
      if (!r10) throw new p('AccessDenied');
      if ('string' == typeof r10)
        return {
          redirect: await o2.redirect({ url: r10, baseUrl: t10.url.origin })
        };
      let { callbackUrl: d2, theme: f2 } = t10,
        h2 = (await i2.generateVerificationToken?.()) ?? tq(32),
        g2 = new Date(Date.now() + (i2.maxAge ?? 86400) * 1e3),
        y2 = i2.secret ?? t10.secret,
        m2 = new URL(t10.basePath, t10.url.origin),
        v2 = i2.sendVerificationRequest({
          identifier: s2,
          token: h2,
          expires: g2,
          url: `${m2}/callback/${i2.id}?${new URLSearchParams({
            callbackUrl: d2,
            token: h2,
            email: s2
          })}`,
          provider: i2,
          theme: f2,
          request: new Request(e10.url, {
            headers: e10.headers,
            method: e10.method,
            body:
              'POST' === e10.method ? JSON.stringify(e10.body ?? {}) : void 0
          })
        }),
        b2 = a2.createVerificationToken?.({
          identifier: s2,
          token: await tJ(`${h2}${y2}`),
          expires: g2
        });
      return (
        await Promise.all([v2, b2]),
        {
          redirect: `${m2}/verify-request?${new URLSearchParams({
            provider: i2.id,
            type: i2.type
          })}`
        }
      );
    }
    async function iC(e10, t10, r10) {
      let n10 = `${r10.url.origin}${r10.basePath}/signin`;
      if (!r10.provider) return { redirect: n10, cookies: t10 };
      switch (r10.provider.type) {
        case 'oauth':
        case 'oidc': {
          let { redirect: n11, cookies: i2 } = await iE(e10.query, r10);
          return i2 && t10.push(...i2), { redirect: n11, cookies: t10 };
        }
        case 'email':
          return { ...(await iA(e10, r10)), cookies: t10 };
        default:
          return { redirect: n10, cookies: t10 };
      }
    }
    async function iT(e10, t10, r10) {
      let {
          jwt: n10,
          events: i2,
          callbackUrl: o2,
          logger: a2,
          session: s2
        } = r10,
        l2 = t10.value;
      if (!l2) return { redirect: o2, cookies: e10 };
      try {
        if ('jwt' === s2.strategy) {
          let e11 = r10.cookies.sessionToken.name,
            t11 = await n10.decode({ ...n10, token: l2, salt: e11 });
          await i2.signOut?.({ token: t11 });
        } else {
          let e11 = await r10.adapter?.deleteSession(l2);
          await i2.signOut?.({ session: e11 });
        }
      } catch (e11) {
        a2.error(new R(e11));
      }
      return e10.push(...t10.clean()), { redirect: o2, cookies: e10 };
    }
    async function iP(e10, t10) {
      let {
          adapter: r10,
          jwt: n10,
          session: { strategy: i2 }
        } = e10,
        o2 = t10.value;
      if (!o2) return null;
      if ('jwt' === i2) {
        let t11 = e10.cookies.sessionToken.name,
          r11 = await n10.decode({ ...n10, token: o2, salt: t11 });
        if (r11 && r11.sub)
          return {
            id: r11.sub,
            name: r11.name,
            email: r11.email,
            image: r11.picture
          };
      } else {
        let e11 = await r10?.getSessionAndUser(o2);
        if (e11) return e11.user;
      }
      return null;
    }
    async function iO(e10, t10, r10, n10) {
      let i2 = iv(t10),
        { provider: o2 } = i2,
        { action: a2 } = e10.query ?? {};
      if ('register' !== a2 && 'authenticate' !== a2 && void 0 !== a2)
        return {
          status: 400,
          body: { error: 'Invalid action' },
          cookies: n10,
          headers: { 'Content-Type': 'application/json' }
        };
      let s2 = await iP(t10, r10),
        l2 = s2 ? { user: s2, exists: true } : await o2.getUserInfo(t10, e10),
        c2 = l2?.user;
      switch (
        (function (e11, t11, r11) {
          let { user: n11, exists: i3 = false } = r11 ?? {};
          switch (e11) {
            case 'authenticate':
              return 'authenticate';
            case 'register':
              if (n11 && t11 === i3) return 'register';
              break;
            case void 0:
              if (!t11) {
                if (!n11 || i3) return 'authenticate';
                return 'register';
              }
          }
          return null;
        })(a2, !!s2, l2)
      ) {
        case 'authenticate':
          return ip(i2, e10, c2, n10);
        case 'register':
          if ('string' == typeof c2?.email) return id(i2, e10, c2, n10);
        default:
          return {
            status: 400,
            body: { error: 'Invalid request' },
            cookies: n10,
            headers: { 'Content-Type': 'application/json' }
          };
      }
    }
    async function iR(e10, t10) {
      let { action: r10, providerId: n10, error: i2, method: o2 } = e10,
        a2 = t10.skipCSRFCheck === iI,
        { options: s2, cookies: c2 } = await t2({
          authOptions: t10,
          action: r10,
          providerId: n10,
          url: e10.url,
          callbackUrl: e10.body?.callbackUrl ?? e10.query?.callbackUrl,
          csrfToken: e10.body?.csrfToken,
          cookies: e10.cookies,
          isPost: 'POST' === o2,
          csrfDisabled: a2
        }),
        u2 = new l(s2.cookies.sessionToken, e10.cookies, s2.logger);
      if ('GET' === o2) {
        let t11 = rZ({ ...s2, query: e10.query, cookies: c2 });
        switch (r10) {
          case 'callback':
            return await iS(e10, s2, u2, c2);
          case 'csrf':
            return t11.csrf(a2, s2, c2);
          case 'error':
            return t11.error(i2);
          case 'providers':
            return t11.providers(s2.providers);
          case 'session':
            return await ix(s2, u2, c2);
          case 'signin':
            return t11.signin(n10, i2);
          case 'signout':
            return t11.signout();
          case 'verify-request':
            return t11.verifyRequest();
          case 'webauthn-options':
            return await iO(e10, s2, u2, c2);
        }
      } else {
        let { csrfTokenVerified: t11 } = s2;
        switch (r10) {
          case 'callback':
            return (
              'credentials' === s2.provider.type && tz(r10, t11),
              await iS(e10, s2, u2, c2)
            );
          case 'session':
            return tz(r10, t11), await ix(s2, u2, c2, true, e10.body?.data);
          case 'signin':
            return tz(r10, t11), await iC(e10, c2, s2);
          case 'signout':
            return tz(r10, t11), await iT(c2, u2, s2);
        }
      }
      throw new I(`Cannot handle action: ${r10}`);
    }
    let iI = Symbol('skip-csrf-check'),
      i$ = Symbol('return-type-raw');
    function iN(e10, t10, r10, n10, i2) {
      let o2,
        a2 = n10.AUTH_URL ?? n10.NEXTAUTH_URL;
      if (a2)
        (o2 = new URL(a2)),
          i2 &&
            '/' !== i2 &&
            '/' !== o2.pathname &&
            (tH.warn(
              o2.pathname === i2
                ? 'env-url-basepath-redundant'
                : 'env-url-basepath-mismatch'
            ),
            (o2.pathname = '/'));
      else {
        let e11 = r10.get('x-forwarded-host') ?? r10.get('host'),
          n11 = r10.get('x-forwarded-proto') ?? t10 ?? 'https',
          i3 = n11.endsWith(':') ? n11 : n11 + ':';
        o2 = new URL(`${i3}//${e11}`);
      }
      let s2 = o2.toString().replace(/\/$/, '');
      if (i2) {
        let t11 = i2?.replace(/(^\/|\/$)/g, '') ?? '';
        return new URL(`${s2}/${t11}/${e10}`);
      }
      return new URL(`${s2}/${e10}`);
    }
    async function iU(e10, t10) {
      !(function (e11 = {}, t11) {
        t11 || (tH.debug = () => {}),
          e11.error && (tH.error = e11.error),
          e11.warn && (tH.warn = e11.warn),
          e11.debug && (tH.debug = e11.debug);
      })(t10.logger, t10.debug);
      let r10 = await tB(e10, t10);
      if (!r10) return Response.json('Bad request.', { status: 400 });
      let n10 = (function (e11, t11) {
        let { url: r11 } = e11,
          n11 = [];
        if ((!V && t11.debug && n11.push('debug-enabled'), !t11.trustHost))
          return new U(`Host must be trusted. URL was: ${e11.url}`);
        if (!t11.secret?.length) return new x('Please define a `secret`.');
        let i3 = e11.query?.callbackUrl;
        if (i3 && !J(i3, r11.origin))
          return new y(`Invalid callback URL. Received: ${i3}`);
        let { callbackUrl: o3 } = s(
            t11.useSecureCookies ?? 'https:' === r11.protocol
          ),
          a2 = e11.cookies?.[t11.cookies?.callbackUrl?.name ?? o3.name];
        if (a2 && !J(a2, r11.origin))
          return new y(`Invalid callback URL. Received: ${a2}`);
        let l2 = false;
        for (let e12 of t11.providers) {
          let t12 = 'function' == typeof e12 ? e12() : e12;
          if (
            ('oauth' === t12.type || 'oidc' === t12.type) &&
            !(t12.issuer ?? t12.options?.issuer)
          ) {
            let e13;
            let { authorization: r12, token: n12, userinfo: i4 } = t12;
            if (
              ('string' == typeof r12 || r12?.url
                ? 'string' == typeof n12 || n12?.url
                  ? 'string' == typeof i4 || i4?.url || (e13 = 'userinfo')
                  : (e13 = 'token')
                : (e13 = 'authorization'),
              e13)
            )
              return new v(
                `Provider "${t12.id}" is missing both \`issuer\` and \`${e13}\` endpoint config. At least one of them is required.`
              );
          }
          if ('credentials' === t12.type) q = true;
          else if ('email' === t12.type) F = true;
          else if ('webauthn' === t12.type) {
            var u2;
            if (
              ((z = true),
              t12.simpleWebAuthnBrowserVersion &&
                ((u2 = t12.simpleWebAuthnBrowserVersion),
                !/^v\d+(?:\.\d+){0,2}$/.test(u2)))
            )
              return new c(
                `Invalid provider config for "${t12.id}": simpleWebAuthnBrowserVersion "${t12.simpleWebAuthnBrowserVersion}" must be a valid semver string.`
              );
            if (t12.enableConditionalUI) {
              if (l2)
                return new D(
                  "Multiple webauthn providers have 'enableConditionalUI' set to True. Only one provider can have this option enabled at a time."
                );
              if (
                ((l2 = true),
                !Object.values(t12.formFields).some(
                  (e13) =>
                    e13.autocomplete &&
                    e13.autocomplete.toString().indexOf('webauthn') > -1
                ))
              )
                return new H(
                  `Provider "${t12.id}" has 'enableConditionalUI' set to True, but none of its formFields have 'webauthn' in their autocomplete param.`
                );
            }
          }
        }
        if (q) {
          let e12 = t11.session?.strategy === 'database',
            r12 = !t11.providers.some(
              (e13) =>
                'credentials' !== ('function' == typeof e13 ? e13() : e13).type
            );
          if (e12 && r12)
            return new $(
              'Signing in with credentials only supported if JWT strategy is enabled'
            );
          if (
            t11.providers.some((e13) => {
              let t12 = 'function' == typeof e13 ? e13() : e13;
              return 'credentials' === t12.type && !t12.authorize;
            })
          )
            return new k(
              'Must define an authorize() handler to use credentials authentication provider'
            );
        }
        let { adapter: d2, session: p2 } = t11,
          f2 = [];
        if (F || p2?.strategy === 'database' || (!p2?.strategy && d2)) {
          if (F) {
            if (!d2) return new _('Email login requires an adapter.');
            f2.push(...G);
          } else {
            if (!d2) return new _('Database session requires an adapter.');
            f2.push(...X);
          }
        }
        if (z) {
          if (!t11.experimental?.enableWebAuthn)
            return new B(
              'WebAuthn is an experimental feature. To enable it, set `experimental.enableWebAuthn` to `true` in your config.'
            );
          if ((n11.push('experimental-webauthn'), !d2))
            return new _('WebAuthn requires an adapter.');
          f2.push(...Y);
        }
        if (d2) {
          let e12 = f2.filter((e13) => !(e13 in d2));
          if (e12.length)
            return new S(
              `Required adapter methods were missing: ${e12.join(', ')}`
            );
        }
        return V || (V = true), n11;
      })(r10, t10);
      if (Array.isArray(n10)) n10.forEach(tH.warn);
      else if (n10) {
        if (
          (tH.error(n10),
          !/* @__PURE__ */ new Set([
            'signin',
            'signout',
            'error',
            'verify-request'
          ]).has(r10.action) || 'GET' !== r10.method)
        )
          return Response.json(
            {
              message:
                'There was a problem with the server configuration. Check the server logs for more information.'
            },
            { status: 500 }
          );
        let { pages: e11, theme: i3 } = t10,
          o3 =
            e11?.error &&
            r10.url.searchParams.get('callbackUrl')?.startsWith(e11.error);
        return !e11?.error || o3
          ? (o3 &&
              tH.error(
                new h(
                  `The error page ${e11?.error} should not require authentication`
                )
              ),
            tV(rZ({ theme: i3 }).error('Configuration')))
          : Response.redirect(`${e11.error}?error=Configuration`);
      }
      let i2 = e10.headers?.has('X-Auth-Return-Redirect'),
        o2 = t10.raw === i$;
      try {
        let e11 = await iR(r10, t10);
        if (o2) return e11;
        let n11 = tV(e11),
          a2 = n11.headers.get('Location');
        if (!i2 || !a2) return n11;
        return Response.json({ url: a2 }, { headers: n11.headers });
      } catch (d2) {
        tH.error(d2);
        let n11 = d2 instanceof c;
        if (n11 && o2 && !i2) throw d2;
        if ('POST' === e10.method && 'session' === r10.action)
          return Response.json(null, { status: 400 });
        let a2 = new URLSearchParams({
          error: d2 instanceof c && M.has(d2.type) ? d2.type : 'Configuration'
        });
        d2 instanceof m && a2.set('code', d2.code);
        let s2 = (n11 && d2.kind) || 'error',
          l2 = t10.pages?.[s2] ?? `${t10.basePath}/${s2.toLowerCase()}`,
          u2 = `${r10.url.origin}${l2}?${a2}`;
        if (i2) return Response.json({ url: u2 });
        return Response.redirect(u2);
      }
    }
    var ij = r(68978),
      iL = r(63412);
    function iM(e10) {
      let t10 = process.env.AUTH_URL ?? process.env.NEXTAUTH_URL;
      if (!t10) return e10;
      let { origin: r10 } = new URL(t10),
        { href: n10, origin: i2 } = e10.nextUrl;
      return new ij.I(n10.replace(i2, r10), e10);
    }
    function iD(e10) {
      try {
        e10.secret ??
          (e10.secret = process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET);
        let t10 = process.env.AUTH_URL ?? process.env.NEXTAUTH_URL;
        if (!t10) return;
        let { pathname: r10 } = new URL(t10);
        if ('/' === r10) return;
        e10.basePath || (e10.basePath = r10);
      } catch {
      } finally {
        e10.basePath || (e10.basePath = '/api/auth'),
          (function (e11, t10) {
            try {
              let r10 = e11.AUTH_URL;
              r10 && !t10.basePath && (t10.basePath = new URL(r10).pathname);
            } catch {
            } finally {
              t10.basePath ?? (t10.basePath = '/auth');
            }
            if (!t10.secret?.length) {
              t10.secret = [];
              let r10 = e11.AUTH_SECRET;
              for (let n10 of (r10 && t10.secret.push(r10), [1, 2, 3])) {
                let r11 = e11[`AUTH_SECRET_${n10}`];
                r11 && t10.secret.unshift(r11);
              }
            }
            t10.redirectProxyUrl ??
              (t10.redirectProxyUrl = e11.AUTH_REDIRECT_PROXY_URL),
              t10.trustHost ??
                (t10.trustHost = !!(
                  e11.AUTH_URL ??
                  e11.AUTH_TRUST_HOST ??
                  e11.VERCEL ??
                  e11.CF_PAGES ??
                  'production' !== e11.NODE_ENV
                )),
              (t10.providers = t10.providers.map((t11) => {
                let r10 = 'function' == typeof t11 ? t11({}) : t11,
                  n10 = r10.id.toUpperCase().replace(/-/g, '_');
                return (
                  'oauth' === r10.type || 'oidc' === r10.type
                    ? (r10.clientId ?? (r10.clientId = e11[`AUTH_${n10}_ID`]),
                      r10.clientSecret ??
                        (r10.clientSecret = e11[`AUTH_${n10}_SECRET`]),
                      'oidc' === r10.type &&
                        (r10.issuer ??
                          (r10.issuer = e11[`AUTH_${n10}_ISSUER`])))
                    : 'email' === r10.type &&
                      (r10.apiKey ?? (r10.apiKey = e11[`AUTH_${n10}_KEY`])),
                  r10
                );
              }));
          })(process.env, e10);
      }
    }
    r(53059), 'undefined' == typeof URLPattern || URLPattern;
    var iH = r(73586);
    async function iW(e10, t10) {
      return iU(
        new Request(
          iN(
            'session',
            e10.get('x-forwarded-proto'),
            e10,
            process.env,
            t10.basePath
          ),
          { headers: { cookie: e10.get('cookie') ?? '' } }
        ),
        {
          ...t10,
          callbacks: {
            ...t10.callbacks,
            async session(...e11) {
              let r10 = (await t10.callbacks?.session?.(...e11)) ?? {
                ...e11[0].session,
                expires:
                  e11[0].session.expires?.toISOString?.() ??
                  e11[0].session.expires
              };
              return { user: e11[0].user ?? e11[0].token, ...r10 };
            }
          }
        }
      );
    }
    function iK(e10) {
      return 'function' == typeof e10;
    }
    function iB(e10, t10) {
      return 'function' == typeof e10
        ? (...r10) => {
            if (!r10.length) {
              let r11 = (0, iH.A)(),
                n11 = e10(void 0);
              return t10?.(n11), iW(r11, n11).then((e11) => e11.json());
            }
            if (r10[0] instanceof Request) {
              let n11 = r10[0],
                i3 = r10[1],
                o3 = e10(n11);
              return t10?.(o3), iV([n11, i3], o3);
            }
            if (iK(r10[0])) {
              let t11 = r10[0];
              return async (...r11) => iV(r11, e10(r11[0]), t11);
            }
            let n10 = 'req' in r10[0] ? r10[0].req : r10[0],
              i2 = 'res' in r10[0] ? r10[0].res : r10[1],
              o2 = e10(n10);
            return (
              t10?.(o2),
              iW(new Headers(n10.headers), o2).then(async (e11) => {
                let t11 = await e11.json();
                for (let t12 of e11.headers.getSetCookie())
                  'headers' in i2
                    ? i2.headers.append('set-cookie', t12)
                    : i2.appendHeader('set-cookie', t12);
                return t11;
              })
            );
          }
        : (...t11) => {
            if (!t11.length)
              return iW((0, iH.A)(), e10).then((e11) => e11.json());
            if (t11[0] instanceof Request) return iV([t11[0], t11[1]], e10);
            if (iK(t11[0])) {
              let r11 = t11[0];
              return async (...t12) => iV(t12, e10, r11).then((e11) => e11);
            }
            let r10 = 'req' in t11[0] ? t11[0].req : t11[0],
              n10 = 'res' in t11[0] ? t11[0].res : t11[1];
            return iW(new Headers(r10.headers), e10).then(async (e11) => {
              let t12 = await e11.json();
              for (let t13 of e11.headers.getSetCookie())
                'headers' in n10
                  ? n10.headers.append('set-cookie', t13)
                  : n10.appendHeader('set-cookie', t13);
              return t12;
            });
          };
    }
    async function iV(e10, t10, r10) {
      let n10 = iM(e10[0]),
        i2 = await iW(n10.headers, t10),
        o2 = await i2.json(),
        a2 = true;
      t10.callbacks?.authorized &&
        (a2 = await t10.callbacks.authorized({ request: n10, auth: o2 }));
      let s2 = iL.x.next?.();
      if (a2 instanceof Response) {
        s2 = a2;
        let e11 = a2.headers.get('Location'),
          { pathname: r11 } = n10.nextUrl;
        e11 &&
          (function (e12, t11, r12) {
            let n11 = t11.replace(`${e12}/`, ''),
              i3 = Object.values(r12.pages ?? {});
            return (iJ.has(n11) || i3.includes(t11)) && t11 === e12;
          })(r11, new URL(e11).pathname, t10) &&
          (a2 = true);
      } else if (r10)
        (n10.auth = o2), (s2 = (await r10(n10, e10[1])) ?? iL.x.next());
      else if (!a2) {
        let e11 = t10.pages?.signIn ?? `${t10.basePath}/signin`;
        if (n10.nextUrl.pathname !== e11) {
          let t11 = n10.nextUrl.clone();
          (t11.pathname = e11),
            t11.searchParams.set('callbackUrl', n10.nextUrl.href),
            (s2 = iL.x.redirect(t11));
        }
      }
      let l2 = new Response(s2?.body, s2);
      for (let e11 of i2.headers.getSetCookie())
        l2.headers.append('set-cookie', e11);
      return l2;
    }
    let iJ = /* @__PURE__ */ new Set([
      'providers',
      'session',
      'csrf',
      'signin',
      'signout',
      'callback',
      'verify-request',
      'error'
    ]);
    var iq = r(47701);
    async function iF(e10, t10 = {}, r10, n10) {
      let i2 = new Headers((0, iH.A)()),
        {
          redirect: o2 = true,
          redirectTo: a2,
          ...s2
        } = t10 instanceof FormData ? Object.fromEntries(t10) : t10,
        l2 = a2?.toString() ?? i2.get('Referer') ?? '/',
        c2 = iN(
          'signin',
          i2.get('x-forwarded-proto'),
          i2,
          process.env,
          n10.basePath
        );
      if (!e10)
        return (
          c2.searchParams.append('callbackUrl', l2),
          o2 && (0, iq.uX)(c2.toString()),
          c2.toString()
        );
      let u2 = `${c2}/${e10}?${new URLSearchParams(r10)}`,
        d2 = {};
      for (let t11 of n10.providers) {
        let { options: r11, ...n11 } = 'function' == typeof t11 ? t11() : t11,
          i3 = r11?.id ?? n11.id;
        if (i3 === e10) {
          d2 = { id: i3, type: r11?.type ?? n11.type };
          break;
        }
      }
      if (!d2.id) {
        let e11 = `${c2}?${new URLSearchParams({ callbackUrl: l2 })}`;
        return o2 && (0, iq.uX)(e11), e11;
      }
      'credentials' === d2.type && (u2 = u2.replace('signin', 'callback')),
        i2.set('Content-Type', 'application/x-www-form-urlencoded');
      let p2 = new Request(u2, {
          method: 'POST',
          headers: i2,
          body: new URLSearchParams({ ...s2, callbackUrl: l2 })
        }),
        f2 = await iU(p2, { ...n10, raw: i$, skipCSRFCheck: iI });
      for (let e11 of f2?.cookies ?? [])
        (0, iH.Qk)().set(e11.name, e11.value, e11.options);
      return o2 ? (0, iq.uX)(f2.redirect) : f2.redirect;
    }
    async function iz(e10, t10) {
      let r10 = new Headers((0, iH.A)());
      r10.set('Content-Type', 'application/x-www-form-urlencoded');
      let n10 = iN(
          'signout',
          r10.get('x-forwarded-proto'),
          r10,
          process.env,
          t10.basePath
        ),
        i2 = new URLSearchParams({
          callbackUrl: e10?.redirectTo ?? r10.get('Referer') ?? '/'
        }),
        o2 = new Request(n10, { method: 'POST', headers: r10, body: i2 }),
        a2 = await iU(o2, { ...t10, raw: i$, skipCSRFCheck: iI });
      for (let e11 of a2?.cookies ?? [])
        (0, iH.Qk)().set(e11.name, e11.value, e11.options);
      return e10?.redirect ?? true ? (0, iq.uX)(a2.redirect) : a2;
    }
    async function iG(e10, t10) {
      let r10 = new Headers((0, iH.A)());
      r10.set('Content-Type', 'application/json');
      let n10 = new Request(
          iN(
            'session',
            r10.get('x-forwarded-proto'),
            r10,
            process.env,
            t10.basePath
          ),
          { method: 'POST', headers: r10, body: JSON.stringify({ data: e10 }) }
        ),
        i2 = await iU(n10, { ...t10, raw: i$, skipCSRFCheck: iI });
      for (let e11 of i2?.cookies ?? [])
        (0, iH.Qk)().set(e11.name, e11.value, e11.options);
      return i2.body;
    }
    function iX(e10) {
      if ('function' == typeof e10) {
        let t11 = (t12) => {
          let r10 = e10(t12);
          return iD(r10), iU(iM(t12), r10);
        };
        return {
          handlers: { GET: t11, POST: t11 },
          auth: iB(e10, (e11) => iD(e11)),
          signIn: (t12, r10, n10) => {
            let i2 = e10(void 0);
            return iD(i2), iF(t12, r10, n10, i2);
          },
          signOut: (t12) => {
            let r10 = e10(void 0);
            return iD(r10), iz(t12, r10);
          },
          unstable_update: (t12) => {
            let r10 = e10(void 0);
            return iD(r10), iG(t12, r10);
          }
        };
      }
      iD(e10);
      let t10 = (t11) => iU(iM(t11), e10);
      return {
        handlers: { GET: t10, POST: t10 },
        auth: iB(e10),
        signIn: (t11, r10, n10) => iF(t11, r10, n10, e10),
        signOut: (t11) => iz(t11, e10),
        unstable_update: (t11) => iG(t11, e10)
      };
    }
  };
  __namedExportsObject['__chunk_64883'] = (e, t, r) => {
    'use strict';
    function n(e2) {
      let t2 = e2?.enterprise?.baseUrl ?? 'https://github.com',
        r2 = e2?.enterprise?.baseUrl
          ? `${e2?.enterprise?.baseUrl}/api/v3`
          : 'https://api.github.com';
      return {
        id: 'github',
        name: 'GitHub',
        type: 'oauth',
        authorization: {
          url: `${t2}/login/oauth/authorize`,
          params: { scope: 'read:user user:email' }
        },
        token: `${t2}/login/oauth/access_token`,
        userinfo: {
          url: `${r2}/user`,
          async request({ tokens: e3, provider: t3 }) {
            let n2 = await fetch(t3.userinfo?.url, {
              headers: {
                Authorization: `Bearer ${e3.access_token}`,
                'User-Agent': 'authjs'
              }
            }).then(async (e4) => await e4.json());
            if (!n2.email) {
              let t4 = await fetch(`${r2}/user/emails`, {
                headers: {
                  Authorization: `Bearer ${e3.access_token}`,
                  'User-Agent': 'authjs'
                }
              });
              if (t4.ok) {
                let e4 = await t4.json();
                n2.email = (e4.find((e5) => e5.primary) ?? e4[0]).email;
              }
            }
            return n2;
          }
        },
        profile: (e3) => ({
          id: e3.id.toString(),
          name: e3.name ?? e3.login,
          email: e3.email,
          image: e3.avatar_url
        }),
        style: { bg: '#24292f', text: '#fff' },
        options: e2
      };
    }
    r.d(t, { Z: () => n });
  };
  __namedExportsObject['__chunk_53488'] = (e, t, r) => {
    'use strict';
    function n(e2) {
      return {
        id: 'credentials',
        name: 'Credentials',
        type: 'credentials',
        credentials: {},
        authorize: () => null,
        options: e2
      };
    }
    r.d(t, { Z: () => n });
  };
  __namedExportsObject['__chunk_16254'] = (e, t, r) => {
    'use strict';
    r.d(t, { A: () => n.A });
    var n = r(649);
  };
  __namedExportsObject['__chunk_94051'] = (e, t, r) => {
    'use strict';
    r.d(t, { F: () => i, O: () => n.F });
    var n = r(4704);
    function i(e2) {
      let t2 = n.F.getStore();
      if (t2) return t2;
      throw Error(
        '`' +
          e2 +
          '` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context'
      );
    }
  };
  __namedExportsObject['__chunk_43083'] = (e, t, r) => {
    'use strict';
    r.d(t, { W: () => n.W });
    var n = r(87792);
  };
  __namedExportsObject['__chunk_3628'] = (e, t, r) => {
    'use strict';
    r.d(t, { _9: () => n }),
      'undefined' != typeof performance &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e2) => 'function' == typeof performance[e2]
        );
    class n extends Error {}
  };
  __namedExportsObject['__chunk_15403'] = (e, t, r) => {
    'use strict';
    r.d(t, { JV: () => c, vG: () => s });
    var n = r(57460),
      i = r(7257),
      o = r(59814);
    function a(e2) {
      let t2 = e2.startsWith('[') && e2.endsWith(']');
      t2 && (e2 = e2.slice(1, -1));
      let r2 = e2.startsWith('...');
      return r2 && (e2 = e2.slice(3)), { key: e2, repeat: r2, optional: t2 };
    }
    function s(e2) {
      let { parameterizedRoute: t2, groups: r2 } = (function (e3) {
        let t3 = (0, o.Q)(e3).slice(1).split('/'),
          r3 = {},
          s2 = 1;
        return {
          parameterizedRoute: t3
            .map((e4) => {
              let t4 = n.Wz.find((t5) => e4.startsWith(t5)),
                o2 = e4.match(/\[((?:\[.*\])|.+)\]/);
              if (t4 && o2) {
                let { key: e5, optional: n2, repeat: l2 } = a(o2[1]);
                return (
                  (r3[e5] = { pos: s2++, repeat: l2, optional: n2 }),
                  '/' + (0, i.f)(t4) + '([^/]+?)'
                );
              }
              if (!o2) return '/' + (0, i.f)(e4);
              {
                let { key: e5, repeat: t5, optional: n2 } = a(o2[1]);
                return (
                  (r3[e5] = { pos: s2++, repeat: t5, optional: n2 }),
                  t5 ? (n2 ? '(?:/(.+?))?' : '/(.+?)') : '/([^/]+?)'
                );
              }
            })
            .join(''),
          groups: r3
        };
      })(e2);
      return { re: RegExp('^' + t2 + '(?:/)?$'), groups: r2 };
    }
    function l(e2) {
      let {
          interceptionMarker: t2,
          getSafeRouteKey: r2,
          segment: n2,
          routeKeys: o2,
          keyPrefix: s2
        } = e2,
        { key: l2, optional: c2, repeat: u } = a(n2),
        d = l2.replace(/\W/g, '');
      s2 && (d = '' + s2 + d);
      let p = false;
      (0 === d.length || d.length > 30) && (p = true),
        isNaN(parseInt(d.slice(0, 1))) || (p = true),
        p && (d = r2()),
        s2 ? (o2[d] = '' + s2 + l2) : (o2[d] = l2);
      let f = t2 ? (0, i.f)(t2) : '';
      return u
        ? c2
          ? '(?:/' + f + '(?<' + d + '>.+?))?'
          : '/' + f + '(?<' + d + '>.+?)'
        : '/' + f + '(?<' + d + '>[^/]+?)';
    }
    function c(e2, t2) {
      let r2 = (function (e3, t3) {
        let r3;
        let a2 = (0, o.Q)(e3).slice(1).split('/'),
          s2 =
            ((r3 = 0),
            () => {
              let e4 = '',
                t4 = ++r3;
              for (; t4 > 0; )
                (e4 += String.fromCharCode(97 + ((t4 - 1) % 26))),
                  (t4 = Math.floor((t4 - 1) / 26));
              return e4;
            }),
          c2 = {};
        return {
          namedParameterizedRoute: a2
            .map((e4) => {
              let r4 = n.Wz.some((t4) => e4.startsWith(t4)),
                o2 = e4.match(/\[((?:\[.*\])|.+)\]/);
              if (r4 && o2) {
                let [r5] = e4.split(o2[0]);
                return l({
                  getSafeRouteKey: s2,
                  interceptionMarker: r5,
                  segment: o2[1],
                  routeKeys: c2,
                  keyPrefix: t3 ? 'nxtI' : void 0
                });
              }
              return o2
                ? l({
                    getSafeRouteKey: s2,
                    segment: o2[1],
                    routeKeys: c2,
                    keyPrefix: t3 ? 'nxtP' : void 0
                  })
                : '/' + (0, i.f)(e4);
            })
            .join(''),
          routeKeys: c2
        };
      })(e2, t2);
      return {
        ...s(e2),
        namedRegex: '^' + r2.namedParameterizedRoute + '(?:/)?$',
        routeKeys: r2.routeKeys
      };
    }
  };
  __namedExportsObject['__chunk_40003'] = (e, t, r) => {
    'use strict';
    r.d(t, { t: () => i });
    var n = r(3628);
    function i(e2) {
      let { re: t2, groups: r2 } = e2;
      return (e3) => {
        let i2 = t2.exec(e3);
        if (!i2) return false;
        let o = (e4) => {
            try {
              return decodeURIComponent(e4);
            } catch (e5) {
              throw new n._9('failed to decode param');
            }
          },
          a = {};
        return (
          Object.keys(r2).forEach((e4) => {
            let t3 = r2[e4],
              n2 = i2[t3.pos];
            void 0 !== n2 &&
              (a[e4] = ~n2.indexOf('/')
                ? n2.split('/').map((e5) => o(e5))
                : t3.repeat
                ? [o(n2)]
                : o(n2));
          }),
          a
        );
      };
    }
  };
  __namedExportsObject['__chunk_59814'] = (e, t, r) => {
    'use strict';
    function n(e2) {
      return e2.replace(/\/$/, '') || '/';
    }
    r.d(t, { Q: () => n });
  };
  __namedExportsObject['__chunk_67114'] = (e, t, r) => {
    'use strict';
    function n(e2) {
      let t2 = {};
      return (
        e2.forEach((e3, r2) => {
          void 0 === t2[r2]
            ? (t2[r2] = e3)
            : Array.isArray(t2[r2])
            ? t2[r2].push(e3)
            : (t2[r2] = [t2[r2], e3]);
        }),
        t2
      );
    }
    r.d(t, { u5: () => n });
  };
  __namedExportsObject['__chunk_97894'] = (e, t, r) => {
    'use strict';
    r.d(t, { w: () => i, b: () => o });
    var n = r(94414);
    function i(e2) {
      return (0, n.e)(
        e2
          .split('/')
          .reduce(
            (e3, t2, r2, n2) =>
              t2
                ? ('(' === t2[0] && t2.endsWith(')')) ||
                  '@' === t2[0] ||
                  (('page' === t2 || 'route' === t2) && r2 === n2.length - 1)
                  ? e3
                  : e3 + '/' + t2
                : e3,
            ''
          )
      );
    }
    function o(e2) {
      return e2.replace(/\.rsc($|\?)/, '$1');
    }
  };
  __namedExportsObject['__chunk_94414'] = (e, t, r) => {
    'use strict';
    function n(e2) {
      return e2.startsWith('/') ? e2 : '/' + e2;
    }
    r.d(t, { e: () => n });
  };
  __namedExportsObject['__chunk_99307'] = (e, t, r) => {
    'use strict';
    let n;
    (n = r(92501)), (e.exports = n);
  };
  __namedExportsObject['__chunk_90074'] = (e, t, r) => {
    'use strict';
    function n(e2, t2) {
      let r2;
      let n2 = e2.split('/');
      return (
        (t2 || []).some(
          (t3) =>
            !!n2[1] &&
            n2[1].toLowerCase() === t3.toLowerCase() &&
            ((r2 = t3), n2.splice(1, 1), (e2 = n2.join('/') || '/'), true)
        ),
        { pathname: e2, detectedLocale: r2 }
      );
    }
    r.d(t, { h: () => n });
  };
  __namedExportsObject['__chunk_7257'] = (e, t, r) => {
    'use strict';
    r.d(t, { f: () => o });
    let n = /[|\\{}()[\]^$+*?.-]/,
      i = /[|\\{}()[\]^$+*?.-]/g;
    function o(e2) {
      return n.test(e2) ? e2.replace(i, '\\$&') : e2;
    }
  };
  __namedExportsObject['__chunk_4123'] = (e, t, r) => {
    'use strict';
    function n(e2) {
      let t2 = new Headers();
      for (let [r2, n2] of Object.entries(e2))
        for (let e3 of Array.isArray(n2) ? n2 : [n2])
          void 0 !== e3 &&
            ('number' == typeof e3 && (e3 = e3.toString()), t2.append(r2, e3));
      return t2;
    }
    function i(e2) {
      let t2 = {},
        r2 = [];
      if (e2)
        for (let [n2, i2] of e2.entries())
          'set-cookie' === n2.toLowerCase()
            ? (r2.push(
                ...(function (e3) {
                  var t3,
                    r3,
                    n3,
                    i3,
                    o2,
                    a = [],
                    s = 0;
                  function l() {
                    for (; s < e3.length && /\s/.test(e3.charAt(s)); ) s += 1;
                    return s < e3.length;
                  }
                  for (; s < e3.length; ) {
                    for (t3 = s, o2 = false; l(); )
                      if (',' === (r3 = e3.charAt(s))) {
                        for (
                          n3 = s, s += 1, l(), i3 = s;
                          s < e3.length &&
                          '=' !== (r3 = e3.charAt(s)) &&
                          ';' !== r3 &&
                          ',' !== r3;

                        )
                          s += 1;
                        s < e3.length && '=' === e3.charAt(s)
                          ? ((o2 = true),
                            (s = i3),
                            a.push(e3.substring(t3, n3)),
                            (t3 = s))
                          : (s = n3 + 1);
                      } else s += 1;
                    (!o2 || s >= e3.length) &&
                      a.push(e3.substring(t3, e3.length));
                  }
                  return a;
                })(i2)
              ),
              (t2[n2] = 1 === r2.length ? r2[0] : r2))
            : (t2[n2] = i2);
      return t2;
    }
    function o(e2) {
      try {
        return String(new URL(String(e2)));
      } catch (t2) {
        throw Error(
          `URL is malformed "${String(
            e2
          )}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,
          { cause: t2 }
        );
      }
    }
    r.d(t, { EK: () => n, lb: () => i, r4: () => o });
  };
  __namedExportsObject['__chunk_63412'] = (e, t, r) => {
    'use strict';
    r.d(t, { x: () => c });
    var n = r(86617),
      i = r(4123),
      o = r(1812);
    let a = Symbol('internal response'),
      s = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    function l(e2, t2) {
      var r2;
      if (
        null == e2 ? void 0 : null == (r2 = e2.request) ? void 0 : r2.headers
      ) {
        if (!(e2.request.headers instanceof Headers))
          throw Error('request.headers must be an instance of Headers');
        let r3 = [];
        for (let [n2, i2] of e2.request.headers)
          t2.set('x-middleware-request-' + n2, i2), r3.push(n2);
        t2.set('x-middleware-override-headers', r3.join(','));
      }
    }
    class c extends Response {
      constructor(e2, t2 = {}) {
        super(e2, t2),
          (this[a] = {
            cookies: new o.n(this.headers),
            url: t2.url
              ? new n.c(t2.url, {
                  headers: (0, i.lb)(this.headers),
                  nextConfig: t2.nextConfig
                })
              : void 0
          });
      }
      [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
          cookies: this.cookies,
          url: this.url,
          body: this.body,
          bodyUsed: this.bodyUsed,
          headers: Object.fromEntries(this.headers),
          ok: this.ok,
          redirected: this.redirected,
          status: this.status,
          statusText: this.statusText,
          type: this.type
        };
      }
      get cookies() {
        return this[a].cookies;
      }
      static json(e2, t2) {
        let r2 = Response.json(e2, t2);
        return new c(r2.body, r2);
      }
      static redirect(e2, t2) {
        let r2 =
          'number' == typeof t2 ? t2 : (null == t2 ? void 0 : t2.status) ?? 307;
        if (!s.has(r2))
          throw RangeError(
            'Failed to execute "redirect" on "response": Invalid status code'
          );
        let n2 = 'object' == typeof t2 ? t2 : {},
          o2 = new Headers(null == n2 ? void 0 : n2.headers);
        return (
          o2.set('Location', (0, i.r4)(e2)),
          new c(null, { ...n2, headers: o2, status: r2 })
        );
      }
      static rewrite(e2, t2) {
        let r2 = new Headers(null == t2 ? void 0 : t2.headers);
        return (
          r2.set('x-middleware-rewrite', (0, i.r4)(e2)),
          l(t2, r2),
          new c(null, { ...t2, headers: r2 })
        );
      }
      static next(e2) {
        let t2 = new Headers(null == e2 ? void 0 : e2.headers);
        return (
          t2.set('x-middleware-next', '1'),
          l(e2, t2),
          new c(null, { ...e2, headers: t2 })
        );
      }
    }
  };
  __namedExportsObject['__chunk_68978'] = (e, t, r) => {
    'use strict';
    r.d(t, { I: () => l });
    var n = r(86617),
      i = r(4123),
      o = r(85767),
      a = r(1812);
    let s = Symbol('internal request');
    class l extends Request {
      constructor(e2, t2 = {}) {
        let r2 = 'string' != typeof e2 && 'url' in e2 ? e2.url : String(e2);
        (0, i.r4)(r2), e2 instanceof Request ? super(e2, t2) : super(r2, t2);
        let o2 = new n.c(r2, {
          headers: (0, i.lb)(this.headers),
          nextConfig: t2.nextConfig
        });
        this[s] = {
          cookies: new a.q(this.headers),
          geo: t2.geo || {},
          ip: t2.ip,
          nextUrl: o2,
          url: o2.toString()
        };
      }
      [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
          cookies: this.cookies,
          geo: this.geo,
          ip: this.ip,
          nextUrl: this.nextUrl,
          url: this.url,
          bodyUsed: this.bodyUsed,
          cache: this.cache,
          credentials: this.credentials,
          destination: this.destination,
          headers: Object.fromEntries(this.headers),
          integrity: this.integrity,
          keepalive: this.keepalive,
          method: this.method,
          mode: this.mode,
          redirect: this.redirect,
          referrer: this.referrer,
          referrerPolicy: this.referrerPolicy,
          signal: this.signal
        };
      }
      get cookies() {
        return this[s].cookies;
      }
      get geo() {
        return this[s].geo;
      }
      get ip() {
        return this[s].ip;
      }
      get nextUrl() {
        return this[s].nextUrl;
      }
      get page() {
        throw new o.cR();
      }
      get ua() {
        throw new o.Y5();
      }
      get url() {
        return this[s].url;
      }
    }
  };
  __namedExportsObject['__chunk_1812'] = (e, t, r) => {
    'use strict';
    r.d(t, { n: () => n.ResponseCookies, q: () => n.RequestCookies });
    var n = r(12328);
  };
  __namedExportsObject['__chunk_1673'] = (e, t, r) => {
    'use strict';
    r.d(t, { Qb: () => s, _5: () => c, vr: () => u });
    var n = r(1812),
      i = r(47398),
      o = r(16254);
    class a extends Error {
      constructor() {
        super(
          'Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options'
        );
      }
      static callable() {
        throw new a();
      }
    }
    class s {
      static seal(e2) {
        return new Proxy(e2, {
          get(e3, t2, r2) {
            switch (t2) {
              case 'clear':
              case 'delete':
              case 'set':
                return a.callable;
              default:
                return i.g.get(e3, t2, r2);
            }
          }
        });
      }
    }
    let l = Symbol.for('next.mutated.cookies');
    function c(e2, t2) {
      let r2 = (function (e3) {
        let t3 = e3[l];
        return t3 && Array.isArray(t3) && 0 !== t3.length ? t3 : [];
      })(t2);
      if (0 === r2.length) return false;
      let i2 = new n.n(e2),
        o2 = i2.getAll();
      for (let e3 of r2) i2.set(e3);
      for (let e3 of o2) i2.set(e3);
      return true;
    }
    class u {
      static wrap(e2, t2) {
        let r2 = new n.n(new Headers());
        for (let t3 of e2.getAll()) r2.set(t3);
        let a2 = [],
          s2 = /* @__PURE__ */ new Set(),
          c2 = () => {
            let e3 = o.A.getStore();
            if (
              (e3 && (e3.pathWasRevalidated = true),
              (a2 = r2.getAll().filter((e4) => s2.has(e4.name))),
              t2)
            ) {
              let e4 = [];
              for (let t3 of a2) {
                let r3 = new n.n(new Headers());
                r3.set(t3), e4.push(r3.toString());
              }
              t2(e4);
            }
          };
        return new Proxy(r2, {
          get(e3, t3, r3) {
            switch (t3) {
              case l:
                return a2;
              case 'delete':
                return function (...t4) {
                  s2.add('string' == typeof t4[0] ? t4[0] : t4[0].name);
                  try {
                    e3.delete(...t4);
                  } finally {
                    c2();
                  }
                };
              case 'set':
                return function (...t4) {
                  s2.add('string' == typeof t4[0] ? t4[0] : t4[0].name);
                  try {
                    return e3.set(...t4);
                  } finally {
                    c2();
                  }
                };
              default:
                return i.g.get(e3, t3, r3);
            }
          }
        });
      }
    }
  };
  __namedExportsObject['__chunk_47398'] = (e, t, r) => {
    'use strict';
    r.d(t, { g: () => n });
    class n {
      static get(e2, t2, r2) {
        let n2 = Reflect.get(e2, t2, r2);
        return 'function' == typeof n2 ? n2.bind(e2) : n2;
      }
      static set(e2, t2, r2, n2) {
        return Reflect.set(e2, t2, r2, n2);
      }
      static has(e2, t2) {
        return Reflect.has(e2, t2);
      }
      static deleteProperty(e2, t2) {
        return Reflect.deleteProperty(e2, t2);
      }
    }
  };
  __namedExportsObject['__chunk_65376'] = (e, t, r) => {
    'use strict';
    r.d(t, { h: () => o });
    var n = r(47398);
    class i extends Error {
      constructor() {
        super(
          'Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers'
        );
      }
      static callable() {
        throw new i();
      }
    }
    class o extends Headers {
      constructor(e2) {
        super(),
          (this.headers = new Proxy(e2, {
            get(t2, r2, i2) {
              if ('symbol' == typeof r2) return n.g.get(t2, r2, i2);
              let o2 = r2.toLowerCase(),
                a = Object.keys(e2).find((e3) => e3.toLowerCase() === o2);
              if (void 0 !== a) return n.g.get(t2, a, i2);
            },
            set(t2, r2, i2, o2) {
              if ('symbol' == typeof r2) return n.g.set(t2, r2, i2, o2);
              let a = r2.toLowerCase(),
                s = Object.keys(e2).find((e3) => e3.toLowerCase() === a);
              return n.g.set(t2, s ?? r2, i2, o2);
            },
            has(t2, r2) {
              if ('symbol' == typeof r2) return n.g.has(t2, r2);
              let i2 = r2.toLowerCase(),
                o2 = Object.keys(e2).find((e3) => e3.toLowerCase() === i2);
              return void 0 !== o2 && n.g.has(t2, o2);
            },
            deleteProperty(t2, r2) {
              if ('symbol' == typeof r2) return n.g.deleteProperty(t2, r2);
              let i2 = r2.toLowerCase(),
                o2 = Object.keys(e2).find((e3) => e3.toLowerCase() === i2);
              return void 0 === o2 || n.g.deleteProperty(t2, o2);
            }
          }));
      }
      static seal(e2) {
        return new Proxy(e2, {
          get(e3, t2, r2) {
            switch (t2) {
              case 'append':
              case 'delete':
              case 'set':
                return i.callable;
              default:
                return n.g.get(e3, t2, r2);
            }
          }
        });
      }
      merge(e2) {
        return Array.isArray(e2) ? e2.join(', ') : e2;
      }
      static from(e2) {
        return e2 instanceof Headers ? e2 : new o(e2);
      }
      append(e2, t2) {
        let r2 = this.headers[e2];
        'string' == typeof r2
          ? (this.headers[e2] = [r2, t2])
          : Array.isArray(r2)
          ? r2.push(t2)
          : (this.headers[e2] = t2);
      }
      delete(e2) {
        delete this.headers[e2];
      }
      get(e2) {
        let t2 = this.headers[e2];
        return void 0 !== t2 ? this.merge(t2) : null;
      }
      has(e2) {
        return void 0 !== this.headers[e2];
      }
      set(e2, t2) {
        this.headers[e2] = t2;
      }
      forEach(e2, t2) {
        for (let [r2, n2] of this.entries()) e2.call(t2, n2, r2, this);
      }
      *entries() {
        for (let e2 of Object.keys(this.headers)) {
          let t2 = e2.toLowerCase(),
            r2 = this.get(t2);
          yield [t2, r2];
        }
      }
      *keys() {
        for (let e2 of Object.keys(this.headers)) {
          let t2 = e2.toLowerCase();
          yield t2;
        }
      }
      *values() {
        for (let e2 of Object.keys(this.headers)) {
          let t2 = this.get(e2);
          yield t2;
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    }
  };
  __namedExportsObject['__chunk_86617'] = (e, t, r) => {
    'use strict';
    r.d(t, { c: () => p });
    var n = r(59814);
    function i(e2) {
      let t2 = e2.indexOf('#'),
        r2 = e2.indexOf('?'),
        n2 = r2 > -1 && (t2 < 0 || r2 < t2);
      return n2 || t2 > -1
        ? {
            pathname: e2.substring(0, n2 ? r2 : t2),
            query: n2 ? e2.substring(r2, t2 > -1 ? t2 : void 0) : '',
            hash: t2 > -1 ? e2.slice(t2) : ''
          }
        : { pathname: e2, query: '', hash: '' };
    }
    function o(e2, t2) {
      if (!e2.startsWith('/') || !t2) return e2;
      let { pathname: r2, query: n2, hash: o2 } = i(e2);
      return '' + t2 + r2 + n2 + o2;
    }
    function a(e2, t2) {
      if (!e2.startsWith('/') || !t2) return e2;
      let { pathname: r2, query: n2, hash: o2 } = i(e2);
      return '' + r2 + t2 + n2 + o2;
    }
    function s(e2, t2) {
      if ('string' != typeof e2) return false;
      let { pathname: r2 } = i(e2);
      return r2 === t2 || r2.startsWith(t2 + '/');
    }
    var l = r(90074);
    let c =
      /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
    function u(e2, t2) {
      return new URL(
        String(e2).replace(c, 'localhost'),
        t2 && String(t2).replace(c, 'localhost')
      );
    }
    let d = Symbol('NextURLInternal');
    class p {
      constructor(e2, t2, r2) {
        let n2, i2;
        ('object' == typeof t2 && 'pathname' in t2) || 'string' == typeof t2
          ? ((n2 = t2), (i2 = r2 || {}))
          : (i2 = r2 || t2 || {}),
          (this[d] = { url: u(e2, n2 ?? i2.base), options: i2, basePath: '' }),
          this.analyze();
      }
      analyze() {
        var e2, t2, r2, n2, i2;
        let o2 = (function (e3, t3) {
            var r3, n3;
            let {
                basePath: i3,
                i18n: o3,
                trailingSlash: a3
              } = null != (r3 = t3.nextConfig) ? r3 : {},
              c3 = {
                pathname: e3,
                trailingSlash: '/' !== e3 ? e3.endsWith('/') : a3
              };
            i3 &&
              s(c3.pathname, i3) &&
              ((c3.pathname = (function (e4, t4) {
                if (!s(e4, t4)) return e4;
                let r4 = e4.slice(t4.length);
                return r4.startsWith('/') ? r4 : '/' + r4;
              })(c3.pathname, i3)),
              (c3.basePath = i3));
            let u2 = c3.pathname;
            if (
              c3.pathname.startsWith('/_next/data/') &&
              c3.pathname.endsWith('.json')
            ) {
              let e4 = c3.pathname
                  .replace(/^\/_next\/data\//, '')
                  .replace(/\.json$/, '')
                  .split('/'),
                r4 = e4[0];
              (c3.buildId = r4),
                (u2 = 'index' !== e4[1] ? '/' + e4.slice(1).join('/') : '/'),
                true === t3.parseData && (c3.pathname = u2);
            }
            if (o3) {
              let e4 = t3.i18nProvider
                ? t3.i18nProvider.analyze(c3.pathname)
                : (0, l.h)(c3.pathname, o3.locales);
              (c3.locale = e4.detectedLocale),
                (c3.pathname = null != (n3 = e4.pathname) ? n3 : c3.pathname),
                !e4.detectedLocale &&
                  c3.buildId &&
                  (e4 = t3.i18nProvider
                    ? t3.i18nProvider.analyze(u2)
                    : (0, l.h)(u2, o3.locales)).detectedLocale &&
                  (c3.locale = e4.detectedLocale);
            }
            return c3;
          })(this[d].url.pathname, {
            nextConfig: this[d].options.nextConfig,
            parseData: true,
            i18nProvider: this[d].options.i18nProvider
          }),
          a2 = (function (e3, t3) {
            let r3;
            if ((null == t3 ? void 0 : t3.host) && !Array.isArray(t3.host))
              r3 = t3.host.toString().split(':', 1)[0];
            else {
              if (!e3.hostname) return;
              r3 = e3.hostname;
            }
            return r3.toLowerCase();
          })(this[d].url, this[d].options.headers);
        this[d].domainLocale = this[d].options.i18nProvider
          ? this[d].options.i18nProvider.detectDomainLocale(a2)
          : (function (e3, t3, r3) {
              if (e3)
                for (let o3 of (r3 && (r3 = r3.toLowerCase()), e3)) {
                  var n3, i3;
                  if (
                    t3 ===
                      (null == (n3 = o3.domain)
                        ? void 0
                        : n3.split(':', 1)[0].toLowerCase()) ||
                    r3 === o3.defaultLocale.toLowerCase() ||
                    (null == (i3 = o3.locales)
                      ? void 0
                      : i3.some((e4) => e4.toLowerCase() === r3))
                  )
                    return o3;
                }
            })(
              null == (t2 = this[d].options.nextConfig)
                ? void 0
                : null == (e2 = t2.i18n)
                ? void 0
                : e2.domains,
              a2
            );
        let c2 =
          (null == (r2 = this[d].domainLocale) ? void 0 : r2.defaultLocale) ||
          (null == (i2 = this[d].options.nextConfig)
            ? void 0
            : null == (n2 = i2.i18n)
            ? void 0
            : n2.defaultLocale);
        (this[d].url.pathname = o2.pathname),
          (this[d].defaultLocale = c2),
          (this[d].basePath = o2.basePath ?? ''),
          (this[d].buildId = o2.buildId),
          (this[d].locale = o2.locale ?? c2),
          (this[d].trailingSlash = o2.trailingSlash);
      }
      formatPathname() {
        var e2;
        let t2;
        return (
          (t2 = (function (e3, t3, r2, n2) {
            if (!t3 || t3 === r2) return e3;
            let i2 = e3.toLowerCase();
            return !n2 && (s(i2, '/api') || s(i2, '/' + t3.toLowerCase()))
              ? e3
              : o(e3, '/' + t3);
          })(
            (e2 = {
              basePath: this[d].basePath,
              buildId: this[d].buildId,
              defaultLocale: this[d].options.forceLocale
                ? void 0
                : this[d].defaultLocale,
              locale: this[d].locale,
              pathname: this[d].url.pathname,
              trailingSlash: this[d].trailingSlash
            }).pathname,
            e2.locale,
            e2.buildId ? void 0 : e2.defaultLocale,
            e2.ignorePrefix
          )),
          (e2.buildId || !e2.trailingSlash) && (t2 = (0, n.Q)(t2)),
          e2.buildId &&
            (t2 = a(
              o(t2, '/_next/data/' + e2.buildId),
              '/' === e2.pathname ? 'index.json' : '.json'
            )),
          (t2 = o(t2, e2.basePath)),
          !e2.buildId && e2.trailingSlash
            ? t2.endsWith('/')
              ? t2
              : a(t2, '/')
            : (0, n.Q)(t2)
        );
      }
      formatSearch() {
        return this[d].url.search;
      }
      get buildId() {
        return this[d].buildId;
      }
      set buildId(e2) {
        this[d].buildId = e2;
      }
      get locale() {
        return this[d].locale ?? '';
      }
      set locale(e2) {
        var t2, r2;
        if (
          !this[d].locale ||
          !(null == (r2 = this[d].options.nextConfig)
            ? void 0
            : null == (t2 = r2.i18n)
            ? void 0
            : t2.locales.includes(e2))
        )
          throw TypeError(
            `The NextURL configuration includes no locale "${e2}"`
          );
        this[d].locale = e2;
      }
      get defaultLocale() {
        return this[d].defaultLocale;
      }
      get domainLocale() {
        return this[d].domainLocale;
      }
      get searchParams() {
        return this[d].url.searchParams;
      }
      get host() {
        return this[d].url.host;
      }
      set host(e2) {
        this[d].url.host = e2;
      }
      get hostname() {
        return this[d].url.hostname;
      }
      set hostname(e2) {
        this[d].url.hostname = e2;
      }
      get port() {
        return this[d].url.port;
      }
      set port(e2) {
        this[d].url.port = e2;
      }
      get protocol() {
        return this[d].url.protocol;
      }
      set protocol(e2) {
        this[d].url.protocol = e2;
      }
      get href() {
        let e2 = this.formatPathname(),
          t2 = this.formatSearch();
        return `${this.protocol}//${this.host}${e2}${t2}${this.hash}`;
      }
      set href(e2) {
        (this[d].url = u(e2)), this.analyze();
      }
      get origin() {
        return this[d].url.origin;
      }
      get pathname() {
        return this[d].url.pathname;
      }
      set pathname(e2) {
        this[d].url.pathname = e2;
      }
      get hash() {
        return this[d].url.hash;
      }
      set hash(e2) {
        this[d].url.hash = e2;
      }
      get search() {
        return this[d].url.search;
      }
      set search(e2) {
        this[d].url.search = e2;
      }
      get password() {
        return this[d].url.password;
      }
      set password(e2) {
        this[d].url.password = e2;
      }
      get username() {
        return this[d].url.username;
      }
      set username(e2) {
        this[d].url.username = e2;
      }
      get basePath() {
        return this[d].basePath;
      }
      set basePath(e2) {
        this[d].basePath = e2.startsWith('/') ? e2 : `/${e2}`;
      }
      toString() {
        return this.href;
      }
      toJSON() {
        return this.href;
      }
      [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
          href: this.href,
          origin: this.origin,
          protocol: this.protocol,
          username: this.username,
          password: this.password,
          host: this.host,
          hostname: this.hostname,
          port: this.port,
          pathname: this.pathname,
          search: this.search,
          searchParams: this.searchParams,
          hash: this.hash
        };
      }
      clone() {
        return new p(String(this), this[d].options);
      }
    }
  };
  __namedExportsObject['__chunk_85767'] = (e, t, r) => {
    'use strict';
    r.d(t, { Y5: () => o, cR: () => i, qJ: () => n });
    class n extends Error {
      constructor({ page: e2 }) {
        super(`The middleware "${e2}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
      }
    }
    class i extends Error {
      constructor() {
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
      }
    }
    class o extends Error {
      constructor() {
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
      }
    }
  };
  __namedExportsObject['__chunk_56839'] = (e, t, r) => {
    'use strict';
    r.d(t, { IC: () => v, oE: () => m });
    var n = r(46443),
      i = r(90074),
      o = r(17649),
      a = r(15403),
      s = r(40003),
      l = r(7257),
      c = r(67114);
    r(3628);
    var u = r(57460),
      d = r(48690);
    function p(e2) {
      return e2.replace(/__ESC_COLON_/gi, ':');
    }
    function f(e2, t2) {
      if (!e2.includes(':')) return e2;
      for (let r2 of Object.keys(t2))
        e2.includes(':' + r2) &&
          (e2 = e2
            .replace(
              RegExp(':' + r2 + '\\*', 'g'),
              ':' + r2 + '--ESCAPED_PARAM_ASTERISKS'
            )
            .replace(
              RegExp(':' + r2 + '\\?', 'g'),
              ':' + r2 + '--ESCAPED_PARAM_QUESTION'
            )
            .replace(
              RegExp(':' + r2 + '\\+', 'g'),
              ':' + r2 + '--ESCAPED_PARAM_PLUS'
            )
            .replace(
              RegExp(':' + r2 + '(?!\\w)', 'g'),
              '--ESCAPED_PARAM_COLON' + r2
            ));
      return (
        (e2 = e2
          .replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1')
          .replace(/--ESCAPED_PARAM_PLUS/g, '+')
          .replace(/--ESCAPED_PARAM_COLON/g, ':')
          .replace(/--ESCAPED_PARAM_QUESTION/g, '?')
          .replace(/--ESCAPED_PARAM_ASTERISKS/g, '*')),
        (0, o.MY)('/' + e2, { validate: false })(t2).slice(1)
      );
    }
    var h = r(59814),
      g = r(97894),
      y = r(58997);
    function m(e2, t2, r2) {
      if (!r2) return e2;
      for (let n2 of Object.keys(r2.groups)) {
        let { optional: i2, repeat: o2 } = r2.groups[n2],
          a2 = `[${o2 ? '...' : ''}${n2}]`;
        i2 && (a2 = `[${a2}]`);
        let s2 = e2.indexOf(a2);
        if (s2 > -1) {
          let r3;
          let i3 = t2[n2];
          (r3 = Array.isArray(i3)
            ? i3.map((e3) => e3 && encodeURIComponent(e3)).join('/')
            : i3
            ? encodeURIComponent(i3)
            : ''),
            (e2 = e2.slice(0, s2) + r3 + e2.slice(s2 + a2.length));
        }
      }
      return e2;
    }
    function v({
      page: e2,
      i18n: t2,
      basePath: v2,
      rewrites: b,
      pageIsDynamic: w,
      trailingSlash: _,
      caseSensitive: S
    }) {
      let k, x, E;
      return (
        w && ((k = (0, a.JV)(e2, false)), (E = (x = (0, s.t)(k))(e2))),
        {
          handleRewrites: function (n2, a2) {
            let s2 = {},
              g2 = a2.pathname,
              y2 = (h2) => {
                let y3 = (function (e3, t3) {
                  let r2 = [],
                    n3 = (0, o.Bo)(e3, r2, {
                      delimiter: '/',
                      sensitive:
                        'boolean' ==
                          typeof (null == t3 ? void 0 : t3.sensitive) &&
                        t3.sensitive,
                      strict: null == t3 ? void 0 : t3.strict
                    }),
                    i2 = (0, o.WS)(
                      (null == t3 ? void 0 : t3.regexModifier)
                        ? new RegExp(t3.regexModifier(n3.source), n3.flags)
                        : n3,
                      r2
                    );
                  return (e4, n4) => {
                    if ('string' != typeof e4) return false;
                    let o2 = i2(e4);
                    if (!o2) return false;
                    if (null == t3 ? void 0 : t3.removeUnnamedParams)
                      for (let e5 of r2)
                        'number' == typeof e5.name && delete o2.params[e5.name];
                    return { ...n4, ...o2.params };
                  };
                })(h2.source + (_ ? '(/)?' : ''), {
                  removeUnnamedParams: true,
                  strict: true,
                  sensitive: !!S
                })(a2.pathname);
                if ((h2.has || h2.missing) && y3) {
                  let e3 = (function (e4, t3, n3, i2) {
                    void 0 === n3 && (n3 = []), void 0 === i2 && (i2 = []);
                    let o2 = {},
                      a3 = (n4) => {
                        let i3;
                        let a4 = n4.key;
                        switch (n4.type) {
                          case 'header':
                            (a4 = a4.toLowerCase()), (i3 = e4.headers[a4]);
                            break;
                          case 'cookie':
                            if ('cookies' in e4) i3 = e4.cookies[n4.key];
                            else {
                              var s3;
                              i3 = ((s3 = e4.headers),
                              function () {
                                let { cookie: e5 } = s3;
                                if (!e5) return {};
                                let { parse: t4 } = r(62034);
                                return t4(
                                  Array.isArray(e5) ? e5.join('; ') : e5
                                );
                              })()[n4.key];
                            }
                            break;
                          case 'query':
                            i3 = t3[a4];
                            break;
                          case 'host': {
                            let { host: t4 } =
                              (null == e4 ? void 0 : e4.headers) || {};
                            i3 =
                              null == t4
                                ? void 0
                                : t4.split(':', 1)[0].toLowerCase();
                          }
                        }
                        if (!n4.value && i3)
                          return (
                            (o2[
                              (function (e5) {
                                let t4 = '';
                                for (let r2 = 0; r2 < e5.length; r2++) {
                                  let n5 = e5.charCodeAt(r2);
                                  ((n5 > 64 && n5 < 91) ||
                                    (n5 > 96 && n5 < 123)) &&
                                    (t4 += e5[r2]);
                                }
                                return t4;
                              })(a4)
                            ] = i3),
                            true
                          );
                        if (i3) {
                          let e5 = RegExp('^' + n4.value + '$'),
                            t4 = Array.isArray(i3)
                              ? i3.slice(-1)[0].match(e5)
                              : i3.match(e5);
                          if (t4)
                            return (
                              Array.isArray(t4) &&
                                (t4.groups
                                  ? Object.keys(t4.groups).forEach((e6) => {
                                      o2[e6] = t4.groups[e6];
                                    })
                                  : 'host' === n4.type &&
                                    t4[0] &&
                                    (o2.host = t4[0])),
                              true
                            );
                        }
                        return false;
                      };
                    return (
                      !!n3.every((e5) => a3(e5)) &&
                      !i2.some((e5) => a3(e5)) &&
                      o2
                    );
                  })(n2, a2.query, h2.has, h2.missing);
                  e3 ? Object.assign(y3, e3) : (y3 = false);
                }
                if (y3) {
                  let { parsedDestination: r2, destQuery: n3 } = (function (
                    e3
                  ) {
                    let t3;
                    let r3 = Object.assign({}, e3.query);
                    delete r3.__nextLocale,
                      delete r3.__nextDefaultLocale,
                      delete r3.__nextDataReq,
                      delete r3.__nextInferredLocaleFromDefault,
                      delete r3[d.H4];
                    let n4 = e3.destination;
                    for (let t4 of Object.keys({ ...e3.params, ...r3 }))
                      n4 = n4.replace(
                        RegExp(':' + (0, l.f)(t4), 'g'),
                        '__ESC_COLON_' + t4
                      );
                    let i2 = (function (e4) {
                        if (e4.startsWith('/'))
                          return (function (e5, t5) {
                            let r4 = new URL('http://n'),
                              n5 = e5.startsWith('.')
                                ? new URL('http://n')
                                : r4,
                              {
                                pathname: i3,
                                searchParams: o2,
                                search: a4,
                                hash: s4,
                                href: l2,
                                origin: u2
                              } = new URL(e5, n5);
                            if (u2 !== r4.origin)
                              throw Error(
                                'invariant: invalid relative URL, router received ' +
                                  e5
                              );
                            return {
                              pathname: i3,
                              query: (0, c.u5)(o2),
                              search: a4,
                              hash: s4,
                              href: l2.slice(r4.origin.length)
                            };
                          })(e4);
                        let t4 = new URL(e4);
                        return {
                          hash: t4.hash,
                          hostname: t4.hostname,
                          href: t4.href,
                          pathname: t4.pathname,
                          port: t4.port,
                          protocol: t4.protocol,
                          query: (0, c.u5)(t4.searchParams),
                          search: t4.search
                        };
                      })(n4),
                      a3 = i2.query,
                      s3 = p('' + i2.pathname + (i2.hash || '')),
                      h3 = p(i2.hostname || ''),
                      g3 = [],
                      y4 = [];
                    (0, o.Bo)(s3, g3), (0, o.Bo)(h3, y4);
                    let m2 = [];
                    g3.forEach((e4) => m2.push(e4.name)),
                      y4.forEach((e4) => m2.push(e4.name));
                    let v3 = (0, o.MY)(s3, { validate: false }),
                      b2 = (0, o.MY)(h3, { validate: false });
                    for (let [t4, r4] of Object.entries(a3))
                      Array.isArray(r4)
                        ? (a3[t4] = r4.map((t5) => f(p(t5), e3.params)))
                        : 'string' == typeof r4 &&
                          (a3[t4] = f(p(r4), e3.params));
                    let w2 = Object.keys(e3.params).filter(
                      (e4) => 'nextInternalLocale' !== e4
                    );
                    if (
                      e3.appendParamsToQuery &&
                      !w2.some((e4) => m2.includes(e4))
                    )
                      for (let t4 of w2) t4 in a3 || (a3[t4] = e3.params[t4]);
                    if ((0, u.Ag)(s3))
                      for (let t4 of s3.split('/')) {
                        let r4 = u.Wz.find((e4) => t4.startsWith(e4));
                        if (r4) {
                          e3.params['0'] = r4;
                          break;
                        }
                      }
                    try {
                      let [r4, n5] = (t3 = v3(e3.params)).split('#', 2);
                      (i2.hostname = b2(e3.params)),
                        (i2.pathname = r4),
                        (i2.hash = (n5 ? '#' : '') + (n5 || '')),
                        delete i2.search;
                    } catch (e4) {
                      if (
                        e4.message.match(
                          /Expected .*? to not repeat, but got an array/
                        )
                      )
                        throw Error(
                          'To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match'
                        );
                      throw e4;
                    }
                    return (
                      (i2.query = { ...r3, ...i2.query }),
                      { newUrl: t3, destQuery: a3, parsedDestination: i2 }
                    );
                  })({
                    appendParamsToQuery: true,
                    destination: h2.destination,
                    params: y3,
                    query: a2.query
                  });
                  if (r2.protocol) return true;
                  if (
                    (Object.assign(s2, n3, y3),
                    Object.assign(a2.query, r2.query),
                    delete r2.query,
                    Object.assign(a2, r2),
                    (g2 = a2.pathname),
                    v2 && (g2 = g2.replace(RegExp(`^${v2}`), '') || '/'),
                    t2)
                  ) {
                    let e3 = (0, i.h)(g2, t2.locales);
                    (g2 = e3.pathname),
                      (a2.query.nextInternalLocale =
                        e3.detectedLocale || y3.nextInternalLocale);
                  }
                  if (g2 === e2) return true;
                  if (w && x) {
                    let e3 = x(g2);
                    if (e3) return (a2.query = { ...a2.query, ...e3 }), true;
                  }
                }
                return false;
              };
            for (let e3 of b.beforeFiles || []) y2(e3);
            if (g2 !== e2) {
              let t3 = false;
              for (let e3 of b.afterFiles || []) if ((t3 = y2(e3))) break;
              if (
                !t3 &&
                !(() => {
                  let t4 = (0, h.Q)(g2 || '');
                  return t4 === (0, h.Q)(e2) || (null == x ? void 0 : x(t4));
                })()
              ) {
                for (let e3 of b.fallback || []) if ((t3 = y2(e3))) break;
              }
            }
            return s2;
          },
          defaultRouteRegex: k,
          dynamicRouteMatcher: x,
          defaultRouteMatches: E,
          getParamsFromRouteMatches: function (e3, r2, n2) {
            return (0, s.t)(
              (function () {
                let { groups: e4, routeKeys: i2 } = k;
                return {
                  re: {
                    exec: (o2) => {
                      let a2 = Object.fromEntries(new URLSearchParams(o2)),
                        s2 = t2 && n2 && a2['1'] === n2;
                      for (let e5 of Object.keys(a2)) {
                        let t3 = a2[e5];
                        e5 !== y.dN &&
                          e5.startsWith(y.dN) &&
                          ((a2[e5.substring(y.dN.length)] = t3), delete a2[e5]);
                      }
                      let l2 = Object.keys(i2 || {}),
                        c2 = (e5) => {
                          if (t2) {
                            let i3 = Array.isArray(e5),
                              o3 = i3 ? e5[0] : e5;
                            if (
                              'string' == typeof o3 &&
                              t2.locales.some(
                                (e6) =>
                                  e6.toLowerCase() === o3.toLowerCase() &&
                                  ((n2 = e6), (r2.locale = n2), true)
                              )
                            )
                              return (
                                i3 && e5.splice(0, 1), !i3 || 0 === e5.length
                              );
                          }
                          return false;
                        };
                      return l2.every((e5) => a2[e5])
                        ? l2.reduce((t3, r3) => {
                            let n3 = null == i2 ? void 0 : i2[r3];
                            return (
                              n3 && !c2(a2[r3]) && (t3[e4[n3].pos] = a2[r3]), t3
                            );
                          }, {})
                        : Object.keys(a2).reduce((e5, t3) => {
                            if (!c2(a2[t3])) {
                              let r3 = t3;
                              return (
                                s2 && (r3 = parseInt(t3, 10) - 1 + ''),
                                Object.assign(e5, { [r3]: a2[t3] })
                              );
                            }
                            return e5;
                          }, {});
                    }
                  },
                  groups: e4
                };
              })()
            )(e3.headers['x-now-route-matches']);
          },
          normalizeDynamicRouteParams: (e3, t3) => {
            var r2, n2, i2;
            let o2;
            return (
              (r2 = e3),
              (n2 = k),
              (i2 = E),
              (o2 = true),
              n2
                ? {
                    params: (r2 = Object.keys(n2.groups).reduce((e4, a2) => {
                      let s2 = r2[a2];
                      'string' == typeof s2 && (s2 = (0, g.b)(s2)),
                        Array.isArray(s2) &&
                          (s2 = s2.map(
                            (e5) => (
                              'string' == typeof e5 && (e5 = (0, g.b)(e5)), e5
                            )
                          ));
                      let l2 = i2[a2],
                        c2 = n2.groups[a2].optional;
                      return (
                        ((Array.isArray(l2)
                          ? l2.some((e5) =>
                              Array.isArray(s2)
                                ? s2.some((t4) => t4.includes(e5))
                                : null == s2
                                ? void 0
                                : s2.includes(e5)
                            )
                          : null == s2
                          ? void 0
                          : s2.includes(l2)) ||
                          (void 0 === s2 && !(c2 && t3))) &&
                          (o2 = false),
                        c2 &&
                          (!s2 ||
                            (Array.isArray(s2) &&
                              1 === s2.length &&
                              ('index' === s2[0] ||
                                s2[0] === `[[...${a2}]]`))) &&
                          ((s2 = void 0), delete r2[a2]),
                        s2 &&
                          'string' == typeof s2 &&
                          n2.groups[a2].repeat &&
                          (s2 = s2.split('/')),
                        s2 && (e4[a2] = s2),
                        e4
                      );
                    }, {})),
                    hasValidParams: o2
                  }
                : { params: r2, hasValidParams: false }
            );
          },
          normalizeVercelUrl: (e3, t3, r2) =>
            (function (e4, t4, r3, i2, o2) {
              if (i2 && t4 && o2) {
                let t5 = (0, n.parse)(e4.url, true);
                for (let e5 of (delete t5.search, Object.keys(t5.query)))
                  ((e5 !== y.dN && e5.startsWith(y.dN)) ||
                    (r3 || Object.keys(o2.groups)).includes(e5)) &&
                    delete t5.query[e5];
                e4.url = (0, n.format)(t5);
              }
            })(e3, t3, r2, w, k),
          interpolateDynamicPath: (e3, t3) => m(e3, t3, k)
        }
      );
    }
  };
  __namedExportsObject['__chunk_55027'] = (e, t, r) => {
    'use strict';
    let n;
    r.d(t, { MU: () => c, Yz: () => v });
    var i = r(22738);
    let {
        context: o,
        propagation: a,
        trace: s,
        SpanStatusCode: l,
        SpanKind: c,
        ROOT_CONTEXT: u
      } = (n = r(93131)),
      d = (e2) =>
        null !== e2 && 'object' == typeof e2 && 'function' == typeof e2.then,
      p = (e2, t2) => {
        (null == t2 ? void 0 : t2.bubble) === true
          ? e2.setAttribute('next.bubble', true)
          : (t2 && e2.recordException(t2),
            e2.setStatus({
              code: l.ERROR,
              message: null == t2 ? void 0 : t2.message
            })),
          e2.end();
      },
      f = /* @__PURE__ */ new Map(),
      h = n.createContextKey('next.rootSpanId'),
      g = 0,
      y = () => g++;
    class m {
      getTracerInstance() {
        return s.getTracer('next.js', '0.0.1');
      }
      getContext() {
        return o;
      }
      getActiveScopeSpan() {
        return s.getSpan(null == o ? void 0 : o.active());
      }
      withPropagatedContext(e2, t2, r2) {
        let n2 = o.active();
        if (s.getSpanContext(n2)) return t2();
        let i2 = a.extract(n2, e2, r2);
        return o.with(i2, t2);
      }
      trace(...e2) {
        var t2;
        let [r2, n2, a2] = e2,
          { fn: l2, options: c2 } =
            'function' == typeof n2
              ? { fn: n2, options: {} }
              : { fn: a2, options: { ...n2 } },
          g2 = c2.spanName ?? r2;
        if (
          (!i.lw.includes(r2) && '1' !== process.env.NEXT_OTEL_VERBOSE) ||
          c2.hideSpan
        )
          return l2();
        let m2 = this.getSpanContext(
            (null == c2 ? void 0 : c2.parentSpan) ?? this.getActiveScopeSpan()
          ),
          v2 = false;
        m2
          ? (null == (t2 = s.getSpanContext(m2)) ? void 0 : t2.isRemote) &&
            (v2 = true)
          : ((m2 = (null == o ? void 0 : o.active()) ?? u), (v2 = true));
        let b = y();
        return (
          (c2.attributes = {
            'next.span_name': g2,
            'next.span_type': r2,
            ...c2.attributes
          }),
          o.with(m2.setValue(h, b), () =>
            this.getTracerInstance().startActiveSpan(g2, c2, (e3) => {
              let t3 =
                  'performance' in globalThis
                    ? globalThis.performance.now()
                    : void 0,
                n3 = () => {
                  f.delete(b),
                    t3 &&
                      process.env.NEXT_OTEL_PERFORMANCE_PREFIX &&
                      i.hT.includes(r2 || '') &&
                      performance.measure(
                        `${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(
                          r2.split('.').pop() || ''
                        ).replace(/[A-Z]/g, (e4) => '-' + e4.toLowerCase())}`,
                        { start: t3, end: performance.now() }
                      );
                };
              v2 && f.set(b, new Map(Object.entries(c2.attributes ?? {})));
              try {
                if (l2.length > 1) return l2(e3, (t5) => p(e3, t5));
                let t4 = l2(e3);
                if (d(t4))
                  return t4
                    .then((t5) => (e3.end(), t5))
                    .catch((t5) => {
                      throw (p(e3, t5), t5);
                    })
                    .finally(n3);
                return e3.end(), n3(), t4;
              } catch (t4) {
                throw (p(e3, t4), n3(), t4);
              }
            })
          )
        );
      }
      wrap(...e2) {
        let t2 = this,
          [r2, n2, a2] = 3 === e2.length ? e2 : [e2[0], {}, e2[1]];
        return i.lw.includes(r2) || '1' === process.env.NEXT_OTEL_VERBOSE
          ? function () {
              let e3 = n2;
              'function' == typeof e3 &&
                'function' == typeof a2 &&
                (e3 = e3.apply(this, arguments));
              let i2 = arguments.length - 1,
                s2 = arguments[i2];
              if ('function' != typeof s2)
                return t2.trace(r2, e3, () => a2.apply(this, arguments));
              {
                let n3 = t2.getContext().bind(o.active(), s2);
                return t2.trace(
                  r2,
                  e3,
                  (e4, t3) => (
                    (arguments[i2] = function (e5) {
                      return null == t3 || t3(e5), n3.apply(this, arguments);
                    }),
                    a2.apply(this, arguments)
                  )
                );
              }
            }
          : a2;
      }
      startSpan(...e2) {
        let [t2, r2] = e2,
          n2 = this.getSpanContext(
            (null == r2 ? void 0 : r2.parentSpan) ?? this.getActiveScopeSpan()
          );
        return this.getTracerInstance().startSpan(t2, r2, n2);
      }
      getSpanContext(e2) {
        return e2 ? s.setSpan(o.active(), e2) : void 0;
      }
      getRootSpanAttributes() {
        let e2 = o.active().getValue(h);
        return f.get(e2);
      }
    }
    let v = (() => {
      let e2 = new m();
      return () => e2;
    })();
  };
  __namedExportsObject['__chunk_22738'] = (e, t, r) => {
    'use strict';
    var n, i, o, a, s, l, c, u, d, p, f, h;
    r.d(t, {
      PB: () => p,
      Xy: () => a,
      dI: () => h,
      hT: () => y,
      k0: () => c,
      lw: () => g
    }),
      (function (e2) {
        (e2.handleRequest = 'BaseServer.handleRequest'),
          (e2.run = 'BaseServer.run'),
          (e2.pipe = 'BaseServer.pipe'),
          (e2.getStaticHTML = 'BaseServer.getStaticHTML'),
          (e2.render = 'BaseServer.render'),
          (e2.renderToResponseWithComponents =
            'BaseServer.renderToResponseWithComponents'),
          (e2.renderToResponse = 'BaseServer.renderToResponse'),
          (e2.renderToHTML = 'BaseServer.renderToHTML'),
          (e2.renderError = 'BaseServer.renderError'),
          (e2.renderErrorToResponse = 'BaseServer.renderErrorToResponse'),
          (e2.renderErrorToHTML = 'BaseServer.renderErrorToHTML'),
          (e2.render404 = 'BaseServer.render404');
      })(n || (n = {})),
      (function (e2) {
        (e2.loadDefaultErrorComponents =
          'LoadComponents.loadDefaultErrorComponents'),
          (e2.loadComponents = 'LoadComponents.loadComponents');
      })(i || (i = {})),
      (function (e2) {
        (e2.getRequestHandler = 'NextServer.getRequestHandler'),
          (e2.getServer = 'NextServer.getServer'),
          (e2.getServerRequestHandler = 'NextServer.getServerRequestHandler'),
          (e2.createServer = 'createServer.createServer');
      })(o || (o = {})),
      (function (e2) {
        (e2.compression = 'NextNodeServer.compression'),
          (e2.getBuildId = 'NextNodeServer.getBuildId'),
          (e2.createComponentTree = 'NextNodeServer.createComponentTree'),
          (e2.clientComponentLoading = 'NextNodeServer.clientComponentLoading'),
          (e2.getLayoutOrPageModule = 'NextNodeServer.getLayoutOrPageModule'),
          (e2.generateStaticRoutes = 'NextNodeServer.generateStaticRoutes'),
          (e2.generateFsStaticRoutes = 'NextNodeServer.generateFsStaticRoutes'),
          (e2.generatePublicRoutes = 'NextNodeServer.generatePublicRoutes'),
          (e2.generateImageRoutes = 'NextNodeServer.generateImageRoutes.route'),
          (e2.sendRenderResult = 'NextNodeServer.sendRenderResult'),
          (e2.proxyRequest = 'NextNodeServer.proxyRequest'),
          (e2.runApi = 'NextNodeServer.runApi'),
          (e2.render = 'NextNodeServer.render'),
          (e2.renderHTML = 'NextNodeServer.renderHTML'),
          (e2.imageOptimizer = 'NextNodeServer.imageOptimizer'),
          (e2.getPagePath = 'NextNodeServer.getPagePath'),
          (e2.getRoutesManifest = 'NextNodeServer.getRoutesManifest'),
          (e2.findPageComponents = 'NextNodeServer.findPageComponents'),
          (e2.getFontManifest = 'NextNodeServer.getFontManifest'),
          (e2.getServerComponentManifest =
            'NextNodeServer.getServerComponentManifest'),
          (e2.getRequestHandler = 'NextNodeServer.getRequestHandler'),
          (e2.renderToHTML = 'NextNodeServer.renderToHTML'),
          (e2.renderError = 'NextNodeServer.renderError'),
          (e2.renderErrorToHTML = 'NextNodeServer.renderErrorToHTML'),
          (e2.render404 = 'NextNodeServer.render404'),
          (e2.startResponse = 'NextNodeServer.startResponse'),
          (e2.route = 'route'),
          (e2.onProxyReq = 'onProxyReq'),
          (e2.apiResolver = 'apiResolver'),
          (e2.internalFetch = 'internalFetch');
      })(a || (a = {})),
      ((s || (s = {})).startServer = 'startServer.startServer'),
      (function (e2) {
        (e2.getServerSideProps = 'Render.getServerSideProps'),
          (e2.getStaticProps = 'Render.getStaticProps'),
          (e2.renderToString = 'Render.renderToString'),
          (e2.renderDocument = 'Render.renderDocument'),
          (e2.createBodyResult = 'Render.createBodyResult');
      })(l || (l = {})),
      (function (e2) {
        (e2.renderToString = 'AppRender.renderToString'),
          (e2.renderToReadableStream = 'AppRender.renderToReadableStream'),
          (e2.getBodyResult = 'AppRender.getBodyResult'),
          (e2.fetch = 'AppRender.fetch');
      })(c || (c = {})),
      ((u || (u = {})).executeRoute = 'Router.executeRoute'),
      ((d || (d = {})).runHandler = 'Node.runHandler'),
      ((p || (p = {})).runHandler = 'AppRouteRouteHandlers.runHandler'),
      (function (e2) {
        (e2.generateMetadata = 'ResolveMetadata.generateMetadata'),
          (e2.generateViewport = 'ResolveMetadata.generateViewport');
      })(f || (f = {})),
      ((h || (h = {})).execute = 'Middleware.execute');
    let g = [
        'Middleware.execute',
        'BaseServer.handleRequest',
        'Render.getServerSideProps',
        'Render.getStaticProps',
        'AppRender.fetch',
        'AppRender.getBodyResult',
        'Render.renderDocument',
        'Node.runHandler',
        'AppRouteRouteHandlers.runHandler',
        'ResolveMetadata.generateMetadata',
        'ResolveMetadata.generateViewport',
        'NextNodeServer.createComponentTree',
        'NextNodeServer.findPageComponents',
        'NextNodeServer.getLayoutOrPageModule',
        'NextNodeServer.startResponse',
        'NextNodeServer.clientComponentLoading'
      ],
      y = [
        'NextNodeServer.findPageComponents',
        'NextNodeServer.createComponentTree',
        'NextNodeServer.clientComponentLoading'
      ];
  };
  __namedExportsObject['__chunk_2113'] = (e, t, r) => {
    'use strict';
    r.d(t, { RQ: () => u, XH: () => p });
    var n = r(22738),
      i = r(55027),
      o = r(58997),
      a = r(26265),
      s = r(8427),
      l = r(26195).Buffer;
    let c = (e2) => {
      let t2 = ['/layout'];
      if (e2.startsWith('/')) {
        let r2 = e2.split('/');
        for (let e3 = 1; e3 < r2.length + 1; e3++) {
          let n2 = r2.slice(0, e3).join('/');
          n2 &&
            (n2.endsWith('/page') ||
              n2.endsWith('/route') ||
              (n2 = `${n2}${n2.endsWith('/') ? '' : '/'}layout`),
            t2.push(n2));
        }
      }
      return t2;
    };
    function u(e2) {
      var t2, r2;
      let n2 = [],
        { pagePath: i2, urlPathname: a2 } = e2;
      if ((Array.isArray(e2.tags) || (e2.tags = []), i2))
        for (let r3 of c(i2))
          (r3 = `${o.zt}${r3}`),
            (null == (t2 = e2.tags) ? void 0 : t2.includes(r3)) ||
              e2.tags.push(r3),
            n2.push(r3);
      if (a2) {
        let t3 = new URL(a2, 'http://n').pathname,
          i3 = `${o.zt}${t3}`;
        (null == (r2 = e2.tags) ? void 0 : r2.includes(i3)) || e2.tags.push(i3),
          n2.push(i3);
      }
      return n2;
    }
    function d(e2, t2) {
      var r2;
      e2 && (null == (r2 = e2.requestEndedState) || r2.ended);
    }
    function p(e2) {
      var t2;
      if (
        '__nextPatched' in (t2 = globalThis.fetch) &&
        true === t2.__nextPatched
      )
        return;
      let r2 = globalThis.fetch;
      globalThis.fetch = (function (
        e3,
        {
          serverHooks: { DynamicServerError: t3 },
          staticGenerationAsyncStorage: r3
        }
      ) {
        let c2 = async (c3, p2) => {
          var f, h;
          let g;
          try {
            ((g = new URL(c3 instanceof Request ? c3.url : c3)).username = ''),
              (g.password = '');
          } catch {
            g = void 0;
          }
          let y = (null == g ? void 0 : g.href) ?? '',
            m = Date.now(),
            v =
              (null == p2
                ? void 0
                : null == (f = p2.method)
                ? void 0
                : f.toUpperCase()) || 'GET',
            b =
              (null == p2
                ? void 0
                : null == (h = p2.next)
                ? void 0
                : h.internal) === true,
            w = '1' === process.env.NEXT_OTEL_FETCH_DISABLED;
          return (0, i.Yz)().trace(
            b ? n.Xy.internalFetch : n.k0.fetch,
            {
              hideSpan: w,
              kind: i.MU.CLIENT,
              spanName: ['fetch', v, y].filter(Boolean).join(' '),
              attributes: {
                'http.url': y,
                'http.method': v,
                'net.peer.name': null == g ? void 0 : g.hostname,
                'net.peer.port': (null == g ? void 0 : g.port) || void 0
              }
            },
            async () => {
              var n2;
              let i2, f2, h2;
              if (b) return e3(c3, p2);
              let g2 = r3.getStore();
              if (!g2 || g2.isDraftMode) return e3(c3, p2);
              let v2 =
                  c3 && 'object' == typeof c3 && 'string' == typeof c3.method,
                w2 = (e4) =>
                  (null == p2 ? void 0 : p2[e4]) || (v2 ? c3[e4] : null),
                _ = (e4) => {
                  var t4, r4, n3;
                  return void 0 !==
                    (null == p2
                      ? void 0
                      : null == (t4 = p2.next)
                      ? void 0
                      : t4[e4])
                    ? null == p2
                      ? void 0
                      : null == (r4 = p2.next)
                      ? void 0
                      : r4[e4]
                    : v2
                    ? null == (n3 = c3.next)
                      ? void 0
                      : n3[e4]
                    : void 0;
                },
                S = _('revalidate'),
                k = (function (e4, t4) {
                  let r4 = [],
                    n3 = [];
                  for (let i3 = 0; i3 < e4.length; i3++) {
                    let a2 = e4[i3];
                    if (
                      ('string' != typeof a2
                        ? n3.push({
                            tag: a2,
                            reason: 'invalid type, must be a string'
                          })
                        : a2.length > o.Ho
                        ? n3.push({
                            tag: a2,
                            reason: `exceeded max length of ${o.Ho}`
                          })
                        : r4.push(a2),
                      r4.length > o.cv)
                    ) {
                      console.warn(
                        `Warning: exceeded max tag count for ${t4}, dropped tags:`,
                        e4.slice(i3).join(', ')
                      );
                      break;
                    }
                  }
                  if (n3.length > 0)
                    for (let { tag: e5, reason: r5 } of (console.warn(
                      `Warning: invalid tags passed to ${t4}: `
                    ),
                    n3))
                      console.log(`tag: "${e5}" ${r5}`);
                  return r4;
                })(_('tags') || [], `fetch ${c3.toString()}`);
              if (Array.isArray(k))
                for (let e4 of (g2.tags || (g2.tags = []), k))
                  g2.tags.includes(e4) || g2.tags.push(e4);
              let x = u(g2),
                E = g2.fetchCache,
                A = !!g2.isUnstableNoStore,
                C = w2('cache'),
                T = '';
              'string' == typeof C &&
                void 0 !== S &&
                ((v2 && 'default' === C) ||
                  a.ZK(
                    `fetch for ${y} on ${g2.urlPathname} specified "cache: ${C}" and "revalidate: ${S}", only one should be specified.`
                  ),
                (C = void 0)),
                'force-cache' === C
                  ? (S = false)
                  : ('no-cache' === C ||
                      'no-store' === C ||
                      'force-no-store' === E ||
                      'only-no-store' === E) &&
                    (S = 0),
                ('no-cache' === C || 'no-store' === C) && (T = `cache: ${C}`),
                (h2 = (function (e4, t4) {
                  try {
                    let r4;
                    if (false === e4) r4 = e4;
                    else if ('number' == typeof e4 && !isNaN(e4) && e4 > -1)
                      r4 = e4;
                    else if (void 0 !== e4)
                      throw Error(
                        `Invalid revalidate value "${e4}" on "${t4}", must be a non-negative number or "false"`
                      );
                    return r4;
                  } catch (e5) {
                    if (
                      e5 instanceof Error &&
                      e5.message.includes('Invalid revalidate')
                    )
                      throw e5;
                    return;
                  }
                })(S, g2.urlPathname));
              let P = w2('headers'),
                O =
                  'function' == typeof (null == P ? void 0 : P.get)
                    ? P
                    : new Headers(P || {}),
                R = O.get('authorization') || O.get('cookie'),
                I = !['get', 'head'].includes(
                  (null == (n2 = w2('method')) ? void 0 : n2.toLowerCase()) ||
                    'get'
                ),
                $ = (R || I) && 0 === g2.revalidate;
              switch (E) {
                case 'force-no-store':
                  T = 'fetchCache = force-no-store';
                  break;
                case 'only-no-store':
                  if (
                    'force-cache' === C ||
                    (void 0 !== h2 && (false === h2 || h2 > 0))
                  )
                    throw Error(
                      `cache: 'force-cache' used on fetch for ${y} with 'export const fetchCache = 'only-no-store'`
                    );
                  T = 'fetchCache = only-no-store';
                  break;
                case 'only-cache':
                  if ('no-store' === C)
                    throw Error(
                      `cache: 'no-store' used on fetch for ${y} with 'export const fetchCache = 'only-cache'`
                    );
                  break;
                case 'force-cache':
                  (void 0 === S || 0 === S) &&
                    ((T = 'fetchCache = force-cache'), (h2 = false));
              }
              void 0 === h2
                ? 'default-cache' === E
                  ? ((h2 = false), (T = 'fetchCache = default-cache'))
                  : $
                  ? ((h2 = 0), (T = 'auto no cache'))
                  : 'default-no-store' === E
                  ? ((h2 = 0), (T = 'fetchCache = default-no-store'))
                  : A
                  ? ((h2 = 0), (T = 'noStore call'))
                  : ((T = 'auto cache'),
                    (h2 =
                      'boolean' != typeof g2.revalidate &&
                      void 0 !== g2.revalidate &&
                      g2.revalidate))
                : T || (T = `revalidate: ${h2}`),
                (g2.forceStatic && 0 === h2) ||
                  $ ||
                  (void 0 !== g2.revalidate &&
                    ('number' != typeof h2 ||
                      (false !== g2.revalidate &&
                        ('number' != typeof g2.revalidate ||
                          !(h2 < g2.revalidate))))) ||
                  (0 === h2 && (0, s.fl)(g2, 'revalidate: 0'),
                  (g2.revalidate = h2));
              let N = ('number' == typeof h2 && h2 > 0) || false === h2;
              if (g2.incrementalCache && N)
                try {
                  i2 = await g2.incrementalCache.fetchCacheKey(y, v2 ? c3 : p2);
                } catch (e4) {
                  console.error('Failed to generate cache key for', c3);
                }
              let U = g2.nextFetchId ?? 1;
              g2.nextFetchId = U + 1;
              let j = 'number' != typeof h2 ? o.BR : h2,
                L = async (t4, r4) => {
                  let n3 = [
                    'credentials',
                    'headers',
                    'integrity',
                    'keepalive',
                    'method',
                    'mode',
                    'redirect',
                    'referrer',
                    'referrerPolicy',
                    'window',
                    'duplex',
                    ...(t4 ? [] : ['signal'])
                  ];
                  if (v2) {
                    let e4 = c3,
                      t5 = { body: e4._ogBody || e4.body };
                    for (let r5 of n3) t5[r5] = e4[r5];
                    c3 = new Request(e4.url, t5);
                  } else if (p2) {
                    let { _ogBody: e4, body: r5, signal: n4, ...i3 } = p2;
                    p2 = { ...i3, body: e4 || r5, signal: t4 ? void 0 : n4 };
                  }
                  let o2 = {
                    ...p2,
                    next: {
                      ...(null == p2 ? void 0 : p2.next),
                      fetchType: 'origin',
                      fetchIdx: U
                    }
                  };
                  return e3(c3, o2).then(async (e4) => {
                    if (
                      (t4 ||
                        d(g2, {
                          start: m,
                          url: y,
                          cacheReason: r4 || T,
                          cacheStatus: 0 === h2 || r4 ? 'skip' : 'miss',
                          status: e4.status,
                          method: o2.method || 'GET'
                        }),
                      200 === e4.status && g2.incrementalCache && i2 && N)
                    ) {
                      let t5 = l.from(await e4.arrayBuffer());
                      try {
                        await g2.incrementalCache.set(
                          i2,
                          {
                            kind: 'FETCH',
                            data: {
                              headers: Object.fromEntries(e4.headers.entries()),
                              body: t5.toString('base64'),
                              status: e4.status,
                              url: e4.url
                            },
                            revalidate: j
                          },
                          {
                            fetchCache: true,
                            revalidate: h2,
                            fetchUrl: y,
                            fetchIdx: U,
                            tags: k
                          }
                        );
                      } catch (e5) {
                        console.warn('Failed to set fetch cache', c3, e5);
                      }
                      let r5 = new Response(t5, {
                        headers: new Headers(e4.headers),
                        status: e4.status
                      });
                      return (
                        Object.defineProperty(r5, 'url', { value: e4.url }), r5
                      );
                    }
                    return e4;
                  });
                },
                M = () => Promise.resolve(),
                D = false;
              if (i2 && g2.incrementalCache) {
                M = await g2.incrementalCache.lock(i2);
                let e4 = g2.isOnDemandRevalidate
                  ? null
                  : await g2.incrementalCache.get(i2, {
                      kindHint: 'fetch',
                      revalidate: h2,
                      fetchUrl: y,
                      fetchIdx: U,
                      tags: k,
                      softTags: x
                    });
                if (
                  (e4
                    ? await M()
                    : (f2 = 'cache-control: no-cache (hard refresh)'),
                  (null == e4 ? void 0 : e4.value) && 'FETCH' === e4.value.kind)
                ) {
                  if (g2.isRevalidate && e4.isStale) D = true;
                  else {
                    e4.isStale &&
                      ((g2.pendingRevalidates ??= {}),
                      g2.pendingRevalidates[i2] ||
                        (g2.pendingRevalidates[i2] = L(true)
                          .catch(console.error)
                          .finally(() => {
                            (g2.pendingRevalidates ??= {}),
                              delete g2.pendingRevalidates[i2 || ''];
                          })));
                    let t4 = e4.value.data;
                    d(g2, {
                      start: m,
                      url: y,
                      cacheReason: T,
                      cacheStatus: 'hit',
                      status: t4.status || 200,
                      method: (null == p2 ? void 0 : p2.method) || 'GET'
                    });
                    let r4 = new Response(l.from(t4.body, 'base64'), {
                      headers: t4.headers,
                      status: t4.status
                    });
                    return (
                      Object.defineProperty(r4, 'url', {
                        value: e4.value.data.url
                      }),
                      r4
                    );
                  }
                }
              }
              if (g2.isStaticGeneration && p2 && 'object' == typeof p2) {
                let { cache: e4 } = p2;
                if ((delete p2.cache, !g2.forceStatic && 'no-store' === e4)) {
                  let e5 = `no-store fetch ${c3}${
                    g2.urlPathname ? ` ${g2.urlPathname}` : ''
                  }`;
                  (0, s.fl)(g2, e5), (g2.revalidate = 0);
                  let r5 = new t3(e5);
                  throw (
                    ((g2.dynamicUsageErr = r5),
                    (g2.dynamicUsageDescription = e5),
                    r5)
                  );
                }
                let r4 = 'next' in p2,
                  { next: n3 = {} } = p2;
                if (
                  'number' == typeof n3.revalidate &&
                  (void 0 === g2.revalidate ||
                    ('number' == typeof g2.revalidate &&
                      n3.revalidate < g2.revalidate))
                ) {
                  if (
                    !g2.forceDynamic &&
                    !g2.forceStatic &&
                    0 === n3.revalidate
                  ) {
                    let e5 = `revalidate: 0 fetch ${c3}${
                      g2.urlPathname ? ` ${g2.urlPathname}` : ''
                    }`;
                    (0, s.fl)(g2, e5);
                    let r5 = new t3(e5);
                    throw (
                      ((g2.dynamicUsageErr = r5),
                      (g2.dynamicUsageDescription = e5),
                      r5)
                    );
                  }
                  (g2.forceStatic && 0 === n3.revalidate) ||
                    (g2.revalidate = n3.revalidate);
                }
                r4 && delete p2.next;
              }
              if (!i2 || !D) return L(false, f2).finally(M);
              {
                g2.pendingRevalidates ??= {};
                let e4 = g2.pendingRevalidates[i2];
                return e4
                  ? (await e4).clone()
                  : (g2.pendingRevalidates[i2] = L(true, f2).finally(
                      async () => {
                        (g2.pendingRevalidates ??= {}),
                          delete g2.pendingRevalidates[i2 || ''],
                          await M();
                      }
                    ));
              }
            }
          );
        };
        return (
          (c2.__nextPatched = true),
          (c2.__nextGetStaticStore = () => r3),
          (c2._nextOriginalFetch = e3),
          c2
        );
      })(r2, e2);
    }
  };
  __namedExportsObject['__chunk_2860'] = (e, t, r) => {
    'use strict';
    var n;
    r.d(t, { x: () => n }),
      (function (e2) {
        (e2.PAGES = 'PAGES'),
          (e2.PAGES_API = 'PAGES_API'),
          (e2.APP_PAGE = 'APP_PAGE'),
          (e2.APP_ROUTE = 'APP_ROUTE');
      })(n || (n = {}));
  };
  __namedExportsObject['__chunk_57460'] = (e, t, r) => {
    'use strict';
    r.d(t, { Ag: () => o, CK: () => a, Wz: () => i });
    var n = r(97894);
    let i = ['(..)(..)', '(.)', '(..)', '(...)'];
    function o(e2) {
      return (
        void 0 !== e2.split('/').find((e3) => i.find((t2) => e3.startsWith(t2)))
      );
    }
    function a(e2) {
      let t2, r2, o2;
      for (let n2 of e2.split('/'))
        if ((r2 = i.find((e3) => n2.startsWith(e3)))) {
          [t2, o2] = e2.split(r2, 2);
          break;
        }
      if (!t2 || !r2 || !o2)
        throw Error(
          `Invalid interception route: ${e2}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`
        );
      switch (((t2 = (0, n.w)(t2)), r2)) {
        case '(.)':
          o2 = '/' === t2 ? `/${o2}` : t2 + '/' + o2;
          break;
        case '(..)':
          if ('/' === t2)
            throw Error(
              `Invalid interception route: ${e2}. Cannot use (..) marker at the root level, use (.) instead.`
            );
          o2 = t2.split('/').slice(0, -1).concat(o2).join('/');
          break;
        case '(...)':
          o2 = '/' + o2;
          break;
        case '(..)(..)':
          let a2 = t2.split('/');
          if (a2.length <= 2)
            throw Error(
              `Invalid interception route: ${e2}. Cannot use (..)(..) marker at the root level or one level up.`
            );
          o2 = a2.slice(0, -2).concat(o2).join('/');
          break;
        default:
          throw Error('Invariant: unexpected marker');
      }
      return { interceptingRoute: t2, interceptedRoute: o2 };
    }
  };
  __namedExportsObject['__chunk_8427'] = (e, t, r) => {
    'use strict';
    r.d(t, { hQ: () => c, FI: () => s, TP: () => l, fl: () => u });
    var n = r(68610),
      i = r(52403),
      o = r(28024);
    let a = 'function' == typeof n.unstable_postpone;
    function s(e2) {
      return { isDebugSkeleton: e2, dynamicAccesses: [] };
    }
    function l(e2, t2) {
      let r2 = new URL(e2.urlPathname, 'http://n').pathname;
      if (e2.isUnstableCacheCallback)
        throw Error(
          `Route ${r2} used "${t2}" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${t2}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`
        );
      if (e2.dynamicShouldError)
        throw new o.G(
          `Route ${r2} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${t2}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
        );
      if (e2.prerenderState) d(e2.prerenderState, t2, r2);
      else if (((e2.revalidate = 0), e2.isStaticGeneration)) {
        let n2 = new i.DynamicServerError(
          `Route ${r2} couldn't be rendered statically because it used ${t2}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`
        );
        throw (
          ((e2.dynamicUsageDescription = t2),
          (e2.dynamicUsageStack = n2.stack),
          n2)
        );
      }
    }
    function c({ reason: e2, prerenderState: t2, pathname: r2 }) {
      d(t2, e2, r2);
    }
    function u(e2, t2) {
      e2.prerenderState && d(e2.prerenderState, t2, e2.urlPathname);
    }
    function d(e2, t2, r2) {
      !(function () {
        if (!a)
          throw Error(
            'Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js'
          );
      })();
      let i2 = `Route ${r2} needs to bail out of prerendering at this point because it used ${t2}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
      e2.dynamicAccesses.push({
        stack: e2.isDebugSkeleton ? Error().stack : void 0,
        expression: t2
      }),
        n.unstable_postpone(i2);
    }
  };
  __namedExportsObject['__chunk_58997'] = (e, t, r) => {
    'use strict';
    r.d(t, {
      Ar: () => d,
      BR: () => m,
      EX: () => c,
      Et: () => u,
      Ho: () => g,
      JT: () => l,
      Qq: () => o,
      Sx: () => a,
      X_: () => f,
      cv: () => h,
      dN: () => n,
      hd: () => s,
      of: () => p,
      y3: () => i,
      zt: () => y
    });
    let n = 'nxtP',
      i = 'x-prerender-revalidate',
      o = 'x-prerender-revalidate-if-generated',
      a = '.prefetch.rsc',
      s = '.rsc',
      l = '.json',
      c = '.meta',
      u = 'x-next-cache-tags',
      d = 'x-next-cache-soft-tags',
      p = 'x-next-revalidated-tags',
      f = 'x-next-revalidate-tag-token',
      h = 64,
      g = 256,
      y = '_N_T_',
      m = 31536e3,
      v = {
        shared: 'shared',
        reactServerComponents: 'rsc',
        serverSideRendering: 'ssr',
        actionBrowser: 'action-browser',
        api: 'api',
        middleware: 'middleware',
        instrument: 'instrument',
        edgeAsset: 'edge-asset',
        appPagesBrowser: 'app-pages-browser',
        appMetadataRoute: 'app-metadata-route',
        appRouteHandler: 'app-route-handler'
      };
    ({
      ...v,
      GROUP: {
        serverOnly: [
          v.reactServerComponents,
          v.actionBrowser,
          v.appMetadataRoute,
          v.appRouteHandler,
          v.instrument
        ],
        clientOnly: [v.serverSideRendering, v.appPagesBrowser],
        nonClientServerTarget: [v.middleware, v.api],
        app: [
          v.reactServerComponents,
          v.actionBrowser,
          v.appMetadataRoute,
          v.appRouteHandler,
          v.serverSideRendering,
          v.appPagesBrowser,
          v.shared,
          v.instrument
        ]
      }
    });
  };
  __namedExportsObject['__chunk_28024'] = (e, t, r) => {
    'use strict';
    r.d(t, { G: () => n });
    class n extends Error {
      constructor(...e2) {
        super(...e2), (this.code = 'NEXT_STATIC_GEN_BAILOUT');
      }
    }
  };
  __namedExportsObject['__chunk_99321'] = (e, t, r) => {
    'use strict';
    r.d(t, { j2: () => d, M6: () => u, eo: () => c, uX: () => l });
    var n,
      i,
      o = r(94051),
      a = r(43083);
    !(function (e2) {
      (e2[(e2.SeeOther = 303)] = 'SeeOther'),
        (e2[(e2.TemporaryRedirect = 307)] = 'TemporaryRedirect'),
        (e2[(e2.PermanentRedirect = 308)] = 'PermanentRedirect');
    })(n || (n = {}));
    let s = 'NEXT_REDIRECT';
    function l(e2, t2) {
      void 0 === t2 && (t2 = 'replace');
      let r2 = a.W.getStore();
      throw (function (e3, t3, r3) {
        void 0 === r3 && (r3 = n.TemporaryRedirect);
        let i2 = Error(s);
        i2.digest = s + ';' + t3 + ';' + e3 + ';' + r3 + ';';
        let a2 = o.O.getStore();
        return a2 && (i2.mutableCookies = a2.mutableCookies), i2;
      })(
        e2,
        t2,
        (null == r2 ? void 0 : r2.isAction) ? n.SeeOther : n.TemporaryRedirect
      );
    }
    function c(e2) {
      if (
        'object' != typeof e2 ||
        null === e2 ||
        !('digest' in e2) ||
        'string' != typeof e2.digest
      )
        return false;
      let [t2, r2, i2, o2] = e2.digest.split(';', 4),
        a2 = Number(o2);
      return (
        t2 === s &&
        ('replace' === r2 || 'push' === r2) &&
        'string' == typeof i2 &&
        !isNaN(a2) &&
        a2 in n
      );
    }
    function u(e2) {
      return c(e2) ? e2.digest.split(';', 3)[2] : null;
    }
    function d(e2) {
      if (!c(e2)) throw Error('Not a redirect error');
      return Number(e2.digest.split(';', 4)[3]);
    }
    !(function (e2) {
      (e2.push = 'push'), (e2.replace = 'replace');
    })(i || (i = {}));
  };
  __namedExportsObject['__chunk_37829'] = (e, t, r) => {
    'use strict';
    r.d(t, { X: () => o, v: () => i });
    let n = 'NEXT_NOT_FOUND';
    function i() {
      let e2 = Error(n);
      throw ((e2.digest = n), e2);
    }
    function o(e2) {
      return (
        'object' == typeof e2 &&
        null !== e2 &&
        'digest' in e2 &&
        e2.digest === n
      );
    }
  };
  __namedExportsObject['__chunk_52403'] = (e, t, r) => {
    'use strict';
    r.r(t),
      r.d(t, { DynamicServerError: () => i, isDynamicServerError: () => o });
    let n = 'DYNAMIC_SERVER_USAGE';
    class i extends Error {
      constructor(e2) {
        super('Dynamic server usage: ' + e2),
          (this.description = e2),
          (this.digest = n);
      }
    }
    function o(e2) {
      return (
        'object' == typeof e2 &&
        null !== e2 &&
        'digest' in e2 &&
        'string' == typeof e2.digest &&
        e2.digest === n
      );
    }
  };
  __namedExportsObject['__chunk_48690'] = (e, t, r) => {
    'use strict';
    r.d(t, { H4: () => o, om: () => n, vu: () => i });
    let n = 'Next-Action',
      i = [['RSC'], ['Next-Router-State-Tree'], ['Next-Router-Prefetch']],
      o = '_rsc';
  };
  __namedExportsObject['__chunk_56087'] = (e, t, r) => {
    'use strict';
    r.r(t), r.d(t, { createProxy: () => n });
    let n = r(84303).createClientModuleProxy;
  };
  __namedExportsObject['__chunk_26265'] = (e, t, r) => {
    'use strict';
    var n;
    r.d(t, { ZK: () => m });
    let { env: i, stdout: o } =
        (null == (n = globalThis) ? void 0 : n.process) ?? {},
      a =
        i &&
        !i.NO_COLOR &&
        (i.FORCE_COLOR ||
          ((null == o ? void 0 : o.isTTY) && !i.CI && 'dumb' !== i.TERM)),
      s = (e2, t2, r2, n2) => {
        let i2 = e2.substring(0, n2) + r2,
          o2 = e2.substring(n2 + t2.length),
          a2 = o2.indexOf(t2);
        return ~a2 ? i2 + s(o2, t2, r2, a2) : i2 + o2;
      },
      l = (e2, t2, r2 = e2) =>
        a
          ? (n2) => {
              let i2 = '' + n2,
                o2 = i2.indexOf(t2, e2.length);
              return ~o2 ? e2 + s(i2, t2, r2, o2) + t2 : e2 + i2 + t2;
            }
          : String,
      c = l('\x1B[1m', '\x1B[22m', '\x1B[22m\x1B[1m');
    l('\x1B[2m', '\x1B[22m', '\x1B[22m\x1B[2m'),
      l('\x1B[3m', '\x1B[23m'),
      l('\x1B[4m', '\x1B[24m'),
      l('\x1B[7m', '\x1B[27m'),
      l('\x1B[8m', '\x1B[28m'),
      l('\x1B[9m', '\x1B[29m'),
      l('\x1B[30m', '\x1B[39m');
    let u = l('\x1B[31m', '\x1B[39m'),
      d = l('\x1B[32m', '\x1B[39m'),
      p = l('\x1B[33m', '\x1B[39m');
    l('\x1B[34m', '\x1B[39m');
    let f = l('\x1B[35m', '\x1B[39m');
    l('\x1B[38;2;173;127;168m', '\x1B[39m'), l('\x1B[36m', '\x1B[39m');
    let h = l('\x1B[37m', '\x1B[39m');
    l('\x1B[90m', '\x1B[39m'),
      l('\x1B[40m', '\x1B[49m'),
      l('\x1B[41m', '\x1B[49m'),
      l('\x1B[42m', '\x1B[49m'),
      l('\x1B[43m', '\x1B[49m'),
      l('\x1B[44m', '\x1B[49m'),
      l('\x1B[45m', '\x1B[49m'),
      l('\x1B[46m', '\x1B[49m'),
      l('\x1B[47m', '\x1B[49m');
    let g = {
        wait: h(c('\u25CB')),
        error: u(c('\u2A2F')),
        warn: p(c('\u26A0')),
        ready: '\u25B2',
        info: h(c(' ')),
        event: d(c('\u2713')),
        trace: f(c('\xBB'))
      },
      y = { log: 'log', warn: 'warn', error: 'error' };
    function m(...e2) {
      !(function (e3, ...t2) {
        ('' === t2[0] || void 0 === t2[0]) && 1 === t2.length && t2.shift();
        let r2 = e3 in y ? y[e3] : 'log',
          n2 = g[e3];
        0 === t2.length ? console[r2]('') : console[r2](' ' + n2, ...t2);
      })('warn', ...e2);
    }
  };
  __namedExportsObject['__chunk_47701'] = (e, t, r) => {
    'use strict';
    r.d(t, { v6: () => i.v, uX: () => n.uX });
    var n = r(99321),
      i = r(37829);
  };
  __namedExportsObject['__chunk_73586'] = (e, t, r) => {
    'use strict';
    r.d(t, { Qk: () => d, A: () => u });
    var n = r(1673),
      i = r(65376),
      o = r(1812),
      a = r(43083),
      s = r(16254),
      l = r(8427),
      c = r(94051);
    function u() {
      let e2 = 'headers',
        t2 = s.A.getStore();
      if (t2) {
        if (t2.forceStatic) return i.h.seal(new Headers({}));
        (0, l.TP)(t2, e2);
      }
      return (0, c.F)(e2).headers;
    }
    function d() {
      let e2 = 'cookies',
        t2 = s.A.getStore();
      if (t2) {
        if (t2.forceStatic) return n.Qb.seal(new o.q(new Headers({})));
        (0, l.TP)(t2, e2);
      }
      let r2 = (0, c.F)(e2),
        i2 = a.W.getStore();
      return (null == i2 ? void 0 : i2.isAction) ||
        (null == i2 ? void 0 : i2.isAppRoute)
        ? r2.mutableCookies
        : r2.cookies;
    }
  };
  __namedExportsObject['__chunk_53059'] = (e, t, r) => {
    var n;
    (() => {
      var i = {
          226: function (i2, o2) {
            !(function (a2, s2) {
              'use strict';
              var l = 'function',
                c = 'undefined',
                u = 'object',
                d = 'string',
                p = 'major',
                f = 'model',
                h = 'name',
                g = 'type',
                y = 'vendor',
                m = 'version',
                v = 'architecture',
                b = 'console',
                w = 'mobile',
                _ = 'tablet',
                S = 'smarttv',
                k = 'wearable',
                x = 'embedded',
                E = 'Amazon',
                A = 'Apple',
                C = 'ASUS',
                T = 'BlackBerry',
                P = 'Browser',
                O = 'Chrome',
                R = 'Firefox',
                I = 'Google',
                $ = 'Huawei',
                N = 'Microsoft',
                U = 'Motorola',
                j = 'Opera',
                L = 'Samsung',
                M = 'Sharp',
                D = 'Sony',
                H = 'Xiaomi',
                W = 'Zebra',
                K = 'Facebook',
                B = 'Chromium OS',
                V = 'Mac OS',
                J = function (e2, t2) {
                  var r2 = {};
                  for (var n2 in e2)
                    t2[n2] && t2[n2].length % 2 == 0
                      ? (r2[n2] = t2[n2].concat(e2[n2]))
                      : (r2[n2] = e2[n2]);
                  return r2;
                },
                q = function (e2) {
                  for (var t2 = {}, r2 = 0; r2 < e2.length; r2++)
                    t2[e2[r2].toUpperCase()] = e2[r2];
                  return t2;
                },
                F = function (e2, t2) {
                  return typeof e2 === d && -1 !== z(t2).indexOf(z(e2));
                },
                z = function (e2) {
                  return e2.toLowerCase();
                },
                G = function (e2, t2) {
                  if (typeof e2 === d)
                    return (
                      (e2 = e2.replace(/^\s\s*/, '')),
                      typeof t2 === c ? e2 : e2.substring(0, 350)
                    );
                },
                X = function (e2, t2) {
                  for (
                    var r2, n2, i3, o3, a3, c2, d2 = 0;
                    d2 < t2.length && !a3;

                  ) {
                    var p2 = t2[d2],
                      f2 = t2[d2 + 1];
                    for (r2 = n2 = 0; r2 < p2.length && !a3 && p2[r2]; )
                      if ((a3 = p2[r2++].exec(e2)))
                        for (i3 = 0; i3 < f2.length; i3++)
                          (c2 = a3[++n2]),
                            typeof (o3 = f2[i3]) === u && o3.length > 0
                              ? 2 === o3.length
                                ? typeof o3[1] == l
                                  ? (this[o3[0]] = o3[1].call(this, c2))
                                  : (this[o3[0]] = o3[1])
                                : 3 === o3.length
                                ? typeof o3[1] !== l ||
                                  (o3[1].exec && o3[1].test)
                                  ? (this[o3[0]] = c2
                                      ? c2.replace(o3[1], o3[2])
                                      : void 0)
                                  : (this[o3[0]] = c2
                                      ? o3[1].call(this, c2, o3[2])
                                      : void 0)
                                : 4 === o3.length &&
                                  (this[o3[0]] = c2
                                    ? o3[3].call(this, c2.replace(o3[1], o3[2]))
                                    : void 0)
                              : (this[o3] = c2 || s2);
                    d2 += 2;
                  }
                },
                Y = function (e2, t2) {
                  for (var r2 in t2)
                    if (typeof t2[r2] === u && t2[r2].length > 0) {
                      for (var n2 = 0; n2 < t2[r2].length; n2++)
                        if (F(t2[r2][n2], e2)) return '?' === r2 ? s2 : r2;
                    } else if (F(t2[r2], e2)) return '?' === r2 ? s2 : r2;
                  return e2;
                },
                Q = {
                  ME: '4.90',
                  'NT 3.11': 'NT3.51',
                  'NT 4.0': 'NT4.0',
                  2e3: 'NT 5.0',
                  XP: ['NT 5.1', 'NT 5.2'],
                  Vista: 'NT 6.0',
                  7: 'NT 6.1',
                  8: 'NT 6.2',
                  8.1: 'NT 6.3',
                  10: ['NT 6.4', 'NT 10.0'],
                  RT: 'ARM'
                },
                Z = {
                  browser: [
                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                    [m, [h, 'Chrome']],
                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                    [m, [h, 'Edge']],
                    [
                      /(opera mini)\/([-\w\.]+)/i,
                      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                    ],
                    [h, m],
                    [/opios[\/ ]+([\w\.]+)/i],
                    [m, [h, j + ' Mini']],
                    [/\bopr\/([\w\.]+)/i],
                    [m, [h, j]],
                    [
                      /(kindle)\/([\w\.]+)/i,
                      /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                      /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                      /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                      /(?:ms|\()(ie) ([\w\.]+)/i,
                      /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                      /(heytap|ovi)browser\/([\d\.]+)/i,
                      /(weibo)__([\d\.]+)/i
                    ],
                    [h, m],
                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                    [m, [h, 'UC' + P]],
                    [
                      /microm.+\bqbcore\/([\w\.]+)/i,
                      /\bqbcore\/([\w\.]+).+microm/i
                    ],
                    [m, [h, 'WeChat(Win) Desktop']],
                    [/micromessenger\/([\w\.]+)/i],
                    [m, [h, 'WeChat']],
                    [/konqueror\/([\w\.]+)/i],
                    [m, [h, 'Konqueror']],
                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                    [m, [h, 'IE']],
                    [/ya(?:search)?browser\/([\w\.]+)/i],
                    [m, [h, 'Yandex']],
                    [/(avast|avg)\/([\w\.]+)/i],
                    [[h, /(.+)/, '$1 Secure ' + P], m],
                    [/\bfocus\/([\w\.]+)/i],
                    [m, [h, R + ' Focus']],
                    [/\bopt\/([\w\.]+)/i],
                    [m, [h, j + ' Touch']],
                    [/coc_coc\w+\/([\w\.]+)/i],
                    [m, [h, 'Coc Coc']],
                    [/dolfin\/([\w\.]+)/i],
                    [m, [h, 'Dolphin']],
                    [/coast\/([\w\.]+)/i],
                    [m, [h, j + ' Coast']],
                    [/miuibrowser\/([\w\.]+)/i],
                    [m, [h, 'MIUI ' + P]],
                    [/fxios\/([-\w\.]+)/i],
                    [m, [h, R]],
                    [/\bqihu|(qi?ho?o?|360)browser/i],
                    [[h, '360 ' + P]],
                    [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                    [[h, /(.+)/, '$1 ' + P], m],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [[h, /_/g, ' '], m],
                    [
                      /(electron)\/([\w\.]+) safari/i,
                      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                      /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                    ],
                    [h, m],
                    [
                      /(metasr)[\/ ]?([\w\.]+)/i,
                      /(lbbrowser)/i,
                      /\[(linkedin)app\]/i
                    ],
                    [h],
                    [
                      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
                    ],
                    [[h, K], m],
                    [
                      /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                      /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                      /safari (line)\/([\w\.]+)/i,
                      /\b(line)\/([\w\.]+)\/iab/i,
                      /(chromium|instagram)[\/ ]([-\w\.]+)/i
                    ],
                    [h, m],
                    [/\bgsa\/([\w\.]+) .*safari\//i],
                    [m, [h, 'GSA']],
                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                    [m, [h, 'TikTok']],
                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                    [m, [h, O + ' Headless']],
                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                    [[h, O + ' WebView'], m],
                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                    [m, [h, 'Android ' + P]],
                    [
                      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
                    ],
                    [h, m],
                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                    [m, [h, 'Mobile Safari']],
                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                    [m, h],
                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                    [
                      h,
                      [
                        m,
                        Y,
                        {
                          '1.0': '/8',
                          1.2: '/1',
                          1.3: '/3',
                          '2.0': '/412',
                          '2.0.2': '/416',
                          '2.0.3': '/417',
                          '2.0.4': '/419',
                          '?': '/'
                        }
                      ]
                    ],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [h, m],
                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                    [[h, 'Netscape'], m],
                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                    [m, [h, R + ' Reality']],
                    [
                      /ekiohf.+(flow)\/([\w\.]+)/i,
                      /(swiftfox)/i,
                      /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                      /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                      /(firefox)\/([\w\.]+)/i,
                      /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                      /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                      /(links) \(([\w\.]+)/i,
                      /panasonic;(viera)/i
                    ],
                    [h, m],
                    [/(cobalt)\/([\w\.]+)/i],
                    [h, [m, /master.|lts./, '']]
                  ],
                  cpu: [
                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                    [[v, 'amd64']],
                    [/(ia32(?=;))/i],
                    [[v, z]],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [[v, 'ia32']],
                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                    [[v, 'arm64']],
                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                    [[v, 'armhf']],
                    [/windows (ce|mobile); ppc;/i],
                    [[v, 'arm']],
                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                    [[v, /ower/, '', z]],
                    [/(sun4\w)[;\)]/i],
                    [[v, 'sparc']],
                    [
                      /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                    ],
                    [[v, z]]
                  ],
                  device: [
                    [
                      /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
                    ],
                    [f, [y, L], [g, _]],
                    [
                      /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                      /samsung[- ]([-\w]+)/i,
                      /sec-(sgh\w+)/i
                    ],
                    [f, [y, L], [g, w]],
                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                    [f, [y, A], [g, w]],
                    [
                      /\((ipad);[-\w\),; ]+apple/i,
                      /applecoremedia\/[\w\.]+ \((ipad)/i,
                      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
                    ],
                    [f, [y, A], [g, _]],
                    [/(macintosh);/i],
                    [f, [y, A]],
                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                    [f, [y, M], [g, w]],
                    [
                      /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
                    ],
                    [f, [y, $], [g, _]],
                    [
                      /(?:huawei|honor)([-\w ]+)[;\)]/i,
                      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
                    ],
                    [f, [y, $], [g, w]],
                    [
                      /\b(poco[\w ]+)(?: bui|\))/i,
                      /\b; (\w+) build\/hm\1/i,
                      /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                      /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                      /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                    ],
                    [
                      [f, /_/g, ' '],
                      [y, H],
                      [g, w]
                    ],
                    [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                    [
                      [f, /_/g, ' '],
                      [y, H],
                      [g, _]
                    ],
                    [
                      /; (\w+) bui.+ oppo/i,
                      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                    ],
                    [f, [y, 'OPPO'], [g, w]],
                    [
                      /vivo (\w+)(?: bui|\))/i,
                      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
                    ],
                    [f, [y, 'Vivo'], [g, w]],
                    [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                    [f, [y, 'Realme'], [g, w]],
                    [
                      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                      /\bmot(?:orola)?[- ](\w*)/i,
                      /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                    ],
                    [f, [y, U], [g, w]],
                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                    [f, [y, U], [g, _]],
                    [
                      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
                    ],
                    [f, [y, 'LG'], [g, _]],
                    [
                      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                      /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                      /\blg-?([\d\w]+) bui/i
                    ],
                    [f, [y, 'LG'], [g, w]],
                    [
                      /(ideatab[-\w ]+)/i,
                      /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
                    ],
                    [f, [y, 'Lenovo'], [g, _]],
                    [
                      /(?:maemo|nokia).*(n900|lumia \d+)/i,
                      /nokia[-_ ]?([-\w\.]*)/i
                    ],
                    [
                      [f, /_/g, ' '],
                      [y, 'Nokia'],
                      [g, w]
                    ],
                    [/(pixel c)\b/i],
                    [f, [y, I], [g, _]],
                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    [f, [y, I], [g, w]],
                    [
                      /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                    ],
                    [f, [y, D], [g, w]],
                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                    [
                      [f, 'Xperia Tablet'],
                      [y, D],
                      [g, _]
                    ],
                    [
                      / (kb2005|in20[12]5|be20[12][59])\b/i,
                      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
                    ],
                    [f, [y, 'OnePlus'], [g, w]],
                    [
                      /(alexa)webm/i,
                      /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                      /(kf[a-z]+)( bui|\)).+silk\//i
                    ],
                    [f, [y, E], [g, _]],
                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                    [
                      [f, /(.+)/g, 'Fire Phone $1'],
                      [y, E],
                      [g, w]
                    ],
                    [/(playbook);[-\w\),; ]+(rim)/i],
                    [f, y, [g, _]],
                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                    [f, [y, T], [g, w]],
                    [
                      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
                    ],
                    [f, [y, C], [g, _]],
                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                    [f, [y, C], [g, w]],
                    [/(nexus 9)/i],
                    [f, [y, 'HTC'], [g, _]],
                    [
                      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                      /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                    ],
                    [y, [f, /_/g, ' '], [g, w]],
                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                    [f, [y, 'Acer'], [g, _]],
                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                    [f, [y, 'Meizu'], [g, w]],
                    [
                      /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                      /(hp) ([\w ]+\w)/i,
                      /(asus)-?(\w+)/i,
                      /(microsoft); (lumia[\w ]+)/i,
                      /(lenovo)[-_ ]?([-\w]+)/i,
                      /(jolla)/i,
                      /(oppo) ?([\w ]+) bui/i
                    ],
                    [y, f, [g, w]],
                    [
                      /(kobo)\s(ereader|touch)/i,
                      /(archos) (gamepad2?)/i,
                      /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                      /(kindle)\/([\w\.]+)/i,
                      /(nook)[\w ]+build\/(\w+)/i,
                      /(dell) (strea[kpr\d ]*[\dko])/i,
                      /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                      /(trinity)[- ]*(t\d{3}) bui/i,
                      /(gigaset)[- ]+(q\w{1,9}) bui/i,
                      /(vodafone) ([\w ]+)(?:\)| bui)/i
                    ],
                    [y, f, [g, _]],
                    [/(surface duo)/i],
                    [f, [y, N], [g, _]],
                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                    [f, [y, 'Fairphone'], [g, w]],
                    [/(u304aa)/i],
                    [f, [y, 'AT&T'], [g, w]],
                    [/\bsie-(\w*)/i],
                    [f, [y, 'Siemens'], [g, w]],
                    [/\b(rct\w+) b/i],
                    [f, [y, 'RCA'], [g, _]],
                    [/\b(venue[\d ]{2,7}) b/i],
                    [f, [y, 'Dell'], [g, _]],
                    [/\b(q(?:mv|ta)\w+) b/i],
                    [f, [y, 'Verizon'], [g, _]],
                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                    [f, [y, 'Barnes & Noble'], [g, _]],
                    [/\b(tm\d{3}\w+) b/i],
                    [f, [y, 'NuVision'], [g, _]],
                    [/\b(k88) b/i],
                    [f, [y, 'ZTE'], [g, _]],
                    [/\b(nx\d{3}j) b/i],
                    [f, [y, 'ZTE'], [g, w]],
                    [/\b(gen\d{3}) b.+49h/i],
                    [f, [y, 'Swiss'], [g, w]],
                    [/\b(zur\d{3}) b/i],
                    [f, [y, 'Swiss'], [g, _]],
                    [/\b((zeki)?tb.*\b) b/i],
                    [f, [y, 'Zeki'], [g, _]],
                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                    [[y, 'Dragon Touch'], f, [g, _]],
                    [/\b(ns-?\w{0,9}) b/i],
                    [f, [y, 'Insignia'], [g, _]],
                    [/\b((nxa|next)-?\w{0,9}) b/i],
                    [f, [y, 'NextBook'], [g, _]],
                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                    [[y, 'Voice'], f, [g, w]],
                    [/\b(lvtel\-)?(v1[12]) b/i],
                    [[y, 'LvTel'], f, [g, w]],
                    [/\b(ph-1) /i],
                    [f, [y, 'Essential'], [g, w]],
                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                    [f, [y, 'Envizen'], [g, _]],
                    [/\b(trio[-\w\. ]+) b/i],
                    [f, [y, 'MachSpeed'], [g, _]],
                    [/\btu_(1491) b/i],
                    [f, [y, 'Rotor'], [g, _]],
                    [/(shield[\w ]+) b/i],
                    [f, [y, 'Nvidia'], [g, _]],
                    [/(sprint) (\w+)/i],
                    [y, f, [g, w]],
                    [/(kin\.[onetw]{3})/i],
                    [
                      [f, /\./g, ' '],
                      [y, N],
                      [g, w]
                    ],
                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                    [f, [y, W], [g, _]],
                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                    [f, [y, W], [g, w]],
                    [/smart-tv.+(samsung)/i],
                    [y, [g, S]],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                      [f, /^/, 'SmartTV'],
                      [y, L],
                      [g, S]
                    ],
                    [
                      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
                    ],
                    [
                      [y, 'LG'],
                      [g, S]
                    ],
                    [/(apple) ?tv/i],
                    [y, [f, A + ' TV'], [g, S]],
                    [/crkey/i],
                    [
                      [f, O + 'cast'],
                      [y, I],
                      [g, S]
                    ],
                    [/droid.+aft(\w)( bui|\))/i],
                    [f, [y, E], [g, S]],
                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                    [f, [y, M], [g, S]],
                    [/(bravia[\w ]+)( bui|\))/i],
                    [f, [y, D], [g, S]],
                    [/(mitv-\w{5}) bui/i],
                    [f, [y, H], [g, S]],
                    [/Hbbtv.*(technisat) (.*);/i],
                    [y, f, [g, S]],
                    [
                      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                      /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
                    ],
                    [
                      [y, G],
                      [f, G],
                      [g, S]
                    ],
                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                    [[g, S]],
                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                    [y, f, [g, b]],
                    [/droid.+; (shield) bui/i],
                    [f, [y, 'Nvidia'], [g, b]],
                    [/(playstation [345portablevi]+)/i],
                    [f, [y, D], [g, b]],
                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                    [f, [y, N], [g, b]],
                    [/((pebble))app/i],
                    [y, f, [g, k]],
                    [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                    [f, [y, A], [g, k]],
                    [/droid.+; (glass) \d/i],
                    [f, [y, I], [g, k]],
                    [/droid.+; (wt63?0{2,3})\)/i],
                    [f, [y, W], [g, k]],
                    [/(quest( 2| pro)?)/i],
                    [f, [y, K], [g, k]],
                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                    [y, [g, x]],
                    [/(aeobc)\b/i],
                    [f, [y, E], [g, x]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                    [f, [g, w]],
                    [
                      /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
                    ],
                    [f, [g, _]],
                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                    [[g, _]],
                    [
                      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
                    ],
                    [[g, w]],
                    [/(android[-\w\. ]{0,9});.+buil/i],
                    [f, [y, 'Generic']]
                  ],
                  engine: [
                    [/windows.+ edge\/([\w\.]+)/i],
                    [m, [h, 'EdgeHTML']],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [m, [h, 'Blink']],
                    [
                      /(presto)\/([\w\.]+)/i,
                      /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                      /ekioh(flow)\/([\w\.]+)/i,
                      /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                      /(icab)[\/ ]([23]\.[\d\.]+)/i,
                      /\b(libweb)/i
                    ],
                    [h, m],
                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                    [m, h]
                  ],
                  os: [
                    [/microsoft (windows) (vista|xp)/i],
                    [h, m],
                    [
                      /(windows) nt 6\.2; (arm)/i,
                      /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                      /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                    ],
                    [h, [m, Y, Q]],
                    [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                    [
                      [h, 'Windows'],
                      [m, Y, Q]
                    ],
                    [
                      /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                      /ios;fbsv\/([\d\.]+)/i,
                      /cfnetwork\/.+darwin/i
                    ],
                    [
                      [m, /_/g, '.'],
                      [h, 'iOS']
                    ],
                    [
                      /(mac os x) ?([\w\. ]*)/i,
                      /(macintosh|mac_powerpc\b)(?!.+haiku)/i
                    ],
                    [
                      [h, V],
                      [m, /_/g, '.']
                    ],
                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                    [m, h],
                    [
                      /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                      /(blackberry)\w*\/([\w\.]*)/i,
                      /(tizen|kaios)[\/ ]([\w\.]+)/i,
                      /\((series40);/i
                    ],
                    [h, m],
                    [/\(bb(10);/i],
                    [m, [h, T]],
                    [
                      /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
                    ],
                    [m, [h, 'Symbian']],
                    [
                      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
                    ],
                    [m, [h, R + ' OS']],
                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                    [m, [h, 'webOS']],
                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                    [m, [h, 'watchOS']],
                    [/crkey\/([\d\.]+)/i],
                    [m, [h, O + 'cast']],
                    [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                    [[h, B], m],
                    [
                      /panasonic;(viera)/i,
                      /(netrange)mmh/i,
                      /(nettv)\/(\d+\.[\w\.]+)/i,
                      /(nintendo|playstation) ([wids345portablevuch]+)/i,
                      /(xbox); +xbox ([^\);]+)/i,
                      /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                      /(mint)[\/\(\) ]?(\w*)/i,
                      /(mageia|vectorlinux)[; ]/i,
                      /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                      /(hurd|linux) ?([\w\.]*)/i,
                      /(gnu) ?([\w\.]*)/i,
                      /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                      /(haiku) (\w+)/i
                    ],
                    [h, m],
                    [/(sunos) ?([\w\.\d]*)/i],
                    [[h, 'Solaris'], m],
                    [
                      /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                      /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                      /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                      /(unix) ?([\w\.]*)/i
                    ],
                    [h, m]
                  ]
                },
                ee = function (e2, t2) {
                  if (
                    (typeof e2 === u && ((t2 = e2), (e2 = s2)),
                    !(this instanceof ee))
                  )
                    return new ee(e2, t2).getResult();
                  var r2 = typeof a2 !== c && a2.navigator ? a2.navigator : s2,
                    n2 = e2 || (r2 && r2.userAgent ? r2.userAgent : ''),
                    i3 = r2 && r2.userAgentData ? r2.userAgentData : s2,
                    o3 = t2 ? J(Z, t2) : Z,
                    b2 = r2 && r2.userAgent == n2;
                  return (
                    (this.getBrowser = function () {
                      var e3,
                        t3 = {};
                      return (
                        (t3[h] = s2),
                        (t3[m] = s2),
                        X.call(t3, n2, o3.browser),
                        (t3[p] =
                          typeof (e3 = t3[m]) === d
                            ? e3.replace(/[^\d\.]/g, '').split('.')[0]
                            : s2),
                        b2 &&
                          r2 &&
                          r2.brave &&
                          typeof r2.brave.isBrave == l &&
                          (t3[h] = 'Brave'),
                        t3
                      );
                    }),
                    (this.getCPU = function () {
                      var e3 = {};
                      return (e3[v] = s2), X.call(e3, n2, o3.cpu), e3;
                    }),
                    (this.getDevice = function () {
                      var e3 = {};
                      return (
                        (e3[y] = s2),
                        (e3[f] = s2),
                        (e3[g] = s2),
                        X.call(e3, n2, o3.device),
                        b2 && !e3[g] && i3 && i3.mobile && (e3[g] = w),
                        b2 &&
                          'Macintosh' == e3[f] &&
                          r2 &&
                          typeof r2.standalone !== c &&
                          r2.maxTouchPoints &&
                          r2.maxTouchPoints > 2 &&
                          ((e3[f] = 'iPad'), (e3[g] = _)),
                        e3
                      );
                    }),
                    (this.getEngine = function () {
                      var e3 = {};
                      return (
                        (e3[h] = s2),
                        (e3[m] = s2),
                        X.call(e3, n2, o3.engine),
                        e3
                      );
                    }),
                    (this.getOS = function () {
                      var e3 = {};
                      return (
                        (e3[h] = s2),
                        (e3[m] = s2),
                        X.call(e3, n2, o3.os),
                        b2 &&
                          !e3[h] &&
                          i3 &&
                          'Unknown' != i3.platform &&
                          (e3[h] = i3.platform
                            .replace(/chrome os/i, B)
                            .replace(/macos/i, V)),
                        e3
                      );
                    }),
                    (this.getResult = function () {
                      return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                      };
                    }),
                    (this.getUA = function () {
                      return n2;
                    }),
                    (this.setUA = function (e3) {
                      return (
                        (n2 =
                          typeof e3 === d && e3.length > 350 ? G(e3, 350) : e3),
                        this
                      );
                    }),
                    this.setUA(n2),
                    this
                  );
                };
              (ee.VERSION = '1.0.35'),
                (ee.BROWSER = q([h, m, p])),
                (ee.CPU = q([v])),
                (ee.DEVICE = q([f, y, g, b, w, S, _, k, x])),
                (ee.ENGINE = ee.OS = q([h, m])),
                typeof o2 !== c
                  ? (i2.exports && (o2 = i2.exports = ee), (o2.UAParser = ee))
                  : r.amdO
                  ? void 0 !==
                      (n = function () {
                        return ee;
                      }.call(t, r, t, e)) && (e.exports = n)
                  : typeof a2 !== c && (a2.UAParser = ee);
              var et = typeof a2 !== c && (a2.jQuery || a2.Zepto);
              if (et && !et.ua) {
                var er = new ee();
                (et.ua = er.getResult()),
                  (et.ua.get = function () {
                    return er.getUA();
                  }),
                  (et.ua.set = function (e2) {
                    er.setUA(e2);
                    var t2 = er.getResult();
                    for (var r2 in t2) et.ua[r2] = t2[r2];
                  });
              }
            })('object' == typeof window ? window : this);
          }
        },
        o = {};
      function a(e2) {
        var t2 = o[e2];
        if (void 0 !== t2) return t2.exports;
        var r2 = (o[e2] = { exports: {} }),
          n2 = true;
        try {
          i[e2].call(r2.exports, r2, r2.exports, a), (n2 = false);
        } finally {
          n2 && delete o[e2];
        }
        return r2.exports;
      }
      a.ab = '//';
      var s = a(226);
      e.exports = s;
    })();
  };
  __namedExportsObject['__chunk_68610'] = (e, t, r) => {
    'use strict';
    e.exports = r(7959);
  };
  __namedExportsObject['__chunk_7959'] = (e, t) => {
    'use strict';
    var r = Object.assign,
      n = { current: null };
    function i() {
      return /* @__PURE__ */ new Map();
    }
    if ('function' == typeof fetch) {
      var o = fetch,
        a = function (e2, t2) {
          var r2 = n.current;
          if (!r2 || (t2 && t2.signal && t2.signal !== r2.getCacheSignal()))
            return o(e2, t2);
          if ('string' != typeof e2 || t2) {
            var a2 =
              'string' == typeof e2 || e2 instanceof URL
                ? new Request(e2, t2)
                : e2;
            if (('GET' !== a2.method && 'HEAD' !== a2.method) || a2.keepalive)
              return o(e2, t2);
            var s2 = JSON.stringify([
              a2.method,
              Array.from(a2.headers.entries()),
              null,
              a2.redirect,
              null,
              a2.referrer,
              a2.referrerPolicy,
              null
            ]);
            a2 = a2.url;
          } else
            (s2 = '["GET",[],null,"follow",null,null,null,null]'), (a2 = e2);
          var l2 = r2.getCacheForType(i);
          if (void 0 === (r2 = l2.get(a2)))
            (e2 = o(e2, t2)), l2.set(a2, [s2, e2]);
          else {
            for (a2 = 0, l2 = r2.length; a2 < l2; a2 += 2) {
              var c2 = r2[a2 + 1];
              if (r2[a2] === s2)
                return (e2 = c2).then(function (e3) {
                  return e3.clone();
                });
            }
            (e2 = o(e2, t2)), r2.push(s2, e2);
          }
          return e2.then(function (e3) {
            return e3.clone();
          });
        };
      r(a, o);
      try {
        fetch = a;
      } catch (e2) {
        try {
          globalThis.fetch = a;
        } catch (e3) {
          console.warn(
            'React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.'
          );
        }
      }
    }
    var s = { current: null },
      l = { ReactCurrentDispatcher: s, ReactCurrentOwner: { current: null } };
    function c(e2) {
      var t2 = 'https://react.dev/errors/' + e2;
      if (1 < arguments.length) {
        t2 += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var r2 = 2; r2 < arguments.length; r2++)
          t2 += '&args[]=' + encodeURIComponent(arguments[r2]);
      }
      return (
        'Minified React error #' +
        e2 +
        '; visit ' +
        t2 +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    var u = Array.isArray,
      d = Symbol.for('react.element'),
      p = Symbol.for('react.portal'),
      f = Symbol.for('react.fragment'),
      h = Symbol.for('react.strict_mode'),
      g = Symbol.for('react.profiler'),
      y = Symbol.for('react.forward_ref'),
      m = Symbol.for('react.suspense'),
      v = Symbol.for('react.memo'),
      b = Symbol.for('react.lazy'),
      w = Symbol.iterator,
      _ = Object.prototype.hasOwnProperty,
      S = l.ReactCurrentOwner;
    function k(e2) {
      return 'object' == typeof e2 && null !== e2 && e2.$$typeof === d;
    }
    var x = /\/+/g;
    function E(e2, t2) {
      var r2, n2;
      return 'object' == typeof e2 && null !== e2 && null != e2.key
        ? ((r2 = '' + e2.key),
          (n2 = { '=': '=0', ':': '=2' }),
          '$' +
            r2.replace(/[=:]/g, function (e3) {
              return n2[e3];
            }))
        : t2.toString(36);
    }
    function A() {}
    function C(e2, t2, r2) {
      if (null == e2) return e2;
      var n2 = [],
        i2 = 0;
      return (
        !(function e3(t3, r3, n3, i3, o2) {
          var a2,
            s2,
            l2,
            f2 = typeof t3;
          ('undefined' === f2 || 'boolean' === f2) && (t3 = null);
          var h2 = false;
          if (null === t3) h2 = true;
          else
            switch (f2) {
              case 'string':
              case 'number':
                h2 = true;
                break;
              case 'object':
                switch (t3.$$typeof) {
                  case d:
                  case p:
                    h2 = true;
                    break;
                  case b:
                    return e3((h2 = t3._init)(t3._payload), r3, n3, i3, o2);
                }
            }
          if (h2)
            return (
              (o2 = o2(t3)),
              (h2 = '' === i3 ? '.' + E(t3, 0) : i3),
              u(o2)
                ? ((n3 = ''),
                  null != h2 && (n3 = h2.replace(x, '$&/') + '/'),
                  e3(o2, r3, n3, '', function (e4) {
                    return e4;
                  }))
                : null != o2 &&
                  (k(o2) &&
                    ((a2 = o2),
                    (s2 =
                      n3 +
                      (!o2.key || (t3 && t3.key === o2.key)
                        ? ''
                        : ('' + o2.key).replace(x, '$&/') + '/') +
                      h2),
                    (o2 = {
                      $$typeof: d,
                      type: a2.type,
                      key: s2,
                      ref: a2.ref,
                      props: a2.props,
                      _owner: a2._owner
                    })),
                  r3.push(o2)),
              1
            );
          h2 = 0;
          var g2 = '' === i3 ? '.' : i3 + ':';
          if (u(t3))
            for (var y2 = 0; y2 < t3.length; y2++)
              (f2 = g2 + E((i3 = t3[y2]), y2)), (h2 += e3(i3, r3, n3, f2, o2));
          else if (
            'function' ==
            typeof (y2 =
              null === (l2 = t3) || 'object' != typeof l2
                ? null
                : 'function' == typeof (l2 = (w && l2[w]) || l2['@@iterator'])
                ? l2
                : null)
          )
            for (t3 = y2.call(t3), y2 = 0; !(i3 = t3.next()).done; )
              (f2 = g2 + E((i3 = i3.value), y2++)),
                (h2 += e3(i3, r3, n3, f2, o2));
          else if ('object' === f2) {
            if ('function' == typeof t3.then)
              return e3(
                (function (e4) {
                  switch (e4.status) {
                    case 'fulfilled':
                      return e4.value;
                    case 'rejected':
                      throw e4.reason;
                    default:
                      switch (
                        ('string' == typeof e4.status
                          ? e4.then(A, A)
                          : ((e4.status = 'pending'),
                            e4.then(
                              function (t4) {
                                'pending' === e4.status &&
                                  ((e4.status = 'fulfilled'), (e4.value = t4));
                              },
                              function (t4) {
                                'pending' === e4.status &&
                                  ((e4.status = 'rejected'), (e4.reason = t4));
                              }
                            )),
                        e4.status)
                      ) {
                        case 'fulfilled':
                          return e4.value;
                        case 'rejected':
                          throw e4.reason;
                      }
                  }
                  throw e4;
                })(t3),
                r3,
                n3,
                i3,
                o2
              );
            throw Error(
              c(
                31,
                '[object Object]' === (r3 = String(t3))
                  ? 'object with keys {' + Object.keys(t3).join(', ') + '}'
                  : r3
              )
            );
          }
          return h2;
        })(e2, n2, '', '', function (e3) {
          return t2.call(r2, e3, i2++);
        }),
        n2
      );
    }
    function T(e2) {
      if (-1 === e2._status) {
        var t2 = e2._result;
        (t2 = t2()).then(
          function (t3) {
            (0 === e2._status || -1 === e2._status) &&
              ((e2._status = 1), (e2._result = t3));
          },
          function (t3) {
            (0 === e2._status || -1 === e2._status) &&
              ((e2._status = 2), (e2._result = t3));
          }
        ),
          -1 === e2._status && ((e2._status = 0), (e2._result = t2));
      }
      if (1 === e2._status) return e2._result.default;
      throw e2._result;
    }
    function P() {
      return /* @__PURE__ */ new WeakMap();
    }
    function O() {
      return { s: 0, v: void 0, o: null, p: null };
    }
    var R = { transition: null };
    function I() {}
    var $ =
      'function' == typeof reportError
        ? reportError
        : function (e2) {
            console.error(e2);
          };
    (t.Children = {
      map: C,
      forEach: function (e2, t2, r2) {
        C(
          e2,
          function () {
            t2.apply(this, arguments);
          },
          r2
        );
      },
      count: function (e2) {
        var t2 = 0;
        return (
          C(e2, function () {
            t2++;
          }),
          t2
        );
      },
      toArray: function (e2) {
        return (
          C(e2, function (e3) {
            return e3;
          }) || []
        );
      },
      only: function (e2) {
        if (!k(e2)) throw Error(c(143));
        return e2;
      }
    }),
      (t.Fragment = f),
      (t.Profiler = g),
      (t.StrictMode = h),
      (t.Suspense = m),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l),
      (t.__SECRET_SERVER_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
        ReactCurrentCache: n
      }),
      (t.cache = function (e2) {
        return function () {
          var t2 = n.current;
          if (!t2) return e2.apply(null, arguments);
          var r2 = t2.getCacheForType(P);
          void 0 === (t2 = r2.get(e2)) && ((t2 = O()), r2.set(e2, t2)),
            (r2 = 0);
          for (var i2 = arguments.length; r2 < i2; r2++) {
            var o2 = arguments[r2];
            if (
              'function' == typeof o2 ||
              ('object' == typeof o2 && null !== o2)
            ) {
              var a2 = t2.o;
              null === a2 && (t2.o = a2 = /* @__PURE__ */ new WeakMap()),
                void 0 === (t2 = a2.get(o2)) && ((t2 = O()), a2.set(o2, t2));
            } else
              null === (a2 = t2.p) && (t2.p = a2 = /* @__PURE__ */ new Map()),
                void 0 === (t2 = a2.get(o2)) && ((t2 = O()), a2.set(o2, t2));
          }
          if (1 === t2.s) return t2.v;
          if (2 === t2.s) throw t2.v;
          try {
            var s2 = e2.apply(null, arguments);
            return ((r2 = t2).s = 1), (r2.v = s2);
          } catch (e3) {
            throw (((s2 = t2).s = 2), (s2.v = e3), e3);
          }
        };
      }),
      (t.cloneElement = function (e2, t2, n2) {
        if (null == e2) throw Error(c(267, e2));
        var i2 = r({}, e2.props),
          o2 = e2.key,
          a2 = e2.ref,
          s2 = e2._owner;
        if (null != t2) {
          if (
            (void 0 !== t2.ref && ((a2 = t2.ref), (s2 = S.current)),
            void 0 !== t2.key && (o2 = '' + t2.key),
            e2.type && e2.type.defaultProps)
          )
            var l2 = e2.type.defaultProps;
          for (u2 in t2)
            _.call(t2, u2) &&
              'key' !== u2 &&
              'ref' !== u2 &&
              '__self' !== u2 &&
              '__source' !== u2 &&
              (i2[u2] = void 0 === t2[u2] && void 0 !== l2 ? l2[u2] : t2[u2]);
        }
        var u2 = arguments.length - 2;
        if (1 === u2) i2.children = n2;
        else if (1 < u2) {
          l2 = Array(u2);
          for (var p2 = 0; p2 < u2; p2++) l2[p2] = arguments[p2 + 2];
          i2.children = l2;
        }
        return {
          $$typeof: d,
          type: e2.type,
          key: o2,
          ref: a2,
          props: i2,
          _owner: s2
        };
      }),
      (t.createElement = function (e2, t2, r2) {
        var n2,
          i2 = {},
          o2 = null,
          a2 = null;
        if (null != t2)
          for (n2 in (void 0 !== t2.ref && (a2 = t2.ref),
          void 0 !== t2.key && (o2 = '' + t2.key),
          t2))
            _.call(t2, n2) &&
              'key' !== n2 &&
              'ref' !== n2 &&
              '__self' !== n2 &&
              '__source' !== n2 &&
              (i2[n2] = t2[n2]);
        var s2 = arguments.length - 2;
        if (1 === s2) i2.children = r2;
        else if (1 < s2) {
          for (var l2 = Array(s2), c2 = 0; c2 < s2; c2++)
            l2[c2] = arguments[c2 + 2];
          i2.children = l2;
        }
        if (e2 && e2.defaultProps)
          for (n2 in (s2 = e2.defaultProps))
            void 0 === i2[n2] && (i2[n2] = s2[n2]);
        return {
          $$typeof: d,
          type: e2,
          key: o2,
          ref: a2,
          props: i2,
          _owner: S.current
        };
      }),
      (t.createRef = function () {
        return { current: null };
      }),
      (t.forwardRef = function (e2) {
        return { $$typeof: y, render: e2 };
      }),
      (t.isValidElement = k),
      (t.lazy = function (e2) {
        return {
          $$typeof: b,
          _payload: { _status: -1, _result: e2 },
          _init: T
        };
      }),
      (t.memo = function (e2, t2) {
        return { $$typeof: v, type: e2, compare: void 0 === t2 ? null : t2 };
      }),
      (t.startTransition = function (e2) {
        var t2 = R.transition,
          r2 = /* @__PURE__ */ new Set();
        R.transition = { _callbacks: r2 };
        var n2 = R.transition;
        try {
          var i2 = e2();
          'object' == typeof i2 &&
            null !== i2 &&
            'function' == typeof i2.then &&
            (r2.forEach(function (e3) {
              return e3(n2, i2);
            }),
            i2.then(I, $));
        } catch (e3) {
          $(e3);
        } finally {
          R.transition = t2;
        }
      }),
      (t.use = function (e2) {
        return s.current.use(e2);
      }),
      (t.useCallback = function (e2, t2) {
        return s.current.useCallback(e2, t2);
      }),
      (t.useDebugValue = function () {}),
      (t.useId = function () {
        return s.current.useId();
      }),
      (t.useMemo = function (e2, t2) {
        return s.current.useMemo(e2, t2);
      }),
      (t.version = '18.3.0-canary-14898b6a9-20240318');
  };
  __namedExportsObject['__chunk_84303'] = (e, t, r) => {
    'use strict';
    e.exports = r(3326);
  };
  __namedExportsObject['__chunk_3326'] = (e, t, r) => {
    'use strict';
    var n = r(68610),
      i = r(50391),
      o = null,
      a = 0;
    function s(e2, t2) {
      if (0 !== t2.byteLength) {
        if (2048 < t2.byteLength)
          0 < a &&
            (e2.enqueue(new Uint8Array(o.buffer, 0, a)),
            (o = new Uint8Array(2048)),
            (a = 0)),
            e2.enqueue(t2);
        else {
          var r2 = o.length - a;
          r2 < t2.byteLength &&
            (0 === r2
              ? e2.enqueue(o)
              : (o.set(t2.subarray(0, r2), a),
                e2.enqueue(o),
                (t2 = t2.subarray(r2))),
            (o = new Uint8Array(2048)),
            (a = 0)),
            o.set(t2, a),
            (a += t2.byteLength);
        }
      }
      return true;
    }
    var l = new TextEncoder();
    function c(e2, t2) {
      'function' == typeof e2.error ? e2.error(t2) : e2.close();
    }
    var u = Symbol.for('react.client.reference'),
      d = Symbol.for('react.server.reference');
    function p(e2, t2, r2) {
      return Object.defineProperties(e2, {
        $$typeof: { value: u },
        $$id: { value: t2 },
        $$async: { value: r2 }
      });
    }
    var f = Function.prototype.bind,
      h = Array.prototype.slice;
    function g() {
      var e2 = f.apply(this, arguments);
      if (this.$$typeof === d) {
        var t2 = h.call(arguments, 1);
        return Object.defineProperties(e2, {
          $$typeof: { value: d },
          $$id: { value: this.$$id },
          $$bound: { value: this.$$bound ? this.$$bound.concat(t2) : t2 },
          bind: { value: g }
        });
      }
      return e2;
    }
    var y = Promise.prototype,
      m = {
        get: function (e2, t2) {
          switch (t2) {
            case '$$typeof':
              return e2.$$typeof;
            case '$$id':
              return e2.$$id;
            case '$$async':
              return e2.$$async;
            case 'name':
              return e2.name;
            case 'displayName':
            case 'defaultProps':
            case 'toJSON':
              return;
            case Symbol.toPrimitive:
              return Object.prototype[Symbol.toPrimitive];
            case Symbol.toStringTag:
              return Object.prototype[Symbol.toStringTag];
            case 'Provider':
              throw Error(
                'Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.'
              );
          }
          throw Error(
            'Cannot access ' +
              String(e2.name) +
              '.' +
              String(t2) +
              ' on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.'
          );
        },
        set: function () {
          throw Error('Cannot assign to a client module from a server module.');
        }
      };
    function v(e2, t2) {
      switch (t2) {
        case '$$typeof':
          return e2.$$typeof;
        case '$$id':
          return e2.$$id;
        case '$$async':
          return e2.$$async;
        case 'name':
          return e2.name;
        case 'defaultProps':
        case 'toJSON':
          return;
        case Symbol.toPrimitive:
          return Object.prototype[Symbol.toPrimitive];
        case Symbol.toStringTag:
          return Object.prototype[Symbol.toStringTag];
        case '__esModule':
          var r2 = e2.$$id;
          return (
            (e2.default = p(
              function () {
                throw Error(
                  'Attempted to call the default export of ' +
                    r2 +
                    " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
                );
              },
              e2.$$id + '#',
              e2.$$async
            )),
            true
          );
        case 'then':
          if (e2.then) return e2.then;
          if (e2.$$async) return;
          var n2 = p({}, e2.$$id, true),
            i2 = new Proxy(n2, b);
          return (
            (e2.status = 'fulfilled'),
            (e2.value = i2),
            (e2.then = p(
              function (e3) {
                return Promise.resolve(e3(i2));
              },
              e2.$$id + '#then',
              false
            ))
          );
      }
      if ('symbol' == typeof t2)
        throw Error(
          'Cannot read Symbol exports. Only named exports are supported on a client module imported on the server.'
        );
      return (
        (n2 = e2[t2]) ||
          (Object.defineProperty(
            (n2 = p(
              function () {
                throw Error(
                  'Attempted to call ' +
                    String(t2) +
                    '() from the server but ' +
                    String(t2) +
                    " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
                );
              },
              e2.$$id + '#' + t2,
              e2.$$async
            )),
            'name',
            { value: t2 }
          ),
          (n2 = e2[t2] = new Proxy(n2, m))),
        n2
      );
    }
    var b = {
        get: function (e2, t2) {
          return v(e2, t2);
        },
        getOwnPropertyDescriptor: function (e2, t2) {
          var r2 = Object.getOwnPropertyDescriptor(e2, t2);
          return (
            r2 ||
              ((r2 = {
                value: v(e2, t2),
                writable: false,
                configurable: false,
                enumerable: false
              }),
              Object.defineProperty(e2, t2, r2)),
            r2
          );
        },
        getPrototypeOf: function () {
          return y;
        },
        set: function () {
          throw Error('Cannot assign to a client module from a server module.');
        }
      },
      w = {
        prefetchDNS: function (e2) {
          if ('string' == typeof e2 && e2) {
            var t2 = ed();
            if (t2) {
              var r2 = t2.hints,
                n2 = 'D|' + e2;
              r2.has(n2) || (r2.add(n2), ep(t2, 'D', e2));
            }
          }
        },
        preconnect: function (e2, t2) {
          if ('string' == typeof e2) {
            var r2 = ed();
            if (r2) {
              var n2 = r2.hints,
                i2 = 'C|' + (null == t2 ? 'null' : t2) + '|' + e2;
              n2.has(i2) ||
                (n2.add(i2),
                'string' == typeof t2
                  ? ep(r2, 'C', [e2, t2])
                  : ep(r2, 'C', e2));
            }
          }
        },
        preload: function (e2, t2, r2) {
          if ('string' == typeof e2) {
            var n2 = ed();
            if (n2) {
              var i2 = n2.hints,
                o2 = 'L';
              if ('image' === t2 && r2) {
                var a2 = r2.imageSrcSet,
                  s2 = r2.imageSizes,
                  l2 = '';
                'string' == typeof a2 && '' !== a2
                  ? ((l2 += '[' + a2 + ']'),
                    'string' == typeof s2 && (l2 += '[' + s2 + ']'))
                  : (l2 += '[][]' + e2),
                  (o2 += '[image]' + l2);
              } else o2 += '[' + t2 + ']' + e2;
              i2.has(o2) ||
                (i2.add(o2),
                (r2 = _(r2))
                  ? ep(n2, 'L', [e2, t2, r2])
                  : ep(n2, 'L', [e2, t2]));
            }
          }
        },
        preloadModule: function (e2, t2) {
          if ('string' == typeof e2) {
            var r2 = ed();
            if (r2) {
              var n2 = r2.hints,
                i2 = 'm|' + e2;
              if (!n2.has(i2))
                return (
                  n2.add(i2),
                  (t2 = _(t2)) ? ep(r2, 'm', [e2, t2]) : ep(r2, 'm', e2)
                );
            }
          }
        },
        preinitStyle: function (e2, t2, r2) {
          if ('string' == typeof e2) {
            var n2 = ed();
            if (n2) {
              var i2 = n2.hints,
                o2 = 'S|' + e2;
              if (!i2.has(o2))
                return (
                  i2.add(o2),
                  (r2 = _(r2))
                    ? ep(n2, 'S', [e2, 'string' == typeof t2 ? t2 : 0, r2])
                    : 'string' == typeof t2
                    ? ep(n2, 'S', [e2, t2])
                    : ep(n2, 'S', e2)
                );
            }
          }
        },
        preinitScript: function (e2, t2) {
          if ('string' == typeof e2) {
            var r2 = ed();
            if (r2) {
              var n2 = r2.hints,
                i2 = 'X|' + e2;
              if (!n2.has(i2))
                return (
                  n2.add(i2),
                  (t2 = _(t2)) ? ep(r2, 'X', [e2, t2]) : ep(r2, 'X', e2)
                );
            }
          }
        },
        preinitModuleScript: function (e2, t2) {
          if ('string' == typeof e2) {
            var r2 = ed();
            if (r2) {
              var n2 = r2.hints,
                i2 = 'M|' + e2;
              if (!n2.has(i2))
                return (
                  n2.add(i2),
                  (t2 = _(t2)) ? ep(r2, 'M', [e2, t2]) : ep(r2, 'M', e2)
                );
            }
          }
        }
      };
    function _(e2) {
      if (null == e2) return null;
      var t2,
        r2 = false,
        n2 = {};
      for (t2 in e2) null != e2[t2] && ((r2 = true), (n2[t2] = e2[t2]));
      return r2 ? n2 : null;
    }
    var S = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher,
      k = 'function' == typeof AsyncLocalStorage,
      x = k ? new AsyncLocalStorage() : null;
    'object' == typeof async_hooks && async_hooks.createHook,
      'object' == typeof async_hooks && async_hooks.executionAsyncId;
    var E = Symbol.for('react.element'),
      A = Symbol.for('react.fragment'),
      C = Symbol.for('react.context'),
      T = Symbol.for('react.forward_ref'),
      P = Symbol.for('react.suspense'),
      O = Symbol.for('react.suspense_list'),
      R = Symbol.for('react.memo'),
      I = Symbol.for('react.lazy'),
      $ = Symbol.for('react.memo_cache_sentinel');
    Symbol.for('react.postpone');
    var N = Symbol.iterator,
      U = Error(
        "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
      );
    function j() {}
    var L = null;
    function M() {
      if (null === L)
        throw Error(
          'Expected a suspended thenable. This is a bug in React. Please file an issue.'
        );
      var e2 = L;
      return (L = null), e2;
    }
    var D = null,
      H = 0,
      W = null;
    function K() {
      var e2 = W || [];
      return (W = null), e2;
    }
    var B = {
      useMemo: function (e2) {
        return e2();
      },
      useCallback: function (e2) {
        return e2;
      },
      useDebugValue: function () {},
      useDeferredValue: V,
      useTransition: V,
      readContext: q,
      useContext: q,
      useReducer: V,
      useRef: V,
      useState: V,
      useInsertionEffect: V,
      useLayoutEffect: V,
      useImperativeHandle: V,
      useEffect: V,
      useId: function () {
        if (null === D)
          throw Error('useId can only be used while React is rendering');
        var e2 = D.identifierCount++;
        return ':' + D.identifierPrefix + 'S' + e2.toString(32) + ':';
      },
      useSyncExternalStore: V,
      useCacheRefresh: function () {
        return J;
      },
      useMemoCache: function (e2) {
        for (var t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = $;
        return t2;
      },
      use: function (e2) {
        if ((null !== e2 && 'object' == typeof e2) || 'function' == typeof e2) {
          if ('function' == typeof e2.then) {
            var t2 = H;
            return (
              (H += 1),
              null === W && (W = []),
              (function (e3, t3, r2) {
                switch (
                  (void 0 === (r2 = e3[r2])
                    ? e3.push(t3)
                    : r2 !== t3 && (t3.then(j, j), (t3 = r2)),
                  t3.status)
                ) {
                  case 'fulfilled':
                    return t3.value;
                  case 'rejected':
                    throw t3.reason;
                  default:
                    if ('string' != typeof t3.status)
                      switch (
                        (((e3 = t3).status = 'pending'),
                        e3.then(
                          function (e4) {
                            if ('pending' === t3.status) {
                              var r3 = t3;
                              (r3.status = 'fulfilled'), (r3.value = e4);
                            }
                          },
                          function (e4) {
                            if ('pending' === t3.status) {
                              var r3 = t3;
                              (r3.status = 'rejected'), (r3.reason = e4);
                            }
                          }
                        ),
                        t3.status)
                      ) {
                        case 'fulfilled':
                          return t3.value;
                        case 'rejected':
                          throw t3.reason;
                      }
                    throw ((L = t3), U);
                }
              })(W, e2, t2)
            );
          }
          e2.$$typeof === C && q();
        }
        if (e2.$$typeof === u) {
          if (null != e2.value && e2.value.$$typeof === C)
            throw Error(
              'Cannot read a Client Context from a Server Component.'
            );
          throw Error('Cannot use() an already resolved Client Reference.');
        }
        throw Error('An unsupported type was passed to use(): ' + String(e2));
      }
    };
    function V() {
      throw Error('This Hook is not supported in Server Components.');
    }
    function J() {
      throw Error(
        'Refreshing the cache is not supported in Server Components.'
      );
    }
    function q() {
      throw Error('Cannot read a Client Context from a Server Component.');
    }
    function F() {
      return new AbortController().signal;
    }
    function z() {
      var e2 = ed();
      return e2 ? e2.cache : /* @__PURE__ */ new Map();
    }
    var G = {
        getCacheSignal: function () {
          var e2 = z(),
            t2 = e2.get(F);
          return void 0 === t2 && ((t2 = F()), e2.set(F, t2)), t2;
        },
        getCacheForType: function (e2) {
          var t2 = z(),
            r2 = t2.get(e2);
          return void 0 === r2 && ((r2 = e2()), t2.set(e2, r2)), r2;
        }
      },
      X = Array.isArray,
      Y = Object.getPrototypeOf;
    function Q(e2) {
      return Object.prototype.toString
        .call(e2)
        .replace(/^\[object (.*)\]$/, function (e3, t2) {
          return t2;
        });
    }
    function Z(e2) {
      switch (typeof e2) {
        case 'string':
          return JSON.stringify(10 >= e2.length ? e2 : e2.slice(0, 10) + '...');
        case 'object':
          if (X(e2)) return '[...]';
          if (null !== e2 && e2.$$typeof === ee) return 'client';
          return 'Object' === (e2 = Q(e2)) ? '{...}' : e2;
        case 'function':
          return e2.$$typeof === ee
            ? 'client'
            : (e2 = e2.displayName || e2.name)
            ? 'function ' + e2
            : 'function';
        default:
          return String(e2);
      }
    }
    var ee = Symbol.for('react.client.reference');
    function et(e2, t2) {
      var r2 = Q(e2);
      if ('Object' !== r2 && 'Array' !== r2) return r2;
      r2 = -1;
      var n2 = 0;
      if (X(e2)) {
        for (var i2 = '[', o2 = 0; o2 < e2.length; o2++) {
          0 < o2 && (i2 += ', ');
          var a2 = e2[o2];
          (a2 = 'object' == typeof a2 && null !== a2 ? et(a2) : Z(a2)),
            '' + o2 === t2
              ? ((r2 = i2.length), (n2 = a2.length), (i2 += a2))
              : (i2 =
                  10 > a2.length && 40 > i2.length + a2.length
                    ? i2 + a2
                    : i2 + '...');
        }
        i2 += ']';
      } else if (e2.$$typeof === E)
        i2 =
          '<' +
          (function e3(t3) {
            if ('string' == typeof t3) return t3;
            switch (t3) {
              case P:
                return 'Suspense';
              case O:
                return 'SuspenseList';
            }
            if ('object' == typeof t3)
              switch (t3.$$typeof) {
                case T:
                  return e3(t3.render);
                case R:
                  return e3(t3.type);
                case I:
                  var r3 = t3._payload;
                  t3 = t3._init;
                  try {
                    return e3(t3(r3));
                  } catch (e4) {}
              }
            return '';
          })(e2.type) +
          '/>';
      else {
        if (e2.$$typeof === ee) return 'client';
        for (a2 = 0, i2 = '{', o2 = Object.keys(e2); a2 < o2.length; a2++) {
          0 < a2 && (i2 += ', ');
          var s2 = o2[a2],
            l2 = JSON.stringify(s2);
          (i2 += ('"' + s2 + '"' === l2 ? s2 : l2) + ': '),
            (l2 =
              'object' == typeof (l2 = e2[s2]) && null !== l2 ? et(l2) : Z(l2)),
            s2 === t2
              ? ((r2 = i2.length), (n2 = l2.length), (i2 += l2))
              : (i2 =
                  10 > l2.length && 40 > i2.length + l2.length
                    ? i2 + l2
                    : i2 + '...');
        }
        i2 += '}';
      }
      return void 0 === t2
        ? i2
        : -1 < r2 && 0 < n2
        ? '\n  ' + i2 + '\n  ' + (e2 = ' '.repeat(r2) + '^'.repeat(n2))
        : '\n  ' + i2;
    }
    var er = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      en = n.__SECRET_SERVER_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    if (!en)
      throw Error(
        'The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.'
      );
    var ei = Object.prototype,
      eo = JSON.stringify,
      ea = en.ReactCurrentCache,
      es = er.ReactCurrentDispatcher;
    function el(e2) {
      console.error(e2);
    }
    function ec() {}
    var eu = null;
    function ed() {
      if (eu) return eu;
      if (k) {
        var e2 = x.getStore();
        if (e2) return e2;
      }
      return null;
    }
    function ep(e2, t2, r2) {
      (r2 = eo(r2)),
        (t2 = 'H' + t2),
        (t2 = (e2.nextChunkId++).toString(16) + ':' + t2),
        (r2 = l.encode(t2 + r2 + '\n')),
        e2.completedHintChunks.push(r2),
        (function (e3) {
          if (
            false === e3.flushScheduled &&
            0 === e3.pingedTasks.length &&
            null !== e3.destination
          ) {
            var t3 = e3.destination;
            (e3.flushScheduled = true),
              setTimeout(function () {
                return eP(e3, t3);
              }, 0);
          }
        })(e2);
    }
    function ef(e2) {
      if ('fulfilled' === e2.status) return e2.value;
      if ('rejected' === e2.status) throw e2.reason;
      throw e2;
    }
    function eh(e2, t2, r2, n2, i2) {
      var o2 = t2.thenableState;
      if (
        ((t2.thenableState = null),
        (H = 0),
        (W = o2),
        'object' == typeof (n2 = n2(i2, void 0)) &&
          null !== n2 &&
          'function' == typeof n2.then)
      ) {
        if ('fulfilled' === (i2 = n2).status) return i2.value;
        n2 = (function (e3) {
          switch (e3.status) {
            case 'fulfilled':
            case 'rejected':
              break;
            default:
              'string' != typeof e3.status &&
                ((e3.status = 'pending'),
                e3.then(
                  function (t3) {
                    'pending' === e3.status &&
                      ((e3.status = 'fulfilled'), (e3.value = t3));
                  },
                  function (t3) {
                    'pending' === e3.status &&
                      ((e3.status = 'rejected'), (e3.reason = t3));
                  }
                ));
          }
          return { $$typeof: I, _payload: e3, _init: ef };
        })(n2);
      }
      return (
        (i2 = t2.keyPath),
        (o2 = t2.implicitSlot),
        null !== r2
          ? (t2.keyPath = null === i2 ? r2 : i2 + ',' + r2)
          : null === i2 && (t2.implicitSlot = true),
        (e2 = eS(e2, t2, eA, '', n2)),
        (t2.keyPath = i2),
        (t2.implicitSlot = o2),
        e2
      );
    }
    function eg(e2, t2) {
      var r2 = e2.pingedTasks;
      r2.push(t2),
        1 === r2.length &&
          ((e2.flushScheduled = null !== e2.destination),
          setTimeout(function () {
            return eT(e2);
          }, 0));
    }
    function ey(e2, t2, r2, n2, i2) {
      e2.pendingChunks++;
      var o2 = e2.nextChunkId++;
      'object' == typeof t2 && null !== t2 && e2.writtenObjects.set(t2, o2);
      var a2 = {
        id: o2,
        status: 0,
        model: t2,
        keyPath: r2,
        implicitSlot: n2,
        ping: function () {
          return eg(e2, a2);
        },
        toJSON: function (t3, r3) {
          var n3 = a2.keyPath,
            i3 = a2.implicitSlot;
          try {
            var o3 = eS(e2, a2, this, t3, r3);
          } catch (l2) {
            if (
              ((t3 = l2 === U ? M() : l2),
              (r3 =
                'object' == typeof (r3 = a2.model) &&
                null !== r3 &&
                (r3.$$typeof === E || r3.$$typeof === I)),
              'object' == typeof t3 &&
                null !== t3 &&
                'function' == typeof t3.then)
            ) {
              var s2 = (o3 = ey(
                e2,
                a2.model,
                a2.keyPath,
                a2.implicitSlot,
                e2.abortableTasks
              )).ping;
              t3.then(s2, s2),
                (o3.thenableState = K()),
                (a2.keyPath = n3),
                (a2.implicitSlot = i3),
                (o3 = r3 ? '$L' + o3.id.toString(16) : em(o3.id));
            } else if (((a2.keyPath = n3), (a2.implicitSlot = i3), r3))
              e2.pendingChunks++,
                (n3 = e2.nextChunkId++),
                (i3 = ek(e2, t3)),
                eE(e2, n3, i3),
                (o3 = '$L' + n3.toString(16));
            else throw t3;
          }
          return o3;
        },
        thenableState: null
      };
      return i2.add(a2), a2;
    }
    function em(e2) {
      return '$' + e2.toString(16);
    }
    function ev(e2, t2, r2) {
      return (
        (e2 = eo(r2)), (t2 = t2.toString(16) + ':' + e2 + '\n'), l.encode(t2)
      );
    }
    function eb(e2, t2, r2, n2) {
      var i2 = n2.$$async ? n2.$$id + '#async' : n2.$$id,
        o2 = e2.writtenClientReferences,
        a2 = o2.get(i2);
      if (void 0 !== a2)
        return t2[0] === E && '1' === r2 ? '$L' + a2.toString(16) : em(a2);
      try {
        var s2 = e2.bundlerConfig,
          c2 = n2.$$id;
        a2 = '';
        var u2 = s2[c2];
        if (u2) a2 = u2.name;
        else {
          var d2 = c2.lastIndexOf('#');
          if (
            (-1 !== d2 && ((a2 = c2.slice(d2 + 1)), (u2 = s2[c2.slice(0, d2)])),
            !u2)
          )
            throw Error(
              'Could not find the module "' +
                c2 +
                '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.'
            );
        }
        var p2 =
          true === n2.$$async
            ? [u2.id, u2.chunks, a2, 1]
            : [u2.id, u2.chunks, a2];
        e2.pendingChunks++;
        var f2 = e2.nextChunkId++,
          h2 = eo(p2),
          g2 = f2.toString(16) + ':I' + h2 + '\n',
          y2 = l.encode(g2);
        return (
          e2.completedImportChunks.push(y2),
          o2.set(i2, f2),
          t2[0] === E && '1' === r2 ? '$L' + f2.toString(16) : em(f2)
        );
      } catch (n3) {
        return (
          e2.pendingChunks++,
          (t2 = e2.nextChunkId++),
          (r2 = ek(e2, n3)),
          eE(e2, t2, r2),
          em(t2)
        );
      }
    }
    function ew(e2, t2) {
      return (
        (t2 = ey(e2, t2, null, false, e2.abortableTasks)), eC(e2, t2), t2.id
      );
    }
    var e_ = false;
    function eS(e2, t2, r2, n2, i2) {
      if (((t2.model = i2), i2 === E)) return '$';
      if (null === i2) return null;
      if ('object' == typeof i2) {
        switch (i2.$$typeof) {
          case E:
            if (void 0 !== (n2 = (r2 = e2.writtenObjects).get(i2))) {
              if (e_ !== i2) return -1 === n2 ? em((e2 = ew(e2, i2))) : em(n2);
              e_ = null;
            } else r2.set(i2, -1);
            return (function e3(t3, r3, n3, i3, o3, a2) {
              if (null != o3)
                throw Error(
                  'Refs cannot be used in Server Components, nor passed to Client Components.'
                );
              if ('function' == typeof n3)
                return n3.$$typeof === u
                  ? [E, n3, i3, a2]
                  : eh(t3, r3, i3, n3, a2);
              if ('string' == typeof n3) return [E, n3, i3, a2];
              if ('symbol' == typeof n3)
                return n3 === A && null === i3
                  ? ((i3 = r3.implicitSlot),
                    null === r3.keyPath && (r3.implicitSlot = true),
                    (t3 = eS(t3, r3, eA, '', a2.children)),
                    (r3.implicitSlot = i3),
                    t3)
                  : [E, n3, i3, a2];
              if (null != n3 && 'object' == typeof n3) {
                if (n3.$$typeof === u) return [E, n3, i3, a2];
                switch (n3.$$typeof) {
                  case I:
                    return e3(
                      t3,
                      r3,
                      (n3 = (0, n3._init)(n3._payload)),
                      i3,
                      o3,
                      a2
                    );
                  case T:
                    return eh(t3, r3, i3, n3.render, a2);
                  case R:
                    return e3(t3, r3, n3.type, i3, o3, a2);
                }
              }
              throw Error('Unsupported Server Component type: ' + Z(n3));
            })(e2, t2, i2.type, i2.key, i2.ref, i2.props);
          case I:
            return (
              (t2.thenableState = null),
              eS(e2, t2, eA, '', (i2 = (r2 = i2._init)(i2._payload)))
            );
        }
        if (i2.$$typeof === u) return eb(e2, r2, n2, i2);
        if (
          ((n2 = (r2 = e2.writtenObjects).get(i2)),
          'function' == typeof i2.then)
        ) {
          if (void 0 !== n2) {
            if (e_ !== i2) return '$@' + n2.toString(16);
            e_ = null;
          }
          return (
            (e2 = (function (e3, t3, r3) {
              var n3 = ey(
                e3,
                null,
                t3.keyPath,
                t3.implicitSlot,
                e3.abortableTasks
              );
              switch (r3.status) {
                case 'fulfilled':
                  return (n3.model = r3.value), eg(e3, n3), n3.id;
                case 'rejected':
                  return (t3 = ek(e3, r3.reason)), eE(e3, n3.id, t3), n3.id;
                default:
                  'string' != typeof r3.status &&
                    ((r3.status = 'pending'),
                    r3.then(
                      function (e4) {
                        'pending' === r3.status &&
                          ((r3.status = 'fulfilled'), (r3.value = e4));
                      },
                      function (e4) {
                        'pending' === r3.status &&
                          ((r3.status = 'rejected'), (r3.reason = e4));
                      }
                    ));
              }
              return (
                r3.then(
                  function (t4) {
                    (n3.model = t4), eg(e3, n3);
                  },
                  function (t4) {
                    (n3.status = 4),
                      (t4 = ek(e3, t4)),
                      eE(e3, n3.id, t4),
                      e3.abortableTasks.delete(n3),
                      null !== e3.destination && eP(e3, e3.destination);
                  }
                ),
                n3.id
              );
            })(e2, t2, i2)),
            r2.set(i2, e2),
            '$@' + e2.toString(16)
          );
        }
        if (void 0 !== n2) {
          if (e_ !== i2) return -1 === n2 ? em((e2 = ew(e2, i2))) : em(n2);
          e_ = null;
        } else r2.set(i2, -1);
        if (X(i2)) return i2;
        if (i2 instanceof Map) {
          for (t2 = 0, i2 = Array.from(i2); t2 < i2.length; t2++)
            'object' == typeof (r2 = i2[t2][0]) &&
              null !== r2 &&
              void 0 === (n2 = e2.writtenObjects).get(r2) &&
              n2.set(r2, -1);
          return '$Q' + ew(e2, i2).toString(16);
        }
        if (i2 instanceof Set) {
          for (t2 = 0, i2 = Array.from(i2); t2 < i2.length; t2++)
            'object' == typeof (r2 = i2[t2]) &&
              null !== r2 &&
              void 0 === (n2 = e2.writtenObjects).get(r2) &&
              n2.set(r2, -1);
          return '$W' + ew(e2, i2).toString(16);
        }
        if (
          (e2 =
            null === i2 || 'object' != typeof i2
              ? null
              : 'function' == typeof (e2 = (N && i2[N]) || i2['@@iterator'])
              ? e2
              : null)
        )
          return (e2 = Array.from(i2));
        if ((e2 = Y(i2)) !== ei && (null === e2 || null !== Y(e2)))
          throw Error(
            'Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported.'
          );
        return i2;
      }
      if ('string' == typeof i2)
        return 'Z' === i2[i2.length - 1] && r2[n2] instanceof Date
          ? '$D' + i2
          : 1024 <= i2.length
          ? ((e2.pendingChunks += 2),
            (t2 = e2.nextChunkId++),
            (r2 = (i2 = l.encode(i2)).byteLength),
            (r2 = t2.toString(16) + ':T' + r2.toString(16) + ','),
            (r2 = l.encode(r2)),
            e2.completedRegularChunks.push(r2, i2),
            em(t2))
          : (e2 = '$' === i2[0] ? '$' + i2 : i2);
      if ('boolean' == typeof i2) return i2;
      if ('number' == typeof i2)
        return Number.isFinite(i2)
          ? 0 === i2 && -1 / 0 == 1 / i2
            ? '$-0'
            : i2
          : 1 / 0 === i2
          ? '$Infinity'
          : -1 / 0 === i2
          ? '$-Infinity'
          : '$NaN';
      if (void 0 === i2) return '$undefined';
      if ('function' == typeof i2) {
        if (i2.$$typeof === u) return eb(e2, r2, n2, i2);
        if (i2.$$typeof === d)
          return (
            void 0 !== (r2 = (t2 = e2.writtenServerReferences).get(i2))
              ? (e2 = '$F' + r2.toString(16))
              : ((r2 = i2.$$bound),
                (e2 = ew(
                  e2,
                  (r2 = { id: i2.$$id, bound: r2 ? Promise.resolve(r2) : null })
                )),
                t2.set(i2, e2),
                (e2 = '$F' + e2.toString(16))),
            e2
          );
        if (/^on[A-Z]/.test(n2))
          throw Error(
            'Event handlers cannot be passed to Client Component props.' +
              et(r2, n2) +
              '\nIf you need interactivity, consider converting part of this to a Client Component.'
          );
        throw Error(
          'Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.' +
            et(r2, n2)
        );
      }
      if ('symbol' == typeof i2) {
        var o2 = (t2 = e2.writtenSymbols).get(i2);
        if (void 0 !== o2) return em(o2);
        if (Symbol.for((o2 = i2.description)) !== i2)
          throw Error(
            'Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(' +
              i2.description +
              ') cannot be found among global symbols.' +
              et(r2, n2)
          );
        return (
          e2.pendingChunks++,
          (r2 = e2.nextChunkId++),
          (n2 = ev(e2, r2, '$S' + o2)),
          e2.completedImportChunks.push(n2),
          t2.set(i2, r2),
          em(r2)
        );
      }
      if ('bigint' == typeof i2) return '$n' + i2.toString(10);
      throw Error(
        'Type ' +
          typeof i2 +
          ' is not supported in Client Component props.' +
          et(r2, n2)
      );
    }
    function ek(e2, t2) {
      var r2 = eu;
      eu = null;
      try {
        var n2 = e2.onError,
          i2 = k ? x.run(void 0, n2, t2) : n2(t2);
      } finally {
        eu = r2;
      }
      if (null != i2 && 'string' != typeof i2)
        throw Error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
            typeof i2 +
            '" instead'
        );
      return i2 || '';
    }
    function ex(e2, t2) {
      null !== e2.destination
        ? ((e2.status = 2), c(e2.destination, t2))
        : ((e2.status = 1), (e2.fatalError = t2));
    }
    function eE(e2, t2, r2) {
      (r2 = { digest: r2 }),
        (t2 = t2.toString(16) + ':E' + eo(r2) + '\n'),
        (t2 = l.encode(t2)),
        e2.completedErrorChunks.push(t2);
    }
    var eA = {};
    function eC(e2, t2) {
      if (0 === t2.status)
        try {
          e_ = t2.model;
          var r2 = eS(e2, t2, eA, '', t2.model);
          (e_ = r2), (t2.keyPath = null), (t2.implicitSlot = false);
          var n2 =
              'object' == typeof r2 && null !== r2 ? eo(r2, t2.toJSON) : eo(r2),
            i2 = t2.id.toString(16) + ':' + n2 + '\n',
            o2 = l.encode(i2);
          e2.completedRegularChunks.push(o2),
            e2.abortableTasks.delete(t2),
            (t2.status = 1);
        } catch (r3) {
          var a2 = r3 === U ? M() : r3;
          if (
            'object' == typeof a2 &&
            null !== a2 &&
            'function' == typeof a2.then
          ) {
            var s2 = t2.ping;
            a2.then(s2, s2), (t2.thenableState = K());
          } else {
            e2.abortableTasks.delete(t2), (t2.status = 4);
            var c2 = ek(e2, a2);
            eE(e2, t2.id, c2);
          }
        } finally {
        }
    }
    function eT(e2) {
      var t2 = es.current;
      es.current = B;
      var r2 = eu;
      D = eu = e2;
      try {
        var n2 = e2.pingedTasks;
        e2.pingedTasks = [];
        for (var i2 = 0; i2 < n2.length; i2++) eC(e2, n2[i2]);
        null !== e2.destination && eP(e2, e2.destination);
      } catch (t3) {
        ek(e2, t3), ex(e2, t3);
      } finally {
        (es.current = t2), (D = null), (eu = r2);
      }
    }
    function eP(e2, t2) {
      (o = new Uint8Array(2048)), (a = 0);
      try {
        for (var r2 = e2.completedImportChunks, n2 = 0; n2 < r2.length; n2++)
          e2.pendingChunks--, s(t2, r2[n2]);
        r2.splice(0, n2);
        var i2 = e2.completedHintChunks;
        for (n2 = 0; n2 < i2.length; n2++) s(t2, i2[n2]);
        i2.splice(0, n2);
        var l2 = e2.completedRegularChunks;
        for (n2 = 0; n2 < l2.length; n2++) e2.pendingChunks--, s(t2, l2[n2]);
        l2.splice(0, n2);
        var c2 = e2.completedErrorChunks;
        for (n2 = 0; n2 < c2.length; n2++) e2.pendingChunks--, s(t2, c2[n2]);
        c2.splice(0, n2);
      } finally {
        (e2.flushScheduled = false),
          o &&
            0 < a &&
            (t2.enqueue(new Uint8Array(o.buffer, 0, a)), (o = null), (a = 0));
      }
      0 === e2.pendingChunks && t2.close();
    }
    function eO(e2, t2) {
      try {
        var r2 = e2.abortableTasks;
        if (0 < r2.size) {
          e2.pendingChunks++;
          var n2 = e2.nextChunkId++,
            i2 =
              void 0 === t2
                ? Error(
                    'The render was aborted by the server without a reason.'
                  )
                : t2,
            o2 = ek(e2, i2);
          eE(e2, n2, o2, i2),
            r2.forEach(function (t3) {
              t3.status = 3;
              var r3 = em(n2);
              (t3 = ev(e2, t3.id, r3)), e2.completedErrorChunks.push(t3);
            }),
            r2.clear();
        }
        null !== e2.destination && eP(e2, e2.destination);
      } catch (t3) {
        ek(e2, t3), ex(e2, t3);
      }
    }
    function eR(e2, t2) {
      var r2 = '',
        n2 = e2[t2];
      if (n2) r2 = n2.name;
      else {
        var i2 = t2.lastIndexOf('#');
        if (
          (-1 !== i2 && ((r2 = t2.slice(i2 + 1)), (n2 = e2[t2.slice(0, i2)])),
          !n2)
        )
          throw Error(
            'Could not find the module "' +
              t2 +
              '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.'
          );
      }
      return [n2.id, n2.chunks, r2];
    }
    var eI = /* @__PURE__ */ new Map();
    function e$(e2) {
      var t2 = globalThis.__next_require__(e2);
      return 'function' != typeof t2.then || 'fulfilled' === t2.status
        ? null
        : (t2.then(
            function (e3) {
              (t2.status = 'fulfilled'), (t2.value = e3);
            },
            function (e3) {
              (t2.status = 'rejected'), (t2.reason = e3);
            }
          ),
          t2);
    }
    function eN() {}
    function eU(e2) {
      for (var t2 = e2[1], n2 = [], i2 = 0; i2 < t2.length; ) {
        var o2 = t2[i2++];
        t2[i2++];
        var a2 = eI.get(o2);
        if (void 0 === a2) {
          (a2 = r.e(o2)), n2.push(a2);
          var s2 = eI.set.bind(eI, o2, null);
          a2.then(s2, eN), eI.set(o2, a2);
        } else null !== a2 && n2.push(a2);
      }
      return 4 === e2.length
        ? 0 === n2.length
          ? e$(e2[0])
          : Promise.all(n2).then(function () {
              return e$(e2[0]);
            })
        : 0 < n2.length
        ? Promise.all(n2)
        : null;
    }
    function ej(e2) {
      var t2 = globalThis.__next_require__(e2[0]);
      if (4 === e2.length && 'function' == typeof t2.then) {
        if ('fulfilled' === t2.status) t2 = t2.value;
        else throw t2.reason;
      }
      return '*' === e2[2]
        ? t2
        : '' === e2[2]
        ? t2.__esModule
          ? t2.default
          : t2
        : t2[e2[2]];
    }
    function eL(e2, t2, r2, n2) {
      (this.status = e2),
        (this.value = t2),
        (this.reason = r2),
        (this._response = n2);
    }
    function eM(e2, t2) {
      for (var r2 = 0; r2 < e2.length; r2++) (0, e2[r2])(t2);
    }
    function eD(e2, t2) {
      if ('pending' === e2.status || 'blocked' === e2.status) {
        var r2 = e2.reason;
        (e2.status = 'rejected'), (e2.reason = t2), null !== r2 && eM(r2, t2);
      }
    }
    (eL.prototype = Object.create(Promise.prototype)),
      (eL.prototype.then = function (e2, t2) {
        switch (('resolved_model' === this.status && eK(this), this.status)) {
          case 'fulfilled':
            e2(this.value);
            break;
          case 'pending':
          case 'blocked':
            e2 &&
              (null === this.value && (this.value = []), this.value.push(e2)),
              t2 &&
                (null === this.reason && (this.reason = []),
                this.reason.push(t2));
            break;
          default:
            t2(this.reason);
        }
      });
    var eH = null,
      eW = null;
    function eK(e2) {
      var t2 = eH,
        r2 = eW;
      (eH = e2), (eW = null);
      try {
        var n2 = JSON.parse(e2.value, e2._response._fromJSON);
        null !== eW && 0 < eW.deps
          ? ((eW.value = n2),
            (e2.status = 'blocked'),
            (e2.value = null),
            (e2.reason = null))
          : ((e2.status = 'fulfilled'), (e2.value = n2));
      } catch (t3) {
        (e2.status = 'rejected'), (e2.reason = t3);
      } finally {
        (eH = t2), (eW = r2);
      }
    }
    function eB(e2, t2) {
      var r2 = e2._chunks,
        n2 = r2.get(t2);
      return (
        n2 ||
          ((n2 =
            null != (n2 = e2._formData.get(e2._prefix + t2))
              ? new eL('resolved_model', n2, null, e2)
              : new eL('pending', null, null, e2)),
          r2.set(t2, n2)),
        n2
      );
    }
    function eV(e2, t2, r2) {
      if (eW) {
        var n2 = eW;
        n2.deps++;
      } else n2 = eW = { deps: 1, value: null };
      return function (i2) {
        (t2[r2] = i2),
          n2.deps--,
          0 === n2.deps &&
            'blocked' === e2.status &&
            ((i2 = e2.value),
            (e2.status = 'fulfilled'),
            (e2.value = n2.value),
            null !== i2 && eM(i2, n2.value));
      };
    }
    function eJ(e2) {
      return function (t2) {
        return eD(e2, t2);
      };
    }
    function eq(e2, t2) {
      if (
        ('resolved_model' === (e2 = eB(e2, t2)).status && eK(e2),
        'fulfilled' !== e2.status)
      )
        throw e2.reason;
      return e2.value;
    }
    function eF(e2, t2) {
      var r2 =
          2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : new FormData(),
        n2 = {
          _bundlerConfig: e2,
          _prefix: t2,
          _formData: r2,
          _chunks: /* @__PURE__ */ new Map(),
          _fromJSON: function (e3, t3) {
            return 'string' == typeof t3
              ? (function (e4, t4, r3, n3) {
                  if ('$' === n3[0])
                    switch (n3[1]) {
                      case '$':
                        return n3.slice(1);
                      case '@':
                        return eB(e4, (t4 = parseInt(n3.slice(2), 16)));
                      case 'S':
                        return Symbol.for(n3.slice(2));
                      case 'F':
                        return (
                          (n3 = eq(e4, (n3 = parseInt(n3.slice(2), 16)))),
                          (function (e5, t5, r4, n4, i3, o3) {
                            var a2 = eR(e5._bundlerConfig, t5);
                            if (((e5 = eU(a2)), r4))
                              r4 = Promise.all([r4, e5]).then(function (e6) {
                                e6 = e6[0];
                                var t6 = ej(a2);
                                return t6.bind.apply(t6, [null].concat(e6));
                              });
                            else {
                              if (!e5) return ej(a2);
                              r4 = Promise.resolve(e5).then(function () {
                                return ej(a2);
                              });
                            }
                            return r4.then(eV(n4, i3, o3), eJ(n4)), null;
                          })(e4, n3.id, n3.bound, eH, t4, r3)
                        );
                      case 'Q':
                        return new Map(
                          (e4 = eq(e4, (t4 = parseInt(n3.slice(2), 16))))
                        );
                      case 'W':
                        return new Set(
                          (e4 = eq(e4, (t4 = parseInt(n3.slice(2), 16))))
                        );
                      case 'K':
                        t4 = n3.slice(2);
                        var i2 = e4._prefix + t4 + '_',
                          o2 = new FormData();
                        return (
                          e4._formData.forEach(function (e5, t5) {
                            t5.startsWith(i2) &&
                              o2.append(t5.slice(i2.length), e5);
                          }),
                          o2
                        );
                      case 'I':
                        return 1 / 0;
                      case '-':
                        return '$-0' === n3 ? -0 : -1 / 0;
                      case 'N':
                        return NaN;
                      case 'u':
                        return;
                      case 'D':
                        return new Date(Date.parse(n3.slice(2)));
                      case 'n':
                        return BigInt(n3.slice(2));
                      default:
                        switch (
                          ('resolved_model' ===
                            (e4 = eB(e4, (n3 = parseInt(n3.slice(1), 16))))
                              .status && eK(e4),
                          e4.status)
                        ) {
                          case 'fulfilled':
                            return e4.value;
                          case 'pending':
                          case 'blocked':
                            return (
                              (n3 = eH), e4.then(eV(n3, t4, r3), eJ(n3)), null
                            );
                          default:
                            throw e4.reason;
                        }
                    }
                  return n3;
                })(n2, this, e3, t3)
              : t3;
          }
        };
      return n2;
    }
    function ez(e2) {
      !(function (e3, t2) {
        e3._chunks.forEach(function (e4) {
          'pending' === e4.status && eD(e4, t2);
        });
      })(e2, Error('Connection closed.'));
    }
    function eG(e2, t2, r2) {
      var n2 = eR(e2, t2);
      return (
        (e2 = eU(n2)),
        r2
          ? Promise.all([r2, e2]).then(function (e3) {
              e3 = e3[0];
              var t3 = ej(n2);
              return t3.bind.apply(t3, [null].concat(e3));
            })
          : e2
          ? Promise.resolve(e2).then(function () {
              return ej(n2);
            })
          : Promise.resolve(ej(n2))
      );
    }
    function eX(e2, t2, r2) {
      if (
        (ez((e2 = eF(t2, r2, e2))),
        (e2 = eB(e2, 0)).then(function () {}),
        'fulfilled' !== e2.status)
      )
        throw e2.reason;
      return e2.value;
    }
    (t.createClientModuleProxy = function (e2) {
      return new Proxy((e2 = p({}, e2, false)), b);
    }),
      (t.decodeAction = function (e2, t2) {
        var r2 = new FormData(),
          n2 = null;
        return (
          e2.forEach(function (i2, o2) {
            o2.startsWith('$ACTION_')
              ? o2.startsWith('$ACTION_REF_')
                ? ((i2 = eX(e2, t2, (i2 = '$ACTION_' + o2.slice(12) + ':'))),
                  (n2 = eG(t2, i2.id, i2.bound)))
                : o2.startsWith('$ACTION_ID_') &&
                  (n2 = eG(t2, (i2 = o2.slice(11)), null))
              : r2.append(o2, i2);
          }),
          null === n2
            ? null
            : n2.then(function (e3) {
                return e3.bind(null, r2);
              })
        );
      }),
      (t.decodeFormState = function (e2, t2, r2) {
        var n2 = t2.get('$ACTION_KEY');
        if ('string' != typeof n2) return Promise.resolve(null);
        var i2 = null;
        if (
          (t2.forEach(function (e3, n3) {
            n3.startsWith('$ACTION_REF_') &&
              (i2 = eX(t2, r2, '$ACTION_' + n3.slice(12) + ':'));
          }),
          null === i2)
        )
          return Promise.resolve(null);
        var o2 = i2.id;
        return Promise.resolve(i2.bound).then(function (t3) {
          return null === t3 ? null : [e2, n2, o2, t3.length - 1];
        });
      }),
      (t.decodeReply = function (e2, t2) {
        if ('string' == typeof e2) {
          var r2 = new FormData();
          r2.append('0', e2), (e2 = r2);
        }
        return (t2 = eB((e2 = eF(t2, '', e2)), 0)), ez(e2), t2;
      }),
      (t.renderToReadableStream = function (e2, t2, r2) {
        var n2 = (function (e3, t3, r3, n3, i3) {
          if (null !== ea.current && ea.current !== G)
            throw Error(
              'Currently React only supports one RSC renderer at a time.'
            );
          (S.current = w), (ea.current = G);
          var o3 = /* @__PURE__ */ new Set(),
            a2 = [],
            s2 = /* @__PURE__ */ new Set();
          return (
            (e3 = ey(
              (t3 = {
                status: 0,
                flushScheduled: false,
                fatalError: null,
                destination: null,
                bundlerConfig: t3,
                cache: /* @__PURE__ */ new Map(),
                nextChunkId: 0,
                pendingChunks: 0,
                hints: s2,
                abortableTasks: o3,
                pingedTasks: a2,
                completedImportChunks: [],
                completedHintChunks: [],
                completedRegularChunks: [],
                completedErrorChunks: [],
                writtenSymbols: /* @__PURE__ */ new Map(),
                writtenClientReferences: /* @__PURE__ */ new Map(),
                writtenServerReferences: /* @__PURE__ */ new Map(),
                writtenObjects: /* @__PURE__ */ new WeakMap(),
                identifierPrefix: n3 || '',
                identifierCount: 1,
                taintCleanupQueue: [],
                onError: void 0 === r3 ? el : r3,
                onPostpone: void 0 === i3 ? ec : i3
              }),
              e3,
              null,
              false,
              o3
            )),
            a2.push(e3),
            t3
          );
        })(
          e2,
          t2,
          r2 ? r2.onError : void 0,
          r2 ? r2.identifierPrefix : void 0,
          r2 ? r2.onPostpone : void 0
        );
        if (r2 && r2.signal) {
          var i2 = r2.signal;
          if (i2.aborted) eO(n2, i2.reason);
          else {
            var o2 = function () {
              eO(n2, i2.reason), i2.removeEventListener('abort', o2);
            };
            i2.addEventListener('abort', o2);
          }
        }
        return new ReadableStream(
          {
            type: 'bytes',
            start: function () {
              (n2.flushScheduled = null !== n2.destination),
                k
                  ? setTimeout(function () {
                      return x.run(n2, eT, n2);
                    }, 0)
                  : setTimeout(function () {
                      return eT(n2);
                    }, 0);
            },
            pull: function (e3) {
              if (1 === n2.status) (n2.status = 2), c(e3, n2.fatalError);
              else if (2 !== n2.status && null === n2.destination) {
                n2.destination = e3;
                try {
                  eP(n2, e3);
                } catch (e4) {
                  ek(n2, e4), ex(n2, e4);
                }
              }
            },
            cancel: function (e3) {
              (n2.destination = null), eO(n2, e3);
            }
          },
          { highWaterMark: 0 }
        );
      });
  };
  __namedExportsObject['__chunk_50391'] = (e, t, r) => {
    'use strict';
    e.exports = r(28789);
  };
  __namedExportsObject['__chunk_28789'] = (e, t) => {
    'use strict';
    var r = {
      usingClientEntryPoint: false,
      Events: null,
      Dispatcher: { current: null }
    };
    function n(e2, t2) {
      return 'font' === e2
        ? ''
        : 'string' == typeof t2
        ? 'use-credentials' === t2
          ? t2
          : ''
        : void 0;
    }
    var i = r.Dispatcher;
    (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r),
      (t.preconnect = function (e2, t2) {
        var r2 = i.current;
        r2 &&
          'string' == typeof e2 &&
          ((t2 = t2
            ? 'string' == typeof (t2 = t2.crossOrigin)
              ? 'use-credentials' === t2
                ? t2
                : ''
              : void 0
            : null),
          r2.preconnect(e2, t2));
      }),
      (t.prefetchDNS = function (e2) {
        var t2 = i.current;
        t2 && 'string' == typeof e2 && t2.prefetchDNS(e2);
      }),
      (t.preinit = function (e2, t2) {
        var r2 = i.current;
        if (r2 && 'string' == typeof e2 && t2 && 'string' == typeof t2.as) {
          var o = t2.as,
            a = n(o, t2.crossOrigin),
            s = 'string' == typeof t2.integrity ? t2.integrity : void 0,
            l = 'string' == typeof t2.fetchPriority ? t2.fetchPriority : void 0;
          'style' === o
            ? r2.preinitStyle(
                e2,
                'string' == typeof t2.precedence ? t2.precedence : void 0,
                { crossOrigin: a, integrity: s, fetchPriority: l }
              )
            : 'script' === o &&
              r2.preinitScript(e2, {
                crossOrigin: a,
                integrity: s,
                fetchPriority: l,
                nonce: 'string' == typeof t2.nonce ? t2.nonce : void 0
              });
        }
      }),
      (t.preinitModule = function (e2, t2) {
        var r2 = i.current;
        if (r2 && 'string' == typeof e2) {
          if ('object' == typeof t2 && null !== t2) {
            if (null == t2.as || 'script' === t2.as) {
              var o = n(t2.as, t2.crossOrigin);
              r2.preinitModuleScript(e2, {
                crossOrigin: o,
                integrity:
                  'string' == typeof t2.integrity ? t2.integrity : void 0,
                nonce: 'string' == typeof t2.nonce ? t2.nonce : void 0
              });
            }
          } else null == t2 && r2.preinitModuleScript(e2);
        }
      }),
      (t.preload = function (e2, t2) {
        var r2 = i.current;
        if (
          r2 &&
          'string' == typeof e2 &&
          'object' == typeof t2 &&
          null !== t2 &&
          'string' == typeof t2.as
        ) {
          var o = t2.as,
            a = n(o, t2.crossOrigin);
          r2.preload(e2, o, {
            crossOrigin: a,
            integrity: 'string' == typeof t2.integrity ? t2.integrity : void 0,
            nonce: 'string' == typeof t2.nonce ? t2.nonce : void 0,
            type: 'string' == typeof t2.type ? t2.type : void 0,
            fetchPriority:
              'string' == typeof t2.fetchPriority ? t2.fetchPriority : void 0,
            referrerPolicy:
              'string' == typeof t2.referrerPolicy ? t2.referrerPolicy : void 0,
            imageSrcSet:
              'string' == typeof t2.imageSrcSet ? t2.imageSrcSet : void 0,
            imageSizes:
              'string' == typeof t2.imageSizes ? t2.imageSizes : void 0
          });
        }
      }),
      (t.preloadModule = function (e2, t2) {
        var r2 = i.current;
        if (r2 && 'string' == typeof e2) {
          if (t2) {
            var o = n(t2.as, t2.crossOrigin);
            r2.preloadModule(e2, {
              as:
                'string' == typeof t2.as && 'script' !== t2.as ? t2.as : void 0,
              crossOrigin: o,
              integrity: 'string' == typeof t2.integrity ? t2.integrity : void 0
            });
          } else r2.preloadModule(e2);
        }
      });
  };
  __namedExportsObject['__chunk_90552'] = (e) => {
    !(function () {
      'use strict';
      var t = {
          815: function (e2) {
            e2.exports = function (e3, r2, n2, i2) {
              (r2 = r2 || '&'), (n2 = n2 || '=');
              var o = {};
              if ('string' != typeof e3 || 0 === e3.length) return o;
              var a = /\+/g;
              e3 = e3.split(r2);
              var s = 1e3;
              i2 && 'number' == typeof i2.maxKeys && (s = i2.maxKeys);
              var l = e3.length;
              s > 0 && l > s && (l = s);
              for (var c = 0; c < l; ++c) {
                var u,
                  d,
                  p,
                  f,
                  h = e3[c].replace(a, '%20'),
                  g = h.indexOf(n2);
                (g >= 0
                  ? ((u = h.substr(0, g)), (d = h.substr(g + 1)))
                  : ((u = h), (d = '')),
                (p = decodeURIComponent(u)),
                (f = decodeURIComponent(d)),
                Object.prototype.hasOwnProperty.call(o, p))
                  ? t2(o[p])
                    ? o[p].push(f)
                    : (o[p] = [o[p], f])
                  : (o[p] = f);
              }
              return o;
            };
            var t2 =
              Array.isArray ||
              function (e3) {
                return '[object Array]' === Object.prototype.toString.call(e3);
              };
          },
          577: function (e2) {
            var t2 = function (e3) {
              switch (typeof e3) {
                case 'string':
                  return e3;
                case 'boolean':
                  return e3 ? 'true' : 'false';
                case 'number':
                  return isFinite(e3) ? e3 : '';
                default:
                  return '';
              }
            };
            e2.exports = function (e3, o, a, s) {
              return ((o = o || '&'),
              (a = a || '='),
              null === e3 && (e3 = void 0),
              'object' == typeof e3)
                ? n2(i2(e3), function (i3) {
                    var s2 = encodeURIComponent(t2(i3)) + a;
                    return r2(e3[i3])
                      ? n2(e3[i3], function (e4) {
                          return s2 + encodeURIComponent(t2(e4));
                        }).join(o)
                      : s2 + encodeURIComponent(t2(e3[i3]));
                  }).join(o)
                : s
                ? encodeURIComponent(t2(s)) + a + encodeURIComponent(t2(e3))
                : '';
            };
            var r2 =
              Array.isArray ||
              function (e3) {
                return '[object Array]' === Object.prototype.toString.call(e3);
              };
            function n2(e3, t3) {
              if (e3.map) return e3.map(t3);
              for (var r3 = [], n3 = 0; n3 < e3.length; n3++)
                r3.push(t3(e3[n3], n3));
              return r3;
            }
            var i2 =
              Object.keys ||
              function (e3) {
                var t3 = [];
                for (var r3 in e3)
                  Object.prototype.hasOwnProperty.call(e3, r3) && t3.push(r3);
                return t3;
              };
          }
        },
        r = {};
      function n(e2) {
        var i2 = r[e2];
        if (void 0 !== i2) return i2.exports;
        var o = (r[e2] = { exports: {} }),
          a = true;
        try {
          t[e2](o, o.exports, n), (a = false);
        } finally {
          a && delete r[e2];
        }
        return o.exports;
      }
      n.ab = '//';
      var i = {};
      (i.decode = i.parse = n(815)),
        (i.encode = i.stringify = n(577)),
        (e.exports = i);
    })();
  };
  __namedExportsObject['__chunk_17649'] = (e, t) => {
    'use strict';
    function r(e2, t2) {
      void 0 === t2 && (t2 = {});
      for (
        var r2 = (function (e3) {
            for (var t3 = [], r3 = 0; r3 < e3.length; ) {
              var n2 = e3[r3];
              if ('*' === n2 || '+' === n2 || '?' === n2) {
                t3.push({ type: 'MODIFIER', index: r3, value: e3[r3++] });
                continue;
              }
              if ('\\' === n2) {
                t3.push({ type: 'ESCAPED_CHAR', index: r3++, value: e3[r3++] });
                continue;
              }
              if ('{' === n2) {
                t3.push({ type: 'OPEN', index: r3, value: e3[r3++] });
                continue;
              }
              if ('}' === n2) {
                t3.push({ type: 'CLOSE', index: r3, value: e3[r3++] });
                continue;
              }
              if (':' === n2) {
                for (var i3 = '', o2 = r3 + 1; o2 < e3.length; ) {
                  var a2 = e3.charCodeAt(o2);
                  if (
                    (a2 >= 48 && a2 <= 57) ||
                    (a2 >= 65 && a2 <= 90) ||
                    (a2 >= 97 && a2 <= 122) ||
                    95 === a2
                  ) {
                    i3 += e3[o2++];
                    continue;
                  }
                  break;
                }
                if (!i3) throw TypeError('Missing parameter name at ' + r3);
                t3.push({ type: 'NAME', index: r3, value: i3 }), (r3 = o2);
                continue;
              }
              if ('(' === n2) {
                var s2 = 1,
                  l2 = '',
                  o2 = r3 + 1;
                if ('?' === e3[o2])
                  throw TypeError('Pattern cannot start with "?" at ' + o2);
                for (; o2 < e3.length; ) {
                  if ('\\' === e3[o2]) {
                    l2 += e3[o2++] + e3[o2++];
                    continue;
                  }
                  if (')' === e3[o2]) {
                    if (0 == --s2) {
                      o2++;
                      break;
                    }
                  } else if ('(' === e3[o2] && (s2++, '?' !== e3[o2 + 1]))
                    throw TypeError(
                      'Capturing groups are not allowed at ' + o2
                    );
                  l2 += e3[o2++];
                }
                if (s2) throw TypeError('Unbalanced pattern at ' + r3);
                if (!l2) throw TypeError('Missing pattern at ' + r3);
                t3.push({ type: 'PATTERN', index: r3, value: l2 }), (r3 = o2);
                continue;
              }
              t3.push({ type: 'CHAR', index: r3, value: e3[r3++] });
            }
            return t3.push({ type: 'END', index: r3, value: '' }), t3;
          })(e2),
          i2 = t2.prefixes,
          o = void 0 === i2 ? './' : i2,
          a = '[^' + n(t2.delimiter || '/#?') + ']+?',
          s = [],
          l = 0,
          c = 0,
          u = '',
          d = function (e3) {
            if (c < r2.length && r2[c].type === e3) return r2[c++].value;
          },
          p = function (e3) {
            var t3 = d(e3);
            if (void 0 !== t3) return t3;
            var n2 = r2[c];
            throw TypeError(
              'Unexpected ' + n2.type + ' at ' + n2.index + ', expected ' + e3
            );
          },
          f = function () {
            for (var e3, t3 = ''; (e3 = d('CHAR') || d('ESCAPED_CHAR')); )
              t3 += e3;
            return t3;
          };
        c < r2.length;

      ) {
        var h = d('CHAR'),
          g = d('NAME'),
          y = d('PATTERN');
        if (g || y) {
          var m = h || '';
          -1 === o.indexOf(m) && ((u += m), (m = '')),
            u && (s.push(u), (u = '')),
            s.push({
              name: g || l++,
              prefix: m,
              suffix: '',
              pattern: y || a,
              modifier: d('MODIFIER') || ''
            });
          continue;
        }
        var v = h || d('ESCAPED_CHAR');
        if (v) {
          u += v;
          continue;
        }
        if ((u && (s.push(u), (u = '')), d('OPEN'))) {
          var m = f(),
            b = d('NAME') || '',
            w = d('PATTERN') || '',
            _ = f();
          p('CLOSE'),
            s.push({
              name: b || (w ? l++ : ''),
              pattern: b && !w ? a : w,
              prefix: m,
              suffix: _,
              modifier: d('MODIFIER') || ''
            });
          continue;
        }
        p('END');
      }
      return s;
    }
    function n(e2) {
      return e2.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
    }
    function i(e2) {
      return e2 && e2.sensitive ? '' : 'i';
    }
    (t.MY = function (e2, t2) {
      var n2, o, a, s, l, c, u, d;
      return (
        (n2 = r(e2, t2)),
        void 0 === (o = t2) && (o = {}),
        (a = i(o)),
        (l =
          void 0 === (s = o.encode)
            ? function (e3) {
                return e3;
              }
            : s),
        (u = void 0 === (c = o.validate) || c),
        (d = n2.map(function (e3) {
          if ('object' == typeof e3)
            return RegExp('^(?:' + e3.pattern + ')$', a);
        })),
        function (e3) {
          for (var t3 = '', r2 = 0; r2 < n2.length; r2++) {
            var i2 = n2[r2];
            if ('string' == typeof i2) {
              t3 += i2;
              continue;
            }
            var o2 = e3 ? e3[i2.name] : void 0,
              a2 = '?' === i2.modifier || '*' === i2.modifier,
              s2 = '*' === i2.modifier || '+' === i2.modifier;
            if (Array.isArray(o2)) {
              if (!s2)
                throw TypeError(
                  'Expected "' + i2.name + '" to not repeat, but got an array'
                );
              if (0 === o2.length) {
                if (a2) continue;
                throw TypeError('Expected "' + i2.name + '" to not be empty');
              }
              for (var c2 = 0; c2 < o2.length; c2++) {
                var p = l(o2[c2], i2);
                if (u && !d[r2].test(p))
                  throw TypeError(
                    'Expected all "' +
                      i2.name +
                      '" to match "' +
                      i2.pattern +
                      '", but got "' +
                      p +
                      '"'
                  );
                t3 += i2.prefix + p + i2.suffix;
              }
              continue;
            }
            if ('string' == typeof o2 || 'number' == typeof o2) {
              var p = l(String(o2), i2);
              if (u && !d[r2].test(p))
                throw TypeError(
                  'Expected "' +
                    i2.name +
                    '" to match "' +
                    i2.pattern +
                    '", but got "' +
                    p +
                    '"'
                );
              t3 += i2.prefix + p + i2.suffix;
              continue;
            }
            if (!a2) {
              var f = s2 ? 'an array' : 'a string';
              throw TypeError('Expected "' + i2.name + '" to be ' + f);
            }
          }
          return t3;
        }
      );
    }),
      (t.WS = function (e2, t2, r2) {
        void 0 === r2 && (r2 = {});
        var n2 = r2.decode,
          i2 =
            void 0 === n2
              ? function (e3) {
                  return e3;
                }
              : n2;
        return function (r3) {
          var n3 = e2.exec(r3);
          if (!n3) return false;
          for (
            var o = n3[0],
              a = n3.index,
              s = /* @__PURE__ */ Object.create(null),
              l = 1;
            l < n3.length;
            l++
          )
            !(function (e3) {
              if (void 0 !== n3[e3]) {
                var r4 = t2[e3 - 1];
                '*' === r4.modifier || '+' === r4.modifier
                  ? (s[r4.name] = n3[e3]
                      .split(r4.prefix + r4.suffix)
                      .map(function (e4) {
                        return i2(e4, r4);
                      }))
                  : (s[r4.name] = i2(n3[e3], r4));
              }
            })(l);
          return { path: o, index: a, params: s };
        };
      }),
      (t.Bo = function e2(t2, o, a) {
        return t2 instanceof RegExp
          ? (function (e3, t3) {
              if (!t3) return e3;
              var r2 = e3.source.match(/\((?!\?)/g);
              if (r2)
                for (var n2 = 0; n2 < r2.length; n2++)
                  t3.push({
                    name: n2,
                    prefix: '',
                    suffix: '',
                    modifier: '',
                    pattern: ''
                  });
              return e3;
            })(t2, o)
          : Array.isArray(t2)
          ? RegExp(
              '(?:' +
                t2
                  .map(function (t3) {
                    return e2(t3, o, a).source;
                  })
                  .join('|') +
                ')',
              i(a)
            )
          : (function (e3, t3, r2) {
              void 0 === r2 && (r2 = {});
              for (
                var o2 = r2.strict,
                  a2 = void 0 !== o2 && o2,
                  s = r2.start,
                  l = r2.end,
                  c = r2.encode,
                  u =
                    void 0 === c
                      ? function (e4) {
                          return e4;
                        }
                      : c,
                  d = '[' + n(r2.endsWith || '') + ']|$',
                  p = '[' + n(r2.delimiter || '/#?') + ']',
                  f = void 0 === s || s ? '^' : '',
                  h = 0;
                h < e3.length;
                h++
              ) {
                var g = e3[h];
                if ('string' == typeof g) f += n(u(g));
                else {
                  var y = n(u(g.prefix)),
                    m = n(u(g.suffix));
                  if (g.pattern) {
                    if ((t3 && t3.push(g), y || m)) {
                      if ('+' === g.modifier || '*' === g.modifier) {
                        var v = '*' === g.modifier ? '?' : '';
                        f +=
                          '(?:' +
                          y +
                          '((?:' +
                          g.pattern +
                          ')(?:' +
                          m +
                          y +
                          '(?:' +
                          g.pattern +
                          '))*)' +
                          m +
                          ')' +
                          v;
                      } else
                        f +=
                          '(?:' +
                          y +
                          '(' +
                          g.pattern +
                          ')' +
                          m +
                          ')' +
                          g.modifier;
                    } else f += '(' + g.pattern + ')' + g.modifier;
                  } else f += '(?:' + y + m + ')' + g.modifier;
                }
              }
              if (void 0 === l || l)
                a2 || (f += p + '?'),
                  (f += r2.endsWith ? '(?=' + d + ')' : '$');
              else {
                var b = e3[e3.length - 1],
                  w =
                    'string' == typeof b
                      ? p.indexOf(b[b.length - 1]) > -1
                      : void 0 === b;
                a2 || (f += '(?:' + p + '(?=' + d + '))?'),
                  w || (f += '(?=' + p + '|' + d + ')');
              }
              return new RegExp(f, i(r2));
            })(r(t2, a), o, a);
      });
  };
  __namedExportsObject['__chunk_92501'] = (e) => {
    !(function () {
      'use strict';
      var t = {
          114: function (e2) {
            function t2(e3) {
              if ('string' != typeof e3)
                throw TypeError(
                  'Path must be a string. Received ' + JSON.stringify(e3)
                );
            }
            function r2(e3, t3) {
              for (
                var r3, n3 = '', i2 = 0, o = -1, a = 0, s = 0;
                s <= e3.length;
                ++s
              ) {
                if (s < e3.length) r3 = e3.charCodeAt(s);
                else if (47 === r3) break;
                else r3 = 47;
                if (47 === r3) {
                  if (o === s - 1 || 1 === a);
                  else if (o !== s - 1 && 2 === a) {
                    if (
                      n3.length < 2 ||
                      2 !== i2 ||
                      46 !== n3.charCodeAt(n3.length - 1) ||
                      46 !== n3.charCodeAt(n3.length - 2)
                    ) {
                      if (n3.length > 2) {
                        var l = n3.lastIndexOf('/');
                        if (l !== n3.length - 1) {
                          -1 === l
                            ? ((n3 = ''), (i2 = 0))
                            : (i2 =
                                (n3 = n3.slice(0, l)).length -
                                1 -
                                n3.lastIndexOf('/')),
                            (o = s),
                            (a = 0);
                          continue;
                        }
                      } else if (2 === n3.length || 1 === n3.length) {
                        (n3 = ''), (i2 = 0), (o = s), (a = 0);
                        continue;
                      }
                    }
                    t3 &&
                      (n3.length > 0 ? (n3 += '/..') : (n3 = '..'), (i2 = 2));
                  } else
                    n3.length > 0
                      ? (n3 += '/' + e3.slice(o + 1, s))
                      : (n3 = e3.slice(o + 1, s)),
                      (i2 = s - o - 1);
                  (o = s), (a = 0);
                } else 46 === r3 && -1 !== a ? ++a : (a = -1);
              }
              return n3;
            }
            var n2 = {
              resolve: function () {
                for (
                  var e3, n3, i2 = '', o = false, a = arguments.length - 1;
                  a >= -1 && !o;
                  a--
                )
                  a >= 0
                    ? (n3 = arguments[a])
                    : (void 0 === e3 && (e3 = ''), (n3 = e3)),
                    t2(n3),
                    0 !== n3.length &&
                      ((i2 = n3 + '/' + i2), (o = 47 === n3.charCodeAt(0)));
                return ((i2 = r2(i2, !o)), o)
                  ? i2.length > 0
                    ? '/' + i2
                    : '/'
                  : i2.length > 0
                  ? i2
                  : '.';
              },
              normalize: function (e3) {
                if ((t2(e3), 0 === e3.length)) return '.';
                var n3 = 47 === e3.charCodeAt(0),
                  i2 = 47 === e3.charCodeAt(e3.length - 1);
                return (0 !== (e3 = r2(e3, !n3)).length || n3 || (e3 = '.'),
                e3.length > 0 && i2 && (e3 += '/'),
                n3)
                  ? '/' + e3
                  : e3;
              },
              isAbsolute: function (e3) {
                return t2(e3), e3.length > 0 && 47 === e3.charCodeAt(0);
              },
              join: function () {
                if (0 == arguments.length) return '.';
                for (var e3, r3 = 0; r3 < arguments.length; ++r3) {
                  var i2 = arguments[r3];
                  t2(i2),
                    i2.length > 0 &&
                      (void 0 === e3 ? (e3 = i2) : (e3 += '/' + i2));
                }
                return void 0 === e3 ? '.' : n2.normalize(e3);
              },
              relative: function (e3, r3) {
                if (
                  (t2(e3),
                  t2(r3),
                  e3 === r3 || (e3 = n2.resolve(e3)) === (r3 = n2.resolve(r3)))
                )
                  return '';
                for (
                  var i2 = 1;
                  i2 < e3.length && 47 === e3.charCodeAt(i2);
                  ++i2
                );
                for (
                  var o = e3.length, a = o - i2, s = 1;
                  s < r3.length && 47 === r3.charCodeAt(s);
                  ++s
                );
                for (
                  var l = r3.length - s, c = a < l ? a : l, u = -1, d = 0;
                  d <= c;
                  ++d
                ) {
                  if (d === c) {
                    if (l > c) {
                      if (47 === r3.charCodeAt(s + d))
                        return r3.slice(s + d + 1);
                      if (0 === d) return r3.slice(s + d);
                    } else
                      a > c &&
                        (47 === e3.charCodeAt(i2 + d)
                          ? (u = d)
                          : 0 === d && (u = 0));
                    break;
                  }
                  var p = e3.charCodeAt(i2 + d);
                  if (p !== r3.charCodeAt(s + d)) break;
                  47 === p && (u = d);
                }
                var f = '';
                for (d = i2 + u + 1; d <= o; ++d)
                  (d === o || 47 === e3.charCodeAt(d)) &&
                    (0 === f.length ? (f += '..') : (f += '/..'));
                return f.length > 0
                  ? f + r3.slice(s + u)
                  : ((s += u), 47 === r3.charCodeAt(s) && ++s, r3.slice(s));
              },
              _makeLong: function (e3) {
                return e3;
              },
              dirname: function (e3) {
                if ((t2(e3), 0 === e3.length)) return '.';
                for (
                  var r3 = e3.charCodeAt(0),
                    n3 = 47 === r3,
                    i2 = -1,
                    o = true,
                    a = e3.length - 1;
                  a >= 1;
                  --a
                )
                  if (47 === (r3 = e3.charCodeAt(a))) {
                    if (!o) {
                      i2 = a;
                      break;
                    }
                  } else o = false;
                return -1 === i2
                  ? n3
                    ? '/'
                    : '.'
                  : n3 && 1 === i2
                  ? '//'
                  : e3.slice(0, i2);
              },
              basename: function (e3, r3) {
                if (void 0 !== r3 && 'string' != typeof r3)
                  throw TypeError('"ext" argument must be a string');
                t2(e3);
                var n3,
                  i2 = 0,
                  o = -1,
                  a = true;
                if (void 0 !== r3 && r3.length > 0 && r3.length <= e3.length) {
                  if (r3.length === e3.length && r3 === e3) return '';
                  var s = r3.length - 1,
                    l = -1;
                  for (n3 = e3.length - 1; n3 >= 0; --n3) {
                    var c = e3.charCodeAt(n3);
                    if (47 === c) {
                      if (!a) {
                        i2 = n3 + 1;
                        break;
                      }
                    } else
                      -1 === l && ((a = false), (l = n3 + 1)),
                        s >= 0 &&
                          (c === r3.charCodeAt(s)
                            ? -1 == --s && (o = n3)
                            : ((s = -1), (o = l)));
                  }
                  return (
                    i2 === o ? (o = l) : -1 === o && (o = e3.length),
                    e3.slice(i2, o)
                  );
                }
                for (n3 = e3.length - 1; n3 >= 0; --n3)
                  if (47 === e3.charCodeAt(n3)) {
                    if (!a) {
                      i2 = n3 + 1;
                      break;
                    }
                  } else -1 === o && ((a = false), (o = n3 + 1));
                return -1 === o ? '' : e3.slice(i2, o);
              },
              extname: function (e3) {
                t2(e3);
                for (
                  var r3 = -1,
                    n3 = 0,
                    i2 = -1,
                    o = true,
                    a = 0,
                    s = e3.length - 1;
                  s >= 0;
                  --s
                ) {
                  var l = e3.charCodeAt(s);
                  if (47 === l) {
                    if (!o) {
                      n3 = s + 1;
                      break;
                    }
                    continue;
                  }
                  -1 === i2 && ((o = false), (i2 = s + 1)),
                    46 === l
                      ? -1 === r3
                        ? (r3 = s)
                        : 1 !== a && (a = 1)
                      : -1 !== r3 && (a = -1);
                }
                return -1 === r3 ||
                  -1 === i2 ||
                  0 === a ||
                  (1 === a && r3 === i2 - 1 && r3 === n3 + 1)
                  ? ''
                  : e3.slice(r3, i2);
              },
              format: function (e3) {
                var t3, r3;
                if (null === e3 || 'object' != typeof e3)
                  throw TypeError(
                    'The "pathObject" argument must be of type Object. Received type ' +
                      typeof e3
                  );
                return (
                  (t3 = e3.dir || e3.root),
                  (r3 = e3.base || (e3.name || '') + (e3.ext || '')),
                  t3 ? (t3 === e3.root ? t3 + r3 : t3 + '/' + r3) : r3
                );
              },
              parse: function (e3) {
                t2(e3);
                var r3,
                  n3 = { root: '', dir: '', base: '', ext: '', name: '' };
                if (0 === e3.length) return n3;
                var i2 = e3.charCodeAt(0),
                  o = 47 === i2;
                o ? ((n3.root = '/'), (r3 = 1)) : (r3 = 0);
                for (
                  var a = -1, s = 0, l = -1, c = true, u = e3.length - 1, d = 0;
                  u >= r3;
                  --u
                ) {
                  if (47 === (i2 = e3.charCodeAt(u))) {
                    if (!c) {
                      s = u + 1;
                      break;
                    }
                    continue;
                  }
                  -1 === l && ((c = false), (l = u + 1)),
                    46 === i2
                      ? -1 === a
                        ? (a = u)
                        : 1 !== d && (d = 1)
                      : -1 !== a && (d = -1);
                }
                return (
                  -1 === a ||
                  -1 === l ||
                  0 === d ||
                  (1 === d && a === l - 1 && a === s + 1)
                    ? -1 !== l &&
                      (0 === s && o
                        ? (n3.base = n3.name = e3.slice(1, l))
                        : (n3.base = n3.name = e3.slice(s, l)))
                    : (0 === s && o
                        ? ((n3.name = e3.slice(1, a)),
                          (n3.base = e3.slice(1, l)))
                        : ((n3.name = e3.slice(s, a)),
                          (n3.base = e3.slice(s, l))),
                      (n3.ext = e3.slice(a, l))),
                  s > 0 ? (n3.dir = e3.slice(0, s - 1)) : o && (n3.dir = '/'),
                  n3
                );
              },
              sep: '/',
              delimiter: ':',
              win32: null,
              posix: null
            };
            (n2.posix = n2), (e2.exports = n2);
          }
        },
        r = {};
      function n(e2) {
        var i2 = r[e2];
        if (void 0 !== i2) return i2.exports;
        var o = (r[e2] = { exports: {} }),
          a = true;
        try {
          t[e2](o, o.exports, n), (a = false);
        } finally {
          a && delete r[e2];
        }
        return o.exports;
      }
      n.ab = '//';
      var i = n(114);
      e.exports = i;
    })();
  };
  __namedExportsObject['__chunk_46443'] = (e, t, r) => {
    !(function () {
      var t2 = {
          452: function (e2) {
            'use strict';
            e2.exports = r(90552);
          }
        },
        n = {};
      function i(e2) {
        var r2 = n[e2];
        if (void 0 !== r2) return r2.exports;
        var o2 = (n[e2] = { exports: {} }),
          a = true;
        try {
          t2[e2](o2, o2.exports, i), (a = false);
        } finally {
          a && delete n[e2];
        }
        return o2.exports;
      }
      i.ab = '//';
      var o = {};
      !(function () {
        var e2,
          t3 =
            (e2 = i(452)) && 'object' == typeof e2 && 'default' in e2
              ? e2.default
              : e2,
          r2 = /https?|ftp|gopher|file/;
        function n2(e3) {
          'string' == typeof e3 && (e3 = m(e3));
          var n3,
            i2,
            o2,
            a2,
            s2,
            l2,
            c2,
            u2,
            d2,
            p2 =
              ((i2 = (n3 = e3).auth),
              (o2 = n3.hostname),
              (a2 = n3.protocol || ''),
              (s2 = n3.pathname || ''),
              (l2 = n3.hash || ''),
              (c2 = n3.query || ''),
              (u2 = false),
              (i2 = i2
                ? encodeURIComponent(i2).replace(/%3A/i, ':') + '@'
                : ''),
              n3.host
                ? (u2 = i2 + n3.host)
                : o2 &&
                  ((u2 = i2 + (~o2.indexOf(':') ? '[' + o2 + ']' : o2)),
                  n3.port && (u2 += ':' + n3.port)),
              c2 && 'object' == typeof c2 && (c2 = t3.encode(c2)),
              (d2 = n3.search || (c2 && '?' + c2) || ''),
              a2 && ':' !== a2.substr(-1) && (a2 += ':'),
              n3.slashes || ((!a2 || r2.test(a2)) && false !== u2)
                ? ((u2 = '//' + (u2 || '')),
                  s2 && '/' !== s2[0] && (s2 = '/' + s2))
                : u2 || (u2 = ''),
              l2 && '#' !== l2[0] && (l2 = '#' + l2),
              d2 && '?' !== d2[0] && (d2 = '?' + d2),
              {
                protocol: a2,
                host: u2,
                pathname: (s2 = s2.replace(/[?#]/g, encodeURIComponent)),
                search: (d2 = d2.replace('#', '%23')),
                hash: l2
              });
          return '' + p2.protocol + p2.host + p2.pathname + p2.search + p2.hash;
        }
        var a = 'http://',
          s = a + 'w.w',
          l = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
          c = /https?|ftp|gopher|file/;
        function u(e3, t4) {
          var r3 = 'string' == typeof e3 ? m(e3) : e3;
          e3 = 'object' == typeof e3 ? n2(e3) : e3;
          var i2 = m(t4),
            o2 = '';
          r3.protocol &&
            !r3.slashes &&
            ((o2 = r3.protocol),
            (e3 = e3.replace(r3.protocol, '')),
            (o2 += '/' === t4[0] || '/' === e3[0] ? '/' : '')),
            o2 &&
              i2.protocol &&
              ((o2 = ''),
              i2.slashes ||
                ((o2 = i2.protocol), (t4 = t4.replace(i2.protocol, ''))));
          var u2 = e3.match(l);
          u2 &&
            !i2.protocol &&
            ((e3 = e3.substr((o2 = u2[1] + (u2[2] || '')).length)),
            /^\/\/[^/]/.test(t4) && (o2 = o2.slice(0, -1)));
          var d2 = new URL(e3, s + '/'),
            p2 = new URL(t4, d2).toString().replace(s, ''),
            f2 = i2.protocol || r3.protocol;
          return (
            (f2 += r3.slashes || i2.slashes ? '//' : ''),
            !o2 && f2
              ? (p2 = p2.replace(a, f2))
              : o2 && (p2 = p2.replace(a, '')),
            c.test(p2) ||
              ~t4.indexOf('.') ||
              '/' === e3.slice(-1) ||
              '/' === t4.slice(-1) ||
              '/' !== p2.slice(-1) ||
              (p2 = p2.slice(0, -1)),
            o2 && (p2 = o2 + ('/' === p2[0] ? p2.substr(1) : p2)),
            p2
          );
        }
        function d() {}
        (d.prototype.parse = m),
          (d.prototype.format = n2),
          (d.prototype.resolve = u),
          (d.prototype.resolveObject = u);
        var p = /^https?|ftp|gopher|file/,
          f = /^(.*?)([#?].*)/,
          h = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
          g = /^([a-z0-9.+-]*:)?\/\/\/*/i,
          y = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
        function m(e3, r3, i2) {
          if (
            (void 0 === r3 && (r3 = false),
            void 0 === i2 && (i2 = false),
            e3 && 'object' == typeof e3 && e3 instanceof d)
          )
            return e3;
          var o2 = (e3 = e3.trim()).match(f);
          (e3 = o2
            ? o2[1].replace(/\\/g, '/') + o2[2]
            : e3.replace(/\\/g, '/')),
            y.test(e3) && '/' !== e3.slice(-1) && (e3 += '/');
          var a2 = !/(^javascript)/.test(e3) && e3.match(h),
            l2 = g.test(e3),
            c2 = '';
          a2 &&
            (p.test(a2[1]) ||
              ((c2 = a2[1].toLowerCase()), (e3 = '' + a2[2] + a2[3])),
            a2[2] ||
              ((l2 = false),
              p.test(a2[1])
                ? ((c2 = a2[1]), (e3 = '' + a2[3]))
                : (e3 = '//' + a2[3])),
            (3 !== a2[2].length && 1 !== a2[2].length) ||
              ((c2 = a2[1]), (e3 = '/' + a2[3])));
          var u2,
            m2 = (o2 ? o2[1] : e3).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
            v = m2 && m2[1],
            b = new d(),
            w = '',
            _ = '';
          try {
            u2 = new URL(e3);
          } catch (t4) {
            (w = t4),
              c2 ||
                i2 ||
                !/^\/\//.test(e3) ||
                /^\/\/.+[@.]/.test(e3) ||
                ((_ = '/'), (e3 = e3.substr(1)));
            try {
              u2 = new URL(e3, s);
            } catch (e4) {
              return (b.protocol = c2), (b.href = c2), b;
            }
          }
          (b.slashes = l2 && !_),
            (b.host = 'w.w' === u2.host ? '' : u2.host),
            (b.hostname =
              'w.w' === u2.hostname ? '' : u2.hostname.replace(/(\[|\])/g, '')),
            (b.protocol = w ? c2 || null : u2.protocol),
            (b.search = u2.search.replace(/\\/g, '%5C')),
            (b.hash = u2.hash.replace(/\\/g, '%5C'));
          var S = e3.split('#');
          !b.search && ~S[0].indexOf('?') && (b.search = '?'),
            b.hash || '' !== S[1] || (b.hash = '#'),
            (b.query = r3
              ? t3.decode(u2.search.substr(1))
              : b.search.substr(1)),
            (b.pathname =
              _ +
              (a2
                ? u2.pathname
                    .replace(/['^|`]/g, function (e4) {
                      return '%' + e4.charCodeAt().toString(16).toUpperCase();
                    })
                    .replace(/((?:%[0-9A-F]{2})+)/g, function (e4, t4) {
                      try {
                        return decodeURIComponent(t4)
                          .split('')
                          .map(function (e5) {
                            var t5 = e5.charCodeAt();
                            return t5 > 256 || /^[a-z0-9]$/i.test(e5)
                              ? e5
                              : '%' + t5.toString(16).toUpperCase();
                          })
                          .join('');
                      } catch (e5) {
                        return t4;
                      }
                    })
                : u2.pathname)),
            'about:' === b.protocol &&
              'blank' === b.pathname &&
              ((b.protocol = ''), (b.pathname = '')),
            w && '/' !== e3[0] && (b.pathname = b.pathname.substr(1)),
            c2 &&
              !p.test(c2) &&
              '/' !== e3.slice(-1) &&
              '/' === b.pathname &&
              (b.pathname = ''),
            (b.path = b.pathname + b.search),
            (b.auth = [u2.username, u2.password]
              .map(decodeURIComponent)
              .filter(Boolean)
              .join(':')),
            (b.port = u2.port),
            v && !b.host.endsWith(v) && ((b.host += v), (b.port = v.slice(1))),
            (b.href = _ ? '' + b.pathname + b.search + b.hash : n2(b));
          var k = /^(file)/.test(b.href) ? ['host', 'hostname'] : [];
          return (
            Object.keys(b).forEach(function (e4) {
              ~k.indexOf(e4) || (b[e4] = b[e4] || null);
            }),
            b
          );
        }
        (o.parse = m),
          (o.format = n2),
          (o.resolve = u),
          (o.resolveObject = function (e3, t4) {
            return m(u(e3, t4));
          }),
          (o.Url = d);
      })(),
        (e.exports = o);
    })();
  };
  __namedExportsObject['__chunk_62034'] = (e) => {
    (() => {
      'use strict';
      'undefined' != typeof __nccwpck_require__ &&
        (__nccwpck_require__.ab = '//');
      var t = {};
      (() => {
        (t.parse = function (t2, r2) {
          if ('string' != typeof t2)
            throw TypeError('argument str must be a string');
          for (
            var i2 = {}, o = t2.split(n), a = (r2 || {}).decode || e2, s = 0;
            s < o.length;
            s++
          ) {
            var l = o[s],
              c = l.indexOf('=');
            if (!(c < 0)) {
              var u = l.substr(0, c).trim(),
                d = l.substr(++c, l.length).trim();
              '"' == d[0] && (d = d.slice(1, -1)),
                void 0 == i2[u] &&
                  (i2[u] = (function (e3, t3) {
                    try {
                      return t3(e3);
                    } catch (t4) {
                      return e3;
                    }
                  })(d, a));
            }
          }
          return i2;
        }),
          (t.serialize = function (e3, t2, n2) {
            var o = n2 || {},
              a = o.encode || r;
            if ('function' != typeof a)
              throw TypeError('option encode is invalid');
            if (!i.test(e3)) throw TypeError('argument name is invalid');
            var s = a(t2);
            if (s && !i.test(s)) throw TypeError('argument val is invalid');
            var l = e3 + '=' + s;
            if (null != o.maxAge) {
              var c = o.maxAge - 0;
              if (isNaN(c) || !isFinite(c))
                throw TypeError('option maxAge is invalid');
              l += '; Max-Age=' + Math.floor(c);
            }
            if (o.domain) {
              if (!i.test(o.domain))
                throw TypeError('option domain is invalid');
              l += '; Domain=' + o.domain;
            }
            if (o.path) {
              if (!i.test(o.path)) throw TypeError('option path is invalid');
              l += '; Path=' + o.path;
            }
            if (o.expires) {
              if ('function' != typeof o.expires.toUTCString)
                throw TypeError('option expires is invalid');
              l += '; Expires=' + o.expires.toUTCString();
            }
            if (
              (o.httpOnly && (l += '; HttpOnly'),
              o.secure && (l += '; Secure'),
              o.sameSite)
            )
              switch (
                'string' == typeof o.sameSite
                  ? o.sameSite.toLowerCase()
                  : o.sameSite
              ) {
                case true:
                case 'strict':
                  l += '; SameSite=Strict';
                  break;
                case 'lax':
                  l += '; SameSite=Lax';
                  break;
                case 'none':
                  l += '; SameSite=None';
                  break;
                default:
                  throw TypeError('option sameSite is invalid');
              }
            return l;
          });
        var e2 = decodeURIComponent,
          r = encodeURIComponent,
          n = /; */,
          i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      })(),
        (e.exports = t);
    })();
  };
  __namedExportsObject['__chunk_93131'] = (e, t, r) => {
    (() => {
      'use strict';
      var t2 = {
          491: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.ContextAPI = void 0);
            let n2 = r2(223),
              i2 = r2(172),
              o2 = r2(930),
              a = 'context',
              s = new n2.NoopContextManager();
            class l {
              constructor() {}
              static getInstance() {
                return (
                  this._instance || (this._instance = new l()), this._instance
                );
              }
              setGlobalContextManager(e3) {
                return (0, i2.registerGlobal)(a, e3, o2.DiagAPI.instance());
              }
              active() {
                return this._getContextManager().active();
              }
              with(e3, t4, r3, ...n3) {
                return this._getContextManager().with(e3, t4, r3, ...n3);
              }
              bind(e3, t4) {
                return this._getContextManager().bind(e3, t4);
              }
              _getContextManager() {
                return (0, i2.getGlobal)(a) || s;
              }
              disable() {
                this._getContextManager().disable(),
                  (0, i2.unregisterGlobal)(a, o2.DiagAPI.instance());
              }
            }
            t3.ContextAPI = l;
          },
          930: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.DiagAPI = void 0);
            let n2 = r2(56),
              i2 = r2(912),
              o2 = r2(957),
              a = r2(172);
            class s {
              constructor() {
                function e3(e4) {
                  return function (...t5) {
                    let r3 = (0, a.getGlobal)('diag');
                    if (r3) return r3[e4](...t5);
                  };
                }
                let t4 = this;
                (t4.setLogger = (
                  e4,
                  r3 = { logLevel: o2.DiagLogLevel.INFO }
                ) => {
                  var n3, s2, l;
                  if (e4 === t4) {
                    let e5 = Error(
                      'Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation'
                    );
                    return (
                      t4.error(
                        null !== (n3 = e5.stack) && void 0 !== n3
                          ? n3
                          : e5.message
                      ),
                      false
                    );
                  }
                  'number' == typeof r3 && (r3 = { logLevel: r3 });
                  let c = (0, a.getGlobal)('diag'),
                    u = (0, i2.createLogLevelDiagLogger)(
                      null !== (s2 = r3.logLevel) && void 0 !== s2
                        ? s2
                        : o2.DiagLogLevel.INFO,
                      e4
                    );
                  if (c && !r3.suppressOverrideMessage) {
                    let e5 =
                      null !== (l = Error().stack) && void 0 !== l
                        ? l
                        : '<failed to generate stacktrace>';
                    c.warn(`Current logger will be overwritten from ${e5}`),
                      u.warn(
                        `Current logger will overwrite one already registered from ${e5}`
                      );
                  }
                  return (0, a.registerGlobal)('diag', u, t4, true);
                }),
                  (t4.disable = () => {
                    (0, a.unregisterGlobal)('diag', t4);
                  }),
                  (t4.createComponentLogger = (e4) =>
                    new n2.DiagComponentLogger(e4)),
                  (t4.verbose = e3('verbose')),
                  (t4.debug = e3('debug')),
                  (t4.info = e3('info')),
                  (t4.warn = e3('warn')),
                  (t4.error = e3('error'));
              }
              static instance() {
                return (
                  this._instance || (this._instance = new s()), this._instance
                );
              }
            }
            t3.DiagAPI = s;
          },
          653: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.MetricsAPI = void 0);
            let n2 = r2(660),
              i2 = r2(172),
              o2 = r2(930),
              a = 'metrics';
            class s {
              constructor() {}
              static getInstance() {
                return (
                  this._instance || (this._instance = new s()), this._instance
                );
              }
              setGlobalMeterProvider(e3) {
                return (0, i2.registerGlobal)(a, e3, o2.DiagAPI.instance());
              }
              getMeterProvider() {
                return (0, i2.getGlobal)(a) || n2.NOOP_METER_PROVIDER;
              }
              getMeter(e3, t4, r3) {
                return this.getMeterProvider().getMeter(e3, t4, r3);
              }
              disable() {
                (0, i2.unregisterGlobal)(a, o2.DiagAPI.instance());
              }
            }
            t3.MetricsAPI = s;
          },
          181: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.PropagationAPI = void 0);
            let n2 = r2(172),
              i2 = r2(874),
              o2 = r2(194),
              a = r2(277),
              s = r2(369),
              l = r2(930),
              c = 'propagation',
              u = new i2.NoopTextMapPropagator();
            class d {
              constructor() {
                (this.createBaggage = s.createBaggage),
                  (this.getBaggage = a.getBaggage),
                  (this.getActiveBaggage = a.getActiveBaggage),
                  (this.setBaggage = a.setBaggage),
                  (this.deleteBaggage = a.deleteBaggage);
              }
              static getInstance() {
                return (
                  this._instance || (this._instance = new d()), this._instance
                );
              }
              setGlobalPropagator(e3) {
                return (0, n2.registerGlobal)(c, e3, l.DiagAPI.instance());
              }
              inject(e3, t4, r3 = o2.defaultTextMapSetter) {
                return this._getGlobalPropagator().inject(e3, t4, r3);
              }
              extract(e3, t4, r3 = o2.defaultTextMapGetter) {
                return this._getGlobalPropagator().extract(e3, t4, r3);
              }
              fields() {
                return this._getGlobalPropagator().fields();
              }
              disable() {
                (0, n2.unregisterGlobal)(c, l.DiagAPI.instance());
              }
              _getGlobalPropagator() {
                return (0, n2.getGlobal)(c) || u;
              }
            }
            t3.PropagationAPI = d;
          },
          997: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.TraceAPI = void 0);
            let n2 = r2(172),
              i2 = r2(846),
              o2 = r2(139),
              a = r2(607),
              s = r2(930),
              l = 'trace';
            class c {
              constructor() {
                (this._proxyTracerProvider = new i2.ProxyTracerProvider()),
                  (this.wrapSpanContext = o2.wrapSpanContext),
                  (this.isSpanContextValid = o2.isSpanContextValid),
                  (this.deleteSpan = a.deleteSpan),
                  (this.getSpan = a.getSpan),
                  (this.getActiveSpan = a.getActiveSpan),
                  (this.getSpanContext = a.getSpanContext),
                  (this.setSpan = a.setSpan),
                  (this.setSpanContext = a.setSpanContext);
              }
              static getInstance() {
                return (
                  this._instance || (this._instance = new c()), this._instance
                );
              }
              setGlobalTracerProvider(e3) {
                let t4 = (0, n2.registerGlobal)(
                  l,
                  this._proxyTracerProvider,
                  s.DiagAPI.instance()
                );
                return t4 && this._proxyTracerProvider.setDelegate(e3), t4;
              }
              getTracerProvider() {
                return (0, n2.getGlobal)(l) || this._proxyTracerProvider;
              }
              getTracer(e3, t4) {
                return this.getTracerProvider().getTracer(e3, t4);
              }
              disable() {
                (0, n2.unregisterGlobal)(l, s.DiagAPI.instance()),
                  (this._proxyTracerProvider = new i2.ProxyTracerProvider());
              }
            }
            t3.TraceAPI = c;
          },
          277: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.deleteBaggage =
                t3.setBaggage =
                t3.getActiveBaggage =
                t3.getBaggage =
                  void 0);
            let n2 = r2(491),
              i2 = (0, r2(780).createContextKey)('OpenTelemetry Baggage Key');
            function o2(e3) {
              return e3.getValue(i2) || void 0;
            }
            (t3.getBaggage = o2),
              (t3.getActiveBaggage = function () {
                return o2(n2.ContextAPI.getInstance().active());
              }),
              (t3.setBaggage = function (e3, t4) {
                return e3.setValue(i2, t4);
              }),
              (t3.deleteBaggage = function (e3) {
                return e3.deleteValue(i2);
              });
          },
          993: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.BaggageImpl = void 0);
            class r2 {
              constructor(e3) {
                this._entries = e3 ? new Map(e3) : /* @__PURE__ */ new Map();
              }
              getEntry(e3) {
                let t4 = this._entries.get(e3);
                if (t4) return Object.assign({}, t4);
              }
              getAllEntries() {
                return Array.from(this._entries.entries()).map(([e3, t4]) => [
                  e3,
                  t4
                ]);
              }
              setEntry(e3, t4) {
                let n2 = new r2(this._entries);
                return n2._entries.set(e3, t4), n2;
              }
              removeEntry(e3) {
                let t4 = new r2(this._entries);
                return t4._entries.delete(e3), t4;
              }
              removeEntries(...e3) {
                let t4 = new r2(this._entries);
                for (let r3 of e3) t4._entries.delete(r3);
                return t4;
              }
              clear() {
                return new r2();
              }
            }
            t3.BaggageImpl = r2;
          },
          830: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.baggageEntryMetadataSymbol = void 0),
              (t3.baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata'));
          },
          369: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.baggageEntryMetadataFromString = t3.createBaggage = void 0);
            let n2 = r2(930),
              i2 = r2(993),
              o2 = r2(830),
              a = n2.DiagAPI.instance();
            (t3.createBaggage = function (e3 = {}) {
              return new i2.BaggageImpl(new Map(Object.entries(e3)));
            }),
              (t3.baggageEntryMetadataFromString = function (e3) {
                return (
                  'string' != typeof e3 &&
                    (a.error(
                      `Cannot create baggage metadata from unknown type: ${typeof e3}`
                    ),
                    (e3 = '')),
                  {
                    __TYPE__: o2.baggageEntryMetadataSymbol,
                    toString: () => e3
                  }
                );
              });
          },
          67: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.context = void 0);
            let n2 = r2(491);
            t3.context = n2.ContextAPI.getInstance();
          },
          223: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.NoopContextManager = void 0);
            let n2 = r2(780);
            class i2 {
              active() {
                return n2.ROOT_CONTEXT;
              }
              with(e3, t4, r3, ...n3) {
                return t4.call(r3, ...n3);
              }
              bind(e3, t4) {
                return t4;
              }
              enable() {
                return this;
              }
              disable() {
                return this;
              }
            }
            t3.NoopContextManager = i2;
          },
          780: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.ROOT_CONTEXT = t3.createContextKey = void 0),
              (t3.createContextKey = function (e3) {
                return Symbol.for(e3);
              });
            class r2 {
              constructor(e3) {
                let t4 = this;
                (t4._currentContext = e3
                  ? new Map(e3)
                  : /* @__PURE__ */ new Map()),
                  (t4.getValue = (e4) => t4._currentContext.get(e4)),
                  (t4.setValue = (e4, n2) => {
                    let i2 = new r2(t4._currentContext);
                    return i2._currentContext.set(e4, n2), i2;
                  }),
                  (t4.deleteValue = (e4) => {
                    let n2 = new r2(t4._currentContext);
                    return n2._currentContext.delete(e4), n2;
                  });
              }
            }
            t3.ROOT_CONTEXT = new r2();
          },
          506: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.diag = void 0);
            let n2 = r2(930);
            t3.diag = n2.DiagAPI.instance();
          },
          56: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.DiagComponentLogger = void 0);
            let n2 = r2(172);
            class i2 {
              constructor(e3) {
                this._namespace = e3.namespace || 'DiagComponentLogger';
              }
              debug(...e3) {
                return o2('debug', this._namespace, e3);
              }
              error(...e3) {
                return o2('error', this._namespace, e3);
              }
              info(...e3) {
                return o2('info', this._namespace, e3);
              }
              warn(...e3) {
                return o2('warn', this._namespace, e3);
              }
              verbose(...e3) {
                return o2('verbose', this._namespace, e3);
              }
            }
            function o2(e3, t4, r3) {
              let i3 = (0, n2.getGlobal)('diag');
              if (i3) return r3.unshift(t4), i3[e3](...r3);
            }
            t3.DiagComponentLogger = i2;
          },
          972: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.DiagConsoleLogger = void 0);
            let r2 = [
              { n: 'error', c: 'error' },
              { n: 'warn', c: 'warn' },
              { n: 'info', c: 'info' },
              { n: 'debug', c: 'debug' },
              { n: 'verbose', c: 'trace' }
            ];
            class n2 {
              constructor() {
                for (let e3 = 0; e3 < r2.length; e3++)
                  this[r2[e3].n] = (function (e4) {
                    return function (...t4) {
                      if (console) {
                        let r3 = console[e4];
                        if (
                          ('function' != typeof r3 && (r3 = console.log),
                          'function' == typeof r3)
                        )
                          return r3.apply(console, t4);
                      }
                    };
                  })(r2[e3].c);
              }
            }
            t3.DiagConsoleLogger = n2;
          },
          912: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.createLogLevelDiagLogger = void 0);
            let n2 = r2(957);
            t3.createLogLevelDiagLogger = function (e3, t4) {
              function r3(r4, n3) {
                let i2 = t4[r4];
                return 'function' == typeof i2 && e3 >= n3
                  ? i2.bind(t4)
                  : function () {};
              }
              return (
                e3 < n2.DiagLogLevel.NONE
                  ? (e3 = n2.DiagLogLevel.NONE)
                  : e3 > n2.DiagLogLevel.ALL && (e3 = n2.DiagLogLevel.ALL),
                (t4 = t4 || {}),
                {
                  error: r3('error', n2.DiagLogLevel.ERROR),
                  warn: r3('warn', n2.DiagLogLevel.WARN),
                  info: r3('info', n2.DiagLogLevel.INFO),
                  debug: r3('debug', n2.DiagLogLevel.DEBUG),
                  verbose: r3('verbose', n2.DiagLogLevel.VERBOSE)
                }
              );
            };
          },
          957: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.DiagLogLevel = void 0),
              (function (e3) {
                (e3[(e3.NONE = 0)] = 'NONE'),
                  (e3[(e3.ERROR = 30)] = 'ERROR'),
                  (e3[(e3.WARN = 50)] = 'WARN'),
                  (e3[(e3.INFO = 60)] = 'INFO'),
                  (e3[(e3.DEBUG = 70)] = 'DEBUG'),
                  (e3[(e3.VERBOSE = 80)] = 'VERBOSE'),
                  (e3[(e3.ALL = 9999)] = 'ALL');
              })(t3.DiagLogLevel || (t3.DiagLogLevel = {}));
          },
          172: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.unregisterGlobal = t3.getGlobal = t3.registerGlobal = void 0);
            let n2 = r2(200),
              i2 = r2(521),
              o2 = r2(130),
              a = i2.VERSION.split('.')[0],
              s = Symbol.for(`opentelemetry.js.api.${a}`),
              l = n2._globalThis;
            (t3.registerGlobal = function (e3, t4, r3, n3 = false) {
              var o3;
              let a2 = (l[s] =
                null !== (o3 = l[s]) && void 0 !== o3
                  ? o3
                  : { version: i2.VERSION });
              if (!n3 && a2[e3]) {
                let t5 = Error(
                  `@opentelemetry/api: Attempted duplicate registration of API: ${e3}`
                );
                return r3.error(t5.stack || t5.message), false;
              }
              if (a2.version !== i2.VERSION) {
                let t5 = Error(
                  `@opentelemetry/api: Registration of version v${a2.version} for ${e3} does not match previously registered API v${i2.VERSION}`
                );
                return r3.error(t5.stack || t5.message), false;
              }
              return (
                (a2[e3] = t4),
                r3.debug(
                  `@opentelemetry/api: Registered a global for ${e3} v${i2.VERSION}.`
                ),
                true
              );
            }),
              (t3.getGlobal = function (e3) {
                var t4, r3;
                let n3 =
                  null === (t4 = l[s]) || void 0 === t4 ? void 0 : t4.version;
                if (n3 && (0, o2.isCompatible)(n3))
                  return null === (r3 = l[s]) || void 0 === r3
                    ? void 0
                    : r3[e3];
              }),
              (t3.unregisterGlobal = function (e3, t4) {
                t4.debug(
                  `@opentelemetry/api: Unregistering a global for ${e3} v${i2.VERSION}.`
                );
                let r3 = l[s];
                r3 && delete r3[e3];
              });
          },
          130: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.isCompatible = t3._makeCompatibilityCheck = void 0);
            let n2 = r2(521),
              i2 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function o2(e3) {
              let t4 = /* @__PURE__ */ new Set([e3]),
                r3 = /* @__PURE__ */ new Set(),
                n3 = e3.match(i2);
              if (!n3) return () => false;
              let o3 = {
                major: +n3[1],
                minor: +n3[2],
                patch: +n3[3],
                prerelease: n3[4]
              };
              if (null != o3.prerelease)
                return function (t5) {
                  return t5 === e3;
                };
              function a(e4) {
                return r3.add(e4), false;
              }
              return function (e4) {
                if (t4.has(e4)) return true;
                if (r3.has(e4)) return false;
                let n4 = e4.match(i2);
                if (!n4) return a(e4);
                let s = {
                  major: +n4[1],
                  minor: +n4[2],
                  patch: +n4[3],
                  prerelease: n4[4]
                };
                return null != s.prerelease || o3.major !== s.major
                  ? a(e4)
                  : 0 === o3.major
                  ? o3.minor === s.minor && o3.patch <= s.patch
                    ? (t4.add(e4), true)
                    : a(e4)
                  : o3.minor <= s.minor
                  ? (t4.add(e4), true)
                  : a(e4);
              };
            }
            (t3._makeCompatibilityCheck = o2),
              (t3.isCompatible = o2(n2.VERSION));
          },
          886: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.metrics = void 0);
            let n2 = r2(653);
            t3.metrics = n2.MetricsAPI.getInstance();
          },
          901: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.ValueType = void 0),
              (function (e3) {
                (e3[(e3.INT = 0)] = 'INT'), (e3[(e3.DOUBLE = 1)] = 'DOUBLE');
              })(t3.ValueType || (t3.ValueType = {}));
          },
          102: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.createNoopMeter =
                t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
                t3.NOOP_OBSERVABLE_GAUGE_METRIC =
                t3.NOOP_OBSERVABLE_COUNTER_METRIC =
                t3.NOOP_UP_DOWN_COUNTER_METRIC =
                t3.NOOP_HISTOGRAM_METRIC =
                t3.NOOP_COUNTER_METRIC =
                t3.NOOP_METER =
                t3.NoopObservableUpDownCounterMetric =
                t3.NoopObservableGaugeMetric =
                t3.NoopObservableCounterMetric =
                t3.NoopObservableMetric =
                t3.NoopHistogramMetric =
                t3.NoopUpDownCounterMetric =
                t3.NoopCounterMetric =
                t3.NoopMetric =
                t3.NoopMeter =
                  void 0);
            class r2 {
              constructor() {}
              createHistogram(e3, r3) {
                return t3.NOOP_HISTOGRAM_METRIC;
              }
              createCounter(e3, r3) {
                return t3.NOOP_COUNTER_METRIC;
              }
              createUpDownCounter(e3, r3) {
                return t3.NOOP_UP_DOWN_COUNTER_METRIC;
              }
              createObservableGauge(e3, r3) {
                return t3.NOOP_OBSERVABLE_GAUGE_METRIC;
              }
              createObservableCounter(e3, r3) {
                return t3.NOOP_OBSERVABLE_COUNTER_METRIC;
              }
              createObservableUpDownCounter(e3, r3) {
                return t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
              }
              addBatchObservableCallback(e3, t4) {}
              removeBatchObservableCallback(e3) {}
            }
            t3.NoopMeter = r2;
            class n2 {}
            t3.NoopMetric = n2;
            class i2 extends n2 {
              add(e3, t4) {}
            }
            t3.NoopCounterMetric = i2;
            class o2 extends n2 {
              add(e3, t4) {}
            }
            t3.NoopUpDownCounterMetric = o2;
            class a extends n2 {
              record(e3, t4) {}
            }
            t3.NoopHistogramMetric = a;
            class s {
              addCallback(e3) {}
              removeCallback(e3) {}
            }
            t3.NoopObservableMetric = s;
            class l extends s {}
            t3.NoopObservableCounterMetric = l;
            class c extends s {}
            t3.NoopObservableGaugeMetric = c;
            class u extends s {}
            (t3.NoopObservableUpDownCounterMetric = u),
              (t3.NOOP_METER = new r2()),
              (t3.NOOP_COUNTER_METRIC = new i2()),
              (t3.NOOP_HISTOGRAM_METRIC = new a()),
              (t3.NOOP_UP_DOWN_COUNTER_METRIC = new o2()),
              (t3.NOOP_OBSERVABLE_COUNTER_METRIC = new l()),
              (t3.NOOP_OBSERVABLE_GAUGE_METRIC = new c()),
              (t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new u()),
              (t3.createNoopMeter = function () {
                return t3.NOOP_METER;
              });
          },
          660: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.NOOP_METER_PROVIDER = t3.NoopMeterProvider = void 0);
            let n2 = r2(102);
            class i2 {
              getMeter(e3, t4, r3) {
                return n2.NOOP_METER;
              }
            }
            (t3.NoopMeterProvider = i2), (t3.NOOP_METER_PROVIDER = new i2());
          },
          200: function (e2, t3, r2) {
            var n2 =
                (this && this.__createBinding) ||
                (Object.create
                  ? function (e3, t4, r3, n3) {
                      void 0 === n3 && (n3 = r3),
                        Object.defineProperty(e3, n3, {
                          enumerable: true,
                          get: function () {
                            return t4[r3];
                          }
                        });
                    }
                  : function (e3, t4, r3, n3) {
                      void 0 === n3 && (n3 = r3), (e3[n3] = t4[r3]);
                    }),
              i2 =
                (this && this.__exportStar) ||
                function (e3, t4) {
                  for (var r3 in e3)
                    'default' === r3 ||
                      Object.prototype.hasOwnProperty.call(t4, r3) ||
                      n2(t4, e3, r3);
                };
            Object.defineProperty(t3, '__esModule', { value: true }),
              i2(r2(46), t3);
          },
          651: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3._globalThis = void 0),
              (t3._globalThis =
                'object' == typeof globalThis ? globalThis : r.g);
          },
          46: function (e2, t3, r2) {
            var n2 =
                (this && this.__createBinding) ||
                (Object.create
                  ? function (e3, t4, r3, n3) {
                      void 0 === n3 && (n3 = r3),
                        Object.defineProperty(e3, n3, {
                          enumerable: true,
                          get: function () {
                            return t4[r3];
                          }
                        });
                    }
                  : function (e3, t4, r3, n3) {
                      void 0 === n3 && (n3 = r3), (e3[n3] = t4[r3]);
                    }),
              i2 =
                (this && this.__exportStar) ||
                function (e3, t4) {
                  for (var r3 in e3)
                    'default' === r3 ||
                      Object.prototype.hasOwnProperty.call(t4, r3) ||
                      n2(t4, e3, r3);
                };
            Object.defineProperty(t3, '__esModule', { value: true }),
              i2(r2(651), t3);
          },
          939: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.propagation = void 0);
            let n2 = r2(181);
            t3.propagation = n2.PropagationAPI.getInstance();
          },
          874: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.NoopTextMapPropagator = void 0);
            class r2 {
              inject(e3, t4) {}
              extract(e3, t4) {
                return e3;
              }
              fields() {
                return [];
              }
            }
            t3.NoopTextMapPropagator = r2;
          },
          194: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.defaultTextMapSetter = t3.defaultTextMapGetter = void 0),
              (t3.defaultTextMapGetter = {
                get(e3, t4) {
                  if (null != e3) return e3[t4];
                },
                keys: (e3) => (null == e3 ? [] : Object.keys(e3))
              }),
              (t3.defaultTextMapSetter = {
                set(e3, t4, r2) {
                  null != e3 && (e3[t4] = r2);
                }
              });
          },
          845: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.trace = void 0);
            let n2 = r2(997);
            t3.trace = n2.TraceAPI.getInstance();
          },
          403: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.NonRecordingSpan = void 0);
            let n2 = r2(476);
            class i2 {
              constructor(e3 = n2.INVALID_SPAN_CONTEXT) {
                this._spanContext = e3;
              }
              spanContext() {
                return this._spanContext;
              }
              setAttribute(e3, t4) {
                return this;
              }
              setAttributes(e3) {
                return this;
              }
              addEvent(e3, t4) {
                return this;
              }
              setStatus(e3) {
                return this;
              }
              updateName(e3) {
                return this;
              }
              end(e3) {}
              isRecording() {
                return false;
              }
              recordException(e3, t4) {}
            }
            t3.NonRecordingSpan = i2;
          },
          614: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.NoopTracer = void 0);
            let n2 = r2(491),
              i2 = r2(607),
              o2 = r2(403),
              a = r2(139),
              s = n2.ContextAPI.getInstance();
            class l {
              startSpan(e3, t4, r3 = s.active()) {
                if (null == t4 ? void 0 : t4.root)
                  return new o2.NonRecordingSpan();
                let n3 = r3 && (0, i2.getSpanContext)(r3);
                return 'object' == typeof n3 &&
                  'string' == typeof n3.spanId &&
                  'string' == typeof n3.traceId &&
                  'number' == typeof n3.traceFlags &&
                  (0, a.isSpanContextValid)(n3)
                  ? new o2.NonRecordingSpan(n3)
                  : new o2.NonRecordingSpan();
              }
              startActiveSpan(e3, t4, r3, n3) {
                let o3, a2, l2;
                if (arguments.length < 2) return;
                2 == arguments.length
                  ? (l2 = t4)
                  : 3 == arguments.length
                  ? ((o3 = t4), (l2 = r3))
                  : ((o3 = t4), (a2 = r3), (l2 = n3));
                let c = null != a2 ? a2 : s.active(),
                  u = this.startSpan(e3, o3, c),
                  d = (0, i2.setSpan)(c, u);
                return s.with(d, l2, void 0, u);
              }
            }
            t3.NoopTracer = l;
          },
          124: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.NoopTracerProvider = void 0);
            let n2 = r2(614);
            class i2 {
              getTracer(e3, t4, r3) {
                return new n2.NoopTracer();
              }
            }
            t3.NoopTracerProvider = i2;
          },
          125: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.ProxyTracer = void 0);
            let n2 = new (r2(614).NoopTracer)();
            class i2 {
              constructor(e3, t4, r3, n3) {
                (this._provider = e3),
                  (this.name = t4),
                  (this.version = r3),
                  (this.options = n3);
              }
              startSpan(e3, t4, r3) {
                return this._getTracer().startSpan(e3, t4, r3);
              }
              startActiveSpan(e3, t4, r3, n3) {
                let i3 = this._getTracer();
                return Reflect.apply(i3.startActiveSpan, i3, arguments);
              }
              _getTracer() {
                if (this._delegate) return this._delegate;
                let e3 = this._provider.getDelegateTracer(
                  this.name,
                  this.version,
                  this.options
                );
                return e3 ? ((this._delegate = e3), this._delegate) : n2;
              }
            }
            t3.ProxyTracer = i2;
          },
          846: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.ProxyTracerProvider = void 0);
            let n2 = r2(125),
              i2 = new (r2(124).NoopTracerProvider)();
            class o2 {
              getTracer(e3, t4, r3) {
                var i3;
                return null !== (i3 = this.getDelegateTracer(e3, t4, r3)) &&
                  void 0 !== i3
                  ? i3
                  : new n2.ProxyTracer(this, e3, t4, r3);
              }
              getDelegate() {
                var e3;
                return null !== (e3 = this._delegate) && void 0 !== e3
                  ? e3
                  : i2;
              }
              setDelegate(e3) {
                this._delegate = e3;
              }
              getDelegateTracer(e3, t4, r3) {
                var n3;
                return null === (n3 = this._delegate) || void 0 === n3
                  ? void 0
                  : n3.getTracer(e3, t4, r3);
              }
            }
            t3.ProxyTracerProvider = o2;
          },
          996: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.SamplingDecision = void 0),
              (function (e3) {
                (e3[(e3.NOT_RECORD = 0)] = 'NOT_RECORD'),
                  (e3[(e3.RECORD = 1)] = 'RECORD'),
                  (e3[(e3.RECORD_AND_SAMPLED = 2)] = 'RECORD_AND_SAMPLED');
              })(t3.SamplingDecision || (t3.SamplingDecision = {}));
          },
          607: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.getSpanContext =
                t3.setSpanContext =
                t3.deleteSpan =
                t3.setSpan =
                t3.getActiveSpan =
                t3.getSpan =
                  void 0);
            let n2 = r2(780),
              i2 = r2(403),
              o2 = r2(491),
              a = (0, n2.createContextKey)('OpenTelemetry Context Key SPAN');
            function s(e3) {
              return e3.getValue(a) || void 0;
            }
            function l(e3, t4) {
              return e3.setValue(a, t4);
            }
            (t3.getSpan = s),
              (t3.getActiveSpan = function () {
                return s(o2.ContextAPI.getInstance().active());
              }),
              (t3.setSpan = l),
              (t3.deleteSpan = function (e3) {
                return e3.deleteValue(a);
              }),
              (t3.setSpanContext = function (e3, t4) {
                return l(e3, new i2.NonRecordingSpan(t4));
              }),
              (t3.getSpanContext = function (e3) {
                var t4;
                return null === (t4 = s(e3)) || void 0 === t4
                  ? void 0
                  : t4.spanContext();
              });
          },
          325: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.TraceStateImpl = void 0);
            let n2 = r2(564);
            class i2 {
              constructor(e3) {
                (this._internalState = /* @__PURE__ */ new Map()),
                  e3 && this._parse(e3);
              }
              set(e3, t4) {
                let r3 = this._clone();
                return (
                  r3._internalState.has(e3) && r3._internalState.delete(e3),
                  r3._internalState.set(e3, t4),
                  r3
                );
              }
              unset(e3) {
                let t4 = this._clone();
                return t4._internalState.delete(e3), t4;
              }
              get(e3) {
                return this._internalState.get(e3);
              }
              serialize() {
                return this._keys()
                  .reduce(
                    (e3, t4) => (e3.push(t4 + '=' + this.get(t4)), e3),
                    []
                  )
                  .join(',');
              }
              _parse(e3) {
                !(e3.length > 512) &&
                  ((this._internalState = e3
                    .split(',')
                    .reverse()
                    .reduce((e4, t4) => {
                      let r3 = t4.trim(),
                        i3 = r3.indexOf('=');
                      if (-1 !== i3) {
                        let o2 = r3.slice(0, i3),
                          a = r3.slice(i3 + 1, t4.length);
                        (0, n2.validateKey)(o2) &&
                          (0, n2.validateValue)(a) &&
                          e4.set(o2, a);
                      }
                      return e4;
                    }, /* @__PURE__ */ new Map())),
                  this._internalState.size > 32 &&
                    (this._internalState = new Map(
                      Array.from(this._internalState.entries())
                        .reverse()
                        .slice(0, 32)
                    )));
              }
              _keys() {
                return Array.from(this._internalState.keys()).reverse();
              }
              _clone() {
                let e3 = new i2();
                return (e3._internalState = new Map(this._internalState)), e3;
              }
            }
            t3.TraceStateImpl = i2;
          },
          564: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.validateValue = t3.validateKey = void 0);
            let r2 = '[_0-9a-z-*/]',
              n2 = `[a-z]${r2}{0,255}`,
              i2 = `[a-z0-9]${r2}{0,240}@[a-z]${r2}{0,13}`,
              o2 = RegExp(`^(?:${n2}|${i2})$`),
              a = /^[ -~]{0,255}[!-~]$/,
              s = /,|=/;
            (t3.validateKey = function (e3) {
              return o2.test(e3);
            }),
              (t3.validateValue = function (e3) {
                return a.test(e3) && !s.test(e3);
              });
          },
          98: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.createTraceState = void 0);
            let n2 = r2(325);
            t3.createTraceState = function (e3) {
              return new n2.TraceStateImpl(e3);
            };
          },
          476: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.INVALID_SPAN_CONTEXT =
                t3.INVALID_TRACEID =
                t3.INVALID_SPANID =
                  void 0);
            let n2 = r2(475);
            (t3.INVALID_SPANID = '0000000000000000'),
              (t3.INVALID_TRACEID = '00000000000000000000000000000000'),
              (t3.INVALID_SPAN_CONTEXT = {
                traceId: t3.INVALID_TRACEID,
                spanId: t3.INVALID_SPANID,
                traceFlags: n2.TraceFlags.NONE
              });
          },
          357: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.SpanKind = void 0),
              (function (e3) {
                (e3[(e3.INTERNAL = 0)] = 'INTERNAL'),
                  (e3[(e3.SERVER = 1)] = 'SERVER'),
                  (e3[(e3.CLIENT = 2)] = 'CLIENT'),
                  (e3[(e3.PRODUCER = 3)] = 'PRODUCER'),
                  (e3[(e3.CONSUMER = 4)] = 'CONSUMER');
              })(t3.SpanKind || (t3.SpanKind = {}));
          },
          139: (e2, t3, r2) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.wrapSpanContext =
                t3.isSpanContextValid =
                t3.isValidSpanId =
                t3.isValidTraceId =
                  void 0);
            let n2 = r2(476),
              i2 = r2(403),
              o2 = /^([0-9a-f]{32})$/i,
              a = /^[0-9a-f]{16}$/i;
            function s(e3) {
              return o2.test(e3) && e3 !== n2.INVALID_TRACEID;
            }
            function l(e3) {
              return a.test(e3) && e3 !== n2.INVALID_SPANID;
            }
            (t3.isValidTraceId = s),
              (t3.isValidSpanId = l),
              (t3.isSpanContextValid = function (e3) {
                return s(e3.traceId) && l(e3.spanId);
              }),
              (t3.wrapSpanContext = function (e3) {
                return new i2.NonRecordingSpan(e3);
              });
          },
          847: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.SpanStatusCode = void 0),
              (function (e3) {
                (e3[(e3.UNSET = 0)] = 'UNSET'),
                  (e3[(e3.OK = 1)] = 'OK'),
                  (e3[(e3.ERROR = 2)] = 'ERROR');
              })(t3.SpanStatusCode || (t3.SpanStatusCode = {}));
          },
          475: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.TraceFlags = void 0),
              (function (e3) {
                (e3[(e3.NONE = 0)] = 'NONE'),
                  (e3[(e3.SAMPLED = 1)] = 'SAMPLED');
              })(t3.TraceFlags || (t3.TraceFlags = {}));
          },
          521: (e2, t3) => {
            Object.defineProperty(t3, '__esModule', { value: true }),
              (t3.VERSION = void 0),
              (t3.VERSION = '1.6.0');
          }
        },
        n = {};
      function i(e2) {
        var r2 = n[e2];
        if (void 0 !== r2) return r2.exports;
        var o2 = (n[e2] = { exports: {} }),
          a = true;
        try {
          t2[e2].call(o2.exports, o2, o2.exports, i), (a = false);
        } finally {
          a && delete n[e2];
        }
        return o2.exports;
      }
      i.ab = '//';
      var o = {};
      (() => {
        Object.defineProperty(o, '__esModule', { value: true }),
          (o.trace =
            o.propagation =
            o.metrics =
            o.diag =
            o.context =
            o.INVALID_SPAN_CONTEXT =
            o.INVALID_TRACEID =
            o.INVALID_SPANID =
            o.isValidSpanId =
            o.isValidTraceId =
            o.isSpanContextValid =
            o.createTraceState =
            o.TraceFlags =
            o.SpanStatusCode =
            o.SpanKind =
            o.SamplingDecision =
            o.ProxyTracerProvider =
            o.ProxyTracer =
            o.defaultTextMapSetter =
            o.defaultTextMapGetter =
            o.ValueType =
            o.createNoopMeter =
            o.DiagLogLevel =
            o.DiagConsoleLogger =
            o.ROOT_CONTEXT =
            o.createContextKey =
            o.baggageEntryMetadataFromString =
              void 0);
        var e2 = i(369);
        Object.defineProperty(o, 'baggageEntryMetadataFromString', {
          enumerable: true,
          get: function () {
            return e2.baggageEntryMetadataFromString;
          }
        });
        var t3 = i(780);
        Object.defineProperty(o, 'createContextKey', {
          enumerable: true,
          get: function () {
            return t3.createContextKey;
          }
        }),
          Object.defineProperty(o, 'ROOT_CONTEXT', {
            enumerable: true,
            get: function () {
              return t3.ROOT_CONTEXT;
            }
          });
        var r2 = i(972);
        Object.defineProperty(o, 'DiagConsoleLogger', {
          enumerable: true,
          get: function () {
            return r2.DiagConsoleLogger;
          }
        });
        var n2 = i(957);
        Object.defineProperty(o, 'DiagLogLevel', {
          enumerable: true,
          get: function () {
            return n2.DiagLogLevel;
          }
        });
        var a = i(102);
        Object.defineProperty(o, 'createNoopMeter', {
          enumerable: true,
          get: function () {
            return a.createNoopMeter;
          }
        });
        var s = i(901);
        Object.defineProperty(o, 'ValueType', {
          enumerable: true,
          get: function () {
            return s.ValueType;
          }
        });
        var l = i(194);
        Object.defineProperty(o, 'defaultTextMapGetter', {
          enumerable: true,
          get: function () {
            return l.defaultTextMapGetter;
          }
        }),
          Object.defineProperty(o, 'defaultTextMapSetter', {
            enumerable: true,
            get: function () {
              return l.defaultTextMapSetter;
            }
          });
        var c = i(125);
        Object.defineProperty(o, 'ProxyTracer', {
          enumerable: true,
          get: function () {
            return c.ProxyTracer;
          }
        });
        var u = i(846);
        Object.defineProperty(o, 'ProxyTracerProvider', {
          enumerable: true,
          get: function () {
            return u.ProxyTracerProvider;
          }
        });
        var d = i(996);
        Object.defineProperty(o, 'SamplingDecision', {
          enumerable: true,
          get: function () {
            return d.SamplingDecision;
          }
        });
        var p = i(357);
        Object.defineProperty(o, 'SpanKind', {
          enumerable: true,
          get: function () {
            return p.SpanKind;
          }
        });
        var f = i(847);
        Object.defineProperty(o, 'SpanStatusCode', {
          enumerable: true,
          get: function () {
            return f.SpanStatusCode;
          }
        });
        var h = i(475);
        Object.defineProperty(o, 'TraceFlags', {
          enumerable: true,
          get: function () {
            return h.TraceFlags;
          }
        });
        var g = i(98);
        Object.defineProperty(o, 'createTraceState', {
          enumerable: true,
          get: function () {
            return g.createTraceState;
          }
        });
        var y = i(139);
        Object.defineProperty(o, 'isSpanContextValid', {
          enumerable: true,
          get: function () {
            return y.isSpanContextValid;
          }
        }),
          Object.defineProperty(o, 'isValidTraceId', {
            enumerable: true,
            get: function () {
              return y.isValidTraceId;
            }
          }),
          Object.defineProperty(o, 'isValidSpanId', {
            enumerable: true,
            get: function () {
              return y.isValidSpanId;
            }
          });
        var m = i(476);
        Object.defineProperty(o, 'INVALID_SPANID', {
          enumerable: true,
          get: function () {
            return m.INVALID_SPANID;
          }
        }),
          Object.defineProperty(o, 'INVALID_TRACEID', {
            enumerable: true,
            get: function () {
              return m.INVALID_TRACEID;
            }
          }),
          Object.defineProperty(o, 'INVALID_SPAN_CONTEXT', {
            enumerable: true,
            get: function () {
              return m.INVALID_SPAN_CONTEXT;
            }
          });
        let v = i(67);
        Object.defineProperty(o, 'context', {
          enumerable: true,
          get: function () {
            return v.context;
          }
        });
        let b = i(506);
        Object.defineProperty(o, 'diag', {
          enumerable: true,
          get: function () {
            return b.diag;
          }
        });
        let w = i(886);
        Object.defineProperty(o, 'metrics', {
          enumerable: true,
          get: function () {
            return w.metrics;
          }
        });
        let _ = i(939);
        Object.defineProperty(o, 'propagation', {
          enumerable: true,
          get: function () {
            return _.propagation;
          }
        });
        let S = i(845);
        Object.defineProperty(o, 'trace', {
          enumerable: true,
          get: function () {
            return S.trace;
          }
        }),
          (o.default = {
            context: v.context,
            diag: b.diag,
            metrics: w.metrics,
            propagation: _.propagation,
            trace: S.trace
          });
      })(),
        (e.exports = o);
    })();
  };
  __namedExportsObject['__chunk_12328'] = (e) => {
    'use strict';
    var t = Object.defineProperty,
      r = Object.getOwnPropertyDescriptor,
      n = Object.getOwnPropertyNames,
      i = Object.prototype.hasOwnProperty,
      o = {};
    function a(e2) {
      var t2;
      let r2 = [
          'path' in e2 && e2.path && `Path=${e2.path}`,
          'expires' in e2 &&
            (e2.expires || 0 === e2.expires) &&
            `Expires=${('number' == typeof e2.expires
              ? new Date(e2.expires)
              : e2.expires
            ).toUTCString()}`,
          'maxAge' in e2 &&
            'number' == typeof e2.maxAge &&
            `Max-Age=${e2.maxAge}`,
          'domain' in e2 && e2.domain && `Domain=${e2.domain}`,
          'secure' in e2 && e2.secure && 'Secure',
          'httpOnly' in e2 && e2.httpOnly && 'HttpOnly',
          'sameSite' in e2 && e2.sameSite && `SameSite=${e2.sameSite}`,
          'partitioned' in e2 && e2.partitioned && 'Partitioned',
          'priority' in e2 && e2.priority && `Priority=${e2.priority}`
        ].filter(Boolean),
        n2 = `${e2.name}=${encodeURIComponent(
          null != (t2 = e2.value) ? t2 : ''
        )}`;
      return 0 === r2.length ? n2 : `${n2}; ${r2.join('; ')}`;
    }
    function s(e2) {
      let t2 = /* @__PURE__ */ new Map();
      for (let r2 of e2.split(/; */)) {
        if (!r2) continue;
        let e3 = r2.indexOf('=');
        if (-1 === e3) {
          t2.set(r2, 'true');
          continue;
        }
        let [n2, i2] = [r2.slice(0, e3), r2.slice(e3 + 1)];
        try {
          t2.set(n2, decodeURIComponent(null != i2 ? i2 : 'true'));
        } catch {}
      }
      return t2;
    }
    function l(e2) {
      var t2, r2;
      if (!e2) return;
      let [[n2, i2], ...o2] = s(e2),
        {
          domain: a2,
          expires: l2,
          httponly: d2,
          maxage: p2,
          path: f,
          samesite: h,
          secure: g,
          partitioned: y,
          priority: m
        } = Object.fromEntries(o2.map(([e3, t3]) => [e3.toLowerCase(), t3]));
      return (function (e3) {
        let t3 = {};
        for (let r3 in e3) e3[r3] && (t3[r3] = e3[r3]);
        return t3;
      })({
        name: n2,
        value: decodeURIComponent(i2),
        domain: a2,
        ...(l2 && { expires: new Date(l2) }),
        ...(d2 && { httpOnly: true }),
        ...('string' == typeof p2 && { maxAge: Number(p2) }),
        path: f,
        ...(h && {
          sameSite: c.includes((t2 = (t2 = h).toLowerCase())) ? t2 : void 0
        }),
        ...(g && { secure: true }),
        ...(m && {
          priority: u.includes((r2 = (r2 = m).toLowerCase())) ? r2 : void 0
        }),
        ...(y && { partitioned: true })
      });
    }
    ((e2, r2) => {
      for (var n2 in r2) t(e2, n2, { get: r2[n2], enumerable: true });
    })(o, {
      RequestCookies: () => d,
      ResponseCookies: () => p,
      parseCookie: () => s,
      parseSetCookie: () => l,
      stringifyCookie: () => a
    }),
      (e.exports = ((e2, o2, a2, s2) => {
        if ((o2 && 'object' == typeof o2) || 'function' == typeof o2)
          for (let l2 of n(o2))
            i.call(e2, l2) ||
              l2 === a2 ||
              t(e2, l2, {
                get: () => o2[l2],
                enumerable: !(s2 = r(o2, l2)) || s2.enumerable
              });
        return e2;
      })(t({}, '__esModule', { value: true }), o));
    var c = ['strict', 'lax', 'none'],
      u = ['low', 'medium', 'high'],
      d = class {
        constructor(e2) {
          (this._parsed = /* @__PURE__ */ new Map()), (this._headers = e2);
          let t2 = e2.get('cookie');
          if (t2)
            for (let [e3, r2] of s(t2))
              this._parsed.set(e3, { name: e3, value: r2 });
        }
        [Symbol.iterator]() {
          return this._parsed[Symbol.iterator]();
        }
        get size() {
          return this._parsed.size;
        }
        get(...e2) {
          let t2 = 'string' == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed);
          if (!e2.length) return r2.map(([e3, t3]) => t3);
          let n2 =
            'string' == typeof e2[0]
              ? e2[0]
              : null == (t2 = e2[0])
              ? void 0
              : t2.name;
          return r2.filter(([e3]) => e3 === n2).map(([e3, t3]) => t3);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2] = 1 === e2.length ? [e2[0].name, e2[0].value] : e2,
            n2 = this._parsed;
          return (
            n2.set(t2, { name: t2, value: r2 }),
            this._headers.set(
              'cookie',
              Array.from(n2)
                .map(([e3, t3]) => a(t3))
                .join('; ')
            ),
            this
          );
        }
        delete(e2) {
          let t2 = this._parsed,
            r2 = Array.isArray(e2)
              ? e2.map((e3) => t2.delete(e3))
              : t2.delete(e2);
          return (
            this._headers.set(
              'cookie',
              Array.from(t2)
                .map(([e3, t3]) => a(t3))
                .join('; ')
            ),
            r2
          );
        }
        clear() {
          return this.delete(Array.from(this._parsed.keys())), this;
        }
        [Symbol.for('edge-runtime.inspect.custom')]() {
          return `RequestCookies ${JSON.stringify(
            Object.fromEntries(this._parsed)
          )}`;
        }
        toString() {
          return [...this._parsed.values()]
            .map((e2) => `${e2.name}=${encodeURIComponent(e2.value)}`)
            .join('; ');
        }
      },
      p = class {
        constructor(e2) {
          var t2, r2, n2;
          (this._parsed = /* @__PURE__ */ new Map()), (this._headers = e2);
          let i2 =
            null !=
            (n2 =
              null !=
              (r2 = null == (t2 = e2.getSetCookie) ? void 0 : t2.call(e2))
                ? r2
                : e2.get('set-cookie'))
              ? n2
              : [];
          for (let e3 of Array.isArray(i2)
            ? i2
            : (function (e4) {
                if (!e4) return [];
                var t3,
                  r3,
                  n3,
                  i3,
                  o2,
                  a2 = [],
                  s2 = 0;
                function l2() {
                  for (; s2 < e4.length && /\s/.test(e4.charAt(s2)); ) s2 += 1;
                  return s2 < e4.length;
                }
                for (; s2 < e4.length; ) {
                  for (t3 = s2, o2 = false; l2(); )
                    if (',' === (r3 = e4.charAt(s2))) {
                      for (
                        n3 = s2, s2 += 1, l2(), i3 = s2;
                        s2 < e4.length &&
                        '=' !== (r3 = e4.charAt(s2)) &&
                        ';' !== r3 &&
                        ',' !== r3;

                      )
                        s2 += 1;
                      s2 < e4.length && '=' === e4.charAt(s2)
                        ? ((o2 = true),
                          (s2 = i3),
                          a2.push(e4.substring(t3, n3)),
                          (t3 = s2))
                        : (s2 = n3 + 1);
                    } else s2 += 1;
                  (!o2 || s2 >= e4.length) &&
                    a2.push(e4.substring(t3, e4.length));
                }
                return a2;
              })(i2)) {
            let t3 = l(e3);
            t3 && this._parsed.set(t3.name, t3);
          }
        }
        get(...e2) {
          let t2 = 'string' == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed.values());
          if (!e2.length) return r2;
          let n2 =
            'string' == typeof e2[0]
              ? e2[0]
              : null == (t2 = e2[0])
              ? void 0
              : t2.name;
          return r2.filter((e3) => e3.name === n2);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2, n2] =
              1 === e2.length ? [e2[0].name, e2[0].value, e2[0]] : e2,
            i2 = this._parsed;
          return (
            i2.set(
              t2,
              (function (e3 = { name: '', value: '' }) {
                return (
                  'number' == typeof e3.expires &&
                    (e3.expires = new Date(e3.expires)),
                  e3.maxAge &&
                    (e3.expires = new Date(Date.now() + 1e3 * e3.maxAge)),
                  (null === e3.path || void 0 === e3.path) && (e3.path = '/'),
                  e3
                );
              })({ name: t2, value: r2, ...n2 })
            ),
            (function (e3, t3) {
              for (let [, r3] of (t3.delete('set-cookie'), e3)) {
                let e4 = a(r3);
                t3.append('set-cookie', e4);
              }
            })(i2, this._headers),
            this
          );
        }
        delete(...e2) {
          let [t2, r2, n2] =
            'string' == typeof e2[0]
              ? [e2[0]]
              : [e2[0].name, e2[0].path, e2[0].domain];
          return this.set({
            name: t2,
            path: r2,
            domain: n2,
            value: '',
            expires: new Date(0)
          });
        }
        [Symbol.for('edge-runtime.inspect.custom')]() {
          return `ResponseCookies ${JSON.stringify(
            Object.fromEntries(this._parsed)
          )}`;
        }
        toString() {
          return [...this._parsed.values()].map(a).join('; ');
        }
      };
  };
  __namedExportsObject['__chunk_52504'] = (e, t) => {
    'use strict';
    (t.Q = function (e2, t2) {
      if ('string' != typeof e2)
        throw TypeError('argument str must be a string');
      for (var r2 = {}, n2 = (t2 || {}).decode || i, o2 = 0; o2 < e2.length; ) {
        var a = e2.indexOf('=', o2);
        if (-1 === a) break;
        var s = e2.indexOf(';', o2);
        if (-1 === s) s = e2.length;
        else if (s < a) {
          o2 = e2.lastIndexOf(';', a - 1) + 1;
          continue;
        }
        var l = e2.slice(o2, a).trim();
        if (void 0 === r2[l]) {
          var c = e2.slice(a + 1, s).trim();
          34 === c.charCodeAt(0) && (c = c.slice(1, -1)),
            (r2[l] = (function (e3, t3) {
              try {
                return t3(e3);
              } catch (t4) {
                return e3;
              }
            })(c, n2));
        }
        o2 = s + 1;
      }
      return r2;
    }),
      (t.q = function (e2, t2, i2) {
        var a = i2 || {},
          s = a.encode || o;
        if ('function' != typeof s) throw TypeError('option encode is invalid');
        if (!n.test(e2)) throw TypeError('argument name is invalid');
        var l = s(t2);
        if (l && !n.test(l)) throw TypeError('argument val is invalid');
        var c = e2 + '=' + l;
        if (null != a.maxAge) {
          var u = a.maxAge - 0;
          if (isNaN(u) || !isFinite(u))
            throw TypeError('option maxAge is invalid');
          c += '; Max-Age=' + Math.floor(u);
        }
        if (a.domain) {
          if (!n.test(a.domain)) throw TypeError('option domain is invalid');
          c += '; Domain=' + a.domain;
        }
        if (a.path) {
          if (!n.test(a.path)) throw TypeError('option path is invalid');
          c += '; Path=' + a.path;
        }
        if (a.expires) {
          var d = a.expires;
          if (
            ('[object Date]' !== r.call(d) && !(d instanceof Date)) ||
            isNaN(d.valueOf())
          )
            throw TypeError('option expires is invalid');
          c += '; Expires=' + d.toUTCString();
        }
        if (
          (a.httpOnly && (c += '; HttpOnly'),
          a.secure && (c += '; Secure'),
          a.partitioned && (c += '; Partitioned'),
          a.priority)
        )
          switch (
            'string' == typeof a.priority
              ? a.priority.toLowerCase()
              : a.priority
          ) {
            case 'low':
              c += '; Priority=Low';
              break;
            case 'medium':
              c += '; Priority=Medium';
              break;
            case 'high':
              c += '; Priority=High';
              break;
            default:
              throw TypeError('option priority is invalid');
          }
        if (a.sameSite)
          switch (
            'string' == typeof a.sameSite
              ? a.sameSite.toLowerCase()
              : a.sameSite
          ) {
            case true:
            case 'strict':
              c += '; SameSite=Strict';
              break;
            case 'lax':
              c += '; SameSite=Lax';
              break;
            case 'none':
              c += '; SameSite=None';
              break;
            default:
              throw TypeError('option sameSite is invalid');
          }
        return c;
      });
    var r = Object.prototype.toString,
      n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function i(e2) {
      return -1 !== e2.indexOf('%') ? decodeURIComponent(e2) : e2;
    }
    function o(e2) {
      return encodeURIComponent(e2);
    }
  };
  return __namedExportsObject;
};
export { __getNamedExports };
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
