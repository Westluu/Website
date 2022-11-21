"use strict";
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 7673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const items = [
    {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/wesley-luu-067771204/"
    },
    {
        icon: "fab fa-discord",
        link: "https://discord.com/users/746472347371831386"
    },
    {
        icon: "fab fa-dev",
        link: "https://devpost.com/wluu03?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    {
        icon: "fab fa-github",
        link: "https://github.com/Westluu"
    }, 
];
const navItems = [
    {
        icon: "fal fa-home",
        active: "fa fa-home",
        label: "Home",
        href: "/"
    },
    {
        icon: "fal fa-compass",
        active: "fa fa-compass",
        label: "Projects",
        href: "/projects"
    },
    {
        icon: "fal fa-phone",
        active: "fa fa-phone",
        label: "Contact",
        href: "/contact"
    },
    {
        icon: "fal fa-file",
        active: "fa fa-file",
        label: "Resume",
        target: "_blank",
        rel: "norefferer",
        href: "https://drive.google.com/file/d/1v_6olT9s6_7RZWvQ9T5-FVP1dd2AlHSU/view"
    }
];


const Header = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full border-b-2 border-neutral-800/20 pb-2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col md:flex-row w-full items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-semibold font-Poppins text-xl",
                            children: "Wesley Luu's Portfolio"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center space-x-2",
                            children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: item.link,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "flex items-center justify-center hover:bg-neutral-700/20 rounded-xl transition-all duration-150 p-2 px-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: `${item.icon} text-3xl`
                                    })
                                }, item.link))
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center md:justify-start items-center space-x-4 py-2",
                    children: navItems.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: item.href,
                            target: item.target,
                            rel: item.rel,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                target: item.target,
                                rel: item.rel,
                                className: `flex items-center justify-center text-white/50 cursor-pointer hover:text-white/100 rounded-xl transition-all duration-150 ${router.asPath === item.href && "text-white/100"}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: `${router.asPath === item.href ? item.active : item.icon} mr-2`
                                    }),
                                    item.label
                                ]
                            })
                        }, item.label))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;