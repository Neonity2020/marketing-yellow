"use client";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterImg from "@/assets/5.png";
import { motion } from "motion/react";
import Image from "next/image";

const Email = () => {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center">
      {/* 背景图片 */}
      <Image
        src={FooterImg}
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      
      {/* 内容 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 py-10 relative z-10"
      >
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl font-bold">Join our email</p>
          <p>Get 20% off per order</p>
        </div>
        <div className="space-y-5">
          <button className="btn-primary">Subscribe</button>
          <div className="flex flex-row justify-center gap-3 text-2xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Email;
