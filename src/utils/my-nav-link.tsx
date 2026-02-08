import { NavLink } from "react-router";

interface MyNavLinkProps extends React.PropsWithChildren {
  to: string;
}

export function MyNavLink(props: MyNavLinkProps) {
  return (
    <div>
      <NavLink to={props.to} end>
        {props.children}
      </NavLink>
    </div>
  );
}
