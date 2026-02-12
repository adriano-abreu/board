import { Header } from "./header"

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-405 mx-auto w-full p-10 flex flex-col gap-8 h-dvh">
      <Header />
      {children}
    </div>
  )
}
