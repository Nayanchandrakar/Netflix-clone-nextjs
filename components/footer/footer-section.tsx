import { FC } from "react";
import Container from "@/components/shared/contianer";
import Link from "next/link";
import Navigation from "@/components/header/Navigation";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const footerData = [
    "FAQ",
    "Investor Relations",
    "Privacy",
    "speed test",
    "Help Centre",
    "Jobs",
    "Cookie Preferences",
    "Legal Notices",
    "Account",
    "Ways to Watch",
    "Cooperate Information",
    "only on Netflix",
    "Media Centre",
    "Terms of Use",
    "Contact us",
  ];
  return (
    <footer className="my-20">
      <Container className="text-zinc-400">
        <Link href="/" className="">
          Questions? Call <u>000-800-919-1694</u>
        </Link>
        <div className="w-full h-full grid grid-cols-2 gap-3 lg:grid-cols-4 mt-4">
          {footerData?.map((values: string) => (
            <Link className="underline" key={values} href="/">
              {values}
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Navigation />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
