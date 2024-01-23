'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserIcon,
  ChartBarIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { usePathname } from "next/navigation"
import Link from 'next/link';

const links = [
  { name: 'Valances', href: '/dashboard/valances',  icon: ChartBarIcon },
  { name: 'Ventas',   href: '/dashboard/invoices',  icon: DocumentDuplicateIcon },
  { name: 'Usuarios', href: '/dashboard/customers', icon: UserGroupIcon },
];
export default async function dashboard() {
  const pathname = usePathname()

  return (
    <main className='w-full h-full'>
      <div className="w-full p-2 text-center flex gap-4 justify-center flex-wrap">


        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="w-32 h-32 border-2 rounded-lg flex justify-center flex-wrap border-cyan-500/50 shadow-lg shadow-gray-400"
            >
              <LinkIcon className="w-20 text-cyan-900" />
              <p className="hidden  md:block">{link.name}</p>
            </Link>
          )
        })}


      </div>

    </main>
  )
}
2
// export default function NavLinks() {
//   const pathname = usePathname()
//   return (
//     <>
//       {links.map((link) => {
//         const LinkIcon = link.icon;
//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className={`flex h-[48px] grow items-center  justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm text-black font-large hover:bg-sky-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3
//             ${pathname === link.href ? 'bg-sky-600 text-white':''}
//             `}
//           >
//             <LinkIcon className="w-6" />
//             <p className="hidden  md:block">{link.name}</p>
//           </Link>
//         );
//       })}
//     </>
//   );
// }
