(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [3463],
  {
    67891: function (e, t) {
      var o, n, r;
      (n = [t]),
        void 0 ===
          (r =
            'function' ==
            typeof (o = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, o = Array(e.length); t < e.length; t++)
                    o[t] = e[t];
                  return o;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var o = !1;
              if ('undefined' != typeof window) {
                var n = {
                  get passive() {
                    o = !0;
                  },
                };
                window.addEventListener('testPassive', null, n),
                  window.removeEventListener('testPassive', null, n);
              }
              var r =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                l = [],
                i = !1,
                c = -1,
                a = void 0,
                s = void 0,
                u = function (e) {
                  return l.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!u(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                v = function () {
                  setTimeout(function () {
                    void 0 !== s &&
                      ((document.body.style.paddingRight = s), (s = void 0)),
                      void 0 !== a &&
                        ((document.body.style.overflow = a), (a = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, n) {
                if (r) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                    );
                  if (
                    e &&
                    !l.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var v = { targetElement: e, options: n || {} };
                    (l = [].concat(t(l), [v])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (c = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var o, n, r, l;
                        1 === t.targetTouches.length &&
                          ((n = e),
                          (l = (o = t).targetTouches[0].clientY - c),
                          !u(o.target) &&
                            ((n && 0 === n.scrollTop && 0 < l) ||
                            ((r = n) &&
                              r.scrollHeight - r.scrollTop <= r.clientHeight &&
                              l < 0)
                              ? d(o)
                              : o.stopPropagation()));
                      }),
                      i ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          o ? { passive: !1 } : void 0,
                        ),
                        (i = !0));
                  }
                } else {
                  (m = n),
                    setTimeout(function () {
                      if (void 0 === s) {
                        var e = !!m && !0 === m.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((s = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === a &&
                        ((a = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var f = { targetElement: e, options: n || {} };
                  l = [].concat(t(l), [f]);
                }
                var m;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  r
                    ? (l.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      i &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          o ? { passive: !1 } : void 0,
                        ),
                        (i = !1)),
                      (l = []),
                      (c = -1))
                    : (v(), (l = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (r) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (l = l.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      i &&
                        0 === l.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          o ? { passive: !1 } : void 0,
                        ),
                        (i = !1));
                  } else
                    1 === l.length && l[0].targetElement === e
                      ? (v(), (l = []))
                      : (l = l.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? o.apply(t, n)
              : o) || (e.exports = r);
    },
    32550: (e) => {
      e.exports = {
        item: 'item-21ifTYt7',
        label: 'label-21ifTYt7',
        labelRow: 'labelRow-21ifTYt7',
        toolbox: 'toolbox-21ifTYt7',
      };
    },
    66549: (e) => {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
        item: 'item-2IihgTnv',
        hovered: 'hovered-2IihgTnv',
        isDisabled: 'isDisabled-2IihgTnv',
        isActive: 'isActive-2IihgTnv',
        shortcut: 'shortcut-2IihgTnv',
        toolbox: 'toolbox-2IihgTnv',
        withIcon: 'withIcon-2IihgTnv',
        icon: 'icon-2IihgTnv',
        labelRow: 'labelRow-2IihgTnv',
        label: 'label-2IihgTnv',
        showOnHover: 'showOnHover-2IihgTnv',
      };
    },
    78706: (e) => {
      e.exports = {
        separator: 'separator-eqcGT_ow',
        small: 'small-eqcGT_ow',
        normal: 'normal-eqcGT_ow',
        large: 'large-eqcGT_ow',
      };
    },
    53178: (e, t, o) => {
      'use strict';
      o.d(t, {
        validateRegistry: () => c,
        RegistryProvider: () => a,
        registryContextType: () => s,
      });
      var n = o(67294),
        r = o(45697),
        l = o.n(r);
      const i = n.createContext({});
      function c(e, t) {
        l().checkPropTypes(t, e, 'context', 'RegistryContext');
      }
      function a(e) {
        const { validation: t, value: o } = e;
        return c(o, t), n.createElement(i.Provider, { value: o }, e.children);
      }
      function s() {
        return i;
      }
    },
    11086: (e, t, o) => {
      'use strict';
      o.d(t, {
        hoverMouseEventFilter: () => l,
        useAccurateHover: () => i,
        useHover: () => r,
      });
      var n = o(67294);
      function r() {
        const [e, t] = (0, n.useState)(!1);
        return [
          e,
          {
            onMouseOver: function (e) {
              l(e) && t(!0);
            },
            onMouseOut: function (e) {
              l(e) && t(!1);
            },
          },
        ];
      }
      function l(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
      function i(e) {
        const [t, o] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            const t = (t) => {
              if (null === e.current) return;
              const n = e.current.contains(t.target);
              o(n);
            };
            return (
              document.addEventListener('mouseover', t),
              () => document.removeEventListener('mouseover', t)
            );
          }, []),
          t
        );
      }
    },
    95860: (e, t, o) => {
      'use strict';
      o.d(t, {
        DEFAULT_POPUP_MENU_ITEM_THEME: () => s,
        PopupMenuItem: () => v,
      });
      var n = o(67294),
        r = o(94184),
        l = o(79424),
        i = o(87438),
        c = o(74818),
        a = o(66549);
      const s = a;
      function u(e) {
        const { reference: t, ...o } = e,
          r = { ...o, ref: t };
        return n.createElement(e.href ? 'a' : 'div', r);
      }
      function d(e) {
        e.stopPropagation();
      }
      function v(e) {
        const {
            id: t,
            role: o,
            'aria-selected': s,
            className: v,
            title: f,
            labelRowClassName: m,
            labelClassName: h,
            shortcut: g,
            forceShowShortcuts: p,
            icon: b,
            isActive: w,
            isDisabled: E,
            isHovered: T,
            appearAsDisabled: y,
            label: C,
            link: k,
            showToolboxOnHover: O,
            target: x,
            rel: M,
            toolbox: I,
            reference: S,
            onMouseOut: P,
            onMouseOver: N,
            suppressToolboxClick: A = !0,
            theme: R = a,
          } = e,
          _ = (0, c.filterDataProps)(e),
          D = (0, n.useRef)(null);
        return n.createElement(
          u,
          {
            ..._,
            id: t,
            role: o,
            'aria-selected': s,
            className: r(v, R.item, b && R.withIcon, {
              [R.isActive]: w,
              [R.isDisabled]: E || y,
              [R.hovered]: T,
            }),
            title: f,
            href: k,
            target: x,
            rel: M,
            reference: function (e) {
              (D.current = e), 'function' == typeof S && S(e);
              'object' == typeof S && (S.current = e);
            },
            onClick: function (t) {
              const {
                dontClosePopup: o,
                onClick: n,
                onClickArg: r,
                trackEventObject: c,
              } = e;
              if (E) return;
              c && (0, i.trackEvent)(c.category, c.event, c.label);
              n && n(r, t);
              o || (0, l.globalCloseMenu)();
            },
            onContextMenu: function (t) {
              const { trackEventObject: o, trackRightClick: n } = e;
              o &&
                n &&
                (0, i.trackEvent)(o.category, o.event, o.label + '_rightClick');
            },
            onMouseUp: function (t) {
              const { trackEventObject: o, trackMouseWheelClick: n } = e;
              if (1 === t.button && k && o) {
                let e = o.label;
                n && (e += '_mouseWheelClick'),
                  (0, i.trackEvent)(o.category, o.event, e);
              }
            },
            onMouseOver: N,
            onMouseOut: P,
          },
          void 0 !== b &&
            n.createElement('div', {
              className: R.icon,
              dangerouslySetInnerHTML: { __html: b },
            }),
          n.createElement(
            'div',
            { className: r(R.labelRow, m) },
            n.createElement('div', { className: r(R.label, h) }, C),
          ),
          (void 0 !== g || p) &&
            n.createElement(
              'div',
              { className: R.shortcut },
              (H = g) && H.split('+').join(' + '),
            ),
          void 0 !== I &&
            n.createElement(
              'div',
              {
                onClick: A ? d : void 0,
                className: r(R.toolbox, { [R.showOnHover]: O }),
              },
              I,
            ),
        );
        var H;
      }
    },
    82879: (e, t, o) => {
      'use strict';
      o.d(t, { multilineLabelWithIconAndToolboxTheme: () => i });
      var n = o(4598),
        r = o(66549),
        l = o(32550);
      const i = (0, n.mergeThemes)(r, l);
    },
    10869: (e, t, o) => {
      'use strict';
      o.d(t, { PopupMenuSeparator: () => c });
      var n = o(67294),
        r = o(94184),
        l = o.n(r),
        i = o(78706);
      function c(e) {
        const { size: t = 'normal', className: o } = e;
        return n.createElement('div', {
          className: l()(
            i.separator,
            'small' === t && i.small,
            'normal' === t && i.normal,
            'large' === t && i.large,
            o,
          ),
        });
      }
    },
    76420: (e, t, o) => {
      'use strict';
      o.d(t, { PopupMenu: () => s });
      var n = o(67294),
        r = o(73935),
        l = o(4735),
        i = o(90901),
        c = o(94884),
        a = o(47165);
      function s(e) {
        const {
            controller: t,
            children: o,
            isOpened: s,
            closeOnClickOutside: u = !0,
            doNotCloseOn: d,
            onClickOutside: v,
            onClose: f,
            ...m
          } = e,
          h = (0, n.useContext)(c.CloseDelegateContext),
          g = (0, a.useOutsideEvent)({
            handler: function (e) {
              v && v(e);
              if (!u) return;
              if (d && e.target instanceof Node) {
                const t = r.findDOMNode(d);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              f();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return s
          ? n.createElement(
              l.Portal,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              n.createElement(
                'span',
                { ref: g, style: { pointerEvents: 'auto' } },
                n.createElement(
                  i.Menu,
                  {
                    ...m,
                    onClose: f,
                    onScroll: function (t) {
                      const { onScroll: o } = e;
                      o && o(t);
                    },
                    customCloseDelegate: h,
                    ref: t,
                  },
                  o,
                ),
              ),
            )
          : null;
      }
    },
  },
]);
