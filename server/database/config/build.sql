BEGIN;

DROP TABLE IF EXISTS users,
categories,
projects,
techniques,
projects_users,
projects_techniques,
tasks,
contacts,
appointments CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  name VARCHAR(250),
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  role VARCHAR(100) DEFAULT 'user'
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  content TEXT NOT NULL
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  description TEXT,
  link TEXT,
  rating VARCHAR(50),
  category_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  status VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  project_id INTEGER,
  FOREIGN KEY(project_id) REFERENCES projects(id) ON DELETE CASCADE
);

CREATE TABLE projects_users (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  project_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(project_id) REFERENCES projects(id) ON DELETE CASCADE
);

CREATE TABLE techniques (
  id SERIAL PRIMARY KEY,
  name VARCHAR(250) NOT NULL
);

CREATE TABLE projects_techniques (
  id SERIAL PRIMARY KEY,
  project_id INTEGER,
  technique_id INTEGER,
  FOREIGN KEY(project_id) REFERENCES projects(id) ON DELETE CASCADE,
  FOREIGN KEY(technique_id) REFERENCES techniques(id) ON DELETE CASCADE
);

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  place VARCHAR(250) NOT NULL,
  time TIMESTAMP NOT NULL,
  project_id INTEGER NOT NULL,
  FOREIGN KEY(project_id) REFERENCES projects(id) ON DELETE CASCADE
);

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  message TEXT NOT NULL
);

INSERT INTO
  users (
    username,
    name,
    email,
    password,
    role
  )
