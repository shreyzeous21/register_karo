import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Badge color mapping based on tag type
const getTagStyle = (tag: string) => {
  const styles = {
    "Tax & Audit": "bg-blue-100 text-blue-800 border-blue-200",
    "Management": "bg-purple-100 text-purple-800 border-purple-200",
    "Tax": "bg-indigo-100 text-indigo-800 border-indigo-200",
    "Research": "bg-green-100 text-green-800 border-green-200",
    "Compliance": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Audit": "bg-blue-100 text-blue-800 border-blue-200",
    "Money Back": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "Money": "bg-lime-100 text-lime-800 border-lime-200",
    "Tax Return": "bg-cyan-100 text-cyan-800 border-cyan-200",
    "News": "bg-orange-100 text-orange-800 border-orange-200",
    "Private Limited Company": "bg-rose-100 text-rose-800 border-rose-200",
    "Customer Success": "bg-teal-100 text-teal-800 border-teal-200",
  };
  return styles[tag as keyof typeof styles] || "bg-gray-100 text-gray-800 border-gray-200";
};

const blogs = [
  {
    id: 1,
    title: "Small business & Startup",
    author: "Prabhaash Mishra",
    date: "1 Jan 2023",
    status: "Today",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop",
    tags: ["Tax & Audit", "Management"],
  },
  {
    id: 2,
    title: "Scale-Up Company Offer",
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop",
    tags: ["Tax", "Research", "Compliance"],
  },
  {
    id: 3,
    title: "Growing Business Package",
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    tags: ["Audit", "Money Back"],
  },
  {
    id: 4,
    title: "Scale-Up Company Offer",
    author: "Karan Kumar",
    date: "1 Jan 2023",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    tags: ["Money", "Management"],
  },
  {
    id: 5,
    title: "Scale-Up Company Offer",
    author: "Richa Singh",
    date: "1 Jan 2023",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Tax Return", "News", "Audit"],
  },
  {
    id: 6,
    title: "Scale-Up Company Offer",
    author: "Mika Nora",
    date: "1 Jan 2023",
    description:
      "Starting a community doesn't need to be complicated, but how do you start?",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Private Limited Company", "Customer Success"],
  },
];

export default function BlogSection() {
  return (
    <section className="py-10 px-4  bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-orange-600 mb-2">
            EXPLORE OUR BLOGS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Accelerate Digital Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group overflow-hidden border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg">
              <Link href="#">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{blog.author}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{blog.date}</span>
                    </div>
                    {blog.status && (
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                        {blog.status}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 flex items-center gap-2">
                    {blog.title}
                    <ArrowUpRight className="w-4 h-4 inline-block transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className={`${getTagStyle(tag)} transition-colors`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="bg-[#1B4E78] text-white hover:bg-[#15395A] border-none">
            Show more blogs
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}