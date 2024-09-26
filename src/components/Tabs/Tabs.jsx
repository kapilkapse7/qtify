
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function getTabProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function BasicTabs({ data, value, handleChange }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="genre tabs"
        textColor="white"
        TabIndicatorProps={{
          style: { backgroundColor: '#34c94b' },
        }}
      >
        <Tab label="All" {...getTabProps(0)} />
        <Tab label="Rock" {...getTabProps(1)} />
        <Tab label="Pop" {...getTabProps(2)} />
        <Tab label="Jazz" {...getTabProps(3)} />
        <Tab label="Blues" {...getTabProps(4)} />
      </Tabs>

      {[0, 1, 2, 3, 4].map((tabIndex) => (
        <TabPanel value={value} index={tabIndex} key={tabIndex} sx={{ padding: '24px 0px' }}>
          <Carousel
            data={data}
            renderComponent={(item) => <Card data={item} type="songs" key={item.id} />}
          />
        </TabPanel>
      ))}
    </Box>
  );
}
