import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import styles from './style/slide-card.module.scss'

export default function MediaCard({title,src,description,link}) {
  return (
    
          <div className={styles.slider_card_container}>


         
    <figure className={styles.card_banner}>
    <Image
                    src={src}
                    alt={title}
                    className={styles.cardImg}
                />
            </figure>
            <div className={styles.card_content}>
                <h3 className={styles.card_heading}>
                    {title}
                </h3>
                
                </div>
     
      <CardActions>
        
      <a className={[styles.btn , styles.btn_sm , styles.btn_pill , styles.btn_danger].join(' ')}
                        href={link}>
                        بیشتر
                    </a>
      </CardActions>
      </div>
  
  );
}