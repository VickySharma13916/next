"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./login.css";

const loginLayout = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = usePathname();
  return (
    <div>
      <div className="navbar">
        {path !== "/login/teacherlogin" ? (
          <div className="container mx-auto flex gap-4 font-semibold text-xl justify-center py-8">
            <Link className="hover:text-white transition-all" href={"/login"}>
              Login
            </Link>
            <Link
              className="hover:text-white transition-all"
              href={"/login/studentlogin"}
            >
              Student Login
            </Link>
            <Link
              className="hover:text-white transition-all"
              href={"/login/teacherlogin"}
            >
              Teacher Login
            </Link>
          </div>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default loginLayout;
