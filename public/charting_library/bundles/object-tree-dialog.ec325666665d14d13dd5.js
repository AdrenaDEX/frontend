(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [4862],
  {
    67891: function (e, t) {
      var n, r, o;
      (r = [t]),
        void 0 ===
          (o =
            'function' ==
            typeof (n = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n = !1;
              if ('undefined' != typeof window) {
                var r = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener('testPassive', null, r),
                  window.removeEventListener('testPassive', null, r);
              }
              var o =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                i = [],
                s = !1,
                a = -1,
                c = void 0,
                l = void 0,
                u = function (e) {
                  return i.some(function (t) {
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
                h = function () {
                  setTimeout(function () {
                    void 0 !== l &&
                      ((document.body.style.paddingRight = l), (l = void 0)),
                      void 0 !== c &&
                        ((document.body.style.overflow = c), (c = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, r) {
                if (o) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                    );
                  if (
                    e &&
                    !i.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var h = { targetElement: e, options: r || {} };
                    (i = [].concat(t(i), [h])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (a = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, r, o, i;
                        1 === t.targetTouches.length &&
                          ((r = e),
                          (i = (n = t).targetTouches[0].clientY - a),
                          !u(n.target) &&
                            ((r && 0 === r.scrollTop && 0 < i) ||
                            ((o = r) &&
                              o.scrollHeight - o.scrollTop <= o.clientHeight &&
                              i < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      s ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (s = !0));
                  }
                } else {
                  (p = r),
                    setTimeout(function () {
                      if (void 0 === l) {
                        var e = !!p && !0 === p.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((l = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === c &&
                        ((c = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var f = { targetElement: e, options: r || {} };
                  i = [].concat(t(i), [f]);
                }
                var p;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  o
                    ? (i.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      s &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (s = !1)),
                      (i = []),
                      (a = -1))
                    : (h(), (i = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (o) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (i = i.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      s &&
                        0 === i.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (s = !1));
                  } else
                    1 === i.length && i[0].targetElement === e
                      ? (h(), (i = []))
                      : (i = i.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? n.apply(t, r)
              : n) || (e.exports = o);
    },
    27754: (e) => {
      e.exports = { button: 'button-2YcRd2gv' };
    },
    70294: (e) => {
      e.exports = {
        dropTargetInside: 'dropTargetInside-3UxYcxls',
        dropTarget: 'dropTarget-3UxYcxls',
        before: 'before-3UxYcxls',
        after: 'after-3UxYcxls',
      };
    },
    58686: (e) => {
      e.exports = {
        wrap: 'wrap-1a1_EyKG',
        selected: 'selected-1a1_EyKG',
        childOfSelected: 'childOfSelected-1a1_EyKG',
        disabled: 'disabled-1a1_EyKG',
        expandHandle: 'expandHandle-1a1_EyKG',
        expanded: 'expanded-1a1_EyKG',
      };
    },
    18343: (e) => {
      e.exports = {
        separator: 'separator-3U2Wf-wc',
        tree: 'tree-3U2Wf-wc',
        overlayScrollWrap: 'overlayScrollWrap-3U2Wf-wc',
        listContainer: 'listContainer-3U2Wf-wc',
      };
    },
    7279: (e) => {
      e.exports = {
        title: 'title-3eZ-_4gp',
        empty: 'empty-3eZ-_4gp',
        image: 'image-3eZ-_4gp',
        contentList: 'contentList-3eZ-_4gp',
      };
    },
    47937: (e) => {
      e.exports = { dialog: 'dialog-3q1-PXu-', button: 'button-3q1-PXu-' };
    },
    37953: (e) => {
      e.exports = {
        title: 'title-2PJRtZNU',
        withoutIcon: 'withoutIcon-2PJRtZNU',
        buttons: 'buttons-2PJRtZNU',
        button: 'button-2PJRtZNU',
        disabled: 'disabled-2PJRtZNU',
      };
    },
    84917: (e) => {
      e.exports = {
        wrap: 'wrap-3Onbn19L',
        dialog: 'dialog-3Onbn19L',
        offset: 'offset-3Onbn19L',
        title: 'title-3Onbn19L',
        main: 'main-3Onbn19L',
        disabled: 'disabled-3Onbn19L',
        icon: 'icon-3Onbn19L',
        textIcon: 'textIcon-3Onbn19L',
        syncIconWrap: 'syncIconWrap-3Onbn19L',
        syncIcon: 'syncIcon-3Onbn19L',
        rightButtons: 'rightButtons-3Onbn19L',
        hover: 'hover-3Onbn19L',
        expandHandle: 'expandHandle-3Onbn19L',
        button: 'button-3Onbn19L',
        selected: 'selected-3Onbn19L',
        childOfSelected: 'childOfSelected-3Onbn19L',
        renameInput: 'renameInput-3Onbn19L',
        warn: 'warn-3Onbn19L',
        visible: 'visible-3Onbn19L',
      };
    },
    25199: (e) => {
      e.exports = {
        wrap: 'wrap-3jZ5H2Ul',
        space: 'space-3jZ5H2Ul',
        tree: 'tree-3jZ5H2Ul',
      };
    },
    59404: (e) => {
      e.exports = { button: 'button-2zRC9WmY', disabled: 'disabled-2zRC9WmY' };
    },
    45650: (e, t, n) => {
      'use strict';
      n.d(t, { ToolWidgetIconButton: () => a });
      var r = n(67294),
        o = n(94184),
        i = n(47218),
        s = n(27754);
      const a = r.forwardRef((e, t) => {
        const { className: n, id: a, ...c } = e;
        return r.createElement(i.ToolWidgetButton, {
          'data-name': a,
          ...c,
          ref: t,
          className: o(n, s.button),
        });
      });
    },
    69117: (e, t, n) => {
      'use strict';
      n.d(t, { ManageDrawings: () => T });
      var r = n(67294),
        o = n(16282),
        i = n(49775),
        s = n(71577),
        a = n(14829),
        c = n(79881),
        l = n(90963),
        u = n(65447),
        d = n(67945),
        h = n(62638),
        f = n(47903),
        p = n(25659),
        g = n(78944),
        v = n(75412),
        y = n(7279);
      (0, u.getLogger)('Chart.ManageDrawings');
      const m = new l.TranslatedString(
          'remove all line tools for {symbol}',
          (0, c.t)('remove all line tools for {symbol}'),
        ),
        b = (e) =>
          (0, c.t)('{drawingsCount} drawing', {
            plural: '{drawingsCount} drawings',
            count: e,
          }).format({ drawingsCount: e.toString() }),
        S = (0, c.t)('Remove all drawings for this symbol'),
        w = (0, c.t)('No drawings yet');
      class T extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._totalCount = 0),
            (this._model = null),
            (this._symbolDrawingsMap = null),
            (this._storageContentLoadingPromise = null),
            (this._onItemClick = (e) => {
              '' !== e &&
                (this.props.chartWidget.setSymbol(e),
                null !== this._model && this.setState({ currentSymbol: e }),
                this.props.onClose && this.props.onClose());
            }),
            (this._onRemove = async (e) => {
              if (this._model && this._symbolDrawingsMap) {
                const t = this._symbolDrawingsMap.get(e);
                if (t) {
                  const n = Array.from(t)
                    .map((e) =>
                      (0, o.ensureNotNull)(this._model)
                        .model()
                        .dataSourceForId(e),
                    )
                    .filter(f.notNull);
                  n.length > 0 &&
                    this._model.removeSources(n, !1, m.format({ symbol: e })),
                    this._updateItems();
                }
              }
            }),
            (this._updateItems = async () => {
              if (null !== this._model) {
                const e = await this._getItems(
                  this._model.model().dataSources(),
                );
                this.setState({ items: e });
              }
            }),
            (this._updateTheme = () => {
              const e = a.watchedTheme.value();
              this.setState({ theme: e });
            }),
            (this.state = {
              currentSymbol: null,
              items: null,
              theme: a.watchedTheme.value(),
            });
        }
        componentDidMount() {
          this.props.chartWidget.withModel(this, async () => {
            (this._model = this.props.chartWidget.model()),
              this._model
                .model()
                .dataSourceCollectionChanged()
                .subscribe(this, this._updateItems);
            const e = await this._getItems(this._model.model().dataSources());
            this.setState(
              { currentSymbol: this._model.mainSeries().symbol(), items: e },
              () => {
                var e, t;
                return null === (t = (e = this.props).onInitialized) ||
                  void 0 === t
                  ? void 0
                  : t.call(e);
              },
            );
          }),
            a.watchedTheme.subscribe(this._updateTheme);
        }
        componentWillUnmount() {
          a.watchedTheme.unsubscribe(this._updateTheme),
            null !== this._model &&
              this._model
                .model()
                .dataSourceCollectionChanged()
                .unsubscribe(this, this._updateItems);
        }
        render() {
          const { isMobile: e } = this.props,
            { currentSymbol: t, items: n } = this.state,
            o = this._symbolDrawingsMap ? this._symbolDrawingsMap.size : 0,
            i = `${
              ((s = o),
              (0, c.t)('{symbolsCount} symbol', {
                plural: '{symbolsCount} symbols',
                context: 'symbols_and_drawings_count',
                count: s,
              }).format({ symbolsCount: s.toString() }))
            } ${((e) =>
              (0, c.t)('with {drawingsCount} drawing', {
                plural: 'with {drawingsCount} drawings',
                context: 'symbols_and_drawings_count',
                count: e,
              }).format({ drawingsCount: e.toString() }))(this._totalCount)}`;
          var s;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement('div', { className: y.title }, i),
            null === n || 0 === n.length
              ? this._renderEmptyContent()
              : n.map((n) =>
                  r.createElement(h.DialogContentItem, {
                    key: n.symbol,
                    title: n.symbol,
                    subtitle: b(n.drawingsCount),
                    removeBtnLabel: S,
                    isActive: n.symbol === t,
                    isMobile: e,
                    onClick: this._onItemClick.bind(this, n.symbol),
                    onClickRemove: this._onRemove.bind(this, n.symbol),
                    showFavorite: !1,
                  }),
                ),
          );
        }
        _renderEmptyContent() {
          const { theme: e } = this.state,
            t = e === s.StdTheme.Dark ? v : g;
          return null === this._symbolDrawingsMap
            ? r.createElement(p.Spinner, null)
            : r.createElement(
                'div',
                { className: y.empty },
                r.createElement(i.Icon, { className: y.image, icon: t }),
                r.createElement('span', null, w),
              );
        }
        async _getStorageContent() {
          return new Map();
        }
        async _getItems(e) {
          const t = [],
            n = this._getSymbolDrawingsMap(e);
          return (
            (await this._getStorageContent()).forEach((e, t) => {
              const r = n.get(t) || new Set();
              e.forEach((e) => r.add(e)), n.set(t, r);
            }),
            (this._symbolDrawingsMap = n),
            (this._totalCount = 0),
            this._symbolDrawingsMap.forEach((e, n) => {
              t.push({ symbol: n, drawingsCount: e.size }),
                (this._totalCount = this._totalCount + e.size);
            }),
            t.sort((e, t) =>
              e.drawingsCount === t.drawingsCount
                ? e.symbol.localeCompare(t.symbol)
                : e.drawingsCount > t.drawingsCount
                ? -1
                : 1,
            )
          );
        }
        _getSymbolDrawingsMap(e) {
          const t = new Map();
          return (
            e.forEach((e) => {
              var n;
              if ((0, d.isLineTool)(e) && e.showInObjectTree()) {
                const r = null !== (n = e.symbol()) && void 0 !== n ? n : '',
                  o = t.get(r) || new Set();
                o.add(e.id()), t.set(r, o);
              }
            }),
            t
          );
        }
      }
    },
    72651: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { ObjectTreeDialogRenderer: () => Pa });
      var r = {};
      n.r(r),
        n.d(r, {
          FILE: () => ee,
          HTML: () => re,
          TEXT: () => ne,
          URL: () => te,
        });
      var o = n(67294),
        i = n(73935);
      async function s(e, t, n) {
        let r;
        for (let o = 0; o < t; ++o)
          try {
            return await e(r);
          } catch (e) {
            (r = e), await n(o);
          }
        throw r;
      }
      async function a(e, t) {
        return s(e, t, () => Promise.resolve());
      }
      var c = n(65447);
      const l = (0, c.getLogger)('DataSourcesIcons');
      let u = null;
      function d() {
        const e = n.c[94317];
        return e
          ? Promise.resolve(e.exports.lineToolsIcons)
          : n
              .e(1890)
              .then(n.bind(n, 94317))
              .then((e) => e.lineToolsIcons);
      }
      function h() {
        const e = n.c[1495];
        return e
          ? Promise.resolve(e.exports.SERIES_ICONS)
          : n
              .e(3718)
              .then(n.bind(n, 1495))
              .then((e) => e.SERIES_ICONS);
      }
      let f = null;
      function p() {
        return (
          null === f &&
            (f = (function () {
              const e = a(d, 2)
                  .then((e) => e)
                  .catch((e) => (l.logWarn(e), {})),
                t = a(h, 2)
                  .then((e) => e)
                  .catch((e) => (l.logWarn(e), {}));
              return Promise.all([e, t]);
            })()),
          f.then((e) => ((u = { linetool: e[0], series: e[1] }), u))
        );
      }
      var g = n(57374),
        v = n(94004),
        y = n(68521),
        m = n(79881),
        b = n(93590),
        S = n(72923),
        w = n(69117);
      var T = n(5383),
        _ = n.n(T),
        C = n(34857),
        O = n(96404),
        E = n(16282),
        I = n(94184),
        D = n.n(I),
        k = n(49775),
        M = n(95860),
        x = n(67842),
        N = n(77727);
      const P = o.createContext(null);
      var A = n(45650),
        L = n(6577),
        R = n(79805),
        j = n(81973),
        B = n(37953),
        F = n(87438);
      function H(e) {
        const { viewModel: t } = (0, E.ensureNotNull)((0, o.useContext)(P)),
          n = (0, N.useForceUpdate)(),
          r = t.selection();
        (0, o.useEffect)(() => {
          const e = {};
          return (
            t.onChange().subscribe(e, () => n()),
            () => {
              t.onChange().unsubscribeAll(e);
            }
          );
        }, [t]),
          (0, o.useEffect)(() => {
            const e = {};
            return (
              r.onChange().subscribe(e, () => n()),
              () => {
                r.onChange().unsubscribeAll(e);
              }
            );
          }, [r]);
        const i = !t.canSelectionBeUnmerged(),
          s = t.isSelectionCopiable(),
          a = t.isSelectionCloneable(),
          c = !s && !a,
          l = t.canSelectionBeGrouped();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            'div',
            { className: I(B.title, B.withoutIcon) },
            (0, m.t)('Object tree'),
            !1,
          ),
          o.createElement(
            'div',
            { className: B.buttons },
            o.createElement(A.ToolWidgetIconButton, {
              className: I(B.button, !l && B.disabled),
              icon: j,
              onClick: function () {
                t.createGroupFromSelection();
              },
              isDisabled: !l,
              title: (0, m.t)('Create a group of drawings'),
              'data-name': 'group-button',
            }),
            o.createElement(
              x.ToolWidgetMenu,
              {
                className: I(B.button, c && B.disabled),
                isDisabled: c,
                content: o.createElement(k.Icon, { icon: L }),
                title: (0, m.t)('Clone, Copy'),
                arrow: !1,
                isShowTooltip: !0,
                'data-name': 'copy-clone-button',
              },
              s &&
                o.createElement(M.PopupMenuItem, {
                  'data-name': 'copy',
                  label: (0, m.t)('Copy'),
                  onClick: function () {
                    t.copySelection();
                  },
                }),
              a &&
                o.createElement(M.PopupMenuItem, {
                  'data-name': 'clone',
                  label: (0, m.t)('Clone'),
                  onClick: function () {
                    t.cloneSelection();
                  },
                }),
            ),
            o.createElement(
              x.ToolWidgetMenu,
              {
                className: I(B.button, i && B.disabled),
                isDisabled: i,
                content: o.createElement(k.Icon, { icon: R }),
                title: (0, m.t)('Move to'),
                arrow: !1,
                isShowTooltip: !0,
                'data-name': 'move-to-button',
              },
              o.createElement(M.PopupMenuItem, {
                'data-name': 'new-pane-above',
                label: (0, m.t)('New pane above'),
                onClick: function () {
                  t.unmergeSelectionUp();
                },
              }),
              o.createElement(M.PopupMenuItem, {
                'data-name': 'new-pane-below',
                label: (0, m.t)('New pane below'),
                onClick: function () {
                  t.unmergeSelectionDown();
                },
              }),
            ),
          ),
        );
      }
      var z = n(30797),
        U = n(37703);
      function G(e) {
        var t = null;
        return function () {
          return null == t && (t = e()), t;
        };
      }
      function V(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var W = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.entered = []),
              (this.isNodeInDocument = t);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'enter',
                value: function (e) {
                  var t = this,
                    n = this.entered.length;
                  return (
                    (this.entered = (function (e, t) {
                      var n = new Set(),
                        r = function (e) {
                          return n.add(e);
                        };
                      e.forEach(r), t.forEach(r);
                      var o = [];
                      return (
                        n.forEach(function (e) {
                          return o.push(e);
                        }),
                        o
                      );
                    })(
                      this.entered.filter(function (n) {
                        return (
                          t.isNodeInDocument(n) &&
                          (!n.contains || n.contains(e))
                        );
                      }),
                      [e],
                    )),
                    0 === n && this.entered.length > 0
                  );
                },
              },
              {
                key: 'leave',
                value: function (e) {
                  var t,
                    n,
                    r = this.entered.length;
                  return (
                    (this.entered =
                      ((t = this.entered.filter(this.isNodeInDocument)),
                      (n = e),
                      t.filter(function (e) {
                        return e !== n;
                      }))),
                    r > 0 && 0 === this.entered.length
                  );
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.entered = [];
                },
              },
            ]) && V(t.prototype, n),
            r && V(t, r),
            e
          );
        })(),
        K = G(function () {
          return /firefox/i.test(navigator.userAgent);
        }),
        Y = G(function () {
          return Boolean(window.safari);
        });
      function q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var X = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e);
          for (var r = t.length, o = [], i = 0; i < r; i++) o.push(i);
          o.sort(function (e, n) {
            return t[e] < t[n] ? -1 : 1;
          });
          for (var s, a, c = [], l = [], u = [], d = 0; d < r - 1; d++)
            (s = t[d + 1] - t[d]),
              (a = n[d + 1] - n[d]),
              l.push(s),
              c.push(a),
              u.push(a / s);
          for (var h = [u[0]], f = 0; f < l.length - 1; f++) {
            var p = u[f],
              g = u[f + 1];
            if (p * g <= 0) h.push(0);
            else {
              s = l[f];
              var v = l[f + 1],
                y = s + v;
              h.push((3 * y) / ((y + v) / p + (y + s) / g));
            }
          }
          h.push(u[u.length - 1]);
          for (var m, b = [], S = [], w = 0; w < h.length - 1; w++) {
            m = u[w];
            var T = h[w],
              _ = 1 / l[w],
              C = T + h[w + 1] - m - m;
            b.push((m - T - C) * _), S.push(C * _ * _);
          }
          (this.xs = t),
            (this.ys = n),
            (this.c1s = h),
            (this.c2s = b),
            (this.c3s = S);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'interpolate',
              value: function (e) {
                var t = this.xs,
                  n = this.ys,
                  r = this.c1s,
                  o = this.c2s,
                  i = this.c3s,
                  s = t.length - 1;
                if (e === t[s]) return n[s];
                for (var a, c = 0, l = i.length - 1; c <= l; ) {
                  var u = t[(a = Math.floor(0.5 * (c + l)))];
                  if (u < e) c = a + 1;
                  else {
                    if (!(u > e)) return n[a];
                    l = a - 1;
                  }
                }
                var d = e - t[(s = Math.max(0, l))],
                  h = d * d;
                return n[s] + r[s] * d + o[s] * h + i[s] * d * h;
              },
            },
          ]) && q(t.prototype, n),
          r && q(t, r),
          e
        );
      })();
      function Z(e) {
        var t = 1 === e.nodeType ? e : e.parentElement;
        if (!t) return null;
        var n = t.getBoundingClientRect(),
          r = n.top;
        return { x: n.left, y: r };
      }
      function $(e) {
        return { x: e.clientX, y: e.clientY };
      }
      function J(e, t, n, r, o) {
        var i,
          s,
          a,
          c =
            'IMG' === (i = t).nodeName &&
            (K() ||
              !(
                null !== (s = document.documentElement) &&
                void 0 !== s &&
                s.contains(i)
              )),
          l = Z(c ? e : t),
          u = { x: n.x - l.x, y: n.y - l.y },
          d = e.offsetWidth,
          h = e.offsetHeight,
          f = r.anchorX,
          p = r.anchorY,
          g = (function (e, t, n, r) {
            var o = e ? t.width : n,
              i = e ? t.height : r;
            return (
              Y() &&
                e &&
                ((i /= window.devicePixelRatio),
                (o /= window.devicePixelRatio)),
              { dragPreviewWidth: o, dragPreviewHeight: i }
            );
          })(c, t, d, h),
          v = g.dragPreviewWidth,
          y = g.dragPreviewHeight,
          m = o.offsetX,
          b = o.offsetY,
          S = 0 === b || b;
        return {
          x:
            0 === m || m
              ? m
              : new X(
                  [0, 0.5, 1],
                  [u.x, (u.x / d) * v, u.x + v - d],
                ).interpolate(f),
          y: S
            ? b
            : ((a = new X(
                [0, 0.5, 1],
                [u.y, (u.y / h) * y, u.y + y - h],
              ).interpolate(p)),
              Y() && c && (a += (window.devicePixelRatio - 1) * y),
              a),
        };
      }
      var Q,
        ee = '__NATIVE_FILE__',
        te = '__NATIVE_URL__',
        ne = '__NATIVE_TEXT__',
        re = '__NATIVE_HTML__';
      function oe(e, t, n) {
        var r = t.reduce(function (t, n) {
          return t || e.getData(n);
        }, '');
        return null != r ? r : n;
      }
      function ie(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var se =
        (ie((Q = {}), ee, {
          exposeProperties: {
            files: function (e) {
              return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
              return e.items;
            },
          },
          matchesTypes: ['Files'],
        }),
        ie(Q, re, {
          exposeProperties: {
            html: function (e, t) {
              return oe(e, t, '');
            },
          },
          matchesTypes: ['Html', 'text/html'],
        }),
        ie(Q, te, {
          exposeProperties: {
            urls: function (e, t) {
              return oe(e, t, '').split('\n');
            },
          },
          matchesTypes: ['Url', 'text/uri-list'],
        }),
        ie(Q, ne, {
          exposeProperties: {
            text: function (e, t) {
              return oe(e, t, '');
            },
          },
          matchesTypes: ['Text', 'text/plain'],
        }),
        Q);
      function ae(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var ce = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.config = t),
            (this.item = {}),
            this.initializeExposedProperties();
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'initializeExposedProperties',
              value: function () {
                var e = this;
                Object.keys(this.config.exposeProperties).forEach(function (t) {
                  Object.defineProperty(e.item, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return (
                        console.warn(
                          'Browser doesn\'t allow reading "'.concat(
                            t,
                            '" until the drop event.',
                          ),
                        ),
                        null
                      );
                    },
                  });
                });
              },
            },
            {
              key: 'loadDataTransfer',
              value: function (e) {
                var t = this;
                if (e) {
                  var n = {};
                  Object.keys(this.config.exposeProperties).forEach(function (
                    r,
                  ) {
                    n[r] = {
                      value: t.config.exposeProperties[r](
                        e,
                        t.config.matchesTypes,
                      ),
                      configurable: !0,
                      enumerable: !0,
                    };
                  }),
                    Object.defineProperties(this.item, n);
                }
              },
            },
            {
              key: 'canDrag',
              value: function () {
                return !0;
              },
            },
            {
              key: 'beginDrag',
              value: function () {
                return this.item;
              },
            },
            {
              key: 'isDragging',
              value: function (e, t) {
                return t === e.getSourceId();
              },
            },
            { key: 'endDrag', value: function () {} },
          ]) && ae(t.prototype, n),
          r && ae(t, r),
          e
        );
      })();
      function le(e) {
        if (!e) return null;
        var t = Array.prototype.slice.call(e.types || []);
        return (
          Object.keys(se).filter(function (e) {
            return se[e].matchesTypes.some(function (e) {
              return t.indexOf(e) > -1;
            });
          })[0] || null
        );
      }
      function ue(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var de = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.ownerDocument = null),
            (this.globalContext = t),
            (this.optionsArgs = n);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'window',
              get: function () {
                return this.globalContext
                  ? this.globalContext
                  : 'undefined' != typeof window
                  ? window
                  : void 0;
              },
            },
            {
              key: 'document',
              get: function () {
                var e;
                return null !== (e = this.globalContext) &&
                  void 0 !== e &&
                  e.document
                  ? this.globalContext.document
                  : this.window
                  ? this.window.document
                  : void 0;
              },
            },
            {
              key: 'rootElement',
              get: function () {
                var e;
                return (
                  (null === (e = this.optionsArgs) || void 0 === e
                    ? void 0
                    : e.rootElement) || this.window
                );
              },
            },
          ]) && ue(t.prototype, n),
          r && ue(t, r),
          e
        );
      })();
      function he(e, t) {
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
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? he(Object(n), !0).forEach(function (t) {
                pe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : he(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function pe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ge(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var ve,
        ye = (function () {
          function e(t, n, r) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.sourcePreviewNodes = new Map()),
              (this.sourcePreviewNodeOptions = new Map()),
              (this.sourceNodes = new Map()),
              (this.sourceNodeOptions = new Map()),
              (this.dragStartSourceIds = null),
              (this.dropTargetIds = []),
              (this.dragEnterTargetIds = []),
              (this.currentNativeSource = null),
              (this.currentNativeHandle = null),
              (this.currentDragSourceNode = null),
              (this.altKeyPressed = !1),
              (this.mouseMoveTimeoutTimer = null),
              (this.asyncEndDragFrameId = null),
              (this.dragOverTargetIds = null),
              (this.getSourceClientOffset = function (e) {
                var t = o.sourceNodes.get(e);
                return (t && Z(t)) || null;
              }),
              (this.endDragNativeItem = function () {
                o.isDraggingNativeItem() &&
                  (o.actions.endDrag(),
                  o.currentNativeHandle &&
                    o.registry.removeSource(o.currentNativeHandle),
                  (o.currentNativeHandle = null),
                  (o.currentNativeSource = null));
              }),
              (this.isNodeInDocument = function (e) {
                return Boolean(
                  e &&
                    o.document &&
                    o.document.body &&
                    document.body.contains(e),
                );
              }),
              (this.endDragIfSourceWasRemovedFromDOM = function () {
                var e = o.currentDragSourceNode;
                null == e ||
                  o.isNodeInDocument(e) ||
                  (o.clearCurrentDragSourceNode() &&
                    o.monitor.isDragging() &&
                    o.actions.endDrag());
              }),
              (this.handleTopDragStartCapture = function () {
                o.clearCurrentDragSourceNode(), (o.dragStartSourceIds = []);
              }),
              (this.handleTopDragStart = function (e) {
                if (!e.defaultPrevented) {
                  var t = o.dragStartSourceIds;
                  o.dragStartSourceIds = null;
                  var n = $(e);
                  o.monitor.isDragging() && o.actions.endDrag(),
                    o.actions.beginDrag(t || [], {
                      publishSource: !1,
                      getSourceClientOffset: o.getSourceClientOffset,
                      clientOffset: n,
                    });
                  var r = e.dataTransfer,
                    i = le(r);
                  if (o.monitor.isDragging()) {
                    if (r && 'function' == typeof r.setDragImage) {
                      var s = o.monitor.getSourceId(),
                        a = o.sourceNodes.get(s),
                        c = o.sourcePreviewNodes.get(s) || a;
                      if (c) {
                        var l = o.getCurrentSourcePreviewNodeOptions(),
                          u = J(
                            a,
                            c,
                            n,
                            { anchorX: l.anchorX, anchorY: l.anchorY },
                            { offsetX: l.offsetX, offsetY: l.offsetY },
                          );
                        r.setDragImage(c, u.x, u.y);
                      }
                    }
                    try {
                      null == r || r.setData('application/json', {});
                    } catch (e) {}
                    o.setCurrentDragSourceNode(e.target),
                      o.getCurrentSourcePreviewNodeOptions()
                        .captureDraggingState
                        ? o.actions.publishDragSource()
                        : setTimeout(function () {
                            return o.actions.publishDragSource();
                          }, 0);
                  } else if (i) o.beginDragNativeItem(i);
                  else {
                    if (
                      r &&
                      !r.types &&
                      ((e.target && !e.target.hasAttribute) ||
                        !e.target.hasAttribute('draggable'))
                    )
                      return;
                    e.preventDefault();
                  }
                }
              }),
              (this.handleTopDragEndCapture = function () {
                o.clearCurrentDragSourceNode() &&
                  o.monitor.isDragging() &&
                  o.actions.endDrag();
              }),
              (this.handleTopDragEnterCapture = function (e) {
                if (
                  ((o.dragEnterTargetIds = []),
                  o.enterLeaveCounter.enter(e.target) &&
                    !o.monitor.isDragging())
                ) {
                  var t = e.dataTransfer,
                    n = le(t);
                  n && o.beginDragNativeItem(n, t);
                }
              }),
              (this.handleTopDragEnter = function (e) {
                var t = o.dragEnterTargetIds;
                ((o.dragEnterTargetIds = []), o.monitor.isDragging()) &&
                  ((o.altKeyPressed = e.altKey),
                  t.length > 0 && o.actions.hover(t, { clientOffset: $(e) }),
                  t.some(function (e) {
                    return o.monitor.canDropOnTarget(e);
                  }) &&
                    (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = o.getCurrentDropEffect())));
              }),
              (this.handleTopDragOverCapture = function () {
                o.dragOverTargetIds = [];
              }),
              (this.handleTopDragOver = function (e) {
                var t = o.dragOverTargetIds;
                if (((o.dragOverTargetIds = []), !o.monitor.isDragging()))
                  return (
                    e.preventDefault(),
                    void (
                      e.dataTransfer && (e.dataTransfer.dropEffect = 'none')
                    )
                  );
                (o.altKeyPressed = e.altKey),
                  o.actions.hover(t || [], { clientOffset: $(e) }),
                  (t || []).some(function (e) {
                    return o.monitor.canDropOnTarget(e);
                  })
                    ? (e.preventDefault(),
                      e.dataTransfer &&
                        (e.dataTransfer.dropEffect = o.getCurrentDropEffect()))
                    : o.isDraggingNativeItem()
                    ? e.preventDefault()
                    : (e.preventDefault(),
                      e.dataTransfer && (e.dataTransfer.dropEffect = 'none'));
              }),
              (this.handleTopDragLeaveCapture = function (e) {
                o.isDraggingNativeItem() && e.preventDefault(),
                  o.enterLeaveCounter.leave(e.target) &&
                    o.isDraggingNativeItem() &&
                    setTimeout(function () {
                      return o.endDragNativeItem();
                    }, 0);
              }),
              (this.handleTopDropCapture = function (e) {
                var t;
                ((o.dropTargetIds = []), o.isDraggingNativeItem()) &&
                  (e.preventDefault(),
                  null === (t = o.currentNativeSource) ||
                    void 0 === t ||
                    t.loadDataTransfer(e.dataTransfer));
                o.enterLeaveCounter.reset();
              }),
              (this.handleTopDrop = function (e) {
                var t = o.dropTargetIds;
                (o.dropTargetIds = []),
                  o.actions.hover(t, { clientOffset: $(e) }),
                  o.actions.drop({ dropEffect: o.getCurrentDropEffect() }),
                  o.isDraggingNativeItem()
                    ? o.endDragNativeItem()
                    : o.monitor.isDragging() && o.actions.endDrag();
              }),
              (this.handleSelectStart = function (e) {
                var t = e.target;
                'function' == typeof t.dragDrop &&
                  ('INPUT' === t.tagName ||
                    'SELECT' === t.tagName ||
                    'TEXTAREA' === t.tagName ||
                    t.isContentEditable ||
                    (e.preventDefault(), t.dragDrop()));
              }),
              (this.options = new de(n, r)),
              (this.actions = t.getActions()),
              (this.monitor = t.getMonitor()),
              (this.registry = t.getRegistry()),
              (this.enterLeaveCounter = new W(this.isNodeInDocument));
          }
          var t, n, o;
          return (
            (t = e),
            (n = [
              {
                key: 'profile',
                value: function () {
                  var e, t;
                  return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions:
                      this.sourcePreviewNodeOptions.size,
                    sourceNodeOptions: this.sourceNodeOptions.size,
                    sourceNodes: this.sourceNodes.size,
                    dragStartSourceIds:
                      (null === (e = this.dragStartSourceIds) || void 0 === e
                        ? void 0
                        : e.length) || 0,
                    dropTargetIds: this.dropTargetIds.length,
                    dragEnterTargetIds: this.dragEnterTargetIds.length,
                    dragOverTargetIds:
                      (null === (t = this.dragOverTargetIds) || void 0 === t
                        ? void 0
                        : t.length) || 0,
                  };
                },
              },
              {
                key: 'window',
                get: function () {
                  return this.options.window;
                },
              },
              {
                key: 'document',
                get: function () {
                  return this.options.document;
                },
              },
              {
                key: 'rootElement',
                get: function () {
                  return this.options.rootElement;
                },
              },
              {
                key: 'setup',
                value: function () {
                  var e = this.rootElement;
                  if (void 0 !== e) {
                    if (e.__isReactDndBackendSetUp)
                      throw new Error(
                        'Cannot have two HTML5 backends at the same time.',
                      );
                    (e.__isReactDndBackendSetUp = !0),
                      this.addEventListeners(e);
                  }
                },
              },
              {
                key: 'teardown',
                value: function () {
                  var e,
                    t = this.rootElement;
                  void 0 !== t &&
                    ((t.__isReactDndBackendSetUp = !1),
                    this.removeEventListeners(this.rootElement),
                    this.clearCurrentDragSourceNode(),
                    this.asyncEndDragFrameId &&
                      (null === (e = this.window) ||
                        void 0 === e ||
                        e.cancelAnimationFrame(this.asyncEndDragFrameId)));
                },
              },
              {
                key: 'connectDragPreview',
                value: function (e, t, n) {
                  var r = this;
                  return (
                    this.sourcePreviewNodeOptions.set(e, n),
                    this.sourcePreviewNodes.set(e, t),
                    function () {
                      r.sourcePreviewNodes.delete(e),
                        r.sourcePreviewNodeOptions.delete(e);
                    }
                  );
                },
              },
              {
                key: 'connectDragSource',
                value: function (e, t, n) {
                  var r = this;
                  this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                  var o = function (t) {
                      return r.handleDragStart(t, e);
                    },
                    i = function (e) {
                      return r.handleSelectStart(e);
                    };
                  return (
                    t.setAttribute('draggable', 'true'),
                    t.addEventListener('dragstart', o),
                    t.addEventListener('selectstart', i),
                    function () {
                      r.sourceNodes.delete(e),
                        r.sourceNodeOptions.delete(e),
                        t.removeEventListener('dragstart', o),
                        t.removeEventListener('selectstart', i),
                        t.setAttribute('draggable', 'false');
                    }
                  );
                },
              },
              {
                key: 'connectDropTarget',
                value: function (e, t) {
                  var n = this,
                    r = function (t) {
                      return n.handleDragEnter(t, e);
                    },
                    o = function (t) {
                      return n.handleDragOver(t, e);
                    },
                    i = function (t) {
                      return n.handleDrop(t, e);
                    };
                  return (
                    t.addEventListener('dragenter', r),
                    t.addEventListener('dragover', o),
                    t.addEventListener('drop', i),
                    function () {
                      t.removeEventListener('dragenter', r),
                        t.removeEventListener('dragover', o),
                        t.removeEventListener('drop', i);
                    }
                  );
                },
              },
              {
                key: 'addEventListeners',
                value: function (e) {
                  e.addEventListener &&
                    (e.addEventListener('dragstart', this.handleTopDragStart),
                    e.addEventListener(
                      'dragstart',
                      this.handleTopDragStartCapture,
                      !0,
                    ),
                    e.addEventListener(
                      'dragend',
                      this.handleTopDragEndCapture,
                      !0,
                    ),
                    e.addEventListener('dragenter', this.handleTopDragEnter),
                    e.addEventListener(
                      'dragenter',
                      this.handleTopDragEnterCapture,
                      !0,
                    ),
                    e.addEventListener(
                      'dragleave',
                      this.handleTopDragLeaveCapture,
                      !0,
                    ),
                    e.addEventListener('dragover', this.handleTopDragOver),
                    e.addEventListener(
                      'dragover',
                      this.handleTopDragOverCapture,
                      !0,
                    ),
                    e.addEventListener('drop', this.handleTopDrop),
                    e.addEventListener('drop', this.handleTopDropCapture, !0));
                },
              },
              {
                key: 'removeEventListeners',
                value: function (e) {
                  e.removeEventListener &&
                    (e.removeEventListener(
                      'dragstart',
                      this.handleTopDragStart,
                    ),
                    e.removeEventListener(
                      'dragstart',
                      this.handleTopDragStartCapture,
                      !0,
                    ),
                    e.removeEventListener(
                      'dragend',
                      this.handleTopDragEndCapture,
                      !0,
                    ),
                    e.removeEventListener('dragenter', this.handleTopDragEnter),
                    e.removeEventListener(
                      'dragenter',
                      this.handleTopDragEnterCapture,
                      !0,
                    ),
                    e.removeEventListener(
                      'dragleave',
                      this.handleTopDragLeaveCapture,
                      !0,
                    ),
                    e.removeEventListener('dragover', this.handleTopDragOver),
                    e.removeEventListener(
                      'dragover',
                      this.handleTopDragOverCapture,
                      !0,
                    ),
                    e.removeEventListener('drop', this.handleTopDrop),
                    e.removeEventListener(
                      'drop',
                      this.handleTopDropCapture,
                      !0,
                    ));
                },
              },
              {
                key: 'getCurrentSourceNodeOptions',
                value: function () {
                  var e = this.monitor.getSourceId(),
                    t = this.sourceNodeOptions.get(e);
                  return fe(
                    { dropEffect: this.altKeyPressed ? 'copy' : 'move' },
                    t || {},
                  );
                },
              },
              {
                key: 'getCurrentDropEffect',
                value: function () {
                  return this.isDraggingNativeItem()
                    ? 'copy'
                    : this.getCurrentSourceNodeOptions().dropEffect;
                },
              },
              {
                key: 'getCurrentSourcePreviewNodeOptions',
                value: function () {
                  var e = this.monitor.getSourceId();
                  return fe(
                    { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                    this.sourcePreviewNodeOptions.get(e) || {},
                  );
                },
              },
              {
                key: 'isDraggingNativeItem',
                value: function () {
                  var e = this.monitor.getItemType();
                  return Object.keys(r).some(function (t) {
                    return r[t] === e;
                  });
                },
              },
              {
                key: 'beginDragNativeItem',
                value: function (e, t) {
                  this.clearCurrentDragSourceNode(),
                    (this.currentNativeSource = (function (e, t) {
                      var n = new ce(se[e]);
                      return n.loadDataTransfer(t), n;
                    })(e, t)),
                    (this.currentNativeHandle = this.registry.addSource(
                      e,
                      this.currentNativeSource,
                    )),
                    this.actions.beginDrag([this.currentNativeHandle]);
                },
              },
              {
                key: 'setCurrentDragSourceNode',
                value: function (e) {
                  var t = this;
                  this.clearCurrentDragSourceNode(),
                    (this.currentDragSourceNode = e),
                    (this.mouseMoveTimeoutTimer = setTimeout(function () {
                      var e;
                      return null === (e = t.rootElement) || void 0 === e
                        ? void 0
                        : e.addEventListener(
                            'mousemove',
                            t.endDragIfSourceWasRemovedFromDOM,
                            !0,
                          );
                    }, 1e3));
                },
              },
              {
                key: 'clearCurrentDragSourceNode',
                value: function () {
                  var e;
                  return (
                    !!this.currentDragSourceNode &&
                    ((this.currentDragSourceNode = null),
                    this.rootElement &&
                      (null === (e = this.window) ||
                        void 0 === e ||
                        e.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
                      this.rootElement.removeEventListener(
                        'mousemove',
                        this.endDragIfSourceWasRemovedFromDOM,
                        !0,
                      )),
                    (this.mouseMoveTimeoutTimer = null),
                    !0)
                  );
                },
              },
              {
                key: 'handleDragStart',
                value: function (e, t) {
                  e.defaultPrevented ||
                    (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                    this.dragStartSourceIds.unshift(t));
                },
              },
              {
                key: 'handleDragEnter',
                value: function (e, t) {
                  this.dragEnterTargetIds.unshift(t);
                },
              },
              {
                key: 'handleDragOver',
                value: function (e, t) {
                  null === this.dragOverTargetIds &&
                    (this.dragOverTargetIds = []),
                    this.dragOverTargetIds.unshift(t);
                },
              },
              {
                key: 'handleDrop',
                value: function (e, t) {
                  this.dropTargetIds.unshift(t);
                },
              },
            ]) && ge(t.prototype, n),
            o && ge(t, o),
            e
          );
        })(),
        me = function (e, t, n) {
          return new ye(e, t, n);
        };
      function be(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
        if (!e) {
          var i;
          if (void 0 === t)
            i = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          else {
            var s = 0;
            (i = new Error(
              t.replace(/%s/g, function () {
                return r[s++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((i.framesToPop = 1), i);
        }
      }
      !(function (e) {
        (e.mouse = 'mouse'), (e.touch = 'touch'), (e.keyboard = 'keyboard');
      })(ve || (ve = {}));
      var Se = 1,
        we = 0;
      function Te(e) {
        return void 0 === e.button || e.button === we;
      }
      function _e(e) {
        return !!e.targetTouches;
      }
      function Ce(e, t) {
        return _e(e)
          ? (function (e, t) {
              return 1 === e.targetTouches.length
                ? Ce(e.targetTouches[0])
                : t &&
                  1 === e.touches.length &&
                  e.touches[0].target === t.target
                ? Ce(e.touches[0])
                : void 0;
            })(e, t)
          : { x: e.clientX, y: e.clientY };
      }
      var Oe = (function () {
        var e = !1;
        try {
          addEventListener(
            'test',
            function () {},
            Object.defineProperty({}, 'passive', {
              get: function () {
                return (e = !0), !0;
              },
            }),
          );
        } catch (e) {}
        return e;
      })();
      function Ee(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var Ie,
        De = (function () {
          function e(t, n) {
            var r = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.enableTouchEvents = !0),
              (this.enableMouseEvents = !1),
              (this.enableKeyboardEvents = !1),
              (this.ignoreContextMenu = !1),
              (this.enableHoverOutsideTarget = !1),
              (this.touchSlop = 0),
              (this.scrollAngleRanges = void 0),
              (this.context = n),
              (this.delayTouchStart = t.delayTouchStart || t.delay || 0),
              (this.delayMouseStart = t.delayMouseStart || t.delay || 0),
              Object.keys(t).forEach(function (e) {
                null != t[e] && (r[e] = t[e]);
              });
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'window',
                get: function () {
                  return this.context && this.context.window
                    ? this.context.window
                    : 'undefined' != typeof window
                    ? window
                    : void 0;
                },
              },
              {
                key: 'document',
                get: function () {
                  var e;
                  return null !== (e = this.context) &&
                    void 0 !== e &&
                    e.document
                    ? this.context.document
                    : this.window
                    ? this.window.document
                    : void 0;
                },
              },
            ]) && Ee(t.prototype, n),
            r && Ee(t, r),
            e
          );
        })();
      function ke(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Me(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var xe =
          (Me((Ie = {}), ve.mouse, {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            contextmenu: 'contextmenu',
          }),
          Me(Ie, ve.touch, {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
          }),
          Me(Ie, ve.keyboard, { keydown: 'keydown' }),
          Ie),
        Ne = (function () {
          function e(t, n, r) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.getSourceClientOffset = function (e) {
                var t = o.sourceNodes.get(e);
                return (
                  t &&
                  (function (e) {
                    var t = 1 === e.nodeType ? e : e.parentElement;
                    if (t) {
                      var n = t.getBoundingClientRect(),
                        r = n.top;
                      return { x: n.left, y: r };
                    }
                  })(t)
                );
              }),
              (this.handleTopMoveStartCapture = function (e) {
                Te(e) && (o.moveStartSourceIds = []);
              }),
              (this.handleMoveStart = function (e) {
                Array.isArray(o.moveStartSourceIds) &&
                  o.moveStartSourceIds.unshift(e);
              }),
              (this.handleTopMoveStart = function (e) {
                if (Te(e)) {
                  var t = Ce(e);
                  t &&
                    (_e(e) && (o.lastTargetTouchFallback = e.targetTouches[0]),
                    (o._mouseClientOffset = t)),
                    (o.waitingForDelay = !1);
                }
              }),
              (this.handleTopMoveStartDelay = function (e) {
                if (Te(e)) {
                  var t =
                    e.type === xe.touch.start
                      ? o.options.delayTouchStart
                      : o.options.delayMouseStart;
                  (o.timeout = setTimeout(o.handleTopMoveStart.bind(o, e), t)),
                    (o.waitingForDelay = !0);
                }
              }),
              (this.handleTopMoveCapture = function () {
                o.dragOverTargetIds = [];
              }),
              (this.handleMove = function (e, t) {
                o.dragOverTargetIds && o.dragOverTargetIds.unshift(t);
              }),
              (this.handleTopMove = function (e) {
                if (
                  (o.timeout && clearTimeout(o.timeout),
                  o.document && !o.waitingForDelay)
                ) {
                  var t,
                    n,
                    r,
                    i,
                    s = o.moveStartSourceIds,
                    a = o.dragOverTargetIds,
                    c = o.options.enableHoverOutsideTarget,
                    l = Ce(e, o.lastTargetTouchFallback);
                  if (l)
                    if (
                      o._isScrolling ||
                      (!o.monitor.isDragging() &&
                        (function (e, t, n, r, o) {
                          if (!o) return !1;
                          for (
                            var i =
                                (180 * Math.atan2(r - t, n - e)) / Math.PI +
                                180,
                              s = 0;
                            s < o.length;
                            ++s
                          )
                            if (
                              (null == o[s].start || i >= o[s].start) &&
                              (null == o[s].end || i <= o[s].end)
                            )
                              return !0;
                          return !1;
                        })(
                          o._mouseClientOffset.x || 0,
                          o._mouseClientOffset.y || 0,
                          l.x,
                          l.y,
                          o.options.scrollAngleRanges,
                        ))
                    )
                      o._isScrolling = !0;
                    else if (
                      (!o.monitor.isDragging() &&
                        o._mouseClientOffset.hasOwnProperty('x') &&
                        s &&
                        ((t = o._mouseClientOffset.x || 0),
                        (n = o._mouseClientOffset.y || 0),
                        (r = l.x),
                        (i = l.y),
                        Math.sqrt(
                          Math.pow(Math.abs(r - t), 2) +
                            Math.pow(Math.abs(i - n), 2),
                        ) > (o.options.touchSlop ? o.options.touchSlop : 0)) &&
                        ((o.moveStartSourceIds = void 0),
                        o.actions.beginDrag(s, {
                          clientOffset: o._mouseClientOffset,
                          getSourceClientOffset: o.getSourceClientOffset,
                          publishSource: !1,
                        })),
                      o.monitor.isDragging())
                    ) {
                      var u = o.sourceNodes.get(o.monitor.getSourceId());
                      o.installSourceNodeRemovalObserver(u),
                        o.actions.publishDragSource(),
                        e.cancelable && e.preventDefault();
                      var d = (a || [])
                          .map(function (e) {
                            return o.targetNodes.get(e);
                          })
                          .filter(function (e) {
                            return !!e;
                          }),
                        h = o.options.getDropTargetElementsAtPoint
                          ? o.options.getDropTargetElementsAtPoint(l.x, l.y, d)
                          : o.document.elementsFromPoint(l.x, l.y),
                        f = [];
                      for (var p in h)
                        if (h.hasOwnProperty(p)) {
                          var g = h[p];
                          for (f.push(g); g; )
                            (g = g.parentElement) &&
                              -1 === f.indexOf(g) &&
                              f.push(g);
                        }
                      var v = f
                        .filter(function (e) {
                          return d.indexOf(e) > -1;
                        })
                        .map(function (e) {
                          return o._getDropTargetId(e);
                        })
                        .filter(function (e) {
                          return !!e;
                        })
                        .filter(function (e, t, n) {
                          return n.indexOf(e) === t;
                        });
                      if (c)
                        for (var y in o.targetNodes) {
                          var m = o.targetNodes.get(y);
                          if (u && m && m.contains(u) && -1 === v.indexOf(y)) {
                            v.unshift(y);
                            break;
                          }
                        }
                      v.reverse(), o.actions.hover(v, { clientOffset: l });
                    }
                }
              }),
              (this._getDropTargetId = function (e) {
                for (
                  var t = o.targetNodes.keys(), n = t.next();
                  !1 === n.done;

                ) {
                  var r = n.value;
                  if (e === o.targetNodes.get(r)) return r;
                  n = t.next();
                }
              }),
              (this.handleTopMoveEndCapture = function (e) {
                (o._isScrolling = !1),
                  (o.lastTargetTouchFallback = void 0),
                  (function (e) {
                    return void 0 === e.buttons || 0 == (e.buttons & Se);
                  })(e) &&
                    (o.monitor.isDragging() && !o.monitor.didDrop()
                      ? (e.cancelable && e.preventDefault(),
                        (o._mouseClientOffset = {}),
                        o.uninstallSourceNodeRemovalObserver(),
                        o.actions.drop(),
                        o.actions.endDrag())
                      : (o.moveStartSourceIds = void 0));
              }),
              (this.handleCancelOnEscape = function (e) {
                'Escape' === e.key &&
                  o.monitor.isDragging() &&
                  ((o._mouseClientOffset = {}),
                  o.uninstallSourceNodeRemovalObserver(),
                  o.actions.endDrag());
              }),
              (this.options = new De(r, n)),
              (this.actions = t.getActions()),
              (this.monitor = t.getMonitor()),
              (this.sourceNodes = new Map()),
              (this.sourcePreviewNodes = new Map()),
              (this.sourcePreviewNodeOptions = new Map()),
              (this.targetNodes = new Map()),
              (this.listenerTypes = []),
              (this._mouseClientOffset = {}),
              (this._isScrolling = !1),
              this.options.enableMouseEvents &&
                this.listenerTypes.push(ve.mouse),
              this.options.enableTouchEvents &&
                this.listenerTypes.push(ve.touch),
              this.options.enableKeyboardEvents &&
                this.listenerTypes.push(ve.keyboard);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'profile',
                value: function () {
                  var e;
                  return {
                    sourceNodes: this.sourceNodes.size,
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions:
                      this.sourcePreviewNodeOptions.size,
                    targetNodes: this.targetNodes.size,
                    dragOverTargetIds:
                      (null === (e = this.dragOverTargetIds) || void 0 === e
                        ? void 0
                        : e.length) || 0,
                  };
                },
              },
              {
                key: 'document',
                get: function () {
                  return this.options.document;
                },
              },
              {
                key: 'setup',
                value: function () {
                  this.document &&
                    (be(
                      !e.isSetUp,
                      'Cannot have two Touch backends at the same time.',
                    ),
                    (e.isSetUp = !0),
                    this.addEventListener(
                      this.document,
                      'start',
                      this.getTopMoveStartHandler(),
                    ),
                    this.addEventListener(
                      this.document,
                      'start',
                      this.handleTopMoveStartCapture,
                      !0,
                    ),
                    this.addEventListener(
                      this.document,
                      'move',
                      this.handleTopMove,
                    ),
                    this.addEventListener(
                      this.document,
                      'move',
                      this.handleTopMoveCapture,
                      !0,
                    ),
                    this.addEventListener(
                      this.document,
                      'end',
                      this.handleTopMoveEndCapture,
                      !0,
                    ),
                    this.options.enableMouseEvents &&
                      !this.options.ignoreContextMenu &&
                      this.addEventListener(
                        this.document,
                        'contextmenu',
                        this.handleTopMoveEndCapture,
                      ),
                    this.options.enableKeyboardEvents &&
                      this.addEventListener(
                        this.document,
                        'keydown',
                        this.handleCancelOnEscape,
                        !0,
                      ));
                },
              },
              {
                key: 'teardown',
                value: function () {
                  this.document &&
                    ((e.isSetUp = !1),
                    (this._mouseClientOffset = {}),
                    this.removeEventListener(
                      this.document,
                      'start',
                      this.handleTopMoveStartCapture,
                      !0,
                    ),
                    this.removeEventListener(
                      this.document,
                      'start',
                      this.handleTopMoveStart,
                    ),
                    this.removeEventListener(
                      this.document,
                      'move',
                      this.handleTopMoveCapture,
                      !0,
                    ),
                    this.removeEventListener(
                      this.document,
                      'move',
                      this.handleTopMove,
                    ),
                    this.removeEventListener(
                      this.document,
                      'end',
                      this.handleTopMoveEndCapture,
                      !0,
                    ),
                    this.options.enableMouseEvents &&
                      !this.options.ignoreContextMenu &&
                      this.removeEventListener(
                        this.document,
                        'contextmenu',
                        this.handleTopMoveEndCapture,
                      ),
                    this.options.enableKeyboardEvents &&
                      this.removeEventListener(
                        this.document,
                        'keydown',
                        this.handleCancelOnEscape,
                        !0,
                      ),
                    this.uninstallSourceNodeRemovalObserver());
                },
              },
              {
                key: 'addEventListener',
                value: function (e, t, n, r) {
                  var o = Oe ? { capture: r, passive: !1 } : r;
                  this.listenerTypes.forEach(function (r) {
                    var i = xe[r][t];
                    i && e.addEventListener(i, n, o);
                  });
                },
              },
              {
                key: 'removeEventListener',
                value: function (e, t, n, r) {
                  var o = Oe ? { capture: r, passive: !1 } : r;
                  this.listenerTypes.forEach(function (r) {
                    var i = xe[r][t];
                    i && e.removeEventListener(i, n, o);
                  });
                },
              },
              {
                key: 'connectDragSource',
                value: function (e, t) {
                  var n = this,
                    r = this.handleMoveStart.bind(this, e);
                  return (
                    this.sourceNodes.set(e, t),
                    this.addEventListener(t, 'start', r),
                    function () {
                      n.sourceNodes.delete(e),
                        n.removeEventListener(t, 'start', r);
                    }
                  );
                },
              },
              {
                key: 'connectDragPreview',
                value: function (e, t, n) {
                  var r = this;
                  return (
                    this.sourcePreviewNodeOptions.set(e, n),
                    this.sourcePreviewNodes.set(e, t),
                    function () {
                      r.sourcePreviewNodes.delete(e),
                        r.sourcePreviewNodeOptions.delete(e);
                    }
                  );
                },
              },
              {
                key: 'connectDropTarget',
                value: function (e, t) {
                  var n = this;
                  if (!this.document) return function () {};
                  var r = function (r) {
                    if (n.document && n.monitor.isDragging()) {
                      var o;
                      switch (r.type) {
                        case xe.mouse.move:
                          o = { x: r.clientX, y: r.clientY };
                          break;
                        case xe.touch.move:
                          o = {
                            x: r.touches[0].clientX,
                            y: r.touches[0].clientY,
                          };
                      }
                      var i =
                          null != o
                            ? n.document.elementFromPoint(o.x, o.y)
                            : void 0,
                        s = i && t.contains(i);
                      return i === t || s ? n.handleMove(r, e) : void 0;
                    }
                  };
                  return (
                    this.addEventListener(this.document.body, 'move', r),
                    this.targetNodes.set(e, t),
                    function () {
                      n.document &&
                        (n.targetNodes.delete(e),
                        n.removeEventListener(n.document.body, 'move', r));
                    }
                  );
                },
              },
              {
                key: 'getTopMoveStartHandler',
                value: function () {
                  return this.options.delayTouchStart ||
                    this.options.delayMouseStart
                    ? this.handleTopMoveStartDelay
                    : this.handleTopMoveStart;
                },
              },
              {
                key: 'installSourceNodeRemovalObserver',
                value: function (e) {
                  var t = this;
                  this.uninstallSourceNodeRemovalObserver(),
                    (this.draggedSourceNode = e),
                    (this.draggedSourceNodeRemovalObserver =
                      new MutationObserver(function () {
                        e &&
                          !e.parentElement &&
                          (t.resurrectSourceNode(),
                          t.uninstallSourceNodeRemovalObserver());
                      })),
                    e &&
                      e.parentElement &&
                      this.draggedSourceNodeRemovalObserver.observe(
                        e.parentElement,
                        { childList: !0 },
                      );
                },
              },
              {
                key: 'resurrectSourceNode',
                value: function () {
                  this.document &&
                    this.draggedSourceNode &&
                    ((this.draggedSourceNode.style.display = 'none'),
                    this.draggedSourceNode.removeAttribute('data-reactid'),
                    this.document.body.appendChild(this.draggedSourceNode));
                },
              },
              {
                key: 'uninstallSourceNodeRemovalObserver',
                value: function () {
                  this.draggedSourceNodeRemovalObserver &&
                    this.draggedSourceNodeRemovalObserver.disconnect(),
                    (this.draggedSourceNodeRemovalObserver = void 0),
                    (this.draggedSourceNode = void 0);
                },
              },
            ]) && ke(t.prototype, n),
            r && ke(t, r),
            e
          );
        })(),
        Pe = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          return new Ne(e, t, n);
        },
        Ae = n(85893),
        Le = 'dnd-core/INIT_COORDS',
        Re = 'dnd-core/BEGIN_DRAG',
        je = 'dnd-core/PUBLISH_DRAG_SOURCE',
        Be = 'dnd-core/HOVER',
        Fe = 'dnd-core/DROP',
        He = 'dnd-core/END_DRAG';
      function ze(e, t) {
        return {
          type: Le,
          payload: { sourceClientOffset: t || null, clientOffset: e || null },
        };
      }
      function Ue(e) {
        return (Ue =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function Ge(e, t, n) {
        return t.split('.').reduce(function (e, t) {
          return e && e[t] ? e[t] : n || null;
        }, e);
      }
      function Ve(e, t) {
        return e.filter(function (e) {
          return e !== t;
        });
      }
      function We(e) {
        return 'object' === Ue(e);
      }
      function Ke(e, t) {
        var n = new Map(),
          r = function (e) {
            n.set(e, n.has(e) ? n.get(e) + 1 : 1);
          };
        e.forEach(r), t.forEach(r);
        var o = [];
        return (
          n.forEach(function (e, t) {
            1 === e && o.push(t);
          }),
          o
        );
      }
      var Ye = {
        type: Le,
        payload: { clientOffset: null, sourceClientOffset: null },
      };
      function qe(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { publishSource: !0 },
            r = n.publishSource,
            o = void 0 === r || r,
            i = n.clientOffset,
            s = n.getSourceClientOffset,
            a = e.getMonitor(),
            c = e.getRegistry();
          e.dispatch(ze(i)), Xe(t, a, c);
          var l = Je(t, a);
          if (null !== l) {
            var u = null;
            if (i) {
              if (!s) throw new Error('getSourceClientOffset must be defined');
              Ze(s), (u = s(l));
            }
            e.dispatch(ze(i, u));
            var d = c.getSource(l),
              h = d.beginDrag(a, l);
            if (null != h) {
              $e(h), c.pinSource(l);
              var f = c.getSourceType(l);
              return {
                type: Re,
                payload: {
                  itemType: f,
                  item: h,
                  sourceId: l,
                  clientOffset: i || null,
                  sourceClientOffset: u || null,
                  isSourcePublic: !!o,
                },
              };
            }
          } else e.dispatch(Ye);
        };
      }
      function Xe(e, t, n) {
        be(!t.isDragging(), 'Cannot call beginDrag while dragging.'),
          e.forEach(function (e) {
            be(n.getSource(e), 'Expected sourceIds to be registered.');
          });
      }
      function Ze(e) {
        be(
          'function' == typeof e,
          'When clientOffset is provided, getSourceClientOffset must be a function.',
        );
      }
      function $e(e) {
        be(We(e), 'Item must be an object.');
      }
      function Je(e, t) {
        for (var n = null, r = e.length - 1; r >= 0; r--)
          if (t.canDragSource(e[r])) {
            n = e[r];
            break;
          }
        return n;
      }
      function Qe(e) {
        return function () {
          if (e.getMonitor().isDragging()) return { type: je };
        };
      }
      function et(e, t) {
        return null === t
          ? null === e
          : Array.isArray(e)
          ? e.some(function (e) {
              return e === t;
            })
          : e === t;
      }
      function tt(e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.clientOffset;
          nt(t);
          var o = t.slice(0),
            i = e.getMonitor(),
            s = e.getRegistry();
          rt(o, i, s);
          var a = i.getItemType();
          return (
            ot(o, s, a),
            it(o, i, s),
            { type: Be, payload: { targetIds: o, clientOffset: r || null } }
          );
        };
      }
      function nt(e) {
        be(Array.isArray(e), 'Expected targetIds to be an array.');
      }
      function rt(e, t, n) {
        be(t.isDragging(), 'Cannot call hover while not dragging.'),
          be(!t.didDrop(), 'Cannot call hover after drop.');
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          be(
            e.lastIndexOf(o) === r,
            'Expected targetIds to be unique in the passed array.',
          ),
            be(n.getTarget(o), 'Expected targetIds to be registered.');
        }
      }
      function ot(e, t, n) {
        for (var r = e.length - 1; r >= 0; r--) {
          var o = e[r];
          et(t.getTargetType(o), n) || e.splice(r, 1);
        }
      }
      function it(e, t, n) {
        e.forEach(function (e) {
          n.getTarget(e).hover(t, e);
        });
      }
      function st(e, t) {
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
      function at(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? st(Object(n), !0).forEach(function (t) {
                ct(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : st(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function ct(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function lt(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.getMonitor(),
            r = e.getRegistry();
          ut(n);
          var o = ht(n);
          o.forEach(function (o, i) {
            var s = dt(o, i, r, n),
              a = { type: Fe, payload: { dropResult: at(at({}, t), s) } };
            e.dispatch(a);
          });
        };
      }
      function ut(e) {
        be(e.isDragging(), 'Cannot call drop while not dragging.'),
          be(!e.didDrop(), 'Cannot call drop twice during one drag operation.');
      }
      function dt(e, t, n, r) {
        var o = n.getTarget(e),
          i = o ? o.drop(r, e) : void 0;
        return (
          (function (e) {
            be(
              void 0 === e || We(e),
              'Drop result must either be an object or undefined.',
            );
          })(i),
          void 0 === i && (i = 0 === t ? {} : r.getDropResult()),
          i
        );
      }
      function ht(e) {
        var t = e.getTargetIds().filter(e.canDropOnTarget, e);
        return t.reverse(), t;
      }
      function ft(e) {
        return function () {
          var t = e.getMonitor(),
            n = e.getRegistry();
          !(function (e) {
            be(e.isDragging(), 'Cannot call endDrag while not dragging.');
          })(t);
          var r = t.getSourceId();
          null != r && (n.getSource(r, !0).endDrag(t, r), n.unpinSource());
          return { type: He };
        };
      }
      function pt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var gt = (function () {
          function e(t, n) {
            var r = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.isSetUp = !1),
              (this.handleRefCountChange = function () {
                var e = r.store.getState().refCount > 0;
                r.backend &&
                  (e && !r.isSetUp
                    ? (r.backend.setup(), (r.isSetUp = !0))
                    : !e &&
                      r.isSetUp &&
                      (r.backend.teardown(), (r.isSetUp = !1)));
              }),
              (this.store = t),
              (this.monitor = n),
              t.subscribe(this.handleRefCountChange);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveBackend',
                value: function (e) {
                  this.backend = e;
                },
              },
              {
                key: 'getMonitor',
                value: function () {
                  return this.monitor;
                },
              },
              {
                key: 'getBackend',
                value: function () {
                  return this.backend;
                },
              },
              {
                key: 'getRegistry',
                value: function () {
                  return this.monitor.registry;
                },
              },
              {
                key: 'getActions',
                value: function () {
                  var e = this,
                    t = this.store.dispatch,
                    n = (function (e) {
                      return {
                        beginDrag: qe(e),
                        publishDragSource: Qe(e),
                        hover: tt(e),
                        drop: lt(e),
                        endDrag: ft(e),
                      };
                    })(this);
                  return Object.keys(n).reduce(function (r, o) {
                    var i,
                      s = n[o];
                    return (
                      (r[o] =
                        ((i = s),
                        function () {
                          for (
                            var n = arguments.length, r = new Array(n), o = 0;
                            o < n;
                            o++
                          )
                            r[o] = arguments[o];
                          var s = i.apply(e, r);
                          void 0 !== s && t(s);
                        })),
                      r
                    );
                  }, {});
                },
              },
              {
                key: 'dispatch',
                value: function (e) {
                  this.store.dispatch(e);
                },
              },
            ]) && pt(t.prototype, n),
            r && pt(t, r),
            e
          );
        })(),
        vt = n(15857),
        yt = function (e, t) {
          return e === t;
        };
      function mt(e, t) {
        return (!e && !t) || (!(!e || !t) && e.x === t.x && e.y === t.y);
      }
      function bt(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yt;
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; ++r) if (!n(e[r], t[r])) return !1;
        return !0;
      }
      function St(e, t) {
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
      function wt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? St(Object(n), !0).forEach(function (t) {
                Tt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : St(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function Tt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var _t = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null,
      };
      function Ct() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _t,
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = t.payload;
        switch (t.type) {
          case Le:
          case Re:
            return {
              initialSourceClientOffset: n.sourceClientOffset,
              initialClientOffset: n.clientOffset,
              clientOffset: n.clientOffset,
            };
          case Be:
            return mt(e.clientOffset, n.clientOffset)
              ? e
              : wt(wt({}, e), {}, { clientOffset: n.clientOffset });
          case He:
          case Fe:
            return _t;
          default:
            return e;
        }
      }
      var Ot = 'dnd-core/ADD_SOURCE',
        Et = 'dnd-core/ADD_TARGET',
        It = 'dnd-core/REMOVE_SOURCE',
        Dt = 'dnd-core/REMOVE_TARGET';
      function kt(e, t) {
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
      function Mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? kt(Object(n), !0).forEach(function (t) {
                xt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : kt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function xt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Nt = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
      };
      function Pt() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nt,
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = t.payload;
        switch (t.type) {
          case Re:
            return Mt(
              Mt({}, e),
              {},
              {
                itemType: n.itemType,
                item: n.item,
                sourceId: n.sourceId,
                isSourcePublic: n.isSourcePublic,
                dropResult: null,
                didDrop: !1,
              },
            );
          case je:
            return Mt(Mt({}, e), {}, { isSourcePublic: !0 });
          case Be:
            return Mt(Mt({}, e), {}, { targetIds: n.targetIds });
          case Dt:
            return -1 === e.targetIds.indexOf(n.targetId)
              ? e
              : Mt(Mt({}, e), {}, { targetIds: Ve(e.targetIds, n.targetId) });
          case Fe:
            return Mt(
              Mt({}, e),
              {},
              { dropResult: n.dropResult, didDrop: !0, targetIds: [] },
            );
          case He:
            return Mt(
              Mt({}, e),
              {},
              {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
                targetIds: [],
              },
            );
          default:
            return e;
        }
      }
      function At() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case Ot:
          case Et:
            return e + 1;
          case It:
          case Dt:
            return e - 1;
          default:
            return e;
        }
      }
      var Lt = [],
        Rt = [];
      function jt(e, t) {
        return (
          e !== Lt &&
          (e === Rt ||
            void 0 === t ||
            ((n = e),
            t.filter(function (e) {
              return n.indexOf(e) > -1;
            })).length > 0)
        );
        var n;
      }
      function Bt() {
        var e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
          case Be:
            break;
          case Ot:
          case Et:
          case Dt:
          case It:
            return Lt;
          case Re:
          case je:
          case He:
          case Fe:
          default:
            return Rt;
        }
        var t = e.payload,
          n = t.targetIds,
          r = void 0 === n ? [] : n,
          o = t.prevTargetIds,
          i = void 0 === o ? [] : o,
          s = Ke(r, i),
          a = s.length > 0 || !bt(r, i);
        if (!a) return Lt;
        var c = i[i.length - 1],
          l = r[r.length - 1];
        return c !== l && (c && s.push(c), l && s.push(l)), s;
      }
      function Ft() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return e + 1;
      }
      function Ht(e, t) {
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
      function zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ht(Object(n), !0).forEach(function (t) {
                Ut(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ht(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function Ut(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Gt() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return {
          dirtyHandlerIds: Bt(e.dirtyHandlerIds, {
            type: t.type,
            payload: zt(
              zt({}, t.payload),
              {},
              { prevTargetIds: Ge(e, 'dragOperation.targetIds', []) },
            ),
          }),
          dragOffset: Ct(e.dragOffset, t),
          refCount: At(e.refCount, t),
          dragOperation: Pt(e.dragOperation, t),
          stateId: Ft(e.stateId),
        };
      }
      function Vt(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function Wt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      (Lt.__IS_NONE__ = !0), (Rt.__IS_ALL__ = !0);
      var Kt,
        Yt = (function () {
          function e(t, n) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.store = t),
              (this.registry = n);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'subscribeToStateChange',
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { handlerIds: void 0 },
                    r = n.handlerIds;
                  be('function' == typeof e, 'listener must be a function.'),
                    be(
                      void 0 === r || Array.isArray(r),
                      'handlerIds, when specified, must be an array of strings.',
                    );
                  var o = this.store.getState().stateId,
                    i = function () {
                      var n = t.store.getState(),
                        i = n.stateId;
                      try {
                        i === o ||
                          (i === o + 1 && !jt(n.dirtyHandlerIds, r)) ||
                          e();
                      } finally {
                        o = i;
                      }
                    };
                  return this.store.subscribe(i);
                },
              },
              {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                  var t = this;
                  be('function' == typeof e, 'listener must be a function.');
                  var n = this.store.getState().dragOffset;
                  return this.store.subscribe(function () {
                    var r = t.store.getState().dragOffset;
                    r !== n && ((n = r), e());
                  });
                },
              },
              {
                key: 'canDragSource',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e);
                  return (
                    be(
                      t,
                      'Expected to find a valid source. sourceId='.concat(e),
                    ),
                    !this.isDragging() && t.canDrag(this, e)
                  );
                },
              },
              {
                key: 'canDropOnTarget',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getTarget(e);
                  return (
                    be(
                      t,
                      'Expected to find a valid target. targetId='.concat(e),
                    ),
                    !(!this.isDragging() || this.didDrop()) &&
                      et(this.registry.getTargetType(e), this.getItemType()) &&
                      t.canDrop(this, e)
                  );
                },
              },
              {
                key: 'isDragging',
                value: function () {
                  return Boolean(this.getItemType());
                },
              },
              {
                key: 'isDraggingSource',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e, !0);
                  return (
                    be(
                      t,
                      'Expected to find a valid source. sourceId='.concat(e),
                    ),
                    !(!this.isDragging() || !this.isSourcePublic()) &&
                      this.registry.getSourceType(e) === this.getItemType() &&
                      t.isDragging(this, e)
                  );
                },
              },
              {
                key: 'isOverTarget',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { shallow: !1 };
                  if (!e) return !1;
                  var n = t.shallow;
                  if (!this.isDragging()) return !1;
                  var r = this.registry.getTargetType(e),
                    o = this.getItemType();
                  if (o && !et(r, o)) return !1;
                  var i = this.getTargetIds();
                  if (!i.length) return !1;
                  var s = i.indexOf(e);
                  return n ? s === i.length - 1 : s > -1;
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.store.getState().dragOperation.itemType;
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.store.getState().dragOperation.item;
                },
              },
              {
                key: 'getSourceId',
                value: function () {
                  return this.store.getState().dragOperation.sourceId;
                },
              },
              {
                key: 'getTargetIds',
                value: function () {
                  return this.store.getState().dragOperation.targetIds;
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.store.getState().dragOperation.dropResult;
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.store.getState().dragOperation.didDrop;
                },
              },
              {
                key: 'isSourcePublic',
                value: function () {
                  return Boolean(
                    this.store.getState().dragOperation.isSourcePublic,
                  );
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.store.getState().dragOffset.initialClientOffset;
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.store.getState().dragOffset
                    .initialSourceClientOffset;
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.store.getState().dragOffset.clientOffset;
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return (
                    (e = this.store.getState().dragOffset),
                    (r = e.clientOffset),
                    (o = e.initialClientOffset),
                    (i = e.initialSourceClientOffset),
                    r && o && i
                      ? Vt(((n = i), { x: (t = r).x + n.x, y: t.y + n.y }), o)
                      : null
                  );
                  var e, t, n, r, o, i;
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return (
                    (e = this.store.getState().dragOffset),
                    (t = e.clientOffset),
                    (n = e.initialClientOffset),
                    t && n ? Vt(t, n) : null
                  );
                  var e, t, n;
                },
              },
            ]) && Wt(t.prototype, n),
            r && Wt(t, r),
            e
          );
        })(),
        qt = 0;
      function Xt(e) {
        return (Xt =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function Zt(e, t) {
        t && Array.isArray(e)
          ? e.forEach(function (e) {
              return Zt(e, !1);
            })
          : be(
              'string' == typeof e || 'symbol' === Xt(e),
              t
                ? 'Type can only be a string, a symbol, or an array of either.'
                : 'Type can only be a string or a symbol.',
            );
      }
      !(function (e) {
        (e.SOURCE = 'SOURCE'), (e.TARGET = 'TARGET');
      })(Kt || (Kt = {}));
      const $t = 'undefined' != typeof global ? global : self,
        Jt = $t.MutationObserver || $t.WebKitMutationObserver;
      function Qt(e) {
        return function () {
          const t = setTimeout(r, 0),
            n = setInterval(r, 50);
          function r() {
            clearTimeout(t), clearInterval(n), e();
          }
        };
      }
      const en =
        'function' == typeof Jt
          ? function (e) {
              let t = 1;
              const n = new Jt(e),
                r = document.createTextNode('');
              return (
                n.observe(r, { characterData: !0 }),
                function () {
                  (t = -t), (r.data = t);
                }
              );
            }
          : Qt;
      class tn {
        call() {
          try {
            this.task && this.task();
          } catch (e) {
            this.onError(e);
          } finally {
            (this.task = null), this.release(this);
          }
        }
        constructor(e, t) {
          (this.onError = e), (this.release = t), (this.task = null);
        }
      }
      const nn = new (class {
          enqueueTask(e) {
            const { queue: t, requestFlush: n } = this;
            t.length || (n(), (this.flushing = !0)), (t[t.length] = e);
          }
          constructor() {
            (this.queue = []),
              (this.pendingErrors = []),
              (this.flushing = !1),
              (this.index = 0),
              (this.capacity = 1024),
              (this.flush = () => {
                const { queue: e } = this;
                for (; this.index < e.length; ) {
                  const t = this.index;
                  if ((this.index++, e[t].call(), this.index > this.capacity)) {
                    for (let t = 0, n = e.length - this.index; t < n; t++)
                      e[t] = e[t + this.index];
                    (e.length -= this.index), (this.index = 0);
                  }
                }
                (e.length = 0), (this.index = 0), (this.flushing = !1);
              }),
              (this.registerPendingError = (e) => {
                this.pendingErrors.push(e), this.requestErrorThrow();
              }),
              (this.requestFlush = en(this.flush)),
              (this.requestErrorThrow = Qt(() => {
                if (this.pendingErrors.length) throw this.pendingErrors.shift();
              }));
          }
        })(),
        rn = new (class {
          create(e) {
            const t = this.freeTasks,
              n = t.length
                ? t.pop()
                : new tn(this.onError, (e) => (t[t.length] = e));
            return (n.task = e), n;
          }
          constructor(e) {
            (this.onError = e), (this.freeTasks = []);
          }
        })(nn.registerPendingError);
      function on(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function sn(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var s, a = e[Symbol.iterator]();
                !(r = (s = a.next()).done) &&
                (n.push(s.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return an(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return an(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function an(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function cn(e) {
        var t = (qt++).toString();
        switch (e) {
          case Kt.SOURCE:
            return 'S'.concat(t);
          case Kt.TARGET:
            return 'T'.concat(t);
          default:
            throw new Error('Unknown Handler Role: '.concat(e));
        }
      }
      function ln(e) {
        switch (e[0]) {
          case 'S':
            return Kt.SOURCE;
          case 'T':
            return Kt.TARGET;
          default:
            be(!1, 'Cannot parse handler ID: '.concat(e));
        }
      }
      function un(e, t) {
        var n = e.entries(),
          r = !1;
        do {
          var o = n.next(),
            i = o.done;
          if (sn(o.value, 2)[1] === t) return !0;
          r = !!i;
        } while (!r);
        return !1;
      }
      var dn = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = t);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'addSource',
              value: function (e, t) {
                Zt(e),
                  (function (e) {
                    be(
                      'function' == typeof e.canDrag,
                      'Expected canDrag to be a function.',
                    ),
                      be(
                        'function' == typeof e.beginDrag,
                        'Expected beginDrag to be a function.',
                      ),
                      be(
                        'function' == typeof e.endDrag,
                        'Expected endDrag to be a function.',
                      );
                  })(t);
                var n = this.addHandler(Kt.SOURCE, e, t);
                return (
                  this.store.dispatch(
                    (function (e) {
                      return { type: Ot, payload: { sourceId: e } };
                    })(n),
                  ),
                  n
                );
              },
            },
            {
              key: 'addTarget',
              value: function (e, t) {
                Zt(e, !0),
                  (function (e) {
                    be(
                      'function' == typeof e.canDrop,
                      'Expected canDrop to be a function.',
                    ),
                      be(
                        'function' == typeof e.hover,
                        'Expected hover to be a function.',
                      ),
                      be(
                        'function' == typeof e.drop,
                        'Expected beginDrag to be a function.',
                      );
                  })(t);
                var n = this.addHandler(Kt.TARGET, e, t);
                return (
                  this.store.dispatch(
                    (function (e) {
                      return { type: Et, payload: { targetId: e } };
                    })(n),
                  ),
                  n
                );
              },
            },
            {
              key: 'containsHandler',
              value: function (e) {
                return un(this.dragSources, e) || un(this.dropTargets, e);
              },
            },
            {
              key: 'getSource',
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                be(this.isSourceId(e), 'Expected a valid source ID.');
                var n = t && e === this.pinnedSourceId,
                  r = n ? this.pinnedSource : this.dragSources.get(e);
                return r;
              },
            },
            {
              key: 'getTarget',
              value: function (e) {
                return (
                  be(this.isTargetId(e), 'Expected a valid target ID.'),
                  this.dropTargets.get(e)
                );
              },
            },
            {
              key: 'getSourceType',
              value: function (e) {
                return (
                  be(this.isSourceId(e), 'Expected a valid source ID.'),
                  this.types.get(e)
                );
              },
            },
            {
              key: 'getTargetType',
              value: function (e) {
                return (
                  be(this.isTargetId(e), 'Expected a valid target ID.'),
                  this.types.get(e)
                );
              },
            },
            {
              key: 'isSourceId',
              value: function (e) {
                return ln(e) === Kt.SOURCE;
              },
            },
            {
              key: 'isTargetId',
              value: function (e) {
                return ln(e) === Kt.TARGET;
              },
            },
            {
              key: 'removeSource',
              value: function (e) {
                var t,
                  n = this;
                be(this.getSource(e), 'Expected an existing source.'),
                  this.store.dispatch(
                    (function (e) {
                      return { type: It, payload: { sourceId: e } };
                    })(e),
                  ),
                  (t = function () {
                    n.dragSources.delete(e), n.types.delete(e);
                  }),
                  nn.enqueueTask(rn.create(t));
              },
            },
            {
              key: 'removeTarget',
              value: function (e) {
                be(this.getTarget(e), 'Expected an existing target.'),
                  this.store.dispatch(
                    (function (e) {
                      return { type: Dt, payload: { targetId: e } };
                    })(e),
                  ),
                  this.dropTargets.delete(e),
                  this.types.delete(e);
              },
            },
            {
              key: 'pinSource',
              value: function (e) {
                var t = this.getSource(e);
                be(t, 'Expected an existing source.'),
                  (this.pinnedSourceId = e),
                  (this.pinnedSource = t);
              },
            },
            {
              key: 'unpinSource',
              value: function () {
                be(this.pinnedSource, 'No source is pinned at the time.'),
                  (this.pinnedSourceId = null),
                  (this.pinnedSource = null);
              },
            },
            {
              key: 'addHandler',
              value: function (e, t, n) {
                var r = cn(e);
                return (
                  this.types.set(r, t),
                  e === Kt.SOURCE
                    ? this.dragSources.set(r, n)
                    : e === Kt.TARGET && this.dropTargets.set(r, n),
                  r
                );
              },
            },
          ]) && on(t.prototype, n),
          r && on(t, r),
          e
        );
      })();
      function hn(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = fn(r),
          i = new Yt(o, new dn(o)),
          s = new gt(o, i),
          a = e(s, t, n);
        return s.receiveBackend(a), s;
      }
      function fn(e) {
        var t =
          'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
        return (0, vt.createStore)(
          Gt,
          e && t && t({ name: 'dnd-core', instanceId: 'dnd-core' }),
        );
      }
      var pn = (0, o.createContext)({ dragDropManager: void 0 });
      function gn(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var s, a = e[Symbol.iterator]();
                !(r = (s = a.next()).done) &&
                (n.push(s.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return vn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return vn(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function vn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function yn(e, t) {
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
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var mn = 0,
        bn = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__'),
        Sn = (0, o.memo)(function (e) {
          var t = e.children,
            n = gn(
              (function (e) {
                if ('manager' in e) {
                  return [{ dragDropManager: e.manager }, !1];
                }
                var t = (function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : wn(),
                      n = arguments.length > 2 ? arguments[2] : void 0,
                      r = arguments.length > 3 ? arguments[3] : void 0,
                      o = t;
                    o[bn] || (o[bn] = { dragDropManager: hn(e, t, n, r) });
                    return o[bn];
                  })(e.backend, e.context, e.options, e.debugMode),
                  n = !e.context;
                return [t, n];
              })(yn(e, ['children'])),
              2,
            ),
            r = n[0],
            i = n[1];
          return (
            (0, o.useEffect)(function () {
              if (i) {
                var e = wn();
                return (
                  ++mn,
                  function () {
                    0 == --mn && (e[bn] = null);
                  }
                );
              }
            }, []),
            (0, Ae.jsx)(
              pn.Provider,
              Object.assign({ value: r }, { children: t }),
              void 0,
            )
          );
        });
      function wn() {
        return void 0 !== n.g ? n.g : window;
      }
      const Tn = ((_n = 'OBJECT_TREE'), (e) => _n + '__' + e);
      var _n;
      const Cn = Tn('SET_NODES'),
        On = Tn('SYNC_NODES'),
        En = Tn('UPDATE_NODE'),
        In = Tn('UPDATE_NODES'),
        Dn = Tn('RESET_TREE'),
        kn = Tn('SET_SELECTED_IDS'),
        Mn = Tn('DROP_SELECTION'),
        xn = Tn('SELECT_PREVIOUS'),
        Nn = Tn('SELECT_NEXT'),
        Pn = Tn('MULTI_SELECT_PREVIOUS'),
        An = Tn('MULTI_SELECT_NEXT'),
        Ln = Tn('PROCESS_DROP_TARGET'),
        Rn = Tn('UPDATE_DROP_TARGET'),
        jn = Tn('HIDE_DROP_TARGET'),
        Bn = Tn('START_MULTI_SELECT'),
        Fn = Tn('STOP_MULTI_SELECT'),
        Hn = (Tn('REMOVE_NODE'), Tn('SET_FOCUSED_NODE')),
        zn = Tn('SCROLL_TO_ID'),
        Un = Tn('SET_IS_SELECTED'),
        Gn = Tn('SET_IS_EXPANDED'),
        Vn = Tn('SET_DISABLED_NODES'),
        Wn = Tn('MOVE_NODES'),
        Kn = (Tn('START_DRAG'), Tn('END_DRAG')),
        Yn = () => ({ type: xn }),
        qn = () => ({ type: Nn }),
        Xn = () => ({ type: Pn }),
        Zn = () => ({ type: An }),
        $n = (e, t, n, r, o) => ({
          type: Ln,
          dropTarget: e,
          dropType: t,
          isHoveredLeft: n,
          boundBox: r,
          isLastChild: o,
        }),
        Jn = () => ({ type: Mn }),
        Qn = (e) => ({ type: kn, ids: e }),
        er = (e, t, n) => ({ type: Wn, ids: e, targetId: t, dropType: n }),
        tr = () => ({ type: Bn }),
        nr = () => ({ type: Fn }),
        rr = (e) => ({ type: Hn, nodeId: e }),
        or = (e) => ({ type: zn, nodeId: e }),
        ir = (e, t, n = 0) => ({ type: Un, nodeId: e, isSelected: t, mode: n }),
        sr = (e, t) => ({ type: Gn, nodeId: e, isExpanded: t }),
        ar = (e) => ({ type: Vn, ids: e }),
        cr = () => ({ type: Kn });
      var lr = n(22222);
      const ur = (e) => e.nodes,
        dr = (e) => e.selection,
        hr = (e) => e.dropTarget,
        fr = (e) => e.expanded,
        pr = (e) => e.scrollToId,
        gr = (e, t) => t,
        vr = (0, lr.createSelector)([ur, gr], (e, t) => e[t]),
        yr = (0, lr.createSelector)([dr, gr], (e, t) => e.ids.includes(t)),
        mr = (0, lr.createSelector)([fr, gr], (e, t) => e.includes(t)),
        br = (0, lr.createSelector)(
          [(e) => e.disabled, dr, gr],
          (e, t, n) => !t.ids.includes(n) && e.includes(n),
        ),
        Sr = (0, lr.createSelector)(ur, (e) => Object.keys(e)),
        wr = (0, lr.createSelector)(dr, ({ ids: e }) => e),
        Tr = (0, lr.createSelector)(dr, ({ lastFocusedNodeId: e }) => e),
        _r = (0, lr.createSelector)(dr, ({ isMultiSelecting: e }) => e),
        Cr = (0, lr.createSelector)([ur, wr], (e, t) => t.map((t) => e[t])),
        Or = (0, lr.createSelector)(ur, (e) =>
          Object.values(e).filter((e) => 0 === e.level),
        ),
        Er = (0, lr.createSelector)([ur, Or], (e, t) =>
          t.reduce((t, n) => [...t, ...Ir(e, (0, E.ensureDefined)(n))], []),
        );
      function Ir(e, t) {
        const n = [];
        for (const r of t.children) n.push(e[r]), n.push(...Ir(e, e[r]));
        return n;
      }
      const Dr = (0, lr.createSelector)([ur, Or, fr], (e, t, n) => {
          const r = new Set(n);
          return t.reduce(
            (t, n) => [...t, ...Mr(e, (0, E.ensureDefined)(n), r)],
            [],
          );
        }),
        kr = (0, lr.createSelector)([ur, wr, fr], (e, t, n) => {
          const r = new Set(n);
          return [{ id: 'drag-list', level: -1, children: t }].reduce(
            (t, n) => [...t, ...Mr(e, (0, E.ensureDefined)(n), r)],
            [],
          );
        });
      function Mr(e, t, n) {
        const r = [];
        for (const o of t.children) {
          const t = e[o];
          void 0 !== t && (r.push(t), n.has(o) && r.push(...Mr(e, t, n)));
        }
        return r;
      }
      function* xr(e) {
        const { selectedIds: t, nodes: n } = yield (0, C.call)(e),
          r = {};
        for (let e = 0; e < n.length; ++e) {
          const t = n[e];
          r[t.id] = t;
        }
        yield (0, C.put)(((e) => ({ type: Cn, nodes: e }))(r)),
          yield (0, C.put)(Qn(t));
        !Tr(yield (0, C.select)()) &&
          t.length > 0 &&
          (yield (0, C.put)(rr(t[0])), yield (0, C.put)(or(t[0])));
      }
      function* Nr(e) {
        for (;;) {
          if ((yield (0, C.take)([Bn, Fn])).type === Bn) {
            const t = Sr(yield (0, C.select)()).filter((t) => !e(t));
            yield (0, C.put)(ar(t));
          } else yield (0, C.put)(ar([]));
        }
      }
      function* Pr() {
        for (;;) {
          const { type: e } = yield (0, C.take)([An, Pn]),
            t = yield (0, C.select)(),
            n = Er(t),
            r = n.length,
            o = Tr(t),
            i = [...wr(t)],
            s = 1 === i.length && i[0] !== o,
            a = n.findIndex((e) => e.id === (s ? i[0] : o));
          if ((e === Pn && 0 === a) || (e === An && a === r - 1)) continue;
          const c = Hr(t, e === An ? 'next' : 'previous', n, a),
            { id: l } = c;
          i.includes(l) && o
            ? (yield (0, C.put)(ir(o, !1, 1)), yield (0, C.put)(rr(l)))
            : yield (0, C.put)(ir(l, !0, 1)),
            yield (0, C.put)(or(l));
        }
      }
      function* Ar(e, t) {
        for (;;) {
          const { type: n } = yield (0, C.take)([Nn, xn]),
            r = yield (0, C.select)(),
            o = Er(r),
            i = Cr(r),
            s = Tr(r);
          if (1 === i.length && i[0].id !== s && !s) {
            if (n === Nn) {
              yield (0, C.put)(rr(i[0].id));
              continue;
            }
            if (n === xn) {
              const e = o.findIndex((e) => e.id === i[0].id),
                t = Hr(r, 'previous', o, e);
              yield (0, C.put)(rr(t.id));
              continue;
            }
          }
          const a = o.findIndex((e) => e.id === s),
            c = n === Nn ? 'next' : 'previous',
            l = Hr(r, c, o, a),
            { id: u } = l;
          e ? e([u], c) : yield (0, C.put)(Qn([u])),
            t && t(u),
            yield (0, C.put)(rr(u));
        }
      }
      function* Lr(e, t = () => !0) {
        for (;;) {
          const { mode: n, nodeId: r, isSelected: o } = yield (0, C.take)(Un);
          let i = [...wr(yield (0, C.select)())];
          const s = Er(yield (0, C.select)());
          if (1 === n) o ? i.push(r) : i.splice(i.indexOf(r), 1);
          else if (2 === n && i.length > 0) {
            const e = Tr(yield (0, C.select)());
            let n = s.findIndex((t) => t.id === e);
            -1 === n &&
              (n = s.reduce((e, t, n) => (i.includes(t.id) ? n : e), -1));
            const o = s.findIndex((e) => e.id === r);
            if (n !== o)
              for (let e = Math.min(n, o); e <= Math.max(n, o); e++) {
                const n = s[e].id;
                !i.includes(n) && t(n) && i.push(n);
              }
          } else i = r ? [r] : [];
          const a = new Set(i);
          (i = s.reduce((e, t) => (a.has(t.id) && e.push(t.id), e), [])),
            e ? e(i) : yield (0, C.put)(Qn(i)),
            yield (0, C.put)(rr(r));
        }
      }
      function* Rr(e = () => !0, t) {
        const {
            dropTarget: n,
            dropType: r,
            isHoveredLeft: o,
            boundBox: i,
            isLastChild: s,
          } = t,
          a = hr(yield (0, C.select)()),
          c = vr(yield (0, C.select)(), (0, E.ensureDefined)(n.parentId)),
          l = s && 'after' === r,
          u = Cr(yield (0, C.select)()),
          d = !l || (!o && e(u, n, r)) ? n : c,
          h = (a.node && a.node.id !== d.id) || a.dropType !== r;
        u.map((e) => e.id).includes(d.id)
          ? yield (0, C.put)({ type: jn })
          : h &&
            e(u, d, r) &&
            (yield (0, C.put)(
              ((e, t, n) => ({ type: Rn, node: e, dropType: t, boundBox: n }))(
                d,
                r,
                i,
              ),
            ));
      }
      function* jr(e) {
        yield (0, C.throttle)(0, Ln, Rr, e);
      }
      function* Br(e) {
        for (;;) {
          yield (0, C.take)(Mn);
          const t = Cr(yield (0, C.select)()),
            { node: n, dropType: r } = hr(yield (0, C.select)());
          if (n && r) {
            const o = new CustomEvent('tree-node-drop', {
              detail: { nodes: t, target: n.id, type: r },
            });
            if ((e && e(o), !o.defaultPrevented)) {
              const e = wr(yield (0, C.select)());
              yield (0, C.put)(er(e, n.id, r));
            }
          }
        }
      }
      function* Fr(e) {
        for (;;) {
          yield (0, C.take)(Wn);
          e(ur(yield (0, C.select)()));
        }
      }
      function Hr(e, t, n, r) {
        const o = n.length;
        let i,
          s = 0;
        for (
          ;
          !i ||
          (Math.abs(s) < o &&
            (a = i).level > 1 &&
            !mr(e, (0, E.ensureDefined)(a.parentId)));

        )
          (s += 'next' === t ? 1 : -1), (i = n[(r + s + o) % o]);
        var a;
        return i;
      }
      function* zr(e = {}) {
        const {
            saga: t,
            onDrop: n,
            canMove: r,
            onMove: o,
            onSelect: i,
            onKeyboardSelect: s,
            initState: a,
            canBeAddedToSelection: c,
          } = e,
          l = [
            (0, C.fork)(jr, r),
            (0, C.fork)(Br, n),
            (0, C.fork)(Lr, i, c),
            (0, C.fork)(Ar, i, s),
            (0, C.fork)(Pr),
          ];
        for (
          t && l.push((0, C.fork)(t)),
            o && l.push((0, C.fork)(Fr, o)),
            c && l.push((0, C.fork)(Nr, c));
          ;

        ) {
          a && (yield (0, C.call)(xr, a));
          const e = yield (0, C.all)(l);
          yield (0, C.take)(Dn);
          for (const t of e) yield (0, C.cancel)(t);
        }
      }
      var Ur = n(47903);
      const Gr = (0, c.getLogger)('Platform.GUI.ObjectTree.CallApi');
      const Vr = { ids: [], lastFocusedNodeId: void 0, isMultiSelecting: !1 };
      const Wr = { node: void 0, dropType: void 0, boundBox: void 0 };
      const Kr = (0, vt.combineReducers)({
        nodes: function (e = {}, t) {
          switch (t.type) {
            case Cn:
              return t.nodes;
            case On: {
              const { nodes: n } = t,
                r = n.map((e) => e.id),
                o = { ...e };
              for (const t of Object.keys(e))
                if (!r.includes(t)) {
                  const { parentId: e } = o[t];
                  e &&
                    (o[e] = {
                      ...o[e],
                      children: o[e].children.filter((e) => e !== t),
                    }),
                    delete o[t];
                }
              for (const e of n) {
                const t = e.id;
                if (o.hasOwnProperty(t)) {
                  !(0, Ur.deepEquals)(o[t].children, e.children)[0] &&
                    (o[t] = { ...o[t], children: [...e.children] });
                } else {
                  o[t] = e;
                  const { parentId: n } = e;
                  if (n && !o[n].children.includes(t))
                    throw new Error('Not implemented');
                }
              }
              return o;
            }
            case En: {
              const { type: n, nodeId: r, ...o } = t;
              return { ...e, [r]: { ...e[r], ...o } };
            }
            case In: {
              const { nodes: n } = t,
                r = { ...e };
              return (
                Object.keys(n).forEach((e) => {
                  r[e] = { ...r[e], ...n[e] };
                }),
                { ...e, ...r }
              );
            }
            case Wn: {
              const { ids: n, targetId: r, dropType: o } = t,
                i = (0, E.ensureDefined)(e[r].parentId),
                s = e[i],
                a = {};
              for (const t of n) {
                const n = e[t];
                if (n.parentId) {
                  const r = a[n.parentId] || e[n.parentId];
                  a[n.parentId] = {
                    ...r,
                    children: r.children.filter((e) => e !== t),
                  };
                }
                a[t] = { ...n, parentId: i, level: s.level + 1 };
              }
              const c = s.children.filter((e) => !n.includes(e));
              return (
                c.splice(
                  ((e, t, n) => {
                    switch (n) {
                      case 'before':
                        return e.indexOf((0, E.ensureDefined)(t));
                      case 'inside':
                        return e.length;
                      case 'after':
                        return e.indexOf((0, E.ensureDefined)(t)) + 1;
                      default:
                        return 0;
                    }
                  })(c, r, o),
                  0,
                  ...n,
                ),
                (a[i] = { ...e[i], children: c, isExpanded: !0 }),
                { ...e, ...a }
              );
            }
            default:
              return e;
          }
        },
        selection: function (e = Vr, t) {
          switch (t.type) {
            case kn: {
              const { ids: n } = t;
              return {
                ...e,
                ids: n,
                lastFocusedNodeId: n.length > 0 ? e.lastFocusedNodeId : void 0,
              };
            }
            case Bn:
              return { ...e, isMultiSelecting: !0 };
            case Fn:
              return { ...e, isMultiSelecting: !1 };
            case Hn:
              return { ...e, lastFocusedNodeId: t.nodeId };
            case On: {
              const n = new Set(t.nodes.map((e) => e.id));
              return (
                e.lastFocusedNodeId &&
                  !n.has(e.lastFocusedNodeId) &&
                  delete e.lastFocusedNodeId,
                { ...e, ids: e.ids.filter((e) => n.has(e)) }
              );
            }
            default:
              return e;
          }
        },
        dropTarget: function (e = Wr, t) {
          switch (t.type) {
            case Rn: {
              const { node: n, dropType: r, boundBox: o } = t;
              return { ...e, node: n, dropType: r, boundBox: o };
            }
            case jn:
            case Kn:
            case Dn:
              return { ...Wr };
            default:
              return e;
          }
        },
        expanded: function (e = [], t) {
          switch (t.type) {
            case Gn: {
              const { nodeId: n, isExpanded: r } = t;
              if (r) return [...e, n];
              const o = [...e];
              return o.splice(e.indexOf(n), 1), o;
            }
            default:
              return e;
          }
        },
        disabled: function (e = [], t) {
          switch (t.type) {
            case Vn:
              return [...t.ids];
            default:
              return e;
          }
        },
        scrollToId: function (e = null, t) {
          switch (t.type) {
            case zn:
              return null === t.nodeId ? null : { id: t.nodeId };
            default:
              return e;
          }
        },
      });
      function Yr(e, t, n) {
        var r = n.getRegistry(),
          o = r.addTarget(e, t);
        return [
          o,
          function () {
            return r.removeTarget(o);
          },
        ];
      }
      function qr(e, t, n) {
        var r = n.getRegistry(),
          o = r.addSource(e, t);
        return [
          o,
          function () {
            return r.removeSource(o);
          },
        ];
      }
      function Xr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var Zr = !1,
        $r = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.targetId = null),
              (this.internalMonitor = t.getMonitor());
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveHandlerId',
                value: function (e) {
                  this.targetId = e;
                },
              },
              {
                key: 'getHandlerId',
                value: function () {
                  return this.targetId;
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: 'canDrop',
                value: function () {
                  if (!this.targetId) return !1;
                  be(
                    !Zr,
                    'You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor',
                  );
                  try {
                    return (
                      (Zr = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    Zr = !1;
                  }
                },
              },
              {
                key: 'isOver',
                value: function (e) {
                  return (
                    !!this.targetId &&
                    this.internalMonitor.isOverTarget(this.targetId, e)
                  );
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]) && Xr(t.prototype, n),
            r && Xr(t, r),
            e
          );
        })();
      function Jr(e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
        var i = Object.keys(e),
          s = Object.keys(t);
        if (i.length !== s.length) return !1;
        for (
          var a = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < i.length;
          c++
        ) {
          var l = i[c];
          if (!a(l)) return !1;
          var u = e[l],
            d = t[l];
          if (
            !1 === (o = n ? n.call(r, u, d, l) : void 0) ||
            (void 0 === o && u !== d)
          )
            return !1;
        }
        return !0;
      }
      function Qr(e) {
        if ('string' != typeof e.type) {
          var t = e.type.displayName || e.type.name || 'the component';
          throw new Error(
            'Only native element nodes can now be passed to React DnD connectors.' +
              'You can either wrap '.concat(
                t,
                ' into a <div>, or turn it into a ',
              ) +
              'drag source or a drop target itself.',
          );
        }
      }
      function eo(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            var r = e[n];
            if (n.endsWith('Ref')) t[n] = e[n];
            else {
              var i = (function (e) {
                return function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  if (!(0, o.isValidElement)(t)) {
                    var r = t;
                    return e(r, n), r;
                  }
                  var i = t;
                  Qr(i);
                  var s = n
                    ? function (t) {
                        return e(t, n);
                      }
                    : e;
                  return no(i, s);
                };
              })(r);
              t[n] = function () {
                return i;
              };
            }
          }),
          t
        );
      }
      function to(e, t) {
        'function' == typeof e ? e(t) : (e.current = t);
      }
      function no(e, t) {
        var n = e.ref;
        return (
          be(
            'string' != typeof n,
            'Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs',
          ),
          n
            ? (0, o.cloneElement)(e, {
                ref: function (e) {
                  to(n, e), to(t, e);
                },
              })
            : (0, o.cloneElement)(e, { ref: t })
        );
      }
      function ro(e) {
        return (ro =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function oo(e) {
        return (
          null !== e &&
          'object' === ro(e) &&
          Object.prototype.hasOwnProperty.call(e, 'current')
        );
      }
      function io(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var so = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.hooks = eo({
              dropTarget: function (e, t) {
                n.clearDropTarget(),
                  (n.dropTargetOptions = t),
                  oo(e) ? (n.dropTargetRef = e) : (n.dropTargetNode = e),
                  n.reconnect();
              },
            })),
            (this.handlerId = null),
            (this.dropTargetRef = null),
            (this.dropTargetOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDropTarget = null),
            (this.lastConnectedDropTargetOptions = null),
            (this.backend = t);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'connectTarget',
              get: function () {
                return this.dropTarget;
              },
            },
            {
              key: 'reconnect',
              value: function () {
                var e =
                  this.didHandlerIdChange() ||
                  this.didDropTargetChange() ||
                  this.didOptionsChange();
                e && this.disconnectDropTarget();
                var t = this.dropTarget;
                this.handlerId &&
                  (t
                    ? e &&
                      ((this.lastConnectedHandlerId = this.handlerId),
                      (this.lastConnectedDropTarget = t),
                      (this.lastConnectedDropTargetOptions =
                        this.dropTargetOptions),
                      (this.unsubscribeDropTarget =
                        this.backend.connectDropTarget(
                          this.handlerId,
                          t,
                          this.dropTargetOptions,
                        )))
                    : (this.lastConnectedDropTarget = t));
              },
            },
            {
              key: 'receiveHandlerId',
              value: function (e) {
                e !== this.handlerId &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: 'dropTargetOptions',
              get: function () {
                return this.dropTargetOptionsInternal;
              },
              set: function (e) {
                this.dropTargetOptionsInternal = e;
              },
            },
            {
              key: 'didHandlerIdChange',
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: 'didDropTargetChange',
              value: function () {
                return this.lastConnectedDropTarget !== this.dropTarget;
              },
            },
            {
              key: 'didOptionsChange',
              value: function () {
                return !Jr(
                  this.lastConnectedDropTargetOptions,
                  this.dropTargetOptions,
                );
              },
            },
            {
              key: 'disconnectDropTarget',
              value: function () {
                this.unsubscribeDropTarget &&
                  (this.unsubscribeDropTarget(),
                  (this.unsubscribeDropTarget = void 0));
              },
            },
            {
              key: 'dropTarget',
              get: function () {
                return (
                  this.dropTargetNode ||
                  (this.dropTargetRef && this.dropTargetRef.current)
                );
              },
            },
            {
              key: 'clearDropTarget',
              value: function () {
                (this.dropTargetRef = null), (this.dropTargetNode = null);
              },
            },
          ]) && io(t.prototype, n),
          r && io(t, r),
          e
        );
      })();
      function ao(e) {
        return (ao =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function co(e) {
        var t = e.current;
        return null == t ? null : t.decoratedRef ? t.decoratedRef.current : t;
      }
      function lo(e) {
        return (
          (function (e) {
            return e && e.prototype && 'function' == typeof e.prototype.render;
          })(e) ||
          (function (e) {
            var t,
              n = e;
            return (
              'Symbol(react.forward_ref)' ===
              (null == n || null === (t = n.$$typeof) || void 0 === t
                ? void 0
                : t.toString())
            );
          })(e)
        );
      }
      function uo(e) {
        return 'function' == typeof e;
      }
      function ho() {}
      function fo(e) {
        if (
          !(function (e) {
            return 'object' === ao(e) && null !== e;
          })(e)
        )
          return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function po(e, t) {
        return (
          'string' == typeof e ||
          'symbol' === ao(e) ||
          (!!t &&
            Array.isArray(e) &&
            e.every(function (e) {
              return po(e, !1);
            }))
        );
      }
      function go(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function vo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function yo(e, t, n) {
        return t && vo(e.prototype, t), n && vo(e, n), e;
      }
      var mo = (function () {
        function e(t) {
          go(this, e), (this.isDisposed = !1), (this.action = uo(t) ? t : ho);
        }
        return (
          yo(
            e,
            [
              {
                key: 'dispose',
                value: function () {
                  this.isDisposed || (this.action(), (this.isDisposed = !0));
                },
              },
            ],
            [
              {
                key: 'isDisposable',
                value: function (e) {
                  return Boolean(e && uo(e.dispose));
                },
              },
              {
                key: '_fixup',
                value: function (t) {
                  return e.isDisposable(t) ? t : e.empty;
                },
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(t);
                },
              },
            ],
          ),
          e
        );
      })();
      mo.empty = { dispose: ho };
      var bo = (function () {
          function e() {
            go(this, e), (this.isDisposed = !1);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            this.disposables = n;
          }
          return (
            yo(e, [
              {
                key: 'add',
                value: function (e) {
                  this.isDisposed ? e.dispose() : this.disposables.push(e);
                },
              },
              {
                key: 'remove',
                value: function (e) {
                  var t = !1;
                  if (!this.isDisposed) {
                    var n = this.disposables.indexOf(e);
                    -1 !== n &&
                      ((t = !0), this.disposables.splice(n, 1), e.dispose());
                  }
                  return t;
                },
              },
              {
                key: 'clear',
                value: function () {
                  if (!this.isDisposed) {
                    for (
                      var e = this.disposables.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = this.disposables[n];
                    this.disposables = [];
                    for (var r = 0; r < e; r++) t[r].dispose();
                  }
                },
              },
              {
                key: 'dispose',
                value: function () {
                  if (!this.isDisposed) {
                    this.isDisposed = !0;
                    for (
                      var e = this.disposables.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = this.disposables[n];
                    this.disposables = [];
                    for (var r = 0; r < e; r++) t[r].dispose();
                  }
                },
              },
            ]),
            e
          );
        })(),
        So = (function () {
          function e() {
            go(this, e), (this.isDisposed = !1);
          }
          return (
            yo(e, [
              {
                key: 'getDisposable',
                value: function () {
                  return this.current;
                },
              },
              {
                key: 'setDisposable',
                value: function (e) {
                  var t = this.isDisposed;
                  if (!t) {
                    var n = this.current;
                    (this.current = e), n && n.dispose();
                  }
                  t && e && e.dispose();
                },
              },
              {
                key: 'dispose',
                value: function () {
                  if (!this.isDisposed) {
                    this.isDisposed = !0;
                    var e = this.current;
                    (this.current = void 0), e && e.dispose();
                  }
                },
              },
            ]),
            e
          );
        })(),
        wo = n(8679),
        To = n.n(wo);
      function _o(e) {
        return (_o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function Co(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var s, a = e[Symbol.iterator]();
                !(r = (s = a.next()).done) &&
                (n.push(s.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Oo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Oo(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function Oo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Eo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Io(e, t) {
        return (Io =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Do(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Mo(e);
          if (t) {
            var o = Mo(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return ko(this, n);
        };
      }
      function ko(e, t) {
        return !t || ('object' !== _o(t) && 'function' != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function Mo(e) {
        return (Mo = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function xo(e) {
        var t = e.DecoratedComponent,
          n = e.createHandler,
          r = e.createMonitor,
          i = e.createConnector,
          s = e.registerHandler,
          a = e.containerDisplayName,
          c = e.getType,
          l = e.collect,
          u = e.options.arePropsEqual,
          d = void 0 === u ? Jr : u,
          h = t,
          f = t.displayName || t.name || 'Component',
          p = (function (e) {
            !(function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Io(e, t);
            })(g, e);
            var t,
              a,
              u,
              p = Do(g);
            function g(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, g),
                ((t = p.call(this, e)).decoratedRef = (0, o.createRef)()),
                (t.handleChange = function () {
                  var e = t.getCurrentState();
                  Jr(e, t.state) || t.setState(e);
                }),
                (t.disposable = new So()),
                t.receiveProps(e),
                t.dispose(),
                t
              );
            }
            return (
              (t = g),
              (a = [
                {
                  key: 'getHandlerId',
                  value: function () {
                    return this.handlerId;
                  },
                },
                {
                  key: 'getDecoratedComponentInstance',
                  value: function () {
                    return (
                      be(
                        this.decoratedRef.current,
                        'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()',
                      ),
                      this.decoratedRef.current
                    );
                  },
                },
                {
                  key: 'shouldComponentUpdate',
                  value: function (e, t) {
                    return !d(e, this.props) || !Jr(t, this.state);
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function () {
                    (this.disposable = new So()),
                      (this.currentType = void 0),
                      this.receiveProps(this.props),
                      this.handleChange();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    d(this.props, e) ||
                      (this.receiveProps(this.props), this.handleChange());
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.dispose();
                  },
                },
                {
                  key: 'receiveProps',
                  value: function (e) {
                    this.handler &&
                      (this.handler.receiveProps(e), this.receiveType(c(e)));
                  },
                },
                {
                  key: 'receiveType',
                  value: function (e) {
                    if (
                      this.handlerMonitor &&
                      this.manager &&
                      this.handlerConnector &&
                      e !== this.currentType
                    ) {
                      this.currentType = e;
                      var t = Co(s(e, this.handler, this.manager), 2),
                        n = t[0],
                        r = t[1];
                      (this.handlerId = n),
                        this.handlerMonitor.receiveHandlerId(n),
                        this.handlerConnector.receiveHandlerId(n);
                      var o = this.manager
                        .getMonitor()
                        .subscribeToStateChange(this.handleChange, {
                          handlerIds: [n],
                        });
                      this.disposable.setDisposable(
                        new bo(new mo(o), new mo(r)),
                      );
                    }
                  },
                },
                {
                  key: 'dispose',
                  value: function () {
                    this.disposable.dispose(),
                      this.handlerConnector &&
                        this.handlerConnector.receiveHandlerId(null);
                  },
                },
                {
                  key: 'getCurrentState',
                  value: function () {
                    return this.handlerConnector
                      ? l(
                          this.handlerConnector.hooks,
                          this.handlerMonitor,
                          this.props,
                        )
                      : {};
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this;
                    return (0, Ae.jsx)(
                      pn.Consumer,
                      {
                        children: function (t) {
                          var n = t.dragDropManager;
                          return (
                            e.receiveDragDropManager(n),
                            'undefined' != typeof requestAnimationFrame &&
                              requestAnimationFrame(function () {
                                var t;
                                return null === (t = e.handlerConnector) ||
                                  void 0 === t
                                  ? void 0
                                  : t.reconnect();
                              }),
                            (0, Ae.jsx)(
                              h,
                              Object.assign({}, e.props, e.getCurrentState(), {
                                ref: lo(h) ? e.decoratedRef : null,
                              }),
                              void 0,
                            )
                          );
                        },
                      },
                      void 0,
                    );
                  },
                },
                {
                  key: 'receiveDragDropManager',
                  value: function (e) {
                    void 0 === this.manager &&
                      (be(
                        void 0 !== e,
                        'Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context',
                        f,
                        f,
                      ),
                      void 0 !== e &&
                        ((this.manager = e),
                        (this.handlerMonitor = r(e)),
                        (this.handlerConnector = i(e.getBackend())),
                        (this.handler = n(
                          this.handlerMonitor,
                          this.decoratedRef,
                        ))));
                  },
                },
              ]) && Eo(t.prototype, a),
              u && Eo(t, u),
              g
            );
          })(o.Component);
        return (
          (p.DecoratedComponent = t),
          (p.displayName = ''.concat(a, '(').concat(f, ')')),
          To()(p, t)
        );
      }
      function No(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var Po = ['canDrop', 'hover', 'drop'],
        Ao = (function () {
          function e(t, n, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.props = null),
              (this.spec = t),
              (this.monitor = n),
              (this.ref = r);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveProps',
                value: function (e) {
                  this.props = e;
                },
              },
              {
                key: 'receiveMonitor',
                value: function (e) {
                  this.monitor = e;
                },
              },
              {
                key: 'canDrop',
                value: function () {
                  return (
                    !this.spec.canDrop ||
                    this.spec.canDrop(this.props, this.monitor)
                  );
                },
              },
              {
                key: 'hover',
                value: function () {
                  this.spec.hover &&
                    this.props &&
                    this.spec.hover(this.props, this.monitor, co(this.ref));
                },
              },
              {
                key: 'drop',
                value: function () {
                  if (this.spec.drop)
                    return this.spec.drop(
                      this.props,
                      this.monitor,
                      this.ref.current,
                    );
                },
              },
            ]) && No(t.prototype, n),
            r && No(t, r),
            e
          );
        })();
      function Lo(e) {
        return (
          Object.keys(e).forEach(function (t) {
            be(
              Po.indexOf(t) > -1,
              'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              Po.join(', '),
              t,
            ),
              be(
                'function' == typeof e[t],
                'Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                t,
                t,
                e[t],
              );
          }),
          function (t, n) {
            return new Ao(e, t, n);
          }
        );
      }
      function Ro(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = e;
        'function' != typeof e &&
          (be(
            po(e, !0),
            'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            e,
          ),
          (o = function () {
            return e;
          })),
          be(
            fo(t),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            t,
          );
        var i = Lo(t);
        return (
          be(
            'function' == typeof n,
            'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            n,
          ),
          be(
            fo(r),
            'Expected "options" provided as the third argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            n,
          ),
          function (e) {
            return xo({
              containerDisplayName: 'DropTarget',
              createHandler: i,
              registerHandler: Yr,
              createMonitor: function (e) {
                return new $r(e);
              },
              createConnector: function (e) {
                return new so(e);
              },
              DecoratedComponent: e,
              getType: o,
              collect: n,
              options: r,
            });
          }
        );
      }
      var jo = n(33093),
        Bo = n(43367);
      function Fo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var Ho = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.hooks = eo({
              dragSource: function (e, t) {
                n.clearDragSource(),
                  (n.dragSourceOptions = t || null),
                  oo(e) ? (n.dragSourceRef = e) : (n.dragSourceNode = e),
                  n.reconnectDragSource();
              },
              dragPreview: function (e, t) {
                n.clearDragPreview(),
                  (n.dragPreviewOptions = t || null),
                  oo(e) ? (n.dragPreviewRef = e) : (n.dragPreviewNode = e),
                  n.reconnectDragPreview();
              },
            })),
            (this.handlerId = null),
            (this.dragSourceRef = null),
            (this.dragSourceOptionsInternal = null),
            (this.dragPreviewRef = null),
            (this.dragPreviewOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDragSource = null),
            (this.lastConnectedDragSourceOptions = null),
            (this.lastConnectedDragPreview = null),
            (this.lastConnectedDragPreviewOptions = null),
            (this.backend = t);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'receiveHandlerId',
              value: function (e) {
                this.handlerId !== e &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: 'connectTarget',
              get: function () {
                return this.dragSource;
              },
            },
            {
              key: 'dragSourceOptions',
              get: function () {
                return this.dragSourceOptionsInternal;
              },
              set: function (e) {
                this.dragSourceOptionsInternal = e;
              },
            },
            {
              key: 'dragPreviewOptions',
              get: function () {
                return this.dragPreviewOptionsInternal;
              },
              set: function (e) {
                this.dragPreviewOptionsInternal = e;
              },
            },
            {
              key: 'reconnect',
              value: function () {
                this.reconnectDragSource(), this.reconnectDragPreview();
              },
            },
            {
              key: 'reconnectDragSource',
              value: function () {
                var e = this.dragSource,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragSourceChange() ||
                    this.didDragSourceOptionsChange();
                t && this.disconnectDragSource(),
                  this.handlerId &&
                    (e
                      ? t &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragSource = e),
                        (this.lastConnectedDragSourceOptions =
                          this.dragSourceOptions),
                        (this.dragSourceUnsubscribe =
                          this.backend.connectDragSource(
                            this.handlerId,
                            e,
                            this.dragSourceOptions,
                          )))
                      : (this.lastConnectedDragSource = e));
              },
            },
            {
              key: 'reconnectDragPreview',
              value: function () {
                var e = this.dragPreview,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragPreviewChange() ||
                    this.didDragPreviewOptionsChange();
                t && this.disconnectDragPreview(),
                  this.handlerId &&
                    (e
                      ? t &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragPreview = e),
                        (this.lastConnectedDragPreviewOptions =
                          this.dragPreviewOptions),
                        (this.dragPreviewUnsubscribe =
                          this.backend.connectDragPreview(
                            this.handlerId,
                            e,
                            this.dragPreviewOptions,
                          )))
                      : (this.lastConnectedDragPreview = e));
              },
            },
            {
              key: 'didHandlerIdChange',
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: 'didConnectedDragSourceChange',
              value: function () {
                return this.lastConnectedDragSource !== this.dragSource;
              },
            },
            {
              key: 'didConnectedDragPreviewChange',
              value: function () {
                return this.lastConnectedDragPreview !== this.dragPreview;
              },
            },
            {
              key: 'didDragSourceOptionsChange',
              value: function () {
                return !Jr(
                  this.lastConnectedDragSourceOptions,
                  this.dragSourceOptions,
                );
              },
            },
            {
              key: 'didDragPreviewOptionsChange',
              value: function () {
                return !Jr(
                  this.lastConnectedDragPreviewOptions,
                  this.dragPreviewOptions,
                );
              },
            },
            {
              key: 'disconnectDragSource',
              value: function () {
                this.dragSourceUnsubscribe &&
                  (this.dragSourceUnsubscribe(),
                  (this.dragSourceUnsubscribe = void 0));
              },
            },
            {
              key: 'disconnectDragPreview',
              value: function () {
                this.dragPreviewUnsubscribe &&
                  (this.dragPreviewUnsubscribe(),
                  (this.dragPreviewUnsubscribe = void 0),
                  (this.dragPreviewNode = null),
                  (this.dragPreviewRef = null));
              },
            },
            {
              key: 'dragSource',
              get: function () {
                return (
                  this.dragSourceNode ||
                  (this.dragSourceRef && this.dragSourceRef.current)
                );
              },
            },
            {
              key: 'dragPreview',
              get: function () {
                return (
                  this.dragPreviewNode ||
                  (this.dragPreviewRef && this.dragPreviewRef.current)
                );
              },
            },
            {
              key: 'clearDragSource',
              value: function () {
                (this.dragSourceNode = null), (this.dragSourceRef = null);
              },
            },
            {
              key: 'clearDragPreview',
              value: function () {
                (this.dragPreviewNode = null), (this.dragPreviewRef = null);
              },
            },
          ]) && Fo(t.prototype, n),
          r && Fo(t, r),
          e
        );
      })();
      function zo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var Uo = !1,
        Go = !1,
        Vo = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.sourceId = null),
              (this.internalMonitor = t.getMonitor());
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveHandlerId',
                value: function (e) {
                  this.sourceId = e;
                },
              },
              {
                key: 'getHandlerId',
                value: function () {
                  return this.sourceId;
                },
              },
              {
                key: 'canDrag',
                value: function () {
                  be(
                    !Uo,
                    'You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor',
                  );
                  try {
                    return (
                      (Uo = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    Uo = !1;
                  }
                },
              },
              {
                key: 'isDragging',
                value: function () {
                  if (!this.sourceId) return !1;
                  be(
                    !Go,
                    'You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor',
                  );
                  try {
                    return (
                      (Go = !0),
                      this.internalMonitor.isDraggingSource(this.sourceId)
                    );
                  } finally {
                    Go = !1;
                  }
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: 'isDraggingSource',
                value: function (e) {
                  return this.internalMonitor.isDraggingSource(e);
                },
              },
              {
                key: 'isOverTarget',
                value: function (e, t) {
                  return this.internalMonitor.isOverTarget(e, t);
                },
              },
              {
                key: 'getTargetIds',
                value: function () {
                  return this.internalMonitor.getTargetIds();
                },
              },
              {
                key: 'isSourcePublic',
                value: function () {
                  return this.internalMonitor.isSourcePublic();
                },
              },
              {
                key: 'getSourceId',
                value: function () {
                  return this.internalMonitor.getSourceId();
                },
              },
              {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                  return this.internalMonitor.subscribeToOffsetChange(e);
                },
              },
              {
                key: 'canDragSource',
                value: function (e) {
                  return this.internalMonitor.canDragSource(e);
                },
              },
              {
                key: 'canDropOnTarget',
                value: function (e) {
                  return this.internalMonitor.canDropOnTarget(e);
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]) && zo(t.prototype, n),
            r && zo(t, r),
            e
          );
        })();
      function Wo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var Ko,
        Yo = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'],
        qo = ['beginDrag'],
        Xo = (function () {
          function e(t, n, r) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.props = null),
              (this.beginDrag = function () {
                if (o.props)
                  return o.spec.beginDrag(o.props, o.monitor, o.ref.current);
              }),
              (this.spec = t),
              (this.monitor = n),
              (this.ref = r);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: 'receiveProps',
                value: function (e) {
                  this.props = e;
                },
              },
              {
                key: 'canDrag',
                value: function () {
                  return (
                    !!this.props &&
                    (!this.spec.canDrag ||
                      this.spec.canDrag(this.props, this.monitor))
                  );
                },
              },
              {
                key: 'isDragging',
                value: function (e, t) {
                  return (
                    !!this.props &&
                    (this.spec.isDragging
                      ? this.spec.isDragging(this.props, this.monitor)
                      : t === e.getSourceId())
                  );
                },
              },
              {
                key: 'endDrag',
                value: function () {
                  this.props &&
                    this.spec.endDrag &&
                    this.spec.endDrag(this.props, this.monitor, co(this.ref));
                },
              },
            ]) && Wo(t.prototype, n),
            r && Wo(t, r),
            e
          );
        })();
      function Zo(e) {
        return (
          Object.keys(e).forEach(function (t) {
            be(
              Yo.indexOf(t) > -1,
              'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              Yo.join(', '),
              t,
            ),
              be(
                'function' == typeof e[t],
                'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                t,
                t,
                e[t],
              );
          }),
          qo.forEach(function (t) {
            be(
              'function' == typeof e[t],
              'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              t,
              t,
              e[t],
            );
          }),
          function (t, n) {
            return new Xo(e, t, n);
          }
        );
      }
      var $o = n(42998),
        Jo = n(66213),
        Qo = n(11086);
      const ei = o.createContext({ size: 0, smallSizeTreeNodeAction: 1 }),
        ti = { [$o.Modifiers.Mod]: 1, [$o.Modifiers.Shift]: 2 };
      var ni = n(60096),
        ri = n(58686);
      const oi = () => {};
      class ii extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._ref = null),
            (this._handleRef = (e) => {
              this._ref = e;
              const {
                connectDragSource: t,
                connectDropTarget: n,
                connectDragPreview: r,
              } = this.props;
              (0, E.ensureDefined)(n)(this._ref),
                (0, E.ensureDefined)(t)(this._ref),
                (0, E.ensureDefined)(r)(
                  (Ko ||
                    ((Ko = new Image()).src =
                      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                  Ko),
                  { captureDraggingState: !0 },
                );
            }),
            (this._handleTouchStart = (e) => {
              const t = (e, t) => {
                  const n = (function (e, t) {
                    try {
                      const n = document.createEvent('TouchEvent');
                      return (
                        n.initTouchEvent(
                          e,
                          !0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          t.touches,
                          t.targetTouches,
                          t.changedTouches,
                        ),
                        n
                      );
                    } catch (e) {
                      return null;
                    }
                  })(e, t);
                  if (n) return n;
                  const r = Array.from(t.changedTouches),
                    o = Array.from(t.touches),
                    i = Array.from(t.targetTouches);
                  return new TouchEvent(e, {
                    bubbles: !0,
                    changedTouches: r,
                    touches: o,
                    targetTouches: i,
                  });
                },
                n = e.target;
              if (n instanceof Element) {
                const e = (e) => {
                    const r = e;
                    if (!n.isConnected) {
                      r.preventDefault();
                      const e = t('touchmove', r);
                      document.body.dispatchEvent(e);
                    }
                  },
                  r = (o) => {
                    const i = o;
                    if (!n.isConnected) {
                      i.preventDefault();
                      const e = t('touchend', i);
                      document.body.dispatchEvent(e);
                    }
                    n.removeEventListener('touchend', r),
                      n.removeEventListener('touchmove', e);
                  };
                n.addEventListener('touchend', r),
                  n.addEventListener('touchmove', e);
              }
            });
        }
        componentDidMount() {
          var e;
          null === (e = this._ref) ||
            void 0 === e ||
            e.addEventListener('touchstart', this._handleTouchStart);
        }
        componentWillUnmount() {
          var e;
          null === (e = this._ref) ||
            void 0 === e ||
            e.removeEventListener('touchstart', this._handleTouchStart);
        }
        render() {
          return o.createElement(si, {
            ...this.props,
            reference: this._handleRef,
          });
        }
        getNode() {
          return (0, E.ensureNotNull)(this._ref);
        }
      }
      const si = (e) => {
          const {
              id: t,
              isSelected: n,
              isOffset: r,
              isExpandable: i,
              setIsSelected: s,
              isDisabled: a,
              isExpanded: c,
              onClick: l,
              parentId: u,
              setIsExpanded: d,
              reference: h,
              isFirstListItem: f,
              isLastListItem: p,
              nodeRenderer: g,
              isChildOfSelected: v = !1,
            } = e,
            { size: y, smallSizeTreeNodeAction: m } = (0, o.useContext)(ei),
            b = (0, o.useRef)(null),
            S = (0, Jo.createSafeMulticastEventHandler)(
              (e) => (b.current = e),
              h,
            );
          let [w, T] = (0, Qo.useHover)();
          return (
            Bo.CheckMobile.any() &&
              ((w = n), (T = { onMouseOut: oi, onMouseOver: oi })),
            o.createElement(
              'div',
              {
                className: I(
                  ri.wrap,
                  n && ri.selected,
                  v && ri.childOfSelected,
                  a && ri.disabled,
                  i && ri.expandable,
                ),
                onClick:
                  1 === y && 0 === m
                    ? _
                    : function (e) {
                        if (e.defaultPrevented) return;
                        const r = ti[(0, $o.modifiersFromEvent)(e)] || 0;
                        !a && s && s(t, !n, r);
                        l && 0 === r && l(e, t);
                      },
                onContextMenu: _,
                ref: S,
                ...T,
              },
              i &&
                o.createElement(k.Icon, {
                  icon: ni,
                  className: I(ri.expandHandle, c && ri.expanded),
                  onClick: function (e) {
                    e.preventDefault(), i && d(t, !c);
                  },
                  onMouseDown: function (e) {
                    e.preventDefault();
                  },
                }),
              g({
                id: t,
                isOffset: r,
                parentId: u,
                isDisabled: a,
                isSelected: n,
                isChildOfSelected: v,
                isHovered: w,
                isExpanded: c,
                isFirstListItem: f,
                isLastListItem: p,
              }),
            )
          );
          function _() {
            a || n || !s || s(t, !0);
          }
        },
        ai = o.createContext({});
      function ci(e, t) {
        const { id: n } = t,
          r = vr(e, n),
          o = yr(e, n);
        let i = !1,
          s = r.parentId;
        for (; s && !i; ) (i = yr(e, s)), (s = vr(e, s).parentId);
        return {
          ...r,
          isSelected: o,
          isChildOfSelected: i,
          isExpanded: r.children.length > 0 && mr(e, n),
          isExpandable: r.children.length > 0,
          isDisabled: br(e, n),
        };
      }
      function li(e) {
        return (0, vt.bindActionCreators)(
          {
            setIsExpanded: sr,
            processDropTarget: $n,
            dropSelection: Jn,
            selectNext: qn,
            selectPrevious: Yn,
            setIsSelected: ir,
            endDrag: cr,
          },
          e,
        );
      }
      const ui = (function (e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            o = e;
          'function' != typeof e &&
            (be(
              po(e),
              'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              e,
            ),
            (o = function () {
              return e;
            })),
            be(
              fo(t),
              'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              t,
            );
          var i = Zo(t);
          return (
            be(
              'function' == typeof n,
              'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              n,
            ),
            be(
              fo(r),
              'Expected "options" provided as the third argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              n,
            ),
            function (e) {
              return xo({
                containerDisplayName: 'DragSource',
                createHandler: i,
                registerHandler: qr,
                createConnector: function (e) {
                  return new Ho(e);
                },
                createMonitor: function (e) {
                  return new Vo(e);
                },
                DecoratedComponent: e,
                getType: o,
                collect: n,
                options: r,
              });
            }
          );
        })(
          'node',
          {
            beginDrag: (e) => {
              const { id: t, isDisabled: n, isSelected: r } = e;
              return n || r || e.setIsSelected(t, !0), e;
            },
            endDrag: (e) => e.endDrag(),
          },
          (e) => ({
            connectDragSource: e.dragSource(),
            connectDragPreview: e.dragPreview(),
          }),
        ),
        di = Ro(
          'node',
          {
            hover: (e, t, n) => {
              if (!n) return;
              const r = n.getNode(),
                o = r.getBoundingClientRect(),
                i = o.bottom - o.top,
                s = t.getClientOffset();
              if (s) {
                const t = s.y - o.top;
                let n, a;
                if (
                  ((n =
                    0 === e.children.length
                      ? t < i / 2
                        ? 'before'
                        : 'after'
                      : t < i / 3
                      ? 'before'
                      : e.isExpanded || (t >= i / 3 && t < (2 * i) / 3)
                      ? 'inside'
                      : 'after'),
                  void 0 !== e.getContainerElement)
                ) {
                  const t = e.getContainerElement().getBoundingClientRect();
                  a = {
                    top: o.top - t.top,
                    left: o.left - t.left,
                    bottom: o.top - t.top + o.height,
                    right: o.left - t.left + o.width,
                    height: o.height,
                    width: o.width,
                  };
                } else
                  a = {
                    top: r.offsetTop,
                    left: r.offsetLeft,
                    bottom: r.offsetTop + r.offsetHeight,
                    right: r.offsetLeft + r.offsetWidth,
                    height: r.offsetHeight,
                    width: r.offsetWidth,
                  };
                e.processDropTarget(e, n, s.x - o.left < 48, a, e.isLastChild);
              }
            },
          },
          (e) => ({ connectDropTarget: e.dropTarget() }),
        ),
        hi = (0, U.connect)(ci, li, null, { context: ai })(ui(di(ii))),
        fi = (0, U.connect)(ci, li, null, { context: ai })(si);
      var pi = n(15738);
      function gi(e) {
        return (gi =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function vi(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function yi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function mi(e, t, n) {
        return t && yi(e.prototype, t), n && yi(e, n), e;
      }
      function bi(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Si(e, t);
      }
      function Si(e, t) {
        return (Si =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function wi(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = _i(e);
          if (t) {
            var o = _i(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Ti(this, n);
        };
      }
      function Ti(e, t) {
        return !t || ('object' !== gi(t) && 'function' != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function _i(e) {
        return (_i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ci(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          be(
            'function' == typeof e,
            'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',
            'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
            e,
          ),
          be(
            fo(t),
            'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
            t,
          ),
          function (n) {
            var r = n,
              i = t.arePropsEqual,
              s = void 0 === i ? Jr : i,
              a = r.displayName || r.name || 'Component',
              c = (function (t) {
                bi(i, t);
                var n = wi(i);
                function i() {
                  var e;
                  return (
                    vi(this, i),
                    ((e = n.apply(this, arguments)).isCurrentlyMounted = !1),
                    (e.ref = (0, o.createRef)()),
                    (e.handleChange = function () {
                      if (e.isCurrentlyMounted) {
                        var t = e.getCurrentState();
                        Jr(t, e.state) || e.setState(t);
                      }
                    }),
                    e
                  );
                }
                return (
                  mi(i, [
                    {
                      key: 'getDecoratedComponentInstance',
                      value: function () {
                        return (
                          be(
                            this.ref.current,
                            'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()',
                          ),
                          this.ref.current
                        );
                      },
                    },
                    {
                      key: 'shouldComponentUpdate',
                      value: function (e, t) {
                        return !s(e, this.props) || !Jr(t, this.state);
                      },
                    },
                    {
                      key: 'componentDidMount',
                      value: function () {
                        (this.isCurrentlyMounted = !0), this.handleChange();
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function () {
                        (this.isCurrentlyMounted = !1),
                          this.unsubscribeFromOffsetChange &&
                            (this.unsubscribeFromOffsetChange(),
                            (this.unsubscribeFromOffsetChange = void 0)),
                          this.unsubscribeFromStateChange &&
                            (this.unsubscribeFromStateChange(),
                            (this.unsubscribeFromStateChange = void 0));
                      },
                    },
                    {
                      key: 'render',
                      value: function () {
                        var e = this;
                        return (0, Ae.jsx)(
                          pn.Consumer,
                          {
                            children: function (t) {
                              var n = t.dragDropManager;
                              return void 0 === n
                                ? null
                                : (e.receiveDragDropManager(n),
                                  e.isCurrentlyMounted
                                    ? (0, Ae.jsx)(
                                        r,
                                        Object.assign({}, e.props, e.state, {
                                          ref: lo(r) ? e.ref : null,
                                        }),
                                        void 0,
                                      )
                                    : null);
                            },
                          },
                          void 0,
                        );
                      },
                    },
                    {
                      key: 'receiveDragDropManager',
                      value: function (e) {
                        if (void 0 === this.manager) {
                          (this.manager = e),
                            be(
                              'object' === gi(e),
                              'Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context',
                              a,
                              a,
                            );
                          var t = this.manager.getMonitor();
                          (this.unsubscribeFromOffsetChange =
                            t.subscribeToOffsetChange(this.handleChange)),
                            (this.unsubscribeFromStateChange =
                              t.subscribeToStateChange(this.handleChange));
                        }
                      },
                    },
                    {
                      key: 'getCurrentState',
                      value: function () {
                        if (!this.manager) return {};
                        var t = this.manager.getMonitor();
                        return e(t, this.props);
                      },
                    },
                  ]),
                  i
                );
              })(o.Component);
            return (
              (c.displayName = 'DragLayer('.concat(a, ')')),
              (c.DecoratedComponent = n),
              To()(c, n)
            );
          }
        );
      }
      var Oi = n(4735);
      function Ei(e) {
        const t = e(),
          n = (0, o.useRef)(t);
        n.current = t;
        const [r, i] = (0, o.useState)(n.current),
          s = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            null === s.current &&
              (s.current = requestAnimationFrame(() => {
                (s.current = null), i(n.current);
              }));
          }),
          (0, o.useEffect)(
            () => () => {
              s.current && cancelAnimationFrame(s.current);
            },
            [],
          ),
          r
        );
      }
      function Ii(e) {
        const { dropTargetOffset: t, mousePosition: n } = e;
        if (!t) return { display: 'none' };
        const { x: r, y: o } = t,
          i = n && t ? n.y - t.y : 0,
          s = `translate(${r + (n && t ? n.x - t.x : 0)}px, ${o + i}px)`;
        return { transform: s, WebkitTransform: s };
      }
      const Di = {
        top: 0,
        left: 0,
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100,
        opacity: 0.5,
        width: 300,
        backgroundColor: 'red',
      };
      const ki = Ci(function (e) {
        return {
          isDragging: e.isDragging() && 'node' === e.getItemType(),
          mousePosition: e.getClientOffset(),
          dropTargetOffset: e.getSourceClientOffset(),
        };
      })(
        (0, U.connect)(
          function (e) {
            return { items: kr(e) };
          },
          null,
          null,
          { context: ai },
        )(function (e) {
          const {
            items: t,
            isDragging: n,
            nodeRenderer: r,
            dragPreviewRenderer: i,
          } = e;
          return Ei(function () {
            return n
              ? o.createElement(
                  Oi.Portal,
                  null,
                  o.createElement(
                    'div',
                    { style: { ...Di, ...Ii(e) } },
                    t.map((e) => {
                      if (i) {
                        const t = i;
                        return o.createElement(t, { key: e.id, ...e });
                      }
                      return o.createElement(fi, {
                        id: e.id,
                        key: e.id,
                        nodeRenderer: r,
                        isDragPreview: !0,
                        isOffset: e.level > 1,
                      });
                    }),
                  ),
                )
              : null;
          });
        }),
      );
      var Mi = n(27947),
        xi = n(77400);
      const Ni = o.forwardRef((e, t) => {
          const n = (0, o.useRef)(null);
          return (
            e.connectDropTarget(n),
            (0, o.useImperativeHandle)(
              t,
              () => ({ getNode: () => (0, E.ensureNotNull)(n.current) }),
              [],
            ),
            o.createElement('div', {
              ref: n,
              style: { height: '100%', width: '100%' },
            })
          );
        }),
        Pi = Ro(
          'node',
          {
            hover: (e, t, n) => {
              if (!n) return;
              const r = t.getClientOffset();
              if (null === r) return;
              const o = e.getOrderedNodes();
              if (0 === o.length) return;
              const i = n.getNode().getBoundingClientRect(),
                s = e.getContainerElement().getBoundingClientRect();
              if ('first' === e.type) {
                const t = {
                  top: i.top - s.top + i.height,
                  left: i.left - s.left,
                  bottom: i.top - s.top + i.height,
                  right: i.left - s.left + i.width,
                  height: 0,
                  width: i.width,
                };
                e.processDropTarget(o[0], 'before', !1, t, !1);
              }
              if ('last' === e.type) {
                const t = r.x - i.left < 48,
                  n = o[o.length - 1],
                  a =
                    t && 2 === n.level
                      ? (0, E.ensureDefined)(o.find((e) => e.id === n.parentId))
                      : n,
                  c = {
                    top: i.top - s.top,
                    left: i.left - s.left,
                    bottom: i.top - s.top,
                    right: i.left - s.left + i.width,
                    height: i.height,
                    width: i.width,
                  };
                e.processDropTarget(a, 'after', t, c, !1);
              }
            },
          },
          (e) => ({ connectDropTarget: e.dropTarget() }),
        )(Ni),
        Ai = o.createContext({ isOver: !1, transform: void 0 });
      var Li = n(70294);
      function Ri(e) {
        const { dropType: t, boundBox: n } = e,
          { top: r, bottom: o, left: i } = (0, E.ensureDefined)(n);
        return [i, 'before' === t || 'inside' === t ? r : o];
      }
      const ji = Ci(function (e) {
          return { isDragging: e.isDragging() };
        })(
          (0, U.connect)(
            function (e) {
              const { boundBox: t, dropType: n, node: r } = hr(e);
              return { boundBox: t, dropType: n, level: r ? r.level : void 0 };
            },
            null,
            null,
            { context: ai },
          )(function (e) {
            const {
              dropType: t,
              boundBox: n,
              isDragging: r,
              level: i,
              transform: s = Ri,
            } = e;
            return Ei(function () {
              if (!r || !t || !n) return null;
              const a = {
                  [Li.dropTarget]: 'inside' !== t,
                  [Li.dropTargetInside]: 'inside' === t,
                },
                { width: c, height: l } = n,
                [u, d] = s(e),
                h = `translate(${u}px, ${d}px)`;
              return o.createElement('div', {
                className: I(a),
                style: {
                  position: 'absolute',
                  transform: h,
                  WebkitTransform: h,
                  top: 0,
                  left: 2 === i ? '46px' : 0,
                  width: 2 === i ? c - 46 + 'px' : c,
                  height: 'inside' === t ? l : '2px',
                },
              });
            });
          }),
        ),
        Bi = o.forwardRef((e, t) => {
          const n = (0, o.useContext)(Ai);
          return o.createElement(
            'div',
            { ...e, ref: t },
            e.children,
            n.isOver && o.createElement(ji, { transform: n.transform }),
          );
        });
      var Fi = n(76553),
        Hi = n(18343);
      const zi = 38 + $o.Modifiers.Shift,
        Ui = 40 + $o.Modifiers.Shift;
      const Gi = o.forwardRef(function (e, t) {
          const {
              navigationKeys: n,
              renderList: r,
              stopMultiSelect: i,
              startMultiSelect: s,
              isMultiSelecting: a,
              nodeRenderer: c,
              dragPreviewRenderer: l,
              className: u,
              connectDropTarget: d,
              readOnly: h,
              onClick: f,
              dropLayerTransform: p,
              setFocusedNode: g,
              scrollToId: v,
              rowHeight: y,
              onMultiSelectPrevious: m,
              onMultiSelectNext: b,
              onMoveCursorToNext: S,
              onMoveCursorToPrevious: w,
              outerRef: T,
              width: _,
              height: C,
              isOver: O,
              processDropTarget: I,
            } = e,
            k = (0, o.useContext)(P),
            M = (0, o.useRef)(null);
          (0, o.useEffect)(() => {
            const e = (e) => {
                [$o.Modifiers.Mod, $o.Modifiers.Shift].includes(
                  (0, $o.modifiersFromEvent)(e),
                ) && s();
              },
              t = (e) => {
                a &&
                  ![$o.Modifiers.Mod, $o.Modifiers.Shift].includes(
                    (0, $o.modifiersFromEvent)(e),
                  ) &&
                  i();
              };
            return (
              document.addEventListener('keydown', e),
              document.addEventListener('keyup', t),
              document.addEventListener('mousemove', t),
              () => {
                document.removeEventListener('keydown', e),
                  document.removeEventListener('keyup', t),
                  document.removeEventListener('mousemove', t);
              }
            );
          }, [a]),
            (function (e) {
              (0, o.useEffect)(() => {
                if (Bo.isEdge) {
                  let t = null;
                  const n = (0, E.ensureNotNull)(e.current),
                    r = (e) => {
                      if (e.target instanceof Element) {
                        const n = (0, E.ensureNotNull)(
                          e.target.closest('[draggable]'),
                        );
                        n instanceof HTMLElement &&
                          ((n.style.opacity = '0'),
                          (t = requestAnimationFrame(
                            () => (n.style.opacity = '1'),
                          )));
                      }
                    };
                  return (
                    n.addEventListener('dragstart', r),
                    () => {
                      n.removeEventListener('dragstart', r),
                        null !== t && cancelAnimationFrame(t);
                    }
                  );
                }
                return () => {};
              }, []);
            })(M);
          const x = (0, o.useCallback)(
              () => (0, E.ensureNotNull)(W.current),
              [],
            ),
            N = (0, o.useCallback)(() => r, [r]),
            A = (0, o.useMemo)(() => {
              const e = h ? fi : hi,
                t = [];
              let n;
              t.push({
                type: 'padding',
                node: o.createElement(Pi, {
                  type: 'first',
                  key: 'padding-top',
                  getContainerElement: x,
                  getOrderedNodes: N,
                  processDropTarget: I,
                }),
              });
              for (let i = 0; i < r.length; i++) {
                const s = r[i];
                1 === s.level &&
                  (void 0 !== n &&
                    n !== s.parentId &&
                    t.push({
                      type: 'separator',
                      node: o.createElement('div', {
                        key: n + '_separator',
                        className: Hi.separator,
                      }),
                    }),
                  (n = s.parentId)),
                  t.push({
                    type: 'node',
                    node: o.createElement(e, {
                      id: s.id,
                      key: s.id,
                      isFirstListItem: 0 === i,
                      isLastListItem: i === r.length - 1,
                      isExpandable: s.children.length > 0,
                      nodeRenderer: c,
                      readOnly: h,
                      onClick: f,
                      isOffset: s.level > 1,
                      getContainerElement: x,
                    }),
                  });
              }
              return (
                t.push({
                  type: 'padding',
                  node: o.createElement(Pi, {
                    type: 'last',
                    key: 'padding-bottom',
                    getContainerElement: x,
                    getOrderedNodes: N,
                    processDropTarget: I,
                  }),
                }),
                t
              );
            }, [r]),
            L = (0, o.useRef)([]);
          L.current = A;
          const R = (0, o.useCallback)((e) => {
              let { style: t } = e;
              const { index: n } = e;
              return (
                n === L.current.length - 1 &&
                  ((t = { ...t, bottom: 0, minHeight: t.height }),
                  delete t.height),
                o.createElement('div', { style: t }, L.current[n].node)
              );
            }, []),
            j = (0, o.useCallback)(
              (e) => {
                const t = L.current[e];
                return 'padding' === t.type
                  ? 6
                  : 'function' == typeof y
                  ? y(e, t)
                  : y;
              },
              [y],
            ),
            B = (0, o.useCallback)(
              (e) => (0, E.ensure)(L.current[e].node.key),
              [],
            ),
            F = (0, o.useMemo)(
              () =>
                null === v
                  ? { index: -1 }
                  : { index: L.current.findIndex((e) => e.node.key === v.id) },
              [v],
            );
          d(M);
          const [H, z, U, G] = (0, xi.useOverlayScroll)(),
            V = (0, o.useRef)(null);
          (0, o.useEffect)(
            () => (0, E.ensureNotNull)(V.current).resetAfterIndex(0, !0),
            [A],
          ),
            (0, o.useEffect)(
              () => (0, E.ensureNotNull)(V.current).scrollToItem(F.index),
              [F],
            );
          const W = (0, o.useRef)(null),
            K = (0, o.useMemo)(() => ({ isOver: O, transform: p }), [O, p]),
            Y = (0, o.useRef)(null),
            q = (0, o.useRef)({
              startScroll(e) {
                const t = () => {
                  null !== U.current &&
                    ((Y.current = requestAnimationFrame(t)),
                    U.current.scrollBy({ top: e }));
                };
                this.stopScroll(), t();
              },
              stopScroll() {
                null !== Y.current &&
                  (cancelAnimationFrame(Y.current), (Y.current = null));
              },
              getListElement: () => U.current,
            });
          return (
            (0, o.useImperativeHandle)(t, () => q.current, []),
            (0, o.useEffect)(() => () => q.current.stopScroll(), [O]),
            o.createElement(
              Ai.Provider,
              { value: K },
              o.createElement(
                'div',
                {
                  ...z,
                  className: D()(Hi.tree, u),
                  ref: M,
                  tabIndex: -1,
                  onKeyDown: function (e) {
                    const t = (0, $o.hashFromEvent)(e);
                    if (
                      e.defaultPrevented ||
                      (0, pi.isNativeUIInteraction)(t, e.target)
                    )
                      return;
                    k || t !== zi || (e.preventDefault(), m());
                    k || t !== Ui || (e.preventDefault(), b());
                    (38 === t || (void 0 !== n && 'previous' === n[t])) &&
                      (e.preventDefault(), w());
                    (40 === t || (void 0 !== n && 'next' === n[t])) &&
                      (e.preventDefault(), S());
                    if ((8 === t || 46 === t) && k) {
                      const { viewModel: e } = k,
                        t = e.selection(),
                        n = t.selected();
                      if (1 !== n.length) return;
                      const r = e.getNextNodeIdAfterRemove(n[0]);
                      if (null === r) return;
                      e.onChange().subscribe(
                        null,
                        () => {
                          if (t.selected().length) return;
                          const n = e.entity(r);
                          n && (t.set([n]), g(r));
                        },
                        !0,
                      );
                    }
                  },
                },
                o.createElement(Mi.OverlayScrollContainer, {
                  ...H,
                  className: Hi.overlayScrollWrap,
                }),
                o.createElement(jo.VariableSizeList, {
                  ref: function (e) {
                    V.current = e;
                  },
                  className: Hi.listContainer,
                  width: _,
                  height: C,
                  itemCount: A.length,
                  itemSize: j,
                  children: R,
                  itemKey: B,
                  outerRef: function (e) {
                    (U.current = e), T && T(e);
                  },
                  innerRef: function (e) {
                    W.current = e;
                  },
                  innerElementType: Bi,
                  onItemsRendered: function () {
                    G();
                  },
                  overscanCount: 20,
                  direction: (0, Fi.isRtl)() ? 'rtl' : 'ltr',
                }),
                o.createElement(ki, {
                  dragPreviewRenderer: l,
                  nodeRenderer: c,
                }),
              ),
            )
          );
        }),
        Vi = Ro(
          'node',
          {
            drop: (e, t, n) => {
              ('touch' === e.drag || Bo.isFF) && n.stopScroll(),
                t.getItem().dropSelection();
            },
            hover: (e, t, n) => {
              if ('touch' !== e.drag && !Bo.isFF) return;
              const r = t.getClientOffset();
              if (null === r) return;
              const o = n.getListElement();
              if (null === o) return;
              const i = o.getBoundingClientRect();
              ((t, r, o) => {
                const i = Math.abs(t - o),
                  s = Math.abs(t - r);
                if ((s > 40 && i > 40) || (i <= 40 && s <= 40))
                  return void n.stopScroll();
                var a, c, l, u;
                (a = s > 20 && s <= 40),
                  (l = i <= 20),
                  (u = s <= 20),
                  (c = i > 20 && i <= 40) || a
                    ? 'touch' === e.drag
                      ? n.startScroll(c ? -5 : 5)
                      : n.startScroll(c ? -2 : 2)
                    : (l || u) &&
                      ('touch' === e.drag
                        ? n.startScroll(l ? -10 : 10)
                        : n.startScroll(l ? -5 : 5));
              })(r.y, i.bottom, i.top);
            },
          },
          (e, t) => ({ connectDropTarget: e.dropTarget(), isOver: t.isOver() }),
        )(Gi);
      const Wi = (0, U.connect)(
          function (e) {
            return {
              renderList: Dr(e),
              orderedNodes: Er(e),
              isMultiSelecting: _r(e),
              selectedIds: wr(e),
              scrollToId: pr(e),
            };
          },
          function (e) {
            return (0, vt.bindActionCreators)(
              {
                startMultiSelect: tr,
                stopMultiSelect: nr,
                setFocusedNode: rr,
                processDropTarget: $n,
                onMoveCursorToNext: qn,
                onMoveCursorToPrevious: Yn,
                onMultiSelectPrevious: Xn,
                onMultiSelectNext: Zn,
              },
              e,
            );
          },
          null,
          { context: ai },
        )(Vi),
        Ki = { delayTouchStart: 100 };
      function Yi(e) {
        const {
            canBeAddedToSelection: t,
            initState: n,
            onSelect: r,
            canMove: i,
            onDrop: s,
            onMove: a,
            nodes: c,
            selectedIds: l,
            onKeyboardSelect: u,
            saga: d,
            lastFocusedNodeObject: h,
            lastSyncTimestampRef: f,
            scrollToId: p,
            ...g
          } = e,
          [v, y] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            const e = (0, z.default)();
            y(
              (function (e) {
                const t = (0, vt.applyMiddleware)(e);
                return (0, vt.createStore)(Kr, t);
              })(e),
            );
            const o = e.run(zr, {
              initState: n,
              onKeyboardSelect: u,
              saga: d,
              canMove: i,
              onMove: a,
              onDrop: s,
              onSelect: r,
              canBeAddedToSelection: t,
            });
            return () => o.cancel();
          }, []),
          (0, o.useEffect)(
            () => (
              null !== v &&
                c &&
                (f && (f.current = performance.now()),
                v.dispatch(((e) => ({ type: On, nodes: e }))(c))),
              () => {}
            ),
            [v, c],
          ),
          (0, o.useEffect)(() => {
            null !== v && l && v.dispatch(Qn(l));
          }, [v, l]),
          (0, o.useEffect)(() => {
            null !== v && (null == h ? void 0 : h.id) && v.dispatch(rr(h.id));
          }, [v, h]),
          null === v
            ? null
            : o.createElement(qi, { store: v, scrollToId: p, ...g })
        );
      }
      const qi = o.memo(function (e) {
        const { store: t, scrollToId: n, ...r } = e,
          i = 'touch' === e.drag ? Pe : me;
        return (
          (0, o.useEffect)(() => {
            var e;
            t.dispatch(
              or(
                null !== (e = null == n ? void 0 : n.id) && void 0 !== e
                  ? e
                  : null,
              ),
            );
          }, [n]),
          o.createElement(
            Sn,
            { backend: i, options: Ki },
            o.createElement(
              U.Provider,
              { store: t, context: ai },
              o.createElement(Wi, { ...r }),
            ),
          )
        );
      });
      function Xi(e, t) {
        (0, F.trackEvent)('Object Tree', e, t);
      }
      function Zi(e) {
        return e.length > 1 ? 'Multi select' : e[0].gaLabel();
      }
      function $i(e) {
        return (0, z.eventChannel)((t) => {
          const n = {};
          return (
            e.onChange().subscribe(n, () => t({ type: Dn })),
            e.onGroupCreated().subscribe(n, (e) => t(sr(e, !0))),
            e
              .selection()
              .onChange()
              .subscribe(n, (e) => t(Qn(e))),
            () => {
              e.onChange().unsubscribeAll(n),
                e.selection().onChange().unsubscribeAll(n),
                e.onGroupCreated().unsubscribeAll(n);
            }
          );
        }, z.buffers.expanding());
      }
      function* Ji() {
        for (;;) yield (0, C.take)([Nn, xn]), Xi('Select', 'Arrow');
      }
      function* Qi() {
        for (;;) {
          const { mode: e } = yield (0, C.take)(Un);
          1 === e && Xi('Multi select', 'Ctrl'),
            2 === e && Xi('Multi select', 'Shift');
        }
      }
      function* es(e) {
        for (;;) {
          yield (0, C.take)(Mn);
          const { node: t, dropType: n } = hr(yield (0, C.select)());
          if (t) {
            const r = Cr(yield (0, C.select)()),
              o = r.map((t) => (0, E.ensureNotNull)(e.entity(t.id)));
            let i = 'Drag';
            1 === t.level && 'inside' !== n && r.some((e) => 2 === e.level)
              ? (i = 'From the group')
              : (2 !== t.level && 'inside' !== n) ||
                !r.some((e) => 1 === e.level)
              ? 1 === r.length &&
                r[0].parentId !== t.parentId &&
                (i = 'Existing pane')
              : (i = 'To the group'),
              Xi(i, Zi(o));
          }
        }
      }
      function* ts(e) {
        yield (0, C.fork)(Ji), yield (0, C.fork)(Qi), yield (0, C.fork)(es, e);
      }
      function* ns(e) {
        yield (0, C.fork)(ts, e);
        const t = yield (0, C.call)($i, e);
        Gr.logNormal('Opened object tree data source channel');
        try {
          for (;;) {
            const e = yield (0, C.take)(t);
            yield (0, C.put)(e);
          }
        } finally {
          Gr.logNormal('Closed object tree data source channel'), t.close();
        }
      }
      const rs = o.createContext(null);
      var os = n(39197),
        is = n(88098),
        ss = n(25199);
      const as = O.mobiletouch ? 'touch' : 'native';
      function cs(e) {
        const {
            viewModel: t,
            showHeader: n = !0,
            nodeRenderer: r,
            isDialog: i = !1,
          } = e,
          s = (0, o.useRef)(null),
          a = (function (e) {
            const [t, n] = (0, o.useState)(e.getChartId()),
              r = (0, o.useRef)(t);
            return (
              (r.current = t),
              (0, o.useEffect)(() => {
                return (
                  e.onChange().subscribe(null, t),
                  () => {
                    e.onChange().unsubscribe(null, t);
                  }
                );
                function t() {
                  const t = e.getChartId();
                  r.current !== t && n(t);
                }
              }, []),
              t
            );
          })(t),
          [c, l] = (0, is.useDimensions)(),
          [u, d] = (0, o.useState)(null),
          h = (0, o.useMemo)(() => ({ isTouch: O.touch, isDialog: i }), [i]);
        return o.createElement(
          rs.Provider,
          { value: h },
          o.createElement(
            P.Provider,
            { value: { viewModel: t } },
            o.createElement(
              'div',
              {
                className: ss.wrap,
                onContextMenu: os.preventDefaultForContextMenu,
              },
              n && o.createElement(H, null),
              o.createElement(
                _(),
                { onMeasure: c },
                o.createElement(
                  'div',
                  {
                    className: ss.space,
                    onClick: function (e) {
                      if (e.defaultPrevented) return;
                      if (!(e.target instanceof Element) || null === s.current)
                        return;
                      e.target === s.current && t.selection().set([]);
                    },
                  },
                  null !== l &&
                    o.createElement(Yi, {
                      key: a,
                      height: l.height,
                      width: l.width,
                      canBeAddedToSelection: function (e) {
                        const n = t.entity(e);
                        return t.selection().canBeAddedToSelection(n);
                      },
                      nodeRenderer: r,
                      initState: function () {
                        const { nodes: e, selection: n } = t.getState();
                        return { selectedIds: n, nodes: e };
                      },
                      canMove: function (e, n, r) {
                        return t.isSelectionDropable(n.id, r);
                      },
                      drag: as,
                      rowHeight: ls,
                      onSelect: function (e) {
                        const n = e
                          .map((e) => t.entity(e))
                          .filter((e) => null !== e);
                        t.selection().set(n);
                      },
                      onDrop: function (e) {
                        e.preventDefault();
                        const {
                          detail: { target: n, type: r },
                        } = e;
                        t.insertSelection(n, r);
                      },
                      scrollToId: u,
                      saga: function* () {
                        yield (0, C.fork)(ns, t);
                      },
                      onKeyboardSelect: function (e) {
                        d({ id: e });
                      },
                      outerRef: function (e) {
                        s.current = e;
                      },
                    }),
                ),
              ),
            ),
          ),
        );
      }
      function ls(e, t) {
        switch (t.type) {
          case 'node':
            return 38;
          case 'separator':
            return 13;
        }
      }
      var us;
      !(function (e) {
        (e.Svg = 'svg'), (e.Text = 'text');
      })(us || (us = {}));
      var ds = n(81829),
        hs = n(59404);
      function fs(e) {
        const { className: t, disabled: n, ...r } = e;
        return o.createElement(k.Icon, {
          className: D()(hs.button, n && hs.disabled, t),
          ...r,
        });
      }
      var ps = n(27278),
        gs = n(36535),
        vs = n(23707),
        ys = n(56350),
        ms = n(25700),
        bs = n(95716),
        Ss = n(84917);
      function ws(e) {
        const { id: t } = e,
          n = (0, o.useContext)(P),
          { viewModel: r } = (0, E.ensureNotNull)(n),
          i = r.entity(t);
        return null === i ? null : o.createElement(Ts, { ...e, entity: i });
      }
      function Ts(e) {
        const {
            id: t,
            isOffset: n,
            isDisabled: r,
            isSelected: i,
            isChildOfSelected: s,
            isHovered: a,
            parentId: c,
            entity: l,
            isExpanded: u,
          } = e,
          d = (0, o.useContext)(P),
          { viewModel: h } = (0, E.ensureNotNull)(d),
          f = (0, o.useContext)(rs),
          { size: p } = (0, o.useContext)(ei),
          [g, v] = (0, o.useState)(!1),
          y = (0, o.useRef)(null),
          [b, S] = (0, o.useState)(l.title()),
          [w, T] = (0, o.useState)(l.isLocked()),
          [_, C] = (0, o.useState)(l.isVisible()),
          [O, D] = (0, o.useState)(l.isActualInterval()),
          [M, x] = (0, o.useState)(l.getDrawingSyncState()),
          [N, A] = (0, o.useState)(!1),
          [L, R] =
            ((0, ps.useWatchedValueReadonly)({
              watchedValue: h.getChartLayout(),
            }),
            (0, o.useState)(!1)),
          j = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          const e = {};
          l.onLockChanged().subscribe(e, () => T(l.isLocked())),
            l.onVisibilityChanged().subscribe(e, () => C(l.isVisible()));
          const t = l.onTitleChanged();
          return (
            t && t.subscribe(e, () => S(l.title())),
            l
              .onIsActualIntervalChange()
              .subscribe(e, () => D(l.isActualInterval())),
            l
              .onSyncStateChanged()
              .subscribe(e, () => x(l.getDrawingSyncState())),
            () => {
              l.onIsActualIntervalChange().unsubscribeAll(e),
                l.onLockChanged().unsubscribeAll(e),
                l.onVisibilityChanged().unsubscribeAll(e),
                l.onSyncStateChanged().unsubscribeAll(e),
                t && t.unsubscribeAll(e),
                j.current && clearTimeout(j.current);
            }
          );
        }, [l]),
          (0, o.useEffect)(() => {
            g &&
              y.current &&
              (y.current.focus(), y.current.setSelectionRange(0, b.length));
          }, [g]),
          (0, o.useEffect)(() => {
            const e = {};
            return (
              h.hoveredObjectChanged().subscribe(e, X),
              () => {
                h.hoveredObjectChanged().unsubscribeAll(e);
              }
            );
          }, [u]),
          (0, o.useEffect)(() => {
            h.setHoveredObject(a ? t : null);
          }, [a]),
          (0, o.useEffect)(() => {
            !i && j.current && (clearTimeout(j.current), (j.current = null)),
              v(!1);
          }, [i]);
        const B = l.getIcon(),
          F = {};
        if (c) {
          const e = h.entity(c);
          e && (F['data-parent-name'] = e.title()),
            (F['data-type'] = l.hasChildren() ? 'group' : 'data-source');
        }
        const H = l.title(),
          z = a || N,
          U = g && i,
          G = !!f && f.isTouch,
          V = !!f && f.isDialog,
          W = O && _ ? ms : bs,
          K = l.hasChildren()
            ? (0, m.t)('Group is hidden on current interval')
            : (0, m.t)('Drawing is hidden on current interval');
        return o.createElement(
          'span',
          {
            className: I(
              Ss.wrap,
              r && Ss.disabled,
              i && Ss.selected,
              n && Ss.offset,
              s && Ss.childOfSelected,
              N && !r && !i && !s && Ss.hover,
              V && !r && !i && !s && Ss.dialog,
            ),
            onMouseDown: function (e) {
              g && !(0, E.ensureNotNull)(y.current).contains(e.target) && R(!0);
            },
            onClick:
              1 === p
                ? Y
                : function (e) {
                    if (e.defaultPrevented) return;
                    if (0 !== (0, $o.modifiersFromEvent)(e)) return;
                    if (j.current)
                      e.preventDefault(),
                        clearTimeout(j.current),
                        (j.current = null),
                        h.openProperties(l),
                        R(!1);
                    else {
                      const e = h.selection().selected();
                      j.current = setTimeout(() => {
                        (j.current = null),
                          i && !L && 1 === e.length && h.rename(l, () => v(!0)),
                          R(!1);
                      }, 500);
                    }
                  },
            onContextMenu: G ? void 0 : Y,
          },
          !U &&
            o.createElement(
              o.Fragment,
              null,
              B &&
                B.type === us.Svg &&
                o.createElement(k.Icon, {
                  icon: B.content || '',
                  className: Ss.icon,
                }),
              B &&
                B.type === us.Text &&
                o.createElement(
                  'span',
                  { className: I(Ss.icon, Ss.textIcon) },
                  B.content,
                ),
              !1,
              o.createElement(
                'span',
                {
                  className: I(
                    Ss.title,
                    h.isMain(l) && Ss.main,
                    (!l.isVisible() || !O) && Ss.disabled,
                  ),
                  ...F,
                },
                H,
              ),
              o.createElement(
                'span',
                { className: Ss.rightButtons },
                l.canBeLocked() &&
                  o.createElement(fs, {
                    icon: w ? vs : ys,
                    className: I(Ss.button, (z || w) && Ss.visible),
                    onClick: function (e) {
                      if (e.defaultPrevented) return;
                      e.preventDefault(), h.setIsLocked(t, !l.isLocked());
                    },
                    'data-role': 'button',
                    'data-name': 'lock',
                    'data-active': w,
                  }),
                o.createElement(fs, {
                  icon: W,
                  className: I(
                    Ss.button,
                    !O && [Ss.warn, 'apply-common-tooltip'],
                    (z || !_ || !O) && Ss.visible,
                  ),
                  onClick: O
                    ? function (e) {
                        if (e.defaultPrevented) return;
                        e.preventDefault(), h.setIsVisible(t, !l.isVisible());
                      }
                    : void 0,
                  title: O ? void 0 : K,
                  disabled: !O,
                  'data-role': 'button',
                  'data-name': 'hide',
                  'data-active': !_,
                }),
                l.canBeRemoved() &&
                  o.createElement(fs, {
                    icon: gs,
                    className: I(Ss.button, (G || z) && Ss.visible),
                    onClick: function (e) {
                      if (e.defaultPrevented) return;
                      e.preventDefault(), e.stopPropagation(), h.remove(t);
                    },
                    'data-role': 'button',
                    'data-name': 'remove',
                  }),
              ),
            ),
          U &&
            o.createElement(ds.InputControl, {
              value: b,
              onChange: function (e) {
                S(e.currentTarget.value);
              },
              onClick: os.preventDefault,
              className: Ss.renameInput,
              onKeyDown: function (e) {
                27 === (0, $o.hashFromEvent)(e)
                  ? (e.preventDefault(), S(l.title()), v(!1))
                  : 13 === (0, $o.hashFromEvent)(e) &&
                    (e.preventDefault(), q());
              },
              reference: function (e) {
                y.current = e;
              },
              onBlur: q,
              onDragStart: function (e) {
                e.preventDefault(), e.stopPropagation();
              },
              draggable: !0,
              stretch: !0,
            }),
        );
        function Y(e) {
          e.defaultPrevented ||
            g ||
            !l.fullyConstructed() ||
            (e.preventDefault(),
            e.persist(),
            h.openContextMenu(l, () => v(!0), e));
        }
        function q() {
          '' !== b && l.setName(b), S(l.title()), v(!1);
        }
        function X(e) {
          if (l.hasChildren() && !u) {
            const t = null !== e && l.childrenIds().has(e);
            A(t);
          } else A(t === e);
        }
      }
      var _s = n(47937);
      class Cs extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._isMounted = !1),
            (this._dialogRef = o.createRef()),
            (this._renderChildren = (e) =>
              o.createElement(Os, {
                isSmallTablet: e,
                viewModel: this.props.viewModel,
              })),
            (this._handleMediaChange = () => {
              this.state.showDrawer &&
                !window.matchMedia(S.DialogBreakpoints.TabletSmall).matches &&
                this.setState({ showDrawer: !1 });
            }),
            (this._onManageDrawings = (e) => {
              throw new Error('not supported');
            }),
            (this._closeDrawer = () => {
              this.setState({ showDrawer: !1 });
            }),
            (this._handleContextMenuOpened = (e) => {
              this.setState({ isContextMenuOpened: e });
            }),
            (this._matchMedia = window.matchMedia(
              S.DialogBreakpoints.TabletSmall,
            )),
            (this.state = {
              showDrawer: !1,
              showDialog: !1,
              isContextMenuOpened: !1,
            });
        }
        componentDidMount() {
          (this._isMounted = !0),
            this._matchMedia.addListener(this._handleMediaChange),
            this.props.viewModel
              .isContextMenuOpened()
              .subscribe(this._handleContextMenuOpened);
        }
        componentWillUnmount() {
          (this._isMounted = !1),
            this._matchMedia.removeListener(this._handleMediaChange),
            this.props.viewModel
              .isContextMenuOpened()
              .unsubscribe(this._handleContextMenuOpened);
        }
        render() {
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              y.MatchMedia,
              { rule: S.DialogBreakpoints.TabletSmall },
              (e) =>
                o.createElement(b.AdaptivePopupDialog, {
                  additionalElementPos: 'after',
                  additionalHeaderElement: !1,
                  className: _s.dialog,
                  dataName: 'object-tree-dialog',
                  isOpened: !0,
                  onClickOutside:
                    this.state.showDialog || e || this.state.isContextMenuOpened
                      ? () => {}
                      : this.props.onClose,
                  onClose: this.props.onClose,
                  ref: this._dialogRef,
                  render: () => this._renderChildren(e),
                  title: (0, m.t)('Object tree'),
                  showSeparator: !0,
                }),
            ),
            o.createElement(
              v.DrawerManager,
              null,
              this.state.showDrawer &&
                o.createElement(
                  g.Drawer,
                  { onClose: this._closeDrawer, position: 'Bottom' },
                  o.createElement(w.ManageDrawings, {
                    onClose: this._closeDrawer,
                    chartWidget: this.props.activeChartWidget,
                    isMobile: !0,
                  }),
                ),
            ),
          );
        }
      }
      function Os(e) {
        const { isSmallTablet: t, viewModel: n } = e,
          r = (0, o.useMemo)(
            () => ({ size: t ? 1 : 0, smallSizeTreeNodeAction: 0 }),
            [t],
          );
        return o.createElement(
          ei.Provider,
          { value: r },
          o.createElement(cs, {
            nodeRenderer: ws,
            showHeader: !1,
            viewModel: n,
            isDialog: !0,
          }),
        );
      }
      var Es = n(86573),
        Is = n(468),
        Ds = n(5729),
        ks = n.n(Ds);
      var Ms = n(9062);
      function xs(e, t) {
        return `${e}:${t}`;
      }
      function Ns(e) {
        const t = e.split(':');
        return { persistentId: t[0], instanceId: t[1] };
      }
      class Ps {
        constructor(e) {
          (this._onChange = new (ks())()),
            (this._recalculate = () => {
              const e = this._groupModel
                  .groups()
                  .map((e) => xs(e.id, e.instanceId())),
                t = this._selectionApi.allSources();
              (this._selected = this._selected.filter(
                (n) => e.includes(n) || t.includes(n),
              )),
                this._onChange.fire(this._selected);
            }),
            (this._model = e),
            (this._selectionApi = new Ms.SelectionApi(this._model)),
            (this._groupModel = this._model.lineToolsGroupModel()),
            (this._selected = this._getSelectedIds()),
            this._selectionApi.onChanged().subscribe(this, () => {
              (this._selected = this._getSelectedIds()),
                this._onChange.fire(this._selected);
            }),
            this._groupModel.onChanged().subscribe(this, this._recalculate);
        }
        destroy() {
          this._selectionApi.onChanged().unsubscribeAll(this),
            this._groupModel.onChanged().unsubscribeAll(this);
        }
        set(e) {
          const t = [];
          let n = e.map((e) => e.id());
          for (const r of e)
            if (r.hasChildren()) {
              const e = r.childrenIds();
              t.push(...Array.from(e.values())),
                (n = n.filter((t) => !e.has(t)));
            } else t.push(r.id());
          this._selectionApi.set(t.map((e) => Ns(e).persistentId)),
            (this._selected = n),
            this._onChange.fire(this._selected);
        }
        canBeAddedToSelection(e) {
          return null !== e && e.canBeAddedToSelection();
        }
        onChange() {
          return this._onChange;
        }
        selected() {
          return this._selected;
        }
        _getSelectedIds() {
          return this._selectionApi
            .allSources()
            .map((e) => this._model.dataSourceForId(e))
            .filter(Ur.notNull)
            .filter((e) => e.showInObjectTree())
            .map((e) => xs(e.id(), e.instanceId()));
        }
      }
      class As {
        constructor(e, t) {
          (this._controller = e),
            (this._facade = t),
            (this._groupModel = e.model().lineToolsGroupModel());
        }
        buildTree() {
          const e = {};
          for (const t of this._controller.model().panes()) {
            const n = t
              .sourcesByGroup()
              .all()
              .filter((e) => e.showInObjectTree());
            e[t.id()] = Ls(t.id(), 0);
            for (const n of this._groupModel.groups()) {
              const r = xs(n.id, n.instanceId()),
                o = (0, E.ensureNotNull)(this._facade.getObjectById(r));
              if (o.pane() === t) {
                const r = [...n.lineTools()]
                  .sort((e, t) => (e.zorder() > t.zorder() ? -1 : 1))
                  .map((e) => xs(e.id(), e.instanceId()));
                (e[o.id()] = Ls(o.id(), 1, t.id(), r)),
                  e[t.id()].children.push(o.id());
                for (const t of r) e[t] = Ls(t, 2, o.id());
              }
            }
            for (const r of n) {
              const n = xs(r.id(), r.instanceId());
              e[n] || ((e[n] = Ls(n, 1, t.id())), e[t.id()].children.push(n));
            }
            e[t.id()].children.sort((e, t) => {
              const n = (0, E.ensureNotNull)(this._facade.getObjectById(e)),
                r = (0, E.ensureNotNull)(this._facade.getObjectById(t));
              return (
                (0, E.ensureNotNull)(r.zOrder()) -
                (0, E.ensureNotNull)(n.zOrder())
              );
            });
          }
          return this._facade.invalidateCache(new Set(Object.keys(e))), e;
        }
      }
      function Ls(e, t, n, r = []) {
        return { id: e, level: t, parentId: n, children: r };
      }
      var Rs = n(90963),
        js = n(67945),
        Bs = n(17e3),
        Fs = n(46015),
        Hs = n(95975),
        zs = n(21209),
        Us = n(15521),
        Gs = n(82462),
        Vs = n(33434),
        Ws = n(61619),
        Ks = n(85103);
      const Ys = new Rs.TranslatedString(
          'show {title}',
          (0, m.t)('show {title}'),
        ),
        qs = new Rs.TranslatedString('hide {title}', (0, m.t)('hide {title}')),
        Xs = new Rs.TranslatedString('lock {title}', (0, m.t)('lock {title}')),
        Zs = new Rs.TranslatedString(
          'unlock {title}',
          (0, m.t)('unlock {title}'),
        ),
        $s = new Rs.TranslatedString(
          'change {sourceTitle} title to {newSourceTitle}',
          (0, m.t)('change {sourceTitle} title to {newSourceTitle}'),
        ),
        Js = new Rs.TranslatedString(
          'insert source(s) after',
          (0, m.t)('insert source(s) after'),
        );
      function Qs(e, t) {
        return t.every(
          (t) => !(t.pane() !== e && !t.allowsMovingbetweenPanes()),
        );
      }
      function ea(e) {
        return e instanceof Fs.DataSource && e.showInObjectTree()
          ? xs(e.id(), e.instanceId())
          : null;
      }
      function ta(e) {
        return new Rs.TranslatedString(e.name(), e.title());
      }
      const na = new (ks())();
      class ra {
        constructor(e, t) {
          (this._syncStateChanged = new (ks())()),
            (this._lineToolsAffectChartInvalidation =
              new Ks.FeatureToggleWatchedValue(
                'do_not_invalidate_chart_on_changing_line_tools',
                !1,
              )),
            (this._updateSyncState = () => {
              this._syncStateChanged.fire(
                (0, E.ensureNotNull)(this.getDrawingSyncState()),
              );
            }),
            (this._undoModel = e),
            (this._dataSource = t),
            (0, js.isLineTool)(this._dataSource) &&
              this._dataSource.linkKey().subscribe(this._updateSyncState);
          const n = this._undoModel.lineBeingCreated();
          null !== n &&
            n === t &&
            n.isSynchronizable() &&
            Us.isToolCreatingNow.subscribe(this._updateSyncState);
        }
        destroy() {
          (0, js.isLineTool)(this._dataSource) &&
            this._dataSource.linkKey().unsubscribe(this._updateSyncState),
            Us.isToolCreatingNow.unsubscribe(this._updateSyncState);
        }
        id() {
          return xs(this._dataSource.id(), this._dataSource.instanceId());
        }
        title() {
          const e = this._dataSource;
          return (0, js.isLineTool)(e)
            ? e.properties().title.value() || e.translatedType()
            : (0, Hs.isSeries)(e) && this._undoModel.mainSeries() === e
            ? e.symbolTitle(
                void 0,
                void 0,
                (0, Bo.onWidget)() ? 'exchange' : 'listed_exchange',
              )
            : e.title();
        }
        gaLabel() {
          return (0, Bs.isStudy)(this._dataSource)
            ? 'Study'
            : (0, js.isLineTool)(this._dataSource)
            ? 'Drawing'
            : 'Symbol';
        }
        canBeLocked() {
          return (
            (0, js.isLineTool)(this._dataSource) &&
            this._dataSource.userEditEnabled()
          );
        }
        canBeRemoved() {
          return (
            this._undoModel.mainSeries() !== this._dataSource &&
            this._dataSource.isUserDeletable()
          );
        }
        canBeHidden() {
          return this._dataSource.canBeHidden();
        }
        canBeRenamed() {
          return (0, js.isLineTool)(this._dataSource);
        }
        fullyConstructed() {
          return this._undoModel.lineBeingCreated() !== this._dataSource;
        }
        isVisible() {
          return this._dataSource.properties().visible.value();
        }
        isActualInterval() {
          return (
            (!(0, js.isLineTool)(this._dataSource) &&
              !(0, Bs.isStudy)(this._dataSource)) ||
            this._dataSource.isActualInterval()
          );
        }
        onIsActualIntervalChange() {
          return (0, js.isLineTool)(this._dataSource) ||
            (0, Bs.isStudy)(this._dataSource)
            ? this._dataSource.onIsActualIntervalChange()
            : na;
        }
        isLocked() {
          return (
            !!(0, js.isLineTool)(this._dataSource) &&
            this._dataSource.properties().frozen.value()
          );
        }
        onVisibilityChanged() {
          return this._dataSource.properties().visible.listeners();
        }
        onLockChanged() {
          return (0, js.isLineTool)(this._dataSource)
            ? this._dataSource.properties().frozen.listeners()
            : na;
        }
        getIcon() {
          const e = u,
            t = this._dataSource.getSourceIcon(),
            n = (0, Bs.isStudyStrategy)(this._dataSource);
          let r = { type: us.Svg, content: n ? Gs : Vs };
          if (e && t)
            if ('loadSvg' === t.type) {
              const [n, o] = t.svgId.split('.'),
                i = 'linetool' === n ? e.linetool[o] : e.series[Number(o)];
              r = { type: us.Svg, content: i || Vs };
            } else
              'text' === t.type && (r = { type: us.Text, content: t.text });
          return r;
        }
        setVisible(e) {
          const t = (e ? Ys : qs).format({ title: ta(this._dataSource) });
          this._undoModel.setProperty(
            this._dataSource.properties().visible,
            e,
            t,
          );
        }
        setLocked(e) {
          if ((0, js.isLineTool)(this._dataSource)) {
            const t = (e ? Xs : Zs).format({ title: ta(this._dataSource) });
            this._undoModel.setProperty(
              this._dataSource.properties().frozen,
              e,
              t,
            );
          }
        }
        setName(e) {
          if ((0, js.isLineTool)(this._dataSource)) {
            const t = $s.format({
              sourceTitle:
                this._dataSource.properties().title.value() ||
                ta(this._dataSource),
              newSourceTitle: e,
            });
            this._undoModel.setProperty(
              this._dataSource.properties().title,
              e,
              t,
              this._lineToolsAffectChartInvalidation.value(),
            );
          }
        }
        isCopiable() {
          return this._dataSource.copiable();
        }
        isClonable() {
          return this._dataSource.cloneable();
        }
        zOrder() {
          return this._dataSource.zorder();
        }
        remove() {
          this._undoModel.removeSource(this._dataSource, !1);
        }
        canBeAddedToSelection() {
          return this._undoModel
            .selection()
            .canBeAddedToSelection(this._dataSource);
        }
        setAsSelection() {
          this._undoModel.model().selectionMacro((e) => {
            e.clearSelection(), e.addSourceToSelection(this._dataSource);
          });
        }
        addToSelection() {
          this._undoModel.model().selectionMacro((e) => {
            e.addSourceToSelection(this._dataSource);
          });
        }
        addSourcesToArray(e) {
          return e.push(this._dataSource), e;
        }
        insertSourcesBeforeThis(e) {
          this._insertSources(e, (e) =>
            this._undoModel.insertBefore(e, this._dataSource),
          );
        }
        insertSourcesAfterThis(e) {
          this._insertSources(e, (e) =>
            this._undoModel.insertAfter(e, this._dataSource),
          );
        }
        childrenIds() {
          return new Set();
        }
        hasChildren() {
          return !1;
        }
        pane() {
          return (0, E.ensureNotNull)(
            this._undoModel.model().paneForSource(this._dataSource),
          );
        }
        allowsMovingbetweenPanes() {
          return !(0, js.isLineTool)(this._dataSource);
        }
        canBeAddedToGroup() {
          return (0, js.isLineTool)(this._dataSource);
        }
        canInsertBeforeThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
        canInsertAfterThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
        detachFromParent() {
          if ((0, js.isLineTool)(this._dataSource)) {
            const e = this._undoModel.model(),
              t = this._undoModel.lineToolsGroupController(),
              n = e.lineToolsGroupModel().groupForLineTool(this._dataSource);
            null !== n && t.excludeLineToolFromGroup(n, this._dataSource);
          }
        }
        onTitleChanged() {
          const e = this._dataSource.properties().title;
          return e ? e.listeners() : void 0;
        }
        canBeSyncedInLayout() {
          return (
            (0, js.isLineTool)(this._dataSource) &&
            this._dataSource.isSynchronizable()
          );
        }
        onSyncStateChanged() {
          return this._syncStateChanged;
        }
        setDrawingSyncState(e) {
          if (!this.canBeSyncedInLayout() || !this.fullyConstructed()) return;
          const t = this._dataSource;
          switch (e) {
            case 0:
              if (null === t.linkKey().value()) return;
              this._undoModel.unlinkLines([t]);
              break;
            case 1:
              if (null !== t.linkKey().value()) return;
              this._undoModel.copyToOtherCharts([t]);
          }
        }
        getDrawingSyncState() {
          return this.canBeSyncedInLayout()
            ? this.fullyConstructed() &&
              null !== this._dataSource.linkKey().value()
              ? 1
              : 0
            : null;
        }
        doNotAffectChartInvalidation() {
          return (
            (0, js.isLineTool)(this._dataSource) &&
            this._lineToolsAffectChartInvalidation.value()
          );
        }
        _canInsertBeforeOrAfter(e) {
          const t = this._undoModel.model();
          if (!Qs(this.pane(), e)) return !1;
          if ((0, js.isLineTool)(this._dataSource)) {
            if (
              null !==
                t.lineToolsGroupModel().groupForLineTool(this._dataSource) &&
              e.some((e) => !e.canBeAddedToGroup())
            )
              return !1;
          }
          return !0;
        }
        _insertSources(e, t) {
          const n = this._undoModel.model(),
            r = this._undoModel.lineToolsGroupController();
          this._undoModel.beginUndoMacro(Js);
          const o = () => {
              e.forEach((e) => e.detachFromParent());
            },
            i = e.reduce((e, t) => t.addSourcesToArray(e), []);
          if ((0, js.isLineTool)(this._dataSource)) {
            const t = n
              .lineToolsGroupModel()
              .groupForLineTool(this._dataSource);
            null !== t
              ? ((0, E.assert)(!e.some((e) => e.hasChildren())),
                i.forEach((e) => {
                  (0, js.isLineTool)(e) &&
                    (t.containsLineTool(e) || r.addLineToolToGroup(t, e));
                }))
              : o();
          } else o();
          t(i), this._undoModel.endUndoMacro();
        }
      }
      class oa {
        constructor(e, t) {
          (this._onTitleChanged = new (ks())()),
            (this._onVisibilityChanged = new (ks())()),
            (this._onLockChanged = new (ks())()),
            (this._onIsActualIntervalChanged = new (ks())()),
            (this._syncStateChanged = new (ks())()),
            (this._linkKeyChangedBound = this._linkKeyChanged.bind(this)),
            (this._lineToolsAffectChartInvalidation =
              new Ks.FeatureToggleWatchedValue(
                'do_not_invalidate_chart_on_changing_line_tools',
                !1,
              )),
            (this._undoModel = e),
            (this._group = t),
            (this._lineTools = t.lineTools()),
            (this._paneId = (0, E.ensureNotNull)(
              e.model().paneForSource(this._lineTools[0]),
            ).id());
          const n = () => {
            this._lineTools.forEach((e) => {
              e
                .properties()
                .visible.listeners()
                .subscribe(this, () => this._onVisibilityChanged.fire()),
                e
                  .properties()
                  .frozen.listeners()
                  .subscribe(this, () => this._onLockChanged.fire()),
                e
                  .onIsActualIntervalChange()
                  .subscribe(this, () =>
                    this._onIsActualIntervalChanged.fire(),
                  ),
                e.linkKey().subscribe(this._linkKeyChangedBound);
            });
          };
          this._group.onChanged().subscribe(this, (e) => {
            this._unsubscribeFromAllLineTools(),
              (this._lineTools = this._group.lineTools()),
              n(),
              e.lockedChanged && this._onLockChanged.fire(),
              e.visibilityChanged && this._onVisibilityChanged.fire(),
              e.titleChanged && this._onTitleChanged.fire(),
              e.isActualIntervalChanged &&
                this._onIsActualIntervalChanged.fire();
            const t = this.getDrawingSyncState();
            null !== t && this._syncStateChanged.fire(t);
          }),
            n(),
            (this._lastActualZOrder = this.zOrder()),
            (this._lastIsVisible = this.isVisible()),
            (this._lastIsActualInterval = this.isActualInterval()),
            (this._lastIsLocked = this.isLocked());
        }
        destroy() {
          this._unsubscribeFromAllLineTools(),
            this._group.onChanged().unsubscribeAll(this);
        }
        id() {
          return xs(this._group.id, this._group.instanceId());
        }
        title() {
          return this._group.name();
        }
        gaLabel() {
          return 'Group';
        }
        getIcon() {
          return { type: us.Svg, content: Ws };
        }
        canBeRemoved() {
          return !0;
        }
        canBeHidden() {
          return !0;
        }
        canBeLocked() {
          return !0;
        }
        canBeRenamed() {
          return !0;
        }
        fullyConstructed() {
          return !0;
        }
        isVisible() {
          return (
            this._group.lineTools().length > 0 &&
              (this._lastIsVisible = 'Invisible' !== this._group.visibility()),
            this._lastIsVisible
          );
        }
        isActualInterval() {
          return (
            this._group.lineTools().length > 0 &&
              (this._lastIsActualInterval = this._group
                .lineTools()
                .some((e) => e.isActualInterval())),
            this._lastIsActualInterval
          );
        }
        onIsActualIntervalChange() {
          return this._onIsActualIntervalChanged;
        }
        isLocked() {
          return (
            this._group.lineTools().length > 0 &&
              (this._lastIsLocked = 'Locked' === this._group.locked()),
            this._lastIsLocked
          );
        }
        onTitleChanged() {
          return this._onTitleChanged;
        }
        onVisibilityChanged() {
          return this._onVisibilityChanged;
        }
        onLockChanged() {
          return this._onLockChanged;
        }
        setVisible(e) {
          this._undoModel
            .lineToolsGroupController()
            .setGroupVisibility(this._group, e);
        }
        setLocked(e) {
          this._undoModel
            .lineToolsGroupController()
            .setGroupLock(this._group, e);
        }
        setName(e) {
          this._undoModel
            .lineToolsGroupController()
            .setGroupName(this._group, e);
        }
        isCopiable() {
          return !1;
        }
        isClonable() {
          return !1;
        }
        zOrder() {
          return (
            this._group.lineTools().length > 0 &&
              (this._lastActualZOrder = this._group.lineTools()[0].zorder()),
            this._lastActualZOrder
          );
        }
        remove() {
          this._undoModel.lineToolsGroupController().removeGroup(this._group);
        }
        canBeAddedToSelection() {
          const e = this._undoModel.model();
          return this._lineTools.every((t) =>
            e.selection().canBeAddedToSelection(t),
          );
        }
        setAsSelection() {
          this._undoModel.model().selectionMacro((e) => {
            e.clearSelection(),
              this._lineTools.forEach((t) => e.addSourceToSelection(t));
          });
        }
        addToSelection() {
          this._undoModel.model().selectionMacro((e) => {
            this._lineTools.forEach((t) => e.addSourceToSelection(t));
          });
        }
        addSourcesToArray(e) {
          return e.push(...this._lineTools), e;
        }
        detachFromParent() {}
        insertSourcesBeforeThis(e) {
          const t = this._insertBeforeTarget();
          this._insertSources(e, (e) => this._undoModel.insertBefore(e, t));
        }
        insertSourcesAfterThis(e) {
          const t = this._insertAfterTarget();
          this._insertSources(e, (e) => this._undoModel.insertAfter(e, t));
        }
        childrenIds() {
          const e = [...this._lineTools];
          return (
            e.sort((e, t) => t.zorder() - e.zorder()),
            new Set(e.map((e) => xs(e.id(), e.instanceId())))
          );
        }
        hasChildren() {
          return !0;
        }
        pane() {
          return (0, E.ensureDefined)(
            this._undoModel
              .model()
              .panes()
              .find((e) => e.id() === this._paneId),
          );
        }
        allowsMovingbetweenPanes() {
          return !1;
        }
        canBeAddedToGroup() {
          return !1;
        }
        canInsertBeforeThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
        canInsertAfterThis(e) {
          return this._canInsertBeforeOrAfter(e);
        }
        canBeSyncedInLayout() {
          return (
            this._lineTools.length > 0 && this._lineTools[0].isSynchronizable()
          );
        }
        onSyncStateChanged() {
          return this._syncStateChanged;
        }
        setDrawingSyncState(e) {
          if (this.canBeSyncedInLayout())
            switch (e) {
              case 0:
                const e = this._lineTools.filter(
                  (e) => null !== e.linkKey().value(),
                );
                e.length > 0 && this._undoModel.unlinkLines(e);
                break;
              case 1:
                const t = this._lineTools.filter(
                  (e) => null === e.linkKey().value(),
                );
                t.length > 0 && this._undoModel.copyToOtherCharts(t);
            }
        }
        getDrawingSyncState() {
          return this.canBeSyncedInLayout()
            ? this._lineTools.every((e) => null !== e.linkKey().value())
              ? 1
              : 0
            : null;
        }
        doNotAffectChartInvalidation() {
          return this._lineToolsAffectChartInvalidation.value();
        }
        _linkKeyChanged() {
          this._syncStateChanged.fire(
            (0, E.ensureNotNull)(this.getDrawingSyncState()),
          );
        }
        _canInsertBeforeOrAfter(e) {
          return Qs(this.pane(), e);
        }
        _insertSources(e, t) {
          this._undoModel.beginUndoMacro(Js);
          const n = e.reduce((e, t) => t.addSourcesToArray(e), []);
          e.forEach((e) => e.detachFromParent()),
            t(n),
            this._undoModel.endUndoMacro();
        }
        _insertBeforeTarget() {
          return (0, E.ensureNotNull)(
            this._lineTools.reduce(
              (e, t) => (null === e ? t : e.zorder() < t.zorder() ? e : t),
              null,
            ),
          );
        }
        _insertAfterTarget() {
          return (0, E.ensureNotNull)(
            this._lineTools.reduce(
              (e, t) => (null === e ? t : e.zorder() > t.zorder() ? e : t),
              null,
            ),
          );
        }
        _unsubscribeFromAllLineTools() {
          this._lineTools.forEach((e) => {
            e.properties().visible.listeners().unsubscribeAll(this),
              e.properties().frozen.listeners().unsubscribeAll(this),
              e.onIsActualIntervalChange().unsubscribeAll(this),
              e.linkKey().unsubscribe(this._linkKeyChangedBound);
          });
        }
      }
      class ia {
        constructor(e) {
          (this._hoveredObjectChanged = new (ks())()),
            (this._entitiesCache = new Map()),
            (this._undoModel = e),
            this._undoModel
              .model()
              .hoveredSourceChanged()
              .subscribe(this, this._onModelHoveredSourceChanged);
        }
        destroy() {
          for (const e of this._entitiesCache.values())
            null == e || e.destroy();
        }
        getObjectById(e) {
          if (this._entitiesCache.has(e))
            return (0, E.ensureDefined)(this._entitiesCache.get(e));
          const t = this._createObjectById(e);
          return this._entitiesCache.set(e, t), t;
        }
        invalidateCache(e) {
          Array.from(this._entitiesCache.keys()).forEach((t) => {
            var n;
            e.has(t) ||
              (null === (n = this._entitiesCache.get(t)) ||
                void 0 === n ||
                n.destroy(),
              this._entitiesCache.delete(t));
          });
        }
        canBeGroupped(e) {
          if (0 === e.length || (1 === e.length && e[0].hasChildren()))
            return !1;
          const t = [];
          if (
            (e.forEach((e) => e.addSourcesToArray(t)),
            t.some((e) => !(0, js.isLineTool)(e)))
          )
            return !1;
          const n = this._undoModel.model(),
            r = t.map((e) => n.paneForSource(e));
          return new Set(r).size < 2;
        }
        contextMenuActions(e, t, n) {
          const r = new zs.ActionsProvider(e, n),
            o = [];
          return (
            t.forEach((e) => e.addSourcesToArray(o)),
            r.contextMenuActionsForSources(o)
          );
        }
        insertBefore(e, t) {
          t.insertSourcesAfterThis(e);
        }
        insertAfter(e, t) {
          t.insertSourcesBeforeThis(e);
        }
        setHoveredObject(e) {
          const t = this._undoModel.model();
          if (null === e) return void t.setHoveredSource(null, null);
          const n = t.dataSourceForId(e);
          null !== n && t.setHoveredSource(n, null);
        }
        hoveredObjectId() {
          return ea(this._undoModel.model().hoveredSource());
        }
        hoveredObjectChanged() {
          return this._hoveredObjectChanged;
        }
        _onModelHoveredSourceChanged(e) {
          this._hoveredObjectChanged.fire(ea(e));
        }
        _createObjectById(e) {
          const t = Ns(e).persistentId,
            n = this._undoModel.model(),
            r = n.dataSourceForId(t);
          if (null !== r) return new ra(this._undoModel, r);
          const o = n.lineToolsGroupModel().groupForId(t);
          return null !== o ? new oa(this._undoModel, o) : null;
        }
      }
      var sa = n(50044),
        aa = n(6799),
        ca = n(46374),
        la = n(32856),
        ua = n.n(la),
        da = n(65511),
        ha = n(26971),
        fa = n(62781),
        pa = n(89295),
        ga = n(4917),
        va = n(23353);
      const ya = (0, c.getLogger)('Platform.GUI.ObjectTree');
      const ma = new Rs.TranslatedString(
          'move objects',
          (0, m.t)('move objects'),
        ),
        ba = new Rs.TranslatedString('lock objects', (0, m.t)('lock objects')),
        Sa = new Rs.TranslatedString(
          'unlock objects',
          (0, m.t)('unlock objects'),
        ),
        wa = new Rs.TranslatedString('show objects', (0, m.t)('show objects')),
        Ta = new Rs.TranslatedString('hide objects', (0, m.t)('hide objects')),
        _a = new Rs.TranslatedString(
          'remove objects',
          (0, m.t)('remove objects'),
        ),
        Ca = (0, m.t)('Create a group of drawings'),
        Oa = (0, m.t)('Rename'),
        Ea = (0, m.t)('Unlock'),
        Ia = (0, m.t)('Lock'),
        Da = (0, m.t)('Hide'),
        ka = (0, m.t)('Show'),
        Ma = (0, m.t)('Remove');
      class xa {
        constructor(e) {
          (this._nodes = {}),
            (this._onChange = new (ks())()),
            (this._onGroupCreated = new (ks())()),
            (this._subscriptions = []),
            (this._removeSourcesPromise = null),
            (this._timeout = null),
            (this._objects = []),
            (this._options = {
              general: !0,
              mainSeries: !0,
              mainSeriesTrade: !0,
              esdStudies: !0,
              fundamentals: !0,
              studies: !0,
              lineTools: !0,
              publishedCharts: !0,
              ordersAndPositions: !0,
              alerts: !1,
              chartEvents: !0,
              objectTree: !1,
              gotoLineTool: !0,
            }),
            (this._isContextMenuOpened = new (ua())(!1)),
            (this._getObjectsToModify = (e) => {
              const t = this.selection().selected();
              return t.find((t) => t === e)
                ? t.map(this._ensuredEntity)
                : [this._ensuredEntity(e)];
            }),
            (this._onActiveChartChanged = () => {
              this._cleanup(), this._init();
            }),
            (this._cleanup = () => {
              null !== this._timeout &&
                (clearTimeout(this._timeout), (this._timeout = null)),
                this._subscriptions.forEach((e) => {
                  e.unsubscribeAll(this);
                }),
                this._selection.destroy(),
                this._chart.unsubscribe(this._onActiveChartChanged),
                null !== this._removeSourcesPromise &&
                  this._removeSourcesPromise.cancel(),
                this._facade.destroy();
            }),
            (this._init = () => {
              (this._controller = this._chart.value().model()),
                (this._groupController =
                  this._controller.lineToolsGroupController()),
                (this._model = this._controller.model()),
                (this._groupModel = this._model.lineToolsGroupModel()),
                (this._facade = new ia(this._controller)),
                (this._subscriptions = [
                  this._model.mainSeries().onStyleChanged(),
                  this._model.mainSeries().dataEvents().symbolResolved(),
                  this._model.mainSeries().onIntervalChanged(),
                  this._model.panesCollectionChanged(),
                  this._model.dataSourceCollectionChanged(),
                  this._groupModel.onChanged(),
                ]),
                this._subscriptions.forEach((e) => {
                  e.subscribe(this, this._update);
                }),
                this._chart.subscribe(this._onActiveChartChanged),
                (this._selection = new Ps(this._model)),
                this._update();
            }),
            (this._update = () => {
              null === this._timeout &&
                (this._timeout = setTimeout(() => {
                  this._recalculateTree(),
                    this._onChange.fire(),
                    (this._timeout = null);
                }));
            }),
            (this._ensuredEntity = (e) =>
              (0, E.ensureNotNull)(this._getEntityById(e))),
            (this._chart = e),
            this._init();
        }
        destroy() {
          this._cleanup();
        }
        getState() {
          return {
            nodes: Object.values(this._nodes),
            selection: this._selection.selected(),
          };
        }
        getChartId() {
          return this._chart.value().id();
        }
        insertSelection(e, t) {
          const n = this._facade,
            r = this.selection().selected().map(this._ensuredEntity),
            [o, i] = this._normalizeTargetAndDropType(e, t);
          this._controller.withMacro(ma, () => {
            switch (i) {
              case 'before':
                n.insertBefore(r, o);
                break;
              case 'after':
                n.insertAfter(r, o);
            }
          }),
            this._update();
        }
        entity(e) {
          return this._facade.getObjectById(e);
        }
        isMain(e) {
          return Ns(e.id()).persistentId === this._controller.mainSeries().id();
        }
        selection() {
          return this._selection;
        }
        setIsLocked(e, t) {
          const n = this._getObjectsToModify(e),
            r = n.every((e) => e.doNotAffectChartInvalidation()),
            o = t ? ba : Sa;
          this._controller.withMacro(
            o,
            () => {
              for (const e of n) e.setLocked(t);
            },
            r,
          ),
            Xi('Lock', Zi(n));
        }
        setIsVisible(e, t) {
          const n = this._getObjectsToModify(e),
            r = n.every((e) => e.doNotAffectChartInvalidation()),
            o = t ? wa : Ta;
          this._controller.withMacro(
            o,
            () => {
              for (const e of n) e.setVisible(t);
            },
            r,
          ),
            Xi('Hide', Zi(n));
        }
        remove(e) {
          const t = () => {
              const e = n.every((e) => e.doNotAffectChartInvalidation());
              this._controller.withMacro(
                _a,
                () => {
                  for (const e of n) e.remove();
                },
                e,
              ),
                Xi('Delete', Zi(n)),
                this._update();
            },
            n = this._getObjectsToModify(e);
          t();
        }
        canSelectionBeGrouped() {
          const e = this._getSelectedEntities();
          return this._facade.canBeGroupped(e);
        }
        createGroupFromSelection() {
          const e = this._groupController.createGroupFromSelection();
          Xi('Create Group');
          const t = xs(e.id, e.instanceId());
          this.selection().set([this._ensuredEntity(t)]),
            this._onGroupCreated.fire(t),
            this._update();
        }
        isSelectionDropable(e, t) {
          const n = this.selection().selected().map(this._ensuredEntity),
            [r, o] = this._normalizeTargetAndDropType(e, t);
          switch (o) {
            case 'after':
              return r.canInsertAfterThis(n);
            case 'before':
              return r.canInsertBeforeThis(n);
          }
        }
        onChange() {
          return this._onChange;
        }
        onGroupCreated() {
          return this._onGroupCreated;
        }
        isSelectionCloneable() {
          const e = this._getSelectedEntities();
          return e.length > 0 && e.every((e) => e.isClonable());
        }
        isSelectionCopiable() {
          const e = this._getSelectedEntities();
          return e.length > 0 && e.every((e) => e.isCopiable());
        }
        openProperties(e) {
          const t = this._model.dataSourceForId(Ns(e.id()).persistentId);
          this.selection().set([e]),
            null !== t &&
              (this._controller.mainSeries() === t
                ? this._chart.value().showGeneralChartProperties()
                : ((0, js.isLineTool)(t) || (0, Bs.isStudy)(t)) &&
                  this._chart.value().showChartPropertiesForSource(t));
        }
        canSelectionBeUnmerged() {
          const e = this._getSelectedEntities();
          return (
            1 === e.length &&
            this.canNodeWithIdBeUnmerged(Ns(e[0].id()).persistentId)
          );
        }
        canNodeWithIdBeUnmerged(e) {
          const t = this._model.dataSourceForId(e);
          return (
            null !== t &&
            (0, sa.isPriceDataSource)(t) &&
            this._model.isUnmergeAvailableForSource(t)
          );
        }
        unmergeSelectionUp() {
          this._unmergeSelection(0);
        }
        unmergeSelectionDown() {
          this._unmergeSelection(1);
        }
        copySelection() {
          const e = this._getSelectedEntities(),
            t = e.map((e) =>
              (0, E.ensureNotNull)(
                this._model.dataSourceForId(Ns(e.id()).persistentId),
              ),
            );
          this._chart
            .value()
            .chartWidgetCollection()
            .clipboard.uiRequestCopy(t),
            Xi('Copy', Zi(e));
        }
        cloneSelection() {
          const e = this._getSelectedEntities(),
            t = e.map((e) =>
              (0, E.ensureNotNull)(
                this._model.dataSourceForId(Ns(e.id()).persistentId),
              ),
            );
          t.every(js.isLineTool) &&
            (this._controller.cloneLineTools([...t], !1), Xi('Clone', Zi(e)));
        }
        rename(e, t) {
          const n = this._getObjectsToModify(e.id());
          1 === n.length &&
            n.some((e) => e.canBeRenamed()) &&
            (t(), Xi('Rename', Zi(n)));
        }
        async openContextMenu(e, t, n) {
          var r;
          this._objects = this._getObjectsToModify(e.id());
          const o = this._facade.canBeGroupped(this._objects);
          let i;
          if (this._objects.some((e) => e.hasChildren()))
            i = this._getActionsForGroupItem(e, t, o);
          else {
            const e = await this._facade.contextMenuActions(
              this._chart.value(),
              this._objects,
              this._options,
            );
            if (
              ((i = Array.from(e).filter(
                (e, t, n) =>
                  'separator' !== e.type ||
                  !n[t + 1] ||
                  'separator' !== n[t + 1].type,
              )),
              1 === this._objects.length && this._objects[0].canBeRenamed())
            ) {
              const e = i.findIndex((e) => 'Copy' === e.id);
              i.splice(
                -1 === e ? i.length : e + 1,
                0,
                this._getRenameAction(t),
              );
            }
            if (o) {
              const e = i.findIndex((e) => 'Clone' === e.id);
              i.splice(-1 === e ? 0 : e, 0, this._getGroupAction());
            }
          }
          if (i.length > 0) {
            this._chart.value().updateActions();
            const t = Ns(e.id()).persistentId,
              o = this._model.dataSourceForId(t),
              s = o instanceof Hs.Series,
              a = 0 !== e.childrenIds().size;
            let c;
            (c = s
              ? {
                  menuName: 'ObjectTreeContextMenu',
                  detail: { type: 'series', id: o.instanceId() },
                }
              : (0, js.isLineTool)(o)
              ? {
                  menuName: 'ObjectTreeContextMenu',
                  detail: {
                    type: 'shape',
                    id:
                      null !== (r = null == o ? void 0 : o.id()) && void 0 !== r
                        ? r
                        : null,
                  },
                }
              : a
              ? {
                  menuName: 'ObjectTreeContextMenu',
                  detail: { type: 'groupOfShapes', id: t || null },
                }
              : {
                  menuName: 'ObjectTreeContextMenu',
                  detail: {
                    type: 'study',
                    id: (null == o ? void 0 : o.id()) || null,
                  },
                }),
              aa.ContextMenuManager.showMenu(
                i,
                n,
                { takeFocus: !0, returnFocus: !0 },
                c,
                () => {
                  this._isContextMenuOpened.setValue(!1);
                },
              ).then(() => {
                this._isContextMenuOpened.setValue(!0);
              });
          }
        }
        setHoveredObject(e) {
          this._facade.setHoveredObject(e);
        }
        hoveredObjectChanged() {
          return this._facade.hoveredObjectChanged();
        }
        getNextNodeIdAfterRemove(e) {
          var t;
          const { nodes: n } = this.getState(),
            r = Ns(e).persistentId,
            o = n.find((t) => t.id === e),
            i = this.entity(e);
          if (!(o && o.parentId && i && i.canBeRemoved())) return null;
          if (
            (null === (t = i.pane().mainDataSource()) || void 0 === t
              ? void 0
              : t.id()) === r &&
            !this.canNodeWithIdBeUnmerged(r)
          ) {
            const e = n.filter((e) => 0 === e.level).map((e) => e.id),
              t = this._takeNextOrPrevElement(e, o.parentId);
            return (0, E.ensureDefined)(n.find((e) => e.id === t)).children[0];
          }
          const s = (0, E.ensureDefined)(
            n.find((e) => e.id === o.parentId),
          ).children;
          return 1 === s.length
            ? this.getNextNodeIdAfterRemove(o.parentId)
            : this._takeNextOrPrevElement(s, e);
        }
        isContextMenuOpened() {
          return this._isContextMenuOpened.readonly();
        }
        getChartLayout() {
          return this._chart.value().chartWidgetCollection().layout;
        }
        _takeNextOrPrevElement(e, t) {
          const n = e.indexOf(t);
          return e[n === e.length - 1 ? n - 1 : n + 1];
        }
        _getGroupAction() {
          return new ca.Action({
            actionId: 'ObjectsTree.CreateGroup',
            label: Ca,
            icon: j,
            onExecute: () => {
              this.createGroupFromSelection();
            },
          });
        }
        _getRenameAction(e) {
          return new ca.Action({
            actionId: 'ObjectsTree.RenameItem',
            label: Oa,
            icon: ga,
            onExecute: () => {
              e(), Xi('Context menu rename', Zi(this._objects));
            },
          });
        }
        _getActionsForGroupItem(e, t, n) {
          const r = [];
          this._objects.forEach((e) => e.addSourcesToArray(r));
          const o = [];
          1 === this._objects.length &&
            o.unshift(this._getRenameAction(t), new ca.Separator()),
            n && o.unshift(this._getGroupAction(), new ca.Separator());
          const i = (0, zs.createSyncDrawingActions)(
            this._chart.value(),
            r.filter(js.isLineTool),
          );
          return (
            i.length && (i.shift(), i.push(new ca.Separator()), o.push(...i)),
            o.push(
              new ca.Action({
                actionId: 'ObjectsTree.ToggleItemLocked',
                label: e.isLocked() ? Ea : Ia,
                icon: e.isLocked() ? da : ha,
                onExecute: () => this.setIsLocked(e.id(), !e.isLocked()),
              }),
              new ca.Action({
                actionId: 'ObjectsTree.ToggleItemVisibility',
                label: e.isVisible() ? Da : ka,
                icon: e.isVisible() ? fa : pa,
                onExecute: () => this.setIsVisible(e.id(), !e.isVisible()),
              }),
              new ca.Action({
                actionId: 'ObjectsTree.RemoveItem',
                label: Ma,
                icon: va,
                onExecute: () => this.remove(e.id()),
                hotkeyHash: $o.isMacKeyboard ? 8 : 46,
              }),
              new ca.Separator(),
              this._chart.value().actions().format,
            ),
            o
          );
        }
        _unmergeSelection(e) {
          const t = this._getSelectedEntities();
          if (1 !== t.length)
            throw new Error('Only one object can be unmerged');
          const n = t[0],
            r = (0, E.ensureNotNull)(
              this._model.dataSourceForId(Ns(n.id()).persistentId),
            );
          if (!(0, sa.isPriceDataSource)(r))
            throw new Error('Entity is not IPriceDataSource');
          (0 === e
            ? this._controller.unmergeSourceUp
            : this._controller.unmergeSourceDown
          ).call(this._controller, r);
          Xi(0 === e ? 'New pane above' : 'New pane below', Zi([n]));
        }
        _recalculateTree() {
          const e = new As(this._controller, this._facade);
          this._nodes = e.buildTree();
        }
        _normalizeTargetAndDropType(e, t) {
          let n = this._ensuredEntity(e);
          return (
            'inside' === t &&
              ((t = 'before'),
              (n = (0, E.ensureNotNull)(
                this.entity([...n.childrenIds()].shift() || ''),
              ))),
            [n, t]
          );
        }
        _getSelectedEntities() {
          const { selected: e, removed: t } = this._selection.selected().reduce(
            (e, t) => {
              const n = this._getEntityById(t);
              return n ? (e.selected.push(n), e) : (e.removed.push(t), e);
            },
            { selected: [], removed: [] },
          );
          return (
            t.length &&
              ya.logWarn(
                'Detected dangling sources in selection. They will be ignored: ' +
                  JSON.stringify(t),
              ),
            e
          );
        }
        _getEntityById(e) {
          return this._facade.getObjectById(e);
        }
      }
      var Na = n(58738);
      class Pa extends Na.DialogRenderer {
        constructor() {
          super(),
            (this._handleClose = () => {
              i.unmountComponentAtNode(this._container),
                this._setVisibility(!1),
                null !== this._viewModel &&
                  (this._viewModel.destroy(), (this._viewModel = null));
            });
          const e = (0, Es.service)(Is.CHART_WIDGET_COLLECTION_SERVICE);
          (this._activeChartWidget = e.activeChartWidget.value()),
            (this._viewModel = new xa(e.activeChartWidget));
        }
        hide() {
          this._handleClose();
        }
        isVisible() {
          return this.visible().value();
        }
        show() {
          p().then(() => {
            null !== this._viewModel &&
              (i.render(
                o.createElement(Cs, {
                  onClose: this._handleClose,
                  viewModel: this._viewModel,
                  activeChartWidget: this._activeChartWidget,
                }),
                this._container,
              ),
              this._setVisibility(!0));
          });
        }
      }
    },
    77727: (e, t, n) => {
      'use strict';
      n.d(t, { useForceUpdate: () => o });
      var r = n(67294);
      const o = () => {
        const [, e] = (0, r.useReducer)((e, t) => e + 1, 0);
        return e;
      };
    },
    27278: (e, t, n) => {
      'use strict';
      n.d(t, { useWatchedValueReadonly: () => o });
      var r = n(67294);
      const o = (e, t = !1) => {
        const n = 'watchedValue' in e ? e.watchedValue : void 0,
          o = 'defaultValue' in e ? e.defaultValue : e.watchedValue.value(),
          [i, s] = (0, r.useState)(n ? n.value() : o);
        return (
          (t ? r.useLayoutEffect : r.useEffect)(() => {
            if (n) {
              s(n.value());
              const e = (e) => s(e);
              return n.subscribe(e), () => n.unsubscribe(e);
            }
            return () => {};
          }, [n]),
          i
        );
      };
    },
    25659: (e, t, n) => {
      'use strict';
      n.d(t, { Spinner: () => s });
      var r = n(67294),
        o = n(94184),
        i = n(98852);
      n(11739);
      function s(e) {
        const t = o(
          e.className,
          'tv-spinner',
          'tv-spinner--shown',
          'tv-spinner--size_' + i.spinnerSizeMap[e.size || i.DEFAULT_SIZE],
        );
        return r.createElement(
          'div',
          { className: t, style: e.style, role: 'progressbar' },
          r.createElement(
            'div',
            { className: 'tv-spinner__spinner-layer' },
            r.createElement('div', {
              className: 'tv-spinner__background tv-spinner__width_element',
            }),
            r.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
            }),
            r.createElement('div', {
              className:
                'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
            }),
          ),
        );
      }
    },
    75412: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120" width="120" height="120" fill="none"><g clip-path="url(#a00y35lj1)"><path fill="#2A2E39" d="M16.01 71.1c10.54 13.42 34.92 11.86 54.46-3.48s26.85-38.65 16.3-52.08C76.25 2.12 51.87 3.68 32.33 19.02c-9.2 7.22-15.68 16.2-18.87 25.09-.68 1.88-2.57 3.05-4.53 3.48a9.7 9.7 0 0 0-3.96 1.85C.5 52.94-.09 59.64 3.64 64.4a11.24 11.24 0 0 0 7.82 4.31 6.2 6.2 0 0 1 4.55 2.4z"/><path fill="#1848CC" d="M28.3 35.56c1.8 3.42 12.08 10.65 25.62 16.88 6.36 2.93 12.38 5.3 17.37 6.93a172.7 172.7 0 0 0-18-12.68c-14.59-9.1-24.97-12.4-24.97-12.4-.18.3-.19.72-.01 1.27z"/><path stroke="#B2B5BE" stroke-width="1.5" d="M86.25 71.4c-.19.28-.54.53-1.17.69-.63.15-1.48.19-2.56.08-2.14-.22-5-1-8.4-2.28-6.78-2.57-15.53-7.13-24.64-13.06-9.12-5.93-16.82-12.1-21.92-17.25-2.55-2.59-4.41-4.89-5.48-6.76a7.79 7.79 0 0 1-.96-2.37c-.12-.64-.03-1.06.16-1.35.2-.3.54-.55 1.17-.7a7.8 7.8 0 0 1 2.56-.08c2.14.22 5 1 8.4 2.28 6.78 2.57 15.53 7.12 24.65 13.06 9.1 5.93 16.81 12.1 21.9 17.25 2.56 2.58 4.43 4.89 5.5 6.76.53.94.84 1.73.95 2.37.12.64.03 1.06-.16 1.35z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M28.96 34.63c1.99.57 4.47 1.55 7.3 2.86l12.2 6.52a193.2 193.2 0 0 1 6.66 4.15c10.56 6.88 19.12 13.86 22.97 18.45"/><path stroke="#B2B5BE" stroke-width="1.5" d="M83.79 65.59c6.77-14.14 1.41-32-13.05-41.42-14.46-9.41-32.96-7.09-43.15 4.83M74.96 21.24a6.08 6.08 0 0 1-2.58 2.3c-.9.39-1.69.35-2.23 0-.54-.36-.9-1.05-.9-2.04a6.08 6.08 0 0 1 1.05-3.29 6.07 6.07 0 0 1 2.58-2.29c.9-.4 1.69-.35 2.23 0s.9 1.05.9 2.04c.01.98-.32 2.17-1.05 3.28z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M42.7 23.62c1.25-.3 4.56-1.3 8.92-1.3M80.14 84.07C76.5 84.03 64.4 84 50 84s-26.5.03-30.14.07M24.7 59.33l5.77 5.32M32.05 56.05l.84 3.28"/></g><defs><clipPath id="a00y35lj1"><path fill="#fff" d="M0 0h100v100H0V0z"/></clipPath></defs></svg>';
    },
    78944: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120" width="120" height="120" fill="none"><g clip-path="url(#avi4cgf11)"><path fill="#F0F3FA" d="M16.01 71.1c10.54 13.42 34.92 11.86 54.46-3.48s26.85-38.65 16.3-52.08C76.25 2.12 51.87 3.68 32.33 19.02c-9.2 7.22-15.68 16.2-18.87 25.09-.68 1.88-2.57 3.05-4.53 3.48a9.7 9.7 0 0 0-3.96 1.85C.5 52.94-.09 59.64 3.64 64.4a11.24 11.24 0 0 0 7.82 4.31 6.2 6.2 0 0 1 4.55 2.4z"/><path fill="url(#bvi4cgf11)" d="M28.3 35.56c1.8 3.42 12.08 10.65 25.62 16.88 6.36 2.93 12.38 5.3 17.37 6.93a172.7 172.7 0 0 0-18-12.68c-14.59-9.1-24.97-12.4-24.97-12.4-.18.3-.19.72-.01 1.27z"/><path stroke="#1E222D" stroke-width="1.5" d="M86.25 71.4c-.19.28-.54.53-1.17.69-.63.15-1.48.19-2.56.08-2.14-.22-5-1-8.4-2.28-6.78-2.57-15.53-7.13-24.64-13.06-9.12-5.93-16.82-12.1-21.92-17.25-2.55-2.59-4.41-4.89-5.48-6.76a7.79 7.79 0 0 1-.96-2.37c-.12-.64-.03-1.06.16-1.35.2-.3.54-.55 1.17-.7a7.8 7.8 0 0 1 2.56-.08c2.14.22 5 1 8.4 2.28 6.78 2.57 15.53 7.12 24.65 13.06 9.1 5.93 16.81 12.1 21.9 17.25 2.56 2.58 4.43 4.89 5.5 6.76.53.94.84 1.73.95 2.37.12.64.03 1.06-.16 1.35z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M28.96 34.63c1.99.57 4.47 1.55 7.3 2.86l12.2 6.52a193.2 193.2 0 0 1 6.66 4.15c10.56 6.88 19.12 13.86 22.97 18.45"/><path stroke="#1E222D" stroke-width="1.5" d="M83.79 65.59c6.77-14.14 1.41-32-13.05-41.42-14.46-9.41-32.96-7.09-43.15 4.83M74.96 21.24a6.08 6.08 0 0 1-2.58 2.3c-.9.39-1.69.35-2.23 0-.54-.36-.9-1.05-.9-2.04a6.08 6.08 0 0 1 1.05-3.29 6.07 6.07 0 0 1 2.58-2.29c.9-.4 1.69-.35 2.23 0s.9 1.05.9 2.04c.01.98-.32 2.17-1.05 3.28z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M42.7 23.62c1.25-.3 4.56-1.3 8.92-1.3M80.14 84.07C76.5 84.03 64.4 84 50 84s-26.5.03-30.14.07M24.7 59.33l5.77 5.32M32.05 56.05l.84 3.28"/></g><defs><linearGradient gradientUnits="userSpaceOnUse" x1="49.73" x2="49.73" y1="34.29" y2="59.37" id="bvi4cgf11"><stop stop-color="#2962FF"/><stop offset="1" stop-color="#2962FF"/></linearGradient><clipPath id="avi4cgf11"><path fill="#fff" d="M0 0h100v100H0V0z"/></clipPath></defs></svg>';
    },
    6577: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
    },
    4917: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>';
    },
    60096: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
    },
    61619: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 11.5v8a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-8m-17 0v-4a1 1 0 0 1 1-1h4l2 2h9a1 1 0 0 1 1 1v2m-17 0h17"/></svg>';
    },
    81973: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.5 6C4.67 6 4 6.67 4 7.5V20.5c0 .83.67 1.5 1.5 1.5H16v-1H5.5a.5.5 0 0 1-.5-.5V12h16v1h1V9.5c0-.83-.67-1.5-1.5-1.5h-8.8L9.86 6.15 9.71 6H5.5zM21 11H5V7.5c0-.28.22-.5.5-.5h3.8l1.85 1.85.14.15h9.21c.28 0 .5.22.5.5V11zm1 11v-3h3v-1h-3v-3h-1v3h-3v1h3v3h1z"/></svg>';
    },
    25700: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.448 10.124a10.82 10.82 0 0 1-.336-.609L2.105 9.5l.007-.015a12.159 12.159 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373c2.297 0 4.047 1.292 5.25 2.646a12.166 12.166 0 0 1 1.687 2.466l.007.015-.007.015a12.163 12.163 0 0 1-1.686 2.466c-1.204 1.354-2.954 2.646-5.251 2.646-2.298 0-4.048-1.292-5.252-2.646a12.16 12.16 0 0 1-1.35-1.857zm14.558-.827l-.456.203.456.203v.002l-.003.005-.006.015-.025.052a11.813 11.813 0 0 1-.461.857 13.163 13.163 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982-2.703 0-4.703-1.522-6-2.982a13.162 13.162 0 0 1-1.83-2.677 7.883 7.883 0 0 1-.118-.243l-.007-.015-.002-.005v-.001l.456-.204-.456-.203v-.002l.002-.005.007-.015a4.66 4.66 0 0 1 .119-.243 13.158 13.158 0 0 1 1.83-2.677c1.296-1.46 3.296-2.982 5.999-2.982 2.702 0 4.702 1.522 5.998 2.981a13.158 13.158 0 0 1 1.83 2.678 8.097 8.097 0 0 1 .119.243l.006.015.003.005v.001zm-.456.203l.456-.203.09.203-.09.203-.456-.203zM1.092 9.297l.457.203-.457.203-.09-.203.09-.203zm9.958.203c0 1.164-.917 2.07-2 2.07-1.084 0-2-.906-2-2.07 0-1.164.916-2.07 2-2.07 1.083 0 2 .906 2 2.07zm1 0c0 1.695-1.344 3.07-3 3.07-1.657 0-3-1.375-3-3.07 0-1.695 1.343-3.07 3-3.07 1.656 0 3 1.375 3 3.07z"/></svg>';
    },
    23707: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5a2.5 2.5 0 0 1 5 0V7H7V5.5zM6 7V5.5a3.5 3.5 0 1 1 7 0V7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm8 2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9zm-3 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
    },
    79805: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M21.106 12.5H6.894a.5.5 0 0 1-.318-.886L14 5.5l7.424 6.114a.5.5 0 0 1-.318.886zM21.106 16.5H6.894a.5.5 0 0 0-.318.886L14 23.5l7.424-6.114a.5.5 0 0 0-.318-.886z"/></svg>';
    },
    89295: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.605 14.089A10.052 10.052 0 0 1 4.56 14l.046-.089a17.18 17.18 0 0 1 2.329-3.327C8.58 8.758 10.954 7 14 7c3.046 0 5.421 1.757 7.066 3.585A17.18 17.18 0 0 1 23.44 14l-.046.089a17.18 17.18 0 0 1-2.329 3.327C19.42 19.242 17.046 21 14 21c-3.046 0-5.421-1.757-7.066-3.584a17.18 17.18 0 0 1-2.329-3.327zm19.848-.3L24 14l.453.212-.001.002-.003.005-.009.02a16.32 16.32 0 0 1-.662 1.195c-.44.72-1.1 1.684-1.969 2.65C20.08 20.008 17.454 22 14 22c-3.454 0-6.079-1.993-7.81-3.916a18.185 18.185 0 0 1-2.469-3.528 10.636 10.636 0 0 1-.161-.318l-.01-.019-.002-.005v-.002L4 14a55.06 55.06 0 0 1-.453-.212l.001-.002.003-.005.009-.02.033-.067a16.293 16.293 0 0 1 .629-1.126c.44-.723 1.1-1.686 1.969-2.652C7.92 7.993 10.546 6 14 6c3.454 0 6.079 1.993 7.81 3.916a18.183 18.183 0 0 1 2.469 3.528 10.588 10.588 0 0 1 .161.318l.01.019.002.005v.002zM24 14l.453-.211.099.211-.099.211L24 14zm-20.453-.211L4 14l-.453.211L3.448 14l.099-.211zM11 14a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>';
    },
    82462: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M4.5 12.5l4.59-4.59a2 2 0 0 1 2.83 0l3.17 3.17a2 2 0 0 0 2.83 0L22.5 6.5m-8 9.5v5.5M12 19l2.5 2.5L17 19m4.5 3v-5.5M19 19l2.5-2.5L24 19"/></svg>';
    },
    33434: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l4.586-4.586a2 2 0 0 1 2.828 0l3.172 3.172a2 2 0 0 0 2.828 0L23.5 10.5"/></svg>';
    },
    56350: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4A2.5 2.5 0 0 0 7 5.5V7h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2V5.5a3.5 3.5 0 0 1 6.231-2.19c-.231.19-.73.69-.73.69zM13 8H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-2 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
    },
    95716: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.692 3.012l-12 12.277.715.699 12-12.277-.715-.699zM9.05 15.627a7.042 7.042 0 0 1-3.144-.741l.742-.76c.72.311 1.52.5 2.402.5 2.297 0 4.047-1.29 5.25-2.645a12.168 12.168 0 0 0 1.687-2.466l.007-.015-.007-.015A12.166 12.166 0 0 0 14.3 7.019c-.11-.124-.225-.247-.344-.37l.699-.715c.137.14.268.28.392.42a13.16 13.16 0 0 1 1.83 2.678 8.117 8.117 0 0 1 .119.243l.006.015.003.005v.001l-.456.204.456.203v.002l-.003.005-.006.015-.025.052a11.762 11.762 0 0 1-.461.857 13.158 13.158 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982zm7.5-6.127l.456-.203.09.203-.09.203-.456-.203zm-7.5 3.07c-.27 0-.53-.037-.778-.105l.879-.899c.999-.052 1.833-.872 1.895-1.938l.902-.923c.066.253.102.52.102.795 0 1.695-1.344 3.07-3 3.07zM6.15 10.294l.902-.923c.063-1.066.896-1.886 1.895-1.938l.879-.9a2.94 2.94 0 0 0-.777-.103c-1.657 0-3 1.374-3 3.069 0 .275.035.541.101.795zM9.05 4.373c.88 0 1.68.19 2.4.5l.743-.759a7.043 7.043 0 0 0-3.143-.74c-2.703 0-4.703 1.521-6 2.98a13.159 13.159 0 0 0-1.83 2.678 7.886 7.886 0 0 0-.118.243l-.007.015-.002.005v.001l.456.204-.457-.203-.09.203.09.203.457-.203-.456.203v.002l.002.005.007.015a4.5 4.5 0 0 0 .119.243 13.152 13.152 0 0 0 1.83 2.677c.124.14.255.28.392.42l.7-.715c-.12-.122-.235-.245-.345-.369a12.156 12.156 0 0 1-1.686-2.466L2.105 9.5l.007-.015a12.158 12.158 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373z"/></svg>';
    },
  },
]);
