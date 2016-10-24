CREATE TABLE users (
  id        BIGSERIAL PRIMARY KEY,
  username  VARCHAR(20) NOT NULL,
  email     VARCHAR(32) NOT NULL,
  password  VARCHAR(32) NOT NULL
);

CREATE TABLE groups (
  id     BIGSERIAL PRIMARY KEY,
  name   VARCHAR(32) NOT NULL,
  owner  BIGSERIAL references users(id)
);

CREATE TABLE usersgroups (
  userid  BIGSERIAL references users(id),
  groupid BIGSERIAL references groups(id),
  PRIMARY KEY (userid, groupid)
);

CREATE TABLE sites (
  id    BIGSERIAL PRIMARY KEY,
  url   VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL
);

CREATE TABLE markups (
  id       BIGSERIAL PRIMARY KEY,
  siteid   BIGSERIAL references sites(id),
  authorid BIGSERIAL references users(id),
  anchor   VARCHAR(255),
  text     VARCHAR(255) NOT NULL,
  comment  VARCHAR(255)
);

CREATE TABLE markupsgroups (
  markupid  BIGSERIAL references markups(id),
  groupid   BIGSERIAL references groups(id)
);

CREATE TABLE sitesgroups (
  groupid  BIGSERIAL references groups(id),
  siteid   BIGSERIAL references sites(id)
);

