import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="shrink w-80 sm:order-2">
                <Link href="/">
                    <span className="font-bold uppercase text-3xl">BLOG VIEWER</span>
                </Link>
            </div>
        </div>
    </header>
  )
}
