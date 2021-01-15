import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://g0.sunmag.me/sunmag.me/wp-content/uploads/2019/11/sunmag-004-small-avatar.png"
        className={s.avatar}
        alt=""
      />
      Post1
      <span>Like</span>
    </div>
  );
};

export default Post;
