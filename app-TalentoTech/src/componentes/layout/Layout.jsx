
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={`${styles.layout} min-h-screen flex flex-col`}>
      <div className="px-4 sm:px-6 lg:px-10">
        <Header />
      </div>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-10">
        <Outlet />
      </main>

      <div className="px-4 sm:px-6 lg:px-10 pb-4">
        <Footer />
      </div>
    </div>
  );
}