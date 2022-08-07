import React from "react"
import footer from "../assets/footer-mobile-background.png"

function FooterComponent() {
  return (
    <div
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: "bottom center",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[200px]"
    >
      <div className="my-10">
        <p className="text-center">Copyright ©</p>
        <p className="text-center">
          2022 Urban Living Technology Co.,Ltd. All rights reserved
        </p>
      </div>
    </div>
  )
}

export default FooterComponent
