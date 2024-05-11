import Button from "./Button"

export default function LastSection() {
  return (
    <div id="lastSection" className="border-y border-white mt-20 relative">
      <div className="container grid md:grid-cols-2 grid-cols-1 md:gap-32 py-20">
        <div>
          <h2 className="text-5xl mb-6">New here? Join us!</h2>
          <p className="mb-6">Join our community of food lovers and start sharing your favorite recipes today!</p>
          <Button link="/sign-up" text="Sign Up"/>
        </div>

        <div>
          <h2 className="text-5xl mb-6">Publish Your Recipe!</h2>
          <p className="mb-6">Share your culinary creations with the world! Login to publish your recipes and inspire others in the kitchen.</p>
          <Button link="/sign-in" text="Login and Publish"/>
        </div>
      </div>
    </div>
  )
}
