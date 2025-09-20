import MenuIcon from '../../assets/icons/menu.svg';
import CloseIcon from '../../assets/icons/close.png';
import SearchIcon from '../../assets/icons/search.svg';
import SunIcon from '../../assets/icons/sun.svg';
import ChartIcon from '../../assets/icons/Chart.svg';
import NotificationIcon from '../../assets/icons/notification.svg';
import DotsIcon from '../../assets/icons/notificationside.svg';
import WarningIcon from '../../assets/icons/Bugs.svg';
import UserIcon from '../../assets/icons/ByeWind.svg';
import TextIcon from '../../assets/icons/Text.svg';
import StarIcon from '../../assets/icons/star.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import HotspotIcon from '../../assets/icons/hotspot.svg';
import people1 from '../../assets/icons/3D05.svg'
import people2 from '../../assets/icons/Female05.svg'
import people3 from '../../assets/icons/3D08.svg'
import people4 from '../../assets/icons/Male07.svg'
import people5 from '../../assets/icons/Male11.svg'
import people6 from '../../assets/icons/Male08.svg'
import people7 from '../../assets/icons/Female08.svg'
import people8 from '../../assets/icons/Female09.svg'
import people9 from '../../assets/icons/3D03.svg'
import people10 from '../../assets/icons/Female15.svg'
import people11 from '../../assets/icons/Male06.svg'
import greydotIcon from '../../assets/icons/graydot.svg'
import overviewIcon from '../../assets/icons/default.svg'
import ecommerceIcon from '../../assets/icons/ecommerce.svg'
import projectIcon from '../../assets/icons/projects.svg'
import idIcon from '../../assets/icons/id.svg'
import onlinecoursesIcon from '../../assets/icons/onlinecourses.svg'
import accountIcon from '../../assets/icons/account.svg'
import blogIcon from '../../assets/icons/blog.svg'
import corporateIcon from '../../assets/icons/corporate.svg'
import socialIcon from '../../assets/icons/social.svg'
import chevronDown from '../../assets/icons/chevronDown.svg'
import chevronRight from '../../assets/icons/chevronRight.svg'

export const Icon = ({ name, className = "w-5 h-5", ...props }) => {
  const icons = {
    menu: MenuIcon,
    close: CloseIcon,
    search: SearchIcon,
    sun: SunIcon,
    chart: ChartIcon,
    notification: NotificationIcon,
    dots: DotsIcon,
    warning: WarningIcon,
    user: UserIcon,
    Text:TextIcon,
    star:StarIcon,
    profile:ProfileIcon,
    hotspot:HotspotIcon,
    people1:people1,
    people2:people2,
    people3:people3,
    people4:people4,
    people5:people5,
    people6:people6,
    people7:people7,
    people8:people8,
    people9:people9,
    people10:people10,
    people11:people11,
    greydot:greydotIcon,
    ecommerce:ecommerceIcon,
    overview:overviewIcon,
    project:projectIcon,
    idd:idIcon,
    onlinecourse:onlinecoursesIcon,
    corporate:corporateIcon,
    blog:blogIcon,
    social:socialIcon,
    account:accountIcon,
    chevronDown:chevronDown,
    chevronRight:chevronRight,

  };

  const iconSrc = icons[name];

  if (!iconSrc) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  // added icons name which shouldn't invert
  const shouldInvert = ![
    'user','people1', 'people2', 'people3', 'people4', 'people5', 
    'people6', 'people7', 'people8', 'people9', 'people10', 'people11'
  ].includes(name);

  // changing className with dark mode inversion icons
  const finalClassName = shouldInvert 
    ? `${className} dark:invert` 
    : className;


  return (
    <img 
      src={iconSrc} 
      alt={`${name} icon`}
      className={finalClassName} 
      {...props} 
    />
  );
};
