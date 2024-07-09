"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

interface ChartProps {
  data: {
    date: string;
    revenue: number;
  }[];
}

const aggregateData = (data: any) => {
  const aggregated = data.reduce((acc: any, curr: any) => {
    if (acc[curr.date]) {
      acc[curr.date] += curr.revenue;
    } else {
      acc[curr.date] = curr.revenue;
    }

    return acc;
  }, {});

  return Object.keys(aggregated).map((date) => ({
    date,
    revenue: aggregated[date],
  }));
};

const chartConfig = {
  revenue: {
    label: "Revenue (£)",
    color: "#FF0090",
  },
};

export function Chart({ data }: ChartProps) {
  const processedData = aggregateData(data);

  return (
    <ChartContainer config={chartConfig} className="w-full h-[350px]">
      <BarChart accessibilityLayer data={processedData}>
        <CartesianGrid vertical={false} />
        <YAxis dataKey="revenue" tickLine={false} tickMargin={10} axisLine={false} />
        <XAxis dataKey="date" tickLine={false} tickMargin={10} axisLine={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="#FF0090" />
      </BarChart>
    </ChartContainer>
  );
}
