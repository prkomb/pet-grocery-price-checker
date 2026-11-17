import "@/components/Home/Header/Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, MenuItem, ListItemIcon, Avatar } from "@mui/material";
import SearchRounded from "@mui/icons-material/SearchRounded";
import LogoutRounded from "@mui/icons-material/LogoutRounded";
import PersonRounded from "@mui/icons-material/PersonRounded";
import BookmarkRounded from "@mui/icons-material/BookmarkRounded";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import Brand from "@/assets/images/Brand.svg";
import CustomDrawer from "./Drawer";
import { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/features/logout";

const Header = () => {
  const anchorElement = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user?.payload);

  const handleLogout = () => {
    setOpen(false);
    dispatch(logout({ navigate }));
  };

  const displayName =
    user?.profile?.name && user?.profile?.surname
      ? `${user.profile.name} ${user.profile.surname}`
      : user?.email;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/85 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 sm:px-6">
        <NavLink
          to="/"
          aria-label="PriceHunt home"
          className="flex shrink-0 items-center gap-2"
        >
          <img src={Brand} alt="" className="h-9 w-9" />
          <span className="font-heading text-xl font-extrabold tracking-tight text-ink">
            PriceHunt
          </span>
        </NavLink>

        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto hidden w-full max-w-lg items-center gap-2 rounded-full bg-muted px-4 focus-within:ring-2 focus-within:ring-primary lg:flex"
        >
          <SearchRounded className="text-muted-foreground" aria-hidden="true" />
          <label htmlFor="header-search" className="sr-only">
            Search for a product
          </label>
          <input
            id="header-search"
            type="search"
            placeholder="Search for a product (e.g., Milk, Bread)"
            className="h-11 w-full bg-transparent text-sm text-ink placeholder:text-slate-600 focus:outline-none"
          />
        </form>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          {user ? (
            <div className="hidden sm:block">
              <button
                ref={anchorElement}
                type="button"
                onClick={() => setOpen(true)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls={open ? "user-menu" : undefined}
                className="flex min-h-11 items-center gap-2 rounded-full py-1 pl-1 pr-3 hover:bg-muted"
              >
                <Avatar
                  alt=""
                  sx={{ width: 36, height: 36 }}
                  src={`https://ui-avatars.com/api/?name=${user.profile?.name}+${user.profile?.surname}&background=0f766e&color=fff`}
                />
                <span className="max-w-[160px] truncate text-sm font-semibold text-ink">
                  {displayName}
                </span>
                <KeyboardArrowDownRounded fontSize="small" aria-hidden="true" />
              </button>

              <Menu
                id="user-menu"
                open={open}
                anchorEl={anchorElement.current}
                onClose={() => setOpen(false)}
                slotProps={{ paper: { sx: { mt: 1, borderRadius: 3, minWidth: 190 } } }}
              >
                <MenuItem component={NavLink} to="/profile" onClick={() => setOpen(false)}>
                  <ListItemIcon>
                    <PersonRounded fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => setOpen(false)}>
                  <ListItemIcon>
                    <BookmarkRounded fontSize="small" />
                  </ListItemIcon>
                  Saved
                </MenuItem>
                <MenuItem onClick={handleLogout} sx={{ color: "error.main" }}>
                  <ListItemIcon sx={{ color: "inherit" }}>
                    <LogoutRounded fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <NavLink
                to="/login"
                className="inline-flex min-h-11 items-center rounded-full px-5 font-heading font-bold text-ink hover:bg-muted"
              >
                Login
              </NavLink>
              <NavLink to="/register" className="btn-primary">
                Get started
              </NavLink>
            </div>
          )}

          <CustomDrawer userData={user?.profile} />
        </div>
      </div>
    </header>
  );
};

export default Header;
