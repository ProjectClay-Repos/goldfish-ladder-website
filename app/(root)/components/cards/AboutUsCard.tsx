import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUsCard = () => {
  return (
    <Card className="border-2 shadow-md">
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold">
          Lorem Ipsum
        </h3>
        <p className="text-gray-600">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutUsCard;
