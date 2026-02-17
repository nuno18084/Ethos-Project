import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Mail, Instagram, MapPin } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Simulate API call
    console.log(data);
    toast.success("Thank you for your inquiry. We will be in touch shortly.");
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mt-4 mb-6">
              Start the Conversation
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              Whether you are looking for guidance, strategy, or creative direction, 
              we are here to listen.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-stone-600">
                <Mail className="w-5 h-5" />
                <span>hello@cristinavc-ethos.com</span>
              </div>
              <div className="flex items-center space-x-4 text-stone-600">
                <Instagram className="w-5 h-5" />
                <span>@cristinavc_ethos</span>
              </div>
              <div className="flex items-center space-x-4 text-stone-600">
                <MapPin className="w-5 h-5" />
                <span>Los Angeles, CA / Remote</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors bg-transparent placeholder-stone-300"
              placeholder="Jane Doe"
            />
            {errors.name && <span className="text-red-400 text-xs">Required</span>}
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
              Email
            </label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors bg-transparent placeholder-stone-300"
              placeholder="jane@example.com"
            />
            {errors.email && <span className="text-red-400 text-xs">Valid email required</span>}
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              rows={4}
              className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors bg-transparent placeholder-stone-300 resize-none"
              placeholder="Tell us about your project..."
            />
            {errors.message && <span className="text-red-400 text-xs">Required</span>}
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-stone-900 text-white hover:bg-stone-700 transition-colors duration-300 uppercase tracking-widest text-xs font-medium w-full md:w-auto"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
