type FrontendLayoutProps = LayoutProps<'/[locale]'>

export default function FrontendLayout({ children }: FrontendLayoutProps) {
  return <>{children}</>
}
