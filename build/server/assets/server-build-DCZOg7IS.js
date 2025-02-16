import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError, useActionData, Form } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useCallback, useId, Suspense, lazy, Children, useSyncExternalStore } from "react";
import { useReducedMotion, AnimatePresence, usePresence, useSpring } from "framer-motion";
import { useMDXComponents, MDXProvider } from "@mdx-js/react";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { json as json$1 } from "@remix-run/node";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      // If you wish to abort the rendering process, you can pass a signal here.
      // Please refer to the templates for example son how to configure this.
      // signal: controller.signal,
      onError(error2) {
        console.error(error2);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(17.76% 0 0)",
  backgroundLight: "oklch(21.78% 0 0)",
  primary: "oklch(84.42% 0.19 202.24)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "oklch(96.12% 0 0)",
  backgroundLight: "var(--white)",
  primary: "var(--black)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const notFoundPoster = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCABAAEADAREAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABAYDBQABBwL/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAA5V08yLHoDDYNgxJHRa8hFEklbmS9AoObTssxD6/KwqJ6VRg4APobRBbZj3O5QslX1GlT21TtokddVIHubc7rotmtg0vhhlBMtofQzWMe2qits4MULqvSbGlenLMibq3QhVZWsVXV6BHLM8lcqXKySlWe0besFLm6rgBirP8A/8QAJBAAAgICAgMBAAIDAAAAAAAAAgMAAQQFERIGITETFDIgIiP/2gAIAQEAAT8A2eWY49zPdbGl/hgl1dVzUt74dVEIqmWVzea2qximxTa3lUpdyllF4pFXyIxDptepoEF+NVcDD7B6mev+UsqqbTRf9ruVqxD7UHXK5jEgu+BmMpY8EU1D080NXUwMcWBVjD3YY43XaZO9pz+OZ1F+P2D7HA0LuIxWPLmbUixw4mHtmoZzRTxzzCl8Uwo/OY0vsE2du08c2Fc0DLmXjJbj9g4mH+aFl2nkmTTWlQwoDSD5cwfGGtP2MzPHLQn+sDVuSfYJh5TxDofMHHbkDdDN1rWJu7uovCY0vVQNI66/rMLZoAuPU2mWgkWVwtoi2WHqIpLq7DxMNqkD7nkmekyuvU0P4tZ7qGKgD0NTHYX6fZsmM/iX7v5GtMX37v7NLmECq7XLyLeF0E3K2U/3PGkXXu5lF/pP/8QAGxEAAwEBAAMAAAAAAAAAAAAAAAECERASICH/2gAIAQIBAT8AbG/WRiejXMFJhKKrCZQ5MMF2xs0Q0Io0pb2R8rrrBUJmjrDdMPEuBJokS0uCVghDKXIof0tYIR//xAAbEQADAQEBAQEAAAAAAAAAAAAAAQIREhAgMf/aAAgBAwEBPwCCV8MsRCwXumlkoVCo00Q0OWRJEHJhhnnJKwz5Xzpp0I06Js0ejbQrIKYxEswuNOcI/CvP/9k=";
const notFoundVideo = "/assets/notfound-Cfa33_DP.mp4";
const flatlinePoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsRAAALEQF/ZF+RAAACnElEQVQ4y1VU4ZrbIAyzwc3dbft2P/f+T7lrAniS7dBb+xHaAJYly+ifX58uoqLa8GzSMHc1jC69dTGM1rCigm1Llk+ZPuScQy6Ohf9ribsLv/fH62mP3jHFafwnkMYCp46HdZWjmzwsQQCBoENsXPI1sB/jEoImyB0+fiGefRwHssLBJTFL8olgwEbwJj8Ok7eHBRiPngD4e/ZKJkdbZLd2eGK5gsHv93cZeH/NJWM66OYiZekYhzUE7wFymMWhc1hIyoTcybzJ1FkAmT3Z8L99fvyM4E+gfF0Th7ER2ZBBQ4YEMowHmHBEwngM7LnsiKR8aQAgpGhBMDhrEwye2NTPiaULS0PGGEWc2ZFR0ues+ZZ2CCNYe8jqGmbQqJ1vgGtOsTd7IBKlaXghyIiMMyipUjJuvAq0N0gTMiIY5IHHxAAkkKzhHJkTiEXveGe3rfSWJAb1zVqQJgGeI8kzU+rudEW5hsUOcLquSSTcshxi9DKznjNt1mqjxCEPoAGAwaJrnBXuWiVd2sVzoT6tMmbt7LzYNF7Fosak5tkWZbpVTBZkXBHo1VgsLIcU41U2Z3KUy87BjgTAymylFhSPSIzSpXXKetmWEnOOVlAB6tkrlI1MjPoy+6Tsm16MVDjrUiCRqd41k2g+BsvMpZyke7agXsG1Cnb3gNyWjH7IgCKvfYa+4DxVy3XZyemkPGteskTStdj/c5RWwBepuKe2a5g9xqq5uvlmay+becjQ6pJj0/Z2A2z77PtSv7Gk5lOzZxIsS89vApQYmaWyZ+JwAtUNy4Pq+8ZULdvyhq2iuGq1RlqYgBtA9AaSLUn7JpVX+qt0avLS+XaTfjeus5sna5DRwt7qL/3y3t61kapFywO7e7PPfFv4/k3zcPwDeTTjchlA+6QAAAAASUVORK5CYII=";
const flatlineVideo = "/assets/flatline-DaiGY3H4.mp4";
const icon$2 = "_icon_1tdl1_2";
const styles$A = {
  icon: icon$2
};
const sprites = "/assets/icons-joZtjrSD.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$A.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_13dm1_2";
const styles$z = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$z.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const loader$7 = "_loader_1o1zt_2";
const text$4 = "_text_1o1zt_17";
const span = "_span_1o1zt_43";
const styles$y = {
  loader: loader$7,
  text: text$4,
  span
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$y.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$y.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$y.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show) return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show) return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status, nodeRef });
};
const button$5 = "_button_1l2e3_2";
const text$3 = "_text_1l2e3_132";
const loader$6 = "_loader_1l2e3_145";
const icon$1 = "_icon_1l2e3_158";
const styles$x = {
  button: button$5,
  text: text$3,
  loader: loader$6,
  icon: icon$1
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      unstable_viewTransition: true,
      as: Link$1,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$x.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$x.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$x.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$x.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$x.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);
