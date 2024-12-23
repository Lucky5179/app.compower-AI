import {
  r as ref,
  c as createElementBlock,
  e as unref,
  a as createBaseVNode,
  f as createVNode,
  g as createCommentVNode,
  o as openBlock,
  h as resolveComponent,
} from "./index-nWkXIawp.js";
function ownKeys(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e &&
      (o = o.filter(function (h) {
        return Object.getOwnPropertyDescriptor(t, h).enumerable;
      })),
      r.push.apply(r, o);
  }
  return r;
}
function _objectSpread2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ownKeys(Object(r), !0).forEach(function (o) {
          _defineProperty(t, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : ownKeys(Object(r)).forEach(function (o) {
          Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
        });
  }
  return t;
}
function asyncGeneratorStep(t, e, r, o, h, l, y) {
  try {
    var D = t[l](y),
      j = D.value;
  } catch (Y) {
    return void r(Y);
  }
  D.done ? e(j) : Promise.resolve(j).then(o, h);
}
function _asyncToGenerator(t) {
  return function () {
    var e = this,
      r = arguments;
    return new Promise(function (o, h) {
      var l = t.apply(e, r);
      function y(j) {
        asyncGeneratorStep(l, o, h, y, D, "next", j);
      }
      function D(j) {
        asyncGeneratorStep(l, o, h, y, D, "throw", j);
      }
      y(void 0);
    });
  };
}
function _defineProperty(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function _taggedTemplateLiteral(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(
      Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
    )
  );
}
function __decorate(t, e, r, o) {
  var h,
    l = arguments.length,
    y =
      l < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    y = Reflect.decorate(t, e, r, o);
  else
    for (var D = t.length - 1; D >= 0; D--)
      (h = t[D]) && (y = (l < 3 ? h(y) : l > 3 ? h(e, r, y) : h(e, r)) || y);
  return l > 3 && y && Object.defineProperty(e, r, y), y;
}
var t$3 =
    window.ShadowRoot &&
    (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  e$8 = Symbol(),
  n$5 = new Map();
class s$3 {
  constructor(e, r) {
    if (((this._$cssResult$ = !0), r !== e$8))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = e;
  }
  get styleSheet() {
    var e = n$5.get(this.cssText);
    return (
      t$3 &&
        e === void 0 &&
        (n$5.set(this.cssText, (e = new CSSStyleSheet())),
        e.replaceSync(this.cssText)),
      e
    );
  }
  toString() {
    return this.cssText;
  }
}
var o$5 = (t) => new s$3(typeof t == "string" ? t : t + "", e$8),
  r$3 = function (t) {
    for (
      var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1;
      o < e;
      o++
    )
      r[o - 1] = arguments[o];
    var h =
      t.length === 1
        ? t[0]
        : r.reduce(
            (l, y, D) =>
              l +
              ((j) => {
                if (j._$cssResult$ === !0) return j.cssText;
                if (typeof j == "number") return j;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    j +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(y) +
              t[D + 1],
            t[0]
          );
    return new s$3(h, e$8);
  },
  i$3 = (t, e) => {
    t$3
      ? (t.adoptedStyleSheets = e.map((r) =>
          r instanceof CSSStyleSheet ? r : r.styleSheet
        ))
      : e.forEach((r) => {
          var o = document.createElement("style"),
            h = window.litNonce;
          h !== void 0 && o.setAttribute("nonce", h),
            (o.textContent = r.cssText),
            t.appendChild(o);
        });
  },
  S$1 = t$3
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((e) => {
              var r = "";
              for (var o of e.cssRules) r += o.cssText;
              return o$5(r);
            })(t)
          : t,
  s$2,
  e$7 = window.trustedTypes,
  r$2 = e$7 ? e$7.emptyScript : "",
  h$2 = window.reactiveElementPolyfillSupport,
  o$4 = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? r$2 : null;
          break;
        case Object:
        case Array:
          t = t == null ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      var r = t;
      switch (e) {
        case Boolean:
          r = t !== null;
          break;
        case Number:
          r = t === null ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            r = JSON.parse(t);
          } catch {
            r = null;
          }
      }
      return r;
    },
  },
  n$4 = (t, e) => e !== t && (e == e || t == t),
  l$3 = {
    attribute: !0,
    type: String,
    converter: o$4,
    reflect: !1,
    hasChanged: n$4,
  },
  t$2;
class a$1 extends HTMLElement {
  constructor() {
    super(),
      (this._$Et = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Ei = null),
      this.o();
  }
  static addInitializer(e) {
    var r;
    ((r = this.l) !== null && r !== void 0) || (this.l = []), this.l.push(e);
  }
  static get observedAttributes() {
    this.finalize();
    var e = [];
    return (
      this.elementProperties.forEach((r, o) => {
        var h = this._$Eh(o, r);
        h !== void 0 && (this._$Eu.set(h, o), e.push(h));
      }),
      e
    );
  }
  static createProperty(e) {
    var r =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : l$3;
    if (
      (r.state && (r.attribute = !1),
      this.finalize(),
      this.elementProperties.set(e, r),
      !r.noAccessor && !this.prototype.hasOwnProperty(e))
    ) {
      var o = typeof e == "symbol" ? Symbol() : "__" + e,
        h = this.getPropertyDescriptor(e, o, r);
      h !== void 0 && Object.defineProperty(this.prototype, e, h);
    }
  }
  static getPropertyDescriptor(e, r, o) {
    return {
      get() {
        return this[r];
      },
      set(h) {
        var l = this[e];
        (this[r] = h), this.requestUpdate(e, l, o);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || l$3;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    var e = Object.getPrototypeOf(this);
    if (
      (e.finalize(),
      (this.elementProperties = new Map(e.elementProperties)),
      (this._$Eu = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      var r = this.properties,
        o = [
          ...Object.getOwnPropertyNames(r),
          ...Object.getOwnPropertySymbols(r),
        ];
      for (var h of o) this.createProperty(h, r[h]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(e) {
    var r = [];
    if (Array.isArray(e)) {
      var o = new Set(e.flat(1 / 0).reverse());
      for (var h of o) r.unshift(S$1(h));
    } else e !== void 0 && r.push(S$1(e));
    return r;
  }
  static _$Eh(e, r) {
    var o = r.attribute;
    return o === !1
      ? void 0
      : typeof o == "string"
      ? o
      : typeof e == "string"
      ? e.toLowerCase()
      : void 0;
  }
  o() {
    var e;
    (this._$Ep = new Promise((r) => (this.enableUpdating = r))),
      (this._$AL = new Map()),
      this._$Em(),
      this.requestUpdate(),
      (e = this.constructor.l) === null ||
        e === void 0 ||
        e.forEach((r) => r(this));
  }
  addController(e) {
    var r, o;
    ((r = this._$Eg) !== null && r !== void 0 ? r : (this._$Eg = [])).push(e),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((o = e.hostConnected) === null || o === void 0 || o.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$Eg) === null ||
      r === void 0 ||
      r.splice(this._$Eg.indexOf(e) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((e, r) => {
      this.hasOwnProperty(r) && (this._$Et.set(r, this[r]), delete this[r]);
    });
  }
  createRenderRoot() {
    var e,
      r =
        (e = this.shadowRoot) !== null && e !== void 0
          ? e
          : this.attachShadow(this.constructor.shadowRootOptions);
    return i$3(r, this.constructor.elementStyles), r;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (e = this._$Eg) === null ||
        e === void 0 ||
        e.forEach((r) => {
          var o;
          return (o = r.hostConnected) === null || o === void 0
            ? void 0
            : o.call(r);
        });
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    (e = this._$Eg) === null ||
      e === void 0 ||
      e.forEach((r) => {
        var o;
        return (o = r.hostDisconnected) === null || o === void 0
          ? void 0
          : o.call(r);
      });
  }
  attributeChangedCallback(e, r, o) {
    this._$AK(e, o);
  }
  _$ES(e, r) {
    var o,
      h,
      l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : l$3,
      y = this.constructor._$Eh(e, l);
    if (y !== void 0 && l.reflect === !0) {
      var D = (
        (h =
          (o = l.converter) === null || o === void 0
            ? void 0
            : o.toAttribute) !== null && h !== void 0
          ? h
          : o$4.toAttribute
      )(r, l.type);
      (this._$Ei = e),
        D == null ? this.removeAttribute(y) : this.setAttribute(y, D),
        (this._$Ei = null);
    }
  }
  _$AK(e, r) {
    var o,
      h,
      l,
      y = this.constructor,
      D = y._$Eu.get(e);
    if (D !== void 0 && this._$Ei !== D) {
      var j = y.getPropertyOptions(D),
        Y = j.converter,
        B =
          (l =
            (h =
              (o = Y) === null || o === void 0 ? void 0 : o.fromAttribute) !==
              null && h !== void 0
              ? h
              : typeof Y == "function"
              ? Y
              : null) !== null && l !== void 0
            ? l
            : o$4.fromAttribute;
      (this._$Ei = D), (this[D] = B(r, j.type)), (this._$Ei = null);
    }
  }
  requestUpdate(e, r, o) {
    var h = !0;
    e !== void 0 &&
      (((o = o || this.constructor.getPropertyOptions(e)).hasChanged || n$4)(
        this[e],
        r
      )
        ? (this._$AL.has(e) || this._$AL.set(e, r),
          o.reflect === !0 &&
            this._$Ei !== e &&
            (this._$E_ === void 0 && (this._$E_ = new Map()),
            this._$E_.set(e, o)))
        : (h = !1)),
      !this.isUpdatePending && h && (this._$Ep = this._$EC());
  }
  _$EC() {
    var e = this;
    return _asyncToGenerator(function* () {
      e.isUpdatePending = !0;
      try {
        yield e._$Ep;
      } catch (o) {
        Promise.reject(o);
      }
      var r = e.scheduleUpdate();
      return r != null && (yield r), !e.isUpdatePending;
    })();
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (this.isUpdatePending) {
      this.hasUpdated,
        this._$Et &&
          (this._$Et.forEach((h, l) => (this[l] = h)), (this._$Et = void 0));
      var r = !1,
        o = this._$AL;
      try {
        (r = this.shouldUpdate(o))
          ? (this.willUpdate(o),
            (e = this._$Eg) === null ||
              e === void 0 ||
              e.forEach((h) => {
                var l;
                return (l = h.hostUpdate) === null || l === void 0
                  ? void 0
                  : l.call(h);
              }),
            this.update(o))
          : this._$EU();
      } catch (h) {
        throw ((r = !1), this._$EU(), h);
      }
      r && this._$AE(o);
    }
  }
  willUpdate(e) {}
  _$AE(e) {
    var r;
    (r = this._$Eg) === null ||
      r === void 0 ||
      r.forEach((o) => {
        var h;
        return (h = o.hostUpdated) === null || h === void 0
          ? void 0
          : h.call(o);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
      this.updated(e);
  }
  _$EU() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$E_ !== void 0 &&
      (this._$E_.forEach((r, o) => this._$ES(o, this[o], r)),
      (this._$E_ = void 0)),
      this._$EU();
  }
  updated(e) {}
  firstUpdated(e) {}
}
(a$1.finalized = !0),
  (a$1.elementProperties = new Map()),
  (a$1.elementStyles = []),
  (a$1.shadowRootOptions = { mode: "open" }),
  h$2 == null || h$2({ ReactiveElement: a$1 }),
  ((s$2 = globalThis.reactiveElementVersions) !== null && s$2 !== void 0
    ? s$2
    : (globalThis.reactiveElementVersions = [])
  ).push("1.2.1");
var i$2 = globalThis.trustedTypes,
  s$1 = i$2 ? i$2.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
  e$6 = "lit$".concat((Math.random() + "").slice(9), "$"),
  o$3 = "?" + e$6,
  n$3 = "<".concat(o$3, ">"),
  l$2 = document,
  h$1 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return l$2.createComment(t);
  },
  r$1 = (t) => t === null || (typeof t != "object" && typeof t != "function"),
  d = Array.isArray,
  u = (t) => {
    var e;
    return (
      d(t) ||
      typeof ((e = t) === null || e === void 0 ? void 0 : e[Symbol.iterator]) ==
        "function"
    );
  },
  c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  v = /-->/g,
  a = />/g,
  f =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  _ = /'/g,
  m = /"/g,
  g = /^(?:script|style|textarea)$/i,
  p = (t) =>
    function (e) {
      for (
        var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), h = 1;
        h < r;
        h++
      )
        o[h - 1] = arguments[h];
      return { _$litType$: t, strings: e, values: o };
    },
  $ = p(1),
  b = Symbol.for("lit-noChange"),
  w = Symbol.for("lit-nothing"),
  T = new WeakMap(),
  x = (t, e, r) => {
    var o,
      h,
      l =
        (o = r == null ? void 0 : r.renderBefore) !== null && o !== void 0
          ? o
          : e,
      y = l._$litPart$;
    if (y === void 0) {
      var D =
        (h = r == null ? void 0 : r.renderBefore) !== null && h !== void 0
          ? h
          : null;
      l._$litPart$ = y = new N(e.insertBefore(h$1(), D), D, void 0, r ?? {});
    }
    return y._$AI(t), y;
  },
  A = l$2.createTreeWalker(l$2, 129, null, !1),
  C = (t, e) => {
    for (
      var r, o = t.length - 1, h = [], l = e === 2 ? "<svg>" : "", y = c, D = 0;
      D < o;
      D++
    ) {
      for (
        var j = t[D], Y = void 0, B = void 0, q = -1, O = 0;
        O < j.length && ((y.lastIndex = O), (B = y.exec(j)) !== null);

      )
        (O = y.lastIndex),
          y === c
            ? B[1] === "!--"
              ? (y = v)
              : B[1] !== void 0
              ? (y = a)
              : B[2] !== void 0
              ? (g.test(B[2]) && (r = RegExp("</" + B[2], "g")), (y = f))
              : B[3] !== void 0 && (y = f)
            : y === f
            ? B[0] === ">"
              ? ((y = r ?? c), (q = -1))
              : B[1] === void 0
              ? (q = -2)
              : ((q = y.lastIndex - B[2].length),
                (Y = B[1]),
                (y = B[3] === void 0 ? f : B[3] === '"' ? m : _))
            : y === m || y === _
            ? (y = f)
            : y === v || y === a
            ? (y = c)
            : ((y = f), (r = void 0));
      var W = y === f && t[D + 1].startsWith("/>") ? " " : "";
      l +=
        y === c
          ? j + n$3
          : q >= 0
          ? (h.push(Y), j.slice(0, q) + "$lit$" + j.slice(q) + e$6 + W)
          : j + e$6 + (q === -2 ? (h.push(void 0), D) : W);
    }
    var G = l + (t[o] || "<?>") + (e === 2 ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [s$1 !== void 0 ? s$1.createHTML(G) : G, h];
  };
class E {
  constructor(e, r) {
    var o,
      { strings: h, _$litType$: l } = e;
    this.parts = [];
    var y = 0,
      D = 0,
      j = h.length - 1,
      Y = this.parts,
      [B, q] = C(h, l);
    if (
      ((this.el = E.createElement(B, r)),
      (A.currentNode = this.el.content),
      l === 2)
    ) {
      var O = this.el.content,
        W = O.firstChild;
      W.remove(), O.append(...W.childNodes);
    }
    for (; (o = A.nextNode()) !== null && Y.length < j; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) {
          var G = [];
          for (var F of o.getAttributeNames())
            if (F.endsWith("$lit$") || F.startsWith(e$6)) {
              var R = q[D++];
              if ((G.push(F), R !== void 0)) {
                var U = o.getAttribute(R.toLowerCase() + "$lit$").split(e$6),
                  X = /([.?@])?(.*)/.exec(R);
                Y.push({
                  type: 1,
                  index: y,
                  name: X[2],
                  strings: U,
                  ctor:
                    X[1] === "." ? M : X[1] === "?" ? H : X[1] === "@" ? I : S,
                });
              } else Y.push({ type: 6, index: y });
            }
          for (var Z of G) o.removeAttribute(Z);
        }
        if (g.test(o.tagName)) {
          var J = o.textContent.split(e$6),
            Q = J.length - 1;
          if (Q > 0) {
            o.textContent = i$2 ? i$2.emptyScript : "";
            for (var st = 0; st < Q; st++)
              o.append(J[st], h$1()),
                A.nextNode(),
                Y.push({ type: 2, index: ++y });
            o.append(J[Q], h$1());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === o$3) Y.push({ type: 2, index: y });
        else
          for (var it = -1; (it = o.data.indexOf(e$6, it + 1)) !== -1; )
            Y.push({ type: 7, index: y }), (it += e$6.length - 1);
      y++;
    }
  }
  static createElement(e, r) {
    var o = l$2.createElement("template");
    return (o.innerHTML = e), o;
  }
}
function P(t, e) {
  var r,
    o,
    h,
    l,
    y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t,
    D = arguments.length > 3 ? arguments[3] : void 0;
  if (e === b) return e;
  var j =
      D !== void 0
        ? (r = y._$Cl) === null || r === void 0
          ? void 0
          : r[D]
        : y._$Cu,
    Y = r$1(e) ? void 0 : e._$litDirective$;
  return (
    (j == null ? void 0 : j.constructor) !== Y &&
      ((o = j == null ? void 0 : j._$AO) === null ||
        o === void 0 ||
        o.call(j, !1),
      Y === void 0 ? (j = void 0) : (j = new Y(t))._$AT(t, y, D),
      D !== void 0
        ? (((h = (l = y)._$Cl) !== null && h !== void 0 ? h : (l._$Cl = []))[
            D
          ] = j)
        : (y._$Cu = j)),
    j !== void 0 && (e = P(t, j._$AS(t, e.values), j, D)),
    e
  );
}
class V {
  constructor(e, r) {
    (this.v = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = r);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(e) {
    var r,
      {
        el: { content: o },
        parts: h,
      } = this._$AD,
      l = (
        (r = e == null ? void 0 : e.creationScope) !== null && r !== void 0
          ? r
          : l$2
      ).importNode(o, !0);
    A.currentNode = l;
    for (var y = A.nextNode(), D = 0, j = 0, Y = h[0]; Y !== void 0; ) {
      if (D === Y.index) {
        var B = void 0;
        Y.type === 2
          ? (B = new N(y, y.nextSibling, this, e))
          : Y.type === 1
          ? (B = new Y.ctor(y, Y.name, Y.strings, this, e))
          : Y.type === 6 && (B = new L(y, this, e)),
          this.v.push(B),
          (Y = h[++j]);
      }
      D !== (Y == null ? void 0 : Y.index) && ((y = A.nextNode()), D++);
    }
    return l;
  }
  m(e) {
    var r = 0;
    for (var o of this.v)
      o !== void 0 &&
        (o.strings !== void 0
          ? (o._$AI(e, o, r), (r += o.strings.length - 2))
          : o._$AI(e[r])),
        r++;
  }
}
class N {
  constructor(e, r, o, h) {
    var l;
    (this.type = 2),
      (this._$AH = w),
      (this._$AN = void 0),
      (this._$AA = e),
      (this._$AB = r),
      (this._$AM = o),
      (this.options = h),
      (this._$Cg =
        (l = h == null ? void 0 : h.isConnected) === null || l === void 0 || l);
  }
  get _$AU() {
    var e, r;
    return (r = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !==
      null && r !== void 0
      ? r
      : this._$Cg;
  }
  get parentNode() {
    var e = this._$AA.parentNode,
      r = this._$AM;
    return r !== void 0 && e.nodeType === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e) {
    (e = P(
      this,
      e,
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this
    )),
      r$1(e)
        ? e === w || e == null || e === ""
          ? (this._$AH !== w && this._$AR(), (this._$AH = w))
          : e !== this._$AH && e !== b && this.$(e)
        : e._$litType$ !== void 0
        ? this.T(e)
        : e.nodeType !== void 0
        ? this.S(e)
        : u(e)
        ? this.A(e)
        : this.$(e);
  }
  M(e) {
    var r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this._$AB;
    return this._$AA.parentNode.insertBefore(e, r);
  }
  S(e) {
    this._$AH !== e && (this._$AR(), (this._$AH = this.M(e)));
  }
  $(e) {
    this._$AH !== w && r$1(this._$AH)
      ? (this._$AA.nextSibling.data = e)
      : this.S(l$2.createTextNode(e)),
      (this._$AH = e);
  }
  T(e) {
    var r,
      { values: o, _$litType$: h } = e,
      l =
        typeof h == "number"
          ? this._$AC(e)
          : (h.el === void 0 && (h.el = E.createElement(h.h, this.options)), h);
    if (((r = this._$AH) === null || r === void 0 ? void 0 : r._$AD) === l)
      this._$AH.m(o);
    else {
      var y = new V(l, this),
        D = y.p(this.options);
      y.m(o), this.S(D), (this._$AH = y);
    }
  }
  _$AC(e) {
    var r = T.get(e.strings);
    return r === void 0 && T.set(e.strings, (r = new E(e))), r;
  }
  A(e) {
    d(this._$AH) || ((this._$AH = []), this._$AR());
    var r,
      o = this._$AH,
      h = 0;
    for (var l of e)
      h === o.length
        ? o.push((r = new N(this.M(h$1()), this.M(h$1()), this, this.options)))
        : (r = o[h]),
        r._$AI(l),
        h++;
    h < o.length && (this._$AR(r && r._$AB.nextSibling, h), (o.length = h));
  }
  _$AR() {
    var e,
      r =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this._$AA.nextSibling,
      o = arguments.length > 1 ? arguments[1] : void 0;
    for (
      (e = this._$AP) === null || e === void 0 || e.call(this, !1, !0, o);
      r && r !== this._$AB;

    ) {
      var h = r.nextSibling;
      r.remove(), (r = h);
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 &&
      ((this._$Cg = e),
      (r = this._$AP) === null || r === void 0 || r.call(this, e));
  }
}
class S {
  constructor(e, r, o, h, l) {
    (this.type = 1),
      (this._$AH = w),
      (this._$AN = void 0),
      (this.element = e),
      (this.name = r),
      (this._$AM = h),
      (this.options = l),
      o.length > 2 || o[0] !== "" || o[1] !== ""
        ? ((this._$AH = Array(o.length - 1).fill(new String())),
          (this.strings = o))
        : (this._$AH = w);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    var r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this,
      o = arguments.length > 2 ? arguments[2] : void 0,
      h = arguments.length > 3 ? arguments[3] : void 0,
      l = this.strings,
      y = !1;
    if (l === void 0)
      (e = P(this, e, r, 0)),
        (y = !r$1(e) || (e !== this._$AH && e !== b)) && (this._$AH = e);
    else {
      var D,
        j,
        Y = e;
      for (e = l[0], D = 0; D < l.length - 1; D++)
        (j = P(this, Y[o + D], r, D)) === b && (j = this._$AH[D]),
          y || (y = !r$1(j) || j !== this._$AH[D]),
          j === w ? (e = w) : e !== w && (e += (j ?? "") + l[D + 1]),
          (this._$AH[D] = j);
    }
    y && !h && this.k(e);
  }
  k(e) {
    e === w
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, e ?? "");
  }
}
class M extends S {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  k(e) {
    this.element[this.name] = e === w ? void 0 : e;
  }
}
var k = i$2 ? i$2.emptyScript : "";
class H extends S {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  k(e) {
    e && e !== w
      ? this.element.setAttribute(this.name, k)
      : this.element.removeAttribute(this.name);
  }
}
class I extends S {
  constructor(e, r, o, h, l) {
    super(e, r, o, h, l), (this.type = 5);
  }
  _$AI(e) {
    var r;
    if (
      (e =
        (r = P(
          this,
          e,
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this,
          0
        )) !== null && r !== void 0
          ? r
          : w) !== b
    ) {
      var o = this._$AH,
        h =
          (e === w && o !== w) ||
          e.capture !== o.capture ||
          e.once !== o.once ||
          e.passive !== o.passive,
        l = e !== w && (o === w || h);
      h && this.element.removeEventListener(this.name, this, o),
        l && this.element.addEventListener(this.name, this, e),
        (this._$AH = e);
    }
  }
  handleEvent(e) {
    var r, o;
    typeof this._$AH == "function"
      ? this._$AH.call(
          (o =
            (r = this.options) === null || r === void 0 ? void 0 : r.host) !==
            null && o !== void 0
            ? o
            : this.element,
          e
        )
      : this._$AH.handleEvent(e);
  }
}
class L {
  constructor(e, r, o) {
    (this.element = e),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = r),
      (this.options = o);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    P(this, e);
  }
}
var z = window.litHtmlPolyfillSupport,
  l$1,
  o$2;
z == null || z(E, N),
  ((t$2 = globalThis.litHtmlVersions) !== null && t$2 !== void 0
    ? t$2
    : (globalThis.litHtmlVersions = [])
  ).push("2.1.2");
class s extends a$1 {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var e,
      r,
      o = super.createRenderRoot();
    return (
      ((e = (r = this.renderOptions).renderBefore) !== null && e !== void 0) ||
        (r.renderBefore = o.firstChild),
      o
    );
  }
  update(e) {
    var r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(e),
      (this._$Dt = x(r, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var e;
    super.connectedCallback(),
      (e = this._$Dt) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      (e = this._$Dt) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return b;
  }
}
(s.finalized = !0),
  (s._$litElement$ = !0),
  (l$1 = globalThis.litElementHydrateSupport) === null ||
    l$1 === void 0 ||
    l$1.call(globalThis, { LitElement: s });
var n$2 = globalThis.litElementPolyfillSupport;
n$2 == null || n$2({ LitElement: s });
((o$2 = globalThis.litElementVersions) !== null && o$2 !== void 0
  ? o$2
  : (globalThis.litElementVersions = [])
).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var n$1 = (t) => (e) =>
    typeof e == "function"
      ? ((r, o) => (window.customElements.define(r, o), o))(t, e)
      : ((r, o) => {
          var { kind: h, elements: l } = o;
          return {
            kind: h,
            elements: l,
            finisher(y) {
              window.customElements.define(r, y);
            },
          };
        })(t, e),
  i$1 = (t, e) =>
    e.kind === "method" && e.descriptor && !("value" in e.descriptor)
      ? _objectSpread2(
          _objectSpread2({}, e),
          {},
          {
            finisher(r) {
              r.createProperty(e.key, t);
            },
          }
        )
      : {
          kind: "field",
          key: Symbol(),
          placement: "own",
          descriptor: {},
          originalKey: e.key,
          initializer() {
            typeof e.initializer == "function" &&
              (this[e.key] = e.initializer.call(this));
          },
          finisher(r) {
            r.createProperty(e.key, t);
          },
        };
function e$5(t) {
  return (e, r) =>
    r !== void 0
      ? ((o, h, l) => {
          h.constructor.createProperty(l, o);
        })(t, e, r)
      : i$1(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var o$1 = (t) => {
    var { finisher: e, descriptor: r } = t;
    return (o, h) => {
      var l;
      if (h === void 0) {
        var y = (l = o.originalKey) !== null && l !== void 0 ? l : o.key,
          D =
            r != null
              ? {
                  kind: "method",
                  placement: "prototype",
                  key: y,
                  descriptor: r(o.key),
                }
              : _objectSpread2(_objectSpread2({}, o), {}, { key: y });
        return (
          e != null &&
            (D.finisher = function (Y) {
              e(Y, y);
            }),
          D
        );
      }
      var j = o.constructor;
      r !== void 0 && Object.defineProperty(o, h, r(h)), e == null || e(j, h);
    };
  },
  n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function i(t, e) {
  return o$1({
    descriptor: (r) => {
      var o = {
        get() {
          var l, y;
          return (y =
            (l = this.renderRoot) === null || l === void 0
              ? void 0
              : l.querySelector(t)) !== null && y !== void 0
            ? y
            : null;
        },
        enumerable: !0,
        configurable: !0,
      };
      if (e) {
        var h = typeof r == "symbol" ? Symbol() : "__" + r;
        o.get = function () {
          var l, y;
          return (
            this[h] === void 0 &&
              (this[h] =
                (y =
                  (l = this.renderRoot) === null || l === void 0
                    ? void 0
                    : l.querySelector(t)) !== null && y !== void 0
                  ? y
                  : null),
            this[h]
          );
        };
      }
      return o;
    },
  });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ((n = window.HTMLSlotElement) === null || n === void 0
  ? void 0
  : n.prototype.assignedElements) != null;
var lottie$1 = { exports: {} };
(function (module, exports) {
  var factory;
  typeof navigator < "u" &&
    ((factory = function () {
      var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        _useWebWorker = !1,
        initialDefaultFrame = -999999,
        setWebWorker = function (t) {
          _useWebWorker = !!t;
        },
        getWebWorker = function () {
          return _useWebWorker;
        },
        setLocationHref = function (t) {
          locationHref = t;
        },
        getLocationHref = function () {
          return locationHref;
        };
      function createTag(t) {
        return document.createElement(t);
      }
      function extendPrototype(t, e) {
        var r,
          o,
          h = t.length;
        for (r = 0; r < h; r += 1)
          for (var l in (o = t[r].prototype))
            Object.prototype.hasOwnProperty.call(o, l) &&
              (e.prototype[l] = o[l]);
      }
      function getDescriptor(t, e) {
        return Object.getOwnPropertyDescriptor(t, e);
      }
      function createProxyFunction(t) {
        function e() {}
        return (e.prototype = t), e;
      }
      var audioControllerFactory = (function () {
          function t(e) {
            (this.audios = []),
              (this.audioFactory = e),
              (this._volume = 1),
              (this._isMuted = !1);
          }
          return (
            (t.prototype = {
              addAudio: function (e) {
                this.audios.push(e);
              },
              pause: function () {
                var e,
                  r = this.audios.length;
                for (e = 0; e < r; e += 1) this.audios[e].pause();
              },
              resume: function () {
                var e,
                  r = this.audios.length;
                for (e = 0; e < r; e += 1) this.audios[e].resume();
              },
              setRate: function (e) {
                var r,
                  o = this.audios.length;
                for (r = 0; r < o; r += 1) this.audios[r].setRate(e);
              },
              createAudio: function (e) {
                return this.audioFactory
                  ? this.audioFactory(e)
                  : window.Howl
                  ? new window.Howl({ src: [e] })
                  : {
                      isPlaying: !1,
                      play: function () {
                        this.isPlaying = !0;
                      },
                      seek: function () {
                        this.isPlaying = !1;
                      },
                      playing: function () {},
                      rate: function () {},
                      setVolume: function () {},
                    };
              },
              setAudioFactory: function (e) {
                this.audioFactory = e;
              },
              setVolume: function (e) {
                (this._volume = e), this._updateVolume();
              },
              mute: function () {
                (this._isMuted = !0), this._updateVolume();
              },
              unmute: function () {
                (this._isMuted = !1), this._updateVolume();
              },
              getVolume: function () {
                return this._volume;
              },
              _updateVolume: function () {
                var e,
                  r = this.audios.length;
                for (e = 0; e < r; e += 1)
                  this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1));
              },
            }),
            function () {
              return new t();
            }
          );
        })(),
        createTypedArray = (function () {
          function t(e, r) {
            var o,
              h = 0,
              l = [];
            switch (e) {
              case "int16":
              case "uint8c":
                o = 1;
                break;
              default:
                o = 1.1;
            }
            for (h = 0; h < r; h += 1) l.push(o);
            return l;
          }
          return typeof Uint8ClampedArray == "function" &&
            typeof Float32Array == "function"
            ? function (e, r) {
                return e === "float32"
                  ? new Float32Array(r)
                  : e === "int16"
                  ? new Int16Array(r)
                  : e === "uint8c"
                  ? new Uint8ClampedArray(r)
                  : t(e, r);
              }
            : t;
        })();
      function createSizedArray(t) {
        return Array.apply(null, { length: t });
      }
      function _typeof$6(t) {
        return (
          (_typeof$6 =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          _typeof$6(t)
        );
      }
      var subframeEnabled = !0,
        expressionsPlugin = null,
        expressionsInterfaces = null,
        idPrefix$1 = "",
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        bmPow = Math.pow,
        bmSqrt = Math.sqrt,
        bmFloor = Math.floor,
        bmMax = Math.max,
        bmMin = Math.min,
        BMMath = {};
      (function () {
        var t,
          e = [
            "abs",
            "acos",
            "acosh",
            "asin",
            "asinh",
            "atan",
            "atanh",
            "atan2",
            "ceil",
            "cbrt",
            "expm1",
            "clz32",
            "cos",
            "cosh",
            "exp",
            "floor",
            "fround",
            "hypot",
            "imul",
            "log",
            "log1p",
            "log2",
            "log10",
            "max",
            "min",
            "pow",
            "random",
            "round",
            "sign",
            "sin",
            "sinh",
            "sqrt",
            "tan",
            "tanh",
            "trunc",
            "E",
            "LN10",
            "LN2",
            "LOG10E",
            "LOG2E",
            "PI",
            "SQRT1_2",
            "SQRT2",
          ],
          r = e.length;
        for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]];
      })(),
        (BMMath.random = Math.random),
        (BMMath.abs = function (t) {
          if (_typeof$6(t) === "object" && t.length) {
            var e,
              r = createSizedArray(t.length),
              o = t.length;
            for (e = 0; e < o; e += 1) r[e] = Math.abs(t[e]);
            return r;
          }
          return Math.abs(t);
        });
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = 0.5519;
      function styleDiv(t) {
        (t.style.position = "absolute"),
          (t.style.top = 0),
          (t.style.left = 0),
          (t.style.display = "block"),
          (t.style.transformOrigin = "0 0"),
          (t.style.webkitTransformOrigin = "0 0"),
          (t.style.backfaceVisibility = "visible"),
          (t.style.webkitBackfaceVisibility = "visible"),
          (t.style.transformStyle = "preserve-3d"),
          (t.style.webkitTransformStyle = "preserve-3d"),
          (t.style.mozTransformStyle = "preserve-3d");
      }
      function BMEnterFrameEvent(t, e, r, o) {
        (this.type = t),
          (this.currentTime = e),
          (this.totalTime = r),
          (this.direction = o < 0 ? -1 : 1);
      }
      function BMCompleteEvent(t, e) {
        (this.type = t), (this.direction = e < 0 ? -1 : 1);
      }
      function BMCompleteLoopEvent(t, e, r, o) {
        (this.type = t),
          (this.currentLoop = r),
          (this.totalLoops = e),
          (this.direction = o < 0 ? -1 : 1);
      }
      function BMSegmentStartEvent(t, e, r) {
        (this.type = t), (this.firstFrame = e), (this.totalFrames = r);
      }
      function BMDestroyEvent(t, e) {
        (this.type = t), (this.target = e);
      }
      function BMRenderFrameErrorEvent(t, e) {
        (this.type = "renderFrameError"),
          (this.nativeError = t),
          (this.currentTime = e);
      }
      function BMConfigErrorEvent(t) {
        (this.type = "configError"), (this.nativeError = t);
      }
      var createElementID =
          ((_count = 0),
          function () {
            return idPrefix$1 + "__lottie_element_" + (_count += 1);
          }),
        _count;
      function HSVtoRGB(t, e, r) {
        var o, h, l, y, D, j, Y, B;
        switch (
          ((j = r * (1 - e)),
          (Y = r * (1 - (D = 6 * t - (y = Math.floor(6 * t))) * e)),
          (B = r * (1 - (1 - D) * e)),
          y % 6)
        ) {
          case 0:
            (o = r), (h = B), (l = j);
            break;
          case 1:
            (o = Y), (h = r), (l = j);
            break;
          case 2:
            (o = j), (h = r), (l = B);
            break;
          case 3:
            (o = j), (h = Y), (l = r);
            break;
          case 4:
            (o = B), (h = j), (l = r);
            break;
          case 5:
            (o = r), (h = j), (l = Y);
        }
        return [o, h, l];
      }
      function RGBtoHSV(t, e, r) {
        var o,
          h = Math.max(t, e, r),
          l = Math.min(t, e, r),
          y = h - l,
          D = h === 0 ? 0 : y / h,
          j = h / 255;
        switch (h) {
          case l:
            o = 0;
            break;
          case t:
            (o = e - r + y * (e < r ? 6 : 0)), (o /= 6 * y);
            break;
          case e:
            (o = r - t + 2 * y), (o /= 6 * y);
            break;
          case r:
            (o = t - e + 4 * y), (o /= 6 * y);
        }
        return [o, D, j];
      }
      function addSaturationToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (
          (r[1] += e),
          r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      function addBrightnessToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (
          (r[2] += e),
          r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      function addHueToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (
          (r[0] += e / 360),
          r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      var rgbToHex = (function () {
          var t,
            e,
            r = [];
          for (t = 0; t < 256; t += 1)
            (e = t.toString(16)), (r[t] = e.length === 1 ? "0" + e : e);
          return function (o, h, l) {
            return (
              o < 0 && (o = 0),
              h < 0 && (h = 0),
              l < 0 && (l = 0),
              "#" + r[o] + r[h] + r[l]
            );
          };
        })(),
        setSubframeEnabled = function (t) {
          subframeEnabled = !!t;
        },
        getSubframeEnabled = function () {
          return subframeEnabled;
        },
        setExpressionsPlugin = function (t) {
          expressionsPlugin = t;
        },
        getExpressionsPlugin = function () {
          return expressionsPlugin;
        },
        setExpressionInterfaces = function (t) {
          expressionsInterfaces = t;
        },
        getExpressionInterfaces = function () {
          return expressionsInterfaces;
        },
        setDefaultCurveSegments = function (t) {
          defaultCurveSegments = t;
        },
        getDefaultCurveSegments = function () {
          return defaultCurveSegments;
        },
        setIdPrefix = function (t) {
          idPrefix$1 = t;
        };
      function createNS(t) {
        return document.createElementNS(svgNS, t);
      }
      function _typeof$5(t) {
        return (
          (_typeof$5 =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          _typeof$5(t)
        );
      }
      var dataManager = (function () {
          var t,
            e,
            r = 1,
            o = [],
            h = {
              onmessage: function () {},
              postMessage: function (j) {
                t({ data: j });
              },
            },
            l = {
              postMessage: function (j) {
                h.onmessage({ data: j });
              },
            };
          function y() {
            e ||
              ((e = (function (j) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var Y = new Blob(
                      [
                        "var _workerSelf = self; self.onmessage = ",
                        j.toString(),
                      ],
                      { type: "text/javascript" }
                    ),
                    B = URL.createObjectURL(Y);
                  return new Worker(B);
                }
                return (t = j), h;
              })(function (j) {
                if (
                  (l.dataManager ||
                    (l.dataManager = (function () {
                      function B(it, et) {
                        var at,
                          rt,
                          tt,
                          lt,
                          ht,
                          ot,
                          ft = it.length;
                        for (rt = 0; rt < ft; rt += 1)
                          if ("ks" in (at = it[rt]) && !at.completed) {
                            if (((at.completed = !0), at.hasMask)) {
                              var ct = at.masksProperties;
                              for (lt = ct.length, tt = 0; tt < lt; tt += 1)
                                if (ct[tt].pt.k.i) W(ct[tt].pt.k);
                                else
                                  for (
                                    ot = ct[tt].pt.k.length, ht = 0;
                                    ht < ot;
                                    ht += 1
                                  )
                                    ct[tt].pt.k[ht].s &&
                                      W(ct[tt].pt.k[ht].s[0]),
                                      ct[tt].pt.k[ht].e &&
                                        W(ct[tt].pt.k[ht].e[0]);
                            }
                            at.ty === 0
                              ? ((at.layers = q(at.refId, et)),
                                B(at.layers, et))
                              : at.ty === 4
                              ? O(at.shapes)
                              : at.ty === 5 && Q(at);
                          }
                      }
                      function q(it, et) {
                        var at = (function (rt, tt) {
                          for (var lt = 0, ht = tt.length; lt < ht; ) {
                            if (tt[lt].id === rt) return tt[lt];
                            lt += 1;
                          }
                          return null;
                        })(it, et);
                        return at
                          ? at.layers.__used
                            ? JSON.parse(JSON.stringify(at.layers))
                            : ((at.layers.__used = !0), at.layers)
                          : null;
                      }
                      function O(it) {
                        var et, at, rt;
                        for (et = it.length - 1; et >= 0; et -= 1)
                          if (it[et].ty === "sh")
                            if (it[et].ks.k.i) W(it[et].ks.k);
                            else
                              for (
                                rt = it[et].ks.k.length, at = 0;
                                at < rt;
                                at += 1
                              )
                                it[et].ks.k[at].s && W(it[et].ks.k[at].s[0]),
                                  it[et].ks.k[at].e && W(it[et].ks.k[at].e[0]);
                          else it[et].ty === "gr" && O(it[et].it);
                      }
                      function W(it) {
                        var et,
                          at = it.i.length;
                        for (et = 0; et < at; et += 1)
                          (it.i[et][0] += it.v[et][0]),
                            (it.i[et][1] += it.v[et][1]),
                            (it.o[et][0] += it.v[et][0]),
                            (it.o[et][1] += it.v[et][1]);
                      }
                      function G(it, et) {
                        var at = et ? et.split(".") : [100, 100, 100];
                        return (
                          it[0] > at[0] ||
                          (!(at[0] > it[0]) &&
                            (it[1] > at[1] ||
                              (!(at[1] > it[1]) &&
                                (it[2] > at[2] || (!(at[2] > it[2]) && null)))))
                        );
                      }
                      var F,
                        R = (function () {
                          var it = [4, 4, 14];
                          function et(at) {
                            var rt,
                              tt,
                              lt,
                              ht = at.length;
                            for (rt = 0; rt < ht; rt += 1)
                              at[rt].ty === 5 &&
                                ((lt = void 0),
                                (lt = (tt = at[rt]).t.d),
                                (tt.t.d = { k: [{ s: lt, t: 0 }] }));
                          }
                          return function (at) {
                            if (G(it, at.v) && (et(at.layers), at.assets)) {
                              var rt,
                                tt = at.assets.length;
                              for (rt = 0; rt < tt; rt += 1)
                                at.assets[rt].layers &&
                                  et(at.assets[rt].layers);
                            }
                          };
                        })(),
                        U =
                          ((F = [4, 7, 99]),
                          function (it) {
                            if (it.chars && !G(F, it.v)) {
                              var et,
                                at = it.chars.length;
                              for (et = 0; et < at; et += 1) {
                                var rt = it.chars[et];
                                rt.data &&
                                  rt.data.shapes &&
                                  (O(rt.data.shapes),
                                  (rt.data.ip = 0),
                                  (rt.data.op = 99999),
                                  (rt.data.st = 0),
                                  (rt.data.sr = 1),
                                  (rt.data.ks = {
                                    p: { k: [0, 0], a: 0 },
                                    s: { k: [100, 100], a: 0 },
                                    a: { k: [0, 0], a: 0 },
                                    r: { k: 0, a: 0 },
                                    o: { k: 100, a: 0 },
                                  }),
                                  it.chars[et].t ||
                                    (rt.data.shapes.push({ ty: "no" }),
                                    rt.data.shapes[0].it.push({
                                      p: { k: [0, 0], a: 0 },
                                      s: { k: [100, 100], a: 0 },
                                      a: { k: [0, 0], a: 0 },
                                      r: { k: 0, a: 0 },
                                      o: { k: 100, a: 0 },
                                      sk: { k: 0, a: 0 },
                                      sa: { k: 0, a: 0 },
                                      ty: "tr",
                                    })));
                              }
                            }
                          }),
                        X = (function () {
                          var it = [5, 7, 15];
                          function et(at) {
                            var rt,
                              tt,
                              lt = at.length;
                            for (rt = 0; rt < lt; rt += 1)
                              at[rt].ty === 5 &&
                                ((tt = void 0),
                                typeof (tt = at[rt].t.p).a == "number" &&
                                  (tt.a = { a: 0, k: tt.a }),
                                typeof tt.p == "number" &&
                                  (tt.p = { a: 0, k: tt.p }),
                                typeof tt.r == "number" &&
                                  (tt.r = { a: 0, k: tt.r }));
                          }
                          return function (at) {
                            if (G(it, at.v) && (et(at.layers), at.assets)) {
                              var rt,
                                tt = at.assets.length;
                              for (rt = 0; rt < tt; rt += 1)
                                at.assets[rt].layers &&
                                  et(at.assets[rt].layers);
                            }
                          };
                        })(),
                        Z = (function () {
                          var it = [4, 1, 9];
                          function et(rt) {
                            var tt,
                              lt,
                              ht,
                              ot = rt.length;
                            for (tt = 0; tt < ot; tt += 1)
                              if (rt[tt].ty === "gr") et(rt[tt].it);
                              else if (rt[tt].ty === "fl" || rt[tt].ty === "st")
                                if (rt[tt].c.k && rt[tt].c.k[0].i)
                                  for (
                                    ht = rt[tt].c.k.length, lt = 0;
                                    lt < ht;
                                    lt += 1
                                  )
                                    rt[tt].c.k[lt].s &&
                                      ((rt[tt].c.k[lt].s[0] /= 255),
                                      (rt[tt].c.k[lt].s[1] /= 255),
                                      (rt[tt].c.k[lt].s[2] /= 255),
                                      (rt[tt].c.k[lt].s[3] /= 255)),
                                      rt[tt].c.k[lt].e &&
                                        ((rt[tt].c.k[lt].e[0] /= 255),
                                        (rt[tt].c.k[lt].e[1] /= 255),
                                        (rt[tt].c.k[lt].e[2] /= 255),
                                        (rt[tt].c.k[lt].e[3] /= 255));
                                else
                                  (rt[tt].c.k[0] /= 255),
                                    (rt[tt].c.k[1] /= 255),
                                    (rt[tt].c.k[2] /= 255),
                                    (rt[tt].c.k[3] /= 255);
                          }
                          function at(rt) {
                            var tt,
                              lt = rt.length;
                            for (tt = 0; tt < lt; tt += 1)
                              rt[tt].ty === 4 && et(rt[tt].shapes);
                          }
                          return function (rt) {
                            if (G(it, rt.v) && (at(rt.layers), rt.assets)) {
                              var tt,
                                lt = rt.assets.length;
                              for (tt = 0; tt < lt; tt += 1)
                                rt.assets[tt].layers &&
                                  at(rt.assets[tt].layers);
                            }
                          };
                        })(),
                        J = (function () {
                          var it = [4, 4, 18];
                          function et(rt) {
                            var tt, lt, ht;
                            for (tt = rt.length - 1; tt >= 0; tt -= 1)
                              if (rt[tt].ty === "sh")
                                if (rt[tt].ks.k.i)
                                  rt[tt].ks.k.c = rt[tt].closed;
                                else
                                  for (
                                    ht = rt[tt].ks.k.length, lt = 0;
                                    lt < ht;
                                    lt += 1
                                  )
                                    rt[tt].ks.k[lt].s &&
                                      (rt[tt].ks.k[lt].s[0].c = rt[tt].closed),
                                      rt[tt].ks.k[lt].e &&
                                        (rt[tt].ks.k[lt].e[0].c =
                                          rt[tt].closed);
                              else rt[tt].ty === "gr" && et(rt[tt].it);
                          }
                          function at(rt) {
                            var tt,
                              lt,
                              ht,
                              ot,
                              ft,
                              ct,
                              vt = rt.length;
                            for (lt = 0; lt < vt; lt += 1) {
                              if ((tt = rt[lt]).hasMask) {
                                var K = tt.masksProperties;
                                for (ot = K.length, ht = 0; ht < ot; ht += 1)
                                  if (K[ht].pt.k.i) K[ht].pt.k.c = K[ht].cl;
                                  else
                                    for (
                                      ct = K[ht].pt.k.length, ft = 0;
                                      ft < ct;
                                      ft += 1
                                    )
                                      K[ht].pt.k[ft].s &&
                                        (K[ht].pt.k[ft].s[0].c = K[ht].cl),
                                        K[ht].pt.k[ft].e &&
                                          (K[ht].pt.k[ft].e[0].c = K[ht].cl);
                              }
                              tt.ty === 4 && et(tt.shapes);
                            }
                          }
                          return function (rt) {
                            if (G(it, rt.v) && (at(rt.layers), rt.assets)) {
                              var tt,
                                lt = rt.assets.length;
                              for (tt = 0; tt < lt; tt += 1)
                                rt.assets[tt].layers &&
                                  at(rt.assets[tt].layers);
                            }
                          };
                        })();
                      function Q(it) {
                        it.t.a.length === 0 && it.t.p;
                      }
                      var st = {
                        completeData: function (it) {
                          it.__complete ||
                            (Z(it),
                            R(it),
                            U(it),
                            X(it),
                            J(it),
                            B(it.layers, it.assets),
                            (function (et, at) {
                              if (et) {
                                var rt = 0,
                                  tt = et.length;
                                for (rt = 0; rt < tt; rt += 1)
                                  et[rt].t === 1 &&
                                    ((et[rt].data.layers = q(
                                      et[rt].data.refId,
                                      at
                                    )),
                                    B(et[rt].data.layers, at));
                              }
                            })(it.chars, it.assets),
                            (it.__complete = !0));
                        },
                      };
                      return (
                        (st.checkColors = Z),
                        (st.checkChars = U),
                        (st.checkPathProperties = X),
                        (st.checkShapes = J),
                        (st.completeLayers = B),
                        st
                      );
                    })()),
                  l.assetLoader ||
                    (l.assetLoader = (function () {
                      function B(q) {
                        var O = q.getResponseHeader("content-type");
                        return (O &&
                          q.responseType === "json" &&
                          O.indexOf("json") !== -1) ||
                          (q.response && _typeof$5(q.response) === "object")
                          ? q.response
                          : q.response && typeof q.response == "string"
                          ? JSON.parse(q.response)
                          : q.responseText
                          ? JSON.parse(q.responseText)
                          : null;
                      }
                      return {
                        load: function (q, O, W, G) {
                          var F,
                            R = new XMLHttpRequest();
                          try {
                            R.responseType = "json";
                          } catch {}
                          R.onreadystatechange = function () {
                            if (R.readyState === 4)
                              if (R.status === 200) (F = B(R)), W(F);
                              else
                                try {
                                  (F = B(R)), W(F);
                                } catch (U) {
                                  G && G(U);
                                }
                          };
                          try {
                            R.open(["G", "E", "T"].join(""), q, !0);
                          } catch {
                            R.open(["G", "E", "T"].join(""), O + "/" + q, !0);
                          }
                          R.send();
                        },
                      };
                    })()),
                  j.data.type === "loadAnimation")
                )
                  l.assetLoader.load(
                    j.data.path,
                    j.data.fullPath,
                    function (B) {
                      l.dataManager.completeData(B),
                        l.postMessage({
                          id: j.data.id,
                          payload: B,
                          status: "success",
                        });
                    },
                    function () {
                      l.postMessage({ id: j.data.id, status: "error" });
                    }
                  );
                else if (j.data.type === "complete") {
                  var Y = j.data.animation;
                  l.dataManager.completeData(Y),
                    l.postMessage({
                      id: j.data.id,
                      payload: Y,
                      status: "success",
                    });
                } else
                  j.data.type === "loadData" &&
                    l.assetLoader.load(
                      j.data.path,
                      j.data.fullPath,
                      function (B) {
                        l.postMessage({
                          id: j.data.id,
                          payload: B,
                          status: "success",
                        });
                      },
                      function () {
                        l.postMessage({ id: j.data.id, status: "error" });
                      }
                    );
              })),
              (e.onmessage = function (j) {
                var Y = j.data,
                  B = Y.id,
                  q = o[B];
                (o[B] = null),
                  Y.status === "success"
                    ? q.onComplete(Y.payload)
                    : q.onError && q.onError();
              }));
          }
          function D(j, Y) {
            var B = "processId_" + (r += 1);
            return (o[B] = { onComplete: j, onError: Y }), B;
          }
          return {
            loadAnimation: function (j, Y, B) {
              y();
              var q = D(Y, B);
              e.postMessage({
                type: "loadAnimation",
                path: j,
                fullPath: window.location.origin + window.location.pathname,
                id: q,
              });
            },
            loadData: function (j, Y, B) {
              y();
              var q = D(Y, B);
              e.postMessage({
                type: "loadData",
                path: j,
                fullPath: window.location.origin + window.location.pathname,
                id: q,
              });
            },
            completeAnimation: function (j, Y, B) {
              y();
              var q = D(Y, B);
              e.postMessage({ type: "complete", animation: j, id: q });
            },
          };
        })(),
        ImagePreloader = (function () {
          var t = (function () {
            var D = createTag("canvas");
            (D.width = 1), (D.height = 1);
            var j = D.getContext("2d");
            return (j.fillStyle = "rgba(0,0,0,0)"), j.fillRect(0, 0, 1, 1), D;
          })();
          function e() {
            (this.loadedAssets += 1),
              this.loadedAssets === this.totalImages &&
                this.loadedFootagesCount === this.totalFootages &&
                this.imagesLoadedCb &&
                this.imagesLoadedCb(null);
          }
          function r() {
            (this.loadedFootagesCount += 1),
              this.loadedAssets === this.totalImages &&
                this.loadedFootagesCount === this.totalFootages &&
                this.imagesLoadedCb &&
                this.imagesLoadedCb(null);
          }
          function o(D, j, Y) {
            var B = "";
            if (D.e) B = D.p;
            else if (j) {
              var q = D.p;
              q.indexOf("images/") !== -1 && (q = q.split("/")[1]), (B = j + q);
            } else (B = Y), (B += D.u ? D.u : ""), (B += D.p);
            return B;
          }
          function h(D) {
            var j = 0,
              Y = setInterval(
                function () {
                  (D.getBBox().width || j > 500) &&
                    (this._imageLoaded(), clearInterval(Y)),
                    (j += 1);
                }.bind(this),
                50
              );
          }
          function l(D) {
            var j = { assetData: D },
              Y = o(D, this.assetsPath, this.path);
            return (
              dataManager.loadData(
                Y,
                function (B) {
                  (j.img = B), this._footageLoaded();
                }.bind(this),
                function () {
                  (j.img = {}), this._footageLoaded();
                }.bind(this)
              ),
              j
            );
          }
          function y() {
            (this._imageLoaded = e.bind(this)),
              (this._footageLoaded = r.bind(this)),
              (this.testImageLoaded = h.bind(this)),
              (this.createFootageData = l.bind(this)),
              (this.assetsPath = ""),
              (this.path = ""),
              (this.totalImages = 0),
              (this.totalFootages = 0),
              (this.loadedAssets = 0),
              (this.loadedFootagesCount = 0),
              (this.imagesLoadedCb = null),
              (this.images = []);
          }
          return (
            (y.prototype = {
              loadAssets: function (D, j) {
                var Y;
                this.imagesLoadedCb = j;
                var B = D.length;
                for (Y = 0; Y < B; Y += 1)
                  D[Y].layers ||
                    (D[Y].t && D[Y].t !== "seq"
                      ? D[Y].t === 3 &&
                        ((this.totalFootages += 1),
                        this.images.push(this.createFootageData(D[Y])))
                      : ((this.totalImages += 1),
                        this.images.push(this._createImageData(D[Y]))));
              },
              setAssetsPath: function (D) {
                this.assetsPath = D || "";
              },
              setPath: function (D) {
                this.path = D || "";
              },
              loadedImages: function () {
                return this.totalImages === this.loadedAssets;
              },
              loadedFootages: function () {
                return this.totalFootages === this.loadedFootagesCount;
              },
              destroy: function () {
                (this.imagesLoadedCb = null), (this.images.length = 0);
              },
              getAsset: function (D) {
                for (var j = 0, Y = this.images.length; j < Y; ) {
                  if (this.images[j].assetData === D) return this.images[j].img;
                  j += 1;
                }
                return null;
              },
              createImgData: function (D) {
                var j = o(D, this.assetsPath, this.path),
                  Y = createTag("img");
                (Y.crossOrigin = "anonymous"),
                  Y.addEventListener("load", this._imageLoaded, !1),
                  Y.addEventListener(
                    "error",
                    function () {
                      (B.img = t), this._imageLoaded();
                    }.bind(this),
                    !1
                  ),
                  (Y.src = j);
                var B = { img: Y, assetData: D };
                return B;
              },
              createImageData: function (D) {
                var j = o(D, this.assetsPath, this.path),
                  Y = createNS("image");
                isSafari
                  ? this.testImageLoaded(Y)
                  : Y.addEventListener("load", this._imageLoaded, !1),
                  Y.addEventListener(
                    "error",
                    function () {
                      (B.img = t), this._imageLoaded();
                    }.bind(this),
                    !1
                  ),
                  Y.setAttributeNS("http://www.w3.org/1999/xlink", "href", j),
                  this._elementHelper.append
                    ? this._elementHelper.append(Y)
                    : this._elementHelper.appendChild(Y);
                var B = { img: Y, assetData: D };
                return B;
              },
              imageLoaded: e,
              footageLoaded: r,
              setCacheType: function (D, j) {
                D === "svg"
                  ? ((this._elementHelper = j),
                    (this._createImageData = this.createImageData.bind(this)))
                  : (this._createImageData = this.createImgData.bind(this));
              },
            }),
            y
          );
        })();
      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function (t, e) {
          if (this._cbs[t])
            for (var r = this._cbs[t], o = 0; o < r.length; o += 1) r[o](e);
        },
        addEventListener: function (t, e) {
          return (
            this._cbs[t] || (this._cbs[t] = []),
            this._cbs[t].push(e),
            function () {
              this.removeEventListener(t, e);
            }.bind(this)
          );
        },
        removeEventListener: function (t, e) {
          if (e) {
            if (this._cbs[t]) {
              for (var r = 0, o = this._cbs[t].length; r < o; )
                this._cbs[t][r] === e &&
                  (this._cbs[t].splice(r, 1), (r -= 1), (o -= 1)),
                  (r += 1);
              this._cbs[t].length || (this._cbs[t] = null);
            }
          } else this._cbs[t] = null;
        },
      };
      var markerParser = (function () {
          function t(e) {
            for (
              var r,
                o = e.split(`\r
`),
                h = {},
                l = 0,
                y = 0;
              y < o.length;
              y += 1
            )
              (r = o[y].split(":")).length === 2 &&
                ((h[r[0]] = r[1].trim()), (l += 1));
            if (l === 0) throw new Error();
            return h;
          }
          return function (e) {
            for (var r = [], o = 0; o < e.length; o += 1) {
              var h = e[o],
                l = { time: h.tm, duration: h.dr };
              try {
                l.payload = JSON.parse(e[o].cm);
              } catch {
                try {
                  l.payload = t(e[o].cm);
                } catch {
                  l.payload = { name: e[o].cm };
                }
              }
              r.push(l);
            }
            return r;
          };
        })(),
        ProjectInterface = (function () {
          function t(e) {
            this.compositions.push(e);
          }
          return function () {
            function e(r) {
              for (var o = 0, h = this.compositions.length; o < h; ) {
                if (
                  this.compositions[o].data &&
                  this.compositions[o].data.nm === r
                )
                  return (
                    this.compositions[o].prepareFrame &&
                      this.compositions[o].data.xt &&
                      this.compositions[o].prepareFrame(this.currentFrame),
                    this.compositions[o].compInterface
                  );
                o += 1;
              }
              return null;
            }
            return (
              (e.compositions = []),
              (e.currentFrame = 0),
              (e.registerComposition = t),
              e
            );
          };
        })(),
        renderers = {},
        registerRenderer = function (t, e) {
          renderers[t] = e;
        };
      function getRenderer(t) {
        return renderers[t];
      }
      function getRegisteredRenderer() {
        if (renderers.canvas) return "canvas";
        for (var t in renderers) if (renderers[t]) return t;
        return "";
      }
      function _typeof$4(t) {
        return (
          (_typeof$4 =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          _typeof$4(t)
        );
      }
      var AnimationItem = function () {
        (this._cbs = []),
          (this.name = ""),
          (this.path = ""),
          (this.isLoaded = !1),
          (this.currentFrame = 0),
          (this.currentRawFrame = 0),
          (this.firstFrame = 0),
          (this.totalFrames = 0),
          (this.frameRate = 0),
          (this.frameMult = 0),
          (this.playSpeed = 1),
          (this.playDirection = 1),
          (this.playCount = 0),
          (this.animationData = {}),
          (this.assets = []),
          (this.isPaused = !0),
          (this.autoplay = !1),
          (this.loop = !0),
          (this.renderer = null),
          (this.animationID = createElementID()),
          (this.assetsPath = ""),
          (this.timeCompleted = 0),
          (this.segmentPos = 0),
          (this.isSubframeEnabled = getSubframeEnabled()),
          (this.segments = []),
          (this._idle = !0),
          (this._completedLoop = !1),
          (this.projectInterface = ProjectInterface()),
          (this.imagePreloader = new ImagePreloader()),
          (this.audioController = audioControllerFactory()),
          (this.markers = []),
          (this.configAnimation = this.configAnimation.bind(this)),
          (this.onSetupError = this.onSetupError.bind(this)),
          (this.onSegmentComplete = this.onSegmentComplete.bind(this)),
          (this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)),
          (this.expressionsPlugin = getExpressionsPlugin());
      };
      extendPrototype([BaseEvent], AnimationItem),
        (AnimationItem.prototype.setParams = function (t) {
          (t.wrapper || t.container) &&
            (this.wrapper = t.wrapper || t.container);
          var e = "svg";
          t.animType ? (e = t.animType) : t.renderer && (e = t.renderer);
          var r = getRenderer(e);
          (this.renderer = new r(this, t.rendererSettings)),
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
            this.renderer.setProjectInterface(this.projectInterface),
            (this.animType = e),
            t.loop === "" ||
            t.loop === null ||
            t.loop === void 0 ||
            t.loop === !0
              ? (this.loop = !0)
              : t.loop === !1
              ? (this.loop = !1)
              : (this.loop = parseInt(t.loop, 10)),
            (this.autoplay = !("autoplay" in t) || t.autoplay),
            (this.name = t.name ? t.name : ""),
            (this.autoloadSegments =
              !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ||
              t.autoloadSegments),
            (this.assetsPath = t.assetsPath),
            (this.initialSegment = t.initialSegment),
            t.audioFactory &&
              this.audioController.setAudioFactory(t.audioFactory),
            t.animationData
              ? this.setupAnimation(t.animationData)
              : t.path &&
                (t.path.lastIndexOf("\\") !== -1
                  ? (this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1))
                  : (this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1)),
                (this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1)),
                (this.fileName = this.fileName.substr(
                  0,
                  this.fileName.lastIndexOf(".json")
                )),
                dataManager.loadAnimation(
                  t.path,
                  this.configAnimation,
                  this.onSetupError
                ));
        }),
        (AnimationItem.prototype.onSetupError = function () {
          this.trigger("data_failed");
        }),
        (AnimationItem.prototype.setupAnimation = function (t) {
          dataManager.completeAnimation(t, this.configAnimation);
        }),
        (AnimationItem.prototype.setData = function (t, e) {
          e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
          var r = { wrapper: t, animationData: e },
            o = t.attributes;
          (r.path = o.getNamedItem("data-animation-path")
            ? o.getNamedItem("data-animation-path").value
            : o.getNamedItem("data-bm-path")
            ? o.getNamedItem("data-bm-path").value
            : o.getNamedItem("bm-path")
            ? o.getNamedItem("bm-path").value
            : ""),
            (r.animType = o.getNamedItem("data-anim-type")
              ? o.getNamedItem("data-anim-type").value
              : o.getNamedItem("data-bm-type")
              ? o.getNamedItem("data-bm-type").value
              : o.getNamedItem("bm-type")
              ? o.getNamedItem("bm-type").value
              : o.getNamedItem("data-bm-renderer")
              ? o.getNamedItem("data-bm-renderer").value
              : o.getNamedItem("bm-renderer")
              ? o.getNamedItem("bm-renderer").value
              : getRegisteredRenderer() || "canvas");
          var h = o.getNamedItem("data-anim-loop")
            ? o.getNamedItem("data-anim-loop").value
            : o.getNamedItem("data-bm-loop")
            ? o.getNamedItem("data-bm-loop").value
            : o.getNamedItem("bm-loop")
            ? o.getNamedItem("bm-loop").value
            : "";
          h === "false"
            ? (r.loop = !1)
            : h === "true"
            ? (r.loop = !0)
            : h !== "" && (r.loop = parseInt(h, 10));
          var l = o.getNamedItem("data-anim-autoplay")
            ? o.getNamedItem("data-anim-autoplay").value
            : o.getNamedItem("data-bm-autoplay")
            ? o.getNamedItem("data-bm-autoplay").value
            : !o.getNamedItem("bm-autoplay") ||
              o.getNamedItem("bm-autoplay").value;
          (r.autoplay = l !== "false"),
            (r.name = o.getNamedItem("data-name")
              ? o.getNamedItem("data-name").value
              : o.getNamedItem("data-bm-name")
              ? o.getNamedItem("data-bm-name").value
              : o.getNamedItem("bm-name")
              ? o.getNamedItem("bm-name").value
              : ""),
            (o.getNamedItem("data-anim-prerender")
              ? o.getNamedItem("data-anim-prerender").value
              : o.getNamedItem("data-bm-prerender")
              ? o.getNamedItem("data-bm-prerender").value
              : o.getNamedItem("bm-prerender")
              ? o.getNamedItem("bm-prerender").value
              : "") === "false" && (r.prerender = !1),
            r.path ? this.setParams(r) : this.trigger("destroy");
        }),
        (AnimationItem.prototype.includeLayers = function (t) {
          t.op > this.animationData.op &&
            ((this.animationData.op = t.op),
            (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
          var e,
            r,
            o = this.animationData.layers,
            h = o.length,
            l = t.layers,
            y = l.length;
          for (r = 0; r < y; r += 1)
            for (e = 0; e < h; ) {
              if (o[e].id === l[r].id) {
                o[e] = l[r];
                break;
              }
              e += 1;
            }
          if (
            ((t.chars || t.fonts) &&
              (this.renderer.globalData.fontManager.addChars(t.chars),
              this.renderer.globalData.fontManager.addFonts(
                t.fonts,
                this.renderer.globalData.defs
              )),
            t.assets)
          )
            for (h = t.assets.length, e = 0; e < h; e += 1)
              this.animationData.assets.push(t.assets[e]);
          (this.animationData.__complete = !1),
            dataManager.completeAnimation(
              this.animationData,
              this.onSegmentComplete
            );
        }),
        (AnimationItem.prototype.onSegmentComplete = function (t) {
          this.animationData = t;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.loadNextSegment();
        }),
        (AnimationItem.prototype.loadNextSegment = function () {
          var t = this.animationData.segments;
          if (!t || t.length === 0 || !this.autoloadSegments)
            return (
              this.trigger("data_ready"),
              void (this.timeCompleted = this.totalFrames)
            );
          var e = t.shift();
          this.timeCompleted = e.time * this.frameRate;
          var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
          (this.segmentPos += 1),
            dataManager.loadData(
              r,
              this.includeLayers.bind(this),
              function () {
                this.trigger("data_failed");
              }.bind(this)
            );
        }),
        (AnimationItem.prototype.loadSegments = function () {
          this.animationData.segments ||
            (this.timeCompleted = this.totalFrames),
            this.loadNextSegment();
        }),
        (AnimationItem.prototype.imagesLoaded = function () {
          this.trigger("loaded_images"), this.checkLoaded();
        }),
        (AnimationItem.prototype.preloadImages = function () {
          this.imagePreloader.setAssetsPath(this.assetsPath),
            this.imagePreloader.setPath(this.path),
            this.imagePreloader.loadAssets(
              this.animationData.assets,
              this.imagesLoaded.bind(this)
            );
        }),
        (AnimationItem.prototype.configAnimation = function (t) {
          if (this.renderer)
            try {
              (this.animationData = t),
                this.initialSegment
                  ? ((this.totalFrames = Math.floor(
                      this.initialSegment[1] - this.initialSegment[0]
                    )),
                    (this.firstFrame = Math.round(this.initialSegment[0])))
                  : ((this.totalFrames = Math.floor(
                      this.animationData.op - this.animationData.ip
                    )),
                    (this.firstFrame = Math.round(this.animationData.ip))),
                this.renderer.configAnimation(t),
                t.assets || (t.assets = []),
                (this.assets = this.animationData.assets),
                (this.frameRate = this.animationData.fr),
                (this.frameMult = this.animationData.fr / 1e3),
                this.renderer.searchExtraCompositions(t.assets),
                (this.markers = markerParser(t.markers || [])),
                this.trigger("config_ready"),
                this.preloadImages(),
                this.loadSegments(),
                this.updaFrameModifier(),
                this.waitForFontsLoaded(),
                this.isPaused && this.audioController.pause();
            } catch (e) {
              this.triggerConfigError(e);
            }
        }),
        (AnimationItem.prototype.waitForFontsLoaded = function () {
          this.renderer &&
            (this.renderer.globalData.fontManager.isLoaded
              ? this.checkLoaded()
              : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }),
        (AnimationItem.prototype.checkLoaded = function () {
          if (
            !this.isLoaded &&
            this.renderer.globalData.fontManager.isLoaded &&
            (this.imagePreloader.loadedImages() ||
              this.renderer.rendererType !== "canvas") &&
            this.imagePreloader.loadedFootages()
          ) {
            this.isLoaded = !0;
            var t = getExpressionsPlugin();
            t && t.initExpressions(this),
              this.renderer.initItems(),
              setTimeout(
                function () {
                  this.trigger("DOMLoaded");
                }.bind(this),
                0
              ),
              this.gotoFrame(),
              this.autoplay && this.play();
          }
        }),
        (AnimationItem.prototype.resize = function (t, e) {
          var r = typeof t == "number" ? t : void 0,
            o = typeof e == "number" ? e : void 0;
          this.renderer.updateContainerSize(r, o);
        }),
        (AnimationItem.prototype.setSubframe = function (t) {
          this.isSubframeEnabled = !!t;
        }),
        (AnimationItem.prototype.gotoFrame = function () {
          (this.currentFrame = this.isSubframeEnabled
            ? this.currentRawFrame
            : ~~this.currentRawFrame),
            this.timeCompleted !== this.totalFrames &&
              this.currentFrame > this.timeCompleted &&
              (this.currentFrame = this.timeCompleted),
            this.trigger("enterFrame"),
            this.renderFrame(),
            this.trigger("drawnFrame");
        }),
        (AnimationItem.prototype.renderFrame = function () {
          if (this.isLoaded !== !1 && this.renderer)
            try {
              this.expressionsPlugin && this.expressionsPlugin.resetFrame(),
                this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (t) {
              this.triggerRenderFrameError(t);
            }
        }),
        (AnimationItem.prototype.play = function (t) {
          (t && this.name !== t) ||
            (this.isPaused === !0 &&
              ((this.isPaused = !1),
              this.trigger("_play"),
              this.audioController.resume(),
              this._idle && ((this._idle = !1), this.trigger("_active"))));
        }),
        (AnimationItem.prototype.pause = function (t) {
          (t && this.name !== t) ||
            (this.isPaused === !1 &&
              ((this.isPaused = !0),
              this.trigger("_pause"),
              (this._idle = !0),
              this.trigger("_idle"),
              this.audioController.pause()));
        }),
        (AnimationItem.prototype.togglePause = function (t) {
          (t && this.name !== t) ||
            (this.isPaused === !0 ? this.play() : this.pause());
        }),
        (AnimationItem.prototype.stop = function (t) {
          (t && this.name !== t) ||
            (this.pause(),
            (this.playCount = 0),
            (this._completedLoop = !1),
            this.setCurrentRawFrameValue(0));
        }),
        (AnimationItem.prototype.getMarkerData = function (t) {
          for (var e, r = 0; r < this.markers.length; r += 1)
            if ((e = this.markers[r]).payload && e.payload.name === t) return e;
          return null;
        }),
        (AnimationItem.prototype.goToAndStop = function (t, e, r) {
          if (!r || this.name === r) {
            var o = Number(t);
            if (isNaN(o)) {
              var h = this.getMarkerData(t);
              h && this.goToAndStop(h.time, !0);
            } else
              e
                ? this.setCurrentRawFrameValue(t)
                : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause();
          }
        }),
        (AnimationItem.prototype.goToAndPlay = function (t, e, r) {
          if (!r || this.name === r) {
            var o = Number(t);
            if (isNaN(o)) {
              var h = this.getMarkerData(t);
              h &&
                (h.duration
                  ? this.playSegments([h.time, h.time + h.duration], !0)
                  : this.goToAndStop(h.time, !0));
            } else this.goToAndStop(o, e, r);
            this.play();
          }
        }),
        (AnimationItem.prototype.advanceTime = function (t) {
          if (this.isPaused !== !0 && this.isLoaded !== !1) {
            var e = this.currentRawFrame + t * this.frameModifier,
              r = !1;
            e >= this.totalFrames - 1 && this.frameModifier > 0
              ? this.loop && this.playCount !== this.loop
                ? e >= this.totalFrames
                  ? ((this.playCount += 1),
                    this.checkSegments(e % this.totalFrames) ||
                      (this.setCurrentRawFrameValue(e % this.totalFrames),
                      (this._completedLoop = !0),
                      this.trigger("loopComplete")))
                  : this.setCurrentRawFrameValue(e)
                : this.checkSegments(
                    e > this.totalFrames ? e % this.totalFrames : 0
                  ) || ((r = !0), (e = this.totalFrames - 1))
              : e < 0
              ? this.checkSegments(e % this.totalFrames) ||
                (!this.loop || (this.playCount-- <= 0 && this.loop !== !0)
                  ? ((r = !0), (e = 0))
                  : (this.setCurrentRawFrameValue(
                      this.totalFrames + (e % this.totalFrames)
                    ),
                    this._completedLoop
                      ? this.trigger("loopComplete")
                      : (this._completedLoop = !0)))
              : this.setCurrentRawFrameValue(e),
              r &&
                (this.setCurrentRawFrameValue(e),
                this.pause(),
                this.trigger("complete"));
          }
        }),
        (AnimationItem.prototype.adjustSegment = function (t, e) {
          (this.playCount = 0),
            t[1] < t[0]
              ? (this.frameModifier > 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(-1)),
                (this.totalFrames = t[0] - t[1]),
                (this.timeCompleted = this.totalFrames),
                (this.firstFrame = t[1]),
                this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
              : t[1] > t[0] &&
                (this.frameModifier < 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(1)),
                (this.totalFrames = t[1] - t[0]),
                (this.timeCompleted = this.totalFrames),
                (this.firstFrame = t[0]),
                this.setCurrentRawFrameValue(0.001 + e)),
            this.trigger("segmentStart");
        }),
        (AnimationItem.prototype.setSegment = function (t, e) {
          var r = -1;
          this.isPaused &&
            (this.currentRawFrame + this.firstFrame < t
              ? (r = t)
              : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
            (this.firstFrame = t),
            (this.totalFrames = e - t),
            (this.timeCompleted = this.totalFrames),
            r !== -1 && this.goToAndStop(r, !0);
        }),
        (AnimationItem.prototype.playSegments = function (t, e) {
          if ((e && (this.segments.length = 0), _typeof$4(t[0]) === "object")) {
            var r,
              o = t.length;
            for (r = 0; r < o; r += 1) this.segments.push(t[r]);
          } else this.segments.push(t);
          this.segments.length &&
            e &&
            this.adjustSegment(this.segments.shift(), 0),
            this.isPaused && this.play();
        }),
        (AnimationItem.prototype.resetSegments = function (t) {
          (this.segments.length = 0),
            this.segments.push([this.animationData.ip, this.animationData.op]),
            t && this.checkSegments(0);
        }),
        (AnimationItem.prototype.checkSegments = function (t) {
          return (
            !!this.segments.length &&
            (this.adjustSegment(this.segments.shift(), t), !0)
          );
        }),
        (AnimationItem.prototype.destroy = function (t) {
          (t && this.name !== t) ||
            !this.renderer ||
            (this.renderer.destroy(),
            this.imagePreloader.destroy(),
            this.trigger("destroy"),
            (this._cbs = null),
            (this.onEnterFrame = null),
            (this.onLoopComplete = null),
            (this.onComplete = null),
            (this.onSegmentStart = null),
            (this.onDestroy = null),
            (this.renderer = null),
            (this.expressionsPlugin = null),
            (this.imagePreloader = null),
            (this.projectInterface = null));
        }),
        (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
          (this.currentRawFrame = t), this.gotoFrame();
        }),
        (AnimationItem.prototype.setSpeed = function (t) {
          (this.playSpeed = t), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setDirection = function (t) {
          (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setLoop = function (t) {
          this.loop = t;
        }),
        (AnimationItem.prototype.setVolume = function (t, e) {
          (e && this.name !== e) || this.audioController.setVolume(t);
        }),
        (AnimationItem.prototype.getVolume = function () {
          return this.audioController.getVolume();
        }),
        (AnimationItem.prototype.mute = function (t) {
          (t && this.name !== t) || this.audioController.mute();
        }),
        (AnimationItem.prototype.unmute = function (t) {
          (t && this.name !== t) || this.audioController.unmute();
        }),
        (AnimationItem.prototype.updaFrameModifier = function () {
          (this.frameModifier =
            this.frameMult * this.playSpeed * this.playDirection),
            this.audioController.setRate(this.playSpeed * this.playDirection);
        }),
        (AnimationItem.prototype.getPath = function () {
          return this.path;
        }),
        (AnimationItem.prototype.getAssetsPath = function (t) {
          var e = "";
          if (t.e) e = t.p;
          else if (this.assetsPath) {
            var r = t.p;
            r.indexOf("images/") !== -1 && (r = r.split("/")[1]),
              (e = this.assetsPath + r);
          } else (e = this.path), (e += t.u ? t.u : ""), (e += t.p);
          return e;
        }),
        (AnimationItem.prototype.getAssetData = function (t) {
          for (var e = 0, r = this.assets.length; e < r; ) {
            if (t === this.assets[e].id) return this.assets[e];
            e += 1;
          }
          return null;
        }),
        (AnimationItem.prototype.hide = function () {
          this.renderer.hide();
        }),
        (AnimationItem.prototype.show = function () {
          this.renderer.show();
        }),
        (AnimationItem.prototype.getDuration = function (t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate;
        }),
        (AnimationItem.prototype.updateDocumentData = function (t, e, r) {
          try {
            this.renderer.getElementByPath(t).updateDocumentData(e, r);
          } catch {}
        }),
        (AnimationItem.prototype.trigger = function (t) {
          if (this._cbs && this._cbs[t])
            switch (t) {
              case "enterFrame":
                this.triggerEvent(
                  t,
                  new BMEnterFrameEvent(
                    t,
                    this.currentFrame,
                    this.totalFrames,
                    this.frameModifier
                  )
                );
                break;
              case "drawnFrame":
                (this.drawnFrameEvent.currentTime = this.currentFrame),
                  (this.drawnFrameEvent.totalTime = this.totalFrames),
                  (this.drawnFrameEvent.direction = this.frameModifier),
                  this.triggerEvent(t, this.drawnFrameEvent);
                break;
              case "loopComplete":
                this.triggerEvent(
                  t,
                  new BMCompleteLoopEvent(
                    t,
                    this.loop,
                    this.playCount,
                    this.frameMult
                  )
                );
                break;
              case "complete":
                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                break;
              case "segmentStart":
                this.triggerEvent(
                  t,
                  new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
                );
                break;
              case "destroy":
                this.triggerEvent(t, new BMDestroyEvent(t, this));
                break;
              default:
                this.triggerEvent(t);
            }
          t === "enterFrame" &&
            this.onEnterFrame &&
            this.onEnterFrame.call(
              this,
              new BMEnterFrameEvent(
                t,
                this.currentFrame,
                this.totalFrames,
                this.frameMult
              )
            ),
            t === "loopComplete" &&
              this.onLoopComplete &&
              this.onLoopComplete.call(
                this,
                new BMCompleteLoopEvent(
                  t,
                  this.loop,
                  this.playCount,
                  this.frameMult
                )
              ),
            t === "complete" &&
              this.onComplete &&
              this.onComplete.call(
                this,
                new BMCompleteEvent(t, this.frameMult)
              ),
            t === "segmentStart" &&
              this.onSegmentStart &&
              this.onSegmentStart.call(
                this,
                new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
              ),
            t === "destroy" &&
              this.onDestroy &&
              this.onDestroy.call(this, new BMDestroyEvent(t, this));
        }),
        (AnimationItem.prototype.triggerRenderFrameError = function (t) {
          var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e),
            this.onError && this.onError.call(this, e);
        }),
        (AnimationItem.prototype.triggerConfigError = function (t) {
          var e = new BMConfigErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e),
            this.onError && this.onError.call(this, e);
        });
      var animationManager = (function () {
          var t = {},
            e = [],
            r = 0,
            o = 0,
            h = 0,
            l = !0,
            y = !1;
          function D(F) {
            for (var R = 0, U = F.target; R < o; )
              e[R].animation === U &&
                (e.splice(R, 1), (R -= 1), (o -= 1), U.isPaused || B()),
                (R += 1);
          }
          function j(F, R) {
            if (!F) return null;
            for (var U = 0; U < o; ) {
              if (e[U].elem === F && e[U].elem !== null) return e[U].animation;
              U += 1;
            }
            var X = new AnimationItem();
            return q(X, F), X.setData(F, R), X;
          }
          function Y() {
            (h += 1), G();
          }
          function B() {
            h -= 1;
          }
          function q(F, R) {
            F.addEventListener("destroy", D),
              F.addEventListener("_active", Y),
              F.addEventListener("_idle", B),
              e.push({ elem: R, animation: F }),
              (o += 1);
          }
          function O(F) {
            var R,
              U = F - r;
            for (R = 0; R < o; R += 1) e[R].animation.advanceTime(U);
            (r = F), h && !y ? window.requestAnimationFrame(O) : (l = !0);
          }
          function W(F) {
            (r = F), window.requestAnimationFrame(O);
          }
          function G() {
            !y && h && l && (window.requestAnimationFrame(W), (l = !1));
          }
          return (
            (t.registerAnimation = j),
            (t.loadAnimation = function (F) {
              var R = new AnimationItem();
              return q(R, null), R.setParams(F), R;
            }),
            (t.setSpeed = function (F, R) {
              var U;
              for (U = 0; U < o; U += 1) e[U].animation.setSpeed(F, R);
            }),
            (t.setDirection = function (F, R) {
              var U;
              for (U = 0; U < o; U += 1) e[U].animation.setDirection(F, R);
            }),
            (t.play = function (F) {
              var R;
              for (R = 0; R < o; R += 1) e[R].animation.play(F);
            }),
            (t.pause = function (F) {
              var R;
              for (R = 0; R < o; R += 1) e[R].animation.pause(F);
            }),
            (t.stop = function (F) {
              var R;
              for (R = 0; R < o; R += 1) e[R].animation.stop(F);
            }),
            (t.togglePause = function (F) {
              var R;
              for (R = 0; R < o; R += 1) e[R].animation.togglePause(F);
            }),
            (t.searchAnimations = function (F, R, U) {
              var X,
                Z = [].concat(
                  [].slice.call(document.getElementsByClassName("lottie")),
                  [].slice.call(document.getElementsByClassName("bodymovin"))
                ),
                J = Z.length;
              for (X = 0; X < J; X += 1)
                U && Z[X].setAttribute("data-bm-type", U), j(Z[X], F);
              if (R && J === 0) {
                U || (U = "svg");
                var Q = document.getElementsByTagName("body")[0];
                Q.innerText = "";
                var st = createTag("div");
                (st.style.width = "100%"),
                  (st.style.height = "100%"),
                  st.setAttribute("data-bm-type", U),
                  Q.appendChild(st),
                  j(st, F);
              }
            }),
            (t.resize = function () {
              var F;
              for (F = 0; F < o; F += 1) e[F].animation.resize();
            }),
            (t.goToAndStop = function (F, R, U) {
              var X;
              for (X = 0; X < o; X += 1) e[X].animation.goToAndStop(F, R, U);
            }),
            (t.destroy = function (F) {
              var R;
              for (R = o - 1; R >= 0; R -= 1) e[R].animation.destroy(F);
            }),
            (t.freeze = function () {
              y = !0;
            }),
            (t.unfreeze = function () {
              (y = !1), G();
            }),
            (t.setVolume = function (F, R) {
              var U;
              for (U = 0; U < o; U += 1) e[U].animation.setVolume(F, R);
            }),
            (t.mute = function (F) {
              var R;
              for (R = 0; R < o; R += 1) e[R].animation.mute(F);
            }),
            (t.unmute = function (F) {
              var R;
              for (R = 0; R < o; R += 1) e[R].animation.unmute(F);
            }),
            (t.getRegisteredAnimations = function () {
              var F,
                R = e.length,
                U = [];
              for (F = 0; F < R; F += 1) U.push(e[F].animation);
              return U;
            }),
            t
          );
        })(),
        BezierFactory = (function () {
          var t = {
              getBezierEasing: function (B, q, O, W, G) {
                var F =
                  G ||
                  ("bez_" + B + "_" + q + "_" + O + "_" + W).replace(
                    /\./g,
                    "p"
                  );
                if (e[F]) return e[F];
                var R = new Y([B, q, O, W]);
                return (e[F] = R), R;
              },
            },
            e = {},
            r = 0.1,
            o = typeof Float32Array == "function";
          function h(B, q) {
            return 1 - 3 * q + 3 * B;
          }
          function l(B, q) {
            return 3 * q - 6 * B;
          }
          function y(B) {
            return 3 * B;
          }
          function D(B, q, O) {
            return ((h(q, O) * B + l(q, O)) * B + y(q)) * B;
          }
          function j(B, q, O) {
            return 3 * h(q, O) * B * B + 2 * l(q, O) * B + y(q);
          }
          function Y(B) {
            (this._p = B),
              (this._mSampleValues = o ? new Float32Array(11) : new Array(11)),
              (this._precomputed = !1),
              (this.get = this.get.bind(this));
          }
          return (
            (Y.prototype = {
              get: function (B) {
                var q = this._p[0],
                  O = this._p[1],
                  W = this._p[2],
                  G = this._p[3];
                return (
                  this._precomputed || this._precompute(),
                  q === O && W === G
                    ? B
                    : B === 0
                    ? 0
                    : B === 1
                    ? 1
                    : D(this._getTForX(B), O, G)
                );
              },
              _precompute: function () {
                var B = this._p[0],
                  q = this._p[1],
                  O = this._p[2],
                  W = this._p[3];
                (this._precomputed = !0),
                  (B === q && O === W) || this._calcSampleValues();
              },
              _calcSampleValues: function () {
                for (var B = this._p[0], q = this._p[2], O = 0; O < 11; ++O)
                  this._mSampleValues[O] = D(O * r, B, q);
              },
              _getTForX: function (B) {
                for (
                  var q = this._p[0],
                    O = this._p[2],
                    W = this._mSampleValues,
                    G = 0,
                    F = 1;
                  F !== 10 && W[F] <= B;
                  ++F
                )
                  G += r;
                var R = G + ((B - W[--F]) / (W[F + 1] - W[F])) * r,
                  U = j(R, q, O);
                return U >= 0.001
                  ? (function (X, Z, J, Q) {
                      for (var st = 0; st < 4; ++st) {
                        var it = j(Z, J, Q);
                        if (it === 0) return Z;
                        Z -= (D(Z, J, Q) - X) / it;
                      }
                      return Z;
                    })(B, R, q, O)
                  : U === 0
                  ? R
                  : (function (X, Z, J, Q, st) {
                      var it,
                        et,
                        at = 0;
                      do
                        (it = D((et = Z + (J - Z) / 2), Q, st) - X) > 0
                          ? (J = et)
                          : (Z = et);
                      while (Math.abs(it) > 1e-7 && ++at < 10);
                      return et;
                    })(B, G, G + r, q, O);
              },
            }),
            t
          );
        })(),
        pooling = {
          double: function (t) {
            return t.concat(createSizedArray(t.length));
          },
        },
        poolFactory = function (t, e, r) {
          var o = 0,
            h = t,
            l = createSizedArray(h);
          return {
            newElement: function () {
              return o ? l[(o -= 1)] : e();
            },
            release: function (y) {
              o === h && ((l = pooling.double(l)), (h *= 2)),
                r && r(y),
                (l[o] = y),
                (o += 1);
            },
          };
        },
        bezierLengthPool = poolFactory(8, function () {
          return {
            addedLength: 0,
            percents: createTypedArray("float32", getDefaultCurveSegments()),
            lengths: createTypedArray("float32", getDefaultCurveSegments()),
          };
        }),
        segmentsLengthPool = poolFactory(
          8,
          function () {
            return { lengths: [], totalLength: 0 };
          },
          function (t) {
            var e,
              r = t.lengths.length;
            for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0;
          }
        );
      function bezFunction() {
        var t = Math;
        function e(Y, B, q, O, W, G) {
          var F = Y * O + B * W + q * G - W * O - G * Y - q * B;
          return F > -0.001 && F < 0.001;
        }
        var r = function (Y, B, q, O) {
          var W,
            G,
            F,
            R,
            U,
            X,
            Z = getDefaultCurveSegments(),
            J = 0,
            Q = [],
            st = [],
            it = bezierLengthPool.newElement();
          for (F = q.length, W = 0; W < Z; W += 1) {
            for (U = W / (Z - 1), X = 0, G = 0; G < F; G += 1)
              (R =
                bmPow(1 - U, 3) * Y[G] +
                3 * bmPow(1 - U, 2) * U * q[G] +
                3 * (1 - U) * bmPow(U, 2) * O[G] +
                bmPow(U, 3) * B[G]),
                (Q[G] = R),
                st[G] !== null && (X += bmPow(Q[G] - st[G], 2)),
                (st[G] = Q[G]);
            X && (J += X = bmSqrt(X)),
              (it.percents[W] = U),
              (it.lengths[W] = J);
          }
          return (it.addedLength = J), it;
        };
        function o(Y) {
          (this.segmentLength = 0), (this.points = new Array(Y));
        }
        function h(Y, B) {
          (this.partialLength = Y), (this.point = B);
        }
        var l,
          y =
            ((l = {}),
            function (Y, B, q, O) {
              var W = (
                Y[0] +
                "_" +
                Y[1] +
                "_" +
                B[0] +
                "_" +
                B[1] +
                "_" +
                q[0] +
                "_" +
                q[1] +
                "_" +
                O[0] +
                "_" +
                O[1]
              ).replace(/\./g, "p");
              if (!l[W]) {
                var G,
                  F,
                  R,
                  U,
                  X,
                  Z,
                  J,
                  Q = getDefaultCurveSegments(),
                  st = 0,
                  it = null;
                Y.length === 2 &&
                  (Y[0] !== B[0] || Y[1] !== B[1]) &&
                  e(Y[0], Y[1], B[0], B[1], Y[0] + q[0], Y[1] + q[1]) &&
                  e(Y[0], Y[1], B[0], B[1], B[0] + O[0], B[1] + O[1]) &&
                  (Q = 2);
                var et = new o(Q);
                for (R = q.length, G = 0; G < Q; G += 1) {
                  for (
                    J = createSizedArray(R), X = G / (Q - 1), Z = 0, F = 0;
                    F < R;
                    F += 1
                  )
                    (U =
                      bmPow(1 - X, 3) * Y[F] +
                      3 * bmPow(1 - X, 2) * X * (Y[F] + q[F]) +
                      3 * (1 - X) * bmPow(X, 2) * (B[F] + O[F]) +
                      bmPow(X, 3) * B[F]),
                      (J[F] = U),
                      it !== null && (Z += bmPow(J[F] - it[F], 2));
                  (st += Z = bmSqrt(Z)), (et.points[G] = new h(Z, J)), (it = J);
                }
                (et.segmentLength = st), (l[W] = et);
              }
              return l[W];
            });
        function D(Y, B) {
          var q = B.percents,
            O = B.lengths,
            W = q.length,
            G = bmFloor((W - 1) * Y),
            F = Y * B.addedLength,
            R = 0;
          if (G === W - 1 || G === 0 || F === O[G]) return q[G];
          for (var U = O[G] > F ? -1 : 1, X = !0; X; )
            if (
              (O[G] <= F && O[G + 1] > F
                ? ((R = (F - O[G]) / (O[G + 1] - O[G])), (X = !1))
                : (G += U),
              G < 0 || G >= W - 1)
            ) {
              if (G === W - 1) return q[G];
              X = !1;
            }
          return q[G] + (q[G + 1] - q[G]) * R;
        }
        var j = createTypedArray("float32", 8);
        return {
          getSegmentsLength: function (Y) {
            var B,
              q = segmentsLengthPool.newElement(),
              O = Y.c,
              W = Y.v,
              G = Y.o,
              F = Y.i,
              R = Y._length,
              U = q.lengths,
              X = 0;
            for (B = 0; B < R - 1; B += 1)
              (U[B] = r(W[B], W[B + 1], G[B], F[B + 1])),
                (X += U[B].addedLength);
            return (
              O &&
                R &&
                ((U[B] = r(W[B], W[0], G[B], F[0])), (X += U[B].addedLength)),
              (q.totalLength = X),
              q
            );
          },
          getNewSegment: function (Y, B, q, O, W, G, F) {
            W < 0 ? (W = 0) : W > 1 && (W = 1);
            var R,
              U = D(W, F),
              X = D((G = G > 1 ? 1 : G), F),
              Z = Y.length,
              J = 1 - U,
              Q = 1 - X,
              st = J * J * J,
              it = U * J * J * 3,
              et = U * U * J * 3,
              at = U * U * U,
              rt = J * J * Q,
              tt = U * J * Q + J * U * Q + J * J * X,
              lt = U * U * Q + J * U * X + U * J * X,
              ht = U * U * X,
              ot = J * Q * Q,
              ft = U * Q * Q + J * X * Q + J * Q * X,
              ct = U * X * Q + J * X * X + U * Q * X,
              vt = U * X * X,
              K = Q * Q * Q,
              nt = X * Q * Q + Q * X * Q + Q * Q * X,
              pt = X * X * Q + Q * X * X + X * Q * X,
              dt = X * X * X;
            for (R = 0; R < Z; R += 1)
              (j[4 * R] =
                t.round(1e3 * (st * Y[R] + it * q[R] + et * O[R] + at * B[R])) /
                1e3),
                (j[4 * R + 1] =
                  t.round(
                    1e3 * (rt * Y[R] + tt * q[R] + lt * O[R] + ht * B[R])
                  ) / 1e3),
                (j[4 * R + 2] =
                  t.round(
                    1e3 * (ot * Y[R] + ft * q[R] + ct * O[R] + vt * B[R])
                  ) / 1e3),
                (j[4 * R + 3] =
                  t.round(
                    1e3 * (K * Y[R] + nt * q[R] + pt * O[R] + dt * B[R])
                  ) / 1e3);
            return j;
          },
          getPointInSegment: function (Y, B, q, O, W, G) {
            var F = D(W, G),
              R = 1 - F;
            return [
              t.round(
                1e3 *
                  (R * R * R * Y[0] +
                    (F * R * R + R * F * R + R * R * F) * q[0] +
                    (F * F * R + R * F * F + F * R * F) * O[0] +
                    F * F * F * B[0])
              ) / 1e3,
              t.round(
                1e3 *
                  (R * R * R * Y[1] +
                    (F * R * R + R * F * R + R * R * F) * q[1] +
                    (F * F * R + R * F * F + F * R * F) * O[1] +
                    F * F * F * B[1])
              ) / 1e3,
            ];
          },
          buildBezierData: y,
          pointOnLine2D: e,
          pointOnLine3D: function (Y, B, q, O, W, G, F, R, U) {
            if (q === 0 && G === 0 && U === 0) return e(Y, B, O, W, F, R);
            var X,
              Z = t.sqrt(t.pow(O - Y, 2) + t.pow(W - B, 2) + t.pow(G - q, 2)),
              J = t.sqrt(t.pow(F - Y, 2) + t.pow(R - B, 2) + t.pow(U - q, 2)),
              Q = t.sqrt(t.pow(F - O, 2) + t.pow(R - W, 2) + t.pow(U - G, 2));
            return (
              (X =
                Z > J
                  ? Z > Q
                    ? Z - J - Q
                    : Q - J - Z
                  : Q > J
                  ? Q - J - Z
                  : J - Z - Q) > -1e-4 && X < 1e-4
            );
          },
        };
      }
      var bez = bezFunction(),
        initFrame = initialDefaultFrame,
        mathAbs = Math.abs;
      function interpolateValue(t, e) {
        var r,
          o = this.offsetTime;
        this.propType === "multidimensional" &&
          (r = createTypedArray("float32", this.pv.length));
        for (
          var h,
            l,
            y,
            D,
            j,
            Y,
            B,
            q,
            O,
            W = e.lastIndex,
            G = W,
            F = this.keyframes.length - 1,
            R = !0;
          R;

        ) {
          if (
            ((h = this.keyframes[G]),
            (l = this.keyframes[G + 1]),
            G === F - 1 && t >= l.t - o)
          ) {
            h.h && (h = l), (W = 0);
            break;
          }
          if (l.t - o > t) {
            W = G;
            break;
          }
          G < F - 1 ? (G += 1) : ((W = 0), (R = !1));
        }
        y = this.keyframesMetadata[G] || {};
        var U,
          X = l.t - o,
          Z = h.t - o;
        if (h.to) {
          y.bezierData ||
            (y.bezierData = bez.buildBezierData(h.s, l.s || h.e, h.to, h.ti));
          var J = y.bezierData;
          if (t >= X || t < Z) {
            var Q = t >= X ? J.points.length - 1 : 0;
            for (j = J.points[Q].point.length, D = 0; D < j; D += 1)
              r[D] = J.points[Q].point[D];
          } else {
            y.__fnct
              ? (O = y.__fnct)
              : ((O = BezierFactory.getBezierEasing(
                  h.o.x,
                  h.o.y,
                  h.i.x,
                  h.i.y,
                  h.n
                ).get),
                (y.__fnct = O)),
              (Y = O((t - Z) / (X - Z)));
            var st,
              it = J.segmentLength * Y,
              et =
                e.lastFrame < t && e._lastKeyframeIndex === G
                  ? e._lastAddedLength
                  : 0;
            for (
              q =
                e.lastFrame < t && e._lastKeyframeIndex === G
                  ? e._lastPoint
                  : 0,
                R = !0,
                B = J.points.length;
              R;

            ) {
              if (
                ((et += J.points[q].partialLength),
                it === 0 || Y === 0 || q === J.points.length - 1)
              ) {
                for (j = J.points[q].point.length, D = 0; D < j; D += 1)
                  r[D] = J.points[q].point[D];
                break;
              }
              if (it >= et && it < et + J.points[q + 1].partialLength) {
                for (
                  st = (it - et) / J.points[q + 1].partialLength,
                    j = J.points[q].point.length,
                    D = 0;
                  D < j;
                  D += 1
                )
                  r[D] =
                    J.points[q].point[D] +
                    (J.points[q + 1].point[D] - J.points[q].point[D]) * st;
                break;
              }
              q < B - 1 ? (q += 1) : (R = !1);
            }
            (e._lastPoint = q),
              (e._lastAddedLength = et - J.points[q].partialLength),
              (e._lastKeyframeIndex = G);
          }
        } else {
          var at, rt, tt, lt, ht;
          if (((F = h.s.length), (U = l.s || h.e), this.sh && h.h !== 1))
            t >= X
              ? ((r[0] = U[0]), (r[1] = U[1]), (r[2] = U[2]))
              : t <= Z
              ? ((r[0] = h.s[0]), (r[1] = h.s[1]), (r[2] = h.s[2]))
              : quaternionToEuler(
                  r,
                  slerp(
                    createQuaternion(h.s),
                    createQuaternion(U),
                    (t - Z) / (X - Z)
                  )
                );
          else
            for (G = 0; G < F; G += 1)
              h.h !== 1 &&
                (t >= X
                  ? (Y = 1)
                  : t < Z
                  ? (Y = 0)
                  : (h.o.x.constructor === Array
                      ? (y.__fnct || (y.__fnct = []),
                        y.__fnct[G]
                          ? (O = y.__fnct[G])
                          : ((at = h.o.x[G] === void 0 ? h.o.x[0] : h.o.x[G]),
                            (rt = h.o.y[G] === void 0 ? h.o.y[0] : h.o.y[G]),
                            (tt = h.i.x[G] === void 0 ? h.i.x[0] : h.i.x[G]),
                            (lt = h.i.y[G] === void 0 ? h.i.y[0] : h.i.y[G]),
                            (O = BezierFactory.getBezierEasing(
                              at,
                              rt,
                              tt,
                              lt
                            ).get),
                            (y.__fnct[G] = O)))
                      : y.__fnct
                      ? (O = y.__fnct)
                      : ((at = h.o.x),
                        (rt = h.o.y),
                        (tt = h.i.x),
                        (lt = h.i.y),
                        (O = BezierFactory.getBezierEasing(at, rt, tt, lt).get),
                        (h.keyframeMetadata = O)),
                    (Y = O((t - Z) / (X - Z))))),
                (U = l.s || h.e),
                (ht = h.h === 1 ? h.s[G] : h.s[G] + (U[G] - h.s[G]) * Y),
                this.propType === "multidimensional" ? (r[G] = ht) : (r = ht);
        }
        return (e.lastIndex = W), r;
      }
      function slerp(t, e, r) {
        var o,
          h,
          l,
          y,
          D,
          j = [],
          Y = t[0],
          B = t[1],
          q = t[2],
          O = t[3],
          W = e[0],
          G = e[1],
          F = e[2],
          R = e[3];
        return (
          (h = Y * W + B * G + q * F + O * R) < 0 &&
            ((h = -h), (W = -W), (G = -G), (F = -F), (R = -R)),
          1 - h > 1e-6
            ? ((o = Math.acos(h)),
              (l = Math.sin(o)),
              (y = Math.sin((1 - r) * o) / l),
              (D = Math.sin(r * o) / l))
            : ((y = 1 - r), (D = r)),
          (j[0] = y * Y + D * W),
          (j[1] = y * B + D * G),
          (j[2] = y * q + D * F),
          (j[3] = y * O + D * R),
          j
        );
      }
      function quaternionToEuler(t, e) {
        var r = e[0],
          o = e[1],
          h = e[2],
          l = e[3],
          y = Math.atan2(2 * o * l - 2 * r * h, 1 - 2 * o * o - 2 * h * h),
          D = Math.asin(2 * r * o + 2 * h * l),
          j = Math.atan2(2 * r * l - 2 * o * h, 1 - 2 * r * r - 2 * h * h);
        (t[0] = y / degToRads), (t[1] = D / degToRads), (t[2] = j / degToRads);
      }
      function createQuaternion(t) {
        var e = t[0] * degToRads,
          r = t[1] * degToRads,
          o = t[2] * degToRads,
          h = Math.cos(e / 2),
          l = Math.cos(r / 2),
          y = Math.cos(o / 2),
          D = Math.sin(e / 2),
          j = Math.sin(r / 2),
          Y = Math.sin(o / 2);
        return [
          D * j * y + h * l * Y,
          D * l * y + h * j * Y,
          h * j * y - D * l * Y,
          h * l * y - D * j * Y,
        ];
      }
      function getValueAtCurrentTime() {
        var t = this.comp.renderedFrame - this.offsetTime,
          e = this.keyframes[0].t - this.offsetTime,
          r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (
          !(
            t === this._caching.lastFrame ||
            (this._caching.lastFrame !== initFrame &&
              ((this._caching.lastFrame >= r && t >= r) ||
                (this._caching.lastFrame < e && t < e)))
          )
        ) {
          this._caching.lastFrame >= t &&
            ((this._caching._lastKeyframeIndex = -1),
            (this._caching.lastIndex = 0));
          var o = this.interpolateValue(t, this._caching);
          this.pv = o;
        }
        return (this._caching.lastFrame = t), this.pv;
      }
      function setVValue(t) {
        var e;
        if (this.propType === "unidimensional")
          (e = t * this.mult),
            mathAbs(this.v - e) > 1e-5 && ((this.v = e), (this._mdf = !0));
        else
          for (var r = 0, o = this.v.length; r < o; )
            (e = t[r] * this.mult),
              mathAbs(this.v[r] - e) > 1e-5 &&
                ((this.v[r] = e), (this._mdf = !0)),
              (r += 1);
      }
      function processEffectsSequence() {
        if (
          this.elem.globalData.frameId !== this.frameId &&
          this.effectsSequence.length
        )
          if (this.lock) this.setVValue(this.pv);
          else {
            var t;
            (this.lock = !0), (this._mdf = this._isFirstFrame);
            var e = this.effectsSequence.length,
              r = this.kf ? this.pv : this.data.k;
            for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
            this.setVValue(r),
              (this._isFirstFrame = !1),
              (this.lock = !1),
              (this.frameId = this.elem.globalData.frameId);
          }
      }
      function addEffect(t) {
        this.effectsSequence.push(t), this.container.addDynamicProperty(this);
      }
      function ValueProperty(t, e, r, o) {
        (this.propType = "unidimensional"),
          (this.mult = r || 1),
          (this.data = e),
          (this.v = r ? e.k * r : e.k),
          (this.pv = e.k),
          (this._mdf = !1),
          (this.elem = t),
          (this.container = o),
          (this.comp = t.comp),
          (this.k = !1),
          (this.kf = !1),
          (this.vel = 0),
          (this.effectsSequence = []),
          (this._isFirstFrame = !0),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.addEffect = addEffect);
      }
      function MultiDimensionalProperty(t, e, r, o) {
        var h;
        (this.propType = "multidimensional"),
          (this.mult = r || 1),
          (this.data = e),
          (this._mdf = !1),
          (this.elem = t),
          (this.container = o),
          (this.comp = t.comp),
          (this.k = !1),
          (this.kf = !1),
          (this.frameId = -1);
        var l = e.k.length;
        for (
          this.v = createTypedArray("float32", l),
            this.pv = createTypedArray("float32", l),
            this.vel = createTypedArray("float32", l),
            h = 0;
          h < l;
          h += 1
        )
          (this.v[h] = e.k[h] * this.mult), (this.pv[h] = e.k[h]);
        (this._isFirstFrame = !0),
          (this.effectsSequence = []),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.addEffect = addEffect);
      }
      function KeyframedValueProperty(t, e, r, o) {
        (this.propType = "unidimensional"),
          (this.keyframes = e.k),
          (this.keyframesMetadata = []),
          (this.offsetTime = t.data.st),
          (this.frameId = -1),
          (this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1,
          }),
          (this.k = !0),
          (this.kf = !0),
          (this.data = e),
          (this.mult = r || 1),
          (this.elem = t),
          (this.container = o),
          (this.comp = t.comp),
          (this.v = initFrame),
          (this.pv = initFrame),
          (this._isFirstFrame = !0),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.interpolateValue = interpolateValue),
          (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
          (this.addEffect = addEffect);
      }
      function KeyframedMultidimensionalProperty(t, e, r, o) {
        var h;
        this.propType = "multidimensional";
        var l,
          y,
          D,
          j,
          Y = e.k.length;
        for (h = 0; h < Y - 1; h += 1)
          e.k[h].to &&
            e.k[h].s &&
            e.k[h + 1] &&
            e.k[h + 1].s &&
            ((l = e.k[h].s),
            (y = e.k[h + 1].s),
            (D = e.k[h].to),
            (j = e.k[h].ti),
            ((l.length === 2 &&
              (l[0] !== y[0] || l[1] !== y[1]) &&
              bez.pointOnLine2D(
                l[0],
                l[1],
                y[0],
                y[1],
                l[0] + D[0],
                l[1] + D[1]
              ) &&
              bez.pointOnLine2D(
                l[0],
                l[1],
                y[0],
                y[1],
                y[0] + j[0],
                y[1] + j[1]
              )) ||
              (l.length === 3 &&
                (l[0] !== y[0] || l[1] !== y[1] || l[2] !== y[2]) &&
                bez.pointOnLine3D(
                  l[0],
                  l[1],
                  l[2],
                  y[0],
                  y[1],
                  y[2],
                  l[0] + D[0],
                  l[1] + D[1],
                  l[2] + D[2]
                ) &&
                bez.pointOnLine3D(
                  l[0],
                  l[1],
                  l[2],
                  y[0],
                  y[1],
                  y[2],
                  y[0] + j[0],
                  y[1] + j[1],
                  y[2] + j[2]
                ))) &&
              ((e.k[h].to = null), (e.k[h].ti = null)),
            l[0] === y[0] &&
              l[1] === y[1] &&
              D[0] === 0 &&
              D[1] === 0 &&
              j[0] === 0 &&
              j[1] === 0 &&
              (l.length === 2 || (l[2] === y[2] && D[2] === 0 && j[2] === 0)) &&
              ((e.k[h].to = null), (e.k[h].ti = null)));
        (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
          (this.data = e),
          (this.keyframes = e.k),
          (this.keyframesMetadata = []),
          (this.offsetTime = t.data.st),
          (this.k = !0),
          (this.kf = !0),
          (this._isFirstFrame = !0),
          (this.mult = r || 1),
          (this.elem = t),
          (this.container = o),
          (this.comp = t.comp),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.interpolateValue = interpolateValue),
          (this.frameId = -1);
        var B = e.k[0].s.length;
        for (
          this.v = createTypedArray("float32", B),
            this.pv = createTypedArray("float32", B),
            h = 0;
          h < B;
          h += 1
        )
          (this.v[h] = initFrame), (this.pv[h] = initFrame);
        (this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: createTypedArray("float32", B),
        }),
          (this.addEffect = addEffect);
      }
      var PropertyFactory =
          ((ob = {
            getProp: function (t, e, r, o, h) {
              var l;
              if (
                (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
              )
                if (typeof e.k[0] == "number")
                  l = new MultiDimensionalProperty(t, e, o, h);
                else
                  switch (r) {
                    case 0:
                      l = new KeyframedValueProperty(t, e, o, h);
                      break;
                    case 1:
                      l = new KeyframedMultidimensionalProperty(t, e, o, h);
                  }
              else l = new ValueProperty(t, e, o, h);
              return l.effectsSequence.length && h.addDynamicProperty(l), l;
            },
          }),
          ob),
        ob;
      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function (t) {
          this.dynamicProperties.indexOf(t) === -1 &&
            (this.dynamicProperties.push(t),
            this.container.addDynamicProperty(this),
            (this._isAnimated = !0));
        },
        iterateDynamicProperties: function () {
          var t;
          this._mdf = !1;
          var e = this.dynamicProperties.length;
          for (t = 0; t < e; t += 1)
            this.dynamicProperties[t].getValue(),
              this.dynamicProperties[t]._mdf && (this._mdf = !0);
        },
        initDynamicPropertyContainer: function (t) {
          (this.container = t),
            (this.dynamicProperties = []),
            (this._mdf = !1),
            (this._isAnimated = !1);
        },
      };
      var pointPool = poolFactory(8, function () {
        return createTypedArray("float32", 2);
      });
      function ShapePath() {
        (this.c = !1),
          (this._length = 0),
          (this._maxLength = 8),
          (this.v = createSizedArray(this._maxLength)),
          (this.o = createSizedArray(this._maxLength)),
          (this.i = createSizedArray(this._maxLength));
      }
      (ShapePath.prototype.setPathData = function (t, e) {
        (this.c = t), this.setLength(e);
        for (var r = 0; r < e; )
          (this.v[r] = pointPool.newElement()),
            (this.o[r] = pointPool.newElement()),
            (this.i[r] = pointPool.newElement()),
            (r += 1);
      }),
        (ShapePath.prototype.setLength = function (t) {
          for (; this._maxLength < t; ) this.doubleArrayLength();
          this._length = t;
        }),
        (ShapePath.prototype.doubleArrayLength = function () {
          (this.v = this.v.concat(createSizedArray(this._maxLength))),
            (this.i = this.i.concat(createSizedArray(this._maxLength))),
            (this.o = this.o.concat(createSizedArray(this._maxLength))),
            (this._maxLength *= 2);
        }),
        (ShapePath.prototype.setXYAt = function (t, e, r, o, h) {
          var l;
          switch (
            ((this._length = Math.max(this._length, o + 1)),
            this._length >= this._maxLength && this.doubleArrayLength(),
            r)
          ) {
            case "v":
              l = this.v;
              break;
            case "i":
              l = this.i;
              break;
            case "o":
              l = this.o;
              break;
            default:
              l = [];
          }
          (!l[o] || (l[o] && !h)) && (l[o] = pointPool.newElement()),
            (l[o][0] = t),
            (l[o][1] = e);
        }),
        (ShapePath.prototype.setTripleAt = function (t, e, r, o, h, l, y, D) {
          this.setXYAt(t, e, "v", y, D),
            this.setXYAt(r, o, "o", y, D),
            this.setXYAt(h, l, "i", y, D);
        }),
        (ShapePath.prototype.reverse = function () {
          var t = new ShapePath();
          t.setPathData(this.c, this._length);
          var e = this.v,
            r = this.o,
            o = this.i,
            h = 0;
          this.c &&
            (t.setTripleAt(
              e[0][0],
              e[0][1],
              o[0][0],
              o[0][1],
              r[0][0],
              r[0][1],
              0,
              !1
            ),
            (h = 1));
          var l,
            y = this._length - 1,
            D = this._length;
          for (l = h; l < D; l += 1)
            t.setTripleAt(
              e[y][0],
              e[y][1],
              o[y][0],
              o[y][1],
              r[y][0],
              r[y][1],
              l,
              !1
            ),
              (y -= 1);
          return t;
        }),
        (ShapePath.prototype.length = function () {
          return this._length;
        });
      var shapePool =
          ((factory = poolFactory(
            4,
            function () {
              return new ShapePath();
            },
            function (t) {
              var e,
                r = t._length;
              for (e = 0; e < r; e += 1)
                pointPool.release(t.v[e]),
                  pointPool.release(t.i[e]),
                  pointPool.release(t.o[e]),
                  (t.v[e] = null),
                  (t.i[e] = null),
                  (t.o[e] = null);
              (t._length = 0), (t.c = !1);
            }
          )),
          (factory.clone = function (t) {
            var e,
              r = factory.newElement(),
              o = t._length === void 0 ? t.v.length : t._length;
            for (r.setLength(o), r.c = t.c, e = 0; e < o; e += 1)
              r.setTripleAt(
                t.v[e][0],
                t.v[e][1],
                t.o[e][0],
                t.o[e][1],
                t.i[e][0],
                t.i[e][1],
                e
              );
            return r;
          }),
          factory),
        factory;
      function ShapeCollection() {
        (this._length = 0),
          (this._maxLength = 4),
          (this.shapes = createSizedArray(this._maxLength));
      }
      (ShapeCollection.prototype.addShape = function (t) {
        this._length === this._maxLength &&
          ((this.shapes = this.shapes.concat(
            createSizedArray(this._maxLength)
          )),
          (this._maxLength *= 2)),
          (this.shapes[this._length] = t),
          (this._length += 1);
      }),
        (ShapeCollection.prototype.releaseShapes = function () {
          var t;
          for (t = 0; t < this._length; t += 1)
            shapePool.release(this.shapes[t]);
          this._length = 0;
        });
      var shapeCollectionPool = (function () {
          var t = {
              newShapeCollection: function () {
                return e ? o[(e -= 1)] : new ShapeCollection();
              },
              release: function (h) {
                var l,
                  y = h._length;
                for (l = 0; l < y; l += 1) shapePool.release(h.shapes[l]);
                (h._length = 0),
                  e === r && ((o = pooling.double(o)), (r *= 2)),
                  (o[e] = h),
                  (e += 1);
              },
            },
            e = 0,
            r = 4,
            o = createSizedArray(r);
          return t;
        })(),
        ShapePropertyFactory = (function () {
          var t = -999999;
          function e(W, G, F) {
            var R,
              U,
              X,
              Z,
              J,
              Q,
              st,
              it,
              et,
              at = F.lastIndex,
              rt = this.keyframes;
            if (W < rt[0].t - this.offsetTime)
              (R = rt[0].s[0]), (X = !0), (at = 0);
            else if (W >= rt[rt.length - 1].t - this.offsetTime)
              (R = rt[rt.length - 1].s
                ? rt[rt.length - 1].s[0]
                : rt[rt.length - 2].e[0]),
                (X = !0);
            else {
              for (
                var tt, lt, ht, ot = at, ft = rt.length - 1, ct = !0;
                ct &&
                ((tt = rt[ot]), !((lt = rt[ot + 1]).t - this.offsetTime > W));

              )
                ot < ft - 1 ? (ot += 1) : (ct = !1);
              if (
                ((ht = this.keyframesMetadata[ot] || {}),
                (at = ot),
                !(X = tt.h === 1))
              ) {
                if (W >= lt.t - this.offsetTime) it = 1;
                else if (W < tt.t - this.offsetTime) it = 0;
                else {
                  var vt;
                  ht.__fnct
                    ? (vt = ht.__fnct)
                    : ((vt = BezierFactory.getBezierEasing(
                        tt.o.x,
                        tt.o.y,
                        tt.i.x,
                        tt.i.y
                      ).get),
                      (ht.__fnct = vt)),
                    (it = vt(
                      (W - (tt.t - this.offsetTime)) /
                        (lt.t - this.offsetTime - (tt.t - this.offsetTime))
                    ));
                }
                U = lt.s ? lt.s[0] : tt.e[0];
              }
              R = tt.s[0];
            }
            for (
              Q = G._length, st = R.i[0].length, F.lastIndex = at, Z = 0;
              Z < Q;
              Z += 1
            )
              for (J = 0; J < st; J += 1)
                (et = X ? R.i[Z][J] : R.i[Z][J] + (U.i[Z][J] - R.i[Z][J]) * it),
                  (G.i[Z][J] = et),
                  (et = X
                    ? R.o[Z][J]
                    : R.o[Z][J] + (U.o[Z][J] - R.o[Z][J]) * it),
                  (G.o[Z][J] = et),
                  (et = X
                    ? R.v[Z][J]
                    : R.v[Z][J] + (U.v[Z][J] - R.v[Z][J]) * it),
                  (G.v[Z][J] = et);
          }
          function r() {
            var W = this.comp.renderedFrame - this.offsetTime,
              G = this.keyframes[0].t - this.offsetTime,
              F = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
              R = this._caching.lastFrame;
            return (
              (R !== t && ((R < G && W < G) || (R > F && W > F))) ||
                ((this._caching.lastIndex =
                  R < W ? this._caching.lastIndex : 0),
                this.interpolateShape(W, this.pv, this._caching)),
              (this._caching.lastFrame = W),
              this.pv
            );
          }
          function o() {
            this.paths = this.localShapeCollection;
          }
          function h(W) {
            (function (G, F) {
              if (G._length !== F._length || G.c !== F.c) return !1;
              var R,
                U = G._length;
              for (R = 0; R < U; R += 1)
                if (
                  G.v[R][0] !== F.v[R][0] ||
                  G.v[R][1] !== F.v[R][1] ||
                  G.o[R][0] !== F.o[R][0] ||
                  G.o[R][1] !== F.o[R][1] ||
                  G.i[R][0] !== F.i[R][0] ||
                  G.i[R][1] !== F.i[R][1]
                )
                  return !1;
              return !0;
            })(this.v, W) ||
              ((this.v = shapePool.clone(W)),
              this.localShapeCollection.releaseShapes(),
              this.localShapeCollection.addShape(this.v),
              (this._mdf = !0),
              (this.paths = this.localShapeCollection));
          }
          function l() {
            if (this.elem.globalData.frameId !== this.frameId)
              if (this.effectsSequence.length)
                if (this.lock) this.setVValue(this.pv);
                else {
                  var W, G;
                  (this.lock = !0),
                    (this._mdf = !1),
                    (W = this.kf
                      ? this.pv
                      : this.data.ks
                      ? this.data.ks.k
                      : this.data.pt.k);
                  var F = this.effectsSequence.length;
                  for (G = 0; G < F; G += 1) W = this.effectsSequence[G](W);
                  this.setVValue(W),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId);
                }
              else this._mdf = !1;
          }
          function y(W, G, F) {
            (this.propType = "shape"),
              (this.comp = W.comp),
              (this.container = W),
              (this.elem = W),
              (this.data = G),
              (this.k = !1),
              (this.kf = !1),
              (this._mdf = !1);
            var R = F === 3 ? G.pt.k : G.ks.k;
            (this.v = shapePool.clone(R)),
              (this.pv = shapePool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollectionPool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.reset = o),
              (this.effectsSequence = []);
          }
          function D(W) {
            this.effectsSequence.push(W),
              this.container.addDynamicProperty(this);
          }
          function j(W, G, F) {
            (this.propType = "shape"),
              (this.comp = W.comp),
              (this.elem = W),
              (this.container = W),
              (this.offsetTime = W.data.st),
              (this.keyframes = F === 3 ? G.pt.k : G.ks.k),
              (this.keyframesMetadata = []),
              (this.k = !0),
              (this.kf = !0);
            var R = this.keyframes[0].s[0].i.length;
            (this.v = shapePool.newElement()),
              this.v.setPathData(this.keyframes[0].s[0].c, R),
              (this.pv = shapePool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollectionPool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.lastFrame = t),
              (this.reset = o),
              (this._caching = { lastFrame: t, lastIndex: 0 }),
              (this.effectsSequence = [r.bind(this)]);
          }
          (y.prototype.interpolateShape = e),
            (y.prototype.getValue = l),
            (y.prototype.setVValue = h),
            (y.prototype.addEffect = D),
            (j.prototype.getValue = l),
            (j.prototype.interpolateShape = e),
            (j.prototype.setVValue = h),
            (j.prototype.addEffect = D);
          var Y = (function () {
              var W = roundCorner;
              function G(F, R) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 4),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.localShapeCollection.addShape(this.v),
                  (this.d = R.d),
                  (this.elem = F),
                  (this.comp = F.comp),
                  (this.frameId = -1),
                  this.initDynamicPropertyContainer(F),
                  (this.p = PropertyFactory.getProp(F, R.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(F, R.s, 1, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertEllToPath());
              }
              return (
                (G.prototype = {
                  reset: o,
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertEllToPath());
                  },
                  convertEllToPath: function () {
                    var F = this.p.v[0],
                      R = this.p.v[1],
                      U = this.s.v[0] / 2,
                      X = this.s.v[1] / 2,
                      Z = this.d !== 3,
                      J = this.v;
                    (J.v[0][0] = F),
                      (J.v[0][1] = R - X),
                      (J.v[1][0] = Z ? F + U : F - U),
                      (J.v[1][1] = R),
                      (J.v[2][0] = F),
                      (J.v[2][1] = R + X),
                      (J.v[3][0] = Z ? F - U : F + U),
                      (J.v[3][1] = R),
                      (J.i[0][0] = Z ? F - U * W : F + U * W),
                      (J.i[0][1] = R - X),
                      (J.i[1][0] = Z ? F + U : F - U),
                      (J.i[1][1] = R - X * W),
                      (J.i[2][0] = Z ? F + U * W : F - U * W),
                      (J.i[2][1] = R + X),
                      (J.i[3][0] = Z ? F - U : F + U),
                      (J.i[3][1] = R + X * W),
                      (J.o[0][0] = Z ? F + U * W : F - U * W),
                      (J.o[0][1] = R - X),
                      (J.o[1][0] = Z ? F + U : F - U),
                      (J.o[1][1] = R + X * W),
                      (J.o[2][0] = Z ? F - U * W : F + U * W),
                      (J.o[2][1] = R + X),
                      (J.o[3][0] = Z ? F - U : F + U),
                      (J.o[3][1] = R - X * W);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], G),
                G
              );
            })(),
            B = (function () {
              function W(G, F) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 0),
                  (this.elem = G),
                  (this.comp = G.comp),
                  (this.data = F),
                  (this.frameId = -1),
                  (this.d = F.d),
                  this.initDynamicPropertyContainer(G),
                  F.sy === 1
                    ? ((this.ir = PropertyFactory.getProp(G, F.ir, 0, 0, this)),
                      (this.is = PropertyFactory.getProp(
                        G,
                        F.is,
                        0,
                        0.01,
                        this
                      )),
                      (this.convertToPath = this.convertStarToPath))
                    : (this.convertToPath = this.convertPolygonToPath),
                  (this.pt = PropertyFactory.getProp(G, F.pt, 0, 0, this)),
                  (this.p = PropertyFactory.getProp(G, F.p, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(
                    G,
                    F.r,
                    0,
                    degToRads,
                    this
                  )),
                  (this.or = PropertyFactory.getProp(G, F.or, 0, 0, this)),
                  (this.os = PropertyFactory.getProp(G, F.os, 0, 0.01, this)),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertToPath());
              }
              return (
                (W.prototype = {
                  reset: o,
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertToPath());
                  },
                  convertStarToPath: function () {
                    var G,
                      F,
                      R,
                      U,
                      X = 2 * Math.floor(this.pt.v),
                      Z = (2 * Math.PI) / X,
                      J = !0,
                      Q = this.or.v,
                      st = this.ir.v,
                      it = this.os.v,
                      et = this.is.v,
                      at = (2 * Math.PI * Q) / (2 * X),
                      rt = (2 * Math.PI * st) / (2 * X),
                      tt = -Math.PI / 2;
                    tt += this.r.v;
                    var lt = this.data.d === 3 ? -1 : 1;
                    for (this.v._length = 0, G = 0; G < X; G += 1) {
                      (R = J ? it : et), (U = J ? at : rt);
                      var ht = (F = J ? Q : st) * Math.cos(tt),
                        ot = F * Math.sin(tt),
                        ft =
                          ht === 0 && ot === 0
                            ? 0
                            : ot / Math.sqrt(ht * ht + ot * ot),
                        ct =
                          ht === 0 && ot === 0
                            ? 0
                            : -ht / Math.sqrt(ht * ht + ot * ot);
                      (ht += +this.p.v[0]),
                        (ot += +this.p.v[1]),
                        this.v.setTripleAt(
                          ht,
                          ot,
                          ht - ft * U * R * lt,
                          ot - ct * U * R * lt,
                          ht + ft * U * R * lt,
                          ot + ct * U * R * lt,
                          G,
                          !0
                        ),
                        (J = !J),
                        (tt += Z * lt);
                    }
                  },
                  convertPolygonToPath: function () {
                    var G,
                      F = Math.floor(this.pt.v),
                      R = (2 * Math.PI) / F,
                      U = this.or.v,
                      X = this.os.v,
                      Z = (2 * Math.PI * U) / (4 * F),
                      J = 0.5 * -Math.PI,
                      Q = this.data.d === 3 ? -1 : 1;
                    for (
                      J += this.r.v, this.v._length = 0, G = 0;
                      G < F;
                      G += 1
                    ) {
                      var st = U * Math.cos(J),
                        it = U * Math.sin(J),
                        et =
                          st === 0 && it === 0
                            ? 0
                            : it / Math.sqrt(st * st + it * it),
                        at =
                          st === 0 && it === 0
                            ? 0
                            : -st / Math.sqrt(st * st + it * it);
                      (st += +this.p.v[0]),
                        (it += +this.p.v[1]),
                        this.v.setTripleAt(
                          st,
                          it,
                          st - et * Z * X * Q,
                          it - at * Z * X * Q,
                          st + et * Z * X * Q,
                          it + at * Z * X * Q,
                          G,
                          !0
                        ),
                        (J += R * Q);
                    }
                    (this.paths.length = 0), (this.paths[0] = this.v);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], W),
                W
              );
            })(),
            q = (function () {
              function W(G, F) {
                (this.v = shapePool.newElement()),
                  (this.v.c = !0),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  (this.elem = G),
                  (this.comp = G.comp),
                  (this.frameId = -1),
                  (this.d = F.d),
                  this.initDynamicPropertyContainer(G),
                  (this.p = PropertyFactory.getProp(G, F.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(G, F.s, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(G, F.r, 0, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertRectToPath());
              }
              return (
                (W.prototype = {
                  convertRectToPath: function () {
                    var G = this.p.v[0],
                      F = this.p.v[1],
                      R = this.s.v[0] / 2,
                      U = this.s.v[1] / 2,
                      X = bmMin(R, U, this.r.v),
                      Z = X * (1 - roundCorner);
                    (this.v._length = 0),
                      this.d === 2 || this.d === 1
                        ? (this.v.setTripleAt(
                            G + R,
                            F - U + X,
                            G + R,
                            F - U + X,
                            G + R,
                            F - U + Z,
                            0,
                            !0
                          ),
                          this.v.setTripleAt(
                            G + R,
                            F + U - X,
                            G + R,
                            F + U - Z,
                            G + R,
                            F + U - X,
                            1,
                            !0
                          ),
                          X !== 0
                            ? (this.v.setTripleAt(
                                G + R - X,
                                F + U,
                                G + R - X,
                                F + U,
                                G + R - Z,
                                F + U,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                G - R + X,
                                F + U,
                                G - R + Z,
                                F + U,
                                G - R + X,
                                F + U,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                G - R,
                                F + U - X,
                                G - R,
                                F + U - X,
                                G - R,
                                F + U - Z,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                G - R,
                                F - U + X,
                                G - R,
                                F - U + Z,
                                G - R,
                                F - U + X,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                G - R + X,
                                F - U,
                                G - R + X,
                                F - U,
                                G - R + Z,
                                F - U,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                G + R - X,
                                F - U,
                                G + R - Z,
                                F - U,
                                G + R - X,
                                F - U,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                G - R,
                                F + U,
                                G - R + Z,
                                F + U,
                                G - R,
                                F + U,
                                2
                              ),
                              this.v.setTripleAt(
                                G - R,
                                F - U,
                                G - R,
                                F - U + Z,
                                G - R,
                                F - U,
                                3
                              )))
                        : (this.v.setTripleAt(
                            G + R,
                            F - U + X,
                            G + R,
                            F - U + Z,
                            G + R,
                            F - U + X,
                            0,
                            !0
                          ),
                          X !== 0
                            ? (this.v.setTripleAt(
                                G + R - X,
                                F - U,
                                G + R - X,
                                F - U,
                                G + R - Z,
                                F - U,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                G - R + X,
                                F - U,
                                G - R + Z,
                                F - U,
                                G - R + X,
                                F - U,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                G - R,
                                F - U + X,
                                G - R,
                                F - U + X,
                                G - R,
                                F - U + Z,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                G - R,
                                F + U - X,
                                G - R,
                                F + U - Z,
                                G - R,
                                F + U - X,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                G - R + X,
                                F + U,
                                G - R + X,
                                F + U,
                                G - R + Z,
                                F + U,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                G + R - X,
                                F + U,
                                G + R - Z,
                                F + U,
                                G + R - X,
                                F + U,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                G + R,
                                F + U - X,
                                G + R,
                                F + U - X,
                                G + R,
                                F + U - Z,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                G - R,
                                F - U,
                                G - R + Z,
                                F - U,
                                G - R,
                                F - U,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                G - R,
                                F + U,
                                G - R,
                                F + U - Z,
                                G - R,
                                F + U,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                G + R,
                                F + U,
                                G + R - Z,
                                F + U,
                                G + R,
                                F + U,
                                3,
                                !0
                              )));
                  },
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._mdf && this.convertRectToPath());
                  },
                  reset: o,
                }),
                extendPrototype([DynamicPropertyContainer], W),
                W
              );
            })(),
            O = {
              getShapeProp: function (W, G, F) {
                var R;
                return (
                  F === 3 || F === 4
                    ? (R = (F === 3 ? G.pt : G.ks).k.length
                        ? new j(W, G, F)
                        : new y(W, G, F))
                    : F === 5
                    ? (R = new q(W, G))
                    : F === 6
                    ? (R = new Y(W, G))
                    : F === 7 && (R = new B(W, G)),
                  R.k && W.addDynamicProperty(R),
                  R
                );
              },
              getConstructorFunction: function () {
                return y;
              },
              getKeyframedConstructorFunction: function () {
                return j;
              },
            };
          return O;
        })(),
        Matrix = (function () {
          var t = Math.cos,
            e = Math.sin,
            r = Math.tan,
            o = Math.round;
          function h() {
            return (
              (this.props[0] = 1),
              (this.props[1] = 0),
              (this.props[2] = 0),
              (this.props[3] = 0),
              (this.props[4] = 0),
              (this.props[5] = 1),
              (this.props[6] = 0),
              (this.props[7] = 0),
              (this.props[8] = 0),
              (this.props[9] = 0),
              (this.props[10] = 1),
              (this.props[11] = 0),
              (this.props[12] = 0),
              (this.props[13] = 0),
              (this.props[14] = 0),
              (this.props[15] = 1),
              this
            );
          }
          function l(K) {
            if (K === 0) return this;
            var nt = t(K),
              pt = e(K);
            return this._t(nt, -pt, 0, 0, pt, nt, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function y(K) {
            if (K === 0) return this;
            var nt = t(K),
              pt = e(K);
            return this._t(1, 0, 0, 0, 0, nt, -pt, 0, 0, pt, nt, 0, 0, 0, 0, 1);
          }
          function D(K) {
            if (K === 0) return this;
            var nt = t(K),
              pt = e(K);
            return this._t(nt, 0, pt, 0, 0, 1, 0, 0, -pt, 0, nt, 0, 0, 0, 0, 1);
          }
          function j(K) {
            if (K === 0) return this;
            var nt = t(K),
              pt = e(K);
            return this._t(nt, -pt, 0, 0, pt, nt, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function Y(K, nt) {
            return this._t(1, nt, K, 1, 0, 0);
          }
          function B(K, nt) {
            return this.shear(r(K), r(nt));
          }
          function q(K, nt) {
            var pt = t(nt),
              dt = e(nt);
            return this._t(pt, dt, 0, 0, -dt, pt, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              ._t(1, 0, 0, 0, r(K), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              ._t(pt, -dt, 0, 0, dt, pt, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function O(K, nt, pt) {
            return (
              pt || pt === 0 || (pt = 1),
              K === 1 && nt === 1 && pt === 1
                ? this
                : this._t(K, 0, 0, 0, 0, nt, 0, 0, 0, 0, pt, 0, 0, 0, 0, 1)
            );
          }
          function W(
            K,
            nt,
            pt,
            dt,
            Et,
            bt,
            Pt,
            yt,
            St,
            ut,
            gt,
            Ct,
            Tt,
            At,
            kt,
            xt
          ) {
            return (
              (this.props[0] = K),
              (this.props[1] = nt),
              (this.props[2] = pt),
              (this.props[3] = dt),
              (this.props[4] = Et),
              (this.props[5] = bt),
              (this.props[6] = Pt),
              (this.props[7] = yt),
              (this.props[8] = St),
              (this.props[9] = ut),
              (this.props[10] = gt),
              (this.props[11] = Ct),
              (this.props[12] = Tt),
              (this.props[13] = At),
              (this.props[14] = kt),
              (this.props[15] = xt),
              this
            );
          }
          function G(K, nt, pt) {
            return (
              (pt = pt || 0),
              K !== 0 || nt !== 0 || pt !== 0
                ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, K, nt, pt, 1)
                : this
            );
          }
          function F(
            K,
            nt,
            pt,
            dt,
            Et,
            bt,
            Pt,
            yt,
            St,
            ut,
            gt,
            Ct,
            Tt,
            At,
            kt,
            xt
          ) {
            var mt = this.props;
            if (
              K === 1 &&
              nt === 0 &&
              pt === 0 &&
              dt === 0 &&
              Et === 0 &&
              bt === 1 &&
              Pt === 0 &&
              yt === 0 &&
              St === 0 &&
              ut === 0 &&
              gt === 1 &&
              Ct === 0
            )
              return (
                (mt[12] = mt[12] * K + mt[15] * Tt),
                (mt[13] = mt[13] * bt + mt[15] * At),
                (mt[14] = mt[14] * gt + mt[15] * kt),
                (mt[15] *= xt),
                (this._identityCalculated = !1),
                this
              );
            var $t = mt[0],
              zt = mt[1],
              Lt = mt[2],
              Dt = mt[3],
              Ft = mt[4],
              _t = mt[5],
              It = mt[6],
              Vt = mt[7],
              Mt = mt[8],
              Bt = mt[9],
              wt = mt[10],
              Rt = mt[11],
              Ot = mt[12],
              Gt = mt[13],
              Nt = mt[14],
              Ht = mt[15];
            return (
              (mt[0] = $t * K + zt * Et + Lt * St + Dt * Tt),
              (mt[1] = $t * nt + zt * bt + Lt * ut + Dt * At),
              (mt[2] = $t * pt + zt * Pt + Lt * gt + Dt * kt),
              (mt[3] = $t * dt + zt * yt + Lt * Ct + Dt * xt),
              (mt[4] = Ft * K + _t * Et + It * St + Vt * Tt),
              (mt[5] = Ft * nt + _t * bt + It * ut + Vt * At),
              (mt[6] = Ft * pt + _t * Pt + It * gt + Vt * kt),
              (mt[7] = Ft * dt + _t * yt + It * Ct + Vt * xt),
              (mt[8] = Mt * K + Bt * Et + wt * St + Rt * Tt),
              (mt[9] = Mt * nt + Bt * bt + wt * ut + Rt * At),
              (mt[10] = Mt * pt + Bt * Pt + wt * gt + Rt * kt),
              (mt[11] = Mt * dt + Bt * yt + wt * Ct + Rt * xt),
              (mt[12] = Ot * K + Gt * Et + Nt * St + Ht * Tt),
              (mt[13] = Ot * nt + Gt * bt + Nt * ut + Ht * At),
              (mt[14] = Ot * pt + Gt * Pt + Nt * gt + Ht * kt),
              (mt[15] = Ot * dt + Gt * yt + Nt * Ct + Ht * xt),
              (this._identityCalculated = !1),
              this
            );
          }
          function R(K) {
            var nt = K.props;
            return this.transform(
              nt[0],
              nt[1],
              nt[2],
              nt[3],
              nt[4],
              nt[5],
              nt[6],
              nt[7],
              nt[8],
              nt[9],
              nt[10],
              nt[11],
              nt[12],
              nt[13],
              nt[14],
              nt[15]
            );
          }
          function U() {
            return (
              this._identityCalculated ||
                ((this._identity = !(
                  this.props[0] !== 1 ||
                  this.props[1] !== 0 ||
                  this.props[2] !== 0 ||
                  this.props[3] !== 0 ||
                  this.props[4] !== 0 ||
                  this.props[5] !== 1 ||
                  this.props[6] !== 0 ||
                  this.props[7] !== 0 ||
                  this.props[8] !== 0 ||
                  this.props[9] !== 0 ||
                  this.props[10] !== 1 ||
                  this.props[11] !== 0 ||
                  this.props[12] !== 0 ||
                  this.props[13] !== 0 ||
                  this.props[14] !== 0 ||
                  this.props[15] !== 1
                )),
                (this._identityCalculated = !0)),
              this._identity
            );
          }
          function X(K) {
            for (var nt = 0; nt < 16; ) {
              if (K.props[nt] !== this.props[nt]) return !1;
              nt += 1;
            }
            return !0;
          }
          function Z(K) {
            var nt;
            for (nt = 0; nt < 16; nt += 1) K.props[nt] = this.props[nt];
            return K;
          }
          function J(K) {
            var nt;
            for (nt = 0; nt < 16; nt += 1) this.props[nt] = K[nt];
          }
          function Q(K, nt, pt) {
            return {
              x:
                K * this.props[0] +
                nt * this.props[4] +
                pt * this.props[8] +
                this.props[12],
              y:
                K * this.props[1] +
                nt * this.props[5] +
                pt * this.props[9] +
                this.props[13],
              z:
                K * this.props[2] +
                nt * this.props[6] +
                pt * this.props[10] +
                this.props[14],
            };
          }
          function st(K, nt, pt) {
            return (
              K * this.props[0] +
              nt * this.props[4] +
              pt * this.props[8] +
              this.props[12]
            );
          }
          function it(K, nt, pt) {
            return (
              K * this.props[1] +
              nt * this.props[5] +
              pt * this.props[9] +
              this.props[13]
            );
          }
          function et(K, nt, pt) {
            return (
              K * this.props[2] +
              nt * this.props[6] +
              pt * this.props[10] +
              this.props[14]
            );
          }
          function at() {
            var K =
                this.props[0] * this.props[5] - this.props[1] * this.props[4],
              nt = this.props[5] / K,
              pt = -this.props[1] / K,
              dt = -this.props[4] / K,
              Et = this.props[0] / K,
              bt =
                (this.props[4] * this.props[13] -
                  this.props[5] * this.props[12]) /
                K,
              Pt =
                -(
                  this.props[0] * this.props[13] -
                  this.props[1] * this.props[12]
                ) / K,
              yt = new Matrix();
            return (
              (yt.props[0] = nt),
              (yt.props[1] = pt),
              (yt.props[4] = dt),
              (yt.props[5] = Et),
              (yt.props[12] = bt),
              (yt.props[13] = Pt),
              yt
            );
          }
          function rt(K) {
            return this.getInverseMatrix().applyToPointArray(
              K[0],
              K[1],
              K[2] || 0
            );
          }
          function tt(K) {
            var nt,
              pt = K.length,
              dt = [];
            for (nt = 0; nt < pt; nt += 1) dt[nt] = rt(K[nt]);
            return dt;
          }
          function lt(K, nt, pt) {
            var dt = createTypedArray("float32", 6);
            if (this.isIdentity())
              (dt[0] = K[0]),
                (dt[1] = K[1]),
                (dt[2] = nt[0]),
                (dt[3] = nt[1]),
                (dt[4] = pt[0]),
                (dt[5] = pt[1]);
            else {
              var Et = this.props[0],
                bt = this.props[1],
                Pt = this.props[4],
                yt = this.props[5],
                St = this.props[12],
                ut = this.props[13];
              (dt[0] = K[0] * Et + K[1] * Pt + St),
                (dt[1] = K[0] * bt + K[1] * yt + ut),
                (dt[2] = nt[0] * Et + nt[1] * Pt + St),
                (dt[3] = nt[0] * bt + nt[1] * yt + ut),
                (dt[4] = pt[0] * Et + pt[1] * Pt + St),
                (dt[5] = pt[0] * bt + pt[1] * yt + ut);
            }
            return dt;
          }
          function ht(K, nt, pt) {
            return this.isIdentity()
              ? [K, nt, pt]
              : [
                  K * this.props[0] +
                    nt * this.props[4] +
                    pt * this.props[8] +
                    this.props[12],
                  K * this.props[1] +
                    nt * this.props[5] +
                    pt * this.props[9] +
                    this.props[13],
                  K * this.props[2] +
                    nt * this.props[6] +
                    pt * this.props[10] +
                    this.props[14],
                ];
          }
          function ot(K, nt) {
            if (this.isIdentity()) return K + "," + nt;
            var pt = this.props;
            return (
              Math.round(100 * (K * pt[0] + nt * pt[4] + pt[12])) / 100 +
              "," +
              Math.round(100 * (K * pt[1] + nt * pt[5] + pt[13])) / 100
            );
          }
          function ft() {
            for (var K = 0, nt = this.props, pt = "matrix3d("; K < 16; )
              (pt += o(1e4 * nt[K]) / 1e4),
                (pt += K === 15 ? ")" : ","),
                (K += 1);
            return pt;
          }
          function ct(K) {
            return (K < 1e-6 && K > 0) || (K > -1e-6 && K < 0)
              ? o(1e4 * K) / 1e4
              : K;
          }
          function vt() {
            var K = this.props;
            return (
              "matrix(" +
              ct(K[0]) +
              "," +
              ct(K[1]) +
              "," +
              ct(K[4]) +
              "," +
              ct(K[5]) +
              "," +
              ct(K[12]) +
              "," +
              ct(K[13]) +
              ")"
            );
          }
          return function () {
            (this.reset = h),
              (this.rotate = l),
              (this.rotateX = y),
              (this.rotateY = D),
              (this.rotateZ = j),
              (this.skew = B),
              (this.skewFromAxis = q),
              (this.shear = Y),
              (this.scale = O),
              (this.setTransform = W),
              (this.translate = G),
              (this.transform = F),
              (this.multiply = R),
              (this.applyToPoint = Q),
              (this.applyToX = st),
              (this.applyToY = it),
              (this.applyToZ = et),
              (this.applyToPointArray = ht),
              (this.applyToTriplePoints = lt),
              (this.applyToPointStringified = ot),
              (this.toCSS = ft),
              (this.to2dCSS = vt),
              (this.clone = Z),
              (this.cloneFromProps = J),
              (this.equals = X),
              (this.inversePoints = tt),
              (this.inversePoint = rt),
              (this.getInverseMatrix = at),
              (this._t = this.transform),
              (this.isIdentity = U),
              (this._identity = !0),
              (this._identityCalculated = !1),
              (this.props = createTypedArray("float32", 16)),
              this.reset();
          };
        })();
      function _typeof$3(t) {
        return (
          (_typeof$3 =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          _typeof$3(t)
        );
      }
      var lottie = {};
      function setLocation(t) {
        setLocationHref(t);
      }
      function searchAnimations() {
        animationManager.searchAnimations();
      }
      function setSubframeRendering(t) {
        setSubframeEnabled(t);
      }
      function setPrefix(t) {
        setIdPrefix(t);
      }
      function loadAnimation(t) {
        return animationManager.loadAnimation(t);
      }
      function setQuality(t) {
        if (typeof t == "string")
          switch (t) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10);
          }
        else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
      }
      function inBrowser() {
        return typeof navigator < "u";
      }
      function installPlugin(t, e) {
        t === "expressions" && setExpressionsPlugin(e);
      }
      function getFactory(t) {
        switch (t) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
          default:
            return null;
        }
      }
      function checkReady() {
        document.readyState === "complete" &&
          (clearInterval(readyStateCheckInterval), searchAnimations());
      }
      function getQueryVariable(t) {
        for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
          var o = e[r].split("=");
          if (decodeURIComponent(o[0]) == t) return decodeURIComponent(o[1]);
        }
        return null;
      }
      (lottie.play = animationManager.play),
        (lottie.pause = animationManager.pause),
        (lottie.setLocationHref = setLocation),
        (lottie.togglePause = animationManager.togglePause),
        (lottie.setSpeed = animationManager.setSpeed),
        (lottie.setDirection = animationManager.setDirection),
        (lottie.stop = animationManager.stop),
        (lottie.searchAnimations = searchAnimations),
        (lottie.registerAnimation = animationManager.registerAnimation),
        (lottie.loadAnimation = loadAnimation),
        (lottie.setSubframeRendering = setSubframeRendering),
        (lottie.resize = animationManager.resize),
        (lottie.goToAndStop = animationManager.goToAndStop),
        (lottie.destroy = animationManager.destroy),
        (lottie.setQuality = setQuality),
        (lottie.inBrowser = inBrowser),
        (lottie.installPlugin = installPlugin),
        (lottie.freeze = animationManager.freeze),
        (lottie.unfreeze = animationManager.unfreeze),
        (lottie.setVolume = animationManager.setVolume),
        (lottie.mute = animationManager.mute),
        (lottie.unmute = animationManager.unmute),
        (lottie.getRegisteredAnimations =
          animationManager.getRegisteredAnimations),
        (lottie.useWebWorker = setWebWorker),
        (lottie.setIDPrefix = setPrefix),
        (lottie.__getFactory = getFactory),
        (lottie.version = "5.12.2");
      var queryString = "";
      {
        var scripts = document.getElementsByTagName("script"),
          index = scripts.length - 1,
          myScript = scripts[index] || { src: "" };
        (queryString = myScript.src
          ? myScript.src.replace(/^[^\?]+\??/, "")
          : ""),
          getQueryVariable("renderer");
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      try {
        _typeof$3(exports) !== "object" && (window.bodymovin = lottie);
      } catch (t) {}
      var ShapeModifiers = (function () {
        var t = {},
          e = {};
        return (
          (t.registerModifier = function (r, o) {
            e[r] || (e[r] = o);
          }),
          (t.getModifier = function (r, o, h) {
            return new e[r](o, h);
          }),
          t
        );
      })();
      function ShapeModifier() {}
      function TrimModifier() {}
      function PuckerAndBloatModifier() {}
      (ShapeModifier.prototype.initModifierProperties = function () {}),
        (ShapeModifier.prototype.addShapeToModifier = function () {}),
        (ShapeModifier.prototype.addShape = function (t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollectionPool.newShapeCollection(),
            };
            this.shapes.push(e),
              this.addShapeToModifier(e),
              this._isAnimated && t.setAsAnimated();
          }
        }),
        (ShapeModifier.prototype.init = function (t, e) {
          (this.shapes = []),
            (this.elem = t),
            this.initDynamicPropertyContainer(t),
            this.initModifierProperties(t, e),
            (this.frameId = initialDefaultFrame),
            (this.closed = !1),
            (this.k = !1),
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (ShapeModifier.prototype.processKeys = function () {
          this.elem.globalData.frameId !== this.frameId &&
            ((this.frameId = this.elem.globalData.frameId),
            this.iterateDynamicProperties());
        }),
        extendPrototype([DynamicPropertyContainer], ShapeModifier),
        extendPrototype([ShapeModifier], TrimModifier),
        (TrimModifier.prototype.initModifierProperties = function (t, e) {
          (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
            (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
            (this.sValue = 0),
            (this.eValue = 0),
            (this.getValue = this.processKeys),
            (this.m = e.m),
            (this._isAnimated =
              !!this.s.effectsSequence.length ||
              !!this.e.effectsSequence.length ||
              !!this.o.effectsSequence.length);
        }),
        (TrimModifier.prototype.addShapeToModifier = function (t) {
          t.pathsData = [];
        }),
        (TrimModifier.prototype.calculateShapeEdges = function (t, e, r, o, h) {
          var l = [];
          e <= 1
            ? l.push({ s: t, e })
            : t >= 1
            ? l.push({ s: t - 1, e: e - 1 })
            : (l.push({ s: t, e: 1 }), l.push({ s: 0, e: e - 1 }));
          var y,
            D,
            j = [],
            Y = l.length;
          for (y = 0; y < Y; y += 1) {
            var B, q;
            (D = l[y]).e * h < o ||
              D.s * h > o + r ||
              ((B = D.s * h <= o ? 0 : (D.s * h - o) / r),
              (q = D.e * h >= o + r ? 1 : (D.e * h - o) / r),
              j.push([B, q]));
          }
          return j.length || j.push([0, 0]), j;
        }),
        (TrimModifier.prototype.releasePathsData = function (t) {
          var e,
            r = t.length;
          for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
          return (t.length = 0), t;
        }),
        (TrimModifier.prototype.processShapes = function (t) {
          var e, r, o, h;
          if (this._mdf || t) {
            var l = (this.o.v % 360) / 360;
            if (
              (l < 0 && (l += 1),
              (e = this.s.v > 1 ? 1 + l : this.s.v < 0 ? 0 + l : this.s.v + l) >
                (r =
                  this.e.v > 1 ? 1 + l : this.e.v < 0 ? 0 + l : this.e.v + l))
            ) {
              var y = e;
              (e = r), (r = y);
            }
            (e = 1e-4 * Math.round(1e4 * e)),
              (r = 1e-4 * Math.round(1e4 * r)),
              (this.sValue = e),
              (this.eValue = r);
          } else (e = this.sValue), (r = this.eValue);
          var D,
            j,
            Y,
            B,
            q,
            O = this.shapes.length,
            W = 0;
          if (r === e)
            for (h = 0; h < O; h += 1)
              this.shapes[h].localShapeCollection.releaseShapes(),
                (this.shapes[h].shape._mdf = !0),
                (this.shapes[h].shape.paths =
                  this.shapes[h].localShapeCollection),
                this._mdf && (this.shapes[h].pathsData.length = 0);
          else if ((r === 1 && e === 0) || (r === 0 && e === 1)) {
            if (this._mdf)
              for (h = 0; h < O; h += 1)
                (this.shapes[h].pathsData.length = 0),
                  (this.shapes[h].shape._mdf = !0);
          } else {
            var G,
              F,
              R = [];
            for (h = 0; h < O; h += 1)
              if (
                (G = this.shapes[h]).shape._mdf ||
                this._mdf ||
                t ||
                this.m === 2
              ) {
                if (
                  ((j = (o = G.shape.paths)._length),
                  (q = 0),
                  !G.shape._mdf && G.pathsData.length)
                )
                  q = G.totalShapeLength;
                else {
                  for (
                    Y = this.releasePathsData(G.pathsData), D = 0;
                    D < j;
                    D += 1
                  )
                    (B = bez.getSegmentsLength(o.shapes[D])),
                      Y.push(B),
                      (q += B.totalLength);
                  (G.totalShapeLength = q), (G.pathsData = Y);
                }
                (W += q), (G.shape._mdf = !0);
              } else G.shape.paths = G.localShapeCollection;
            var U,
              X = e,
              Z = r,
              J = 0;
            for (h = O - 1; h >= 0; h -= 1)
              if ((G = this.shapes[h]).shape._mdf) {
                for (
                  (F = G.localShapeCollection).releaseShapes(),
                    this.m === 2 && O > 1
                      ? ((U = this.calculateShapeEdges(
                          e,
                          r,
                          G.totalShapeLength,
                          J,
                          W
                        )),
                        (J += G.totalShapeLength))
                      : (U = [[X, Z]]),
                    j = U.length,
                    D = 0;
                  D < j;
                  D += 1
                ) {
                  (X = U[D][0]),
                    (Z = U[D][1]),
                    (R.length = 0),
                    Z <= 1
                      ? R.push({
                          s: G.totalShapeLength * X,
                          e: G.totalShapeLength * Z,
                        })
                      : X >= 1
                      ? R.push({
                          s: G.totalShapeLength * (X - 1),
                          e: G.totalShapeLength * (Z - 1),
                        })
                      : (R.push({
                          s: G.totalShapeLength * X,
                          e: G.totalShapeLength,
                        }),
                        R.push({ s: 0, e: G.totalShapeLength * (Z - 1) }));
                  var Q = this.addShapes(G, R[0]);
                  if (R[0].s !== R[0].e) {
                    if (R.length > 1)
                      if (G.shape.paths.shapes[G.shape.paths._length - 1].c) {
                        var st = Q.pop();
                        this.addPaths(Q, F), (Q = this.addShapes(G, R[1], st));
                      } else this.addPaths(Q, F), (Q = this.addShapes(G, R[1]));
                    this.addPaths(Q, F);
                  }
                }
                G.shape.paths = F;
              }
          }
        }),
        (TrimModifier.prototype.addPaths = function (t, e) {
          var r,
            o = t.length;
          for (r = 0; r < o; r += 1) e.addShape(t[r]);
        }),
        (TrimModifier.prototype.addSegment = function (t, e, r, o, h, l, y) {
          h.setXYAt(e[0], e[1], "o", l),
            h.setXYAt(r[0], r[1], "i", l + 1),
            y && h.setXYAt(t[0], t[1], "v", l),
            h.setXYAt(o[0], o[1], "v", l + 1);
        }),
        (TrimModifier.prototype.addSegmentFromArray = function (t, e, r, o) {
          e.setXYAt(t[1], t[5], "o", r),
            e.setXYAt(t[2], t[6], "i", r + 1),
            o && e.setXYAt(t[0], t[4], "v", r),
            e.setXYAt(t[3], t[7], "v", r + 1);
        }),
        (TrimModifier.prototype.addShapes = function (t, e, r) {
          var o,
            h,
            l,
            y,
            D,
            j,
            Y,
            B,
            q = t.pathsData,
            O = t.shape.paths.shapes,
            W = t.shape.paths._length,
            G = 0,
            F = [],
            R = !0;
          for (
            r
              ? ((D = r._length), (B = r._length))
              : ((r = shapePool.newElement()), (D = 0), (B = 0)),
              F.push(r),
              o = 0;
            o < W;
            o += 1
          ) {
            for (
              j = q[o].lengths,
                r.c = O[o].c,
                l = O[o].c ? j.length : j.length + 1,
                h = 1;
              h < l;
              h += 1
            )
              if (G + (y = j[h - 1]).addedLength < e.s)
                (G += y.addedLength), (r.c = !1);
              else {
                if (G > e.e) {
                  r.c = !1;
                  break;
                }
                e.s <= G && e.e >= G + y.addedLength
                  ? (this.addSegment(
                      O[o].v[h - 1],
                      O[o].o[h - 1],
                      O[o].i[h],
                      O[o].v[h],
                      r,
                      D,
                      R
                    ),
                    (R = !1))
                  : ((Y = bez.getNewSegment(
                      O[o].v[h - 1],
                      O[o].v[h],
                      O[o].o[h - 1],
                      O[o].i[h],
                      (e.s - G) / y.addedLength,
                      (e.e - G) / y.addedLength,
                      j[h - 1]
                    )),
                    this.addSegmentFromArray(Y, r, D, R),
                    (R = !1),
                    (r.c = !1)),
                  (G += y.addedLength),
                  (D += 1);
              }
            if (O[o].c && j.length) {
              if (((y = j[h - 1]), G <= e.e)) {
                var U = j[h - 1].addedLength;
                e.s <= G && e.e >= G + U
                  ? (this.addSegment(
                      O[o].v[h - 1],
                      O[o].o[h - 1],
                      O[o].i[0],
                      O[o].v[0],
                      r,
                      D,
                      R
                    ),
                    (R = !1))
                  : ((Y = bez.getNewSegment(
                      O[o].v[h - 1],
                      O[o].v[0],
                      O[o].o[h - 1],
                      O[o].i[0],
                      (e.s - G) / U,
                      (e.e - G) / U,
                      j[h - 1]
                    )),
                    this.addSegmentFromArray(Y, r, D, R),
                    (R = !1),
                    (r.c = !1));
              } else r.c = !1;
              (G += y.addedLength), (D += 1);
            }
            if (
              (r._length &&
                (r.setXYAt(r.v[B][0], r.v[B][1], "i", B),
                r.setXYAt(
                  r.v[r._length - 1][0],
                  r.v[r._length - 1][1],
                  "o",
                  r._length - 1
                )),
              G > e.e)
            )
              break;
            o < W - 1 &&
              ((r = shapePool.newElement()), (R = !0), F.push(r), (D = 0));
          }
          return F;
        }),
        extendPrototype([ShapeModifier], PuckerAndBloatModifier),
        (PuckerAndBloatModifier.prototype.initModifierProperties = function (
          t,
          e
        ) {
          (this.getValue = this.processKeys),
            (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
            (this._isAnimated = !!this.amount.effectsSequence.length);
        }),
        (PuckerAndBloatModifier.prototype.processPath = function (t, e) {
          var r = e / 100,
            o = [0, 0],
            h = t._length,
            l = 0;
          for (l = 0; l < h; l += 1) (o[0] += t.v[l][0]), (o[1] += t.v[l][1]);
          (o[0] /= h), (o[1] /= h);
          var y,
            D,
            j,
            Y,
            B,
            q,
            O = shapePool.newElement();
          for (O.c = t.c, l = 0; l < h; l += 1)
            (y = t.v[l][0] + (o[0] - t.v[l][0]) * r),
              (D = t.v[l][1] + (o[1] - t.v[l][1]) * r),
              (j = t.o[l][0] + (o[0] - t.o[l][0]) * -r),
              (Y = t.o[l][1] + (o[1] - t.o[l][1]) * -r),
              (B = t.i[l][0] + (o[0] - t.i[l][0]) * -r),
              (q = t.i[l][1] + (o[1] - t.i[l][1]) * -r),
              O.setTripleAt(y, D, j, Y, B, q, l);
          return O;
        }),
        (PuckerAndBloatModifier.prototype.processShapes = function (t) {
          var e,
            r,
            o,
            h,
            l,
            y,
            D = this.shapes.length,
            j = this.amount.v;
          if (j !== 0)
            for (r = 0; r < D; r += 1) {
              if (
                ((y = (l = this.shapes[r]).localShapeCollection),
                l.shape._mdf || this._mdf || t)
              )
                for (
                  y.releaseShapes(),
                    l.shape._mdf = !0,
                    e = l.shape.paths.shapes,
                    h = l.shape.paths._length,
                    o = 0;
                  o < h;
                  o += 1
                )
                  y.addShape(this.processPath(e[o], j));
              l.shape.paths = l.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = !1);
        });
      var TransformPropertyFactory = (function () {
        var t = [0, 0];
        function e(r, o, h) {
          if (
            ((this.elem = r),
            (this.frameId = -1),
            (this.propType = "transform"),
            (this.data = o),
            (this.v = new Matrix()),
            (this.pre = new Matrix()),
            (this.appliedTransformations = 0),
            this.initDynamicPropertyContainer(h || r),
            o.p && o.p.s
              ? ((this.px = PropertyFactory.getProp(r, o.p.x, 0, 0, this)),
                (this.py = PropertyFactory.getProp(r, o.p.y, 0, 0, this)),
                o.p.z &&
                  (this.pz = PropertyFactory.getProp(r, o.p.z, 0, 0, this)))
              : (this.p = PropertyFactory.getProp(
                  r,
                  o.p || { k: [0, 0, 0] },
                  1,
                  0,
                  this
                )),
            o.rx)
          ) {
            if (
              ((this.rx = PropertyFactory.getProp(r, o.rx, 0, degToRads, this)),
              (this.ry = PropertyFactory.getProp(r, o.ry, 0, degToRads, this)),
              (this.rz = PropertyFactory.getProp(r, o.rz, 0, degToRads, this)),
              o.or.k[0].ti)
            ) {
              var l,
                y = o.or.k.length;
              for (l = 0; l < y; l += 1)
                (o.or.k[l].to = null), (o.or.k[l].ti = null);
            }
            (this.or = PropertyFactory.getProp(r, o.or, 1, degToRads, this)),
              (this.or.sh = !0);
          } else
            this.r = PropertyFactory.getProp(
              r,
              o.r || { k: 0 },
              0,
              degToRads,
              this
            );
          o.sk &&
            ((this.sk = PropertyFactory.getProp(r, o.sk, 0, degToRads, this)),
            (this.sa = PropertyFactory.getProp(r, o.sa, 0, degToRads, this))),
            (this.a = PropertyFactory.getProp(
              r,
              o.a || { k: [0, 0, 0] },
              1,
              0,
              this
            )),
            (this.s = PropertyFactory.getProp(
              r,
              o.s || { k: [100, 100, 100] },
              1,
              0.01,
              this
            )),
            o.o
              ? (this.o = PropertyFactory.getProp(r, o.o, 0, 0.01, r))
              : (this.o = { _mdf: !1, v: 1 }),
            (this._isDirty = !0),
            this.dynamicProperties.length || this.getValue(!0);
        }
        return (
          (e.prototype = {
            applyToMatrix: function (r) {
              var o = this._mdf;
              this.iterateDynamicProperties(),
                (this._mdf = this._mdf || o),
                this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                this.sk && r.skewFromAxis(-this.sk.v, this.sa.v),
                this.r
                  ? r.rotate(-this.r.v)
                  : r
                      .rotateZ(-this.rz.v)
                      .rotateY(this.ry.v)
                      .rotateX(this.rx.v)
                      .rotateZ(-this.or.v[2])
                      .rotateY(this.or.v[1])
                      .rotateX(this.or.v[0]),
                this.data.p.s
                  ? this.data.p.z
                    ? r.translate(this.px.v, this.py.v, -this.pz.v)
                    : r.translate(this.px.v, this.py.v, 0)
                  : r.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            },
            getValue: function (r) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (
                  (this._isDirty &&
                    (this.precalculateMatrix(), (this._isDirty = !1)),
                  this.iterateDynamicProperties(),
                  this._mdf || r)
                ) {
                  var o;
                  if (
                    (this.v.cloneFromProps(this.pre.props),
                    this.appliedTransformations < 1 &&
                      this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.appliedTransformations < 2 &&
                      this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    this.sk &&
                      this.appliedTransformations < 3 &&
                      this.v.skewFromAxis(-this.sk.v, this.sa.v),
                    this.r && this.appliedTransformations < 4
                      ? this.v.rotate(-this.r.v)
                      : !this.r &&
                        this.appliedTransformations < 4 &&
                        this.v
                          .rotateZ(-this.rz.v)
                          .rotateY(this.ry.v)
                          .rotateX(this.rx.v)
                          .rotateZ(-this.or.v[2])
                          .rotateY(this.or.v[1])
                          .rotateX(this.or.v[0]),
                    this.autoOriented)
                  ) {
                    var h, l;
                    if (
                      ((o = this.elem.globalData.frameRate),
                      this.p && this.p.keyframes && this.p.getValueAtTime)
                    )
                      this.p._caching.lastFrame + this.p.offsetTime <=
                      this.p.keyframes[0].t
                        ? ((h = this.p.getValueAtTime(
                            (this.p.keyframes[0].t + 0.01) / o,
                            0
                          )),
                          (l = this.p.getValueAtTime(
                            this.p.keyframes[0].t / o,
                            0
                          )))
                        : this.p._caching.lastFrame + this.p.offsetTime >=
                          this.p.keyframes[this.p.keyframes.length - 1].t
                        ? ((h = this.p.getValueAtTime(
                            this.p.keyframes[this.p.keyframes.length - 1].t / o,
                            0
                          )),
                          (l = this.p.getValueAtTime(
                            (this.p.keyframes[this.p.keyframes.length - 1].t -
                              0.05) /
                              o,
                            0
                          )))
                        : ((h = this.p.pv),
                          (l = this.p.getValueAtTime(
                            (this.p._caching.lastFrame +
                              this.p.offsetTime -
                              0.01) /
                              o,
                            this.p.offsetTime
                          )));
                    else if (
                      this.px &&
                      this.px.keyframes &&
                      this.py.keyframes &&
                      this.px.getValueAtTime &&
                      this.py.getValueAtTime
                    ) {
                      (h = []), (l = []);
                      var y = this.px,
                        D = this.py;
                      y._caching.lastFrame + y.offsetTime <= y.keyframes[0].t
                        ? ((h[0] = y.getValueAtTime(
                            (y.keyframes[0].t + 0.01) / o,
                            0
                          )),
                          (h[1] = D.getValueAtTime(
                            (D.keyframes[0].t + 0.01) / o,
                            0
                          )),
                          (l[0] = y.getValueAtTime(y.keyframes[0].t / o, 0)),
                          (l[1] = D.getValueAtTime(D.keyframes[0].t / o, 0)))
                        : y._caching.lastFrame + y.offsetTime >=
                          y.keyframes[y.keyframes.length - 1].t
                        ? ((h[0] = y.getValueAtTime(
                            y.keyframes[y.keyframes.length - 1].t / o,
                            0
                          )),
                          (h[1] = D.getValueAtTime(
                            D.keyframes[D.keyframes.length - 1].t / o,
                            0
                          )),
                          (l[0] = y.getValueAtTime(
                            (y.keyframes[y.keyframes.length - 1].t - 0.01) / o,
                            0
                          )),
                          (l[1] = D.getValueAtTime(
                            (D.keyframes[D.keyframes.length - 1].t - 0.01) / o,
                            0
                          )))
                        : ((h = [y.pv, D.pv]),
                          (l[0] = y.getValueAtTime(
                            (y._caching.lastFrame + y.offsetTime - 0.01) / o,
                            y.offsetTime
                          )),
                          (l[1] = D.getValueAtTime(
                            (D._caching.lastFrame + D.offsetTime - 0.01) / o,
                            D.offsetTime
                          )));
                    } else h = l = t;
                    this.v.rotate(-Math.atan2(h[1] - l[1], h[0] - l[0]));
                  }
                  this.data.p && this.data.p.s
                    ? this.data.p.z
                      ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                      : this.v.translate(this.px.v, this.py.v, 0)
                    : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                }
                this.frameId = this.elem.globalData.frameId;
              }
            },
            precalculateMatrix: function () {
              if (
                ((this.appliedTransformations = 0),
                this.pre.reset(),
                !this.a.effectsSequence.length &&
                  (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                  (this.appliedTransformations = 1),
                  !this.s.effectsSequence.length))
              ) {
                if (
                  (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                  (this.appliedTransformations = 2),
                  this.sk)
                ) {
                  if (
                    this.sk.effectsSequence.length ||
                    this.sa.effectsSequence.length
                  )
                    return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                    (this.appliedTransformations = 3);
                }
                this.r
                  ? this.r.effectsSequence.length ||
                    (this.pre.rotate(-this.r.v),
                    (this.appliedTransformations = 4))
                  : this.rz.effectsSequence.length ||
                    this.ry.effectsSequence.length ||
                    this.rx.effectsSequence.length ||
                    this.or.effectsSequence.length ||
                    (this.pre
                      .rotateZ(-this.rz.v)
                      .rotateY(this.ry.v)
                      .rotateX(this.rx.v)
                      .rotateZ(-this.or.v[2])
                      .rotateY(this.or.v[1])
                      .rotateX(this.or.v[0]),
                    (this.appliedTransformations = 4));
              }
            },
            autoOrient: function () {},
          }),
          extendPrototype([DynamicPropertyContainer], e),
          (e.prototype.addDynamicProperty = function (r) {
            this._addDynamicProperty(r),
              this.elem.addDynamicProperty(r),
              (this._isDirty = !0);
          }),
          (e.prototype._addDynamicProperty =
            DynamicPropertyContainer.prototype.addDynamicProperty),
          {
            getTransformProperty: function (r, o, h) {
              return new e(r, o, h);
            },
          }
        );
      })();
      function RepeaterModifier() {}
      function RoundCornersModifier() {}
      function floatEqual(t, e) {
        return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e));
      }
      function floatZero(t) {
        return Math.abs(t) <= 1e-5;
      }
      function lerp(t, e, r) {
        return t * (1 - r) + e * r;
      }
      function lerpPoint(t, e, r) {
        return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)];
      }
      function quadRoots(t, e, r) {
        if (t === 0) return [];
        var o = e * e - 4 * t * r;
        if (o < 0) return [];
        var h = -e / (2 * t);
        if (o === 0) return [h];
        var l = Math.sqrt(o) / (2 * t);
        return [h - l, h + l];
      }
      function polynomialCoefficients(t, e, r, o) {
        return [
          3 * e - t - 3 * r + o,
          3 * t - 6 * e + 3 * r,
          -3 * t + 3 * e,
          t,
        ];
      }
      function singlePoint(t) {
        return new PolynomialBezier(t, t, t, t, !1);
      }
      function PolynomialBezier(t, e, r, o, h) {
        h && pointEqual(t, e) && (e = lerpPoint(t, o, 1 / 3)),
          h && pointEqual(r, o) && (r = lerpPoint(t, o, 2 / 3));
        var l = polynomialCoefficients(t[0], e[0], r[0], o[0]),
          y = polynomialCoefficients(t[1], e[1], r[1], o[1]);
        (this.a = [l[0], y[0]]),
          (this.b = [l[1], y[1]]),
          (this.c = [l[2], y[2]]),
          (this.d = [l[3], y[3]]),
          (this.points = [t, e, r, o]);
      }
      function extrema(t, e) {
        var r = t.points[0][e],
          o = t.points[t.points.length - 1][e];
        if (r > o) {
          var h = o;
          (o = r), (r = h);
        }
        for (
          var l = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), y = 0;
          y < l.length;
          y += 1
        )
          if (l[y] > 0 && l[y] < 1) {
            var D = t.point(l[y])[e];
            D < r ? (r = D) : D > o && (o = D);
          }
        return { min: r, max: o };
      }
      function intersectData(t, e, r) {
        var o = t.boundingBox();
        return {
          cx: o.cx,
          cy: o.cy,
          width: o.width,
          height: o.height,
          bez: t,
          t: (e + r) / 2,
          t1: e,
          t2: r,
        };
      }
      function splitData(t) {
        var e = t.bez.split(0.5);
        return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
      }
      function boxIntersect(t, e) {
        return (
          2 * Math.abs(t.cx - e.cx) < t.width + e.width &&
          2 * Math.abs(t.cy - e.cy) < t.height + e.height
        );
      }
      function intersectsImpl(t, e, r, o, h, l) {
        if (boxIntersect(t, e))
          if (
            r >= l ||
            (t.width <= o && t.height <= o && e.width <= o && e.height <= o)
          )
            h.push([t.t, e.t]);
          else {
            var y = splitData(t),
              D = splitData(e);
            intersectsImpl(y[0], D[0], r + 1, o, h, l),
              intersectsImpl(y[0], D[1], r + 1, o, h, l),
              intersectsImpl(y[1], D[0], r + 1, o, h, l),
              intersectsImpl(y[1], D[1], r + 1, o, h, l);
          }
      }
      function crossProduct(t, e) {
        return [
          t[1] * e[2] - t[2] * e[1],
          t[2] * e[0] - t[0] * e[2],
          t[0] * e[1] - t[1] * e[0],
        ];
      }
      function lineIntersection(t, e, r, o) {
        var h = [t[0], t[1], 1],
          l = [e[0], e[1], 1],
          y = [r[0], r[1], 1],
          D = [o[0], o[1], 1],
          j = crossProduct(crossProduct(h, l), crossProduct(y, D));
        return floatZero(j[2]) ? null : [j[0] / j[2], j[1] / j[2]];
      }
      function polarOffset(t, e, r) {
        return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r];
      }
      function pointDistance(t, e) {
        return Math.hypot(t[0] - e[0], t[1] - e[1]);
      }
      function pointEqual(t, e) {
        return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
      }
      function ZigZagModifier() {}
      function setPoint(t, e, r, o, h, l, y) {
        var D = r - Math.PI / 2,
          j = r + Math.PI / 2,
          Y = e[0] + Math.cos(r) * o * h,
          B = e[1] - Math.sin(r) * o * h;
        t.setTripleAt(
          Y,
          B,
          Y + Math.cos(D) * l,
          B - Math.sin(D) * l,
          Y + Math.cos(j) * y,
          B - Math.sin(j) * y,
          t.length()
        );
      }
      function getPerpendicularVector(t, e) {
        var r = [e[0] - t[0], e[1] - t[1]],
          o = 0.5 * -Math.PI;
        return [
          Math.cos(o) * r[0] - Math.sin(o) * r[1],
          Math.sin(o) * r[0] + Math.cos(o) * r[1],
        ];
      }
      function getProjectingAngle(t, e) {
        var r = e === 0 ? t.length() - 1 : e - 1,
          o = (e + 1) % t.length(),
          h = getPerpendicularVector(t.v[r], t.v[o]);
        return Math.atan2(0, 1) - Math.atan2(h[1], h[0]);
      }
      function zigZagCorner(t, e, r, o, h, l, y) {
        var D = getProjectingAngle(e, r),
          j = e.v[r % e._length],
          Y = e.v[r === 0 ? e._length - 1 : r - 1],
          B = e.v[(r + 1) % e._length],
          q =
            l === 2
              ? Math.sqrt(Math.pow(j[0] - Y[0], 2) + Math.pow(j[1] - Y[1], 2))
              : 0,
          O =
            l === 2
              ? Math.sqrt(Math.pow(j[0] - B[0], 2) + Math.pow(j[1] - B[1], 2))
              : 0;
        setPoint(
          t,
          e.v[r % e._length],
          D,
          y,
          o,
          O / (2 * (h + 1)),
          q / (2 * (h + 1))
        );
      }
      function zigZagSegment(t, e, r, o, h, l) {
        for (var y = 0; y < o; y += 1) {
          var D = (y + 1) / (o + 1),
            j =
              h === 2
                ? Math.sqrt(
                    Math.pow(e.points[3][0] - e.points[0][0], 2) +
                      Math.pow(e.points[3][1] - e.points[0][1], 2)
                  )
                : 0,
            Y = e.normalAngle(D);
          setPoint(
            t,
            e.point(D),
            Y,
            l,
            r,
            j / (2 * (o + 1)),
            j / (2 * (o + 1))
          ),
            (l = -l);
        }
        return l;
      }
      function linearOffset(t, e, r) {
        var o = Math.atan2(e[0] - t[0], e[1] - t[1]);
        return [polarOffset(t, o, r), polarOffset(e, o, r)];
      }
      function offsetSegment(t, e) {
        var r, o, h, l, y, D, j;
        (r = (j = linearOffset(t.points[0], t.points[1], e))[0]),
          (o = j[1]),
          (h = (j = linearOffset(t.points[1], t.points[2], e))[0]),
          (l = j[1]),
          (y = (j = linearOffset(t.points[2], t.points[3], e))[0]),
          (D = j[1]);
        var Y = lineIntersection(r, o, h, l);
        Y === null && (Y = o);
        var B = lineIntersection(y, D, h, l);
        return B === null && (B = y), new PolynomialBezier(r, Y, B, D);
      }
      function joinLines(t, e, r, o, h) {
        var l = e.points[3],
          y = r.points[0];
        if (o === 3 || pointEqual(l, y)) return l;
        if (o === 2) {
          var D = -e.tangentAngle(1),
            j = -r.tangentAngle(0) + Math.PI,
            Y = lineIntersection(
              l,
              polarOffset(l, D + Math.PI / 2, 100),
              y,
              polarOffset(y, D + Math.PI / 2, 100)
            ),
            B = Y ? pointDistance(Y, l) : pointDistance(l, y) / 2,
            q = polarOffset(l, D, 2 * B * roundCorner);
          return (
            t.setXYAt(q[0], q[1], "o", t.length() - 1),
            (q = polarOffset(y, j, 2 * B * roundCorner)),
            t.setTripleAt(y[0], y[1], y[0], y[1], q[0], q[1], t.length()),
            y
          );
        }
        var O = lineIntersection(
          pointEqual(l, e.points[2]) ? e.points[0] : e.points[2],
          l,
          y,
          pointEqual(y, r.points[1]) ? r.points[3] : r.points[1]
        );
        return O && pointDistance(O, l) < h
          ? (t.setTripleAt(O[0], O[1], O[0], O[1], O[0], O[1], t.length()), O)
          : l;
      }
      function getIntersection(t, e) {
        var r = t.intersections(e);
        return (
          r.length && floatEqual(r[0][0], 1) && r.shift(),
          r.length ? r[0] : null
        );
      }
      function pruneSegmentIntersection(t, e) {
        var r = t.slice(),
          o = e.slice(),
          h = getIntersection(t[t.length - 1], e[0]);
        return (
          h &&
            ((r[t.length - 1] = t[t.length - 1].split(h[0])[0]),
            (o[0] = e[0].split(h[1])[1])),
          t.length > 1 &&
          e.length > 1 &&
          (h = getIntersection(t[0], e[e.length - 1]))
            ? [[t[0].split(h[0])[0]], [e[e.length - 1].split(h[1])[1]]]
            : [r, o]
        );
      }
      function pruneIntersections(t) {
        for (var e, r = 1; r < t.length; r += 1)
          (e = pruneSegmentIntersection(t[r - 1], t[r])),
            (t[r - 1] = e[0]),
            (t[r] = e[1]);
        return (
          t.length > 1 &&
            ((e = pruneSegmentIntersection(t[t.length - 1], t[0])),
            (t[t.length - 1] = e[0]),
            (t[0] = e[1])),
          t
        );
      }
      function offsetSegmentSplit(t, e) {
        var r,
          o,
          h,
          l,
          y = t.inflectionPoints();
        if (y.length === 0) return [offsetSegment(t, e)];
        if (y.length === 1 || floatEqual(y[1], 1))
          return (
            (r = (h = t.split(y[0]))[0]),
            (o = h[1]),
            [offsetSegment(r, e), offsetSegment(o, e)]
          );
        r = (h = t.split(y[0]))[0];
        var D = (y[1] - y[0]) / (1 - y[0]);
        return (
          (l = (h = h[1].split(D))[0]),
          (o = h[1]),
          [offsetSegment(r, e), offsetSegment(l, e), offsetSegment(o, e)]
        );
      }
      function OffsetPathModifier() {}
      function getFontProperties(t) {
        for (
          var e = t.fStyle ? t.fStyle.split(" ") : [],
            r = "normal",
            o = "normal",
            h = e.length,
            l = 0;
          l < h;
          l += 1
        )
          switch (e[l].toLowerCase()) {
            case "italic":
              o = "italic";
              break;
            case "bold":
              r = "700";
              break;
            case "black":
              r = "900";
              break;
            case "medium":
              r = "500";
              break;
            case "regular":
            case "normal":
              r = "400";
              break;
            case "light":
            case "thin":
              r = "200";
          }
        return { style: o, weight: t.fWeight || r };
      }
      extendPrototype([ShapeModifier], RepeaterModifier),
        (RepeaterModifier.prototype.initModifierProperties = function (t, e) {
          (this.getValue = this.processKeys),
            (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
            (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
            (this.tr = TransformPropertyFactory.getTransformProperty(
              t,
              e.tr,
              this
            )),
            (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
            (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
            (this.data = e),
            this.dynamicProperties.length || this.getValue(!0),
            (this._isAnimated = !!this.dynamicProperties.length),
            (this.pMatrix = new Matrix()),
            (this.rMatrix = new Matrix()),
            (this.sMatrix = new Matrix()),
            (this.tMatrix = new Matrix()),
            (this.matrix = new Matrix());
        }),
        (RepeaterModifier.prototype.applyTransforms = function (
          t,
          e,
          r,
          o,
          h,
          l
        ) {
          var y = l ? -1 : 1,
            D = o.s.v[0] + (1 - o.s.v[0]) * (1 - h),
            j = o.s.v[1] + (1 - o.s.v[1]) * (1 - h);
          t.translate(o.p.v[0] * y * h, o.p.v[1] * y * h, o.p.v[2]),
            e.translate(-o.a.v[0], -o.a.v[1], o.a.v[2]),
            e.rotate(-o.r.v * y * h),
            e.translate(o.a.v[0], o.a.v[1], o.a.v[2]),
            r.translate(-o.a.v[0], -o.a.v[1], o.a.v[2]),
            r.scale(l ? 1 / D : D, l ? 1 / j : j),
            r.translate(o.a.v[0], o.a.v[1], o.a.v[2]);
        }),
        (RepeaterModifier.prototype.init = function (t, e, r, o) {
          for (
            this.elem = t,
              this.arr = e,
              this.pos = r,
              this.elemsData = o,
              this._currentCopies = 0,
              this._elements = [],
              this._groups = [],
              this.frameId = -1,
              this.initDynamicPropertyContainer(t),
              this.initModifierProperties(t, e[r]);
            r > 0;

          )
            (r -= 1), this._elements.unshift(e[r]);
          this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (RepeaterModifier.prototype.resetElements = function (t) {
          var e,
            r = t.length;
          for (e = 0; e < r; e += 1)
            (t[e]._processed = !1),
              t[e].ty === "gr" && this.resetElements(t[e].it);
        }),
        (RepeaterModifier.prototype.cloneElements = function (t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e;
        }),
        (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
          var r,
            o = t.length;
          for (r = 0; r < o; r += 1)
            (t[r]._render = e),
              t[r].ty === "gr" && this.changeGroupRender(t[r].it, e);
        }),
        (RepeaterModifier.prototype.processShapes = function (t) {
          var e,
            r,
            o,
            h,
            l,
            y = !1;
          if (this._mdf || t) {
            var D,
              j = Math.ceil(this.c.v);
            if (this._groups.length < j) {
              for (; this._groups.length < j; ) {
                var Y = { it: this.cloneElements(this._elements), ty: "gr" };
                Y.it.push({
                  a: { a: 0, ix: 1, k: [0, 0] },
                  nm: "Transform",
                  o: { a: 0, ix: 7, k: 100 },
                  p: { a: 0, ix: 2, k: [0, 0] },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [
                      { s: 0, e: 0, t: 0 },
                      { s: 0, e: 0, t: 1 },
                    ],
                  },
                  s: { a: 0, ix: 3, k: [100, 100] },
                  sa: { a: 0, ix: 5, k: 0 },
                  sk: { a: 0, ix: 4, k: 0 },
                  ty: "tr",
                }),
                  this.arr.splice(0, 0, Y),
                  this._groups.splice(0, 0, Y),
                  (this._currentCopies += 1);
              }
              this.elem.reloadShapes(), (y = !0);
            }
            for (l = 0, o = 0; o <= this._groups.length - 1; o += 1) {
              if (
                ((D = l < j),
                (this._groups[o]._render = D),
                this.changeGroupRender(this._groups[o].it, D),
                !D)
              ) {
                var B = this.elemsData[o].it,
                  q = B[B.length - 1];
                q.transform.op.v !== 0
                  ? ((q.transform.op._mdf = !0), (q.transform.op.v = 0))
                  : (q.transform.op._mdf = !1);
              }
              l += 1;
            }
            this._currentCopies = j;
            var O = this.o.v,
              W = O % 1,
              G = O > 0 ? Math.floor(O) : Math.ceil(O),
              F = this.pMatrix.props,
              R = this.rMatrix.props,
              U = this.sMatrix.props;
            this.pMatrix.reset(),
              this.rMatrix.reset(),
              this.sMatrix.reset(),
              this.tMatrix.reset(),
              this.matrix.reset();
            var X,
              Z,
              J = 0;
            if (O > 0) {
              for (; J < G; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !1
                ),
                  (J += 1);
              W &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  W,
                  !1
                ),
                (J += W));
            } else if (O < 0) {
              for (; J > G; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !0
                ),
                  (J -= 1);
              W &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  -W,
                  !0
                ),
                (J -= W));
            }
            for (
              o = this.data.m === 1 ? 0 : this._currentCopies - 1,
                h = this.data.m === 1 ? 1 : -1,
                l = this._currentCopies;
              l;

            ) {
              if (
                ((Z = (r = (e = this.elemsData[o].it)[e.length - 1].transform
                  .mProps.v.props).length),
                (e[e.length - 1].transform.mProps._mdf = !0),
                (e[e.length - 1].transform.op._mdf = !0),
                (e[e.length - 1].transform.op.v =
                  this._currentCopies === 1
                    ? this.so.v
                    : this.so.v +
                      (this.eo.v - this.so.v) *
                        (o / (this._currentCopies - 1))),
                J !== 0)
              ) {
                for (
                  ((o !== 0 && h === 1) ||
                    (o !== this._currentCopies - 1 && h === -1)) &&
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !1
                    ),
                    this.matrix.transform(
                      R[0],
                      R[1],
                      R[2],
                      R[3],
                      R[4],
                      R[5],
                      R[6],
                      R[7],
                      R[8],
                      R[9],
                      R[10],
                      R[11],
                      R[12],
                      R[13],
                      R[14],
                      R[15]
                    ),
                    this.matrix.transform(
                      U[0],
                      U[1],
                      U[2],
                      U[3],
                      U[4],
                      U[5],
                      U[6],
                      U[7],
                      U[8],
                      U[9],
                      U[10],
                      U[11],
                      U[12],
                      U[13],
                      U[14],
                      U[15]
                    ),
                    this.matrix.transform(
                      F[0],
                      F[1],
                      F[2],
                      F[3],
                      F[4],
                      F[5],
                      F[6],
                      F[7],
                      F[8],
                      F[9],
                      F[10],
                      F[11],
                      F[12],
                      F[13],
                      F[14],
                      F[15]
                    ),
                    X = 0;
                  X < Z;
                  X += 1
                )
                  r[X] = this.matrix.props[X];
                this.matrix.reset();
              } else
                for (this.matrix.reset(), X = 0; X < Z; X += 1)
                  r[X] = this.matrix.props[X];
              (J += 1), (l -= 1), (o += h);
            }
          } else
            for (l = this._currentCopies, o = 0, h = 1; l; )
              (r = (e = this.elemsData[o].it)[e.length - 1].transform.mProps.v
                .props),
                (e[e.length - 1].transform.mProps._mdf = !1),
                (e[e.length - 1].transform.op._mdf = !1),
                (l -= 1),
                (o += h);
          return y;
        }),
        (RepeaterModifier.prototype.addShape = function () {}),
        extendPrototype([ShapeModifier], RoundCornersModifier),
        (RoundCornersModifier.prototype.initModifierProperties = function (
          t,
          e
        ) {
          (this.getValue = this.processKeys),
            (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
            (this._isAnimated = !!this.rd.effectsSequence.length);
        }),
        (RoundCornersModifier.prototype.processPath = function (t, e) {
          var r,
            o = shapePool.newElement();
          o.c = t.c;
          var h,
            l,
            y,
            D,
            j,
            Y,
            B,
            q,
            O,
            W,
            G,
            F,
            R = t._length,
            U = 0;
          for (r = 0; r < R; r += 1)
            (h = t.v[r]),
              (y = t.o[r]),
              (l = t.i[r]),
              h[0] === y[0] && h[1] === y[1] && h[0] === l[0] && h[1] === l[1]
                ? (r !== 0 && r !== R - 1) || t.c
                  ? ((D = r === 0 ? t.v[R - 1] : t.v[r - 1]),
                    (Y = (j = Math.sqrt(
                      Math.pow(h[0] - D[0], 2) + Math.pow(h[1] - D[1], 2)
                    ))
                      ? Math.min(j / 2, e) / j
                      : 0),
                    (B = G = h[0] + (D[0] - h[0]) * Y),
                    (q = F = h[1] - (h[1] - D[1]) * Y),
                    (O = B - (B - h[0]) * roundCorner),
                    (W = q - (q - h[1]) * roundCorner),
                    o.setTripleAt(B, q, O, W, G, F, U),
                    (U += 1),
                    (D = r === R - 1 ? t.v[0] : t.v[r + 1]),
                    (Y = (j = Math.sqrt(
                      Math.pow(h[0] - D[0], 2) + Math.pow(h[1] - D[1], 2)
                    ))
                      ? Math.min(j / 2, e) / j
                      : 0),
                    (B = O = h[0] + (D[0] - h[0]) * Y),
                    (q = W = h[1] + (D[1] - h[1]) * Y),
                    (G = B - (B - h[0]) * roundCorner),
                    (F = q - (q - h[1]) * roundCorner),
                    o.setTripleAt(B, q, O, W, G, F, U),
                    (U += 1))
                  : (o.setTripleAt(h[0], h[1], y[0], y[1], l[0], l[1], U),
                    (U += 1))
                : (o.setTripleAt(
                    t.v[r][0],
                    t.v[r][1],
                    t.o[r][0],
                    t.o[r][1],
                    t.i[r][0],
                    t.i[r][1],
                    U
                  ),
                  (U += 1));
          return o;
        }),
        (RoundCornersModifier.prototype.processShapes = function (t) {
          var e,
            r,
            o,
            h,
            l,
            y,
            D = this.shapes.length,
            j = this.rd.v;
          if (j !== 0)
            for (r = 0; r < D; r += 1) {
              if (
                ((y = (l = this.shapes[r]).localShapeCollection),
                l.shape._mdf || this._mdf || t)
              )
                for (
                  y.releaseShapes(),
                    l.shape._mdf = !0,
                    e = l.shape.paths.shapes,
                    h = l.shape.paths._length,
                    o = 0;
                  o < h;
                  o += 1
                )
                  y.addShape(this.processPath(e[o], j));
              l.shape.paths = l.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = !1);
        }),
        (PolynomialBezier.prototype.point = function (t) {
          return [
            ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
            ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1],
          ];
        }),
        (PolynomialBezier.prototype.derivative = function (t) {
          return [
            (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
            (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1],
          ];
        }),
        (PolynomialBezier.prototype.tangentAngle = function (t) {
          var e = this.derivative(t);
          return Math.atan2(e[1], e[0]);
        }),
        (PolynomialBezier.prototype.normalAngle = function (t) {
          var e = this.derivative(t);
          return Math.atan2(e[0], e[1]);
        }),
        (PolynomialBezier.prototype.inflectionPoints = function () {
          var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(t)) return [];
          var e = (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / t,
            r =
              e * e -
              ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / t;
          if (r < 0) return [];
          var o = Math.sqrt(r);
          return floatZero(o)
            ? o > 0 && o < 1
              ? [e]
              : []
            : [e - o, e + o].filter(function (h) {
                return h > 0 && h < 1;
              });
        }),
        (PolynomialBezier.prototype.split = function (t) {
          if (t <= 0) return [singlePoint(this.points[0]), this];
          if (t >= 1)
            return [this, singlePoint(this.points[this.points.length - 1])];
          var e = lerpPoint(this.points[0], this.points[1], t),
            r = lerpPoint(this.points[1], this.points[2], t),
            o = lerpPoint(this.points[2], this.points[3], t),
            h = lerpPoint(e, r, t),
            l = lerpPoint(r, o, t),
            y = lerpPoint(h, l, t);
          return [
            new PolynomialBezier(this.points[0], e, h, y, !0),
            new PolynomialBezier(y, l, o, this.points[3], !0),
          ];
        }),
        (PolynomialBezier.prototype.bounds = function () {
          return { x: extrema(this, 0), y: extrema(this, 1) };
        }),
        (PolynomialBezier.prototype.boundingBox = function () {
          var t = this.bounds();
          return {
            left: t.x.min,
            right: t.x.max,
            top: t.y.min,
            bottom: t.y.max,
            width: t.x.max - t.x.min,
            height: t.y.max - t.y.min,
            cx: (t.x.max + t.x.min) / 2,
            cy: (t.y.max + t.y.min) / 2,
          };
        }),
        (PolynomialBezier.prototype.intersections = function (t, e, r) {
          e === void 0 && (e = 2), r === void 0 && (r = 7);
          var o = [];
          return (
            intersectsImpl(
              intersectData(this, 0, 1),
              intersectData(t, 0, 1),
              0,
              e,
              o,
              r
            ),
            o
          );
        }),
        (PolynomialBezier.shapeSegment = function (t, e) {
          var r = (e + 1) % t.length();
          return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0);
        }),
        (PolynomialBezier.shapeSegmentInverted = function (t, e) {
          var r = (e + 1) % t.length();
          return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0);
        }),
        extendPrototype([ShapeModifier], ZigZagModifier),
        (ZigZagModifier.prototype.initModifierProperties = function (t, e) {
          (this.getValue = this.processKeys),
            (this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this)),
            (this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this)),
            (this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this)),
            (this._isAnimated =
              this.amplitude.effectsSequence.length !== 0 ||
              this.frequency.effectsSequence.length !== 0 ||
              this.pointsType.effectsSequence.length !== 0);
        }),
        (ZigZagModifier.prototype.processPath = function (t, e, r, o) {
          var h = t._length,
            l = shapePool.newElement();
          if (((l.c = t.c), t.c || (h -= 1), h === 0)) return l;
          var y = -1,
            D = PolynomialBezier.shapeSegment(t, 0);
          zigZagCorner(l, t, 0, e, r, o, y);
          for (var j = 0; j < h; j += 1)
            (y = zigZagSegment(l, D, e, r, o, -y)),
              (D =
                j !== h - 1 || t.c
                  ? PolynomialBezier.shapeSegment(t, (j + 1) % h)
                  : null),
              zigZagCorner(l, t, j + 1, e, r, o, y);
          return l;
        }),
        (ZigZagModifier.prototype.processShapes = function (t) {
          var e,
            r,
            o,
            h,
            l,
            y,
            D = this.shapes.length,
            j = this.amplitude.v,
            Y = Math.max(0, Math.round(this.frequency.v)),
            B = this.pointsType.v;
          if (j !== 0)
            for (r = 0; r < D; r += 1) {
              if (
                ((y = (l = this.shapes[r]).localShapeCollection),
                l.shape._mdf || this._mdf || t)
              )
                for (
                  y.releaseShapes(),
                    l.shape._mdf = !0,
                    e = l.shape.paths.shapes,
                    h = l.shape.paths._length,
                    o = 0;
                  o < h;
                  o += 1
                )
                  y.addShape(this.processPath(e[o], j, Y, B));
              l.shape.paths = l.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = !1);
        }),
        extendPrototype([ShapeModifier], OffsetPathModifier),
        (OffsetPathModifier.prototype.initModifierProperties = function (t, e) {
          (this.getValue = this.processKeys),
            (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
            (this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this)),
            (this.lineJoin = e.lj),
            (this._isAnimated = this.amount.effectsSequence.length !== 0);
        }),
        (OffsetPathModifier.prototype.processPath = function (t, e, r, o) {
          var h = shapePool.newElement();
          h.c = t.c;
          var l,
            y,
            D,
            j = t.length();
          t.c || (j -= 1);
          var Y = [];
          for (l = 0; l < j; l += 1)
            (D = PolynomialBezier.shapeSegment(t, l)),
              Y.push(offsetSegmentSplit(D, e));
          if (!t.c)
            for (l = j - 1; l >= 0; l -= 1)
              (D = PolynomialBezier.shapeSegmentInverted(t, l)),
                Y.push(offsetSegmentSplit(D, e));
          Y = pruneIntersections(Y);
          var B = null,
            q = null;
          for (l = 0; l < Y.length; l += 1) {
            var O = Y[l];
            for (
              q && (B = joinLines(h, q, O[0], r, o)),
                q = O[O.length - 1],
                y = 0;
              y < O.length;
              y += 1
            )
              (D = O[y]),
                B && pointEqual(D.points[0], B)
                  ? h.setXYAt(
                      D.points[1][0],
                      D.points[1][1],
                      "o",
                      h.length() - 1
                    )
                  : h.setTripleAt(
                      D.points[0][0],
                      D.points[0][1],
                      D.points[1][0],
                      D.points[1][1],
                      D.points[0][0],
                      D.points[0][1],
                      h.length()
                    ),
                h.setTripleAt(
                  D.points[3][0],
                  D.points[3][1],
                  D.points[3][0],
                  D.points[3][1],
                  D.points[2][0],
                  D.points[2][1],
                  h.length()
                ),
                (B = D.points[3]);
          }
          return Y.length && joinLines(h, q, Y[0][0], r, o), h;
        }),
        (OffsetPathModifier.prototype.processShapes = function (t) {
          var e,
            r,
            o,
            h,
            l,
            y,
            D = this.shapes.length,
            j = this.amount.v,
            Y = this.miterLimit.v,
            B = this.lineJoin;
          if (j !== 0)
            for (r = 0; r < D; r += 1) {
              if (
                ((y = (l = this.shapes[r]).localShapeCollection),
                l.shape._mdf || this._mdf || t)
              )
                for (
                  y.releaseShapes(),
                    l.shape._mdf = !0,
                    e = l.shape.paths.shapes,
                    h = l.shape.paths._length,
                    o = 0;
                  o < h;
                  o += 1
                )
                  y.addShape(this.processPath(e[o], j, B, Y));
              l.shape.paths = l.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = !1);
        });
      var FontManager = (function () {
        var t = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
          e = [];
        e = e.concat([
          2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
          2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
          2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
        ]);
        var r = 127988,
          o = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
        function h(B, q) {
          var O = createTag("span");
          O.setAttribute("aria-hidden", !0), (O.style.fontFamily = q);
          var W = createTag("span");
          (W.innerText = "giItT1WQy@!-/#"),
            (O.style.position = "absolute"),
            (O.style.left = "-10000px"),
            (O.style.top = "-10000px"),
            (O.style.fontSize = "300px"),
            (O.style.fontVariant = "normal"),
            (O.style.fontStyle = "normal"),
            (O.style.fontWeight = "normal"),
            (O.style.letterSpacing = "0"),
            O.appendChild(W),
            document.body.appendChild(O);
          var G = W.offsetWidth;
          return (
            (W.style.fontFamily =
              (function (F) {
                var R,
                  U = F.split(","),
                  X = U.length,
                  Z = [];
                for (R = 0; R < X; R += 1)
                  U[R] !== "sans-serif" && U[R] !== "monospace" && Z.push(U[R]);
                return Z.join(",");
              })(B) +
              ", " +
              q),
            { node: W, w: G, parent: O }
          );
        }
        function l(B, q) {
          var O,
            W = document.body && q ? "svg" : "canvas",
            G = getFontProperties(B);
          if (W === "svg") {
            var F = createNS("text");
            (F.style.fontSize = "100px"),
              F.setAttribute("font-family", B.fFamily),
              F.setAttribute("font-style", G.style),
              F.setAttribute("font-weight", G.weight),
              (F.textContent = "1"),
              B.fClass
                ? ((F.style.fontFamily = "inherit"),
                  F.setAttribute("class", B.fClass))
                : (F.style.fontFamily = B.fFamily),
              q.appendChild(F),
              (O = F);
          } else {
            var R = new OffscreenCanvas(500, 500).getContext("2d");
            (R.font = G.style + " " + G.weight + " 100px " + B.fFamily),
              (O = R);
          }
          return {
            measureText: function (U) {
              return W === "svg"
                ? ((O.textContent = U), O.getComputedTextLength())
                : O.measureText(U).width;
            },
          };
        }
        function y(B) {
          var q = 0,
            O = B.charCodeAt(0);
          if (O >= 55296 && O <= 56319) {
            var W = B.charCodeAt(1);
            W >= 56320 &&
              W <= 57343 &&
              (q = 1024 * (O - 55296) + W - 56320 + 65536);
          }
          return q;
        }
        function D(B) {
          var q = y(B);
          return q >= 127462 && q <= 127487;
        }
        var j = function () {
          (this.fonts = []),
            (this.chars = null),
            (this.typekitLoaded = 0),
            (this.isLoaded = !1),
            (this._warned = !1),
            (this.initTime = Date.now()),
            (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
            (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
        };
        (j.isModifier = function (B, q) {
          var O = B.toString(16) + q.toString(16);
          return o.indexOf(O) !== -1;
        }),
          (j.isZeroWidthJoiner = function (B) {
            return B === 8205;
          }),
          (j.isFlagEmoji = function (B) {
            return D(B.substr(0, 2)) && D(B.substr(2, 2));
          }),
          (j.isRegionalCode = D),
          (j.isCombinedCharacter = function (B) {
            return e.indexOf(B) !== -1;
          }),
          (j.isRegionalFlag = function (B, q) {
            var O = y(B.substr(q, 2));
            if (O !== r) return !1;
            var W = 0;
            for (q += 2; W < 5; ) {
              if ((O = y(B.substr(q, 2))) < 917601 || O > 917626) return !1;
              (W += 1), (q += 2);
            }
            return y(B.substr(q, 2)) === 917631;
          }),
          (j.isVariationSelector = function (B) {
            return B === 65039;
          }),
          (j.BLACK_FLAG_CODE_POINT = r);
        var Y = {
          addChars: function (B) {
            if (B) {
              var q;
              this.chars || (this.chars = []);
              var O,
                W,
                G = B.length,
                F = this.chars.length;
              for (q = 0; q < G; q += 1) {
                for (O = 0, W = !1; O < F; )
                  this.chars[O].style === B[q].style &&
                    this.chars[O].fFamily === B[q].fFamily &&
                    this.chars[O].ch === B[q].ch &&
                    (W = !0),
                    (O += 1);
                W || (this.chars.push(B[q]), (F += 1));
              }
            }
          },
          addFonts: function (B, q) {
            if (B) {
              if (this.chars)
                return (this.isLoaded = !0), void (this.fonts = B.list);
              if (!document.body)
                return (
                  (this.isLoaded = !0),
                  B.list.forEach(function (st) {
                    (st.helper = l(st)), (st.cache = {});
                  }),
                  void (this.fonts = B.list)
                );
              var O,
                W = B.list,
                G = W.length,
                F = G;
              for (O = 0; O < G; O += 1) {
                var R,
                  U,
                  X = !0;
                if (
                  ((W[O].loaded = !1),
                  (W[O].monoCase = h(W[O].fFamily, "monospace")),
                  (W[O].sansCase = h(W[O].fFamily, "sans-serif")),
                  W[O].fPath)
                ) {
                  if (W[O].fOrigin === "p" || W[O].origin === 3) {
                    if (
                      ((R = document.querySelectorAll(
                        'style[f-forigin="p"][f-family="' +
                          W[O].fFamily +
                          '"], style[f-origin="3"][f-family="' +
                          W[O].fFamily +
                          '"]'
                      )).length > 0 && (X = !1),
                      X)
                    ) {
                      var Z = createTag("style");
                      Z.setAttribute("f-forigin", W[O].fOrigin),
                        Z.setAttribute("f-origin", W[O].origin),
                        Z.setAttribute("f-family", W[O].fFamily),
                        (Z.type = "text/css"),
                        (Z.innerText =
                          "@font-face {font-family: " +
                          W[O].fFamily +
                          "; font-style: normal; src: url('" +
                          W[O].fPath +
                          "');}"),
                        q.appendChild(Z);
                    }
                  } else if (W[O].fOrigin === "g" || W[O].origin === 1) {
                    for (
                      R = document.querySelectorAll(
                        'link[f-forigin="g"], link[f-origin="1"]'
                      ),
                        U = 0;
                      U < R.length;
                      U += 1
                    )
                      R[U].href.indexOf(W[O].fPath) !== -1 && (X = !1);
                    if (X) {
                      var J = createTag("link");
                      J.setAttribute("f-forigin", W[O].fOrigin),
                        J.setAttribute("f-origin", W[O].origin),
                        (J.type = "text/css"),
                        (J.rel = "stylesheet"),
                        (J.href = W[O].fPath),
                        document.body.appendChild(J);
                    }
                  } else if (W[O].fOrigin === "t" || W[O].origin === 2) {
                    for (
                      R = document.querySelectorAll(
                        'script[f-forigin="t"], script[f-origin="2"]'
                      ),
                        U = 0;
                      U < R.length;
                      U += 1
                    )
                      W[O].fPath === R[U].src && (X = !1);
                    if (X) {
                      var Q = createTag("link");
                      Q.setAttribute("f-forigin", W[O].fOrigin),
                        Q.setAttribute("f-origin", W[O].origin),
                        Q.setAttribute("rel", "stylesheet"),
                        Q.setAttribute("href", W[O].fPath),
                        q.appendChild(Q);
                    }
                  }
                } else (W[O].loaded = !0), (F -= 1);
                (W[O].helper = l(W[O], q)),
                  (W[O].cache = {}),
                  this.fonts.push(W[O]);
              }
              F === 0
                ? (this.isLoaded = !0)
                : setTimeout(this.checkLoadedFonts.bind(this), 100);
            } else this.isLoaded = !0;
          },
          getCharData: function (B, q, O) {
            for (var W = 0, G = this.chars.length; W < G; ) {
              if (
                this.chars[W].ch === B &&
                this.chars[W].style === q &&
                this.chars[W].fFamily === O
              )
                return this.chars[W];
              W += 1;
            }
            return (
              ((typeof B == "string" && B.charCodeAt(0) !== 13) || !B) &&
                console &&
                console.warn &&
                !this._warned &&
                ((this._warned = !0),
                console.warn(
                  "Missing character from exported characters list: ",
                  B,
                  q,
                  O
                )),
              t
            );
          },
          getFontByName: function (B) {
            for (var q = 0, O = this.fonts.length; q < O; ) {
              if (this.fonts[q].fName === B) return this.fonts[q];
              q += 1;
            }
            return this.fonts[0];
          },
          measureText: function (B, q, O) {
            var W = this.getFontByName(q),
              G = B;
            if (!W.cache[G]) {
              var F = W.helper;
              if (B === " ") {
                var R = F.measureText("|" + B + "|"),
                  U = F.measureText("||");
                W.cache[G] = (R - U) / 100;
              } else W.cache[G] = F.measureText(B) / 100;
            }
            return W.cache[G] * O;
          },
          checkLoadedFonts: function () {
            var B,
              q,
              O,
              W = this.fonts.length,
              G = W;
            for (B = 0; B < W; B += 1)
              this.fonts[B].loaded
                ? (G -= 1)
                : this.fonts[B].fOrigin === "n" || this.fonts[B].origin === 0
                ? (this.fonts[B].loaded = !0)
                : ((q = this.fonts[B].monoCase.node),
                  (O = this.fonts[B].monoCase.w),
                  q.offsetWidth !== O
                    ? ((G -= 1), (this.fonts[B].loaded = !0))
                    : ((q = this.fonts[B].sansCase.node),
                      (O = this.fonts[B].sansCase.w),
                      q.offsetWidth !== O &&
                        ((G -= 1), (this.fonts[B].loaded = !0))),
                  this.fonts[B].loaded &&
                    (this.fonts[B].sansCase.parent.parentNode.removeChild(
                      this.fonts[B].sansCase.parent
                    ),
                    this.fonts[B].monoCase.parent.parentNode.removeChild(
                      this.fonts[B].monoCase.parent
                    )));
            G !== 0 && Date.now() - this.initTime < 5e3
              ? setTimeout(this.checkLoadedFontsBinded, 20)
              : setTimeout(this.setIsLoadedBinded, 10);
          },
          setIsLoaded: function () {
            this.isLoaded = !0;
          },
        };
        return (j.prototype = Y), j;
      })();
      function SlotManager(t) {
        this.animationData = t;
      }
      function slotFactory(t) {
        return new SlotManager(t);
      }
      function RenderableElement() {}
      (SlotManager.prototype.getProp = function (t) {
        return this.animationData.slots && this.animationData.slots[t.sid]
          ? Object.assign(t, this.animationData.slots[t.sid].p)
          : t;
      }),
        (RenderableElement.prototype = {
          initRenderable: function () {
            (this.isInRange = !1),
              (this.hidden = !1),
              (this.isTransparent = !1),
              (this.renderableComponents = []);
          },
          addRenderableComponent: function (t) {
            this.renderableComponents.indexOf(t) === -1 &&
              this.renderableComponents.push(t);
          },
          removeRenderableComponent: function (t) {
            this.renderableComponents.indexOf(t) !== -1 &&
              this.renderableComponents.splice(
                this.renderableComponents.indexOf(t),
                1
              );
          },
          prepareRenderableFrame: function (t) {
            this.checkLayerLimits(t);
          },
          checkTransparency: function () {
            this.finalTransform.mProp.o.v <= 0
              ? !this.isTransparent &&
                this.globalData.renderConfig.hideOnTransparent &&
                ((this.isTransparent = !0), this.hide())
              : this.isTransparent && ((this.isTransparent = !1), this.show());
          },
          checkLayerLimits: function (t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
              ? this.isInRange !== !0 &&
                ((this.globalData._mdf = !0),
                (this._mdf = !0),
                (this.isInRange = !0),
                this.show())
              : this.isInRange !== !1 &&
                ((this.globalData._mdf = !0),
                (this.isInRange = !1),
                this.hide());
          },
          renderRenderable: function () {
            var t,
              e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1)
              this.renderableComponents[t].renderFrame(this._isFirstFrame);
          },
          sourceRectAtTime: function () {
            return { top: 0, left: 0, width: 100, height: 100 };
          },
          getLayerSize: function () {
            return this.data.ty === 5
              ? { w: this.data.textData.width, h: this.data.textData.height }
              : { w: this.data.width, h: this.data.height };
          },
        });
      var getBlendMode =
          ((blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity",
          }),
          function (t) {
            return blendModeEnums[t] || "";
          }),
        blendModeEnums;
      function SliderEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
      }
      function AngleEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
      }
      function ColorEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
      }
      function PointEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
      }
      function LayerIndexEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
      }
      function MaskIndexEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
      }
      function CheckboxEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
      }
      function NoValueEffect() {
        this.p = {};
      }
      function EffectsManager(t, e) {
        var r,
          o = t.ef || [];
        this.effectElements = [];
        var h,
          l = o.length;
        for (r = 0; r < l; r += 1)
          (h = new GroupEffect(o[r], e)), this.effectElements.push(h);
      }
      function GroupEffect(t, e) {
        this.init(t, e);
      }
      function BaseElement() {}
      function FrameElement() {}
      function FootageElement(t, e, r) {
        this.initFrame(),
          this.initRenderable(),
          (this.assetData = e.getAssetData(t.refId)),
          (this.footageData = e.imageLoader.getAsset(this.assetData)),
          this.initBaseData(t, e, r);
      }
      function AudioElement(t, e, r) {
        this.initFrame(),
          this.initRenderable(),
          (this.assetData = e.getAssetData(t.refId)),
          this.initBaseData(t, e, r),
          (this._isPlaying = !1),
          (this._canPlay = !1);
        var o = this.globalData.getAssetsPath(this.assetData);
        (this.audio = this.globalData.audioController.createAudio(o)),
          (this._currentTime = 0),
          this.globalData.audioController.addAudio(this),
          (this._volumeMultiplier = 1),
          (this._volume = 1),
          (this._previousVolume = null),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 }),
          (this.lv = PropertyFactory.getProp(
            this,
            t.au && t.au.lv ? t.au.lv : { k: [100] },
            1,
            0.01,
            this
          ));
      }
      function BaseRenderer() {}
      extendPrototype([DynamicPropertyContainer], GroupEffect),
        (GroupEffect.prototype.getValue =
          GroupEffect.prototype.iterateDynamicProperties),
        (GroupEffect.prototype.init = function (t, e) {
          var r;
          (this.data = t),
            (this.effectElements = []),
            this.initDynamicPropertyContainer(e);
          var o,
            h = this.data.ef.length,
            l = this.data.ef;
          for (r = 0; r < h; r += 1) {
            switch (((o = null), l[r].ty)) {
              case 0:
                o = new SliderEffect(l[r], e, this);
                break;
              case 1:
                o = new AngleEffect(l[r], e, this);
                break;
              case 2:
                o = new ColorEffect(l[r], e, this);
                break;
              case 3:
                o = new PointEffect(l[r], e, this);
                break;
              case 4:
              case 7:
                o = new CheckboxEffect(l[r], e, this);
                break;
              case 10:
                o = new LayerIndexEffect(l[r], e, this);
                break;
              case 11:
                o = new MaskIndexEffect(l[r], e, this);
                break;
              case 5:
                o = new EffectsManager(l[r], e);
                break;
              default:
                o = new NoValueEffect(l[r]);
            }
            o && this.effectElements.push(o);
          }
        }),
        (BaseElement.prototype = {
          checkMasks: function () {
            if (!this.data.hasMask) return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
              if (
                this.data.masksProperties[t].mode !== "n" &&
                this.data.masksProperties[t].cl !== !1
              )
                return !0;
              t += 1;
            }
            return !1;
          },
          initExpressions: function () {
            var t = getExpressionInterfaces();
            if (t) {
              var e = t("layer"),
                r = t("effects"),
                o = t("shape"),
                h = t("text"),
                l = t("comp");
              (this.layerInterface = e(this)),
                this.data.hasMask &&
                  this.maskManager &&
                  this.layerInterface.registerMaskInterface(this.maskManager);
              var y = r.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(y),
                this.data.ty === 0 || this.data.xt
                  ? (this.compInterface = l(this))
                  : this.data.ty === 4
                  ? ((this.layerInterface.shapeInterface = o(
                      this.shapesData,
                      this.itemsData,
                      this.layerInterface
                    )),
                    (this.layerInterface.content =
                      this.layerInterface.shapeInterface))
                  : this.data.ty === 5 &&
                    ((this.layerInterface.textInterface = h(this)),
                    (this.layerInterface.text =
                      this.layerInterface.textInterface));
            }
          },
          setBlendMode: function () {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
          },
          initBaseData: function (t, e, r) {
            (this.globalData = e),
              (this.comp = r),
              (this.data = t),
              (this.layerId = createElementID()),
              this.data.sr || (this.data.sr = 1),
              (this.effectsManager = new EffectsManager(
                this.data,
                this,
                this.dynamicProperties
              ));
          },
          getType: function () {
            return this.type;
          },
          sourceRectAtTime: function () {},
        }),
        (FrameElement.prototype = {
          initFrame: function () {
            (this._isFirstFrame = !1),
              (this.dynamicProperties = []),
              (this._mdf = !1);
          },
          prepareProperties: function (t, e) {
            var r,
              o = this.dynamicProperties.length;
            for (r = 0; r < o; r += 1)
              (e ||
                (this._isParent &&
                  this.dynamicProperties[r].propType === "transform")) &&
                (this.dynamicProperties[r].getValue(),
                this.dynamicProperties[r]._mdf &&
                  ((this.globalData._mdf = !0), (this._mdf = !0)));
          },
          addDynamicProperty: function (t) {
            this.dynamicProperties.indexOf(t) === -1 &&
              this.dynamicProperties.push(t);
          },
        }),
        (FootageElement.prototype.prepareFrame = function () {}),
        extendPrototype(
          [RenderableElement, BaseElement, FrameElement],
          FootageElement
        ),
        (FootageElement.prototype.getBaseElement = function () {
          return null;
        }),
        (FootageElement.prototype.renderFrame = function () {}),
        (FootageElement.prototype.destroy = function () {}),
        (FootageElement.prototype.initExpressions = function () {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("footage");
            this.layerInterface = e(this);
          }
        }),
        (FootageElement.prototype.getFootageData = function () {
          return this.footageData;
        }),
        (AudioElement.prototype.prepareFrame = function (t) {
          if (
            (this.prepareRenderableFrame(t, !0),
            this.prepareProperties(t, !0),
            this.tm._placeholder)
          )
            this._currentTime = t / this.data.sr;
          else {
            var e = this.tm.v;
            this._currentTime = e;
          }
          this._volume = this.lv.v[0];
          var r = this._volume * this._volumeMultiplier;
          this._previousVolume !== r &&
            ((this._previousVolume = r), this.audio.volume(r));
        }),
        extendPrototype(
          [RenderableElement, BaseElement, FrameElement],
          AudioElement
        ),
        (AudioElement.prototype.renderFrame = function () {
          this.isInRange &&
            this._canPlay &&
            (this._isPlaying
              ? (!this.audio.playing() ||
                  Math.abs(
                    this._currentTime / this.globalData.frameRate -
                      this.audio.seek()
                  ) > 0.1) &&
                this.audio.seek(this._currentTime / this.globalData.frameRate)
              : (this.audio.play(),
                this.audio.seek(this._currentTime / this.globalData.frameRate),
                (this._isPlaying = !0)));
        }),
        (AudioElement.prototype.show = function () {}),
        (AudioElement.prototype.hide = function () {
          this.audio.pause(), (this._isPlaying = !1);
        }),
        (AudioElement.prototype.pause = function () {
          this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
        }),
        (AudioElement.prototype.resume = function () {
          this._canPlay = !0;
        }),
        (AudioElement.prototype.setRate = function (t) {
          this.audio.rate(t);
        }),
        (AudioElement.prototype.volume = function (t) {
          (this._volumeMultiplier = t),
            (this._previousVolume = t * this._volume),
            this.audio.volume(this._previousVolume);
        }),
        (AudioElement.prototype.getBaseElement = function () {
          return null;
        }),
        (AudioElement.prototype.destroy = function () {}),
        (AudioElement.prototype.sourceRectAtTime = function () {}),
        (AudioElement.prototype.initExpressions = function () {}),
        (BaseRenderer.prototype.checkLayers = function (t) {
          var e,
            r,
            o = this.layers.length;
          for (this.completeLayers = !0, e = o - 1; e >= 0; e -= 1)
            this.elements[e] ||
              ((r = this.layers[e]).ip - r.st <= t - this.layers[e].st &&
                r.op - r.st > t - this.layers[e].st &&
                this.buildItem(e)),
              (this.completeLayers = !!this.elements[e] && this.completeLayers);
          this.checkPendingElements();
        }),
        (BaseRenderer.prototype.createItem = function (t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
            default:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 6:
              return this.createAudio(t);
            case 13:
              return this.createCamera(t);
            case 15:
              return this.createFootage(t);
          }
        }),
        (BaseRenderer.prototype.createCamera = function () {
          throw new Error("You're using a 3d camera. Try the html renderer.");
        }),
        (BaseRenderer.prototype.createAudio = function (t) {
          return new AudioElement(t, this.globalData, this);
        }),
        (BaseRenderer.prototype.createFootage = function (t) {
          return new FootageElement(t, this.globalData, this);
        }),
        (BaseRenderer.prototype.buildAllItems = function () {
          var t,
            e = this.layers.length;
          for (t = 0; t < e; t += 1) this.buildItem(t);
          this.checkPendingElements();
        }),
        (BaseRenderer.prototype.includeLayers = function (t) {
          var e;
          this.completeLayers = !1;
          var r,
            o = t.length,
            h = this.layers.length;
          for (e = 0; e < o; e += 1)
            for (r = 0; r < h; ) {
              if (this.layers[r].id === t[e].id) {
                this.layers[r] = t[e];
                break;
              }
              r += 1;
            }
        }),
        (BaseRenderer.prototype.setProjectInterface = function (t) {
          this.globalData.projectInterface = t;
        }),
        (BaseRenderer.prototype.initItems = function () {
          this.globalData.progressiveLoad || this.buildAllItems();
        }),
        (BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
          for (
            var o = this.elements, h = this.layers, l = 0, y = h.length;
            l < y;

          )
            h[l].ind == e &&
              (o[l] && o[l] !== !0
                ? (r.push(o[l]),
                  o[l].setAsParent(),
                  h[l].parent !== void 0
                    ? this.buildElementParenting(t, h[l].parent, r)
                    : t.setHierarchy(r))
                : (this.buildItem(l), this.addPendingElement(t))),
              (l += 1);
        }),
        (BaseRenderer.prototype.addPendingElement = function (t) {
          this.pendingElements.push(t);
        }),
        (BaseRenderer.prototype.searchExtraCompositions = function (t) {
          var e,
            r = t.length;
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var o = this.createComp(t[e]);
              o.initExpressions(),
                this.globalData.projectInterface.registerComposition(o);
            }
        }),
        (BaseRenderer.prototype.getElementById = function (t) {
          var e,
            r = this.elements.length;
          for (e = 0; e < r; e += 1)
            if (this.elements[e].data.ind === t) return this.elements[e];
          return null;
        }),
        (BaseRenderer.prototype.getElementByPath = function (t) {
          var e,
            r = t.shift();
          if (typeof r == "number") e = this.elements[r];
          else {
            var o,
              h = this.elements.length;
            for (o = 0; o < h; o += 1)
              if (this.elements[o].data.nm === r) {
                e = this.elements[o];
                break;
              }
          }
          return t.length === 0 ? e : e.getElementByPath(t);
        }),
        (BaseRenderer.prototype.setupGlobalData = function (t, e) {
          (this.globalData.fontManager = new FontManager()),
            (this.globalData.slotManager = slotFactory(t)),
            this.globalData.fontManager.addChars(t.chars),
            this.globalData.fontManager.addFonts(t.fonts, e),
            (this.globalData.getAssetData =
              this.animationItem.getAssetData.bind(this.animationItem)),
            (this.globalData.getAssetsPath =
              this.animationItem.getAssetsPath.bind(this.animationItem)),
            (this.globalData.imageLoader = this.animationItem.imagePreloader),
            (this.globalData.audioController =
              this.animationItem.audioController),
            (this.globalData.frameId = 0),
            (this.globalData.frameRate = t.fr),
            (this.globalData.nm = t.nm),
            (this.globalData.compSize = { w: t.w, h: t.h });
        });
      var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
      function TransformElement() {}
      function MaskElement(t, e, r) {
        (this.data = t),
          (this.element = e),
          (this.globalData = r),
          (this.storedData = []),
          (this.masksProperties = this.data.masksProperties || []),
          (this.maskElement = null);
        var o,
          h,
          l = this.globalData.defs,
          y = this.masksProperties ? this.masksProperties.length : 0;
        (this.viewData = createSizedArray(y)), (this.solidPath = "");
        var D,
          j,
          Y,
          B,
          q,
          O,
          W = this.masksProperties,
          G = 0,
          F = [],
          R = createElementID(),
          U = "clipPath",
          X = "clip-path";
        for (o = 0; o < y; o += 1)
          if (
            (((W[o].mode !== "a" && W[o].mode !== "n") ||
              W[o].inv ||
              W[o].o.k !== 100 ||
              W[o].o.x) &&
              ((U = "mask"), (X = "mask")),
            (W[o].mode !== "s" && W[o].mode !== "i") || G !== 0
              ? (Y = null)
              : ((Y = createNS("rect")).setAttribute("fill", "#ffffff"),
                Y.setAttribute("width", this.element.comp.data.w || 0),
                Y.setAttribute("height", this.element.comp.data.h || 0),
                F.push(Y)),
            (h = createNS("path")),
            W[o].mode === "n")
          )
            (this.viewData[o] = {
              op: PropertyFactory.getProp(
                this.element,
                W[o].o,
                0,
                0.01,
                this.element
              ),
              prop: ShapePropertyFactory.getShapeProp(this.element, W[o], 3),
              elem: h,
              lastPath: "",
            }),
              l.appendChild(h);
          else {
            var Z;
            if (
              ((G += 1),
              h.setAttribute("fill", W[o].mode === "s" ? "#000000" : "#ffffff"),
              h.setAttribute("clip-rule", "nonzero"),
              W[o].x.k !== 0
                ? ((U = "mask"),
                  (X = "mask"),
                  (O = PropertyFactory.getProp(
                    this.element,
                    W[o].x,
                    0,
                    null,
                    this.element
                  )),
                  (Z = createElementID()),
                  (B = createNS("filter")).setAttribute("id", Z),
                  (q = createNS("feMorphology")).setAttribute(
                    "operator",
                    "erode"
                  ),
                  q.setAttribute("in", "SourceGraphic"),
                  q.setAttribute("radius", "0"),
                  B.appendChild(q),
                  l.appendChild(B),
                  h.setAttribute(
                    "stroke",
                    W[o].mode === "s" ? "#000000" : "#ffffff"
                  ))
                : ((q = null), (O = null)),
              (this.storedData[o] = {
                elem: h,
                x: O,
                expan: q,
                lastPath: "",
                lastOperator: "",
                filterId: Z,
                lastRadius: 0,
              }),
              W[o].mode === "i")
            ) {
              j = F.length;
              var J = createNS("g");
              for (D = 0; D < j; D += 1) J.appendChild(F[D]);
              var Q = createNS("mask");
              Q.setAttribute("mask-type", "alpha"),
                Q.setAttribute("id", R + "_" + G),
                Q.appendChild(h),
                l.appendChild(Q),
                J.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + R + "_" + G + ")"
                ),
                (F.length = 0),
                F.push(J);
            } else F.push(h);
            W[o].inv &&
              !this.solidPath &&
              (this.solidPath = this.createLayerSolidPath()),
              (this.viewData[o] = {
                elem: h,
                lastPath: "",
                op: PropertyFactory.getProp(
                  this.element,
                  W[o].o,
                  0,
                  0.01,
                  this.element
                ),
                prop: ShapePropertyFactory.getShapeProp(this.element, W[o], 3),
                invRect: Y,
              }),
              this.viewData[o].prop.k ||
                this.drawPath(W[o], this.viewData[o].prop.v, this.viewData[o]);
          }
        for (this.maskElement = createNS(U), y = F.length, o = 0; o < y; o += 1)
          this.maskElement.appendChild(F[o]);
        G > 0 &&
          (this.maskElement.setAttribute("id", R),
          this.element.maskedElement.setAttribute(
            X,
            "url(" + getLocationHref() + "#" + R + ")"
          ),
          l.appendChild(this.maskElement)),
          this.viewData.length && this.element.addRenderableComponent(this);
      }
      (TransformElement.prototype = {
        initTransform: function () {
          var t = new Matrix();
          (this.finalTransform = {
            mProp: this.data.ks
              ? TransformPropertyFactory.getTransformProperty(
                  this,
                  this.data.ks,
                  this
                )
              : { o: 0 },
            _matMdf: !1,
            _localMatMdf: !1,
            _opMdf: !1,
            mat: t,
            localMat: t,
            localOpacity: 1,
          }),
            this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
            this.data.ty;
        },
        renderTransform: function () {
          if (
            ((this.finalTransform._opMdf =
              this.finalTransform.mProp.o._mdf || this._isFirstFrame),
            (this.finalTransform._matMdf =
              this.finalTransform.mProp._mdf || this._isFirstFrame),
            this.hierarchy)
          ) {
            var t,
              e = this.finalTransform.mat,
              r = 0,
              o = this.hierarchy.length;
            if (!this.finalTransform._matMdf)
              for (; r < o; ) {
                if (this.hierarchy[r].finalTransform.mProp._mdf) {
                  this.finalTransform._matMdf = !0;
                  break;
                }
                r += 1;
              }
            if (this.finalTransform._matMdf)
              for (
                t = this.finalTransform.mProp.v.props,
                  e.cloneFromProps(t),
                  r = 0;
                r < o;
                r += 1
              )
                e.multiply(this.hierarchy[r].finalTransform.mProp.v);
          }
          this.finalTransform._matMdf &&
            (this.finalTransform._localMatMdf = this.finalTransform._matMdf),
            this.finalTransform._opMdf &&
              (this.finalTransform.localOpacity =
                this.finalTransform.mProp.o.v);
        },
        renderLocalTransform: function () {
          if (this.localTransforms) {
            var t = 0,
              e = this.localTransforms.length;
            if (
              ((this.finalTransform._localMatMdf = this.finalTransform._matMdf),
              !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
            )
              for (; t < e; )
                this.localTransforms[t]._mdf &&
                  (this.finalTransform._localMatMdf = !0),
                  this.localTransforms[t]._opMdf &&
                    !this.finalTransform._opMdf &&
                    ((this.finalTransform.localOpacity =
                      this.finalTransform.mProp.o.v),
                    (this.finalTransform._opMdf = !0)),
                  (t += 1);
            if (this.finalTransform._localMatMdf) {
              var r = this.finalTransform.localMat;
              for (
                this.localTransforms[0].matrix.clone(r), t = 1;
                t < e;
                t += 1
              ) {
                var o = this.localTransforms[t].matrix;
                r.multiply(o);
              }
              r.multiply(this.finalTransform.mat);
            }
            if (this.finalTransform._opMdf) {
              var h = this.finalTransform.localOpacity;
              for (t = 0; t < e; t += 1)
                h *= 0.01 * this.localTransforms[t].opacity;
              this.finalTransform.localOpacity = h;
            }
          }
        },
        searchEffectTransforms: function () {
          if (this.renderableEffectsManager) {
            var t = this.renderableEffectsManager.getEffects(
              effectTypes.TRANSFORM_EFFECT
            );
            if (t.length) {
              (this.localTransforms = []),
                (this.finalTransform.localMat = new Matrix());
              var e = 0,
                r = t.length;
              for (e = 0; e < r; e += 1) this.localTransforms.push(t[e]);
            }
          }
        },
        globalToLocal: function (t) {
          var e = [];
          e.push(this.finalTransform);
          for (var r, o = !0, h = this.comp; o; )
            h.finalTransform
              ? (h.data.hasMask && e.splice(0, 0, h.finalTransform),
                (h = h.comp))
              : (o = !1);
          var l,
            y = e.length;
          for (r = 0; r < y; r += 1)
            (l = e[r].mat.applyToPointArray(0, 0, 0)),
              (t = [t[0] - l[0], t[1] - l[1], 0]);
          return t;
        },
        mHelper: new Matrix(),
      }),
        (MaskElement.prototype.getMaskProperty = function (t) {
          return this.viewData[t].prop;
        }),
        (MaskElement.prototype.renderFrame = function (t) {
          var e,
            r = this.element.finalTransform.mat,
            o = this.masksProperties.length;
          for (e = 0; e < o; e += 1)
            if (
              ((this.viewData[e].prop._mdf || t) &&
                this.drawPath(
                  this.masksProperties[e],
                  this.viewData[e].prop.v,
                  this.viewData[e]
                ),
              (this.viewData[e].op._mdf || t) &&
                this.viewData[e].elem.setAttribute(
                  "fill-opacity",
                  this.viewData[e].op.v
                ),
              this.masksProperties[e].mode !== "n" &&
                (this.viewData[e].invRect &&
                  (this.element.finalTransform.mProp._mdf || t) &&
                  this.viewData[e].invRect.setAttribute(
                    "transform",
                    r.getInverseMatrix().to2dCSS()
                  ),
                this.storedData[e].x && (this.storedData[e].x._mdf || t)))
            ) {
              var h = this.storedData[e].expan;
              this.storedData[e].x.v < 0
                ? (this.storedData[e].lastOperator !== "erode" &&
                    ((this.storedData[e].lastOperator = "erode"),
                    this.storedData[e].elem.setAttribute(
                      "filter",
                      "url(" +
                        getLocationHref() +
                        "#" +
                        this.storedData[e].filterId +
                        ")"
                    )),
                  h.setAttribute("radius", -this.storedData[e].x.v))
                : (this.storedData[e].lastOperator !== "dilate" &&
                    ((this.storedData[e].lastOperator = "dilate"),
                    this.storedData[e].elem.setAttribute("filter", null)),
                  this.storedData[e].elem.setAttribute(
                    "stroke-width",
                    2 * this.storedData[e].x.v
                  ));
            }
        }),
        (MaskElement.prototype.getMaskelement = function () {
          return this.maskElement;
        }),
        (MaskElement.prototype.createLayerSolidPath = function () {
          var t = "M0,0 ";
          return (
            (t += " h" + this.globalData.compSize.w),
            (t += " v" + this.globalData.compSize.h),
            (t += " h-" + this.globalData.compSize.w),
            (t += " v-" + this.globalData.compSize.h + " ")
          );
        }),
        (MaskElement.prototype.drawPath = function (t, e, r) {
          var o,
            h,
            l = " M" + e.v[0][0] + "," + e.v[0][1];
          for (h = e._length, o = 1; o < h; o += 1)
            l +=
              " C" +
              e.o[o - 1][0] +
              "," +
              e.o[o - 1][1] +
              " " +
              e.i[o][0] +
              "," +
              e.i[o][1] +
              " " +
              e.v[o][0] +
              "," +
              e.v[o][1];
          if (
            (e.c &&
              h > 1 &&
              (l +=
                " C" +
                e.o[o - 1][0] +
                "," +
                e.o[o - 1][1] +
                " " +
                e.i[0][0] +
                "," +
                e.i[0][1] +
                " " +
                e.v[0][0] +
                "," +
                e.v[0][1]),
            r.lastPath !== l)
          ) {
            var y = "";
            r.elem &&
              (e.c && (y = t.inv ? this.solidPath + l : l),
              r.elem.setAttribute("d", y)),
              (r.lastPath = l);
          }
        }),
        (MaskElement.prototype.destroy = function () {
          (this.element = null),
            (this.globalData = null),
            (this.maskElement = null),
            (this.data = null),
            (this.masksProperties = null);
        });
      var filtersFactory = (function () {
          var t = {
            createFilter: function (e, r) {
              var o = createNS("filter");
              return (
                o.setAttribute("id", e),
                r !== !0 &&
                  (o.setAttribute("filterUnits", "objectBoundingBox"),
                  o.setAttribute("x", "0%"),
                  o.setAttribute("y", "0%"),
                  o.setAttribute("width", "100%"),
                  o.setAttribute("height", "100%")),
                o
              );
            },
            createAlphaToLuminanceFilter: function () {
              var e = createNS("feColorMatrix");
              return (
                e.setAttribute("type", "matrix"),
                e.setAttribute("color-interpolation-filters", "sRGB"),
                e.setAttribute(
                  "values",
                  "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
                ),
                e
              );
            },
          };
          return t;
        })(),
        featureSupport = (function () {
          var t = {
            maskType: !0,
            svgLumaHidden: !0,
            offscreenCanvas: typeof OffscreenCanvas < "u",
          };
          return (
            (/MSIE 10/i.test(navigator.userAgent) ||
              /MSIE 9/i.test(navigator.userAgent) ||
              /rv:11.0/i.test(navigator.userAgent) ||
              /Edge\/\d./i.test(navigator.userAgent)) &&
              (t.maskType = !1),
            /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1),
            t
          );
        })(),
        registeredEffects$1 = {},
        idPrefix = "filter_result_";
      function SVGEffects(t) {
        var e,
          r,
          o = "SourceGraphic",
          h = t.data.ef ? t.data.ef.length : 0,
          l = createElementID(),
          y = filtersFactory.createFilter(l, !0),
          D = 0;
        for (this.filters = [], e = 0; e < h; e += 1) {
          r = null;
          var j = t.data.ef[e].ty;
          registeredEffects$1[j] &&
            ((r = new registeredEffects$1[j].effect(
              y,
              t.effectsManager.effectElements[e],
              t,
              idPrefix + D,
              o
            )),
            (o = idPrefix + D),
            registeredEffects$1[j].countsAsEffect && (D += 1)),
            r && this.filters.push(r);
        }
        D &&
          (t.globalData.defs.appendChild(y),
          t.layerElement.setAttribute(
            "filter",
            "url(" + getLocationHref() + "#" + l + ")"
          )),
          this.filters.length && t.addRenderableComponent(this);
      }
      function registerEffect$1(t, e, r) {
        registeredEffects$1[t] = { effect: e, countsAsEffect: r };
      }
      function SVGBaseElement() {}
      function HierarchyElement() {}
      function RenderableDOMElement() {}
      function IImageElement(t, e, r) {
        (this.assetData = e.getAssetData(t.refId)),
          this.assetData &&
            this.assetData.sid &&
            (this.assetData = e.slotManager.getProp(this.assetData)),
          this.initElement(t, e, r),
          (this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h,
          });
      }
      function ProcessedElement(t, e) {
        (this.elem = t), (this.pos = e);
      }
      function IShapeElement() {}
      (SVGEffects.prototype.renderFrame = function (t) {
        var e,
          r = this.filters.length;
        for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
      }),
        (SVGEffects.prototype.getEffects = function (t) {
          var e,
            r = this.filters.length,
            o = [];
          for (e = 0; e < r; e += 1)
            this.filters[e].type === t && o.push(this.filters[e]);
          return o;
        }),
        (SVGBaseElement.prototype = {
          initRendererElement: function () {
            this.layerElement = createNS("g");
          },
          createContainerElements: function () {
            (this.matteElement = createNS("g")),
              (this.transformedElement = this.layerElement),
              (this.maskedElement = this.layerElement),
              (this._sizeChanged = !1);
            var t = null;
            if (this.data.td) {
              this.matteMasks = {};
              var e = createNS("g");
              e.setAttribute("id", this.layerId),
                e.appendChild(this.layerElement),
                (t = e),
                this.globalData.defs.appendChild(e);
            } else
              this.data.tt
                ? (this.matteElement.appendChild(this.layerElement),
                  (t = this.matteElement),
                  (this.baseElement = this.matteElement))
                : (this.baseElement = this.layerElement);
            if (
              (this.data.ln &&
                this.layerElement.setAttribute("id", this.data.ln),
              this.data.cl &&
                this.layerElement.setAttribute("class", this.data.cl),
              this.data.ty === 0 && !this.data.hd)
            ) {
              var r = createNS("clipPath"),
                o = createNS("path");
              o.setAttribute(
                "d",
                "M0,0 L" +
                  this.data.w +
                  ",0 L" +
                  this.data.w +
                  "," +
                  this.data.h +
                  " L0," +
                  this.data.h +
                  "z"
              );
              var h = createElementID();
              if (
                (r.setAttribute("id", h),
                r.appendChild(o),
                this.globalData.defs.appendChild(r),
                this.checkMasks())
              ) {
                var l = createNS("g");
                l.setAttribute(
                  "clip-path",
                  "url(" + getLocationHref() + "#" + h + ")"
                ),
                  l.appendChild(this.layerElement),
                  (this.transformedElement = l),
                  t
                    ? t.appendChild(this.transformedElement)
                    : (this.baseElement = this.transformedElement);
              } else
                this.layerElement.setAttribute(
                  "clip-path",
                  "url(" + getLocationHref() + "#" + h + ")"
                );
            }
            this.data.bm !== 0 && this.setBlendMode();
          },
          renderElement: function () {
            this.finalTransform._localMatMdf &&
              this.transformedElement.setAttribute(
                "transform",
                this.finalTransform.localMat.to2dCSS()
              ),
              this.finalTransform._opMdf &&
                this.transformedElement.setAttribute(
                  "opacity",
                  this.finalTransform.localOpacity
                );
          },
          destroyBaseElement: function () {
            (this.layerElement = null),
              (this.matteElement = null),
              this.maskManager.destroy();
          },
          getBaseElement: function () {
            return this.data.hd ? null : this.baseElement;
          },
          createRenderableComponents: function () {
            (this.maskManager = new MaskElement(
              this.data,
              this,
              this.globalData
            )),
              (this.renderableEffectsManager = new SVGEffects(this)),
              this.searchEffectTransforms();
          },
          getMatte: function (t) {
            if (
              (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t])
            ) {
              var e,
                r,
                o,
                h,
                l = this.layerId + "_" + t;
              if (t === 1 || t === 3) {
                var y = createNS("mask");
                y.setAttribute("id", l),
                  y.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"),
                  (o = createNS("use")).setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "href",
                    "#" + this.layerId
                  ),
                  y.appendChild(o),
                  this.globalData.defs.appendChild(y),
                  featureSupport.maskType ||
                    t !== 1 ||
                    (y.setAttribute("mask-type", "luminance"),
                    (e = createElementID()),
                    (r = filtersFactory.createFilter(e)),
                    this.globalData.defs.appendChild(r),
                    r.appendChild(
                      filtersFactory.createAlphaToLuminanceFilter()
                    ),
                    (h = createNS("g")).appendChild(o),
                    y.appendChild(h),
                    h.setAttribute(
                      "filter",
                      "url(" + getLocationHref() + "#" + e + ")"
                    ));
              } else if (t === 2) {
                var D = createNS("mask");
                D.setAttribute("id", l), D.setAttribute("mask-type", "alpha");
                var j = createNS("g");
                D.appendChild(j),
                  (e = createElementID()),
                  (r = filtersFactory.createFilter(e));
                var Y = createNS("feComponentTransfer");
                Y.setAttribute("in", "SourceGraphic"), r.appendChild(Y);
                var B = createNS("feFuncA");
                B.setAttribute("type", "table"),
                  B.setAttribute("tableValues", "1.0 0.0"),
                  Y.appendChild(B),
                  this.globalData.defs.appendChild(r);
                var q = createNS("rect");
                q.setAttribute("width", this.comp.data.w),
                  q.setAttribute("height", this.comp.data.h),
                  q.setAttribute("x", "0"),
                  q.setAttribute("y", "0"),
                  q.setAttribute("fill", "#ffffff"),
                  q.setAttribute("opacity", "0"),
                  j.setAttribute(
                    "filter",
                    "url(" + getLocationHref() + "#" + e + ")"
                  ),
                  j.appendChild(q),
                  (o = createNS("use")).setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "href",
                    "#" + this.layerId
                  ),
                  j.appendChild(o),
                  featureSupport.maskType ||
                    (D.setAttribute("mask-type", "luminance"),
                    r.appendChild(
                      filtersFactory.createAlphaToLuminanceFilter()
                    ),
                    (h = createNS("g")),
                    j.appendChild(q),
                    h.appendChild(this.layerElement),
                    j.appendChild(h)),
                  this.globalData.defs.appendChild(D);
              }
              this.matteMasks[t] = l;
            }
            return this.matteMasks[t];
          },
          setMatte: function (t) {
            this.matteElement &&
              this.matteElement.setAttribute(
                "mask",
                "url(" + getLocationHref() + "#" + t + ")"
              );
          },
        }),
        (HierarchyElement.prototype = {
          initHierarchy: function () {
            (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
          },
          setHierarchy: function (t) {
            this.hierarchy = t;
          },
          setAsParent: function () {
            this._isParent = !0;
          },
          checkParenting: function () {
            this.data.parent !== void 0 &&
              this.comp.buildElementParenting(this, this.data.parent, []);
          },
        }),
        extendPrototype(
          [
            RenderableElement,
            createProxyFunction({
              initElement: function (t, e, r) {
                this.initFrame(),
                  this.initBaseData(t, e, r),
                  this.initTransform(t, e, r),
                  this.initHierarchy(),
                  this.initRenderable(),
                  this.initRendererElement(),
                  this.createContainerElements(),
                  this.createRenderableComponents(),
                  this.createContent(),
                  this.hide();
              },
              hide: function () {
                this.hidden ||
                  (this.isInRange && !this.isTransparent) ||
                  (((this.baseElement || this.layerElement).style.display =
                    "none"),
                  (this.hidden = !0));
              },
              show: function () {
                this.isInRange &&
                  !this.isTransparent &&
                  (this.data.hd ||
                    ((this.baseElement || this.layerElement).style.display =
                      "block"),
                  (this.hidden = !1),
                  (this._isFirstFrame = !0));
              },
              renderFrame: function () {
                this.data.hd ||
                  this.hidden ||
                  (this.renderTransform(),
                  this.renderRenderable(),
                  this.renderLocalTransform(),
                  this.renderElement(),
                  this.renderInnerContent(),
                  this._isFirstFrame && (this._isFirstFrame = !1));
              },
              renderInnerContent: function () {},
              prepareFrame: function (t) {
                (this._mdf = !1),
                  this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange),
                  this.checkTransparency();
              },
              destroy: function () {
                (this.innerElem = null), this.destroyBaseElement();
              },
            }),
          ],
          RenderableDOMElement
        ),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          IImageElement
        ),
        (IImageElement.prototype.createContent = function () {
          var t = this.globalData.getAssetsPath(this.assetData);
          (this.innerElem = createNS("image")),
            this.innerElem.setAttribute("width", this.assetData.w + "px"),
            this.innerElem.setAttribute("height", this.assetData.h + "px"),
            this.innerElem.setAttribute(
              "preserveAspectRatio",
              this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio
            ),
            this.innerElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "href",
              t
            ),
            this.layerElement.appendChild(this.innerElem);
        }),
        (IImageElement.prototype.sourceRectAtTime = function () {
          return this.sourceRect;
        }),
        (IShapeElement.prototype = {
          addShapeToModifiers: function (t) {
            var e,
              r = this.shapeModifiers.length;
            for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t);
          },
          isShapeInAnimatedModifiers: function (t) {
            for (var e = this.shapeModifiers.length; 0 < e; )
              if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
            return !1;
          },
          renderModifiers: function () {
            if (this.shapeModifiers.length) {
              var t,
                e = this.shapes.length;
              for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
              for (
                t = (e = this.shapeModifiers.length) - 1;
                t >= 0 &&
                !this.shapeModifiers[t].processShapes(this._isFirstFrame);
                t -= 1
              );
            }
          },
          searchProcessedElement: function (t) {
            for (var e = this.processedElements, r = 0, o = e.length; r < o; ) {
              if (e[r].elem === t) return e[r].pos;
              r += 1;
            }
            return 0;
          },
          addProcessedElement: function (t, e) {
            for (var r = this.processedElements, o = r.length; o; )
              if (r[(o -= 1)].elem === t) return void (r[o].pos = e);
            r.push(new ProcessedElement(t, e));
          },
          prepareFrame: function (t) {
            this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange);
          },
        });
      var lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
        lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
      function SVGShapeData(t, e, r) {
        (this.caches = []),
          (this.styles = []),
          (this.transformers = t),
          (this.lStr = ""),
          (this.sh = r),
          (this.lvl = e),
          (this._isAnimated = !!r.k);
        for (var o = 0, h = t.length; o < h; ) {
          if (t[o].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break;
          }
          o += 1;
        }
      }
      function SVGStyleData(t, e) {
        (this.data = t),
          (this.type = t.ty),
          (this.d = ""),
          (this.lvl = e),
          (this._mdf = !1),
          (this.closed = t.hd === !0),
          (this.pElem = createNS("path")),
          (this.msElem = null);
      }
      function DashProperty(t, e, r, o) {
        var h;
        (this.elem = t),
          (this.frameId = -1),
          (this.dataProps = createSizedArray(e.length)),
          (this.renderer = r),
          (this.k = !1),
          (this.dashStr = ""),
          (this.dashArray = createTypedArray(
            "float32",
            e.length ? e.length - 1 : 0
          )),
          (this.dashoffset = createTypedArray("float32", 1)),
          this.initDynamicPropertyContainer(o);
        var l,
          y = e.length || 0;
        for (h = 0; h < y; h += 1)
          (l = PropertyFactory.getProp(t, e[h].v, 0, 0, this)),
            (this.k = l.k || this.k),
            (this.dataProps[h] = { n: e[h].n, p: l });
        this.k || this.getValue(!0), (this._isAnimated = this.k);
      }
      function SVGStrokeStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
          (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
          (this.d = new DashProperty(t, e.d || {}, "svg", this)),
          (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
          (this.style = r),
          (this._isAnimated = !!this._isAnimated);
      }
      function SVGFillStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
          (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
          (this.style = r);
      }
      function SVGNoStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.style = r);
      }
      function GradientProperty(t, e, r) {
        (this.data = e), (this.c = createTypedArray("uint8c", 4 * e.p));
        var o = e.k.k[0].s
          ? e.k.k[0].s.length - 4 * e.p
          : e.k.k.length - 4 * e.p;
        (this.o = createTypedArray("float32", o)),
          (this._cmdf = !1),
          (this._omdf = !1),
          (this._collapsable = this.checkCollapsable()),
          (this._hasOpacity = o),
          this.initDynamicPropertyContainer(r),
          (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
          (this.k = this.prop.k),
          this.getValue(!0);
      }
      function SVGGradientFillStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          this.initGradientData(t, e, r);
      }
      function SVGGradientStrokeStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
          (this.d = new DashProperty(t, e.d || {}, "svg", this)),
          this.initGradientData(t, e, r),
          (this._isAnimated = !!this._isAnimated);
      }
      function ShapeGroupData() {
        (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
      }
      function SVGTransformData(t, e, r) {
        (this.transform = { mProps: t, op: e, container: r }),
          (this.elements = []),
          (this._isAnimated =
            this.transform.mProps.dynamicProperties.length ||
            this.transform.op.effectsSequence.length);
      }
      (SVGShapeData.prototype.setAsAnimated = function () {
        this._isAnimated = !0;
      }),
        (SVGStyleData.prototype.reset = function () {
          (this.d = ""), (this._mdf = !1);
        }),
        (DashProperty.prototype.getValue = function (t) {
          if (
            (this.elem.globalData.frameId !== this.frameId || t) &&
            ((this.frameId = this.elem.globalData.frameId),
            this.iterateDynamicProperties(),
            (this._mdf = this._mdf || t),
            this._mdf)
          ) {
            var e = 0,
              r = this.dataProps.length;
            for (
              this.renderer === "svg" && (this.dashStr = ""), e = 0;
              e < r;
              e += 1
            )
              this.dataProps[e].n !== "o"
                ? this.renderer === "svg"
                  ? (this.dashStr += " " + this.dataProps[e].p.v)
                  : (this.dashArray[e] = this.dataProps[e].p.v)
                : (this.dashoffset[0] = this.dataProps[e].p.v);
          }
        }),
        extendPrototype([DynamicPropertyContainer], DashProperty),
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
        extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
        (GradientProperty.prototype.comparePoints = function (t, e) {
          for (var r = 0, o = this.o.length / 2; r < o; ) {
            if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01) return !1;
            r += 1;
          }
          return !0;
        }),
        (GradientProperty.prototype.checkCollapsable = function () {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e; ) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                return !1;
              t += 1;
            }
          else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0;
        }),
        (GradientProperty.prototype.getValue = function (t) {
          if (
            (this.prop.getValue(),
            (this._mdf = !1),
            (this._cmdf = !1),
            (this._omdf = !1),
            this.prop._mdf || t)
          ) {
            var e,
              r,
              o,
              h = 4 * this.data.p;
            for (e = 0; e < h; e += 1)
              (r = e % 4 == 0 ? 100 : 255),
                (o = Math.round(this.prop.v[e] * r)),
                this.c[e] !== o && ((this.c[e] = o), (this._cmdf = !t));
            if (this.o.length)
              for (h = this.prop.v.length, e = 4 * this.data.p; e < h; e += 1)
                (r = e % 2 == 0 ? 100 : 1),
                  (o =
                    e % 2 == 0
                      ? Math.round(100 * this.prop.v[e])
                      : this.prop.v[e]),
                  this.o[e - 4 * this.data.p] !== o &&
                    ((this.o[e - 4 * this.data.p] = o), (this._omdf = !t));
            this._mdf = !t;
          }
        }),
        extendPrototype([DynamicPropertyContainer], GradientProperty),
        (SVGGradientFillStyleData.prototype.initGradientData = function (
          t,
          e,
          r
        ) {
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
            (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
            (this.h = PropertyFactory.getProp(
              t,
              e.h || { k: 0 },
              0,
              0.01,
              this
            )),
            (this.a = PropertyFactory.getProp(
              t,
              e.a || { k: 0 },
              0,
              degToRads,
              this
            )),
            (this.g = new GradientProperty(t, e.g, this)),
            (this.style = r),
            (this.stops = []),
            this.setGradientData(r.pElem, e),
            this.setGradientOpacity(e, r),
            (this._isAnimated = !!this._isAnimated);
        }),
        (SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
          var r = createElementID(),
            o = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
          o.setAttribute("id", r),
            o.setAttribute("spreadMethod", "pad"),
            o.setAttribute("gradientUnits", "userSpaceOnUse");
          var h,
            l,
            y,
            D = [];
          for (y = 4 * e.g.p, l = 0; l < y; l += 4)
            (h = createNS("stop")), o.appendChild(h), D.push(h);
          t.setAttribute(
            e.ty === "gf" ? "fill" : "stroke",
            "url(" + getLocationHref() + "#" + r + ")"
          ),
            (this.gf = o),
            (this.cst = D);
        }),
        (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
          t,
          e
        ) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r,
              o,
              h,
              l = createNS("mask"),
              y = createNS("path");
            l.appendChild(y);
            var D = createElementID(),
              j = createElementID();
            l.setAttribute("id", j);
            var Y = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
            Y.setAttribute("id", D),
              Y.setAttribute("spreadMethod", "pad"),
              Y.setAttribute("gradientUnits", "userSpaceOnUse"),
              (h = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
            var B = this.stops;
            for (o = 4 * t.g.p; o < h; o += 2)
              (r = createNS("stop")).setAttribute(
                "stop-color",
                "rgb(255,255,255)"
              ),
                Y.appendChild(r),
                B.push(r);
            y.setAttribute(
              t.ty === "gf" ? "fill" : "stroke",
              "url(" + getLocationHref() + "#" + D + ")"
            ),
              t.ty === "gs" &&
                (y.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                y.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                t.lj === 1 && y.setAttribute("stroke-miterlimit", t.ml)),
              (this.of = Y),
              (this.ms = l),
              (this.ost = B),
              (this.maskId = j),
              (e.msElem = y);
          }
        }),
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
        extendPrototype(
          [SVGGradientFillStyleData, DynamicPropertyContainer],
          SVGGradientStrokeStyleData
        );
      var buildShapeString = function (t, e, r, o) {
          if (e === 0) return "";
          var h,
            l = t.o,
            y = t.i,
            D = t.v,
            j = " M" + o.applyToPointStringified(D[0][0], D[0][1]);
          for (h = 1; h < e; h += 1)
            j +=
              " C" +
              o.applyToPointStringified(l[h - 1][0], l[h - 1][1]) +
              " " +
              o.applyToPointStringified(y[h][0], y[h][1]) +
              " " +
              o.applyToPointStringified(D[h][0], D[h][1]);
          return (
            r &&
              e &&
              ((j +=
                " C" +
                o.applyToPointStringified(l[h - 1][0], l[h - 1][1]) +
                " " +
                o.applyToPointStringified(y[0][0], y[0][1]) +
                " " +
                o.applyToPointStringified(D[0][0], D[0][1])),
              (j += "z")),
            j
          );
        },
        SVGElementsRenderer = (function () {
          var t = new Matrix(),
            e = new Matrix();
          function r(Y, B, q) {
            (q || B.transform.op._mdf) &&
              B.transform.container.setAttribute("opacity", B.transform.op.v),
              (q || B.transform.mProps._mdf) &&
                B.transform.container.setAttribute(
                  "transform",
                  B.transform.mProps.v.to2dCSS()
                );
          }
          function o() {}
          function h(Y, B, q) {
            var O,
              W,
              G,
              F,
              R,
              U,
              X,
              Z,
              J,
              Q,
              st = B.styles.length,
              it = B.lvl;
            for (U = 0; U < st; U += 1) {
              if (((F = B.sh._mdf || q), B.styles[U].lvl < it)) {
                for (
                  Z = e.reset(),
                    J = it - B.styles[U].lvl,
                    Q = B.transformers.length - 1;
                  !F && J > 0;

                )
                  (F = B.transformers[Q].mProps._mdf || F), (J -= 1), (Q -= 1);
                if (F)
                  for (
                    J = it - B.styles[U].lvl, Q = B.transformers.length - 1;
                    J > 0;

                  )
                    Z.multiply(B.transformers[Q].mProps.v), (J -= 1), (Q -= 1);
              } else Z = t;
              if (((W = (X = B.sh.paths)._length), F)) {
                for (G = "", O = 0; O < W; O += 1)
                  (R = X.shapes[O]) &&
                    R._length &&
                    (G += buildShapeString(R, R._length, R.c, Z));
                B.caches[U] = G;
              } else G = B.caches[U];
              (B.styles[U].d += Y.hd === !0 ? "" : G),
                (B.styles[U]._mdf = F || B.styles[U]._mdf);
            }
          }
          function l(Y, B, q) {
            var O = B.style;
            (B.c._mdf || q) &&
              O.pElem.setAttribute(
                "fill",
                "rgb(" +
                  bmFloor(B.c.v[0]) +
                  "," +
                  bmFloor(B.c.v[1]) +
                  "," +
                  bmFloor(B.c.v[2]) +
                  ")"
              ),
              (B.o._mdf || q) && O.pElem.setAttribute("fill-opacity", B.o.v);
          }
          function y(Y, B, q) {
            D(Y, B, q), j(0, B, q);
          }
          function D(Y, B, q) {
            var O,
              W,
              G,
              F,
              R,
              U = B.gf,
              X = B.g._hasOpacity,
              Z = B.s.v,
              J = B.e.v;
            if (B.o._mdf || q) {
              var Q = Y.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              B.style.pElem.setAttribute(Q, B.o.v);
            }
            if (B.s._mdf || q) {
              var st = Y.t === 1 ? "x1" : "cx",
                it = st === "x1" ? "y1" : "cy";
              U.setAttribute(st, Z[0]),
                U.setAttribute(it, Z[1]),
                X &&
                  !B.g._collapsable &&
                  (B.of.setAttribute(st, Z[0]), B.of.setAttribute(it, Z[1]));
            }
            if (B.g._cmdf || q) {
              O = B.cst;
              var et = B.g.c;
              for (G = O.length, W = 0; W < G; W += 1)
                (F = O[W]).setAttribute("offset", et[4 * W] + "%"),
                  F.setAttribute(
                    "stop-color",
                    "rgb(" +
                      et[4 * W + 1] +
                      "," +
                      et[4 * W + 2] +
                      "," +
                      et[4 * W + 3] +
                      ")"
                  );
            }
            if (X && (B.g._omdf || q)) {
              var at = B.g.o;
              for (
                G = (O = B.g._collapsable ? B.cst : B.ost).length, W = 0;
                W < G;
                W += 1
              )
                (F = O[W]),
                  B.g._collapsable || F.setAttribute("offset", at[2 * W] + "%"),
                  F.setAttribute("stop-opacity", at[2 * W + 1]);
            }
            if (Y.t === 1)
              (B.e._mdf || q) &&
                (U.setAttribute("x2", J[0]),
                U.setAttribute("y2", J[1]),
                X &&
                  !B.g._collapsable &&
                  (B.of.setAttribute("x2", J[0]),
                  B.of.setAttribute("y2", J[1])));
            else if (
              ((B.s._mdf || B.e._mdf || q) &&
                ((R = Math.sqrt(
                  Math.pow(Z[0] - J[0], 2) + Math.pow(Z[1] - J[1], 2)
                )),
                U.setAttribute("r", R),
                X && !B.g._collapsable && B.of.setAttribute("r", R)),
              B.e._mdf || B.h._mdf || B.a._mdf || q)
            ) {
              R ||
                (R = Math.sqrt(
                  Math.pow(Z[0] - J[0], 2) + Math.pow(Z[1] - J[1], 2)
                ));
              var rt = Math.atan2(J[1] - Z[1], J[0] - Z[0]),
                tt = B.h.v;
              tt >= 1 ? (tt = 0.99) : tt <= -1 && (tt = -0.99);
              var lt = R * tt,
                ht = Math.cos(rt + B.a.v) * lt + Z[0],
                ot = Math.sin(rt + B.a.v) * lt + Z[1];
              U.setAttribute("fx", ht),
                U.setAttribute("fy", ot),
                X &&
                  !B.g._collapsable &&
                  (B.of.setAttribute("fx", ht), B.of.setAttribute("fy", ot));
            }
          }
          function j(Y, B, q) {
            var O = B.style,
              W = B.d;
            W &&
              (W._mdf || q) &&
              W.dashStr &&
              (O.pElem.setAttribute("stroke-dasharray", W.dashStr),
              O.pElem.setAttribute("stroke-dashoffset", W.dashoffset[0])),
              B.c &&
                (B.c._mdf || q) &&
                O.pElem.setAttribute(
                  "stroke",
                  "rgb(" +
                    bmFloor(B.c.v[0]) +
                    "," +
                    bmFloor(B.c.v[1]) +
                    "," +
                    bmFloor(B.c.v[2]) +
                    ")"
                ),
              (B.o._mdf || q) && O.pElem.setAttribute("stroke-opacity", B.o.v),
              (B.w._mdf || q) &&
                (O.pElem.setAttribute("stroke-width", B.w.v),
                O.msElem && O.msElem.setAttribute("stroke-width", B.w.v));
          }
          return {
            createRenderFunction: function (Y) {
              switch (Y.ty) {
                case "fl":
                  return l;
                case "gf":
                  return D;
                case "gs":
                  return y;
                case "st":
                  return j;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                  return h;
                case "tr":
                  return r;
                case "no":
                  return o;
                default:
                  return null;
              }
            },
          };
        })();
      function SVGShapeElement(t, e, r) {
        (this.shapes = []),
          (this.shapesData = t.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          this.initElement(t, e, r),
          (this.prevViewData = []);
      }
      function LetterProps(t, e, r, o, h, l) {
        (this.o = t),
          (this.sw = e),
          (this.sc = r),
          (this.fc = o),
          (this.m = h),
          (this.p = l),
          (this._mdf = { o: !0, sw: !!e, sc: !!r, fc: !!o, m: !0, p: !0 });
      }
      function TextProperty(t, e) {
        (this._frameId = initialDefaultFrame),
          (this.pv = ""),
          (this.v = ""),
          (this.kf = !1),
          (this._isFirstFrame = !0),
          (this._mdf = !1),
          e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)),
          (this.data = e),
          (this.elem = t),
          (this.comp = this.elem.comp),
          (this.keysIndex = 0),
          (this.canResize = !1),
          (this.minimumFontSize = 1),
          (this.effectsSequence = []),
          (this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1,
          }),
          this.copyData(this.currentData, this.data.d.k[0].s),
          this.searchProperty() || this.completeTextData(this.currentData);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          SVGBaseElement,
          IShapeElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
        ],
        SVGShapeElement
      ),
        (SVGShapeElement.prototype.initSecondaryElement = function () {}),
        (SVGShapeElement.prototype.identityMatrix = new Matrix()),
        (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
        (SVGShapeElement.prototype.createContent = function () {
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            this.layerElement,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes();
        }),
        (SVGShapeElement.prototype.filterUniqueShapes = function () {
          var t,
            e,
            r,
            o,
            h = this.shapes.length,
            l = this.stylesList.length,
            y = [],
            D = !1;
          for (r = 0; r < l; r += 1) {
            for (
              o = this.stylesList[r], D = !1, y.length = 0, t = 0;
              t < h;
              t += 1
            )
              (e = this.shapes[t]).styles.indexOf(o) !== -1 &&
                (y.push(e), (D = e._isAnimated || D));
            y.length > 1 && D && this.setShapesAsAnimated(y);
          }
        }),
        (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
          var e,
            r = t.length;
          for (e = 0; e < r; e += 1) t[e].setAsAnimated();
        }),
        (SVGShapeElement.prototype.createStyleElement = function (t, e) {
          var r,
            o = new SVGStyleData(t, e),
            h = o.pElem;
          return (
            t.ty === "st"
              ? (r = new SVGStrokeStyleData(this, t, o))
              : t.ty === "fl"
              ? (r = new SVGFillStyleData(this, t, o))
              : t.ty === "gf" || t.ty === "gs"
              ? ((r = new (
                  t.ty === "gf"
                    ? SVGGradientFillStyleData
                    : SVGGradientStrokeStyleData
                )(this, t, o)),
                this.globalData.defs.appendChild(r.gf),
                r.maskId &&
                  (this.globalData.defs.appendChild(r.ms),
                  this.globalData.defs.appendChild(r.of),
                  h.setAttribute(
                    "mask",
                    "url(" + getLocationHref() + "#" + r.maskId + ")"
                  )))
              : t.ty === "no" && (r = new SVGNoStyleData(this, t, o)),
            (t.ty !== "st" && t.ty !== "gs") ||
              (h.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
              h.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
              h.setAttribute("fill-opacity", "0"),
              t.lj === 1 && h.setAttribute("stroke-miterlimit", t.ml)),
            t.r === 2 && h.setAttribute("fill-rule", "evenodd"),
            t.ln && h.setAttribute("id", t.ln),
            t.cl && h.setAttribute("class", t.cl),
            t.bm && (h.style["mix-blend-mode"] = getBlendMode(t.bm)),
            this.stylesList.push(o),
            this.addToAnimatedContents(t, r),
            r
          );
        }),
        (SVGShapeElement.prototype.createGroupElement = function (t) {
          var e = new ShapeGroupData();
          return (
            t.ln && e.gr.setAttribute("id", t.ln),
            t.cl && e.gr.setAttribute("class", t.cl),
            t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
            e
          );
        }),
        (SVGShapeElement.prototype.createTransformElement = function (t, e) {
          var r = TransformPropertyFactory.getTransformProperty(this, t, this),
            o = new SVGTransformData(r, r.o, e);
          return this.addToAnimatedContents(t, o), o;
        }),
        (SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
          var o = 4;
          t.ty === "rc"
            ? (o = 5)
            : t.ty === "el"
            ? (o = 6)
            : t.ty === "sr" && (o = 7);
          var h = new SVGShapeData(
            e,
            r,
            ShapePropertyFactory.getShapeProp(this, t, o, this)
          );
          return (
            this.shapes.push(h),
            this.addShapeToModifiers(h),
            this.addToAnimatedContents(t, h),
            h
          );
        }),
        (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
          for (var r = 0, o = this.animatedContents.length; r < o; ) {
            if (this.animatedContents[r].element === e) return;
            r += 1;
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t,
          });
        }),
        (SVGShapeElement.prototype.setElementStyles = function (t) {
          var e,
            r = t.styles,
            o = this.stylesList.length;
          for (e = 0; e < o; e += 1)
            this.stylesList[e].closed || r.push(this.stylesList[e]);
        }),
        (SVGShapeElement.prototype.reloadShapes = function () {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0
            ),
              this.filterUniqueShapes(),
              e = this.dynamicProperties.length,
              t = 0;
            t < e;
            t += 1
          )
            this.dynamicProperties[t].getValue();
          this.renderModifiers();
        }),
        (SVGShapeElement.prototype.searchShapes = function (
          t,
          e,
          r,
          o,
          h,
          l,
          y
        ) {
          var D,
            j,
            Y,
            B,
            q,
            O,
            W = [].concat(l),
            G = t.length - 1,
            F = [],
            R = [];
          for (D = G; D >= 0; D -= 1) {
            if (
              ((O = this.searchProcessedElement(t[D]))
                ? (e[D] = r[O - 1])
                : (t[D]._render = y),
              t[D].ty === "fl" ||
                t[D].ty === "st" ||
                t[D].ty === "gf" ||
                t[D].ty === "gs" ||
                t[D].ty === "no")
            )
              O
                ? (e[D].style.closed = !1)
                : (e[D] = this.createStyleElement(t[D], h)),
                t[D]._render &&
                  e[D].style.pElem.parentNode !== o &&
                  o.appendChild(e[D].style.pElem),
                F.push(e[D].style);
            else if (t[D].ty === "gr") {
              if (O)
                for (Y = e[D].it.length, j = 0; j < Y; j += 1)
                  e[D].prevViewData[j] = e[D].it[j];
              else e[D] = this.createGroupElement(t[D]);
              this.searchShapes(
                t[D].it,
                e[D].it,
                e[D].prevViewData,
                e[D].gr,
                h + 1,
                W,
                y
              ),
                t[D]._render &&
                  e[D].gr.parentNode !== o &&
                  o.appendChild(e[D].gr);
            } else
              t[D].ty === "tr"
                ? (O || (e[D] = this.createTransformElement(t[D], o)),
                  (B = e[D].transform),
                  W.push(B))
                : t[D].ty === "sh" ||
                  t[D].ty === "rc" ||
                  t[D].ty === "el" ||
                  t[D].ty === "sr"
                ? (O || (e[D] = this.createShapeElement(t[D], W, h)),
                  this.setElementStyles(e[D]))
                : t[D].ty === "tm" ||
                  t[D].ty === "rd" ||
                  t[D].ty === "ms" ||
                  t[D].ty === "pb" ||
                  t[D].ty === "zz" ||
                  t[D].ty === "op"
                ? (O
                    ? ((q = e[D]).closed = !1)
                    : ((q = ShapeModifiers.getModifier(t[D].ty)).init(
                        this,
                        t[D]
                      ),
                      (e[D] = q),
                      this.shapeModifiers.push(q)),
                  R.push(q))
                : t[D].ty === "rp" &&
                  (O
                    ? ((q = e[D]).closed = !0)
                    : ((q = ShapeModifiers.getModifier(t[D].ty)),
                      (e[D] = q),
                      q.init(this, t, D, e),
                      this.shapeModifiers.push(q),
                      (y = !1)),
                  R.push(q));
            this.addProcessedElement(t[D], D + 1);
          }
          for (G = F.length, D = 0; D < G; D += 1) F[D].closed = !0;
          for (G = R.length, D = 0; D < G; D += 1) R[D].closed = !0;
        }),
        (SVGShapeElement.prototype.renderInnerContent = function () {
          var t;
          this.renderModifiers();
          var e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)
            (this.stylesList[t]._mdf || this._isFirstFrame) &&
              (this.stylesList[t].msElem &&
                (this.stylesList[t].msElem.setAttribute(
                  "d",
                  this.stylesList[t].d
                ),
                (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)),
              this.stylesList[t].pElem.setAttribute(
                "d",
                this.stylesList[t].d || "M0 0"
              ));
        }),
        (SVGShapeElement.prototype.renderShape = function () {
          var t,
            e,
            r = this.animatedContents.length;
          for (t = 0; t < r; t += 1)
            (e = this.animatedContents[t]),
              (this._isFirstFrame || e.element._isAnimated) &&
                e.data !== !0 &&
                e.fn(e.data, e.element, this._isFirstFrame);
        }),
        (SVGShapeElement.prototype.destroy = function () {
          this.destroyBaseElement(),
            (this.shapesData = null),
            (this.itemsData = null);
        }),
        (LetterProps.prototype.update = function (t, e, r, o, h, l) {
          (this._mdf.o = !1),
            (this._mdf.sw = !1),
            (this._mdf.sc = !1),
            (this._mdf.fc = !1),
            (this._mdf.m = !1),
            (this._mdf.p = !1);
          var y = !1;
          return (
            this.o !== t && ((this.o = t), (this._mdf.o = !0), (y = !0)),
            this.sw !== e && ((this.sw = e), (this._mdf.sw = !0), (y = !0)),
            this.sc !== r && ((this.sc = r), (this._mdf.sc = !0), (y = !0)),
            this.fc !== o && ((this.fc = o), (this._mdf.fc = !0), (y = !0)),
            this.m !== h && ((this.m = h), (this._mdf.m = !0), (y = !0)),
            !l.length ||
              (this.p[0] === l[0] &&
                this.p[1] === l[1] &&
                this.p[4] === l[4] &&
                this.p[5] === l[5] &&
                this.p[12] === l[12] &&
                this.p[13] === l[13]) ||
              ((this.p = l), (this._mdf.p = !0), (y = !0)),
            y
          );
        }),
        (TextProperty.prototype.defaultBoxWidth = [0, 0]),
        (TextProperty.prototype.copyData = function (t, e) {
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t;
        }),
        (TextProperty.prototype.setCurrentData = function (t) {
          t.__complete || this.completeTextData(t),
            (this.currentData = t),
            (this.currentData.boxWidth =
              this.currentData.boxWidth || this.defaultBoxWidth),
            (this._mdf = !0);
        }),
        (TextProperty.prototype.searchProperty = function () {
          return this.searchKeyframes();
        }),
        (TextProperty.prototype.searchKeyframes = function () {
          return (
            (this.kf = this.data.d.k.length > 1),
            this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
            this.kf
          );
        }),
        (TextProperty.prototype.addEffect = function (t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.getValue = function (t) {
          if (
            (this.elem.globalData.frameId !== this.frameId &&
              this.effectsSequence.length) ||
            t
          ) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
              r = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var o;
              (this.lock = !0), (this._mdf = !1);
              var h = this.effectsSequence.length,
                l = t || this.data.d.k[this.keysIndex].s;
              for (o = 0; o < h; o += 1)
                l =
                  r !== this.keysIndex
                    ? this.effectsSequence[o](l, l.t)
                    : this.effectsSequence[o](this.currentData, l.t);
              e !== l && this.setCurrentData(l),
                (this.v = this.currentData),
                (this.pv = this.v),
                (this.lock = !1),
                (this.frameId = this.elem.globalData.frameId);
            }
          }
        }),
        (TextProperty.prototype.getKeyframeValue = function () {
          for (
            var t = this.data.d.k,
              e = this.elem.comp.renderedFrame,
              r = 0,
              o = t.length;
            r <= o - 1 && !(r === o - 1 || t[r + 1].t > e);

          )
            r += 1;
          return (
            this.keysIndex !== r && (this.keysIndex = r),
            this.data.d.k[this.keysIndex].s
          );
        }),
        (TextProperty.prototype.buildFinalText = function (t) {
          for (
            var e, r, o = [], h = 0, l = t.length, y = !1, D = !1, j = "";
            h < l;

          )
            (y = D),
              (D = !1),
              (e = t.charCodeAt(h)),
              (j = t.charAt(h)),
              FontManager.isCombinedCharacter(e)
                ? (y = !0)
                : e >= 55296 && e <= 56319
                ? FontManager.isRegionalFlag(t, h)
                  ? (j = t.substr(h, 14))
                  : (r = t.charCodeAt(h + 1)) >= 56320 &&
                    r <= 57343 &&
                    (FontManager.isModifier(e, r)
                      ? ((j = t.substr(h, 2)), (y = !0))
                      : (j = FontManager.isFlagEmoji(t.substr(h, 4))
                          ? t.substr(h, 4)
                          : t.substr(h, 2)))
                : e > 56319
                ? ((r = t.charCodeAt(h + 1)),
                  FontManager.isVariationSelector(e) && (y = !0))
                : FontManager.isZeroWidthJoiner(e) && ((y = !0), (D = !0)),
              y ? ((o[o.length - 1] += j), (y = !1)) : o.push(j),
              (h += j.length);
          return o;
        }),
        (TextProperty.prototype.completeTextData = function (t) {
          t.__complete = !0;
          var e,
            r,
            o,
            h,
            l,
            y,
            D,
            j = this.elem.globalData.fontManager,
            Y = this.data,
            B = [],
            q = 0,
            O = Y.m.g,
            W = 0,
            G = 0,
            F = 0,
            R = [],
            U = 0,
            X = 0,
            Z = j.getFontByName(t.f),
            J = 0,
            Q = getFontProperties(Z);
          (t.fWeight = Q.weight),
            (t.fStyle = Q.style),
            (t.finalSize = t.s),
            (t.finalText = this.buildFinalText(t.t)),
            (r = t.finalText.length),
            (t.finalLineHeight = t.lh);
          var st,
            it = (t.tr / 1e3) * t.finalSize;
          if (t.sz)
            for (var et, at, rt = !0, tt = t.sz[0], lt = t.sz[1]; rt; ) {
              (et = 0),
                (U = 0),
                (r = (at = this.buildFinalText(t.t)).length),
                (it = (t.tr / 1e3) * t.finalSize);
              var ht = -1;
              for (e = 0; e < r; e += 1)
                (st = at[e].charCodeAt(0)),
                  (o = !1),
                  at[e] === " "
                    ? (ht = e)
                    : (st !== 13 && st !== 3) ||
                      ((U = 0),
                      (o = !0),
                      (et += t.finalLineHeight || 1.2 * t.finalSize)),
                  j.chars
                    ? ((D = j.getCharData(at[e], Z.fStyle, Z.fFamily)),
                      (J = o ? 0 : (D.w * t.finalSize) / 100))
                    : (J = j.measureText(at[e], t.f, t.finalSize)),
                  U + J > tt && at[e] !== " "
                    ? (ht === -1 ? (r += 1) : (e = ht),
                      (et += t.finalLineHeight || 1.2 * t.finalSize),
                      at.splice(e, ht === e ? 1 : 0, "\r"),
                      (ht = -1),
                      (U = 0))
                    : ((U += J), (U += it));
              (et += (Z.ascent * t.finalSize) / 100),
                this.canResize && t.finalSize > this.minimumFontSize && lt < et
                  ? ((t.finalSize -= 1),
                    (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                  : ((t.finalText = at), (r = t.finalText.length), (rt = !1));
            }
          (U = -it), (J = 0);
          var ot,
            ft = 0;
          for (e = 0; e < r; e += 1)
            if (
              ((o = !1),
              (st = (ot = t.finalText[e]).charCodeAt(0)) === 13 || st === 3
                ? ((ft = 0),
                  R.push(U),
                  (X = U > X ? U : X),
                  (U = -2 * it),
                  (h = ""),
                  (o = !0),
                  (F += 1))
                : (h = ot),
              j.chars
                ? ((D = j.getCharData(
                    ot,
                    Z.fStyle,
                    j.getFontByName(t.f).fFamily
                  )),
                  (J = o ? 0 : (D.w * t.finalSize) / 100))
                : (J = j.measureText(h, t.f, t.finalSize)),
              ot === " " ? (ft += J + it) : ((U += J + it + ft), (ft = 0)),
              B.push({
                l: J,
                an: J,
                add: W,
                n: o,
                anIndexes: [],
                val: h,
                line: F,
                animatorJustifyOffset: 0,
              }),
              O == 2)
            ) {
              if (((W += J), h === "" || h === " " || e === r - 1)) {
                for ((h !== "" && h !== " ") || (W -= J); G <= e; )
                  (B[G].an = W), (B[G].ind = q), (B[G].extra = J), (G += 1);
                (q += 1), (W = 0);
              }
            } else if (O == 3) {
              if (((W += J), h === "" || e === r - 1)) {
                for (h === "" && (W -= J); G <= e; )
                  (B[G].an = W), (B[G].ind = q), (B[G].extra = J), (G += 1);
                (W = 0), (q += 1);
              }
            } else (B[q].ind = q), (B[q].extra = 0), (q += 1);
          if (((t.l = B), (X = U > X ? U : X), R.push(U), t.sz))
            (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
          else
            switch (((t.boxWidth = X), t.j)) {
              case 1:
                t.justifyOffset = -t.boxWidth;
                break;
              case 2:
                t.justifyOffset = -t.boxWidth / 2;
                break;
              default:
                t.justifyOffset = 0;
            }
          t.lineWidths = R;
          var ct,
            vt,
            K,
            nt,
            pt = Y.a;
          y = pt.length;
          var dt = [];
          for (l = 0; l < y; l += 1) {
            for (
              (ct = pt[l]).a.sc && (t.strokeColorAnim = !0),
                ct.a.sw && (t.strokeWidthAnim = !0),
                (ct.a.fc || ct.a.fh || ct.a.fs || ct.a.fb) &&
                  (t.fillColorAnim = !0),
                nt = 0,
                K = ct.s.b,
                e = 0;
              e < r;
              e += 1
            )
              ((vt = B[e]).anIndexes[l] = nt),
                ((K == 1 && vt.val !== "") ||
                  (K == 2 && vt.val !== "" && vt.val !== " ") ||
                  (K == 3 && (vt.n || vt.val == " " || e == r - 1)) ||
                  (K == 4 && (vt.n || e == r - 1))) &&
                  (ct.s.rn === 1 && dt.push(nt), (nt += 1));
            Y.a[l].s.totalChars = nt;
            var Et,
              bt = -1;
            if (ct.s.rn === 1)
              for (e = 0; e < r; e += 1)
                bt != (vt = B[e]).anIndexes[l] &&
                  ((bt = vt.anIndexes[l]),
                  (Et = dt.splice(
                    Math.floor(Math.random() * dt.length),
                    1
                  )[0])),
                  (vt.anIndexes[l] = Et);
          }
          (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
            (t.ls = t.ls || 0),
            (t.ascent = (Z.ascent * t.finalSize) / 100);
        }),
        (TextProperty.prototype.updateDocumentData = function (t, e) {
          e = e === void 0 ? this.keysIndex : e;
          var r = this.copyData({}, this.data.d.k[e].s);
          (r = this.copyData(r, t)),
            (this.data.d.k[e].s = r),
            this.recalculate(e),
            this.setCurrentData(r),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.recalculate = function (t) {
          var e = this.data.d.k[t].s;
          (e.__complete = !1),
            (this.keysIndex = 0),
            (this._isFirstFrame = !0),
            this.getValue(e);
        }),
        (TextProperty.prototype.canResizeFont = function (t) {
          (this.canResize = t),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.setMinimumFontSize = function (t) {
          (this.minimumFontSize = Math.floor(t) || 1),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        });
      var TextSelectorProp = (function () {
        var t = Math.max,
          e = Math.min,
          r = Math.floor;
        function o(h, l) {
          (this._currentTextLength = -1),
            (this.k = !1),
            (this.data = l),
            (this.elem = h),
            (this.comp = h.comp),
            (this.finalS = 0),
            (this.finalE = 0),
            this.initDynamicPropertyContainer(h),
            (this.s = PropertyFactory.getProp(h, l.s || { k: 0 }, 0, 0, this)),
            (this.e =
              "e" in l
                ? PropertyFactory.getProp(h, l.e, 0, 0, this)
                : { v: 100 }),
            (this.o = PropertyFactory.getProp(h, l.o || { k: 0 }, 0, 0, this)),
            (this.xe = PropertyFactory.getProp(
              h,
              l.xe || { k: 0 },
              0,
              0,
              this
            )),
            (this.ne = PropertyFactory.getProp(
              h,
              l.ne || { k: 0 },
              0,
              0,
              this
            )),
            (this.sm = PropertyFactory.getProp(
              h,
              l.sm || { k: 100 },
              0,
              0,
              this
            )),
            (this.a = PropertyFactory.getProp(h, l.a, 0, 0.01, this)),
            this.dynamicProperties.length || this.getValue();
        }
        return (
          (o.prototype = {
            getMult: function (h) {
              this._currentTextLength !==
                this.elem.textProperty.currentData.l.length && this.getValue();
              var l = 0,
                y = 0,
                D = 1,
                j = 1;
              this.ne.v > 0 ? (l = this.ne.v / 100) : (y = -this.ne.v / 100),
                this.xe.v > 0
                  ? (D = 1 - this.xe.v / 100)
                  : (j = 1 + this.xe.v / 100);
              var Y = BezierFactory.getBezierEasing(l, y, D, j).get,
                B = 0,
                q = this.finalS,
                O = this.finalE,
                W = this.data.sh;
              if (W === 2)
                B = Y(
                  (B =
                    O === q
                      ? h >= O
                        ? 1
                        : 0
                      : t(0, e(0.5 / (O - q) + (h - q) / (O - q), 1)))
                );
              else if (W === 3)
                B = Y(
                  (B =
                    O === q
                      ? h >= O
                        ? 0
                        : 1
                      : 1 - t(0, e(0.5 / (O - q) + (h - q) / (O - q), 1)))
                );
              else if (W === 4)
                O === q
                  ? (B = 0)
                  : (B = t(0, e(0.5 / (O - q) + (h - q) / (O - q), 1))) < 0.5
                  ? (B *= 2)
                  : (B = 1 - 2 * (B - 0.5)),
                  (B = Y(B));
              else if (W === 5) {
                if (O === q) B = 0;
                else {
                  var G = O - q,
                    F = -G / 2 + (h = e(t(0, h + 0.5 - q), O - q)),
                    R = G / 2;
                  B = Math.sqrt(1 - (F * F) / (R * R));
                }
                B = Y(B);
              } else
                W === 6
                  ? (O === q
                      ? (B = 0)
                      : ((h = e(t(0, h + 0.5 - q), O - q)),
                        (B =
                          (1 +
                            Math.cos(Math.PI + (2 * Math.PI * h) / (O - q))) /
                          2)),
                    (B = Y(B)))
                  : (h >= r(q) &&
                      (B = t(0, e(h - q < 0 ? e(O, 1) - (q - h) : O - h, 1))),
                    (B = Y(B)));
              if (this.sm.v !== 100) {
                var U = 0.01 * this.sm.v;
                U === 0 && (U = 1e-8);
                var X = 0.5 - 0.5 * U;
                B < X ? (B = 0) : (B = (B - X) / U) > 1 && (B = 1);
              }
              return B * this.a.v;
            },
            getValue: function (h) {
              this.iterateDynamicProperties(),
                (this._mdf = h || this._mdf),
                (this._currentTextLength =
                  this.elem.textProperty.currentData.l.length || 0),
                h && this.data.r === 2 && (this.e.v = this._currentTextLength);
              var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
                y = this.o.v / l,
                D = this.s.v / l + y,
                j = this.e.v / l + y;
              if (D > j) {
                var Y = D;
                (D = j), (j = Y);
              }
              (this.finalS = D), (this.finalE = j);
            },
          }),
          extendPrototype([DynamicPropertyContainer], o),
          {
            getTextSelectorProp: function (h, l, y) {
              return new o(h, l);
            },
          }
        );
      })();
      function TextAnimatorDataProperty(t, e, r) {
        var o = { propType: !1 },
          h = PropertyFactory.getProp,
          l = e.a;
        (this.a = {
          r: l.r ? h(t, l.r, 0, degToRads, r) : o,
          rx: l.rx ? h(t, l.rx, 0, degToRads, r) : o,
          ry: l.ry ? h(t, l.ry, 0, degToRads, r) : o,
          sk: l.sk ? h(t, l.sk, 0, degToRads, r) : o,
          sa: l.sa ? h(t, l.sa, 0, degToRads, r) : o,
          s: l.s ? h(t, l.s, 1, 0.01, r) : o,
          a: l.a ? h(t, l.a, 1, 0, r) : o,
          o: l.o ? h(t, l.o, 0, 0.01, r) : o,
          p: l.p ? h(t, l.p, 1, 0, r) : o,
          sw: l.sw ? h(t, l.sw, 0, 0, r) : o,
          sc: l.sc ? h(t, l.sc, 1, 0, r) : o,
          fc: l.fc ? h(t, l.fc, 1, 0, r) : o,
          fh: l.fh ? h(t, l.fh, 0, 0, r) : o,
          fs: l.fs ? h(t, l.fs, 0, 0.01, r) : o,
          fb: l.fb ? h(t, l.fb, 0, 0.01, r) : o,
          t: l.t ? h(t, l.t, 0, 0, r) : o,
        }),
          (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r)),
          (this.s.t = e.s.t);
      }
      function TextAnimatorProperty(t, e, r) {
        (this._isFirstFrame = !0),
          (this._hasMaskedPath = !1),
          (this._frameId = -1),
          (this._textData = t),
          (this._renderType = e),
          (this._elem = r),
          (this._animatorsData = createSizedArray(this._textData.a.length)),
          (this._pathData = {}),
          (this._moreOptions = { alignment: {} }),
          (this.renderedLetters = []),
          (this.lettersChangedFlag = !1),
          this.initDynamicPropertyContainer(r);
      }
      function ITextElement() {}
      (TextAnimatorProperty.prototype.searchProperties = function () {
        var t,
          e,
          r = this._textData.a.length,
          o = PropertyFactory.getProp;
        for (t = 0; t < r; t += 1)
          (e = this._textData.a[t]),
            (this._animatorsData[t] = new TextAnimatorDataProperty(
              this._elem,
              e,
              this
            ));
        this._textData.p && "m" in this._textData.p
          ? ((this._pathData = {
              a: o(this._elem, this._textData.p.a, 0, 0, this),
              f: o(this._elem, this._textData.p.f, 0, 0, this),
              l: o(this._elem, this._textData.p.l, 0, 0, this),
              r: o(this._elem, this._textData.p.r, 0, 0, this),
              p: o(this._elem, this._textData.p.p, 0, 0, this),
              m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
            }),
            (this._hasMaskedPath = !0))
          : (this._hasMaskedPath = !1),
          (this._moreOptions.alignment = o(
            this._elem,
            this._textData.m.a,
            1,
            0,
            this
          ));
      }),
        (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
          if (
            ((this.lettersChangedFlag = e),
            this._mdf ||
              this._isFirstFrame ||
              e ||
              (this._hasMaskedPath && this._pathData.m._mdf))
          ) {
            this._isFirstFrame = !1;
            var r,
              o,
              h,
              l,
              y,
              D,
              j,
              Y,
              B,
              q,
              O,
              W,
              G,
              F,
              R,
              U,
              X,
              Z,
              J,
              Q = this._moreOptions.alignment.v,
              st = this._animatorsData,
              it = this._textData,
              et = this.mHelper,
              at = this._renderType,
              rt = this.renderedLetters.length,
              tt = t.l;
            if (this._hasMaskedPath) {
              if (
                ((J = this._pathData.m),
                !this._pathData.n || this._pathData._mdf)
              ) {
                var lt,
                  ht = J.v;
                for (
                  this._pathData.r.v && (ht = ht.reverse()),
                    y = { tLength: 0, segments: [] },
                    l = ht._length - 1,
                    U = 0,
                    h = 0;
                  h < l;
                  h += 1
                )
                  (lt = bez.buildBezierData(
                    ht.v[h],
                    ht.v[h + 1],
                    [ht.o[h][0] - ht.v[h][0], ht.o[h][1] - ht.v[h][1]],
                    [
                      ht.i[h + 1][0] - ht.v[h + 1][0],
                      ht.i[h + 1][1] - ht.v[h + 1][1],
                    ]
                  )),
                    (y.tLength += lt.segmentLength),
                    y.segments.push(lt),
                    (U += lt.segmentLength);
                (h = l),
                  J.v.c &&
                    ((lt = bez.buildBezierData(
                      ht.v[h],
                      ht.v[0],
                      [ht.o[h][0] - ht.v[h][0], ht.o[h][1] - ht.v[h][1]],
                      [ht.i[0][0] - ht.v[0][0], ht.i[0][1] - ht.v[0][1]]
                    )),
                    (y.tLength += lt.segmentLength),
                    y.segments.push(lt),
                    (U += lt.segmentLength)),
                  (this._pathData.pi = y);
              }
              if (
                ((y = this._pathData.pi),
                (D = this._pathData.f.v),
                (O = 0),
                (q = 1),
                (Y = 0),
                (B = !0),
                (F = y.segments),
                D < 0 && J.v.c)
              )
                for (
                  y.tLength < Math.abs(D) && (D = -Math.abs(D) % y.tLength),
                    q = (G = F[(O = F.length - 1)].points).length - 1;
                  D < 0;

                )
                  (D += G[q].partialLength),
                    (q -= 1) < 0 && (q = (G = F[(O -= 1)].points).length - 1);
              (W = (G = F[O].points)[q - 1]), (R = (j = G[q]).partialLength);
            }
            (l = tt.length), (r = 0), (o = 0);
            var ot,
              ft,
              ct,
              vt,
              K,
              nt = 1.2 * t.finalSize * 0.714,
              pt = !0;
            ct = st.length;
            var dt,
              Et,
              bt,
              Pt,
              yt,
              St,
              ut,
              gt,
              Ct,
              Tt,
              At,
              kt,
              xt = -1,
              mt = D,
              $t = O,
              zt = q,
              Lt = -1,
              Dt = "",
              Ft = this.defaultPropsArray;
            if (t.j === 2 || t.j === 1) {
              var _t = 0,
                It = 0,
                Vt = t.j === 2 ? -0.5 : -1,
                Mt = 0,
                Bt = !0;
              for (h = 0; h < l; h += 1)
                if (tt[h].n) {
                  for (_t && (_t += It); Mt < h; )
                    (tt[Mt].animatorJustifyOffset = _t), (Mt += 1);
                  (_t = 0), (Bt = !0);
                } else {
                  for (ft = 0; ft < ct; ft += 1)
                    (ot = st[ft].a).t.propType &&
                      (Bt && t.j === 2 && (It += ot.t.v * Vt),
                      (K = st[ft].s.getMult(
                        tt[h].anIndexes[ft],
                        it.a[ft].s.totalChars
                      )).length
                        ? (_t += ot.t.v * K[0] * Vt)
                        : (_t += ot.t.v * K * Vt));
                  Bt = !1;
                }
              for (_t && (_t += It); Mt < h; )
                (tt[Mt].animatorJustifyOffset = _t), (Mt += 1);
            }
            for (h = 0; h < l; h += 1) {
              if ((et.reset(), (Pt = 1), tt[h].n))
                (r = 0),
                  (o += t.yOffset),
                  (o += pt ? 1 : 0),
                  (D = mt),
                  (pt = !1),
                  this._hasMaskedPath &&
                    ((q = zt),
                    (W = (G = F[(O = $t)].points)[q - 1]),
                    (R = (j = G[q]).partialLength),
                    (Y = 0)),
                  (Dt = ""),
                  (At = ""),
                  (Ct = ""),
                  (kt = ""),
                  (Ft = this.defaultPropsArray);
              else {
                if (this._hasMaskedPath) {
                  if (Lt !== tt[h].line) {
                    switch (t.j) {
                      case 1:
                        D += U - t.lineWidths[tt[h].line];
                        break;
                      case 2:
                        D += (U - t.lineWidths[tt[h].line]) / 2;
                    }
                    Lt = tt[h].line;
                  }
                  xt !== tt[h].ind &&
                    (tt[xt] && (D += tt[xt].extra),
                    (D += tt[h].an / 2),
                    (xt = tt[h].ind)),
                    (D += Q[0] * tt[h].an * 0.005);
                  var wt = 0;
                  for (ft = 0; ft < ct; ft += 1)
                    (ot = st[ft].a).p.propType &&
                      ((K = st[ft].s.getMult(
                        tt[h].anIndexes[ft],
                        it.a[ft].s.totalChars
                      )).length
                        ? (wt += ot.p.v[0] * K[0])
                        : (wt += ot.p.v[0] * K)),
                      ot.a.propType &&
                        ((K = st[ft].s.getMult(
                          tt[h].anIndexes[ft],
                          it.a[ft].s.totalChars
                        )).length
                          ? (wt += ot.a.v[0] * K[0])
                          : (wt += ot.a.v[0] * K));
                  for (
                    B = !0,
                      this._pathData.a.v &&
                        ((D =
                          0.5 * tt[0].an +
                          ((U -
                            this._pathData.f.v -
                            0.5 * tt[0].an -
                            0.5 * tt[tt.length - 1].an) *
                            xt) /
                            (l - 1)),
                        (D += this._pathData.f.v));
                    B;

                  )
                    Y + R >= D + wt || !G
                      ? ((X = (D + wt - Y) / j.partialLength),
                        (Et = W.point[0] + (j.point[0] - W.point[0]) * X),
                        (bt = W.point[1] + (j.point[1] - W.point[1]) * X),
                        et.translate(
                          -Q[0] * tt[h].an * 0.005,
                          -Q[1] * nt * 0.01
                        ),
                        (B = !1))
                      : G &&
                        ((Y += j.partialLength),
                        (q += 1) >= G.length &&
                          ((q = 0),
                          F[(O += 1)]
                            ? (G = F[O].points)
                            : J.v.c
                            ? ((q = 0), (G = F[(O = 0)].points))
                            : ((Y -= j.partialLength), (G = null))),
                        G && ((W = j), (R = (j = G[q]).partialLength)));
                  (dt = tt[h].an / 2 - tt[h].add), et.translate(-dt, 0, 0);
                } else
                  (dt = tt[h].an / 2 - tt[h].add),
                    et.translate(-dt, 0, 0),
                    et.translate(
                      -Q[0] * tt[h].an * 0.005,
                      -Q[1] * nt * 0.01,
                      0
                    );
                for (ft = 0; ft < ct; ft += 1)
                  (ot = st[ft].a).t.propType &&
                    ((K = st[ft].s.getMult(
                      tt[h].anIndexes[ft],
                      it.a[ft].s.totalChars
                    )),
                    (r === 0 && t.j === 0) ||
                      (this._hasMaskedPath
                        ? K.length
                          ? (D += ot.t.v * K[0])
                          : (D += ot.t.v * K)
                        : K.length
                        ? (r += ot.t.v * K[0])
                        : (r += ot.t.v * K)));
                for (
                  t.strokeWidthAnim && (St = t.sw || 0),
                    t.strokeColorAnim &&
                      (yt = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                    t.fillColorAnim &&
                      t.fc &&
                      (ut = [t.fc[0], t.fc[1], t.fc[2]]),
                    ft = 0;
                  ft < ct;
                  ft += 1
                )
                  (ot = st[ft].a).a.propType &&
                    ((K = st[ft].s.getMult(
                      tt[h].anIndexes[ft],
                      it.a[ft].s.totalChars
                    )).length
                      ? et.translate(
                          -ot.a.v[0] * K[0],
                          -ot.a.v[1] * K[1],
                          ot.a.v[2] * K[2]
                        )
                      : et.translate(
                          -ot.a.v[0] * K,
                          -ot.a.v[1] * K,
                          ot.a.v[2] * K
                        ));
                for (ft = 0; ft < ct; ft += 1)
                  (ot = st[ft].a).s.propType &&
                    ((K = st[ft].s.getMult(
                      tt[h].anIndexes[ft],
                      it.a[ft].s.totalChars
                    )).length
                      ? et.scale(
                          1 + (ot.s.v[0] - 1) * K[0],
                          1 + (ot.s.v[1] - 1) * K[1],
                          1
                        )
                      : et.scale(
                          1 + (ot.s.v[0] - 1) * K,
                          1 + (ot.s.v[1] - 1) * K,
                          1
                        ));
                for (ft = 0; ft < ct; ft += 1) {
                  if (
                    ((ot = st[ft].a),
                    (K = st[ft].s.getMult(
                      tt[h].anIndexes[ft],
                      it.a[ft].s.totalChars
                    )),
                    ot.sk.propType &&
                      (K.length
                        ? et.skewFromAxis(-ot.sk.v * K[0], ot.sa.v * K[1])
                        : et.skewFromAxis(-ot.sk.v * K, ot.sa.v * K)),
                    ot.r.propType &&
                      (K.length
                        ? et.rotateZ(-ot.r.v * K[2])
                        : et.rotateZ(-ot.r.v * K)),
                    ot.ry.propType &&
                      (K.length
                        ? et.rotateY(ot.ry.v * K[1])
                        : et.rotateY(ot.ry.v * K)),
                    ot.rx.propType &&
                      (K.length
                        ? et.rotateX(ot.rx.v * K[0])
                        : et.rotateX(ot.rx.v * K)),
                    ot.o.propType &&
                      (K.length
                        ? (Pt += (ot.o.v * K[0] - Pt) * K[0])
                        : (Pt += (ot.o.v * K - Pt) * K)),
                    t.strokeWidthAnim &&
                      ot.sw.propType &&
                      (K.length ? (St += ot.sw.v * K[0]) : (St += ot.sw.v * K)),
                    t.strokeColorAnim && ot.sc.propType)
                  )
                    for (gt = 0; gt < 3; gt += 1)
                      K.length
                        ? (yt[gt] += (ot.sc.v[gt] - yt[gt]) * K[0])
                        : (yt[gt] += (ot.sc.v[gt] - yt[gt]) * K);
                  if (t.fillColorAnim && t.fc) {
                    if (ot.fc.propType)
                      for (gt = 0; gt < 3; gt += 1)
                        K.length
                          ? (ut[gt] += (ot.fc.v[gt] - ut[gt]) * K[0])
                          : (ut[gt] += (ot.fc.v[gt] - ut[gt]) * K);
                    ot.fh.propType &&
                      (ut = K.length
                        ? addHueToRGB(ut, ot.fh.v * K[0])
                        : addHueToRGB(ut, ot.fh.v * K)),
                      ot.fs.propType &&
                        (ut = K.length
                          ? addSaturationToRGB(ut, ot.fs.v * K[0])
                          : addSaturationToRGB(ut, ot.fs.v * K)),
                      ot.fb.propType &&
                        (ut = K.length
                          ? addBrightnessToRGB(ut, ot.fb.v * K[0])
                          : addBrightnessToRGB(ut, ot.fb.v * K));
                  }
                }
                for (ft = 0; ft < ct; ft += 1)
                  (ot = st[ft].a).p.propType &&
                    ((K = st[ft].s.getMult(
                      tt[h].anIndexes[ft],
                      it.a[ft].s.totalChars
                    )),
                    this._hasMaskedPath
                      ? K.length
                        ? et.translate(0, ot.p.v[1] * K[0], -ot.p.v[2] * K[1])
                        : et.translate(0, ot.p.v[1] * K, -ot.p.v[2] * K)
                      : K.length
                      ? et.translate(
                          ot.p.v[0] * K[0],
                          ot.p.v[1] * K[1],
                          -ot.p.v[2] * K[2]
                        )
                      : et.translate(
                          ot.p.v[0] * K,
                          ot.p.v[1] * K,
                          -ot.p.v[2] * K
                        ));
                if (
                  (t.strokeWidthAnim && (Ct = St < 0 ? 0 : St),
                  t.strokeColorAnim &&
                    (Tt =
                      "rgb(" +
                      Math.round(255 * yt[0]) +
                      "," +
                      Math.round(255 * yt[1]) +
                      "," +
                      Math.round(255 * yt[2]) +
                      ")"),
                  t.fillColorAnim &&
                    t.fc &&
                    (At =
                      "rgb(" +
                      Math.round(255 * ut[0]) +
                      "," +
                      Math.round(255 * ut[1]) +
                      "," +
                      Math.round(255 * ut[2]) +
                      ")"),
                  this._hasMaskedPath)
                ) {
                  if (
                    (et.translate(0, -t.ls),
                    et.translate(0, Q[1] * nt * 0.01 + o, 0),
                    this._pathData.p.v)
                  ) {
                    Z = (j.point[1] - W.point[1]) / (j.point[0] - W.point[0]);
                    var Rt = (180 * Math.atan(Z)) / Math.PI;
                    j.point[0] < W.point[0] && (Rt += 180),
                      et.rotate((-Rt * Math.PI) / 180);
                  }
                  et.translate(Et, bt, 0),
                    (D -= Q[0] * tt[h].an * 0.005),
                    tt[h + 1] &&
                      xt !== tt[h + 1].ind &&
                      ((D += tt[h].an / 2), (D += 0.001 * t.tr * t.finalSize));
                } else {
                  switch (
                    (et.translate(r, o, 0),
                    t.ps && et.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                    t.j)
                  ) {
                    case 1:
                      et.translate(
                        tt[h].animatorJustifyOffset +
                          t.justifyOffset +
                          (t.boxWidth - t.lineWidths[tt[h].line]),
                        0,
                        0
                      );
                      break;
                    case 2:
                      et.translate(
                        tt[h].animatorJustifyOffset +
                          t.justifyOffset +
                          (t.boxWidth - t.lineWidths[tt[h].line]) / 2,
                        0,
                        0
                      );
                  }
                  et.translate(0, -t.ls),
                    et.translate(dt, 0, 0),
                    et.translate(Q[0] * tt[h].an * 0.005, Q[1] * nt * 0.01, 0),
                    (r += tt[h].l + 0.001 * t.tr * t.finalSize);
                }
                at === "html"
                  ? (Dt = et.toCSS())
                  : at === "svg"
                  ? (Dt = et.to2dCSS())
                  : (Ft = [
                      et.props[0],
                      et.props[1],
                      et.props[2],
                      et.props[3],
                      et.props[4],
                      et.props[5],
                      et.props[6],
                      et.props[7],
                      et.props[8],
                      et.props[9],
                      et.props[10],
                      et.props[11],
                      et.props[12],
                      et.props[13],
                      et.props[14],
                      et.props[15],
                    ]),
                  (kt = Pt);
              }
              rt <= h
                ? ((vt = new LetterProps(kt, Ct, Tt, At, Dt, Ft)),
                  this.renderedLetters.push(vt),
                  (rt += 1),
                  (this.lettersChangedFlag = !0))
                : ((vt = this.renderedLetters[h]),
                  (this.lettersChangedFlag =
                    vt.update(kt, Ct, Tt, At, Dt, Ft) ||
                    this.lettersChangedFlag));
            }
          }
        }),
        (TextAnimatorProperty.prototype.getValue = function () {
          this._elem.globalData.frameId !== this._frameId &&
            ((this._frameId = this._elem.globalData.frameId),
            this.iterateDynamicProperties());
        }),
        (TextAnimatorProperty.prototype.mHelper = new Matrix()),
        (TextAnimatorProperty.prototype.defaultPropsArray = []),
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
        (ITextElement.prototype.initElement = function (t, e, r) {
          (this.lettersChangedFlag = !0),
            this.initFrame(),
            this.initBaseData(t, e, r),
            (this.textProperty = new TextProperty(
              this,
              t.t,
              this.dynamicProperties
            )),
            (this.textAnimator = new TextAnimatorProperty(
              t.t,
              this.renderType,
              this
            )),
            this.initTransform(t, e, r),
            this.initHierarchy(),
            this.initRenderable(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            this.createContent(),
            this.hide(),
            this.textAnimator.searchProperties(this.dynamicProperties);
        }),
        (ITextElement.prototype.prepareFrame = function (t) {
          (this._mdf = !1),
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange);
        }),
        (ITextElement.prototype.createPathShape = function (t, e) {
          var r,
            o,
            h = e.length,
            l = "";
          for (r = 0; r < h; r += 1)
            e[r].ty === "sh" &&
              ((o = e[r].ks.k), (l += buildShapeString(o, o.i.length, !0, t)));
          return l;
        }),
        (ITextElement.prototype.updateDocumentData = function (t, e) {
          this.textProperty.updateDocumentData(t, e);
        }),
        (ITextElement.prototype.canResizeFont = function (t) {
          this.textProperty.canResizeFont(t);
        }),
        (ITextElement.prototype.setMinimumFontSize = function (t) {
          this.textProperty.setMinimumFontSize(t);
        }),
        (ITextElement.prototype.applyTextPropertiesToMatrix = function (
          t,
          e,
          r,
          o,
          h
        ) {
          switch (
            (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
            e.translate(0, -t.ls, 0),
            t.j)
          ) {
            case 1:
              e.translate(
                t.justifyOffset + (t.boxWidth - t.lineWidths[r]),
                0,
                0
              );
              break;
            case 2:
              e.translate(
                t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2,
                0,
                0
              );
          }
          e.translate(o, h, 0);
        }),
        (ITextElement.prototype.buildColor = function (t) {
          return (
            "rgb(" +
            Math.round(255 * t[0]) +
            "," +
            Math.round(255 * t[1]) +
            "," +
            Math.round(255 * t[2]) +
            ")"
          );
        }),
        (ITextElement.prototype.emptyProp = new LetterProps()),
        (ITextElement.prototype.destroy = function () {}),
        (ITextElement.prototype.validateText = function () {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
            (this.buildNewText(),
            (this.textProperty._isFirstFrame = !1),
            (this.textProperty._mdf = !1));
        });
      var emptyShapeData = { shapes: [] };
      function SVGTextLottieElement(t, e, r) {
        (this.textSpans = []),
          (this.renderType = "svg"),
          this.initElement(t, e, r);
      }
      function ISolidElement(t, e, r) {
        this.initElement(t, e, r);
      }
      function NullElement(t, e, r) {
        this.initFrame(),
          this.initBaseData(t, e, r),
          this.initFrame(),
          this.initTransform(t, e, r),
          this.initHierarchy();
      }
      function SVGRendererBase() {}
      function ICompElement() {}
      function SVGCompElement(t, e, r) {
        (this.layers = t.layers),
          (this.supports3d = !0),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(t, e, r),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      function SVGRenderer(t, e) {
        (this.animationItem = t),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.svgElement = createNS("svg"));
        var r = "";
        if (e && e.title) {
          var o = createNS("title"),
            h = createElementID();
          o.setAttribute("id", h),
            (o.textContent = e.title),
            this.svgElement.appendChild(o),
            (r += h);
        }
        if (e && e.description) {
          var l = createNS("desc"),
            y = createElementID();
          l.setAttribute("id", y),
            (l.textContent = e.description),
            this.svgElement.appendChild(l),
            (r += " " + y);
        }
        r && this.svgElement.setAttribute("aria-labelledby", r);
        var D = createNS("defs");
        this.svgElement.appendChild(D);
        var j = createNS("g");
        this.svgElement.appendChild(j),
          (this.layerElement = j),
          (this.renderConfig = {
            preserveAspectRatio:
              (e && e.preserveAspectRatio) || "xMidYMid meet",
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
            contentVisibility: (e && e.contentVisibility) || "visible",
            progressiveLoad: (e && e.progressiveLoad) || !1,
            hideOnTransparent: !(e && e.hideOnTransparent === !1),
            viewBoxOnly: (e && e.viewBoxOnly) || !1,
            viewBoxSize: (e && e.viewBoxSize) || !1,
            className: (e && e.className) || "",
            id: (e && e.id) || "",
            focusable: e && e.focusable,
            filterSize: {
              width: (e && e.filterSize && e.filterSize.width) || "100%",
              height: (e && e.filterSize && e.filterSize.height) || "100%",
              x: (e && e.filterSize && e.filterSize.x) || "0%",
              y: (e && e.filterSize && e.filterSize.y) || "0%",
            },
            width: e && e.width,
            height: e && e.height,
            runExpressions:
              !e || e.runExpressions === void 0 || e.runExpressions,
          }),
          (this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: D,
            renderConfig: this.renderConfig,
          }),
          (this.elements = []),
          (this.pendingElements = []),
          (this.destroyed = !1),
          (this.rendererType = "svg");
      }
      function ShapeTransformManager() {
        (this.sequences = {}),
          (this.sequenceList = []),
          (this.transform_key_count = 0);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          SVGBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
          ITextElement,
        ],
        SVGTextLottieElement
      ),
        (SVGTextLottieElement.prototype.createContent = function () {
          this.data.singleShape &&
            !this.globalData.fontManager.chars &&
            (this.textContainer = createNS("text"));
        }),
        (SVGTextLottieElement.prototype.buildTextContents = function (t) {
          for (var e = 0, r = t.length, o = [], h = ""; e < r; )
            t[e] === "\r" || t[e] === "" ? (o.push(h), (h = "")) : (h += t[e]),
              (e += 1);
          return o.push(h), o;
        }),
        (SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
          if (t.shapes && t.shapes.length) {
            var r = t.shapes[0];
            if (r.it) {
              var o = r.it[r.it.length - 1];
              o.s && ((o.s.k[0] = e), (o.s.k[1] = e));
            }
          }
          return t;
        }),
        (SVGTextLottieElement.prototype.buildNewText = function () {
          var t, e;
          this.addDynamicProperty(this);
          var r = this.textProperty.currentData;
          (this.renderedLetters = createSizedArray(r ? r.l.length : 0)),
            r.fc
              ? this.layerElement.setAttribute("fill", this.buildColor(r.fc))
              : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
            r.sc &&
              (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)),
              this.layerElement.setAttribute("stroke-width", r.sw)),
            this.layerElement.setAttribute("font-size", r.finalSize);
          var o = this.globalData.fontManager.getFontByName(r.f);
          if (o.fClass) this.layerElement.setAttribute("class", o.fClass);
          else {
            this.layerElement.setAttribute("font-family", o.fFamily);
            var h = r.fWeight,
              l = r.fStyle;
            this.layerElement.setAttribute("font-style", l),
              this.layerElement.setAttribute("font-weight", h);
          }
          this.layerElement.setAttribute("aria-label", r.t);
          var y,
            D = r.l || [],
            j = !!this.globalData.fontManager.chars;
          e = D.length;
          var Y = this.mHelper,
            B = this.data.singleShape,
            q = 0,
            O = 0,
            W = !0,
            G = 0.001 * r.tr * r.finalSize;
          if (!B || j || r.sz) {
            var F,
              R = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (
                (this.textSpans[t] ||
                  (this.textSpans[t] = {
                    span: null,
                    childSpan: null,
                    glyph: null,
                  }),
                !j || !B || t === 0)
              ) {
                if (
                  ((y =
                    R > t
                      ? this.textSpans[t].span
                      : createNS(j ? "g" : "text")),
                  R <= t)
                ) {
                  if (
                    (y.setAttribute("stroke-linecap", "butt"),
                    y.setAttribute("stroke-linejoin", "round"),
                    y.setAttribute("stroke-miterlimit", "4"),
                    (this.textSpans[t].span = y),
                    j)
                  ) {
                    var U = createNS("g");
                    y.appendChild(U), (this.textSpans[t].childSpan = U);
                  }
                  (this.textSpans[t].span = y),
                    this.layerElement.appendChild(y);
                }
                y.style.display = "inherit";
              }
              if (
                (Y.reset(),
                B &&
                  (D[t].n &&
                    ((q = -G), (O += r.yOffset), (O += W ? 1 : 0), (W = !1)),
                  this.applyTextPropertiesToMatrix(r, Y, D[t].line, q, O),
                  (q += D[t].l || 0),
                  (q += G)),
                j)
              ) {
                var X;
                if (
                  (F = this.globalData.fontManager.getCharData(
                    r.finalText[t],
                    o.fStyle,
                    this.globalData.fontManager.getFontByName(r.f).fFamily
                  )).t === 1
                )
                  X = new SVGCompElement(F.data, this.globalData, this);
                else {
                  var Z = emptyShapeData;
                  F.data &&
                    F.data.shapes &&
                    (Z = this.buildShapeData(F.data, r.finalSize)),
                    (X = new SVGShapeElement(Z, this.globalData, this));
                }
                if (this.textSpans[t].glyph) {
                  var J = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(J.layerElement),
                    J.destroy();
                }
                (this.textSpans[t].glyph = X),
                  (X._debug = !0),
                  X.prepareFrame(0),
                  X.renderFrame(),
                  this.textSpans[t].childSpan.appendChild(X.layerElement),
                  F.t === 1 &&
                    this.textSpans[t].childSpan.setAttribute(
                      "transform",
                      "scale(" +
                        r.finalSize / 100 +
                        "," +
                        r.finalSize / 100 +
                        ")"
                    );
              } else
                B &&
                  y.setAttribute(
                    "transform",
                    "translate(" + Y.props[12] + "," + Y.props[13] + ")"
                  ),
                  (y.textContent = D[t].val),
                  y.setAttributeNS(
                    "http://www.w3.org/XML/1998/namespace",
                    "xml:space",
                    "preserve"
                  );
            }
            B && y && y.setAttribute("d", "");
          } else {
            var Q = this.textContainer,
              st = "start";
            switch (r.j) {
              case 1:
                st = "end";
                break;
              case 2:
                st = "middle";
                break;
              default:
                st = "start";
            }
            Q.setAttribute("text-anchor", st),
              Q.setAttribute("letter-spacing", G);
            var it = this.buildTextContents(r.finalText);
            for (
              e = it.length, O = r.ps ? r.ps[1] + r.ascent : 0, t = 0;
              t < e;
              t += 1
            )
              ((y = this.textSpans[t].span || createNS("tspan")).textContent =
                it[t]),
                y.setAttribute("x", 0),
                y.setAttribute("y", O),
                (y.style.display = "inherit"),
                Q.appendChild(y),
                this.textSpans[t] ||
                  (this.textSpans[t] = { span: null, glyph: null }),
                (this.textSpans[t].span = y),
                (O += r.finalLineHeight);
            this.layerElement.appendChild(Q);
          }
          for (; t < this.textSpans.length; )
            (this.textSpans[t].span.style.display = "none"), (t += 1);
          this._sizeChanged = !0;
        }),
        (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
          if (
            (this.prepareFrame(this.comp.renderedFrame - this.data.st),
            this.renderInnerContent(),
            this._sizeChanged)
          ) {
            this._sizeChanged = !1;
            var t = this.layerElement.getBBox();
            this.bbox = {
              top: t.y,
              left: t.x,
              width: t.width,
              height: t.height,
            };
          }
          return this.bbox;
        }),
        (SVGTextLottieElement.prototype.getValue = function () {
          var t,
            e,
            r = this.textSpans.length;
          for (
            this.renderedFrame = this.comp.renderedFrame, t = 0;
            t < r;
            t += 1
          )
            (e = this.textSpans[t].glyph) &&
              (e.prepareFrame(this.comp.renderedFrame - this.data.st),
              e._mdf && (this._mdf = !0));
        }),
        (SVGTextLottieElement.prototype.renderInnerContent = function () {
          if (
            (this.validateText(),
            (!this.data.singleShape || this._mdf) &&
              (this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              ),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag))
          ) {
            var t, e;
            this._sizeChanged = !0;
            var r,
              o,
              h,
              l = this.textAnimator.renderedLetters,
              y = this.textProperty.currentData.l;
            for (e = y.length, t = 0; t < e; t += 1)
              y[t].n ||
                ((r = l[t]),
                (o = this.textSpans[t].span),
                (h = this.textSpans[t].glyph) && h.renderFrame(),
                r._mdf.m && o.setAttribute("transform", r.m),
                r._mdf.o && o.setAttribute("opacity", r.o),
                r._mdf.sw && o.setAttribute("stroke-width", r.sw),
                r._mdf.sc && o.setAttribute("stroke", r.sc),
                r._mdf.fc && o.setAttribute("fill", r.fc));
          }
        }),
        extendPrototype([IImageElement], ISolidElement),
        (ISolidElement.prototype.createContent = function () {
          var t = createNS("rect");
          t.setAttribute("width", this.data.sw),
            t.setAttribute("height", this.data.sh),
            t.setAttribute("fill", this.data.sc),
            this.layerElement.appendChild(t);
        }),
        (NullElement.prototype.prepareFrame = function (t) {
          this.prepareProperties(t, !0);
        }),
        (NullElement.prototype.renderFrame = function () {}),
        (NullElement.prototype.getBaseElement = function () {
          return null;
        }),
        (NullElement.prototype.destroy = function () {}),
        (NullElement.prototype.sourceRectAtTime = function () {}),
        (NullElement.prototype.hide = function () {}),
        extendPrototype(
          [BaseElement, TransformElement, HierarchyElement, FrameElement],
          NullElement
        ),
        extendPrototype([BaseRenderer], SVGRendererBase),
        (SVGRendererBase.prototype.createNull = function (t) {
          return new NullElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createShape = function (t) {
          return new SVGShapeElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createText = function (t) {
          return new SVGTextLottieElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createImage = function (t) {
          return new IImageElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createSolid = function (t) {
          return new ISolidElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.configAnimation = function (t) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
            this.svgElement.setAttribute(
              "xmlns:xlink",
              "http://www.w3.org/1999/xlink"
            ),
            this.renderConfig.viewBoxSize
              ? this.svgElement.setAttribute(
                  "viewBox",
                  this.renderConfig.viewBoxSize
                )
              : this.svgElement.setAttribute(
                  "viewBox",
                  "0 0 " + t.w + " " + t.h
                ),
            this.renderConfig.viewBoxOnly ||
              (this.svgElement.setAttribute("width", t.w),
              this.svgElement.setAttribute("height", t.h),
              (this.svgElement.style.width = "100%"),
              (this.svgElement.style.height = "100%"),
              (this.svgElement.style.transform = "translate3d(0,0,0)"),
              (this.svgElement.style.contentVisibility =
                this.renderConfig.contentVisibility)),
            this.renderConfig.width &&
              this.svgElement.setAttribute("width", this.renderConfig.width),
            this.renderConfig.height &&
              this.svgElement.setAttribute("height", this.renderConfig.height),
            this.renderConfig.className &&
              this.svgElement.setAttribute(
                "class",
                this.renderConfig.className
              ),
            this.renderConfig.id &&
              this.svgElement.setAttribute("id", this.renderConfig.id),
            this.renderConfig.focusable !== void 0 &&
              this.svgElement.setAttribute(
                "focusable",
                this.renderConfig.focusable
              ),
            this.svgElement.setAttribute(
              "preserveAspectRatio",
              this.renderConfig.preserveAspectRatio
            ),
            this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.data = t);
          var r = createNS("clipPath"),
            o = createNS("rect");
          o.setAttribute("width", t.w),
            o.setAttribute("height", t.h),
            o.setAttribute("x", 0),
            o.setAttribute("y", 0);
          var h = createElementID();
          r.setAttribute("id", h),
            r.appendChild(o),
            this.layerElement.setAttribute(
              "clip-path",
              "url(" + getLocationHref() + "#" + h + ")"
            ),
            e.appendChild(r),
            (this.layers = t.layers),
            (this.elements = createSizedArray(t.layers.length));
        }),
        (SVGRendererBase.prototype.destroy = function () {
          var t;
          this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = ""),
            (this.layerElement = null),
            (this.globalData.defs = null);
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1)
            this.elements[t] &&
              this.elements[t].destroy &&
              this.elements[t].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (SVGRendererBase.prototype.updateContainerSize = function () {}),
        (SVGRendererBase.prototype.findIndexByInd = function (t) {
          var e = 0,
            r = this.layers.length;
          for (e = 0; e < r; e += 1) if (this.layers[e].ind === t) return e;
          return -1;
        }),
        (SVGRendererBase.prototype.buildItem = function (t) {
          var e = this.elements;
          if (!e[t] && this.layers[t].ty !== 99) {
            e[t] = !0;
            var r = this.createItem(this.layers[t]);
            if (
              ((e[t] = r),
              getExpressionsPlugin() &&
                (this.layers[t].ty === 0 &&
                  this.globalData.projectInterface.registerComposition(r),
                r.initExpressions()),
              this.appendElementInPos(r, t),
              this.layers[t].tt)
            ) {
              var o =
                "tp" in this.layers[t]
                  ? this.findIndexByInd(this.layers[t].tp)
                  : t - 1;
              if (o === -1) return;
              if (this.elements[o] && this.elements[o] !== !0) {
                var h = e[o].getMatte(this.layers[t].tt);
                r.setMatte(h);
              } else this.buildItem(o), this.addPendingElement(r);
            }
          }
        }),
        (SVGRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var t = this.pendingElements.pop();
            if ((t.checkParenting(), t.data.tt))
              for (var e = 0, r = this.elements.length; e < r; ) {
                if (this.elements[e] === t) {
                  var o =
                      "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                    h = this.elements[o].getMatte(this.layers[e].tt);
                  t.setMatte(h);
                  break;
                }
                e += 1;
              }
          }
        }),
        (SVGRendererBase.prototype.renderFrame = function (t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            var e;
            t === null ? (t = this.renderedFrame) : (this.renderedFrame = t),
              (this.globalData.frameNum = t),
              (this.globalData.frameId += 1),
              (this.globalData.projectInterface.currentFrame = t),
              (this.globalData._mdf = !1);
            var r = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(t), e = r - 1;
              e >= 0;
              e -= 1
            )
              (this.completeLayers || this.elements[e]) &&
                this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < r; e += 1)
                (this.completeLayers || this.elements[e]) &&
                  this.elements[e].renderFrame();
          }
        }),
        (SVGRendererBase.prototype.appendElementInPos = function (t, e) {
          var r = t.getBaseElement();
          if (r) {
            for (var o, h = 0; h < e; )
              this.elements[h] &&
                this.elements[h] !== !0 &&
                this.elements[h].getBaseElement() &&
                (o = this.elements[h].getBaseElement()),
                (h += 1);
            o
              ? this.layerElement.insertBefore(r, o)
              : this.layerElement.appendChild(r);
          }
        }),
        (SVGRendererBase.prototype.hide = function () {
          this.layerElement.style.display = "none";
        }),
        (SVGRendererBase.prototype.show = function () {
          this.layerElement.style.display = "block";
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          ICompElement
        ),
        (ICompElement.prototype.initElement = function (t, e, r) {
          this.initFrame(),
            this.initBaseData(t, e, r),
            this.initTransform(t, e, r),
            this.initRenderable(),
            this.initHierarchy(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
            this.hide();
        }),
        (ICompElement.prototype.prepareFrame = function (t) {
          if (
            ((this._mdf = !1),
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange),
            this.isInRange || this.data.xt)
          ) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1),
                (this.renderedFrame = e);
            }
            var r,
              o = this.elements.length;
            for (
              this.completeLayers || this.checkLayers(this.renderedFrame),
                r = o - 1;
              r >= 0;
              r -= 1
            )
              (this.completeLayers || this.elements[r]) &&
                (this.elements[r].prepareFrame(
                  this.renderedFrame - this.layers[r].st
                ),
                this.elements[r]._mdf && (this._mdf = !0));
          }
        }),
        (ICompElement.prototype.renderInnerContent = function () {
          var t,
            e = this.layers.length;
          for (t = 0; t < e; t += 1)
            (this.completeLayers || this.elements[t]) &&
              this.elements[t].renderFrame();
        }),
        (ICompElement.prototype.setElements = function (t) {
          this.elements = t;
        }),
        (ICompElement.prototype.getElements = function () {
          return this.elements;
        }),
        (ICompElement.prototype.destroyElements = function () {
          var t,
            e = this.layers.length;
          for (t = 0; t < e; t += 1)
            this.elements[t] && this.elements[t].destroy();
        }),
        (ICompElement.prototype.destroy = function () {
          this.destroyElements(), this.destroyBaseElement();
        }),
        extendPrototype(
          [SVGRendererBase, ICompElement, SVGBaseElement],
          SVGCompElement
        ),
        (SVGCompElement.prototype.createComp = function (t) {
          return new SVGCompElement(t, this.globalData, this);
        }),
        extendPrototype([SVGRendererBase], SVGRenderer),
        (SVGRenderer.prototype.createComp = function (t) {
          return new SVGCompElement(t, this.globalData, this);
        }),
        (ShapeTransformManager.prototype = {
          addTransformSequence: function (t) {
            var e,
              r = t.length,
              o = "_";
            for (e = 0; e < r; e += 1) o += t[e].transform.key + "_";
            var h = this.sequences[o];
            return (
              h ||
                ((h = {
                  transforms: [].concat(t),
                  finalTransform: new Matrix(),
                  _mdf: !1,
                }),
                (this.sequences[o] = h),
                this.sequenceList.push(h)),
              h
            );
          },
          processSequence: function (t, e) {
            for (var r = 0, o = t.transforms.length, h = e; r < o && !e; ) {
              if (t.transforms[r].transform.mProps._mdf) {
                h = !0;
                break;
              }
              r += 1;
            }
            if (h)
              for (t.finalTransform.reset(), r = o - 1; r >= 0; r -= 1)
                t.finalTransform.multiply(t.transforms[r].transform.mProps.v);
            t._mdf = h;
          },
          processSequences: function (t) {
            var e,
              r = this.sequenceList.length;
            for (e = 0; e < r; e += 1)
              this.processSequence(this.sequenceList[e], t);
          },
          getNewKey: function () {
            return (
              (this.transform_key_count += 1), "_" + this.transform_key_count
            );
          },
        });
      var lumaLoader = function () {
        var t = "__lottie_element_luma_buffer",
          e = null,
          r = null,
          o = null;
        function h() {
          var l, y, D;
          e ||
            ((l = createNS("svg")),
            (y = createNS("filter")),
            (D = createNS("feColorMatrix")),
            y.setAttribute("id", t),
            D.setAttribute("type", "matrix"),
            D.setAttribute("color-interpolation-filters", "sRGB"),
            D.setAttribute(
              "values",
              "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"
            ),
            y.appendChild(D),
            l.appendChild(y),
            l.setAttribute("id", t + "_svg"),
            featureSupport.svgLumaHidden && (l.style.display = "none"),
            (o = l),
            document.body.appendChild(o),
            (e = createTag("canvas")),
            ((r = e.getContext("2d")).filter = "url(#" + t + ")"),
            (r.fillStyle = "rgba(0,0,0,0)"),
            r.fillRect(0, 0, 1, 1));
        }
        return {
          load: h,
          get: function (l) {
            return (
              e || h(),
              (e.width = l.width),
              (e.height = l.height),
              (r.filter = "url(#" + t + ")"),
              e
            );
          },
        };
      };
      function createCanvas(t, e) {
        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
        var r = createTag("canvas");
        return (r.width = t), (r.height = e), r;
      }
      var assetLoader = {
          loadLumaCanvas: lumaLoader.load,
          getLumaCanvas: lumaLoader.get,
          createCanvas,
        },
        registeredEffects = {};
      function CVEffects(t) {
        var e,
          r,
          o = t.data.ef ? t.data.ef.length : 0;
        for (this.filters = [], e = 0; e < o; e += 1) {
          r = null;
          var h = t.data.ef[e].ty;
          registeredEffects[h] &&
            (r = new registeredEffects[h].effect(
              t.effectsManager.effectElements[e],
              t
            )),
            r && this.filters.push(r);
        }
        this.filters.length && t.addRenderableComponent(this);
      }
      function registerEffect(t, e) {
        registeredEffects[t] = { effect: e };
      }
      function CVMaskElement(t, e) {
        var r;
        (this.data = t),
          (this.element = e),
          (this.masksProperties = this.data.masksProperties || []),
          (this.viewData = createSizedArray(this.masksProperties.length));
        var o = this.masksProperties.length,
          h = !1;
        for (r = 0; r < o; r += 1)
          this.masksProperties[r].mode !== "n" && (h = !0),
            (this.viewData[r] = ShapePropertyFactory.getShapeProp(
              this.element,
              this.masksProperties[r],
              3
            ));
        (this.hasMasks = h), h && this.element.addRenderableComponent(this);
      }
      function CVBaseElement() {}
      (CVEffects.prototype.renderFrame = function (t) {
        var e,
          r = this.filters.length;
        for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
      }),
        (CVEffects.prototype.getEffects = function (t) {
          var e,
            r = this.filters.length,
            o = [];
          for (e = 0; e < r; e += 1)
            this.filters[e].type === t && o.push(this.filters[e]);
          return o;
        }),
        (CVMaskElement.prototype.renderFrame = function () {
          if (this.hasMasks) {
            var t,
              e,
              r,
              o,
              h = this.element.finalTransform.mat,
              l = this.element.canvasContext,
              y = this.masksProperties.length;
            for (l.beginPath(), t = 0; t < y; t += 1)
              if (this.masksProperties[t].mode !== "n") {
                var D;
                this.masksProperties[t].inv &&
                  (l.moveTo(0, 0),
                  l.lineTo(this.element.globalData.compSize.w, 0),
                  l.lineTo(
                    this.element.globalData.compSize.w,
                    this.element.globalData.compSize.h
                  ),
                  l.lineTo(0, this.element.globalData.compSize.h),
                  l.lineTo(0, 0)),
                  (o = this.viewData[t].v),
                  (e = h.applyToPointArray(o.v[0][0], o.v[0][1], 0)),
                  l.moveTo(e[0], e[1]);
                var j = o._length;
                for (D = 1; D < j; D += 1)
                  (r = h.applyToTriplePoints(o.o[D - 1], o.i[D], o.v[D])),
                    l.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                (r = h.applyToTriplePoints(o.o[D - 1], o.i[0], o.v[0])),
                  l.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
              }
            this.element.globalData.renderer.save(!0), l.clip();
          }
        }),
        (CVMaskElement.prototype.getMaskProperty =
          MaskElement.prototype.getMaskProperty),
        (CVMaskElement.prototype.destroy = function () {
          this.element = null;
        });
      var operationsMap = {
        1: "source-in",
        2: "source-out",
        3: "source-in",
        4: "source-out",
      };
      function CVShapeData(t, e, r, o) {
        (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
        var h,
          l = 4;
        e.ty === "rc"
          ? (l = 5)
          : e.ty === "el"
          ? (l = 6)
          : e.ty === "sr" && (l = 7),
          (this.sh = ShapePropertyFactory.getShapeProp(t, e, l, t));
        var y,
          D = r.length;
        for (h = 0; h < D; h += 1)
          r[h].closed ||
            ((y = {
              transforms: o.addTransformSequence(r[h].transforms),
              trNodes: [],
            }),
            this.styledShapes.push(y),
            r[h].elements.push(y));
      }
      function CVShapeElement(t, e, r) {
        (this.shapes = []),
          (this.shapesData = t.shapes),
          (this.stylesList = []),
          (this.itemsData = []),
          (this.prevViewData = []),
          (this.shapeModifiers = []),
          (this.processedElements = []),
          (this.transformsManager = new ShapeTransformManager()),
          this.initElement(t, e, r);
      }
      function CVTextElement(t, e, r) {
        (this.textSpans = []),
          (this.yOffset = 0),
          (this.fillColorAnim = !1),
          (this.strokeColorAnim = !1),
          (this.strokeWidthAnim = !1),
          (this.stroke = !1),
          (this.fill = !1),
          (this.justifyOffset = 0),
          (this.currentRender = null),
          (this.renderType = "canvas"),
          (this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: "",
          }),
          this.initElement(t, e, r);
      }
      function CVImageElement(t, e, r) {
        (this.assetData = e.getAssetData(t.refId)),
          (this.img = e.imageLoader.getAsset(this.assetData)),
          this.initElement(t, e, r);
      }
      function CVSolidElement(t, e, r) {
        this.initElement(t, e, r);
      }
      function CanvasRendererBase() {}
      function CanvasContext() {
        (this.opacity = -1),
          (this.transform = createTypedArray("float32", 16)),
          (this.fillStyle = ""),
          (this.strokeStyle = ""),
          (this.lineWidth = ""),
          (this.lineCap = ""),
          (this.lineJoin = ""),
          (this.miterLimit = ""),
          (this.id = Math.random());
      }
      function CVContextData() {
        var t;
        for (
          this.stack = [], this.cArrPos = 0, this.cTr = new Matrix(), t = 0;
          t < 15;
          t += 1
        ) {
          var e = new CanvasContext();
          this.stack[t] = e;
        }
        (this._length = 15),
          (this.nativeContext = null),
          (this.transformMat = new Matrix()),
          (this.currentOpacity = 1),
          (this.currentFillStyle = ""),
          (this.appliedFillStyle = ""),
          (this.currentStrokeStyle = ""),
          (this.appliedStrokeStyle = ""),
          (this.currentLineWidth = ""),
          (this.appliedLineWidth = ""),
          (this.currentLineCap = ""),
          (this.appliedLineCap = ""),
          (this.currentLineJoin = ""),
          (this.appliedLineJoin = ""),
          (this.appliedMiterLimit = ""),
          (this.currentMiterLimit = "");
      }
      function CVCompElement(t, e, r) {
        (this.completeLayers = !1),
          (this.layers = t.layers),
          (this.pendingElements = []),
          (this.elements = createSizedArray(this.layers.length)),
          this.initElement(t, e, r),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      function CanvasRenderer(t, e) {
        (this.animationItem = t),
          (this.renderConfig = {
            clearCanvas: !e || e.clearCanvas === void 0 || e.clearCanvas,
            context: (e && e.context) || null,
            progressiveLoad: (e && e.progressiveLoad) || !1,
            preserveAspectRatio:
              (e && e.preserveAspectRatio) || "xMidYMid meet",
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
            contentVisibility: (e && e.contentVisibility) || "visible",
            className: (e && e.className) || "",
            id: (e && e.id) || "",
            runExpressions:
              !e || e.runExpressions === void 0 || e.runExpressions,
          }),
          (this.renderConfig.dpr = (e && e.dpr) || 1),
          this.animationItem.wrapper &&
            (this.renderConfig.dpr =
              (e && e.dpr) || window.devicePixelRatio || 1),
          (this.renderedFrame = -1),
          (this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1,
          }),
          (this.contextData = new CVContextData()),
          (this.elements = []),
          (this.pendingElements = []),
          (this.transformMat = new Matrix()),
          (this.completeLayers = !1),
          (this.rendererType = "canvas"),
          this.renderConfig.clearCanvas &&
            ((this.ctxTransform = this.contextData.transform.bind(
              this.contextData
            )),
            (this.ctxOpacity = this.contextData.opacity.bind(this.contextData)),
            (this.ctxFillStyle = this.contextData.fillStyle.bind(
              this.contextData
            )),
            (this.ctxStrokeStyle = this.contextData.strokeStyle.bind(
              this.contextData
            )),
            (this.ctxLineWidth = this.contextData.lineWidth.bind(
              this.contextData
            )),
            (this.ctxLineCap = this.contextData.lineCap.bind(this.contextData)),
            (this.ctxLineJoin = this.contextData.lineJoin.bind(
              this.contextData
            )),
            (this.ctxMiterLimit = this.contextData.miterLimit.bind(
              this.contextData
            )),
            (this.ctxFill = this.contextData.fill.bind(this.contextData)),
            (this.ctxFillRect = this.contextData.fillRect.bind(
              this.contextData
            )),
            (this.ctxStroke = this.contextData.stroke.bind(this.contextData)),
            (this.save = this.contextData.save.bind(this.contextData)));
      }
      function HBaseElement() {}
      function HSolidElement(t, e, r) {
        this.initElement(t, e, r);
      }
      function HShapeElement(t, e, r) {
        (this.shapes = []),
          (this.shapesData = t.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          (this.shapesContainer = createNS("g")),
          this.initElement(t, e, r),
          (this.prevViewData = []),
          (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
      }
      function HTextElement(t, e, r) {
        (this.textSpans = []),
          (this.textPaths = []),
          (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
          (this.renderType = "svg"),
          (this.isMasked = !1),
          this.initElement(t, e, r);
      }
      function HCameraElement(t, e, r) {
        this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
        var o = PropertyFactory.getProp;
        if (
          ((this.pe = o(this, t.pe, 0, 0, this)),
          t.ks.p.s
            ? ((this.px = o(this, t.ks.p.x, 1, 0, this)),
              (this.py = o(this, t.ks.p.y, 1, 0, this)),
              (this.pz = o(this, t.ks.p.z, 1, 0, this)))
            : (this.p = o(this, t.ks.p, 1, 0, this)),
          t.ks.a && (this.a = o(this, t.ks.a, 1, 0, this)),
          t.ks.or.k.length && t.ks.or.k[0].to)
        ) {
          var h,
            l = t.ks.or.k.length;
          for (h = 0; h < l; h += 1)
            (t.ks.or.k[h].to = null), (t.ks.or.k[h].ti = null);
        }
        (this.or = o(this, t.ks.or, 1, degToRads, this)),
          (this.or.sh = !0),
          (this.rx = o(this, t.ks.rx, 0, degToRads, this)),
          (this.ry = o(this, t.ks.ry, 0, degToRads, this)),
          (this.rz = o(this, t.ks.rz, 0, degToRads, this)),
          (this.mat = new Matrix()),
          (this._prevMat = new Matrix()),
          (this._isFirstFrame = !0),
          (this.finalTransform = { mProp: this });
      }
      function HImageElement(t, e, r) {
        (this.assetData = e.getAssetData(t.refId)), this.initElement(t, e, r);
      }
      function HybridRendererBase(t, e) {
        (this.animationItem = t),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.renderConfig = {
            className: (e && e.className) || "",
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
            hideOnTransparent: !(e && e.hideOnTransparent === !1),
            filterSize: {
              width: (e && e.filterSize && e.filterSize.width) || "400%",
              height: (e && e.filterSize && e.filterSize.height) || "400%",
              x: (e && e.filterSize && e.filterSize.x) || "-100%",
              y: (e && e.filterSize && e.filterSize.y) || "-100%",
            },
          }),
          (this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig,
          }),
          (this.pendingElements = []),
          (this.elements = []),
          (this.threeDElements = []),
          (this.destroyed = !1),
          (this.camera = null),
          (this.supports3d = !0),
          (this.rendererType = "html");
      }
      function HCompElement(t, e, r) {
        (this.layers = t.layers),
          (this.supports3d = !t.hasMask),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(t, e, r),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      function HybridRenderer(t, e) {
        (this.animationItem = t),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.renderConfig = {
            className: (e && e.className) || "",
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
            hideOnTransparent: !(e && e.hideOnTransparent === !1),
            filterSize: {
              width: (e && e.filterSize && e.filterSize.width) || "400%",
              height: (e && e.filterSize && e.filterSize.height) || "400%",
              x: (e && e.filterSize && e.filterSize.x) || "-100%",
              y: (e && e.filterSize && e.filterSize.y) || "-100%",
            },
            runExpressions:
              !e || e.runExpressions === void 0 || e.runExpressions,
          }),
          (this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig,
          }),
          (this.pendingElements = []),
          (this.elements = []),
          (this.threeDElements = []),
          (this.destroyed = !1),
          (this.camera = null),
          (this.supports3d = !0),
          (this.rendererType = "html");
      }
      (CVBaseElement.prototype = {
        createElements: function () {},
        initRendererElement: function () {},
        createContainerElements: function () {
          if (this.data.tt >= 1) {
            this.buffers = [];
            var t = this.globalData.canvasContext,
              e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
            this.buffers.push(e);
            var r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
            this.buffers.push(r),
              this.data.tt >= 3 &&
                !document._isProxy &&
                assetLoader.loadLumaCanvas();
          }
          (this.canvasContext = this.globalData.canvasContext),
            (this.transformCanvas = this.globalData.transformCanvas),
            (this.renderableEffectsManager = new CVEffects(this)),
            this.searchEffectTransforms();
        },
        createContent: function () {},
        setBlendMode: function () {
          var t = this.globalData;
          if (t.blendMode !== this.data.bm) {
            t.blendMode = this.data.bm;
            var e = getBlendMode(this.data.bm);
            t.canvasContext.globalCompositeOperation = e;
          }
        },
        createRenderableComponents: function () {
          (this.maskManager = new CVMaskElement(this.data, this)),
            (this.transformEffects = this.renderableEffectsManager.getEffects(
              effectTypes.TRANSFORM_EFFECT
            ));
        },
        hideElement: function () {
          this.hidden ||
            (this.isInRange && !this.isTransparent) ||
            (this.hidden = !0);
        },
        showElement: function () {
          this.isInRange &&
            !this.isTransparent &&
            ((this.hidden = !1),
            (this._isFirstFrame = !0),
            (this.maskManager._isFirstFrame = !0));
        },
        clearCanvas: function (t) {
          t.clearRect(
            this.transformCanvas.tx,
            this.transformCanvas.ty,
            this.transformCanvas.w * this.transformCanvas.sx,
            this.transformCanvas.h * this.transformCanvas.sy
          );
        },
        prepareLayer: function () {
          if (this.data.tt >= 1) {
            var t = this.buffers[0].getContext("2d");
            this.clearCanvas(t),
              t.drawImage(this.canvasContext.canvas, 0, 0),
              (this.currentTransform = this.canvasContext.getTransform()),
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
              this.clearCanvas(this.canvasContext),
              this.canvasContext.setTransform(this.currentTransform);
          }
        },
        exitLayer: function () {
          if (this.data.tt >= 1) {
            var t = this.buffers[1],
              e = t.getContext("2d");
            if (
              (this.clearCanvas(e),
              e.drawImage(this.canvasContext.canvas, 0, 0),
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
              this.clearCanvas(this.canvasContext),
              this.canvasContext.setTransform(this.currentTransform),
              this.comp
                .getElementById(
                  "tp" in this.data ? this.data.tp : this.data.ind - 1
                )
                .renderFrame(!0),
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
              this.data.tt >= 3 && !document._isProxy)
            ) {
              var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
              r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0),
                this.clearCanvas(this.canvasContext),
                this.canvasContext.drawImage(r, 0, 0);
            }
            (this.canvasContext.globalCompositeOperation =
              operationsMap[this.data.tt]),
              this.canvasContext.drawImage(t, 0, 0),
              (this.canvasContext.globalCompositeOperation =
                "destination-over"),
              this.canvasContext.drawImage(this.buffers[0], 0, 0),
              this.canvasContext.setTransform(this.currentTransform),
              (this.canvasContext.globalCompositeOperation = "source-over");
          }
        },
        renderFrame: function (t) {
          if (!this.hidden && !this.data.hd && (this.data.td !== 1 || t)) {
            this.renderTransform(),
              this.renderRenderable(),
              this.renderLocalTransform(),
              this.setBlendMode();
            var e = this.data.ty === 0;
            this.prepareLayer(),
              this.globalData.renderer.save(e),
              this.globalData.renderer.ctxTransform(
                this.finalTransform.localMat.props
              ),
              this.globalData.renderer.ctxOpacity(
                this.finalTransform.localOpacity
              ),
              this.renderInnerContent(),
              this.globalData.renderer.restore(e),
              this.exitLayer(),
              this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
              this._isFirstFrame && (this._isFirstFrame = !1);
          }
        },
        destroy: function () {
          (this.canvasContext = null),
            (this.data = null),
            (this.globalData = null),
            this.maskManager.destroy();
        },
        mHelper: new Matrix(),
      }),
        (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
        (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
        (CVShapeData.prototype.setAsAnimated =
          SVGShapeData.prototype.setAsAnimated),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            CVBaseElement,
            IShapeElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
          ],
          CVShapeElement
        ),
        (CVShapeElement.prototype.initElement =
          RenderableDOMElement.prototype.initElement),
        (CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }),
        (CVShapeElement.prototype.dashResetter = []),
        (CVShapeElement.prototype.createContent = function () {
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            !0,
            []
          );
        }),
        (CVShapeElement.prototype.createStyleElement = function (t, e) {
          var r = {
              data: t,
              type: t.ty,
              preTransforms: this.transformsManager.addTransformSequence(e),
              transforms: [],
              elements: [],
              closed: t.hd === !0,
            },
            o = {};
          if (
            (t.ty === "fl" || t.ty === "st"
              ? ((o.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                o.c.k ||
                  (r.co =
                    "rgb(" +
                    bmFloor(o.c.v[0]) +
                    "," +
                    bmFloor(o.c.v[1]) +
                    "," +
                    bmFloor(o.c.v[2]) +
                    ")"))
              : (t.ty !== "gf" && t.ty !== "gs") ||
                ((o.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                (o.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                (o.h = PropertyFactory.getProp(
                  this,
                  t.h || { k: 0 },
                  0,
                  0.01,
                  this
                )),
                (o.a = PropertyFactory.getProp(
                  this,
                  t.a || { k: 0 },
                  0,
                  degToRads,
                  this
                )),
                (o.g = new GradientProperty(this, t.g, this))),
            (o.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
            t.ty === "st" || t.ty === "gs")
          ) {
            if (
              ((r.lc = lineCapEnum[t.lc || 2]),
              (r.lj = lineJoinEnum[t.lj || 2]),
              t.lj == 1 && (r.ml = t.ml),
              (o.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
              o.w.k || (r.wi = o.w.v),
              t.d)
            ) {
              var h = new DashProperty(this, t.d, "canvas", this);
              (o.d = h),
                o.d.k || ((r.da = o.d.dashArray), (r.do = o.d.dashoffset[0]));
            }
          } else r.r = t.r === 2 ? "evenodd" : "nonzero";
          return this.stylesList.push(r), (o.style = r), o;
        }),
        (CVShapeElement.prototype.createGroupElement = function () {
          return { it: [], prevViewData: [] };
        }),
        (CVShapeElement.prototype.createTransformElement = function (t) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
              mProps: TransformPropertyFactory.getTransformProperty(
                this,
                t,
                this
              ),
            },
          };
        }),
        (CVShapeElement.prototype.createShapeElement = function (t) {
          var e = new CVShapeData(
            this,
            t,
            this.stylesList,
            this.transformsManager
          );
          return this.shapes.push(e), this.addShapeToModifiers(e), e;
        }),
        (CVShapeElement.prototype.reloadShapes = function () {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              []
            ),
              e = this.dynamicProperties.length,
              t = 0;
            t < e;
            t += 1
          )
            this.dynamicProperties[t].getValue();
          this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame);
        }),
        (CVShapeElement.prototype.addTransformToStyleList = function (t) {
          var e,
            r = this.stylesList.length;
          for (e = 0; e < r; e += 1)
            this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
        }),
        (CVShapeElement.prototype.removeTransformFromStyleList = function () {
          var t,
            e = this.stylesList.length;
          for (t = 0; t < e; t += 1)
            this.stylesList[t].closed || this.stylesList[t].transforms.pop();
        }),
        (CVShapeElement.prototype.closeStyles = function (t) {
          var e,
            r = t.length;
          for (e = 0; e < r; e += 1) t[e].closed = !0;
        }),
        (CVShapeElement.prototype.searchShapes = function (t, e, r, o, h) {
          var l,
            y,
            D,
            j,
            Y,
            B,
            q = t.length - 1,
            O = [],
            W = [],
            G = [].concat(h);
          for (l = q; l >= 0; l -= 1) {
            if (
              ((j = this.searchProcessedElement(t[l]))
                ? (e[l] = r[j - 1])
                : (t[l]._shouldRender = o),
              t[l].ty === "fl" ||
                t[l].ty === "st" ||
                t[l].ty === "gf" ||
                t[l].ty === "gs")
            )
              j
                ? (e[l].style.closed = !1)
                : (e[l] = this.createStyleElement(t[l], G)),
                O.push(e[l].style);
            else if (t[l].ty === "gr") {
              if (j)
                for (D = e[l].it.length, y = 0; y < D; y += 1)
                  e[l].prevViewData[y] = e[l].it[y];
              else e[l] = this.createGroupElement(t[l]);
              this.searchShapes(t[l].it, e[l].it, e[l].prevViewData, o, G);
            } else
              t[l].ty === "tr"
                ? (j || ((B = this.createTransformElement(t[l])), (e[l] = B)),
                  G.push(e[l]),
                  this.addTransformToStyleList(e[l]))
                : t[l].ty === "sh" ||
                  t[l].ty === "rc" ||
                  t[l].ty === "el" ||
                  t[l].ty === "sr"
                ? j || (e[l] = this.createShapeElement(t[l]))
                : t[l].ty === "tm" ||
                  t[l].ty === "rd" ||
                  t[l].ty === "pb" ||
                  t[l].ty === "zz" ||
                  t[l].ty === "op"
                ? (j
                    ? ((Y = e[l]).closed = !1)
                    : ((Y = ShapeModifiers.getModifier(t[l].ty)).init(
                        this,
                        t[l]
                      ),
                      (e[l] = Y),
                      this.shapeModifiers.push(Y)),
                  W.push(Y))
                : t[l].ty === "rp" &&
                  (j
                    ? ((Y = e[l]).closed = !0)
                    : ((Y = ShapeModifiers.getModifier(t[l].ty)),
                      (e[l] = Y),
                      Y.init(this, t, l, e),
                      this.shapeModifiers.push(Y),
                      (o = !1)),
                  W.push(Y));
            this.addProcessedElement(t[l], l + 1);
          }
          for (
            this.removeTransformFromStyleList(),
              this.closeStyles(O),
              q = W.length,
              l = 0;
            l < q;
            l += 1
          )
            W[l].closed = !0;
        }),
        (CVShapeElement.prototype.renderInnerContent = function () {
          (this.transformHelper.opacity = 1),
            (this.transformHelper._opMdf = !1),
            this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame),
            this.renderShape(
              this.transformHelper,
              this.shapesData,
              this.itemsData,
              !0
            );
        }),
        (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) &&
            ((e.opacity = t.opacity), (e.opacity *= e.op.v), (e._opMdf = !0));
        }),
        (CVShapeElement.prototype.drawLayer = function () {
          var t,
            e,
            r,
            o,
            h,
            l,
            y,
            D,
            j,
            Y = this.stylesList.length,
            B = this.globalData.renderer,
            q = this.globalData.canvasContext;
          for (t = 0; t < Y; t += 1)
            if (
              (((D = (j = this.stylesList[t]).type) !== "st" && D !== "gs") ||
                j.wi !== 0) &&
              j.data._shouldRender &&
              j.coOp !== 0 &&
              this.globalData.currentGlobalAlpha !== 0
            ) {
              for (
                B.save(),
                  l = j.elements,
                  D === "st" || D === "gs"
                    ? (B.ctxStrokeStyle(D === "st" ? j.co : j.grd),
                      B.ctxLineWidth(j.wi),
                      B.ctxLineCap(j.lc),
                      B.ctxLineJoin(j.lj),
                      B.ctxMiterLimit(j.ml || 0))
                    : B.ctxFillStyle(D === "fl" ? j.co : j.grd),
                  B.ctxOpacity(j.coOp),
                  D !== "st" && D !== "gs" && q.beginPath(),
                  B.ctxTransform(j.preTransforms.finalTransform.props),
                  r = l.length,
                  e = 0;
                e < r;
                e += 1
              ) {
                for (
                  (D !== "st" && D !== "gs") ||
                    (q.beginPath(),
                    j.da && (q.setLineDash(j.da), (q.lineDashOffset = j.do))),
                    h = (y = l[e].trNodes).length,
                    o = 0;
                  o < h;
                  o += 1
                )
                  y[o].t === "m"
                    ? q.moveTo(y[o].p[0], y[o].p[1])
                    : y[o].t === "c"
                    ? q.bezierCurveTo(
                        y[o].pts[0],
                        y[o].pts[1],
                        y[o].pts[2],
                        y[o].pts[3],
                        y[o].pts[4],
                        y[o].pts[5]
                      )
                    : q.closePath();
                (D !== "st" && D !== "gs") ||
                  (B.ctxStroke(), j.da && q.setLineDash(this.dashResetter));
              }
              D !== "st" && D !== "gs" && this.globalData.renderer.ctxFill(j.r),
                B.restore();
            }
        }),
        (CVShapeElement.prototype.renderShape = function (t, e, r, o) {
          var h, l;
          for (l = t, h = e.length - 1; h >= 0; h -= 1)
            e[h].ty === "tr"
              ? ((l = r[h].transform), this.renderShapeTransform(t, l))
              : e[h].ty === "sh" ||
                e[h].ty === "el" ||
                e[h].ty === "rc" ||
                e[h].ty === "sr"
              ? this.renderPath(e[h], r[h])
              : e[h].ty === "fl"
              ? this.renderFill(e[h], r[h], l)
              : e[h].ty === "st"
              ? this.renderStroke(e[h], r[h], l)
              : e[h].ty === "gf" || e[h].ty === "gs"
              ? this.renderGradientFill(e[h], r[h], l)
              : e[h].ty === "gr"
              ? this.renderShape(l, e[h].it, r[h].it)
              : e[h].ty;
          o && this.drawLayer();
        }),
        (CVShapeElement.prototype.renderStyledShape = function (t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var r,
              o,
              h,
              l = t.trNodes,
              y = e.paths,
              D = y._length;
            l.length = 0;
            var j = t.transforms.finalTransform;
            for (h = 0; h < D; h += 1) {
              var Y = y.shapes[h];
              if (Y && Y.v) {
                for (o = Y._length, r = 1; r < o; r += 1)
                  r === 1 &&
                    l.push({
                      t: "m",
                      p: j.applyToPointArray(Y.v[0][0], Y.v[0][1], 0),
                    }),
                    l.push({
                      t: "c",
                      pts: j.applyToTriplePoints(Y.o[r - 1], Y.i[r], Y.v[r]),
                    });
                o === 1 &&
                  l.push({
                    t: "m",
                    p: j.applyToPointArray(Y.v[0][0], Y.v[0][1], 0),
                  }),
                  Y.c &&
                    o &&
                    (l.push({
                      t: "c",
                      pts: j.applyToTriplePoints(Y.o[r - 1], Y.i[0], Y.v[0]),
                    }),
                    l.push({ t: "z" }));
              }
            }
            t.trNodes = l;
          }
        }),
        (CVShapeElement.prototype.renderPath = function (t, e) {
          if (t.hd !== !0 && t._shouldRender) {
            var r,
              o = e.styledShapes.length;
            for (r = 0; r < o; r += 1)
              this.renderStyledShape(e.styledShapes[r], e.sh);
          }
        }),
        (CVShapeElement.prototype.renderFill = function (t, e, r) {
          var o = e.style;
          (e.c._mdf || this._isFirstFrame) &&
            (o.co =
              "rgb(" +
              bmFloor(e.c.v[0]) +
              "," +
              bmFloor(e.c.v[1]) +
              "," +
              bmFloor(e.c.v[2]) +
              ")"),
            (e.o._mdf || r._opMdf || this._isFirstFrame) &&
              (o.coOp = e.o.v * r.opacity);
        }),
        (CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
          var o,
            h = e.style;
          if (
            !h.grd ||
            e.g._mdf ||
            e.s._mdf ||
            e.e._mdf ||
            (t.t !== 1 && (e.h._mdf || e.a._mdf))
          ) {
            var l,
              y = this.globalData.canvasContext,
              D = e.s.v,
              j = e.e.v;
            if (t.t === 1) o = y.createLinearGradient(D[0], D[1], j[0], j[1]);
            else {
              var Y = Math.sqrt(
                  Math.pow(D[0] - j[0], 2) + Math.pow(D[1] - j[1], 2)
                ),
                B = Math.atan2(j[1] - D[1], j[0] - D[0]),
                q = e.h.v;
              q >= 1 ? (q = 0.99) : q <= -1 && (q = -0.99);
              var O = Y * q,
                W = Math.cos(B + e.a.v) * O + D[0],
                G = Math.sin(B + e.a.v) * O + D[1];
              o = y.createRadialGradient(W, G, 0, D[0], D[1], Y);
            }
            var F = t.g.p,
              R = e.g.c,
              U = 1;
            for (l = 0; l < F; l += 1)
              e.g._hasOpacity && e.g._collapsable && (U = e.g.o[2 * l + 1]),
                o.addColorStop(
                  R[4 * l] / 100,
                  "rgba(" +
                    R[4 * l + 1] +
                    "," +
                    R[4 * l + 2] +
                    "," +
                    R[4 * l + 3] +
                    "," +
                    U +
                    ")"
                );
            h.grd = o;
          }
          h.coOp = e.o.v * r.opacity;
        }),
        (CVShapeElement.prototype.renderStroke = function (t, e, r) {
          var o = e.style,
            h = e.d;
          h &&
            (h._mdf || this._isFirstFrame) &&
            ((o.da = h.dashArray), (o.do = h.dashoffset[0])),
            (e.c._mdf || this._isFirstFrame) &&
              (o.co =
                "rgb(" +
                bmFloor(e.c.v[0]) +
                "," +
                bmFloor(e.c.v[1]) +
                "," +
                bmFloor(e.c.v[2]) +
                ")"),
            (e.o._mdf || r._opMdf || this._isFirstFrame) &&
              (o.coOp = e.o.v * r.opacity),
            (e.w._mdf || this._isFirstFrame) && (o.wi = e.w.v);
        }),
        (CVShapeElement.prototype.destroy = function () {
          (this.shapesData = null),
            (this.globalData = null),
            (this.canvasContext = null),
            (this.stylesList.length = 0),
            (this.itemsData.length = 0);
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            CVBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
            ITextElement,
          ],
          CVTextElement
        ),
        (CVTextElement.prototype.tHelper =
          createTag("canvas").getContext("2d")),
        (CVTextElement.prototype.buildNewText = function () {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc
            ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
            : (this.values.fill = "rgba(0,0,0,0)"),
            (this.fill = e);
          var r = !1;
          t.sc &&
            ((r = !0),
            (this.values.stroke = this.buildColor(t.sc)),
            (this.values.sWidth = t.sw));
          var o,
            h,
            l,
            y,
            D,
            j,
            Y,
            B,
            q,
            O,
            W,
            G,
            F = this.globalData.fontManager.getFontByName(t.f),
            R = t.l,
            U = this.mHelper;
          (this.stroke = r),
            (this.values.fValue =
              t.finalSize +
              "px " +
              this.globalData.fontManager.getFontByName(t.f).fFamily),
            (h = t.finalText.length);
          var X = this.data.singleShape,
            Z = 0.001 * t.tr * t.finalSize,
            J = 0,
            Q = 0,
            st = !0,
            it = 0;
          for (o = 0; o < h; o += 1) {
            (y =
              ((l = this.globalData.fontManager.getCharData(
                t.finalText[o],
                F.fStyle,
                this.globalData.fontManager.getFontByName(t.f).fFamily
              )) &&
                l.data) ||
              {}),
              U.reset(),
              X &&
                R[o].n &&
                ((J = -Z), (Q += t.yOffset), (Q += st ? 1 : 0), (st = !1)),
              (q = (Y = y.shapes ? y.shapes[0].it : []).length),
              U.scale(t.finalSize / 100, t.finalSize / 100),
              X && this.applyTextPropertiesToMatrix(t, U, R[o].line, J, Q),
              (W = createSizedArray(q - 1));
            var et = 0;
            for (B = 0; B < q; B += 1)
              if (Y[B].ty === "sh") {
                for (
                  j = Y[B].ks.k.i.length, O = Y[B].ks.k, G = [], D = 1;
                  D < j;
                  D += 1
                )
                  D === 1 &&
                    G.push(
                      U.applyToX(O.v[0][0], O.v[0][1], 0),
                      U.applyToY(O.v[0][0], O.v[0][1], 0)
                    ),
                    G.push(
                      U.applyToX(O.o[D - 1][0], O.o[D - 1][1], 0),
                      U.applyToY(O.o[D - 1][0], O.o[D - 1][1], 0),
                      U.applyToX(O.i[D][0], O.i[D][1], 0),
                      U.applyToY(O.i[D][0], O.i[D][1], 0),
                      U.applyToX(O.v[D][0], O.v[D][1], 0),
                      U.applyToY(O.v[D][0], O.v[D][1], 0)
                    );
                G.push(
                  U.applyToX(O.o[D - 1][0], O.o[D - 1][1], 0),
                  U.applyToY(O.o[D - 1][0], O.o[D - 1][1], 0),
                  U.applyToX(O.i[0][0], O.i[0][1], 0),
                  U.applyToY(O.i[0][0], O.i[0][1], 0),
                  U.applyToX(O.v[0][0], O.v[0][1], 0),
                  U.applyToY(O.v[0][0], O.v[0][1], 0)
                ),
                  (W[et] = G),
                  (et += 1);
              }
            X && ((J += R[o].l), (J += Z)),
              this.textSpans[it]
                ? (this.textSpans[it].elem = W)
                : (this.textSpans[it] = { elem: W }),
              (it += 1);
          }
        }),
        (CVTextElement.prototype.renderInnerContent = function () {
          var t, e, r, o, h, l;
          this.validateText(),
            (this.canvasContext.font = this.values.fValue),
            this.globalData.renderer.ctxLineCap("butt"),
            this.globalData.renderer.ctxLineJoin("miter"),
            this.globalData.renderer.ctxMiterLimit(4),
            this.data.singleShape ||
              this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              );
          var y,
            D = this.textAnimator.renderedLetters,
            j = this.textProperty.currentData.l;
          e = j.length;
          var Y,
            B,
            q = null,
            O = null,
            W = null,
            G = this.globalData.renderer;
          for (t = 0; t < e; t += 1)
            if (!j[t].n) {
              if (
                ((y = D[t]) &&
                  (G.save(), G.ctxTransform(y.p), G.ctxOpacity(y.o)),
                this.fill)
              ) {
                for (
                  y && y.fc
                    ? q !== y.fc && (G.ctxFillStyle(y.fc), (q = y.fc))
                    : q !== this.values.fill &&
                      ((q = this.values.fill),
                      G.ctxFillStyle(this.values.fill)),
                    o = (Y = this.textSpans[t].elem).length,
                    this.globalData.canvasContext.beginPath(),
                    r = 0;
                  r < o;
                  r += 1
                )
                  for (
                    l = (B = Y[r]).length,
                      this.globalData.canvasContext.moveTo(B[0], B[1]),
                      h = 2;
                    h < l;
                    h += 6
                  )
                    this.globalData.canvasContext.bezierCurveTo(
                      B[h],
                      B[h + 1],
                      B[h + 2],
                      B[h + 3],
                      B[h + 4],
                      B[h + 5]
                    );
                this.globalData.canvasContext.closePath(), G.ctxFill();
              }
              if (this.stroke) {
                for (
                  y && y.sw
                    ? W !== y.sw && ((W = y.sw), G.ctxLineWidth(y.sw))
                    : W !== this.values.sWidth &&
                      ((W = this.values.sWidth),
                      G.ctxLineWidth(this.values.sWidth)),
                    y && y.sc
                      ? O !== y.sc && ((O = y.sc), G.ctxStrokeStyle(y.sc))
                      : O !== this.values.stroke &&
                        ((O = this.values.stroke),
                        G.ctxStrokeStyle(this.values.stroke)),
                    o = (Y = this.textSpans[t].elem).length,
                    this.globalData.canvasContext.beginPath(),
                    r = 0;
                  r < o;
                  r += 1
                )
                  for (
                    l = (B = Y[r]).length,
                      this.globalData.canvasContext.moveTo(B[0], B[1]),
                      h = 2;
                    h < l;
                    h += 6
                  )
                    this.globalData.canvasContext.bezierCurveTo(
                      B[h],
                      B[h + 1],
                      B[h + 2],
                      B[h + 3],
                      B[h + 4],
                      B[h + 5]
                    );
                this.globalData.canvasContext.closePath(), G.ctxStroke();
              }
              y && this.globalData.renderer.restore();
            }
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            CVBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
          ],
          CVImageElement
        ),
        (CVImageElement.prototype.initElement =
          SVGShapeElement.prototype.initElement),
        (CVImageElement.prototype.prepareFrame =
          IImageElement.prototype.prepareFrame),
        (CVImageElement.prototype.createContent = function () {
          if (
            this.img.width &&
            (this.assetData.w !== this.img.width ||
              this.assetData.h !== this.img.height)
          ) {
            var t = createTag("canvas");
            (t.width = this.assetData.w), (t.height = this.assetData.h);
            var e,
              r,
              o = t.getContext("2d"),
              h = this.img.width,
              l = this.img.height,
              y = h / l,
              D = this.assetData.w / this.assetData.h,
              j =
                this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio;
            (y > D && j === "xMidYMid slice") ||
            (y < D && j !== "xMidYMid slice")
              ? (e = (r = l) * D)
              : (r = (e = h) / D),
              o.drawImage(
                this.img,
                (h - e) / 2,
                (l - r) / 2,
                e,
                r,
                0,
                0,
                this.assetData.w,
                this.assetData.h
              ),
              (this.img = t);
          }
        }),
        (CVImageElement.prototype.renderInnerContent = function () {
          this.canvasContext.drawImage(this.img, 0, 0);
        }),
        (CVImageElement.prototype.destroy = function () {
          this.img = null;
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            CVBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
          ],
          CVSolidElement
        ),
        (CVSolidElement.prototype.initElement =
          SVGShapeElement.prototype.initElement),
        (CVSolidElement.prototype.prepareFrame =
          IImageElement.prototype.prepareFrame),
        (CVSolidElement.prototype.renderInnerContent = function () {
          this.globalData.renderer.ctxFillStyle(this.data.sc),
            this.globalData.renderer.ctxFillRect(
              0,
              0,
              this.data.sw,
              this.data.sh
            );
        }),
        extendPrototype([BaseRenderer], CanvasRendererBase),
        (CanvasRendererBase.prototype.createShape = function (t) {
          return new CVShapeElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createText = function (t) {
          return new CVTextElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createImage = function (t) {
          return new CVImageElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createSolid = function (t) {
          return new CVSolidElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createNull =
          SVGRenderer.prototype.createNull),
        (CanvasRendererBase.prototype.ctxTransform = function (t) {
          (t[0] === 1 &&
            t[1] === 0 &&
            t[4] === 0 &&
            t[5] === 1 &&
            t[12] === 0 &&
            t[13] === 0) ||
            this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
        }),
        (CanvasRendererBase.prototype.ctxOpacity = function (t) {
          this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
        }),
        (CanvasRendererBase.prototype.ctxFillStyle = function (t) {
          this.canvasContext.fillStyle = t;
        }),
        (CanvasRendererBase.prototype.ctxStrokeStyle = function (t) {
          this.canvasContext.strokeStyle = t;
        }),
        (CanvasRendererBase.prototype.ctxLineWidth = function (t) {
          this.canvasContext.lineWidth = t;
        }),
        (CanvasRendererBase.prototype.ctxLineCap = function (t) {
          this.canvasContext.lineCap = t;
        }),
        (CanvasRendererBase.prototype.ctxLineJoin = function (t) {
          this.canvasContext.lineJoin = t;
        }),
        (CanvasRendererBase.prototype.ctxMiterLimit = function (t) {
          this.canvasContext.miterLimit = t;
        }),
        (CanvasRendererBase.prototype.ctxFill = function (t) {
          this.canvasContext.fill(t);
        }),
        (CanvasRendererBase.prototype.ctxFillRect = function (t, e, r, o) {
          this.canvasContext.fillRect(t, e, r, o);
        }),
        (CanvasRendererBase.prototype.ctxStroke = function () {
          this.canvasContext.stroke();
        }),
        (CanvasRendererBase.prototype.reset = function () {
          this.renderConfig.clearCanvas
            ? this.contextData.reset()
            : this.canvasContext.restore();
        }),
        (CanvasRendererBase.prototype.save = function () {
          this.canvasContext.save();
        }),
        (CanvasRendererBase.prototype.restore = function (t) {
          this.renderConfig.clearCanvas
            ? (t && (this.globalData.blendMode = "source-over"),
              this.contextData.restore(t))
            : this.canvasContext.restore();
        }),
        (CanvasRendererBase.prototype.configAnimation = function (t) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var e = this.animationItem.container.style;
            (e.width = "100%"), (e.height = "100%");
            var r = "0px 0px 0px";
            (e.transformOrigin = r),
              (e.mozTransformOrigin = r),
              (e.webkitTransformOrigin = r),
              (e["-webkit-transform"] = r),
              (e.contentVisibility = this.renderConfig.contentVisibility),
              this.animationItem.wrapper.appendChild(
                this.animationItem.container
              ),
              (this.canvasContext =
                this.animationItem.container.getContext("2d")),
              this.renderConfig.className &&
                this.animationItem.container.setAttribute(
                  "class",
                  this.renderConfig.className
                ),
              this.renderConfig.id &&
                this.animationItem.container.setAttribute(
                  "id",
                  this.renderConfig.id
                );
          } else this.canvasContext = this.renderConfig.context;
          this.contextData.setContext(this.canvasContext),
            (this.data = t),
            (this.layers = t.layers),
            (this.transformCanvas = {
              w: t.w,
              h: t.h,
              sx: 0,
              sy: 0,
              tx: 0,
              ty: 0,
            }),
            this.setupGlobalData(t, document.body),
            (this.globalData.canvasContext = this.canvasContext),
            (this.globalData.renderer = this),
            (this.globalData.isDashed = !1),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.globalData.transformCanvas = this.transformCanvas),
            (this.elements = createSizedArray(t.layers.length)),
            this.updateContainerSize();
        }),
        (CanvasRendererBase.prototype.updateContainerSize = function (t, e) {
          var r, o, h, l;
          if (
            (this.reset(),
            t
              ? ((r = t),
                (o = e),
                (this.canvasContext.canvas.width = r),
                (this.canvasContext.canvas.height = o))
              : (this.animationItem.wrapper && this.animationItem.container
                  ? ((r = this.animationItem.wrapper.offsetWidth),
                    (o = this.animationItem.wrapper.offsetHeight))
                  : ((r = this.canvasContext.canvas.width),
                    (o = this.canvasContext.canvas.height)),
                (this.canvasContext.canvas.width = r * this.renderConfig.dpr),
                (this.canvasContext.canvas.height = o * this.renderConfig.dpr)),
            this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 ||
              this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1)
          ) {
            var y = this.renderConfig.preserveAspectRatio.split(" "),
              D = y[1] || "meet",
              j = y[0] || "xMidYMid",
              Y = j.substr(0, 4),
              B = j.substr(4);
            (h = r / o),
              ((l = this.transformCanvas.w / this.transformCanvas.h) > h &&
                D === "meet") ||
              (l < h && D === "slice")
                ? ((this.transformCanvas.sx =
                    r / (this.transformCanvas.w / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    r / (this.transformCanvas.w / this.renderConfig.dpr)))
                : ((this.transformCanvas.sx =
                    o / (this.transformCanvas.h / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    o / (this.transformCanvas.h / this.renderConfig.dpr))),
              (this.transformCanvas.tx =
                Y === "xMid" &&
                ((l < h && D === "meet") || (l > h && D === "slice"))
                  ? ((r -
                      this.transformCanvas.w * (o / this.transformCanvas.h)) /
                      2) *
                    this.renderConfig.dpr
                  : Y === "xMax" &&
                    ((l < h && D === "meet") || (l > h && D === "slice"))
                  ? (r -
                      this.transformCanvas.w * (o / this.transformCanvas.h)) *
                    this.renderConfig.dpr
                  : 0),
              (this.transformCanvas.ty =
                B === "YMid" &&
                ((l > h && D === "meet") || (l < h && D === "slice"))
                  ? ((o -
                      this.transformCanvas.h * (r / this.transformCanvas.w)) /
                      2) *
                    this.renderConfig.dpr
                  : B === "YMax" &&
                    ((l > h && D === "meet") || (l < h && D === "slice"))
                  ? (o -
                      this.transformCanvas.h * (r / this.transformCanvas.w)) *
                    this.renderConfig.dpr
                  : 0);
          } else
            this.renderConfig.preserveAspectRatio === "none"
              ? ((this.transformCanvas.sx =
                  r / (this.transformCanvas.w / this.renderConfig.dpr)),
                (this.transformCanvas.sy =
                  o / (this.transformCanvas.h / this.renderConfig.dpr)),
                (this.transformCanvas.tx = 0),
                (this.transformCanvas.ty = 0))
              : ((this.transformCanvas.sx = this.renderConfig.dpr),
                (this.transformCanvas.sy = this.renderConfig.dpr),
                (this.transformCanvas.tx = 0),
                (this.transformCanvas.ty = 0));
          (this.transformCanvas.props = [
            this.transformCanvas.sx,
            0,
            0,
            0,
            0,
            this.transformCanvas.sy,
            0,
            0,
            0,
            0,
            1,
            0,
            this.transformCanvas.tx,
            this.transformCanvas.ty,
            0,
            1,
          ]),
            this.ctxTransform(this.transformCanvas.props),
            this.canvasContext.beginPath(),
            this.canvasContext.rect(
              0,
              0,
              this.transformCanvas.w,
              this.transformCanvas.h
            ),
            this.canvasContext.closePath(),
            this.canvasContext.clip(),
            this.renderFrame(this.renderedFrame, !0);
        }),
        (CanvasRendererBase.prototype.destroy = function () {
          var t;
          for (
            this.renderConfig.clearCanvas &&
              this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = ""),
              t = (this.layers ? this.layers.length : 0) - 1;
            t >= 0;
            t -= 1
          )
            this.elements[t] &&
              this.elements[t].destroy &&
              this.elements[t].destroy();
          (this.elements.length = 0),
            (this.globalData.canvasContext = null),
            (this.animationItem.container = null),
            (this.destroyed = !0);
        }),
        (CanvasRendererBase.prototype.renderFrame = function (t, e) {
          if (
            (this.renderedFrame !== t ||
              this.renderConfig.clearCanvas !== !0 ||
              e) &&
            !this.destroyed &&
            t !== -1
          ) {
            var r;
            (this.renderedFrame = t),
              (this.globalData.frameNum = t - this.animationItem._isFirstFrame),
              (this.globalData.frameId += 1),
              (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
              (this.globalData.projectInterface.currentFrame = t);
            var o = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(t), r = o - 1;
              r >= 0;
              r -= 1
            )
              (this.completeLayers || this.elements[r]) &&
                this.elements[r].prepareFrame(t - this.layers[r].st);
            if (this.globalData._mdf) {
              for (
                this.renderConfig.clearCanvas === !0
                  ? this.canvasContext.clearRect(
                      0,
                      0,
                      this.transformCanvas.w,
                      this.transformCanvas.h
                    )
                  : this.save(),
                  r = o - 1;
                r >= 0;
                r -= 1
              )
                (this.completeLayers || this.elements[r]) &&
                  this.elements[r].renderFrame();
              this.renderConfig.clearCanvas !== !0 && this.restore();
            }
          }
        }),
        (CanvasRendererBase.prototype.buildItem = function (t) {
          var e = this.elements;
          if (!e[t] && this.layers[t].ty !== 99) {
            var r = this.createItem(this.layers[t], this, this.globalData);
            (e[t] = r), r.initExpressions();
          }
        }),
        (CanvasRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; )
            this.pendingElements.pop().checkParenting();
        }),
        (CanvasRendererBase.prototype.hide = function () {
          this.animationItem.container.style.display = "none";
        }),
        (CanvasRendererBase.prototype.show = function () {
          this.animationItem.container.style.display = "block";
        }),
        (CVContextData.prototype.duplicate = function () {
          var t = 2 * this._length,
            e = 0;
          for (e = this._length; e < t; e += 1)
            this.stack[e] = new CanvasContext();
          this._length = t;
        }),
        (CVContextData.prototype.reset = function () {
          (this.cArrPos = 0),
            this.cTr.reset(),
            (this.stack[this.cArrPos].opacity = 1);
        }),
        (CVContextData.prototype.restore = function (t) {
          this.cArrPos -= 1;
          var e,
            r = this.stack[this.cArrPos],
            o = r.transform,
            h = this.cTr.props;
          for (e = 0; e < 16; e += 1) h[e] = o[e];
          if (t) {
            this.nativeContext.restore();
            var l = this.stack[this.cArrPos + 1];
            (this.appliedFillStyle = l.fillStyle),
              (this.appliedStrokeStyle = l.strokeStyle),
              (this.appliedLineWidth = l.lineWidth),
              (this.appliedLineCap = l.lineCap),
              (this.appliedLineJoin = l.lineJoin),
              (this.appliedMiterLimit = l.miterLimit);
          }
          this.nativeContext.setTransform(o[0], o[1], o[4], o[5], o[12], o[13]),
            (t || (r.opacity !== -1 && this.currentOpacity !== r.opacity)) &&
              ((this.nativeContext.globalAlpha = r.opacity),
              (this.currentOpacity = r.opacity)),
            (this.currentFillStyle = r.fillStyle),
            (this.currentStrokeStyle = r.strokeStyle),
            (this.currentLineWidth = r.lineWidth),
            (this.currentLineCap = r.lineCap),
            (this.currentLineJoin = r.lineJoin),
            (this.currentMiterLimit = r.miterLimit);
        }),
        (CVContextData.prototype.save = function (t) {
          t && this.nativeContext.save();
          var e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var r,
            o = this.stack[this.cArrPos];
          for (r = 0; r < 16; r += 1) o.transform[r] = e[r];
          this.cArrPos += 1;
          var h = this.stack[this.cArrPos];
          (h.opacity = o.opacity),
            (h.fillStyle = o.fillStyle),
            (h.strokeStyle = o.strokeStyle),
            (h.lineWidth = o.lineWidth),
            (h.lineCap = o.lineCap),
            (h.lineJoin = o.lineJoin),
            (h.miterLimit = o.miterLimit);
        }),
        (CVContextData.prototype.setOpacity = function (t) {
          this.stack[this.cArrPos].opacity = t;
        }),
        (CVContextData.prototype.setContext = function (t) {
          this.nativeContext = t;
        }),
        (CVContextData.prototype.fillStyle = function (t) {
          this.stack[this.cArrPos].fillStyle !== t &&
            ((this.currentFillStyle = t),
            (this.stack[this.cArrPos].fillStyle = t));
        }),
        (CVContextData.prototype.strokeStyle = function (t) {
          this.stack[this.cArrPos].strokeStyle !== t &&
            ((this.currentStrokeStyle = t),
            (this.stack[this.cArrPos].strokeStyle = t));
        }),
        (CVContextData.prototype.lineWidth = function (t) {
          this.stack[this.cArrPos].lineWidth !== t &&
            ((this.currentLineWidth = t),
            (this.stack[this.cArrPos].lineWidth = t));
        }),
        (CVContextData.prototype.lineCap = function (t) {
          this.stack[this.cArrPos].lineCap !== t &&
            ((this.currentLineCap = t), (this.stack[this.cArrPos].lineCap = t));
        }),
        (CVContextData.prototype.lineJoin = function (t) {
          this.stack[this.cArrPos].lineJoin !== t &&
            ((this.currentLineJoin = t),
            (this.stack[this.cArrPos].lineJoin = t));
        }),
        (CVContextData.prototype.miterLimit = function (t) {
          this.stack[this.cArrPos].miterLimit !== t &&
            ((this.currentMiterLimit = t),
            (this.stack[this.cArrPos].miterLimit = t));
        }),
        (CVContextData.prototype.transform = function (t) {
          this.transformMat.cloneFromProps(t);
          var e = this.cTr;
          this.transformMat.multiply(e),
            e.cloneFromProps(this.transformMat.props);
          var r = e.props;
          this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
        }),
        (CVContextData.prototype.opacity = function (t) {
          var e = this.stack[this.cArrPos].opacity;
          (e *= t < 0 ? 0 : t),
            this.stack[this.cArrPos].opacity !== e &&
              (this.currentOpacity !== t &&
                ((this.nativeContext.globalAlpha = t),
                (this.currentOpacity = t)),
              (this.stack[this.cArrPos].opacity = e));
        }),
        (CVContextData.prototype.fill = function (t) {
          this.appliedFillStyle !== this.currentFillStyle &&
            ((this.appliedFillStyle = this.currentFillStyle),
            (this.nativeContext.fillStyle = this.appliedFillStyle)),
            this.nativeContext.fill(t);
        }),
        (CVContextData.prototype.fillRect = function (t, e, r, o) {
          this.appliedFillStyle !== this.currentFillStyle &&
            ((this.appliedFillStyle = this.currentFillStyle),
            (this.nativeContext.fillStyle = this.appliedFillStyle)),
            this.nativeContext.fillRect(t, e, r, o);
        }),
        (CVContextData.prototype.stroke = function () {
          this.appliedStrokeStyle !== this.currentStrokeStyle &&
            ((this.appliedStrokeStyle = this.currentStrokeStyle),
            (this.nativeContext.strokeStyle = this.appliedStrokeStyle)),
            this.appliedLineWidth !== this.currentLineWidth &&
              ((this.appliedLineWidth = this.currentLineWidth),
              (this.nativeContext.lineWidth = this.appliedLineWidth)),
            this.appliedLineCap !== this.currentLineCap &&
              ((this.appliedLineCap = this.currentLineCap),
              (this.nativeContext.lineCap = this.appliedLineCap)),
            this.appliedLineJoin !== this.currentLineJoin &&
              ((this.appliedLineJoin = this.currentLineJoin),
              (this.nativeContext.lineJoin = this.appliedLineJoin)),
            this.appliedMiterLimit !== this.currentMiterLimit &&
              ((this.appliedMiterLimit = this.currentMiterLimit),
              (this.nativeContext.miterLimit = this.appliedMiterLimit)),
            this.nativeContext.stroke();
        }),
        extendPrototype(
          [CanvasRendererBase, ICompElement, CVBaseElement],
          CVCompElement
        ),
        (CVCompElement.prototype.renderInnerContent = function () {
          var t,
            e = this.canvasContext;
          for (
            e.beginPath(),
              e.moveTo(0, 0),
              e.lineTo(this.data.w, 0),
              e.lineTo(this.data.w, this.data.h),
              e.lineTo(0, this.data.h),
              e.lineTo(0, 0),
              e.clip(),
              t = this.layers.length - 1;
            t >= 0;
            t -= 1
          )
            (this.completeLayers || this.elements[t]) &&
              this.elements[t].renderFrame();
        }),
        (CVCompElement.prototype.destroy = function () {
          var t;
          for (t = this.layers.length - 1; t >= 0; t -= 1)
            this.elements[t] && this.elements[t].destroy();
          (this.layers = null), (this.elements = null);
        }),
        (CVCompElement.prototype.createComp = function (t) {
          return new CVCompElement(t, this.globalData, this);
        }),
        extendPrototype([CanvasRendererBase], CanvasRenderer),
        (CanvasRenderer.prototype.createComp = function (t) {
          return new CVCompElement(t, this.globalData, this);
        }),
        (HBaseElement.prototype = {
          checkBlendMode: function () {},
          initRendererElement: function () {
            (this.baseElement = createTag(this.data.tg || "div")),
              this.data.hasMask
                ? ((this.svgElement = createNS("svg")),
                  (this.layerElement = createNS("g")),
                  (this.maskedElement = this.layerElement),
                  this.svgElement.appendChild(this.layerElement),
                  this.baseElement.appendChild(this.svgElement))
                : (this.layerElement = this.baseElement),
              styleDiv(this.baseElement);
          },
          createContainerElements: function () {
            (this.renderableEffectsManager = new CVEffects(this)),
              (this.transformedElement = this.baseElement),
              (this.maskedElement = this.layerElement),
              this.data.ln &&
                this.layerElement.setAttribute("id", this.data.ln),
              this.data.cl &&
                this.layerElement.setAttribute("class", this.data.cl),
              this.data.bm !== 0 && this.setBlendMode();
          },
          renderElement: function () {
            var t = this.transformedElement
              ? this.transformedElement.style
              : {};
            if (this.finalTransform._matMdf) {
              var e = this.finalTransform.mat.toCSS();
              (t.transform = e), (t.webkitTransform = e);
            }
            this.finalTransform._opMdf &&
              (t.opacity = this.finalTransform.mProp.o.v);
          },
          renderFrame: function () {
            this.data.hd ||
              this.hidden ||
              (this.renderTransform(),
              this.renderRenderable(),
              this.renderElement(),
              this.renderInnerContent(),
              this._isFirstFrame && (this._isFirstFrame = !1));
          },
          destroy: function () {
            (this.layerElement = null),
              (this.transformedElement = null),
              this.matteElement && (this.matteElement = null),
              this.maskManager &&
                (this.maskManager.destroy(), (this.maskManager = null));
          },
          createRenderableComponents: function () {
            this.maskManager = new MaskElement(
              this.data,
              this,
              this.globalData
            );
          },
          addEffects: function () {},
          setMatte: function () {},
        }),
        (HBaseElement.prototype.getBaseElement =
          SVGBaseElement.prototype.getBaseElement),
        (HBaseElement.prototype.destroyBaseElement =
          HBaseElement.prototype.destroy),
        (HBaseElement.prototype.buildElementParenting =
          BaseRenderer.prototype.buildElementParenting),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          HSolidElement
        ),
        (HSolidElement.prototype.createContent = function () {
          var t;
          this.data.hasMask
            ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
              t.setAttribute("height", this.data.sh),
              t.setAttribute("fill", this.data.sc),
              this.svgElement.setAttribute("width", this.data.sw),
              this.svgElement.setAttribute("height", this.data.sh))
            : (((t = createTag("div")).style.width = this.data.sw + "px"),
              (t.style.height = this.data.sh + "px"),
              (t.style.backgroundColor = this.data.sc)),
            this.layerElement.appendChild(t);
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HSolidElement,
            SVGShapeElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
          ],
          HShapeElement
        ),
        (HShapeElement.prototype._renderShapeFrame =
          HShapeElement.prototype.renderInnerContent),
        (HShapeElement.prototype.createContent = function () {
          var t;
          if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
            this.layerElement.appendChild(this.shapesContainer),
              (t = this.svgElement);
          else {
            t = createNS("svg");
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute("width", e.w),
              t.setAttribute("height", e.h),
              t.appendChild(this.shapesContainer),
              this.layerElement.appendChild(t);
          }
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            this.shapesContainer,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes(),
            (this.shapeCont = t);
        }),
        (HShapeElement.prototype.getTransformedPoint = function (t, e) {
          var r,
            o = t.length;
          for (r = 0; r < o; r += 1)
            e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
          return e;
        }),
        (HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
          var r,
            o,
            h,
            l,
            y,
            D = t.sh.v,
            j = t.transformers,
            Y = D._length;
          if (!(Y <= 1)) {
            for (r = 0; r < Y - 1; r += 1)
              (o = this.getTransformedPoint(j, D.v[r])),
                (h = this.getTransformedPoint(j, D.o[r])),
                (l = this.getTransformedPoint(j, D.i[r + 1])),
                (y = this.getTransformedPoint(j, D.v[r + 1])),
                this.checkBounds(o, h, l, y, e);
            D.c &&
              ((o = this.getTransformedPoint(j, D.v[r])),
              (h = this.getTransformedPoint(j, D.o[r])),
              (l = this.getTransformedPoint(j, D.i[0])),
              (y = this.getTransformedPoint(j, D.v[0])),
              this.checkBounds(o, h, l, y, e));
          }
        }),
        (HShapeElement.prototype.checkBounds = function (t, e, r, o, h) {
          this.getBoundsOfCurve(t, e, r, o);
          var l = this.shapeBoundingBox;
          (h.x = bmMin(l.left, h.x)),
            (h.xMax = bmMax(l.right, h.xMax)),
            (h.y = bmMin(l.top, h.y)),
            (h.yMax = bmMax(l.bottom, h.yMax));
        }),
        (HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }),
        (HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0,
        }),
        (HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, o) {
          for (
            var h,
              l,
              y,
              D,
              j,
              Y,
              B,
              q = [
                [t[0], o[0]],
                [t[1], o[1]],
              ],
              O = 0;
            O < 2;
            ++O
          )
            (l = 6 * t[O] - 12 * e[O] + 6 * r[O]),
              (h = -3 * t[O] + 9 * e[O] - 9 * r[O] + 3 * o[O]),
              (y = 3 * e[O] - 3 * t[O]),
              (l |= 0),
              (y |= 0),
              ((h |= 0) == 0 && l === 0) ||
                (h === 0
                  ? (D = -y / l) > 0 &&
                    D < 1 &&
                    q[O].push(this.calculateF(D, t, e, r, o, O))
                  : (j = l * l - 4 * y * h) >= 0 &&
                    ((Y = (-l + bmSqrt(j)) / (2 * h)) > 0 &&
                      Y < 1 &&
                      q[O].push(this.calculateF(Y, t, e, r, o, O)),
                    (B = (-l - bmSqrt(j)) / (2 * h)) > 0 &&
                      B < 1 &&
                      q[O].push(this.calculateF(B, t, e, r, o, O))));
          (this.shapeBoundingBox.left = bmMin.apply(null, q[0])),
            (this.shapeBoundingBox.top = bmMin.apply(null, q[1])),
            (this.shapeBoundingBox.right = bmMax.apply(null, q[0])),
            (this.shapeBoundingBox.bottom = bmMax.apply(null, q[1]));
        }),
        (HShapeElement.prototype.calculateF = function (t, e, r, o, h, l) {
          return (
            bmPow(1 - t, 3) * e[l] +
            3 * bmPow(1 - t, 2) * t * r[l] +
            3 * (1 - t) * bmPow(t, 2) * o[l] +
            bmPow(t, 3) * h[l]
          );
        }),
        (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
          var r,
            o = t.length;
          for (r = 0; r < o; r += 1)
            t[r] && t[r].sh
              ? this.calculateShapeBoundingBox(t[r], e)
              : t[r] && t[r].it
              ? this.calculateBoundingBox(t[r].it, e)
              : t[r] &&
                t[r].style &&
                t[r].w &&
                this.expandStrokeBoundingBox(t[r].w, e);
        }),
        (HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
          var r = 0;
          if (t.keyframes) {
            for (var o = 0; o < t.keyframes.length; o += 1) {
              var h = t.keyframes[o].s;
              h > r && (r = h);
            }
            r *= t.mult;
          } else r = t.v * t.mult;
          (e.x -= r), (e.xMax += r), (e.y -= r), (e.yMax += r);
        }),
        (HShapeElement.prototype.currentBoxContains = function (t) {
          return (
            this.currentBBox.x <= t.x &&
            this.currentBBox.y <= t.y &&
            this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
            this.currentBBox.height + this.currentBBox.y >= t.y + t.height
          );
        }),
        (HShapeElement.prototype.renderInnerContent = function () {
          if (
            (this._renderShapeFrame(),
            !this.hidden && (this._isFirstFrame || this._mdf))
          ) {
            var t = this.tempBoundingBox,
              e = 999999;
            if (
              ((t.x = e),
              (t.xMax = -e),
              (t.y = e),
              (t.yMax = -e),
              this.calculateBoundingBox(this.itemsData, t),
              (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
              (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
              this.currentBoxContains(t))
            )
              return;
            var r = !1;
            if (
              (this.currentBBox.w !== t.width &&
                ((this.currentBBox.w = t.width),
                this.shapeCont.setAttribute("width", t.width),
                (r = !0)),
              this.currentBBox.h !== t.height &&
                ((this.currentBBox.h = t.height),
                this.shapeCont.setAttribute("height", t.height),
                (r = !0)),
              r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y)
            ) {
              (this.currentBBox.w = t.width),
                (this.currentBBox.h = t.height),
                (this.currentBBox.x = t.x),
                (this.currentBBox.y = t.y),
                this.shapeCont.setAttribute(
                  "viewBox",
                  this.currentBBox.x +
                    " " +
                    this.currentBBox.y +
                    " " +
                    this.currentBBox.w +
                    " " +
                    this.currentBBox.h
                );
              var o = this.shapeCont.style,
                h =
                  "translate(" +
                  this.currentBBox.x +
                  "px," +
                  this.currentBBox.y +
                  "px)";
              (o.transform = h), (o.webkitTransform = h);
            }
          }
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
            ITextElement,
          ],
          HTextElement
        ),
        (HTextElement.prototype.createContent = function () {
          if (((this.isMasked = this.checkMasks()), this.isMasked)) {
            (this.renderType = "svg"),
              (this.compW = this.comp.data.w),
              (this.compH = this.comp.data.h),
              this.svgElement.setAttribute("width", this.compW),
              this.svgElement.setAttribute("height", this.compH);
            var t = createNS("g");
            this.maskedElement.appendChild(t), (this.innerElem = t);
          } else
            (this.renderType = "html"), (this.innerElem = this.layerElement);
          this.checkParenting();
        }),
        (HTextElement.prototype.buildNewText = function () {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = this.innerElem.style,
            r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
          (e.fill = r),
            (e.color = r),
            t.sc &&
              ((e.stroke = this.buildColor(t.sc)),
              (e.strokeWidth = t.sw + "px"));
          var o,
            h,
            l = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (
              ((e.fontSize = t.finalSize + "px"),
              (e.lineHeight = t.finalSize + "px"),
              l.fClass)
            )
              this.innerElem.className = l.fClass;
            else {
              e.fontFamily = l.fFamily;
              var y = t.fWeight,
                D = t.fStyle;
              (e.fontStyle = D), (e.fontWeight = y);
            }
          var j,
            Y,
            B,
            q = t.l;
          h = q.length;
          var O,
            W = this.mHelper,
            G = "",
            F = 0;
          for (o = 0; o < h; o += 1) {
            if (
              (this.globalData.fontManager.chars
                ? (this.textPaths[F]
                    ? (j = this.textPaths[F])
                    : ((j = createNS("path")).setAttribute(
                        "stroke-linecap",
                        lineCapEnum[1]
                      ),
                      j.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                      j.setAttribute("stroke-miterlimit", "4")),
                  this.isMasked ||
                    (this.textSpans[F]
                      ? (B = (Y = this.textSpans[F]).children[0])
                      : (((Y = createTag("div")).style.lineHeight = 0),
                        (B = createNS("svg")).appendChild(j),
                        styleDiv(Y))))
                : this.isMasked
                ? (j = this.textPaths[F] ? this.textPaths[F] : createNS("text"))
                : this.textSpans[F]
                ? ((Y = this.textSpans[F]), (j = this.textPaths[F]))
                : (styleDiv((Y = createTag("span"))),
                  styleDiv((j = createTag("span"))),
                  Y.appendChild(j)),
              this.globalData.fontManager.chars)
            ) {
              var R,
                U = this.globalData.fontManager.getCharData(
                  t.finalText[o],
                  l.fStyle,
                  this.globalData.fontManager.getFontByName(t.f).fFamily
                );
              if (
                ((R = U ? U.data : null),
                W.reset(),
                R &&
                  R.shapes &&
                  R.shapes.length &&
                  ((O = R.shapes[0].it),
                  W.scale(t.finalSize / 100, t.finalSize / 100),
                  (G = this.createPathShape(W, O)),
                  j.setAttribute("d", G)),
                this.isMasked)
              )
                this.innerElem.appendChild(j);
              else {
                if ((this.innerElem.appendChild(Y), R && R.shapes)) {
                  document.body.appendChild(B);
                  var X = B.getBBox();
                  B.setAttribute("width", X.width + 2),
                    B.setAttribute("height", X.height + 2),
                    B.setAttribute(
                      "viewBox",
                      X.x -
                        1 +
                        " " +
                        (X.y - 1) +
                        " " +
                        (X.width + 2) +
                        " " +
                        (X.height + 2)
                    );
                  var Z = B.style,
                    J = "translate(" + (X.x - 1) + "px," + (X.y - 1) + "px)";
                  (Z.transform = J),
                    (Z.webkitTransform = J),
                    (q[o].yOffset = X.y - 1);
                } else B.setAttribute("width", 1), B.setAttribute("height", 1);
                Y.appendChild(B);
              }
            } else if (
              ((j.textContent = q[o].val),
              j.setAttributeNS(
                "http://www.w3.org/XML/1998/namespace",
                "xml:space",
                "preserve"
              ),
              this.isMasked)
            )
              this.innerElem.appendChild(j);
            else {
              this.innerElem.appendChild(Y);
              var Q = j.style,
                st = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              (Q.transform = st), (Q.webkitTransform = st);
            }
            this.isMasked ? (this.textSpans[F] = j) : (this.textSpans[F] = Y),
              (this.textSpans[F].style.display = "block"),
              (this.textPaths[F] = j),
              (F += 1);
          }
          for (; F < this.textSpans.length; )
            (this.textSpans[F].style.display = "none"), (F += 1);
        }),
        (HTextElement.prototype.renderInnerContent = function () {
          var t;
          if ((this.validateText(), this.data.singleShape)) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute(
                "viewBox",
                -this.finalTransform.mProp.p.v[0] +
                  " " +
                  -this.finalTransform.mProp.p.v[1] +
                  " " +
                  this.compW +
                  " " +
                  this.compH
              ),
                (t = this.svgElement.style);
              var e =
                "translate(" +
                -this.finalTransform.mProp.p.v[0] +
                "px," +
                -this.finalTransform.mProp.p.v[1] +
                "px)";
              (t.transform = e), (t.webkitTransform = e);
            }
          }
          if (
            (this.textAnimator.getMeasures(
              this.textProperty.currentData,
              this.lettersChangedFlag
            ),
            this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
          ) {
            var r,
              o,
              h,
              l,
              y,
              D = 0,
              j = this.textAnimator.renderedLetters,
              Y = this.textProperty.currentData.l;
            for (o = Y.length, r = 0; r < o; r += 1)
              Y[r].n
                ? (D += 1)
                : ((l = this.textSpans[r]),
                  (y = this.textPaths[r]),
                  (h = j[D]),
                  (D += 1),
                  h._mdf.m &&
                    (this.isMasked
                      ? l.setAttribute("transform", h.m)
                      : ((l.style.webkitTransform = h.m),
                        (l.style.transform = h.m))),
                  (l.style.opacity = h.o),
                  h.sw && h._mdf.sw && y.setAttribute("stroke-width", h.sw),
                  h.sc && h._mdf.sc && y.setAttribute("stroke", h.sc),
                  h.fc &&
                    h._mdf.fc &&
                    (y.setAttribute("fill", h.fc), (y.style.color = h.fc)));
            if (
              this.innerElem.getBBox &&
              !this.hidden &&
              (this._isFirstFrame || this._mdf)
            ) {
              var B = this.innerElem.getBBox();
              if (
                (this.currentBBox.w !== B.width &&
                  ((this.currentBBox.w = B.width),
                  this.svgElement.setAttribute("width", B.width)),
                this.currentBBox.h !== B.height &&
                  ((this.currentBBox.h = B.height),
                  this.svgElement.setAttribute("height", B.height)),
                this.currentBBox.w !== B.width + 2 ||
                  this.currentBBox.h !== B.height + 2 ||
                  this.currentBBox.x !== B.x - 1 ||
                  this.currentBBox.y !== B.y - 1)
              ) {
                (this.currentBBox.w = B.width + 2),
                  (this.currentBBox.h = B.height + 2),
                  (this.currentBBox.x = B.x - 1),
                  (this.currentBBox.y = B.y - 1),
                  this.svgElement.setAttribute(
                    "viewBox",
                    this.currentBBox.x +
                      " " +
                      this.currentBBox.y +
                      " " +
                      this.currentBBox.w +
                      " " +
                      this.currentBBox.h
                  ),
                  (t = this.svgElement.style);
                var q =
                  "translate(" +
                  this.currentBBox.x +
                  "px," +
                  this.currentBBox.y +
                  "px)";
                (t.transform = q), (t.webkitTransform = q);
              }
            }
          }
        }),
        extendPrototype(
          [BaseElement, FrameElement, HierarchyElement],
          HCameraElement
        ),
        (HCameraElement.prototype.setup = function () {
          var t,
            e,
            r,
            o,
            h = this.comp.threeDElements.length;
          for (t = 0; t < h; t += 1)
            if ((e = this.comp.threeDElements[t]).type === "3d") {
              (r = e.perspectiveElem.style), (o = e.container.style);
              var l = this.pe.v + "px",
                y = "0px 0px 0px",
                D = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              (r.perspective = l),
                (r.webkitPerspective = l),
                (o.transformOrigin = y),
                (o.mozTransformOrigin = y),
                (o.webkitTransformOrigin = y),
                (r.transform = D),
                (r.webkitTransform = D);
            }
        }),
        (HCameraElement.prototype.createElements = function () {}),
        (HCameraElement.prototype.hide = function () {}),
        (HCameraElement.prototype.renderFrame = function () {
          var t,
            e,
            r = this._isFirstFrame;
          if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; t < e; t += 1)
              r = this.hierarchy[t].finalTransform.mProp._mdf || r;
          if (
            r ||
            this.pe._mdf ||
            (this.p && this.p._mdf) ||
            (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
            this.rx._mdf ||
            this.ry._mdf ||
            this.rz._mdf ||
            this.or._mdf ||
            (this.a && this.a._mdf)
          ) {
            if ((this.mat.reset(), this.hierarchy))
              for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                var o = this.hierarchy[t].finalTransform.mProp;
                this.mat.translate(-o.p.v[0], -o.p.v[1], o.p.v[2]),
                  this.mat
                    .rotateX(-o.or.v[0])
                    .rotateY(-o.or.v[1])
                    .rotateZ(o.or.v[2]),
                  this.mat.rotateX(-o.rx.v).rotateY(-o.ry.v).rotateZ(o.rz.v),
                  this.mat.scale(1 / o.s.v[0], 1 / o.s.v[1], 1 / o.s.v[2]),
                  this.mat.translate(o.a.v[0], o.a.v[1], o.a.v[2]);
              }
            if (
              (this.p
                ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
              this.a)
            ) {
              var h;
              h = this.p
                ? [
                    this.p.v[0] - this.a.v[0],
                    this.p.v[1] - this.a.v[1],
                    this.p.v[2] - this.a.v[2],
                  ]
                : [
                    this.px.v - this.a.v[0],
                    this.py.v - this.a.v[1],
                    this.pz.v - this.a.v[2],
                  ];
              var l = Math.sqrt(
                  Math.pow(h[0], 2) + Math.pow(h[1], 2) + Math.pow(h[2], 2)
                ),
                y = [h[0] / l, h[1] / l, h[2] / l],
                D = Math.sqrt(y[2] * y[2] + y[0] * y[0]),
                j = Math.atan2(y[1], D),
                Y = Math.atan2(y[0], -y[2]);
              this.mat.rotateY(Y).rotateX(-j);
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
              this.mat
                .rotateX(-this.or.v[0])
                .rotateY(-this.or.v[1])
                .rotateZ(this.or.v[2]),
              this.mat.translate(
                this.globalData.compSize.w / 2,
                this.globalData.compSize.h / 2,
                0
              ),
              this.mat.translate(0, 0, this.pe.v);
            var B = !this._prevMat.equals(this.mat);
            if ((B || this.pe._mdf) && this.comp.threeDElements) {
              var q, O, W;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ((q = this.comp.threeDElements[t]).type === "3d") {
                  if (B) {
                    var G = this.mat.toCSS();
                    ((W = q.container.style).transform = G),
                      (W.webkitTransform = G);
                  }
                  this.pe._mdf &&
                    (((O = q.perspectiveElem.style).perspective =
                      this.pe.v + "px"),
                    (O.webkitPerspective = this.pe.v + "px"));
                }
              this.mat.clone(this._prevMat);
            }
          }
          this._isFirstFrame = !1;
        }),
        (HCameraElement.prototype.prepareFrame = function (t) {
          this.prepareProperties(t, !0);
        }),
        (HCameraElement.prototype.destroy = function () {}),
        (HCameraElement.prototype.getBaseElement = function () {
          return null;
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HBaseElement,
            HSolidElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
          ],
          HImageElement
        ),
        (HImageElement.prototype.createContent = function () {
          var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image();
          this.data.hasMask
            ? ((this.imageElem = createNS("image")),
              this.imageElem.setAttribute("width", this.assetData.w + "px"),
              this.imageElem.setAttribute("height", this.assetData.h + "px"),
              this.imageElem.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "href",
                t
              ),
              this.layerElement.appendChild(this.imageElem),
              this.baseElement.setAttribute("width", this.assetData.w),
              this.baseElement.setAttribute("height", this.assetData.h))
            : this.layerElement.appendChild(e),
            (e.crossOrigin = "anonymous"),
            (e.src = t),
            this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
        }),
        extendPrototype([BaseRenderer], HybridRendererBase),
        (HybridRendererBase.prototype.buildItem =
          SVGRenderer.prototype.buildItem),
        (HybridRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; )
            this.pendingElements.pop().checkParenting();
        }),
        (HybridRendererBase.prototype.appendElementInPos = function (t, e) {
          var r = t.getBaseElement();
          if (r) {
            var o = this.layers[e];
            if (o.ddd && this.supports3d) this.addTo3dContainer(r, e);
            else if (this.threeDElements) this.addTo3dContainer(r, e);
            else {
              for (var h, l, y = 0; y < e; )
                this.elements[y] &&
                  this.elements[y] !== !0 &&
                  this.elements[y].getBaseElement &&
                  ((l = this.elements[y]),
                  (h =
                    (this.layers[y].ddd
                      ? this.getThreeDContainerByPos(y)
                      : l.getBaseElement()) || h)),
                  (y += 1);
              h
                ? (o.ddd && this.supports3d) ||
                  this.layerElement.insertBefore(r, h)
                : (o.ddd && this.supports3d) ||
                  this.layerElement.appendChild(r);
            }
          }
        }),
        (HybridRendererBase.prototype.createShape = function (t) {
          return this.supports3d
            ? new HShapeElement(t, this.globalData, this)
            : new SVGShapeElement(t, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createText = function (t) {
          return this.supports3d
            ? new HTextElement(t, this.globalData, this)
            : new SVGTextLottieElement(t, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createCamera = function (t) {
          return (
            (this.camera = new HCameraElement(t, this.globalData, this)),
            this.camera
          );
        }),
        (HybridRendererBase.prototype.createImage = function (t) {
          return this.supports3d
            ? new HImageElement(t, this.globalData, this)
            : new IImageElement(t, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createSolid = function (t) {
          return this.supports3d
            ? new HSolidElement(t, this.globalData, this)
            : new ISolidElement(t, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createNull =
          SVGRenderer.prototype.createNull),
        (HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
          for (var e = 0, r = this.threeDElements.length; e < r; ) {
            if (
              this.threeDElements[e].startPos <= t &&
              this.threeDElements[e].endPos >= t
            )
              return this.threeDElements[e].perspectiveElem;
            e += 1;
          }
          return null;
        }),
        (HybridRendererBase.prototype.createThreeDContainer = function (t, e) {
          var r,
            o,
            h = createTag("div");
          styleDiv(h);
          var l = createTag("div");
          if ((styleDiv(l), e === "3d")) {
            ((r = h.style).width = this.globalData.compSize.w + "px"),
              (r.height = this.globalData.compSize.h + "px");
            var y = "50% 50%";
            (r.webkitTransformOrigin = y),
              (r.mozTransformOrigin = y),
              (r.transformOrigin = y);
            var D = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            ((o = l.style).transform = D), (o.webkitTransform = D);
          }
          h.appendChild(l);
          var j = {
            container: l,
            perspectiveElem: h,
            startPos: t,
            endPos: t,
            type: e,
          };
          return this.threeDElements.push(j), j;
        }),
        (HybridRendererBase.prototype.build3dContainers = function () {
          var t,
            e,
            r = this.layers.length,
            o = "";
          for (t = 0; t < r; t += 1)
            this.layers[t].ddd && this.layers[t].ty !== 3
              ? (o !== "3d" &&
                  ((o = "3d"), (e = this.createThreeDContainer(t, "3d"))),
                (e.endPos = Math.max(e.endPos, t)))
              : (o !== "2d" &&
                  ((o = "2d"), (e = this.createThreeDContainer(t, "2d"))),
                (e.endPos = Math.max(e.endPos, t)));
          for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1)
            this.resizerElem.appendChild(
              this.threeDElements[t].perspectiveElem
            );
        }),
        (HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
          for (var r = 0, o = this.threeDElements.length; r < o; ) {
            if (e <= this.threeDElements[r].endPos) {
              for (var h, l = this.threeDElements[r].startPos; l < e; )
                this.elements[l] &&
                  this.elements[l].getBaseElement &&
                  (h = this.elements[l].getBaseElement()),
                  (l += 1);
              h
                ? this.threeDElements[r].container.insertBefore(t, h)
                : this.threeDElements[r].container.appendChild(t);
              break;
            }
            r += 1;
          }
        }),
        (HybridRendererBase.prototype.configAnimation = function (t) {
          var e = createTag("div"),
            r = this.animationItem.wrapper,
            o = e.style;
          (o.width = t.w + "px"),
            (o.height = t.h + "px"),
            (this.resizerElem = e),
            styleDiv(e),
            (o.transformStyle = "flat"),
            (o.mozTransformStyle = "flat"),
            (o.webkitTransformStyle = "flat"),
            this.renderConfig.className &&
              e.setAttribute("class", this.renderConfig.className),
            r.appendChild(e),
            (o.overflow = "hidden");
          var h = createNS("svg");
          h.setAttribute("width", "1"),
            h.setAttribute("height", "1"),
            styleDiv(h),
            this.resizerElem.appendChild(h);
          var l = createNS("defs");
          h.appendChild(l),
            (this.data = t),
            this.setupGlobalData(t, h),
            (this.globalData.defs = l),
            (this.layers = t.layers),
            (this.layerElement = this.resizerElem),
            this.build3dContainers(),
            this.updateContainerSize();
        }),
        (HybridRendererBase.prototype.destroy = function () {
          var t;
          this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = ""),
            (this.animationItem.container = null),
            (this.globalData.defs = null);
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1)
            this.elements[t] &&
              this.elements[t].destroy &&
              this.elements[t].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (HybridRendererBase.prototype.updateContainerSize = function () {
          var t,
            e,
            r,
            o,
            h = this.animationItem.wrapper.offsetWidth,
            l = this.animationItem.wrapper.offsetHeight,
            y = h / l;
          this.globalData.compSize.w / this.globalData.compSize.h > y
            ? ((t = h / this.globalData.compSize.w),
              (e = h / this.globalData.compSize.w),
              (r = 0),
              (o =
                (l -
                  this.globalData.compSize.h *
                    (h / this.globalData.compSize.w)) /
                2))
            : ((t = l / this.globalData.compSize.h),
              (e = l / this.globalData.compSize.h),
              (r =
                (h -
                  this.globalData.compSize.w *
                    (l / this.globalData.compSize.h)) /
                2),
              (o = 0));
          var D = this.resizerElem.style;
          (D.webkitTransform =
            "matrix3d(" +
            t +
            ",0,0,0,0," +
            e +
            ",0,0,0,0,1,0," +
            r +
            "," +
            o +
            ",0,1)"),
            (D.transform = D.webkitTransform);
        }),
        (HybridRendererBase.prototype.renderFrame =
          SVGRenderer.prototype.renderFrame),
        (HybridRendererBase.prototype.hide = function () {
          this.resizerElem.style.display = "none";
        }),
        (HybridRendererBase.prototype.show = function () {
          this.resizerElem.style.display = "block";
        }),
        (HybridRendererBase.prototype.initItems = function () {
          if ((this.buildAllItems(), this.camera)) this.camera.setup();
          else {
            var t,
              e = this.globalData.compSize.w,
              r = this.globalData.compSize.h,
              o = this.threeDElements.length;
            for (t = 0; t < o; t += 1) {
              var h = this.threeDElements[t].perspectiveElem.style;
              (h.webkitPerspective =
                Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px"),
                (h.perspective = h.webkitPerspective);
            }
          }
        }),
        (HybridRendererBase.prototype.searchExtraCompositions = function (t) {
          var e,
            r = t.length,
            o = createTag("div");
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var h = this.createComp(t[e], o, this.globalData.comp, null);
              h.initExpressions(),
                this.globalData.projectInterface.registerComposition(h);
            }
        }),
        extendPrototype(
          [HybridRendererBase, ICompElement, HBaseElement],
          HCompElement
        ),
        (HCompElement.prototype._createBaseContainerElements =
          HCompElement.prototype.createContainerElements),
        (HCompElement.prototype.createContainerElements = function () {
          this._createBaseContainerElements(),
            this.data.hasMask
              ? (this.svgElement.setAttribute("width", this.data.w),
                this.svgElement.setAttribute("height", this.data.h),
                (this.transformedElement = this.baseElement))
              : (this.transformedElement = this.layerElement);
        }),
        (HCompElement.prototype.addTo3dContainer = function (t, e) {
          for (var r, o = 0; o < e; )
            this.elements[o] &&
              this.elements[o].getBaseElement &&
              (r = this.elements[o].getBaseElement()),
              (o += 1);
          r
            ? this.layerElement.insertBefore(t, r)
            : this.layerElement.appendChild(t);
        }),
        (HCompElement.prototype.createComp = function (t) {
          return this.supports3d
            ? new HCompElement(t, this.globalData, this)
            : new SVGCompElement(t, this.globalData, this);
        }),
        extendPrototype([HybridRendererBase], HybridRenderer),
        (HybridRenderer.prototype.createComp = function (t) {
          return this.supports3d
            ? new HCompElement(t, this.globalData, this)
            : new SVGCompElement(t, this.globalData, this);
        });
      var CompExpressionInterface = function (t) {
        function e(r) {
          for (var o = 0, h = t.layers.length; o < h; ) {
            if (t.layers[o].nm === r || t.layers[o].ind === r)
              return t.elements[o].layerInterface;
            o += 1;
          }
          return null;
        }
        return (
          Object.defineProperty(e, "_name", { value: t.data.nm }),
          (e.layer = e),
          (e.pixelAspect = 1),
          (e.height = t.data.h || t.globalData.compSize.h),
          (e.width = t.data.w || t.globalData.compSize.w),
          (e.pixelAspect = 1),
          (e.frameDuration = 1 / t.globalData.frameRate),
          (e.displayStartTime = 0),
          (e.numLayers = t.layers.length),
          e
        );
      };
      function _typeof$2(t) {
        return (
          (_typeof$2 =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          _typeof$2(t)
        );
      }
      function seedRandom(t, e) {
        var r = this,
          o = 256,
          h = e.pow(o, 6),
          l = e.pow(2, 52),
          y = 2 * l,
          D = 255;
        function j(W) {
          var G,
            F = W.length,
            R = this,
            U = 0,
            X = (R.i = R.j = 0),
            Z = (R.S = []);
          for (F || (W = [F++]); U < o; ) Z[U] = U++;
          for (U = 0; U < o; U++)
            (Z[U] = Z[(X = D & (X + W[U % F] + (G = Z[U])))]), (Z[X] = G);
          R.g = function (J) {
            for (var Q, st = 0, it = R.i, et = R.j, at = R.S; J--; )
              (Q = at[(it = D & (it + 1))]),
                (st =
                  st * o +
                  at[D & ((at[it] = at[(et = D & (et + Q))]) + (at[et] = Q))]);
            return (R.i = it), (R.j = et), st;
          };
        }
        function Y(W, G) {
          return (G.i = W.i), (G.j = W.j), (G.S = W.S.slice()), G;
        }
        function B(W, G) {
          var F,
            R = [],
            U = _typeof$2(W);
          if (G && U == "object")
            for (F in W)
              try {
                R.push(B(W[F], G - 1));
              } catch {}
          return R.length ? R : U == "string" ? W : W + "\0";
        }
        function q(W, G) {
          for (var F, R = W + "", U = 0; U < R.length; )
            G[D & U] = D & ((F ^= 19 * G[D & U]) + R.charCodeAt(U++));
          return O(G);
        }
        function O(W) {
          return String.fromCharCode.apply(0, W);
        }
        (e.seedrandom = function (W, G, F) {
          var R = [],
            U = q(
              B(
                (G = G === !0 ? { entropy: !0 } : G || {}).entropy
                  ? [W, O(t)]
                  : W === null
                  ? (function () {
                      try {
                        var J = new Uint8Array(o);
                        return (
                          (r.crypto || r.msCrypto).getRandomValues(J), O(J)
                        );
                      } catch {
                        var Q = r.navigator,
                          st = Q && Q.plugins;
                        return [+new Date(), r, st, r.screen, O(t)];
                      }
                    })()
                  : W,
                3
              ),
              R
            ),
            X = new j(R),
            Z = function () {
              for (var J = X.g(6), Q = h, st = 0; J < l; )
                (J = (J + st) * o), (Q *= o), (st = X.g(1));
              for (; J >= y; ) (J /= 2), (Q /= 2), (st >>>= 1);
              return (J + st) / Q;
            };
          return (
            (Z.int32 = function () {
              return 0 | X.g(4);
            }),
            (Z.quick = function () {
              return X.g(4) / 4294967296;
            }),
            (Z.double = Z),
            q(O(X.S), t),
            (
              G.pass ||
              F ||
              function (J, Q, st, it) {
                return (
                  it &&
                    (it.S && Y(it, X),
                    (J.state = function () {
                      return Y(X, {});
                    })),
                  st ? ((e.random = J), Q) : J
                );
              }
            )(Z, U, "global" in G ? G.global : this == e, G.state)
          );
        }),
          q(e.random(), t);
      }
      function initialize$2(t) {
        seedRandom([], t);
      }
      var propTypes = { SHAPE: "shape" };
      function _typeof$1(t) {
        return (
          (_typeof$1 =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          _typeof$1(t)
        );
      }
      var ExpressionManager = (function () {
          var ob = {},
            Math = BMMath,
            window = null,
            document = null,
            XMLHttpRequest = null,
            fetch = null,
            frames = null,
            _lottieGlobal = {};
          function resetFrame() {
            _lottieGlobal = {};
          }
          function $bm_isInstanceOfArray(t) {
            return t.constructor === Array || t.constructor === Float32Array;
          }
          function isNumerable(t, e) {
            return (
              t === "number" ||
              e instanceof Number ||
              t === "boolean" ||
              t === "string"
            );
          }
          function $bm_neg(t) {
            var e = _typeof$1(t);
            if (e === "number" || t instanceof Number || e === "boolean")
              return -t;
            if ($bm_isInstanceOfArray(t)) {
              var r,
                o = t.length,
                h = [];
              for (r = 0; r < o; r += 1) h[r] = -t[r];
              return h;
            }
            return t.propType ? t.v : -t;
          }
          initialize$2(BMMath);
          var easeInBez = BezierFactory.getBezierEasing(
              0.333,
              0,
              0.833,
              0.833,
              "easeIn"
            ).get,
            easeOutBez = BezierFactory.getBezierEasing(
              0.167,
              0.167,
              0.667,
              1,
              "easeOut"
            ).get,
            easeInOutBez = BezierFactory.getBezierEasing(
              0.33,
              0,
              0.667,
              1,
              "easeInOut"
            ).get;
          function sum(t, e) {
            var r = _typeof$1(t),
              o = _typeof$1(e);
            if (
              (isNumerable(r, t) && isNumerable(o, e)) ||
              r === "string" ||
              o === "string"
            )
              return t + e;
            if ($bm_isInstanceOfArray(t) && isNumerable(o, e))
              return ((t = t.slice(0))[0] += e), t;
            if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
              return ((e = e.slice(0))[0] = t + e[0]), e;
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
              for (
                var h = 0, l = t.length, y = e.length, D = [];
                h < l || h < y;

              )
                (typeof t[h] == "number" || t[h] instanceof Number) &&
                (typeof e[h] == "number" || e[h] instanceof Number)
                  ? (D[h] = t[h] + e[h])
                  : (D[h] = e[h] === void 0 ? t[h] : t[h] || e[h]),
                  (h += 1);
              return D;
            }
            return 0;
          }
          var add = sum;
          function sub(t, e) {
            var r = _typeof$1(t),
              o = _typeof$1(e);
            if (isNumerable(r, t) && isNumerable(o, e))
              return (
                r === "string" && (t = parseInt(t, 10)),
                o === "string" && (e = parseInt(e, 10)),
                t - e
              );
            if ($bm_isInstanceOfArray(t) && isNumerable(o, e))
              return ((t = t.slice(0))[0] -= e), t;
            if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
              return ((e = e.slice(0))[0] = t - e[0]), e;
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
              for (
                var h = 0, l = t.length, y = e.length, D = [];
                h < l || h < y;

              )
                (typeof t[h] == "number" || t[h] instanceof Number) &&
                (typeof e[h] == "number" || e[h] instanceof Number)
                  ? (D[h] = t[h] - e[h])
                  : (D[h] = e[h] === void 0 ? t[h] : t[h] || e[h]),
                  (h += 1);
              return D;
            }
            return 0;
          }
          function mul(t, e) {
            var r,
              o,
              h,
              l = _typeof$1(t),
              y = _typeof$1(e);
            if (isNumerable(l, t) && isNumerable(y, e)) return t * e;
            if ($bm_isInstanceOfArray(t) && isNumerable(y, e)) {
              for (
                h = t.length, r = createTypedArray("float32", h), o = 0;
                o < h;
                o += 1
              )
                r[o] = t[o] * e;
              return r;
            }
            if (isNumerable(l, t) && $bm_isInstanceOfArray(e)) {
              for (
                h = e.length, r = createTypedArray("float32", h), o = 0;
                o < h;
                o += 1
              )
                r[o] = t * e[o];
              return r;
            }
            return 0;
          }
          function div(t, e) {
            var r,
              o,
              h,
              l = _typeof$1(t),
              y = _typeof$1(e);
            if (isNumerable(l, t) && isNumerable(y, e)) return t / e;
            if ($bm_isInstanceOfArray(t) && isNumerable(y, e)) {
              for (
                h = t.length, r = createTypedArray("float32", h), o = 0;
                o < h;
                o += 1
              )
                r[o] = t[o] / e;
              return r;
            }
            if (isNumerable(l, t) && $bm_isInstanceOfArray(e)) {
              for (
                h = e.length, r = createTypedArray("float32", h), o = 0;
                o < h;
                o += 1
              )
                r[o] = t / e[o];
              return r;
            }
            return 0;
          }
          function mod(t, e) {
            return (
              typeof t == "string" && (t = parseInt(t, 10)),
              typeof e == "string" && (e = parseInt(e, 10)),
              t % e
            );
          }
          var $bm_sum = sum,
            $bm_sub = sub,
            $bm_mul = mul,
            $bm_div = div,
            $bm_mod = mod;
          function clamp(t, e, r) {
            if (e > r) {
              var o = r;
              (r = e), (e = o);
            }
            return Math.min(Math.max(t, e), r);
          }
          function radiansToDegrees(t) {
            return t / degToRads;
          }
          var radians_to_degrees = radiansToDegrees;
          function degreesToRadians(t) {
            return t * degToRads;
          }
          var degrees_to_radians = radiansToDegrees,
            helperLengthArray = [0, 0, 0, 0, 0, 0];
          function length(t, e) {
            if (typeof t == "number" || t instanceof Number)
              return (e = e || 0), Math.abs(t - e);
            var r;
            e || (e = helperLengthArray);
            var o = Math.min(t.length, e.length),
              h = 0;
            for (r = 0; r < o; r += 1) h += Math.pow(e[r] - t[r], 2);
            return Math.sqrt(h);
          }
          function normalize(t) {
            return div(t, length(t));
          }
          function rgbToHsl(t) {
            var e,
              r,
              o = t[0],
              h = t[1],
              l = t[2],
              y = Math.max(o, h, l),
              D = Math.min(o, h, l),
              j = (y + D) / 2;
            if (y === D) (e = 0), (r = 0);
            else {
              var Y = y - D;
              switch (((r = j > 0.5 ? Y / (2 - y - D) : Y / (y + D)), y)) {
                case o:
                  e = (h - l) / Y + (h < l ? 6 : 0);
                  break;
                case h:
                  e = (l - o) / Y + 2;
                  break;
                case l:
                  e = (o - h) / Y + 4;
              }
              e /= 6;
            }
            return [e, r, j, t[3]];
          }
          function hue2rgb(t, e, r) {
            return (
              r < 0 && (r += 1),
              r > 1 && (r -= 1),
              r < 1 / 6
                ? t + 6 * (e - t) * r
                : r < 0.5
                ? e
                : r < 2 / 3
                ? t + (e - t) * (2 / 3 - r) * 6
                : t
            );
          }
          function hslToRgb(t) {
            var e,
              r,
              o,
              h = t[0],
              l = t[1],
              y = t[2];
            if (l === 0) (e = y), (o = y), (r = y);
            else {
              var D = y < 0.5 ? y * (1 + l) : y + l - y * l,
                j = 2 * y - D;
              (e = hue2rgb(j, D, h + 1 / 3)),
                (r = hue2rgb(j, D, h)),
                (o = hue2rgb(j, D, h - 1 / 3));
            }
            return [e, r, o, t[3]];
          }
          function linear(t, e, r, o, h) {
            if (
              ((o !== void 0 && h !== void 0) ||
                ((o = e), (h = r), (e = 0), (r = 1)),
              r < e)
            ) {
              var l = r;
              (r = e), (e = l);
            }
            if (t <= e) return o;
            if (t >= r) return h;
            var y,
              D = r === e ? 0 : (t - e) / (r - e);
            if (!o.length) return o + (h - o) * D;
            var j = o.length,
              Y = createTypedArray("float32", j);
            for (y = 0; y < j; y += 1) Y[y] = o[y] + (h[y] - o[y]) * D;
            return Y;
          }
          function random(t, e) {
            if (
              (e === void 0 &&
                (t === void 0 ? ((t = 0), (e = 1)) : ((e = t), (t = void 0))),
              e.length)
            ) {
              var r,
                o = e.length;
              t || (t = createTypedArray("float32", o));
              var h = createTypedArray("float32", o),
                l = BMMath.random();
              for (r = 0; r < o; r += 1) h[r] = t[r] + l * (e[r] - t[r]);
              return h;
            }
            return t === void 0 && (t = 0), t + BMMath.random() * (e - t);
          }
          function createPath(t, e, r, o) {
            var h,
              l = t.length,
              y = shapePool.newElement();
            y.setPathData(!!o, l);
            var D,
              j,
              Y = [0, 0];
            for (h = 0; h < l; h += 1)
              (D = e && e[h] ? e[h] : Y),
                (j = r && r[h] ? r[h] : Y),
                y.setTripleAt(
                  t[h][0],
                  t[h][1],
                  j[0] + t[h][0],
                  j[1] + t[h][1],
                  D[0] + t[h][0],
                  D[1] + t[h][1],
                  h,
                  !0
                );
            return y;
          }
          function initiateExpression(elem, data, property) {
            function noOp(t) {
              return t;
            }
            if (!elem.globalData.renderConfig.runExpressions) return noOp;
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = val.indexOf("random") !== -1,
              elemType = elem.data.ty,
              transform,
              $bm_transform,
              content,
              effect,
              thisProperty = property;
            (thisProperty.valueAtTime = thisProperty.getValueAtTime),
              Object.defineProperty(thisProperty, "value", {
                get: function () {
                  return thisProperty.v;
                },
              }),
              (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
              (elem.comp.displayStartTime = 0);
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
              outPoint = elem.data.op / elem.comp.globalData.frameRate,
              width = elem.data.sw ? elem.data.sw : 0,
              height = elem.data.sh ? elem.data.sh : 0,
              name = elem.data.nm,
              loopIn,
              loop_in,
              loopOut,
              loop_out,
              smooth,
              toWorld,
              fromWorld,
              fromComp,
              toComp,
              fromCompToSurface,
              position,
              rotation,
              anchorPoint,
              scale,
              thisLayer,
              thisComp,
              mask,
              valueAtTime,
              velocityAtTime,
              scoped_bm_rt,
              expression_function = eval(
                "[function _expression_function(){" +
                  val +
                  ";scoped_bm_rt=$bm_rt}]"
              )[0],
              numKeys = property.kf ? data.k.length : 0,
              active = !this.data || this.data.hd !== !0,
              wiggle = function (t, e) {
                var r,
                  o,
                  h = this.pv.length ? this.pv.length : 1,
                  l = createTypedArray("float32", h),
                  y = Math.floor(5 * time);
                for (r = 0, o = 0; r < y; ) {
                  for (o = 0; o < h; o += 1)
                    l[o] += -e + 2 * e * BMMath.random();
                  r += 1;
                }
                var D = 5 * time,
                  j = D - Math.floor(D),
                  Y = createTypedArray("float32", h);
                if (h > 1) {
                  for (o = 0; o < h; o += 1)
                    Y[o] =
                      this.pv[o] + l[o] + (-e + 2 * e * BMMath.random()) * j;
                  return Y;
                }
                return this.pv + l[0] + (-e + 2 * e * BMMath.random()) * j;
              }.bind(this);
            function loopInDuration(t, e) {
              return loopIn(t, e, !0);
            }
            function loopOutDuration(t, e) {
              return loopOut(t, e, !0);
            }
            thisProperty.loopIn &&
              ((loopIn = thisProperty.loopIn.bind(thisProperty)),
              (loop_in = loopIn)),
              thisProperty.loopOut &&
                ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                (loop_out = loopOut)),
              thisProperty.smooth &&
                (smooth = thisProperty.smooth.bind(thisProperty)),
              this.getValueAtTime &&
                (valueAtTime = this.getValueAtTime.bind(this)),
              this.getVelocityAtTime &&
                (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(
                elem.comp.globalData.projectInterface
              ),
              time,
              velocity,
              value,
              text,
              textIndex,
              textTotal,
              selectorValue;
            function lookAt(t, e) {
              var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                o =
                  Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) /
                  degToRads;
              return [-Math.atan2(r[1], r[2]) / degToRads, o, 0];
            }
            function easeOut(t, e, r, o, h) {
              return applyEase(easeOutBez, t, e, r, o, h);
            }
            function easeIn(t, e, r, o, h) {
              return applyEase(easeInBez, t, e, r, o, h);
            }
            function ease(t, e, r, o, h) {
              return applyEase(easeInOutBez, t, e, r, o, h);
            }
            function applyEase(t, e, r, o, h, l) {
              h === void 0 ? ((h = r), (l = o)) : (e = (e - r) / (o - r)),
                e > 1 ? (e = 1) : e < 0 && (e = 0);
              var y = t(e);
              if ($bm_isInstanceOfArray(h)) {
                var D,
                  j = h.length,
                  Y = createTypedArray("float32", j);
                for (D = 0; D < j; D += 1) Y[D] = (l[D] - h[D]) * y + h[D];
                return Y;
              }
              return (l - h) * y + h;
            }
            function nearestKey(t) {
              var e,
                r,
                o,
                h = data.k.length;
              if (data.k.length && typeof data.k[0] != "number")
                if (
                  ((r = -1),
                  (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                )
                  (r = 1), (o = data.k[0].t);
                else {
                  for (e = 0; e < h - 1; e += 1) {
                    if (t === data.k[e].t) {
                      (r = e + 1), (o = data.k[e].t);
                      break;
                    }
                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                      t - data.k[e].t > data.k[e + 1].t - t
                        ? ((r = e + 2), (o = data.k[e + 1].t))
                        : ((r = e + 1), (o = data.k[e].t));
                      break;
                    }
                  }
                  r === -1 && ((r = e + 1), (o = data.k[e].t));
                }
              else (r = 0), (o = 0);
              var l = {};
              return (
                (l.index = r), (l.time = o / elem.comp.globalData.frameRate), l
              );
            }
            function key(t) {
              var e, r, o;
              if (!data.k.length || typeof data.k[0] == "number")
                throw new Error("The property has no keyframe at index " + t);
              (t -= 1),
                (e = {
                  time: data.k[t].t / elem.comp.globalData.frameRate,
                  value: [],
                });
              var h = Object.prototype.hasOwnProperty.call(data.k[t], "s")
                ? data.k[t].s
                : data.k[t - 1].e;
              for (o = h.length, r = 0; r < o; r += 1)
                (e[r] = h[r]), (e.value[r] = h[r]);
              return e;
            }
            function framesToTime(t, e) {
              return e || (e = elem.comp.globalData.frameRate), t / e;
            }
            function timeToFrames(t, e) {
              return (
                t || t === 0 || (t = time),
                e || (e = elem.comp.globalData.frameRate),
                t * e
              );
            }
            function seedRandom(t) {
              BMMath.seedrandom(randSeed + t);
            }
            function sourceRectAtTime() {
              return elem.sourceRectAtTime();
            }
            function substring(t, e) {
              return typeof value == "string"
                ? e === void 0
                  ? value.substring(t)
                  : value.substring(t, e)
                : "";
            }
            function substr(t, e) {
              return typeof value == "string"
                ? e === void 0
                  ? value.substr(t)
                  : value.substr(t, e)
                : "";
            }
            function posterizeTime(t) {
              (time = t === 0 ? 0 : Math.floor(time * t) / t),
                (value = valueAtTime(time));
            }
            var index = elem.data.ind;
            !elem.hierarchy || elem.hierarchy.length;
            var parent,
              randSeed = Math.floor(1e6 * Math.random()),
              globalData = elem.globalData;
            function executeExpression(t) {
              return (
                (value = t),
                this.frameExpressionId === elem.globalData.frameId &&
                this.propType !== "textSelector"
                  ? value
                  : (this.propType === "textSelector" &&
                      ((textIndex = this.textIndex),
                      (textTotal = this.textTotal),
                      (selectorValue = this.selectorValue)),
                    thisLayer ||
                      ((text = elem.layerInterface.text),
                      (thisLayer = elem.layerInterface),
                      (thisComp = elem.comp.compInterface),
                      (toWorld = thisLayer.toWorld.bind(thisLayer)),
                      (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                      (fromComp = thisLayer.fromComp.bind(thisLayer)),
                      (toComp = thisLayer.toComp.bind(thisLayer)),
                      (mask = thisLayer.mask
                        ? thisLayer.mask.bind(thisLayer)
                        : null),
                      (fromCompToSurface = fromComp)),
                    transform ||
                      ((transform = elem.layerInterface(
                        "ADBE Transform Group"
                      )),
                      ($bm_transform = transform),
                      transform && (anchorPoint = transform.anchorPoint)),
                    elemType !== 4 ||
                      content ||
                      (content = thisLayer("ADBE Root Vectors Group")),
                    effect || (effect = thisLayer(4)),
                    !(!elem.hierarchy || !elem.hierarchy.length) &&
                      !parent &&
                      (parent = elem.hierarchy[0].layerInterface),
                    (time =
                      this.comp.renderedFrame / this.comp.globalData.frameRate),
                    _needsRandom && seedRandom(randSeed + time),
                    needsVelocity && (velocity = velocityAtTime(time)),
                    expression_function(),
                    (this.frameExpressionId = elem.globalData.frameId),
                    (scoped_bm_rt =
                      scoped_bm_rt.propType === propTypes.SHAPE
                        ? scoped_bm_rt.v
                        : scoped_bm_rt))
              );
            }
            return (
              (executeExpression.__preventDeadCodeRemoval = [
                $bm_transform,
                anchorPoint,
                time,
                velocity,
                inPoint,
                outPoint,
                width,
                height,
                name,
                loop_in,
                loop_out,
                smooth,
                toComp,
                fromCompToSurface,
                toWorld,
                fromWorld,
                mask,
                position,
                rotation,
                scale,
                thisComp,
                numKeys,
                active,
                wiggle,
                loopInDuration,
                loopOutDuration,
                comp,
                lookAt,
                easeOut,
                easeIn,
                ease,
                nearestKey,
                key,
                text,
                textIndex,
                textTotal,
                selectorValue,
                framesToTime,
                timeToFrames,
                sourceRectAtTime,
                substring,
                substr,
                posterizeTime,
                index,
                globalData,
              ]),
              executeExpression
            );
          }
          return (
            (ob.initiateExpression = initiateExpression),
            (ob.__preventDeadCodeRemoval = [
              window,
              document,
              XMLHttpRequest,
              fetch,
              frames,
              $bm_neg,
              add,
              $bm_sum,
              $bm_sub,
              $bm_mul,
              $bm_div,
              $bm_mod,
              clamp,
              radians_to_degrees,
              degreesToRadians,
              degrees_to_radians,
              normalize,
              rgbToHsl,
              hslToRgb,
              linear,
              random,
              createPath,
              _lottieGlobal,
            ]),
            (ob.resetFrame = resetFrame),
            ob
          );
        })(),
        Expressions = (function () {
          var t = {
            initExpressions: function (e) {
              var r = 0,
                o = [];
              (e.renderer.compInterface = CompExpressionInterface(e.renderer)),
                e.renderer.globalData.projectInterface.registerComposition(
                  e.renderer
                ),
                (e.renderer.globalData.pushExpression = function () {
                  r += 1;
                }),
                (e.renderer.globalData.popExpression = function () {
                  (r -= 1) == 0 &&
                    (function () {
                      var h,
                        l = o.length;
                      for (h = 0; h < l; h += 1) o[h].release();
                      o.length = 0;
                    })();
                }),
                (e.renderer.globalData.registerExpressionProperty = function (
                  h
                ) {
                  o.indexOf(h) === -1 && o.push(h);
                });
            },
          };
          return (t.resetFrame = ExpressionManager.resetFrame), t;
        })(),
        MaskManagerInterface = (function () {
          function t(e, r) {
            (this._mask = e), (this._data = r);
          }
          return (
            Object.defineProperty(t.prototype, "maskPath", {
              get: function () {
                return (
                  this._mask.prop.k && this._mask.prop.getValue(),
                  this._mask.prop
                );
              },
            }),
            Object.defineProperty(t.prototype, "maskOpacity", {
              get: function () {
                return (
                  this._mask.op.k && this._mask.op.getValue(),
                  100 * this._mask.op.v
                );
              },
            }),
            function (e) {
              var r,
                o = createSizedArray(e.viewData.length),
                h = e.viewData.length;
              for (r = 0; r < h; r += 1)
                o[r] = new t(e.viewData[r], e.masksProperties[r]);
              return function (l) {
                for (r = 0; r < h; ) {
                  if (e.masksProperties[r].nm === l) return o[r];
                  r += 1;
                }
                return null;
              };
            }
          );
        })(),
        ExpressionPropertyInterface = (function () {
          var t = { pv: 0, v: 0, mult: 1 },
            e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
          function r(h, l, y) {
            Object.defineProperty(h, "velocity", {
              get: function () {
                return l.getVelocityAtTime(l.comp.currentFrame);
              },
            }),
              (h.numKeys = l.keyframes ? l.keyframes.length : 0),
              (h.key = function (D) {
                if (!h.numKeys) return 0;
                var j = "";
                j =
                  "s" in l.keyframes[D - 1]
                    ? l.keyframes[D - 1].s
                    : "e" in l.keyframes[D - 2]
                    ? l.keyframes[D - 2].e
                    : l.keyframes[D - 2].s;
                var Y =
                  y === "unidimensional" ? new Number(j) : Object.assign({}, j);
                return (
                  (Y.time =
                    l.keyframes[D - 1].t / l.elem.comp.globalData.frameRate),
                  (Y.value = y === "unidimensional" ? j[0] : j),
                  Y
                );
              }),
              (h.valueAtTime = l.getValueAtTime),
              (h.speedAtTime = l.getSpeedAtTime),
              (h.velocityAtTime = l.getVelocityAtTime),
              (h.propertyGroup = l.propertyGroup);
          }
          function o() {
            return t;
          }
          return function (h) {
            return h
              ? h.propType === "unidimensional"
                ? (function (l) {
                    (l && "pv" in l) || (l = t);
                    var y = 1 / l.mult,
                      D = l.pv * y,
                      j = new Number(D);
                    return (
                      (j.value = D),
                      r(j, l, "unidimensional"),
                      function () {
                        return (
                          l.k && l.getValue(),
                          (D = l.v * y),
                          j.value !== D &&
                            (((j = new Number(D)).value = D),
                            r(j, l, "unidimensional")),
                          j
                        );
                      }
                    );
                  })(h)
                : (function (l) {
                    (l && "pv" in l) || (l = e);
                    var y = 1 / l.mult,
                      D = (l.data && l.data.l) || l.pv.length,
                      j = createTypedArray("float32", D),
                      Y = createTypedArray("float32", D);
                    return (
                      (j.value = Y),
                      r(j, l, "multidimensional"),
                      function () {
                        l.k && l.getValue();
                        for (var B = 0; B < D; B += 1)
                          (Y[B] = l.v[B] * y), (j[B] = Y[B]);
                        return j;
                      }
                    );
                  })(h)
              : o;
          };
        })(),
        TransformExpressionInterface = function (t) {
          function e(y) {
            switch (y) {
              case "scale":
              case "Scale":
              case "ADBE Scale":
              case 6:
                return e.scale;
              case "rotation":
              case "Rotation":
              case "ADBE Rotation":
              case "ADBE Rotate Z":
              case 10:
                return e.rotation;
              case "ADBE Rotate X":
                return e.xRotation;
              case "ADBE Rotate Y":
                return e.yRotation;
              case "position":
              case "Position":
              case "ADBE Position":
              case 2:
                return e.position;
              case "ADBE Position_0":
                return e.xPosition;
              case "ADBE Position_1":
                return e.yPosition;
              case "ADBE Position_2":
                return e.zPosition;
              case "anchorPoint":
              case "AnchorPoint":
              case "Anchor Point":
              case "ADBE AnchorPoint":
              case 1:
                return e.anchorPoint;
              case "opacity":
              case "Opacity":
              case 11:
                return e.opacity;
              default:
                return null;
            }
          }
          var r, o, h, l;
          return (
            Object.defineProperty(e, "rotation", {
              get: ExpressionPropertyInterface(t.r || t.rz),
            }),
            Object.defineProperty(e, "zRotation", {
              get: ExpressionPropertyInterface(t.rz || t.r),
            }),
            Object.defineProperty(e, "xRotation", {
              get: ExpressionPropertyInterface(t.rx),
            }),
            Object.defineProperty(e, "yRotation", {
              get: ExpressionPropertyInterface(t.ry),
            }),
            Object.defineProperty(e, "scale", {
              get: ExpressionPropertyInterface(t.s),
            }),
            t.p
              ? (l = ExpressionPropertyInterface(t.p))
              : ((r = ExpressionPropertyInterface(t.px)),
                (o = ExpressionPropertyInterface(t.py)),
                t.pz && (h = ExpressionPropertyInterface(t.pz))),
            Object.defineProperty(e, "position", {
              get: function () {
                return t.p ? l() : [r(), o(), h ? h() : 0];
              },
            }),
            Object.defineProperty(e, "xPosition", {
              get: ExpressionPropertyInterface(t.px),
            }),
            Object.defineProperty(e, "yPosition", {
              get: ExpressionPropertyInterface(t.py),
            }),
            Object.defineProperty(e, "zPosition", {
              get: ExpressionPropertyInterface(t.pz),
            }),
            Object.defineProperty(e, "anchorPoint", {
              get: ExpressionPropertyInterface(t.a),
            }),
            Object.defineProperty(e, "opacity", {
              get: ExpressionPropertyInterface(t.o),
            }),
            Object.defineProperty(e, "skew", {
              get: ExpressionPropertyInterface(t.sk),
            }),
            Object.defineProperty(e, "skewAxis", {
              get: ExpressionPropertyInterface(t.sa),
            }),
            Object.defineProperty(e, "orientation", {
              get: ExpressionPropertyInterface(t.or),
            }),
            e
          );
        },
        LayerExpressionInterface = (function () {
          function t(Y) {
            var B = new Matrix();
            return (
              Y !== void 0
                ? this._elem.finalTransform.mProp.getValueAtTime(Y).clone(B)
                : this._elem.finalTransform.mProp.applyToMatrix(B),
              B
            );
          }
          function e(Y, B) {
            var q = this.getMatrix(B);
            return (
              (q.props[12] = 0),
              (q.props[13] = 0),
              (q.props[14] = 0),
              this.applyPoint(q, Y)
            );
          }
          function r(Y, B) {
            var q = this.getMatrix(B);
            return this.applyPoint(q, Y);
          }
          function o(Y, B) {
            var q = this.getMatrix(B);
            return (
              (q.props[12] = 0),
              (q.props[13] = 0),
              (q.props[14] = 0),
              this.invertPoint(q, Y)
            );
          }
          function h(Y, B) {
            var q = this.getMatrix(B);
            return this.invertPoint(q, Y);
          }
          function l(Y, B) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var q,
                O = this._elem.hierarchy.length;
              for (q = 0; q < O; q += 1)
                this._elem.hierarchy[q].finalTransform.mProp.applyToMatrix(Y);
            }
            return Y.applyToPointArray(B[0], B[1], B[2] || 0);
          }
          function y(Y, B) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var q,
                O = this._elem.hierarchy.length;
              for (q = 0; q < O; q += 1)
                this._elem.hierarchy[q].finalTransform.mProp.applyToMatrix(Y);
            }
            return Y.inversePoint(B);
          }
          function D(Y) {
            var B = new Matrix();
            if (
              (B.reset(),
              this._elem.finalTransform.mProp.applyToMatrix(B),
              this._elem.hierarchy && this._elem.hierarchy.length)
            ) {
              var q,
                O = this._elem.hierarchy.length;
              for (q = 0; q < O; q += 1)
                this._elem.hierarchy[q].finalTransform.mProp.applyToMatrix(B);
              return B.inversePoint(Y);
            }
            return B.inversePoint(Y);
          }
          function j() {
            return [1, 1, 1, 1];
          }
          return function (Y) {
            var B;
            function q(W) {
              switch (W) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return q.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return B;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return q.effect;
                case "ADBE Text Properties":
                  return q.textInterface;
                default:
                  return null;
              }
            }
            (q.getMatrix = t),
              (q.invertPoint = y),
              (q.applyPoint = l),
              (q.toWorld = r),
              (q.toWorldVec = e),
              (q.fromWorld = h),
              (q.fromWorldVec = o),
              (q.toComp = r),
              (q.fromComp = D),
              (q.sampleImage = j),
              (q.sourceRectAtTime = Y.sourceRectAtTime.bind(Y)),
              (q._elem = Y);
            var O = getDescriptor(
              (B = TransformExpressionInterface(Y.finalTransform.mProp)),
              "anchorPoint"
            );
            return (
              Object.defineProperties(q, {
                hasParent: {
                  get: function () {
                    return Y.hierarchy.length;
                  },
                },
                parent: {
                  get: function () {
                    return Y.hierarchy[0].layerInterface;
                  },
                },
                rotation: getDescriptor(B, "rotation"),
                scale: getDescriptor(B, "scale"),
                position: getDescriptor(B, "position"),
                opacity: getDescriptor(B, "opacity"),
                anchorPoint: O,
                anchor_point: O,
                transform: {
                  get: function () {
                    return B;
                  },
                },
                active: {
                  get: function () {
                    return Y.isInRange;
                  },
                },
              }),
              (q.startTime = Y.data.st),
              (q.index = Y.data.ind),
              (q.source = Y.data.refId),
              (q.height = Y.data.ty === 0 ? Y.data.h : 100),
              (q.width = Y.data.ty === 0 ? Y.data.w : 100),
              (q.inPoint = Y.data.ip / Y.comp.globalData.frameRate),
              (q.outPoint = Y.data.op / Y.comp.globalData.frameRate),
              (q._name = Y.data.nm),
              (q.registerMaskInterface = function (W) {
                q.mask = new MaskManagerInterface(W, Y);
              }),
              (q.registerEffectsInterface = function (W) {
                q.effect = W;
              }),
              q
            );
          };
        })(),
        propertyGroupFactory = function (t, e) {
          return function (r) {
            return (r = r === void 0 ? 1 : r) <= 0 ? t : e(r - 1);
          };
        },
        PropertyInterface = function (t, e) {
          var r = { _name: t };
          return function (o) {
            return (o = o === void 0 ? 1 : o) <= 0 ? r : e(o - 1);
          };
        },
        EffectsExpressionInterface = (function () {
          var t = {
            createEffectsInterface: function (o, h) {
              if (o.effectsManager) {
                var l,
                  y = [],
                  D = o.data.ef,
                  j = o.effectsManager.effectElements.length;
                for (l = 0; l < j; l += 1)
                  y.push(e(D[l], o.effectsManager.effectElements[l], h, o));
                var Y = o.data.ef || [],
                  B = function (q) {
                    for (l = 0, j = Y.length; l < j; ) {
                      if (q === Y[l].nm || q === Y[l].mn || q === Y[l].ix)
                        return y[l];
                      l += 1;
                    }
                    return null;
                  };
                return (
                  Object.defineProperty(B, "numProperties", {
                    get: function () {
                      return Y.length;
                    },
                  }),
                  B
                );
              }
              return null;
            },
          };
          function e(o, h, l, y) {
            function D(O) {
              for (var W = o.ef, G = 0, F = W.length; G < F; ) {
                if (O === W[G].nm || O === W[G].mn || O === W[G].ix)
                  return W[G].ty === 5 ? B[G] : B[G]();
                G += 1;
              }
              throw new Error();
            }
            var j,
              Y = propertyGroupFactory(D, l),
              B = [],
              q = o.ef.length;
            for (j = 0; j < q; j += 1)
              o.ef[j].ty === 5
                ? B.push(
                    e(
                      o.ef[j],
                      h.effectElements[j],
                      h.effectElements[j].propertyGroup,
                      y
                    )
                  )
                : B.push(r(h.effectElements[j], o.ef[j].ty, y, Y));
            return (
              o.mn === "ADBE Color Control" &&
                Object.defineProperty(D, "color", {
                  get: function () {
                    return B[0]();
                  },
                }),
              Object.defineProperties(D, {
                numProperties: {
                  get: function () {
                    return o.np;
                  },
                },
                _name: { value: o.nm },
                propertyGroup: { value: Y },
              }),
              (D.enabled = o.en !== 0),
              (D.active = D.enabled),
              D
            );
          }
          function r(o, h, l, y) {
            var D = ExpressionPropertyInterface(o.p);
            return (
              o.p.setGroupProperty &&
                o.p.setGroupProperty(PropertyInterface("", y)),
              function () {
                return h === 10 ? l.comp.compInterface(o.p.v) : D();
              }
            );
          }
          return t;
        })(),
        ShapePathInterface = function (t, e, r) {
          var o = e.sh;
          function h(y) {
            return y === "Shape" ||
              y === "shape" ||
              y === "Path" ||
              y === "path" ||
              y === "ADBE Vector Shape" ||
              y === 2
              ? h.path
              : null;
          }
          var l = propertyGroupFactory(h, r);
          return (
            o.setGroupProperty(PropertyInterface("Path", l)),
            Object.defineProperties(h, {
              path: {
                get: function () {
                  return o.k && o.getValue(), o;
                },
              },
              shape: {
                get: function () {
                  return o.k && o.getValue(), o;
                },
              },
              _name: { value: t.nm },
              ix: { value: t.ix },
              propertyIndex: { value: t.ix },
              mn: { value: t.mn },
              propertyGroup: { value: r },
            }),
            h
          );
        },
        ShapeExpressionInterface = (function () {
          function t(O, W, G) {
            var F,
              R = [],
              U = O ? O.length : 0;
            for (F = 0; F < U; F += 1)
              O[F].ty === "gr"
                ? R.push(e(O[F], W[F], G))
                : O[F].ty === "fl"
                ? R.push(r(O[F], W[F], G))
                : O[F].ty === "st"
                ? R.push(h(O[F], W[F], G))
                : O[F].ty === "tm"
                ? R.push(l(O[F], W[F], G))
                : O[F].ty === "tr" ||
                  (O[F].ty === "el"
                    ? R.push(D(O[F], W[F], G))
                    : O[F].ty === "sr"
                    ? R.push(j(O[F], W[F], G))
                    : O[F].ty === "sh"
                    ? R.push(ShapePathInterface(O[F], W[F], G))
                    : O[F].ty === "rc"
                    ? R.push(Y(O[F], W[F], G))
                    : O[F].ty === "rd"
                    ? R.push(B(O[F], W[F], G))
                    : O[F].ty === "rp"
                    ? R.push(q(O[F], W[F], G))
                    : O[F].ty === "gf"
                    ? R.push(o(O[F], W[F], G))
                    : R.push(
                        (O[F],
                        W[F],
                        function () {
                          return null;
                        })
                      ));
            return R;
          }
          function e(O, W, G) {
            var F = function (X) {
              switch (X) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return F.content;
                default:
                  return F.transform;
              }
            };
            F.propertyGroup = propertyGroupFactory(F, G);
            var R = (function (X, Z, J) {
                var Q,
                  st = function (et) {
                    for (var at = 0, rt = Q.length; at < rt; ) {
                      if (
                        Q[at]._name === et ||
                        Q[at].mn === et ||
                        Q[at].propertyIndex === et ||
                        Q[at].ix === et ||
                        Q[at].ind === et
                      )
                        return Q[at];
                      at += 1;
                    }
                    return typeof et == "number" ? Q[et - 1] : null;
                  };
                (st.propertyGroup = propertyGroupFactory(st, J)),
                  (Q = t(X.it, Z.it, st.propertyGroup)),
                  (st.numProperties = Q.length);
                var it = y(
                  X.it[X.it.length - 1],
                  Z.it[Z.it.length - 1],
                  st.propertyGroup
                );
                return (
                  (st.transform = it),
                  (st.propertyIndex = X.cix),
                  (st._name = X.nm),
                  st
                );
              })(O, W, F.propertyGroup),
              U = y(
                O.it[O.it.length - 1],
                W.it[W.it.length - 1],
                F.propertyGroup
              );
            return (
              (F.content = R),
              (F.transform = U),
              Object.defineProperty(F, "_name", {
                get: function () {
                  return O.nm;
                },
              }),
              (F.numProperties = O.np),
              (F.propertyIndex = O.ix),
              (F.nm = O.nm),
              (F.mn = O.mn),
              F
            );
          }
          function r(O, W, G) {
            function F(R) {
              return R === "Color" || R === "color"
                ? F.color
                : R === "Opacity" || R === "opacity"
                ? F.opacity
                : null;
            }
            return (
              Object.defineProperties(F, {
                color: { get: ExpressionPropertyInterface(W.c) },
                opacity: { get: ExpressionPropertyInterface(W.o) },
                _name: { value: O.nm },
                mn: { value: O.mn },
              }),
              W.c.setGroupProperty(PropertyInterface("Color", G)),
              W.o.setGroupProperty(PropertyInterface("Opacity", G)),
              F
            );
          }
          function o(O, W, G) {
            function F(R) {
              return R === "Start Point" || R === "start point"
                ? F.startPoint
                : R === "End Point" || R === "end point"
                ? F.endPoint
                : R === "Opacity" || R === "opacity"
                ? F.opacity
                : null;
            }
            return (
              Object.defineProperties(F, {
                startPoint: { get: ExpressionPropertyInterface(W.s) },
                endPoint: { get: ExpressionPropertyInterface(W.e) },
                opacity: { get: ExpressionPropertyInterface(W.o) },
                type: {
                  get: function () {
                    return "a";
                  },
                },
                _name: { value: O.nm },
                mn: { value: O.mn },
              }),
              W.s.setGroupProperty(PropertyInterface("Start Point", G)),
              W.e.setGroupProperty(PropertyInterface("End Point", G)),
              W.o.setGroupProperty(PropertyInterface("Opacity", G)),
              F
            );
          }
          function h(O, W, G) {
            var F,
              R = propertyGroupFactory(Q, G),
              U = propertyGroupFactory(J, R);
            function X(st) {
              Object.defineProperty(J, O.d[st].nm, {
                get: ExpressionPropertyInterface(W.d.dataProps[st].p),
              });
            }
            var Z = O.d ? O.d.length : 0,
              J = {};
            for (F = 0; F < Z; F += 1)
              X(F), W.d.dataProps[F].p.setGroupProperty(U);
            function Q(st) {
              return st === "Color" || st === "color"
                ? Q.color
                : st === "Opacity" || st === "opacity"
                ? Q.opacity
                : st === "Stroke Width" || st === "stroke width"
                ? Q.strokeWidth
                : null;
            }
            return (
              Object.defineProperties(Q, {
                color: { get: ExpressionPropertyInterface(W.c) },
                opacity: { get: ExpressionPropertyInterface(W.o) },
                strokeWidth: { get: ExpressionPropertyInterface(W.w) },
                dash: {
                  get: function () {
                    return J;
                  },
                },
                _name: { value: O.nm },
                mn: { value: O.mn },
              }),
              W.c.setGroupProperty(PropertyInterface("Color", R)),
              W.o.setGroupProperty(PropertyInterface("Opacity", R)),
              W.w.setGroupProperty(PropertyInterface("Stroke Width", R)),
              Q
            );
          }
          function l(O, W, G) {
            function F(U) {
              return U === O.e.ix || U === "End" || U === "end"
                ? F.end
                : U === O.s.ix
                ? F.start
                : U === O.o.ix
                ? F.offset
                : null;
            }
            var R = propertyGroupFactory(F, G);
            return (
              (F.propertyIndex = O.ix),
              W.s.setGroupProperty(PropertyInterface("Start", R)),
              W.e.setGroupProperty(PropertyInterface("End", R)),
              W.o.setGroupProperty(PropertyInterface("Offset", R)),
              (F.propertyIndex = O.ix),
              (F.propertyGroup = G),
              Object.defineProperties(F, {
                start: { get: ExpressionPropertyInterface(W.s) },
                end: { get: ExpressionPropertyInterface(W.e) },
                offset: { get: ExpressionPropertyInterface(W.o) },
                _name: { value: O.nm },
              }),
              (F.mn = O.mn),
              F
            );
          }
          function y(O, W, G) {
            function F(U) {
              return O.a.ix === U || U === "Anchor Point"
                ? F.anchorPoint
                : O.o.ix === U || U === "Opacity"
                ? F.opacity
                : O.p.ix === U || U === "Position"
                ? F.position
                : O.r.ix === U ||
                  U === "Rotation" ||
                  U === "ADBE Vector Rotation"
                ? F.rotation
                : O.s.ix === U || U === "Scale"
                ? F.scale
                : (O.sk && O.sk.ix === U) || U === "Skew"
                ? F.skew
                : (O.sa && O.sa.ix === U) || U === "Skew Axis"
                ? F.skewAxis
                : null;
            }
            var R = propertyGroupFactory(F, G);
            return (
              W.transform.mProps.o.setGroupProperty(
                PropertyInterface("Opacity", R)
              ),
              W.transform.mProps.p.setGroupProperty(
                PropertyInterface("Position", R)
              ),
              W.transform.mProps.a.setGroupProperty(
                PropertyInterface("Anchor Point", R)
              ),
              W.transform.mProps.s.setGroupProperty(
                PropertyInterface("Scale", R)
              ),
              W.transform.mProps.r.setGroupProperty(
                PropertyInterface("Rotation", R)
              ),
              W.transform.mProps.sk &&
                (W.transform.mProps.sk.setGroupProperty(
                  PropertyInterface("Skew", R)
                ),
                W.transform.mProps.sa.setGroupProperty(
                  PropertyInterface("Skew Angle", R)
                )),
              W.transform.op.setGroupProperty(PropertyInterface("Opacity", R)),
              Object.defineProperties(F, {
                opacity: {
                  get: ExpressionPropertyInterface(W.transform.mProps.o),
                },
                position: {
                  get: ExpressionPropertyInterface(W.transform.mProps.p),
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(W.transform.mProps.a),
                },
                scale: {
                  get: ExpressionPropertyInterface(W.transform.mProps.s),
                },
                rotation: {
                  get: ExpressionPropertyInterface(W.transform.mProps.r),
                },
                skew: {
                  get: ExpressionPropertyInterface(W.transform.mProps.sk),
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(W.transform.mProps.sa),
                },
                _name: { value: O.nm },
              }),
              (F.ty = "tr"),
              (F.mn = O.mn),
              (F.propertyGroup = G),
              F
            );
          }
          function D(O, W, G) {
            function F(X) {
              return O.p.ix === X ? F.position : O.s.ix === X ? F.size : null;
            }
            var R = propertyGroupFactory(F, G);
            F.propertyIndex = O.ix;
            var U = W.sh.ty === "tm" ? W.sh.prop : W.sh;
            return (
              U.s.setGroupProperty(PropertyInterface("Size", R)),
              U.p.setGroupProperty(PropertyInterface("Position", R)),
              Object.defineProperties(F, {
                size: { get: ExpressionPropertyInterface(U.s) },
                position: { get: ExpressionPropertyInterface(U.p) },
                _name: { value: O.nm },
              }),
              (F.mn = O.mn),
              F
            );
          }
          function j(O, W, G) {
            function F(X) {
              return O.p.ix === X
                ? F.position
                : O.r.ix === X
                ? F.rotation
                : O.pt.ix === X
                ? F.points
                : O.or.ix === X || X === "ADBE Vector Star Outer Radius"
                ? F.outerRadius
                : O.os.ix === X
                ? F.outerRoundness
                : !O.ir ||
                  (O.ir.ix !== X && X !== "ADBE Vector Star Inner Radius")
                ? O.is && O.is.ix === X
                  ? F.innerRoundness
                  : null
                : F.innerRadius;
            }
            var R = propertyGroupFactory(F, G),
              U = W.sh.ty === "tm" ? W.sh.prop : W.sh;
            return (
              (F.propertyIndex = O.ix),
              U.or.setGroupProperty(PropertyInterface("Outer Radius", R)),
              U.os.setGroupProperty(PropertyInterface("Outer Roundness", R)),
              U.pt.setGroupProperty(PropertyInterface("Points", R)),
              U.p.setGroupProperty(PropertyInterface("Position", R)),
              U.r.setGroupProperty(PropertyInterface("Rotation", R)),
              O.ir &&
                (U.ir.setGroupProperty(PropertyInterface("Inner Radius", R)),
                U.is.setGroupProperty(PropertyInterface("Inner Roundness", R))),
              Object.defineProperties(F, {
                position: { get: ExpressionPropertyInterface(U.p) },
                rotation: { get: ExpressionPropertyInterface(U.r) },
                points: { get: ExpressionPropertyInterface(U.pt) },
                outerRadius: { get: ExpressionPropertyInterface(U.or) },
                outerRoundness: { get: ExpressionPropertyInterface(U.os) },
                innerRadius: { get: ExpressionPropertyInterface(U.ir) },
                innerRoundness: { get: ExpressionPropertyInterface(U.is) },
                _name: { value: O.nm },
              }),
              (F.mn = O.mn),
              F
            );
          }
          function Y(O, W, G) {
            function F(X) {
              return O.p.ix === X
                ? F.position
                : O.r.ix === X
                ? F.roundness
                : O.s.ix === X || X === "Size" || X === "ADBE Vector Rect Size"
                ? F.size
                : null;
            }
            var R = propertyGroupFactory(F, G),
              U = W.sh.ty === "tm" ? W.sh.prop : W.sh;
            return (
              (F.propertyIndex = O.ix),
              U.p.setGroupProperty(PropertyInterface("Position", R)),
              U.s.setGroupProperty(PropertyInterface("Size", R)),
              U.r.setGroupProperty(PropertyInterface("Rotation", R)),
              Object.defineProperties(F, {
                position: { get: ExpressionPropertyInterface(U.p) },
                roundness: { get: ExpressionPropertyInterface(U.r) },
                size: { get: ExpressionPropertyInterface(U.s) },
                _name: { value: O.nm },
              }),
              (F.mn = O.mn),
              F
            );
          }
          function B(O, W, G) {
            function F(X) {
              return O.r.ix === X || X === "Round Corners 1" ? F.radius : null;
            }
            var R = propertyGroupFactory(F, G),
              U = W;
            return (
              (F.propertyIndex = O.ix),
              U.rd.setGroupProperty(PropertyInterface("Radius", R)),
              Object.defineProperties(F, {
                radius: { get: ExpressionPropertyInterface(U.rd) },
                _name: { value: O.nm },
              }),
              (F.mn = O.mn),
              F
            );
          }
          function q(O, W, G) {
            function F(X) {
              return O.c.ix === X || X === "Copies"
                ? F.copies
                : O.o.ix === X || X === "Offset"
                ? F.offset
                : null;
            }
            var R = propertyGroupFactory(F, G),
              U = W;
            return (
              (F.propertyIndex = O.ix),
              U.c.setGroupProperty(PropertyInterface("Copies", R)),
              U.o.setGroupProperty(PropertyInterface("Offset", R)),
              Object.defineProperties(F, {
                copies: { get: ExpressionPropertyInterface(U.c) },
                offset: { get: ExpressionPropertyInterface(U.o) },
                _name: { value: O.nm },
              }),
              (F.mn = O.mn),
              F
            );
          }
          return function (O, W, G) {
            var F;
            function R(U) {
              if (typeof U == "number")
                return (U = U === void 0 ? 1 : U) === 0 ? G : F[U - 1];
              for (var X = 0, Z = F.length; X < Z; ) {
                if (F[X]._name === U) return F[X];
                X += 1;
              }
              return null;
            }
            return (
              (R.propertyGroup = propertyGroupFactory(R, function () {
                return G;
              })),
              (F = t(O, W, R.propertyGroup)),
              (R.numProperties = F.length),
              (R._name = "Contents"),
              R
            );
          };
        })(),
        TextExpressionInterface = function (t) {
          var e;
          function r(o) {
            return o === "ADBE Text Document" ? r.sourceText : null;
          }
          return (
            Object.defineProperty(r, "sourceText", {
              get: function () {
                t.textProperty.getValue();
                var o = t.textProperty.currentData.t;
                return (
                  (e && o === e.value) ||
                    (((e = new String(o)).value = o || new String(o)),
                    Object.defineProperty(e, "style", {
                      get: function () {
                        return { fillColor: t.textProperty.currentData.fc };
                      },
                    })),
                  e
                );
              },
            }),
            r
          );
        };
      function _typeof(t) {
        return (
          (_typeof =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          _typeof(t)
        );
      }
      var FootageInterface =
          ((dataInterfaceFactory = function (t) {
            function e(r) {
              return r === "Outline" ? e.outlineInterface() : null;
            }
            return (
              (e._name = "Outline"),
              (e.outlineInterface = (function (r) {
                var o = "",
                  h = r.getFootageData();
                function l(y) {
                  if (h[y])
                    return (o = y), _typeof((h = h[y])) === "object" ? l : h;
                  var D = y.indexOf(o);
                  if (D !== -1) {
                    var j = parseInt(y.substr(D + o.length), 10);
                    return _typeof((h = h[j])) === "object" ? l : h;
                  }
                  return "";
                }
                return function () {
                  return (o = ""), (h = r.getFootageData()), l;
                };
              })(t)),
              e
            );
          }),
          function (t) {
            function e(r) {
              return r === "Data" ? e.dataInterface : null;
            }
            return (
              (e._name = "Data"), (e.dataInterface = dataInterfaceFactory(t)), e
            );
          }),
        dataInterfaceFactory,
        interfaces = {
          layer: LayerExpressionInterface,
          effects: EffectsExpressionInterface,
          comp: CompExpressionInterface,
          shape: ShapeExpressionInterface,
          text: TextExpressionInterface,
          footage: FootageInterface,
        };
      function getInterface(t) {
        return interfaces[t] || null;
      }
      var expressionHelpers = {
        searchExpressions: function (t, e, r) {
          e.x &&
            ((r.k = !0),
            (r.x = !0),
            (r.initiateExpression = ExpressionManager.initiateExpression),
            r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
        },
        getSpeedAtTime: function (t) {
          var e = this.getValueAtTime(t),
            r = this.getValueAtTime(t + -0.01),
            o = 0;
          if (e.length) {
            var h;
            for (h = 0; h < e.length; h += 1) o += Math.pow(r[h] - e[h], 2);
            o = 100 * Math.sqrt(o);
          } else o = 0;
          return o;
        },
        getVelocityAtTime: function (t) {
          if (this.vel !== void 0) return this.vel;
          var e,
            r,
            o = -0.001,
            h = this.getValueAtTime(t),
            l = this.getValueAtTime(t + o);
          if (h.length)
            for (
              e = createTypedArray("float32", h.length), r = 0;
              r < h.length;
              r += 1
            )
              e[r] = (l[r] - h[r]) / o;
          else e = (l - h) / o;
          return e;
        },
        getValueAtTime: function (t) {
          return (
            (t *= this.elem.globalData.frameRate),
            (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
              ((this._cachingAtTime.lastIndex =
                this._cachingAtTime.lastFrame < t
                  ? this._cachingAtTime.lastIndex
                  : 0),
              (this._cachingAtTime.value = this.interpolateValue(
                t,
                this._cachingAtTime
              )),
              (this._cachingAtTime.lastFrame = t)),
            this._cachingAtTime.value
          );
        },
        getStaticValueAtTime: function () {
          return this.pv;
        },
        setGroupProperty: function (t) {
          this.propertyGroup = t;
        },
      };
      function addPropertyDecorator() {
        function t(q, O, W) {
          if (!this.k || !this.keyframes) return this.pv;
          q = q ? q.toLowerCase() : "";
          var G,
            F,
            R,
            U,
            X,
            Z = this.comp.renderedFrame,
            J = this.keyframes,
            Q = J[J.length - 1].t;
          if (Z <= Q) return this.pv;
          if (
            (W
              ? (F =
                  Q -
                  (G = O
                    ? Math.abs(Q - this.elem.comp.globalData.frameRate * O)
                    : Math.max(0, Q - this.elem.data.ip)))
              : ((!O || O > J.length - 1) && (O = J.length - 1),
                (G = Q - (F = J[J.length - 1 - O].t))),
            q === "pingpong")
          ) {
            if (Math.floor((Z - F) / G) % 2 != 0)
              return this.getValueAtTime(
                (G - ((Z - F) % G) + F) / this.comp.globalData.frameRate,
                0
              );
          } else {
            if (q === "offset") {
              var st = this.getValueAtTime(
                  F / this.comp.globalData.frameRate,
                  0
                ),
                it = this.getValueAtTime(Q / this.comp.globalData.frameRate, 0),
                et = this.getValueAtTime(
                  (((Z - F) % G) + F) / this.comp.globalData.frameRate,
                  0
                ),
                at = Math.floor((Z - F) / G);
              if (this.pv.length) {
                for (
                  U = (X = new Array(st.length)).length, R = 0;
                  R < U;
                  R += 1
                )
                  X[R] = (it[R] - st[R]) * at + et[R];
                return X;
              }
              return (it - st) * at + et;
            }
            if (q === "continue") {
              var rt = this.getValueAtTime(
                  Q / this.comp.globalData.frameRate,
                  0
                ),
                tt = this.getValueAtTime(
                  (Q - 0.001) / this.comp.globalData.frameRate,
                  0
                );
              if (this.pv.length) {
                for (
                  U = (X = new Array(rt.length)).length, R = 0;
                  R < U;
                  R += 1
                )
                  X[R] =
                    rt[R] +
                    ((rt[R] - tt[R]) *
                      ((Z - Q) / this.comp.globalData.frameRate)) /
                      5e-4;
                return X;
              }
              return rt + ((Z - Q) / 0.001) * (rt - tt);
            }
          }
          return this.getValueAtTime(
            (((Z - F) % G) + F) / this.comp.globalData.frameRate,
            0
          );
        }
        function e(q, O, W) {
          if (!this.k) return this.pv;
          q = q ? q.toLowerCase() : "";
          var G,
            F,
            R,
            U,
            X,
            Z = this.comp.renderedFrame,
            J = this.keyframes,
            Q = J[0].t;
          if (Z >= Q) return this.pv;
          if (
            (W
              ? (F =
                  Q +
                  (G = O
                    ? Math.abs(this.elem.comp.globalData.frameRate * O)
                    : Math.max(0, this.elem.data.op - Q)))
              : ((!O || O > J.length - 1) && (O = J.length - 1),
                (G = (F = J[O].t) - Q)),
            q === "pingpong")
          ) {
            if (Math.floor((Q - Z) / G) % 2 == 0)
              return this.getValueAtTime(
                (((Q - Z) % G) + Q) / this.comp.globalData.frameRate,
                0
              );
          } else {
            if (q === "offset") {
              var st = this.getValueAtTime(
                  Q / this.comp.globalData.frameRate,
                  0
                ),
                it = this.getValueAtTime(F / this.comp.globalData.frameRate, 0),
                et = this.getValueAtTime(
                  (G - ((Q - Z) % G) + Q) / this.comp.globalData.frameRate,
                  0
                ),
                at = Math.floor((Q - Z) / G) + 1;
              if (this.pv.length) {
                for (
                  U = (X = new Array(st.length)).length, R = 0;
                  R < U;
                  R += 1
                )
                  X[R] = et[R] - (it[R] - st[R]) * at;
                return X;
              }
              return et - (it - st) * at;
            }
            if (q === "continue") {
              var rt = this.getValueAtTime(
                  Q / this.comp.globalData.frameRate,
                  0
                ),
                tt = this.getValueAtTime(
                  (Q + 0.001) / this.comp.globalData.frameRate,
                  0
                );
              if (this.pv.length) {
                for (
                  U = (X = new Array(rt.length)).length, R = 0;
                  R < U;
                  R += 1
                )
                  X[R] = rt[R] + ((rt[R] - tt[R]) * (Q - Z)) / 0.001;
                return X;
              }
              return rt + ((rt - tt) * (Q - Z)) / 0.001;
            }
          }
          return this.getValueAtTime(
            (G - (((Q - Z) % G) + Q)) / this.comp.globalData.frameRate,
            0
          );
        }
        function r(q, O) {
          if (!this.k) return this.pv;
          if (((q = 0.5 * (q || 0.4)), (O = Math.floor(O || 5)) <= 1))
            return this.pv;
          var W,
            G,
            F = this.comp.renderedFrame / this.comp.globalData.frameRate,
            R = F - q,
            U = O > 1 ? (F + q - R) / (O - 1) : 1,
            X = 0,
            Z = 0;
          for (
            W = this.pv.length
              ? createTypedArray("float32", this.pv.length)
              : 0;
            X < O;

          ) {
            if (((G = this.getValueAtTime(R + X * U)), this.pv.length))
              for (Z = 0; Z < this.pv.length; Z += 1) W[Z] += G[Z];
            else W += G;
            X += 1;
          }
          if (this.pv.length) for (Z = 0; Z < this.pv.length; Z += 1) W[Z] /= O;
          else W /= O;
          return W;
        }
        function o(q) {
          this._transformCachingAtTime ||
            (this._transformCachingAtTime = { v: new Matrix() });
          var O = this._transformCachingAtTime.v;
          if (
            (O.cloneFromProps(this.pre.props), this.appliedTransformations < 1)
          ) {
            var W = this.a.getValueAtTime(q);
            O.translate(
              -W[0] * this.a.mult,
              -W[1] * this.a.mult,
              W[2] * this.a.mult
            );
          }
          if (this.appliedTransformations < 2) {
            var G = this.s.getValueAtTime(q);
            O.scale(G[0] * this.s.mult, G[1] * this.s.mult, G[2] * this.s.mult);
          }
          if (this.sk && this.appliedTransformations < 3) {
            var F = this.sk.getValueAtTime(q),
              R = this.sa.getValueAtTime(q);
            O.skewFromAxis(-F * this.sk.mult, R * this.sa.mult);
          }
          if (this.r && this.appliedTransformations < 4) {
            var U = this.r.getValueAtTime(q);
            O.rotate(-U * this.r.mult);
          } else if (!this.r && this.appliedTransformations < 4) {
            var X = this.rz.getValueAtTime(q),
              Z = this.ry.getValueAtTime(q),
              J = this.rx.getValueAtTime(q),
              Q = this.or.getValueAtTime(q);
            O.rotateZ(-X * this.rz.mult)
              .rotateY(Z * this.ry.mult)
              .rotateX(J * this.rx.mult)
              .rotateZ(-Q[2] * this.or.mult)
              .rotateY(Q[1] * this.or.mult)
              .rotateX(Q[0] * this.or.mult);
          }
          if (this.data.p && this.data.p.s) {
            var st = this.px.getValueAtTime(q),
              it = this.py.getValueAtTime(q);
            if (this.data.p.z) {
              var et = this.pz.getValueAtTime(q);
              O.translate(
                st * this.px.mult,
                it * this.py.mult,
                -et * this.pz.mult
              );
            } else O.translate(st * this.px.mult, it * this.py.mult, 0);
          } else {
            var at = this.p.getValueAtTime(q);
            O.translate(
              at[0] * this.p.mult,
              at[1] * this.p.mult,
              -at[2] * this.p.mult
            );
          }
          return O;
        }
        function h() {
          return this.v.clone(new Matrix());
        }
        var l = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (q, O, W) {
          var G = l(q, O, W);
          return (
            G.dynamicProperties.length
              ? (G.getValueAtTime = o.bind(G))
              : (G.getValueAtTime = h.bind(G)),
            (G.setGroupProperty = expressionHelpers.setGroupProperty),
            G
          );
        };
        var y = PropertyFactory.getProp;
        PropertyFactory.getProp = function (q, O, W, G, F) {
          var R = y(q, O, W, G, F);
          R.kf
            ? (R.getValueAtTime = expressionHelpers.getValueAtTime.bind(R))
            : (R.getValueAtTime =
                expressionHelpers.getStaticValueAtTime.bind(R)),
            (R.setGroupProperty = expressionHelpers.setGroupProperty),
            (R.loopOut = t),
            (R.loopIn = e),
            (R.smooth = r),
            (R.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(R)),
            (R.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(R)),
            (R.numKeys = O.a === 1 ? O.k.length : 0),
            (R.propertyIndex = O.ix);
          var U = 0;
          return (
            W !== 0 &&
              (U = createTypedArray(
                "float32",
                O.a === 1 ? O.k[0].s.length : O.k.length
              )),
            (R._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: U,
            }),
            expressionHelpers.searchExpressions(q, O, R),
            R.k && F.addDynamicProperty(R),
            R
          );
        };
        var D = ShapePropertyFactory.getConstructorFunction(),
          j = ShapePropertyFactory.getKeyframedConstructorFunction();
        function Y() {}
        (Y.prototype = {
          vertices: function (q, O) {
            this.k && this.getValue();
            var W,
              G = this.v;
            O !== void 0 && (G = this.getValueAtTime(O, 0));
            var F = G._length,
              R = G[q],
              U = G.v,
              X = createSizedArray(F);
            for (W = 0; W < F; W += 1)
              X[W] =
                q === "i" || q === "o"
                  ? [R[W][0] - U[W][0], R[W][1] - U[W][1]]
                  : [R[W][0], R[W][1]];
            return X;
          },
          points: function (q) {
            return this.vertices("v", q);
          },
          inTangents: function (q) {
            return this.vertices("i", q);
          },
          outTangents: function (q) {
            return this.vertices("o", q);
          },
          isClosed: function () {
            return this.v.c;
          },
          pointOnPath: function (q, O) {
            var W = this.v;
            O !== void 0 && (W = this.getValueAtTime(O, 0)),
              this._segmentsLength ||
                (this._segmentsLength = bez.getSegmentsLength(W));
            for (
              var G,
                F = this._segmentsLength,
                R = F.lengths,
                U = F.totalLength * q,
                X = 0,
                Z = R.length,
                J = 0;
              X < Z;

            ) {
              if (J + R[X].addedLength > U) {
                var Q = X,
                  st = W.c && X === Z - 1 ? 0 : X + 1,
                  it = (U - J) / R[X].addedLength;
                G = bez.getPointInSegment(
                  W.v[Q],
                  W.v[st],
                  W.o[Q],
                  W.i[st],
                  it,
                  R[X]
                );
                break;
              }
              (J += R[X].addedLength), (X += 1);
            }
            return (
              G ||
                (G = W.c
                  ? [W.v[0][0], W.v[0][1]]
                  : [W.v[W._length - 1][0], W.v[W._length - 1][1]]),
              G
            );
          },
          vectorOnPath: function (q, O, W) {
            q == 1 ? (q = this.v.c) : q == 0 && (q = 0.999);
            var G = this.pointOnPath(q, O),
              F = this.pointOnPath(q + 0.001, O),
              R = F[0] - G[0],
              U = F[1] - G[1],
              X = Math.sqrt(Math.pow(R, 2) + Math.pow(U, 2));
            return X === 0
              ? [0, 0]
              : W === "tangent"
              ? [R / X, U / X]
              : [-U / X, R / X];
          },
          tangentOnPath: function (q, O) {
            return this.vectorOnPath(q, O, "tangent");
          },
          normalOnPath: function (q, O) {
            return this.vectorOnPath(q, O, "normal");
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime,
        }),
          extendPrototype([Y], D),
          extendPrototype([Y], j),
          (j.prototype.getValueAtTime = function (q) {
            return (
              this._cachingAtTime ||
                (this._cachingAtTime = {
                  shapeValue: shapePool.clone(this.pv),
                  lastIndex: 0,
                  lastTime: initialDefaultFrame,
                }),
              (q *= this.elem.globalData.frameRate),
              (q -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                ((this._cachingAtTime.lastIndex =
                  this._cachingAtTime.lastTime < q
                    ? this._caching.lastIndex
                    : 0),
                (this._cachingAtTime.lastTime = q),
                this.interpolateShape(
                  q,
                  this._cachingAtTime.shapeValue,
                  this._cachingAtTime
                )),
              this._cachingAtTime.shapeValue
            );
          }),
          (j.prototype.initiateExpression =
            ExpressionManager.initiateExpression);
        var B = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (q, O, W, G, F) {
          var R = B(q, O, W, G, F);
          return (
            (R.propertyIndex = O.ix),
            (R.lock = !1),
            W === 3
              ? expressionHelpers.searchExpressions(q, O.pt, R)
              : W === 4 && expressionHelpers.searchExpressions(q, O.ks, R),
            R.k && q.addDynamicProperty(R),
            R
          );
        };
      }
      function initialize$1() {
        addPropertyDecorator();
      }
      function addDecorator() {
        (TextProperty.prototype.getExpressionValue = function (t, e) {
          var r = this.calculateExpression(e);
          if (t.t !== r) {
            var o = {};
            return (
              this.copyData(o, t), (o.t = r.toString()), (o.__complete = !1), o
            );
          }
          return t;
        }),
          (TextProperty.prototype.searchProperty = function () {
            var t = this.searchKeyframes(),
              e = this.searchExpressions();
            return (this.kf = t || e), this.kf;
          }),
          (TextProperty.prototype.searchExpressions = function () {
            return this.data.d.x
              ? ((this.calculateExpression =
                  ExpressionManager.initiateExpression.bind(this)(
                    this.elem,
                    this.data.d,
                    this
                  )),
                this.addEffect(this.getExpressionValue.bind(this)),
                !0)
              : null;
          });
      }
      function initialize() {
        addDecorator();
      }
      function SVGComposableEffect() {}
      SVGComposableEffect.prototype = {
        createMergeNode: function (t, e) {
          var r,
            o,
            h = createNS("feMerge");
          for (h.setAttribute("result", t), o = 0; o < e.length; o += 1)
            (r = createNS("feMergeNode")).setAttribute("in", e[o]),
              h.appendChild(r),
              h.appendChild(r);
          return h;
        },
      };
      var linearFilterValue =
        "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
      function SVGTintFilter(t, e, r, o, h) {
        this.filterManager = e;
        var l = createNS("feColorMatrix");
        l.setAttribute("type", "matrix"),
          l.setAttribute("color-interpolation-filters", "linearRGB"),
          l.setAttribute("values", linearFilterValue + " 1 0"),
          (this.linearFilter = l),
          l.setAttribute("result", o + "_tint_1"),
          t.appendChild(l),
          (l = createNS("feColorMatrix")).setAttribute("type", "matrix"),
          l.setAttribute("color-interpolation-filters", "sRGB"),
          l.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
          l.setAttribute("result", o + "_tint_2"),
          t.appendChild(l),
          (this.matrixFilter = l);
        var y = this.createMergeNode(o, [h, o + "_tint_1", o + "_tint_2"]);
        t.appendChild(y);
      }
      function SVGFillFilter(t, e, r, o) {
        this.filterManager = e;
        var h = createNS("feColorMatrix");
        h.setAttribute("type", "matrix"),
          h.setAttribute("color-interpolation-filters", "sRGB"),
          h.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
          h.setAttribute("result", o),
          t.appendChild(h),
          (this.matrixFilter = h);
      }
      function SVGStrokeEffect(t, e, r) {
        (this.initialized = !1),
          (this.filterManager = e),
          (this.elem = r),
          (this.paths = []);
      }
      function SVGTritoneFilter(t, e, r, o) {
        this.filterManager = e;
        var h = createNS("feColorMatrix");
        h.setAttribute("type", "matrix"),
          h.setAttribute("color-interpolation-filters", "linearRGB"),
          h.setAttribute(
            "values",
            "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
          ),
          t.appendChild(h);
        var l = createNS("feComponentTransfer");
        l.setAttribute("color-interpolation-filters", "sRGB"),
          l.setAttribute("result", o),
          (this.matrixFilter = l);
        var y = createNS("feFuncR");
        y.setAttribute("type", "table"), l.appendChild(y), (this.feFuncR = y);
        var D = createNS("feFuncG");
        D.setAttribute("type", "table"), l.appendChild(D), (this.feFuncG = D);
        var j = createNS("feFuncB");
        j.setAttribute("type", "table"),
          l.appendChild(j),
          (this.feFuncB = j),
          t.appendChild(l);
      }
      function SVGProLevelsFilter(t, e, r, o) {
        this.filterManager = e;
        var h = this.filterManager.effectElements,
          l = createNS("feComponentTransfer");
        (h[10].p.k ||
          h[10].p.v !== 0 ||
          h[11].p.k ||
          h[11].p.v !== 1 ||
          h[12].p.k ||
          h[12].p.v !== 1 ||
          h[13].p.k ||
          h[13].p.v !== 0 ||
          h[14].p.k ||
          h[14].p.v !== 1) &&
          (this.feFuncR = this.createFeFunc("feFuncR", l)),
          (h[17].p.k ||
            h[17].p.v !== 0 ||
            h[18].p.k ||
            h[18].p.v !== 1 ||
            h[19].p.k ||
            h[19].p.v !== 1 ||
            h[20].p.k ||
            h[20].p.v !== 0 ||
            h[21].p.k ||
            h[21].p.v !== 1) &&
            (this.feFuncG = this.createFeFunc("feFuncG", l)),
          (h[24].p.k ||
            h[24].p.v !== 0 ||
            h[25].p.k ||
            h[25].p.v !== 1 ||
            h[26].p.k ||
            h[26].p.v !== 1 ||
            h[27].p.k ||
            h[27].p.v !== 0 ||
            h[28].p.k ||
            h[28].p.v !== 1) &&
            (this.feFuncB = this.createFeFunc("feFuncB", l)),
          (h[31].p.k ||
            h[31].p.v !== 0 ||
            h[32].p.k ||
            h[32].p.v !== 1 ||
            h[33].p.k ||
            h[33].p.v !== 1 ||
            h[34].p.k ||
            h[34].p.v !== 0 ||
            h[35].p.k ||
            h[35].p.v !== 1) &&
            (this.feFuncA = this.createFeFunc("feFuncA", l)),
          (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
            (l.setAttribute("color-interpolation-filters", "sRGB"),
            t.appendChild(l)),
          (h[3].p.k ||
            h[3].p.v !== 0 ||
            h[4].p.k ||
            h[4].p.v !== 1 ||
            h[5].p.k ||
            h[5].p.v !== 1 ||
            h[6].p.k ||
            h[6].p.v !== 0 ||
            h[7].p.k ||
            h[7].p.v !== 1) &&
            ((l = createNS("feComponentTransfer")).setAttribute(
              "color-interpolation-filters",
              "sRGB"
            ),
            l.setAttribute("result", o),
            t.appendChild(l),
            (this.feFuncRComposed = this.createFeFunc("feFuncR", l)),
            (this.feFuncGComposed = this.createFeFunc("feFuncG", l)),
            (this.feFuncBComposed = this.createFeFunc("feFuncB", l)));
      }
      function SVGDropShadowEffect(t, e, r, o, h) {
        var l = e.container.globalData.renderConfig.filterSize,
          y = e.data.fs || l;
        t.setAttribute("x", y.x || l.x),
          t.setAttribute("y", y.y || l.y),
          t.setAttribute("width", y.width || l.width),
          t.setAttribute("height", y.height || l.height),
          (this.filterManager = e);
        var D = createNS("feGaussianBlur");
        D.setAttribute("in", "SourceAlpha"),
          D.setAttribute("result", o + "_drop_shadow_1"),
          D.setAttribute("stdDeviation", "0"),
          (this.feGaussianBlur = D),
          t.appendChild(D);
        var j = createNS("feOffset");
        j.setAttribute("dx", "25"),
          j.setAttribute("dy", "0"),
          j.setAttribute("in", o + "_drop_shadow_1"),
          j.setAttribute("result", o + "_drop_shadow_2"),
          (this.feOffset = j),
          t.appendChild(j);
        var Y = createNS("feFlood");
        Y.setAttribute("flood-color", "#00ff00"),
          Y.setAttribute("flood-opacity", "1"),
          Y.setAttribute("result", o + "_drop_shadow_3"),
          (this.feFlood = Y),
          t.appendChild(Y);
        var B = createNS("feComposite");
        B.setAttribute("in", o + "_drop_shadow_3"),
          B.setAttribute("in2", o + "_drop_shadow_2"),
          B.setAttribute("operator", "in"),
          B.setAttribute("result", o + "_drop_shadow_4"),
          t.appendChild(B);
        var q = this.createMergeNode(o, [o + "_drop_shadow_4", h]);
        t.appendChild(q);
      }
      extendPrototype([SVGComposableEffect], SVGTintFilter),
        (SVGTintFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              o = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute(
              "values",
              linearFilterValue + " " + o + " 0"
            ),
              this.matrixFilter.setAttribute(
                "values",
                r[0] -
                  e[0] +
                  " 0 0 0 " +
                  e[0] +
                  " " +
                  (r[1] - e[1]) +
                  " 0 0 0 " +
                  e[1] +
                  " " +
                  (r[2] - e[2]) +
                  " 0 0 0 " +
                  e[2] +
                  " 0 0 0 1 0"
              );
          }
        }),
        (SVGFillFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v,
              r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute(
              "values",
              "0 0 0 0 " +
                e[0] +
                " 0 0 0 0 " +
                e[1] +
                " 0 0 0 0 " +
                e[2] +
                " 0 0 0 " +
                r +
                " 0"
            );
          }
        }),
        (SVGStrokeEffect.prototype.initialize = function () {
          var t,
            e,
            r,
            o,
            h =
              this.elem.layerElement.children ||
              this.elem.layerElement.childNodes;
          for (
            this.filterManager.effectElements[1].p.v === 1
              ? ((o = this.elem.maskManager.masksProperties.length), (r = 0))
              : (o = 1 + (r = this.filterManager.effectElements[0].p.v - 1)),
              (e = createNS("g")).setAttribute("fill", "none"),
              e.setAttribute("stroke-linecap", "round"),
              e.setAttribute("stroke-dashoffset", 1);
            r < o;
            r += 1
          )
            (t = createNS("path")),
              e.appendChild(t),
              this.paths.push({ p: t, m: r });
          if (this.filterManager.effectElements[10].p.v === 3) {
            var l = createNS("mask"),
              y = createElementID();
            l.setAttribute("id", y),
              l.setAttribute("mask-type", "alpha"),
              l.appendChild(e),
              this.elem.globalData.defs.appendChild(l);
            var D = createNS("g");
            for (
              D.setAttribute(
                "mask",
                "url(" + getLocationHref() + "#" + y + ")"
              );
              h[0];

            )
              D.appendChild(h[0]);
            this.elem.layerElement.appendChild(D),
              (this.masker = l),
              e.setAttribute("stroke", "#fff");
          } else if (
            this.filterManager.effectElements[10].p.v === 1 ||
            this.filterManager.effectElements[10].p.v === 2
          ) {
            if (this.filterManager.effectElements[10].p.v === 2)
              for (
                h =
                  this.elem.layerElement.children ||
                  this.elem.layerElement.childNodes;
                h.length;

              )
                this.elem.layerElement.removeChild(h[0]);
            this.elem.layerElement.appendChild(e),
              this.elem.layerElement.removeAttribute("mask"),
              e.setAttribute("stroke", "#fff");
          }
          (this.initialized = !0), (this.pathMasker = e);
        }),
        (SVGStrokeEffect.prototype.renderFrame = function (t) {
          var e;
          this.initialized || this.initialize();
          var r,
            o,
            h = this.paths.length;
          for (e = 0; e < h; e += 1)
            if (
              this.paths[e].m !== -1 &&
              ((r = this.elem.maskManager.viewData[this.paths[e].m]),
              (o = this.paths[e].p),
              (t || this.filterManager._mdf || r.prop._mdf) &&
                o.setAttribute("d", r.lastPath),
              t ||
                this.filterManager.effectElements[9].p._mdf ||
                this.filterManager.effectElements[4].p._mdf ||
                this.filterManager.effectElements[7].p._mdf ||
                this.filterManager.effectElements[8].p._mdf ||
                r.prop._mdf)
            ) {
              var l;
              if (
                this.filterManager.effectElements[7].p.v !== 0 ||
                this.filterManager.effectElements[8].p.v !== 100
              ) {
                var y =
                    0.01 *
                    Math.min(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ),
                  D =
                    0.01 *
                    Math.max(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ),
                  j = o.getTotalLength();
                l = "0 0 0 " + j * y + " ";
                var Y,
                  B = j * (D - y),
                  q =
                    1 +
                    2 *
                      this.filterManager.effectElements[4].p.v *
                      this.filterManager.effectElements[9].p.v *
                      0.01,
                  O = Math.floor(B / q);
                for (Y = 0; Y < O; Y += 1)
                  l +=
                    "1 " +
                    2 *
                      this.filterManager.effectElements[4].p.v *
                      this.filterManager.effectElements[9].p.v *
                      0.01 +
                    " ";
                l += "0 " + 10 * j + " 0 0";
              } else
                l =
                  "1 " +
                  2 *
                    this.filterManager.effectElements[4].p.v *
                    this.filterManager.effectElements[9].p.v *
                    0.01;
              o.setAttribute("stroke-dasharray", l);
            }
          if (
            ((t || this.filterManager.effectElements[4].p._mdf) &&
              this.pathMasker.setAttribute(
                "stroke-width",
                2 * this.filterManager.effectElements[4].p.v
              ),
            (t || this.filterManager.effectElements[6].p._mdf) &&
              this.pathMasker.setAttribute(
                "opacity",
                this.filterManager.effectElements[6].p.v
              ),
            (this.filterManager.effectElements[10].p.v === 1 ||
              this.filterManager.effectElements[10].p.v === 2) &&
              (t || this.filterManager.effectElements[3].p._mdf))
          ) {
            var W = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute(
              "stroke",
              "rgb(" +
                bmFloor(255 * W[0]) +
                "," +
                bmFloor(255 * W[1]) +
                "," +
                bmFloor(255 * W[2]) +
                ")"
            );
          }
        }),
        (SVGTritoneFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              o = this.filterManager.effectElements[2].p.v,
              h = o[0] + " " + r[0] + " " + e[0],
              l = o[1] + " " + r[1] + " " + e[1],
              y = o[2] + " " + r[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", h),
              this.feFuncG.setAttribute("tableValues", l),
              this.feFuncB.setAttribute("tableValues", y);
          }
        }),
        (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
          var r = createNS(t);
          return r.setAttribute("type", "table"), e.appendChild(r), r;
        }),
        (SVGProLevelsFilter.prototype.getTableValue = function (t, e, r, o, h) {
          for (
            var l,
              y,
              D = 0,
              j = Math.min(t, e),
              Y = Math.max(t, e),
              B = Array.call(null, { length: 256 }),
              q = 0,
              O = h - o,
              W = e - t;
            D <= 256;

          )
            (y =
              (l = D / 256) <= j
                ? W < 0
                  ? h
                  : o
                : l >= Y
                ? W < 0
                  ? o
                  : h
                : o + O * Math.pow((l - t) / W, 1 / r)),
              (B[q] = y),
              (q += 1),
              (D += 256 / 255);
          return B.join(" ");
        }),
        (SVGProLevelsFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e,
              r = this.filterManager.effectElements;
            this.feFuncRComposed &&
              (t ||
                r[3].p._mdf ||
                r[4].p._mdf ||
                r[5].p._mdf ||
                r[6].p._mdf ||
                r[7].p._mdf) &&
              ((e = this.getTableValue(
                r[3].p.v,
                r[4].p.v,
                r[5].p.v,
                r[6].p.v,
                r[7].p.v
              )),
              this.feFuncRComposed.setAttribute("tableValues", e),
              this.feFuncGComposed.setAttribute("tableValues", e),
              this.feFuncBComposed.setAttribute("tableValues", e)),
              this.feFuncR &&
                (t ||
                  r[10].p._mdf ||
                  r[11].p._mdf ||
                  r[12].p._mdf ||
                  r[13].p._mdf ||
                  r[14].p._mdf) &&
                ((e = this.getTableValue(
                  r[10].p.v,
                  r[11].p.v,
                  r[12].p.v,
                  r[13].p.v,
                  r[14].p.v
                )),
                this.feFuncR.setAttribute("tableValues", e)),
              this.feFuncG &&
                (t ||
                  r[17].p._mdf ||
                  r[18].p._mdf ||
                  r[19].p._mdf ||
                  r[20].p._mdf ||
                  r[21].p._mdf) &&
                ((e = this.getTableValue(
                  r[17].p.v,
                  r[18].p.v,
                  r[19].p.v,
                  r[20].p.v,
                  r[21].p.v
                )),
                this.feFuncG.setAttribute("tableValues", e)),
              this.feFuncB &&
                (t ||
                  r[24].p._mdf ||
                  r[25].p._mdf ||
                  r[26].p._mdf ||
                  r[27].p._mdf ||
                  r[28].p._mdf) &&
                ((e = this.getTableValue(
                  r[24].p.v,
                  r[25].p.v,
                  r[26].p.v,
                  r[27].p.v,
                  r[28].p.v
                )),
                this.feFuncB.setAttribute("tableValues", e)),
              this.feFuncA &&
                (t ||
                  r[31].p._mdf ||
                  r[32].p._mdf ||
                  r[33].p._mdf ||
                  r[34].p._mdf ||
                  r[35].p._mdf) &&
                ((e = this.getTableValue(
                  r[31].p.v,
                  r[32].p.v,
                  r[33].p.v,
                  r[34].p.v,
                  r[35].p.v
                )),
                this.feFuncA.setAttribute("tableValues", e));
          }
        }),
        extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
        (SVGDropShadowEffect.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            if (
              ((t || this.filterManager.effectElements[4].p._mdf) &&
                this.feGaussianBlur.setAttribute(
                  "stdDeviation",
                  this.filterManager.effectElements[4].p.v / 4
                ),
              t || this.filterManager.effectElements[0].p._mdf)
            ) {
              var e = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute(
                "flood-color",
                rgbToHex(
                  Math.round(255 * e[0]),
                  Math.round(255 * e[1]),
                  Math.round(255 * e[2])
                )
              );
            }
            if (
              ((t || this.filterManager.effectElements[1].p._mdf) &&
                this.feFlood.setAttribute(
                  "flood-opacity",
                  this.filterManager.effectElements[1].p.v / 255
                ),
              t ||
                this.filterManager.effectElements[2].p._mdf ||
                this.filterManager.effectElements[3].p._mdf)
            ) {
              var r = this.filterManager.effectElements[3].p.v,
                o = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                h = r * Math.cos(o),
                l = r * Math.sin(o);
              this.feOffset.setAttribute("dx", h),
                this.feOffset.setAttribute("dy", l);
            }
          }
        });
      var _svgMatteSymbols = [];
      function SVGMatte3Effect(t, e, r) {
        (this.initialized = !1),
          (this.filterManager = e),
          (this.filterElem = t),
          (this.elem = r),
          (r.matteElement = createNS("g")),
          r.matteElement.appendChild(r.layerElement),
          r.matteElement.appendChild(r.transformedElement),
          (r.baseElement = r.matteElement);
      }
      function SVGGaussianBlurEffect(t, e, r, o) {
        t.setAttribute("x", "-100%"),
          t.setAttribute("y", "-100%"),
          t.setAttribute("width", "300%"),
          t.setAttribute("height", "300%"),
          (this.filterManager = e);
        var h = createNS("feGaussianBlur");
        h.setAttribute("result", o),
          t.appendChild(h),
          (this.feGaussianBlur = h);
      }
      function TransformEffect() {}
      function SVGTransformEffect(t, e) {
        this.init(e);
      }
      function CVTransformEffect(t) {
        this.init(t);
      }
      return (
        (SVGMatte3Effect.prototype.findSymbol = function (t) {
          for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1;
          }
          return null;
        }),
        (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
          var r = t.layerElement.parentNode;
          if (r) {
            for (
              var o, h = r.children, l = 0, y = h.length;
              l < y && h[l] !== t.layerElement;

            )
              l += 1;
            l <= y - 2 && (o = h[l + 1]);
            var D = createNS("use");
            D.setAttribute("href", "#" + e),
              o ? r.insertBefore(D, o) : r.appendChild(D);
          }
        }),
        (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
          if (!this.findSymbol(e)) {
            var r = createElementID(),
              o = createNS("mask");
            o.setAttribute("id", e.layerId),
              o.setAttribute("mask-type", "alpha"),
              _svgMatteSymbols.push(e);
            var h = t.globalData.defs;
            h.appendChild(o);
            var l = createNS("symbol");
            l.setAttribute("id", r),
              this.replaceInParent(e, r),
              l.appendChild(e.layerElement),
              h.appendChild(l);
            var y = createNS("use");
            y.setAttribute("href", "#" + r),
              o.appendChild(y),
              (e.data.hd = !1),
              e.show();
          }
          t.setMatte(e.layerId);
        }),
        (SVGMatte3Effect.prototype.initialize = function () {
          for (
            var t = this.filterManager.effectElements[0].p.v,
              e = this.elem.comp.elements,
              r = 0,
              o = e.length;
            r < o;

          )
            e[r] &&
              e[r].data.ind === t &&
              this.setElementAsMask(this.elem, e[r]),
              (r += 1);
          this.initialized = !0;
        }),
        (SVGMatte3Effect.prototype.renderFrame = function () {
          this.initialized || this.initialize();
        }),
        (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            var e = 0.3 * this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              o = r == 3 ? 0 : e,
              h = r == 2 ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", o + " " + h);
            var l =
              this.filterManager.effectElements[2].p.v == 1
                ? "wrap"
                : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", l);
          }
        }),
        (TransformEffect.prototype.init = function (t) {
          (this.effectsManager = t),
            (this.type = effectTypes.TRANSFORM_EFFECT),
            (this.matrix = new Matrix()),
            (this.opacity = -1),
            (this._mdf = !1),
            (this._opMdf = !1);
        }),
        (TransformEffect.prototype.renderFrame = function (t) {
          if (
            ((this._opMdf = !1),
            (this._mdf = !1),
            t || this.effectsManager._mdf)
          ) {
            var e = this.effectsManager.effectElements,
              r = e[0].p.v,
              o = e[1].p.v,
              h = e[2].p.v === 1,
              l = e[3].p.v,
              y = h ? l : e[4].p.v,
              D = e[5].p.v,
              j = e[6].p.v,
              Y = e[7].p.v;
            this.matrix.reset(),
              this.matrix.translate(-r[0], -r[1], r[2]),
              this.matrix.scale(0.01 * y, 0.01 * l, 1),
              this.matrix.rotate(-Y * degToRads),
              this.matrix.skewFromAxis(-D * degToRads, (j + 90) * degToRads),
              this.matrix.translate(o[0], o[1], 0),
              (this._mdf = !0),
              this.opacity !== e[8].p.v &&
                ((this.opacity = e[8].p.v), (this._opMdf = !0));
          }
        }),
        extendPrototype([TransformEffect], SVGTransformEffect),
        extendPrototype([TransformEffect], CVTransformEffect),
        registerRenderer("canvas", CanvasRenderer),
        registerRenderer("html", HybridRenderer),
        registerRenderer("svg", SVGRenderer),
        ShapeModifiers.registerModifier("tm", TrimModifier),
        ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
        ShapeModifiers.registerModifier("rp", RepeaterModifier),
        ShapeModifiers.registerModifier("rd", RoundCornersModifier),
        ShapeModifiers.registerModifier("zz", ZigZagModifier),
        ShapeModifiers.registerModifier("op", OffsetPathModifier),
        setExpressionsPlugin(Expressions),
        setExpressionInterfaces(getInterface),
        initialize$1(),
        initialize(),
        registerEffect$1(20, SVGTintFilter, !0),
        registerEffect$1(21, SVGFillFilter, !0),
        registerEffect$1(22, SVGStrokeEffect, !1),
        registerEffect$1(23, SVGTritoneFilter, !0),
        registerEffect$1(24, SVGProLevelsFilter, !0),
        registerEffect$1(25, SVGDropShadowEffect, !0),
        registerEffect$1(28, SVGMatte3Effect, !1),
        registerEffect$1(29, SVGGaussianBlurEffect, !0),
        registerEffect$1(35, SVGTransformEffect, !1),
        registerEffect(35, CVTransformEffect),
        lottie
      );
    }),
    (module.exports = factory()));
})(lottie$1, lottie$1.exports);
var _templateObject$1,
  styles = r$3(
    _templateObject$1 ||
      (_templateObject$1 = _taggedTemplateLiteral([
        `
  * {
    box-sizing: border-box;
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-icon-color: #999;
    --lottie-player-toolbar-icon-hover-color: #222;
    --lottie-player-toolbar-icon-active-color: #555;
    --lottie-player-seeker-track-color: #ccc;
    --lottie-player-seeker-thumb-color: rgba(0, 107, 120, 0.8);
    --lottie-player-seeker-display: block;

    display: block;
    width: 100%;
    height: 100%;
  }

  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - 35px);
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 5px;
    height: 35px;
  }

  .toolbar button {
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0;
    padding: 0;
    outline: none;
    height: 100%;
  }

  .toolbar button:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
  }

  .toolbar button:focus {
    outline: 1px dotted var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button svg {
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .seeker {
    -webkit-appearance: none;
    width: 95%;
    outline: none;
    background-color: var(--lottie-player-toolbar-background-color);
    display: var(--lottie-player-seeker-display);
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: var(--lottie-player-seeker-track-color);
    border-radius: 3px;
  }
  .seeker::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }
  .seeker:focus::-webkit-slider-runnable-track {
    background: #999;
  }
  .seeker::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: var(--lottie-player-seeker-track-color);
    border-radius: 3px;
  }
  .seeker::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
  }
  .seeker::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  .seeker::-ms-fill-lower {
    background: var(--lottie-player-seeker-track-color);
    border-radius: 3px;
  }
  .seeker::-ms-fill-upper {
    background: var(--lottie-player-seeker-track-color);
    border-radius: 3px;
  }
  .seeker::-ms-thumb {
    border: 0;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
  }
  .seeker:focus::-ms-fill-lower {
    background: var(--lottie-player-seeker-track-color);
  }
  .seeker:focus::-ms-fill-upper {
    background: var(--lottie-player-seeker-track-color);
  }

  .error {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
  }
`,
      ]))
  ),
  LOTTIE_PLAYER_VERSION = "2.0.4",
  LOTTIE_WEB_VERSION = "^5.12.2",
  _templateObject,
  _templateObject2,
  _templateObject3,
  _templateObject4,
  _templateObject5,
  PlayerState,
  PlayMode,
  PlayerEvents;
function parseSrc(t) {
  if (typeof t == "object") return t;
  try {
    return JSON.parse(t);
  } catch {
    return new URL(t, window.location.href).toString();
  }
}
function isLottie(t) {
  return ["v", "ip", "op", "layers", "fr", "w", "h"].every((e) =>
    Object.prototype.hasOwnProperty.call(t, e)
  );
}
function fromURL(t) {
  return _fromURL.apply(this, arguments);
}
function _fromURL() {
  return (_fromURL = _asyncToGenerator(function* (t) {
    if (typeof t != "string") throw new Error("The url value must be a string");
    var e;
    try {
      var r = new URL(t),
        o = yield fetch(r.toString());
      e = yield o.json();
    } catch {
      throw new Error(
        "An error occurred while trying to load the Lottie file from URL"
      );
    }
    return e;
  })).apply(this, arguments);
}
(function (t) {
  (t.Destroyed = "destroyed"),
    (t.Error = "error"),
    (t.Frozen = "frozen"),
    (t.Loading = "loading"),
    (t.Paused = "paused"),
    (t.Playing = "playing"),
    (t.Stopped = "stopped");
})(PlayerState || (PlayerState = {})),
  (function (t) {
    (t.Bounce = "bounce"), (t.Normal = "normal");
  })(PlayMode || (PlayMode = {})),
  (function (t) {
    (t.Complete = "complete"),
      (t.Destroyed = "destroyed"),
      (t.Error = "error"),
      (t.Frame = "frame"),
      (t.Freeze = "freeze"),
      (t.Load = "load"),
      (t.Loop = "loop"),
      (t.Pause = "pause"),
      (t.Play = "play"),
      (t.Ready = "ready"),
      (t.Rendered = "rendered"),
      (t.Stop = "stop");
  })(PlayerEvents || (PlayerEvents = {}));
var LottiePlayer = class extends s {
  constructor() {
    super(...arguments),
      (this.autoplay = !1),
      (this.background = "transparent"),
      (this.controls = !1),
      (this.currentState = PlayerState.Loading),
      (this.description = "Lottie animation"),
      (this.direction = 1),
      (this.disableCheck = !1),
      (this.disableShadowDOM = !1),
      (this.hover = !1),
      (this.intermission = 1),
      (this.loop = !1),
      (this.mode = PlayMode.Normal),
      (this.preserveAspectRatio = "xMidYMid meet"),
      (this.renderer = "svg"),
      (this.speed = 1),
      (this._io = void 0),
      (this._counter = 1),
      (this._onVisibilityChange = () => {
        document.hidden === !0 && this.currentState === PlayerState.Playing
          ? this.freeze()
          : this.currentState === PlayerState.Frozen && this.play();
      });
  }
  load(t) {
    var e = this;
    return _asyncToGenerator(function* () {
      var r = {
        container: e.container,
        loop: !1,
        autoplay: !1,
        renderer: e.renderer,
        rendererSettings: Object.assign(
          {
            preserveAspectRatio: e.preserveAspectRatio,
            clearCanvas: !1,
            progressiveLoad: !0,
            hideOnTransparent: !0,
          },
          e.viewBoxSize && { viewBoxSize: e.viewBoxSize }
        ),
      };
      try {
        var o = parseSrc(t),
          h = {},
          l = typeof o == "string" ? "path" : "animationData";
        e._lottie && e._lottie.destroy(),
          e.webworkers && lottie$1.exports.useWebWorker(!0),
          (e._lottie = lottie$1.exports.loadAnimation(
            Object.assign(Object.assign({}, r), { [l]: o })
          )),
          e._attachEventListeners(),
          e.disableCheck ||
            (l === "path"
              ? ((h = yield fromURL(o)), (l = "animationData"))
              : (h = o),
            isLottie(h) ||
              ((e.currentState = PlayerState.Error),
              e.dispatchEvent(new CustomEvent(PlayerEvents.Error))));
      } catch {
        (e.currentState = PlayerState.Error),
          e.dispatchEvent(new CustomEvent(PlayerEvents.Error));
      }
    })();
  }
  getLottie() {
    return this._lottie;
  }
  getVersions() {
    return {
      lottieWebVersion: LOTTIE_WEB_VERSION,
      lottiePlayerVersion: LOTTIE_PLAYER_VERSION,
    };
  }
  play() {
    this._lottie &&
      (this._lottie.play(),
      (this.currentState = PlayerState.Playing),
      this.dispatchEvent(new CustomEvent(PlayerEvents.Play)));
  }
  pause() {
    this._lottie &&
      (this._lottie.pause(),
      (this.currentState = PlayerState.Paused),
      this.dispatchEvent(new CustomEvent(PlayerEvents.Pause)));
  }
  stop() {
    this._lottie &&
      ((this._counter = 1),
      this._lottie.stop(),
      (this.currentState = PlayerState.Stopped),
      this.dispatchEvent(new CustomEvent(PlayerEvents.Stop)));
  }
  destroy() {
    this._lottie &&
      (this._lottie.destroy(),
      (this._lottie = null),
      (this.currentState = PlayerState.Destroyed),
      this.dispatchEvent(new CustomEvent(PlayerEvents.Destroyed)),
      this.remove());
  }
  seek(t) {
    if (this._lottie) {
      var e = /^(\d+)(%?)$/.exec(t.toString());
      if (e) {
        var r =
          e[2] === "%"
            ? (this._lottie.totalFrames * Number(e[1])) / 100
            : Number(e[1]);
        (this.seeker = r),
          this.currentState === PlayerState.Playing
            ? this._lottie.goToAndPlay(r, !0)
            : (this._lottie.goToAndStop(r, !0), this._lottie.pause());
      }
    }
  }
  snapshot() {
    var t = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    if (this.shadowRoot) {
      var e = this.shadowRoot.querySelector(".animation svg"),
        r = new XMLSerializer().serializeToString(e);
      if (t) {
        var o = document.createElement("a");
        (o.href = "data:image/svg+xml;charset=utf-8,".concat(
          encodeURIComponent(r)
        )),
          (o.download = "download_".concat(this.seeker, ".svg")),
          document.body.appendChild(o),
          o.click(),
          document.body.removeChild(o);
      }
      return r;
    }
  }
  setSpeed() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    this._lottie && this._lottie.setSpeed(t);
  }
  setDirection(t) {
    this._lottie && this._lottie.setDirection(t);
  }
  setLooping(t) {
    this._lottie && ((this.loop = t), (this._lottie.loop = t));
  }
  togglePlay() {
    return this.currentState === PlayerState.Playing
      ? this.pause()
      : this.play();
  }
  toggleLooping() {
    this.setLooping(!this.loop);
  }
  resize() {
    this._lottie && this._lottie.resize();
  }
  static get styles() {
    return styles;
  }
  disconnectedCallback() {
    this.isConnected ||
      (this._io && (this._io.disconnect(), (this._io = void 0)),
      document.removeEventListener(
        "visibilitychange",
        this._onVisibilityChange
      ),
      this.destroy());
  }
  render() {
    var t = this.controls ? "main controls" : "main",
      e = this.controls ? "animation controls" : "animation";
    return $(
      _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
          ` <div
      id="animation-container"
      class=`,
          `
      lang="en"
      aria-label=`,
          `
      role="img"
    >
      <div
        id="animation"
        class=`,
          `
        style="background:`,
          `;"
      >
        `,
          `
      </div>
      `,
          `
    </div>`,
        ])),
      t,
      this.description,
      e,
      this.background,
      this.currentState === PlayerState.Error
        ? $(
            _templateObject2 ||
              (_templateObject2 = _taggedTemplateLiteral([
                '<div class="error">⚠️</div>',
              ]))
          )
        : void 0,
      this.controls && !this.disableShadowDOM ? this.renderControls() : void 0
    );
  }
  createRenderRoot() {
    return (
      this.disableShadowDOM && (this.style.display = "block"),
      this.disableShadowDOM ? this : super.createRenderRoot()
    );
  }
  firstUpdated() {
    "IntersectionObserver" in window &&
      ((this._io = new IntersectionObserver((t) => {
        t[0].isIntersecting
          ? this.currentState === PlayerState.Frozen && this.play()
          : this.currentState === PlayerState.Playing && this.freeze();
      })),
      this._io.observe(this.container)),
      document.hidden !== void 0 &&
        document.addEventListener("visibilitychange", this._onVisibilityChange),
      this.src && this.load(this.src),
      this.dispatchEvent(new CustomEvent(PlayerEvents.Rendered));
  }
  renderControls() {
    var t = this.currentState === PlayerState.Playing,
      e = this.currentState === PlayerState.Paused,
      r = this.currentState === PlayerState.Stopped;
    return $(
      _templateObject3 ||
        (_templateObject3 = _taggedTemplateLiteral([
          `
      <div
        id="lottie-controls"
        aria-label="lottie-animation-controls"
        class="toolbar"
      >
        <button
          id="lottie-play-button"
          @click=`,
          `
          class=`,
          `
          style="align-items:center;"
          tabindex="0"
          aria-label="play-pause"
        >
          `,
          `
        </button>
        <button
          id="lottie-stop-button"
          @click=`,
          `
          class=`,
          `
          style="align-items:center;"
          tabindex="0"
          aria-label="stop"
        >
          <svg width="24" height="24" aria-hidden="true" focusable="false">
            <path d="M6 6h12v12H6V6z" />
          </svg>
        </button>
        <input
          id="lottie-seeker-input"
          class="seeker"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=`,
          `
          @input=`,
          `
          @mousedown=`,
          `
          @mouseup=`,
          `
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=`,
          `
          tabindex="0"
          aria-label="lottie-seek-input"
        />
        <button
          id="lottie-loop-toggle"
          @click=`,
          `
          class=`,
          `
          style="align-items:center;"
          tabindex="0"
          aria-label="loop-toggle"
        >
          <svg width="24" height="24" aria-hidden="true" focusable="false">
            <path
              d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"
            />
          </svg>
        </button>
      </div>
    `,
        ])),
      this.togglePlay,
      t || e ? "active" : "",
      $(
        t
          ? _templateObject4 ||
              (_templateObject4 = _taggedTemplateLiteral([
                `<svg
                width="24"
                height="24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z"
                />
              </svg>`,
              ]))
          : _templateObject5 ||
              (_templateObject5 = _taggedTemplateLiteral([
                `<svg
                width="24"
                height="24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z" />
              </svg>`,
              ]))
      ),
      this.stop,
      r ? "active" : "",
      this.seeker,
      this._handleSeekChange,
      () => {
        (this._prevState = this.currentState), this.freeze();
      },
      () => {
        this._prevState === PlayerState.Playing && this.play();
      },
      this.seeker,
      this.toggleLooping,
      this.loop ? "active" : ""
    );
  }
  _handleSeekChange(t) {
    if (this._lottie && !isNaN(t.target.value)) {
      var e = (t.target.value / 100) * this._lottie.totalFrames;
      this.seek(e);
    }
  }
  _attachEventListeners() {
    this._lottie.addEventListener("enterFrame", () => {
      (this.seeker =
        (this._lottie.currentFrame / this._lottie.totalFrames) * 100),
        this.dispatchEvent(
          new CustomEvent(PlayerEvents.Frame, {
            detail: { frame: this._lottie.currentFrame, seeker: this.seeker },
          })
        );
    }),
      this._lottie.addEventListener("complete", () => {
        if (this.currentState === PlayerState.Playing) {
          if (
            (!this.loop || (this.count && this._counter >= this.count)) &&
            (this.dispatchEvent(new CustomEvent(PlayerEvents.Complete)),
            this.mode !== PlayMode.Bounce || this._lottie.currentFrame === 0)
          )
            return;
          this.mode === PlayMode.Bounce
            ? (this.count && (this._counter += 0.5),
              setTimeout(() => {
                this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)),
                  this.currentState === PlayerState.Playing &&
                    (this._lottie.setDirection(-1 * this._lottie.playDirection),
                    this._lottie.play());
              }, this.intermission))
            : (this.count && (this._counter += 1),
              window.setTimeout(() => {
                this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)),
                  this.currentState === PlayerState.Playing &&
                    (this.direction === -1
                      ? (this.seek("99%"), this.play())
                      : (this._lottie.stop(), this._lottie.play()));
              }, this.intermission));
        } else this.dispatchEvent(new CustomEvent(PlayerEvents.Complete));
      }),
      this._lottie.addEventListener("DOMLoaded", () => {
        this.setSpeed(this.speed),
          this.setDirection(this.direction),
          this.autoplay &&
            (this.direction === -1 && this.seek("100%"), this.play()),
          this.dispatchEvent(new CustomEvent(PlayerEvents.Ready));
      }),
      this._lottie.addEventListener("data_ready", () => {
        this.dispatchEvent(new CustomEvent(PlayerEvents.Load));
      }),
      this._lottie.addEventListener("data_failed", () => {
        (this.currentState = PlayerState.Error),
          this.dispatchEvent(new CustomEvent(PlayerEvents.Error));
      }),
      this.container.addEventListener("mouseenter", () => {
        this.hover && this.currentState !== PlayerState.Playing && this.play();
      }),
      this.container.addEventListener("mouseleave", () => {
        this.hover && this.currentState === PlayerState.Playing && this.stop();
      });
  }
  freeze() {
    this._lottie &&
      (this._lottie.pause(),
      (this.currentState = PlayerState.Frozen),
      this.dispatchEvent(new CustomEvent(PlayerEvents.Freeze)));
  }
};
__decorate(
  [e$5({ type: Boolean })],
  LottiePlayer.prototype,
  "autoplay",
  void 0
),
  __decorate(
    [e$5({ type: String, reflect: !0 })],
    LottiePlayer.prototype,
    "background",
    void 0
  ),
  __decorate(
    [e$5({ type: Boolean })],
    LottiePlayer.prototype,
    "controls",
    void 0
  ),
  __decorate([e$5({ type: Number })], LottiePlayer.prototype, "count", void 0),
  __decorate(
    [e$5({ type: String })],
    LottiePlayer.prototype,
    "currentState",
    void 0
  ),
  __decorate(
    [e$5({ type: String })],
    LottiePlayer.prototype,
    "description",
    void 0
  ),
  __decorate(
    [e$5({ type: Number })],
    LottiePlayer.prototype,
    "direction",
    void 0
  ),
  __decorate(
    [e$5({ type: Boolean })],
    LottiePlayer.prototype,
    "disableCheck",
    void 0
  ),
  __decorate(
    [e$5({ type: Boolean })],
    LottiePlayer.prototype,
    "disableShadowDOM",
    void 0
  ),
  __decorate([e$5({ type: Boolean })], LottiePlayer.prototype, "hover", void 0),
  __decorate([e$5()], LottiePlayer.prototype, "intermission", void 0),
  __decorate(
    [e$5({ type: Boolean, reflect: !0 })],
    LottiePlayer.prototype,
    "loop",
    void 0
  ),
  __decorate([e$5()], LottiePlayer.prototype, "mode", void 0),
  __decorate(
    [e$5({ type: String })],
    LottiePlayer.prototype,
    "preserveAspectRatio",
    void 0
  ),
  __decorate(
    [e$5({ type: String })],
    LottiePlayer.prototype,
    "renderer",
    void 0
  ),
  __decorate(
    [e$5({ type: String })],
    LottiePlayer.prototype,
    "viewBoxSize",
    void 0
  ),
  __decorate([e$5()], LottiePlayer.prototype, "seeker", void 0),
  __decorate([e$5({ type: Number })], LottiePlayer.prototype, "speed", void 0),
  __decorate([e$5({ type: String })], LottiePlayer.prototype, "src", void 0),
  __decorate(
    [e$5({ type: Boolean })],
    LottiePlayer.prototype,
    "webworkers",
    void 0
  ),
  __decorate([i(".animation")], LottiePlayer.prototype, "container", void 0),
  (LottiePlayer = __decorate([n$1("lottie-player")], LottiePlayer));
const _hoisted_1 = { class: "flex justify-center w-full relative" },
  _hoisted_2 = createBaseVNode(
    "div",
    { class: "w-full relative", style: { height: "100%" } },
    [
      createBaseVNode("iframe", {
        src: "https://komputai.netlify.app/?embed=true&embed_options=dark_theme",
        width: "100%",
        height: "100%",
      }),
    ],
    -1
  ),
  _hoisted_3 = {
    key: 0,
    class: "w-full h-full absolute flex justify-center items-center bg-custom",
    style: { left: "0px", top: "0px" },
  },
  _hoisted_4 = { class: "glow" },
  _sfc_main = {
    __name: "Playground",
    setup(t) {
      ref([]), ref(""), ref(!1), ref(!1);
      let e = ref(!0);
      return (
        setTimeout(() => {
          e.value = !1;
        }, 3500),
        (r, o) => {
          const h = resolveComponent("lottie-player");
          return (
            openBlock(),
            createElementBlock("div", _hoisted_1, [
              _hoisted_2,
              unref(e)
                ? (openBlock(),
                  createElementBlock("div", _hoisted_3, [
                    createBaseVNode("span", _hoisted_4, [
                      createVNode(h, {
                        class: "bright",
                        src: "https://lottie.host/39587445-f6c1-42a2-9cb8-2efa09adfcb7/XiWFKttUcy.json",
                        background: "transparent",
                        speed: "2",
                        style: { width: "300px", height: "300px" },
                        autoplay: "",
                        direction: "1",
                        mode: "normal",
                      }),
                    ]),
                  ]))
                : createCommentVNode("", !0),
            ])
          );
        }
      );
    },
  };
export { _sfc_main as default };
