type TNavbarFeatures = {
  [feat in keyof TFeatures as Exclude<feat, 'impact' | 'volunteers'>]: feat extends
    | 'shop'
    ? { link: string; text: string }
    : { link: `/#${feat}`; text: `${Capitalize<feat>}` };
};

const NavbarFeatures: TNavbarFeatures = {
  causes: {
    link: '/#causes',
    text: 'Causes',
  },
  events: {
    link: '/#events',
    text: 'Events',
  },
  courses: {
    link: '/#courses',
    text: 'Courses',
  },
  shop: {
    link: '/shop',
    text: 'Shop',
  },

}

export default NavbarFeatures
