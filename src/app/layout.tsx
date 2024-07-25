import { NavigationHeader } from '@component/navigations/NavigationMenu/navigation-header';
import '@style/globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className="background-gradient m-auto w-4/5 text-base">
        <NavigationHeader />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
