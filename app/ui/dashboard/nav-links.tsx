'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserIcon,
  ChartBarIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Inicio',   href: '/dashboard',          icon: HomeIcon },
  { name: 'Valances', href: '/dashboard/valances', icon: ChartBarIcon },
  { name: 'Ventas',   href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Usuarios', href: '/dashboard/customers',icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center  justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm text-black font-large hover:bg-sky-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3
            ${pathname === link.href ? 'bg-sky-600 text-white shadow-gray-400':''}
            `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden  md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
