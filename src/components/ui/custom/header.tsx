import SideBarTrigger from './app-sidebar-trigger';
import Inspect from '../../common/inspect';

const code = `  return (
    <header className='flex flex-row grow p-3 items-center'>
      <SideBarTrigger />
      <h1 className='text-4xl'>Visible React</h1>
    </header>
  );
  `;

export default function Header() {
  return (
    <Inspect name='Header' code={code}>
      <header className='flex flex-row grow p-3 items-center'>
        <SideBarTrigger />
        <h1 className='text-4xl'>Visible React</h1>
      </header>
    </Inspect>
  );
}
