import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Activity, Calendar, Trophy, Heart } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "实时追踪",
    description: "精确记录运动数据，包括步数、距离、卡路里消耗等",
  },
  {
    icon: Calendar,
    title: "训练计划",
    description: "个性化的训练计划，帮助你循序渐进达成目标",
  },
  {
    icon: Trophy,
    title: "成就系统",
    description: "完成目标获得奖励，激励你保持运动习惯",
  },
  {
    icon: Heart,
    title: "健康监测",
    description: "全面监测身体状况，包括心率、睡眠质量等指标",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-muted px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Typography.H2>强大功能，助力健康</Typography.H2>
          <Typography.Lead className="mt-4">
            全方位的健身追踪功能，让运动更有效率
          </Typography.Lead>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2">
              <CardHeader>
                <feature.icon className="size-12 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography.P>{feature.description}</Typography.P>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}