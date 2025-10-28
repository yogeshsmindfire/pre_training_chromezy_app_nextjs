export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head></head>
      <body style={{ margin: '0px', padding: '0px' }}>{children}</body>
    </html>
  )
}
