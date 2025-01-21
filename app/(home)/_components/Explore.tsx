import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Building2,
  BarChartIcon as ChartBar,
  Users,
  Boxes,
  ShoppingCart,
  Calculator,
  ArrowRightCircle,
} from "lucide-react";
import { Separator } from "../../../components/ui/separator";

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Company Formation",
      description:
        "Build web-based solutions that enhance customer experience.",
    },
    {
      icon: ChartBar,
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      icon: Users,
      title: "Virtual Office Address",
      description:
        "Foster customer relationships by effectively serving your market.",
    },
    {
      icon: Boxes,
      title: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
    },
    {
      icon: ShoppingCart,
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
    },
    {
      icon: Calculator,
      title: "Bookkeeping Services",
      description:
        "Steering user behaviours with creative design, data insights & technology.",
    },
  ];

  return (
    <section className="w-full px-4 mx-auto items-center justify-center bg-orange-50/50 py-10">
      <div className="max-w-7xl w-full mx-auto justify-center items-center">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="text-orange-500 font-medium tracking-wide uppercase">
              WELCOME TO REGISTERKARO.IN
            </h3>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Services
            </h2>
          </div>
        </div>
        <div className="mx-auto grid gap-6 grid-cols-1 items-center justify-center lg:grid-cols-3  mt-12 w-full relative">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <Card className="h-full items-center w-full justify-center mx-auto">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 mb-4">
                    <service.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </CardHeader>
                <CardContent className="gap-10 flex flex-col">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="flex gap-2 items-center">
                    <Button
                      variant="link"
                      className=" p-0 h-auto font-semibold">
                      Learn more
                    </Button>
                    <ArrowRightCircle size={20} />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            variant="default"
            size="lg"
            className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
            See All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
