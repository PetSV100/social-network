import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.main_img}
          src="http://anpash.ru/sites/default/files/journal/p3807.jpg"
          alt=""
        />
      </div>
      <div className="my-4 md:my-8">ava+description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
