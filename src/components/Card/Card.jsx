// import { Chip, Tooltip } from '@mui/material';
// import React from 'react'
// import styles from "./Card.module.css"

// const Card = ({data,type}) => {
//   const getCard=(type)=>{
//     switch(type)
//     {
//         case "album":
//             {
//                 const {image,follows,title,songs}=data;
//                 return (
//                     <Tooltip title={`${songs.length} songs`} placement="top"  arrow>
//                         <div className={styles.wrapper}>
//                             <div className={styles.card}>
//                                 <img src={image} alt="album"/>
//                                 <div className={styles.banner}>
//                                     <Chip label={`${follows} Follows`} size="small" className={styles.chip}/>
//                                 </div>
//                             </div>
//                             <div className={styles.titleWrapper}>
//                                 <p>
//                                     {title}
//                                 </p>
//                             </div>
//                         </div>
//                     </Tooltip>
//                 )
//             }
//             case "songs":
//             {
//                 const {image,likes,title}=data;
//                 return (
//                     <div className={styles.wrapper}>
//                          <div className={styles.card}>
//                                 <img src={image} alt="song"/>
//                                 <div className={styles.banner}>
//                                 <Chip className={styles.chip} label={`${likes} Likes`} size="small" />
//                                 </div>
//                             </div>
//                             <div className={styles.titleWrapper}>
//                             <p>{title}</p>
//                         </div>


//                     </div>
//                 )
//             }
//             default:
//                 return <></>
//     }
// }
// return getCard(type)
// }

// export default Card

import { Chip, Tooltip } from '@mui/material';
import React from 'react';
import styles from './Card.module.css';

const Card = ({ data, type }) => {
  // Function to render card content based on type
  const renderCardContent = (type) => {
    switch (type) {
      case 'album': {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs.length} tracks`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album cover" />
                <div className={styles.banner}>
                  <Chip label={`${follows} Follows`} size="small" className={styles.chip} />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }

      case 'songs': {
        const { image, likes, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song cover" />
              <div className={styles.banner}>
                <Chip label={`${likes} Likes`} size="small" className={styles.chip} />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return renderCardContent(type);
};

export default Card;
