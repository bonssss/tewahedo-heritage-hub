import Navbar from "@/components/Navbar";
import { Heart, Globe, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4 animate-fadeIn">
            About This Platform
          </h1>
          <p className="text-xl text-muted-foreground">
            Preserving and sharing Ethiopian Orthodox heritage
          </p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-4xl mx-auto mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This platform is dedicated to digitizing and preserving the rich heritage of Ethiopian Orthodox Church historical places. We provide detailed descriptions, images, and videos of churches, monasteries, and sacred sites, making this invaluable cultural and spiritual heritage accessible to everyone.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Preservation",
              description: "Protecting sacred heritage for future generations through digital documentation",
              bg: "bg-primary/10",
              color: "text-primary",
            },
            {
              icon: Globe,
              title: "Accessibility",
              description: "Making Ethiopian Orthodox heritage accessible to people worldwide",
              bg: "bg-sacred-gold/10",
              color: "text-sacred-gold",
            },
            {
              icon: BookOpen,
              title: "Education",
              description: "Providing comprehensive information about each sacred site's history",
              bg: "bg-secondary/10",
              color: "text-secondary",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center space-y-4 p-6 rounded-xl shadow-lg bg-background hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`w-16 h-16 mx-auto rounded-full ${feature.bg} flex items-center justify-center animate-pulse`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Heritage Info */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ethiopian Orthodox Church Heritage
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Ethiopian Orthodox Tewahedo Church is one of the oldest Christian denominations in the world, with roots dating back to the 4th century. The church has played a central role in Ethiopian history, culture, and identity for over 1,700 years.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From the ancient rock-hewn churches of Lalibela to the cliff-side monasteries of Tigray, these sacred sites represent not just religious significance but also remarkable architectural and artistic achievements that deserve to be preserved and celebrated.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
