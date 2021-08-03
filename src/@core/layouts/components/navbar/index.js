// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import NavbarUser from './NavbarUser'
import IntlDropdown from './IntlDropdown'

const ThemeNavbar = (props) => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  return (
    <Fragment>
      <ul className="nav navbar-nav align-items-center ml-auto">
        <IntlDropdown />
        <NavbarUser
          skin={skin}
          setSkin={setSkin}
          setMenuVisibility={setMenuVisibility}
        />
      </ul>
    </Fragment>
  )
}

export default ThemeNavbar
