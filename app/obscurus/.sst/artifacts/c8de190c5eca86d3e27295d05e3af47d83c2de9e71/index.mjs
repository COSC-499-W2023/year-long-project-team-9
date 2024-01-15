import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// node_modules/sst/support/rds-migrator/index.mjs
import ZV from "crypto";
import a$ from "crypto";
import l$ from "crypto";
import VZ from "path";
import $Z from "url";
var fF = Object.create;
var xu = Object.defineProperty;
var mF = Object.getOwnPropertyDescriptor;
var hF = Object.getOwnPropertyNames;
var _F = Object.getPrototypeOf;
var yF = Object.prototype.hasOwnProperty;
var D = ((e35) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e35, { get: (t, r) => (typeof __require < "u" ? __require : t)[r] }) : e35)(function(e35) {
  if (typeof __require < "u")
    return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + e35 + '" is not supported');
});
var Be = /* @__PURE__ */ __name((e35, t) => () => (e35 && (t = e35(e35 = 0)), t), "Be");
var c = /* @__PURE__ */ __name((e35, t) => () => (t || e35((t = { exports: {} }).exports, t), t.exports), "c");
var i_ = /* @__PURE__ */ __name((e35, t) => {
  for (var r in t)
    xu(e35, r, { get: t[r], enumerable: true });
}, "i_");
var OS = /* @__PURE__ */ __name((e35, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of hF(t))
      !yF.call(e35, i) && i !== r && xu(e35, i, { get: () => t[i], enumerable: !(n = mF(t, i)) || n.enumerable });
  return e35;
}, "OS");
var gF = /* @__PURE__ */ __name((e35, t, r) => (r = e35 != null ? fF(_F(e35)) : {}, OS(t || !e35 || !e35.__esModule ? xu(r, "default", { value: e35, enumerable: true }) : r, e35)), "gF");
var S = /* @__PURE__ */ __name((e35) => OS(xu({}, "__esModule", { value: true }), e35), "S");
var N = {};
i_(N, { __addDisposableResource: () => W0, __assign: () => yd, __asyncDelegator: () => M0, __asyncGenerator: () => q0, __asyncValues: () => D0, __await: () => Ro, __awaiter: () => O0, __classPrivateFieldGet: () => j0, __classPrivateFieldIn: () => B0, __classPrivateFieldSet: () => U0, __createBinding: () => vd, __decorate: () => b0, __disposeResources: () => V0, __esDecorate: () => oL, __exportStar: () => T0, __extends: () => S0, __generator: () => A0, __importDefault: () => L0, __importStar: () => F0, __makeTemplateObject: () => k0, __metadata: () => C0, __param: () => x0, __propKey: () => aL, __read: () => V_, __rest: () => N0, __runInitializers: () => sL, __setFunctionName: () => cL, __spread: () => P0, __spreadArray: () => R0, __spreadArrays: () => I0, __values: () => gd, default: () => lL });
function S0(e35, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  W_(e35, t);
  function r() {
    this.constructor = e35;
  }
  __name(r, "r");
  e35.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
__name(S0, "S0");
function N0(e35, t) {
  var r = {};
  for (var n in e35)
    Object.prototype.hasOwnProperty.call(e35, n) && t.indexOf(n) < 0 && (r[n] = e35[n]);
  if (e35 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e35); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e35, n[i]) && (r[n[i]] = e35[n[i]]);
  return r;
}
__name(N0, "N0");
function b0(e35, t, r, n) {
  var i = arguments.length, o = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e35, t, r, n);
  else
    for (var a = e35.length - 1; a >= 0; a--)
      (s = e35[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, r, o) : s(t, r)) || o);
  return i > 3 && o && Object.defineProperty(t, r, o), o;
}
__name(b0, "b0");
function x0(e35, t) {
  return function(r, n) {
    t(r, n, e35);
  };
}
__name(x0, "x0");
function oL(e35, t, r, n, i, o) {
  function s(T) {
    if (T !== void 0 && typeof T != "function")
      throw new TypeError("Function expected");
    return T;
  }
  __name(s, "s");
  for (var a = n.kind, u = a === "getter" ? "get" : a === "setter" ? "set" : "value", l = !t && e35 ? n.static ? e35 : e35.prototype : null, p = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), f, m = false, h = r.length - 1; h >= 0; h--) {
    var y = {};
    for (var v in n)
      y[v] = v === "access" ? {} : n[v];
    for (var v in n.access)
      y.access[v] = n.access[v];
    y.addInitializer = function(T) {
      if (m)
        throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(s(T || null));
    };
    var E = (0, r[h])(a === "accessor" ? { get: p.get, set: p.set } : p[u], y);
    if (a === "accessor") {
      if (E === void 0)
        continue;
      if (E === null || typeof E != "object")
        throw new TypeError("Object expected");
      (f = s(E.get)) && (p.get = f), (f = s(E.set)) && (p.set = f), (f = s(E.init)) && i.unshift(f);
    } else
      (f = s(E)) && (a === "field" ? i.unshift(f) : p[u] = f);
  }
  l && Object.defineProperty(l, n.name, p), m = true;
}
__name(oL, "oL");
function sL(e35, t, r) {
  for (var n = arguments.length > 2, i = 0; i < t.length; i++)
    r = n ? t[i].call(e35, r) : t[i].call(e35);
  return n ? r : void 0;
}
__name(sL, "sL");
function aL(e35) {
  return typeof e35 == "symbol" ? e35 : "".concat(e35);
}
__name(aL, "aL");
function cL(e35, t, r) {
  return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e35, "name", { configurable: true, value: r ? "".concat(r, " ", t) : t });
}
__name(cL, "cL");
function C0(e35, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e35, t);
}
__name(C0, "C0");
function O0(e35, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(s) {
      s(o);
    });
  }
  __name(i, "i");
  return new (r || (r = Promise))(function(o, s) {
    function a(p) {
      try {
        l(n.next(p));
      } catch (f) {
        s(f);
      }
    }
    __name(a, "a");
    function u(p) {
      try {
        l(n.throw(p));
      } catch (f) {
        s(f);
      }
    }
    __name(u, "u");
    function l(p) {
      p.done ? o(p.value) : i(p.value).then(a, u);
    }
    __name(l, "l");
    l((n = n.apply(e35, t || [])).next());
  });
}
__name(O0, "O0");
function A0(e35, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(p) {
      return u([l, p]);
    };
  }
  __name(a, "a");
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done)
          return o;
        switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: false };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = l;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(l);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e35, r);
      } catch (p) {
        l = [6, p], i = 0;
      } finally {
        n = o = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: true };
  }
  __name(u, "u");
}
__name(A0, "A0");
function T0(e35, t) {
  for (var r in e35)
    r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && vd(t, e35, r);
}
__name(T0, "T0");
function gd(e35) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e35[t], n = 0;
  if (r)
    return r.call(e35);
  if (e35 && typeof e35.length == "number")
    return { next: function() {
      return e35 && n >= e35.length && (e35 = void 0), { value: e35 && e35[n++], done: !e35 };
    } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(gd, "gd");
function V_(e35, t) {
  var r = typeof Symbol == "function" && e35[Symbol.iterator];
  if (!r)
    return e35;
  var n = r.call(e35), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}
__name(V_, "V_");
function P0() {
  for (var e35 = [], t = 0; t < arguments.length; t++)
    e35 = e35.concat(V_(arguments[t]));
  return e35;
}
__name(P0, "P0");
function I0() {
  for (var e35 = 0, t = 0, r = arguments.length; t < r; t++)
    e35 += arguments[t].length;
  for (var n = Array(e35), i = 0, t = 0; t < r; t++)
    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
      n[i] = o[s];
  return n;
}
__name(I0, "I0");
function R0(e35, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e35.concat(o || Array.prototype.slice.call(t));
}
__name(R0, "R0");
function Ro(e35) {
  return this instanceof Ro ? (this.v = e35, this) : new Ro(e35);
}
__name(Ro, "Ro");
function q0(e35, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e35, t || []), i, o = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(m) {
    n[m] && (i[m] = function(h) {
      return new Promise(function(y, v) {
        o.push([m, h, y, v]) > 1 || a(m, h);
      });
    });
  }
  __name(s, "s");
  function a(m, h) {
    try {
      u(n[m](h));
    } catch (y) {
      f(o[0][3], y);
    }
  }
  __name(a, "a");
  function u(m) {
    m.value instanceof Ro ? Promise.resolve(m.value.v).then(l, p) : f(o[0][2], m);
  }
  __name(u, "u");
  function l(m) {
    a("next", m);
  }
  __name(l, "l");
  function p(m) {
    a("throw", m);
  }
  __name(p, "p");
  function f(m, h) {
    m(h), o.shift(), o.length && a(o[0][0], o[0][1]);
  }
  __name(f, "f");
}
__name(q0, "q0");
function M0(e35) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, o) {
    t[i] = e35[i] ? function(s) {
      return (r = !r) ? { value: Ro(e35[i](s)), done: false } : o ? o(s) : s;
    } : o;
  }
  __name(n, "n");
}
__name(M0, "M0");
function D0(e35) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e35[Symbol.asyncIterator], r;
  return t ? t.call(e35) : (e35 = typeof gd == "function" ? gd(e35) : e35[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(o) {
    r[o] = e35[o] && function(s) {
      return new Promise(function(a, u) {
        s = e35[o](s), i(a, u, s.done, s.value);
      });
    };
  }
  __name(n, "n");
  function i(o, s, a, u) {
    Promise.resolve(u).then(function(l) {
      o({ value: l, done: a });
    }, s);
  }
  __name(i, "i");
}
__name(D0, "D0");
function k0(e35, t) {
  return Object.defineProperty ? Object.defineProperty(e35, "raw", { value: t }) : e35.raw = t, e35;
}
__name(k0, "k0");
function F0(e35) {
  if (e35 && e35.__esModule)
    return e35;
  var t = {};
  if (e35 != null)
    for (var r in e35)
      r !== "default" && Object.prototype.hasOwnProperty.call(e35, r) && vd(t, e35, r);
  return uL(t, e35), t;
}
__name(F0, "F0");
function L0(e35) {
  return e35 && e35.__esModule ? e35 : { default: e35 };
}
__name(L0, "L0");
function j0(e35, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e35 !== t || !n : !t.has(e35))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e35) : n ? n.value : t.get(e35);
}
__name(j0, "j0");
function U0(e35, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e35 !== t || !i : !t.has(e35))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e35, r) : i ? i.value = r : t.set(e35, r), r;
}
__name(U0, "U0");
function B0(e35, t) {
  if (t === null || typeof t != "object" && typeof t != "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e35 == "function" ? t === e35 : e35.has(t);
}
__name(B0, "B0");
function W0(e35, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function")
      throw new TypeError("Object expected.");
    var n;
    if (r) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      n = t[Symbol.dispose];
    }
    if (typeof n != "function")
      throw new TypeError("Object not disposable.");
    e35.stack.push({ value: t, dispose: n, async: r });
  } else
    r && e35.stack.push({ async: true });
  return t;
}
__name(W0, "W0");
function V0(e35) {
  function t(n) {
    e35.error = e35.hasError ? new dL(n, e35.error, "An error was suppressed during disposal.") : n, e35.hasError = true;
  }
  __name(t, "t");
  function r() {
    for (; e35.stack.length; ) {
      var n = e35.stack.pop();
      try {
        var i = n.dispose && n.dispose.call(n.value);
        if (n.async)
          return Promise.resolve(i).then(r, function(o) {
            return t(o), r();
          });
      } catch (o) {
        t(o);
      }
    }
    if (e35.hasError)
      throw e35.error;
  }
  __name(r, "r");
  return r();
}
__name(V0, "V0");
var W_;
var yd;
var vd;
var uL;
var dL;
var lL;
var b = Be(() => {
  W_ = /* @__PURE__ */ __name(function(e35, t) {
    return W_ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
      r.__proto__ = n;
    } || function(r, n) {
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
    }, W_(e35, t);
  }, "W_");
  yd = /* @__PURE__ */ __name(function() {
    return yd = Object.assign || function(t) {
      for (var r, n = 1, i = arguments.length; n < i; n++) {
        r = arguments[n];
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
      }
      return t;
    }, yd.apply(this, arguments);
  }, "yd");
  vd = Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  };
  uL = Object.create ? function(e35, t) {
    Object.defineProperty(e35, "default", { enumerable: true, value: t });
  } : function(e35, t) {
    e35.default = t;
  };
  dL = typeof SuppressedError == "function" ? SuppressedError : function(e35, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e35, n.suppressed = t, n;
  };
  lL = { __extends: S0, __assign: yd, __rest: N0, __decorate: b0, __param: x0, __metadata: C0, __awaiter: O0, __generator: A0, __createBinding: vd, __exportStar: T0, __values: gd, __read: V_, __spread: P0, __spreadArrays: I0, __spreadArray: R0, __await: Ro, __asyncGenerator: q0, __asyncDelegator: M0, __asyncValues: D0, __makeTemplateObject: k0, __importStar: F0, __importDefault: L0, __classPrivateFieldGet: j0, __classPrivateFieldSet: U0, __classPrivateFieldIn: B0, __addDisposableResource: W0, __disposeResources: V0 };
});
var $0 = c((qo) => {
  "use strict";
  Object.defineProperty(qo, "__esModule", { value: true });
  qo.resolveHttpHandlerRuntimeConfig = qo.getHttpHandlerExtensionConfiguration = void 0;
  var pL = /* @__PURE__ */ __name((e35) => {
    let t = e35.httpHandler;
    return { setHttpHandler(r) {
      t = r;
    }, httpHandler() {
      return t;
    }, updateHttpClientConfig(r, n) {
      t.updateHttpClientConfig(r, n);
    }, httpHandlerConfigs() {
      return t.httpHandlerConfigs();
    } };
  }, "pL");
  qo.getHttpHandlerExtensionConfiguration = pL;
  var fL = /* @__PURE__ */ __name((e35) => ({ httpHandler: e35.httpHandler() }), "fL");
  qo.resolveHttpHandlerRuntimeConfig = fL;
});
var z0 = c(($_) => {
  "use strict";
  Object.defineProperty($_, "__esModule", { value: true });
  var mL = (b(), S(N));
  mL.__exportStar($0(), $_);
});
var G0 = c((H0) => {
  "use strict";
  Object.defineProperty(H0, "__esModule", { value: true });
});
var Q0 = c((ic) => {
  "use strict";
  Object.defineProperty(ic, "__esModule", { value: true });
  ic.HttpAuthLocation = void 0;
  var hL;
  (function(e35) {
    e35.HEADER = "header", e35.QUERY = "query";
  })(hL = ic.HttpAuthLocation || (ic.HttpAuthLocation = {}));
});
var Y0 = c((K0) => {
  "use strict";
  Object.defineProperty(K0, "__esModule", { value: true });
});
var X0 = c((J0) => {
  "use strict";
  Object.defineProperty(J0, "__esModule", { value: true });
});
var eN = c((Z0) => {
  "use strict";
  Object.defineProperty(Z0, "__esModule", { value: true });
});
var rN = c((tN) => {
  "use strict";
  Object.defineProperty(tN, "__esModule", { value: true });
});
var iN = c((nN) => {
  "use strict";
  Object.defineProperty(nN, "__esModule", { value: true });
});
var sN = c((oN) => {
  "use strict";
  Object.defineProperty(oN, "__esModule", { value: true });
});
var cN = c((aN) => {
  "use strict";
  Object.defineProperty(aN, "__esModule", { value: true });
});
var uN = c((oc) => {
  "use strict";
  Object.defineProperty(oc, "__esModule", { value: true });
  var z_ = (b(), S(N));
  z_.__exportStar(iN(), oc);
  z_.__exportStar(sN(), oc);
  z_.__exportStar(cN(), oc);
});
var lN = c((dN) => {
  "use strict";
  Object.defineProperty(dN, "__esModule", { value: true });
});
var fN = c((pN) => {
  "use strict";
  Object.defineProperty(pN, "__esModule", { value: true });
});
var mN = c((sc) => {
  "use strict";
  Object.defineProperty(sc, "__esModule", { value: true });
  sc.EndpointURLScheme = void 0;
  var _L;
  (function(e35) {
    e35.HTTP = "http", e35.HTTPS = "https";
  })(_L = sc.EndpointURLScheme || (sc.EndpointURLScheme = {}));
});
var _N = c((hN) => {
  "use strict";
  Object.defineProperty(hN, "__esModule", { value: true });
});
var gN = c((yN) => {
  "use strict";
  Object.defineProperty(yN, "__esModule", { value: true });
});
var EN = c((vN) => {
  "use strict";
  Object.defineProperty(vN, "__esModule", { value: true });
});
var SN = c((wN) => {
  "use strict";
  Object.defineProperty(wN, "__esModule", { value: true });
});
var bN = c((NN) => {
  "use strict";
  Object.defineProperty(NN, "__esModule", { value: true });
});
var xN = c((Ii) => {
  "use strict";
  Object.defineProperty(Ii, "__esModule", { value: true });
  var ac = (b(), S(N));
  ac.__exportStar(_N(), Ii);
  ac.__exportStar(gN(), Ii);
  ac.__exportStar(EN(), Ii);
  ac.__exportStar(SN(), Ii);
  ac.__exportStar(bN(), Ii);
});
var ON = c((CN) => {
  "use strict";
  Object.defineProperty(CN, "__esModule", { value: true });
});
var G_ = c((tn) => {
  "use strict";
  Object.defineProperty(tn, "__esModule", { value: true });
  tn.resolveChecksumRuntimeConfig = tn.getChecksumConfiguration = tn.AlgorithmId = void 0;
  var H_;
  (function(e35) {
    e35.MD5 = "md5", e35.CRC32 = "crc32", e35.CRC32C = "crc32c", e35.SHA1 = "sha1", e35.SHA256 = "sha256";
  })(H_ = tn.AlgorithmId || (tn.AlgorithmId = {}));
  var yL = /* @__PURE__ */ __name((e35) => {
    let t = [];
    return e35.sha256 !== void 0 && t.push({ algorithmId: () => H_.SHA256, checksumConstructor: () => e35.sha256 }), e35.md5 != null && t.push({ algorithmId: () => H_.MD5, checksumConstructor: () => e35.md5 }), { _checksumAlgorithms: t, addChecksumAlgorithm(r) {
      this._checksumAlgorithms.push(r);
    }, checksumAlgorithms() {
      return this._checksumAlgorithms;
    } };
  }, "yL");
  tn.getChecksumConfiguration = yL;
  var gL = /* @__PURE__ */ __name((e35) => {
    let t = {};
    return e35.checksumAlgorithms().forEach((r) => {
      t[r.algorithmId()] = r.checksumConstructor();
    }), t;
  }, "gL");
  tn.resolveChecksumRuntimeConfig = gL;
});
var TN = c((Mo) => {
  "use strict";
  Object.defineProperty(Mo, "__esModule", { value: true });
  Mo.resolveDefaultRuntimeConfig = Mo.getDefaultClientConfiguration = void 0;
  var AN = G_(), vL = /* @__PURE__ */ __name((e35) => ({ ...(0, AN.getChecksumConfiguration)(e35) }), "vL");
  Mo.getDefaultClientConfiguration = vL;
  var EL = /* @__PURE__ */ __name((e35) => ({ ...(0, AN.resolveChecksumRuntimeConfig)(e35) }), "EL");
  Mo.resolveDefaultRuntimeConfig = EL;
});
var IN = c((PN) => {
  "use strict";
  Object.defineProperty(PN, "__esModule", { value: true });
});
var qN = c((Do) => {
  "use strict";
  Object.defineProperty(Do, "__esModule", { value: true });
  Do.AlgorithmId = void 0;
  var RN = (b(), S(N));
  RN.__exportStar(TN(), Do);
  RN.__exportStar(IN(), Do);
  var wL = G_();
  Object.defineProperty(Do, "AlgorithmId", { enumerable: true, get: function() {
    return wL.AlgorithmId;
  } });
});
var MN = c((cc) => {
  "use strict";
  Object.defineProperty(cc, "__esModule", { value: true });
  cc.FieldPosition = void 0;
  var SL;
  (function(e35) {
    e35[e35.HEADER = 0] = "HEADER", e35[e35.TRAILER = 1] = "TRAILER";
  })(SL = cc.FieldPosition || (cc.FieldPosition = {}));
});
var kN = c((DN) => {
  "use strict";
  Object.defineProperty(DN, "__esModule", { value: true });
});
var LN = c((FN) => {
  "use strict";
  Object.defineProperty(FN, "__esModule", { value: true });
});
var UN = c((Ed) => {
  "use strict";
  Object.defineProperty(Ed, "__esModule", { value: true });
  var jN = (b(), S(N));
  jN.__exportStar(kN(), Ed);
  jN.__exportStar(LN(), Ed);
});
var WN = c((BN) => {
  "use strict";
  Object.defineProperty(BN, "__esModule", { value: true });
});
var VN = c((wd) => {
  "use strict";
  Object.defineProperty(wd, "__esModule", { value: true });
  wd.SMITHY_CONTEXT_KEY = void 0;
  wd.SMITHY_CONTEXT_KEY = "__smithy_context";
});
var zN = c(($N) => {
  "use strict";
  Object.defineProperty($N, "__esModule", { value: true });
});
var HN = c((uc) => {
  "use strict";
  Object.defineProperty(uc, "__esModule", { value: true });
  uc.IniSectionType = void 0;
  var NL;
  (function(e35) {
    e35.PROFILE = "profile", e35.SSO_SESSION = "sso-session", e35.SERVICES = "services";
  })(NL = uc.IniSectionType || (uc.IniSectionType = {}));
});
var QN = c((GN) => {
  "use strict";
  Object.defineProperty(GN, "__esModule", { value: true });
});
var YN = c((KN) => {
  "use strict";
  Object.defineProperty(KN, "__esModule", { value: true });
});
var XN = c((JN) => {
  "use strict";
  Object.defineProperty(JN, "__esModule", { value: true });
});
var eb = c((ZN) => {
  "use strict";
  Object.defineProperty(ZN, "__esModule", { value: true });
});
var rb = c((tb) => {
  "use strict";
  Object.defineProperty(tb, "__esModule", { value: true });
});
var ib = c((nb) => {
  "use strict";
  Object.defineProperty(nb, "__esModule", { value: true });
});
var sb = c((ob) => {
  "use strict";
  Object.defineProperty(ob, "__esModule", { value: true });
});
var cb = c((ab) => {
  "use strict";
  Object.defineProperty(ab, "__esModule", { value: true });
});
var db = c((ub) => {
  "use strict";
  Object.defineProperty(ub, "__esModule", { value: true });
});
var lb = c((dc) => {
  "use strict";
  Object.defineProperty(dc, "__esModule", { value: true });
  dc.RequestHandlerProtocol = void 0;
  var bL;
  (function(e35) {
    e35.HTTP_0_9 = "http/0.9", e35.HTTP_1_0 = "http/1.0", e35.TDS_8_0 = "tds/8.0";
  })(bL = dc.RequestHandlerProtocol || (dc.RequestHandlerProtocol = {}));
});
var fb = c((pb) => {
  "use strict";
  Object.defineProperty(pb, "__esModule", { value: true });
});
var hb = c((mb) => {
  "use strict";
  Object.defineProperty(mb, "__esModule", { value: true });
});
var yb = c((_b) => {
  "use strict";
  Object.defineProperty(_b, "__esModule", { value: true });
});
var vb = c((gb) => {
  "use strict";
  Object.defineProperty(gb, "__esModule", { value: true });
});
var wb = c((Eb) => {
  "use strict";
  Object.defineProperty(Eb, "__esModule", { value: true });
});
var K = c((B) => {
  "use strict";
  Object.defineProperty(B, "__esModule", { value: true });
  var V = (b(), S(N));
  V.__exportStar(G0(), B);
  V.__exportStar(Q0(), B);
  V.__exportStar(Y0(), B);
  V.__exportStar(X0(), B);
  V.__exportStar(eN(), B);
  V.__exportStar(rN(), B);
  V.__exportStar(uN(), B);
  V.__exportStar(lN(), B);
  V.__exportStar(fN(), B);
  V.__exportStar(mN(), B);
  V.__exportStar(xN(), B);
  V.__exportStar(ON(), B);
  V.__exportStar(qN(), B);
  V.__exportStar(MN(), B);
  V.__exportStar(UN(), B);
  V.__exportStar(WN(), B);
  V.__exportStar(VN(), B);
  V.__exportStar(zN(), B);
  V.__exportStar(HN(), B);
  V.__exportStar(QN(), B);
  V.__exportStar(YN(), B);
  V.__exportStar(XN(), B);
  V.__exportStar(eb(), B);
  V.__exportStar(rb(), B);
  V.__exportStar(ib(), B);
  V.__exportStar(sb(), B);
  V.__exportStar(cb(), B);
  V.__exportStar(db(), B);
  V.__exportStar(lb(), B);
  V.__exportStar(fb(), B);
  V.__exportStar(hb(), B);
  V.__exportStar(yb(), B);
  V.__exportStar(vb(), B);
  V.__exportStar(wb(), B);
});
var Sb = c((Sd) => {
  "use strict";
  Object.defineProperty(Sd, "__esModule", { value: true });
  Sd.Field = void 0;
  var xL = K(), Q_ = class {
    static {
      __name(this, "Q_");
    }
    constructor({ name: t, kind: r = xL.FieldPosition.HEADER, values: n = [] }) {
      this.name = t, this.kind = r, this.values = n;
    }
    add(t) {
      this.values.push(t);
    }
    set(t) {
      this.values = t;
    }
    remove(t) {
      this.values = this.values.filter((r) => r !== t);
    }
    toString() {
      return this.values.map((t) => t.includes(",") || t.includes(" ") ? `"${t}"` : t).join(", ");
    }
    get() {
      return this.values;
    }
  };
  Sd.Field = Q_;
});
var Nb = c((Nd) => {
  "use strict";
  Object.defineProperty(Nd, "__esModule", { value: true });
  Nd.Fields = void 0;
  var K_ = class {
    static {
      __name(this, "K_");
    }
    constructor({ fields: t = [], encoding: r = "utf-8" }) {
      this.entries = {}, t.forEach(this.setField.bind(this)), this.encoding = r;
    }
    setField(t) {
      this.entries[t.name.toLowerCase()] = t;
    }
    getField(t) {
      return this.entries[t.toLowerCase()];
    }
    removeField(t) {
      delete this.entries[t.toLowerCase()];
    }
    getByType(t) {
      return Object.values(this.entries).filter((r) => r.kind === t);
    }
  };
  Nd.Fields = K_;
});
var xb = c((bb) => {
  "use strict";
  Object.defineProperty(bb, "__esModule", { value: true });
});
var Cb = c((bd) => {
  "use strict";
  Object.defineProperty(bd, "__esModule", { value: true });
  bd.HttpRequest = void 0;
  var Y_ = class e35 {
    static {
      __name(this, "e");
    }
    constructor(t) {
      this.method = t.method || "GET", this.hostname = t.hostname || "localhost", this.port = t.port, this.query = t.query || {}, this.headers = t.headers || {}, this.body = t.body, this.protocol = t.protocol ? t.protocol.slice(-1) !== ":" ? `${t.protocol}:` : t.protocol : "https:", this.path = t.path ? t.path.charAt(0) !== "/" ? `/${t.path}` : t.path : "/", this.username = t.username, this.password = t.password, this.fragment = t.fragment;
    }
    static isInstance(t) {
      if (!t)
        return false;
      let r = t;
      return "method" in r && "protocol" in r && "hostname" in r && "path" in r && typeof r.query == "object" && typeof r.headers == "object";
    }
    clone() {
      let t = new e35({ ...this, headers: { ...this.headers } });
      return t.query && (t.query = CL(t.query)), t;
    }
  };
  bd.HttpRequest = Y_;
  function CL(e35) {
    return Object.keys(e35).reduce((t, r) => {
      let n = e35[r];
      return { ...t, [r]: Array.isArray(n) ? [...n] : n };
    }, {});
  }
  __name(CL, "CL");
});
var Ob = c((xd) => {
  "use strict";
  Object.defineProperty(xd, "__esModule", { value: true });
  xd.HttpResponse = void 0;
  var J_ = class {
    static {
      __name(this, "J_");
    }
    constructor(t) {
      this.statusCode = t.statusCode, this.reason = t.reason, this.headers = t.headers || {}, this.body = t.body;
    }
    static isInstance(t) {
      if (!t)
        return false;
      let r = t;
      return typeof r.statusCode == "number" && typeof r.headers == "object";
    }
  };
  xd.HttpResponse = J_;
});
var Ab = c((Cd) => {
  "use strict";
  Object.defineProperty(Cd, "__esModule", { value: true });
  Cd.isValidHostname = void 0;
  function OL(e35) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e35);
  }
  __name(OL, "OL");
  Cd.isValidHostname = OL;
});
var Pb = c((Tb) => {
  "use strict";
  Object.defineProperty(Tb, "__esModule", { value: true });
});
var Me = c((yr) => {
  "use strict";
  Object.defineProperty(yr, "__esModule", { value: true });
  var Mn = (b(), S(N));
  Mn.__exportStar(z0(), yr);
  Mn.__exportStar(Sb(), yr);
  Mn.__exportStar(Nb(), yr);
  Mn.__exportStar(xb(), yr);
  Mn.__exportStar(Cb(), yr);
  Mn.__exportStar(Ob(), yr);
  Mn.__exportStar(Ab(), yr);
  Mn.__exportStar(Pb(), yr);
});
var lc = c((Mt) => {
  "use strict";
  Object.defineProperty(Mt, "__esModule", { value: true });
  Mt.getHostHeaderPlugin = Mt.hostHeaderMiddlewareOptions = Mt.hostHeaderMiddleware = Mt.resolveHostHeaderConfig = void 0;
  var AL = Me();
  function TL(e35) {
    return e35;
  }
  __name(TL, "TL");
  Mt.resolveHostHeaderConfig = TL;
  var PL = /* @__PURE__ */ __name((e35) => (t) => async (r) => {
    if (!AL.HttpRequest.isInstance(r.request))
      return t(r);
    let { request: n } = r, { handlerProtocol: i = "" } = e35.requestHandler.metadata || {};
    if (i.indexOf("h2") >= 0 && !n.headers[":authority"])
      delete n.headers.host, n.headers[":authority"] = n.hostname + (n.port ? ":" + n.port : "");
    else if (!n.headers.host) {
      let o = n.hostname;
      n.port != null && (o += `:${n.port}`), n.headers.host = o;
    }
    return t(r);
  }, "PL");
  Mt.hostHeaderMiddleware = PL;
  Mt.hostHeaderMiddlewareOptions = { name: "hostHeaderMiddleware", step: "build", priority: "low", tags: ["HOST"], override: true };
  var IL = /* @__PURE__ */ __name((e35) => ({ applyToStack: (t) => {
    t.add((0, Mt.hostHeaderMiddleware)(e35), Mt.hostHeaderMiddlewareOptions);
  } }), "IL");
  Mt.getHostHeaderPlugin = IL;
});
var Ib = c((gr) => {
  "use strict";
  Object.defineProperty(gr, "__esModule", { value: true });
  gr.getLoggerPlugin = gr.loggerMiddlewareOptions = gr.loggerMiddleware = void 0;
  var RL = /* @__PURE__ */ __name(() => (e35, t) => async (r) => {
    var n, i;
    try {
      let o = await e35(r), { clientName: s, commandName: a, logger: u, dynamoDbDocumentClientOptions: l = {} } = t, { overrideInputFilterSensitiveLog: p, overrideOutputFilterSensitiveLog: f } = l, m = p ?? t.inputFilterSensitiveLog, h = f ?? t.outputFilterSensitiveLog, { $metadata: y, ...v } = o.output;
      return (n = u?.info) === null || n === void 0 || n.call(u, { clientName: s, commandName: a, input: m(r.input), output: h(v), metadata: y }), o;
    } catch (o) {
      let { clientName: s, commandName: a, logger: u, dynamoDbDocumentClientOptions: l = {} } = t, { overrideInputFilterSensitiveLog: p } = l, f = p ?? t.inputFilterSensitiveLog;
      throw (i = u?.error) === null || i === void 0 || i.call(u, { clientName: s, commandName: a, input: f(r.input), error: o, metadata: o.$metadata }), o;
    }
  }, "RL");
  gr.loggerMiddleware = RL;
  gr.loggerMiddlewareOptions = { name: "loggerMiddleware", tags: ["LOGGER"], step: "initialize", override: true };
  var qL = /* @__PURE__ */ __name((e35) => ({ applyToStack: (t) => {
    t.add((0, gr.loggerMiddleware)(), gr.loggerMiddlewareOptions);
  } }), "qL");
  gr.getLoggerPlugin = qL;
});
var pc = c((X_) => {
  "use strict";
  Object.defineProperty(X_, "__esModule", { value: true });
  var ML = (b(), S(N));
  ML.__exportStar(Ib(), X_);
});
var fc = c((vr) => {
  "use strict";
  Object.defineProperty(vr, "__esModule", { value: true });
  vr.getRecursionDetectionPlugin = vr.addRecursionDetectionMiddlewareOptions = vr.recursionDetectionMiddleware = void 0;
  var DL = Me(), Rb = "X-Amzn-Trace-Id", kL = "AWS_LAMBDA_FUNCTION_NAME", FL = "_X_AMZN_TRACE_ID", LL = /* @__PURE__ */ __name((e35) => (t) => async (r) => {
    let { request: n } = r;
    if (!DL.HttpRequest.isInstance(n) || e35.runtime !== "node" || n.headers.hasOwnProperty(Rb))
      return t(r);
    let i = process.env[kL], o = process.env[FL], s = /* @__PURE__ */ __name((a) => typeof a == "string" && a.length > 0, "s");
    return s(i) && s(o) && (n.headers[Rb] = o), t({ ...r, request: n });
  }, "LL");
  vr.recursionDetectionMiddleware = LL;
  vr.addRecursionDetectionMiddlewareOptions = { step: "build", tags: ["RECURSION_DETECTION"], name: "recursionDetectionMiddleware", override: true, priority: "low" };
  var jL = /* @__PURE__ */ __name((e35) => ({ applyToStack: (t) => {
    t.add((0, vr.recursionDetectionMiddleware)(e35), vr.addRecursionDetectionMiddlewareOptions);
  } }), "jL");
  vr.getRecursionDetectionPlugin = jL;
});
var mc = c((Od) => {
  "use strict";
  Object.defineProperty(Od, "__esModule", { value: true });
  Od.ProviderError = void 0;
  var Z_ = class e35 extends Error {
    static {
      __name(this, "e");
    }
    constructor(t, r = true) {
      super(t), this.tryNextLink = r, this.name = "ProviderError", Object.setPrototypeOf(this, e35.prototype);
    }
    static from(t, r = true) {
      return Object.assign(new this(t.message, r), t);
    }
  };
  Od.ProviderError = Z_;
});
var qb = c((Ad) => {
  "use strict";
  Object.defineProperty(Ad, "__esModule", { value: true });
  Ad.CredentialsProviderError = void 0;
  var UL = mc(), ey = class e35 extends UL.ProviderError {
    static {
      __name(this, "e");
    }
    constructor(t, r = true) {
      super(t, r), this.tryNextLink = r, this.name = "CredentialsProviderError", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  Ad.CredentialsProviderError = ey;
});
var Mb = c((Td) => {
  "use strict";
  Object.defineProperty(Td, "__esModule", { value: true });
  Td.TokenProviderError = void 0;
  var BL = mc(), ty = class e35 extends BL.ProviderError {
    static {
      __name(this, "e");
    }
    constructor(t, r = true) {
      super(t, r), this.tryNextLink = r, this.name = "TokenProviderError", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  Td.TokenProviderError = ty;
});
var Db = c((Pd) => {
  "use strict";
  Object.defineProperty(Pd, "__esModule", { value: true });
  Pd.chain = void 0;
  var WL = mc(), VL = /* @__PURE__ */ __name((...e35) => async () => {
    if (e35.length === 0)
      throw new WL.ProviderError("No providers in chain");
    let t;
    for (let r of e35)
      try {
        return await r();
      } catch (n) {
        if (t = n, n?.tryNextLink)
          continue;
        throw n;
      }
    throw t;
  }, "VL");
  Pd.chain = VL;
});
var kb = c((Id) => {
  "use strict";
  Object.defineProperty(Id, "__esModule", { value: true });
  Id.fromStatic = void 0;
  var $L = /* @__PURE__ */ __name((e35) => () => Promise.resolve(e35), "$L");
  Id.fromStatic = $L;
});
var Fb = c((Rd) => {
  "use strict";
  Object.defineProperty(Rd, "__esModule", { value: true });
  Rd.memoize = void 0;
  var zL = /* @__PURE__ */ __name((e35, t, r) => {
    let n, i, o, s = false, a = /* @__PURE__ */ __name(async () => {
      i || (i = e35());
      try {
        n = await i, o = true, s = false;
      } finally {
        i = void 0;
      }
      return n;
    }, "a");
    return t === void 0 ? async (u) => ((!o || u?.forceRefresh) && (n = await a()), n) : async (u) => ((!o || u?.forceRefresh) && (n = await a()), s ? n : r && !r(n) ? (s = true, n) : (t(n) && await a(), n));
  }, "zL");
  Rd.memoize = zL;
});
var Z = c((Dn) => {
  "use strict";
  Object.defineProperty(Dn, "__esModule", { value: true });
  var ko = (b(), S(N));
  ko.__exportStar(qb(), Dn);
  ko.__exportStar(mc(), Dn);
  ko.__exportStar(Mb(), Dn);
  ko.__exportStar(Db(), Dn);
  ko.__exportStar(kb(), Dn);
  ko.__exportStar(Fb(), Dn);
});
var oy = {};
i_(oy, { __assign: () => ny, __asyncDelegator: () => ij, __asyncGenerator: () => nj, __asyncValues: () => oj, __await: () => hc, __awaiter: () => JL, __classPrivateFieldGet: () => uj, __classPrivateFieldSet: () => dj, __createBinding: () => ZL, __decorate: () => QL, __exportStar: () => ej, __extends: () => HL, __generator: () => XL, __importDefault: () => cj, __importStar: () => aj, __makeTemplateObject: () => sj, __metadata: () => YL, __param: () => KL, __read: () => Lb, __rest: () => GL, __spread: () => tj, __spreadArrays: () => rj, __values: () => iy });
function HL(e35, t) {
  ry(e35, t);
  function r() {
    this.constructor = e35;
  }
  __name(r, "r");
  e35.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
__name(HL, "HL");
function GL(e35, t) {
  var r = {};
  for (var n in e35)
    Object.prototype.hasOwnProperty.call(e35, n) && t.indexOf(n) < 0 && (r[n] = e35[n]);
  if (e35 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e35); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e35, n[i]) && (r[n[i]] = e35[n[i]]);
  return r;
}
__name(GL, "GL");
function QL(e35, t, r, n) {
  var i = arguments.length, o = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e35, t, r, n);
  else
    for (var a = e35.length - 1; a >= 0; a--)
      (s = e35[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, r, o) : s(t, r)) || o);
  return i > 3 && o && Object.defineProperty(t, r, o), o;
}
__name(QL, "QL");
function KL(e35, t) {
  return function(r, n) {
    t(r, n, e35);
  };
}
__name(KL, "KL");
function YL(e35, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e35, t);
}
__name(YL, "YL");
function JL(e35, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(s) {
      s(o);
    });
  }
  __name(i, "i");
  return new (r || (r = Promise))(function(o, s) {
    function a(p) {
      try {
        l(n.next(p));
      } catch (f) {
        s(f);
      }
    }
    __name(a, "a");
    function u(p) {
      try {
        l(n.throw(p));
      } catch (f) {
        s(f);
      }
    }
    __name(u, "u");
    function l(p) {
      p.done ? o(p.value) : i(p.value).then(a, u);
    }
    __name(l, "l");
    l((n = n.apply(e35, t || [])).next());
  });
}
__name(JL, "JL");
function XL(e35, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(p) {
      return u([l, p]);
    };
  }
  __name(a, "a");
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done)
          return o;
        switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: false };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = l;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(l);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e35, r);
      } catch (p) {
        l = [6, p], i = 0;
      } finally {
        n = o = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: true };
  }
  __name(u, "u");
}
__name(XL, "XL");
function ZL(e35, t, r, n) {
  n === void 0 && (n = r), e35[n] = t[r];
}
__name(ZL, "ZL");
function ej(e35, t) {
  for (var r in e35)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e35[r]);
}
__name(ej, "ej");
function iy(e35) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e35[t], n = 0;
  if (r)
    return r.call(e35);
  if (e35 && typeof e35.length == "number")
    return { next: function() {
      return e35 && n >= e35.length && (e35 = void 0), { value: e35 && e35[n++], done: !e35 };
    } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(iy, "iy");
function Lb(e35, t) {
  var r = typeof Symbol == "function" && e35[Symbol.iterator];
  if (!r)
    return e35;
  var n = r.call(e35), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}
__name(Lb, "Lb");
function tj() {
  for (var e35 = [], t = 0; t < arguments.length; t++)
    e35 = e35.concat(Lb(arguments[t]));
  return e35;
}
__name(tj, "tj");
function rj() {
  for (var e35 = 0, t = 0, r = arguments.length; t < r; t++)
    e35 += arguments[t].length;
  for (var n = Array(e35), i = 0, t = 0; t < r; t++)
    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
      n[i] = o[s];
  return n;
}
__name(rj, "rj");
function hc(e35) {
  return this instanceof hc ? (this.v = e35, this) : new hc(e35);
}
__name(hc, "hc");
function nj(e35, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e35, t || []), i, o = [];
  return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(m) {
    n[m] && (i[m] = function(h) {
      return new Promise(function(y, v) {
        o.push([m, h, y, v]) > 1 || a(m, h);
      });
    });
  }
  __name(s, "s");
  function a(m, h) {
    try {
      u(n[m](h));
    } catch (y) {
      f(o[0][3], y);
    }
  }
  __name(a, "a");
  function u(m) {
    m.value instanceof hc ? Promise.resolve(m.value.v).then(l, p) : f(o[0][2], m);
  }
  __name(u, "u");
  function l(m) {
    a("next", m);
  }
  __name(l, "l");
  function p(m) {
    a("throw", m);
  }
  __name(p, "p");
  function f(m, h) {
    m(h), o.shift(), o.length && a(o[0][0], o[0][1]);
  }
  __name(f, "f");
}
__name(nj, "nj");
function ij(e35) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, o) {
    t[i] = e35[i] ? function(s) {
      return (r = !r) ? { value: hc(e35[i](s)), done: i === "return" } : o ? o(s) : s;
    } : o;
  }
  __name(n, "n");
}
__name(ij, "ij");
function oj(e35) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e35[Symbol.asyncIterator], r;
  return t ? t.call(e35) : (e35 = typeof iy == "function" ? iy(e35) : e35[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(o) {
    r[o] = e35[o] && function(s) {
      return new Promise(function(a, u) {
        s = e35[o](s), i(a, u, s.done, s.value);
      });
    };
  }
  __name(n, "n");
  function i(o, s, a, u) {
    Promise.resolve(u).then(function(l) {
      o({ value: l, done: a });
    }, s);
  }
  __name(i, "i");
}
__name(oj, "oj");
function sj(e35, t) {
  return Object.defineProperty ? Object.defineProperty(e35, "raw", { value: t }) : e35.raw = t, e35;
}
__name(sj, "sj");
function aj(e35) {
  if (e35 && e35.__esModule)
    return e35;
  var t = {};
  if (e35 != null)
    for (var r in e35)
      Object.hasOwnProperty.call(e35, r) && (t[r] = e35[r]);
  return t.default = e35, t;
}
__name(aj, "aj");
function cj(e35) {
  return e35 && e35.__esModule ? e35 : { default: e35 };
}
__name(cj, "cj");
function uj(e35, t) {
  if (!t.has(e35))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e35);
}
__name(uj, "uj");
function dj(e35, t, r) {
  if (!t.has(e35))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e35, r), r;
}
__name(dj, "dj");
var ry;
var ny;
var sy = Be(() => {
  ry = /* @__PURE__ */ __name(function(e35, t) {
    return ry = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
      r.__proto__ = n;
    } || function(r, n) {
      for (var i in n)
        n.hasOwnProperty(i) && (r[i] = n[i]);
    }, ry(e35, t);
  }, "ry");
  ny = /* @__PURE__ */ __name(function() {
    return ny = Object.assign || function(t) {
      for (var r, n = 1, i = arguments.length; n < i; n++) {
        r = arguments[n];
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
      }
      return t;
    }, ny.apply(this, arguments);
  }, "ny");
});
var jb = c((Fo) => {
  "use strict";
  Object.defineProperty(Fo, "__esModule", { value: true });
  Fo.toUtf8 = Fo.fromUtf8 = void 0;
  var lj = /* @__PURE__ */ __name((e35) => {
    let t = [];
    for (let r = 0, n = e35.length; r < n; r++) {
      let i = e35.charCodeAt(r);
      if (i < 128)
        t.push(i);
      else if (i < 2048)
        t.push(i >> 6 | 192, i & 63 | 128);
      else if (r + 1 < e35.length && (i & 64512) === 55296 && (e35.charCodeAt(r + 1) & 64512) === 56320) {
        let o = 65536 + ((i & 1023) << 10) + (e35.charCodeAt(++r) & 1023);
        t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, o & 63 | 128);
      } else
        t.push(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128);
    }
    return Uint8Array.from(t);
  }, "lj");
  Fo.fromUtf8 = lj;
  var pj = /* @__PURE__ */ __name((e35) => {
    let t = "";
    for (let r = 0, n = e35.length; r < n; r++) {
      let i = e35[r];
      if (i < 128)
        t += String.fromCharCode(i);
      else if (192 <= i && i < 224) {
        let o = e35[++r];
        t += String.fromCharCode((i & 31) << 6 | o & 63);
      } else if (240 <= i && i < 365) {
        let s = "%" + [i, e35[++r], e35[++r], e35[++r]].map((a) => a.toString(16)).join("%");
        t += decodeURIComponent(s);
      } else
        t += String.fromCharCode((i & 15) << 12 | (e35[++r] & 63) << 6 | e35[++r] & 63);
    }
    return t;
  }, "pj");
  Fo.toUtf8 = pj;
});
var Ub = c((Lo) => {
  "use strict";
  Object.defineProperty(Lo, "__esModule", { value: true });
  Lo.toUtf8 = Lo.fromUtf8 = void 0;
  function fj(e35) {
    return new TextEncoder().encode(e35);
  }
  __name(fj, "fj");
  Lo.fromUtf8 = fj;
  function mj(e35) {
    return new TextDecoder("utf-8").decode(e35);
  }
  __name(mj, "mj");
  Lo.toUtf8 = mj;
});
var Vb = c((jo) => {
  "use strict";
  Object.defineProperty(jo, "__esModule", { value: true });
  jo.toUtf8 = jo.fromUtf8 = void 0;
  var Bb = jb(), Wb = Ub(), hj = /* @__PURE__ */ __name((e35) => typeof TextEncoder == "function" ? (0, Wb.fromUtf8)(e35) : (0, Bb.fromUtf8)(e35), "hj");
  jo.fromUtf8 = hj;
  var _j = /* @__PURE__ */ __name((e35) => typeof TextDecoder == "function" ? (0, Wb.toUtf8)(e35) : (0, Bb.toUtf8)(e35), "_j");
  jo.toUtf8 = _j;
});
var $b = c((qd) => {
  "use strict";
  Object.defineProperty(qd, "__esModule", { value: true });
  qd.convertToBuffer = void 0;
  var yj = Vb(), gj = typeof Buffer < "u" && Buffer.from ? function(e35) {
    return Buffer.from(e35, "utf8");
  } : yj.fromUtf8;
  function vj(e35) {
    return e35 instanceof Uint8Array ? e35 : typeof e35 == "string" ? gj(e35) : ArrayBuffer.isView(e35) ? new Uint8Array(e35.buffer, e35.byteOffset, e35.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e35);
  }
  __name(vj, "vj");
  qd.convertToBuffer = vj;
});
var zb = c((Md) => {
  "use strict";
  Object.defineProperty(Md, "__esModule", { value: true });
  Md.isEmptyData = void 0;
  function Ej(e35) {
    return typeof e35 == "string" ? e35.length === 0 : e35.byteLength === 0;
  }
  __name(Ej, "Ej");
  Md.isEmptyData = Ej;
});
var Hb = c((Dd) => {
  "use strict";
  Object.defineProperty(Dd, "__esModule", { value: true });
  Dd.numToUint8 = void 0;
  function wj(e35) {
    return new Uint8Array([(e35 & 4278190080) >> 24, (e35 & 16711680) >> 16, (e35 & 65280) >> 8, e35 & 255]);
  }
  __name(wj, "wj");
  Dd.numToUint8 = wj;
});
var Gb = c((kd) => {
  "use strict";
  Object.defineProperty(kd, "__esModule", { value: true });
  kd.uint32ArrayFrom = void 0;
  function Sj(e35) {
    if (!Uint32Array.from) {
      for (var t = new Uint32Array(e35.length), r = 0; r < e35.length; )
        t[r] = e35[r], r += 1;
      return t;
    }
    return Uint32Array.from(e35);
  }
  __name(Sj, "Sj");
  kd.uint32ArrayFrom = Sj;
});
var ay = c((Er) => {
  "use strict";
  Object.defineProperty(Er, "__esModule", { value: true });
  Er.uint32ArrayFrom = Er.numToUint8 = Er.isEmptyData = Er.convertToBuffer = void 0;
  var Nj = $b();
  Object.defineProperty(Er, "convertToBuffer", { enumerable: true, get: function() {
    return Nj.convertToBuffer;
  } });
  var bj = zb();
  Object.defineProperty(Er, "isEmptyData", { enumerable: true, get: function() {
    return bj.isEmptyData;
  } });
  var xj = Hb();
  Object.defineProperty(Er, "numToUint8", { enumerable: true, get: function() {
    return xj.numToUint8;
  } });
  var Cj = Gb();
  Object.defineProperty(Er, "uint32ArrayFrom", { enumerable: true, get: function() {
    return Cj.uint32ArrayFrom;
  } });
});
var Yb = c((Fd) => {
  "use strict";
  Object.defineProperty(Fd, "__esModule", { value: true });
  Fd.AwsCrc32 = void 0;
  var Qb = (sy(), S(oy)), cy = ay(), Kb = Ld(), Oj = function() {
    function e35() {
      this.crc32 = new Kb.Crc32();
    }
    __name(e35, "e");
    return e35.prototype.update = function(t) {
      (0, cy.isEmptyData)(t) || this.crc32.update((0, cy.convertToBuffer)(t));
    }, e35.prototype.digest = function() {
      return Qb.__awaiter(this, void 0, void 0, function() {
        return Qb.__generator(this, function(t) {
          return [2, (0, cy.numToUint8)(this.crc32.digest())];
        });
      });
    }, e35.prototype.reset = function() {
      this.crc32 = new Kb.Crc32();
    }, e35;
  }();
  Fd.AwsCrc32 = Oj;
});
var Ld = c((kn) => {
  "use strict";
  Object.defineProperty(kn, "__esModule", { value: true });
  kn.AwsCrc32 = kn.Crc32 = kn.crc32 = void 0;
  var Aj = (sy(), S(oy)), Tj = ay();
  function Pj(e35) {
    return new Jb().update(e35).digest();
  }
  __name(Pj, "Pj");
  kn.crc32 = Pj;
  var Jb = function() {
    function e35() {
      this.checksum = 4294967295;
    }
    __name(e35, "e");
    return e35.prototype.update = function(t) {
      var r, n;
      try {
        for (var i = Aj.__values(t), o = i.next(); !o.done; o = i.next()) {
          var s = o.value;
          this.checksum = this.checksum >>> 8 ^ Rj[(this.checksum ^ s) & 255];
        }
      } catch (a) {
        r = { error: a };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (r)
            throw r.error;
        }
      }
      return this;
    }, e35.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    }, e35;
  }();
  kn.Crc32 = Jb;
  var Ij = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], Rj = (0, Tj.uint32ArrayFrom)(Ij), qj = Yb();
  Object.defineProperty(kn, "AwsCrc32", { enumerable: true, get: function() {
    return qj.AwsCrc32;
  } });
});
var Bo = c((Uo) => {
  "use strict";
  Object.defineProperty(Uo, "__esModule", { value: true });
  Uo.toHex = Uo.fromHex = void 0;
  var Xb = {}, uy = {};
  for (let e35 = 0; e35 < 256; e35++) {
    let t = e35.toString(16).toLowerCase();
    t.length === 1 && (t = `0${t}`), Xb[e35] = t, uy[t] = e35;
  }
  function Mj(e35) {
    if (e35.length % 2 !== 0)
      throw new Error("Hex encoded strings must have an even number length");
    let t = new Uint8Array(e35.length / 2);
    for (let r = 0; r < e35.length; r += 2) {
      let n = e35.slice(r, r + 2).toLowerCase();
      if (n in uy)
        t[r / 2] = uy[n];
      else
        throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);
    }
    return t;
  }
  __name(Mj, "Mj");
  Uo.fromHex = Mj;
  function Dj(e35) {
    let t = "";
    for (let r = 0; r < e35.byteLength; r++)
      t += Xb[e35[r]];
    return t;
  }
  __name(Dj, "Dj");
  Uo.toHex = Dj;
});
var ly = c((jd) => {
  "use strict";
  Object.defineProperty(jd, "__esModule", { value: true });
  jd.Int64 = void 0;
  var kj = Bo(), dy = class e35 {
    static {
      __name(this, "e");
    }
    constructor(t) {
      if (this.bytes = t, t.byteLength !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes");
    }
    static fromNumber(t) {
      if (t > 9223372036854776e3 || t < -9223372036854776e3)
        throw new Error(`${t} is too large (or, if negative, too small) to represent as an Int64`);
      let r = new Uint8Array(8);
      for (let n = 7, i = Math.abs(Math.round(t)); n > -1 && i > 0; n--, i /= 256)
        r[n] = i;
      return t < 0 && Zb(r), new e35(r);
    }
    valueOf() {
      let t = this.bytes.slice(0), r = t[0] & 128;
      return r && Zb(t), parseInt((0, kj.toHex)(t), 16) * (r ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  };
  jd.Int64 = dy;
  function Zb(e35) {
    for (let t = 0; t < 8; t++)
      e35[t] ^= 255;
    for (let t = 7; t > -1 && (e35[t]++, e35[t] === 0); t--)
      ;
  }
  __name(Zb, "Zb");
});
var my = c((Ud) => {
  "use strict";
  Object.defineProperty(Ud, "__esModule", { value: true });
  Ud.HeaderMarshaller = void 0;
  var Wo = Bo(), py = ly(), fy = class {
    static {
      __name(this, "fy");
    }
    constructor(t, r) {
      this.toUtf8 = t, this.fromUtf8 = r;
    }
    format(t) {
      let r = [];
      for (let o of Object.keys(t)) {
        let s = this.fromUtf8(o);
        r.push(Uint8Array.from([s.byteLength]), s, this.formatHeaderValue(t[o]));
      }
      let n = new Uint8Array(r.reduce((o, s) => o + s.byteLength, 0)), i = 0;
      for (let o of r)
        n.set(o, i), i += o.byteLength;
      return n;
    }
    formatHeaderValue(t) {
      switch (t.type) {
        case "boolean":
          return Uint8Array.from([t.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, t.value]);
        case "short":
          let r = new DataView(new ArrayBuffer(3));
          return r.setUint8(0, 3), r.setInt16(1, t.value, false), new Uint8Array(r.buffer);
        case "integer":
          let n = new DataView(new ArrayBuffer(5));
          return n.setUint8(0, 4), n.setInt32(1, t.value, false), new Uint8Array(n.buffer);
        case "long":
          let i = new Uint8Array(9);
          return i[0] = 5, i.set(t.value.bytes, 1), i;
        case "binary":
          let o = new DataView(new ArrayBuffer(3 + t.value.byteLength));
          o.setUint8(0, 6), o.setUint16(1, t.value.byteLength, false);
          let s = new Uint8Array(o.buffer);
          return s.set(t.value, 3), s;
        case "string":
          let a = this.fromUtf8(t.value), u = new DataView(new ArrayBuffer(3 + a.byteLength));
          u.setUint8(0, 7), u.setUint16(1, a.byteLength, false);
          let l = new Uint8Array(u.buffer);
          return l.set(a, 3), l;
        case "timestamp":
          let p = new Uint8Array(9);
          return p[0] = 8, p.set(py.Int64.fromNumber(t.value.valueOf()).bytes, 1), p;
        case "uuid":
          if (!zj.test(t.value))
            throw new Error(`Invalid UUID received: ${t.value}`);
          let f = new Uint8Array(17);
          return f[0] = 9, f.set((0, Wo.fromHex)(t.value.replace(/\-/g, "")), 1), f;
      }
    }
    parse(t) {
      let r = {}, n = 0;
      for (; n < t.byteLength; ) {
        let i = t.getUint8(n++), o = this.toUtf8(new Uint8Array(t.buffer, t.byteOffset + n, i));
        switch (n += i, t.getUint8(n++)) {
          case 0:
            r[o] = { type: tx, value: true };
            break;
          case 1:
            r[o] = { type: tx, value: false };
            break;
          case 2:
            r[o] = { type: Fj, value: t.getInt8(n++) };
            break;
          case 3:
            r[o] = { type: Lj, value: t.getInt16(n, false) }, n += 2;
            break;
          case 4:
            r[o] = { type: jj, value: t.getInt32(n, false) }, n += 4;
            break;
          case 5:
            r[o] = { type: Uj, value: new py.Int64(new Uint8Array(t.buffer, t.byteOffset + n, 8)) }, n += 8;
            break;
          case 6:
            let s = t.getUint16(n, false);
            n += 2, r[o] = { type: Bj, value: new Uint8Array(t.buffer, t.byteOffset + n, s) }, n += s;
            break;
          case 7:
            let a = t.getUint16(n, false);
            n += 2, r[o] = { type: Wj, value: this.toUtf8(new Uint8Array(t.buffer, t.byteOffset + n, a)) }, n += a;
            break;
          case 8:
            r[o] = { type: Vj, value: new Date(new py.Int64(new Uint8Array(t.buffer, t.byteOffset + n, 8)).valueOf()) }, n += 8;
            break;
          case 9:
            let u = new Uint8Array(t.buffer, t.byteOffset + n, 16);
            n += 16, r[o] = { type: $j, value: `${(0, Wo.toHex)(u.subarray(0, 4))}-${(0, Wo.toHex)(u.subarray(4, 6))}-${(0, Wo.toHex)(u.subarray(6, 8))}-${(0, Wo.toHex)(u.subarray(8, 10))}-${(0, Wo.toHex)(u.subarray(10))}` };
            break;
          default:
            throw new Error("Unrecognized header type tag");
        }
      }
      return r;
    }
  };
  Ud.HeaderMarshaller = fy;
  var ex;
  (function(e35) {
    e35[e35.boolTrue = 0] = "boolTrue", e35[e35.boolFalse = 1] = "boolFalse", e35[e35.byte = 2] = "byte", e35[e35.short = 3] = "short", e35[e35.integer = 4] = "integer", e35[e35.long = 5] = "long", e35[e35.byteArray = 6] = "byteArray", e35[e35.string = 7] = "string", e35[e35.timestamp = 8] = "timestamp", e35[e35.uuid = 9] = "uuid";
  })(ex || (ex = {}));
  var tx = "boolean", Fj = "byte", Lj = "short", jj = "integer", Uj = "long", Bj = "binary", Wj = "string", Vj = "timestamp", $j = "uuid", zj = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
});
var nx = c((Bd) => {
  "use strict";
  Object.defineProperty(Bd, "__esModule", { value: true });
  Bd.splitMessage = void 0;
  var Hj = Ld(), rx = 4, Fn = rx * 2, Ri = 4, Gj = Fn + Ri * 2;
  function Qj({ byteLength: e35, byteOffset: t, buffer: r }) {
    if (e35 < Gj)
      throw new Error("Provided message too short to accommodate event stream message overhead");
    let n = new DataView(r, t, e35), i = n.getUint32(0, false);
    if (e35 !== i)
      throw new Error("Reported message length does not match received message length");
    let o = n.getUint32(rx, false), s = n.getUint32(Fn, false), a = n.getUint32(e35 - Ri, false), u = new Hj.Crc32().update(new Uint8Array(r, t, Fn));
    if (s !== u.digest())
      throw new Error(`The prelude checksum specified in the message (${s}) does not match the calculated CRC32 checksum (${u.digest()})`);
    if (u.update(new Uint8Array(r, t + Fn, e35 - (Fn + Ri))), a !== u.digest())
      throw new Error(`The message checksum (${u.digest()}) did not match the expected value of ${a}`);
    return { headers: new DataView(r, t + Fn + Ri, o), body: new Uint8Array(r, t + Fn + Ri + o, i - o - (Fn + Ri + Ri)) };
  }
  __name(Qj, "Qj");
  Bd.splitMessage = Qj;
});
var ix = c((Wd) => {
  "use strict";
  Object.defineProperty(Wd, "__esModule", { value: true });
  Wd.EventStreamCodec = void 0;
  var Kj = Ld(), Yj = my(), Jj = nx(), hy = class {
    static {
      __name(this, "hy");
    }
    constructor(t, r) {
      this.headerMarshaller = new Yj.HeaderMarshaller(t, r), this.messageBuffer = [], this.isEndOfStream = false;
    }
    feed(t) {
      this.messageBuffer.push(this.decode(t));
    }
    endOfStream() {
      this.isEndOfStream = true;
    }
    getMessage() {
      let t = this.messageBuffer.pop(), r = this.isEndOfStream;
      return { getMessage() {
        return t;
      }, isEndOfStream() {
        return r;
      } };
    }
    getAvailableMessages() {
      let t = this.messageBuffer;
      this.messageBuffer = [];
      let r = this.isEndOfStream;
      return { getMessages() {
        return t;
      }, isEndOfStream() {
        return r;
      } };
    }
    encode({ headers: t, body: r }) {
      let n = this.headerMarshaller.format(t), i = n.byteLength + r.byteLength + 16, o = new Uint8Array(i), s = new DataView(o.buffer, o.byteOffset, o.byteLength), a = new Kj.Crc32();
      return s.setUint32(0, i, false), s.setUint32(4, n.byteLength, false), s.setUint32(8, a.update(o.subarray(0, 8)).digest(), false), o.set(n, 12), o.set(r, n.byteLength + 12), s.setUint32(i - 4, a.update(o.subarray(8, i - 4)).digest(), false), o;
    }
    decode(t) {
      let { headers: r, body: n } = (0, Jj.splitMessage)(t);
      return { headers: this.headerMarshaller.parse(r), body: n };
    }
    formatHeaders(t) {
      return this.headerMarshaller.format(t);
    }
  };
  Wd.EventStreamCodec = hy;
});
var sx = c((ox) => {
  "use strict";
  Object.defineProperty(ox, "__esModule", { value: true });
});
var ax = c((Vd) => {
  "use strict";
  Object.defineProperty(Vd, "__esModule", { value: true });
  Vd.MessageDecoderStream = void 0;
  var _y = class {
    static {
      __name(this, "_y");
    }
    constructor(t) {
      this.options = t;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let t of this.options.inputStream)
        yield this.options.decoder.decode(t);
    }
  };
  Vd.MessageDecoderStream = _y;
});
var cx = c(($d) => {
  "use strict";
  Object.defineProperty($d, "__esModule", { value: true });
  $d.MessageEncoderStream = void 0;
  var yy = class {
    static {
      __name(this, "yy");
    }
    constructor(t) {
      this.options = t;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let t of this.options.messageStream)
        yield this.options.encoder.encode(t);
      this.options.includeEndFrame && (yield new Uint8Array(0));
    }
  };
  $d.MessageEncoderStream = yy;
});
var ux = c((zd) => {
  "use strict";
  Object.defineProperty(zd, "__esModule", { value: true });
  zd.SmithyMessageDecoderStream = void 0;
  var gy = class {
    static {
      __name(this, "gy");
    }
    constructor(t) {
      this.options = t;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let t of this.options.messageStream) {
        let r = await this.options.deserializer(t);
        r !== void 0 && (yield r);
      }
    }
  };
  zd.SmithyMessageDecoderStream = gy;
});
var dx = c((Hd) => {
  "use strict";
  Object.defineProperty(Hd, "__esModule", { value: true });
  Hd.SmithyMessageEncoderStream = void 0;
  var vy = class {
    static {
      __name(this, "vy");
    }
    constructor(t) {
      this.options = t;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let t of this.options.inputStream)
        yield this.options.serializer(t);
    }
  };
  Hd.SmithyMessageEncoderStream = vy;
});
var lx = c((wr) => {
  "use strict";
  Object.defineProperty(wr, "__esModule", { value: true });
  var Ln = (b(), S(N));
  Ln.__exportStar(ix(), wr);
  Ln.__exportStar(my(), wr);
  Ln.__exportStar(ly(), wr);
  Ln.__exportStar(sx(), wr);
  Ln.__exportStar(ax(), wr);
  Ln.__exportStar(cx(), wr);
  Ln.__exportStar(ux(), wr);
  Ln.__exportStar(dx(), wr);
});
var fx = c((Gd) => {
  "use strict";
  Object.defineProperty(Gd, "__esModule", { value: true });
  Gd.getSmithyContext = void 0;
  var px = K(), Xj = /* @__PURE__ */ __name((e35) => e35[px.SMITHY_CONTEXT_KEY] || (e35[px.SMITHY_CONTEXT_KEY] = {}), "Xj");
  Gd.getSmithyContext = Xj;
});
var mx = c((Qd) => {
  "use strict";
  Object.defineProperty(Qd, "__esModule", { value: true });
  Qd.normalizeProvider = void 0;
  var Zj = /* @__PURE__ */ __name((e35) => {
    if (typeof e35 == "function")
      return e35;
    let t = Promise.resolve(e35);
    return () => t;
  }, "Zj");
  Qd.normalizeProvider = Zj;
});
var qi = c((Kd) => {
  "use strict";
  Object.defineProperty(Kd, "__esModule", { value: true });
  var hx = (b(), S(N));
  hx.__exportStar(fx(), Kd);
  hx.__exportStar(mx(), Kd);
});
var Ey = c((Yd) => {
  "use strict";
  Object.defineProperty(Yd, "__esModule", { value: true });
  Yd.isArrayBuffer = void 0;
  var eU = /* @__PURE__ */ __name((e35) => typeof ArrayBuffer == "function" && e35 instanceof ArrayBuffer || Object.prototype.toString.call(e35) === "[object ArrayBuffer]", "eU");
  Yd.isArrayBuffer = eU;
});
var Mi = c((Vo) => {
  "use strict";
  Object.defineProperty(Vo, "__esModule", { value: true });
  Vo.fromString = Vo.fromArrayBuffer = void 0;
  var tU = Ey(), wy = D("buffer"), rU = /* @__PURE__ */ __name((e35, t = 0, r = e35.byteLength - t) => {
    if (!(0, tU.isArrayBuffer)(e35))
      throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e35} (${e35})`);
    return wy.Buffer.from(e35, t, r);
  }, "rU");
  Vo.fromArrayBuffer = rU;
  var nU = /* @__PURE__ */ __name((e35, t) => {
    if (typeof e35 != "string")
      throw new TypeError(`The "input" argument must be of type string. Received type ${typeof e35} (${e35})`);
    return t ? wy.Buffer.from(e35, t) : wy.Buffer.from(e35);
  }, "nU");
  Vo.fromString = nU;
});
var Sy = c((Jd) => {
  "use strict";
  Object.defineProperty(Jd, "__esModule", { value: true });
  Jd.fromUtf8 = void 0;
  var iU = Mi(), oU = /* @__PURE__ */ __name((e35) => {
    let t = (0, iU.fromString)(e35, "utf8");
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }, "oU");
  Jd.fromUtf8 = oU;
});
var _x = c((Xd) => {
  "use strict";
  Object.defineProperty(Xd, "__esModule", { value: true });
  Xd.toUint8Array = void 0;
  var sU = Sy(), aU = /* @__PURE__ */ __name((e35) => typeof e35 == "string" ? (0, sU.fromUtf8)(e35) : ArrayBuffer.isView(e35) ? new Uint8Array(e35.buffer, e35.byteOffset, e35.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e35), "aU");
  Xd.toUint8Array = aU;
});
var yx = c((Zd) => {
  "use strict";
  Object.defineProperty(Zd, "__esModule", { value: true });
  Zd.toUtf8 = void 0;
  var cU = Mi(), uU = /* @__PURE__ */ __name((e35) => (0, cU.fromArrayBuffer)(e35.buffer, e35.byteOffset, e35.byteLength).toString("utf8"), "uU");
  Zd.toUtf8 = uU;
});
var Sr = c((_c) => {
  "use strict";
  Object.defineProperty(_c, "__esModule", { value: true });
  var Ny = (b(), S(N));
  Ny.__exportStar(Sy(), _c);
  Ny.__exportStar(_x(), _c);
  Ny.__exportStar(yx(), _c);
});
var Di = c((x) => {
  "use strict";
  Object.defineProperty(x, "__esModule", { value: true });
  x.MAX_PRESIGNED_TTL = x.KEY_TYPE_IDENTIFIER = x.MAX_CACHE_SIZE = x.UNSIGNED_PAYLOAD = x.EVENT_ALGORITHM_IDENTIFIER = x.ALGORITHM_IDENTIFIER_V4A = x.ALGORITHM_IDENTIFIER = x.UNSIGNABLE_PATTERNS = x.SEC_HEADER_PATTERN = x.PROXY_HEADER_PATTERN = x.ALWAYS_UNSIGNABLE_HEADERS = x.HOST_HEADER = x.TOKEN_HEADER = x.SHA256_HEADER = x.SIGNATURE_HEADER = x.GENERATED_HEADERS = x.DATE_HEADER = x.AMZ_DATE_HEADER = x.AUTH_HEADER = x.REGION_SET_PARAM = x.TOKEN_QUERY_PARAM = x.SIGNATURE_QUERY_PARAM = x.EXPIRES_QUERY_PARAM = x.SIGNED_HEADERS_QUERY_PARAM = x.AMZ_DATE_QUERY_PARAM = x.CREDENTIAL_QUERY_PARAM = x.ALGORITHM_QUERY_PARAM = void 0;
  x.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
  x.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
  x.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
  x.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
  x.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
  x.SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
  x.TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
  x.REGION_SET_PARAM = "X-Amz-Region-Set";
  x.AUTH_HEADER = "authorization";
  x.AMZ_DATE_HEADER = x.AMZ_DATE_QUERY_PARAM.toLowerCase();
  x.DATE_HEADER = "date";
  x.GENERATED_HEADERS = [x.AUTH_HEADER, x.AMZ_DATE_HEADER, x.DATE_HEADER];
  x.SIGNATURE_HEADER = x.SIGNATURE_QUERY_PARAM.toLowerCase();
  x.SHA256_HEADER = "x-amz-content-sha256";
  x.TOKEN_HEADER = x.TOKEN_QUERY_PARAM.toLowerCase();
  x.HOST_HEADER = "host";
  x.ALWAYS_UNSIGNABLE_HEADERS = { authorization: true, "cache-control": true, connection: true, expect: true, from: true, "keep-alive": true, "max-forwards": true, pragma: true, referer: true, te: true, trailer: true, "transfer-encoding": true, upgrade: true, "user-agent": true, "x-amzn-trace-id": true };
  x.PROXY_HEADER_PATTERN = /^proxy-/;
  x.SEC_HEADER_PATTERN = /^sec-/;
  x.UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
  x.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
  x.ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
  x.EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
  x.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
  x.MAX_CACHE_SIZE = 50;
  x.KEY_TYPE_IDENTIFIER = "aws4_request";
  x.MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
});
var xy = c((jn) => {
  "use strict";
  Object.defineProperty(jn, "__esModule", { value: true });
  jn.clearCredentialCache = jn.getSigningKey = jn.createScope = void 0;
  var dU = Bo(), lU = Sr(), by = Di(), $o = {}, el = [], pU = /* @__PURE__ */ __name((e35, t, r) => `${e35}/${t}/${r}/${by.KEY_TYPE_IDENTIFIER}`, "pU");
  jn.createScope = pU;
  var fU = /* @__PURE__ */ __name(async (e35, t, r, n, i) => {
    let o = await gx(e35, t.secretAccessKey, t.accessKeyId), s = `${r}:${n}:${i}:${(0, dU.toHex)(o)}:${t.sessionToken}`;
    if (s in $o)
      return $o[s];
    for (el.push(s); el.length > by.MAX_CACHE_SIZE; )
      delete $o[el.shift()];
    let a = `AWS4${t.secretAccessKey}`;
    for (let u of [r, n, i, by.KEY_TYPE_IDENTIFIER])
      a = await gx(e35, a, u);
    return $o[s] = a;
  }, "fU");
  jn.getSigningKey = fU;
  var mU = /* @__PURE__ */ __name(() => {
    el.length = 0, Object.keys($o).forEach((e35) => {
      delete $o[e35];
    });
  }, "mU");
  jn.clearCredentialCache = mU;
  var gx = /* @__PURE__ */ __name((e35, t, r) => {
    let n = new e35(t);
    return n.update((0, lU.toUint8Array)(r)), n.digest();
  }, "gx");
});
var Oy = c((tl) => {
  "use strict";
  Object.defineProperty(tl, "__esModule", { value: true });
  tl.getCanonicalHeaders = void 0;
  var Cy = Di(), hU = /* @__PURE__ */ __name(({ headers: e35 }, t, r) => {
    let n = {};
    for (let i of Object.keys(e35).sort()) {
      if (e35[i] == null)
        continue;
      let o = i.toLowerCase();
      (o in Cy.ALWAYS_UNSIGNABLE_HEADERS || t?.has(o) || Cy.PROXY_HEADER_PATTERN.test(o) || Cy.SEC_HEADER_PATTERN.test(o)) && (!r || r && !r.has(o)) || (n[o] = e35[i].trim().replace(/\s+/g, " "));
    }
    return n;
  }, "hU");
  tl.getCanonicalHeaders = hU;
});
var Ay = c((rl) => {
  "use strict";
  Object.defineProperty(rl, "__esModule", { value: true });
  rl.escapeUri = void 0;
  var _U = /* @__PURE__ */ __name((e35) => encodeURIComponent(e35).replace(/[!'()*]/g, yU), "_U");
  rl.escapeUri = _U;
  var yU = /* @__PURE__ */ __name((e35) => `%${e35.charCodeAt(0).toString(16).toUpperCase()}`, "yU");
});
var vx = c((nl) => {
  "use strict";
  Object.defineProperty(nl, "__esModule", { value: true });
  nl.escapeUriPath = void 0;
  var gU = Ay(), vU = /* @__PURE__ */ __name((e35) => e35.split("/").map(gU.escapeUri).join("/"), "vU");
  nl.escapeUriPath = vU;
});
var Ty = c((il) => {
  "use strict";
  Object.defineProperty(il, "__esModule", { value: true });
  var Ex = (b(), S(N));
  Ex.__exportStar(Ay(), il);
  Ex.__exportStar(vx(), il);
});
var Py = c((sl) => {
  "use strict";
  Object.defineProperty(sl, "__esModule", { value: true });
  sl.getCanonicalQuery = void 0;
  var ol = Ty(), EU = Di(), wU = /* @__PURE__ */ __name(({ query: e35 = {} }) => {
    let t = [], r = {};
    for (let n of Object.keys(e35).sort()) {
      if (n.toLowerCase() === EU.SIGNATURE_HEADER)
        continue;
      t.push(n);
      let i = e35[n];
      typeof i == "string" ? r[n] = `${(0, ol.escapeUri)(n)}=${(0, ol.escapeUri)(i)}` : Array.isArray(i) && (r[n] = i.slice(0).reduce((o, s) => o.concat([`${(0, ol.escapeUri)(n)}=${(0, ol.escapeUri)(s)}`]), []).sort().join("&"));
    }
    return t.map((n) => r[n]).filter((n) => n).join("&");
  }, "wU");
  sl.getCanonicalQuery = wU;
});
var Iy = c((al) => {
  "use strict";
  Object.defineProperty(al, "__esModule", { value: true });
  al.getPayloadHash = void 0;
  var SU = Ey(), NU = Bo(), bU = Sr(), wx = Di(), xU = /* @__PURE__ */ __name(async ({ headers: e35, body: t }, r) => {
    for (let n of Object.keys(e35))
      if (n.toLowerCase() === wx.SHA256_HEADER)
        return e35[n];
    if (t == null)
      return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    if (typeof t == "string" || ArrayBuffer.isView(t) || (0, SU.isArrayBuffer)(t)) {
      let n = new r();
      return n.update((0, bU.toUint8Array)(t)), (0, NU.toHex)(await n.digest());
    }
    return wx.UNSIGNED_PAYLOAD;
  }, "xU");
  al.getPayloadHash = xU;
});
var Sx = c((Un) => {
  "use strict";
  Object.defineProperty(Un, "__esModule", { value: true });
  Un.deleteHeader = Un.getHeaderValue = Un.hasHeader = void 0;
  var CU = /* @__PURE__ */ __name((e35, t) => {
    e35 = e35.toLowerCase();
    for (let r of Object.keys(t))
      if (e35 === r.toLowerCase())
        return true;
    return false;
  }, "CU");
  Un.hasHeader = CU;
  var OU = /* @__PURE__ */ __name((e35, t) => {
    e35 = e35.toLowerCase();
    for (let r of Object.keys(t))
      if (e35 === r.toLowerCase())
        return t[r];
  }, "OU");
  Un.getHeaderValue = OU;
  var AU = /* @__PURE__ */ __name((e35, t) => {
    e35 = e35.toLowerCase();
    for (let r of Object.keys(t))
      e35 === r.toLowerCase() && delete t[r];
  }, "AU");
  Un.deleteHeader = AU;
});
var Ry = c((ki) => {
  "use strict";
  Object.defineProperty(ki, "__esModule", { value: true });
  ki.cloneQuery = ki.cloneRequest = void 0;
  var TU = /* @__PURE__ */ __name(({ headers: e35, query: t, ...r }) => ({ ...r, headers: { ...e35 }, query: t ? (0, ki.cloneQuery)(t) : void 0 }), "TU");
  ki.cloneRequest = TU;
  var PU = /* @__PURE__ */ __name((e35) => Object.keys(e35).reduce((t, r) => {
    let n = e35[r];
    return { ...t, [r]: Array.isArray(n) ? [...n] : n };
  }, {}), "PU");
  ki.cloneQuery = PU;
});
var qy = c((cl) => {
  "use strict";
  Object.defineProperty(cl, "__esModule", { value: true });
  cl.moveHeadersToQuery = void 0;
  var IU = Ry(), RU = /* @__PURE__ */ __name((e35, t = {}) => {
    var r;
    let { headers: n, query: i = {} } = typeof e35.clone == "function" ? e35.clone() : (0, IU.cloneRequest)(e35);
    for (let o of Object.keys(n)) {
      let s = o.toLowerCase();
      s.slice(0, 6) === "x-amz-" && !(!((r = t.unhoistableHeaders) === null || r === void 0) && r.has(s)) && (i[o] = n[o], delete n[o]);
    }
    return { ...e35, headers: n, query: i };
  }, "RU");
  cl.moveHeadersToQuery = RU;
});
var My = c((ul) => {
  "use strict";
  Object.defineProperty(ul, "__esModule", { value: true });
  ul.prepareRequest = void 0;
  var qU = Ry(), MU = Di(), DU = /* @__PURE__ */ __name((e35) => {
    e35 = typeof e35.clone == "function" ? e35.clone() : (0, qU.cloneRequest)(e35);
    for (let t of Object.keys(e35.headers))
      MU.GENERATED_HEADERS.indexOf(t.toLowerCase()) > -1 && delete e35.headers[t];
    return e35;
  }, "DU");
  ul.prepareRequest = DU;
});
var Nx = c((Fi) => {
  "use strict";
  Object.defineProperty(Fi, "__esModule", { value: true });
  Fi.toDate = Fi.iso8601 = void 0;
  var kU = /* @__PURE__ */ __name((e35) => (0, Fi.toDate)(e35).toISOString().replace(/\.\d{3}Z$/, "Z"), "kU");
  Fi.iso8601 = kU;
  var FU = /* @__PURE__ */ __name((e35) => typeof e35 == "number" ? new Date(e35 * 1e3) : typeof e35 == "string" ? Number(e35) ? new Date(Number(e35) * 1e3) : new Date(e35) : e35, "FU");
  Fi.toDate = FU;
});
var Ax = c((fl) => {
  "use strict";
  Object.defineProperty(fl, "__esModule", { value: true });
  fl.SignatureV4 = void 0;
  var LU = lx(), dl = Bo(), bx = qi(), yc = Sr(), Ve = Di(), ll = xy(), xx = Oy(), jU = Py(), Dy = Iy(), UU = Sx(), BU = qy(), Cx = My(), WU = Nx(), ky = class {
    static {
      __name(this, "ky");
    }
    constructor({ applyChecksum: t, credentials: r, region: n, service: i, sha256: o, uriEscapePath: s = true }) {
      this.headerMarshaller = new LU.HeaderMarshaller(yc.toUtf8, yc.fromUtf8), this.service = i, this.sha256 = o, this.uriEscapePath = s, this.applyChecksum = typeof t == "boolean" ? t : true, this.regionProvider = (0, bx.normalizeProvider)(n), this.credentialProvider = (0, bx.normalizeProvider)(r);
    }
    async presign(t, r = {}) {
      let { signingDate: n = /* @__PURE__ */ new Date(), expiresIn: i = 3600, unsignableHeaders: o, unhoistableHeaders: s, signableHeaders: a, signingRegion: u, signingService: l } = r, p = await this.credentialProvider();
      this.validateResolvedCredentials(p);
      let f = u ?? await this.regionProvider(), { longDate: m, shortDate: h } = pl(n);
      if (i > Ve.MAX_PRESIGNED_TTL)
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
      let y = (0, ll.createScope)(h, f, l ?? this.service), v = (0, BU.moveHeadersToQuery)((0, Cx.prepareRequest)(t), { unhoistableHeaders: s });
      p.sessionToken && (v.query[Ve.TOKEN_QUERY_PARAM] = p.sessionToken), v.query[Ve.ALGORITHM_QUERY_PARAM] = Ve.ALGORITHM_IDENTIFIER, v.query[Ve.CREDENTIAL_QUERY_PARAM] = `${p.accessKeyId}/${y}`, v.query[Ve.AMZ_DATE_QUERY_PARAM] = m, v.query[Ve.EXPIRES_QUERY_PARAM] = i.toString(10);
      let E = (0, xx.getCanonicalHeaders)(v, o, a);
      return v.query[Ve.SIGNED_HEADERS_QUERY_PARAM] = Ox(E), v.query[Ve.SIGNATURE_QUERY_PARAM] = await this.getSignature(m, y, this.getSigningKey(p, f, h, l), this.createCanonicalRequest(v, E, await (0, Dy.getPayloadHash)(t, this.sha256))), v;
    }
    async sign(t, r) {
      return typeof t == "string" ? this.signString(t, r) : t.headers && t.payload ? this.signEvent(t, r) : t.message ? this.signMessage(t, r) : this.signRequest(t, r);
    }
    async signEvent({ headers: t, payload: r }, { signingDate: n = /* @__PURE__ */ new Date(), priorSignature: i, signingRegion: o, signingService: s }) {
      let a = o ?? await this.regionProvider(), { shortDate: u, longDate: l } = pl(n), p = (0, ll.createScope)(u, a, s ?? this.service), f = await (0, Dy.getPayloadHash)({ headers: {}, body: r }, this.sha256), m = new this.sha256();
      m.update(t);
      let h = (0, dl.toHex)(await m.digest()), y = [Ve.EVENT_ALGORITHM_IDENTIFIER, l, p, i, h, f].join(`
`);
      return this.signString(y, { signingDate: n, signingRegion: a, signingService: s });
    }
    async signMessage(t, { signingDate: r = /* @__PURE__ */ new Date(), signingRegion: n, signingService: i }) {
      return this.signEvent({ headers: this.headerMarshaller.format(t.message.headers), payload: t.message.body }, { signingDate: r, signingRegion: n, signingService: i, priorSignature: t.priorSignature }).then((s) => ({ message: t.message, signature: s }));
    }
    async signString(t, { signingDate: r = /* @__PURE__ */ new Date(), signingRegion: n, signingService: i } = {}) {
      let o = await this.credentialProvider();
      this.validateResolvedCredentials(o);
      let s = n ?? await this.regionProvider(), { shortDate: a } = pl(r), u = new this.sha256(await this.getSigningKey(o, s, a, i));
      return u.update((0, yc.toUint8Array)(t)), (0, dl.toHex)(await u.digest());
    }
    async signRequest(t, { signingDate: r = /* @__PURE__ */ new Date(), signableHeaders: n, unsignableHeaders: i, signingRegion: o, signingService: s } = {}) {
      let a = await this.credentialProvider();
      this.validateResolvedCredentials(a);
      let u = o ?? await this.regionProvider(), l = (0, Cx.prepareRequest)(t), { longDate: p, shortDate: f } = pl(r), m = (0, ll.createScope)(f, u, s ?? this.service);
      l.headers[Ve.AMZ_DATE_HEADER] = p, a.sessionToken && (l.headers[Ve.TOKEN_HEADER] = a.sessionToken);
      let h = await (0, Dy.getPayloadHash)(l, this.sha256);
      !(0, UU.hasHeader)(Ve.SHA256_HEADER, l.headers) && this.applyChecksum && (l.headers[Ve.SHA256_HEADER] = h);
      let y = (0, xx.getCanonicalHeaders)(l, i, n), v = await this.getSignature(p, m, this.getSigningKey(a, u, f, s), this.createCanonicalRequest(l, y, h));
      return l.headers[Ve.AUTH_HEADER] = `${Ve.ALGORITHM_IDENTIFIER} Credential=${a.accessKeyId}/${m}, SignedHeaders=${Ox(y)}, Signature=${v}`, l;
    }
    createCanonicalRequest(t, r, n) {
      let i = Object.keys(r).sort();
      return `${t.method}
${this.getCanonicalPath(t)}
${(0, jU.getCanonicalQuery)(t)}
${i.map((o) => `${o}:${r[o]}`).join(`
`)}

${i.join(";")}
${n}`;
    }
    async createStringToSign(t, r, n) {
      let i = new this.sha256();
      i.update((0, yc.toUint8Array)(n));
      let o = await i.digest();
      return `${Ve.ALGORITHM_IDENTIFIER}
${t}
${r}
${(0, dl.toHex)(o)}`;
    }
    getCanonicalPath({ path: t }) {
      if (this.uriEscapePath) {
        let r = [];
        for (let o of t.split("/"))
          o?.length !== 0 && o !== "." && (o === ".." ? r.pop() : r.push(o));
        let n = `${t?.startsWith("/") ? "/" : ""}${r.join("/")}${r.length > 0 && t?.endsWith("/") ? "/" : ""}`;
        return encodeURIComponent(n).replace(/%2F/g, "/");
      }
      return t;
    }
    async getSignature(t, r, n, i) {
      let o = await this.createStringToSign(t, r, i), s = new this.sha256(await n);
      return s.update((0, yc.toUint8Array)(o)), (0, dl.toHex)(await s.digest());
    }
    getSigningKey(t, r, n, i) {
      return (0, ll.getSigningKey)(this.sha256, t, n, r, i || this.service);
    }
    validateResolvedCredentials(t) {
      if (typeof t != "object" || typeof t.accessKeyId != "string" || typeof t.secretAccessKey != "string")
        throw new Error("Resolved credential object is not valid");
    }
  };
  fl.SignatureV4 = ky;
  var pl = /* @__PURE__ */ __name((e35) => {
    let t = (0, WU.iso8601)(e35).replace(/[\-:]/g, "");
    return { longDate: t, shortDate: t.slice(0, 8) };
  }, "pl"), Ox = /* @__PURE__ */ __name((e35) => Object.keys(e35).sort().join(";"), "Ox");
});
var Px = c((pt) => {
  "use strict";
  Object.defineProperty(pt, "__esModule", { value: true });
  pt.prepareRequest = pt.moveHeadersToQuery = pt.getPayloadHash = pt.getCanonicalQuery = pt.getCanonicalHeaders = void 0;
  var Tx = (b(), S(N));
  Tx.__exportStar(Ax(), pt);
  var VU = Oy();
  Object.defineProperty(pt, "getCanonicalHeaders", { enumerable: true, get: function() {
    return VU.getCanonicalHeaders;
  } });
  var $U = Py();
  Object.defineProperty(pt, "getCanonicalQuery", { enumerable: true, get: function() {
    return $U.getCanonicalQuery;
  } });
  var zU = Iy();
  Object.defineProperty(pt, "getPayloadHash", { enumerable: true, get: function() {
    return zU.getPayloadHash;
  } });
  var HU = qy();
  Object.defineProperty(pt, "moveHeadersToQuery", { enumerable: true, get: function() {
    return HU.moveHeadersToQuery;
  } });
  var GU = My();
  Object.defineProperty(pt, "prepareRequest", { enumerable: true, get: function() {
    return GU.prepareRequest;
  } });
  Tx.__exportStar(xy(), pt);
});
var Rx = c((Ho) => {
  "use strict";
  Object.defineProperty(Ho, "__esModule", { value: true });
  Ho.resolveSigV4AuthConfig = Ho.resolveAwsAuthConfig = void 0;
  var QU = Z(), Fy = Px(), zo = qi(), KU = 3e5, YU = /* @__PURE__ */ __name((e35) => {
    let t = e35.credentials ? Ix(e35.credentials) : e35.credentialDefaultProvider(e35), { signingEscapePath: r = true, systemClockOffset: n = e35.systemClockOffset || 0, sha256: i } = e35, o;
    return e35.signer ? o = (0, zo.normalizeProvider)(e35.signer) : e35.regionInfoProvider ? o = /* @__PURE__ */ __name(() => (0, zo.normalizeProvider)(e35.region)().then(async (s) => [await e35.regionInfoProvider(s, { useFipsEndpoint: await e35.useFipsEndpoint(), useDualstackEndpoint: await e35.useDualstackEndpoint() }) || {}, s]).then(([s, a]) => {
      let { signingRegion: u, signingService: l } = s;
      e35.signingRegion = e35.signingRegion || u || a, e35.signingName = e35.signingName || l || e35.serviceId;
      let p = { ...e35, credentials: t, region: e35.signingRegion, service: e35.signingName, sha256: i, uriEscapePath: r }, f = e35.signerConstructor || Fy.SignatureV4;
      return new f(p);
    }), "o") : o = /* @__PURE__ */ __name(async (s) => {
      s = Object.assign({}, { name: "sigv4", signingName: e35.signingName || e35.defaultSigningName, signingRegion: await (0, zo.normalizeProvider)(e35.region)(), properties: {} }, s);
      let a = s.signingRegion, u = s.signingName;
      e35.signingRegion = e35.signingRegion || a, e35.signingName = e35.signingName || u || e35.serviceId;
      let l = { ...e35, credentials: t, region: e35.signingRegion, service: e35.signingName, sha256: i, uriEscapePath: r }, p = e35.signerConstructor || Fy.SignatureV4;
      return new p(l);
    }, "o"), { ...e35, systemClockOffset: n, signingEscapePath: r, credentials: t, signer: o };
  }, "YU");
  Ho.resolveAwsAuthConfig = YU;
  var JU = /* @__PURE__ */ __name((e35) => {
    let t = e35.credentials ? Ix(e35.credentials) : e35.credentialDefaultProvider(e35), { signingEscapePath: r = true, systemClockOffset: n = e35.systemClockOffset || 0, sha256: i } = e35, o;
    return e35.signer ? o = (0, zo.normalizeProvider)(e35.signer) : o = (0, zo.normalizeProvider)(new Fy.SignatureV4({ credentials: t, region: e35.region, service: e35.signingName, sha256: i, uriEscapePath: r })), { ...e35, systemClockOffset: n, signingEscapePath: r, credentials: t, signer: o };
  }, "JU");
  Ho.resolveSigV4AuthConfig = JU;
  var Ix = /* @__PURE__ */ __name((e35) => typeof e35 == "function" ? (0, QU.memoize)(e35, (t) => t.expiration !== void 0 && t.expiration.getTime() - Date.now() < KU, (t) => t.expiration !== void 0) : (0, zo.normalizeProvider)(e35), "Ix");
});
var Ly = c((ml) => {
  "use strict";
  Object.defineProperty(ml, "__esModule", { value: true });
  ml.getSkewCorrectedDate = void 0;
  var XU = /* @__PURE__ */ __name((e35) => new Date(Date.now() + e35), "XU");
  ml.getSkewCorrectedDate = XU;
});
var qx = c((hl) => {
  "use strict";
  Object.defineProperty(hl, "__esModule", { value: true });
  hl.isClockSkewed = void 0;
  var ZU = Ly(), eB = /* @__PURE__ */ __name((e35, t) => Math.abs((0, ZU.getSkewCorrectedDate)(t).getTime() - e35) >= 3e5, "eB");
  hl.isClockSkewed = eB;
});
var Mx = c((_l) => {
  "use strict";
  Object.defineProperty(_l, "__esModule", { value: true });
  _l.getUpdatedSystemClockOffset = void 0;
  var tB = qx(), rB = /* @__PURE__ */ __name((e35, t) => {
    let r = Date.parse(e35);
    return (0, tB.isClockSkewed)(r, t) ? r - Date.now() : t;
  }, "rB");
  _l.getUpdatedSystemClockOffset = rB;
});
var Lx = c((Nt) => {
  "use strict";
  Object.defineProperty(Nt, "__esModule", { value: true });
  Nt.getSigV4AuthPlugin = Nt.getAwsAuthPlugin = Nt.awsAuthMiddlewareOptions = Nt.awsAuthMiddleware = void 0;
  var Fx = Me(), nB = Ly(), Dx = Mx(), iB = /* @__PURE__ */ __name((e35) => (t, r) => async function(n) {
    var i, o, s, a;
    if (!Fx.HttpRequest.isInstance(n.request))
      return t(n);
    let u = (s = (o = (i = r.endpointV2) === null || i === void 0 ? void 0 : i.properties) === null || o === void 0 ? void 0 : o.authSchemes) === null || s === void 0 ? void 0 : s[0], l = u?.name === "sigv4a" ? (a = u?.signingRegionSet) === null || a === void 0 ? void 0 : a.join(",") : void 0, p = await e35.signer(u), f = await t({ ...n, request: await p.sign(n.request, { signingDate: (0, nB.getSkewCorrectedDate)(e35.systemClockOffset), signingRegion: l || r.signing_region, signingService: r.signing_service }) }).catch((h) => {
      var y;
      let v = (y = h.ServerTime) !== null && y !== void 0 ? y : kx(h.$response);
      throw v && (e35.systemClockOffset = (0, Dx.getUpdatedSystemClockOffset)(v, e35.systemClockOffset)), h;
    }), m = kx(f.response);
    return m && (e35.systemClockOffset = (0, Dx.getUpdatedSystemClockOffset)(m, e35.systemClockOffset)), f;
  }, "iB");
  Nt.awsAuthMiddleware = iB;
  var kx = /* @__PURE__ */ __name((e35) => {
    var t, r, n;
    return Fx.HttpResponse.isInstance(e35) ? (r = (t = e35.headers) === null || t === void 0 ? void 0 : t.date) !== null && r !== void 0 ? r : (n = e35.headers) === null || n === void 0 ? void 0 : n.Date : void 0;
  }, "kx");
  Nt.awsAuthMiddlewareOptions = { name: "awsAuthMiddleware", tags: ["SIGNATURE", "AWSAUTH"], relation: "after", toMiddleware: "retryMiddleware", override: true };
  var oB = /* @__PURE__ */ __name((e35) => ({ applyToStack: (t) => {
    t.addRelativeTo((0, Nt.awsAuthMiddleware)(e35), Nt.awsAuthMiddlewareOptions);
  } }), "oB");
  Nt.getAwsAuthPlugin = oB;
  Nt.getSigV4AuthPlugin = Nt.getAwsAuthPlugin;
});
var rn = c((yl) => {
  "use strict";
  Object.defineProperty(yl, "__esModule", { value: true });
  var jx = (b(), S(N));
  jx.__exportStar(Rx(), yl);
  jx.__exportStar(Lx(), yl);
});
var Ux = c((gl) => {
  "use strict";
  Object.defineProperty(gl, "__esModule", { value: true });
  gl.resolveUserAgentConfig = void 0;
  function sB(e35) {
    return { ...e35, customUserAgent: typeof e35.customUserAgent == "string" ? [[e35.customUserAgent]] : e35.customUserAgent };
  }
  __name(sB, "sB");
  gl.resolveUserAgentConfig = sB;
});
var Bx = c((u_e, aB) => {
  aB.exports = { partitions: [{ id: "aws", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-east-1", name: "aws", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$", regions: { "af-south-1": { description: "Africa (Cape Town)" }, "ap-east-1": { description: "Asia Pacific (Hong Kong)" }, "ap-northeast-1": { description: "Asia Pacific (Tokyo)" }, "ap-northeast-2": { description: "Asia Pacific (Seoul)" }, "ap-northeast-3": { description: "Asia Pacific (Osaka)" }, "ap-south-1": { description: "Asia Pacific (Mumbai)" }, "ap-south-2": { description: "Asia Pacific (Hyderabad)" }, "ap-southeast-1": { description: "Asia Pacific (Singapore)" }, "ap-southeast-2": { description: "Asia Pacific (Sydney)" }, "ap-southeast-3": { description: "Asia Pacific (Jakarta)" }, "ap-southeast-4": { description: "Asia Pacific (Melbourne)" }, "aws-global": { description: "AWS Standard global region" }, "ca-central-1": { description: "Canada (Central)" }, "eu-central-1": { description: "Europe (Frankfurt)" }, "eu-central-2": { description: "Europe (Zurich)" }, "eu-north-1": { description: "Europe (Stockholm)" }, "eu-south-1": { description: "Europe (Milan)" }, "eu-south-2": { description: "Europe (Spain)" }, "eu-west-1": { description: "Europe (Ireland)" }, "eu-west-2": { description: "Europe (London)" }, "eu-west-3": { description: "Europe (Paris)" }, "il-central-1": { description: "Israel (Tel Aviv)" }, "me-central-1": { description: "Middle East (UAE)" }, "me-south-1": { description: "Middle East (Bahrain)" }, "sa-east-1": { description: "South America (Sao Paulo)" }, "us-east-1": { description: "US East (N. Virginia)" }, "us-east-2": { description: "US East (Ohio)" }, "us-west-1": { description: "US West (N. California)" }, "us-west-2": { description: "US West (Oregon)" } } }, { id: "aws-cn", outputs: { dnsSuffix: "amazonaws.com.cn", dualStackDnsSuffix: "api.amazonwebservices.com.cn", implicitGlobalRegion: "cn-northwest-1", name: "aws-cn", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^cn\\-\\w+\\-\\d+$", regions: { "aws-cn-global": { description: "AWS China global region" }, "cn-north-1": { description: "China (Beijing)" }, "cn-northwest-1": { description: "China (Ningxia)" } } }, { id: "aws-us-gov", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-gov-west-1", name: "aws-us-gov", supportsDualStack: true, supportsFIPS: true }, regionRegex: "^us\\-gov\\-\\w+\\-\\d+$", regions: { "aws-us-gov-global": { description: "AWS GovCloud (US) global region" }, "us-gov-east-1": { description: "AWS GovCloud (US-East)" }, "us-gov-west-1": { description: "AWS GovCloud (US-West)" } } }, { id: "aws-iso", outputs: { dnsSuffix: "c2s.ic.gov", dualStackDnsSuffix: "c2s.ic.gov", implicitGlobalRegion: "us-iso-east-1", name: "aws-iso", supportsDualStack: false, supportsFIPS: true }, regionRegex: "^us\\-iso\\-\\w+\\-\\d+$", regions: { "aws-iso-global": { description: "AWS ISO (US) global region" }, "us-iso-east-1": { description: "US ISO East" }, "us-iso-west-1": { description: "US ISO WEST" } } }, { id: "aws-iso-b", outputs: { dnsSuffix: "sc2s.sgov.gov", dualStackDnsSuffix: "sc2s.sgov.gov", implicitGlobalRegion: "us-isob-east-1", name: "aws-iso-b", supportsDualStack: false, supportsFIPS: true }, regionRegex: "^us\\-isob\\-\\w+\\-\\d+$", regions: { "aws-iso-b-global": { description: "AWS ISOB (US) global region" }, "us-isob-east-1": { description: "US ISOB East (Ohio)" } } }, { id: "aws-iso-e", outputs: { dnsSuffix: "cloud.adc-e.uk", dualStackDnsSuffix: "cloud.adc-e.uk", implicitGlobalRegion: "eu-isoe-west-1", name: "aws-iso-e", supportsDualStack: false, supportsFIPS: true }, regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$", regions: {} }, { id: "aws-iso-f", outputs: { dnsSuffix: "csp.hci.ic.gov", dualStackDnsSuffix: "csp.hci.ic.gov", implicitGlobalRegion: "us-isof-south-1", name: "aws-iso-f", supportsDualStack: false, supportsFIPS: true }, regionRegex: "^us\\-isof\\-\\w+\\-\\d+$", regions: {} }], version: "1.1" };
});
var jy = c((Zt) => {
  "use strict";
  Object.defineProperty(Zt, "__esModule", { value: true });
  Zt.getUserAgentPrefix = Zt.useDefaultPartitionInfo = Zt.setPartitionInfo = Zt.partition = void 0;
  var cB = (b(), S(N)), Wx = cB.__importDefault(Bx()), Vx = Wx.default, $x = "", uB = /* @__PURE__ */ __name((e35) => {
    let { partitions: t } = Vx;
    for (let n of t) {
      let { regions: i, outputs: o } = n;
      for (let [s, a] of Object.entries(i))
        if (s === e35)
          return { ...o, ...a };
    }
    for (let n of t) {
      let { regionRegex: i, outputs: o } = n;
      if (new RegExp(i).test(e35))
        return { ...o };
    }
    let r = t.find((n) => n.id === "aws");
    if (!r)
      throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
    return { ...r.outputs };
  }, "uB");
  Zt.partition = uB;
  var dB = /* @__PURE__ */ __name((e35, t = "") => {
    Vx = e35, $x = t;
  }, "dB");
  Zt.setPartitionInfo = dB;
  var lB = /* @__PURE__ */ __name(() => {
    (0, Zt.setPartitionInfo)(Wx.default, "");
  }, "lB");
  Zt.useDefaultPartitionInfo = lB;
  var pB = /* @__PURE__ */ __name(() => $x, "pB");
  Zt.getUserAgentPrefix = pB;
});
var El = c((vl) => {
  "use strict";
  Object.defineProperty(vl, "__esModule", { value: true });
  vl.isIpAddress = void 0;
  var fB = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), mB = /* @__PURE__ */ __name((e35) => fB.test(e35) || e35.startsWith("[") && e35.endsWith("]"), "mB");
  vl.isIpAddress = mB;
});
var zx = c((wl) => {
  "use strict";
  Object.defineProperty(wl, "__esModule", { value: true });
  wl.debugId = void 0;
  wl.debugId = "endpoints";
});
var Hx = c((Sl) => {
  "use strict";
  Object.defineProperty(Sl, "__esModule", { value: true });
  Sl.toDebugString = void 0;
  function Uy(e35) {
    return typeof e35 != "object" || e35 == null ? e35 : "ref" in e35 ? `$${Uy(e35.ref)}` : "fn" in e35 ? `${e35.fn}(${(e35.argv || []).map(Uy).join(", ")})` : JSON.stringify(e35, null, 2);
  }
  __name(Uy, "Uy");
  Sl.toDebugString = Uy;
});
var gc = c((Nl) => {
  "use strict";
  Object.defineProperty(Nl, "__esModule", { value: true });
  var Gx = (b(), S(N));
  Gx.__exportStar(zx(), Nl);
  Gx.__exportStar(Hx(), Nl);
});
var Qx = c((bl) => {
  "use strict";
  Object.defineProperty(bl, "__esModule", { value: true });
  bl.EndpointError = void 0;
  var By = class extends Error {
    static {
      __name(this, "By");
    }
    constructor(t) {
      super(t), this.name = "EndpointError";
    }
  };
  bl.EndpointError = By;
});
var Yx = c((Kx) => {
  "use strict";
  Object.defineProperty(Kx, "__esModule", { value: true });
});
var Xx = c((Jx) => {
  "use strict";
  Object.defineProperty(Jx, "__esModule", { value: true });
});
var eC = c((Zx) => {
  "use strict";
  Object.defineProperty(Zx, "__esModule", { value: true });
});
var rC = c((tC) => {
  "use strict";
  Object.defineProperty(tC, "__esModule", { value: true });
});
var iC = c((nC) => {
  "use strict";
  Object.defineProperty(nC, "__esModule", { value: true });
});
var Dt = c((Bn) => {
  "use strict";
  Object.defineProperty(Bn, "__esModule", { value: true });
  var Go = (b(), S(N));
  Go.__exportStar(Qx(), Bn);
  Go.__exportStar(Yx(), Bn);
  Go.__exportStar(Xx(), Bn);
  Go.__exportStar(eC(), Bn);
  Go.__exportStar(rC(), Bn);
  Go.__exportStar(iC(), Bn);
});
var Wy = c((vc) => {
  "use strict";
  Object.defineProperty(vc, "__esModule", { value: true });
  vc.isValidHostLabel = void 0;
  var hB = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"), _B = /* @__PURE__ */ __name((e35, t = false) => {
    if (!t)
      return hB.test(e35);
    let r = e35.split(".");
    for (let n of r)
      if (!(0, vc.isValidHostLabel)(n))
        return false;
    return true;
  }, "_B");
  vc.isValidHostLabel = _B;
});
var oC = c((Ec) => {
  "use strict";
  Object.defineProperty(Ec, "__esModule", { value: true });
  Ec.isVirtualHostableS3Bucket = void 0;
  var yB = El(), gB = Wy(), vB = /* @__PURE__ */ __name((e35, t = false) => {
    if (t) {
      for (let r of e35.split("."))
        if (!(0, Ec.isVirtualHostableS3Bucket)(r))
          return false;
      return true;
    }
    return !(!(0, gB.isValidHostLabel)(e35) || e35.length < 3 || e35.length > 63 || e35 !== e35.toLowerCase() || (0, yB.isIpAddress)(e35));
  }, "vB");
  Ec.isVirtualHostableS3Bucket = vB;
});
var sC = c((xl) => {
  "use strict";
  Object.defineProperty(xl, "__esModule", { value: true });
  xl.parseArn = void 0;
  var EB = /* @__PURE__ */ __name((e35) => {
    let t = e35.split(":");
    if (t.length < 6)
      return null;
    let [r, n, i, o, s, ...a] = t;
    return r !== "arn" || n === "" || i === "" || a[0] === "" ? null : { partition: n, service: i, region: o, accountId: s, resourceId: a[0].includes("/") ? a[0].split("/") : a };
  }, "EB");
  xl.parseArn = EB;
});
var aC = c((wc) => {
  "use strict";
  Object.defineProperty(wc, "__esModule", { value: true });
  var Vy = (b(), S(N));
  Vy.__exportStar(oC(), wc);
  Vy.__exportStar(sC(), wc);
  Vy.__exportStar(jy(), wc);
});
var cC = c((Cl) => {
  "use strict";
  Object.defineProperty(Cl, "__esModule", { value: true });
  Cl.booleanEquals = void 0;
  var wB = /* @__PURE__ */ __name((e35, t) => e35 === t, "wB");
  Cl.booleanEquals = wB;
});
var dC = c((Ol) => {
  "use strict";
  Object.defineProperty(Ol, "__esModule", { value: true });
  Ol.getAttrPathList = void 0;
  var uC = Dt(), SB = /* @__PURE__ */ __name((e35) => {
    let t = e35.split("."), r = [];
    for (let n of t) {
      let i = n.indexOf("[");
      if (i !== -1) {
        if (n.indexOf("]") !== n.length - 1)
          throw new uC.EndpointError(`Path: '${e35}' does not end with ']'`);
        let o = n.slice(i + 1, -1);
        if (Number.isNaN(parseInt(o)))
          throw new uC.EndpointError(`Invalid array index: '${o}' in path: '${e35}'`);
        i !== 0 && r.push(n.slice(0, i)), r.push(o);
      } else
        r.push(n);
    }
    return r;
  }, "SB");
  Ol.getAttrPathList = SB;
});
var lC = c((Al) => {
  "use strict";
  Object.defineProperty(Al, "__esModule", { value: true });
  Al.getAttr = void 0;
  var NB = Dt(), bB = dC(), xB = /* @__PURE__ */ __name((e35, t) => (0, bB.getAttrPathList)(t).reduce((r, n) => {
    if (typeof r != "object")
      throw new NB.EndpointError(`Index '${n}' in '${t}' not found in '${JSON.stringify(e35)}'`);
    return Array.isArray(r) ? r[parseInt(n)] : r[n];
  }, e35), "xB");
  Al.getAttr = xB;
});
var pC = c((Tl) => {
  "use strict";
  Object.defineProperty(Tl, "__esModule", { value: true });
  Tl.isSet = void 0;
  var CB = /* @__PURE__ */ __name((e35) => e35 != null, "CB");
  Tl.isSet = CB;
});
var fC = c((Pl) => {
  "use strict";
  Object.defineProperty(Pl, "__esModule", { value: true });
  Pl.not = void 0;
  var OB = /* @__PURE__ */ __name((e35) => !e35, "OB");
  Pl.not = OB;
});
var hC = c((mC) => {
  "use strict";
  Object.defineProperty(mC, "__esModule", { value: true });
});
var _C = c((Il) => {
  "use strict";
  Object.defineProperty(Il, "__esModule", { value: true });
  Il.HttpAuthLocation = void 0;
  var AB = K();
  Object.defineProperty(Il, "HttpAuthLocation", { enumerable: true, get: function() {
    return AB.HttpAuthLocation;
  } });
});
var gC = c((yC) => {
  "use strict";
  Object.defineProperty(yC, "__esModule", { value: true });
});
var EC = c((vC) => {
  "use strict";
  Object.defineProperty(vC, "__esModule", { value: true });
});
var SC = c((wC) => {
  "use strict";
  Object.defineProperty(wC, "__esModule", { value: true });
});
var bC = c((NC) => {
  "use strict";
  Object.defineProperty(NC, "__esModule", { value: true });
});
var CC = c((xC) => {
  "use strict";
  Object.defineProperty(xC, "__esModule", { value: true });
});
var AC = c((OC) => {
  "use strict";
  Object.defineProperty(OC, "__esModule", { value: true });
});
var PC = c((TC) => {
  "use strict";
  Object.defineProperty(TC, "__esModule", { value: true });
});
var IC = c((Sc) => {
  "use strict";
  Object.defineProperty(Sc, "__esModule", { value: true });
  Sc.HostAddressType = void 0;
  var TB;
  (function(e35) {
    e35.AAAA = "AAAA", e35.A = "A";
  })(TB = Sc.HostAddressType || (Sc.HostAddressType = {}));
});
var qC = c((RC) => {
  "use strict";
  Object.defineProperty(RC, "__esModule", { value: true });
});
var MC = c((Rl) => {
  "use strict";
  Object.defineProperty(Rl, "__esModule", { value: true });
  Rl.EndpointURLScheme = void 0;
  var PB = K();
  Object.defineProperty(Rl, "EndpointURLScheme", { enumerable: true, get: function() {
    return PB.EndpointURLScheme;
  } });
});
var kC = c((DC) => {
  "use strict";
  Object.defineProperty(DC, "__esModule", { value: true });
});
var LC = c((FC) => {
  "use strict";
  Object.defineProperty(FC, "__esModule", { value: true });
});
var UC = c((jC) => {
  "use strict";
  Object.defineProperty(jC, "__esModule", { value: true });
});
var WC = c((BC) => {
  "use strict";
  Object.defineProperty(BC, "__esModule", { value: true });
});
var $C = c((VC) => {
  "use strict";
  Object.defineProperty(VC, "__esModule", { value: true });
});
var HC = c((zC) => {
  "use strict";
  Object.defineProperty(zC, "__esModule", { value: true });
});
var QC = c((GC) => {
  "use strict";
  Object.defineProperty(GC, "__esModule", { value: true });
});
var YC = c((KC) => {
  "use strict";
  Object.defineProperty(KC, "__esModule", { value: true });
});
var JC = c((Li) => {
  "use strict";
  Object.defineProperty(Li, "__esModule", { value: true });
  var Nc = (b(), S(N));
  Nc.__exportStar(WC(), Li);
  Nc.__exportStar($C(), Li);
  Nc.__exportStar(HC(), Li);
  Nc.__exportStar(QC(), Li);
  Nc.__exportStar(YC(), Li);
});
var ZC = c((XC) => {
  "use strict";
  Object.defineProperty(XC, "__esModule", { value: true });
});
var tO = c((eO) => {
  "use strict";
  Object.defineProperty(eO, "__esModule", { value: true });
});
var nO = c((rO) => {
  "use strict";
  Object.defineProperty(rO, "__esModule", { value: true });
});
var oO = c((iO) => {
  "use strict";
  Object.defineProperty(iO, "__esModule", { value: true });
});
var aO = c((sO) => {
  "use strict";
  Object.defineProperty(sO, "__esModule", { value: true });
});
var uO = c((cO) => {
  "use strict";
  Object.defineProperty(cO, "__esModule", { value: true });
});
var lO = c((dO) => {
  "use strict";
  Object.defineProperty(dO, "__esModule", { value: true });
});
var fO = c((pO) => {
  "use strict";
  Object.defineProperty(pO, "__esModule", { value: true });
});
var hO = c((mO) => {
  "use strict";
  Object.defineProperty(mO, "__esModule", { value: true });
});
var yO = c((_O) => {
  "use strict";
  Object.defineProperty(_O, "__esModule", { value: true });
});
var vO = c((gO) => {
  "use strict";
  Object.defineProperty(gO, "__esModule", { value: true });
});
var wO = c((EO) => {
  "use strict";
  Object.defineProperty(EO, "__esModule", { value: true });
});
var SO = c((ql) => {
  "use strict";
  Object.defineProperty(ql, "__esModule", { value: true });
  ql.RequestHandlerProtocol = void 0;
  var IB = K();
  Object.defineProperty(ql, "RequestHandlerProtocol", { enumerable: true, get: function() {
    return IB.RequestHandlerProtocol;
  } });
});
var bO = c((NO) => {
  "use strict";
  Object.defineProperty(NO, "__esModule", { value: true });
});
var CO = c((xO) => {
  "use strict";
  Object.defineProperty(xO, "__esModule", { value: true });
});
var AO = c((OO) => {
  "use strict";
  Object.defineProperty(OO, "__esModule", { value: true });
});
var TO = c(($) => {
  "use strict";
  Object.defineProperty($, "__esModule", { value: true });
  var Q = (b(), S(N));
  Q.__exportStar(hC(), $);
  Q.__exportStar(_C(), $);
  Q.__exportStar(gC(), $);
  Q.__exportStar(EC(), $);
  Q.__exportStar(SC(), $);
  Q.__exportStar(bC(), $);
  Q.__exportStar(CC(), $);
  Q.__exportStar(AC(), $);
  Q.__exportStar(PC(), $);
  Q.__exportStar(IC(), $);
  Q.__exportStar(qC(), $);
  Q.__exportStar(MC(), $);
  Q.__exportStar(kC(), $);
  Q.__exportStar(LC(), $);
  Q.__exportStar(UC(), $);
  Q.__exportStar(JC(), $);
  Q.__exportStar(ZC(), $);
  Q.__exportStar(tO(), $);
  Q.__exportStar(nO(), $);
  Q.__exportStar(oO(), $);
  Q.__exportStar(aO(), $);
  Q.__exportStar(uO(), $);
  Q.__exportStar(lO(), $);
  Q.__exportStar(fO(), $);
  Q.__exportStar(hO(), $);
  Q.__exportStar(yO(), $);
  Q.__exportStar(vO(), $);
  Q.__exportStar(wO(), $);
  Q.__exportStar(SO(), $);
  Q.__exportStar(bO(), $);
  Q.__exportStar(CO(), $);
  Q.__exportStar(AO(), $);
});
var PO = c((Ml) => {
  "use strict";
  Object.defineProperty(Ml, "__esModule", { value: true });
  Ml.parseURL = void 0;
  var zy = TO(), RB = El(), $y = { [zy.EndpointURLScheme.HTTP]: 80, [zy.EndpointURLScheme.HTTPS]: 443 }, qB = /* @__PURE__ */ __name((e35) => {
    let t = (() => {
      try {
        if (e35 instanceof URL)
          return e35;
        if (typeof e35 == "object" && "hostname" in e35) {
          let { hostname: m, port: h, protocol: y = "", path: v = "", query: E = {} } = e35, T = new URL(`${y}//${m}${h ? `:${h}` : ""}${v}`);
          return T.search = Object.entries(E).map(([I, De]) => `${I}=${De}`).join("&"), T;
        }
        return new URL(e35);
      } catch {
        return null;
      }
    })();
    if (!t)
      return console.error(`Unable to parse ${JSON.stringify(e35)} as a whatwg URL.`), null;
    let r = t.href, { host: n, hostname: i, pathname: o, protocol: s, search: a } = t;
    if (a)
      return null;
    let u = s.slice(0, -1);
    if (!Object.values(zy.EndpointURLScheme).includes(u))
      return null;
    let l = (0, RB.isIpAddress)(i), p = r.includes(`${n}:${$y[u]}`) || typeof e35 == "string" && e35.includes(`${n}:${$y[u]}`), f = `${n}${p ? `:${$y[u]}` : ""}`;
    return { scheme: u, authority: f, path: o, normalizedPath: o.endsWith("/") ? o : `${o}/`, isIp: l };
  }, "qB");
  Ml.parseURL = qB;
});
var IO = c((Dl) => {
  "use strict";
  Object.defineProperty(Dl, "__esModule", { value: true });
  Dl.stringEquals = void 0;
  var MB = /* @__PURE__ */ __name((e35, t) => e35 === t, "MB");
  Dl.stringEquals = MB;
});
var RO = c((kl) => {
  "use strict";
  Object.defineProperty(kl, "__esModule", { value: true });
  kl.substring = void 0;
  var DB = /* @__PURE__ */ __name((e35, t, r, n) => t >= r || e35.length < r ? null : n ? e35.substring(e35.length - r, e35.length - t) : e35.substring(t, r), "DB");
  kl.substring = DB;
});
var qO = c((Fl) => {
  "use strict";
  Object.defineProperty(Fl, "__esModule", { value: true });
  Fl.uriEncode = void 0;
  var kB = /* @__PURE__ */ __name((e35) => encodeURIComponent(e35).replace(/[!*'()]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), "kB");
  Fl.uriEncode = kB;
});
var Hy = c((bt) => {
  "use strict";
  Object.defineProperty(bt, "__esModule", { value: true });
  bt.aws = void 0;
  var Nr = (b(), S(N));
  bt.aws = Nr.__importStar(aC());
  Nr.__exportStar(cC(), bt);
  Nr.__exportStar(lC(), bt);
  Nr.__exportStar(pC(), bt);
  Nr.__exportStar(Wy(), bt);
  Nr.__exportStar(fC(), bt);
  Nr.__exportStar(PO(), bt);
  Nr.__exportStar(IO(), bt);
  Nr.__exportStar(RO(), bt);
  Nr.__exportStar(qO(), bt);
});
var Gy = c((Ll) => {
  "use strict";
  Object.defineProperty(Ll, "__esModule", { value: true });
  Ll.evaluateTemplate = void 0;
  var FB = Hy(), LB = /* @__PURE__ */ __name((e35, t) => {
    let r = [], n = { ...t.endpointParams, ...t.referenceRecord }, i = 0;
    for (; i < e35.length; ) {
      let o = e35.indexOf("{", i);
      if (o === -1) {
        r.push(e35.slice(i));
        break;
      }
      r.push(e35.slice(i, o));
      let s = e35.indexOf("}", o);
      if (s === -1) {
        r.push(e35.slice(o));
        break;
      }
      e35[o + 1] === "{" && e35[s + 1] === "}" && (r.push(e35.slice(o + 1, s)), i = s + 2);
      let a = e35.substring(o + 1, s);
      if (a.includes("#")) {
        let [u, l] = a.split("#");
        r.push((0, FB.getAttr)(n[u], l));
      } else
        r.push(n[a]);
      i = s + 1;
    }
    return r.join("");
  }, "LB");
  Ll.evaluateTemplate = LB;
});
var MO = c((jl) => {
  "use strict";
  Object.defineProperty(jl, "__esModule", { value: true });
  jl.getReferenceValue = void 0;
  var jB = /* @__PURE__ */ __name(({ ref: e35 }, t) => ({ ...t.endpointParams, ...t.referenceRecord })[e35], "jB");
  jl.getReferenceValue = jB;
});
var bc = c((Ul) => {
  "use strict";
  Object.defineProperty(Ul, "__esModule", { value: true });
  Ul.evaluateExpression = void 0;
  var UB = Dt(), BB = Qy(), WB = Gy(), VB = MO(), $B = /* @__PURE__ */ __name((e35, t, r) => {
    if (typeof e35 == "string")
      return (0, WB.evaluateTemplate)(e35, r);
    if (e35.fn)
      return (0, BB.callFunction)(e35, r);
    if (e35.ref)
      return (0, VB.getReferenceValue)(e35, r);
    throw new UB.EndpointError(`'${t}': ${String(e35)} is not a string, function or reference.`);
  }, "$B");
  Ul.evaluateExpression = $B;
});
var Qy = c((Bl) => {
  "use strict";
  Object.defineProperty(Bl, "__esModule", { value: true });
  Bl.callFunction = void 0;
  var zB = (b(), S(N)), HB = zB.__importStar(Hy()), GB = bc(), QB = /* @__PURE__ */ __name(({ fn: e35, argv: t }, r) => {
    let n = t.map((i) => ["boolean", "number"].includes(typeof i) ? i : (0, GB.evaluateExpression)(i, "arg", r));
    return e35.split(".").reduce((i, o) => i[o], HB)(...n);
  }, "QB");
  Bl.callFunction = QB;
});
var DO = c((Wl) => {
  "use strict";
  Object.defineProperty(Wl, "__esModule", { value: true });
  Wl.evaluateCondition = void 0;
  var Ky = gc(), KB = Dt(), YB = Qy(), JB = /* @__PURE__ */ __name(({ assign: e35, ...t }, r) => {
    var n, i;
    if (e35 && e35 in r.referenceRecord)
      throw new KB.EndpointError(`'${e35}' is already defined in Reference Record.`);
    let o = (0, YB.callFunction)(t, r);
    return (i = (n = r.logger) === null || n === void 0 ? void 0 : n.debug) === null || i === void 0 || i.call(n, Ky.debugId, `evaluateCondition: ${(0, Ky.toDebugString)(t)} = ${(0, Ky.toDebugString)(o)}`), { result: o === "" ? true : !!o, ...e35 != null && { toAssign: { name: e35, value: o } } };
  }, "JB");
  Wl.evaluateCondition = JB;
});
var $l = c((Vl) => {
  "use strict";
  Object.defineProperty(Vl, "__esModule", { value: true });
  Vl.evaluateConditions = void 0;
  var kO = gc(), XB = DO(), ZB = /* @__PURE__ */ __name((e35 = [], t) => {
    var r, n;
    let i = {};
    for (let o of e35) {
      let { result: s, toAssign: a } = (0, XB.evaluateCondition)(o, { ...t, referenceRecord: { ...t.referenceRecord, ...i } });
      if (!s)
        return { result: s };
      a && (i[a.name] = a.value, (n = (r = t.logger) === null || r === void 0 ? void 0 : r.debug) === null || n === void 0 || n.call(r, kO.debugId, `assign: ${a.name} := ${(0, kO.toDebugString)(a.value)}`));
    }
    return { result: true, referenceRecord: i };
  }, "ZB");
  Vl.evaluateConditions = ZB;
});
var FO = c((zl) => {
  "use strict";
  Object.defineProperty(zl, "__esModule", { value: true });
  zl.getEndpointHeaders = void 0;
  var eW = Dt(), tW = bc(), rW = /* @__PURE__ */ __name((e35, t) => Object.entries(e35).reduce((r, [n, i]) => ({ ...r, [n]: i.map((o) => {
    let s = (0, tW.evaluateExpression)(o, "Header value entry", t);
    if (typeof s != "string")
      throw new eW.EndpointError(`Header '${n}' value '${s}' is not a string`);
    return s;
  }) }), {}), "rW");
  zl.getEndpointHeaders = rW;
});
var jO = c((xc) => {
  "use strict";
  Object.defineProperty(xc, "__esModule", { value: true });
  xc.getEndpointProperty = void 0;
  var LO = Dt(), nW = Gy(), iW = Yy(), oW = /* @__PURE__ */ __name((e35, t) => {
    if (Array.isArray(e35))
      return e35.map((r) => (0, xc.getEndpointProperty)(r, t));
    switch (typeof e35) {
      case "string":
        return (0, nW.evaluateTemplate)(e35, t);
      case "object":
        if (e35 === null)
          throw new LO.EndpointError(`Unexpected endpoint property: ${e35}`);
        return (0, iW.getEndpointProperties)(e35, t);
      case "boolean":
        return e35;
      default:
        throw new LO.EndpointError(`Unexpected endpoint property type: ${typeof e35}`);
    }
  }, "oW");
  xc.getEndpointProperty = oW;
});
var Yy = c((Hl) => {
  "use strict";
  Object.defineProperty(Hl, "__esModule", { value: true });
  Hl.getEndpointProperties = void 0;
  var sW = jO(), aW = /* @__PURE__ */ __name((e35, t) => Object.entries(e35).reduce((r, [n, i]) => ({ ...r, [n]: (0, sW.getEndpointProperty)(i, t) }), {}), "aW");
  Hl.getEndpointProperties = aW;
});
var UO = c((Gl) => {
  "use strict";
  Object.defineProperty(Gl, "__esModule", { value: true });
  Gl.getEndpointUrl = void 0;
  var cW = Dt(), uW = bc(), dW = /* @__PURE__ */ __name((e35, t) => {
    let r = (0, uW.evaluateExpression)(e35, "Endpoint URL", t);
    if (typeof r == "string")
      try {
        return new URL(r);
      } catch (n) {
        throw console.error(`Failed to construct URL with ${r}`, n), n;
      }
    throw new cW.EndpointError(`Endpoint URL must be a string, got ${typeof r}`);
  }, "dW");
  Gl.getEndpointUrl = dW;
});
var WO = c((Ql) => {
  "use strict";
  Object.defineProperty(Ql, "__esModule", { value: true });
  Ql.evaluateEndpointRule = void 0;
  var BO = gc(), lW = $l(), pW = FO(), fW = Yy(), mW = UO(), hW = /* @__PURE__ */ __name((e35, t) => {
    var r, n;
    let { conditions: i, endpoint: o } = e35, { result: s, referenceRecord: a } = (0, lW.evaluateConditions)(i, t);
    if (!s)
      return;
    let u = { ...t, referenceRecord: { ...t.referenceRecord, ...a } }, { url: l, properties: p, headers: f } = o;
    return (n = (r = t.logger) === null || r === void 0 ? void 0 : r.debug) === null || n === void 0 || n.call(r, BO.debugId, `Resolving endpoint from template: ${(0, BO.toDebugString)(o)}`), { ...f != null && { headers: (0, pW.getEndpointHeaders)(f, u) }, ...p != null && { properties: (0, fW.getEndpointProperties)(p, u) }, url: (0, mW.getEndpointUrl)(l, u) };
  }, "hW");
  Ql.evaluateEndpointRule = hW;
});
var VO = c((Kl) => {
  "use strict";
  Object.defineProperty(Kl, "__esModule", { value: true });
  Kl.evaluateErrorRule = void 0;
  var _W = Dt(), yW = $l(), gW = bc(), vW = /* @__PURE__ */ __name((e35, t) => {
    let { conditions: r, error: n } = e35, { result: i, referenceRecord: o } = (0, yW.evaluateConditions)(r, t);
    if (i)
      throw new _W.EndpointError((0, gW.evaluateExpression)(n, "Error", { ...t, referenceRecord: { ...t.referenceRecord, ...o } }));
  }, "vW");
  Kl.evaluateErrorRule = vW;
});
var $O = c((Yl) => {
  "use strict";
  Object.defineProperty(Yl, "__esModule", { value: true });
  Yl.evaluateTreeRule = void 0;
  var EW = $l(), wW = Jy(), SW = /* @__PURE__ */ __name((e35, t) => {
    let { conditions: r, rules: n } = e35, { result: i, referenceRecord: o } = (0, EW.evaluateConditions)(r, t);
    if (i)
      return (0, wW.evaluateRules)(n, { ...t, referenceRecord: { ...t.referenceRecord, ...o } });
  }, "SW");
  Yl.evaluateTreeRule = SW;
});
var Jy = c((Jl) => {
  "use strict";
  Object.defineProperty(Jl, "__esModule", { value: true });
  Jl.evaluateRules = void 0;
  var zO = Dt(), NW = WO(), bW = VO(), xW = $O(), CW = /* @__PURE__ */ __name((e35, t) => {
    for (let r of e35)
      if (r.type === "endpoint") {
        let n = (0, NW.evaluateEndpointRule)(r, t);
        if (n)
          return n;
      } else if (r.type === "error")
        (0, bW.evaluateErrorRule)(r, t);
      else if (r.type === "tree") {
        let n = (0, xW.evaluateTreeRule)(r, t);
        if (n)
          return n;
      } else
        throw new zO.EndpointError(`Unknown endpoint rule: ${r}`);
    throw new zO.EndpointError("Rules evaluation failed");
  }, "CW");
  Jl.evaluateRules = CW;
});
var HO = c((Xy) => {
  "use strict";
  Object.defineProperty(Xy, "__esModule", { value: true });
  var OW = (b(), S(N));
  OW.__exportStar(Jy(), Xy);
});
var GO = c((Zl) => {
  "use strict";
  Object.defineProperty(Zl, "__esModule", { value: true });
  Zl.resolveEndpoint = void 0;
  var Xl = gc(), AW = Dt(), TW = HO(), PW = /* @__PURE__ */ __name((e35, t) => {
    var r, n, i, o, s, a;
    let { endpointParams: u, logger: l } = t, { parameters: p, rules: f } = e35;
    (n = (r = t.logger) === null || r === void 0 ? void 0 : r.debug) === null || n === void 0 || n.call(r, `${Xl.debugId} Initial EndpointParams: ${(0, Xl.toDebugString)(u)}`);
    let m = Object.entries(p).filter(([, v]) => v.default != null).map(([v, E]) => [v, E.default]);
    if (m.length > 0)
      for (let [v, E] of m)
        u[v] = (i = u[v]) !== null && i !== void 0 ? i : E;
    let h = Object.entries(p).filter(([, v]) => v.required).map(([v]) => v);
    for (let v of h)
      if (u[v] == null)
        throw new AW.EndpointError(`Missing required parameter: '${v}'`);
    let y = (0, TW.evaluateRules)(f, { endpointParams: u, logger: l, referenceRecord: {} });
    if (!((o = t.endpointParams) === null || o === void 0) && o.Endpoint)
      try {
        let v = new URL(t.endpointParams.Endpoint), { protocol: E, port: T } = v;
        y.url.protocol = E, y.url.port = T;
      } catch {
      }
    return (a = (s = t.logger) === null || s === void 0 ? void 0 : s.debug) === null || a === void 0 || a.call(s, `${Xl.debugId} Resolved endpoint: ${(0, Xl.toDebugString)(y)}`), y;
  }, "PW");
  Zl.resolveEndpoint = PW;
});
var Ko = c((Qo) => {
  "use strict";
  Object.defineProperty(Qo, "__esModule", { value: true });
  var ep = (b(), S(N));
  ep.__exportStar(jy(), Qo);
  ep.__exportStar(El(), Qo);
  ep.__exportStar(GO(), Qo);
  ep.__exportStar(Dt(), Qo);
});
var QO = c((Ye) => {
  "use strict";
  Object.defineProperty(Ye, "__esModule", { value: true });
  Ye.UA_ESCAPE_CHAR = Ye.UA_VALUE_ESCAPE_REGEX = Ye.UA_NAME_ESCAPE_REGEX = Ye.UA_NAME_SEPARATOR = Ye.SPACE = Ye.X_AMZ_USER_AGENT = Ye.USER_AGENT = void 0;
  Ye.USER_AGENT = "user-agent";
  Ye.X_AMZ_USER_AGENT = "x-amz-user-agent";
  Ye.SPACE = " ";
  Ye.UA_NAME_SEPARATOR = "/";
  Ye.UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
  Ye.UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
  Ye.UA_ESCAPE_CHAR = "-";
});
var KO = c((br) => {
  "use strict";
  Object.defineProperty(br, "__esModule", { value: true });
  br.getUserAgentPlugin = br.getUserAgentMiddlewareOptions = br.userAgentMiddleware = void 0;
  var IW = Ko(), RW = Me(), ft = QO(), qW = /* @__PURE__ */ __name((e35) => (t, r) => async (n) => {
    var i, o;
    let { request: s } = n;
    if (!RW.HttpRequest.isInstance(s))
      return t(n);
    let { headers: a } = s, u = ((i = r?.userAgent) === null || i === void 0 ? void 0 : i.map(Zy)) || [], l = (await e35.defaultUserAgentProvider()).map(Zy), p = ((o = e35?.customUserAgent) === null || o === void 0 ? void 0 : o.map(Zy)) || [], f = (0, IW.getUserAgentPrefix)(), m = (f ? [f] : []).concat([...l, ...u, ...p]).join(ft.SPACE), h = [...l.filter((y) => y.startsWith("aws-sdk-")), ...p].join(ft.SPACE);
    return e35.runtime !== "browser" ? (h && (a[ft.X_AMZ_USER_AGENT] = a[ft.X_AMZ_USER_AGENT] ? `${a[ft.USER_AGENT]} ${h}` : h), a[ft.USER_AGENT] = m) : a[ft.X_AMZ_USER_AGENT] = m, t({ ...n, request: s });
  }, "qW");
  br.userAgentMiddleware = qW;
  var Zy = /* @__PURE__ */ __name((e35) => {
    var t;
    let r = e35[0].split(ft.UA_NAME_SEPARATOR).map((a) => a.replace(ft.UA_NAME_ESCAPE_REGEX, ft.UA_ESCAPE_CHAR)).join(ft.UA_NAME_SEPARATOR), n = (t = e35[1]) === null || t === void 0 ? void 0 : t.replace(ft.UA_VALUE_ESCAPE_REGEX, ft.UA_ESCAPE_CHAR), i = r.indexOf(ft.UA_NAME_SEPARATOR), o = r.substring(0, i), s = r.substring(i + 1);
    return o === "api" && (s = s.toLowerCase()), [o, s, n].filter((a) => a && a.length > 0).reduce((a, u, l) => {
      switch (l) {
        case 0:
          return u;
        case 1:
          return `${a}/${u}`;
        default:
          return `${a}#${u}`;
      }
    }, "");
  }, "Zy");
  br.getUserAgentMiddlewareOptions = { name: "getUserAgentMiddleware", step: "build", priority: "low", tags: ["SET_USER_AGENT", "USER_AGENT"], override: true };
  var MW = /* @__PURE__ */ __name((e35) => ({ applyToStack: (t) => {
    t.add((0, br.userAgentMiddleware)(e35), br.getUserAgentMiddlewareOptions);
  } }), "MW");
  br.getUserAgentPlugin = MW;
});
var Cc = c((tp) => {
  "use strict";
  Object.defineProperty(tp, "__esModule", { value: true });
  var YO = (b(), S(N));
  YO.__exportStar(Ux(), tp);
  YO.__exportStar(KO(), tp);
});
var JO = c((ji) => {
  "use strict";
  Object.defineProperty(ji, "__esModule", { value: true });
  ji.booleanSelector = ji.SelectorType = void 0;
  var DW;
  (function(e35) {
    e35.ENV = "env", e35.CONFIG = "shared config entry";
  })(DW = ji.SelectorType || (ji.SelectorType = {}));
  var kW = /* @__PURE__ */ __name((e35, t, r) => {
    if (t in e35) {
      if (e35[t] === "true")
        return true;
      if (e35[t] === "false")
        return false;
      throw new Error(`Cannot load ${r} "${t}". Expected "true" or "false", got ${e35[t]}.`);
    }
  }, "kW");
  ji.booleanSelector = kW;
});
var tg = c((eg) => {
  "use strict";
  Object.defineProperty(eg, "__esModule", { value: true });
  var FW = (b(), S(N));
  FW.__exportStar(JO(), eg);
});
var XO = c((kt) => {
  "use strict";
  Object.defineProperty(kt, "__esModule", { value: true });
  kt.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = kt.DEFAULT_USE_DUALSTACK_ENDPOINT = kt.CONFIG_USE_DUALSTACK_ENDPOINT = kt.ENV_USE_DUALSTACK_ENDPOINT = void 0;
  var rp = tg();
  kt.ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
  kt.CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
  kt.DEFAULT_USE_DUALSTACK_ENDPOINT = false;
  kt.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = { environmentVariableSelector: (e35) => (0, rp.booleanSelector)(e35, kt.ENV_USE_DUALSTACK_ENDPOINT, rp.SelectorType.ENV), configFileSelector: (e35) => (0, rp.booleanSelector)(e35, kt.CONFIG_USE_DUALSTACK_ENDPOINT, rp.SelectorType.CONFIG), default: false };
});
var ZO = c((Ft) => {
  "use strict";
  Object.defineProperty(Ft, "__esModule", { value: true });
  Ft.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = Ft.DEFAULT_USE_FIPS_ENDPOINT = Ft.CONFIG_USE_FIPS_ENDPOINT = Ft.ENV_USE_FIPS_ENDPOINT = void 0;
  var np = tg();
  Ft.ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
  Ft.CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
  Ft.DEFAULT_USE_FIPS_ENDPOINT = false;
  Ft.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = { environmentVariableSelector: (e35) => (0, np.booleanSelector)(e35, Ft.ENV_USE_FIPS_ENDPOINT, np.SelectorType.ENV), configFileSelector: (e35) => (0, np.booleanSelector)(e35, Ft.CONFIG_USE_FIPS_ENDPOINT, np.SelectorType.CONFIG), default: false };
});
var tA = c((ip) => {
  "use strict";
  Object.defineProperty(ip, "__esModule", { value: true });
  ip.resolveCustomEndpointsConfig = void 0;
  var eA = qi(), LW = /* @__PURE__ */ __name((e35) => {
    var t, r;
    let { endpoint: n, urlParser: i } = e35;
    return { ...e35, tls: (t = e35.tls) !== null && t !== void 0 ? t : true, endpoint: (0, eA.normalizeProvider)(typeof n == "string" ? i(n) : n), isCustomEndpoint: true, useDualstackEndpoint: (0, eA.normalizeProvider)((r = e35.useDualstackEndpoint) !== null && r !== void 0 ? r : false) };
  }, "LW");
  ip.resolveCustomEndpointsConfig = LW;
});
var rA = c((op) => {
  "use strict";
  Object.defineProperty(op, "__esModule", { value: true });
  op.getEndpointFromRegion = void 0;
  var jW = /* @__PURE__ */ __name(async (e35) => {
    var t;
    let { tls: r = true } = e35, n = await e35.region();
    if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(n))
      throw new Error("Invalid region in client config");
    let o = await e35.useDualstackEndpoint(), s = await e35.useFipsEndpoint(), { hostname: a } = (t = await e35.regionInfoProvider(n, { useDualstackEndpoint: o, useFipsEndpoint: s })) !== null && t !== void 0 ? t : {};
    if (!a)
      throw new Error("Cannot resolve hostname from client config");
    return e35.urlParser(`${r ? "https:" : "http:"}//${a}`);
  }, "jW");
  op.getEndpointFromRegion = jW;
});
var iA = c((sp) => {
  "use strict";
  Object.defineProperty(sp, "__esModule", { value: true });
  sp.resolveEndpointsConfig = void 0;
  var nA = qi(), UW = rA(), BW = /* @__PURE__ */ __name((e35) => {
    var t, r;
    let n = (0, nA.normalizeProvider)((t = e35.useDualstackEndpoint) !== null && t !== void 0 ? t : false), { endpoint: i, useFipsEndpoint: o, urlParser: s } = e35;
    return { ...e35, tls: (r = e35.tls) !== null && r !== void 0 ? r : true, endpoint: i ? (0, nA.normalizeProvider)(typeof i == "string" ? s(i) : i) : () => (0, UW.getEndpointFromRegion)({ ...e35, useDualstackEndpoint: n, useFipsEndpoint: o }), isCustomEndpoint: !!i, useDualstackEndpoint: n };
  }, "BW");
  sp.resolveEndpointsConfig = BW;
});
var oA = c((Yo) => {
  "use strict";
  Object.defineProperty(Yo, "__esModule", { value: true });
  var ap = (b(), S(N));
  ap.__exportStar(XO(), Yo);
  ap.__exportStar(ZO(), Yo);
  ap.__exportStar(tA(), Yo);
  ap.__exportStar(iA(), Yo);
});
var sA = c((Lt) => {
  "use strict";
  Object.defineProperty(Lt, "__esModule", { value: true });
  Lt.NODE_REGION_CONFIG_FILE_OPTIONS = Lt.NODE_REGION_CONFIG_OPTIONS = Lt.REGION_INI_NAME = Lt.REGION_ENV_NAME = void 0;
  Lt.REGION_ENV_NAME = "AWS_REGION";
  Lt.REGION_INI_NAME = "region";
  Lt.NODE_REGION_CONFIG_OPTIONS = { environmentVariableSelector: (e35) => e35[Lt.REGION_ENV_NAME], configFileSelector: (e35) => e35[Lt.REGION_INI_NAME], default: () => {
    throw new Error("Region is missing");
  } };
  Lt.NODE_REGION_CONFIG_FILE_OPTIONS = { preferredFile: "credentials" };
});
var rg = c((cp) => {
  "use strict";
  Object.defineProperty(cp, "__esModule", { value: true });
  cp.isFipsRegion = void 0;
  var WW = /* @__PURE__ */ __name((e35) => typeof e35 == "string" && (e35.startsWith("fips-") || e35.endsWith("-fips")), "WW");
  cp.isFipsRegion = WW;
});
var aA = c((up) => {
  "use strict";
  Object.defineProperty(up, "__esModule", { value: true });
  up.getRealRegion = void 0;
  var VW = rg(), $W = /* @__PURE__ */ __name((e35) => (0, VW.isFipsRegion)(e35) ? ["fips-aws-global", "aws-fips"].includes(e35) ? "us-east-1" : e35.replace(/fips-(dkr-|prod-)?|-fips/, "") : e35, "$W");
  up.getRealRegion = $W;
});
var uA = c((dp) => {
  "use strict";
  Object.defineProperty(dp, "__esModule", { value: true });
  dp.resolveRegionConfig = void 0;
  var cA = aA(), zW = rg(), HW = /* @__PURE__ */ __name((e35) => {
    let { region: t, useFipsEndpoint: r } = e35;
    if (!t)
      throw new Error("Region is missing");
    return { ...e35, region: async () => {
      if (typeof t == "string")
        return (0, cA.getRealRegion)(t);
      let n = await t();
      return (0, cA.getRealRegion)(n);
    }, useFipsEndpoint: async () => {
      let n = typeof t == "string" ? t : await t();
      return (0, zW.isFipsRegion)(n) ? true : typeof r != "function" ? Promise.resolve(!!r) : r();
    } };
  }, "HW");
  dp.resolveRegionConfig = HW;
});
var lA = c((lp) => {
  "use strict";
  Object.defineProperty(lp, "__esModule", { value: true });
  var dA = (b(), S(N));
  dA.__exportStar(sA(), lp);
  dA.__exportStar(uA(), lp);
});
var fA = c((pA) => {
  "use strict";
  Object.defineProperty(pA, "__esModule", { value: true });
});
var hA = c((mA) => {
  "use strict";
  Object.defineProperty(mA, "__esModule", { value: true });
});
var _A = c((pp) => {
  "use strict";
  Object.defineProperty(pp, "__esModule", { value: true });
  pp.getHostnameFromVariants = void 0;
  var GW = /* @__PURE__ */ __name((e35 = [], { useFipsEndpoint: t, useDualstackEndpoint: r }) => {
    var n;
    return (n = e35.find(({ tags: i }) => t === i.includes("fips") && r === i.includes("dualstack"))) === null || n === void 0 ? void 0 : n.hostname;
  }, "GW");
  pp.getHostnameFromVariants = GW;
});
var yA = c((fp) => {
  "use strict";
  Object.defineProperty(fp, "__esModule", { value: true });
  fp.getResolvedHostname = void 0;
  var QW = /* @__PURE__ */ __name((e35, { regionHostname: t, partitionHostname: r }) => t || (r ? r.replace("{region}", e35) : void 0), "QW");
  fp.getResolvedHostname = QW;
});
var gA = c((mp) => {
  "use strict";
  Object.defineProperty(mp, "__esModule", { value: true });
  mp.getResolvedPartition = void 0;
  var KW = /* @__PURE__ */ __name((e35, { partitionHash: t }) => {
    var r;
    return (r = Object.keys(t || {}).find((n) => t[n].regions.includes(e35))) !== null && r !== void 0 ? r : "aws";
  }, "KW");
  mp.getResolvedPartition = KW;
});
var vA = c((hp) => {
  "use strict";
  Object.defineProperty(hp, "__esModule", { value: true });
  hp.getResolvedSigningRegion = void 0;
  var YW = /* @__PURE__ */ __name((e35, { signingRegion: t, regionRegex: r, useFipsEndpoint: n }) => {
    if (t)
      return t;
    if (n) {
      let i = r.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."), o = e35.match(i);
      if (o)
        return o[0].slice(1, -1);
    }
  }, "YW");
  hp.getResolvedSigningRegion = YW;
});
var wA = c((_p) => {
  "use strict";
  Object.defineProperty(_p, "__esModule", { value: true });
  _p.getRegionInfo = void 0;
  var EA = _A(), JW = yA(), XW = gA(), ZW = vA(), e210 = /* @__PURE__ */ __name((e35, { useFipsEndpoint: t = false, useDualstackEndpoint: r = false, signingService: n, regionHash: i, partitionHash: o }) => {
    var s, a, u, l, p, f;
    let m = (0, XW.getResolvedPartition)(e35, { partitionHash: o }), h = e35 in i ? e35 : (a = (s = o[m]) === null || s === void 0 ? void 0 : s.endpoint) !== null && a !== void 0 ? a : e35, y = { useFipsEndpoint: t, useDualstackEndpoint: r }, v = (0, EA.getHostnameFromVariants)((u = i[h]) === null || u === void 0 ? void 0 : u.variants, y), E = (0, EA.getHostnameFromVariants)((l = o[m]) === null || l === void 0 ? void 0 : l.variants, y), T = (0, JW.getResolvedHostname)(h, { regionHostname: v, partitionHostname: E });
    if (T === void 0)
      throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion: h, useFipsEndpoint: t, useDualstackEndpoint: r }}`);
    let I = (0, ZW.getResolvedSigningRegion)(T, { signingRegion: (p = i[h]) === null || p === void 0 ? void 0 : p.signingRegion, regionRegex: o[m].regionRegex, useFipsEndpoint: t });
    return { partition: m, signingService: n, hostname: T, ...I && { signingRegion: I }, ...((f = i[h]) === null || f === void 0 ? void 0 : f.signingService) && { signingService: i[h].signingService } };
  }, "e2");
  _p.getRegionInfo = e210;
});
var SA = c((Oc) => {
  "use strict";
  Object.defineProperty(Oc, "__esModule", { value: true });
  var ng = (b(), S(N));
  ng.__exportStar(fA(), Oc);
  ng.__exportStar(hA(), Oc);
  ng.__exportStar(wA(), Oc);
});
var xr = c((Ac) => {
  "use strict";
  Object.defineProperty(Ac, "__esModule", { value: true });
  var ig = (b(), S(N));
  ig.__exportStar(oA(), Ac);
  ig.__exportStar(lA(), Ac);
  ig.__exportStar(SA(), Ac);
});
var Tc = c((nn) => {
  "use strict";
  Object.defineProperty(nn, "__esModule", { value: true });
  nn.getContentLengthPlugin = nn.contentLengthMiddlewareOptions = nn.contentLengthMiddleware = void 0;
  var t2 = Me(), NA = "content-length";
  function bA(e35) {
    return (t) => async (r) => {
      let n = r.request;
      if (t2.HttpRequest.isInstance(n)) {
        let { body: i, headers: o } = n;
        if (i && Object.keys(o).map((s) => s.toLowerCase()).indexOf(NA) === -1)
          try {
            let s = e35(i);
            n.headers = { ...n.headers, [NA]: String(s) };
          } catch {
          }
      }
      return t({ ...r, request: n });
    };
  }
  __name(bA, "bA");
  nn.contentLengthMiddleware = bA;
  nn.contentLengthMiddlewareOptions = { step: "build", tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"], name: "contentLengthMiddleware", override: true };
  var r2 = /* @__PURE__ */ __name((e35) => ({ applyToStack: (t) => {
    t.add(bA(e35.bodyLengthChecker), nn.contentLengthMiddlewareOptions);
  } }), "r2");
  nn.getContentLengthPlugin = r2;
});
var xA = c((mt) => {
  "use strict";
  Object.defineProperty(mt, "__esModule", { value: true });
  mt.isArnBucketName = mt.isDnsCompatibleBucketName = mt.S3_HOSTNAME_PATTERN = mt.DOT_PATTERN = mt.resolveParamsForS3 = void 0;
  var n2 = /* @__PURE__ */ __name(async (e35) => {
    let t = e35?.Bucket || "";
    if (typeof e35.Bucket == "string" && (e35.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), (0, mt.isArnBucketName)(t)) {
      if (e35.ForcePathStyle === true)
        throw new Error("Path-style addressing cannot be used with ARN buckets");
    } else
      (!(0, mt.isDnsCompatibleBucketName)(t) || t.indexOf(".") !== -1 && !String(e35.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) && (e35.ForcePathStyle = true);
    return e35.DisableMultiRegionAccessPoints && (e35.disableMultiRegionAccessPoints = true, e35.DisableMRAP = true), e35;
  }, "n2");
  mt.resolveParamsForS3 = n2;
  var i2 = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, o2 = /(\d+\.){3}\d+/, s2 = /\.\./;
  mt.DOT_PATTERN = /\./;
  mt.S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
  var a2 = /* @__PURE__ */ __name((e35) => i2.test(e35) && !o2.test(e35) && !s2.test(e35), "a2");
  mt.isDnsCompatibleBucketName = a2;
  var c2 = /* @__PURE__ */ __name((e35) => {
    let [t, r, n, i, o, s] = e35.split(":"), a = t === "arn" && e35.split(":").length >= 6, u = [t, r, n, o, s].filter(Boolean).length === 5;
    if (a && !u)
      throw new Error(`Invalid ARN: ${e35} was an invalid ARN.`);
    return t === "arn" && !!r && !!n && !!o && !!s;
  }, "c2");
  mt.isArnBucketName = c2;
});
var CA = c((og) => {
  "use strict";
  Object.defineProperty(og, "__esModule", { value: true });
  var u2 = (b(), S(N));
  u2.__exportStar(xA(), og);
});
var OA = c((yp) => {
  "use strict";
  Object.defineProperty(yp, "__esModule", { value: true });
  yp.createConfigValueProvider = void 0;
  var d2 = /* @__PURE__ */ __name((e35, t, r) => {
    let n = /* @__PURE__ */ __name(async () => {
      var i;
      let o = (i = r[e35]) !== null && i !== void 0 ? i : r[t];
      return typeof o == "function" ? o() : o;
    }, "n");
    return e35 === "endpoint" || t === "endpoint" ? async () => {
      let i = await n();
      if (i && typeof i == "object") {
        if ("url" in i)
          return i.url.href;
        if ("hostname" in i) {
          let { protocol: o, hostname: s, port: a, path: u } = i;
          return `${o}//${s}${a ? ":" + a : ""}${u}`;
        }
      }
      return i;
    } : n;
  }, "d2");
  yp.createConfigValueProvider = d2;
});
var AA = c((gp) => {
  "use strict";
  Object.defineProperty(gp, "__esModule", { value: true });
  gp.fromEnv = void 0;
  var l2 = Z(), p2 = /* @__PURE__ */ __name((e35) => async () => {
    try {
      let t = e35(process.env);
      if (t === void 0)
        throw new Error();
      return t;
    } catch (t) {
      throw new l2.CredentialsProviderError(t.message || `Cannot load config from environment variables with getter: ${e35}`);
    }
  }, "p2");
  gp.fromEnv = p2;
});
var Pc = c((vp) => {
  "use strict";
  Object.defineProperty(vp, "__esModule", { value: true });
  vp.getHomeDir = void 0;
  var f2 = D("os"), m2 = D("path"), sg = {}, h2 = /* @__PURE__ */ __name(() => process && process.geteuid ? `${process.geteuid()}` : "DEFAULT", "h2"), _2 = /* @__PURE__ */ __name(() => {
    let { HOME: e35, USERPROFILE: t, HOMEPATH: r, HOMEDRIVE: n = `C:${m2.sep}` } = process.env;
    if (e35)
      return e35;
    if (t)
      return t;
    if (r)
      return `${n}${r}`;
    let i = h2();
    return sg[i] || (sg[i] = (0, f2.homedir)()), sg[i];
  }, "_2");
  vp.getHomeDir = _2;
});
var TA = c((Cr) => {
  "use strict";
  Object.defineProperty(Cr, "__esModule", { value: true });
  Cr.getProfileName = Cr.DEFAULT_PROFILE = Cr.ENV_PROFILE = void 0;
  Cr.ENV_PROFILE = "AWS_PROFILE";
  Cr.DEFAULT_PROFILE = "default";
  var y2 = /* @__PURE__ */ __name((e35) => e35.profile || process.env[Cr.ENV_PROFILE] || Cr.DEFAULT_PROFILE, "y2");
  Cr.getProfileName = y2;
});
var ag = c((Ep) => {
  "use strict";
  Object.defineProperty(Ep, "__esModule", { value: true });
  Ep.getSSOTokenFilepath = void 0;
  var g2 = D("crypto"), v2 = D("path"), E2 = Pc(), w2 = /* @__PURE__ */ __name((e35) => {
    let r = (0, g2.createHash)("sha1").update(e35).digest("hex");
    return (0, v2.join)((0, E2.getHomeDir)(), ".aws", "sso", "cache", `${r}.json`);
  }, "w2");
  Ep.getSSOTokenFilepath = w2;
});
var PA = c((wp) => {
  "use strict";
  Object.defineProperty(wp, "__esModule", { value: true });
  wp.getSSOTokenFromFile = void 0;
  var S2 = D("fs"), N2 = ag(), { readFile: b2 } = S2.promises, x2 = /* @__PURE__ */ __name(async (e35) => {
    let t = (0, N2.getSSOTokenFilepath)(e35), r = await b2(t, "utf8");
    return JSON.parse(r);
  }, "x2");
  wp.getSSOTokenFromFile = x2;
});
var qA = c((Sp) => {
  "use strict";
  Object.defineProperty(Sp, "__esModule", { value: true });
  Sp.getConfigData = void 0;
  var IA = K(), RA = Jo(), C2 = /* @__PURE__ */ __name((e35) => Object.entries(e35).filter(([t]) => {
    let r = t.split(RA.CONFIG_PREFIX_SEPARATOR);
    return !!(r.length === 2 && Object.values(IA.IniSectionType).includes(r[0]));
  }).reduce((t, [r, n]) => {
    let i = r.startsWith(IA.IniSectionType.PROFILE) ? r.split(RA.CONFIG_PREFIX_SEPARATOR)[1] : r;
    return t[i] = n, t;
  }, { ...e35.default && { default: e35.default } }), "C2");
  Sp.getConfigData = C2;
});
var cg = c((Ui) => {
  "use strict";
  Object.defineProperty(Ui, "__esModule", { value: true });
  Ui.getConfigFilepath = Ui.ENV_CONFIG_PATH = void 0;
  var O2 = D("path"), A2 = Pc();
  Ui.ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
  var T2 = /* @__PURE__ */ __name(() => process.env[Ui.ENV_CONFIG_PATH] || (0, O2.join)((0, A2.getHomeDir)(), ".aws", "config"), "T2");
  Ui.getConfigFilepath = T2;
});
var MA = c((Bi) => {
  "use strict";
  Object.defineProperty(Bi, "__esModule", { value: true });
  Bi.getCredentialsFilepath = Bi.ENV_CREDENTIALS_PATH = void 0;
  var P2 = D("path"), I2 = Pc();
  Bi.ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
  var R2 = /* @__PURE__ */ __name(() => process.env[Bi.ENV_CREDENTIALS_PATH] || (0, P2.join)((0, I2.getHomeDir)(), ".aws", "credentials"), "R2");
  Bi.getCredentialsFilepath = R2;
});
var ug = c((Np) => {
  "use strict";
  Object.defineProperty(Np, "__esModule", { value: true });
  Np.parseIni = void 0;
  var q2 = K(), DA = Jo(), M2 = /^([\w-]+)\s(["'])?([\w-@]+)\2$/, D2 = ["__proto__", "profile __proto__"], k2 = /* @__PURE__ */ __name((e35) => {
    let t = {}, r, n;
    for (let i of e35.split(/\r?\n/)) {
      let o = i.split(/(^|\s)[;#]/)[0].trim();
      if (o[0] === "[" && o[o.length - 1] === "]") {
        r = void 0, n = void 0;
        let a = o.substring(1, o.length - 1), u = M2.exec(a);
        if (u) {
          let [, l, , p] = u;
          Object.values(q2.IniSectionType).includes(l) && (r = [l, p].join(DA.CONFIG_PREFIX_SEPARATOR));
        } else
          r = a;
        if (D2.includes(a))
          throw new Error(`Found invalid profile name "${a}"`);
      } else if (r) {
        let a = o.indexOf("=");
        if (![0, -1].includes(a)) {
          let [u, l] = [o.substring(0, a).trim(), o.substring(a + 1).trim()];
          if (l === "")
            n = u;
          else {
            n && i.trimStart() === i && (n = void 0), t[r] = t[r] || {};
            let p = n ? [n, u].join(DA.CONFIG_PREFIX_SEPARATOR) : u;
            t[r][p] = l;
          }
        }
      }
    }
    return t;
  }, "k2");
  Np.parseIni = k2;
});
var lg = c((bp) => {
  "use strict";
  Object.defineProperty(bp, "__esModule", { value: true });
  bp.slurpFile = void 0;
  var F2 = D("fs"), { readFile: L2 } = F2.promises, dg = {}, j2 = /* @__PURE__ */ __name((e35, t) => ((!dg[e35] || t?.ignoreCache) && (dg[e35] = L2(e35, "utf8")), dg[e35]), "j2");
  bp.slurpFile = j2;
});
var Jo = c((Xo) => {
  "use strict";
  Object.defineProperty(Xo, "__esModule", { value: true });
  Xo.loadSharedConfigFiles = Xo.CONFIG_PREFIX_SEPARATOR = void 0;
  var U2 = qA(), B2 = cg(), W2 = MA(), kA = ug(), FA = lg(), LA = /* @__PURE__ */ __name(() => ({}), "LA");
  Xo.CONFIG_PREFIX_SEPARATOR = ".";
  var V2 = /* @__PURE__ */ __name(async (e35 = {}) => {
    let { filepath: t = (0, W2.getCredentialsFilepath)(), configFilepath: r = (0, B2.getConfigFilepath)() } = e35, n = await Promise.all([(0, FA.slurpFile)(r, { ignoreCache: e35.ignoreCache }).then(kA.parseIni).then(U2.getConfigData).catch(LA), (0, FA.slurpFile)(t, { ignoreCache: e35.ignoreCache }).then(kA.parseIni).catch(LA)]);
    return { configFile: n[0], credentialsFile: n[1] };
  }, "V2");
  Xo.loadSharedConfigFiles = V2;
});
var UA = c((xp) => {
  "use strict";
  Object.defineProperty(xp, "__esModule", { value: true });
  xp.getSsoSessionData = void 0;
  var $2 = K(), jA = Jo(), z2 = /* @__PURE__ */ __name((e35) => Object.entries(e35).filter(([t]) => t.startsWith($2.IniSectionType.SSO_SESSION + jA.CONFIG_PREFIX_SEPARATOR)).reduce((t, [r, n]) => ({ ...t, [r.split(jA.CONFIG_PREFIX_SEPARATOR)[1]]: n }), {}), "z2");
  xp.getSsoSessionData = z2;
});
var BA = c((Cp) => {
  "use strict";
  Object.defineProperty(Cp, "__esModule", { value: true });
  Cp.loadSsoSessionData = void 0;
  var H2 = cg(), G2 = UA(), Q2 = ug(), K2 = lg(), Y2 = /* @__PURE__ */ __name(() => ({}), "Y2"), J2 = /* @__PURE__ */ __name(async (e35 = {}) => {
    var t;
    return (0, K2.slurpFile)((t = e35.configFilepath) !== null && t !== void 0 ? t : (0, H2.getConfigFilepath)()).then(Q2.parseIni).then(G2.getSsoSessionData).catch(Y2);
  }, "J2");
  Cp.loadSsoSessionData = J2;
});
var WA = c((Op) => {
  "use strict";
  Object.defineProperty(Op, "__esModule", { value: true });
  Op.mergeConfigFiles = void 0;
  var X2 = /* @__PURE__ */ __name((...e35) => {
    let t = {};
    for (let r of e35)
      for (let [n, i] of Object.entries(r))
        t[n] !== void 0 ? Object.assign(t[n], i) : t[n] = i;
    return t;
  }, "X2");
  Op.mergeConfigFiles = X2;
});
var VA = c((Ap) => {
  "use strict";
  Object.defineProperty(Ap, "__esModule", { value: true });
  Ap.parseKnownFiles = void 0;
  var Z2 = Jo(), eV = WA(), tV = /* @__PURE__ */ __name(async (e35) => {
    let t = await (0, Z2.loadSharedConfigFiles)(e35);
    return (0, eV.mergeConfigFiles)(t.configFile, t.credentialsFile);
  }, "tV");
  Ap.parseKnownFiles = tV;
});
var zA = c(($A) => {
  "use strict";
  Object.defineProperty($A, "__esModule", { value: true });
});
var er = c((Or) => {
  "use strict";
  Object.defineProperty(Or, "__esModule", { value: true });
  var Wn = (b(), S(N));
  Wn.__exportStar(Pc(), Or);
  Wn.__exportStar(TA(), Or);
  Wn.__exportStar(ag(), Or);
  Wn.__exportStar(PA(), Or);
  Wn.__exportStar(Jo(), Or);
  Wn.__exportStar(BA(), Or);
  Wn.__exportStar(VA(), Or);
  Wn.__exportStar(zA(), Or);
});
var GA = c((Tp) => {
  "use strict";
  Object.defineProperty(Tp, "__esModule", { value: true });
  Tp.fromSharedConfigFiles = void 0;
  var rV = Z(), HA = er(), nV = /* @__PURE__ */ __name((e35, { preferredFile: t = "config", ...r } = {}) => async () => {
    let n = (0, HA.getProfileName)(r), { configFile: i, credentialsFile: o } = await (0, HA.loadSharedConfigFiles)(r), s = o[n] || {}, a = i[n] || {}, u = t === "config" ? { ...s, ...a } : { ...a, ...s };
    try {
      let p = e35(u, t === "config" ? i : o);
      if (p === void 0)
        throw new Error();
      return p;
    } catch (l) {
      throw new rV.CredentialsProviderError(l.message || `Cannot load config for profile ${n} in SDK configuration files with getter: ${e35}`);
    }
  }, "nV");
  Tp.fromSharedConfigFiles = nV;
});
var QA = c((Pp) => {
  "use strict";
  Object.defineProperty(Pp, "__esModule", { value: true });
  Pp.fromStatic = void 0;
  var iV = Z(), oV = /* @__PURE__ */ __name((e35) => typeof e35 == "function", "oV"), sV = /* @__PURE__ */ __name((e35) => oV(e35) ? async () => await e35() : (0, iV.fromStatic)(e35), "sV");
  Pp.fromStatic = sV;
});
var YA = c((Ip) => {
  "use strict";
  Object.defineProperty(Ip, "__esModule", { value: true });
  Ip.loadConfig = void 0;
  var KA = Z(), aV = AA(), cV = GA(), uV = QA(), dV = /* @__PURE__ */ __name(({ environmentVariableSelector: e35, configFileSelector: t, default: r }, n = {}) => (0, KA.memoize)((0, KA.chain)((0, aV.fromEnv)(e35), (0, cV.fromSharedConfigFiles)(t, n), (0, uV.fromStatic)(r))), "dV");
  Ip.loadConfig = dV;
});
var on = c((pg) => {
  "use strict";
  Object.defineProperty(pg, "__esModule", { value: true });
  var lV = (b(), S(N));
  lV.__exportStar(YA(), pg);
});
var eT = c((Rp) => {
  "use strict";
  Object.defineProperty(Rp, "__esModule", { value: true });
  Rp.getEndpointUrlConfig = void 0;
  var JA = er(), XA = "AWS_ENDPOINT_URL", ZA = "endpoint_url", pV = /* @__PURE__ */ __name((e35) => ({ environmentVariableSelector: (t) => {
    let r = e35.split(" ").map((o) => o.toUpperCase()), n = t[[XA, ...r].join("_")];
    if (n)
      return n;
    let i = t[XA];
    if (i)
      return i;
  }, configFileSelector: (t, r) => {
    if (r && t.services) {
      let i = r[["services", t.services].join(JA.CONFIG_PREFIX_SEPARATOR)];
      if (i) {
        let o = e35.split(" ").map((a) => a.toLowerCase()), s = i[[o.join("_"), ZA].join(JA.CONFIG_PREFIX_SEPARATOR)];
        if (s)
          return s;
      }
    }
    let n = t[ZA];
    if (n)
      return n;
  }, default: void 0 }), "pV");
  Rp.getEndpointUrlConfig = pV;
});
var tT = c((qp) => {
  "use strict";
  Object.defineProperty(qp, "__esModule", { value: true });
  qp.getEndpointFromConfig = void 0;
  var fV = on(), mV = eT(), hV = /* @__PURE__ */ __name(async (e35) => (0, fV.loadConfig)((0, mV.getEndpointUrlConfig)(e35))(), "hV");
  qp.getEndpointFromConfig = hV;
});
var rT = c((Mp) => {
  "use strict";
  Object.defineProperty(Mp, "__esModule", { value: true });
  Mp.parseQueryString = void 0;
  function _V(e35) {
    let t = {};
    if (e35 = e35.replace(/^\?/, ""), e35)
      for (let r of e35.split("&")) {
        let [n, i = null] = r.split("=");
        n = decodeURIComponent(n), i && (i = decodeURIComponent(i)), n in t ? Array.isArray(t[n]) ? t[n].push(i) : t[n] = [t[n], i] : t[n] = i;
      }
    return t;
  }
  __name(_V, "_V");
  Mp.parseQueryString = _V;
});
var Wi = c((Ic) => {
  "use strict";
  Object.defineProperty(Ic, "__esModule", { value: true });
  Ic.parseUrl = void 0;
  var yV = rT(), gV = /* @__PURE__ */ __name((e35) => {
    if (typeof e35 == "string")
      return (0, Ic.parseUrl)(new URL(e35));
    let { hostname: t, pathname: r, port: n, protocol: i, search: o } = e35, s;
    return o && (s = (0, yV.parseQueryString)(o)), { hostname: t, port: n ? parseInt(n) : void 0, protocol: i, path: r, query: s };
  }, "gV");
  Ic.parseUrl = gV;
});
var kp = c((Dp) => {
  "use strict";
  Object.defineProperty(Dp, "__esModule", { value: true });
  Dp.toEndpointV1 = void 0;
  var nT = Wi(), vV = /* @__PURE__ */ __name((e35) => typeof e35 == "object" ? "url" in e35 ? (0, nT.parseUrl)(e35.url) : e35 : (0, nT.parseUrl)(e35), "vV");
  Dp.toEndpointV1 = vV;
});
var fg = c((Vi) => {
  "use strict";
  Object.defineProperty(Vi, "__esModule", { value: true });
  Vi.resolveParams = Vi.getEndpointFromInstructions = void 0;
  var EV = CA(), wV = OA(), SV = tT(), NV = kp(), bV = /* @__PURE__ */ __name(async (e35, t, r, n) => {
    if (!r.endpoint) {
      let s = await (0, SV.getEndpointFromConfig)(r.serviceId || "");
      s && (r.endpoint = () => Promise.resolve((0, NV.toEndpointV1)(s)));
    }
    let i = await (0, Vi.resolveParams)(e35, t, r);
    if (typeof r.endpointProvider != "function")
      throw new Error("config.endpointProvider is not set.");
    return r.endpointProvider(i, n);
  }, "bV");
  Vi.getEndpointFromInstructions = bV;
  var xV = /* @__PURE__ */ __name(async (e35, t, r) => {
    var n;
    let i = {}, o = ((n = t?.getEndpointParameterInstructions) === null || n === void 0 ? void 0 : n.call(t)) || {};
    for (let [s, a] of Object.entries(o))
      switch (a.type) {
        case "staticContextParams":
          i[s] = a.value;
          break;
        case "contextParams":
          i[s] = e35[a.name];
          break;
        case "clientContextParams":
        case "builtInParams":
          i[s] = await (0, wV.createConfigValueProvider)(a.name, s, r)();
          break;
        default:
          throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(a));
      }
    return Object.keys(o).length === 0 && Object.assign(i, r), String(r.serviceId).toLowerCase() === "s3" && await (0, EV.resolveParamsForS3)(i), i;
  }, "xV");
  Vi.resolveParams = xV;
});
var oT = c((Fp) => {
  "use strict";
  Object.defineProperty(Fp, "__esModule", { value: true });
  var iT = (b(), S(N));
  iT.__exportStar(fg(), Fp);
  iT.__exportStar(kp(), Fp);
});
var mg = c((Lp) => {
  "use strict";
  Object.defineProperty(Lp, "__esModule", { value: true });
  Lp.endpointMiddleware = void 0;
  var CV = fg(), OV = /* @__PURE__ */ __name(({ config: e35, instructions: t }) => (r, n) => async (i) => {
    var o, s;
    let a = await (0, CV.getEndpointFromInstructions)(i.input, { getEndpointParameterInstructions() {
      return t;
    } }, { ...e35 }, n);
    n.endpointV2 = a, n.authSchemes = (o = a.properties) === null || o === void 0 ? void 0 : o.authSchemes;
    let u = (s = n.authSchemes) === null || s === void 0 ? void 0 : s[0];
    return u && (n.signing_region = u.signingRegion, n.signing_service = u.signingName), r({ ...i });
  }, "OV");
  Lp.endpointMiddleware = OV;
});
var hg = c((jp) => {
  "use strict";
  Object.defineProperty(jp, "__esModule", { value: true });
  jp.deserializerMiddleware = void 0;
  var AV = /* @__PURE__ */ __name((e35, t) => (r, n) => async (i) => {
    let { response: o } = await r(i);
    try {
      let s = await t(o, e35);
      return { response: o, output: s };
    } catch (s) {
      if (Object.defineProperty(s, "$response", { value: o }), !("$metadata" in s)) {
        let a = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
        s.message += `
  ` + a;
      }
      throw s;
    }
  }, "AV");
  jp.deserializerMiddleware = AV;
});
var _g = c((Up) => {
  "use strict";
  Object.defineProperty(Up, "__esModule", { value: true });
  Up.serializerMiddleware = void 0;
  var TV = /* @__PURE__ */ __name((e35, t) => (r, n) => async (i) => {
    var o;
    let s = !((o = n.endpointV2) === null || o === void 0) && o.url && e35.urlParser ? async () => e35.urlParser(n.endpointV2.url) : e35.endpoint;
    if (!s)
      throw new Error("No valid endpoint provider available.");
    let a = await t(i.input, { ...e35, endpoint: s });
    return r({ ...i, request: a });
  }, "TV");
  Up.serializerMiddleware = TV;
});
var sT = c((Ar) => {
  "use strict";
  Object.defineProperty(Ar, "__esModule", { value: true });
  Ar.getSerdePlugin = Ar.serializerMiddlewareOption = Ar.deserializerMiddlewareOption = void 0;
  var PV = hg(), IV = _g();
  Ar.deserializerMiddlewareOption = { name: "deserializerMiddleware", step: "deserialize", tags: ["DESERIALIZER"], override: true };
  Ar.serializerMiddlewareOption = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: true };
  function RV(e35, t, r) {
    return { applyToStack: (n) => {
      n.add((0, PV.deserializerMiddleware)(e35, r), Ar.deserializerMiddlewareOption), n.add((0, IV.serializerMiddleware)(e35, t), Ar.serializerMiddlewareOption);
    } };
  }
  __name(RV, "RV");
  Ar.getSerdePlugin = RV;
});
var ye = c((Rc) => {
  "use strict";
  Object.defineProperty(Rc, "__esModule", { value: true });
  var yg = (b(), S(N));
  yg.__exportStar(hg(), Rc);
  yg.__exportStar(sT(), Rc);
  yg.__exportStar(_g(), Rc);
});
var aT = c(($i) => {
  "use strict";
  Object.defineProperty($i, "__esModule", { value: true });
  $i.getEndpointPlugin = $i.endpointMiddlewareOptions = void 0;
  var qV = ye(), MV = mg();
  $i.endpointMiddlewareOptions = { step: "serialize", tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"], name: "endpointV2Middleware", override: true, relation: "before", toMiddleware: qV.serializerMiddlewareOption.name };
  var DV = /* @__PURE__ */ __name((e35, t) => ({ applyToStack: (r) => {
    r.addRelativeTo((0, MV.endpointMiddleware)({ config: e35, instructions: t }), $i.endpointMiddlewareOptions);
  } }), "DV");
  $i.getEndpointPlugin = DV;
});
var cT = c((Bp) => {
  "use strict";
  Object.defineProperty(Bp, "__esModule", { value: true });
  Bp.resolveEndpointConfig = void 0;
  var gg = qi(), kV = kp(), FV = /* @__PURE__ */ __name((e35) => {
    var t, r, n;
    let i = (t = e35.tls) !== null && t !== void 0 ? t : true, { endpoint: o } = e35, s = o != null ? async () => (0, kV.toEndpointV1)(await (0, gg.normalizeProvider)(o)()) : void 0;
    return { ...e35, endpoint: s, tls: i, isCustomEndpoint: !!o, useDualstackEndpoint: (0, gg.normalizeProvider)((r = e35.useDualstackEndpoint) !== null && r !== void 0 ? r : false), useFipsEndpoint: (0, gg.normalizeProvider)((n = e35.useFipsEndpoint) !== null && n !== void 0 ? n : false) };
  }, "FV");
  Bp.resolveEndpointConfig = FV;
});
var dT = c((uT) => {
  "use strict";
  Object.defineProperty(uT, "__esModule", { value: true });
});
var te = c((zi) => {
  "use strict";
  Object.defineProperty(zi, "__esModule", { value: true });
  var qc = (b(), S(N));
  qc.__exportStar(oT(), zi);
  qc.__exportStar(mg(), zi);
  qc.__exportStar(aT(), zi);
  qc.__exportStar(cT(), zi);
  qc.__exportStar(dT(), zi);
});
var Wp = c((sn) => {
  "use strict";
  Object.defineProperty(sn, "__esModule", { value: true });
  sn.DEFAULT_RETRY_MODE = sn.DEFAULT_MAX_ATTEMPTS = sn.RETRY_MODES = void 0;
  var lT;
  (function(e35) {
    e35.STANDARD = "standard", e35.ADAPTIVE = "adaptive";
  })(lT = sn.RETRY_MODES || (sn.RETRY_MODES = {}));
  sn.DEFAULT_MAX_ATTEMPTS = 3;
  sn.DEFAULT_RETRY_MODE = lT.STANDARD;
});
var pT = c((jt) => {
  "use strict";
  Object.defineProperty(jt, "__esModule", { value: true });
  jt.NODEJS_TIMEOUT_ERROR_CODES = jt.TRANSIENT_ERROR_STATUS_CODES = jt.TRANSIENT_ERROR_CODES = jt.THROTTLING_ERROR_CODES = jt.CLOCK_SKEW_ERROR_CODES = void 0;
  jt.CLOCK_SKEW_ERROR_CODES = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"];
  jt.THROTTLING_ERROR_CODES = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"];
  jt.TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
  jt.TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
  jt.NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
});
var Dc = c((xt) => {
  "use strict";
  Object.defineProperty(xt, "__esModule", { value: true });
  xt.isServerError = xt.isTransientError = xt.isThrottlingError = xt.isClockSkewError = xt.isRetryableByTrait = void 0;
  var Mc = pT(), LV = /* @__PURE__ */ __name((e35) => e35.$retryable !== void 0, "LV");
  xt.isRetryableByTrait = LV;
  var jV = /* @__PURE__ */ __name((e35) => Mc.CLOCK_SKEW_ERROR_CODES.includes(e35.name), "jV");
  xt.isClockSkewError = jV;
  var UV = /* @__PURE__ */ __name((e35) => {
    var t, r;
    return ((t = e35.$metadata) === null || t === void 0 ? void 0 : t.httpStatusCode) === 429 || Mc.THROTTLING_ERROR_CODES.includes(e35.name) || ((r = e35.$retryable) === null || r === void 0 ? void 0 : r.throttling) == true;
  }, "UV");
  xt.isThrottlingError = UV;
  var BV = /* @__PURE__ */ __name((e35) => {
    var t;
    return Mc.TRANSIENT_ERROR_CODES.includes(e35.name) || Mc.NODEJS_TIMEOUT_ERROR_CODES.includes(e35?.code || "") || Mc.TRANSIENT_ERROR_STATUS_CODES.includes(((t = e35.$metadata) === null || t === void 0 ? void 0 : t.httpStatusCode) || 0);
  }, "BV");
  xt.isTransientError = BV;
  var WV = /* @__PURE__ */ __name((e35) => {
    var t;
    if (((t = e35.$metadata) === null || t === void 0 ? void 0 : t.httpStatusCode) !== void 0) {
      let r = e35.$metadata.httpStatusCode;
      return 500 <= r && r <= 599 && !(0, xt.isTransientError)(e35);
    }
    return false;
  }, "WV");
  xt.isServerError = WV;
});
var Eg = c((Vp) => {
  "use strict";
  Object.defineProperty(Vp, "__esModule", { value: true });
  Vp.DefaultRateLimiter = void 0;
  var VV = Dc(), vg = class {
    static {
      __name(this, "vg");
    }
    constructor(t) {
      var r, n, i, o, s;
      this.currentCapacity = 0, this.enabled = false, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = (r = t?.beta) !== null && r !== void 0 ? r : 0.7, this.minCapacity = (n = t?.minCapacity) !== null && n !== void 0 ? n : 1, this.minFillRate = (i = t?.minFillRate) !== null && i !== void 0 ? i : 0.5, this.scaleConstant = (o = t?.scaleConstant) !== null && o !== void 0 ? o : 0.4, this.smooth = (s = t?.smooth) !== null && s !== void 0 ? s : 0.8;
      let a = this.getCurrentTimeInSeconds();
      this.lastThrottleTime = a, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1e3;
    }
    async getSendToken() {
      return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(t) {
      if (this.enabled) {
        if (this.refillTokenBucket(), t > this.currentCapacity) {
          let r = (t - this.currentCapacity) / this.fillRate * 1e3;
          await new Promise((n) => setTimeout(n, r));
        }
        this.currentCapacity = this.currentCapacity - t;
      }
    }
    refillTokenBucket() {
      let t = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) {
        this.lastTimestamp = t;
        return;
      }
      let r = (t - this.lastTimestamp) * this.fillRate;
      this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + r), this.lastTimestamp = t;
    }
    updateClientSendingRate(t) {
      let r;
      if (this.updateMeasuredRate(), (0, VV.isThrottlingError)(t)) {
        let i = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
        this.lastMaxRate = i, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), r = this.cubicThrottle(i), this.enableTokenBucket();
      } else
        this.calculateTimeWindow(), r = this.cubicSuccess(this.getCurrentTimeInSeconds());
      let n = Math.min(r, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(n);
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(t) {
      return this.getPrecise(t * this.beta);
    }
    cubicSuccess(t) {
      return this.getPrecise(this.scaleConstant * Math.pow(t - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
      this.enabled = true;
    }
    updateTokenBucketRate(t) {
      this.refillTokenBucket(), this.fillRate = Math.max(t, this.minFillRate), this.maxCapacity = Math.max(t, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
      let t = this.getCurrentTimeInSeconds(), r = Math.floor(t * 2) / 2;
      if (this.requestCount++, r > this.lastTxRateBucket) {
        let n = this.requestCount / (r - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(n * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = r;
      }
    }
    getPrecise(t) {
      return parseFloat(t.toFixed(8));
    }
  };
  Vp.DefaultRateLimiter = vg;
});
var Zo = c((Ae) => {
  "use strict";
  Object.defineProperty(Ae, "__esModule", { value: true });
  Ae.REQUEST_HEADER = Ae.INVOCATION_ID_HEADER = Ae.NO_RETRY_INCREMENT = Ae.TIMEOUT_RETRY_COST = Ae.RETRY_COST = Ae.INITIAL_RETRY_TOKENS = Ae.THROTTLING_RETRY_DELAY_BASE = Ae.MAXIMUM_RETRY_DELAY = Ae.DEFAULT_RETRY_DELAY_BASE = void 0;
  Ae.DEFAULT_RETRY_DELAY_BASE = 100;
  Ae.MAXIMUM_RETRY_DELAY = 20 * 1e3;
  Ae.THROTTLING_RETRY_DELAY_BASE = 500;
  Ae.INITIAL_RETRY_TOKENS = 500;
  Ae.RETRY_COST = 5;
  Ae.TIMEOUT_RETRY_COST = 10;
  Ae.NO_RETRY_INCREMENT = 1;
  Ae.INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
  Ae.REQUEST_HEADER = "amz-sdk-request";
});
var mT = c(($p) => {
  "use strict";
  Object.defineProperty($p, "__esModule", { value: true });
  $p.getDefaultRetryBackoffStrategy = void 0;
  var fT = Zo(), $V = /* @__PURE__ */ __name(() => {
    let e35 = fT.DEFAULT_RETRY_DELAY_BASE;
    return { computeNextBackoffDelay: (n) => Math.floor(Math.min(fT.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** n * e35)), setDelayBase: (n) => {
      e35 = n;
    } };
  }, "$V");
  $p.getDefaultRetryBackoffStrategy = $V;
});
var hT = c((zp) => {
  "use strict";
  Object.defineProperty(zp, "__esModule", { value: true });
  zp.createDefaultRetryToken = void 0;
  var zV = Zo(), HV = /* @__PURE__ */ __name(({ retryDelay: e35, retryCount: t, retryCost: r }) => ({ getRetryCount: () => t, getRetryDelay: () => Math.min(zV.MAXIMUM_RETRY_DELAY, e35), getRetryCost: () => r }), "HV");
  zp.createDefaultRetryToken = HV;
});
var Gp = c((Hp) => {
  "use strict";
  Object.defineProperty(Hp, "__esModule", { value: true });
  Hp.StandardRetryStrategy = void 0;
  var wg = Wp(), Vn = Zo(), GV = mT(), _T = hT(), Sg = class {
    static {
      __name(this, "Sg");
    }
    constructor(t) {
      this.maxAttempts = t, this.mode = wg.RETRY_MODES.STANDARD, this.capacity = Vn.INITIAL_RETRY_TOKENS, this.retryBackoffStrategy = (0, GV.getDefaultRetryBackoffStrategy)(), this.maxAttemptsProvider = typeof t == "function" ? t : async () => t;
    }
    async acquireInitialRetryToken(t) {
      return (0, _T.createDefaultRetryToken)({ retryDelay: Vn.DEFAULT_RETRY_DELAY_BASE, retryCount: 0 });
    }
    async refreshRetryTokenForRetry(t, r) {
      let n = await this.getMaxAttempts();
      if (this.shouldRetry(t, r, n)) {
        let i = r.errorType;
        this.retryBackoffStrategy.setDelayBase(i === "THROTTLING" ? Vn.THROTTLING_RETRY_DELAY_BASE : Vn.DEFAULT_RETRY_DELAY_BASE);
        let o = this.retryBackoffStrategy.computeNextBackoffDelay(t.getRetryCount()), s = r.retryAfterHint ? Math.max(r.retryAfterHint.getTime() - Date.now() || 0, o) : o, a = this.getCapacityCost(i);
        return this.capacity -= a, (0, _T.createDefaultRetryToken)({ retryDelay: s, retryCount: t.getRetryCount() + 1, retryCost: a });
      }
      throw new Error("No retry token available");
    }
    recordSuccess(t) {
      var r;
      this.capacity = Math.max(Vn.INITIAL_RETRY_TOKENS, this.capacity + ((r = t.getRetryCost()) !== null && r !== void 0 ? r : Vn.NO_RETRY_INCREMENT));
    }
    getCapacity() {
      return this.capacity;
    }
    async getMaxAttempts() {
      try {
        return await this.maxAttemptsProvider();
      } catch {
        return console.warn(`Max attempts provider could not resolve. Using default of ${wg.DEFAULT_MAX_ATTEMPTS}`), wg.DEFAULT_MAX_ATTEMPTS;
      }
    }
    shouldRetry(t, r, n) {
      return t.getRetryCount() + 1 < n && this.capacity >= this.getCapacityCost(r.errorType) && this.isRetryableError(r.errorType);
    }
    getCapacityCost(t) {
      return t === "TRANSIENT" ? Vn.TIMEOUT_RETRY_COST : Vn.RETRY_COST;
    }
    isRetryableError(t) {
      return t === "THROTTLING" || t === "TRANSIENT";
    }
  };
  Hp.StandardRetryStrategy = Sg;
});
var yT = c((Qp) => {
  "use strict";
  Object.defineProperty(Qp, "__esModule", { value: true });
  Qp.AdaptiveRetryStrategy = void 0;
  var QV = Wp(), KV = Eg(), YV = Gp(), Ng = class {
    static {
      __name(this, "Ng");
    }
    constructor(t, r) {
      this.maxAttemptsProvider = t, this.mode = QV.RETRY_MODES.ADAPTIVE;
      let { rateLimiter: n } = r ?? {};
      this.rateLimiter = n ?? new KV.DefaultRateLimiter(), this.standardRetryStrategy = new YV.StandardRetryStrategy(t);
    }
    async acquireInitialRetryToken(t) {
      return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(t);
    }
    async refreshRetryTokenForRetry(t, r) {
      return this.rateLimiter.updateClientSendingRate(r), this.standardRetryStrategy.refreshRetryTokenForRetry(t, r);
    }
    recordSuccess(t) {
      this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(t);
    }
  };
  Qp.AdaptiveRetryStrategy = Ng;
});
var gT = c((Kp) => {
  "use strict";
  Object.defineProperty(Kp, "__esModule", { value: true });
  Kp.ConfiguredRetryStrategy = void 0;
  var JV = Zo(), XV = Gp(), bg = class extends XV.StandardRetryStrategy {
    static {
      __name(this, "bg");
    }
    constructor(t, r = JV.DEFAULT_RETRY_DELAY_BASE) {
      super(typeof t == "function" ? t : async () => t), typeof r == "number" ? this.computeNextBackoffDelay = () => r : this.computeNextBackoffDelay = r;
    }
    async refreshRetryTokenForRetry(t, r) {
      let n = await super.refreshRetryTokenForRetry(t, r);
      return n.getRetryDelay = () => this.computeNextBackoffDelay(n.getRetryCount()), n;
    }
  };
  Kp.ConfiguredRetryStrategy = bg;
});
var ET = c((vT) => {
  "use strict";
  Object.defineProperty(vT, "__esModule", { value: true });
});
var Ut = c((an) => {
  "use strict";
  Object.defineProperty(an, "__esModule", { value: true });
  var Hi = (b(), S(N));
  Hi.__exportStar(yT(), an);
  Hi.__exportStar(gT(), an);
  Hi.__exportStar(Eg(), an);
  Hi.__exportStar(Gp(), an);
  Hi.__exportStar(Wp(), an);
  Hi.__exportStar(Zo(), an);
  Hi.__exportStar(ET(), an);
});
function kc() {
  return Yp > Jp.length - 16 && (ZV.randomFillSync(Jp), Yp = 0), Jp.slice(Yp, Yp += 16);
}
__name(kc, "kc");
var Jp;
var Yp;
var xg = Be(() => {
  Jp = new Uint8Array(256), Yp = Jp.length;
});
var wT;
var ST = Be(() => {
  wT = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
});
function e$(e35) {
  return typeof e35 == "string" && wT.test(e35);
}
__name(e$, "e$");
var $n;
var Fc = Be(() => {
  ST();
  $n = e$;
});
function t$(e35, t = 0) {
  let r = ($e[e35[t + 0]] + $e[e35[t + 1]] + $e[e35[t + 2]] + $e[e35[t + 3]] + "-" + $e[e35[t + 4]] + $e[e35[t + 5]] + "-" + $e[e35[t + 6]] + $e[e35[t + 7]] + "-" + $e[e35[t + 8]] + $e[e35[t + 9]] + "-" + $e[e35[t + 10]] + $e[e35[t + 11]] + $e[e35[t + 12]] + $e[e35[t + 13]] + $e[e35[t + 14]] + $e[e35[t + 15]]).toLowerCase();
  if (!$n(r))
    throw TypeError("Stringified UUID is invalid");
  return r;
}
__name(t$, "t$");
var $e;
var zn;
var Lc = Be(() => {
  Fc();
  $e = [];
  for (let e35 = 0; e35 < 256; ++e35)
    $e.push((e35 + 256).toString(16).substr(1));
  zn = t$;
});
function r$(e35, t, r) {
  let n = t && r || 0, i = t || new Array(16);
  e35 = e35 || {};
  let o = e35.node || NT, s = e35.clockseq !== void 0 ? e35.clockseq : Cg;
  if (o == null || s == null) {
    let m = e35.random || (e35.rng || kc)();
    o == null && (o = NT = [m[0] | 1, m[1], m[2], m[3], m[4], m[5]]), s == null && (s = Cg = (m[6] << 8 | m[7]) & 16383);
  }
  let a = e35.msecs !== void 0 ? e35.msecs : Date.now(), u = e35.nsecs !== void 0 ? e35.nsecs : Ag + 1, l = a - Og + (u - Ag) / 1e4;
  if (l < 0 && e35.clockseq === void 0 && (s = s + 1 & 16383), (l < 0 || a > Og) && e35.nsecs === void 0 && (u = 0), u >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  Og = a, Ag = u, Cg = s, a += 122192928e5;
  let p = ((a & 268435455) * 1e4 + u) % 4294967296;
  i[n++] = p >>> 24 & 255, i[n++] = p >>> 16 & 255, i[n++] = p >>> 8 & 255, i[n++] = p & 255;
  let f = a / 4294967296 * 1e4 & 268435455;
  i[n++] = f >>> 8 & 255, i[n++] = f & 255, i[n++] = f >>> 24 & 15 | 16, i[n++] = f >>> 16 & 255, i[n++] = s >>> 8 | 128, i[n++] = s & 255;
  for (let m = 0; m < 6; ++m)
    i[n + m] = o[m];
  return t || zn(i);
}
__name(r$, "r$");
var NT;
var Cg;
var Og;
var Ag;
var bT;
var xT = Be(() => {
  xg();
  Lc();
  Og = 0, Ag = 0;
  bT = r$;
});
function n$(e35) {
  if (!$n(e35))
    throw TypeError("Invalid UUID");
  let t, r = new Uint8Array(16);
  return r[0] = (t = parseInt(e35.slice(0, 8), 16)) >>> 24, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = t & 255, r[4] = (t = parseInt(e35.slice(9, 13), 16)) >>> 8, r[5] = t & 255, r[6] = (t = parseInt(e35.slice(14, 18), 16)) >>> 8, r[7] = t & 255, r[8] = (t = parseInt(e35.slice(19, 23), 16)) >>> 8, r[9] = t & 255, r[10] = (t = parseInt(e35.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = t / 4294967296 & 255, r[12] = t >>> 24 & 255, r[13] = t >>> 16 & 255, r[14] = t >>> 8 & 255, r[15] = t & 255, r;
}
__name(n$, "n$");
var Xp;
var Tg = Be(() => {
  Fc();
  Xp = n$;
});
function i$(e35) {
  e35 = unescape(encodeURIComponent(e35));
  let t = [];
  for (let r = 0; r < e35.length; ++r)
    t.push(e35.charCodeAt(r));
  return t;
}
__name(i$, "i$");
function Zp(e35, t, r) {
  function n(i, o, s, a) {
    if (typeof i == "string" && (i = i$(i)), typeof o == "string" && (o = Xp(o)), o.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let u = new Uint8Array(16 + i.length);
    if (u.set(o), u.set(i, o.length), u = r(u), u[6] = u[6] & 15 | t, u[8] = u[8] & 63 | 128, s) {
      a = a || 0;
      for (let l = 0; l < 16; ++l)
        s[a + l] = u[l];
      return s;
    }
    return zn(u);
  }
  __name(n, "n");
  try {
    n.name = e35;
  } catch {
  }
  return n.DNS = o$, n.URL = s$, n;
}
__name(Zp, "Zp");
var o$;
var s$;
var Pg = Be(() => {
  Lc();
  Tg();
  o$ = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", s$ = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
});
function c$(e35) {
  return Array.isArray(e35) ? e35 = Buffer.from(e35) : typeof e35 == "string" && (e35 = Buffer.from(e35, "utf8")), a$.createHash("md5").update(e35).digest();
}
__name(c$, "c$");
var CT;
var OT = Be(() => {
  CT = c$;
});
var u$;
var AT;
var TT = Be(() => {
  Pg();
  OT();
  u$ = Zp("v3", 48, CT), AT = u$;
});
function d$(e35, t, r) {
  e35 = e35 || {};
  let n = e35.random || (e35.rng || kc)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let i = 0; i < 16; ++i)
      t[r + i] = n[i];
    return t;
  }
  return zn(n);
}
__name(d$, "d$");
var PT;
var IT = Be(() => {
  xg();
  Lc();
  PT = d$;
});
function p$(e35) {
  return Array.isArray(e35) ? e35 = Buffer.from(e35) : typeof e35 == "string" && (e35 = Buffer.from(e35, "utf8")), l$.createHash("sha1").update(e35).digest();
}
__name(p$, "p$");
var RT;
var qT = Be(() => {
  RT = p$;
});
var f$;
var MT;
var DT = Be(() => {
  Pg();
  qT();
  f$ = Zp("v5", 80, RT), MT = f$;
});
var kT;
var FT = Be(() => {
  kT = "00000000-0000-0000-0000-000000000000";
});
function m$(e35) {
  if (!$n(e35))
    throw TypeError("Invalid UUID");
  return parseInt(e35.substr(14, 1), 16);
}
__name(m$, "m$");
var LT;
var jT = Be(() => {
  Fc();
  LT = m$;
});
var Ig = {};
i_(Ig, { NIL: () => kT, parse: () => Xp, stringify: () => zn, v1: () => bT, v3: () => AT, v4: () => PT, v5: () => MT, validate: () => $n, version: () => LT });
var Rg = Be(() => {
  xT();
  TT();
  IT();
  DT();
  FT();
  jT();
  Fc();
  Lc();
  Tg();
});
var UT = c((ef) => {
  "use strict";
  Object.defineProperty(ef, "__esModule", { value: true });
  ef.getDefaultRetryQuota = void 0;
  var qg = Ut(), h$ = /* @__PURE__ */ __name((e35, t) => {
    var r, n, i;
    let o = e35, s = (r = t?.noRetryIncrement) !== null && r !== void 0 ? r : qg.NO_RETRY_INCREMENT, a = (n = t?.retryCost) !== null && n !== void 0 ? n : qg.RETRY_COST, u = (i = t?.timeoutRetryCost) !== null && i !== void 0 ? i : qg.TIMEOUT_RETRY_COST, l = e35, p = /* @__PURE__ */ __name((y) => y.name === "TimeoutError" ? u : a, "p"), f = /* @__PURE__ */ __name((y) => p(y) <= l, "f");
    return Object.freeze({ hasRetryTokens: f, retrieveRetryTokens: (y) => {
      if (!f(y))
        throw new Error("No retry token available");
      let v = p(y);
      return l -= v, v;
    }, releaseRetryTokens: (y) => {
      l += y ?? s, l = Math.min(l, o);
    } });
  }, "h$");
  ef.getDefaultRetryQuota = h$;
});
var Mg = c((tf) => {
  "use strict";
  Object.defineProperty(tf, "__esModule", { value: true });
  tf.defaultDelayDecider = void 0;
  var _$ = Ut(), y$ = /* @__PURE__ */ __name((e35, t) => Math.floor(Math.min(_$.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** t * e35)), "y$");
  tf.defaultDelayDecider = y$;
});
var Dg = c((nf) => {
  "use strict";
  Object.defineProperty(nf, "__esModule", { value: true });
  nf.defaultRetryDecider = void 0;
  var rf = Dc(), g$ = /* @__PURE__ */ __name((e35) => e35 ? (0, rf.isRetryableByTrait)(e35) || (0, rf.isClockSkewError)(e35) || (0, rf.isThrottlingError)(e35) || (0, rf.isTransientError)(e35) : false, "g$");
  nf.defaultRetryDecider = g$;
});
var kg = c((of) => {
  "use strict";
  Object.defineProperty(of, "__esModule", { value: true });
  of.asSdkError = void 0;
  var v$ = /* @__PURE__ */ __name((e35) => e35 instanceof Error ? e35 : e35 instanceof Object ? Object.assign(new Error(), e35) : typeof e35 == "string" ? new Error(e35) : new Error(`AWS SDK error wrapper for ${e35}`), "v$");
  of.asSdkError = v$;
});
var jg = c((sf) => {
  "use strict";
  Object.defineProperty(sf, "__esModule", { value: true });
  sf.StandardRetryStrategy = void 0;
  var Fg = Me(), E$ = Dc(), Gi = Ut(), w$ = (Rg(), S(Ig)), S$ = UT(), N$ = Mg(), b$ = Dg(), x$ = kg(), Lg = class {
    static {
      __name(this, "Lg");
    }
    constructor(t, r) {
      var n, i, o;
      this.maxAttemptsProvider = t, this.mode = Gi.RETRY_MODES.STANDARD, this.retryDecider = (n = r?.retryDecider) !== null && n !== void 0 ? n : b$.defaultRetryDecider, this.delayDecider = (i = r?.delayDecider) !== null && i !== void 0 ? i : N$.defaultDelayDecider, this.retryQuota = (o = r?.retryQuota) !== null && o !== void 0 ? o : (0, S$.getDefaultRetryQuota)(Gi.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(t, r, n) {
      return r < n && this.retryDecider(t) && this.retryQuota.hasRetryTokens(t);
    }
    async getMaxAttempts() {
      let t;
      try {
        t = await this.maxAttemptsProvider();
      } catch {
        t = Gi.DEFAULT_MAX_ATTEMPTS;
      }
      return t;
    }
    async retry(t, r, n) {
      let i, o = 0, s = 0, a = await this.getMaxAttempts(), { request: u } = r;
      for (Fg.HttpRequest.isInstance(u) && (u.headers[Gi.INVOCATION_ID_HEADER] = (0, w$.v4)()); ; )
        try {
          Fg.HttpRequest.isInstance(u) && (u.headers[Gi.REQUEST_HEADER] = `attempt=${o + 1}; max=${a}`), n?.beforeRequest && await n.beforeRequest();
          let { response: l, output: p } = await t(r);
          return n?.afterRequest && n.afterRequest(l), this.retryQuota.releaseRetryTokens(i), p.$metadata.attempts = o + 1, p.$metadata.totalRetryDelay = s, { response: l, output: p };
        } catch (l) {
          let p = (0, x$.asSdkError)(l);
          if (o++, this.shouldRetry(p, o, a)) {
            i = this.retryQuota.retrieveRetryTokens(p);
            let f = this.delayDecider((0, E$.isThrottlingError)(p) ? Gi.THROTTLING_RETRY_DELAY_BASE : Gi.DEFAULT_RETRY_DELAY_BASE, o), m = C$(p.$response), h = Math.max(m || 0, f);
            s += h, await new Promise((y) => setTimeout(y, h));
            continue;
          }
          throw p.$metadata || (p.$metadata = {}), p.$metadata.attempts = o, p.$metadata.totalRetryDelay = s, p;
        }
    }
  };
  sf.StandardRetryStrategy = Lg;
  var C$ = /* @__PURE__ */ __name((e35) => {
    if (!Fg.HttpResponse.isInstance(e35))
      return;
    let t = Object.keys(e35.headers).find((o) => o.toLowerCase() === "retry-after");
    if (!t)
      return;
    let r = e35.headers[t], n = Number(r);
    return Number.isNaN(n) ? new Date(r).getTime() - Date.now() : n * 1e3;
  }, "C$");
});
var WT = c((af) => {
  "use strict";
  Object.defineProperty(af, "__esModule", { value: true });
  af.AdaptiveRetryStrategy = void 0;
  var BT = Ut(), O$ = jg(), Ug = class extends O$.StandardRetryStrategy {
    static {
      __name(this, "Ug");
    }
    constructor(t, r) {
      let { rateLimiter: n, ...i } = r ?? {};
      super(t, i), this.rateLimiter = n ?? new BT.DefaultRateLimiter(), this.mode = BT.RETRY_MODES.ADAPTIVE;
    }
    async retry(t, r) {
      return super.retry(t, r, { beforeRequest: async () => this.rateLimiter.getSendToken(), afterRequest: (n) => {
        this.rateLimiter.updateClientSendingRate(n);
      } });
    }
  };
  af.AdaptiveRetryStrategy = Ug;
});
var $T = c((Se) => {
  "use strict";
  Object.defineProperty(Se, "__esModule", { value: true });
  Se.NODE_RETRY_MODE_CONFIG_OPTIONS = Se.CONFIG_RETRY_MODE = Se.ENV_RETRY_MODE = Se.resolveRetryConfig = Se.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = Se.CONFIG_MAX_ATTEMPTS = Se.ENV_MAX_ATTEMPTS = void 0;
  var VT = qi(), es = Ut();
  Se.ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
  Se.CONFIG_MAX_ATTEMPTS = "max_attempts";
  Se.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = { environmentVariableSelector: (e35) => {
    let t = e35[Se.ENV_MAX_ATTEMPTS];
    if (!t)
      return;
    let r = parseInt(t);
    if (Number.isNaN(r))
      throw new Error(`Environment variable ${Se.ENV_MAX_ATTEMPTS} mast be a number, got "${t}"`);
    return r;
  }, configFileSelector: (e35) => {
    let t = e35[Se.CONFIG_MAX_ATTEMPTS];
    if (!t)
      return;
    let r = parseInt(t);
    if (Number.isNaN(r))
      throw new Error(`Shared config file entry ${Se.CONFIG_MAX_ATTEMPTS} mast be a number, got "${t}"`);
    return r;
  }, default: es.DEFAULT_MAX_ATTEMPTS };
  var A$ = /* @__PURE__ */ __name((e35) => {
    var t;
    let { retryStrategy: r } = e35, n = (0, VT.normalizeProvider)((t = e35.maxAttempts) !== null && t !== void 0 ? t : es.DEFAULT_MAX_ATTEMPTS);
    return { ...e35, maxAttempts: n, retryStrategy: async () => r || (await (0, VT.normalizeProvider)(e35.retryMode)() === es.RETRY_MODES.ADAPTIVE ? new es.AdaptiveRetryStrategy(n) : new es.StandardRetryStrategy(n)) };
  }, "A$");
  Se.resolveRetryConfig = A$;
  Se.ENV_RETRY_MODE = "AWS_RETRY_MODE";
  Se.CONFIG_RETRY_MODE = "retry_mode";
  Se.NODE_RETRY_MODE_CONFIG_OPTIONS = { environmentVariableSelector: (e35) => e35[Se.ENV_RETRY_MODE], configFileSelector: (e35) => e35[Se.CONFIG_RETRY_MODE], default: es.DEFAULT_RETRY_MODE };
});
var HT = c((Tr) => {
  "use strict";
  Object.defineProperty(Tr, "__esModule", { value: true });
  Tr.getOmitRetryHeadersPlugin = Tr.omitRetryHeadersMiddlewareOptions = Tr.omitRetryHeadersMiddleware = void 0;
  var T$ = Me(), zT = Ut(), P$ = /* @__PURE__ */ __name(() => (e35) => async (t) => {
    let { request: r } = t;
    return T$.HttpRequest.isInstance(r) && (delete r.headers[zT.INVOCATION_ID_HEADER], delete r.headers[zT.REQUEST_HEADER]), e35(t);
  }, "P$");
  Tr.omitRetryHeadersMiddleware = P$;
  Tr.omitRetryHeadersMiddlewareOptions = { name: "omitRetryHeadersMiddleware", tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"], relation: "before", toMiddleware: "awsAuthMiddleware", override: true };
  var I$ = /* @__PURE__ */ __name((e35) => ({ applyToStack: (t) => {
    t.addRelativeTo((0, Tr.omitRetryHeadersMiddleware)(), Tr.omitRetryHeadersMiddlewareOptions);
  } }), "I$");
  Tr.getOmitRetryHeadersPlugin = I$;
});
var QT = c((Ct) => {
  "use strict";
  Object.defineProperty(Ct, "__esModule", { value: true });
  Ct.getRetryAfterHint = Ct.getRetryPlugin = Ct.retryMiddlewareOptions = Ct.retryMiddleware = void 0;
  var Wg = Me(), Bg = Dc(), GT = Ut(), R$ = (Rg(), S(Ig)), q$ = kg(), M$ = /* @__PURE__ */ __name((e35) => (t, r) => async (n) => {
    let i = await e35.retryStrategy(), o = await e35.maxAttempts();
    if (D$(i)) {
      i = i;
      let s = await i.acquireInitialRetryToken(r.partition_id), a = new Error(), u = 0, l = 0, { request: p } = n;
      for (Wg.HttpRequest.isInstance(p) && (p.headers[GT.INVOCATION_ID_HEADER] = (0, R$.v4)()); ; )
        try {
          Wg.HttpRequest.isInstance(p) && (p.headers[GT.REQUEST_HEADER] = `attempt=${u + 1}; max=${o}`);
          let { response: f, output: m } = await t(n);
          return i.recordSuccess(s), m.$metadata.attempts = u + 1, m.$metadata.totalRetryDelay = l, { response: f, output: m };
        } catch (f) {
          let m = k$(f);
          a = (0, q$.asSdkError)(f);
          try {
            s = await i.refreshRetryTokenForRetry(s, m);
          } catch {
            throw a.$metadata || (a.$metadata = {}), a.$metadata.attempts = u + 1, a.$metadata.totalRetryDelay = l, a;
          }
          u = s.getRetryCount();
          let h = s.getRetryDelay();
          l += h, await new Promise((y) => setTimeout(y, h));
        }
    } else
      return i = i, i?.mode && (r.userAgent = [...r.userAgent || [], ["cfg/retry-mode", i.mode]]), i.retry(t, n);
  }, "M$");
  Ct.retryMiddleware = M$;
  var D$ = /* @__PURE__ */ __name((e35) => typeof e35.acquireInitialRetryToken < "u" && typeof e35.refreshRetryTokenForRetry < "u" && typeof e35.recordSuccess < "u", "D$"), k$ = /* @__PURE__ */ __name((e35) => {
    let t = { errorType: F$(e35) }, r = (0, Ct.getRetryAfterHint)(e35.$response);
    return r && (t.retryAfterHint = r), t;
  }, "k$"), F$ = /* @__PURE__ */ __name((e35) => (0, Bg.isThrottlingError)(e35) ? "THROTTLING" : (0, Bg.isTransientError)(e35) ? "TRANSIENT" : (0, Bg.isServerError)(e35) ? "SERVER_ERROR" : "CLIENT_ERROR", "F$");
  Ct.retryMiddlewareOptions = { name: "retryMiddleware", tags: ["RETRY"], step: "finalizeRequest", priority: "high", override: true };
  var L$ = /* @__PURE__ */ __name((e35) => ({ applyToStack: (t) => {
    t.add((0, Ct.retryMiddleware)(e35), Ct.retryMiddlewareOptions);
  } }), "L$");
  Ct.getRetryPlugin = L$;
  var j$ = /* @__PURE__ */ __name((e35) => {
    if (!Wg.HttpResponse.isInstance(e35))
      return;
    let t = Object.keys(e35.headers).find((o) => o.toLowerCase() === "retry-after");
    if (!t)
      return;
    let r = e35.headers[t], n = Number(r);
    return Number.isNaN(n) ? new Date(r) : new Date(n * 1e3);
  }, "j$");
  Ct.getRetryAfterHint = j$;
});
var un = c((cn) => {
  "use strict";
  Object.defineProperty(cn, "__esModule", { value: true });
  var Qi = (b(), S(N));
  Qi.__exportStar(WT(), cn);
  Qi.__exportStar(jg(), cn);
  Qi.__exportStar($T(), cn);
  Qi.__exportStar(Mg(), cn);
  Qi.__exportStar(HT(), cn);
  Qi.__exportStar(Dg(), cn);
  Qi.__exportStar(QT(), cn);
});
var KT = c((cf) => {
  "use strict";
  Object.defineProperty(cf, "__esModule", { value: true });
  cf.NoOpLogger = void 0;
  var Vg = class {
    static {
      __name(this, "Vg");
    }
    trace() {
    }
    debug() {
    }
    info() {
    }
    warn() {
    }
    error() {
    }
  };
  cf.NoOpLogger = Vg;
});
var XT = c((ts) => {
  "use strict";
  Object.defineProperty(ts, "__esModule", { value: true });
  ts.constructStack = void 0;
  var Ki = /* @__PURE__ */ __name((e35, t) => {
    let r = [];
    if (e35 && r.push(e35), t)
      for (let n of t)
        r.push(n);
    return r;
  }, "Ki"), Hn = /* @__PURE__ */ __name((e35, t) => `${e35 || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`, "Hn"), U$ = /* @__PURE__ */ __name(() => {
    let e35 = [], t = [], r = false, n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ __name((f) => f.sort((m, h) => YT[h.step] - YT[m.step] || JT[h.priority || "normal"] - JT[m.priority || "normal"]), "i"), o = /* @__PURE__ */ __name((f) => {
      let m = false, h = /* @__PURE__ */ __name((y) => {
        let v = Ki(y.name, y.aliases);
        if (v.includes(f)) {
          m = true;
          for (let E of v)
            n.delete(E);
          return false;
        }
        return true;
      }, "h");
      return e35 = e35.filter(h), t = t.filter(h), m;
    }, "o"), s = /* @__PURE__ */ __name((f) => {
      let m = false, h = /* @__PURE__ */ __name((y) => {
        if (y.middleware === f) {
          m = true;
          for (let v of Ki(y.name, y.aliases))
            n.delete(v);
          return false;
        }
        return true;
      }, "h");
      return e35 = e35.filter(h), t = t.filter(h), m;
    }, "s"), a = /* @__PURE__ */ __name((f) => {
      var m;
      return e35.forEach((h) => {
        f.add(h.middleware, { ...h });
      }), t.forEach((h) => {
        f.addRelativeTo(h.middleware, { ...h });
      }), (m = f.identifyOnResolve) === null || m === void 0 || m.call(f, p.identifyOnResolve()), f;
    }, "a"), u = /* @__PURE__ */ __name((f) => {
      let m = [];
      return f.before.forEach((h) => {
        h.before.length === 0 && h.after.length === 0 ? m.push(h) : m.push(...u(h));
      }), m.push(f), f.after.reverse().forEach((h) => {
        h.before.length === 0 && h.after.length === 0 ? m.push(h) : m.push(...u(h));
      }), m;
    }, "u"), l = /* @__PURE__ */ __name((f = false) => {
      let m = [], h = [], y = {};
      return e35.forEach((E) => {
        let T = { ...E, before: [], after: [] };
        for (let I of Ki(T.name, T.aliases))
          y[I] = T;
        m.push(T);
      }), t.forEach((E) => {
        let T = { ...E, before: [], after: [] };
        for (let I of Ki(T.name, T.aliases))
          y[I] = T;
        h.push(T);
      }), h.forEach((E) => {
        if (E.toMiddleware) {
          let T = y[E.toMiddleware];
          if (T === void 0) {
            if (f)
              return;
            throw new Error(`${E.toMiddleware} is not found when adding ${Hn(E.name, E.aliases)} middleware ${E.relation} ${E.toMiddleware}`);
          }
          E.relation === "after" && T.after.push(E), E.relation === "before" && T.before.push(E);
        }
      }), i(m).map(u).reduce((E, T) => (E.push(...T), E), []);
    }, "l"), p = { add: (f, m = {}) => {
      let { name: h, override: y, aliases: v } = m, E = { step: "initialize", priority: "normal", middleware: f, ...m }, T = Ki(h, v);
      if (T.length > 0) {
        if (T.some((I) => n.has(I))) {
          if (!y)
            throw new Error(`Duplicate middleware name '${Hn(h, v)}'`);
          for (let I of T) {
            let De = e35.findIndex((Ei) => {
              var et;
              return Ei.name === I || ((et = Ei.aliases) === null || et === void 0 ? void 0 : et.some((dr) => dr === I));
            });
            if (De === -1)
              continue;
            let Ge = e35[De];
            if (Ge.step !== E.step || E.priority !== Ge.priority)
              throw new Error(`"${Hn(Ge.name, Ge.aliases)}" middleware with ${Ge.priority} priority in ${Ge.step} step cannot be overridden by "${Hn(h, v)}" middleware with ${E.priority} priority in ${E.step} step.`);
            e35.splice(De, 1);
          }
        }
        for (let I of T)
          n.add(I);
      }
      e35.push(E);
    }, addRelativeTo: (f, m) => {
      let { name: h, override: y, aliases: v } = m, E = { middleware: f, ...m }, T = Ki(h, v);
      if (T.length > 0) {
        if (T.some((I) => n.has(I))) {
          if (!y)
            throw new Error(`Duplicate middleware name '${Hn(h, v)}'`);
          for (let I of T) {
            let De = t.findIndex((Ei) => {
              var et;
              return Ei.name === I || ((et = Ei.aliases) === null || et === void 0 ? void 0 : et.some((dr) => dr === I));
            });
            if (De === -1)
              continue;
            let Ge = t[De];
            if (Ge.toMiddleware !== E.toMiddleware || Ge.relation !== E.relation)
              throw new Error(`"${Hn(Ge.name, Ge.aliases)}" middleware ${Ge.relation} "${Ge.toMiddleware}" middleware cannot be overridden by "${Hn(h, v)}" middleware ${E.relation} "${E.toMiddleware}" middleware.`);
            t.splice(De, 1);
          }
        }
        for (let I of T)
          n.add(I);
      }
      t.push(E);
    }, clone: () => a((0, ts.constructStack)()), use: (f) => {
      f.applyToStack(p);
    }, remove: (f) => typeof f == "string" ? o(f) : s(f), removeByTag: (f) => {
      let m = false, h = /* @__PURE__ */ __name((y) => {
        let { tags: v, name: E, aliases: T } = y;
        if (v && v.includes(f)) {
          let I = Ki(E, T);
          for (let De of I)
            n.delete(De);
          return m = true, false;
        }
        return true;
      }, "h");
      return e35 = e35.filter(h), t = t.filter(h), m;
    }, concat: (f) => {
      var m, h;
      let y = a((0, ts.constructStack)());
      return y.use(f), y.identifyOnResolve(r || y.identifyOnResolve() || ((h = (m = f.identifyOnResolve) === null || m === void 0 ? void 0 : m.call(f)) !== null && h !== void 0 ? h : false)), y;
    }, applyToStack: a, identify: () => l(true).map((f) => {
      var m;
      let h = (m = f.step) !== null && m !== void 0 ? m : f.relation + " " + f.toMiddleware;
      return Hn(f.name, f.aliases) + " - " + h;
    }), identifyOnResolve(f) {
      return typeof f == "boolean" && (r = f), r;
    }, resolve: (f, m) => {
      for (let h of l().map((y) => y.middleware).reverse())
        f = h(f, m);
      return r && console.log(p.identify()), f;
    } };
    return p;
  }, "U$");
  ts.constructStack = U$;
  var YT = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 }, JT = { high: 3, normal: 2, low: 1 };
});
var zg = c(($g) => {
  "use strict";
  Object.defineProperty($g, "__esModule", { value: true });
  var B$ = (b(), S(N));
  B$.__exportStar(XT(), $g);
});
var ZT = c((uf) => {
  "use strict";
  Object.defineProperty(uf, "__esModule", { value: true });
  uf.Client = void 0;
  var W$ = zg(), Hg = class {
    static {
      __name(this, "Hg");
    }
    constructor(t) {
      this.middlewareStack = (0, W$.constructStack)(), this.config = t;
    }
    send(t, r, n) {
      let i = typeof r != "function" ? r : void 0, o = typeof r == "function" ? r : n, s = t.resolveMiddleware(this.middlewareStack, this.config, i);
      if (o)
        s(t).then((a) => o(null, a.output), (a) => o(a)).catch(() => {
        });
      else
        return s(t).then((a) => a.output);
    }
    destroy() {
      this.config.requestHandler.destroy && this.config.requestHandler.destroy();
    }
  };
  uf.Client = Hg;
});
var eP = c((df) => {
  "use strict";
  Object.defineProperty(df, "__esModule", { value: true });
  df.fromBase64 = void 0;
  var V$ = Mi(), $$ = /^[A-Za-z0-9+/]*={0,2}$/, z$ = /* @__PURE__ */ __name((e35) => {
    if (e35.length * 3 % 4 !== 0)
      throw new TypeError("Incorrect padding on base64 string.");
    if (!$$.exec(e35))
      throw new TypeError("Invalid base64 string.");
    let t = (0, V$.fromString)(e35, "base64");
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }, "z$");
  df.fromBase64 = z$;
});
var tP = c((lf) => {
  "use strict";
  Object.defineProperty(lf, "__esModule", { value: true });
  lf.toBase64 = void 0;
  var H$ = Mi(), G$ = /* @__PURE__ */ __name((e35) => (0, H$.fromArrayBuffer)(e35.buffer, e35.byteOffset, e35.byteLength).toString("base64"), "G$");
  lf.toBase64 = G$;
});
var rs = c((pf) => {
  "use strict";
  Object.defineProperty(pf, "__esModule", { value: true });
  var rP = (b(), S(N));
  rP.__exportStar(eP(), pf);
  rP.__exportStar(tP(), pf);
});
var sP = c((ns) => {
  "use strict";
  Object.defineProperty(ns, "__esModule", { value: true });
  ns.transformFromString = ns.transformToString = void 0;
  var iP = rs(), oP = Sr(), nP = Gg();
  function Q$(e35, t = "utf-8") {
    return t === "base64" ? (0, iP.toBase64)(e35) : (0, oP.toUtf8)(e35);
  }
  __name(Q$, "Q$");
  ns.transformToString = Q$;
  function K$(e35, t) {
    return t === "base64" ? nP.Uint8ArrayBlobAdapter.mutate((0, iP.fromBase64)(e35)) : nP.Uint8ArrayBlobAdapter.mutate((0, oP.fromUtf8)(e35));
  }
  __name(K$, "K$");
  ns.transformFromString = K$;
});
var Gg = c((ff) => {
  "use strict";
  Object.defineProperty(ff, "__esModule", { value: true });
  ff.Uint8ArrayBlobAdapter = void 0;
  var aP = sP(), Qg = class e35 extends Uint8Array {
    static {
      __name(this, "e");
    }
    static fromString(t, r = "utf-8") {
      switch (typeof t) {
        case "string":
          return (0, aP.transformFromString)(t, r);
        default:
          throw new Error(`Unsupported conversion from ${typeof t} to Uint8ArrayBlobAdapter.`);
      }
    }
    static mutate(t) {
      return Object.setPrototypeOf(t, e35.prototype), t;
    }
    transformToString(t = "utf-8") {
      return (0, aP.transformToString)(this, t);
    }
  };
  ff.Uint8ArrayBlobAdapter = Qg;
});
var cP = c((mf) => {
  "use strict";
  Object.defineProperty(mf, "__esModule", { value: true });
  mf.getAwsChunkedEncodingStream = void 0;
  var Y$ = D("stream"), J$ = /* @__PURE__ */ __name((e35, t) => {
    let { base64Encoder: r, bodyLengthChecker: n, checksumAlgorithmFn: i, checksumLocationName: o, streamHasher: s } = t, a = r !== void 0 && i !== void 0 && o !== void 0 && s !== void 0, u = a ? s(i, e35) : void 0, l = new Y$.Readable({ read: () => {
    } });
    return e35.on("data", (p) => {
      let f = n(p) || 0;
      l.push(`${f.toString(16)}\r
`), l.push(p), l.push(`\r
`);
    }), e35.on("end", async () => {
      if (l.push(`0\r
`), a) {
        let p = r(await u);
        l.push(`${o}:${p}\r
`), l.push(`\r
`);
      }
      l.push(null);
    }), l;
  }, "J$");
  mf.getAwsChunkedEncodingStream = J$;
});
var Yg = c((hf) => {
  "use strict";
  Object.defineProperty(hf, "__esModule", { value: true });
  hf.buildQueryString = void 0;
  var Kg = Ty();
  function X$(e35) {
    let t = [];
    for (let r of Object.keys(e35).sort()) {
      let n = e35[r];
      if (r = (0, Kg.escapeUri)(r), Array.isArray(n))
        for (let i = 0, o = n.length; i < o; i++)
          t.push(`${r}=${(0, Kg.escapeUri)(n[i])}`);
      else {
        let i = r;
        (n || typeof n == "string") && (i += `=${(0, Kg.escapeUri)(n)}`), t.push(i);
      }
    }
    return t.join("&");
  }
  __name(X$, "X$");
  hf.buildQueryString = X$;
});
var uP = c((_f) => {
  "use strict";
  Object.defineProperty(_f, "__esModule", { value: true });
  _f.NODEJS_TIMEOUT_ERROR_CODES = void 0;
  _f.NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
});
var Jg = c((yf) => {
  "use strict";
  Object.defineProperty(yf, "__esModule", { value: true });
  yf.getTransformedHeaders = void 0;
  var Z$ = /* @__PURE__ */ __name((e35) => {
    let t = {};
    for (let r of Object.keys(e35)) {
      let n = e35[r];
      t[r] = Array.isArray(n) ? n.join(",") : n;
    }
    return t;
  }, "Z$");
  yf.getTransformedHeaders = Z$;
});
var dP = c((gf) => {
  "use strict";
  Object.defineProperty(gf, "__esModule", { value: true });
  gf.setConnectionTimeout = void 0;
  var ez = /* @__PURE__ */ __name((e35, t, r = 0) => {
    if (!r)
      return;
    let n = setTimeout(() => {
      e35.destroy(), t(Object.assign(new Error(`Socket timed out without establishing a connection within ${r} ms`), { name: "TimeoutError" }));
    }, r);
    e35.on("socket", (i) => {
      i.connecting ? i.on("connect", () => {
        clearTimeout(n);
      }) : clearTimeout(n);
    });
  }, "ez");
  gf.setConnectionTimeout = ez;
});
var lP = c((vf) => {
  "use strict";
  Object.defineProperty(vf, "__esModule", { value: true });
  vf.setSocketKeepAlive = void 0;
  var tz = /* @__PURE__ */ __name((e35, { keepAlive: t, keepAliveMsecs: r }) => {
    t === true && e35.on("socket", (n) => {
      n.setKeepAlive(t, r || 0);
    });
  }, "tz");
  vf.setSocketKeepAlive = tz;
});
var pP = c((Ef) => {
  "use strict";
  Object.defineProperty(Ef, "__esModule", { value: true });
  Ef.setSocketTimeout = void 0;
  var rz = /* @__PURE__ */ __name((e35, t, r = 0) => {
    e35.setTimeout(r, () => {
      e35.destroy(), t(Object.assign(new Error(`Connection timed out after ${r} ms`), { name: "TimeoutError" }));
    });
  }, "rz");
  Ef.setSocketTimeout = rz;
});
var Xg = c((wf) => {
  "use strict";
  Object.defineProperty(wf, "__esModule", { value: true });
  wf.writeRequestBody = void 0;
  var nz = D("stream"), fP = 1e3;
  async function iz(e35, t, r = fP) {
    var n;
    let i = (n = t.headers) !== null && n !== void 0 ? n : {}, o = i.Expect || i.expect, s = -1, a = false;
    o === "100-continue" && await Promise.race([new Promise((u) => {
      s = Number(setTimeout(u, Math.max(fP, r)));
    }), new Promise((u) => {
      e35.on("continue", () => {
        clearTimeout(s), u();
      }), e35.on("error", () => {
        a = true, clearTimeout(s), u();
      });
    })]), a || oz(e35, t.body);
  }
  __name(iz, "iz");
  wf.writeRequestBody = iz;
  function oz(e35, t) {
    t instanceof nz.Readable ? t.pipe(e35) : t ? e35.end(Buffer.from(t)) : e35.end();
  }
  __name(oz, "oz");
});
var _P = c((is) => {
  "use strict";
  Object.defineProperty(is, "__esModule", { value: true });
  is.NodeHttpHandler = is.DEFAULT_REQUEST_TIMEOUT = void 0;
  var sz = Me(), az = Yg(), mP = D("http"), hP = D("https"), cz = uP(), uz = Jg(), dz = dP(), lz = lP(), pz = pP(), fz = Xg();
  is.DEFAULT_REQUEST_TIMEOUT = 0;
  var Zg = class {
    static {
      __name(this, "Zg");
    }
    constructor(t) {
      this.metadata = { handlerProtocol: "http/1.1" }, this.configProvider = new Promise((r, n) => {
        typeof t == "function" ? t().then((i) => {
          r(this.resolveDefaultConfig(i));
        }).catch(n) : r(this.resolveDefaultConfig(t));
      });
    }
    resolveDefaultConfig(t) {
      let { requestTimeout: r, connectionTimeout: n, socketTimeout: i, httpAgent: o, httpsAgent: s } = t || {}, a = true, u = 50;
      return { connectionTimeout: n, requestTimeout: r ?? i, httpAgent: o || new mP.Agent({ keepAlive: a, maxSockets: u }), httpsAgent: s || new hP.Agent({ keepAlive: a, maxSockets: u }) };
    }
    destroy() {
      var t, r, n, i;
      (r = (t = this.config) === null || t === void 0 ? void 0 : t.httpAgent) === null || r === void 0 || r.destroy(), (i = (n = this.config) === null || n === void 0 ? void 0 : n.httpsAgent) === null || i === void 0 || i.destroy();
    }
    async handle(t, { abortSignal: r } = {}) {
      return this.config || (this.config = await this.configProvider), new Promise((n, i) => {
        var o, s;
        let a, u = /* @__PURE__ */ __name(async (I) => {
          await a, n(I);
        }, "u"), l = /* @__PURE__ */ __name(async (I) => {
          await a, i(I);
        }, "l");
        if (!this.config)
          throw new Error("Node HTTP request handler config is not resolved");
        if (r?.aborted) {
          let I = new Error("Request aborted");
          I.name = "AbortError", l(I);
          return;
        }
        let p = t.protocol === "https:", f = (0, az.buildQueryString)(t.query || {}), m;
        if (t.username != null || t.password != null) {
          let I = (o = t.username) !== null && o !== void 0 ? o : "", De = (s = t.password) !== null && s !== void 0 ? s : "";
          m = `${I}:${De}`;
        }
        let h = t.path;
        f && (h += `?${f}`), t.fragment && (h += `#${t.fragment}`);
        let y = { headers: t.headers, host: t.hostname, method: t.method, path: h, port: t.port, agent: p ? this.config.httpsAgent : this.config.httpAgent, auth: m }, E = (p ? hP.request : mP.request)(y, (I) => {
          let De = new sz.HttpResponse({ statusCode: I.statusCode || -1, reason: I.statusMessage, headers: (0, uz.getTransformedHeaders)(I.headers), body: I });
          u({ response: De });
        });
        E.on("error", (I) => {
          cz.NODEJS_TIMEOUT_ERROR_CODES.includes(I.code) ? l(Object.assign(I, { name: "TimeoutError" })) : l(I);
        }), (0, dz.setConnectionTimeout)(E, l, this.config.connectionTimeout), (0, pz.setSocketTimeout)(E, l, this.config.requestTimeout), r && (r.onabort = () => {
          E.abort();
          let I = new Error("Request aborted");
          I.name = "AbortError", l(I);
        });
        let T = y.agent;
        typeof T == "object" && "keepAlive" in T && (0, lz.setSocketKeepAlive)(E, { keepAlive: T.keepAlive, keepAliveMsecs: T.keepAliveMsecs }), a = (0, fz.writeRequestBody)(E, t, this.config.requestTimeout).catch(i);
      });
    }
    updateHttpClientConfig(t, r) {
      this.config = void 0, this.configProvider = this.configProvider.then((n) => ({ ...n, [t]: r }));
    }
    httpHandlerConfigs() {
      var t;
      return (t = this.config) !== null && t !== void 0 ? t : {};
    }
  };
  is.NodeHttpHandler = Zg;
});
var yP = c((Sf) => {
  "use strict";
  Object.defineProperty(Sf, "__esModule", { value: true });
  Sf.NodeHttp2ConnectionPool = void 0;
  var ev = class {
    static {
      __name(this, "ev");
    }
    constructor(t) {
      this.sessions = [], this.sessions = t ?? [];
    }
    poll() {
      if (this.sessions.length > 0)
        return this.sessions.shift();
    }
    offerLast(t) {
      this.sessions.push(t);
    }
    contains(t) {
      return this.sessions.includes(t);
    }
    remove(t) {
      this.sessions = this.sessions.filter((r) => r !== t);
    }
    [Symbol.iterator]() {
      return this.sessions[Symbol.iterator]();
    }
    destroy(t) {
      for (let r of this.sessions)
        r === t && (r.destroyed || r.destroy());
    }
  };
  Sf.NodeHttp2ConnectionPool = ev;
});
var gP = c((Nf) => {
  "use strict";
  Object.defineProperty(Nf, "__esModule", { value: true });
  Nf.NodeHttp2ConnectionManager = void 0;
  var mz = (b(), S(N)), hz = mz.__importDefault(D("http2")), _z = yP(), tv = class {
    static {
      __name(this, "tv");
    }
    constructor(t) {
      if (this.sessionCache = /* @__PURE__ */ new Map(), this.config = t, this.config.maxConcurrency && this.config.maxConcurrency <= 0)
        throw new RangeError("maxConcurrency must be greater than zero.");
    }
    lease(t, r) {
      let n = this.getUrlString(t), i = this.sessionCache.get(n);
      if (i) {
        let u = i.poll();
        if (u && !this.config.disableConcurrency)
          return u;
      }
      let o = hz.default.connect(n);
      this.config.maxConcurrency && o.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (u) => {
        if (u)
          throw new Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + t.destination.toString());
      }), o.unref();
      let s = /* @__PURE__ */ __name(() => {
        o.destroy(), this.deleteSession(n, o);
      }, "s");
      o.on("goaway", s), o.on("error", s), o.on("frameError", s), o.on("close", () => this.deleteSession(n, o)), r.requestTimeout && o.setTimeout(r.requestTimeout, s);
      let a = this.sessionCache.get(n) || new _z.NodeHttp2ConnectionPool();
      return a.offerLast(o), this.sessionCache.set(n, a), o;
    }
    deleteSession(t, r) {
      let n = this.sessionCache.get(t);
      n && n.contains(r) && (n.remove(r), this.sessionCache.set(t, n));
    }
    release(t, r) {
      var n;
      let i = this.getUrlString(t);
      (n = this.sessionCache.get(i)) === null || n === void 0 || n.offerLast(r);
    }
    destroy() {
      for (let [t, r] of this.sessionCache) {
        for (let n of r)
          n.destroyed || n.destroy(), r.remove(n);
        this.sessionCache.delete(t);
      }
    }
    setMaxConcurrentStreams(t) {
      if (this.config.maxConcurrency && this.config.maxConcurrency <= 0)
        throw new RangeError("maxConcurrentStreams must be greater than zero.");
      this.config.maxConcurrency = t;
    }
    setDisableConcurrentStreams(t) {
      this.config.disableConcurrency = t;
    }
    getUrlString(t) {
      return t.destination.toString();
    }
  };
  Nf.NodeHttp2ConnectionManager = tv;
});
var EP = c((bf) => {
  "use strict";
  Object.defineProperty(bf, "__esModule", { value: true });
  bf.NodeHttp2Handler = void 0;
  var yz = Me(), gz = Yg(), vP = D("http2"), vz = Jg(), Ez = gP(), wz = Xg(), rv = class {
    static {
      __name(this, "rv");
    }
    constructor(t) {
      this.metadata = { handlerProtocol: "h2" }, this.connectionManager = new Ez.NodeHttp2ConnectionManager({}), this.configProvider = new Promise((r, n) => {
        typeof t == "function" ? t().then((i) => {
          r(i || {});
        }).catch(n) : r(t || {});
      });
    }
    destroy() {
      this.connectionManager.destroy();
    }
    async handle(t, { abortSignal: r } = {}) {
      this.config || (this.config = await this.configProvider, this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false), this.config.maxConcurrentStreams && this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams));
      let { requestTimeout: n, disableConcurrentStreams: i } = this.config;
      return new Promise((o, s) => {
        var a, u, l;
        let p = false, f, m = /* @__PURE__ */ __name(async (xe) => {
          await f, o(xe);
        }, "m"), h = /* @__PURE__ */ __name(async (xe) => {
          await f, s(xe);
        }, "h");
        if (r?.aborted) {
          p = true;
          let xe = new Error("Request aborted");
          xe.name = "AbortError", h(xe);
          return;
        }
        let { hostname: y, method: v, port: E, protocol: T, query: I } = t, De = "";
        if (t.username != null || t.password != null) {
          let xe = (a = t.username) !== null && a !== void 0 ? a : "", Na = (u = t.password) !== null && u !== void 0 ? u : "";
          De = `${xe}:${Na}@`;
        }
        let Ge = `${T}//${De}${y}${E ? `:${E}` : ""}`, Ei = { destination: new URL(Ge) }, et = this.connectionManager.lease(Ei, { requestTimeout: (l = this.config) === null || l === void 0 ? void 0 : l.sessionTimeout, disableConcurrentStreams: i || false }), dr = /* @__PURE__ */ __name((xe) => {
          i && this.destroySession(et), p = true, h(xe);
        }, "dr"), CS = (0, gz.buildQueryString)(I || {}), n_ = t.path;
        CS && (n_ += `?${CS}`), t.fragment && (n_ += `#${t.fragment}`);
        let Yt = et.request({ ...t.headers, [vP.constants.HTTP2_HEADER_PATH]: n_, [vP.constants.HTTP2_HEADER_METHOD]: v });
        et.ref(), Yt.on("response", (xe) => {
          let Na = new yz.HttpResponse({ statusCode: xe[":status"] || -1, headers: (0, vz.getTransformedHeaders)(xe), body: Yt });
          p = true, m({ response: Na }), i && (et.close(), this.connectionManager.deleteSession(Ge, et));
        }), n && Yt.setTimeout(n, () => {
          Yt.close();
          let xe = new Error(`Stream timed out because of no activity for ${n} ms`);
          xe.name = "TimeoutError", dr(xe);
        }), r && (r.onabort = () => {
          Yt.close();
          let xe = new Error("Request aborted");
          xe.name = "AbortError", dr(xe);
        }), Yt.on("frameError", (xe, Na, pF) => {
          dr(new Error(`Frame type id ${xe} in stream id ${pF} has failed with code ${Na}.`));
        }), Yt.on("error", dr), Yt.on("aborted", () => {
          dr(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${Yt.rstCode}.`));
        }), Yt.on("close", () => {
          et.unref(), i && et.destroy(), p || dr(new Error("Unexpected error: http2 request did not get a response"));
        }), f = (0, wz.writeRequestBody)(Yt, t, n);
      });
    }
    updateHttpClientConfig(t, r) {
      this.config = void 0, this.configProvider = this.configProvider.then((n) => ({ ...n, [t]: r }));
    }
    httpHandlerConfigs() {
      var t;
      return (t = this.config) !== null && t !== void 0 ? t : {};
    }
    destroySession(t) {
      t.destroyed || t.destroy();
    }
  };
  bf.NodeHttp2Handler = rv;
});
var wP = c((xf) => {
  "use strict";
  Object.defineProperty(xf, "__esModule", { value: true });
  xf.Collector = void 0;
  var Sz = D("stream"), nv = class extends Sz.Writable {
    static {
      __name(this, "nv");
    }
    constructor() {
      super(...arguments), this.bufferedBytes = [];
    }
    _write(t, r, n) {
      this.bufferedBytes.push(t), n();
    }
  };
  xf.Collector = nv;
});
var SP = c((Cf) => {
  "use strict";
  Object.defineProperty(Cf, "__esModule", { value: true });
  Cf.streamCollector = void 0;
  var Nz = wP(), bz = /* @__PURE__ */ __name((e35) => new Promise((t, r) => {
    let n = new Nz.Collector();
    e35.pipe(n), e35.on("error", (i) => {
      n.end(), r(i);
    }), n.on("error", r), n.on("finish", function() {
      let i = new Uint8Array(Buffer.concat(this.bufferedBytes));
      t(i);
    });
  }), "bz");
  Cf.streamCollector = bz;
});
var os = c((jc) => {
  "use strict";
  Object.defineProperty(jc, "__esModule", { value: true });
  var iv = (b(), S(N));
  iv.__exportStar(_P(), jc);
  iv.__exportStar(EP(), jc);
  iv.__exportStar(SP(), jc);
});
var bP = c((Of) => {
  "use strict";
  Object.defineProperty(Of, "__esModule", { value: true });
  Of.sdkStreamMixin = void 0;
  var xz = os(), Cz = Mi(), ov = D("stream"), Oz = D("util"), NP = "The stream has already been transformed.", Az = /* @__PURE__ */ __name((e35) => {
    var t, r;
    if (!(e35 instanceof ov.Readable)) {
      let o = ((r = (t = e35?.__proto__) === null || t === void 0 ? void 0 : t.constructor) === null || r === void 0 ? void 0 : r.name) || e35;
      throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${o}`);
    }
    let n = false, i = /* @__PURE__ */ __name(async () => {
      if (n)
        throw new Error(NP);
      return n = true, await (0, xz.streamCollector)(e35);
    }, "i");
    return Object.assign(e35, { transformToByteArray: i, transformToString: async (o) => {
      let s = await i();
      return o === void 0 || Buffer.isEncoding(o) ? (0, Cz.fromArrayBuffer)(s.buffer, s.byteOffset, s.byteLength).toString(o) : new Oz.TextDecoder(o).decode(s);
    }, transformToWebStream: () => {
      if (n)
        throw new Error(NP);
      if (e35.readableFlowing !== null)
        throw new Error("The stream has been consumed by other callbacks.");
      if (typeof ov.Readable.toWeb != "function")
        throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
      return n = true, ov.Readable.toWeb(e35);
    } });
  }, "Az");
  Of.sdkStreamMixin = Az;
});
var xP = c((Uc) => {
  "use strict";
  Object.defineProperty(Uc, "__esModule", { value: true });
  var sv = (b(), S(N));
  sv.__exportStar(Gg(), Uc);
  sv.__exportStar(cP(), Uc);
  sv.__exportStar(bP(), Uc);
});
var CP = c((Af) => {
  "use strict";
  Object.defineProperty(Af, "__esModule", { value: true });
  Af.collectBody = void 0;
  var av = xP(), Tz = /* @__PURE__ */ __name(async (e35 = new Uint8Array(), t) => {
    if (e35 instanceof Uint8Array)
      return av.Uint8ArrayBlobAdapter.mutate(e35);
    if (!e35)
      return av.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    let r = t.streamCollector(e35);
    return av.Uint8ArrayBlobAdapter.mutate(await r);
  }, "Tz");
  Af.collectBody = Tz;
});
var OP = c((Tf) => {
  "use strict";
  Object.defineProperty(Tf, "__esModule", { value: true });
  Tf.Command = void 0;
  var Pz = zg(), cv = class {
    static {
      __name(this, "cv");
    }
    constructor() {
      this.middlewareStack = (0, Pz.constructStack)();
    }
  };
  Tf.Command = cv;
});
var AP = c((Pf) => {
  "use strict";
  Object.defineProperty(Pf, "__esModule", { value: true });
  Pf.SENSITIVE_STRING = void 0;
  Pf.SENSITIVE_STRING = "***SensitiveInformation***";
});
var TP = c((If) => {
  "use strict";
  Object.defineProperty(If, "__esModule", { value: true });
  If.createAggregatedClient = void 0;
  var Iz = /* @__PURE__ */ __name((e35, t) => {
    for (let r of Object.keys(e35)) {
      let n = e35[r], i = /* @__PURE__ */ __name(async function(s, a, u) {
        let l = new n(s);
        if (typeof a == "function")
          this.send(l, a);
        else if (typeof u == "function") {
          if (typeof a != "object")
            throw new Error(`Expected http options but got ${typeof a}`);
          this.send(l, a || {}, u);
        } else
          return this.send(l, a);
      }, "i"), o = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
      t.prototype[o] = i;
    }
  }, "Iz");
  If.createAggregatedClient = Iz;
});
var dv = c((w) => {
  "use strict";
  Object.defineProperty(w, "__esModule", { value: true });
  w.logger = w.strictParseByte = w.strictParseShort = w.strictParseInt32 = w.strictParseInt = w.strictParseLong = w.limitedParseFloat32 = w.limitedParseFloat = w.handleFloat = w.limitedParseDouble = w.strictParseFloat32 = w.strictParseFloat = w.strictParseDouble = w.expectUnion = w.expectString = w.expectObject = w.expectNonNull = w.expectByte = w.expectShort = w.expectInt32 = w.expectInt = w.expectLong = w.expectFloat32 = w.expectNumber = w.expectBoolean = w.parseBoolean = void 0;
  var Rz = /* @__PURE__ */ __name((e35) => {
    switch (e35) {
      case "true":
        return true;
      case "false":
        return false;
      default:
        throw new Error(`Unable to parse boolean value "${e35}"`);
    }
  }, "Rz");
  w.parseBoolean = Rz;
  var qz = /* @__PURE__ */ __name((e35) => {
    if (e35 != null) {
      if (typeof e35 == "number") {
        if ((e35 === 0 || e35 === 1) && w.logger.warn(Rf(`Expected boolean, got ${typeof e35}: ${e35}`)), e35 === 0)
          return false;
        if (e35 === 1)
          return true;
      }
      if (typeof e35 == "string") {
        let t = e35.toLowerCase();
        if ((t === "false" || t === "true") && w.logger.warn(Rf(`Expected boolean, got ${typeof e35}: ${e35}`)), t === "false")
          return false;
        if (t === "true")
          return true;
      }
      if (typeof e35 == "boolean")
        return e35;
      throw new TypeError(`Expected boolean, got ${typeof e35}: ${e35}`);
    }
  }, "qz");
  w.expectBoolean = qz;
  var Mz = /* @__PURE__ */ __name((e35) => {
    if (e35 != null) {
      if (typeof e35 == "string") {
        let t = parseFloat(e35);
        if (!Number.isNaN(t))
          return String(t) !== String(e35) && w.logger.warn(Rf(`Expected number but observed string: ${e35}`)), t;
      }
      if (typeof e35 == "number")
        return e35;
      throw new TypeError(`Expected number, got ${typeof e35}: ${e35}`);
    }
  }, "Mz");
  w.expectNumber = Mz;
  var Dz = Math.ceil(2 ** 127 * (2 - 2 ** -23)), kz = /* @__PURE__ */ __name((e35) => {
    let t = (0, w.expectNumber)(e35);
    if (t !== void 0 && !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0 && Math.abs(t) > Dz)
      throw new TypeError(`Expected 32-bit float, got ${e35}`);
    return t;
  }, "kz");
  w.expectFloat32 = kz;
  var Fz = /* @__PURE__ */ __name((e35) => {
    if (e35 != null) {
      if (Number.isInteger(e35) && !Number.isNaN(e35))
        return e35;
      throw new TypeError(`Expected integer, got ${typeof e35}: ${e35}`);
    }
  }, "Fz");
  w.expectLong = Fz;
  w.expectInt = w.expectLong;
  var Lz = /* @__PURE__ */ __name((e35) => uv(e35, 32), "Lz");
  w.expectInt32 = Lz;
  var jz = /* @__PURE__ */ __name((e35) => uv(e35, 16), "jz");
  w.expectShort = jz;
  var Uz = /* @__PURE__ */ __name((e35) => uv(e35, 8), "Uz");
  w.expectByte = Uz;
  var uv = /* @__PURE__ */ __name((e35, t) => {
    let r = (0, w.expectLong)(e35);
    if (r !== void 0 && Bz(r, t) !== r)
      throw new TypeError(`Expected ${t}-bit integer, got ${e35}`);
    return r;
  }, "uv"), Bz = /* @__PURE__ */ __name((e35, t) => {
    switch (t) {
      case 32:
        return Int32Array.of(e35)[0];
      case 16:
        return Int16Array.of(e35)[0];
      case 8:
        return Int8Array.of(e35)[0];
    }
  }, "Bz"), Wz = /* @__PURE__ */ __name((e35, t) => {
    if (e35 == null)
      throw t ? new TypeError(`Expected a non-null value for ${t}`) : new TypeError("Expected a non-null value");
    return e35;
  }, "Wz");
  w.expectNonNull = Wz;
  var Vz = /* @__PURE__ */ __name((e35) => {
    if (e35 == null)
      return;
    if (typeof e35 == "object" && !Array.isArray(e35))
      return e35;
    let t = Array.isArray(e35) ? "array" : typeof e35;
    throw new TypeError(`Expected object, got ${t}: ${e35}`);
  }, "Vz");
  w.expectObject = Vz;
  var $z = /* @__PURE__ */ __name((e35) => {
    if (e35 != null) {
      if (typeof e35 == "string")
        return e35;
      if (["boolean", "number", "bigint"].includes(typeof e35))
        return w.logger.warn(Rf(`Expected string, got ${typeof e35}: ${e35}`)), String(e35);
      throw new TypeError(`Expected string, got ${typeof e35}: ${e35}`);
    }
  }, "$z");
  w.expectString = $z;
  var zz = /* @__PURE__ */ __name((e35) => {
    if (e35 == null)
      return;
    let t = (0, w.expectObject)(e35), r = Object.entries(t).filter(([, n]) => n != null).map(([n]) => n);
    if (r.length === 0)
      throw new TypeError("Unions must have exactly one non-null member. None were found.");
    if (r.length > 1)
      throw new TypeError(`Unions must have exactly one non-null member. Keys ${r} were not null.`);
    return t;
  }, "zz");
  w.expectUnion = zz;
  var Hz = /* @__PURE__ */ __name((e35) => typeof e35 == "string" ? (0, w.expectNumber)(ss(e35)) : (0, w.expectNumber)(e35), "Hz");
  w.strictParseDouble = Hz;
  w.strictParseFloat = w.strictParseDouble;
  var Gz = /* @__PURE__ */ __name((e35) => typeof e35 == "string" ? (0, w.expectFloat32)(ss(e35)) : (0, w.expectFloat32)(e35), "Gz");
  w.strictParseFloat32 = Gz;
  var Qz = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g, ss = /* @__PURE__ */ __name((e35) => {
    let t = e35.match(Qz);
    if (t === null || t[0].length !== e35.length)
      throw new TypeError("Expected real number, got implicit NaN");
    return parseFloat(e35);
  }, "ss"), Kz = /* @__PURE__ */ __name((e35) => typeof e35 == "string" ? PP(e35) : (0, w.expectNumber)(e35), "Kz");
  w.limitedParseDouble = Kz;
  w.handleFloat = w.limitedParseDouble;
  w.limitedParseFloat = w.limitedParseDouble;
  var Yz = /* @__PURE__ */ __name((e35) => typeof e35 == "string" ? PP(e35) : (0, w.expectFloat32)(e35), "Yz");
  w.limitedParseFloat32 = Yz;
  var PP = /* @__PURE__ */ __name((e35) => {
    switch (e35) {
      case "NaN":
        return NaN;
      case "Infinity":
        return 1 / 0;
      case "-Infinity":
        return -1 / 0;
      default:
        throw new Error(`Unable to parse float value: ${e35}`);
    }
  }, "PP"), Jz = /* @__PURE__ */ __name((e35) => typeof e35 == "string" ? (0, w.expectLong)(ss(e35)) : (0, w.expectLong)(e35), "Jz");
  w.strictParseLong = Jz;
  w.strictParseInt = w.strictParseLong;
  var Xz = /* @__PURE__ */ __name((e35) => typeof e35 == "string" ? (0, w.expectInt32)(ss(e35)) : (0, w.expectInt32)(e35), "Xz");
  w.strictParseInt32 = Xz;
  var Zz = /* @__PURE__ */ __name((e35) => typeof e35 == "string" ? (0, w.expectShort)(ss(e35)) : (0, w.expectShort)(e35), "Zz");
  w.strictParseShort = Zz;
  var eH = /* @__PURE__ */ __name((e35) => typeof e35 == "string" ? (0, w.expectByte)(ss(e35)) : (0, w.expectByte)(e35), "eH");
  w.strictParseByte = eH;
  var Rf = /* @__PURE__ */ __name((e35) => String(new TypeError(e35).stack || e35).split(`
`).slice(0, 5).filter((t) => !t.includes("stackTraceWarning")).join(`
`), "Rf");
  w.logger = { warn: console.warn };
});
var IP = c((Bt) => {
  "use strict";
  Object.defineProperty(Bt, "__esModule", { value: true });
  Bt.parseEpochTimestamp = Bt.parseRfc7231DateTime = Bt.parseRfc3339DateTimeWithOffset = Bt.parseRfc3339DateTime = Bt.dateToUtcString = void 0;
  var Gn = dv(), tH = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], pv = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function rH(e35) {
    let t = e35.getUTCFullYear(), r = e35.getUTCMonth(), n = e35.getUTCDay(), i = e35.getUTCDate(), o = e35.getUTCHours(), s = e35.getUTCMinutes(), a = e35.getUTCSeconds(), u = i < 10 ? `0${i}` : `${i}`, l = o < 10 ? `0${o}` : `${o}`, p = s < 10 ? `0${s}` : `${s}`, f = a < 10 ? `0${a}` : `${a}`;
    return `${tH[n]}, ${u} ${pv[r]} ${t} ${l}:${p}:${f} GMT`;
  }
  __name(rH, "rH");
  Bt.dateToUtcString = rH;
  var nH = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/), iH = /* @__PURE__ */ __name((e35) => {
    if (e35 == null)
      return;
    if (typeof e35 != "string")
      throw new TypeError("RFC-3339 date-times must be expressed as strings");
    let t = nH.exec(e35);
    if (!t)
      throw new TypeError("Invalid RFC-3339 date-time value");
    let [r, n, i, o, s, a, u, l] = t, p = (0, Gn.strictParseShort)(as(n)), f = Pr(i, "month", 1, 12), m = Pr(o, "day", 1, 31);
    return Bc(p, f, m, { hours: s, minutes: a, seconds: u, fractionalMilliseconds: l });
  }, "iH");
  Bt.parseRfc3339DateTime = iH;
  var oH = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/), sH = /* @__PURE__ */ __name((e35) => {
    if (e35 == null)
      return;
    if (typeof e35 != "string")
      throw new TypeError("RFC-3339 date-times must be expressed as strings");
    let t = oH.exec(e35);
    if (!t)
      throw new TypeError("Invalid RFC-3339 date-time value");
    let [r, n, i, o, s, a, u, l, p] = t, f = (0, Gn.strictParseShort)(as(n)), m = Pr(i, "month", 1, 12), h = Pr(o, "day", 1, 31), y = Bc(f, m, h, { hours: s, minutes: a, seconds: u, fractionalMilliseconds: l });
    return p.toUpperCase() != "Z" && y.setTime(y.getTime() - vH(p)), y;
  }, "sH");
  Bt.parseRfc3339DateTimeWithOffset = sH;
  var aH = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), cH = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), uH = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/), dH = /* @__PURE__ */ __name((e35) => {
    if (e35 == null)
      return;
    if (typeof e35 != "string")
      throw new TypeError("RFC-7231 date-times must be expressed as strings");
    let t = aH.exec(e35);
    if (t) {
      let [r, n, i, o, s, a, u, l] = t;
      return Bc((0, Gn.strictParseShort)(as(o)), lv(i), Pr(n, "day", 1, 31), { hours: s, minutes: a, seconds: u, fractionalMilliseconds: l });
    }
    if (t = cH.exec(e35), t) {
      let [r, n, i, o, s, a, u, l] = t;
      return mH(Bc(pH(o), lv(i), Pr(n, "day", 1, 31), { hours: s, minutes: a, seconds: u, fractionalMilliseconds: l }));
    }
    if (t = uH.exec(e35), t) {
      let [r, n, i, o, s, a, u, l] = t;
      return Bc((0, Gn.strictParseShort)(as(l)), lv(n), Pr(i.trimLeft(), "day", 1, 31), { hours: o, minutes: s, seconds: a, fractionalMilliseconds: u });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
  }, "dH");
  Bt.parseRfc7231DateTime = dH;
  var lH = /* @__PURE__ */ __name((e35) => {
    if (e35 == null)
      return;
    let t;
    if (typeof e35 == "number")
      t = e35;
    else if (typeof e35 == "string")
      t = (0, Gn.strictParseDouble)(e35);
    else
      throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    if (Number.isNaN(t) || t === 1 / 0 || t === -1 / 0)
      throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    return new Date(Math.round(t * 1e3));
  }, "lH");
  Bt.parseEpochTimestamp = lH;
  var Bc = /* @__PURE__ */ __name((e35, t, r, n) => {
    let i = t - 1;
    return _H(e35, i, r), new Date(Date.UTC(e35, i, r, Pr(n.hours, "hour", 0, 23), Pr(n.minutes, "minute", 0, 59), Pr(n.seconds, "seconds", 0, 60), gH(n.fractionalMilliseconds)));
  }, "Bc"), pH = /* @__PURE__ */ __name((e35) => {
    let t = (/* @__PURE__ */ new Date()).getUTCFullYear(), r = Math.floor(t / 100) * 100 + (0, Gn.strictParseShort)(as(e35));
    return r < t ? r + 100 : r;
  }, "pH"), fH = 50 * 365 * 24 * 60 * 60 * 1e3, mH = /* @__PURE__ */ __name((e35) => e35.getTime() - (/* @__PURE__ */ new Date()).getTime() > fH ? new Date(Date.UTC(e35.getUTCFullYear() - 100, e35.getUTCMonth(), e35.getUTCDate(), e35.getUTCHours(), e35.getUTCMinutes(), e35.getUTCSeconds(), e35.getUTCMilliseconds())) : e35, "mH"), lv = /* @__PURE__ */ __name((e35) => {
    let t = pv.indexOf(e35);
    if (t < 0)
      throw new TypeError(`Invalid month: ${e35}`);
    return t + 1;
  }, "lv"), hH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], _H = /* @__PURE__ */ __name((e35, t, r) => {
    let n = hH[t];
    if (t === 1 && yH(e35) && (n = 29), r > n)
      throw new TypeError(`Invalid day for ${pv[t]} in ${e35}: ${r}`);
  }, "_H"), yH = /* @__PURE__ */ __name((e35) => e35 % 4 === 0 && (e35 % 100 !== 0 || e35 % 400 === 0), "yH"), Pr = /* @__PURE__ */ __name((e35, t, r, n) => {
    let i = (0, Gn.strictParseByte)(as(e35));
    if (i < r || i > n)
      throw new TypeError(`${t} must be between ${r} and ${n}, inclusive`);
    return i;
  }, "Pr"), gH = /* @__PURE__ */ __name((e35) => e35 == null ? 0 : (0, Gn.strictParseFloat32)("0." + e35) * 1e3, "gH"), vH = /* @__PURE__ */ __name((e35) => {
    let t = e35[0], r = 1;
    if (t == "+")
      r = 1;
    else if (t == "-")
      r = -1;
    else
      throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`);
    let n = Number(e35.substring(1, 3)), i = Number(e35.substring(4, 6));
    return r * (n * 60 + i) * 60 * 1e3;
  }, "vH"), as = /* @__PURE__ */ __name((e35) => {
    let t = 0;
    for (; t < e35.length - 1 && e35.charAt(t) === "0"; )
      t++;
    return t === 0 ? e35 : e35.slice(t);
  }, "as");
});
var mv = c((cs) => {
  "use strict";
  Object.defineProperty(cs, "__esModule", { value: true });
  cs.decorateServiceException = cs.ServiceException = void 0;
  var fv = class e35 extends Error {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super(t.message), Object.setPrototypeOf(this, e35.prototype), this.name = t.name, this.$fault = t.$fault, this.$metadata = t.$metadata;
    }
  };
  cs.ServiceException = fv;
  var EH = /* @__PURE__ */ __name((e35, t = {}) => {
    Object.entries(t).filter(([, n]) => n !== void 0).forEach(([n, i]) => {
      (e35[n] == null || e35[n] === "") && (e35[n] = i);
    });
    let r = e35.message || e35.Message || "UnknownError";
    return e35.message = r, delete e35.Message, e35;
  }, "EH");
  cs.decorateServiceException = EH;
});
var RP = c((Yi) => {
  "use strict";
  Object.defineProperty(Yi, "__esModule", { value: true });
  Yi.withBaseException = Yi.throwDefaultError = void 0;
  var wH = mv(), SH = /* @__PURE__ */ __name(({ output: e35, parsedBody: t, exceptionCtor: r, errorCode: n }) => {
    let i = bH(e35), o = i.httpStatusCode ? i.httpStatusCode + "" : void 0, s = new r({ name: t?.code || t?.Code || n || o || "UnknownError", $fault: "client", $metadata: i });
    throw (0, wH.decorateServiceException)(s, t);
  }, "SH");
  Yi.throwDefaultError = SH;
  var NH = /* @__PURE__ */ __name((e35) => ({ output: t, parsedBody: r, errorCode: n }) => {
    (0, Yi.throwDefaultError)({ output: t, parsedBody: r, exceptionCtor: e35, errorCode: n });
  }, "NH");
  Yi.withBaseException = NH;
  var bH = /* @__PURE__ */ __name((e35) => {
    var t, r;
    return { httpStatusCode: e35.statusCode, requestId: (r = (t = e35.headers["x-amzn-requestid"]) !== null && t !== void 0 ? t : e35.headers["x-amzn-request-id"]) !== null && r !== void 0 ? r : e35.headers["x-amz-request-id"], extendedRequestId: e35.headers["x-amz-id-2"], cfId: e35.headers["x-amz-cf-id"] };
  }, "bH");
});
var qP = c((qf) => {
  "use strict";
  Object.defineProperty(qf, "__esModule", { value: true });
  qf.loadConfigsForDefaultMode = void 0;
  var xH = /* @__PURE__ */ __name((e35) => {
    switch (e35) {
      case "standard":
        return { retryMode: "standard", connectionTimeout: 3100 };
      case "in-region":
        return { retryMode: "standard", connectionTimeout: 1100 };
      case "cross-region":
        return { retryMode: "standard", connectionTimeout: 3100 };
      case "mobile":
        return { retryMode: "standard", connectionTimeout: 3e4 };
      default:
        return {};
    }
  }, "xH");
  qf.loadConfigsForDefaultMode = xH;
});
var DP = c((Mf) => {
  "use strict";
  Object.defineProperty(Mf, "__esModule", { value: true });
  Mf.emitWarningIfUnsupportedVersion = void 0;
  var MP = false, CH = /* @__PURE__ */ __name((e35) => {
    e35 && !MP && parseInt(e35.substring(1, e35.indexOf("."))) < 14 && (MP = true);
  }, "CH");
  Mf.emitWarningIfUnsupportedVersion = CH;
});
var kP = c((Qn) => {
  "use strict";
  Object.defineProperty(Qn, "__esModule", { value: true });
  Qn.resolveChecksumRuntimeConfig = Qn.getChecksumConfiguration = Qn.AlgorithmId = void 0;
  var hv = K();
  Object.defineProperty(Qn, "AlgorithmId", { enumerable: true, get: function() {
    return hv.AlgorithmId;
  } });
  var OH = /* @__PURE__ */ __name((e35) => {
    let t = [];
    for (let r in hv.AlgorithmId) {
      let n = hv.AlgorithmId[r];
      e35[n] !== void 0 && t.push({ algorithmId: () => n, checksumConstructor: () => e35[n] });
    }
    return { _checksumAlgorithms: t, addChecksumAlgorithm(r) {
      this._checksumAlgorithms.push(r);
    }, checksumAlgorithms() {
      return this._checksumAlgorithms;
    } };
  }, "OH");
  Qn.getChecksumConfiguration = OH;
  var AH = /* @__PURE__ */ __name((e35) => {
    let t = {};
    return e35.checksumAlgorithms().forEach((r) => {
      t[r.algorithmId()] = r.checksumConstructor();
    }), t;
  }, "AH");
  Qn.resolveChecksumRuntimeConfig = AH;
});
var FP = c((us) => {
  "use strict";
  Object.defineProperty(us, "__esModule", { value: true });
  us.resolveRetryRuntimeConfig = us.getRetryConfiguration = void 0;
  var TH = /* @__PURE__ */ __name((e35) => {
    let t = e35.retryStrategy;
    return { setRetryStrategy(r) {
      t = r;
    }, retryStrategy() {
      return t;
    } };
  }, "TH");
  us.getRetryConfiguration = TH;
  var PH = /* @__PURE__ */ __name((e35) => {
    let t = {};
    return t.retryStrategy = e35.retryStrategy(), t;
  }, "PH");
  us.resolveRetryRuntimeConfig = PH;
});
var UP = c((dn) => {
  "use strict";
  Object.defineProperty(dn, "__esModule", { value: true });
  dn.resolveDefaultRuntimeConfig = dn.getDefaultClientConfiguration = dn.getDefaultExtensionConfiguration = void 0;
  var LP = kP(), jP = FP(), IH = /* @__PURE__ */ __name((e35) => ({ ...(0, LP.getChecksumConfiguration)(e35), ...(0, jP.getRetryConfiguration)(e35) }), "IH");
  dn.getDefaultExtensionConfiguration = IH;
  dn.getDefaultClientConfiguration = dn.getDefaultExtensionConfiguration;
  var RH = /* @__PURE__ */ __name((e35) => ({ ...(0, LP.resolveChecksumRuntimeConfig)(e35), ...(0, jP.resolveRetryRuntimeConfig)(e35) }), "RH");
  dn.resolveDefaultRuntimeConfig = RH;
});
var BP = c((_v) => {
  "use strict";
  Object.defineProperty(_v, "__esModule", { value: true });
  var qH = (b(), S(N));
  qH.__exportStar(UP(), _v);
});
var yv = c((Df) => {
  "use strict";
  Object.defineProperty(Df, "__esModule", { value: true });
  Df.extendedEncodeURIComponent = void 0;
  function MH(e35) {
    return encodeURIComponent(e35).replace(/[!'()*]/g, function(t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  __name(MH, "MH");
  Df.extendedEncodeURIComponent = MH;
});
var WP = c((kf) => {
  "use strict";
  Object.defineProperty(kf, "__esModule", { value: true });
  kf.getArrayIfSingleItem = void 0;
  var DH = /* @__PURE__ */ __name((e35) => Array.isArray(e35) ? e35 : [e35], "DH");
  kf.getArrayIfSingleItem = DH;
});
var VP = c((Wc) => {
  "use strict";
  Object.defineProperty(Wc, "__esModule", { value: true });
  Wc.getValueFromTextNode = void 0;
  var kH = /* @__PURE__ */ __name((e35) => {
    let t = "#text";
    for (let r in e35)
      e35.hasOwnProperty(r) && e35[r][t] !== void 0 ? e35[r] = e35[r][t] : typeof e35[r] == "object" && e35[r] !== null && (e35[r] = (0, Wc.getValueFromTextNode)(e35[r]));
    return e35;
  }, "kH");
  Wc.getValueFromTextNode = kH;
});
var $P = c((Ir) => {
  "use strict";
  Object.defineProperty(Ir, "__esModule", { value: true });
  Ir.LazyJsonString = Ir.StringWrapper = void 0;
  var FH = /* @__PURE__ */ __name(function() {
    let e35 = Object.getPrototypeOf(this).constructor, t = Function.bind.apply(String, [null, ...arguments]), r = new t();
    return Object.setPrototypeOf(r, e35.prototype), r;
  }, "FH");
  Ir.StringWrapper = FH;
  Ir.StringWrapper.prototype = Object.create(String.prototype, { constructor: { value: Ir.StringWrapper, enumerable: false, writable: true, configurable: true } });
  Object.setPrototypeOf(Ir.StringWrapper, String);
  var gv = class e35 extends Ir.StringWrapper {
    static {
      __name(this, "e");
    }
    deserializeJSON() {
      return JSON.parse(super.toString());
    }
    toJSON() {
      return super.toString();
    }
    static fromObject(t) {
      return t instanceof e35 ? t : t instanceof String || typeof t == "string" ? new e35(t) : new e35(JSON.stringify(t));
    }
  };
  Ir.LazyJsonString = gv;
});
var GP = c((Kn) => {
  "use strict";
  Object.defineProperty(Kn, "__esModule", { value: true });
  Kn.take = Kn.convertMap = Kn.map = void 0;
  function zP(e35, t, r) {
    let n, i, o;
    if (typeof t > "u" && typeof r > "u")
      n = {}, o = e35;
    else {
      if (n = e35, typeof t == "function")
        return i = t, o = r, UH(n, i, o);
      o = t;
    }
    for (let s of Object.keys(o)) {
      if (!Array.isArray(o[s])) {
        n[s] = o[s];
        continue;
      }
      HP(n, null, o, s);
    }
    return n;
  }
  __name(zP, "zP");
  Kn.map = zP;
  var LH = /* @__PURE__ */ __name((e35) => {
    let t = {};
    for (let [r, n] of Object.entries(e35 || {}))
      t[r] = [, n];
    return t;
  }, "LH");
  Kn.convertMap = LH;
  var jH = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    for (let n in t)
      HP(r, e35, t, n);
    return r;
  }, "jH");
  Kn.take = jH;
  var UH = /* @__PURE__ */ __name((e35, t, r) => zP(e35, Object.entries(r).reduce((n, [i, o]) => (Array.isArray(o) ? n[i] = o : typeof o == "function" ? n[i] = [t, o()] : n[i] = [t, o], n), {})), "UH"), HP = /* @__PURE__ */ __name((e35, t, r, n) => {
    if (t !== null) {
      let s = r[n];
      typeof s == "function" && (s = [, s]);
      let [a = BH, u = WH, l = n] = s;
      (typeof a == "function" && a(t[l]) || typeof a != "function" && a) && (e35[n] = u(t[l]));
      return;
    }
    let [i, o] = r[n];
    if (typeof o == "function") {
      let s, a = i === void 0 && (s = o()) != null, u = typeof i == "function" && !!i(void 0) || typeof i != "function" && !!i;
      a ? e35[n] = s : u && (e35[n] = o());
    } else {
      let s = i === void 0 && o != null, a = typeof i == "function" && !!i(o) || typeof i != "function" && !!i;
      (s || a) && (e35[n] = o);
    }
  }, "HP"), BH = /* @__PURE__ */ __name((e35) => e35 != null, "BH"), WH = /* @__PURE__ */ __name((e35) => e35, "WH");
});
var KP = c((Ff) => {
  "use strict";
  Object.defineProperty(Ff, "__esModule", { value: true });
  Ff.resolvedPath = void 0;
  var QP = yv(), VH = /* @__PURE__ */ __name((e35, t, r, n, i, o) => {
    if (t != null && t[r] !== void 0) {
      let s = n();
      if (s.length <= 0)
        throw new Error("Empty value provided for input HTTP label: " + r + ".");
      e35 = e35.replace(i, o ? s.split("/").map((a) => (0, QP.extendedEncodeURIComponent)(a)).join("/") : (0, QP.extendedEncodeURIComponent)(s));
    } else
      throw new Error("No value provided for input HTTP label: " + r + ".");
    return e35;
  }, "VH");
  Ff.resolvedPath = VH;
});
var YP = c((Lf) => {
  "use strict";
  Object.defineProperty(Lf, "__esModule", { value: true });
  Lf.serializeFloat = void 0;
  var $H = /* @__PURE__ */ __name((e35) => {
    if (e35 !== e35)
      return "NaN";
    switch (e35) {
      case 1 / 0:
        return "Infinity";
      case -1 / 0:
        return "-Infinity";
      default:
        return e35;
    }
  }, "$H");
  Lf.serializeFloat = $H;
});
var JP = c((Vc) => {
  "use strict";
  Object.defineProperty(Vc, "__esModule", { value: true });
  Vc._json = void 0;
  var zH = /* @__PURE__ */ __name((e35) => {
    if (e35 == null)
      return {};
    if (Array.isArray(e35))
      return e35.filter((t) => t != null);
    if (typeof e35 == "object") {
      let t = {};
      for (let r of Object.keys(e35))
        e35[r] != null && (t[r] = (0, Vc._json)(e35[r]));
      return t;
    }
    return e35;
  }, "zH");
  Vc._json = zH;
});
var XP = c((jf) => {
  "use strict";
  Object.defineProperty(jf, "__esModule", { value: true });
  jf.splitEvery = void 0;
  function HH(e35, t, r) {
    if (r <= 0 || !Number.isInteger(r))
      throw new Error("Invalid number of delimiters (" + r + ") for splitEvery.");
    let n = e35.split(t);
    if (r === 1)
      return n;
    let i = [], o = "";
    for (let s = 0; s < n.length; s++)
      o === "" ? o = n[s] : o += t + n[s], (s + 1) % r === 0 && (i.push(o), o = "");
    return o !== "" && i.push(o), i;
  }
  __name(HH, "HH");
  jf.splitEvery = HH;
});
var A = c((de) => {
  "use strict";
  Object.defineProperty(de, "__esModule", { value: true });
  var Ne = (b(), S(N));
  Ne.__exportStar(KT(), de);
  Ne.__exportStar(ZT(), de);
  Ne.__exportStar(CP(), de);
  Ne.__exportStar(OP(), de);
  Ne.__exportStar(AP(), de);
  Ne.__exportStar(TP(), de);
  Ne.__exportStar(IP(), de);
  Ne.__exportStar(RP(), de);
  Ne.__exportStar(qP(), de);
  Ne.__exportStar(DP(), de);
  Ne.__exportStar(BP(), de);
  Ne.__exportStar(mv(), de);
  Ne.__exportStar(yv(), de);
  Ne.__exportStar(WP(), de);
  Ne.__exportStar(VP(), de);
  Ne.__exportStar($P(), de);
  Ne.__exportStar(GP(), de);
  Ne.__exportStar(dv(), de);
  Ne.__exportStar(KP(), de);
  Ne.__exportStar(YP(), de);
  Ne.__exportStar(JP(), de);
  Ne.__exportStar(XP(), de);
});
var ZP = c((Uf) => {
  "use strict";
  Object.defineProperty(Uf, "__esModule", { value: true });
  Uf.resolveClientEndpointParameters = void 0;
  var GH = /* @__PURE__ */ __name((e35) => ({ ...e35, useDualstackEndpoint: e35.useDualstackEndpoint ?? false, useFipsEndpoint: e35.useFipsEndpoint ?? false, defaultSigningName: "rds-data" }), "GH");
  Uf.resolveClientEndpointParameters = GH;
});
var eI = c((ewe, QH) => {
  QH.exports = { name: "@aws-sdk/client-rds-data", description: "AWS SDK for JavaScript Rds Data Client for Node.js, Browser and React Native", version: "3.430.0", scripts: { build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'", "build:cjs": "tsc -p tsconfig.cjs.json", "build:docs": "typedoc", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build", "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo rds-data" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: false, dependencies: { "@aws-crypto/sha256-browser": "3.0.0", "@aws-crypto/sha256-js": "3.0.0", "@aws-sdk/client-sts": "3.430.0", "@aws-sdk/credential-provider-node": "3.430.0", "@aws-sdk/middleware-host-header": "3.429.0", "@aws-sdk/middleware-logger": "3.428.0", "@aws-sdk/middleware-recursion-detection": "3.428.0", "@aws-sdk/middleware-signing": "3.428.0", "@aws-sdk/middleware-user-agent": "3.428.0", "@aws-sdk/region-config-resolver": "3.430.0", "@aws-sdk/types": "3.428.0", "@aws-sdk/util-endpoints": "3.428.0", "@aws-sdk/util-user-agent-browser": "3.428.0", "@aws-sdk/util-user-agent-node": "3.430.0", "@smithy/config-resolver": "^2.0.15", "@smithy/fetch-http-handler": "^2.2.3", "@smithy/hash-node": "^2.0.11", "@smithy/invalid-dependency": "^2.0.11", "@smithy/middleware-content-length": "^2.0.13", "@smithy/middleware-endpoint": "^2.1.2", "@smithy/middleware-retry": "^2.0.17", "@smithy/middleware-serde": "^2.0.11", "@smithy/middleware-stack": "^2.0.5", "@smithy/node-config-provider": "^2.1.2", "@smithy/node-http-handler": "^2.1.7", "@smithy/protocol-http": "^3.0.7", "@smithy/smithy-client": "^2.1.11", "@smithy/types": "^2.3.5", "@smithy/url-parser": "^2.0.11", "@smithy/util-base64": "^2.0.0", "@smithy/util-body-length-browser": "^2.0.0", "@smithy/util-body-length-node": "^2.1.0", "@smithy/util-defaults-mode-browser": "^2.0.15", "@smithy/util-defaults-mode-node": "^2.0.20", "@smithy/util-retry": "^2.0.4", "@smithy/util-utf8": "^2.0.0", tslib: "^2.5.0" }, devDependencies: { "@smithy/service-client-documentation-generator": "^2.0.0", "@tsconfig/node14": "1.0.3", "@types/node": "^14.14.31", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typedoc: "0.23.23", typescript: "~4.9.5" }, engines: { node: ">=14.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-rds-data", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-rds-data" } };
});
var tI = c((Bf) => {
  "use strict";
  Object.defineProperty(Bf, "__esModule", { value: true });
  Bf.resolveStsAuthConfig = void 0;
  var KH = rn(), YH = /* @__PURE__ */ __name((e35, { stsClientCtor: t }) => (0, KH.resolveAwsAuthConfig)({ ...e35, stsClientCtor: t }), "YH");
  Bf.resolveStsAuthConfig = YH;
});
var rI = c((Wf) => {
  "use strict";
  Object.defineProperty(Wf, "__esModule", { value: true });
  Wf.resolveClientEndpointParameters = void 0;
  var JH = /* @__PURE__ */ __name((e35) => ({ ...e35, useDualstackEndpoint: e35.useDualstackEndpoint ?? false, useFipsEndpoint: e35.useFipsEndpoint ?? false, useGlobalEndpoint: e35.useGlobalEndpoint ?? false, defaultSigningName: "sts" }), "JH");
  Wf.resolveClientEndpointParameters = JH;
});
var nI = c((nwe, XH) => {
  XH.exports = { name: "@aws-sdk/client-sts", description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native", version: "3.430.0", scripts: { build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'", "build:cjs": "tsc -p tsconfig.cjs.json", "build:docs": "typedoc", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build", "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo sts", test: "yarn test:unit", "test:unit": "jest" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: false, dependencies: { "@aws-crypto/sha256-browser": "3.0.0", "@aws-crypto/sha256-js": "3.0.0", "@aws-sdk/credential-provider-node": "3.430.0", "@aws-sdk/middleware-host-header": "3.429.0", "@aws-sdk/middleware-logger": "3.428.0", "@aws-sdk/middleware-recursion-detection": "3.428.0", "@aws-sdk/middleware-sdk-sts": "3.428.0", "@aws-sdk/middleware-signing": "3.428.0", "@aws-sdk/middleware-user-agent": "3.428.0", "@aws-sdk/region-config-resolver": "3.430.0", "@aws-sdk/types": "3.428.0", "@aws-sdk/util-endpoints": "3.428.0", "@aws-sdk/util-user-agent-browser": "3.428.0", "@aws-sdk/util-user-agent-node": "3.430.0", "@smithy/config-resolver": "^2.0.15", "@smithy/fetch-http-handler": "^2.2.3", "@smithy/hash-node": "^2.0.11", "@smithy/invalid-dependency": "^2.0.11", "@smithy/middleware-content-length": "^2.0.13", "@smithy/middleware-endpoint": "^2.1.2", "@smithy/middleware-retry": "^2.0.17", "@smithy/middleware-serde": "^2.0.11", "@smithy/middleware-stack": "^2.0.5", "@smithy/node-config-provider": "^2.1.2", "@smithy/node-http-handler": "^2.1.7", "@smithy/protocol-http": "^3.0.7", "@smithy/smithy-client": "^2.1.11", "@smithy/types": "^2.3.5", "@smithy/url-parser": "^2.0.11", "@smithy/util-base64": "^2.0.0", "@smithy/util-body-length-browser": "^2.0.0", "@smithy/util-body-length-node": "^2.1.0", "@smithy/util-defaults-mode-browser": "^2.0.15", "@smithy/util-defaults-mode-node": "^2.0.20", "@smithy/util-retry": "^2.0.4", "@smithy/util-utf8": "^2.0.0", "fast-xml-parser": "4.2.5", tslib: "^2.5.0" }, devDependencies: { "@smithy/service-client-documentation-generator": "^2.0.0", "@tsconfig/node14": "1.0.3", "@types/node": "^14.14.31", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typedoc: "0.23.23", typescript: "~4.9.5" }, engines: { node: ">=14.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-sts" } };
});
var Vf = c((ds) => {
  "use strict";
  Object.defineProperty(ds, "__esModule", { value: true });
  ds.STSServiceException = ds.__ServiceException = void 0;
  var iI = A();
  Object.defineProperty(ds, "__ServiceException", { enumerable: true, get: function() {
    return iI.ServiceException;
  } });
  var vv = class e35 extends iI.ServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super(t), Object.setPrototypeOf(this, e35.prototype);
    }
  };
  ds.STSServiceException = vv;
});
var Jn = c((L) => {
  "use strict";
  Object.defineProperty(L, "__esModule", { value: true });
  L.GetSessionTokenResponseFilterSensitiveLog = L.GetFederationTokenResponseFilterSensitiveLog = L.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = L.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = L.AssumeRoleWithSAMLResponseFilterSensitiveLog = L.AssumeRoleWithSAMLRequestFilterSensitiveLog = L.AssumeRoleResponseFilterSensitiveLog = L.CredentialsFilterSensitiveLog = L.InvalidAuthorizationMessageException = L.IDPCommunicationErrorException = L.InvalidIdentityTokenException = L.IDPRejectedClaimException = L.RegionDisabledException = L.PackedPolicyTooLargeException = L.MalformedPolicyDocumentException = L.ExpiredTokenException = void 0;
  var Av = A(), Yn = Vf(), Ev = class e36 extends Yn.STSServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "ExpiredTokenException", $fault: "client", ...t }), this.name = "ExpiredTokenException", this.$fault = "client", Object.setPrototypeOf(this, e36.prototype);
    }
  };
  L.ExpiredTokenException = Ev;
  var wv = class e36 extends Yn.STSServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "MalformedPolicyDocumentException", $fault: "client", ...t }), this.name = "MalformedPolicyDocumentException", this.$fault = "client", Object.setPrototypeOf(this, e36.prototype);
    }
  };
  L.MalformedPolicyDocumentException = wv;
  var Sv = class e36 extends Yn.STSServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "PackedPolicyTooLargeException", $fault: "client", ...t }), this.name = "PackedPolicyTooLargeException", this.$fault = "client", Object.setPrototypeOf(this, e36.prototype);
    }
  };
  L.PackedPolicyTooLargeException = Sv;
  var Nv = class e36 extends Yn.STSServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "RegionDisabledException", $fault: "client", ...t }), this.name = "RegionDisabledException", this.$fault = "client", Object.setPrototypeOf(this, e36.prototype);
    }
  };
  L.RegionDisabledException = Nv;
  var bv = class e36 extends Yn.STSServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "IDPRejectedClaimException", $fault: "client", ...t }), this.name = "IDPRejectedClaimException", this.$fault = "client", Object.setPrototypeOf(this, e36.prototype);
    }
  };
  L.IDPRejectedClaimException = bv;
  var xv = class e36 extends Yn.STSServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "InvalidIdentityTokenException", $fault: "client", ...t }), this.name = "InvalidIdentityTokenException", this.$fault = "client", Object.setPrototypeOf(this, e36.prototype);
    }
  };
  L.InvalidIdentityTokenException = xv;
  var Cv = class e36 extends Yn.STSServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "IDPCommunicationErrorException", $fault: "client", ...t }), this.name = "IDPCommunicationErrorException", this.$fault = "client", Object.setPrototypeOf(this, e36.prototype);
    }
  };
  L.IDPCommunicationErrorException = Cv;
  var Ov = class e36 extends Yn.STSServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "InvalidAuthorizationMessageException", $fault: "client", ...t }), this.name = "InvalidAuthorizationMessageException", this.$fault = "client", Object.setPrototypeOf(this, e36.prototype);
    }
  };
  L.InvalidAuthorizationMessageException = Ov;
  var ZH = /* @__PURE__ */ __name((e36) => ({ ...e36, ...e36.SecretAccessKey && { SecretAccessKey: Av.SENSITIVE_STRING } }), "ZH");
  L.CredentialsFilterSensitiveLog = ZH;
  var e35 = /* @__PURE__ */ __name((e36) => ({ ...e36, ...e36.Credentials && { Credentials: (0, L.CredentialsFilterSensitiveLog)(e36.Credentials) } }), "e3");
  L.AssumeRoleResponseFilterSensitiveLog = e35;
  var t3 = /* @__PURE__ */ __name((e36) => ({ ...e36, ...e36.SAMLAssertion && { SAMLAssertion: Av.SENSITIVE_STRING } }), "t3");
  L.AssumeRoleWithSAMLRequestFilterSensitiveLog = t3;
  var r3 = /* @__PURE__ */ __name((e36) => ({ ...e36, ...e36.Credentials && { Credentials: (0, L.CredentialsFilterSensitiveLog)(e36.Credentials) } }), "r3");
  L.AssumeRoleWithSAMLResponseFilterSensitiveLog = r3;
  var n3 = /* @__PURE__ */ __name((e36) => ({ ...e36, ...e36.WebIdentityToken && { WebIdentityToken: Av.SENSITIVE_STRING } }), "n3");
  L.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = n3;
  var i3 = /* @__PURE__ */ __name((e36) => ({ ...e36, ...e36.Credentials && { Credentials: (0, L.CredentialsFilterSensitiveLog)(e36.Credentials) } }), "i3");
  L.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = i3;
  var o3 = /* @__PURE__ */ __name((e36) => ({ ...e36, ...e36.Credentials && { Credentials: (0, L.CredentialsFilterSensitiveLog)(e36.Credentials) } }), "o3");
  L.GetFederationTokenResponseFilterSensitiveLog = o3;
  var s3 = /* @__PURE__ */ __name((e36) => ({ ...e36, ...e36.Credentials && { Credentials: (0, L.CredentialsFilterSensitiveLog)(e36.Credentials) } }), "s3");
  L.GetSessionTokenResponseFilterSensitiveLog = s3;
});
var $f = c((ln) => {
  "use strict";
  var oI = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", a3 = oI + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", sI = "[" + oI + "][" + a3 + "]*", c3 = new RegExp("^" + sI + "$"), u3 = /* @__PURE__ */ __name(function(e35, t) {
    let r = [], n = t.exec(e35);
    for (; n; ) {
      let i = [];
      i.startIndex = t.lastIndex - n[0].length;
      let o = n.length;
      for (let s = 0; s < o; s++)
        i.push(n[s]);
      r.push(i), n = t.exec(e35);
    }
    return r;
  }, "u3"), d3 = /* @__PURE__ */ __name(function(e35) {
    let t = c3.exec(e35);
    return !(t === null || typeof t > "u");
  }, "d3");
  ln.isExist = function(e35) {
    return typeof e35 < "u";
  };
  ln.isEmptyObject = function(e35) {
    return Object.keys(e35).length === 0;
  };
  ln.merge = function(e35, t, r) {
    if (t) {
      let n = Object.keys(t), i = n.length;
      for (let o = 0; o < i; o++)
        r === "strict" ? e35[n[o]] = [t[n[o]]] : e35[n[o]] = t[n[o]];
    }
  };
  ln.getValue = function(e35) {
    return ln.isExist(e35) ? e35 : "";
  };
  ln.isName = d3;
  ln.getAllMatches = u3;
  ln.nameRegexp = sI;
});
var Pv = c((lI) => {
  "use strict";
  var Tv = $f(), l3 = { allowBooleanAttributes: false, unpairedTags: [] };
  lI.validate = function(e35, t) {
    t = Object.assign({}, l3, t);
    let r = [], n = false, i = false;
    e35[0] === "\uFEFF" && (e35 = e35.substr(1));
    for (let o = 0; o < e35.length; o++)
      if (e35[o] === "<" && e35[o + 1] === "?") {
        if (o += 2, o = cI(e35, o), o.err)
          return o;
      } else if (e35[o] === "<") {
        let s = o;
        if (o++, e35[o] === "!") {
          o = uI(e35, o);
          continue;
        } else {
          let a = false;
          e35[o] === "/" && (a = true, o++);
          let u = "";
          for (; o < e35.length && e35[o] !== ">" && e35[o] !== " " && e35[o] !== "	" && e35[o] !== `
` && e35[o] !== "\r"; o++)
            u += e35[o];
          if (u = u.trim(), u[u.length - 1] === "/" && (u = u.substring(0, u.length - 1), o--), !v3(u)) {
            let f;
            return u.trim().length === 0 ? f = "Invalid space after '<'." : f = "Tag '" + u + "' is an invalid name.", Te("InvalidTag", f, ht(e35, o));
          }
          let l = m3(e35, o);
          if (l === false)
            return Te("InvalidAttr", "Attributes for '" + u + "' have open quote.", ht(e35, o));
          let p = l.value;
          if (o = l.index, p[p.length - 1] === "/") {
            let f = o - p.length;
            p = p.substring(0, p.length - 1);
            let m = dI(p, t);
            if (m === true)
              n = true;
            else
              return Te(m.err.code, m.err.msg, ht(e35, f + m.err.line));
          } else if (a)
            if (l.tagClosed) {
              if (p.trim().length > 0)
                return Te("InvalidTag", "Closing tag '" + u + "' can't have attributes or invalid starting.", ht(e35, s));
              {
                let f = r.pop();
                if (u !== f.tagName) {
                  let m = ht(e35, f.tagStartPos);
                  return Te("InvalidTag", "Expected closing tag '" + f.tagName + "' (opened in line " + m.line + ", col " + m.col + ") instead of closing tag '" + u + "'.", ht(e35, s));
                }
                r.length == 0 && (i = true);
              }
            } else
              return Te("InvalidTag", "Closing tag '" + u + "' doesn't have proper closing.", ht(e35, o));
          else {
            let f = dI(p, t);
            if (f !== true)
              return Te(f.err.code, f.err.msg, ht(e35, o - p.length + f.err.line));
            if (i === true)
              return Te("InvalidXml", "Multiple possible root nodes found.", ht(e35, o));
            t.unpairedTags.indexOf(u) !== -1 || r.push({ tagName: u, tagStartPos: s }), n = true;
          }
          for (o++; o < e35.length; o++)
            if (e35[o] === "<")
              if (e35[o + 1] === "!") {
                o++, o = uI(e35, o);
                continue;
              } else if (e35[o + 1] === "?") {
                if (o = cI(e35, ++o), o.err)
                  return o;
              } else
                break;
            else if (e35[o] === "&") {
              let f = y3(e35, o);
              if (f == -1)
                return Te("InvalidChar", "char '&' is not expected.", ht(e35, o));
              o = f;
            } else if (i === true && !aI(e35[o]))
              return Te("InvalidXml", "Extra text at the end", ht(e35, o));
          e35[o] === "<" && o--;
        }
      } else {
        if (aI(e35[o]))
          continue;
        return Te("InvalidChar", "char '" + e35[o] + "' is not expected.", ht(e35, o));
      }
    if (n) {
      if (r.length == 1)
        return Te("InvalidTag", "Unclosed tag '" + r[0].tagName + "'.", ht(e35, r[0].tagStartPos));
      if (r.length > 0)
        return Te("InvalidXml", "Invalid '" + JSON.stringify(r.map((o) => o.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
    } else
      return Te("InvalidXml", "Start tag expected.", 1);
    return true;
  };
  function aI(e35) {
    return e35 === " " || e35 === "	" || e35 === `
` || e35 === "\r";
  }
  __name(aI, "aI");
  function cI(e35, t) {
    let r = t;
    for (; t < e35.length; t++)
      if (e35[t] == "?" || e35[t] == " ") {
        let n = e35.substr(r, t - r);
        if (t > 5 && n === "xml")
          return Te("InvalidXml", "XML declaration allowed only at the start of the document.", ht(e35, t));
        if (e35[t] == "?" && e35[t + 1] == ">") {
          t++;
          break;
        } else
          continue;
      }
    return t;
  }
  __name(cI, "cI");
  function uI(e35, t) {
    if (e35.length > t + 5 && e35[t + 1] === "-" && e35[t + 2] === "-") {
      for (t += 3; t < e35.length; t++)
        if (e35[t] === "-" && e35[t + 1] === "-" && e35[t + 2] === ">") {
          t += 2;
          break;
        }
    } else if (e35.length > t + 8 && e35[t + 1] === "D" && e35[t + 2] === "O" && e35[t + 3] === "C" && e35[t + 4] === "T" && e35[t + 5] === "Y" && e35[t + 6] === "P" && e35[t + 7] === "E") {
      let r = 1;
      for (t += 8; t < e35.length; t++)
        if (e35[t] === "<")
          r++;
        else if (e35[t] === ">" && (r--, r === 0))
          break;
    } else if (e35.length > t + 9 && e35[t + 1] === "[" && e35[t + 2] === "C" && e35[t + 3] === "D" && e35[t + 4] === "A" && e35[t + 5] === "T" && e35[t + 6] === "A" && e35[t + 7] === "[") {
      for (t += 8; t < e35.length; t++)
        if (e35[t] === "]" && e35[t + 1] === "]" && e35[t + 2] === ">") {
          t += 2;
          break;
        }
    }
    return t;
  }
  __name(uI, "uI");
  var p3 = '"', f3 = "'";
  function m3(e35, t) {
    let r = "", n = "", i = false;
    for (; t < e35.length; t++) {
      if (e35[t] === p3 || e35[t] === f3)
        n === "" ? n = e35[t] : n !== e35[t] || (n = "");
      else if (e35[t] === ">" && n === "") {
        i = true;
        break;
      }
      r += e35[t];
    }
    return n !== "" ? false : { value: r, index: t, tagClosed: i };
  }
  __name(m3, "m3");
  var h3 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function dI(e35, t) {
    let r = Tv.getAllMatches(e35, h3), n = {};
    for (let i = 0; i < r.length; i++) {
      if (r[i][1].length === 0)
        return Te("InvalidAttr", "Attribute '" + r[i][2] + "' has no space in starting.", $c(r[i]));
      if (r[i][3] !== void 0 && r[i][4] === void 0)
        return Te("InvalidAttr", "Attribute '" + r[i][2] + "' is without value.", $c(r[i]));
      if (r[i][3] === void 0 && !t.allowBooleanAttributes)
        return Te("InvalidAttr", "boolean attribute '" + r[i][2] + "' is not allowed.", $c(r[i]));
      let o = r[i][2];
      if (!g3(o))
        return Te("InvalidAttr", "Attribute '" + o + "' is an invalid name.", $c(r[i]));
      if (!n.hasOwnProperty(o))
        n[o] = 1;
      else
        return Te("InvalidAttr", "Attribute '" + o + "' is repeated.", $c(r[i]));
    }
    return true;
  }
  __name(dI, "dI");
  function _3(e35, t) {
    let r = /\d/;
    for (e35[t] === "x" && (t++, r = /[\da-fA-F]/); t < e35.length; t++) {
      if (e35[t] === ";")
        return t;
      if (!e35[t].match(r))
        break;
    }
    return -1;
  }
  __name(_3, "_3");
  function y3(e35, t) {
    if (t++, e35[t] === ";")
      return -1;
    if (e35[t] === "#")
      return t++, _3(e35, t);
    let r = 0;
    for (; t < e35.length; t++, r++)
      if (!(e35[t].match(/\w/) && r < 20)) {
        if (e35[t] === ";")
          break;
        return -1;
      }
    return t;
  }
  __name(y3, "y3");
  function Te(e35, t, r) {
    return { err: { code: e35, msg: t, line: r.line || r, col: r.col } };
  }
  __name(Te, "Te");
  function g3(e35) {
    return Tv.isName(e35);
  }
  __name(g3, "g3");
  function v3(e35) {
    return Tv.isName(e35);
  }
  __name(v3, "v3");
  function ht(e35, t) {
    let r = e35.substring(0, t).split(/\r?\n/);
    return { line: r.length, col: r[r.length - 1].length + 1 };
  }
  __name(ht, "ht");
  function $c(e35) {
    return e35.startIndex + e35[1].length;
  }
  __name($c, "$c");
});
var fI = c((Iv) => {
  var pI = { preserveOrder: false, attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, removeNSPrefix: false, allowBooleanAttributes: false, parseTagValue: true, parseAttributeValue: false, trimValues: true, cdataPropName: false, numberParseOptions: { hex: true, leadingZeros: true, eNotation: true }, tagValueProcessor: function(e35, t) {
    return t;
  }, attributeValueProcessor: function(e35, t) {
    return t;
  }, stopNodes: [], alwaysCreateTextNode: false, isArray: () => false, commentPropName: false, unpairedTags: [], processEntities: true, htmlEntities: false, ignoreDeclaration: false, ignorePiTags: false, transformTagName: false, transformAttributeName: false, updateTag: function(e35, t, r) {
    return e35;
  } }, E3 = /* @__PURE__ */ __name(function(e35) {
    return Object.assign({}, pI, e35);
  }, "E3");
  Iv.buildOptions = E3;
  Iv.defaultOptions = pI;
});
var hI = c((uwe, mI) => {
  "use strict";
  var Rv = class {
    static {
      __name(this, "Rv");
    }
    constructor(t) {
      this.tagname = t, this.child = [], this[":@"] = {};
    }
    add(t, r) {
      t === "__proto__" && (t = "#__proto__"), this.child.push({ [t]: r });
    }
    addChild(t) {
      t.tagname === "__proto__" && (t.tagname = "#__proto__"), t[":@"] && Object.keys(t[":@"]).length > 0 ? this.child.push({ [t.tagname]: t.child, ":@": t[":@"] }) : this.child.push({ [t.tagname]: t.child });
    }
  };
  mI.exports = Rv;
});
var yI = c((dwe, _I) => {
  var w3 = $f();
  function S3(e35, t) {
    let r = {};
    if (e35[t + 3] === "O" && e35[t + 4] === "C" && e35[t + 5] === "T" && e35[t + 6] === "Y" && e35[t + 7] === "P" && e35[t + 8] === "E") {
      t = t + 9;
      let n = 1, i = false, o = false, s = "";
      for (; t < e35.length; t++)
        if (e35[t] === "<" && !o) {
          if (i && x3(e35, t))
            t += 7, [entityName, val, t] = N3(e35, t + 1), val.indexOf("&") === -1 && (r[T3(entityName)] = { regx: RegExp(`&${entityName};`, "g"), val });
          else if (i && C3(e35, t))
            t += 8;
          else if (i && O3(e35, t))
            t += 8;
          else if (i && A3(e35, t))
            t += 9;
          else if (b3)
            o = true;
          else
            throw new Error("Invalid DOCTYPE");
          n++, s = "";
        } else if (e35[t] === ">") {
          if (o ? e35[t - 1] === "-" && e35[t - 2] === "-" && (o = false, n--) : n--, n === 0)
            break;
        } else
          e35[t] === "[" ? i = true : s += e35[t];
      if (n !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: r, i: t };
  }
  __name(S3, "S3");
  function N3(e35, t) {
    let r = "";
    for (; t < e35.length && e35[t] !== "'" && e35[t] !== '"'; t++)
      r += e35[t];
    if (r = r.trim(), r.indexOf(" ") !== -1)
      throw new Error("External entites are not supported");
    let n = e35[t++], i = "";
    for (; t < e35.length && e35[t] !== n; t++)
      i += e35[t];
    return [r, i, t];
  }
  __name(N3, "N3");
  function b3(e35, t) {
    return e35[t + 1] === "!" && e35[t + 2] === "-" && e35[t + 3] === "-";
  }
  __name(b3, "b3");
  function x3(e35, t) {
    return e35[t + 1] === "!" && e35[t + 2] === "E" && e35[t + 3] === "N" && e35[t + 4] === "T" && e35[t + 5] === "I" && e35[t + 6] === "T" && e35[t + 7] === "Y";
  }
  __name(x3, "x3");
  function C3(e35, t) {
    return e35[t + 1] === "!" && e35[t + 2] === "E" && e35[t + 3] === "L" && e35[t + 4] === "E" && e35[t + 5] === "M" && e35[t + 6] === "E" && e35[t + 7] === "N" && e35[t + 8] === "T";
  }
  __name(C3, "C3");
  function O3(e35, t) {
    return e35[t + 1] === "!" && e35[t + 2] === "A" && e35[t + 3] === "T" && e35[t + 4] === "T" && e35[t + 5] === "L" && e35[t + 6] === "I" && e35[t + 7] === "S" && e35[t + 8] === "T";
  }
  __name(O3, "O3");
  function A3(e35, t) {
    return e35[t + 1] === "!" && e35[t + 2] === "N" && e35[t + 3] === "O" && e35[t + 4] === "T" && e35[t + 5] === "A" && e35[t + 6] === "T" && e35[t + 7] === "I" && e35[t + 8] === "O" && e35[t + 9] === "N";
  }
  __name(A3, "A3");
  function T3(e35) {
    if (w3.isName(e35))
      return e35;
    throw new Error(`Invalid entity name ${e35}`);
  }
  __name(T3, "T3");
  _I.exports = S3;
});
var vI = c((lwe, gI) => {
  var P3 = /^[-+]?0x[a-fA-F0-9]+$/, I3 = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
  !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
  var R3 = { hex: true, leadingZeros: true, decimalPoint: ".", eNotation: true };
  function q3(e35, t = {}) {
    if (t = Object.assign({}, R3, t), !e35 || typeof e35 != "string")
      return e35;
    let r = e35.trim();
    if (t.skipLike !== void 0 && t.skipLike.test(r))
      return e35;
    if (t.hex && P3.test(r))
      return Number.parseInt(r, 16);
    {
      let n = I3.exec(r);
      if (n) {
        let i = n[1], o = n[2], s = M3(n[3]), a = n[4] || n[6];
        if (!t.leadingZeros && o.length > 0 && i && r[2] !== ".")
          return e35;
        if (!t.leadingZeros && o.length > 0 && !i && r[1] !== ".")
          return e35;
        {
          let u = Number(r), l = "" + u;
          return l.search(/[eE]/) !== -1 || a ? t.eNotation ? u : e35 : r.indexOf(".") !== -1 ? l === "0" && s === "" || l === s || i && l === "-" + s ? u : e35 : o ? s === l || i + s === l ? u : e35 : r === l || r === i + l ? u : e35;
        }
      } else
        return e35;
    }
  }
  __name(q3, "q3");
  function M3(e35) {
    return e35 && e35.indexOf(".") !== -1 && (e35 = e35.replace(/0+$/, ""), e35 === "." ? e35 = "0" : e35[0] === "." ? e35 = "0" + e35 : e35[e35.length - 1] === "." && (e35 = e35.substr(0, e35.length - 1))), e35;
  }
  __name(M3, "M3");
  gI.exports = q3;
});
var wI = c((fwe, EI) => {
  "use strict";
  var kv = $f(), zc = hI(), D3 = yI(), k3 = vI(), pwe = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, kv.nameRegexp), qv = class {
    static {
      __name(this, "qv");
    }
    constructor(t) {
      this.options = t, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "\xA2" }, pound: { regex: /&(pound|#163);/g, val: "\xA3" }, yen: { regex: /&(yen|#165);/g, val: "\xA5" }, euro: { regex: /&(euro|#8364);/g, val: "\u20AC" }, copyright: { regex: /&(copy|#169);/g, val: "\xA9" }, reg: { regex: /&(reg|#174);/g, val: "\xAE" }, inr: { regex: /&(inr|#8377);/g, val: "\u20B9" } }, this.addExternalEntities = F3, this.parseXml = W3, this.parseTextData = L3, this.resolveNameSpace = j3, this.buildAttributesMap = B3, this.isItStopNode = H3, this.replaceEntitiesValue = $3, this.readStopNodeData = Q3, this.saveTextToParentTag = z3, this.addChild = V3;
    }
  };
  function F3(e35) {
    let t = Object.keys(e35);
    for (let r = 0; r < t.length; r++) {
      let n = t[r];
      this.lastEntities[n] = { regex: new RegExp("&" + n + ";", "g"), val: e35[n] };
    }
  }
  __name(F3, "F3");
  function L3(e35, t, r, n, i, o, s) {
    if (e35 !== void 0 && (this.options.trimValues && !n && (e35 = e35.trim()), e35.length > 0)) {
      s || (e35 = this.replaceEntitiesValue(e35));
      let a = this.options.tagValueProcessor(t, e35, r, i, o);
      return a == null ? e35 : typeof a != typeof e35 || a !== e35 ? a : this.options.trimValues ? Dv(e35, this.options.parseTagValue, this.options.numberParseOptions) : e35.trim() === e35 ? Dv(e35, this.options.parseTagValue, this.options.numberParseOptions) : e35;
    }
  }
  __name(L3, "L3");
  function j3(e35) {
    if (this.options.removeNSPrefix) {
      let t = e35.split(":"), r = e35.charAt(0) === "/" ? "/" : "";
      if (t[0] === "xmlns")
        return "";
      t.length === 2 && (e35 = r + t[1]);
    }
    return e35;
  }
  __name(j3, "j3");
  var U3 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function B3(e35, t, r) {
    if (!this.options.ignoreAttributes && typeof e35 == "string") {
      let n = kv.getAllMatches(e35, U3), i = n.length, o = {};
      for (let s = 0; s < i; s++) {
        let a = this.resolveNameSpace(n[s][1]), u = n[s][4], l = this.options.attributeNamePrefix + a;
        if (a.length)
          if (this.options.transformAttributeName && (l = this.options.transformAttributeName(l)), l === "__proto__" && (l = "#__proto__"), u !== void 0) {
            this.options.trimValues && (u = u.trim()), u = this.replaceEntitiesValue(u);
            let p = this.options.attributeValueProcessor(a, u, t);
            p == null ? o[l] = u : typeof p != typeof u || p !== u ? o[l] = p : o[l] = Dv(u, this.options.parseAttributeValue, this.options.numberParseOptions);
          } else
            this.options.allowBooleanAttributes && (o[l] = true);
      }
      if (!Object.keys(o).length)
        return;
      if (this.options.attributesGroupName) {
        let s = {};
        return s[this.options.attributesGroupName] = o, s;
      }
      return o;
    }
  }
  __name(B3, "B3");
  var W3 = /* @__PURE__ */ __name(function(e35) {
    e35 = e35.replace(/\r\n?/g, `
`);
    let t = new zc("!xml"), r = t, n = "", i = "";
    for (let o = 0; o < e35.length; o++)
      if (e35[o] === "<")
        if (e35[o + 1] === "/") {
          let a = Ji(e35, ">", o, "Closing Tag is not closed."), u = e35.substring(o + 2, a).trim();
          if (this.options.removeNSPrefix) {
            let f = u.indexOf(":");
            f !== -1 && (u = u.substr(f + 1));
          }
          this.options.transformTagName && (u = this.options.transformTagName(u)), r && (n = this.saveTextToParentTag(n, r, i));
          let l = i.substring(i.lastIndexOf(".") + 1);
          if (u && this.options.unpairedTags.indexOf(u) !== -1)
            throw new Error(`Unpaired tag can not be used as closing tag: </${u}>`);
          let p = 0;
          l && this.options.unpairedTags.indexOf(l) !== -1 ? (p = i.lastIndexOf(".", i.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : p = i.lastIndexOf("."), i = i.substring(0, p), r = this.tagsNodeStack.pop(), n = "", o = a;
        } else if (e35[o + 1] === "?") {
          let a = Mv(e35, o, false, "?>");
          if (!a)
            throw new Error("Pi Tag is not closed.");
          if (n = this.saveTextToParentTag(n, r, i), !(this.options.ignoreDeclaration && a.tagName === "?xml" || this.options.ignorePiTags)) {
            let u = new zc(a.tagName);
            u.add(this.options.textNodeName, ""), a.tagName !== a.tagExp && a.attrExpPresent && (u[":@"] = this.buildAttributesMap(a.tagExp, i, a.tagName)), this.addChild(r, u, i);
          }
          o = a.closeIndex + 1;
        } else if (e35.substr(o + 1, 3) === "!--") {
          let a = Ji(e35, "-->", o + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            let u = e35.substring(o + 4, a - 2);
            n = this.saveTextToParentTag(n, r, i), r.add(this.options.commentPropName, [{ [this.options.textNodeName]: u }]);
          }
          o = a;
        } else if (e35.substr(o + 1, 2) === "!D") {
          let a = D3(e35, o);
          this.docTypeEntities = a.entities, o = a.i;
        } else if (e35.substr(o + 1, 2) === "![") {
          let a = Ji(e35, "]]>", o, "CDATA is not closed.") - 2, u = e35.substring(o + 9, a);
          if (n = this.saveTextToParentTag(n, r, i), this.options.cdataPropName)
            r.add(this.options.cdataPropName, [{ [this.options.textNodeName]: u }]);
          else {
            let l = this.parseTextData(u, r.tagname, i, true, false, true);
            l == null && (l = ""), r.add(this.options.textNodeName, l);
          }
          o = a + 2;
        } else {
          let a = Mv(e35, o, this.options.removeNSPrefix), u = a.tagName, l = a.tagExp, p = a.attrExpPresent, f = a.closeIndex;
          this.options.transformTagName && (u = this.options.transformTagName(u)), r && n && r.tagname !== "!xml" && (n = this.saveTextToParentTag(n, r, i, false));
          let m = r;
          if (m && this.options.unpairedTags.indexOf(m.tagname) !== -1 && (r = this.tagsNodeStack.pop(), i = i.substring(0, i.lastIndexOf("."))), u !== t.tagname && (i += i ? "." + u : u), this.isItStopNode(this.options.stopNodes, i, u)) {
            let h = "";
            if (l.length > 0 && l.lastIndexOf("/") === l.length - 1)
              o = a.closeIndex;
            else if (this.options.unpairedTags.indexOf(u) !== -1)
              o = a.closeIndex;
            else {
              let v = this.readStopNodeData(e35, u, f + 1);
              if (!v)
                throw new Error(`Unexpected end of ${u}`);
              o = v.i, h = v.tagContent;
            }
            let y = new zc(u);
            u !== l && p && (y[":@"] = this.buildAttributesMap(l, i, u)), h && (h = this.parseTextData(h, u, i, true, p, true, true)), i = i.substr(0, i.lastIndexOf(".")), y.add(this.options.textNodeName, h), this.addChild(r, y, i);
          } else {
            if (l.length > 0 && l.lastIndexOf("/") === l.length - 1) {
              u[u.length - 1] === "/" ? (u = u.substr(0, u.length - 1), l = u) : l = l.substr(0, l.length - 1), this.options.transformTagName && (u = this.options.transformTagName(u));
              let h = new zc(u);
              u !== l && p && (h[":@"] = this.buildAttributesMap(l, i, u)), this.addChild(r, h, i), i = i.substr(0, i.lastIndexOf("."));
            } else {
              let h = new zc(u);
              this.tagsNodeStack.push(r), u !== l && p && (h[":@"] = this.buildAttributesMap(l, i, u)), this.addChild(r, h, i), r = h;
            }
            n = "", o = f;
          }
        }
      else
        n += e35[o];
    return t.child;
  }, "W3");
  function V3(e35, t, r) {
    let n = this.options.updateTag(t.tagname, r, t[":@"]);
    n === false || (typeof n == "string" && (t.tagname = n), e35.addChild(t));
  }
  __name(V3, "V3");
  var $3 = /* @__PURE__ */ __name(function(e35) {
    if (this.options.processEntities) {
      for (let t in this.docTypeEntities) {
        let r = this.docTypeEntities[t];
        e35 = e35.replace(r.regx, r.val);
      }
      for (let t in this.lastEntities) {
        let r = this.lastEntities[t];
        e35 = e35.replace(r.regex, r.val);
      }
      if (this.options.htmlEntities)
        for (let t in this.htmlEntities) {
          let r = this.htmlEntities[t];
          e35 = e35.replace(r.regex, r.val);
        }
      e35 = e35.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return e35;
  }, "$3");
  function z3(e35, t, r, n) {
    return e35 && (n === void 0 && (n = Object.keys(t.child).length === 0), e35 = this.parseTextData(e35, t.tagname, r, false, t[":@"] ? Object.keys(t[":@"]).length !== 0 : false, n), e35 !== void 0 && e35 !== "" && t.add(this.options.textNodeName, e35), e35 = ""), e35;
  }
  __name(z3, "z3");
  function H3(e35, t, r) {
    let n = "*." + r;
    for (let i in e35) {
      let o = e35[i];
      if (n === o || t === o)
        return true;
    }
    return false;
  }
  __name(H3, "H3");
  function G3(e35, t, r = ">") {
    let n, i = "";
    for (let o = t; o < e35.length; o++) {
      let s = e35[o];
      if (n)
        s === n && (n = "");
      else if (s === '"' || s === "'")
        n = s;
      else if (s === r[0])
        if (r[1]) {
          if (e35[o + 1] === r[1])
            return { data: i, index: o };
        } else
          return { data: i, index: o };
      else
        s === "	" && (s = " ");
      i += s;
    }
  }
  __name(G3, "G3");
  function Ji(e35, t, r, n) {
    let i = e35.indexOf(t, r);
    if (i === -1)
      throw new Error(n);
    return i + t.length - 1;
  }
  __name(Ji, "Ji");
  function Mv(e35, t, r, n = ">") {
    let i = G3(e35, t + 1, n);
    if (!i)
      return;
    let o = i.data, s = i.index, a = o.search(/\s/), u = o, l = true;
    if (a !== -1 && (u = o.substr(0, a).replace(/\s\s*$/, ""), o = o.substr(a + 1)), r) {
      let p = u.indexOf(":");
      p !== -1 && (u = u.substr(p + 1), l = u !== i.data.substr(p + 1));
    }
    return { tagName: u, tagExp: o, closeIndex: s, attrExpPresent: l };
  }
  __name(Mv, "Mv");
  function Q3(e35, t, r) {
    let n = r, i = 1;
    for (; r < e35.length; r++)
      if (e35[r] === "<")
        if (e35[r + 1] === "/") {
          let o = Ji(e35, ">", r, `${t} is not closed`);
          if (e35.substring(r + 2, o).trim() === t && (i--, i === 0))
            return { tagContent: e35.substring(n, r), i: o };
          r = o;
        } else if (e35[r + 1] === "?")
          r = Ji(e35, "?>", r + 1, "StopNode is not closed.");
        else if (e35.substr(r + 1, 3) === "!--")
          r = Ji(e35, "-->", r + 3, "StopNode is not closed.");
        else if (e35.substr(r + 1, 2) === "![")
          r = Ji(e35, "]]>", r, "StopNode is not closed.") - 2;
        else {
          let o = Mv(e35, r, ">");
          o && ((o && o.tagName) === t && o.tagExp[o.tagExp.length - 1] !== "/" && i++, r = o.closeIndex);
        }
  }
  __name(Q3, "Q3");
  function Dv(e35, t, r) {
    if (t && typeof e35 == "string") {
      let n = e35.trim();
      return n === "true" ? true : n === "false" ? false : k3(e35, r);
    } else
      return kv.isExist(e35) ? e35 : "";
  }
  __name(Dv, "Dv");
  EI.exports = qv;
});
var bI = c((NI) => {
  "use strict";
  function K3(e35, t) {
    return SI(e35, t);
  }
  __name(K3, "K3");
  function SI(e35, t, r) {
    let n, i = {};
    for (let o = 0; o < e35.length; o++) {
      let s = e35[o], a = Y3(s), u = "";
      if (r === void 0 ? u = a : u = r + "." + a, a === t.textNodeName)
        n === void 0 ? n = s[a] : n += "" + s[a];
      else {
        if (a === void 0)
          continue;
        if (s[a]) {
          let l = SI(s[a], t, u), p = X3(l, t);
          s[":@"] ? J3(l, s[":@"], u, t) : Object.keys(l).length === 1 && l[t.textNodeName] !== void 0 && !t.alwaysCreateTextNode ? l = l[t.textNodeName] : Object.keys(l).length === 0 && (t.alwaysCreateTextNode ? l[t.textNodeName] = "" : l = ""), i[a] !== void 0 && i.hasOwnProperty(a) ? (Array.isArray(i[a]) || (i[a] = [i[a]]), i[a].push(l)) : t.isArray(a, u, p) ? i[a] = [l] : i[a] = l;
        }
      }
    }
    return typeof n == "string" ? n.length > 0 && (i[t.textNodeName] = n) : n !== void 0 && (i[t.textNodeName] = n), i;
  }
  __name(SI, "SI");
  function Y3(e35) {
    let t = Object.keys(e35);
    for (let r = 0; r < t.length; r++) {
      let n = t[r];
      if (n !== ":@")
        return n;
    }
  }
  __name(Y3, "Y3");
  function J3(e35, t, r, n) {
    if (t) {
      let i = Object.keys(t), o = i.length;
      for (let s = 0; s < o; s++) {
        let a = i[s];
        n.isArray(a, r + "." + a, true, true) ? e35[a] = [t[a]] : e35[a] = t[a];
      }
    }
  }
  __name(J3, "J3");
  function X3(e35, t) {
    let { textNodeName: r } = t, n = Object.keys(e35).length;
    return !!(n === 0 || n === 1 && (e35[r] || typeof e35[r] == "boolean" || e35[r] === 0));
  }
  __name(X3, "X3");
  NI.prettify = K3;
});
var CI = c((hwe, xI) => {
  var { buildOptions: Z3 } = fI(), e62 = wI(), { prettify: t6 } = bI(), r6 = Pv(), Fv = class {
    static {
      __name(this, "Fv");
    }
    constructor(t) {
      this.externalEntities = {}, this.options = Z3(t);
    }
    parse(t, r) {
      if (typeof t != "string")
        if (t.toString)
          t = t.toString();
        else
          throw new Error("XML data is accepted in String or Bytes[] form.");
      if (r) {
        r === true && (r = {});
        let o = r6.validate(t, r);
        if (o !== true)
          throw Error(`${o.err.msg}:${o.err.line}:${o.err.col}`);
      }
      let n = new e62(this.options);
      n.addExternalEntities(this.externalEntities);
      let i = n.parseXml(t);
      return this.options.preserveOrder || i === void 0 ? i : t6(i, this.options);
    }
    addEntity(t, r) {
      if (r.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (t.indexOf("&") !== -1 || t.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (r === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[t] = r;
    }
  };
  xI.exports = Fv;
});
var II = c((_we, PI) => {
  var n6 = `
`;
  function i6(e35, t) {
    let r = "";
    return t.format && t.indentBy.length > 0 && (r = n6), AI(e35, t, "", r);
  }
  __name(i6, "i6");
  function AI(e35, t, r, n) {
    let i = "", o = false;
    for (let s = 0; s < e35.length; s++) {
      let a = e35[s], u = o6(a), l = "";
      if (r.length === 0 ? l = u : l = `${r}.${u}`, u === t.textNodeName) {
        let y = a[u];
        s6(l, t) || (y = t.tagValueProcessor(u, y), y = TI(y, t)), o && (i += n), i += y, o = false;
        continue;
      } else if (u === t.cdataPropName) {
        o && (i += n), i += `<![CDATA[${a[u][0][t.textNodeName]}]]>`, o = false;
        continue;
      } else if (u === t.commentPropName) {
        i += n + `<!--${a[u][0][t.textNodeName]}-->`, o = true;
        continue;
      } else if (u[0] === "?") {
        let y = OI(a[":@"], t), v = u === "?xml" ? "" : n, E = a[u][0][t.textNodeName];
        E = E.length !== 0 ? " " + E : "", i += v + `<${u}${E}${y}?>`, o = true;
        continue;
      }
      let p = n;
      p !== "" && (p += t.indentBy);
      let f = OI(a[":@"], t), m = n + `<${u}${f}`, h = AI(a[u], t, l, p);
      t.unpairedTags.indexOf(u) !== -1 ? t.suppressUnpairedNode ? i += m + ">" : i += m + "/>" : (!h || h.length === 0) && t.suppressEmptyNode ? i += m + "/>" : h && h.endsWith(">") ? i += m + `>${h}${n}</${u}>` : (i += m + ">", h && n !== "" && (h.includes("/>") || h.includes("</")) ? i += n + t.indentBy + h + n : i += h, i += `</${u}>`), o = true;
    }
    return i;
  }
  __name(AI, "AI");
  function o6(e35) {
    let t = Object.keys(e35);
    for (let r = 0; r < t.length; r++) {
      let n = t[r];
      if (n !== ":@")
        return n;
    }
  }
  __name(o6, "o6");
  function OI(e35, t) {
    let r = "";
    if (e35 && !t.ignoreAttributes)
      for (let n in e35) {
        let i = t.attributeValueProcessor(n, e35[n]);
        i = TI(i, t), i === true && t.suppressBooleanAttributes ? r += ` ${n.substr(t.attributeNamePrefix.length)}` : r += ` ${n.substr(t.attributeNamePrefix.length)}="${i}"`;
      }
    return r;
  }
  __name(OI, "OI");
  function s6(e35, t) {
    e35 = e35.substr(0, e35.length - t.textNodeName.length - 1);
    let r = e35.substr(e35.lastIndexOf(".") + 1);
    for (let n in t.stopNodes)
      if (t.stopNodes[n] === e35 || t.stopNodes[n] === "*." + r)
        return true;
    return false;
  }
  __name(s6, "s6");
  function TI(e35, t) {
    if (e35 && e35.length > 0 && t.processEntities)
      for (let r = 0; r < t.entities.length; r++) {
        let n = t.entities[r];
        e35 = e35.replace(n.regex, n.val);
      }
    return e35;
  }
  __name(TI, "TI");
  PI.exports = i6;
});
var qI = c((ywe, RI) => {
  "use strict";
  var a6 = II(), c6 = { attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, cdataPropName: false, format: false, indentBy: "  ", suppressEmptyNode: false, suppressUnpairedNode: true, suppressBooleanAttributes: true, tagValueProcessor: function(e35, t) {
    return t;
  }, attributeValueProcessor: function(e35, t) {
    return t;
  }, preserveOrder: false, commentPropName: false, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: true, stopNodes: [], oneListGroup: false };
  function Xn(e35) {
    this.options = Object.assign({}, c6, e35), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
      return false;
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = l6), this.processTextOrObjNode = u6, this.options.format ? (this.indentate = d6, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  __name(Xn, "Xn");
  Xn.prototype.build = function(e35) {
    return this.options.preserveOrder ? a6(e35, this.options) : (Array.isArray(e35) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e35 = { [this.options.arrayNodeName]: e35 }), this.j2x(e35, 0).val);
  };
  Xn.prototype.j2x = function(e35, t) {
    let r = "", n = "";
    for (let i in e35)
      if (!(typeof e35[i] > "u"))
        if (e35[i] === null)
          i[0] === "?" ? n += this.indentate(t) + "<" + i + "?" + this.tagEndChar : n += this.indentate(t) + "<" + i + "/" + this.tagEndChar;
        else if (e35[i] instanceof Date)
          n += this.buildTextValNode(e35[i], i, "", t);
        else if (typeof e35[i] != "object") {
          let o = this.isAttribute(i);
          if (o)
            r += this.buildAttrPairStr(o, "" + e35[i]);
          else if (i === this.options.textNodeName) {
            let s = this.options.tagValueProcessor(i, "" + e35[i]);
            n += this.replaceEntitiesValue(s);
          } else
            n += this.buildTextValNode(e35[i], i, "", t);
        } else if (Array.isArray(e35[i])) {
          let o = e35[i].length, s = "";
          for (let a = 0; a < o; a++) {
            let u = e35[i][a];
            typeof u > "u" || (u === null ? i[0] === "?" ? n += this.indentate(t) + "<" + i + "?" + this.tagEndChar : n += this.indentate(t) + "<" + i + "/" + this.tagEndChar : typeof u == "object" ? this.options.oneListGroup ? s += this.j2x(u, t + 1).val : s += this.processTextOrObjNode(u, i, t) : s += this.buildTextValNode(u, i, "", t));
          }
          this.options.oneListGroup && (s = this.buildObjectNode(s, i, "", t)), n += s;
        } else if (this.options.attributesGroupName && i === this.options.attributesGroupName) {
          let o = Object.keys(e35[i]), s = o.length;
          for (let a = 0; a < s; a++)
            r += this.buildAttrPairStr(o[a], "" + e35[i][o[a]]);
        } else
          n += this.processTextOrObjNode(e35[i], i, t);
    return { attrStr: r, val: n };
  };
  Xn.prototype.buildAttrPairStr = function(e35, t) {
    return t = this.options.attributeValueProcessor(e35, "" + t), t = this.replaceEntitiesValue(t), this.options.suppressBooleanAttributes && t === "true" ? " " + e35 : " " + e35 + '="' + t + '"';
  };
  function u6(e35, t, r) {
    let n = this.j2x(e35, r + 1);
    return e35[this.options.textNodeName] !== void 0 && Object.keys(e35).length === 1 ? this.buildTextValNode(e35[this.options.textNodeName], t, n.attrStr, r) : this.buildObjectNode(n.val, t, n.attrStr, r);
  }
  __name(u6, "u6");
  Xn.prototype.buildObjectNode = function(e35, t, r, n) {
    if (e35 === "")
      return t[0] === "?" ? this.indentate(n) + "<" + t + r + "?" + this.tagEndChar : this.indentate(n) + "<" + t + r + this.closeTag(t) + this.tagEndChar;
    {
      let i = "</" + t + this.tagEndChar, o = "";
      return t[0] === "?" && (o = "?", i = ""), r && e35.indexOf("<") === -1 ? this.indentate(n) + "<" + t + r + o + ">" + e35 + i : this.options.commentPropName !== false && t === this.options.commentPropName && o.length === 0 ? this.indentate(n) + `<!--${e35}-->` + this.newLine : this.indentate(n) + "<" + t + r + o + this.tagEndChar + e35 + this.indentate(n) + i;
    }
  };
  Xn.prototype.closeTag = function(e35) {
    let t = "";
    return this.options.unpairedTags.indexOf(e35) !== -1 ? this.options.suppressUnpairedNode || (t = "/") : this.options.suppressEmptyNode ? t = "/" : t = `></${e35}`, t;
  };
  Xn.prototype.buildTextValNode = function(e35, t, r, n) {
    if (this.options.cdataPropName !== false && t === this.options.cdataPropName)
      return this.indentate(n) + `<![CDATA[${e35}]]>` + this.newLine;
    if (this.options.commentPropName !== false && t === this.options.commentPropName)
      return this.indentate(n) + `<!--${e35}-->` + this.newLine;
    if (t[0] === "?")
      return this.indentate(n) + "<" + t + r + "?" + this.tagEndChar;
    {
      let i = this.options.tagValueProcessor(t, e35);
      return i = this.replaceEntitiesValue(i), i === "" ? this.indentate(n) + "<" + t + r + this.closeTag(t) + this.tagEndChar : this.indentate(n) + "<" + t + r + ">" + i + "</" + t + this.tagEndChar;
    }
  };
  Xn.prototype.replaceEntitiesValue = function(e35) {
    if (e35 && e35.length > 0 && this.options.processEntities)
      for (let t = 0; t < this.options.entities.length; t++) {
        let r = this.options.entities[t];
        e35 = e35.replace(r.regex, r.val);
      }
    return e35;
  };
  function d6(e35) {
    return this.options.indentBy.repeat(e35);
  }
  __name(d6, "d6");
  function l6(e35) {
    return e35.startsWith(this.options.attributeNamePrefix) ? e35.substr(this.attrPrefixLen) : false;
  }
  __name(l6, "l6");
  RI.exports = Xn;
});
var DI = c((gwe, MI) => {
  "use strict";
  var p6 = Pv(), f6 = CI(), m6 = qI();
  MI.exports = { XMLParser: f6, XMLValidator: p6, XMLBuilder: m6 };
});
var fn = c((z) => {
  "use strict";
  Object.defineProperty(z, "__esModule", { value: true });
  z.de_GetSessionTokenCommand = z.de_GetFederationTokenCommand = z.de_GetCallerIdentityCommand = z.de_GetAccessKeyInfoCommand = z.de_DecodeAuthorizationMessageCommand = z.de_AssumeRoleWithWebIdentityCommand = z.de_AssumeRoleWithSAMLCommand = z.de_AssumeRoleCommand = z.se_GetSessionTokenCommand = z.se_GetFederationTokenCommand = z.se_GetCallerIdentityCommand = z.se_GetAccessKeyInfoCommand = z.se_DecodeAuthorizationMessageCommand = z.se_AssumeRoleWithWebIdentityCommand = z.se_AssumeRoleWithSAMLCommand = z.se_AssumeRoleCommand = void 0;
  var h6 = Me(), P = A(), _6 = DI(), Zn = Jn(), y6 = Vf(), g6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = ri, n;
    return n = ii({ ...$6(e35, t), Action: "AssumeRole", Version: "2011-06-15" }), ti(t, r, "/", void 0, n);
  }, "g6");
  z.se_AssumeRoleCommand = g6;
  var v6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = ri, n;
    return n = ii({ ...z6(e35, t), Action: "AssumeRoleWithSAML", Version: "2011-06-15" }), ti(t, r, "/", void 0, n);
  }, "v6");
  z.se_AssumeRoleWithSAMLCommand = v6;
  var E6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = ri, n;
    return n = ii({ ...H6(e35, t), Action: "AssumeRoleWithWebIdentity", Version: "2011-06-15" }), ti(t, r, "/", void 0, n);
  }, "E6");
  z.se_AssumeRoleWithWebIdentityCommand = E6;
  var w6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = ri, n;
    return n = ii({ ...G6(e35, t), Action: "DecodeAuthorizationMessage", Version: "2011-06-15" }), ti(t, r, "/", void 0, n);
  }, "w6");
  z.se_DecodeAuthorizationMessageCommand = w6;
  var S6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = ri, n;
    return n = ii({ ...Q6(e35, t), Action: "GetAccessKeyInfo", Version: "2011-06-15" }), ti(t, r, "/", void 0, n);
  }, "S6");
  z.se_GetAccessKeyInfoCommand = S6;
  var N6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = ri, n;
    return n = ii({ ...K6(e35, t), Action: "GetCallerIdentity", Version: "2011-06-15" }), ti(t, r, "/", void 0, n);
  }, "N6");
  z.se_GetCallerIdentityCommand = N6;
  var b6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = ri, n;
    return n = ii({ ...Y6(e35, t), Action: "GetFederationToken", Version: "2011-06-15" }), ti(t, r, "/", void 0, n);
  }, "b6");
  z.se_GetFederationTokenCommand = b6;
  var x6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = ri, n;
    return n = ii({ ...J6(e35, t), Action: "GetSessionToken", Version: "2011-06-15" }), ti(t, r, "/", void 0, n);
  }, "x6");
  z.se_GetSessionTokenCommand = x6;
  var C6 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode >= 300)
      return O6(e35, t);
    let r = await pn(e35.body, t), n = {};
    return n = nG(r.AssumeRoleResult, t), { $metadata: Je(e35), ...n };
  }, "C6");
  z.de_AssumeRoleCommand = C6;
  var O6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ni(e35.body, t) }, n = oi(e35, r.body);
    switch (n) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await Lv(r, t);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await zf(r, t);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await Hf(r, t);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await Hc(r, t);
      default:
        let i = r.body;
        return ei({ output: e35, parsedBody: i.Error, errorCode: n });
    }
  }, "O6"), A6 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode >= 300)
      return T6(e35, t);
    let r = await pn(e35.body, t), n = {};
    return n = iG(r.AssumeRoleWithSAMLResult, t), { $metadata: Je(e35), ...n };
  }, "A6");
  z.de_AssumeRoleWithSAMLCommand = A6;
  var T6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ni(e35.body, t) }, n = oi(e35, r.body);
    switch (n) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await Lv(r, t);
      case "IDPRejectedClaim":
      case "com.amazonaws.sts#IDPRejectedClaimException":
        throw await kI(r, t);
      case "InvalidIdentityToken":
      case "com.amazonaws.sts#InvalidIdentityTokenException":
        throw await FI(r, t);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await zf(r, t);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await Hf(r, t);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await Hc(r, t);
      default:
        let i = r.body;
        return ei({ output: e35, parsedBody: i.Error, errorCode: n });
    }
  }, "T6"), P6 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode >= 300)
      return I6(e35, t);
    let r = await pn(e35.body, t), n = {};
    return n = oG(r.AssumeRoleWithWebIdentityResult, t), { $metadata: Je(e35), ...n };
  }, "P6");
  z.de_AssumeRoleWithWebIdentityCommand = P6;
  var I6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ni(e35.body, t) }, n = oi(e35, r.body);
    switch (n) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await Lv(r, t);
      case "IDPCommunicationError":
      case "com.amazonaws.sts#IDPCommunicationErrorException":
        throw await W6(r, t);
      case "IDPRejectedClaim":
      case "com.amazonaws.sts#IDPRejectedClaimException":
        throw await kI(r, t);
      case "InvalidIdentityToken":
      case "com.amazonaws.sts#InvalidIdentityTokenException":
        throw await FI(r, t);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await zf(r, t);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await Hf(r, t);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await Hc(r, t);
      default:
        let i = r.body;
        return ei({ output: e35, parsedBody: i.Error, errorCode: n });
    }
  }, "I6"), R6 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode >= 300)
      return q6(e35, t);
    let r = await pn(e35.body, t), n = {};
    return n = sG(r.DecodeAuthorizationMessageResult, t), { $metadata: Je(e35), ...n };
  }, "R6");
  z.de_DecodeAuthorizationMessageCommand = R6;
  var q6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ni(e35.body, t) }, n = oi(e35, r.body);
    switch (n) {
      case "InvalidAuthorizationMessageException":
      case "com.amazonaws.sts#InvalidAuthorizationMessageException":
        throw await V6(r, t);
      default:
        let i = r.body;
        return ei({ output: e35, parsedBody: i.Error, errorCode: n });
    }
  }, "q6"), M6 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode >= 300)
      return D6(e35, t);
    let r = await pn(e35.body, t), n = {};
    return n = uG(r.GetAccessKeyInfoResult, t), { $metadata: Je(e35), ...n };
  }, "M6");
  z.de_GetAccessKeyInfoCommand = M6;
  var D6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ni(e35.body, t) }, n = oi(e35, r.body), i = r.body;
    return ei({ output: e35, parsedBody: i.Error, errorCode: n });
  }, "D6"), k6 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode >= 300)
      return F6(e35, t);
    let r = await pn(e35.body, t), n = {};
    return n = dG(r.GetCallerIdentityResult, t), { $metadata: Je(e35), ...n };
  }, "k6");
  z.de_GetCallerIdentityCommand = k6;
  var F6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ni(e35.body, t) }, n = oi(e35, r.body), i = r.body;
    return ei({ output: e35, parsedBody: i.Error, errorCode: n });
  }, "F6"), L6 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode >= 300)
      return j6(e35, t);
    let r = await pn(e35.body, t), n = {};
    return n = lG(r.GetFederationTokenResult, t), { $metadata: Je(e35), ...n };
  }, "L6");
  z.de_GetFederationTokenCommand = L6;
  var j6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ni(e35.body, t) }, n = oi(e35, r.body);
    switch (n) {
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await zf(r, t);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await Hf(r, t);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await Hc(r, t);
      default:
        let i = r.body;
        return ei({ output: e35, parsedBody: i.Error, errorCode: n });
    }
  }, "j6"), U6 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode >= 300)
      return B6(e35, t);
    let r = await pn(e35.body, t), n = {};
    return n = pG(r.GetSessionTokenResult, t), { $metadata: Je(e35), ...n };
  }, "U6");
  z.de_GetSessionTokenCommand = U6;
  var B6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ni(e35.body, t) }, n = oi(e35, r.body);
    switch (n) {
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await Hc(r, t);
      default:
        let i = r.body;
        return ei({ output: e35, parsedBody: i.Error, errorCode: n });
    }
  }, "B6"), Lv = /* @__PURE__ */ __name(async (e35, t) => {
    let r = e35.body, n = aG(r.Error, t), i = new Zn.ExpiredTokenException({ $metadata: Je(e35), ...n });
    return (0, P.decorateServiceException)(i, r);
  }, "Lv"), W6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = e35.body, n = fG(r.Error, t), i = new Zn.IDPCommunicationErrorException({ $metadata: Je(e35), ...n });
    return (0, P.decorateServiceException)(i, r);
  }, "W6"), kI = /* @__PURE__ */ __name(async (e35, t) => {
    let r = e35.body, n = mG(r.Error, t), i = new Zn.IDPRejectedClaimException({ $metadata: Je(e35), ...n });
    return (0, P.decorateServiceException)(i, r);
  }, "kI"), V6 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = e35.body, n = hG(r.Error, t), i = new Zn.InvalidAuthorizationMessageException({ $metadata: Je(e35), ...n });
    return (0, P.decorateServiceException)(i, r);
  }, "V6"), FI = /* @__PURE__ */ __name(async (e35, t) => {
    let r = e35.body, n = _G(r.Error, t), i = new Zn.InvalidIdentityTokenException({ $metadata: Je(e35), ...n });
    return (0, P.decorateServiceException)(i, r);
  }, "FI"), zf = /* @__PURE__ */ __name(async (e35, t) => {
    let r = e35.body, n = yG(r.Error, t), i = new Zn.MalformedPolicyDocumentException({ $metadata: Je(e35), ...n });
    return (0, P.decorateServiceException)(i, r);
  }, "zf"), Hf = /* @__PURE__ */ __name(async (e35, t) => {
    let r = e35.body, n = gG(r.Error, t), i = new Zn.PackedPolicyTooLargeException({ $metadata: Je(e35), ...n });
    return (0, P.decorateServiceException)(i, r);
  }, "Hf"), Hc = /* @__PURE__ */ __name(async (e35, t) => {
    let r = e35.body, n = vG(r.Error, t), i = new Zn.RegionDisabledException({ $metadata: Je(e35), ...n });
    return (0, P.decorateServiceException)(i, r);
  }, "Hc"), $6 = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    if (e35.RoleArn != null && (r.RoleArn = e35.RoleArn), e35.RoleSessionName != null && (r.RoleSessionName = e35.RoleSessionName), e35.PolicyArns != null) {
      let n = Gf(e35.PolicyArns, t);
      e35.PolicyArns?.length === 0 && (r.PolicyArns = []), Object.entries(n).forEach(([i, o]) => {
        let s = `PolicyArns.${i}`;
        r[s] = o;
      });
    }
    if (e35.Policy != null && (r.Policy = e35.Policy), e35.DurationSeconds != null && (r.DurationSeconds = e35.DurationSeconds), e35.Tags != null) {
      let n = LI(e35.Tags, t);
      e35.Tags?.length === 0 && (r.Tags = []), Object.entries(n).forEach(([i, o]) => {
        let s = `Tags.${i}`;
        r[s] = o;
      });
    }
    if (e35.TransitiveTagKeys != null) {
      let n = rG(e35.TransitiveTagKeys, t);
      e35.TransitiveTagKeys?.length === 0 && (r.TransitiveTagKeys = []), Object.entries(n).forEach(([i, o]) => {
        let s = `TransitiveTagKeys.${i}`;
        r[s] = o;
      });
    }
    if (e35.ExternalId != null && (r.ExternalId = e35.ExternalId), e35.SerialNumber != null && (r.SerialNumber = e35.SerialNumber), e35.TokenCode != null && (r.TokenCode = e35.TokenCode), e35.SourceIdentity != null && (r.SourceIdentity = e35.SourceIdentity), e35.ProvidedContexts != null) {
      let n = eG(e35.ProvidedContexts, t);
      e35.ProvidedContexts?.length === 0 && (r.ProvidedContexts = []), Object.entries(n).forEach(([i, o]) => {
        let s = `ProvidedContexts.${i}`;
        r[s] = o;
      });
    }
    return r;
  }, "$6"), z6 = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    if (e35.RoleArn != null && (r.RoleArn = e35.RoleArn), e35.PrincipalArn != null && (r.PrincipalArn = e35.PrincipalArn), e35.SAMLAssertion != null && (r.SAMLAssertion = e35.SAMLAssertion), e35.PolicyArns != null) {
      let n = Gf(e35.PolicyArns, t);
      e35.PolicyArns?.length === 0 && (r.PolicyArns = []), Object.entries(n).forEach(([i, o]) => {
        let s = `PolicyArns.${i}`;
        r[s] = o;
      });
    }
    return e35.Policy != null && (r.Policy = e35.Policy), e35.DurationSeconds != null && (r.DurationSeconds = e35.DurationSeconds), r;
  }, "z6"), H6 = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    if (e35.RoleArn != null && (r.RoleArn = e35.RoleArn), e35.RoleSessionName != null && (r.RoleSessionName = e35.RoleSessionName), e35.WebIdentityToken != null && (r.WebIdentityToken = e35.WebIdentityToken), e35.ProviderId != null && (r.ProviderId = e35.ProviderId), e35.PolicyArns != null) {
      let n = Gf(e35.PolicyArns, t);
      e35.PolicyArns?.length === 0 && (r.PolicyArns = []), Object.entries(n).forEach(([i, o]) => {
        let s = `PolicyArns.${i}`;
        r[s] = o;
      });
    }
    return e35.Policy != null && (r.Policy = e35.Policy), e35.DurationSeconds != null && (r.DurationSeconds = e35.DurationSeconds), r;
  }, "H6"), G6 = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.EncodedMessage != null && (r.EncodedMessage = e35.EncodedMessage), r;
  }, "G6"), Q6 = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.AccessKeyId != null && (r.AccessKeyId = e35.AccessKeyId), r;
  }, "Q6"), K6 = /* @__PURE__ */ __name((e35, t) => ({}), "K6"), Y6 = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    if (e35.Name != null && (r.Name = e35.Name), e35.Policy != null && (r.Policy = e35.Policy), e35.PolicyArns != null) {
      let n = Gf(e35.PolicyArns, t);
      e35.PolicyArns?.length === 0 && (r.PolicyArns = []), Object.entries(n).forEach(([i, o]) => {
        let s = `PolicyArns.${i}`;
        r[s] = o;
      });
    }
    if (e35.DurationSeconds != null && (r.DurationSeconds = e35.DurationSeconds), e35.Tags != null) {
      let n = LI(e35.Tags, t);
      e35.Tags?.length === 0 && (r.Tags = []), Object.entries(n).forEach(([i, o]) => {
        let s = `Tags.${i}`;
        r[s] = o;
      });
    }
    return r;
  }, "Y6"), J6 = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.DurationSeconds != null && (r.DurationSeconds = e35.DurationSeconds), e35.SerialNumber != null && (r.SerialNumber = e35.SerialNumber), e35.TokenCode != null && (r.TokenCode = e35.TokenCode), r;
  }, "J6"), Gf = /* @__PURE__ */ __name((e35, t) => {
    let r = {}, n = 1;
    for (let i of e35) {
      if (i === null)
        continue;
      let o = X6(i, t);
      Object.entries(o).forEach(([s, a]) => {
        r[`member.${n}.${s}`] = a;
      }), n++;
    }
    return r;
  }, "Gf"), X6 = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.arn != null && (r.arn = e35.arn), r;
  }, "X6"), Z6 = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.ProviderArn != null && (r.ProviderArn = e35.ProviderArn), e35.ContextAssertion != null && (r.ContextAssertion = e35.ContextAssertion), r;
  }, "Z6"), eG = /* @__PURE__ */ __name((e35, t) => {
    let r = {}, n = 1;
    for (let i of e35) {
      if (i === null)
        continue;
      let o = Z6(i, t);
      Object.entries(o).forEach(([s, a]) => {
        r[`member.${n}.${s}`] = a;
      }), n++;
    }
    return r;
  }, "eG"), tG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.Key != null && (r.Key = e35.Key), e35.Value != null && (r.Value = e35.Value), r;
  }, "tG"), rG = /* @__PURE__ */ __name((e35, t) => {
    let r = {}, n = 1;
    for (let i of e35)
      i !== null && (r[`member.${n}`] = i, n++);
    return r;
  }, "rG"), LI = /* @__PURE__ */ __name((e35, t) => {
    let r = {}, n = 1;
    for (let i of e35) {
      if (i === null)
        continue;
      let o = tG(i, t);
      Object.entries(o).forEach(([s, a]) => {
        r[`member.${n}.${s}`] = a;
      }), n++;
    }
    return r;
  }, "LI"), jv = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.AssumedRoleId !== void 0 && (r.AssumedRoleId = (0, P.expectString)(e35.AssumedRoleId)), e35.Arn !== void 0 && (r.Arn = (0, P.expectString)(e35.Arn)), r;
  }, "jv"), nG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.Credentials !== void 0 && (r.Credentials = Gc(e35.Credentials, t)), e35.AssumedRoleUser !== void 0 && (r.AssumedRoleUser = jv(e35.AssumedRoleUser, t)), e35.PackedPolicySize !== void 0 && (r.PackedPolicySize = (0, P.strictParseInt32)(e35.PackedPolicySize)), e35.SourceIdentity !== void 0 && (r.SourceIdentity = (0, P.expectString)(e35.SourceIdentity)), r;
  }, "nG"), iG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.Credentials !== void 0 && (r.Credentials = Gc(e35.Credentials, t)), e35.AssumedRoleUser !== void 0 && (r.AssumedRoleUser = jv(e35.AssumedRoleUser, t)), e35.PackedPolicySize !== void 0 && (r.PackedPolicySize = (0, P.strictParseInt32)(e35.PackedPolicySize)), e35.Subject !== void 0 && (r.Subject = (0, P.expectString)(e35.Subject)), e35.SubjectType !== void 0 && (r.SubjectType = (0, P.expectString)(e35.SubjectType)), e35.Issuer !== void 0 && (r.Issuer = (0, P.expectString)(e35.Issuer)), e35.Audience !== void 0 && (r.Audience = (0, P.expectString)(e35.Audience)), e35.NameQualifier !== void 0 && (r.NameQualifier = (0, P.expectString)(e35.NameQualifier)), e35.SourceIdentity !== void 0 && (r.SourceIdentity = (0, P.expectString)(e35.SourceIdentity)), r;
  }, "iG"), oG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.Credentials !== void 0 && (r.Credentials = Gc(e35.Credentials, t)), e35.SubjectFromWebIdentityToken !== void 0 && (r.SubjectFromWebIdentityToken = (0, P.expectString)(e35.SubjectFromWebIdentityToken)), e35.AssumedRoleUser !== void 0 && (r.AssumedRoleUser = jv(e35.AssumedRoleUser, t)), e35.PackedPolicySize !== void 0 && (r.PackedPolicySize = (0, P.strictParseInt32)(e35.PackedPolicySize)), e35.Provider !== void 0 && (r.Provider = (0, P.expectString)(e35.Provider)), e35.Audience !== void 0 && (r.Audience = (0, P.expectString)(e35.Audience)), e35.SourceIdentity !== void 0 && (r.SourceIdentity = (0, P.expectString)(e35.SourceIdentity)), r;
  }, "oG"), Gc = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.AccessKeyId !== void 0 && (r.AccessKeyId = (0, P.expectString)(e35.AccessKeyId)), e35.SecretAccessKey !== void 0 && (r.SecretAccessKey = (0, P.expectString)(e35.SecretAccessKey)), e35.SessionToken !== void 0 && (r.SessionToken = (0, P.expectString)(e35.SessionToken)), e35.Expiration !== void 0 && (r.Expiration = (0, P.expectNonNull)((0, P.parseRfc3339DateTimeWithOffset)(e35.Expiration))), r;
  }, "Gc"), sG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.DecodedMessage !== void 0 && (r.DecodedMessage = (0, P.expectString)(e35.DecodedMessage)), r;
  }, "sG"), aG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.message !== void 0 && (r.message = (0, P.expectString)(e35.message)), r;
  }, "aG"), cG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.FederatedUserId !== void 0 && (r.FederatedUserId = (0, P.expectString)(e35.FederatedUserId)), e35.Arn !== void 0 && (r.Arn = (0, P.expectString)(e35.Arn)), r;
  }, "cG"), uG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.Account !== void 0 && (r.Account = (0, P.expectString)(e35.Account)), r;
  }, "uG"), dG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.UserId !== void 0 && (r.UserId = (0, P.expectString)(e35.UserId)), e35.Account !== void 0 && (r.Account = (0, P.expectString)(e35.Account)), e35.Arn !== void 0 && (r.Arn = (0, P.expectString)(e35.Arn)), r;
  }, "dG"), lG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.Credentials !== void 0 && (r.Credentials = Gc(e35.Credentials, t)), e35.FederatedUser !== void 0 && (r.FederatedUser = cG(e35.FederatedUser, t)), e35.PackedPolicySize !== void 0 && (r.PackedPolicySize = (0, P.strictParseInt32)(e35.PackedPolicySize)), r;
  }, "lG"), pG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.Credentials !== void 0 && (r.Credentials = Gc(e35.Credentials, t)), r;
  }, "pG"), fG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.message !== void 0 && (r.message = (0, P.expectString)(e35.message)), r;
  }, "fG"), mG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.message !== void 0 && (r.message = (0, P.expectString)(e35.message)), r;
  }, "mG"), hG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.message !== void 0 && (r.message = (0, P.expectString)(e35.message)), r;
  }, "hG"), _G = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.message !== void 0 && (r.message = (0, P.expectString)(e35.message)), r;
  }, "_G"), yG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.message !== void 0 && (r.message = (0, P.expectString)(e35.message)), r;
  }, "yG"), gG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.message !== void 0 && (r.message = (0, P.expectString)(e35.message)), r;
  }, "gG"), vG = /* @__PURE__ */ __name((e35, t) => {
    let r = {};
    return e35.message !== void 0 && (r.message = (0, P.expectString)(e35.message)), r;
  }, "vG"), Je = /* @__PURE__ */ __name((e35) => ({ httpStatusCode: e35.statusCode, requestId: e35.headers["x-amzn-requestid"] ?? e35.headers["x-amzn-request-id"] ?? e35.headers["x-amz-request-id"], extendedRequestId: e35.headers["x-amz-id-2"], cfId: e35.headers["x-amz-cf-id"] }), "Je"), EG = /* @__PURE__ */ __name((e35, t) => (0, P.collectBody)(e35, t).then((r) => t.utf8Encoder(r)), "EG"), ei = (0, P.withBaseException)(y6.STSServiceException), ti = /* @__PURE__ */ __name(async (e35, t, r, n, i) => {
    let { hostname: o, protocol: s = "https", port: a, path: u } = await e35.endpoint(), l = { protocol: s, hostname: o, port: a, method: "POST", path: u.endsWith("/") ? u.slice(0, -1) + r : u + r, headers: t };
    return n !== void 0 && (l.hostname = n), i !== void 0 && (l.body = i), new h6.HttpRequest(l);
  }, "ti"), ri = { "content-type": "application/x-www-form-urlencoded" }, pn = /* @__PURE__ */ __name((e35, t) => EG(e35, t).then((r) => {
    if (r.length) {
      let n = new _6.XMLParser({ attributeNamePrefix: "", htmlEntities: true, ignoreAttributes: false, ignoreDeclaration: true, parseTagValue: false, trimValues: false, tagValueProcessor: (u, l) => l.trim() === "" && l.includes(`
`) ? "" : void 0 });
      n.addEntity("#xD", "\r"), n.addEntity("#10", `
`);
      let i = n.parse(r), o = "#text", s = Object.keys(i)[0], a = i[s];
      return a[o] && (a[s] = a[o], delete a[o]), (0, P.getValueFromTextNode)(a);
    }
    return {};
  }), "pn"), ni = /* @__PURE__ */ __name(async (e35, t) => {
    let r = await pn(e35, t);
    return r.Error && (r.Error.message = r.Error.message ?? r.Error.Message), r;
  }, "ni"), ii = /* @__PURE__ */ __name((e35) => Object.entries(e35).map(([t, r]) => (0, P.extendedEncodeURIComponent)(t) + "=" + (0, P.extendedEncodeURIComponent)(r)).join("&"), "ii"), oi = /* @__PURE__ */ __name((e35, t) => {
    if (t.Error?.Code !== void 0)
      return t.Error.Code;
    if (e35.statusCode == 404)
      return "NotFound";
  }, "oi");
});
var Qf = c((ls) => {
  "use strict";
  Object.defineProperty(ls, "__esModule", { value: true });
  ls.AssumeRoleCommand = ls.$Command = void 0;
  var wG = rn(), SG = te(), NG = ye(), UI = A();
  Object.defineProperty(ls, "$Command", { enumerable: true, get: function() {
    return UI.Command;
  } });
  var bG = K(), xG = Jn(), jI = fn(), Uv = class e35 extends UI.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, NG.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, SG.getEndpointPlugin)(r, e35.getEndpointParameterInstructions())), this.middlewareStack.use((0, wG.getAwsAuthPlugin)(r));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "STSClient", commandName: "AssumeRoleCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: xG.AssumeRoleResponseFilterSensitiveLog, [bG.SMITHY_CONTEXT_KEY]: { service: "AWSSecurityTokenServiceV20110615", operation: "AssumeRole" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, jI.se_AssumeRoleCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, jI.de_AssumeRoleCommand)(t, r);
    }
  };
  ls.AssumeRoleCommand = Uv;
});
var Kf = c((ps) => {
  "use strict";
  Object.defineProperty(ps, "__esModule", { value: true });
  ps.AssumeRoleWithWebIdentityCommand = ps.$Command = void 0;
  var CG = te(), OG = ye(), VI = A();
  Object.defineProperty(ps, "$Command", { enumerable: true, get: function() {
    return VI.Command;
  } });
  var AG = K(), BI = Jn(), WI = fn(), Bv = class e35 extends VI.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, OG.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, CG.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "STSClient", commandName: "AssumeRoleWithWebIdentityCommand", inputFilterSensitiveLog: BI.AssumeRoleWithWebIdentityRequestFilterSensitiveLog, outputFilterSensitiveLog: BI.AssumeRoleWithWebIdentityResponseFilterSensitiveLog, [AG.SMITHY_CONTEXT_KEY]: { service: "AWSSecurityTokenServiceV20110615", operation: "AssumeRoleWithWebIdentity" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, WI.se_AssumeRoleWithWebIdentityCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, WI.de_AssumeRoleWithWebIdentityCommand)(t, r);
    }
  };
  ps.AssumeRoleWithWebIdentityCommand = Bv;
});
var Wv = c((Rr) => {
  "use strict";
  Object.defineProperty(Rr, "__esModule", { value: true });
  Rr.decorateDefaultCredentialProvider = Rr.getDefaultRoleAssumerWithWebIdentity = Rr.getDefaultRoleAssumer = void 0;
  var TG = Qf(), PG = Kf(), $I = "us-east-1", zI = /* @__PURE__ */ __name((e35) => typeof e35 != "function" ? e35 === void 0 ? $I : e35 : async () => {
    try {
      return await e35();
    } catch {
      return $I;
    }
  }, "zI"), IG = /* @__PURE__ */ __name((e35, t) => {
    let r, n;
    return async (i, o) => {
      if (n = i, !r) {
        let { logger: a, region: u, requestHandler: l } = e35;
        r = new t({ logger: a, credentialDefaultProvider: () => async () => n, region: zI(u || e35.region), ...l ? { requestHandler: l } : {} });
      }
      let { Credentials: s } = await r.send(new TG.AssumeRoleCommand(o));
      if (!s || !s.AccessKeyId || !s.SecretAccessKey)
        throw new Error(`Invalid response from STS.assumeRole call with role ${o.RoleArn}`);
      return { accessKeyId: s.AccessKeyId, secretAccessKey: s.SecretAccessKey, sessionToken: s.SessionToken, expiration: s.Expiration };
    };
  }, "IG");
  Rr.getDefaultRoleAssumer = IG;
  var RG = /* @__PURE__ */ __name((e35, t) => {
    let r;
    return async (n) => {
      if (!r) {
        let { logger: o, region: s, requestHandler: a } = e35;
        r = new t({ logger: o, region: zI(s || e35.region), ...a ? { requestHandler: a } : {} });
      }
      let { Credentials: i } = await r.send(new PG.AssumeRoleWithWebIdentityCommand(n));
      if (!i || !i.AccessKeyId || !i.SecretAccessKey)
        throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${n.RoleArn}`);
      return { accessKeyId: i.AccessKeyId, secretAccessKey: i.SecretAccessKey, sessionToken: i.SessionToken, expiration: i.Expiration };
    };
  }, "RG");
  Rr.getDefaultRoleAssumerWithWebIdentity = RG;
  var qG = /* @__PURE__ */ __name((e35) => (t) => e35({ roleAssumer: (0, Rr.getDefaultRoleAssumer)(t, t.stsClientCtor), roleAssumerWithWebIdentity: (0, Rr.getDefaultRoleAssumerWithWebIdentity)(t, t.stsClientCtor), ...t }), "qG");
  Rr.decorateDefaultCredentialProvider = qG;
});
var HI = c((Xe) => {
  "use strict";
  Object.defineProperty(Xe, "__esModule", { value: true });
  Xe.fromEnv = Xe.ENV_EXPIRATION = Xe.ENV_SESSION = Xe.ENV_SECRET = Xe.ENV_KEY = void 0;
  var MG = Z();
  Xe.ENV_KEY = "AWS_ACCESS_KEY_ID";
  Xe.ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
  Xe.ENV_SESSION = "AWS_SESSION_TOKEN";
  Xe.ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
  var DG = /* @__PURE__ */ __name(() => async () => {
    let e35 = process.env[Xe.ENV_KEY], t = process.env[Xe.ENV_SECRET], r = process.env[Xe.ENV_SESSION], n = process.env[Xe.ENV_EXPIRATION];
    if (e35 && t)
      return { accessKeyId: e35, secretAccessKey: t, ...r && { sessionToken: r }, ...n && { expiration: new Date(n) } };
    throw new MG.CredentialsProviderError("Unable to find environment variable credentials.");
  }, "DG");
  Xe.fromEnv = DG;
});
var $v = c((Vv) => {
  "use strict";
  Object.defineProperty(Vv, "__esModule", { value: true });
  var kG = (b(), S(N));
  kG.__exportStar(HI(), Vv);
});
var Jf = c((Yf) => {
  "use strict";
  Object.defineProperty(Yf, "__esModule", { value: true });
  Yf.httpRequest = void 0;
  var zv = Z(), FG = D("buffer"), LG = D("http");
  function jG(e35) {
    return new Promise((t, r) => {
      var n;
      let i = (0, LG.request)({ method: "GET", ...e35, hostname: (n = e35.hostname) === null || n === void 0 ? void 0 : n.replace(/^\[(.+)\]$/, "$1") });
      i.on("error", (o) => {
        r(Object.assign(new zv.ProviderError("Unable to connect to instance metadata service"), o)), i.destroy();
      }), i.on("timeout", () => {
        r(new zv.ProviderError("TimeoutError from instance metadata service")), i.destroy();
      }), i.on("response", (o) => {
        let { statusCode: s = 400 } = o;
        (s < 200 || 300 <= s) && (r(Object.assign(new zv.ProviderError("Error response received from instance metadata service"), { statusCode: s })), i.destroy());
        let a = [];
        o.on("data", (u) => {
          a.push(u);
        }), o.on("end", () => {
          t(FG.Buffer.concat(a)), i.destroy();
        });
      }), i.end();
    });
  }
  __name(jG, "jG");
  Yf.httpRequest = jG;
});
var Hv = c((fs) => {
  "use strict";
  Object.defineProperty(fs, "__esModule", { value: true });
  fs.fromImdsCredentials = fs.isImdsCredentials = void 0;
  var UG = /* @__PURE__ */ __name((e35) => !!e35 && typeof e35 == "object" && typeof e35.AccessKeyId == "string" && typeof e35.SecretAccessKey == "string" && typeof e35.Token == "string" && typeof e35.Expiration == "string", "UG");
  fs.isImdsCredentials = UG;
  var BG = /* @__PURE__ */ __name((e35) => ({ accessKeyId: e35.AccessKeyId, secretAccessKey: e35.SecretAccessKey, sessionToken: e35.Token, expiration: new Date(e35.Expiration) }), "BG");
  fs.fromImdsCredentials = BG;
});
var Xf = c((qr) => {
  "use strict";
  Object.defineProperty(qr, "__esModule", { value: true });
  qr.providerConfigFromInit = qr.DEFAULT_MAX_RETRIES = qr.DEFAULT_TIMEOUT = void 0;
  qr.DEFAULT_TIMEOUT = 1e3;
  qr.DEFAULT_MAX_RETRIES = 0;
  var WG = /* @__PURE__ */ __name(({ maxRetries: e35 = qr.DEFAULT_MAX_RETRIES, timeout: t = qr.DEFAULT_TIMEOUT }) => ({ maxRetries: e35, timeout: t }), "WG");
  qr.providerConfigFromInit = WG;
});
var Gv = c((Zf) => {
  "use strict";
  Object.defineProperty(Zf, "__esModule", { value: true });
  Zf.retry = void 0;
  var VG = /* @__PURE__ */ __name((e35, t) => {
    let r = e35();
    for (let n = 0; n < t; n++)
      r = r.catch(e35);
    return r;
  }, "VG");
  Zf.retry = VG;
});
var QI = c((Fe) => {
  "use strict";
  Object.defineProperty(Fe, "__esModule", { value: true });
  Fe.fromContainerMetadata = Fe.ENV_CMDS_AUTH_TOKEN = Fe.ENV_CMDS_RELATIVE_URI = Fe.ENV_CMDS_FULL_URI = void 0;
  var em = Z(), $G = D("url"), zG = Jf(), GI = Hv(), HG = Xf(), GG = Gv();
  Fe.ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
  Fe.ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
  Fe.ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
  var QG = /* @__PURE__ */ __name((e35 = {}) => {
    let { timeout: t, maxRetries: r } = (0, HG.providerConfigFromInit)(e35);
    return () => (0, GG.retry)(async () => {
      let n = await ZG(), i = JSON.parse(await KG(t, n));
      if (!(0, GI.isImdsCredentials)(i))
        throw new em.CredentialsProviderError("Invalid response received from instance metadata service.");
      return (0, GI.fromImdsCredentials)(i);
    }, r);
  }, "QG");
  Fe.fromContainerMetadata = QG;
  var KG = /* @__PURE__ */ __name(async (e35, t) => (process.env[Fe.ENV_CMDS_AUTH_TOKEN] && (t.headers = { ...t.headers, Authorization: process.env[Fe.ENV_CMDS_AUTH_TOKEN] }), (await (0, zG.httpRequest)({ ...t, timeout: e35 })).toString()), "KG"), YG = "169.254.170.2", JG = { localhost: true, "127.0.0.1": true }, XG = { "http:": true, "https:": true }, ZG = /* @__PURE__ */ __name(async () => {
    if (process.env[Fe.ENV_CMDS_RELATIVE_URI])
      return { hostname: YG, path: process.env[Fe.ENV_CMDS_RELATIVE_URI] };
    if (process.env[Fe.ENV_CMDS_FULL_URI]) {
      let e35 = (0, $G.parse)(process.env[Fe.ENV_CMDS_FULL_URI]);
      if (!e35.hostname || !(e35.hostname in JG))
        throw new em.CredentialsProviderError(`${e35.hostname} is not a valid container metadata service hostname`, false);
      if (!e35.protocol || !(e35.protocol in XG))
        throw new em.CredentialsProviderError(`${e35.protocol} is not a valid container metadata service protocol`, false);
      return { ...e35, port: e35.port ? parseInt(e35.port, 10) : void 0 };
    }
    throw new em.CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${Fe.ENV_CMDS_RELATIVE_URI} or ${Fe.ENV_CMDS_FULL_URI} environment variable is set`, false);
  }, "ZG");
});
var KI = c((Qc) => {
  "use strict";
  Object.defineProperty(Qc, "__esModule", { value: true });
  Qc.Endpoint = void 0;
  var e42;
  (function(e35) {
    e35.IPv4 = "http://169.254.169.254", e35.IPv6 = "http://[fd00:ec2::254]";
  })(e42 = Qc.Endpoint || (Qc.Endpoint = {}));
});
var YI = c((Mr) => {
  "use strict";
  Object.defineProperty(Mr, "__esModule", { value: true });
  Mr.ENDPOINT_CONFIG_OPTIONS = Mr.CONFIG_ENDPOINT_NAME = Mr.ENV_ENDPOINT_NAME = void 0;
  Mr.ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
  Mr.CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
  Mr.ENDPOINT_CONFIG_OPTIONS = { environmentVariableSelector: (e35) => e35[Mr.ENV_ENDPOINT_NAME], configFileSelector: (e35) => e35[Mr.CONFIG_ENDPOINT_NAME], default: void 0 };
});
var Qv = c((Kc) => {
  "use strict";
  Object.defineProperty(Kc, "__esModule", { value: true });
  Kc.EndpointMode = void 0;
  var t4;
  (function(e35) {
    e35.IPv4 = "IPv4", e35.IPv6 = "IPv6";
  })(t4 = Kc.EndpointMode || (Kc.EndpointMode = {}));
});
var JI = c((Dr) => {
  "use strict";
  Object.defineProperty(Dr, "__esModule", { value: true });
  Dr.ENDPOINT_MODE_CONFIG_OPTIONS = Dr.CONFIG_ENDPOINT_MODE_NAME = Dr.ENV_ENDPOINT_MODE_NAME = void 0;
  var r4 = Qv();
  Dr.ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
  Dr.CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
  Dr.ENDPOINT_MODE_CONFIG_OPTIONS = { environmentVariableSelector: (e35) => e35[Dr.ENV_ENDPOINT_MODE_NAME], configFileSelector: (e35) => e35[Dr.CONFIG_ENDPOINT_MODE_NAME], default: r4.EndpointMode.IPv4 };
});
var Yv = c((tm) => {
  "use strict";
  Object.defineProperty(tm, "__esModule", { value: true });
  tm.getInstanceMetadataEndpoint = void 0;
  var ZI = on(), n4 = Wi(), XI = KI(), i4 = YI(), Kv = Qv(), o4 = JI(), s4 = /* @__PURE__ */ __name(async () => (0, n4.parseUrl)(await a4() || await c4()), "s4");
  tm.getInstanceMetadataEndpoint = s4;
  var a4 = /* @__PURE__ */ __name(async () => (0, ZI.loadConfig)(i4.ENDPOINT_CONFIG_OPTIONS)(), "a4"), c4 = /* @__PURE__ */ __name(async () => {
    let e35 = await (0, ZI.loadConfig)(o4.ENDPOINT_MODE_CONFIG_OPTIONS)();
    switch (e35) {
      case Kv.EndpointMode.IPv4:
        return XI.Endpoint.IPv4;
      case Kv.EndpointMode.IPv6:
        return XI.Endpoint.IPv6;
      default:
        throw new Error(`Unsupported endpoint mode: ${e35}. Select from ${Object.values(Kv.EndpointMode)}`);
    }
  }, "c4");
});
var eR = c((rm) => {
  "use strict";
  Object.defineProperty(rm, "__esModule", { value: true });
  rm.getExtendedInstanceMetadataCredentials = void 0;
  var u4 = 5 * 60, d4 = 5 * 60, l4 = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html", p4 = /* @__PURE__ */ __name((e35, t) => {
    var r;
    let n = u4 + Math.floor(Math.random() * d4), i = new Date(Date.now() + n * 1e3);
    t.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: " + l4);
    let o = (r = e35.originalExpiration) !== null && r !== void 0 ? r : e35.expiration;
    return { ...e35, ...o ? { originalExpiration: o } : {}, expiration: i };
  }, "p4");
  rm.getExtendedInstanceMetadataCredentials = p4;
});
var rR = c((nm) => {
  "use strict";
  Object.defineProperty(nm, "__esModule", { value: true });
  nm.staticStabilityProvider = void 0;
  var tR = eR(), f4 = /* @__PURE__ */ __name((e35, t = {}) => {
    let r = t?.logger || console, n;
    return async () => {
      let i;
      try {
        i = await e35(), i.expiration && i.expiration.getTime() < Date.now() && (i = (0, tR.getExtendedInstanceMetadataCredentials)(i, r));
      } catch (o) {
        if (n)
          r.warn("Credential renew failed: ", o), i = (0, tR.getExtendedInstanceMetadataCredentials)(n, r);
        else
          throw o;
      }
      return n = i, i;
    };
  }, "f4");
  nm.staticStabilityProvider = f4;
});
var sR = c((im) => {
  "use strict";
  Object.defineProperty(im, "__esModule", { value: true });
  im.fromInstanceMetadata = void 0;
  var m4 = Z(), Jv = Jf(), nR = Hv(), h4 = Xf(), iR = Gv(), _4 = Yv(), y4 = rR(), oR = "/latest/meta-data/iam/security-credentials/", g4 = "/latest/api/token", v4 = /* @__PURE__ */ __name((e35 = {}) => (0, y4.staticStabilityProvider)(E4(e35), { logger: e35.logger }), "v4");
  im.fromInstanceMetadata = v4;
  var E4 = /* @__PURE__ */ __name((e35) => {
    let t = false, { timeout: r, maxRetries: n } = (0, h4.providerConfigFromInit)(e35), i = /* @__PURE__ */ __name(async (o, s) => {
      let a = (await (0, iR.retry)(async () => {
        let u;
        try {
          u = await S4(s);
        } catch (l) {
          throw l.statusCode === 401 && (t = false), l;
        }
        return u;
      }, o)).trim();
      return (0, iR.retry)(async () => {
        let u;
        try {
          u = await N4(a, s);
        } catch (l) {
          throw l.statusCode === 401 && (t = false), l;
        }
        return u;
      }, o);
    }, "i");
    return async () => {
      let o = await (0, _4.getInstanceMetadataEndpoint)();
      if (t)
        return i(n, { ...o, timeout: r });
      {
        let s;
        try {
          s = (await w4({ ...o, timeout: r })).toString();
        } catch (a) {
          if (a?.statusCode === 400)
            throw Object.assign(a, { message: "EC2 Metadata token request returned error" });
          return (a.message === "TimeoutError" || [403, 404, 405].includes(a.statusCode)) && (t = true), i(n, { ...o, timeout: r });
        }
        return i(n, { ...o, headers: { "x-aws-ec2-metadata-token": s }, timeout: r });
      }
    };
  }, "E4"), w4 = /* @__PURE__ */ __name(async (e35) => (0, Jv.httpRequest)({ ...e35, path: g4, method: "PUT", headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" } }), "w4"), S4 = /* @__PURE__ */ __name(async (e35) => (await (0, Jv.httpRequest)({ ...e35, path: oR })).toString(), "S4"), N4 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = JSON.parse((await (0, Jv.httpRequest)({ ...t, path: oR + e35 })).toString());
    if (!(0, nR.isImdsCredentials)(r))
      throw new m4.CredentialsProviderError("Invalid response received from instance metadata service.");
    return (0, nR.fromImdsCredentials)(r);
  }, "N4");
});
var cR = c((aR) => {
  "use strict";
  Object.defineProperty(aR, "__esModule", { value: true });
});
var sm = c((kr) => {
  "use strict";
  Object.defineProperty(kr, "__esModule", { value: true });
  kr.getInstanceMetadataEndpoint = kr.httpRequest = void 0;
  var om = (b(), S(N));
  om.__exportStar(QI(), kr);
  om.__exportStar(sR(), kr);
  om.__exportStar(Xf(), kr);
  om.__exportStar(cR(), kr);
  var b4 = Jf();
  Object.defineProperty(kr, "httpRequest", { enumerable: true, get: function() {
    return b4.httpRequest;
  } });
  var x4 = Yv();
  Object.defineProperty(kr, "getInstanceMetadataEndpoint", { enumerable: true, get: function() {
    return x4.getInstanceMetadataEndpoint;
  } });
});
var dR = c((am) => {
  "use strict";
  Object.defineProperty(am, "__esModule", { value: true });
  am.resolveCredentialSource = void 0;
  var C4 = $v(), uR = sm(), O4 = Z(), A4 = /* @__PURE__ */ __name((e35, t) => {
    let r = { EcsContainer: uR.fromContainerMetadata, Ec2InstanceMetadata: uR.fromInstanceMetadata, Environment: C4.fromEnv };
    if (e35 in r)
      return r[e35]();
    throw new O4.CredentialsProviderError(`Unsupported credential source in profile ${t}. Got ${e35}, expected EcsContainer or Ec2InstanceMetadata or Environment.`);
  }, "A4");
  am.resolveCredentialSource = A4;
});
var lR = c((ms) => {
  "use strict";
  Object.defineProperty(ms, "__esModule", { value: true });
  ms.resolveAssumeRoleCredentials = ms.isAssumeRoleProfile = void 0;
  var Xv = Z(), T4 = er(), P4 = dR(), I4 = Zv(), R4 = /* @__PURE__ */ __name((e35) => !!e35 && typeof e35 == "object" && typeof e35.role_arn == "string" && ["undefined", "string"].indexOf(typeof e35.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof e35.external_id) > -1 && ["undefined", "string"].indexOf(typeof e35.mfa_serial) > -1 && (q4(e35) || M4(e35)), "R4");
  ms.isAssumeRoleProfile = R4;
  var q4 = /* @__PURE__ */ __name((e35) => typeof e35.source_profile == "string" && typeof e35.credential_source > "u", "q4"), M4 = /* @__PURE__ */ __name((e35) => typeof e35.credential_source == "string" && typeof e35.source_profile > "u", "M4"), D4 = /* @__PURE__ */ __name(async (e35, t, r, n = {}) => {
    let i = t[e35];
    if (!r.roleAssumer)
      throw new Xv.CredentialsProviderError(`Profile ${e35} requires a role to be assumed, but no role assumption callback was provided.`, false);
    let { source_profile: o } = i;
    if (o && o in n)
      throw new Xv.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${(0, T4.getProfileName)(r)}. Profiles visited: ` + Object.keys(n).join(", "), false);
    let s = o ? (0, I4.resolveProfileData)(o, t, r, { ...n, [o]: true }) : (0, P4.resolveCredentialSource)(i.credential_source, e35)(), a = { RoleArn: i.role_arn, RoleSessionName: i.role_session_name || `aws-sdk-js-${Date.now()}`, ExternalId: i.external_id, DurationSeconds: parseInt(i.duration_seconds || "3600", 10) }, { mfa_serial: u } = i;
    if (u) {
      if (!r.mfaCodeProvider)
        throw new Xv.CredentialsProviderError(`Profile ${e35} requires multi-factor authentication, but no MFA code callback was provided.`, false);
      a.SerialNumber = u, a.TokenCode = await r.mfaCodeProvider(u);
    }
    let l = await s;
    return r.roleAssumer(l, a);
  }, "D4");
  ms.resolveAssumeRoleCredentials = D4;
});
var pR = c((cm) => {
  "use strict";
  Object.defineProperty(cm, "__esModule", { value: true });
  cm.getValidatedProcessCredentials = void 0;
  var k4 = /* @__PURE__ */ __name((e35, t) => {
    if (t.Version !== 1)
      throw Error(`Profile ${e35} credential_process did not return Version 1.`);
    if (t.AccessKeyId === void 0 || t.SecretAccessKey === void 0)
      throw Error(`Profile ${e35} credential_process returned invalid credentials.`);
    if (t.Expiration) {
      let r = /* @__PURE__ */ new Date();
      if (new Date(t.Expiration) < r)
        throw Error(`Profile ${e35} credential_process returned expired credentials.`);
    }
    return { accessKeyId: t.AccessKeyId, secretAccessKey: t.SecretAccessKey, ...t.SessionToken && { sessionToken: t.SessionToken }, ...t.Expiration && { expiration: new Date(t.Expiration) } };
  }, "k4");
  cm.getValidatedProcessCredentials = k4;
});
var fR = c((um) => {
  "use strict";
  Object.defineProperty(um, "__esModule", { value: true });
  um.resolveProcessCredentials = void 0;
  var eE = Z(), F4 = D("child_process"), L4 = D("util"), j4 = pR(), U4 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = t[e35];
    if (t[e35]) {
      let n = r.credential_process;
      if (n !== void 0) {
        let i = (0, L4.promisify)(F4.exec);
        try {
          let { stdout: o } = await i(n), s;
          try {
            s = JSON.parse(o.trim());
          } catch {
            throw Error(`Profile ${e35} credential_process returned invalid JSON.`);
          }
          return (0, j4.getValidatedProcessCredentials)(e35, s);
        } catch (o) {
          throw new eE.CredentialsProviderError(o.message);
        }
      } else
        throw new eE.CredentialsProviderError(`Profile ${e35} did not contain credential_process.`);
    } else
      throw new eE.CredentialsProviderError(`Profile ${e35} could not be found in shared credentials file.`);
  }, "U4");
  um.resolveProcessCredentials = U4;
});
var hR = c((dm) => {
  "use strict";
  Object.defineProperty(dm, "__esModule", { value: true });
  dm.fromProcess = void 0;
  var mR = er(), B4 = fR(), W4 = /* @__PURE__ */ __name((e35 = {}) => async () => {
    let t = await (0, mR.parseKnownFiles)(e35);
    return (0, B4.resolveProcessCredentials)((0, mR.getProfileName)(e35), t);
  }, "W4");
  dm.fromProcess = W4;
});
var rE = c((tE) => {
  "use strict";
  Object.defineProperty(tE, "__esModule", { value: true });
  var V4 = (b(), S(N));
  V4.__exportStar(hR(), tE);
});
var _R = c((hs) => {
  "use strict";
  Object.defineProperty(hs, "__esModule", { value: true });
  hs.resolveProcessCredentials = hs.isProcessProfile = void 0;
  var $4 = rE(), z4 = /* @__PURE__ */ __name((e35) => !!e35 && typeof e35 == "object" && typeof e35.credential_process == "string", "z4");
  hs.isProcessProfile = z4;
  var H4 = /* @__PURE__ */ __name(async (e35, t) => (0, $4.fromProcess)({ ...e35, profile: t })(), "H4");
  hs.resolveProcessCredentials = H4;
});
var nE = c((lm) => {
  "use strict";
  Object.defineProperty(lm, "__esModule", { value: true });
  lm.isSsoProfile = void 0;
  var G4 = /* @__PURE__ */ __name((e35) => e35 && (typeof e35.sso_start_url == "string" || typeof e35.sso_account_id == "string" || typeof e35.sso_session == "string" || typeof e35.sso_region == "string" || typeof e35.sso_role_name == "string"), "G4");
  lm.isSsoProfile = G4;
});
var yR = c((pm) => {
  "use strict";
  Object.defineProperty(pm, "__esModule", { value: true });
  pm.resolveClientEndpointParameters = void 0;
  var Q4 = /* @__PURE__ */ __name((e35) => ({ ...e35, useDualstackEndpoint: e35.useDualstackEndpoint ?? false, useFipsEndpoint: e35.useFipsEndpoint ?? false, defaultSigningName: "awsssoportal" }), "Q4");
  pm.resolveClientEndpointParameters = Q4;
});
var gR = c((Kwe, K4) => {
  K4.exports = { name: "@aws-sdk/client-sso", description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native", version: "3.430.0", scripts: { build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'", "build:cjs": "tsc -p tsconfig.cjs.json", "build:docs": "typedoc", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build", "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo sso" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: false, dependencies: { "@aws-crypto/sha256-browser": "3.0.0", "@aws-crypto/sha256-js": "3.0.0", "@aws-sdk/middleware-host-header": "3.429.0", "@aws-sdk/middleware-logger": "3.428.0", "@aws-sdk/middleware-recursion-detection": "3.428.0", "@aws-sdk/middleware-user-agent": "3.428.0", "@aws-sdk/region-config-resolver": "3.430.0", "@aws-sdk/types": "3.428.0", "@aws-sdk/util-endpoints": "3.428.0", "@aws-sdk/util-user-agent-browser": "3.428.0", "@aws-sdk/util-user-agent-node": "3.430.0", "@smithy/config-resolver": "^2.0.15", "@smithy/fetch-http-handler": "^2.2.3", "@smithy/hash-node": "^2.0.11", "@smithy/invalid-dependency": "^2.0.11", "@smithy/middleware-content-length": "^2.0.13", "@smithy/middleware-endpoint": "^2.1.2", "@smithy/middleware-retry": "^2.0.17", "@smithy/middleware-serde": "^2.0.11", "@smithy/middleware-stack": "^2.0.5", "@smithy/node-config-provider": "^2.1.2", "@smithy/node-http-handler": "^2.1.7", "@smithy/protocol-http": "^3.0.7", "@smithy/smithy-client": "^2.1.11", "@smithy/types": "^2.3.5", "@smithy/url-parser": "^2.0.11", "@smithy/util-base64": "^2.0.0", "@smithy/util-body-length-browser": "^2.0.0", "@smithy/util-body-length-node": "^2.1.0", "@smithy/util-defaults-mode-browser": "^2.0.15", "@smithy/util-defaults-mode-node": "^2.0.20", "@smithy/util-retry": "^2.0.4", "@smithy/util-utf8": "^2.0.0", tslib: "^2.5.0" }, devDependencies: { "@smithy/service-client-documentation-generator": "^2.0.0", "@tsconfig/node14": "1.0.3", "@types/node": "^14.14.31", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typedoc: "0.23.23", typescript: "~4.9.5" }, engines: { node: ">=14.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-sso" } };
});
var fm = c((_s) => {
  "use strict";
  Object.defineProperty(_s, "__esModule", { value: true });
  _s.newLiftedPromise = _s.makeSelfCleaningPromise = void 0;
  function Y4(e35, t) {
    return t ? e35.finally(() => {
      t();
    }) : e35;
  }
  __name(Y4, "Y4");
  _s.makeSelfCleaningPromise = Y4;
  function J4(e35) {
    let t, r, n = new Promise((i, o) => {
      t = i, r = o;
    });
    if (!t || !r)
      throw new Error("Failed to bind resolve and reject when making lifted promise");
    return e35 && e35(t, r), { promise: n, resolve: t, reject: r };
  }
  __name(J4, "J4");
  _s.newLiftedPromise = J4;
});
var ER = c((Le) => {
  "use strict";
  var X4 = Le && Le.__createBinding || (Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  }), Z4 = Le && Le.__setModuleDefault || (Object.create ? function(e35, t) {
    Object.defineProperty(e35, "default", { enumerable: true, value: t });
  } : function(e35, t) {
    e35.default = t;
  }), e82 = Le && Le.__importStar || function(e35) {
    if (e35 && e35.__esModule)
      return e35;
    var t = {};
    if (e35 != null)
      for (var r in e35)
        r !== "default" && Object.prototype.hasOwnProperty.call(e35, r) && X4(t, e35, r);
    return Z4(t, e35), t;
  };
  Object.defineProperty(Le, "__esModule", { value: true });
  Le.newCancellablePromiseFromNextEvent = Le.CancelController = Le.EVENT_NAME = void 0;
  var t8 = D("events"), vR = e82(fm());
  Le.EVENT_NAME = "cancelled";
  var iE = class {
    static {
      __name(this, "iE");
    }
    constructor(t) {
      this.cancelled = false, t && t.emitterFactory ? this.emitter = t.emitterFactory() : this.emitter = new t8.EventEmitter();
    }
    cancel() {
      this.cancelled || (this.cancelled = true, this.emitter.emit(Le.EVENT_NAME), this.emitter.removeAllListeners(Le.EVENT_NAME));
    }
    hasBeenCancelled() {
      return this.cancelled;
    }
    addListener(t) {
      if (this.cancelled) {
        t();
        return;
      }
      return this.emitter.on(Le.EVENT_NAME, t), () => {
        this.emitter.removeListener(Le.EVENT_NAME, t);
      };
    }
  };
  Le.CancelController = iE;
  function r8(e35) {
    let t, r, n = vR.newLiftedPromise();
    return t = /* @__PURE__ */ __name((i) => {
      try {
        e35.eventDataTransformer ? n.resolve(e35.eventDataTransformer(i)) : n.resolve(i);
      } catch (o) {
        n.reject(o);
      }
    }, "t"), e35.emitter.addListener(e35.eventName, t), e35.cancelController && (r = e35.cancelController.addListener(() => {
      n.reject(e35.cancelMessage);
    })), vR.makeSelfCleaningPromise(n.promise, () => {
      t && e35.emitter.removeListener(e35.eventName, t), r && r();
    });
  }
  __name(r8, "r8");
  Le.newCancellablePromiseFromNextEvent = r8;
});
var wR = c((Xwe, n8) => {
  n8.exports = { name: "aws-crt", version: "1.18.0", description: "NodeJS/browser bindings to the aws-c-* libraries", homepage: "https://github.com/awslabs/aws-crt-nodejs", repository: { type: "git", url: "git+https://github.com/awslabs/aws-crt-nodejs.git" }, contributors: ["AWS Common Runtime Team <aws-sdk-common-runtime@amazon.com>"], license: "Apache-2.0", main: "./dist/index.js", browser: "./dist.browser/browser.js", types: "./dist/index.d.ts", scripts: { tsc: "node ./scripts/tsc.js", test: "npm run test:native", "test:node": "npm run test:native", "test:native": "npx jest --runInBand --verbose --config test/native/jest.config.js --forceExit", "test:browser": "npx jest --runInBand --verbose --config test/browser/jest.config.js --forceExit", "test:browser:ci": "npm run install:puppeteer && npm run test:browser", "install:puppeteer": "npm install --save-dev jest-puppeteer puppeteer @types/puppeteer", prepare: "node ./scripts/tsc.js && node ./scripts/install.js", install: "node ./scripts/install.js" }, devDependencies: { "@types/crypto-js": "^3.1.43", "@types/jest": "^27.0.1", "@types/node": "^10.17.54", "@types/prettier": "2.6.0", "@types/puppeteer": "^5.4.7", "@types/uuid": "^3.4.8", "@types/ws": "^7.4.7", "aws-sdk": "^2.848.0", "https-proxy-agent": "^5.0.1", jest: "^27.2.1", "jest-puppeteer": "^5.0.4", "jest-runtime": "^27.2.1", puppeteer: "^3.3.0", "ts-jest": "^27.0.5", typedoc: "^0.22.18", "typedoc-plugin-merge-modules": "^3.1.0", typescript: "^4.7.4", uuid: "^8.3.2", yargs: "^17.2.1", "cmake-js": "^6.3.2", tar: "^6.1.11" }, dependencies: { "@aws-sdk/util-utf8-browser": "^3.109.0", "@httptoolkit/websocket-stream": "^6.0.0", axios: "^0.24.0", buffer: "^6.0.3", "crypto-js": "^4.0.0", mqtt: "^4.3.7", process: "^0.11.10" } };
});
var mm = c((Fr) => {
  "use strict";
  Object.defineProperty(Fr, "__esModule", { value: true });
  Fr.crt_version = Fr.package_info = Fr.is_browser = Fr.is_nodejs = void 0;
  function SR() {
    return typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node < "u";
  }
  __name(SR, "SR");
  Fr.is_nodejs = SR;
  function i8() {
    return !SR();
  }
  __name(i8, "i8");
  Fr.is_browser = i8;
  function NR() {
    try {
      return wR();
    } catch {
      return { name: "aws-crt-nodejs", version: "UNKNOWN" };
    }
  }
  __name(NR, "NR");
  Fr.package_info = NR;
  function o8() {
    return NR().version;
  }
  __name(o8, "o8");
  Fr.crt_version = o8;
});
var bR = c((ys) => {
  "use strict";
  var s8 = ys && ys.__awaiter || function(e35, t, r, n) {
    function i(o) {
      return o instanceof r ? o : new r(function(s) {
        s(o);
      });
    }
    __name(i, "i");
    return new (r || (r = Promise))(function(o, s) {
      function a(p) {
        try {
          l(n.next(p));
        } catch (f) {
          s(f);
        }
      }
      __name(a, "a");
      function u(p) {
        try {
          l(n.throw(p));
        } catch (f) {
          s(f);
        }
      }
      __name(u, "u");
      function l(p) {
        p.done ? o(p.value) : i(p.value).then(a, u);
      }
      __name(l, "l");
      l((n = n.apply(e35, t || [])).next());
    });
  };
  Object.defineProperty(ys, "__esModule", { value: true });
  ys.using = void 0;
  function a8(e35, t) {
    return s8(this, void 0, void 0, function* () {
      try {
        yield t(e35);
      } finally {
        e35.close();
      }
    });
  }
  __name(a8, "a8");
  ys.using = a8;
});
var tr = c((it) => {
  "use strict";
  var c8 = it && it.__createBinding || (Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  }), u8 = it && it.__setModuleDefault || (Object.create ? function(e35, t) {
    Object.defineProperty(e35, "default", { enumerable: true, value: t });
  } : function(e35, t) {
    e35.default = t;
  }), d8 = it && it.__importStar || function(e35) {
    if (e35 && e35.__esModule)
      return e35;
    var t = {};
    if (e35 != null)
      for (var r in e35)
        r !== "default" && Object.prototype.hasOwnProperty.call(e35, r) && c8(t, e35, r);
    return u8(t, e35), t;
  }, l8 = it && it.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(it, "__esModule", { value: true });
  it.cRuntime = it.CRuntimeType = void 0;
  var hm = d8(D("path")), oE = D("os"), AR = D("fs"), xR = D("process"), p8 = l8(D("child_process")), gs = Object.freeze({ NON_LINUX: "cruntime", MUSL: "musl", GLIBC: "glibc" });
  it.CRuntimeType = gs;
  function f8() {
    if ((0, oE.platform)() !== "linux")
      return gs.NON_LINUX;
    try {
      let e35 = p8.default.spawnSync("ldd", ["--version"], { encoding: "utf8" });
      return (e35.stdout + e35.stderr).includes(gs.MUSL) ? gs.MUSL : gs.GLIBC;
    } catch {
      return gs.GLIBC;
    }
  }
  __name(f8, "f8");
  var CR = "Please upgrade to node >=10.16.0, or use the provided browser implementation.";
  if ("napi" in xR.versions) {
    if (parseInt(xR.versions.napi) < 4)
      throw new Error("The AWS CRT native implementation requires that NAPI version 4 be present. " + CR);
  } else
    throw new Error("The current runtime is not reporting an NAPI version. " + CR);
  var TR = f8();
  it.cRuntime = TR;
  var m8 = "aws-crt-nodejs", h8 = `${oE.platform}-${oE.arch}-${TR}`, sE = hm.resolve(__dirname, "..", ".."), OR = hm.join(sE, "dist");
  (0, AR.existsSync)(OR) && (sE = OR);
  var _8 = hm.resolve(sE, "bin"), PR = [hm.join(_8, h8, m8)], aE;
  for (let e35 of PR)
    if ((0, AR.existsSync)(e35 + ".node")) {
      aE = D(e35);
      break;
    }
  if (aE == null)
    throw new Error(`AWS CRT binary not present in any of the following locations:
	` + PR.join(`
	`));
  it.default = aE;
});
var rr = c((Es) => {
  "use strict";
  var y8 = Es && Es.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(Es, "__esModule", { value: true });
  Es.CrtError = void 0;
  var IR = y8(tr()), vs = class extends Error {
    static {
      __name(this, "vs");
    }
    constructor(t) {
      super(g8(t)), this.error = t, this.error_code = v8(t), this.error_name = E8(t);
    }
  };
  Es.CrtError = vs;
  function g8(e35) {
    return typeof e35 == "number" ? IR.default.error_code_to_string(e35) : e35 instanceof vs ? e35.message : e35.toString();
  }
  __name(g8, "g8");
  function v8(e35) {
    if (typeof e35 == "number")
      return e35;
    if (e35 instanceof vs)
      return e35.error_code;
  }
  __name(v8, "v8");
  function E8(e35) {
    if (typeof e35 == "number")
      return IR.default.error_code_to_name(e35);
    if (e35 instanceof vs)
      return e35.error_name;
  }
  __name(E8, "E8");
});
var Xi = c((ws) => {
  "use strict";
  Object.defineProperty(ws, "__esModule", { value: true });
  ws.NativeResourceMixin = ws.NativeResource = void 0;
  var cE = class {
    static {
      __name(this, "cE");
    }
    constructor(t) {
      this.handle = t;
    }
    native_handle() {
      return this.handle;
    }
  };
  ws.NativeResource = cE;
  function w8(e35) {
    return class extends e35 {
      constructor(...t) {
        let r = t.shift();
        super(...t), this._handle = r;
      }
      _super(t) {
        this._handle = t;
      }
      native_handle() {
        return this._handle;
      }
    };
  }
  __name(w8, "w8");
  ws.NativeResourceMixin = w8;
});
var uE = c((nr) => {
  "use strict";
  Object.defineProperty(nr, "__esModule", { value: true });
  nr.SocketDomain = nr.SocketType = nr.TlsVersion = void 0;
  var S8;
  (function(e35) {
    e35[e35.SSLv3 = 0] = "SSLv3", e35[e35.TLSv1 = 1] = "TLSv1", e35[e35.TLSv1_1 = 2] = "TLSv1_1", e35[e35.TLSv1_2 = 3] = "TLSv1_2", e35[e35.TLSv1_3 = 4] = "TLSv1_3", e35[e35.Default = 128] = "Default";
  })(S8 = nr.TlsVersion || (nr.TlsVersion = {}));
  var N8;
  (function(e35) {
    e35[e35.STREAM = 0] = "STREAM", e35[e35.DGRAM = 1] = "DGRAM";
  })(N8 = nr.SocketType || (nr.SocketType = {}));
  var b8;
  (function(e35) {
    e35[e35.IPV4 = 0] = "IPV4", e35[e35.IPV6 = 1] = "IPV6", e35[e35.LOCAL = 2] = "LOCAL";
  })(b8 = nr.SocketDomain || (nr.SocketDomain = {}));
});
var mn = c((k) => {
  "use strict";
  var x8 = k && k.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(k, "__esModule", { value: true });
  k.Pkcs11Lib = k.TlsConnectionOptions = k.ServerTlsContext = k.ClientTlsContext = k.TlsContext = k.TlsContextOptions = k.SocketOptions = k.ClientBootstrap = k.InputStream = k.is_alpn_available = k.enable_logging = k.LogLevel = k.error_code_to_name = k.error_code_to_string = k.SocketDomain = k.SocketType = k.TlsVersion = void 0;
  var Ot = x8(tr()), Ss = Xi(), dE = uE(), yE = uE();
  Object.defineProperty(k, "TlsVersion", { enumerable: true, get: function() {
    return yE.TlsVersion;
  } });
  Object.defineProperty(k, "SocketType", { enumerable: true, get: function() {
    return yE.SocketType;
  } });
  Object.defineProperty(k, "SocketDomain", { enumerable: true, get: function() {
    return yE.SocketDomain;
  } });
  var RR = rr();
  function C8(e35) {
    return Ot.default.error_code_to_string(e35);
  }
  __name(C8, "C8");
  k.error_code_to_string = C8;
  function O8(e35) {
    return Ot.default.error_code_to_name(e35);
  }
  __name(O8, "O8");
  k.error_code_to_name = O8;
  var A8;
  (function(e35) {
    e35[e35.NONE = 0] = "NONE", e35[e35.FATAL = 1] = "FATAL", e35[e35.ERROR = 2] = "ERROR", e35[e35.WARN = 3] = "WARN", e35[e35.INFO = 4] = "INFO", e35[e35.DEBUG = 5] = "DEBUG", e35[e35.TRACE = 6] = "TRACE";
  })(A8 = k.LogLevel || (k.LogLevel = {}));
  function T8(e35) {
    Ot.default.io_logging_enable(e35);
  }
  __name(T8, "T8");
  k.enable_logging = T8;
  function P8() {
    return Ot.default.is_alpn_available();
  }
  __name(P8, "P8");
  k.is_alpn_available = P8;
  var lE = class extends Ss.NativeResource {
    static {
      __name(this, "lE");
    }
    constructor(t) {
      super(Ot.default.io_input_stream_new(16 * 1024)), this.source = t, this.source.on("data", (r) => {
        r = Buffer.isBuffer(r) ? r : Buffer.from(r.toString()), Ot.default.io_input_stream_append(this.native_handle(), r);
      }), this.source.on("end", () => {
        Ot.default.io_input_stream_append(this.native_handle(), void 0);
      });
    }
  };
  k.InputStream = lE;
  var pE = class extends Ss.NativeResource {
    static {
      __name(this, "pE");
    }
    constructor() {
      super(Ot.default.io_client_bootstrap_new());
    }
  };
  k.ClientBootstrap = pE;
  var fE = class extends Ss.NativeResource {
    static {
      __name(this, "fE");
    }
    constructor(t = dE.SocketType.STREAM, r = dE.SocketDomain.IPV6, n = 5e3, i = false, o = 0, s = 0, a = 0) {
      super(Ot.default.io_socket_options_new(t, r, n, o, s, a, i));
    }
  };
  k.SocketOptions = fE;
  var Yc = class e35 {
    static {
      __name(this, "e");
    }
    constructor() {
      this.min_tls_version = dE.TlsVersion.Default, this.alpn_list = [], this.verify_peer = true;
    }
    override_default_trust_store_from_path(t, r) {
      this.ca_dirpath = t, this.ca_filepath = r;
    }
    override_default_trust_store(t) {
      this.certificate_authority = t;
    }
    static create_client_with_mtls(t, r) {
      let n = new e35();
      return n.certificate = t, n.private_key = r, n.verify_peer = true, n;
    }
    static create_client_with_mtls_from_path(t, r) {
      let n = new e35();
      return n.certificate_filepath = t, n.private_key_filepath = r, n.verify_peer = true, n;
    }
    static create_client_with_mtls_pkcs12_from_path(t, r) {
      let n = new e35();
      return n.pkcs12_filepath = t, n.pkcs12_password = r, n.verify_peer = true, n;
    }
    static create_client_with_mtls_pkcs_from_path(t, r) {
      return this.create_client_with_mtls_pkcs12_from_path(t, r);
    }
    static create_client_with_mtls_pkcs11(t) {
      let r = new e35();
      return r.pkcs11_options = t, r.verify_peer = true, r;
    }
    static create_client_with_mtls_windows_cert_store_path(t) {
      let r = new e35();
      return r.windows_cert_store_path = t, r.verify_peer = true, r;
    }
    static create_server_with_mtls_from_path(t, r) {
      let n = new e35();
      return n.certificate_filepath = t, n.private_key_filepath = r, n.verify_peer = false, n;
    }
    static create_server_with_mtls_pkcs_from_path(t, r) {
      let n = new e35();
      return n.pkcs12_filepath = t, n.pkcs12_password = r, n.verify_peer = false, n;
    }
  };
  k.TlsContextOptions = Yc;
  var Jc = class extends Ss.NativeResource {
    static {
      __name(this, "Jc");
    }
    constructor(t) {
      if (t == null || t == null)
        throw new RR.CrtError("TlsContext constructor: ctx_opt not defined");
      super(Ot.default.io_tls_ctx_new(t.min_tls_version, t.ca_filepath, t.ca_dirpath, t.certificate_authority, t.alpn_list && t.alpn_list.length > 0 ? t.alpn_list.join(";") : void 0, t.certificate_filepath, t.certificate, t.private_key_filepath, t.private_key, t.pkcs12_filepath, t.pkcs12_password, t.pkcs11_options, t.windows_cert_store_path, t.verify_peer));
    }
  };
  k.TlsContext = Jc;
  var mE = class extends Jc {
    static {
      __name(this, "mE");
    }
    constructor(t) {
      t || (t = new Yc(), t.verify_peer = true), super(t);
    }
  };
  k.ClientTlsContext = mE;
  var hE = class extends Jc {
    static {
      __name(this, "hE");
    }
    constructor(t) {
      t || (t = new Yc(), t.verify_peer = false), super(t);
    }
  };
  k.ServerTlsContext = hE;
  var _E = class extends Ss.NativeResource {
    static {
      __name(this, "_E");
    }
    constructor(t, r, n = []) {
      if (t == null || t == null)
        throw new RR.CrtError("TlsConnectionOptions constructor: tls_ctx not defined");
      super(Ot.default.io_tls_connection_options_new(t.native_handle(), r, n && n.length > 0 ? n.join(";") : void 0)), this.tls_ctx = t, this.server_name = r, this.alpn_list = n;
    }
  };
  k.TlsConnectionOptions = _E;
  var _m = class e35 extends Ss.NativeResource {
    static {
      __name(this, "e");
    }
    constructor(t, r = e35.InitializeFinalizeBehavior.DEFAULT) {
      super(Ot.default.io_pkcs11_lib_new(t, r));
    }
    close() {
      Ot.default.io_pkcs11_lib_close(this.native_handle());
    }
  };
  k.Pkcs11Lib = _m;
  (function(e35) {
    let t;
    (function(r) {
      r[r.DEFAULT = 0] = "DEFAULT", r[r.OMIT = 1] = "OMIT", r[r.STRICT = 2] = "STRICT";
    })(t = e35.InitializeFinalizeBehavior || (e35.InitializeFinalizeBehavior = {}));
  })(_m = k.Pkcs11Lib || (k.Pkcs11Lib = {}));
});
var ym = c((le) => {
  "use strict";
  var I8 = le && le.__awaiter || function(e35, t, r, n) {
    function i(o) {
      return o instanceof r ? o : new r(function(s) {
        s(o);
      });
    }
    __name(i, "i");
    return new (r || (r = Promise))(function(o, s) {
      function a(p) {
        try {
          l(n.next(p));
        } catch (f) {
          s(f);
        }
      }
      __name(a, "a");
      function u(p) {
        try {
          l(n.throw(p));
        } catch (f) {
          s(f);
        }
      }
      __name(u, "u");
      function l(p) {
        p.done ? o(p.value) : i(p.value).then(a, u);
      }
      __name(l, "l");
      l((n = n.apply(e35, t || [])).next());
    });
  }, R8 = le && le.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(le, "__esModule", { value: true });
  le.aws_verify_sigv4a_signing = le.aws_sign_request = le.AwsSignedBodyHeaderType = le.AwsSignedBodyValue = le.AwsSignatureType = le.AwsSigningAlgorithm = le.AwsCredentialsProvider = void 0;
  var EE = R8(tr()), gE = rr(), q8 = mn(), vE = class extends EE.default.AwsCredentialsProvider {
    static {
      __name(this, "vE");
    }
    static newDefault(t = void 0) {
      return super.newDefault(t != null ? t.native_handle() : null);
    }
    static newStatic(t, r, n) {
      return super.newStatic(t, r, n);
    }
    static newCognito(t) {
      if (t == null || t == null)
        throw new gE.CrtError("AwsCredentialsProvider newCognito: Cognito config not defined");
      return super.newCognito(t, t.tlsContext != null ? t.tlsContext.native_handle() : new q8.ClientTlsContext().native_handle(), t.bootstrap != null ? t.bootstrap.native_handle() : null, t.httpProxyOptions ? t.httpProxyOptions.create_native_handle() : null);
    }
    static newX509(t) {
      if (t == null || t == null)
        throw new gE.CrtError("AwsCredentialsProvider newX509: X509 config not defined");
      return super.newX509(t, t.tlsContext.native_handle(), t.httpProxyOptions ? t.httpProxyOptions.create_native_handle() : null);
    }
  };
  le.AwsCredentialsProvider = vE;
  var M8;
  (function(e35) {
    e35[e35.SigV4 = 0] = "SigV4", e35[e35.SigV4Asymmetric = 1] = "SigV4Asymmetric";
  })(M8 = le.AwsSigningAlgorithm || (le.AwsSigningAlgorithm = {}));
  var D8;
  (function(e35) {
    e35[e35.HttpRequestViaHeaders = 0] = "HttpRequestViaHeaders", e35[e35.HttpRequestViaQueryParams = 1] = "HttpRequestViaQueryParams", e35[e35.HttpRequestChunk = 2] = "HttpRequestChunk", e35[e35.HttpRequestEvent = 3] = "HttpRequestEvent";
  })(D8 = le.AwsSignatureType || (le.AwsSignatureType = {}));
  var k8;
  (function(e35) {
    e35.EmptySha256 = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", e35.UnsignedPayload = "UNSIGNED-PAYLOAD", e35.StreamingAws4HmacSha256Payload = "STREAMING-AWS4-HMAC-SHA256-PAYLOAD", e35.StreamingAws4HmacSha256Events = "STREAMING-AWS4-HMAC-SHA256-EVENTS";
  })(k8 = le.AwsSignedBodyValue || (le.AwsSignedBodyValue = {}));
  var F8;
  (function(e35) {
    e35[e35.None = 0] = "None", e35[e35.XAmzContentSha256 = 1] = "XAmzContentSha256";
  })(F8 = le.AwsSignedBodyHeaderType || (le.AwsSignedBodyHeaderType = {}));
  function L8(e35, t) {
    return I8(this, void 0, void 0, function* () {
      return new Promise((r, n) => {
        try {
          EE.default.aws_sign_request(e35, t, (i) => {
            i == 0 ? r(e35) : n(new gE.CrtError(i));
          });
        } catch (i) {
          n(i);
        }
      });
    });
  }
  __name(L8, "L8");
  le.aws_sign_request = L8;
  function j8(e35, t, r, n, i, o) {
    return EE.default.aws_verify_sigv4a_signing(e35, t, r, n, i, o);
  }
  __name(j8, "j8");
  le.aws_verify_sigv4a_signing = j8;
});
var MR = c((si) => {
  "use strict";
  var U8 = si && si.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(si, "__esModule", { value: true });
  si.crc32c = si.crc32 = void 0;
  var qR = U8(tr());
  function B8(e35, t) {
    return qR.default.checksums_crc32(e35, t);
  }
  __name(B8, "B8");
  si.crc32 = B8;
  function W8(e35, t) {
    return qR.default.checksums_crc32c(e35, t);
  }
  __name(W8, "W8");
  si.crc32c = W8;
});
var kR = c((ai) => {
  "use strict";
  var V8 = ai && ai.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(ai, "__esModule", { value: true });
  ai.native_memory_dump = ai.native_memory = void 0;
  var DR = V8(tr());
  function $8() {
    return DR.default.native_memory();
  }
  __name($8, "$8");
  ai.native_memory = $8;
  function z8() {
    return DR.default.native_memory_dump();
  }
  __name(z8, "z8");
  ai.native_memory_dump = z8;
});
var LR = c((Pe) => {
  "use strict";
  var H8 = Pe && Pe.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(Pe, "__esModule", { value: true });
  Pe.hmac_sha256 = Pe.Sha256Hmac = Pe.hash_sha1 = Pe.Sha1Hash = Pe.hash_sha256 = Pe.Sha256Hash = Pe.hash_md5 = Pe.Md5Hash = void 0;
  var Wt = H8(tr()), FR = Xi(), Xc = class extends FR.NativeResource {
    static {
      __name(this, "Xc");
    }
    update(t) {
      Wt.default.hash_update(this.native_handle(), t);
    }
    finalize(t) {
      return Wt.default.hash_digest(this.native_handle(), t);
    }
    constructor(t) {
      super(t);
    }
  }, wE = class extends Xc {
    static {
      __name(this, "wE");
    }
    constructor() {
      super(Wt.default.hash_md5_new());
    }
  };
  Pe.Md5Hash = wE;
  function G8(e35, t) {
    return Wt.default.hash_md5_compute(e35, t);
  }
  __name(G8, "G8");
  Pe.hash_md5 = G8;
  var SE = class extends Xc {
    static {
      __name(this, "SE");
    }
    constructor() {
      super(Wt.default.hash_sha256_new());
    }
  };
  Pe.Sha256Hash = SE;
  function Q8(e35, t) {
    return Wt.default.hash_sha256_compute(e35, t);
  }
  __name(Q8, "Q8");
  Pe.hash_sha256 = Q8;
  var NE = class extends Xc {
    static {
      __name(this, "NE");
    }
    constructor() {
      super(Wt.default.hash_sha1_new());
    }
  };
  Pe.Sha1Hash = NE;
  function K8(e35, t) {
    return Wt.default.hash_sha1_compute(e35, t);
  }
  __name(K8, "K8");
  Pe.hash_sha1 = K8;
  var bE = class extends FR.NativeResource {
    static {
      __name(this, "bE");
    }
    update(t) {
      Wt.default.hmac_update(this.native_handle(), t);
    }
    finalize(t) {
      return Wt.default.hmac_digest(this.native_handle(), t);
    }
    constructor(t) {
      super(t);
    }
  }, xE = class extends bE {
    static {
      __name(this, "xE");
    }
    constructor(t) {
      super(Wt.default.hmac_sha256_new(t));
    }
  };
  Pe.Sha256Hmac = xE;
  function Y8(e35, t, r) {
    return Wt.default.hmac_sha256_compute(e35, t, r);
  }
  __name(Y8, "Y8");
  Pe.hmac_sha256 = Y8;
});
var Zc = c((gm) => {
  "use strict";
  Object.defineProperty(gm, "__esModule", { value: true });
  gm.BufferedEventEmitter = void 0;
  var J8 = D("events"), CE = class {
    static {
      __name(this, "CE");
    }
    constructor(t, r) {
      this.event = t, this.args = r;
    }
  }, OE = class extends J8.EventEmitter {
    static {
      __name(this, "OE");
    }
    constructor() {
      super(), this.corked = false;
    }
    cork() {
      this.corked = true;
    }
    uncork() {
      for (this.corked = false; this.eventQueue; ) {
        let t = this.eventQueue;
        super.emit(t.event, ...t.args), this.eventQueue = this.eventQueue.next;
      }
    }
    emit(t, ...r) {
      if (this.corked) {
        let n = this.lastQueuedEvent;
        return this.lastQueuedEvent = new CE(t, r), n ? n.next = this.lastQueuedEvent : this.eventQueue = this.lastQueuedEvent, this.listeners(t).length > 0;
      }
      return super.emit(t, ...r);
    }
  };
  gm.BufferedEventEmitter = OE;
});
var UR = c((pe) => {
  "use strict";
  Object.defineProperty(pe, "__esModule", { value: true });
  pe.unmarshalInt64BigintFromBuffer = pe.marshalInt64BigintAsBuffer = pe.MIN_INT64 = pe.MAX_INT64 = pe.MIN_INT32 = pe.MAX_INT32 = pe.MIN_INT16 = pe.MAX_INT16 = pe.MIN_INT8 = pe.MAX_INT8 = void 0;
  var jR = rr();
  pe.MAX_INT8 = 127;
  pe.MIN_INT8 = -128;
  pe.MAX_INT16 = 32767;
  pe.MIN_INT16 = -32768;
  pe.MAX_INT32 = 2147483647;
  pe.MIN_INT32 = -2147483648;
  pe.MAX_INT64 = BigInt("9223372036854775807");
  pe.MIN_INT64 = BigInt("-9223372036854775808");
  var Ns = BigInt("256");
  function X8(e35) {
    if (e35 < pe.MIN_INT64 || e35 > pe.MAX_INT64)
      throw new jR.CrtError("marshalInt64BigintAsBuffer expects a value that can fit in 8 bytes");
    let t = new Uint8Array(8);
    if (e35 < 0) {
      e35 = -e35 - BigInt(1);
      for (let r = 0; r < 8; ++r)
        t[r] = 255 - Number(e35 % Ns), e35 /= Ns;
    } else
      for (let r = 0; r < 8; ++r)
        t[r] = Number(e35 % Ns), e35 /= Ns;
    return t;
  }
  __name(X8, "X8");
  pe.marshalInt64BigintAsBuffer = X8;
  function Z8(e35) {
    let t = BigInt(0), r = new Uint8Array(e35);
    if (r.length != 8)
      throw new jR.CrtError("unmarshalInt64BigintFromBuffer expects a byte buffer of length 8");
    let n = BigInt(1);
    if ((r[7] & 128) != 0) {
      for (let o = 0; o < r.length; ++o) {
        let s = BigInt(255 - r[o]);
        t += s * n, n *= Ns;
      }
      t += BigInt(1), t = -t;
    } else
      for (let o = 0; o < r.length; ++o) {
        let s = BigInt(r[o]);
        t += s * n, n *= Ns;
      }
    return t;
  }
  __name(Z8, "Z8");
  pe.unmarshalInt64BigintFromBuffer = Z8;
});
var $R = c((ee) => {
  "use strict";
  var e52 = ee && ee.__createBinding || (Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  }), t5 = ee && ee.__setModuleDefault || (Object.create ? function(e35, t) {
    Object.defineProperty(e35, "default", { enumerable: true, value: t });
  } : function(e35, t) {
    e35.default = t;
  }), AE = ee && ee.__importStar || function(e35) {
    if (e35 && e35.__esModule)
      return e35;
    var t = {};
    if (e35 != null)
      for (var r in e35)
        r !== "default" && Object.prototype.hasOwnProperty.call(e35, r) && e52(t, e35, r);
    return t5(t, e35), t;
  }, vm = ee && ee.__awaiter || function(e35, t, r, n) {
    function i(o) {
      return o instanceof r ? o : new r(function(s) {
        s(o);
      });
    }
    __name(i, "i");
    return new (r || (r = Promise))(function(o, s) {
      function a(p) {
        try {
          l(n.next(p));
        } catch (f) {
          s(f);
        }
      }
      __name(a, "a");
      function u(p) {
        try {
          l(n.throw(p));
        } catch (f) {
          s(f);
        }
      }
      __name(u, "u");
      function l(p) {
        p.done ? o(p.value) : i(p.value).then(a, u);
      }
      __name(l, "l");
      l((n = n.apply(e35, t || [])).next());
    });
  }, r5 = ee && ee.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(ee, "__esModule", { value: true });
  ee.ClientStream = ee.ClientConnection = ee.MessageType = ee.MessageFlags = ee.Header = ee.HeaderType = void 0;
  var BR = Xi(), WR = Zc(), se = rr(), Em = AE(mn()), ir = AE(UR()), wm = AE(fm()), ci = r5(tr()), ge;
  (function(e35) {
    e35[e35.BooleanTrue = 0] = "BooleanTrue", e35[e35.BooleanFalse = 1] = "BooleanFalse", e35[e35.Byte = 2] = "Byte", e35[e35.Int16 = 3] = "Int16", e35[e35.Int32 = 4] = "Int32", e35[e35.Int64 = 5] = "Int64", e35[e35.ByteBuffer = 6] = "ByteBuffer", e35[e35.String = 7] = "String", e35[e35.Timestamp = 8] = "Timestamp", e35[e35.UUID = 9] = "UUID";
  })(ge = ee.HeaderType || (ee.HeaderType = {}));
  var n5 = 127, Sm = class e35 {
    static {
      __name(this, "e");
    }
    constructor(t, r, n) {
      this.name = t, this.type = r, this.value = n;
    }
    static validateHeaderName(t) {
      if (t.length == 0 || t.length > n5)
        throw new se.CrtError(`Event stream header name (${t}) is not valid`);
    }
    static newBoolean(t, r) {
      return e35.validateHeaderName(t), r ? new e35(t, ge.BooleanTrue) : new e35(t, ge.BooleanFalse);
    }
    static newByte(t, r) {
      if (e35.validateHeaderName(t), r >= ir.MIN_INT8 && r <= ir.MAX_INT8 && Number.isSafeInteger(r))
        return new e35(t, ge.Byte, r);
      throw new se.CrtError(`Illegal value for eventstream byte-valued header: ${r}`);
    }
    static newInt16(t, r) {
      if (e35.validateHeaderName(t), r >= ir.MIN_INT16 && r <= ir.MAX_INT16 && Number.isSafeInteger(r))
        return new e35(t, ge.Int16, r);
      throw new se.CrtError(`Illegal value for eventstream int16-valued header: ${r}`);
    }
    static newInt32(t, r) {
      if (e35.validateHeaderName(t), r >= ir.MIN_INT32 && r <= ir.MAX_INT32 && Number.isSafeInteger(r))
        return new e35(t, ge.Int32, r);
      throw new se.CrtError(`Illegal value for eventstream int32-valued header: ${r}`);
    }
    static newInt64FromNumber(t, r) {
      if (e35.validateHeaderName(t), Number.isSafeInteger(r))
        return new e35(t, ge.Int64, ir.marshalInt64BigintAsBuffer(BigInt(r)));
      throw new se.CrtError(`Illegal value for eventstream int64-valued header: ${r}`);
    }
    static newInt64FromBigint(t, r) {
      if (e35.validateHeaderName(t), r >= ir.MIN_INT64 && r <= ir.MAX_INT64)
        return new e35(t, ge.Int64, ir.marshalInt64BigintAsBuffer(r));
      throw new se.CrtError(`Illegal value for eventstream int64-valued header: ${r}`);
    }
    static newByteBuffer(t, r) {
      return e35.validateHeaderName(t), new e35(t, ge.ByteBuffer, r);
    }
    static newString(t, r) {
      return e35.validateHeaderName(t), new e35(t, ge.String, r);
    }
    static newTimeStampFromSecondsSinceEpoch(t, r) {
      if (e35.validateHeaderName(t), Number.isSafeInteger(r) && r >= 0)
        return new e35(t, ge.Timestamp, r);
      throw new se.CrtError(`Illegal value for eventstream timestamp-valued header: ${r}`);
    }
    static newTimeStampFromDate(t, r) {
      e35.validateHeaderName(t);
      let n = r.getTime();
      if (Number.isSafeInteger(n))
        return new e35(t, ge.Timestamp, n);
      throw new se.CrtError(`Illegal value for eventstream timestamp-valued header: ${r}`);
    }
    static newUUID(t, r) {
      if (e35.validateHeaderName(t), r.byteLength == 16)
        return new e35(t, ge.UUID, r);
      throw new se.CrtError(`Illegal value for eventstream uuid-valued header: ${r}`);
    }
    toValue(t) {
      if (t != this.type)
        throw new se.CrtError(`Header of type (${this.type}) cannot be converted to type (${t})`);
      return this.value;
    }
    asBoolean() {
      switch (this.type) {
        case ge.BooleanFalse:
          return false;
        case ge.BooleanTrue:
          return true;
        default:
          throw new se.CrtError(`Header of type (${this.type}) cannot be converted to type (boolean)`);
      }
    }
    asByte() {
      return this.toValue(ge.Byte);
    }
    asInt16() {
      return this.toValue(ge.Int16);
    }
    asInt32() {
      return this.toValue(ge.Int32);
    }
    asInt64() {
      return ir.unmarshalInt64BigintFromBuffer(this.toValue(ge.Int64));
    }
    asByteBuffer() {
      return this.toValue(ge.ByteBuffer);
    }
    asString() {
      return this.toValue(ge.String);
    }
    asTimestamp() {
      return this.toValue(ge.Timestamp);
    }
    asUUID() {
      return this.toValue(ge.UUID);
    }
  };
  ee.Header = Sm;
  var i5;
  (function(e35) {
    e35[e35.None = 0] = "None", e35[e35.ConnectionAccepted = 1] = "ConnectionAccepted", e35[e35.TerminateStream = 2] = "TerminateStream";
  })(i5 = ee.MessageFlags || (ee.MessageFlags = {}));
  var o5;
  (function(e35) {
    e35[e35.ApplicationMessage = 0] = "ApplicationMessage", e35[e35.ApplicationError = 1] = "ApplicationError", e35[e35.Ping = 2] = "Ping", e35[e35.PingResponse = 3] = "PingResponse", e35[e35.Connect = 4] = "Connect", e35[e35.ConnectAck = 5] = "ConnectAck", e35[e35.ProtocolError = 6] = "ProtocolError", e35[e35.InternalError = 7] = "InternalError";
  })(o5 = ee.MessageType || (ee.MessageType = {}));
  function s5(e35) {
    return Array.from(e35, (t) => new Sm(t.name, t.type, t.value));
  }
  __name(s5, "s5");
  function VR(e35) {
    let t = { type: e35.type, flags: e35.flags, payload: e35.payload };
    return e35.headers && (t.headers = s5(e35.headers)), t;
  }
  __name(VR, "VR");
  var ot;
  (function(e35) {
    e35[e35.None = 0] = "None", e35[e35.Connecting = 1] = "Connecting", e35[e35.Connected = 2] = "Connected", e35[e35.Disconnected = 3] = "Disconnected", e35[e35.Closed = 4] = "Closed";
  })(ot || (ot = {}));
  var eu = class e35 extends (0, BR.NativeResourceMixin)(WR.BufferedEventEmitter) {
    static {
      __name(this, "e");
    }
    constructor(t) {
      if (t === void 0)
        throw new se.CrtError("Invalid configuration passed to eventstream ClientConnection constructor");
      super(), this.state = ot.None, this._super(ci.default.event_stream_client_connection_new(this, t, (r, n) => {
        e35._s_on_disconnect(r, n);
      }, (r, n) => {
        e35._s_on_protocol_message(r, n);
      }, t.socketOptions ? t.socketOptions.native_handle() : null, t.tlsCtx ? t.tlsCtx.native_handle() : null));
    }
    close() {
      this.state != ot.Closed && (this.state = ot.Closed, ci.default.event_stream_client_connection_close(this.native_handle()));
    }
    connect(t) {
      return vm(this, void 0, void 0, function* () {
        let r, n = new Promise((i, o) => {
          if (!t) {
            o(new se.CrtError("Invalid options passed to event stream ClientConnection.connect"));
            return;
          }
          if (this.state != ot.None) {
            o(new se.CrtError(`Event stream connection in a state (${this.state}) where connect() is not allowed.`));
            return;
          }
          if (this.state = ot.Connecting, t.cancelController) {
            let a = /* @__PURE__ */ __name(() => {
              o(new se.CrtError("Event stream connection connect() cancelled by external request.")), setImmediate(() => {
                this.close();
              });
            }, "a");
            if (r = t.cancelController.addListener(a), !r)
              return;
          }
          function s(a, u) {
            return e35._s_on_connection_setup(i, o, a, u);
          }
          __name(s, "s");
          try {
            ci.default.event_stream_client_connection_connect(this.native_handle(), s);
          } catch (a) {
            this.state = ot.Disconnected, o(a);
          }
        });
        return wm.makeSelfCleaningPromise(n, r);
      });
    }
    sendProtocolMessage(t) {
      return vm(this, void 0, void 0, function* () {
        let r, n = new Promise((i, o) => {
          try {
            let s = /* @__PURE__ */ __name(function(a) {
              return e35._s_on_connection_send_protocol_message_completion(i, o, a);
            }, "s");
            if (!t) {
              o(new se.CrtError("Invalid options passed to event stream ClientConnection.sendProtocolMessage"));
              return;
            }
            if (!this.isConnected()) {
              o(new se.CrtError(`Event stream connection in a state (${this.state}) where sending protocol messages is not allowed.`));
              return;
            }
            if (t.cancelController) {
              let a = /* @__PURE__ */ __name(() => {
                o(new se.CrtError("Event stream connection sendProtocolMessage() cancelled by external request.")), setImmediate(() => {
                  this.close();
                });
              }, "a");
              if (r = t.cancelController.addListener(a), !r)
                return;
            }
            ci.default.event_stream_client_connection_send_protocol_message(this.native_handle(), t, s);
          } catch (s) {
            o(s);
          }
        });
        return wm.makeSelfCleaningPromise(n, r);
      });
    }
    isConnected() {
      return this.state == ot.Connected;
    }
    newStream() {
      if (!this.isConnected())
        throw new se.CrtError(`Event stream connection in a state (${this.state}) where creating new streams is forbidden.`);
      return new bs(this);
    }
    on(t, r) {
      return super.on(t, r), this;
    }
    static _s_on_connection_setup(t, r, n, i) {
      i == 0 && n.state == ot.Connecting ? (n.state = ot.Connected, t()) : (n.state != ot.Closed && (n.state = ot.Disconnected), r(Em.error_code_to_string(i)));
    }
    static _s_on_disconnect(t, r) {
      t.state != ot.Closed && (t.state = ot.Disconnected), process.nextTick(() => {
        t.emit("disconnection", { errorCode: r });
      });
    }
    static _s_on_protocol_message(t, r) {
      process.nextTick(() => {
        t.emit("protocolMessage", { message: VR(r) });
      });
    }
    static _s_on_connection_send_protocol_message_completion(t, r, n) {
      n == 0 ? t() : r(Em.error_code_to_string(n));
    }
  };
  ee.ClientConnection = eu;
  eu.DISCONNECTION = "disconnection";
  eu.PROTOCOL_MESSAGE = "protocolMessage";
  var st;
  (function(e35) {
    e35[e35.None = 0] = "None", e35[e35.Activating = 1] = "Activating", e35[e35.Activated = 2] = "Activated", e35[e35.Ended = 3] = "Ended", e35[e35.Closed = 4] = "Closed";
  })(st || (st = {}));
  var bs = class e35 extends (0, BR.NativeResourceMixin)(WR.BufferedEventEmitter) {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super(), this._super(ci.default.event_stream_client_stream_new(this, t.native_handle(), (r) => {
        e35._s_on_stream_ended(r);
      }, (r, n) => {
        e35._s_on_stream_message(r, n);
      })), this.state = st.None;
    }
    close() {
      this.state != st.Closed && (this.state = st.Closed, ci.default.event_stream_client_stream_close(this.native_handle()));
    }
    activate(t) {
      return vm(this, void 0, void 0, function* () {
        let r, n = new Promise((i, o) => {
          try {
            let s = /* @__PURE__ */ __name(function(a, u) {
              return e35._s_on_stream_activated(i, o, a, u);
            }, "s");
            if (this.state != st.None) {
              o(new se.CrtError(`Event stream in a state (${this.state}) where activation is not allowed.`));
              return;
            }
            if (t === void 0) {
              this.state = st.Ended, o(new se.CrtError("Invalid options passed to ClientStream.activate"));
              return;
            }
            if (this.state = st.Activating, t.cancelController) {
              let a = /* @__PURE__ */ __name(() => {
                o(new se.CrtError("Event stream activate() cancelled by external request.")), setImmediate(() => {
                  this.close();
                });
              }, "a");
              if (r = t.cancelController.addListener(a), !r)
                return;
            }
            ci.default.event_stream_client_stream_activate(this.native_handle(), t, s);
          } catch (s) {
            this.state = st.Ended, o(s);
          }
        });
        return wm.makeSelfCleaningPromise(n, r);
      });
    }
    sendMessage(t) {
      return vm(this, void 0, void 0, function* () {
        let r, n = new Promise((i, o) => {
          try {
            let s = /* @__PURE__ */ __name(function(a) {
              return e35._s_on_stream_send_message_completion(i, o, a);
            }, "s");
            if (!t) {
              o(new se.CrtError("Invalid options passed to ClientStream.sendMessage"));
              return;
            }
            if (this.state != st.Activated) {
              o(new se.CrtError(`Event stream in a state (${this.state}) where sending messages is not allowed.`));
              return;
            }
            if (t.cancelController) {
              let a = /* @__PURE__ */ __name(() => {
                o(new se.CrtError("Event stream sendMessage() cancelled by external request.")), setImmediate(() => {
                  this.close();
                });
              }, "a");
              if (r = t.cancelController.addListener(a), !r)
                return;
            }
            ci.default.event_stream_client_stream_send_message(this.native_handle(), t, s);
          } catch (s) {
            o(s);
          }
        });
        return wm.makeSelfCleaningPromise(n, r);
      });
    }
    isActive() {
      return this.state == st.Activated;
    }
    on(t, r) {
      return super.on(t, r), this;
    }
    static _s_on_stream_activated(t, r, n, i) {
      i == 0 && n.state == st.Activating ? (n.state = st.Activated, t()) : (n.state != st.Closed && (n.state = st.Ended), r(Em.error_code_to_string(i)));
    }
    static _s_on_stream_send_message_completion(t, r, n) {
      n == 0 ? t() : r(Em.error_code_to_string(n));
    }
    static _s_on_stream_ended(t) {
      process.nextTick(() => {
        t.emit(e35.ENDED, {});
      });
    }
    static _s_on_stream_message(t, r) {
      process.nextTick(() => {
        t.emit(e35.MESSAGE, { message: VR(r) });
      });
    }
  };
  ee.ClientStream = bs;
  bs.ENDED = "ended";
  bs.MESSAGE = "message";
});
var PE = c((Lr) => {
  "use strict";
  Object.defineProperty(Lr, "__esModule", { value: true });
  Lr.CommonHttpProxyOptions = Lr.HttpProxyAuthenticationType = Lr.HttpVersion = void 0;
  var a5;
  (function(e35) {
    e35[e35.Unknown = 0] = "Unknown", e35[e35.Http1_0 = 1] = "Http1_0", e35[e35.Http1_1 = 2] = "Http1_1", e35[e35.Http2 = 3] = "Http2";
  })(a5 = Lr.HttpVersion || (Lr.HttpVersion = {}));
  var zR;
  (function(e35) {
    e35[e35.None = 0] = "None", e35[e35.Basic = 1] = "Basic";
  })(zR = Lr.HttpProxyAuthenticationType || (Lr.HttpProxyAuthenticationType = {}));
  var TE = class {
    static {
      __name(this, "TE");
    }
    constructor(t, r, n = zR.None, i, o) {
      this.host_name = t, this.port = r, this.auth_method = n, this.auth_username = i, this.auth_password = o;
    }
  };
  Lr.CommonHttpProxyOptions = TE;
});
var xm = c((re) => {
  "use strict";
  var c5 = re && re.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(re, "__esModule", { value: true });
  re.HttpClientConnectionManager = re.HttpClientStream = re.HttpStream = re.HttpClientConnection = re.HttpProxyOptions = re.HttpProxyConnectionType = re.HttpConnection = re.HttpRequest = re.HttpHeaders = re.HttpProxyAuthenticationType = void 0;
  var Vt = c5(tr()), ME = Xi(), Zi = rr(), HR = PE(), u5 = PE();
  Object.defineProperty(re, "HttpProxyAuthenticationType", { enumerable: true, get: function() {
    return u5.HttpProxyAuthenticationType;
  } });
  var GR = Zc();
  re.HttpHeaders = Vt.default.HttpHeaders;
  var d5 = Vt.default.HttpRequest, IE = class extends d5 {
    static {
      __name(this, "IE");
    }
    constructor(t, r, n, i) {
      super(t, r, n, i?.native_handle());
    }
  };
  re.HttpRequest = IE;
  var eo = class extends (0, ME.NativeResourceMixin)(GR.BufferedEventEmitter) {
    static {
      __name(this, "eo");
    }
    constructor(t) {
      super(), this._super(t);
    }
    close() {
      Vt.default.http_connection_close(this.native_handle());
    }
    on(t, r) {
      return super.on(t, r), t == "connect" && process.nextTick(() => {
        this.uncork();
      }), this;
    }
  };
  re.HttpConnection = eo;
  eo.CONNECT = "connect";
  eo.ERROR = "error";
  eo.CLOSE = "close";
  var QR;
  (function(e35) {
    e35[e35.Legacy = 0] = "Legacy", e35[e35.Forwarding = 1] = "Forwarding", e35[e35.Tunneling = 2] = "Tunneling";
  })(QR = re.HttpProxyConnectionType || (re.HttpProxyConnectionType = {}));
  var RE = class extends HR.CommonHttpProxyOptions {
    static {
      __name(this, "RE");
    }
    constructor(t, r, n = HR.HttpProxyAuthenticationType.None, i, o, s, a) {
      super(t, r, n, i, o), this.tls_opts = s, this.connection_type = a;
    }
    create_native_handle() {
      return Vt.default.http_proxy_options_new(this.host_name, this.port, this.auth_method, this.auth_username, this.auth_password, this.tls_opts ? this.tls_opts.native_handle() : void 0, this.connection_type ? this.connection_type : QR.Legacy);
    }
  };
  re.HttpProxyOptions = RE;
  var Nm = class extends eo {
    static {
      __name(this, "Nm");
    }
    constructor(t, r, n, i, o, s, a) {
      if (i == null || i == null)
        throw new Zi.CrtError("HttpClientConnection constructor: socket_options not defined");
      super(a || Vt.default.http_connection_new(t != null ? t.native_handle() : null, (u, l) => {
        this._on_setup(u, l);
      }, (u, l) => {
        this._on_shutdown(u, l);
      }, r, n, i.native_handle(), o ? o.native_handle() : void 0, s ? s.create_native_handle() : void 0)), this.bootstrap = t, this.socket_options = i, this.tls_opts = o;
    }
    _on_setup(t, r) {
      if (r) {
        this.emit("error", new Zi.CrtError(r));
        return;
      }
      this.emit("connect");
    }
    _on_shutdown(t, r) {
      if (r) {
        this.emit("error", new Zi.CrtError(r));
        return;
      }
      this.emit("close");
    }
    request(t) {
      let r, n = /* @__PURE__ */ __name((a, u) => {
        r._on_response(a, u);
      }, "n"), i = /* @__PURE__ */ __name((a) => {
        r._on_body(a);
      }, "i"), o = /* @__PURE__ */ __name((a) => {
        r._on_complete(a);
      }, "o"), s = Vt.default.http_stream_new(this.native_handle(), t, o, n, i);
      return r = new hn(s, this, t);
    }
  };
  re.HttpClientConnection = Nm;
  var bm = class extends (0, ME.NativeResourceMixin)(GR.BufferedEventEmitter) {
    static {
      __name(this, "bm");
    }
    constructor(t, r) {
      super(), this.connection = r, this._super(t), this.cork();
    }
    activate() {
      Vt.default.http_stream_activate(this.native_handle());
    }
    close() {
      Vt.default.http_stream_close(this.native_handle());
    }
    _on_body(t) {
      this.emit("data", t);
    }
    _on_complete(t) {
      if (t) {
        this.emit("error", new Zi.CrtError(t)), this.close();
        return;
      }
      this.on("end", () => {
        this.close();
      }), this.emit("end");
    }
  };
  re.HttpStream = bm;
  var hn = class extends bm {
    static {
      __name(this, "hn");
    }
    constructor(t, r, n) {
      super(t, r), this.request = n;
    }
    status_code() {
      return this.response_status_code;
    }
    on(t, r) {
      return super.on(t, r), t == "response" && process.nextTick(() => {
        this.uncork();
      }), this;
    }
    _on_response(t, r) {
      this.response_status_code = t;
      let n = new re.HttpHeaders(r);
      this.emit("response", t, n);
    }
  };
  re.HttpClientStream = hn;
  hn.RESPONSE = "response";
  hn.DATA = "data";
  hn.ERROR = "error";
  hn.END = "end";
  hn.HEADERS = "headers";
  var qE = class extends ME.NativeResource {
    static {
      __name(this, "qE");
    }
    constructor(t, r, n, i, o, s, a, u) {
      if (s == null || s == null)
        throw new Zi.CrtError("HttpClientConnectionManager constructor: socket_options not defined");
      super(Vt.default.http_connection_manager_new(t != null ? t.native_handle() : null, r, n, i, o, s.native_handle(), a ? a.native_handle() : void 0, u ? u.create_native_handle() : void 0, void 0)), this.bootstrap = t, this.host = r, this.port = n, this.max_connections = i, this.initial_window_size = o, this.socket_options = s, this.tls_opts = a, this.proxy_options = u, this.connections = /* @__PURE__ */ new Map();
    }
    acquire() {
      return new Promise((t, r) => {
        let n = /* @__PURE__ */ __name((i, o) => {
          if (o) {
            r(new Zi.CrtError(o));
            return;
          }
          let s = this.connections.get(i);
          s || (s = new Nm(this.bootstrap, this.host, this.port, this.socket_options, this.tls_opts, this.proxy_options, i), this.connections.set(i, s), s.on("close", () => {
            this.connections.delete(i);
          })), t(s);
        }, "n");
        Vt.default.http_connection_manager_acquire(this.native_handle(), n);
      });
    }
    release(t) {
      if (t == null || t == null)
        throw new Zi.CrtError("HttpClientConnectionManager release: connection not defined");
      Vt.default.http_connection_manager_release(this.native_handle(), t.native_handle());
    }
    close() {
      Vt.default.http_connection_manager_close(this.native_handle());
    }
  };
  re.HttpClientConnectionManager = qE;
});
var Cm = c((or) => {
  "use strict";
  Object.defineProperty(or, "__esModule", { value: true });
  or.DEFAULT_RECONNECT_MIN_SEC = or.DEFAULT_RECONNECT_MAX_SEC = or.MqttWill = or.QoS = void 0;
  var l5;
  (function(e35) {
    e35[e35.AtMostOnce = 0] = "AtMostOnce", e35[e35.AtLeastOnce = 1] = "AtLeastOnce", e35[e35.ExactlyOnce = 2] = "ExactlyOnce";
  })(l5 = or.QoS || (or.QoS = {}));
  var DE = class {
    static {
      __name(this, "DE");
    }
    constructor(t, r, n, i = false) {
      this.topic = t, this.qos = r, this.payload = n, this.retain = i;
    }
  };
  or.MqttWill = DE;
  or.DEFAULT_RECONNECT_MAX_SEC = 128;
  or.DEFAULT_RECONNECT_MIN_SEC = 1;
});
var FE = c((je) => {
  "use strict";
  var p5 = je && je.__createBinding || (Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  }), f5 = je && je.__setModuleDefault || (Object.create ? function(e35, t) {
    Object.defineProperty(e35, "default", { enumerable: true, value: t });
  } : function(e35, t) {
    e35.default = t;
  }), m5 = je && je.__importStar || function(e35) {
    if (e35 && e35.__esModule)
      return e35;
    var t = {};
    if (e35 != null)
      for (var r in e35)
        r !== "default" && Object.prototype.hasOwnProperty.call(e35, r) && p5(t, e35, r);
    return f5(t, e35), t;
  };
  Object.defineProperty(je, "__esModule", { value: true });
  je.extractRegionFromEndpoint = je.buildMqtt5FinalUsername = je.populate_username_string_with_custom_authorizer = je.is_string_and_not_empty = je.add_to_username_parameter = void 0;
  var h5 = m5(mm());
  function Om(e35, t, r) {
    let n = e35;
    return n.indexOf("?") != -1 ? n += "&" : n += "?", t.indexOf(r) != -1 ? n + t : n + r + t;
  }
  __name(Om, "Om");
  je.add_to_username_parameter = Om;
  function jr(e35) {
    return e35 != null && typeof e35 == "string" && e35 != "";
  }
  __name(jr, "jr");
  je.is_string_and_not_empty = jr;
  function _5(e35, t, r, n, i, o, s) {
    let a = "";
    if (e35 && (a += e35), jr(t) == false ? jr(i) && i && (a += i) : a += t, jr(r) && r && (a = Om(a, r, "x-amz-customauthorizer-name=")), jr(n) && n && (a = Om(a, n, "x-amz-customauthorizer-signature="), (jr(o) && o || jr(s) && s) && console.log("Warning: Signed custom authorizers with signature will not work without a token key name and token value. Your connection may be rejected/stalled on the IoT Core side due to this. Please set the token key name and token value to connect to a signed custom authorizer.")), jr(n) || jr(s) || jr(o)) {
      if (!s || !o)
        throw new Error("Token-based custom authentication requires all token-related properties to be set");
      a = Om(a, s, o + "=");
    }
    return a;
  }
  __name(_5, "_5");
  je.populate_username_string_with_custom_authorizer = _5;
  function kE(e35, t, r) {
    t && r.push([e35, t]);
  }
  __name(kE, "kE");
  function y5(e35) {
    let t = "", r = [];
    if (e35) {
      let n = false;
      if ((e35.tokenValue || e35.tokenKeyName || e35.tokenSignature) && (n = true, !e35.tokenValue || !e35.tokenKeyName || !e35.tokenSignature))
        throw new Error("Token-based custom authentication requires all token-related properties to be set");
      let i = e35.username, o = (i ?? "").split("?"), s = o.slice(1);
      if (t = o[0], s.length > 1)
        throw new Error("Custom auth username property value is invalid");
      s.length == 1 && s[0].split("&").forEach((a, u, l) => {
        var p;
        let f = a.split("=");
        r.push([f[0], (p = f[1]) !== null && p !== void 0 ? p : ""]);
      }), kE("x-amz-customauthorizer-name", e35.authorizerName, r), n && (kE(e35.tokenKeyName, e35.tokenValue, r), kE("x-amz-customauthorizer-signature", e35.tokenSignature, r));
    }
    return r.push(["SDK", "NodeJSv2"]), r.push(["Version", h5.crt_version()]), (t ?? "") + "?" + r.map((n) => `${n[0]}=${n[1]}`).join("&");
  }
  __name(y5, "y5");
  je.buildMqtt5FinalUsername = y5;
  function g5(e35) {
    let t = /^[\w\-]+\.[\w\-]+\.([\w+\-]+)\./, r = e35.match(t);
    if (r)
      return r[1];
    throw new Error("AWS region could not be extracted from endpoint.  Use 'region' property on WebsocketConfig to set manually.");
  }
  __name(g5, "g5");
  je.extractRegionFromEndpoint = g5;
});
var JR = c(($t) => {
  "use strict";
  var v5 = $t && $t.__createBinding || (Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  }), E5 = $t && $t.__setModuleDefault || (Object.create ? function(e35, t) {
    Object.defineProperty(e35, "default", { enumerable: true, value: t });
  } : function(e35, t) {
    e35.default = t;
  }), UE = $t && $t.__importStar || function(e35) {
    if (e35 && e35.__esModule)
      return e35;
    var t = {};
    if (e35 != null)
      for (var r in e35)
        r !== "default" && Object.prototype.hasOwnProperty.call(e35, r) && v5(t, e35, r);
    return E5(t, e35), t;
  }, w5 = $t && $t.__awaiter || function(e35, t, r, n) {
    function i(o) {
      return o instanceof r ? o : new r(function(s) {
        s(o);
      });
    }
    __name(i, "i");
    return new (r || (r = Promise))(function(o, s) {
      function a(p) {
        try {
          l(n.next(p));
        } catch (f) {
          s(f);
        }
      }
      __name(a, "a");
      function u(p) {
        try {
          l(n.throw(p));
        } catch (f) {
          s(f);
        }
      }
      __name(u, "u");
      function l(p) {
        p.done ? o(p.value) : i(p.value).then(a, u);
      }
      __name(l, "l");
      l((n = n.apply(e35, t || [])).next());
    });
  };
  Object.defineProperty($t, "__esModule", { value: true });
  $t.AwsIotMqttConnectionConfigBuilder = void 0;
  var KR = Cm(), ui = UE(mn()), xs = mn(), S5 = UE(mm()), YR = rr(), tu = ym(), LE = UE(FE()), jE = class e35 {
    static {
      __name(this, "e");
    }
    constructor(t) {
      this.tls_ctx_options = t, this.params = { client_id: "", host_name: "", socket_options: new ui.SocketOptions(), port: 8883, use_websocket: false, clean_session: false, keep_alive: void 0, will: void 0, username: "", password: void 0, tls_ctx: void 0, reconnect_min_sec: KR.DEFAULT_RECONNECT_MIN_SEC, reconnect_max_sec: KR.DEFAULT_RECONNECT_MAX_SEC }, this.is_using_custom_authorizer = false;
    }
    static new_mtls_builder_from_path(t, r) {
      let n = new e35(xs.TlsContextOptions.create_client_with_mtls_from_path(t, r));
      return n.params.port = 8883, ui.is_alpn_available() && n.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca"), n;
    }
    static new_mtls_builder(t, r) {
      let n = new e35(xs.TlsContextOptions.create_client_with_mtls(t, r));
      return n.params.port = 8883, ui.is_alpn_available() && n.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca"), n;
    }
    static new_mtls_pkcs11_builder(t) {
      let r = new e35(xs.TlsContextOptions.create_client_with_mtls_pkcs11(t));
      return r.params.port = 8883, ui.is_alpn_available() && r.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca"), r;
    }
    static new_mtls_pkcs12_builder(t) {
      let r = new e35(xs.TlsContextOptions.create_client_with_mtls_pkcs12_from_path(t.pkcs12_file, t.pkcs12_password));
      return r.params.port = 8883, ui.is_alpn_available() && r.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca"), r;
    }
    static new_mtls_windows_cert_store_path_builder(t) {
      let r = new e35(xs.TlsContextOptions.create_client_with_mtls_windows_cert_store_path(t));
      return r.params.port = 8883, ui.is_alpn_available() && r.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca"), r;
    }
    static new_default_builder() {
      let t = new ui.TlsContextOptions();
      return new e35(t);
    }
    static new_websocket_builder(...t) {
      return this.new_with_websockets(...t);
    }
    static configure_websocket_handshake(t, r) {
      if (r) {
        if (t == null || t == null)
          throw new YR.CrtError("AwsIotMqttConnectionConfigBuilder configure_websocket_handshake: builder not defined");
        t.params.websocket_handshake_transform = (n, i) => w5(this, void 0, void 0, function* () {
          var o, s, a;
          let u = (s = (o = r.create_signing_config) === null || o === void 0 ? void 0 : o.call(r)) !== null && s !== void 0 ? s : { algorithm: tu.AwsSigningAlgorithm.SigV4, signature_type: tu.AwsSignatureType.HttpRequestViaQueryParams, provider: r.credentials_provider, region: r.region, service: (a = r.service) !== null && a !== void 0 ? a : "iotdevicegateway", signed_body_value: tu.AwsSignedBodyValue.EmptySha256, omit_session_token: true };
          try {
            yield (0, tu.aws_sign_request)(n, u), i();
          } catch (l) {
            l instanceof YR.CrtError ? i(l.error_code) : i(3);
          }
        });
      }
      return t;
    }
    static new_with_websockets(t) {
      let r = t?.tls_ctx_options;
      r || (r = new xs.TlsContextOptions(), r.alpn_list = []);
      let n = new e35(r);
      return n.params.use_websocket = true, n.params.proxy_options = t?.proxy_options, n.tls_ctx_options && (n.params.port = 443), this.configure_websocket_handshake(n, t), n;
    }
    static new_builder_for_websocket() {
      return this.new_with_websockets();
    }
    with_certificate_authority_from_path(t, r) {
      return this.tls_ctx_options.override_default_trust_store_from_path(t, r), this;
    }
    with_certificate_authority(t) {
      return this.tls_ctx_options.override_default_trust_store(t), this;
    }
    with_endpoint(t) {
      return this.params.host_name = t, this;
    }
    with_port(t) {
      return this.params.port = t, this;
    }
    with_client_id(t) {
      return this.params.client_id = t, this;
    }
    with_clean_session(t) {
      return this.params.clean_session = t, this;
    }
    with_keep_alive_seconds(t) {
      return this.params.keep_alive = t, this;
    }
    with_timeout_ms(t) {
      return this.with_ping_timeout_ms(t), this;
    }
    with_ping_timeout_ms(t) {
      return this.params.ping_timeout = t, this;
    }
    with_protocol_operation_timeout_ms(t) {
      return this.params.protocol_operation_timeout = t, this;
    }
    with_will(t) {
      return this.params.will = t, this;
    }
    with_socket_options(t) {
      return this.params.socket_options = t, this;
    }
    with_credentials(t, r, n, i) {
      return e35.configure_websocket_handshake(this, { credentials_provider: tu.AwsCredentialsProvider.newStatic(r, n, i), region: t, service: "iotdevicegateway" });
    }
    with_http_proxy_options(t) {
      return this.params.proxy_options = t, this;
    }
    with_custom_authorizer(t, r, n, i, o, s) {
      this.is_using_custom_authorizer = true;
      let a = LE.populate_username_string_with_custom_authorizer("", t, r, n, this.params.username, o, s);
      return this.params.username = a, this.params.password = i, this.params.use_websocket || (this.tls_ctx_options.alpn_list = ["mqtt"]), this.params.port = 443, this;
    }
    with_username(t) {
      return this.params.username = t, this;
    }
    with_password(t) {
      return this.params.password = t, this;
    }
    with_reconnect_max_sec(t) {
      return this.params.reconnect_max_sec = t, this;
    }
    with_reconnect_min_sec(t) {
      return this.params.reconnect_min_sec = t, this;
    }
    build() {
      var t, r, n;
      if (this.params.client_id === void 0 || this.params.host_name === void 0)
        throw "client_id and endpoint are required";
      return this.is_using_custom_authorizer == false && LE.is_string_and_not_empty(this.params.username) && (((t = this.params.username) === null || t === void 0 ? void 0 : t.indexOf("x-amz-customauthorizer-name=")) != -1 || ((r = this.params.username) === null || r === void 0 ? void 0 : r.indexOf("x-amz-customauthorizer-signature=")) != -1) && (this.is_using_custom_authorizer = true), this.is_using_custom_authorizer == true && this.params.port != 443 && console.log("Warning: Attempting to connect to authorizer with unsupported port. Port is not 443..."), this.params.tls_ctx === void 0 && (this.params.tls_ctx = new ui.ClientTlsContext(this.tls_ctx_options)), LE.is_string_and_not_empty(this.params.username) == false ? this.params.username = "?SDK=NodeJSv2&Version=" : ((n = this.params.username) === null || n === void 0 ? void 0 : n.indexOf("?")) != -1 ? this.params.username += "&SDK=NodeJSv2&Version=" : this.params.username += "?SDK=NodeJSv2&Version=", this.params.username += S5.crt_version(), this.params;
    }
  };
  $t.AwsIotMqttConnectionConfigBuilder = jE;
});
var Am = c((Cs) => {
  "use strict";
  Object.defineProperty(Cs, "__esModule", { value: true });
  Cs.DEFAULT_KEEP_ALIVE = Cs.normalize_payload = void 0;
  function N5(e35) {
    if (e35 instanceof Buffer || typeof e35 == "string")
      return e35;
    if (ArrayBuffer.isView(e35)) {
      let t = e35;
      return Buffer.from(t.buffer, t.byteOffset, t.byteLength);
    }
    if (e35 instanceof ArrayBuffer)
      return Buffer.from(e35);
    if (typeof e35 == "object")
      return JSON.stringify(e35);
    if (!e35)
      return "";
    throw new TypeError("payload parameter must be a string, object, or DataView.");
  }
  __name(N5, "N5");
  Cs.normalize_payload = N5;
  Cs.DEFAULT_KEEP_ALIVE = 1200;
});
var XR = c((di) => {
  "use strict";
  Object.defineProperty(di, "__esModule", { value: true });
  di.RetryJitterType = di.ClientSessionBehavior = void 0;
  var b5;
  (function(e35) {
    e35[e35.Default = 0] = "Default", e35[e35.Clean = 1] = "Clean", e35[e35.RejoinPostSuccess = 2] = "RejoinPostSuccess", e35[e35.RejoinAlways = 3] = "RejoinAlways";
  })(b5 = di.ClientSessionBehavior || (di.ClientSessionBehavior = {}));
  var x5;
  (function(e35) {
    e35[e35.Default = 0] = "Default", e35[e35.None = 1] = "None", e35[e35.Full = 2] = "Full", e35[e35.Decorrelated = 3] = "Decorrelated";
  })(x5 = di.RetryJitterType || (di.RetryJitterType = {}));
});
var ZR = c((j) => {
  "use strict";
  Object.defineProperty(j, "__esModule", { value: true });
  j.PacketType = j.RetainHandlingType = j.QoS = j.PayloadFormatIndicator = j.isSuccessfulPubackReasonCode = j.PubackReasonCode = j.isSuccessfulUnsubackReasonCode = j.UnsubackReasonCode = j.isSuccessfulSubackReasonCode = j.SubackReasonCode = j.isSuccessfulDisconnectReasonCode = j.DisconnectReasonCode = j.isSuccessfulConnectReasonCode = j.ConnectReasonCode = void 0;
  var C5;
  (function(e35) {
    e35[e35.Success = 0] = "Success", e35[e35.UnspecifiedError = 128] = "UnspecifiedError", e35[e35.MalformedPacket = 129] = "MalformedPacket", e35[e35.ProtocolError = 130] = "ProtocolError", e35[e35.ImplementationSpecificError = 131] = "ImplementationSpecificError", e35[e35.UnsupportedProtocolVersion = 132] = "UnsupportedProtocolVersion", e35[e35.ClientIdentifierNotValid = 133] = "ClientIdentifierNotValid", e35[e35.BadUsernameOrPassword = 134] = "BadUsernameOrPassword", e35[e35.NotAuthorized = 135] = "NotAuthorized", e35[e35.ServerUnavailable = 136] = "ServerUnavailable", e35[e35.ServerBusy = 137] = "ServerBusy", e35[e35.Banned = 138] = "Banned", e35[e35.BadAuthenticationMethod = 140] = "BadAuthenticationMethod", e35[e35.TopicNameInvalid = 144] = "TopicNameInvalid", e35[e35.PacketTooLarge = 149] = "PacketTooLarge", e35[e35.QuotaExceeded = 151] = "QuotaExceeded", e35[e35.PayloadFormatInvalid = 153] = "PayloadFormatInvalid", e35[e35.RetainNotSupported = 154] = "RetainNotSupported", e35[e35.QosNotSupported = 155] = "QosNotSupported", e35[e35.UseAnotherServer = 156] = "UseAnotherServer", e35[e35.ServerMoved = 157] = "ServerMoved", e35[e35.ConnectionRateExceeded = 159] = "ConnectionRateExceeded";
  })(C5 = j.ConnectReasonCode || (j.ConnectReasonCode = {}));
  function O5(e35) {
    return e35 < 128;
  }
  __name(O5, "O5");
  j.isSuccessfulConnectReasonCode = O5;
  var A5;
  (function(e35) {
    e35[e35.NormalDisconnection = 0] = "NormalDisconnection", e35[e35.DisconnectWithWillMessage = 4] = "DisconnectWithWillMessage", e35[e35.UnspecifiedError = 128] = "UnspecifiedError", e35[e35.MalformedPacket = 129] = "MalformedPacket", e35[e35.ProtocolError = 130] = "ProtocolError", e35[e35.ImplementationSpecificError = 131] = "ImplementationSpecificError", e35[e35.NotAuthorized = 135] = "NotAuthorized", e35[e35.ServerBusy = 137] = "ServerBusy", e35[e35.ServerShuttingDown = 139] = "ServerShuttingDown", e35[e35.KeepAliveTimeout = 141] = "KeepAliveTimeout", e35[e35.SessionTakenOver = 142] = "SessionTakenOver", e35[e35.TopicFilterInvalid = 143] = "TopicFilterInvalid", e35[e35.TopicNameInvalid = 144] = "TopicNameInvalid", e35[e35.ReceiveMaximumExceeded = 147] = "ReceiveMaximumExceeded", e35[e35.TopicAliasInvalid = 148] = "TopicAliasInvalid", e35[e35.PacketTooLarge = 149] = "PacketTooLarge", e35[e35.MessageRateTooHigh = 150] = "MessageRateTooHigh", e35[e35.QuotaExceeded = 151] = "QuotaExceeded", e35[e35.AdministrativeAction = 152] = "AdministrativeAction", e35[e35.PayloadFormatInvalid = 153] = "PayloadFormatInvalid", e35[e35.RetainNotSupported = 154] = "RetainNotSupported", e35[e35.QosNotSupported = 155] = "QosNotSupported", e35[e35.UseAnotherServer = 156] = "UseAnotherServer", e35[e35.ServerMoved = 157] = "ServerMoved", e35[e35.SharedSubscriptionsNotSupported = 158] = "SharedSubscriptionsNotSupported", e35[e35.ConnectionRateExceeded = 159] = "ConnectionRateExceeded", e35[e35.MaximumConnectTime = 160] = "MaximumConnectTime", e35[e35.SubscriptionIdentifiersNotSupported = 161] = "SubscriptionIdentifiersNotSupported", e35[e35.WildcardSubscriptionsNotSupported = 162] = "WildcardSubscriptionsNotSupported";
  })(A5 = j.DisconnectReasonCode || (j.DisconnectReasonCode = {}));
  function T5(e35) {
    return e35 < 128;
  }
  __name(T5, "T5");
  j.isSuccessfulDisconnectReasonCode = T5;
  var P5;
  (function(e35) {
    e35[e35.GrantedQoS0 = 0] = "GrantedQoS0", e35[e35.GrantedQoS1 = 1] = "GrantedQoS1", e35[e35.GrantedQoS2 = 2] = "GrantedQoS2", e35[e35.UnspecifiedError = 128] = "UnspecifiedError", e35[e35.ImplementationSpecificError = 131] = "ImplementationSpecificError", e35[e35.NotAuthorized = 135] = "NotAuthorized", e35[e35.TopicFilterInvalid = 143] = "TopicFilterInvalid", e35[e35.PacketIdentifierInUse = 145] = "PacketIdentifierInUse", e35[e35.QuotaExceeded = 151] = "QuotaExceeded", e35[e35.SharedSubscriptionsNotSupported = 158] = "SharedSubscriptionsNotSupported", e35[e35.SubscriptionIdentifiersNotSupported = 161] = "SubscriptionIdentifiersNotSupported", e35[e35.WildcardSubscriptionsNotSupported = 162] = "WildcardSubscriptionsNotSupported";
  })(P5 = j.SubackReasonCode || (j.SubackReasonCode = {}));
  function I5(e35) {
    return e35 < 128;
  }
  __name(I5, "I5");
  j.isSuccessfulSubackReasonCode = I5;
  var R5;
  (function(e35) {
    e35[e35.Success = 0] = "Success", e35[e35.NoSubscriptionExisted = 17] = "NoSubscriptionExisted", e35[e35.UnspecifiedError = 128] = "UnspecifiedError", e35[e35.ImplementationSpecificError = 131] = "ImplementationSpecificError", e35[e35.NotAuthorized = 135] = "NotAuthorized", e35[e35.TopicFilterInvalid = 143] = "TopicFilterInvalid", e35[e35.PacketIdentifierInUse = 145] = "PacketIdentifierInUse";
  })(R5 = j.UnsubackReasonCode || (j.UnsubackReasonCode = {}));
  function q5(e35) {
    return e35 < 128;
  }
  __name(q5, "q5");
  j.isSuccessfulUnsubackReasonCode = q5;
  var M5;
  (function(e35) {
    e35[e35.Success = 0] = "Success", e35[e35.NoMatchingSubscribers = 16] = "NoMatchingSubscribers", e35[e35.UnspecifiedError = 128] = "UnspecifiedError", e35[e35.ImplementationSpecificError = 131] = "ImplementationSpecificError", e35[e35.NotAuthorized = 135] = "NotAuthorized", e35[e35.TopicNameInvalid = 144] = "TopicNameInvalid", e35[e35.PacketIdentifierInUse = 145] = "PacketIdentifierInUse", e35[e35.QuotaExceeded = 151] = "QuotaExceeded", e35[e35.PayloadFormatInvalid = 153] = "PayloadFormatInvalid";
  })(M5 = j.PubackReasonCode || (j.PubackReasonCode = {}));
  function D5(e35) {
    return e35 < 128;
  }
  __name(D5, "D5");
  j.isSuccessfulPubackReasonCode = D5;
  var k5;
  (function(e35) {
    e35[e35.Bytes = 0] = "Bytes", e35[e35.Utf8 = 1] = "Utf8";
  })(k5 = j.PayloadFormatIndicator || (j.PayloadFormatIndicator = {}));
  var F5;
  (function(e35) {
    e35[e35.AtMostOnce = 0] = "AtMostOnce", e35[e35.AtLeastOnce = 1] = "AtLeastOnce", e35[e35.ExactlyOnce = 2] = "ExactlyOnce";
  })(F5 = j.QoS || (j.QoS = {}));
  var L5;
  (function(e35) {
    e35[e35.SendOnSubscribe = 0] = "SendOnSubscribe", e35[e35.SendOnSubscribeIfNew = 1] = "SendOnSubscribeIfNew", e35[e35.DontSend = 2] = "DontSend";
  })(L5 = j.RetainHandlingType || (j.RetainHandlingType = {}));
  var j5;
  (function(e35) {
    e35[e35.Connect = 1] = "Connect", e35[e35.Connack = 2] = "Connack", e35[e35.Publish = 3] = "Publish", e35[e35.Puback = 4] = "Puback", e35[e35.Pubrec = 5] = "Pubrec", e35[e35.Pubrel = 6] = "Pubrel", e35[e35.Pubcomp = 7] = "Pubcomp", e35[e35.Subscribe = 8] = "Subscribe", e35[e35.Suback = 9] = "Suback", e35[e35.Unsubscribe = 10] = "Unsubscribe", e35[e35.Unsuback = 11] = "Unsuback", e35[e35.Pingreq = 12] = "Pingreq", e35[e35.Pingresp = 13] = "Pingresp", e35[e35.Disconnect = 14] = "Disconnect", e35[e35.Auth = 15] = "Auth";
  })(j5 = j.PacketType || (j.PacketType = {}));
});
var VE = c((ne) => {
  "use strict";
  var tq = ne && ne.__createBinding || (Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  }), U5 = ne && ne.__setModuleDefault || (Object.create ? function(e35, t) {
    Object.defineProperty(e35, "default", { enumerable: true, value: t });
  } : function(e35, t) {
    e35.default = t;
  }), rq = ne && ne.__importStar || function(e35) {
    if (e35 && e35.__esModule)
      return e35;
    var t = {};
    if (e35 != null)
      for (var r in e35)
        r !== "default" && Object.prototype.hasOwnProperty.call(e35, r) && tq(t, e35, r);
    return U5(t, e35), t;
  }, nq = ne && ne.__exportStar || function(e35, t) {
    for (var r in e35)
      r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && tq(t, e35, r);
  }, BE = ne && ne.__awaiter || function(e35, t, r, n) {
    function i(o) {
      return o instanceof r ? o : new r(function(s) {
        s(o);
      });
    }
    __name(i, "i");
    return new (r || (r = Promise))(function(o, s) {
      function a(p) {
        try {
          l(n.next(p));
        } catch (f) {
          s(f);
        }
      }
      __name(a, "a");
      function u(p) {
        try {
          l(n.throw(p));
        } catch (f) {
          s(f);
        }
      }
      __name(u, "u");
      function l(p) {
        p.done ? o(p.value) : i(p.value).then(a, u);
      }
      __name(l, "l");
      l((n = n.apply(e35, t || [])).next());
    });
  }, B5 = ne && ne.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(ne, "__esModule", { value: true });
  ne.Mqtt5Client = ne.ClientExtendedValidationAndFlowControl = ne.ClientOperationQueueBehavior = ne.HttpProxyOptions = void 0;
  var li = B5(tr()), W5 = Xi(), V5 = Zc(), WE = rq(mn()), $5 = rq(Am()), eq = rr(), z5 = xm();
  Object.defineProperty(ne, "HttpProxyOptions", { enumerable: true, get: function() {
    return z5.HttpProxyOptions;
  } });
  nq(XR(), ne);
  nq(ZR(), ne);
  var H5;
  (function(e35) {
    e35[e35.Default = 0] = "Default", e35[e35.FailNonQos1PublishOnDisconnect = 1] = "FailNonQos1PublishOnDisconnect", e35[e35.FailQos0PublishOnDisconnect = 2] = "FailQos0PublishOnDisconnect", e35[e35.FailAllOnDisconnect = 3] = "FailAllOnDisconnect";
  })(H5 = ne.ClientOperationQueueBehavior || (ne.ClientOperationQueueBehavior = {}));
  var G5;
  (function(e35) {
    e35[e35.None = 0] = "None", e35[e35.AwsIotCoreDefaults = 1] = "AwsIotCoreDefaults";
  })(G5 = ne.ClientExtendedValidationAndFlowControl || (ne.ClientExtendedValidationAndFlowControl = {}));
  var Ur = class e35 extends (0, W5.NativeResourceMixin)(V5.BufferedEventEmitter) {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super(), this._super(li.default.mqtt5_client_new(this, t, (r) => {
        e35._s_on_stopped(r);
      }, (r) => {
        e35._s_on_attempting_connect(r);
      }, (r, n, i) => {
        e35._s_on_connection_success(r, n, i);
      }, (r, n, i) => {
        e35._s_on_connection_failure(r, new eq.CrtError(n), i);
      }, (r, n, i) => {
        e35._s_on_disconnection(r, new eq.CrtError(n), i);
      }, (r, n) => {
        e35._s_on_message_received(r, n);
      }, t.clientBootstrap ? t.clientBootstrap.native_handle() : null, t.socketOptions ? t.socketOptions.native_handle() : null, t.tlsCtx ? t.tlsCtx.native_handle() : null, t.httpProxyOptions ? t.httpProxyOptions.create_native_handle() : null));
    }
    close() {
      li.default.mqtt5_client_close(this.native_handle());
    }
    start() {
      li.default.mqtt5_client_start(this.native_handle());
    }
    stop(t) {
      li.default.mqtt5_client_stop(this.native_handle(), t);
    }
    subscribe(t) {
      return BE(this, void 0, void 0, function* () {
        return new Promise((r, n) => {
          function i(o, s, a) {
            return e35._s_on_suback_callback(r, n, o, s, a);
          }
          __name(i, "i");
          try {
            li.default.mqtt5_client_subscribe(this.native_handle(), t, i);
          } catch (o) {
            n(o);
          }
        });
      });
    }
    unsubscribe(t) {
      return BE(this, void 0, void 0, function* () {
        return new Promise((r, n) => {
          function i(o, s, a) {
            return e35._s_on_unsuback_callback(r, n, o, s, a);
          }
          __name(i, "i");
          try {
            li.default.mqtt5_client_unsubscribe(this.native_handle(), t, i);
          } catch (o) {
            n(o);
          }
        });
      });
    }
    publish(t) {
      return BE(this, void 0, void 0, function* () {
        return new Promise((r, n) => {
          t && t.payload && (t.payload = $5.normalize_payload(t.payload));
          function i(o, s, a) {
            return e35._s_on_puback_callback(r, n, o, s, a);
          }
          __name(i, "i");
          try {
            li.default.mqtt5_client_publish(this.native_handle(), t, i);
          } catch (o) {
            n(o);
          }
        });
      });
    }
    getQueueStatistics() {
      return li.default.mqtt5_client_get_queue_statistics(this.native_handle());
    }
    on(t, r) {
      return super.on(t, r), this;
    }
    static _s_on_stopped(t) {
      process.nextTick(() => {
        let r = {};
        t.emit(e35.STOPPED, r);
      });
    }
    static _s_on_attempting_connect(t) {
      process.nextTick(() => {
        let r = {};
        t.emit(e35.ATTEMPTING_CONNECT, r);
      });
    }
    static _s_on_connection_success(t, r, n) {
      let i = { connack: r, settings: n };
      process.nextTick(() => {
        t.emit(e35.CONNECTION_SUCCESS, i);
      });
    }
    static _s_on_connection_failure(t, r, n) {
      let i = { error: r };
      n != null && (i.connack = n), process.nextTick(() => {
        t.emit(e35.CONNECTION_FAILURE, i);
      });
    }
    static _s_on_disconnection(t, r, n) {
      let i = { error: r };
      n != null && (i.disconnect = n), process.nextTick(() => {
        t.emit(e35.DISCONNECTION, i);
      });
    }
    static _s_on_suback_callback(t, r, n, i, o) {
      i == 0 && o !== void 0 ? t(o) : r(WE.error_code_to_string(i));
    }
    static _s_on_unsuback_callback(t, r, n, i, o) {
      i == 0 && o !== void 0 ? t(o) : r(WE.error_code_to_string(i));
    }
    static _s_on_puback_callback(t, r, n, i, o) {
      i == 0 ? t(o) : r(WE.error_code_to_string(i));
    }
    static _s_on_message_received(t, r) {
      let n = { message: r };
      process.nextTick(() => {
        t.emit(e35.MESSAGE_RECEIVED, n);
      });
    }
  };
  ne.Mqtt5Client = Ur;
  Ur.ERROR = "error";
  Ur.MESSAGE_RECEIVED = "messageReceived";
  Ur.ATTEMPTING_CONNECT = "attemptingConnect";
  Ur.CONNECTION_SUCCESS = "connectionSuccess";
  Ur.CONNECTION_FAILURE = "connectionFailure";
  Ur.DISCONNECTION = "disconnection";
  Ur.STOPPED = "stopped";
});
var sq = c((zt) => {
  "use strict";
  var Q5 = zt && zt.__createBinding || (Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  }), K5 = zt && zt.__setModuleDefault || (Object.create ? function(e35, t) {
    Object.defineProperty(e35, "default", { enumerable: true, value: t });
  } : function(e35, t) {
    e35.default = t;
  }), iu = zt && zt.__importStar || function(e35) {
    if (e35 && e35.__esModule)
      return e35;
    var t = {};
    if (e35 != null)
      for (var r in e35)
        r !== "default" && Object.prototype.hasOwnProperty.call(e35, r) && Q5(t, e35, r);
    return K5(t, e35), t;
  }, iq = zt && zt.__awaiter || function(e35, t, r, n) {
    function i(o) {
      return o instanceof r ? o : new r(function(s) {
        s(o);
      });
    }
    __name(i, "i");
    return new (r || (r = Promise))(function(o, s) {
      function a(p) {
        try {
          l(n.next(p));
        } catch (f) {
          s(f);
        }
      }
      __name(a, "a");
      function u(p) {
        try {
          l(n.throw(p));
        } catch (f) {
          s(f);
        }
      }
      __name(u, "u");
      function l(p) {
        p.done ? o(p.value) : i(p.value).then(a, u);
      }
      __name(l, "l");
      l((n = n.apply(e35, t || [])).next());
    });
  };
  Object.defineProperty(zt, "__esModule", { value: true });
  zt.AwsIotMqtt5ClientConfigBuilder = void 0;
  var Y5 = iu(VE()), _t = iu(mn()), ru = iu(ym()), J5 = rr(), oq = iu(FE()), X5 = iu(Am()), nu = class e35 {
    static {
      __name(this, "e");
    }
    constructor(t, r, n) {
      this.tlsContextOptions = n, this.config = { hostName: t, port: r, connectProperties: { keepAliveIntervalSeconds: X5.DEFAULT_KEEP_ALIVE }, extendedValidationAndFlowControlOptions: Y5.ClientExtendedValidationAndFlowControl.AwsIotCoreDefaults };
    }
    static newDirectMqttBuilderWithMtlsFromPath(t, r, n) {
      let i = new e35(t, e35.DEFAULT_DIRECT_MQTT_PORT, _t.TlsContextOptions.create_client_with_mtls_from_path(r, n));
      return _t.is_alpn_available() && i.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca"), i;
    }
    static newDirectMqttBuilderWithMtlsFromMemory(t, r, n) {
      let i = new e35(t, e35.DEFAULT_DIRECT_MQTT_PORT, _t.TlsContextOptions.create_client_with_mtls(r, n));
      return _t.is_alpn_available() && i.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca"), i;
    }
    static newDirectMqttBuilderWithMtlsFromPkcs11(t, r) {
      let n = new e35(t, e35.DEFAULT_DIRECT_MQTT_PORT, _t.TlsContextOptions.create_client_with_mtls_pkcs11(r));
      return _t.is_alpn_available() && n.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca"), n;
    }
    static newDirectMqttBuilderWithMtlsFromPkcs12(t, r) {
      let n = new e35(t, e35.DEFAULT_DIRECT_MQTT_PORT, _t.TlsContextOptions.create_client_with_mtls_pkcs12_from_path(r.pkcs12_file, r.pkcs12_password));
      return _t.is_alpn_available() && n.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca"), n;
    }
    static newDirectMqttBuilderWithMtlsFromWindowsCertStorePath(t, r) {
      let n = new e35(t, e35.DEFAULT_DIRECT_MQTT_PORT, _t.TlsContextOptions.create_client_with_mtls_windows_cert_store_path(r));
      return _t.is_alpn_available() && n.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca"), n;
    }
    static newDirectMqttBuilderWithCustomAuth(t, r) {
      let n = new e35(t, e35.DEFAULT_WEBSOCKET_MQTT_PORT, new _t.TlsContextOptions());
      return n.customAuthConfig = r, n.tlsContextOptions.alpn_list = ["mqtt"], n;
    }
    static newWebsocketMqttBuilderWithSigv4Auth(t, r) {
      let n = new _t.TlsContextOptions();
      n.alpn_list = [];
      let i = new e35(t, e35.DEFAULT_WEBSOCKET_MQTT_PORT, n), o = r?.credentialsProvider;
      return o || (o = ru.AwsCredentialsProvider.newDefault()), i.config.websocketHandshakeTransform = (s, a) => iq(this, void 0, void 0, function* () {
        var u;
        try {
          let l = { algorithm: ru.AwsSigningAlgorithm.SigV4, signature_type: ru.AwsSignatureType.HttpRequestViaQueryParams, provider: o, region: (u = r?.region) !== null && u !== void 0 ? u : oq.extractRegionFromEndpoint(t), service: "iotdevicegateway", signed_body_value: ru.AwsSignedBodyValue.EmptySha256, omit_session_token: true };
          yield ru.aws_sign_request(s, l), a();
        } catch (l) {
          l instanceof J5.CrtError ? a(l.error_code) : a(3);
        }
      }), i;
    }
    static newWebsocketMqttBuilderWithCustomAuth(t, r) {
      let n = new e35(t, e35.DEFAULT_WEBSOCKET_MQTT_PORT, new _t.TlsContextOptions());
      return n.customAuthConfig = r, n.config.websocketHandshakeTransform = (i, o) => iq(this, void 0, void 0, function* () {
        o(0);
      }), n;
    }
    withCertificateAuthorityFromPath(t, r) {
      return this.tlsContextOptions.override_default_trust_store_from_path(t, r), this;
    }
    withCertificateAuthority(t) {
      return this.tlsContextOptions.override_default_trust_store(t), this;
    }
    withPort(t) {
      return this.config.port = t, this;
    }
    withConnectProperties(t) {
      return this.config.connectProperties = t, this;
    }
    withSessionBehavior(t) {
      return this.config.sessionBehavior = t, this;
    }
    withRetryJitterMode(t) {
      return this.config.retryJitterMode = t, this;
    }
    withMinReconnectDelayMs(t) {
      return this.config.minReconnectDelayMs = t, this;
    }
    withMaxReconnectDelayMs(t) {
      return this.config.maxReconnectDelayMs = t, this;
    }
    withMinConnectedTimeToResetReconnectDelayMs(t) {
      return this.config.minConnectedTimeToResetReconnectDelayMs = t, this;
    }
    withConnackTimeoutMs(t) {
      return this.config.connackTimeoutMs = t, this;
    }
    withOfflineQueueBehavior(t) {
      return this.config.offlineQueueBehavior = t, this;
    }
    withPingTimeoutMs(t) {
      return this.config.pingTimeoutMs = t, this;
    }
    withAckTimeoutSeconds(t) {
      return this.config.ackTimeoutSeconds = t, this;
    }
    withSocketOptions(t) {
      return this.config.socketOptions = t, this;
    }
    withHttpProxyOptions(t) {
      return this.config.httpProxyOptions = t, this;
    }
    withExtendedValidationAndFlowControlOptions(t) {
      return this.config.extendedValidationAndFlowControlOptions = t, this;
    }
    build() {
      var t, r;
      return this.config.tlsCtx === void 0 && (this.config.tlsCtx = new _t.ClientTlsContext(this.tlsContextOptions)), this.config.connectProperties && (this.config.connectProperties.username = oq.buildMqtt5FinalUsername(this.customAuthConfig), !((t = this.customAuthConfig) === null || t === void 0) && t.password && (this.config.connectProperties.password = (r = this.customAuthConfig) === null || r === void 0 ? void 0 : r.password)), this.config;
    }
  };
  zt.AwsIotMqtt5ClientConfigBuilder = nu;
  nu.DEFAULT_WEBSOCKET_MQTT_PORT = 443;
  nu.DEFAULT_DIRECT_MQTT_PORT = 8883;
});
var cq = c((pi) => {
  "use strict";
  var Z5 = pi && pi.__createBinding || (Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  }), aq = pi && pi.__exportStar || function(e35, t) {
    for (var r in e35)
      r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Z5(t, e35, r);
  };
  Object.defineProperty(pi, "__esModule", { value: true });
  aq(JR(), pi);
  aq(sq(), pi);
});
var mq = c((be) => {
  "use strict";
  var eQ = be && be.__createBinding || (Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  }), tQ = be && be.__setModuleDefault || (Object.create ? function(e35, t) {
    Object.defineProperty(e35, "default", { enumerable: true, value: t });
  } : function(e35, t) {
    e35.default = t;
  }), lq = be && be.__importStar || function(e35) {
    if (e35 && e35.__esModule)
      return e35;
    var t = {};
    if (e35 != null)
      for (var r in e35)
        r !== "default" && Object.prototype.hasOwnProperty.call(e35, r) && eQ(t, e35, r);
    return tQ(t, e35), t;
  }, Os = be && be.__awaiter || function(e35, t, r, n) {
    function i(o) {
      return o instanceof r ? o : new r(function(s) {
        s(o);
      });
    }
    __name(i, "i");
    return new (r || (r = Promise))(function(o, s) {
      function a(p) {
        try {
          l(n.next(p));
        } catch (f) {
          s(f);
        }
      }
      __name(a, "a");
      function u(p) {
        try {
          l(n.throw(p));
        } catch (f) {
          s(f);
        }
      }
      __name(u, "u");
      function l(p) {
        p.done ? o(p.value) : i(p.value).then(a, u);
      }
      __name(l, "l");
      l((n = n.apply(e35, t || [])).next());
    });
  }, rQ = be && be.__importDefault || function(e35) {
    return e35 && e35.__esModule ? e35 : { default: e35 };
  };
  Object.defineProperty(be, "__esModule", { value: true });
  be.MqttClientConnection = be.MqttClient = be.MqttWill = be.QoS = be.HttpProxyOptions = void 0;
  var Ht = rQ(tr()), pq = Xi(), nQ = Zc(), uq = lq(Am()), fi = rr(), Tm = lq(mn()), iQ = xm();
  Object.defineProperty(be, "HttpProxyOptions", { enumerable: true, get: function() {
    return iQ.HttpProxyOptions;
  } });
  var dq = Cm(), fq = Cm();
  Object.defineProperty(be, "QoS", { enumerable: true, get: function() {
    return fq.QoS;
  } });
  Object.defineProperty(be, "MqttWill", { enumerable: true, get: function() {
    return fq.MqttWill;
  } });
  var $E = class extends pq.NativeResource {
    static {
      __name(this, "$E");
    }
    constructor(t = void 0) {
      super(Ht.default.mqtt_client_new(t != null ? t.native_handle() : null)), this.bootstrap = t;
    }
    new_connection(t) {
      return new At(this, t);
    }
  };
  be.MqttClient = $E;
  var At = class extends (0, pq.NativeResourceMixin)(nQ.BufferedEventEmitter) {
    static {
      __name(this, "At");
    }
    constructor(t, r) {
      if (super(), this.client = t, this.config = r, r == null || r == null)
        throw new fi.CrtError("MqttClientConnection constructor: config not defined");
      let n = r.will ? { topic: r.will.topic, qos: r.will.qos, payload: uq.normalize_payload(r.will.payload), retain: r.will.retain } : void 0;
      var i = dq.DEFAULT_RECONNECT_MIN_SEC, o = dq.DEFAULT_RECONNECT_MAX_SEC;
      if (r.reconnect_min_sec && (i = r.reconnect_min_sec, o = Math.max(i, o)), r.reconnect_max_sec && (o = r.reconnect_max_sec, i = Math.min(i, o)), t == null || t == null)
        throw new fi.CrtError("MqttClientConnection constructor: client not defined");
      if (r.socket_options == null || r.socket_options == null)
        throw new fi.CrtError("MqttClientConnection constructor: socket_options in configuration not defined");
      this._super(Ht.default.mqtt_client_connection_new(t.native_handle(), (s) => {
        this._on_connection_interrupted(s);
      }, (s, a) => {
        this._on_connection_resumed(s, a);
      }, r.tls_ctx ? r.tls_ctx.native_handle() : null, n, r.username, r.password, r.use_websocket, r.proxy_options ? r.proxy_options.create_native_handle() : void 0, r.websocket_handshake_transform, i, o)), this.tls_ctx = r.tls_ctx, Ht.default.mqtt_client_connection_on_message(this.native_handle(), this._on_any_publish.bind(this)), Ht.default.mqtt_client_connection_on_closed(this.native_handle(), this._on_connection_closed.bind(this)), this.on("error", (s) => {
      });
    }
    close() {
      Ht.default.mqtt_client_connection_close(this.native_handle());
    }
    on(t, r) {
      return super.on(t, r), t == "connect" && process.nextTick(() => {
        this.uncork();
      }), this;
    }
    connect() {
      return Os(this, void 0, void 0, function* () {
        return new Promise((t, r) => {
          if (r = this._reject(r), this.config.socket_options == null || this.config.socket_options == null)
            throw new fi.CrtError("MqttClientConnection connect: socket_options in configuration not defined");
          try {
            Ht.default.mqtt_client_connection_connect(this.native_handle(), this.config.client_id, this.config.host_name, this.config.port, this.config.socket_options.native_handle(), this.config.keep_alive, this.config.ping_timeout, this.config.protocol_operation_timeout, this.config.clean_session, this._on_connect_callback.bind(this, t, r));
          } catch (n) {
            r(n);
          }
        });
      });
    }
    reconnect() {
      return Os(this, void 0, void 0, function* () {
        return new Promise((t, r) => {
          r = this._reject(r);
          try {
            Ht.default.mqtt_client_connection_reconnect(this.native_handle(), this._on_connect_callback.bind(this, t, r));
          } catch (n) {
            r(n);
          }
        });
      });
    }
    publish(t, r, n, i = false) {
      return Os(this, void 0, void 0, function* () {
        return typeof t != "string" ? Promise.reject("topic is not a string") : typeof n != "number" ? Promise.reject("qos is not a number") : typeof i != "boolean" ? Promise.reject("retain is not a boolean") : new Promise((o, s) => {
          s = this._reject(s);
          try {
            Ht.default.mqtt_client_connection_publish(this.native_handle(), t, uq.normalize_payload(r), n, i, this._on_puback_callback.bind(this, o, s));
          } catch (a) {
            s(a);
          }
        });
      });
    }
    subscribe(t, r, n) {
      return Os(this, void 0, void 0, function* () {
        return typeof t != "string" ? Promise.reject("topic is not a string") : typeof r != "number" ? Promise.reject("qos is not a number") : new Promise((i, o) => {
          o = this._reject(o);
          try {
            Ht.default.mqtt_client_connection_subscribe(this.native_handle(), t, r, n, this._on_suback_callback.bind(this, i, o));
          } catch (s) {
            o(s);
          }
        });
      });
    }
    unsubscribe(t) {
      return Os(this, void 0, void 0, function* () {
        return typeof t != "string" ? Promise.reject("topic is not a string") : new Promise((r, n) => {
          n = this._reject(n);
          try {
            Ht.default.mqtt_client_connection_unsubscribe(this.native_handle(), t, this._on_unsuback_callback.bind(this, r, n));
          } catch (i) {
            n(i);
          }
        });
      });
    }
    disconnect() {
      return Os(this, void 0, void 0, function* () {
        return new Promise((t, r) => {
          r = this._reject(r);
          try {
            Ht.default.mqtt_client_connection_disconnect(this.native_handle(), this._on_disconnect_callback.bind(this, t));
          } catch (n) {
            r(n);
          }
        });
      });
    }
    getQueueStatistics() {
      return Ht.default.mqtt_client_connection_get_queue_statistics(this.native_handle());
    }
    _reject(t) {
      return (r) => {
        t(r), process.nextTick(() => {
          this.emit("error", new fi.CrtError(r));
        });
      };
    }
    _on_connection_interrupted(t) {
      this.emit("interrupt", new fi.CrtError(t));
    }
    _on_connection_resumed(t, r) {
      this.emit("resume", t, r);
      let n = { session_present: r, reason_code: t };
      this.emit("connection_success", n);
    }
    _on_any_publish(t, r, n, i, o) {
      this.emit("message", t, r, n, i, o);
    }
    _on_connection_closed() {
      let t = {};
      this.emit("closed", t), this.close();
    }
    _on_connect_callback(t, r, n, i, o) {
      if (n == 0 && i == 0) {
        t(o), this.emit("connect", o);
        let s = { session_present: o, reason_code: i };
        this.emit("connection_success", s);
      } else if (n != 0) {
        r("Failed to connect: " + Tm.error_code_to_string(n));
        let s = { error: new fi.CrtError(n) };
        this.emit("connection_failure", s);
      } else {
        r("Server rejected connection.");
        let s = { error: new fi.CrtError(5134) };
        this.emit("connection_failure", s);
      }
    }
    _on_puback_callback(t, r, n, i) {
      i == 0 ? t({ packet_id: n }) : r("Failed to publish: " + Tm.error_code_to_string(i));
    }
    _on_suback_callback(t, r, n, i, o, s) {
      s == 0 ? t({ packet_id: n, topic: i, qos: o, error_code: s }) : r("Failed to subscribe: " + Tm.error_code_to_string(s));
    }
    _on_unsuback_callback(t, r, n, i) {
      i == 0 ? t({ packet_id: n }) : r("Failed to unsubscribe: " + Tm.error_code_to_string(i));
    }
    _on_disconnect_callback(t) {
      t(), this.emit("disconnect");
    }
  };
  be.MqttClientConnection = At;
  At.CONNECT = "connect";
  At.DISCONNECT = "disconnect";
  At.ERROR = "error";
  At.INTERRUPT = "interrupt";
  At.RESUME = "resume";
  At.MESSAGE = "message";
  At.CONNECTION_SUCCESS = "connection_success";
  At.CONNECTION_FAILURE = "connection_failure";
  At.CLOSED = "closed";
});
var hq = c((U) => {
  "use strict";
  var oQ = U && U.__createBinding || (Object.create ? function(e35, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e35, n, i);
  } : function(e35, t, r, n) {
    n === void 0 && (n = r), e35[n] = t[r];
  }), sQ = U && U.__setModuleDefault || (Object.create ? function(e35, t) {
    Object.defineProperty(e35, "default", { enumerable: true, value: t });
  } : function(e35, t) {
    e35.default = t;
  }), yt = U && U.__importStar || function(e35) {
    if (e35 && e35.__esModule)
      return e35;
    var t = {};
    if (e35 != null)
      for (var r in e35)
        r !== "default" && Object.prototype.hasOwnProperty.call(e35, r) && oQ(t, e35, r);
    return sQ(t, e35), t;
  };
  Object.defineProperty(U, "__esModule", { value: true });
  U.CrtError = U.resource_safety = U.promise = U.platform = U.mqtt5 = U.mqtt = U.iot = U.io = U.http = U.eventstream = U.crt = U.crypto = U.checksums = U.cancel = U.auth = void 0;
  var aQ = yt(ER());
  U.cancel = aQ;
  var cQ = yt(mm());
  U.platform = cQ;
  var uQ = yt(fm());
  U.promise = uQ;
  var dQ = yt(bR());
  U.resource_safety = dQ;
  var lQ = yt(ym());
  U.auth = lQ;
  var pQ = yt(MR());
  U.checksums = pQ;
  var fQ = yt(kR());
  U.crt = fQ;
  var mQ = yt(LR());
  U.crypto = mQ;
  var hQ = yt($R());
  U.eventstream = hQ;
  var _Q = yt(xm());
  U.http = _Q;
  var yQ = yt(mn());
  U.io = yQ;
  var gQ = yt(cq());
  U.iot = gQ;
  var vQ = yt(mq());
  U.mqtt = vQ;
  var EQ = yt(VE());
  U.mqtt5 = EQ;
  var wQ = rr();
  Object.defineProperty(U, "CrtError", { enumerable: true, get: function() {
    return wQ.CrtError;
  } });
});
var yq = c((Pm, _q) => {
  "use strict";
  Object.defineProperty(Pm, "__esModule", { value: true });
  Pm.isCrtAvailable = void 0;
  var SQ = /* @__PURE__ */ __name(() => {
    try {
      return typeof D == "function" && typeof _q < "u" && hq() ? ["md/crt-avail"] : null;
    } catch {
      return null;
    }
  }, "SQ");
  Pm.isCrtAvailable = SQ;
});
var ou = c((Br) => {
  "use strict";
  Object.defineProperty(Br, "__esModule", { value: true });
  Br.defaultUserAgent = Br.UA_APP_ID_INI_NAME = Br.UA_APP_ID_ENV_NAME = void 0;
  var NQ = on(), gq = D("os"), zE = D("process"), bQ = yq();
  Br.UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
  Br.UA_APP_ID_INI_NAME = "sdk-ua-app-id";
  var xQ = /* @__PURE__ */ __name(({ serviceId: e35, clientVersion: t }) => {
    let r = [["aws-sdk-js", t], ["ua", "2.0"], [`os/${(0, gq.platform)()}`, (0, gq.release)()], ["lang/js"], ["md/nodejs", `${zE.versions.node}`]], n = (0, bQ.isCrtAvailable)();
    n && r.push(n), e35 && r.push([`api/${e35}`, t]), zE.env.AWS_EXECUTION_ENV && r.push([`exec-env/${zE.env.AWS_EXECUTION_ENV}`]);
    let i = (0, NQ.loadConfig)({ environmentVariableSelector: (s) => s[Br.UA_APP_ID_ENV_NAME], configFileSelector: (s) => s[Br.UA_APP_ID_INI_NAME], default: void 0 })(), o;
    return async () => {
      if (!o) {
        let s = await i;
        o = s ? [...r, [`app/${s}`]] : [...r];
      }
      return o;
    };
  }, "xQ");
  Br.defaultUserAgent = xQ;
});
var su = c((Im) => {
  "use strict";
  Object.defineProperty(Im, "__esModule", { value: true });
  Im.Hash = void 0;
  var HE = Mi(), CQ = Sr(), OQ = D("buffer"), vq = D("crypto"), GE = class {
    static {
      __name(this, "GE");
    }
    constructor(t, r) {
      this.algorithmIdentifier = t, this.secret = r, this.reset();
    }
    update(t, r) {
      this.hash.update((0, CQ.toUint8Array)(Eq(t, r)));
    }
    digest() {
      return Promise.resolve(this.hash.digest());
    }
    reset() {
      this.hash = this.secret ? (0, vq.createHmac)(this.algorithmIdentifier, Eq(this.secret)) : (0, vq.createHash)(this.algorithmIdentifier);
    }
  };
  Im.Hash = GE;
  function Eq(e35, t) {
    return OQ.Buffer.isBuffer(e35) ? e35 : typeof e35 == "string" ? (0, HE.fromString)(e35, t) : ArrayBuffer.isView(e35) ? (0, HE.fromArrayBuffer)(e35.buffer, e35.byteOffset, e35.byteLength) : (0, HE.fromArrayBuffer)(e35);
  }
  __name(Eq, "Eq");
});
var Sq = c((Rm) => {
  "use strict";
  Object.defineProperty(Rm, "__esModule", { value: true });
  Rm.calculateBodyLength = void 0;
  var wq = D("fs"), AQ = /* @__PURE__ */ __name((e35) => {
    if (!e35)
      return 0;
    if (typeof e35 == "string")
      return Buffer.from(e35).length;
    if (typeof e35.byteLength == "number")
      return e35.byteLength;
    if (typeof e35.size == "number")
      return e35.size;
    if (typeof e35.start == "number" && typeof e35.end == "number")
      return e35.end + 1 - e35.start;
    if (typeof e35.path == "string" || Buffer.isBuffer(e35.path))
      return (0, wq.lstatSync)(e35.path).size;
    if (typeof e35.fd == "number")
      return (0, wq.fstatSync)(e35.fd).size;
    throw new Error(`Body Length computation failed for ${e35}`);
  }, "AQ");
  Rm.calculateBodyLength = AQ;
});
var au = c((QE) => {
  "use strict";
  Object.defineProperty(QE, "__esModule", { value: true });
  var TQ = (b(), S(N));
  TQ.__exportStar(Sq(), QE);
});
var kq = c((qm) => {
  "use strict";
  Object.defineProperty(qm, "__esModule", { value: true });
  qm.ruleSet = void 0;
  var Rq = "required", sr = "fn", ar = "argv", Ps = "ref", Nq = "isSet", _n = "tree", As = "error", Ts = "endpoint", KE = "PartitionResult", YE = "getAttr", bq = { [Rq]: false, type: "String" }, xq = { [Rq]: true, default: false, type: "Boolean" }, Cq = { [Ps]: "Endpoint" }, qq = { [sr]: "booleanEquals", [ar]: [{ [Ps]: "UseFIPS" }, true] }, Mq = { [sr]: "booleanEquals", [ar]: [{ [Ps]: "UseDualStack" }, true] }, Gt = {}, Oq = { [sr]: "booleanEquals", [ar]: [true, { [sr]: YE, [ar]: [{ [Ps]: KE }, "supportsFIPS"] }] }, Dq = { [Ps]: KE }, Aq = { [sr]: "booleanEquals", [ar]: [true, { [sr]: YE, [ar]: [Dq, "supportsDualStack"] }] }, Tq = [qq], Pq = [Mq], Iq = [{ [Ps]: "Region" }], PQ = { version: "1.0", parameters: { Region: bq, UseDualStack: xq, UseFIPS: xq, Endpoint: bq }, rules: [{ conditions: [{ [sr]: Nq, [ar]: [Cq] }], type: _n, rules: [{ conditions: Tq, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: As }, { conditions: Pq, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: As }, { endpoint: { url: Cq, properties: Gt, headers: Gt }, type: Ts }] }, { conditions: [{ [sr]: Nq, [ar]: Iq }], type: _n, rules: [{ conditions: [{ [sr]: "aws.partition", [ar]: Iq, assign: KE }], type: _n, rules: [{ conditions: [qq, Mq], type: _n, rules: [{ conditions: [Oq, Aq], type: _n, rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: Gt, headers: Gt }, type: Ts }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: As }] }, { conditions: Tq, type: _n, rules: [{ conditions: [Oq], type: _n, rules: [{ conditions: [{ [sr]: "stringEquals", [ar]: ["aws-us-gov", { [sr]: YE, [ar]: [Dq, "name"] }] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: Gt, headers: Gt }, type: Ts }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: Gt, headers: Gt }, type: Ts }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: As }] }, { conditions: Pq, type: _n, rules: [{ conditions: [Aq], type: _n, rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: Gt, headers: Gt }, type: Ts }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: As }] }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: Gt, headers: Gt }, type: Ts }] }] }, { error: "Invalid Configuration: Missing Region", type: As }] };
  qm.ruleSet = PQ;
});
var Fq = c((Mm) => {
  "use strict";
  Object.defineProperty(Mm, "__esModule", { value: true });
  Mm.defaultEndpointResolver = void 0;
  var IQ = Ko(), RQ = kq(), qQ = /* @__PURE__ */ __name((e35, t = {}) => (0, IQ.resolveEndpoint)(RQ.ruleSet, { endpointParams: e35, logger: t.logger }), "qQ");
  Mm.defaultEndpointResolver = qQ;
});
var Uq = c((Dm) => {
  "use strict";
  Object.defineProperty(Dm, "__esModule", { value: true });
  Dm.getRuntimeConfig = void 0;
  var MQ = A(), DQ = Wi(), Lq = rs(), jq = Sr(), kQ = Fq(), FQ = /* @__PURE__ */ __name((e35) => ({ apiVersion: "2019-06-10", base64Decoder: e35?.base64Decoder ?? Lq.fromBase64, base64Encoder: e35?.base64Encoder ?? Lq.toBase64, disableHostPrefix: e35?.disableHostPrefix ?? false, endpointProvider: e35?.endpointProvider ?? kQ.defaultEndpointResolver, extensions: e35?.extensions ?? [], logger: e35?.logger ?? new MQ.NoOpLogger(), serviceId: e35?.serviceId ?? "SSO", urlParser: e35?.urlParser ?? DQ.parseUrl, utf8Decoder: e35?.utf8Decoder ?? jq.fromUtf8, utf8Encoder: e35?.utf8Encoder ?? jq.toUtf8 }), "FQ");
  Dm.getRuntimeConfig = FQ;
});
var Bq = c((gt) => {
  "use strict";
  Object.defineProperty(gt, "__esModule", { value: true });
  gt.IMDS_REGION_PATH = gt.DEFAULTS_MODE_OPTIONS = gt.ENV_IMDS_DISABLED = gt.AWS_DEFAULT_REGION_ENV = gt.AWS_REGION_ENV = gt.AWS_EXECUTION_ENV = void 0;
  gt.AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
  gt.AWS_REGION_ENV = "AWS_REGION";
  gt.AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
  gt.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
  gt.DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
  gt.IMDS_REGION_PATH = "/latest/meta-data/placement/region";
});
var Wq = c((km) => {
  "use strict";
  Object.defineProperty(km, "__esModule", { value: true });
  km.NODE_DEFAULTS_MODE_CONFIG_OPTIONS = void 0;
  var LQ = "AWS_DEFAULTS_MODE", jQ = "defaults_mode";
  km.NODE_DEFAULTS_MODE_CONFIG_OPTIONS = { environmentVariableSelector: (e35) => e35[LQ], configFileSelector: (e35) => e35[jQ], default: "legacy" };
});
var zq = c((Fm) => {
  "use strict";
  Object.defineProperty(Fm, "__esModule", { value: true });
  Fm.resolveDefaultsModeConfig = void 0;
  var UQ = xr(), Vq = sm(), $q = on(), BQ = Z(), mi = Bq(), WQ = Wq(), VQ = /* @__PURE__ */ __name(({ region: e35 = (0, $q.loadConfig)(UQ.NODE_REGION_CONFIG_OPTIONS), defaultsMode: t = (0, $q.loadConfig)(WQ.NODE_DEFAULTS_MODE_CONFIG_OPTIONS) } = {}) => (0, BQ.memoize)(async () => {
    let r = typeof t == "function" ? await t() : t;
    switch (r?.toLowerCase()) {
      case "auto":
        return $Q(e35);
      case "in-region":
      case "cross-region":
      case "mobile":
      case "standard":
      case "legacy":
        return Promise.resolve(r?.toLocaleLowerCase());
      case void 0:
        return Promise.resolve("legacy");
      default:
        throw new Error(`Invalid parameter for "defaultsMode", expect ${mi.DEFAULTS_MODE_OPTIONS.join(", ")}, got ${r}`);
    }
  }), "VQ");
  Fm.resolveDefaultsModeConfig = VQ;
  var $Q = /* @__PURE__ */ __name(async (e35) => {
    if (e35) {
      let t = typeof e35 == "function" ? await e35() : e35, r = await zQ();
      return r ? t === r ? "in-region" : "cross-region" : "standard";
    }
    return "standard";
  }, "$Q"), zQ = /* @__PURE__ */ __name(async () => {
    var e35;
    if (process.env[mi.AWS_EXECUTION_ENV] && (process.env[mi.AWS_REGION_ENV] || process.env[mi.AWS_DEFAULT_REGION_ENV]))
      return (e35 = process.env[mi.AWS_REGION_ENV]) !== null && e35 !== void 0 ? e35 : process.env[mi.AWS_DEFAULT_REGION_ENV];
    if (!process.env[mi.ENV_IMDS_DISABLED])
      try {
        let t = await (0, Vq.getInstanceMetadataEndpoint)();
        return (await (0, Vq.httpRequest)({ ...t, path: mi.IMDS_REGION_PATH })).toString();
      } catch {
      }
  }, "zQ");
});
var cu = c((JE) => {
  "use strict";
  Object.defineProperty(JE, "__esModule", { value: true });
  var HQ = (b(), S(N));
  HQ.__exportStar(zq(), JE);
});
var Qq = c((jm) => {
  "use strict";
  Object.defineProperty(jm, "__esModule", { value: true });
  jm.getRuntimeConfig = void 0;
  var GQ = (b(), S(N)), QQ = GQ.__importDefault(gR()), KQ = ou(), Lm = xr(), YQ = su(), Hq = un(), uu = on(), Gq = os(), JQ = au(), XQ = Ut(), ZQ = Uq(), eK = A(), tK = cu(), rK = A(), nK = /* @__PURE__ */ __name((e35) => {
    (0, rK.emitWarningIfUnsupportedVersion)(process.version);
    let t = (0, tK.resolveDefaultsModeConfig)(e35), r = /* @__PURE__ */ __name(() => t().then(eK.loadConfigsForDefaultMode), "r"), n = (0, ZQ.getRuntimeConfig)(e35);
    return { ...n, ...e35, runtime: "node", defaultsMode: t, bodyLengthChecker: e35?.bodyLengthChecker ?? JQ.calculateBodyLength, defaultUserAgentProvider: e35?.defaultUserAgentProvider ?? (0, KQ.defaultUserAgent)({ serviceId: n.serviceId, clientVersion: QQ.default.version }), maxAttempts: e35?.maxAttempts ?? (0, uu.loadConfig)(Hq.NODE_MAX_ATTEMPT_CONFIG_OPTIONS), region: e35?.region ?? (0, uu.loadConfig)(Lm.NODE_REGION_CONFIG_OPTIONS, Lm.NODE_REGION_CONFIG_FILE_OPTIONS), requestHandler: e35?.requestHandler ?? new Gq.NodeHttpHandler(r), retryMode: e35?.retryMode ?? (0, uu.loadConfig)({ ...Hq.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await r()).retryMode || XQ.DEFAULT_RETRY_MODE }), sha256: e35?.sha256 ?? YQ.Hash.bind(null, "sha256"), streamCollector: e35?.streamCollector ?? Gq.streamCollector, useDualstackEndpoint: e35?.useDualstackEndpoint ?? (0, uu.loadConfig)(Lm.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS), useFipsEndpoint: e35?.useFipsEndpoint ?? (0, uu.loadConfig)(Lm.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS) };
  }, "nK");
  jm.getRuntimeConfig = nK;
});
var Kq = c((Is) => {
  "use strict";
  Object.defineProperty(Is, "__esModule", { value: true });
  Is.resolveAwsRegionExtensionConfiguration = Is.getAwsRegionExtensionConfiguration = void 0;
  var iK = /* @__PURE__ */ __name((e35) => {
    let t = /* @__PURE__ */ __name(async () => {
      if (e35.region === void 0)
        throw new Error("Region is missing from runtimeConfig");
      let r = e35.region;
      return typeof r == "string" ? r : r();
    }, "t");
    return { setRegion(r) {
      t = r;
    }, region() {
      return t;
    } };
  }, "iK");
  Is.getAwsRegionExtensionConfiguration = iK;
  var oK = /* @__PURE__ */ __name((e35) => ({ region: e35.region() }), "oK");
  Is.resolveAwsRegionExtensionConfiguration = oK;
});
var Yq = c((Qt) => {
  "use strict";
  Object.defineProperty(Qt, "__esModule", { value: true });
  Qt.NODE_REGION_CONFIG_FILE_OPTIONS = Qt.NODE_REGION_CONFIG_OPTIONS = Qt.REGION_INI_NAME = Qt.REGION_ENV_NAME = void 0;
  Qt.REGION_ENV_NAME = "AWS_REGION";
  Qt.REGION_INI_NAME = "region";
  Qt.NODE_REGION_CONFIG_OPTIONS = { environmentVariableSelector: (e35) => e35[Qt.REGION_ENV_NAME], configFileSelector: (e35) => e35[Qt.REGION_INI_NAME], default: () => {
    throw new Error("Region is missing");
  } };
  Qt.NODE_REGION_CONFIG_FILE_OPTIONS = { preferredFile: "credentials" };
});
var XE = c((Um) => {
  "use strict";
  Object.defineProperty(Um, "__esModule", { value: true });
  Um.isFipsRegion = void 0;
  var sK = /* @__PURE__ */ __name((e35) => typeof e35 == "string" && (e35.startsWith("fips-") || e35.endsWith("-fips")), "sK");
  Um.isFipsRegion = sK;
});
var Jq = c((Bm) => {
  "use strict";
  Object.defineProperty(Bm, "__esModule", { value: true });
  Bm.getRealRegion = void 0;
  var aK = XE(), cK = /* @__PURE__ */ __name((e35) => (0, aK.isFipsRegion)(e35) ? ["fips-aws-global", "aws-fips"].includes(e35) ? "us-east-1" : e35.replace(/fips-(dkr-|prod-)?|-fips/, "") : e35, "cK");
  Bm.getRealRegion = cK;
});
var Zq = c((Wm) => {
  "use strict";
  Object.defineProperty(Wm, "__esModule", { value: true });
  Wm.resolveRegionConfig = void 0;
  var Xq = Jq(), uK = XE(), dK = /* @__PURE__ */ __name((e35) => {
    let { region: t, useFipsEndpoint: r } = e35;
    if (!t)
      throw new Error("Region is missing");
    return { ...e35, region: async () => {
      if (typeof t == "string")
        return (0, Xq.getRealRegion)(t);
      let n = await t();
      return (0, Xq.getRealRegion)(n);
    }, useFipsEndpoint: async () => {
      let n = typeof t == "string" ? t : await t();
      return (0, uK.isFipsRegion)(n) ? true : typeof r != "function" ? Promise.resolve(!!r) : r();
    } };
  }, "dK");
  Wm.resolveRegionConfig = dK;
});
var t1 = c((Vm) => {
  "use strict";
  Object.defineProperty(Vm, "__esModule", { value: true });
  var e1 = (b(), S(N));
  e1.__exportStar(Yq(), Vm);
  e1.__exportStar(Zq(), Vm);
});
var du = c(($m) => {
  "use strict";
  Object.defineProperty($m, "__esModule", { value: true });
  var r1 = (b(), S(N));
  r1.__exportStar(Kq(), $m);
  r1.__exportStar(t1(), $m);
});
var s1 = c((zm) => {
  "use strict";
  Object.defineProperty(zm, "__esModule", { value: true });
  zm.resolveRuntimeExtensions = void 0;
  var n1 = du(), i1 = Me(), o1 = A(), ZE = /* @__PURE__ */ __name((e35) => e35, "ZE"), lK = /* @__PURE__ */ __name((e35, t) => {
    let r = { ...ZE((0, n1.getAwsRegionExtensionConfiguration)(e35)), ...ZE((0, o1.getDefaultExtensionConfiguration)(e35)), ...ZE((0, i1.getHttpHandlerExtensionConfiguration)(e35)) };
    return t.forEach((n) => n.configure(r)), { ...e35, ...(0, n1.resolveAwsRegionExtensionConfiguration)(r), ...(0, o1.resolveDefaultRuntimeConfig)(r), ...(0, i1.resolveHttpHandlerRuntimeConfig)(r) };
  }, "lK");
  zm.resolveRuntimeExtensions = lK;
});
var lu = c((Rs) => {
  "use strict";
  Object.defineProperty(Rs, "__esModule", { value: true });
  Rs.SSOClient = Rs.__Client = void 0;
  var a1 = lc(), pK = pc(), fK = fc(), c1 = Cc(), mK = xr(), hK = Tc(), _K = te(), u1 = un(), d1 = A();
  Object.defineProperty(Rs, "__Client", { enumerable: true, get: function() {
    return d1.Client;
  } });
  var yK = yR(), gK = Qq(), vK = s1(), ew = class extends d1.Client {
    static {
      __name(this, "ew");
    }
    constructor(...[t]) {
      let r = (0, gK.getRuntimeConfig)(t || {}), n = (0, yK.resolveClientEndpointParameters)(r), i = (0, mK.resolveRegionConfig)(n), o = (0, _K.resolveEndpointConfig)(i), s = (0, u1.resolveRetryConfig)(o), a = (0, a1.resolveHostHeaderConfig)(s), u = (0, c1.resolveUserAgentConfig)(a), l = (0, vK.resolveRuntimeExtensions)(u, t?.extensions || []);
      super(l), this.config = l, this.middlewareStack.use((0, u1.getRetryPlugin)(this.config)), this.middlewareStack.use((0, hK.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, a1.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, pK.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, fK.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, c1.getUserAgentPlugin)(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
  Rs.SSOClient = ew;
});
var Hm = c((qs) => {
  "use strict";
  Object.defineProperty(qs, "__esModule", { value: true });
  qs.SSOServiceException = qs.__ServiceException = void 0;
  var l1 = A();
  Object.defineProperty(qs, "__ServiceException", { enumerable: true, get: function() {
    return l1.ServiceException;
  } });
  var tw = class e35 extends l1.ServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super(t), Object.setPrototypeOf(this, e35.prototype);
    }
  };
  qs.SSOServiceException = tw;
});
var to = c((ve) => {
  "use strict";
  Object.defineProperty(ve, "__esModule", { value: true });
  ve.LogoutRequestFilterSensitiveLog = ve.ListAccountsRequestFilterSensitiveLog = ve.ListAccountRolesRequestFilterSensitiveLog = ve.GetRoleCredentialsResponseFilterSensitiveLog = ve.RoleCredentialsFilterSensitiveLog = ve.GetRoleCredentialsRequestFilterSensitiveLog = ve.UnauthorizedException = ve.TooManyRequestsException = ve.ResourceNotFoundException = ve.InvalidRequestException = void 0;
  var Ms = A(), Gm = Hm(), rw = class e35 extends Gm.SSOServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "InvalidRequestException", $fault: "client", ...t }), this.name = "InvalidRequestException", this.$fault = "client", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  ve.InvalidRequestException = rw;
  var nw = class e35 extends Gm.SSOServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "ResourceNotFoundException", $fault: "client", ...t }), this.name = "ResourceNotFoundException", this.$fault = "client", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  ve.ResourceNotFoundException = nw;
  var iw = class e35 extends Gm.SSOServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "TooManyRequestsException", $fault: "client", ...t }), this.name = "TooManyRequestsException", this.$fault = "client", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  ve.TooManyRequestsException = iw;
  var ow = class e35 extends Gm.SSOServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "UnauthorizedException", $fault: "client", ...t }), this.name = "UnauthorizedException", this.$fault = "client", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  ve.UnauthorizedException = ow;
  var EK = /* @__PURE__ */ __name((e35) => ({ ...e35, ...e35.accessToken && { accessToken: Ms.SENSITIVE_STRING } }), "EK");
  ve.GetRoleCredentialsRequestFilterSensitiveLog = EK;
  var wK = /* @__PURE__ */ __name((e35) => ({ ...e35, ...e35.secretAccessKey && { secretAccessKey: Ms.SENSITIVE_STRING }, ...e35.sessionToken && { sessionToken: Ms.SENSITIVE_STRING } }), "wK");
  ve.RoleCredentialsFilterSensitiveLog = wK;
  var SK = /* @__PURE__ */ __name((e35) => ({ ...e35, ...e35.roleCredentials && { roleCredentials: (0, ve.RoleCredentialsFilterSensitiveLog)(e35.roleCredentials) } }), "SK");
  ve.GetRoleCredentialsResponseFilterSensitiveLog = SK;
  var NK = /* @__PURE__ */ __name((e35) => ({ ...e35, ...e35.accessToken && { accessToken: Ms.SENSITIVE_STRING } }), "NK");
  ve.ListAccountRolesRequestFilterSensitiveLog = NK;
  var bK = /* @__PURE__ */ __name((e35) => ({ ...e35, ...e35.accessToken && { accessToken: Ms.SENSITIVE_STRING } }), "bK");
  ve.ListAccountsRequestFilterSensitiveLog = bK;
  var xK = /* @__PURE__ */ __name((e35) => ({ ...e35, ...e35.accessToken && { accessToken: Ms.SENSITIVE_STRING } }), "xK");
  ve.LogoutRequestFilterSensitiveLog = xK;
});
var pu = c((Ue) => {
  "use strict";
  Object.defineProperty(Ue, "__esModule", { value: true });
  Ue.de_LogoutCommand = Ue.de_ListAccountsCommand = Ue.de_ListAccountRolesCommand = Ue.de_GetRoleCredentialsCommand = Ue.se_LogoutCommand = Ue.se_ListAccountsCommand = Ue.se_ListAccountRolesCommand = Ue.se_GetRoleCredentialsCommand = void 0;
  var Qm = Me(), q = A(), Km = to(), CK = Hm(), OK = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = (0, q.map)({}, eh, { "x-amz-sso_bearer_token": e35.accessToken }), a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/federation/credentials`, u = (0, q.map)({ role_name: [, (0, q.expectNonNull)(e35.roleName, "roleName")], account_id: [, (0, q.expectNonNull)(e35.accountId, "accountId")] }), l;
    return new Qm.HttpRequest({ protocol: n, hostname: r, port: i, method: "GET", headers: s, path: a, query: u, body: l });
  }, "OK");
  Ue.se_GetRoleCredentialsCommand = OK;
  var AK = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = (0, q.map)({}, eh, { "x-amz-sso_bearer_token": e35.accessToken }), a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/assignment/roles`, u = (0, q.map)({ next_token: [, e35.nextToken], max_result: [() => e35.maxResults !== void 0, () => e35.maxResults.toString()], account_id: [, (0, q.expectNonNull)(e35.accountId, "accountId")] }), l;
    return new Qm.HttpRequest({ protocol: n, hostname: r, port: i, method: "GET", headers: s, path: a, query: u, body: l });
  }, "AK");
  Ue.se_ListAccountRolesCommand = AK;
  var TK = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = (0, q.map)({}, eh, { "x-amz-sso_bearer_token": e35.accessToken }), a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/assignment/accounts`, u = (0, q.map)({ next_token: [, e35.nextToken], max_result: [() => e35.maxResults !== void 0, () => e35.maxResults.toString()] }), l;
    return new Qm.HttpRequest({ protocol: n, hostname: r, port: i, method: "GET", headers: s, path: a, query: u, body: l });
  }, "TK");
  Ue.se_ListAccountsCommand = TK;
  var PK = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = (0, q.map)({}, eh, { "x-amz-sso_bearer_token": e35.accessToken }), a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/logout`, u;
    return new Qm.HttpRequest({ protocol: n, hostname: r, port: i, method: "POST", headers: s, path: a, body: u });
  }, "PK");
  Ue.se_LogoutCommand = PK;
  var IK = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return RK(e35, t);
    let r = (0, q.map)({ $metadata: hi(e35) }), n = (0, q.expectNonNull)((0, q.expectObject)(await th(e35.body, t)), "body"), i = (0, q.take)(n, { roleCredentials: q._json });
    return Object.assign(r, i), r;
  }, "IK");
  Ue.de_GetRoleCredentialsCommand = IK;
  var RK = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await rh(e35.body, t) }, n = nh(e35, r.body);
    switch (n) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Jm(r, t);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await sw(r, t);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Xm(r, t);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Zm(r, t);
      default:
        let i = r.body;
        return Ym({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "RK"), qK = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return MK(e35, t);
    let r = (0, q.map)({ $metadata: hi(e35) }), n = (0, q.expectNonNull)((0, q.expectObject)(await th(e35.body, t)), "body"), i = (0, q.take)(n, { nextToken: q.expectString, roleList: q._json });
    return Object.assign(r, i), r;
  }, "qK");
  Ue.de_ListAccountRolesCommand = qK;
  var MK = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await rh(e35.body, t) }, n = nh(e35, r.body);
    switch (n) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Jm(r, t);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await sw(r, t);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Xm(r, t);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Zm(r, t);
      default:
        let i = r.body;
        return Ym({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "MK"), DK = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return kK(e35, t);
    let r = (0, q.map)({ $metadata: hi(e35) }), n = (0, q.expectNonNull)((0, q.expectObject)(await th(e35.body, t)), "body"), i = (0, q.take)(n, { accountList: q._json, nextToken: q.expectString });
    return Object.assign(r, i), r;
  }, "DK");
  Ue.de_ListAccountsCommand = DK;
  var kK = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await rh(e35.body, t) }, n = nh(e35, r.body);
    switch (n) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Jm(r, t);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await sw(r, t);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Xm(r, t);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Zm(r, t);
      default:
        let i = r.body;
        return Ym({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "kK"), FK = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return LK(e35, t);
    let r = (0, q.map)({ $metadata: hi(e35) });
    return await (0, q.collectBody)(e35.body, t), r;
  }, "FK");
  Ue.de_LogoutCommand = FK;
  var LK = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await rh(e35.body, t) }, n = nh(e35, r.body);
    switch (n) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Jm(r, t);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Xm(r, t);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Zm(r, t);
      default:
        let i = r.body;
        return Ym({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "LK"), Ym = (0, q.withBaseException)(CK.SSOServiceException), Jm = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, q.map)({}), n = e35.body, i = (0, q.take)(n, { message: q.expectString });
    Object.assign(r, i);
    let o = new Km.InvalidRequestException({ $metadata: hi(e35), ...r });
    return (0, q.decorateServiceException)(o, e35.body);
  }, "Jm"), sw = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, q.map)({}), n = e35.body, i = (0, q.take)(n, { message: q.expectString });
    Object.assign(r, i);
    let o = new Km.ResourceNotFoundException({ $metadata: hi(e35), ...r });
    return (0, q.decorateServiceException)(o, e35.body);
  }, "sw"), Xm = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, q.map)({}), n = e35.body, i = (0, q.take)(n, { message: q.expectString });
    Object.assign(r, i);
    let o = new Km.TooManyRequestsException({ $metadata: hi(e35), ...r });
    return (0, q.decorateServiceException)(o, e35.body);
  }, "Xm"), Zm = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, q.map)({}), n = e35.body, i = (0, q.take)(n, { message: q.expectString });
    Object.assign(r, i);
    let o = new Km.UnauthorizedException({ $metadata: hi(e35), ...r });
    return (0, q.decorateServiceException)(o, e35.body);
  }, "Zm"), hi = /* @__PURE__ */ __name((e35) => ({ httpStatusCode: e35.statusCode, requestId: e35.headers["x-amzn-requestid"] ?? e35.headers["x-amzn-request-id"] ?? e35.headers["x-amz-request-id"], extendedRequestId: e35.headers["x-amz-id-2"], cfId: e35.headers["x-amz-cf-id"] }), "hi"), jK = /* @__PURE__ */ __name((e35, t) => (0, q.collectBody)(e35, t).then((r) => t.utf8Encoder(r)), "jK"), eh = /* @__PURE__ */ __name((e35) => e35 != null && e35 !== "" && (!Object.getOwnPropertyNames(e35).includes("length") || e35.length != 0) && (!Object.getOwnPropertyNames(e35).includes("size") || e35.size != 0), "eh"), th = /* @__PURE__ */ __name((e35, t) => jK(e35, t).then((r) => r.length ? JSON.parse(r) : {}), "th"), rh = /* @__PURE__ */ __name(async (e35, t) => {
    let r = await th(e35, t);
    return r.message = r.message ?? r.Message, r;
  }, "rh"), nh = /* @__PURE__ */ __name((e35, t) => {
    let r = /* @__PURE__ */ __name((o, s) => Object.keys(o).find((a) => a.toLowerCase() === s.toLowerCase()), "r"), n = /* @__PURE__ */ __name((o) => {
      let s = o;
      return typeof s == "number" && (s = s.toString()), s.indexOf(",") >= 0 && (s = s.split(",")[0]), s.indexOf(":") >= 0 && (s = s.split(":")[0]), s.indexOf("#") >= 0 && (s = s.split("#")[1]), s;
    }, "n"), i = r(e35.headers, "x-amzn-errortype");
    if (i !== void 0)
      return n(e35.headers[i]);
    if (t.code !== void 0)
      return n(t.code);
    if (t.__type !== void 0)
      return n(t.__type);
  }, "nh");
});
var cw = c((Ds) => {
  "use strict";
  Object.defineProperty(Ds, "__esModule", { value: true });
  Ds.GetRoleCredentialsCommand = Ds.$Command = void 0;
  var UK = te(), BK = ye(), m1 = A();
  Object.defineProperty(Ds, "$Command", { enumerable: true, get: function() {
    return m1.Command;
  } });
  var WK = K(), p1 = to(), f1 = pu(), aw = class e35 extends m1.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, BK.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, UK.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "SSOClient", commandName: "GetRoleCredentialsCommand", inputFilterSensitiveLog: p1.GetRoleCredentialsRequestFilterSensitiveLog, outputFilterSensitiveLog: p1.GetRoleCredentialsResponseFilterSensitiveLog, [WK.SMITHY_CONTEXT_KEY]: { service: "SWBPortalService", operation: "GetRoleCredentials" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, f1.se_GetRoleCredentialsCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, f1.de_GetRoleCredentialsCommand)(t, r);
    }
  };
  Ds.GetRoleCredentialsCommand = aw;
});
var ih = c((ks) => {
  "use strict";
  Object.defineProperty(ks, "__esModule", { value: true });
  ks.ListAccountRolesCommand = ks.$Command = void 0;
  var VK = te(), $K = ye(), _1 = A();
  Object.defineProperty(ks, "$Command", { enumerable: true, get: function() {
    return _1.Command;
  } });
  var zK = K(), HK = to(), h1 = pu(), uw = class e35 extends _1.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, $K.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, VK.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "SSOClient", commandName: "ListAccountRolesCommand", inputFilterSensitiveLog: HK.ListAccountRolesRequestFilterSensitiveLog, outputFilterSensitiveLog: (p) => p, [zK.SMITHY_CONTEXT_KEY]: { service: "SWBPortalService", operation: "ListAccountRoles" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, h1.se_ListAccountRolesCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, h1.de_ListAccountRolesCommand)(t, r);
    }
  };
  ks.ListAccountRolesCommand = uw;
});
var oh = c((Fs) => {
  "use strict";
  Object.defineProperty(Fs, "__esModule", { value: true });
  Fs.ListAccountsCommand = Fs.$Command = void 0;
  var GK = te(), QK = ye(), g1 = A();
  Object.defineProperty(Fs, "$Command", { enumerable: true, get: function() {
    return g1.Command;
  } });
  var KK = K(), YK = to(), y1 = pu(), dw = class e35 extends g1.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, QK.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, GK.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "SSOClient", commandName: "ListAccountsCommand", inputFilterSensitiveLog: YK.ListAccountsRequestFilterSensitiveLog, outputFilterSensitiveLog: (p) => p, [KK.SMITHY_CONTEXT_KEY]: { service: "SWBPortalService", operation: "ListAccounts" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, y1.se_ListAccountsCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, y1.de_ListAccountsCommand)(t, r);
    }
  };
  Fs.ListAccountsCommand = dw;
});
var pw = c((Ls) => {
  "use strict";
  Object.defineProperty(Ls, "__esModule", { value: true });
  Ls.LogoutCommand = Ls.$Command = void 0;
  var JK = te(), XK = ye(), E1 = A();
  Object.defineProperty(Ls, "$Command", { enumerable: true, get: function() {
    return E1.Command;
  } });
  var ZK = K(), e92 = to(), v1 = pu(), lw = class e35 extends E1.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, XK.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, JK.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "SSOClient", commandName: "LogoutCommand", inputFilterSensitiveLog: e92.LogoutRequestFilterSensitiveLog, outputFilterSensitiveLog: (p) => p, [ZK.SMITHY_CONTEXT_KEY]: { service: "SWBPortalService", operation: "Logout" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, v1.se_LogoutCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, v1.de_LogoutCommand)(t, r);
    }
  };
  Ls.LogoutCommand = lw;
});
var w1 = c((ah) => {
  "use strict";
  Object.defineProperty(ah, "__esModule", { value: true });
  ah.SSO = void 0;
  var t9 = A(), r9 = cw(), n9 = ih(), i9 = oh(), o9 = pw(), s9 = lu(), a9 = { GetRoleCredentialsCommand: r9.GetRoleCredentialsCommand, ListAccountRolesCommand: n9.ListAccountRolesCommand, ListAccountsCommand: i9.ListAccountsCommand, LogoutCommand: o9.LogoutCommand }, sh = class extends s9.SSOClient {
    static {
      __name(this, "sh");
    }
  };
  ah.SSO = sh;
  (0, t9.createAggregatedClient)(a9, sh);
});
var S1 = c((js) => {
  "use strict";
  Object.defineProperty(js, "__esModule", { value: true });
  var ch = (b(), S(N));
  ch.__exportStar(cw(), js);
  ch.__exportStar(ih(), js);
  ch.__exportStar(oh(), js);
  ch.__exportStar(pw(), js);
});
var b1 = c((N1) => {
  "use strict";
  Object.defineProperty(N1, "__esModule", { value: true });
});
var x1 = c((uh) => {
  "use strict";
  Object.defineProperty(uh, "__esModule", { value: true });
  uh.paginateListAccountRoles = void 0;
  var c9 = ih(), u9 = lu(), d9 = /* @__PURE__ */ __name(async (e35, t, ...r) => await e35.send(new c9.ListAccountRolesCommand(t), ...r), "d9");
  async function* l9(e35, t, ...r) {
    let n = e35.startingToken || void 0, i = true, o;
    for (; i; ) {
      if (t.nextToken = n, t.maxResults = e35.pageSize, e35.client instanceof u9.SSOClient)
        o = await d9(e35.client, t, ...r);
      else
        throw new Error("Invalid client, expected SSO | SSOClient");
      yield o;
      let s = n;
      n = o.nextToken, i = !!(n && (!e35.stopOnSameToken || n !== s));
    }
    return void 0;
  }
  __name(l9, "l9");
  uh.paginateListAccountRoles = l9;
});
var C1 = c((dh) => {
  "use strict";
  Object.defineProperty(dh, "__esModule", { value: true });
  dh.paginateListAccounts = void 0;
  var p9 = oh(), f9 = lu(), m9 = /* @__PURE__ */ __name(async (e35, t, ...r) => await e35.send(new p9.ListAccountsCommand(t), ...r), "m9");
  async function* h9(e35, t, ...r) {
    let n = e35.startingToken || void 0, i = true, o;
    for (; i; ) {
      if (t.nextToken = n, t.maxResults = e35.pageSize, e35.client instanceof f9.SSOClient)
        o = await m9(e35.client, t, ...r);
      else
        throw new Error("Invalid client, expected SSO | SSOClient");
      yield o;
      let s = n;
      n = o.nextToken, i = !!(n && (!e35.stopOnSameToken || n !== s));
    }
    return void 0;
  }
  __name(h9, "h9");
  dh.paginateListAccounts = h9;
});
var O1 = c((fu) => {
  "use strict";
  Object.defineProperty(fu, "__esModule", { value: true });
  var fw = (b(), S(N));
  fw.__exportStar(b1(), fu);
  fw.__exportStar(x1(), fu);
  fw.__exportStar(C1(), fu);
});
var A1 = c((mw) => {
  "use strict";
  Object.defineProperty(mw, "__esModule", { value: true });
  var _9 = (b(), S(N));
  _9.__exportStar(to(), mw);
});
var T1 = c((yn) => {
  "use strict";
  Object.defineProperty(yn, "__esModule", { value: true });
  yn.SSOServiceException = void 0;
  var mu = (b(), S(N));
  mu.__exportStar(lu(), yn);
  mu.__exportStar(w1(), yn);
  mu.__exportStar(S1(), yn);
  mu.__exportStar(O1(), yn);
  mu.__exportStar(A1(), yn);
  var y9 = Hm();
  Object.defineProperty(yn, "SSOServiceException", { enumerable: true, get: function() {
    return y9.SSOServiceException;
  } });
});
var fh = c((ie) => {
  "use strict";
  Object.defineProperty(ie, "__esModule", { value: true });
  ie.UnsupportedGrantTypeException = ie.UnauthorizedClientException = ie.SlowDownException = ie.SSOOIDCClient = ie.InvalidScopeException = ie.InvalidRequestException = ie.InvalidClientException = ie.InternalServerException = ie.ExpiredTokenException = ie.CreateTokenCommand = ie.AuthorizationPendingException = ie.AccessDeniedException = void 0;
  var P1 = lc(), g9 = pc(), v9 = fc(), I1 = Cc(), E9 = xr(), w9 = Tc(), S9 = te(), R1 = un(), N9 = A(), b9 = /* @__PURE__ */ __name((e35) => {
    var t, r;
    return { ...e35, useDualstackEndpoint: (t = e35.useDualstackEndpoint) !== null && t !== void 0 ? t : false, useFipsEndpoint: (r = e35.useFipsEndpoint) !== null && r !== void 0 ? r : false, defaultSigningName: "awsssooidc" };
  }, "b9"), x9 = { version: "3.429.0" }, C9 = ou(), lh = xr(), O9 = su(), q1 = un(), hu = on(), M1 = os(), A9 = au(), T9 = Ut(), P9 = A(), I9 = Wi(), D1 = rs(), k1 = Sr(), R9 = Ko(), K1 = "required", cr = "fn", ur = "argv", Ws = "ref", F1 = "isSet", gn = "tree", Us = "error", Bs = "endpoint", _w = "PartitionResult", yw = "getAttr", L1 = { [K1]: false, type: "String" }, j1 = { [K1]: true, default: false, type: "Boolean" }, U1 = { [Ws]: "Endpoint" }, Y1 = { [cr]: "booleanEquals", [ur]: [{ [Ws]: "UseFIPS" }, true] }, J1 = { [cr]: "booleanEquals", [ur]: [{ [Ws]: "UseDualStack" }, true] }, Kt = {}, B1 = { [cr]: "booleanEquals", [ur]: [true, { [cr]: yw, [ur]: [{ [Ws]: _w }, "supportsFIPS"] }] }, X1 = { [Ws]: _w }, W1 = { [cr]: "booleanEquals", [ur]: [true, { [cr]: yw, [ur]: [X1, "supportsDualStack"] }] }, V1 = [Y1], $1 = [J1], z1 = [{ [Ws]: "Region" }], q9 = { version: "1.0", parameters: { Region: L1, UseDualStack: j1, UseFIPS: j1, Endpoint: L1 }, rules: [{ conditions: [{ [cr]: F1, [ur]: [U1] }], type: gn, rules: [{ conditions: V1, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: Us }, { conditions: $1, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: Us }, { endpoint: { url: U1, properties: Kt, headers: Kt }, type: Bs }] }, { conditions: [{ [cr]: F1, [ur]: z1 }], type: gn, rules: [{ conditions: [{ [cr]: "aws.partition", [ur]: z1, assign: _w }], type: gn, rules: [{ conditions: [Y1, J1], type: gn, rules: [{ conditions: [B1, W1], type: gn, rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: Kt, headers: Kt }, type: Bs }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: Us }] }, { conditions: V1, type: gn, rules: [{ conditions: [B1], type: gn, rules: [{ conditions: [{ [cr]: "stringEquals", [ur]: ["aws-us-gov", { [cr]: yw, [ur]: [X1, "name"] }] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: Kt, headers: Kt }, type: Bs }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: Kt, headers: Kt }, type: Bs }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: Us }] }, { conditions: $1, type: gn, rules: [{ conditions: [W1], type: gn, rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: Kt, headers: Kt }, type: Bs }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: Us }] }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: Kt, headers: Kt }, type: Bs }] }] }, { error: "Invalid Configuration: Missing Region", type: Us }] }, M9 = q9, D9 = /* @__PURE__ */ __name((e35, t = {}) => (0, R9.resolveEndpoint)(M9, { endpointParams: e35, logger: t.logger }), "D9"), k9 = /* @__PURE__ */ __name((e35) => {
    var t, r, n, i, o, s, a, u, l, p;
    return { apiVersion: "2019-06-10", base64Decoder: (t = e35?.base64Decoder) !== null && t !== void 0 ? t : D1.fromBase64, base64Encoder: (r = e35?.base64Encoder) !== null && r !== void 0 ? r : D1.toBase64, disableHostPrefix: (n = e35?.disableHostPrefix) !== null && n !== void 0 ? n : false, endpointProvider: (i = e35?.endpointProvider) !== null && i !== void 0 ? i : D9, extensions: (o = e35?.extensions) !== null && o !== void 0 ? o : [], logger: (s = e35?.logger) !== null && s !== void 0 ? s : new P9.NoOpLogger(), serviceId: (a = e35?.serviceId) !== null && a !== void 0 ? a : "SSO OIDC", urlParser: (u = e35?.urlParser) !== null && u !== void 0 ? u : I9.parseUrl, utf8Decoder: (l = e35?.utf8Decoder) !== null && l !== void 0 ? l : k1.fromUtf8, utf8Encoder: (p = e35?.utf8Encoder) !== null && p !== void 0 ? p : k1.toUtf8 };
  }, "k9"), F9 = A(), L9 = cu(), j9 = A(), U9 = /* @__PURE__ */ __name((e35) => {
    var t, r, n, i, o, s, a, u, l, p;
    (0, j9.emitWarningIfUnsupportedVersion)(process.version);
    let f = (0, L9.resolveDefaultsModeConfig)(e35), m = /* @__PURE__ */ __name(() => f().then(F9.loadConfigsForDefaultMode), "m"), h = k9(e35);
    return { ...h, ...e35, runtime: "node", defaultsMode: f, bodyLengthChecker: (t = e35?.bodyLengthChecker) !== null && t !== void 0 ? t : A9.calculateBodyLength, defaultUserAgentProvider: (r = e35?.defaultUserAgentProvider) !== null && r !== void 0 ? r : (0, C9.defaultUserAgent)({ serviceId: h.serviceId, clientVersion: x9.version }), maxAttempts: (n = e35?.maxAttempts) !== null && n !== void 0 ? n : (0, hu.loadConfig)(q1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS), region: (i = e35?.region) !== null && i !== void 0 ? i : (0, hu.loadConfig)(lh.NODE_REGION_CONFIG_OPTIONS, lh.NODE_REGION_CONFIG_FILE_OPTIONS), requestHandler: (o = e35?.requestHandler) !== null && o !== void 0 ? o : new M1.NodeHttpHandler(m), retryMode: (s = e35?.retryMode) !== null && s !== void 0 ? s : (0, hu.loadConfig)({ ...q1.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await m()).retryMode || T9.DEFAULT_RETRY_MODE }), sha256: (a = e35?.sha256) !== null && a !== void 0 ? a : O9.Hash.bind(null, "sha256"), streamCollector: (u = e35?.streamCollector) !== null && u !== void 0 ? u : M1.streamCollector, useDualstackEndpoint: (l = e35?.useDualstackEndpoint) !== null && l !== void 0 ? l : (0, hu.loadConfig)(lh.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS), useFipsEndpoint: (p = e35?.useFipsEndpoint) !== null && p !== void 0 ? p : (0, hu.loadConfig)(lh.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS) };
  }, "U9"), H1 = du(), G1 = Me(), Q1 = A(), hw = /* @__PURE__ */ __name((e35) => e35, "hw"), B9 = /* @__PURE__ */ __name((e35, t) => {
    let r = { ...hw((0, H1.getAwsRegionExtensionConfiguration)(e35)), ...hw((0, Q1.getDefaultExtensionConfiguration)(e35)), ...hw((0, G1.getHttpHandlerExtensionConfiguration)(e35)) };
    return t.forEach((n) => n.configure(r)), { ...e35, ...(0, H1.resolveAwsRegionExtensionConfiguration)(r), ...(0, Q1.resolveDefaultRuntimeConfig)(r), ...(0, G1.resolveHttpHandlerRuntimeConfig)(r) };
  }, "B9"), Z1 = class extends N9.Client {
    static {
      __name(this, "Z1");
    }
    constructor(...[e35]) {
      let t = U9(e35 || {}), r = b9(t), n = (0, E9.resolveRegionConfig)(r), i = (0, S9.resolveEndpointConfig)(n), o = (0, R1.resolveRetryConfig)(i), s = (0, P1.resolveHostHeaderConfig)(o), a = (0, I1.resolveUserAgentConfig)(s), u = B9(a, e35?.extensions || []);
      super(u), this.config = u, this.middlewareStack.use((0, R1.getRetryPlugin)(this.config)), this.middlewareStack.use((0, w9.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, P1.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, g9.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, v9.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, I1.getUserAgentPlugin)(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
  ie.SSOOIDCClient = Z1;
  var W9 = A(), V9 = te(), $9 = ye(), z9 = A(), H9 = K(), gw = Me(), g = A(), G9 = A(), Tt = class eM extends G9.ServiceException {
    static {
      __name(this, "eM");
    }
    constructor(t) {
      super(t), Object.setPrototypeOf(this, eM.prototype);
    }
  }, tM = class rM extends Tt {
    static {
      __name(this, "rM");
    }
    constructor(t) {
      super({ name: "AccessDeniedException", $fault: "client", ...t }), this.name = "AccessDeniedException", this.$fault = "client", Object.setPrototypeOf(this, rM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  };
  ie.AccessDeniedException = tM;
  var nM = class iM extends Tt {
    static {
      __name(this, "iM");
    }
    constructor(t) {
      super({ name: "AuthorizationPendingException", $fault: "client", ...t }), this.name = "AuthorizationPendingException", this.$fault = "client", Object.setPrototypeOf(this, iM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  };
  ie.AuthorizationPendingException = nM;
  var oM = class sM extends Tt {
    static {
      __name(this, "sM");
    }
    constructor(t) {
      super({ name: "ExpiredTokenException", $fault: "client", ...t }), this.name = "ExpiredTokenException", this.$fault = "client", Object.setPrototypeOf(this, sM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  };
  ie.ExpiredTokenException = oM;
  var aM = class cM extends Tt {
    static {
      __name(this, "cM");
    }
    constructor(t) {
      super({ name: "InternalServerException", $fault: "server", ...t }), this.name = "InternalServerException", this.$fault = "server", Object.setPrototypeOf(this, cM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  };
  ie.InternalServerException = aM;
  var uM = class dM extends Tt {
    static {
      __name(this, "dM");
    }
    constructor(t) {
      super({ name: "InvalidClientException", $fault: "client", ...t }), this.name = "InvalidClientException", this.$fault = "client", Object.setPrototypeOf(this, dM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  };
  ie.InvalidClientException = uM;
  var Q9 = class lM extends Tt {
    static {
      __name(this, "lM");
    }
    constructor(t) {
      super({ name: "InvalidGrantException", $fault: "client", ...t }), this.name = "InvalidGrantException", this.$fault = "client", Object.setPrototypeOf(this, lM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, pM = class fM extends Tt {
    static {
      __name(this, "fM");
    }
    constructor(t) {
      super({ name: "InvalidRequestException", $fault: "client", ...t }), this.name = "InvalidRequestException", this.$fault = "client", Object.setPrototypeOf(this, fM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  };
  ie.InvalidRequestException = pM;
  var mM = class hM extends Tt {
    static {
      __name(this, "hM");
    }
    constructor(t) {
      super({ name: "InvalidScopeException", $fault: "client", ...t }), this.name = "InvalidScopeException", this.$fault = "client", Object.setPrototypeOf(this, hM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  };
  ie.InvalidScopeException = mM;
  var _M = class yM extends Tt {
    static {
      __name(this, "yM");
    }
    constructor(t) {
      super({ name: "SlowDownException", $fault: "client", ...t }), this.name = "SlowDownException", this.$fault = "client", Object.setPrototypeOf(this, yM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  };
  ie.SlowDownException = _M;
  var gM = class vM extends Tt {
    static {
      __name(this, "vM");
    }
    constructor(t) {
      super({ name: "UnauthorizedClientException", $fault: "client", ...t }), this.name = "UnauthorizedClientException", this.$fault = "client", Object.setPrototypeOf(this, vM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  };
  ie.UnauthorizedClientException = gM;
  var EM = class wM extends Tt {
    static {
      __name(this, "wM");
    }
    constructor(t) {
      super({ name: "UnsupportedGrantTypeException", $fault: "client", ...t }), this.name = "UnsupportedGrantTypeException", this.$fault = "client", Object.setPrototypeOf(this, wM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  };
  ie.UnsupportedGrantTypeException = EM;
  var K9 = class SM extends Tt {
    static {
      __name(this, "SM");
    }
    constructor(t) {
      super({ name: "InvalidClientMetadataException", $fault: "client", ...t }), this.name = "InvalidClientMetadataException", this.$fault = "client", Object.setPrototypeOf(this, SM.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Y9 = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = { "content-type": "application/json" }, a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/token`, u;
    return u = JSON.stringify((0, g.take)(e35, { clientId: [], clientSecret: [], code: [], deviceCode: [], grantType: [], redirectUri: [], refreshToken: [], scope: (l) => (0, g._json)(l) })), new gw.HttpRequest({ protocol: n, hostname: r, port: i, method: "POST", headers: s, path: a, body: u });
  }, "Y9"), J9 = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = { "content-type": "application/json" }, a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/client/register`, u;
    return u = JSON.stringify((0, g.take)(e35, { clientName: [], clientType: [], scopes: (l) => (0, g._json)(l) })), new gw.HttpRequest({ protocol: n, hostname: r, port: i, method: "POST", headers: s, path: a, body: u });
  }, "J9"), X9 = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = { "content-type": "application/json" }, a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/device_authorization`, u;
    return u = JSON.stringify((0, g.take)(e35, { clientId: [], clientSecret: [], startUrl: [] })), new gw.HttpRequest({ protocol: n, hostname: r, port: i, method: "POST", headers: s, path: a, body: u });
  }, "X9"), Z9 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return e72(e35, t);
    let r = (0, g.map)({ $metadata: at(e35) }), n = (0, g.expectNonNull)((0, g.expectObject)(await ph(e35.body, t)), "body"), i = (0, g.take)(n, { accessToken: g.expectString, expiresIn: g.expectInt32, idToken: g.expectString, refreshToken: g.expectString, tokenType: g.expectString });
    return Object.assign(r, i), r;
  }, "Z9"), e72 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await Sw(e35.body, t) }, n = Nw(e35, r.body);
    switch (n) {
      case "AccessDeniedException":
      case "com.amazonaws.ssooidc#AccessDeniedException":
        throw await o7(r, t);
      case "AuthorizationPendingException":
      case "com.amazonaws.ssooidc#AuthorizationPendingException":
        throw await s7(r, t);
      case "ExpiredTokenException":
      case "com.amazonaws.ssooidc#ExpiredTokenException":
        throw await a7(r, t);
      case "InternalServerException":
      case "com.amazonaws.ssooidc#InternalServerException":
        throw await Ew(r, t);
      case "InvalidClientException":
      case "com.amazonaws.ssooidc#InvalidClientException":
        throw await NM(r, t);
      case "InvalidGrantException":
      case "com.amazonaws.ssooidc#InvalidGrantException":
        throw await u7(r, t);
      case "InvalidRequestException":
      case "com.amazonaws.ssooidc#InvalidRequestException":
        throw await ww(r, t);
      case "InvalidScopeException":
      case "com.amazonaws.ssooidc#InvalidScopeException":
        throw await bM(r, t);
      case "SlowDownException":
      case "com.amazonaws.ssooidc#SlowDownException":
        throw await xM(r, t);
      case "UnauthorizedClientException":
      case "com.amazonaws.ssooidc#UnauthorizedClientException":
        throw await CM(r, t);
      case "UnsupportedGrantTypeException":
      case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
        throw await d7(r, t);
      default:
        let i = r.body;
        return vw({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "e7"), t7 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return r7(e35, t);
    let r = (0, g.map)({ $metadata: at(e35) }), n = (0, g.expectNonNull)((0, g.expectObject)(await ph(e35.body, t)), "body"), i = (0, g.take)(n, { authorizationEndpoint: g.expectString, clientId: g.expectString, clientIdIssuedAt: g.expectLong, clientSecret: g.expectString, clientSecretExpiresAt: g.expectLong, tokenEndpoint: g.expectString });
    return Object.assign(r, i), r;
  }, "t7"), r7 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await Sw(e35.body, t) }, n = Nw(e35, r.body);
    switch (n) {
      case "InternalServerException":
      case "com.amazonaws.ssooidc#InternalServerException":
        throw await Ew(r, t);
      case "InvalidClientMetadataException":
      case "com.amazonaws.ssooidc#InvalidClientMetadataException":
        throw await c7(r, t);
      case "InvalidRequestException":
      case "com.amazonaws.ssooidc#InvalidRequestException":
        throw await ww(r, t);
      case "InvalidScopeException":
      case "com.amazonaws.ssooidc#InvalidScopeException":
        throw await bM(r, t);
      default:
        let i = r.body;
        return vw({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "r7"), n7 = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return i7(e35, t);
    let r = (0, g.map)({ $metadata: at(e35) }), n = (0, g.expectNonNull)((0, g.expectObject)(await ph(e35.body, t)), "body"), i = (0, g.take)(n, { deviceCode: g.expectString, expiresIn: g.expectInt32, interval: g.expectInt32, userCode: g.expectString, verificationUri: g.expectString, verificationUriComplete: g.expectString });
    return Object.assign(r, i), r;
  }, "n7"), i7 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await Sw(e35.body, t) }, n = Nw(e35, r.body);
    switch (n) {
      case "InternalServerException":
      case "com.amazonaws.ssooidc#InternalServerException":
        throw await Ew(r, t);
      case "InvalidClientException":
      case "com.amazonaws.ssooidc#InvalidClientException":
        throw await NM(r, t);
      case "InvalidRequestException":
      case "com.amazonaws.ssooidc#InvalidRequestException":
        throw await ww(r, t);
      case "SlowDownException":
      case "com.amazonaws.ssooidc#SlowDownException":
        throw await xM(r, t);
      case "UnauthorizedClientException":
      case "com.amazonaws.ssooidc#UnauthorizedClientException":
        throw await CM(r, t);
      default:
        let i = r.body;
        return vw({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "i7"), vw = (0, g.withBaseException)(Tt), o7 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new tM({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "o7"), s7 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new nM({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "s7"), a7 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new oM({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "a7"), Ew = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new aM({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "Ew"), NM = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new uM({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "NM"), c7 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new K9({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "c7"), u7 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new Q9({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "u7"), ww = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new pM({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "ww"), bM = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new mM({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "bM"), xM = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new _M({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "xM"), CM = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new gM({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "CM"), d7 = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, g.map)({}), n = e35.body, i = (0, g.take)(n, { error: g.expectString, error_description: g.expectString });
    Object.assign(r, i);
    let o = new EM({ $metadata: at(e35), ...r });
    return (0, g.decorateServiceException)(o, e35.body);
  }, "d7"), at = /* @__PURE__ */ __name((e35) => {
    var t, r;
    return { httpStatusCode: e35.statusCode, requestId: (r = (t = e35.headers["x-amzn-requestid"]) !== null && t !== void 0 ? t : e35.headers["x-amzn-request-id"]) !== null && r !== void 0 ? r : e35.headers["x-amz-request-id"], extendedRequestId: e35.headers["x-amz-id-2"], cfId: e35.headers["x-amz-cf-id"] };
  }, "at"), l7 = /* @__PURE__ */ __name((e35, t) => (0, g.collectBody)(e35, t).then((r) => t.utf8Encoder(r)), "l7"), ph = /* @__PURE__ */ __name((e35, t) => l7(e35, t).then((r) => r.length ? JSON.parse(r) : {}), "ph"), Sw = /* @__PURE__ */ __name(async (e35, t) => {
    var r;
    let n = await ph(e35, t);
    return n.message = (r = n.message) !== null && r !== void 0 ? r : n.Message, n;
  }, "Sw"), Nw = /* @__PURE__ */ __name((e35, t) => {
    let r = /* @__PURE__ */ __name((o, s) => Object.keys(o).find((a) => a.toLowerCase() === s.toLowerCase()), "r"), n = /* @__PURE__ */ __name((o) => {
      let s = o;
      return typeof s == "number" && (s = s.toString()), s.indexOf(",") >= 0 && (s = s.split(",")[0]), s.indexOf(":") >= 0 && (s = s.split(":")[0]), s.indexOf("#") >= 0 && (s = s.split("#")[1]), s;
    }, "n"), i = r(e35.headers, "x-amzn-errortype");
    if (i !== void 0)
      return n(e35.headers[i]);
    if (t.code !== void 0)
      return n(t.code);
    if (t.__type !== void 0)
      return n(t.__type);
  }, "Nw"), OM = class AM extends z9.Command {
    static {
      __name(this, "AM");
    }
    constructor(t) {
      super(), this.input = t;
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, $9.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, V9.getEndpointPlugin)(r, AM.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "SSOOIDCClient", commandName: "CreateTokenCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [H9.SMITHY_CONTEXT_KEY]: { service: "AWSSSOOIDCService", operation: "CreateToken" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return Y9(t, r);
    }
    deserialize(t, r) {
      return Z9(t, r);
    }
  };
  ie.CreateTokenCommand = OM;
  var p7 = te(), f7 = ye(), m7 = A(), h7 = K(), _7 = class TM extends m7.Command {
    static {
      __name(this, "TM");
    }
    constructor(t) {
      super(), this.input = t;
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, f7.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, p7.getEndpointPlugin)(r, TM.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "SSOOIDCClient", commandName: "RegisterClientCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [h7.SMITHY_CONTEXT_KEY]: { service: "AWSSSOOIDCService", operation: "RegisterClient" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return J9(t, r);
    }
    deserialize(t, r) {
      return t7(t, r);
    }
  }, y7 = te(), g7 = ye(), v7 = A(), E7 = K(), w7 = class PM extends v7.Command {
    static {
      __name(this, "PM");
    }
    constructor(t) {
      super(), this.input = t;
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, g7.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, y7.getEndpointPlugin)(r, PM.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "SSOOIDCClient", commandName: "StartDeviceAuthorizationCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [E7.SMITHY_CONTEXT_KEY]: { service: "AWSSSOOIDCService", operation: "StartDeviceAuthorization" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return X9(t, r);
    }
    deserialize(t, r) {
      return n7(t, r);
    }
  }, S7 = { CreateTokenCommand: OM, RegisterClientCommand: _7, StartDeviceAuthorizationCommand: w7 }, N7 = class extends Z1 {
    static {
      __name(this, "N7");
    }
  };
  (0, W9.createAggregatedClient)(S7, N7);
});
var mh = c((Vs) => {
  "use strict";
  Object.defineProperty(Vs, "__esModule", { value: true });
  Vs.REFRESH_MESSAGE = Vs.EXPIRE_WINDOW_MS = void 0;
  Vs.EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
  Vs.REFRESH_MESSAGE = "To refresh this SSO session run 'aws sso login' with the corresponding profile.";
});
var IM = c((hh) => {
  "use strict";
  Object.defineProperty(hh, "__esModule", { value: true });
  hh.getSsoOidcClient = void 0;
  var b7 = fh(), bw = {}, x7 = /* @__PURE__ */ __name((e35) => {
    if (bw[e35])
      return bw[e35];
    let t = new b7.SSOOIDCClient({ region: e35 });
    return bw[e35] = t, t;
  }, "x7");
  hh.getSsoOidcClient = x7;
});
var RM = c((_h) => {
  "use strict";
  Object.defineProperty(_h, "__esModule", { value: true });
  _h.getNewSsoOidcToken = void 0;
  var C7 = fh(), O7 = IM(), A7 = /* @__PURE__ */ __name((e35, t) => (0, O7.getSsoOidcClient)(t).send(new C7.CreateTokenCommand({ clientId: e35.clientId, clientSecret: e35.clientSecret, refreshToken: e35.refreshToken, grantType: "refresh_token" })), "A7");
  _h.getNewSsoOidcToken = A7;
});
var qM = c((yh) => {
  "use strict";
  Object.defineProperty(yh, "__esModule", { value: true });
  yh.validateTokenExpiry = void 0;
  var T7 = Z(), P7 = mh(), I7 = /* @__PURE__ */ __name((e35) => {
    if (e35.expiration && e35.expiration.getTime() < Date.now())
      throw new T7.TokenProviderError(`Token is expired. ${P7.REFRESH_MESSAGE}`, false);
  }, "I7");
  yh.validateTokenExpiry = I7;
});
var MM = c((gh) => {
  "use strict";
  Object.defineProperty(gh, "__esModule", { value: true });
  gh.validateTokenKey = void 0;
  var R7 = Z(), q7 = mh(), M7 = /* @__PURE__ */ __name((e35, t, r = false) => {
    if (typeof t > "u")
      throw new R7.TokenProviderError(`Value not present for '${e35}' in SSO Token${r ? ". Cannot refresh" : ""}. ${q7.REFRESH_MESSAGE}`, false);
  }, "M7");
  gh.validateTokenKey = M7;
});
var DM = c((vh) => {
  "use strict";
  Object.defineProperty(vh, "__esModule", { value: true });
  vh.writeSSOTokenToFile = void 0;
  var D7 = er(), k7 = D("fs"), { writeFile: F7 } = k7.promises, L7 = /* @__PURE__ */ __name((e35, t) => {
    let r = (0, D7.getSSOTokenFilepath)(e35), n = JSON.stringify(t, null, 2);
    return F7(r, n);
  }, "L7");
  vh.writeSSOTokenToFile = L7;
});
var xw = c((wh) => {
  "use strict";
  Object.defineProperty(wh, "__esModule", { value: true });
  wh.fromSso = void 0;
  var _u = Z(), Eh = er(), kM = mh(), j7 = RM(), FM = qM(), ro = MM(), U7 = DM(), LM = /* @__PURE__ */ new Date(0), B7 = /* @__PURE__ */ __name((e35 = {}) => async () => {
    let t = await (0, Eh.parseKnownFiles)(e35), r = (0, Eh.getProfileName)(e35), n = t[r];
    if (n) {
      if (!n.sso_session)
        throw new _u.TokenProviderError(`Profile '${r}' is missing required property 'sso_session'.`);
    } else
      throw new _u.TokenProviderError(`Profile '${r}' could not be found in shared credentials file.`, false);
    let i = n.sso_session, s = (await (0, Eh.loadSsoSessionData)(e35))[i];
    if (!s)
      throw new _u.TokenProviderError(`Sso session '${i}' could not be found in shared credentials file.`, false);
    for (let h of ["sso_start_url", "sso_region"])
      if (!s[h])
        throw new _u.TokenProviderError(`Sso session '${i}' is missing required property '${h}'.`, false);
    let a = s.sso_start_url, u = s.sso_region, l;
    try {
      l = await (0, Eh.getSSOTokenFromFile)(i);
    } catch {
      throw new _u.TokenProviderError(`The SSO session token associated with profile=${r} was not found or is invalid. ${kM.REFRESH_MESSAGE}`, false);
    }
    (0, ro.validateTokenKey)("accessToken", l.accessToken), (0, ro.validateTokenKey)("expiresAt", l.expiresAt);
    let { accessToken: p, expiresAt: f } = l, m = { token: p, expiration: new Date(f) };
    if (m.expiration.getTime() - Date.now() > kM.EXPIRE_WINDOW_MS)
      return m;
    if (Date.now() - LM.getTime() < 30 * 1e3)
      return (0, FM.validateTokenExpiry)(m), m;
    (0, ro.validateTokenKey)("clientId", l.clientId, true), (0, ro.validateTokenKey)("clientSecret", l.clientSecret, true), (0, ro.validateTokenKey)("refreshToken", l.refreshToken, true);
    try {
      LM.setTime(Date.now());
      let h = await (0, j7.getNewSsoOidcToken)(l, u);
      (0, ro.validateTokenKey)("accessToken", h.accessToken), (0, ro.validateTokenKey)("expiresIn", h.expiresIn);
      let y = new Date(Date.now() + h.expiresIn * 1e3);
      try {
        await (0, U7.writeSSOTokenToFile)(i, { ...l, accessToken: h.accessToken, expiresAt: y.toISOString(), refreshToken: h.refreshToken });
      } catch {
      }
      return { token: h.accessToken, expiration: y };
    } catch {
      return (0, FM.validateTokenExpiry)(m), m;
    }
  }, "B7");
  wh.fromSso = B7;
});
var jM = c((Sh) => {
  "use strict";
  Object.defineProperty(Sh, "__esModule", { value: true });
  Sh.fromStatic = void 0;
  var W7 = Z(), V7 = /* @__PURE__ */ __name(({ token: e35 }) => async () => {
    if (!e35 || !e35.token)
      throw new W7.TokenProviderError("Please pass a valid token to fromStatic", false);
    return e35;
  }, "V7");
  Sh.fromStatic = V7;
});
var UM = c((Nh) => {
  "use strict";
  Object.defineProperty(Nh, "__esModule", { value: true });
  Nh.nodeProvider = void 0;
  var Cw = Z(), $7 = xw(), z7 = /* @__PURE__ */ __name((e35 = {}) => (0, Cw.memoize)((0, Cw.chain)((0, $7.fromSso)(e35), async () => {
    throw new Cw.TokenProviderError("Could not load token from any providers", false);
  }), (t) => t.expiration !== void 0 && t.expiration.getTime() - Date.now() < 3e5, (t) => t.expiration !== void 0), "z7");
  Nh.nodeProvider = z7;
});
var BM = c(($s) => {
  "use strict";
  Object.defineProperty($s, "__esModule", { value: true });
  var bh = (b(), S(N));
  bh.__exportStar(fh(), $s);
  bh.__exportStar(xw(), $s);
  bh.__exportStar(jM(), $s);
  bh.__exportStar(UM(), $s);
});
var VM = c((xh) => {
  "use strict";
  Object.defineProperty(xh, "__esModule", { value: true });
  xh.resolveSSOCredentials = void 0;
  var WM = T1(), H7 = BM(), yu = Z(), G7 = er(), gu = false, Q7 = /* @__PURE__ */ __name(async ({ ssoStartUrl: e35, ssoSession: t, ssoAccountId: r, ssoRegion: n, ssoRoleName: i, ssoClient: o, profile: s }) => {
    let a, u = "To refresh this SSO session run aws sso login with the corresponding profile.";
    if (t)
      try {
        let E = await (0, H7.fromSso)({ profile: s })();
        a = { accessToken: E.token, expiresAt: new Date(E.expiration).toISOString() };
      } catch (E) {
        throw new yu.CredentialsProviderError(E.message, gu);
      }
    else
      try {
        a = await (0, G7.getSSOTokenFromFile)(e35);
      } catch {
        throw new yu.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${u}`, gu);
      }
    if (new Date(a.expiresAt).getTime() - Date.now() <= 0)
      throw new yu.CredentialsProviderError(`The SSO session associated with this profile has expired. ${u}`, gu);
    let { accessToken: l } = a, p = o || new WM.SSOClient({ region: n }), f;
    try {
      f = await p.send(new WM.GetRoleCredentialsCommand({ accountId: r, roleName: i, accessToken: l }));
    } catch (E) {
      throw yu.CredentialsProviderError.from(E, gu);
    }
    let { roleCredentials: { accessKeyId: m, secretAccessKey: h, sessionToken: y, expiration: v } = {} } = f;
    if (!m || !h || !y || !v)
      throw new yu.CredentialsProviderError("SSO returns an invalid temporary credential.", gu);
    return { accessKeyId: m, secretAccessKey: h, sessionToken: y, expiration: new Date(v) };
  }, "Q7");
  xh.resolveSSOCredentials = Q7;
});
var Ow = c((Ch) => {
  "use strict";
  Object.defineProperty(Ch, "__esModule", { value: true });
  Ch.validateSsoProfile = void 0;
  var K7 = Z(), Y7 = /* @__PURE__ */ __name((e35) => {
    let { sso_start_url: t, sso_account_id: r, sso_region: n, sso_role_name: i } = e35;
    if (!t || !r || !n || !i)
      throw new K7.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e35).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
    return e35;
  }, "Y7");
  Ch.validateSsoProfile = Y7;
});
var zM = c((Oh) => {
  "use strict";
  Object.defineProperty(Oh, "__esModule", { value: true });
  Oh.fromSSO = void 0;
  var vu = Z(), Aw = er(), J7 = nE(), $M = VM(), X7 = Ow(), Z7 = /* @__PURE__ */ __name((e35 = {}) => async () => {
    let { ssoStartUrl: t, ssoAccountId: r, ssoRegion: n, ssoRoleName: i, ssoClient: o, ssoSession: s } = e35, a = (0, Aw.getProfileName)(e35);
    if (!t && !r && !n && !i && !s) {
      let l = (await (0, Aw.parseKnownFiles)(e35))[a];
      if (!l)
        throw new vu.CredentialsProviderError(`Profile ${a} was not found.`);
      if (!(0, J7.isSsoProfile)(l))
        throw new vu.CredentialsProviderError(`Profile ${a} is not configured with SSO credentials.`);
      if (l?.sso_session) {
        let E = (await (0, Aw.loadSsoSessionData)(e35))[l.sso_session], T = ` configurations in profile ${a} and sso-session ${l.sso_session}`;
        if (n && n !== E.sso_region)
          throw new vu.CredentialsProviderError("Conflicting SSO region" + T, false);
        if (t && t !== E.sso_start_url)
          throw new vu.CredentialsProviderError("Conflicting SSO start_url" + T, false);
        l.sso_region = E.sso_region, l.sso_start_url = E.sso_start_url;
      }
      let { sso_start_url: p, sso_account_id: f, sso_region: m, sso_role_name: h, sso_session: y } = (0, X7.validateSsoProfile)(l);
      return (0, $M.resolveSSOCredentials)({ ssoStartUrl: p, ssoSession: y, ssoAccountId: f, ssoRegion: m, ssoRoleName: h, ssoClient: o, profile: a });
    } else {
      if (!t || !r || !n || !i)
        throw new vu.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
      return (0, $M.resolveSSOCredentials)({ ssoStartUrl: t, ssoSession: s, ssoAccountId: r, ssoRegion: n, ssoRoleName: i, ssoClient: o, profile: a });
    }
  }, "Z7");
  Oh.fromSSO = Z7;
});
var GM = c((HM) => {
  "use strict";
  Object.defineProperty(HM, "__esModule", { value: true });
});
var Th = c((zs) => {
  "use strict";
  Object.defineProperty(zs, "__esModule", { value: true });
  var Ah = (b(), S(N));
  Ah.__exportStar(zM(), zs);
  Ah.__exportStar(nE(), zs);
  Ah.__exportStar(GM(), zs);
  Ah.__exportStar(Ow(), zs);
});
var KM = c((Hs) => {
  "use strict";
  Object.defineProperty(Hs, "__esModule", { value: true });
  Hs.resolveSsoCredentials = Hs.isSsoProfile = void 0;
  var QM = Th(), eY = Th();
  Object.defineProperty(Hs, "isSsoProfile", { enumerable: true, get: function() {
    return eY.isSsoProfile;
  } });
  var tY = /* @__PURE__ */ __name((e35) => {
    let { sso_start_url: t, sso_account_id: r, sso_session: n, sso_region: i, sso_role_name: o } = (0, QM.validateSsoProfile)(e35);
    return (0, QM.fromSSO)({ ssoStartUrl: t, ssoAccountId: r, ssoSession: n, ssoRegion: i, ssoRoleName: o })();
  }, "tY");
  Hs.resolveSsoCredentials = tY;
});
var YM = c((Gs) => {
  "use strict";
  Object.defineProperty(Gs, "__esModule", { value: true });
  Gs.resolveStaticCredentials = Gs.isStaticCredsProfile = void 0;
  var rY = /* @__PURE__ */ __name((e35) => !!e35 && typeof e35 == "object" && typeof e35.aws_access_key_id == "string" && typeof e35.aws_secret_access_key == "string" && ["undefined", "string"].indexOf(typeof e35.aws_session_token) > -1, "rY");
  Gs.isStaticCredsProfile = rY;
  var nY = /* @__PURE__ */ __name((e35) => Promise.resolve({ accessKeyId: e35.aws_access_key_id, secretAccessKey: e35.aws_secret_access_key, sessionToken: e35.aws_session_token }), "nY");
  Gs.resolveStaticCredentials = nY;
});
var Tw = c((Ph) => {
  "use strict";
  Object.defineProperty(Ph, "__esModule", { value: true });
  Ph.fromWebToken = void 0;
  var iY = Z(), oY = /* @__PURE__ */ __name((e35) => () => {
    let { roleArn: t, roleSessionName: r, webIdentityToken: n, providerId: i, policyArns: o, policy: s, durationSeconds: a, roleAssumerWithWebIdentity: u } = e35;
    if (!u)
      throw new iY.CredentialsProviderError(`Role Arn '${t}' needs to be assumed with web identity, but no role assumption callback was provided.`, false);
    return u({ RoleArn: t, RoleSessionName: r ?? `aws-sdk-js-session-${Date.now()}`, WebIdentityToken: n, ProviderId: i, PolicyArns: o, Policy: s, DurationSeconds: a });
  }, "oY");
  Ph.fromWebToken = oY;
});
var JM = c((Ih) => {
  "use strict";
  Object.defineProperty(Ih, "__esModule", { value: true });
  Ih.fromTokenFile = void 0;
  var sY = Z(), aY = D("fs"), cY = Tw(), uY = "AWS_WEB_IDENTITY_TOKEN_FILE", dY = "AWS_ROLE_ARN", lY = "AWS_ROLE_SESSION_NAME", pY = /* @__PURE__ */ __name((e35 = {}) => async () => {
    var t, r, n;
    let i = (t = e35?.webIdentityTokenFile) !== null && t !== void 0 ? t : process.env[uY], o = (r = e35?.roleArn) !== null && r !== void 0 ? r : process.env[dY], s = (n = e35?.roleSessionName) !== null && n !== void 0 ? n : process.env[lY];
    if (!i || !o)
      throw new sY.CredentialsProviderError("Web identity configuration not specified");
    return (0, cY.fromWebToken)({ ...e35, webIdentityToken: (0, aY.readFileSync)(i, { encoding: "ascii" }), roleArn: o, roleSessionName: s })();
  }, "pY");
  Ih.fromTokenFile = pY;
});
var Pw = c((Rh) => {
  "use strict";
  Object.defineProperty(Rh, "__esModule", { value: true });
  var XM = (b(), S(N));
  XM.__exportStar(JM(), Rh);
  XM.__exportStar(Tw(), Rh);
});
var ZM = c((Qs) => {
  "use strict";
  Object.defineProperty(Qs, "__esModule", { value: true });
  Qs.resolveWebIdentityCredentials = Qs.isWebIdentityProfile = void 0;
  var fY = Pw(), mY = /* @__PURE__ */ __name((e35) => !!e35 && typeof e35 == "object" && typeof e35.web_identity_token_file == "string" && typeof e35.role_arn == "string" && ["undefined", "string"].indexOf(typeof e35.role_session_name) > -1, "mY");
  Qs.isWebIdentityProfile = mY;
  var hY = /* @__PURE__ */ __name(async (e35, t) => (0, fY.fromTokenFile)({ webIdentityTokenFile: e35.web_identity_token_file, roleArn: e35.role_arn, roleSessionName: e35.role_session_name, roleAssumerWithWebIdentity: t.roleAssumerWithWebIdentity })(), "hY");
  Qs.resolveWebIdentityCredentials = hY;
});
var Zv = c((Mh) => {
  "use strict";
  Object.defineProperty(Mh, "__esModule", { value: true });
  Mh.resolveProfileData = void 0;
  var _Y = Z(), eD = lR(), tD = _R(), rD = KM(), qh = YM(), nD = ZM(), yY = /* @__PURE__ */ __name(async (e35, t, r, n = {}) => {
    let i = t[e35];
    if (Object.keys(n).length > 0 && (0, qh.isStaticCredsProfile)(i))
      return (0, qh.resolveStaticCredentials)(i);
    if ((0, eD.isAssumeRoleProfile)(i))
      return (0, eD.resolveAssumeRoleCredentials)(e35, t, r, n);
    if ((0, qh.isStaticCredsProfile)(i))
      return (0, qh.resolveStaticCredentials)(i);
    if ((0, nD.isWebIdentityProfile)(i))
      return (0, nD.resolveWebIdentityCredentials)(i, r);
    if ((0, tD.isProcessProfile)(i))
      return (0, tD.resolveProcessCredentials)(r, e35);
    if ((0, rD.isSsoProfile)(i))
      return (0, rD.resolveSsoCredentials)(i);
    throw new _Y.CredentialsProviderError(`Profile ${e35} could not be found or parsed in shared credentials file.`);
  }, "yY");
  Mh.resolveProfileData = yY;
});
var oD = c((Dh) => {
  "use strict";
  Object.defineProperty(Dh, "__esModule", { value: true });
  Dh.fromIni = void 0;
  var iD = er(), gY = Zv(), vY = /* @__PURE__ */ __name((e35 = {}) => async () => {
    let t = await (0, iD.parseKnownFiles)(e35);
    return (0, gY.resolveProfileData)((0, iD.getProfileName)(e35), t, e35);
  }, "vY");
  Dh.fromIni = vY;
});
var sD = c((Iw) => {
  "use strict";
  Object.defineProperty(Iw, "__esModule", { value: true });
  var EY = (b(), S(N));
  EY.__exportStar(oD(), Iw);
});
var aD = c((no) => {
  "use strict";
  Object.defineProperty(no, "__esModule", { value: true });
  no.remoteProvider = no.ENV_IMDS_DISABLED = void 0;
  var kh = sm(), wY = Z();
  no.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
  var SY = /* @__PURE__ */ __name((e35) => process.env[kh.ENV_CMDS_RELATIVE_URI] || process.env[kh.ENV_CMDS_FULL_URI] ? (0, kh.fromContainerMetadata)(e35) : process.env[no.ENV_IMDS_DISABLED] ? async () => {
    throw new wY.CredentialsProviderError("EC2 Instance Metadata Service access disabled");
  } : (0, kh.fromInstanceMetadata)(e35), "SY");
  no.remoteProvider = SY;
});
var cD = c((Fh) => {
  "use strict";
  Object.defineProperty(Fh, "__esModule", { value: true });
  Fh.defaultProvider = void 0;
  var NY = $v(), bY = sD(), xY = rE(), CY = Th(), OY = Pw(), Rw = Z(), AY = er(), TY = aD(), PY = /* @__PURE__ */ __name((e35 = {}) => (0, Rw.memoize)((0, Rw.chain)(...e35.profile || process.env[AY.ENV_PROFILE] ? [] : [(0, NY.fromEnv)()], (0, CY.fromSSO)(e35), (0, bY.fromIni)(e35), (0, xY.fromProcess)(e35), (0, OY.fromTokenFile)(e35), (0, TY.remoteProvider)(e35), async () => {
    throw new Rw.CredentialsProviderError("Could not load credentials from any providers", false);
  }), (t) => t.expiration !== void 0 && t.expiration.getTime() - Date.now() < 3e5, (t) => t.expiration !== void 0), "PY");
  Fh.defaultProvider = PY;
});
var Mw = c((qw) => {
  "use strict";
  Object.defineProperty(qw, "__esModule", { value: true });
  var IY = (b(), S(N));
  IY.__exportStar(cD(), qw);
});
var PD = c((Lh) => {
  "use strict";
  Object.defineProperty(Lh, "__esModule", { value: true });
  Lh.ruleSet = void 0;
  var ED = "required", F = "type", Y = "fn", J = "argv", _i = "ref", uD = false, RY = true, io = "booleanEquals", Wr = "tree", ze = "stringEquals", wD = "sigv4", SD = "sts", ND = "us-east-1", fe = "endpoint", dD = "https://sts.{Region}.{PartitionResult#dnsSuffix}", Ks = "error", kw = "getAttr", lD = { [ED]: false, [F]: "String" }, Dw = { [ED]: true, default: false, [F]: "Boolean" }, bD = { [_i]: "Endpoint" }, pD = { [Y]: "isSet", [J]: [{ [_i]: "Region" }] }, He = { [_i]: "Region" }, fD = { [Y]: "aws.partition", [J]: [He], assign: "PartitionResult" }, xD = { [_i]: "UseFIPS" }, CD = { [_i]: "UseDualStack" }, Ze = { url: "https://sts.amazonaws.com", properties: { authSchemes: [{ name: wD, signingName: SD, signingRegion: ND }] }, headers: {} }, Pt = {}, mD = { conditions: [{ [Y]: ze, [J]: [He, "aws-global"] }], [fe]: Ze, [F]: fe }, OD = { [Y]: io, [J]: [xD, true] }, AD = { [Y]: io, [J]: [CD, true] }, hD = { [Y]: io, [J]: [true, { [Y]: kw, [J]: [{ [_i]: "PartitionResult" }, "supportsFIPS"] }] }, TD = { [_i]: "PartitionResult" }, _D = { [Y]: io, [J]: [true, { [Y]: kw, [J]: [TD, "supportsDualStack"] }] }, yD = [{ [Y]: "isSet", [J]: [bD] }], gD = [OD], vD = [AD], qY = { version: "1.0", parameters: { Region: lD, UseDualStack: Dw, UseFIPS: Dw, Endpoint: lD, UseGlobalEndpoint: Dw }, rules: [{ conditions: [{ [Y]: io, [J]: [{ [_i]: "UseGlobalEndpoint" }, RY] }, { [Y]: "not", [J]: yD }, pD, fD, { [Y]: io, [J]: [xD, uD] }, { [Y]: io, [J]: [CD, uD] }], [F]: Wr, rules: [{ conditions: [{ [Y]: ze, [J]: [He, "ap-northeast-1"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "ap-south-1"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "ap-southeast-1"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "ap-southeast-2"] }], endpoint: Ze, [F]: fe }, mD, { conditions: [{ [Y]: ze, [J]: [He, "ca-central-1"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "eu-central-1"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "eu-north-1"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "eu-west-1"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "eu-west-2"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "eu-west-3"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "sa-east-1"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, ND] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "us-east-2"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "us-west-1"] }], endpoint: Ze, [F]: fe }, { conditions: [{ [Y]: ze, [J]: [He, "us-west-2"] }], endpoint: Ze, [F]: fe }, { endpoint: { url: dD, properties: { authSchemes: [{ name: wD, signingName: SD, signingRegion: "{Region}" }] }, headers: Pt }, [F]: fe }] }, { conditions: yD, [F]: Wr, rules: [{ conditions: gD, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [F]: Ks }, { conditions: vD, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [F]: Ks }, { endpoint: { url: bD, properties: Pt, headers: Pt }, [F]: fe }] }, { conditions: [pD], [F]: Wr, rules: [{ conditions: [fD], [F]: Wr, rules: [{ conditions: [OD, AD], [F]: Wr, rules: [{ conditions: [hD, _D], [F]: Wr, rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: Pt, headers: Pt }, [F]: fe }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [F]: Ks }] }, { conditions: gD, [F]: Wr, rules: [{ conditions: [hD], [F]: Wr, rules: [{ conditions: [{ [Y]: ze, [J]: ["aws-us-gov", { [Y]: kw, [J]: [TD, "name"] }] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: Pt, headers: Pt }, [F]: fe }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: Pt, headers: Pt }, [F]: fe }] }, { error: "FIPS is enabled but this partition does not support FIPS", [F]: Ks }] }, { conditions: vD, [F]: Wr, rules: [{ conditions: [_D], [F]: Wr, rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: Pt, headers: Pt }, [F]: fe }] }, { error: "DualStack is enabled but this partition does not support DualStack", [F]: Ks }] }, mD, { endpoint: { url: dD, properties: Pt, headers: Pt }, [F]: fe }] }] }, { error: "Invalid Configuration: Missing Region", [F]: Ks }] };
  Lh.ruleSet = qY;
});
var ID = c((jh) => {
  "use strict";
  Object.defineProperty(jh, "__esModule", { value: true });
  jh.defaultEndpointResolver = void 0;
  var MY = Ko(), DY = PD(), kY = /* @__PURE__ */ __name((e35, t = {}) => (0, MY.resolveEndpoint)(DY.ruleSet, { endpointParams: e35, logger: t.logger }), "kY");
  jh.defaultEndpointResolver = kY;
});
var MD = c((Uh) => {
  "use strict";
  Object.defineProperty(Uh, "__esModule", { value: true });
  Uh.getRuntimeConfig = void 0;
  var FY = A(), LY = Wi(), RD = rs(), qD = Sr(), jY = ID(), UY = /* @__PURE__ */ __name((e35) => ({ apiVersion: "2011-06-15", base64Decoder: e35?.base64Decoder ?? RD.fromBase64, base64Encoder: e35?.base64Encoder ?? RD.toBase64, disableHostPrefix: e35?.disableHostPrefix ?? false, endpointProvider: e35?.endpointProvider ?? jY.defaultEndpointResolver, extensions: e35?.extensions ?? [], logger: e35?.logger ?? new FY.NoOpLogger(), serviceId: e35?.serviceId ?? "STS", urlParser: e35?.urlParser ?? LY.parseUrl, utf8Decoder: e35?.utf8Decoder ?? qD.fromUtf8, utf8Encoder: e35?.utf8Encoder ?? qD.toUtf8 }), "UY");
  Uh.getRuntimeConfig = UY;
});
var FD = c((Wh) => {
  "use strict";
  Object.defineProperty(Wh, "__esModule", { value: true });
  Wh.getRuntimeConfig = void 0;
  var BY = (b(), S(N)), WY = BY.__importDefault(nI()), VY = Wv(), $Y = Mw(), zY = ou(), Bh = xr(), HY = su(), DD = un(), Eu = on(), kD = os(), GY = au(), QY = Ut(), KY = MD(), YY = A(), JY = cu(), XY = A(), ZY = /* @__PURE__ */ __name((e35) => {
    (0, XY.emitWarningIfUnsupportedVersion)(process.version);
    let t = (0, JY.resolveDefaultsModeConfig)(e35), r = /* @__PURE__ */ __name(() => t().then(YY.loadConfigsForDefaultMode), "r"), n = (0, KY.getRuntimeConfig)(e35);
    return { ...n, ...e35, runtime: "node", defaultsMode: t, bodyLengthChecker: e35?.bodyLengthChecker ?? GY.calculateBodyLength, credentialDefaultProvider: e35?.credentialDefaultProvider ?? (0, VY.decorateDefaultCredentialProvider)($Y.defaultProvider), defaultUserAgentProvider: e35?.defaultUserAgentProvider ?? (0, zY.defaultUserAgent)({ serviceId: n.serviceId, clientVersion: WY.default.version }), maxAttempts: e35?.maxAttempts ?? (0, Eu.loadConfig)(DD.NODE_MAX_ATTEMPT_CONFIG_OPTIONS), region: e35?.region ?? (0, Eu.loadConfig)(Bh.NODE_REGION_CONFIG_OPTIONS, Bh.NODE_REGION_CONFIG_FILE_OPTIONS), requestHandler: e35?.requestHandler ?? new kD.NodeHttpHandler(r), retryMode: e35?.retryMode ?? (0, Eu.loadConfig)({ ...DD.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await r()).retryMode || QY.DEFAULT_RETRY_MODE }), sha256: e35?.sha256 ?? HY.Hash.bind(null, "sha256"), streamCollector: e35?.streamCollector ?? kD.streamCollector, useDualstackEndpoint: e35?.useDualstackEndpoint ?? (0, Eu.loadConfig)(Bh.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS), useFipsEndpoint: e35?.useFipsEndpoint ?? (0, Eu.loadConfig)(Bh.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS) };
  }, "ZY");
  Wh.getRuntimeConfig = ZY;
});
var BD = c((Vh) => {
  "use strict";
  Object.defineProperty(Vh, "__esModule", { value: true });
  Vh.resolveRuntimeExtensions = void 0;
  var LD = du(), jD = Me(), UD = A(), Fw = /* @__PURE__ */ __name((e35) => e35, "Fw"), eJ = /* @__PURE__ */ __name((e35, t) => {
    let r = { ...Fw((0, LD.getAwsRegionExtensionConfiguration)(e35)), ...Fw((0, UD.getDefaultExtensionConfiguration)(e35)), ...Fw((0, jD.getHttpHandlerExtensionConfiguration)(e35)) };
    return t.forEach((n) => n.configure(r)), { ...e35, ...(0, LD.resolveAwsRegionExtensionConfiguration)(r), ...(0, UD.resolveDefaultRuntimeConfig)(r), ...(0, jD.resolveHttpHandlerRuntimeConfig)(r) };
  }, "eJ");
  Vh.resolveRuntimeExtensions = eJ;
});
var $h = c((Ys) => {
  "use strict";
  Object.defineProperty(Ys, "__esModule", { value: true });
  Ys.STSClient = Ys.__Client = void 0;
  var WD = lc(), tJ = pc(), rJ = fc(), nJ = tI(), VD = Cc(), iJ = xr(), oJ = Tc(), sJ = te(), $D = un(), zD = A();
  Object.defineProperty(Ys, "__Client", { enumerable: true, get: function() {
    return zD.Client;
  } });
  var aJ = rI(), cJ = FD(), uJ = BD(), Lw = class e35 extends zD.Client {
    static {
      __name(this, "e");
    }
    constructor(...[t]) {
      let r = (0, cJ.getRuntimeConfig)(t || {}), n = (0, aJ.resolveClientEndpointParameters)(r), i = (0, iJ.resolveRegionConfig)(n), o = (0, sJ.resolveEndpointConfig)(i), s = (0, $D.resolveRetryConfig)(o), a = (0, WD.resolveHostHeaderConfig)(s), u = (0, nJ.resolveStsAuthConfig)(a, { stsClientCtor: e35 }), l = (0, VD.resolveUserAgentConfig)(u), p = (0, uJ.resolveRuntimeExtensions)(l, t?.extensions || []);
      super(p), this.config = p, this.middlewareStack.use((0, $D.getRetryPlugin)(this.config)), this.middlewareStack.use((0, oJ.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, WD.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, tJ.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, rJ.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, VD.getUserAgentPlugin)(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
  Ys.STSClient = Lw;
});
var Uw = c((Js) => {
  "use strict";
  Object.defineProperty(Js, "__esModule", { value: true });
  Js.AssumeRoleWithSAMLCommand = Js.$Command = void 0;
  var dJ = te(), lJ = ye(), QD = A();
  Object.defineProperty(Js, "$Command", { enumerable: true, get: function() {
    return QD.Command;
  } });
  var pJ = K(), HD = Jn(), GD = fn(), jw = class e35 extends QD.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, lJ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, dJ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "STSClient", commandName: "AssumeRoleWithSAMLCommand", inputFilterSensitiveLog: HD.AssumeRoleWithSAMLRequestFilterSensitiveLog, outputFilterSensitiveLog: HD.AssumeRoleWithSAMLResponseFilterSensitiveLog, [pJ.SMITHY_CONTEXT_KEY]: { service: "AWSSecurityTokenServiceV20110615", operation: "AssumeRoleWithSAML" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, GD.se_AssumeRoleWithSAMLCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, GD.de_AssumeRoleWithSAMLCommand)(t, r);
    }
  };
  Js.AssumeRoleWithSAMLCommand = jw;
});
var Ww = c((Xs) => {
  "use strict";
  Object.defineProperty(Xs, "__esModule", { value: true });
  Xs.DecodeAuthorizationMessageCommand = Xs.$Command = void 0;
  var fJ = rn(), mJ = te(), hJ = ye(), YD = A();
  Object.defineProperty(Xs, "$Command", { enumerable: true, get: function() {
    return YD.Command;
  } });
  var _J = K(), KD = fn(), Bw = class e35 extends YD.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, hJ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, mJ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions())), this.middlewareStack.use((0, fJ.getAwsAuthPlugin)(r));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "STSClient", commandName: "DecodeAuthorizationMessageCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [_J.SMITHY_CONTEXT_KEY]: { service: "AWSSecurityTokenServiceV20110615", operation: "DecodeAuthorizationMessage" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, KD.se_DecodeAuthorizationMessageCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, KD.de_DecodeAuthorizationMessageCommand)(t, r);
    }
  };
  Xs.DecodeAuthorizationMessageCommand = Bw;
});
var $w = c((Zs) => {
  "use strict";
  Object.defineProperty(Zs, "__esModule", { value: true });
  Zs.GetAccessKeyInfoCommand = Zs.$Command = void 0;
  var yJ = rn(), gJ = te(), vJ = ye(), XD = A();
  Object.defineProperty(Zs, "$Command", { enumerable: true, get: function() {
    return XD.Command;
  } });
  var EJ = K(), JD = fn(), Vw = class e35 extends XD.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, vJ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, gJ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions())), this.middlewareStack.use((0, yJ.getAwsAuthPlugin)(r));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "STSClient", commandName: "GetAccessKeyInfoCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [EJ.SMITHY_CONTEXT_KEY]: { service: "AWSSecurityTokenServiceV20110615", operation: "GetAccessKeyInfo" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, JD.se_GetAccessKeyInfoCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, JD.de_GetAccessKeyInfoCommand)(t, r);
    }
  };
  Zs.GetAccessKeyInfoCommand = Vw;
});
var Hw = c((ea) => {
  "use strict";
  Object.defineProperty(ea, "__esModule", { value: true });
  ea.GetCallerIdentityCommand = ea.$Command = void 0;
  var wJ = rn(), SJ = te(), NJ = ye(), ek = A();
  Object.defineProperty(ea, "$Command", { enumerable: true, get: function() {
    return ek.Command;
  } });
  var bJ = K(), ZD = fn(), zw = class e35 extends ek.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, NJ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, SJ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions())), this.middlewareStack.use((0, wJ.getAwsAuthPlugin)(r));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "STSClient", commandName: "GetCallerIdentityCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [bJ.SMITHY_CONTEXT_KEY]: { service: "AWSSecurityTokenServiceV20110615", operation: "GetCallerIdentity" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, ZD.se_GetCallerIdentityCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, ZD.de_GetCallerIdentityCommand)(t, r);
    }
  };
  ea.GetCallerIdentityCommand = zw;
});
var Qw = c((ta) => {
  "use strict";
  Object.defineProperty(ta, "__esModule", { value: true });
  ta.GetFederationTokenCommand = ta.$Command = void 0;
  var xJ = rn(), CJ = te(), OJ = ye(), rk = A();
  Object.defineProperty(ta, "$Command", { enumerable: true, get: function() {
    return rk.Command;
  } });
  var AJ = K(), TJ = Jn(), tk = fn(), Gw = class e35 extends rk.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, OJ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, CJ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions())), this.middlewareStack.use((0, xJ.getAwsAuthPlugin)(r));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "STSClient", commandName: "GetFederationTokenCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: TJ.GetFederationTokenResponseFilterSensitiveLog, [AJ.SMITHY_CONTEXT_KEY]: { service: "AWSSecurityTokenServiceV20110615", operation: "GetFederationToken" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, tk.se_GetFederationTokenCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, tk.de_GetFederationTokenCommand)(t, r);
    }
  };
  ta.GetFederationTokenCommand = Gw;
});
var Yw = c((ra) => {
  "use strict";
  Object.defineProperty(ra, "__esModule", { value: true });
  ra.GetSessionTokenCommand = ra.$Command = void 0;
  var PJ = rn(), IJ = te(), RJ = ye(), ik = A();
  Object.defineProperty(ra, "$Command", { enumerable: true, get: function() {
    return ik.Command;
  } });
  var qJ = K(), MJ = Jn(), nk = fn(), Kw = class e35 extends ik.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, RJ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, IJ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions())), this.middlewareStack.use((0, PJ.getAwsAuthPlugin)(r));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "STSClient", commandName: "GetSessionTokenCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: MJ.GetSessionTokenResponseFilterSensitiveLog, [qJ.SMITHY_CONTEXT_KEY]: { service: "AWSSecurityTokenServiceV20110615", operation: "GetSessionToken" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, nk.se_GetSessionTokenCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, nk.de_GetSessionTokenCommand)(t, r);
    }
  };
  ra.GetSessionTokenCommand = Kw;
});
var ok = c((Hh) => {
  "use strict";
  Object.defineProperty(Hh, "__esModule", { value: true });
  Hh.STS = void 0;
  var DJ = A(), kJ = Qf(), FJ = Uw(), LJ = Kf(), jJ = Ww(), UJ = $w(), BJ = Hw(), WJ = Qw(), VJ = Yw(), $J = $h(), zJ = { AssumeRoleCommand: kJ.AssumeRoleCommand, AssumeRoleWithSAMLCommand: FJ.AssumeRoleWithSAMLCommand, AssumeRoleWithWebIdentityCommand: LJ.AssumeRoleWithWebIdentityCommand, DecodeAuthorizationMessageCommand: jJ.DecodeAuthorizationMessageCommand, GetAccessKeyInfoCommand: UJ.GetAccessKeyInfoCommand, GetCallerIdentityCommand: BJ.GetCallerIdentityCommand, GetFederationTokenCommand: WJ.GetFederationTokenCommand, GetSessionTokenCommand: VJ.GetSessionTokenCommand }, zh = class extends $J.STSClient {
    static {
      __name(this, "zh");
    }
  };
  Hh.STS = zh;
  (0, DJ.createAggregatedClient)(zJ, zh);
});
var sk = c((Vr) => {
  "use strict";
  Object.defineProperty(Vr, "__esModule", { value: true });
  var yi = (b(), S(N));
  yi.__exportStar(Qf(), Vr);
  yi.__exportStar(Uw(), Vr);
  yi.__exportStar(Kf(), Vr);
  yi.__exportStar(Ww(), Vr);
  yi.__exportStar($w(), Vr);
  yi.__exportStar(Hw(), Vr);
  yi.__exportStar(Qw(), Vr);
  yi.__exportStar(Yw(), Vr);
});
var ak = c((Jw) => {
  "use strict";
  Object.defineProperty(Jw, "__esModule", { value: true });
  var HJ = (b(), S(N));
  HJ.__exportStar(Jn(), Jw);
});
var lk = c(($r) => {
  "use strict";
  Object.defineProperty($r, "__esModule", { value: true });
  $r.decorateDefaultCredentialProvider = $r.getDefaultRoleAssumerWithWebIdentity = $r.getDefaultRoleAssumer = void 0;
  var ck = Wv(), uk = $h(), dk = /* @__PURE__ */ __name((e35, t) => t ? class extends e35 {
    constructor(n) {
      super(n);
      for (let i of t)
        this.middlewareStack.use(i);
    }
  } : e35, "dk"), GJ = /* @__PURE__ */ __name((e35 = {}, t) => (0, ck.getDefaultRoleAssumer)(e35, dk(uk.STSClient, t)), "GJ");
  $r.getDefaultRoleAssumer = GJ;
  var QJ = /* @__PURE__ */ __name((e35 = {}, t) => (0, ck.getDefaultRoleAssumerWithWebIdentity)(e35, dk(uk.STSClient, t)), "QJ");
  $r.getDefaultRoleAssumerWithWebIdentity = QJ;
  var KJ = /* @__PURE__ */ __name((e35) => (t) => e35({ roleAssumer: (0, $r.getDefaultRoleAssumer)(t), roleAssumerWithWebIdentity: (0, $r.getDefaultRoleAssumerWithWebIdentity)(t), ...t }), "KJ");
  $r.decorateDefaultCredentialProvider = KJ;
});
var pk = c((vn) => {
  "use strict";
  Object.defineProperty(vn, "__esModule", { value: true });
  vn.STSServiceException = void 0;
  var wu = (b(), S(N));
  wu.__exportStar($h(), vn);
  wu.__exportStar(ok(), vn);
  wu.__exportStar(sk(), vn);
  wu.__exportStar(ak(), vn);
  wu.__exportStar(lk(), vn);
  var YJ = Vf();
  Object.defineProperty(vn, "STSServiceException", { enumerable: true, get: function() {
    return YJ.STSServiceException;
  } });
});
var xk = c((Gh) => {
  "use strict";
  Object.defineProperty(Gh, "__esModule", { value: true });
  Gh.ruleSet = void 0;
  var Sk = "required", wn = "fn", Sn = "argv", ia = "ref", fk = "isSet", En = "tree", na = "error", Su = "endpoint", Xw = "PartitionResult", mk = { [Sk]: false, type: "String" }, hk = { [Sk]: true, default: false, type: "Boolean" }, _k = { [ia]: "Endpoint" }, Nk = { [wn]: "booleanEquals", [Sn]: [{ [ia]: "UseFIPS" }, true] }, bk = { [wn]: "booleanEquals", [Sn]: [{ [ia]: "UseDualStack" }, true] }, zr = {}, yk = { [wn]: "booleanEquals", [Sn]: [true, { [wn]: "getAttr", [Sn]: [{ [ia]: Xw }, "supportsFIPS"] }] }, gk = { [wn]: "booleanEquals", [Sn]: [true, { [wn]: "getAttr", [Sn]: [{ [ia]: Xw }, "supportsDualStack"] }] }, vk = [Nk], Ek = [bk], wk = [{ [ia]: "Region" }], JJ = { version: "1.0", parameters: { Region: mk, UseDualStack: hk, UseFIPS: hk, Endpoint: mk }, rules: [{ conditions: [{ [wn]: fk, [Sn]: [_k] }], type: En, rules: [{ conditions: vk, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: na }, { conditions: Ek, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: na }, { endpoint: { url: _k, properties: zr, headers: zr }, type: Su }] }, { conditions: [{ [wn]: fk, [Sn]: wk }], type: En, rules: [{ conditions: [{ [wn]: "aws.partition", [Sn]: wk, assign: Xw }], type: En, rules: [{ conditions: [Nk, bk], type: En, rules: [{ conditions: [yk, gk], type: En, rules: [{ endpoint: { url: "https://rds-data-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: zr, headers: zr }, type: Su }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: na }] }, { conditions: vk, type: En, rules: [{ conditions: [yk], type: En, rules: [{ endpoint: { url: "https://rds-data-fips.{Region}.{PartitionResult#dnsSuffix}", properties: zr, headers: zr }, type: Su }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: na }] }, { conditions: Ek, type: En, rules: [{ conditions: [gk], type: En, rules: [{ endpoint: { url: "https://rds-data.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: zr, headers: zr }, type: Su }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: na }] }, { endpoint: { url: "https://rds-data.{Region}.{PartitionResult#dnsSuffix}", properties: zr, headers: zr }, type: Su }] }] }, { error: "Invalid Configuration: Missing Region", type: na }] };
  Gh.ruleSet = JJ;
});
var Ck = c((Qh) => {
  "use strict";
  Object.defineProperty(Qh, "__esModule", { value: true });
  Qh.defaultEndpointResolver = void 0;
  var XJ = Ko(), ZJ = xk(), eX = /* @__PURE__ */ __name((e35, t = {}) => (0, XJ.resolveEndpoint)(ZJ.ruleSet, { endpointParams: e35, logger: t.logger }), "eX");
  Qh.defaultEndpointResolver = eX;
});
var Tk = c((Kh) => {
  "use strict";
  Object.defineProperty(Kh, "__esModule", { value: true });
  Kh.getRuntimeConfig = void 0;
  var tX = A(), rX = Wi(), Ok = rs(), Ak = Sr(), nX = Ck(), iX = /* @__PURE__ */ __name((e35) => ({ apiVersion: "2018-08-01", base64Decoder: e35?.base64Decoder ?? Ok.fromBase64, base64Encoder: e35?.base64Encoder ?? Ok.toBase64, disableHostPrefix: e35?.disableHostPrefix ?? false, endpointProvider: e35?.endpointProvider ?? nX.defaultEndpointResolver, extensions: e35?.extensions ?? [], logger: e35?.logger ?? new tX.NoOpLogger(), serviceId: e35?.serviceId ?? "RDS Data", urlParser: e35?.urlParser ?? rX.parseUrl, utf8Decoder: e35?.utf8Decoder ?? Ak.fromUtf8, utf8Encoder: e35?.utf8Encoder ?? Ak.toUtf8 }), "iX");
  Kh.getRuntimeConfig = iX;
});
var Rk = c((Jh) => {
  "use strict";
  Object.defineProperty(Jh, "__esModule", { value: true });
  Jh.getRuntimeConfig = void 0;
  var oX = (b(), S(N)), sX = oX.__importDefault(eI()), aX = pk(), cX = Mw(), uX = ou(), Yh = xr(), dX = su(), Pk = un(), Nu = on(), Ik = os(), lX = au(), pX = Ut(), fX = Tk(), mX = A(), hX = cu(), _X = A(), yX = /* @__PURE__ */ __name((e35) => {
    (0, _X.emitWarningIfUnsupportedVersion)(process.version);
    let t = (0, hX.resolveDefaultsModeConfig)(e35), r = /* @__PURE__ */ __name(() => t().then(mX.loadConfigsForDefaultMode), "r"), n = (0, fX.getRuntimeConfig)(e35);
    return { ...n, ...e35, runtime: "node", defaultsMode: t, bodyLengthChecker: e35?.bodyLengthChecker ?? lX.calculateBodyLength, credentialDefaultProvider: e35?.credentialDefaultProvider ?? (0, aX.decorateDefaultCredentialProvider)(cX.defaultProvider), defaultUserAgentProvider: e35?.defaultUserAgentProvider ?? (0, uX.defaultUserAgent)({ serviceId: n.serviceId, clientVersion: sX.default.version }), maxAttempts: e35?.maxAttempts ?? (0, Nu.loadConfig)(Pk.NODE_MAX_ATTEMPT_CONFIG_OPTIONS), region: e35?.region ?? (0, Nu.loadConfig)(Yh.NODE_REGION_CONFIG_OPTIONS, Yh.NODE_REGION_CONFIG_FILE_OPTIONS), requestHandler: e35?.requestHandler ?? new Ik.NodeHttpHandler(r), retryMode: e35?.retryMode ?? (0, Nu.loadConfig)({ ...Pk.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await r()).retryMode || pX.DEFAULT_RETRY_MODE }), sha256: e35?.sha256 ?? dX.Hash.bind(null, "sha256"), streamCollector: e35?.streamCollector ?? Ik.streamCollector, useDualstackEndpoint: e35?.useDualstackEndpoint ?? (0, Nu.loadConfig)(Yh.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS), useFipsEndpoint: e35?.useFipsEndpoint ?? (0, Nu.loadConfig)(Yh.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS) };
  }, "yX");
  Jh.getRuntimeConfig = yX;
});
var kk = c((Xh) => {
  "use strict";
  Object.defineProperty(Xh, "__esModule", { value: true });
  Xh.resolveRuntimeExtensions = void 0;
  var qk = du(), Mk = Me(), Dk = A(), Zw = /* @__PURE__ */ __name((e35) => e35, "Zw"), gX = /* @__PURE__ */ __name((e35, t) => {
    let r = { ...Zw((0, qk.getAwsRegionExtensionConfiguration)(e35)), ...Zw((0, Dk.getDefaultExtensionConfiguration)(e35)), ...Zw((0, Mk.getHttpHandlerExtensionConfiguration)(e35)) };
    return t.forEach((n) => n.configure(r)), { ...e35, ...(0, qk.resolveAwsRegionExtensionConfiguration)(r), ...(0, Dk.resolveDefaultRuntimeConfig)(r), ...(0, Mk.resolveHttpHandlerRuntimeConfig)(r) };
  }, "gX");
  Xh.resolveRuntimeExtensions = gX;
});
var tS = c((oa) => {
  "use strict";
  Object.defineProperty(oa, "__esModule", { value: true });
  oa.RDSDataClient = oa.__Client = void 0;
  var Fk = lc(), vX = pc(), EX = fc(), Lk = rn(), jk = Cc(), wX = xr(), SX = Tc(), NX = te(), Uk = un(), Bk = A();
  Object.defineProperty(oa, "__Client", { enumerable: true, get: function() {
    return Bk.Client;
  } });
  var bX = ZP(), xX = Rk(), CX = kk(), eS = class extends Bk.Client {
    static {
      __name(this, "eS");
    }
    constructor(...[t]) {
      let r = (0, xX.getRuntimeConfig)(t || {}), n = (0, bX.resolveClientEndpointParameters)(r), i = (0, wX.resolveRegionConfig)(n), o = (0, NX.resolveEndpointConfig)(i), s = (0, Uk.resolveRetryConfig)(o), a = (0, Fk.resolveHostHeaderConfig)(s), u = (0, Lk.resolveAwsAuthConfig)(a), l = (0, jk.resolveUserAgentConfig)(u), p = (0, CX.resolveRuntimeExtensions)(l, t?.extensions || []);
      super(p), this.config = p, this.middlewareStack.use((0, Uk.getRetryPlugin)(this.config)), this.middlewareStack.use((0, SX.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, Fk.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, vX.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, EX.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, Lk.getAwsAuthPlugin)(this.config)), this.middlewareStack.use((0, jk.getUserAgentPlugin)(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
  oa.RDSDataClient = eS;
});
var Zh = c((sa) => {
  "use strict";
  Object.defineProperty(sa, "__esModule", { value: true });
  sa.RDSDataServiceException = sa.__ServiceException = void 0;
  var Wk = A();
  Object.defineProperty(sa, "__ServiceException", { enumerable: true, get: function() {
    return Wk.ServiceException;
  } });
  var rS = class e35 extends Wk.ServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super(t), Object.setPrototypeOf(this, e35.prototype);
    }
  };
  sa.RDSDataServiceException = rS;
});
var dS = c((G) => {
  "use strict";
  Object.defineProperty(G, "__esModule", { value: true });
  G.Value = G.Field = G.ArrayValue = G.LongReturnType = G.RecordsFormatType = G.DecimalReturnType = G.NotFoundException = G.StatementTimeoutException = G.ServiceUnavailableError = G.InternalServerErrorException = G.ForbiddenException = G.TypeHint = G.BadRequestException = G.AccessDeniedException = void 0;
  var oo = Zh(), nS = class e35 extends oo.RDSDataServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "AccessDeniedException", $fault: "client", ...t }), this.name = "AccessDeniedException", this.$fault = "client", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  G.AccessDeniedException = nS;
  var iS = class e35 extends oo.RDSDataServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "BadRequestException", $fault: "client", ...t }), this.name = "BadRequestException", this.$fault = "client", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  G.BadRequestException = iS;
  G.TypeHint = { DATE: "DATE", DECIMAL: "DECIMAL", JSON: "JSON", TIME: "TIME", TIMESTAMP: "TIMESTAMP", UUID: "UUID" };
  var oS = class e35 extends oo.RDSDataServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "ForbiddenException", $fault: "client", ...t }), this.name = "ForbiddenException", this.$fault = "client", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  G.ForbiddenException = oS;
  var sS = class e35 extends oo.RDSDataServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "InternalServerErrorException", $fault: "server", ...t }), this.name = "InternalServerErrorException", this.$fault = "server", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  G.InternalServerErrorException = sS;
  var aS = class e35 extends oo.RDSDataServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "ServiceUnavailableError", $fault: "server", ...t }), this.name = "ServiceUnavailableError", this.$fault = "server", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  G.ServiceUnavailableError = aS;
  var cS = class e35 extends oo.RDSDataServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "StatementTimeoutException", $fault: "client", ...t }), this.name = "StatementTimeoutException", this.$fault = "client", Object.setPrototypeOf(this, e35.prototype), this.dbConnectionId = t.dbConnectionId;
    }
  };
  G.StatementTimeoutException = cS;
  var uS = class e35 extends oo.RDSDataServiceException {
    static {
      __name(this, "e");
    }
    constructor(t) {
      super({ name: "NotFoundException", $fault: "client", ...t }), this.name = "NotFoundException", this.$fault = "client", Object.setPrototypeOf(this, e35.prototype);
    }
  };
  G.NotFoundException = uS;
  G.DecimalReturnType = { DOUBLE_OR_LONG: "DOUBLE_OR_LONG", STRING: "STRING" };
  G.RecordsFormatType = { JSON: "JSON", NONE: "NONE" };
  G.LongReturnType = { LONG: "LONG", STRING: "STRING" };
  var OX;
  (function(e35) {
    e35.visit = (t, r) => t.booleanValues !== void 0 ? r.booleanValues(t.booleanValues) : t.longValues !== void 0 ? r.longValues(t.longValues) : t.doubleValues !== void 0 ? r.doubleValues(t.doubleValues) : t.stringValues !== void 0 ? r.stringValues(t.stringValues) : t.arrayValues !== void 0 ? r.arrayValues(t.arrayValues) : r._(t.$unknown[0], t.$unknown[1]);
  })(OX = G.ArrayValue || (G.ArrayValue = {}));
  var AX;
  (function(e35) {
    e35.visit = (t, r) => t.isNull !== void 0 ? r.isNull(t.isNull) : t.booleanValue !== void 0 ? r.booleanValue(t.booleanValue) : t.longValue !== void 0 ? r.longValue(t.longValue) : t.doubleValue !== void 0 ? r.doubleValue(t.doubleValue) : t.stringValue !== void 0 ? r.stringValue(t.stringValue) : t.blobValue !== void 0 ? r.blobValue(t.blobValue) : t.arrayValue !== void 0 ? r.arrayValue(t.arrayValue) : r._(t.$unknown[0], t.$unknown[1]);
  })(AX = G.Field || (G.Field = {}));
  var TX;
  (function(e35) {
    e35.visit = (t, r) => t.isNull !== void 0 ? r.isNull(t.isNull) : t.bitValue !== void 0 ? r.bitValue(t.bitValue) : t.bigIntValue !== void 0 ? r.bigIntValue(t.bigIntValue) : t.intValue !== void 0 ? r.intValue(t.intValue) : t.doubleValue !== void 0 ? r.doubleValue(t.doubleValue) : t.realValue !== void 0 ? r.realValue(t.realValue) : t.stringValue !== void 0 ? r.stringValue(t.stringValue) : t.blobValue !== void 0 ? r.blobValue(t.blobValue) : t.arrayValues !== void 0 ? r.arrayValues(t.arrayValues) : t.structValue !== void 0 ? r.structValue(t.structValue) : r._(t.$unknown[0], t.$unknown[1]);
  })(TX = G.Value || (G.Value = {}));
});
var ao = c((oe) => {
  "use strict";
  Object.defineProperty(oe, "__esModule", { value: true });
  oe.de_RollbackTransactionCommand = oe.de_ExecuteStatementCommand = oe.de_ExecuteSqlCommand = oe.de_CommitTransactionCommand = oe.de_BeginTransactionCommand = oe.de_BatchExecuteStatementCommand = oe.se_RollbackTransactionCommand = oe.se_ExecuteStatementCommand = oe.se_ExecuteSqlCommand = oe.se_CommitTransactionCommand = oe.se_BeginTransactionCommand = oe.se_BatchExecuteStatementCommand = void 0;
  var aa = Me(), _ = A(), Nn = dS(), PX = Zh(), IX = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = { "content-type": "application/json" }, a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/BatchExecute`, u;
    return u = JSON.stringify((0, _.take)(e35, { database: [], parameterSets: (l) => ZX(l, t), resourceArn: [], schema: [], secretArn: [], sql: [], transactionId: [] })), new aa.HttpRequest({ protocol: n, hostname: r, port: i, method: "POST", headers: s, path: a, body: u });
  }, "IX");
  oe.se_BatchExecuteStatementCommand = IX;
  var RX = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = { "content-type": "application/json" }, a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/BeginTransaction`, u;
    return u = JSON.stringify((0, _.take)(e35, { database: [], resourceArn: [], schema: [], secretArn: [] })), new aa.HttpRequest({ protocol: n, hostname: r, port: i, method: "POST", headers: s, path: a, body: u });
  }, "RX");
  oe.se_BeginTransactionCommand = RX;
  var qX = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = { "content-type": "application/json" }, a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/CommitTransaction`, u;
    return u = JSON.stringify((0, _.take)(e35, { resourceArn: [], secretArn: [], transactionId: [] })), new aa.HttpRequest({ protocol: n, hostname: r, port: i, method: "POST", headers: s, path: a, body: u });
  }, "qX");
  oe.se_CommitTransactionCommand = qX;
  var MX = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = { "content-type": "application/json" }, a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/ExecuteSql`, u;
    return u = JSON.stringify((0, _.take)(e35, { awsSecretStoreArn: [], database: [], dbClusterOrInstanceArn: [], schema: [], sqlStatements: [] })), new aa.HttpRequest({ protocol: n, hostname: r, port: i, method: "POST", headers: s, path: a, body: u });
  }, "MX");
  oe.se_ExecuteSqlCommand = MX;
  var DX = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = { "content-type": "application/json" }, a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/Execute`, u;
    return u = JSON.stringify((0, _.take)(e35, { continueAfterTimeout: [], database: [], formatRecordsAs: [], includeResultMetadata: [], parameters: (l) => zk(l, t), resourceArn: [], resultSetOptions: (l) => (0, _._json)(l), schema: [], secretArn: [], sql: [], transactionId: [] })), new aa.HttpRequest({ protocol: n, hostname: r, port: i, method: "POST", headers: s, path: a, body: u });
  }, "DX");
  oe.se_ExecuteStatementCommand = DX;
  var kX = /* @__PURE__ */ __name(async (e35, t) => {
    let { hostname: r, protocol: n = "https", port: i, path: o } = await t.endpoint(), s = { "content-type": "application/json" }, a = `${o?.endsWith("/") ? o.slice(0, -1) : o || ""}/RollbackTransaction`, u;
    return u = JSON.stringify((0, _.take)(e35, { resourceArn: [], secretArn: [], transactionId: [] })), new aa.HttpRequest({ protocol: n, hostname: r, port: i, method: "POST", headers: s, path: a, body: u });
  }, "kX");
  oe.se_RollbackTransactionCommand = kX;
  var FX = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return LX(e35, t);
    let r = (0, _.map)({ $metadata: It(e35) }), n = (0, _.expectNonNull)((0, _.expectObject)(await so(e35.body, t)), "body"), i = (0, _.take)(n, { updateResults: (o) => pZ(o, t) });
    return Object.assign(r, i), r;
  }, "FX");
  oe.de_BatchExecuteStatementCommand = FX;
  var LX = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ma(e35.body, t) }, n = ha(e35, r.body);
    switch (n) {
      case "AccessDeniedException":
      case "com.amazonaws.rdsdata#AccessDeniedException":
        throw await ua(r, t);
      case "BadRequestException":
      case "com.amazonaws.rdsdata#BadRequestException":
        throw await da(r, t);
      case "ForbiddenException":
      case "com.amazonaws.rdsdata#ForbiddenException":
        throw await la(r, t);
      case "InternalServerErrorException":
      case "com.amazonaws.rdsdata#InternalServerErrorException":
        throw await pa(r, t);
      case "ServiceUnavailableError":
      case "com.amazonaws.rdsdata#ServiceUnavailableError":
        throw await fa(r, t);
      case "StatementTimeoutException":
      case "com.amazonaws.rdsdata#StatementTimeoutException":
        throw await bu(r, t);
      default:
        let i = r.body;
        return ca({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "LX"), jX = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return UX(e35, t);
    let r = (0, _.map)({ $metadata: It(e35) }), n = (0, _.expectNonNull)((0, _.expectObject)(await so(e35.body, t)), "body"), i = (0, _.take)(n, { transactionId: _.expectString });
    return Object.assign(r, i), r;
  }, "jX");
  oe.de_BeginTransactionCommand = jX;
  var UX = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ma(e35.body, t) }, n = ha(e35, r.body);
    switch (n) {
      case "AccessDeniedException":
      case "com.amazonaws.rdsdata#AccessDeniedException":
        throw await ua(r, t);
      case "BadRequestException":
      case "com.amazonaws.rdsdata#BadRequestException":
        throw await da(r, t);
      case "ForbiddenException":
      case "com.amazonaws.rdsdata#ForbiddenException":
        throw await la(r, t);
      case "InternalServerErrorException":
      case "com.amazonaws.rdsdata#InternalServerErrorException":
        throw await pa(r, t);
      case "ServiceUnavailableError":
      case "com.amazonaws.rdsdata#ServiceUnavailableError":
        throw await fa(r, t);
      case "StatementTimeoutException":
      case "com.amazonaws.rdsdata#StatementTimeoutException":
        throw await bu(r, t);
      default:
        let i = r.body;
        return ca({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "UX"), BX = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return WX(e35, t);
    let r = (0, _.map)({ $metadata: It(e35) }), n = (0, _.expectNonNull)((0, _.expectObject)(await so(e35.body, t)), "body"), i = (0, _.take)(n, { transactionStatus: _.expectString });
    return Object.assign(r, i), r;
  }, "BX");
  oe.de_CommitTransactionCommand = BX;
  var WX = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ma(e35.body, t) }, n = ha(e35, r.body);
    switch (n) {
      case "AccessDeniedException":
      case "com.amazonaws.rdsdata#AccessDeniedException":
        throw await ua(r, t);
      case "BadRequestException":
      case "com.amazonaws.rdsdata#BadRequestException":
        throw await da(r, t);
      case "ForbiddenException":
      case "com.amazonaws.rdsdata#ForbiddenException":
        throw await la(r, t);
      case "InternalServerErrorException":
      case "com.amazonaws.rdsdata#InternalServerErrorException":
        throw await pa(r, t);
      case "NotFoundException":
      case "com.amazonaws.rdsdata#NotFoundException":
        throw await Vk(r, t);
      case "ServiceUnavailableError":
      case "com.amazonaws.rdsdata#ServiceUnavailableError":
        throw await fa(r, t);
      case "StatementTimeoutException":
      case "com.amazonaws.rdsdata#StatementTimeoutException":
        throw await bu(r, t);
      default:
        let i = r.body;
        return ca({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "WX"), VX = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return $X(e35, t);
    let r = (0, _.map)({ $metadata: It(e35) }), n = (0, _.expectNonNull)((0, _.expectObject)(await so(e35.body, t)), "body"), i = (0, _.take)(n, { sqlStatementResults: (o) => uZ(o, t) });
    return Object.assign(r, i), r;
  }, "VX");
  oe.de_ExecuteSqlCommand = VX;
  var $X = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ma(e35.body, t) }, n = ha(e35, r.body);
    switch (n) {
      case "AccessDeniedException":
      case "com.amazonaws.rdsdata#AccessDeniedException":
        throw await ua(r, t);
      case "BadRequestException":
      case "com.amazonaws.rdsdata#BadRequestException":
        throw await da(r, t);
      case "ForbiddenException":
      case "com.amazonaws.rdsdata#ForbiddenException":
        throw await la(r, t);
      case "InternalServerErrorException":
      case "com.amazonaws.rdsdata#InternalServerErrorException":
        throw await pa(r, t);
      case "ServiceUnavailableError":
      case "com.amazonaws.rdsdata#ServiceUnavailableError":
        throw await fa(r, t);
      default:
        let i = r.body;
        return ca({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "$X"), zX = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return HX(e35, t);
    let r = (0, _.map)({ $metadata: It(e35) }), n = (0, _.expectNonNull)((0, _.expectObject)(await so(e35.body, t)), "body"), i = (0, _.take)(n, { columnMetadata: _._json, formattedRecords: _.expectString, generatedFields: (o) => lS(o, t), numberOfRecordsUpdated: _.expectLong, records: (o) => aZ(o, t) });
    return Object.assign(r, i), r;
  }, "zX");
  oe.de_ExecuteStatementCommand = zX;
  var HX = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ma(e35.body, t) }, n = ha(e35, r.body);
    switch (n) {
      case "AccessDeniedException":
      case "com.amazonaws.rdsdata#AccessDeniedException":
        throw await ua(r, t);
      case "BadRequestException":
      case "com.amazonaws.rdsdata#BadRequestException":
        throw await da(r, t);
      case "ForbiddenException":
      case "com.amazonaws.rdsdata#ForbiddenException":
        throw await la(r, t);
      case "InternalServerErrorException":
      case "com.amazonaws.rdsdata#InternalServerErrorException":
        throw await pa(r, t);
      case "ServiceUnavailableError":
      case "com.amazonaws.rdsdata#ServiceUnavailableError":
        throw await fa(r, t);
      case "StatementTimeoutException":
      case "com.amazonaws.rdsdata#StatementTimeoutException":
        throw await bu(r, t);
      default:
        let i = r.body;
        return ca({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "HX"), GX = /* @__PURE__ */ __name(async (e35, t) => {
    if (e35.statusCode !== 200 && e35.statusCode >= 300)
      return QX(e35, t);
    let r = (0, _.map)({ $metadata: It(e35) }), n = (0, _.expectNonNull)((0, _.expectObject)(await so(e35.body, t)), "body"), i = (0, _.take)(n, { transactionStatus: _.expectString });
    return Object.assign(r, i), r;
  }, "GX");
  oe.de_RollbackTransactionCommand = GX;
  var QX = /* @__PURE__ */ __name(async (e35, t) => {
    let r = { ...e35, body: await ma(e35.body, t) }, n = ha(e35, r.body);
    switch (n) {
      case "AccessDeniedException":
      case "com.amazonaws.rdsdata#AccessDeniedException":
        throw await ua(r, t);
      case "BadRequestException":
      case "com.amazonaws.rdsdata#BadRequestException":
        throw await da(r, t);
      case "ForbiddenException":
      case "com.amazonaws.rdsdata#ForbiddenException":
        throw await la(r, t);
      case "InternalServerErrorException":
      case "com.amazonaws.rdsdata#InternalServerErrorException":
        throw await pa(r, t);
      case "NotFoundException":
      case "com.amazonaws.rdsdata#NotFoundException":
        throw await Vk(r, t);
      case "ServiceUnavailableError":
      case "com.amazonaws.rdsdata#ServiceUnavailableError":
        throw await fa(r, t);
      case "StatementTimeoutException":
      case "com.amazonaws.rdsdata#StatementTimeoutException":
        throw await bu(r, t);
      default:
        let i = r.body;
        return ca({ output: e35, parsedBody: i, errorCode: n });
    }
  }, "QX"), ca = (0, _.withBaseException)(PX.RDSDataServiceException), ua = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, _.map)({}), n = e35.body, i = (0, _.take)(n, { message: _.expectString });
    Object.assign(r, i);
    let o = new Nn.AccessDeniedException({ $metadata: It(e35), ...r });
    return (0, _.decorateServiceException)(o, e35.body);
  }, "ua"), da = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, _.map)({}), n = e35.body, i = (0, _.take)(n, { message: _.expectString });
    Object.assign(r, i);
    let o = new Nn.BadRequestException({ $metadata: It(e35), ...r });
    return (0, _.decorateServiceException)(o, e35.body);
  }, "da"), la = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, _.map)({}), n = e35.body, i = (0, _.take)(n, { message: _.expectString });
    Object.assign(r, i);
    let o = new Nn.ForbiddenException({ $metadata: It(e35), ...r });
    return (0, _.decorateServiceException)(o, e35.body);
  }, "la"), pa = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, _.map)({}), n = e35.body, i = (0, _.take)(n, {});
    Object.assign(r, i);
    let o = new Nn.InternalServerErrorException({ $metadata: It(e35), ...r });
    return (0, _.decorateServiceException)(o, e35.body);
  }, "pa"), Vk = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, _.map)({}), n = e35.body, i = (0, _.take)(n, { message: _.expectString });
    Object.assign(r, i);
    let o = new Nn.NotFoundException({ $metadata: It(e35), ...r });
    return (0, _.decorateServiceException)(o, e35.body);
  }, "Vk"), fa = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, _.map)({}), n = e35.body, i = (0, _.take)(n, {});
    Object.assign(r, i);
    let o = new Nn.ServiceUnavailableError({ $metadata: It(e35), ...r });
    return (0, _.decorateServiceException)(o, e35.body);
  }, "fa"), bu = /* @__PURE__ */ __name(async (e35, t) => {
    let r = (0, _.map)({}), n = e35.body, i = (0, _.take)(n, { dbConnectionId: _.expectLong, message: _.expectString });
    Object.assign(r, i);
    let o = new Nn.StatementTimeoutException({ $metadata: It(e35), ...r });
    return (0, _.decorateServiceException)(o, e35.body);
  }, "bu"), KX = /* @__PURE__ */ __name((e35, t) => e35.filter((r) => r != null).map((r) => $k(r, t)), "KX"), $k = /* @__PURE__ */ __name((e35, t) => Nn.ArrayValue.visit(e35, { arrayValues: (r) => ({ arrayValues: KX(r, t) }), booleanValues: (r) => ({ booleanValues: (0, _._json)(r) }), doubleValues: (r) => ({ doubleValues: YX(r, t) }), longValues: (r) => ({ longValues: (0, _._json)(r) }), stringValues: (r) => ({ stringValues: (0, _._json)(r) }), _: (r, n) => ({ name: n }) }), "$k"), YX = /* @__PURE__ */ __name((e35, t) => e35.filter((r) => r != null).map((r) => (0, _.serializeFloat)(r)), "YX"), JX = /* @__PURE__ */ __name((e35, t) => Nn.Field.visit(e35, { arrayValue: (r) => ({ arrayValue: $k(r, t) }), blobValue: (r) => ({ blobValue: t.base64Encoder(r) }), booleanValue: (r) => ({ booleanValue: r }), doubleValue: (r) => ({ doubleValue: (0, _.serializeFloat)(r) }), isNull: (r) => ({ isNull: r }), longValue: (r) => ({ longValue: r }), stringValue: (r) => ({ stringValue: r }), _: (r, n) => ({ name: n }) }), "JX"), XX = /* @__PURE__ */ __name((e35, t) => (0, _.take)(e35, { name: [], typeHint: [], value: (r) => JX(r, t) }), "XX"), ZX = /* @__PURE__ */ __name((e35, t) => e35.filter((r) => r != null).map((r) => zk(r, t)), "ZX"), zk = /* @__PURE__ */ __name((e35, t) => e35.filter((r) => r != null).map((r) => XX(r, t)), "zk"), eZ = /* @__PURE__ */ __name((e35, t) => (e35 || []).filter((n) => n != null).map((n) => Hk((0, _.expectUnion)(n), t)), "eZ"), Hk = /* @__PURE__ */ __name((e35, t) => e35.arrayValues != null ? { arrayValues: eZ(e35.arrayValues, t) } : e35.booleanValues != null ? { booleanValues: (0, _._json)(e35.booleanValues) } : e35.doubleValues != null ? { doubleValues: tZ(e35.doubleValues, t) } : e35.longValues != null ? { longValues: (0, _._json)(e35.longValues) } : e35.stringValues != null ? { stringValues: (0, _._json)(e35.stringValues) } : { $unknown: Object.entries(e35)[0] }, "Hk"), Gk = /* @__PURE__ */ __name((e35, t) => (e35 || []).filter((n) => n != null).map((n) => Qk((0, _.expectUnion)(n), t)), "Gk"), tZ = /* @__PURE__ */ __name((e35, t) => (e35 || []).filter((n) => n != null).map((n) => (0, _.limitedParseDouble)(n)), "tZ"), rZ = /* @__PURE__ */ __name((e35, t) => e35.arrayValue != null ? { arrayValue: Hk((0, _.expectUnion)(e35.arrayValue), t) } : e35.blobValue != null ? { blobValue: t.base64Decoder(e35.blobValue) } : (0, _.expectBoolean)(e35.booleanValue) !== void 0 ? { booleanValue: (0, _.expectBoolean)(e35.booleanValue) } : (0, _.limitedParseDouble)(e35.doubleValue) !== void 0 ? { doubleValue: (0, _.limitedParseDouble)(e35.doubleValue) } : (0, _.expectBoolean)(e35.isNull) !== void 0 ? { isNull: (0, _.expectBoolean)(e35.isNull) } : (0, _.expectLong)(e35.longValue) !== void 0 ? { longValue: (0, _.expectLong)(e35.longValue) } : (0, _.expectString)(e35.stringValue) !== void 0 ? { stringValue: (0, _.expectString)(e35.stringValue) } : { $unknown: Object.entries(e35)[0] }, "rZ"), lS = /* @__PURE__ */ __name((e35, t) => (e35 || []).filter((n) => n != null).map((n) => rZ((0, _.expectUnion)(n), t)), "lS"), nZ = /* @__PURE__ */ __name((e35, t) => (0, _.take)(e35, { values: (r) => sZ(r, t) }), "nZ"), iZ = /* @__PURE__ */ __name((e35, t) => (e35 || []).filter((n) => n != null).map((n) => nZ(n, t)), "iZ"), oZ = /* @__PURE__ */ __name((e35, t) => (0, _.take)(e35, { records: (r) => iZ(r, t), resultSetMetadata: _._json }), "oZ"), sZ = /* @__PURE__ */ __name((e35, t) => (e35 || []).filter((n) => n != null).map((n) => Qk((0, _.expectUnion)(n), t)), "sZ"), aZ = /* @__PURE__ */ __name((e35, t) => (e35 || []).filter((n) => n != null).map((n) => lS(n, t)), "aZ"), cZ = /* @__PURE__ */ __name((e35, t) => (0, _.take)(e35, { numberOfRecordsUpdated: _.expectLong, resultFrame: (r) => oZ(r, t) }), "cZ"), uZ = /* @__PURE__ */ __name((e35, t) => (e35 || []).filter((n) => n != null).map((n) => cZ(n, t)), "uZ"), dZ = /* @__PURE__ */ __name((e35, t) => (0, _.take)(e35, { attributes: (r) => Gk(r, t) }), "dZ"), lZ = /* @__PURE__ */ __name((e35, t) => (0, _.take)(e35, { generatedFields: (r) => lS(r, t) }), "lZ"), pZ = /* @__PURE__ */ __name((e35, t) => (e35 || []).filter((n) => n != null).map((n) => lZ(n, t)), "pZ"), Qk = /* @__PURE__ */ __name((e35, t) => e35.arrayValues != null ? { arrayValues: Gk(e35.arrayValues, t) } : (0, _.expectLong)(e35.bigIntValue) !== void 0 ? { bigIntValue: (0, _.expectLong)(e35.bigIntValue) } : (0, _.expectBoolean)(e35.bitValue) !== void 0 ? { bitValue: (0, _.expectBoolean)(e35.bitValue) } : e35.blobValue != null ? { blobValue: t.base64Decoder(e35.blobValue) } : (0, _.limitedParseDouble)(e35.doubleValue) !== void 0 ? { doubleValue: (0, _.limitedParseDouble)(e35.doubleValue) } : (0, _.expectInt32)(e35.intValue) !== void 0 ? { intValue: (0, _.expectInt32)(e35.intValue) } : (0, _.expectBoolean)(e35.isNull) !== void 0 ? { isNull: (0, _.expectBoolean)(e35.isNull) } : (0, _.limitedParseFloat32)(e35.realValue) !== void 0 ? { realValue: (0, _.limitedParseFloat32)(e35.realValue) } : (0, _.expectString)(e35.stringValue) !== void 0 ? { stringValue: (0, _.expectString)(e35.stringValue) } : e35.structValue != null ? { structValue: dZ(e35.structValue, t) } : { $unknown: Object.entries(e35)[0] }, "Qk"), It = /* @__PURE__ */ __name((e35) => ({ httpStatusCode: e35.statusCode, requestId: e35.headers["x-amzn-requestid"] ?? e35.headers["x-amzn-request-id"] ?? e35.headers["x-amz-request-id"], extendedRequestId: e35.headers["x-amz-id-2"], cfId: e35.headers["x-amz-cf-id"] }), "It"), fZ = /* @__PURE__ */ __name((e35, t) => (0, _.collectBody)(e35, t).then((r) => t.utf8Encoder(r)), "fZ"), so = /* @__PURE__ */ __name((e35, t) => fZ(e35, t).then((r) => r.length ? JSON.parse(r) : {}), "so"), ma = /* @__PURE__ */ __name(async (e35, t) => {
    let r = await so(e35, t);
    return r.message = r.message ?? r.Message, r;
  }, "ma"), ha = /* @__PURE__ */ __name((e35, t) => {
    let r = /* @__PURE__ */ __name((o, s) => Object.keys(o).find((a) => a.toLowerCase() === s.toLowerCase()), "r"), n = /* @__PURE__ */ __name((o) => {
      let s = o;
      return typeof s == "number" && (s = s.toString()), s.indexOf(",") >= 0 && (s = s.split(",")[0]), s.indexOf(":") >= 0 && (s = s.split(":")[0]), s.indexOf("#") >= 0 && (s = s.split("#")[1]), s;
    }, "n"), i = r(e35.headers, "x-amzn-errortype");
    if (i !== void 0)
      return n(e35.headers[i]);
    if (t.code !== void 0)
      return n(t.code);
    if (t.__type !== void 0)
      return n(t.__type);
  }, "ha");
});
var fS = c((_a) => {
  "use strict";
  Object.defineProperty(_a, "__esModule", { value: true });
  _a.BatchExecuteStatementCommand = _a.$Command = void 0;
  var mZ = te(), hZ = ye(), Yk = A();
  Object.defineProperty(_a, "$Command", { enumerable: true, get: function() {
    return Yk.Command;
  } });
  var _Z = K(), Kk = ao(), pS = class e35 extends Yk.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, hZ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, mZ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "RDSDataClient", commandName: "BatchExecuteStatementCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [_Z.SMITHY_CONTEXT_KEY]: { service: "RdsDataService", operation: "BatchExecuteStatement" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, Kk.se_BatchExecuteStatementCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, Kk.de_BatchExecuteStatementCommand)(t, r);
    }
  };
  _a.BatchExecuteStatementCommand = pS;
});
var hS = c((ya) => {
  "use strict";
  Object.defineProperty(ya, "__esModule", { value: true });
  ya.BeginTransactionCommand = ya.$Command = void 0;
  var yZ = te(), gZ = ye(), Xk = A();
  Object.defineProperty(ya, "$Command", { enumerable: true, get: function() {
    return Xk.Command;
  } });
  var vZ = K(), Jk = ao(), mS = class e35 extends Xk.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, gZ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, yZ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "RDSDataClient", commandName: "BeginTransactionCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [vZ.SMITHY_CONTEXT_KEY]: { service: "RdsDataService", operation: "BeginTransaction" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, Jk.se_BeginTransactionCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, Jk.de_BeginTransactionCommand)(t, r);
    }
  };
  ya.BeginTransactionCommand = mS;
});
var yS = c((ga) => {
  "use strict";
  Object.defineProperty(ga, "__esModule", { value: true });
  ga.CommitTransactionCommand = ga.$Command = void 0;
  var EZ = te(), wZ = ye(), eF = A();
  Object.defineProperty(ga, "$Command", { enumerable: true, get: function() {
    return eF.Command;
  } });
  var SZ = K(), Zk = ao(), _S = class e35 extends eF.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, wZ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, EZ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "RDSDataClient", commandName: "CommitTransactionCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [SZ.SMITHY_CONTEXT_KEY]: { service: "RdsDataService", operation: "CommitTransaction" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, Zk.se_CommitTransactionCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, Zk.de_CommitTransactionCommand)(t, r);
    }
  };
  ga.CommitTransactionCommand = _S;
});
var vS = c((va) => {
  "use strict";
  Object.defineProperty(va, "__esModule", { value: true });
  va.ExecuteSqlCommand = va.$Command = void 0;
  var NZ = te(), bZ = ye(), rF = A();
  Object.defineProperty(va, "$Command", { enumerable: true, get: function() {
    return rF.Command;
  } });
  var xZ = K(), tF = ao(), gS = class e35 extends rF.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, bZ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, NZ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "RDSDataClient", commandName: "ExecuteSqlCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [xZ.SMITHY_CONTEXT_KEY]: { service: "RdsDataService", operation: "ExecuteSql" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, tF.se_ExecuteSqlCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, tF.de_ExecuteSqlCommand)(t, r);
    }
  };
  va.ExecuteSqlCommand = gS;
});
var wS = c((Ea) => {
  "use strict";
  Object.defineProperty(Ea, "__esModule", { value: true });
  Ea.ExecuteStatementCommand = Ea.$Command = void 0;
  var CZ = te(), OZ = ye(), iF = A();
  Object.defineProperty(Ea, "$Command", { enumerable: true, get: function() {
    return iF.Command;
  } });
  var AZ = K(), nF = ao(), ES = class e35 extends iF.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, OZ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, CZ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "RDSDataClient", commandName: "ExecuteStatementCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [AZ.SMITHY_CONTEXT_KEY]: { service: "RdsDataService", operation: "ExecuteStatement" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, nF.se_ExecuteStatementCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, nF.de_ExecuteStatementCommand)(t, r);
    }
  };
  Ea.ExecuteStatementCommand = ES;
});
var NS = c((wa) => {
  "use strict";
  Object.defineProperty(wa, "__esModule", { value: true });
  wa.RollbackTransactionCommand = wa.$Command = void 0;
  var TZ = te(), PZ = ye(), sF = A();
  Object.defineProperty(wa, "$Command", { enumerable: true, get: function() {
    return sF.Command;
  } });
  var IZ = K(), oF = ao(), SS = class e35 extends sF.Command {
    static {
      __name(this, "e");
    }
    static getEndpointParameterInstructions() {
      return { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
    }
    constructor(t) {
      super(), this.input = t;
    }
    resolveMiddleware(t, r, n) {
      this.middlewareStack.use((0, PZ.getSerdePlugin)(r, this.serialize, this.deserialize)), this.middlewareStack.use((0, TZ.getEndpointPlugin)(r, e35.getEndpointParameterInstructions()));
      let i = t.concat(this.middlewareStack), { logger: o } = r, u = { logger: o, clientName: "RDSDataClient", commandName: "RollbackTransactionCommand", inputFilterSensitiveLog: (p) => p, outputFilterSensitiveLog: (p) => p, [IZ.SMITHY_CONTEXT_KEY]: { service: "RdsDataService", operation: "RollbackTransaction" } }, { requestHandler: l } = r;
      return i.resolve((p) => l.handle(p.request, n || {}), u);
    }
    serialize(t, r) {
      return (0, oF.se_RollbackTransactionCommand)(t, r);
    }
    deserialize(t, r) {
      return (0, oF.de_RollbackTransactionCommand)(t, r);
    }
  };
  wa.RollbackTransactionCommand = SS;
});
var aF = c((t_) => {
  "use strict";
  Object.defineProperty(t_, "__esModule", { value: true });
  t_.RDSData = void 0;
  var RZ = A(), qZ = fS(), MZ = hS(), DZ = yS(), kZ = vS(), FZ = wS(), LZ = NS(), jZ = tS(), UZ = { BatchExecuteStatementCommand: qZ.BatchExecuteStatementCommand, BeginTransactionCommand: MZ.BeginTransactionCommand, CommitTransactionCommand: DZ.CommitTransactionCommand, ExecuteSqlCommand: kZ.ExecuteSqlCommand, ExecuteStatementCommand: FZ.ExecuteStatementCommand, RollbackTransactionCommand: LZ.RollbackTransactionCommand }, e_ = class extends jZ.RDSDataClient {
    static {
      __name(this, "e_");
    }
  };
  t_.RDSData = e_;
  (0, RZ.createAggregatedClient)(UZ, e_);
});
var cF = c((gi) => {
  "use strict";
  Object.defineProperty(gi, "__esModule", { value: true });
  var Sa = (b(), S(N));
  Sa.__exportStar(fS(), gi);
  Sa.__exportStar(hS(), gi);
  Sa.__exportStar(yS(), gi);
  Sa.__exportStar(vS(), gi);
  Sa.__exportStar(wS(), gi);
  Sa.__exportStar(NS(), gi);
});
var uF = c((bS) => {
  "use strict";
  Object.defineProperty(bS, "__esModule", { value: true });
  var BZ = (b(), S(N));
  BZ.__exportStar(dS(), bS);
});
var dF = c((vi) => {
  "use strict";
  Object.defineProperty(vi, "__esModule", { value: true });
  vi.RDSDataServiceException = void 0;
  var r_ = (b(), S(N));
  r_.__exportStar(tS(), vi);
  r_.__exportStar(aF(), vi);
  r_.__exportStar(cF(), vi);
  r_.__exportStar(uF(), vi);
  var WZ = Zh();
  Object.defineProperty(vi, "RDSDataServiceException", { enumerable: true, get: function() {
    return WZ.RDSDataServiceException;
  } });
});
function bn(e35) {
  return typeof e35 > "u" || e35 === void 0;
}
__name(bn, "bn");
function Ie(e35) {
  return typeof e35 == "string";
}
__name(Ie, "Ie");
function AS(e35) {
  return typeof e35 == "number";
}
__name(AS, "AS");
function Cu(e35) {
  return typeof e35 == "boolean";
}
__name(Cu, "Cu");
function Ou(e35) {
  return e35 === null;
}
__name(Ou, "Ou");
function TS(e35) {
  return e35 instanceof Date;
}
__name(TS, "TS");
function PS(e35) {
  return typeof e35 == "bigint";
}
__name(PS, "PS");
function me(e35) {
  return typeof e35 == "function";
}
__name(me, "me");
function Qe(e35) {
  return typeof e35 == "object" && e35 !== null;
}
__name(Qe, "Qe");
function IS(e35) {
  return e35[e35.length - 1];
}
__name(IS, "IS");
function d(e35) {
  return Object.freeze(e35);
}
__name(d, "d");
function lr(e35) {
  return Array.isArray(e35);
}
__name(lr, "lr");
function xn(e35) {
  return e35;
}
__name(xn, "xn");
var ae = d({ is(e35) {
  return e35.kind === "AlterTableNode";
}, create(e35) {
  return d({ kind: "AlterTableNode", table: e35 });
}, cloneWithTableProps(e35, t) {
  return d({ ...e35, ...t });
}, cloneWithColumnAlteration(e35, t) {
  return d({ ...e35, columnAlterations: e35.columnAlterations ? [...e35.columnAlterations, t] : [t] });
} });
var M = d({ is(e35) {
  return e35.kind === "IdentifierNode";
}, create(e35) {
  return d({ kind: "IdentifierNode", name: e35 });
} });
var pr = d({ is(e35) {
  return e35.kind === "CreateIndexNode";
}, create(e35) {
  return d({ kind: "CreateIndexNode", name: M.create(e35) });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
}, cloneWithColumns(e35, t) {
  return d({ ...e35, columns: [...e35.columns || [], ...t] });
} });
var Au = d({ is(e35) {
  return e35.kind === "CreateSchemaNode";
}, create(e35, t) {
  return d({ kind: "CreateSchemaNode", schema: M.create(e35), ...t });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var RS = ["preserve rows", "delete rows", "drop"];
var vt = d({ is(e35) {
  return e35.kind === "CreateTableNode";
}, create(e35) {
  return d({ kind: "CreateTableNode", table: e35, columns: d([]) });
}, cloneWithColumn(e35, t) {
  return d({ ...e35, columns: d([...e35.columns, t]) });
}, cloneWithConstraint(e35, t) {
  return d({ ...e35, constraints: e35.constraints ? d([...e35.constraints, t]) : d([t]) });
}, cloneWithFrontModifier(e35, t) {
  return d({ ...e35, frontModifiers: e35.frontModifiers ? d([...e35.frontModifiers, t]) : d([t]) });
}, cloneWithEndModifier(e35, t) {
  return d({ ...e35, endModifiers: e35.endModifiers ? d([...e35.endModifiers, t]) : d([t]) });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var ct = d({ is(e35) {
  return e35.kind === "SchemableIdentifierNode";
}, create(e35) {
  return d({ kind: "SchemableIdentifierNode", identifier: M.create(e35) });
}, createWithSchema(e35, t) {
  return d({ kind: "SchemableIdentifierNode", schema: M.create(e35), identifier: M.create(t) });
} });
var co = d({ is(e35) {
  return e35.kind === "DropIndexNode";
}, create(e35, t) {
  return d({ kind: "DropIndexNode", name: ct.create(e35), ...t });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var ba = d({ is(e35) {
  return e35.kind === "DropSchemaNode";
}, create(e35, t) {
  return d({ kind: "DropSchemaNode", schema: M.create(e35), ...t });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var xa = d({ is(e35) {
  return e35.kind === "DropTableNode";
}, create(e35, t) {
  return d({ kind: "DropTableNode", table: e35, ...t });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var ut = d({ is(e35) {
  return e35.kind === "AliasNode";
}, create(e35, t) {
  return d({ kind: "AliasNode", node: e35, alias: t });
} });
var Rt = d({ is(e35) {
  return e35.kind === "TableNode";
}, create(e35) {
  return d({ kind: "TableNode", table: ct.create(e35) });
}, createWithSchema(e35, t) {
  return d({ kind: "TableNode", table: ct.createWithSchema(e35, t) });
} });
function he(e35) {
  return Qe(e35) && me(e35.toOperationNode);
}
__name(he, "he");
function qS(e35) {
  return Qe(e35) && "expressionType" in e35 && he(e35);
}
__name(qS, "qS");
function MS(e35) {
  return Qe(e35) && "expression" in e35 && Ie(e35.alias) && he(e35);
}
__name(MS, "MS");
var fr = d({ is(e35) {
  return e35.kind === "SelectModifierNode";
}, create(e35) {
  return d({ kind: "SelectModifierNode", modifier: e35 });
}, createWithExpression(e35) {
  return d({ kind: "SelectModifierNode", rawModifier: e35 });
} });
var Hr = d({ is(e35) {
  return e35.kind === "AndNode";
}, create(e35, t) {
  return d({ kind: "AndNode", left: e35, right: t });
} });
var Gr = d({ is(e35) {
  return e35.kind === "OrNode";
}, create(e35, t) {
  return d({ kind: "OrNode", left: e35, right: t });
} });
var uo = d({ is(e35) {
  return e35.kind === "OnNode";
}, create(e35) {
  return d({ kind: "OnNode", on: e35 });
}, cloneWithOperation(e35, t, r) {
  return d({ ...e35, on: t === "And" ? Hr.create(e35.on, r) : Gr.create(e35.on, r) });
} });
var Ke = d({ is(e35) {
  return e35.kind === "JoinNode";
}, create(e35, t) {
  return d({ kind: "JoinNode", joinType: e35, table: t, on: void 0 });
}, createWithOn(e35, t, r) {
  return d({ kind: "JoinNode", joinType: e35, table: t, on: uo.create(r) });
}, cloneWithOn(e35, t) {
  return d({ ...e35, on: e35.on ? uo.cloneWithOperation(e35.on, "And", t) : uo.create(t) });
}, cloneWithOrOn(e35, t) {
  return d({ ...e35, on: e35.on ? uo.cloneWithOperation(e35.on, "Or", t) : uo.create(t) });
} });
var Ca = d({ is(e35) {
  return e35.kind === "BinaryOperationNode";
}, create(e35, t, r) {
  return d({ kind: "BinaryOperationNode", leftOperand: e35, operator: t, rightOperand: r });
} });
var Oe = d({ is(e35) {
  return e35.kind === "RawNode";
}, create(e35, t) {
  return d({ kind: "RawNode", sqlFragments: d(e35), parameters: d(t) });
}, createWithSql(e35) {
  return Oe.create([e35], []);
}, createWithChild(e35) {
  return Oe.create(["", ""], [e35]);
}, createWithChildren(e35) {
  return Oe.create(new Array(e35.length + 1).fill(""), e35);
} });
var DS = ["=", "==", "!=", "<>", ">", ">=", "<", "<=", "in", "not in", "is", "is not", "like", "not like", "match", "ilike", "not ilike", "@>", "<@", "?", "?&", "!<", "!>", "<=>", "!~", "~", "~*", "!~*", "@@", "@@@", "!!", "<->"];
var vF = ["+", "-", "*", "/", "%", "^", "&", "|", "#", "<<", ">>"];
var kS = [...DS, ...vF, "&&", "||"];
var EF = ["exists", "not exists"];
var wF = ["not", "-", ...EF];
var FS = [...kS, ...wF];
var lo = d({ is(e35) {
  return e35.kind === "OperatorNode";
}, create(e35) {
  return d({ kind: "OperatorNode", operator: e35 });
} });
function o_(e35) {
  return Ie(e35) && kS.includes(e35);
}
__name(o_, "o_");
function s_(e35) {
  return Ie(e35) && DS.includes(e35);
}
__name(s_, "s_");
var Cn = d({ is(e35) {
  return e35.kind === "ParensNode";
}, create(e35) {
  return d({ kind: "ParensNode", node: e35 });
} });
var W = d({ is(e35) {
  return e35.kind === "ColumnNode";
}, create(e35) {
  return d({ kind: "ColumnNode", column: M.create(e35) });
} });
var po = d({ is(e35) {
  return e35.kind === "SelectAllNode";
}, create() {
  return d({ kind: "SelectAllNode" });
} });
var wi = d({ is(e35) {
  return e35.kind === "ReferenceNode";
}, create(e35, t) {
  return d({ kind: "ReferenceNode", table: e35, column: t });
}, createSelectAll(e35) {
  return d({ kind: "ReferenceNode", table: e35, column: po.create() });
} });
var LS = d({ is(e35) {
  return e35.kind === "OrderByItemNode";
}, create(e35, t) {
  return d({ kind: "OrderByItemNode", orderBy: e35, direction: t });
} });
function jS(e35) {
  return e35 === "asc" || e35 === "desc";
}
__name(jS, "jS");
function On(e35, t) {
  return LS.create(SF(e35), NF(t));
}
__name(On, "On");
function SF(e35) {
  return Et(e35);
}
__name(SF, "SF");
function NF(e35) {
  if (e35)
    return e35 === "asc" || e35 === "desc" ? Oe.createWithSql(e35) : e35.toOperationNode();
}
__name(NF, "NF");
function a_(e35) {
  return Ie(e35) ? Qr(e35) : e35.toOperationNode();
}
__name(a_, "a_");
function Kr(e35) {
  return lr(e35) ? e35.map((t) => Et(t)) : [Et(e35)];
}
__name(Kr, "Kr");
function Et(e35) {
  return Si(e35) ? An(e35) : a_(e35);
}
__name(Et, "Et");
function Qr(e35) {
  let t = ".";
  if (e35.includes(t)) {
    let r = e35.split(t).map(d_);
    if (r.length === 3)
      return bF(r);
    if (r.length === 2)
      return xF(r);
    throw new Error(`invalid column reference ${e35}`);
  } else
    return W.create(e35);
}
__name(Qr, "Qr");
function US(e35) {
  let t = " as ";
  if (e35.includes(t)) {
    let [r, n] = e35.split(t).map(d_);
    return ut.create(Qr(r), M.create(n));
  } else
    return Qr(e35);
}
__name(US, "US");
function c_(e35) {
  return W.create(e35);
}
__name(c_, "c_");
function u_(e35) {
  let t = " ";
  if (e35.includes(t)) {
    let [r, n] = e35.split(t).map(d_);
    if (!jS(n))
      throw new Error(`invalid order direction "${n}" next to "${r}"`);
    return On(r, n);
  } else
    return c_(e35);
}
__name(u_, "u_");
function bF(e35) {
  let [t, r, n] = e35;
  return wi.create(Rt.createWithSchema(t, r), W.create(n));
}
__name(bF, "bF");
function xF(e35) {
  let [t, r] = e35;
  return wi.create(Rt.create(t), W.create(r));
}
__name(xF, "xF");
function d_(e35) {
  return e35.trim();
}
__name(d_, "d_");
var Tu = d({ is(e35) {
  return e35.kind === "PrimitiveValueListNode";
}, create(e35) {
  return d({ kind: "PrimitiveValueListNode", values: d([...e35]) });
} });
var fo = d({ is(e35) {
  return e35.kind === "ValueListNode";
}, create(e35) {
  return d({ kind: "ValueListNode", values: d(e35) });
} });
var ke = d({ is(e35) {
  return e35.kind === "ValueNode";
}, create(e35) {
  return d({ kind: "ValueNode", value: e35 });
}, createImmediate(e35) {
  return d({ kind: "ValueNode", value: e35, immediate: true });
} });
function Pu(e35) {
  return lr(e35) ? CF(e35) : wt(e35);
}
__name(Pu, "Pu");
function wt(e35) {
  return Si(e35) ? An(e35) : ke.create(e35);
}
__name(wt, "wt");
function CF(e35) {
  return e35.some(Si) ? fo.create(e35.map((t) => wt(t))) : Tu.create(e35);
}
__name(CF, "CF");
var Yr = d({ is(e35) {
  return e35.kind === "OrderByNode";
}, create(e35) {
  return d({ kind: "OrderByNode", items: d([e35]) });
}, cloneWithItem(e35, t) {
  return d({ ...e35, items: d([...e35.items, t]) });
} });
var l_ = d({ is(e35) {
  return e35.kind === "PartitionByNode";
}, create(e35) {
  return d({ kind: "PartitionByNode", items: d(e35) });
}, cloneWithItems(e35, t) {
  return d({ ...e35, items: d([...e35.items, ...t]) });
} });
var Oa = d({ is(e35) {
  return e35.kind === "OverNode";
}, create() {
  return d({ kind: "OverNode" });
}, cloneWithOrderByItem(e35, t) {
  return d({ ...e35, orderBy: e35.orderBy ? Yr.cloneWithItem(e35.orderBy, t) : Yr.create(t) });
}, cloneWithPartitionByItems(e35, t) {
  return d({ ...e35, partitionBy: e35.partitionBy ? l_.cloneWithItems(e35.partitionBy, t) : l_.create(t) });
} });
var Ni = d({ is(e35) {
  return e35.kind === "FromNode";
}, create(e35) {
  return d({ kind: "FromNode", froms: d(e35) });
}, cloneWithFroms(e35, t) {
  return d({ ...e35, froms: d([...e35.froms, ...t]) });
} });
var p_ = d({ is(e35) {
  return e35.kind === "GroupByNode";
}, create(e35) {
  return d({ kind: "GroupByNode", items: d(e35) });
}, cloneWithItems(e35, t) {
  return d({ ...e35, items: d([...e35.items, ...t]) });
} });
var Aa = d({ is(e35) {
  return e35.kind === "HavingNode";
}, create(e35) {
  return d({ kind: "HavingNode", having: e35 });
}, cloneWithOperation(e35, t, r) {
  return d({ ...e35, having: t === "And" ? Hr.create(e35.having, r) : Gr.create(e35.having, r) });
} });
var R = d({ is(e35) {
  return e35.kind === "SelectQueryNode";
}, create(e35, t) {
  return d({ kind: "SelectQueryNode", from: Ni.create(e35), ...t && { with: t } });
}, cloneWithSelections(e35, t) {
  return d({ ...e35, selections: e35.selections ? d([...e35.selections, ...t]) : d(t) });
}, cloneWithDistinctOn(e35, t) {
  return d({ ...e35, distinctOn: e35.distinctOn ? d([...e35.distinctOn, ...t]) : d(t) });
}, cloneWithFrontModifier(e35, t) {
  return d({ ...e35, frontModifiers: e35.frontModifiers ? d([...e35.frontModifiers, t]) : d([t]) });
}, cloneWithEndModifier(e35, t) {
  return d({ ...e35, endModifiers: e35.endModifiers ? d([...e35.endModifiers, t]) : d([t]) });
}, cloneWithOrderByItem(e35, t) {
  return d({ ...e35, orderBy: e35.orderBy ? Yr.cloneWithItem(e35.orderBy, t) : Yr.create(t) });
}, cloneWithGroupByItems(e35, t) {
  return d({ ...e35, groupBy: e35.groupBy ? p_.cloneWithItems(e35.groupBy, t) : p_.create(t) });
}, cloneWithLimit(e35, t) {
  return d({ ...e35, limit: t });
}, cloneWithOffset(e35, t) {
  return d({ ...e35, offset: t });
}, cloneWithHaving(e35, t) {
  return d({ ...e35, having: e35.having ? Aa.cloneWithOperation(e35.having, "And", t) : Aa.create(t) });
}, cloneWithOrHaving(e35, t) {
  return d({ ...e35, having: e35.having ? Aa.cloneWithOperation(e35.having, "Or", t) : Aa.create(t) });
}, cloneWithSetOperation(e35, t) {
  return d({ ...e35, setOperations: e35.setOperations ? d([...e35.setOperations, t]) : d([t]) });
}, cloneWithoutSelections(e35) {
  return d({ ...e35, selections: [] });
}, cloneWithoutLimit(e35) {
  return d({ ...e35, limit: void 0 });
}, cloneWithoutOffset(e35) {
  return d({ ...e35, offset: void 0 });
}, cloneWithoutOrderBy(e35) {
  return d({ ...e35, orderBy: void 0 });
} });
var Iu = d({ is(e35) {
  return e35.kind === "UnaryOperationNode";
}, create(e35, t) {
  return d({ kind: "UnaryOperationNode", operator: e35, operand: t });
} });
function Ee(e35) {
  return Ru("exists", e35);
}
__name(Ee, "Ee");
function _e(e35) {
  return Ru("not exists", e35);
}
__name(_e, "_e");
function Ru(e35, t) {
  return Iu.create(lo.create(e35), Et(t));
}
__name(Ru, "Ru");
function O(e35, t) {
  Object.defineProperties(e35.prototype, { then: { enumerable: false, value: () => {
    throw new Error(t);
  } } });
}
__name(O, "O");
var Ta = class e {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  on(...t) {
    return new e({ ...this.#e, joinNode: Ke.cloneWithOn(this.#e.joinNode, f_(t)) });
  }
  orOn(...t) {
    return new e({ ...this.#e, joinNode: Ke.cloneWithOrOn(this.#e.joinNode, f_(t)) });
  }
  onRef(t, r, n) {
    return new e({ ...this.#e, joinNode: Ke.cloneWithOn(this.#e.joinNode, ce(t, r, n)) });
  }
  orOnRef(t, r, n) {
    return new e({ ...this.#e, joinNode: Ke.cloneWithOrOn(this.#e.joinNode, ce(t, r, n)) });
  }
  onExists(t) {
    return new e({ ...this.#e, joinNode: Ke.cloneWithOn(this.#e.joinNode, Ee(t)) });
  }
  onNotExists(t) {
    return new e({ ...this.#e, joinNode: Ke.cloneWithOn(this.#e.joinNode, _e(t)) });
  }
  orOnExists(t) {
    return new e({ ...this.#e, joinNode: Ke.cloneWithOrOn(this.#e.joinNode, Ee(t)) });
  }
  orOnNotExists(t) {
    return new e({ ...this.#e, joinNode: Ke.cloneWithOrOn(this.#e.joinNode, _e(t)) });
  }
  onTrue() {
    return new e({ ...this.#e, joinNode: Ke.cloneWithOn(this.#e.joinNode, Oe.createWithSql("true")) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.joinNode;
  }
};
O(Ta, "don't await JoinBuilder instances. They are never executed directly and are always just a part of a query.");
var BS = d({ is(e35) {
  return e35.kind === "PartitionByItemNode";
}, create(e35) {
  return d({ kind: "PartitionByItemNode", partitionBy: e35 });
} });
function WS(e35) {
  return Kr(e35).map(BS.create);
}
__name(WS, "WS");
var Pa = class e2 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  orderBy(t, r) {
    return new e2({ overNode: Oa.cloneWithOrderByItem(this.#e.overNode, On(t, r)) });
  }
  partitionBy(t) {
    return new e2({ overNode: Oa.cloneWithPartitionByItems(this.#e.overNode, WS(t)) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.overNode;
  }
};
O(Pa, "don't await OverBuilder instances. They are never executed directly and are always just a part of a query.");
var mo = d({ is(e35) {
  return e35.kind === "SelectionNode";
}, create(e35) {
  return d({ kind: "SelectionNode", selection: e35 });
}, createSelectAll() {
  return d({ kind: "SelectionNode", selection: po.create() });
}, createSelectAllFromTable(e35) {
  return d({ kind: "SelectionNode", selection: wi.createSelectAll(e35) });
} });
var qu = class {
  static {
    __name(this, "qu");
  }
  #e;
  get dynamicReference() {
    return this.#e;
  }
  get refType() {
  }
  constructor(t) {
    this.#e = t;
  }
  toOperationNode() {
    return a_(this.#e);
  }
};
function VS(e35) {
  return Qe(e35) && he(e35) && Ie(e35.dynamicReference);
}
__name(VS, "VS");
function Jr(e35) {
  return me(e35) ? Jr(e35(tt())) : lr(e35) ? e35.map((t) => $S(t)) : [$S(e35)];
}
__name(Jr, "Jr");
function $S(e35) {
  return Ie(e35) ? mo.create(US(e35)) : VS(e35) ? mo.create(e35.toOperationNode()) : mo.create(Mu(e35));
}
__name($S, "$S");
function mr(e35) {
  return e35 ? Array.isArray(e35) ? e35.map(zS) : [zS(e35)] : [mo.createSelectAll()];
}
__name(mr, "mr");
function zS(e35) {
  if (Ie(e35))
    return mo.createSelectAllFromTable(we(e35));
  throw new Error(`invalid value selectAll expression: ${JSON.stringify(e35)}`);
}
__name(zS, "zS");
var HS = d({ is(e35) {
  return e35.kind === "ValuesNode";
}, create(e35) {
  return d({ kind: "ValuesNode", values: d(e35) });
} });
var GS = d({ is(e35) {
  return e35.kind === "DefaultInsertValueNode";
}, create() {
  return d({ kind: "DefaultInsertValueNode" });
} });
function QS(e35) {
  let t = me(e35) ? e35(tt()) : e35, r = lr(t) ? t : d([t]);
  return OF(r);
}
__name(QS, "QS");
function OF(e35) {
  let t = AF(e35);
  return [d([...t.keys()].map(W.create)), HS.create(e35.map((r) => TF(r, t)))];
}
__name(OF, "OF");
function AF(e35) {
  let t = /* @__PURE__ */ new Map();
  for (let r of e35) {
    let n = Object.keys(r);
    for (let i of n)
      !t.has(i) && r[i] !== void 0 && t.set(i, t.size);
  }
  return t;
}
__name(AF, "AF");
function TF(e35, t) {
  let r = Object.keys(e35), n = Array.from({ length: t.size }), i = false;
  for (let s of r) {
    let a = t.get(s);
    if (bn(a))
      continue;
    let u = e35[s];
    (bn(u) || Si(u)) && (i = true), n[a] = u;
  }
  if (r.length < t.size || i) {
    let s = GS.create();
    return fo.create(n.map((a) => bn(a) ? s : wt(a)));
  }
  return Tu.create(n);
}
__name(TF, "TF");
var dt = d({ is(e35) {
  return e35.kind === "InsertQueryNode";
}, create(e35, t, r) {
  return d({ kind: "InsertQueryNode", into: e35, ...t && { with: t }, replace: r });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var bi = d({ is(e35) {
  return e35.kind === "UpdateQueryNode";
}, create(e35, t) {
  return d({ kind: "UpdateQueryNode", table: e35, ...t && { with: t } });
}, cloneWithFromItems(e35, t) {
  return d({ ...e35, from: e35.from ? Ni.cloneWithFroms(e35.from, t) : Ni.create(t) });
}, cloneWithUpdates(e35, t) {
  return d({ ...e35, updates: e35.updates ? d([...e35.updates, ...t]) : t });
} });
var m_ = d({ is(e35) {
  return e35.kind === "UsingNode";
}, create(e35) {
  return d({ kind: "UsingNode", tables: d(e35) });
}, cloneWithTables(e35, t) {
  return d({ ...e35, tables: d([...e35.tables, ...t]) });
} });
var Tn = d({ is(e35) {
  return e35.kind === "DeleteQueryNode";
}, create(e35, t) {
  return d({ kind: "DeleteQueryNode", from: Ni.create(e35), ...t && { with: t } });
}, cloneWithOrderByItem(e35, t) {
  return d({ ...e35, orderBy: e35.orderBy ? Yr.cloneWithItem(e35.orderBy, t) : Yr.create(t) });
}, cloneWithLimit(e35, t) {
  return d({ ...e35, limit: t });
}, cloneWithUsing(e35, t) {
  return d({ ...e35, using: e35.using !== void 0 ? m_.cloneWithTables(e35.using, t) : m_.create(t) });
} });
var Re = d({ is(e35) {
  return e35.kind === "WhereNode";
}, create(e35) {
  return d({ kind: "WhereNode", where: e35 });
}, cloneWithOperation(e35, t, r) {
  return d({ ...e35, where: t === "And" ? Hr.create(e35.where, r) : Gr.create(e35.where, r) });
} });
var h_ = d({ is(e35) {
  return e35.kind === "ReturningNode";
}, create(e35) {
  return d({ kind: "ReturningNode", selections: d(e35) });
}, cloneWithSelections(e35, t) {
  return d({ ...e35, selections: e35.selections ? d([...e35.selections, ...t]) : d(t) });
} });
var KS = d({ is(e35) {
  return e35.kind === "ExplainNode";
}, create(e35, t) {
  return d({ kind: "ExplainNode", format: e35, options: t });
} });
var C = d({ is(e35) {
  return R.is(e35) || dt.is(e35) || bi.is(e35) || Tn.is(e35);
}, cloneWithWhere(e35, t) {
  return d({ ...e35, where: e35.where ? Re.cloneWithOperation(e35.where, "And", t) : Re.create(t) });
}, cloneWithOrWhere(e35, t) {
  return d({ ...e35, where: e35.where ? Re.cloneWithOperation(e35.where, "Or", t) : Re.create(t) });
}, cloneWithJoin(e35, t) {
  return d({ ...e35, joins: e35.joins ? d([...e35.joins, t]) : d([t]) });
}, cloneWithReturning(e35, t) {
  return d({ ...e35, returning: e35.returning ? h_.cloneWithSelections(e35.returning, t) : h_.create(t) });
}, cloneWithoutWhere(e35) {
  return d({ ...e35, where: void 0 });
}, cloneWithExplain(e35, t, r) {
  return d({ ...e35, explain: KS.create(t, r?.toOperationNode()) });
} });
var YS = d({ is(e35) {
  return e35.kind === "ColumnUpdateNode";
}, create(e35, t) {
  return d({ kind: "ColumnUpdateNode", column: e35, value: t });
} });
function ho(e35) {
  let t = me(e35) ? e35(tt()) : e35;
  return Object.entries(t).filter(([r, n]) => n !== void 0).map(([r, n]) => YS.create(W.create(r), wt(n)));
}
__name(ho, "ho");
var JS = d({ is(e35) {
  return e35.kind === "OnDuplicateKeyNode";
}, create(e35) {
  return d({ kind: "OnDuplicateKeyNode", updates: e35 });
} });
var Ia = class {
  static {
    __name(this, "Ia");
  }
  #e;
  #t;
  constructor(t, r) {
    this.#e = t, this.#t = r;
  }
  get insertId() {
    return this.#e;
  }
  get numInsertedOrUpdatedRows() {
    return this.#t;
  }
};
for (let e35 of ["insertId", "numInsertedOrUpdatedRows"])
  Object.defineProperty(Ia.prototype, e35, { enumerable: true });
var hr = class extends Error {
  static {
    __name(this, "hr");
  }
  node;
  constructor(t) {
    super("no result"), this.node = t;
  }
};
function Pn(e35) {
  return Object.prototype.hasOwnProperty.call(e35, "prototype");
}
__name(Pn, "Pn");
var X = d({ is(e35) {
  return e35.kind === "OnConflictNode";
}, create() {
  return d({ kind: "OnConflictNode" });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
}, cloneWithIndexWhere(e35, t) {
  return d({ ...e35, indexWhere: e35.indexWhere ? Re.cloneWithOperation(e35.indexWhere, "And", t) : Re.create(t) });
}, cloneWithIndexOrWhere(e35, t) {
  return d({ ...e35, indexWhere: e35.indexWhere ? Re.cloneWithOperation(e35.indexWhere, "Or", t) : Re.create(t) });
}, cloneWithUpdateWhere(e35, t) {
  return d({ ...e35, updateWhere: e35.updateWhere ? Re.cloneWithOperation(e35.updateWhere, "And", t) : Re.create(t) });
}, cloneWithUpdateOrWhere(e35, t) {
  return d({ ...e35, updateWhere: e35.updateWhere ? Re.cloneWithOperation(e35.updateWhere, "Or", t) : Re.create(t) });
}, cloneWithoutIndexWhere(e35) {
  return d({ ...e35, indexWhere: void 0 });
}, cloneWithoutUpdateWhere(e35) {
  return d({ ...e35, updateWhere: void 0 });
} });
var Ra = class e3 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  column(t) {
    let r = W.create(t);
    return new e3({ ...this.#e, onConflictNode: X.cloneWith(this.#e.onConflictNode, { columns: this.#e.onConflictNode.columns ? d([...this.#e.onConflictNode.columns, r]) : d([r]) }) });
  }
  columns(t) {
    let r = t.map(W.create);
    return new e3({ ...this.#e, onConflictNode: X.cloneWith(this.#e.onConflictNode, { columns: this.#e.onConflictNode.columns ? d([...this.#e.onConflictNode.columns, ...r]) : d(r) }) });
  }
  constraint(t) {
    return new e3({ ...this.#e, onConflictNode: X.cloneWith(this.#e.onConflictNode, { constraint: M.create(t) }) });
  }
  expression(t) {
    return new e3({ ...this.#e, onConflictNode: X.cloneWith(this.#e.onConflictNode, { indexExpression: t.toOperationNode() }) });
  }
  where(...t) {
    return new e3({ ...this.#e, onConflictNode: X.cloneWithIndexWhere(this.#e.onConflictNode, qe(t)) });
  }
  whereRef(t, r, n) {
    return new e3({ ...this.#e, onConflictNode: X.cloneWithIndexWhere(this.#e.onConflictNode, ce(t, r, n)) });
  }
  orWhere(...t) {
    return new e3({ ...this.#e, onConflictNode: X.cloneWithIndexOrWhere(this.#e.onConflictNode, qe(t)) });
  }
  orWhereRef(t, r, n) {
    return new e3({ ...this.#e, onConflictNode: X.cloneWithIndexOrWhere(this.#e.onConflictNode, ce(t, r, n)) });
  }
  whereExists(t) {
    return new e3({ ...this.#e, onConflictNode: X.cloneWithIndexWhere(this.#e.onConflictNode, Ee(t)) });
  }
  whereNotExists(t) {
    return new e3({ ...this.#e, onConflictNode: X.cloneWithIndexWhere(this.#e.onConflictNode, _e(t)) });
  }
  orWhereExists(t) {
    return new e3({ ...this.#e, onConflictNode: X.cloneWithIndexOrWhere(this.#e.onConflictNode, Ee(t)) });
  }
  orWhereNotExists(t) {
    return new e3({ ...this.#e, onConflictNode: X.cloneWithIndexOrWhere(this.#e.onConflictNode, _e(t)) });
  }
  clearWhere() {
    return new e3({ ...this.#e, onConflictNode: X.cloneWithoutIndexWhere(this.#e.onConflictNode) });
  }
  doNothing() {
    return new Du({ ...this.#e, onConflictNode: X.cloneWith(this.#e.onConflictNode, { doNothing: true }) });
  }
  doUpdateSet(t) {
    return new ku({ ...this.#e, onConflictNode: X.cloneWith(this.#e.onConflictNode, { updates: ho(t) }) });
  }
  $call(t) {
    return t(this);
  }
};
O(Ra, "don't await OnConflictBuilder instances.");
var Du = class {
  static {
    __name(this, "Du");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  toOperationNode() {
    return this.#e.onConflictNode;
  }
};
O(Du, "don't await OnConflictDoNothingBuilder instances.");
var ku = class e4 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  where(...t) {
    return new e4({ ...this.#e, onConflictNode: X.cloneWithUpdateWhere(this.#e.onConflictNode, qe(t)) });
  }
  whereRef(t, r, n) {
    return new e4({ ...this.#e, onConflictNode: X.cloneWithUpdateWhere(this.#e.onConflictNode, ce(t, r, n)) });
  }
  orWhere(...t) {
    return new e4({ ...this.#e, onConflictNode: X.cloneWithUpdateOrWhere(this.#e.onConflictNode, qe(t)) });
  }
  orWhereRef(t, r, n) {
    return new e4({ ...this.#e, onConflictNode: X.cloneWithUpdateOrWhere(this.#e.onConflictNode, ce(t, r, n)) });
  }
  whereExists(t) {
    return new e4({ ...this.#e, onConflictNode: X.cloneWithUpdateWhere(this.#e.onConflictNode, Ee(t)) });
  }
  whereNotExists(t) {
    return new e4({ ...this.#e, onConflictNode: X.cloneWithUpdateWhere(this.#e.onConflictNode, _e(t)) });
  }
  orWhereExists(t) {
    return new e4({ ...this.#e, onConflictNode: X.cloneWithUpdateOrWhere(this.#e.onConflictNode, Ee(t)) });
  }
  orWhereNotExists(t) {
    return new e4({ ...this.#e, onConflictNode: X.cloneWithUpdateOrWhere(this.#e.onConflictNode, _e(t)) });
  }
  clearWhere() {
    return new e4({ ...this.#e, onConflictNode: X.cloneWithoutUpdateWhere(this.#e.onConflictNode) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.onConflictNode;
  }
};
O(ku, "don't await OnConflictUpdateBuilder instances.");
var _o = class e5 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  values(t) {
    let [r, n] = QS(t);
    return new e5({ ...this.#e, queryNode: dt.cloneWith(this.#e.queryNode, { columns: r, values: n }) });
  }
  columns(t) {
    return new e5({ ...this.#e, queryNode: dt.cloneWith(this.#e.queryNode, { columns: d(t.map(W.create)) }) });
  }
  expression(t) {
    return new e5({ ...this.#e, queryNode: dt.cloneWith(this.#e.queryNode, { values: An(t) }) });
  }
  ignore() {
    return new e5({ ...this.#e, queryNode: dt.cloneWith(this.#e.queryNode, { ignore: true }) });
  }
  onConflict(t) {
    return new e5({ ...this.#e, queryNode: dt.cloneWith(this.#e.queryNode, { onConflict: t(new Ra({ onConflictNode: X.create() })).toOperationNode() }) });
  }
  onDuplicateKeyUpdate(t) {
    return new e5({ ...this.#e, queryNode: dt.cloneWith(this.#e.queryNode, { onDuplicateKey: JS.create(ho(t)) }) });
  }
  returning(t) {
    return new e5({ ...this.#e, queryNode: C.cloneWithReturning(this.#e.queryNode, Jr(t)) });
  }
  returningAll() {
    return new e5({ ...this.#e, queryNode: C.cloneWithReturning(this.#e.queryNode, mr()) });
  }
  $call(t) {
    return t(this);
  }
  call(t) {
    return this.$call(t);
  }
  $if(t, r) {
    return t ? r(this) : new e5({ ...this.#e });
  }
  if(t, r) {
    return t ? r(this) : new e5({ ...this.#e });
  }
  $castTo() {
    return new e5(this.#e);
  }
  castTo() {
    return this.$castTo();
  }
  $narrowType() {
    return new e5(this.#e);
  }
  $assertType() {
    return new e5(this.#e);
  }
  assertType() {
    return new e5(this.#e);
  }
  withPlugin(t) {
    return new e5({ ...this.#e, executor: this.#e.executor.withPlugin(t) });
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.queryNode, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    let t = this.compile(), r = t.query, n = await this.#e.executor.executeQuery(t, this.#e.queryId);
    return this.#e.executor.adapter.supportsReturning && r.returning ? n.rows : [new Ia(n.insertId, n.numAffectedRows ?? n.numUpdatedOrDeletedRows)];
  }
  async executeTakeFirst() {
    let [t] = await this.execute();
    return t;
  }
  async executeTakeFirstOrThrow(t = hr) {
    let r = await this.executeTakeFirst();
    if (r === void 0)
      throw Pn(t) ? new t(this.toOperationNode()) : t(this.toOperationNode());
    return r;
  }
  async *stream(t = 100) {
    let r = this.compile(), n = this.#e.executor.stream(r, t, this.#e.queryId);
    for await (let i of n)
      yield* i.rows;
  }
  async explain(t, r) {
    return await new e5({ ...this.#e, queryNode: C.cloneWithExplain(this.#e.queryNode, t, r) }).execute();
  }
};
O(_o, "don't await InsertQueryBuilder instances directly. To execute the query you need to call `execute` or `executeTakeFirst`.");
var qa = class {
  static {
    __name(this, "qa");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  get numDeletedRows() {
    return this.#e;
  }
};
Object.defineProperty(qa.prototype, "numDeletedRows", { enumerable: true });
var Fu = d({ is(e35) {
  return e35.kind === "LimitNode";
}, create(e35) {
  return d({ kind: "LimitNode", limit: ke.create(e35) });
} });
var Ma = class e6 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  where(...t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, qe(t)) });
  }
  whereRef(t, r, n) {
    return new e6({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, ce(t, r, n)) });
  }
  orWhere(...t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, qe(t)) });
  }
  orWhereRef(t, r, n) {
    return new e6({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, ce(t, r, n)) });
  }
  whereExists(t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, Ee(t)) });
  }
  whereNotExists(t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, _e(t)) });
  }
  orWhereExists(t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, Ee(t)) });
  }
  orWhereNotExists(t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, _e(t)) });
  }
  clearWhere() {
    return new e6({ ...this.#e, queryNode: C.cloneWithoutWhere(this.#e.queryNode) });
  }
  using(t) {
    return new e6({ ...this.#e, queryNode: Tn.cloneWithUsing(this.#e.queryNode, Jt(t)) });
  }
  innerJoin(...t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("InnerJoin", t)) });
  }
  leftJoin(...t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("LeftJoin", t)) });
  }
  rightJoin(...t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("RightJoin", t)) });
  }
  fullJoin(...t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("FullJoin", t)) });
  }
  returning(t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithReturning(this.#e.queryNode, Jr(t)) });
  }
  returningAll(t) {
    return new e6({ ...this.#e, queryNode: C.cloneWithReturning(this.#e.queryNode, mr(t)) });
  }
  orderBy(t, r) {
    return new e6({ ...this.#e, queryNode: Tn.cloneWithOrderByItem(this.#e.queryNode, On(t, r)) });
  }
  limit(t) {
    return new e6({ ...this.#e, queryNode: Tn.cloneWithLimit(this.#e.queryNode, Fu.create(t)) });
  }
  $call(t) {
    return t(this);
  }
  call(t) {
    return this.$call(t);
  }
  $if(t, r) {
    return t ? r(this) : new e6({ ...this.#e });
  }
  if(t, r) {
    return this.$if(t, r);
  }
  $castTo() {
    return new e6(this.#e);
  }
  castTo() {
    return this.$castTo();
  }
  $narrowType() {
    return new e6(this.#e);
  }
  $assertType() {
    return new e6(this.#e);
  }
  assertType() {
    return new e6(this.#e);
  }
  withPlugin(t) {
    return new e6({ ...this.#e, executor: this.#e.executor.withPlugin(t) });
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.queryNode, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    let t = this.compile(), r = t.query, n = await this.#e.executor.executeQuery(t, this.#e.queryId);
    return this.#e.executor.adapter.supportsReturning && r.returning ? n.rows : [new qa(n.numAffectedRows ?? n.numUpdatedOrDeletedRows ?? BigInt(0))];
  }
  async executeTakeFirst() {
    let [t] = await this.execute();
    return t;
  }
  async executeTakeFirstOrThrow(t = hr) {
    let r = await this.executeTakeFirst();
    if (r === void 0)
      throw Pn(t) ? new t(this.toOperationNode()) : t(this.toOperationNode());
    return r;
  }
  async *stream(t = 100) {
    let r = this.compile(), n = this.#e.executor.stream(r, t, this.#e.queryId);
    for await (let i of n)
      yield* i.rows;
  }
  async explain(t, r) {
    return await new e6({ ...this.#e, queryNode: C.cloneWithExplain(this.#e.queryNode, t, r) }).execute();
  }
};
O(Ma, "don't await DeleteQueryBuilder instances directly. To execute the query you need to call `execute` or `executeTakeFirst`.");
var Da = class {
  static {
    __name(this, "Da");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  get numUpdatedRows() {
    return this.#e;
  }
};
Object.defineProperty(Da.prototype, "numUpdatedRows", { enumerable: true });
var ka = class e7 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  where(...t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, qe(t)) });
  }
  whereRef(t, r, n) {
    return new e7({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, ce(t, r, n)) });
  }
  orWhere(...t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, qe(t)) });
  }
  orWhereRef(t, r, n) {
    return new e7({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, ce(t, r, n)) });
  }
  whereExists(t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, Ee(t)) });
  }
  whereNotExists(t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, _e(t)) });
  }
  orWhereExists(t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, Ee(t)) });
  }
  orWhereNotExists(t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, _e(t)) });
  }
  clearWhere() {
    return new e7({ ...this.#e, queryNode: C.cloneWithoutWhere(this.#e.queryNode) });
  }
  from(t) {
    return new e7({ ...this.#e, queryNode: bi.cloneWithFromItems(this.#e.queryNode, Jt(t)) });
  }
  innerJoin(...t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("InnerJoin", t)) });
  }
  leftJoin(...t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("LeftJoin", t)) });
  }
  rightJoin(...t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("RightJoin", t)) });
  }
  fullJoin(...t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("FullJoin", t)) });
  }
  set(t) {
    return new e7({ ...this.#e, queryNode: bi.cloneWithUpdates(this.#e.queryNode, ho(t)) });
  }
  returning(t) {
    return new e7({ ...this.#e, queryNode: C.cloneWithReturning(this.#e.queryNode, Jr(t)) });
  }
  returningAll() {
    return new e7({ ...this.#e, queryNode: C.cloneWithReturning(this.#e.queryNode, mr()) });
  }
  $call(t) {
    return t(this);
  }
  call(t) {
    return this.$call(t);
  }
  $if(t, r) {
    return t ? r(this) : new e7({ ...this.#e });
  }
  if(t, r) {
    return this.$if(t, r);
  }
  $castTo() {
    return new e7(this.#e);
  }
  castTo() {
    return this.$castTo();
  }
  $narrowType() {
    return new e7(this.#e);
  }
  $assertType() {
    return new e7(this.#e);
  }
  assertType() {
    return new e7(this.#e);
  }
  withPlugin(t) {
    return new e7({ ...this.#e, executor: this.#e.executor.withPlugin(t) });
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.queryNode, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    let t = this.compile(), r = t.query, n = await this.#e.executor.executeQuery(t, this.#e.queryId);
    return this.#e.executor.adapter.supportsReturning && r.returning ? n.rows : [new Da(n.numAffectedRows ?? n.numUpdatedOrDeletedRows ?? BigInt(0))];
  }
  async executeTakeFirst() {
    let [t] = await this.execute();
    return t;
  }
  async executeTakeFirstOrThrow(t = hr) {
    let r = await this.executeTakeFirst();
    if (r === void 0)
      throw Pn(t) ? new t(this.toOperationNode()) : t(this.toOperationNode());
    return r;
  }
  async *stream(t = 100) {
    let r = this.compile(), n = this.#e.executor.stream(r, t, this.#e.queryId);
    for await (let i of n)
      yield* i.rows;
  }
  async explain(t, r) {
    return await new e7({ ...this.#e, queryNode: C.cloneWithExplain(this.#e.queryNode, t, r) }).execute();
  }
};
O(ka, "don't await UpdateQueryBuilder instances directly. To execute the query you need to call `execute` or `executeTakeFirst`.");
var XS = d({ is(e35) {
  return e35.kind === "CommonTableExpressionNode";
}, create(e35, t) {
  return d({ kind: "CommonTableExpressionNode", name: e35, expression: t });
} });
var __ = d({ is(e35) {
  return e35.kind === "CommonTableExpressionNameNode";
}, create(e35, t) {
  return d({ kind: "CommonTableExpressionNameNode", table: Rt.create(e35), columns: t ? d(t.map(W.create)) : void 0 });
} });
function y_(e35, t) {
  let r = t(ZS());
  return XS.create(PF(e35), r.toOperationNode());
}
__name(y_, "y_");
function PF(e35) {
  if (e35.includes("(")) {
    let t = e35.split(/[\(\)]/), r = t[0], n = t[1].split(",").map((i) => i.trim());
    return __.create(r, n);
  } else
    return __.create(e35);
}
__name(PF, "PF");
var Fa = d({ is(e35) {
  return e35.kind === "WithNode";
}, create(e35, t) {
  return d({ kind: "WithNode", expressions: d([e35]), ...t });
}, cloneWithExpression(e35, t) {
  return d({ ...e35, expressions: d([...e35.expressions, t]) });
} });
var e0 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function t0(e35) {
  let t = "";
  for (let r = 0; r < e35; ++r)
    t += IF();
  return t;
}
__name(t0, "t0");
function IF() {
  return e0[~~(Math.random() * e0.length)];
}
__name(IF, "IF");
function H() {
  return new g_();
}
__name(H, "H");
var g_ = class {
  static {
    __name(this, "g_");
  }
  #e;
  get queryId() {
    return this.#e === void 0 && (this.#e = t0(8)), this.#e;
  }
};
var yo = class {
  static {
    __name(this, "yo");
  }
  nodeStack = [];
  #e = d({ AliasNode: this.transformAlias.bind(this), ColumnNode: this.transformColumn.bind(this), IdentifierNode: this.transformIdentifier.bind(this), SchemableIdentifierNode: this.transformSchemableIdentifier.bind(this), RawNode: this.transformRaw.bind(this), ReferenceNode: this.transformReference.bind(this), SelectQueryNode: this.transformSelectQuery.bind(this), SelectionNode: this.transformSelection.bind(this), TableNode: this.transformTable.bind(this), FromNode: this.transformFrom.bind(this), SelectAllNode: this.transformSelectAll.bind(this), AndNode: this.transformAnd.bind(this), OrNode: this.transformOr.bind(this), ValueNode: this.transformValue.bind(this), ValueListNode: this.transformValueList.bind(this), PrimitiveValueListNode: this.transformPrimitiveValueList.bind(this), ParensNode: this.transformParens.bind(this), JoinNode: this.transformJoin.bind(this), OperatorNode: this.transformOperator.bind(this), WhereNode: this.transformWhere.bind(this), InsertQueryNode: this.transformInsertQuery.bind(this), DeleteQueryNode: this.transformDeleteQuery.bind(this), ReturningNode: this.transformReturning.bind(this), CreateTableNode: this.transformCreateTable.bind(this), AddColumnNode: this.transformAddColumn.bind(this), ColumnDefinitionNode: this.transformColumnDefinition.bind(this), DropTableNode: this.transformDropTable.bind(this), DataTypeNode: this.transformDataType.bind(this), OrderByNode: this.transformOrderBy.bind(this), OrderByItemNode: this.transformOrderByItem.bind(this), GroupByNode: this.transformGroupBy.bind(this), GroupByItemNode: this.transformGroupByItem.bind(this), UpdateQueryNode: this.transformUpdateQuery.bind(this), ColumnUpdateNode: this.transformColumnUpdate.bind(this), LimitNode: this.transformLimit.bind(this), OffsetNode: this.transformOffset.bind(this), OnConflictNode: this.transformOnConflict.bind(this), OnDuplicateKeyNode: this.transformOnDuplicateKey.bind(this), CreateIndexNode: this.transformCreateIndex.bind(this), DropIndexNode: this.transformDropIndex.bind(this), ListNode: this.transformList.bind(this), PrimaryKeyConstraintNode: this.transformPrimaryKeyConstraint.bind(this), UniqueConstraintNode: this.transformUniqueConstraint.bind(this), ReferencesNode: this.transformReferences.bind(this), CheckConstraintNode: this.transformCheckConstraint.bind(this), WithNode: this.transformWith.bind(this), CommonTableExpressionNode: this.transformCommonTableExpression.bind(this), CommonTableExpressionNameNode: this.transformCommonTableExpressionName.bind(this), HavingNode: this.transformHaving.bind(this), CreateSchemaNode: this.transformCreateSchema.bind(this), DropSchemaNode: this.transformDropSchema.bind(this), AlterTableNode: this.transformAlterTable.bind(this), DropColumnNode: this.transformDropColumn.bind(this), RenameColumnNode: this.transformRenameColumn.bind(this), AlterColumnNode: this.transformAlterColumn.bind(this), ModifyColumnNode: this.transformModifyColumn.bind(this), AddConstraintNode: this.transformAddConstraint.bind(this), DropConstraintNode: this.transformDropConstraint.bind(this), ForeignKeyConstraintNode: this.transformForeignKeyConstraint.bind(this), CreateViewNode: this.transformCreateView.bind(this), DropViewNode: this.transformDropView.bind(this), GeneratedNode: this.transformGenerated.bind(this), DefaultValueNode: this.transformDefaultValue.bind(this), OnNode: this.transformOn.bind(this), ValuesNode: this.transformValues.bind(this), SelectModifierNode: this.transformSelectModifier.bind(this), CreateTypeNode: this.transformCreateType.bind(this), DropTypeNode: this.transformDropType.bind(this), ExplainNode: this.transformExplain.bind(this), DefaultInsertValueNode: this.transformDefaultInsertValue.bind(this), AggregateFunctionNode: this.transformAggregateFunction.bind(this), OverNode: this.transformOver.bind(this), PartitionByNode: this.transformPartitionBy.bind(this), PartitionByItemNode: this.transformPartitionByItem.bind(this), SetOperationNode: this.transformSetOperation.bind(this), BinaryOperationNode: this.transformBinaryOperation.bind(this), UnaryOperationNode: this.transformUnaryOperation.bind(this), UsingNode: this.transformUsing.bind(this), FunctionNode: this.transformFunction.bind(this), CaseNode: this.transformCase.bind(this), WhenNode: this.transformWhen.bind(this) });
  transformNode(t) {
    if (!t)
      return t;
    this.nodeStack.push(t);
    let r = this.transformNodeImpl(t);
    return this.nodeStack.pop(), d(r);
  }
  transformNodeImpl(t) {
    return this.#e[t.kind](t);
  }
  transformNodeList(t) {
    return t && d(t.map((r) => this.transformNode(r)));
  }
  transformSelectQuery(t) {
    return { kind: "SelectQueryNode", from: this.transformNode(t.from), selections: this.transformNodeList(t.selections), distinctOn: this.transformNodeList(t.distinctOn), joins: this.transformNodeList(t.joins), groupBy: this.transformNode(t.groupBy), orderBy: this.transformNode(t.orderBy), where: this.transformNode(t.where), frontModifiers: this.transformNodeList(t.frontModifiers), endModifiers: this.transformNodeList(t.endModifiers), limit: this.transformNode(t.limit), offset: this.transformNode(t.offset), with: this.transformNode(t.with), having: this.transformNode(t.having), explain: this.transformNode(t.explain), setOperations: this.transformNodeList(t.setOperations) };
  }
  transformSelection(t) {
    return { kind: "SelectionNode", selection: this.transformNode(t.selection) };
  }
  transformColumn(t) {
    return { kind: "ColumnNode", column: this.transformNode(t.column) };
  }
  transformAlias(t) {
    return { kind: "AliasNode", node: this.transformNode(t.node), alias: this.transformNode(t.alias) };
  }
  transformTable(t) {
    return { kind: "TableNode", table: this.transformNode(t.table) };
  }
  transformFrom(t) {
    return { kind: "FromNode", froms: this.transformNodeList(t.froms) };
  }
  transformReference(t) {
    return { kind: "ReferenceNode", table: this.transformNode(t.table), column: this.transformNode(t.column) };
  }
  transformAnd(t) {
    return { kind: "AndNode", left: this.transformNode(t.left), right: this.transformNode(t.right) };
  }
  transformOr(t) {
    return { kind: "OrNode", left: this.transformNode(t.left), right: this.transformNode(t.right) };
  }
  transformValueList(t) {
    return { kind: "ValueListNode", values: this.transformNodeList(t.values) };
  }
  transformParens(t) {
    return { kind: "ParensNode", node: this.transformNode(t.node) };
  }
  transformJoin(t) {
    return { kind: "JoinNode", joinType: t.joinType, table: this.transformNode(t.table), on: this.transformNode(t.on) };
  }
  transformRaw(t) {
    return { kind: "RawNode", sqlFragments: d([...t.sqlFragments]), parameters: this.transformNodeList(t.parameters) };
  }
  transformWhere(t) {
    return { kind: "WhereNode", where: this.transformNode(t.where) };
  }
  transformInsertQuery(t) {
    return { kind: "InsertQueryNode", into: this.transformNode(t.into), columns: this.transformNodeList(t.columns), values: this.transformNode(t.values), returning: this.transformNode(t.returning), onConflict: this.transformNode(t.onConflict), onDuplicateKey: this.transformNode(t.onDuplicateKey), with: this.transformNode(t.with), ignore: t.ignore, replace: t.replace, explain: this.transformNode(t.explain) };
  }
  transformValues(t) {
    return { kind: "ValuesNode", values: this.transformNodeList(t.values) };
  }
  transformDeleteQuery(t) {
    return { kind: "DeleteQueryNode", from: this.transformNode(t.from), using: this.transformNode(t.using), joins: this.transformNodeList(t.joins), where: this.transformNode(t.where), returning: this.transformNode(t.returning), with: this.transformNode(t.with), orderBy: this.transformNode(t.orderBy), limit: this.transformNode(t.limit), explain: this.transformNode(t.explain) };
  }
  transformReturning(t) {
    return { kind: "ReturningNode", selections: this.transformNodeList(t.selections) };
  }
  transformCreateTable(t) {
    return { kind: "CreateTableNode", table: this.transformNode(t.table), columns: this.transformNodeList(t.columns), constraints: this.transformNodeList(t.constraints), temporary: t.temporary, ifNotExists: t.ifNotExists, onCommit: t.onCommit, frontModifiers: this.transformNodeList(t.frontModifiers), endModifiers: this.transformNodeList(t.endModifiers) };
  }
  transformColumnDefinition(t) {
    return { kind: "ColumnDefinitionNode", column: this.transformNode(t.column), dataType: this.transformNode(t.dataType), references: this.transformNode(t.references), primaryKey: t.primaryKey, autoIncrement: t.autoIncrement, unique: t.unique, notNull: t.notNull, unsigned: t.unsigned, defaultTo: this.transformNode(t.defaultTo), check: this.transformNode(t.check), generated: this.transformNode(t.generated), frontModifiers: this.transformNodeList(t.frontModifiers), endModifiers: this.transformNodeList(t.endModifiers) };
  }
  transformAddColumn(t) {
    return { kind: "AddColumnNode", column: this.transformNode(t.column) };
  }
  transformDropTable(t) {
    return { kind: "DropTableNode", table: this.transformNode(t.table), ifExists: t.ifExists, cascade: t.cascade };
  }
  transformOrderBy(t) {
    return { kind: "OrderByNode", items: this.transformNodeList(t.items) };
  }
  transformOrderByItem(t) {
    return { kind: "OrderByItemNode", orderBy: this.transformNode(t.orderBy), direction: this.transformNode(t.direction) };
  }
  transformGroupBy(t) {
    return { kind: "GroupByNode", items: this.transformNodeList(t.items) };
  }
  transformGroupByItem(t) {
    return { kind: "GroupByItemNode", groupBy: this.transformNode(t.groupBy) };
  }
  transformUpdateQuery(t) {
    return { kind: "UpdateQueryNode", table: this.transformNode(t.table), from: this.transformNode(t.from), joins: this.transformNodeList(t.joins), where: this.transformNode(t.where), updates: this.transformNodeList(t.updates), returning: this.transformNode(t.returning), with: this.transformNode(t.with), explain: this.transformNode(t.explain) };
  }
  transformColumnUpdate(t) {
    return { kind: "ColumnUpdateNode", column: this.transformNode(t.column), value: this.transformNode(t.value) };
  }
  transformLimit(t) {
    return { kind: "LimitNode", limit: this.transformNode(t.limit) };
  }
  transformOffset(t) {
    return { kind: "OffsetNode", offset: this.transformNode(t.offset) };
  }
  transformOnConflict(t) {
    return { kind: "OnConflictNode", columns: this.transformNodeList(t.columns), constraint: this.transformNode(t.constraint), indexExpression: this.transformNode(t.indexExpression), indexWhere: this.transformNode(t.indexWhere), updates: this.transformNodeList(t.updates), updateWhere: this.transformNode(t.updateWhere), doNothing: t.doNothing };
  }
  transformOnDuplicateKey(t) {
    return { kind: "OnDuplicateKeyNode", updates: this.transformNodeList(t.updates) };
  }
  transformCreateIndex(t) {
    return { kind: "CreateIndexNode", name: this.transformNode(t.name), table: this.transformNode(t.table), columns: this.transformNodeList(t.columns), unique: t.unique, using: this.transformNode(t.using), ifNotExists: t.ifNotExists, where: this.transformNode(t.where) };
  }
  transformList(t) {
    return { kind: "ListNode", items: this.transformNodeList(t.items) };
  }
  transformDropIndex(t) {
    return { kind: "DropIndexNode", name: this.transformNode(t.name), table: this.transformNode(t.table), ifExists: t.ifExists, cascade: t.cascade };
  }
  transformPrimaryKeyConstraint(t) {
    return { kind: "PrimaryKeyConstraintNode", columns: this.transformNodeList(t.columns), name: this.transformNode(t.name) };
  }
  transformUniqueConstraint(t) {
    return { kind: "UniqueConstraintNode", columns: this.transformNodeList(t.columns), name: this.transformNode(t.name) };
  }
  transformForeignKeyConstraint(t) {
    return { kind: "ForeignKeyConstraintNode", columns: this.transformNodeList(t.columns), references: this.transformNode(t.references), name: this.transformNode(t.name), onDelete: t.onDelete, onUpdate: t.onUpdate };
  }
  transformSetOperation(t) {
    return { kind: "SetOperationNode", operator: t.operator, expression: this.transformNode(t.expression), all: t.all };
  }
  transformReferences(t) {
    return { kind: "ReferencesNode", table: this.transformNode(t.table), columns: this.transformNodeList(t.columns), onDelete: t.onDelete, onUpdate: t.onUpdate };
  }
  transformCheckConstraint(t) {
    return { kind: "CheckConstraintNode", expression: this.transformNode(t.expression), name: this.transformNode(t.name) };
  }
  transformWith(t) {
    return { kind: "WithNode", expressions: this.transformNodeList(t.expressions), recursive: t.recursive };
  }
  transformCommonTableExpression(t) {
    return { kind: "CommonTableExpressionNode", name: this.transformNode(t.name), expression: this.transformNode(t.expression) };
  }
  transformCommonTableExpressionName(t) {
    return { kind: "CommonTableExpressionNameNode", table: this.transformNode(t.table), columns: this.transformNodeList(t.columns) };
  }
  transformHaving(t) {
    return { kind: "HavingNode", having: this.transformNode(t.having) };
  }
  transformCreateSchema(t) {
    return { kind: "CreateSchemaNode", schema: this.transformNode(t.schema), ifNotExists: t.ifNotExists };
  }
  transformDropSchema(t) {
    return { kind: "DropSchemaNode", schema: this.transformNode(t.schema), ifExists: t.ifExists, cascade: t.cascade };
  }
  transformAlterTable(t) {
    return { kind: "AlterTableNode", table: this.transformNode(t.table), renameTo: this.transformNode(t.renameTo), setSchema: this.transformNode(t.setSchema), columnAlterations: this.transformNodeList(t.columnAlterations), addConstraint: this.transformNode(t.addConstraint), dropConstraint: this.transformNode(t.dropConstraint) };
  }
  transformDropColumn(t) {
    return { kind: "DropColumnNode", column: this.transformNode(t.column) };
  }
  transformRenameColumn(t) {
    return { kind: "RenameColumnNode", column: this.transformNode(t.column), renameTo: this.transformNode(t.renameTo) };
  }
  transformAlterColumn(t) {
    return { kind: "AlterColumnNode", column: this.transformNode(t.column), dataType: this.transformNode(t.dataType), dataTypeExpression: this.transformNode(t.dataTypeExpression), setDefault: this.transformNode(t.setDefault), dropDefault: t.dropDefault, setNotNull: t.setNotNull, dropNotNull: t.dropNotNull };
  }
  transformModifyColumn(t) {
    return { kind: "ModifyColumnNode", column: this.transformNode(t.column) };
  }
  transformAddConstraint(t) {
    return { kind: "AddConstraintNode", constraint: this.transformNode(t.constraint) };
  }
  transformDropConstraint(t) {
    return { kind: "DropConstraintNode", constraintName: this.transformNode(t.constraintName), ifExists: t.ifExists, modifier: t.modifier };
  }
  transformCreateView(t) {
    return { kind: "CreateViewNode", name: this.transformNode(t.name), temporary: t.temporary, orReplace: t.orReplace, ifNotExists: t.ifNotExists, materialized: t.materialized, columns: this.transformNodeList(t.columns), as: this.transformNode(t.as) };
  }
  transformDropView(t) {
    return { kind: "DropViewNode", name: this.transformNode(t.name), ifExists: t.ifExists, materialized: t.materialized, cascade: t.cascade };
  }
  transformGenerated(t) {
    return { kind: "GeneratedNode", byDefault: t.byDefault, always: t.always, identity: t.identity, stored: t.stored, expression: this.transformNode(t.expression) };
  }
  transformDefaultValue(t) {
    return { kind: "DefaultValueNode", defaultValue: this.transformNode(t.defaultValue) };
  }
  transformOn(t) {
    return { kind: "OnNode", on: this.transformNode(t.on) };
  }
  transformSelectModifier(t) {
    return { kind: "SelectModifierNode", modifier: t.modifier, rawModifier: this.transformNode(t.rawModifier) };
  }
  transformCreateType(t) {
    return { kind: "CreateTypeNode", name: this.transformNode(t.name), enum: this.transformNode(t.enum) };
  }
  transformDropType(t) {
    return { kind: "DropTypeNode", name: this.transformNode(t.name), ifExists: t.ifExists };
  }
  transformExplain(t) {
    return { kind: "ExplainNode", format: t.format, options: this.transformNode(t.options) };
  }
  transformSchemableIdentifier(t) {
    return { kind: "SchemableIdentifierNode", schema: this.transformNode(t.schema), identifier: this.transformNode(t.identifier) };
  }
  transformAggregateFunction(t) {
    return { kind: "AggregateFunctionNode", aggregated: this.transformNodeList(t.aggregated), distinct: t.distinct, filter: this.transformNode(t.filter), func: t.func, over: this.transformNode(t.over) };
  }
  transformOver(t) {
    return { kind: "OverNode", orderBy: this.transformNode(t.orderBy), partitionBy: this.transformNode(t.partitionBy) };
  }
  transformPartitionBy(t) {
    return { kind: "PartitionByNode", items: this.transformNodeList(t.items) };
  }
  transformPartitionByItem(t) {
    return { kind: "PartitionByItemNode", partitionBy: this.transformNode(t.partitionBy) };
  }
  transformBinaryOperation(t) {
    return { kind: "BinaryOperationNode", leftOperand: this.transformNode(t.leftOperand), operator: this.transformNode(t.operator), rightOperand: this.transformNode(t.rightOperand) };
  }
  transformUnaryOperation(t) {
    return { kind: "UnaryOperationNode", operator: this.transformNode(t.operator), operand: this.transformNode(t.operand) };
  }
  transformUsing(t) {
    return { kind: "UsingNode", tables: this.transformNodeList(t.tables) };
  }
  transformFunction(t) {
    return { kind: "FunctionNode", func: t.func, arguments: this.transformNodeList(t.arguments) };
  }
  transformCase(t) {
    return { kind: "CaseNode", value: this.transformNode(t.value), when: this.transformNodeList(t.when), else: this.transformNode(t.else), isStatement: t.isStatement };
  }
  transformWhen(t) {
    return { kind: "WhenNode", condition: this.transformNode(t.condition), result: this.transformNode(t.result) };
  }
  transformDataType(t) {
    return t;
  }
  transformSelectAll(t) {
    return t;
  }
  transformIdentifier(t) {
    return t;
  }
  transformValue(t) {
    return t;
  }
  transformPrimitiveValueList(t) {
    return t;
  }
  transformOperator(t) {
    return t;
  }
  transformDefaultInsertValue(t) {
    return t;
  }
};
var RF = d({ AlterTableNode: true, CreateIndexNode: true, CreateSchemaNode: true, CreateTableNode: true, CreateTypeNode: true, CreateViewNode: true, DeleteQueryNode: true, DropIndexNode: true, DropSchemaNode: true, DropTableNode: true, DropTypeNode: true, DropViewNode: true, InsertQueryNode: true, RawNode: true, SelectQueryNode: true, UpdateQueryNode: true });
var Lu = class extends yo {
  static {
    __name(this, "Lu");
  }
  #e;
  #t = /* @__PURE__ */ new Set();
  constructor(t) {
    super(), this.#e = t;
  }
  transformNodeImpl(t) {
    if (!this.#r(t))
      return super.transformNodeImpl(t);
    let r = this.#n(t);
    for (let i of r)
      this.#t.add(i);
    let n = super.transformNodeImpl(t);
    for (let i of r)
      this.#t.delete(i);
    return n;
  }
  transformSchemableIdentifier(t) {
    let r = super.transformSchemableIdentifier(t);
    return r.schema || !this.#t.has(t.identifier.name) ? r : { ...r, schema: M.create(this.#e) };
  }
  transformReferences(t) {
    let r = super.transformReferences(t);
    return r.table.table.schema ? r : { ...r, table: Rt.createWithSchema(this.#e, r.table.table.identifier.name) };
  }
  #r(t) {
    return t.kind in RF;
  }
  #n(t) {
    let r = /* @__PURE__ */ new Set();
    if ("name" in t && t.name && ct.is(t.name) && this.#o(t.name, r), "from" in t && t.from)
      for (let n of t.from.froms)
        this.#i(n, r);
    if ("into" in t && t.into && this.#i(t.into, r), "table" in t && t.table && this.#i(t.table, r), "joins" in t && t.joins)
      for (let n of t.joins)
        this.#i(n.table, r);
    return "with" in t && t.with && this.#s(t.with, r), r;
  }
  #i(t, r) {
    let n = Rt.is(t) ? t : ut.is(t) && Rt.is(t.node) ? t.node : null;
    n && this.#o(n.table, r);
  }
  #o(t, r) {
    this.#t.has(t.identifier.name) || r.add(t.identifier.name);
  }
  #s(t, r) {
    for (let n of t.expressions)
      r.delete(n.name.table.table.identifier.name);
  }
};
var St = class {
  static {
    __name(this, "St");
  }
  #e;
  constructor(t) {
    this.#e = new Lu(t);
  }
  transformQuery(t) {
    return this.#e.transformNode(t.node);
  }
  async transformResult(t) {
    return t.result;
  }
};
var go = class e8 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  selectFrom(t) {
    return new Xr({ queryId: H(), executor: this.#e.executor, queryNode: R.create(Jt(t), this.#e.withNode) });
  }
  insertInto(t) {
    return new _o({ queryId: H(), executor: this.#e.executor, queryNode: dt.create(we(t), this.#e.withNode) });
  }
  replaceInto(t) {
    return new _o({ queryId: H(), executor: this.#e.executor, queryNode: dt.create(we(t), this.#e.withNode, true) });
  }
  deleteFrom(t) {
    return new Ma({ queryId: H(), executor: this.#e.executor, queryNode: Tn.create(Jt(t), this.#e.withNode) });
  }
  updateTable(t) {
    return new ka({ queryId: H(), executor: this.#e.executor, queryNode: bi.create(In(t), this.#e.withNode) });
  }
  with(t, r) {
    let n = y_(t, r);
    return new e8({ ...this.#e, withNode: this.#e.withNode ? Fa.cloneWithExpression(this.#e.withNode, n) : Fa.create(n) });
  }
  withRecursive(t, r) {
    let n = y_(t, r);
    return new e8({ ...this.#e, withNode: this.#e.withNode ? Fa.cloneWithExpression(this.#e.withNode, n) : Fa.create(n, { recursive: true }) });
  }
  withPlugin(t) {
    return new e8({ ...this.#e, executor: this.#e.executor.withPlugin(t) });
  }
  withoutPlugins() {
    return new e8({ ...this.#e, executor: this.#e.executor.withoutPlugins() });
  }
  withSchema(t) {
    return new e8({ ...this.#e, executor: this.#e.executor.withPluginAtFront(new St(t)) });
  }
};
var La = class {
  static {
    __name(this, "La");
  }
  #e;
  #t;
  #r;
  constructor() {
    this.#e = new Promise((t, r) => {
      this.#r = r, this.#t = t;
    });
  }
  get promise() {
    return this.#e;
  }
  resolve = (t) => {
    this.#t && this.#t(t);
  };
  reject = (t) => {
    this.#r && this.#r(t);
  };
};
var r0 = /* @__PURE__ */ new Set();
function n0(e35) {
  r0.has(e35) || (r0.add(e35), console.log(e35));
}
__name(n0, "n0");
var qF = d([]);
var vo = class {
  static {
    __name(this, "vo");
  }
  #e;
  constructor(t = qF) {
    this.#e = t;
  }
  get plugins() {
    return this.#e;
  }
  transformQuery(t, r) {
    for (let n of this.#e) {
      let i = n.transformQuery({ node: t, queryId: r });
      if (i.kind === t.kind)
        t = i;
      else
        throw new Error(["KyselyPlugin.transformQuery must return a node", "of the same kind that was given to it.", `The plugin was given a ${t.kind}`, `but it returned a ${i.kind}`].join(" "));
    }
    return t;
  }
  async executeQuery(t, r) {
    return await this.provideConnection(async (n) => {
      let i = await n.executeQuery(t), o = await this.#t(i, r);
      return MF(i, o), o;
    });
  }
  async *stream(t, r, n) {
    let i = new La(), o = new La();
    this.provideConnection(async (a) => (i.resolve(a), await o.promise)).catch((a) => i.reject(a));
    let s = await i.promise;
    try {
      for await (let a of s.streamQuery(t, r))
        yield await this.#t(a, n);
    } finally {
      o.resolve();
    }
  }
  async #t(t, r) {
    for (let n of this.#e)
      t = await n.transformResult({ result: t, queryId: r });
    return t;
  }
};
function MF(e35, t) {
  let { numAffectedRows: r } = e35;
  r === void 0 && e35.numUpdatedOrDeletedRows === void 0 || r !== void 0 && t.numAffectedRows !== void 0 || n0("kysely:warning: outdated driver/plugin detected! QueryResult.numUpdatedOrDeletedRows is deprecated and will be removed in a future release.");
}
__name(MF, "MF");
var v_ = class e9 extends vo {
  static {
    __name(this, "e");
  }
  get adapter() {
    throw new Error("this query cannot be compiled to SQL");
  }
  compileQuery() {
    throw new Error("this query cannot be compiled to SQL");
  }
  provideConnection() {
    throw new Error("this query cannot be executed");
  }
  withConnectionProvider() {
    throw new Error("this query cannot have a connection provider");
  }
  withPlugin(t) {
    return new e9([...this.plugins, t]);
  }
  withPlugins(t) {
    return new e9([...this.plugins, ...t]);
  }
  withPluginAtFront(t) {
    return new e9([t, ...this.plugins]);
  }
  withoutPlugins() {
    return new e9([]);
  }
};
var xi = new v_();
function E_() {
  return new Xr({ queryId: H(), executor: xi, queryNode: R.create(Jt([])) });
}
__name(E_, "E_");
function ZS() {
  return new go({ executor: xi });
}
__name(ZS, "ZS");
function ju(e35, t) {
  return new Ta({ joinNode: Ke.create(e35, In(t)) });
}
__name(ju, "ju");
function i0() {
  return new Pa({ overNode: Oa.create() });
}
__name(i0, "i0");
var ja = d({ is(e35) {
  return e35.kind === "WhenNode";
}, create(e35) {
  return d({ kind: "WhenNode", condition: e35 });
}, cloneWithResult(e35, t) {
  return d({ ...e35, result: t });
} });
var rt = d({ is(e35) {
  return e35.kind === "CaseNode";
}, create(e35) {
  return d({ kind: "CaseNode", value: e35 });
}, cloneWithWhen(e35, t) {
  return d({ ...e35, when: d(e35.when ? [...e35.when, t] : [t]) });
}, cloneWithThen(e35, t) {
  return d({ ...e35, when: e35.when ? d([...e35.when.slice(0, -1), ja.cloneWithResult(e35.when[e35.when.length - 1], t)]) : void 0 });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
function Uu(e35, t, r) {
  if (!o_(t) && !he(t))
    throw new Error(`invalid binary operator ${JSON.stringify(t)}`);
  return FF(t, r) ? LF(e35, t, r) : Ca.create(Et(e35), N_(t), Pu(r));
}
__name(Uu, "Uu");
function DF(e35, t, r) {
  if (!o_(t) && !he(t))
    throw new Error(`invalid binary operator ${JSON.stringify(t)}`);
  return Ca.create(Et(e35), N_(t), Et(r));
}
__name(DF, "DF");
function kF(e35, t, r) {
  if (!s_(t) && !he(t))
    throw new Error(`invalid comparison operator ${JSON.stringify(t)}`);
  return Uu(e35, t, r);
}
__name(kF, "kF");
function ce(e35, t, r) {
  if (!s_(t) && !he(t))
    throw new Error(`invalid comparison operator ${JSON.stringify(t)}`);
  return DF(e35, t, r);
}
__name(ce, "ce");
function qe(e35) {
  return Bu("where", e35);
}
__name(qe, "qe");
function w_(e35) {
  return Bu("having", e35);
}
__name(w_, "w_");
function f_(e35) {
  return Bu("on", e35);
}
__name(f_, "f_");
function S_(e35) {
  return Bu("when", e35);
}
__name(S_, "S_");
function Bu(e35, t) {
  if (t.length === 3)
    return kF(t[0], t[1], t[2]);
  if (t.length === 1)
    return jF(e35, t[0]);
  throw o0(e35, t);
}
__name(Bu, "Bu");
function FF(e35, t) {
  return (e35 === "is" || e35 === "is not") && (Ou(t) || Cu(t));
}
__name(FF, "FF");
function LF(e35, t, r) {
  return Ca.create(Et(e35), N_(t), ke.createImmediate(r));
}
__name(LF, "LF");
function N_(e35) {
  if (Ie(e35) && FS.includes(e35))
    return lo.create(e35);
  if (he(e35))
    return e35.toOperationNode();
  throw new Error(`invalid operator ${JSON.stringify(e35)}`);
}
__name(N_, "N_");
function jF(e35, t) {
  if (me(t)) {
    if (e35 === "when")
      throw new Error("when method doesn't accept a callback as an argument");
    return UF[e35](t);
  } else if (he(t)) {
    let r = t.toOperationNode();
    if (Oe.is(r) || Ca.is(r) || Iu.is(r) || Cn.is(r) || rt.is(r))
      return r;
  } else if (e35 === "when")
    return ke.create(t);
  throw o0(e35, t);
}
__name(jF, "jF");
function o0(e35, t) {
  return new Error(`invalid arguments passed to a '${e35}' method: ${JSON.stringify(t)}`);
}
__name(o0, "o0");
var UF = d({ where(e35) {
  let t = E_(), r = tt(), i = e35(Object.assign(t, r)).toOperationNode();
  if (R.is(i)) {
    if (!i.where)
      throw new Error("no `where` methods called inside a group callback");
    return Cn.create(i.where.where);
  } else
    return i;
}, having(e35) {
  let t = E_(), r = tt(), i = e35(Object.assign(t, r)).toOperationNode();
  if (R.is(i)) {
    if (!i.having)
      throw new Error("no `having` methods called inside a group callback");
    return Cn.create(i.having.having);
  } else
    return i;
}, on(e35) {
  let t = ju("InnerJoin", "table"), r = tt(), i = e35(Object.assign(t, r)).toOperationNode();
  if (Ke.is(i)) {
    if (!i.on)
      throw new Error("no `on` methods called inside a group callback");
    return Cn.create(i.on.on);
  } else
    return i;
} });
function We(e35, t) {
  if (t.length === 3)
    return WF(e35, t[0], t[1], t[2]);
  if (t.length === 2)
    return BF(e35, t[0], t[1]);
  throw new Error("not implemented");
}
__name(We, "We");
function BF(e35, t, r) {
  return r(ju(e35, t)).toOperationNode();
}
__name(BF, "BF");
function WF(e35, t, r, n) {
  return Ke.createWithOn(e35, In(t), ce(r, "=", n));
}
__name(WF, "WF");
var s0 = d({ is(e35) {
  return e35.kind === "OffsetNode";
}, create(e35) {
  return d({ kind: "OffsetNode", offset: ke.create(e35) });
} });
var a0 = d({ is(e35) {
  return e35.kind === "GroupByItemNode";
}, create(e35) {
  return d({ kind: "GroupByItemNode", groupBy: e35 });
} });
function c0(e35) {
  return e35 = me(e35) ? e35(tt()) : e35, Kr(e35).map(a0.create);
}
__name(c0, "c0");
var Wu = d({ is(e35) {
  return e35.kind === "SetOperationNode";
}, create(e35, t, r) {
  return d({ kind: "SetOperationNode", operator: e35, expression: t, all: r });
} });
function Ci(e35, t, r) {
  return Wu.create(e35, t.toOperationNode(), r);
}
__name(Ci, "Ci");
var Xr = class e10 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  get expressionType() {
  }
  where(...t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, qe(t)) });
  }
  whereRef(t, r, n) {
    return new e10({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, ce(t, r, n)) });
  }
  orWhere(...t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, qe(t)) });
  }
  orWhereRef(t, r, n) {
    return new e10({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, ce(t, r, n)) });
  }
  whereExists(t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, Ee(t)) });
  }
  whereNotExists(t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithWhere(this.#e.queryNode, _e(t)) });
  }
  orWhereExists(t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, Ee(t)) });
  }
  orWhereNotExists(t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithOrWhere(this.#e.queryNode, _e(t)) });
  }
  having(...t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithHaving(this.#e.queryNode, w_(t)) });
  }
  havingRef(t, r, n) {
    return new e10({ ...this.#e, queryNode: R.cloneWithHaving(this.#e.queryNode, ce(t, r, n)) });
  }
  orHaving(...t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithOrHaving(this.#e.queryNode, w_(t)) });
  }
  orHavingRef(t, r, n) {
    return new e10({ ...this.#e, queryNode: R.cloneWithOrHaving(this.#e.queryNode, ce(t, r, n)) });
  }
  havingExists(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithHaving(this.#e.queryNode, Ee(t)) });
  }
  havingNotExist(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithHaving(this.#e.queryNode, _e(t)) });
  }
  havingNotExists(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithHaving(this.#e.queryNode, _e(t)) });
  }
  orHavingExists(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithOrHaving(this.#e.queryNode, Ee(t)) });
  }
  orHavingNotExists(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithOrHaving(this.#e.queryNode, _e(t)) });
  }
  select(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithSelections(this.#e.queryNode, Jr(t)) });
  }
  distinctOn(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithDistinctOn(this.#e.queryNode, Kr(t)) });
  }
  modifyFront(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithFrontModifier(this.#e.queryNode, fr.createWithExpression(t.toOperationNode())) });
  }
  modifyEnd(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithEndModifier(this.#e.queryNode, fr.createWithExpression(t.toOperationNode())) });
  }
  distinct() {
    return new e10({ ...this.#e, queryNode: R.cloneWithFrontModifier(this.#e.queryNode, fr.create("Distinct")) });
  }
  forUpdate() {
    return new e10({ ...this.#e, queryNode: R.cloneWithEndModifier(this.#e.queryNode, fr.create("ForUpdate")) });
  }
  forShare() {
    return new e10({ ...this.#e, queryNode: R.cloneWithEndModifier(this.#e.queryNode, fr.create("ForShare")) });
  }
  forKeyShare() {
    return new e10({ ...this.#e, queryNode: R.cloneWithEndModifier(this.#e.queryNode, fr.create("ForKeyShare")) });
  }
  forNoKeyUpdate() {
    return new e10({ ...this.#e, queryNode: R.cloneWithEndModifier(this.#e.queryNode, fr.create("ForNoKeyUpdate")) });
  }
  skipLocked() {
    return new e10({ ...this.#e, queryNode: R.cloneWithEndModifier(this.#e.queryNode, fr.create("SkipLocked")) });
  }
  noWait() {
    return new e10({ ...this.#e, queryNode: R.cloneWithEndModifier(this.#e.queryNode, fr.create("NoWait")) });
  }
  selectAll(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithSelections(this.#e.queryNode, mr(t)) });
  }
  innerJoin(...t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("InnerJoin", t)) });
  }
  leftJoin(...t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("LeftJoin", t)) });
  }
  rightJoin(...t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("RightJoin", t)) });
  }
  fullJoin(...t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("FullJoin", t)) });
  }
  innerJoinLateral(...t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("LateralInnerJoin", t)) });
  }
  leftJoinLateral(...t) {
    return new e10({ ...this.#e, queryNode: C.cloneWithJoin(this.#e.queryNode, We("LateralLeftJoin", t)) });
  }
  orderBy(t, r) {
    return new e10({ ...this.#e, queryNode: R.cloneWithOrderByItem(this.#e.queryNode, On(t, r)) });
  }
  groupBy(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithGroupByItems(this.#e.queryNode, c0(t)) });
  }
  limit(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithLimit(this.#e.queryNode, Fu.create(t)) });
  }
  offset(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithOffset(this.#e.queryNode, s0.create(t)) });
  }
  union(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithSetOperation(this.#e.queryNode, Ci("union", t, false)) });
  }
  unionAll(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithSetOperation(this.#e.queryNode, Ci("union", t, true)) });
  }
  intersect(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithSetOperation(this.#e.queryNode, Ci("intersect", t, false)) });
  }
  intersectAll(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithSetOperation(this.#e.queryNode, Ci("intersect", t, true)) });
  }
  except(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithSetOperation(this.#e.queryNode, Ci("except", t, false)) });
  }
  exceptAll(t) {
    return new e10({ ...this.#e, queryNode: R.cloneWithSetOperation(this.#e.queryNode, Ci("except", t, true)) });
  }
  as(t) {
    return new b_(this, t);
  }
  clearSelect() {
    return new e10({ ...this.#e, queryNode: R.cloneWithoutSelections(this.#e.queryNode) });
  }
  clearWhere() {
    return new e10({ ...this.#e, queryNode: C.cloneWithoutWhere(this.#e.queryNode) });
  }
  clearLimit() {
    return new e10({ ...this.#e, queryNode: R.cloneWithoutLimit(this.#e.queryNode) });
  }
  clearOffset() {
    return new e10({ ...this.#e, queryNode: R.cloneWithoutOffset(this.#e.queryNode) });
  }
  clearOrderBy() {
    return new e10({ ...this.#e, queryNode: R.cloneWithoutOrderBy(this.#e.queryNode) });
  }
  $call(t) {
    return t(this);
  }
  call(t) {
    return this.$call(t);
  }
  $if(t, r) {
    return t ? r(this) : new e10({ ...this.#e });
  }
  if(t, r) {
    return this.$if(t, r);
  }
  $castTo() {
    return new e10(this.#e);
  }
  castTo() {
    return this.$castTo();
  }
  $narrowType() {
    return new e10(this.#e);
  }
  $assertType() {
    return new e10(this.#e);
  }
  assertType() {
    return new e10(this.#e);
  }
  withPlugin(t) {
    return new e10({ ...this.#e, executor: this.#e.executor.withPlugin(t) });
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.queryNode, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    let t = this.compile();
    return (await this.#e.executor.executeQuery(t, this.#e.queryId)).rows;
  }
  async executeTakeFirst() {
    let [t] = await this.execute();
    return t;
  }
  async executeTakeFirstOrThrow(t = hr) {
    let r = await this.executeTakeFirst();
    if (r === void 0)
      throw Pn(t) ? new t(this.toOperationNode()) : t(this.toOperationNode());
    return r;
  }
  async *stream(t = 100) {
    let r = this.compile(), n = this.#e.executor.stream(r, t, this.#e.queryId);
    for await (let i of n)
      yield* i.rows;
  }
  async explain(t, r) {
    return await new e10({ ...this.#e, queryNode: C.cloneWithExplain(this.#e.queryNode, t, r) }).execute();
  }
};
O(Xr, "don't await SelectQueryBuilder instances directly. To execute the query you need to call `execute` or `executeTakeFirst`.");
var b_ = class {
  static {
    __name(this, "b_");
  }
  #e;
  #t;
  constructor(t, r) {
    this.#e = t, this.#t = r;
  }
  get expression() {
    return this.#e;
  }
  get alias() {
    return this.#t;
  }
  toOperationNode() {
    return ut.create(this.#e.toOperationNode(), M.create(this.#t));
  }
};
var Ce = class e11 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  get expressionType() {
  }
  as(t) {
    return new x_(this, t);
  }
  $castTo() {
    return new e11(this.#e);
  }
  toOperationNode() {
    return this.#e;
  }
};
var x_ = class {
  static {
    __name(this, "x_");
  }
  #e;
  #t;
  constructor(t, r) {
    this.#e = t, this.#t = r;
  }
  get expression() {
    return this.#e;
  }
  get alias() {
    return this.#t;
  }
  toOperationNode() {
    return ut.create(this.#e.toOperationNode(), he(this.#t) ? this.#t.toOperationNode() : M.create(this.#t));
  }
};
var lt = d({ is(e35) {
  return e35.kind === "AggregateFunctionNode";
}, create(e35, t = []) {
  return d({ kind: "AggregateFunctionNode", func: e35, aggregated: t });
}, cloneWithDistinct(e35) {
  return d({ ...e35, distinct: true });
}, cloneWithFilter(e35, t) {
  return d({ ...e35, filter: e35.filter ? Re.cloneWithOperation(e35.filter, "And", t) : Re.create(t) });
}, cloneWithOrFilter(e35, t) {
  return d({ ...e35, filter: e35.filter ? Re.cloneWithOperation(e35.filter, "Or", t) : Re.create(t) });
}, cloneWithOver(e35, t) {
  return d({ ...e35, over: t });
} });
var u0 = d({ is(e35) {
  return e35.kind === "FunctionNode";
}, create(e35, t) {
  return d({ kind: "FunctionNode", func: e35, arguments: t });
} });
var Eo = class e12 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  get expressionType() {
  }
  as(t) {
    return new C_(this, t);
  }
  distinct() {
    return new e12({ ...this.#e, aggregateFunctionNode: lt.cloneWithDistinct(this.#e.aggregateFunctionNode) });
  }
  filterWhere(...t) {
    return new e12({ ...this.#e, aggregateFunctionNode: lt.cloneWithFilter(this.#e.aggregateFunctionNode, qe(t)) });
  }
  filterWhereExists(t) {
    return new e12({ ...this.#e, aggregateFunctionNode: lt.cloneWithFilter(this.#e.aggregateFunctionNode, Ee(t)) });
  }
  filterWhereNotExists(t) {
    return new e12({ ...this.#e, aggregateFunctionNode: lt.cloneWithFilter(this.#e.aggregateFunctionNode, _e(t)) });
  }
  filterWhereRef(t, r, n) {
    return new e12({ ...this.#e, aggregateFunctionNode: lt.cloneWithFilter(this.#e.aggregateFunctionNode, ce(t, r, n)) });
  }
  orFilterWhere(...t) {
    return new e12({ ...this.#e, aggregateFunctionNode: lt.cloneWithOrFilter(this.#e.aggregateFunctionNode, qe(t)) });
  }
  orFilterWhereExists(t) {
    return new e12({ ...this.#e, aggregateFunctionNode: lt.cloneWithOrFilter(this.#e.aggregateFunctionNode, Ee(t)) });
  }
  orFilterWhereNotExists(t) {
    return new e12({ ...this.#e, aggregateFunctionNode: lt.cloneWithOrFilter(this.#e.aggregateFunctionNode, _e(t)) });
  }
  orFilterWhereRef(t, r, n) {
    return new e12({ ...this.#e, aggregateFunctionNode: lt.cloneWithOrFilter(this.#e.aggregateFunctionNode, ce(t, r, n)) });
  }
  over(t) {
    let r = i0();
    return new e12({ ...this.#e, aggregateFunctionNode: lt.cloneWithOver(this.#e.aggregateFunctionNode, (t ? t(r) : r).toOperationNode()) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.aggregateFunctionNode;
  }
};
O(Eo, "don't await AggregateFunctionBuilder instances. They are never executed directly and are always just a part of a query.");
var C_ = class {
  static {
    __name(this, "C_");
  }
  #e;
  #t;
  constructor(t, r) {
    this.#e = t, this.#t = r;
  }
  get expression() {
    return this.#e;
  }
  get alias() {
    return this.#t;
  }
  toOperationNode() {
    return ut.create(this.#e.toOperationNode(), M.create(this.#t));
  }
};
function Vu() {
  let e35 = /* @__PURE__ */ __name((r, n) => new Ce(u0.create(r, Kr(n))), "e"), t = /* @__PURE__ */ __name((r, n) => new Eo({ aggregateFunctionNode: lt.create(r, n ? Kr(n) : void 0) }), "t");
  return Object.assign(e35, { agg: t, avg(r) {
    return t("avg", [r]);
  }, coalesce(r, ...n) {
    return e35("coalesce", [r, ...n]);
  }, count(r) {
    return t("count", [r]);
  }, countAll(r) {
    return new Eo({ aggregateFunctionNode: lt.create("count", mr(r)) });
  }, max(r) {
    return t("max", [r]);
  }, min(r) {
    return t("min", [r]);
  }, sum(r) {
    return t("sum", [r]);
  } });
}
__name(Vu, "Vu");
var wo = class {
  static {
    __name(this, "wo");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  when(...t) {
    return new $u({ ...this.#e, node: rt.cloneWithWhen(this.#e.node, ja.create(S_(t))) });
  }
};
var $u = class {
  static {
    __name(this, "$u");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  then(t) {
    return new O_({ ...this.#e, node: rt.cloneWithThen(this.#e.node, wt(t)) });
  }
};
var O_ = class {
  static {
    __name(this, "O_");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  when(...t) {
    return new $u({ ...this.#e, node: rt.cloneWithWhen(this.#e.node, ja.create(S_(t))) });
  }
  else(t) {
    return new A_({ ...this.#e, node: rt.cloneWith(this.#e.node, { else: wt(t) }) });
  }
  end() {
    return new Ce(rt.cloneWith(this.#e.node, { isStatement: false }));
  }
  endCase() {
    return new Ce(rt.cloneWith(this.#e.node, { isStatement: true }));
  }
};
var A_ = class {
  static {
    __name(this, "A_");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  end() {
    return new Ce(rt.cloneWith(this.#e.node, { isStatement: false }));
  }
  endCase() {
    return new Ce(rt.cloneWith(this.#e.node, { isStatement: true }));
  }
};
function d0(e35 = xi) {
  function t(r, n) {
    return new Ce(Ru(r, n));
  }
  __name(t, "t");
  return { get fn() {
    return Vu();
  }, selectFrom(r) {
    return new Xr({ queryId: H(), executor: e35, queryNode: R.create(Jt(r)) });
  }, case(r) {
    return new wo({ node: rt.create(bn(r) ? void 0 : Et(r)) });
  }, ref(r) {
    return new Ce(Qr(r));
  }, val(r) {
    return new Ce(Pu(r));
  }, cmpr(r, n, i) {
    return new Ce(Uu(r, n, i));
  }, bxp(r, n, i) {
    return new Ce(Uu(r, n, i));
  }, unary: t, not(r) {
    return t("not", r);
  }, exists(r) {
    return t("exists", r);
  }, neg(r) {
    return t("-", r);
  }, and(r) {
    if (r.length === 0)
      return new Ce(ke.createImmediate(true));
    if (r.length === 1)
      return new Ce(r[0].toOperationNode());
    let n = Hr.create(r[0].toOperationNode(), r[1].toOperationNode());
    for (let i = 2; i < r.length; ++i)
      n = Hr.create(n, r[i].toOperationNode());
    return new Ce(Cn.create(n));
  }, or(r) {
    if (r.length === 0)
      return new Ce(ke.createImmediate(false));
    if (r.length === 1)
      return new Ce(r[0].toOperationNode());
    let n = Gr.create(r[0].toOperationNode(), r[1].toOperationNode());
    for (let i = 2; i < r.length; ++i)
      n = Gr.create(n, r[i].toOperationNode());
    return new Ce(Cn.create(n));
  }, withSchema(r) {
    return d0(e35.withPluginAtFront(new St(r)));
  } };
}
__name(d0, "d0");
function tt(e35) {
  return d0();
}
__name(tt, "tt");
function An(e35) {
  if (he(e35))
    return e35.toOperationNode();
  if (me(e35))
    return e35(tt()).toOperationNode();
  throw new Error(`invalid expression: ${JSON.stringify(e35)}`);
}
__name(An, "An");
function Mu(e35) {
  if (he(e35))
    return e35.toOperationNode();
  if (me(e35))
    return e35(tt()).toOperationNode();
  throw new Error(`invalid aliased expression: ${JSON.stringify(e35)}`);
}
__name(Mu, "Mu");
function Si(e35) {
  return qS(e35) || MS(e35) || me(e35);
}
__name(Si, "Si");
function Jt(e35) {
  return lr(e35) ? e35.map((t) => In(t)) : [In(e35)];
}
__name(Jt, "Jt");
function In(e35) {
  return Ie(e35) ? VF(e35) : Mu(e35);
}
__name(In, "In");
function VF(e35) {
  let t = " as ";
  if (e35.includes(t)) {
    let [r, n] = e35.split(t).map(l0);
    return ut.create(we(r), M.create(n));
  } else
    return we(e35);
}
__name(VF, "VF");
function we(e35) {
  let t = ".";
  if (e35.includes(t)) {
    let [r, n] = e35.split(t).map(l0);
    return Rt.createWithSchema(r, n);
  } else
    return Rt.create(e35);
}
__name(we, "we");
function l0(e35) {
  return e35.trim();
}
__name(l0, "l0");
var T_ = d({ is(e35) {
  return e35.kind === "AddColumnNode";
}, create(e35) {
  return d({ kind: "AddColumnNode", column: e35 });
} });
var Zr = d({ is(e35) {
  return e35.kind === "AlterColumnNode";
}, create(e35) {
  return d({ kind: "AlterColumnNode", column: W.create(e35) });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var ue = d({ is(e35) {
  return e35.kind === "ColumnDefinitionNode";
}, create(e35, t) {
  return d({ kind: "ColumnDefinitionNode", column: W.create(e35), dataType: t });
}, cloneWithFrontModifier(e35, t) {
  return d({ ...e35, frontModifiers: e35.frontModifiers ? d([...e35.frontModifiers, t]) : [t] });
}, cloneWithEndModifier(e35, t) {
  return d({ ...e35, endModifiers: e35.endModifiers ? d([...e35.endModifiers, t]) : [t] });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var P_ = d({ is(e35) {
  return e35.kind === "DropColumnNode";
}, create(e35) {
  return d({ kind: "DropColumnNode", column: W.create(e35) });
} });
var I_ = d({ is(e35) {
  return e35.kind === "RenameColumnNode";
}, create(e35, t) {
  return d({ kind: "RenameColumnNode", column: W.create(e35), renameTo: W.create(t) });
} });
var So = d({ is(e35) {
  return e35.kind === "CheckConstraintNode";
}, create(e35, t) {
  return d({ kind: "CheckConstraintNode", expression: e35, name: t ? M.create(t) : void 0 });
} });
var p0 = ["no action", "restrict", "cascade", "set null", "set default"];
var No = d({ is(e35) {
  return e35.kind === "ReferencesNode";
}, create(e35, t) {
  return d({ kind: "ReferencesNode", table: e35, columns: d([...t]) });
}, cloneWithOnDelete(e35, t) {
  return d({ ...e35, onDelete: t });
}, cloneWithOnUpdate(e35, t) {
  return d({ ...e35, onUpdate: t });
} });
function zu(e35) {
  return he(e35) ? e35.toOperationNode() : ke.createImmediate(e35);
}
__name(zu, "zu");
var Ua = d({ is(e35) {
  return e35.kind === "GeneratedNode";
}, create(e35) {
  return d({ kind: "GeneratedNode", ...e35 });
}, createWithExpression(e35) {
  return d({ kind: "GeneratedNode", always: true, expression: e35 });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var f0 = d({ is(e35) {
  return e35.kind === "DefaultValueNode";
}, create(e35) {
  return d({ kind: "DefaultValueNode", defaultValue: e35 });
} });
function bo(e35) {
  if (p0.includes(e35))
    return e35;
  throw new Error(`invalid OnModifyForeignAction ${e35}`);
}
__name(bo, "bo");
var _r = class e13 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  autoIncrement() {
    return new e13(ue.cloneWith(this.#e, { autoIncrement: true }));
  }
  primaryKey() {
    return new e13(ue.cloneWith(this.#e, { primaryKey: true }));
  }
  references(t) {
    let r = Qr(t);
    if (!wi.is(r) || po.is(r.column))
      throw new Error(`invalid call references('${t}'). The reference must have format table.column or schema.table.column`);
    return new e13(ue.cloneWith(this.#e, { references: No.create(r.table, [r.column]) }));
  }
  onDelete(t) {
    if (!this.#e.references)
      throw new Error("on delete constraint can only be added for foreign keys");
    return new e13(ue.cloneWith(this.#e, { references: No.cloneWithOnDelete(this.#e.references, bo(t)) }));
  }
  onUpdate(t) {
    if (!this.#e.references)
      throw new Error("on update constraint can only be added for foreign keys");
    return new e13(ue.cloneWith(this.#e, { references: No.cloneWithOnUpdate(this.#e.references, bo(t)) }));
  }
  unique() {
    return new e13(ue.cloneWith(this.#e, { unique: true }));
  }
  notNull() {
    return new e13(ue.cloneWith(this.#e, { notNull: true }));
  }
  unsigned() {
    return new e13(ue.cloneWith(this.#e, { unsigned: true }));
  }
  defaultTo(t) {
    return new e13(ue.cloneWith(this.#e, { defaultTo: f0.create(zu(t)) }));
  }
  check(t) {
    return new e13(ue.cloneWith(this.#e, { check: So.create(t.toOperationNode()) }));
  }
  generatedAlwaysAs(t) {
    return new e13(ue.cloneWith(this.#e, { generated: Ua.createWithExpression(t.toOperationNode()) }));
  }
  generatedAlwaysAsIdentity() {
    return new e13(ue.cloneWith(this.#e, { generated: Ua.create({ identity: true, always: true }) }));
  }
  generatedByDefaultAsIdentity() {
    return new e13(ue.cloneWith(this.#e, { generated: Ua.create({ identity: true, byDefault: true }) }));
  }
  stored() {
    if (!this.#e.generated)
      throw new Error("stored() can only be called after generatedAlwaysAs");
    return new e13(ue.cloneWith(this.#e, { generated: Ua.cloneWith(this.#e.generated, { stored: true }) }));
  }
  modifyFront(t) {
    return new e13(ue.cloneWithFrontModifier(this.#e, t.toOperationNode()));
  }
  modifyEnd(t) {
    return new e13(ue.cloneWithEndModifier(this.#e, t.toOperationNode()));
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e;
  }
};
O(_r, "don't await ColumnDefinitionBuilder instances directly.");
var R_ = d({ is(e35) {
  return e35.kind === "ModifyColumnNode";
}, create(e35) {
  return d({ kind: "ModifyColumnNode", column: e35 });
} });
var m0 = d({ is(e35) {
  return e35.kind === "DataTypeNode";
}, create(e35) {
  return d({ kind: "DataTypeNode", dataType: e35 });
} });
function en(e35) {
  return he(e35) ? e35.toOperationNode() : m0.create(e35);
}
__name(en, "en");
var Oi = d({ is(e35) {
  return e35.kind === "ForeignKeyConstraintNode";
}, create(e35, t, r, n) {
  return d({ kind: "ForeignKeyConstraintNode", columns: e35, references: No.create(t, r), name: n ? M.create(n) : void 0 });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var Ai = class e14 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  onDelete(t) {
    return new e14(Oi.cloneWith(this.#e, { onDelete: bo(t) }));
  }
  onUpdate(t) {
    return new e14(Oi.cloneWith(this.#e, { onUpdate: bo(t) }));
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e;
  }
};
O(Ai, "don't await ForeignKeyConstraintBuilder instances directly.");
var Ba = d({ is(e35) {
  return e35.kind === "AddConstraintNode";
}, create(e35) {
  return d({ kind: "AddConstraintNode", constraint: e35 });
} });
var Hu = d({ is(e35) {
  return e35.kind === "UniqueConstraintNode";
}, create(e35, t) {
  return d({ kind: "UniqueConstraintNode", columns: d(e35.map(W.create)), name: t ? M.create(t) : void 0 });
} });
var xo = d({ is(e35) {
  return e35.kind === "DropConstraintNode";
}, create(e35) {
  return d({ kind: "DropConstraintNode", constraintName: M.create(e35) });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var Pi = class {
  static {
    __name(this, "Pi");
  }
  alterColumnNode;
  constructor(t) {
    this.alterColumnNode = t;
  }
  setDataType(t) {
    return new Ti(Zr.cloneWith(this.alterColumnNode, { dataType: en(t) }));
  }
  setDefault(t) {
    return new Ti(Zr.cloneWith(this.alterColumnNode, { setDefault: zu(t) }));
  }
  dropDefault() {
    return new Ti(Zr.cloneWith(this.alterColumnNode, { dropDefault: true }));
  }
  setNotNull() {
    return new Ti(Zr.cloneWith(this.alterColumnNode, { setNotNull: true }));
  }
  dropNotNull() {
    return new Ti(Zr.cloneWith(this.alterColumnNode, { dropNotNull: true }));
  }
  $call(t) {
    return t(this);
  }
};
var Ti = class extends Pi {
  static {
    __name(this, "Ti");
  }
  toOperationNode() {
    return this.alterColumnNode;
  }
};
var Rn = class {
  static {
    __name(this, "Rn");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Rn, "don't await AlterTableExecutor instances directly. To execute the query you need to call `execute`");
var Wa = class e15 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  onDelete(t) {
    return new e15({ ...this.#e, constraintBuilder: this.#e.constraintBuilder.onDelete(t) });
  }
  onUpdate(t) {
    return new e15({ ...this.#e, constraintBuilder: this.#e.constraintBuilder.onUpdate(t) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(ae.cloneWithTableProps(this.#e.node, { addConstraint: Ba.create(this.#e.constraintBuilder.toOperationNode()) }), this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Wa, "don't await AlterTableAddForeignKeyConstraintBuilder instances directly. To execute the query you need to call `execute`");
var Va = class e16 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  ifExists() {
    return new e16({ ...this.#e, node: ae.cloneWithTableProps(this.#e.node, { dropConstraint: xo.cloneWith(this.#e.node.dropConstraint, { ifExists: true }) }) });
  }
  cascade() {
    return new e16({ ...this.#e, node: ae.cloneWithTableProps(this.#e.node, { dropConstraint: xo.cloneWith(this.#e.node.dropConstraint, { modifier: "cascade" }) }) });
  }
  restrict() {
    return new e16({ ...this.#e, node: ae.cloneWithTableProps(this.#e.node, { dropConstraint: xo.cloneWith(this.#e.node.dropConstraint, { modifier: "restrict" }) }) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Va, "don't await AlterTableDropConstraintBuilder instances directly. To execute the query you need to call `execute`");
var $a = class {
  static {
    __name(this, "$a");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  renameTo(t) {
    return new Rn({ ...this.#e, node: ae.cloneWithTableProps(this.#e.node, { renameTo: we(t) }) });
  }
  setSchema(t) {
    return new Rn({ ...this.#e, node: ae.cloneWithTableProps(this.#e.node, { setSchema: M.create(t) }) });
  }
  alterColumn(t, r) {
    let n = r(new Pi(Zr.create(t)));
    return new qn({ ...this.#e, node: ae.cloneWithColumnAlteration(this.#e.node, n.toOperationNode()) });
  }
  dropColumn(t) {
    return new qn({ ...this.#e, node: ae.cloneWithColumnAlteration(this.#e.node, P_.create(t)) });
  }
  renameColumn(t, r) {
    return new qn({ ...this.#e, node: ae.cloneWithColumnAlteration(this.#e.node, I_.create(t, r)) });
  }
  addColumn(t, r, n = xn) {
    let i = n(new _r(ue.create(t, en(r))));
    return new qn({ ...this.#e, node: ae.cloneWithColumnAlteration(this.#e.node, T_.create(i.toOperationNode())) });
  }
  modifyColumn(t, r, n = xn) {
    let i = n(new _r(ue.create(t, en(r))));
    return new qn({ ...this.#e, node: ae.cloneWithColumnAlteration(this.#e.node, R_.create(i.toOperationNode())) });
  }
  addUniqueConstraint(t, r) {
    return new Rn({ ...this.#e, node: ae.cloneWithTableProps(this.#e.node, { addConstraint: Ba.create(Hu.create(r, t)) }) });
  }
  addCheckConstraint(t, r) {
    return new Rn({ ...this.#e, node: ae.cloneWithTableProps(this.#e.node, { addConstraint: Ba.create(So.create(r.toOperationNode(), t)) }) });
  }
  addForeignKeyConstraint(t, r, n, i) {
    return new Wa({ ...this.#e, constraintBuilder: new Ai(Oi.create(r.map(W.create), we(n), i.map(W.create), t)) });
  }
  dropConstraint(t) {
    return new Va({ ...this.#e, node: ae.cloneWithTableProps(this.#e.node, { dropConstraint: xo.create(t) }) });
  }
  $call(t) {
    return t(this);
  }
  call(t) {
    return this.$call(t);
  }
};
var qn = class e17 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  alterColumn(t, r) {
    let n = r(new Pi(Zr.create(t)));
    return new e17({ ...this.#e, node: ae.cloneWithColumnAlteration(this.#e.node, n.toOperationNode()) });
  }
  dropColumn(t) {
    return new e17({ ...this.#e, node: ae.cloneWithColumnAlteration(this.#e.node, P_.create(t)) });
  }
  renameColumn(t, r) {
    return new e17({ ...this.#e, node: ae.cloneWithColumnAlteration(this.#e.node, I_.create(t, r)) });
  }
  addColumn(t, r, n = xn) {
    let i = n(new _r(ue.create(t, en(r))));
    return new e17({ ...this.#e, node: ae.cloneWithColumnAlteration(this.#e.node, T_.create(i.toOperationNode())) });
  }
  modifyColumn(t, r, n = xn) {
    let i = n(new _r(ue.create(t, en(r))));
    return new e17({ ...this.#e, node: ae.cloneWithColumnAlteration(this.#e.node, R_.create(i.toOperationNode())) });
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O($a, "don't await AlterTableBuilder instances");
O(Pi, "don't await AlterColumnBuilder instances");
O(qn, "don't await AlterTableColumnAlteringBuilder instances directly. To execute the query you need to call `execute`");
var Co = class extends yo {
  static {
    __name(this, "Co");
  }
  transformValue(t) {
    return { ...super.transformValue(t), immediate: true };
  }
};
var za = class e18 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  ifNotExists() {
    return new e18({ ...this.#e, node: pr.cloneWith(this.#e.node, { ifNotExists: true }) });
  }
  unique() {
    return new e18({ ...this.#e, node: pr.cloneWith(this.#e.node, { unique: true }) });
  }
  on(t) {
    return new e18({ ...this.#e, node: pr.cloneWith(this.#e.node, { table: we(t) }) });
  }
  column(t) {
    return new e18({ ...this.#e, node: pr.cloneWithColumns(this.#e.node, [u_(t)]) });
  }
  columns(t) {
    return new e18({ ...this.#e, node: pr.cloneWithColumns(this.#e.node, t.map(u_)) });
  }
  expression(t) {
    return new e18({ ...this.#e, node: pr.cloneWithColumns(this.#e.node, [t.toOperationNode()]) });
  }
  using(t) {
    return new e18({ ...this.#e, node: pr.cloneWith(this.#e.node, { using: Oe.createWithSql(t) }) });
  }
  where(...t) {
    let r = new Co();
    return new e18({ ...this.#e, node: C.cloneWithWhere(this.#e.node, r.transformNode(qe(t))) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(za, "don't await CreateIndexBuilder instances directly. To execute the query you need to call `execute`");
var Ha = class e19 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  ifNotExists() {
    return new e19({ ...this.#e, node: Au.cloneWith(this.#e.node, { ifNotExists: true }) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Ha, "don't await CreateSchemaBuilder instances directly. To execute the query you need to call `execute`");
var h0 = d({ is(e35) {
  return e35.kind === "PrimaryKeyConstraintNode";
}, create(e35, t) {
  return d({ kind: "PrimaryKeyConstraintNode", columns: d(e35.map(W.create)), name: t ? M.create(t) : void 0 });
} });
function _0(e35) {
  if (RS.includes(e35))
    return e35;
  throw new Error(`invalid OnCommitAction ${e35}`);
}
__name(_0, "_0");
var Ga = class e20 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  temporary() {
    return new e20({ ...this.#e, node: vt.cloneWith(this.#e.node, { temporary: true }) });
  }
  onCommit(t) {
    return new e20({ ...this.#e, node: vt.cloneWith(this.#e.node, { onCommit: _0(t) }) });
  }
  ifNotExists() {
    return new e20({ ...this.#e, node: vt.cloneWith(this.#e.node, { ifNotExists: true }) });
  }
  addColumn(t, r, n = xn) {
    let i = n(new _r(ue.create(t, en(r))));
    return new e20({ ...this.#e, node: vt.cloneWithColumn(this.#e.node, i.toOperationNode()) });
  }
  addPrimaryKeyConstraint(t, r) {
    return new e20({ ...this.#e, node: vt.cloneWithConstraint(this.#e.node, h0.create(r, t)) });
  }
  addUniqueConstraint(t, r) {
    return new e20({ ...this.#e, node: vt.cloneWithConstraint(this.#e.node, Hu.create(r, t)) });
  }
  addCheckConstraint(t, r) {
    return new e20({ ...this.#e, node: vt.cloneWithConstraint(this.#e.node, So.create(r.toOperationNode(), t)) });
  }
  addForeignKeyConstraint(t, r, n, i, o = xn) {
    let s = o(new Ai(Oi.create(r.map(W.create), we(n), i.map(W.create), t)));
    return new e20({ ...this.#e, node: vt.cloneWithConstraint(this.#e.node, s.toOperationNode()) });
  }
  modifyFront(t) {
    return new e20({ ...this.#e, node: vt.cloneWithFrontModifier(this.#e.node, t.toOperationNode()) });
  }
  modifyEnd(t) {
    return new e20({ ...this.#e, node: vt.cloneWithEndModifier(this.#e.node, t.toOperationNode()) });
  }
  $call(t) {
    return t(this);
  }
  call(t) {
    return this.$call(t);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Ga, "don't await CreateTableBuilder instances directly. To execute the query you need to call `execute`");
var Qa = class e21 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  on(t) {
    return new e21({ ...this.#e, node: co.cloneWith(this.#e.node, { table: we(t) }) });
  }
  ifExists() {
    return new e21({ ...this.#e, node: co.cloneWith(this.#e.node, { ifExists: true }) });
  }
  cascade() {
    return new e21({ ...this.#e, node: co.cloneWith(this.#e.node, { cascade: true }) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Qa, "don't await DropIndexBuilder instances directly. To execute the query you need to call `execute`");
var Ka = class e22 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  ifExists() {
    return new e22({ ...this.#e, node: ba.cloneWith(this.#e.node, { ifExists: true }) });
  }
  cascade() {
    return new e22({ ...this.#e, node: ba.cloneWith(this.#e.node, { cascade: true }) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Ka, "don't await DropSchemaBuilder instances directly. To execute the query you need to call `execute`");
var Ya = class e23 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  ifExists() {
    return new e23({ ...this.#e, node: xa.cloneWith(this.#e.node, { ifExists: true }) });
  }
  cascade() {
    return new e23({ ...this.#e, node: xa.cloneWith(this.#e.node, { cascade: true }) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Ya, "don't await DropTableBuilder instances directly. To execute the query you need to call `execute`");
var Xt = d({ is(e35) {
  return e35.kind === "CreateViewNode";
}, create(e35) {
  return d({ kind: "CreateViewNode", name: ct.create(e35) });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var Gu = class {
  static {
    __name(this, "Gu");
  }
  #e = new Co();
  transformQuery(t) {
    return this.#e.transformNode(t.node);
  }
  transformResult(t) {
    return Promise.resolve(t.result);
  }
};
var Ja = class e24 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  temporary() {
    return new e24({ ...this.#e, node: Xt.cloneWith(this.#e.node, { temporary: true }) });
  }
  materialized() {
    return new e24({ ...this.#e, node: Xt.cloneWith(this.#e.node, { materialized: true }) });
  }
  ifNotExists() {
    return new e24({ ...this.#e, node: Xt.cloneWith(this.#e.node, { ifNotExists: true }) });
  }
  orReplace() {
    return new e24({ ...this.#e, node: Xt.cloneWith(this.#e.node, { orReplace: true }) });
  }
  columns(t) {
    return new e24({ ...this.#e, node: Xt.cloneWith(this.#e.node, { columns: t.map(c_) }) });
  }
  as(t) {
    let r = t.withPlugin(new Gu()).toOperationNode();
    return new e24({ ...this.#e, node: Xt.cloneWith(this.#e.node, { as: r }) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Ja, "don't await CreateViewBuilder instances directly. To execute the query you need to call `execute`");
var Oo = d({ is(e35) {
  return e35.kind === "DropViewNode";
}, create(e35) {
  return d({ kind: "DropViewNode", name: ct.create(e35) });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var Xa = class e25 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  materialized() {
    return new e25({ ...this.#e, node: Oo.cloneWith(this.#e.node, { materialized: true }) });
  }
  ifExists() {
    return new e25({ ...this.#e, node: Oo.cloneWith(this.#e.node, { ifExists: true }) });
  }
  cascade() {
    return new e25({ ...this.#e, node: Oo.cloneWith(this.#e.node, { cascade: true }) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Xa, "don't await DropViewBuilder instances directly. To execute the query you need to call `execute`");
var Qu = d({ is(e35) {
  return e35.kind === "CreateTypeNode";
}, create(e35) {
  return d({ kind: "CreateTypeNode", name: e35 });
}, cloneWithEnum(e35, t) {
  return d({ ...e35, enum: fo.create(t.map((r) => ke.createImmediate(r))) });
} });
var Za = class e26 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  asEnum(t) {
    return new e26({ ...this.#e, node: Qu.cloneWithEnum(this.#e.node, t) });
  }
  $call(t) {
    return t(this);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(Za, "don't await CreateTypeBuilder instances directly. To execute the query you need to call `execute`");
var Ku = d({ is(e35) {
  return e35.kind === "DropTypeNode";
}, create(e35) {
  return d({ kind: "DropTypeNode", name: e35 });
}, cloneWith(e35, t) {
  return d({ ...e35, ...t });
} });
var ec = class e27 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  ifExists() {
    return new e27({ ...this.#e, node: Ku.cloneWith(this.#e.node, { ifExists: true }) });
  }
  $call(t) {
    return t(this);
  }
  toOperationNode() {
    return this.#e.executor.transformQuery(this.#e.node, this.#e.queryId);
  }
  compile() {
    return this.#e.executor.compileQuery(this.toOperationNode(), this.#e.queryId);
  }
  async execute() {
    await this.#e.executor.executeQuery(this.compile(), this.#e.queryId);
  }
};
O(ec, "don't await DropTypeBuilder instances directly. To execute the query you need to call `execute`");
function q_(e35) {
  let t = ".";
  if (e35.includes(t)) {
    let r = e35.split(t).map($F);
    if (r.length === 2)
      return ct.createWithSchema(r[0], r[1]);
    throw new Error(`invalid schemable identifier ${e35}`);
  } else
    return ct.create(e35);
}
__name(q_, "q_");
function $F(e35) {
  return e35.trim();
}
__name($F, "$F");
var Yu = class e28 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  createTable(t) {
    return new Ga({ queryId: H(), executor: this.#e, node: vt.create(we(t)) });
  }
  dropTable(t) {
    return new Ya({ queryId: H(), executor: this.#e, node: xa.create(we(t)) });
  }
  createIndex(t) {
    return new za({ queryId: H(), executor: this.#e, node: pr.create(t) });
  }
  dropIndex(t) {
    return new Qa({ queryId: H(), executor: this.#e, node: co.create(t) });
  }
  createSchema(t) {
    return new Ha({ queryId: H(), executor: this.#e, node: Au.create(t) });
  }
  dropSchema(t) {
    return new Ka({ queryId: H(), executor: this.#e, node: ba.create(t) });
  }
  alterTable(t) {
    return new $a({ queryId: H(), executor: this.#e, node: ae.create(we(t)) });
  }
  createView(t) {
    return new Ja({ queryId: H(), executor: this.#e, node: Xt.create(t) });
  }
  dropView(t) {
    return new Xa({ queryId: H(), executor: this.#e, node: Oo.create(t) });
  }
  createType(t) {
    return new Za({ queryId: H(), executor: this.#e, node: Qu.create(q_(t)) });
  }
  dropType(t) {
    return new ec({ queryId: H(), executor: this.#e, node: Ku.create(q_(t)) });
  }
  withPlugin(t) {
    return new e28(this.#e.withPlugin(t));
  }
  withoutPlugins() {
    return new e28(this.#e.withoutPlugins());
  }
  withSchema(t) {
    return new e28(this.#e.withPluginAtFront(new St(t)));
  }
};
var Ju = class {
  static {
    __name(this, "Ju");
  }
  ref(t) {
    return new qu(t);
  }
};
var Xu = class {
  static {
    __name(this, "Xu");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  async provideConnection(t) {
    let r = await this.#e.acquireConnection();
    try {
      return await t(r);
    } finally {
      await this.#e.releaseConnection(r);
    }
  }
};
var Zu = class e29 extends vo {
  static {
    __name(this, "e");
  }
  #e;
  #t;
  #r;
  constructor(t, r, n, i = []) {
    super(i), this.#e = t, this.#t = r, this.#r = n;
  }
  get adapter() {
    return this.#t;
  }
  compileQuery(t) {
    return this.#e.compileQuery(t);
  }
  provideConnection(t) {
    return this.#r.provideConnection(t);
  }
  withPlugins(t) {
    return new e29(this.#e, this.#t, this.#r, [...this.plugins, ...t]);
  }
  withPlugin(t) {
    return new e29(this.#e, this.#t, this.#r, [...this.plugins, t]);
  }
  withPluginAtFront(t) {
    return new e29(this.#e, this.#t, this.#r, [t, ...this.plugins]);
  }
  withConnectionProvider(t) {
    return new e29(this.#e, this.#t, t, [...this.plugins]);
  }
  withoutPlugins() {
    return new e29(this.#e, this.#t, this.#r, []);
  }
};
function M_() {
  return typeof performance < "u" && me(performance.now) ? performance.now() : Date.now();
}
__name(M_, "M_");
var ed = class {
  static {
    __name(this, "ed");
  }
  #e;
  #t;
  #r;
  #n;
  #i = /* @__PURE__ */ new WeakSet();
  constructor(t, r) {
    this.#e = t, this.#t = r;
  }
  async init() {
    this.#r || (this.#r = this.#e.init().catch((t) => (this.#r = void 0, Promise.reject(t)))), await this.#r;
  }
  async acquireConnection() {
    await this.init();
    let t = await this.#e.acquireConnection();
    return this.#i.has(t) || (this.#o() && this.#s(t), this.#i.add(t)), t;
  }
  async releaseConnection(t) {
    await this.#e.releaseConnection(t);
  }
  beginTransaction(t, r) {
    return this.#e.beginTransaction(t, r);
  }
  commitTransaction(t) {
    return this.#e.commitTransaction(t);
  }
  rollbackTransaction(t) {
    return this.#e.rollbackTransaction(t);
  }
  async destroy() {
    this.#r && (await this.#r, this.#n || (this.#n = this.#e.destroy().catch((t) => (this.#n = void 0, Promise.reject(t)))), await this.#n);
  }
  #o() {
    return this.#t.isLevelEnabled("query") || this.#t.isLevelEnabled("error");
  }
  #s(t) {
    let r = t.executeQuery;
    t.executeQuery = async (n) => {
      let i = M_();
      try {
        return await r.call(t, n);
      } catch (o) {
        throw await this.#u(o, n, i), o;
      } finally {
        await this.#d(n, i);
      }
    };
  }
  async #u(t, r, n) {
    await this.#t.error(() => ({ level: "error", error: t, query: r, queryDurationMillis: this.#c(n) }));
  }
  async #d(t, r) {
    await this.#t.query(() => ({ level: "query", query: t, queryDurationMillis: this.#c(r) }));
  }
  #c(t) {
    return M_() - t;
  }
};
var tc = class {
  static {
    __name(this, "tc");
  }
  #e;
  #t;
  constructor(t) {
    this.#e = t;
  }
  async provideConnection(t) {
    for (; this.#t; )
      await this.#t;
    let r = this.#r(t);
    return this.#t = r.then(() => {
      this.#t = void 0;
    }).catch(() => {
      this.#t = void 0;
    }), r;
  }
  async #r(t) {
    return await t(this.#e);
  }
};
var y0 = ["read uncommitted", "read committed", "repeatable read", "serializable"];
var Spe = d(["query", "error"]);
var td = class {
  static {
    __name(this, "td");
  }
  #e;
  #t;
  constructor(t) {
    me(t) ? (this.#t = t, this.#e = d({ query: true, error: true })) : (this.#t = zF, this.#e = d({ query: t.includes("query"), error: t.includes("error") }));
  }
  isLevelEnabled(t) {
    return this.#e[t];
  }
  async query(t) {
    this.#e.query && await this.#t(t());
  }
  async error(t) {
    this.#e.error && await this.#t(t());
  }
};
function zF(e35) {
  e35.level === "query" ? (console.log(`kysely:query: ${e35.query.sql}`), console.log(`kysely:query: duration: ${e35.queryDurationMillis.toFixed(1)}ms`)) : e35.level === "error" && (e35.error instanceof Error ? console.error(`kysely:error: ${e35.error.stack ?? e35.error.message}`) : console.error(`kysely:error: ${e35}`));
}
__name(zF, "zF");
function g0(e35) {
  return Qe(e35) && me(e35.compile);
}
__name(g0, "g0");
var Ao = class e30 extends go {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    let r, n;
    if (HF(t))
      r = { executor: t.executor }, n = { ...t };
    else {
      let i = t.dialect, o = i.createDriver(), s = i.createQueryCompiler(), a = i.createAdapter(), u = new td(t.log ?? []), l = new ed(o, u), p = new Xu(l), f = new Zu(s, a, p, t.plugins ?? []);
      r = { executor: f }, n = { config: t, executor: f, dialect: i, driver: l };
    }
    super(r), this.#e = d(n);
  }
  get schema() {
    return new Yu(this.#e.executor);
  }
  get dynamic() {
    return new Ju();
  }
  get introspection() {
    return this.#e.dialect.createIntrospector(this.withoutPlugins());
  }
  case(t) {
    return new wo({ node: rt.create(bn(t) ? void 0 : An(t)) });
  }
  get fn() {
    return Vu();
  }
  transaction() {
    return new nd({ ...this.#e });
  }
  connection() {
    return new rd({ ...this.#e });
  }
  withPlugin(t) {
    return new e30({ ...this.#e, executor: this.#e.executor.withPlugin(t) });
  }
  withoutPlugins() {
    return new e30({ ...this.#e, executor: this.#e.executor.withoutPlugins() });
  }
  withSchema(t) {
    return new e30({ ...this.#e, executor: this.#e.executor.withPluginAtFront(new St(t)) });
  }
  withTables() {
    return new e30({ ...this.#e });
  }
  async destroy() {
    await this.#e.driver.destroy();
  }
  get isTransaction() {
    return false;
  }
  getExecutor() {
    return this.#e.executor;
  }
  executeQuery(t, r = H()) {
    let n = g0(t) ? t.compile() : t;
    return this.getExecutor().executeQuery(n, r);
  }
};
var D_ = class e31 extends Ao {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    super(t), this.#e = t;
  }
  get isTransaction() {
    return true;
  }
  transaction() {
    throw new Error("calling the transaction method for a Transaction is not supported");
  }
  connection() {
    throw new Error("calling the connection method for a Transaction is not supported");
  }
  async destroy() {
    throw new Error("calling the destroy method for a Transaction is not supported");
  }
  withPlugin(t) {
    return new e31({ ...this.#e, executor: this.#e.executor.withPlugin(t) });
  }
  withoutPlugins() {
    return new e31({ ...this.#e, executor: this.#e.executor.withoutPlugins() });
  }
  withSchema(t) {
    return new e31({ ...this.#e, executor: this.#e.executor.withPluginAtFront(new St(t)) });
  }
  withTables() {
    return new e31({ ...this.#e });
  }
};
function HF(e35) {
  return Qe(e35) && Qe(e35.config) && Qe(e35.driver) && Qe(e35.executor) && Qe(e35.dialect);
}
__name(HF, "HF");
var rd = class {
  static {
    __name(this, "rd");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  async execute(t) {
    return this.#e.executor.provideConnection(async (r) => {
      let n = this.#e.executor.withConnectionProvider(new tc(r)), i = new Ao({ ...this.#e, executor: n });
      return await t(i);
    });
  }
};
O(rd, "don't await ConnectionBuilder instances directly. To execute the query you need to call the `execute` method");
var nd = class e32 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  setIsolationLevel(t) {
    return new e32({ ...this.#e, isolationLevel: t });
  }
  async execute(t) {
    let { isolationLevel: r, ...n } = this.#e, i = { isolationLevel: r };
    return GF(i), this.#e.executor.provideConnection(async (o) => {
      let s = this.#e.executor.withConnectionProvider(new tc(o)), a = new D_({ ...n, executor: s });
      try {
        await this.#e.driver.beginTransaction(o, i);
        let u = await t(a);
        return await this.#e.driver.commitTransaction(o), u;
      } catch (u) {
        throw await this.#e.driver.rollbackTransaction(o), u;
      }
    });
  }
};
O(nd, "don't await TransactionBuilder instances directly. To execute the transaction you need to call the `execute` method");
function GF(e35) {
  if (e35.isolationLevel && !y0.includes(e35.isolationLevel))
    throw new Error(`invalid transaction isolation level ${e35.isolationLevel}`);
}
__name(GF, "GF");
var qt = class e33 {
  static {
    __name(this, "e");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  get expressionType() {
  }
  as(t) {
    return new k_(this, t);
  }
  $castTo() {
    return new e33({ ...this.#e });
  }
  castTo() {
    return this.$castTo();
  }
  withPlugin(t) {
    return new e33({ ...this.#e, plugins: this.#e.plugins !== void 0 ? d([...this.#e.plugins, t]) : d([t]) });
  }
  toOperationNode() {
    return this.#r(this.#t());
  }
  compile(t) {
    return this.#n(this.#t(t));
  }
  async execute(t) {
    let r = this.#t(t);
    return r.executeQuery(this.#n(r), this.#e.queryId);
  }
  #t(t) {
    let r = t !== void 0 ? t.getExecutor() : xi;
    return this.#e.plugins !== void 0 ? r.withPlugins(this.#e.plugins) : r;
  }
  #r(t) {
    return t.transformQuery(this.#e.rawNode, this.#e.queryId);
  }
  #n(t) {
    return t.compileQuery(this.#r(t), this.#e.queryId);
  }
};
O(qt, "don't await RawBuilder instances directly. To execute the query you need to call `execute`");
var k_ = class {
  static {
    __name(this, "k_");
  }
  #e;
  #t;
  constructor(t, r) {
    this.#e = t, this.#t = r;
  }
  get expression() {
    return this.#e;
  }
  get alias() {
    return this.#t;
  }
  toOperationNode() {
    return ut.create(this.#e.toOperationNode(), he(this.#t) ? this.#t.toOperationNode() : M.create(this.#t));
  }
};
var nt = Object.assign((e35, ...t) => new qt({ queryId: H(), rawNode: Oe.create(e35, t?.map(wt) ?? []) }), { ref(e35) {
  return new qt({ queryId: H(), rawNode: Oe.createWithChild(Qr(e35)) });
}, val(e35) {
  return new qt({ queryId: H(), rawNode: Oe.createWithChild(wt(e35)) });
}, value(e35) {
  return this.val(e35);
}, table(e35) {
  return new qt({ queryId: H(), rawNode: Oe.createWithChild(we(e35)) });
}, id(...e35) {
  let t = new Array(e35.length + 1).fill(".");
  return t[0] = "", t[t.length - 1] = "", new qt({ queryId: H(), rawNode: Oe.create(t, e35.map(M.create)) });
}, lit(e35) {
  return new qt({ queryId: H(), rawNode: Oe.createWithChild(ke.createImmediate(e35)) });
}, literal(e35) {
  return this.lit(e35);
}, raw(e35) {
  return new qt({ queryId: H(), rawNode: Oe.createWithSql(e35) });
}, join(e35, t = nt`, `) {
  let r = new Array(2 * e35.length - 1), n = t.toOperationNode();
  for (let i = 0; i < e35.length; ++i)
    r[2 * i] = wt(e35[i]), i !== e35.length - 1 && (r[2 * i + 1] = n);
  return new qt({ queryId: H(), rawNode: Oe.createWithChildren(r) });
} });
var id = class {
  static {
    __name(this, "id");
  }
  nodeStack = [];
  get parentNode() {
    return this.nodeStack[this.nodeStack.length - 2];
  }
  #e = d({ AliasNode: this.visitAlias.bind(this), ColumnNode: this.visitColumn.bind(this), IdentifierNode: this.visitIdentifier.bind(this), SchemableIdentifierNode: this.visitSchemableIdentifier.bind(this), RawNode: this.visitRaw.bind(this), ReferenceNode: this.visitReference.bind(this), SelectQueryNode: this.visitSelectQuery.bind(this), SelectionNode: this.visitSelection.bind(this), TableNode: this.visitTable.bind(this), FromNode: this.visitFrom.bind(this), SelectAllNode: this.visitSelectAll.bind(this), AndNode: this.visitAnd.bind(this), OrNode: this.visitOr.bind(this), ValueNode: this.visitValue.bind(this), ValueListNode: this.visitValueList.bind(this), PrimitiveValueListNode: this.visitPrimitiveValueList.bind(this), ParensNode: this.visitParens.bind(this), JoinNode: this.visitJoin.bind(this), OperatorNode: this.visitOperator.bind(this), WhereNode: this.visitWhere.bind(this), InsertQueryNode: this.visitInsertQuery.bind(this), DeleteQueryNode: this.visitDeleteQuery.bind(this), ReturningNode: this.visitReturning.bind(this), CreateTableNode: this.visitCreateTable.bind(this), AddColumnNode: this.visitAddColumn.bind(this), ColumnDefinitionNode: this.visitColumnDefinition.bind(this), DropTableNode: this.visitDropTable.bind(this), DataTypeNode: this.visitDataType.bind(this), OrderByNode: this.visitOrderBy.bind(this), OrderByItemNode: this.visitOrderByItem.bind(this), GroupByNode: this.visitGroupBy.bind(this), GroupByItemNode: this.visitGroupByItem.bind(this), UpdateQueryNode: this.visitUpdateQuery.bind(this), ColumnUpdateNode: this.visitColumnUpdate.bind(this), LimitNode: this.visitLimit.bind(this), OffsetNode: this.visitOffset.bind(this), OnConflictNode: this.visitOnConflict.bind(this), OnDuplicateKeyNode: this.visitOnDuplicateKey.bind(this), CreateIndexNode: this.visitCreateIndex.bind(this), DropIndexNode: this.visitDropIndex.bind(this), ListNode: this.visitList.bind(this), PrimaryKeyConstraintNode: this.visitPrimaryKeyConstraint.bind(this), UniqueConstraintNode: this.visitUniqueConstraint.bind(this), ReferencesNode: this.visitReferences.bind(this), CheckConstraintNode: this.visitCheckConstraint.bind(this), WithNode: this.visitWith.bind(this), CommonTableExpressionNode: this.visitCommonTableExpression.bind(this), CommonTableExpressionNameNode: this.visitCommonTableExpressionName.bind(this), HavingNode: this.visitHaving.bind(this), CreateSchemaNode: this.visitCreateSchema.bind(this), DropSchemaNode: this.visitDropSchema.bind(this), AlterTableNode: this.visitAlterTable.bind(this), DropColumnNode: this.visitDropColumn.bind(this), RenameColumnNode: this.visitRenameColumn.bind(this), AlterColumnNode: this.visitAlterColumn.bind(this), ModifyColumnNode: this.visitModifyColumn.bind(this), AddConstraintNode: this.visitAddConstraint.bind(this), DropConstraintNode: this.visitDropConstraint.bind(this), ForeignKeyConstraintNode: this.visitForeignKeyConstraint.bind(this), CreateViewNode: this.visitCreateView.bind(this), DropViewNode: this.visitDropView.bind(this), GeneratedNode: this.visitGenerated.bind(this), DefaultValueNode: this.visitDefaultValue.bind(this), OnNode: this.visitOn.bind(this), ValuesNode: this.visitValues.bind(this), SelectModifierNode: this.visitSelectModifier.bind(this), CreateTypeNode: this.visitCreateType.bind(this), DropTypeNode: this.visitDropType.bind(this), ExplainNode: this.visitExplain.bind(this), DefaultInsertValueNode: this.visitDefaultInsertValue.bind(this), AggregateFunctionNode: this.visitAggregateFunction.bind(this), OverNode: this.visitOver.bind(this), PartitionByNode: this.visitPartitionBy.bind(this), PartitionByItemNode: this.visitPartitionByItem.bind(this), SetOperationNode: this.visitSetOperation.bind(this), BinaryOperationNode: this.visitBinaryOperation.bind(this), UnaryOperationNode: this.visitUnaryOperation.bind(this), UsingNode: this.visitUsing.bind(this), FunctionNode: this.visitFunction.bind(this), CaseNode: this.visitCase.bind(this), WhenNode: this.visitWhen.bind(this) });
  visitNode = (t) => {
    this.nodeStack.push(t), this.#e[t.kind](t), this.nodeStack.pop();
  };
};
var To = class extends id {
  static {
    __name(this, "To");
  }
  #e = "";
  #t = [];
  get numParameters() {
    return this.#t.length;
  }
  compileQuery(t) {
    return this.#e = "", this.#t = [], this.visitNode(t), d({ query: t, sql: this.getSql(), parameters: [...this.#t] });
  }
  getSql() {
    return this.#e;
  }
  visitSelectQuery(t) {
    let r = this.parentNode !== void 0 && !dt.is(this.parentNode) && !Xt.is(this.parentNode) && !Wu.is(this.parentNode);
    this.parentNode === void 0 && t.explain && (this.visitNode(t.explain), this.append(" ")), r && this.append("("), t.with && (this.visitNode(t.with), this.append(" ")), this.append("select "), t.distinctOn && (this.compileDistinctOn(t.distinctOn), this.append(" ")), t.frontModifiers && t.frontModifiers.length > 0 && (this.compileList(t.frontModifiers, " "), this.append(" ")), t.selections && (this.compileList(t.selections), this.append(" ")), this.visitNode(t.from), t.joins && (this.append(" "), this.compileList(t.joins, " ")), t.where && (this.append(" "), this.visitNode(t.where)), t.groupBy && (this.append(" "), this.visitNode(t.groupBy)), t.having && (this.append(" "), this.visitNode(t.having)), t.setOperations && (this.append(" "), this.compileList(t.setOperations, " ")), t.orderBy && (this.append(" "), this.visitNode(t.orderBy)), t.limit && (this.append(" "), this.visitNode(t.limit)), t.offset && (this.append(" "), this.visitNode(t.offset)), t.endModifiers && t.endModifiers.length > 0 && (this.append(" "), this.compileList(t.endModifiers, " ")), r && this.append(")");
  }
  visitFrom(t) {
    this.append("from "), this.compileList(t.froms);
  }
  visitSelection(t) {
    this.visitNode(t.selection);
  }
  visitColumn(t) {
    this.visitNode(t.column);
  }
  compileDistinctOn(t) {
    this.append("distinct on ("), this.compileList(t), this.append(")");
  }
  compileList(t, r = ", ") {
    let n = t.length - 1;
    for (let i = 0; i <= n; i++)
      this.visitNode(t[i]), i < n && this.append(r);
  }
  visitWhere(t) {
    this.append("where "), this.visitNode(t.where);
  }
  visitHaving(t) {
    this.append("having "), this.visitNode(t.having);
  }
  visitInsertQuery(t) {
    let r = this.nodeStack.find(C.is) !== t;
    !r && t.explain && (this.visitNode(t.explain), this.append(" ")), r && this.append("("), t.with && (this.visitNode(t.with), this.append(" ")), this.append(t.replace ? "replace" : "insert"), t.ignore && this.append(" ignore"), this.append(" into "), this.visitNode(t.into), t.columns && (this.append(" ("), this.compileList(t.columns), this.append(")")), t.values && (this.append(" "), this.visitNode(t.values)), t.onConflict && (this.append(" "), this.visitNode(t.onConflict)), t.onDuplicateKey && (this.append(" "), this.visitNode(t.onDuplicateKey)), t.returning && (this.append(" "), this.visitNode(t.returning)), r && this.append(")");
  }
  visitValues(t) {
    this.append("values "), this.compileList(t.values);
  }
  visitDeleteQuery(t) {
    let r = this.nodeStack.find(C.is) !== t;
    !r && t.explain && (this.visitNode(t.explain), this.append(" ")), r && this.append("("), t.with && (this.visitNode(t.with), this.append(" ")), this.append("delete "), this.visitNode(t.from), t.using && (this.append(" "), this.visitNode(t.using)), t.joins && (this.append(" "), this.compileList(t.joins, " ")), t.where && (this.append(" "), this.visitNode(t.where)), t.orderBy && (this.append(" "), this.visitNode(t.orderBy)), t.limit && (this.append(" "), this.visitNode(t.limit)), t.returning && (this.append(" "), this.visitNode(t.returning)), r && this.append(")");
  }
  visitReturning(t) {
    this.append("returning "), this.compileList(t.selections);
  }
  visitAlias(t) {
    this.visitNode(t.node), this.append(" as "), this.visitNode(t.alias);
  }
  visitReference(t) {
    this.visitNode(t.table), this.append("."), this.visitNode(t.column);
  }
  visitSelectAll(t) {
    this.append("*");
  }
  visitIdentifier(t) {
    this.append(this.getLeftIdentifierWrapper()), this.compileUnwrappedIdentifier(t), this.append(this.getRightIdentifierWrapper());
  }
  compileUnwrappedIdentifier(t) {
    if (!Ie(t.name))
      throw new Error("a non-string identifier was passed to compileUnwrappedIdentifier.");
    this.append(this.sanitizeIdentifier(t.name));
  }
  visitAnd(t) {
    this.visitNode(t.left), this.append(" and "), this.visitNode(t.right);
  }
  visitOr(t) {
    this.visitNode(t.left), this.append(" or "), this.visitNode(t.right);
  }
  visitValue(t) {
    t.immediate ? this.appendImmediateValue(t.value) : this.appendValue(t.value);
  }
  visitValueList(t) {
    this.append("("), this.compileList(t.values), this.append(")");
  }
  visitPrimitiveValueList(t) {
    this.append("(");
    let { values: r } = t;
    for (let n = 0; n < r.length; ++n)
      this.appendValue(r[n]), n !== r.length - 1 && this.append(", ");
    this.append(")");
  }
  visitParens(t) {
    this.append("("), this.visitNode(t.node), this.append(")");
  }
  visitJoin(t) {
    this.append(KF[t.joinType]), this.append(" "), this.visitNode(t.table), t.on && (this.append(" "), this.visitNode(t.on));
  }
  visitOn(t) {
    this.append("on "), this.visitNode(t.on);
  }
  visitRaw(t) {
    let { sqlFragments: r, parameters: n } = t;
    for (let i = 0; i < r.length; ++i)
      this.append(r[i]), n.length > i && this.visitNode(n[i]);
  }
  visitOperator(t) {
    this.append(t.operator);
  }
  visitTable(t) {
    this.visitNode(t.table);
  }
  visitSchemableIdentifier(t) {
    t.schema && (this.visitNode(t.schema), this.append(".")), this.visitNode(t.identifier);
  }
  visitCreateTable(t) {
    this.append("create "), t.frontModifiers && t.frontModifiers.length > 0 && (this.compileList(t.frontModifiers, " "), this.append(" ")), t.temporary && this.append("temporary "), this.append("table "), t.ifNotExists && this.append("if not exists "), this.visitNode(t.table), this.append(" ("), this.compileList([...t.columns, ...t.constraints ?? []]), this.append(")"), t.onCommit && (this.append(" on commit "), this.append(t.onCommit)), t.endModifiers && t.endModifiers.length > 0 && (this.append(" "), this.compileList(t.endModifiers, " "));
  }
  visitColumnDefinition(t) {
    this.visitNode(t.column), this.append(" "), this.visitNode(t.dataType), t.unsigned && this.append(" unsigned"), t.frontModifiers && t.frontModifiers.length > 0 && (this.append(" "), this.compileList(t.frontModifiers, " ")), t.generated && (this.append(" "), this.visitNode(t.generated)), t.defaultTo && (this.append(" "), this.visitNode(t.defaultTo)), t.notNull && this.append(" not null"), t.unique && this.append(" unique"), t.primaryKey && this.append(" primary key"), t.autoIncrement && (this.append(" "), this.append(this.getAutoIncrement())), t.references && (this.append(" "), this.visitNode(t.references)), t.check && (this.append(" "), this.visitNode(t.check)), t.endModifiers && t.endModifiers.length > 0 && (this.append(" "), this.compileList(t.endModifiers, " "));
  }
  getAutoIncrement() {
    return "auto_increment";
  }
  visitReferences(t) {
    this.append("references "), this.visitNode(t.table), this.append(" ("), this.compileList(t.columns), this.append(")"), t.onDelete && (this.append(" on delete "), this.append(t.onDelete)), t.onUpdate && (this.append(" on update "), this.append(t.onUpdate));
  }
  visitDropTable(t) {
    this.append("drop table "), t.ifExists && this.append("if exists "), this.visitNode(t.table), t.cascade && this.append(" cascade");
  }
  visitDataType(t) {
    this.append(t.dataType);
  }
  visitOrderBy(t) {
    this.append("order by "), this.compileList(t.items);
  }
  visitOrderByItem(t) {
    this.visitNode(t.orderBy), t.direction && (this.append(" "), this.visitNode(t.direction));
  }
  visitGroupBy(t) {
    this.append("group by "), this.compileList(t.items);
  }
  visitGroupByItem(t) {
    this.visitNode(t.groupBy);
  }
  visitUpdateQuery(t) {
    let r = this.nodeStack.find(C.is) !== t;
    !r && t.explain && (this.visitNode(t.explain), this.append(" ")), r && this.append("("), t.with && (this.visitNode(t.with), this.append(" ")), this.append("update "), this.visitNode(t.table), this.append(" set "), t.updates && this.compileList(t.updates), t.from && (this.append(" "), this.visitNode(t.from)), t.joins && (this.append(" "), this.compileList(t.joins, " ")), t.where && (this.append(" "), this.visitNode(t.where)), t.returning && (this.append(" "), this.visitNode(t.returning)), r && this.append(")");
  }
  visitColumnUpdate(t) {
    this.visitNode(t.column), this.append(" = "), this.visitNode(t.value);
  }
  visitLimit(t) {
    this.append("limit "), this.visitNode(t.limit);
  }
  visitOffset(t) {
    this.append("offset "), this.visitNode(t.offset);
  }
  visitOnConflict(t) {
    this.append("on conflict"), t.columns ? (this.append(" ("), this.compileList(t.columns), this.append(")")) : t.constraint ? (this.append(" on constraint "), this.visitNode(t.constraint)) : t.indexExpression && (this.append(" ("), this.visitNode(t.indexExpression), this.append(")")), t.indexWhere && (this.append(" "), this.visitNode(t.indexWhere)), t.doNothing === true ? this.append(" do nothing") : t.updates && (this.append(" do update set "), this.compileList(t.updates), t.updateWhere && (this.append(" "), this.visitNode(t.updateWhere)));
  }
  visitOnDuplicateKey(t) {
    this.append("on duplicate key update "), this.compileList(t.updates);
  }
  visitCreateIndex(t) {
    this.append("create "), t.unique && this.append("unique "), this.append("index "), t.ifNotExists && this.append("if not exists "), this.visitNode(t.name), t.table && (this.append(" on "), this.visitNode(t.table)), t.using && (this.append(" using "), this.visitNode(t.using)), t.columns && (this.append(" ("), this.compileList(t.columns), this.append(")")), t.where && (this.append(" "), this.visitNode(t.where));
  }
  visitDropIndex(t) {
    this.append("drop index "), t.ifExists && this.append("if exists "), this.visitNode(t.name), t.table && (this.append(" on "), this.visitNode(t.table)), t.cascade && this.append(" cascade");
  }
  visitCreateSchema(t) {
    this.append("create schema "), t.ifNotExists && this.append("if not exists "), this.visitNode(t.schema);
  }
  visitDropSchema(t) {
    this.append("drop schema "), t.ifExists && this.append("if exists "), this.visitNode(t.schema), t.cascade && this.append(" cascade");
  }
  visitPrimaryKeyConstraint(t) {
    t.name && (this.append("constraint "), this.visitNode(t.name), this.append(" ")), this.append("primary key ("), this.compileList(t.columns), this.append(")");
  }
  visitUniqueConstraint(t) {
    t.name && (this.append("constraint "), this.visitNode(t.name), this.append(" ")), this.append("unique ("), this.compileList(t.columns), this.append(")");
  }
  visitCheckConstraint(t) {
    t.name && (this.append("constraint "), this.visitNode(t.name), this.append(" ")), this.append("check ("), this.visitNode(t.expression), this.append(")");
  }
  visitForeignKeyConstraint(t) {
    t.name && (this.append("constraint "), this.visitNode(t.name), this.append(" ")), this.append("foreign key ("), this.compileList(t.columns), this.append(") "), this.visitNode(t.references), t.onDelete && (this.append(" on delete "), this.append(t.onDelete)), t.onUpdate && (this.append(" on update "), this.append(t.onUpdate));
  }
  visitList(t) {
    this.compileList(t.items);
  }
  visitWith(t) {
    this.append("with "), t.recursive && this.append("recursive "), this.compileList(t.expressions);
  }
  visitCommonTableExpression(t) {
    this.visitNode(t.name), this.append(" as "), this.visitNode(t.expression);
  }
  visitCommonTableExpressionName(t) {
    this.visitNode(t.table), t.columns && (this.append("("), this.compileList(t.columns), this.append(")"));
  }
  visitAlterTable(t) {
    this.append("alter table "), this.visitNode(t.table), this.append(" "), t.renameTo && (this.append("rename to "), this.visitNode(t.renameTo)), t.setSchema && (this.append("set schema "), this.visitNode(t.setSchema)), t.addConstraint && this.visitNode(t.addConstraint), t.dropConstraint && this.visitNode(t.dropConstraint), t.columnAlterations && this.compileList(t.columnAlterations);
  }
  visitAddColumn(t) {
    this.append("add column "), this.visitNode(t.column);
  }
  visitRenameColumn(t) {
    this.append("rename column "), this.visitNode(t.column), this.append(" to "), this.visitNode(t.renameTo);
  }
  visitDropColumn(t) {
    this.append("drop column "), this.visitNode(t.column);
  }
  visitAlterColumn(t) {
    this.append("alter column "), this.visitNode(t.column), this.append(" "), t.dataType && (this.append("type "), this.visitNode(t.dataType), t.dataTypeExpression && (this.append("using "), this.visitNode(t.dataTypeExpression))), t.setDefault && (this.append("set default "), this.visitNode(t.setDefault)), t.dropDefault && this.append("drop default"), t.setNotNull && this.append("set not null"), t.dropNotNull && this.append("drop not null");
  }
  visitModifyColumn(t) {
    this.append("modify column "), this.visitNode(t.column);
  }
  visitAddConstraint(t) {
    this.append("add "), this.visitNode(t.constraint);
  }
  visitDropConstraint(t) {
    this.append("drop constraint "), t.ifExists && this.append("if exists "), this.visitNode(t.constraintName), t.modifier === "cascade" ? this.append(" cascade") : t.modifier === "restrict" && this.append(" restrict");
  }
  visitSetOperation(t) {
    this.append(t.operator), this.append(" "), t.all && this.append("all "), this.visitNode(t.expression);
  }
  visitCreateView(t) {
    this.append("create "), t.orReplace && this.append("or replace "), t.materialized && this.append("materialized "), t.temporary && this.append("temporary "), this.append("view "), t.ifNotExists && this.append("if not exists "), this.visitNode(t.name), this.append(" "), t.columns && (this.append("("), this.compileList(t.columns), this.append(") ")), t.as && (this.append("as "), this.visitNode(t.as));
  }
  visitDropView(t) {
    this.append("drop "), t.materialized && this.append("materialized "), this.append("view "), t.ifExists && this.append("if exists "), this.visitNode(t.name), t.cascade && this.append(" cascade");
  }
  visitGenerated(t) {
    this.append("generated "), t.always && this.append("always "), t.byDefault && this.append("by default "), this.append("as "), t.identity && this.append("identity"), t.expression && (this.append("("), this.visitNode(t.expression), this.append(")")), t.stored && this.append(" stored");
  }
  visitDefaultValue(t) {
    this.append("default "), this.visitNode(t.defaultValue);
  }
  visitSelectModifier(t) {
    t.rawModifier ? this.visitNode(t.rawModifier) : this.append(QF[t.modifier]);
  }
  visitCreateType(t) {
    this.append("create type "), this.visitNode(t.name), t.enum && (this.append(" as enum "), this.visitNode(t.enum));
  }
  visitDropType(t) {
    this.append("drop type "), t.ifExists && this.append("if exists "), this.visitNode(t.name);
  }
  visitExplain(t) {
    this.append("explain"), (t.options || t.format) && (this.append(" "), this.append(this.getLeftExplainOptionsWrapper()), t.options && (this.visitNode(t.options), t.format && this.append(this.getExplainOptionsDelimiter())), t.format && (this.append("format"), this.append(this.getExplainOptionAssignment()), this.append(t.format)), this.append(this.getRightExplainOptionsWrapper()));
  }
  visitDefaultInsertValue(t) {
    this.append("default");
  }
  visitAggregateFunction(t) {
    this.append(t.func), this.append("("), t.distinct && this.append("distinct "), this.compileList(t.aggregated), this.append(")"), t.filter && (this.append(" filter("), this.visitNode(t.filter), this.append(")")), t.over && (this.append(" "), this.visitNode(t.over));
  }
  visitOver(t) {
    this.append("over("), t.partitionBy && (this.visitNode(t.partitionBy), t.orderBy && this.append(" ")), t.orderBy && this.visitNode(t.orderBy), this.append(")");
  }
  visitPartitionBy(t) {
    this.append("partition by "), this.compileList(t.items);
  }
  visitPartitionByItem(t) {
    this.visitNode(t.partitionBy);
  }
  visitBinaryOperation(t) {
    this.visitNode(t.leftOperand), this.append(" "), this.visitNode(t.operator), this.append(" "), this.visitNode(t.rightOperand);
  }
  visitUnaryOperation(t) {
    this.visitNode(t.operator), this.isMinusOperator(t.operator) || this.append(" "), this.visitNode(t.operand);
  }
  isMinusOperator(t) {
    return lo.is(t) && t.operator === "-";
  }
  visitUsing(t) {
    this.append("using "), this.compileList(t.tables);
  }
  visitFunction(t) {
    this.append(t.func), this.append("("), this.compileList(t.arguments), this.append(")");
  }
  visitCase(t) {
    this.append("case"), t.value && (this.append(" "), this.visitNode(t.value)), t.when && (this.append(" "), this.compileList(t.when, " ")), t.else && (this.append(" else "), this.visitNode(t.else)), this.append(" end"), t.isStatement && this.append(" case");
  }
  visitWhen(t) {
    this.append("when "), this.visitNode(t.condition), t.result && (this.append(" then "), this.visitNode(t.result));
  }
  append(t) {
    this.#e += t;
  }
  appendValue(t) {
    this.addParameter(t), this.append(this.getCurrentParameterPlaceholder());
  }
  getLeftIdentifierWrapper() {
    return '"';
  }
  getRightIdentifierWrapper() {
    return '"';
  }
  getCurrentParameterPlaceholder() {
    return "$" + this.numParameters;
  }
  getLeftExplainOptionsWrapper() {
    return "(";
  }
  getExplainOptionAssignment() {
    return " ";
  }
  getExplainOptionsDelimiter() {
    return ", ";
  }
  getRightExplainOptionsWrapper() {
    return ")";
  }
  sanitizeIdentifier(t) {
    let r = this.getLeftIdentifierWrapper(), n = this.getRightIdentifierWrapper(), i = "";
    for (let o of t)
      i += o, o === r ? i += r : o === n && (i += n);
    return i;
  }
  addParameter(t) {
    this.#t.push(t);
  }
  appendImmediateValue(t) {
    if (Ie(t))
      this.append(`'${t}'`);
    else if (AS(t) || Cu(t))
      this.append(t.toString());
    else if (Ou(t))
      this.append("null");
    else if (TS(t))
      this.appendImmediateValue(t.toISOString());
    else if (PS(t))
      this.appendImmediateValue(t.toString());
    else
      throw new Error(`invalid immediate value ${t}`);
  }
};
var QF = d({ ForKeyShare: "for key share", ForNoKeyUpdate: "for no key update", ForUpdate: "for update", ForShare: "for share", NoWait: "nowait", SkipLocked: "skip locked", Distinct: "distinct" });
var KF = d({ InnerJoin: "inner join", LeftJoin: "left join", RightJoin: "right join", FullJoin: "full join", LateralInnerJoin: "inner join lateral", LateralLeftJoin: "left join lateral" });
var Po = class {
  static {
    __name(this, "Po");
  }
  get supportsTransactionalDdl() {
    return false;
  }
  get supportsReturning() {
    return false;
  }
};
var od = class {
  static {
    __name(this, "od");
  }
  transformQuery(t) {
    return t.node;
  }
  async transformResult(t) {
    return t.result;
  }
};
var nc = "kysely_migration";
var Io = "kysely_migration_lock";
var F_ = "migration_lock";
var L_ = d({ __noMigrations__: true });
var sd = class {
  static {
    __name(this, "sd");
  }
  #e;
  constructor(t) {
    this.#e = d(t);
  }
  async getMigrations() {
    let t = await this.#a(this.#n) ? await this.#e.db.withPlugin(this.#o).selectFrom(this.#n).select(["name", "timestamp"]).execute() : [];
    return (await this.#f()).map(({ name: n, ...i }) => {
      let o = t.find((s) => s.name === n);
      return { name: n, migration: i, executedAt: o ? new Date(o.timestamp) : void 0 };
    });
  }
  async migrateToLatest() {
    return this.#t(({ migrations: t }) => t.length - 1);
  }
  async migrateTo(t) {
    return this.#t(({ migrations: r }) => {
      if (t === L_)
        return -1;
      let n = r.findIndex((i) => i.name === t);
      if (n === -1)
        throw new Error(`migration "${t}" doesn't exist`);
      return n;
    });
  }
  async migrateUp() {
    return this.#t(({ currentIndex: t, migrations: r }) => Math.min(t + 1, r.length - 1));
  }
  async migrateDown() {
    return this.#t(({ currentIndex: t }) => Math.max(t - 1, -1));
  }
  async #t(t) {
    try {
      return await this.#s(), await this.#h(t);
    } catch (r) {
      return r instanceof rc ? r.resultSet : { error: r };
    }
  }
  get #r() {
    return this.#e.migrationTableSchema;
  }
  get #n() {
    return this.#e.migrationTableName ?? nc;
  }
  get #i() {
    return this.#e.migrationLockTableName ?? Io;
  }
  get #o() {
    return this.#r ? new St(this.#r) : new od();
  }
  async #s() {
    await this.#u(), await this.#d(), await this.#c(), await this.#m();
  }
  async #u() {
    if (this.#r && !await this.#l())
      try {
        await this.#e.db.schema.createSchema(this.#r).ifNotExists().execute();
      } catch (t) {
        if (!await this.#l())
          throw t;
      }
  }
  async #d() {
    if (!await this.#a(this.#n))
      try {
        this.#r && await this.#e.db.schema.createSchema(this.#r).ifNotExists().execute(), await this.#e.db.schema.withPlugin(this.#o).createTable(this.#n).ifNotExists().addColumn("name", "varchar(255)", (t) => t.notNull().primaryKey()).addColumn("timestamp", "varchar(255)", (t) => t.notNull()).execute();
      } catch (t) {
        if (!await this.#a(this.#n))
          throw t;
      }
  }
  async #c() {
    if (!await this.#a(this.#i))
      try {
        await this.#e.db.schema.withPlugin(this.#o).createTable(this.#i).ifNotExists().addColumn("id", "varchar(255)", (t) => t.notNull().primaryKey()).addColumn("is_locked", "integer", (t) => t.notNull().defaultTo(0)).execute();
      } catch (t) {
        if (!await this.#a(this.#i))
          throw t;
      }
  }
  async #m() {
    if (!await this.#p())
      try {
        await this.#e.db.withPlugin(this.#o).insertInto(this.#i).values({ id: F_, is_locked: 0 }).execute();
      } catch (t) {
        if (!await this.#p())
          throw t;
      }
  }
  async #l() {
    return (await this.#e.db.introspection.getSchemas()).some((r) => r.name === this.#r);
  }
  async #a(t) {
    let r = this.#r;
    return (await this.#e.db.introspection.getTables({ withInternalKyselyTables: true })).some((i) => i.name === t && (!r || i.schema === r));
  }
  async #p() {
    return !!await this.#e.db.withPlugin(this.#o).selectFrom(this.#i).where("id", "=", F_).select("id").executeTakeFirst();
  }
  async #h(t) {
    let r = this.#e.db.getExecutor().adapter, n = d({ lockTable: this.#e.migrationLockTableName ?? Io, lockRowId: F_, lockTableSchema: this.#e.migrationTableSchema }), i = /* @__PURE__ */ __name(async (o) => {
      try {
        await r.acquireMigrationLock(o, n);
        let s = await this.#_(o);
        if (s.migrations.length === 0)
          return { results: [] };
        let a = t(s);
        return a === void 0 ? { results: [] } : a < s.currentIndex ? await this.#v(o, s, a) : a > s.currentIndex ? await this.#E(o, s, a) : { results: [] };
      } finally {
        await r.releaseMigrationLock(o, n);
      }
    }, "i");
    return r.supportsTransactionalDdl ? this.#e.db.transaction().execute(i) : this.#e.db.connection().execute(i);
  }
  async #_(t) {
    let r = await this.#f(), n = await this.#y(t);
    return this.#g(r, n), d({ migrations: r, currentIndex: r.findIndex((i) => i.name === IS(n)) });
  }
  async #f() {
    let t = await this.#e.provider.getMigrations();
    return Object.keys(t).sort().map((r) => ({ ...t[r], name: r }));
  }
  async #y(t) {
    return (await t.withPlugin(this.#o).selectFrom(this.#n).select("name").orderBy("name").execute()).map((n) => n.name);
  }
  #g(t, r) {
    for (let n of r)
      if (!t.some((i) => i.name === n))
        throw new Error(`corrupted migrations: previously executed migration ${n} is missing`);
    for (let n = 0; n < r.length; ++n)
      if (t[n].name !== r[n])
        throw new Error(`corrupted migrations: expected previously executed migration ${r[n]} to be at index ${n} but ${t[n].name} was found in its place. New migrations must always have a name that comes alphabetically after the last executed migration.`);
  }
  async #v(t, r, n) {
    let i = [];
    for (let o = r.currentIndex; o > n; --o)
      i.push({ migrationName: r.migrations[o].name, direction: "Down", status: "NotExecuted" });
    for (let o = 0; o < i.length; ++o) {
      let s = r.migrations.find((a) => a.name === i[o].migrationName);
      try {
        s.down && (await s.down(t), await t.withPlugin(this.#o).deleteFrom(this.#n).where("name", "=", s.name).execute(), i[o] = { migrationName: s.name, direction: "Down", status: "Success" });
      } catch (a) {
        throw i[o] = { migrationName: s.name, direction: "Down", status: "Error" }, new rc({ error: a, results: i });
      }
    }
    return { results: i };
  }
  async #E(t, r, n) {
    let i = [];
    for (let o = r.currentIndex + 1; o <= n; ++o)
      i.push({ migrationName: r.migrations[o].name, direction: "Up", status: "NotExecuted" });
    for (let o = 0; o < i.length; ++o) {
      let s = r.migrations.find((a) => a.name === i[o].migrationName);
      try {
        await s.up(t), await t.withPlugin(this.#o).insertInto(this.#n).values({ name: s.name, timestamp: (/* @__PURE__ */ new Date()).toISOString() }).execute(), i[o] = { migrationName: s.name, direction: "Up", status: "Success" };
      } catch (a) {
        throw i[o] = { migrationName: s.name, direction: "Up", status: "Error" }, new rc({ error: a, results: i });
      }
    }
    return { results: i };
  }
};
var rc = class extends Error {
  static {
    __name(this, "rc");
  }
  #e;
  constructor(t) {
    super(), this.#e = t;
  }
  get resultSet() {
    return this.#e;
  }
};
var YF = /"/g;
var ad = class extends To {
  static {
    __name(this, "ad");
  }
  sanitizeIdentifier(t) {
    return t.replace(YF, '""');
  }
};
var JF = BigInt("3853314791062309107");
var cd = class extends Po {
  static {
    __name(this, "cd");
  }
  get supportsTransactionalDdl() {
    return true;
  }
  get supportsReturning() {
    return true;
  }
  async acquireMigrationLock(t) {
    await nt`select pg_advisory_xact_lock(${nt.lit(JF)})`.execute(t);
  }
  async releaseMigrationLock() {
  }
};
var XF = /`/g;
var ud = class extends To {
  static {
    __name(this, "ud");
  }
  getCurrentParameterPlaceholder() {
    return "?";
  }
  getLeftExplainOptionsWrapper() {
    return "";
  }
  getExplainOptionAssignment() {
    return "=";
  }
  getExplainOptionsDelimiter() {
    return " ";
  }
  getRightExplainOptionsWrapper() {
    return "";
  }
  getLeftIdentifierWrapper() {
    return "`";
  }
  getRightIdentifierWrapper() {
    return "`";
  }
  sanitizeIdentifier(t) {
    return t.replace(XF, "``");
  }
};
var dd = class {
  static {
    __name(this, "dd");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  async getSchemas() {
    return (await this.#e.selectFrom("information_schema.schemata").select("schema_name").$castTo().execute()).map((r) => ({ name: r.SCHEMA_NAME }));
  }
  async getTables(t = { withInternalKyselyTables: false }) {
    let r = this.#e.selectFrom("information_schema.columns as columns").innerJoin("information_schema.tables as tables", (i) => i.onRef("columns.TABLE_CATALOG", "=", "tables.TABLE_CATALOG").onRef("columns.TABLE_SCHEMA", "=", "tables.TABLE_SCHEMA").onRef("columns.TABLE_NAME", "=", "tables.TABLE_NAME")).select(["columns.COLUMN_NAME", "columns.COLUMN_DEFAULT", "columns.TABLE_NAME", "columns.TABLE_SCHEMA", "tables.TABLE_TYPE", "columns.IS_NULLABLE", "columns.DATA_TYPE", "columns.EXTRA"]).where("columns.TABLE_SCHEMA", "=", nt`database()`).orderBy("columns.TABLE_NAME").orderBy("columns.ORDINAL_POSITION").$castTo();
    t.withInternalKyselyTables || (r = r.where("columns.TABLE_NAME", "!=", nc).where("columns.TABLE_NAME", "!=", Io));
    let n = await r.execute();
    return this.#t(n);
  }
  async getMetadata(t) {
    return { tables: await this.getTables(t) };
  }
  #t(t) {
    return t.reduce((r, n) => {
      let i = r.find((o) => o.name === n.TABLE_NAME);
      return i || (i = d({ name: n.TABLE_NAME, isView: n.TABLE_TYPE === "VIEW", schema: n.TABLE_SCHEMA, columns: [] }), r.push(i)), i.columns.push(d({ name: n.COLUMN_NAME, dataType: n.DATA_TYPE, isNullable: n.IS_NULLABLE === "YES", isAutoIncrementing: n.EXTRA.toLowerCase().includes("auto_increment"), hasDefaultValue: n.COLUMN_DEFAULT !== null })), r;
    }, []);
  }
};
var v0 = "ea586330-2c93-47c8-908d-981d9d270f9d";
var ZF = 60 * 60;
var ld = class extends Po {
  static {
    __name(this, "ld");
  }
  get supportsTransactionalDdl() {
    return false;
  }
  get supportsReturning() {
    return false;
  }
  async acquireMigrationLock(t) {
    await nt`select get_lock(${nt.lit(v0)}, ${nt.lit(ZF)})`.execute(t);
  }
  async releaseMigrationLock(t) {
    await nt`select release_lock(${nt.lit(v0)})`.execute(t);
  }
};
var pd = class {
  static {
    __name(this, "pd");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  async init() {
  }
  async acquireConnection() {
    return new j_(this.#e);
  }
  async beginTransaction(t) {
    await t.beginTransaction();
  }
  async commitTransaction(t) {
    await t.commitTransaction();
  }
  async rollbackTransaction(t) {
    await t.rollbackTransaction();
  }
  async releaseConnection(t) {
  }
  async destroy() {
  }
};
var j_ = class {
  static {
    __name(this, "j_");
  }
  #e;
  #t;
  constructor(t) {
    this.#e = t;
  }
  async beginTransaction() {
    let t = await this.#e.client.beginTransaction({ secretArn: this.#e.secretArn, resourceArn: this.#e.resourceArn, database: this.#e.database });
    this.#t = t.transactionId;
  }
  async commitTransaction() {
    if (!this.#t)
      throw new Error("Cannot commit a transaction before creating it");
    await this.#e.client.commitTransaction({ secretArn: this.#e.secretArn, resourceArn: this.#e.resourceArn, transactionId: this.#t });
  }
  async rollbackTransaction() {
    if (!this.#t)
      throw new Error("Cannot rollback a transaction before creating it");
    await this.#e.client.rollbackTransaction({ secretArn: this.#e.secretArn, resourceArn: this.#e.resourceArn, transactionId: this.#t });
  }
  async executeQuery(t) {
    let r = await this.#e.client.executeStatement({ transactionId: this.#t, secretArn: this.#e.secretArn, resourceArn: this.#e.resourceArn, sql: t.sql, parameters: t.parameters, database: this.#e.database, includeResultMetadata: true });
    if (!r.columnMetadata) {
      let o = BigInt(r.numberOfRecordsUpdated || 0);
      return { numAffectedRows: o, numUpdatedOrDeletedRows: o, insertId: r.generatedFields && r.generatedFields.length > 0 ? BigInt(r.generatedFields[0].longValue) : void 0, rows: [] };
    }
    return { rows: r.records?.filter((o) => o.length !== 0).map((o) => Object.fromEntries(o.map((s, a) => [r.columnMetadata[a].label || r.columnMetadata[a].name, s.isNull ? null : s.stringValue ?? s.doubleValue ?? s.longValue ?? s.booleanValue ?? this.#r(s.arrayValue) ?? s.blobValue ?? null]))) || [] };
  }
  async *streamQuery(t, r) {
    throw new Error("Data API does not support streaming");
  }
  #r(t) {
    if (t)
      return t.stringValues ?? t.doubleValues ?? t.longValues ?? t.booleanValues ?? t.arrayValues?.map(this.#r);
  }
};
var fd = class extends ad {
  static {
    __name(this, "fd");
  }
  appendValue(t) {
    let r = this.numParameters;
    this.append(this.getCurrentParameterPlaceholder()), this.addParameter({ name: r.toString(), ...E0(t) });
  }
  getCurrentParameterPlaceholder() {
    return ":" + this.numParameters;
  }
};
var md = class extends ud {
  static {
    __name(this, "md");
  }
  appendValue(t) {
    let r = this.numParameters;
    this.append(this.getCurrentParameterPlaceholder()), this.addParameter({ name: r.toString(), ...E0(t) });
  }
  getCurrentParameterPlaceholder() {
    return ":" + this.numParameters;
  }
};
function E0(e35) {
  switch (typeof e35) {
    case "bigint":
      return { value: { doubleValue: Number(e35) } };
    case "boolean":
      return { value: { booleanValue: e35 } };
    case "number":
      return Number.isInteger(e35) ? { value: { longValue: e35 } } : { value: { doubleValue: e35 } };
    case "object":
      if (e35 == null)
        return { value: { isNull: true } };
      if (Buffer.isBuffer(e35))
        return { value: { blobValue: e35 } };
      if (e35 instanceof Date)
        return { typeHint: "TIMESTAMP", value: { stringValue: w0(e35.toISOString()) } };
      if (e35?.value && rL(e35.value))
        return e35.typeHint && e35.value.stringValue && typeof e35.value.stringValue == "string" && (e35.value.stringValue = eL(e35.typeHint, e35.value.stringValue)), e35;
      break;
    case "string":
      return { value: { stringValue: e35 } };
  }
  throw new B_("Could not serialize value");
}
__name(E0, "E0");
function eL(e35, t) {
  switch (e35) {
    case "DATE":
      return U_(t).slice(0, 10);
    case "TIME":
      return t.match(/^\d{4}-\d{2}-\d{2}/) ? U_(t).slice(11, 23) : tL(t);
    case "TIMESTAMP":
      return w0(U_(t));
  }
  return t;
}
__name(eL, "eL");
function tL(e35) {
  let t = (e35 || "00:00:00").split(":");
  for (; t.length < 3; )
    t.push("00");
  return t.join(":").slice(0, 12);
}
__name(tL, "tL");
function w0(e35) {
  return e35.replace("T", " ").slice(0, 23);
}
__name(w0, "w0");
function U_(e35) {
  return new Date(Date.parse(e35)).toISOString();
}
__name(U_, "U_");
function rL(e35) {
  for (let t of iL)
    if (e35[t])
      return true;
  if (e35.arrayValue) {
    for (let t of nL)
      if (e35.arrayValue?.[t])
        return true;
  }
  return false;
}
__name(rL, "rL");
var B_ = class e34 extends Error {
  static {
    __name(this, "e");
  }
  constructor(t) {
    super(t), this.name = e34.name;
  }
};
var nL = ["booleanValues", "doubleValues", "longValues", "stringValues"];
var iL = ["blobValue", "booleanValue", "doubleValue", "isNull", "longValue", "stringValue"];
var hd = class {
  static {
    __name(this, "hd");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  async getSchemas() {
    return (await this.#e.selectFrom("pg_catalog.pg_namespace").select("nspname").$castTo().execute()).map((r) => ({ name: r.nspname }));
  }
  async getTables(t = { withInternalKyselyTables: false }) {
    let r = this.#e.selectFrom("pg_catalog.pg_attribute as a").innerJoin("pg_catalog.pg_class as c", "a.attrelid", "c.oid").innerJoin("pg_catalog.pg_namespace as ns", "c.relnamespace", "ns.oid").innerJoin("pg_catalog.pg_type as typ", "a.atttypid", "typ.oid").innerJoin("pg_catalog.pg_namespace as dtns", "typ.typnamespace", "dtns.oid").select(["a.attname as column", "a.attnotnull as not_null", "a.atthasdef as has_default", "c.relname as table", "c.relkind as table_type", "ns.nspname as schema", "typ.typname as type", "dtns.nspname as type_schema", this.#e.selectFrom("pg_class").select(nt`true`.as("auto_incrementing")).whereRef("relnamespace", "=", "c.relnamespace").where("relkind", "=", "S").where("relname", "=", nt`c.relname || '_' || a.attname || '_seq'`).as("auto_incrementing")]).where((i) => i.where("c.relkind", "=", "r").orWhere("c.relkind", "=", "v")).where("ns.nspname", "!~", "^pg_").where("ns.nspname", "!=", "information_schema").where("a.attnum", ">=", 0).where("a.attisdropped", "!=", true).orderBy("ns.nspname").orderBy("c.relname").orderBy("a.attnum").$castTo();
    t.withInternalKyselyTables || (r = r.where("c.relname", "!=", nc).where("c.relname", "!=", Io));
    let n = await r.execute();
    return this.#t(n);
  }
  async getMetadata(t) {
    return { tables: await this.getTables(t) };
  }
  #t(t) {
    return t.reduce((r, n) => {
      let i = r.find((o) => o.name === n.table && o.schema === n.schema);
      return i || (i = Object.freeze({ name: n.table, isView: n.table_type === "v", schema: n.schema, columns: [] }), r.push(i)), i.columns.push(Object.freeze({ name: n.column, dataType: n.type, dataTypeSchema: n.type_schema, isNullable: !n.not_null, isAutoIncrementing: !!n.auto_incrementing, hasDefaultValue: n.has_default })), r;
    }, []);
  }
};
var _d = class {
  static {
    __name(this, "_d");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  createAdapter() {
    if (this.#e.mode === "postgres")
      return new cd();
    if (this.#e.mode === "mysql")
      return new ld();
    throw new Error("Unknown mode " + this.#e.mode);
  }
  createDriver() {
    return new pd(this.#e.driver);
  }
  createQueryCompiler() {
    if (this.#e.mode === "postgres")
      return new fd();
    if (this.#e.mode === "mysql")
      return new md();
    throw new Error("Unknown mode " + this.#e.mode);
  }
  createIntrospector(t) {
    if (this.#e.mode === "postgres")
      return new hd(t);
    if (this.#e.mode === "mysql")
      return new dd(t);
    throw new Error("Unknown mode " + this.#e.mode);
  }
};
var lF = gF(dF(), 1);
async function ANe(e35) {
  console.log("initializing db");
  let t = new Ao({ dialect: new _d({ mode: process.env.RDS_ENGINE_MODE, driver: { client: new lF.RDSData({}), database: e35?.database || process.env.RDS_DATABASE, secretArn: process.env.RDS_SECRET, resourceArn: process.env.RDS_ARN } }) });
  console.log("creating migrator");
  let r = new sd({ db: t, provider: new xS(VZ.resolve(process.env.RDS_MIGRATIONS_PATH)) });
  if (console.log("processing event", e35), !e35.type || e35.type === "latest") {
    console.log("migrating to latest");
    let n = await r.migrateToLatest(), i = n.error || n.results?.find((o) => o.status === "Error");
    if (i)
      throw i;
    return n;
  }
  if (e35.type === "to") {
    if (console.log("migrating to", e35.data.name), !e35.data.name)
      return await r.migrateTo(L_);
    let n = await r.migrateTo(e35.data.name), i = n.error || n.results?.find((o) => o.status === "Error");
    if (i)
      throw i;
    return n;
  }
  if (e35.type === "list")
    return console.log("listing migrations"), await r.getMigrations();
}
__name(ANe, "ANe");
var xS = class {
  static {
    __name(this, "xS");
  }
  #e;
  constructor(t) {
    this.#e = t;
  }
  async getMigrations() {
    let t = await import("fs/promises"), r = await import("path"), n = {}, i = await t.readdir(this.#e);
    for (let o of i)
      if (o.endsWith(".js") || o.endsWith(".cjs") || o.endsWith(".mjs")) {
        let [s] = r.basename(o).split("."), a = r.join(this.#e, o);
        if (process.env.LAMBDA_TASK_ROOT) {
          let l = await import(a);
          n[s] = l;
          continue;
        }
        let u = a.replace(/(mjs|cjs|js)$/g, `${Date.now()}.$1`);
        try {
          await t.copyFile(a, u);
          let l = await import($Z.pathToFileURL(u).href);
          n[s] = l;
        } catch (l) {
          console.error(l);
        }
        await t.rm(u);
      }
    return n;
  }
};
export {
  ANe as handler
};
/*! Bundled license information:

sst/support/rds-migrator/index.mjs:
  (*! Bundled license information:
  
  tslib/tslib.es6.js:
    (*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** *)
  *)
*/
//# sourceMappingURL=index.mjs.map
