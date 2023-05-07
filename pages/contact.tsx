import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

const Contact = () => {
  return (
    <div className="min-h-[90vh] sml:min-h-[88vh] flex items-center justify-center mt-20 sml:mt-0">
      <Head>
        <title>Javiier-pzk | Contact</title>
      </Head>
      <main className="flex flex-col gap-4 items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-titleFont text-lg text-textYellow font-semibold flex items-center tracking-wide"
        >
          What&rsquo;s Next?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-titleFont text-4xl mdl:text-5xl font-semibold"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-[600px] text-center text-textDark"
        >
          Whether you have a question, job opportunity, or just want to say hi,
          drop me an email and I will get back to you as soon as possible!
        </motion.p>
        <a href={`mailto:${process.env.NEXT_PUBLIC_GMAIL}`}>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-40 h-14 border border-textYellow mt-6 font-titleFont text-textYellow tracking-wider rounded-md hover:bg-hoverColor duration-300"
          >
            Say Hi!
          </motion.button>
        </a>
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
