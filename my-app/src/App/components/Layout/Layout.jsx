import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
