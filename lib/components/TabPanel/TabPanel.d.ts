/// <reference types="react" />
import './TabPanel.scss';
import * as React from 'react';
export declare class TabPanel extends React.Component<any> {
  static Content: (
    {
      children,
    }: {
      children: any;
    },
  ) => JSX.Element;
  static TabBar: (
    {
      children,
      ...props
    }: {
      [x: string]: any;
      children: any;
    },
  ) => JSX.Element;
  static Tab: (
    {
      children,
      tabIndex,
    }: {
      children: any;
      tabIndex: any;
    },
  ) => JSX.Element;
  internalTabChange: (index: any) => void;
  state: {
    internalActiveTab: any;
    onInternalTabChange: (index: any) => void;
  };
  render(): JSX.Element;
}
