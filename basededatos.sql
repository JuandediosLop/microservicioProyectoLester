CREATE DATABASE `libreria` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- libreria.estado definition

CREATE TABLE `estado` (
  `id_estado` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- libreria.rol definition

CREATE TABLE `rol` (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- libreria.usuario definition

CREATE TABLE `usuario` (
  `login_name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `id_rol` int NOT NULL,
  `id_estado` int NOT NULL,
  PRIMARY KEY (`login_name`),
  KEY `usuario_rol_FK` (`id_rol`),
  KEY `usuario_estado_FK` (`id_estado`),
  CONSTRAINT `usuario_estado_FK` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  CONSTRAINT `usuario_rol_FK` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- libreria.proveedor definition

CREATE TABLE `proveedor` (
  `id_proveedor` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `nit` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `id_estado` int NOT NULL,
  `telefono` int NOT NULL,
  PRIMARY KEY (`id_proveedor`),
  UNIQUE KEY `prov_unique_nit` (`nit`),
  KEY `proveedor_estado_FK` (`id_estado`),
  CONSTRAINT `proveedor_estado_FK` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- libreria.sucursal definition

CREATE TABLE `sucursal` (
  `id_sucursal` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` int NOT NULL,
  `id_estado` int NOT NULL,
  PRIMARY KEY (`id_sucursal`),
  KEY `sucursal_estado_FK` (`id_estado`),
  CONSTRAINT `sucursal_estado_FK` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- libreria.cliente definition

CREATE TABLE `cliente` (
  `nit` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `dpi` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` int NOT NULL,
  `id_estado` int NOT NULL,
  PRIMARY KEY (`nit`),
  KEY `cliente_estado_FK` (`id_estado`),
  CONSTRAINT `cliente_estado_FK` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- libreria.producto definition

CREATE TABLE `producto` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `existencias` int NOT NULL,
  `precio_costo` float NOT NULL,
  `precio_venta` float NOT NULL,
  `id_sucursal` int NOT NULL,
  `id_proveedor` int NOT NULL,
  `id_estado` int NOT NULL,
  `tipo_producto` varchar(15) NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `producto_proveedor_FK` (`id_proveedor`),
  KEY `producto_estado_FK` (`id_estado`),
  KEY `producto_sucursal_FK` (`id_sucursal`),
  CONSTRAINT `producto_estado_FK` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  CONSTRAINT `producto_proveedor_FK` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedor` (`id_proveedor`),
  CONSTRAINT `producto_sucursal_FK` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursal` (`id_sucursal`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- libreria.venta definition

CREATE TABLE `venta` (
  `id_venta` int NOT NULL AUTO_INCREMENT,
  `fecha_venta` date NOT NULL,
  `nit_cliente` varchar(50) NOT NULL,
  `total_venta` float NOT NULL,
  `id_sucursal` int NOT NULL,
  `metodo_pago` varchar(3) NOT NULL,
  `id_estado` int NOT NULL,
  PRIMARY KEY (`id_venta`),
  KEY `venta_estado_FK` (`id_estado`),
  KEY `venta_cliente_FK` (`nit_cliente`),
  KEY `venta_sucursal_FK` (`id_sucursal`),
  CONSTRAINT `venta_cliente_FK` FOREIGN KEY (`nit_cliente`) REFERENCES `cliente` (`nit`),
  CONSTRAINT `venta_estado_FK` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  CONSTRAINT `venta_sucursal_FK` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursal` (`id_sucursal`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- libreria.detalle_venta definition

CREATE TABLE `detalle_venta` (
  `id_detalle` int NOT NULL AUTO_INCREMENT,
  `id_venta` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio_unidad` float NOT NULL,
  `total_producto` float NOT NULL,
  `id_estado` int NOT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `detalle_venta_venta_FK` (`id_venta`),
  KEY `detalle_venta_producto_FK` (`id_producto`),
  KEY `detalle_venta_estado_FK` (`id_estado`),
  CONSTRAINT `detalle_venta_estado_FK` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  CONSTRAINT `detalle_venta_producto_FK` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`),
  CONSTRAINT `detalle_venta_venta_FK` FOREIGN KEY (`id_venta`) REFERENCES `venta` (`id_venta`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
