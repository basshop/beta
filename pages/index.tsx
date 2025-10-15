'use client'

import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import { useEffect } from 'react'

const HomePage = () => {
    useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('show')
        }
      })
    }
    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()
    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])
  return (
    <div className="font-sans text-gray-800 antialiased">
      <Navbar />

      

      <section className="relative overflow-hidden mt-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-40 bg-brand-300 animate-float-slow"></div>
          <div
            className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30 bg-indigo-200 animate-float-slow"
            style={{ animationDelay: '-5s' }}
          ></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-zinc-50 px-3 py-1 text-xs text-brand-700 mb-4">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                เปิดให้บริการแล้ว — 24ชม.
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                สร้างเว็บให้วิ่ง <span className="gradient-text">เร็ว ปลอดภัย</span> และพร้อมสเกล
              </h1>

              <p className="mt-4 text-gray-600 text-base sm:text-lg">
                Betashif คือแพลตฟอร์มครบวงจรสำหรับธุรกิจออนไลน์
ให้บริการเช่าเว็บขายของและ โฮสติ้ง และจดโดเมนในที่เดียว
ให้ผู้ใช้สามารถเชื่อมต่อกัน แบ่งปันข้อมูล โพสต์ หรือโต้ตอบในรูปแบบที่คุณออกแบบขึ้นเองด้วย AI ทรงพลัง
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://www.facebook.com/profile.php?id=100087575394420" className="px-5 py-3 rounded-xl border border-violet-600 hover:border-brand-300 font-semibold transition text-gray-50 bg-violet-600">เช่าเว็บ</a>

                <a href="#features" className="px-5 py-3 rounded-xl border border-gray-200 hover:border-brand-300 font-semibold transition">สำรวจฟีเจอร์</a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-200 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                  Uptime 99.9%
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-200 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                  SSL ฟรี
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-200 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V7a2 2 0 00-2-2h-3l-2-2H9L7 5H4a2 2 0 00-2 2v6a2 2 0 002 2h4l2 2h4l2-2h4a2 2 0 002-2z" />
                  </svg>
                  สำรองข้อมูลรายวัน
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 lg:py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <h2 className="text-3xl font-extrabold gradient-text">ฟีเจอร์หลักของ Betashif</h2>
          <p className="mt-3 text-gray-600">ออกแบบมาสำหรับความเร็ว การปกป้องข้อมูล และความง่ายในการจัดการ</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card reveal rounded-2xl border border-gray-100 bg-white p-6 transition">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8V4H8m-2 8H2m20 0h-4M12 20v-4m6-6V5l-6-3-6 3v5c0 6 6 9 6 9s6-3 6-9z"/></svg>
            </div>
            <h3 className="font-bold text-lg">ความปลอดภัยแน่นหนา</h3>
            <p className="mt-1 text-gray-600 text-sm">ป้องกัน DDoS, SSL อัตโนมัติ, สำรองข้อมูลรายวัน และการเข้ารหัสที่ได้มาตรฐาน</p>
          </div>
          <div className="card reveal rounded-2xl border border-gray-100 bg-white p-6 transition" data-delay="100">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h10m-5-9V3m0 18v-3"/></svg>
            </div>
            <h3 className="font-bold text-lg">เร็วแรงด้วย NVMe</h3>
            <p className="mt-1 text-gray-600 text-sm">ดิสก์ NVMe และ Nginx/HTTP3 ช่วยให้เว็บโหลดไว รองรับทราฟฟิกได้ดี</p>
          </div>
          <div className="card reveal rounded-2xl border border-gray-100 bg-white p-6 transition" data-delay="200">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 className="font-bold text-lg">ตั้งค่าง่าย ใช้งานสบาย</h3>
            <p className="mt-1 text-gray-600 text-sm">แผงควบคุมใช้งานง่าย (DirectAdmin/cPanel) พร้อมตัวติดตั้งเว็บยอดนิยม</p>
          </div>
          <div className="card reveal rounded-2xl border border-gray-100 bg-white p-6 transition" data-delay="300">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22"/></svg>
            </div>
            <h3 className="font-bold text-lg">สเกลง่าย จ่ายตามจริง</h3>
            <p className="mt-1 text-gray-600 text-sm">อัปสเกลแผนได้ทันที ไม่ต้องย้ายเซิร์ฟเวอร์ ให้คุณโตไปพร้อมธุรกิจ</p>
          </div>
          <div className="card reveal rounded-2xl border border-gray-100 bg-white p-6 transition" data-delay="400">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"/></svg>
            </div>
            <h3 className="font-bold text-lg">อีเมลธุรกิจ & DNS</h3>
            <p className="mt-1 text-gray-600 text-sm">รองรับอีเมลโดเมนของคุณ พร้อมจัดการ DNS/SSL ได้ครบ</p>
          </div>
          <div className="card reveal rounded-2xl border border-gray-100 bg-white p-6 transition" data-delay="500">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 11.5V6a2 2 0 00-2-2H8a2 2 0 00-2 2v5.5M5 19h14a2 2 0 002-2v-3H3v3a2 2 0 002 2z"/></svg>
            </div>
            <h3 className="font-bold text-lg">ทีมช่วยเหลือ 24/7</h3>
            <p className="mt-1 text-gray-600 text-sm">ตอบแชทไว มีคู่มือใช้งานครบ ช่วยแก้ปัญหาเชิงเทคนิคอย่างมืออาชีพ</p>
          </div>
        </div>
      </div>
    </section>
          <section id="pricing" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <h2 className="text-3xl font-extrabold">แพ็กเกจบริการของเรา</h2>
          <p className="mt-3 text-gray-600">เริ่มต้นเล็กก่อน แล้วค่อยอัปได้ทุกเมื่อ จ่ายรายเดือน/รายปี</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       
          <div className="card reveal rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="font-bold text-lg">Starter</h3>
            <p className="mt-1 text-gray-600 text-sm">สำหรับเว็บส่วนตัว/โปรไฟล์</p>
            <div className="mt-4 text-3xl font-extrabold">฿39<span className="text-base font-semibold text-gray-500">/เดือน</span></div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>SSD NVMe 2 GB</li>
              <li>แบนด์วิดท์ไม่จำกัด</li>
              <li>Unlimited เว็บไซต์ • ฐานข้อมูลไม่จำกัด</li>
              <li>SSL ฟรี • สำรองข้อมูลรายวัน</li>
            </ul>
            <a href="pages/login.php" className="mt-6 block text-center px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">เริ่มต้น</a>
          </div>
    
          <div className="card reveal relative rounded-2xl border-2 border-brand-200 bg-white p-6">
            <span className="absolute -top-3 right-4 px-2 py-1 text-xs rounded-full bg-violet-600 text-white shadow">แนะนำ</span>
            <h3 className="font-bold text-lg">Pro</h3>
            <p className="mt-1 text-gray-600 text-sm">เหมาะสำหรับร้านค้า/บล็อกจริงจัง</p>
            <div className="mt-4 text-3xl font-extrabold">฿99<span className="text-base font-semibold text-gray-500">/เดือน</span></div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>รองรับการเติมเงินหลายช่องทาง</li>
              <li> บัญชีธนาคาร (ไม่ต้องจ่ายเพิ่ม ฟรี!!!)</li>
              <li> ระบบ วิเคราะห์ Data ช่วยวางแผนการขายได้แม่นยำ</li>
              <li>ระบบหลังบ้าน ใช้งานง่าย ยืดหยุ่นสูง</li>
              <li>โหลดเว็บ ไวทันใจ ลูกค้าไม่ต้องรอ</li>
            </ul>
            <a href="pages/login.php" className="mt-6 block text-center px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-brand-700 transition">เลือกแพ็กเกจนี้</a>
          </div>
    
          <div className="card reveal rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="font-bold text-lg">Business</h3>
            <p className="mt-1 text-gray-600 text-sm">องค์กรและทราฟฟิกสูง</p>
            <div className="mt-4 text-3xl font-extrabold">฿4599<span className="text-base font-semibold text-gray-500">/เว็บ</span></div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>ระบบเว็บไซต์ตามที่ต้องการ</li>
              <li>บริการหลังการขาย</li>
              <li>มี Hosting ฟรี</li>
              <li>พร้องใช้งาน</li>
              <li>ดูแล 24 ชั่วโมง</li>
            </ul>
            <a href="pages/login.php" className="mt-6 block text-center px-4 py-2 rounded-lg border border-gray-200 hover:border-brand-300 transition">พูดคุยกับเรา</a>
          </div>
        </div>
      </div>
    </section>
 <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="reveal text-3xl font-extrabold text-center">คำถามพบบ่อย</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <details className="reveal group rounded-xl border border-gray-200 bg-white p-5 open:shadow-glow transition">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
              มี Domain ฟรีให้ไหม?
              <span className="transition group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">มีครับจะเป็น Domain ของทางร้านเลยหรือถ้าอยากมี Domain เป็นของก็สามารถแจ้งได้</p>
          </details>
          <details className="reveal group rounded-xl border border-gray-200 bg-white p-5 open:shadow-glow transition" data-delay="120">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
              ถ้าไม่เช่าต่อฐานข้อมูลจะหายไหม?
              <span className="transition group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">ไม่หายแน่นอนครับ เราจะเก็บข้อมูลไว้ตลอดและจะไม่ลบ</p>
          </details>
          <details className="reveal group rounded-xl border border-gray-200 bg-white p-5 open:shadow-glow transition" data-delay="240">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
              มีค่าธรรมเนียมแอบแฝงไหม?
              <span className="transition group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">ทางเราไม่เก็บค่าธรรมเนียมเพิ่มเติมใดๆทั้งสิ้น ฟรีทุกอย่างจ่ายแค่เช่าครับ</p>
          </details>
          <details className="reveal group rounded-xl border border-gray-200 bg-white p-5 open:shadow-glow transition" data-delay="360">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
              มีทดลองก่อนซื้อหรือไม่?
              <span className="transition group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">มีทดลองใช้งานในบางช่วงโปรโมชัน ติดตามหน้าเพจหรือสอบถามทีมงานได้</p>
          </details>
        </div>
      </div>
    </section>
      {/* <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal rounded-3xl bg-gradient-to-br from-violet-700 to-violet-500 text-white p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">เริ่มต้นกับ Betashif วันนี้</h3>
              <p className="mt-2 text-brand-100">ติดตั้งไวภายใน 60 วินาที ย้ายโฮสต์ฟรี และมีทีมช่วยเหลือตลอดเวลา</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="#pricing" className="px-5 py-3 rounded-xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition">ดูราคา</a>
              <a href="#" className="px-5 py-3 rounded-xl border border-white/40 font-semibold hover:bg-white/10 transition">พูดคุยกับทีม</a>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      <footer id="contact" className="border-t border-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="reveal">
            <div className="inline-flex items-center gap-2">
              {/* <Image src="" alt="Reverz Cloud Logo" className="h-8 w-auto" /> */}
              <span className="text-lg font-extrabold">Betashif</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">เว็บไซต์ — เร็ว ปลอดภัย พร้อมสเกล</p>
          </div>
          <div className="reveal" data-delay="100">
            <h4 className="font-bold">ลิงก์</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#features" className="hover:text-brand-700">ฟีเจอร์</a></li>
              <li><a href="#pricing" className="hover:text-brand-700">แพ็กเกจ</a></li>
              <li><a href="#faq" className="hover:text-brand-700">คำถามพบบ่อย</a></li>
            </ul>
          </div>
          <div className="reveal" data-delay="200">
            <h4 className="font-bold">ติดต่อ</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>อีเมล: 755jkm@gmail.com</li>
              <li>Discord: <a href="https://discord.gg/HUDn3aYGjc">Betashif</a></li>
              <li>ที่อยู่: Bangkok, Thailand</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© <span id="year"></span> Betashif. สงวนลิขสิทธิ์.</div>
      </div>
    </footer>
    </div>
  )
}

export default HomePage
