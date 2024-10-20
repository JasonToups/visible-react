import SideBarTrigger from './app-sidebar-trigger';

export default function Header() {
  return (
    <header className='flex flex-row grow p-3 items-center'>
      <SideBarTrigger />
      <h1 className='text-4xl'>Visible React</h1>
    </header>
  );
}
