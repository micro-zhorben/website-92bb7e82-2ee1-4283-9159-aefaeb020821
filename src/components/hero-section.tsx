import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Download, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="grid min-h-[80vh] grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <Typography.H1>
          追踪你的健身之旅
          <br />
          <span className="text-primary">实现你的目标</span>
        </Typography.H1>
        <Typography.Lead>
          专业的健身追踪应用，帮助你记录运动数据，制定训练计划，实现健康生活。
        </Typography.Lead>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="gap-2">
            <Download className="text-primary-foreground" />
            立即下载
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-foreground">
            了解更多
            <ArrowRight className="text-foreground" />
          </Button>
        </div>
      </div>
      <div className="relative aspect-square w-full max-w-[500px] justify-self-center rounded-2xl bg-muted p-2">
        <img
          src="/placeholder.svg"
          alt="应用界面预览"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
}