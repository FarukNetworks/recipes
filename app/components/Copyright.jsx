
export default function Copyright() {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6">
      <p className="text-center text-sm">
      Copyright Ⓒ {currentYear} <a className="text-teal" target="_blank" href="https://farukdevelopment.com/">farukdevelopment</a>.
      </p>
    </footer>
  )
}
