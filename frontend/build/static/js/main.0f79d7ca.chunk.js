(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        109: function (e, n, t) {
            e.exports = t(172);
        },
        114: function (e, n, t) {},
        137: function (e, n) {},
        139: function (e, n) {},
        172: function (e, n, t) {
            "use strict";
            t.r(n);
            var a = t(0),
                r = t.n(a),
                o = t(90),
                c = t.n(o),
                i = (t(114), t(12)),
                l = t(52),
                s = t(49),
                u = t(18),
                m = t(50),
                p = t(3),
                d = t(105),
                h = t(32),
                g = t(5),
                f = t(6),
                b = t(8),
                v = t(7),
                y = t(37),
                j = t(9),
                O = t(51),
                x = t(11),
                w = t(93),
                k = t.n(w);
            function E() {
                var e = Object(p.a)([
                    "\n  max-width: 100%;\n  transition: 0.125s;\n  &.home-logo{\n    width: 215px;\n    margin-top: 50px;\n  }\n  &.normal-logo{\n    width: 184px;\n    margin-top: 0;\n    padding: 33px 30px;\n    background-color: rgba(227, 224, 224,0.85);\n  }\n",
                ]);
                return (
                    (E = function () {
                        return e;
                    }),
                    e
                );
            }
            var C = function (e) {
                    var n = e.isHome;
                    return r.a.createElement(
                        u.b,
                        { to: "/", className: "no-underline black" },
                        r.a.createElement(N, {
                            src: k.a,
                            alt: "logo",
                            className: "".concat(
                                n ? "home-logo" : "normal-logo"
                            ),
                        })
                    );
                },
                N = x.a.img(E()),
                S = t(13),
                P = t.n(S),
                q = t(15),
                Q = t(16),
                H = t.n(Q);
            function A() {
                var e = Object(p.a)([
                    "\n  query MenuQuery {\n    headerMenu {\n      url\n      label\n      type\n    }\n  }\n",
                ]);
                return (
                    (A = function () {
                        return e;
                    }),
                    e
                );
            }
            var M = H()(A()),
                T = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = { menus: [] }),
                            (t.executeMenu = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props.client),
                                                        (e.next = 3),
                                                        n.query({ query: M })
                                                    );
                                                case 3:
                                                    (a = e.sent),
                                                        (r = a.data.headerMenu),
                                                        t.setState({
                                                            menus: r,
                                                        });
                                                case 6:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.executeMenu();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e,
                                        n = this.props.className,
                                        t = this.state.menus;
                                    return (
                                        "/" === this.props.pathname && (e = !0),
                                        r.a.createElement(
                                            "nav",
                                            { className: "menuBox ".concat(n) },
                                            t.map(function (n) {
                                                return n.type.includes(
                                                    "internal"
                                                )
                                                    ? r.a.createElement(
                                                          u.b,
                                                          {
                                                              key: n.label,
                                                              to: n.url,
                                                              className: "ml1 no-underline black ".concat(
                                                                  e
                                                                      ? "active"
                                                                      : ""
                                                              ),
                                                          },
                                                          n.label
                                                      )
                                                    : r.a.createElement(
                                                          "a",
                                                          {
                                                              key: n.label,
                                                              href: n.url,
                                                              className:
                                                                  "ml1 no-underline black",
                                                          },
                                                          n.label
                                                      );
                                            })
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                B = Object(O.a)(i.b)(T);
            function D() {
                var e = Object(p.a)([
                    "\n    .border-wipe{\n        transition: 0.25s;\n    }\n    .icon-path{\n        transition: 0.25s;\n    }    \n    &:hover{\n        .border-wipe{\n            stroke-width: 100px;\n        }\n        .icon-path{\n            fill: white;\n        }\n    }\n",
                ]);
                return (
                    (D = function () {
                        return e;
                    }),
                    e
                );
            }
            var I = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        n = e.link,
                                        t = e.icon;
                                    return r.a.createElement(
                                        "a",
                                        {
                                            href: n,
                                            className: "social-link",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                        },
                                        r.a.createElement(
                                            _,
                                            {
                                                className: "social-icon",
                                                width: "40",
                                                height: "40",
                                                viewBox: "0 0 40 40",
                                                fill: "none",
                                                xmlns:
                                                    "http://www.w3.org/2000/svg",
                                            },
                                            r.a.createElement(z, null),
                                            r.a.createElement(U, null),
                                            r.a.createElement(L, { icon: $[t] })
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                L = function (e) {
                    var n = e.icon;
                    return r.a.createElement("path", {
                        className: "icon-path",
                        d: n,
                        fill: "black",
                    });
                },
                z = function () {
                    return r.a.createElement("rect", {
                        className: "rect",
                        opacity: "0.2",
                        x: "0.5",
                        y: "0.5",
                        width: "39",
                        height: "39",
                        stroke: "black",
                    });
                },
                U = function () {
                    return r.a.createElement("path", {
                        className: "border-wipe",
                        d: "M1 39L39 39",
                        stroke: "black",
                        strokeWidth: "2",
                    });
                },
                _ = x.a.svg(D()),
                $ = {
                    facebook:
                        "M24.1484 20.75H21.2188V29.5H17.3125V20.75H14.1484V17.1172H17.3125V14.3828C17.3125 13.3411 17.5078 12.4557 17.8984 11.7266C18.2891 10.9974 18.8359 10.4505 19.5391 10.0859C20.2682 9.69531 21.1016 9.5 22.0391 9.5C22.4557 9.5 22.8984 9.52604 23.3672 9.57812C23.8359 9.60417 24.2005 9.64323 24.4609 9.69531L24.8516 9.73438V12.8203H23.2891C22.5599 12.8203 22.026 13.0156 21.6875 13.4062C21.375 13.7708 21.2188 14.2266 21.2188 14.7734V17.1172H24.6953L24.1484 20.75Z",
                    instagram:
                        "M16.8359 16.3359C17.7214 15.4505 18.7891 15.0078 20.0391 15.0078C21.2891 15.0078 22.3438 15.4505 23.2031 16.3359C24.0885 17.1953 24.5312 18.25 24.5312 19.5C24.5312 20.75 24.0885 21.8177 23.2031 22.7031C22.3438 23.5625 21.2891 23.9922 20.0391 23.9922C18.7891 23.9922 17.7214 23.5625 16.8359 22.7031C15.9766 21.8177 15.5469 20.75 15.5469 19.5C15.5469 18.25 15.9766 17.1953 16.8359 16.3359ZM17.9688 21.5703C18.5417 22.1432 19.2318 22.4297 20.0391 22.4297C20.8464 22.4297 21.5365 22.1432 22.1094 21.5703C22.6823 20.9974 22.9688 20.3073 22.9688 19.5C22.9688 18.6927 22.6823 18.0026 22.1094 17.4297C21.5365 16.8568 20.8464 16.5703 20.0391 16.5703C19.2318 16.5703 18.5417 16.8568 17.9688 17.4297C17.3958 18.0026 17.1094 18.6927 17.1094 19.5C17.1094 20.3073 17.3958 20.9974 17.9688 21.5703ZM25.4297 14.1094C25.638 14.2917 25.7422 14.526 25.7422 14.8125C25.7422 15.099 25.638 15.3464 25.4297 15.5547C25.2474 15.763 25.013 15.8672 24.7266 15.8672C24.4401 15.8672 24.1927 15.763 23.9844 15.5547C23.776 15.3464 23.6719 15.099 23.6719 14.8125C23.6719 14.526 23.776 14.2917 23.9844 14.1094C24.1927 13.901 24.4401 13.7969 24.7266 13.7969C25.013 13.7969 25.2474 13.901 25.4297 14.1094ZM28.75 15.9062C28.776 16.6094 28.7891 17.8073 28.7891 19.5C28.7891 21.1927 28.776 22.3906 28.75 23.0938C28.6719 24.6823 28.1901 25.9193 27.3047 26.8047C26.4453 27.6641 25.2214 28.1198 23.6328 28.1719C22.9297 28.224 21.7318 28.25 20.0391 28.25C18.3464 28.25 17.1484 28.224 16.4453 28.1719C14.8568 28.0938 13.6328 27.625 12.7734 26.7656C12.4349 26.4531 12.1615 26.0885 11.9531 25.6719C11.7448 25.2552 11.5885 24.8516 11.4844 24.4609C11.4062 24.0703 11.3672 23.6146 11.3672 23.0938C11.3151 22.3906 11.2891 21.1927 11.2891 19.5C11.2891 17.8073 11.3151 16.5964 11.3672 15.8672C11.4453 14.3047 11.9141 13.0938 12.7734 12.2344C13.6328 11.349 14.8568 10.8672 16.4453 10.7891C17.1484 10.763 18.3464 10.75 20.0391 10.75C21.7318 10.75 22.9297 10.763 23.6328 10.7891C25.2214 10.8672 26.4453 11.349 27.3047 12.2344C28.1901 13.0938 28.6719 14.3177 28.75 15.9062ZM26.875 24.6562C26.9531 24.4479 27.0182 24.1875 27.0703 23.875C27.1224 23.5365 27.1615 23.1458 27.1875 22.7031C27.2135 22.2344 27.2266 21.8568 27.2266 21.5703C27.2266 21.2839 27.2266 20.8802 27.2266 20.3594C27.2266 19.8385 27.2266 19.5521 27.2266 19.5C27.2266 19.4219 27.2266 19.1354 27.2266 18.6406C27.2266 18.1198 27.2266 17.7161 27.2266 17.4297C27.2266 17.1432 27.2135 16.7786 27.1875 16.3359C27.1615 15.8672 27.1224 15.4766 27.0703 15.1641C27.0182 14.8255 26.9531 14.5521 26.875 14.3438C26.5625 13.5365 26.0026 12.9766 25.1953 12.6641C24.987 12.5859 24.7135 12.5208 24.375 12.4688C24.0625 12.4167 23.6719 12.3776 23.2031 12.3516C22.7604 12.3255 22.3958 12.3125 22.1094 12.3125C21.849 12.3125 21.4453 12.3125 20.8984 12.3125C20.3776 12.3125 20.0911 12.3125 20.0391 12.3125C19.987 12.3125 19.7005 12.3125 19.1797 12.3125C18.6589 12.3125 18.2552 12.3125 17.9688 12.3125C17.6823 12.3125 17.3047 12.3255 16.8359 12.3516C16.3932 12.3776 16.0026 12.4167 15.6641 12.4688C15.3516 12.5208 15.0911 12.5859 14.8828 12.6641C14.0755 12.9766 13.5156 13.5365 13.2031 14.3438C13.125 14.5521 13.0599 14.8255 13.0078 15.1641C12.9557 15.4766 12.9167 15.8672 12.8906 16.3359C12.8646 16.7786 12.8516 17.1432 12.8516 17.4297C12.8516 17.6901 12.8516 18.0938 12.8516 18.6406C12.8516 19.1615 12.8516 19.4479 12.8516 19.5C12.8516 19.6042 12.8516 19.8516 12.8516 20.2422C12.8516 20.6068 12.8516 20.9193 12.8516 21.1797C12.8516 21.4141 12.8516 21.7266 12.8516 22.1172C12.8776 22.5078 12.9036 22.8464 12.9297 23.1328C12.9557 23.3932 12.9948 23.6667 13.0469 23.9531C13.099 24.2396 13.151 24.474 13.2031 24.6562C13.5417 25.4635 14.1016 26.0234 14.8828 26.3359C15.0911 26.4141 15.3516 26.4792 15.6641 26.5312C16.0026 26.5833 16.3932 26.6224 16.8359 26.6484C17.3047 26.6745 17.6693 26.6875 17.9297 26.6875C18.2161 26.6875 18.6198 26.6875 19.1406 26.6875C19.6875 26.6875 19.987 26.6875 20.0391 26.6875C20.1172 26.6875 20.4036 26.6875 20.8984 26.6875C21.4193 26.6875 21.8229 26.6875 22.1094 26.6875C22.3958 26.6875 22.7604 26.6745 23.2031 26.6484C23.6719 26.6224 24.0625 26.5833 24.375 26.5312C24.7135 26.4792 24.987 26.4141 25.1953 26.3359C26.0026 25.9974 26.5625 25.4375 26.875 24.6562Z",
                    houzz:
                        "M21.0312 22.4297H16.9297V28.25H10.9141V10.75H15.1719V14.8125L27.125 18.1719V28.25H21.0312V22.4297Z",
                };
            function V() {
                var e = Object(p.a)([
                    "\n    .social-link{\n        margin: 0 7px;\n        .social-icon{\n            svg{\n                g.social-svg-mask{\n                    fill: rgb(17, 46, 58) !important;\n                }\n            }\n        }\n        &:first-of-type{\n            margin-left:0;\n        }\n    }\n",
                ]);
                return (
                    (V = function () {
                        return e;
                    }),
                    e
                );
            }
            var Z = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    return r.a.createElement(
                                        F,
                                        { className: "social-nav" },
                                        r.a.createElement(I, {
                                            icon: "facebook",
                                            link:
                                                "https://www.facebook.com/DeGrawDeHaan",
                                        }),
                                        r.a.createElement(I, {
                                            icon: "instagram",
                                            link:
                                                "https://www.instagram.com/degrawanddehaan/",
                                        }),
                                        r.a.createElement(I, {
                                            icon: "houzz",
                                            link:
                                                "https://www.houzz.com/professionals/architects-and-building-designers/degraw-and-dehaan-architects-pfvwus-pf~1325422072?",
                                        })
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                F = x.a.nav(V());
            function K() {
                var e = Object(p.a)([
                    "\n    .menuBox{\n        a{\n            &:after{\n                content: ' -'\n            }\n        }\n    }\n",
                ]);
                return (
                    (K = function () {
                        return e;
                    }),
                    e
                );
            }
            var J = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    return r.a.createElement(
                                        R,
                                        null,
                                        r.a.createElement(B, {
                                            className: "menuBox",
                                        }),
                                        r.a.createElement("br", null),
                                        r.a.createElement(Z, null)
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                R = x.a.div(K());
            function G() {
                var e = Object(p.a)([
                    "\n    opacity: 0;\n    justify-self: end;\n    align-self: center;\n    position: relative;\n    z-index: 10;\n    width: 46px;\n    height: 28px;\n    margin-left: auto;\n    padding: 0;\n    margin-right: 20px;\n    border: none;\n    overflow: hidden;\n    background: transparent;\n    cursor: pointer;\n    .bread-ham-cheese {\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        border-top: 2px solid black;\n        transition: border 0s ",
                    "s, width 0.5s;\n        &:before, &:after {\n            content: '';\n            position: absolute;\n            height: 1px;\n            border-top: 2px solid black;\n            right: 0;\n            bottom: 2px;\n            margin: auto;\n            transition: 0.5s;\n        }\n        &:before{\n            width: 45%;\n            top: 0px;\n        }\n        &:after{\n            width: 75%;\n        }\n    }\n    &.hovering{\n        .bread-ham-cheese{\n            width: 90%;\n            &:before{\n                width: 65%;\n            }\n            &:after{\n                width:  85%;\n            }\n        }\n    }\n    &.cancelBurger{\n        animation: ",
                    "s hideCancel forwards;\n        .bread-ham-cheese{\n            &:before{\n                animation: ",
                    "s reverseBackSlash forwards;\n            }\n            &:after{\n                animation: ",
                    "s reverseForwardSlash forwards;\n            }\n        }\n    }\n\n    &.activeBurger{\n        animation: ",
                    "s showCancel forwards;\n        .bread-ham-cheese{\n            border-top: 0 solid black;\n            transition: border 0s ",
                    "s;\n            &:before{\n                animation: ",
                    "s rotateBackSlash forwards;\n            }\n            &:after{\n                animation: ",
                    "s rotateForwardSlash forwards;\n            }\n        }\n    }\n\n    @keyframes showCancel {\n        0%{\n            width: 46px;\n        }\n        30%{\n            width: 0;\n            opacity: 1;\n            transform: rotateZ(0);\n        }\n        31%{\n            width: 46px; \n            opacity: 0;\n            transform: rotateY(60deg) rotateX(-60deg);\n        }\n        100%{\n            opacity: 1;\n            transform: rotateY(0deg) rotateX(0deg);\n        }\n    }\n\n    @keyframes hideCancel {\n        0%{\n            width: 46px;\n            opacity: 1;\n        }\n        50%{\n            width: 46px;\n            opacity: 0;\n        }\n        51%{\n            width: 0;   \n            opacity: 1;\n        }\n        100%{\n            width: 46px;\n            opacity: 1;\n        }\n    }\n\n\n    @keyframes rotateBackSlash {\n        0%{\n            transform: rotate(0deg);\n        }\n        30%{\n            width: 45%;\n            transform: rotate(0deg);\n        }\n        31%{\n            top: 0%;\n            bottom: 0;\n            width: 100%;\n            transform: rotate(45deg);\n        }               \n        100%{\n            top: 0;\n            bottom: 0;\n            width: 100%;\n            transform: rotate(45deg);\n        }\n    }\n\n    @keyframes reverseBackSlash {\n        0%{\n            top: 0;\n            bottom: 0;\n            width: 100%;\n            transform: rotate(45deg);\n        }\n        50%{\n            top: 0%;\n            bottom: 0;\n            width: 100%;\n            transform: rotate(45deg);\n        }\n        51%{\n            bottom: 2px;\n            width: 0%;\n            transform: rotate(0deg);\n        }               \n        100%{\n            width: 45%;\n            transform: rotate(0deg);\n        }\n    }\n\n    @keyframes rotateForwardSlash {\n        0%{\n            transform: rotate(0deg);\n        }\n        30%{\n            width: 45%;\n            transform: rotate(0deg);\n        }\n        31%{\n            width: 100%;\n            top: 0;\n            bottom: 0;\n            transform: rotate(-45deg);\n        }               \n        100%{\n            width: 100%;\n            top: 0;\n            bottom: 0;\n            transform: rotate(-45deg);\n        }    \n    }\n\n    @keyframes reverseForwardSlash {\n        0%{\n            width: 100%;\n            top: 0%;\n            bottom: 0;\n            transform: rotate(-45deg);\n        }\n        50%{\n            width: 100%;\n            top: 0;\n            bottom: 0;\n            transform: rotate(-45deg);\n        }\n        51%{\n            width: 0%;\n            transform: rotate(0deg);\n        }               \n        100%{\n            width: 75%;\n            transform: rotate(0deg);\n        }\n    }\n\n    &:focus{\n        outline: none;\n    }\n",
                ]);
                return (
                    (G = function () {
                        return e;
                    }),
                    e
                );
            }
            var W = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = { isHovered: !1 }),
                            (t.addHover = function (e) {
                                t.setState({ isHovered: !0 });
                            }),
                            (t.removeHover = function (e) {
                                t.setState({ isHovered: !1 });
                            }),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e,
                                        n = this.state.isHovered,
                                        t = this.props,
                                        a = t.onClick,
                                        o = t.burgerIsActive;
                                    return (
                                        (e =
                                            !0 === o
                                                ? "activeBurger"
                                                : !1 === o
                                                ? "cancelBurger"
                                                : ""),
                                        r.a.createElement(
                                            X,
                                            {
                                                type: "button",
                                                onMouseEnter: this.addHover,
                                                onMouseLeave: this.removeHover,
                                                onClick: a,
                                                className: "burger "
                                                    .concat(
                                                        n ? "hovering" : "",
                                                        " "
                                                    )
                                                    .concat(e),
                                            },
                                            r.a.createElement("div", {
                                                className: "bread-ham-cheese",
                                            })
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                X = x.a.button(
                    G(),
                    0.625,
                    1.25,
                    1.25,
                    1.25,
                    1.25,
                    1.25 / 3,
                    1.25,
                    1.25
                );
            function Y() {
                var e = Object(p.a)([
                    "\n    justify-self: flex-end;        \n    align-self: center;\n    margin-left: auto;\n    .pullout{\n        position: fixed;\n        display: flex;\n        justify-content: center;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        right: -100%;\n        padding:0;\n        opacity: 0;\n        transition: right 0s 1s, opacity 1s;\n        a{\n            font-size: 48px;\n            text-align: center;\n        }\n\n        &.pulled-out {\n            opacity: 1;\n            right: 0;\n            transition: right 0s, opacity 1s;\n        }\n    }\n",
                ]);
                return (
                    (Y = function () {
                        return e;
                    }),
                    e
                );
            }
            var ee = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        n = e.menuActive,
                                        t = e.burgerOnClick;
                                    return r.a.createElement(
                                        ne,
                                        null,
                                        r.a.createElement(W, {
                                            onClick: t,
                                            burgerIsActive: n,
                                        }),
                                        r.a.createElement(B, {
                                            className: "pullout ".concat(
                                                n ? "pulled-out" : ""
                                            ),
                                        })
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                ne = x.a.div(Y());
            function te() {
                var e = Object(p.a)([
                    "\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  &.home{\n    float: left;\n    width: 277px;\n    height: 100%;\n    .flex{\n      flex-direction: column;\n    }\n  }\n  &.normal{\n    width: 100%;\n    height: 178px;\n    padding: 0;\n    .flex{\n      width: 100%;\n      flex-direction: row;\n    }    \n  }\n",
                ]);
                return (
                    (te = function () {
                        return e;
                    }),
                    e
                );
            }
            var ae = (function (e) {
                    function n(e) {
                        var t;
                        return (
                            Object(g.a)(this, n),
                            ((t = Object(b.a)(
                                this,
                                Object(v.a)(n).call(this, e)
                            )).state = { mobileMenuActive: null }),
                            (t.handleClick = t.handleClick.bind(
                                Object(y.a)(t)
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "handleClick",
                                value: function () {
                                    this.setState(function (e) {
                                        return {
                                            mobileMenuActive:
                                                null === e.mobileMenuActive ||
                                                !1 === e.mobileMenuActive,
                                        };
                                    });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.mobileMenuActive,
                                        n = this.props.isHome;
                                    return r.a.createElement(
                                        oe,
                                        {
                                            id: "site-header",
                                            className: "".concat(
                                                n ? "home" : "normal",
                                                " flex pa1 justify-between  "
                                            ),
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "flex flex-fixed black",
                                            },
                                            r.a.createElement(C, { isHome: n }),
                                            n
                                                ? r.a.createElement(J, null)
                                                : r.a.createElement(ee, {
                                                      burgerOnClick: this
                                                          .handleClick,
                                                      menuActive: e,
                                                  })
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                re = Object(O.a)(i.b)(ae),
                oe = x.a.header(te());
            function ce() {
                var e = Object(p.a)([
                    "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  .social-nav{\n    display: inline-block;\n    margin: auto;\n  }\n",
                ]);
                return (
                    (ce = function () {
                        return e;
                    }),
                    e
                );
            }
            var ie = function (e) {
                    var n = e.isHome;
                    return r.a.createElement(
                        le,
                        { className: "topborder flex center bottomsDown" },
                        n ? "" : r.a.createElement(Z, null),
                        r.a.createElement(
                            "small",
                            {
                                className: "center",
                                style: {
                                    textAlign: "center",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                },
                            },
                            "845-343-8510   \xa9 DeGraw and DeHaan Architects"
                        )
                    );
                },
                le = x.a.footer(ce()),
                se = t(24),
                ue = "auth-token",
                me = "https://jthompsonarch.wordexpressapi.com/graphql";
            "/home/node" ===
                Object({ NODE_ENV: "production", PUBLIC_URL: "" }).HOME &&
                (me = "http://wp-headless:8080/graphql");
            var pe = { gqlUrl: me };
            function de() {
                var e = Object(p.a)([
                    "\n  query ProtectedQuery {\n    viewer {\n      userId\n      username\n    }\n  }\n",
                ]);
                return (
                    (de = function () {
                        return e;
                    }),
                    e
                );
            }
            function he() {
                var e = Object(p.a)([
                    "\n  query PagesAndPostsQuery {\n    posts {\n      edges {\n        node {\n          title\n          slug\n        }\n      }\n    }\n    pages {\n      edges {\n        node {\n          title\n          slug\n        }\n      }\n    }\n  }\n",
                ]);
                return (
                    (he = function () {
                        return e;
                    }),
                    e
                );
            }
            function ge() {
                var e = Object(p.a)([
                    "\n  query PageQuery($uri: String!) {\n    pageBy(uri: $uri) {\n      title\n      content\n    }\n  }\n",
                ]);
                return (
                    (ge = function () {
                        return e;
                    }),
                    e
                );
            }
            var fe = H()(ge()),
                be = H()(he()),
                ve = H()(de()),
                ye = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {
                                userId: null,
                                page: { title: "", content: "" },
                                pages: [],
                                posts: [],
                            }),
                            (t.authClient = null),
                            (t.executeProtectedQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = null),
                                                        (e.next = 3),
                                                        t.authClient
                                                            .query({
                                                                query: ve,
                                                            })
                                                            .catch(function (
                                                                e
                                                            ) {
                                                                n = e;
                                                            })
                                                    );
                                                case 3:
                                                    (a = e.sent),
                                                        n
                                                            ? ((o =
                                                                  t.props
                                                                      .history),
                                                              localStorage.removeItem(
                                                                  ue
                                                              ),
                                                              o.push("/login"))
                                                            : ((r =
                                                                  a.data.viewer
                                                                      .userId),
                                                              t.setState({
                                                                  userId: r,
                                                              }));
                                                case 5:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (t.executePageQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o, c, i;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props),
                                                        (a = n.match),
                                                        (r = n.client),
                                                        (o = a.params.slug) ||
                                                            (o = "home"),
                                                        (e.next = 5),
                                                        r.query({
                                                            query: fe,
                                                            variables: {
                                                                uri: o,
                                                            },
                                                        })
                                                    );
                                                case 5:
                                                    (c = e.sent),
                                                        (i = c.data.pageBy),
                                                        t.setState({ page: i });
                                                case 8:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (t.executePagesAndCategoriesQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props.client),
                                                        (e.next = 3),
                                                        n.query({ query: be })
                                                    );
                                                case 3:
                                                    (a = e.sent),
                                                        (r = (r =
                                                            a.data.posts
                                                                .edges).map(
                                                            function (e) {
                                                                var n = "/post/".concat(
                                                                        e.node
                                                                            .slug
                                                                    ),
                                                                    t = Object(
                                                                        se.a
                                                                    )({}, e);
                                                                return (
                                                                    (t.node.link = n),
                                                                    t
                                                                );
                                                            }
                                                        )),
                                                        (o = (o =
                                                            a.data.pages
                                                                .edges).map(
                                                            function (e) {
                                                                var n = "/page/".concat(
                                                                        e.node
                                                                            .slug
                                                                    ),
                                                                    t = Object(
                                                                        se.a
                                                                    )({}, e);
                                                                return (
                                                                    (t.node.link = n),
                                                                    t
                                                                );
                                                            }
                                                        )),
                                                        t.setState({
                                                            posts: r,
                                                            pages: o,
                                                        });
                                                case 9:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.executePageQuery(),
                                        this.executePagesAndCategoriesQuery();
                                    var e = localStorage.getItem(ue);
                                    e &&
                                        ((this.authClient = new l.a({
                                            link: Object(m.a)({
                                                uri: pe.gqlUrl,
                                                headers: {
                                                    Authorization: e
                                                        ? "Bearer ".concat(e)
                                                        : null,
                                                },
                                            }),
                                            cache: new s.a(),
                                        })),
                                        this.executeProtectedQuery());
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.page;
                                    return r.a.createElement(
                                        "div",
                                        { style: { marginLeft: "315px" } },
                                        r.a.createElement(
                                            "div",
                                            { className: "pa2" },
                                            r.a.createElement(
                                                "h1",
                                                null,
                                                e.title
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                je = Object(i.b)(ye);
            function Oe() {
                var e = Object(p.a)([
                    "\n  query PostSearchQuery($filter: String!) {\n    posts(where: { search: $filter }) {\n      edges {\n        node {\n          title\n          slug\n          author {\n            nickname\n          }\n        }\n      }\n    }\n  }\n",
                ]);
                return (
                    (Oe = function () {
                        return e;
                    }),
                    e
                );
            }
            var xe = H()(Oe()),
                we = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = { posts: [], filter: "" }),
                            (t.handleKeyDown = function (e) {
                                return (
                                    13 === e.keyCode && t.executeSearch(), !0
                                );
                            }),
                            (t.executeSearch = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (
                                                        ((n = t.props.client),
                                                        (a = t.state.filter),
                                                        (r = []),
                                                        0 !== a.length)
                                                    ) {
                                                        e.next = 7;
                                                        break;
                                                    }
                                                    t.setState({ posts: r }),
                                                        (e.next = 13);
                                                    break;
                                                case 7:
                                                    return (
                                                        (e.next = 9),
                                                        n.query({
                                                            query: xe,
                                                            variables: {
                                                                filter: a,
                                                            },
                                                        })
                                                    );
                                                case 9:
                                                    (o = e.sent),
                                                        (r = (r =
                                                            o.data.posts
                                                                .edges).map(
                                                            function (e) {
                                                                var n = "/post/".concat(
                                                                        e.node
                                                                            .slug
                                                                    ),
                                                                    t = Object(
                                                                        se.a
                                                                    )({}, e);
                                                                return (
                                                                    (t.node.link = n),
                                                                    t
                                                                );
                                                            }
                                                        )),
                                                        t.setState({
                                                            posts: r,
                                                        });
                                                case 13:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        n = this.state.posts;
                                    return r.a.createElement(
                                        "div",
                                        { className: "pa2" },
                                        r.a.createElement(
                                            "div",
                                            null,
                                            "Search",
                                            r.a.createElement("input", {
                                                className: "search",
                                                type: "text",
                                                onChange: function (n) {
                                                    return e.setState({
                                                        filter: n.target.value,
                                                    });
                                                },
                                                onKeyDown: this.handleKeyDown,
                                            }),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className: "search",
                                                    type: "button",
                                                    onClick: function () {
                                                        return e.executeSearch();
                                                    },
                                                },
                                                "OK"
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "flex mt2 items-start",
                                            },
                                            r.a.createElement("div", {
                                                className: "flex items-center",
                                            }),
                                            r.a.createElement(
                                                "div",
                                                { className: "ml1" },
                                                n.map(function (e, n) {
                                                    return r.a.createElement(
                                                        "div",
                                                        { key: e.node.slug },
                                                        r.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "gray",
                                                            },
                                                            n + 1,
                                                            "."
                                                        ),
                                                        r.a.createElement(
                                                            u.b,
                                                            {
                                                                to: e.node.link,
                                                                className:
                                                                    "ml1 black",
                                                            },
                                                            e.node.title
                                                        ),
                                                        r.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "gray",
                                                            },
                                                            " by ",
                                                            e.node.author
                                                                .nickname
                                                        )
                                                    );
                                                }),
                                                r.a.createElement("div", {
                                                    className:
                                                        "f6 lh-copy gray",
                                                })
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                ke = Object(i.b)(we);
            function Ee() {
                var e = Object(p.a)([
                    "\n  query PageQuery($uri: String!) {\n    pageBy(uri: $uri) {\n      title\n      content\n    }\n  }\n",
                ]);
                return (
                    (Ee = function () {
                        return e;
                    }),
                    e
                );
            }
            var Ce = H()(Ee()),
                Ne = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = { page: { title: "", content: "" } }),
                            (t.executePageQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o, c, i;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props),
                                                        (a = n.match),
                                                        (r = n.client),
                                                        (o = a.params.slug) ||
                                                            (o = "welcome"),
                                                        (e.next = 5),
                                                        r.query({
                                                            query: Ce,
                                                            variables: {
                                                                uri: o,
                                                            },
                                                        })
                                                    );
                                                case 5:
                                                    (c = e.sent),
                                                        (i = c.data.pageBy),
                                                        t.setState({ page: i });
                                                case 8:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.executePageQuery();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    this.props.match.params.slug !==
                                        e.match.params.slug &&
                                        this.executePageQuery();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.page;
                                    return r.a.createElement(
                                        "div",
                                        { style: { marginLeft: "315px" } },
                                        r.a.createElement(
                                            "p",
                                            null,
                                            JSON.stringify(e)
                                        ),
                                        r.a.createElement(
                                            "div",
                                            { className: "pa2" },
                                            r.a.createElement(
                                                "h1",
                                                null,
                                                e.title
                                            )
                                        ),
                                        r.a.createElement("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: e.content,
                                            },
                                        })
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                Se = Object(i.b)(Ne);
            function Pe() {
                var e = Object(p.a)([
                    "\n    position: relative;\n    justify-self: end;\n    font-size: 8.25rem;\n    font-weight: 100;\n    height: auto;\n    display:inline-block;\n    margin: 0;\n    padding-right: 7rem;\n    &:before{\n        content: '';\n        position: absolute;\n        width: 100%;\n        bottom: 0;\n        border-bottom: 2px solid black;\n    }\n    &.loaded{\n        \n    }    \n",
                ]);
                return (
                    (Pe = function () {
                        return e;
                    }),
                    e
                );
            }
            var qe = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        n = e.text,
                                        t = e.loaded;
                                    return r.a.createElement(
                                        He,
                                        {
                                            className: "page-heading ".concat(
                                                t ? "loaded" : ""
                                            ),
                                        },
                                        n
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                Qe = Object(i.b)(qe),
                He = x.a.h1(Pe());
            function Ae() {
                var e = Object(p.a)([
                    "\n    display: inline-block;\n    background-color: rgba(255,255,255,0.75);\n    margin: 0;\n    font-size: 2.15rem;\n    text-decoration: none;\n    color: black;\n    font-weight: 100;\n    padding: 10px 5px;\n",
                ]);
                return (
                    (Ae = function () {
                        return e;
                    }),
                    e
                );
            }
            var Me = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.children;
                                    return r.a.createElement(Be, null, e);
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                Te = Object(i.b)(Me),
                Be = x.a.h3(Ae());
            function De() {
                var e = Object(p.a)([
                    "\n    width: 50px;\n    /* height: 100%; */\n    opacity: 0.45;\n    transition: 0.25s;\n    .arrow{\n        display: inline-block;\n        width: 15px;\n        height: 15px;\n        border: 1px solid white;\n        border-top: none;\n        border-left: none;\n        transition: margin 0.25s;\n        transform: rotate(-45deg);\n        &.one{\n            opacity: 0.25;\n        }\n        &.two{\n            opacity: 0.5;\n        }\n        &.three{\n\n        }\n    }\n    &.hovering{\n        opacity: 1;\n        \n    }\n\n    &.left{\n        .arrow{\n            margin-left: -12px;\n            transform: rotate(135deg);\n            float: right;\n        }\n        &.hovering{\n            .arrow{\n                margin-left: 0;\n            }\n        }\n    }\n    \n    &.right{\n        .arrow{\n            margin-right: -12px;\n            transform: rotate(-45deg);\n        }\n        &.hovering{\n            .arrow{\n                margin-right: 0;\n            }\n        }\n    }\n    \n",
                ]);
                return (
                    (De = function () {
                        return e;
                    }),
                    e
                );
            }
            var Ie = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        n = e.isHovered,
                                        t = e.alignment;
                                    return r.a.createElement(
                                        Le,
                                        {
                                            className: " "
                                                .concat(t, "  ")
                                                .concat(n ? " hovering" : ""),
                                        },
                                        r.a.createElement("div", {
                                            className: "arrow one",
                                        }),
                                        r.a.createElement("div", {
                                            className: "arrow two",
                                        }),
                                        r.a.createElement("div", {
                                            className: "arrow three",
                                        })
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                Le = x.a.div(De());
            function ze() {
                var e = Object(p.a)([
                    "\n    display: grid;\n    grid-template-columns: auto auto;\n    height: 100%;\n    background-color: black;\n    align-self: center;\n    align-items: center;\n    margin: 0;\n    font-size: 1.15rem;\n    text-decoration: none;\n    color: white;\n    font-weight: 100;\n    padding: 0 8px;\n    a{\n        color: white;\n        opacity: 0.55;\n    }\n    &.hovered a{\n        opacity: 1;\n    }\n",
                ]);
                return (
                    (ze = function () {
                        return e;
                    }),
                    e
                );
            }
            var Ue = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        n = e.isHovered,
                                        t = e.alignment,
                                        a = e.className,
                                        o = e.link,
                                        c = e.linkAlt,
                                        i = e.children;
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        "left" === t
                                            ? r.a.createElement(
                                                  $e,
                                                  {
                                                      className: n
                                                          ? "hovered"
                                                          : "",
                                                  },
                                                  r.a.createElement(Ie, {
                                                      isHovered: n,
                                                      alignment: t,
                                                  }),
                                                  r.a.createElement(
                                                      u.b,
                                                      {
                                                          className: a,
                                                          to: o,
                                                          alt: c,
                                                      },
                                                      i
                                                  )
                                              )
                                            : r.a.createElement(
                                                  $e,
                                                  {
                                                      className: n
                                                          ? "hovered"
                                                          : "",
                                                  },
                                                  r.a.createElement(
                                                      u.b,
                                                      {
                                                          className: a,
                                                          to: o,
                                                          alt: c,
                                                      },
                                                      i
                                                  ),
                                                  r.a.createElement(Ie, {
                                                      isHovered: n,
                                                      alignment: t,
                                                  })
                                              )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                _e = Object(i.b)(Ue),
                $e = x.a.div(ze());
            function Ve() {
                var e = Object(p.a)([
                    "\n    display: grid;\n    grid-template-columns: auto auto;\n    .link-box{\n        background-color: black;\n    }\n",
                ]);
                return (
                    (Ve = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ze() {
                var e = Object(p.a)([
                    "\n    height: 50px;\n    align-self: end;\n    &.left{\n        justify-self: start;\n    }\n    &.right{\n        justify-self: end;\n    }\n",
                ]);
                return (
                    (Ze = function () {
                        return e;
                    }),
                    e
                );
            }
            var Fe = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        n = e.isHovered,
                                        t = e.alignment,
                                        a = e.children,
                                        o = e.link,
                                        c = e.linkText,
                                        i = e.linkAlt;
                                    return r.a.createElement(
                                        Je,
                                        {
                                            className:
                                                "left" === t ? "left" : "right",
                                        },
                                        "left" === t
                                            ? r.a.createElement(
                                                  Re,
                                                  {
                                                      className: n
                                                          ? "hovering"
                                                          : "nothovered",
                                                  },
                                                  r.a.createElement(
                                                      _e,
                                                      {
                                                          className: "link-box",
                                                          isHovered: n,
                                                          link: o,
                                                          alignment: t,
                                                          linkAlt: i,
                                                      },
                                                      c
                                                  ),
                                                  r.a.createElement(Te, null, a)
                                              )
                                            : r.a.createElement(
                                                  Re,
                                                  {
                                                      className: n
                                                          ? "hovering"
                                                          : "nothovered",
                                                  },
                                                  r.a.createElement(
                                                      Te,
                                                      null,
                                                      a
                                                  ),
                                                  r.a.createElement(
                                                      _e,
                                                      {
                                                          alignment: "right",
                                                          className: "link-box",
                                                          isHovered: n,
                                                          link: o,
                                                          linkAlt: i,
                                                      },
                                                      c
                                                  )
                                              )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                Ke = Object(i.b)(Fe),
                Je = x.a.figcaption(Ze()),
                Re = x.a.div(Ve());
            function Ge() {
                var e = Object(p.a)([
                    "\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    min-height: 300px;\n    .background-category-cover{\n        display: grid;\n        width: 100%;\n        height: 100%;\n        background-size: cover\n        background-position: center;\n    }\n",
                ]);
                return (
                    (Ge = function () {
                        return e;
                    }),
                    e
                );
            }
            var We = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = { isHovered: !1 }),
                            (t.addHover = function (e) {
                                t.setState({ isHovered: !0 });
                            }),
                            (t.removeHover = function (e) {
                                t.setState({ isHovered: !1 });
                            }),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        n = this.state.isHovered,
                                        t = this.props,
                                        a = t.alignment,
                                        o = t.captionTitle,
                                        c = t.img;
                                    return r.a.createElement(
                                        Ye,
                                        {
                                            className:
                                                "left" === a ? "left" : "right",
                                            onMouseEnter: function () {
                                                return e.addHover();
                                            },
                                            onMouseLeave: function () {
                                                return e.removeHover();
                                            },
                                            onFocus: function () {
                                                return e.addHover();
                                            },
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "background-category-cover",
                                                style: {
                                                    backgroundImage: "url(".concat(
                                                        c,
                                                        ")"
                                                    ),
                                                },
                                            },
                                            r.a.createElement(
                                                Ke,
                                                {
                                                    isHovered: n,
                                                    alignment: a,
                                                    link: "#",
                                                    linkText: "View",
                                                },
                                                o
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                Xe = Object(i.b)(We),
                Ye = x.a.figure(Ge());
            function en() {
                var e = Object(p.a)([
                    "\n  grid-template-areas: \n    '. body marginR'\n    '. body .';\n  grid-template-columns: 50px auto 50px;\n  .page-heading{\n    grid-area: marginR;\n    justify-self: end;\n  }\n  nav{\n    grid-column-start: 1;\n    grid-column-end: 4;\n    ul{\n      display: grid;\n      grid-template-columns: 50% 50%;\n      grid-template-rows: 700px;\n      padding-left: 0;\n      list-style: none;\n      li {\n        width: auto;\n        height:100%;\n        a{\n          text-decoration: none;\n        }\n\n      }\n    }\n  }\n",
                ]);
                return (
                    (en = function () {
                        return e;
                    }),
                    e
                );
            }
            function nn() {
                var e = Object(p.a)([
                    "\n  query ProjectQuery {\n    projectTypes {\n      edges {\n        node {\n          slug\n          name\n          featured_image{\n            thumbnail\n            medium\n            medium_large\n            large\n            full\n            default\n          }\n        }\n      }\n    }\n  }\n",
                ]);
                return (
                    (nn = function () {
                        return e;
                    }),
                    e
                );
            }
            function tn() {
                var e = Object(p.a)([
                    '\n  query PageQuery{\n    pageBy(uri: "portfolio") {\n      title\n      content\n    }\n  }\n',
                ]);
                return (
                    (tn = function () {
                        return e;
                    }),
                    e
                );
            }
            var an = H()(tn()),
                rn = H()(nn()),
                on = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {
                                page: { title: "", content: "" },
                                projectTypes: [],
                            }),
                            (t.executePageQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o, c, i;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props),
                                                        (a = n.match),
                                                        (r = n.client),
                                                        (o = a.params.slug) ||
                                                            (o = "welcome"),
                                                        (e.next = 5),
                                                        r.query({
                                                            query: an,
                                                            variables: {
                                                                uri: o,
                                                            },
                                                        })
                                                    );
                                                case 5:
                                                    (c = e.sent),
                                                        (i = c.data.pageBy),
                                                        t.setState({ page: i });
                                                case 8:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (t.executeProjectTypeQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props.client),
                                                        (e.next = 3),
                                                        n.query({ query: rn })
                                                    );
                                                case 3:
                                                    (a = e.sent),
                                                        (r = (r =
                                                            a.data.projectTypes
                                                                .edges).map(
                                                            function (e) {
                                                                var n = "/portfolio/".concat(
                                                                        e.node
                                                                            .slug
                                                                    ),
                                                                    t = Object(
                                                                        se.a
                                                                    )({}, e);
                                                                return (
                                                                    (t.node.link = n),
                                                                    t
                                                                );
                                                            }
                                                        )),
                                                        t.setState({
                                                            projectTypes: r,
                                                        });
                                                case 7:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.executePageQuery(),
                                        this.executeProjectTypeQuery();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    this.props.match.params.slug !==
                                        e.match.params.slug &&
                                        (this.executePageQuery(),
                                        this.executeProjectTypeQuery());
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state,
                                        n = e.page,
                                        t = e.projectTypes,
                                        a = this.props.loaded;
                                    return (
                                        console.log(n.content),
                                        r.a.createElement(
                                            ln,
                                            { className: "template-container" },
                                            r.a.createElement(Qe, {
                                                text: n.title,
                                                loaded: a,
                                            }),
                                            r.a.createElement(
                                                "nav",
                                                null,
                                                r.a.createElement(
                                                    "ul",
                                                    null,
                                                    t.map(function (e, n) {
                                                        return r.a.createElement(
                                                            "li",
                                                            { key: n },
                                                            r.a.createElement(
                                                                u.b,
                                                                {
                                                                    to:
                                                                        e.node
                                                                            .link,
                                                                },
                                                                r.a.createElement(
                                                                    Xe,
                                                                    {
                                                                        alignment:
                                                                            n %
                                                                            2
                                                                                ? "right"
                                                                                : "left",
                                                                        img:
                                                                            e
                                                                                .node
                                                                                .featured_image
                                                                                .default,
                                                                        captionTitle:
                                                                            e
                                                                                .node
                                                                                .name,
                                                                    }
                                                                )
                                                            )
                                                        );
                                                    })
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                cn = Object(i.b)(on),
                ln = x.a.main(en());
            function sn() {
                var e = Object(p.a)([
                    "\n  list-style: none;\n  padding: 0;\n  padding-right: 90px;\n\n  li{\n    height: 605px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    margin: 140px 0;\n    &:first-of-type{\n      margin-top: 50px;\n    }\n    a{\n      text-decoration: none;\n    }\n    &.left{\n      figure, a{\n        grid-column-start: 2;\n      }\n      figcaption{\n        margin-left: -111px;\n      }\n    }\n    &.right{\n      figure, a{\n        grid-column-start: 1;\n      }\n      figcaption{\n        margin-right: -111px;\n      }\n    }\n  }\n",
                ]);
                return (
                    (sn = function () {
                        return e;
                    }),
                    e
                );
            }
            function un() {
                var e = Object(p.a)([
                    "\n  display: grid;\n  .page-headline{\n    justify-self: end;\n    grid-column-end: 1;\n    justify-content: end;\n    text-align: right;\n  }\n",
                ]);
                return (
                    (un = function () {
                        return e;
                    }),
                    e
                );
            }
            function mn() {
                var e = Object(p.a)([
                    "\n  query ProjectTypeQuery($uri: [String]) {\n    projectTypes(where: {slug: $uri}) {\n      edges {\n        node {\n          name\n          slug\n          projects {\n            edges {\n              node {\n                title\n                slug\n                uri\n                featuredImage {\n                  sourceUrl\n                  srcSet\n                }\n                projectTypes {\n                  nodes {\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n",
                ]);
                return (
                    (mn = function () {
                        return e;
                    }),
                    e
                );
            }
            var pn = H()(mn()),
                dn = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = { title: "", projects: [] }),
                            (t.executeProjectQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o, c, i, l, s;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props),
                                                        (a = n.match),
                                                        (r = n.client),
                                                        (o = a.params.slug) ||
                                                            (o = "welcome"),
                                                        (e.next = 5),
                                                        r.query({
                                                            query: pn,
                                                            variables: {
                                                                uri: o,
                                                            },
                                                        })
                                                    );
                                                case 5:
                                                    (c = e.sent),
                                                        (i =
                                                            c.data.projectTypes
                                                                .edges[0].node
                                                                .slug),
                                                        (l =
                                                            c.data.projectTypes
                                                                .edges[0].node
                                                                .name),
                                                        (s = (s =
                                                            c.data.projectTypes
                                                                .edges[0].node
                                                                .projects
                                                                .edges).map(
                                                            function (e) {
                                                                var n = "/portfolio/"
                                                                        .concat(
                                                                            i,
                                                                            "/"
                                                                        )
                                                                        .concat(
                                                                            e
                                                                                .node
                                                                                .slug
                                                                        ),
                                                                    t = Object(
                                                                        se.a
                                                                    )({}, e);
                                                                return (
                                                                    (t.node.link = n),
                                                                    t
                                                                );
                                                            }
                                                        )),
                                                        t.setState({
                                                            title: l,
                                                            projects: s,
                                                        });
                                                case 11:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.executeProjectQuery();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    this.props.match.params.slug !==
                                        e.match.params.slug &&
                                        this.executeProjectQuery();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state,
                                        n = e.title,
                                        t = e.projects;
                                    return r.a.createElement(
                                        gn,
                                        null,
                                        r.a.createElement(Qe, { text: n }),
                                        r.a.createElement(
                                            fn,
                                            null,
                                            t.map(function (e, n) {
                                                return r.a.createElement(
                                                    "li",
                                                    {
                                                        className:
                                                            (n + 1) % 2
                                                                ? "left"
                                                                : "right",
                                                        key: n,
                                                    },
                                                    r.a.createElement(
                                                        u.b,
                                                        { to: e.node.link },
                                                        r.a.createElement(Xe, {
                                                            alignment:
                                                                (n + 1) % 2
                                                                    ? "left"
                                                                    : "right",
                                                            captionTitle:
                                                                e.node.title,
                                                            img:
                                                                null !==
                                                                e.node
                                                                    .featuredImage
                                                                    ? e.node
                                                                          .featuredImage
                                                                          .sourceUrl
                                                                    : "",
                                                        })
                                                    )
                                                );
                                            })
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                hn = Object(i.b)(dn),
                gn = x.a.main(un()),
                fn = x.a.ul(sn());
            function bn() {
                var e = Object(p.a)([
                    "\n    display: grid;\n    width: 100%;\n    height: 100vh;\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n    &.hero-section{\n        /* override whatever grid properties inherited */\n        grid-template-columns: 100%;\n    }\n    .project-title{\n        display: grid;\n        min-width: 500px;\n        padding: 0px 0;\n        padding-right: 10rem;\n        text-align: center;\n        background: rgb(255,255,255);\nbackground: linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.75) 50%);\n        align-self: start;\n        justify-self: end;\n        justify-content: end;\n        h1, h2 {\n            display: inline-block;\n        }\n        h1{\n            position: relative;\n            margin: 1rem 0;\n            font-size: 46px;\n            font-weight: 100;\n            :after{\n                content: '';\n                position: absolute;\n                width: 100%;\n                height: 1px;\n                background: black;\n                left: 0;\n                bottom: -1rem;\n                opacity: 0.4;\n            }\n        }\n        h2{\n            opacity: 0.6;\n            font-family: \"Roboto\", serif;\n            font-weight: 100;\n        }\n    }  \n",
                ]);
                return (
                    (bn = function () {
                        return e;
                    }),
                    e
                );
            }
            var vn = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        n = e.captionTitle,
                                        t = e.date,
                                        a = e.location,
                                        o = e.img;
                                    return r.a.createElement(
                                        jn,
                                        {
                                            className: "hero-section",
                                            style: {
                                                backgroundImage: "url(".concat(
                                                    o,
                                                    ")"
                                                ),
                                            },
                                        },
                                        r.a.createElement(
                                            "div",
                                            { className: "project-title" },
                                            r.a.createElement("h1", null, n),
                                            r.a.createElement(
                                                "h2",
                                                null,
                                                t,
                                                ", ",
                                                r.a.createElement("i", null, a)
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                yn = Object(i.b)(vn),
                jn = x.a.section(bn());
            function On() {
                var e = Object(p.a)([
                    "\n    grid-column-start: 1;\n    grid-column-start: 1;\n    &.project-stats{\n        position: relative;\n        max-width: 316px;\n        background: linear-gradient(180deg, rgba(226,223,223,1) 0%, rgba(245,242,241,1) 100%);\n        box-shadow: 5px 5px 100px -25px rgba(0,0,0,0.25);\n        dl{\n            display: grid;\n            grid-template-columns: 30% auto;\n            grid-row-gap: 30px;\n            margin: 0;\n            dt{\n            grid-column-start: 1;\n            font-weight: bold;\n            &.color-term{\n                grid-column-end: 3;\n            }\n            }\n            dd{\n            grid-column-start: 2;\n            font-style: italic;\n            &.color-defintion{\n                grid-column-start: 1;\n                grid-column-end: 3;\n                margin-left: 0;\n            }\n            }\n        }\n        }\n        ul{\n            margin: 0;\n            padding: 0;\n            li{\n                list-style: none;\n                margin: 0;\n            }\n        }\n        .color-swatch{\n        display: inline-block;\n        width: 50px;\n        height: 50px;\n        margin-left: 10px;\n        border-radius: 100%;\n        box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.35);\n        &:first-of-type{\n            margin-left: 0;\n        }\n        }\n    }\n",
                ]);
                return (
                    (On = function () {
                        return e;
                    }),
                    e
                );
            }
            var xn = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        n = e.materials,
                                        t = e.styles,
                                        a = e.colors;
                                    return r.a.createElement(
                                        kn,
                                        { className: "project-stats box" },
                                        r.a.createElement(
                                            "dl",
                                            null,
                                            r.a.createElement(
                                                "dt",
                                                null,
                                                "Material"
                                            ),
                                            r.a.createElement(
                                                "dd",
                                                null,
                                                r.a.createElement("ul", null, n)
                                            ),
                                            r.a.createElement(
                                                "dt",
                                                null,
                                                "Style"
                                            ),
                                            r.a.createElement(
                                                "dd",
                                                null,
                                                r.a.createElement("ul", null, t)
                                            ),
                                            r.a.createElement(
                                                "dt",
                                                { className: "color-term" },
                                                "Palette"
                                            ),
                                            r.a.createElement(
                                                "dd",
                                                {
                                                    className:
                                                        "color-defintion",
                                                },
                                                r.a.createElement("ul", null, a)
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                wn = Object(i.b)(xn),
                kn = x.a.div(On());
            function En() {
                var e = Object(p.a)([
                    "\n    grid-row-start: 1;\n    width: 50%;\n    height: 50px;\n    margin-top: 70px;\n    border: 1px solid black;\n    &.left{\n        justify-self: end;\n        border-bottom: none;\n        border-right: none;\n    }\n    &.right{\n        justify-self: start;\n        border-bottom: none;\n        border-left: none;\n    }\n",
                ]);
                return (
                    (En = function () {
                        return e;
                    }),
                    e
                );
            }
            var Cn = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.direction;
                                    return r.a.createElement(Sn, {
                                        className: "branch ".concat(e),
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                Nn = Object(i.b)(Cn),
                Sn = x.a.div(En()),
                Pn = t(101);
            function qn() {
                var e = Object(p.a)([
                    '\n      align-self: start;\n      grid-row-start: 2;\n      grid-row-end: 2;\n      justify-self: center;\n      text-align: center;\n      max-width: 70%;\n      padding: 0px 58px 30px;\n      border-top: 5px solid black;\n      background: linear-gradient(180deg, rgba(226,223,223,1) 0%, rgba(245,242,241,1) 100%);\n      box-shadow: 5px 5px 100px -25px rgba(0,0,0,0.25);\n      line-height: 1.5;\n      h3{\n          margin-bottom: 1rem;\n          font-family: "Roboto", serif;\n          font-style: italic;\n          font-size: 2.5rem;\n          font-weight: 300;\n      }\n      hr{\n          margin-bottom: 1.25rem;\n      }\n',
                ]);
                return (
                    (qn = function () {
                        return e;
                    }),
                    e
                );
            }
            var Qn = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        n = e.title,
                                        t = e.content;
                                    return r.a.createElement(
                                        An,
                                        null,
                                        r.a.createElement("h3", null, n),
                                        r.a.createElement("hr", null),
                                        r.a.createElement(Pn.a, null, t)
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                Hn = Object(i.b)(Qn),
                An = x.a.div(qn()),
                Mn = t(103),
                Tn = t.n(Mn);
            function Bn() {
                var e = Object(p.a)([
                    "\n    display: grid;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-template-columns: 50% 50%;\n    .tree-trunk{\n        position: relative;\n        display: grid;\n        grid-column-start: 1;\n        grid-column-end: 3;\n        grid-template-columns: 50% 50%;\n        grid-template-rows: auto auto;\n        padding: 100px 0;\n        &:after{\n            content: '';\n            position: absolute;\n            grid-column-start: 2;\n            left: 0;\n            top: 0;\n            width: 1px;\n            height: 100%;\n            background: black;\n        }\n        .wp-block-group.box{\n            padding: 0;\n            .wp-block-group__inner-container{\n                &>:not(figure){\n                    margin: 4rem;\n                }\n            }\n\n        }\n        .wp-block-image{\n            margin: 0;\n        }\n        \n    }\n    \n",
                ]);
                return (
                    (Bn = function () {
                        return e;
                    }),
                    e
                );
            }
            var Dn = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {}),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.content;
                                    return r.a.createElement(Ln, null, Tn()(e));
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                In = Object(i.b)(Dn),
                Ln = x.a.section(Bn());
            function zn() {
                var e = Object(p.a)([
                    "\n  display: grid;\n  grid-template-columns: 50% 50%;\n  padding-right: 85px;\n  section{\n    grid-column-start: 1;\n    grid-column-end: 3; \n    display: grid;\n    position: relative;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: auto auto;\n    .trunk{\n      display: grid;\n      width: 100%;\n      height: 100%;\n      grid-template-rows: auto 1fr;\n    }\n\n    .box{\n      align-self: start;\n      grid-row-start: 2;\n      grid-row-end: 2;\n      justify-self: center;\n      max-width: 70%;\n      padding: 44px 58px;\n      border-top: 5px solid black;\n      background: linear-gradient(180deg, rgba(226,223,223,1) 0%, rgba(245,242,241,1) 100%);\n      box-shadow: 5px 5px 100px -25px rgba(0,0,0,0.25);\n    }\n    &.tree-trunk {\n      &:after{\n        content: '';\n        position: absolute;\n        grid-column-start: 2;\n        left: 0;\n        top: 0;\n        width: 1px;\n        height: 100%;\n        background: black;\n      }\n      &:nth-child(odd){\n        .branch.left{\n          margin-top: 100px;\n        }\n      }\n      &:nth-child(even){\n        .branch.right{\n          margin-top: 100px;\n        }\n      }      \n    }\n  }\n",
                ]);
                return (
                    (zn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Un() {
                var e = Object(p.a)([
                    "\n  query ProjectQuery($uri: String!) {\n    projectBy(uri: $uri) {\n      id\n      slug\n      title\n      projectId\n      featuredImage {\n        sourceUrl\n        srcSet\n      }\n      content\n      colorPalette {\n        colorone\n        colortwo\n        colorthree\n        colorfour\n        colorfive\n        colorsix\n        colorseven\n        coloreight\n        colornine\n        colorten\n      }\n      date\n      location\n      budget\n      projectSummary\n      projectTypes {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      materials {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      styles {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n",
                ]);
                return (
                    (Un = function () {
                        return e;
                    }),
                    e
                );
            }
            var _n = H()(Un()),
                $n = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, o = new Array(a), c = 0;
                            c < a;
                            c++
                        )
                            o[c] = arguments[c];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(o)
                                )
                            )).state = {
                                project: {
                                    tite: "",
                                    slug: "",
                                    date: "",
                                    location: "",
                                    budget: "",
                                    projectSummary: "",
                                    content: "",
                                    featuredImage: {},
                                },
                                types: [],
                                materials: [],
                                styles: [],
                            }),
                            (t.executeProjectQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, o, c, i, l, s, u, m, p, d;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props),
                                                        (a = n.match),
                                                        (o = n.client),
                                                        (c = a.params.slug),
                                                        (e.next = 4),
                                                        o.query({
                                                            query: _n,
                                                            variables: {
                                                                uri: c,
                                                            },
                                                        })
                                                    );
                                                case 4:
                                                    (i = e.sent),
                                                        (l = i.data.projectBy),
                                                        (s = Object.entries(
                                                            l.colorPalette
                                                        )
                                                            .slice(0, 10)
                                                            .map(function (e) {
                                                                return e[1];
                                                            })),
                                                        (u = s.map(function (
                                                            e,
                                                            n
                                                        ) {
                                                            var t;
                                                            return (
                                                                null !== e &&
                                                                    "" !== e &&
                                                                    (t = r.a.createElement(
                                                                        "li",
                                                                        {
                                                                            key: n,
                                                                            className:
                                                                                "color-swatch",
                                                                            style: {
                                                                                background: "".concat(
                                                                                    e
                                                                                ),
                                                                            },
                                                                        }
                                                                    )),
                                                                t
                                                            );
                                                        })),
                                                        (m = l.projectTypes.edges.map(
                                                            function (e, n) {
                                                                return r.a.createElement(
                                                                    "li",
                                                                    { key: n },
                                                                    e.node.name
                                                                );
                                                            }
                                                        )),
                                                        (p = l.materials.edges.map(
                                                            function (e, n) {
                                                                return r.a.createElement(
                                                                    "li",
                                                                    { key: n },
                                                                    e.node.name
                                                                );
                                                            }
                                                        )),
                                                        (d = l.styles.edges.map(
                                                            function (e, n) {
                                                                return r.a.createElement(
                                                                    "li",
                                                                    { key: n },
                                                                    e.node.name
                                                                );
                                                            }
                                                        )),
                                                        t.setState({
                                                            project: l,
                                                            colors: u,
                                                            types: m,
                                                            materials: p,
                                                            styles: d,
                                                        });
                                                case 12:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.executeProjectQuery();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    this.props.match.params.slug !==
                                        e.match.params.slug &&
                                        this.executeProjectQuery();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state,
                                        n = e.project,
                                        t = e.colors,
                                        a = e.materials,
                                        o = e.styles,
                                        c = n.date.slice(0, 4);
                                    return r.a.createElement(
                                        Zn,
                                        null,
                                        r.a.createElement(yn, {
                                            captionTitle: n.title,
                                            date: c,
                                            location: n.location,
                                            img: n.featuredImage.sourceUrl,
                                        }),
                                        r.a.createElement(
                                            "section",
                                            { className: "tree-trunk" },
                                            r.a.createElement(
                                                "div",
                                                { className: "trunk left" },
                                                r.a.createElement(Nn, {
                                                    direction: "left",
                                                }),
                                                r.a.createElement(wn, {
                                                    materials: a,
                                                    styles: o,
                                                    colors: t,
                                                })
                                            ),
                                            r.a.createElement(
                                                "div",
                                                { className: "trunk right" },
                                                r.a.createElement(Nn, {
                                                    direction: "right",
                                                }),
                                                r.a.createElement(Hn, {
                                                    title: "Project Summary",
                                                    content: n.projectSummary,
                                                })
                                            )
                                        ),
                                        r.a.createElement(In, {
                                            content: n.content,
                                        })
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                Vn = Object(i.b)($n),
                Zn = x.a.main(zn());
            function Fn() {
                var e = Object(p.a)([
                    "\n  query ProjectQuery {\n    teamMembers {\n        edges {\n        node {\n            title\n            uri\n            link\n            content\n            featuredImage {\n            srcSet\n            sourceUrl\n            }\n        }\n        }\n    }\n  }\n",
                ]);
                return (
                    (Fn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Kn() {
                var e = Object(p.a)([
                    '\n  query PageQuery {\n    pageBy(uri: "about") {\n      title\n      content\n    }\n  }\n',
                ]);
                return (
                    (Kn = function () {
                        return e;
                    }),
                    e
                );
            }
            var Jn = H()(Kn()),
                Rn = H()(Fn()),
                Gn = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {
                                page: { title: "", content: "" },
                                teamMembers: [],
                            }),
                            (t.executePageQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o, c;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props),
                                                        (a = n.match),
                                                        (r = n.client),
                                                        console.log(a),
                                                        a.params.slug ||
                                                            "welcome",
                                                        (e.next = 6),
                                                        r.query({ query: Jn })
                                                    );
                                                case 6:
                                                    (o = e.sent),
                                                        (c = o.data.pageBy),
                                                        t.setState({ page: c });
                                                case 9:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (t.executeProjectTypeQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props.client),
                                                        (e.next = 3),
                                                        n.query({ query: Rn })
                                                    );
                                                case 3:
                                                    (a = e.sent),
                                                        (r =
                                                            a.data.teamMembers
                                                                .edges),
                                                        t.setState({
                                                            teamMembers: r,
                                                        });
                                                case 6:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.executePageQuery(),
                                        this.executeProjectTypeQuery();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    this.props.match.params.slug !==
                                        e.match.params.slug &&
                                        (this.executePageQuery(),
                                        this.executeProjectTypeQuery());
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state,
                                        n = e.page,
                                        t = e.teamMembers;
                                    return (
                                        console.log(n),
                                        r.a.createElement(
                                            "div",
                                            { style: { marginLeft: "315px" } },
                                            r.a.createElement(
                                                "div",
                                                { className: "pa2" },
                                                r.a.createElement(
                                                    "h1",
                                                    null,
                                                    n.title
                                                )
                                            ),
                                            r.a.createElement("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: n.content,
                                                },
                                            }),
                                            r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(
                                                    "h2",
                                                    null,
                                                    "Lets check some more shit right here then."
                                                ),
                                                r.a.createElement(
                                                    "p",
                                                    null,
                                                    JSON.stringify(t)
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                Wn = Object(i.b)(Gn),
                Xn = t(104),
                Yn = t.n(Xn);
            function et() {
                var e = Object(p.a)(["\n    resize: none;\n"]);
                return (
                    (et = function () {
                        return e;
                    }),
                    e
                );
            }
            var nt = x.a.textarea(et()),
                tt = (function (e) {
                    function n(e) {
                        var t;
                        return (
                            Object(g.a)(this, n),
                            ((t = Object(b.a)(
                                this,
                                Object(v.a)(n).call(this, e)
                            )).state = {}),
                            (t.handleSubmit = t.handleSubmit.bind(
                                Object(y.a)(t)
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "handleSubmit",
                                value: function (e) {
                                    e.preventDefault(),
                                        fetch(
                                            "https://degrawanddehaan.wordtestdomain.com/wp-json/contact-form-7/v1/contact-forms/42/feedback",
                                            {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type":
                                                        "application/json",
                                                },
                                                body: {
                                                    "your-name": "Kevin",
                                                    "your-email":
                                                        "kevingarubba@gmail.com",
                                                    "your-subject":
                                                        "Testing this one now",
                                                    "your-message":
                                                        "Awesome email",
                                                },
                                            }
                                        );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.data;
                                    return (
                                        console.log(e),
                                        r.a.createElement(
                                            "form",
                                            { onSubmit: this.handleSubmit },
                                            e.fields.map(function (e, n) {
                                                var t = e.field_type;
                                                return r.a.createElement(
                                                    "div",
                                                    null,
                                                    "text_area" === t
                                                        ? r.a.createElement(
                                                              nt,
                                                              null
                                                          )
                                                        : r.a.createElement(
                                                              "input",
                                                              {
                                                                  id: "cb".concat(
                                                                      n
                                                                  ),
                                                                  name: e.name,
                                                                  type: "".concat(
                                                                      t
                                                                  ),
                                                              }
                                                          ),
                                                    r.a.createElement(
                                                        "label",
                                                        { for: "cb".concat(n) },
                                                        e.name
                                                    )
                                                );
                                            }),
                                            r.a.createElement(
                                                "button",
                                                null,
                                                "Send data!"
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                at = Object(i.b)(tt);
            function rt() {
                var e = Object(p.a)([
                    '\n  query PageQuery {\n    pageBy(uri: "contact") {\n      title\n      content\n    }\n  }\n',
                ]);
                return (
                    (rt = function () {
                        return e;
                    }),
                    e
                );
            }
            var ot = H()(rt()),
                ct = (function (e) {
                    function n(e) {
                        var t;
                        return (
                            Object(g.a)(this, n),
                            ((t = Object(b.a)(
                                this,
                                Object(v.a)(n).call(this, e)
                            )).getForm = function () {
                                Yn.a
                                    .get(
                                        "http://localhost:8080/wp-json/forms/v1/forms/51"
                                    )
                                    .then(function (e) {
                                        var n = e.data;
                                        t.setState({ isLoaded: !0, form: n });
                                    });
                            }),
                            (t.executePageQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o, c, i;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props),
                                                        (a = n.match),
                                                        (r = n.client),
                                                        (o = a.params.slug) ||
                                                            (o = "welcome"),
                                                        (e.next = 5),
                                                        r.query({
                                                            query: ot,
                                                            variables: {
                                                                uri: o,
                                                            },
                                                        })
                                                    );
                                                case 5:
                                                    (c = e.sent),
                                                        (i = c.data.pageBy),
                                                        t.setState({ page: i });
                                                case 8:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (t.state = {
                                isLoaded: !1,
                                page: { title: "", content: "" },
                                form: [],
                            }),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.executePageQuery(), this.getForm();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    this.props.match.params.slug !==
                                        e.match.params.slug &&
                                        this.executePageQuery();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state,
                                        n = e.page,
                                        t = e.form,
                                        a = e.isLoaded;
                                    return r.a.createElement(
                                        "div",
                                        { style: { marginLeft: "315px" } },
                                        r.a.createElement(
                                            "div",
                                            { className: "pa2" },
                                            r.a.createElement(
                                                "h1",
                                                null,
                                                n.title
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "h2",
                                                null,
                                                "Lets check some more shit right here then."
                                            )
                                        ),
                                        a
                                            ? r.a.createElement(at, { data: t })
                                            : ""
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                it = Object(i.b)(ct);
            function lt() {
                var e = Object(p.a)([
                    "\n  query PostQuery($filter: String!) {\n    postBy(slug: $filter) {\n      title\n      content\n      author {\n        nickname\n      }\n    }\n  }\n",
                ]);
                return (
                    (lt = function () {
                        return e;
                    }),
                    e
                );
            }
            var st = H()(lt()),
                ut = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = {
                                post: {
                                    title: "",
                                    content: "",
                                    author: { nickname: "" },
                                },
                            }),
                            (t.executePostQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o, c, i;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props),
                                                        (a = n.match),
                                                        (r = n.client),
                                                        (o = a.params.slug),
                                                        (e.next = 4),
                                                        r.query({
                                                            query: st,
                                                            variables: {
                                                                filter: o,
                                                            },
                                                        })
                                                    );
                                                case 4:
                                                    (c = e.sent),
                                                        (i = c.data.postBy),
                                                        t.setState({ post: i });
                                                case 7:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.executePostQuery();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.post;
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            { className: "pa2" },
                                            r.a.createElement(
                                                "h1",
                                                null,
                                                e.title
                                            )
                                        ),
                                        r.a.createElement("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: e.content,
                                            },
                                        }),
                                        r.a.createElement(
                                            "div",
                                            null,
                                            "Written by ",
                                            e.author.nickname
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                mt = Object(i.b)(ut);
            function pt() {
                var e = Object(p.a)([
                    "\n  query CategoryQuery($filter: String!) {\n    posts(where: { categoryName: $filter }) {\n      edges {\n        node {\n          title\n          slug\n        }\n      }\n    }\n    categories(where: { slug: [$filter] }) {\n      edges {\n        node {\n          name\n          categoryId\n        }\n      }\n    }\n  }\n",
                ]);
                return (
                    (pt = function () {
                        return e;
                    }),
                    e
                );
            }
            var dt = H()(pt()),
                ht = (function (e) {
                    function n() {
                        var e, t;
                        Object(g.a)(this, n);
                        for (
                            var a = arguments.length, r = new Array(a), o = 0;
                            o < a;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            ((t = Object(b.a)(
                                this,
                                (e = Object(v.a)(n)).call.apply(
                                    e,
                                    [this].concat(r)
                                )
                            )).state = { category: { name: "", posts: [] } }),
                            (t.executeCategoryQuery = Object(q.a)(
                                P.a.mark(function e() {
                                    var n, a, r, o, c, i, l, s;
                                    return P.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = t.props),
                                                        (a = n.match),
                                                        (r = n.client),
                                                        (o = a.params.slug),
                                                        (e.next = 4),
                                                        r.query({
                                                            query: dt,
                                                            variables: {
                                                                filter: o,
                                                            },
                                                        })
                                                    );
                                                case 4:
                                                    (c = e.sent),
                                                        (i =
                                                            c.data.categories
                                                                .edges[0].node
                                                                .name),
                                                        (l = (l =
                                                            c.data.posts
                                                                .edges).map(
                                                            function (e) {
                                                                var n = "/post/".concat(
                                                                        e.node
                                                                            .slug
                                                                    ),
                                                                    t = Object(
                                                                        se.a
                                                                    )({}, e);
                                                                return (
                                                                    (t.node.link = n),
                                                                    t
                                                                );
                                                            }
                                                        )),
                                                        (s = {
                                                            name: i,
                                                            posts: l,
                                                        }),
                                                        t.setState({
                                                            category: s,
                                                        });
                                                case 10:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            t
                        );
                    }
                    return (
                        Object(j.a)(n, e),
                        Object(f.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.executeCategoryQuery();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.category;
                                    return r.a.createElement(
                                        "div",
                                        { className: "pa2" },
                                        r.a.createElement("h1", null, e.name),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "flex mt2 items-start",
                                            },
                                            r.a.createElement("div", {
                                                className: "flex items-center",
                                            }),
                                            r.a.createElement(
                                                "div",
                                                { className: "ml1" },
                                                e.posts.map(function (e, n) {
                                                    return r.a.createElement(
                                                        "div",
                                                        { key: e.node.slug },
                                                        r.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "gray",
                                                            },
                                                            n + 1,
                                                            "."
                                                        ),
                                                        r.a.createElement(
                                                            u.b,
                                                            {
                                                                to: e.node.link,
                                                                className:
                                                                    "ml1 black",
                                                            },
                                                            e.node.title
                                                        )
                                                    );
                                                }),
                                                r.a.createElement("div", {
                                                    className:
                                                        "f6 lh-copy gray",
                                                })
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                gt = Object(i.b)(ht);
            function ft() {
                var e = Object(p.a)([
                    "\n  margin-bottom: 100px;\n  &.offset-header{\n    margin-top: 175px;\n  }\n",
                ]);
                return (
                    (ft = function () {
                        return e;
                    }),
                    e
                );
            }
            function bt() {
                var e = Object(p.a)(["\n  display: grid;\n"]);
                return (
                    (bt = function () {
                        return e;
                    }),
                    e
                );
            }
            var vt = x.a.div(bt()),
                yt = x.a.div(ft()),
                jt = new l.a({
                    link: Object(m.a)({ uri: pe.gqlUrl }),
                    cache: new s.a(),
                });
            c.a.render(
                r.a.createElement(
                    u.a,
                    { className: !0 },
                    r.a.createElement(
                        i.a,
                        { client: jt },
                        r.a.createElement(function (e) {
                            var n,
                                t = Object(a.useState)(0),
                                o = Object(d.a)(t, 2),
                                c = o[0],
                                i = o[1],
                                l = Object(h.f)();
                            return (
                                "/" === l.pathname && (n = !0),
                                Object(a.useEffect)(function () {
                                    var e = setTimeout(function () {
                                        i(!0);
                                    }, 750);
                                    return function () {
                                        return clearTimeout(e);
                                    };
                                }),
                                r.a.createElement(
                                    vt,
                                    {
                                        className: "center ".concat(
                                            c ? "loaded" : ""
                                        ),
                                    },
                                    r.a.createElement(re, {
                                        location: l,
                                        isHome: n,
                                    }),
                                    r.a.createElement(
                                        yt,
                                        {
                                            className: " ".concat(
                                                n ? "" : "offset-header"
                                            ),
                                        },
                                        r.a.createElement(
                                            h.c,
                                            null,
                                            r.a.createElement(h.a, {
                                                exact: !0,
                                                path: "/",
                                                component: je,
                                            }),
                                            r.a.createElement(h.a, {
                                                exact: !0,
                                                path: "/search",
                                                component: ke,
                                            }),
                                            r.a.createElement(h.a, {
                                                exact: !0,
                                                path: "/page/portfolio",
                                                component: cn,
                                                loaded: c,
                                            }),
                                            r.a.createElement(h.a, {
                                                exact: !0,
                                                path: "/page/about",
                                                component: Wn,
                                            }),
                                            r.a.createElement(h.a, {
                                                exact: !0,
                                                path: "/page/contact",
                                                component: it,
                                            }),
                                            r.a.createElement(h.a, {
                                                exact: !0,
                                                path: "/portfolio/:slug",
                                                component: hn,
                                            }),
                                            r.a.createElement(h.a, {
                                                exact: !0,
                                                path:
                                                    "/portfolio/:taxonomy/:slug",
                                                component: Vn,
                                            }),
                                            r.a.createElement(h.a, {
                                                exact: !0,
                                                path: "/page/:slug",
                                                component: Se,
                                            }),
                                            r.a.createElement(h.a, {
                                                exact: !0,
                                                path: "/post/:slug",
                                                component: mt,
                                            }),
                                            r.a.createElement(h.a, {
                                                exact: !0,
                                                path: "/category/:slug",
                                                component: gt,
                                            })
                                        )
                                    ),
                                    r.a.createElement(ie, { isHome: n })
                                )
                            );
                        }, null)
                    )
                ),
                document.getElementById("root")
            );
        },
        93: function (e, n, t) {
            e.exports = t.p + "static/media/logo.60ea37ed.png";
        },
    },
    [[109, 1, 2]],
]);
//# sourceMappingURL=main.0f79d7ca.chunk.js.map
