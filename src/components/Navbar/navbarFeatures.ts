type TNavbarFeatures = {
  [feat in keyof Pick<TFeatures, 'causes' | 'events' | 'courses' | 'market'> ]: feat extends 'market'
    ? { link: '/shop'; text: 'Shop' }
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
  market: {
    link: '/shop',
    text: 'Shop',
  },

}

export default NavbarFeatures
