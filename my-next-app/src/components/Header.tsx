import Link from 'next/link'

const Header = () => {
    return (
        <header className="container">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
        </header>
    )
}

export { Header }
