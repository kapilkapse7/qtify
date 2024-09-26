

import React, { useState } from 'react';
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import BasicTabs from '../Tabs/Tabs';

const Section = ({ data, title, type, value = 0, handleChange = null }) => {
  const [isCarouselVisible, setIsCarouselVisible] = useState(true);

  const toggleView = () => {
    setIsCarouselVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={toggleView}>
          {type === 'song' ? null : !isCarouselVisible ? 'Collapse All' : 'Show All'}
        </h4>
      </div>

      {type !== 'song' ? (
        data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {!isCarouselVisible ? (
              <div className={styles.wrapper}>
                {data.map((item) => (
                  <Card data={item} type={type} key={item.id} />
                ))}
              </div>
            ) : (
              <Carousel
                data={data}
                renderComponent={(item) => <Card data={item} type={type} key={item.id} />}
              />
            )}
          </div>
        )
      ) : null}

      {type === 'song' && <BasicTabs data={data} value={value} handleChange={handleChange} />}
    </>
  );
};

export default Section;
