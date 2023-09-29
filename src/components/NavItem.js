import "./NavItemStyles.css";

const NavItem = (props) => {
  return (
    <>
      <li key={props.index} data-testid={`navLink-${props.index}`}>
        <a href={props.item.url} className={props.item.cName}>
          {props.item.title}
        </a>
      </li>
    </>
  );
};

export default NavItem;
