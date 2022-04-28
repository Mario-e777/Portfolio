/* Styles */
import layoutStyles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <main className={layoutStyles.main} >{children}</main>
    </div>
  );
};