const hidden = "_hidden_1mhmf_2";
const styles$w = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$w.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_1v07c_2";
const glyph = "_glyph_1v07c_9";
const value = "_value_1v07c_16";
const styles$v = {
  text: text$2,
  glyph,
  value
};
const glyphs = [
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ー",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ワ",
  "ヰ",
  "ヱ",
  "ヲ",
  "ン",
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
  "パ",
  "ピ",
  "プ",
  "ペ",
  "ポ"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  return content2.map((value2, index2) => {
    if (index2 < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index2].value };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      const containerInstance = container2.current;
      const content2 = text2.split("");
      const renderOutput = () => {
        const characterMap = output.current.map((item2) => {
          return `<span class="${styles$v[item2.type]}">${item2.value}</span>`;
        });
        containerInstance.innerHTML = characterMap.join("");
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        output.current = shuffle(content2, output.current, value2);
        renderOutput();
      });
      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && true && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index2) => ({
          type: CharType.Value,
          value: content2[index2]
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$v.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$v.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$v.content, ref: container2 })
    ] });
  }
);
const heading$2 = "_heading_e2qtd_2";
const styles$u = {
  heading: heading$2
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$u.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const page = "_page_memxv_2";
const videoContainer = "_videoContainer_memxv_22";
const video = "_video_memxv_22";
const credit = "_credit_memxv_78";
const details$3 = "_details_memxv_102";
const text$1 = "_text_memxv_115";
const title$8 = "_title_memxv_122";
const titleFlatline = "_titleFlatline_memxv_123";
const subheading = "_subheading_memxv_155";
const description$6 = "_description_memxv_185";
const button$4 = "_button_memxv_204";
const styles$t = {
  page,
  videoContainer,
  video,
  credit,
  details: details$3,
  text: text$1,
  title: title$8,
  titleFlatline,
  subheading,
  description: description$6,
  button: button$4
};
function useFormInput(initialValue = "") {
  const [value2, setValue] = useState(initialValue);
  const [error2, setError] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
    setIsDirty(true);
    if (error2 && event.target.checkValidity()) {
      setError(null);
    }
  };
  const handleInvalid = (event) => {
    event.preventDefault();
    setError(event.target.validationMessage);
  };
  const handleBlur = (event) => {
    if (isDirty) {
      event.target.checkValidity();
    }
  };
  return {
    value: value2,
    error: error2,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid
  };
}
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInterval(callback, delay2, reset) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options2 = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current)) return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options2);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options2, isUnobserved, shouldObserve]);
  return intersect;
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error2) {
      reject(`Error loading ${srcSet}: ${error2}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob) throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$3 = "_image_4szht_2";
const elementWrapper = "_elementWrapper_4szht_49";
const placeholder = "_placeholder_4szht_71";
const element = "_element_4szht_49";
const button$3 = "_button_4szht_104";
const styles$s = {
  image: image$3,
  elementWrapper,
  placeholder,
  element,
  button: button$3
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$s.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc) return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted) return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$s.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$s.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$s.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$s.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$s.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const flatlineSkull = "/assets/error-flatline-eK98OAAk.svg";
function Error$1({ error: error2 }) {
  const flatlined = !error2.status;
  const getMessage = () => {
    switch (error2.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error2.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error2.statusText || error2.data || error2.toString()
        };
    }
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs("section", { className: styles$t.page, children: [
    flatlined && /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$t.details, children: /* @__PURE__ */ jsxs("div", { className: styles$t.text, children: [
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$t.title,
            "data-visible": visible,
            level: 0,
            weight: "bold",
            children: error2.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs(
          Heading,
          {
            className: styles$t.titleFlatline,
            "data-visible": visible,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx("use", { href: `${flatlineSkull}#skull` }) }),
              /* @__PURE__ */ jsx(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            "aria-hidden": true,
            className: styles$t.subheading,
            "data-visible": visible,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: styles$t.description, "data-visible": visible, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$t.button,
            "data-visible": visible,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Emotional support"
          }
        ) : /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$t.button,
            "data-visible": visible,
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$t.videoContainer, "data-visible": visible, children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            reveal: true,
            cover: true,
            noPauseButton: true,
            delay: 600,
            className: styles$t.video,
            src: flatlined ? flatlineVideo : notFoundVideo,
            placeholder: flatlined ? flatlinePoster : notFoundPoster
          }
        ),
        flatlined ? /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$t.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0318871/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Berserk (1997)"
          }
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$t.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0113568/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Ghost in the Shell (1995)"
          }
        )
      ] })
    ] }) })
  ] });
}
const monogram = "_monogram_1mxlb_2";
const highlight = "_highlight_1mxlb_7";
const styles$r = {
  monogram,
  highlight
};
const Monogram = forwardRef(({ highlight: highlight2, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": true,
      className: classes(styles$r.monogram, className),
      width: "48",
      height: "29",
      viewBox: "0 0 48 29",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsx("path", { d: "M24 0 L48 29 H38 L24 10 L10 29 H0 L24 0 Z M18 15 H30" }) }) }),
        /* @__PURE__ */ jsx("rect", { clipPath: `url(#${clipId})`, width: "100%", height: "100%" }),
        highlight2 && /* @__PURE__ */ jsx("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx("rect", { className: styles$r.highlight, width: "100%", height: "100%" }) })
      ]
    }
  );
});
const toggle$1 = "_toggle_1lvbt_2";
const inner = "_inner_1lvbt_17";
const icon = "_icon_1lvbt_25";
const styles$q = {
  toggle: toggle$1,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$q.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$q.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$q.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$q.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_1phd7_2";
const circle = "_circle_1phd7_29";
const mask = "_mask_1phd7_54";
const path = "_path_1phd7_72";
const styles$p = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$p.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$p.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$p.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$p.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$p.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$p.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};
const name$2 = "Abiodun Abdullahi";
const role = "Developer";
const disciplines = [
  "Blockchain",
  "Frontend",
  "Fintech",
  "Backend",
  "Mobile",
  "SDE"
];
const url$1 = "";
const x = "biodun_dev";
const github = "biodun-dev";
const repo = "https://github.com/biodun-dev/portfolio";
const ascii = "__  __  __\n\\ \\ \\ \\ \\∕\n \\ \\∕\\ \\\n  \\∕  \\∕\n";
const config = {
  name: name$2,
  role,
  disciplines,
  url: url$1,
  x,
  github,
  repo,
  ascii
};
const navLinks = [
  {
    label: "Projects",
    pathname: "/#project-1"
  },
  {
    label: "Details",
    pathname: "/#details"
  },
  {
    label: "Articles",
    pathname: "/articles"
  },
  {
    label: "Contact",
    pathname: "/contact"
  }
];
const socialLinks = [
  {
    label: "Github",
    url: `https://github.com/${config.github}`,
    icon: "github"
  },
  {
    label: "X",
    url: `https://x.com/${config.x}`,
    icon: "x"
  }
  // {
  //   label: 'Figma',
  //   url: `https://www.figma.com/${config.figma}`,
  //   icon: 'figma',
  // },
];
const navbar = "_navbar_zzi78_2";
const logo = "_logo_zzi78_27";
const nav = "_nav_zzi78_2";
const navList = "_navList_zzi78_51";
const navLink = "_navLink_zzi78_59";
const navIcons = "_navIcons_zzi78_102";
const navIconLink = "_navIconLink_zzi78_126";
const navIcon = "_navIcon_zzi78_102";
const mobileNav = "_mobileNav_zzi78_147";
const mobileNavLink = "_mobileNavLink_zzi78_177";
const styles$o = {
  navbar,
  logo,
  nav,
  navList,
  navLink,
  navIcons,
  navIconLink,
  navIcon,
  mobileNav,
  mobileNavLink
};
const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();
  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);
  useEffect(() => {
    if (!target || location.pathname !== "/") return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);
  useEffect(() => {
    const navItems = document.querySelectorAll("[data-navbar-item]");
    const inverseTheme = theme === "dark" ? "light" : "dark";
    const { innerHeight } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = "";
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );
      if (!invertedElements) return;
      inverseMeasurements = Array.from(invertedElements).map((item2) => ({
        element: item2,
        top: item2.offsetTop,
        bottom: item2.offsetTop + item2.offsetHeight
      }));
      const { scrollY } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = "";
          }
        }
      }
    };
    if (theme === "light") {
      navItemMeasurements = Array.from(navItems).map((item2) => {
        const rect = item2.getBoundingClientRect();
        return {
          element: item2,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener("scroll", handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener("scroll", handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);
  const getCurrent = (url2 = "") => {
    const nonTrailing = (current == null ? void 0 : current.endsWith("/")) ? current == null ? void 0 : current.slice(0, -1) : current;
    if (url2 === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    if (hash && location.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event) => {
    handleNavItemClick(event);
    if (menuOpen) setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: styles$o.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        unstable_viewTransition: true,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": true,
        className: styles$o.logo,
        "aria-label": `${config.name}, ${config.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx(Monogram, { highlight: true })
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$o.nav, children: [
      /* @__PURE__ */ jsx("div", { className: styles$o.navList, children: navLinks.map(({ label: label2, pathname }) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          "data-navbar-item": true,
          className: styles$o.navLink,
          "aria-current": getCurrent(pathname),
          onClick: handleNavItemClick,
          children: label2
        },
        label2
      )) }),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$o.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({ label: label2, pathname }, index2) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          className: styles$o.mobileNavLink,
          "data-visible": visible,
          "aria-current": getCurrent(pathname),
          onClick: handleMobileNavClick,
          style: cssProps({
            transitionDelay: numToMs(
              Number(msToNum(tokens.base.durationS)) + index2 * 50
            )
          }),
          children: label2
        },
        label2
      )),
      /* @__PURE__ */ jsx(NavbarIcons, {}),
      /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx(ThemeToggle, { "data-navbar-item": true })
  ] });
};
const NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx("div", { className: styles$o.navIcons, children: socialLinks.map(({ label: label2, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
  "a",
  {
    "data-navbar-item": desktop || void 0,
    className: styles$o.navIconLink,
    "aria-label": label2,
    href: url2,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsx(Icon, { className: styles$o.navIcon, icon: icon2 })
  },
  label2
)) });
const progress = "_progress_3typo_2";
const styles$n = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current) return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted) return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$n.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
const container$2 = "_container_j3vhn_2";
const skip = "_skip_j3vhn_12";
const styles$m = {
  container: container$2,
  skip
};
const links$1 = () => [
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" }
];
const loader$5 = async ({ request, context }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  const theme = session.get("theme") || "dark";
  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  useEffect(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$m.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$m.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx(Error$1, { error: error2 }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$5
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "Enabling Emoji Support in MySQL for Chat Applications",
  "abstract": "When building chat applications, supporting emojis is essential for modern communication. However, MySQL databases often encounter issues storing emojis due to character set limitations. This guide walks through configuring MySQL to support emojis by using the `utf8mb4` character set and the `utf8mb4_unicode_ci` collation.",
  "date": "2025-01-12",
  "banner": "/static/emoji.jpg",
  "featured": true
};
function _createMdxContent$1(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment$1, {
    children: [jsx(_components.h1, {
      id: "configuring-mysql-to-support-emojis-in-chat-applications",
      children: "Configuring MySQL to Support Emojis in Chat Applications"
    }), "\n", jsx(_components.h2, {
      id: "abstract",
      children: "Abstract"
    }), "\n", jsxs(_components.p, {
      children: ["When building chat applications, supporting emojis is essential for modern communication. However, MySQL databases often encounter issues storing emojis due to character set limitations. This guide walks through configuring MySQL to support emojis by using the ", jsx(_components.code, {
        children: "utf8mb4"
      }), " character set and the ", jsx(_components.code, {
        children: "utf8mb4_unicode_ci"
      }), " collation."]
    }), "\n", jsx(_components.h2, {
      id: "understanding-the-emoji-storage-issue",
      children: "Understanding the Emoji Storage Issue"
    }), "\n", jsxs(_components.p, {
      children: ["MySQL’s default ", jsx(_components.code, {
        children: "utf8"
      }), " character set only supports ", jsx(_components.strong, {
        children: "3 bytes per character"
      }), ", which excludes many emojis that require ", jsx(_components.strong, {
        children: "4 bytes"
      }), ". Emojis like 😎, 🚀, and 🌍 fail to store correctly, often resulting in ", jsx(_components.code, {
        children: "??"
      }), " or database errors."]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "The Fix:"
      }), " Switch from ", jsx(_components.code, {
        children: "utf8"
      }), " to ", jsx(_components.code, {
        children: "utf8mb4"
      }), ", which supports the full Unicode range, including emojis."]
    }), "\n", jsx(_components.h2, {
      id: "step-by-step-configuration",
      children: "Step-by-Step Configuration"
    }), "\n", jsxs(_components.h3, {
      id: "1-update-database-settings",
      children: ["1. ", jsx(_components.strong, {
        children: "Update Database Settings"
      })]
    }), "\n", jsx(_components.p, {
      children: "Run the following SQL commands to update the database's character set:"
    }), "\n", jsx(_components.pre, {
      className: "language-sql",
      children: jsxs(_components.code, {
        className: "language-sql",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "ALTER"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "DATABASE"
        }), " your_database_name \n", jsx(_components.span, {
          className: "token keyword",
          children: "CHARACTER"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "SET"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " utf8mb4 \n", jsx(_components.span, {
          className: "token keyword",
          children: "COLLATE"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " utf8mb4_unicode_ci", jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsxs(_components.h3, {
      id: "2-update-table-settings",
      children: ["2. ", jsx(_components.strong, {
        children: "Update Table Settings"
      })]
    }), "\n", jsx(_components.p, {
      children: "Ensure that any table involved in storing text (like messages or usernames) is updated accordingly:"
    }), "\n", jsx(_components.pre, {
      className: "language-sql",
      children: jsxs(_components.code, {
        className: "language-sql",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "ALTER"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "TABLE"
        }), " messages \n", jsx(_components.span, {
          className: "token keyword",
          children: "CONVERT"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "TO"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "CHARACTER"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "SET"
        }), " utf8mb4 \n", jsx(_components.span, {
          className: "token keyword",
          children: "COLLATE"
        }), " utf8mb4_unicode_ci", jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsxs(_components.h3, {
      id: "3-update-column-settings",
      children: ["3. ", jsx(_components.strong, {
        children: "Update Column Settings"
      })]
    }), "\n", jsx(_components.p, {
      children: "Apply the same settings to individual columns, especially those handling text input from users:"
    }), "\n", jsx(_components.pre, {
      className: "language-sql",
      children: jsxs(_components.code, {
        className: "language-sql",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "ALTER"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "TABLE"
        }), " messages \n", jsx(_components.span, {
          className: "token keyword",
          children: "MODIFY"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "COLUMN"
        }), " content ", jsx(_components.span, {
          className: "token keyword",
          children: "TEXT"
        }), " \n", jsx(_components.span, {
          className: "token keyword",
          children: "CHARACTER"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "SET"
        }), " utf8mb4 \n", jsx(_components.span, {
          className: "token keyword",
          children: "COLLATE"
        }), " utf8mb4_unicode_ci", jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.h2, {
      id: "configuring-mysql-server",
      children: "Configuring MySQL Server"
    }), "\n", jsx(_components.h3, {
      id: "mysql-configuration-file-mycnf-or-myini",
      children: jsxs(_components.strong, {
        children: ["MySQL Configuration File (", jsx(_components.code, {
          children: "my.cnf"
        }), " or ", jsx(_components.code, {
          children: "my.ini"
        }), "):"]
      })
    }), "\n", jsx(_components.p, {
      children: "Locate and edit the MySQL configuration file and update or add the following lines:"
    }), "\n", jsx(_components.pre, {
      className: "language-ini",
      children: jsxs(_components.code, {
        className: "language-ini",
        children: [jsxs(_components.span, {
          className: "token section",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "["
          }), jsx(_components.span, {
            className: "token section-name selector",
            children: "mysqld"
          }), jsx(_components.span, {
            className: "token punctuation",
            children: "]"
          })]
        }), "\n", jsx(_components.span, {
          className: "token key attr-name",
          children: "character-set-server"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "="
        }), jsx(_components.span, {
          className: "token value attr-value",
          children: "utf8mb4"
        }), "\n", jsx(_components.span, {
          className: "token key attr-name",
          children: "collation-server"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "="
        }), jsx(_components.span, {
          className: "token value attr-value",
          children: "utf8mb4_unicode_ci"
        }), "\n\n", jsxs(_components.span, {
          className: "token section",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "["
          }), jsx(_components.span, {
            className: "token section-name selector",
            children: "client"
          }), jsx(_components.span, {
            className: "token punctuation",
            children: "]"
          })]
        }), "\n", jsx(_components.span, {
          className: "token key attr-name",
          children: "default-character-set"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "="
        }), jsx(_components.span, {
          className: "token value attr-value",
          children: "utf8mb4"
        }), "\n\n", jsxs(_components.span, {
          className: "token section",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "["
          }), jsx(_components.span, {
            className: "token section-name selector",
            children: "mysql"
          }), jsx(_components.span, {
            className: "token punctuation",
            children: "]"
          })]
        }), "\n", jsx(_components.span, {
          className: "token key attr-name",
          children: "default-character-set"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "="
        }), jsx(_components.span, {
          className: "token value attr-value",
          children: "utf8mb4"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "After changes:"
      }), " Restart MySQL to apply the configuration:"]
    }), "\n", jsx(_components.pre, {
      className: "language-bash",
      children: jsxs(_components.code, {
        className: "language-bash",
        children: [jsx(_components.span, {
          className: "token function",
          children: "sudo"
        }), " systemctl restart mysql\n"]
      })
    }), "\n", jsx(_components.h2, {
      id: "verifying-the-configuration",
      children: "Verifying the Configuration"
    }), "\n", jsx(_components.p, {
      children: "After restarting, verify the configuration with:"
    }), "\n", jsx(_components.pre, {
      className: "language-sql",
      children: jsxs(_components.code, {
        className: "language-sql",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "SHOW"
        }), " VARIABLES ", jsx(_components.span, {
          className: "token operator",
          children: "LIKE"
        }), " ", jsx(_components.span, {
          className: "token string",
          children: "'character_set%'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token keyword",
          children: "SHOW"
        }), " VARIABLES ", jsx(_components.span, {
          className: "token operator",
          children: "LIKE"
        }), " ", jsx(_components.span, {
          className: "token string",
          children: "'collation%'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["Ensure the output shows ", jsx(_components.code, {
        children: "utf8mb4"
      }), " for character sets and ", jsx(_components.code, {
        children: "utf8mb4_unicode_ci"
      }), " for collations."]
    }), "\n", jsx(_components.h2, {
      id: "testing-emoji-support",
      children: "Testing Emoji Support"
    }), "\n", jsx(_components.p, {
      children: "Insert an emoji into the database:"
    }), "\n", jsx(_components.pre, {
      className: "language-sql",
      children: jsxs(_components.code, {
        className: "language-sql",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "INSERT"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "INTO"
        }), " messages ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "content", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "VALUES"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'Hello 🌎!'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "Retrieve the data:"
    }), "\n", jsx(_components.pre, {
      className: "language-sql",
      children: jsxs(_components.code, {
        className: "language-sql",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "SELECT"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "*"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "FROM"
        }), " messages", jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Expected Output:"
      }), " ", jsx(_components.code, {
        children: "Hello 🌎!"
      })]
    }), "\n", jsx(_components.h2, {
      id: "additional-considerations",
      children: "Additional Considerations"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Client Encoding:"
        }), " Ensure that your application uses the correct character set when connecting to the database. For example, in Node.js:"]
      }), "\n"]
    }), "\n", jsx(_components.pre, {
      className: "language-javascript",
      children: jsxs(_components.code, {
        className: "language-javascript",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " mysql ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "require"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'mysql2'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " connection ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " mysql", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "createConnection"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token literal-property property",
          children: "host"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token string",
          children: "'localhost'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), "\n  ", jsx(_components.span, {
          className: "token literal-property property",
          children: "user"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token string",
          children: "'root'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), "\n  ", jsx(_components.span, {
          className: "token literal-property property",
          children: "password"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token string",
          children: "'password'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), "\n  ", jsx(_components.span, {
          className: "token literal-property property",
          children: "database"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token string",
          children: "'chat_app'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), "\n  ", jsx(_components.span, {
          className: "token literal-property property",
          children: "charset"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token string",
          children: "'utf8mb4'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsxs(_components.ol, {
      start: "2",
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Indexing:"
          }), " If you're indexing columns with emojis, consider MySQL 5.7.7+ or later due to changes in ", jsx(_components.code, {
            children: "utf8mb4"
          }), " indexing behavior."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Collation Choice:"
          }), " Use ", jsx(_components.code, {
            children: "utf8mb4_unicode_ci"
          }), " for broad Unicode support or ", jsx(_components.code, {
            children: "utf8mb4_general_ci"
          }), " for performance optimization if you don't need full Unicode compliance."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", jsxs(_components.p, {
      children: ["By switching to the ", jsx(_components.code, {
        children: "utf8mb4"
      }), " character set, your chat application can support a wide range of emojis, enhancing user experience and ensuring compatibility across platforms."]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Emoji-ready databases are essential for modern chat apps"
      }), "—don't let character set limitations hold you back!"]
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const volkiharBackgroundLarge = "/assets/volkihar-background-large-BNfdj2Th.jpg";
const volkiharBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCAASACADAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABQYHBAj/xAAXAQADAQAAAAAAAAAAAAAAAAABAwQC/9oADAMBAAIQAxAAAADgoimUKoj8SefaKhpIho2XuieIyPIHOkiuVz//xAAhEAABAwMEAwAAAAAAAAAAAAACAAEDBAUGERIhIhMVNf/aAAgBAQABPwCmqSgPVlh2YyUbbN6K9BdreTETOshtoHObi2ijh1VIRU/LKw3ySOdgM+i9RS3eDyAXZRKBQcSrD/nEv//EABsRAAIDAQEBAAAAAAAAAAAAAAABAgMREBIx/9oACAECAQE/AE8K7DdROPEQk0Z66in4f//EABkRAAMBAQEAAAAAAAAAAAAAAAABEQISIP/aAAgBAwEBPwCGkQTKI3y0WeNn/9k=";
const volkiharBackground = "/assets/volkihar-background-BwfMx1oT.jpg";
const volkiharBannerLarge = "/assets/volkihar-banner-large-B7psY5Jh.jpg";
const volkiharBannerPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAGAAsDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgn/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAAAjGoF0n//xAAbEAABBQEBAAAAAAAAAAAAAAAEAAIDBRIhQv/aAAgBAQABPwACaqKAmjJrtOzxyIoAnTvdn0v/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIT/9oACAECAQE/ANq6uBf/xAAYEQADAQEAAAAAAAAAAAAAAAAAARICA//aAAgBAwEBPwDipyy2f//Z";
const volkiharBanner = "/assets/volkihar-banner-C736rbFi.jpg";
const volkiharBookLarge = "/assets/volkihar-book-large-BpE5vkX8.png";
const volkiharBookPlaceholder = "/assets/volkihar-book-placeholder-tOpZR4Vi.png";
const volkiharBook = "/assets/volkihar-book-B73D4Zfh.png";
const volkiharEnderalLarge = "/assets/volkihar-enderal-large-T2LUjM5-.jpg";
const volkiharEnderalLogoLarge = "/assets/volkihar-enderal-logo-large-BbiR1dg4.png";
const volkiharEnderalLogoPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAADd0lEQVR4AV2R5WLlSA6Fj4psXwony3+33/+FFocnyY2pUNL4Nnd/ZqjvVEn091Pvwl1wHR/9P9/dDa4Mvfe6w8aa6mCsCeu8DBU0zNMMESwqeHlZ1+fe9/N0fo7YsA9/2YWTvx7e/eOvV51xpyp8b5y9987cb5I7R9t1u1fhaxY5AAQI1+B9fXmba3drmSOLu0iebm+vKpcbG8Jtt0l2XXcNozvD6lOpwXkXAjcdgo8RFSImC5sMY5Ou2rYVwQ37/SlruquRHo3F4+mwf7LBnYJ3OzLU9yw+xaRERmPmqWllBtUqtfQeOTPVIx/FrdN6x1Yeb2+Ofw0h/EmJrrrgjvv9fvDB9wp1cU30ch7TEiOZSFlEy7LEVkSzUS3jNDe3mW+cdfepykOX67Hvw1Xw/nDY7067w3DCxhKC1tqWaVnJuRwLp0gwqyW5gmJSY6KD0p2I3ip0xyw9LhjTe++OwYcjyIRamX0I3hrHIJ0JCLAYTIMXUGcde1db3QGuq6WabG2NqfRbep9y6Y21exD1MUYuKTG31uErROHIwDHDuVybqczJW3LWurqu2Z+3tqpICH0IBOrXmNs4zmFOiXKuKopZRGcQogoaNpywjs66lgqvZol7Y8mycppjLNt7IgLV0iimLMuWsgWPzPIior8Q8CqgCWqjY+jPqeQg3nlr7dU4rkipPHmfEogqVDM2am3xIqmNz5v0dwh+E8jrRQLh6IzqL4B1rXBYeE01+J0r9c0QzU1k8c4aVU0CvInwS078CxFedZMQ2dFbTQt8c2C8kINTMZ5ZkHM9F0OjIRpBWLBRWlug+F22UFX9TUTPF8lxGNZspxqeY7MPf+40Ntdsa7AeIKKOFTsiHFW1Z1ZWlVGBH1n034bwPzL6qyOauEulPJf2vzE1exCCbYVrP6AzxnLjzho6ADgaY3pjIAS6iP6jgv+q6I8K++r2vHySYMN8ujnsCpfUisCurBgBjKJ6huLtciVDb86bSaHr/c2hYOPT2Avu04u/AwjD0BicCGZWomdSPSmZCpVZBHNlWbxFy4lbOZeGr3D4igW27Y1JtfLZmEsTzEFELulJWEerVLiZ+owsAd9i8BWX5V0d90mh6/sWs/zGor8RzBmECGgOgfjyH77DfroZc5P3hXe9VQhaE8tQIZACOjfVV4KeucrselSOLJcx+Mgf1w6YAeGPsC8AAAAASUVORK5CYII=";
const volkiharEnderalLogo = "/assets/volkihar-enderal-logo-Bg2oXoo9.png";
const volkiharEnderalPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAC0AUAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAEBgMFBwIA/9oACAEBAAAAAMJZbuyjQM+A4heWNiZG9ZyFMrhm+Xhm3yXJ88Wa5hMhPeBVqrCqDCiST6sQT1fJzIQXEMNLD//EABgBAAMBAQAAAAAAAAAAAAAAAAIEBQMB/9oACAECEAAAAFp69VgsYlR3QV2Of//EABcBAAMBAAAAAAAAAAAAAAAAAAMEBQL/2gAIAQMQAAAAtNklKNsUZ07BzKZ//8QAIBAAAgICAwEBAQEAAAAAAAAAAAECAwQRBRIhIjETBv/aAAgBAQABPwDGyW2jFirEijCUyHFbX4X8NuD+TmuNlX2+TJqlGT8HEZJlL6tGHmqvW2Y3MVw19GFy9VrS2UVRya9pHNcL/SMvk5fh3VKXyX4zg34WR0SRVaO6URZdif6cJmSd0NyOCyqf4R7SX4cplY3WXqOanTY560ZlMG5aMmnTY4FR1UkOowrJUzTMTn7aK0lIzP8ASW2JruX8pOxvcizK7su1JFukyN+iGWRyIsrtjs/qun6XWev0nPwdnpKzws9JG2RskiF0xZE9E7ZMnNnZ7E/CZ//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEIRESEDFB/9oACAECAQE/AHJ+S17h6iZTduGlVgYeFXtLq9HUsxXezUx6SgAgWCWbEWvcC8RjxP/EABwRAAMBAQADAQAAAAAAAAAAAAABAgMRBBIhIv/aAAgBAwEBPwCEjOc2XhLn8muTljXDrMu9JuYn6zfSaZp8YtWZ+Q0X5PUVr1jfsf/Z";
const volkiharEnderal = "/assets/volkihar-enderal-BTf8JKtt.jpg";
const volkiharSlide1Large = "/assets/volkihar-slide-1-large-CkekFT3C.jpg";
const volkiharSlide1 = "/assets/volkihar-slide-1-BJOjWYAS.jpg";
const volkiharSlide2Large = "/assets/volkihar-slide-2-large-BzyjkLqK.jpg";
const volkiharSlide2 = "/assets/volkihar-slide-2-1Kh0pCzp.jpg";
const volkiharSlide3Large = "/assets/volkihar-slide-3-large-C_8CrUhH.jpg";
const volkiharSlide3 = "/assets/volkihar-slide-3-Dkb5mX5r.jpg";
const volkiharSlidePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCAAJABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgj/xAAWAQEBAQAAAAAAAAAAAAAAAAADBAL/2gAMAwEAAhADEAAAAJ5jtNMbsaRuB//EACAQAAEDAgcAAAAAAAAAAAAAAAEAAwUCEgQGESI0NYH/2gAIAQEAAT8AkYIR+CtNeoTrIafFdu1Zl4PqkuvpX//EABcRAQEBAQAAAAAAAAAAAAAAAAIAATL/2gAIAQIBAT8AOxeRh3t//8QAGBEBAQADAAAAAAAAAAAAAAAAAAIDERL/2gAIAQMBAT8A40qWRT//2Q==";
const link$1 = "_link_1h1qj_2";
const styles$l = {
  link: link$1
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$l.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const footer$1 = "_footer_gmxrz_2";
const link = "_link_gmxrz_16";
const date$1 = "_date_gmxrz_20";
const styles$k = {
  footer: footer$1,
  link,
  date: date$1
};
const Footer = ({ className }) => /* @__PURE__ */ jsx("footer", { className: classes(styles$k.footer, className), children: /* @__PURE__ */ jsxs(Text, { size: "s", align: "center", children: [
  /* @__PURE__ */ jsx("span", { className: styles$k.date, children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}.` }),
  /* @__PURE__ */ jsx(Link, { secondary: true, className: styles$k.link, href: "/humans.txt", target: "_self", children: "Crafted by yours truly" })
] }) });
const section$2 = "_section_cvvm4_2";
const styles$j = {
  section: section$2
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$j.section, className), ref, ...rest, children })
);
const project = "_project_7xwsz_20";
const section$1 = "_section_7xwsz_29";
const sectionInner = "_sectionInner_7xwsz_44";
const sectionBackground = "_sectionBackground_7xwsz_89";
const backgroundImage = "_backgroundImage_7xwsz_138";
const backgroundImageElement = "_backgroundImageElement_7xwsz_157";
const backgroundScrim = "_backgroundScrim_7xwsz_176";
const header$2 = "_header_7xwsz_192";
const headerContent = "_headerContent_7xwsz_212";
const details$2 = "_details_7xwsz_250";
const title$7 = "_title_7xwsz_262";
const description$5 = "_description_7xwsz_272";
const linkButton = "_linkButton_7xwsz_282";
const meta$9 = "_meta_7xwsz_292";
const metaItem = "_metaItem_7xwsz_307";
const image$2 = "_image_7xwsz_327";
const sectionContent = "_sectionContent_7xwsz_335";
const sectionHeading = "_sectionHeading_7xwsz_358";
const sectionText = "_sectionText_7xwsz_362";
const textRow = "_textRow_7xwsz_369";
const sectionColumns = "_sectionColumns_7xwsz_425";
const styles$i = {
  project,
  section: section$1,
  sectionInner,
  sectionBackground,
  backgroundImage,
  backgroundImageElement,
  backgroundScrim,
  header: header$2,
  headerContent,
  details: details$2,
  title: title$7,
  description: description$5,
  linkButton,
  meta: meta$9,
  metaItem,
  image: image$2,
  sectionContent,
  sectionHeading,
  sectionText,
  textRow,
  sectionColumns
};
const initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles: roles2,
  className
}) {
  return /* @__PURE__ */ jsx(Section, { className: classes(styles$i.header, className), as: "section", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$i.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$i.details, children: [
          /* @__PURE__ */ jsx(Heading, { className: styles$i.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$i.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              iconHoverShift: true,
              className: styles$i.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!(roles2 == null ? void 0 : roles2.length) && /* @__PURE__ */ jsx("ul", { className: styles$i.meta, children: roles2 == null ? void 0 : roles2.map((role2, index2) => /* @__PURE__ */ jsx(
          "li",
          {
            className: styles$i.metaItem,
            style: cssProps({ delay: numToMs(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx(Text, { secondary: true, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
const ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx("article", { className: classes(styles$i.project, className), ...rest });
const ProjectSection = forwardRef(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "section",
    {
      className: classes(styles$i.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$i.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx(Section, { className: styles$i.sectionInner, "data-padding": padding, children })
      ]
    }
  )
);
const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();
  useParallax(0.6, (value2) => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty("--offset", `${value2}px`);
  });
  return /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$i.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$i.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx(Image$1, { cover: true, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx("div", { className: styles$i.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
};
const ProjectImage = ({ className, alt, ...rest }) => /* @__PURE__ */ jsx("div", { className: classes(styles$i.image, className), children: /* @__PURE__ */ jsx(Image$1, { reveal: true, alt, delay: 300, ...rest }) });
const ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$i.sectionContent, className),
    "data-width": width,
    ...rest
  }
);
const ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx(
  Heading,
  {
    className: classes(styles$i.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
);
const ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx(Text, { className: classes(styles$i.sectionText, className), size: "l", as: "p", ...rest });
const ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$i.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
);
const ProjectSectionColumns = ({ className, centered, ...rest }) => /* @__PURE__ */ jsx(
  ProjectSectionContent,
  {
    className: classes(styles$i.sectionColumns, className),
    "data-centered": centered,
    ...rest
  }
);
const { name: name$1, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name$1 },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name$1 },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
function VolkiharLogo() {
  return /* @__PURE__ */ jsxs("svg", { width: "532", height: "344", viewBox: "0 0 532 344", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M294.971 81.133c22.724 29.428 35.373 45.546 37.95 48.354 5.486 5.982 8.123 9.267 19.709 16.895 6.486 4.394 14.942 7.61 25.37 9.651V159h-54.38L261 77.977V159C191.123 68.072 153.683 20.04 148.683 14.903c-5-5.136-12.56-8.026-22.683-8.668V0l69.584.14V6c-4.38 0-7.994.587-10.845 1.762-4.275 1.761-4.42 5.768-3.412 7.141 1.4 2.138 23.229 30.34 65.487 84.609v-70.08c0-11.449-6.327-16.432-11.333-20.102-3.337-2.447-9.281-3.557-17.832-3.33V.14H289V6c-5.556-.235-13.818.235-19.896 3.33-4.052 2.063-6.753 6.857-8.103 14.382v13.29a24524.908 24524.908 0 0 0 25.533 33.194c23.526-29.352 36.705-45.71 39.538-49.074 4.481-5.32 2.935-11.023-1.577-13.119-3.007-1.397-7.648-2.178-13.922-2.342V0H373v5.661c-7.55 0-13.964 1.666-18.393 3.891-2.954 1.483-6.835 4.828-11.644 10.035l-47.992 61.546z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18.3 254.75L6.05 224.1c-1.1-2.8-1.85-3.35-3.6-3.85-.75-.2-1.6-.2-1.9-.2-.3 0-.4-.15-.4-.35 0-.3.5-.35 1.3-.35 2.4 0 5.1.15 5.7.15.5 0 2.65-.15 4.55-.15.9 0 1.35.1 1.35.35 0 .25-.15.35-.5.35-.55 0-1.45.05-1.9.25-.55.25-.65.65-.65 1 0 .45.45 1.8 1 3.2l10.2 26.55c2.9-6.7 9.6-24.15 10.7-27.75.25-.75.45-1.45.45-1.9 0-.4-.15-.9-.65-1.15-.6-.2-1.35-.2-1.9-.2-.3 0-.55-.05-.55-.3 0-.3.3-.4 1.1-.4 2 0 4.3.15 4.9.15.3 0 2.45-.15 3.9-.15.55 0 .85.1.85.35 0 .25-.2.35-.6.35-.35 0-1.45 0-2.4.6-.65.45-1.4 1.3-2.75 4.7-.55 1.4-3.05 7.4-5.6 13.55-3.05 7.3-5.3 12.7-6.45 15.15-1.4 3-1.6 3.8-2.1 3.8-.6 0-.85-.7-1.8-3.1zM61 257.7c-12.25 0-17.25-9.1-17.25-16.7 0-6.65 5.15-16.6 17.5-16.6 9.9 0 17.45 5.9 17.45 15.95 0 9.55-7.05 17.35-17.7 17.35zm1.25-1.7C65.6 256 74 254.3 74 241.6c0-10.05-6.2-15.65-13.05-15.65-6.95 0-12.55 4.3-12.55 13.75 0 9.8 5.45 16.3 13.85 16.3zm33.6-18.7v7.6c0 5.75.2 8.65 1.05 9.45.8.7 1.8 1 5.25 1 2.2 0 4.2 0 5.3-1.4.5-.75.85-1.75.95-2.5.05-.4.15-.6.4-.6.2 0 .3.15.3.65s-.3 3.35-.6 4.5c-.3 1-.25 1.25-2.65 1.25-3.4 0-7.15-.25-12.15-.25-1.65 0-2.65.15-4.4.15-.5 0-.8-.1-.8-.4 0-.15.15-.3.55-.3s.8 0 1.2-.1c.85-.15 1.15-1.15 1.3-2.35.3-1.9.2-5.35.2-9.2v-7.5c0-6.6 0-7.7-.1-9.05-.1-1.4-.3-2.3-2-2.5-.3-.05-.85-.05-1.25-.05-.35 0-.55-.15-.55-.35 0-.25.25-.35.75-.35 2.1 0 5.1.15 5.2.15.7 0 3.75-.15 5.15-.15.5 0 .65.15.65.35 0 .2-.25.35-.55.35-.35 0-.85.05-1.35.1-1.4.2-1.7 1-1.8 2.45-.1 1.35-.05 2.45-.05 9.05zm29.2 0v2.35c2.3-2.05 7.75-7.25 10-9.7 2.4-2.65 2.6-2.9 2.6-3.45 0-.35-.2-.6-.8-.8-.35-.1-.55-.2-.55-.4 0-.15.1-.3.5-.3.3 0 1.8.15 3.4.15 1.5 0 4.25-.15 4.9-.15.7 0 .8.1.8.3 0 .2-.15.35-.55.4-.8.05-1.85.25-2.45.5-1.2.4-1.85.95-4.45 3.3-3.65 3.3-8 7.55-10.2 9.55 2.7 2.8 10.8 10.8 12.9 12.7 3.5 3.2 5.2 4.1 7.2 4.55.55.1.3.05 1.15.15.45.05.7.15.7.4 0 .2-.25.3-.8.3h-3.25c-3.9 0-4.9-.45-6.9-1.85-2.25-1.6-10.25-9.8-14.2-14.45v3.95c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1zm33.3 7.5v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm27-6.4h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3H185.3c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm52.2 6.55h-9.1c-.25 0-.4.15-.5.4l-2.2 6.25c-.5 1.4-.85 2.75-.85 3.55 0 .9.55 1.3 1.65 1.3h.35c.45 0 .6.15.6.35 0 .25-.4.35-.75.35-1.1 0-3.4-.15-3.95-.15-.5 0-2.7.15-4.8.15-.55 0-.8-.1-.8-.35 0-.2.2-.35.6-.35.25 0 .7 0 1-.05 2.15-.2 3-1.85 3.85-3.95l10-26.35c.55-1.45.7-1.7 1.05-1.7.25 0 .45.2 1 1.6.7 1.65 7.5 19.1 10.15 25.35 1.65 3.95 3.1 4.6 3.8 4.85.65.25 1.35.25 1.7.25.35 0 .6.1.6.35 0 .25-.2.35-.75.35-.5 0-4.25 0-7.6-.1-.95-.05-1.25-.1-1.25-.35 0-.15.15-.3.35-.35.2-.1.5-.35.2-1.1l-3.95-10.05c-.1-.15-.2-.25-.4-.25zm-8.6-1.75h8c.2 0 .2-.15.15-.3l-3.95-11.05c-.25-.7-.3-.7-.55 0l-3.75 11.05c-.1.2 0 .3.1.3zm31.15 1.6v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.45-2.1-2-2.4-.3-.05-.8-.1-1.2-.1-.35 0-.55-.1-.55-.3 0-.2.15-.35.6-.35 2.15 0 5.2.15 5.3.15.45 0 3.85-.15 5.25-.15 2.8 0 5.85.25 8.2 1.9.95.7 3 2.7 3 6.1 0 2.75-1.35 6.25-5.3 9.45 3.65 4.5 6.65 8.2 9.2 10.85 2.4 2.45 3.9 2.85 5.3 3.05.35.05 1.4.1 1.55.1.4 0 .55.15.55.35 0 .25-.2.35-.9.35h-3.5c-2.35 0-3.45-.15-4.55-.6-2.1-.9-3.6-3.15-6.2-6.5-1.95-2.4-3.95-5.1-4.8-6.15-.2-.2-.3-.3-.6-.3l-5.15-.05c-.2 0-.25.05-.25.25v.7c0 4 0 7.65.25 9.45.15 1.2.3 2.2 1.95 2.4.5.05 1.05.1 1.45.1.45 0 .65.15.65.3 0 .25-.2.4-.7.4-2.6 0-5.4-.15-5.6-.15-.8 0-3 .15-4.35.15-.5 0-.7-.1-.7-.4 0-.15.3-.3.6-.3.35 0 .7 0 1.1-.1.85-.15 1.15-.7 1.3-1.9.25-1.8.2-5.9.2-9.65zm3.85-17.55v13.6c0 .25.05.5.25.6.65.35 2.65.65 4.45.65 1.05 0 2.3-.05 3.35-.75 1.5-.95 2.5-3.15 2.5-6.35 0-5.45-2.9-8.45-7.35-8.45-1.25 0-2.3.1-2.9.25-.15.05-.3.2-.3.45zm56.85 6.6v3.2c1.55-1.5 8.35-8.65 11.4-11.8 3-3.1 3.2-3.6 3.2-4.2 0-.4-.25-.8-.65-.95-.35-.15-.45-.25-.45-.45s.3-.3.75-.3c1.45 0 1.3.15 3 .15 1.55 0 4.5-.15 5.3-.15.7 0 .85.15.85.35 0 .2-.1.3-.55.35-.95.1-1.85.3-2.55.6-1.25.5-2.2 1.1-5.2 4-4.4 4.25-10.1 9.9-11.4 11.35 3.15 3.45 12.25 12.7 14.6 14.9 4.1 3.85 5.85 4.95 8.25 5.4.45.1.95.15 1.45.15.4 0 .7.1.7.35 0 .25-.2.35-.75.35h-3.7c-4.35 0-5.5-.55-7.85-2.4-3-2.35-12-12-16.4-17.25v5.15c0 4.8 0 8.75.25 10.85.15 1.45.45 2.55 1.95 2.75.7.1 1.7.2 2 .2.45 0 .6.2.6.35 0 .25-.2.35-.75.35-2.75 0-5.9-.15-6.15-.15s-3.2.15-4.7.15c-.55 0-.8-.05-.8-.35 0-.15.1-.35.55-.35.3 0 .85-.05 1.3-.15 1-.2 1.3-1.35 1.5-2.8.25-2.1.25-6.05.25-10.85v-8.8c0-7.8 0-9.2-.1-10.8-.1-1.7-.6-2.55-1.7-2.8-.55-.15-1.45-.2-1.8-.2-.4 0-.55-.1-.55-.3 0-.3.25-.4.8-.4 1.65 0 5 .15 5.25.15s3.4-.15 4.9-.15c.55 0 .8.1.8.35 0 .2-.1.3-.55.35-.55.05-.6.05-1.1.1-1.35.15-1.75 1.15-1.85 2.9-.1 1.6-.1 3-.1 10.8zm34.15 17.05c0-23.85.05-16.15 0-24.45 0-1.55.15-2.05.55-2.05.35 0 1.2 1 1.55 1.35.45.5 7.4 7.6 14.4 14.75 3.9 3.8 8.9 8.95 10.2 10.15l-.55-20.8c-.05-2.7-.35-3.6-1.7-3.95-.85-.15-1.6-.2-1.95-.2-.5 0-.6-.2-.6-.4 0-.25.4-.3.9-.3 2.15 0 4.25.15 4.7.15.5 0 2.05-.15 4-.15.55 0 .7.05.7.3 0 .2-.15.35-.45.4-.3.05-.7.05-1.25.15-1.15.25-1.5.75-1.5 3.75l-.1 25.1c0 2.5-.1 2.75-.45 2.75s-.85-.35-3.3-2.65c-.2-.1-7.15-7-11.5-11.25-5.2-5.4-10.2-10.6-11.45-11.9l.65 19.55c.1 3.45.4 4.75 1.65 5.05.8.2 1.65.2 2.05.2.4 0 .6.15.6.35 0 .25-.25.35-.8.35-2.7 0-4.5-.15-4.85-.15-.35 0-2.2.15-4.35.15-.45 0-.75-.05-.75-.35 0-.2.2-.35.7-.35.35 0 .9 0 1.55-.2 1.1-.35 1.35-1.7 1.35-5.35zm46.3-6.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm46.95 4.15v4.5c0 2-.05 2.05-.6 2.35-2.75 1.4-6.75 1.9-9.2 1.9-3.25 0-9.55-.25-14.65-4.5-2.7-2.25-5.4-6.45-5.4-12.15 0-6.8 3.45-11.65 7.55-14.1 3.85-2.25 8.1-2.55 11.15-2.55 3.2 0 5.35.4 7.15.7.8.15 2.75.4 3.8.45.4 0 .4.2.4.4 0 .6-.35 2.1-.35 6.5 0 .7-.05.9-.4.9-.25 0-.3-.3-.35-.6 0-.45-.2-2-.95-3.1-1.15-1.65-4.75-3.5-10.35-3.5-2.7 0-5.85.1-9.2 2.65-2.55 1.95-4.2 5.75-4.2 10.7 0 5.95 3.25 10.35 4.55 11.6 3.3 3.2 7 4.65 11.35 4.65 1.4 0 3.6-.25 4.75-.85.5-.3.85-.8.85-1.5v-7.2c0-3.3-.25-3.95-2-4.2-.3-.05-.8-.1-1.2-.1-.4 0-.6-.2-.6-.35 0-.25.2-.35.75-.35 2 0 4.9.1 5.1.1.2 0 3.15-.1 4.5-.1.5 0 .7.1.7.35 0 .15-.15.35-.6.35-.35 0-.45 0-.85.05-1.2.15-1.5 1.05-1.6 2.5-.1 1.45-.1 2.7-.1 4.5zm20.6-10.55h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3h-18.15c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm50.65-11.45v17.85c0 3.85.05 7.4.25 9.25.15 1.2.25 1.9 1.5 2.2.6.15 1.55.2 1.95.2.4 0 .6.15.6.3 0 .25-.15.4-.65.4-2.55 0-5.5-.15-5.7-.15-.2 0-3.15.15-4.45.15-.55 0-.75-.1-.75-.35 0-.15.15-.35.55-.35s.7 0 1.1-.05c.95-.15 1.1-.75 1.3-2.45.2-1.8.2-5.4.2-9.15v-17.85c-1.65 0-4.3 0-6.3.05-3.2.05-3.9.55-4.6 1.6-.45.7-.65 1.3-.75 1.55-.15.35-.25.4-.45.4s-.25-.2-.25-.45c-.05-.3.7-3.6 1-4.95.15-.6.3-.8.45-.8.35 0 1.3.45 2.2.55 1.75.2 3.15.25 3.2.25h16.4c1.4 0 2.9-.1 3.6-.25.65-.15.8-.2.95-.2.2 0 .3.25.3.45 0 1.4-.1 4.7-.1 5.1 0 .45-.2.6-.35.6-.25 0-.35-.2-.35-.6 0-.15 0-.2-.05-.7-.2-2-.85-2.5-5.9-2.55-1.9 0-3.45-.05-4.9-.05z",
        fill: "var(--primary)",
        fillRule: "nonzero"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M228.5 342.162h75.55",
        stroke: "var(--primary)",
        strokeWidth: "2",
        strokeLinecap: "square"
      }
    )
  ] });
}
const textSection = "_textSection_1uaiw_1";
const logoContainer = "_logoContainer_1uaiw_7";
const armor = "_armor_1uaiw_21";
const styles$h = {
  textSection,
  logoContainer,
  armor
};
const Carousel = lazy(
  () => import("./index-DaO3VwLb.js").then((module) => ({ default: module.Carousel }))
);
const Armor = lazy(() => import("./armor-NXTdYekr.js").then((module) => ({ default: module.Armor })));
const title$6 = "Volkihar Knight";
const description$4 = "A lore-friendly armor mod for The Elder Scrolls V: Skyrim. Released on PC and Xbox One with over one million downloads across both platforms.";
const roles$2 = ["3D Modelling", "Texturing", "Graphic Design"];
const meta$8 = () => {
  return baseMeta({ title: title$6, description: description$4, prefix: "Projects" });
};
function VolkiharKnight() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          srcSet: `${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`,
          width: 1280,
          height: 720,
          placeholder: volkiharBackgroundPlaceholder,
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$6,
          description: description$4,
          linkLabel: "Get the mod",
          url: "https://www.nexusmods.com/skyrimspecialedition/mods/4806/",
          roles: roles$2
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`,
          width: 800,
          height: 436,
          placeholder: volkiharBannerPlaceholder,
          alt: "A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image.",
          sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        Image$1,
        {
          srcSet: `${volkiharBook} 490w, ${volkiharBookLarge} 960w`,
          width: 480,
          height: 300,
          placeholder: volkiharBookPlaceholder,
          alt: "A book containing a sketch depicting the logo and armor",
          sizes: `(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { children: [
        /* @__PURE__ */ jsx("div", { className: styles$h.armor, children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(Armor, { alt: "3D model of the Volkihar Knight armor" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: styles$h.textSection, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Armor design" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "As a player I noticed there weren’t any heavy armor options for the Volkihar faction. This kinda sucks when you’ve specialised in heavy armor and decide to join the faction and discover they all wear light armor." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "My solution was to create a mod that combines meshes from the Volkihar faction armor with heavy plate armor. The mod builds upon textures and meshes from the base game, so it unifies with Skyrim’s overall aesthetic. I combined and modified the meshes in 3DS Max. To establish a cohesive design across the set, I edited existing textures, and designed custom textures in Photoshop." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx("div", { className: styles$h.logoContainer, children: /* @__PURE__ */ jsx(
          VolkiharLogo,
          {
            role: "img",
            "aria-label": "The Volkihar Knight logo, a monogram using the letters 'V' and 'K"
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, noMargin: true, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Identity design" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The monogram uses custom designed typography to get the right balance of weight and angularity. I combined this with Trajan for the text, which is also used for Skyrim’s game title wordmark." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
        Carousel,
        {
          placeholder: volkiharSlidePlaceholder,
          images: [
            {
              srcSet: `${volkiharSlide1} 960w, ${volkiharSlide1Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A female character wearing the black coloured armor set."
            },
            {
              srcSet: `${volkiharSlide2} 960w, ${volkiharSlide2Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A close up of the custom gauntlets design."
            },
            {
              srcSet: `${volkiharSlide3} 960w, ${volkiharSlide3Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A female character wielding a sword and wearing the red coloured armor."
            }
          ],
          width: 1920,
          height: 1080
        }
      ) }) }) }),
      /* @__PURE__ */ jsx(
        ProjectSection,
        {
          backgroundElement: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`,
              width: 1280,
              height: 720,
              placeholder: volkiharEnderalPlaceholder,
              alt: "A promotional image from Enderal showing several characters in the game overlooking a distant city.",
              sizes: `100vw`
            }
          ),
          children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, centerMobile: true, noMargin: true, children: [
            /* @__PURE__ */ jsx(
              Image$1,
              {
                srcSet: `${volkiharEnderalLogo} 180w, ${volkiharEnderalLogoLarge} 360w`,
                width: 180,
                height: 200,
                placeholder: volkiharEnderalLogoPlaceholder,
                alt: "The Enderal game logo",
                sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`,
                style: { maxWidth: 220, width: "100%", marginBottom: 30 }
              }
            ),
            /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Featured in Enderal" }),
            /* @__PURE__ */ jsx(ProjectSectionText, { children: "I was super stoked to have my work featured in the major standalone mod Enderal, which won best fan creation at the game awards in 2016. Within the game my armor design can be found being used for the Wandering Mage armor set." }),
            /* @__PURE__ */ jsx(
              Button,
              {
                secondary: true,
                iconHoverShift: true,
                icon: "chevron-right",
                href: "https://store.steampowered.com/app/933480/Enderal_Forgotten_Stories/",
                children: "View on Steam"
              }
            )
          ] }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VolkiharKnight,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
const backgroundSprLarge = "/assets/spr-background-large-nYeU3Kau.jpg";
const backgroundSprPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCAAQABgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFCP/EABgBAQADAQAAAAAAAAAAAAAAAAMBAgQF/9oADAMBAAIQAxAAAADJ1+YyYzk2GgjwSltH/8QAHxAAAAUFAQEAAAAAAAAAAAAAAAECAwQFERITMSFh/9oACAEBAAE/AI8S7dyCqdm19D8TT0NzNasS4DqSkiVJN70x/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBEgMRE//aAAgBAgEBPwCxOQVtlTmKtT//xAAaEQACAgMAAAAAAAAAAAAAAAAAAQMSAgQR/9oACAEDAQE/AM5uMWzxmE1hw2QtVMjiof/Z";
const backgroundSpr = "/assets/spr-background-BYcr6wKu.jpg";
const imageSprDesignSystemLightLarge = "/assets/sawl-student-BVx_WUgB.jpg";
const imageSprDesignSystemDarkPlaceholder = "/assets/spr-design-system-dark-placeholder-BnG6UVwD.png";
const imageSprDesignSystemLight = "/assets/sawl-student-BVx_WUgB.jpg";
const imageSprDesignSystemLightPlaceholder = "/assets/spr-design-system-light-placeholder-rqb9V2TD.png";
const sprTextureLarge = "/assets/sawl-DNfXtAl-.jpg";
const sprTexturePlaceholder = "/assets/spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg";
const sprTexture = "/assets/sawl-DNfXtAl-.jpg";
const imageSprLessonBuilderLightPlaceholder = "/assets/spr-lesson-builder-light-placeholder-Dq8oUDzc.jpg";
const container$1 = "_container_vdycn_2";
const options = "_options_vdycn_6";
const button$2 = "_button_vdycn_26";
const indicator = "_indicator_vdycn_67";
const styles$g = {
  container: container$1,
  options,
  button: button$2,
  indicator
};
const SegmentedControlContext = createContext({});
const SegmentedControl = ({
  children,
  currentIndex,
  onChange,
  label: label2,
  ...props
}) => {
  const id = useId();
  const labelId = `${id}segmented-control-label`;
  const optionRefs = useRef([]);
  const [indicator2, setIndicator] = useState();
  const handleKeyDown = (event) => {
    const { length } = optionRefs.current;
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1) % length;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      onChange(prevIndex);
      optionRefs.current[prevIndex].current.focus();
    } else if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      onChange(nextIndex);
      optionRefs.current[nextIndex].current.focus();
    }
  };
  const registerOption = useCallback((optionRef) => {
    optionRefs.current = [...optionRefs.current, optionRef];
  }, []);
  const unRegisterOption = useCallback((optionRef) => {
    optionRefs.current = optionRefs.current.filter((ref) => ref !== optionRef);
  }, []);
  useEffect(() => {
    var _a;
    const currentOption = (_a = optionRefs.current[currentIndex]) == null ? void 0 : _a.current;
    const resizeObserver = new ResizeObserver(() => {
      const rect = currentOption == null ? void 0 : currentOption.getBoundingClientRect();
      const left = currentOption == null ? void 0 : currentOption.offsetLeft;
      setIndicator({ width: rect == null ? void 0 : rect.width, left });
    });
    resizeObserver.observe(currentOption);
    return () => {
      resizeObserver.disconnect();
    };
  }, [currentIndex]);
  return /* @__PURE__ */ jsx(
    SegmentedControlContext.Provider,
    {
      value: { optionRefs, currentIndex, onChange, registerOption, unRegisterOption },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: styles$g.container,
          role: "radiogroup",
          tabIndex: "0",
          "aria-labelledby": labelId,
          onKeyDown: handleKeyDown,
          ...props,
          children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { as: "label", id: labelId, children: label2 }),
            /* @__PURE__ */ jsxs("div", { className: styles$g.options, children: [
              !!indicator2 && /* @__PURE__ */ jsx(
                "div",
                {
                  className: styles$g.indicator,
                  "data-last": currentIndex === optionRefs.current.length - 1,
                  style: cssProps(indicator2)
                }
              ),
              children
            ] })
          ]
        }
      )
    }
  );
};
const SegmentedControlOption = ({ children, ...props }) => {
  const { optionRefs, currentIndex, onChange, registerOption, unRegisterOption } = useContext(SegmentedControlContext);
  const optionRef = useRef();
  const index2 = optionRefs.current.indexOf(optionRef);
  const isSelected = currentIndex === index2;
  useEffect(() => {
    registerOption(optionRef);
    return () => {
      unRegisterOption(optionRef);
    };
  }, [registerOption, unRegisterOption]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: styles$g.button,
      tabIndex: isSelected ? 0 : -1,
      role: "radio",
      "aria-checked": isSelected,
      onClick: () => onChange(index2),
      ref: optionRef,
      ...props,
      children
    }
  );
};
lazy(() => import("./earth-Dj7I7SOh.js").then((module) => ({ default: module.Earth })));
lazy(
  () => import("./earth-Dj7I7SOh.js").then((module) => ({ default: module.EarthSection }))
);
const title$5 = "Streamlining Education for the Modern Learner";
const description$3 = "I worked as the lead developer on Smart Approaches We Learn, an ed-tech platform for cohort-based learning in courses like Business Analysis, Data Analysis, and Software Product Development. The platform features student assignments, project reviews, grading, and secure payments via Stripe.";
const roles$1 = [
  "Lead Developer",
  "Full-Stack Development",
  "AWS & Cloudinary Integration",
  "Stripe Payment Integration",
  "CI/CD with CircleCI"
];
const meta$7 = () => {
  return baseMeta({ title: title$5, description: description$3, prefix: "Projects" });
};
const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const themes2 = ["dark", "light"];
  const handleThemeChange = (index2) => {
    toggleTheme(themes2[index2]);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          opacity: isDark ? 0.5 : 0.8,
          src: backgroundSpr,
          srcSet: `${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`,
          placeholder: backgroundSprPlaceholder
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$5,
          description: description$3,
          url: "https://www.smartapproaches.org/",
          roles: roles$1
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          raised: true,
          srcSet: isDark ? `${sprTexture} 1280w, ${sprTextureLarge} 2560w` : `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
          width: 1280,
          height: 800,
          placeholder: isDark ? sprTexturePlaceholder : imageSprLessonBuilderLightPlaceholder,
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`,
          alt: "The aero lesson builder app dragging an audio component into a screen about plant cells."
        },
        theme
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The problem" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "For years, Smart Approaches We Learn operated offline, relying on manual processes for student registrations, assignment submissions, project reviews, and performance tracking. This approach led to inefficiencies, communication gaps, and delays in feedback and grading. As the number of students and courses grew, it became increasingly difficult to manage operations effectively. Teachers struggled to track student progress, while students faced delays in receiving feedback. Additionally, administrators lacked real-time insights into enrollment trends and overall performance. To address these challenges, the organization decided to transition to a fully online platform, aiming to streamline processes, improve collaboration, and provide real-time access to critical learning data for all stakeholders." })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: isDark, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
          SegmentedControl,
          {
            currentIndex: themes2.indexOf(theme),
            onChange: handleThemeChange,
            children: [
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Dark theme" }),
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Light theme" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The SAWL Learning System" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "To streamline the learning experience for students, teachers, and administrators, it was essential to build a robust, flexible learning system. The SAWL Learning System was designed to support cohort-based learning, assignment submissions, project reviews, and real-time feedback. This system ensures consistency across the platform while providing an intuitive, engaging experience for all users." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            raised: true,
            srcSet: isDark ? `${imageSprDesignSystemLight} 1280w, ${imageSprDesignSystemLightLarge} 2560w` : `${imageSprDesignSystemLight} 1280w, ${imageSprDesignSystemLightLarge} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? imageSprDesignSystemDarkPlaceholder : imageSprDesignSystemLightPlaceholder,
            alt: "The homepage of the students dashboard.",
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Developer Documentation" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            "For technical insights into the platform's architecture, endpoints, and integrations, please refer to the comprehensive API documentation available here:",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://api.smartapproaches.online/api/docs",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Swagger API Docs"
              }
            ),
            ". For a broader view of the platform and its functionality, visit the staging site:",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.smartapproaches.online/",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Smart Approaches We Learn"
              }
            ),
            "."
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, centerMobile: true, noMargin: true, children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project Outcomes" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "The launch of Smart Approaches We Learn marked a significant milestone in the organization's journey toward modern, accessible, and efficient education. The new platform empowered students, teachers, and administrators with intuitive tools for seamless collaboration, assignment tracking, and performance monitoring. With automated processes, real-time feedback, and streamlined payments, the platform has not only improved learning outcomes but also laid a solid foundation for future growth and innovation in the ed-tech space." })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SmartSparrow,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "Scaling Write Operations with Redis and BullMQ",
  "abstract": "Efficiently handling write-heavy operations requires a robust, scalable, and performant queuing system. Redis, combined with BullMQ, provides an excellent solution for managing high-throughput tasks with reliability and simplicity. In this article, I’ll walk through the principles of using Redis with BullMQ to handle write operations effectively.",
  "date": "2025-02-16",
  "banner": "/static/bull-mq.png"
};
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment$1, {
    children: [jsx(_components.h2, {
      id: "abstract",
      children: "Abstract"
    }), "\n", jsx(_components.p, {
      children: "Efficiently handling write-heavy operations requires a robust, scalable, and performant queuing system. Redis, combined with BullMQ, provides an excellent solution for managing high-throughput tasks with reliability and simplicity. In this article, I’ll walk through the principles of using Redis with BullMQ to handle write operations effectively."
    }), "\n", jsx(_components.h2, {
      id: "introduction-the-challenge-of-write-operations",
      children: "Introduction: The Challenge of Write Operations"
    }), "\n", jsx(_components.p, {
      children: "When building applications with frequent write operations—like real-time messaging apps, transaction systems, or analytics platforms—managing database writes efficiently becomes critical. Without a proper queuing strategy, these operations can overwhelm databases, leading to performance degradation, deadlocks, and increased response times."
    }), "\n", jsxs(_components.p, {
      children: ["In one of my recent projects, I leveraged ", jsx(_components.strong, {
        children: "Redis"
      }), " and ", jsx(_components.strong, {
        children: "BullMQ"
      }), " to handle a high-volume write workload efficiently. Redis, known for its speed and simplicity, combined with BullMQ’s queue management capabilities, provided a scalable solution to process database writes asynchronously."]
    }), "\n", jsx(_components.h2, {
      id: "why-redis-and-bullmq",
      children: "Why Redis and BullMQ?"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Redis:"
        }), " In-memory key-value store with exceptional performance for caching, queuing, and real-time analytics."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "BullMQ:"
        }), " A robust queue library built on Redis, offering advanced job processing, delayed tasks, and retries out-of-the-box."]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "key-benefits",
      children: "Key Benefits"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Asynchronous processing to avoid write contention."
      }), "\n", jsx(_components.li, {
        children: "Automatic retries, failure tracking, and concurrency control."
      }), "\n", jsx(_components.li, {
        children: "Straightforward integration with existing Node.js applications."
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "system-architecture",
      children: "System Architecture"
    }), "\n", jsx(_components.p, {
      children: "The architecture for handling write operations using Redis and BullMQ is straightforward:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "API Layer:"
        }), " Accepts incoming write requests."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Queue Layer (BullMQ):"
        }), " Queues write jobs for processing."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Worker Layer:"
        }), " Processes queued jobs and performs database writes."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Redis Layer:"
        }), " Handles queue management and job state tracking."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "step-by-step-implementation",
      children: "Step-by-Step Implementation"
    }), "\n", jsx(_components.h3, {
      id: "1-install-dependencies",
      children: "1. Install Dependencies"
    }), "\n", jsx(_components.pre, {
      className: "language-bash",
      children: jsxs(_components.code, {
        className: "language-bash",
        children: [jsx(_components.span, {
          className: "token function",
          children: "npm"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "install"
        }), " bullmq ioredis\n"]
      })
    }), "\n", jsx(_components.h3, {
      id: "2-configuring-redis",
      children: "2. Configuring Redis"
    }), "\n", jsx(_components.pre, {
      className: "language-javascript",
      children: jsxs(_components.code, {
        className: "language-javascript",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "Redis"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "require"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'ioredis'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n", jsx(_components.span, {
          className: "token comment",
          children: "// Redis connection"
        }), "\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " redis ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "new"
        }), " ", jsx(_components.span, {
          className: "token class-name",
          children: "Redis"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token literal-property property",
          children: "host"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token string",
          children: "'localhost'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), "\n  ", jsx(_components.span, {
          className: "token literal-property property",
          children: "port"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "6379"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), "\n  ", jsx(_components.span, {
          className: "token literal-property property",
          children: "maxRetriesPerRequest"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token keyword null nil",
          children: "null"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token comment",
          children: "// Prevents silent failures"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\nredis", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "on"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'connect'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token arrow operator",
          children: "=>"
        }), " ", jsx(_components.span, {
          className: "token console class-name",
          children: "console"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "log"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'Redis connected.'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\nredis", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "on"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'error'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token parameter",
          children: "err"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token arrow operator",
          children: "=>"
        }), " ", jsx(_components.span, {
          className: "token console class-name",
          children: "console"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "error"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'Redis error:'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " err", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.h3, {
      id: "3-setting-up-the-queue-with-bullmq",
      children: "3. Setting Up the Queue with BullMQ"
    }), "\n", jsx(_components.pre, {
      className: "language-javascript",
      children: jsxs(_components.code, {
        className: "language-javascript",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "Queue"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "require"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'bullmq'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " writeQueue ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "new"
        }), " ", jsx(_components.span, {
          className: "token class-name",
          children: "Queue"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'writeQueue'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " ", jsx(_components.span, {
          className: "token literal-property property",
          children: "connection"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " redis ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n", jsx(_components.span, {
          className: "token comment",
          children: "// Function to add jobs to the queue"
        }), "\n", jsx(_components.span, {
          className: "token keyword",
          children: "async"
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "queueWriteOperation"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token parameter",
          children: "data"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "await"
        }), " writeQueue", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "add"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'writeJob'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " data", jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token literal-property property",
          children: "attempts"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "5"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token comment",
          children: "// Retry failed jobs up to 5 times"
        }), "\n    ", jsx(_components.span, {
          className: "token literal-property property",
          children: "backoff"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " ", jsx(_components.span, {
          className: "token literal-property property",
          children: "type"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token string",
          children: "'exponential'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token literal-property property",
          children: "delay"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "1000"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token comment",
          children: "// Exponential backoff"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\nmodule", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "exports"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " queueWriteOperation ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.h3, {
      id: "4-processing-jobs-with-bullmq-workers",
      children: "4. Processing Jobs with BullMQ Workers"
    }), "\n", jsx(_components.pre, {
      className: "language-javascript",
      children: jsxs(_components.code, {
        className: "language-javascript",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "Worker"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "require"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'bullmq'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n", jsx(_components.span, {
          className: "token comment",
          children: "// Database simulation"
        }), "\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " mockDatabase ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "["
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "]"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " worker ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "new"
        }), " ", jsx(_components.span, {
          className: "token class-name",
          children: "Worker"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'writeQueue'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token keyword",
          children: "async"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token parameter",
          children: "job"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token arrow operator",
          children: "=>"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " key", jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " value ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " job", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "data"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  \n  ", jsx(_components.span, {
          className: "token comment",
          children: "// Simulate a write operation"
        }), "\n  mockDatabase", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "push"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " key", jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " value ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n  ", jsx(_components.span, {
          className: "token console class-name",
          children: "console"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "log"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsx(_components.span, {
            className: "token string",
            children: "Written to database: "
          }), jsxs(_components.span, {
            className: "token interpolation",
            children: [jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "${"
            }), "key", jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token string",
            children: " -> "
          }), jsxs(_components.span, {
            className: "token interpolation",
            children: [jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "${"
            }), "value", jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " ", jsx(_components.span, {
          className: "token literal-property property",
          children: "connection"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " redis ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n", jsx(_components.span, {
          className: "token comment",
          children: "// Handle errors"
        }), "\nworker", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "on"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'failed'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: ["job", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " err"]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token arrow operator",
          children: "=>"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token console class-name",
          children: "console"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "error"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsx(_components.span, {
            className: "token string",
            children: "Job "
          }), jsxs(_components.span, {
            className: "token interpolation",
            children: [jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "${"
            }), "job", jsx(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx(_components.span, {
              className: "token property-access",
              children: "id"
            }), jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token string",
            children: " failed: "
          }), jsxs(_components.span, {
            className: "token interpolation",
            children: [jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "${"
            }), "err", jsx(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx(_components.span, {
              className: "token property-access",
              children: "message"
            }), jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.h3, {
      id: "5-triggering-write-operations",
      children: "5. Triggering Write Operations"
    }), "\n", jsx(_components.pre, {
      className: "language-javascript",
      children: jsxs(_components.code, {
        className: "language-javascript",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " queueWriteOperation ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "require"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'./writeQueue'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n", jsx(_components.span, {
          className: "token comment",
          children: "// Simulating high-frequency write requests"
        }), "\n", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "for"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token keyword",
          children: "let"
        }), " i ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), " i ", jsx(_components.span, {
          className: "token operator",
          children: "<"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "1000"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), " i", jsx(_components.span, {
          className: "token operator",
          children: "++"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token function",
          children: "queueWriteOperation"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), " ", jsx(_components.span, {
          className: "token literal-property property",
          children: "key"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsx(_components.span, {
            className: "token string",
            children: "user_"
          }), jsxs(_components.span, {
            className: "token interpolation",
            children: [jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "${"
            }), "i", jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token literal-property property",
          children: "value"
        }), jsx(_components.span, {
          className: "token operator",
          children: ":"
        }), " ", jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsx(_components.span, {
            className: "token string",
            children: "data_"
          }), jsxs(_components.span, {
            className: "token interpolation",
            children: [jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "${"
            }), "i", jsx(_components.span, {
              className: "token interpolation-punctuation punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n", jsx(_components.span, {
          className: "token console class-name",
          children: "console"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token method function property-access",
          children: "log"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token string",
          children: "'Queued 1000 write operations.'"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.h2, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "High-Throughput Requests:"
        }), " Incoming write requests are queued asynchronously with ", jsx(_components.code, {
          children: "queueWriteOperation()"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Background Processing:"
        }), " BullMQ workers process jobs from the queue in the background, executing write operations."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Error Handling & Retries:"
        }), " Failed jobs are retried with exponential backoff, minimizing data loss."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Scalability:"
        }), " Redis efficiently manages the queue even under high loads."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "optimizations-for-production",
      children: "Optimizations for Production"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Redis Clustering:"
        }), " For extremely high throughput, consider using a ", jsx(_components.strong, {
          children: "Redis Cluster"
        }), " to distribute the load across multiple nodes."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Concurrency Control:"
        }), " BullMQ allows you to configure worker concurrency to parallelize job processing."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Monitoring:"
        }), " Integrate ", jsx(_components.strong, {
          children: "Bull Dashboard"
        }), " or ", jsx(_components.strong, {
          children: "RedisInsight"
        }), " to track queue performance and job statuses."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "performance-insights",
      children: "Performance Insights"
    }), "\n", jsxs(_components.p, {
      children: ["In a test environment with ", jsx(_components.strong, {
        children: "1,000 write operations"
      }), ", the system handled all jobs in ", jsx(_components.strong, {
        children: "under 3 seconds"
      }), " with ", jsx(_components.strong, {
        children: "zero job failures"
      }), ". Redis’s in-memory performance combined with BullMQ's queue optimization resulted in predictable, low-latency writes even under heavy loads."]
    }), "\n", jsx(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", jsx(_components.p, {
      children: "Redis and BullMQ provide a powerful toolkit for handling write-heavy workloads. By offloading writes to a background queue, applications remain responsive while ensuring data consistency and reliability."
    }), "\n", jsxs(_components.p, {
      children: ["If you’re building applications that require high-throughput writes—like financial transactions, analytics logging, or real-time messaging—", jsx(_components.strong, {
        children: "Redis + BullMQ"
      }), " is a solid combination to consider."]
    }), "\n", jsx(_components.h2, {
      id: "tech-stack",
      children: "Tech Stack"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Backend:"
        }), " Node.js"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Queue:"
        }), " BullMQ"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Cache/Queue Storage:"
        }), " Redis"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Database:"
        }), " PostgreSQL (or your preferred DB)"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const __variableDynamicImportRuntimeHelper = (glob, path2, segs) => {
  const v = glob[path2];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path2 + (path2.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
function formatTimecode(time) {
  const hours = time / 1e3 / 60 / 60;
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor(((hours - h) * 60 - m) * 60);
  const c = Math.floor((((hours - h) * 60 - m) * 60 - s) * 1e3 / 10);
  return `${zeroPrefix(h)}:${zeroPrefix(m)}:${zeroPrefix(s)}:${zeroPrefix(c)}`;
}
function zeroPrefix(value2) {
  return value2 < 10 ? `0${value2}` : `${value2}`;
}
function readingTime(text2) {
  const wpm = 225;
  const words = text2.trim().split(/\s+/).length;
  const time = words / wpm;
  return time * 1e3 * 60;
}
async function getPosts() {
  const modules = /* @__PURE__ */ Object.assign({ "../articles.bull-mq.mdx": route4, "../articles.mysql_emoji_support.mdx": route1 });
  const build = await Promise.resolve().then(() => serverBuild);
  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post2]) => {
      let id = file.replace("../", "routes/").replace(/\.mdx$/, "");
      let slug = build.routes[id].path;
      if (slug === void 0) throw new Error(`No route for ${id}`);
      const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.bull-mq.mdx": () => import("./articles.bull-mq-BfVSCV83.js"), "../articles.mysql_emoji_support.mdx": () => import("./articles.mysql_emoji_support-D-Jwr4--.js") }), `../articles.${slug}.mdx`, 2);
      const readTime = readingTime(text2.default);
      const timecode2 = formatTimecode(readTime);
      return {
        slug,
        timecode: timecode2,
        frontmatter: post2.frontmatter
      };
    })
  );
  return sortBy(posts, (post2) => post2.frontmatter.date, "desc");
}
function sortBy(arr, key, dir = "asc") {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}
function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
const divider$1 = "_divider_ucnqf_2";
const line$1 = "_line_ucnqf_8";
const notch = "_notch_ucnqf_30";
const styles$f = {
  divider: divider$1,
  line: line$1,
  notch
};
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: classes(styles$f.divider, className),
    style: cssProps(
      {
        lineWidth,
        lineHeight,
        notchWidth,
        notchHeight,
        collapseDelay: numToMs(collapseDelay)
      },
      style
    ),
    ...rest,
    children: [
      /* @__PURE__ */ jsx("div", { className: styles$f.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$f.notch,
          "data-collapsed": collapsed,
          style: cssProps({ collapseDelay: numToMs(collapseDelay + 160) })
        }
      )
    ]
  }
);
Divider.defaultProps = {
  lineWidth: "100%",
  lineHeight: "2px",
  notchWidth: "90px",
  notchHeight: "10px",
  collapsed: false,
  collapseDelay: 0
};
function formatDate(date2) {
  return new Date(date2).toLocaleDateString("default", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
}
const articles = "_articles_nr520_3";
const grid$1 = "_grid_nr520_15";
const header$1 = "_header_nr520_53";
const heading$1 = "_heading_nr520_71";
const list$2 = "_list_nr520_76";
const skeleton = "_skeleton_nr520_85";
const skeletonBone = "_skeletonBone_nr520_94";
const post$1 = "_post_nr520_98";
const postLabel = "_postLabel_nr520_148";
const postTag = "_postTag_nr520_149";
const postLink = "_postLink_nr520_223";
const postDate = "_postDate_nr520_280";
const postImage = "_postImage_nr520_290";
const postDetails = "_postDetails_nr520_340";
const postFooter = "_postFooter_nr520_356";
const timecode$1 = "_timecode_nr520_370";
const barcode = "_barcode_nr520_383";
const styles$e = {
  articles,
  grid: grid$1,
  header: header$1,
  heading: heading$1,
  list: list$2,
  skeleton,
  skeletonBone,
  post: post$1,
  postLabel,
  postTag,
  postLink,
  postDate,
  postImage,
  postDetails,
  postFooter,
  timecode: timecode$1,
  barcode
};
function ArticlesPost({ slug, frontmatter: frontmatter2, timecode: timecode2, index: index2 }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title: title2, abstract, date: date2, featured, banner: banner2 } = frontmatter2;
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: styles$e.post,
      "data-featured": !!featured,
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: [
        featured && /* @__PURE__ */ jsx(Text, { className: styles$e.postLabel, size: "s", children: "Featured" }),
        featured && !!banner2 && /* @__PURE__ */ jsx("div", { className: styles$e.postImage, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            noPauseButton: true,
            play: !reduceMotion ? hovered : void 0,
            src: banner2,
            placeholder: `${banner2.split(".")[0]}-placeholder.jpg`,
            alt: "",
            role: "presentation"
          }
        ) }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            unstable_viewTransition: true,
            prefetch: "intent",
            to: `/articles/${slug}`,
            className: styles$e.postLink,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /* @__PURE__ */ jsxs("div", { className: styles$e.postDetails, children: [
              /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$e.postDate, children: [
                /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
                dateTime
              ] }),
              /* @__PURE__ */ jsx(Heading, { as: "h2", level: featured ? 2 : 4, children: title2 }),
              /* @__PURE__ */ jsx(Text, { size: featured ? "l" : "s", as: "p", children: abstract }),
              /* @__PURE__ */ jsxs("div", { className: styles$e.postFooter, children: [
                /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read article" }),
                /* @__PURE__ */ jsx(Text, { className: styles$e.timecode, size: "s", children: timecode2 })
              ] })
            ] })
          }
        ),
        featured && /* @__PURE__ */ jsx(Text, { "aria-hidden": true, className: styles$e.postTag, size: "s", children: "477" })
      ]
    }
  );
}
function SkeletonPost({ index: index2 }) {
  return /* @__PURE__ */ jsx(
    "article",
    {
      "aria-hidden": "true",
      className: classes(styles$e.post, styles$e.skeleton),
      "data-featured": "false",
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: /* @__PURE__ */ jsx("div", { className: styles$e.postLink, children: /* @__PURE__ */ jsxs("div", { className: styles$e.postDetails, children: [
        /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$e.postDate, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
          "Coming soon..."
        ] }),
        /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$e.skeletonBone,
            as: "h2",
            level: 4,
            style: { height: 24, width: "70%" }
          }
        ),
        /* @__PURE__ */ jsx(
          Text,
          {
            className: styles$e.skeletonBone,
            size: "s",
            as: "p",
            style: { height: 90, width: "100%" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: styles$e.postFooter, children: [
          /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read more" }),
          /* @__PURE__ */ jsx(Text, { className: styles$e.timecode, size: "s", children: "00:00:00:00" })
        ] })
      ] }) })
    }
  );
}
function Articles$1() {
  const { posts, featured } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const postsHeader = /* @__PURE__ */ jsxs("header", { className: styles$e.header, children: [
    /* @__PURE__ */ jsx(Heading, { className: styles$e.heading, level: 5, as: "h1", children: /* @__PURE__ */ jsx(DecoderText, { text: "Latest articles" }) }),
    /* @__PURE__ */ jsx(Barcode, { className: styles$e.barcode })
  ] });
  const postList = /* @__PURE__ */ jsxs("div", { className: styles$e.list, children: [
    !isSingleColumn && postsHeader,
    posts.map(({ slug, ...post2 }, index2) => /* @__PURE__ */ jsx(ArticlesPost, { slug, index: index2, ...post2 }, slug)),
    Array(2).fill().map((skeleton2, index2) => /* @__PURE__ */ jsx(SkeletonPost, { index: index2 }, index2))
  ] });
  const featuredPost = /* @__PURE__ */ jsx(ArticlesPost, { ...featured });
  return /* @__PURE__ */ jsxs("article", { className: styles$e.articles, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$e.content, children: [
      !isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$e.grid, children: [
        postList,
        featuredPost
      ] }),
      isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$e.grid, children: [
        postsHeader,
        featuredPost,
        postList
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Barcode({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      width: "153",
      height: "20",
      fill: "currentColor",
      viewBox: "0 0 153 20",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillOpacity: ".6",
          d: "M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
        }
      )
    }
  );
}
async function loader$4() {
  const allPosts = await getPosts();
  const featured = allPosts.filter((post2) => post2.frontmatter.featured)[0];
  const posts = allPosts.filter((post2) => (featured == null ? void 0 : featured.slug) !== post2.slug);
  return json({ posts, featured });
}
function meta$6() {
  return baseMeta({
    title: "Articles",
    description: "A collection of technical design and development articles. May contain incoherent ramblings."
  });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles$1,
  loader: loader$4,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const sliceAnnotationLarge = "/assets/BC-veri-CUNwD5Hw.png";
const sliceAnnotationPlaceholder = "/assets/slice-annotation-placeholder-CCGEuhhx.png";
const sliceAnnotation = "/assets/BC-veri-CUNwD5Hw.png";
const sliceTextureLarge = "/assets/BC-CBdEjUAW.jpg";
const sliceTexturePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k=";
const sliceTexture = "/assets/BC-CBdEjUAW.jpg";
const sliceBackgroundBarLarge = "/assets/BC2-Beyji16N.jpg";
const sliceBackgroundBarPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCABPACwDAREAAhEBAxEB/8QAGwAAAwEAAwEAAAAAAAAAAAAAAwQFBgECBwD/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/9oADAMBAAIQAxAAAACL730G0hIYHn2inTiJuWej6JekpwuKs/PCbTUcCmk/VsmXNU7HXvJrcyi1OPoOeOfoZLtArotzTXRjDo0RuvTlkL+lXXNdmkdqD4GBTo9CS/T0Ku5zIB5kaXJd0HLVjyYgaJp/SAGNhvMtLmorOawzjfTLNjKfPrTg6FXa3//EACQQAAICAgICAgIDAAAAAAAAAAECAAMEBRESEyEGFCIjMUFR/9oACAEBAAE/AKdw5vDFppvkYFIRnm7NWdUWHuZyHFuJEr27BCnaPkeRy0ov5lGe9R9NMDam/wDWzTYak5WOXUTLwLMe8ggxFPSY1h6w2mam5vsiaahMnA/P/J8l1lVbsygRk6sRMfHISfWZj6E0+vs8oYiYWeMDD4J49TcbUZbkAxMMOvaUETW4yXOOZjYVNGP29TbZbclUMr7vby0xlAxxK6yJrrWrePsm8HXmXP5nJMC9PcXOKL1iY/MxcXgTIBUROe0ChljUDsZV1ESxAssQWQ47f0IK3URi3aWJ0E8rAyq6YFCX/wAyzVVePmPrK+5gzPIse8Ayi3s0xdj9aH5AWTj3DtiTP//EABsRAAMAAwEBAAAAAAAAAAAAAAABAhAREiAh/9oACAECAQE/AOSoI+COcuRyKtCfikUQxZqhzsmdG8NjZK8M0LGjZVCoTz0MSF45NDOhUMWGjg5P/8QAHBEAAwADAQEBAAAAAAAAAAAAAAECAxESEBME/9oACAEDAQE/AOSpEiUcmvNDR1oVeNGikWSJHQ2VXiWjo0V4kPyijQpOT5jbFLZOE+Y1oTQ/zCxaKtI+pdnY2jLRkodaPodEvaMxRSFAsR//2Q==";
const sliceBackgroundBar = "/assets/BC2-Beyji16N.jpg";
const sliceBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIABQAIAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAADBQABBAL/2gAIAQEAAAAAS2TWvNO0h95v/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIF/9oACAECEAAAANmVL//EABcBAAMBAAAAAAAAAAAAAAAAAAADBAX/2gAIAQMQAAAA22Fn/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAECAwQRIRMiMf/aAAgBAQABPwDHxpTWydTgylbZPSSHmeJ6Qr42x2yPOoi3N6Ll7lXwrIcfD//EABgRAAIDAAAAAAAAAAAAAAAAAAABECFB/9oACAECAQE/ALjBn//EABoRAQADAAMAAAAAAAAAAAAAAAEAAhEDMTP/2gAIAQMBAT8AB3ZbjXLEOiU82f/Z";
const sliceIrlPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAZAC8DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAwUGBAf/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/2gAMAwEAAhADEAAAAImPTmugcIlNVBYmLYBaoxqLJulrSRXpRD1QZLJLrcbz7c2RoclzMNV9Qy6HLRlergJJ/8QAIRAAAQQCAQUBAAAAAAAAAAAAAQACAwQFERIGFCEzNBD/2gAIAQEAAT8Au3JXxb2u9c5/ErGQRzxK9juTzxCsUJIhvSrVnyu0QrJAr6UMQdKsW9sTAFXqG3KNNUvTTJIfITunmwP8BT2TIodmQALBYl8zQ5ypUYakPJWsu1hLQu8E35U97V098jVP85Vz2lVV/8QAGxEAAwADAQEAAAAAAAAAAAAAAAECAxAREjH/2gAIAQIBAT8AWpRQmI4JDfBvpKFO7oheiMJ45plmAn4M/8QAHBEAAwACAwEAAAAAAAAAAAAAAAECEBEDEiAh/9oACAEDAQE/AGzeJWxz4RI6N5hFfCrO2YOUYj//2Q==";
const sliceIrl = "/assets/BC-landing-DGvru0da.png";
const sliceSidebarLayersLarge = "/assets/BC-layer-A9iJce53.png";
const sliceSidebarLayersPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA8CAMAAABCfyqQAAAAxlBMVEUwMDMxMTQ2NjkzMzY4ODs0NDc8PD5CQkU6Oj01NTg/P0I+PkA9PUBEREdFRUdBQUNAQENJSUwyLzBHSEtMTE9HR0k3NDU0MjRIRUU2MC5FRklFQkM8ODhPT1E5Nzc9Vl9RUVRCPDw/ZnM+TVRASk9BRko9QUVFQEBCP0A8OTtFmbJCgpVEdoVAWmM6Rkw2QUZFpsJFjaNFh5s9anhEYms9X2tFVFo4TFRHTVE0O0AzNztJn7hJlKpBfI4/eYtCbnw+Ulo6UVogc3mqAAACmElEQVQ4y+WUW3PaMBCFJVuWZEuWpRiDAwFSKARyvzRNm97//5/qWdmTDAzJQ197XhB8Wu3u2R2YKkmqVKp04yaEL58/Xd59u709v/91xSpFqkiqbEJN8P77+fndj8WcGVOQDFRUypWr5dXi8uLi4ufD1ZIJLaO01tIW3q+vl/PHxcPicf50wxJQY22E8ZH1avl7Pv/zdH3zleVCeuQsEGwov1+vPkJAzxlLtHd13ZTeeFUHHMpxXdertX5OOUvMeHB6Oh04NQ6nOIQwgGqvE4K2xNfQqErV0+k0OOVc6ZQVOedMWFeHMFa+UM10MGhU15kUOSJzYXxVeSul9XCqkALSWogk4yyjXqgTaklK/AYlCcGUcaJkQn895VCa5Qk9y3meSCSxxHMgBhHGkaAwKA+FdEVE2AmHTFhVVt5YjRoIQj0jaAALK0WEO+Jpoo1BwgMsVoRCkxwJCe6Hoq+864Hti/oCOYQAX3SIpaSDOFoFZVm8wHZMQDVaw/d4AbhnXXmj2XazqWiAfaORZRCsHG43bRucg31WJGkHY6YM8OSsbVv43kNOFeYCylPAD5NJO1Hee0POQ4DJCzwjCHkZh91H4tzBxrlx3ShDFqcpQa3xDKoFbSfYZaeMJJqhOyEllpONELqhVXVYPWsl1gFtIGeMzGZbW6mKVkFqSbHwCq1QQTzFG0VVFEBCgEZInmYEc0CFtUYMQU0VEyVIoVZV2HWC1iDpC2R8NJxJpUplYT6wiJEZIGdHR8cjQNc48gCF9Cnpk+DxzLgwCGWBoDhWNAqhWrDj4YmpSlgAa1+9xc0YORpuZb/wcSr9yBAJjUa4Ct8I7Qw70rhjrwu2t417q9ez/1H8HUR6k71D+380/hbMif5D5IGcfwHADy8o/7eiGAAAAABJRU5ErkJggg==";
const sliceSidebarLayers = "/assets/BC-layer-A9iJce53.png";
const sliceSlidesLarge = "/assets/BC-chat-B9hMksLm.jpg";
const sliceSlidesPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAoAEADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgQBAwUG/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/9oADAMBAAIQAxAAAACwM4raZJhGZEsVgO5z2cq+7o358vKdkuGjLcN1R62nHXpwk85e7UptZbSwpDtSdLuzznc4LFgNZ9qtGNSPLXijGpyLGXSYDZvKP//EACMQAAEEAgEEAwEAAAAAAAAAAAIAAQMEBREGEiExQQcTFiL/2gAIAQEAAT8Al+P5kfEWCX69r8Q6bgqHgRGvwJqfihwvpQcQOyWlyHkX1kUMSr2p5LjGW0EdmZmcUVe7Ht++kOVmhMg9qPMWzsOqEz25iaQVXnOLLNEw9tq7Rglum5l7VPGUndi23ZNbp1R02n0mydawDg2tujwTHIUu/KhxAQG5Eq0taqbvpVmqT22kZm6lkMLKM5yMgp2I/G2UeKszuocDJE/Up2mh/l3QxyTA6Ku/WTEsfG0dkVaz9UZnidSWoJwYgdmUOTrxhpHm4RV7kFQi0qWcrE3Q3tTuDy+fKoUOsxNnX//EAB0RAQEBAQABBQAAAAAAAAAAAAEAEgIQAxEhMEH/2gAIAQIBAT8A+ss2SS/LUMcLYS3PVlvZsxHYE+p5JPiOGeGw2PJ1Pd//xAAeEQADAQEAAgMBAAAAAAAAAAAAAQIRAwQSEyExEP/aAAgBAwEBPwAXKs09GejM/k82yubRw8fftlQlJWI+j40z40UvVFLY0h0pLu0P2ZjFZrY4poapI5+QmsLuWiqWnuRjNSFRdaiebI1fpUNsXNkcaL41+ky8LrD/2Q==";
const sliceSlides = "/assets/BC-chat-B9hMksLm.jpg";
const columns = "_columns_sh3b4_1";
const grid = "_grid_sh3b4_5";
const gridImage = "_gridImage_sh3b4_16";
const gridBackground = "_gridBackground_sh3b4_28";
const gridForeground = "_gridForeground_sh3b4_41";
const gridText = "_gridText_sh3b4_57";
const sidebarImages = "_sidebarImages_sh3b4_69";
const sidebarImage = "_sidebarImage_sh3b4_69";
const styles$d = {
  columns,
  grid,
  gridImage,
  gridBackground,
  gridForeground,
  gridText,
  sidebarImages,
  sidebarImage
};
const title$4 = "Transforming Global Payments with Peer-to-Peer Solutions";
const description$2 = "This project involved building a secure, user-friendly platform for BananaCrystal, enabling seamless peer-to-peer USD transactions with blockchain technology, real-time transfers, and enhanced payment experiences.";
const roles = [
  "Senior Software Engineer",
  "Ruby on Rails",
  "Node.js",
  "Blockchain Integration",
  "FinTech Platform Development"
];
const meta$5 = () => {
  return baseMeta({ title: title$4, description: description$2, prefix: "Projects" });
};
const Slice = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$d.slice, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: sliceBackgroundBar,
          srcSet: `${sliceBackgroundBar} 1280w, ${sliceBackgroundBarLarge} 2560w`,
          width: 1280,
          height: 800,
          placeholder: sliceBackgroundPlaceholder,
          opacity: 0.8
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$4,
          description: description$2,
          url: "https://www.bananacrystal.com/",
          roles
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
          width: 800,
          height: 500,
          placeholder: sliceTexturePlaceholder,
          alt: "The Slice web application showing a selected user annotation.",
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { centered: true, className: styles$d.columns, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$d.imagesText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Bringing it together" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "As a developer at BananaCrystal, I contributed to building a secure, blockchain-powered peer-to-peer payment platform. The system was built on the Polygon blockchain to enable fast, low-cost USD transactions, addressing issues like high fees and slow processing times." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "We also developed robust card rails, allowing users to seamlessly link debit cards for transactions, enhancing accessibility and convenience for both personal and business use." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$d.sidebarImages, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            className: styles$d.sidebarImage,
            srcSet: `${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`,
            width: 350,
            height: 750,
            placeholder: sliceSidebarLayersPlaceholder,
            alt: "The layers sidebar design, now with user profiles.",
            sizes: `(max-width: ${media.mobile}px) 200px, 343px`
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: true, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Enhancing the Payment Experience" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "One major challenge we addressed was the lack of effective communication during payment disputes. To solve this, I implemented a peer-to-peer chat system, enabling real-time communication between users and the dispute resolution team." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "This feature streamlined the resolution process, allowing both parties to provide evidence, clarify issues, and reach quicker resolutions, significantly improving user satisfaction and platform trust." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: `${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`,
            width: 800,
            height: 500,
            placeholder: sliceSlidesPlaceholder,
            alt: "The new My Slides tab in slice, showing annotated and favorited slides.",
            sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsxs(ProjectSectionContent, { className: styles$d.grid, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$d.gridImage, children: [
          /* @__PURE__ */ jsx("div", { className: styles$d.gridBackground, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`,
              width: 440,
              height: 790,
              placeholder: sliceBackgroundBarPlaceholder,
              alt: "",
              role: "presentation",
              sizes: `(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: styles$d.gridForeground, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`,
              width: 440,
              height: 340,
              placeholder: sliceAnnotationPlaceholder,
              alt: "An annotation preview popover with statistics for shape perimeter and area.",
              sizes: `(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$d.gridText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Strengthening Profile Management" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "I enhanced profile management by integrating Sumsub for identity verification, preventing bad actors from accessing the platform. This improved security, ensured compliance, and streamlined the onboarding process." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project Outcomes" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "As part of a collaborative effort, we successfully delivered a secure and efficient P2P payment platform. Key achievements included the implementation of profile verification via Sumsub, a real-time dispute chat system, and card rails integration. These features enhanced transaction security, streamlined onboarding, and improved user trust in the platform." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            src: sliceIrl,
            width: 940,
            height: 500,
            placeholder: sliceIrlPlaceholder,
            alt: "Students at the University of New South Wales using the new collaborative annotation features"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Slice,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
async function action$1({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: "Module" }));
const clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};
const post = "_post_kr7uo_20";
const header = "_header_kr7uo_44";
const headerText = "_headerText_kr7uo_55";
const date = "_date_kr7uo_79";
const dateText = "_dateText_kr7uo_91";
const titleWordWrapper = "_titleWordWrapper_kr7uo_118";
const titleWord = "_titleWord_kr7uo_118";
const banner = "_banner_kr7uo_138";
const bannerImage = "_bannerImage_kr7uo_190";
const bannerImageBlur = "_bannerImageBlur_kr7uo_191";
const details$1 = "_details_kr7uo_202";
const arrow = "_arrow_kr7uo_209";
const timecode = "_timecode_kr7uo_233";
const wrapper = "_wrapper_kr7uo_254";
const content$3 = "_content_kr7uo_266";
const styles$c = {
  post,
  header,
  headerText,
  date,
  dateText,
  titleWordWrapper,
  titleWord,
  banner,
  bannerImage,
  bannerImageBlur,
  details: details$1,
  arrow,
  timecode,
  wrapper,
  content: content$3
};
const Post = ({ children, title: title2, date: date2, banner: banner2, timecode: timecode2 }) => {
  const scrollToHash = useScrollToHash();
  const imageRef = useRef();
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  useParallax(4e-3, (value2) => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty("--blurOpacity", clamp(value2, 0, 1));
  });
  const handleScrollIndicatorClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  const placeholder2 = `${banner2 == null ? void 0 : banner2.split(".")[0]}-placeholder.jpg`;
  return /* @__PURE__ */ jsxs("article", { className: styles$c.post, children: [
    /* @__PURE__ */ jsxs(Section, { children: [
      banner2 && /* @__PURE__ */ jsxs("div", { className: styles$c.banner, ref: imageRef, children: [
        /* @__PURE__ */ jsx("div", { className: styles$c.bannerImage, children: /* @__PURE__ */ jsx(Image$1, { role: "presentation", src: banner2, placeholder: placeholder2, alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: styles$c.bannerImageBlur, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            role: "presentation",
            src: placeholder2,
            placeholder: placeholder2,
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("header", { className: styles$c.header, children: /* @__PURE__ */ jsxs("div", { className: styles$c.headerText, children: [
        /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$c.date, ref: nodeRef, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px", collapsed: !visible }),
          /* @__PURE__ */ jsx(Text, { className: styles$c.dateText, "data-visible": visible, children: dateTime })
        ] }) }),
        /* @__PURE__ */ jsx(Heading, { level: 2, as: "h1", className: styles$c.title, "aria-label": title2, children: title2.split(" ").map((word2, index2) => /* @__PURE__ */ jsx("span", { className: styles$c.titleWordWrapper, children: /* @__PURE__ */ jsxs(
          "span",
          {
            className: styles$c.titleWord,
            style: cssProps({ delay: numToMs(index2 * 100 + 100) }),
            children: [
              word2,
              index2 !== title2.split(" ").length - 1 ? " " : ""
            ]
          }
        ) }, `${word2}-${index2}`)) }),
        /* @__PURE__ */ jsxs("div", { className: styles$c.details, children: [
          /* @__PURE__ */ jsx(
            Link$1,
            {
              to: "#postContent",
              className: styles$c.arrow,
              "aria-label": "Scroll to post content",
              onClick: handleScrollIndicatorClick,
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$c.timecode, children: timecode2 })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: styles$c.wrapper, id: "postContent", tabIndex: -1, children: /* @__PURE__ */ jsx(Text, { as: "div", size: "l", className: styles$c.content, children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const code$1 = "_code_113ft_2";
const actions = "_actions_113ft_159";
const copyIcon = "_copyIcon_113ft_176";
const lang = "_lang_113ft_198";
const styles$b = {
  code: code$1,
  actions,
  copyIcon,
  lang
};
const Code = (props) => {
  var _a;
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const elementRef = useRef();
  const copyTimeout = useRef();
  const lang2 = (_a = props.className) == null ? void 0 : _a.split("-")[1];
  const handleCopy = () => {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(elementRef.current.textContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$b.code, "data-theme": theme, children: [
    !!lang2 && /* @__PURE__ */ jsx(Text, { secondary: true, size: "s", className: styles$b.lang, children: lang2 }),
    /* @__PURE__ */ jsx("pre", { ref: elementRef, ...props }),
    /* @__PURE__ */ jsx("div", { className: styles$b.actions, children: /* @__PURE__ */ jsx(Button, { iconOnly: true, onClick: handleCopy, "aria-label": "Copy", children: /* @__PURE__ */ jsxs("span", { className: styles$b.copyIcon, children: [
      /* @__PURE__ */ jsx(Transition, { in: !copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "copy", "data-visible": visible }) }),
      /* @__PURE__ */ jsx(Transition, { in: copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "check", "data-visible": visible }) })
    ] }) }) })
  ] });
};
const list$1 = "_list_1ecfb_2";
const item = "_item_1ecfb_15";
const styles$a = {
  list: list$1,
  item
};
const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsx(Element, { className: classes(styles$a.list, className), ...rest, children });
};
const ListItem = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx("li", { className: styles$a.item, ...rest, children });
};
const heading = "_heading_69uyj_2";
const paragraph = "_paragraph_69uyj_14";
const list = "_list_69uyj_14";
const image$1 = "_image_69uyj_14";
const headingLink = "_headingLink_69uyj_19";
const code = "_code_69uyj_72";
const pre = "_pre_69uyj_90";
const hr = "_hr_69uyj_106";
const blockquote = "_blockquote_69uyj_120";
const strong = "_strong_69uyj_139";
const embed = "_embed_69uyj_143";
const styles$9 = {
  heading,
  paragraph,
  list,
  image: image$1,
  headingLink,
  code,
  pre,
  hr,
  blockquote,
  strong,
  embed
};
const PostHeadingLink = ({ id }) => {
  return /* @__PURE__ */ jsx(Link$1, { className: styles$9.headingLink, to: `#${id}`, "aria-label": "Link to heading", children: /* @__PURE__ */ jsx(Icon, { icon: "link" }) });
};
const PostH1 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 2, as: "h1", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH2 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 3, as: "h2", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH3 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 4, as: "h3", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH4 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 5, as: "h4", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostParagraph = ({ children, ...rest }) => {
  const hasSingleChild = Children.count(children) === 1;
  const firstChild = Children.toArray(children)[0];
  if (hasSingleChild && firstChild.type === PostImage) {
    return children;
  }
  return /* @__PURE__ */ jsx(Text, { className: styles$9.paragraph, size: "l", as: "p", ...rest, children });
};
const PostLink = ({ ...props }) => /* @__PURE__ */ jsx(Link, { ...props });
const PostUl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$9.list, ...props });
};
const PostOl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$9.list, ordered: true, ...props });
};
const PostLi = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(ListItem, { ...props, children });
};
const PostCode = ({ children, ...rest }) => /* @__PURE__ */ jsx("code", { className: styles$9.code, ...rest, children });
const PostPre = (props) => {
  return /* @__PURE__ */ jsx("div", { className: styles$9.pre, children: /* @__PURE__ */ jsx(Code, { ...props }) });
};
const PostBlockquote = (props) => {
  return /* @__PURE__ */ jsx("blockquote", { className: styles$9.blockquote, ...props });
};
const PostHr = (props) => {
  return /* @__PURE__ */ jsx("hr", { className: styles$9.hr, ...props });
};
const PostStrong = (props) => {
  return /* @__PURE__ */ jsx("strong", { className: styles$9.strong, ...props });
};
const PostImage = ({ src, alt, width, height, ...rest }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      className: styles$9.image,
      src,
      loading: "lazy",
      alt,
      width,
      height,
      ...rest
    }
  );
};
const Embed = ({ src }) => {
  return /* @__PURE__ */ jsx("div", { className: styles$9.embed, children: /* @__PURE__ */ jsx("iframe", { src, loading: "lazy", title: "Embed" }) });
};
const postMarkdown = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  p: PostParagraph,
  a: PostLink,
  ul: PostUl,
  ol: PostOl,
  li: PostLi,
  pre: PostPre,
  code: PostCode,
  blockquote: PostBlockquote,
  hr: PostHr,
  img: PostImage,
  strong: PostStrong,
  Embed
};
async function loader$3({ request }) {
  const slug = request.url.split("/").at(-1);
  const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.bull-mq.mdx": () => Promise.resolve().then(() => route4), "../articles.mysql_emoji_support.mdx": () => Promise.resolve().then(() => route1) }), `../articles.${slug}.mdx`, 2);
  const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.bull-mq.mdx": () => import("./articles.bull-mq-BfVSCV83.js"), "../articles.mysql_emoji_support.mdx": () => import("./articles.mysql_emoji_support-D-Jwr4--.js") }), `../articles.${slug}.mdx`, 2);
  const readTime = readingTime(text2.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;
  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime)
  });
}
function meta$4({ data }) {
  const { title: title2, abstract } = data.frontmatter;
  return baseMeta({ title: title2, description: abstract, prefix: "", ogImage: data.ogImage });
}
function Articles() {
  const { frontmatter: frontmatter2, timecode: timecode2 } = useLoaderData();
  return /* @__PURE__ */ jsx(MDXProvider, { components: postMarkdown, children: /* @__PURE__ */ jsx(Post, { ...frontmatter2, timecode: timecode2, children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles,
  loader: loader$3,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const textarea = "_textarea_1ly3z_2";
const styles$8 = {
  textarea
};
const TextArea = ({
  className,
  resize = "none",
  value: value2,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  const [rows, setRows] = useState(minRows);
  const [textareaDimensions, setTextareaDimensions] = useState();
  const textareaRef = useRef();
  useEffect(() => {
    const style = getComputedStyle(textareaRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const paddingHeight = parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    setTextareaDimensions({ lineHeight, paddingHeight });
  }, []);
  const handleChange = (event) => {
    onChange(event);
    const { lineHeight, paddingHeight } = textareaDimensions;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (maxRows && currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
  };
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: classes(styles$8.textarea, className),
      ref: textareaRef,
      onChange: handleChange,
      style: cssProps({ resize }),
      rows,
      value: value2,
      ...rest
    }
  );
};
const container = "_container_1ukhq_2";
const content$2 = "_content_1ukhq_16";
const input$1 = "_input_1ukhq_21";
const underline = "_underline_1ukhq_55";
const label = "_label_1ukhq_73";
const error = "_error_1ukhq_95";
const errorMessage = "_errorMessage_1ukhq_111";
const styles$7 = {
  container,
  content: content$2,
  input: input$1,
  underline,
  label,
  error,
  errorMessage
};
const Input = ({
  id,
  label: label2,
  value: value2,
  multiline,
  className,
  style,
  error: error2,
  onBlur,
  autoComplete,
  required,
  maxLength,
  type,
  onChange,
  name: name2,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const generatedId = useId();
  const errorRef = useRef();
  const inputId = id || `${generatedId}input`;
  const labelId = `${inputId}-label`;
  const errorId = `${inputId}-error`;
  const InputElement = multiline ? TextArea : "input";
  const handleBlur = (event) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$7.container, className),
      "data-error": !!error2,
      style,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$7.content, children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: styles$7.label,
              "data-focused": focused,
              "data-filled": !!value2,
              id: labelId,
              htmlFor: inputId,
              children: label2
            }
          ),
          /* @__PURE__ */ jsx(
            InputElement,
            {
              className: styles$7.input,
              id: inputId,
              "aria-labelledby": labelId,
              "aria-describedby": error2 ? errorId : void 0,
              onFocus: () => setFocused(true),
              onBlur: handleBlur,
              value: value2,
              onChange,
              autoComplete,
              required,
              maxLength,
              type,
              name: name2
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$7.underline, "data-focused": focused })
        ] }),
        /* @__PURE__ */ jsx(Transition, { unmount: true, in: error2, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => {
          var _a;
          return /* @__PURE__ */ jsx(
            "div",
            {
              ref: nodeRef,
              className: styles$7.error,
              "data-visible": visible,
              id: errorId,
              role: "alert",
              style: cssProps({
                height: visible ? (_a = errorRef.current) == null ? void 0 : _a.getBoundingClientRect().height : 0
              }),
              children: /* @__PURE__ */ jsxs("div", { className: styles$7.errorMessage, ref: errorRef, children: [
                /* @__PURE__ */ jsx(Icon, { icon: "error" }),
                error2
              ] })
            }
          );
        } })
      ]
    }
  );
};
const contact = "_contact_xvg9q_1";
const form = "_form_xvg9q_18";
const title$3 = "_title_xvg9q_30";
const divider = "_divider_xvg9q_60";
const input = "_input_xvg9q_98";
const botkiller = "_botkiller_xvg9q_140";
const button$1 = "_button_xvg9q_144";
const complete = "_complete_xvg9q_204";
const completeTitle = "_completeTitle_xvg9q_215";
const completeText = "_completeText_xvg9q_234";
const completeButton = "_completeButton_xvg9q_253";
const formError = "_formError_xvg9q_279";
const formErrorContent = "_formErrorContent_xvg9q_291";
const formErrorMessage = "_formErrorMessage_xvg9q_295";
const formErrorIcon = "_formErrorIcon_xvg9q_303";
const footer = "_footer_xvg9q_308";
const styles$6 = {
  contact,
  form,
  title: title$3,
  divider,
  input,
  botkiller,
  button: button$1,
  complete,
  completeTitle,
  completeText,
  completeButton,
  formError,
  formErrorContent,
  formErrorMessage,
  formErrorIcon,
  footer
};
const meta$3 = () => {
  return baseMeta({
    title: "Contact",
    description: "Send me a message if you’re interested in discussing a project or if you just want to say hi"
  });
};
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;
async function action({ context, request }) {
  const ses = new SESClient({
    region: "us-east-1",
    credentials: {
      accessKeyId: context.cloudflare.env.CUSTOM_AWS_ACCESS_KEY_ID,
      secretAccessKey: context.cloudflare.env.CUSTOM_AWS_SECRET_ACCESS_KEY
    }
  });
  const formData = await request.formData();
  const isBot = String(formData.get("name"));
  const email = String(formData.get("email"));
  const message = String(formData.get("message"));
  const errors = {};
  if (isBot) return json({ success: true });
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) {
    errors.message = "Please enter a message.";
  }
  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }
  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
  await ses.send(
    new SendEmailCommand({
      Destination: {
        ToAddresses: [context.cloudflare.env.EMAIL]
      },
      Message: {
        Body: {
          Text: {
            Data: `From: ${email}

${message}`
          }
        },
        Subject: {
          Data: `Portfolio message from ${email}`
        }
      },
      Source: `Portfolio <${context.cloudflare.env.FROM_EMAIL}>`,
      ReplyToAddresses: [email]
    })
  );
  return json({ success: true });
}
const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput("");
  const message = useFormInput("");
  const initDelay2 = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === "submitting";
  return /* @__PURE__ */ jsxs(Section, { className: styles$6.contact, children: [
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: !(actionData == null ? void 0 : actionData.success), timeout: 1600, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs(
      Form,
      {
        unstable_viewTransition: true,
        className: styles$6.form,
        method: "post",
        ref: nodeRef,
        children: [
          /* @__PURE__ */ jsx(
            Heading,
            {
              className: styles$6.title,
              "data-status": status,
              level: 3,
              as: "h1",
              style: getDelay(tokens.base.durationXS, initDelay2, 0.3),
              children: /* @__PURE__ */ jsx(DecoderText, { text: "Say hello", start: status !== "exited", delay: 300 })
            }
          ),
          /* @__PURE__ */ jsx(
            Divider,
            {
              className: styles$6.divider,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2, 0.4)
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: styles$6.botkiller,
              label: "Name",
              name: "name",
              maxLength: MAX_EMAIL_LENGTH
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              className: styles$6.input,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2),
              autoComplete: "email",
              label: "Your email",
              type: "email",
              name: "email",
              maxLength: MAX_EMAIL_LENGTH,
              ...email
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              multiline: true,
              className: styles$6.input,
              "data-status": status,
              style: getDelay(tokens.base.durationS, initDelay2),
              autoComplete: "off",
              label: "Message",
              name: "message",
              maxLength: MAX_MESSAGE_LENGTH,
              ...message
            }
          ),
          /* @__PURE__ */ jsx(
            Transition,
            {
              unmount: true,
              in: !sending && (actionData == null ? void 0 : actionData.errors),
              timeout: msToNum(tokens.base.durationM),
              children: ({ status: errorStatus, nodeRef: nodeRef2 }) => {
                var _a, _b, _c;
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: styles$6.formError,
                    ref: nodeRef2,
                    "data-status": errorStatus,
                    style: cssProps({
                      height: errorStatus ? (_a = errorRef.current) == null ? void 0 : _a.offsetHeight : 0
                    }),
                    children: /* @__PURE__ */ jsx("div", { className: styles$6.formErrorContent, ref: errorRef, children: /* @__PURE__ */ jsxs("div", { className: styles$6.formErrorMessage, children: [
                      /* @__PURE__ */ jsx(Icon, { className: styles$6.formErrorIcon, icon: "error" }),
                      (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email,
                      (_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.message
                    ] }) })
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: styles$6.button,
              "data-status": status,
              "data-sending": sending,
              style: getDelay(tokens.base.durationM, initDelay2),
              disabled: sending,
              loading: sending,
              loadingText: "Sending...",
              icon: "send",
              type: "submit",
              children: "Send message"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: actionData == null ? void 0 : actionData.success, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$6.complete, "aria-live": "polite", ref: nodeRef, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h3",
          className: styles$6.completeTitle,
          "data-status": status,
          children: "Message Sent"
        }
      ),
      /* @__PURE__ */ jsx(
        Text,
        {
          size: "l",
          as: "p",
          className: styles$6.completeText,
          "data-status": status,
          style: getDelay(tokens.base.durationXS),
          children: "I’ll get back to you within a couple days, sit tight"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          secondary: true,
          iconHoverShift: true,
          className: styles$6.completeButton,
          "data-status": status,
          style: getDelay(tokens.base.durationM),
          href: "/",
          icon: "chevron-right",
          children: "Back to homepage"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, { className: styles$6.footer })
  ] });
};
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Contact,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const gamestackTexture2Large = "/assets/gywde-search-DKj_Mbl1.jpg";
const gamestackTexture2Placeholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAcAAACAgIDAAAAAAAAAAAAAAAEBgMFAQcAAgj/2gAIAQEAAAAA84zyZiNzyYqtEYpKEBu7rwLOSvAbDPSKbaxiDRt0tOB//8QAFwEBAQEBAAAAAAAAAAAAAAAAAwABAv/aAAgBAhAAAABLlWLZc//EABgBAQEAAwAAAAAAAAAAAAAAAAMEAAEC/9oACAEDEAAAANZVJ0YLM3//xAAfEAACAgMBAAMBAAAAAAAAAAAAAQIDBBESIQUTMSL/2gAIAQEAAT8Arjs+sVSZKkpg2Ks1ocloxqU0vCdajEtemx2GJD+S9aiX/rGYeuTJ1yXr1kjD60XxlyZC02SPjcHpLwy8BRg/DOq5kySPjLIRgjOvhKBnrqUidZjZE4rwuybJRLm5fpOKP//EABoRAQEAAwEBAAAAAAAAAAAAAAEAAhAhETH/2gAIAQIBAT8AWJxRg5Jimu3kfNf/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIhEBESEzH/2gAIAQMBAT8AUcRlDgSdlJDO2xPY1YvD/9k=";
const gamestackTexture2 = "/assets/gywde-search-DKj_Mbl1.jpg";
const gamestackTexture3Large = "/assets/eko-BXvuxOq_.jpg";
const gamestackTexture4Large = "/assets/eko-large-CxYCf67R.jpg";
const gamestackTextureLarge = "/assets/gywde-login-CH8Uptpo.jpg";
const gamestackTexturePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEH/9oACAEBAAAAAPAGGkwlsuTolmWA57UCI9Kd1NCIKPRNIsF//8QAGAEBAAMBAAAAAAAAAAAAAAAAAQACBQT/2gAIAQIQAAAA7RrDVmQ//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIEAf/aAAgBAxAAAACVlc2IuP/EABwQAAIDAQEBAQAAAAAAAAAAAAABAgMRBFExMv/aAAgBAQABPwD6VpITWHThFCeCsLp6hNYfSexJy0iRxItzCYp4O4lafoxscJeDrl4KDRz1xklpHmrZLmrL64R+FVziR6X6S6H6W3aRbQpsc2Ntn//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEEhBRESFB/9oACAECAQE/AITFK/YxHn1NG6mjdSvMoRADWJZmUMhAr5//xAAcEQACAQUBAAAAAAAAAAAAAAAAAQIDBBESURD/2gAIAQMBAT8AEsGGJPBsumy6Tt6kpNqZC3qKSbn7/9k=";
const gamestackTexture = "/assets/gywde-login-CH8Uptpo.jpg";
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
const intro = "_intro_x8c4c_1";
const text = "_text_x8c4c_9";
const name = "_name_x8c4c_36";
const title$2 = "_title_x8c4c_74";
const row$1 = "_row_x8c4c_78";
const word = "_word_x8c4c_107";
const line = "_line_x8c4c_183";
const scrollIndicator = "_scrollIndicator_x8c4c_232";
const mobileScrollIndicator = "_mobileScrollIndicator_x8c4c_299";
const styles$5 = {
  intro,
  text,
  name,
  title: title$2,
  row: row$1,
  word,
  line,
  scrollIndicator,
  mobileScrollIndicator
};
const DisplacementSphere = lazy(
  () => import("./displacement-sphere-0MwwCsC5.js").then((module) => ({ default: module.DisplacementSphere }))
);
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines: disciplines2 } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  );
  const currentDiscipline = disciplines2.find((item2, index2) => index2 === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(
    () => {
      const index2 = (disciplineIndex + 1) % disciplines2.length;
      setDisciplineIndex(index2);
    },
    5e3,
    theme
  );
  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$5.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(Transition, { in: true, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        isHydrated && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(DisplacementSphere, {}) }),
        /* @__PURE__ */ jsxs("header", { className: styles$5.text, children: [
          /* @__PURE__ */ jsx("h1", { className: styles$5.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: config.name, delay: 500 }) }),
          /* @__PURE__ */ jsxs(Heading, { level: 0, as: "h2", className: styles$5.title, children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$5.label, children: `${config.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs("span", { "aria-hidden": true, className: styles$5.row, children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles$5.word,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: config.role
                }
              ),
              /* @__PURE__ */ jsx("span", { className: styles$5.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$5.row, children: disciplines2.map((item2) => /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: item2 === currentDiscipline,
                timeout: { enter: 3e3, exit: 2e3 },
                children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    ref: nodeRef,
                    className: styles$5.word,
                    "data-plus": true,
                    "data-status": status2,
                    style: cssProps({ delay: tokens.base.durationL }),
                    children: item2
                  }
                )
              },
              item2
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            to: "/#project-1",
            className: styles$5.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: "/#project-1",
            className: styles$5.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}
const profileImgLarge = "/assets/profile-BJPMAKt5.jpg";
const profileImgPlaceholder = "/assets/profile-placeholder-DOgU6wR2.jpg";
const profileImg = "/assets/profile-BJPMAKt5.jpg";
const profile = "_profile_s38cy_1";
const content$1 = "_content_s38cy_37";
const column = "_column_s38cy_50";
const title$1 = "_title_s38cy_59";
const description$1 = "_description_s38cy_70";
const tag = "_tag_s38cy_80";
const tagText = "_tagText_s38cy_93";
const image = "_image_s38cy_114";
const button = "_button_s38cy_135";
const styles$4 = {
  profile,
  content: content$1,
  column,
  title: title$1,
  description: description$1,
  tag,
  tagText,
  image,
  button
};
const ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$4.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsxs(Text, { className: styles$4.description, "data-visible": visible, size: "l", as: "p", children: [
    "I’m Abiodun, currently I live in Lagos working as a software engineer at",
    " ",
    /* @__PURE__ */ jsx(Link, { href: "https://www.gywde.com", children: "Gywde" }),
    ". My projects span across software development, fintech solutions and real-time systems, with a strong focus on building scalable, user-centric applications. If you’re interested in the tools and software I use check out my ",
    /* @__PURE__ */ jsx(Link, { href: "/uses", children: "uses page" }),
    "."
  ] }),
  /* @__PURE__ */ jsxs(Text, { className: styles$4.description, "data-visible": visible, size: "l", as: "p", children: [
    "In my spare time I like to dabble with ML model training, play video games, and",
    " ",
    "reading books. I’m always down for hearing about new projects, so feel free to drop me a line."
  ] })
] });
const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$4.profile,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$4.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$4.column, children: [
          /* @__PURE__ */ jsx(ProfileText, { visible: visible2, titleId }),
          /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              className: styles$4.button,
              "data-visible": visible2,
              href: "/contact",
              icon: "send",
              children: "Send me a message"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$4.column, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$4.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$4.tagText, "data-visible": visible2, children: "About me" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: styles$4.image, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              reveal: true,
              delay: 100,
              placeholder: profileImgPlaceholder,
              srcSet: `${profileImg} 480w, ${profileImgLarge} 960w`,
              width: 960,
              height: 1280,
              sizes: `(max-width: ${media.mobile}px) 100vw, 480px`,
              alt: "Me seated like a don while my girlfriend take a picture of me"
            }
          ) })
        ] })
      ] }) })
    }
  );
};
const iphone11 = "/assets/iphone-11-DGIHa_Ph.glb";
const macbookPro = "/assets/macbook-pro-DZn-FKKF.glb";
const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open"
};
const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen
  }
};
const katakana = "/assets/katakana-DR-bVyLd.svg";
const summary = "_summary_1cfqm_1";
const content = "_content_1cfqm_35";
const details = "_details_1cfqm_65";
const preview = "_preview_1cfqm_78";
const model = "_model_1cfqm_88";
const loader$2 = "_loader_1cfqm_142";
const svg = "_svg_1cfqm_151";
const index = "_index_1cfqm_192";
const indexNumber = "_indexNumber_1cfqm_201";
const title = "_title_1cfqm_222";
const description = "_description_1cfqm_241";
const styles$3 = {
  summary,
  content,
  details,
  preview,
  model,
  loader: loader$2,
  svg,
  index,
  indexNumber,
  title,
  description
};
const Model = lazy(
  () => import("./index-DXj-yawH.js").then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model2,
  buttonText,
  buttonLink,
  playStoreText,
  // <-- Add this
  playStoreLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === "light" ? 0.7 : 1;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ jsx(
      "svg",
      {
        type: "project",
        "data-visible": visible && modelLoaded,
        "data-light": theme === "light",
        style: cssProps({ opacity: svgOpacity }),
        className: styles$3.svg,
        "data-device": device,
        viewBox: "0 0 751 136",
        children: /* @__PURE__ */ jsx("use", { href: `${katakana}#katakana-project` })
      }
    );
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$3.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$3.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$3.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h2",
          className: styles$3.title,
          "data-visible": visible,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles$3.description, "data-visible": visible, as: "p", children: description2 }),
      /* @__PURE__ */ jsxs("div", { className: styles$3.buttonGroup, "data-visible": visible, children: [
        /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }),
        playStoreLink && playStoreText && /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: playStoreLink, iconEnd: "arrow-right", style: { marginTop: "2rem" }, children: playStoreText })
      ] })
    ] });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$3.preview, children: [
      model2.type === "laptop" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("laptop", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$3.model, "data-device": "laptop", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$3.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 8 },
              showDelay: 700,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model2.textures[0],
                    sizes: laptopSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] }),
      model2.type === "phone" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("phone", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$3.model, "data-device": "phone", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$3.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 11.5 },
              showDelay: 300,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model2.textures[0],
                    sizes: phoneSizes
                  }
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model2.textures[1],
                    sizes: phoneSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$3.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$3.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}
