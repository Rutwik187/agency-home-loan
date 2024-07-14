"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import {
  ArrowDown,
  ArrowDownNarrowWide,
  ArrowDownWideNarrow,
  ChevronUp,
} from "lucide-react";
import {
  DropdownMenuArrow,
  DropdownMenuItemIndicator,
} from "@radix-ui/react-dropdown-menu";

export function MobileNav() {
  return (
    <div className=" md:hidden flex justify-between items-center px-4">
      <div className="flex gap-4">
        <Image
          src="/sb-finwise-logo.jpeg"
          width={100}
          height={100}
          alt="sppu-logo"
          className="object-contain w-20 h-20"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>About Us</DropdownMenuItem>
          <DropdownMenuItem>
            {" "}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-4 items-center">
                  <p>Services</p> <ChevronUp className="rotate-180" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>About Us</DropdownMenuItem>
                <DropdownMenuItem>Services</DropdownMenuItem>
                <DropdownMenuItem>About Us</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DropdownMenuItem>
          <DropdownMenuItem>About Us</DropdownMenuItem>
          <DropdownMenuItem>Contact</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
