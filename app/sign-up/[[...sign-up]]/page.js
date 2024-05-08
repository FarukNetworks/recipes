import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid place-items-center pt-5">
      <SignUp path="/sign-up" />
    </div>
  )
}


