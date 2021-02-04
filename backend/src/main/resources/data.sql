INSERT INTO tb_category (name, created_At) VALUES ('Personal', NOW());
INSERT INTO tb_category (name, created_At) VALUES ('Work', NOW());
INSERT INTO tb_category (name, created_At) VALUES ('Home', NOW());

INSERT INTO tb_task (name, date, description) VALUES ('Taking children to school', TIMESTAMP WITH TIME ZONE '2021-02-11T20:50:07.12345Z', 'Make the snack, arrive at 09:00.');
INSERT INTO tb_task (name, date, description) VALUES ('Taking children to school', TIMESTAMP WITH TIME ZONE '2021-02-11T10:50:07.12345Z', 'Make the snack, arrive at 09:00.');
INSERT INTO tb_task (name, date, description) VALUES ('Taking children to school', TIMESTAMP WITH TIME ZONE '2021-02-11T12:50:07.12345Z', 'Make the snack, arrive at 09:00.');

INSERT INTO tb_task_category (task_id, category_id) VALUES (1, 2);
INSERT INTO tb_task_category (task_id, category_id) VALUES (2, 1);
INSERT INTO tb_task_category (task_id, category_id) VALUES (2, 3);

