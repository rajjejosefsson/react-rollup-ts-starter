import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  selectV2,
} from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { withState } from '@dump247/storybook-state';
import { TabPanel } from '../../lib';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add(
    'TabPanel',
    withState({ currentTab: 1 })(
      withInfo(`Some cool isssnfo`)(({ store }) => {
        const changeTabHandler = (index) => {
          store.set({ currentTab: index });
        };

        return (
          <TabPanel
            activeIndex={store.state.currentTab} // optional
            onChangeTab={changeTabHandler}
          >
            <TabPanel.TabBar>
              <TabPanel.Tab tabIndex={1}>Home</TabPanel.Tab>
              <TabPanel.Tab tabIndex={2}>Contacts</TabPanel.Tab>
              <TabPanel.Tab tabIndex={3}>Users</TabPanel.Tab>
            </TabPanel.TabBar>
            <TabPanel.Content>
              {store.state.currentTab === 1 ? <div>Home</div> : null}
              {store.state.currentTab === 2 ? <div>Contacts</div> : null}
              {store.state.currentTab === 3 ? <div>Users</div> : null}
            </TabPanel.Content>
          </TabPanel>
        );
      }),
    ),
  );
