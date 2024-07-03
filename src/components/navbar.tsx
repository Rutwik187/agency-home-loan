"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LoaderPinwheel } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Constructive Finance",
    href: "/docs/primitives/alert-dialog",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Loan Against Property",
    href: "/docs/primitives/hover-card",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Unsecured Business Loan",
    href: "/docs/primitives/progress",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "SME Loans",
    href: "/docs/primitives/scroll-area",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Life Insurance",
    href: "/docs/primitives/tabs",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Home Loan",
    href: "/docs/primitives/tooltip",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu className="mx-auto my-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <LoaderPinwheel className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Who we are
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Learn more about our company
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Directors">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Testimonials">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Awards and Certificates "
              >
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/emi-calculator" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              EMI Calculator
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
