import { useSidebar } from '@/components/ui/sidebar';
import { Button } from '../button';
import { PanelLeft } from 'lucide-react';

export default function SidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar='trigger'
      variant='ghost'
      size='lg'
      className='h-12 w-12 lucide lucide-panel-left'
      onClick={toggleSidebar}
    >
      <PanelLeft />
    </Button>
  );
}
