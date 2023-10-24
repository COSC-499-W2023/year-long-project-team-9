// import Navbar from './navbar'
// import Footer from './footer'


interface layoutProps {
    children: any;
}


 
export default function Layout({ children}: layoutProps) {
  return (
    <>
        <main>{children}</main>
    </>
  )
}