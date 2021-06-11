import layoutStyles from './layoutStyles.module.scss'
const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.layout}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
