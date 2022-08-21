import { AiOutlineShoppingCart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiPieChart, } from 'react-icons/fi';
// import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
// import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
// import { GiLouvrePyramid } from 'react-icons/gi';


export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'ecommerce',
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'orders',
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'users',
          icon: <IoMdContacts />,
        },
        {
          name: 'products',
          icon: <RiContactsLine />,
        },
      ],
    },
    // {
    //   title: 'Apps',
    //   links: [
    //     {
    //       name: 'calendar',
    //       icon: <AiOutlineCalendar />,
    //     },
    //     {
    //       name: 'kanban',
    //       icon: <BsKanban />,
    //     },
    //     {
    //       name: 'editor',
    //       icon: <FiEdit />,
    //     },
    //     {
    //       name: 'color-picker',
    //       icon: <BiColorFill />,
    //     },
    //   ],
    // },
    {
      title: 'Charts',
      links: [
        {
          name: 'stacked',
          icon: <AiOutlineBarChart />,
        },
        {
          name: 'pie',
          icon: <FiPieChart />,
        },
        {
          name: 'line',
          icon: <AiOutlineStock />,
        },
        // {
        //   name: 'area',
        //   icon: <AiOutlineAreaChart />,
        // },
  
        // {
        //   name: 'bar',
        //   icon: <AiOutlineBarChart />,
        // },
        
        // {
        //   name: 'financial',
        //   icon: <RiStockLine />,
        // },
        // {
        //   name: 'color-mapping',
        //   icon: <BsBarChart />,
        // },
        // {
        //   name: 'pyramid',
        //   icon: <GiLouvrePyramid />,
        // },
       
      ],
    },
  ];

  export const ordersGrid = [
  
    {
      field: 'order_id',
      headerText: 'order_id',
      width: '150',
      textAlign: 'Center',
    },
    { field: 'product_id',
      headerText: 'product_id',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'user_id',
      headerText: 'user_id',
      textAlign: 'Center',
      width: '150',
    },
   
    {
      field: 'quantity',
      headerText: 'quantity',
      width: '120',
      editType: 'numericedit',
      textAlign: 'Center',
    },
  
    {
      field: 'order_date',
      headerText: 'order_date',
      width: '150',
      textAlign: 'Center',
    },
  ];

  export const usersGrid = [
  
    {
      field: 'user_id',
      headerText: 'user_id',
      width: '150',
      textAlign: 'Center',
    },
    { field: 'name',
      headerText: 'name',
      width: '150',
      textAlign: 'Center',
    },
  ];

  export const productsGrid = [
    { type: 'checkbox', width:'50' },
    {
      field: 'product_id',
      headerText: 'product_id',
      width: '150',
      textAlign: 'Center',
    },
    { field: 'name',
      headerText: 'name',
      width: '150',
      textAlign: 'Center',
    },
    { field: 'stock',
      headerText: 'stock',
      width: '150',
      textAlign: 'Center',
    },
    { field: 'selling_price',
      headerText: 'selling_price',
      width: '150',
      textAlign: 'Center',
    },
  ];

  export const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'purple-theme',
      color: '#7352FF',
    },
    {
      name: 'red-theme',
      color: '#FF5C8E',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
  ];