import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-20 min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
      <form className="max-w-md mx-auto space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          className="bg-white bg-opacity-10 text-white placeholder-gray-300"
        />
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-white bg-opacity-10 text-white placeholder-gray-300"
        />
        <Textarea
          placeholder="Your Message"
          className="bg-white bg-opacity-10 text-white placeholder-gray-300"
        />
        <Button
          type="submit"
          className="w-full bg-white text-purple-900 hover:bg-opacity-90"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
