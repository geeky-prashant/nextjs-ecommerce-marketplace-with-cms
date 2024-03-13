import MainNav from "./main-nav"
import { UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div
      className="border-b"
    >
      <div className="flex h-16 items-center px-4">
        <div>This will be a store switcher</div>
        <MainNav
          className="mx-4"
        />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  )
}

export default Navbar