const nav_menus_list = [
  {
    link: '/',
    title: 'Home',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/', title: 'Home Style 01' },
      { link: '/home-2', title: 'Home Style 02' },
      { link: '/home-3', title: 'Home Style 03' },
      { link: '/home-4', title: 'Home Style 04' },
      { link: '/home-5', title: 'Home Style 05' },
    ]
  },
  {
    link: '/about',
    title: 'About',
  },
  {
    link: '/service',
    title: 'Services',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/service', title: 'Services' },
      { link: '/service-details', title: 'Service Details' },
    ]
  },
  {
    link: '/shop',
    title: 'Pages',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/portfolio', title: 'Portfolio' },
      { link: '/portfolio-details', title: 'Portfolio Details' },
      { link: '/team', title: 'Team' },
      { link: '/team-details', title: 'Team Details' },
      { link: '/shop', title: 'Shop' },
      { link: '/shop-details', title: 'Shop Details' },
      { link: '/wishlist', title: 'Wishlist' },
      { link: '/cart', title: 'Cart' },
      { link: '/checkout', title: 'Checkout' },
      { link: '/faq', title: 'FAQ' },
    ]
  },
  {
    link: '/blog',
    title: 'Blog',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/blog', title: 'Blog' },
      { link: '/blog-details', title: 'Blog Details' },
    ]
  },
  {
    link: '/contact',
    title: 'Contact',
  },
]

export default nav_menus_list;