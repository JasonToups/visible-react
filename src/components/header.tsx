import SideBarTrigger from './app-sidebar-trigger';

export default function Header() {
  return (
    <header className='flex flex-row grow'>
      <SideBarTrigger />
      <h2>Nav Item</h2>
    </header>
  );
}
