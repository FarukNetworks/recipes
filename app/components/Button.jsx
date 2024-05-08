import Link from "next/link"

export default function Button({link, text}) {
  return (
    <div>
      <button>
              <Link href={link} className='flex gap-5 text-teal items-center baseTransition hover:opacity-70 group'>
                {text}
                <svg
                className="group-hover:ml-2 baseTransition"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.3661 5.36611C15.8542 4.87796 16.6457 4.87796 17.1339 5.36611L25.8839 14.1161C26.372 14.6043 26.372 15.3958 25.8839 15.8839L17.1339 24.6339C16.6457 25.122 15.8542 25.122 15.3661 24.6339C14.878 24.1458 14.878 23.3543 15.3661 22.8661L21.9822 16.25H5C4.30965 16.25 3.75 15.6904 3.75 15C3.75 14.3096 4.30965 13.75 5 13.75H21.9822L15.3661 7.13389C14.878 6.64573 14.878 5.85428 15.3661 5.36611Z"
                    fill="#CBE6EE"
                  />
                </svg>
              </Link>
            </button>
    </div>
  )
}
