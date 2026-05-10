"use client"

import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  showBackButton?: boolean
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, showBackButton = true }) => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="border-gray-200 border-b bg-gray-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex min-h-[44px] items-center justify-between">
          {/* Breadcrumb Navigation */}
          <nav className="flex h-full items-center space-x-2 text-sm">
            <Link
              href="/"
              className="flex h-full items-center text-gray-600 transition-colors hover:text-primary-green"
            >
              <Home className="mr-1 h-4 w-4" />
              <span className="leading-none">Home</span>
            </Link>

            {items.map((item, index) => (
              <div key={index} className="flex h-full items-center">
                <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                {index === items.length - 1 ? (
                  <span className="flex h-full items-center font-medium text-gray-900 leading-none">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="flex h-full items-center text-gray-600 leading-none transition-colors hover:text-primary-green"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Back Button */}
          {showBackButton && (
            <button
              onClick={handleBack}
              className="flex h-full items-center rounded-md border border-gray-200 px-3 py-2 text-gray-600 text-sm transition-colors hover:border-primary-green hover:bg-white hover:text-primary-green"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
