import { FC, ReactNode } from "react";
import Header from "./Includes/Header";
interface Props {
  children: ReactNode;
  type?: string;
}

const Layout: FC<Props> = ({ children, type }) => {
  return (
    <>
      <div className={`text-white bg-cover bg-no-repeat  relative`}>
        <Header type={type} />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;

