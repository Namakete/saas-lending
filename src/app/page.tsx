import { BannerInformation } from '@component/displays/Banner';
import { NavigationFooter } from '../components/navigations/NavigationMenu/navigation-footer';
import { PrismaClient } from '@prisma/client';
import { ToolContainer } from '@component/displays/Tool';

const HomePage = async () => {
  const prisma = new PrismaClient();

  const technologies = await prisma.technologies.findMany();

  return (
    <main>
      <BannerInformation />
      <ToolContainer technologies={technologies} />
      <NavigationFooter />
    </main>
  );
};

export default HomePage;
