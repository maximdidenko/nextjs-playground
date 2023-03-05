import PostItem from './post-item';
import classes from './posts-grid.module.css';

function PostsGrid(props) {
  return (
    <ul className={classes.grid}>
      {props.items.map((item) => {
        return <PostItem key={item.slug} item={item} />;
      })}
    </ul>
  );
}

export default PostsGrid;
