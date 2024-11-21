var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) =>
  function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res;
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (
  __copyProps(target, mod, 'default'),
  secondTarget && __copyProps(secondTarget, mod, 'default')
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// built-in-modules:node:buffer
var node_buffer_exports = {};
import * as node_buffer_star from 'node:buffer';
var init_node_buffer = __esm({
  'built-in-modules:node:buffer'() {
    __reExport(node_buffer_exports, node_buffer_star);
  }
});

// built-in-modules:node:async_hooks
var node_async_hooks_exports = {};
import * as node_async_hooks_star from 'node:async_hooks';
var init_node_async_hooks = __esm({
  'built-in-modules:node:async_hooks'() {
    __reExport(node_async_hooks_exports, node_async_hooks_star);
  }
});

// <stdin>
var __namedExportsObject = {};
var __getNamedExports = (self, globalThis, global) => {
  __namedExportsObject['__chunk_26195'] = (e) => {
    'use strict';
    e.exports = (init_node_buffer(), __toCommonJS(node_buffer_exports));
  };
  __namedExportsObject['__chunk_2067'] = (e) => {
    'use strict';
    e.exports =
      (init_node_async_hooks(), __toCommonJS(node_async_hooks_exports));
  };
  __namedExportsObject['__chunk_649'] = (e, t, r) => {
    'use strict';
    r.d(t, { A: () => n });
    let n = (0, r(55612).P)();
  };
  __namedExportsObject['__chunk_4704'] = (e, t, r) => {
    'use strict';
    r.d(t, { F: () => n });
    let n = (0, r(55612).P)();
  };
  __namedExportsObject['__chunk_55612'] = (e, t, r) => {
    'use strict';
    r.d(t, { P: () => a });
    let n = Error(
      'Invariant: AsyncLocalStorage accessed in runtime where it is not available'
    );
    class i {
      disable() {
        throw n;
      }
      getStore() {}
      run() {
        throw n;
      }
      exit() {
        throw n;
      }
      enterWith() {
        throw n;
      }
    }
    let o = globalThis.AsyncLocalStorage;
    function a() {
      return o ? new o() : new i();
    }
  };
  __namedExportsObject['__chunk_87792'] = (e, t, r) => {
    'use strict';
    r.d(t, { W: () => n });
    let n = (0, r(55612).P)();
  };
  return __namedExportsObject;
};
export { __getNamedExports };
