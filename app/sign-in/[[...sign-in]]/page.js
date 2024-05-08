import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid place-items-center pt-5">
      <SignIn path="/sign-in" />
    </div>
  )
}