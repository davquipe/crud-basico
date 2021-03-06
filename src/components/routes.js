import { Content } from './app/AppContent'
import { Home, Bus, Cart, About, Sandwiches }
  from './app/AppContent'
import CategoriaList from './categorias/List'
import CategoriaForm from './categorias/Form'
import ProductoList  from './productos/List'
import ProductoForm  from './productos/Form'
import CompraList from './compras/List'
import CompraForm from './compras/Form'
import VentaList  from './ventas/List'
import VentaForm  from './ventas/Form'
import DetalleVentaList  from './detalleVentas/List'
import DetalleVentaForm  from './detalleVentas/Form'
import DetalleCompraList  from './detalleCompras/List'
import DetalleCompraForm  from './detalleCompras/Form'
import AlmacenList  from './almacenes/List'
import AlmacenForm  from './almacenes/Form'
import ClienteList  from './clientes/List'
import ClienteForm  from './clientes/Form'
import UnidadMedList  from './unidadMeds/List'
import UnidadMedForm  from './unidadMeds/Form'


import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'home',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/home',
    title: 'Home!',
    icon: 'home',
    exact: true,
    component: Home
  },


  {
    path: '/sandwiches',
    title: 'sandwiches!',
    icon: 'send',
    component: Sandwiches
  },
  {
    path: '/tacos',
    title: 'tacos!',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/tacos/bus',
        title: 'bus!',
        icon: 'send',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      },
      {
        path: '/tacos/about/:id',
        title: 'About!',
        icon: 'send',
        component: About
      }
    ]
  },
  {
    path: '/catalogo',
    title: 'Catalogo!',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/catalogo/categorias/list',
        exact: true,
        title: 'Categorias!',
        icon: 'send',
        component: CategoriaList
      },
      {
        path: '/catalogo/categorias/new',
        exact: true,
        title: 'Categoria New!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/categorias/edit/:id',
        exact: true,
        title: 'Categoria Edit!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/productos/list',
        exact: true,
        title: 'Productos!',
        icon: 'send',
        component: ProductoList
      },
      {
        path: '/catalogo/productos/new',
        exact: true,
        title: 'Producto New!',
        icon: 'send',
        component: ProductoForm,
        novisible: true
      },
      {
        path: '/catalogo/productos/edit/:id',
        exact: true,
        title: 'Producto Edit!',
        icon: 'send',
        component: ProductoForm,
        novisible: true
      },
      {
        path: '/catalogo/ventas/list',
        exact: true,
        title: 'Ventas!',
        icon: 'send',
        component: VentaList
      },
      {
        path: '/catalogo/ventas/new',
        exact: true,
        title: 'Venta New!',
        icon: 'send',
        component: VentaForm,
        novisible: true
      },
      {
        path: '/catalogo/ventas/edit/:id',
        exact: true,
        title: 'Venta Edit!',
        icon: 'send',
        component: VentaForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleVentas/list',
        exact: true,
        title: 'DetalleVentas!',
        icon: 'send',
        component: DetalleVentaList
      },
      {
        path: '/catalogo/detalleVentas/new',
        exact: true,
        title: 'DetalleVenta New!',
        icon: 'send',
        component: DetalleVentaForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleVentas/edit/:id',
        exact: true,
        title: 'DetalleVenta Edit!',
        icon: 'send',
        component: DetalleVentaForm,
        novisible: true
      },
      {
        path: '/catalogo/compras/list',
        exact: true,
        title: 'Compras',
        icon: 'shopping_cart',
        component: CompraList
      },
      {
        path: '/catalogo/compras/new',
        exact: true,
        title: 'Nueva Compras',
        component: CompraForm,
        novisible: true
      },
      {
        path: '/catalogo/compras/edit/:id',
        exact: true,
        title: 'Editar Compra',
        icon: 'shopping_cart',
        component: CompraForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleCompras/list',
        exact: true,
        title: 'Detalle Compras',
        icon: 'dns',
        component: DetalleCompraList
      },
      {
        path: '/catalogo/detalleCompras/new',
        exact: true,
        title: 'Nueva Compras',
        component: DetalleCompraForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleCompras/edit/:id',
        exact: true,
        title: 'Editar Detalle Compra',
        icon: 'dns',
        component: DetalleCompraForm,
        novisible: true
      },
      {
        path: '/catalogo/almacenes/list',
        exact: true,
        title: 'Almacenes',
        icon: 'dns',
        component: AlmacenList
      },
      {
        path: '/catalogo/almacenes/new',
        exact: true,
        title: 'Nuevo Almacen',
        component: AlmacenForm,
        novisible: true
      },
      {
        path: '/catalogo/almacenes/edit/:id',
        exact: true,
        title: 'Editar Almacen',
        icon: 'dns',
        component: AlmacenForm,
        novisible: true
      },
      {
        path: '/catalogo/clientes/list',
        exact: true,
        title: 'Lista Cliente',
        icon: 'dns',
        component: ClienteList
      },
      {
        path: '/catalogo/clientes/new',
        exact: true,
        title: 'Nuevo Cliente',
        component: ClienteForm,
        novisible: true
      },
      {
        path: '/catalogo/clientes/edit/:id',
        exact: true,
        title: 'Editar Clientes',
        icon: 'dns',
        component: ClienteForm,
        novisible: true
      },
      {
        path: '/catalogo/unidadMeds/list',
        exact: true,
        title: 'Unidad de Medida',
        icon: 'dns',
        component: UnidadMedList
      },
      {
        path: '/catalogo/unidadMeds/new',
        exact: true,
        title: 'Nueva Unidad de Medida',
        component: UnidadMedForm,
        novisible: true
      },
      {
        path: '/catalogo/unidadMeds/edit/:id',
        exact: true,
        title: 'Editar Unidad de Medida',
        icon: 'dns',
        component: UnidadMedForm,
        novisible: true
      },
    ]
  }
]

export { routes, routese }