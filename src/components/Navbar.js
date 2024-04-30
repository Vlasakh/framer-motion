import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="textx-2xl font-medium z-20 relative">
      <ul className="flex gap-12 text-gray-900">
        <Link href={'/'}>
          <li>Home</li>
        </Link>
        <Link href={'/contacts'}>
          <li>Contacts</li>
        </Link>
        <Link href={'/comments'}>
          <li>Comments</li>
        </Link>
      </ul>
    </nav>
  );
}
