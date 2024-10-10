import React from "react";
import styles from "./Main.module.scss";

const cards = [
  {
    id: 1,
    title: "Fast and effective communication",
    desc: "Solve customer problems, get fast and effective technical support for your product without additional actions ",
  },
  {
    id: 2,
    title: "Greater customer focus",
    desc: "Customer centricity that improves the quality and quantity of sales and helps increase customer return at all stages. Stay in touch 24/7",
  },
  {
    id: 3,
    title: "Long-term communication chains",
    desc: "Build long-term communications as well as a customer communications map. We help businesses understand their user and address all their business requirements from application to purchase.",
  },
];

const loockLike = [
    {
        id: 1,
        text: 'Live communication with video, audio and photo',
    },
    {
        id: 2,
        text: 'Instantly send and receive messages from users ',
    },
    {
        id: 3,
        text: 'User-friendly interface and efficiently built UI ',
    },
    {
        id: 4,
        text: 'Adaptable AI and custom settings ',
    },

]

const desc = [
    {
        id: 1,
        img: './LogoHelpGuid.png',
        title: 'Support Groups: Types, Benefits, and What to Expect',
    },
    {
        id: 2,
        img: './mayo.png',
        title: 'Stress management',
    },
    {
        id: 3,
        img: './mha.png',
        title: 'Find Support Groups',
    },
]

export const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.label}>
        <h3 className={styles.labelText}>
          Create genuine and deep communication with people who will use your
          service and be satisfied with the communications and experience with
          your business
        </h3>
      </div>
      <div className={styles.logo}>
        <h2>COMMUNICATION WITHOUT BORDERS
        </h2>
      </div>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.logoWhat}>
        <h2>WHAT OUR APP LOOKS LIKE</h2>
      </div>
      <div className={styles.whatFour}>
        {loockLike.map((item) => (
            <div key={item.id} className={styles.element}>
                <div className={styles.elementContent}>
                    <p className={styles.elementText}>{item.text}</p>
                </div>
            </div>
        ))}
      </div>
      <div className={styles.desc}>
        {desc.map((item) => (
            <div key={item.id} className={styles.cardDescSecond}>
                <div className={styles.descContent}>
                <img src={item.img} alt={item.id} />
                <p className={styles.descText}>{item.title}</p>
                </div>
                <button className={styles.btn}>Detailed</button>
            </div>
        ))}
      </div>
    </section>
  );
};
