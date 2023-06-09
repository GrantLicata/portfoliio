import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Link from "next/link";

const getData = () => {
  const data = items.applications;
  if (data) {
    return data;
  }
  return notFound();
};

const Portfolio = () => {
  const data = getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>Applications</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
            {item.live ? (
              <Button text="Visit The App" url={item.url} />
            ) : (
              <Link href={item.gitHub}>
                <button className={styles.inDevelopmentButton}>
                  In Development
                </button>
              </Link>
            )}
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              sizes="max-width: 598px, max-height: 500px"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
