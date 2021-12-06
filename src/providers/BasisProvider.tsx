import React, { useMemo } from "react";
import FocusVisiblePolyfill from "../oldBasis/components/internal/FocusVisiblePolyfill";
import { ThemeContext } from "../oldBasis/hooks/useTheme";
import { enhanceTheme } from "../oldBasis/utils/theme";
import BasisProviderV3 from './BasisProviderV3';
import BreakpointProvider from "./BreakpointProvider";
import LinkProvider from "./LinkProvider";
import WindowProvider from "./WindowProvider";
import { ReactNode } from 'react';

interface Props {
  theme: any;
  isRoot: any;
  window: any;
  InternalLink: any;
  isLinkInternal: any;
  children: any;
  v3?: false
}
export const BasisProviderComponent = ({ theme,
  isRoot = false,
  window,
  InternalLink,
  isLinkInternal,
  children,
}: Props) => {
  const enhancedTheme = useMemo(() => enhanceTheme(theme), [theme]);
  const content = isRoot ? (
    <div data-basis-modal-app>{children}</div>
  ) : (
    children
  );

  return (
    <ThemeContext.Provider value={enhancedTheme}>
      <WindowProvider window={window}>
        <FocusVisiblePolyfill />
        <BreakpointProvider>
          <LinkProvider
            InternalLink={InternalLink}
            isLinkInternal={isLinkInternal}
          >
            {content}
          </LinkProvider>
        </BreakpointProvider>
      </WindowProvider>
    </ThemeContext.Provider>
  );
}

type NewType = Props | { children: ReactNode, v3: true }
const BasisProvider = ({ children, ...props }: NewType) => {
  if ('v3' in props && props.v3) { return <BasisProviderV3>{children}</BasisProviderV3> }

  return <BasisProviderComponent {...props}>{children}</BasisProviderComponent>
}

export default BasisProvider;

