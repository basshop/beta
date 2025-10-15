'use client'

import * as React from "react"
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, Search, Home, ShoppingBag, Gamepad, CreditCard, DollarSign, 
  Phone, MessageSquare, ChevronRight 
} from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { cn } from "@/lib/utils"

export default function Navbar() {
  return (
    <nav className={cn("fixed top-0 left-0 w-full z-50 bg-[#ffffff]/50 backdrop-blur-md shadow-sm p-3")}>
      <div className="container mx-auto flex justify-between items-center max-w-7xl px-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 mr-8">
          <Link href="/">
            <Image src="/image-removebg-preview (3).png" alt="logo" width={40} height={40} />
          </Link>
        </div>
         
         <ul className="hidden md:flex space-x-5 items-center flex-1 justify-start">
          <li className="flex items-center space-x-1 text-sm text-gray-700 hover:text-violet-600 font-medium">
            <Link href="/" className="flex items-center space-x-1 ">
                
              <span>หน้าหลัก</span>
            </Link>
          </li>
          <li className="text-sm text-gray-700 hover:text-violet-600 font-medium">
            <Link href="#pricing" className="flex items-center space-x-1 transform -translate-x-[5px]">
             
              <span>แพ็กเกจ</span>
            </Link>
          </li>

          <li className="text-sm text-gray-700">
            <Link href="#faq" className="flex items-center space-x-1 hover:text-violet-600 font-medium"style={{  }}>
           
              <span>คำถามพบบ่อย</span>
            </Link>
          </li>

          {/* ติดต่อ */}
          <li 
           
            className="text-sm text-gray-700 hover:text-violet-600 font-medium cursor-pointer flex items-center space-x-1"
          style={{  }}

>
           <Link href="https://www.facebook.com/profile.php?id=100087575394420" className="flex items-center space-x-1 hover:text-violet-600 font-medium"style={{  }}>
            <span>ติดต่อ</span>
            </Link>
          </li>
        </ul>
        
        {/* Search + Buttons */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
     <Button className="flex items-center px-1.5 py-0.5 bg-[#f5f5f5] text-gray-700 rounded-full border shadow-sm hover:bg-[#e5e5e5] transition text-xs h-8 min-h-0">
                <Search className="w-3 h-3 mr-1 text-gray-400" />
                <span className="text-xs">ค้นหาสินค้า...</span>
              </Button>
          <Link href="https://www.facebook.com/profile.php?id=100087575394420">
  <Button
    className="w-full rounded-[10px] bg-violet-500 text-white font-semibold py-3 hover:bg-violet-600 transition-colors duration-300"
  >
    เริ่มต้นกับเรา
  </Button>
</Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-10 w-10 text-zinc-900" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[300px] bg-[#ffffff]/95 backdrop-blur-md text-[#000000]">
              <div className="pt-15 space-y-5">
                <ul className="flex flex-col space-y-6 text-gray-700 "    style={{  }}>
                  <li className="flex items-center space-x-1 font-medium">
                    <div className="h-5 w-5 " />
                    <Home className="h-4 w-4" />
                    <Link className="" href="/">หน้าหลัก</Link>
                  </li>
                  <li className="flex items-center space-x-1 font-medium">
                    <div className="h-5 w-5  " />
                    <ShoppingBag className="h-4 w-4" />
                    <Link href="#features">แพ็กเกจ</Link>
                  </li>
                  <li className="flex items-center space-x-1 font-medium">
                    <div className="h-5 w-5" />
                    <Gamepad className="h-4 w-4" />
                    <Link href="#faq">คำถามพบบ่อย</Link>
                  </li>
  
                  <li 
                  
                    className="flex items-center space-x-1 font-medium cursor-pointer"
                  >
                    <div className="h-5 w-5" />
                    <MessageSquare className="h-4 w-4" />
                    <Link href="https://www.facebook.com/profile.php?id=100087575394420">ติดต่อ</Link>
                  </li>
                  
                </ul>

                <div className="flex items-center text-sm text-gray-700 py-2">
                  <hr className="flex-grow border-t border-gray-300" />
             
                    
                    <span className="px-3 whitespace-nowrap">เริ่มต้นกับเรา</span>
               
                  <hr className="flex-grow border-t border-gray-300" />
                </div>

                <div className="flex items-center justify-between px-1">
                  <Link href="#" className="flex items-center space-x-2 text-gray-700">
                    <div className="h-5 w-5" />
                          <Link href="https://www.facebook.com/profile.php?id=100087575394420">
  <Button
    className="w-full rounded-[10px] bg-violet-500 text-white font-semibold py-3 hover:bg-violet-600 transition-colors duration-300"
  >
    เริ่มต้นกับเรา
  </Button>
</Link>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Contact Dialog */}
    <Dialog>
  <DialogContent className="animate-fade-in-out1 max-w-md rounded-2xl p-6 shadow-lg border border-gray-200">
    <DialogHeader>
      <DialogTitle>ติดต่อเรา</DialogTitle>
      <p className="text-sm text-muted-foreground">ช่องทางการติดต่อ</p>
    </DialogHeader>

    <div className="space-y-3">
      <div className="flex items-center space-x-3 p-2 rounded-md bg-zinc-100 hover:bg-zinc-200">
       
        <div>
          <p className="font-medium">Discord</p>
          <Link
            href="https://discord.gg/gDCKXNcCvF"
            target="_blank"
            className="text-sm text-zinc-600 hover:underline"
          >
            discord.gg/gDCKXNcCvF
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-2 rounded-md bg-zinc-100 hover:bg-zinc-200">
   
        <div>
          <p className="font-medium">Facebook</p>
          <Link
            href="https://www.facebook.com/redshopv2"
            target="_blank"
            className="text-sm text-zinc-600 hover:underline"
          >
            facebook.com/redshopv2
          </Link>
        </div>
      </div>
    </div>
  </DialogContent>
</Dialog>
    </nav>
  )
}