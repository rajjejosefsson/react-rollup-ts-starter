/// <reference types="react" />
import './TabPanel.scss';
import * as React from 'react';
export declare class TabPanel extends React.Component<any> {
  static Content: any;
  static TabBar: any;
  static Tab: any;
  internalTabChange: (index: any) => void;
  state: {
    internalActiveTab: any;
    onInternalTabChange: (index: any) => void;
  };
  render(): JSX.Element;
}
