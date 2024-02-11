/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";
export const About = () => {
  return (
      <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img src={getImageUrl("about/aboutImage.png")}
           alt='about image' className={styles.aboutImage}/>
           <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")
          } alt='cursor icon'/>
              <div className={styles.aboutItemText}>
                <h3>Développeur Frontend</h3>
                <p>Je suis développeur Front end avec des expériences
                  issues de projets personnels et Freelance, je suis 
                  capable de créer des sites attrayants et optimisés
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")
          } alt='cursor icon'/>
              <div className={styles.aboutItemText}>
                <h3>Développeur Backend</h3>
                <p>Je suis développeur Backend avec beaucoup d'expériences 
                  avec php/laravel et mysql et un peu d'expérience avec
                  MongoDB, Express Js et Node Js
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/mobile.png")
          } alt='cursor icon' className={styles.mobile}/>
              <div className={styles.aboutItemText}>
                <h3>Développeur Mobile</h3>
                <p>J'ai un tout petit peu d'expérience dans le développement
                  mobile avec quelques petits projets Android Studio et Java,
                  d'ailleurs j'y travaille pour développer mes compétences
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
  )
}

