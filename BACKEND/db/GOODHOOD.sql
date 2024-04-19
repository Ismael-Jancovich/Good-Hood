    CREATE DATABASE good_hood_db;
USE good_hood_db;

CREATE TABLE categorias(
id_categoria int not null primary key,
nombre varchar(100)
);

CREATE TABLE productos(
id_producto INT NOT NULL PRIMARY KEY,
id_categoria INT NOT NULL,
nombre varchar(100),
descripcion varchar(250),
precio decimal(10,2),
FOREIGN KEY (id_categoria) REFERENCES categorias (id_categoria)
);

CREATE TABLE usuarios(
id_usuario int not null primary key,
nombre varchar(100),
apellido varchar(100),
administrador boolean default false,
contraseña varchar(16) not null,
usuario varchar(100) not null,
mail varchar (255) not null
);


CREATE TABLE ordenes(
id_orden int not null primary key,
id_usuario int,
fecha DATETIME,
total decimal(10,2),
FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
);

CREATE TABLE detalles(
id_detalles int not null primary key,
id_producto int,
id_orden int,
cantidad int,
precio decimal(10,2),
FOREIGN KEY (id_producto) REFERENCES productos (id_producto),
FOREIGN KEY (id_orden) REFERENCES ordenes (id_orden)
);