VALUES
  (
    'mahmoud',
    'محمود',
    'mahmoud@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'admin'
  ),
  (
    'd.abed',
    'د.عبد الحميد',
    'abed@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'supervisor'
  ),
  (
    'd.naji',
    'د.ناجي',
    'naji@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'supervisor'
  ),
  (
    'mohammad',
    'محمد',
    'mohammad@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'melad',
    'melad',
    'melad@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'ali',
    'علي',
    'ali@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'ahmed',
    'أحمد',
    'ahmed@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'qasem',
    'قاسم',
    'qasem@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'waleed',
    'وليد',
    'waleed@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'rami',
    'رامي',
    'rami@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'tarek',
    'طارق',
    'tarek@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'yasser',
    'ياسر',
    'yasser@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'omar',
    'عمر',
    'omar@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'ibrahim',
    'ابراهيم',
    'ibrahim@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'khaled',
    'خالد',
    'khaled@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'gaber',
    'جابر',
    'gaber@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'hassan',
    'حسان',
    'hassan@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  ),
  (
    'nour',
    'نور',
    'nour@gmail.com',
    '$2a$10$y1jCesNel9bz0mf9OTDG9uMhx.MdcigCmD43u0vwCwZe5EaQ.JHs6',
    'user'
  );

INSERT INTO
  categories (title, content)
VALUES
  ('منتهي', 'المشاريع التي تم الانتهاء منها'),
  ('حالي', 'المشاريع التي تحت العمل');

INSERT INTO
  projects (
    name,
    description,
    link,
    rating,
    category_id,
    created_at
  )
VALUES
  (
    'مشروع تطوير تطبيقات الموبايل',
    'مشروع تخزين المعلومات هو مشروع تطوير تطبيقات الموبايل والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية ',
    'https://bit.ly/3942R8V',
    'امتياز',
    1,
    '2020-09-17'
  ),
  (
    'مشروع تطبيقات سطح المكتب',
    'مشروع تخزين المعلومات هو مشروع تطويري تخزين المعلومات والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية ',
    'https://bit.ly/3942R8V',
    'امتياز',
    1,
    '2020-09-04'
  ),
  (
    'مشروع للعقارات',
    'مشروع تخزين المعلومات هو مشروع تطويري تخزين المعلومات والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية ',
    'https://bit.ly/3942R8V',
    'امتياز',
    1,
    '2020-09-06'
  ),
  (
    'مشروع للتعليم الالكتروني',
    'مشروع تخزين المعلومات هو مشروع تطويري تخزين المعلومات والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية ',
    'https://bit.ly/3942R8V',
    'امتياز',
    1,
    '2020-09-02'
  ),
  (
    'مشروع لتعليم اللغة الانجليزية',
    'مشروع تخزين المعلومات هو مشروع تطويري تخزين المعلومات والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية ',
    'https://bit.ly/3942R8V',
    'امتياز',
    2,
    '2021-09-30'
  ),
  (
    'مشروع للتجارة الالكترونية',
    'مشروع تخزين المعلومات هو مشروع تطويري تخزين المعلومات والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية ',
    'https://bit.ly/3942R8V',
    'لايوجد, المشروع تحت التطوير',
    2,
    '2021-09-25'
  ),
  (
    'مشروع لادارة المستشفيات',
    'مشروع تخزين المعلومات هو مشروع تطويري تخزين المعلومات والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية والتي تستخدم في المحادثات التقنية ',
    'https://bit.ly/3942R8V',
    'امتياز',
    2,
    '2021-09-20'
  );

INSERT INTO
  tasks (status, content, project_id)
VALUES
  ('للعمل عليهم', 'task content', 1),
  ('للعمل عليهم', 'task content', 1),
  ('تحت العمل', 'task content', 1),
  ('تحت العمل', 'task content', 1),
  ('تحت العمل', 'task content', 1),
  ('تحت العمل', 'task content', 1),
  ('تم عملهم', 'task content', 1),
  ('تم عملهم', 'task content', 1),
  ('تم عملهم', 'task content', 1),
  ('للعمل عليهم', 'task content', 2),
  ('تحت العمل', 'task content', 2),
  ('تم عملهم', 'task content', 2),
  ('تم عملهم', 'task content', 2),
  ('للعمل عليهم', 'مراجعة خطوات ما قبل الاطلاق', 6),
  ('للعمل عليهم', 'انشاء البيئة التجريبية', 6),
  ('للعمل عليهم', 'عمل مقدمة شابتر5', 6),
  ('تحت العمل', 'اختبار الحماية', 6),
  ('تحت العمل', 'اختبار تجربة المستخدم', 6),
  ('تحت العمل', 'اختبار المزامنة بين المستخدمين', 6),
  ('تحت العمل', 'تعديل محتوى الموقع', 6),
  ('تحت العمل', 'عمل ديزاين للموقع', 6),
  ('تم عملهم', 'عمل شابتر 6', 6),
  ('تم عملهم', 'عمل شابتر 5', 6),
  ('تم عملهم', 'عمل شابتر 4', 6),
  ('تم عملهم', 'عمل شابتر 3', 6),
  ('تم عملهم', 'عمل شابتر 2', 6),
  ('تم عملهم', 'عمل شابتر 1', 6);

INSERT INTO
  projects_users (user_id, project_id)
VALUES
  (2, 1),
  (10, 1),
  (11, 1),
  (2, 2),
  (12, 2),
  (13, 2),
  (2, 3),
  (14, 3),
  (15, 3),
  (3, 4),
  (3, 4),
  (10, 4),
  (3, 5),
  (8, 5),
  (9, 5),
  (2, 6),
  (4, 6),
  (5, 6),
  (2, 7),
  (6, 7),
  (7, 7);

INSERT INTO
  appointments (place, time, project_id)
VALUES
  (
    'جامعة فلسطين قاعة القدس',
    '2022-06-21 13:00',
    5
  ),
  (
    'جامعة فلسطين قاعة حيفا',
    '2022-06-14 12:00',
    7
  );

INSERT INTO
  techniques (name)
VALUES
  (' node.js '),
  (' express.js '),
  (' react.js '),
  (' java '),
  (' php '),
  (' laravel '),
  (' javascript '),
  (' socket.io '),
  (' typescript '),
  (' vue.js '),
  (' mysql '),
  (' sql lite '),
  (' sql server ');

INSERT INTO
  projects_techniques (project_id, technique_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 7),
  (1, 8),
  (1, 9),
  (2, 1),
  (2, 2),
  (2, 3),
  (2, 4),
  (2, 5),
  (2, 6),
  (6, 7),
  (6, 1),
  (6, 2),
  (6, 3),
  (6, 4),
  (6, 5),
  (6, 6);

INSERT INTO
  contacts (name, email, message)
VALUES
  ('محمد', 'mohammad@gmail.com', 'مرحبا'),
  ('ميلاد', 'melad@gmail.com', 'مرحبا'),
  ('محمود', 'mahmoud@gmail.com', 'مرحبا');

COMMIT;