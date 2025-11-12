import Link from "next/link"

export const MainNavigation = () => {
  return (
    <ul className="main-menu">
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/projects'>Projects</Link></li>
    </ul>
  )
}
