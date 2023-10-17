"use client"
import Navbar from "./components/nabar";
import QRGenerator from "./components/QRGenerator";
export default function Home() {
  return (
    <>

    <Navbar></Navbar>
<div className="animated-gradient h-screen w-full flex m-auto  justify-center p-10">
    <QRGenerator/>
</div>
</>
      )
}
