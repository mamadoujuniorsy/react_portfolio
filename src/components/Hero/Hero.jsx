/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = ()=>{
  return(
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Salut je m'appelle Mamadou Junior Sy</h1>
      <p className={styles.description}>Je suis Technicien Supérieur en Informatique,<br/>
        si vous voulez plus d'infos sur moi,<br/>
        n'hésitez pas à me contacter<br/>
      </p>
      <a href="mailto:mamadoujunior2002@gmail.com" className={styles.contactBtn}>Me contacter</a>
      <img src={getImageUrl("hero/heroImage.png")} alt="hero image" className={styles.heroimg}/>
    </div>
    <div className={styles.topBlur}></div>
    <div className={styles.bootomBlur}></div>
  </section>)
}