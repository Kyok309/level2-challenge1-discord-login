import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[url('/background.svg')] bg-auto w-full h-full mobile:bg-none mobile:bg-[#313338] mobile:py-5 mobile:px-4">
      <div className="top-12 left-12 fixed mobile:w-full mobile:flex mobile:justify-center mobile:static mobile:mb-4">
        <img src="/discord-logo.svg" className="mobile:w-[130px] mobile:h-[36px]"/>
      </div>
      <div className="h-full flex justify-center items-center mobile:h-fit">
        <div className="w-[784px] h-[408px] bg-[#313338] flex justify-between items-center p-8 rounded-[5px] shadow-[0_2px_10px_0_rgba(0,0,0,0.2)] tablet:w-auto mobile:p-0 mobile:w-full mobile:h-fit mobile:shadow-none">
            <div className="w-[416px] flex flex-col justify-center items-center mobile:w-full">
              <div className="flex flex-col justify-center items-center text-center">
                <div className="text-white text-2xl font-semibold mb-2">Welcome back!</div>
                <div className="text-[#ABB0B7] font-normal">We're so excited to see you again!</div>
              </div>
              <div className="w-full h-full flex flex-col justify-between mt-[15px]">
                <div className="w-full mb-[17px]">
                  <div className="text-[#989CA3] text-xs font-bold mb-2">
                    EMAIL OR PHONE NUMBER <span className="text-red-600">*</span>
                  </div>
                  <input className="w-full h-[40px] rounded-[3px] bg-[#1E1F22] text-white p-[10px] focus:outline-none"/>
                </div>
                <div className="w-full">
                  <div className="text-[#989CA3] text-xs font-bold mb-2">
                    PASSWORD <span className="text-red-600">*</span>
                  </div>
                  <input className="w-full h-[40px] rounded-[3px] bg-[#1E1F22] text-white p-[10px] focus:outline-none"/>
                </div>

                <div className="mt-2 mb-[17px]">
                  <Link href="./" className="text-[#2FABF8] text-sm font-medium hover:underline">Forgot your password?</Link>
                </div>
                <button className="w-full h-[44px] bg-[#5865F2] rounded-[3px] text-white font-medium hover:bg-[#4852C4] transition duration-200">Log in</button>
                <div className="text-[#959BA4] text-sm font-medium mt-2">
                  Need an account? <Link href="./" className="text-[#2FABF8] hover:underline">Register</Link>
                </div>
              </div>
            </div>
            <div className="w-[240px] flex flex-col justify-center items-center tablet:hidden">
              <div className="mb-8">
                <img src="/qrcode.png" className="flex-shrink-0"></img>
              </div>
              <div className="text-white text-2xl font-semibold mb-2">Log in with QR Code</div>
              <div className="text-[#ABB0B7] text-center">Scan this with the <span className="font-semibold">Discord mobile app</span> to log in instantly.</div>
              <Link href="./" className="text-[#2FABF8] text-sm font-medium hover:underline py-2 px-4">Or, sign in with passkey</Link>
          </div>
          </div>
      </div>
    </main>
  );
}
