'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [776],
  {
    27776: function (t, e, a) {
      a.d(e, {
        Am: function () {
          return g;
        },
        x7: function () {
          return x;
        }
      });
      var r = a(2265),
        n = a(54887),
        o = (t) => {
          switch (t) {
            case 'success':
              return l;
            case 'info':
              return c;
            case 'warning':
              return d;
            case 'error':
              return u;
            default:
              return null;
          }
        },
        s = Array(12).fill(0),
        i = (t) => {
          let { visible: e } = t;
          return r.createElement(
            'div',
            { className: 'sonner-loading-wrapper', 'data-visible': e },
            r.createElement(
              'div',
              { className: 'sonner-spinner' },
              s.map((t, e) =>
                r.createElement('div', {
                  className: 'sonner-loading-bar',
                  key: 'spinner-bar-'.concat(e)
                })
              )
            )
          );
        },
        l = r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 20 20',
            fill: 'currentColor',
            height: '20',
            width: '20'
          },
          r.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
            clipRule: 'evenodd'
          })
        ),
        d = r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            height: '20',
            width: '20'
          },
          r.createElement('path', {
            fillRule: 'evenodd',
            d: 'M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z',
            clipRule: 'evenodd'
          })
        ),
        c = r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 20 20',
            fill: 'currentColor',
            height: '20',
            width: '20'
          },
          r.createElement('path', {
            fillRule: 'evenodd',
            d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
            clipRule: 'evenodd'
          })
        ),
        u = r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 20 20',
            fill: 'currentColor',
            height: '20',
            width: '20'
          },
          r.createElement('path', {
            fillRule: 'evenodd',
            d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
            clipRule: 'evenodd'
          })
        ),
        h = () => {
          let [t, e] = r.useState(document.hidden);
          return (
            r.useEffect(() => {
              let t = () => {
                e(document.hidden);
              };
              return (
                document.addEventListener('visibilitychange', t),
                () => window.removeEventListener('visibilitychange', t)
              );
            }, []),
            t
          );
        },
        m = 1,
        f = new (class {
          constructor() {
            (this.subscribe = (t) => (
              this.subscribers.push(t),
              () => {
                let e = this.subscribers.indexOf(t);
                this.subscribers.splice(e, 1);
              }
            )),
              (this.publish = (t) => {
                this.subscribers.forEach((e) => e(t));
              }),
              (this.addToast = (t) => {
                this.publish(t), (this.toasts = [...this.toasts, t]);
              }),
              (this.create = (t) => {
                var e;
                let { message: a, ...r } = t,
                  n =
                    'number' == typeof (null == t ? void 0 : t.id) ||
                    (null == (e = t.id) ? void 0 : e.length) > 0
                      ? t.id
                      : m++,
                  o = this.toasts.find((t) => t.id === n),
                  s = void 0 === t.dismissible || t.dismissible;
                return (
                  o
                    ? (this.toasts = this.toasts.map((e) =>
                        e.id === n
                          ? (this.publish({ ...e, ...t, id: n, title: a }),
                            { ...e, ...t, id: n, dismissible: s, title: a })
                          : e
                      ))
                    : this.addToast({ title: a, ...r, dismissible: s, id: n }),
                  n
                );
              }),
              (this.dismiss = (t) => (
                t ||
                  this.toasts.forEach((t) => {
                    this.subscribers.forEach((e) =>
                      e({ id: t.id, dismiss: !0 })
                    );
                  }),
                this.subscribers.forEach((e) => e({ id: t, dismiss: !0 })),
                t
              )),
              (this.message = (t, e) => this.create({ ...e, message: t })),
              (this.error = (t, e) =>
                this.create({ ...e, message: t, type: 'error' })),
              (this.success = (t, e) =>
                this.create({ ...e, type: 'success', message: t })),
              (this.info = (t, e) =>
                this.create({ ...e, type: 'info', message: t })),
              (this.warning = (t, e) =>
                this.create({ ...e, type: 'warning', message: t })),
              (this.loading = (t, e) =>
                this.create({ ...e, type: 'loading', message: t })),
              (this.promise = (t, e) => {
                let a;
                if (!e) return;
                void 0 !== e.loading &&
                  (a = this.create({
                    ...e,
                    promise: t,
                    type: 'loading',
                    message: e.loading,
                    description:
                      'function' != typeof e.description
                        ? e.description
                        : void 0
                  }));
                let r = t instanceof Promise ? t : t(),
                  n = void 0 !== a;
                return (
                  r
                    .then(async (t) => {
                      if (p(t) && !t.ok) {
                        n = !1;
                        let r =
                            'function' == typeof e.error
                              ? await e.error(
                                  'HTTP error! status: '.concat(t.status)
                                )
                              : e.error,
                          o =
                            'function' == typeof e.description
                              ? await e.description(
                                  'HTTP error! status: '.concat(t.status)
                                )
                              : e.description;
                        this.create({
                          id: a,
                          type: 'error',
                          message: r,
                          description: o
                        });
                      } else if (void 0 !== e.success) {
                        n = !1;
                        let r =
                            'function' == typeof e.success
                              ? await e.success(t)
                              : e.success,
                          o =
                            'function' == typeof e.description
                              ? await e.description(t)
                              : e.description;
                        this.create({
                          id: a,
                          type: 'success',
                          message: r,
                          description: o
                        });
                      }
                    })
                    .catch(async (t) => {
                      if (void 0 !== e.error) {
                        n = !1;
                        let r =
                            'function' == typeof e.error
                              ? await e.error(t)
                              : e.error,
                          o =
                            'function' == typeof e.description
                              ? await e.description(t)
                              : e.description;
                        this.create({
                          id: a,
                          type: 'error',
                          message: r,
                          description: o
                        });
                      }
                    })
                    .finally(() => {
                      var t;
                      n && (this.dismiss(a), (a = void 0)),
                        null == (t = e.finally) || t.call(e);
                    }),
                  a
                );
              }),
              (this.custom = (t, e) => {
                let a = (null == e ? void 0 : e.id) || m++;
                return this.create({ jsx: t(a), id: a, ...e }), a;
              }),
              (this.subscribers = []),
              (this.toasts = []);
          }
        })(),
        p = (t) =>
          t &&
          'object' == typeof t &&
          'ok' in t &&
          'boolean' == typeof t.ok &&
          'status' in t &&
          'number' == typeof t.status,
        g = Object.assign(
          (t, e) => {
            let a = (null == e ? void 0 : e.id) || m++;
            return f.addToast({ title: t, ...e, id: a }), a;
          },
          {
            success: f.success,
            info: f.info,
            warning: f.warning,
            error: f.error,
            custom: f.custom,
            message: f.message,
            promise: f.promise,
            dismiss: f.dismiss,
            loading: f.loading
          },
          { getHistory: () => f.toasts }
        );
      function v(t) {
        return void 0 !== t.label;
      }
      function b() {
        for (var t = arguments.length, e = Array(t), a = 0; a < t; a++)
          e[a] = arguments[a];
        return e.filter(Boolean).join(' ');
      }
      !(function (t) {
        let { insertAt: e } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t || 'undefined' == typeof document) return;
        let a = document.head || document.getElementsByTagName('head')[0],
          r = document.createElement('style');
        (r.type = 'text/css'),
          'top' === e && a.firstChild
            ? a.insertBefore(r, a.firstChild)
            : a.appendChild(r),
          r.styleSheet
            ? (r.styleSheet.cssText = t)
            : r.appendChild(document.createTextNode(t));
      })(
        ':where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n'
      );
      var y = (t) => {
        var e, a, n, s, l, d, c, u, m, f;
        let {
            invert: p,
            toast: g,
            unstyled: b,
            interacting: y,
            setHeights: w,
            visibleToasts: x,
            heights: E,
            index: k,
            toasts: N,
            expanded: B,
            removeToast: C,
            defaultRichColors: S,
            closeButton: T,
            style: M,
            cancelButtonStyle: z,
            actionButtonStyle: I,
            className: R = '',
            descriptionClassName: Y = '',
            duration: P,
            position: j,
            gap: A,
            loadingIcon: H,
            expandByDefault: L,
            classNames: D,
            icons: U,
            closeButtonAriaLabel: V = 'Close toast',
            pauseWhenPageIsHidden: O,
            cn: W
          } = t,
          [_, F] = r.useState(!1),
          [K, X] = r.useState(!1),
          [q, G] = r.useState(!1),
          [J, Q] = r.useState(!1),
          [Z, $] = r.useState(0),
          [tt, te] = r.useState(0),
          ta = r.useRef(null),
          tr = r.useRef(null),
          tn = 0 === k,
          to = k + 1 <= x,
          ts = g.type,
          ti = !1 !== g.dismissible,
          tl = g.className || '',
          td = g.descriptionClassName || '',
          tc = r.useMemo(
            () => E.findIndex((t) => t.toastId === g.id) || 0,
            [E, g.id]
          ),
          tu = r.useMemo(() => {
            var t;
            return null != (t = g.closeButton) ? t : T;
          }, [g.closeButton, T]),
          th = r.useMemo(() => g.duration || P || 4e3, [g.duration, P]),
          tm = r.useRef(0),
          tf = r.useRef(0),
          tp = r.useRef(0),
          tg = r.useRef(null),
          [tv, tb] = j.split('-'),
          ty = r.useMemo(
            () => E.reduce((t, e, a) => (a >= tc ? t : t + e.height), 0),
            [E, tc]
          ),
          tw = h(),
          tx = g.invert || p,
          tE = 'loading' === ts;
        (tf.current = r.useMemo(() => tc * A + ty, [tc, ty])),
          r.useEffect(() => {
            F(!0);
          }, []),
          r.useLayoutEffect(() => {
            if (!_) return;
            let t = tr.current,
              e = t.style.height;
            t.style.height = 'auto';
            let a = t.getBoundingClientRect().height;
            (t.style.height = e),
              te(a),
              w((t) =>
                t.find((t) => t.toastId === g.id)
                  ? t.map((t) => (t.toastId === g.id ? { ...t, height: a } : t))
                  : [{ toastId: g.id, height: a, position: g.position }, ...t]
              );
          }, [_, g.title, g.description, w, g.id]);
        let tk = r.useCallback(() => {
          X(!0),
            $(tf.current),
            w((t) => t.filter((t) => t.toastId !== g.id)),
            setTimeout(() => {
              C(g);
            }, 200);
        }, [g, C, w, tf]);
        return (
          r.useEffect(() => {
            if (
              (g.promise && 'loading' === ts) ||
              g.duration === 1 / 0 ||
              'loading' === g.type
            )
              return;
            let t,
              e = th;
            return (
              B || y || (O && tw)
                ? (() => {
                    if (tp.current < tm.current) {
                      let t = new Date().getTime() - tm.current;
                      e -= t;
                    }
                    tp.current = new Date().getTime();
                  })()
                : e !== 1 / 0 &&
                  ((tm.current = new Date().getTime()),
                  (t = setTimeout(() => {
                    var t;
                    null == (t = g.onAutoClose) || t.call(g, g), tk();
                  }, e))),
              () => clearTimeout(t)
            );
          }, [B, y, L, g, th, tk, g.promise, ts, O, tw]),
          r.useEffect(() => {
            let t = tr.current;
            if (t) {
              let e = t.getBoundingClientRect().height;
              return (
                te(e),
                w((t) => [
                  { toastId: g.id, height: e, position: g.position },
                  ...t
                ]),
                () => w((t) => t.filter((t) => t.toastId !== g.id))
              );
            }
          }, [w, g.id]),
          r.useEffect(() => {
            g.delete && tk();
          }, [tk, g.delete]),
          r.createElement(
            'li',
            {
              'aria-live': g.important ? 'assertive' : 'polite',
              'aria-atomic': 'true',
              role: 'status',
              tabIndex: 0,
              ref: tr,
              className: W(
                R,
                tl,
                null == D ? void 0 : D.toast,
                null == (e = null == g ? void 0 : g.classNames)
                  ? void 0
                  : e.toast,
                null == D ? void 0 : D.default,
                null == D ? void 0 : D[ts],
                null == (a = null == g ? void 0 : g.classNames) ? void 0 : a[ts]
              ),
              'data-sonner-toast': '',
              'data-rich-colors': null != (n = g.richColors) ? n : S,
              'data-styled': !(g.jsx || g.unstyled || b),
              'data-mounted': _,
              'data-promise': !!g.promise,
              'data-removed': K,
              'data-visible': to,
              'data-y-position': tv,
              'data-x-position': tb,
              'data-index': k,
              'data-front': tn,
              'data-swiping': q,
              'data-dismissible': ti,
              'data-type': ts,
              'data-invert': tx,
              'data-swipe-out': J,
              'data-expanded': !!(B || (L && _)),
              style: {
                '--index': k,
                '--toasts-before': k,
                '--z-index': N.length - k,
                '--offset': ''.concat(K ? Z : tf.current, 'px'),
                '--initial-height': L ? 'auto' : ''.concat(tt, 'px'),
                ...M,
                ...g.style
              },
              onPointerDown: (t) => {
                tE ||
                  !ti ||
                  ((ta.current = new Date()),
                  $(tf.current),
                  t.target.setPointerCapture(t.pointerId),
                  'BUTTON' !== t.target.tagName &&
                    (G(!0), (tg.current = { x: t.clientX, y: t.clientY })));
              },
              onPointerUp: () => {
                var t, e, a, r;
                if (J || !ti) return;
                tg.current = null;
                let n = Number(
                    (null == (t = tr.current)
                      ? void 0
                      : t.style
                          .getPropertyValue('--swipe-amount')
                          .replace('px', '')) || 0
                  ),
                  o =
                    new Date().getTime() -
                    (null == (e = ta.current) ? void 0 : e.getTime());
                if (Math.abs(n) >= 20 || Math.abs(n) / o > 0.11) {
                  $(tf.current),
                    null == (a = g.onDismiss) || a.call(g, g),
                    tk(),
                    Q(!0);
                  return;
                }
                null == (r = tr.current) ||
                  r.style.setProperty('--swipe-amount', '0px'),
                  G(!1);
              },
              onPointerMove: (t) => {
                var e;
                if (!tg.current || !ti) return;
                let a = t.clientY - tg.current.y,
                  r = t.clientX - tg.current.x,
                  n = ('top' === tv ? Math.min : Math.max)(0, a),
                  o = 'touch' === t.pointerType ? 10 : 2;
                Math.abs(n) > o
                  ? null == (e = tr.current) ||
                    e.style.setProperty('--swipe-amount', ''.concat(a, 'px'))
                  : Math.abs(r) > o && (tg.current = null);
              }
            },
            tu && !g.jsx
              ? r.createElement(
                  'button',
                  {
                    'aria-label': V,
                    'data-disabled': tE,
                    'data-close-button': !0,
                    onClick:
                      tE || !ti
                        ? () => {}
                        : () => {
                            var t;
                            tk(), null == (t = g.onDismiss) || t.call(g, g);
                          },
                    className: W(
                      null == D ? void 0 : D.closeButton,
                      null == (s = null == g ? void 0 : g.classNames)
                        ? void 0
                        : s.closeButton
                    )
                  },
                  r.createElement(
                    'svg',
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '12',
                      height: '12',
                      viewBox: '0 0 24 24',
                      fill: 'none',
                      stroke: 'currentColor',
                      strokeWidth: '1.5',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round'
                    },
                    r.createElement('line', {
                      x1: '18',
                      y1: '6',
                      x2: '6',
                      y2: '18'
                    }),
                    r.createElement('line', {
                      x1: '6',
                      y1: '6',
                      x2: '18',
                      y2: '18'
                    })
                  )
                )
              : null,
            g.jsx || r.isValidElement(g.title)
              ? g.jsx || g.title
              : r.createElement(
                  r.Fragment,
                  null,
                  ts || g.icon || g.promise
                    ? r.createElement(
                        'div',
                        {
                          'data-icon': '',
                          className: W(
                            null == D ? void 0 : D.icon,
                            null == (l = null == g ? void 0 : g.classNames)
                              ? void 0
                              : l.icon
                          )
                        },
                        g.promise || ('loading' === g.type && !g.icon)
                          ? g.icon ||
                              (null != U && U.loading
                                ? r.createElement(
                                    'div',
                                    {
                                      className: 'sonner-loader',
                                      'data-visible': 'loading' === ts
                                    },
                                    U.loading
                                  )
                                : H
                                ? r.createElement(
                                    'div',
                                    {
                                      className: 'sonner-loader',
                                      'data-visible': 'loading' === ts
                                    },
                                    H
                                  )
                                : r.createElement(i, {
                                    visible: 'loading' === ts
                                  }))
                          : null,
                        'loading' !== g.type
                          ? g.icon || (null == U ? void 0 : U[ts]) || o(ts)
                          : null
                      )
                    : null,
                  r.createElement(
                    'div',
                    {
                      'data-content': '',
                      className: W(
                        null == D ? void 0 : D.content,
                        null == (d = null == g ? void 0 : g.classNames)
                          ? void 0
                          : d.content
                      )
                    },
                    r.createElement(
                      'div',
                      {
                        'data-title': '',
                        className: W(
                          null == D ? void 0 : D.title,
                          null == (c = null == g ? void 0 : g.classNames)
                            ? void 0
                            : c.title
                        )
                      },
                      g.title
                    ),
                    g.description
                      ? r.createElement(
                          'div',
                          {
                            'data-description': '',
                            className: W(
                              Y,
                              td,
                              null == D ? void 0 : D.description,
                              null == (u = null == g ? void 0 : g.classNames)
                                ? void 0
                                : u.description
                            )
                          },
                          g.description
                        )
                      : null
                  ),
                  r.isValidElement(g.cancel)
                    ? g.cancel
                    : g.cancel && v(g.cancel)
                    ? r.createElement(
                        'button',
                        {
                          'data-button': !0,
                          'data-cancel': !0,
                          style: g.cancelButtonStyle || z,
                          onClick: (t) => {
                            var e, a;
                            v(g.cancel) &&
                              ti &&
                              (null == (a = (e = g.cancel).onClick) ||
                                a.call(e, t),
                              tk());
                          },
                          className: W(
                            null == D ? void 0 : D.cancelButton,
                            null == (m = null == g ? void 0 : g.classNames)
                              ? void 0
                              : m.cancelButton
                          )
                        },
                        g.cancel.label
                      )
                    : null,
                  r.isValidElement(g.action)
                    ? g.action
                    : g.action && v(g.action)
                    ? r.createElement(
                        'button',
                        {
                          'data-button': !0,
                          'data-action': !0,
                          style: g.actionButtonStyle || I,
                          onClick: (t) => {
                            var e, a;
                            v(g.action) &&
                              (t.defaultPrevented ||
                                (null == (a = (e = g.action).onClick) ||
                                  a.call(e, t),
                                tk()));
                          },
                          className: W(
                            null == D ? void 0 : D.actionButton,
                            null == (f = null == g ? void 0 : g.classNames)
                              ? void 0
                              : f.actionButton
                          )
                        },
                        g.action.label
                      )
                    : null
                )
          )
        );
      };
      function w() {
        if ('undefined' == typeof window || 'undefined' == typeof document)
          return 'ltr';
        let t = document.documentElement.getAttribute('dir');
        return 'auto' !== t && t
          ? t
          : window.getComputedStyle(document.documentElement).direction;
      }
      var x = (t) => {
        let {
            invert: e,
            position: a = 'bottom-right',
            hotkey: o = ['altKey', 'KeyT'],
            expand: s,
            closeButton: i,
            className: l,
            offset: d,
            theme: c = 'light',
            richColors: u,
            duration: h,
            style: m,
            visibleToasts: p = 3,
            toastOptions: g,
            dir: v = w(),
            gap: x = 14,
            loadingIcon: E,
            icons: k,
            containerAriaLabel: N = 'Notifications',
            pauseWhenPageIsHidden: B,
            cn: C = b
          } = t,
          [S, T] = r.useState([]),
          M = r.useMemo(
            () =>
              Array.from(
                new Set(
                  [a].concat(S.filter((t) => t.position).map((t) => t.position))
                )
              ),
            [S, a]
          ),
          [z, I] = r.useState([]),
          [R, Y] = r.useState(!1),
          [P, j] = r.useState(!1),
          [A, H] = r.useState(
            'system' !== c
              ? c
              : 'undefined' != typeof window &&
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'light'
          ),
          L = r.useRef(null),
          D = o.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
          U = r.useRef(null),
          V = r.useRef(!1),
          O = r.useCallback(
            (t) => {
              var e;
              (null != (e = S.find((e) => e.id === t.id)) && e.delete) ||
                f.dismiss(t.id),
                T((e) =>
                  e.filter((e) => {
                    let { id: a } = e;
                    return a !== t.id;
                  })
                );
            },
            [S]
          );
        return (
          r.useEffect(
            () =>
              f.subscribe((t) => {
                if (t.dismiss) {
                  T((e) =>
                    e.map((e) => (e.id === t.id ? { ...e, delete: !0 } : e))
                  );
                  return;
                }
                setTimeout(() => {
                  n.flushSync(() => {
                    T((e) => {
                      let a = e.findIndex((e) => e.id === t.id);
                      return -1 !== a
                        ? [
                            ...e.slice(0, a),
                            { ...e[a], ...t },
                            ...e.slice(a + 1)
                          ]
                        : [t, ...e];
                    });
                  });
                });
              }),
            []
          ),
          r.useEffect(() => {
            if ('system' !== c) {
              H(c);
              return;
            }
            'system' === c &&
              (window.matchMedia &&
              window.matchMedia('(prefers-color-scheme: dark)').matches
                ? H('dark')
                : H('light')),
              'undefined' != typeof window &&
                window
                  .matchMedia('(prefers-color-scheme: dark)')
                  .addEventListener('change', (t) => {
                    let { matches: e } = t;
                    H(e ? 'dark' : 'light');
                  });
          }, [c]),
          r.useEffect(() => {
            S.length <= 1 && Y(!1);
          }, [S]),
          r.useEffect(() => {
            let t = (t) => {
              var e, a;
              o.every((e) => t[e] || t.code === e) &&
                (Y(!0), null == (e = L.current) || e.focus()),
                'Escape' === t.code &&
                  (document.activeElement === L.current ||
                    (null != (a = L.current) &&
                      a.contains(document.activeElement))) &&
                  Y(!1);
            };
            return (
              document.addEventListener('keydown', t),
              () => document.removeEventListener('keydown', t)
            );
          }, [o]),
          r.useEffect(() => {
            if (L.current)
              return () => {
                U.current &&
                  (U.current.focus({ preventScroll: !0 }),
                  (U.current = null),
                  (V.current = !1));
              };
          }, [L.current]),
          S.length
            ? r.createElement(
                'section',
                { 'aria-label': ''.concat(N, ' ').concat(D), tabIndex: -1 },
                M.map((t, a) => {
                  var n;
                  let [o, c] = t.split('-');
                  return r.createElement(
                    'ol',
                    {
                      key: t,
                      dir: 'auto' === v ? w() : v,
                      tabIndex: -1,
                      ref: L,
                      className: l,
                      'data-sonner-toaster': !0,
                      'data-theme': A,
                      'data-y-position': o,
                      'data-x-position': c,
                      style: {
                        '--front-toast-height': ''.concat(
                          (null == (n = z[0]) ? void 0 : n.height) || 0,
                          'px'
                        ),
                        '--offset':
                          'number' == typeof d
                            ? ''.concat(d, 'px')
                            : d || '32px',
                        '--width': ''.concat(356, 'px'),
                        '--gap': ''.concat(x, 'px'),
                        ...m
                      },
                      onBlur: (t) => {
                        V.current &&
                          !t.currentTarget.contains(t.relatedTarget) &&
                          ((V.current = !1),
                          U.current &&
                            (U.current.focus({ preventScroll: !0 }),
                            (U.current = null)));
                      },
                      onFocus: (t) => {
                        (t.target instanceof HTMLElement &&
                          'false' === t.target.dataset.dismissible) ||
                          V.current ||
                          ((V.current = !0), (U.current = t.relatedTarget));
                      },
                      onMouseEnter: () => Y(!0),
                      onMouseMove: () => Y(!0),
                      onMouseLeave: () => {
                        P || Y(!1);
                      },
                      onPointerDown: (t) => {
                        (t.target instanceof HTMLElement &&
                          'false' === t.target.dataset.dismissible) ||
                          j(!0);
                      },
                      onPointerUp: () => j(!1)
                    },
                    S.filter(
                      (e) => (!e.position && 0 === a) || e.position === t
                    ).map((a, n) => {
                      var o, l;
                      return r.createElement(y, {
                        key: a.id,
                        icons: k,
                        index: n,
                        toast: a,
                        defaultRichColors: u,
                        duration:
                          null != (o = null == g ? void 0 : g.duration) ? o : h,
                        className: null == g ? void 0 : g.className,
                        descriptionClassName:
                          null == g ? void 0 : g.descriptionClassName,
                        invert: e,
                        visibleToasts: p,
                        closeButton:
                          null != (l = null == g ? void 0 : g.closeButton)
                            ? l
                            : i,
                        interacting: P,
                        position: t,
                        style: null == g ? void 0 : g.style,
                        unstyled: null == g ? void 0 : g.unstyled,
                        classNames: null == g ? void 0 : g.classNames,
                        cancelButtonStyle:
                          null == g ? void 0 : g.cancelButtonStyle,
                        actionButtonStyle:
                          null == g ? void 0 : g.actionButtonStyle,
                        removeToast: O,
                        toasts: S.filter((t) => t.position == a.position),
                        heights: z.filter((t) => t.position == a.position),
                        setHeights: I,
                        expandByDefault: s,
                        gap: x,
                        loadingIcon: E,
                        expanded: R,
                        pauseWhenPageIsHidden: B,
                        cn: C
                      });
                    })
                  );
                })
              )
            : null
        );
      };
    }
  }
]);