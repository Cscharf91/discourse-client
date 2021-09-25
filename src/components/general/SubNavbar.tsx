import { Menu } from "antd";
import { Link } from "react-router-dom";

interface SubNavbarProps {
  selectedKey?: string;
}

const SubNavbar = ({ selectedKey }: SubNavbarProps) => {
  return (
    <Menu
      style={{ background: "rgb(27, 45, 53)" }}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={selectedKey ? [selectedKey] : undefined}
    >
      <Menu.Item key="1">
        <Link to="/home">
          Vote
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/home/find">
          Find Debate
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/home/create">
          Create Topic
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default SubNavbar;
