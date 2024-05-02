import { Link } from "react-router-dom";
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';

const Sidebar = () => {
  return (
    <div className="sidebar">
  <div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
      <li>
      <DashboardIcon className="icon"></DashboardIcon>
        <span>Dashboard</span>
      </li>
      <p className="title">LIST</p>
      <Link to="/users">
        <li>
          <PersonIcon className="icon"></PersonIcon>
          <span>Users</span>
        </li>
      </Link>
      <Link to="/product">
        <li>
        <PaymentIcon className="icon"></PaymentIcon>
          <span>Products</span>
        </li>
      </Link>
      <li>
      <StoreIcon className="icon"></StoreIcon>
        <span>Orders</span>
      </li>
      <Link to="/categories">
      <li>
        <CategoryIcon className="icon"></CategoryIcon>
        <span>Categories</span>
      </li>
      </Link>
      <p className="title">USER</p>
      <li>
      <AccountCircleIcon className="icon"></AccountCircleIcon>
        <span>Profile</span>
      </li>
      <li>
        <LogoutIcon className="icon"></LogoutIcon>
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption"></div>
    <div className="colorOption"></div>
  </div>
</div>
  )
}

export default Sidebar