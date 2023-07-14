USE Blog;
DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
   id SERIAL PRIMARY KEY NOT NULL,
   post_title  VARCHAR(60) NOT NULL,
   post_author VARCHAR(60) NOT NULL,
   post_date   INT NOT NULL,
   post_new    TEXT NOT NULL
);