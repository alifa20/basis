/* eslint-disable */
import React, { useContext, useState, useLayoutEffect, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mem from 'mem';
import { nanoid } from 'nanoid';
import { rgba } from 'polished';
import { klona } from 'klona';
import deepMerge from 'deepmerge';
import { detailedDiff } from 'deep-object-diff';

/*! *****************************************************************************
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
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var StyledMyComponent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (p) { return p.color || 'pink'; });
var MyComponent = function (_a) {
    var text = _a.text, color = _a.color;
    return (React.createElement(StyledMyComponent, { color: color }, text));
};
var templateObject_1;

var WindowContext = React.createContext();
function WindowProvider(_a) {
    var window = _a.window, children = _a.children;
    return (React.createElement(WindowContext.Provider, { value: window }, children));
}
WindowProvider.propTypes = {
    window: PropTypes.object,
    children: PropTypes.node.isRequired,
};

var ThemeContext = React.createContext();
function useTheme() {
    var theme = useContext(ThemeContext);
    return theme;
}

function useWindow() {
    var windowFromContext = useContext(WindowContext);
    return windowFromContext !== null && windowFromContext !== void 0 ? windowFromContext : (typeof window === "undefined" ? null : window);
}

var BreakpointContext = React.createContext();
function useBreakpoint() {
    var breakpoint = useContext(BreakpointContext);
    return breakpoint;
}

function BreakpointProvider(props) {
    var children = props.children;
    var theme = useTheme();
    var windowObj = useWindow();
    var _a = useState(null), mediaQueryListMap = _a[0], setMediaQueryListMap = _a[1];
    var _b = useState(null), breakpoint = _b[0], setBreakpoint = _b[1];
    useLayoutEffect(function () {
        if (!windowObj.matchMedia) {
            return;
        }
        var mediaQueryListMap = {};
        for (var bp in theme.exclusiveMediaQueries) {
            mediaQueryListMap[bp] = windowObj.matchMedia(theme.exclusiveMediaQueries[bp]);
            if (mediaQueryListMap[bp].matches) {
                setBreakpoint(bp);
            }
        }
        setMediaQueryListMap(mediaQueryListMap);
    }, [windowObj, theme.exclusiveMediaQueries]);
    useEffect(function () {
        var mounted = true;
        var removeListeners = [];
        var _loop_1 = function (bp) {
            var mediaQueryList = mediaQueryListMap[bp];
            // eslint-disable-next-line no-loop-func
            var listener = function (event) {
                if (event.matches && mounted) {
                    setBreakpoint(bp);
                }
            };
            mediaQueryList.addListener(listener);
            removeListeners.push(function () {
                mediaQueryList.removeListener(listener);
            });
        };
        for (var bp in mediaQueryListMap) {
            _loop_1(bp);
        }
        return function () {
            mounted = false;
            removeListeners.forEach(function (fn) {
                fn();
            });
        };
    }, [mediaQueryListMap]);
    return (React.createElement(BreakpointContext.Provider, { value: breakpoint }, children));
}
BreakpointProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

var LinkContext = React.createContext();
// See: https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links
function defaultIsLinkInternal(href) {
    return /^\/(?!\/)/.test(href);
}
function LinkProvider(_a) {
    var InternalLink = _a.InternalLink, _b = _a.isLinkInternal, isLinkInternal = _b === void 0 ? defaultIsLinkInternal : _b, children = _a.children;
    return (React.createElement(LinkContext.Provider, { value: { InternalLink: InternalLink, isLinkInternal: isLinkInternal } }, children));
}
LinkProvider.propTypes = {
    InternalLink: PropTypes.elementType,
    isLinkInternal: PropTypes.func,
    children: PropTypes.node.isRequired,
};

function isObjectEmpty(obj) {
    for (var _key in obj) {
        return false;
    }
    return true;
}
/*
  ESLint complains about:
    obj.hasOwnProperty(key)
  
  See: https://eslint.org/docs/rules/no-prototype-builtins
*/
function hasOwnProperty(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
var getUniqueId = nanoid;

var TEXT_STYLES = [
    "hero",
    "heading1",
    "heading2",
    "heading3",
    "heading4",
    "heading5",
    "heading6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "legal",
    "overline",
];
var TEXT_ALIGNS = ["inherit", "left", "center", "right"];

var DEFAULT_BREAKPOINT = "default";
function getMinMediaQueries(breakpoints) {
    if (!breakpoints) {
        return {};
    }
    var result = {};
    for (var bp in breakpoints) {
        result[bp] = "@media (min-width: " + breakpoints[bp] + ")";
    }
    return result;
}
function getExclusiveMediaQueries(breakpoints) {
    var _a;
    if (!breakpoints) {
        return {};
    }
    var entries = Object.entries(breakpoints).map(function (_a) {
        var bp = _a[0], px = _a[1];
        return ({
            bp: bp,
            px: parseInt(px, 10),
        });
    });
    if (!entries[0]) {
        return {};
    }
    var result = (_a = {},
        _a[DEFAULT_BREAKPOINT] = "(max-width: " + (entries[0].px - 1) + "px)",
        _a);
    var i, len;
    for (i = 0, len = entries.length - 1; i < len; i++) {
        result[entries[i].bp] = "(min-width: " + entries[i].px + "px) and (max-width: " + (entries[i + 1].px - 1) + "px)";
    }
    result[entries[i].bp] = "(min-width: " + entries[i].px + "px)";
    return result;
}
function responsiveMargin(propsAtBreakpoint, theme) {
    var margin = theme.getSpaceValue(propsAtBreakpoint.margin);
    return margin === null ? {} : { margin: margin };
}
function responsiveTextStyle(propsAtBreakpoint, theme) {
    var css = theme.getTextStyleCSS(propsAtBreakpoint.textStyle);
    return css === null ? {} : css;
}

function getPath(obj, path) {
    var result = obj;
    var keys = path.split(".");
    for (var i = 0; i < keys.length; i++) {
        result = result[keys[i]];
        if (typeof result === "undefined") {
            return;
        }
    }
    return result;
}

function getColor(colorName, theme) {
    if (typeof colorName !== "string" || colorName === "transparent") {
        return null;
    }
    return getPath(theme.colors, colorName);
}
function getTextStyleCSS(textStyle, theme) {
    if (typeof textStyle !== "string") {
        return null;
    }
    var boldCSS = theme.textStyles[textStyle + ".bold"];
    return __assign(__assign({}, theme.textStyles[textStyle]), (boldCSS && {
        "& strong": boldCSS,
        "& b": boldCSS,
    }));
}
function getSpaceValue(space, theme) {
    if (typeof space === "number") {
        return theme.space[space] || "0px";
    }
    if (typeof space !== "string") {
        return null;
    }
    var parts = space.split(/\s+/).filter(Boolean);
    if (parts.length < 1 || parts.length > 4) {
        return null;
    }
    return parts
        .map(function (n) {
        if (n === "auto") {
            return n;
        }
        if (n[0] === "-") {
            var pxValue = theme.space[n.slice(1)];
            return pxValue ? "-" + pxValue : "0px";
        }
        return theme.space[n] || "0px";
    })
        .join(" ");
}
function memoizeGetCSS(theme) {
    var result = {};
    for (var key in theme) {
        if (typeof theme[key].getCSS === "function") {
            var _a = theme[key], getCSS = _a.getCSS, rest = __rest(_a, ["getCSS"]);
            var memoizedGetCSS = mem(getCSS, { cacheKey: JSON.stringify });
            result[key] = __assign({ getCSS: memoizedGetCSS }, rest);
        }
        else {
            result[key] = theme[key];
        }
    }
    return result;
}
function enhanceTheme(theme) {
    theme = memoizeGetCSS(theme);
    return __assign(__assign({}, theme), { minMediaQueries: getMinMediaQueries(theme.breakpoints), exclusiveMediaQueries: getExclusiveMediaQueries(theme.breakpoints), getColor: function (color) { return getColor(color, theme); }, getTextStyleCSS: function (textStyle) { return getTextStyleCSS(textStyle, theme); }, getSpaceValue: function (space) { return getSpaceValue(space, theme); } });
}

function FocusVisiblePolyfill() {
    var _a = useState(false), isKeyboardMode = _a[0], setIsKeyboardMode = _a[1];
    var onKeyDown = function () { return setIsKeyboardMode(true); };
    var onMouseDown = function () { return setIsKeyboardMode(false); };
    var window = useWindow();
    useEffect(function () {
        if (window) {
            window.addEventListener("keydown", onKeyDown);
            window.addEventListener("mousedown", onMouseDown);
        }
        return function () {
            if (window) {
                window.removeEventListener("keydown", onKeyDown);
                window.removeEventListener("mousedown", onMouseDown);
            }
        };
    }, [window]);
    useEffect(function () {
        if (window) {
            window.document.body.dataset.basisKeyboardMode = String(isKeyboardMode);
        }
    }, [window, isKeyboardMode]);
    return null;
}

function BasisProvider(_a) {
    var theme = _a.theme, window = _a.window, InternalLink = _a.InternalLink, isLinkInternal = _a.isLinkInternal, children = _a.children;
    var enhancedTheme = useMemo(function () { return enhanceTheme(theme); }, [theme]);
    return (React.createElement(ThemeContext.Provider, { value: enhancedTheme },
        React.createElement(WindowProvider, { window: window },
            React.createElement(FocusVisiblePolyfill, null),
            React.createElement(BreakpointProvider, null,
                React.createElement(LinkProvider, { InternalLink: InternalLink, isLinkInternal: isLinkInternal }, children)))));
}
BasisProvider.propTypes = {
    theme: PropTypes.object.isRequired,
    window: PropTypes.object,
    InternalLink: PropTypes.elementType,
    isLinkInternal: PropTypes.func,
    children: PropTypes.node.isRequired,
};

var accordion = (function (theme, _a) {
    var getColor = _a.getColor, getTextStyle = _a.getTextStyle;
    function getContentColor(headerColor) {
        return headerColor === "grey.t07"
            ? "grey.t03"
            : headerColor === "secondary.lightBlue.t25"
                ? "secondary.lightBlue.t15"
                : "white";
    }
    return {
        getContentColor: getContentColor,
        getCSS: function (_a) {
            var targetElement = _a.targetElement, color = _a.color, textColor = _a.textColor, itemGap = _a.itemGap, isOpen = _a.isOpen, __internal__keyboardFocus = _a.__internal__keyboardFocus;
            switch (targetElement) {
                case "headerContainer": {
                    return {
                        margin: 0,
                    };
                }
                case "headerButton": {
                    return __assign(__assign(__assign(__assign(__assign({ display: "flex", alignItems: "center", width: "100%", border: 0, borderRadius: theme.radii[0], boxSizing: "border-box", padding: theme.space[3] + " " + theme.space[4] + " " + theme.space[3] + " " + theme.space[6], textAlign: "left" }, getTextStyle({ name: "subtitle2", mode: "self-bold" })), { outline: 0 }), theme.focusStyles.focusVisible), (__internal__keyboardFocus && theme.focusStyles.__keyboardFocus)), { backgroundColor: getColor(color), color: getColor(textColor) });
                }
                case "headerContent": {
                    return {
                        display: "flex",
                        alignItems: "center",
                        flexGrow: 1,
                    };
                }
                case "headerIcon": {
                    return {
                        display: "flex",
                        marginRight: theme.space[2],
                    };
                }
                case "headerChevron": {
                    return __assign({ display: "flex", transformOrigin: "50% 50%", transition: "transform .25s ease" }, (isOpen && {
                        transform: "translateZ(0) rotate(180deg)",
                    }));
                }
                case "content": {
                    return {
                        textAlign: "left",
                        backgroundColor: getColor(getContentColor(color)),
                        padding: theme.space[4] + " " + theme.space[11] + " " + theme.space[4] + " " + theme.space[6],
                    };
                }
                case "item": {
                    return {
                        ":not(:first-of-type)": {
                            marginTop: itemGap === "small"
                                ? "1px" // This is an exception to our space scale
                                : theme.space[1],
                        },
                    };
                }
                default: {
                    return null;
                }
            }
        },
    };
});

var button = (function (theme) {
    function addStates(css, _a) {
        var hover = _a.hover, active = _a.active, loading = _a.loading, showLoadingIcon = _a.showLoadingIcon, disabled = _a.disabled, __internal__hover = _a.__internal__hover, __internal__active = _a.__internal__active;
        if (showLoadingIcon) {
            return __assign(__assign({}, css), loading);
        }
        return __assign(__assign(__assign(__assign(__assign(__assign({}, css), { ":hover:not(:disabled)": hover }), (__internal__hover && hover)), { ":active:not(:disabled)": active }), (__internal__active && active)), (disabled && {
            ":disabled": __assign(__assign({}, css[":disabled"]), disabled),
        }));
    }
    return {
        getCSS: function (_a) {
            var targetElement = _a.targetElement, variant = _a.variant, color = _a.color, showLoadingIcon = _a.showLoadingIcon, __internal__keyboardFocus = _a.__internal__keyboardFocus, __internal__hover = _a.__internal__hover, __internal__active = _a.__internal__active;
            switch (targetElement) {
                case "button": {
                    var css = __assign(__assign(__assign({ position: "relative", fontSize: theme.fontSizes[2], lineHeight: theme.lineHeights[3], fontFamily: theme.fonts.body, fontWeight: theme.fontWeights.medium, margin: 0, border: 0, padding: "0 " + theme.space[6], minHeight: "48px", overflow: "hidden", transition: theme.transitions.button, borderRadius: theme.radii[1], outline: 0 }, theme.focusStyles.focusVisible), (__internal__keyboardFocus && theme.focusStyles.__keyboardFocus)), (!showLoadingIcon && {
                        ":disabled": {
                            backgroundColor: theme.colors.grey.t30,
                            color: theme.colors.grey.t75,
                            opacity: 0.7,
                            cursor: "not-allowed",
                        },
                    }));
                    switch (true) {
                        case variant === "primary" && color === "highlight.blue.t100": {
                            css = addStates(__assign(__assign({}, css), { backgroundColor: theme.colors.highlight.blue.t100, color: theme.colors.white }), {
                                hover: {
                                    backgroundColor: theme.colors.primary.blue.t100,
                                    color: theme.colors.white,
                                },
                                active: {
                                    backgroundColor: theme.colors.primary.blue.t100,
                                    color: theme.colors.white,
                                },
                                loading: {
                                    backgroundColor: "transparent",
                                    borderWidth: theme.borderWidths[0],
                                    borderStyle: "solid",
                                    borderColor: rgba(theme.colors.black, 0.35),
                                    cursor: "progress",
                                },
                                showLoadingIcon: showLoadingIcon,
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            });
                            break;
                        }
                        case variant === "primary" && color === "white": {
                            css = addStates(__assign(__assign({}, css), { backgroundColor: theme.colors.white, color: theme.colors.highlight.blue.t100 }), {
                                hover: {
                                    backgroundColor: theme.colors.secondary.lightBlue.t25,
                                    color: theme.colors.primary.blue.t100,
                                },
                                active: {
                                    backgroundColor: theme.colors.secondary.lightBlue.t25,
                                    color: theme.colors.primary.blue.t100,
                                },
                                loading: {
                                    backgroundColor: "transparent",
                                    borderWidth: theme.borderWidths[0],
                                    borderStyle: "solid",
                                    borderColor: rgba(theme.colors.white, 0.35),
                                    cursor: "progress",
                                },
                                showLoadingIcon: showLoadingIcon,
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            });
                            break;
                        }
                        case variant === "primary" && color === "green": {
                            css = addStates(__assign(__assign({}, css), { backgroundColor: "#21a637", color: theme.colors.white }), {
                                hover: {
                                    backgroundColor: "#007414",
                                    color: theme.colors.white,
                                },
                                active: {
                                    backgroundColor: "#007414",
                                    color: theme.colors.white,
                                },
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            });
                            break;
                        }
                        case variant === "secondary" && color === "highlight.blue.t100": {
                            css = addStates(__assign(__assign({}, css), { backgroundColor: "transparent", color: theme.colors.highlight.blue.t100, borderWidth: theme.borderWidths[0], borderStyle: "solid", borderColor: theme.colors.highlight.blue.t100 }), {
                                hover: {
                                    backgroundColor: theme.colors.highlight.blue.t100,
                                    color: theme.colors.white,
                                },
                                active: {
                                    backgroundColor: theme.colors.highlight.blue.t100,
                                    color: theme.colors.white,
                                },
                                loading: {
                                    backgroundColor: "transparent",
                                    borderWidth: theme.borderWidths[0],
                                    borderStyle: "solid",
                                    borderColor: rgba(theme.colors.black, 0.35),
                                    cursor: "progress",
                                },
                                showLoadingIcon: showLoadingIcon,
                                disabled: {
                                    borderColor: theme.colors.grey.t65,
                                },
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            });
                            break;
                        }
                        case variant === "secondary" && color === "black": {
                            css = addStates(__assign(__assign({}, css), { backgroundColor: "transparent", color: theme.colors.black, borderWidth: theme.borderWidths[0], borderStyle: "solid", borderColor: theme.colors.black }), {
                                hover: {
                                    backgroundColor: theme.colors.highlight.blue.t100,
                                    color: theme.colors.white,
                                    borderColor: theme.colors.highlight.blue.t100,
                                },
                                active: {
                                    backgroundColor: theme.colors.highlight.blue.t100,
                                    color: theme.colors.white,
                                    borderColor: theme.colors.highlight.blue.t100,
                                },
                                loading: {
                                    backgroundColor: "transparent",
                                    borderWidth: theme.borderWidths[0],
                                    borderStyle: "solid",
                                    borderColor: rgba(theme.colors.black, 0.35),
                                    cursor: "progress",
                                },
                                showLoadingIcon: showLoadingIcon,
                                disabled: {
                                    borderColor: theme.colors.grey.t65,
                                },
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            });
                            break;
                        }
                        case variant === "secondary" && color === "white": {
                            css = addStates(__assign(__assign({}, css), { backgroundColor: "transparent", color: theme.colors.white, borderWidth: theme.borderWidths[0], borderStyle: "solid", borderColor: theme.colors.white }), {
                                hover: {
                                    backgroundColor: theme.colors.white,
                                    color: theme.colors.highlight.blue.t100,
                                },
                                active: {
                                    backgroundColor: theme.colors.white,
                                    color: theme.colors.highlight.blue.t100,
                                },
                                loading: {
                                    backgroundColor: "transparent",
                                    borderWidth: theme.borderWidths[0],
                                    borderStyle: "solid",
                                    borderColor: rgba(theme.colors.white, 0.35),
                                    cursor: "progress",
                                },
                                showLoadingIcon: showLoadingIcon,
                                disabled: {
                                    backgroundColor: theme.colors.grey.t30,
                                },
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            });
                            break;
                        }
                        case variant === "icon": {
                            css = addStates(__assign(__assign({}, css), { display: "flex", alignItems: "center", padding: "0 " + theme.space[2], backgroundColor: "transparent" }), {
                                hover: {
                                    backgroundColor: theme.colors.grey.t10,
                                },
                                active: {
                                    backgroundColor: theme.colors.grey.t10,
                                },
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            });
                            break;
                        }
                    }
                    return css;
                }
                case "loadingIcon": {
                    return {
                        position: "absolute",
                        top: "calc(50% - 10px)",
                        left: "calc(50% - 10px)",
                    };
                }
                case "content": {
                    if (showLoadingIcon) {
                        return {
                            opacity: 0,
                        };
                    }
                    return {};
                }
                default: {
                    return {};
                }
            }
        },
    };
});

var checkbox = (function (theme, _a) {
    var getColor = _a.getColor;
    return {
        getCSS: function (_a) {
            var targetElement = _a.targetElement, color = _a.color, isChecked = _a.isChecked, __internal__keyboardFocus = _a.__internal__keyboardFocus;
            switch (targetElement) {
                case "container": {
                    return {
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                    };
                }
                case "input": {
                    return __assign(__assign({}, theme.focusStyles.focusVisibleAdjacentLabel), { ":checked + label": {
                            backgroundColor: theme.colors.secondary.lightBlue.t25,
                            color: theme.colors.primary.blue.t100,
                        } });
                }
                case "label": {
                    return __assign({ display: "inline-flex", alignItems: "flex-start", padding: theme.space[3] + " " + theme.space[4], minHeight: "24px", fontSize: theme.fontSizes[1], fontWeight: theme.fontWeights.light, lineHeight: theme.lineHeights[2], fontFamily: theme.fonts.body, color: theme.colors.black, backgroundColor: getColor(color), borderRadius: theme.radii[0] }, (__internal__keyboardFocus &&
                        theme.focusStyles.__keyboardFocusAdjacentLabel));
                }
                case "svg": {
                    return {
                        flexShrink: 0,
                        width: "24px",
                        height: "24px",
                        marginRight: theme.space[3],
                    };
                }
                case "svgRect": {
                    return {
                        fill: getColor(color === "grey.t05" || isChecked
                            ? "white"
                            : "secondary.lightBlue.t25"),
                    };
                }
                case "svgPath": {
                    return {
                        stroke: theme.colors.primary.blue.t100,
                    };
                }
                default: {
                    return null;
                }
            }
        },
    };
});

var dropdown = (function (theme, _a) {
    var getColor = _a.getColor;
    return {
        getCSS: function (_a) {
            var targetElement = _a.targetElement, color = _a.color, isPlaceholder = _a.isPlaceholder, isHighlighted = _a.isHighlighted, __internal__focus = _a.__internal__focus;
            switch (targetElement) {
                case "container": {
                    return {
                        position: "relative",
                    };
                }
                case "button": {
                    return __assign(__assign(__assign(__assign({ display: "flex", alignItems: "center", boxSizing: "border-box", padding: theme.space[4], width: "100%", color: theme.colors.black, backgroundColor: getColor(color), textAlign: "left", margin: 0, border: 0, borderRadius: theme.radii[0], outline: 0 }, theme.focusStyles.focusVisible), (isPlaceholder && {
                        padding: theme.space[2] + " " + theme.space[4],
                    })), (__internal__focus && theme.focusStyles.__keyboardFocus)), { 
                        // See: https://stackoverflow.com/a/199319/247243
                        "::-moz-focus-inner": {
                            border: 0,
                        } });
                }
                case "buttonContent": {
                    return {
                        display: "flex",
                        alignItems: "center",
                        flexGrow: 1,
                    };
                }
                case "buttonChevron": {
                    return {
                        display: "flex",
                        transformOrigin: "50% 50%",
                        transition: "transform .25s ease",
                    };
                }
                case "options": {
                    return {
                        position: "absolute",
                        width: "100%",
                        margin: 0,
                        padding: 0,
                        backgroundColor: theme.colors.white,
                        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.3)",
                        overflowY: "auto",
                        zIndex: theme.zIndices.dropdown,
                        ":focus": {
                            outline: 0,
                        },
                    };
                }
                case "option": {
                    return __assign({ listStyleType: "none", padding: theme.space[4], borderTop: theme.borderWidths[0] + " solid " + theme.colors.grey.t10, cursor: "default" }, (isHighlighted && {
                        backgroundColor: theme.colors.secondary.lightBlue.t25,
                    }));
                }
                default: {
                    return null;
                }
            }
        },
    };
});

var field = (function (theme) {
    return {
        getCSS: function (_a) {
            var targetElement = _a.targetElement, fullWidth = _a.fullWidth, disabled = _a.disabled;
            switch (targetElement) {
                case "fieldContainer": {
                    return __assign(__assign({ display: "inline-flex", flexDirection: "column", position: "relative" }, (fullWidth && {
                        display: "flex",
                        width: "100%",
                        minWidth: 0, // See: https://stackoverflow.com/a/36247448/247243
                    })), (disabled && { opacity: 0.5 }));
                }
                case "label": {
                    return {
                        display: "flex",
                        fontFamily: theme.fonts.body,
                        fontSize: theme.fontSizes[1],
                        fontWeight: theme.fontWeights.medium,
                        lineHeight: theme.lineHeights[2],
                        color: theme.colors.grey.t75,
                        marginBottom: theme.space[2],
                    };
                }
                case "optionalTag": {
                    return {
                        alignSelf: "flex-end",
                        fontSize: theme.fontSizes[0],
                        lineHeight: theme.lineHeights[0],
                        paddingLeft: theme.space[2],
                        paddingRight: theme.space[2],
                        border: theme.borderWidths[1] + " solid " + theme.colors.grey.t75,
                        borderRadius: theme.radii[2],
                        opacity: 0.66,
                        marginLeft: "auto",
                    };
                }
                case "helpText": {
                    return {
                        paddingTop: theme.space[2],
                    };
                }
                case "errorsContainer": {
                    return {
                        paddingTop: theme.space[1],
                        borderTop: theme.borderWidths[2] + " solid " + theme.colors.conditional.negative.graphics,
                        zIndex: 1,
                    };
                }
                default: {
                    return null;
                }
            }
        },
    };
});

var input = (function (theme, _a) {
    var getColor = _a.getColor;
    return {
        getCSS: function (_a) {
            var targetElement = _a.targetElement, variant = _a.variant, prefix = _a.prefix, suffix = _a.suffix, color = _a.color, __internal__focus = _a.__internal__focus;
            var hasPrefix = ["numeric", "decimal"].includes(variant) && prefix;
            var hasSuffix = ["numeric", "decimal"].includes(variant) && suffix;
            switch (targetElement) {
                case "inputContainer": {
                    return __assign(__assign({ position: "relative", fontSize: theme.fontSizes[1], fontWeight: theme.fontWeights.light, lineHeight: theme.lineHeights[2], fontFamily: theme.fonts.body, color: theme.colors.black }, (hasPrefix && {
                        "::before": {
                            content: "\"" + prefix + "\"",
                            position: "absolute",
                            top: "13px",
                            left: theme.space[4],
                        },
                    })), (hasSuffix && {
                        "::after": {
                            content: "\"" + suffix + "\"",
                            position: "absolute",
                            top: "13px",
                            right: theme.space[4],
                        },
                    }));
                }
                case "input": {
                    var focusStyle = {
                        outline: 0,
                        borderRadius: theme.radii[0],
                        boxShadow: theme.shadows.focus,
                    };
                    return __assign({ boxSizing: "border-box", width: "100%", height: "48px", border: 0, margin: 0, paddingTop: 0, paddingBottom: 0, fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", fontFamily: "inherit", color: "inherit", backgroundColor: getColor(color), paddingLeft: hasPrefix
                            ? "calc(" + theme.space[4] + " + " + (prefix.length + 1) + "ch)"
                            : theme.space[4], paddingRight: hasSuffix
                            ? "calc(" + theme.space[4] + " + " + (suffix.length + 1) + "ch)"
                            : theme.space[4], ":focus": focusStyle }, (__internal__focus && focusStyle));
                }
                default: {
                    return null;
                }
            }
        },
    };
});

var link = (function (theme) {
    function addStates(css, _a) {
        var hover = _a.hover, active = _a.active, __internal__hover = _a.__internal__hover, __internal__active = _a.__internal__active;
        return __assign(__assign(__assign(__assign(__assign({}, css), { ":hover": hover }), (__internal__hover && hover)), { ":active": active }), (__internal__active && active));
    }
    function getButtonCSS(css) {
        return __assign(__assign({}, css), { display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", boxSizing: "border-box", width: "100%" });
    }
    return {
        getCSS: function (_a) {
            var targetElement = _a.targetElement, appearance = _a.appearance, variant = _a.variant, buttonTheme = _a.buttonTheme, __internal__keyboardFocus = _a.__internal__keyboardFocus, __internal__hover = _a.__internal__hover, __internal__active = _a.__internal__active;
            switch (targetElement) {
                case "anchor": {
                    return __assign(__assign({ textDecoration: "none", borderRadius: theme.radii[1], outline: 0, display: ["primary-button", "secondary-button", "icon"].includes(appearance)
                            ? "inline-flex"
                            : null, verticalAlign: appearance === "icon" ? "top" : null }, theme.focusStyles.focusVisible), (__internal__keyboardFocus && theme.focusStyles.__keyboardFocus));
                }
                case "span": {
                    switch (variant) {
                        case "light-bg": {
                            return addStates({
                                fontFamily: theme.fonts.body,
                                fontWeight: theme.fontWeights.light,
                                borderBottomWidth: theme.borderWidths[0],
                                borderBottomStyle: "solid",
                                transition: theme.transitions.link,
                                color: theme.colors.primary.blue.t100,
                                borderBottomColor: rgba(theme.colors.primary.blue.t100, 0.5),
                            }, {
                                hover: {
                                    borderBottomColor: theme.colors.primary.blue.t100,
                                    backgroundColor: theme.colors.secondary.lightBlue.t25,
                                },
                                active: {
                                    borderBottomColor: theme.colors.primary.blue.t100,
                                    backgroundColor: theme.colors.secondary.lightBlue.t25,
                                },
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            });
                        }
                        case "medium-bg": {
                            return addStates({
                                fontFamily: theme.fonts.body,
                                fontWeight: theme.fontWeights.light,
                                borderBottomWidth: theme.borderWidths[0],
                                borderBottomStyle: "solid",
                                transition: theme.transitions.link,
                                color: theme.colors.primary.blue.t100,
                                borderBottomColor: rgba(theme.colors.primary.blue.t100, 0.5),
                            }, {
                                hover: {
                                    borderBottomColor: theme.colors.primary.blue.t100,
                                    backgroundColor: theme.colors.white,
                                },
                                active: {
                                    borderBottomColor: theme.colors.primary.blue.t100,
                                    backgroundColor: theme.colors.white,
                                },
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            });
                        }
                        case "dark-bg": {
                            return addStates({
                                fontFamily: theme.fonts.body,
                                fontWeight: theme.fontWeights.light,
                                borderBottomWidth: theme.borderWidths[0],
                                borderBottomStyle: "solid",
                                transition: theme.transitions.link,
                                color: theme.colors.white,
                                borderBottomColor: rgba(theme.colors.white, 0.5),
                            }, {
                                hover: {
                                    borderBottomColor: theme.colors.secondary.lightBlue.t25,
                                    backgroundColor: rgba(theme.colors.black, 0.45),
                                },
                                active: {
                                    borderBottomColor: theme.colors.secondary.lightBlue.t25,
                                    backgroundColor: rgba(theme.colors.black, 0.45),
                                },
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            });
                        }
                        case "blue-button": {
                            return getButtonCSS(buttonTheme.getCSS({
                                targetElement: "button",
                                variant: appearance === "primary-button" ? "primary" : "secondary",
                                color: "highlight.blue.t100",
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            }));
                        }
                        case "white-button": {
                            return getButtonCSS(buttonTheme.getCSS({
                                targetElement: "button",
                                variant: appearance === "primary-button" ? "primary" : "secondary",
                                color: "white",
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            }));
                        }
                        case "black-button": {
                            return getButtonCSS(buttonTheme.getCSS({
                                targetElement: "button",
                                variant: "secondary",
                                color: "black",
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            }));
                        }
                        case "green-button": {
                            return getButtonCSS(buttonTheme.getCSS({
                                targetElement: "button",
                                variant: "primary",
                                color: "green",
                                __internal__hover: __internal__hover,
                                __internal__active: __internal__active,
                            }));
                        }
                    }
                    return {};
                }
                default: {
                    return {};
                }
            }
        },
    };
});

var list = (function (theme, _a) {
    var getTextStyle = _a.getTextStyle;
    return {
        getCSS: function (_a) {
            var targetElement = _a.targetElement, type = _a.type, variant = _a.variant, textStyle = _a.textStyle;
            switch (targetElement) {
                case "list": {
                    return __assign(__assign(__assign(__assign(__assign({ margin: 0, listStyleType: "none" }, (type === "unordered" && {
                        paddingLeft: "1.25em",
                    })), (type === "ordered" && {
                        counterReset: "ordered",
                        paddingLeft: "1.25em",
                    })), (type === "steps" && {
                        counterReset: "steps",
                        padding: "0.25em 0 0.25em 2.5em",
                    })), getTextStyle({ name: textStyle, mode: "container" })), { color: theme.colors.black });
                }
                case "item": {
                    switch (type) {
                        case "unordered": {
                            return {
                                position: "relative",
                                ":not(:first-of-type)": {
                                    marginTop: textStyle === "subtitle1"
                                        ? theme.space[4]
                                        : textStyle === "subtitle2"
                                            ? theme.space[3]
                                            : theme.space[2],
                                },
                                "::before": {
                                    content: '""',
                                    width: "0.5em",
                                    height: "0.5em",
                                    borderRadius: theme.radii[3],
                                    position: "absolute",
                                    top: "0.5em",
                                    left: "-1.25em",
                                    backgroundColor: variant === "danger"
                                        ? theme.colors.conditional.negative.graphics
                                        : theme.colors.secondary.lightBlue.t100,
                                },
                                "& ul, & ol": {
                                    marginTop: "0.5em",
                                },
                                "&:not(:last-of-type) ul, &:not(:last-of-type) ol": {
                                    marginBottom: "1em",
                                },
                            };
                        }
                        case "ordered": {
                            return {
                                position: "relative",
                                counterIncrement: "ordered",
                                ":not(:first-of-type)": {
                                    marginTop: textStyle === "subtitle1"
                                        ? theme.space[4]
                                        : textStyle === "subtitle2"
                                            ? theme.space[3]
                                            : theme.space[2],
                                },
                                "::before": {
                                    content: 'counter(ordered, decimal) ". "',
                                    position: "absolute",
                                    top: 0,
                                    left: "-1.25em",
                                },
                                "& ul, & ol": {
                                    marginTop: "0.5em",
                                },
                                "&:not(:last-of-type) ul, &:not(:last-of-type) ol": {
                                    marginBottom: "1em",
                                },
                                "& ol li::before": {
                                    content: 'counter(ordered, lower-alpha) ". "',
                                },
                                "& ol ol li::before": {
                                    content: 'counter(ordered, lower-roman) ". "',
                                },
                            };
                        }
                        case "steps": {
                            return {
                                position: "relative",
                                counterIncrement: "steps",
                                marginBottom: "1.4em",
                                ":last-of-type": {
                                    marginBottom: 0,
                                },
                                "::before": {
                                    content: "counter(steps, decimal)",
                                    width: "2em",
                                    height: "2em",
                                    lineHeight: "2em",
                                    color: theme.colors.white,
                                    backgroundColor: theme.colors.primary.blue.t100,
                                    fontWeight: theme.fontWeights.medium,
                                    textAlign: "center",
                                    borderRadius: theme.radii[3],
                                    position: "absolute",
                                    top: "-0.25em",
                                    left: "-2.5em",
                                },
                                "& ul, & ol": {
                                    marginTop: "1em",
                                },
                                "&:not(:last-of-type) ul, &:not(:last-of-type) ol": {
                                    marginBottom: "1.25em",
                                },
                                "& ol li::before": {
                                    content: "counter(steps, lower-alpha)",
                                    color: theme.colors.black,
                                    backgroundColor: theme.colors.secondary.lightBlue.t100,
                                },
                            };
                        }
                        default: {
                            return null;
                        }
                    }
                }
                default: {
                    return null;
                }
            }
        },
    };
});

var radioGroup = (function (theme, _a) {
    var getColor = _a.getColor, getTextStyle = _a.getTextStyle;
    return {
        getCSS: function (_a) {
            var targetElement = _a.targetElement, color = _a.color, isChecked = _a.isChecked;
            switch (targetElement) {
                case "radio": {
                    return {
                        display: "flex",
                        flexDirection: "column",
                    };
                }
                case "radioInput": {
                    return __assign(__assign({}, theme.focusStyles.focusVisibleAdjacentLabel), { ":checked + label": {
                            backgroundColor: theme.colors.secondary.lightBlue.t25,
                            color: theme.colors.primary.blue.t100,
                        } });
                }
                case "radioLabel": {
                    return __assign(__assign({ display: "inline-flex", alignItems: "flex-start", padding: theme.space[3] + " " + theme.space[4], minHeight: "24px" }, getTextStyle({ name: "body1", mode: "container" })), { color: theme.colors.black, backgroundColor: getColor(color), borderRadius: theme.radii[0] });
                }
                case "circleSvg": {
                    return {
                        flexShrink: 0,
                        width: "24px",
                        height: "24px",
                        marginRight: theme.space[3],
                    };
                }
                case "outerCircle": {
                    return {
                        fill: getColor(color === "grey.t05" || isChecked
                            ? "white"
                            : "secondary.lightBlue.t25"),
                    };
                }
                case "innerCircle": {
                    return {
                        fill: theme.colors.primary.blue.t100,
                    };
                }
                case "description": {
                    return {
                        marginTop: theme.space[1],
                    };
                }
                default: {
                    return null;
                }
            }
        },
    };
});

var select = (function (theme, _a) {
    var getColor = _a.getColor;
    return {
        getCSS: function (_a) {
            var color = _a.color, fullWidth = _a.fullWidth, __internal__focus = _a.__internal__focus;
            var focusStyle = {
                outline: 0,
                borderRadius: theme.radii[0],
                boxShadow: theme.shadows.focus,
            };
            return __assign({ display: "inline-block", fontSize: theme.fontSizes[1], fontWeight: theme.fontWeights.light, lineHeight: theme.lineHeights[2], fontFamily: theme.fonts.body, color: theme.colors.black, width: fullWidth ? "100%" : null, height: "48px", paddingLeft: theme.space[4], paddingRight: theme.space[10], margin: 0, border: 0, borderRadius: 0, appearance: "none", backgroundColor: getColor(color), backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' role='img' aria-label='Triangle down'%3E%3Cpath d='M20.747 14.509l-4.181 4.25a.786.786 0 01-1.132 0l-4.179-4.247a.885.885 0 01-.231-.827c.07-.3.287-.536.569-.62.282-.084 8.607-.101 8.912.035a.86.86 0 01.495.802.874.874 0 01-.253.607z' fill='%23000'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right " + theme.space[4] + " top 50%", alignSelf: "flex-start", 
                // See: https://stackoverflow.com/a/19451423/247243
                ":-moz-focusring": {
                    color: "transparent",
                    textShadow: "0 0 0 #000",
                }, ":focus": focusStyle }, (__internal__focus && focusStyle));
        },
    };
});

var stepper = (function (theme) {
    return {
        getCSS: function (_a) {
            var targetElement = _a.targetElement, stepsCount = _a.stepsCount, isMinor = _a.isMinor, isCurrent = _a.isCurrent, isPrevious = _a.isPrevious;
            switch (targetElement) {
                case "container": {
                    return {
                        display: "flex",
                    };
                }
                case "item": {
                    return {
                        paddingTop: theme.space[4],
                        paddingBottom: theme.space[4],
                        width: 100 / stepsCount + "%",
                    };
                }
                case "labelContainer": {
                    return {
                        display: "flex",
                        height: "20px",
                    };
                }
                case "label": {
                    return {
                        position: "relative",
                        left: "50%",
                        transform: "translateX(-50%)",
                        whiteSpace: "nowrap",
                    };
                }
                case "itemContent": {
                    return {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "40px",
                        marginTop: theme.space[2],
                        position: "relative",
                    };
                }
                case "progressLeft": {
                    return {
                        position: "absolute",
                        left: 0,
                        width: "50%",
                        height: "8px",
                        top: "calc(50% - 4px)",
                        backgroundColor: isPrevious || isCurrent
                            ? theme.colors.primary.blue.t100
                            : theme.colors.white,
                    };
                }
                case "progressRight": {
                    return {
                        position: "absolute",
                        left: "50%",
                        width: "50%",
                        height: "8px",
                        top: "calc(50% - 4px)",
                        backgroundColor: isPrevious
                            ? theme.colors.primary.blue.t100
                            : theme.colors.white,
                    };
                }
                case "circle": {
                    return __assign(__assign(__assign({ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: theme.radii[3], backgroundColor: theme.colors.white, color: theme.colors.black, boxSizing: "border-box", flexShrink: 0, zIndex: 1 }, (isMinor && {
                        width: "20px",
                        height: "20px",
                    })), (isCurrent && {
                        border: theme.borderWidths[1] + " solid " + theme.colors.primary.blue.t100,
                    })), (isPrevious && {
                        backgroundColor: theme.colors.primary.blue.t100,
                    }));
                }
                default: {
                    return null;
                }
            }
        },
    };
});

var text = (function (theme, _a) {
    var getColor = _a.getColor;
    return {
        getCSS: function (_a) {
            var color = _a.color, align = _a.align, wrap = _a.wrap;
            return __assign({ margin: 0, color: getColor(color), textAlign: align }, (!wrap && {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            }));
        },
    };
});

var textarea = (function (theme, _a) {
    var getColor = _a.getColor;
    return {
        getCSS: function (_a) {
            var color = _a.color, __internal__focus = _a.__internal__focus;
            var focusStyle = {
                outline: 0,
                borderRadius: theme.radii[0],
                boxShadow: theme.shadows.focus,
            };
            return __assign({ boxSizing: "border-box", width: "100%", minHeight: "60px", resize: "vertical", border: 0, margin: 0, fontSize: theme.fontSizes[1], fontWeight: theme.fontWeights.light, lineHeight: theme.lineHeights[2], fontFamily: theme.fonts.body, color: theme.colors.black, backgroundColor: getColor(color), padding: theme.space[2] + " " + theme.space[4], ":focus": focusStyle }, (__internal__focus && focusStyle));
        },
    };
});

var textStyles = (function (theme) { return ({
    hero: {
        fontFamily: theme.fonts.heading,
        fontWeight: theme.fontWeights.semiBold,
        fontSize: theme.fontSizes[8],
        lineHeight: theme.lineHeights[7],
        letterSpacing: theme.letterSpacings.hero,
    },
    // This is needed in order to override browser's default
    "hero.bold": {
        fontWeight: theme.fontWeights.semiBold,
    },
    heading1: {
        fontFamily: theme.fonts.heading,
        fontWeight: theme.fontWeights.semiBold,
        fontSize: theme.fontSizes[7],
        lineHeight: theme.lineHeights[6],
        letterSpacing: theme.letterSpacings.heading1,
    },
    "heading1.bold": {
        fontWeight: theme.fontWeights.semiBold,
    },
    heading2: {
        fontFamily: theme.fonts.heading,
        fontWeight: theme.fontWeights.semiBold,
        fontSize: theme.fontSizes[6],
        lineHeight: theme.lineHeights[5],
        letterSpacing: theme.letterSpacings.heading2,
    },
    "heading2.bold": {
        fontWeight: theme.fontWeights.semiBold,
    },
    heading3: {
        fontFamily: theme.fonts.heading,
        fontWeight: theme.fontWeights.semiBold,
        fontSize: theme.fontSizes[5],
        lineHeight: theme.lineHeights[4],
        letterSpacing: theme.letterSpacings.heading3,
    },
    "heading3.bold": {
        fontWeight: theme.fontWeights.semiBold,
    },
    heading4: {
        fontFamily: theme.fonts.heading,
        fontWeight: theme.fontWeights.semiBold,
        fontSize: theme.fontSizes[4],
        lineHeight: theme.lineHeights[3],
        letterSpacing: theme.letterSpacings.heading4,
    },
    "heading4.bold": {
        fontWeight: theme.fontWeights.semiBold,
    },
    heading5: {
        fontFamily: theme.fonts.heading,
        fontWeight: theme.fontWeights.semiBold,
        fontSize: theme.fontSizes[3],
        lineHeight: theme.lineHeights[2],
        letterSpacing: theme.letterSpacings.heading5,
    },
    "heading5.bold": {
        fontWeight: theme.fontWeights.semiBold,
    },
    heading6: {
        fontFamily: theme.fonts.heading,
        fontWeight: theme.fontWeights.semiBold,
        fontSize: theme.fontSizes[1],
        lineHeight: theme.lineHeights[1],
        letterSpacing: theme.letterSpacings.heading6,
    },
    "heading6.bold": {
        fontWeight: theme.fontWeights.semiBold,
    },
    subtitle1: {
        fontFamily: theme.fonts.body,
        fontWeight: theme.fontWeights.light,
        fontSize: theme.fontSizes[4],
        lineHeight: theme.lineHeights[4],
        letterSpacing: theme.letterSpacings.body,
    },
    "subtitle1.bold": {
        fontWeight: theme.fontWeights.medium,
    },
    subtitle2: {
        fontFamily: theme.fonts.body,
        fontWeight: theme.fontWeights.light,
        fontSize: theme.fontSizes[2],
        lineHeight: theme.lineHeights[3],
        letterSpacing: theme.letterSpacings.body,
    },
    "subtitle2.bold": {
        fontWeight: theme.fontWeights.medium,
    },
    body1: {
        fontFamily: theme.fonts.body,
        fontWeight: theme.fontWeights.light,
        fontSize: theme.fontSizes[1],
        lineHeight: theme.lineHeights[2],
        letterSpacing: theme.letterSpacings.body,
    },
    "body1.bold": {
        fontWeight: theme.fontWeights.medium,
    },
    body2: {
        fontFamily: theme.fonts.body,
        fontWeight: theme.fontWeights.light,
        fontSize: theme.fontSizes[0],
        lineHeight: theme.lineHeights[0],
        letterSpacing: theme.letterSpacings.body,
    },
    "body2.bold": {
        fontWeight: theme.fontWeights.medium,
    },
    legal: {
        fontFamily: theme.fonts.body,
        fontWeight: theme.fontWeights.light,
        fontSize: theme.fontSizes[0],
        lineHeight: theme.lineHeights[2],
        letterSpacing: theme.letterSpacings.body,
    },
    "legal.bold": {
        fontWeight: theme.fontWeights.medium,
    },
    overline: {
        fontFamily: theme.fonts.body,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes[0],
        lineHeight: theme.lineHeights[0],
        letterSpacing: theme.letterSpacings.overline,
        textTransform: "uppercase",
    },
    "overline.bold": {
        fontWeight: theme.fontWeights.bold,
    },
}); });

var theme = {
    // margin, padding
    space: [
        "0px",
        "4px",
        "8px",
        "12px",
        "16px",
        "20px",
        "24px",
        "28px",
        "32px",
        "36px",
        "40px",
        "48px",
        "56px",
        "64px",
        "72px", // 14
    ],
    fontSizes: [
        "14px",
        "16px",
        "18px",
        "20px",
        "24px",
        "32px",
        "40px",
        "48px",
        "104px", // 8
    ],
    lineHeights: [
        "20px",
        "22px",
        "24px",
        "28px",
        "36px",
        "48px",
        "56px",
        "120px", // 7
    ],
    letterSpacings: {
        hero: "-2.28px",
        heading1: "-1.05px",
        heading2: "-0.88px",
        heading3: "-0.7px",
        heading4: "-0.52px",
        heading5: "-0.44px",
        heading6: "-0.35px",
        body: "0px",
        overline: "2.6px",
    },
    fonts: {
        heading: "'Montserrat', sans-serif",
        body: "'Roboto', sans-serif",
    },
    fontWeights: {
        light: 300,
        medium: 500,
        semiBold: 600,
        bold: 700,
    },
    colors: {
        black: "#000000",
        grey: {
            t75: "#414141",
            t65: "#595959",
            t30: "#b2b2b2",
            t16: "#d6d6d6",
            t10: "#e5e5e5",
            t07: "#ececec",
            t05: "#f2f2f2",
            t03: "#f8f8f8",
        },
        white: "#ffffff",
        primary: {
            blue: {
                t100: "#0046aa",
                t80: "#336bbb",
                t60: "#7fa2d4",
                t30: "#b2c7e5",
                t10: "#e5ecf6",
            },
        },
        secondary: {
            lightBlue: {
                t100: "#63b8ff",
                t80: "#82c6ff",
                t60: "#b1dbff",
                t25: "#d8edff",
                t15: "#eff7ff",
            },
            pink: {
                t100: "#ff94ca",
                t80: "#ffa9d5",
                t60: "#ffc9e4",
                t30: "#ffdeef",
                t15: "#fff4f9",
            },
            purple: {
                t100: "#aba7f6",
                t80: "#bcb9f8",
                t60: "#d5d3fa",
                t30: "#e5e4fc",
                t15: "#f6f6fe",
            },
            turquoise: {
                t100: "#0fdbf3",
                t80: "#3fe2f5",
                t60: "#87edf9",
                t30: "#b7f4fb",
                t10: "#e7fbfd",
            },
        },
        highlight: {
            blue: {
                t100: "#006aff",
                t80: "#337ef8",
                t50: "#4693fa",
                t30: "#52a0fb",
                t15: "#54acff",
            },
            pink: {
                t100: "#c31b6c",
                t80: "#cf337f",
                t50: "#e1589b",
                t30: "#ed6fae",
                t15: "#f682bc",
            },
            purple: {
                t100: "#7a65d4",
                t80: "#8472db",
                t50: "#9386e5",
                t30: "#9c93ec",
                t15: "#a49df1",
            },
        },
        conditional: {
            positive: {
                graphics: "#1a8450",
                text: "#1b633c",
            },
            attention: {
                graphics: "#f9b845",
                text: "#414141",
            },
            negative: {
                graphics: "#cf000f",
                text: "#b3000c",
            },
        },
    },
    borderWidths: ["1px", "2px", "4px"],
    radii: ["1px", "4px", "12px", "50%"],
    breakpoints: {
        xs: "375px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
    },
    breakpointMaxWidths: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
    },
    transitions: {
        button: "background-color 150ms ease, color 150ms ease",
        link: "background-color 200ms ease-out, border-bottom-color 200ms ease-out",
        icon: "fill 200ms ease-out",
    },
    zIndices: {
        aboveNormalFlow: 1,
        stickyItem: 100,
        dropdown: 700,
    },
};
theme.textStyles = textStyles(theme);
theme.shadows = {
    header: "inset 0 " + theme.borderWidths[1] + " 0 0 rgba(0, 0, 0, .05)",
    focus: "0 0 0px " + theme.radii[1] + " " + theme.colors.secondary.lightBlue.t80,
};
var focusStyle = {
    boxShadow: theme.shadows.focus,
    // Make sure that the focus style sits above the surrounding elements with normal page flow
    position: "relative",
    zIndex: theme.zIndices.aboveNormalFlow,
};
theme.focusStyles = {
    focusVisible: {
        ":focus": {
            '[data-basis-keyboard-mode="true"] &': focusStyle,
        },
    },
    focusVisibleAdjacentLabel: {
        ":focus + label": {
            '[data-basis-keyboard-mode="true"] &': focusStyle,
        },
    },
};
theme.focusStyles.__keyboardFocus = focusStyle;
theme.focusStyles.__keyboardFocusAdjacentLabel = focusStyle;
var helpers = {
    getColor: function (color) {
        return getPath(theme.colors, color);
    },
    getTextStyle: function (_a) {
        var name = _a.name, mode = _a.mode;
        switch (mode) {
            case "self": {
                return theme.textStyles[name];
            }
            case "self-bold": {
                return __assign(__assign({}, theme.textStyles[name]), theme.textStyles[name + ".bold"]);
            }
            case "container": {
                var boldCSS = theme.textStyles[name + ".bold"];
                return __assign(__assign({}, theme.textStyles[name]), (boldCSS && {
                    "& strong": boldCSS,
                    "& b": boldCSS,
                }));
            }
            default: {
                return null;
            }
        }
    },
};
var defaultTheme = __assign(__assign({}, theme), { accordion: accordion(theme, helpers), button: button(theme), checkbox: checkbox(theme, helpers), dropdown: dropdown(theme, helpers), field: field(theme), input: input(theme, helpers), link: link(theme), list: list(theme, helpers), radioGroup: radioGroup(theme, helpers), select: select(theme, helpers), stepper: stepper(theme), text: text(theme, helpers), textarea: textarea(theme, helpers) });

function getPropName(name, breakpoint) {
    return name + "-" + breakpoint;
}
function responsivePropType(propName, propType) {
    var _a;
    var result = (_a = {},
        _a[propName] = propType,
        _a);
    /*
      Note:
      Here, as opposed to useResponsiveProp, we use defaultTheme.breakpoints, not theme.breakpoints.
      Ideally, we want to use theme.breakpoints, but the theme is not accessible when
      responsivePropType is called.
    */
    for (var bp in defaultTheme.breakpoints) {
        var prop = getPropName(propName, bp);
        result[prop] = propType;
    }
    return result;
}
var responsiveMarginType = responsivePropType("margin", PropTypes.oneOfType([PropTypes.number, PropTypes.string]));
var responsivePaddingType = responsivePropType("padding", PropTypes.oneOfType([PropTypes.number, PropTypes.string]));
var SIZE_PX_REGEX = /^\s*(\d+)(px)?\s*$/;
var responsiveSizeType = function (prop) {
    return responsivePropType(prop, function (props, propName, componentName) {
        var _a;
        if (!hasOwnProperty(props, propName)) {
            return;
        }
        if (typeof props[propName] !== "string") {
            return new Error(componentName + ": " + propName + " is expected to be a string. Found: " + typeof props[propName] + ".");
        }
        if (props[propName].trim() === "") {
            return new Error(componentName + ": " + propName + " can't be empty.");
        }
        if (props[propName].trim()[0] === "-") {
            return new Error(componentName + ": " + propName + " can't be negative.");
        }
        var match = props[propName].match(SIZE_PX_REGEX);
        if (match === null) {
            return;
        }
        var intValue = parseInt(match[1], 10);
        var px = (_a = match[2]) !== null && _a !== void 0 ? _a : "";
        if (intValue % 4 !== 0) {
            var n = Math.floor(intValue / 4);
            return new Error(componentName + ": " + propName + "=\"" + props[propName] + "\". Please use a multiple of 4" + px + " (e.g. \"" + n * 4 + px + "\" or \"" + (n + 1) * 4 + px + "\").");
        }
    });
};
var responsiveWidthType = responsiveSizeType("width");
var responsiveHeightType = responsiveSizeType("height");
var responsiveMaxWidthType = responsiveSizeType("maxWidth");
var responsiveMaxHeightType = responsiveSizeType("maxHeight");

function getResponsiveProp(prop, breakpoints) {
    for (var i = 0; i < breakpoints.length; i++) {
        var responsiveSuffix = "-" + breakpoints[i];
        if (prop.endsWith(responsiveSuffix)) {
            return prop.slice(0, -responsiveSuffix.length);
        }
    }
    return prop;
}
function getResponsiveProps(props, breakpoints) {
    var result = {};
    for (var prop in props) {
        result[getResponsiveProp(prop, breakpoints)] = true;
    }
    return result;
}
function hasAnyBreakpoint(prop, breakpoints) {
    return breakpoints.some(function (bp) { return prop.endsWith("-" + bp); });
}
function getDefaultBreakpointProps(props, breakpoints) {
    var result = __assign({}, props);
    for (var prop in result) {
        if (hasAnyBreakpoint(prop, breakpoints)) {
            delete result[prop];
        }
    }
    return result;
}
function getBreakpointToPropsMap(theme, props, defaultProps) {
    var _a;
    var breakpoints = Object.keys(theme.breakpoints);
    /*
      If `props` is { "height-sm": "40px" }, `getResponsiveProps` will include "height".
      But, `getDefaultBreakpointProps` will not.
    */
    var nonBreakpointProps = getResponsiveProps(props, breakpoints);
    var lastBreakpointProps = getDefaultBreakpointProps(props, breakpoints);
    var result = (_a = {},
        _a[DEFAULT_BREAKPOINT] = __assign(__assign({}, defaultProps), lastBreakpointProps),
        _a);
    breakpoints.forEach(function (bp) {
        result[bp] = __assign(__assign({}, defaultProps), lastBreakpointProps);
        for (var prop in nonBreakpointProps) {
            var propAtBreakpoint = prop + "-" + bp;
            if (hasOwnProperty(props, propAtBreakpoint)) {
                result[bp][prop] = props[propAtBreakpoint];
            }
        }
        lastBreakpointProps = result[bp];
    });
    return result;
}
function getCSSforBreakpoint(responsiveProps, propsAtBreakpoint, theme, bp) {
    var result = {};
    for (var prop in responsiveProps) {
        result = __assign(__assign({}, result), responsiveProps[prop](propsAtBreakpoint, theme, bp));
    }
    return result;
}
function removeRedundantCSS(newCSS, existingCSS, mediaQueries) {
    var remainingNewCSS = klona(newCSS);
    var result = {};
    for (var i = mediaQueries.length - 1; i >= 0 && !isObjectEmpty(remainingNewCSS); i--) {
        var breakpointCSS = existingCSS[mediaQueries[i]] || {};
        var _a = detailedDiff(breakpointCSS, remainingNewCSS), added = _a.added, updated = _a.updated; // The order is important here
        result = deepMerge(result, updated);
        remainingNewCSS = added;
    }
    result = deepMerge(result, remainingNewCSS);
    return result;
}
var DEFAULT_BREAKPOINT_MEDIA_QUERY_PLACEHOLDER = "";
function useResponsivePropsCSS(props, defaultProps, responsiveProps) {
    var theme = useTheme();
    var breakpointToPropsMap = getBreakpointToPropsMap(theme, props, defaultProps);
    var breakpoints = [DEFAULT_BREAKPOINT].concat(Object.keys(theme.minMediaQueries));
    var result = {};
    for (var i = 0; i < breakpoints.length; i++) {
        var bp = breakpoints[i];
        var newCSS = getCSSforBreakpoint(responsiveProps, breakpointToPropsMap[bp], theme, bp);
        var necessaryNewCSS = removeRedundantCSS(newCSS, result, breakpoints
            .slice(0, i)
            .map(function (bp) {
            return theme.minMediaQueries[bp] ||
                DEFAULT_BREAKPOINT_MEDIA_QUERY_PLACEHOLDER;
        }));
        if (!isObjectEmpty(necessaryNewCSS)) {
            result[theme.minMediaQueries[bp] || DEFAULT_BREAKPOINT_MEDIA_QUERY_PLACEHOLDER] = necessaryNewCSS;
        }
    }
    /*
      Note: The merge order is important here!
            Media queries should come after the default CSS.
            Also, the media queries should be in order.
  
      If the default CSS was placed after the media queries, e.g.:
        
        {
          "@media (min-width: 576px)": {
            height: "24px"
          },
          height: "48px"
        }
  
      the media query definition would be overridden by Order of Appearance (https://www.w3.org/TR/css-cascade-3/#cascade-order).
  
      Is the media queries were is the wrong order, e.g.:
  
        {
          "@media (min-width: 576px)": {
            height: "24px"
          },
          "@media (min-width: 375px)": {
            height: "48px"
          }
        }
  
      on screen sizes >= 576px, the height would be 48px, which is wrong.
    */
    result = __assign(__assign({}, result[DEFAULT_BREAKPOINT_MEDIA_QUERY_PLACEHOLDER]), result);
    delete result[DEFAULT_BREAKPOINT_MEDIA_QUERY_PLACEHOLDER];
    return result;
}

var TextStyleContext = React.createContext();
var TextStyleProvider = TextStyleContext.Provider;
function useTextStyle() {
    var theme = useTheme();
    var textStyle = useContext(TextStyleContext);
    return {
        textStyle: textStyle,
        textStyleCSS: theme.getTextStyleCSS(textStyle),
    };
}

function getInputColor(backgroundColor) {
    return [undefined, "transparent", "white"].includes(backgroundColor)
        ? "grey.t05"
        : "white";
}
function mapResponsiveValues(map, mapFn, theme) {
    var _a, _b;
    if (map) {
        var result_1 = (_a = {},
            _a[DEFAULT_BREAKPOINT] = mapFn(map[DEFAULT_BREAKPOINT]),
            _a);
        for (var bp in theme.breakpoints) {
            result_1[bp] = mapFn(map[bp]);
        }
        return result_1;
    }
    var defaultValue = mapFn();
    var result = (_b = {},
        _b[DEFAULT_BREAKPOINT] = defaultValue,
        _b);
    for (var bp in theme.breakpoints) {
        result[bp] = defaultValue;
    }
    return result;
}
function getBgMapFromValue(value, theme) {
    var _a;
    var result = (_a = {},
        _a[DEFAULT_BREAKPOINT] = value,
        _a);
    for (var bp in theme.breakpoints) {
        result[bp] = value;
    }
    return result;
}
var BackgroundContext = React.createContext();
function BackgroundProvider(_a) {
    var value = _a.value, children = _a.children;
    var theme = useTheme();
    var bgMap = typeof value === "object" ? value : getBgMapFromValue(value, theme);
    return (React.createElement(BackgroundContext.Provider, { value: bgMap }, children));
}
BackgroundProvider.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.node,
};
function useBackground() {
    var theme = useTheme();
    var bgMap = useContext(BackgroundContext);
    var inputColorMap = mapResponsiveValues(bgMap, getInputColor, theme);
    return {
        bgMap: bgMap,
        inputColorMap: inputColorMap,
    };
}

function filterValidProps(props, validations) {
    if (validations === void 0) { validations = {}; }
    var result = {};
    for (var propName in props) {
        var validationFn = validations[propName];
        var propValue = props[propName];
        if ((validationFn === null || validationFn === void 0 ? void 0 : validationFn(propValue)) === false) {
            continue;
        }
        // validationFn doesn't exist or returned true
        result[propName] = propValue;
    }
    return result;
}
function mergeProps(props, defaultProps, inheritedProps, validations) {
    return __assign(__assign(__assign({}, defaultProps), filterValidProps(inheritedProps, validations)), filterValidProps(props, validations));
}

function formatArray(arr) {
    return "[" + arr.map(function (item) { return "\"" + item + "\""; }).join(", ") + "]";
}

var AS = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
var COLORS = [
    "black",
    "white",
    "grey.t75",
    "primary.blue.t100",
    "highlight.blue.t100",
    "conditional.positive.text",
    "conditional.negative.text",
];
var ALIGNS = TEXT_ALIGNS;
var allowedColors = [
    {
        textStyles: [
            "hero",
            "heading1",
            "heading2",
            "heading3",
            "heading4",
            "heading5",
            "heading6",
        ],
        allowedColors: ["black", "white", "primary.blue.t100"],
    },
    {
        textStyles: ["subtitle1", "subtitle2", "body1", "body2", "legal"],
        allowedColors: [
            "black",
            "white",
            "grey.t75",
            "primary.blue.t100",
            "highlight.blue.t100",
            "conditional.positive.text",
            "conditional.negative.text",
        ],
    },
    {
        textStyles: ["overline"],
        allowedColors: [
            "black",
            "white",
            "grey.t75",
            "primary.blue.t100",
            "highlight.blue.t100",
        ],
    },
];
function getInheritedColor(backgroundColor) {
    return backgroundColor === "primary.blue.t100" ? "white" : "black";
}
var DEFAULT_PROPS = {
    as: "p",
    textStyle: "body1",
    color: "black",
    align: "inherit",
    wrap: true,
};
Text.AS = AS;
Text.TEXT_STYLES = TEXT_STYLES;
Text.COLORS = COLORS;
Text.ALIGNS = ALIGNS;
Text.allowedColors = allowedColors;
Text.DEFAULT_PROPS = DEFAULT_PROPS;
function Text(props) {
    var inheritedTextStyle = useTextStyle().textStyle;
    var bgMap = useBackground().bgMap;
    var inheritedProps = {
        textStyle: inheritedTextStyle,
    };
    var mergedProps = mergeProps(props, DEFAULT_PROPS, inheritedProps, {
        id: function (id) { return typeof id === "string"; },
        as: function (as) { return AS.includes(as); },
        textStyle: function (textStyle) { return TEXT_STYLES.includes(textStyle); },
        color: function (color) { return COLORS.includes(color); },
        align: function (align) { return ALIGNS.includes(align); },
        wrap: function (wrap) { return typeof wrap === "boolean"; },
    });
    var id = mergedProps.id, as = mergedProps.as, align = mergedProps.align, wrap = mergedProps.wrap, role = mergedProps.role, children = mergedProps.children, testId = mergedProps.testId;
    var css = useResponsivePropsCSS(mergedProps, DEFAULT_PROPS, {
        color: function (_, theme, bp) {
            var color = hasOwnProperty(props, "color") && hasOwnProperty(mergedProps, "color")
                ? mergedProps.color
                : getInheritedColor(bgMap === null || bgMap === void 0 ? void 0 : bgMap[bp]);
            return theme.text.getCSS({
                color: color,
                wrap: wrap,
                align: align,
            });
        },
        margin: responsiveMargin,
        textStyle: responsiveTextStyle,
    });
    var Component = as;
    return (React.createElement(Component, { id: id, css: css, role: role, "data-testid": testId }, children));
}
Text.propTypes = __assign(__assign(__assign({ id: PropTypes.string, as: PropTypes.oneOf(AS) }, responsiveMarginType), responsivePropType("textStyle", PropTypes.oneOf(TEXT_STYLES))), { color: function (props) {
        allowedColors.forEach(function (_a) {
            var textStyles = _a.textStyles, allowedColors = _a.allowedColors;
            if (textStyles.includes(props.textStyle) &&
                !allowedColors.includes(props.color)) {
                return new Error("Text: color=\"" + props.color + "\" is not allowed for textStyle=\"" + props.textStyle + "\". Must be one of: " + formatArray(allowedColors));
            }
        });
    }, align: PropTypes.oneOf(ALIGNS), wrap: PropTypes.bool, role: PropTypes.string, children: PropTypes.node, testId: PropTypes.string });

export { BasisProvider, MyComponent, Text, defaultTheme, getUniqueId, useBreakpoint, useTheme };
