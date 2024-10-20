import { useSidebar } from '@/components/ui/sidebar';
import { Button } from './ui/button';
import { PanelLeft } from 'lucide-react';

export default function SidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar='trigger'
      variant='ghost'
      size='icon'
      className='h-7 w-7 lucide lucide-panel-left'
      onClick={toggleSidebar}
    >
      <PanelLeft />
    </Button>
  );
}
