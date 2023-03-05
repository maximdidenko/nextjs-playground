import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/minion.webp"
          alt="avatar"
          width={200}
          height={200}
        />
      </div>
      <h1>Hi, I'm Kevin</h1>
      <p>It's my blog app based on NextJS framework.</p>
    </section>
  );
}

export default Hero;
