export const Icons: Record<string, any> = {  
  close: require('./CloseIcon.png'),
  document: require('./DocumentIcon.png'),
  documentFill: require('./DocumentFillIcon.png'),
  dot: require('./DotIcon.png'),
  explore: require('./ExploreIcon.png'),
  exploreFill: require('./ExploreFillIcon.png'),
  filter: require('./FliterIcon.png'),
  hideEye: require('./HideEyeIcon.png'),
  hideEyeDisable: require('./HideEyeDisableIcon.png'),
  home: require('./HomeIcon.png'),
  homeFill: require('./HomeFillIcon.png'),
  line: require('./LineIcon.png'),
  profile: require('./ProfileIcon.png'),
  profileFill: require('./ProfileFillIcon.png'),
  search: require('./SearchIcon.png'),
  searchDisable: require('./SearchDisableIcon.png'),
};

export type IconName = keyof typeof Icons;
