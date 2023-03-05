import Image from 'next/image';
import Link from 'next/link';
import classes from './post-item.module.css';

function PostItem({ item }) {
  const { title, image, date, description, slug } = item;

  const formattedDate = new Date(date).toLocaleDateString('en-US');
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
