"use client";

import React from "react";

import Link from "next/link";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { MenuIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/base/button";

import { ContentWrapper } from "@/components/content-wrapper";
import { FlexBox } from "@/components/flexbox";

const navItems: { text: string; href: string; className?: string; icon?: React.JSX.Element }[] = [
  {
    text: "Hakkımızda",
    href: "#hakkımızda",
    className: "hover:bg-secondary/25 py-2.5 font-medium text-primary transition-all",
  },
  {
    text: "Hizmetlerimiz",
    href: "#hizmetlerimiz",
    className: "hover:bg-secondary/25 py-2.5 font-medium text-primary transition-all",
  },
  {
    text: "Bize Ulaşın",
    href: "#bize-ulasin",
    className: "ml-1 from-primary to-secondary bg-linear-to-br px-6 py-2.5 text-white",
    icon: <PhoneIcon className="size-4 shrink-0" />,
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <ContentWrapper className="mx-auto">
        <FlexBox className="justify-between py-2 md:py-3">
          <div className="flex items-center">
            <img
              src="/images/uzun-muhendislik-logo.png"
              height="60px"
              width="120px"
              alt="Uzun Mühendislik Logo"
              className="h-12 w-auto select-none md:h-16"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <Button key={item.href} className={item.className} asChild>
                <Link href={item.href} className="flex items-center gap-2">
                  {item.icon && item.icon} {item.text}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger asChild>
              <Button
                className="text-primary hover:bg-secondary/25 flex items-center justify-center rounded-md border-none bg-transparent p-2 md:hidden"
                aria-label="Open menu">
                <MenuIcon className="size-6" />
              </Button>
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Portal>
              <DropdownMenuPrimitive.Content
                align="end"
                sideOffset={4}
                className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=right]:slide-in-from-left-2 space-y-1"
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.625rem",
                  padding: "0.5rem",
                  minWidth: "12rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "1px solid #e5e7eb",
                  zIndex: 50,
                }}>
                {navItems.map((item, index) => {
                  const isContactItem = index === navItems.length - 1;
                  return (
                    <DropdownMenuPrimitive.Item
                      key={item.href}
                      asChild
                      style={{
                        outline: "none",
                      }}>
                      <Link
                        href={item.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.625rem 0.75rem",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: isContactItem ? "white" : "#072142",
                          background: isContactItem
                            ? "linear-gradient(to bottom right, #072142, #69788c)"
                            : "transparent",
                          textDecoration: "none",
                          borderRadius: "0.375rem",
                          cursor: "pointer",
                          transition: "all 0.15s ease-in-out",
                        }}
                        onMouseEnter={(e) => {
                          if (isContactItem) {
                            e.currentTarget.style.opacity = "0.9";
                          } else {
                            e.currentTarget.style.backgroundColor = "rgba(105, 120, 140, 0.25)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (isContactItem) {
                            e.currentTarget.style.opacity = "1";
                          } else {
                            e.currentTarget.style.backgroundColor = "";
                          }
                        }}>
                        {item.icon && item.icon}
                        {item.text}
                      </Link>
                    </DropdownMenuPrimitive.Item>
                  );
                })}
              </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
          </DropdownMenuPrimitive.Root>
        </FlexBox>
      </ContentWrapper>
    </header>
  );
}

export { Header };
