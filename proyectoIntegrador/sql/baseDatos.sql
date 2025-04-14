CREATE SCHEMA baseDatos_proyecto_integrador;
USE baseDatos_proyecto_integrador;

CREATE TABLE USUARIOS(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    email VARCHAR(80) NOT NULL,
    contrasenia TINYINT(8),
    dni INT UNSIGNED NOT NULL,
    fecha DATE NOT NULL,
    imagen TEXT NOT NULL, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE PRODUCTOS(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	usuario_id INT UNSIGNED NOT NULL,
    imagen TEXT NOT NULL,
	descripcion TEXT NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE COMENTARIOS(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    producto_id INT UNSIGNED NOT NULL,
    usuario_id INT UNSIGNED NOT NULL,
    comentario TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
    FOREIGN KEY (producto_id) REFERENCES productos (id)
);

INSERT INTO usuarios (id, nombre, email, imagen, fecha, dni)
VALUES (DEFAULT, 'Sofía Vidal', 'sofia.vidal@gmail.com', 'perfil1.jpg', '2001-06-13',44345567);

INSERT INTO usuarios (id, nombre, email, imagen, fecha, dni)
VALUES (DEFAULT, 'Miguel Canovas', 'miguel.canovas@gmail.com', 'perfil2.jpg','2001-06-13',44345567);

INSERT INTO usuarios (id, nombre, email, imagen, fecha, dni) 
VALUES (DEFAULT, 'Lucía Romero', 'lucia.romero@gmail.com', 'perfil3.jpg','2001-06-13',44345567);

INSERT INTO usuarios (id, nombre, email, imagen, fecha, dni) 
VALUES (DEFAULT, 'Tomás Rivas', 'tomas.rivas@gmail.com', 'perfil4.jpg','2001-06-13',44345567);

INSERT INTO usuarios (id, nombre, email, imagen, fecha, dni)
VALUES (DEFAULT, 'Julia Martino', 'julia.martino@gmail.com', 'perfil5.jpg','2001-06-13',44345567);




INSERT INTO productos (id, descripcion, imagen, usuario_id) 
VALUES (DEFAULT, 'Descripción', 'producto1.jpg', 1);

INSERT INTO productos (id, descripcion, imagen, usuario_id) 
VALUES (DEFAULT, 'Descripción', 'producto1.jpg', 1);

INSERT INTO productos (id, descripcion, imagen, usuario_id) 
VALUES (DEFAULT, 'Descripción', 'producto1.jpg', 2);

INSERT INTO productos (id, descripcion, imagen, usuario_id) 
VALUES (DEFAULT, 'Descripción', 'producto1.jpg', 2);

INSERT INTO productos (id, descripcion, imagen, usuario_id) 
VALUES (DEFAULT, 'Descripción', 'producto1.jpg', 3);

INSERT INTO productos (id, descripcion, imagen, usuario_id) 
VALUES (DEFAULT, 'Descripción', 'producto1.jpg', 3);

INSERT INTO productos (id, descripcion, imagen, usuario_id) 
VALUES (DEFAULT, 'Descripción', 'producto1.jpg', 4);

INSERT INTO productos (id, descripcion, imagen, usuario_id) 
VALUES (DEFAULT, 'Descripción', 'producto1.jpg', 4);

INSERT INTO productos (id, descripcion, imagen, usuario_id) 
VALUES (DEFAULT, 'Descripción', 'producto1.jpg', 5);

INSERT INTO productos (id, descripcion, imagen, usuario_id) 
VALUES (DEFAULT, 'Descripción', 'producto1.jpg', 5);



INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (1, 1, 2, 'Este es el comentario 1 sobre el producto 1');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (2, 1, 3, 'Este es el comentario 2 sobre el producto 1');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (3, 1, 4, 'Este es el comentario 3 sobre el producto 1');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (4, 2, 5, 'Este es el comentario 1 sobre el producto 2');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (5, 2, 1, 'Este es el comentario 2 sobre el producto 2');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario)
 VALUES (6, 2, 2, 'Este es el comentario 3 sobre el producto 2');
 
INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (7, 3, 3, 'Este es el comentario 1 sobre el producto 3');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (8, 3, 4, 'Este es el comentario 2 sobre el producto 3');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario)
 VALUES (9, 3, 5, 'Este es el comentario 3 sobre el producto 3');
 
INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (10, 4, 1, 'Este es el comentario 1 sobre el producto 4');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (11, 4, 2, 'Este es el comentario 2 sobre el producto 4');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (12, 4, 3, 'Este es el comentario 3 sobre el producto 4');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (13, 5, 4, 'Este es el comentario 1 sobre el producto 5');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (14, 5, 5, 'Este es el comentario 2 sobre el producto 5');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (15, 5, 1, 'Este es el comentario 3 sobre el producto 5');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (16, 6, 2, 'Este es el comentario 1 sobre el producto 6');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (17, 6, 3, 'Este es el comentario 2 sobre el producto 6');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (18, 6, 4, 'Este es el comentario 3 sobre el producto 6');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (19, 7, 5, 'Este es el comentario 1 sobre el producto 7');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (20, 7, 1, 'Este es el comentario 2 sobre el producto 7');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (21, 7, 2, 'Este es el comentario 3 sobre el producto 7');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (22, 8, 3, 'Este es el comentario 1 sobre el producto 8');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (23, 8, 4, 'Este es el comentario 2 sobre el producto 8');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (24, 8, 5, 'Este es el comentario 3 sobre el producto 8');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (25, 9, 1, 'Este es el comentario 1 sobre el producto 9');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (26, 9, 2, 'Este es el comentario 2 sobre el producto 9');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (27, 9, 3, 'Este es el comentario 3 sobre el producto 9');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (28, 10, 4, 'Este es el comentario 1 sobre el producto 10');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (29, 10, 5, 'Este es el comentario 2 sobre el producto 10');

INSERT INTO comentarios (id, producto_id, usuario_id, comentario) 
VALUES (30, 10, 1, 'Este es el comentario 3 sobre el producto 10');
