import { Card, CardContent } from "@/components/ui/card";
import { Shield, SmilePlus, UserCheck, CheckCircle } from "lucide-react";
import { GrSecure } from "react-icons/gr";

export default function ChooseSection() {
  const features = [
    {
      icon: Shield,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-red-50",
      iconColor: "text-orange-500",
    },
    {
      icon: CheckCircle,
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: SmilePlus,
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: GrSecure,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-green-50",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <section className="w-full h-full py-10 px-4 flex">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
          <div className=" max-w-[800px] flex-col gap-6  justify-between flex lg:items-end ">
            <div className="flex flex-col space-y-6">
              <h3 className="text-orange-500 font-medium tracking-wide uppercase">
                WHY REGISTERKARO.IN
              </h3>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Register Karo
              </h2>
              <p className="text-gray-700 max-w-[600px]">
                It is with consistent services and results that build trust with
                the people and that in turn help us to serve the business
                better.
              </p>
            </div>
            <Card className="border-none bg-red-50 lg:w-1/2">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <UserCheck className="text-red-500 w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Expert CA/CS Assistance
                </h3>
                <p className="text-gray-600">
                  Prompt support from our in-house expert professionals
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid cols-1 gap-4 lg:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className={`border-none ${feature.bgColor}`}>
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <feature.icon
                      className={`w-12 h-12 ${feature.iconColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