const home = "_home_1e7fe_1";
const styles$2 = {
  home
};
const links = () => {
  return [
    {
      rel: "prefetch",
      href: "/draco/draco_wasm_wrapper.js",
      as: "script",
      type: "text/javascript",
      importance: "low"
    },
    {
      rel: "prefetch",
      href: "/draco/draco_decoder.wasm",
      as: "fetch",
      type: "application/wasm",
      importance: "low"
    }
  ];
};
const meta$2 = () => {
  return baseMeta({
    title: "Designer  + Developer",
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`
  });
};
const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro2 = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details2 = useRef();
  useEffect(() => {
    const sections = [intro2, projectOne, projectTwo, projectThree, projectFour, details2];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2)) return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sections.forEach((section2) => {
      sectionObserver.observe(section2.current);
    });
    indicatorObserver.observe(intro2.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { className: styles$2.home, children: [
    /* @__PURE__ */ jsx(
      Intro,
      {
        id: "intro",
        sectionRef: intro2,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-1",
        sectionRef: projectOne,
        visible: visibleSections.includes(projectOne.current),
        index: 1,
        title: "Streamlining Education for the Modern Learner",
        description: "Building a Cohort-Based Platform to Streamline Online Education and Student Engagement",
        buttonText: "View project",
        buttonLink: "/projects/smart-sparrow",
        model: {
          type: "laptop",
          alt: "Smart Approaches We Learn",
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-2",
        alternate: true,
        sectionRef: projectTwo,
        visible: visibleSections.includes(projectTwo.current),
        index: 2,
        title: "Changing the Future of Freelance Work",
        description: "Gywde: Get Your Work Done Effortlessly — A Dynamic Platform Connecting Businesses and Consumers with Skilled Freelancers in Nigeria",
        buttonText: "Download from Apple App Store",
        buttonLink: "https://apps.apple.com/ng/app/gywde/id6602887701",
        playStoreText: "Download from Google Play Store",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.gywde.app",
        model: {
          type: "phone",
          alt: "App login screen",
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-3",
        alternate: true,
        sectionRef: projectThree,
        visible: visibleSections.includes(projectThree.current),
        index: 2,
        title: "Elevating Hospitality Through Seamless Lifestyle Experiences",
        description: "Eko Hotel Delivery: A Premium Lifestyle App Offering Seamless Delivery Services and Exclusive Access to Luxury Experiences in Lagos, Nigeria.",
        buttonText: "Download from Apple App Store",
        buttonLink: "https://apps.apple.com/ng/app/eko-premium/id6740982139",
        playStoreText: "Download from Google Play Store",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.ekopremium.app",
        model: {
          type: "phone",
          alt: "App login screen",
          textures: [
            {
              srcSet: `${gamestackTexture3Large} 375w, ${gamestackTexture3Large} 750w`,
              placeholder: gamestackTexturePlaceholder
            },
            {
              srcSet: `${gamestackTexture4Large} 375w, ${gamestackTexture4Large} 750w`,
              placeholder: gamestackTexture2Placeholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-4",
        sectionRef: projectFour,
        visible: visibleSections.includes(projectFour.current),
        index: 3,
        title: "Transforming Global Payments with Peer-to-Peer Solutions",
        description: "BananaCrystal: Facilitating seamless, low-cost, and secure peer-to-peer USD transactions worldwide. Empowering businesses and individuals with innovative blockchain-based payment solutions.",
        buttonText: "View project",
        buttonLink: "/projects/slice",
        model: {
          type: "laptop",
          alt: "Annotating Banana crystal image on the slice app",
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Profile,
      {
        sectionRef: details2,
        visible: visibleSections.includes(details2.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const loader$1 = async () => json$1({ message: "Test route works!" });
function Test() {
  return /* @__PURE__ */ jsx("h1", { children: "Test Route is Working ✅" });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Test,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const usesBackgroundPlaceholder = "/assets/uses-background-placeholder-ppC4yTdE.jpg";
const usesBackground = "/assets/uses-background-DVBwh5G1.mp4";
const table = "_table_1ajow_2";
const row = "_row_1ajow_7";
const headCell = "_headCell_1ajow_21";
const cell = "_cell_1ajow_26";
const styles$1 = {
  table,
  row,
  headCell,
  cell
};
const Table = ({ children }) => /* @__PURE__ */ jsx("table", { className: styles$1.table, children });
const TableRow = ({ children }) => /* @__PURE__ */ jsx("tr", { className: styles$1.row, children });
const TableBody = ({ children }) => /* @__PURE__ */ jsx("tbody", { className: styles$1.body, children });
const TableHeadCell = ({ children }) => /* @__PURE__ */ jsx("th", { className: styles$1.headCell, children });
const TableCell = ({ children }) => /* @__PURE__ */ jsx("td", { className: styles$1.cell, children });
const uses = "_uses_7vfxj_1";
const section = "_section_7vfxj_5";
const styles = {
  uses,
  section
};
const meta$1 = () => {
  return baseMeta({
    title: "Uses",
    description: "A list of hardware and software I use to do my thing"
  });
};
const Uses = () => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles.uses, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: usesBackground,
          placeholder: usesBackgroundPlaceholder,
          opacity: 0.7
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: "Uses",
          description: "A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Design" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I collaborate with designers using",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.figma.com", children: "Figma" }),
            ", especially for UI/UX alignment in product development."
          ] }),
          /* @__PURE__ */ jsx(ListItem, { children: "I work closely with design teams who use tools like Adobe XD and After Effects for motion and interaction designs." }),
          /* @__PURE__ */ jsx(ListItem, { children: "For prototyping and early-stage concepts, Figma's interactive features have been helpful for project visualization." })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Development" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I primarily use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://code.visualstudio.com/", children: "VSCode" }),
            " for development, with extensions like Prettier, ESLint, and GitLens to optimize productivity."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "My backend stack includes",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://nodejs.org/", children: "Node.js" }),
            ",",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://nestjs.com/", children: "NestJS" }),
            ", and",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://rubyonrails.org/", children: "Ruby on Rails" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For frontend development, I prefer",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://reactjs.org/", children: "React.js" }),
            " and",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://reactnative.dev/", children: "React Native" }),
            " for mobile apps."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I manage real-time operations using",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://socket.io/", children: "Socket.IO" }),
            " and queue-based systems like",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://optimalbits.github.io/bull/", children: "BullMQ" }),
            " for high-concurrency workloads."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "Testing frameworks like ",
            /* @__PURE__ */ jsx(Link, { href: "https://rspec.info/", children: "RSpec" }),
            " ",
            "and end-to-end tools like Playwright are part of my CI/CD pipeline."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I deploy applications on",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://aws.amazon.com/", children: "AWS" }),
            " with",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://circleci.com/", children: "CircleCI" }),
            " for CI/CD automation."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "Database choices often include",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.mysql.com/", children: "MySQL" }),
            " and",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.postgresql.org/", children: "PostgreSQL" }),
            ", depending on project needs."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { stretch: true, width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "System" }),
        /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TableBody, { children: [
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Main Work Machine" }),
            /* @__PURE__ */ jsx(TableCell, { children: "MacBook Pro (M1) 14″" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Operating Systems" }),
            /* @__PURE__ */ jsx(TableCell, { children: "macOS (primary), Linux (for server and development)" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Browser" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Google Chrome (for development), Safari (personal)" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Monitor" }),
            /* @__PURE__ */ jsx(TableCell, { children: "LG UltraFine 5K" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Keyboard" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Keychron K2 (Mechanical)" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Mouse" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Logitech MX Master 3" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Headphones" }),
            /* @__PURE__ */ jsx(TableCell, { children: "AirPods Pro / Sony WH-1000XM4" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Microphone" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Shure MV7" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Server" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Linux-powered home server with MTN internet (self-hosted backend)" })
          ] })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uses,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta = () => {
  return [{ title: "404 | Redacted" }];
};
function ErrorBoundary() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error: error2 });
}
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DFTXBz5G.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/components-CIeRpJJx.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BTJuebZb.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/components-CIeRpJJx.js", "/assets/image-DFroI6Pm.js", "/assets/error-37fJsO1_.js", "/assets/visually-hidden-D7ghLMuh.js", "/assets/heading-BjRlKi4B.js", "/assets/useScrollToHash-DYVQk_fa.js", "/assets/useWindowSize-Br1Aw5Uy.js", "/assets/config-AqcvRU3G.js", "/assets/decoder-text-CfSnXSKQ.js", "/assets/use-spring-CcZhP75e.js", "/assets/index-C6rh08dF.js"], "css": ["/assets/root-AirrcxGX.css", "/assets/image-Db9mAJ2F.css", "/assets/heading-UwcgqAqE.css", "/assets/error-BT7XG2_u.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css"] }, "routes/articles.mysql_emoji_support": { "id": "routes/articles.mysql_emoji_support", "parentId": "routes/articles", "path": "mysql_emoji_support", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.mysql_emoji_support-DIJ9q-5Y.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/index-BW8I-Isz.js"], "css": [] }, "routes/projects.volkihar-knight": { "id": "routes/projects.volkihar-knight", "parentId": "root", "path": "projects/volkihar-knight", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-XNd_TNE1.js", "imports": ["/assets/preload-helper-D7HrI6pR.js", "/assets/jsx-runtime-Lfnj0zCF.js", "/assets/heading-BjRlKi4B.js", "/assets/meta-BEqd2dZY.js", "/assets/image-DFroI6Pm.js", "/assets/project-DAwxYzRY.js", "/assets/components-CIeRpJJx.js", "/assets/config-AqcvRU3G.js", "/assets/useParallax-BpL6gIpP.js"], "css": ["/assets/route-TU9yO5A9.css", "/assets/heading-UwcgqAqE.css", "/assets/meta-DdulKb1r.css", "/assets/image-Db9mAJ2F.css", "/assets/project-C8oXv4p4.css"] }, "routes/projects.smart-sparrow": { "id": "routes/projects.smart-sparrow", "parentId": "root", "path": "projects/smart-sparrow", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Dcivqq2h.js", "imports": ["/assets/preload-helper-D7HrI6pR.js", "/assets/jsx-runtime-Lfnj0zCF.js", "/assets/sawl-CVL3aAIR.js", "/assets/meta-BEqd2dZY.js", "/assets/image-DFroI6Pm.js", "/assets/visually-hidden-D7ghLMuh.js", "/assets/heading-BjRlKi4B.js", "/assets/project-DAwxYzRY.js", "/assets/components-CIeRpJJx.js", "/assets/config-AqcvRU3G.js", "/assets/useParallax-BpL6gIpP.js"], "css": ["/assets/route-Brt_1JUZ.css", "/assets/meta-DdulKb1r.css", "/assets/heading-UwcgqAqE.css", "/assets/image-Db9mAJ2F.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/project-C8oXv4p4.css"] }, "routes/articles.bull-mq": { "id": "routes/articles.bull-mq", "parentId": "routes/articles", "path": "bull-mq", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.bull-mq-BDju6oZQ.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/index-BW8I-Isz.js"], "css": [] }, "routes/articles_._index": { "id": "routes/articles_._index", "parentId": "root", "path": "articles", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-iAeUm132.js", "imports": ["/assets/meta-BEqd2dZY.js", "/assets/jsx-runtime-Lfnj0zCF.js", "/assets/heading-BjRlKi4B.js", "/assets/decoder-text-CfSnXSKQ.js", "/assets/divider-CqDENsnb.js", "/assets/image-DFroI6Pm.js", "/assets/useWindowSize-Br1Aw5Uy.js", "/assets/date-DvyCAN0s.js", "/assets/components-CIeRpJJx.js", "/assets/config-AqcvRU3G.js", "/assets/visually-hidden-D7ghLMuh.js", "/assets/use-spring-CcZhP75e.js", "/assets/index-C6rh08dF.js"], "css": ["/assets/route-2ahMLohn.css", "/assets/meta-DdulKb1r.css", "/assets/heading-UwcgqAqE.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/divider-RCNywGVV.css", "/assets/image-Db9mAJ2F.css"] }, "routes/projects.slice": { "id": "routes/projects.slice", "parentId": "root", "path": "projects/slice", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-rTthXE24.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/BC-1llT3Oc7.js", "/assets/meta-BEqd2dZY.js", "/assets/image-DFroI6Pm.js", "/assets/project-DAwxYzRY.js", "/assets/heading-BjRlKi4B.js", "/assets/components-CIeRpJJx.js", "/assets/config-AqcvRU3G.js", "/assets/useParallax-BpL6gIpP.js"], "css": ["/assets/route-DBxCm94u.css", "/assets/meta-DdulKb1r.css", "/assets/heading-UwcgqAqE.css", "/assets/image-Db9mAJ2F.css", "/assets/project-C8oXv4p4.css"] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/articles": { "id": "routes/articles", "parentId": "root", "path": "articles", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DmtqB9kC.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/divider-CqDENsnb.js", "/assets/meta-BEqd2dZY.js", "/assets/heading-BjRlKi4B.js", "/assets/image-DFroI6Pm.js", "/assets/useParallax-BpL6gIpP.js", "/assets/useScrollToHash-DYVQk_fa.js", "/assets/clamp-e7DugykH.js", "/assets/date-DvyCAN0s.js", "/assets/components-CIeRpJJx.js", "/assets/list-DOmsvHEJ.js", "/assets/index-BW8I-Isz.js", "/assets/config-AqcvRU3G.js"], "css": ["/assets/route-C-22_ukK.css", "/assets/divider-RCNywGVV.css", "/assets/heading-UwcgqAqE.css", "/assets/meta-DdulKb1r.css", "/assets/image-Db9mAJ2F.css", "/assets/list-A5E2UkK_.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BtbNJ-ZE.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/heading-BjRlKi4B.js", "/assets/decoder-text-CfSnXSKQ.js", "/assets/divider-CqDENsnb.js", "/assets/meta-BEqd2dZY.js", "/assets/components-CIeRpJJx.js", "/assets/visually-hidden-D7ghLMuh.js", "/assets/use-spring-CcZhP75e.js", "/assets/index-C6rh08dF.js", "/assets/config-AqcvRU3G.js"], "css": ["/assets/route-DUdvKm6g.css", "/assets/heading-UwcgqAqE.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/divider-RCNywGVV.css", "/assets/meta-DdulKb1r.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CnWTuKTT.js", "imports": ["/assets/route-boz5RvR2.js", "/assets/jsx-runtime-Lfnj0zCF.js", "/assets/BC-1llT3Oc7.js", "/assets/sawl-CVL3aAIR.js", "/assets/meta-BEqd2dZY.js", "/assets/heading-BjRlKi4B.js", "/assets/components-CIeRpJJx.js", "/assets/config-AqcvRU3G.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/decoder-text-CfSnXSKQ.js", "/assets/visually-hidden-D7ghLMuh.js", "/assets/use-spring-CcZhP75e.js", "/assets/index-C6rh08dF.js", "/assets/image-DFroI6Pm.js", "/assets/useScrollToHash-DYVQk_fa.js", "/assets/divider-CqDENsnb.js", "/assets/useWindowSize-Br1Aw5Uy.js"], "css": ["/assets/route-B21ryf_9.css", "/assets/meta-DdulKb1r.css", "/assets/heading-UwcgqAqE.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/image-Db9mAJ2F.css", "/assets/divider-RCNywGVV.css"] }, "routes/test": { "id": "routes/test", "parentId": "root", "path": "test", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/test-BsH1ao7B.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js"], "css": [] }, "routes/uses": { "id": "routes/uses", "parentId": "root", "path": "uses", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Bk_W3E4K.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/meta-BEqd2dZY.js", "/assets/list-DOmsvHEJ.js", "/assets/project-DAwxYzRY.js", "/assets/heading-BjRlKi4B.js", "/assets/components-CIeRpJJx.js", "/assets/config-AqcvRU3G.js", "/assets/image-DFroI6Pm.js", "/assets/useParallax-BpL6gIpP.js"], "css": ["/assets/route-D3qy7m5X.css", "/assets/meta-DdulKb1r.css", "/assets/heading-UwcgqAqE.css", "/assets/list-A5E2UkK_.css", "/assets/project-C8oXv4p4.css", "/assets/image-Db9mAJ2F.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-BsuhQmY9.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/error-37fJsO1_.js", "/assets/components-CIeRpJJx.js", "/assets/heading-BjRlKi4B.js", "/assets/decoder-text-CfSnXSKQ.js", "/assets/visually-hidden-D7ghLMuh.js", "/assets/use-spring-CcZhP75e.js", "/assets/index-C6rh08dF.js", "/assets/image-DFroI6Pm.js"], "css": ["/assets/error-BT7XG2_u.css", "/assets/heading-UwcgqAqE.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/image-Db9mAJ2F.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CnWTuKTT.js", "imports": ["/assets/route-boz5RvR2.js", "/assets/jsx-runtime-Lfnj0zCF.js", "/assets/BC-1llT3Oc7.js", "/assets/sawl-CVL3aAIR.js", "/assets/meta-BEqd2dZY.js", "/assets/heading-BjRlKi4B.js", "/assets/components-CIeRpJJx.js", "/assets/config-AqcvRU3G.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/decoder-text-CfSnXSKQ.js", "/assets/visually-hidden-D7ghLMuh.js", "/assets/use-spring-CcZhP75e.js", "/assets/index-C6rh08dF.js", "/assets/image-DFroI6Pm.js", "/assets/useScrollToHash-DYVQk_fa.js", "/assets/divider-CqDENsnb.js", "/assets/useWindowSize-Br1Aw5Uy.js"], "css": ["/assets/route-B21ryf_9.css", "/assets/meta-DdulKb1r.css", "/assets/heading-UwcgqAqE.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/image-Db9mAJ2F.css", "/assets/divider-RCNywGVV.css"] } }, "url": "/assets/manifest-fd006c2a.js", "version": "fd006c2a" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/articles.mysql_emoji_support": {
    id: "routes/articles.mysql_emoji_support",
    parentId: "routes/articles",
    path: "mysql_emoji_support",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/projects.volkihar-knight": {
    id: "routes/projects.volkihar-knight",
    parentId: "root",
    path: "projects/volkihar-knight",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/projects.smart-sparrow": {
    id: "routes/projects.smart-sparrow",
    parentId: "root",
    path: "projects/smart-sparrow",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/articles.bull-mq": {
    id: "routes/articles.bull-mq",
    parentId: "routes/articles",
    path: "bull-mq",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/articles_._index": {
    id: "routes/articles_._index",
    parentId: "root",
    path: "articles",
    index: true,
    caseSensitive: void 0,
    module: route5
  },
  "routes/projects.slice": {
    id: "routes/projects.slice",
    parentId: "root",
    path: "projects/slice",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/articles": {
    id: "routes/articles",
    parentId: "root",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/uses": {
    id: "routes/uses",
    parentId: "root",
    path: "uses",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route14
  }
};
const serverBuild = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assets: serverManifest,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
}, Symbol.toStringTag, { value: "Module" }));
export {
  Loader as L,
  ModelAnimationType as M,
  Section as S,
  Transition as T,
  classes as a,
  useWindowSize as b,
  cssProps as c,
  numToPx as d,
  media as e,
  clamp as f,
  useTheme as g,
  mode as h,
  assetsBuildDirectory as i,
  basename as j,
  future as k,
  isSpaMode as l,
  msToNum as m,
  numToMs as n,
  entry as o,
  publicPath as p,
  routes as q,
  resolveSrcFromSrcSet as r,
  serverManifest as s,
  tokens as t,
  useInViewport as u
};
