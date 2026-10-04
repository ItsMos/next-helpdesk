import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Image
        src="/next.svg"
        alt="Next Helpdesk logo"
        width={100}
        height={50}
      />
      <h1>Next Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}