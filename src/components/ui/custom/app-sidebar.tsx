import { Palette, Home, Gift, Cat, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom'; // Use NavLink for routing
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible';

// Menu items.
const gettingStartedItems = [
  {
    title: 'Create App with Vite',
    url: '/getting-started/create-app-with-vite', // Add leading slash to ensure it's an absolute URL
    icon: Gift,
  },
  {
    title: 'Styling & UI',
    url: '/getting-started/styling-and-ui', // Add leading slash
    icon: Palette,
  },
  {
    title: 'Deploy to GitHub Pages',
    url: '/getting-started/deploy-to-github-pages', // Add leading slash
    icon: Cat,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Explore Topics</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key='Home'>
                <SidebarMenuButton asChild>
                  <NavLink to='/'>
                    <Home />
                    <span>Home</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className='group/collapsible'>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Getting Started
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {gettingStartedItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink to={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
}
