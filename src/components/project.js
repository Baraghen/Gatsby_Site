import React from "react"
import styles from "../components/index.module.css"

export default props => (
    <div className={styles.project}>
      <img src={props.thumbnail} className={styles.thumbnail} alt="" />
      <div className={styles.description}>
        <h3 className={styles.projectname}>{props.projectname}</h3>
        <p className={styles.excerpt}>{props.excerpt}</p>
        <a className={styles.projectlink} href={props.projectlink} target="_blank" rel="noopener noreferrer">{props.projectlinktext}</a>
      </div>
    </div>
) 