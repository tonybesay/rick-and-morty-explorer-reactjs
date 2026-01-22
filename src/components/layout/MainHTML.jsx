export default function MainHTML({ children }) {
  return (
    <main className="min-h-screen py-6">
      <div className="app-container">
        {children}
      </div>
    </main>
  )
}