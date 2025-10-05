function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 w-full bg-blue-900 text-white h-21 overflow-hidden">
        <div className="flex items-center h-full">
          <div 
            className="flex whitespace-nowrap"
            style={{
              animation: 'scroll 15s linear infinite'
            }}
          >
            <div className="flex">
              <span className="px-8 text-lg font-medium">
                Copyright © Youssef Mohammed 2025 all rights reserved 😉
              </span>
              <span className="px-8 text-lg font-medium">
                Copyright © Youssef Mohammed 2025 all rights reserved 😉
              </span>
              <span className="px-8 text-lg font-medium">
                Copyright © Youssef Mohammed 2025 all rights reserved 😉
              </span>
              <span className="px-8 text-lg font-medium">
                Copyright © Youssef Mohammed 2025 all rights reserved 😉
              </span>
              <span className="px-8 text-lg font-medium">
                Copyright © Youssef Mohammed 2025 all rights reserved 😉
              </span>
            </div>
            <div className="flex">
              <span className="px-8 text-lg font-medium">
                Copyright © Youssef Mohammed 2025 all rights reserved 😉
              </span>
              <span className="px-8 text-lg font-medium">
                Copyright © Youssef Mohammed 2025 all rights reserved 😉
              </span>
              <span className="px-8 text-lg font-medium">
                Copyright © Youssef Mohammed 2025 all rights reserved 😉
              </span>
              <span className="px-8 text-lg font-medium">
                Copyright © Youssef Mohammed 2025 all rights reserved 😉
              </span>
              <span className="px-8 text-lg font-medium">
                Copyright © Youssef Mohammed 2025 all rights reserved 😉
              </span>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </footer>
    </>
  );
}
export default Footer