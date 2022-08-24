type TNavbarFeatures = {
  [feat in keyof TFeatures as Exclude<feat, 'impact' | 'volunteers'>]: feat extends
    | 'donations'
    | 'partners'
    | 'market'
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
  donations: {
    link: '/donate',
    text: 'Donate',
  },
  market: {
    link: '/shop',
    text: 'market',
  },
  partners: {
    link: '/partners',
    text: 'Become a Partner',
  },
}

export default NavbarFeatures
