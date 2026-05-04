export default function PageTransition({
  children,
  type = "page",
}: {
  children: React.ReactNode
  type?: "post" | "page"
}) {
  const transitionName = type === "post" ? "post-content" : "page-content"

  return (
    <div style={{ viewTransitionName: transitionName }} id="transition-wrapper">
      {children}
    </div>
  )
}
