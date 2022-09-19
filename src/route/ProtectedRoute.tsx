import { Navigate } from "react-router-dom";
import { AuthCheck } from "types/Global";
import { useLocation } from "react-router-dom"
type props = {
  Comp : JSX.Element
}

export default function ProtectedRoute({ loading , isAuthenticated , Comp } : AuthCheck & props) {
  let { pathname } = useLocation()
    if(!loading) {
      if (!isAuthenticated) {
        return <Navigate to='/login' />
      }
      else {
        return pathname === "/login" ? <Navigate to='/sessions'/> : Comp;
      }
    }
    else {
      return <></>
    }
}