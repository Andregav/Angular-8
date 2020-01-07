(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], { 0: function(t, e, n) { t.exports = n("zUnb") }, zUnb: function(t, e, n) { "use strict";

        function r(t) { return "function" == typeof t } n.r(e); let s = !1; const i = { Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) { if (t) { const t = new Error;
              console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack) } else s && console.log("RxJS: Back to a better error behavior. Thank you. <3");
            s = t }, get useDeprecatedSynchronousErrorHandling() { return s } };

        function o(t) { setTimeout(() => { throw t }) } const l = { closed: !0, next(t) {}, error(t) { if (i.useDeprecatedSynchronousErrorHandling) throw t;
              o(t) }, complete() {} },
          a = Array.isArray || (t => t && "number" == typeof t.length);

        function u(t) { return null !== t && "object" == typeof t }

        function c(t) { return Error.call(this), this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = t, this } c.prototype = Object.create(Error.prototype); const h = c; let d = (() => { class t { constructor(t) { this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t) } unsubscribe() { let t, e = !1; if (this.closed) return; let { _parent: n, _parents: s, _unsubscribe: i, _subscriptions: o } = this;
              this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null; let l = -1,
                c = s ? s.length : 0; for (; n;) n.remove(this), n = ++l < c && s[l] || null; if (r(i)) try { i.call(this) } catch (d) { e = !0, t = d instanceof h ? p(d.errors) : [d] }
              if (a(o))
                for (l = -1, c = o.length; ++l < c;) { const n = o[l]; if (u(n)) try { n.unsubscribe() } catch (d) { e = !0, t = t || [], d instanceof h ? t = t.concat(p(d.errors)) : t.push(d) } }
              if (e) throw new h(t) } add(e) { let n = e; switch (typeof e) {
                case "function":
                  n = new t(e);
                case "object":
                  if (n === this || n.closed || "function" != typeof n.unsubscribe) return n; if (this.closed) return n.unsubscribe(), n; if (!(n instanceof t)) { const e = n;
                    (n = new t)._subscriptions = [e] } break;
                default:
                  if (!e) return t.EMPTY; throw new Error("unrecognized teardown " + e + " added to Subscription.") } if (n._addParent(this)) { const t = this._subscriptions;
                t ? t.push(n) : this._subscriptions = [n] } return n } remove(t) { const e = this._subscriptions; if (e) { const n = e.indexOf(t); - 1 !== n && e.splice(n, 1) } } _addParent(t) { let { _parent: e, _parents: n } = this; return e !== t && (e ? n ? -1 === n.indexOf(t) && (n.push(t), !0) : (this._parents = [t], !0) : (this._parent = t, !0)) } } return t.EMPTY = function(t) { return t.closed = !0, t }(new t), t })();

        function p(t) { return t.reduce((t, e) => t.concat(e instanceof h ? e.errors : e), []) } const f = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
        class g extends d { constructor(t, e, n) { switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
              case 0:
                this.destination = l; break;
              case 1:
                if (!t) { this.destination = l; break } if ("object" == typeof t) { t instanceof g ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new m(this, t)); break }
              default:
                this.syncErrorThrowable = !0, this.destination = new m(this, t, e, n) } } [f]() { return this } static create(t, e, n) { const r = new g(t, e, n); return r.syncErrorThrowable = !1, r } next(t) { this.isStopped || this._next(t) } error(t) { this.isStopped || (this.isStopped = !0, this._error(t)) } complete() { this.isStopped || (this.isStopped = !0, this._complete()) } unsubscribe() { this.closed || (this.isStopped = !0, super.unsubscribe()) } _next(t) { this.destination.next(t) } _error(t) { this.destination.error(t), this.unsubscribe() } _complete() { this.destination.complete(), this.unsubscribe() } _unsubscribeAndRecycle() { const { _parent: t, _parents: e } = this; return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this } } class m extends g { constructor(t, e, n, s) { let i;
            super(), this._parentSubscriber = t; let o = this;
            r(e) ? i = e : e && (i = e.next, n = e.error, s = e.complete, e !== l && (r((o = Object.create(e)).unsubscribe) && this.add(o.unsubscribe.bind(o)), o.unsubscribe = this.unsubscribe.bind(this))), this._context = o, this._next = i, this._error = n, this._complete = s } next(t) { if (!this.isStopped && this._next) { const { _parentSubscriber: e } = this;
              i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t) } } error(t) { if (!this.isStopped) { const { _parentSubscriber: e } = this, { useDeprecatedSynchronousErrorHandling: n } = i; if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
              else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : o(t), this.unsubscribe();
              else { if (this.unsubscribe(), n) throw t;
                o(t) } } } complete() { if (!this.isStopped) { const { _parentSubscriber: t } = this; if (this._complete) { const e = () => this._complete.call(this._context);
                i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe()) } else this.unsubscribe() } } __tryOrUnsub(t, e) { try { t.call(this._context, e) } catch (n) { if (this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling) throw n;
              o(n) } } __tryOrSetError(t, e, n) { if (!i.useDeprecatedSynchronousErrorHandling) throw new Error("bad call"); try { e.call(this._context, n) } catch (r) { return i.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (o(r), !0) } return !1 } _unsubscribe() { const { _parentSubscriber: t } = this;
            this._context = null, this._parentSubscriber = null, t.unsubscribe() } } const _ = "function" == typeof Symbol && Symbol.observable || "@@observable";

        function y() {}

        function v(...t) { return b(t) }

        function b(t) { return t ? 1 === t.length ? t[0] : function(e) { return t.reduce((t, e) => e(t), e) } : y } let w = (() => { class t { constructor(t) { this._isScalar = !1, t && (this._subscribe = t) } lift(e) { const n = new t; return n.source = this, n.operator = e, n } subscribe(t, e, n) { const { operator: r } = this, s = function(t, e, n) { if (t) { if (t instanceof g) return t; if (t[f]) return t[f]() } return t || e || n ? new g(t, e, n) : new g(l) }(t, e, n); if (s.add(r ? r.call(s, this.source) : this.source || i.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), i.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue; return s } _trySubscribe(t) { try { return this._subscribe(t) } catch (e) { i.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                  function(t) { for (; t;) { const { closed: e, destination: n, isStopped: r } = t; if (e || r) return !1;
                      t = n && n instanceof g ? n : null } return !0 }(t) ? t.error(e) : console.warn(e) } } forEach(t, e) { return new(e = C(e))((e, n) => { let r;
                r = this.subscribe(e => { try { t(e) } catch (s) { n(s), r && r.unsubscribe() } }, n, e) }) } _subscribe(t) { const { source: e } = this; return e && e.subscribe(t) } [_]() { return this } pipe(...t) { return 0 === t.length ? this : b(t)(this) } toPromise(t) { return new(t = C(t))((t, e) => { let n;
                this.subscribe(t => n = t, t => e(t), () => t(n)) }) } } return t.create = e => new t(e), t })();

        function C(t) { if (t || (t = i.Promise || Promise), !t) throw new Error("no Promise impl found"); return t }

        function x() { return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this } x.prototype = Object.create(Error.prototype); const k = x;
        class S extends d { constructor(t, e) { super(), this.subject = t, this.subscriber = e, this.closed = !1 } unsubscribe() { if (this.closed) return;
            this.closed = !0; const t = this.subject,
              e = t.observers; if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return; const n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1) } } class E extends g { constructor(t) { super(t), this.destination = t } } let T = (() => { class t extends w { constructor() { super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null } [f]() { return new E(this) } lift(t) { const e = new I(this, this); return e.operator = t, e } next(t) { if (this.closed) throw new k; if (!this.isStopped) { const { observers: e } = this, n = e.length, r = e.slice(); for (let s = 0; s < n; s++) r[s].next(t) } } error(t) { if (this.closed) throw new k;
              this.hasError = !0, this.thrownError = t, this.isStopped = !0; const { observers: e } = this, n = e.length, r = e.slice(); for (let s = 0; s < n; s++) r[s].error(t);
              this.observers.length = 0 } complete() { if (this.closed) throw new k;
              this.isStopped = !0; const { observers: t } = this, e = t.length, n = t.slice(); for (let r = 0; r < e; r++) n[r].complete();
              this.observers.length = 0 } unsubscribe() { this.isStopped = !0, this.closed = !0, this.observers = null } _trySubscribe(t) { if (this.closed) throw new k; return super._trySubscribe(t) } _subscribe(t) { if (this.closed) throw new k; return this.hasError ? (t.error(this.thrownError), d.EMPTY) : this.isStopped ? (t.complete(), d.EMPTY) : (this.observers.push(t), new S(this, t)) } asObservable() { const t = new w; return t.source = this, t } } return t.create = (t, e) => new I(t, e), t })();
        class I extends T { constructor(t, e) { super(), this.destination = t, this.source = e } next(t) { const { destination: e } = this;
            e && e.next && e.next(t) } error(t) { const { destination: e } = this;
            e && e.error && this.destination.error(t) } complete() { const { destination: t } = this;
            t && t.complete && this.destination.complete() } _subscribe(t) { const { source: e } = this; return e ? this.source.subscribe(t) : d.EMPTY } }

        function M(t) { return t && "function" == typeof t.schedule } class P extends g { constructor(t, e, n) { super(), this.parent = t, this.outerValue = e, this.outerIndex = n, this.index = 0 } _next(t) { this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this) } _error(t) { this.parent.notifyError(t, this), this.unsubscribe() } _complete() { this.parent.notifyComplete(this), this.unsubscribe() } } const O = t => e => { for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
            e.closed || e.complete() },
          A = t => e => (t.then(t => { e.closed || (e.next(t), e.complete()) }, t => e.error(t)).then(null, o), e);

        function D() { return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator" } const N = D(),
          R = t => e => { const n = t[N](); for (;;) { const t = n.next(); if (t.done) { e.complete(); break } if (e.next(t.value), e.closed) break } return "function" == typeof n.return && e.add(() => { n.return && n.return() }), e },
          V = t => e => { const n = t[_](); if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable"); return n.subscribe(e) },
          L = t => t && "number" == typeof t.length && "function" != typeof t;

        function U(t) { return !!t && "function" != typeof t.subscribe && "function" == typeof t.then } const j = t => { if (t instanceof w) return e => t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e); if (t && "function" == typeof t[_]) return V(t); if (L(t)) return O(t); if (U(t)) return A(t); if (t && "function" == typeof t[N]) return R(t); { const e = u(t) ? "an invalid object" : `'${t}'`; throw new TypeError(`You provided ${e} where a stream was expected.` + " You can provide an Observable, Promise, Array, or Iterable.") } };

        function F(t, e, n, r, s = new P(t, n, r)) { if (!s.closed) return j(e)(s) } class H extends g { notifyNext(t, e, n, r, s) { this.destination.next(e) } notifyError(t, e) { this.destination.error(t) } notifyComplete(t) { this.destination.complete() } }

        function $(t, e) { return function(n) { if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?"); return n.lift(new z(t, e)) } } class z { constructor(t, e) { this.project = t, this.thisArg = e } call(t, e) { return e.subscribe(new B(t, this.project, this.thisArg)) } } class B extends g { constructor(t, e, n) { super(t), this.project = e, this.count = 0, this.thisArg = n || this } _next(t) { let e; try { e = this.project.call(this.thisArg, t, this.count++) } catch (n) { return void this.destination.error(n) } this.destination.next(e) } }

        function G(t, e) { return new w(e ? n => { const r = new d; let s = 0; return r.add(e.schedule((function() { s !== t.length ? (n.next(t[s++]), n.closed || r.add(this.schedule())) : n.complete() }))), r } : O(t)) }

        function Z(t, e) { if (!e) return t instanceof w ? t : new w(j(t)); if (null != t) { if (function(t) { return t && "function" == typeof t[_] }(t)) return function(t, e) { return new w(e ? n => { const r = new d; return r.add(e.schedule(() => { const s = t[_]();
                  r.add(s.subscribe({ next(t) { r.add(e.schedule(() => n.next(t))) }, error(t) { r.add(e.schedule(() => n.error(t))) }, complete() { r.add(e.schedule(() => n.complete())) } })) })), r } : V(t)) }(t, e); if (U(t)) return function(t, e) { return new w(e ? n => { const r = new d; return r.add(e.schedule(() => t.then(t => { r.add(e.schedule(() => { n.next(t), r.add(e.schedule(() => n.complete())) })) }, t => { r.add(e.schedule(() => n.error(t))) }))), r } : A(t)) }(t, e); if (L(t)) return G(t, e); if (function(t) { return t && "function" == typeof t[N] }(t) || "string" == typeof t) return function(t, e) { if (!t) throw new Error("Iterable cannot be null"); return new w(e ? n => { const r = new d; let s; return r.add(() => { s && "function" == typeof s.return && s.return() }), r.add(e.schedule(() => { s = t[N](), r.add(e.schedule((function() { if (n.closed) return; let t, e; try { const n = s.next();
                      t = n.value, e = n.done } catch (r) { return void n.error(r) } e ? n.complete() : (n.next(t), this.schedule()) }))) })), r } : R(t)) }(t, e) } throw new TypeError((null !== t && typeof t || t) + " is not observable") }

        function q(t, e, n = Number.POSITIVE_INFINITY) { return "function" == typeof e ? r => r.pipe(q((n, r) => Z(t(n, r)).pipe($((t, s) => e(n, t, r, s))), n)) : ("number" == typeof e && (n = e), e => e.lift(new W(t, n))) } class W { constructor(t, e = Number.POSITIVE_INFINITY) { this.project = t, this.concurrent = e } call(t, e) { return e.subscribe(new Q(t, this.project, this.concurrent)) } } class Q extends H { constructor(t, e, n = Number.POSITIVE_INFINITY) { super(t), this.project = e, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0 } _next(t) { this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t) } _tryNext(t) { let e; const n = this.index++; try { e = this.project(t, n) } catch (r) { return void this.destination.error(r) } this.active++, this._innerSub(e, t, n) } _innerSub(t, e, n) { const r = new P(this, void 0, void 0);
            this.destination.add(r), F(this, t, e, n, r) } _complete() { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe() } notifyNext(t, e, n, r, s) { this.destination.next(e) } notifyComplete(t) { const e = this.buffer;
            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete() } }

        function K(t) { return t }

        function Y(t = Number.POSITIVE_INFINITY) { return q(K, t) }

        function J() { return function(t) { return t.lift(new X(t)) } } class X { constructor(t) { this.connectable = t } call(t, e) { const { connectable: n } = this;
            n._refCount++; const r = new tt(t, n),
              s = e.subscribe(r); return r.closed || (r.connection = n.connect()), s } } class tt extends g { constructor(t, e) { super(t), this.connectable = e } _unsubscribe() { const { connectable: t } = this; if (!t) return void(this.connection = null);
            this.connectable = null; const e = t._refCount; if (e <= 0) return void(this.connection = null); if (t._refCount = e - 1, e > 1) return void(this.connection = null); const { connection: n } = this, r = t._connection;
            this.connection = null, !r || n && r !== n || r.unsubscribe() } } const et = class extends w { constructor(t, e) { super(), this.source = t, this.subjectFactory = e, this._refCount = 0, this._isComplete = !1 } _subscribe(t) { return this.getSubject().subscribe(t) } getSubject() { const t = this._subject; return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject } connect() { let t = this._connection; return t || (this._isComplete = !1, (t = this._connection = new d).add(this.source.subscribe(new rt(this.getSubject(), this))), t.closed ? (this._connection = null, t = d.EMPTY) : this._connection = t), t } refCount() { return J()(this) } }.prototype,
          nt = { operator: { value: null }, _refCount: { value: 0, writable: !0 }, _subject: { value: null, writable: !0 }, _connection: { value: null, writable: !0 }, _subscribe: { value: et._subscribe }, _isComplete: { value: et._isComplete, writable: !0 }, getSubject: { value: et.getSubject }, connect: { value: et.connect }, refCount: { value: et.refCount } };
        class rt extends E { constructor(t, e) { super(t), this.connectable = e } _error(t) { this._unsubscribe(), super._error(t) } _complete() { this.connectable._isComplete = !0, this._unsubscribe(), super._complete() } _unsubscribe() { const t = this.connectable; if (t) { this.connectable = null; const e = t._connection;
              t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe() } } }

        function st() { return new T } const it = "__parameters__";

        function ot(t, e, n) { const r = function(t) { return function(...e) { if (t) { const n = t(...e); for (const t in n) this[t] = n[t] } } }(e);

          function s(...t) { if (this instanceof s) return r.apply(this, t), this; const e = new s(...t); return n.annotation = e, n;

            function n(t, n, r) { const s = t.hasOwnProperty(it) ? t[it] : Object.defineProperty(t, it, { value: [] })[it]; for (; s.length <= r;) s.push(null); return (s[r] = s[r] || []).push(e), t } } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = t, s.annotationCls = s, s } const lt = ot("Inject", t => ({ token: t })),
          at = ot("Optional"),
          ut = ot("Self"),
          ct = ot("SkipSelf"); var ht = function(t) { return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t }({});

        function dt(t) { for (let e in t)
            if (t[e] === dt) return e; throw Error("Could not find renamed property on target object.") }

        function pt(t) { return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 } }

        function ft(t) { const e = t[gt]; return e && e.token === t ? e : null } const gt = dt({ ngInjectableDef: dt });

        function mt(t) { if ("string" == typeof t) return t; if (t instanceof Array) return "[" + t.map(mt).join(", ") + "]"; if (null == t) return "" + t; if (t.overriddenName) return `${t.overriddenName}`; if (t.name) return `${t.name}`; const e = t.toString(); if (null == e) return "" + e; const n = e.indexOf("\n"); return -1 === n ? e : e.substring(0, n) } const _t = dt({ __forward_ref__: dt });

        function yt(t) { return t.__forward_ref__ = yt, t.toString = function() { return mt(this()) }, t }

        function vt(t) { const e = t; return "function" == typeof e && e.hasOwnProperty(_t) && e.__forward_ref__ === yt ? e() : t } const bt = "undefined" != typeof globalThis && globalThis,
          wt = "undefined" != typeof window && window,
          Ct = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
          xt = "undefined" != typeof global && global,
          kt = bt || xt || wt || Ct;
        class St { constructor(t, e) { this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.ngInjectableDef = pt({ token: this, providedIn: e.providedIn || "root", factory: e.factory })) } toString() { return `InjectionToken ${this._desc}` } } const Et = new St("INJECTOR", -1),
          Tt = new Object,
          It = "ngTempTokenPath",
          Mt = "ngTokenPath",
          Pt = /\n/gm,
          Ot = "\u0275",
          At = "__source",
          Dt = dt({ provide: String, useValue: dt }); let Nt, Rt = void 0;

        function Vt(t) { const e = Rt; return Rt = t, e }

        function Lt(t, e = ht.Default) { if (void 0 === Rt) throw new Error("inject() must be called from an injection context"); return null === Rt ? function(t, e, n) { const r = ft(t); if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value; if (n & ht.Optional) return null; throw new Error(`Injector: NOT_FOUND [${mt(t)}]`) }(t, 0, e) : Rt.get(t, e & ht.Optional ? null : void 0, e) }

        function Ut(t, e = ht.Default) { return (Nt || Lt)(t, e) } class jt { get(t, e = Tt) { if (e === Tt) { const e = new Error(`NullInjectorError: No provider for ${mt(t)}!`); throw e.name = "NullInjectorError", e } return e } }

        function Ft(t, e, n, r = null) { t = t && "\n" === t.charAt(0) && t.charAt(1) == Ot ? t.substr(2) : t; let s = mt(e); if (e instanceof Array) s = e.map(mt).join(" -> ");
          else if ("object" == typeof e) { let t = []; for (let n in e)
              if (e.hasOwnProperty(n)) { let r = e[n];
                t.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : mt(r))) } s = `{${t.join(", ")}}` } return `${n}${r?"("+r+")":""}[${s}]: ${t.replace(Pt,"\n  ")}` } class Ht {} class $t {}

        function zt(t, e, n) { e >= t.length ? t.push(n) : t.splice(e, 0, n) }

        function Bt(t, e) { return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0] } const Gt = function() { var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 }; return t[t.Emulated] = "Emulated", t[t.Native] = "Native", t[t.None] = "None", t[t.ShadowDom] = "ShadowDom", t }(),
          Zt = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(kt))(),
          qt = "ngDebugContext",
          Wt = "ngOriginalError",
          Qt = "ngErrorLogger";

        function Kt(t) { return t[qt] }

        function Yt(t) { return t[Wt] }

        function Jt(t, ...e) { t.error(...e) } class Xt { constructor() { this._console = console } handleError(t) { const e = this._findOriginalError(t),
              n = this._findContext(t),
              r = function(t) { return t[Qt] || Jt }(t);
            r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n) } _findContext(t) { return t ? Kt(t) ? Kt(t) : this._findContext(Yt(t)) : null } _findOriginalError(t) { let e = Yt(t); for (; e && Yt(e);) e = Yt(e); return e } } let te = !0,
          ee = !1;

        function ne() { return ee = !0, te } class re { constructor(t) { if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) { const t = this.inertDocument.createElement("html");
              this.inertDocument.appendChild(t), this.inertBodyElement = this.inertDocument.createElement("body"), t.appendChild(this.inertBodyElement) } this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function() { try { return !!window.DOMParser } catch (t) { return !1 } }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR } getInertBodyElement_XHR(t) { t = "<body><remove></remove>" + t + "</body>"; try { t = encodeURI(t) } catch (r) { return null } const e = new XMLHttpRequest;
            e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(void 0); const n = e.response.body; return n.removeChild(n.firstChild), n } getInertBodyElement_DOMParser(t) { t = "<body><remove></remove>" + t + "</body>"; try { const e = (new window.DOMParser).parseFromString(t, "text/html").body; return e.removeChild(e.firstChild), e } catch (e) { return null } } getInertBodyElement_InertDocument(t) { const e = this.inertDocument.createElement("template"); return "content" in e ? (e.innerHTML = t, e) : (this.inertBodyElement.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement) } stripCustomNsAttrs(t) { const e = t.attributes; for (let r = e.length - 1; 0 < r; r--) { const n = e.item(r).name; "xmlns:ns1" !== n && 0 !== n.indexOf("ns1:") || t.removeAttribute(n) } let n = t.firstChild; for (; n;) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), n = n.nextSibling } } const se = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
          ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

        function oe(t) { return (t = String(t)).match(se) || t.match(ie) ? t : (ne() && console.warn(`WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`), "unsafe:" + t) }

        function le(t) { const e = {}; for (const n of t.split(",")) e[n] = !0; return e }

        function ae(...t) { const e = {}; for (const n of t)
            for (const t in n) n.hasOwnProperty(t) && (e[t] = !0); return e } const ue = le("area,br,col,hr,img,wbr"),
          ce = le("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
          he = le("rp,rt"),
          de = ae(he, ce),
          pe = ae(ue, ae(ce, le("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), ae(he, le("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), de),
          fe = le("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
          ge = le("srcset"),
          me = ae(fe, ge, le("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), le("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
          _e = le("script,style,template");
        class ye { constructor() { this.sanitizedSomething = !1, this.buf = [] } sanitizeChildren(t) { let e = t.firstChild,
              n = !0; for (; e;)
              if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild) e = e.firstChild;
              else
                for (; e;) { e.nodeType === Node.ELEMENT_NODE && this.endElement(e); let t = this.checkClobberedElement(e, e.nextSibling); if (t) { e = t; break } e = this.checkClobberedElement(e, e.parentNode) }
            return this.buf.join("") } startElement(t) { const e = t.nodeName.toLowerCase(); if (!pe.hasOwnProperty(e)) return this.sanitizedSomething = !0, !_e.hasOwnProperty(e);
            this.buf.push("<"), this.buf.push(e); const n = t.attributes; for (let s = 0; s < n.length; s++) { const t = n.item(s),
                e = t.name,
                i = e.toLowerCase(); if (!me.hasOwnProperty(i)) { this.sanitizedSomething = !0; continue } let o = t.value;
              fe[i] && (o = oe(o)), ge[i] && (r = o, o = (r = String(r)).split(",").map(t => oe(t.trim())).join(", ")), this.buf.push(" ", e, '="', we(o), '"') } var r; return this.buf.push(">"), !0 } endElement(t) { const e = t.nodeName.toLowerCase();
            pe.hasOwnProperty(e) && !ue.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">")) } chars(t) { this.buf.push(we(t)) } checkClobberedElement(t, e) { if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`); return e } } const ve = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
          be = /([^\#-~ |!])/g;

        function we(t) { return t.replace(/&/g, "&amp;").replace(ve, (function(t) { return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";" })).replace(be, (function(t) { return "&#" + t.charCodeAt(0) + ";" })).replace(/</g, "&lt;").replace(/>/g, "&gt;") } let Ce;

        function xe(t) { return "content" in t && function(t) { return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName }(t) ? t.content : null } const ke = function() { var t = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 }; return t[t.NONE] = "NONE", t[t.HTML] = "HTML", t[t.STYLE] = "STYLE", t[t.SCRIPT] = "SCRIPT", t[t.URL] = "URL", t[t.RESOURCE_URL] = "RESOURCE_URL", t }();
        class Se {} const Ee = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
          Te = /^url\(([^)]+)\)$/,
          Ie = /([A-Z])/g;

        function Me(t) { try { return null != t ? t.toString().slice(0, 30) : t } catch (e) { return "[ERROR] Exception while trying to serialize the value" } } let Pe = (() => { class t {} return t.__NG_ELEMENT_ID__ = () => Oe(), t })(); const Oe = (...t) => {},
          Ae = new St("The presence of this token marks an injector as being the root injector."),
          De = function(t, e, n) { return new Fe(t, e, n) }; let Ne = (() => { class t { static create(t, e) { return Array.isArray(t) ? De(t, e, "") : De(t.providers, t.parent, t.name || "") } } return t.THROW_IF_NOT_FOUND = Tt, t.NULL = new jt, t.ngInjectableDef = pt({ token: t, providedIn: "any", factory: () => Ut(Et) }), t.__NG_ELEMENT_ID__ = -1, t })(); const Re = function(t) { return t },
          Ve = [],
          Le = Re,
          Ue = function() { return Array.prototype.slice.call(arguments) },
          je = "\u0275";
        class Fe { constructor(t, e = Ne.NULL, n = null) { this.parent = e, this.source = n; const r = this._records = new Map;
            r.set(Ne, { token: Ne, fn: Re, deps: Ve, value: this, useNew: !1 }), r.set(Et, { token: Et, fn: Re, deps: Ve, value: this, useNew: !1 }),
              function t(e, n) { if (n)
                  if ((n = vt(n)) instanceof Array)
                    for (let r = 0; r < n.length; r++) t(e, n[r]);
                  else { if ("function" == typeof n) throw $e("Function/Class not supported", n); if (!n || "object" != typeof n || !n.provide) throw $e("Unexpected provider", n); { let t = vt(n.provide); const r = function(t) { const e = function(t) { let e = Ve; const n = t.deps; if (n && n.length) { e = []; for (let t = 0; t < n.length; t++) { let r = 6,
                                s = vt(n[t]); if (s instanceof Array)
                                for (let t = 0, e = s; t < e.length; t++) { const n = e[t];
                                  n instanceof at || n == at ? r |= 1 : n instanceof ct || n == ct ? r &= -3 : n instanceof ut || n == ut ? r &= -5 : s = n instanceof lt ? n.token : vt(n) } e.push({ token: s, options: r }) } } else if (t.useExisting) e = [{ token: vt(t.useExisting), options: 6 }];
                          else if (!(n || Dt in t)) throw $e("'deps' required", t); return e }(t); let n = Re,
                          r = Ve,
                          s = !1,
                          i = vt(t.provide); if (Dt in t) r = t.useValue;
                        else if (t.useFactory) n = t.useFactory;
                        else if (t.useExisting);
                        else if (t.useClass) s = !0, n = vt(t.useClass);
                        else { if ("function" != typeof i) throw $e("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                          s = !0, n = i } return { deps: e, fn: n, useNew: s, value: r } }(n); if (!0 === n.multi) { let r = e.get(t); if (r) { if (r.fn !== Ue) throw He(t) } else e.set(t, r = { token: n.provide, deps: [], useNew: !1, fn: Ue, value: Ve });
                        r.deps.push({ token: t = n, options: 6 }) } const s = e.get(t); if (s && s.fn == Ue) throw He(t);
                      e.set(t, r) } } }(r, t) } get(t, e, n = ht.Default) { const r = this._records.get(t); try { return function t(e, n, r, s, i, o) { try { return function(e, n, r, s, i, o) { let l; if (!n || o & ht.SkipSelf) o & ht.Self || (l = s.get(e, i, ht.Default));
                    else { if ((l = n.value) == Le) throw Error(je + "Circular dependency"); if (l === Ve) { n.value = Le; let e = void 0,
                          i = n.useNew,
                          o = n.fn,
                          a = n.deps,
                          u = Ve; if (a.length) { u = []; for (let e = 0; e < a.length; e++) { const n = a[e],
                              i = n.options,
                              o = 2 & i ? r.get(n.token) : void 0;
                            u.push(t(n.token, o, r, o || 4 & i ? s : Ne.NULL, 1 & i ? null : Ne.THROW_IF_NOT_FOUND, ht.Default)) } } n.value = l = i ? new o(...u) : o.apply(e, u) } } return l }(e, n, r, s, i, o) } catch (l) { throw l instanceof Error || (l = new Error(l)), (l[It] = l[It] || []).unshift(e), n && n.value == Le && (n.value = Ve), l } }(t, r, this._records, this.parent, e, n) } catch (s) { return function(t, e, n, r) { const s = t[It]; throw e[At] && s.unshift(e[At]), t.message = Ft("\n" + t.message, s, "StaticInjectorError", r), t[Mt] = s, t[It] = null, t }(s, t, 0, this.source) } } toString() { const t = []; return this._records.forEach((e, n) => t.push(mt(n))), `StaticInjector[${t.join(", ")}]` } }

        function He(t) { return $e("Cannot mix multi providers and regular providers", t) }

        function $e(t, e) { return new Error(Ft(t, e, "StaticInjectorError")) } const ze = new St("AnalyzeForEntryComponents"); let Be = null;

        function Ge() { if (!Be) { const t = kt.Symbol; if (t && t.iterator) Be = t.iterator;
            else { const t = Object.getOwnPropertyNames(Map.prototype); for (let e = 0; e < t.length; ++e) { const n = t[e]; "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (Be = n) } } } return Be }

        function Ze(t, e) { return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e) }

        function qe(t, e) { const n = Qe(t),
            r = Qe(e); if (n && r) return function(t, e, n) { const r = t[Ge()](),
              s = e[Ge()](); for (;;) { const t = r.next(),
                e = s.next(); if (t.done && e.done) return !0; if (t.done || e.done) return !1; if (!n(t.value, e.value)) return !1 } }(t, e, qe); { const s = t && ("object" == typeof t || "function" == typeof t),
              i = e && ("object" == typeof e || "function" == typeof e); return !(n || !s || r || !i) || Ze(t, e) } } class We { constructor(t) { this.wrapped = t } static wrap(t) { return new We(t) } static unwrap(t) { return We.isWrapped(t) ? t.wrapped : t } static isWrapped(t) { return t instanceof We } }

        function Qe(t) { return !!Ke(t) && (Array.isArray(t) || !(t instanceof Map) && Ge() in t) }

        function Ke(t) { return null !== t && ("function" == typeof t || "object" == typeof t) }

        function Ye(t) { return !!t && "function" == typeof t.then }

        function Je(t) { return !!t && "function" == typeof t.subscribe } class Xe { constructor(t, e, n) { this.previousValue = t, this.currentValue = e, this.firstChange = n } isFirstChange() { return this.firstChange } } class tn {} class en {}

        function nn(t) { const e = Error(`No component factory found for ${mt(t)}. Did you add it to @NgModule.entryComponents?`); return e[rn] = t, e } const rn = "ngComponent";
        class sn { resolveComponentFactory(t) { throw nn(t) } } let on = (() => { class t {} return t.NULL = new sn, t })();
        class ln { constructor(t, e, n) { this._parent = e, this._ngModule = n, this._factories = new Map; for (let r = 0; r < t.length; r++) { const e = t[r];
              this._factories.set(e.componentType, e) } } resolveComponentFactory(t) { let e = this._factories.get(t); if (!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e) throw nn(t); return new an(e, this._ngModule) } } class an extends en { constructor(t, e) { super(), this.factory = t, this.ngModule = e, this.selector = t.selector, this.componentType = t.componentType, this.ngContentSelectors = t.ngContentSelectors, this.inputs = t.inputs, this.outputs = t.outputs } create(t, e, n, r) { return this.factory.create(t, e, n, r || this.ngModule) } }

        function un(...t) {} let cn = (() => { class t { constructor(t) { this.nativeElement = t } } return t.__NG_ELEMENT_ID__ = () => hn(t), t })(); const hn = un;
        class dn {} class pn {} const fn = function() { var t = { Important: 1, DashCase: 2 }; return t[t.Important] = "Important", t[t.DashCase] = "DashCase", t }(); let gn = (() => { class t {} return t.__NG_ELEMENT_ID__ = () => mn(), t })(); const mn = un;
        class _n { constructor(t) { this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".") } } const yn = new _n("8.2.14");
        class vn { constructor() {} supports(t) { return Qe(t) } create(t) { return new wn(t) } } const bn = (t, e) => e;
        class wn { constructor(t) { this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || bn } forEachItem(t) { let e; for (e = this._itHead; null !== e; e = e._next) t(e) } forEachOperation(t) { let e = this._itHead,
              n = this._removalsHead,
              r = 0,
              s = null; for (; e || n;) { const i = !n || e && e.currentIndex < Sn(n, r, s) ? e : n,
                o = Sn(i, r, s),
                l = i.currentIndex; if (i === n) r--, n = n._nextRemoved;
              else if (e = e._next, null == i.previousIndex) r++;
              else { s || (s = []); const t = o - r,
                  e = l - r; if (t != e) { for (let n = 0; n < t; n++) { const r = n < s.length ? s[n] : s[n] = 0,
                      i = r + n;
                    e <= i && i < t && (s[n] = r + 1) } s[i.previousIndex] = e - t } } o !== l && t(i, o, l) } } forEachPreviousItem(t) { let e; for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e) } forEachAddedItem(t) { let e; for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e) } forEachMovedItem(t) { let e; for (e = this._movesHead; null !== e; e = e._nextMoved) t(e) } forEachRemovedItem(t) { let e; for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e) } forEachIdentityChange(t) { let e; for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e) } diff(t) { if (null == t && (t = []), !Qe(t)) throw new Error(`Error trying to diff '${mt(t)}'. Only arrays and iterables are allowed`); return this.check(t) ? this : null } onDestroy() {} check(t) { this._reset(); let e, n, r, s = this._itHead,
              i = !1; if (Array.isArray(t)) { this.length = t.length; for (let e = 0; e < this.length; e++) r = this._trackByFn(e, n = t[e]), null !== s && Ze(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, n, r, e)), Ze(s.item, n) || this._addIdentityChange(s, n)) : (s = this._mismatch(s, n, r, e), i = !0), s = s._next } else e = 0,
              function(t, e) { if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else { const n = t[Ge()](); let r; for (; !(r = n.next()).done;) e(r.value) } }(t, t => { r = this._trackByFn(e, t), null !== s && Ze(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, t, r, e)), Ze(s.item, t) || this._addIdentityChange(s, t)) : (s = this._mismatch(s, t, r, e), i = !0), s = s._next, e++ }), this.length = e; return this._truncate(s), this.collection = t, this.isDirty } get isDirty() { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead } _reset() { if (this.isDirty) { let t, e; for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next; for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex; for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
              this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null } } _mismatch(t, e, n, r) { let s; return null === t ? s = this._itTail : (s = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Ze(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, s, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Ze(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, s, r)) : t = this._addAfter(new Cn(e, n), s, r), t } _verifyReinsertion(t, e, n, r) { let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null); return null !== s ? t = this._reinsertAfter(s, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t } _truncate(t) { for (; null !== t;) { const e = t._next;
              this._addToRemovals(this._unlink(t)), t = e } null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null) } _reinsertAfter(t, e, n) { null !== this._unlinkedRecords && this._unlinkedRecords.remove(t); const r = t._prevRemoved,
              s = t._nextRemoved; return null === r ? this._removalsHead = s : r._nextRemoved = s, null === s ? this._removalsTail = r : s._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t } _moveAfter(t, e, n) { return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t } _addAfter(t, e, n) { return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t } _insertAfter(t, e, n) { const r = null === e ? this._itHead : e._next; return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new kn), this._linkedRecords.put(t), t.currentIndex = n, t } _remove(t) { return this._addToRemovals(this._unlink(t)) } _unlink(t) { null !== this._linkedRecords && this._linkedRecords.remove(t); const e = t._prev,
              n = t._next; return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t } _addToMoves(t, e) { return t.previousIndex === e ? t : (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t, t) } _addToRemovals(t) { return null === this._unlinkedRecords && (this._unlinkedRecords = new kn), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t } _addIdentityChange(t, e) { return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t } } class Cn { constructor(t, e) { this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null } } class xn { constructor() { this._head = null, this._tail = null } add(t) { null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t) } get(t, e) { let n; for (n = this._head; null !== n; n = n._nextDup)
              if ((null === e || e <= n.currentIndex) && Ze(n.trackById, t)) return n; return null } remove(t) { const e = t._prevDup,
              n = t._nextDup; return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head } } class kn { constructor() { this.map = new Map } put(t) { const e = t.trackById; let n = this.map.get(e);
            n || (n = new xn, this.map.set(e, n)), n.add(t) } get(t, e) { const n = this.map.get(t); return n ? n.get(t, e) : null } remove(t) { const e = t.trackById; return this.map.get(e).remove(t) && this.map.delete(e), t } get isEmpty() { return 0 === this.map.size } clear() { this.map.clear() } }

        function Sn(t, e, n) { const r = t.previousIndex; if (null === r) return r; let s = 0; return n && r < n.length && (s = n[r]), r + e + s } class En { constructor() {} supports(t) { return t instanceof Map || Ke(t) } create() { return new Tn } } class Tn { constructor() { this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null } get isDirty() { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead } forEachItem(t) { let e; for (e = this._mapHead; null !== e; e = e._next) t(e) } forEachPreviousItem(t) { let e; for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e) } forEachChangedItem(t) { let e; for (e = this._changesHead; null !== e; e = e._nextChanged) t(e) } forEachAddedItem(t) { let e; for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e) } forEachRemovedItem(t) { let e; for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e) } diff(t) { if (t) { if (!(t instanceof Map || Ke(t))) throw new Error(`Error trying to diff '${mt(t)}'. Only maps and objects are allowed`) } else t = new Map; return this.check(t) ? this : null } onDestroy() {} check(t) { this._reset(); let e = this._mapHead; if (this._appendAfter = null, this._forEach(t, (t, n) => { if (e && e.key === n) this._maybeAddToChanges(e, t), this._appendAfter = e, e = e._next;
                else { const r = this._getOrCreateRecordForKey(n, t);
                  e = this._insertBeforeOrAppend(e, r) } }), e) { e._prev && (e._prev._next = null), this._removalsHead = e; for (let t = e; null !== t; t = t._nextRemoved) t === this._mapHead && (this._mapHead = null), this._records.delete(t.key), t._nextRemoved = t._next, t.previousValue = t.currentValue, t.currentValue = null, t._prev = null, t._next = null } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty } _insertBeforeOrAppend(t, e) { if (t) { const n = t._prev; return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t } return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null } _getOrCreateRecordForKey(t, e) { if (this._records.has(t)) { const n = this._records.get(t);
              this._maybeAddToChanges(n, e); const r = n._prev,
                s = n._next; return r && (r._next = s), s && (s._prev = r), n._next = null, n._prev = null, n } const n = new In(t); return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n } _reset() { if (this.isDirty) { let t; for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next; for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue; for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
              this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null } } _maybeAddToChanges(t, e) { Ze(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t)) } _addToAdditions(t) { null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t) } _addToChanges(t) { null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t) } _forEach(t, e) { t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n)) } } class In { constructor(t) { this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null } } let Mn = (() => { class t { constructor(t) { this.factories = t } static create(e, n) { if (null != n) { const t = n.factories.slice();
                  e = e.concat(t) } return new t(e) } static extend(e) { return { provide: t, useFactory: n => { if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector"); return t.create(e, n) }, deps: [
                    [t, new ct, new at]
                  ] } } find(t) { const e = this.factories.find(e => e.supports(t)); if (null != e) return e; throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`); var n } } return t.ngInjectableDef = pt({ token: t, providedIn: "root", factory: () => new t([new vn]) }), t })(),
          Pn = (() => { class t { constructor(t) { this.factories = t } static create(e, n) { if (n) { const t = n.factories.slice();
                  e = e.concat(t) } return new t(e) } static extend(e) { return { provide: t, useFactory: n => { if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector"); return t.create(e, n) }, deps: [
                    [t, new ct, new at]
                  ] } } find(t) { const e = this.factories.find(e => e.supports(t)); if (e) return e; throw new Error(`Cannot find a differ supporting object '${t}'`) } } return t.ngInjectableDef = pt({ token: t, providedIn: "root", factory: () => new t([new En]) }), t })(); const On = [new En],
          An = new Mn([new vn]),
          Dn = new Pn(On); let Nn = (() => { class t {} return t.__NG_ELEMENT_ID__ = () => Rn(t, cn), t })(); const Rn = un; let Vn = (() => { class t {} return t.__NG_ELEMENT_ID__ = () => Ln(t, cn), t })(); const Ln = un;

        function Un(t, e, n, r) { let s = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${e}'. Current value: '${n}'.`; return r && (s += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
            function(t, e) { const n = new Error(t); return jn(n, e), n }(s, t) }

        function jn(t, e) { t[qt] = e, t[Qt] = e.logError.bind(e) }

        function Fn(t) { return new Error(`ViewDestroyedError: Attempt to use a destroyed view: ${t}`) }

        function Hn(t, e, n) { const r = t.state,
            s = 1792 & r; return s === e ? (t.state = -1793 & r | n, t.initIndex = -1, !0) : s === n }

        function $n(t, e, n) { return (1792 & t.state) === e && t.initIndex <= n && (t.initIndex = n + 1, !0) }

        function zn(t, e) { return t.nodes[e] }

        function Bn(t, e) { return t.nodes[e] }

        function Gn(t, e) { return t.nodes[e] }

        function Zn(t, e) { return t.nodes[e] }

        function qn(t, e) { return t.nodes[e] } const Wn = { setCurrentNode: void 0, createRootView: void 0, createEmbeddedView: void 0, createComponentView: void 0, createNgModuleRef: void 0, overrideProvider: void 0, overrideComponentView: void 0, clearOverrides: void 0, checkAndUpdateView: void 0, checkNoChangesView: void 0, destroyView: void 0, resolveDep: void 0, createDebugContext: void 0, handleEvent: void 0, updateDirectives: void 0, updateRenderer: void 0, dirtyParentQueries: void 0 },
          Qn = () => {},
          Kn = new Map;

        function Yn(t) { let e = Kn.get(t); return e || (e = mt(t) + "_" + Kn.size, Kn.set(t, e)), e }

        function Jn(t, e, n, r) { if (We.isWrapped(r)) { r = We.unwrap(r); const s = t.def.nodes[e].bindingIndex + n,
              i = We.unwrap(t.oldValues[s]);
            t.oldValues[s] = new We(i) } return r } const Xn = "$$undefined",
          tr = "$$empty";

        function er(t) { return { id: Xn, styles: t.styles, encapsulation: t.encapsulation, data: t.data } } let nr = 0;

        function rr(t, e, n, r) { return !(!(2 & t.state) && Ze(t.oldValues[e.bindingIndex + n], r)) }

        function sr(t, e, n, r) { return !!rr(t, e, n, r) && (t.oldValues[e.bindingIndex + n] = r, !0) }

        function ir(t, e, n, r) { const s = t.oldValues[e.bindingIndex + n]; if (1 & t.state || !qe(s, r)) { const i = e.bindings[n].name; throw Un(Wn.createDebugContext(t, e.nodeIndex), `${i}: ${s}`, `${i}: ${r}`, 0 != (1 & t.state)) } }

        function or(t) { let e = t; for (; e;) 2 & e.def.flags && (e.state |= 8), e = e.viewContainerParent || e.parent }

        function lr(t, e) { let n = t; for (; n && n !== e;) n.state |= 64, n = n.viewContainerParent || n.parent }

        function ar(t, e, n, r) { try { return or(33554432 & t.def.nodes[e].flags ? Bn(t, e).componentView : t), Wn.handleEvent(t, e, n, r) } catch (s) { t.root.errorHandler.handleError(s) } }

        function ur(t) { return t.parent ? Bn(t.parent, t.parentNodeDef.nodeIndex) : null }

        function cr(t) { return t.parent ? t.parentNodeDef.parent : null }

        function hr(t, e) { switch (201347067 & e.flags) {
            case 1:
              return Bn(t, e.nodeIndex).renderElement;
            case 2:
              return zn(t, e.nodeIndex).renderText } }

        function dr(t) { return !!t.parent && !!(32768 & t.parentNodeDef.flags) }

        function pr(t) { return !(!t.parent || 32768 & t.parentNodeDef.flags) }

        function fr(t) { const e = {}; let n = 0; const r = {}; return t && t.forEach(([t, s]) => { "number" == typeof t ? (e[t] = s, n |= function(t) { return 1 << t % 32 }(t)) : r[t] = s }), { matchedQueries: e, references: r, matchedQueryIds: n } }

        function gr(t, e) { return t.map(t => { let n, r; return Array.isArray(t) ? [r, n] = t : (r = 0, n = t), n && ("function" == typeof n || "object" == typeof n) && e && Object.defineProperty(n, At, { value: e, configurable: !0 }), { flags: r, token: n, tokenKey: Yn(n) } }) }

        function mr(t, e, n) { let r = n.renderParent; return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === Gt.Native ? Bn(t, n.renderParent.nodeIndex).renderElement : void 0 : e } const _r = new WeakMap;

        function yr(t) { let e = _r.get(t); return e || ((e = t(() => Qn)).factory = t, _r.set(t, e)), e }

        function vr(t, e, n, r, s) { 3 === e && (n = t.renderer.parentNode(hr(t, t.def.lastRenderRootNode))), br(t, e, 0, t.def.nodes.length - 1, n, r, s) }

        function br(t, e, n, r, s, i, o) { for (let l = n; l <= r; l++) { const n = t.def.nodes[l];
            11 & n.flags && Cr(t, n, e, s, i, o), l += n.childCount } }

        function wr(t, e, n, r, s, i) { let o = t; for (; o && !dr(o);) o = o.parent; const l = o.parent,
            a = cr(o),
            u = a.nodeIndex + a.childCount; for (let c = a.nodeIndex + 1; c <= u; c++) { const t = l.def.nodes[c];
            t.ngContentIndex === e && Cr(l, t, n, r, s, i), c += t.childCount } if (!l.parent) { const o = t.root.projectableNodes[e]; if (o)
              for (let e = 0; e < o.length; e++) xr(t, o[e], n, r, s, i) } }

        function Cr(t, e, n, r, s, i) { if (8 & e.flags) wr(t, e.ngContent.index, n, r, s, i);
          else { const o = hr(t, e); if (3 === n && 33554432 & e.flags && 48 & e.bindingFlags ? (16 & e.bindingFlags && xr(t, o, n, r, s, i), 32 & e.bindingFlags && xr(Bn(t, e.nodeIndex).componentView, o, n, r, s, i)) : xr(t, o, n, r, s, i), 16777216 & e.flags) { const o = Bn(t, e.nodeIndex).viewContainer._embeddedViews; for (let t = 0; t < o.length; t++) vr(o[t], n, r, s, i) } 1 & e.flags && !e.element.name && br(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, s, i) } }

        function xr(t, e, n, r, s, i) { const o = t.renderer; switch (n) {
            case 1:
              o.appendChild(r, e); break;
            case 2:
              o.insertBefore(r, e, s); break;
            case 3:
              o.removeChild(r, e); break;
            case 0:
              i.push(e) } } const kr = /^:([^:]+):(.+)$/;

        function Sr(t) { if (":" === t[0]) { const e = t.match(kr); return [e[1], e[2]] } return ["", t] }

        function Er(t) { let e = 0; for (let n = 0; n < t.length; n++) e |= t[n].flags; return e }

        function Tr(t, e, n, r, s, i, o, l, a, u, c, h, d, p, f, g, m, _, y, v) { switch (t) {
            case 1:
              return e + Ir(n) + r;
            case 2:
              return e + Ir(n) + r + Ir(s) + i;
            case 3:
              return e + Ir(n) + r + Ir(s) + i + Ir(o) + l;
            case 4:
              return e + Ir(n) + r + Ir(s) + i + Ir(o) + l + Ir(a) + u;
            case 5:
              return e + Ir(n) + r + Ir(s) + i + Ir(o) + l + Ir(a) + u + Ir(c) + h;
            case 6:
              return e + Ir(n) + r + Ir(s) + i + Ir(o) + l + Ir(a) + u + Ir(c) + h + Ir(d) + p;
            case 7:
              return e + Ir(n) + r + Ir(s) + i + Ir(o) + l + Ir(a) + u + Ir(c) + h + Ir(d) + p + Ir(f) + g;
            case 8:
              return e + Ir(n) + r + Ir(s) + i + Ir(o) + l + Ir(a) + u + Ir(c) + h + Ir(d) + p + Ir(f) + g + Ir(m) + _;
            case 9:
              return e + Ir(n) + r + Ir(s) + i + Ir(o) + l + Ir(a) + u + Ir(c) + h + Ir(d) + p + Ir(f) + g + Ir(m) + _ + Ir(y) + v;
            default:
              throw new Error("Does not support more than 9 expressions") } }

        function Ir(t) { return null != t ? t.toString() : "" } const Mr = new Object,
          Pr = Yn(Ne),
          Or = Yn(Et),
          Ar = Yn(Ht);

        function Dr(t, e, n, r) { return n = vt(n), { index: -1, deps: gr(r, mt(e)), flags: t, token: e, value: n } }

        function Nr(t, e, n = Ne.THROW_IF_NOT_FOUND) { const r = Vt(t); try { if (8 & e.flags) return e.token; if (2 & e.flags && (n = null), 1 & e.flags) return t._parent.get(e.token, n); const o = e.tokenKey; switch (o) {
              case Pr:
              case Or:
              case Ar:
                return t } const l = t._def.providersByKey[o]; let a; if (l) { let e = t._providers[l.index]; return void 0 === e && (e = t._providers[l.index] = Rr(t, l)), e === Mr ? void 0 : e } if ((a = ft(e.token)) && (s = t, null != (i = a).providedIn && (function(t, e) { return t._def.modules.indexOf(e) > -1 }(s, i.providedIn) || "root" === i.providedIn && s._def.isRoot))) { const n = t._providers.length; return t._def.providers[n] = t._def.providersByKey[e.tokenKey] = { flags: 5120, value: a.factory, deps: [], index: n, token: e.token }, t._providers[n] = Mr, t._providers[n] = Rr(t, t._def.providersByKey[e.tokenKey]) } return 4 & e.flags ? n : t._parent.get(e.token, n) } finally { Vt(r) } var s, i }

        function Rr(t, e) { let n; switch (201347067 & e.flags) {
            case 512:
              n = function(t, e, n) { const r = n.length; switch (r) {
                  case 0:
                    return new e;
                  case 1:
                    return new e(Nr(t, n[0]));
                  case 2:
                    return new e(Nr(t, n[0]), Nr(t, n[1]));
                  case 3:
                    return new e(Nr(t, n[0]), Nr(t, n[1]), Nr(t, n[2]));
                  default:
                    const s = new Array(r); for (let e = 0; e < r; e++) s[e] = Nr(t, n[e]); return new e(...s) } }(t, e.value, e.deps); break;
            case 1024:
              n = function(t, e, n) { const r = n.length; switch (r) {
                  case 0:
                    return e();
                  case 1:
                    return e(Nr(t, n[0]));
                  case 2:
                    return e(Nr(t, n[0]), Nr(t, n[1]));
                  case 3:
                    return e(Nr(t, n[0]), Nr(t, n[1]), Nr(t, n[2]));
                  default:
                    const s = Array(r); for (let e = 0; e < r; e++) s[e] = Nr(t, n[e]); return e(...s) } }(t, e.value, e.deps); break;
            case 2048:
              n = Nr(t, e.deps[0]); break;
            case 256:
              n = e.value } return n === Mr || null === n || "object" != typeof n || 131072 & e.flags || "function" != typeof n.ngOnDestroy || (e.flags |= 131072), void 0 === n ? Mr : n }

        function Vr(t, e) { const n = t.viewContainer._embeddedViews; if ((null == e || e >= n.length) && (e = n.length - 1), e < 0) return null; const r = n[e]; return r.viewContainerParent = null, Bt(n, e), Wn.dirtyParentQueries(r), Ur(r), r }

        function Lr(t, e, n) { const r = e ? hr(e, e.def.lastRenderRootNode) : t.renderElement,
            s = n.renderer.parentNode(r),
            i = n.renderer.nextSibling(r);
          vr(n, 2, s, i, void 0) }

        function Ur(t) { vr(t, 3, null, null, void 0) } const jr = new Object;

        function Fr(t, e, n, r, s, i) { return new Hr(t, e, n, r, s, i) } class Hr extends en { constructor(t, e, n, r, s, i) { super(), this.selector = t, this.componentType = e, this._inputs = r, this._outputs = s, this.ngContentSelectors = i, this.viewDefFactory = n } get inputs() { const t = [],
              e = this._inputs; for (let n in e) t.push({ propName: n, templateName: e[n] }); return t } get outputs() { const t = []; for (let e in this._outputs) t.push({ propName: e, templateName: this._outputs[e] }); return t } create(t, e, n, r) { if (!r) throw new Error("ngModule should be provided"); const s = yr(this.viewDefFactory),
              i = s.nodes[0].element.componentProvider.nodeIndex,
              o = Wn.createRootView(t, e || [], n, s, r, jr),
              l = Gn(o, i).instance; return n && o.renderer.setAttribute(Bn(o, 0).renderElement, "ng-version", yn.full), new $r(o, new Zr(o), l) } } class $r extends tn { constructor(t, e, n) { super(), this._view = t, this._viewRef = e, this._component = n, this._elDef = this._view.def.nodes[0], this.hostView = e, this.changeDetectorRef = e, this.instance = n } get location() { return new cn(Bn(this._view, this._elDef.nodeIndex).renderElement) } get injector() { return new Kr(this._view, this._elDef) } get componentType() { return this._component.constructor } destroy() { this._viewRef.destroy() } onDestroy(t) { this._viewRef.onDestroy(t) } }

        function zr(t, e, n) { return new Br(t, e, n) } class Br { constructor(t, e, n) { this._view = t, this._elDef = e, this._data = n, this._embeddedViews = [] } get element() { return new cn(this._data.renderElement) } get injector() { return new Kr(this._view, this._elDef) } get parentInjector() { let t = this._view,
              e = this._elDef.parent; for (; !e && t;) e = cr(t), t = t.parent; return t ? new Kr(t, e) : new Kr(this._view, null) } clear() { for (let t = this._embeddedViews.length - 1; t >= 0; t--) { const e = Vr(this._data, t);
              Wn.destroyView(e) } } get(t) { const e = this._embeddedViews[t]; if (e) { const t = new Zr(e); return t.attachToViewContainerRef(this), t } return null } get length() { return this._embeddedViews.length } createEmbeddedView(t, e, n) { const r = t.createEmbeddedView(e || {}); return this.insert(r, n), r } createComponent(t, e, n, r, s) { const i = n || this.parentInjector;
            s || t instanceof an || (s = i.get(Ht)); const o = t.create(i, r, void 0, s); return this.insert(o.hostView, e), o } insert(t, e) { if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!"); const n = t; return function(t, e, n, r) { let s = e.viewContainer._embeddedViews;
              null == n && (n = s.length), r.viewContainerParent = t, zt(s, n, r),
                function(t, e) { const n = ur(e); if (!n || n === t || 16 & e.state) return;
                  e.state |= 16; let r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []), r.push(e),
                    function(t, e) { if (4 & e.flags) return;
                      t.nodeFlags |= 4, e.flags |= 4; let n = e.parent; for (; n;) n.childFlags |= 4, n = n.parent }(e.parent.def, e.parentNodeDef) }(e, r), Wn.dirtyParentQueries(r), Lr(e, n > 0 ? s[n - 1] : null, r) }(this._view, this._data, e, n._view), n.attachToViewContainerRef(this), t } move(t, e) { if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!"); const n = this._embeddedViews.indexOf(t._view); return function(t, e, n) { const r = t.viewContainer._embeddedViews,
                s = r[e];
              Bt(r, e), null == n && (n = r.length), zt(r, n, s), Wn.dirtyParentQueries(s), Ur(s), Lr(t, n > 0 ? r[n - 1] : null, s) }(this._data, n, e), t } indexOf(t) { return this._embeddedViews.indexOf(t._view) } remove(t) { const e = Vr(this._data, t);
            e && Wn.destroyView(e) } detach(t) { const e = Vr(this._data, t); return e ? new Zr(e) : null } }

        function Gr(t) { return new Zr(t) } class Zr { constructor(t) { this._view = t, this._viewContainerRef = null, this._appRef = null } get rootNodes() { return function(t) { const e = []; return vr(t, 0, void 0, void 0, e), e }(this._view) } get context() { return this._view.context } get destroyed() { return 0 != (128 & this._view.state) } markForCheck() { or(this._view) } detach() { this._view.state &= -5 } detectChanges() { const t = this._view.root.rendererFactory;
            t.begin && t.begin(); try { Wn.checkAndUpdateView(this._view) } finally { t.end && t.end() } } checkNoChanges() { Wn.checkNoChangesView(this._view) } reattach() { this._view.state |= 4 } onDestroy(t) { this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t) } destroy() { this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Wn.destroyView(this._view) } detachFromAppRef() { this._appRef = null, Ur(this._view), Wn.dirtyParentQueries(this._view) } attachToAppRef(t) { if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
            this._appRef = t } attachToViewContainerRef(t) { if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
            this._viewContainerRef = t } }

        function qr(t, e) { return new Wr(t, e) } class Wr extends Nn { constructor(t, e) { super(), this._parentView = t, this._def = e } createEmbeddedView(t) { return new Zr(Wn.createEmbeddedView(this._parentView, this._def, this._def.element.template, t)) } get elementRef() { return new cn(Bn(this._parentView, this._def.nodeIndex).renderElement) } }

        function Qr(t, e) { return new Kr(t, e) } class Kr { constructor(t, e) { this.view = t, this.elDef = e } get(t, e = Ne.THROW_IF_NOT_FOUND) { return Wn.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: t, tokenKey: Yn(t) }, e) } }

        function Yr(t, e) { const n = t.def.nodes[e]; if (1 & n.flags) { const e = Bn(t, n.nodeIndex); return n.element.template ? e.template : e.renderElement } if (2 & n.flags) return zn(t, n.nodeIndex).renderText; if (20240 & n.flags) return Gn(t, n.nodeIndex).instance; throw new Error(`Illegal state: read nodeValue for node index ${e}`) }

        function Jr(t) { return new Xr(t.renderer) } class Xr { constructor(t) { this.delegate = t } selectRootElement(t) { return this.delegate.selectRootElement(t) } createElement(t, e) { const [n, r] = Sr(e), s = this.delegate.createElement(r, n); return t && this.delegate.appendChild(t, s), s } createViewRoot(t) { return t } createTemplateAnchor(t) { const e = this.delegate.createComment(""); return t && this.delegate.appendChild(t, e), e } createText(t, e) { const n = this.delegate.createText(e); return t && this.delegate.appendChild(t, n), n } projectNodes(t, e) { for (let n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n]) } attachViewAfter(t, e) { const n = this.delegate.parentNode(t),
              r = this.delegate.nextSibling(t); for (let s = 0; s < e.length; s++) this.delegate.insertBefore(n, e[s], r) } detachView(t) { for (let e = 0; e < t.length; e++) { const n = t[e],
                r = this.delegate.parentNode(n);
              this.delegate.removeChild(r, n) } } destroyView(t, e) { for (let n = 0; n < e.length; n++) this.delegate.destroyNode(e[n]) } listen(t, e, n) { return this.delegate.listen(t, e, n) } listenGlobal(t, e, n) { return this.delegate.listen(t, e, n) } setElementProperty(t, e, n) { this.delegate.setProperty(t, e, n) } setElementAttribute(t, e, n) { const [r, s] = Sr(e);
            null != n ? this.delegate.setAttribute(t, s, n, r) : this.delegate.removeAttribute(t, s, r) } setBindingDebugInfo(t, e, n) {} setElementClass(t, e, n) { n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e) } setElementStyle(t, e, n) { null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e) } invokeElementMethod(t, e, n) { t[e].apply(t, n) } setText(t, e) { this.delegate.setValue(t, e) } animate() { throw new Error("Renderer.animate is no longer supported!") } }

        function ts(t, e, n, r) { return new es(t, e, n, r) } class es { constructor(t, e, n, r) { this._moduleType = t, this._parent = e, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this,
              function(t) { const e = t._def,
                  n = t._providers = new Array(e.providers.length); for (let r = 0; r < e.providers.length; r++) { const s = e.providers[r];
                  4096 & s.flags || void 0 === n[r] && (n[r] = Rr(t, s)) } }(this) } get(t, e = Ne.THROW_IF_NOT_FOUND, n = ht.Default) { let r = 0; return n & ht.SkipSelf ? r |= 1 : n & ht.Self && (r |= 4), Nr(this, { token: t, tokenKey: Yn(t), flags: r }, e) } get instance() { return this.get(this._moduleType) } get componentFactoryResolver() { return this.get(on) } destroy() { if (this._destroyed) throw new Error(`The ng module ${mt(this.instance.constructor)} has already been destroyed.`);
            this._destroyed = !0,
              function(t, e) { const n = t._def,
                  r = new Set; for (let s = 0; s < n.providers.length; s++)
                  if (131072 & n.providers[s].flags) { const e = t._providers[s]; if (e && e !== Mr) { const t = e.ngOnDestroy; "function" != typeof t || r.has(e) || (t.apply(e), r.add(e)) } } }(this), this._destroyListeners.forEach(t => t()) } onDestroy(t) { this._destroyListeners.push(t) } } const ns = Yn(dn),
          rs = Yn(gn),
          ss = Yn(cn),
          is = Yn(Vn),
          os = Yn(Nn),
          ls = Yn(Pe),
          as = Yn(Ne),
          us = Yn(Et);

        function cs(t, e, n, r, s, i, o, l) { const a = []; if (o)
            for (let c in o) { const [t, e] = o[c];
              a[t] = { flags: 8, name: c, nonMinifiedName: e, ns: null, securityContext: null, suffix: null } }
          const u = []; if (l)
            for (let c in l) u.push({ type: 1, propName: c, target: null, eventName: l[c] }); return ps(t, e |= 16384, n, r, s, s, i, a, u) }

        function hs(t, e, n) { return ps(-1, t |= 16, null, 0, e, e, n) }

        function ds(t, e, n, r, s) { return ps(-1, t, e, 0, n, r, s) }

        function ps(t, e, n, r, s, i, o, l, a) { const { matchedQueries: u, references: c, matchedQueryIds: h } = fr(n);
          a || (a = []), l || (l = []), i = vt(i); const d = gr(o, mt(s)); return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: e, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: u, matchedQueryIds: h, references: c, ngContentIndex: -1, childCount: r, bindings: l, bindingFlags: Er(l), outputs: a, element: null, provider: { token: s, value: i, deps: d }, text: null, query: null, ngContent: null } }

        function fs(t, e) { return ys(t, e) }

        function gs(t, e) { let n = t; for (; n.parent && !dr(n);) n = n.parent; return vs(n.parent, cr(n), !0, e.provider.value, e.provider.deps) }

        function ms(t, e) { const n = vs(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps); if (e.outputs.length)
            for (let r = 0; r < e.outputs.length; r++) { const s = e.outputs[r],
                i = n[s.propName]; if (!Je(i)) throw new Error(`@Output ${s.propName} not initialized in '${n.constructor.name}'.`); { const n = i.subscribe(_s(t, e.parent.nodeIndex, s.eventName));
                t.disposables[e.outputIndex + r] = n.unsubscribe.bind(n) } }
          return n }

        function _s(t, e, n) { return r => ar(t, e, n, r) }

        function ys(t, e) { const n = (8192 & e.flags) > 0,
            r = e.provider; switch (201347067 & e.flags) {
            case 512:
              return vs(t, e.parent, n, r.value, r.deps);
            case 1024:
              return function(t, e, n, r, s) { const i = s.length; switch (i) {
                  case 0:
                    return r();
                  case 1:
                    return r(ws(t, e, n, s[0]));
                  case 2:
                    return r(ws(t, e, n, s[0]), ws(t, e, n, s[1]));
                  case 3:
                    return r(ws(t, e, n, s[0]), ws(t, e, n, s[1]), ws(t, e, n, s[2]));
                  default:
                    const o = Array(i); for (let r = 0; r < i; r++) o[r] = ws(t, e, n, s[r]); return r(...o) } }(t, e.parent, n, r.value, r.deps);
            case 2048:
              return ws(t, e.parent, n, r.deps[0]);
            case 256:
              return r.value } }

        function vs(t, e, n, r, s) { const i = s.length; switch (i) {
            case 0:
              return new r;
            case 1:
              return new r(ws(t, e, n, s[0]));
            case 2:
              return new r(ws(t, e, n, s[0]), ws(t, e, n, s[1]));
            case 3:
              return new r(ws(t, e, n, s[0]), ws(t, e, n, s[1]), ws(t, e, n, s[2]));
            default:
              const o = new Array(i); for (let r = 0; r < i; r++) o[r] = ws(t, e, n, s[r]); return new r(...o) } } const bs = {};

        function ws(t, e, n, r, s = Ne.THROW_IF_NOT_FOUND) { if (8 & r.flags) return r.token; const i = t;
          2 & r.flags && (s = null); const o = r.tokenKey;
          o === ls && (n = !(!e || !e.element.componentView)), e && 1 & r.flags && (n = !1, e = e.parent); let l = t; for (; l;) { if (e) switch (o) {
              case ns:
                return Jr(Cs(l, e, n));
              case rs:
                return Cs(l, e, n).renderer;
              case ss:
                return new cn(Bn(l, e.nodeIndex).renderElement);
              case is:
                return Bn(l, e.nodeIndex).viewContainer;
              case os:
                if (e.element.template) return Bn(l, e.nodeIndex).template; break;
              case ls:
                return Gr(Cs(l, e, n));
              case as:
              case us:
                return Qr(l, e);
              default:
                const t = (n ? e.element.allProviders : e.element.publicProviders)[o]; if (t) { let e = Gn(l, t.nodeIndex); return e || (e = { instance: ys(l, t) }, l.nodes[t.nodeIndex] = e), e.instance } } n = dr(l), e = cr(l), l = l.parent, 4 & r.flags && (l = null) } const a = i.root.injector.get(r.token, bs); return a !== bs || s === bs ? a : i.root.ngModule.injector.get(r.token, s) }

        function Cs(t, e, n) { let r; if (n) r = Bn(t, e.nodeIndex).componentView;
          else
            for (r = t; r.parent && !dr(r);) r = r.parent; return r }

        function xs(t, e, n, r, s, i) { if (32768 & n.flags) { const e = Bn(t, n.parent.nodeIndex).componentView;
            2 & e.def.flags && (e.state |= 8) } if (e.instance[n.bindings[r].name] = s, 524288 & n.flags) { i = i || {}; const e = We.unwrap(t.oldValues[n.bindingIndex + r]);
            i[n.bindings[r].nonMinifiedName] = new Xe(e, s, 0 != (2 & t.state)) } return t.oldValues[n.bindingIndex + r] = s, i }

        function ks(t, e) { if (!(t.def.nodeFlags & e)) return; const n = t.def.nodes; let r = 0; for (let s = 0; s < n.length; s++) { const i = n[s]; let o = i.parent; for (!o && i.flags & e && Es(t, s, i.flags & e, r++), 0 == (i.childFlags & e) && (s += i.childCount); o && 1 & o.flags && s === o.nodeIndex + o.childCount;) o.directChildFlags & e && (r = Ss(t, o, e, r)), o = o.parent } }

        function Ss(t, e, n, r) { for (let s = e.nodeIndex + 1; s <= e.nodeIndex + e.childCount; s++) { const e = t.def.nodes[s];
            e.flags & n && Es(t, s, e.flags & n, r++), s += e.childCount } return r }

        function Es(t, e, n, r) { const s = Gn(t, e); if (!s) return; const i = s.instance;
          i && (Wn.setCurrentNode(t, e), 1048576 & n && $n(t, 512, r) && i.ngAfterContentInit(), 2097152 & n && i.ngAfterContentChecked(), 4194304 & n && $n(t, 768, r) && i.ngAfterViewInit(), 8388608 & n && i.ngAfterViewChecked(), 131072 & n && i.ngOnDestroy()) } const Ts = new St("SCHEDULER_TOKEN", { providedIn: "root", factory: () => Zt }),
          Is = {},
          Ms = function() { var t = { LocaleId: 0, DayPeriodsFormat: 1, DayPeriodsStandalone: 2, DaysFormat: 3, DaysStandalone: 4, MonthsFormat: 5, MonthsStandalone: 6, Eras: 7, FirstDayOfWeek: 8, WeekendRange: 9, DateFormat: 10, TimeFormat: 11, DateTimeFormat: 12, NumberSymbols: 13, NumberFormats: 14, CurrencySymbol: 15, CurrencyName: 16, Currencies: 17, PluralCase: 18, ExtraData: 19 }; return t[t.LocaleId] = "LocaleId", t[t.DayPeriodsFormat] = "DayPeriodsFormat", t[t.DayPeriodsStandalone] = "DayPeriodsStandalone", t[t.DaysFormat] = "DaysFormat", t[t.DaysStandalone] = "DaysStandalone", t[t.MonthsFormat] = "MonthsFormat", t[t.MonthsStandalone] = "MonthsStandalone", t[t.Eras] = "Eras", t[t.FirstDayOfWeek] = "FirstDayOfWeek", t[t.WeekendRange] = "WeekendRange", t[t.DateFormat] = "DateFormat", t[t.TimeFormat] = "TimeFormat", t[t.DateTimeFormat] = "DateTimeFormat", t[t.NumberSymbols] = "NumberSymbols", t[t.NumberFormats] = "NumberFormats", t[t.CurrencySymbol] = "CurrencySymbol", t[t.CurrencyName] = "CurrencyName", t[t.Currencies] = "Currencies", t[t.PluralCase] = "PluralCase", t[t.ExtraData] = "ExtraData", t }(),
          Ps = void 0; var Os = ["en", [
            ["a", "p"],
            ["AM", "PM"], Ps
          ],
          [
            ["AM", "PM"], Ps, Ps
          ],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
          ], Ps, [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          ], Ps, [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"]
          ], 0, [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", Ps, "{1} 'at' {0}", Ps],
          [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {},
          function(t) { let e = Math.floor(Math.abs(t)),
              n = t.toString().replace(/^[^.]*\.?/, "").length; return 1 === e && 0 === n ? 1 : 5 }
        ];

        function As(t) { const e = t.toLowerCase().replace(/_/g, "-"); let n = Is[e]; if (n) return n; const r = e.split("-")[0]; if (n = Is[r]) return n; if ("en" === r) return Os; throw new Error(`Missing locale data for the locale "${t}".`) } const Ds = "en-US"; let Ns = Ds;

        function Rs(t) { var e;
          e = "Expected localeId to be defined", null == t && function(t) { throw new Error(`ASSERTION ERROR: ${t}`) }(e), "string" == typeof t && (Ns = t.toLowerCase().replace(/_/g, "-")) } class Vs extends T { constructor(t = !1) { super(), this.__isAsync = t } emit(t) { super.next(t) } subscribe(t, e, n) { let r, s = t => null,
              i = () => null;
            t && "object" == typeof t ? (r = this.__isAsync ? e => { setTimeout(() => t.next(e)) } : e => { t.next(e) }, t.error && (s = this.__isAsync ? e => { setTimeout(() => t.error(e)) } : e => { t.error(e) }), t.complete && (i = this.__isAsync ? () => { setTimeout(() => t.complete()) } : () => { t.complete() })) : (r = this.__isAsync ? e => { setTimeout(() => t(e)) } : e => { t(e) }, e && (s = this.__isAsync ? t => { setTimeout(() => e(t)) } : t => { e(t) }), n && (i = this.__isAsync ? () => { setTimeout(() => n()) } : () => { n() })); const o = super.subscribe(r, s, i); return t instanceof d && t.add(o), o } }

        function Ls() { return this._results[Ge()]() } class Us { constructor() { this.dirty = !0, this._results = [], this.changes = new Vs, this.length = 0; const t = Ge(),
              e = Us.prototype;
            e[t] || (e[t] = Ls) } map(t) { return this._results.map(t) } filter(t) { return this._results.filter(t) } find(t) { return this._results.find(t) } reduce(t, e) { return this._results.reduce(t, e) } forEach(t) { this._results.forEach(t) } some(t) { return this._results.some(t) } toArray() { return this._results.slice() } toString() { return this._results.toString() } reset(t) { this._results = function t(e, n) { void 0 === n && (n = e); for (let r = 0; r < e.length; r++) { let s = e[r];
                Array.isArray(s) ? (n === e && (n = e.slice(0, r)), t(s, n)) : n !== e && n.push(s) } return n }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0] } notifyOnChanges() { this.changes.emit(this) } setDirty() { this.dirty = !0 } destroy() { this.changes.complete(), this.changes.unsubscribe() } } const js = new St("Application Initializer");
        class Fs { constructor(t) { this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((t, e) => { this.resolve = t, this.reject = e }) } runInitializers() { if (this.initialized) return; const t = [],
              e = () => { this.done = !0, this.resolve() }; if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) { const e = this.appInits[n]();
                Ye(e) && t.push(e) } Promise.all(t).then(() => { e() }).catch(t => { this.reject(t) }), 0 === t.length && e(), this.initialized = !0 } } const Hs = new St("AppId");

        function $s() { return `${zs()}${zs()}${zs()}` }

        function zs() { return String.fromCharCode(97 + Math.floor(25 * Math.random())) } const Bs = new St("Platform Initializer"),
          Gs = new St("Platform ID"),
          Zs = new St("appBootstrapListener");
        class qs { log(t) { console.log(t) } warn(t) { console.warn(t) } } const Ws = new St("LocaleId"),
          Qs = !1;

        function Ks() { throw new Error("Runtime compiler is not loaded") } const Ys = Ks,
          Js = Ks,
          Xs = Ks,
          ti = Ks;
        class ei { constructor() { this.compileModuleSync = Ys, this.compileModuleAsync = Js, this.compileModuleAndAllComponentsSync = Xs, this.compileModuleAndAllComponentsAsync = ti } clearCache() {} clearCacheFor(t) {} getModuleId(t) {} } class ni {} let ri, si;

        function ii() { const t = kt.wtf; return !(!t || !(ri = t.trace) || (si = ri.events, 0)) } const oi = ii();

        function li(t, e) { return null } const ai = oi ? function(t, e = null) { return si.createScope(t, e) } : (t, e) => li,
          ui = oi ? function(t, e) { return ri.leaveScope(t, e), e } : (t, e) => e,
          ci = (() => Promise.resolve(0))();

        function hi(t) { "undefined" == typeof Zone ? ci.then(() => { t && t.apply(null, null) }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t) } class di { constructor({ enableLongStackTrace: t = !1 }) { if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Vs(!1), this.onMicrotaskEmpty = new Vs(!1), this.onStable = new Vs(!1), this.onError = new Vs(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js"); var e;
            Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (e = this)._inner = e._inner.fork({ name: "angular", properties: { isAngularZone: !0 }, onInvokeTask: (t, n, r, s, i, o) => { try { return mi(e), t.invokeTask(r, s, i, o) } finally { _i(e) } }, onInvoke: (t, n, r, s, i, o, l) => { try { return mi(e), t.invoke(r, s, i, o, l) } finally { _i(e) } }, onHasTask: (t, n, r, s) => { t.hasTask(r, s), n === r && ("microTask" == s.change ? (e.hasPendingMicrotasks = s.microTask, gi(e)) : "macroTask" == s.change && (e.hasPendingMacrotasks = s.macroTask)) }, onHandleError: (t, n, r, s) => (t.handleError(r, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }) } static isInAngularZone() { return !0 === Zone.current.get("isAngularZone") } static assertInAngularZone() { if (!di.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!") } static assertNotInAngularZone() { if (di.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!") } run(t, e, n) { return this._inner.run(t, e, n) } runTask(t, e, n, r) { const s = this._inner,
              i = s.scheduleEventTask("NgZoneEvent: " + r, t, fi, pi, pi); try { return s.runTask(i, e, n) } finally { s.cancelTask(i) } } runGuarded(t, e, n) { return this._inner.runGuarded(t, e, n) } runOutsideAngular(t) { return this._outer.run(t) } }

        function pi() {} const fi = {};

        function gi(t) { if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try { t._nesting++, t.onMicrotaskEmpty.emit(null) } finally { if (t._nesting--, !t.hasPendingMicrotasks) try { t.runOutsideAngular(() => t.onStable.emit(null)) } finally { t.isStable = !0 } } }

        function mi(t) { t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null)) }

        function _i(t) { t._nesting--, gi(t) } class yi { constructor() { this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Vs, this.onMicrotaskEmpty = new Vs, this.onStable = new Vs, this.onError = new Vs } run(t) { return t() } runGuarded(t) { return t() } runOutsideAngular(t) { return t() } runTask(t) { return t() } } class vi { constructor(t) { this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(() => { this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone") }) } _watchAngularEvents() { this._ngZone.onUnstable.subscribe({ next: () => { this._didWork = !0, this._isZoneStable = !1 } }), this._ngZone.runOutsideAngular(() => { this._ngZone.onStable.subscribe({ next: () => { di.assertNotInAngularZone(), hi(() => { this._isZoneStable = !0, this._runCallbacksIfReady() }) } }) }) } increasePendingRequestCount() { return this._pendingCount += 1, this._didWork = !0, this._pendingCount } decreasePendingRequestCount() { if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount } isStable() { return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks } _runCallbacksIfReady() { if (this.isStable()) hi(() => { for (; 0 !== this._callbacks.length;) { let t = this._callbacks.pop();
                clearTimeout(t.timeoutId), t.doneCb(this._didWork) } this._didWork = !1 });
            else { let t = this.getPendingTasks();
              this._callbacks = this._callbacks.filter(e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)), this._didWork = !0 } } getPendingTasks() { return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t => ({ source: t.source, creationLocation: t.creationLocation, data: t.data })) : [] } addCallback(t, e, n) { let r = -1;
            e && e > 0 && (r = setTimeout(() => { this._callbacks = this._callbacks.filter(t => t.timeoutId !== r), t(this._didWork, this.getPendingTasks()) }, e)), this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n }) } whenStable(t, e, n) { if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
            this.addCallback(t, e, n), this._runCallbacksIfReady() } getPendingRequestCount() { return this._pendingCount } findProviders(t, e, n) { return [] } } class bi { constructor() { this._applications = new Map, xi.addToWindow(this) } registerApplication(t, e) { this._applications.set(t, e) } unregisterApplication(t) { this._applications.delete(t) } unregisterAllApplications() { this._applications.clear() } getTestability(t) { return this._applications.get(t) || null } getAllTestabilities() { return Array.from(this._applications.values()) } getAllRootElements() { return Array.from(this._applications.keys()) } findTestabilityInTree(t, e = !0) { return xi.findTestabilityInTree(this, t, e) } } class wi { addToWindow(t) {} findTestabilityInTree(t, e, n) { return null } } let Ci, xi = new wi,
          ki = function(t, e, n) { return t.get(ni).createCompiler([e]).compileModuleAsync(n) },
          Si = function(t) { return t instanceof an }; const Ei = new St("AllowMultipleToken");
        class Ti { constructor(t, e) { this.name = t, this.token = e } }

        function Ii(t, e, n = []) { const r = `Platform: ${e}`,
            s = new St(r); return (e = []) => { let i = Mi(); if (!i || i.injector.get(Ei, !1))
              if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
              else { const t = n.concat(e).concat({ provide: s, useValue: !0 });! function(t) { if (Ci && !Ci.destroyed && !Ci.injector.get(Ei, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                  Ci = t.get(Pi); const e = t.get(Bs, null);
                  e && e.forEach(t => t()) }(Ne.create({ providers: t, name: r })) } return function(t) { const e = Mi(); if (!e) throw new Error("No platform exists!"); if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first."); return e }(s) } }

        function Mi() { return Ci && !Ci.destroyed ? Ci : null } class Pi { constructor(t) { this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1 } bootstrapModuleFactory(t, e) { const n = "noop" === (s = e ? e.ngZone : void 0) ? new yi : ("zone.js" === s ? void 0 : s) || new di({ enableLongStackTrace: ne() }),
              r = [{ provide: di, useValue: n }]; var s; return n.run(() => { const e = Ne.create({ providers: r, parent: this.injector, name: t.moduleType.name }),
                s = t.create(e),
                i = s.injector.get(Xt, null); if (!i) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?"); return Qs && Rs(s.injector.get(Ws, Ds) || Ds), s.onDestroy(() => Di(this._modules, s)), n.runOutsideAngular(() => n.onError.subscribe({ next: t => { i.handleError(t) } })),
                function(t, e, n) { try { const r = n(); return Ye(r) ? r.catch(n => { throw e.runOutsideAngular(() => t.handleError(n)), n }) : r } catch (r) { throw e.runOutsideAngular(() => t.handleError(r)), r } }(i, n, () => { const t = s.injector.get(Fs); return t.runInitializers(), t.donePromise.then(() => (this._moduleDoBootstrap(s), s)) }) }) } bootstrapModule(t, e = []) { const n = Oi({}, e); return ki(this.injector, n, t).then(t => this.bootstrapModuleFactory(t, n)) } _moduleDoBootstrap(t) { const e = t.injector.get(Ai); if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t));
            else { if (!t.instance.ngDoBootstrap) throw new Error(`The module ${mt(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` + "Please define one of these.");
              t.instance.ngDoBootstrap(e) } this._modules.push(t) } onDestroy(t) { this._destroyListeners.push(t) } get injector() { return this._injector } destroy() { if (this._destroyed) throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach(t => t.destroy()), this._destroyListeners.forEach(t => t()), this._destroyed = !0 } get destroyed() { return this._destroyed } }

        function Oi(t, e) { return Array.isArray(e) ? e.reduce(Oi, t) : Object.assign({}, t, e) } let Ai = (() => { class t { constructor(t, e, n, r, s, i) { this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = s, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = ne(), this._zone.onMicrotaskEmpty.subscribe({ next: () => { this._zone.run(() => { this.tick() }) } }); const o = new w(t => { this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => { t.next(this._stable), t.complete() }) }),
                l = new w(t => { let e;
                  this._zone.runOutsideAngular(() => { e = this._zone.onStable.subscribe(() => { di.assertNotInAngularZone(), hi(() => { this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, t.next(!0)) }) }) }); const n = this._zone.onUnstable.subscribe(() => { di.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => { t.next(!1) })) }); return () => { e.unsubscribe(), n.unsubscribe() } });
              this.isStable = function(...t) { let e = Number.POSITIVE_INFINITY,
                  n = null,
                  r = t[t.length - 1]; return M(r) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof r && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof w ? t[0] : Y(e)(G(t, n)) }(o, l.pipe(t => J()(function(t, e) { return function(e) { let n;
                  n = "function" == typeof t ? t : function() { return t }; const r = Object.create(e, nt); return r.source = e, r.subjectFactory = n, r } }(st)(t)))) } bootstrap(t, e) { if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."); let n;
              n = t instanceof en ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType); const r = Si(n) ? null : this._injector.get(Ht),
                s = n.create(Ne.NULL, [], e || n.selector, r);
              s.onDestroy(() => { this._unloadComponent(s) }); const i = s.injector.get(vi, null); return i && s.injector.get(bi).registerApplication(s.location.nativeElement, i), this._loadComponent(s), ne() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), s } tick() { if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively"); const e = t._tickScope(); try { this._runningTick = !0; for (let t of this._views) t.detectChanges(); if (this._enforceNoNewChanges)
                  for (let t of this._views) t.checkNoChanges() } catch (n) { this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n)) } finally { this._runningTick = !1, ui(e) } } attachView(t) { const e = t;
              this._views.push(e), e.attachToAppRef(this) } detachView(t) { const e = t;
              Di(this._views, e), e.detachFromAppRef() } _loadComponent(t) { this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(Zs, []).concat(this._bootstrapListeners).forEach(e => e(t)) } _unloadComponent(t) { this.detachView(t.hostView), Di(this.components, t) } ngOnDestroy() { this._views.slice().forEach(t => t.destroy()) } get viewCount() { return this._views.length } } return t._tickScope = ai("ApplicationRef#tick()"), t })();

        function Di(t, e) { const n = t.indexOf(e);
          n > -1 && t.splice(n, 1) } class Ni {} const Ri = "#",
          Vi = "NgFactory";
        class Li {} const Ui = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
        class ji { constructor(t, e) { this._compiler = t, this._config = e || Ui } load(t) { return !Qs && this._compiler instanceof ei ? this.loadFactory(t) : this.loadAndCompile(t) } loadAndCompile(t) { let [e, r] = t.split(Ri); return void 0 === r && (r = "default"), n("zn8P")(e).then(t => t[r]).then(t => Fi(t, e, r)).then(t => this._compiler.compileModuleAsync(t)) } loadFactory(t) { let [e, r] = t.split(Ri), s = Vi; return void 0 === r && (r = "default", s = ""), n("zn8P")(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t => t[r + s]).then(t => Fi(t, e, r)) } }

        function Fi(t, e, n) { if (!t) throw new Error(`Cannot find '${n}' in '${e}'`); return t } class Hi { constructor(t, e) { this.name = t, this.callback = e } } class $i { constructor(t, e, n) { this.listeners = [], this.parent = null, this._debugContext = n, this.nativeNode = t, e && e instanceof zi && e.addChild(this) } get injector() { return this._debugContext.injector } get componentInstance() { return this._debugContext.component } get context() { return this._debugContext.context } get references() { return this._debugContext.references } get providerTokens() { return this._debugContext.providerTokens } } class zi extends $i { constructor(t, e, n) { super(t, e, n), this.properties = {}, this.attributes = {}, this.classes = {}, this.styles = {}, this.childNodes = [], this.nativeElement = t } addChild(t) { t && (this.childNodes.push(t), t.parent = this) } removeChild(t) { const e = this.childNodes.indexOf(t); - 1 !== e && (t.parent = null, this.childNodes.splice(e, 1)) } insertChildrenAfter(t, e) { const n = this.childNodes.indexOf(t); - 1 !== n && (this.childNodes.splice(n + 1, 0, ...e), e.forEach(e => { e.parent && e.parent.removeChild(e), t.parent = this })) } insertBefore(t, e) { const n = this.childNodes.indexOf(t); - 1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), e.parent = this, this.childNodes.splice(n, 0, e)) } query(t) { return this.queryAll(t)[0] || null } queryAll(t) { const e = []; return function t(e, n, r) { e.childNodes.forEach(e => { e instanceof zi && (n(e) && r.push(e), t(e, n, r)) }) }(this, t, e), e } queryAllNodes(t) { const e = []; return function t(e, n, r) { e instanceof zi && e.childNodes.forEach(e => { n(e) && r.push(e), e instanceof zi && t(e, n, r) }) }(this, t, e), e } get children() { return this.childNodes.filter(t => t instanceof zi) } triggerEventHandler(t, e) { this.listeners.forEach(n => { n.name == t && n.callback(e) }) } } const Bi = new Map,
          Gi = function(t) { return Bi.get(t) || null };

        function Zi(t) { Bi.set(t.nativeNode, t) } const qi = Ii(null, "core", [{ provide: Gs, useValue: "unknown" }, { provide: Pi, deps: [Ne] }, { provide: bi, deps: [] }, { provide: qs, deps: [] }]);

        function Wi() { return An }

        function Qi() { return Dn }

        function Ki(t) { return t ? (Qs && Rs(t), t) : Ds }

        function Yi(t) { let e = []; return t.onStable.subscribe(() => { for (; e.length;) e.pop()() }),
            function(t) { e.push(t) } } class Ji { constructor(t) {} }

        function Xi(t, e, n, r, s, i) { t |= 1; const { matchedQueries: o, references: l, matchedQueryIds: a } = fr(e); return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: t, checkIndex: -1, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: o, matchedQueryIds: a, references: l, ngContentIndex: n, childCount: r, bindings: [], bindingFlags: 0, outputs: [], element: { ns: null, name: null, attrs: null, template: i ? yr(i) : null, componentProvider: null, componentView: null, componentRendererType: null, publicProviders: null, allProviders: null, handleEvent: s || Qn }, provider: null, text: null, query: null, ngContent: null } }

        function to(t, e, n, r, s, i, o = [], l, a, u, c, h) { u || (u = Qn); const { matchedQueries: d, references: p, matchedQueryIds: f } = fr(n); let g = null,
            m = null;
          i && ([g, m] = Sr(i)), l = l || []; const _ = new Array(l.length); for (let b = 0; b < l.length; b++) { const [t, e, n] = l[b], [r, s] = Sr(e); let i = void 0,
              o = void 0; switch (15 & t) {
              case 4:
                o = n; break;
              case 1:
              case 8:
                i = n } _[b] = { flags: t, ns: r, name: s, nonMinifiedName: s, securityContext: i, suffix: o } } a = a || []; const y = new Array(a.length); for (let b = 0; b < a.length; b++) { const [t, e] = a[b];
            y[b] = { type: 0, target: t, eventName: e, propName: null } } const v = (o = o || []).map(([t, e]) => { const [n, r] = Sr(t); return [n, r, e] }); return h = function(t) { if (t && t.id === Xn) { const e = null != t.encapsulation && t.encapsulation !== Gt.None || t.styles.length || Object.keys(t.data).length;
              t.id = e ? `c${nr++}` : tr } return t && t.id === tr && (t = null), t || null }(h), c && (e |= 33554432), { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: e |= 1, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: d, matchedQueryIds: f, references: p, ngContentIndex: r, childCount: s, bindings: _, bindingFlags: Er(_), outputs: y, element: { ns: g, name: m, attrs: v, template: null, componentProvider: null, componentView: c || null, componentRendererType: h, publicProviders: null, allProviders: null, handleEvent: u || Qn }, provider: null, text: null, query: null, ngContent: null } }

        function eo(t, e, n) { const r = n.element,
            s = t.root.selectorOrNode,
            i = t.renderer; let o; if (t.parent || !s) { o = r.name ? i.createElement(r.name, r.ns) : i.createComment(""); const s = mr(t, e, n);
            s && i.appendChild(s, o) } else o = i.selectRootElement(s, !!r.componentRendererType && r.componentRendererType.encapsulation === Gt.ShadowDom); if (r.attrs)
            for (let l = 0; l < r.attrs.length; l++) { const [t, e, n] = r.attrs[l];
              i.setAttribute(o, e, n, t) }
          return o }

        function no(t, e, n, r) { for (let o = 0; o < n.outputs.length; o++) { const l = n.outputs[o],
              a = ro(t, n.nodeIndex, (i = l.eventName, (s = l.target) ? `${s}:${i}` : i)); let u = l.target,
              c = t; "component" === l.target && (u = null, c = e); const h = c.renderer.listen(u || r, l.eventName, a);
            t.disposables[n.outputIndex + o] = h } var s, i }

        function ro(t, e, n) { return r => ar(t, e, n, r) }

        function so(t, e, n, r) { if (!sr(t, e, n, r)) return !1; const s = e.bindings[n],
            i = Bn(t, e.nodeIndex),
            o = i.renderElement,
            l = s.name; switch (15 & s.flags) {
            case 1:
              ! function(t, e, n, r, s, i) { const o = e.securityContext; let l = o ? t.root.sanitizer.sanitize(o, i) : i;
                l = null != l ? l.toString() : null; const a = t.renderer;
                null != i ? a.setAttribute(n, s, l, r) : a.removeAttribute(n, s, r) }(t, s, o, s.ns, l, r); break;
            case 2:
              ! function(t, e, n, r) { const s = t.renderer;
                r ? s.addClass(e, n) : s.removeClass(e, n) }(t, o, l, r); break;
            case 4:
              ! function(t, e, n, r, s) { let i = t.root.sanitizer.sanitize(ke.STYLE, s); if (null != i) { i = i.toString(); const t = e.suffix;
                  null != t && (i += t) } else i = null; const o = t.renderer;
                null != i ? o.setStyle(n, r, i) : o.removeStyle(n, r) }(t, s, o, l, r); break;
            case 8:
              ! function(t, e, n, r, s) { const i = e.securityContext; let o = i ? t.root.sanitizer.sanitize(i, s) : s;
                t.renderer.setProperty(n, r, o) }(33554432 & e.flags && 32 & s.flags ? i.componentView : t, s, o, l, r) } return !0 }

        function io(t) { const e = t.def.nodeMatchedQueries; for (; t.parent && pr(t);) { let n = t.parentNodeDef;
            t = t.parent; const r = n.nodeIndex + n.childCount; for (let s = 0; s <= r; s++) { const r = t.def.nodes[s];
              67108864 & r.flags && 536870912 & r.flags && (r.query.filterId & e) === r.query.filterId && qn(t, s).setDirty(), !(1 & r.flags && s + r.childCount < n.nodeIndex) && 67108864 & r.childFlags && 536870912 & r.childFlags || (s += r.childCount) } } if (134217728 & t.def.nodeFlags)
            for (let n = 0; n < t.def.nodes.length; n++) { const e = t.def.nodes[n];
              134217728 & e.flags && 536870912 & e.flags && qn(t, n).setDirty(), n += e.childCount } }

        function oo(t, e) { const n = qn(t, e.nodeIndex); if (!n.dirty) return; let r, s = void 0; if (67108864 & e.flags) { const n = e.parent.parent;
            s = lo(t, n.nodeIndex, n.nodeIndex + n.childCount, e.query, []), r = Gn(t, e.parent.nodeIndex).instance } else 134217728 & e.flags && (s = lo(t, 0, t.def.nodes.length - 1, e.query, []), r = t.component);
          n.reset(s); const i = e.query.bindings; let o = !1; for (let l = 0; l < i.length; l++) { const t = i[l]; let e; switch (t.bindingType) {
              case 0:
                e = n.first; break;
              case 1:
                e = n, o = !0 } r[t.propName] = e } o && n.notifyOnChanges() }

        function lo(t, e, n, r, s) { for (let i = e; i <= n; i++) { const e = t.def.nodes[i],
              n = e.matchedQueries[r.id]; if (null != n && s.push(ao(t, e, n)), 1 & e.flags && e.element.template && (e.element.template.nodeMatchedQueries & r.filterId) === r.filterId) { const n = Bn(t, i); if ((e.childMatchedQueries & r.filterId) === r.filterId && (lo(t, i + 1, i + e.childCount, r, s), i += e.childCount), 16777216 & e.flags) { const t = n.viewContainer._embeddedViews; for (let e = 0; e < t.length; e++) { const i = t[e],
                    o = ur(i);
                  o && o === n && lo(i, 0, i.def.nodes.length - 1, r, s) } } const o = n.template._projectedViews; if (o)
                for (let t = 0; t < o.length; t++) { const e = o[t];
                  lo(e, 0, e.def.nodes.length - 1, r, s) } }(e.childMatchedQueries & r.filterId) !== r.filterId && (i += e.childCount) } return s }

        function ao(t, e, n) { if (null != n) switch (n) {
            case 1:
              return Bn(t, e.nodeIndex).renderElement;
            case 0:
              return new cn(Bn(t, e.nodeIndex).renderElement);
            case 2:
              return Bn(t, e.nodeIndex).template;
            case 3:
              return Bn(t, e.nodeIndex).viewContainer;
            case 4:
              return Gn(t, e.nodeIndex).instance } }

        function uo(t, e, n) { const r = mr(t, e, n);
          r && wr(t, n.ngContent.index, 1, r, null, void 0) }

        function co(t, e) { return function(t, e, n) { const r = new Array(n.length); for (let s = 0; s < n.length; s++) { const t = n[s];
              r[s] = { flags: 8, name: t, ns: null, nonMinifiedName: t, securityContext: null, suffix: null } } return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: e, flags: 128, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: -1, childCount: 0, bindings: r, bindingFlags: Er(r), outputs: [], element: null, provider: null, text: null, query: null, ngContent: null } }(0, t, new Array(e + 1)) }

        function ho(t, e, n) { const r = new Array(n.length - 1); for (let s = 1; s < n.length; s++) r[s - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: n[s] }; return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: 2, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: e, childCount: 0, bindings: r, bindingFlags: 8, outputs: [], element: null, provider: null, text: { prefix: n[0] }, query: null, ngContent: null } }

        function po(t, e, n) { let r; const s = t.renderer;
          r = s.createText(n.text.prefix); const i = mr(t, e, n); return i && s.appendChild(i, r), { renderText: r } }

        function fo(t, e) { return (null != t ? t.toString() : "") + e.suffix }

        function go(t, e, n, r) { let s = 0,
            i = 0,
            o = 0,
            l = 0,
            a = 0,
            u = null,
            c = null,
            h = !1,
            d = !1,
            p = null; for (let f = 0; f < e.length; f++) { const t = e[f]; if (t.nodeIndex = f, t.parent = u, t.bindingIndex = s, t.outputIndex = i, t.renderParent = c, o |= t.flags, a |= t.matchedQueryIds, t.element) { const e = t.element;
              e.publicProviders = u ? u.element.publicProviders : Object.create(null), e.allProviders = e.publicProviders, h = !1, d = !1, t.element.template && (a |= t.element.template.nodeMatchedQueries) } if (_o(u, t, e.length), s += t.bindings.length, i += t.outputs.length, !c && 3 & t.flags && (p = t), 20224 & t.flags) { h || (h = !0, u.element.publicProviders = Object.create(u.element.publicProviders), u.element.allProviders = u.element.publicProviders); const e = 0 != (32768 & t.flags);
              0 == (8192 & t.flags) || e ? u.element.publicProviders[Yn(t.provider.token)] = t : (d || (d = !0, u.element.allProviders = Object.create(u.element.publicProviders)), u.element.allProviders[Yn(t.provider.token)] = t), e && (u.element.componentProvider = t) } if (u ? (u.childFlags |= t.flags, u.directChildFlags |= t.flags, u.childMatchedQueries |= t.matchedQueryIds, t.element && t.element.template && (u.childMatchedQueries |= t.element.template.nodeMatchedQueries)) : l |= t.flags, t.childCount > 0) u = t, mo(t) || (c = t);
            else
              for (; u && f === u.nodeIndex + u.childCount;) { const t = u.parent;
                t && (t.childFlags |= u.childFlags, t.childMatchedQueries |= u.childMatchedQueries), c = (u = t) && mo(u) ? u.renderParent : u } } return { factory: null, nodeFlags: o, rootNodeFlags: l, nodeMatchedQueries: a, flags: t, nodes: e, updateDirectives: n || Qn, updateRenderer: r || Qn, handleEvent: (t, n, r, s) => e[n].element.handleEvent(t, r, s), bindingCount: s, outputCount: i, lastRenderRootNode: p } }

        function mo(t) { return 0 != (1 & t.flags) && null === t.element.name }

        function _o(t, e, n) { const r = e.element && e.element.template; if (r) { if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!"); if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error(`Illegal State: Last root node of a template can't have embedded views, at index ${e.nodeIndex}!`) } if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0))) throw new Error(`Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${e.nodeIndex}!`); if (e.query) { if (67108864 & e.flags && (!t || 0 == (16384 & t.flags))) throw new Error(`Illegal State: Content Query nodes need to be children of directives, at index ${e.nodeIndex}!`); if (134217728 & e.flags && t) throw new Error(`Illegal State: View Query nodes have to be top level nodes, at index ${e.nodeIndex}!`) } if (e.childCount) { const r = t ? t.nodeIndex + t.childCount : n - 1; if (e.nodeIndex <= r && e.nodeIndex + e.childCount > r) throw new Error(`Illegal State: childCount of node leads outside of parent, at index ${e.nodeIndex}!`) } }

        function yo(t, e, n, r) { const s = wo(t.root, t.renderer, t, e, n); return Co(s, t.component, r), xo(s), s }

        function vo(t, e, n) { const r = wo(t, t.renderer, null, null, e); return Co(r, n, n), xo(r), r }

        function bo(t, e, n, r) { const s = e.element.componentRendererType; let i; return i = s ? t.root.rendererFactory.createRenderer(r, s) : t.root.renderer, wo(t.root, i, t, e.element.componentProvider, n) }

        function wo(t, e, n, r, s) { const i = new Array(s.nodes.length),
            o = s.outputCount ? new Array(s.outputCount) : null; return { def: s, parent: n, viewContainerParent: null, parentNodeDef: r, context: null, component: null, nodes: i, state: 13, root: t, renderer: e, oldValues: new Array(s.bindingCount), disposables: o, initIndex: -1 } }

        function Co(t, e, n) { t.component = e, t.context = n }

        function xo(t) { let e;
          dr(t) && (e = Bn(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement); const n = t.def,
            r = t.nodes; for (let s = 0; s < n.nodes.length; s++) { const i = n.nodes[s]; let o; switch (Wn.setCurrentNode(t, s), 201347067 & i.flags) {
              case 1:
                const n = eo(t, e, i); let l = void 0; if (33554432 & i.flags) { const e = yr(i.element.componentView);
                  l = Wn.createComponentView(t, i, e, n) } no(t, l, i, n), o = { renderElement: n, componentView: l, viewContainer: null, template: i.element.template ? qr(t, i) : void 0 }, 16777216 & i.flags && (o.viewContainer = zr(t, i, o)); break;
              case 2:
                o = po(t, e, i); break;
              case 512:
              case 1024:
              case 2048:
              case 256:
                (o = r[s]) || 4096 & i.flags || (o = { instance: fs(t, i) }); break;
              case 16:
                o = { instance: gs(t, i) }; break;
              case 16384:
                (o = r[s]) || (o = { instance: ms(t, i) }), 32768 & i.flags && Co(Bn(t, i.parent.nodeIndex).componentView, o.instance, o.instance); break;
              case 32:
              case 64:
              case 128:
                o = { value: void 0 }; break;
              case 67108864:
              case 134217728:
                o = new Us; break;
              case 8:
                uo(t, e, i), o = void 0 } r[s] = o } Ao(t, Oo.CreateViewNodes), Vo(t, 201326592, 268435456, 0) }

        function ko(t) { To(t), Wn.updateDirectives(t, 1), Do(t, Oo.CheckNoChanges), Wn.updateRenderer(t, 1), Ao(t, Oo.CheckNoChanges), t.state &= -97 }

        function So(t) { 1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, Hn(t, 0, 256), To(t), Wn.updateDirectives(t, 0), Do(t, Oo.CheckAndUpdate), Vo(t, 67108864, 536870912, 0); let e = Hn(t, 256, 512);
          ks(t, 2097152 | (e ? 1048576 : 0)), Wn.updateRenderer(t, 0), Ao(t, Oo.CheckAndUpdate), Vo(t, 134217728, 536870912, 0), ks(t, 8388608 | ((e = Hn(t, 512, 768)) ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97, Hn(t, 768, 1024) }

        function Eo(t, e, n, r, s, i, o, l, a, u, c, h, d) { return 0 === n ? function(t, e, n, r, s, i, o, l, a, u, c, h) { switch (201347067 & e.flags) {
              case 1:
                return function(t, e, n, r, s, i, o, l, a, u, c, h) { const d = e.bindings.length; let p = !1; return d > 0 && so(t, e, 0, n) && (p = !0), d > 1 && so(t, e, 1, r) && (p = !0), d > 2 && so(t, e, 2, s) && (p = !0), d > 3 && so(t, e, 3, i) && (p = !0), d > 4 && so(t, e, 4, o) && (p = !0), d > 5 && so(t, e, 5, l) && (p = !0), d > 6 && so(t, e, 6, a) && (p = !0), d > 7 && so(t, e, 7, u) && (p = !0), d > 8 && so(t, e, 8, c) && (p = !0), d > 9 && so(t, e, 9, h) && (p = !0), p }(t, e, n, r, s, i, o, l, a, u, c, h);
              case 2:
                return function(t, e, n, r, s, i, o, l, a, u, c, h) { let d = !1; const p = e.bindings,
                    f = p.length; if (f > 0 && sr(t, e, 0, n) && (d = !0), f > 1 && sr(t, e, 1, r) && (d = !0), f > 2 && sr(t, e, 2, s) && (d = !0), f > 3 && sr(t, e, 3, i) && (d = !0), f > 4 && sr(t, e, 4, o) && (d = !0), f > 5 && sr(t, e, 5, l) && (d = !0), f > 6 && sr(t, e, 6, a) && (d = !0), f > 7 && sr(t, e, 7, u) && (d = !0), f > 8 && sr(t, e, 8, c) && (d = !0), f > 9 && sr(t, e, 9, h) && (d = !0), d) { let d = e.text.prefix;
                    f > 0 && (d += fo(n, p[0])), f > 1 && (d += fo(r, p[1])), f > 2 && (d += fo(s, p[2])), f > 3 && (d += fo(i, p[3])), f > 4 && (d += fo(o, p[4])), f > 5 && (d += fo(l, p[5])), f > 6 && (d += fo(a, p[6])), f > 7 && (d += fo(u, p[7])), f > 8 && (d += fo(c, p[8])), f > 9 && (d += fo(h, p[9])); const g = zn(t, e.nodeIndex).renderText;
                    t.renderer.setValue(g, d) } return d }(t, e, n, r, s, i, o, l, a, u, c, h);
              case 16384:
                return function(t, e, n, r, s, i, o, l, a, u, c, h) { const d = Gn(t, e.nodeIndex),
                    p = d.instance; let f = !1,
                    g = void 0; const m = e.bindings.length; return m > 0 && rr(t, e, 0, n) && (f = !0, g = xs(t, d, e, 0, n, g)), m > 1 && rr(t, e, 1, r) && (f = !0, g = xs(t, d, e, 1, r, g)), m > 2 && rr(t, e, 2, s) && (f = !0, g = xs(t, d, e, 2, s, g)), m > 3 && rr(t, e, 3, i) && (f = !0, g = xs(t, d, e, 3, i, g)), m > 4 && rr(t, e, 4, o) && (f = !0, g = xs(t, d, e, 4, o, g)), m > 5 && rr(t, e, 5, l) && (f = !0, g = xs(t, d, e, 5, l, g)), m > 6 && rr(t, e, 6, a) && (f = !0, g = xs(t, d, e, 6, a, g)), m > 7 && rr(t, e, 7, u) && (f = !0, g = xs(t, d, e, 7, u, g)), m > 8 && rr(t, e, 8, c) && (f = !0, g = xs(t, d, e, 8, c, g)), m > 9 && rr(t, e, 9, h) && (f = !0, g = xs(t, d, e, 9, h, g)), g && p.ngOnChanges(g), 65536 & e.flags && $n(t, 256, e.nodeIndex) && p.ngOnInit(), 262144 & e.flags && p.ngDoCheck(), f }(t, e, n, r, s, i, o, l, a, u, c, h);
              case 32:
              case 64:
              case 128:
                return function(t, e, n, r, s, i, o, l, a, u, c, h) { const d = e.bindings; let p = !1; const f = d.length; if (f > 0 && sr(t, e, 0, n) && (p = !0), f > 1 && sr(t, e, 1, r) && (p = !0), f > 2 && sr(t, e, 2, s) && (p = !0), f > 3 && sr(t, e, 3, i) && (p = !0), f > 4 && sr(t, e, 4, o) && (p = !0), f > 5 && sr(t, e, 5, l) && (p = !0), f > 6 && sr(t, e, 6, a) && (p = !0), f > 7 && sr(t, e, 7, u) && (p = !0), f > 8 && sr(t, e, 8, c) && (p = !0), f > 9 && sr(t, e, 9, h) && (p = !0), p) { const p = Zn(t, e.nodeIndex); let g; switch (201347067 & e.flags) {
                      case 32:
                        g = new Array(d.length), f > 0 && (g[0] = n), f > 1 && (g[1] = r), f > 2 && (g[2] = s), f > 3 && (g[3] = i), f > 4 && (g[4] = o), f > 5 && (g[5] = l), f > 6 && (g[6] = a), f > 7 && (g[7] = u), f > 8 && (g[8] = c), f > 9 && (g[9] = h); break;
                      case 64:
                        g = {}, f > 0 && (g[d[0].name] = n), f > 1 && (g[d[1].name] = r), f > 2 && (g[d[2].name] = s), f > 3 && (g[d[3].name] = i), f > 4 && (g[d[4].name] = o), f > 5 && (g[d[5].name] = l), f > 6 && (g[d[6].name] = a), f > 7 && (g[d[7].name] = u), f > 8 && (g[d[8].name] = c), f > 9 && (g[d[9].name] = h); break;
                      case 128:
                        const t = n; switch (f) {
                          case 1:
                            g = t.transform(n); break;
                          case 2:
                            g = t.transform(r); break;
                          case 3:
                            g = t.transform(r, s); break;
                          case 4:
                            g = t.transform(r, s, i); break;
                          case 5:
                            g = t.transform(r, s, i, o); break;
                          case 6:
                            g = t.transform(r, s, i, o, l); break;
                          case 7:
                            g = t.transform(r, s, i, o, l, a); break;
                          case 8:
                            g = t.transform(r, s, i, o, l, a, u); break;
                          case 9:
                            g = t.transform(r, s, i, o, l, a, u, c); break;
                          case 10:
                            g = t.transform(r, s, i, o, l, a, u, c, h) } } p.value = g } return p }(t, e, n, r, s, i, o, l, a, u, c, h);
              default:
                throw "unreachable" } }(t, e, r, s, i, o, l, a, u, c, h, d) : function(t, e, n) { switch (201347067 & e.flags) {
              case 1:
                return function(t, e, n) { let r = !1; for (let s = 0; s < n.length; s++) so(t, e, s, n[s]) && (r = !0); return r }(t, e, n);
              case 2:
                return function(t, e, n) { const r = e.bindings; let s = !1; for (let i = 0; i < n.length; i++) sr(t, e, i, n[i]) && (s = !0); if (s) { let s = ""; for (let t = 0; t < n.length; t++) s += fo(n[t], r[t]);
                    s = e.text.prefix + s; const i = zn(t, e.nodeIndex).renderText;
                    t.renderer.setValue(i, s) } return s }(t, e, n);
              case 16384:
                return function(t, e, n) { const r = Gn(t, e.nodeIndex),
                    s = r.instance; let i = !1,
                    o = void 0; for (let l = 0; l < n.length; l++) rr(t, e, l, n[l]) && (i = !0, o = xs(t, r, e, l, n[l], o)); return o && s.ngOnChanges(o), 65536 & e.flags && $n(t, 256, e.nodeIndex) && s.ngOnInit(), 262144 & e.flags && s.ngDoCheck(), i }(t, e, n);
              case 32:
              case 64:
              case 128:
                return function(t, e, n) { const r = e.bindings; let s = !1; for (let i = 0; i < n.length; i++) sr(t, e, i, n[i]) && (s = !0); if (s) { const s = Zn(t, e.nodeIndex); let i; switch (201347067 & e.flags) {
                      case 32:
                        i = n; break;
                      case 64:
                        i = {}; for (let s = 0; s < n.length; s++) i[r[s].name] = n[s]; break;
                      case 128:
                        const t = n[0],
                          e = n.slice(1);
                        i = t.transform(...e) } s.value = i } return s }(t, e, n);
              default:
                throw "unreachable" } }(t, e, r) }

        function To(t) { const e = t.def; if (4 & e.nodeFlags)
            for (let n = 0; n < e.nodes.length; n++) { const r = e.nodes[n]; if (4 & r.flags) { const e = Bn(t, n).template._projectedViews; if (e)
                  for (let n = 0; n < e.length; n++) { const r = e[n];
                    r.state |= 32, lr(r, t) } } else 0 == (4 & r.childFlags) && (n += r.childCount) } }

        function Io(t, e, n, r, s, i, o, l, a, u, c, h, d) { return 0 === n ? function(t, e, n, r, s, i, o, l, a, u, c, h) { const d = e.bindings.length;
            d > 0 && ir(t, e, 0, n), d > 1 && ir(t, e, 1, r), d > 2 && ir(t, e, 2, s), d > 3 && ir(t, e, 3, i), d > 4 && ir(t, e, 4, o), d > 5 && ir(t, e, 5, l), d > 6 && ir(t, e, 6, a), d > 7 && ir(t, e, 7, u), d > 8 && ir(t, e, 8, c), d > 9 && ir(t, e, 9, h) }(t, e, r, s, i, o, l, a, u, c, h, d) : function(t, e, n) { for (let r = 0; r < n.length; r++) ir(t, e, r, n[r]) }(t, e, r), !1 }

        function Mo(t, e) { if (qn(t, e.nodeIndex).dirty) throw Un(Wn.createDebugContext(t, e.nodeIndex), `Query ${e.query.id} not dirty`, `Query ${e.query.id} dirty`, 0 != (1 & t.state)) }

        function Po(t) { if (!(128 & t.state)) { if (Do(t, Oo.Destroy), Ao(t, Oo.Destroy), ks(t, 131072), t.disposables)
              for (let e = 0; e < t.disposables.length; e++) t.disposables[e]();! function(t) { if (!(16 & t.state)) return; const e = ur(t); if (e) { const n = e.template._projectedViews;
                n && (Bt(n, n.indexOf(t)), Wn.dirtyParentQueries(t)) } }(t), t.renderer.destroyNode && function(t) { const e = t.def.nodes.length; for (let n = 0; n < e; n++) { const e = t.def.nodes[n];
                1 & e.flags ? t.renderer.destroyNode(Bn(t, n).renderElement) : 2 & e.flags ? t.renderer.destroyNode(zn(t, n).renderText) : (67108864 & e.flags || 134217728 & e.flags) && qn(t, n).destroy() } }(t), dr(t) && t.renderer.destroy(), t.state |= 128 } } const Oo = function() { var t = { CreateViewNodes: 0, CheckNoChanges: 1, CheckNoChangesProjectedViews: 2, CheckAndUpdate: 3, CheckAndUpdateProjectedViews: 4, Destroy: 5 }; return t[t.CreateViewNodes] = "CreateViewNodes", t[t.CheckNoChanges] = "CheckNoChanges", t[t.CheckNoChangesProjectedViews] = "CheckNoChangesProjectedViews", t[t.CheckAndUpdate] = "CheckAndUpdate", t[t.CheckAndUpdateProjectedViews] = "CheckAndUpdateProjectedViews", t[t.Destroy] = "Destroy", t }();

        function Ao(t, e) { const n = t.def; if (33554432 & n.nodeFlags)
            for (let r = 0; r < n.nodes.length; r++) { const s = n.nodes[r];
              33554432 & s.flags ? No(Bn(t, r).componentView, e) : 0 == (33554432 & s.childFlags) && (r += s.childCount) } }

        function Do(t, e) { const n = t.def; if (16777216 & n.nodeFlags)
            for (let r = 0; r < n.nodes.length; r++) { const s = n.nodes[r]; if (16777216 & s.flags) { const n = Bn(t, r).viewContainer._embeddedViews; for (let t = 0; t < n.length; t++) No(n[t], e) } else 0 == (16777216 & s.childFlags) && (r += s.childCount) } }

        function No(t, e) { const n = t.state; switch (e) {
            case Oo.CheckNoChanges:
              0 == (128 & n) && (12 == (12 & n) ? ko(t) : 64 & n && Ro(t, Oo.CheckNoChangesProjectedViews)); break;
            case Oo.CheckNoChangesProjectedViews:
              0 == (128 & n) && (32 & n ? ko(t) : 64 & n && Ro(t, e)); break;
            case Oo.CheckAndUpdate:
              0 == (128 & n) && (12 == (12 & n) ? So(t) : 64 & n && Ro(t, Oo.CheckAndUpdateProjectedViews)); break;
            case Oo.CheckAndUpdateProjectedViews:
              0 == (128 & n) && (32 & n ? So(t) : 64 & n && Ro(t, e)); break;
            case Oo.Destroy:
              Po(t); break;
            case Oo.CreateViewNodes:
              xo(t) } }

        function Ro(t, e) { Do(t, e), Ao(t, e) }

        function Vo(t, e, n, r) { if (!(t.def.nodeFlags & e && t.def.nodeFlags & n)) return; const s = t.def.nodes.length; for (let i = 0; i < s; i++) { const s = t.def.nodes[i]; if (s.flags & e && s.flags & n) switch (Wn.setCurrentNode(t, s.nodeIndex), r) {
              case 0:
                oo(t, s); break;
              case 1:
                Mo(t, s) } s.childFlags & e && s.childFlags & n || (i += s.childCount) } } let Lo = !1;

        function Uo(t, e, n, r, s, i) { const o = s.injector.get(pn); return vo(Fo(t, s, o, e, n), r, i) }

        function jo(t, e, n, r, s, i) { const o = s.injector.get(pn),
            l = Fo(t, s, new yl(o), e, n),
            a = Ko(r); return ml(nl.create, vo, null, [l, a, i]) }

        function Fo(t, e, n, r, s) { const i = e.injector.get(Se),
            o = e.injector.get(Xt),
            l = n.createRenderer(null, null); return { ngModule: e, injector: t, projectableNodes: r, selectorOrNode: s, sanitizer: i, rendererFactory: n, renderer: l, errorHandler: o } }

        function Ho(t, e, n, r) { const s = Ko(n); return ml(nl.create, yo, null, [t, e, s, r]) }

        function $o(t, e, n, r) { return n = Zo.get(e.element.componentProvider.provider.token) || Ko(n), ml(nl.create, bo, null, [t, e, n, r]) }

        function zo(t, e, n, r) { return ts(t, e, n, function(t) { const { hasOverrides: e, hasDeprecatedOverrides: n } = function(t) { let e = !1,
                n = !1; return 0 === Bo.size ? { hasOverrides: e, hasDeprecatedOverrides: n } : (t.providers.forEach(t => { const r = Bo.get(t.token);
                3840 & t.flags && r && (e = !0, n = n || r.deprecatedBehavior) }), t.modules.forEach(t => { Go.forEach((r, s) => { ft(s).providedIn === t && (e = !0, n = n || r.deprecatedBehavior) }) }), { hasOverrides: e, hasDeprecatedOverrides: n }) }(t); return e ? (function(t) { for (let e = 0; e < t.providers.length; e++) { const r = t.providers[e];
                n && (r.flags |= 4096); const s = Bo.get(r.token);
                s && (r.flags = -3841 & r.flags | s.flags, r.deps = gr(s.deps), r.value = s.value) } if (Go.size > 0) { let e = new Set(t.modules);
                Go.forEach((r, s) => { if (e.has(ft(s).providedIn)) { let e = { token: s, flags: r.flags | (n ? 4096 : 0), deps: gr(r.deps), value: r.value, index: t.providers.length };
                    t.providers.push(e), t.providersByKey[Yn(s)] = e } }) } }(t = t.factory(() => Qn)), t) : t }(r)) } const Bo = new Map,
          Go = new Map,
          Zo = new Map;

        function qo(t) { let e;
          Bo.set(t.token, t), "function" == typeof t.token && (e = ft(t.token)) && "function" == typeof e.providedIn && Go.set(t.token, t) }

        function Wo(t, e) { const n = yr(e.viewDefFactory),
            r = yr(n.nodes[0].element.componentView);
          Zo.set(t, r) }

        function Qo() { Bo.clear(), Go.clear(), Zo.clear() }

        function Ko(t) { if (0 === Bo.size) return t; const e = function(t) { const e = []; let n = null; for (let r = 0; r < t.nodes.length; r++) { const s = t.nodes[r];
              1 & s.flags && (n = s), n && 3840 & s.flags && Bo.has(s.provider.token) && (e.push(n.nodeIndex), n = null) } return e }(t); if (0 === e.length) return t;
          t = t.factory(() => Qn); for (let r = 0; r < e.length; r++) n(t, e[r]); return t;

          function n(t, e) { for (let n = e + 1; n < t.nodes.length; n++) { const e = t.nodes[n]; if (1 & e.flags) return; if (3840 & e.flags) { const t = e.provider,
                  n = Bo.get(t.token);
                n && (e.flags = -3841 & e.flags | n.flags, t.deps = gr(n.deps), t.value = n.value) } } } }

        function Yo(t, e, n, r, s, i, o, l, a, u, c, h, d) { const p = t.def.nodes[e]; return Eo(t, p, n, r, s, i, o, l, a, u, c, h, d), 224 & p.flags ? Zn(t, e).value : void 0 }

        function Jo(t, e, n, r, s, i, o, l, a, u, c, h, d) { const p = t.def.nodes[e]; return Io(t, p, n, r, s, i, o, l, a, u, c, h, d), 224 & p.flags ? Zn(t, e).value : void 0 }

        function Xo(t) { return ml(nl.detectChanges, So, null, [t]) }

        function tl(t) { return ml(nl.checkNoChanges, ko, null, [t]) }

        function el(t) { return ml(nl.destroy, Po, null, [t]) } const nl = function() { var t = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 }; return t[t.create] = "create", t[t.detectChanges] = "detectChanges", t[t.checkNoChanges] = "checkNoChanges", t[t.destroy] = "destroy", t[t.handleEvent] = "handleEvent", t }(); let rl, sl, il;

        function ol(t, e) { sl = t, il = e }

        function ll(t, e, n, r) { return ol(t, e), ml(nl.handleEvent, t.def.handleEvent, null, [t, e, n, r]) }

        function al(t, e) { if (128 & t.state) throw Fn(nl[rl]); return ol(t, dl(t, 0)), t.def.updateDirectives((function(t, n, r, ...s) { const i = t.def.nodes[n]; return 0 === e ? cl(t, i, r, s) : hl(t, i, r, s), 16384 & i.flags && ol(t, dl(t, n)), 224 & i.flags ? Zn(t, i.nodeIndex).value : void 0 }), t) }

        function ul(t, e) { if (128 & t.state) throw Fn(nl[rl]); return ol(t, pl(t, 0)), t.def.updateRenderer((function(t, n, r, ...s) { const i = t.def.nodes[n]; return 0 === e ? cl(t, i, r, s) : hl(t, i, r, s), 3 & i.flags && ol(t, pl(t, n)), 224 & i.flags ? Zn(t, i.nodeIndex).value : void 0 }), t) }

        function cl(t, e, n, r) { if (Eo(t, e, n, ...r)) { const o = 1 === n ? r[0] : r; if (16384 & e.flags) { const n = {}; for (let t = 0; t < e.bindings.length; t++) { const r = e.bindings[t],
                  l = o[t];
                8 & r.flags && (n[(s = r.nonMinifiedName, i = void 0, i = s.replace(/[$@]/g, "_"), `ng-reflect-${s=i.replace(Ie,(...t)=>"-"+t[1].toLowerCase())}`)] = Me(l)) } const r = e.parent,
                l = Bn(t, r.nodeIndex).renderElement; if (r.element.name)
                for (let e in n) { const r = n[e];
                  null != r ? t.renderer.setAttribute(l, e, r) : t.renderer.removeAttribute(l, e) } else t.renderer.setValue(l, `bindings=${JSON.stringify(n,null,2)}`) } } var s, i }

        function hl(t, e, n, r) { Io(t, e, n, ...r) }

        function dl(t, e) { for (let n = e; n < t.def.nodes.length; n++) { const e = t.def.nodes[n]; if (16384 & e.flags && e.bindings && e.bindings.length) return n } return null }

        function pl(t, e) { for (let n = e; n < t.def.nodes.length; n++) { const e = t.def.nodes[n]; if (3 & e.flags && e.bindings && e.bindings.length) return n } return null } class fl { constructor(t, e) { this.view = t, this.nodeIndex = e, null == e && (this.nodeIndex = e = 0), this.nodeDef = t.def.nodes[e]; let n = this.nodeDef,
              r = t; for (; n && 0 == (1 & n.flags);) n = n.parent; if (!n)
              for (; !n && r;) n = cr(r), r = r.parent;
            this.elDef = n, this.elView = r } get elOrCompView() { return Bn(this.elView, this.elDef.nodeIndex).componentView || this.view } get injector() { return Qr(this.elView, this.elDef) } get component() { return this.elOrCompView.component } get context() { return this.elOrCompView.context } get providerTokens() { const t = []; if (this.elDef)
              for (let e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) { const n = this.elView.def.nodes[e];
                20224 & n.flags && t.push(n.provider.token), e += n.childCount }
            return t } get references() { const t = {}; if (this.elDef) { gl(this.elView, this.elDef, t); for (let e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) { const n = this.elView.def.nodes[e];
                20224 & n.flags && gl(this.elView, n, t), e += n.childCount } } return t } get componentRenderElement() { const t = function(t) { for (; t && !dr(t);) t = t.parent; return t.parent ? Bn(t.parent, cr(t).nodeIndex) : null }(this.elOrCompView); return t ? t.renderElement : void 0 } get renderNode() { return 2 & this.nodeDef.flags ? hr(this.view, this.nodeDef) : hr(this.elView, this.elDef) } logError(t, ...e) { let n, r;
            2 & this.nodeDef.flags ? (n = this.view.def, r = this.nodeDef.nodeIndex) : (n = this.elView.def, r = this.elDef.nodeIndex); const s = function(t, e) { let n = -1; for (let r = 0; r <= e; r++) 3 & t.nodes[r].flags && n++; return n }(n, r); let i = -1;
            n.factory(() => ++i === s ? t.error.bind(t, ...e) : Qn), i < s && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error(...e)) } }

        function gl(t, e, n) { for (let r in e.references) n[r] = ao(t, e, e.references[r]) }

        function ml(t, e, n, r) { const s = rl,
            i = sl,
            o = il; try { rl = t; const l = e.apply(n, r); return sl = i, il = o, rl = s, l } catch (u) { if (Kt(u) || !sl) throw u; throw l = u, a = _l(), l instanceof Error || (l = new Error(l.toString())), jn(l, a), l } var l, a }

        function _l() { return sl ? new fl(sl, il) : null } class yl { constructor(t) { this.delegate = t } createRenderer(t, e) { return new vl(this.delegate.createRenderer(t, e)) } begin() { this.delegate.begin && this.delegate.begin() } end() { this.delegate.end && this.delegate.end() } whenRenderingDone() { return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null) } } class vl { constructor(t) { this.delegate = t, this.debugContextFactory = _l, this.data = this.delegate.data } createDebugContext(t) { return this.debugContextFactory(t) } destroyNode(t) { const e = Gi(t);! function(t) { Bi.delete(t.nativeNode) }(e), e instanceof $i && (e.listeners.length = 0), this.delegate.destroyNode && this.delegate.destroyNode(t) } destroy() { this.delegate.destroy() } createElement(t, e) { const n = this.delegate.createElement(t, e),
              r = this.createDebugContext(n); if (r) { const e = new zi(n, null, r);
              e.name = t, Zi(e) } return n } createComment(t) { const e = this.delegate.createComment(t),
              n = this.createDebugContext(e); return n && Zi(new $i(e, null, n)), e } createText(t) { const e = this.delegate.createText(t),
              n = this.createDebugContext(e); return n && Zi(new $i(e, null, n)), e } appendChild(t, e) { const n = Gi(t),
              r = Gi(e);
            n && r && n instanceof zi && n.addChild(r), this.delegate.appendChild(t, e) } insertBefore(t, e, n) { const r = Gi(t),
              s = Gi(e),
              i = Gi(n);
            r && s && r instanceof zi && r.insertBefore(i, s), this.delegate.insertBefore(t, e, n) } removeChild(t, e) { const n = Gi(t),
              r = Gi(e);
            n && r && n instanceof zi && n.removeChild(r), this.delegate.removeChild(t, e) } selectRootElement(t, e) { const n = this.delegate.selectRootElement(t, e),
              r = _l(); return r && Zi(new zi(n, null, r)), n } setAttribute(t, e, n, r) { const s = Gi(t);
            s && s instanceof zi && (s.attributes[r ? r + ":" + e : e] = n), this.delegate.setAttribute(t, e, n, r) } removeAttribute(t, e, n) { const r = Gi(t);
            r && r instanceof zi && (r.attributes[n ? n + ":" + e : e] = null), this.delegate.removeAttribute(t, e, n) } addClass(t, e) { const n = Gi(t);
            n && n instanceof zi && (n.classes[e] = !0), this.delegate.addClass(t, e) } removeClass(t, e) { const n = Gi(t);
            n && n instanceof zi && (n.classes[e] = !1), this.delegate.removeClass(t, e) } setStyle(t, e, n, r) { const s = Gi(t);
            s && s instanceof zi && (s.styles[e] = n), this.delegate.setStyle(t, e, n, r) } removeStyle(t, e, n) { const r = Gi(t);
            r && r instanceof zi && (r.styles[e] = null), this.delegate.removeStyle(t, e, n) } setProperty(t, e, n) { const r = Gi(t);
            r && r instanceof zi && (r.properties[e] = n), this.delegate.setProperty(t, e, n) } listen(t, e, n) { if ("string" != typeof t) { const r = Gi(t);
              r && r.listeners.push(new Hi(e, n)) } return this.delegate.listen(t, e, n) } parentNode(t) { return this.delegate.parentNode(t) } nextSibling(t) { return this.delegate.nextSibling(t) } setValue(t, e) { return this.delegate.setValue(t, e) } }

        function bl(t, e, n) { return new wl(t, e, n) } class wl extends $t { constructor(t, e, n) { super(), this.moduleType = t, this._bootstrapComponents = e, this._ngModuleDefFactory = n } create(t) {! function() { if (Lo) return;
              Lo = !0; const t = ne() ? { setCurrentNode: ol, createRootView: jo, createEmbeddedView: Ho, createComponentView: $o, createNgModuleRef: zo, overrideProvider: qo, overrideComponentView: Wo, clearOverrides: Qo, checkAndUpdateView: Xo, checkNoChangesView: tl, destroyView: el, createDebugContext: (t, e) => new fl(t, e), handleEvent: ll, updateDirectives: al, updateRenderer: ul } : { setCurrentNode: () => {}, createRootView: Uo, createEmbeddedView: yo, createComponentView: bo, createNgModuleRef: ts, overrideProvider: Qn, overrideComponentView: Qn, clearOverrides: Qn, checkAndUpdateView: So, checkNoChangesView: ko, destroyView: Po, createDebugContext: (t, e) => new fl(t, e), handleEvent: (t, e, n, r) => t.def.handleEvent(t, e, n, r), updateDirectives: (t, e) => t.def.updateDirectives(0 === e ? Yo : Jo, t), updateRenderer: (t, e) => t.def.updateRenderer(0 === e ? Yo : Jo, t) };
              Wn.setCurrentNode = t.setCurrentNode, Wn.createRootView = t.createRootView, Wn.createEmbeddedView = t.createEmbeddedView, Wn.createComponentView = t.createComponentView, Wn.createNgModuleRef = t.createNgModuleRef, Wn.overrideProvider = t.overrideProvider, Wn.overrideComponentView = t.overrideComponentView, Wn.clearOverrides = t.clearOverrides, Wn.checkAndUpdateView = t.checkAndUpdateView, Wn.checkNoChangesView = t.checkNoChangesView, Wn.destroyView = t.destroyView, Wn.resolveDep = ws, Wn.createDebugContext = t.createDebugContext, Wn.handleEvent = t.handleEvent, Wn.updateDirectives = t.updateDirectives, Wn.updateRenderer = t.updateRenderer, Wn.dirtyParentQueries = io }(); const e = function(t) { const e = Array.from(t.providers),
                n = Array.from(t.modules),
                r = {}; for (const s in t.providersByKey) r[s] = t.providersByKey[s]; return { factory: t.factory, isRoot: t.isRoot, providers: e, modules: n, providersByKey: r } }(yr(this._ngModuleDefFactory)); return Wn.createNgModuleRef(this.moduleType, t || Ne.NULL, this._bootstrapComponents, e) } } class Cl {} class xl { constructor() { this.title = "code" } } class kl {} const Sl = new St("Location Initialized");
        class El {} const Tl = new St("appBaseHref");
        class Il { constructor(t, e) { this._subject = new Vs, this._urlChangeListeners = [], this._platformStrategy = t; const n = this._platformStrategy.getBaseHref();
            this._platformLocation = e, this._baseHref = Il.stripTrailingSlash(Ml(n)), this._platformStrategy.onPopState(t => { this._subject.emit({ url: this.path(!0), pop: !0, state: t.state, type: t.type }) }) } path(t = !1) { return this.normalize(this._platformStrategy.path(t)) } getState() { return this._platformLocation.getState() } isCurrentPathEqualTo(t, e = "") { return this.path() == this.normalize(t + Il.normalizeQueryParams(e)) } normalize(t) { return Il.stripTrailingSlash(function(t, e) { return t && e.startsWith(t) ? e.substring(t.length) : e }(this._baseHref, Ml(t))) } prepareExternalUrl(t) { return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t) } go(t, e = "", n = null) { this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Il.normalizeQueryParams(e)), n) } replaceState(t, e = "", n = null) { this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Il.normalizeQueryParams(e)), n) } forward() { this._platformStrategy.forward() } back() { this._platformStrategy.back() } onUrlChange(t) { this._urlChangeListeners.push(t), this.subscribe(t => { this._notifyUrlChangeListeners(t.url, t.state) }) } _notifyUrlChangeListeners(t = "", e) { this._urlChangeListeners.forEach(n => n(t, e)) } subscribe(t, e, n) { return this._subject.subscribe({ next: t, error: e, complete: n }) } static normalizeQueryParams(t) { return t && "?" !== t[0] ? "?" + t : t } static joinWithSlash(t, e) { if (0 == t.length) return e; if (0 == e.length) return t; let n = 0; return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e } static stripTrailingSlash(t) { const e = t.match(/#|\?|$/),
              n = e && e.index || t.length; return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n) } }

        function Ml(t) { return t.replace(/\/index.html$/, "") } class Pl extends El { constructor(t, e) { super(), this._platformLocation = t, this._baseHref = "", null != e && (this._baseHref = e) } onPopState(t) { this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t) } getBaseHref() { return this._baseHref } path(t = !1) { let e = this._platformLocation.hash; return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e } prepareExternalUrl(t) { const e = Il.joinWithSlash(this._baseHref, t); return e.length > 0 ? "#" + e : e } pushState(t, e, n, r) { let s = this.prepareExternalUrl(n + Il.normalizeQueryParams(r));
            0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, e, s) } replaceState(t, e, n, r) { let s = this.prepareExternalUrl(n + Il.normalizeQueryParams(r));
            0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, s) } forward() { this._platformLocation.forward() } back() { this._platformLocation.back() } } class Ol extends El { constructor(t, e) { if (super(), this._platformLocation = t, null == e && (e = this._platformLocation.getBaseHrefFromDOM()), null == e) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
            this._baseHref = e } onPopState(t) { this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t) } getBaseHref() { return this._baseHref } prepareExternalUrl(t) { return Il.joinWithSlash(this._baseHref, t) } path(t = !1) { const e = this._platformLocation.pathname + Il.normalizeQueryParams(this._platformLocation.search),
              n = this._platformLocation.hash; return n && t ? `${e}${n}` : e } pushState(t, e, n, r) { const s = this.prepareExternalUrl(n + Il.normalizeQueryParams(r));
            this._platformLocation.pushState(t, e, s) } replaceState(t, e, n, r) { const s = this.prepareExternalUrl(n + Il.normalizeQueryParams(r));
            this._platformLocation.replaceState(t, e, s) } forward() { this._platformLocation.forward() } back() { this._platformLocation.back() } } const Al = function() { var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 }; return t[t.Zero] = "Zero", t[t.One] = "One", t[t.Two] = "Two", t[t.Few] = "Few", t[t.Many] = "Many", t[t.Other] = "Other", t }(),
          Dl = function() { var t = { Format: 0, Standalone: 1 }; return t[t.Format] = "Format", t[t.Standalone] = "Standalone", t }(),
          Nl = function() { var t = { Narrow: 0, Abbreviated: 1, Wide: 2, Short: 3 }; return t[t.Narrow] = "Narrow", t[t.Abbreviated] = "Abbreviated", t[t.Wide] = "Wide", t[t.Short] = "Short", t }(),
          Rl = function() { var t = { Short: 0, Medium: 1, Long: 2, Full: 3 }; return t[t.Short] = "Short", t[t.Medium] = "Medium", t[t.Long] = "Long", t[t.Full] = "Full", t }(),
          Vl = function() { var t = { Decimal: 0, Group: 1, List: 2, PercentSign: 3, PlusSign: 4, MinusSign: 5, Exponential: 6, SuperscriptingExponent: 7, PerMille: 8, Infinity: 9, NaN: 10, TimeSeparator: 11, CurrencyDecimal: 12, CurrencyGroup: 13 }; return t[t.Decimal] = "Decimal", t[t.Group] = "Group", t[t.List] = "List", t[t.PercentSign] = "PercentSign", t[t.PlusSign] = "PlusSign", t[t.MinusSign] = "MinusSign", t[t.Exponential] = "Exponential", t[t.SuperscriptingExponent] = "SuperscriptingExponent", t[t.PerMille] = "PerMille", t[t.Infinity] = "Infinity", t[t.NaN] = "NaN", t[t.TimeSeparator] = "TimeSeparator", t[t.CurrencyDecimal] = "CurrencyDecimal", t[t.CurrencyGroup] = "CurrencyGroup", t }();

        function Ll(t, e) { return zl(As(t)[Ms.DateFormat], e) }

        function Ul(t, e) { return zl(As(t)[Ms.TimeFormat], e) }

        function jl(t, e) { return zl(As(t)[Ms.DateTimeFormat], e) }

        function Fl(t, e) { const n = As(t),
            r = n[Ms.NumberSymbols][e]; if (void 0 === r) { if (e === Vl.CurrencyDecimal) return n[Ms.NumberSymbols][Vl.Decimal]; if (e === Vl.CurrencyGroup) return n[Ms.NumberSymbols][Vl.Group] } return r } const Hl = function(t) { return As(t)[Ms.PluralCase] };

        function $l(t) { if (!t[Ms.ExtraData]) throw new Error(`Missing extra locale data for the locale "${t[Ms.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`) }

        function zl(t, e) { for (let n = e; n > -1; n--)
            if (void 0 !== t[n]) return t[n]; throw new Error("Locale data API: locale data undefined") }

        function Bl(t) { const [e, n] = t.split(":"); return { hours: +e, minutes: +n } } const Gl = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
          Zl = {},
          ql = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
          Wl = function() { var t = { Short: 0, ShortGMT: 1, Long: 2, Extended: 3 }; return t[t.Short] = "Short", t[t.ShortGMT] = "ShortGMT", t[t.Long] = "Long", t[t.Extended] = "Extended", t }(),
          Ql = function() { var t = { FullYear: 0, Month: 1, Date: 2, Hours: 3, Minutes: 4, Seconds: 5, FractionalSeconds: 6, Day: 7 }; return t[t.FullYear] = "FullYear", t[t.Month] = "Month", t[t.Date] = "Date", t[t.Hours] = "Hours", t[t.Minutes] = "Minutes", t[t.Seconds] = "Seconds", t[t.FractionalSeconds] = "FractionalSeconds", t[t.Day] = "Day", t }(),
          Kl = function() { var t = { DayPeriods: 0, Days: 1, Months: 2, Eras: 3 }; return t[t.DayPeriods] = "DayPeriods", t[t.Days] = "Days", t[t.Months] = "Months", t[t.Eras] = "Eras", t }();

        function Yl(t, e) { return e && (t = t.replace(/\{([^}]+)}/g, (function(t, n) { return null != e && n in e ? e[n] : t }))), t }

        function Jl(t, e, n = "-", r, s) { let i = "";
          (t < 0 || s && t <= 0) && (s ? t = 1 - t : (t = -t, i = n)); let o = String(t); for (; o.length < e;) o = "0" + o; return r && (o = o.substr(o.length - e)), i + o }

        function Xl(t, e, n = 0, r = !1, s = !1) { return function(i, o) { let l = function(t, e) { switch (t) {
                case Ql.FullYear:
                  return e.getFullYear();
                case Ql.Month:
                  return e.getMonth();
                case Ql.Date:
                  return e.getDate();
                case Ql.Hours:
                  return e.getHours();
                case Ql.Minutes:
                  return e.getMinutes();
                case Ql.Seconds:
                  return e.getSeconds();
                case Ql.FractionalSeconds:
                  return e.getMilliseconds();
                case Ql.Day:
                  return e.getDay();
                default:
                  throw new Error(`Unknown DateType value "${t}".`) } }(t, i); if ((n > 0 || l > -n) && (l += n), t === Ql.Hours) 0 === l && -12 === n && (l = 12);
            else if (t === Ql.FractionalSeconds) return a = e, Jl(l, 3).substr(0, a); var a; const u = Fl(o, Vl.MinusSign); return Jl(l, e, u, r, s) } }

        function ta(t, e, n = Dl.Format, r = !1) { return function(s, i) { return function(t, e, n, r, s, i) { switch (n) {
                case Kl.Months:
                  return function(t, e, n) { const r = As(t),
                      s = zl([r[Ms.MonthsFormat], r[Ms.MonthsStandalone]], e); return zl(s, n) }(e, s, r)[t.getMonth()];
                case Kl.Days:
                  return function(t, e, n) { const r = As(t),
                      s = zl([r[Ms.DaysFormat], r[Ms.DaysStandalone]], e); return zl(s, n) }(e, s, r)[t.getDay()];
                case Kl.DayPeriods:
                  const o = t.getHours(),
                    l = t.getMinutes(); if (i) { const t = function(t) { const e = As(t); return $l(e), (e[Ms.ExtraData][2] || []).map(t => "string" == typeof t ? Bl(t) : [Bl(t[0]), Bl(t[1])]) }(e),
                      n = function(t, e, n) { const r = As(t);
                        $l(r); const s = zl([r[Ms.ExtraData][0], r[Ms.ExtraData][1]], e) || []; return zl(s, n) || [] }(e, s, r); let i; if (t.forEach((t, e) => { if (Array.isArray(t)) { const { hours: r, minutes: s } = t[0], { hours: a, minutes: u } = t[1];
                          o >= r && l >= s && (o < a || o === a && l < u) && (i = n[e]) } else { const { hours: r, minutes: s } = t;
                          r === o && s === l && (i = n[e]) } }), i) return i } return function(t, e, n) { const r = As(t),
                      s = zl([r[Ms.DayPeriodsFormat], r[Ms.DayPeriodsStandalone]], e); return zl(s, n) }(e, s, r)[o < 12 ? 0 : 1];
                case Kl.Eras:
                  return function(t, e) { return zl(As(t)[Ms.Eras], e) }(e, r)[t.getFullYear() <= 0 ? 0 : 1];
                default:
                  throw new Error(`unexpected translation type ${n}`) } }(s, i, t, e, n, r) } }

        function ea(t) { return function(e, n, r) { const s = -1 * r,
              i = Fl(n, Vl.MinusSign),
              o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60); switch (t) {
              case Wl.Short:
                return (s >= 0 ? "+" : "") + Jl(o, 2, i) + Jl(Math.abs(s % 60), 2, i);
              case Wl.ShortGMT:
                return "GMT" + (s >= 0 ? "+" : "") + Jl(o, 1, i);
              case Wl.Long:
                return "GMT" + (s >= 0 ? "+" : "") + Jl(o, 2, i) + ":" + Jl(Math.abs(s % 60), 2, i);
              case Wl.Extended:
                return 0 === r ? "Z" : (s >= 0 ? "+" : "") + Jl(o, 2, i) + ":" + Jl(Math.abs(s % 60), 2, i);
              default:
                throw new Error(`Unknown zone width "${t}"`) } } } const na = 0,
          ra = 4;

        function sa(t, e = !1) { return function(n, r) { let s; if (e) { const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                e = n.getDate();
              s = 1 + Math.floor((e + t) / 7) } else { const t = function(t) { const e = new Date(t, na, 1).getDay(); return new Date(t, 0, 1 + (e <= ra ? ra : ra + 7) - e) }(n.getFullYear()),
                e = (i = n, new Date(i.getFullYear(), i.getMonth(), i.getDate() + (ra - i.getDay()))).getTime() - t.getTime();
              s = 1 + Math.round(e / 6048e5) } var i; return Jl(s, t, Fl(r, Vl.MinusSign)) } } const ia = {};

        function oa(t, e) { t = t.replace(/:/g, ""); const n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4; return isNaN(n) ? e : n }

        function la(t) { return t instanceof Date && !isNaN(t.valueOf()) } const aa = new St("UseV4Plurals");
        class ua {} class ca extends ua { constructor(t, e) { super(), this.locale = t, this.deprecatedPluralFn = e } getPluralCategory(t, e) { switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, t) : Hl(e || this.locale)(t)) {
              case Al.Zero:
                return "zero";
              case Al.One:
                return "one";
              case Al.Two:
                return "two";
              case Al.Few:
                return "few";
              case Al.Many:
                return "many";
              default:
                return "other" } } } class ha { constructor(t, e, n, r) { this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r } get first() { return 0 === this.index } get last() { return this.index === this.count - 1 } get even() { return this.index % 2 == 0 } get odd() { return !this.even } } class da { constructor(t, e, n) { this._viewContainer = t, this._template = e, this._differs = n, this._ngForOfDirty = !0, this._differ = null } set ngForOf(t) { this._ngForOf = t, this._ngForOfDirty = !0 } set ngForTrackBy(t) { ne() && null != t && "function" != typeof t && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. ` + "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = t } get ngForTrackBy() { return this._trackByFn } set ngForTemplate(t) { t && (this._template = t) } ngDoCheck() { if (this._ngForOfDirty) { this._ngForOfDirty = !1; const n = this._ngForOf; if (!this._differ && n) try { this._differ = this._differs.find(n).create(this.ngForTrackBy) } catch (e) { throw new Error(`Cannot find a differ supporting object '${n}' of type '${t=n,t.name||typeof t}'. NgFor only supports binding to Iterables such as Arrays.`) } } var t; if (this._differ) { const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t) } } _applyChanges(t) { const e = [];
            t.forEachOperation((t, n, r) => { if (null == t.previousIndex) { const n = this._viewContainer.createEmbeddedView(this._template, new ha(null, this._ngForOf, -1, -1), null === r ? void 0 : r),
                  s = new pa(t, n);
                e.push(s) } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) { const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r); const i = new pa(t, s);
                e.push(i) } }); for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record); for (let n = 0, r = this._viewContainer.length; n < r; n++) { const t = this._viewContainer.get(n);
              t.context.index = n, t.context.count = r, t.context.ngForOf = this._ngForOf } t.forEachIdentityChange(t => { this._viewContainer.get(t.currentIndex).context.$implicit = t.item }) } _perViewChange(t, e) { t.context.$implicit = e.item } static ngTemplateContextGuard(t, e) { return !0 } } class pa { constructor(t, e) { this.record = t, this.view = e } } class fa { constructor(t, e) { this._viewContainer = t, this._context = new ga, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e } set ngIf(t) { this._context.$implicit = this._context.ngIf = t, this._updateView() } set ngIfThen(t) { ma("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView() } set ngIfElse(t) { ma("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView() } _updateView() { this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context))) } } class ga { constructor() { this.$implicit = null, this.ngIf = null } }

        function ma(t, e) { if (e && !e.createEmbeddedView) throw new Error(`${t} must be a TemplateRef, but received '${mt(e)}'.`) } class _a { constructor(t) { this.locale = t } transform(t, e = "mediumDate", n, r) { if (null == t || "" === t || t != t) return null; try { return function(t, e, n, r) { let s = function(t) { if (la(t)) return t; if ("number" == typeof t && !isNaN(t)) return new Date(t); if ("string" == typeof t) { t = t.trim(); const e = parseFloat(t); if (!isNaN(t - e)) return new Date(e); if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) { const [e, n, r] = t.split("-").map(t => +t); return new Date(e, n - 1, r) } let n; if (n = t.match(Gl)) return function(t) { const e = new Date(0); let n = 0,
                        r = 0; const s = t[8] ? e.setUTCFullYear : e.setFullYear,
                        i = t[8] ? e.setUTCHours : e.setHours;
                      t[9] && (n = Number(t[9] + t[10]), r = Number(t[9] + t[11])), s.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3])); const o = Number(t[4] || 0) - n,
                        l = Number(t[5] || 0) - r,
                        a = Number(t[6] || 0),
                        u = Math.round(1e3 * parseFloat("0." + (t[7] || 0))); return i.call(e, o, l, a, u), e }(n) } const e = new Date(t); if (!la(e)) throw new Error(`Unable to convert "${t}" into a date`); return e }(t);
                e = function t(e, n) { const r = function(t) { return As(t)[Ms.LocaleId] }(e); if (Zl[r] = Zl[r] || {}, Zl[r][n]) return Zl[r][n]; let s = ""; switch (n) {
                    case "shortDate":
                      s = Ll(e, Rl.Short); break;
                    case "mediumDate":
                      s = Ll(e, Rl.Medium); break;
                    case "longDate":
                      s = Ll(e, Rl.Long); break;
                    case "fullDate":
                      s = Ll(e, Rl.Full); break;
                    case "shortTime":
                      s = Ul(e, Rl.Short); break;
                    case "mediumTime":
                      s = Ul(e, Rl.Medium); break;
                    case "longTime":
                      s = Ul(e, Rl.Long); break;
                    case "fullTime":
                      s = Ul(e, Rl.Full); break;
                    case "short":
                      const n = t(e, "shortTime"),
                        r = t(e, "shortDate");
                      s = Yl(jl(e, Rl.Short), [n, r]); break;
                    case "medium":
                      const i = t(e, "mediumTime"),
                        o = t(e, "mediumDate");
                      s = Yl(jl(e, Rl.Medium), [i, o]); break;
                    case "long":
                      const l = t(e, "longTime"),
                        a = t(e, "longDate");
                      s = Yl(jl(e, Rl.Long), [l, a]); break;
                    case "full":
                      const u = t(e, "fullTime"),
                        c = t(e, "fullDate");
                      s = Yl(jl(e, Rl.Full), [u, c]) } return s && (Zl[r][n] = s), s }(n, e) || e; let i, o = []; for (; e;) { if (!(i = ql.exec(e))) { o.push(e); break } { const t = (o = o.concat(i.slice(1))).pop(); if (!t) break;
                    e = t } } let l = s.getTimezoneOffset();
                r && (l = oa(r, l), s = function(t, e, n) { const r = t.getTimezoneOffset(); return function(t, e) { return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t }(t, -1 * (oa(e, r) - r)) }(s, r)); let a = ""; return o.forEach(t => { const e = function(t) { if (ia[t]) return ia[t]; let e; switch (t) {
                      case "G":
                      case "GG":
                      case "GGG":
                        e = ta(Kl.Eras, Nl.Abbreviated); break;
                      case "GGGG":
                        e = ta(Kl.Eras, Nl.Wide); break;
                      case "GGGGG":
                        e = ta(Kl.Eras, Nl.Narrow); break;
                      case "y":
                        e = Xl(Ql.FullYear, 1, 0, !1, !0); break;
                      case "yy":
                        e = Xl(Ql.FullYear, 2, 0, !0, !0); break;
                      case "yyy":
                        e = Xl(Ql.FullYear, 3, 0, !1, !0); break;
                      case "yyyy":
                        e = Xl(Ql.FullYear, 4, 0, !1, !0); break;
                      case "M":
                      case "L":
                        e = Xl(Ql.Month, 1, 1); break;
                      case "MM":
                      case "LL":
                        e = Xl(Ql.Month, 2, 1); break;
                      case "MMM":
                        e = ta(Kl.Months, Nl.Abbreviated); break;
                      case "MMMM":
                        e = ta(Kl.Months, Nl.Wide); break;
                      case "MMMMM":
                        e = ta(Kl.Months, Nl.Narrow); break;
                      case "LLL":
                        e = ta(Kl.Months, Nl.Abbreviated, Dl.Standalone); break;
                      case "LLLL":
                        e = ta(Kl.Months, Nl.Wide, Dl.Standalone); break;
                      case "LLLLL":
                        e = ta(Kl.Months, Nl.Narrow, Dl.Standalone); break;
                      case "w":
                        e = sa(1); break;
                      case "ww":
                        e = sa(2); break;
                      case "W":
                        e = sa(1, !0); break;
                      case "d":
                        e = Xl(Ql.Date, 1); break;
                      case "dd":
                        e = Xl(Ql.Date, 2); break;
                      case "E":
                      case "EE":
                      case "EEE":
                        e = ta(Kl.Days, Nl.Abbreviated); break;
                      case "EEEE":
                        e = ta(Kl.Days, Nl.Wide); break;
                      case "EEEEE":
                        e = ta(Kl.Days, Nl.Narrow); break;
                      case "EEEEEE":
                        e = ta(Kl.Days, Nl.Short); break;
                      case "a":
                      case "aa":
                      case "aaa":
                        e = ta(Kl.DayPeriods, Nl.Abbreviated); break;
                      case "aaaa":
                        e = ta(Kl.DayPeriods, Nl.Wide); break;
                      case "aaaaa":
                        e = ta(Kl.DayPeriods, Nl.Narrow); break;
                      case "b":
                      case "bb":
                      case "bbb":
                        e = ta(Kl.DayPeriods, Nl.Abbreviated, Dl.Standalone, !0); break;
                      case "bbbb":
                        e = ta(Kl.DayPeriods, Nl.Wide, Dl.Standalone, !0); break;
                      case "bbbbb":
                        e = ta(Kl.DayPeriods, Nl.Narrow, Dl.Standalone, !0); break;
                      case "B":
                      case "BB":
                      case "BBB":
                        e = ta(Kl.DayPeriods, Nl.Abbreviated, Dl.Format, !0); break;
                      case "BBBB":
                        e = ta(Kl.DayPeriods, Nl.Wide, Dl.Format, !0); break;
                      case "BBBBB":
                        e = ta(Kl.DayPeriods, Nl.Narrow, Dl.Format, !0); break;
                      case "h":
                        e = Xl(Ql.Hours, 1, -12); break;
                      case "hh":
                        e = Xl(Ql.Hours, 2, -12); break;
                      case "H":
                        e = Xl(Ql.Hours, 1); break;
                      case "HH":
                        e = Xl(Ql.Hours, 2); break;
                      case "m":
                        e = Xl(Ql.Minutes, 1); break;
                      case "mm":
                        e = Xl(Ql.Minutes, 2); break;
                      case "s":
                        e = Xl(Ql.Seconds, 1); break;
                      case "ss":
                        e = Xl(Ql.Seconds, 2); break;
                      case "S":
                        e = Xl(Ql.FractionalSeconds, 1); break;
                      case "SS":
                        e = Xl(Ql.FractionalSeconds, 2); break;
                      case "SSS":
                        e = Xl(Ql.FractionalSeconds, 3); break;
                      case "Z":
                      case "ZZ":
                      case "ZZZ":
                        e = ea(Wl.Short); break;
                      case "ZZZZZ":
                        e = ea(Wl.Extended); break;
                      case "O":
                      case "OO":
                      case "OOO":
                      case "z":
                      case "zz":
                      case "zzz":
                        e = ea(Wl.ShortGMT); break;
                      case "OOOO":
                      case "ZZZZ":
                      case "zzzz":
                        e = ea(Wl.Long); break;
                      default:
                        return null } return ia[t] = e, e }(t);
                  a += e ? e(s, n, l) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'") }), a }(t, e, r || this.locale, n) } catch (s) { throw function(t, e) { return Error(`InvalidPipeArgument: '${e}' for pipe '${mt(t)}'`) }(_a, s.message) } } } class ya {} const va = new St("DocumentToken"),
          ba = "server"; let wa = (() => { class t {} return t.ngInjectableDef = pt({ token: t, providedIn: "root", factory: () => new Ca(Ut(va), window, Ut(Xt)) }), t })();
        class Ca { constructor(t, e, n) { this.document = t, this.window = e, this.errorHandler = n, this.offset = () => [0, 0] } setOffset(t) { this.offset = Array.isArray(t) ? () => t : t } getScrollPosition() { return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0] } scrollToPosition(t) { this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]) } scrollToAnchor(t) { if (this.supportScrollRestoration()) { t = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(t) : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1"); try { const e = this.document.querySelector(`#${t}`); if (e) return void this.scrollToElement(e); const n = this.document.querySelector(`[name='${t}']`); if (n) return void this.scrollToElement(n) } catch (e) { this.errorHandler.handleError(e) } } } setHistoryScrollRestoration(t) { if (this.supportScrollRestoration()) { const e = this.window.history;
              e && e.scrollRestoration && (e.scrollRestoration = t) } } scrollToElement(t) { const e = t.getBoundingClientRect(),
              n = e.left + this.window.pageXOffset,
              r = e.top + this.window.pageYOffset,
              s = this.offset();
            this.window.scrollTo(n - s[0], r - s[1]) } supportScrollRestoration() { try { return !!this.window && !!this.window.scrollTo } catch (t) { return !1 } } } const xa = new w(t => t.complete());

        function ka(t) { return t ? function(t) { return new w(e => t.schedule(() => e.complete())) }(t) : xa }

        function Sa(t) { const e = new w(e => { e.next(t), e.complete() }); return e._isScalar = !0, e.value = t, e }

        function Ea(...t) { let e = t[t.length - 1]; switch (M(e) ? t.pop() : e = void 0, t.length) {
            case 0:
              return ka(e);
            case 1:
              return e ? G(t, e) : Sa(t[0]);
            default:
              return G(t, e) } } class Ta extends T { constructor(t) { super(), this._value = t } get value() { return this.getValue() } _subscribe(t) { const e = super._subscribe(t); return e && !e.closed && t.next(this._value), e } getValue() { if (this.hasError) throw this.thrownError; if (this.closed) throw new k; return this._value } next(t) { super.next(this._value = t) } }

        function Ia() { return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this } Ia.prototype = Object.create(Error.prototype); const Ma = Ia,
          Pa = {};
        class Oa { constructor(t) { this.resultSelector = t } call(t, e) { return e.subscribe(new Aa(t, this.resultSelector)) } } class Aa extends H { constructor(t, e) { super(t), this.resultSelector = e, this.active = 0, this.values = [], this.observables = [] } _next(t) { this.values.push(Pa), this.observables.push(t) } _complete() { const t = this.observables,
              e = t.length; if (0 === e) this.destination.complete();
            else { this.active = e, this.toRespond = e; for (let n = 0; n < e; n++) { const e = t[n];
                this.add(F(this, e, e, n)) } } } notifyComplete(t) { 0 == (this.active -= 1) && this.destination.complete() } notifyNext(t, e, n, r, s) { const i = this.values,
              o = this.toRespond ? i[n] === Pa ? --this.toRespond : this.toRespond : 0;
            i[n] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice())) } _tryResultSelector(t) { let e; try { e = this.resultSelector.apply(this, t) } catch (n) { return void this.destination.error(n) } this.destination.next(e) } }

        function Da(t) { return new w(e => { let n; try { n = t() } catch (r) { return void e.error(r) } return (n ? Z(n) : ka()).subscribe(e) }) }

        function Na() { return Y(1) }

        function Ra(t, e) { return function(n) { return n.lift(new Va(t, e)) } } class Va { constructor(t, e) { this.predicate = t, this.thisArg = e } call(t, e) { return e.subscribe(new La(t, this.predicate, this.thisArg)) } } class La extends g { constructor(t, e, n) { super(t), this.predicate = e, this.thisArg = n, this.count = 0 } _next(t) { let e; try { e = this.predicate.call(this.thisArg, t, this.count++) } catch (n) { return void this.destination.error(n) } e && this.destination.next(t) } }

        function Ua() { return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this } Ua.prototype = Object.create(Error.prototype); const ja = Ua;

        function Fa(t) { return function(e) { return 0 === t ? ka() : e.lift(new Ha(t)) } } class Ha { constructor(t) { if (this.total = t, this.total < 0) throw new ja } call(t, e) { return e.subscribe(new $a(t, this.total)) } } class $a extends g { constructor(t, e) { super(t), this.total = e, this.ring = new Array, this.count = 0 } _next(t) { const e = this.ring,
              n = this.total,
              r = this.count++;
            e.length < n ? e.push(t) : e[r % n] = t } _complete() { const t = this.destination; let e = this.count; if (e > 0) { const n = this.count >= this.total ? this.total : this.count,
                r = this.ring; for (let s = 0; s < n; s++) { const s = e++ % n;
                t.next(r[s]) } } t.complete() } }

        function za(t, e, n) { return function(r) { return r.lift(new Ba(t, e, n)) } } class Ba { constructor(t, e, n) { this.nextOrObserver = t, this.error = e, this.complete = n } call(t, e) { return e.subscribe(new Ga(t, this.nextOrObserver, this.error, this.complete)) } } class Ga extends g { constructor(t, e, n, s) { super(t), this._tapNext = y, this._tapError = y, this._tapComplete = y, this._tapError = n || y, this._tapComplete = s || y, r(e) ? (this._context = this, this._tapNext = e) : e && (this._context = e, this._tapNext = e.next || y, this._tapError = e.error || y, this._tapComplete = e.complete || y) } _next(t) { try { this._tapNext.call(this._context, t) } catch (e) { return void this.destination.error(e) } this.destination.next(t) } _error(t) { try { this._tapError.call(this._context, t) } catch (t) { return void this.destination.error(t) } this.destination.error(t) } _complete() { try { this._tapComplete.call(this._context) } catch (t) { return void this.destination.error(t) } return this.destination.complete() } } const Za = (t = qa) => za({ hasValue: !1, next() { this.hasValue = !0 }, complete() { if (!this.hasValue) throw t() } });

        function qa() { return new Ma }

        function Wa(t = null) { return e => e.lift(new Qa(t)) } class Qa { constructor(t) { this.defaultValue = t } call(t, e) { return e.subscribe(new Ka(t, this.defaultValue)) } } class Ka extends g { constructor(t, e) { super(t), this.defaultValue = e, this.isEmpty = !0 } _next(t) { this.isEmpty = !1, this.destination.next(t) } _complete() { this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete() } }

        function Ya(t, e) { const n = arguments.length >= 2; return r => r.pipe(t ? Ra((e, n) => t(e, n, r)) : K, Fa(1), n ? Wa(e) : Za(() => new Ma)) }

        function Ja(t) { return function(e) { const n = new Xa(t),
              r = e.lift(n); return n.caught = r } } class Xa { constructor(t) { this.selector = t } call(t, e) { return e.subscribe(new tu(t, this.selector, this.caught)) } } class tu extends H { constructor(t, e, n) { super(t), this.selector = e, this.caught = n } error(t) { if (!this.isStopped) { let n; try { n = this.selector(t, this.caught) } catch (e) { return void super.error(e) } this._unsubscribeAndRecycle(); const r = new P(this, void 0, void 0);
              this.add(r), F(this, n, void 0, void 0, r) } } }

        function eu(t) { return e => 0 === t ? ka() : e.lift(new nu(t)) } class nu { constructor(t) { if (this.total = t, this.total < 0) throw new ja } call(t, e) { return e.subscribe(new ru(t, this.total)) } } class ru extends g { constructor(t, e) { super(t), this.total = e, this.count = 0 } _next(t) { const e = this.total,
              n = ++this.count;
            n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe())) } }

        function su(t, e) { const n = arguments.length >= 2; return r => r.pipe(t ? Ra((e, n) => t(e, n, r)) : K, eu(1), n ? Wa(e) : Za(() => new Ma)) } class iu { constructor(t, e, n) { this.predicate = t, this.thisArg = e, this.source = n } call(t, e) { return e.subscribe(new ou(t, this.predicate, this.thisArg, this.source)) } } class ou extends g { constructor(t, e, n, r) { super(t), this.predicate = e, this.thisArg = n, this.source = r, this.index = 0, this.thisArg = n || this } notifyComplete(t) { this.destination.next(t), this.destination.complete() } _next(t) { let e = !1; try { e = this.predicate.call(this.thisArg, t, this.index++, this.source) } catch (n) { return void this.destination.error(n) } e || this.notifyComplete(!1) } _complete() { this.notifyComplete(!0) } }

        function lu(t, e) { return "function" == typeof e ? n => n.pipe(lu((n, r) => Z(t(n, r)).pipe($((t, s) => e(n, t, r, s))))) : e => e.lift(new au(t)) } class au { constructor(t) { this.project = t } call(t, e) { return e.subscribe(new uu(t, this.project)) } } class uu extends H { constructor(t, e) { super(t), this.project = e, this.index = 0 } _next(t) { let e; const n = this.index++; try { e = this.project(t, n) } catch (r) { return void this.destination.error(r) } this._innerSub(e, t, n) } _innerSub(t, e, n) { const r = this.innerSubscription;
            r && r.unsubscribe(); const s = new P(this, void 0, void 0);
            this.destination.add(s), this.innerSubscription = F(this, t, e, n, s) } _complete() { const { innerSubscription: t } = this;
            t && !t.closed || super._complete(), this.unsubscribe() } _unsubscribe() { this.innerSubscription = null } notifyComplete(t) { this.destination.remove(t), this.innerSubscription = null, this.isStopped && super._complete() } notifyNext(t, e, n, r, s) { this.destination.next(e) } }

        function cu(t, e) { let n = !1; return arguments.length >= 2 && (n = !0),
            function(r) { return r.lift(new hu(t, e, n)) } } class hu { constructor(t, e, n = !1) { this.accumulator = t, this.seed = e, this.hasSeed = n } call(t, e) { return e.subscribe(new du(t, this.accumulator, this.seed, this.hasSeed)) } } class du extends g { constructor(t, e, n, r) { super(t), this.accumulator = e, this._seed = n, this.hasSeed = r, this.index = 0 } get seed() { return this._seed } set seed(t) { this.hasSeed = !0, this._seed = t } _next(t) { if (this.hasSeed) return this._tryNext(t);
            this.seed = t, this.destination.next(t) } _tryNext(t) { const e = this.index++; let n; try { n = this.accumulator(this.seed, t, e) } catch (r) { this.destination.error(r) } this.seed = n, this.destination.next(n) } }

        function pu(t, e) { return q(t, e, 1) } class fu { constructor(t) { this.callback = t } call(t, e) { return e.subscribe(new gu(t, this.callback)) } } class gu extends g { constructor(t, e) { super(t), this.add(new d(e)) } } let mu = null;

        function _u() { return mu } class yu { constructor() { this.resourceLoaderType = null } get attrToPropMap() { return this._attrToPropMap } set attrToPropMap(t) { this._attrToPropMap = t } } class vu extends yu { constructor() { super(), this._animationPrefix = null, this._transitionEnd = null; try { const t = this.createElement("div", document); if (null != this.getStyle(t, "animationName")) this._animationPrefix = "";
              else { const e = ["Webkit", "Moz", "O", "ms"]; for (let n = 0; n < e.length; n++)
                  if (null != this.getStyle(t, e[n] + "AnimationName")) { this._animationPrefix = "-" + e[n].toLowerCase() + "-"; break } } const e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
              Object.keys(e).forEach(n => { null != this.getStyle(t, n) && (this._transitionEnd = e[n]) }) } catch (t) { this._animationPrefix = null, this._transitionEnd = null } } getDistributedNodes(t) { return t.getDistributedNodes() } resolveAndSetHref(t, e, n) { t.href = null == n ? e : e + "/../" + n } supportsDOMEvents() { return !0 } supportsNativeShadowDOM() { return "function" == typeof document.body.createShadowRoot } getAnimationPrefix() { return this._animationPrefix ? this._animationPrefix : "" } getTransitionEnd() { return this._transitionEnd ? this._transitionEnd : "" } supportsAnimation() { return null != this._animationPrefix && null != this._transitionEnd } } const bu = { class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" },
          wu = 3,
          Cu = { "\b": "Backspace", "\t": "Tab", "\x7f": "Delete", "\x1b": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" },
          xu = { A: "1", B: "2", C: "3", D: "4", E: "5", F: "6", G: "7", H: "8", I: "9", J: "*", K: "+", M: "-", N: ".", O: "/", "`": "0", "\x90": "NumLock" },
          ku = (() => { if (kt.Node) return kt.Node.prototype.contains || function(t) { return !!(16 & this.compareDocumentPosition(t)) } })();
        class Su extends vu { parse(t) { throw new Error("parse not implemented") } static makeCurrent() { var t;
            t = new Su, mu || (mu = t) } hasProperty(t, e) { return e in t } setProperty(t, e, n) { t[e] = n } getProperty(t, e) { return t[e] } invoke(t, e, n) { t[e](...n) } logError(t) { window.console && (console.error ? console.error(t) : console.log(t)) } log(t) { window.console && window.console.log && window.console.log(t) } logGroup(t) { window.console && window.console.group && window.console.group(t) } logGroupEnd() { window.console && window.console.groupEnd && window.console.groupEnd() } get attrToPropMap() { return bu } contains(t, e) { return ku.call(t, e) } querySelector(t, e) { return t.querySelector(e) } querySelectorAll(t, e) { return t.querySelectorAll(e) } on(t, e, n) { t.addEventListener(e, n, !1) } onAndCancel(t, e, n) { return t.addEventListener(e, n, !1), () => { t.removeEventListener(e, n, !1) } } dispatchEvent(t, e) { t.dispatchEvent(e) } createMouseEvent(t) { const e = this.getDefaultDocument().createEvent("MouseEvent"); return e.initEvent(t, !0, !0), e } createEvent(t) { const e = this.getDefaultDocument().createEvent("Event"); return e.initEvent(t, !0, !0), e } preventDefault(t) { t.preventDefault(), t.returnValue = !1 } isPrevented(t) { return t.defaultPrevented || null != t.returnValue && !t.returnValue } getInnerHTML(t) { return t.innerHTML } getTemplateContent(t) { return "content" in t && this.isTemplateElement(t) ? t.content : null } getOuterHTML(t) { return t.outerHTML } nodeName(t) { return t.nodeName } nodeValue(t) { return t.nodeValue } type(t) { return t.type } content(t) { return this.hasProperty(t, "content") ? t.content : t } firstChild(t) { return t.firstChild } nextSibling(t) { return t.nextSibling } parentElement(t) { return t.parentNode } childNodes(t) { return t.childNodes } childNodesAsList(t) { const e = t.childNodes,
              n = new Array(e.length); for (let r = 0; r < e.length; r++) n[r] = e[r]; return n } clearNodes(t) { for (; t.firstChild;) t.removeChild(t.firstChild) } appendChild(t, e) { t.appendChild(e) } removeChild(t, e) { t.removeChild(e) } replaceChild(t, e, n) { t.replaceChild(e, n) } remove(t) { return t.parentNode && t.parentNode.removeChild(t), t } insertBefore(t, e, n) { t.insertBefore(n, e) } insertAllBefore(t, e, n) { n.forEach(n => t.insertBefore(n, e)) } insertAfter(t, e, n) { t.insertBefore(n, e.nextSibling) } setInnerHTML(t, e) { t.innerHTML = e } getText(t) { return t.textContent } setText(t, e) { t.textContent = e } getValue(t) { return t.value } setValue(t, e) { t.value = e } getChecked(t) { return t.checked } setChecked(t, e) { t.checked = e } createComment(t) { return this.getDefaultDocument().createComment(t) } createTemplate(t) { const e = this.getDefaultDocument().createElement("template"); return e.innerHTML = t, e } createElement(t, e) { return (e = e || this.getDefaultDocument()).createElement(t) } createElementNS(t, e, n) { return (n = n || this.getDefaultDocument()).createElementNS(t, e) } createTextNode(t, e) { return (e = e || this.getDefaultDocument()).createTextNode(t) } createScriptTag(t, e, n) { const r = (n = n || this.getDefaultDocument()).createElement("SCRIPT"); return r.setAttribute(t, e), r } createStyleElement(t, e) { const n = (e = e || this.getDefaultDocument()).createElement("style"); return this.appendChild(n, this.createTextNode(t, e)), n } createShadowRoot(t) { return t.createShadowRoot() } getShadowRoot(t) { return t.shadowRoot } getHost(t) { return t.host } clone(t) { return t.cloneNode(!0) } getElementsByClassName(t, e) { return t.getElementsByClassName(e) } getElementsByTagName(t, e) { return t.getElementsByTagName(e) } classList(t) { return Array.prototype.slice.call(t.classList, 0) } addClass(t, e) { t.classList.add(e) } removeClass(t, e) { t.classList.remove(e) } hasClass(t, e) { return t.classList.contains(e) } setStyle(t, e, n) { t.style[e] = n } removeStyle(t, e) { t.style[e] = "" } getStyle(t, e) { return t.style[e] } hasStyle(t, e, n) { const r = this.getStyle(t, e) || ""; return n ? r == n : r.length > 0 } tagName(t) { return t.tagName } attributeMap(t) { const e = new Map,
              n = t.attributes; for (let r = 0; r < n.length; r++) { const t = n.item(r);
              e.set(t.name, t.value) } return e } hasAttribute(t, e) { return t.hasAttribute(e) } hasAttributeNS(t, e, n) { return t.hasAttributeNS(e, n) } getAttribute(t, e) { return t.getAttribute(e) } getAttributeNS(t, e, n) { return t.getAttributeNS(e, n) } setAttribute(t, e, n) { t.setAttribute(e, n) } setAttributeNS(t, e, n, r) { t.setAttributeNS(e, n, r) } removeAttribute(t, e) { t.removeAttribute(e) } removeAttributeNS(t, e, n) { t.removeAttributeNS(e, n) } templateAwareRoot(t) { return this.isTemplateElement(t) ? this.content(t) : t } createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle") } getDefaultDocument() { return document } getBoundingClientRect(t) { try { return t.getBoundingClientRect() } catch (e) { return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } } } getTitle(t) { return t.title } setTitle(t, e) { t.title = e || "" } elementMatches(t, e) { return !!this.isElementNode(t) && (t.matches && t.matches(e) || t.msMatchesSelector && t.msMatchesSelector(e) || t.webkitMatchesSelector && t.webkitMatchesSelector(e)) } isTemplateElement(t) { return this.isElementNode(t) && "TEMPLATE" === t.nodeName } isTextNode(t) { return t.nodeType === Node.TEXT_NODE } isCommentNode(t) { return t.nodeType === Node.COMMENT_NODE } isElementNode(t) { return t.nodeType === Node.ELEMENT_NODE } hasShadowRoot(t) { return null != t.shadowRoot && t instanceof HTMLElement } isShadowRoot(t) { return t instanceof DocumentFragment } importIntoDoc(t) { return document.importNode(this.templateAwareRoot(t), !0) } adoptNode(t) { return document.adoptNode(t) } getHref(t) { return t.getAttribute("href") } getEventKey(t) { let e = t.key; if (null == e) { if (null == (e = t.keyIdentifier)) return "Unidentified";
              e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), t.location === wu && xu.hasOwnProperty(e) && (e = xu[e])) } return Cu[e] || e } getGlobalEventTarget(t, e) { return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null } getHistory() { return window.history } getLocation() { return window.location } getBaseHref(t) { const e = Tu || (Tu = document.querySelector("base")) ? Tu.getAttribute("href") : null; return null == e ? null : (n = e, Eu || (Eu = document.createElement("a")), Eu.setAttribute("href", n), "/" === Eu.pathname.charAt(0) ? Eu.pathname : "/" + Eu.pathname); var n } resetBaseElement() { Tu = null } getUserAgent() { return window.navigator.userAgent } setData(t, e, n) { this.setAttribute(t, "data-" + e, n) } getData(t, e) { return this.getAttribute(t, "data-" + e) } getComputedStyle(t) { return getComputedStyle(t) } supportsWebAnimation() { return "function" == typeof Element.prototype.animate } performanceNow() { return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime() } supportsCookies() { return !0 } getCookie(t) { return function(t, e) { e = encodeURIComponent(e); for (const n of t.split(";")) { const t = n.indexOf("="),
                  [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)]; if (r.trim() === e) return decodeURIComponent(s) } return null }(document.cookie, t) } setCookie(t, e) { document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) } } let Eu, Tu = null;

        function Iu() { return !!window.history.pushState } const Mu = new St("TRANSITION_ID"),
          Pu = [{ provide: js, useFactory: function(t, e, n) { return () => { n.get(Fs).donePromise.then(() => { const n = _u();
                  Array.prototype.slice.apply(n.querySelectorAll(e, "style[ng-transition]")).filter(e => n.getAttribute(e, "ng-transition") === t).forEach(t => n.remove(t)) }) } }, deps: [Mu, va, Ne], multi: !0 }];
        class Ou { static init() { var t;
            t = new Ou, xi = t } addToWindow(t) { kt.getAngularTestability = (e, n = !0) => { const r = t.findTestabilityInTree(e, n); if (null == r) throw new Error("Could not find testability for element."); return r }, kt.getAllAngularTestabilities = () => t.getAllTestabilities(), kt.getAllAngularRootElements = () => t.getAllRootElements(), kt.frameworkStabilizers || (kt.frameworkStabilizers = []), kt.frameworkStabilizers.push(t => { const e = kt.getAllAngularTestabilities(); let n = e.length,
                r = !1; const s = function(e) { r = r || e, 0 == --n && t(r) };
              e.forEach((function(t) { t.whenStable(s) })) }) } findTestabilityInTree(t, e, n) { if (null == e) return null; const r = t.getTestability(e); return null != r ? r : n ? _u().isShadowRoot(e) ? this.findTestabilityInTree(t, _u().getHost(e), !0) : this.findTestabilityInTree(t, _u().parentElement(e), !0) : null } }

        function Au(t, e) { "undefined" != typeof COMPILED && COMPILED || ((kt.ng = kt.ng || {})[t] = e) } const Du = (() => ({ ApplicationRef: Ai, NgZone: di }))();

        function Nu(t) { return Gi(t) } const Ru = new St("EventManagerPlugins");
        class Vu { constructor(t, e) { this._zone = e, this._eventNameToPlugin = new Map, t.forEach(t => t.manager = this), this._plugins = t.slice().reverse() } addEventListener(t, e, n) { return this._findPluginFor(e).addEventListener(t, e, n) } addGlobalEventListener(t, e, n) { return this._findPluginFor(e).addGlobalEventListener(t, e, n) } getZone() { return this._zone } _findPluginFor(t) { const e = this._eventNameToPlugin.get(t); if (e) return e; const n = this._plugins; for (let r = 0; r < n.length; r++) { const e = n[r]; if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e } throw new Error(`No event manager plugin found for event ${t}`) } } class Lu { constructor(t) { this._doc = t } addGlobalEventListener(t, e, n) { const r = _u().getGlobalEventTarget(this._doc, t); if (!r) throw new Error(`Unsupported event target ${r} for event ${e}`); return this.addEventListener(r, e, n) } } class Uu { constructor() { this._stylesSet = new Set } addStyles(t) { const e = new Set;
            t.forEach(t => { this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t)) }), this.onStylesAdded(e) } onStylesAdded(t) {} getAllStyles() { return Array.from(this._stylesSet) } } class ju extends Uu { constructor(t) { super(), this._doc = t, this._hostNodes = new Set, this._styleNodes = new Set, this._hostNodes.add(t.head) } _addStylesToHost(t, e) { t.forEach(t => { const n = this._doc.createElement("style");
              n.textContent = t, this._styleNodes.add(e.appendChild(n)) }) } addHost(t) { this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t) } removeHost(t) { this._hostNodes.delete(t) } onStylesAdded(t) { this._hostNodes.forEach(e => this._addStylesToHost(t, e)) } ngOnDestroy() { this._styleNodes.forEach(t => _u().remove(t)) } } const Fu = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
          Hu = /%COMP%/g,
          $u = "_nghost-%COMP%",
          zu = "_ngcontent-%COMP%";

        function Bu(t, e, n) { for (let r = 0; r < e.length; r++) { let s = e[r];
            Array.isArray(s) ? Bu(t, s, n) : (s = s.replace(Hu, t), n.push(s)) } return n }

        function Gu(t) { return e => {!1 === t(e) && (e.preventDefault(), e.returnValue = !1) } } class Zu { constructor(t, e, n) { this.eventManager = t, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new qu(t) } createRenderer(t, e) { if (!t || !e) return this.defaultRenderer; switch (e.encapsulation) {
              case Gt.Emulated:
                { let n = this.rendererByCompId.get(e.id); return n || (n = new Ku(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n }
              case Gt.Native:
              case Gt.ShadowDom:
                return new Yu(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) { const t = Bu(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer) } return this.defaultRenderer } } begin() {} end() {} } class qu { constructor(t) { this.eventManager = t, this.data = Object.create(null) } destroy() {} createElement(t, e) { return e ? document.createElementNS(Fu[e] || e, t) : document.createElement(t) } createComment(t) { return document.createComment(t) } createText(t) { return document.createTextNode(t) } appendChild(t, e) { t.appendChild(e) } insertBefore(t, e, n) { t && t.insertBefore(e, n) } removeChild(t, e) { t && t.removeChild(e) } selectRootElement(t, e) { let n = "string" == typeof t ? document.querySelector(t) : t; if (!n) throw new Error(`The selector "${t}" did not match any elements`); return e || (n.textContent = ""), n } parentNode(t) { return t.parentNode } nextSibling(t) { return t.nextSibling } setAttribute(t, e, n, r) { if (r) { e = r + ":" + e; const s = Fu[r];
              s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n) } else t.setAttribute(e, n) } removeAttribute(t, e, n) { if (n) { const r = Fu[n];
              r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`) } else t.removeAttribute(e) } addClass(t, e) { t.classList.add(e) } removeClass(t, e) { t.classList.remove(e) } setStyle(t, e, n, r) { r & fn.DashCase ? t.style.setProperty(e, n, r & fn.Important ? "important" : "") : t.style[e] = n } removeStyle(t, e, n) { n & fn.DashCase ? t.style.removeProperty(e) : t.style[e] = "" } setProperty(t, e, n) { Qu(e, "property"), t[e] = n } setValue(t, e) { t.nodeValue = e } listen(t, e, n) { return Qu(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, Gu(n)) : this.eventManager.addEventListener(t, e, Gu(n)) } } const Wu = (() => "@".charCodeAt(0))();

        function Qu(t, e) { if (t.charCodeAt(0) === Wu) throw new Error(`Found the synthetic ${e} ${t}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`) } class Ku extends qu { constructor(t, e, n, r) { super(t), this.component = n; const s = Bu(r + "-" + n.id, n.styles, []);
            e.addStyles(s), this.contentAttr = zu.replace(Hu, r + "-" + n.id), this.hostAttr = $u.replace(Hu, r + "-" + n.id) } applyToHost(t) { super.setAttribute(t, this.hostAttr, "") } createElement(t, e) { const n = super.createElement(t, e); return super.setAttribute(n, this.contentAttr, ""), n } } class Yu extends qu { constructor(t, e, n, r) { super(t), this.sharedStylesHost = e, this.hostEl = n, this.component = r, this.shadowRoot = r.encapsulation === Gt.ShadowDom ? n.attachShadow({ mode: "open" }) : n.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot); const s = Bu(r.id, r.styles, []); for (let i = 0; i < s.length; i++) { const t = document.createElement("style");
              t.textContent = s[i], this.shadowRoot.appendChild(t) } } nodeOrShadowRoot(t) { return t === this.hostEl ? this.shadowRoot : t } destroy() { this.sharedStylesHost.removeHost(this.shadowRoot) } appendChild(t, e) { return super.appendChild(this.nodeOrShadowRoot(t), e) } insertBefore(t, e, n) { return super.insertBefore(this.nodeOrShadowRoot(t), e, n) } removeChild(t, e) { return super.removeChild(this.nodeOrShadowRoot(t), e) } parentNode(t) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t))) } } const Ju = (() => "undefined" != typeof Zone && Zone.__symbol__ || function(t) { return "__zone_symbol__" + t })(),
          Xu = Ju("addEventListener"),
          tc = Ju("removeEventListener"),
          ec = {},
          nc = "FALSE",
          rc = "ANGULAR",
          sc = "addEventListener",
          ic = "removeEventListener",
          oc = "__zone_symbol__propagationStopped",
          lc = "__zone_symbol__stopImmediatePropagation",
          ac = (() => { const t = "undefined" != typeof Zone && Zone[Ju("BLACK_LISTED_EVENTS")]; if (t) { const e = {}; return t.forEach(t => { e[t] = t }), e } })(),
          uc = function(t) { return !!ac && ac.hasOwnProperty(t) },
          cc = function(t) { const e = ec[t.type]; if (!e) return; const n = this[e]; if (!n) return; const r = [t]; if (1 === n.length) { const t = n[0]; return t.zone !== Zone.current ? t.zone.run(t.handler, this, r) : t.handler.apply(this, r) } { const e = n.slice(); for (let n = 0; n < e.length && !0 !== t[oc]; n++) { const t = e[n];
                t.zone !== Zone.current ? t.zone.run(t.handler, this, r) : t.handler.apply(this, r) } } };
        class hc extends Lu { constructor(t, e, n) { super(t), this.ngZone = e, n && function(t) { return t === ba }(n) || this.patchEvent() } patchEvent() { if ("undefined" == typeof Event || !Event || !Event.prototype) return; if (Event.prototype[lc]) return; const t = Event.prototype[lc] = Event.prototype.stopImmediatePropagation;
            Event.prototype.stopImmediatePropagation = function() { this && (this[oc] = !0), t && t.apply(this, arguments) } } supports(t) { return !0 } addEventListener(t, e, n) { let r = n; if (!t[Xu] || di.isInAngularZone() && !uc(e)) t[sc](e, r, !1);
            else { let n = ec[e];
              n || (n = ec[e] = Ju(rc + e + nc)); let s = t[n]; const i = s && s.length > 0;
              s || (s = t[n] = []); const o = uc(e) ? Zone.root : Zone.current; if (0 === s.length) s.push({ zone: o, handler: r });
              else { let t = !1; for (let e = 0; e < s.length; e++)
                  if (s[e].handler === r) { t = !0; break } t || s.push({ zone: o, handler: r }) } i || t[Xu](e, cc, !1) } return () => this.removeEventListener(t, e, r) } removeEventListener(t, e, n) { let r = t[tc]; if (!r) return t[ic].apply(t, [e, n, !1]); let s = ec[e],
              i = s && t[s]; if (!i) return t[ic].apply(t, [e, n, !1]); let o = !1; for (let l = 0; l < i.length; l++)
              if (i[l].handler === n) { o = !0, i.splice(l, 1); break } o ? 0 === i.length && r.apply(t, [e, cc, !1]) : t[ic].apply(t, [e, n, !1]) } } const dc = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0 },
          pc = new St("HammerGestureConfig"),
          fc = new St("HammerLoader");
        class gc { constructor() { this.events = [], this.overrides = {} } buildHammer(t) { const e = new Hammer(t, this.options);
            e.get("pinch").set({ enable: !0 }), e.get("rotate").set({ enable: !0 }); for (const n in this.overrides) e.get(n).set(this.overrides[n]); return e } } class mc extends Lu { constructor(t, e, n, r) { super(t), this._config = e, this.console = n, this.loader = r } supports(t) { return !(!dc.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t) || !window.Hammer && !this.loader && (this.console.warn(`The "${t}" event cannot be bound because Hammer.JS is not ` + "loaded and no custom loader has been specified."), 1)) } addEventListener(t, e, n) { const r = this.manager.getZone(); if (e = e.toLowerCase(), !window.Hammer && this.loader) { let r = !1,
                s = () => { r = !0 }; return this.loader().then(() => { if (!window.Hammer) return this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void(s = () => {});
                r || (s = this.addEventListener(t, e, n)) }).catch(() => { this.console.warn(`The "${e}" event cannot be bound because the custom ` + "Hammer.JS loader failed."), s = () => {} }), () => { s() } } return r.runOutsideAngular(() => { const s = this._config.buildHammer(t),
                i = function(t) { r.runGuarded((function() { n(t) })) }; return s.on(e, i), () => { s.off(e, i), "function" == typeof s.destroy && s.destroy() } }) } isCustomEvent(t) { return this._config.events.indexOf(t) > -1 } } const _c = ["alt", "control", "meta", "shift"],
          yc = { alt: t => t.altKey, control: t => t.ctrlKey, meta: t => t.metaKey, shift: t => t.shiftKey };
        class vc extends Lu { constructor(t) { super(t) } supports(t) { return null != vc.parseEventName(t) } addEventListener(t, e, n) { const r = vc.parseEventName(e),
              s = vc.eventCallback(r.fullKey, n, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => _u().onAndCancel(t, r.domEventName, s)) } static parseEventName(t) { const e = t.toLowerCase().split("."),
              n = e.shift(); if (0 === e.length || "keydown" !== n && "keyup" !== n) return null; const r = vc._normalizeKey(e.pop()); let s = ""; if (_c.forEach(t => { const n = e.indexOf(t);
                n > -1 && (e.splice(n, 1), s += t + ".") }), s += r, 0 != e.length || 0 === r.length) return null; const i = {}; return i.domEventName = n, i.fullKey = s, i } static getEventFullKey(t) { let e = "",
              n = _u().getEventKey(t); return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), _c.forEach(r => { r != n && (0, yc[r])(t) && (e += r + ".") }), e += n } static eventCallback(t, e, n) { return r => { vc.getEventFullKey(r) === t && n.runGuarded(() => e(r)) } } static _normalizeKey(t) { switch (t) {
              case "esc":
                return "escape";
              default:
                return t } } } class bc {} class wc extends bc { constructor(t) { super(), this._doc = t } sanitize(t, e) { if (null == e) return null; switch (t) {
              case ke.NONE:
                return e;
              case ke.HTML:
                return e instanceof xc ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "HTML"), function(t, e) { let n = null; try { Ce = Ce || new re(t); let r = e ? String(e) : "";
                    n = Ce.getInertBodyElement(r); let s = 5,
                      i = r;
                    do { if (0 === s) throw new Error("Failed to sanitize html because the input is unstable");
                      s--, r = i, i = n.innerHTML, n = Ce.getInertBodyElement(r) } while (r !== i); const o = new ye,
                      l = o.sanitizeChildren(xe(n) || n); return ne() && o.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), l } finally { if (n) { const t = xe(n) || n; for (; t.firstChild;) t.removeChild(t.firstChild) } } }(this._doc, String(e)));
              case ke.STYLE:
                return e instanceof kc ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "Style"), function(t) { if (!(t = String(t).trim())) return ""; const e = t.match(Te); return e && oe(e[1]) === e[1] || t.match(Ee) && function(t) { let e = !0,
                      n = !0; for (let r = 0; r < t.length; r++) { const s = t.charAt(r); "'" === s && n ? e = !e : '"' === s && e && (n = !n) } return e && n }(t) ? t : (ne() && console.warn(`WARNING: sanitizing unsafe style value ${t} (see http://g.co/ng/security#xss).`), "unsafe") }(e));
              case ke.SCRIPT:
                if (e instanceof Sc) return e.changingThisBreaksApplicationSecurity; throw this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context");
              case ke.URL:
                return e instanceof Tc || e instanceof Ec ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), oe(String(e)));
              case ke.RESOURCE_URL:
                if (e instanceof Tc) return e.changingThisBreaksApplicationSecurity; throw this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
              default:
                throw new Error(`Unexpected SecurityContext ${t} (see http://g.co/ng/security#xss)`) } } checkNotSafeValue(t, e) { if (t instanceof Cc) throw new Error(`Required a safe ${e}, got a ${t.getTypeName()} ` + "(see http://g.co/ng/security#xss)") } bypassSecurityTrustHtml(t) { return new xc(t) } bypassSecurityTrustStyle(t) { return new kc(t) } bypassSecurityTrustScript(t) { return new Sc(t) } bypassSecurityTrustUrl(t) { return new Ec(t) } bypassSecurityTrustResourceUrl(t) { return new Tc(t) } } class Cc { constructor(t) { this.changingThisBreaksApplicationSecurity = t } toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + " (see http://g.co/ng/security#xss)" } } class xc extends Cc { getTypeName() { return "HTML" } } class kc extends Cc { getTypeName() { return "Style" } } class Sc extends Cc { getTypeName() { return "Script" } } class Ec extends Cc { getTypeName() { return "URL" } } class Tc extends Cc { getTypeName() { return "ResourceURL" } } const Ic = Ii(qi, "browser", [{ provide: Gs, useValue: "browser" }, { provide: Bs, useValue: function() { Su.makeCurrent(), Ou.init() }, multi: !0 }, { provide: kl, useClass: class extends kl { constructor(t) { super(), this._doc = t, this._init() } _init() { this.location = _u().getLocation(), this._history = _u().getHistory() } getBaseHrefFromDOM() { return _u().getBaseHref(this._doc) } onPopState(t) { _u().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1) } onHashChange(t) { _u().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1) } get href() { return this.location.href } get protocol() { return this.location.protocol } get hostname() { return this.location.hostname } get port() { return this.location.port } get pathname() { return this.location.pathname } get search() { return this.location.search } get hash() { return this.location.hash } set pathname(t) { this.location.pathname = t } pushState(t, e, n) { Iu() ? this._history.pushState(t, e, n) : this.location.hash = n } replaceState(t, e, n) { Iu() ? this._history.replaceState(t, e, n) : this.location.hash = n } forward() { this._history.forward() } back() { this._history.back() } getState() { return this._history.state } }, deps: [va] }, { provide: va, useFactory: function() { return document }, deps: [] }]);

        function Mc() { return new Xt } class Pc { constructor(t) { if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.") } static withServerTransition(t) { return { ngModule: Pc, providers: [{ provide: Hs, useValue: t.appId }, { provide: Mu, useExisting: Hs }, Pu] } } } "undefined" != typeof window && window;
        class Oc { constructor(t, e) { this.id = t, this.url = e } } class Ac extends Oc { constructor(t, e, n = "imperative", r = null) { super(t, e), this.navigationTrigger = n, this.restoredState = r } toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')` } } class Dc extends Oc { constructor(t, e, n) { super(t, e), this.urlAfterRedirects = n } toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')` } } class Nc extends Oc { constructor(t, e, n) { super(t, e), this.reason = n } toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')` } } class Rc extends Oc { constructor(t, e, n) { super(t, e), this.error = n } toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})` } } class Vc extends Oc { constructor(t, e, n, r) { super(t, e), this.urlAfterRedirects = n, this.state = r } toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})` } } class Lc extends Oc { constructor(t, e, n, r) { super(t, e), this.urlAfterRedirects = n, this.state = r } toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})` } } class Uc extends Oc { constructor(t, e, n, r, s) { super(t, e), this.urlAfterRedirects = n, this.state = r, this.shouldActivate = s } toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})` } } class jc extends Oc { constructor(t, e, n, r) { super(t, e), this.urlAfterRedirects = n, this.state = r } toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})` } } class Fc extends Oc { constructor(t, e, n, r) { super(t, e), this.urlAfterRedirects = n, this.state = r } toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})` } } class Hc { constructor(t) { this.route = t } toString() { return `RouteConfigLoadStart(path: ${this.route.path})` } } class $c { constructor(t) { this.route = t } toString() { return `RouteConfigLoadEnd(path: ${this.route.path})` } } class zc { constructor(t) { this.snapshot = t } toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')` } } class Bc { constructor(t) { this.snapshot = t } toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')` } } class Gc { constructor(t) { this.snapshot = t } toString() { return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')` } } class Zc { constructor(t) { this.snapshot = t } toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')` } } class qc { constructor(t, e, n) { this.routerEvent = t, this.position = e, this.anchor = n } toString() { return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')` } } class Wc {} const Qc = "primary";
        class Kc { constructor(t) { this.params = t || {} } has(t) { return this.params.hasOwnProperty(t) } get(t) { if (this.has(t)) { const e = this.params[t]; return Array.isArray(e) ? e[0] : e } return null } getAll(t) { if (this.has(t)) { const e = this.params[t]; return Array.isArray(e) ? e : [e] } return [] } get keys() { return Object.keys(this.params) } }

        function Yc(t) { return new Kc(t) } const Jc = "ngNavigationCancelingError";

        function Xc(t) { const e = Error("NavigationCancelingError: " + t); return e[Jc] = !0, e }

        function th(t, e, n) { const r = n.path.split("/"); if (r.length > t.length) return null; if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null; const s = {}; for (let i = 0; i < r.length; i++) { const e = r[i],
              n = t[i]; if (e.startsWith(":")) s[e.substring(1)] = n;
            else if (e !== n.path) return null } return { consumed: t.slice(0, r.length), posParams: s } } class eh { constructor(t, e) { this.routes = t, this.module = e } }

        function nh(t, e = "") { for (let n = 0; n < t.length; n++) { const r = t[n];
            rh(r, sh(e, r)) } }

        function rh(t, e) { if (!t) throw new Error(`\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `); if (Array.isArray(t)) throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`); if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== Qc) throw new Error(`Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`); if (t.redirectTo && t.children) throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`); if (t.redirectTo && t.loadChildren) throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`); if (t.children && t.loadChildren) throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`); if (t.redirectTo && t.component) throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`); if (t.path && t.matcher) throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`); if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error(`Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`); if (void 0 === t.path && void 0 === t.matcher) throw new Error(`Invalid configuration of route '${e}': routes must have either a path or a matcher specified`); if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`); if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error(`Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`); if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);
          t.children && nh(t.children, e) }

        function sh(t, e) { return e ? t || e.path ? t && !e.path ? `${t}/` : !t && e.path ? e.path : `${t}/${e.path}` : "" : t }

        function ih(t) { const e = t.children && t.children.map(ih),
            n = e ? Object.assign({}, t, { children: e }) : Object.assign({}, t); return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== Qc && (n.component = Wc), n }

        function oh(t, e) { const n = Object.keys(t),
            r = Object.keys(e); if (!n || !r || n.length != r.length) return !1; let s; for (let i = 0; i < n.length; i++)
            if (t[s = n[i]] !== e[s]) return !1; return !0 }

        function lh(t) { return Array.prototype.concat.apply([], t) }

        function ah(t) { return t.length > 0 ? t[t.length - 1] : null }

        function uh(t, e) { for (const n in t) t.hasOwnProperty(n) && e(t[n], n) }

        function ch(t) { return Je(t) ? t : Ye(t) ? Z(Promise.resolve(t)) : Ea(t) }

        function hh(t, e, n) { return n ? function(t, e) { return oh(t, e) }(t.queryParams, e.queryParams) && function t(e, n) { if (!gh(e.segments, n.segments)) return !1; if (e.numberOfChildren !== n.numberOfChildren) return !1; for (const r in n.children) { if (!e.children[r]) return !1; if (!t(e.children[r], n.children[r])) return !1 } return !0 }(t.root, e.root) : function(t, e) { return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => e[n] === t[n]) }(t.queryParams, e.queryParams) && function t(e, n) { return function e(n, r, s) { if (n.segments.length > s.length) return !!gh(n.segments.slice(0, s.length), s) && !r.hasChildren(); if (n.segments.length === s.length) { if (!gh(n.segments, s)) return !1; for (const e in r.children) { if (!n.children[e]) return !1; if (!t(n.children[e], r.children[e])) return !1 } return !0 } { const t = s.slice(0, n.segments.length),
                  i = s.slice(n.segments.length); return !!gh(n.segments, t) && !!n.children[Qc] && e(n.children[Qc], r, i) } }(e, n, n.segments) }(t.root, e.root) } class dh { constructor(t, e, n) { this.root = t, this.queryParams = e, this.fragment = n } get queryParamMap() { return this._queryParamMap || (this._queryParamMap = Yc(this.queryParams)), this._queryParamMap } toString() { return vh.serialize(this) } } class ph { constructor(t, e) { this.segments = t, this.children = e, this.parent = null, uh(e, (t, e) => t.parent = this) } hasChildren() { return this.numberOfChildren > 0 } get numberOfChildren() { return Object.keys(this.children).length } toString() { return bh(this) } } class fh { constructor(t, e) { this.path = t, this.parameters = e } get parameterMap() { return this._parameterMap || (this._parameterMap = Yc(this.parameters)), this._parameterMap } toString() { return Eh(this) } }

        function gh(t, e) { return t.length === e.length && t.every((t, n) => t.path === e[n].path) }

        function mh(t, e) { let n = []; return uh(t.children, (t, r) => { r === Qc && (n = n.concat(e(t, r))) }), uh(t.children, (t, r) => { r !== Qc && (n = n.concat(e(t, r))) }), n } class _h {} class yh { parse(t) { const e = new Oh(t); return new dh(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()) } serialize(t) { var e; return `${`/${function t(e,n){if(!e.hasChildren())return bh(e);if(n){const n=e.children[Qc]?t(e.children[Qc],!1):"",r=[];return uh(e.children,(e,n)=>{n!==Qc&&r.push(`${n}:${t(e,!1)}`)}),r.length>0?`${n}(${r.join("//")})`: n } { const n = mh(e, (n, r) => r === Qc ? [t(e.children[Qc], !1)] : [`${r}:${t(n,!1)}`]); return `${bh(e)}/(${n.join("//")})` } }(t.root, !0) }
      `}${function(t){const e=Object.keys(t).map(e=>{const n=t[e];return Array.isArray(n)?n.map(t=>`${Ch(e)}=${Ch(t)}`).join("&"):`${Ch(e)}=${Ch(n)}`});return e.length?` ? $ { e.join("&") } `:""}(t.queryParams)}${"string"==typeof t.fragment?`#${e=t.fragment,encodeURI(e)}`:""}` }
  }
  const vh = new yh;

  function bh(t) { return t.segments.map(t => Eh(t)).join("/") }

  function wh(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",") }

  function Ch(t) { return wh(t).replace(/%3B/gi, ";") }

  function xh(t) { return wh(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&") }

  function kh(t) { return decodeURIComponent(t) }

  function Sh(t) { return kh(t.replace(/\+/g, "%20")) }

  function Eh(t) { return `${xh(t.path)}${e=t.parameters,Object.keys(e).map(t=>`;${xh(t)}=${xh(e[t])}`).join("")}`; var e }
  const Th = /^[^\/()?;=#]+/;

  function Ih(t) { const e = t.match(Th); return e ? e[0] : "" }
  const Mh = /^[^=?&#]+/, Ph = /^[^?&#]+/; class Oh { constructor(t) { this.url = t, this.remaining = t } parseRootSegment() { return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new ph([], {}) : new ph([], this.parseChildren()) } parseQueryParams() { const t = {}; if (this.consumeOptional("?"))
        do { this.parseQueryParam(t) } while (this.consumeOptional("&")); return t } parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null } parseChildren() { if ("" === this.remaining) return {};
      this.consumeOptional("/"); const t = []; for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment()); let e = {};
      this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0)); let n = {}; return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[Qc] = new ph(t, e)), n } parseSegment() { const t = Ih(this.remaining); if ("" === t && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`); return this.capture(t), new fh(kh(t), this.parseMatrixParams()) } parseMatrixParams() { const t = {}; for (; this.consumeOptional(";");) this.parseParam(t); return t } parseParam(t) { const e = Ih(this.remaining); if (!e) return;
      this.capture(e); let n = ""; if (this.consumeOptional("=")) { const t = Ih(this.remaining);
        t && this.capture(n = t) } t[kh(e)] = kh(n) } parseQueryParam(t) { const e = function(t) { const e = t.match(Mh); return e ? e[0] : "" }(this.remaining); if (!e) return;
      this.capture(e); let n = ""; if (this.consumeOptional("=")) { const t = function(t) { const e = t.match(Ph); return e ? e[0] : "" }(this.remaining);
        t && this.capture(n = t) } const r = Sh(e),
        s = Sh(n); if (t.hasOwnProperty(r)) { let e = t[r];
        Array.isArray(e) || (t[r] = e = [e]), e.push(s) } else t[r] = s } parseParens(t) { const e = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) { const n = Ih(this.remaining),
          r = this.remaining[n.length]; if ("/" !== r && ")" !== r && ";" !== r) throw new Error(`Cannot parse url '${this.url}'`); let s = void 0;
        n.indexOf(":") > -1 ? (s = n.substr(0, n.indexOf(":")), this.capture(s), this.capture(":")) : t && (s = Qc); const i = this.parseChildren();
        e[s] = 1 === Object.keys(i).length ? i[Qc] : new ph([], i), this.consumeOptional("//") } return e } peekStartsWith(t) { return this.remaining.startsWith(t) } consumeOptional(t) { return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0) } capture(t) { if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`) } } class Ah { constructor(t) { this._root = t } get root() { return this._root.value } parent(t) { const e = this.pathFromRoot(t); return e.length > 1 ? e[e.length - 2] : null } children(t) { const e = Dh(t, this._root); return e ? e.children.map(t => t.value) : [] } firstChild(t) { const e = Dh(t, this._root); return e && e.children.length > 0 ? e.children[0].value : null } siblings(t) { const e = Nh(t, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(t => t.value).filter(e => e !== t) } pathFromRoot(t) { return Nh(t, this._root).map(t => t.value) } }

  function Dh(t, e) { if (t === e.value) return e; for (const n of e.children) { const e = Dh(t, n); if (e) return e } return null }

  function Nh(t, e) { if (t === e.value) return [e]; for (const n of e.children) { const r = Nh(t, n); if (r.length) return r.unshift(e), r } return [] } class Rh { constructor(t, e) { this.value = t, this.children = e } toString() { return `TreeNode(${this.value})` } }

  function Vh(t) { const e = {}; return t && t.children.forEach(t => e[t.value.outlet] = t), e } class Lh extends Ah { constructor(t, e) { super(t), this.snapshot = e, zh(this, t) } toString() { return this.snapshot.toString() } }

  function Uh(t, e) { const n = function(t, e) { const n = new Hh([], {}, {}, "", {}, Qc, e, null, t.root, -1, {}); return new $h("", new Rh(n, [])) }(t, e),
      r = new Ta([new fh("", {})]),
      s = new Ta({}),
      i = new Ta({}),
      o = new Ta({}),
      l = new Ta(""),
      a = new jh(r, s, o, l, i, Qc, e, n.root); return a.snapshot = n.root, new Lh(new Rh(a, []), n) } class jh { constructor(t, e, n, r, s, i, o, l) { this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = s, this.outlet = i, this.component = o, this._futureSnapshot = l } get routeConfig() { return this._futureSnapshot.routeConfig } get root() { return this._routerState.root } get parent() { return this._routerState.parent(this) } get firstChild() { return this._routerState.firstChild(this) } get children() { return this._routerState.children(this) } get pathFromRoot() { return this._routerState.pathFromRoot(this) } get paramMap() { return this._paramMap || (this._paramMap = this.params.pipe($(t => Yc(t)))), this._paramMap } get queryParamMap() { return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe($(t => Yc(t)))), this._queryParamMap } toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})` } }

  function Fh(t, e = "emptyOnly") { const n = t.pathFromRoot; let r = 0; if ("always" !== e)
      for (r = n.length - 1; r >= 1;) { const t = n[r],
          e = n[r - 1]; if (t.routeConfig && "" === t.routeConfig.path) r--;
        else { if (e.component) break;
          r-- } }
    return function(t) { return t.reduce((t, e) => ({ params: Object.assign({}, t.params, e.params), data: Object.assign({}, t.data, e.data), resolve: Object.assign({}, t.resolve, e._resolvedData) }), { params: {}, data: {}, resolve: {} }) }(n.slice(r)) } class Hh { constructor(t, e, n, r, s, i, o, l, a, u, c) { this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = s, this.outlet = i, this.component = o, this.routeConfig = l, this._urlSegment = a, this._lastPathIndex = u, this._resolve = c } get root() { return this._routerState.root } get parent() { return this._routerState.parent(this) } get firstChild() { return this._routerState.firstChild(this) } get children() { return this._routerState.children(this) } get pathFromRoot() { return this._routerState.pathFromRoot(this) } get paramMap() { return this._paramMap || (this._paramMap = Yc(this.params)), this._paramMap } get queryParamMap() { return this._queryParamMap || (this._queryParamMap = Yc(this.queryParams)), this._queryParamMap } toString() { return `Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')` } } class $h extends Ah { constructor(t, e) { super(e), this.url = t, zh(this, e) } toString() { return Bh(this._root) } }

  function zh(t, e) { e.value._routerState = t, e.children.forEach(e => zh(t, e)) }

  function Bh(t) { const e = t.children.length > 0 ? ` { ${t.children.map(Bh).join(", ")} } ` : ""; return `${t.value}${e}` }

  function Gh(t) { if (t.snapshot) { const e = t.snapshot,
        n = t._futureSnapshot;
      t.snapshot = n, oh(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), oh(e.params, n.params) || t.params.next(n.params),
        function(t, e) { if (t.length !== e.length) return !1; for (let n = 0; n < t.length; ++n)
            if (!oh(t[n], e[n])) return !1; return !0 }(e.url, n.url) || t.url.next(n.url), oh(e.data, n.data) || t.data.next(n.data) } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data) }

  function Zh(t, e) { var n, r; return oh(t.params, e.params) && gh(n = t.url, r = e.url) && n.every((t, e) => oh(t.parameters, r[e].parameters)) && !(!t.parent != !e.parent) && (!t.parent || Zh(t.parent, e.parent)) }

  function qh(t) { return "object" == typeof t && null != t && !t.outlets && !t.segmentPath }

  function Wh(t, e, n, r, s) { let i = {}; return r && uh(r, (t, e) => { i[e] = Array.isArray(t) ? t.map(t => `${t}`) : `${t}` }), new dh(n.root === t ? e : function t(e, n, r) { const s = {}; return uh(e.children, (e, i) => { s[i] = e === n ? r : t(e, n, r) }), new ph(e.segments, s) }(n.root, t, e), i, s) } class Qh { constructor(t, e, n) { if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && qh(n[0])) throw new Error("Root segment cannot have matrix parameters"); const r = n.find(t => "object" == typeof t && null != t && t.outlets); if (r && r !== ah(n)) throw new Error("{outlets:{}} has to be the last command") } toRoot() { return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0] } } class Kh { constructor(t, e, n) { this.segmentGroup = t, this.processChildren = e, this.index = n } }

  function Yh(t) { return "object" == typeof t && null != t && t.outlets ? t.outlets[Qc] : `${t}` }

  function Jh(t, e, n) { if (t || (t = new ph([], {})), 0 === t.segments.length && t.hasChildren()) return Xh(t, e, n); const r = function(t, e, n) { let r = 0,
          s = e; const i = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; s < t.segments.length;) { if (r >= n.length) return i; const e = t.segments[s],
            o = Yh(n[r]),
            l = r < n.length - 1 ? n[r + 1] : null; if (s > 0 && void 0 === o) break; if (o && l && "object" == typeof l && void 0 === l.outlets) { if (!rd(o, l, e)) return i;
            r += 2 } else { if (!rd(o, {}, e)) return i;
            r++ } s++ } return { match: !0, pathIndex: s, commandIndex: r } }(t, e, n),
      s = n.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) { const e = new ph(t.segments.slice(0, r.pathIndex), {}); return e.children[Qc] = new ph(t.segments.slice(r.pathIndex), t.children), Xh(e, 0, s) } return r.match && 0 === s.length ? new ph(t.segments, {}) : r.match && !t.hasChildren() ? td(t, e, n) : r.match ? Xh(t, 0, s) : td(t, e, n) }

  function Xh(t, e, n) { if (0 === n.length) return new ph(t.segments, {}); { const r = function(t) { return "object" != typeof t[0] ? {
            [Qc]: t } : void 0 === t[0].outlets ? {
            [Qc]: t } : t[0].outlets }(n),
        s = {}; return uh(r, (n, r) => { null !== n && (s[r] = Jh(t.children[r], e, n)) }), uh(t.children, (t, e) => { void 0 === r[e] && (s[e] = t) }), new ph(t.segments, s) } }

  function td(t, e, n) { const r = t.segments.slice(0, e); let s = 0; for (; s < n.length;) { if ("object" == typeof n[s] && void 0 !== n[s].outlets) { const t = ed(n[s].outlets); return new ph(r, t) } if (0 === s && qh(n[0])) { r.push(new fh(t.segments[e].path, n[0])), s++; continue } const i = Yh(n[s]),
        o = s < n.length - 1 ? n[s + 1] : null;
      i && o && qh(o) ? (r.push(new fh(i, nd(o))), s += 2) : (r.push(new fh(i, {})), s++) } return new ph(r, {}) }

  function ed(t) { const e = {}; return uh(t, (t, n) => { null !== t && (e[n] = td(new ph([], {}), 0, t)) }), e }

  function nd(t) { const e = {}; return uh(t, (t, n) => e[n] = `${t}`), e }

  function rd(t, e, n) { return t == n.path && oh(e, n.parameters) }
  const sd = (t, e, n) => $(r => (new id(e, r.targetRouterState, r.currentRouterState, n).activate(t), r)); class id { constructor(t, e, n, r) { this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = r } activate(t) { const e = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, n, t), Gh(this.futureState.root), this.activateChildRoutes(e, n, t) } deactivateChildRoutes(t, e, n) { const r = Vh(e);
      t.children.forEach(t => { const e = t.value.outlet;
        this.deactivateRoutes(t, r[e], n), delete r[e] }), uh(r, (t, e) => { this.deactivateRouteAndItsChildren(t, n) }) } deactivateRoutes(t, e, n) { const r = t.value,
        s = e ? e.value : null; if (r === s)
        if (r.component) { const s = n.getContext(r.outlet);
          s && this.deactivateChildRoutes(t, e, s.children) } else this.deactivateChildRoutes(t, e, n);
      else s && this.deactivateRouteAndItsChildren(e, n) } deactivateRouteAndItsChildren(t, e) { this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e) } detachAndStoreRouteSubtree(t, e) { const n = e.getContext(t.value.outlet); if (n && n.outlet) { const e = n.outlet.detach(),
          r = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, { componentRef: e, route: t, contexts: r }) } } deactivateRouteAndOutlet(t, e) { const n = e.getContext(t.value.outlet); if (n) { const r = Vh(t),
          s = t.value.component ? n.children : e;
        uh(r, (t, e) => this.deactivateRouteAndItsChildren(t, s)), n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()) } } activateChildRoutes(t, e, n) { const r = Vh(e);
      t.children.forEach(t => { this.activateRoutes(t, r[t.value.outlet], n), this.forwardEvent(new Zc(t.value.snapshot)) }), t.children.length && this.forwardEvent(new Bc(t.value.snapshot)) } activateRoutes(t, e, n) { const r = t.value,
        s = e ? e.value : null; if (Gh(r), r === s)
        if (r.component) { const s = n.getOrCreateContext(r.outlet);
          this.activateChildRoutes(t, e, s.children) } else this.activateChildRoutes(t, e, n);
      else if (r.component) { const e = n.getOrCreateContext(r.outlet); if (this.routeReuseStrategy.shouldAttach(r.snapshot)) { const t = this.routeReuseStrategy.retrieve(r.snapshot);
          this.routeReuseStrategy.store(r.snapshot, null), e.children.onOutletReAttached(t.contexts), e.attachRef = t.componentRef, e.route = t.route.value, e.outlet && e.outlet.attach(t.componentRef, t.route.value), od(t.route) } else { const n = function(t) { for (let e = t.parent; e; e = e.parent) { const t = e.routeConfig; if (t && t._loadedConfig) return t._loadedConfig; if (t && t.component) return null } return null }(r.snapshot),
            s = n ? n.module.componentFactoryResolver : null;
          e.attachRef = null, e.route = r, e.resolver = s, e.outlet && e.outlet.activateWith(r, s), this.activateChildRoutes(t, null, e.children) } } else this.activateChildRoutes(t, null, n) } }

  function od(t) { Gh(t.value), t.children.forEach(od) }

  function ld(t) { return "function" == typeof t }

  function ad(t) { return t instanceof dh } class ud { constructor(t) { this.segmentGroup = t || null } } class cd { constructor(t) { this.urlTree = t } }

  function hd(t) { return new w(e => e.error(new ud(t))) }

  function dd(t) { return new w(e => e.error(new cd(t))) }

  function pd(t) { return new w(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`))) } class fd { constructor(t, e, n, r, s) { this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = s, this.allowRedirects = !0, this.ngModule = t.get(Ht) } apply() { return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Qc).pipe($(t => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment))).pipe(Ja(t => { if (t instanceof cd) return this.allowRedirects = !1, this.match(t.urlTree); if (t instanceof ud) throw this.noMatchError(t); throw t })) } match(t) { return this.expandSegmentGroup(this.ngModule, this.config, t.root, Qc).pipe($(e => this.createUrlTree(e, t.queryParams, t.fragment))).pipe(Ja(t => { if (t instanceof ud) throw this.noMatchError(t); throw t })) } noMatchError(t) { return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`) } createUrlTree(t, e, n) { const r = t.segments.length > 0 ? new ph([], {
        [Qc]: t }) : t; return new dh(r, e, n) } expandSegmentGroup(t, e, n, r) { return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe($(t => new ph([], t))) : this.expandSegment(t, n, e, n.segments, r, !0) } expandChildren(t, e, n) { return function(t, e) { if (0 === Object.keys(t).length) return Ea({}); const n = [],
          r = [],
          s = {}; return uh(t, (t, i) => { const o = e(i, t).pipe($(t => s[i] = t));
          i === Qc ? n.push(o) : r.push(o) }), Ea.apply(null, n.concat(r)).pipe(Na(), Ya(), $(() => s)) }(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n)) } expandSegment(t, e, n, r, s, i) { return Ea(...n).pipe($(o => this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(Ja(t => { if (t instanceof ud) return Ea(null); throw t }))), Na(), su(t => !!t), Ja((t, n) => { if (t instanceof Ma || "EmptyError" === t.name) { if (this.noLeftoversInUrl(e, r, s)) return Ea(new ph([], {})); throw new ud(e) } throw t })) } noLeftoversInUrl(t, e, n) { return 0 === e.length && !t.children[n] } expandSegmentAgainstRoute(t, e, n, r, s, i, o) { return yd(r) !== i ? hd(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, s) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) : hd(e) } expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) { return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) } expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) { const s = this.applyRedirectCommands([], n.redirectTo, {}); return n.redirectTo.startsWith("/") ? dd(s) : this.lineralizeSegments(n, s).pipe(q(n => { const s = new ph(n, {}); return this.expandSegment(t, s, e, n, r, !1) })) } expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) { const { matched: o, consumedSegments: l, lastChild: a, positionalParamSegments: u } = gd(e, r, s); if (!o) return hd(e); const c = this.applyRedirectCommands(l, r.redirectTo, u); return r.redirectTo.startsWith("/") ? dd(c) : this.lineralizeSegments(r, c).pipe(q(r => this.expandSegment(t, e, n, r.concat(s.slice(a)), i, !1))) } matchSegmentAgainstRoute(t, e, n, r) { if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe($(t => (n._loadedConfig = t, new ph(r, {})))) : Ea(new ph(r, {})); const { matched: s, consumedSegments: i, lastChild: o } = gd(e, n, r); if (!s) return hd(e); const l = r.slice(o); return this.getChildConfig(t, n, r).pipe(q(t => { const n = t.module,
          r = t.routes,
          { segmentGroup: s, slicedSegments: o } = function(t, e, n, r) { return n.length > 0 && function(t, e, n) { return n.some(n => _d(t, e, n) && yd(n) !== Qc) }(t, n, r) ? { segmentGroup: md(new ph(e, function(t, e) { const n = {};
                n[Qc] = e; for (const r of t) "" === r.path && yd(r) !== Qc && (n[yd(r)] = new ph([], {})); return n }(r, new ph(n, t.children)))), slicedSegments: [] } : 0 === n.length && function(t, e, n) { return n.some(n => _d(t, e, n)) }(t, n, r) ? { segmentGroup: md(new ph(t.segments, function(t, e, n, r) { const s = {}; for (const i of n) _d(t, e, i) && !r[yd(i)] && (s[yd(i)] = new ph([], {})); return Object.assign({}, r, s) }(t, n, r, t.children))), slicedSegments: n } : { segmentGroup: t, slicedSegments: n } }(e, i, l, r); return 0 === o.length && s.hasChildren() ? this.expandChildren(n, r, s).pipe($(t => new ph(i, t))) : 0 === r.length && 0 === o.length ? Ea(new ph(i, {})) : this.expandSegment(n, s, r, o, Qc, !0).pipe($(t => new ph(i.concat(t.segments), t.children))) })) } getChildConfig(t, e, n) { return e.children ? Ea(new eh(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Ea(e._loadedConfig) : function(t, e, n) { const r = e.canLoad; return r && 0 !== r.length ? Z(r).pipe($(r => { const s = t.get(r); let i; if (function(t) { return t && ld(t.canLoad) }(s)) i = s.canLoad(e, n);
          else { if (!ld(s)) throw new Error("Invalid CanLoad guard");
            i = s(e, n) } return ch(i) })).pipe(Na(), (s = t => !0 === t, t => t.lift(new iu(s, void 0, t)))) : Ea(!0); var s }(t.injector, e, n).pipe(q(n => n ? this.configLoader.load(t.injector, e).pipe($(t => (e._loadedConfig = t, t))) : function(t) { return new w(e => e.error(Xc(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`))) }(e))) : Ea(new eh([], t)) } lineralizeSegments(t, e) { let n = [],
        r = e.root; for (;;) { if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Ea(n); if (r.numberOfChildren > 1 || !r.children[Qc]) return pd(t.redirectTo);
        r = r.children[Qc] } } applyRedirectCommands(t, e, n) { return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n) } applyRedirectCreatreUrlTree(t, e, n, r) { const s = this.createSegmentGroup(t, e.root, n, r); return new dh(s, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment) } createQueryParams(t, e) { const n = {}; return uh(t, (t, r) => { if ("string" == typeof t && t.startsWith(":")) { const s = t.substring(1);
          n[r] = e[s] } else n[r] = t }), n } createSegmentGroup(t, e, n, r) { const s = this.createSegments(t, e.segments, n, r); let i = {}; return uh(e.children, (e, s) => { i[s] = this.createSegmentGroup(t, e, n, r) }), new ph(s, i) } createSegments(t, e, n, r) { return e.map(e => e.path.startsWith(":") ? this.findPosParam(t, e, r) : this.findOrReturn(e, n)) } findPosParam(t, e, n) { const r = n[e.path.substring(1)]; if (!r) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`); return r } findOrReturn(t, e) { let n = 0; for (const r of e) { if (r.path === t.path) return e.splice(n), r;
        n++ } return t } }

  function gd(t, e, n) { if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }; const r = (e.matcher || th)(n, t, e); return r ? { matched: !0, consumedSegments: r.consumed, lastChild: r.consumed.length, positionalParamSegments: r.posParams } : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } }

  function md(t) { if (1 === t.numberOfChildren && t.children[Qc]) { const e = t.children[Qc]; return new ph(t.segments.concat(e.segments), e.children) } return t }

  function _d(t, e, n) { return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo }

  function yd(t) { return t.outlet || Qc } class vd { constructor(t) { this.path = t, this.route = this.path[this.path.length - 1] } } class bd { constructor(t, e) { this.component = t, this.route = e } }

  function wd(t, e, n) { const r = t._root; return function t(e, n, r, s, i = { canDeactivateChecks: [], canActivateChecks: [] }) { const o = Vh(n); return e.children.forEach(e => {! function(e, n, r, s, i = { canDeactivateChecks: [], canActivateChecks: [] }) { const o = e.value,
            l = n ? n.value : null,
            a = r ? r.getContext(e.value.outlet) : null; if (l && o.routeConfig === l.routeConfig) { const u = function(t, e, n) { if ("function" == typeof n) return n(t, e); switch (n) {
                case "pathParamsChange":
                  return !gh(t.url, e.url);
                case "pathParamsOrQueryParamsChange":
                  return !gh(t.url, e.url) || !oh(t.queryParams, e.queryParams);
                case "always":
                  return !0;
                case "paramsOrQueryParamsChange":
                  return !Zh(t, e) || !oh(t.queryParams, e.queryParams);
                case "paramsChange":
                default:
                  return !Zh(t, e) } }(l, o, o.routeConfig.runGuardsAndResolvers);
            u ? i.canActivateChecks.push(new vd(s)) : (o.data = l.data, o._resolvedData = l._resolvedData), t(e, n, o.component ? a ? a.children : null : r, s, i), u && i.canDeactivateChecks.push(new bd(a && a.outlet && a.outlet.component || null, l)) } else l && xd(n, a, i), i.canActivateChecks.push(new vd(s)), t(e, null, o.component ? a ? a.children : null : r, s, i) }(e, o[e.value.outlet], r, s.concat([e.value]), i), delete o[e.value.outlet] }), uh(o, (t, e) => xd(t, r.getContext(e), i)), i }(r, e ? e._root : null, n, [r.value]) }

  function Cd(t, e, n) { const r = function(t) { if (!t) return null; for (let e = t.parent; e; e = e.parent) { const t = e.routeConfig; if (t && t._loadedConfig) return t._loadedConfig } return null }(e); return (r ? r.module.injector : n).get(t) }

  function xd(t, e, n) { const r = Vh(t),
      s = t.value;
    uh(r, (t, r) => { xd(t, s.component ? e ? e.children.getContext(r) : null : e, n) }), n.canDeactivateChecks.push(new bd(s.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, s)) }
  const kd = Symbol("INITIAL_VALUE");

  function Sd() { return lu(t => (function(...t) { let e = null,
        n = null; return M(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (e = t.pop()), 1 === t.length && a(t[0]) && (t = t[0]), G(t, n).lift(new Oa(e)) })(...t.map(t => t.pipe(eu(1), function(...t) { return e => { let n = t[t.length - 1];
        M(n) ? t.pop() : n = null; const r = t.length; return function(...t) { return Na()(Ea(...t)) }(1 !== r || n ? r > 0 ? G(t, n) : ka(n) : Sa(t[0]), e) } }(kd)))).pipe(cu((t, e) => { let n = !1; return e.reduce((t, r, s) => { if (t !== kd) return t; if (r === kd && (n = !0), !n) { if (!1 === r) return r; if (s === e.length - 1 || ad(r)) return r } return t }, t) }, kd), Ra(t => t !== kd), $(t => ad(t) ? t : !0 === t), eu(1))) }

  function Ed(t, e) { return null !== t && e && e(new Gc(t)), Ea(!0) }

  function Td(t, e) { return null !== t && e && e(new zc(t)), Ea(!0) }

  function Id(t, e, n) { const r = e.routeConfig ? e.routeConfig.canActivate : null; return r && 0 !== r.length ? Ea(r.map(r => Da(() => { const s = Cd(r, e, n); let i; if (function(t) { return t && ld(t.canActivate) }(s)) i = ch(s.canActivate(e, t));
      else { if (!ld(s)) throw new Error("Invalid CanActivate guard");
        i = ch(s(e, t)) } return i.pipe(su()) }))).pipe(Sd()) : Ea(!0) }

  function Md(t, e, n) { const r = e[e.length - 1],
      s = e.slice(0, e.length - 1).reverse().map(t => (function(t) { const e = t.routeConfig ? t.routeConfig.canActivateChild : null; return e && 0 !== e.length ? { node: t, guards: e } : null })(t)).filter(t => null !== t).map(e => Da(() => Ea(e.guards.map(s => { const i = Cd(s, e.node, n); let o; if (function(t) { return t && ld(t.canActivateChild) }(i)) o = ch(i.canActivateChild(r, t));
        else { if (!ld(i)) throw new Error("Invalid CanActivateChild guard");
          o = ch(i(r, t)) } return o.pipe(su()) })).pipe(Sd()))); return Ea(s).pipe(Sd()) } class Pd {} class Od { constructor(t, e, n, r, s, i) { this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = s, this.relativeLinkResolution = i } recognize() { try { const t = Nd(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
          e = this.processSegmentGroup(this.config, t, Qc),
          n = new Hh([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, Qc, this.rootComponentType, null, this.urlTree.root, -1, {}),
          r = new Rh(n, e),
          s = new $h(this.url, r); return this.inheritParamsAndData(s._root), Ea(s) } catch (t) { return new w(e => e.error(t)) } } inheritParamsAndData(t) { const e = t.value,
        n = Fh(e, this.paramsInheritanceStrategy);
      e.params = Object.freeze(n.params), e.data = Object.freeze(n.data), t.children.forEach(t => this.inheritParamsAndData(t)) } processSegmentGroup(t, e, n) { return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n) } processChildren(t, e) { const n = mh(e, (e, n) => this.processSegmentGroup(t, e, n)); return function(t) { const e = {};
        t.forEach(t => { const n = e[t.value.outlet]; if (n) { const e = n.url.map(t => t.toString()).join("/"),
              r = t.value.url.map(t => t.toString()).join("/"); throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${r}'.`) } e[t.value.outlet] = t.value }) }(n), n.sort((t, e) => t.value.outlet === Qc ? -1 : e.value.outlet === Qc ? 1 : t.value.outlet.localeCompare(e.value.outlet)), n } processSegment(t, e, n, r) { for (const i of t) try { return this.processSegmentAgainstRoute(i, e, n, r) } catch (s) { if (!(s instanceof Pd)) throw s }
      if (this.noLeftoversInUrl(e, n, r)) return []; throw new Pd } noLeftoversInUrl(t, e, n) { return 0 === e.length && !t.children[n] } processSegmentAgainstRoute(t, e, n, r) { if (t.redirectTo) throw new Pd; if ((t.outlet || Qc) !== r) throw new Pd; let s, i = [],
        o = []; if ("**" === t.path) { const i = n.length > 0 ? ah(n).parameters : {};
        s = new Hh(n, i, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Ld(t), r, t.component, t, Ad(e), Dd(e) + n.length, Ud(t)) } else { const l = function(t, e, n) { if ("" === e.path) { if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new Pd; return { consumedSegments: [], lastChild: 0, parameters: {} } } const r = (e.matcher || th)(n, t, e); if (!r) throw new Pd; const s = {};
          uh(r.posParams, (t, e) => { s[e] = t.path }); const i = r.consumed.length > 0 ? Object.assign({}, s, r.consumed[r.consumed.length - 1].parameters) : s; return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: i } }(e, t, n);
        i = l.consumedSegments, o = n.slice(l.lastChild), s = new Hh(i, l.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Ld(t), r, t.component, t, Ad(e), Dd(e) + i.length, Ud(t)) } const l = function(t) { return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [] }(t),
        { segmentGroup: a, slicedSegments: u } = Nd(e, i, o, l, this.relativeLinkResolution); if (0 === u.length && a.hasChildren()) { const t = this.processChildren(l, a); return [new Rh(s, t)] } if (0 === l.length && 0 === u.length) return [new Rh(s, [])]; const c = this.processSegment(l, a, u, Qc); return [new Rh(s, c)] } }

  function Ad(t) { let e = t; for (; e._sourceSegment;) e = e._sourceSegment; return e }

  function Dd(t) { let e = t,
      n = e._segmentIndexShift ? e._segmentIndexShift : 0; for (; e._sourceSegment;) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0; return n - 1 }

  function Nd(t, e, n, r, s) { if (n.length > 0 && function(t, e, n) { return n.some(n => Rd(t, e, n) && Vd(n) !== Qc) }(t, n, r)) { const s = new ph(e, function(t, e, n, r) { const s = {};
        s[Qc] = r, r._sourceSegment = t, r._segmentIndexShift = e.length; for (const i of n)
          if ("" === i.path && Vd(i) !== Qc) { const n = new ph([], {});
            n._sourceSegment = t, n._segmentIndexShift = e.length, s[Vd(i)] = n } return s }(t, e, r, new ph(n, t.children))); return s._sourceSegment = t, s._segmentIndexShift = e.length, { segmentGroup: s, slicedSegments: [] } } if (0 === n.length && function(t, e, n) { return n.some(n => Rd(t, e, n)) }(t, n, r)) { const i = new ph(t.segments, function(t, e, n, r, s, i) { const o = {}; for (const l of r)
          if (Rd(t, n, l) && !s[Vd(l)]) { const n = new ph([], {});
            n._sourceSegment = t, n._segmentIndexShift = "legacy" === i ? t.segments.length : e.length, o[Vd(l)] = n } return Object.assign({}, s, o) }(t, e, n, r, t.children, s)); return i._sourceSegment = t, i._segmentIndexShift = e.length, { segmentGroup: i, slicedSegments: n } } const i = new ph(t.segments, t.children); return i._sourceSegment = t, i._segmentIndexShift = e.length, { segmentGroup: i, slicedSegments: n } }

  function Rd(t, e, n) { return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo }

  function Vd(t) { return t.outlet || Qc }

  function Ld(t) { return t.data || {} }

  function Ud(t) { return t.resolve || {} }

  function jd(t, e, n, r) { const s = Cd(t, e, r); return ch(s.resolve ? s.resolve(e, n) : s(e, n)) }

  function Fd(t) { return function(e) { return e.pipe(lu(e => { const n = t(e); return n ? Z(n).pipe($(() => e)) : Z([e]) })) } } class Hd {} class $d { shouldDetach(t) { return !1 } store(t, e) {} shouldAttach(t) { return !1 } retrieve(t) { return null } shouldReuseRoute(t, e) { return t.routeConfig === e.routeConfig } }
  const zd = new St("ROUTES"); class Bd { constructor(t, e, n, r) { this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r } load(t, e) { return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe($(n => { this.onLoadEndListener && this.onLoadEndListener(e); const r = n.create(t); return new eh(lh(r.injector.get(zd)).map(ih), r) })) } loadModuleFactory(t) { return "string" == typeof t ? Z(this.loader.load(t)) : ch(t()).pipe(q(t => t instanceof $t ? Ea(t) : Z(this.compiler.compileModuleAsync(t)))) } } class Gd {} class Zd { shouldProcessUrl(t) { return !0 } extract(t) { return t } merge(t, e) { return t } }

  function qd(t) { throw t }

  function Wd(t, e, n) { return e.parse("/") }

  function Qd(t, e) { return Ea(null) } class Kd { constructor(t, e, n, r, s, i, o, l) { this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = l, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new T, this.errorHandler = qd, this.malformedUriErrorHandler = Wd, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = { beforePreactivation: Qd, afterPreactivation: Qd }, this.urlHandlingStrategy = new Zd, this.routeReuseStrategy = new $d, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = s.get(Ht), this.console = s.get(qs); const a = s.get(di);
      this.isNgZoneEnabled = a instanceof di, this.resetConfig(l), this.currentUrlTree = new dh(new ph([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Bd(i, o, t => this.triggerEvent(new Hc(t)), t => this.triggerEvent(new $c(t))), this.routerState = Uh(this.currentUrlTree, this.rootComponentType), this.transitions = new Ta({ id: 0, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree), urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree), rawUrl: this.currentUrlTree, extras: {}, resolve: null, reject: null, promise: Promise.resolve(!0), source: "imperative", restoredState: null, currentSnapshot: this.routerState.snapshot, targetSnapshot: null, currentRouterState: this.routerState, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations() } setupNavigations(t) { const e = this.events; return t.pipe(Ra(t => 0 !== t.id), $(t => Object.assign({}, t, { extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl) })), lu(t => { let n = !1,
          r = !1; return Ea(t).pipe(za(t => { this.currentNavigation = { id: t.id, initialUrl: t.currentRawUrl, extractedUrl: t.extractedUrl, trigger: t.source, extras: t.extras, previousNavigation: this.lastSuccessfulNavigation ? Object.assign({}, this.lastSuccessfulNavigation, { previousNavigation: null }) : null } }), lu(t => { const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString(); if (("reload" === this.onSameUrlNavigation || n) && this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return Ea(t).pipe(lu(t => { const n = this.transitions.getValue(); return e.next(new Ac(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)), n !== this.transitions.getValue() ? xa : [t] }), lu(t => Promise.resolve(t)), function(t, e, n, r) { return function(s) { return s.pipe(lu(s => (function(t, e, n, r, s) { return new fd(t, e, n, r, s).apply() })(t, e, n, s.extractedUrl, r).pipe($(t => Object.assign({}, s, { urlAfterRedirects: t }))))) } }(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config), za(t => { this.currentNavigation = Object.assign({}, this.currentNavigation, { finalUrl: t.urlAfterRedirects }) }), function(t, e, n, r, s) { return function(i) { return i.pipe(q(i => (function(t, e, n, r, s = "emptyOnly", i = "legacy") { return new Od(t, e, n, r, s, i).recognize() })(t, e, i.urlAfterRedirects, n(i.urlAfterRedirects), r, s).pipe($(t => Object.assign({}, i, { targetSnapshot: t }))))) } }(this.rootComponentType, this.config, t => this.serializeUrl(t), this.paramsInheritanceStrategy, this.relativeLinkResolution), za(t => { "eager" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects) }), za(t => { const n = new Vc(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
            e.next(n) })); if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) { const { id: n, extractedUrl: r, source: s, restoredState: i, extras: o } = t, l = new Ac(n, this.serializeUrl(r), s, i);
            e.next(l); const a = Uh(r, this.rootComponentType).snapshot; return Ea(Object.assign({}, t, { targetSnapshot: a, urlAfterRedirects: r, extras: Object.assign({}, o, { skipLocationChange: !1, replaceUrl: !1 }) })) } return this.rawUrlTree = t.rawUrl, this.browserUrlTree = t.urlAfterRedirects, t.resolve(null), xa }), Fd(t => { const { targetSnapshot: e, id: n, extractedUrl: r, rawUrl: s, extras: { skipLocationChange: i, replaceUrl: o } } = t; return this.hooks.beforePreactivation(e, { navigationId: n, appliedUrlTree: r, rawUrlTree: s, skipLocationChange: !!i, replaceUrl: !!o }) }), za(t => { const e = new Lc(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
          this.triggerEvent(e) }), $(t => Object.assign({}, t, { guards: wd(t.targetSnapshot, t.currentSnapshot, this.rootContexts) })), function(t, e) { return function(n) { return n.pipe(q(n => { const { targetSnapshot: r, currentSnapshot: s, guards: { canActivateChecks: i, canDeactivateChecks: o } } = n; return 0 === o.length && 0 === i.length ? Ea(Object.assign({}, n, { guardsResult: !0 })) : function(t, e, n, r) { return Z(t).pipe(q(t => (function(t, e, n, r, s) { const i = e && e.routeConfig ? e.routeConfig.canDeactivate : null; return i && 0 !== i.length ? Ea(i.map(i => { const o = Cd(i, e, s); let l; if (function(t) { return t && ld(t.canDeactivate) }(o)) l = ch(o.canDeactivate(t, e, n, r));
                    else { if (!ld(o)) throw new Error("Invalid CanDeactivate guard");
                      l = ch(o(t, e, n, r)) } return l.pipe(su()) })).pipe(Sd()) : Ea(!0) })(t.component, t.route, n, e, r)), su(t => !0 !== t, !0)) }(o, r, s, t).pipe(q(n => n && function(t) { return "boolean" == typeof t }(n) ? function(t, e, n, r) { return Z(e).pipe(pu(e => Z([Td(e.route.parent, r), Ed(e.route, r), Md(t, e.path, n), Id(t, e.route, n)]).pipe(Na(), su(t => !0 !== t, !0))), su(t => !0 !== t, !0)) }(r, i, t, e) : Ea(n)), $(t => Object.assign({}, n, { guardsResult: t }))) })) } }(this.ngModule.injector, t => this.triggerEvent(t)), za(t => { if (ad(t.guardsResult)) { const e = Xc(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`); throw e.url = t.guardsResult, e } }), za(t => { const e = new Uc(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
          this.triggerEvent(e) }), Ra(t => { if (!t.guardsResult) { this.resetUrlToCurrentUrlTree(); const n = new Nc(t.id, this.serializeUrl(t.extractedUrl), ""); return e.next(n), t.resolve(!1), !1 } return !0 }), Fd(t => { if (t.guards.canActivateChecks.length) return Ea(t).pipe(za(t => { const e = new jc(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
            this.triggerEvent(e) }), function(t, e) { return function(n) { return n.pipe(q(n => { const { targetSnapshot: r, guards: { canActivateChecks: s } } = n; return s.length ? Z(s).pipe(pu(n => (function(t, e, n, r) { return function(t, e, n, r) { const s = Object.keys(t); if (0 === s.length) return Ea({}); if (1 === s.length) { const i = s[0]; return jd(t[i], e, n, r).pipe($(t => ({
                        [i]: t }))) } const i = {}; return Z(s).pipe(q(s => jd(t[s], e, n, r).pipe($(t => (i[s] = t, t))))).pipe(Ya(), $(() => i)) }(t._resolve, t, e, r).pipe($(e => (t._resolvedData = e, t.data = Object.assign({}, t.data, Fh(t, n).resolve), null))) })(n.route, r, t, e)), function(t, e) { return arguments.length >= 2 ? function(n) { return v(cu(t, e), Fa(1), Wa(e))(n) } : function(e) { return v(cu((e, n, r) => t(e, n, r + 1)), Fa(1))(e) } }((t, e) => t), $(t => n)) : Ea(n) })) } }(this.paramsInheritanceStrategy, this.ngModule.injector), za(t => { const e = new Fc(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
            this.triggerEvent(e) })) }), Fd(t => { const { targetSnapshot: e, id: n, extractedUrl: r, rawUrl: s, extras: { skipLocationChange: i, replaceUrl: o } } = t; return this.hooks.afterPreactivation(e, { navigationId: n, appliedUrlTree: r, rawUrlTree: s, skipLocationChange: !!i, replaceUrl: !!o }) }), $(t => { const e = function(t, e, n) { const r = function t(e, n, r) { if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) { const s = r.value;
                s._futureSnapshot = n.value; const i = function(e, n, r) { return n.children.map(n => { for (const s of r.children)
                      if (e.shouldReuseRoute(s.value.snapshot, n.value)) return t(e, n, s); return t(e, n) }) }(e, n, r); return new Rh(s, i) } { const r = e.retrieve(n.value); if (r) { const t = r.route; return function t(e, n) { if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route"); if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                    n.value._futureSnapshot = e.value; for (let r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r]) }(n, t), t } { const r = new jh(new Ta((s = n.value).url), new Ta(s.params), new Ta(s.queryParams), new Ta(s.fragment), new Ta(s.data), s.outlet, s.component, s),
                    i = n.children.map(n => t(e, n)); return new Rh(r, i) } } var s }(t, e._root, n ? n._root : void 0); return new Lh(r, e) }(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState); return Object.assign({}, t, { targetRouterState: e }) }), za(t => { this.currentUrlTree = t.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl), this.routerState = t.targetRouterState, "deferred" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects) }), sd(this.rootContexts, this.routeReuseStrategy, t => this.triggerEvent(t)), za({ next() { n = !0 }, complete() { n = !0 } }), function(t) { return e => e.lift(new fu(t)) }(() => { if (!n && !r) { this.resetUrlToCurrentUrlTree(); const n = new Nc(t.id, this.serializeUrl(t.extractedUrl), `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);
            e.next(n), t.resolve(!1) } this.currentNavigation = null }), Ja(n => { if (r = !0, function(t) { return t && t[Jc] }(n)) { const r = ad(n.url);
            r || (this.navigated = !0, this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl)); const s = new Nc(t.id, this.serializeUrl(t.extractedUrl), n.message);
            e.next(s), t.resolve(!1), r && this.navigateByUrl(n.url) } else { this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl); const r = new Rc(t.id, this.serializeUrl(t.extractedUrl), n);
            e.next(r); try { t.resolve(this.errorHandler(n)) } catch (s) { t.reject(s) } } return xa })) })) } resetRootComponentType(t) { this.rootComponentType = t, this.routerState.root.component = this.rootComponentType } getTransition() { const t = this.transitions.value; return t.urlAfterRedirects = this.browserUrlTree, t } setTransition(t) { this.transitions.next(Object.assign({}, this.getTransition(), t)) } initialNavigation() { this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 }) } setUpLocationChangeListener() { this.locationSubscription || (this.locationSubscription = this.location.subscribe(t => { let e = this.parseUrl(t.url); const n = "popstate" === t.type ? "popstate" : "hashchange",
          r = t.state && t.state.navigationId ? t.state : null;
        setTimeout(() => { this.scheduleNavigation(e, n, r, { replaceUrl: !0 }) }, 0) })) } get url() { return this.serializeUrl(this.currentUrlTree) } getCurrentNavigation() { return this.currentNavigation } triggerEvent(t) { this.events.next(t) } resetConfig(t) { nh(t), this.config = t.map(ih), this.navigated = !1, this.lastSuccessfulId = -1 } ngOnDestroy() { this.dispose() } dispose() { this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null) } createUrlTree(t, e = {}) { const { relativeTo: n, queryParams: r, fragment: s, preserveQueryParams: i, queryParamsHandling: o, preserveFragment: l } = e;
      ne() && i && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."); const a = n || this.routerState.root,
        u = l ? this.currentUrlTree.fragment : s; let c = null; if (o) switch (o) {
        case "merge":
          c = Object.assign({}, this.currentUrlTree.queryParams, r); break;
        case "preserve":
          c = this.currentUrlTree.queryParams; break;
        default:
          c = r || null } else c = i ? this.currentUrlTree.queryParams : r || null; return null !== c && (c = this.removeEmptyProps(c)),
        function(t, e, n, r, s) { if (0 === n.length) return Wh(e.root, e.root, e, r, s); const i = function(t) { if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new Qh(!0, 0, t); let e = 0,
              n = !1; const r = t.reduce((t, r, s) => { if ("object" == typeof r && null != r) { if (r.outlets) { const e = {}; return uh(r.outlets, (t, n) => { e[n] = "string" == typeof t ? t.split("/") : t }), [...t, { outlets: e }] } if (r.segmentPath) return [...t, r.segmentPath] } return "string" != typeof r ? [...t, r] : 0 === s ? (r.split("/").forEach((r, s) => { 0 == s && "." === r || (0 == s && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r)) }), t) : [...t, r] }, []); return new Qh(n, e, r) }(n); if (i.toRoot()) return Wh(e.root, new ph([], {}), e, r, s); const o = function(t, e, n) { if (t.isAbsolute) return new Kh(e.root, !0, 0); if (-1 === n.snapshot._lastPathIndex) return new Kh(n.snapshot._urlSegment, !0, 0); const r = qh(t.commands[0]) ? 0 : 1; return function(t, e, n) { let r = t,
                  s = e,
                  i = n; for (; i > s;) { if (i -= s, !(r = r.parent)) throw new Error("Invalid number of '../'");
                  s = r.segments.length } return new Kh(r, !1, s - i) }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, t.numberOfDoubleDots) }(i, e, t),
            l = o.processChildren ? Xh(o.segmentGroup, o.index, i.commands) : Jh(o.segmentGroup, o.index, i.commands); return Wh(o.segmentGroup, l, e, r, s) }(a, this.currentUrlTree, t, c, u) } navigateByUrl(t, e = { skipLocationChange: !1 }) { ne() && this.isNgZoneEnabled && !di.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"); const n = ad(t) ? t : this.parseUrl(t),
        r = this.urlHandlingStrategy.merge(n, this.rawUrlTree); return this.scheduleNavigation(r, "imperative", null, e) } navigate(t, e = { skipLocationChange: !1 }) { return function(t) { for (let e = 0; e < t.length; e++) { const n = t[e]; if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`) } }(t), this.navigateByUrl(this.createUrlTree(t, e), e) } serializeUrl(t) { return this.urlSerializer.serialize(t) } parseUrl(t) { let e; try { e = this.urlSerializer.parse(t) } catch (n) { e = this.malformedUriErrorHandler(n, this.urlSerializer, t) } return e } isActive(t, e) { if (ad(t)) return hh(this.currentUrlTree, t, e); const n = this.parseUrl(t); return hh(this.currentUrlTree, n, e) } removeEmptyProps(t) { return Object.keys(t).reduce((e, n) => { const r = t[n]; return null != r && (e[n] = r), e }, {}) } processNavigations() { this.navigations.subscribe(t => { this.navigated = !0, this.lastSuccessfulId = t.id, this.events.next(new Dc(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, this.currentNavigation = null, t.resolve(!0) }, t => { this.console.warn("Unhandled Navigation Error: ") }) } scheduleNavigation(t, e, n, r) { const s = this.getTransition(); if (s && "imperative" !== e && "imperative" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0); if (s && "hashchange" == e && "popstate" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0); if (s && "popstate" == e && "hashchange" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0); let i = null,
        o = null; const l = new Promise((t, e) => { i = t, o = e }),
        a = ++this.navigationId; return this.setTransition({ id: a, source: e, restoredState: n, currentUrlTree: this.currentUrlTree, currentRawUrl: this.rawUrlTree, rawUrl: t, extras: r, resolve: i, reject: o, promise: l, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), l.catch(t => Promise.reject(t)) } setBrowserUrl(t, e, n, r) { const s = this.urlSerializer.serialize(t);
      r = r || {}, this.location.isCurrentPathEqualTo(s) || e ? this.location.replaceState(s, "", Object.assign({}, r, { navigationId: n })) : this.location.go(s, "", Object.assign({}, r, { navigationId: n })) } resetStateAndUrl(t, e, n) { this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree() } resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", { navigationId: this.lastSuccessfulId }) } } class Yd { constructor(t, e, n, r, s) { this.router = t, this.route = e, this.commands = [], null == n && r.setAttribute(s.nativeElement, "tabindex", "0") } set routerLink(t) { this.commands = null != t ? Array.isArray(t) ? t : [t] : [] } set preserveQueryParams(t) { ne() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = t } onClick() { const t = { skipLocationChange: Jd(this.skipLocationChange), replaceUrl: Jd(this.replaceUrl) }; return this.router.navigateByUrl(this.urlTree, t), !0 } get urlTree() { return this.router.createUrlTree(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment, preserveQueryParams: Jd(this.preserve), queryParamsHandling: this.queryParamsHandling, preserveFragment: Jd(this.preserveFragment) }) } }

  function Jd(t) { return "" === t || !!t } class Xd { constructor() { this.outlet = null, this.route = null, this.resolver = null, this.children = new tp, this.attachRef = null } } class tp { constructor() { this.contexts = new Map } onChildOutletCreated(t, e) { const n = this.getOrCreateContext(t);
      n.outlet = e, this.contexts.set(t, n) } onChildOutletDestroyed(t) { const e = this.getContext(t);
      e && (e.outlet = null) } onOutletDeactivated() { const t = this.contexts; return this.contexts = new Map, t } onOutletReAttached(t) { this.contexts = t } getOrCreateContext(t) { let e = this.getContext(t); return e || (e = new Xd, this.contexts.set(t, e)), e } getContext(t) { return this.contexts.get(t) || null } } class ep { constructor(t, e, n, r, s) { this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = s, this.activated = null, this._activatedRoute = null, this.activateEvents = new Vs, this.deactivateEvents = new Vs, this.name = r || Qc, t.onChildOutletCreated(this.name, this) } ngOnDestroy() { this.parentContexts.onChildOutletDestroyed(this.name) } ngOnInit() { if (!this.activated) { const t = this.parentContexts.getContext(this.name);
        t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null)) } } get isActivated() { return !!this.activated } get component() { if (!this.activated) throw new Error("Outlet is not activated"); return this.activated.instance } get activatedRoute() { if (!this.activated) throw new Error("Outlet is not activated"); return this._activatedRoute } get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {} } detach() { if (!this.activated) throw new Error("Outlet is not activated");
      this.location.detach(); const t = this.activated; return this.activated = null, this._activatedRoute = null, t } attach(t, e) { this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView) } deactivate() { if (this.activated) { const t = this.component;
        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t) } } activateWith(t, e) { if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
      this._activatedRoute = t; const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
        r = this.parentContexts.getOrCreateContext(this.name).children,
        s = new np(t, r, this.location.injector);
      this.activated = this.location.createComponent(n, this.location.length, s), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance) } } class np { constructor(t, e, n) { this.route = t, this.childContexts = e, this.parent = n } get(t, e) { return t === jh ? this.route : t === tp ? this.childContexts : this.parent.get(t, e) } } class rp {} class sp { preload(t, e) { return e().pipe(Ja(() => Ea(null))) } } class ip { preload(t, e) { return Ea(null) } } class op { constructor(t, e, n, r, s) { this.router = t, this.injector = r, this.preloadingStrategy = s, this.loader = new Bd(e, n, e => t.triggerEvent(new Hc(e)), e => t.triggerEvent(new $c(e))) } setUpPreloading() { this.subscription = this.router.events.pipe(Ra(t => t instanceof Dc), pu(() => this.preload())).subscribe(() => {}) } preload() { const t = this.injector.get(Ht); return this.processRoutes(t, this.router.config) } ngOnDestroy() { this.subscription.unsubscribe() } processRoutes(t, e) { const n = []; for (const r of e)
        if (r.loadChildren && !r.canLoad && r._loadedConfig) { const t = r._loadedConfig;
          n.push(this.processRoutes(t.module, t.routes)) } else r.loadChildren && !r.canLoad ? n.push(this.preloadConfig(t, r)) : r.children && n.push(this.processRoutes(t, r.children)); return Z(n).pipe(Y(), $(t => void 0)) } preloadConfig(t, e) { return this.preloadingStrategy.preload(e, () => this.loader.load(t.injector, e).pipe(q(t => (e._loadedConfig = t, this.processRoutes(t.module, t.routes))))) } } class lp { constructor(t, e, n = {}) { this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled" } init() { "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents() } createScrollEvents() { return this.router.events.subscribe(t => { t instanceof Ac ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = t.navigationTrigger, this.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof Dc && (this.lastId = t.id, this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment)) }) } consumeScrollEvents() { return this.router.events.subscribe(t => { t instanceof qc && (t.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0])) }) } scheduleScrollEvent(t, e) { this.router.triggerEvent(new qc(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e)) } ngOnDestroy() { this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe() } }
  const ap = new St("ROUTER_CONFIGURATION"), up = new St("ROUTER_FORROOT_GUARD"), cp = [Il, { provide: _h, useClass: yh }, { provide: Kd, useFactory: _p, deps: [Ai, _h, tp, Il, Ne, Ni, ei, zd, ap, [Gd, new at],
      [Hd, new at]
    ] }, tp, { provide: jh, useFactory: yp, deps: [Kd] }, { provide: Ni, useClass: ji }, op, ip, sp, { provide: ap, useValue: { enableTracing: !1 } }];

  function hp() { return new Ti("Router", Kd) } class dp { constructor(t, e) {} static forRoot(t, e) { return { ngModule: dp, providers: [cp, mp(t), { provide: up, useFactory: gp, deps: [
              [Kd, new at, new ct]
            ] }, { provide: ap, useValue: e || {} }, { provide: El, useFactory: fp, deps: [kl, [new lt(Tl), new at], ap] }, { provide: lp, useFactory: pp, deps: [Kd, wa, ap] }, { provide: rp, useExisting: e && e.preloadingStrategy ? e.preloadingStrategy : ip }, { provide: Ti, multi: !0, useFactory: hp },
          [vp, { provide: js, multi: !0, useFactory: bp, deps: [vp] }, { provide: Cp, useFactory: wp, deps: [vp] }, { provide: Zs, multi: !0, useExisting: Cp }]
        ] } } static forChild(t) { return { ngModule: dp, providers: [mp(t)] } } }

  function pp(t, e, n) { return n.scrollOffset && e.setOffset(n.scrollOffset), new lp(t, e, n) }

  function fp(t, e, n = {}) { return n.useHash ? new Pl(t, e) : new Ol(t, e) }

  function gp(t) { if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."); return "guarded" }

  function mp(t) { return [{ provide: ze, multi: !0, useValue: t }, { provide: zd, multi: !0, useValue: t }] }

  function _p(t, e, n, r, s, i, o, l, a = {}, u, c) { const h = new Kd(null, e, n, r, s, i, o, lh(l)); if (u && (h.urlHandlingStrategy = u), c && (h.routeReuseStrategy = c), a.errorHandler && (h.errorHandler = a.errorHandler), a.malformedUriErrorHandler && (h.malformedUriErrorHandler = a.malformedUriErrorHandler), a.enableTracing) { const t = _u();
      h.events.subscribe(e => { t.logGroup(`Router Event: ${e.constructor.name}`), t.log(e.toString()), t.log(e), t.logGroupEnd() }) } return a.onSameUrlNavigation && (h.onSameUrlNavigation = a.onSameUrlNavigation), a.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = a.paramsInheritanceStrategy), a.urlUpdateStrategy && (h.urlUpdateStrategy = a.urlUpdateStrategy), a.relativeLinkResolution && (h.relativeLinkResolution = a.relativeLinkResolution), h }

  function yp(t) { return t.routerState.root } class vp { constructor(t) { this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new T } appInitializer() { return this.injector.get(Sl, Promise.resolve(null)).then(() => { let t = null; const e = new Promise(e => t = e),
          n = this.injector.get(Kd),
          r = this.injector.get(ap); if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) t(!0);
        else if ("disabled" === r.initialNavigation) n.setUpLocationChangeListener(), t(!0);
        else { if ("enabled" !== r.initialNavigation) throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
          n.hooks.afterPreactivation = () => this.initNavigation ? Ea(null) : (this.initNavigation = !0, t(!0), this.resultOfPreactivationDone), n.initialNavigation() } return e }) } bootstrapListener(t) { const e = this.injector.get(ap),
        n = this.injector.get(op),
        r = this.injector.get(lp),
        s = this.injector.get(Kd),
        i = this.injector.get(Ai);
      t === i.components[0] && (this.isLegacyEnabled(e) ? s.initialNavigation() : this.isLegacyDisabled(e) && s.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), s.resetRootComponentType(i.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete()) } isLegacyEnabled(t) { return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation } isLegacyDisabled(t) { return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation } }

  function bp(t) { return t.appInitializer.bind(t) }

  function wp(t) { return t.bootstrapListener.bind(t) }
  const Cp = new St("Router Initializer");
  var xp = er({ encapsulation: 2, styles: [], data: {} });

  function kp(t) { return go(0, [(t()(), to(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), cs(1, 212992, null, 0, ep, [tp, Vn, on, [8, null], Pe], null, null)], (function(t, e) { t(e, 1, 0) }), null) }

  function Sp(t) { return go(0, [(t()(), to(0, 0, null, null, 1, "ng-component", [], null, null, null, kp, xp)), cs(1, 49152, null, 0, Wc, [], null, null)], null, null) }
  var Ep = Fr("ng-component", Wc, Sp, {}, {}, []); class Tp { constructor(t) { this.unitsService = t } ngOnInit() { this.getUnits() } getUnits() { this.unitsService.getData().subscribe(t => this.units = t) } }
  const Ip = [{ id: 1, name: "Therapy Department", link: "Therapy", url: "./assets/units_foto/therapy_department.jpg", patient: [{ name: "Anna Schmidt", dx: "Grippe", date: "2019-10-20T09:30:00.000Z", staff: "Katrin Sommer", position: "Doctor", age: 30, sex: "Mrs", adress: "Friedrich-Schmidt-Platz 0, 1010 Wien", foto: "./assets/patients_foto/patien1.png", task_number: 341, task__description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", task__status: "execution", tasks: [{ task_code: "DIAG01", name: "Heart rate check", timein: "2019-11-10T16:51:50.969Z", timeout: "2019-11-10T17:01:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", staff: "Gabriele Huber", position: "GHS" }, { task_code: "DIAG02", name: "Therapy and treatment", timein: "2019-11-10T14:51:50.969Z", timeout: "2019-12-21T15:51:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Kerstin Gruber", position: "Doctor" }, { task_code: "DIAG03", name: "Blood pressure control", timein: "2019-12-21T15:31:50.969Z", timeout: "2019-12-21T15:40:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Dominik Schwarz", position: "Care assistant" }] }, { name: "Hannah Smith", dx: "Hypertonische Krisen", date: "2019-09-19T12:40:00.000Z", age: 55, sex: "Mrs", adress: "Sudirman Street 0, 10110 Jakarta", foto: "./assets/patients_foto/patient2.jpg", staff: "Tanja Fuchs", position: "Doctor", task_number: 342, task__description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", task__status: "execution", tasks: [{ task_code: "DIAG02", name: "Heart rate check", timein: "2019-09-01T16:51:50.969Z", timeout: "2019-09-01T17:01:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", staff: "Dominik Huber", position: "GHS" }, { task_code: "DIAG02", name: "Therapy and treatment", timein: "2019-11-10T14:51:50.969Z", timeout: "2019-12-21T15:51:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Kerstin Gruber", position: "Doctor" }, { task_code: "TBV01", name: "Blood pressure control", timein: "2019-09-21T15:31:50.969Z", timeout: "2019-09-21T15:40:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Ulrich Krenn", position: "Care assistant" }] }, { name: "Christina Johnson", dx: "Myokardinfarkt", date: "2019-11-16T15:45:00.000Z", staff: "Katrin Sommer", position: "Doctor", age: 80, sex: "Mrs", adress: "Paranthe Wali Gali 0, 110001 Delhi", foto: "./assets/patients_foto/patient3.jpg", task_number: 343, task__description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", task__status: "execution", tasks: [{ task_code: "DIAG02", name: "Heart rate check", timein: "2019-09-01T16:51:50.969Z", timeout: "2019-09-01T17:01:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", staff: "Dominik Huber", position: "GHS" }, { task_code: "DIAG02", name: "Therapy and treatment", timein: "2019-11-10T14:51:50.969Z", timeout: "2019-12-21T15:51:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Katrin Sommer", position: "Doctor" }, { task_code: "TBV01", name: "Blood pressure control", timein: "2019-09-21T15:31:50.969Z", timeout: "2019-09-21T15:40:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Ulrich Krenn", position: "Care assistant" }] }, { name: "Christian Williams", dx: "Bronchialasthma", date: "2019-11-22T05:00:00.000Z", staff: "Dominik Schwarz", position: "Care assistant", age: 25, sex: "Mrs", adress: "Folgueras Street 0, 1000 Manila", foto: "./assets/patients_foto/patient4.jpg", task_number: 344, task__description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", task__status: "execution", tasks: [{ task_code: "DIAG02", name: "Heart rate check", timein: "2019-09-01T16:51:50.969Z", timeout: "2019-09-01T17:01:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", staff: "Dominik Huber", position: "GHS" }, { task_code: "DIAG02", name: "Therapy and treatment", timein: "2019-11-10T14:51:50.969Z", timeout: "2019-12-21T15:51:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Katrin Sommer", position: "Doctor" }, { task_code: "TBV01", name: "Blood pressure control", timein: "2019-09-21T15:31:50.969Z", timeout: "2019-09-21T15:40:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Ulrich Krenn", position: "Care assistant" }] }, { name: "Paul Jones", dx: "Osteoarthrose", date: "2019-11-21T11:20:00.000Z", staff: "Ulrich Krenn", position: "GHS", age: 31, sex: "Mr", adress: "Myeongdong 0, 100011 Seoul", foto: "./assets/patients_foto/patient5.jpg" }, { name: "Michelle Schulze", dx: "Chronische myeloische Leuk\xe4mie", date: "2019-11-20T10:05:00.000Z", staff: "Kerstin Gruber", position: "Doctor", age: 70, sex: "Mr", adress: "Yuyuan Old Street  0, 200000 Shanghai", foto: "./assets/patients_foto/patient6.jpg", task_number: 345, task__description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", task__status: "execution", tasks: [{ task_code: "DIAG02", name: "Heart rate check", timein: "2019-09-01T16:51:50.969Z", timeout: "2019-09-01T17:01:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", staff: "Dominik Huber", position: "GHS" }, { task_code: "DIAG02", name: "Therapy and treatment", timein: "2019-11-10T14:51:50.969Z", timeout: "2019-12-21T15:51:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Katrin Sommer", position: "Doctor" }, { task_code: "TBV01", name: "Blood pressure control", timein: "2019-09-21T15:31:50.969Z", timeout: "2019-09-21T15:40:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Ulrich Krenn", position: "Care assistant" }] }] }, { id: 2, name: "Surgery Department", link: "Surgery", url: "./assets/units_foto/surgery_department.jpg", patient: [{ name: "Hannah Smith", dx: "Hypertonische Krisen", date: "2019-11-19T12:40:00.000Z", staff: "Kerstin Gruber", position: "Doctor", age: 55, sex: "Mrs", adress: "Sudirman Street 0, 10110 Jakarta", foto: "./assets/patients_foto/patient2.jpg" }, { name: "Christina Johnson", dx: "Myokardinfarkt", date: "2019-11-16T15:45:00.000Z", staff: "Katrin Sommer", position: "Doctor", age: 80, sex: "Mrs", adress: "Paranthe Wali Gali 0, 110001 Delhi", foto: "./assets/patients_foto/patient3.jpg" }, { name: "Christian Williams", dx: "Bronchialasthma", date: "2019-11-22T05:00:00.000Z", staff: "Katrin Sommer", position: "Doctor", age: 25, sex: "Mrs", adress: "Folgueras Street 0, 1000 Manila", foto: "./assets/patients_foto/patient4.jpg" }, { name: "Michelle Schulze", dx: "Chronische myeloische Leuk\xe4mie", date: "2019-11-20T10:05:00.000Z", staff: "Katrin Sommer", position: "Doctor", age: 70, sex: "Mr", adress: "Yuyuan Old Street  0, 200000 Shanghai", foto: "./assets/patients_foto/patient6.jpg" }] }, { id: 3, name: "Clinic of Neurology", link: "Neurology", url: "./assets/units_foto/clinic_of_neurology.jpg", patient: [{ name: "Christina Johnson", dx: "Myokardinfarkt", date: "2019-11-16T15:45:00.000Z", staff: "Katrin Sommer", position: "Doctor", age: 80, sex: "Mrs", adress: "Paranthe Wali Gali 0, 110001 Delhi", foto: "./assets/patients_foto/patient3.jpg" }, { name: "Christian Williams", dx: "Bronchialasthma", date: "2019-11-22T05:00:00.000Z", staff: "Tanja Fuchs", position: "Doctor", age: 25, sex: "Mrs", adress: "Folgueras Street 0, 1000 Manila", foto: "./assets/patients_foto/patient4.jpg" }, { name: "Paul Jones", dx: "Osteoarthrose", date: "2019-11-21T11:20:00.000Z", staff: "Tanja Fuchs", position: "Doctor", age: 31, sex: "Mr", adress: "Myeongdong 0, 100011 Seoul", foto: "./assets/patients_foto/patient5.jpg" }, { name: "Michelle Schulze", dx: "Chronische myeloische Leuk\xe4mie", date: "2019-11-20T10:05:00.000Z", staff: "Tanja Fuchs", position: "Doctor", age: 70, sex: "Mr", adress: "Yuyuan Old Street  0, 200000 Shanghai", foto: "./assets/patients_foto/patient6.jpg" }] }, { id: 4, name: "Cardiology Department", link: "Cardiology", url: "./assets/units_foto/cardiology_department.jpg", patient: [{ name: "Christian Williams", dx: "Bronchialasthma", date: "2019-11-22T05:00:00.000Z", staff: "Tanja Fuchs", position: "Doctor", age: 25, sex: "Mrs", adress: "Folgueras Street 0, 1000 Manila", foto: "./assets/patients_foto/patient4.jpg" }, { name: "Paul Jones", dx: "Osteoarthrose", date: "2019-11-21T11:20:00.000Z", staff: "Katrin Sommer", position: "Doctor", age: 31, sex: "Mr", adress: "Myeongdong 0, 100011 Seoul", foto: "./assets/patients_foto/patient5.jpg" }, { name: "Michelle Schulze", dx: "Chronische myeloische Leuk\xe4mie", date: "2019-11-20T10:05:00.000Z", staff: "Katrin Sommer", position: "Doctor", age: 70, sex: "Mr", adress: "Yuyuan Old Street  0, 200000 Shanghai", foto: "./assets/patients_foto/patient6.jpg" }] }, { id: 5, name: "Department of Gastroenterology", link: "Gastroenterology", url: "./assets/units_foto/department_of_gastroenterology.jpg", patient: [{ name: "Paul Jones", dx: "Osteoarthrose", date: "2019-11-21T11:20:00.000Z", staff: "Katrin Sommer", position: "Doctor", age: 31, sex: "Mr", adress: "Myeongdong 0, 100011 Seoul", foto: "./assets/patients_foto/patient5.jpg" }, { name: "Michelle Schulze", dx: "Chronische myeloische Leuk\xe4mie", date: "2019-11-20T10:05:00.000Z", staff: "Dominik Schwarz", position: "Care assistant", age: 70, sex: "Mr", adress: "Yuyuan Old Street  0, 200000 Shanghai", foto: "./assets/patients_foto/patient6.jpg" }] }, { id: 6, name: "Allergy Department", link: "Allergy", url: "./assets/units_foto/allergy_department.jpg", patient: [{ name: "Michelle Schulze", dx: "Chronische myeloische Leuk\xe4mie", date: "2019-11-20T10:05:00.000Z", staff: "Katrin Sommer", position: "Doctor", age: 70, sex: "Mr", adress: "Yuyuan Old Street  0, 200000 Shanghai", foto: "./assets/patients_foto/patient6.jpg" }] }];
  let Mp = (() => { class t { constructor() {} getData() { return Ea(Ip) } getLink(t) { return Ea(Ip.find(e => e.link === t)) } getPatient(t) { return Ea(Ip.find(t => t == t)) } } return t.ngInjectableDef = pt({ factory: function() { return new t }, token: t, providedIn: "root" }), t })();
  var Pp = er({ encapsulation: 0, styles: [
      [".units[_ngcontent-%COMP%]{width:1100px;margin-right:auto;margin-left:auto}.units[_ngcontent-%COMP%]   .units-wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around}.units__title[_ngcontent-%COMP%]{text-align:center;font-family:Roboto Medium;font-style:normal;font-size:28px;line-height:28px}.units__item[_ngcontent-%COMP%]{width:270px;height:233px;position:relative;margin:15px;border:1px solid #b5b4b8;border-radius:10px;cursor:pointer;outline:0}.units__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-filter:grayscale(100%);filter:grayscale(100%);border-radius:10px;outline:0}.units__item[_ngcontent-%COMP%]   .item__text[_ngcontent-%COMP%]{position:absolute;bottom:0;left:32px;color:#fff;font-family:Roboto Medium;font-style:normal;font-size:28px;line-height:28px;text-shadow:5px -1px 5px #000,-4px 5px 8px #000}.units__item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px 18px grey}.units__item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{-webkit-filter:grayscale(0);filter:grayscale(0)}"]
    ], data: {} });

  function Op(t) { return go(0, [(t()(), to(0, 0, null, null, 4, "div", [
      ["class", "units__item"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== Yr(t, 1).onClick() && r), r }), null, null)), cs(1, 16384, null, 0, Yd, [Kd, jh, [8, null], gn, cn], { routerLink: [0, "routerLink"] }, null), (t()(), to(2, 0, null, null, 0, "img", [
      ["class", "img"]
    ], [
      [8, "src", 4],
      [8, "alt", 0]
    ], null, null, null, null)), (t()(), to(3, 0, null, null, 1, "p", [
      ["class", "item__text"]
    ], null, null, null, null, null)), (t()(), ho(4, null, ["", ""]))], (function(t, e) { t(e, 1, 0, Tr(1, "/", e.context.$implicit.link, "")) }), (function(t, e) { t(e, 2, 0, Tr(1, "", e.context.$implicit.url, ""), Tr(1, "", e.context.$implicit.name, "")), t(e, 4, 0, e.context.$implicit.name) })) }

  function Ap(t) { return go(0, [(t()(), to(0, 0, null, null, 5, "section", [
      ["class", "units"]
    ], null, null, null, null, null)), (t()(), to(1, 0, null, null, 1, "h2", [
      ["class", "units__title"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Units of the hospital"])), (t()(), to(3, 0, null, null, 2, "div", [
      ["class", "units-wrap"]
    ], null, null, null, null, null)), (t()(), Xi(16777216, null, null, 1, null, Op)), cs(5, 278528, null, 0, da, [Vn, Nn, Mn], { ngForOf: [0, "ngForOf"] }, null)], (function(t, e) { t(e, 5, 0, e.component.units) }), null) }

  function Dp(t) { return go(0, [(t()(), to(0, 0, null, null, 1, "app-units", [], null, null, null, Ap, Pp)), cs(1, 114688, null, 0, Tp, [Mp], null, null)], (function(t, e) { t(e, 1, 0) }), null) }
  var Np = Fr("app-units", Tp, Dp, {}, {}, []); class Rp { constructor(t, e, n) { this.route = t, this.unitsService = e, this.location = n, this.toggle = !0 } ngOnInit() { this.getLink() } getLink() { const t = this.route.snapshot.paramMap.get("link");
      this.unitsService.getLink(t).subscribe(t => this.link = t); let e = this.link.patient; var n = { linkName: "test" }; for (let r in e) n.linkName = e[r].name.replace(/\s/g, ""), Object.assign(e[r], n) } goBack() { this.location.back() } sortName() { this.toggle = !this.toggle, this.link.patient.sort((t, e) => this.toggle ? +(t.name > e.name) || -(t.name < e.name) : -(t.name > e.name) || +(t.name < e.name)) } sortDx() { this.toggle = !this.toggle, this.link.patient.sort((t, e) => this.toggle ? +(t.dx > e.dx) || -(t.dx < e.dx) : -(t.dx > e.dx) || +(t.dx < e.dx)) } sortVisit() { this.toggle = !this.toggle, this.link.patient.sort((t, e) => this.toggle ? +(t.date > e.date) || -(t.date < e.date) : -(t.date > e.date) || +(t.date < e.date)) } sortStaff() { this.toggle = !this.toggle, this.link.patient.sort((t, e) => this.toggle ? +(t.staff > e.staff) || -(t.staff < e.staff) : -(t.staff > e.staff) || +(t.staff < e.staff)) } onSearch() { let t, e, n, r, s, i, o; for (e = (t = document.getElementById("listInput")).value.toUpperCase(), r = (n = document.getElementById("list")).getElementsByTagName("tr"), i = 0; i < r.length; i++)(s = r[i].getElementsByTagName("td")[0]) && (r[i].style.display = (o = s.textContent || s.innerText).toUpperCase().indexOf(e) > -1 ? "" : "none") } }
  var Vp = er({ encapsulation: 0, styles: [
      ['@charset "UTF-8";.unit[_ngcontent-%COMP%]{width:1100px;margin-right:auto;margin-left:auto}.unit__back-button[_ngcontent-%COMP%]{margin-top:22px;margin-left:12px;margin-bottom:22px;background:0 0;border:none;font-family:Roboto Medium;font-style:normal;font-size:14px;line-height:16px;color:#70c4b4}.unit__back-button[_ngcontent-%COMP%]:before{content:" \u276e";margin-right:3px}.unit__title[_ngcontent-%COMP%]{text-align:center}.unit__subhead[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.unit__search[_ngcontent-%COMP%]{padding:5px 10px}.unit-list[_ngcontent-%COMP%]{width:100%}.unit-list__title[_ngcontent-%COMP%]{text-align:left;color:#868686;width:214px}.unit-list__name[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-size:18px;line-height:26px;color:#70c4b4;cursor:pointer}.unit-list__position[_ngcontent-%COMP%]{font-size:12px}']
    ], data: {} });

  function Lp(t) { return go(0, [(t()(), to(0, 0, null, null, 12, "tr", [], null, null, null, null, null)), (t()(), to(1, 0, null, null, 2, "td", [
      ["class", "unit-list__name"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== Yr(t, 2).onClick() && r), r }), null, null)), cs(2, 16384, null, 0, Yd, [Kd, jh, [8, null], gn, cn], { routerLink: [0, "routerLink"] }, null), (t()(), ho(3, null, ["", ""])), (t()(), to(4, 0, null, null, 1, "td", [
      ["class", "unit-list__dx"]
    ], null, null, null, null, null)), (t()(), ho(5, null, ["", ""])), (t()(), to(6, 0, null, null, 2, "td", [
      ["class", "unit-list__date"]
    ], null, null, null, null, null)), (t()(), ho(7, null, ["", ""])), co(8, 2), (t()(), to(9, 0, null, null, 3, "td", [
      ["class", "unit-list__personal"]
    ], null, null, null, null, null)), (t()(), ho(10, null, ["", ", "])), (t()(), to(11, 0, null, null, 1, "span", [
      ["class", "unit-list__position"]
    ], null, null, null, null, null)), (t()(), ho(12, null, ["", ""]))], (function(t, e) { t(e, 2, 0, Tr(2, "/", e.component.link.link, "/", e.context.$implicit.linkName, "")) }), (function(t, e) { t(e, 3, 0, e.context.$implicit.name), t(e, 5, 0, e.context.$implicit.dx); var n = Jn(e, 7, 0, t(e, 8, 0, Yr(e.parent, 0), e.context.$implicit.date, "medium"));
      t(e, 7, 0, n), t(e, 10, 0, e.context.$implicit.staff), t(e, 12, 0, e.context.$implicit.position) })) }

  function Up(t) { return go(0, [hs(0, _a, [Ws]), (t()(), to(1, 0, null, null, 25, "section", [
      ["class", "unit"]
    ], null, null, null, null, null)), (t()(), to(2, 0, null, null, 1, "button", [
      ["class", "unit__back-button"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.goBack() && r), r }), null, null)), (t()(), ho(-1, null, ["Back"])), (t()(), to(4, 0, null, null, 22, "div", [], null, null, null, null, null)), (t()(), to(5, 0, null, null, 1, "h2", [
      ["class", "unit__title"]
    ], null, null, null, null, null)), (t()(), ho(6, null, ["", ""])), (t()(), to(7, 0, null, null, 3, "div", [
      ["class", "unit__subhead"]
    ], null, null, null, null, null)), (t()(), to(8, 0, null, null, 1, "h3", [
      ["class", "unit__subtitle"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Active patients"])), (t()(), to(10, 0, null, null, 0, "input", [
      ["class", "unit__search"],
      ["id", "listInput"],
      ["placeholder", "Search for patients.."],
      ["type", "text"]
    ], null, [
      [null, "keyup"]
    ], (function(t, e, n) { var r = !0; return "keyup" === e && (r = !1 !== t.component.onSearch() && r), r }), null, null)), (t()(), to(11, 0, null, null, 15, "table", [
      ["class", "unit-list"],
      ["id", "list"]
    ], null, null, null, null, null)), (t()(), to(12, 0, null, null, 12, "tr", [], null, null, null, null, null)), (t()(), to(13, 0, null, null, 2, "th", [
      ["class", "unit-list__title"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.sortName() && r), r }), null, null)), (t()(), ho(-1, null, ["Patient name "])), (t()(), to(15, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), to(16, 0, null, null, 2, "th", [
      ["class", "unit-list__title"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.sortDx() && r), r }), null, null)), (t()(), ho(-1, null, ["Diagnosis "])), (t()(), to(18, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), to(19, 0, null, null, 2, "th", [
      ["class", "unit-list__title"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.sortVisit() && r), r }), null, null)), (t()(), ho(-1, null, ["Last visit "])), (t()(), to(21, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), to(22, 0, null, null, 2, "th", [
      ["class", "unit-list__title"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.sortStaff() && r), r }), null, null)), (t()(), ho(-1, null, ["Staff "])), (t()(), to(24, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), Xi(16777216, null, null, 1, null, Lp)), cs(26, 278528, null, 0, da, [Vn, Nn, Mn], { ngForOf: [0, "ngForOf"] }, null)], (function(t, e) { t(e, 26, 0, e.component.link.patient) }), (function(t, e) { t(e, 6, 0, e.component.link.name) })) }

  function jp(t) { return go(0, [(t()(), to(0, 0, null, null, 1, "app-list", [], null, null, null, Up, Vp)), cs(1, 114688, null, 0, Rp, [jh, Mp, Il], null, null)], (function(t, e) { t(e, 1, 0) }), null) }
  var Fp = Fr("app-list", Rp, jp, {}, {}, []); class Hp extends H { constructor(t, e) { super(t), this.sources = e, this.completed = 0, this.haveValues = 0; const n = e.length;
      this.values = new Array(n); for (let r = 0; r < n; r++) { const t = F(this, e[r], null, r);
        t && this.add(t) } } notifyNext(t, e, n, r, s) { this.values[n] = e, s._hasValue || (s._hasValue = !0, this.haveValues++) } notifyComplete(t) { const { destination: e, haveValues: n, values: r } = this, s = r.length;
      t._hasValue ? (this.completed++, this.completed === s && (n === s && e.next(r), e.complete())) : e.complete() } }
  const $p = new St("NgValueAccessor"), zp = new St("CompositionEventMode"); class Bp { constructor(t, e, n) { this._renderer = t, this._elementRef = e, this._compositionMode = n, this.onChange = t => {}, this.onTouched = () => {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = ! function() { const t = _u() ? _u().getUserAgent() : ""; return /android (\d+)/.test(t.toLowerCase()) }()) } writeValue(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t) } registerOnChange(t) { this.onChange = t } registerOnTouched(t) { this.onTouched = t } setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) } _handleInput(t) {
      (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t) } _compositionStart() { this._composing = !0 } _compositionEnd(t) { this._composing = !1, this._compositionMode && this.onChange(t) } } class Gp { get value() { return this.control ? this.control.value : null } get valid() { return this.control ? this.control.valid : null } get invalid() { return this.control ? this.control.invalid : null } get pending() { return this.control ? this.control.pending : null } get disabled() { return this.control ? this.control.disabled : null } get enabled() { return this.control ? this.control.enabled : null } get errors() { return this.control ? this.control.errors : null } get pristine() { return this.control ? this.control.pristine : null } get dirty() { return this.control ? this.control.dirty : null } get touched() { return this.control ? this.control.touched : null } get status() { return this.control ? this.control.status : null } get untouched() { return this.control ? this.control.untouched : null } get statusChanges() { return this.control ? this.control.statusChanges : null } get valueChanges() { return this.control ? this.control.valueChanges : null } get path() { return null } reset(t) { this.control && this.control.reset(t) } hasError(t, e) { return !!this.control && this.control.hasError(t, e) } getError(t, e) { return this.control ? this.control.getError(t, e) : null } } class Zp extends Gp { get formDirective() { return null } get path() { return null } }

  function qp() { throw new Error("unimplemented") } class Wp extends Gp { constructor() { super(...arguments), this._parent = null, this.name = null, this.valueAccessor = null, this._rawValidators = [], this._rawAsyncValidators = [] } get validator() { return qp() } get asyncValidator() { return qp() } } class Qp { constructor(t) { this._cd = t } get ngClassUntouched() { return !!this._cd.control && this._cd.control.untouched } get ngClassTouched() { return !!this._cd.control && this._cd.control.touched } get ngClassPristine() { return !!this._cd.control && this._cd.control.pristine } get ngClassDirty() { return !!this._cd.control && this._cd.control.dirty } get ngClassValid() { return !!this._cd.control && this._cd.control.valid } get ngClassInvalid() { return !!this._cd.control && this._cd.control.invalid } get ngClassPending() { return !!this._cd.control && this._cd.control.pending } } class Kp extends Qp { constructor(t) { super(t) } }

  function Yp(t) { return null == t || 0 === t.length }
  const Jp = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; class Xp { static min(t) { return e => { if (Yp(e.value) || Yp(t)) return null; const n = parseFloat(e.value); return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null } } static max(t) { return e => { if (Yp(e.value) || Yp(t)) return null; const n = parseFloat(e.value); return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null } } static required(t) { return Yp(t.value) ? { required: !0 } : null } static requiredTrue(t) { return !0 === t.value ? null : { required: !0 } } static email(t) { return Yp(t.value) ? null : Jp.test(t.value) ? null : { email: !0 } } static minLength(t) { return e => { if (Yp(e.value)) return null; const n = e.value ? e.value.length : 0; return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null } } static maxLength(t) { return e => { const n = e.value ? e.value.length : 0; return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null } } static pattern(t) { if (!t) return Xp.nullValidator; let e, n; return "string" == typeof t ? (n = "", "^" !== t.charAt(0) && (n += "^"), n += t, "$" !== t.charAt(t.length - 1) && (n += "$"), e = new RegExp(n)) : (n = t.toString(), e = t), t => { if (Yp(t.value)) return null; const r = t.value; return e.test(r) ? null : { pattern: { requiredPattern: n, actualValue: r } } } } static nullValidator(t) { return null } static compose(t) { if (!t) return null; const e = t.filter(tf); return 0 == e.length ? null : function(t) { return nf(function(t, e) { return e.map(e => e(t)) }(t, e)) } } static composeAsync(t) { if (!t) return null; const e = t.filter(tf); return 0 == e.length ? null : function(t) { return function t(...e) { let n; return "function" == typeof e[e.length - 1] && (n = e.pop()), 1 === e.length && a(e[0]) && (e = e[0]), 0 === e.length ? xa : n ? t(e).pipe($(t => n(...t))) : new w(t => new Hp(t, e)) }(function(t, e) { return e.map(e => e(t)) }(t, e).map(ef)).pipe($(nf)) } } }

  function tf(t) { return null != t }

  function ef(t) { const e = Ye(t) ? Z(t) : t; if (!Je(e)) throw new Error("Expected validator to return Promise or Observable."); return e }

  function nf(t) { const e = t.reduce((t, e) => null != e ? Object.assign({}, t, e) : t, {}); return 0 === Object.keys(e).length ? null : e }

  function rf(t) { return t.validate ? e => t.validate(e) : t }

  function sf(t) { return t.validate ? e => t.validate(e) : t } class of { constructor() { this._accessors = [] } add(t, e) { this._accessors.push([t, e]) } remove(t) { for (let e = this._accessors.length - 1; e >= 0; --e)
        if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1) } select(t) { this._accessors.forEach(e => { this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value) }) } _isSameGroup(t, e) { return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name } }
  const lf = { formControlName: '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });', formGroupName: '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });', formArrayName: '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });', ngModelGroup: '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>', ngModelWithFormGroup: '\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ' };

  function af(t, e) { return null == t ? `${e}` : (e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50)) } class uf { constructor(t, e) { this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = Ze } set compareWith(t) { if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
      this._compareWith = t } writeValue(t) { this.value = t; const e = this._getOptionId(t);
      null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1); const n = af(e, t);
      this._renderer.setProperty(this._elementRef.nativeElement, "value", n) } registerOnChange(t) { this.onChange = e => { this.value = this._getOptionValue(e), t(this.value) } } registerOnTouched(t) { this.onTouched = t } setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) } _registerOption() { return (this._idCounter++).toString() } _getOptionId(t) { for (const e of Array.from(this._optionMap.keys()))
        if (this._compareWith(this._optionMap.get(e), t)) return e; return null } _getOptionValue(t) { const e = function(t) { return t.split(":")[0] }(t); return this._optionMap.has(e) ? this._optionMap.get(e) : t } } class cf { constructor(t, e, n) { this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption()) } set ngValue(t) { null != this._select && (this._select._optionMap.set(this.id, t), this._setElementValue(af(this.id, t)), this._select.writeValue(this._select.value)) } set value(t) { this._setElementValue(t), this._select && this._select.writeValue(this._select.value) } _setElementValue(t) { this._renderer.setProperty(this._element.nativeElement, "value", t) } ngOnDestroy() { this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value)) } }

  function hf(t, e) { return null == t ? `${e}` : ("string" == typeof e && (e = `'${e}'`), e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50)) } class df { constructor(t, e, n) { this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption(this)) } set ngValue(t) { null != this._select && (this._value = t, this._setElementValue(hf(this.id, t)), this._select.writeValue(this._select.value)) } set value(t) { this._select ? (this._value = t, this._setElementValue(hf(this.id, t)), this._select.writeValue(this._select.value)) : this._setElementValue(t) } _setElementValue(t) { this._renderer.setProperty(this._element.nativeElement, "value", t) } _setSelected(t) { this._renderer.setProperty(this._element.nativeElement, "selected", t) } ngOnDestroy() { this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value)) } }

  function pf(t, e) { return [...e.path, t] }

  function ff(t, e) { t || mf(e, "Cannot find control with"), e.valueAccessor || mf(e, "No value accessor for form control with"), t.validator = Xp.compose([t.validator, e.validator]), t.asyncValidator = Xp.composeAsync([t.asyncValidator, e.asyncValidator]), e.valueAccessor.writeValue(t.value),
      function(t, e) { e.valueAccessor.registerOnChange(n => { t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && gf(t, e) }) }(t, e),
      function(t, e) { t.registerOnChange((t, n) => { e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t) }) }(t, e),
      function(t, e) { e.valueAccessor.registerOnTouched(() => { t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && gf(t, e), "submit" !== t.updateOn && t.markAsTouched() }) }(t, e), e.valueAccessor.setDisabledState && t.registerOnDisabledChange(t => { e.valueAccessor.setDisabledState(t) }), e._rawValidators.forEach(e => { e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity()) }), e._rawAsyncValidators.forEach(e => { e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity()) }) }

  function gf(t, e) { t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, { emitModelToViewChange: !1 }), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1 }

  function mf(t, e) { let n; throw n = t.path.length > 1 ? `path: '${t.path.join(" -> ")}'` : t.path[0] ? `name: '${t.path}'` : "unspecified name attribute", new Error(`${e} ${n}`) }

  function _f(t) { return null != t ? Xp.compose(t.map(rf)) : null }

  function yf(t) { return null != t ? Xp.composeAsync(t.map(sf)) : null }
  const vf = [class { constructor(t, e) { this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {} } writeValue(t) { this._renderer.setProperty(this._elementRef.nativeElement, "checked", t) } registerOnChange(t) { this.onChange = t } registerOnTouched(t) { this.onTouched = t } setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) } }, class { constructor(t, e) { this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {} } writeValue(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t)) } registerOnChange(t) { this.onChange = e => { t("" == e ? null : parseFloat(e)) } } registerOnTouched(t) { this.onTouched = t } setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) } }, class { constructor(t, e) { this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {} } writeValue(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t) } registerOnChange(t) { this.onChange = e => { t("" == e ? null : parseFloat(e)) } } registerOnTouched(t) { this.onTouched = t } setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) } }, uf, class { constructor(t, e) { this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = Ze } set compareWith(t) { if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
      this._compareWith = t } writeValue(t) { let e; if (this.value = t, Array.isArray(t)) { const n = t.map(t => this._getOptionId(t));
        e = (t, e) => { t._setSelected(n.indexOf(e.toString()) > -1) } } else e = (t, e) => { t._setSelected(!1) };
      this._optionMap.forEach(e) } registerOnChange(t) { this.onChange = e => { const n = []; if (e.hasOwnProperty("selectedOptions")) { const t = e.selectedOptions; for (let e = 0; e < t.length; e++) { const r = t.item(e),
              s = this._getOptionValue(r.value);
            n.push(s) } } else { const t = e.options; for (let e = 0; e < t.length; e++) { const r = t.item(e); if (r.selected) { const t = this._getOptionValue(r.value);
              n.push(t) } } } this.value = n, t(n) } } registerOnTouched(t) { this.onTouched = t } setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) } _registerOption(t) { const e = (this._idCounter++).toString(); return this._optionMap.set(e, t), e } _getOptionId(t) { for (const e of Array.from(this._optionMap.keys()))
        if (this._compareWith(this._optionMap.get(e)._value, t)) return e; return null } _getOptionValue(t) { const e = function(t) { return t.split(":")[0] }(t); return this._optionMap.has(e) ? this._optionMap.get(e)._value : t } }, class { constructor(t, e, n, r) { this._renderer = t, this._elementRef = e, this._registry = n, this._injector = r, this.onChange = () => {}, this.onTouched = () => {} } ngOnInit() { this._control = this._injector.get(Wp), this._checkName(), this._registry.add(this._control, this) } ngOnDestroy() { this._registry.remove(this) } writeValue(t) { this._state = t === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state) } registerOnChange(t) { this._fn = t, this.onChange = () => { t(this.value), this._registry.select(this) } } fireUncheck(t) { this.writeValue(t) } registerOnTouched(t) { this.onTouched = t } setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) } _checkName() { this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName) } _throwNameError() { throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ') } }], bf = "VALID", wf = "INVALID", Cf = "PENDING", xf = "DISABLED";

  function kf(t) { const e = Ef(t) ? t.validators : t; return Array.isArray(e) ? _f(e) : e || null }

  function Sf(t, e) { const n = Ef(e) ? e.asyncValidators : t; return Array.isArray(n) ? yf(n) : n || null }

  function Ef(t) { return null != t && !Array.isArray(t) && "object" == typeof t } class Tf { constructor(t, e) { this.validator = t, this.asyncValidator = e, this._onCollectionChange = () => {}, this.pristine = !0, this.touched = !1, this._onDisabledChange = [] } get parent() { return this._parent } get valid() { return this.status === bf } get invalid() { return this.status === wf } get pending() { return this.status == Cf } get disabled() { return this.status === xf } get enabled() { return this.status !== xf } get dirty() { return !this.pristine } get untouched() { return !this.touched } get updateOn() { return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change" } setValidators(t) { this.validator = kf(t) } setAsyncValidators(t) { this.asyncValidator = Sf(t) } clearValidators() { this.validator = null } clearAsyncValidators() { this.asyncValidator = null } markAsTouched(t = {}) { this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t) } markAllAsTouched() { this.markAsTouched({ onlySelf: !0 }), this._forEachChild(t => t.markAllAsTouched()) } markAsUntouched(t = {}) { this.touched = !1, this._pendingTouched = !1, this._forEachChild(t => { t.markAsUntouched({ onlySelf: !0 }) }), this._parent && !t.onlySelf && this._parent._updateTouched(t) } markAsDirty(t = {}) { this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t) } markAsPristine(t = {}) { this.pristine = !0, this._pendingDirty = !1, this._forEachChild(t => { t.markAsPristine({ onlySelf: !0 }) }), this._parent && !t.onlySelf && this._parent._updatePristine(t) } markAsPending(t = {}) { this.status = Cf, !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t) } disable(t = {}) { const e = this._parentMarkedDirty(t.onlySelf);
      this.status = xf, this.errors = null, this._forEachChild(e => { e.disable(Object.assign({}, t, { onlySelf: !0 })) }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Object.assign({}, t, { skipPristineCheck: e })), this._onDisabledChange.forEach(t => t(!0)) } enable(t = {}) { const e = this._parentMarkedDirty(t.onlySelf);
      this.status = bf, this._forEachChild(e => { e.enable(Object.assign({}, t, { onlySelf: !0 })) }), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }), this._updateAncestors(Object.assign({}, t, { skipPristineCheck: e })), this._onDisabledChange.forEach(t => t(!1)) } _updateAncestors(t) { this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched()) } setParent(t) { this._parent = t } updateValueAndValidity(t = {}) { this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), this.status !== bf && this.status !== Cf || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t) } _updateTreeValidity(t = { emitEvent: !0 }) { this._forEachChild(e => e._updateTreeValidity(t)), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }) } _setInitialStatus() { this.status = this._allControlsDisabled() ? xf : bf } _runValidator() { return this.validator ? this.validator(this) : null } _runAsyncValidator(t) { if (this.asyncValidator) { this.status = Cf; const e = ef(this.asyncValidator(this));
        this._asyncValidationSubscription = e.subscribe(e => this.setErrors(e, { emitEvent: t })) } } _cancelExistingSubscription() { this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe() } setErrors(t, e = {}) { this.errors = t, this._updateControlsErrors(!1 !== e.emitEvent) } get(t) { return function(t, e, n) { return null == e ? null : (e instanceof Array || (e = e.split(".")), e instanceof Array && 0 === e.length ? null : e.reduce((t, e) => t instanceof Mf ? t.controls.hasOwnProperty(e) ? t.controls[e] : null : t instanceof Pf && t.at(e) || null, t)) }(this, t) } getError(t, e) { const n = e ? this.get(e) : this; return n && n.errors ? n.errors[t] : null } hasError(t, e) { return !!this.getError(t, e) } get root() { let t = this; for (; t._parent;) t = t._parent; return t } _updateControlsErrors(t) { this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t) } _initObservables() { this.valueChanges = new Vs, this.statusChanges = new Vs } _calculateStatus() { return this._allControlsDisabled() ? xf : this.errors ? wf : this._anyControlsHaveStatus(Cf) ? Cf : this._anyControlsHaveStatus(wf) ? wf : bf } _anyControlsHaveStatus(t) { return this._anyControls(e => e.status === t) } _anyControlsDirty() { return this._anyControls(t => t.dirty) } _anyControlsTouched() { return this._anyControls(t => t.touched) } _updatePristine(t = {}) { this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t) } _updateTouched(t = {}) { this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t) } _isBoxedValue(t) { return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t } _registerOnCollectionChange(t) { this._onCollectionChange = t } _setUpdateStrategy(t) { Ef(t) && null != t.updateOn && (this._updateOn = t.updateOn) } _parentMarkedDirty(t) { return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty() } } class If extends Tf { constructor(t = null, e, n) { super(kf(e), Sf(n, e)), this._onChange = [], this._applyFormState(t), this._setUpdateStrategy(e), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), this._initObservables() } setValue(t, e = {}) { this.value = this._pendingValue = t, this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(t => t(this.value, !1 !== e.emitViewToModelChange)), this.updateValueAndValidity(e) } patchValue(t, e = {}) { this.setValue(t, e) } reset(t = null, e = {}) { this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1 } _updateValue() {} _anyControls(t) { return !1 } _allControlsDisabled() { return this.disabled } registerOnChange(t) { this._onChange.push(t) } _clearChangeFns() { this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = () => {} } registerOnDisabledChange(t) { this._onDisabledChange.push(t) } _forEachChild(t) {} _syncPendingControls() { return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)) } _applyFormState(t) { this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 })) : this.value = this._pendingValue = t } } class Mf extends Tf { constructor(t, e, n) { super(kf(e), Sf(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }) } registerControl(t, e) { return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e) } addControl(t, e) { this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange() } removeControl(t) { this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange() } setControl(t, e) { this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange() } contains(t) { return this.controls.hasOwnProperty(t) && this.controls[t].enabled } setValue(t, e = {}) { this._checkAllValuesPresent(t), Object.keys(t).forEach(n => { this._throwIfControlMissing(n), this.controls[n].setValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e) } patchValue(t, e = {}) { Object.keys(t).forEach(n => { this.controls[n] && this.controls[n].patchValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e) } reset(t = {}, e = {}) { this._forEachChild((n, r) => { n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent }) }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e) } getRawValue() { return this._reduceChildren({}, (t, e, n) => (t[n] = e instanceof If ? e.value : e.getRawValue(), t)) } _syncPendingControls() { let t = this._reduceChildren(!1, (t, e) => !!e._syncPendingControls() || t); return t && this.updateValueAndValidity({ onlySelf: !0 }), t } _throwIfControlMissing(t) { if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "); if (!this.controls[t]) throw new Error(`Cannot find form control with name: ${t}.`) } _forEachChild(t) { Object.keys(this.controls).forEach(e => t(this.controls[e], e)) } _setUpControls() { this._forEachChild(t => { t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange) }) } _updateValue() { this.value = this._reduceValue() } _anyControls(t) { let e = !1; return this._forEachChild((n, r) => { e = e || this.contains(r) && t(n) }), e } _reduceValue() { return this._reduceChildren({}, (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t)) } _reduceChildren(t, e) { let n = t; return this._forEachChild((t, r) => { n = e(n, t, r) }), n } _allControlsDisabled() { for (const t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1; return Object.keys(this.controls).length > 0 || this.disabled } _checkAllValuesPresent(t) { this._forEachChild((e, n) => { if (void 0 === t[n]) throw new Error(`Must supply a value for form control with name: '${n}'.`) }) } } class Pf extends Tf { constructor(t, e, n) { super(kf(e), Sf(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }) } at(t) { return this.controls[t] } push(t) { this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange() } insert(t, e) { this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity() } removeAt(t) { this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), this.controls.splice(t, 1), this.updateValueAndValidity() } setControl(t, e) { this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), this.controls.splice(t, 1), e && (this.controls.splice(t, 0, e), this._registerControl(e)), this.updateValueAndValidity(), this._onCollectionChange() } get length() { return this.controls.length } setValue(t, e = {}) { this._checkAllValuesPresent(t), t.forEach((t, n) => { this._throwIfControlMissing(n), this.at(n).setValue(t, { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e) } patchValue(t, e = {}) { t.forEach((t, n) => { this.at(n) && this.at(n).patchValue(t, { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e) } reset(t = [], e = {}) { this._forEachChild((n, r) => { n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent }) }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e) } getRawValue() { return this.controls.map(t => t instanceof If ? t.value : t.getRawValue()) } clear() { this.controls.length < 1 || (this._forEachChild(t => t._registerOnCollectionChange(() => {})), this.controls.splice(0), this.updateValueAndValidity()) } _syncPendingControls() { let t = this.controls.reduce((t, e) => !!e._syncPendingControls() || t, !1); return t && this.updateValueAndValidity({ onlySelf: !0 }), t } _throwIfControlMissing(t) { if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "); if (!this.at(t)) throw new Error(`Cannot find form control at index ${t}`) } _forEachChild(t) { this.controls.forEach((e, n) => { t(e, n) }) } _updateValue() { this.value = this.controls.filter(t => t.enabled || this.disabled).map(t => t.value) } _anyControls(t) { return this.controls.some(e => e.enabled && t(e)) } _setUpControls() { this._forEachChild(t => this._registerControl(t)) } _checkAllValuesPresent(t) { this._forEachChild((e, n) => { if (void 0 === t[n]) throw new Error(`Must supply a value for form control at index: ${n}.`) }) } _allControlsDisabled() { for (const t of this.controls)
        if (t.enabled) return !1; return this.controls.length > 0 || this.disabled } _registerControl(t) { t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange) } }
  const Of = (() => Promise.resolve(null))(); class Af extends Zp { constructor(t, e) { super(), this.submitted = !1, this._directives = [], this.ngSubmit = new Vs, this.form = new Mf({}, _f(t), yf(e)) } ngAfterViewInit() { this._setUpdateStrategy() } get formDirective() { return this } get control() { return this.form } get path() { return [] } get controls() { return this.form.controls } addControl(t) { Of.then(() => { const e = this._findContainer(t.path);
        t.control = e.registerControl(t.name, t.control), ff(t.control, t), t.control.updateValueAndValidity({ emitEvent: !1 }), this._directives.push(t) }) } getControl(t) { return this.form.get(t.path) } removeControl(t) { Of.then(() => { const e = this._findContainer(t.path);
        e && e.removeControl(t.name),
          function(t, e) { const n = t.indexOf(e);
            n > -1 && t.splice(n, 1) }(this._directives, t) }) } addFormGroup(t) { Of.then(() => { const e = this._findContainer(t.path),
          n = new Mf({});
        (function(t, e) { null == t && mf(e, "Cannot find control with"), t.validator = Xp.compose([t.validator, e.validator]), t.asyncValidator = Xp.composeAsync([t.asyncValidator, e.asyncValidator]) })(n, t), e.registerControl(t.name, n), n.updateValueAndValidity({ emitEvent: !1 }) }) } removeFormGroup(t) { Of.then(() => { const e = this._findContainer(t.path);
        e && e.removeControl(t.name) }) } getFormGroup(t) { return this.form.get(t.path) } updateModel(t, e) { Of.then(() => { this.form.get(t.path).setValue(e) }) } setValue(t) { this.control.setValue(t) } onSubmit(t) { return this.submitted = !0, e = this._directives, this.form._syncPendingControls(), e.forEach(t => { const e = t.control; "submit" === e.updateOn && e._pendingChange && (t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1) }), this.ngSubmit.emit(t), !1; var e } onReset() { this.resetForm() } resetForm(t) { this.form.reset(t), this.submitted = !1 } _setUpdateStrategy() { this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn) } _findContainer(t) { return t.pop(), t.length ? this.form.get(t) : this.form } } class Df { static modelParentException() { throw new Error(`\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive "formControlName" instead.  Example:\n\n      ${lf.formControlName}\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ${lf.ngModelWithFormGroup}`) } static formGroupNameException() { throw new Error(`\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${lf.formGroupName}\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${lf.ngModelGroup}`) } static missingNameException() { throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">') } static modelGroupParentException() { throw new Error(`\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${lf.formGroupName}\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${lf.ngModelGroup}`) } static ngFormWarning() { console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ") } }
  const Nf = new St("NgFormSelectorWarning"); class Rf extends Zp { ngOnInit() { this._checkParentType(), this.formDirective.addFormGroup(this) } ngOnDestroy() { this.formDirective && this.formDirective.removeFormGroup(this) } get control() { return this.formDirective.getFormGroup(this) } get path() { return pf(this.name, this._parent) } get formDirective() { return this._parent ? this._parent.formDirective : null } get validator() { return _f(this._validators) } get asyncValidator() { return yf(this._asyncValidators) } _checkParentType() {} } class Vf extends Rf { constructor(t, e, n) { super(), this._parent = t, this._validators = e, this._asyncValidators = n } _checkParentType() { this._parent instanceof Vf || this._parent instanceof Af || Df.modelGroupParentException() } }
  const Lf = (() => Promise.resolve(null))(); class Uf extends Wp { constructor(t, e, n, r) { super(), this.control = new If, this._registered = !1, this.update = new Vs, this._parent = t, this._rawValidators = e || [], this._rawAsyncValidators = n || [], this.valueAccessor = function(t, e) { if (!e) return null;
        Array.isArray(e) || mf(t, "Value accessor was not provided as an array for form control with"); let n = void 0,
          r = void 0,
          s = void 0; return e.forEach(e => { e.constructor === Bp ? n = e : function(t) { return vf.some(e => t.constructor === e) }(e) ? (r && mf(t, "More than one built-in value accessor matches form control with"), r = e) : (s && mf(t, "More than one custom value accessor matches form control with"), s = e) }), s || r || n || (mf(t, "No valid value accessor for form control with"), null) }(this, r) } ngOnChanges(t) { this._checkForErrors(), this._registered || this._setUpControl(), "isDisabled" in t && this._updateDisabled(t),
        function(t, e) { if (!t.hasOwnProperty("model")) return !1; const n = t.model; return !!n.isFirstChange() || !Ze(e, n.currentValue) }(t, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model) } ngOnDestroy() { this.formDirective && this.formDirective.removeControl(this) } get path() { return this._parent ? pf(this.name, this._parent) : [this.name] } get formDirective() { return this._parent ? this._parent.formDirective : null } get validator() { return _f(this._rawValidators) } get asyncValidator() { return yf(this._rawAsyncValidators) } viewToModelUpdate(t) { this.viewModel = t, this.update.emit(t) } _setUpControl() { this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0 } _setUpdateStrategy() { this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn) } _isStandalone() { return !this._parent || !(!this.options || !this.options.standalone) } _setUpStandalone() { ff(this.control, this), this.control.updateValueAndValidity({ emitEvent: !1 }) } _checkForErrors() { this._isStandalone() || this._checkParentType(), this._checkName() } _checkParentType() {!(this._parent instanceof Vf) && this._parent instanceof Rf ? Df.formGroupNameException() : this._parent instanceof Vf || this._parent instanceof Af || Df.modelParentException() } _checkName() { this.options && this.options.name && (this.name = this.options.name), this._isStandalone() || this.name || Df.missingNameException() } _updateValue(t) { Lf.then(() => { this.control.setValue(t, { emitViewToModelChange: !1 }) }) } _updateDisabled(t) { const e = t.isDisabled.currentValue,
        n = "" === e || e && "false" !== e;
      Lf.then(() => { n && !this.control.disabled ? this.control.disable() : !n && this.control.disabled && this.control.enable() }) } } class jf {} class Ff { static withConfig(t) { return { ngModule: Ff, providers: [{ provide: Nf, useValue: t.warnOnDeprecatedNgFormSelector }] } } } class Hf { constructor(t) { this.patientComponent = t, this.object = { task_code: "Test", name: "Test", timein: "2019-10-20T09:30:00.000Z", timeout: "2019-10-20T09:30:00.000Z", description: "Test", staff: "Test", position: "Test" }, this.notFillField = !1, this.notSelect = !1, this.notStart = !1, this.notStop = !1 } ngOnInit() {} startTime() { const t = new Date,
        e = document.getElementById("timein"),
        n = document.getElementById("datein");
      e.innerHTML = t.toLocaleTimeString().slice(0, -3), n.innerHTML = t.toLocaleDateString(), document.getElementById("buttonin").setAttribute("disabled", ""), document.getElementById("buttonout").removeAttribute("disabled") } stopTime() { const t = new Date,
        e = document.getElementById("timeout"),
        n = document.getElementById("dateout");
      e.innerHTML = t.toLocaleTimeString().slice(0, -3), n.innerHTML = t.toLocaleDateString(), document.getElementById("buttonout").setAttribute("disabled", "") } resetTime() { document.getElementById("timein").innerHTML = "", document.getElementById("datein").innerHTML = "", document.getElementById("timeout").innerHTML = "", document.getElementById("dateout").innerHTML = "", document.getElementById("buttonin").removeAttribute("disabled") } closeDetails() { this.patientComponent.closeDetails() } saveSubtask() { let t = document.getElementById("subtaskDescription"),
        e = document.getElementById("datein"),
        n = document.getElementById("dateout"); "" == document.getElementById("subtaskName").value ? this.notSelect = !0 : (this.notSelect = !1, this.object.name = this.subtaskName), this.notStart = "" == e.textContent, this.notStop = "" !== e.textContent && "" == n.textContent, this.subtaskDatein = document.getElementById("datein").textContent, this.subtaskTimein = document.getElementById("timein").textContent, this.darrin = this.subtaskDatein.split("."), this.tarrin = this.subtaskTimein.split(":"), this.dateDatein = new Date(parseInt(this.darrin[2]), parseInt(this.darrin[1]) - 1, parseInt(this.darrin[0]), parseInt(this.tarrin[0]), parseInt(this.tarrin[1])), this.object.timein = this.dateDatein.toISOString(), this.subtaskDateout = document.getElementById("dateout").textContent, this.subtaskTimeout = document.getElementById("timeout").textContent, this.darrout = this.subtaskDateout.split("."), this.tarrout = this.subtaskTimeout.split(":"), this.dateDateout = new Date(parseInt(this.darrout[2]), parseInt(this.darrout[1]) - 1, parseInt(this.darrout[0]), parseInt(this.tarrout[0]), parseInt(this.tarrout[1])), this.object.timeout = this.dateDateout.toISOString(), this.subtaskStaff = document.getElementById("subtaskStaff").textContent, this.object.staff = this.subtaskStaff, this.subtaskPosition = document.getElementById("subtaskPosition").textContent, this.object.position = this.subtaskPosition, "" == t.value ? (this.notFillField = !0, t.style.borderColor = "red", this.patientComponent.openDetails()) : (this.object.description = this.subtaskDescription, this.patientComponent.dataPatient.tasks.push(this.object), this.patientComponent.closeDetails()) } } class $f { constructor(t, e, n, r) { this.route = t, this.unitsService = e, this.taskService = n, this.location = r, this.openTask = !1, this.patient_info = !0, this.patient_history = !1, this.patient_labs = !1, this.isDisabled = !0, this.buttonSaveTask = !1, this.objectTask = { task_number: 339, task_code: "DIAGtest", task__status: "Done", dx: "Test", timeOpen: "2019-09-01T16:51:50.969Z", timeClose: new Date, description: "Test", staff: "Test", position: "Test" }, this.taskDescription = this.dataPatient } ngOnInit() { this.getPatient(), this.getDataTask() } getPatient() { const t = this.route.snapshot.paramMap.get("linkName").replace(/([A-Z])/g, " $1").trim();
      this.unitsService.getPatient(t).subscribe(t => this.patient = t), this.dataPatient = this.patient.patient.find(e => e.name === t) } goBack() { this.location.back() } openDetails() { this.openTask = !0 } closeDetails() { this.openTask = !1 } getDataTask() { this.taskService.getDataTask().subscribe(t => this.tasks = t) } getPatientInfo() { document.getElementById("patient-info").classList.add("active"), document.getElementById("patient-history").classList.remove("active"), document.getElementById("patient-labs").classList.remove("active"), this.patient_info = !0, this.patient_history = !1, this.patient_labs = !1 } getPatientHistory() { document.getElementById("patient-info").classList.remove("active"), document.getElementById("patient-history").classList.add("active"), document.getElementById("patient-labs").classList.remove("active"), this.patient_info = !1, this.patient_history = !0, this.patient_labs = !1 } getPatientLab() { document.getElementById("patient-info").classList.remove("active"), document.getElementById("patient-history").classList.remove("active"), document.getElementById("patient-labs").classList.add("active"), this.patient_info = !1, this.patient_history = !1, this.patient_labs = !0 } editTextarea() { this.isDisabled = !this.isDisabled } openTaskDescription(t) { this.taskDescription = t } closeTaskDescription() { this.taskDescription = !1 } statusTask(t) { this.buttonSaveTask = "done" == t } saveTask() { this.objectTask.task_number = +document.getElementById("task_number").textContent, this.darrin = document.getElementsByClassName("sign-block__date")[0].textContent.split("."), this.tarrin = document.getElementsByClassName("sign-block__time")[0].textContent.split(":"), this.timeOpen = new Date(parseInt(this.darrin[2]), parseInt(this.darrin[1]) - 1, parseInt(this.darrin[0]), parseInt(this.tarrin[0]), parseInt(this.tarrin[1])), this.objectTask.timeOpen = this.timeOpen, this.tasks.push(this.objectTask), this.dataPatient.task__description = "", this.dataPatient.dx = "", this.dataPatient.tasks = [] } }
  var zf = er({ encapsulation: 0, styles: [
      [".overlay_popup[_ngcontent-%COMP%]{position:fixed;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:2;cursor:pointer}.task-details[_ngcontent-%COMP%]{width:800px;margin-left:-400px;margin-top:-200px;padding:20px;position:fixed;z-index:3;top:50%;left:50%;background-color:#fff;border:2px solid #00c8ff;outline:0;box-shadow:0 30px 50px rgba(0,0,0,.7)}.task-details[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:230px;padding:5px 10px;font-family:Roboto;font-style:normal;font-size:14px;line-height:16px;background-color:#70c4b4;border-radius:5px;border:1px solid #70c4b4;color:#fff;letter-spacing:1px}.task-details__person[_ngcontent-%COMP%]{position:absolute}.task-details__personalName[_ngcontent-%COMP%]{margin:0;font-family:Roboto Medium;font-style:normal;font-size:15px;line-height:17px}.task-details__personalTitle[_ngcontent-%COMP%]{margin:0;font-family:Roboto Medium;font-style:normal;font-size:13px;line-height:17px}.task-details__title[_ngcontent-%COMP%]{text-align:center}.task-details__top-action[_ngcontent-%COMP%]{display:flex;position:relative;justify-content:space-between;align-items:center;margin-bottom:20px;height:80px}.task-details__timing[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:400px;height:80px}.task-details__timing-wrap[_ngcontent-%COMP%]{text-align:center}.task-details__date[_ngcontent-%COMP%]{margin-bottom:0;font-family:Roboto Medium;font-style:normal;font-size:15px;line-height:17px;color:#000}.task-details__time[_ngcontent-%COMP%]{margin:0;font-family:Roboto Medium;font-style:normal;font-size:12px;line-height:17px;color:#000;text-align:center}.task-details__button[_ngcontent-%COMP%]{padding:7px 15px 5px;font-family:Roboto;font-style:normal;font-size:16px;line-height:18px;color:#fff;background-color:#70c4b4;border-radius:5px;border:0;text-transform:uppercase;cursor:pointer}.task-details__button[_ngcontent-%COMP%]:disabled{background-color:#43afff;opacity:.5;cursor:default}.task-details__bottom-action[_ngcontent-%COMP%]{width:100%}.task-details__bottom-action[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:calc(100% - 20px);padding:10px;margin-bottom:30px}.task-details__notSelect[_ngcontent-%COMP%]{position:absolute;bottom:0;color:red}.task-details__notSelect[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.task-details__errorText[_ngcontent-%COMP%]{margin:0;position:relative;top:-25px;color:red}.bottom-action__buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.timingin[_ngcontent-%COMP%]{position:relative}.timingin__notStart[_ngcontent-%COMP%]{position:relative;bottom:15px;color:red}"]
    ], data: {} });

  function Bf(t) { return go(0, [(t()(), to(0, 0, null, null, 2, "div", [
      ["class", "task-details__notSelect"]
    ], null, null, null, null, null)), (t()(), to(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Please select name of subtast"]))], null, null) }

  function Gf(t) { return go(0, [(t()(), to(0, 0, null, null, 2, "div", [
      ["class", "timingin__notStart"]
    ], null, null, null, null, null)), (t()(), to(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Please start timing"]))], null, null) }

  function Zf(t) { return go(0, [(t()(), to(0, 0, null, null, 2, "div", [
      ["class", "timingin__notStart"]
    ], null, null, null, null, null)), (t()(), to(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Please stop timing"]))], null, null) }

  function qf(t) { return go(0, [(t()(), to(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), to(1, 0, null, null, 1, "p", [
      ["class", "task-details__errorText"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Please fill the field"]))], null, null) }

  function Wf(t) { return go(0, [(t()(), to(0, 0, null, null, 62, "div", [], null, null, null, null, null)), (t()(), to(1, 0, null, null, 0, "div", [
      ["class", "overlay_popup"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.closeDetails() && r), r }), null, null)), (t()(), to(2, 0, null, null, 60, "div", [
      ["class", "task-details"]
    ], null, null, null, null, null)), (t()(), to(3, 0, null, null, 4, "div", [
      ["class", "task-details__person"]
    ], null, null, null, null, null)), (t()(), to(4, 0, null, null, 1, "p", [
      ["class", "task-details__personalName"],
      ["id", "subtaskStaff"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Felix Weiss"])), (t()(), to(6, 0, null, null, 1, "p", [
      ["class", "task-details__personalTitle"],
      ["id", "subtaskPosition"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Doctor"])), (t()(), to(8, 0, null, null, 1, "h2", [
      ["class", "task-details__title"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Subtask"])), (t()(), to(10, 0, null, null, 38, "div", [
      ["class", "task-details__top-action"]
    ], null, null, null, null, null)), (t()(), to(11, 0, null, null, 17, "select", [
      ["id", "subtaskName"]
    ], [
      [2, "ng-untouched", null],
      [2, "ng-touched", null],
      [2, "ng-pristine", null],
      [2, "ng-dirty", null],
      [2, "ng-valid", null],
      [2, "ng-invalid", null],
      [2, "ng-pending", null]
    ], [
      [null, "ngModelChange"],
      [null, "change"],
      [null, "blur"]
    ], (function(t, e, n) { var r = !0,
        s = t.component; return "change" === e && (r = !1 !== Yr(t, 12).onChange(n.target.value) && r), "blur" === e && (r = !1 !== Yr(t, 12).onTouched() && r), "ngModelChange" === e && (r = !1 !== (s.subtaskName = n) && r), r }), null, null)), cs(12, 16384, null, 0, uf, [gn, cn], null, null), ds(1024, null, $p, (function(t) { return [t] }), [uf]), cs(14, 671744, null, 0, Uf, [
      [8, null],
      [8, null],
      [8, null],
      [6, $p]
    ], { model: [0, "model"] }, { update: "ngModelChange" }), ds(2048, null, Wp, null, [Uf]), cs(16, 16384, null, 0, Kp, [
      [4, Wp]
    ], null, null), (t()(), to(17, 0, null, null, 3, "option", [
      ["value", "Heart rate check"]
    ], null, null, null, null, null)), cs(18, 147456, null, 0, cf, [cn, gn, [2, uf]], { value: [0, "value"] }, null), cs(19, 147456, null, 0, df, [cn, gn, [8, null]], { value: [0, "value"] }, null), (t()(), ho(-1, null, ["Heart rate check"])), (t()(), to(21, 0, null, null, 3, "option", [
      ["value", "Therapy and treatment"]
    ], null, null, null, null, null)), cs(22, 147456, null, 0, cf, [cn, gn, [2, uf]], { value: [0, "value"] }, null), cs(23, 147456, null, 0, df, [cn, gn, [8, null]], { value: [0, "value"] }, null), (t()(), ho(-1, null, ["Therapy and treatment"])), (t()(), to(25, 0, null, null, 3, "option", [
      ["value", "Blood pressure control"]
    ], null, null, null, null, null)), cs(26, 147456, null, 0, cf, [cn, gn, [2, uf]], { value: [0, "value"] }, null), cs(27, 147456, null, 0, df, [cn, gn, [8, null]], { value: [0, "value"] }, null), (t()(), ho(-1, null, ["Blood pressure control"])), (t()(), Xi(16777216, null, null, 1, null, Bf)), cs(30, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), to(31, 0, null, null, 17, "div", [
      ["class", "task-details__timing"]
    ], null, null, null, null, null)), (t()(), to(32, 0, null, null, 6, "div", [
      ["class", "task-details__timing-wrap timingin"]
    ], null, null, null, null, null)), (t()(), to(33, 0, null, null, 1, "button", [
      ["class", "task-details__button"],
      ["id", "buttonin"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.startTime() && r), r }), null, null)), (t()(), ho(-1, null, ["Start"])), (t()(), to(35, 0, null, null, 0, "p", [
      ["class", "task-details__date"],
      ["id", "datein"]
    ], null, null, null, null, null)), (t()(), to(36, 0, null, null, 0, "p", [
      ["class", "task-details__time"],
      ["id", "timein"]
    ], null, null, null, null, null)), (t()(), Xi(16777216, null, null, 1, null, Gf)), cs(38, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), to(39, 0, null, null, 6, "div", [
      ["class", "task-details__timing-wrap"]
    ], null, null, null, null, null)), (t()(), to(40, 0, null, null, 1, "button", [
      ["class", "task-details__button"],
      ["disabled", ""],
      ["id", "buttonout"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.stopTime() && r), r }), null, null)), (t()(), ho(-1, null, ["Stop"])), (t()(), to(42, 0, null, null, 0, "p", [
      ["class", "task-details__date"],
      ["id", "dateout"]
    ], null, null, null, null, null)), (t()(), to(43, 0, null, null, 0, "p", [
      ["class", "task-details__time"],
      ["id", "timeout"]
    ], null, null, null, null, null)), (t()(), Xi(16777216, null, null, 1, null, Zf)), cs(45, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), to(46, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), to(47, 0, null, null, 1, "button", [
      ["class", "task-details__button"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.resetTime() && r), r }), null, null)), (t()(), ho(-1, null, ["New start"])), (t()(), to(49, 0, null, null, 13, "div", [
      ["class", "task-details__bottom-action"]
    ], null, null, null, null, null)), (t()(), to(50, 0, null, null, 5, "textarea", [
      ["cols", "30"],
      ["id", "subtaskDescription"],
      ["name", ""],
      ["placeholder", "Description of the subtask"],
      ["rows", "10"]
    ], [
      [2, "ng-untouched", null],
      [2, "ng-touched", null],
      [2, "ng-pristine", null],
      [2, "ng-dirty", null],
      [2, "ng-valid", null],
      [2, "ng-invalid", null],
      [2, "ng-pending", null]
    ], [
      [null, "ngModelChange"],
      [null, "input"],
      [null, "blur"],
      [null, "compositionstart"],
      [null, "compositionend"]
    ], (function(t, e, n) { var r = !0,
        s = t.component; return "input" === e && (r = !1 !== Yr(t, 51)._handleInput(n.target.value) && r), "blur" === e && (r = !1 !== Yr(t, 51).onTouched() && r), "compositionstart" === e && (r = !1 !== Yr(t, 51)._compositionStart() && r), "compositionend" === e && (r = !1 !== Yr(t, 51)._compositionEnd(n.target.value) && r), "ngModelChange" === e && (r = !1 !== (s.subtaskDescription = n) && r), r }), null, null)), cs(51, 16384, null, 0, Bp, [gn, cn, [2, zp]], null, null), ds(1024, null, $p, (function(t) { return [t] }), [Bp]), cs(53, 671744, null, 0, Uf, [
      [8, null],
      [8, null],
      [8, null],
      [6, $p]
    ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), ds(2048, null, Wp, null, [Uf]), cs(55, 16384, null, 0, Kp, [
      [4, Wp]
    ], null, null), (t()(), Xi(16777216, null, null, 1, null, qf)), cs(57, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), to(58, 0, null, null, 4, "div", [
      ["class", "bottom-action__buttons"]
    ], null, null, null, null, null)), (t()(), to(59, 0, null, null, 1, "button", [
      ["class", "task-details__button"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.saveSubtask() && r), r }), null, null)), (t()(), ho(-1, null, ["Save"])), (t()(), to(61, 0, null, null, 1, "button", [
      ["class", "task-details__button"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.closeDetails() && r), r }), null, null)), (t()(), ho(-1, null, ["Close"]))], (function(t, e) { var n = e.component;
      t(e, 14, 0, n.subtaskName), t(e, 18, 0, "Heart rate check"), t(e, 19, 0, "Heart rate check"), t(e, 22, 0, "Therapy and treatment"), t(e, 23, 0, "Therapy and treatment"), t(e, 26, 0, "Blood pressure control"), t(e, 27, 0, "Blood pressure control"), t(e, 30, 0, n.notSelect), t(e, 38, 0, n.notStart), t(e, 45, 0, n.notStop), t(e, 53, 0, "", n.subtaskDescription), t(e, 57, 0, n.notFillField) }), (function(t, e) { t(e, 11, 0, Yr(e, 16).ngClassUntouched, Yr(e, 16).ngClassTouched, Yr(e, 16).ngClassPristine, Yr(e, 16).ngClassDirty, Yr(e, 16).ngClassValid, Yr(e, 16).ngClassInvalid, Yr(e, 16).ngClassPending), t(e, 50, 0, Yr(e, 55).ngClassUntouched, Yr(e, 55).ngClassTouched, Yr(e, 55).ngClassPristine, Yr(e, 55).ngClassDirty, Yr(e, 55).ngClassValid, Yr(e, 55).ngClassInvalid, Yr(e, 55).ngClassPending) })) }
  const Qf = [{ task_number: 336, task_code: "DIAG01", task__status: "Done", dx: "Grippe", timeOpen: "2019-09-01T16:51:50.969Z", timeClose: "2019-09-01T17:01:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", staff: "Dominik Huber", position: "GHS" }, { task_number: 337, task_code: "DIAG02", task__status: "Done", dx: "Osteoarthrose", timeOpen: "2019-11-10T14:51:50.969Z", timeClose: "2019-12-21T15:51:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Katrin Sommer", position: "Doctor" }, { task_number: 338, task_code: "DIAG03", task__status: "Done", dx: "Hypertonische Krisen", timeOpen: "2019-09-21T15:31:50.969Z", timeClose: "2019-09-21T15:40:50.969Z", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", staff: "Ulrich Krenn", position: "Care assistant" }];
  let Kf = (() => { class t { constructor() {} getDataTask() { return Ea(Qf) } } return t.ngInjectableDef = pt({ factory: function() { return new t }, token: t, providedIn: "root" }), t })();
  var Yf = er({ encapsulation: 0, styles: [
      ['@charset "UTF-8";.patient[_ngcontent-%COMP%]{width:1100px;margin-right:auto;margin-left:auto}.patient__back-button[_ngcontent-%COMP%]{margin-top:22px;margin-left:12px;margin-bottom:22px;background:0 0;border:none;font-family:Roboto Medium;font-style:normal;font-size:14px;line-height:16px;color:#70c4b4;cursor:pointer}.patient__back-button[_ngcontent-%COMP%]:before{content:" \u276e";margin-right:3px}.patient__data[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:28px}.patient__blockleft[_ngcontent-%COMP%]{display:flex;width:400px;height:125px;background:#fff;box-shadow:5px 10px 10px rgba(0,0,0,.05),-5px -5px 10px rgba(0,0,0,.05);border-radius:10px}.patient__foto[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;margin:22px 30px 23px}.patient__name[_ngcontent-%COMP%]{margin-top:26px;margin-bottom:7px;font-family:Roboto Medium;font-style:normal;font-size:18px;line-height:22px;color:#000}.patient__adress[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-size:12px;line-height:16px}.patient__blockright[_ngcontent-%COMP%]{display:flex;width:670px;height:125px;background:#fff;box-shadow:-5px -5px 10px rgba(0,0,0,.05),5px 10px 10px rgba(0,0,0,.05);border-radius:10px}.patient__blockleft-age[_ngcontent-%COMP%], .patient__blockleft-sex[_ngcontent-%COMP%]{position:relative;width:223px}.patient__blockleft-age[_ngcontent-%COMP%]:after, .patient__blockleft-sex[_ngcontent-%COMP%]:after{position:absolute;content:"";right:0;top:25px;width:1px;height:75px;background:#f1f1f1}.patient__age-text[_ngcontent-%COMP%], .patient__date-text[_ngcontent-%COMP%], .patient__sex-text[_ngcontent-%COMP%]{margin:23px 0 21px 30px;font-family:Roboto;font-style:normal;font-size:12px;line-height:16px;color:#868686}.patient__age[_ngcontent-%COMP%], .patient__date[_ngcontent-%COMP%], .patient__sex[_ngcontent-%COMP%]{margin-left:30px;font-family:Roboto;font-style:normal;font-size:30px;line-height:34px;color:#141a39}.task[_ngcontent-%COMP%]{margin-bottom:50px}.task__titles-wrap[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:435px}.task__title[_ngcontent-%COMP%]{margin:0;padding:6px 14px 6px 15px;font-family:Roboto;font-style:normal;font-size:18px;line-height:22px;border-radius:10px 10px 0 0;color:#868686;background-color:#f0f0f0;cursor:pointer}.task__title.active[_ngcontent-%COMP%]{font-family:Roboto Medium;color:#000;background:#fff;box-shadow:7px -5px 10px rgba(0,0,0,.05),-7px 12px 11px rgba(0,0,0,.05),-8px -9px 10px rgba(0,0,0,.05)}.task__description[_ngcontent-%COMP%]{position:relative;background-color:#fff}.task[_ngcontent-%COMP%]   .history[_ngcontent-%COMP%], .task[_ngcontent-%COMP%]   .labs[_ngcontent-%COMP%], .task__info-wrap[_ngcontent-%COMP%]{position:relative;width:1100px;box-shadow:5px 10px 10px rgba(0,0,0,.05),-5px 10px 10px rgba(0,0,0,.05);border-radius:0 0 10px 10px}.task__number[_ngcontent-%COMP%]{margin-top:0;margin-left:50px;margin-bottom:1.83px;padding-top:15.02px;font-family:Roboto;font-style:normal;font-size:18px;line-height:22px;color:#b5b4b8}.task__edit[_ngcontent-%COMP%]{position:absolute;right:55px;font-size:16px;top:15px}.task__edit[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%]:before{color:#70c4b4}.task__sickDescription[_ngcontent-%COMP%]{margin-left:50px;margin-bottom:18px;padding:10px 11px;width:1000px;height:224px;background:#fff;border:1px solid #b5b4b8;box-sizing:border-box;border-radius:10px;font-family:Roboto;font-style:normal;font-size:12px;line-height:16px;color:#3b3b3d}.task__description-bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-left:50px;margin-right:50px}.task__status-title[_ngcontent-%COMP%]{margin:0 0 8px;font-family:Roboto;font-style:normal;font-size:18px;line-height:22px;color:#b5b4b8}.task__status[_ngcontent-%COMP%]{margin-bottom:47px;padding:5px 13px 4px 12px;background:#70c4b4;border:1px solid #54cab4;box-sizing:border-box;border-radius:5px;font-family:Roboto;font-style:normal;font-size:18px;line-height:22px;color:#fff;-webkit-appearance:button;-moz-appearance:button;appearance:button;cursor:pointer;-moz-text-align-last:center;text-align-last:center}.task__status-item[_ngcontent-%COMP%]{background:#43afff;border-radius:0 0 7px 7px}.task__diagnos-title[_ngcontent-%COMP%]{margin-top:0;margin-bottom:8px;font-family:Roboto;font-style:normal;font-weight:500;font-size:18px;line-height:22px;color:#b5b4b8}.task__diagnos[_ngcontent-%COMP%]{padding:5px 10px;width:500px;height:35px;border:1px solid #b5b4b8;box-sizing:border-box;border-radius:10px}.history[_ngcontent-%COMP%]{position:relative;background-color:#fff}.history__list[_ngcontent-%COMP%]{padding:50px;width:100%}.history__list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left}.history__list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 0}.labs[_ngcontent-%COMP%]{position:relative;background-color:#fff}.labs__list[_ngcontent-%COMP%]{padding:50px;width:100%}.labs__list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left}.labs__list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 0}.sign__button[_ngcontent-%COMP%], .sign__saveTask[_ngcontent-%COMP%]{margin-bottom:70px;padding:5px 24px;font-family:Roboto;font-style:normal;font-size:16px;line-height:18px;color:#fff;border-radius:5px;border:0;text-transform:uppercase;cursor:pointer}.sign[_ngcontent-%COMP%]{margin-bottom:50px}.sign__buttons[_ngcontent-%COMP%]{display:flex;justify-content:center}.sign__button[_ngcontent-%COMP%]{background-color:#43afff}.sign__button[_ngcontent-%COMP%]:hover{background-color:#00c8ff}.sign__saveTask[_ngcontent-%COMP%]{background-color:#70c4b4;margin-left:30px}.sign__saveTask[_ngcontent-%COMP%]:hover{background-color:#54cab4}.sign-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.sign-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.sign-block__taskName[_ngcontent-%COMP%]{width:20vw;font-family:Roboto Medium;font-style:normal;font-weight:500;font-size:15px;line-height:17px;color:#000}.sign-block__details[_ngcontent-%COMP%]{width:20vw;font-family:Roboto;font-style:normal;font-size:15px;line-height:17px;color:#43afff;text-align:center;cursor:pointer}.sign-block__description-block[_ngcontent-%COMP%]{width:500px;margin-left:-250px;position:fixed;z-index:10;top:50%;left:50%;background-color:#fff;border:2px solid #70c4b4;outline:0;box-shadow:0 8px 23px 0 rgba(0,0,0,.3)}.sign-block__description-block[_ngcontent-%COMP%]   .overlay_popup[_ngcontent-%COMP%]{position:fixed;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.15);z-index:1;cursor:pointer}.sign-block__description-wrap[_ngcontent-%COMP%]{position:relative;cursor:default;z-index:2}.sign-block[_ngcontent-%COMP%]   .description_close[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-30px;width:22px;height:22px;font-size:0;border:0;outline:0;cursor:pointer;background:0 0}.sign-block[_ngcontent-%COMP%]   .description_close[_ngcontent-%COMP%]::after{transform:rotate(-45deg)}.sign-block[_ngcontent-%COMP%]   .description_close[_ngcontent-%COMP%]::before{transform:rotate(45deg)}.sign-block[_ngcontent-%COMP%]   .description_close[_ngcontent-%COMP%]::after, .sign-block[_ngcontent-%COMP%]   .description_close[_ngcontent-%COMP%]::before{content:"";position:absolute;top:10px;left:2px;width:19px;height:3px;background-color:#d0d0d0;border-radius:1px}.sign-block__description[_ngcontent-%COMP%]{padding:15px;background-color:#fff}.sign-block__date-wrap[_ngcontent-%COMP%]{width:20vw;text-align:center}.sign-block__date[_ngcontent-%COMP%]{font-family:Roboto Medium;font-style:normal;font-size:15px;line-height:17px;color:#000}.sign-block__time[_ngcontent-%COMP%]{font-family:Roboto Medium;font-style:normal;font-size:12px;line-height:17px;color:#000}.sign-block__persolnal-wrap[_ngcontent-%COMP%]{width:20vw;text-align:right}.sign-block__personalName[_ngcontent-%COMP%]{font-family:Roboto Medium;font-style:normal;font-size:18px;line-height:22px;color:#000}.sign-block__personalTitle[_ngcontent-%COMP%]{font-family:Roboto Medium;font-style:normal;font-size:15px;line-height:17px;color:#b5b4b8}']
    ], data: {} });

  function Jf(t) { return go(0, [(t()(), to(0, 0, null, null, 25, "section", [], null, null, null, null, null)), (t()(), to(1, 0, null, null, 24, "div", [
      ["class", "patient__data"]
    ], null, null, null, null, null)), (t()(), to(2, 0, null, null, 6, "div", [
      ["class", "patient__blockleft"]
    ], null, null, null, null, null)), (t()(), to(3, 0, null, null, 0, "img", [
      ["alt", "Photo of the patient"],
      ["class", "patient__foto"]
    ], [
      [8, "src", 4]
    ], null, null, null, null)), (t()(), to(4, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), to(5, 0, null, null, 1, "h2", [
      ["class", "patient__name"]
    ], null, null, null, null, null)), (t()(), ho(6, null, ["", ""])), (t()(), to(7, 0, null, null, 1, "p", [
      ["class", "patient__adress"]
    ], null, null, null, null, null)), (t()(), ho(8, null, ["", ""])), (t()(), to(9, 0, null, null, 16, "div", [
      ["class", "patient__blockright"]
    ], null, null, null, null, null)), (t()(), to(10, 0, null, null, 4, "div", [
      ["class", "patient__blockleft-age"]
    ], null, null, null, null, null)), (t()(), to(11, 0, null, null, 1, "h2", [
      ["class", "patient__age-text"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Age"])), (t()(), to(13, 0, null, null, 1, "p", [
      ["class", "patient__age"]
    ], null, null, null, null, null)), (t()(), ho(14, null, ["", ""])), (t()(), to(15, 0, null, null, 4, "div", [
      ["class", "patient__blockleft-sex"]
    ], null, null, null, null, null)), (t()(), to(16, 0, null, null, 1, "h2", [
      ["class", "patient__sex-text"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Sex"])), (t()(), to(18, 0, null, null, 1, "p", [
      ["class", "patient__sex"]
    ], null, null, null, null, null)), (t()(), ho(19, null, ["", ""])), (t()(), to(20, 0, null, null, 5, "div", [], null, null, null, null, null)), (t()(), to(21, 0, null, null, 1, "h2", [
      ["class", "patient__date-text"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Last visit"])), (t()(), to(23, 0, null, null, 2, "p", [
      ["class", "patient__date"]
    ], null, null, null, null, null)), (t()(), ho(24, null, ["", ""])), co(25, 2)], null, (function(t, e) { var n = e.component;
      t(e, 3, 0, Tr(1, "", n.dataPatient.foto, "")), t(e, 6, 0, n.dataPatient.name), t(e, 8, 0, n.dataPatient.adress), t(e, 14, 0, n.dataPatient.age), t(e, 19, 0, n.dataPatient.sex); var r = Jn(e, 24, 0, t(e, 25, 0, Yr(e.parent, 0), n.dataPatient.date, "M/d/yy"));
      t(e, 24, 0, r) })) }

  function Xf(t) { return go(0, [(t()(), to(0, 0, null, null, 35, "div", [
      ["class", "task__description tabcontent"],
      ["id", "info"]
    ], null, null, null, null, null)), (t()(), to(1, 0, null, null, 34, "div", [
      ["class", "task__info-wrap"]
    ], null, null, null, null, null)), (t()(), to(2, 0, null, null, 3, "h2", [
      ["class", "task__number"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["\u2116 "])), (t()(), to(4, 0, null, null, 1, "span", [
      ["id", "task_number"]
    ], null, null, null, null, null)), (t()(), ho(5, null, ["", ""])), (t()(), to(6, 0, null, null, 1, "div", [
      ["class", "task__edit"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.editTextarea() && r), r }), null, null)), (t()(), to(7, 0, null, null, 0, "i", [
      ["class", "fas fa-edit"]
    ], null, null, null, null, null)), (t()(), to(8, 0, null, null, 5, "textarea", [
      ["class", "task__sickDescription"],
      ["id", "task__sickDescription"],
      ["placeholder", "Description of the disease"]
    ], [
      [2, "ng-untouched", null],
      [2, "ng-touched", null],
      [2, "ng-pristine", null],
      [2, "ng-dirty", null],
      [2, "ng-valid", null],
      [2, "ng-invalid", null],
      [2, "ng-pending", null]
    ], [
      [null, "ngModelChange"],
      [null, "input"],
      [null, "blur"],
      [null, "compositionstart"],
      [null, "compositionend"]
    ], (function(t, e, n) { var r = !0,
        s = t.component; return "input" === e && (r = !1 !== Yr(t, 9)._handleInput(n.target.value) && r), "blur" === e && (r = !1 !== Yr(t, 9).onTouched() && r), "compositionstart" === e && (r = !1 !== Yr(t, 9)._compositionStart() && r), "compositionend" === e && (r = !1 !== Yr(t, 9)._compositionEnd(n.target.value) && r), "ngModelChange" === e && (r = !1 !== (s.dataPatient.task__description = n) && r), r }), null, null)), cs(9, 16384, null, 0, Bp, [gn, cn, [2, zp]], null, null), ds(1024, null, $p, (function(t) { return [t] }), [Bp]), cs(11, 671744, null, 0, Uf, [
      [8, null],
      [8, null],
      [8, null],
      [6, $p]
    ], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), ds(2048, null, Wp, null, [Uf]), cs(13, 16384, null, 0, Kp, [
      [4, Wp]
    ], null, null), (t()(), to(14, 0, null, null, 21, "div", [
      ["class", "task__description-bottom"]
    ], null, null, null, null, null)), (t()(), to(15, 0, null, null, 11, "div", [], null, null, null, null, null)), (t()(), to(16, 0, null, null, 1, "h3", [
      ["class", "task__status-title"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Status task"])), (t()(), to(18, 0, null, null, 8, "select", [
      ["class", "task__status"],
      ["id", "statusTask"]
    ], null, [
      [null, "change"]
    ], (function(t, e, n) { var r = !0; return "change" === e && (r = !1 !== t.component.statusTask(n.target.value) && r), r }), null, null)), (t()(), to(19, 0, null, null, 3, "option", [
      ["class", "task__status-item"],
      ["value", "execution"]
    ], null, null, null, null, null)), cs(20, 147456, null, 0, cf, [cn, gn, [8, null]], { value: [0, "value"] }, null), cs(21, 147456, null, 0, df, [cn, gn, [8, null]], { value: [0, "value"] }, null), (t()(), ho(-1, null, ["Execution"])), (t()(), to(23, 0, null, null, 3, "option", [
      ["class", "task__status-item"],
      ["value", "done"]
    ], null, null, null, null, null)), cs(24, 147456, null, 0, cf, [cn, gn, [8, null]], { value: [0, "value"] }, null), cs(25, 147456, null, 0, df, [cn, gn, [8, null]], { value: [0, "value"] }, null), (t()(), ho(-1, null, ["Done"])), (t()(), to(27, 0, null, null, 8, "div", [], null, null, null, null, null)), (t()(), to(28, 0, null, null, 1, "h3", [
      ["class", "task__diagnos-title"]
    ], null, null, null, null, null)), (t()(), ho(-1, null, ["Diagnosis"])), (t()(), to(30, 0, null, null, 5, "input", [
      ["class", "task__diagnos"],
      ["placeholder", "Diagnosis.."],
      ["type", "text"]
    ], [
      [2, "ng-untouched", null],
      [2, "ng-touched", null],
      [2, "ng-pristine", null],
      [2, "ng-dirty", null],
      [2, "ng-valid", null],
      [2, "ng-invalid", null],
      [2, "ng-pending", null]
    ], [
      [null, "ngModelChange"],
      [null, "input"],
      [null, "blur"],
      [null, "compositionstart"],
      [null, "compositionend"]
    ], (function(t, e, n) { var r = !0,
        s = t.component; return "input" === e && (r = !1 !== Yr(t, 31)._handleInput(n.target.value) && r), "blur" === e && (r = !1 !== Yr(t, 31).onTouched() && r), "compositionstart" === e && (r = !1 !== Yr(t, 31)._compositionStart() && r), "compositionend" === e && (r = !1 !== Yr(t, 31)._compositionEnd(n.target.value) && r), "ngModelChange" === e && (r = !1 !== (s.dataPatient.dx = n) && r), r }), null, null)), cs(31, 16384, null, 0, Bp, [gn, cn, [2, zp]], null, null), ds(1024, null, $p, (function(t) { return [t] }), [Bp]), cs(33, 671744, null, 0, Uf, [
      [8, null],
      [8, null],
      [8, null],
      [6, $p]
    ], { model: [0, "model"] }, { update: "ngModelChange" }), ds(2048, null, Wp, null, [Uf]), cs(35, 16384, null, 0, Kp, [
      [4, Wp]
    ], null, null)], (function(t, e) { var n = e.component;
      t(e, 11, 0, n.isDisabled, n.dataPatient.task__description), t(e, 20, 0, "execution"), t(e, 21, 0, "execution"), t(e, 24, 0, "done"), t(e, 25, 0, "done"), t(e, 33, 0, n.dataPatient.dx) }), (function(t, e) { t(e, 5, 0, e.component.dataPatient.task_number), t(e, 8, 0, Yr(e, 13).ngClassUntouched, Yr(e, 13).ngClassTouched, Yr(e, 13).ngClassPristine, Yr(e, 13).ngClassDirty, Yr(e, 13).ngClassValid, Yr(e, 13).ngClassInvalid, Yr(e, 13).ngClassPending), t(e, 30, 0, Yr(e, 35).ngClassUntouched, Yr(e, 35).ngClassTouched, Yr(e, 35).ngClassPristine, Yr(e, 35).ngClassDirty, Yr(e, 35).ngClassValid, Yr(e, 35).ngClassInvalid, Yr(e, 35).ngClassPending) })) }

  function tg(t) { return go(0, [(t()(), to(0, 0, null, null, 12, "tr", [], null, null, null, null, null)), (t()(), to(1, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(2, null, ["", ""])), (t()(), to(3, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(4, null, ["", ""])), (t()(), to(5, 0, null, null, 2, "td", [], null, null, null, null, null)), (t()(), ho(6, null, ["", ""])), co(7, 2), (t()(), to(8, 0, null, null, 2, "td", [], null, null, null, null, null)), (t()(), ho(9, null, ["", ""])), co(10, 2), (t()(), to(11, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(12, null, ["", ""]))], null, (function(t, e) { t(e, 2, 0, e.context.$implicit.task_number), t(e, 4, 0, e.context.$implicit.task_code); var n = Jn(e, 6, 0, t(e, 7, 0, Yr(e.parent.parent, 0), e.context.$implicit.timeOpen, "medium"));
      t(e, 6, 0, n); var r = Jn(e, 9, 0, t(e, 10, 0, Yr(e.parent.parent, 0), e.context.$implicit.timeClose, "medium"));
      t(e, 9, 0, r), t(e, 12, 0, e.context.$implicit.task__status) })) }

  function eg(t) { return go(0, [(t()(), to(0, 0, null, null, 19, "div", [
      ["class", "history tabcontent"],
      ["id", "history"]
    ], null, null, null, null, null)), (t()(), to(1, 0, null, null, 18, "table", [
      ["class", "history__list"]
    ], null, null, null, null, null)), (t()(), to(2, 0, null, null, 15, "tr", [], null, null, null, null, null)), (t()(), to(3, 0, null, null, 2, "th", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Number "])), (t()(), to(5, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), to(6, 0, null, null, 2, "th", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Name/Code "])), (t()(), to(8, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), to(9, 0, null, null, 2, "th", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Creation Date "])), (t()(), to(11, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), to(12, 0, null, null, 2, "th", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Submission deadline date "])), (t()(), to(14, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), to(15, 0, null, null, 2, "th", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Status "])), (t()(), to(17, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), Xi(16777216, null, null, 1, null, tg)), cs(19, 278528, null, 0, da, [Vn, Nn, Mn], { ngForOf: [0, "ngForOf"] }, null)], (function(t, e) { t(e, 19, 0, e.component.tasks) }), null) }

  function ng(t) { return go(0, [(t()(), to(0, 0, null, null, 32, "div", [
      ["class", "labs tabcontent"],
      ["id", "labs"]
    ], null, null, null, null, null)), (t()(), to(1, 0, null, null, 31, "table", [
      ["class", "labs__list"]
    ], null, null, null, null, null)), (t()(), to(2, 0, null, null, 9, "tr", [], null, null, null, null, null)), (t()(), to(3, 0, null, null, 2, "th", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Number "])), (t()(), to(5, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), to(6, 0, null, null, 2, "th", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Name/Code "])), (t()(), to(8, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), to(9, 0, null, null, 2, "th", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Date "])), (t()(), to(11, 0, null, null, 0, "i", [
      ["class", "fas fa-sort"]
    ], null, null, null, null, null)), (t()(), to(12, 0, null, null, 6, "tr", [], null, null, null, null, null)), (t()(), to(13, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(-1, null, ["1"])), (t()(), to(15, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Blood analysis"])), (t()(), to(17, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Nov 10, 2019"])), (t()(), to(19, 0, null, null, 6, "tr", [], null, null, null, null, null)), (t()(), to(20, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(-1, null, ["2"])), (t()(), to(22, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Blood analysis"])), (t()(), to(24, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Oct 15, 2019"])), (t()(), to(26, 0, null, null, 6, "tr", [], null, null, null, null, null)), (t()(), to(27, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(-1, null, ["3"])), (t()(), to(29, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Blood analysis"])), (t()(), to(31, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ho(-1, null, ["Sep 20, 2019"]))], null, null) }

  function rg(t) { return go(0, [(t()(), to(0, 0, null, null, 1, "button", [
      ["class", "sign__saveTask"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.saveTask() && r), r }), null, null)), (t()(), ho(-1, null, ["Save task"]))], null, null) }

  function sg(t) { return go(0, [(t()(), to(0, 0, null, null, 1, "app-task", [], null, null, null, Wf, zf)), cs(1, 114688, null, 0, Hf, [$f], null, null)], (function(t, e) { t(e, 1, 0) }), null) }

  function ig(t) { return go(0, [(t()(), to(0, 0, null, null, 6, "div", [
      ["class", "sign-block__description-block"]
    ], null, null, null, null, null)), (t()(), to(1, 0, null, null, 0, "div", [
      ["class", "overlay_popup"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.closeTaskDescription() && r), r }), null, null)), (t()(), to(2, 0, null, null, 4, "div", [
      ["class", "sign-block__description-wrap"]
    ], null, null, null, null, null)), (t()(), to(3, 0, null, null, 1, "button", [
      ["class", "description_close"],
      ["title", "Close"],
      ["type", "button"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.closeTaskDescription() && r), r }), null, null)), (t()(), ho(-1, null, ["Close"])), (t()(), to(5, 0, null, null, 1, "p", [
      ["class", "sign-block__description"]
    ], null, null, null, null, null)), (t()(), ho(6, null, ["", ""]))], null, (function(t, e) { t(e, 6, 0, e.component.taskDescription.description) })) }

  function og(t) { return go(0, [(t()(), to(0, 0, null, null, 25, "div", [
      ["class", "sign-block"]
    ], null, null, null, null, null)), (t()(), to(1, 0, null, null, 1, "p", [
      ["class", "sign-block__taskName"]
    ], null, null, null, null, null)), (t()(), ho(2, null, ["", ""])), (t()(), to(3, 0, null, null, 1, "p", [
      ["class", "sign-block__details"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.openTaskDescription(t.context.$implicit) && r), r }), null, null)), (t()(), ho(-1, null, ["Details"])), (t()(), Xi(16777216, null, null, 1, null, ig)), cs(6, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), to(7, 0, null, null, 6, "div", [
      ["class", "sign-block__date-wrap"]
    ], null, null, null, null, null)), (t()(), to(8, 0, null, null, 2, "p", [
      ["class", "sign-block__date"]
    ], null, null, null, null, null)), (t()(), ho(9, null, ["", ""])), co(10, 2), (t()(), to(11, 0, null, null, 2, "p", [
      ["class", "sign-block__time"]
    ], null, null, null, null, null)), (t()(), ho(12, null, ["", ""])), co(13, 2), (t()(), to(14, 0, null, null, 6, "div", [
      ["class", "sign-block__date-wrap"]
    ], null, null, null, null, null)), (t()(), to(15, 0, null, null, 2, "p", [
      ["class", "sign-block__date"]
    ], null, null, null, null, null)), (t()(), ho(16, null, ["", ""])), co(17, 2), (t()(), to(18, 0, null, null, 2, "p", [
      ["class", "sign-block__time"]
    ], null, null, null, null, null)), (t()(), ho(19, null, ["", ""])), co(20, 2), (t()(), to(21, 0, null, null, 4, "div", [
      ["class", "sign-block__persolnal-wrap"]
    ], null, null, null, null, null)), (t()(), to(22, 0, null, null, 1, "p", [
      ["class", "sign-block__personalName"]
    ], null, null, null, null, null)), (t()(), ho(23, null, ["", ""])), (t()(), to(24, 0, null, null, 1, "p", [
      ["class", "sign-block__personalTitle"]
    ], null, null, null, null, null)), (t()(), ho(25, null, ["", ""]))], (function(t, e) { t(e, 6, 0, e.component.taskDescription) }), (function(t, e) { t(e, 2, 0, e.context.$implicit.name); var n = Jn(e, 9, 0, t(e, 10, 0, Yr(e.parent, 0), e.context.$implicit.timein, "dd.MM.yyyy"));
      t(e, 9, 0, n); var r = Jn(e, 12, 0, t(e, 13, 0, Yr(e.parent, 0), e.context.$implicit.timein, "HH:mm"));
      t(e, 12, 0, r); var s = Jn(e, 16, 0, t(e, 17, 0, Yr(e.parent, 0), e.context.$implicit.timeout, "dd.MM.yyyy"));
      t(e, 16, 0, s); var i = Jn(e, 19, 0, t(e, 20, 0, Yr(e.parent, 0), e.context.$implicit.timeout, "HH:mm"));
      t(e, 19, 0, i), t(e, 23, 0, e.context.$implicit.staff), t(e, 25, 0, e.context.$implicit.position) })) }

  function lg(t) { return go(0, [hs(0, _a, [Ws]), (t()(), to(1, 0, null, null, 29, "main", [
      ["class", "patient"]
    ], null, null, null, null, null)), (t()(), to(2, 0, null, null, 1, "button", [
      ["class", "patient__back-button"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.goBack() && r), r }), null, null)), (t()(), ho(-1, null, ["Back"])), (t()(), Xi(16777216, null, null, 1, null, Jf)), cs(5, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), to(6, 0, null, null, 14, "section", [
      ["class", "task"]
    ], null, null, null, null, null)), (t()(), to(7, 0, null, null, 13, "div", [], null, null, null, null, null)), (t()(), to(8, 0, null, null, 6, "div", [
      ["class", "task__titles-wrap"]
    ], null, null, null, null, null)), (t()(), to(9, 0, null, null, 1, "h2", [
      ["class", "task__title active"],
      ["id", "patient-info"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.getPatientInfo() && r), r }), null, null)), (t()(), ho(-1, null, ["Current info"])), (t()(), to(11, 0, null, null, 1, "h2", [
      ["class", "task__title"],
      ["id", "patient-history"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.getPatientHistory() && r), r }), null, null)), (t()(), ho(-1, null, ["History"])), (t()(), to(13, 0, null, null, 1, "h2", [
      ["class", "task__title"],
      ["id", "patient-labs"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.getPatientLab() && r), r }), null, null)), (t()(), ho(-1, null, ["Labs/Pictures/Tests"])), (t()(), Xi(16777216, null, null, 1, null, Xf)), cs(16, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), Xi(16777216, null, null, 1, null, eg)), cs(18, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), Xi(16777216, null, null, 1, null, ng)), cs(20, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), to(21, 0, null, null, 9, "section", [
      ["class", "sign"]
    ], null, null, null, null, null)), (t()(), to(22, 0, null, null, 4, "div", [
      ["class", "sign__buttons"]
    ], null, null, null, null, null)), (t()(), to(23, 0, null, null, 1, "button", [
      ["class", "sign__button"]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== t.component.openDetails() && r), r }), null, null)), (t()(), ho(-1, null, ["Action"])), (t()(), Xi(16777216, null, null, 1, null, rg)), cs(26, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), Xi(16777216, null, null, 1, null, sg)), cs(28, 16384, null, 0, fa, [Vn, Nn], { ngIf: [0, "ngIf"] }, null), (t()(), Xi(16777216, null, null, 1, null, og)), cs(30, 278528, null, 0, da, [Vn, Nn, Mn], { ngForOf: [0, "ngForOf"] }, null)], (function(t, e) { var n = e.component;
      t(e, 5, 0, n.patient), t(e, 16, 0, n.patient_info), t(e, 18, 0, n.patient_history), t(e, 20, 0, n.patient_labs), t(e, 26, 0, n.buttonSaveTask), t(e, 28, 0, n.openTask), t(e, 30, 0, n.dataPatient.tasks) }), null) }

  function ag(t) { return go(0, [(t()(), to(0, 0, null, null, 1, "app-patient", [], null, null, null, lg, Yf)), cs(1, 114688, null, 0, $f, [jh, Mp, Kf, Il], null, null)], (function(t, e) { t(e, 1, 0) }), null) }
  var ug = Fr("app-patient", $f, ag, {}, {}, []); class cg { constructor() { this.logo = "./assets/icon-logo.png", this.title = "Hospital HELP" } ngOnInit() {} }
  var hg = er({ encapsulation: 0, styles: [
      [".header[_ngcontent-%COMP%]{width:1200px;margin-right:auto;margin-left:auto;margin-top:50px;background:#fff;mix-blend-mode:normal;box-shadow:0 10px 10px rgba(0,0,0,.06);border-radius:0 10px 10px}.header[_ngcontent-%COMP%]   .header-wrap[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.header__logo[_ngcontent-%COMP%]{height:50px;margin-left:50px}.header__logo-img[_ngcontent-%COMP%]{height:70px;margin-top:-10px;cursor:pointer}.header__title[_ngcontent-%COMP%]{font-family:Roboto Medium;font-style:normal;font-weight:500;font-size:20px;line-height:22px;margin:0;text-transform:uppercase;cursor:pointer}.header__nav[_ngcontent-%COMP%]{display:flex;margin-right:50px}.nav__message[_ngcontent-%COMP%]{margin-right:50px;font-size:27px;color:#70c4b4}.nav__login[_ngcontent-%COMP%]{font-size:27px;color:#70c4b4}"]
    ], data: {} });

  function dg(t) { return go(0, [(t()(), to(0, 0, null, null, 12, "header", [
      ["class", "header"]
    ], null, null, null, null, null)), (t()(), to(1, 0, null, null, 11, "div", [
      ["class", "header-wrap"]
    ], null, null, null, null, null)), (t()(), to(2, 0, null, null, 2, "div", [
      ["class", "header__logo"],
      ["routerLink", ""]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== Yr(t, 3).onClick() && r), r }), null, null)), cs(3, 16384, null, 0, Yd, [Kd, jh, [8, null], gn, cn], { routerLink: [0, "routerLink"] }, null), (t()(), to(4, 0, null, null, 0, "img", [
      ["alt", " Logo"],
      ["class", "header__logo-img"]
    ], [
      [8, "src", 4]
    ], null, null, null, null)), (t()(), to(5, 0, null, null, 2, "h1", [
      ["class", "header__title"],
      ["routerLink", ""]
    ], null, [
      [null, "click"]
    ], (function(t, e, n) { var r = !0; return "click" === e && (r = !1 !== Yr(t, 6).onClick() && r), r }), null, null)), cs(6, 16384, null, 0, Yd, [Kd, jh, [8, null], gn, cn], { routerLink: [0, "routerLink"] }, null), (t()(), ho(7, null, ["", ""])), (t()(), to(8, 0, null, null, 4, "nav", [
      ["class", "header__nav"]
    ], null, null, null, null, null)), (t()(), to(9, 0, null, null, 1, "div", [
      ["class", "nav__message"]
    ], null, null, null, null, null)), (t()(), to(10, 0, null, null, 0, "i", [
      ["class", "far fa-comment"]
    ], null, null, null, null, null)), (t()(), to(11, 0, null, null, 1, "div", [
      ["class", "nav__login"]
    ], null, null, null, null, null)), (t()(), to(12, 0, null, null, 0, "i", [
      ["class", "far fa-user"]
    ], null, null, null, null, null))], (function(t, e) { t(e, 3, 0, ""), t(e, 6, 0, "") }), (function(t, e) { var n = e.component;
      t(e, 4, 0, n.logo), t(e, 7, 0, n.title) })) }
  var pg = er({ encapsulation: 0, styles: [
      [""]
    ], data: {} });

  function fg(t) { return go(0, [(t()(), to(0, 0, null, null, 1, "app-header", [], null, null, null, dg, hg)), cs(1, 114688, null, 0, cg, [], null, null), (t()(), to(2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), cs(3, 212992, null, 0, ep, [tp, Vn, on, [8, null], Pe], null, null)], (function(t, e) { t(e, 1, 0), t(e, 3, 0) }), null) }

  function gg(t) { return go(0, [(t()(), to(0, 0, null, null, 1, "app-root", [], null, null, null, fg, pg)), cs(1, 49152, null, 0, xl, [], null, null)], null, null) }
  var mg = Fr("app-root", xl, gg, {}, {}, []); class _g {}
  var yg = bl(Cl, [xl], (function(t) { return function(t) { const e = {},
        n = []; let r = !1; for (let s = 0; s < t.length; s++) { const i = t[s];
        i.token === Ae && !0 === i.value && (r = !0), 1073741824 & i.flags && n.push(i.token), i.index = s, e[Yn(i.token)] = i } return { factory: null, providersByKey: e, providers: t, modules: n, isRoot: r } }([Dr(512, on, ln, [
      [8, [Ep, Np, Fp, ug, mg]],
      [3, on], Ht
    ]), Dr(5120, Ws, Ki, [
      [3, Ws]
    ]), Dr(4608, ua, ca, [Ws, [2, aa]]), Dr(5120, Ts, Yi, [di]), Dr(5120, Hs, $s, []), Dr(5120, Mn, Wi, []), Dr(5120, Pn, Qi, []), Dr(4608, bc, wc, [va]), Dr(6144, Se, null, [bc]), Dr(4608, pc, gc, []), Dr(5120, Ru, (function(t, e, n, r, s, i, o, l) { return [new hc(t, e, n), new vc(r), new mc(s, i, o, l)] }), [va, di, Gs, va, va, pc, qs, [2, fc]]), Dr(4608, Vu, Vu, [Ru, di]), Dr(135680, ju, ju, [va]), Dr(4608, Zu, Zu, [Vu, ju, Hs]), Dr(6144, pn, null, [Zu]), Dr(6144, Uu, null, [ju]), Dr(4608, vi, vi, [di]), Dr(5120, jh, yp, [Kd]), Dr(4608, ip, ip, []), Dr(6144, rp, null, [ip]), Dr(135680, op, op, [Kd, Ni, ei, Ne, rp]), Dr(4608, sp, sp, []), Dr(5120, lp, pp, [Kd, wa, ap]), Dr(5120, Cp, wp, [vp]), Dr(5120, Zs, (function(t) { return [t] }), [Cp]), Dr(4608, of , of , []), Dr(1073742336, ya, ya, []), Dr(1024, Xt, Mc, []), Dr(1024, Ti, (function() { return [hp()] }), []), Dr(512, vp, vp, [Ne]), Dr(1024, js, (function(t, e) { return [(n = t, Au("probe", Nu), Au("coreTokens", Object.assign({}, Du, (n || []).reduce((t, e) => (t[e.name] = e.token, t), {}))), () => Nu), bp(e)]; var n }), [
      [2, Ti], vp
    ]), Dr(512, Fs, Fs, [
      [2, js]
    ]), Dr(131584, Ai, Ai, [di, qs, Ne, Xt, on, Fs]), Dr(1073742336, Ji, Ji, [Ai]), Dr(1073742336, Pc, Pc, [
      [3, Pc]
    ]), Dr(1024, up, gp, [
      [3, Kd]
    ]), Dr(512, _h, yh, []), Dr(512, tp, tp, []), Dr(256, ap, {}, []), Dr(1024, El, fp, [kl, [2, Tl], ap]), Dr(512, Il, Il, [El, kl]), Dr(512, ei, ei, []), Dr(512, Ni, ji, [ei, [2, Li]]), Dr(1024, zd, (function() { return [
        [{ path: "", component: Tp }, { path: ":link", component: Rp }, { path: ":link/:linkName", component: $f }]
      ] }), []), Dr(1024, Kd, _p, [Ai, _h, tp, Il, Ne, Ni, ei, zd, ap, [2, Gd],
      [2, Hd]
    ]), Dr(1073742336, dp, dp, [
      [2, up],
      [2, Kd]
    ]), Dr(1073742336, _g, _g, []), Dr(1073742336, jf, jf, []), Dr(1073742336, Ff, Ff, []), Dr(1073742336, Cl, Cl, []), Dr(256, Ae, !0, [])]) }));
  (function() { if (ee) throw new Error("Cannot enable prod mode after platform setup.");
    te = !1 })(), Ic().bootstrapModuleFactory(yg).catch(t => console.error(t))
}, zn8P: function(t, e) {
  function n(t) { return Promise.resolve().then((function() { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e })) } n.keys = function() { return [] }, n.resolve = n, t.exports = n, n.id = "zn8P" }
}, [
  [0, 0]
]]);
