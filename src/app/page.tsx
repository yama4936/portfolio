"use client"
import Image from "next/image"
import Link from "next/link"
import { Github, Mail, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  // アニメーションの設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-[#313131] text-white">
      {/* ヘッダー（固定） */}
      <header className="fixed top-0 left-0 right-0 bg-[#313131] z-50 flex justify-between items-center px-8 py-6 shadow-md">
        <div className="font-bold text-xl">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100}/>
          </Link>
        </div>
        <nav className="flex gap-8">
          <Link href="#about" className="hover:underline">
            About me
          </Link>
          <Link href="#deliverables" className="hover:underline">
            Deliverables
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-8 pt-32 pb-12">
        {/* プロフィールセクション */}
        <motion.section
          className="flex flex-col items-center md:items-stretch md:flex-row gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2 flex items-center justify-center md:justify-start" variants={itemVariants}>
            <h1 className="text-5xl font-bold px-">Yamada Kota</h1>
          </motion.div>
          <motion.div className="md:w-1/2 flex justify-center md:justify-end" variants={itemVariants}>
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image src="/images/profile.jpg?height=256&width=256" alt="Yamada Kota" fill className="object-cover" />
            </div>
          </motion.div>
        </motion.section>

        {/* Aboutセクション */}
        <motion.section
          id="about"
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={itemVariants}>
            自己紹介
          </motion.h2>
          <motion.p className="text-center mb-12" variants={itemVariants}>
            中京大学工学部情報工学科
          </motion.p>

          <motion.div className="flex justify-center gap-12" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <Link href="https://github.com" className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Github size={32} />
                </div>
                <span className="text-sm">Github</span>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="mailto:example@email.com" className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Mail size={32} />
                </div>
                <span className="text-sm">メールアドレス</span>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="https://twitter.com" className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                  </svg>
                </div>
                <span className="text-sm">X</span>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="https://instagram.com" className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Instagram size={32} />
                </div>
                <span className="text-sm">Instagram</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 成果物セクション */}
        <motion.section
          id="deliverables"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={itemVariants}>
            成果物
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="bg-[#d9d9d9] rounded-lg p-6 text-[#313131] hover:shadow-lg transition-shadow"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="font-bold text-lg mb-2">タイトル</h3>
                <p className="text-sm text-[#767676]">
                  ここに説明文を入力してください。主なポイント、引用、エピソード、または短い物語などを追加できます。
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}

