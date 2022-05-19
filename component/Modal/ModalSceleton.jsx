import React from 'react';
import Image from 'next/image';
import styles from './Modal.module.sass';
import { Typewriter } from 'react-typewriting-effect';

export const ModalSceleton = () => {

  return (
    <div className={styles.modalSceleton}>
      <div className={styles.modalSceletonContainer}>
        <Image
          src='/logo-animate/logo.png'
          alt='logo-animate'
          width={40}
          height={40}
        />
        <span>
          <Typewriter
            string='tagiamtop'
            delay={80}
            stopBlinkinOnComplete
            cursor=''
          />
        </span>
      </div>
    </div>
  );
};
